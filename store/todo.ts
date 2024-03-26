import { defineStore } from "pinia";
import { type TodoState, type Todo } from "~/types/todo";

export const useTodoStore = defineStore({
  id: "todo",
  persist: true,
  state: (): TodoState => {
    return {
      todoList: [],
    };
  },
  actions: {
    create(todo: Todo) {
      this.todoList.push(todo);
    },
    delete(todoId: number) {
      const { $_ } = useNuxtApp();
      console.log("todoId", todoId);
      this.todoList = $_.filter(this.todoList, (todo) => {
        return todo.id !== todoId;
      });
    },
    editById(todoId: number, data: object) {
      const { $_ } = useNuxtApp();
      const index = $_.findIndex(this.todoList, { id: todoId });
      if (index !== -1) {
        this.todoList[index] = { ...this.todoList[index], ...data };
      }
    },
    sort(sortBy: string) {
      const { $_ } = useNuxtApp();
      switch (sortBy) {
        case "A-Z":
          this.todoList = $_.sortBy(this.todoList, ["name"]);
          break;
        case "Z-A":
          let sortedTodo = $_.sortBy(this.todoList, ["name"]);
          this.todoList = $_.reverse(sortedTodo);
          break;
        case "createdAsc":
          this.todoList = $_.sortBy(this.todoList, (todo) => {
            if (typeof todo.created_at === "string") {
              return new Date(todo.created_at);
            }
            return new Date();
          });
          break;
        case "createdDesc":
          let sortedTodoByDate = $_.sortBy(this.todoList, (todo) => {
            if (typeof todo.created_at === "string") {
              return new Date(todo.created_at);
            }
            return new Date();
          });
          this.todoList = $_.reverse(sortedTodoByDate);
          break;
      }
    },
  },
});
