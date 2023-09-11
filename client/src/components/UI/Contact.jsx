import React, { useState } from 'react'
import axios from 'axios'


const Contact = () => {
    
   
  return (
    <section id='contact' className=' contact pb-16 bg-slate-200'>
        <div className='container'>
            <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Contact Info</h2>
            <div className='md:flex justify-between items-center'>
                <div className='w-full md:w-1/2 h-[300px] sm:h-[450px] '>
                <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117313.01469386979!2d77
                .2334530252385!3d19.14740806328775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d
                66bb9d31721%3A0x43892c180155daf1!2sNanded%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1693041346801!5m2!1sen!2sin" 
                className='w-full h-full border-0' allowFullScreen="" 
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                </div>
                <div className='w-full text-smallTextColor flex font-[400] text-[25px] mt-8   items-center bg-indigo-100 px-4
                py-8 '> <ul>
                    <i class=" button1 ri-mail-fill">
                        <p className='text1 '>ajaikulkarni669@gmail.com</p></i><br/>
                <i class="ri-phone-fill button1"><p className='text1'>+91-7507342316</p></i><br/>
                <i class="ri-map-pin-2-fill button1">     <p className='text1'> Nanded, Maharashtra, India</p></i>
                </ul>
                
                    
                </div>
            
            </div>

        </div>
    </section>
  )
}

export default Contact

