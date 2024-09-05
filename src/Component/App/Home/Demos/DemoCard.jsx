import Link from 'next/link'
import React from 'react'

const DemoCard = ({ image, title, link }) => {
    return (
        <Link href={link} target='_blank' className='flex items-center justify-center'>
            <div className='overflow-hidden rounded-[32px] lg:rounded-[20px] px-[16px] py-[20px] cursor-pointer bg-[rgba(255,255,255,0.08)] backdrop-blur-[10px] demo-card'>
                <div className="rounded-[32px] lg:rounded-[20px] overflow-hidden relative">
                    <img src={image} alt={title} className='object-cover w-full h-full' />
                </div>
                <div className="flex items-center justify-between pt-[17px]">
                    <h4 className='md-text-[15px]'><span className='text-[rgba(255,255,255,0.50)]'>#</span> <strong className='font-[600]'>{title}</strong></h4>
                    <div className='py-[7px] w-[108px] text-[16px] md:text-[15px] font-[400] leading-[162.5%] rounded-[20px] flex items-center justify-center gap-[22px] demo-card-btn bg-[rgba(255,255,255,0.15)]'>
                        View
                        <img src="./assets/images/icons/arrow.svg" alt="icon" className='demo-card-btn-icon' />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default DemoCard
