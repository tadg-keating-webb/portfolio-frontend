<template>
    <!-- Skills Section Start-->
    <section id="skills" class="text-gray-400 bg-secondary-500 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap border-t-2 border-secondary-600">
            <div class="flex flex-col text-center w-full mb-20">
                <h2
                    class="sm:text-4xl text-2xl font-medium title-font underline decoration-primary-500 decoration-4 underline-offset-8 text-slate-200">
                    My Skills</h2>
            </div>
            <div
                class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h2 class="title-font sm:text-3xl text-xl mb-4 font-bold text-white">Web Developer</h2>
                <p class="mb-8 leading-relaxed text-slate-200">
                    I specialize in building high-performance web applications using a wide range of PHP frameworks like
                    Laravel and Symfony.
                    I have extensive experience with JavaScript, working with both frontend frameworks like Vue.js and
                    React, as well as
                    backend technologies such as Node.js. My DevOps skills include Docker and CI/CD pipelines for
                    streamlined deployments and optimized workflows.</p>
                <p class="mb-8 leading-relaxed text-slate-200">
                    Click the icons to expand skills list.
                </p>
            </div>
            <div
                class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/4">
                        <div class="flex rounded-lg bg-secondary-600 hover:scale-110 duration-500 p-4 flex-col justify-center items-center cursor-pointer"
                            @click="toggleList('php')">
                            <img class="w-12" src="/assets/icons/php.svg" alt="">
                        </div>
                        <transition>
                            <ul v-if="activeList.includes('php')" class="mt-2">
                                <li v-for="(item, index) in phpList" :key="index" class="pt-2">
                                    <a :href="item.link" target="_blank">
                                        <div class="flex rounded-lg bg-secondary-600 h-12 md:h-20 w-12 md:w-20 hover:scale-110 duration-500 p-4 flex-col justify-center items-center cursor-pointer"
                                            v-tooltip="item.name">
                                            <img class="w-12" :src="item.icon" :alt="item.name">
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </transition>
                    </div>

                    <div class="p-4 md:w-1/4">
                        <div class="flex rounded-lg bg-secondary-600 hover:scale-110 duration-500 p-4 flex-col justify-center items-center cursor-pointer"
                            @click="toggleList('js')">
                            <img class="w-12" src="/assets/icons/js.svg" alt="">
                        </div>
                        <transition>
                            <ul v-if="activeList.includes('js')" class="mt-2">
                                <li v-for="(item, index) in jsList" :key="index" class="pt-2">
                                    <a :href="item.link" target="_blank">
                                        <div class="flex rounded-lg bg-secondary-600 h-12 md:h-20 w-12 md:w-20 hover:scale-110 duration-500 p-4 flex-col justify-center items-center cursor-pointer"
                                            v-tooltip="item.name">
                                            <img class="w-12" :src="item.icon" :alt="item.name">
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </transition>
                    </div>

                    <div class="p-4 md:w-1/4">
                        <div class="flex rounded-lg bg-secondary-600 hover:scale-110 duration-500 p-4 flex-col justify-center items-center cursor-pointer"
                            @click="toggleList('css')">
                            <img class="w-12" src="/assets/icons/css.svg" alt="">
                        </div>
                        <transition>
                            <ul v-if="activeList.includes('css')" class="mt-2">
                                <li v-for="(item, index) in cssList" :key="index" class="pt-2">
                                    <a :href="item.link" target="_blank">
                                        <div class="flex rounded-lg bg-secondary-600 h-12 md:h-20 w-12 md:w-20 hover:scale-110 duration-500 p-4 flex-col justify-center items-center cursor-pointer"
                                            v-tooltip="item.name">
                                            <img class="w-12" :src="item.icon" :alt="item.name">
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </transition>
                    </div>
                    <div class="p-4 md:w-1/4">
                        <div class="flex rounded-lg bg-secondary-600 hover:scale-110 duration-500 p-4 flex-col justify-center items-center cursor-pointer"
                            @click="toggleList('devOps')">
                            <img class="w-12" src="/assets/icons/dev-ops-solid.svg" alt="">
                        </div>
                        <transition>
                            <ul v-if="activeList.includes('devOps')" class="mt-2">
                                <li v-for="(item, index) in devOpsList" :key="index" class="pt-2">
                                    <a :href="item.link" target="_blank">
                                        <div class="flex rounded-lg bg-secondary-600 h-12 md:h-20 w-12 md:w-20 hover:scale-110 duration-500 p-4 flex-col justify-center items-center cursor-pointer"
                                            v-tooltip="item.name">
                                            <img class="w-12" :src="item.icon" :alt="item.name">
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--Skills Section End -->
</template>


<script>
export default {
    name: 'SkillsComponent',
    data() {
        return {
            activeList: [], // Track which list is currently active
            phpList: [
                {
                    name: "Laravel",
                    icon: "/assets/icons/laravel.svg",
                    link: "https://laravel.com/",
                },
                {
                    name: "Symfony",
                    icon: "/assets/icons/symfony.svg",
                    link: "https://symfony.com/",
                },
                {
                    name: "Code Igniter",
                    icon: "/assets/icons/codeigniter.svg",
                    link: "https://codeigniter.com/",
                },
                {
                    name: "CakePHP",
                    icon: "/assets/icons/cakephp.svg",
                    link: "https://cakephp.org/",
                },
            ],
            jsList: [
                {
                    name: "Vue JS",
                    icon: "/assets/icons/vue.svg",
                    link: "https://vuejs.org/",
                },
                {
                    name: "Node JS",
                    icon: "/assets/icons/nodejs.svg",
                    link: "https://nodejs.org/en",
                },
                {
                    name: "Express JS",
                    icon: "/assets/icons/express.svg",
                    link: "https://expressjs.com/",
                },
                {
                    name: "Alpine JS",
                    icon: "/assets/icons/alpinejs.svg",
                    link: "https://alpinejs.dev/",
                }
            ],
            cssList: [
                {
                    name: "Tailwind",
                    icon: "/assets/icons/tailwind-css.svg",
                    link: "https://tailwindcss.com/",
                },
                {
                    name: "Bootstrap",
                    icon: "/assets/icons/bootstrap.svg",
                    link: "https://getbootstrap.com/docs/3.4/",
                }
            ],
            devOpsList: [
                {
                    name: "Git",
                    icon: "/assets/icons/git.svg",
                    link: "https://git-scm.com/",
                },
                {
                    name: "Docker",
                    icon: "/assets/icons/docker.svg",
                    link: "https://www.docker.com/",
                },
                {
                    name: "Composer",
                    icon: "/assets/icons/composer.svg",
                    link: "https://getcomposer.org/",
                },
                {
                    name: "NPM",
                    icon: "/assets/icons/npm.svg",
                    link: "https://www.npmjs.com/",
                },
            ],
        };
    },
    methods: {
        toggleList(skill) {
            const index = this.activeList.indexOf(skill);

            if (index === -1) {
                // If the skill is not in the array, add it
                this.activeList.push(skill);
            } else {
                // If the skill is in the array, remove it
                this.activeList.splice(index, 1);
            }

            console.log(this.activeList);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity .5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
