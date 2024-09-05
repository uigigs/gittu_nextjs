import React from 'react'
import DemoCard from './DemoCard'
import ContainerWrapper from '@/src/Component/Core/ContainerWrapper'

const demoData = [
    { image: './assets/images/img/index-1.jpg', title: 'Demo One', link: 'https://gittu-react-landing.vercel.app/' },
    { image: './assets/images/img/index-2.jpg', title: 'Demo Two', link: 'https://gittu-react-landing.vercel.app/#/home-two' },
    { image: './assets/images/img/index-3.jpg', title: 'Demo Three', link: 'https://gittu-react-landing.vercel.app/#/home-three' },
    { image: './assets/images/img/index-4.jpg', title: 'Demo Four', link: 'https://gittu-react-landing.vercel.app/#/home-four' },
    { image: './assets/images/img/index-5.jpg', title: 'Demo Five', link: 'https://gittu-react-landing.vercel.app/#/home-five' },
    { image: './assets/images/img/index-6.jpg', title: 'Demo Six', link: 'https://gittu-react-landing.vercel.app/#/home-six' },
    { image: './assets/images/img/index-7.jpg', title: 'Demo Seven', link: 'https://gittu-react-landing.vercel.app/#/home-seven' },
    { image: './assets/images/img/index-8.jpg', title: 'Demo Eight', link: 'https://gittu-react-landing.vercel.app/#/home-eight' },
    { image: './assets/images/img/index-9.jpg', title: 'Demo Nine', link: 'https://gittu-react-landing.vercel.app/#/home-nine' },
    { image: './assets/images/img/index-10.jpg', title: 'Demo Ten', link: 'https://gittu-react-landing.vercel.app/#/home-ten' },
]

const Demos = () => {
    return (
        <div className='mt-[-490px] xl:mt-[-400px] lg:mt-[-320px] md:mt-[-280px] sm:mt-[0px] pb-[80px] lg:pb-[60px] md:pb-[50px] relative z-10' id="demos">
            <ContainerWrapper>
                <h2 className='text-[36px] lg:text-[32px] sm:text-[26px] text-center text-white leading-[111.111%] font-[400] bebas-neue mb-[60px] lg:mb-[40px] md:mb-[30px] animate__animated animate__fadeInUp'>
                    Explore Our 10+ Awesome Demos
                </h2>
                <div className="flex items-start justify-start mx-[-20px] lg:mx-[-12px] flex-wrap">
                    {demoData.map((demo, index) => (
                        <div className="px-[20px] lg:px-[12px] mb-[40px] md:mb-[24px] w-1/2 md:w-full animate__animated animate__fadeInUp" key={index}>
                            <DemoCard image={demo.image} title={demo.title} link={demo.link} />
                        </div>
                    ))}
                </div>
            </ContainerWrapper>
        </div>
    )
}

export default Demos
