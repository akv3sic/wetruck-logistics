<template>
    <div>
        <v-navigation-drawer 
            v-model="drawer"
            app
        >
        <v-list-item>
            <v-list-item-content>
                <v-row>
                    <v-col justify-center>
                    <router-link to="/oglasivaci" class="text-decoration-none  text-uppercase primary--text">    
                        <img class="" :src="require('../../assets/img/weTruck-logo-with-text.png')" height="80"/>
                    </router-link>
                    </v-col>
                </v-row>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

            <v-list
                nav
                dense
            >
                 <v-list-item
                 v-for="item in navigationItems"
                 :key="item.title"
                 :to="item.to"
                 >
                    <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>

export default {
    name: 'NavigationDrawer',
    data: () => ({
      navigationItems: [
        {
          icon: 'mdi-account',
          title: 'Moj račun',
          to: "/oglasivaci/moj-racun"
        },
        {
          icon: 'mdi-truck',
          title: 'Vožnje',
          to: "/oglasivaci/voznje"
        },
        {
          icon: 'mdi-account-multiple',
          title: 'Vozači',
          to: "/oglasivaci/vozaci"
        },
        {
          icon: 'mdi-message',
          title: 'Poruke',
        },
        {
          icon: 'mdi-credit-card',
          title: 'Naplata',
          to: "/oglasivaci/wetruck-kredit"
        },
        {
          icon: 'mdi-cog',
          title: 'Postavke',
        },
        {
          icon: 'mdi-help',
          title: 'Pomoć',
        },
      ]
    }),
    computed: {
      drawer: {
        get () {
          return this.$store.getters['advertisers/drawer']
        },
        set (val) {
          this.$store.dispatch('advertisers/setDrawer', val)
        },
      },
    },
}
</script>