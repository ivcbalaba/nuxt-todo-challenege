import { defineStore } from "pinia";
import { type TodoState, type Todo } from "~/types/todo";
export const useTodoStore = defineStore({
  id: "todo",
  state: (): TodoState => {
    return {
      todoList: [],
    };
  },
  actions: {
    create(item: Todo) {
      this.todoList.push(item);
      console.log(this.todoList);
    },
    //   delete(itemId) {
    //     this.todoList = this.todoList.filter((object) => {
    //       object.id !== itemId;
    //     });
    //   },
    //   toggleCompleted(idToFind) {
    //     const todo = this.todoList.find((obj) => obj.id == idToFind);
    //     if (todo) {
    //       todo.completed = !todo.completed;
    //     }
    //   },
    // },
  },
});
