<template>
    <NuxtLayout>
        <section class="mx-auto space-y-8">
            <MiscLogoReveal />
            <div
                class="flex flex-col items-center lg:justify-center gap-8 lg:flex-row mx-auto lg:mt-6 p-4"
            >
                <a href="/events"
                    ><span class="sr-only">Events</span
                    ><ButtonTech size="100" text="Events" type="gray"
                /></a>
                <a href="/register"
                    ><span class="sr-only">Register</span
                    ><ButtonTech size="100" text="Register" type="gray"
                /></a>
            </div>

            <div
                class="max-w-7xl mx-auto mt-16 lg:mt-6 prose dark:prose-dark text-justify p-4"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="100"
                data-aos-duration="260"
            >
                An annual tech festival hosted by the department of Artificial
                Intelligence and Data Science of Easwari Engineering College in
                association with SCARDS (Student Council of Artificial
                Intelligence & Data Science). We conduct a wide range of both
                technical and non-technical events.
            </div>
            <div
                class="flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="100"
                data-aos-duration="260"
            >
                <img
                    src="/EEC_ICON.webp"
                    alt="Easwari Engineering College Logo"
                    class="w-48 mb-0"
                />
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
            <div
                class="flex flex-col lg:flex-row-reverse items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="100"
                data-aos-duration="260"
            >
                <img
                    src="/icons/ai_logo.webp"
                    alt="AIDS Department College Logo"
                    class="w-48 mb-0"
                />
                <div class="p-2">
                    The Department of Artificial Intelligence & Data Science is
                    organizing this festival in association with the student
                    society SCARDS.
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
</script>
