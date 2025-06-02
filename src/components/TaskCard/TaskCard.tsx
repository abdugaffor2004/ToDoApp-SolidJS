import { IconTrash } from '@tabler/icons-solidjs';
import { createEffect, createSignal } from 'solid-js';
import { BadgeSelect, type Priority } from '../BadgeSelect/BadgeSelect';
import type { Task } from '../../types/Task';
import { useDeleteTask, usePutTask } from '../MainPanel/hooks/useTasksQuery';
import { createStore } from 'solid-js/store';
import { Input } from '../Input';
import { Textarea } from '../Textarea';

interface TaskProps {
  task: Task;
}

export const PRIORITIES: Priority[] = ['low', 'medium', 'high'];

export const TaskCard = (props: TaskProps) => {
  const [isOpen, setIsOpen] = createSignal(false);
  const [isTitleEditable, setIsTitleEditable] = createSignal(false);
  const [isDescriptionEditable, setIsDescriptionEditable] = createSignal(false);

  const [store, setStore] = createStore<Task>(props.task);
  const hasDescription = store.description;

  const { mutate: deleteTask } = useDeleteTask();
  const { mutate: updateTask } = usePutTask();

  createEffect(() => {
    updateTask({ id: store.id, payload: { ...store } });
  });

  return (
    <div
      class={`collapse bg-base-100 border border-base-300 shadow-xs ${
        hasDescription && 'collapse-arrow'
      }  ${isOpen() && hasDescription ? 'collapse-open' : 'collapse-close'}`}
    >
      <div
        class="collapse-title font-semibold cursor-pointer flex justify-between"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div class="flex items-center gap-3">
          <input
            checked={store.isCompleted}
            type="checkbox"
            class="checkbox checkbox-primary mr-2 align-middle rounded-sm"
            onClick={(e) => {
              e.stopPropagation();
              setStore('isCompleted', !store.isCompleted);
            }}
          />

          {isTitleEditable() ? (
            <Input
              autofocus
              onClick={(e) => e.stopPropagation()}
              onBlur={() => setIsTitleEditable(false)}
              class="input input-sm focus:border-0"
              value={store.title}
              onChange={(e) => setStore('title', e.currentTarget.value)}
            />
          ) : (
            <h3
              onClick={(e) => e.stopPropagation()}
              onDblClick={() => setIsTitleEditable(true)}
              class="text-xl"
            >
              {props.task.title}
            </h3>
          )}
        </div>

        <div
          onClick={(e) => e.stopPropagation()}
          class="flex gap-4 items-center"
        >
          <BadgeSelect
            onChange={(priorityValue) => setStore('priority', priorityValue)}
            options={PRIORITIES}
            value={store.priority}
          />
          <button
            onClick={() => deleteTask(props.task.id)}
            class="btn btn-square bg-transparent border-0 hover:bg-red-100"
          >
            <IconTrash color="red" />
          </button>
        </div>
      </div>

      <div class="collapse-content text-md">
        {isDescriptionEditable() ? (
          <Textarea
            autofocus
            value={store.description}
            onBlur={() => setIsDescriptionEditable(false)}
            onChange={(e) => setStore('description', e.currentTarget.value)}
            class="textarea focus:border-0"
          />
        ) : (
          <p
            onClick={(e) => e.stopPropagation()}
            onDblClick={() => setIsDescriptionEditable(true)}
          >
            {props.task.description}
          </p>
        )}
      </div>
    </div>
  );
};
