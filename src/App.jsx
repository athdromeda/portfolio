import './App.css';
import Skills from './sections/Skills';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Header from './components/Header';
import Projects from './sections/Projects';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
