<template>
    <div>
      <v-app-bar
        height="80px"
        color="primary"
        dark
        :class="{'px-16':$vuetify.breakpoint.mdAndUp, 'mx-10':$vuetify.breakpoint.mdAndUp, 'my-4':$vuetify.breakpoint.mdAndUp}"
        class="ma-1"
        rounded="lg"
      >
          <v-spacer class="hidden-md-and-up"></v-spacer>

          <v-toolbar-title>
            <a href="/" class="rm-test-decoration">
              <v-row>
                <v-col justify-center>
                  <img src="@/assets/img/weTruck-logo-clear.png" alt="weTruck logo" height="32px">
                </v-col>
                <v-col class="white--text">
                  weTruck
                </v-col>
              </v-row>
            </a>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <!-- Hidden on mobile -->

          <v-toolbar-items class="hidden-sm-and-down">
              <v-list-item
                v-for="(item, index) in navigationItems"
                :key="index"
                :to="item.to"
                class="mx-2"
                exact
                >
                <v-icon v-if=item.desktopIcon class="pb-1 pr-1"> {{ item.icon }} </v-icon>
                <v-list-item-title class="text-body font-weight-medium title-color"> {{ item.title }}</v-list-item-title>
              </v-list-item>
          </v-toolbar-items>

          <v-btn 
            @click="$router.push({ path: '/registracija' })"
            class="hidden-sm-and-down ml-2"
            color="secondary"
          >
            NOVI KORISNIK?
          </v-btn>
        <!-- Hidden on mobile END -->


        <!-- Mobile menu icon -->
        <v-btn 
            @click.stop="drawer = !drawer"
            text
            class="hidden-md-and-up"
        >
            <v-icon large right>mdi-menu</v-icon>
        </v-btn>
      </v-app-bar>

      <!-- Mobile menu -->
      <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          right
      >
        <v-list 
            dense
            nav
        >
            <v-subheader class="my-4">
                  <img class="mx-auto" :src="require('@/assets/img/weTruck-logo-clear.png')" height="40"/>
            </v-subheader>
            <v-list-item-group>
                 <v-list-item
                  v-for="(item, index) in navigationItems"
                  :key="index"
                  :to="item.to"
                  >
                  <v-list-item-icon>
                      <v-icon> {{ item.icon }} </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>

                <!-- REGISTRACIJA item-->
                <v-list-item to="registracija">
                  <v-list-item-icon>
                      <v-icon> mdi-account-plus-outline </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title> Novi korisnik? </v-list-item-title> 
                </v-list-item>
            
            </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
   
</template>

<script>
export default {
    name: "Header",
    data: () => ({
      drawer: false,
       navigationItems: [
                {title: 'Blog', to:'/blog', icon: 'mdi-newspaper-variant-outline', desktopIcon: false},
                {title: 'Pomoć', to:'/pomoć', icon: 'mdi-help', desktopIcon: false},
                {title: 'Pretraga ponuda', to:'/pretraga-ponuda', icon: 'mdi-offer', desktopIcon: false},
                {title: 'Prijava', to:'/prijava', icon: 'mdi-account-outline', desktopIcon: true},
      ],
    })
}
</script>

<style>
.rm-text-decoration {
  text-decoration: none;
}
.title-color {
  color:  white !important;
}
</style>