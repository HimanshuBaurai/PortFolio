import './App.css';
import Hero from './components/Hero/Intro/Intro.jsx'
// import Skills from './components/Skills/Skills'
// import Project from './components/Projects/Projects'
import ContactMeCard from './components/ContactMeCard/ContactMeCard'
import PreLoader from './components/PreLoader/PreLoader.jsx'
import TimeLine from './components/TimeLine/TimeLine.jsx'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);  
  useEffect(() => {
    // // When the window finishes loading, hide the loader
    // window.addEventListener('load', () => {
    //   setLoading(false);
    // });

    // return () => {
    //   // Cleanup: Remove the event listener when the component unmounts
    //   window.removeEventListener('load', () => { });
    // };
    setTimeout(() => setLoading(!loading), 2500)
  }, []); // Empty dependency array ensures this effect runs once after initial render

  return (
    <div>
      {
        loading ? <PreLoader />
          : <div className="App">
            {/* intro section */}
            <Hero />
            {/* journey TimeLine */}
            <TimeLine />
            <Skills />
            <Projects />
            <ContactMeCard />
          </div>
      }
    </div>

    // <div className="App">
    //   {/* intro section */}
    //   <Hero />
    //   {/* <Skills /> */}
    //   {/* <Project /> */}
    //   <ContactMeCard />
    // </div>
  );
}

export default App; 