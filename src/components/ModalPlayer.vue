<template>
  <div class="modal-backdrop" v-if="player">
    <button type="button" class="btn-close" @click="closeModal">+</button>
    <div class="modal">
      <div class="container-image">
        <img
          :src="player.picture"
          :alt="`photo de ${player.firstname}`"
  
        />
      </div>
      <div class="name-style">
        <h1 :firstName="player.firstname">{{ player.firstname }}</h1>
        <h2>{{ player.lastname }}</h2>
      </div>

      <div class="container info-section">
        <div class="row">
          <div class="col d-flex flex-column ">
            <p>Rank</p>
            <span>#{{player.data.rank}}</span>
          </div>
          <div class="col d-flex flex-column">
            <p>Points</p>
            <span>{{player.data.points}}</span>
          </div>
          <div class="col d-flex flex-column">
            <p>Country</p>
            <span></span>
          </div>
        </div>
        <div class="row ">
          <div class="col-4 d-flex flex-column">
            <p>Birthday</p>
            <span>23/04/1995</span>
          </div>
          <div class="col-8 d-flex flex-column">
            <p>Age</p>
            <span>{{player.data.age}}</span>
          </div>
        </div>
        <div class="row">
          <div class="col-4 d-flex flex-column">
            <p>Weight</p>
            <span>{{player.data.weight/1000}} kg</span>
          </div>
          <div class="col-8 d-flex flex-column ">
            <p>Height</p>
            <span>{{player.data.height}} cmm</span>
          </div>
        </div>
      </div>
      <div class="additional-info-container">
          <div class="picture-country" :style="{ backgroundImage: `url(${player.country.picture})`}"></div>
          <div class="container">
              <div class="row">
                  <div class="col">
                      <p>career Titles</p>

                  </div>

              </div>
              <div class="row">
                  <div class="col">
                      <span>
                          text.......
                      </span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
 import json from '@/data/json'
import { mapGetters } from "vuex";
export default {
  name: "ModalPlayer",
  data() {
      return {
          myJson:json
      }
  },
  computed: {
    ...mapGetters({
      player: "player",
    }),
//    async nameOfCountry(){
//    return await this.myJson.filter(country=>{
//             country.alpha === this.player.country.code
//         })
//     }
  },

  methods: {
    closeModal() {
      this.$store.commit("setShowModal", false);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.modal-backdrop {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal {
  width: 80%;
  height: 90%;
  // position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: $white-color;
  box-shadow: 2px 2px 20px 1px;

  display: flex;
  overflow: initial;
}

.container-image > img {
  position: absolute;
  filter: drop-shadow(7px 0px 10px $black-color);
  float: left;
  top: 0;
  bottom: 0;
  left: -20vh;
  width: 70vh;
}

.btn-close {
  position: absolute;
  margin-bottom: 25px;

  border: none;
  font-size: 95px;

  cursor: pointer;
  font-weight: 100;
  color: $white-color;
  transform: rotate(45deg);
  background: transparent;
}
.btn-close:hover {
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.name-style {
  margin: 50px 0 0 250px;
  h1 {
    position: relative;
    font-family: $title-font;
    font-weight: 600;
    letter-spacing: 2px;
    color: $white-color;
    font-size: max(5vw, 40px);
    -webkit-text-stroke: 8px $main-color;
    -webkit-text-fill-color: $white-color;
    &::after {
      content: attr(firstName);
      position: absolute;
      left: 0;
      -webkit-text-stroke: $white-color;
    }
  }
  h2 {
    font-family: $title-font;
    font-weight: 900;
    letter-spacing: 2px;
    color: $main-color;
    font-size: max(7vw, 60px);
  }
}
.info-section {
position:absolute ;
width: 46%;
margin: 30% 0 0 30%;
}
.info-section > .row {
    margin-bottom: 10%;
}
 p {
     text-transform: uppercase;
     font-family: $text-font;
      color: $grey-color;
      letter-spacing: 2px;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 17px;
}
span{
      font-family: $title-font;
          font-size: 20px;
          font-weight: 600;
          color: $main-color;
       
}
.picture-country {
   
      bottom: 0;
      width: 21vh;
      height: 13.5vh;
      background-repeat: no-repeat;
      background-size: cover;
      margin-bottom: 20vh;
     
}
.additional-info-container{
   
   margin: 0 0 27vh 40vh ;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
}
</style>
