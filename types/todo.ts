export interface TodoState {
  todoList: Array<Todo>;
}

export interface Todo {
  id: number | null;
  name: string | null;
  description: string | null;
  // time_left: number | string | null;
  start_date: Date | string | null;
  end_date: Date | string | null;
  created_at: Date | string | null;
}
