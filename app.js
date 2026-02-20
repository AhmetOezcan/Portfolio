/* global tsParticles */

tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  background: { color: "transparent" },
  fpsLimit: 60,
  detectRetina: true,

  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      resize: true
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.35 } }
    }
  },

  particles: {
    number: { value: 70, density: { enable: true, area: 900 } },
    color: { value: "#93c5fd" },
    links: { enable: true, distance: 140, color: "#60a5fa", opacity: 0.25, width: 1 },
    move: { enable: true, speed: 1.1, outModes: { default: "out" } },
    opacity: { value: 0.6 },
    size: { value: { min: 1, max: 3 } }
  }
});