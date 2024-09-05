import React from 'react'

const ContainerWrapper = ({children}) => {
  return (
    <div className='max-w-[1210px] w-full mx-auto px-[20px]'>
      {children}
    </div>
  )
}

export default ContainerWrapper