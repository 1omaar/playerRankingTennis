<template>
  <div class="ticket-style m-2 m-md-4 container-fluid d-flex flex-column">
     <a href="#" @click="openModal()"></a>
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
      type: Object,
    },
  },
 
  methods:{
   
  }
};
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';

@import '@/styles/responsive.scss';
.ticket-style {
  background: $white-color;
  max-width: 95%;
  height: 150px;
    box-shadow: 7px 7px 30px -5px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
  transition: transform .1s;
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
    background: $white-color;

    transition: 0.6s ease-in;
  }
}
.ticket-style a{
 
  text-align: right;
  display: block;
  z-index: 1;
}
.ticket-style a::after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: ' ';
}
.ticket-style:hover{
-ms-transform: scale(1.1); /* IE 9 */
-webkit-transform: scale(1.1); /* Safari 3-8 */
transform: scale(1.1);
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
  text-transform: uppercase;
     font-family: $text-font;
    
      color: $black-color;
      opacity: 30%;
      letter-spacing: 2px;
          font-size: 14px;
          font-weight: 600;
  text-align: start;
}
@media (min-width: $breakpoint-small) {
  .ticket-style {
    .picture {
      width: 192px;
    }

   
  }
}
</style>
