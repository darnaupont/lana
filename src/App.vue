<template>
  <div id="app" class="wrapper">
    <div class="flex main-content">
      <div class="flex-grow bg-white p-4 rounded-l-md">
        content
      </div>
      <div class="flex-grow bg-gray-100 p-4 rounded-r-md">
        cart
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
.wrapper {
  @apply min-h-screen bg-black bg-opacity-25 flex justify-center items-center;
  background-image: url("./assets/img/background.png");
  background-position: center center;
  background-size: cover;
}
.main-content{
  min-height: 70vh;
  min-width: 70vw;
}
</style>
