<template>
    <div>
        <DashboardComponent v-if="isAuthenticated" @logout-success="handleLogoutSuccess" />
        <LoginComponent v-else @login-success="handleLoginSuccess" />
    </div>
</template>

<script>
import LoginComponent from './LoginComponent.vue';
import DashboardComponent from './DashboardComponent.vue';

export default {
    components: {
        LoginComponent,
        DashboardComponent,
    },
    data() {
        return {
            isAuthenticated: false,
        };
    },
    created() {
        this.checkAuthToken();
    },
    methods: {
        checkAuthToken() {
            const token = localStorage.getItem('authToken');
            const now = new Date().getTime();
            const expiry = localStorage.getItem('tokenExpiry');

            // TODO: Doesn't work
            if (token && (now + expiry) > now) {
                this.isAuthenticated = true;
            } else {
                this.isAuthenticated = false;
            }
        },
        handleLoginSuccess() {
            this.isAuthenticated = true; // Set to true when login is successful
        },
        handleLogoutSuccess() {
            this.isAuthenticated = false;
        }
    },
};
</script>

<style scoped>
/* Add any specific styles for the admin component here */
</style>
