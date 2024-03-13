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
                class="midtext text-royal-yellow text-sm lg:text-xl transition-opacity duration-500 ease-in-out mt-12 max-w-5xl w-full mx-auto">
                <div class="absolute top-8 hidden lg:flex flex-row justify-between items-center max-w-5xl w-full">
                    <img src="/EEC_ICON.webp" class="w-28 h-28" />
                    <img src="/ssae.png" class="w-28 h-28 invert" />
                </div>
                <span class="font-loubag uppercase tracking-wider text-xl lg:text-3xl mt-8">Easwari
                    Engineering College</span>
                <br /><span class="font-loubag tracking-wider text-xl lg:text-3xl -mt-4">(Autonomous)</span>
                <span class="font-ltfunk tracking-wider text-xl lg:text-3xl mt-4 ">Department
                    of Automobile Engineering
                </span>
                <span class="font-ltfunk tracking-wider text-xl lg:text-3xl mt-4">Presents</span>
            </div>
            <div ref="midtext" style=""
                class="midtext font-bebas font-bold text-5xl md:text-6xl lg:text-8xl lg:mt-7 xl:text-9xl midlogo mt-12">
                <MiscTyper class="uppercase" :text="`Detono`" @mouseover="() => over = true"
                    @mouseout="() => over = false" />
            </div>
            <div ref="midlogo" class="midtext mt-8">
                <div class="flex flex-col items-center mx-auto relative group" @mouseover="() => moreover = true"
                    @mouseout="() => moreover = false">
                    <img src="/detono.png" class="w-full lg:w-96 p-5 midlogo relative z-30" />
                </div>
            </div>
            <div class="absolute inset-0 flex items-center justify-between w-full h-[60vh]">
                <img src="/car_l.png"
                    :class="`w-full max-w-xl ml-24 ${over ? `isaglow rotate-12` : ``} ${moreover ? `isaglow -rotate-12` : ``}`">
                <img src="/car_r.png"
                    :class="`w-full max-w-xl mr-24 ${over ? `isaglow -rotate-12` : ``} ${moreover ? `isaglow rotate-12` : ``}`">
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
    bottom: 0;
    left: 0;
    right: 0;
    widows: 100%;
    text-align: center;
    z-index: 30;
}

.midlogo:hover {
    filter: drop-shadow(0 0 1rem #f8c538) drop-shadow(0 0 1rem #f8c538);
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
const over = ref(false)

const moreover = ref(false)
</script>