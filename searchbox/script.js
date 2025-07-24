// Theme Toggle: Works with <html data-theme> and #theme-toggle button
document.addEventListener("DOMContentLoaded", function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const isDark = root.getAttribute("data-theme") === "dark";
      root.setAttribute("data-theme", isDark ? "light" : "dark");
    });
  }

  // Search Handling
  const searchBox = document.querySelector("#search input[type='search']");
  if (searchBox) {
    searchBox.addEventListener("keydown", function (e) {
      // Submit search on Enter
      if (e.key === "Enter") {
        e.preventDefault();
        handleSearchSubmit();
      }
      // Optional: Clear if Escape
      if (e.key === "Escape") {
        searchBox.value = "";
      }
    });
  }

  // Handles search submission (customize as needed)
  function handleSearchSubmit() {
    if (!searchBox) return;
    const query = searchBox.value.trim();
    if (!query) return;

    // Basic version: Google search in new tab
    // (Expand this for multi-engine support later)
    const searchURL = "https://www.google.com/search?q=" + encodeURIComponent(query);
    window.open(searchURL, "_blank");
    // Optional: Add history, info bar, etc. here.
  }
});

