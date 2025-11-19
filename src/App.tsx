import { useState, useEffect } from "react";
import ReactLenis from "lenis/react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [contribLoaded, setContribLoaded] = useState(false);

  // fallback: mark as loaded after 15s in case iframe doesn't load
  useEffect(() => {
    const t = setTimeout(() => setContribLoaded(true), 15000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen w-full flex justify-center text-white bg-black overflow-x-hidden">
      <ReactLenis root />

      {/* Main container */}
      <div className="w-full max-w-3xl flex flex-col items-center p-5 gap-20">
        {/* Navbar */}
        <header className="w-full h-16 flex items-center">
          <Navbar />
        </header>

        {/* Main content */}
        <main className="w-full flex flex-col md:gap-10 gap-15">
          <Hero />
          <About 
            onContribLoaded={() => setContribLoaded(true)} 
            contribLoaded={contribLoaded}
          />
          <Work />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;
