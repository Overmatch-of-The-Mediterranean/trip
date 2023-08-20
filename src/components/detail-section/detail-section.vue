<template>
  <div class="detail-section">
    <div class="header">
        <h2>{{ title }}</h2>
    </div>
    <div class="content">
        <slot></slot>
    </div>
    <div class="footer">
        {{ more }}
        <van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup>

defineProps({
    title: {
        type: String,
        default:'默认内容'
    },
    more: {
        type: String,
        default:''
    }
})


</script>

<style lang='less' scoped>
.detail-section {
    border-top: 5px solid #f2f3f4;
    padding:0 15px;
    .header{
        line-height:50px;
        height:50px;
        border-bottom: 1px solid #eee;
        h2 {
            font-size: 20px;
            color: #333;
        }
    }
    .content {
        padding: 8px 0;
    }
    .footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 44px;
        line-height: 44px;
        color: #ff9645;
        font-size: 14px;
        font-weight: 600;
    }
    
}
</style>
