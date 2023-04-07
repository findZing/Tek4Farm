import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <div className='h-[50px]'>
        <Navbar />
      </div>
        <div className='max-w-window w-full h-full py-[20px]'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout