<template>
    <div>
        <v-app-bar
            app
            flat
        >
            <v-app-bar-nav-icon @click="setDrawer(!drawer)"></v-app-bar-nav-icon>
            <v-toolbar-title>Nadzorna ploča</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-bell-outline</v-icon>
            </v-btn>

            <v-menu offset-y left>
                <template v-slot:activator="{ on, attrs }">    
                    <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon class="">mdi-account-circle</v-icon>
                    </v-btn>
                </template>
                    <v-list
                        dense
                    >
                    <v-list-item
                    v-for="(item, index) in accountMenuItems"
                    :key="index"
                    @click="handleAccountMenuItemClick(item.action)"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <!-- weTruck kredit -->
            <v-btn  to="/oglasivaci/wetruck-kredit" icon> 
                <v-icon>mdi-cash-multiple</v-icon>
                <v-badge color="accent" :content="weTruckCredit > 0 ? weTruckCredit : '0'"></v-badge>
            </v-btn>
            <!--------------------->
          
            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
    name: 'Navbar',
    data: () => ({
       accountMenuItems: [
            { title: 'Odjava', action: 'logOut'},  
        ],
        weTruckCredit: 260
    }),
    computed: {
      ...mapState('advertisers', ['drawer'])
    },
     methods: {
         handleAccountMenuItemClick(action) {
             switch(action) {
             case 'logOut':
                this.$store
                    .dispatch('auth/logOut', { root: true })
                 this.$router.push({path: '/'})
                break;
                }
             },
     ...mapActions('advertisers', ['setDrawer'])
    },
}
</script>