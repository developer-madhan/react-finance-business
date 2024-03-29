import './App.css';
import Header from './components/Header.js';
import Slider from './components/Slider.js';
import About from './components/About.js';
import Service from './components/Service.js';
import Project from './components/Project.js';
import Testimonial from './components/Testimonial.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
// import MyCarousel from './components/MyCarousel.js';

function App() {
  return (
    <div>
     <Header />
     <Slider />
     <About />
     <Service/>
     <Project/>
     <Testimonial/>
     {/* <MyCarousel/> */}
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
