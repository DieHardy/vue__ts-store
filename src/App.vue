<template>
<div>
  <MenuPage/>
  <h1>Project: {{ projectName }} </h1>
  <ul>
    <li>{{ product }}</li>
  </ul>
</div>
</template>

<style>

</style>
<script setup lang="ts">
import MenuPage from "./components/MenuPage.vue"

import {ref} from 'vue'
const projectName = ref<null | string>(null)
projectName.value = 'Wurkio'

import type {IProduct} from './types/product'

const product = ref<IProduct>({
    id: 1,
    title: 'I`m product'
})




</script>