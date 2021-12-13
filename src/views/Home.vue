<template>
  <div>
    <Slider />
    <h1 style="color: black" class="hello">hello</h1>
  </div>
</template>

<script>
import Slider from "../components/Slider.vue";
export default {
  components: {
    Slider,
  },
};
</script>

<style lang="scss" scoped>
.hello {
  margin-top: -100px;
}
</style>