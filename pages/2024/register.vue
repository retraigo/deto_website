<template>
    <NuxtLayout>
        <section v-if="message" class="mx-auto space-y-8 mt-24">
            <h1 class="text-center text-lg max-w-6xl font-bold font-ltfunk mx-auto mt-8">
                {{ message }}
            </h1>
            <div v-if="message.startsWith(`To complete the registration`)">
                <div class="mx-auto text-center text-base mt-12 flex flex-col gap-8">
                    <a :href="upiData" class="flex flex-col items-center gap-12"><img class="w-48 h-48 mx-auto mt-12"
                            :src="qrCode" /><span class="text-zinc-600 dark:text-royal-yellow font-semibold">Click Here to
                            Pay
                            !</span>
                    </a>
                </div>
                <a :href="currentEvent?.whatsapp" class="flex flex-col items-center gap-4 mt-8"><span
                        class="bg-royal-yellow text-black p-2 rounded-md font-semibold">Click Here To Join WhatsApp</span>
                </a>
            </div>
            <div class="flex flex-col items-center gap-2 max-w-7xl mx-auto text-justify p-4" data-aos="fade-up"
                data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                <h1 class="text-center text-lg max-w-6xl font-bold font-ltfunk mx-auto mt-8">
                    If you face any payment issues, kindly contact any of the below numbers
                </h1>
                <div class="grid grid-cols-1 lg:grid-cols-2 font-ltfunk text-xl mx-auto">
                    <div class="p-2">Arjun</div>
                    <a class="p-2 block no-underline text-zinc-600 dark:text-royal-yellow" href="tel:+919445079040">+91
                        94450 79040</a>
                    <div class="p-2">Kiran Vignesh</div>
                    <a class="p-2 block no-underline text-zinc-600 dark:text-royal-yellow" href="tel:+918012355544">+91
                        80123 55544</a>
                </div>
            </div>
        </section>

        <section v-else class="mx-auto space-y-8 mt-24">
            <h1 class="text-center text-4xl font-bold font-ltfunk mx-auto">
                Event Registration
            </h1>
            <div class="text-base max-w-3xl w-full mx-auto text-center text-zinc-700 dark:text-zinc-300">
                If one or more team members own a
                <NuxtLink to="/pass" class="text-zinc-600 dark:text-royal-yellow">trifecta-pass</NuxtLink>, make sure
                to mention that to avail a discount! Note that
                absence of members whose passes have been used to avail the
                discount will result in having to pay the discounted amount
                fully.
            </div>
            <form @submit="applyForEvent" class="flex flex-col gap-4 items-center">
                <div class="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center max-w-3xl w-full px-2">
                    <label for="EVENT_NAME" class="text-xl font-ltfunk font-semibold uppercase">Event</label>
                    <select name="event_name" id="EVENT_NAME" v-model="current_ev" placeholder="Choose an Event"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2 h-12 cursor-pointer"
                        required>
                        <option value="" disabled selected>
                            Choose an Event
                        </option>
                        <optgroup label="Geek Fest">
                            <option v-for="ev in tech_ev" :key="ev.name" :value="ev.name">
                                {{ ev.name }}
                            </option>
                        </optgroup>
                        <optgroup label="Odyssey">
                            <option v-for="ev in nontech_ev" :key="ev.name" :value="ev.name">
                                {{ ev.name }}
                            </option>
                        </optgroup>
                        <optgroup label="Online">
                            <option v-for="ev in online_ev" :key="ev.name" :value="ev.name">
                                {{ ev.name }}
                            </option>
                        </optgroup>
                    </select>
                    <label for="TEAM_NAME" class="text-xl font-ltfunk font-semibold uppercase">Team Name</label>
                    <input name="team_name" id="TEAM_NAME" type="text"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                        required />
                </div>
                <div class="max-w-3xl w-full mx-auto mt-4">
                    <label class="text-xl font-ltfunk font-semibold uppercase mx-auto text-center block">Team
                        Members</label>
                    <InputMulti class="mt-8 text-lg" @update="updateNames" :key="current_ev" :fields="[
                        { name: `Name`, type: `text` },
                        {
                            name: `Trifecta-Pass ID (if applicable)`,
                            type: `text`,
                        },
                    ]" :max-tags="currentEvent?.maxTeam" />
                </div>
                <div class="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center max-w-3xl w-full px-2">
                    <label for="COLLEGE_NAME" class="text-xl font-ltfunk font-semibold uppercase">Institution
                        Name</label>
                    <input name="college_name" id="COLLEGE_NAME" type="text"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                        required />
                    <label for="DEGREE" class="text-xl font-ltfunk font-semibold uppercase">Degree & Branch</label>
                    <input name="degree" id="DEGREE" type="text"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                        required />
                    <label for="CONTACT_NUMBER" class="text-xl font-ltfunk font-semibold uppercase">Contact
                        Number</label>
                    <input name="contact_number" id="CONTACT_NUMBER" type="text" pattern="^(?:\+91)?[0-9]{10}$"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                        required />
                    <label for="EMAIL_ID" class="text-xl font-ltfunk font-semibold uppercase">Email ID</label>
                    <input name="email_id" id="EMAIL_ID" type="email"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                        required />
                </div>
                <div class="max-w-3xl mx-auto flex items-center justify-center gap-4 mt-8 py-2">
                    <input name="agree_to_terms" id="AGREE_TERMS" type="checkbox"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border text-lg rounded-md p-2"
                        required />
                    <label for="AGREE_TERMS" class="text-sm font-ltfunk font-semibold uppercase">I agree to the
                        <NuxtLink to="/tos" class="text-zinc-600 dark:text-royal-yellow">Terms & Conditions</NuxtLink>
                        and
                        <NuxtLink to="/privacy" class="text-zinc-600 dark:text-royal-yellow">Privacy Policy</NuxtLink>
                    </label>
                </div>
                <div class="py-8 flex flex-row items-center justify-center gap-4 mx-auto">
                    <span class="text-xl font-ltfunk font-semibold uppercase">Amount</span>
                    <span class="text-lg font-ltfunk" :key="names.length">{{ amount }}</span>
                </div>
                <MiscTag type="warning" class="mx-auto block" v-if="warning">{{
                    warning
                }}</MiscTag>
                <button type="submit" class="mx-auto block mt-8 gonnaglow">
                    <ButtonPaper size="100" text="Register" type="gray" />
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
const online_ev = EVENTS.filter((x) => x.type === EVENT_TYPE.ONLINE);

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
            x.find((y) => y.name === "Trifecta-Pass ID (if applicable)").content
    );
}
const qrCode = ref("");
const uniqueCode = ref("")

