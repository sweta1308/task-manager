import { ReactNode, SetStateAction } from "react";

type TaskProps = {
  _id?: string;
  name?: string;
  summary?: string;
  startDate?: string;
  endDate?: string;
  priority?: string;
  status?: string;
  assignee?: string;
  taskType?: string;
};

type FilterProps = {
  searchInput?: string;
  priority?: string;
  selectedTime?: string;
};

type TaskProviderProps = {
  children: ReactNode;
};

type TaskContextProps = {
  filteredTask?: TaskProps[];
  isLoading?: boolean;
  addTask?: (taskData: TaskProps) => void;
  updateTask?: (taskId: string, updatedData: TaskProps) => void;
  deleteTask?: (taskId: string) => void;
  filters?: FilterProps;
  setFilters?: React.Dispatch<SetStateAction<FilterProps>>;
};

export type { TaskProps, FilterProps, TaskContextProps, TaskProviderProps };
