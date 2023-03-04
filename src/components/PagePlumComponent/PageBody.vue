<template>
  <q-scroll-area class="page-body absolute-top fit constrain text-black">
    <div class="page-body-spacer-header"></div>
    <slot />
    <div class="page-body-spacer-footer"></div>
  </q-scroll-area>
</template>

<script>
export default {
  name: "PageBody",
};
</script>

<style lang="sass"></style>
