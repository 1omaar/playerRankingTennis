<template>
  <div class="modal-backdrop" v-if="player">
    <button type="button" class="btn-close" @click="closeModal">+</button>
    <div class="modal container-fluid">
      <div class="row d-flex">
        <div class="container-image col-sm-3 col d-none d-md-block">
          <img :src="player.picture" :alt="`photo de ${player.firstname}`" />
        </div>
        <div class="col-sm-5 col d-flex flex-column col-info-section">
          <div class="name-style mb-4">
            <h1 :firstName="player.firstname">{{ player.firstname }}</h1>
            <h2>{{ player.lastname }}</h2>
          </div>
          <div class="container info-section mt-4">
            <div class="row">
              <div class="col">
                <p>Rank</p>
                <b>#{{ player.data.rank }}</b>
              </div>
              <div class="col">
                <p>Points</p>
                <b>{{ player.data.points }}</b>
              </div>
              <div class="col">
                <p>Country</p>
                <b>{{ nameOfCountry }}</b>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 col">
                <p>Birthday</p>
                <b>23/04/1995</b>
              </div>
              <div class="col-sm-8 col">
                <p>Age</p>
                <b>{{ player.data.age }}</b>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 col">
                <p>Weight</p>
                <b>{{ player.data.weight / 1000 }} kg</b>
              </div>
              <div class="col-sm-8 col">
                <p>Height</p>
                <b>{{ player.data.height }} cmm</b>
              </div>
            </div>
          </div>
        </div>

        <div
          class="additional-info-container col-sm-4 col d-sm-flex flex-column justify-content-between"
        >
          <div class="container">
            <div class="row d-flex justify-content-center">
              <div
                class="picture-country"
                :style="{ backgroundImage: `url(${player.country.picture})` }"
              ></div>
            </div>
            <div class="row d-flex justify-content-center mt-2">
              <h1 class="country-code">{{ player.country.code }}</h1>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col">
                <p>career Titles</p>
              </div>
            </div>
            <div class="row">
              <div class="col success-info">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from "@/data/data.json";
import { mapGetters } from "vuex";
export default {
  name: "ModalPlayer",
  data() {
    return {
      myJson: data,
      country: null,
    };
  },
  computed: {
    ...mapGetters({
      player: "player",
    }),
    nameOfCountry() {
      let key = this.player.country.code;
      return this.myJson[key];
    },
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
@import "@/styles/responsive.scss";
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
.country-code {
  letter-spacing: 25px;
  font-size: 50px;
  color: $black-color;
  opacity: 30%;
  font-weight: 100 !important;
  font-family: $title-font;
}
.modal {
  max-width: 80%;
  height: 90%;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: $white-color;
  box-shadow: 2px 2px 20px 1px;

  display: flex;
  overflow: initial;
}
.modal > .row {
  width: 100vw;
  position: relative;
  margin-left: -46vw;
  height: 100px;
  margin-top: 100px;
  left: 50%;
}
.container-image > img {
  filter: drop-shadow(7px 0px 10px $black-color);
  float: left;
  max-width: 600px;
  height: 800px;
  object-fit: cover;
  left: -3vh;

  bottom: -2vh;
  flex-shrink: 0;
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
  background: -webkit-linear-gradient(#eee, grey);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.name-style {
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

.info-section > .row {
  margin-bottom: 10%;
}
p {
  text-transform: uppercase;
  font-family: $text-font;
  color: $black-color;
  opacity: 30%;
  letter-spacing: 2px;
  font-size: 20px;
  font-weight: 600;
  margin: 17px 0;
}
b {
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
  background-size: contain;
}
.additional-info-container {
  position: relative;
  margin-bottom: 5.5%;
  max-width: 16%;
}
@media (max-width: $breakpoint-medium) {
  .additional-info-container {
    max-width: 100%;
    margin-left: 5%;
  }
  .col-info-section {
    margin: 0 5%;
  }
  h1 {
    font-size: max(5vw, 30px) !important;
  }
  h2 {
    font-size: max(6vw, 40px) !important;
  }
  .modal {
    overflow: auto;
  }
}
.success-info {
  font-weight: lighter;
  font-family: $title-font;
  font-size: 20px;

  color: $main-color;
}
</style>
