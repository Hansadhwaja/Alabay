import React from 'react'
import Image from "next/image";
import homepageImage from '@/Assets/homepageImage.png';

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen fixed">
    <Image src={homepageImage} alt="homepageImage" fill />
    <div className="w-[90%] h-20 m-20 absolute flex-center">
      <h1 className="text-8xl z-10 stroke-text font-black font-cheeseburga bg-clip-text text-transparent bg-gradient-to-b from-[#FFF280] to-[#7EFF5E]">
        WELCOME TO ALABAY WORLD
      </h1>
    </div>

    <div className="w-[90%] h-20 m-20 ml-[88px] mt-[88px] absolute flex-center text-8xl font-black font-cheeseburga text-[#0F1B29]">
      <h1>WELCOME TO ALABAY WORLD</h1>
    </div>

    <div className="w-full bg-[#181C27] h-[150px] p-20 flex-center absolute top-[453px]">
      <h1 className="text-3xl text-white font-cheeseburga">
        where the <span className="gradient-gold">legendary Central Asian Shepherd Dog</span> meets a
        new-age adventure.<br /><span className="gradient-gold ml-8">Join us</span> in celebrating the <span className="gradient-gold">strength</span>, <span className="gradient-gold">loyalty</span>, and <span className="gradient-gold">heritage</span> of the Alabay <br /><span className="flex-center">breed.</span>
      </h1>
    </div>
  </div>
  )
}

export default LandingPage