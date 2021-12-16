<template>
  <div id="container">
    <ul class="exhibitions">
      <li
        v-for="exhibition in exhibitions"
        :key="exhibition.id"
        class="featured-exhibitions"
      >
        <router-link
          :to="{ name: 'exhibition', params: { id: exhibition.id } }"
        >
          <img alt="exhibition" :src="exhibition.image" />
          <h3>{{ exhibition.name }}</h3>
          <p>{{ exhibition.description }}</p>
        </router-link>
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
          image: require("../assets/exhibitions-img/1.jpg"),
        },
        {
          id: 2,
          name: "Exhibition 2",
          description: "This is the second exhibition",
          image: "2.jpg",
        },
        {
          id: 3,
          name: "Exhibition 3",
          description: "This is the third exhibition",
          image: require("../assets/exhibitions-img/3.jpg"),
        },
        {
          id: 4,
          name: "Exhibition 4",
          description: "This is the fourth exhibition",
          image: require("../assets/exhibitions-img/4.jpg"),
        },
        {
          id: 5,
          name: "Exhibition 5",
          description: "This is the fifth exhibition",
          image: require("../assets/exhibitions-img/5.jpg"),
        },
        {
          id: 6,
          name: "Exhibition 6",
          description: "This is the sixth exhibition",
          image: require("../assets/exhibitions-img/6.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#container {
  color: red;
  width: 72%;
  margin: 50px auto;
}
.exhibitions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  grid-auto-rows: minmax(100px, auto);
  .featured-exhibitions {
    background: linear-gradient(#1a356c, #0f2043);
    height: 500px;
    box-shadow: 10px 5px 5px #333;
    line-height: rem;
  }
}
ul {
  list-style: none;
  a {
    color: #f3f3f3;
    text-decoration: none;
  }
  h3 {
    border-bottom: 1px solid white;
  }
}
img {
  width: 100%;
  height: 80%;
}
</style>