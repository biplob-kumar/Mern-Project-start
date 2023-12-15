import React from 'react'
import { FaStar } from 'react-icons/fa'

const Testimovials = () => {
    return (
        <div className='bg-white py-5'>
            <div className="section-container">
                <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
                    <div className='md:w1/2' >
                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiVRBORZBdrPxnbdDkVlhg_VyrVRwUg7HOqjrMFZcJMc-_CwqIx8ny2qvqf5O4XCPi7mbqvB8bYwlVEEwPLoOfv8zf4S6rDCT_Vo8Tdt7B4QEf6_uPLRCkswJnCgIEW5ce_bGq6W0hsORcrykgDeGIyLDRgLI8DloxG-VHKP6SqiLsCWlsVPZlsbLo/s807/testimonials.png" alt="" />

                    </div>
                    <div className='md:w1/2' >
                        <div className="text-left md:w-4/5">
                            <p className="subtitle">Testimonials</p>
                            <h2 className="title">What Our Customers Say About Us</h2>
                            <blockquote className="my-5 text-secondary leading-[30px]">
                                “I had the pleasure of dining at Foodi last night, and I'm still
                                raving about the experience! The attention to detail in
                                presentation and service was impeccable”
                            </blockquote>

                            {/* avator  */}

                       <div className='flex items-center gap-4 flex-wrap'>
                       <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4Usx3f78RKIt4OYe-u1STH11wXI5Pmm3Kb425FZ6VR6BODTId9YD1r02L-ABaGZHmwB9ugLF-YzrfU5eGlQq26qPJHaXy6HpHmcfPgmGwmkopH7OIemdj94YfKMQho4BLrOrWmZjisZZUUpqeZBxv9iYsVgtpHX5UkEKXYfbOHTI1vz2H4-84NkhE/s1600/testimonial1.png" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcjFIeiTXTCcIvtSCugjzN0aeynr4Fdc2vFAmXYUbSYw6OdiWeNIZb06sPxMbfECojmc4X-ARe4ob17q_E_vqrEYaBV0hxyj2tcluwtJQbxfziFITArjn0oSWi-68zrK0DZ1XF_QVZ5AWu3CoPNM70_gnXxf3WqoJwuonMtiWTFKpQ_3vxl_-6LRqn/s1600/testimonial2.png" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizVvaPtltZGJH7E_FA1A2kFjGXI1TvrHeoO0MxiCFkrvYkxwdFAb_E57IWkvD-v_-6DqFRdIneHBjlhnX1wMJ3SdSzgTvoTUSfV_tMoL029l1-LNdlMD0Gu0ypRk9FQCF2Bn6R-e9GC44U3F5CpyBNp3OMnq3owasL6K3iQHQd48PpEZgXLMkM-vmf/s1600/testimonial3.png" />
                                    </div>
                                </div>
                                <div className="avatar placeholder">
                                    <div className="w-12 bg-neutral text-neutral-content">
                                        <span>+99</span>
                                    </div>
                                </div>
                            </div>
                     

                            <div className="space-y-1 ">
                                <h5 className="text-lg font-semibold">Customer Feedback</h5>
                                <div className="flex items-center gap-2">
                                    <FaStar className="text-yellow-400" />
                                     <span className="font-medium">4.9</span> <span className="text-[#807E7E]">(18.6k Reviews)</span></div>
                            </div>
                            </div>


                        </div>

                    </div>



                </div>
            </div>

        </div>
    )
}

export default Testimovials