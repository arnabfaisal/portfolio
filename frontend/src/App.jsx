import { Button } from "@/components/ui/button";
import { PixelatedCanvas } from './components/ui/pixelated-canvas';
import { Header } from './components/Header';
import { BackGround } from "./components/BackGround";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <div id="home">
      <Header />  {/* fixed navbar should be here, outside any padded wrapper */}
      <BackGround />
      </div>
      <div className="" id="about">
        <About/>
      </div>
      <div className="" id="projects">
        <Projects/>

      </div>
    </>
  );
}

export default App;