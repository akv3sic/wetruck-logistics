<template>
    <div>
        <Header />
        <v-container>
            <v-row>
                <v-col>
                    <h2 class="display-2 primary--text">Pretraga ponuda</h2><br>
                    <p class="subtitle-2">
                        Unesite tražene podatke i pronađite odgovarajuću ponudu za prijevoz tereta. 
                        Trenutno imamo <span class="secondary--text">370 aktivnih</span> ponuda.
                    </p>
                </v-col>
            </v-row>

            <v-row>
                 <!-- Forma za pretraživanje -->
                <v-form ref="searchForm" class="px-4"> 
                    <v-row>

                        <v-col cols="12" class="mx-auto">
                            <v-text-field v-model="searchParams.from" label="Mjesto preuzmanja" required></v-text-field>
                        </v-col>
                        <v-col cols="12" class="mb-2 mx-auto">
                            <v-text-field  v-model="searchParams.to" label="Mjesto dostave"></v-text-field>
                        </v-col>
                        <v-col cols="3" class="mb-2 mx-auto">
                            <v-text-field  v-model="searchParams.d" label="Duljina (cm)"></v-text-field>
                        </v-col>
                        <v-col cols="3" class="mb-2 mx-auto">
                            <v-text-field  v-model="searchParams.s" label="Širina (cm)"></v-text-field>
                        </v-col>
                        <v-col cols="3" class="mb-2 mx-auto">
                            <v-text-field  v-model="searchParams.v" label="Visina (cm)"></v-text-field>
                        </v-col>
                        <v-col cols="3" class="mb-2 mx-auto">
                            <v-text-field  v-model="searchParams.m" label="Masa (t)"></v-text-field>
                        </v-col>


                        <v-col cols="12" class="mx-auto">
                            <v-btn class="primary" @click="searchOffers">
                                <v-icon class="ma-1">mdi-magnify</v-icon>
                                Traži
                            </v-btn>
                        </v-col> 
                    </v-row>
                </v-form>
            </v-row>
            
        </v-container>
        
    </div>
</template>

<script>
import Header from "@/components/layout/TheHeader"

export default {
    name: "SearchOffers",
    components: { Header},
    data: () => ({
        searchParams: {
            from: "",
            to: "",
            d: "",
            s: "",
            v: "",
            m: ""  
        }
    }),

    methods: {
        searchOffers(){
            let route = "/pretraga?iz=" + this.searchParams.from + "&za=" + this.searchParams.to
                         + "&d=" +this.searchParams.d +  "&s=" + this.searchParams.s +"&v=" +
                        this.searchParams.v + "&m=" + this.searchParams.m
            this.$router.push(route)
        }
    }
}
</script>