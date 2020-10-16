import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const activeNavLink = () => {
  const navLinks = document.querySelectorAll(".nav-link");

  function triggerScrollStart() {
    if (window.innerWidth > 768) {
      return "381";
    } else if (window.innerWidth <= 768 && window.innerWidth > 575) {
      return "311";
    } else {
      return "301";
    }
  }

  ScrollTrigger.create({
    trigger: ".home",
    end: `bottom ${window.innerWidth > 768 ? "190px" : "370px"}`,
    toggleClass: { targets: navLinks[0], className: "active" },
  });

  ScrollTrigger.create({
    trigger: ".projects",
    start: `top ${window.innerWidth > 768 ? "341px" : "371px"}`,
    end: `bottom ${window.innerWidth > 768 ? "180px" : "220px"}`,
    toggleClass: { targets: navLinks[1], className: "active" },
  });

  ScrollTrigger.create({
    trigger: ".contact",
    start: `top ${triggerScrollStart()}`,
    toggleClass: { targets: navLinks[2], className: "active" },
  });
};
