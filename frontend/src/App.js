import './App.css';
import Hero from './components/Hero/Intro/Intro.jsx'
// import Skills from './components/Skills/Skills'
// import Project from './components/Projects/Projects'
import ContactMeCard from './components/ContactMeCard/ContactMeCard'

function App() {
  return (
    <div className="App">
      {/* intro section */}
      <Hero />
      {/* <Skills /> */}
      {/* <Project /> */}
      <ContactMeCard />
    </div>
  );
}

export default App;
