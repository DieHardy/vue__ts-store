<template>
<div>
  <HeaderBar />
  <router-view />
  <FooterBar />
</div>
</template>

<style>

</style>
<script setup lang="ts">
import HeaderBar from "./components/HeaderBar.vue"
import FooterBar from "./components/FooterBar.vue"


import { RouterView } from "vue-router";
 </script>