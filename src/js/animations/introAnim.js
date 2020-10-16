import { gsap } from "gsap";

export const introAnim = () => {
  const introTL = gsap.timeline();
  const overlayWidth = window.innerWidth > 768 ? "0" : "100%";
  const overlayHeight = window.innerWidth > 768 ? "100%" : "0";

  function showHiEmoji() {
    const hi = document.querySelector(".hi");

    setTimeout(() => {
      hi.classList.add("active");

      setTimeout(() => {
        hi.classList.remove("active");
      }, 1500);
    }, 4200);
  }

  introTL
    .to(".loader", {
      stagger: 0.2,
      opacity: 0,
      display: "none",
    })
    .to(
      ".loader-container",
      {
        duration: 2.5,
        width: overlayWidth,
        height: overlayHeight,
        ease: "bounce.inOut",
      },
      "-=1.2"
    )
    .to(
      "body",
      {
        overflowY: "scroll",
      },
      "-=0.4"
    )
    .to(".nav-item", {
      duration: 0.4,
      stagger: 0.2,
      scale: 1,
      opacity: 1,
      ease: "back",
    })
    .from(
      ".about",
      { duration: 1, scale: 0, opacity: 0, ease: "back" },
      "-=1.2"
    )
    .fromTo(
      ".scroll-down-btn",
      {
        scale: 0,
      },
      {
        duration: 0.4,
        scale: 1,
        ease: "back",
      },
      "-=0.2"
    )
    .to(
      ".scroll-down-btn",
      {
        duration: 0.8,
        translateY: "-8px",
        repeat: -1,
        yoyo: true,
        ease: "power2.easeInOut",
      },
      "-=0.5"
    )
    .fromTo(
      ".social a",
      {
        scale: 0,
        opacity: 0,
      },
      {
        duration: 0.4,
        stagger: 0.1,
        scale: 1,
        opacity: 1,
        ease: "back",
      },
      "-=0.5"
    )

    .fromTo(
      ".hi",
      {
        display: "none",
        y: "-100vh",
      },
      {
        duration: 1,
        display: "block",
        y: 0,
        stagger: 0.5,
        ease: "bounce",
        rotate: "-35deg",
      },
      "-=0.5",
      showHiEmoji()
    );
};
