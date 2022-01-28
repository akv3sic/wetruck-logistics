<template>
    <v-container class="pa-16 max-85">
        <h2 class="mb-2">Dodaj novog vozača</h2>
        

         <!-- forma za dodavanje novog vozača -->
        
        <v-row>
            <v-col>
                <v-text-field
                v-model="driver.ime"
                    label="Ime"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                v-model="driver.prezime"
                    label="Prezime"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                v-model="driver.email"
                    label="E-mail adresa"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                v-model="driver.mobitel"
                    label="Broj mobitela"
                ></v-text-field>
            </v-col>
        </v-row>
        <div class="actions py-7">
            <v-btn class="primary" @click="addNewDriver">Dodaj</v-btn>
        </div>
      
    </v-container>
</template>

<script>
export default {
    name: "MyDrivers",
    data: () => ({
         driver: { id: "", name: "", surname: "", phone:"", eMail: "" },
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