import React from 'react'
import { BsSmartwatch } from 'react-icons/bs';
import { FaArrowLeft, FaArrowRight, FaCamera, FaMobileAlt } from 'react-icons/fa';
import { FaHeadphones, } from 'react-icons/fa6';
import { HiOutlineComputerDesktop, } from 'react-icons/hi2';
import { TbDeviceGamepad } from 'react-icons/tb';

function Categories() {
  return (
    <div className='w-full flex justify-center items-center mt-10 mb-1'>
    <div className='sm:w-full md:w-[80%] pb-10'>
    <div className='flex justify-between items-center'>
    <div>
    <h3 className='text-red-500 font-bold border-l-8 border-red-500 pl-3 ml-1'> Categories </h3>
    <h1 className='text-slate-900 font-bold sm:text-sm md:text-3xl lg:text-3xl pt-4'>Browse By Category</h1>
    </div>

      {/* navigation start */}
      <div className='flex gap-2'>
        <div className='w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer'>
          <FaArrowLeft className='text-black'/>
        </div>
        <div className='w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer'>
          <FaArrowRight className='text-black'/>
        </div>
      </div>
      </div>

     {/* categories icons with flex box */}
     <div className='flex sm:flex-col-3 md:flex-row sm:justify-center md:justify-between mt-5 sm:flex-wrap lg:flex-nowrap gap-5 sm:gap-8'>
    {/* 1st box */}
     <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative'>
     <FaMobileAlt className='text-5xl font-bold'/>
     <p className='font-bold'>Phones</p>
     </div>
     {/* 2nd box */}
     <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative'>
     <HiOutlineComputerDesktop className='text-5xl font-bold'/>
     <p className='font-bold'>Computer</p>
     </div>
     {/* 3rd box */}
     <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative'>
     <BsSmartwatch className='text-5xl font-bold'/>
     <p className='font-bold'>Smart Watch</p>
     </div>
     {/* 4th box */}
     <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative'>
     <FaCamera className='text-5xl font-bold'/>
     <p className='font-bold'>Camera</p>
     </div>
     {/* 5th box */}
     <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative'>
     <FaHeadphones className='text-5xl font-bold'/>
     <p className='font-bold'>Headphones</p>
     </div>
     {/* 6th box */}
     <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative'>
     <TbDeviceGamepad className='text-5xl font-bold'/>
     <p className='font-bold'>Gaming</p>
     </div>
    </div>
</div>
</div>
  )
}

export default Categories