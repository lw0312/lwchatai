<script setup>
import { ref, computed } from 'vue'
import { useStoreSunMoon } from '@/store/index'
const imgUrl = ref('http://api.yujn.cn/api/yht.php?type=image')
const useStore = useStoreSunMoon()


const clickHandler = () => {
    location.reload()
}

const bgColor = computed(() => {
    return useStore.flag ? '#fff' : '#000'
})
</script>

<template>
    <div :style="{ backgroundColor: bgColor }">
        <div class="outer">
            <img :src="imgUrl" alt="">
            <button @click="clickHandler">下一张</button>
        </div>
    </div>
</template>

<style scoped lang="less">
div {
    height: auto;

    .outer {
        width: 60%;
        height: 90vh;
        position: relative;
        margin: 0 auto;
        z-index: 10;

        img {
            width: 100%;
            height: auto;
        }

        button {
            height: auto;
        }
    }
}
</style>