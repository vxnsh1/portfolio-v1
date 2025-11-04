import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="h-screen w-full flex justify-center">
      <header className="w-3xl h-full p-2">
          <Navbar />
      </header>
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App