<template>
    <v-container class="pa-16 max-70">
        <h2 class="mb-2">weTruck kredit</h2>
        <v-row class="mb-5">
            <v-col>
                <span>Stanje: 260</span>
            </v-col>
            <v-col>
                <v-btn class="primary">Dopuni weTruck kredit</v-btn>
            </v-col>
        </v-row>
        

         <!-- kartice s vozačima -->
        <v-card 
            v-for="transakcija in transakcije"
            :key="transakcija.id"
            max-width="50vw"
            class="my-8 px-4"
        >
            <v-row>
                <v-col>
                    <v-card-title class="font-italic"> #{{ transakcija.id }} </v-card-title>         
                    <v-card-text>
                        Datum: {{ transakcija.datum }}
                    </v-card-text>
                </v-col>
                <v-col>
                    <v-card-text> Opis: {{ transakcija.opis }} </v-card-text>         
                    <v-card-text>
                        Količina: 
                        <span :class="{'green--text': transakcija.status=='in', 'red--text': transakcija.status=='out'}">
                             {{ transakcija.qty }}
                        </span>
                    </v-card-text>
                </v-col>
                <v-col class="d-flex justify-end">
                    <v-card-actions>
                      <v-icon large color="green" v-if="transakcija.status=='in'">mdi-arrow-up-bold</v-icon>
                      <v-icon large color="red" v-else>mdi-arrow-down-bold</v-icon>
                    </v-card-actions>
                    
                </v-col>
            </v-row>
        </v-card>

        
     
      
    </v-container>
</template>

<script>
export default {
    name: "WeTruckCredit",
    data: () => ({
         transakcije: [
            { id: 548, qty: 25, status: "out", opis: "Lorem ipsum dolor sit amet.", datum: "17.12.2021." },
            { id: 322, qty: 35, status: "in", opis: "Lorem ipsum dolor sit amet.", datum: "17.12.2021." },
            { id: 301, qty: 155, status: "in", opis: "Lorem ipsum dolor sit amet.", datum: "17.12.2021." }
        ]
    }),
    methods: {

    }    
}
</script>

<style>
.max-85 {
    max-width: 85vw;
}
</style>