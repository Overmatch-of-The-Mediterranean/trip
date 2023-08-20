<template>
  <div class="loading" @click="handleShow">
    <div class="loading-img">
        <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/main';

const mainStore = useMainStore()

const handleShow = () => {
    mainStore.isLoading = !mainStore.isLoading
 }


</script>

<style lang='less' scoped>
.loading {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, .2);
    display: flex;
    justify-content: center;
    align-items: center;
    .loading-img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 104px;
        height: 104px;
        background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;
        img {
            width: 70px;
            height: 70px;
            margin-bottom: 10px;
        }
    }

}
</style>
