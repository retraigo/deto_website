<!--
    Credits: Pranev (aka) NeTT
    Github: https://github.com/retraigo
    Discord: https://discord.gg/A69vvdK
-->
<template>
    <div>
        <div ref="topcontainer" class="top-container">
            <div class="main-content bg-fixed">
            </div>
            <div ref="toptext" style=""
                class="midtext text-sm lg:text-xl transition-opacity duration-500 ease-in-out mt-12 max-w-5xl w-full mx-auto">
                <div class="absolute top-8 hidden lg:flex flex-row justify-between items-center max-w-5xl w-full">
                    <img src="/EEC_ICON.webp" class="w-28 h-28" />
                    <img src="/icons/2024/ai_logo.webp" class="w-28 h-28" />
                </div>
                <span
                    class="font-loubag uppercase tracking-wider text-xl lg:text-3xl mt-8 bg-gradient-to-b from-yellow-300 to-red-500 text-transparent bg-clip-text">Easwari
                    Engineering College</span>
                <br /><span
                    class="font-loubag uppercase tracking-wider text-xl lg:text-3xl -mt-4 bg-gradient-to-b from-yellow-300 to-red-500 text-transparent bg-clip-text">(Autonomous)</span>
                <span
                    class="font-berkshire tracking-wider text-2xl lg:text-3xl mt-4 bg-gradient-to-b from-yellow-300 to-red-500 text-transparent bg-clip-text">Department
                    of Artificial Intelligence
                    & Data Science</span>
                <br /><span
                    class="font-berkshire tracking-wider text-2xl lg:text-3xl -mt-4 bg-gradient-to-b from-yellow-300 to-red-500 text-transparent bg-clip-text">Presents</span>
            </div>
            <div ref="midtext" style=""
                class="midtext text-5xl md:text-6xl lg:text-8xl lg:mt-7 xl:text-9xl midlogo mt-12">
                <img src="/icons/2024/title.webp" class="w-full text-6xl lg:max-w-2xl font-shadowed" alt="Datronix">
            </div>
            <div ref="midlogo" class="midtext mt-8">
                <div class="flex flex-col items-center mx-auto relative group">
                    <img src="/icons/2024/glow_logo_1.webp"
                        class="w-full lg:w-96 p-5 midlogo relative z-30" />
                </div>
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
    font-family: Atmospheric, Geneva, Tahoma, sans-serif;
    font-weight: 600;
    bottom: 0;
    left: 0;
    right: 0;
    widows: 100%;
    text-align: center;
    z-index: 30;
}

.midlogo:hover {
    filter: drop-shadow(0 0 1rem #ff0000) drop-shadow(0 0 1rem #ff0000);
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
}

.main-content {
    min-height: 100vh;
    position: absolute;
    z-index: 30;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
}
</style>
<script setup lang="ts">
</script>