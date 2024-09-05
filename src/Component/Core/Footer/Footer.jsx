import React from 'react'
import ContainerWrapper from '../ContainerWrapper'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='pt-[120px] bg-[rgba(255,255,255,0.05)]'>
            <ContainerWrapper>
                <div className="pb-[90px]">
                    <h5 className='flex items-center justify-center gap-[17px] mb-[40px] text-[20px] font-[400] leading-[200%] bebas-neue' style={{ letterSpacing: '2px' }}><span>Beautiful Design </span> | <span>Lifetime Support</span></h5>
                    <h2 className='mb-[50px] text-[65px] font-[400] leading-[115%] bebas-neue text-center'>Are you impressed already?</h2>
                    <p className='max-w-[406px] mx-[auto] mb-[60px] text-center'>Get the awesome and Trendy design for your Presale Website</p>
                    <Link
                        href="#"
                        className="btn-has-shape hov-btn rounded-full backdrop-blur-[10px] h-[50px] mx-auto w-[220px] sm:w-[180px] leading-[162.5%] flex items-center justify-center text-[#111] text-center font-[700] text-[16px] sm:text[14px] uppercase outfit"
                        style={{ background: 'linear-gradient(90deg, #1DFF96 0%, #BCFF7B 100%)' }}
                    >
                        <span className="btn-hov-text !h-[24px]" >
                            <span className="btn-text">Purchase Now</span>
                            <span className="btn-text">Purchase Now</span>
                        </span>
                    </Link>
                </div>
                <div className="py-[40px] w-full flex items-center justify-between" style={{borderTop: '1px solid rgba(255,255,255,0.08)'}}>
                    <div className="w-[45%]">
                        <p>Copyright © 2024 <Link href="#">Gittu</Link>. All Rights Reserved.</p>
                    </div>
                    <div className="w-[10%] mx-[auto]">
                        <Link href="#" className='flex items-center justify-center mx-auto text-center'>
                            <img src="./assets/images/icons/arrow-top.svg" alt="img" />
                        </Link>
                    </div>
                    <div className="w-[45%]">
                        <p className='text-right'>Design By <Link href="#">Uigigs</Link> Team with <span>❤</span></p>
                    </div>
                </div>

            </ContainerWrapper>
        </div>
    )
}

export default Footer