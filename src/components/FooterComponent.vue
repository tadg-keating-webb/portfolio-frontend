<template>
    <!-- Footer Section Start -->
    <section id="footer" class="text-gray-400 body-font bg-secondary-500">
        <div class="container px-5 pt-8 pb-2 mx-auto border-t-2 border-secondary-600">
            <div class="flex flex-row justify-around items-start w-full mb-20">
                <div class="flex flex-col">
                    <div class="text-slate-200">Licenses</div>
                    <ul class="list-disc pl-3">
                        <li>
                            <a href="https://opensource.org/licenses/MIT" class="text-slate-200 hover:text-primary-500"
                                target="_blank">
                                MIT License
                            </a>
                        </li>
                        <li>
                            <a href="https://opensource.org/licenses/GPL-3.0"
                                class="text-slate-200 hover:text-primary-500" target="_blank">
                                GNU General Public License v3.0
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col">
                    <div class="text-slate-200">Contact</div>
                    <ul class="list-disc pl-3 flex flex-col">
                        <li>
                            <a href="https://www.linkedin.com/in/tadg-keating-webb/"
                                class="text-slate-200 hover:text-primary-500" target="_blank">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/tadg-keating-webb" class="text-slate-200 hover:text-primary-500"
                                target="_blank">
                                Github
                            </a>
                        </li>
                        <li>
                            <a href="/csv.pdf" class="text-slate-200 hover:text-primary-500" target="_blank">
                                Curriculum Vitae
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- Footer Section End -->
</template>


<script>
export default {
    name: 'FooterComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
