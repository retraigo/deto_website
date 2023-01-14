<template>
    <NuxtLayout>
        <section class="mx-auto space-y-8">
            <MiscLogoReveal />
            <div
                class="flex flex-col items-center lg:justify-center gap-8 lg:flex-row mx-auto lg:mt-6"
            >
                <NuxtLink to="/events"
                    ><span class="sr-only">Events</span
                    ><ButtonTech size="100" text="Events" type="gray"
                /></NuxtLink>
                <NuxtLink to="/register"
                    ><span class="sr-only">Register</span
                    ><ButtonTech size="100" text="Register" type="gray"
                /></NuxtLink>
            </div>

            <div
                class="max-w-7xl mx-auto mt-16 lg:mt-6 prose dark:prose-dark text-justify p-2"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="100"
                data-aos-duration="260"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sed eros vel ante blandit interdum. In lacus enim, luctus
                scelerisque eros nec, convallis blandit nisi. Etiam imperdiet,
                purus sed gravida hendrerit, odio odio condimentum mauris, ut
                iaculis quam augue vitae justo. Cras tincidunt mattis odio nec
                ultricies. Etiam tincidunt ex odio, nec efficitur tortor aliquam
                vitae. Aenean quis tempus nisl. Etiam vel velit risus. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Nullam nec odio eget magna commodo
                pulvinar. Donec vehicula libero eget est interdum, et lobortis
                libero rutrum. Nunc lobortis condimentum magna at porttitor.
                Nulla finibus ac purus ultricies sollicitudin. Phasellus a
                viverra elit. Curabitur consectetur at ligula eget aliquet.
            </div>
            <div
                class="flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify"
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
        </section>
    </NuxtLayout>
</template>
