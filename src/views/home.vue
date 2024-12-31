<template>
    <div class="homeLayout">
        <div class="homeItem" v-for="item in arr" @click="toPage(item.path)">{{ item.meta.title }}</div>
    </div>
</template>

<script setup>
const router = useRouter();
let arr = router.getRoutes().filter(item => item.meta.hidden !== true)
console.log(arr);

const toPage = (path) => {
    router.push(path)
}
</script>
<style scoped lang="scss">
.homeLayout {
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;

    .homeItem {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #409EFF;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        letter-spacing: 5px;
    }
}
</style>