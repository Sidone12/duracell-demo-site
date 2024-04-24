<script setup>
useHead({
  title: 'Home'
})
</script>


<template>
<main class="bg-black w-full py-16 text-white">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-7xl">
            <div class="flex flex-col lg:flex-row">
                <div class="lg:w-2/3 lg:px-4">
                    <Form />
                </div>
                <div class="flex w-full pt-16 lg:flex-col lg:w-1/3 lg:mt-0">
                    <BunnyImg :text="'Home'" :img="'/YXNzZXRzL2JyYW5kaW5nL2J1bm55LWJ1dHRvbl9wcml6ZS5wbmc=.png'" />
                    <BunnyImg :text="'Check out the rewards'" :img="'/YXNzZXRzL2JyYW5kaW5nL2J1bm55LWJ1dHRvbl9wcml6ZS5wbmc=.png'" />
                </div>
            </div>
        </div>
    </div>
</main>
</template>


<style scoped>
main {
    box-shadow: inset 0 300px 150px -150px #000, inset 0 -300px 150px -150px #000;
    background-image: url('../public/bg-carbon_repeat-430da24f.jpg');
}
</style>