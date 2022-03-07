<template>
    <div class="home">
        <h1>Home</h1>
        <h1>Count: {{ counter.count }}</h1>
        <div>
            <button @click="counter.incr">Incrementar</button>
            <button @click="counter.decr">Decrementar</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { counter } from '@/store';

    export default Vue.extend({
        layout: 'website',
        asyncData() {
            
        },
        data() {
            return {
                counter
            }
        }
    })
</script>

<style scoped>
    a.nuxt-link-exact-active {
        font-weight: bold;
    }
</style>