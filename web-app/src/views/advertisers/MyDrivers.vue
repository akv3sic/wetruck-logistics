<template>
    <v-container class="pa-16 max-70">
        <h2 class="mb-2">Pregled vozača</h2>
        <v-row class="mb-5">
            <v-col>
                <span>Ukupno: 3</span>
            </v-col>
            <v-col>
                <v-btn class="primary" to="vozaci/dodaj-novog">Dodaj novog</v-btn>
            </v-col>
        </v-row>
        

         <!-- kartice s vozačima -->
        <v-card 
            v-for="driver in drivers"
            :key="driver.id"
            max-width="50vw"
            class="my-8"
        >
            <v-row>
                <v-col>
                    <v-card-title> {{ driver.name }} </v-card-title>         
                    <v-card-text>
                        Aktivne vožnje: {{ driver.active }}
                        <br>
                        Završene vožnje: {{ driver.finished }}
                    </v-card-text>
                </v-col>
                <v-col class="d-flex justify-end">
                    <v-card-actions>
                      <v-btn fab class="secondary"><v-icon>mdi-pen</v-icon></v-btn>  
                    </v-card-actions>
                    
                </v-col>
            </v-row>
        </v-card>


     
      
    </v-container>
</template>

<script>
export default {
    name: "MyDrivers",
    data: () => ({
         drivers: [
            { id: 1, name: "Jure Jurić", active: "2", finished: "5" },
            { id: 2, name: "Mate Matić", active: "1", finished: "8" },
            { id: 3, name: "Stipe Stipić", active: "1", finished: "7" }
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