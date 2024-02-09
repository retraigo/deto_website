<template>
    <div class="p-2">
        <table>
            <thead class="text-lg font-semibold uppercase">
                <th v-for="key in Object.keys(AGENDA[0])" :key="`key-${key}`" class="text-white">{{ key.charAt(0).toUpperCase() + key.slice(1)
                }}</th>
            </thead>
            <tbody class="text-base">
                <tr v-for="event, i in AGENDA" :key="event.name" class="bg-red-900/50 odd:bg-black/50">
                    <td v-for="key in Object.keys(AGENDA[0])" :key="`key-${key}-for-${i}`" class="p-2">{{ event[key] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>