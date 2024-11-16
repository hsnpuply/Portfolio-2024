<template>
    <footer>
        <div class="container footer py-20 flex flex-col items-center justify-center">
            <div class="webLogo">
                <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/logo.svg" alt="">
            </div>
            <div class="footerNav text-[#676767] mt-10">
                <nav>
                    <ul class="flex items-center gap-8 justify-center text-md">
                        <li v-for="(item, index) in footerLinks" :key="index" class="uppercase"><a href="#">{{ item
                                }}</a></li>
                    </ul>

                </nav>
            </div>

            <!-- CopyRights -->
            <div class=" copyRights text-[#676767] text-center mt-10">
                © All rights reserved by <span class="text-[#5b78f6]"><a href="#">HSNpuply</a></span>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';
const footerLinks = ['home', 'about', 'works', 'contact']

</script>
