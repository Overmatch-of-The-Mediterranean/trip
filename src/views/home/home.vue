<template>
  <div class="home" ref="homeRef">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
        <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box></home-search-box>
    <home-categories></home-categories>
    <search-bar v-if="isSearchBarShow"></search-bar>

    <home-content></home-content>
    
  </div>
</template>

<script>
export default {
    name:'home'
}
</script>

<script setup>
import { watch,computed,ref,onActivated } from 'vue';
import HomeNavBar from './cpns/home-nav-bar/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box/home-search-box.vue'
import homeCategories from './cpns/home-categories/home-categories.vue';
import homeContent from './cpns/home-content/home-content.vue';
import SearchBar from '@/components/search-bar/search-bar.vue'
import useHomeStore from '@/stores/modules/home';
import useScroll from '@/hooks/useScroll'



const homeStore = useHomeStore()

const homeRef = ref()
// 监听窗口滚动
const { isReachBottom,scrollTop } = useScroll(homeRef)

watch(isReachBottom, (newValue) => { 
    if (newValue) { 
        homeStore.fetchHomegetHomeHouselist().then(() => { 
            isReachBottom.value = false
        })
    }
})

// 控制search-bar的显示与隐藏
const isSearchBarShow = computed(() => { 
    return scrollTop.value > 360
})

onActivated(() => { 
    homeRef.value.scrollTo({
        top: scrollTop.value,
    })
 })




</script>

<style lang='less' scoped>
.home {
    background-color: #fff;
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 60px;
    box-sizing: border-box;
    .banner {
        img {
            width: 100%;
        }
    }

}
</style>
