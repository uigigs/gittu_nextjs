import React from 'react'
import ContainerWrapper from '../ContainerWrapper'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='absolute w-full h-auto top-0 left-0 z-[999999]'>
            <ContainerWrapper>
                <div className="flex items justify-between py-[30px] md:py-[15px]">
                    <Link href="/"><img src="./assets/images/logo/logo.png" alt="logo" /></Link>
                    <div className="flex items justify-end gap-[30px] md:gap-[15px]">
                        <Link
                            href="#"
                            className="btn-has-shape hov-btn bg-[rgba(255,255,255,0.15);] rounded-full backdrop-blur-[10px] h-[50px] w-[130px] md:w-[110px] leading-[162.5%] flex items-center justify-center text-[white] text-center font-[700] text-[16px] sm:text[14px] uppercase outfit sm:hidden"
                        >
                            <span className="btn-hov-text !h-[24px]" >
                                <span className="btn-text">Demos</span>
                                <span className="btn-text">Demos</span>
                            </span>
                        </Link>

                        <Link
                            href="#"
                            className="btn-has-shape hov-btn rounded-full backdrop-blur-[10px] h-[50px] w-[200px] md:w-[160px] leading-[162.5%] flex items-center justify-center text-[#111] text-center font-[700] text-[16px] sm:text[14px] uppercase outfit"
                            style={{background: 'linear-gradient(90deg, #1DFF96 0%, #BCFF7B 100%)'}}
                        >
                            <span className="btn-hov-text !h-[24px]" >
                                <span className="btn-text">Buy On envato</span>
                                <span className="btn-text">Buy On envato</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </ContainerWrapper>
        </div>
    )
}

export default Header