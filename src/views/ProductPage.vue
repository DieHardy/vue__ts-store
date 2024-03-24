<template>
<div>
    <header>
        <ul>
            <li><router-link :to="{name: 'product', query:{} }">
            unknown</router-link></li>
            <li><router-link :to="{name: 'product', query:{from: 'youtube' } }">
            from youtube</router-link></li>
            <li><router-link :to="{name: 'product', query:{from: 'email' } }">
            from email</router-link></li>

        </ul>
    </header>
    <h1>Product page</h1>
    <p>id: {{ route.params.id }}</p>
    <p v-if="route.query">you're from: {{ route.query.from }}</p>
</div>

</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute()



</script>