async function applyForEvent(e: Event) {
    if (!e) return;
    e.preventDefault();
    if (!e.currentTarget) return;

    if (!currentEvent.value) return;

    if (names.value.filter(x => x).length < currentEvent.value?.minTeam) {
        warning.value = `${currentEvent.value.name} cannot have less than ${(currentEvent.value.minTeam) - 1} member(s) in a team.`;
        return;
    }
    if (names.value.length > currentEvent.value?.maxTeam) {
        warning.value = `${currentEvent.value.name} cannot have more than ${currentEvent.value.maxTeam} member(s) in a team.`;
        return;
    }
    const form = new FormData(e.currentTarget as HTMLFormElement);

    const data = {
        team_name: `${form.get("team_name")}`,
        team_members: `${names.value.filter(x => x).join(";")}`,
        all_passes: `${passes.value.filter(x => x).join(";")}`,
        event_name: `${currentEvent.value?.name}`,
        institution_name: `${form.get("college_name")}`,
        degree_and_branch: `${form.get("degree")}`,
        contact_number: `${form.get("contact_number")}`,
        email_id: `${form.get("email_id")}`,
        agree_to_terms: `${form.get("agree_to_terms")}`,
    };

    const res = await fetch(
        `http://localhost:6123/confirm_reg`,
        {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        }
    );
    window.scrollTo(0, 0)
    if (res.ok) {
        const data = await res.json();
        uniqueCode.value = data.unique_code
        if (data.message === `Reservation Success!`) {
            message.value = `To complete the registration process, please make a payment of ${amount.value} to the below ID.`;
            upiData.value = `upi://pay?pn=${`SCARDS Treasury`}&pa=${UPI_ID_MAIN
                }&am=${amount.value}&tr=P-${data.unique_code}&tn=P-${data.unique_code}`;
            qrCode.value = `https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=${200}x${200}&chl=${encodeURIComponent(
                upiData.value
            )}`;
        } else message.value = data.message;
    } else {
        message.value = "Registration unsuccessful. Please try again.";
    }
}
function copy(text: string) {
    navigator.clipboard.writeText(text);
}
</script>