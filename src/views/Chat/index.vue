<script setup>
import { ref, onUpdated, computed } from 'vue'
import axios from 'axios'
import { useStoreSunMoon } from '@/store/index'
const useStore = useStoreSunMoon()
const dataUser = ref(null)
const dataAll = ref('')
const flag = ref(false)
const bgColor = computed(() => {
    return useStore.flag ? '#fff' : '#000'
})
// AI 响应信息
const dataAI = async () => {
    flag.value = true
    let res = await axios({
        method: 'GET',
        url: `https://v2.api-m.com/api/chatgpt?msg=${dataUser.value}`,
        // url: `http://apis.liaomengyun.top/API/qing_chat.php?msg=${dataUser.value}`,
    })
    if (res.data.msg === '系统错误') {
        dataAll.value += `<pre> 系统错误，请稍后重试</pre> `
        flag.value = false
    } else {
        dataAll.value += `<pre> ${dataFrom(res)}</pre> `
        flag.value = false
    }
}

// 转义ai响应信息
const dataFrom = (res) => {
    let dataCode = res.data.data.split('')
    dataCode = dataCode.map(char => {
        if (char === '<') {
            return '&lt;'
        } else if (char === '>') {
            return '&gt;'
        } else {
            return char
        }
    })
    dataCode = dataCode.join('')
    return dataCode
}
// 发送信息
const send = () => {
    dataAll.value += `<p><span class="box">${dataUser.value}</span></p>`
    dataAI()
    dataUser.value = ''
}
// 清屏
const dataDelete = () => {
    dataAll.value = ''
}
// 消息更新自动滚动到最底部
const el = ref()
onUpdated(() => {
    el.value.scrollTo({
        top: el.value.scrollHeight,
        behavior: 'smooth',
    })
})
</script>
<template>
    <div class="outer" :style="{ backgroundColor: bgColor }">
        <div class="ballsS">
            <div class="balls" v-show="flag">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div div class=" content" ref="el" v-html="dataAll" :style="{ backgroundColor: bgColor }"></div>
        <div class="console">
            <input type="text" placeholder="请输入内容" @keydown.enter="send" v-model="dataUser">
            <button class="btn1" @click="send">发送</button>
            <button class="btn2" @click="dataDelete">清屏</button>
        </div>
    </div>
</template>

<style lang="less">
.balls {
    width: 4em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
}

.balls div {
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    background-color: #777;
}

.balls div:nth-of-type(1) {
    transform: translateX(-100%);
    animation: left-swing 0.5s ease-in alternate infinite;
}

.balls div:nth-of-type(3) {
    transform: translateX(-95%);
    animation: right-swing 0.5s ease-out alternate infinite;
}

@keyframes left-swing {

    50%,
    100% {
        transform: translateX(95%);
    }
}

@keyframes right-swing {
    50% {
        transform: translateX(-95%);
    }

    100% {
        transform: translateX(100%);
    }
}

pre {
    font-size: 2vw;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-weight: 500;
    color: #888;
}

.outer {
    // position: absolute;
    height: 92vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: -2;
}

.content {
    width: 95vw;
    height: 80vh;
    margin: 0 auto;
    position: relative;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
}

.console {
    width: 95vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    font-size: 6px;
}

p {
    display: inline-block;
    margin: 5px 0;
    display: block;
    text-align: end;
    font-size: 3vw;
}

.box {
    font-size: 4vw;
    font-weight: bold;
    color: #999;
}

input {
    width: 70%;
    height: 3vh;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #777;
    color: #ccc !important;
    font-size: 2em !important;
}

.btn1,
.btn2 {
    width: 14%;
    height: 3vh;
    border: none;
    background-color: transparent;
    color: #777;
    font-size: 2em;
}

::-webkit-scrollbar {
    width: .5vw;
    background-color: #777;
}

::-webkit-scrollbar-track {
    background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
    background-color: #888;
}

::-webkit-scrollbar {
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
}


@media screen and (min-width: 768px) {
    .outer {
        box-sizing: border-box;
        height: 92vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        z-index: -2;
        background-color: black;
    }

    .ballsS {
        width: 55vw;
        margin: 0 auto;
    }

    .balls {
        width: 200px;
        height: 40px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        z-index: 4;
    }

    .balls div {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #ccc;
    }

    .balls div:nth-of-type(1) {
        transform: translateX(-100%);
        animation: left-swing 0.5s ease-in alternate infinite;
    }

    .balls div:nth-of-type(3) {
        transform: translateX(-95%);
        animation: right-swing 0.5s ease-out alternate infinite;
    }

    .content {
        width: 55vw;
        height: 80vh;
        margin: 0 auto;
        position: relative;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        border-left: .5vw solid #f5f5f5;
    }

    .console {
        width: 55vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        font-size: 16px;
    }

    pre {
        font-size: 1.4vw;
        white-space: pre-wrap;
        word-wrap: break-word;
        font-weight: 500;
        color: #888;
    }

    input {
        width: 70%;
        height: 3vh;
        border: none;
        background-color: transparent;
        border-bottom: 1px solid #777;
        color: #ccc !important;
        font-size: 2.1vh !important;
    }

    .btn1,
    .btn2 {
        width: 13%;
        height: 3vh;
        border: none;
        background-color: transparent;
        color: #777;
        font-size: 2.3vh;
    }

    .box {
        font-size: 5vh;
        font-weight: bold;
        color: #999;
    }
}
</style>