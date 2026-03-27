// ── PARTICLES ──
const isSmallScreen = window.matchMedia("(max-width: 640px)").matches;

tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  background: { color: "transparent" },
  fpsLimit: 60,
  detectRetina: true,
  interactivity: {
    events: {
      onHover: { enable: !isSmallScreen, mode: "grab" },
      resize: true,
    },
    modes: {
      grab: { distance: isSmallScreen ? 110 : 140, links: { opacity: 0.35 } },
    },
  },
  particles: {
    number: {
      value: isSmallScreen ? 38 : 70,
      density: { enable: true, area: isSmallScreen ? 700 : 900 },
    },
    color: { value: "#93c5fd" },
    links: {
      enable: true,
      distance: isSmallScreen ? 110 : 140,
      color: "#60a5fa",
      opacity: 0.25,
      width: 1,
    },
    move: {
      enable: true,
      speed: isSmallScreen ? 0.8 : 1.1,
      outModes: { default: "out" },
    },
    opacity: { value: 0.6 },
    size: { value: { min: 1, max: 3 } },
  },
}).then(() => {
  const canvas = document.querySelector("#tsparticles canvas");
  if (canvas) canvas.style.pointerEvents = "none";
});

// ── RESTART BUTTON ──
const devButton = document.getElementById("devButton");

const closedLabel = "&lt;<span class='name'>AhmetOezcan</span> /&gt;";
const openLabel =
  "&lt;<span class='name'>AhmetOezcan</span> " +
  "<span class='code-green'>onClick</span>={" +
  "<span class='code-green'>reload</span>} /&gt;";

let isOpen = false;
let isHovered = false;

function fadeSwap(newHtml) {
  devButton.classList.add("is-fading");

  // wait for half the fade, then swap text and fade back in
  setTimeout(() => {
    devButton.innerHTML = newHtml;
    devButton.classList.remove("is-fading");
  }, 300); //
}

function showOpen() {
  if (isOpen) return;
  fadeSwap(openLabel);
  isOpen = true;
}

function showClosed() {
  if (!isOpen) return;
  fadeSwap(closedLabel);
  isOpen = false;
}

// click still reloads
devButton.addEventListener("click", () => {
  location.reload();
});

// pause auto-animation when hovered, keep it open
devButton.addEventListener("mouseenter", () => {
  isHovered = true;
  showOpen();
});

devButton.addEventListener("mouseleave", () => {
  isHovered = false;
});

// auto open/close loop
window.addEventListener("load", () => {
  // start closed
  devButton.innerHTML = closedLabel;
  isOpen = false;

  setInterval(() => {
    if (isHovered) return; // don't toggle while hovered
    if (isOpen) {
      showClosed();
    } else {
      showOpen();
    }
  }, 1100); // change every 2.5s (adjust as you like)
});

// ── HERO NAME LETTER ANIMATION ──
window.addEventListener("DOMContentLoaded", () => {
  const heroName = document.querySelector(".hero-name");
  if (!heroName) return;

  const text = heroName.textContent.trim();
  const words = text.split(/\s+/);
  let letterIndex = 0;

  heroName.textContent = "";
  heroName.setAttribute("aria-label", text);

  words.forEach(word => {
    const wordSpan = document.createElement("span");
    wordSpan.className = "hero-word";

    [...word].forEach(char => {
      const span = document.createElement("span");
      span.className = "hero-letter";
      span.textContent = char;
      span.style.animationDelay = `${letterIndex * 0.08}s`;
      wordSpan.appendChild(span);
      letterIndex += 1;
    });

    heroName.appendChild(wordSpan);
  });
});
