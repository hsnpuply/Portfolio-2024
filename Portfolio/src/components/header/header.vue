<template>
    <header class="px-4 py-5  flex items-center justify-between  bg-[#0f0f0f]">

        <div class="logo z-50">
            <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/logo.svg" alt="">
        </div>

        <nav class="navbar text-gray-500">
            <ul class=" text-lg  navbarList w-full fixed  gap-6 left-0 top-0 flex items-center flex-col justify-center bg-[#0f0f0f] "
                :class="isActiveMenu ? 'translate-y-17    ' : ''">
                <li><a href="" class="text-white">Home</a></li>
                <li><a href="" class="hover:text-white">About</a></li>
                <li><a href="" class="hover:text-white">Works</a></li>
                <li><a href="" class="hover:text-white">Contact</a></li>
            </ul>

        </nav>

        <div class="showMenu flex items-center justify-center flex-col gap-2" @click="activeMenu()"
            :class="isActiveMenu ? 'active' : ''">
            <span class="line_1"></span>
            <span class="line_2"></span>
            <span class="line_3"></span>

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
