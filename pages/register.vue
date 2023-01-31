<template>
    <NuxtLayout>
        <section v-if="message" class="mx-auto space-y-8 mt-24">
            <h1
                class="text-center text-lg max-w-6xl font-bold font-azonix mx-auto mt-8"
            >
                {{ message }}
            </h1>
            <div v-if="message.startsWith(`To complete the registration`)">
                <div class="mx-auto text-center text-base">
                    {{ currentEvent?.pay }}
                </div>
                <a :href="upiData" class="flex flex-col items-center gap-4"
                    ><img class="w-48 h-48 mx-auto mt-4" :src="qrCode" /><span
                        class="text-zinc-600 dark:text-royal-yellow"
                        >Payment Link</span
                    >
                </a>
                <h1
                    class="text-center text-lg max-w-6xl font-bold font-azonix mx-auto mt-8"
                >
                    Send your Payment screen shot to this whatsapp link to complete the registration
                </h1>
                <a
                    :href="currentEvent?.whatsapp"
                    class="flex flex-col items-center gap-4"
                    ><span
                        class="text-zinc-600 dark:text-royal-yellow font-semibold"
                        >Click Here</span
                    >
                </a>
            </div>
        </section>
        <section v-else class="mx-auto space-y-8 mt-24">
            <h1 class="text-center text-4xl font-bold font-azonix mx-auto">
                Event Registration
            </h1>
            <div
                class="text-base max-w-3xl w-full mx-auto text-center text-zinc-700 dark:text-zinc-300"
            >
                If one or more team members own an
                <NuxtLink
                    to="/pass"
                    class="text-zinc-600 dark:text-royal-yellow"
                    >all-event pass</NuxtLink
                >, make sure to mention that to avail a discount! Note that
                absence of members whose passes have been used to avail the
                discount will result in having to pay the discounted amount
                fully.
            </div>
            <form
                @submit="applyForEvent"
                class="flex flex-col gap-4 items-center"
            >
                <div
                    class="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center max-w-3xl w-full px-2"
                >
                    <label
                        for="EVENT_NAME"
                        class="text-xl font-azonix font-semibold uppercase"
                        >Event</label
                    >
                    <select
                        name="event_name"
                        id="EVENT_NAME"
                        v-model="current_ev"
                        placeholder="Choose an Event"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2 h-12 cursor-pointer"
                        required
                    >
                        <option value="" disabled selected>
                            Choose an Event
                        </option>
                        <optgroup label="Technical">
                            <option
                                v-for="ev in tech_ev"
                                :key="ev.name"
                                :value="ev.name"
                            >
                                {{ ev.name }}
                            </option>
                        </optgroup>
                        <optgroup label="Non-Technical">
                            <option
                                v-for="ev in nontech_ev"
                                :key="ev.name"
                                :value="ev.name"
                            >
                                {{ ev.name }}
                            </option>
                        </optgroup>
                    </select>
                    <label
                        for="TEAM_NAME"
                        class="text-xl font-azonix font-semibold uppercase"
                        >Team Name</label
                    >
                    <input
                        name="team_name"
                        id="TEAM_NAME"
                        type="text"
                        placeholder="The Watchers"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                        required
                    />
                </div>
                <div class="max-w-3xl w-full mx-auto mt-4">
                    <label
                        class="text-xl font-azonix font-semibold uppercase mx-auto text-center block"
                        >Team Members</label
                    >
                    <InputMulti
                        class="mt-8"
                        @update="updateNames"
                        :key="current_ev"
                        :fields="[
                            { name: `Name`, type: `text` },
                            {
                                name: `All-Pass ID (if applicable)`,
                                type: `text`,
                            },
                        ]"
                        :max-tags="currentEvent?.maxTeam"
                    />
                </div>
                <div
                    class="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center max-w-3xl w-full px-2"
                >
                    <label
                        for="COLLEGE_NAME"
                        class="text-xl font-azonix font-semibold uppercase"
                        >Insitution Name</label
                    >
                    <input
                        name="college_name"
                        id="COLLEGE_NAME"
                        type="text"
                        placeholder="Easwari Engineering College"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                        required
                    />
                    <label
                        for="DEGREE"
                        class="text-xl font-azonix font-semibold uppercase"
                        >Degree & Branch</label
                    >
                    <input
                        name="degree"
                        id="DEGREE"
                        type="text"
                        placeholder="BSc. Computer Science"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                        required
                    />
                    <label
                        for="CONTACT_NUMBER"
                        class="text-xl font-azonix font-semibold uppercase"
                        >Contact Number</label
                    >
                    <input
                        name="contact_number"
                        id="CONTACT_NUMBER"
                        type="text"
                        placeholder="+919876598765"
                        pattern="^(?:\+91)?[0-9]{10}$"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                        required
                    />
                    <label
                        for="EMAIL_ID"
                        class="text-xl font-azonix font-semibold uppercase"
                        >Email ID</label
                    >
                    <input
                        name="email_id"
                        id="EMAIL_ID"
                        type="email"
                        placeholder="john.doe@gmail.com"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                        required
                    />
                </div>
                <div
                    class="max-w-3xl mx-auto flex items-center justify-center gap-4 mt-8 py-2"
                >
                    <input
                        name="agree_to_terms"
                        id="AGREE_TERMS"
                        type="checkbox"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border text-lg rounded-md p-2"
                        required
                    />
                    <label
                        for="AGREE_TERMS"
                        class="text-sm font-azonix font-semibold uppercase"
                        >I agree to the
                        <NuxtLink
                            to="/tos"
                            class="text-zinc-600 dark:text-royal-yellow"
                            >Terms & Conditions</NuxtLink
                        >
                        and
                        <NuxtLink
                            to="/privacy"
                            class="text-zinc-600 dark:text-royal-yellow"
                            >Privacy Policy</NuxtLink
                        ></label
                    >
                </div>
                <div
                    class="py-8 flex flex-row items-center justify-center gap-4 mx-auto"
                >
                    <span class="text-xl font-azonix font-semibold uppercase"
                        >Amount</span
                    >
                    <span class="text-lg font-azonix" :key="names.length">{{ amount }}</span>
                </div>
                <MiscTag type="warning" class="mx-auto block" v-if="warning">{{
                    warning
                }}</MiscTag>
                <button type="submit" class="mx-auto block mt-8">
                    <ButtonTech size="100" text="Purchase" type="gray" />
                </button>
            </form>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts">
    const message = ref("");
    const warning = ref("");
    const upiData = ref("");
    const names = ref<string[]>([]);
    const passes = ref<string[]>([]);
    useHead({
        title: "Register",
        meta: [
            {
                name: "description",
                content: "Register for an event in Datronix.",
            },
        ],
    });
    const tech_ev = EVENTS.filter((x) => x.type === EVENT_TYPE.TECH);
    const nontech_ev = EVENTS.filter((x) => x.type === EVENT_TYPE.NONTECH);

    const current_ev = ref("");
    const currentEvent = computed(() =>
        EVENTS.find((x) => x.name === current_ev.value)
    );

    const amount = computed(() => {
        if (!currentEvent.value) return 0;
        const allPass = passes.value.filter(x => x).length;
        const mem = names.value.filter(x => x).length;
        if (allPass >= mem && mem !== 0) return 0;
        return currentEvent.value.count === EVENT_COUNT.PER_HEAD
            ? currentEvent.value.fee * (mem - allPass)
            : (currentEvent.value.fee / currentEvent.value.maxTeam) *
                  (currentEvent.value.maxTeam - allPass);
    });

    function updateNames(newNames: any[][]) {
        names.value = newNames.map(
            (x) => x.find((y) => y.name === "Name").content
        );
        passes.value = newNames.map(
            (x) =>
                x.find((y) => y.name === "All-Pass ID (if applicable)").content
        );
    }
    const qrCode = ref("");

    async function applyForEvent(e: Event) {
        if (!e) return;
        e.preventDefault();
        if (!e.currentTarget) return;

        if (!currentEvent.value) return;
        if (amount.value <= 0) {
            warning.value = `If all members have an all-event pass, you need not register as a team.`;
            return;
        }
        if (names.value.length < currentEvent.value?.minTeam) {
            warning.value = `${currentEvent.value.name} cannot have less than ${currentEvent.value.minTeam} member(s) in a team.`;
            return;
        }
        if (names.value.length > currentEvent.value?.maxTeam) {
            warning.value = `${currentEvent.value.name} cannot have more than ${currentEvent.value.maxTeam} member(s) in a team.`;
            return;
        }
        const form = new FormData(e.currentTarget as HTMLFormElement);

        const data = {
            team_name: `${form.get("team_name")}`,
            team_members: `${names.value.join(";")}`,
            all_passes: `${passes.value.filter(x => x).join(";")}`,
            event_name: `${currentEvent.value?.name}`,
            institution_name: `${form.get("college_name")}`,
            degree_and_branch: `${form.get("degree")}`,
            contact_number: `${form.get("contact_number")}`,
            email_id: `${form.get("email_id")}`,
            agree_to_terms: `${form.get("agree_to_terms")}`,
        };
        console.log(data)

        const res = await fetch(
            `https://datronix.nekooftheabyss.moe/confirm_reg`,
            {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
            }
        );
        if (res.ok) {
            const data = await res.json();
            if (data.message === `Reservation Success!`) {
                message.value = `To complete the registration process, please make a payment of ${amount.value} to the below QR code.`;
                upiData.value = `upi://pay?pn=${`SCARDS Treasury`}&pa=${
                    currentEvent.value.pay
                }&am=${amount.value}&tr=R-${data.unique_code}&tn=R-${
                    data.unique_code
                }
`;
                qrCode.value = `https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=${200}x${200}&chl=${encodeURIComponent(
                    upiData.value
                )}`;
            } else message.value = data.message;
        } else {
            message.value = "Registration unsuccessful. Please try again.";
        }
    }
</script>
