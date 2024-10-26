<template>
    <!-- Navbar Start -->
    <nav class="sticky top-0 z-50 shadow-lg flex flex-wrap items-center justify-between p-5 bg-secondary-500">
        <a href="#top" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span class="ml-3 text-xl">Portfolio Admin</span>
        </a>
        <button @click="confirmLogout"
            class="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-primary-500 hover:bg-secondary-600 hover:text-primary-500 text-white md:rounded shadow-lg">
            Logout
        </button>
    </nav>
    <!-- Navbar End -->

    <section>
        <PortfolioTableComponent />
    </section>
</template>

<script>
import PortfolioTableComponent from './PortfolioTableComponent.vue';

export default {
    name: 'DashboardComponent',
    components: {
        PortfolioTableComponent
    },
    methods: {
        confirmLogout() {
            const confirmLogout = confirm("Are you sure you want to log out?");
            if (confirmLogout) {
                this.logout();
            }
        },
        logout() {
            localStorage.removeItem('authToken');
            localStorage.removeItem('tokenExpiry');

            this.$emit('logout-success');
        }
    }
};
</script>

<style scoped>
/* Add any specific styles for the admin component here */
</style>
