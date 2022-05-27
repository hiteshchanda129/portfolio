import React from 'react'
import Topic from '../topic/topic'
import './about.css'
import aboutimg from '../../images/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-122741764.jpg'

function About() {
    return (
        <div className='flex justify-center flex-col'>
            <Topic head='About Me' subhead='Why Choose Me ?' />
            <div className='flex justify-center'>
                <div className='xl:w-2/3 w-5/6 my-5 flex border-0 boxdesign'>
                    <div className='w-2/5 hidden lg:block'>
                        <img className='aboutimage' src={aboutimg} alt="/#" />
                    </div>
                    <div className='px-4 py-3 lg:w-3/5 lg:px-10 lg:py-10 text-sm font-thin'>
                        <p className='lg:leading-6 font-thin leading-5 text-xs lg:text-lg'>Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.</p>
                        <div className='lg:my-20 my-8 lg:leading-6'>
                            <h4 className='font-medium text-xs lg:text-lg'>Here are a Few Highlights:</h4>
                            <ul className='highlight text-xs lg:text-lg'>
                                <li>Full Stack web and mobile developmen</li>
                                <li>Interactive Front End as per the design</li>
                                <li>React and React Native</li>
                                <li>Redux for State Mnanagement</li>
                                <li>Building REST API</li>
                                <li>Managing database</li>
                            </ul>
                        </div>
                        <div>
                            <button className='mx-3 text-xs lg:text-sm border-2 bg-slate-800 text-white md:py-2 md:px-8 py-2 px-6 lg:px-10 lg:py-3 border-white rounded-full hover:border-orange-600 '>Hire Me</button>
                            <a href="hiteshCV_WebDevJs.pdf" download='hiteshCV_WebDevJs.pdf'>
                                <button className='mx-3 my-2 lg:text-sm text-xs bg-orange-600 md:py-2 md:px-8 py-2 px-6 lg:py-3 rounded-full text-white hover:text-black'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About