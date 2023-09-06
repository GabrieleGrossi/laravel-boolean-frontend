<script>
import AppHeader from './components/AppHeader.vue';
// import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default{
    name: 'App',
    components:{
    // AppMain,
    AppHeader,
    AppFooter,
}
  }
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <!-- <AppMain /> -->
<main>

  <router-view>

  </router-view>
</main>
<footer>
    <AppFooter/>
</footer>
</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>
