<template>
  
<router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
   
  },
    data() {
      return {
          players:null,
      }
  },
  methods:{
  
  },

}
</script>

<style lang="scss" >

@import '@/styles/app.scss';
#app {
  

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url('~@/assets/image/tennis.jpg');
  background-size: cover;
  

}
</style>
