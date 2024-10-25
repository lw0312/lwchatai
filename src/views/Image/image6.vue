<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStoreSunMoon } from '@/store/index'
import axios from 'axios'
const imgUrl = ref('http://api.yujn.cn/api/r18.php?')
const useStore = useStoreSunMoon()

const img = ref(null)
const title = ref(null)
const tag = ref(null)


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
            <img :src="imgUrl" alt="" style="margin-top: 2vh;">
            <button @click="clickHandler">下一张</button>
        </div>
    </div>
</template>

<style scoped lang="less">
div {
    height: auto;
    display: flex;
    align-items: center;
    
}

@media (min-width: 800px) and (max-width: 2000px){
    .outer {
        width: auto;
        height: auto;
        position: relative;
        margin: 0 auto;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            width: auto;
            height: 80vh;
        }
        button {
            height: auto;
        }
    }
}

@media (min-width: 200px) and (max-width: 800px) {
    .outer {
        width: auto;
        height: auto;
        position: relative;
        margin: 0 auto;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
            width: 100vw;
            height: auto;
        }
        button {
            height: auto;
        }
    }
}
</style>