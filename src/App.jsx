import NavBar from "./components/NavBar.jsx"
import Hero from "./components/Hero.jsx"
import ProductViewer from "./components/ProductViewer.jsx"
import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="pt-[7vh]">
      <NavBar />
      <Hero />
      <ProductViewer />
    </main>
  )
}

export default App
