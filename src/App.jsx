import { Navbar , Welcome , Dock} from "#components"
import {Draggable} from "gsap/Draggable";
import gsap from "gsap";
import {Terminal,Safari,Resume,Finder,Text,Image} from "#windows"
import {Contact} from "#windows/index.js";
// import {Text} from "#windows/index.js";
// import {Finder} from "#windows/index.js";
gsap.registerPlugin(Draggable)
const App = () => {
  return (
    <main>
      <Navbar/><Welcome/><Dock/>
        <Terminal/>
        <Safari/>
      <Resume/>
        <Finder/>
        <Text/>
        <Image/>
        <Contact/>
    </main>
  );
};
export default App;
