<template>
    <header class="px-4 py-5  flex items-center justify-between mx-auto container  bg-[#0f0f0f]">

        <div class="logo z-50">
            <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/logo.svg" alt="">
        </div>

        <nav class="navbar text-gray-500 z-[5] ">
            <ul class=" text-lg  navbarList w-full fixed py-8 md:relative md:flex md:flex-row md:gap-8   gap-6 left-0 top-0 flex items-center flex-col justify-center bg-[#0f0f0f] "
                :class="isActiveMenu ? 'translate-y-17 md:translate-y-0    ' : ''">
                <li><a href="" class="text-white">Home</a></li>
                <li><a href="" class="hover:text-white">About</a></li>
                <li><a href="" class="hover:text-white">Works</a></li>
                <li><a href="" class="hover:text-white">Contact</a></li>
            </ul>

        </nav>

        <div class="showMenu md:hidden flex items-center justify-center flex-col gap-2 z-10" @click="activeMenu()"
            :class="isActiveMenu ? 'active ' : ''">
            <span class="line_1"></span>
            <span class="line_2"></span>
            <span class="line_3"></span>

        </div>

        <div class="talkWithMe hidden  md:block">
            <a href="#"
                class="text-white bg-[#323232] hover:text-[#323232] hover:bg-white duration-[350ms] px-7 py-3 rounded-2xl font-semibold tracking-wide">
                Let's Talk
            </a>
        </div>



    </header>
</template>

<script setup>
import { ref } from 'vue';

const isActiveMenu = ref(false)

const activeMenu = () => {
    isActiveMenu.value = !isActiveMenu.value
    // alert(isActiveMenu.value);

}

</script>
<style scoped></style>
