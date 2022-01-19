<template>
    <v-col cols="12" md="6">
        <v-card outlined class="px-2 offer-card" :to="offerLink">
            <v-row>
                <!-- LIJEVI STUPAC - slika -->
                <v-col md="3" cols="12" sm="5" class="d-flex justify-center align-center">
                    <v-img :src=companyLogo height="80px" contain class="ma-3"></v-img>
                </v-col>
                <!-- DESNI STUPAC - podatci -->
                <v-col md="9" cols="12" sm="7">
                    <v-card-title> {{ collectingPlace }} - {{ deliveryPlace }} </v-card-title>

                    <v-row>
                        <v-col lg="6" cols="12">   
                            <v-card-subtitle class="mt-2 grey--text">
                                Raspoloživo: {{ avialableSpace }} m<sup>3</sup>, {{ avialableWeight }} t
                            </v-card-subtitle>
                            <v-card-text class="grey--text">
                                <p>Planirano vrijeme polaska: {{ departureTime }}</p>
                                <p>Planirano vrijeme dolaska: {{ arrivalTime }}</p>
                            </v-card-text>
                        </v-col>
                        <v-col :class="{'justify-end': $vuetify.breakpoint.lgAndUp}" class="d-flex" lg="6" cols="12">
                            <v-card-actions>
                                <v-chip
                            :class="{'rotate90': $vuetify.breakpoint.lgAndUp }"
                            class="status-chip"
                            color="orange"
                            >
                            {{ status }}
                            </v-chip>
                            </v-card-actions>
                            
                        </v-col>
                    </v-row>

                </v-col>
            </v-row>
        </v-card>
    </v-col>
</template>

<script>
export default {
    name: "HorizontalPost",
    props: {
        id: { type: Number, required: true },
        collectingPlace: { type: String, required: true },
        deliveryPlace: { type: String, required: true },
        avialableWeight: { type: String, required: true },
        avialableSpace: { type: String, required: true },
        departureTime: { type: String, required: true },
        arrivalTime: { type: String, required: true },
        companyLogo: { type: String, required: true },
        status: { type: String, required: true },
    },
    computed: {
    offerLink() {
        return {
            name: "offer",
            params: {
                id: this.id,
                slug: "i-am-offer-slug"
                }
        }
    }
}
}
</script>

<style>
.rotate90 {
  transform: rotate(90deg);
}
.status-chip {
  width: 110px;
  display: flex;
  justify-content: center;
  align-content: center;
}
.offer-card:hover{
    box-shadow: 4px 4px 5px #D6DAEB !important;
}
</style>