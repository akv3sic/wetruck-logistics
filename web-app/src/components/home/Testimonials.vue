<template>
    <v-container fluid primary class="mt-3 my-13">
      <v-row class="py-10">
        <v-col>
            <!-- Naslov odjeljka -->
            <v-row justify="center">
                <v-col>
                    <v-row justify="center">
                    <p class="subtitle-1 secondary--text mb-0">
                        Što kažu ljudi?
                    </p>
                    </v-row>
                    <v-row justify="center">
                        <h2
                            class="display-1 white--text">
                            Drugi o nama
                        </h2> 
                    </v-row>
                </v-col>
            </v-row>
            <!-- Caroussel  -->
            <v-row class="mt-8">
                <v-col cols="2" :class="{'d-none': $vuetify.breakpoint.smAndDown}"></v-col>
                <v-col cols="12" md="8">
                    <v-carousel
                    hide-delimiters
                    cycle
                    height="350"
                    hide-delimiter-background
                    show-arrows
                    >
                        <v-carousel-item
                        v-for="(testimonial, i) in testimonials"
                        :key="i"
                        >
                        <v-sheet
                            color="primary"
                            height="100%"
                            class="pa-15"
                        >
                            <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                            >
                            <div class="d-block white--text text-center">
                                <v-avatar class="mb-8 border-orange" size="85">
                                    <img
                                    class="pa-2"
                                    :src=testimonial.avatar
                                    alt="avatar"
                                    >
                                </v-avatar>
                                <p class="body-1"> {{ testimonial.content }} </p>
                                <p class="text-manuscript"> {{ testimonial.name }} </p>
                                <p class="text-caption"> {{ testimonial.company }} </p>
                            </div>
                                
                            
                                
                                        
                     
                            </v-row>    
                        </v-sheet>
                        </v-carousel-item>
                    </v-carousel> 
                </v-col>
                <v-col cols="2"></v-col>
            </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: "Testimonials",
    components: {},
    data () {
    return {
        testimonials: [
            {id: 1, content: "At augue eget arcu dictum varius duis. Malesuada proin libero nunc consequat interdum varius. Dolor purus non enim praesent.", company: "Company AG" , name: "Ivo Ivić", avatar: "https://cdn.vuetifyjs.com/images/john.jpg"},
            {id: 2, content: "Nunc mattis enim ut tellus. Magna sit amet purus gravida quis blandit turpis.", company: "Firma d.o.o." , name: "Mate Matić", avatar: "https://images.pexels.com/users/avatars/23775272/justin-wolfert-937.jpeg?auto=compress&fit=crop&h=256&w=256"},
            {id: 3, content: "Eu feugiat pretium nibh ipsum consequat. Vitae justo eget magna fermentum iaculis.", company: "Company AG" , name: "Maja Majić", avatar: "https://images.unsplash.com/photo-1567303314286-6735a4ad9d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWFuJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"},
        ],
    }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

.text-manuscript {
    font-family: 'Dancing Script', cursive;
    font-size: 30px;
}
.border-orange {
    border: 2px solid #ff5e14;
    border-radius: 100%;
}
</style>