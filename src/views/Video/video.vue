<script setup>
import { ref } from 'vue'
const videoUrl = ref('http://api.yujn.cn/api/xjj.php?type=video')

const wheelHandler = (e) => {
    if (e.deltaY > 0) {
        // 鼠标滚轮向上滚动时，刷新页面
        location.reload()
    }
}

const startY = ref(0)
const currentY = ref(0)
const swipeDirection = ref('')

const handleTouchStart = (event) => {
    startY.value = event.touches[0].clientY
}

const handleTouchMove = (event) => {
    currentY.value = event.touches[0].clientY

    if (currentY.value - startY.value < 0) {
        swipeDirection.value = 'Up'
        location.reload()
    } else {
        swipeDirection.value = 'Down'
    }
}
</script>

<template>
    <div @wheel="wheelHandler" @touchstart="handleTouchStart" @touchmove="handleTouchMove">
        <video :src=videoUrl class="video" autoplay="true" controls muted></video>
    </div>
</template>

<style scoped lang="less">
.video {
    width: 100%;
    height: 91vh;
    background-color: transparent;
}
</style>