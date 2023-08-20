<template>
  <div class="home-item-v3">
    <div class="item-wrapper">
        <div class="item">
            <div class="cover">
                <img :src="itemData.image.url" alt="">
            </div>
            <div class="info">
                <div class="location">
                    <img src="@/assets/img/home/location.png" alt="">
                    <span>{{ itemData.location }}</span>
                </div>

                <div class="home-name">
                    {{ itemData.houseName }}
                </div>
                <div class="summary">
                    {{ itemData.summaryText }}
                </div>
                <div class="price">
                    <span class="new">￥{{ itemData.finalPrice }}</span>
                    <span class="old">￥{{ itemData.productPrice }}</span>
                    <div class="text">{{ itemData?.priceTipBadge?.text }}</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
    itemData: {
        type: Object,
        default: () => ({})
    }
})


</script>

<style lang='less' scoped>
.home-item-v3 {
    box-sizing: border-box;
    width: 50%;
    .item-wrapper {
        margin: 5px;
        .item {
            .cover {
                img{
                    border-radius: 6px;
                    width: 100%;
                }
            }
            .info {
                width: 100%;
                padding: 8px 10px;
                box-sizing: border-box;

                .location {
                    display: flex;
                    align-items: center;
                    img {
                        width: 12px;
                    }
                    span {
                        margin-left: 2px;
                        font-size: 12px;
                        color: #666;
                    }
                }
                .home-name {
                    margin: 5px 0;

                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .summary {
                    font-size: 12px;
                }
                .price {
                    display: flex;
                    margin: 8px 0;
                    .new {
                        color: #ff9645;
                    }
                    .old {
                        font-size: 12px;
                        color: #999;
                        margin: 0 3px;
                        text-decoration: line-through;
                    }
                    .text {
                        background-image: linear-gradient(270deg, #f66, #ff9f9f);
                        color: #fff;
                        padding: 0 6px;
                        border-radius: 8px;
                        font-size: 12px;
                    }
                }
            }
        }
    }
}

</style>
