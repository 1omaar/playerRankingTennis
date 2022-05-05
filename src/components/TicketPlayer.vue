<template>
  <div class="container ticket-style m-2  m-md-4 w-lg-50" >
    <div class="row">

    <div class="col-6 col-sm-4 picture-container">
      <img class=" picture" :src="player.picture" alt="photo du joueur">
    </div>
    <div class="col-6 col-sm-8 pt-4 pb-4">
       <h4 class="pl-3 titre-card-joueur-home mb-4">{{player.firstname}} {{player.lastname}}</h4>
       <div class="container">

       <div class="row">
         <div class="col">
            <p class="sous-titre-card-joueur-home mb-0">Rank</p>
             <p class="titre-card-joueur-home">{{player.data.rank}}</p>
         </div>
        <div class="col">
            <p class="sous-titre-card-joueur-home mb-0">POINTS</p>
             <p class="titre-card-joueur-home">{{player.data.points}}</p>
        </div>
        <div class="col">
              <p class="sous-titre-card-joueur-home mb-0">COUNTRY</p>
             <p class="titre-card-joueur-home">{{player.country.code}}</p>
        </div>
       </div>
       </div>
    </div>
    </div>
  </div>
   
</template>
<script>

export default {
  name:'TicketPlayer' ,
 props:{
   player:{
     type:Array
   }
 }

}
</script>
<style lang="scss" scoped>


.picture-container{
  position:relative;
  overflow:hidden
}
@media screen and (min-width: 1200px) {
 .picture{
   position: absolute;
   margin:auto;
   left:-100px;
   right:-100px;
   max-width:120%!important; 
 }
}
@media screen and (min-width: 992px) {
 .picture{
   position: absolute;
   margin:auto;
   left:-100px;
   right:-100px;
  max-width: 140%;
 }
}

@media screen and (min-width: 576px) {
 .picture{
   position: absolute;
   margin:auto;
   left:-100px;
   right:-100px;
  max-width: 100%;
 }
}
@media screen and (max-width: 575px) {
 .picture{
   position: absolute;
   margin:auto;
   left:-80px;
   right:-100px;
  max-width: 130%;
  bottom: -30px;
 
  
 }
}
.ticket-style{
  background-color: white;

  padding: 0% 2% 0%;
}
.titre-card-joueur-home{
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #F2753B;
  text-align: start;
  font-style: normal;  
}
.sous-titre-card-joueur-home{
  font-family:'Mulish', sans-serif;
  font-weight: bold;
  color: #000000;
  opacity: 30%;
  text-align: start;
}
@media screen and (min-width: 1200px) {
.ticket-style{
  max-width: 35%!important;
}
}
@media screen and (min-width: 992px) {
.ticket-style{
  max-width: 50%;
}
}
@media screen and (max-width: 768px) {
.ticket-style{
  max-width: 96%;

}
}
</style>