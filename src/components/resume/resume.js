import React, { useState } from 'react'
import Topic from '../topic/topic'
import './resume.css'
// import { Link } from 'react-scroll'

function Resume() {

    const [reference, setRef] = useState("Education")


    function setRefrence(r) {
        console.log(reference);
        setRef(r)
    }

    return (
        <div className='my-10'>
            <Topic head='Resume' subhead='My formal Bio Details' />
            <div className='flex justify-center flex-col lg:flex-row my-6 mx-2'>
                <div className='lg:w-96 border-r-2 border-slate-900'>
                    <div className='lg:flex hidden'>
                        <div className=' bg-slate-900 pt-2 px-2 text-slate-900'><i class="text-xl fa-solid fa-chess"></i></div>
                    </div>
                    <div className='flex'>
                        <div className=' bg-slate-900 py-3 md:py-6 px-2 text-white'><i class="fa-solid fa-user-graduate text-sm md:text-xl"></i></div>
                        <div className='py-1 md:py-4  text-slate-900 font-semibold text-md'>
                            <p className={reference === "Education" ? 'pl-5 md:pl-10 py-2 md:py-3 w-48 md:w-72 text-white bg-slate-900 rounded-r-3xl' : "pl-5 md:pl-10 py-2 md:py-3 w-48 md:w-72 rounded-r-3xl"}
                                onClick={(e) => setRefrence(e.target.innerText)} >Education</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='bg-slate-900 py-3 md:py-6 px-2 text-white'><i class="fa-solid fa-clock-rotate-left text-sm md:text-xl"></i></div>
                        <div className='py-1 md:py-4  text-slate-900 text-md font-semibold'>
                            <p className={reference === "Work History" ? 'pl-5 md:pl-10 py-2 md:py-3 w-48 md:w-72 text-white bg-slate-900 rounded-r-3xl' : "pl-5 md:pl-10 py-2 md:py-3 w-48 md:w-72 rounded-r-3xl"} onClick={(e) => setRefrence(e.target.innerText)}>Work History</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='bg-slate-900 py-3 md:py-6 px-2 text-white'><i class="fa-solid fa-clock-rotate-left text-sm md:text-xl"></i></div>
                        <div className='py-1 md:py-4  text-slate-900 text-md font-semibold'>
                            {/* <Link to='programming'> */}
                            <p className={reference === "Programming Skill" ? 'pl-5 md:pl-10 py-2 md:py-3 w-48 md:w-72 text-white bg-slate-900 rounded-r-3xl' : "pl-5 md:pl-10 py-2 md:py-3 w-48 md:w-72rounded-r-3xl"} onClick={(e) => setRefrence(e.target.innerText)}>Programming Skill</p>
                            {/* </Link> */}
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='bg-slate-900 py-3 md:py-6 px-2 text-white'><i class="fa-solid fa-chart-bar text-sm md:text-xl"></i></div>
                        <div className='py-1 md:py-4  text-slate-900 text-md font-semibold'>
                            <p className={reference === "Projects" ? 'pl-5 md:pl-10 py-2 md:py-3 w-48 md:w-72 text-white bg-slate-900 rounded-r-3xl' : "pl-5 md:pl-10 py-2 md:py-3 w-48 md:w-72 rounded-r-3xl"} onClick={(e) => setRefrence(e.target.innerText)}>Projects</p>
                        </div>
                    </div>
                    <div className='flex '>
                        <div className='bg-slate-900 py-3 md:py-6 px-2 text-white'><i class="text-sm md:text-xl fa-solid fa-chess"></i></div>
                        <div className='py-1 md:py-4 text-slate-900 text-md font-semibold'>
                            <p className={reference === "Intrests" ? 'pl-5 md:pl-10 py-2 md:py-3 w-48 md:w-72 text-white bg-slate-900 rounded-r-3xl' : "pl-5 md:pl-10 py-2 md:py-3 w-48 md:w-72 rounded-r-3xl"} onClick={(e) => setRefrence(e.target.innerText)}>Intrests</p>
                        </div>
                    </div>
                    <div className='lg:flex hidden'>
                        <div className='bg-slate-900 pb-2 px-2 text-slate-900'><i class="text-xl fa-solid fa-chess"></i></div>
                    </div>
                </div>
                {/* end */}
                <div className='h-96 lg:w-3/6 lg:px-10  my-14'>
                    <div className={reference === "Education" ? 'h-96' : "hidden h-96"}>
                        <ul className='resume-ul flex flex-col  h-full'>
                            <li className='flex'>
                                <div className='flex flex-col lg:flex-row space-between w-full '>
                                    <div>
                                        <h4 className='mb-3 text-orange-600'>Chhattisgarh Swami Vivekanand Technical University ,Bhilai</h4>
                                        <p className='text-black text-sm lg:text-lg'>BATCHELOR OF ENGINEERING IN COMPUTER SCIENCE </p>
                                    </div>
                                    <div className='rounded-full bg-orange-600 h-7 pt-1 px-3 text-white text-sm content-center w-24 mt-2'>2014-2019</div>
                                </div>
                            </li>
                            <li className='flex lg:my-16 my-8'>
                                <div className='flex flex-col lg:flex-row space-between  w-full'>
                                    <div>
                                        <h4 className='mb-3 text-orange-600'>Mp & Ev School , Vskp</h4>
                                        <p className='text-black text-sm lg:text-lg'>
                                            12th C.B.S.E
                                        </p>
                                    </div>
                                    <div className='rounded-full bg-orange-600 h-7 pt-1 px-3 text-white text-sm content-center w-24 mt-2'>2013-2014
                                    </div>
                                </div>
                            </li>
                            <li className='flex '>
                                <div className='flex flex-col lg:flex-row space-between w-full'>
                                    <div className='width'>
                                        <h4 className='mb-3 text-orange-600'>S.E.C Rly MHS School</h4>
                                        <p className='text-black'>10th C.B.S.E
                                        </p>
                                    </div>
                                    <div className='rounded-full bg-orange-600 h-7 pt-1 px-3 text-white text-sm content-center w-24 mt-2'>2011-2012
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className={reference === "Work History" ? 'h-96' : "hidden h-96"}>
                        <ul className='resume-ul flex flex-col  h-full'>
                            <li className='flex'>
                                <div className='flex flex-col lg:flex-row space-between w-full'>
                                    <div>
                                        <h4 className='mb-3 text-orange-600'>Edureka - Internship</h4>
                                        <p className='text-black'>
                                            Full Stack Web Development Internship
                                        </p>
                                    </div>
                                    <div className='rounded-full bg-orange-600 h-7 pt-1 px-3 text-white text-sm content-center w-32 mt-2'>Feb-present
                                    </div>
                                </div>
                            </li>
                            <li className='flex my-16'>
                                <div className='flex flex-col lg:flex-row space-between w-full'>
                                    <div className='width'>
                                        <h4 className='mb-3 text-orange-600'>Network Advisor</h4>
                                        <p className='text-black'>I used to work as a Network Advisor in a UK based company, Virgin Media associated with Accenture. Where we had to plan and manage
                                            the network from hubsite to the client location.
                                        </p>
                                    </div>
                                    <div className='rounded-full bg-orange-600 h-7 pt-1 px-3 text-white text-sm content-center w-24 mt-2'>2019-2020
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={reference === "Programming Skill" ? 'lg:h-80 overflow-y-auto' : "h-pro overflow-y-auto hidden lg:h-80"}>
                        <ul className='resume-ul flex flex-row flex-wrap  lg:gap-x-8 lg:h-full'>
                            <li className='flex'>
                                <div className='flex '>
                                    <div>
                                        <h4 className='mb-1 font-semibold text-orange-600'>React Js</h4>
                                        <div className='h-4 w-60 bg-orange-600'>
                                            <div className='h-4 w-36 bg-slate-900'></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='flex'>
                                <div className='flex'>
                                    <div>
                                        <h4 className='mb-1 font-semibold text-orange-600'>JavaScript</h4>
                                        <div className='h-4 w-60 bg-orange-600'>
                                            <div className='h-4 w-48 bg-slate-900'></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='flex'>
                                <div className='flex'>
                                    <div>
                                        <h4 className='mb-1 font-semibold text-orange-600'>Node/Express Js</h4>
                                        <div className='h-4 w-60 bg-orange-600'>
                                            <div className='h-4 w-24 bg-slate-900'></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='flex'>
                                <div className='flex'>
                                    <div>
                                        <h4 className='mb-1 font-semibold text-orange-600'>Mongo Db</h4>
                                        <div className='h-4 w-60 bg-orange-600'>
                                            <div className='h-4 w-28 bg-slate-900'></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='flex'>
                                <div className='flex'>
                                    <div>
                                        <h4 className='mb-1 font-semibold text-orange-600'>React/Redux</h4>
                                        <div className='h-4 w-60 bg-orange-600'>
                                            <div className='h-4 w-40 bg-slate-900'></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='flex'>
                                <div className='flex'>
                                    <div>
                                        <h4 className='mb-1 font-semibold text-orange-600'>Html</h4>
                                        <div className='h-4 w-60 bg-orange-600'>
                                            <div className='h-4 w-48 bg-slate-900'></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='flex'>
                                <div className='flex'>
                                    <div>
                                        <h4 className='mb-1 font-semibold text-orange-600'>CSS</h4>
                                        <div className='h-4 w-60 bg-orange-600'>
                                            <div className='h-4 w-52 bg-slate-900'></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='flex '>
                                <div className='flex'>
                                    <div>
                                        <h4 className='mb-1 font-semibold text-orange-600'>Next Js</h4>
                                        <div className='h-4 w-60 bg-orange-600'>
                                            <div className='h-4 w-24 bg-slate-900'></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='flex'>
                                <div className='flex'>
                                    <div>
                                        <h4 className='mb-1 font-semibold text-orange-600'>Git/Github</h4>
                                        <div className='h-4 w-60 bg-orange-600'>
                                            <div className='h-4 w-36 bg-slate-900'></div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className={reference === "Projects" ? 'h-96' : "hidden h-96"}>
                        <ul className='resume-ul flex flex-col  h-full'>
                            <li className='flex'>
                                <div className='flex flex-col lg:flex-row space-between w-full'>
                                    <div>
                                        <h4 className='mb-3 text-orange-600'>Edureka - Internship</h4>
                                        <p className='text-black text-sm lg:text-lg'>
                                            Full Stack Web Development Internship
                                        </p>
                                    </div>
                                    <div className='rounded-full bg-orange-600 h-7 pt-1 px-3 text-white text-sm content-center w-28 mt-2'>Feb-present
                                    </div>
                                </div>
                            </li>
                            <li className='flex my-6'>
                                <div className='flex flex-col lg:flex-row space-between w-full'>
                                    <div className='width'>
                                        <h4 className='mb-3 text-orange-600'>Network Advisor</h4>
                                        <p className='text-black text-sm lg:text-lg'>I used to work as a Network Advisor in a UK based company, Virgin Media associated with Accenture. Where we had to plan and manage
                                            the network from hubsite to the client location.
                                        </p>
                                    </div>
                                    <div className='rounded-full bg-orange-600 h-7 pt-1 px-3 text-white text-sm content-center w-24 mt-2'>2019-2020
                                    </div>
                                </div>
                            </li>
                            <li className='flex'>
                                <div className='flex flex-col lg:flex-row space-between w-full '>
                                    <div>
                                        <h4 className='mb-3 text-orange-600'>Chhattisgarh Swami Vivekanand Technical University ,Bhilai</h4>
                                        <p className='text-black text-sm lg:text-lg'>BATCHELOR OF ENGINEERING IN COMPUTER SCIENCE </p>
                                    </div>
                                    <div className='rounded-full bg-orange-600 h-7 pt-1 px-3 text-white text-sm content-center w-24 mt-2'>2014-2019</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={reference === "Intrests" ? 'h-96' : "hidden h-96"}>
                        <ul className='resume-ul flex flex-col  h-full'>
                            <li className='flex'>
                                <div className='flex flex-col lg:flex-row space-between w-full'>
                                    <div>
                                        <h4 className='mb-3 text-orange-600'>Edureka - Internship</h4>
                                        <p className='text-black text-sm lg:text-lg'>
                                            Full Stack Web Development Internship
                                        </p>
                                    </div>
                                    <div className='rounded-full bg-orange-600 h-7 pt-1 px-3 text-white text-sm content-center w-28 mt-2'>Feb-present
                                    </div>
                                </div>
                            </li>
                            <li className='flex my-6'>
                                <div className='flex flex-col lg:flex-row space-between w-full'>
                                    <div className='width'>
                                        <h4 className='mb-3 text-orange-600'>Network Advisor</h4>
                                        <p className='text-black text-sm lg:text-lg'>I used to work as a Network Advisor in a UK based company, Virgin Media associated with Accenture. Where we had to plan and manage
                                            the network from hubsite to the client location.
                                        </p>
                                    </div>
                                    <div className='rounded-full bg-orange-600 h-7 pt-1 px-3 text-white text-sm content-center w-24 mt-2'>2019-2020
                                    </div>
                                </div>
                            </li>
                            <li className='flex'>
                                <div className='flex flex-col lg:flex-row space-between w-full '>
                                    <div>
                                        <h4 className='mb-3 text-orange-600'>Chhattisgarh Swami Vivekanand Technical University ,Bhilai</h4>
                                        <p className='text-black text-sm lg:text-lg'>BATCHELOR OF ENGINEERING IN COMPUTER SCIENCE </p>
                                    </div>
                                    <div className='rounded-full bg-orange-600 h-7 pt-1 px-3 text-white text-sm content-center w-24 mt-2'>2014-2019</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Resume