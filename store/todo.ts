import { defineStore } from "pinia";
import { type TodoState, type Todo } from "~/types/todo";

export const useTodoStore = defineStore({
  id: "todo",
  persist: true,
  state: (): TodoState => {
    return {
      todoList: [
        {
          id: 0,
          name: "Develop a Mobile App Prototype",
          description:
            "Develop a mobile app prototype by outlining key features and creating wireframes.",
          // time_left: "3 hrs 30mins",
          start_date: "Feb 14, 2023 09:30 AM",
          end_date: "Feb 14, 2023 12:30 PM",
          created_at: "Feb 13, 2023 5:00 PM",
        },
      ],
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
