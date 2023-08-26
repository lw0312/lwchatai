<script setup>
import { ref } from 'vue'
const imgUrl = ref('http://api.yujn.cn/api/yht.php?type=image')

const clickHandler = () => {
    console.log(1);
    // location.reload()
}
const touchstartHandler = () => {
    console.log(2);
}
</script>

<template>
    <div class="outer">
        <img :src="imgUrl" alt="">
        <button @click="clickHandler" @change="touchstartHandler">下一张</button>
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
}
</style>