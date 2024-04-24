<template>
<main class="bg-black w-full py-16 text-white">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-7xl">
            <div class="flex flex-col lg:flex-row">
                <div class="lg:w-2/3 px-4">
                    <h1 class=" text-2xl md:text-4xl lg:text-6xl mb-4">Frequently asked questions</h1>
                    <div class=" border-b border-white "></div>
                    <div v-for="faq in faqs">
                        <ToggleInfo :heading="faq.text">
                            <p>{{ faq.paragraph }}</p>
                        </ToggleInfo>
                    </div>
                </div>
                <div class="flex flex-row mt-10 lg:mt-0 lg:flex-col lg:w-1/3">
                    <BunnyImg :text="'Home'" :img="'/YXNzZXRzL2JyYW5kaW5nL2J1bm55LWJ1dHRvbl9wcml6ZS5wbmc=.png'" />
                    <BunnyImg :text="'Check out the rewards'" :img="'/YXNzZXRzL2JyYW5kaW5nL2J1bm55LWJ1dHRvbl9wcml6ZS5wbmc=.png'" />
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<script setup>
useHead({
    title: 'Frequently asked questions'
})

const faqs = [
    { text: 'What do you need to do to have a chance to win race tickets?', paragraph: "Purchase a Duracell product during the promotional period, keep your proof of purchase and enter your details at duracellscanwin.com. Additionally, send your most interesting answer to the following question/topic: What drives you? Maybe it's a passion for car racing or another sport, cooking, or maybe social involvement? Express your answer in the most interesting way possible." },
    { text: 'What do you need to do to have a chance to win race tickets?', paragraph: "Purchase a Duracell product during the promotional period, keep your proof of purchase and enter your details at duracellscanwin.com. Additionally, send your most interesting answer to the following question/topic: What drives you? Maybe it's a passion for car racing or another sport, cooking, or maybe social involvement? Express your answer in the most interesting way possible." },
    { text: 'What do you need to do to have a chance to win race tickets?', paragraph: "Purchase a Duracell product during the promotional period, keep your proof of purchase and enter your details at duracellscanwin.com. Additionally, send your most interesting answer to the following question/topic: What drives you? Maybe it's a passion for car racing or another sport, cooking, or maybe social involvement? Express your answer in the most interesting way possible." },
    { text: 'What do you need to do to have a chance to win race tickets?', paragraph: "Purchase a Duracell product during the promotional period, keep your proof of purchase and enter your details at duracellscanwin.com. Additionally, send your most interesting answer to the following question/topic: What drives you? Maybe it's a passion for car racing or another sport, cooking, or maybe social involvement? Express your answer in the most interesting way possible." },
    { text: 'What do you need to do to have a chance to win race tickets?', paragraph: "Purchase a Duracell product during the promotional period, keep your proof of purchase and enter your details at duracellscanwin.com. Additionally, send your most interesting answer to the following question/topic: What drives you? Maybe it's a passion for car racing or another sport, cooking, or maybe social involvement? Express your answer in the most interesting way possible." },
    { text: 'What do you need to do to have a chance to win race tickets?', paragraph: "Purchase a Duracell product during the promotional period, keep your proof of purchase and enter your details at duracellscanwin.com. Additionally, send your most interesting answer to the following question/topic: What drives you? Maybe it's a passion for car racing or another sport, cooking, or maybe social involvement? Express your answer in the most interesting way possible." },
    { text: 'What do you need to do to have a chance to win race tickets?', paragraph: "Purchase a Duracell product during the promotional period, keep your proof of purchase and enter your details at duracellscanwin.com. Additionally, send your most interesting answer to the following question/topic: What drives you? Maybe it's a passion for car racing or another sport, cooking, or maybe social involvement? Express your answer in the most interesting way possible." },
    { text: 'What do you need to do to have a chance to win race tickets?', paragraph: "Purchase a Duracell product during the promotional period, keep your proof of purchase and enter your details at duracellscanwin.com. Additionally, send your most interesting answer to the following question/topic: What drives you? Maybe it's a passion for car racing or another sport, cooking, or maybe social involvement? Express your answer in the most interesting way possible." },
]
</script>

<style scoped>
main {
    box-shadow: inset 0 300px 150px -150px #000, inset 0 -300px 150px -150px #000;
    background-image: url('../public/bg-carbon_repeat-430da24f.jpg');
}
</style>