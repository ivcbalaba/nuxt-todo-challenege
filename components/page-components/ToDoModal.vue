<template>
<transition name="fade">
    <div
        v-if="show"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
        <div class="bg-white rounded-lg">
            <div
                class="bg-primary rounded-t-lg h-14 p-0 m-0 text-white font-semibold flex flex-row justify-between items-center px-4">
                {{ title }}
                <span
                    @click="closeModal"
                    class="cursor-pointer"
                >
                    <Icon
                        icon="material-symbols:close"
                        height="18"
                    />
                </span>
            </div>
            <div class="bg-white rounded-lg overflow-auto">
                <slot name="modal-body"></slot>
            </div>
            <div
                v-if="isDelete"
                class="flex justify-end gap-2 mb-4 mr-4"
            >
                <button
                    class="underline font-regular text-slate-800"
                    @click="closeModal"
                >
                    Cancel
                </button>
                <button
                    class="btn-filled !bg-negative !outline-negative"
                    @click="confirmAction"
                >
                    Delete
                </button>
            </div>
        </div>
    </div>
</transition>
</template>

<script
    setup
    lang="ts"
>

const props = withDefaults(defineProps<{
    show: boolean,
    title?: string,
    isDelete?: boolean
}>(), {
    show: false,
    isDelete: false
})

const emit = defineEmits(['close', 'confirm']);

const closeModal = () => {
    emit('close');
};

const confirmAction = () => {
    emit('confirm');
};
</script>