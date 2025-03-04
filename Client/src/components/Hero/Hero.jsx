import React from 'react'
import BgImage from "../../assets/bg-slate.png";

const bgImage = {
  backgroundImage : `url(${BgImage})`,
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
                {/* Hero image section */}
                {/* third dev section*/}
              </div>
            </div>
        </section>
    </main>
  )
}

export default Hero;