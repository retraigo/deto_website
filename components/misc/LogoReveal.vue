<!--
    Credits: Pranev (aka) NeTT
    Github: https://github.com/retraigo
    Discord: https://discord.gg/A69vvdK
-->
<template>
    <div>
        <div ref="topcontainer" class="top-container group">
            <div
                class="main-content"
                @mousemove="movedaro"
                @touchmove="touchdaro"
                @mouseenter="() => (isTouched = true)"
                @mouseleave="onLeave"
                @touchstart="() => (isTouched = true)"
                @touchend="onLeave"
            >
                <div
                    :class="`movingPointer transition-opacity duration-500`"
                    ref="movingthing"
                    :style="{
                        left: coordinates.x - 60 + 'px',
                        top: coordinates.y - 260 + 'px',
                    }"
                />
            </div>
            <div
                ref="toptext"
                style=""
                class="midtext text-sm lg:text-xl transition-opacity duration-500 ease-in-out mt-12 max-w-5xl w-full mx-auto"
            >
                <div
                    class="absolute top-8 hidden lg:flex flex-row justify-between items-center max-w-5xl w-full"
                >
                    <img src="/EEC_ICON.webp" class="w-28 h-28" />
                    <img src="/icons/ai_logo.webp" class="w-28 h-28" />
                </div>
                <span class="font-azonix tracking-wider text-2xl lg:text-3xl mt-8"
                    >Easwari Engineering College <br />(Autonomous)</span
                >
                <span class="font-azonix tracking-wider text-lg mt-8"
                    >Department of Artificial Intelligence & Data Science
                    <br />Presents</span
                >
            </div>
            <div
                ref="midtext"
                style=""
                class="midtext text-5xl md:text-6xl lg:text-8xl lg:mt-16 xl:text-9xl transition-opacity duration-500 ease-in-out mt-12"
            >
                <span class="font-cinzel tracking-wider">{{
                    Constants.NAME.toUpperCase()
                }}</span>
            </div>
            <div
                ref="midlogo"
                style="
                    -webkit-mask-image: radial-gradient(
                        circle at 77px 546px,
                        black 40%,
                        transparent 100%
                    );
                    mask-image`: `radial-gradient(
                        circle at 77px 546px,
                        black 40%,
                        transparent 100%
                    );
                "
                class="midtext transition-opacity duration-500 ease-in-out mt-8"
            >
                <div class="flex flex-col items-center mx-auto">
                    <img
                        src="/icons/datronix.webp"
                        class="w-full lg:w-96 p-5 transition duration-500 ease-in-out transform hover:scale-110"
                    />
                </div>
            </div>
            <div
                ref="midcountdown"
                style="
                    -webkit-mask-image: radial-gradient(
                        circle at 140px 98px,
                        black 40%,
                        transparent 100%
                    );
                    mask-image`: `radial-gradient(
                        circle at 140px 98px,
                        black 40%,
                        transparent 100%
                    );
                "
                class="midtext transition-opacity duration-500 ease-in-out"
            ></div>
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
        color: #c39232;
        pointer-events: none;
        font-family: Atmospheric, Geneva, Tahoma, sans-serif;
        font-weight: 600;
        bottom: 0;
        left: 0;
        right: 0;
        widows: 100%;
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
        opacity: 0;
        border-radius: 9999px;
        z-index: 40;
    }
    .top-container {
        min-height: 100vh;
        background-color: #1d001600;
        position: relative;
        overflow: hidden;
    }
    .main-content {
        min-height: 100vh;
        position: absolute;
        cursor: wait;
        background: url("/pattern_dark.webp");
        background-attachment: fixed;
        z-index: 30;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
    }
