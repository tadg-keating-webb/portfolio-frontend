<template>
  <MenuComponent />
  <HeroComponent />
  <AboutComponent />
  <SkillsComponent />
  <PortfolioComponent />
  <ContactComponent />
</template>

<script>
import AboutComponent from './components/AboutComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
import HeroComponent from './components/HeroComponent.vue';
import MenuComponent from './components/MenuComponent.vue';
import PortfolioComponent from './components/PortfolioComponent.vue';
import SkillsComponent from './components/SkillsComponent.vue';

export default {
  name: 'App',
  components: {
    AboutComponent,
    ContactComponent,
    HeroComponent,
    MenuComponent,
    PortfolioComponent,
    SkillsComponent
  }
}
</script>

<style></style>
