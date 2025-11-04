import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen w-full flex justify-center text-white">
      <div className="w-3xl flex flex-col items-center p-2 gap-2">
        
        <header className="w-full h-16">
          <Navbar />
        </header>

        <main className="w-full">
          
          <Hero />
        </main>

      </div>
    </div>
  );
};

export default App;
