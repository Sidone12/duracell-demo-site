<template>
    <div class="px-5 lg:px-10 pb-6 text-center text-white hover:scale-110 hover:text-[#c98959]  transition-all duration-500">
        <NuxtImg :src="img" class="w-full mb-5" />
        <h2 class="text-2xl font-semibold">{{ text }}</h2>
    </div>
</template>

<script setup>
const props = defineProps({
    text: String,
    img: String
})
</script>

<style lang="scss" scoped>

</style>