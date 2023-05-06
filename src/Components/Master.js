import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'


export default function Master({ title = "Welcome to Employee Management System", children }) {
    return (
        <div>
                    
            <Navbar />
    
                {children}
            
            <Footer />
           
        </div>
    )
}
