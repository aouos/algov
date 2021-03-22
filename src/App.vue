<template>
  <div class="anima">
    <img src="./image/logo/logo.jpg" alt="" />
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Anima",
    };
  },
  mounted () {
    console.log("Hello");
  },
};
</script>

<style>
.anima {
  width: 100%;
  padding-top: 2em;
  text-align: center;
}

.anima img {
  max-width: 12em;
  height: 12em;
}
</style>