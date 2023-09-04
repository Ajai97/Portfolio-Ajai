import React from 'react'


const Certification = props => {
    return (
        <section id='certification' className='bg-slate-400 card-inner card'>
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





        </section>
    );
}
export default Certification