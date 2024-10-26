<template>
    <!--Portfolio Admin Section Start -->
    <section id="portfolio" class="text-gray-400 body-font bg-secondary-500">
        <div class="container px-5 py-24 mx-auto">
            <div class="pb-4">
                <PortfolioModalComponent :key="'new-item'" :portfolioKey="'new-item'" :buttonClass="'bg-primary-500'"
                    @refresh-list="handleRefreshList" :buttonText="'New Item'" />
            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">Image</th>
                            <th scope="col" class="px-6 py-3">Title</th>
                            <th scope="col" class="px-6 py-3">Description</th>
                            <th scope="col" class="px-6 py-3">Demo URL</th>
                            <th scope="col" class="px-6 py-3">Github URL</th>
                            <th scope="col" class="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in items" :key="index"
                            class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td class="px-6 py-4">
                                <img v-if="item.image" :src="`data:image/png;base64,${item.image}`" alt="Base64 Image"
                                    class="w-16 h-auto" />
                            </td>
                            <td v-text="item.title" class="px-6 py-4"></td>
                            <td v-text="item.description" class="px-6 py-4"></td>
                            <td v-text="item.demoUrl" class="px-6 py-4"></td>
                            <td v-text="item.githubUrl" class="px-6 py-4"></td>
                            <td class="px-6 py-4">
                                <div class="flex flex-row">
                                    <div class="pr-4">
                                        <button @click="confirmDeleteItem(item.title, item._id)"
                                            class="md:flex w-full md:w-auto px-4 py-2 text-right bg-red-600 hover:bg-secondary-600 hover:text-primary-500 text-white md:rounded shadow-lg">
                                            Delete
                                        </button>
                                    </div>
                                    <div>
                                        <PortfolioModalComponent :key="item._id" :item="item" :portfolioKey="item._id"
                                            :buttonClass="'bg-green-500'" :buttonText="'Update'"
                                            @refresh-list="handleRefreshList" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    <!--Portfolio Admin Section End -->
</template>

<script>

import PortfolioModalComponent from './PortfolioModalComponent.vue';

export default {
    name: 'PortfolioTableComponent',
    components: {
        PortfolioModalComponent,
    },
    data() {
        return {
            items: [],
            apiUrl: process.env.VUE_APP_API_URL + 'portfolio',
        }
    },
    methods: {
        handleRefreshList() {
            console.log('here')
            this.loadItems();
        },
        async loadItems() {
            try {
                const response = await fetch(this.apiUrl);
                const data = await response.json();
                this.items = data;
            } catch (error) {
                console.error('Error fetching portfolio items:', error);
            }
        },
        confirmDeleteItem(title, id) {
            const confirmDelete = confirm(`Are you sure you want to delete: ${title}`);

            if (confirmDelete) {
                this.deleteItem(title, id)
            }
        },
        async deleteItem(title, id) {
            try {
                const response = await fetch(`${this.apiUrl}/${id}`, {
                    method: 'DELETE', // Use the DELETE method
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `bearer ${localStorage.getItem('authToken')}`
                    }
                });

                if (!response.ok) {
                    throw new Error();
                }

                this.loadItems();

            } catch (error) {
                console.error('Error deleting item');
            }
        },
    },
    mounted() {
        this.loadItems();
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
