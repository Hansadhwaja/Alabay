import React from 'react'
import alldog from '../Assets/DALL·E 2024-07-14 20.01.25 - A wide 3D cartoon illustration of a group of furry Central Asian Shepherd dog friends. The dogs should have joyful expressions with wide smiles, ears_ 2.png'
import Image from 'next/image'
import alldogreverse from '../Assets/DALL·E 2024-07-14 20.01.25 - A wide 3D cartoon illustration of a group of furry Central Asian Shepherd dog friends. The dogs should have joyful expressions with wide smiles, ears_ 1.png'
import travelDog from '../Assets/DALL·E 2024-07-14 21.37.17 - A 3D cartoon illustration of a very happy furry Central Asian Shepherd dog in explorer attire, standing at a crossroads and holding a map with a yello 2.png'
import travelDogreverse from '../Assets/DALL·E 2024-07-14 21.37.17 - A 3D cartoon illustration of a very happy furry Central Asian Shepherd dog in explorer attire, standing at a crossroads and holding a map with a yello 1.png'
import customImage1 from '../Assets/DALL·E 2024-07-15 01.28.43 - A full body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed as a construction worker. The dog should have a big_ 3.png'
import customImage2 from '../Assets/DALL·E 2024-07-15 01.31.03 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a t-shirt with an Alabay dog printed on it and we 2.png'
import customImage3 from '../Assets/DALL·E 2024-07-15 01.32.53 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog celebrating with a trophy. The dog should have a big smile a 1.png'
import customImage4 from '../Assets/DALL·E 2024-07-15 01.33.29 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a Viking outfit. The dog should have a big smile_ 1.png'
import tokenDog from '../Assets/DALL·E 2024-07-23 00.50.44 - A 3D cartoon illustration of a furry Central Asian Shepherd Alabay dog with big eyes, wearing a cap with a dollar logo on its head and counting money_ 1.png'
import tokenDogReverse from '../Assets/DALL·E 2024-07-23 00.50.44 - A 3D cartoon illustration of a furry Central Asian Shepherd Alabay dog with big eyes, wearing a cap with a dollar logo on its head and counting money_ 2.png'
import socialImage from '../Assets/DALL·E 2024-07-29 17.36.01 - A 3D cartoon illustration of a cute furry Central Asian Shepherd dog holding a mobile phone and looking at it. The dog has expressive eyes, a fluffy c 2.png'
import gameImage from '../Assets/Alabay Games/alabay guard prev 2 1.png'

