<!--
    Credits: Pranev (aka) NeTT
    Github: https://github.com/retraigo
    Discord: https://discord.gg/A69vvdK
-->
<template>
    <div>
        <div class="top-container group">
            <div
                class="main-content"
                @mousemove="movedaro"
                @touchmove="touchdaro"
                @touchstart="() => (isTouched = true)"
                @touchend="() => (isTouched = false)"
            >
                <div
                    :class="`movingPointer opacity-50 ${
                        isTouched ? `lg:opacity-50` : `lg:opacity-0`
                    } group-hover:opacity-50 transition duration-500 ease-in-out`"
                    ref="movingthing"
                    :style="{
                        left: coordinates.x - 60 + 'px',
                        top: coordinates.y - 260 + 'px',
                    }"
                />
            </div>
            <div class="midtext text-4xl md:text-6xl lg:text-8xl xl:text-9xl">
                <span>{{ Constants.NAME }}</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .midtext {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: black;
        pointer-events: none;
        font-family: Atmospheric, Geneva, Tahoma, sans-serif;
        font-weight: 600;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        widows: 100%;
        min-height: 50vh;
        text-align: center;
        z-index: 30;
    }
    .movingPointer {
        background-image: url(/reveal.webp);
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        position: absolute;
        width: 420px;
        height: 420px;
        filter: blur(32px);
        border-radius: 9999px;
        z-index: 40;
    }
    .top-container {
        min-height: 50vh;
        background-color: #1d001600;
        position: relative;
        overflow: hidden;
    }
    .main-content {
        min-height: 50vh;
        position: absolute;
        cursor: wait;
        background-color: black;
        z-index: 30;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
    }
</style>
<script setup lang="ts">
    const coordinates = ref<{ x: number; y: number }>({ x: 44, y: 224 });
    function movedaro(e: MouseEvent) {
        coordinates.value.x = e.pageX - 100;
        coordinates.value.y = e.pageY;
    }
    function touchdaro(e: TouchEvent) {
        coordinates.value.x = e.targetTouches[0].pageX - 100;
        coordinates.value.y = e.targetTouches[0].pageY;
        console.log(e.targetTouches[0]);
    }
    const isTouched = ref(false);
</script>
