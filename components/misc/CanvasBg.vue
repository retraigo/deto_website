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
            >
                <div
                    :class="`movingPointer opacity-0 group-hover:opacity-50 transition duration-500 ease-in-out`"
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
<script setup lang="ts">
    const coordinates = ref<{ x: number; y: number }>({ x: 44, y: 224 });
    function movedaro(e: MouseEvent) {
        coordinates.value.x = e.pageX - 100;
        coordinates.value.y = e.pageY;
    }
</script>
