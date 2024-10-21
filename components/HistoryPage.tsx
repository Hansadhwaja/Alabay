import React from 'react';
import line from '../Assets/Line 3.svg';
import Image from 'next/image';
import jumpingDog from '../Assets/DALL·E 2024-07-14 16.40.05 - A 3D cartoon illustration of a furry Central Asian Shepherd dog jumping happily in the air. The dog should have a joyful expression with a wide smile, 2.png';
import blurDog from '../Assets/DALL·E 2024-07-14 16.40.05 - A 3D cartoon illustration of a furry Central Asian Shepherd dog jumping happily in the air. The dog should have a joyful expression with a wide smile, 1.png';

import rectangle from '../Assets/Rectangle 7.svg'
import union from '../Assets/Union.svg'
import Vision from './Vision';
import Token from './Token';
const HistoryPage = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={`fixed w-[95%] ml-10 rounded-2xl bg-white transition-transform duration-500 ease-out z-10
      bottom-0 h-[90%] ${isVisible ? 'translate-y-0' : 'translate-y-[90%]'} overflow-hidden`}
    >
      <div className='h-full'>
        <div className='h-[800px] w-full overflow-y-scroll relative scrollbar-thin scrollbar-thumb-slate-500'>
          <div className='absolute inset-0 gradient-radial h-[700px] w-[114%] rotate-6 -z-10 -ml-16 -mt-20' />
          <Image src={line} alt='line-svg' width={98} height={12} className='mx-auto mt-5' />
          <div className='relative flex justify-between mt-10'>
            <div className='h-[800px]'>
              <div>
                <Image src={jumpingDog} alt='jumpingDog' width={750} height={750} priority />
              </div>
              <div className=' -mt-24 opacity-40'>
                <Image src={blurDog} alt='blurredDog' width={750} height={750} className="blur-[6.35px]" />
              </div>
            </div>
            <div className='mr-10 text-right'>
              <h1 className='font-montserrat font-black text-6xl text-[#F76902D1]'>History Of</h1>
              <p className='font-cheeseburga text-[140px] text-white'>ALABAY</p>
              <p className='font-kumbhsans font-bold text-4xl'>
                The Central Asian Shepherd Dog,<br /> also known as Alabay,
                has been a<br /> guardian of livestock and property<br /> for centuries.
                Originating from<br /> Central Asia, these dogs are<br /> renowned for
                their courage,<br /> strength, and loyalty.
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-8 -mt-20 h-[500px]'>
            <div className='flex-center gap-5 ml-24 z-30'>
              <h1 className='text-3xl font-montserrat font-black cursor-pointer'>ALL</h1>
              <h1 className='text-3xl font-montserrat font-black text-[#FFA800] cursor-pointer'>PHOTOS</h1>
              <h1 className='text-3xl font-montserrat font-black cursor-pointer'>VIDEOS</h1>
            </div>
            <div className='flex-center gap-6 w-full'>
              <div className='bg-[#A6A6A6] w-[25%] h-[250px] rounded-[30px] z-20 flex-center font-black font-montserrat'>PHOTO1</div>
              <div className='bg-[#A6A6A6] w-[25%] h-[250px] rounded-[30px] z-20 flex-center font-black font-montserrat'>PHOTO2</div>
              <div className='bg-[#A6A6A6] w-[25%] h-[250px] rounded-[30px] z-20 flex-center font-black font-montserrat'>PHOTO3</div>
              <button className='bg-black rounded-xl w-16 shadow-custom-shadow flex-center h-24'>
                <Image src={union} alt='button' width={32} height={32} />
              </button>

            </div>

          </div>
          <Vision />
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;
