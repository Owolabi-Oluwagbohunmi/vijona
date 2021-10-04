import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
    return (
        <div className="px-5 md:px-16 lg:px-18">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
