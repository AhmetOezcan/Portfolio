/* global tsParticles */

tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  background: { color: "transparent" },
  fpsLimit: 60,
  detectRetina: true,

  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      resize: true,
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.35 } },
    },
  },

  particles: {
    number: { value: 70, density: { enable: true, area: 900 } },
    color: { value: "#93c5fd" },
    links: {
      enable: true,
      distance: 140,
      color: "#60a5fa",
      opacity: 0.25,
      width: 1,
    },
    move: { enable: true, speed: 1.1, outModes: { default: "out" } },
    opacity: { value: 0.6 },
    size: { value: { min: 1, max: 3 } },
  },
});

//Restart Button

const devButton = document.getElementById("devButton");

devButton.addEventListener("mouseenter", () => {
  devButton.innerHTML =
    "&lt;<span class='name'>AhmetOezcan</span> " +
    "<span class='code-green'>onClick</span>={" +
    "<span class='code-green'>reload</span>} /&gt;";
});

devButton.addEventListener("mouseleave", () => {
  devButton.innerHTML = "&lt;<span class='name'>AhmetOezcan</span> /&gt;";
});

devButton.addEventListener("click", () => {
  location.reload();
});

//About section

const arrows = document.querySelectorAll(".about-arrow");

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const box = arrow.closest(".about-box");
    const text = box.querySelector(".about-text");

    const isHidden = text.classList.toggle("is-hidden");

    arrow.setAttribute("aria-expanded", String(!isHidden));
    arrow.textContent = isHidden ? "⬇" : "⬆";
  });
});
