<template>
  <div class="ticket-style m-2 m-md-4 container-fluid d-flex flex-column">
    <div class="row flex-fill">
      <div class=" col-5 col-sm-4 d-flex justify-content-start d-sm-block">
        <img class="picture " :src="player.picture" alt="photo du joueur" />
      </div>
      <div class="information col-7 col-sm-8 pt-4 ">
        <h3 class=" titre-card-joueur-home ml-3 ">
          {{ player.firstname }} {{ player.lastname }}
        </h3>
        <div class="container">
          <div class="row ">
            <div class="col d-sm-block d-flex">
              <p class="sous-titre-card-joueur-home mb-1">Rank</p>
              <p class="titre-card-joueur-home">#{{ player.data.rank }}</p>
            </div>
            <div class="col d-sm-block d-flex">
              <p class="sous-titre-card-joueur-home mb-1">POINTS</p>
              <p class="titre-card-joueur-home">{{ player.data.points }}</p>
            </div>
            <div class="col d-sm-block d-flex">
              <p class="sous-titre-card-joueur-home mb-1">COUNTRY</p>
              <p class="titre-card-joueur-home">{{ player.country.code }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TicketPlayer",
  props: {
    player: {
      type: Array,
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';

@import '@/styles/responsive.scss';
.ticket-style {
  background: $white-color;
  width: 100%;
  height: 150px;
 
  position: relative;
  overflow: hidden;
    &::before {
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    right: 100%;
    bottom: 0;
    left: 0;
    opacity: 1;
    background: rgba($main-color, 0.2);

    transition: 0.4s ease-out;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    right: 100%;
    bottom: 0;
    left: 0;
    background: white;

    transition: 0.6s ease-in;
  }
}

.picture{
   position: absolute;
    flex-shrink: 0;
       top: 6px;
    bottom: 0px;
    width: 160px;
    z-index: 10;
   transition: 0.4s ease-out;
    
}

div > h3 {
  font-size: 20px;
  margin-bottom: 8%;
}
.titre-card-joueur-home {
  font-family: $title-font;
  font-weight: bold;
  color: $main-color;
  text-align: start;

  
}

.sous-titre-card-joueur-home {
  font-family: $text-font;
  font-weight: bold;
  color: $black-color;
  opacity: 30%;
  text-align: start;
}
@media (min-width: $breakpoint-small) {
  .ticket-style {
    .picture {
      width: 192px;
    }

    // .info-container {
    //   padding: 40px 48px 40px 208px;

    //   .info-line .info {
    //     display: block;
    //   }
    // }
  }
}
</style>
