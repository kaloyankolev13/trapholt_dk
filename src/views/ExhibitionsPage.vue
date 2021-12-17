<template>
  <div v-if="!selectedData" id="container">
    <ul class="exhibitions">
      <li
        v-for="exhibition in exhibitions"
        :key="exhibition.id"
        class="featured-exhibitions"
        @click="handleClick(exhibition)"
      >
        <!-- <router-link
          :to="{ name: 'exhibition', params: { id: exhibition.id } }"
        > -->
        <img class="img" alt="exhibition" :src="exhibition.image" />
        <h3>{{ exhibition.name }}</h3>
        <p>{{ exhibition.description }}</p>
        <!-- </router-link> -->
      </li>
    </ul>
  </div>
  <Exhibition v-else :data="selectedData" />
</template>

<script>
import Exhibition from "./Exhibition.vue";
export default {
  name: "ExhibitionsPage",
  components: {
    Exhibition,
  },
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
          image: require("../assets/exhibitions-img/2.jpg"),
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
      selectedData: null,
    };
  },
  methods: {
    handleClick(exhibition) {
      this.selectedData = exhibition;
    },
  },
};
</script>

<style lang="scss" scoped>
#container {
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
    height: 400px;
    box-shadow: 3px 5px 10px #333;
    line-height: 2rem;

    img {
      width: 100%;
      height: 80%;
      object-fit: cover;
    }
  }
}
ul {
  list-style: none;
  li {
    a {
      color: #f3f3f3;
      text-decoration: none;
    }
    h3 {
      border-bottom: 1px solid #e8af30;
      width: 50%;
      margin-left: 20px;
      text-align: left;
    }
    p {
      text-align: right;
      margin-right: 20px;
    }
  }
}
</style>