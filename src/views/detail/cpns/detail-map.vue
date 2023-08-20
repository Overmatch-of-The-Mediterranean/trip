<template>
  <div class="detail-map">
    <detail-section title="位置周边" more="查看更多周边信息">
        <div ref="baiduRef" class="baidu">

        </div>
    </detail-section>
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import DetailSection from '@/components/detail-section/detail-section.vue'


const props = defineProps({
    position: Object,
    default: () => ({})
})

const baiduRef = ref()

onMounted(() => {
    let map = new BMapGL.Map(baiduRef.value);          // 创建地图实例 
    let point = new BMapGL.Point(props.position.longitude, props.position.latitude);  // 创建点坐标 
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别

    const marker = new BMapGL.Marker(point);        // 创建标注   
    map.addOverlay(marker);                     // 将标注添加到地图中
})


</script>

<style lang='less' scoped>
.baidu {
    height: 250px;
}

</style>
