import React from 'react'
// import Hero from '../../components/Hero/Hero'
import Hero from '../../components/Hero/selectJourney'

import Whychoose from '../../components/Whychoose/Whychoose'
import AboutAirPlane from '../../components/AboutAirPlane/AboutAirPlane'
import Testimonial from '../../components/Testimonial/Testimonial'
import Contact from '../../components/Contact/Contact'
import HotalHomePage from '../../components/HotalHomePage/HotalHomePage'
import FlightHomePage from '../../components/FlightHomePage/FlightHomePage'
import PricingPage from '../../components/PricingPage/PricingPage'
import Slider from '../../components/Slider/Slider'
import ServiceHomePage from '../../components/ServiceHomePage/ServiceHomePage'
import MostPopularTour from '../../components/MostPopularTour/MostPopularTour'
import BookingHome from '../../components/BookingHome/BookingHome'
// import Packages from '../../components/Packages/Packages'

const Home = () => {
  return (
    <div>
      <Slider />
      {/* <BookingHome /> */}
      <Hero/>

      <ServiceHomePage />
      {/* <Whychoose/> */}
      <AboutAirPlane />
      <MostPopularTour />
      {/* <HotalHomePage />
      <FlightHomePage /> */}
      <Testimonial />
      {/* <PricingPage /> */}
      {/* <Contact /> */}
    </div>
  )
}

export default Home