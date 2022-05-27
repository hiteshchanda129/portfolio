import React from 'react'
import './contact.css'
import Topic from '../topic/topic'
import mailimg from '../../images/asuntos-correo-electronico-te-hacen-parecer-poco-profesional.jpg'
import emailjs from 'emailjs-com'


function Contact({ callsvalue }) {
    function sendEmail(e) {
        e.preventDefault()
        console.log('working');
        emailjs.sendForm("service_f7jjo0m", "template_l99hqsh", e.target, "1cPxkACoxtrkmMPID"
        ).then(res => { console.log(res) }).catch(err => { console.log(err) })
    }
    return (
        <div>
            <Topic head='Contact Me' subhead='Lets keep in Touch' />
            <div className='flex mt-7 justify-center'>
                <div className='flex flex-col md:flex-row w-5/6 bg-slate-900 p-2 rounded-xl'>
                    <div className='text-white md:w-3/6 pr-3'>
                        <h3 className='ml-3 font-semibold text-2xl tracking-widest '>Get In Touch <i className="fa-solid fa-envelope-circle-check"></i></h3>
                        <div className='ml-4 my-2 md:my-5'>
                            <a href="/#"><i className="fa-brands fa-facebook-square text-sm md:text-lg mx-2"></i></a>
                            <a href="/#"><i className="fa-brands fa-google-plus-square text-sm md:text-lg mx-2"></i></a>
                            <a href="/#"><i className="fa-brands fa-instagram-square text-sm  md:text-lg mx-2"></i></a>
                            <a href="/#"><i className="fa-brands fa-linkedin text-sm md:text-lg mx-2"></i></a>
                            <a href="/#"><i className="fa-brands fa-twitter-square text-sm md:text-lg mx-2"></i></a>
                        </div>
                        <div className='my-16 hidden md:block'>
                            <h3 className='mb-2 tracking-widest text-sky-300'>send your email here !</h3>
                            <img className="emailimage" src={mailimg} alt="/#" />
                        </div>
                    </div>
                    {/* {part} */}
                    <div className='md:w-3/6 mt-3 md:mt-14'>
                        <form onSubmit={sendEmail} className='bg-gray-200 py-3  px-3 rounded-xl '>
                            <div className='flex flex-col my-2'>
                                <label className='my-2' htmlFor="sendername">Name</label>
                                <input className='bg-gray-300 py-2 px-3 outline-none rounded' type="text" id='sendername' name='sendername' />
                            </div>
                            <div className='flex flex-col my-2'>
                                <label className='my-2' htmlFor="senderemail">Email</label>
                                <input className='bg-gray-300 py-2 px-3 outline-none rounded' type="text" id='senderemail' name='senderemail' />
                            </div>
                            <div className='flex flex-col my-2'>
                                <label className='my-2' htmlFor="sendermessage">Message</label>
                                <textarea className='bg-gray-300 py-2 px-3 outline-none rounded' type="text" id='sendermessage' name='sendermessage' />
                            </div>
                            <button type="submit" className='py-2 px-8 mt-6 text-white rounded-full tracking-widest text-sm bg-slate-800 border-2 hover:border-orange-600' >send<i className="pl-1 fa-solid fa-paper-plane"></i></button>
                        </form>
                    </div>
                </div>
            </div>
            <button className='backtop' onClick={callsvalue}><i className="fa-solid fa-angles-up"></i></button>
        </div>
    )
}

export default Contact