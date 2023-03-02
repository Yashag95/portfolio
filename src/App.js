import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/about";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

const App = ()=>  {
  return (
    <> 
     
    <NavBar/>
      <Home/>
      <About/>
      <Experience/>
      <SocialLinks/>
      <Skills/>
      <Contact/> 
      {/* <Footer/> */}
      </>
    
  )
}

export default App;
