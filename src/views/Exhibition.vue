<template>
  <div class="about">
    <p style="color: #333">{{ exhibitions[1].name }}</p>
    <BabylonExamples />
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
</style>