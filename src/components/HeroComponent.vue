<template>
  <!-- Hero Section Start-->
  <section class="text-gray-400 bg-secondary-500 body-font">
    <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
      <div
        class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 border-solid border-[18px] border-secondary-600 drop-shadow-xl sm:order-1 lg:order-2">
        <img class="object-cover object-center rounded grayscale" alt="hero"
          src="https://media.licdn.com/dms/image/v2/C5603AQGno8q-CMq3tA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1647934537260?e=1735171200&v=beta&t=85RyKoWFjtVtTFyGHhFGdGKjFJ2C-OWcT398DR_l-YE">
      </div>
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:pt-10 pt-8 items-center text-center">
        <h1 class="title-font sm:text-6xl leading-6 text-3xl mb-4 font-bold text-white">Tadg<span
            class="text-primary-500"> Keating-Webb</span></h1>
        <h2 class="title-font sm:text-3xl text-xl mb-4 font-bold text-white">Software Developer</h2>
        <p class="mb-8 leading-relaxed text-slate-200">
          I specialize in crafting tailored web solutions that bridge the gap between user needs and business goals.
          With expertise in a wide range of PHP and JavaScript frameworks for both frontend and backend, along with
          DevOps proficiency, I thrive on building scalable, efficient, and high-performing applications. My focus is on
          delivering clean, maintainable code while solving complex challenges with creativity and precision.
        </p>
        <div class="flex justify-center my-6">
          <a href="https://www.linkedin.com/in/tadg-keating-webb/" target="_blank">
            <button
              class="inline-flex text-white bg-secondary-600 border-0 py-4 px-6 focus:outline-none hover:bg-primary-500 rounded-lg text-lg"><svg
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin"
                viewBox="0 0 16 16">
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </button>
          </a>
          <a href="https://github.com/tadg-keating-webb" target="_blank">
            <button
              class="ml-4 inline-flex text-gray-400 bg-secondary-600 border-0 py-4 px-6 focus:outline-none hover:bg-primary-500 hover:text-white rounded-lg text-lg"><svg
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-behance"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- Hero Section End-->
</template>

<script>
export default {
  name: 'HeroComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
