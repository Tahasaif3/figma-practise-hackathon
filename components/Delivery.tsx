import React from 'react'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { BsHeadset } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'

function Delivery() {
    return (
        <div className='w-full sm:h-[500px] lg:h-[300px] flex justify-center items-center'>
            <div className='sm:w-full lg:w-[70%] sm:justify-center gap-y-4 sm:items-center flex sm:flex-col lg:flex-row lg:justify-evenly gap-x-4'>
                {/* box-1 */}
                <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3'>
                    <div className='w-[50px] h-[50px] rounded-full bg-black flex justify-center invalid:items-center border-stone-400 border-8'>
                        <TbTruckDelivery className='text-3xl text-slate-400 items-center pt-2' />
                    </div>
                    <div>
                        <h1 className='font-bold text-center'>FREE AND FAST DELIVERY</h1>
                        <p className='text-sm'>Free delivery for all orders over $140</p>
                    </div>
                </div>

                {/* box-2 */}
                <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3'>
                    <div className='w-[50px] h-[50px] rounded-full bg-black flex justify-center invalid:items-center border-stone-400 border-8'>
                        <BsHeadset  className='text-3xl text-slate-400 items-center pt-2' />
                    </div>
                    <div>
                        <h1 className='font-bold text-center'>24/7 CUSTOMER SERVICE</h1>
                        <p className='text-sm'>Friendly 24/7 customer support</p>
                    </div>
                </div>

                {/* box-3 */}
                <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3'>
                    <div className='w-[50px] h-[50px] rounded-full bg-black flex justify-center invalid:items-center border-stone-400 border-8'>
                        <AiFillSafetyCertificate className='text-3xl text-slate-400 items-center pt-2' />
                    </div>
                    <div>
                        <h1 className='font-bold text-center'>MONEY BACK GUARANTEE</h1>
                        <p className='text-sm'>We reurn money within 30 days</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Delivery