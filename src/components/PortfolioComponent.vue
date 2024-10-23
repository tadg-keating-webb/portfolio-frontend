<template>
    <!--Portfolio Section Start -->
    <section id="portfolio" class="text-gray-400 body-font bg-secondary-500">
        <div class="container px-5 py-24 mx-auto border-t-2 border-secondary-600">
            <div class="flex flex-col text-center w-full mb-20">
                <h2
                    class="sm:text-4xl text-2xl font-medium title-font underline decoration-primary-500 decoration-4 underline-offset-8 text-slate-200">
                    Portfolio</h2>
            </div>
            <div class="flex flex-wrap -m-4">
                <div v-for="(item, index) in items" :key="index" class="xl:w-1/3 md:w-1/2 p-4">
                    <a :href="item.demoUrl" target="_blank">
                        <div class="bg-secondary-600 bg-opacity-40 p-6 rounded-lg">
                            <img class="h-40 rounded w-full object-cover object-center mb-6 hover:scale-105 duration-500"
                                src="" alt="content" />
                            <h2 v-text="item.title" class="text-lg text-slate-200 font-medium title-font mb-4"></h2>
                            <p v-text="item.description" class="leading-relaxed text-base text-wrap"></p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!--Portfolio Section End -->
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'PortfolioComponent',   
  setup() {
    const items = ref([]);
    const apiUrl = process.env.VUE_APP_API_URL;

    const loadItems = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        items.value = data;
      } catch (error) {
        console.error('Error fetching portfolio items:', error);
      }
    };

    onMounted(() => {
      loadItems();
    });

    return {
      items
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>