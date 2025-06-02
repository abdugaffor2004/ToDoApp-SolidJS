import { useMutation, useQuery, useQueryClient } from '@tanstack/solid-query';
import type { Task } from '../../../types/Task';
import type { TaskFormValues } from '../../../types/TaskFormValue';

const BASE_URL = 'http://localhost:3000';

const getTasks = 'get-tasks';
const createTask = 'create-task';
const updateTask = 'update-task';
const deleteTask = 'delete-task';

export const useGetTasks = () => {
  return useQuery<Task[]>(() => ({
    queryKey: [getTasks],
    queryFn: async () => {
      const result = await fetch(`${BASE_URL}/tasks`);

      return result.json();
    },
    throwOnError: true,
  }));
};

export const usePostTask = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, TaskFormValues>(() => ({
    mutationKey: [createTask],
    mutationFn: async (payload) => {
      await fetch(`${BASE_URL}/tasks`, {
        method: 'POST',
        body: JSON.stringify(payload),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [getTasks] });
    },
    throwOnError: true,
  }));
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>(() => ({
    mutationKey: [deleteTask],
    mutationFn: async (id) => {
      await fetch(`${BASE_URL}/tasks/${id}`, {
        method: 'DELETE',
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [getTasks] });
    },
  }));
};

interface usePutTaskParams {
  id: string;
  payload: TaskFormValues;
}

export const usePutTask = () => {
  return useMutation<void, Error, usePutTaskParams>(() => ({
    mutationKey: [updateTask],
    mutationFn: async ({ id, payload }) => {
      await fetch(`${BASE_URL}/tasks/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
      });
    },
  }));
};
