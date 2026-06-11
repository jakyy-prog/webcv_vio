/* ===================================================
   VIO ZAKI FIRMANSYAH — CV SCRIPTS
   =================================================== */

// ── YEAR ──────────────────────────────────────────
document.getElementById("year").textContent = new Date().getFullYear();

// ── NAVBAR SCROLL ─────────────────────────────────
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

// ── MOBILE NAV TOGGLE ─────────────────────────────
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close on link click
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ── TYPING ANIMATION ──────────────────────────────
const phrases = [
  "Informatics Engineering Student",
  "Node.js Developer",
  "Community Builder",
  "Problem Solver",
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById("typedText");

function type() {
  const current = phrases[phraseIndex];

  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex--);
  } else {
    typedEl.textContent = current.substring(0, charIndex++);
  }

  let delay = isDeleting ? 50 : 90;

  if (!isDeleting && charIndex === current.length + 1) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === -1) {
    isDeleting = false;
    charIndex = 0;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 400;
  }

  setTimeout(type, delay);
}

// Start after a small delay
setTimeout(type, 600);

// ── REVEAL ON SCROLL ──────────────────────────────
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealEls.forEach((el) => revealObserver.observe(el));

// ── SKILL BAR ANIMATION ───────────────────────────
const skillBars = document.querySelectorAll(".skill-bar");

const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute("data-width");
        bar.style.width = width + "%";
        barObserver.unobserve(bar);
      }
    });
  },
  { threshold: 0.4 },
);

skillBars.forEach((bar) => barObserver.observe(bar));

// ── ACTIVE NAV LINK ───────────────────────────────
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.id;
  });

  navItems.forEach((link) => {
    link.style.color = "";
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "var(--cyan)";
    }
  });
});

// ── SMOOTH SCROLL OFFSET ──────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});
