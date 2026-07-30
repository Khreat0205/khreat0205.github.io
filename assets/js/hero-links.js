(function () {
  "use strict";

  const homePaths = new Set(["/", "/index.html"]);

  const links = [
    {
      label: "Email",
      href: "mailto:scientist0205@snu.ac.kr",
      icon: "fa-solid fa-envelope",
    },
    {
      label: "Scholar",
      href: "https://scholar.google.com/citations?user=L69WWTQAAAAJ",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      label: "GitHub",
      href: "https://github.com/khreat0205",
      icon: "fa-brands fa-github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kyeonghun-jeong-8bb573183",
      icon: "fa-brands fa-linkedin",
    },
  ];

  function isHomePage() {
    return homePaths.has(window.location.pathname);
  }

  function buildHeroLinks() {
    const nav = document.createElement("nav");
    nav.className = "hero-links";
    nav.setAttribute("aria-label", "Profile links");

    links.forEach(({ label, href, icon }) => {
      const anchor = document.createElement("a");
      anchor.className = "hero-link";
      anchor.href = href;

      const iconElement = document.createElement("i");
      iconElement.className = icon;
      iconElement.setAttribute("aria-hidden", "true");

      const labelElement = document.createElement("span");
      labelElement.textContent = label;

      anchor.append(iconElement, labelElement);

      if (!href.startsWith("mailto:")) {
        anchor.target = "_blank";
        anchor.rel = "external nofollow noopener";
      }

      nav.appendChild(anchor);
    });

    return nav;
  }

  function buildMobileAffiliation() {
    const affiliation = document.createElement("p");
    affiliation.className = "hero-affiliation";
    affiliation.innerHTML = [
      '<span data-lang="en">Seoul National University · Seoul, Republic of Korea</span>',
      '<span data-lang="ko" lang="ko">서울대학교 · 서울, 대한민국</span>',
    ].join("");
    return affiliation;
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (!isHomePage()) return;

    const header = document.querySelector(".post .post-header");
    const title = header?.querySelector(".post-title");
    if (!header || !title || header.querySelector(".hero-links")) return;

    const heroLinks = buildHeroLinks();
    title.insertAdjacentElement("afterend", heroLinks);
    heroLinks.insertAdjacentElement("afterend", buildMobileAffiliation());
  });
})();
