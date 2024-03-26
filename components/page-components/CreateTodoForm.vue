<template>
<div class="pt-4 px-4">
    <form @submit.prevent="onSubmit">
        <div class="field">
            <p>Task Name</p>
            <input
                type="text"
                v-model="formData.name"
                required
            >
        </div>
        <div class="field">
            <p>Description</p>
            <textarea
                rows="5"
                cols="33"
                v-model="formData.description"
                required
            />

            <div class="flex flex-row gap-8 mt-4">
                <div class="field">
                    <p>Start Date</p>
                    <input
                        type="datetime-local"
                        v-model="formData.start_date"
                        required
                    >
                </div>
                <div class="field">
                    <p>End Date</p>
                    <input
                        type="datetime-local"
                        placeholder="Enter your email address"
                        v-model="formData.end_date"
                        required
                    >
                </div>
            </div>
            <div class="flex justify-end gap-2 mt-6">
                <button
                    class="underline font-semibold text-slate-800"
                    @click="closeForm"
                    type="button"
                >
                    Cancel
                </button>
                <button
                    class="btn-filled !bg-positive !outline-positive"
                    type="submit"
                >
                    {{ edit ? 'Save' : 'Create' }}
                </button>
            </div>
        </div>

    </form>
</div>
</template>

<script
    setup
    lang="ts"
>
import { type Todo } from "~~/types/todo";
import { useTodoStore } from "~~/store/todo";
const { $_, $dayjs } = useNuxtApp()

const todoStore = useTodoStore();
const { todoList } = storeToRefs(todoStore);


const props = withDefaults(defineProps<{
    edit?: boolean,
    submitHandler: Function
    taskDetails?: Todo
}>(), {
    edit: false,
    taskDetails: () => ({
        id: null,
        name: null,
        description: null,
        time_left: null,
        start_date: null,
        end_date: null,
        created_at: null,
    })
})

const formData = reactive($_.cloneDeep(props.taskDetails))
const originalValues = $_.cloneDeep(props.taskDetails)
const changedValues: Ref<Partial<Todo> | null> = ref(null)
const emit = defineEmits(['close']);

watch(formData, (newValue) => {
    changedValues.value = $_.pickBy(newValue, (value, key) => {
        return !$_.isEqual(value, originalValues[key as keyof Todo]);
    });
})


const closeForm = () => {
    emit('close');
};

async function onSubmit() {
    let startDate = $dayjs(formData.start_date)
    let endDate = $dayjs(formData.end_date)
    let timeLeft = endDate.diff(startDate)
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let timeLeftStr = '';
    if (days > 0) {
        timeLeftStr += `${days} day${days > 1 ? 's' : ''}, `;
    }
    if (hours > 0 || days > 0) {
        timeLeftStr += `${hours} hr${hours > 1 ? 's' : ''}, `;
    }
    timeLeftStr += `${minutes} min${minutes > 1 ? 's' : ''}`;

    if (props.edit) {
        let todoId = formData.id

        const payload = { ...changedValues.value, time_left: timeLeftStr, }
        props.submitHandler(payload, todoId)
    } else {
        let dateNow = new Date();
        let id = todoList.value.length

        const payload: Todo = {
            ...formData,
            id: id++,
            time_left: timeLeftStr,
            created_at: $dayjs(dateNow).format('MMM D, YYYY hh:mm A')
        }
        props.submitHandler(payload)
    }
}

</script>

<style
    lang="postcss"
    scoped
>
.field {
    @apply flex flex-col mb-4
}

input, textarea {
    @apply bg-transparent focus:outline-none border border-slate-300 rounded-md p-2
}

p {
    @apply font-bold pb-1 text-xs
}
</style>