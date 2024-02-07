<!--
    Credits: Pranev (aka) NeTT
    Github: https://github.com/retraigo
    Discord: https://discord.gg/A69vvdK
-->
<template>
    <div>
        <div ref="topcontainer" class="top-container group">
            <div class="main-content bg-fixed">
            </div>
            <div ref="toptext" style=""
                class="midtext text-sm lg:text-xl transition-opacity duration-500 ease-in-out mt-12 max-w-5xl w-full mx-auto">
                <div class="absolute top-8 hidden lg:flex flex-row justify-between items-center max-w-5xl w-full">
                    <img src="/EEC_ICON.webp" class="w-28 h-28" />
                    <img src="/icons/2024/ai_logo.webp" class="w-28 h-28" />
                </div>
                <span class="font-loubag uppercase tracking-wider text-2xl lg:text-3xl mt-8">Easwari Engineering College
                    <br />(Autonomous)</span>
                <span class="font-berkshire tracking-wider text-2xl lg:text-3xl mt-8">Department of Artificial Intelligence & Data Science
                    <br />Presents</span>
            </div>
            <div ref="midtext" style=""
                class="midtext text-5xl md:text-6xl lg:text-8xl lg:mt-16 xl:text-9xl transition-opacity duration-500 ease-in-out mt-12">
                <img src="/icons/2024/title.webp" class="w-full text-6xl lg:max-w-lg font-shadowed" alt="Datronix">
            </div>
            <div ref="midlogo" class="midtext transition-opacity duration-500 ease-in-out mt-8">
                <div class="flex flex-col items-center mx-auto">
                    <img src="/icons/2024/glow_logo_1.webp"
                        class="w-full lg:w-96 p-5 transition duration-500 ease-in-out transform hover:scale-110" />
                </div>
            </div>
            <div ref="midcountdown" style="
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
                " class="midtext transition-opacity duration-500 ease-in-out"></div>
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
    color: #c09f0a;
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
    z-index: 30;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
}
</style>