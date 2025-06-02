import { IconPlus } from '@tabler/icons-solidjs';
import type { Component } from 'solid-js';
import type { TaskFormValues } from '../../types/TaskFormValue';
import { usePostTask } from '../MainPanel/hooks/useTasksQuery';
import { createStore } from 'solid-js/store';

export const TaskCreationButton: Component = () => {
  const [store, setStore] = createStore<TaskFormValues>({
    title: '',
    description: '',
    isCompleted: false,
    priority: 'low',
  });

  const { mutate: createTask } = usePostTask();

  // Особенность Solid, что мы модем не копировать объект при изменении store. Также сбор данных с форм работает без указания свойства value (не контролируемый вариант)
  // Также еще особенность DaisyUI, что она меняет местами onChange и onInput. Сейчас используя onChage я получаю, то что данне не заносятся в store на каждый символ, а заносятся при unfocus-е

  return (
    <div class="dropdown dropdown-center">
      <button tabindex={0} class="btn btn-primary text-[1rem]">
        <IconPlus size={22} /> Add Task
      </button>

      <ul
        tabIndex={0}
        class="dropdown-content menu bg-white text-black drop-shadow-xl w-[300px] mt-4"
      >
        <fieldset class="fieldset">
          <legend class="fieldset-legend text-[12px]">Title</legend>
          <input
            value={store.title}
            onChange={(e) => setStore('title', () => e.currentTarget.value)}
            type="text"
            class="input input-sm focus:border-0"
          />
        </fieldset>

        <fieldset class="fieldset">
          <legend class="fieldset-legend text-[12px]">Description</legend>
          <textarea
            value={store.description}
            onChange={(e) =>
              setStore('description', () => e.currentTarget.value)
            }
            class="textarea focus:border-0"
          />
        </fieldset>

        <div class="w-full flex justify-end mt-5">
          <button
            type="button"
            onClick={() => createTask({ ...store })}
            class="btn btn-primary"
          >
            Create
          </button>
        </div>
      </ul>
    </div>
  );
};
