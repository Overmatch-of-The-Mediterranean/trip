<template>
 <div class="app">
    <tab-bar v-show="!route.meta.hideTabBar"></tab-bar>
    <router-view v-slot="props">
        <keep-alive include="home">
            <component :is="props.Component"></component>
        </keep-alive>
    </router-view>
    <loading v-if="mainStore.isLoading"></loading>
    
 </div>
</template>

<script setup>
import TabBar from '@/components/tab-bar/tab-bar';
import Loading from '@/components/loading/loading'
import { useRoute } from 'vue-router'
import useMainStore from '@/stores/modules/main'

const route = useRoute()

const mainStore = useMainStore()


</script>

<style scoped>

</style>
