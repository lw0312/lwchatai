<script setup>
import { ref } from 'vue'
const imgUrl = ref('http://api.yujn.cn/api/yht.php?type=image')

const clickHandler = () => {
    location.reload()
}
</script>

<template>
    <div class="outer">
        <img :src="imgUrl" alt="">
        <button @click="clickHandler" @touchstart="clickHandler">下一张</button>
    </div>
</template>

<style scoped lang="less">
.outer {
    width: 60%;
    height: 90vh;
    position: relative;
    margin: 0 auto;

    img {
        width: 100%;
    }

    button {
        z-index: 10;
    }
}
</style>