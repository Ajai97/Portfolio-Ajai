import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Img1 from '../../assets/certificate/1.png'
import Img2 from '../../assets/certificate/2.png'
import Img3 from '../../assets/certificate/3.png'
import Img4 from '../../assets/certificate/4.png'
import Img5 from '../../assets/certificate/5.png'
import Img6 from '../../assets/certificate/6.png'
import Img7 from '../../assets/certificate/7.png'
import Img8 from '../../assets/certificate/8.png'
import Img9 from '../../assets/certificate/9.png'
import Img10 from '../../assets/certificate/10.png'
import Img11 from '../../assets/certificate/11.png'
import Img12 from '../../assets/certificate/12.png'
import Img13 from '../../assets/certificate/13.png'
import Img14 from '../../assets/certificate/14.png'



const Certification = props => {
    return (
        <section id='certification' className='bg-slate-300 card-inner card'>
            <div className='text-center'>
                <h2 className=' text-headingColor font-[800] text-[2.4rem] mb-5'>
                    Certifications
                </h2> </div>
            <div className='  mt-6 sm:mt-0 sm:mb-12 card'>
                <div className='flex items-center flex-col sm:flex-row card-inner'>
                    <div className='flex justify-end w-full mx-auto items-center'>
                        <div className='  w-full sm:w-1/2 sm:pl-8'>
                            <div
                                data-aos='fade-left'
                                data-aos-delay='100'
                                data-aos-duration='1400'
                                className=' text bg-white p-4 rounded
                                    shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                                        group-hover:font-[600] text-2xl'>Post Graduate Diploma In Advanced Computing</h3>
                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                                        group-hover:font-[600] text-1xl'>Full Stack Development</h3>
                                <a href='https://www.linkedin.com/feed/update/urn:li:activity:7104553145975922688/' ><button className=' button text-white bg-red-600 hover:bg-yellow-400 py-2 px-2 rounded-[8px] font-[500]
                ease-in duration-200'>
                                    See Certification
                                </button></a>

                            </div>

                        </div>

                    </div>
                    <div className='rounded-full bg-black border-white border-4 w-10 h-10
                            absolute right-1/2 transform translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                            justify-center'>


                    </div>

                </div>

            </div>
            <div className='mt-6 sm:mt-0 sm:mb-12 card'>
                <div className='flex items-center flex-col sm:flex-row card-inner '>

                    <div className='flex justify-start w-full mx-auto items-center'>
                        <div className='w-full sm:w-1/2 sm:pr-8'>
                            <div
                                data-aos='fade-right'
                                data-aos-delay='100'
                                data-aos-duration='1400'
                                className=' text bg-white p-4 rounded
                                    shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>

                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                                        group-hover:font-[600] text-2xl'>Master's Certificate in Data Science</h3>


                                <a href='https://success.simplilearn.com/46275689' ><button className=' button text-white bg-red-600 hover:bg-yellow-400 py-2 px-2 rounded-[8px] font-[500]
                ease-in duration-200'>
                                    See Certification
                                </button></a>


                            </div>

                        </div>

                    </div>
                    <div className='rounded-full bg-black border-white border-4 w-10 h-10
                            absolute right-1/2 transform translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                            justify-center'>


                    </div>

                </div>

            </div>
            <Swiper className='bg-slate-300'

                modules={[Navigation, Pagination, A11y]}
                effect={'fade'}
                grabCursor={true}
                centeredSlides={true}
                spaceBetween={120}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img src={Img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Img2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Img3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Img4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Img5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Img6} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Img7} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Img8} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Img9} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Img10} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Img11} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Img12} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Img13} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Img14} alt="" /></SwiperSlide>

                ...
            </Swiper>





        </section>
    );
}
export default Certification