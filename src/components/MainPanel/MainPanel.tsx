import { ErrorBoundary, For, Suspense } from 'solid-js';
import { MainPanelTopSection } from './MainPanelTopSection';
import { TaskCard } from '../TaskCard/TaskCard';
import { useGetTasks } from './hooks/useTasksQuery';

export const MainPanel = () => {
  const query = useGetTasks();
  return (
    <ErrorBoundary fallback={'Что-то пошло не так'}>
      <Suspense fallback={'Loading...'}>
        <div class="bg-white w-full p-[2rem] min-h-[90vh] rounded-2xl flex flex-col gap-3">
          <MainPanelTopSection />

          <For each={query.data}>{(task) => <TaskCard task={task} />}</For>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};
