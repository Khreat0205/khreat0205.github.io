(function () {
  "use strict";

  const homePaths = new Set(["/", "/index.html"]);

  const links = [
    {
      label: "Email",
      href: "mailto:scientist0205@snu.ac.kr",
    },
    {
      label: "Scholar",
      href: "https://scholar.google.com/citations?user=L69WWTQAAAAJ",
    },
    {
      label: "GitHub",
      href: "https://github.com/khreat0205",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kyeonghun-jeong-8bb573183",
    },
  ];

  function isHomePage() {
    return homePaths.has(window.location.pathname);
  }

  function buildHeroLinks() {
    const nav = document.createElement("nav");
    nav.className = "hero-links";
    nav.setAttribute("aria-label", "Profile links");

    links.forEach(({ label, href }) => {
      const anchor = document.createElement("a");
      anchor.className = "hero-link";
      anchor.href = href;
      anchor.textContent = label;

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
