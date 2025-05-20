import { IconPlus } from '@tabler/icons-solidjs';
import { TimerToggle } from '../TimerToggle';

export const MainPanelTopSection = () => (
  <div class="flex justify-between items-center mb-[60px]">
    <h1 class="text-4xl text-black font-bold ">Today Tasks</h1>

    <div class="flex gap-5">
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
            <input type="text" class="input input-sm focus:border-0" />
          </fieldset>

          <fieldset class="fieldset">
            <legend class="fieldset-legend text-[12px]">Description</legend>
            <textarea class="textarea focus:border-0" />
          </fieldset>
        </ul>
      </div>

      <TimerToggle />
    </div>
  </div>
);
