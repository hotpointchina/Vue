<template>
  <container>
    <Ball></Ball>
  </container>
</template>


<script>
import Ball from "./components/Ball";
export default {
  name: "App",

  setup() {
    return {
      Ball,
    };
  },
};
</script>

