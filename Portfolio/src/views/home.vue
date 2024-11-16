<template>
    <div class="homePage">

        <!-- Profile Section -->
        <section class="homeSection mt-16 mb-5  container ">
            <div class="homeItems flex flex-wrap     items-start justify-center gap-8  ">


                <div class="profile   rounded-xl  w-full relative overflow-hidden  group cursor-pointer">
                    <img decoding="async"
                        src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/bg1.png" alt="BG"
                        class="bg-img object-cover absolute -z-10 w-full opacity-10 h-full  rounded-xl ">

                    <div class="profileItems flex flex-col items-center py-10 pl-6  gap-8">

                        <div
                            class="profilePic w-2/3 flex items-center justify-center bg-violet-700 rounded-tl-[3.3rem] !rounded-br-3xl rounded-lg   shadow-sm shadow-gray-200/10">
                            <img src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/me.png" alt=""
                                class="w-56">
                        </div>
                        <div class="profileInfo flex self-start justify-start flex-col ">
                            <h5 class="uppercase text-lg opacity-70 text-[#BCBCBC] ">a web designer</h5>
                            <h2 class="text-3xl mb-3 text-white font-bold">Hasan Barati</h2>
                            <p class="text-lg opacity-70 text-[#BCBCBC]">i am Front-End Developer based in qom
                            </p>
                        </div>

                    </div>
                    <div class="star">
                        <img decoding="async"
                            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                            alt="Star"
                            class="opacity-30 absolute bottom-8 right-3 group-hover:opacity-100 duration-300">
                    </div>
                </div>


                <div
                    class="infoAboutMe   flex flex-col flex-wrap gap-4  w-full relative overflow-hidden   cursor-pointer ">

                    <div class="marqueAboutMe rounded-xl text-[#0f0f0f] text-white  ">
                        <marquee behavior="fast" direction="right">We prioritize the user experience and strive to
                            create intuitive, accessible, and enjoyable interactions.</marquee>
                    </div>

                    <div class="myResume gap-4  flex items-center justify-center flex-wrap  ">
                        <div
                            class="moreAboutMe  rounded-xl py-10 pl-6 gap-8  w-full flex relative items-center flex-col justify-center group">
                            <img decoding="async"
                                src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/bg1.png"
                                alt="BG"
                                class="bg-img object-cover absolute -z-10 w-full opacity-10 h-full  rounded-xl ">

                            <div class="mySign ">
                                <img src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/sign.png" alt="">
                            </div>
                            <div class="infoAboutMe w-full flex  items-start flex-col">
                                <h5 class="uppercase text-md opacity-70 text-[#BCBCBC]">More About me</h5>
                                <h1 class="text-3xl mt-3 text-white font-bold ">Credentials</h1>
                                <div class="star">
                                    <img decoding="async"
                                        src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                                        alt="Star"
                                        class="opacity-30 absolute bottom-8 right-3 group-hover:opacity-100 duration-300">
                                </div>
                            </div>



                        </div>


                        <div
                            class="myProjects rounded-xl py-10 pl-6 gap-8  w-full flex relative items-center flex-col justify-center group">
                            <div class="projectsMockup">
                                <img src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png"
                                    alt="">
                            </div>
                            <div class="infoProjects w-full flex  items-start flex-col ">
                                <h5 class="uppercase text-md opacity-70 text-[#BCBCBC]">ShowCase</h5>
                                <h1 class="text-3xl mt-3 text-white font-bold ">Projects</h1>
                                <div class="star">
                                    <img decoding="async"
                                        src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                                        alt="Star"
                                        class="opacity-30 absolute bottom-8 right-3 group-hover:opacity-100 duration-300">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>

        </section>

        <!-- Section 2 -->
        <section class="secondSection container  flex items-center justify-center flex-col gap-4  mb-5">
            <!-- Blog -->
            <div
                class="blog rounded-xl py-10 pl-6 gap-8  w-full flex relative items-center flex-col justify-center cursor-pointer    group">
                <img decoding="async"
                    src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/bg1.png" alt="BG"
                    class="bg-img object-cover absolute -z-10 w-full opacity-10 h-full  rounded-xl ">

                <div class="blogIcon ">
                    <img src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/gfonts.png" alt="">
                </div>
                <div class="infoBlog w-full flex  items-start flex-col">
                    <h5 class="uppercase text-md opacity-70 text-[#BCBCBC]">Blog</h5>
                    <h1 class="text-3xl mt-3 text-white font-bold ">GFonts</h1>
                    <div class="star">
                        <img decoding="async"
                            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                            alt="Star"
                            class="opacity-30 absolute bottom-8 right-3 group-hover:opacity-100 duration-300">
                    </div>
                </div>





            </div>

            <!-- Spedcializtion -->
            <div
                class="blog rounded-xl py-10 pl-6 gap-8  w-full flex relative items-center flex-col justify-center cursor-pointer    group">
                <img decoding="async"
                    src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/bg1.png" alt="BG"
                    class="bg-img object-cover absolute -z-10 w-full opacity-10 h-full  rounded-xl ">

                <div class="blogIcon flex items-center justify-center gap-4  group flex-wrap  ">
                    <Icon icon="cib:html5-shield" width="55" height="55" style="color: white" title="HTML5" />
                    <Icon icon="cib:css3-shiled" width="55" height="55" style="color: white" />
                    <Icon icon="bxs:file-js" width="55" height="55" style="color: white" />
                    <Icon icon="cib:vue-js" width="55" height="55" style="color: white" />
                    <Icon icon="skill-icons:pinia-dark" width="55" height="55" />
                    <Icon icon="ri:tailwind-css-fill" width="55" height="55" style="color: white" />
                    <Icon icon="cib:bootstrap" width="55" height="55" style="color: white" />
                </div>
                <div class="infoBlog w-full flex  items-start flex-col">
                    <h5 class="uppercase text-md opacity-70 text-[#BCBCBC]">specialization</h5>
                    <h1 class="text-xl mt-2 text-white font-bold ">Skilled in </h1>
                    <div class="star">
                        <img decoding="async"
                            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                            alt="Star"
                            class="opacity-30 absolute bottom-8 right-3 group-hover:opacity-100 duration-300">
                    </div>
                </div>





            </div>

            <!-- Social Profile -->
            <div class="socialProfile w-full">
                <div
                    class="blog rounded-xl py-10 pl-6 gap-8  w-full flex relative items-center flex-col justify-center cursor-pointer    group">
                    <img decoding="async"
                        src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/bg1.png" alt="BG"
                        class="bg-img object-cover absolute -z-10 w-full opacity-10 h-full  rounded-xl ">

                    <div class="socialIcons w-full flex items-center justify-center gap-4  group flex-wrap  ">
                        <div
                            class="iconsContainer  rounded-xl p-5 flex items-center gap-4 justify-center bg-opacity-20 text-white">
                            <div class="socialIcon github p-4 rounded-full">
                                <Icon icon="cib:github" width="45" height="45" style="color: white" />
                            </div>
                            <div class="socialIcon linkedin  p-4 rounded-full">
                                <Icon icon="cib:linkedin" width="45" height="45" style="color: white" />
                            </div>
                        </div>
                    </div>
                    <div class="infoBlog w-full flex  items-start flex-col">
                        <h5 class="uppercase text-md opacity-70 text-[#BCBCBC]">Stay with me</h5>
                        <h1 class="text-xl mt-2 text-white font-bold ">Profiles</h1>
                        <div class="star">
                            <img decoding="async"
                                src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                                alt="Star"
                                class="opacity-30 absolute bottom-8 right-3 group-hover:opacity-100 duration-300">
                        </div>
                    </div>





                </div>
            </div>

        </section>


        <!-- Section 3 -->

        <section class="thirdSection container flex items-center justify-center flex-col gap-4">
            <div class="socialProfile w-full">
                <div
                    class="blog rounded-xl py-10 pl-6 gap-8  w-full flex  relative items-center flex-wrap justify-center cursor-pointer    group">
                    <div class="exprince  rounded-lg p-5 min-w-40   flex items-center justify-center flex-col gap-2">
                        <h4 class="text-white text-4xl  text-center">07</h4>
                        <p class="text-lg text-gray-400  text-center">Years <br>exprince</p>
                    </div>

                    <div class="exprince  rounded-lg p-5 min-w-40   flex items-center justify-center flex-col gap-2">
                        <h4 class="text-white text-4xl  text-center">+125</h4>
                        <p class="text-lg text-gray-400  text-center">Clients <br> Worldwide</p>
                    </div>

                    <div class="exprince  rounded-lg p-5 min-w-40   flex items-center justify-center flex-col gap-2">
                        <h4 class="text-white text-4xl  text-center">+210</h4>
                        <p class="text-lg text-gray-400  text-center">Total <br>Projects</p>
                    </div>

                </div>
            </div>

            <!-- Call To Action -->
            <div class="callToAction w-full  ">
                <div
                    class="blog rounded-xl py-10 pl-6 gap-8   w-full flex relative items-center flex-col justify-center cursor-pointer    group">
                    <img decoding="async"
                        src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png" alt="BG"
                        class=" absolute left-20 top-0 ">

                    <img decoding="async"
                        src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/bg1.png" alt="BG"
                        class="bg-img object-cover absolute -z-10 w-full opacity-10 h-full  rounded-xl ">

                    <div class="blogIcon flex items-center justify-center gap-4  group flex-wrap  ">

                    </div>
                    <div class="infoBlog w-full flex  items-start flex-col pt-6">
                        <h2 class=" z-[99] text-4xl  text-white">Let's <br>work <span
                                class="text-[#395bf6]">together.</span>
                        </h2>

                        <div class="star">
                            <img decoding="async"
                                src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                                alt="Star"
                                class="opacity-30 absolute bottom-8 right-3 group-hover:opacity-100 duration-300">
                        </div>
                    </div>





                </div>

            </div>
        </section>

    </div>
</template>
<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';


</script>

<style scoped>
.profile,
.exprince,
.socialIcons,
.socialIcon,
.blog,
.marqueAboutMe,
.moreAboutMe,
.myProjects {
    position: relative;
}

.profile::after,
.exprince::after,
.socialIcons::after,
.socialIcon::after,
.blog::after,
.marqueAboutMe::after,
.moreAboutMe::after,
.myProjects::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(120deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));
    border-radius: 30px;
    opacity: 0.25;
}
</style>
