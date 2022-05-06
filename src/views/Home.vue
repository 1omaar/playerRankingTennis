<template>
  <div
    class="bg-container"
  >
  <div class="players-container ">

    <div class="form-group pt-4 pl-4">
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        placeholder="Recherche un joueur"
      />
    </div>
    <div class="list d-flex flex-column">
      
        <ticket-player :player="player" v-for="player in players" :key="player.id" />
     
    </div>
  </div>
  </div>
</template>
<script>
import TicketPlayer from "@/components/TicketPlayer.vue";

import axios from "axios";
export default {
  name: "Home",
  components: {
    TicketPlayer,
  },
  data() {
    return {
      players: null,
      imgPath: require("@/assets/image/tennis.jpg"),
    };
  },
  methods: {},
  beforeCreate() {
    axios
      .get("https://data.latelier.co/training/tennis_stats/headtohead.json")
      .then((response) => {
        this.players = response.data.players;
      })
      .catch((error) => console.log(error));
  },
};
</script>
<style >
.bg-container {
  background-size: cover;
  background-repeat: no-repeat;

  background-position: center center;
 

  width: 100%;
  
}
.players-container{
     height: 100%;
    max-width: 640px;

}
/* .list{
     height: 100%;
      padding: 48px 0 64px;
      overflow: auto;
      overflow-x: hidden;
} */
.form-control {
  background-color: black;
  opacity: 50%;
  border-color: black;
  border-radius: 10px;

  padding: 1.5%;
}
.form-control::placeholder {
  color: #f2753b;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  opacity: 70%;
  font-size: 110%;
  letter-spacing: 1px;
}
/* @media screen and (min-width: 993px) {
  .form-control {
    max-width: 35%;
  }
}
@media screen and (max-width: 992px) {
  .form-control {
    max-width: 70%;
  }
}
@media screen and (max-width: 691px) {
  .form-control {
    max-width: 96%;
  }
} */
</style>
