<script setup>
import { ref, computed } from 'vue'
import { useStoreSunMoon } from '@/store/index'
const useStore = useStoreSunMoon()
const showFlag = ref(true)
// 切换主题色
const sunMoon = () => {
    useStore.SunMoon()
}
const bgColor = computed(() => {
    return useStore.flag ? '#fff' : '#000'
})
const Color = computed(() => {
    return useStore.flag ? '#000' : '#fff'
})
// 更多
const show = computed(() => {
    return showFlag.value ? 'translateY(-110vh)' : 'translateY(0)'
})
</script>

<template>
    <div class="header" :style="{ backgroundColor: bgColor }">
        <div class="left" @click="showFlag = !showFlag">
            <van-icon name="wap-nav" size="6vh" :style="{ color: Color }" v-if="showFlag" />
            <van-icon name="cross" size="6vh" :style="{ color: Color }" v-else />
        </div>
        <div class="right" @click="sunMoon">
            <i class="ri-sun-fill" v-if="useStore.flag" :style="{ color: Color }"></i>
            <i class="ri-moon-fill" v-else :style="{ color: Color }"></i>
        </div>
    </div>
     <!-- <div class="nav" :style="{ transform: show, backgroundColor: bgColor }">
      <ul>
            <li :style="{ color: Color }" @click="$router.push('/')" @click.stop="showFlag = !showFlag">美女视频</li>
            <li :style="{ color: Color }" @click="$router.push('img')" @click.stop="showFlag = !showFlag">美女图片</li>
        </ul> 
    </div>-->
</template>

<style lang="less" scoped>
.header {
    width: 98vw;
    height: 9vh;
    padding: 0 1vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 10px #ccc;
    background-color: white;
    z-index: 3;
    transition: .3s;
    position: relative;

    .left {
        width: 15vw;
        height: 6vh;
        display: flex;
    }

    .right {
        width: 15vw;
        height: 6vh;

        i {
            font-size: 6vh;
        }
    }
}

.nav {
    width: 100vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 1;
    transform: translateY(-110vh);
    transition: .5s;
    border-bottom: 1px solid #777;

    ul {
        width: 80vw;
        height: 50vh;
        display: flex;
        justify-content: center;

        li {
            width: 80vw;
            height: 5vh;
            border-bottom: 1px solid #ccc;
            line-height: 5vh;
            font-weight: 400;
            font-size: 2vh;
        }
    }
}
</style>
