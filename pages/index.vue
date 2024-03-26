<template>
<div class=" bg-white flex flex-row justify-between m-10 p-8">
    <h1>To-Do List</h1>
    <div class="flex gap-4 ">
        <div>
            <button
                class="btn-outline flex flex-row items-center gap-1"
                @click="sortVisible = !sortVisible"
            >
                Sort By
                <Icon icon="fe:arrow-down" />
            </button>
            <div
                v-show="sortVisible"
                class="dropdown-menu absolute z-50 mt-1 w-48 bg-white shadow-lg border border-gray-200 rounded-md p-2"
            >
                <div class="pb-1">Task Name: A - Z</div>
                <div class="pb-1">Task Name: Z - A</div>
                <div class="pb-1">Date Created: ASC</div>
                <div class="pb-1">Date Created: DESC</div>
            </div>
        </div>
        <button
            class="btn-filled flex flex-row items-center gap-1"
            @click="showModal = true"
        >
            <Icon icon="ic:baseline-plus" /> Add Task
        </button>
    </div>
</div>

<div class="bg-white m-10 ">
    <table class="w-full">
        <thead>
            <tr>
                <th>Task Name</th>
                <th>Description</th>
                <th>Time Left</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Created At</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="todoList.length == 0">
                <td
                    colspan="12"
                    align="center"
                >Your to do list is empty.</td>
            </tr>
            <tr
                v-else
                v-for="todo in todoList"
            >
                <td>{{ todo.name }}</td>
                <td>{{ todo.description }}</td>
                <td>{{ todo.time_left }}</td>
                <td>{{ todo.start_date }}</td>
                <td>{{ todo.end_date }}</td>
                <td>{{ todo.created_at }}</td>
                <td>
                    <div class="flex flex-row gap-2">
                        <button
                            class="actions hover:text-negative"
                            @click="openDeleteModal(todo.id)"
                        >
                            <Icon
                                icon="ph:trash"
                                height="20"
                            />
                        </button>
                        <button
                            class="actions hover:text-success"
                            @click=""
                        >
                            <Icon
                                icon="fe:edit"
                                height="20"
                            />
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<ToDoModal
    :show="showModal"
    title="Create Task"
    @close="showModal = false"
>
    <template #modal-body>
        <CreateTodoForm
            @close="showModal = false"
            :submitHandler="submitHandler"
        />
    </template>
</ToDoModal>
<ToDoModal
    :show="showDeleteModal"
    title="Delete Task"
    @close="showDeleteModal = false"
    @confirm="deleteTask"
    :isDelete="true"
>
    <template #modal-body>
        <div class="m-10">
            Are you sure you want to delete this task?
        </div>
    </template>
</ToDoModal>
</template>

<script
    setup
    lang="ts"
>
import { type Ref } from "vue";
import { type Todo } from "~/types/todo";
import { storeToRefs } from "pinia";
import { useTodoStore } from "~~/store/todo";

const { $dayjs } = useNuxtApp();

const todoStore = useTodoStore();
const { todoList } = storeToRefs(todoStore);

const showModal: Ref<boolean> = ref(false)
const showDeleteModal: Ref<boolean> = ref(false)
const sortVisible: Ref<boolean> = ref(false);
const taskId: Ref<number | null> = ref(null);

function submitHandler(data: Todo) {
    console.log(data)
    todoStore.create(data)
    showModal.value = false;
}

function openDeleteModal(id: number | null) {
    showDeleteModal.value = true;
    taskId.value = id
}

function deleteTask() {
    if (taskId.value !== null) {
        todoStore.delete(taskId.value)
    }
    showDeleteModal.value = false;
}

</script>

<style
    lang="postcss"
    scoped
>
th {
    @apply bg-primary text-sm text-left text-white font-normal p-4;
}

tr {
    @apply shadow-sm
}

td {
    @apply pl-4 py-6
}
</style>
