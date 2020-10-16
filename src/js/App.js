import { introAnim } from "./animations/introAnim";
import { scrollTo } from "./animations/scrollTo";
import { activeNavLink } from "./animations/activeNavLink";

import AOS from "aos";
import "aos/dist/aos.css";

window.addEventListener("load", () => {
  setTimeout(() => {
    function App() {
      introAnim();
      scrollTo();
      activeNavLink();

      AOS.init();
    }
    App();
  }, 1000);
});
