export interface TodoState {
  todoList: Array<Todo>;
}

export interface Todo {
  id: number;
  name: string;
  description: string;
  time_left: number | string;
  start_date: Date | string;
  end_date: Date | string;
  created_at: Date | string;
}
