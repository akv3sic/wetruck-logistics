<template>
    <v-container class="pa-16 max-70">
        <h2 class="mb-2">Moje vožnje</h2>
        <v-row class="mb-5">
            <v-col>
                <span class="secondary--text">Dodajte novi oglas ili pregledajte prethodne vožnje.</span>
            </v-col>
            <v-col>
                <v-btn class="primary">Dodaj novu</v-btn>
            </v-col>
        </v-row>

        <div class="d-flex filters-section">
            <span class="filter-item">
                 <v-select
                 v-model="filters.selectedStatus"
                :items="filters.statuses"
                filled
                label="Status vožnje"
                ></v-select> 
            </span>
            <span class="filter-item">
                <v-switch
                v-model="filters.withRequestsOnly"
                label="Samo sa zahtjevima"
                ></v-switch>
            </span>
          

        </div>
        
        <!-- kartice s vožnjama -->
        <v-card 
            v-for="transport in filteredTransports"
            :key="transport.id"
            max-width="50vw"
            class="my-8"
        >
            <v-row>
                <v-col>
                    <v-card-title> {{ transport.from }} - {{ transport.to }}  </v-card-title>         
                    <v-card-text>
                        Planirani polazak: {{ transport.polazak }}
                        <br>
                        Planirani dolazak: {{ transport.dolazak }}
                    </v-card-text>
                </v-col>


                <v-col class="d-flex  align-end">     
                    <v-card-text>
                        Prostor na raspolaganju:
                        <br>
                        {{ transport.dostupanProstor }} m<sup>3</sup>,
                        {{ transport.dostupnaMasa }} t
                    </v-card-text>
                </v-col>

                <v-col>
                    <v-card-text>
                        ID: {{ transport.id }}
                        <br>
                        Vozač: {{ transport.vozac }}
                        <v-btn class="mt-3 teal lighten-4" :disabled="transport.zahtjevi ==0"> Zahtjeva: {{ transport.zahtjevi }} </v-btn>
                    </v-card-text>
                </v-col>

                <v-col class="d-flex justify-center">
                    <v-card-actions>
                    <v-chip
                        :class="{
                                    'rotate90': $vuetify.breakpoint.lgAndUp,
                                    'green': transport.status == 'U tijeku',
                                    'orange': transport.status == 'U planu',
                                    'blue lighten-3': transport.status == 'Završena'
                                }"
                        class="status-chip mx-3"
                    >
                        {{ transport.status }}
                    </v-chip> 
                      <v-btn fab class="secondary"><v-icon>mdi-pen</v-icon></v-btn>  
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-card>


     
      
    </v-container>
</template>

<script>
export default {
    name: "MyTransports",
    data: () => ({
        transports: [
            { id: 732, from: "Mostar", to: "Varšava", polazak: "20. 1. 2022.", dolazak: "23. 1. 2022.", dostupanProstor: "10", dostupnaMasa: "5", vozac: "Jure Jurić", status: "U planu", zahtjevi: "0" },
            { id: 737, from: "Mostar", to: "Varšava", polazak: "20. 1. 2022.", dolazak: "23. 1. 2022.", dostupanProstor: "10", dostupnaMasa: "5", vozac: "Jure Jurić", status: "U tijeku", zahtjevi: "1" },
            { id: 812, from: "Mostar", to: "Varšava", polazak: "20. 1. 2022.", dolazak: "23. 1. 2022.", dostupanProstor: "10", dostupnaMasa: "5", vozac: "Jure Jurić", status: "U tijeku", zahtjevi: "2" },
            { id: 895, from: "Mostar", to: "Varšava", polazak: "20. 1. 2022.", dolazak: "23. 1. 2022.", dostupanProstor: "10", dostupnaMasa: "5", vozac: "Jure Jurić", status: "Završena", zahtjevi: "1" },
        ],
        filters: {
            selectedStatus: "Svi",
            statuses: ['Svi', 'U planu', 'U tijeku', 'Završena'],
            withRequestsOnly: false    
        }
    }),
    methods: {
      
    } ,
    computed: {
        // by status
        filterTransportsByStatus: function() {
            return this.transports.filter((transport) => {
                return transport.status.match(this.filters.selectedStatus) || this.filters.selectedStatus == "Svi"
            });
        },
        // by status + No of requests
        filteredTransports: function() {
            if (this.filters.withRequestsOnly == true) {
                return this.filterTransportsByStatus.filter((transport) => {
                    return transport.zahtjevi != '0'
                }); 
            }
            else {
                return this.filterTransportsByStatus
            }
        }
    }
}
</script>

<style>
.max-85 {
    max-width: 85vw;
}
.filters-section {
    max-width: 50vw;
}
.filter-item {
    max-width: 240px;
    margin: 0px 12px;
}   
</style>