<template>
    <NuxtLayout>
        <section v-if="message" class="mx-auto space-y-8 mt-24">
            <h1 class="text-center text-lg max-w-6xl font-bold font-ltfunk mx-auto mt-8">
                {{ message }}
            </h1>
            <div v-if="message.startsWith(`To complete the registration`)">
                <a :href="upiData" class="flex flex-col items-center gap-12"><img class="w-48 h-48 mx-auto mt-12"
                        :src="qrCode" /><span class="text-zinc-600 dark:text-royal-yellow font-semibold">Click Here to Pay
                        !</span>
                </a>
                <div class="mx-auto text-center text-base mt-12">
                    <p>If QR Code doesn't work, you can pay through UPI ID {{ UPI_ID_MAIN }} by mentioning the amount ₹300
                        and Name / Email on
                        the note for
                        verification</p>
                </div>
                <div class="flex flex-col gap-5 items-center">
                    <div>Enter your Transaction ID to complete the registration.</div>
                    <input type="text" v-model="trId" class="bg-zinc-900 text-white p-2 rounded-md" />
                    <button class="p-4 bg-royal-yellow text-black uppercase" @click="_ => trId ? idForPass(trId) : null">
                        Complete Registration
                    </button>
                </div>
                <div class="flex flex-col items-center gap-2 max-w-7xl mx-auto text-justify p-4" data-aos="fade-up"
                    data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                    <h1 class="text-center text-lg max-w-6xl font-bold font-ltfunk mx-auto mt-8">
                        If you face any payment issues, kindly contact any of the below numbers
                    </h1>
                    <div class="grid grid-cols-1 lg:grid-cols-2 font-ltfunk text-xl mx-auto">
                        <div class="p-2">Arjun</div>
                        <a class="p-2 block no-underline text-zinc-600 dark:text-royal-yellow" href="tel:+919445541553">+91
                            94455 41553</a>
                        <div class="p-2">Kiran Vignesh</div>
                        <a class="p-2 block no-underline text-zinc-600 dark:text-royal-yellow" href="tel:+918012355544">+91
                            80123 55544</a>
                    </div>
                </div>
            </div>
        </section>
        <section v-else-if="secondMessage" class="mx-auto space-y-8 mt-24 flex flex-col items-center">
            <h1 class="text-center text-lg max-w-6xl font-bold font-ltfunk mx-auto mt-8">
                {{ secondMessage }}
            </h1>
            <p class="text-2xl font-ltfunk text-center">Use the ID <span type="a"
                    class="max-w-md p-1 mx-auto text-black bg-royal-yellow rounded-md font-semibold text-sm cursor-pointer"
                    @click="copy(`${uniqueCode}`)" title="copy">{{
                        uniqueCode
                    }}</span> <span class="font-bold">to apply pass discount on event registrations. You need to register
                    for individual events separately even if you have a pass.</span></p>
            <a href="/2024/register" class="block p-4 bg-royal-yellow text-black uppercase">
                Register For Events
            </a>
        </section>
        <section v-else class="mx-auto space-y-8 mt-24">
            <h1 class="text-center text-4xl font-bold font-ltfunk mx-auto">
                Trifecta-Pass
            </h1>
            <div class="text-base max-w-xl mx-auto text-center text-zinc-700 dark:text-zinc-300">
                The trifecta pass is a unique permit that offers its bearer the benefit of:
                <ul>
                    <li>free admission to three events</li>
                    <li>complimentary lunch</li>
                </ul>
            </div>
            <div class="text-base max-w-xl mx-auto text-center text-zinc-700 dark:text-zinc-300">
                As the organizing committee is not liable for any conflicts or potential omissions, please select
                the events after taking note of the schedule given below.
            </div>
            <div class="text-base max-w-xl mx-auto text-center text-zinc-700 dark:text-zinc-300">
                <p class="font-bold text-lg">How to use TRIFECTA PASS</p>
                <p>
                    After purchasing the Trifecta Pass, a unique ID will be displayed on the screen, which is your unique
                    ID. Below, a button for event registration will be shown. You can register for upto 3 events using the
                    code.
                    <strong class="font-bold">Even if you have a pass, you will not be admitted into an event without
                        registering for the event.</strong>
                </p>
                <p>
                    In the event registration, you must use this Trifecta ID to register. Use this Trifecta ID each time you
                    register an event.</p>
            </div>
            <form @submit="applyForPass">
                <div class="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center max-w-xl px-2">
                    <label for="PARTICIPANT_NAME" class="text-xl font-ltfunk font-semibold uppercase">Name</label>
                    <input name="participant_name" id="PARTICIPANT_NAME" type="text"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border max-w-md w-full text-lg rounded-md p-2"
                        required />
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
                <div class="max-w-xl mx-auto flex items-center justify-center gap-4 mt-8 py-2">
                    <input name="agree_to_terms" id="AGREE_TERMS" type="checkbox"
                        class="bg-zinc-200 dark:bg-black/50 dark:text-white border-royal-orange/50 dark:border-royal-yellow/50 border text-lg rounded-md p-2"
                        required />
                    <label for="AGREE_TERMS" class="text-sm font-ltfunk font-semibold uppercase">I agree to the
                        <NuxtLink to="/2024/tos" target="_blank" class="text-zinc-600 dark:text-royal-yellow">Terms &
                            Conditions</NuxtLink>
                        and
                        <NuxtLink to="/2024/privacy" target="_blank" class="text-zinc-600 dark:text-royal-yellow">Privacy
                            Policy</NuxtLink>
                    </label>
                </div>
                <button type="submit" class="mx-auto block mt-8 gonnaglow">
                    <ButtonPaper size="100" text="Proceed To Payment" type="gray" />
                </button>
            </form>
        </section>
        <div class="flex flex-col gap-4 items-center mt-8">
            <h2 class="text-2xl text-center">Schedule</h2>
            <MiscAgenda class="prose prose-dark mt-8" />
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
const upiData = ref("");

