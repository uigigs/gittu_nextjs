import React from 'react'

const ContainerWrapper = ({children}) => {
  return (
    <div className='max-w-[1210px] xl:max-w-[960px] lg:max-w-[730px] md:max-w-[560px] w-full mx-auto px-[20px]'>
      {children}
    </div>
  )
}

export default ContainerWrapper