<template>
<div class="pt-4 px-4">
    <form>
        <div class="field">
            <p>Task Name</p>
            <input type="text">
        </div>
        <div class="field">
            <p>Description</p>
            <textarea
                rows="5"
                cols="33"
            />

            <div class="flex flex-row gap-8 mt-4">
                <div class="field">
                    <p>Start Date</p>
                    <input type="datetime-local">
                </div>
                <div class="field">
                    <p>End Date</p>
                    <input
                        type="datetime-local"
                        placeholder="Enter your email address"
                    >
                </div>
            </div>
            <div class="flex justify-end gap-2 mt-6">
                <button
                    class="underline font-semibold text-slate-800"
                    @click="closeForm"
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
const props = withDefaults(defineProps<{
    edit: boolean,
}>(), {
    edit: false
})

const emit = defineEmits(['close']);


const closeForm = () => {
    emit('close');
};

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