<script setup>
import { computed, ref } from 'vue'
import { useStoreSunMoon } from '@/store/index'
const useStore = useStoreSunMoon()
const videoUrl = ref('http://api.yujn.cn/api/xjj.php?type=video')

const videoEle = ref(null)
// 鼠标下滑
const wheelHandler = (e) => {
    if (e.deltaY > 0) {
        location.reload()
    }
}

// 播放完成
const endedHandler = () => {
    location.reload()
}

const touchHandler = () => {
    if (videoEle.value.paused) {
        videoEle.value.play();
    } else {
        videoEle.value.pause();
    }
}
// 手指上滑
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
const bgColor = computed(() => {
    return useStore.flag ? '#fff' : '#000'
})
</script>

<template>
    <div class="outer" :style="{ backgroundColor: bgColor }" @wheel="wheelHandler" @touchstart="handleTouchStart"
        @touchmove="handleTouchMove" @click="clickHandler">
        <video :src=videoUrl ref="videoEle" class="video" @ended="endedHandler" autoplay controls preload="metadata"
            @touchstart="touchHandler"></video>
    </div>
</template>

<style scoped lang="less">
.video {
    width: 100%;
    height: 91vh;
    background-color: transparent;
}
</style>