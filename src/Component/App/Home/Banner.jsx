import React from 'react'
import ContainerWrapper from '../../Core/ContainerWrapper'

const Banner = () => {
  return (
    <div className='relative z-0 flex flex-col items-center justify-center w-full'>
        <img src="./assets/images/bg/mesh-grad.png" alt="shape" className='absolute top-0 z-0' />
        <div className="relative w-full bg-center bg-no-repeat bg-cover z-1" style={{backgroundImage: 'url(./assets/images/bg/banner-patern.png)'}}>
            <div className="w-full bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url(./assets/images/bg/banner-texture.png)'}}>
                <div className="pt-[250px] min-h-[1080px]" style={{background: 'linear-gradient(180deg, rgba(13, 16, 20, 0.00) 50%, #0D1014 100%)'}}>
                    <ContainerWrapper>
                        <div className="max-w-[678px] w-full mx-auto mb-[60px] relative z-[2]">
                            <h1 className='text-[90px] text-center text-white leading-[111.111%] font-[400] bebas-neue mb-[60px]'>Create Your Own Token Presale website</h1>
                            <p className='mb-[80px] mt-0 text-center'>Launch your Token Pre-sale website with Gittu React Js Template</p>
                        </div>
                    </ContainerWrapper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner