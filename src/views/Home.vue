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
         
        />
      </div>
      <div class="list d-flex flex-column">
        <ticket-player
          :player="player"
          v-for="player in listOfPlayers"
          :key="player.id"
          @click="openModal(player)"
        />
      </div>
    </div>
    <!-- modal player -->
   <ModalPlayer  
      v-if="showModal"
    
    ></ModalPlayer>
  </div>
</template>
<script>
import TicketPlayer from "@/components/TicketPlayer.vue";
import { mapGetters } from "vuex";
import ModalPlayer from '@/components/ModalPlayer.vue';

export default {
  name: "Home",
  components: {
    TicketPlayer,
    ModalPlayer,
  },
  data() {
    return {
      searchValue: null,
    
    };
  },
  computed: {
    ...mapGetters({
      players: "players",
      showModal:"showModal"
    }),
      listOfPlayers () {
          if (this.searchValue) {
             return  this.players.filter((item) => {
                  
                return  `${item.firstname}|${item.lastname}|`
            .toLowerCase()
            .includes(this.searchValue.toLowerCase());
        })
        .sort((A,B)=>A.data.rank-B.data.rank);

      }
      return this.players.sort((a,b)=>a.data.rank-b.data.rank)
     }
  },
  methods: {
   
  async openModal(player){
    
     await this.$store.commit('setShowModal',true)
     try {
         this.$store.commit('setSelectPlayer',player)
         
     } catch (error) {
         console.log(error)
     }
    }
  },

  async created() {
    this.$store.dispatch("getPlayers");
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
  max-width: 640px;
}
.list{
     height:100vh;
      padding-right: 2%;
      
}
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

</style>
