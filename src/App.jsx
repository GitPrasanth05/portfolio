import { Navbar, Welcome, Dock, Home } from "#components";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
gsap.registerPlugin(Draggable);
import {
  Terminal,
  Safari,
  Resume,
  Finder,
  Text,
  Image,
  Photos,
} from "#windows";
import { Contact, Archive } from "#windows/index.js";
// import {Text} from "#windows/index.js";
// import {Finder} from "#windows/index.js";
import GalaxyBackground from "#background/GalaxyBackground";
import { useEffect } from "react";
import { initTheme } from "#utils/theme";

// gsap.registerPlugin(Draggable)
// const App = () => {
//   return (
//     <main>
//       <Navbar/><Welcome/><Dock/>
//         <Terminal/>
//         <Safari/>
//       <Resume/>
//         <Finder/>
//         <Text/>
//         <Image/>
//         <Contact/>
//         <Home/>
//       <Photos/>
//         <Archive/>
//     </main>
//   );
// };
// export default App;

const App = () => {
  useEffect(() => {
    initTheme();
  }, []);
  return (
    <main>
      <GalaxyBackground />

      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
      <Archive />
      <Home />
    </main>
  );
};

export default App;
