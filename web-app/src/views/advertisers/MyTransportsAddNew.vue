<template>
    <v-container class="pa-16 max-70">
        <h2 class="mb-2">Dodaj novu vožnju</h2>
        <v-row class="mb-5">
            <v-col>
                <span class="secondary--text">Dodajte novi oglas.</span>
            </v-col>
            <v-col>
                <v-btn class="primary">Pregled svih vožnji</v-btn>
            </v-col>
        </v-row>

        <v-row>
                 <!-- Forma za dodavanje nove vožnje (oglasa) -->
                <v-form ref="searchForm" class="px-4"> 
                    <v-row>

                        <v-col cols="6" class="mx-auto">
                            <v-text-field v-model="transport.from" label="Mjesto polaska" required></v-text-field>
                        </v-col>
                        <v-col cols="6" class="mx-auto">
                                  <v-menu
                                        v-model="menu1"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="transport.fromDate"
                                            label="Datum polaska"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                        </template>
                                        <v-date-picker
                                        v-model="transport.fromDate"
                                        @input="menu1 = false"
                                        ></v-date-picker>
                                    </v-menu>
                        </v-col>
                        <v-col cols="6" class="mb-2 mx-auto">
                            <v-text-field  v-model="transport.to" label="Mjesto dolaska"></v-text-field>
                        </v-col>
                        <v-col cols="6" class="mx-auto">
                                  <v-menu
                                        v-model="menu2"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="transport.toDate"
                                            label="Datum dolaska"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                        </template>
                                        <v-date-picker
                                        v-model="transport.toDate"
                                        @input="menu2 = false"
                                        ></v-date-picker>
                                    </v-menu>
                        </v-col>

                        <v-col cols="6" class="mb-2 mx-auto">
                            <v-select
                            :items="drivers"
                            item-text="name"
                            item-value="id"
                            label="Odaberi vozača"
                            hint="Vozača možete odabrati i kasnije."
                            persistent-hint="true"
                            ></v-select>
                        </v-col>
                        <v-col cols="6" class="mb-2 mx-auto">
                            <!--  'čuva' prostor -->
                        </v-col>

                        <!-- Prostor na raspolaganju -->
                        <v-col cols="3" class="mb-2 mx-auto">
                            <v-text-field  v-model="transport.d" label="Duljina (cm)"></v-text-field>
                        </v-col>
                        <v-col cols="3" class="mb-2 mx-auto">
                            <v-text-field  v-model="transport.s" label="Širina (cm)"></v-text-field>
                        </v-col>
                        <v-col cols="3" class="mb-2 mx-auto">
                            <v-text-field  v-model="transport.v" label="Visina (cm)"></v-text-field>
                        </v-col>
                        <v-col cols="3" class="mb-2 mx-auto">
                            <v-text-field  v-model="transport.m" label="Masa (t)"></v-text-field>
                        </v-col>


                        <v-col cols="12" class="mx-auto">
                            <v-btn class="primary">
                                Objavi
                            </v-btn>
                        </v-col> 
                    </v-row>
                </v-form>
            </v-row>

     
      
    </v-container>
</template>

<script>
export default {
    name: "MyTransports",
    data: () => ({
        transport: {
            from: "",
            fromDate: "",
            to: "",
            toDate: "",
            d: "",
            s: "",
            v: "",
            m: ""
        },
        drivers: [
            { id: 1, name: "Jure Jurić", active: "2", finished: "5" },
            { id: 2, name: "Mate Matić", active: "1", finished: "8" },
            { id: 3, name: "Stipe Stipić", active: "1", finished: "7" }
        ],
        menu1: false,
        menu2: false
    }),
    methods: {
      
    } ,
    computed: {
      
    }
}
</script>

<style>
.max-85 {
    max-width: 85vw;
} 
</style>