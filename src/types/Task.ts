import type { Priority } from '../components/BadgeSelect/BadgeSelect';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  isCompleted: boolean;
}
