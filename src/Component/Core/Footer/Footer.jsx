import React from 'react'
import ContainerWrapper from '../ContainerWrapper'
import Link from 'next/link'

const Footer = () => {

    // Function to handle back-to-top scroll
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // This enables smooth scrolling
        });
    };

    return (
        <div className='pt-[120px] xl:pt-[80px] md:pt-[60px] bg-[rgba(255,255,255,0.05)] footer-section'>
            <ContainerWrapper>
                <div className="pb-[90px] xl:pb-[70px] md:pb-[40px]">
                    <h5 className='flex items-center justify-center gap-[17px] mb-[40px] xl:mb-[20px] text-[20px] font-[400] leading-[200%] bebas-neue animate__animated animate__fadeInUp' style={{ letterSpacing: '2px' }}><span>Beautiful Design </span> | <span>Lifetime Support</span></h5>
                    <h2 className='mb-[50px] xl:mb-[20px] text-[65px] lg:text-[50px] md:text-[40px] sm:text-[32px] font-[400] leading-[115%] bebas-neue text-center animate__animated animate__fadeInUp'>Are you impressed already?</h2>
                    <p className='max-w-[406px] md:max-w-[320px] mx-[auto] mb-[60px] xl:mb-[40px] md:mb-[20px] md:leading-[180%] text-center md:text-[16px] animate__animated animate__fadeInUp'>Get the awesome and Trendy design for your Presale Website</p>
                    <Link
                        href="https://themeforest.net/user/uigigs/portfolio" target='_blank'
                        className="btn-has-shape hov-btn rounded-full backdrop-blur-[10px] h-[50px] mx-auto w-[220px] sm:w-[180px] leading-[162.5%] flex items-center justify-center text-[#111] text-center font-[700] text-[16px] sm:text[14px] uppercase outfit animate__animated animate__fadeInUp"
                        style={{ background: 'linear-gradient(90deg, #1DFF96 0%, #BCFF7B 100%)' }}
                    >
                        <span className="btn-hov-text !h-[24px]" >
                            <span className="btn-text">Purchase Now</span>
                            <span className="btn-text">Purchase Now</span>
                        </span>
                    </Link>
                </div>
                <div className="py-[40px] md:text-center relative xl:py-[25px] md:pt-[15px] md:pb-[70px] w-full flex items-center justify-between text-[16px] md:flex-wrap md:justify-center animate__animated animate__fadeInUp" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="w-[45%] lg:w-[47%] md:w-full md:text-center">
                        <p>Copyright © 2024 <Link href="#">Gittu</Link>. All Rights Reserved.</p>
                    </div>
                    <div className="w-[10%] lg:w-[6%] mx-[auto] md:w-full md:absolute md:bottom-[10px]">
                        <button onClick={scrollToTop} className='flex items-center justify-center mx-auto text-center back-to-top'>
                            <img src="./assets/images/icons/arrow-top.svg" alt="Back to Top" />
                        </button>
                    </div>
                    <div className="w-[45%] lg:w-[47%] md:w-full md:text-center">
                        <p className='text-right md:text-center'>Design By <Link href="https://themeforest.net/user/uigigs/portfolio" target='_blank'>Uigigs</Link> Team with ❤️</p>
                    </div>
                </div>
            </ContainerWrapper>
        </div>
    )
}

export default Footer;
