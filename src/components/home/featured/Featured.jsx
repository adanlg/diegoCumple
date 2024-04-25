import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='La Carrasquilla' subtitle='La mejor casa rural para disfrutar en Soria.' />
          <div className="featured-container"> {/* Nuevo contenedor con la clase */}
            <FeaturedCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Featured
