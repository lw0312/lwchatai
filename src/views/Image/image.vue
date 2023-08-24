<script setup>
import { ref } from 'vue'
const imgUrl = ref('http://api.yujn.cn/api/yht.php?type=image')
const clickHandler = () => {
    location.reload()
}
</script>

<template>
    <div>
        <img :src="imgUrl" alt="">
        <div @click="clickHandler">下一张</div>
    </div>
</template>

<style scoped lang="less">
div {
    position: relative;

    img {
        width: 100%;
        height: 90vh;
    }

    div {
        position: absolute;
        bottom: 0px;
        right: 0px;
        background-color: white;
    }
}
</style>