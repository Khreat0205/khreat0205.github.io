(function () {
  "use strict";

  const koreanPaths = new Set(["/kor", "/kor/", "/kor/index.html"]);

  function buildLanguageLink(label, href, isActive, language) {
    const link = document.createElement("a");
    link.className = "language-button";
    link.href = href;
    link.hreflang = language;
    link.lang = language;
    link.textContent = label;
    link.setAttribute("aria-label", language === "ko" ? "한국어 페이지로 이동" : "View the English page");

    if (isActive) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }

    return link;
  }

  function injectSwitcher() {
    const navList = document.querySelector("#navbar .navbar-nav");
    if (!navList || navList.querySelector(".language-switcher")) return;

    const isKoreanPage = koreanPaths.has(window.location.pathname);
    const item = document.createElement("li");
    item.className = "nav-item language-switcher";
    item.setAttribute("aria-label", "Language");
    item.append(buildLanguageLink("ENG", "/", !isKoreanPage, "en"), buildLanguageLink("KOR", "/kor/", isKoreanPage, "ko"));

    const searchItem = navList.querySelector("#search-toggle")?.closest("li");
    navList.insertBefore(item, searchItem || null);
  }

  document.addEventListener("DOMContentLoaded", injectSwitcher);
})();
