<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
onMounted(() => {
    const mima = localStorage.getItem('mima')
    if (mima == 'iii') {
        return
    } else if (prompt('输入密码') !== 'iii') {
        window.close()
    } else {
        localStorage.setItem('mima', 'iii')
    }
})
</script>

<template>
    <Header />
    <RouterView />
</template>

<style lang="less" scoped></style>