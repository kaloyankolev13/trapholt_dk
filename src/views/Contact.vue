<template>
  <div class="about">
    <BabylonExamples />
    <h1>Contact Us</h1>
  </div>
</template>

<script>
import BabylonExamples from "../components/BabylonExamples.vue";
export default {
  name: "Exhibition",
  components: {
    BabylonExamples,
  },
};
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  color: #333;
}
</style>