<template>
   <div class="background-error"></div>
</template>
<script>

export default {
  name: 'Error',
}

</script>
<style lang="scss" scoped>
.background-error{
  background-image: url('~@/assets/image/error.webp');
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>