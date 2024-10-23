<template>
    <!-- Navbar Start -->
    <nav class="sticky top-0 z-50 shadow-lg flex flex-wrap items-center justify-between p-5 bg-secondary-500">
        <a href="#top" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span class="ml-3 text-xl">Tadg Keating Webb</span>
        </a>
        <div class="flex md:hidden">
            <button id="hamburger">
                <img class="toggle block" src="/assets/menu-squared.png" alt="menu icon" width="40" height="40">
                <img class="toggle hidden" src="/assets/close-window.png" alt="close icon" width="40" height="40">
            </button>
        </div>
        <div
            class="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-primary-500 md:border-none">
            <a href="#whatIdo"
                class="block md:inline-block text-slate-200 hover:text-primary-500 px-3 py-3 border-b-2 border-primary-500 md:border-none uppercase">What
                I do</a>
            <a href="#portfolio"
                class="block md:inline-block text-slate-200 hover:text-primary-500 px-3 py-3 border-b-2 border-primary-500 md:border-none uppercase">Portfolio</a>
            <a href="#skills"
                class="block md:inline-block text-slate-200 hover:text-primary-500 px-3 py-3 border-b-2 border-primary-500 md:border-none uppercase">Skills</a>
        </div>
        <a href="#contact"
            class="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-primary-500 hover:bg-secondary-600 hover:text-primary-500 text-white md:rounded shadow-lg">Hire
            me</a>
    </nav>
    <!-- Navbar End -->
</template>

<script>
export default {
    name: 'MenuComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
