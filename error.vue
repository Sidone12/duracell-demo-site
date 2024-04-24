<template>
    <div class="bg-black w-full py-16 text-white flex justify-center items-center h-screen">
        <div class="flex">
            <NuxtImg src="/error.png" class="w-1/3 mr-5" />
            <div class="">
                <h1 class="text-9xl font-semibold ">{{ error.statusCode }}</h1>
                <p class="my-7 text-4xl">{{ error.message }}</p>
                <button @click="handlError"
                    class="bg-[#c98959] border-2 rounded-full border-solid border-[#c98959] px-8 py-3 hover:bg-black transition-all duration-500">Go back</button>
            </div>
        </div>

    </div>
</template>

<script setup>
const error = useError()

const handlError = () => {
    clearError({
        redirect: '/'
    })
}
</script>
