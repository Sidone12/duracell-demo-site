<template>
    <div class="bg-black pt-5 sm:pt-5 pb-16">
        <Divider />
        <div class="mx-auto max-w-7xl pt-8 grid grid-cols-1 md:grid-cols-12 text-white">
            <div class="col-span-5 px-4">
                <nav>
                    <ul class="">
                        <li v-for="nav in navigation" class="hover:text-[#c98959]  transition-all duration-500">
                            <NuxtLink :target="nav.target" :to="nav.link">{{ nav.text }}</NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col-span-2 px-4 flex justify-center">
                <NuxtImg src="/duracell-williams-logo.svg" class=" md:w-full mb-5 w-1/3" />
            </div>
            <div class="col-span-5 pt-6 px-4 md:pt-0 md:text-right text-center text-md font-semibold">
                <span>Copyright © 2024 Duracell Inc. Wszelkie prawa zastrzeżone.</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

interface NavigationItem {
    text: string;
    link: string;
    target?: string;
}

const navigation = ref<NavigationItem[]>([
    { text: 'Home', link: '/' },
    { text: 'Check out the rewards', link: '/rewards' },
    { text: 'Frequently asked questions', link: '/faq' },
    { text: 'Terms and conditions', link: 'https://duracellscanwin.com/assets/documents/terms-and-conditions_pl-pl.pdf', target: '_blanck' },
    { text: 'Privacy Policy', link: 'https://www.duracell.pl/polityka-prywatnosci/', target: '_blanck' },
])
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

li:before {
    content: "•";
    /* Замінюємо маркер на позначку ✔ */
    color: #c98959;
    /* Задаємо рожевий колір */
    padding-right: 10px;
    /* Додаємо відступ між маркером та текстом */
}

@media screen and (max-width: 769px) and (min-width: 1px) {
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 40px;
    }

    li:before {
        content: none;
        /* Замінюємо маркер на позначку ✔ */
        /* Задаємо рожевий колір */
        padding-right: 0;
        /* Додаємо відступ між маркером та текстом */
    }
}
</style>