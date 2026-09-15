(function () {
  "use strict";

  const storageKey = "khreat-profile-language";
  const languages = new Set(["en", "ko"]);
  const institutionTranslations = [
    ["Seoul National University Hospital", "서울대학교병원"],
    ["Seoul National University", "서울대학교"],
    ["Korea University", "고려대학교"],
  ];

  function textNodes(root) {
    if (!root) return [];

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (node.parentElement?.closest("script, style, noscript")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    return nodes;
  }

  function originalText(node) {
    if (node.profileLanguageOriginal === undefined) {
      node.profileLanguageOriginal = node.nodeValue;
    }
    return node.profileLanguageOriginal;
  }

  function translateName(language) {
    const profileNameRoots = [
      ...document.querySelectorAll(".navbar-brand.title, .post-header .post-title, [data-profile-name]"),
      document.querySelector(".cv .card"),
    ].filter(Boolean);

    profileNameRoots.forEach((root) => {
      textNodes(root).forEach((node) => {
        const original = originalText(node);
        if (original.trim() === "Kyeonghun Jeong") {
          node.nodeValue = language === "ko" ? original.replace("Kyeonghun Jeong", "정경훈") : original;
        }
      });
    });
  }

  function translateCvInstitutions(language) {
    textNodes(document.querySelector(".cv")).forEach((node) => {
      const original = originalText(node);
      if (!institutionTranslations.some(([english]) => original.includes(english))) return;

      node.nodeValue =
        language === "ko" ? institutionTranslations.reduce((text, [english, korean]) => text.replaceAll(english, korean), original) : original;
    });
  }

  function updateButtons(language) {
    document.querySelectorAll(".language-button").forEach((button) => {
      const isActive = button.dataset.language === language;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function setLanguage(language) {
    const nextLanguage = languages.has(language) ? language : "en";
    document.documentElement.dataset.profileLang = nextLanguage;
    translateName(nextLanguage);
    translateCvInstitutions(nextLanguage);
    updateButtons(nextLanguage);
    sessionStorage.setItem(storageKey, nextLanguage);
  }

  function savedLanguage() {
    const stored = sessionStorage.getItem(storageKey);
    if (languages.has(stored)) return stored;
    return window.location.pathname === "/kor/" ? "ko" : "en";
  }

  function buildLanguageButton(label, language) {
    const button = document.createElement("button");
    button.className = "language-button";
    button.type = "button";
    button.dataset.language = language;
    button.textContent = label;
    button.setAttribute("aria-label", language === "ko" ? "이름과 CV 소속을 한국어로 표시" : "Show the name and CV affiliations in English");
    button.addEventListener("click", () => setLanguage(language));
    return button;
  }

  function injectSwitcher() {
    const navList = document.querySelector("#navbar .navbar-nav");
    if (!navList || navList.querySelector(".language-switcher")) return;

    const item = document.createElement("li");
    item.className = "nav-item language-switcher";
    item.setAttribute("aria-label", "Language");
    item.append(buildLanguageButton("ENG", "en"), buildLanguageButton("KOR", "ko"));

    const searchItem = navList.querySelector("#search-toggle")?.closest("li");
    navList.insertBefore(item, searchItem || null);
    setLanguage(savedLanguage());
  }

  document.addEventListener("DOMContentLoaded", injectSwitcher);
})();
