<template>
    <main class="bg-black w-full py-16 text-white">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-7xl">
                <div class="flex flex-col lg:flex-row">
                    <div class="lg:w-2/3 px-4">
                        <div>
                            <h1 class=" text-4xl lg:text-6xl pb-3">Check out the rewards</h1>
                            <h2 class=" text-3xl md:text-4xl lg:text-5xl  pb-3">2x Trip for 2 people to a bolide race
                            </h2>
                            <div class="flex w-full flex-col md:flex-row">
                                <div class="md:w-1/2">
                                    <p class="md:text-lg lg:text-xl ">A trip for 2 people to Italy on August 31, 2024 -
                                        September 2,
                                        2024 with tickets for
                                        the bolide race at Monza. The prize includes hotel accommodation in Milan for
                                        two
                                        nights, air travel and pocket money of PLN 1,000 per couple.</p>
                                </div>
                                <div class="pt-5 md:pt-0 md:w-1/2 relative">
                                    <NuxtImg src="../public/YXNzZXRzL3ByaXplcy9wcml6ZV9tb256YS1wbC1wbC5wbmc=.png"
                                        class="w-full mb-5" />
                                    <div
                                        class=" text-4xl rounded-full bg-[#c98959] absolute top-1 right-2 w-20 h-20 justify-center items-center flex">
                                        4x
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div>
                            <h2 class=" text-3xl md:text-4xl lg:text-5xl  pb-3">lub 20x Czapka Williams 2024</h2>
                            <div class="flex flex-col w-full md:flex-row">
                                <div class="md:w-1/2 relative">
                                    <NuxtImg src="../public/YXNzZXRzL3ByaXplcy9wcml6ZV9jYXBzLnBuZw==.png"
                                        class="w-full mb-5" />
                                    <div
                                        class=" text-4xl rounded-full bg-[#c98959] absolute top-1 right-2 w-20 h-20 justify-center items-center flex">
                                        12x
                                    </div>
                                </div>
                                <div class="md:w-1/2">
                                    <p class="md:text-lg lg:text-xl">Czapka teamu Williams z kolekcji z 2024 roku.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex w-full pt-16 lg:flex-col lg:w-1/3 lg:mt-0">
                        <BunnyImg :text="'Home'" :img="'/YXNzZXRzL2JyYW5kaW5nL2J1bm55LWJ1dHRvbl9wcml6ZS5wbmc=.png'" />
                        <BunnyImg :text="'Check out the rewards'"
                            :img="'/YXNzZXRzL2JyYW5kaW5nL2J1bm55LWJ1dHRvbl9wcml6ZS5wbmc=.png'" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
useHead({
    title: 'Rewards'
})
</script>
<style scoped>
main {
    box-shadow: inset 0 300px 150px -150px #000, inset 0 -300px 150px -150px #000;
    background-image: url('../public/bg-carbon_repeat-430da24f.jpg');
}
</style>