<template>
   <!-- Contact Start -->
   <section id="contact" class="text-slate-200  bg-secondary-500 body-font relative">
        <div class="container px-5 py-24 mx-auto border-t-2 border-secondary-600 shadow-lg border-xl drop-shadow-lg">
            <div class="flex flex-col text-center w-full mb-12">
                <h2 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Me</h2>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Send me a message with your email and I will get back to you ASAP!</p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
                <div class="bg-secondary-600 bg-opacity-40 p-6 rounded-lg h-full flex items-start">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-slate-200 uppercase">Name</label>
                                <input type="text" id="name" name="name"
                                    class="w-full bg-secondary-600 bg-opacity-40 rounded border border-slate-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-slate-200 uppercase">Email</label>
                                <input type="email" id="email" name="email"
                                    class="w-full bg-secondary-600 bg-opacity-40 rounded border border-slate-800 focus:border-primary-500 focus:bg-gray-900 focus:ring-2 focus:ring-primary-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-slate-200 uppercase">Message</label>
                                <textarea id="message" name="message"
                                    class="w-full bg-secondary-600 rounded border border-slate-800 focus:border-primary-500 focus:bg-gray-900 focus:ring-2 focus:ring-primary-500 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div class="p-4 w-full">
                            <button
                                class="flex mx-auto text-primary-500 bg-secondary-600 hover:bg-primary-500 hover:text-slate-200 border-lg font-medium py-4 px-10 focus:outline-nonerounded text-lg uppercase">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact End-->
</template>

<script>
export default {
  name: 'ContactComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
