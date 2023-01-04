<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :height="`${size}`"
        :width="`${size}`"
        viewBox="0 0 32 32"
    >
        <defs>
            <clipPath id="clipShadow">
                <path
                    d="M -4 28 A 24 54 3 1 1 36 28 A 24 24 3 0 0 -4 28 Z"
                    fill="rgba(0,0,0,0.2)"
                />
            </clipPath>
            <clipPath id="clipEye">
                <circle cx="16" cy="0" r="24" />
            </clipPath>
            <clipPath id="clipInnerEye">
                <circle cx="16" cy="16" r="9" />
            </clipPath>
        </defs>
        <g v-if="!eyeClosed">
            <!--LASHES-->
            <path
                :d="
                    left
                        ? `M 24 8 L 29 3 M 27 10 L 30 7 M 22 5 L 25 2`
                        : `M 8 8 L 3 3 M 5 10 L 2 7 M 10 5 L 7 2`
                "
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#191919"
                fill="transparent"
            />
            <!--SCLERA-->
            <circle cx="16" cy="16" r="12" fill="#ffffff" />
            <!--IRIS-->
            <circle
                cx="16"
                cy="16"
                r="9"
                :fill="gray ? `#9f9f9f` : `#08c2c6`"
            />
            <circle
                cx="16"
                cy="16"
                r="5"
                :fill="gray ? `#7f7f7f` : `#17898b`"
            />
            <ellipse
                cx="16"
                cy="24"
                rx="4"
                ry="3"
                :fill="gray ? `#6f6f6f` : `#1cb0b3`"
                clip-path="url(#clipInnerEye)"
            />
            <circle
                cx="16"
                cy="16"
                r="9"
                stroke-width="1"
                :stroke="gray ? `#4e4e4e` : `#0e6e70`"
                fill="transparent"
            />
            <!--PUPIL-->
            <path
                d="M 10 16 Q 16 16 16 24 Q 16 16 22 16 Q 16 16 16 8 Q 16 16 10 16 Z"
                :fill="gray ? `#303030` : `#095052`"
            />
            <!--SHADOW-->
            <circle
                clip-path="url(#clipShadow)"
                cx="16"
                cy="16"
                r="12"
                fill="rgba(0,0,0,0.2)"
            />
            <!--HIGHLIGHTS-->
            <ellipse cx="22" cy="16" rx="3.5" ry="2" fill="#ffffff" />
            <circle cx="12" cy="12" r="1.5" fill="#ffffff" />
            <!--OUTER STUFF-->
            <circle
                clip-path="url(#clipEye)"
                cx="16"
                cy="16"
                r="12"
                stroke="#191919"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="transparent"
            />
        </g>
        <g v-else>
            <!--LASHES-->
            <path
                :d="
                    left
                        ? `M 27 17 L 30 21 M 25 19 L 27 23 M 22 19 L 23 24`
                        : `M 5 17 L 2 21 M 7 19 L 5 23 M 10 19 L 9 24`
                "
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#191919"
                fill="transparent"
            />
            <!--OUTER STUFF-->
            <path
                d="M 4 16 A 24 28 3 0 0 28 16"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#191919"
                fill="transparent"
            />
        </g>
    </svg>
</template>

<script setup lang="ts">
    const { size, gray, eyeClosed, left } = defineProps<{
        size: string;
        gray: boolean;
        eyeClosed: boolean;
        left: boolean;
    }>();
</script>
