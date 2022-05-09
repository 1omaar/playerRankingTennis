<template>
  <div class="bg-container">
    <div class="players-container">
      <div class="form-group pt-4 pl-4">
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Recherche un joueur"
          v-model="searchValue"
          v-on:input="searchByName"
        />
      </div>
      <div class="list d-flex flex-column">
        <ticket-player
          :player="player"
          v-for="player in listOfPlayers"
          :key="player.id"
          @click.prevent="openModal(player)"
        />
      </div>
    </div>
    <!-- modal player -->
    <ModalPlayer v-if="showModal"></ModalPlayer>
  </div>
</template>
<script>
import TicketPlayer from "@/components/TicketPlayer.vue";
import { mapGetters } from "vuex";
import ModalPlayer from "@/components/ModalPlayer.vue";

export default {
  name: "Home",
  components: {
    TicketPlayer,
    ModalPlayer,
  },
  data() {
    return {
      searchValue: null,
      listOfPlayers: null,
    };
  },
  computed: {
    ...mapGetters({
      players: "players",
      showModal: "showModal",
    }),
  },
  methods: {
    sortPlayers(playerForSorting) {
      this.listOfPlayers = playerForSorting.sort(
        (A, B) => A.data.rank - B.data.rank
      );
    },
    searchByName() {
      var resultSearch = this.players.filter((item) => {
        return `${item.firstname}|${item.lastname}|`
          .toLowerCase()
          .includes(this.searchValue.toLowerCase());
      });
      this.sortPlayers(resultSearch);
    },

    async openModal(player) {
      await this.$store.commit("setShowModal", true);
      try {
        this.$store.commit("setSelectPlayer", player);
      } catch (error) {
        error;
      }
    },
  },

  async created() {
    await this.$store.dispatch("getPlayers");
    try {
      this.sortPlayers(this.players);
      
    } catch (error) {
      new Error('Server Error !');
    }
  },
 
};
</script>
<style lang="scss" scoped>


.bg-container {
  background-size: cover;
  background-repeat: no-repeat;

  background-position: center center;

  width: 100%;
  
}
.players-container {
  height: 100%;
  max-width: 700px;
  overflow: auto;
  overflow-x:hidden ;
}
.list {

  padding-right: 2%;
     
}
::-webkit-scrollbar {
  width: 5%;
 
}
::-webkit-scrollbar-thumb{
 background: rgba(0, 0, 0, 0.3);
 
  border-radius: 5px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
::-webkit-scrollbar-thumb:hover{
  background: rgb(255,255,255,0.3);
  border-radius: 5px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.form-control {
  background-color: black;
  opacity: 30%;
  border-color: black;
  border-radius: 10px;
  max-width: 95%;
  padding: 2.5%;
  height: 10%;
  color: black;
  font-size: 20px;
  

}
.form-control:hover {
  background-color: white;
  opacity: 30%;
  border-color: black;
  border-radius: 10px;
  max-width: 95%;
  padding: 2.5%;
}
.form-control::placeholder {
  color: #f2753b;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  opacity: 70%;
  font-size: 110%;
  letter-spacing: 1px;
}
</style>
