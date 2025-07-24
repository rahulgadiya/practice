
document.addEventListener("DOMContentLoaded", function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const isDark = root.getAttribute("data-theme") === "dark";
      root.setAttribute("data-theme", isDark ? "light" : "dark");
    });
  }

  class SearchHandler {
    constructor() {
      this.searchEngines = {
        ":g": { name: "Google", url: "https://www.google.com/search?q=", color: "#4285f4" },
        ":b": { name: "Bing", url: "https://www.bing.com/search?q=", color: "#0078d4" },
        ":e": { name: "Ecosia", url: "https://www.ecosia.org/search?q=", color: "#00a85a" },
        ":d": { name: "DuckDuckGo", url: "https://duckduckgo.com/?q=", color: "#de5833" },
        ":br": { name: "Brave Search", url: "https://search.brave.com/search?q=", color: "#fb542b" },
        ":p": { name: "Perplexity", url: "https://www.perplexity.ai/search?q=", color: "#20a4f0" },
      };

      this.defaultEngine = this.searchEngines[":g"]; 
      this.currentEngine = this.defaultEngine;

      this.searchBox = document.querySelector("#search input[type='search']");
      this.init();
    }

    init() {
      if (this.searchBox) {
        this.searchBox.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            this.handleSearchSubmit();
          }
          if (e.key === "Escape") {
            this.searchBox.value = "";
          }
        });
      }
    }

    handleSearchSubmit() {
      if (!this.searchBox) return;
      let query = this.searchBox.value.trim();
      if (!query) return;

      let selectedEngine = this.defaultEngine;
      let actualQuery = query;

      for (const macro in this.searchEngines) {
        if (query.startsWith(macro + " ")) {
          selectedEngine = this.searchEngines[macro];
          actualQuery = query.substring(macro.length + 1).trim(); 
          break;
        }
      }

      if (!actualQuery && selectedEngine === this.defaultEngine) {
          actualQuery = query;
      } else if (!actualQuery && selectedEngine !== this.defaultEngine) {
          console.warn(`No query provided after macro '${macro}'.`);
          return;
      }


      const searchURL = selectedEngine.url + encodeURIComponent(actualQuery);
      window.open(searchURL, "_blank");

    }
  }
  new SearchHandler();
});
