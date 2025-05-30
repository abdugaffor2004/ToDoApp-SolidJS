import type { Task } from "./Task";

export type TaskFormValues = Omit<Task, 'id'>;
