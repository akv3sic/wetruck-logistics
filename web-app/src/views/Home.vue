<template>
    <div>
      <Header/>
      <Hero/>
      <LatestNews />
      <FeaturesPresentation />
      <LatestOffers />
      <Footer />
    </div>
</template>

<script>
import Header from "@/components/layout/TheHeader"
import Hero from "@/components/home/TheHero"
import FeaturesPresentation  from "@/components/home/FeaturesPresentation"
import LatestNews from '../components/home/LatestNews.vue'
import LatestOffers from '../components/home/LatestOffers.vue'
import Footer from "@/components/layout/TheFooter"

  export default {
    name: 'Home',

    components: {
      Header, Hero, FeaturesPresentation, LatestNews, LatestOffers, Footer
    },
  }
</script>
