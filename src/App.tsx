import ReactLenis, { useLenis } from "lenis/react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  

  return (
    <div className="min-h-screen w-full flex justify-center text-white bg-black overflow-x-hidden">
      <ReactLenis root/>
      {/* Main container */}
      <div className="w-full max-w-3xl flex flex-col items-center p-5 gap-20">
        
        {/* Navbar */}
        <header className="w-full h-16 flex items-center">
          <Navbar />
        </header>

        {/* Main content */}
        <main className="w-full flex flex-col md:gap-10 gap-15">
          <Hero />
          <About />
          <Work />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
