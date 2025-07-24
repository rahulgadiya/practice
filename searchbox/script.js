document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");

  // Auto-detect system theme on first load
  const userPref = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  if (!root.hasAttribute("data-theme")) {
    root.setAttribute("data-theme", userPref);
  }

  // Icon toggle
  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    root.setAttribute("data-theme", current === "dark" ? "light" : "dark");
  });
});

