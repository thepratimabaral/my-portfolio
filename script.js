// Smooth scroll for in-page navigation
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#" || targetId.length === 1) return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    }),
  );
}

// Theme toggle (dark / light)
const themeToggle = document.querySelector(".theme-toggle");

const setTheme = (mode) => {
  if (mode === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
  window.localStorage.setItem("theme", mode);
};

if (themeToggle) {
  // Initialise theme from preference / storage
  const saved = window.localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    setTheme(saved);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    setTheme("light");
  }

  themeToggle.addEventListener("click", () => {
    const next = document.body.classList.contains("light") ? "dark" : "light";
    setTheme(next);
  });
}

// Dynamic year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

