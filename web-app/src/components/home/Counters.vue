<template>              
    <v-container fluid grey lighten-4 class="my-13">
      <v-row class="py-10">

          <!-- counters -->
        <v-col 
        cols="12"
        sm="4"
        v-for="(counter, i) in counters"
        :key="i"
        >
              <div class="d-block justify-center align-center primary--text">
                <span class="d-flex justify-center align-center font-weight-bold pa-3 display-1"> 
                    <number
                    ref="number1"
                    :from="0"
                    :to="counter.number"
                    :format="theFormat"
                    :duration="5"
                    :delay="1.1"
                    easing="Power1.easeOut"/>
                    <span v-if="counter.numberAppend" class="ml-1"> {{counter.numberAppend}} </span>
                </span>
                
                <div class="d-flex justify-center align-center">
                {{ counter.text }}
                </div>
              </div>
        </v-col>
        <!-- counters END -->

      </v-row>
    </v-container>
</template>


<script>
import Vue from 'vue'
import VueNumber from 'vue-number-animation'

Vue.use(VueNumber)

export default {
    name: "Counters",
    data: () => ({
        counters: [
            {id: 1, text: "klijenata", number: "1576"},
            {id: 2, text: "pređenih kilometara", number: "457", numberAppend: "M"},
            {id: 3, text: "realiziranih suradnji", number: "8345"},
        ]
    }),
    // methods for counters
    methods: {
    theFormat(number) {
        return number.toFixed(0);
    },
    completed() {
        console.log('Animation ends!');
    },
    playAnimation() {
        this.$refs.number2.play()
    }
}
}
</script>