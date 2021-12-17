<template>
  <div>
    <canvas></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ArtChair } from "@/Chair3D/ArtChair";

export default defineComponent({
  name: "BabylonExamples",
  mounted() {
    const canvas = document.querySelector("canvas")!;
    new ArtChair(canvas);
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 50%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
}

canvas {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
}
</style>
