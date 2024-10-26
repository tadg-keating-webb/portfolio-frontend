<template>
    <div class="flex items-center justify-center h-screen bg-secondary-500">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-center">Admin Login</h2>
            <div v-if="warning" class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400"
                role="alert">
                <b><span v-text="warning"></span></b>
            </div>
            <form @submit.prevent="handleLogin">
                <div class="mb-4">
                    <label for="email" class="block text-gray-700">E-mail</label>
                    <input type="email" id="email" v-model="email" class="w-full p-2 border border-gray-300 rounded"
                        required />
                    <span v-if="hasError('email')" class="text-red-500">
                        {{ getError('email') }}
                    </span>

                </div>
                <div class="mb-4">
                    <label for="password" class="block text-gray-700">Password</label>
                    <input type="password" id="password" v-model="password"
                        class="w-full p-2 border border-gray-300 rounded" required />
                    <span v-if="hasError('password')" class="text-red-500">
                        {{ getError('password') }}
                    </span>
                </div>
                <button type="submit" class="w-full bg-secondary-600 text-white py-2 rounded hover:bg-primary-500">
                    Login
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginComponent',
    data() {
        return {
            email: '',
            password: '',
            apiUrl: process.env.VUE_APP_API_URL + 'login',
            errors: {},
            warning: '',
        };
    },
    computed: {
        hasError() {
            return (field) => Object.values(this.errors).some(err => err.path === field);
        },
        getError() {
            return (field) => {
                const error = Object.values(this.errors).find(err => err.path === field);
                return error ? error.msg : '';
            };
        },
    },
    methods: {
        async handleLogin() {
            console.log({
                email: this.email,
                password: this.password,
            })

            try {
                const response = await fetch(this.apiUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: this.email,
                        password: this.password,
                    }),
                });

                const data = await response.json();

                if (!response.ok) {
                    console.log(data.errors)
                    this.warning = data.error || 'Login failed';
                    this.errors = data.errors || [];
                    return;
                }

                localStorage.setItem("authToken", data.token);
                localStorage.setItem("tokenExpiry", data.expires);

                this.$emit('login-success');
            } catch (error) {
                console.error('Error during login:', error);
            }
        },
    },
};
</script>

<style scoped>
/* Add any specific styles for the admin login component here */
</style>
