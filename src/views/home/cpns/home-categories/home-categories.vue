<template>
    <div class="categories">
         <template v-for="item in categories" :key="item.id">
             <div class="category">
                 <img :src="item.pictureUrl" alt="">
                 <span class="title">{{ item.title }}</span>
             </div>
         </template>
    </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home.js'
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
homeStore.fetchHomeCategories()

const { categories } = storeToRefs(homeStore)


</script>

<style lang='less' scoped>
.categories {
    display: flex;
    padding: 0 8px;
    margin-top: 20px;
    overflow-x: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    .category {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 52px;
        flex-shrink: 0;
        padding: 0 12px;
        img {
            align-self: center;
            width: 32px;
        }
        .title {
            font-size: 12px;
            color: #646566;
        }
    }
}
</style>
