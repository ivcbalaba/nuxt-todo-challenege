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
            <tr>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
            </tr>
            <tr>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
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
        <CreateTodoForm @close="showModal = false" />
    </template>
</ToDoModal>
</template>

<script
    setup
    lang="ts"
>
import { type Ref } from "vue";
const { $_, $dayjs } = useNuxtApp()

const showModal: Ref<boolean> = ref(false)
const sortVisible: Ref<boolean> = ref(false);


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
    @apply pl-4
}
</style>
