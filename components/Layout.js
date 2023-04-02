import React from 'react'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='w-full h-full flex flex-col items-center'>
        <div className='w-full h-full'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout