import { useQuery } from '@tanstack/solid-query';
import type { Task } from '../../TaskCard/TaskCard';

export const useGetTasks = () => {
  return useQuery<Task[]>(() => ({
    queryKey: ['get-tasks'],
    queryFn: async () => {
      const result = await fetch('http://localhost:3000/tasks');

      return result.json();
    },
    throwOnError: true,
  }));
};
