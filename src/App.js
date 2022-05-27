import React, { useRef } from 'react'
import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import Home from './components/home/home';
import Resume from './components/resume/resume';

const scrollToTop = (ref) => window.scrollTo(0, ref.current.offsetTop)
const scrollToResume = (ref) => window.scrollTo(0, ref.current.offsetTop)
const scrollToAbout = (ref) => window.scrollTo(0, ref.current.offsetTop)
const scrollToContact = (ref) => window.scrollTo(0, ref.current.offsetTop)
function App() {

  const myRef = useRef(null)
  const aboutRef = useRef(null)
  const resumeRef = useRef(null)
  const contactRef = useRef(null)


  const callsvalue = () => scrollToTop(myRef)

  function scrollme(val) {
    if (val === 'AboutMe') {
      scrollToAbout(aboutRef);
    }
    if (val === 'Resume') {
      scrollToResume(resumeRef);
    }
    if (val === 'ContactMe') {
      scrollToContact(contactRef);
    }
  }
  return (
    <div>

      <h1 className='h-0' ref={myRef}>.</h1>
      <Header scrollme={scrollme} />
      <Home />
      <h1 ref={aboutRef} className='h-0'>.</h1>
      <About />
      <h1 className='h-0' ref={resumeRef}>.</h1>
      <Resume />
      <h1 className='h-0' ref={contactRef}>.</h1>
      <Contact callsvalue={callsvalue} />
    </div>
  );
}

export default App;
