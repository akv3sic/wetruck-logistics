<template>
    <div>
        <Header />
        <v-container :class="{'pa-16': $vuetify.breakpoint.lgAndUp, 'pa-9': $vuetify.breakpoint.mdAndDown}">
            <v-row>
                <v-col>
                    <h2 class="display-1 primary--text">Rezultati pretrage za 
                        <span class="font-weight-bold"> {{ this.$route.query.iz }} </span> -
                        <span class="font-weight-bold"> {{ this.$route.query.za }} </span>
                    </h2>
    
                    <span class="subtitle-2"> Dimenzije: {{ this.$route.query.d }} cm x </span>
                    <span class="subtitle-2"> {{ this.$route.query.s }} cm x </span>
                    <span class="subtitle-2"> {{ this.$route.query.v }} cm,  </span>
                    <span class="subtitle-2"> Masa: {{ this.$route.query.m }} t </span>
                    <br>
                    <p class="subtitle-1">
                        Ukupno pronađeno <span class="font-weight-bold">4</span> rezultata.
                    </p>
                </v-col>
            </v-row>

            <!-- pronađene ponude -->
            <v-row>
            <HorizontalOffer 
                v-for="offer in offers"
                :key="offer.id"
                :id="offer.id"
                :collectingPlace=offer.collectingPlace
                :deliveryPlace=offer.deliveryPlace
                :avialableWeight=offer.avialableWeight
                :avialableSpace=offer.avialableSpace
                :departureTime=offer.departureTime
                :arrivalTime=offer.arrivalTime
                :companyLogo=offer.companyLogo
                :status=offer.status
            />  
            </v-row>

            <!-- Straničenje -->
            <v-row class="mt-8">
                <v-col class="text-center">
                    <v-pagination
                    :length="1"
                    disabled
                    ></v-pagination>
                </v-col>
            </v-row>

        </v-container>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/layout/TheHeader"
import Footer from "@/components/layout/TheFooter"
import HorizontalOffer from "@/components/searchResults/HorizontalOffer"

export default {
    name: "SearchResults",
    components: { Header, HorizontalOffer, Footer },
    // mock up data
    data: () => ({
        offers: [
            { id: 1, collectingPlace: "Široki Brijeg", deliveryPlace: "Genova", avialableWeight: "10", avialableSpace: "7", departureTime: "14.1.2022.", arrivalTime: "15.1.2022.", 
            companyLogo: "https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png", status: "U planu" }, 
            { id: 2, collectingPlace: "Široki Brijeg", deliveryPlace: "Genova", avialableWeight: "10", avialableSpace: "7", departureTime: "14.1.2022.", arrivalTime: "15.1.2022.", 
            companyLogo: "https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png", status: "U planu" },
            { id: 3, collectingPlace: "Široki Brijeg", deliveryPlace: "Genova", avialableWeight: "10", avialableSpace: "7", departureTime: "14.1.2022.", arrivalTime: "15.1.2022.", 
            companyLogo: "https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png", status: "U planu" },
            { id: 4, collectingPlace: "Široki Brijeg", deliveryPlace: "Genova", avialableWeight: "10", avialableSpace: "7", departureTime: "14.1.2022.", arrivalTime: "15.1.2022.", 
            companyLogo: "https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png", status: "U planu" },
            ]
    })
}
</script>