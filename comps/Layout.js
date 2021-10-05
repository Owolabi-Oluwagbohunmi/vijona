import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
    return (
        <>
        <div className=" font-openSans px-5 md:px-16 lg:px-18">
            <Navbar />
            {children}
           
        </div>
        <Footer /> 
       
        </>
        
    )
}

export default Layout
