import React from 'react'
import './home.css';
import Typical from 'react-typical';
import ProfileImg from '../../images/2f377daa-30b3-487f-941c-18503633a4a1-12209ba765df.jpg'
import svgimage from '../../assets/wave3.svg'

function Home() {
    return (
        <div className='bg-slate-900'>
            <div className='profile-container flex justify-center mb-6 md:mx-3 sm:mx-2'>
                <div className=' text-white flex   flex-col-reverse md:flex-row'>
                    <div className='profile-main flex  flex-col text-center items-center my-auto'>
                        <div className='profile-details'>
                            <a href="/#"><i className="fa-brands fa-facebook-square text-sm md:text-xl mx-1"></i></a>
                            <a href="/#"><i className="fa-brands fa-google-plus-square text-sm md:text-xl mx-1"></i></a>
                            <a href="/#"><i className="fa-brands fa-instagram-square text-sm  md:text-xl mx-1"></i></a>
                            <a href="/#"><i className="fa-brands fa-linkedin text-sm md:text-xl mx-1"></i></a>
                            <a href="/#"><i className="fa-brands fa-twitter-square text-sm md:text-xl mx-1"></i></a>
                        </div>
                        <div className='text-2xl mt-2'>
                            <span className='text-sm md:text-lg lg:text-2xl'>Hello, I'M <span className='text-orange-600'>HITESH</span></span>

                            <h1 className=' text-2xl md:text-3xl lg:text-4xl my-3 lg:my-7 typical tracking'>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "FullStack Dev ",
                                        1200,
                                        "MERN Stack Dev ",
                                        1200,
                                        "React/Redux Dev",
                                        1200,
                                        "Enthusiastic Dev ",
                                        1200,

                                    ]}
                                />
                            </h1>
                            <span className='px-3 para text-sm md:text-md lg:text-lg'>Knack of building applications with front and back end operations.</span>
                        </div>
                        <div className='md:my-6 my-4'>
                            <button className='mx-3 text-xs lg:text-sm border-2 md:py-2 md:px-8 py-2 px-6 border-white rounded-full hover:border-orange-600 font-bold'>Hire Me</button>
                            <a href="hiteshCV_WebDevJs.pdf" download='hiteshCV_WebDevJs.pdf'>
                                <button className='mx-3 my-2 lg:text-sm text-xs bg-orange-600 md:py-2 md:px-8 py-2 px-6 rounded-full hover:bg-white hover:text-black font-bold'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className='sm:ml-10 lg:ml-20 lg-mr-5 md:ml-10  main-image rounded-full border-2 lg:border-4  border-orange-600 overflow-hidden w-20 h-20 md:w-80 md:h-80 flex mx-auto my-4 lg:justify-center lg:items-center sm:mx-auto sm:mb-8'>
                        <div className='imageshape w-10 h-10  border-1 rounded-full flex justify-center items-center overflow-hidden'>
                            <img className='profie-image' src={ProfileImg} alt="/#" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={svgimage} alt="/#" />
            </div>
        </div>
    )
}

export default Home