import React from 'react'
import ContainerWrapper from '../../Core/ContainerWrapper'

const Banner = () => {
  return (
    <div className='relative z-0 flex flex-col items-center justify-center w-full overflow-hidden'>
        <img src="./assets/images/bg/mesh-grad.png" alt="shape" className='absolute top-0 z-0' />
        <div className="relative w-full bg-center bg-no-repeat bg-cover z-1" style={{backgroundImage: 'url(./assets/images/bg/banner-patern.png)'}}>
            <div className="w-full bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url(./assets/images/bg/banner-texture.png)'}}>
                <div className="pt-[250px] xl:pt-[200px] lg:pt-[160px] sm:pb-[50px] min-h-[1080px] xl:min-h-[900px] lg:min-h-[700px] sm:min-h-[auto]" style={{background: 'linear-gradient(180deg, rgba(13, 16, 20, 0.00) 50%, #0D1014 100%)'}}>
                    <ContainerWrapper>
                        <div className="max-w-[678px] lg:max-w-[580px] w-full mx-auto mb-[30px] sm:mb-0 relative z-[2]">
                            <h1 className='text-[90px] xl:text-[80px] lg:text-[60px] sm:text-[40px] text-center text-white leading-[111.111%] font-[400] bebas-neue mb-[30px] xl:mb-[30px] lg:mb-[15px] animate__animated animate__fadeInUp'>Create Your Own Token Presale website</h1>
                            <p className='mb-[80px] xl:mb-[0px] md:text-[18px] sm:text-[16px] md:max-w-[300px] mx-auto mt-0 text-center animate__animated animate__fadeInUp'>Launch your Token Pre-sale website with Gittu React Js Template</p>
                        </div>
                    </ContainerWrapper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner