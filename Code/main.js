// Custom Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
  ring.style.left = mouseX + 'px';
  ring.style.top = mouseY + 'px';
});

// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
reveals.forEach(el => observer.observe(el));

// Animate stat numbers
function animateCount(el, target, suffix = '') {
  let start = 0;
  const duration = 1500;
  const step = timestamp => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.stat-num');
      nums[0] && animateCount({ textContent: '' }, 5, '+', nums[0]);
      statsObserver.unobserve(entry.target);
    }
  });
});
document.querySelector('.stats-bar') && statsObserver.observe(document.querySelector('.stats-bar'));

// Smooth cursor on interactive elements
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '12px';
    cursor.style.height = '12px';
  });
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
  }, 2500); // change every 2.5s (adjust as you like)
});