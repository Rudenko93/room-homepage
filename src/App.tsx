import { Slider } from "./components/Slider"
import { About } from "./components/About"
import { Header } from "./components/Header"
import { useMatchMedia } from "./hooks/useMatchMedia"

function App() {
  const { isMobile }: Record<string, boolean> = useMatchMedia()
  return (
    <div className="app">
      <Header />
      <Slider isMobile={isMobile} />
      <About />
    </div>
  )
}

export default App
