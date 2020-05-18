<template>
  <div id="app">
    <shoppingMall></shoppingMall>
  </div>
</template>

<script>
import ShoppingMall from "./components/pages/ShoppingMall";
export default {
  name: "App",
  components: {
    ShoppingMall
  }
};
</script>

<style>
html {
  max-width: 750px;
  margin: 0 auto;
}
</style>
