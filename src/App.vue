<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<style lang="scss">
@font-face {
  font-family: "MSS";
  src: url("assets/font/micross.ttf");
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: MSS;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f3f3f3;
}
</style>
<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Nav,
    Footer,
  },
};
</script>