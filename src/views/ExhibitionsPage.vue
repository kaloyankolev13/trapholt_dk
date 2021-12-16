<template>
  <div id="container">
    <ul class="exhibitions">
      <li
        v-for="exhibition in exhibitions"
        :key="exhibition.id"
        class="featured-exhibitions"
      >
        <h1>{{ exhibition.name }}</h1>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ExhibitionsPage",
  data() {
    return {
      exhibitions: [
        {
          id: 1,
          name: "Exhibition 1",
          description: "This is the first exhibition",
        },
        {
          id: 2,
          name: "Exhibition 2",
          description: "This is the second exhibition",
        },
        {
          id: 3,
          name: "Exhibition 3",
          description: "This is the third exhibition",
        },
        {
          id: 4,
          name: "Exhibition 4",
          description: "This is the fourth exhibition",
        },
        {
          id: 5,
          name: "Exhibition 5",
          description: "This is the fifth exhibition",
        },
        {
          id: 6,
          name: "Exhibition 6",
          description: "This is the sixth exhibition",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#container {
  color: red;
}
</style>