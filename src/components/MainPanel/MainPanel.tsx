import { createSignal, For, Suspense } from 'solid-js';
import { TaskCard } from '../TaskCard/TaskCard';
import { useGetTasks } from './hooks/useTasksQuery';
import { TimerToggle } from '../TimerToggle';
import { TaskCreationButton } from '../TaskCreationButton';

export const MainPanel = () => {
  const [isFocusModeOn, setIsFocusModeOn] = createSignal(false);
  const query = useGetTasks();

  return (
    <Suspense
      fallback={<div class="w-full flex justify-center">Loading...</div>}
    >
      <div class="bg-white w-full p-[2rem] min-h-[90vh] rounded-2xl flex flex-col gap-3">
        <div class="flex justify-between items-center mb-[60px]">
          <h1 class="text-4xl text-black font-bold">Today Tasks</h1>

          <div class="flex gap-5">
            <TaskCreationButton />
            <TimerToggle value={isFocusModeOn()} onChange={setIsFocusModeOn} />
          </div>
        </div>

        <For
          each={query.data}
          fallback={
            <div class="flex justify-center text-xl">Здесь пока пусто</div>
          }
        >
          {(task) => (
            <TaskCard
              isHidden={isFocusModeOn() && task.isCompleted}
              task={task}
            />
          )}
        </For>
      </div>
    </Suspense>
  );
};
