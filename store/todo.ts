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
    create(item: Todo) {
      this.todoList.push(item);
    },
    delete(itemId: number) {
      const { $_ } = useNuxtApp();
      console.log("itemId", itemId);
      this.todoList = $_.filter(this.todoList, (item) => {
        return item.id !== itemId;
      });
    },
    //   toggleCompleted(idToFind) {
    //     const todo = this.todoList.find((obj) => obj.id == idToFind);
    //     if (todo) {
    //       todo.completed = !todo.completed;
    //     }
    //   },
    // },
  },
});
