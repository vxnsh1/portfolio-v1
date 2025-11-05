import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen w-full flex justify-center text-white">
      <div className="w-3xl flex flex-col items-center p-2 gap-20">
        
        <header className="w-full h-16">
          <Navbar />
        </header>

        <main className="w-full h-full flex flex-col gap-10">
          <Hero />
          <About />
        </main>

      </div>
    </div>
  );
};

export default App;
