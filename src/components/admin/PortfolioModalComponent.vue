<template>
    <button @click="openModal" :class="buttonClass"
        class="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right  hover:bg-secondary-600 hover:text-primary-500 text-white md:rounded shadow-lg">
        <span v-text="buttonText"></span>
    </button>
    <!-- Main modal -->
    <div :id="'portfolio-modal-' + portfolioKey" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Create New Portfolio Item
                    </h3>
                    <button type="button" @click="closeModal"
                        class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        :data-modal-hide="'portfolio-modal-' + portfolioKey">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 md:p-5">
                    <form class="space-y-4">
                        <div>
                            <label for="title"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                            <input v-model="title" type="text" name="title" id="title"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required />
                            <span v-if="hasError('title')" class="text-red-500">
                                {{ getError('title') }}
                            </span>
                        </div>
                        <div>
                            <label for="description"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Description
                            </label>
                            <textarea v-model="description" name="description" id="" placeholder=""
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required />
                            <span v-if="hasError('description')" class="text-red-500">
                                {{ getError('description') }}
                            </span>
                        </div>

                        <div>
                            <label for="demoUrl" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Demo Url
                            </label>
                            <input v-model="demoUrl" type="text" name="demoUrl" id="" placeholder=""
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                            <span v-if="hasError('demoUrl')" class="text-red-500">
                                {{ getError('demoUrl') }}
                            </span>
                        </div>

                        <div>
                            <label for="githubUrl" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Github Url
                            </label>
                            <input v-model="githubUrl" type="text" name="demoUrl" id="" placeholder=""
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                            <span v-if="hasError('githubUrl')" class="text-red-500">
                                {{ getError('githubUrl') }}
                            </span>
                        </div>
                        <div>
                            <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Image
                            </label>

                            <img v-if="imagePreview" :src="`data:image/png;base64,${imagePreview}`" alt="Base64 Image"
                                class="w-full h-auto pb-4" />

                            <input @change="onImageChange"
                                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="file_input" type="file">

                            <span v-if="hasError('image')" class="text-red-500">
                                {{ getError('image') }}
                            </span>
                        </div>

                        <button @click="createItem"
                            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import { initFlowbite, Modal } from 'flowbite'

export default {
    name: 'PortfolioModalComponent',
    props: {
        item: {
            type: Object,
        },
        portfolioKey: {
            type: String,
        },
        buttonText: {
            type: String,
        },
        buttonClass: {
            type: String,
        },
    },
    data() {
        return {
            title: this.item?.title || '',
            description: this.item?.description || '',
            demoUrl: this.item?.demoUrl || '',
            githubUrl: this.item?.githubUrl || '',
            image: '',
            imagePreview: this.item?.image || '',
            errors: {},
            apiUrl: process.env.VUE_APP_API_URL + 'portfolio' + (this.item ? `/${this.item._id}` : ''),
            method: this.item ? 'PATCH' : 'POST',
            portfolioModal: null,
        };
    },
    mounted() {
        this.portfolioModal = new Modal(document.getElementById('portfolio-modal-' + this.portfolioKey));
    },
    setup() {
        onMounted(() => {
            initFlowbite();
        });
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
        onImageChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    this.image = reader.result.split(',')[1]; // Get Base64 string without the data URL prefix
                    this.imagePreview = this.image;
                };
                reader.readAsDataURL(file); // Read file as data URL
            }
        },
        async createItem(event) {
            event.preventDefault();

            try {
                const response = await fetch(this.apiUrl, {
                    method: this.method,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `bearer ${localStorage.getItem('authToken')}`
                    },
                    body: JSON.stringify({
                        title: this.title,
                        description: this.description,
                        demoUrl: this.demoUrl,
                        githubUrl: this.githubUrl,
                        image: this.image || this.imagePreview,
                    }),
                });

                const data = await response.json();

                if (!response.ok) {
                    this.errors = data.errors || [];
                    return;
                }

                if (!this.item) {
                    this.resetForm();
                }
                this.closeModal();

                this.$emit('refresh-list');
            } catch (error) {
                console.error(error);
            }
        },

        closeModal() {
            this.portfolioModal.hide();
        },
        openModal() {
            this.portfolioModal.show();
        },
        resetForm() {
            this.title = '';
            this.description = '';
            this.demoUrl = '';
            this.githubUrl = '';
            this.image = null;
            this.imagePreview = null;
            this.errors = {};
        },
    },
};
</script>
