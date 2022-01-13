<template>
    <section id="hero">
        <v-container>
            <v-row class="py-5" align="center">
                <v-col cols="12" md="6">
                    <p class="ml-4 secondary--text subtitle-1 mb-1">Real solutions, real fast.</p>
                    <h1 class="ml-4 display-2 primary--text">Your Logistics Solution</h1>
                    <p class="ml-4 mt-4">
                        <span class="light-blue--text text--darken-4">Fusce sed lacus pulvinar</span> urna molestie commodo vel eu leo.
                        Sed pellentesque elit ultricies massa vestibulum, elementum dignissim nulla tempor.
                        Donec enim enim, imperdiet a metus et, tristique ultrices mauris.</p>
                </v-col>
                <v-col cols="12" md="6">
                    <v-img 
                    src="@/assets/img/moving-truck.png"
                    max-height="400px"
                    contain
                    >
                    </v-img>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    name: "Hero"
}
</script>