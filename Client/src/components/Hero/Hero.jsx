import React from 'react'
import BgImage from "../../assets/bg-slate.png";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <main style={bgImage}>
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* Navbar Section */}
          <div className='grid grid-cols-1 md:grid-cols-2'>
            {/* text content section */}
            <div className="text-lightOrange">
              <h1 className="text-7xl font-bold 
                  leading-tight ml-14">
                Black Tumbler
              </h1>
            </div>
            <div>
              <div>
              <h1>Black Lifestyle Lovers</h1>
              <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Neque quibusdam earum nesciunt dolorem vel repellat cum!
                  Quos nobis dicta debitis aliquid expedita iste, quod ut
                   nostrum, aperiam ad enim esse!
              </h1>
            </div>
            </div>
            {/* Hero image section */}
            <div></div>
            {/* third dev section*/}
            <div></div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero;