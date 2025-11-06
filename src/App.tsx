import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

const App = () => {
  return (
    <div className="min-h-screen w-full flex justify-center text-white bg-black overflow-x-hidden">
      {/* Main container */}
      <div className="w-full max-w-3xl flex flex-col items-center p-5 gap-20">
        
        {/* Navbar */}
        <header className="w-full h-16 flex items-center">
          <Navbar />
        </header>

        {/* Main content */}
        <main className="w-full flex flex-col md:gap-10 gap-20">
          <Hero />
          <About />
          <Work />
        </main>
      </div>
    </div>
  );
};

export default App;
