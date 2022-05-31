
<template>
  <div>
    <order-header></order-header>

    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderHeader.vue";
import NavFooter from "../components/NavFooter.vue";
export default {
  name: "cart",
  comments: { OrderHeader, NavFooter },
  data() {
    return {};
  },
};
</script>
<style scoped >
</style>
