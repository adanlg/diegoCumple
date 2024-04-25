import React from "react"
import Awards from "./awards/Awards"
import Contact from "./contact/Contact"
import Description from "./description/Description"; 
import Opinions from "./opinions/Opinions"; 

import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import Carousel from "../Carousel";
import { countries } from "../Data";

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      <Carousel images={countries} /> 
      <Featured /> 
      <Description id="description"/>
      <Opinions id="opinions"/>

      {/* <Recent /> */}
      <Awards id="awards"/>
      <Contact id="contact"/>

      {/* <Location /> */}
      {/* <Team /> */}
      {/* <Price /> */}

    </>
  )
}

export default Home
