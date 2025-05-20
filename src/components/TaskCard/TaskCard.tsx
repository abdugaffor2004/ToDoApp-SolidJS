import { IconTrash } from '@tabler/icons-solidjs';
import { createSignal } from 'solid-js';
import { BadgeSelect, type Priority } from '../BadgeSelect/BadgeSelect';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  isCompleted: boolean;
}

interface TaskProps {
  task: Task;
}

export const PRIORITIES: Priority[] = ['low', 'medium', 'high'];

export const TaskCard = (props: TaskProps) => {
  const [checked, setIsChecked] = createSignal(props.task.isCompleted);
  const [isOpen, setIsOpen] = createSignal(false);
  const hasDescription = props.task.description;

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
            checked={checked()}
            type="checkbox"
            class="checkbox checkbox-primary mr-2 align-middle rounded-sm"
            onClick={(e) => {
              e.stopPropagation();
              setIsChecked((prev) => !prev);
            }}
          />
          <h3 class="text-xl">{props.task.title} </h3>
        </div>

        <div
          onClick={(e) => e.stopPropagation()}
          class="flex gap-4 items-center"
        >
          <BadgeSelect options={PRIORITIES} value={props.task.priority} />
          <button class="btn btn-square bg-transparent border-0 hover:bg-red-100">
            <IconTrash color="red" />
          </button>
        </div>
      </div>

      <div class="collapse-content text-md">{props.task.description}</div>
    </div>
  );
};