</style>
<script setup lang="ts">
    import { text } from "stream/consumers";

    const coordinates = ref<{ x: number; y: number }>({ x: 84, y: 155 });
    function onLeave() {
        movingthing.value.style.opacity = "0";
        isTouched.value = false;
    }
    function move(e: { pageX: number; pageY: number }) {
        if (!isTouched.value) {
            movingthing.value.style.opacity = "0";
            return;
        }
        let textRect = topcontainer.value.getBoundingClientRect();

        const pointerLeft = textRect.left + textRect.width / 2;
        const pointerTop = textRect.top + textRect.height / 2;
        console.log(pointerLeft, pointerTop);
        const distance = calculateDistance(
            pointerLeft,
            pointerTop,
            e.pageX,
            e.pageY
        );
        console.log("d", distance);
        const size = Math.max((1000 - distance) / 200, 2);

        //        movingthing.value.style.width = movingthing.value.style.height = `${Math.max(Math.round(size * 100), 300)}px`
        movingthing.value.style.filter = `blur(${Math.min(
            Math.max(size * 50, 100),
            160
        )}px)`;
        movingthing.value.style.opacity = `${Math.min(
            Math.max(size / 4, 0.8),
            1
        )}`;
        coordinates.value.x = e.pageX - 100;
        coordinates.value.y = e.pageY;

        let logoGradient = `radial-gradient(circle at ${
            e.pageX - textRect.left
        }px ${e.pageY - textRect.top}px, black 40%, transparent 100%)`;
        //@ts-ignore Just ignore
        midtext.value.style["-webkit-mask-image"] = logoGradient;
        //@ts-ignore Just ignore
        midtext.value.style["mask-image"] = logoGradient;
        midtext.value.style.opacity = `${Math.min(Math.max(size / 4, 0.7), 1)}`;

        textRect = toptext.value.getBoundingClientRect();
        logoGradient = `radial-gradient(circle at ${
            e.pageX - textRect.left
        }px ${e.pageY - textRect.top}px, black 40%, transparent 100%)`;

        //@ts-ignore Just ignore
        toptext.value.style["-webkit-mask-image"] = logoGradient;
        //@ts-ignore Just ignore
        toptext.value.style["mask-image"] = logoGradient;
        toptext.value.style.opacity = `${Math.min(Math.max(size / 4, 0.7), 1)}`;

        textRect = midlogo.value.getBoundingClientRect();
        logoGradient = `radial-gradient(circle at ${
            e.pageX - textRect.left
        }px ${e.pageY - textRect.top}px, black 40%, transparent 100%)`;

        //@ts-ignore Just ignore
        midlogo.value.style["-webkit-mask-image"] = logoGradient;
        //@ts-ignore Just ignore
        midlogo.value.style["mask-image"] = logoGradient;
        midlogo.value.style.opacity = `${Math.min(Math.max(size / 4, 0.7), 1)}`;

        textRect = midcountdown.value.getBoundingClientRect();
        logoGradient = `radial-gradient(circle at ${
            e.pageX - textRect.left
        }px ${e.pageY - textRect.top}px, black 40%, transparent 100%)`;
        //@ts-ignore Just ignore
        midcountdown.value.style["-webkit-mask-image"] = logoGradient;
        //@ts-ignore Just ignore
        midcountdown.value.style["mask-image"] = logoGradient;
        midcountdown.value.style.opacity = `${Math.min(
            Math.max(size / 4, 0.7),
            1
        )}`;
    }
    function movedaro(e: MouseEvent) {
        move(e);
    }
    function calculateDistance(x1: number, y1: number, x2: number, y2: number) {
        return Math.sqrt(~~((x2 - x1) ** 2) - ~~((y2 - y1) ** 2)) || 0;
    }
    function touchdaro(e: TouchEvent) {
        move({
            pageX: e.targetTouches[0].pageX - 100,
            pageY: e.targetTouches[0].pageY,
        });
    }
    const isTouched = ref(false);
    //@ts-ignore Just ignore
    const movingthing = ref<HTMLDivElement>(null);
    //@ts-ignore Just ignore
    const midtext = ref<HTMLDivElement>(null);
    //@ts-ignore Just ignore
    const midlogo = ref<HTMLDivElement>(null);
    //@ts-ignore Just ignore
    const midcountdown = ref<HTMLDivElement>(null);
    //@ts-ignore Just ignore
    const toptext = ref<HTMLDivElement>(null);

    //@ts-ignore Just ignore

    const topcontainer = ref<HTMLDivElement>(null);
</script>
