<template>
<transition name="fade">
    <div
        v-if="show"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
        <div class="bg-white rounded-lg min-h-[50vh] min-w-[60vh]">
            <div
                class="bg-primary rounded-t-lg h-14 p-0 m-0 text-white font-semibold flex flex-row justify-between items-center px-4">
                {{ title }}
                <span @click="closeModal">
                    <Icon
                        icon="material-symbols:close"
                        height="18"
                    />
                </span>
            </div>
            <div class="bg-white rounded-lg overflow-auto">
                <slot name="modal-body"></slot>
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
}>(), {
    show: false
})

const emit = defineEmits(['close']);

const closeModal = () => {
    emit('close');
};

</script>