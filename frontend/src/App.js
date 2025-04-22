// import './App.css';
// import Hero from './components/Hero/Intro/Intro.jsx'
// import ContactMeCard from './components/ContactMeCard/ContactMeCard'
// import PreLoader from './components/PreLoader/PreLoader.jsx'
// import TimeLine from './components/TimeLine/TimeLine.jsx'
// import Skills from './components/Skills/Skills'
// import Projects from './components/Projects/Projects'
// import { useEffect, useState } from 'react';
// import { HelmetProvider } from 'react-helmet-async';

// function App() {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     setTimeout(() => setLoading(!loading), 2500)
//   }, []); // Empty dependency array ensures this effect runs once after initial render

//   return (
//     <HelmetProvider>
//       <div>
//         {
//           loading ? <PreLoader />
//             : <div className="App">
//               <Hero />
//               <TimeLine />
//               <Skills />
//               <Projects />
//               <ContactMeCard />
//             </div>
//         }
//       </div>
//     </HelmetProvider>
//   );
// }

// export default App; 

import './App.css';
import Hero from './components/Hero/Intro/Intro.jsx'
import ContactMeCard from './components/ContactMeCard/ContactMeCard'
import PreLoader from './components/PreLoader/PreLoader.jsx'
import TimeLine from './components/TimeLine/TimeLine.jsx'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(1); // Start with 1 to avoid division by zero
  const [minTimePassed, setMinTimePassed] = useState(false);
  
  // Track image loading
  useEffect(() => {
    // Get all images that need to be preloaded
    const imageUrls = [
      'profile-pic.jpg',
      'nexus-ai.jpg',
      'KnowledgeFlowImage.png',
      'VeganNexusImage.png',
      'CBSE.jpg',
      'CBSE12.png',
      'IIT-JEE.jpg',
      'DTU.png',
      'yuvaan.jpeg',
      'mern.png',
      'code.jpg',
      'adobe.png',
      'ml.png',
      'amazon.png',
      'ai.png'
    ];
    
    setTotalImages(imageUrls.length || 1);
    let loadedCount = 0;
    
    // Create a minimum display time for the loader (1000ms)
    setTimeout(() => {
      setMinTimePassed(true);
    }, 1000);
    
    // Preload all images
    imageUrls.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };
      img.onerror = () => {
        loadedCount++;
        console.warn(`Failed to load image: ${src}`);
        setImagesLoaded(loadedCount);
      };
    });
    
    // Fallback in case some images fail to load
    const fallbackTimer = setTimeout(() => {
      setImagesLoaded(totalImages);
    }, 5000); // 5 second maximum loading time
    
    return () => clearTimeout(fallbackTimer);
  }, []);
  
  // Check if everything is ready to show content
  useEffect(() => {
    if (imagesLoaded >= totalImages && minTimePassed) {
      setLoading(false);
    }
  }, [imagesLoaded, totalImages, minTimePassed]);

  // Calculate loading progress percentage
  const loadingProgress = Math.min(Math.round((imagesLoaded / totalImages) * 100), 100);

  return (
    <HelmetProvider>
      <div>
        {loading ? (
          <PreLoader loadingProgress={loadingProgress} />
        ) : (
          <div className="App">
            <Hero />
            <TimeLine />
            <Skills />
            <Projects />
            <ContactMeCard />
          </div>
        )}
      </div>
    </HelmetProvider>
  );
}

export default App;
