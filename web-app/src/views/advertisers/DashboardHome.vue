<template>
    <div>
        <Navbar />
        <NavigationDrawer />
        <v-container fluid class="pa-0">
        <!-- Ovdje se injektiraju pogledi -->
          <router-view></router-view>
       </v-container>
    </div>
</template>

<script>
import Navbar from "@/components/advertisers/TheNavbar";
import NavigationDrawer from "@/components/advertisers/TheNavigationDrawer";

export default {
    name: "adminHome",
    components: { Navbar, NavigationDrawer, },
}
</script>