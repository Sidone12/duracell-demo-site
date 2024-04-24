<template>
<div class="bg-black p-3 flex justify-end">
    <div class="z-20">
        <!-- <label for="checkbox" class="hamburger">
                <input type="checkbox" id="checkbox" @click="toggleNav()">
                <span class="line line-main"></span>
                <span class="line line-split"></span>
            </label> -->
        <div class="hamburger relative w-6 h-2 md:w-8 md:h-8 cursor-pointer" @click="toggleNav()">
            <div :class="{ 'line': true, 'line1-active': isOpen }"></div>
            <div :class="{ 'line': true, 'line2-active': isOpen }"></div>
            <div :class="{ 'line': true, 'line3-active': isOpen }"></div>
        </div>
    </div>
    <transition mode="out-in" name="slide">
        <nav v-if="isOpen" class="bg-[#1e1e1e] w-auto h-screen absolute z-10 p-10 top-0 right-0">
            <div class=" pt-20">
                <ul>
                    <li v-for="nav in navigation" class="hover:text-[#c98959]  transition-all duration-500 text-white font-semibold py-2 text-2xl">
                        <NuxtLink @click="toggleNav()" :target="nav.target" :to="nav.link">{{ nav.text }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>
    </transition>
</div>
</template>

<script setup lang="ts">
interface NavigationItem {
    text: string;
    link: string;
    target ? : string;
}

const navigation = ref < NavigationItem[] > ([
    { text: 'Home', link: '/' },
    { text: 'Check out the rewards', link: '/rewards' },
    { text: 'Frequently asked questions', link: '/faq' },
    { text: 'Terms and conditions', link: 'https://duracellscanwin.com/assets/documents/terms-and-conditions_pl-pl.pdf', target: '_blanck' },
    { text: 'Privacy Policy', link: 'https://www.duracell.pl/polityka-prywatnosci/', target: '_blanck' },
])

const isOpen = ref < boolean > (false)
const toggleNav = (): void => {
    isOpen.value = !isOpen.value
    console.log(isOpen)
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: opacity 1s, transform 0.7s;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateX(50%);
}

ul {
    list-style-type: none;
    padding: 0;
}

li:before {
    content: "•";
    color: #c98959;
    padding-right: 10px;
}

.hamburger> :nth-child(2) {
    top: 10px;
}

.hamburger> :nth-child(3) {
    top: 20px;
}

.line {
    width: 100%;
    height: 2px;
    background-color: #fff;
    position: absolute;
    transition: transform 0.3s, background-color 0.3s;
}

.line1-active {
    transform: translateY(10px) rotate(45deg);
}

.line2-active {
    opacity: 0;
}

.line3-active {
    transform: translateY(-10px) rotate(-45deg);
}

@media screen and (max-width: 480px) and (min-width: 1px) {
    .hamburger> :nth-child(2) {
        top: 5px;
    }
    .hamburger> :nth-child(3) {
        top: 10px;
    }
    .line1-active {
        transform: translateY(5px) rotate(45deg);
    }
    .line3-active {
        transform: translateY(-5px) rotate(-45deg);
    }
}
</style>