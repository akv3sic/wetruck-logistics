<template>
    <div>
      <Header/>
      <Hero/>
      <Counters />
      <LatestOffers />
      <FeaturesPresentation />
      <Testimonials />
      <LatestNews />
      <Footer />
    </div>
</template>

<script>
import Header from "@/components/layout/TheHeader"
import Hero from "@/components/home/TheHero"
import Counters from "@/components/home/Counters"
import FeaturesPresentation  from "@/components/home/FeaturesPresentation"
import LatestNews from '../components/home/LatestNews.vue'
import LatestOffers from '../components/home/LatestOffers.vue'
import Testimonials from '../components/home/Testimonials.vue'
import Footer from "@/components/layout/TheFooter"

  export default {
    name: 'Home',

    components: {
      Header, Hero, Counters, FeaturesPresentation, LatestNews, LatestOffers, Testimonials, Footer
    },
  }
</script>
