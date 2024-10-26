<template>
    <MenuComponent />
    <HeroComponent />
    <AboutComponent />
    <SkillsComponent />
    <PortfolioComponent />
    <ContactComponent />
    <FooterComponent />
</template>

<script>
import AboutComponent from './AboutComponent.vue';
import ContactComponent from './ContactComponent.vue';
import FooterComponent from './FooterComponent.vue';
import HeroComponent from './HeroComponent.vue';
import MenuComponent from './MenuComponent.vue';
import PortfolioComponent from './PortfolioComponent.vue';
import SkillsComponent from './SkillsComponent.vue';

export default {
    name: 'HomeComponent',
    components: {
        AboutComponent,
        ContactComponent,
        FooterComponent,
        HeroComponent,
        MenuComponent,
        PortfolioComponent,
        SkillsComponent,
    }
}
</script>

<style></style>