const Vision = () => {
    return (
        <div className='h-[600px] z-30'>
            <h1 className='text-[#FFA800] text-8xl font-black font-cheeseburga text-center'>PROJECT VISION</h1>
            <div className='h-[1200px] relative'>
                <div className='gradient-radial h-[1200px] -rotate-[8deg] -ml-32 mt-80 w-[120%] absolute -z-10' />
                <div className='flex-center mt-40'>
                    <Image
                        src={alldog}
                        alt='jumpingDog'
                        width={1200}
                        height={1200}
                        priority
                    />
                </div>
                <div className='flex-center -mt-[120px] opacity-10 ml-2'>
                    <Image
                        src={alldogreverse}
                        alt='jumpingDog'
                        width={1220}
                        height={1200}
                        priority
                    />
                </div>
                <div className='-mt-12'>
                    <h1 className='font-kumbhsans font-[700] text-3xl text-center'>Our mission is to honor the heritage of the Alabay by creating a<br /> vibrant, loyal, and powerful community. Just as the Alabay protects its<br /> flock, we aim to build a pack that stands strong together.</h1>

                </div>
                <div>
                    <h1 className='text-8xl font-[400] font-cheeseburga text-left ml-32 text-white mt-40'>ROAD MAP</h1>
                </div>
            </div>
            <div className='bg-white h-[400px] rotate-[8deg] -ml-24 mt-32 w-[114%] absolute -z-10' />
            <div className=' flex justify-between'>
                <div className='ml-12 mt-32'>
                    <h1 className='text-3xl font-[700] font-kumbhsans'>Our journey is just beginning.<br /> Explore our roadmap to see the<br /> exciting milestones and future <br /> plans we have in store.</h1>
                    <p className='text-[#FFA800] text-3xl font-[700] font-kumbhsans mt-8'>Join us as we grow and achieve<br /> new heights.</p>
                </div>
                <div className='flex flex-col mr-20 -mt-24'>
                    <Image
                        src={travelDog}
                        alt='travelDog'
                        width={600}
                        height={600}
                        priority
                    />
                    <Image
                        src={travelDogreverse}
                        alt='travelDog'
                        width={600}
                        height={600}
                        className='-mt-14 opacity-20'
                    />
                </div>
            </div>
            <div className='h-[400px] w-[1000px] flex mx-auto gap-5 rounded-2xl relative -z-10'>
                <div className='bg-custom-gradient1 rounded-tl-2xl p-2 h-[400px]'>
                    <h1 className='font-montserrat font-black text-2xl text-white text-center'>Community<br /> Building <br /><span className='text-xl'>and Initial Launch</span> </h1>
                    <Image
                        src={customImage1}
                        alt='customImage1'
                        width={200}
                        height={200}
                        className='mt-3'
                    />
                </div>
                <div className='bg-custom-gradient2 p-2 h-[400px]'>
                    <h1 className='font-montserrat font-black text-2xl text-white text-center'>Merchandise<br /> <span className='text-xl'>Store Launch</span> </h1>
                    <Image
                        src={customImage2}
                        alt='travelDog'
                        width={200}
                        height={200}
                        className='mt-3'
                    />
                </div>
                <div className='bg-custom-gradient3 p-2 h-[400px]'>
                    <h1 className='font-montserrat font-black text-2xl text-white text-center'>Community<br /> Events <br /><span className='text-xl'>and contests</span> </h1>
                    <Image
                        src={customImage3}
                        alt='travelDog'
                        width={200}
                        height={200}
                        className='mt-3'
                    />
                </div>
                <div className='bg-custom-gradient4 rounded-tr-2xl p-2 h-[400px]'>
                    <h1 className='font-montserrat font-black text-2xl text-white text-center'>Expansion <br /> and New<br />  <span className='text-xl'>Features</span> </h1>
                    <Image
                        src={customImage4}
                        alt='travelDog'
                        width={200}
                        height={200}
                        className='mt-3'
                    />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-white/[140] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/[140] to-transparent" />
            </div>
            <div>
                <div className='gradient-radial h-[1200px] -rotate-[8deg] -ml-32 w-[120%] absolute -z-10 -mt-24' />
                <h1 className='text-8xl font-[400] font-cheeseburga text-left ml-32 text-white mt-40'>TOKENOMICS</h1>
                <div className='flex justify-between ml-32 mt-24'>
                    <div className='flex flex-col gap-8 font-black font-montserrat text-white'>
                        <div className='bg-black rounded-2xl w-[450px] h-[120px] flex pl-12 justify-center flex-col'>
                            <h1 className='text-2xl'>LIQUIDITY</h1>
                            <p className='text-5xl text-[#FFF280]'>LOCKED</p>
                        </div>
                        <div className='bg-black rounded-2xl w-[450px] h-[120px] flex pl-12 justify-center flex-col'>
                            <h1 className='text-2xl'>CONTRACT</h1>
                            <p className='text-5xl text-[#FFF280]'>RENOUNCED</p>
                        </div>
                        <div className='bg-black rounded-2xl w-[450px] h-[120px] flex pl-12 justify-center flex-col'>
                            <h1 className='text-2xl'>TAXES</h1>
                            <p className='text-5xl text-[#FFF280]'>0%</p>
                        </div>

                    </div>
                    <div className='flex flex-col gap-6'>
                        <Image
                            src={tokenDog}
                            alt='tokenDog'
                            width={600}
                            height={600}
                            className='-mt-40'
                        />
                        <Image
                            src={tokenDogReverse}
                            alt='tokenDog'
                            width={600}
                            height={600}
                            className='-mt-40 opacity-20'
                        />
                    </div>
                </div>

                <div className='bg-white h-[500px] rotate-[8deg] -ml-24 mt-32 w-[114%] absolute -z-10' />
            </div>

            {/* Merchandise */}
            <div>
                <h1 className='text-[#FFA800] text-8xl font-black font-cheeseburga text-center mt-60'>MERCHANDISE</h1>
            </div>
            {/*  Games */}
            <div className='relative h-[1200px] mt-[400px]'>
                <div className='gradient-radial h-[1200px] -rotate-[8deg] -ml-32 w-[120%] absolute -z-10 -mt-24' />
                <h1 className='text-8xl font-[400] font-cheeseburga text-center ml-32 text-white pt-80'>GAMES</h1>
                <p className='font-montserrat font-black text-4xl text-center mt-8'>Stay tuned for upcoming games !</p>
                <div className='flex-center'>

               
                <div className='h-[610px] w-[1115px] bg-white rounded-3xl mt-60'>
                <Image
                        src={gameImage}
                        alt='travelDog'
                        width={1100}
                        height={600}
                        className='object-cover rounded-3xl mt-2 ml-2'
                    />
                </div>
                </div>

                <div className='bg-white h-[700px] rotate-[8deg] -ml-24 -mt-40 w-[114%] absolute -z-10' />
            </div>
        </div>
    )
}

export default Vision