const message = ref("");
const secondMessage = ref("")
useHead({
    title: "Trifecta-Event Pass",
    meta: [
        {
            name: "description",
            content:
                "Purchase an All-Event pass to receive a fee waiver in 3 events with complimentary lunch.",
        },
    ],
});
const uniqueCode = ref("")
const qrCode = ref("");
async function applyForPass(e: Event) {
    if (!e) return;
    e.preventDefault();
    if (!e.currentTarget) return;
    const form = new FormData(e.currentTarget as HTMLFormElement);

    const data = {
        name: `${form.get("participant_name")}`,
        institution_name: `${form.get("college_name")}`,
        degree_and_branch: `${form.get("degree")}`,
        contact_number: `${form.get("contact_number")}`,
        email_id: `${form.get("email_id")}`,
        agree_to_terms: `${form.get("agree_to_terms")}`,
    };
    const res = await fetch(
        `https://dat.nett.moe/all_pass`,
        {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        }
    );
    window.scrollTo(0, 0)

    if (res.ok) {
        const data = await res.json();
        message.value = `To complete the registration process, please make a payment of ₹300 to the below QR code.`;
        const paras = new URLSearchParams()
        paras.set("tr", `${data.unique_code}`)
        paras.set("tn", `${data.unique_code}`)
        paras.set("merchant_transaction_id", `${data.unique_code}`)
        paras.set("pa", `${UPI_ID_MAIN
            }`)
        paras.set("am", `${300}`)
        paras.set("pn", "Scards Treasury")
        upiData.value = `upi://pay?${paras.toString()}`;
        qrCode.value = `https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=${200}x${200}&chl=${encodeURIComponent(
            upiData.value
        )}`;
        uniqueCode.value = data.unique_code
    } else {
        message.value = "Registration unsuccessful. Please try again.";
    }
}

async function idForPass(id: string) {
    const data = {
        ref_id: `${uniqueCode.value}`,
        transaction_id: `${id}`,
    };
    const res = await fetch(
        `https://dat.nett.moe/all_pass_id`,
        {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        }
    );
    window.scrollTo(0, 0)

    if (res.ok) {
        message.value = ""
        const data = await res.json();
        secondMessage.value = `Registration successful. You will receive your pass via mail in few working days.`;
        uniqueCode.value = data.unique_code
    } else {
        message.value = "Registration unsuccessful. Please contact the support team.";
    }
}

function copy(text: string) {
    navigator.clipboard.writeText(text);
}
</script>