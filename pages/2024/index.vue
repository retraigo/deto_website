<template>
    <NuxtLayout>
        <section class="mx-auto space-y-8">
            <MiscLogoReveal2024 />
            <div class="flex flex-col items-center mx-auto mt-5">
                <MiscCountDown :time="1708745400000" />
            </div>
            <div class="max-w-7xl mx-auto mt-16 lg:mt-6 prose dark:prose-dark text-justify p-4 text-xl" data-aos="fade-up"
                data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                An annual tech festival hosted by the department of Artificial
                Intelligence and Data Science of Easwari Engineering College in
                association with SCARDS (Student Council of Artificial
                Intelligence & Data Science). We conduct a wide range of both
                technical and non-technical events.
            </div>
            <div class="flex flex-col gap-4 items-center w-full lg:max-w-2xl mx-auto p-8 border-2 border-red-500 bg-black/60 transition duration-500 ease-in-out transform hover:-translate-y-1"
                data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                <div class="text-red-500 font-semibold text-center font-loubag text-2xl">
                    Trifecta-Pass
                </div>
                <div class="text-lg text-left">
                    The trifecta pass is a unique permit that offers its bearer (and only the bearer) the benefit of:
                    <ul class="text-left ml-12 list-disc">
                        <li>Free admission to three events </li>
                        <li>Complimentary lunch</li>
                    </ul>
                    NOTE: As the organizing committee is not liable for any conflicts or potential omissions, please select
                    the events after taking note of the schedule.
                </div>
            </div>
            <div class="flex flex-col items-center lg:justify-center gap-8 lg:flex-row mx-auto lg:mt-6 p-4">
                <a href="/2024/pass" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100"
                    data-aos-duration="260"><span class="sr-only">All Event Pass Register</span>
                    <ButtonPaper size="120" text="Trifecta-Pass Register" type="gray" />
                </a>
                <a href="/2024/register" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100"
                    data-aos-duration="260"><span class="sr-only">Event Register</span>
                    <ButtonPaper size="120" text="Event Register" type="gray" />
                </a>
            </div>
            <section class="lg:flex flex-1 w-full mx-auto mt-8 max-w-7xl">
                <div class="flex-1 w-full flex flex-col gap-8 items-center">
                    <div class="p-8">
                        <h1 class="text-center text-7xl font-bold font-rye mx-auto" data-aos="fade-up"
                            data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                            Technical Events
                        </h1>
                        <div class="flex flex-row flex-wrap items-stretch justify-center gap-8 mt-6">
                            <MiscEventBox v-for="event in technical" :key="event._id" :event="event" class="gonnaglow" />
                        </div>
                    </div>
                    <div class="p-8">
                        <h1 class="text-center text-7xl font-bold font-rye mx-auto" data-aos="fade-up"
                            data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                            Non-Technical Events
                        </h1>
                        <div class="flex flex-row flex-wrap items-stretch justify-center gap-8 mt-6">
                            <MiscEventBox v-for="event in nonTechnical" :key="event._id" :event="event" />
                        </div>
                    </div>
                    <div class="p-8">
                        <h1 class="text-center text-7xl font-bold font-rye mx-auto" data-aos="fade-up"
                            data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                            Online Events
                        </h1>
                        <div class="flex flex-row flex-wrap items-stretch justify-center gap-8 mt-6">
                            <MiscEventBox v-for="event in onlineEvents" :key="event._id" :event="event" />
                        </div>
                    </div>
                </div>
            </section>
            <div class="flex flex-col items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4"
                data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                <h1 class="text-center text-7xl font-bold font-rye mx-auto" data-aos="fade-up" data-aos-easing="linear"
                    data-aos-delay="100" data-aos-duration="260">
                    Contact
                </h1>
                <div class="grid grid-cols-1 lg:grid-cols-2 font-loubag text-xl mx-auto">
                    <div class="p-2">Deepak</div>
                    <a class="p-2 block no-underline text-zinc-600 dark:text-royal-yellow" href="tel:+919500163095">+91
                        95001 63095</a>
                    <div class="p-2">Yogesh</div>
                    <a class="p-2 block no-underline text-zinc-600 dark:text-royal-yellow" href="tel:+917550155076">+91
                        75501 55076</a>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4"
                data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                <img src="/EEC_ICON.webp" alt="Easwari Engineering College Logo" class="w-48 mb-0" />
                <div class="p-2">
                    Easwari Engineering College is an educational institution
                    belonging to the SRM Group of Educational Institutions for
                    higher learning instituted in the academic year 1996 - 1997,
                    with the approval of Government of Tamil Nadu and AICTE. As
                    per government regulations for affiliation, the college was
                    initially affiliated to the University of Madras. The
                    college is now affiliated to Anna University Chennai since
                    2002. The college offers 11 UG programmes and 6 PG
                    programmes covering Engineering & Technology, and
                    Management.
                </div>
            </div>
            <div class="flex flex-col lg:flex-row-reverse items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4"
                data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
                <img src="/icons/2023/ai_logo.webp" alt="AIDS Department College Logo" class="w-48 mb-0" />
                <div class="p-2">
                    The Department of Artificial Intelligence & Data Science is
                    organizing this festival in association with the student
                    society <span class="font-azonix">SCARDS</span>.
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
    title: "Welcome | Tech Festival",
    meta: [
        {
            name: "description",
            content:
                "An annual tech festival hosted by the department of Artificial Intelligence and Data Science of Easwari Engineering College in association with SCARDS (Student Council of Artificial                Intelligence & Data Science).",
        },
    ],
});
const technical = await queryContent("2024/events/technical-events").find();
const nonTechnical = await queryContent(
    "2024/events/non-technical-events"
).find();
const onlineEvents = await queryContent("2024/events/online-events").find();
</script>
