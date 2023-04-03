import { Slider } from "./components/Slider"
import { About } from "./components/About"
import { Header } from "./components/Header"
import { useMatchMedia } from "./hooks/useMatchMedia"
import { IMatchedMedia } from "./types"

function App() {
  const { isMobile }: IMatchedMedia = useMatchMedia()
  return (
    <div className="app">
      <Header isMobile={isMobile} />
      <Slider isMobile={isMobile} />
      <About />
    </div>
  )
}

export default App
