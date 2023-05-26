<script setup>
import { ref, onUpdated } from 'vue'
import axios from 'axios'
const dataUser = ref(null)
const dataAll = ref('')
const dataRes = ref('')
const flag = ref(false)
// AI 响应信息
const dataAI = async () => {
  flag.value = true
  const res = await axios({
    method: 'GET',
    url: `https://v2.api-m.com/api/chatgpt?msg=${dataUser.value}`,
  })
  dataRes.value = res.data.data
  dataAll.value += `<p class="dataAi"><span class="box2">${dataRes.value}</span></p>`
  flag.value = false
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
  <div class="outer">
    <van-loading type="spinner" color="#1989fa" v-show="flag" />
    <div class="content" ref="el" v-html="dataAll"></div>
    <div class="console">
      <input type="text" placeholder="请输入内容" @keydown.enter="send" v-model="dataUser">
      <button class="btn1" @click="send">发言</button>
      <button class="btn2" @click="dataDelete">清屏</button>
    </div>
  </div>
</template>

<style>
.outer {
  height: 97vh;
  border: skyblue 10px solid;
  background-color: #cfeaff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
}

.content {
  width: 95vw;
  height: 80vh;
  background-color: #fff;
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
}

p {
  display: inline-block;
  margin: 5px 0;
  display: block;
  text-align: end;
  font-size: 3vw;
}

.box {
  background-color: #87ceeb;

}

.box2 {
  background-color: #bfa;
}

.dataAi {
  text-align: justify;
  background-color: #fff;
}

input {
  width: 70%;
  height: 50px;
}

.btn1,
.btn2,
.btn3 {
  width: 13%;
  height: 55px;
}
</style>
