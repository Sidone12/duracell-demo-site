<template>
    <div>
        <div class="flex items-center py-4 justify-between" @click="toggleActive">
            <h2 class="lg:text-xl text-md tracking-tighter font-semibold h-full text-brand-hover">
                {{ heading.toLocaleUpperCase() }}
            </h2>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" :style="{ transform: active ? 'rotate(90deg)' : '' }"
                    width="24px" height="24px" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="m8.006 21.308l-1.064-1.064L15.187 12L6.942 3.756l1.064-1.064L17.313 12z"></path>
                </svg>
            </div>
        </div>
        <transition name="info-fade" mode="out-in">
            <div v-if="active" class="my-3 lg:my-5 ml-8">
                <slot></slot>
            </div>
        </transition>
        <div class="border-b border-white"></div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    heading: String
})
const active = ref<boolean>(false)

const toggleActive = (): void => {
    active.value = !active.value
}
</script>

<style scoped>
.info-fade-enter-active {
    transition: opacity 0.7s, transform 0.7s;
}

.info-fade-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}

.info-fade-enter-from,
.info-fade-leave-to {
    opacity: 0;
    transform: translateY(-20%);
}
</style>