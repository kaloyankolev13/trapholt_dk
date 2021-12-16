<template>
  <div>
    <h1>Hello</h1>
    <h1 name="exhibitions.name"></h1>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "description", "image"],
};
</script>

<style lang="scss" scoped>
</style>