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
    <div class="nav" :style="{ transform: show, backgroundColor: bgColor }">
        <ul>
            <li style="font-weight: bold;color: blue;">图片</li>
            <li :style="{ color: Color }" @click="$router.push('img')" @click.stop="showFlag = !showFlag">写真</li>
            <li :style="{ color: Color }" @click="$router.push('img2')" @click.stop="showFlag = !showFlag">二次元涩图-很顶</li>
            <li :style="{ color: Color }" @click="$router.push('img3')" @click.stop="showFlag = !showFlag">色图-超级无敌顶👍
            </li>
            <li :style="{ color: Color }" @click="$router.push('img4')" @click.stop="showFlag = !showFlag">普普通通黑丝</li>
            <li :style="{ color: Color }" @click="$router.push('img5')" @click.stop="showFlag = !showFlag">随机高清图-非常清晰
            </li>
            <li :style="{ color: Color }" @click="$router.push('img6')" @click.stop="showFlag = !showFlag">p站r18二次元-非常清晰
            </li>
            <li :style="{ color: Color }" @click="$router.push('img7')" @click.stop="showFlag = !showFlag">JK萌妹</li>
            <li :style="{ color: Color }" @click="$router.push('img8')" @click.stop="showFlag = !showFlag">随机小姐姐图片</li>
            <li style="font-weight: bold;color: blue;">视频</li>
            <li :style="{ color: Color }" @click="$router.push('/')" @click.stop="showFlag = !showFlag">清纯</li>
            <li :style="{ color: Color }" @click="$router.push('video2')" @click.stop="showFlag = !showFlag">
                大屏美女怼脸自拍，建议使用pc端观看</li>
            <li :style="{ color: Color }" @click="$router.push('video3')" @click.stop="showFlag = !showFlag">白丝</li>
            <li :style="{ color: Color }" @click="$router.push('video4')" @click.stop="showFlag = !showFlag">黑丝</li>
            <li :style="{ color: Color }" @click="$router.push('video5')" @click.stop="showFlag = !showFlag">精品</li>
            <li :style="{ color: Color }" @click="$router.push('video6')" @click.stop="showFlag = !showFlag">纯情女高</li>
            <li :style="{ color: Color }" @click="$router.push('video7')" @click.stop="showFlag = !showFlag">吊带</li>
            <li :style="{ color: Color }" @click="$router.push('video8')" @click.stop="showFlag = !showFlag">玉足</li>
            <li :style="{ color: Color }" @click="$router.push('video9')" @click.stop="showFlag = !showFlag">汉服古风</li>
            <li :style="{ color: Color }" @click="$router.push('video10')" @click.stop="showFlag = !showFlag">慢摇</li>
            <li :style="{ color: Color }" @click="$router.push('video11')" @click.stop="showFlag = !showFlag">cos</li>
        </ul>
    </div>
=======
     <!-- <div class="nav" :style="{ transform: show, backgroundColor: bgColor }">
      <ul>
            <li :style="{ color: Color }" @click="$router.push('/')" @click.stop="showFlag = !showFlag">美女视频</li>
            <li :style="{ color: Color }" @click="$router.push('img')" @click.stop="showFlag = !showFlag">美女图片</li>
        </ul> 
    </div>-->
>>>>>>> 450a806e5c5433112404abad2aff26429e0fb025
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
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 999;
    transform: translateY(-110vh);
    transition: .5s;
    border-bottom: 1px solid #777;

    ul {
        width: 80vw;
        height: 90vh;
        overflow-y: scroll;

        li {
            width: 78vw;
            height: 5vh;
            border-bottom: 1px solid #ccc;
            line-height: 5vh;
            font-weight: 400;
            font-size: 2vh;
        }
    }
}
</style>
