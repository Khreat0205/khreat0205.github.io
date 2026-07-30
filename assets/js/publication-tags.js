(function () {
  "use strict";

  const abbrByKey = {
    jeong2026sctell: "Mobile DNA",
    jeong2026scmild: "iScience",
    oh2026glomerularproteome: "JASN",
    kim2026scunify: "bioRxiv",
    han2026persister: "bioRxiv",
    jeong2025scdstl: "RECOMB",
    bae2023hypoxia: "Medicines",
    jeong2023covid: "Sci. Rep.",
    kim2023cfdna: "CRT",
    kim2023tp53: "Hum. Genomics",
    park2021methylation: "CII",
    min2020hrd: "Sci. Rep.",
    hur2020pp1h: "JBC",
    moon2019genefinder: "Arch. Virol.",
    hong2019mirna: "Cancer Res.",
  };

  function normalizeTag(tag) {
    return tag.replace(/\s+/g, " ").trim();
  }

  function slugifyTag(tag) {
    return normalizeTag(tag)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function extractField(bibtex, fieldName) {
    const pattern = new RegExp(`${fieldName}\\s*=\\s*\\{([^}]*)\\}`, "i");
    const match = bibtex.match(pattern);
    return match ? normalizeTag(match[1]) : "";
  }

  function extractKeywords(bibtex) {
    const match = bibtex.match(/(?:keywords|tags)\s*=\s*\{([^}]*)\}/i);
    if (!match) return [];
    return match[1]
      .split(/[,;]+/)
      .map(normalizeTag)
      .filter(Boolean);
  }

  function buildTagList(tags) {
    const wrapper = document.createElement("div");
    wrapper.className = "publication-tags";
    wrapper.setAttribute("aria-label", "Publication tags");

    tags.forEach((tag) => {
      const pill = document.createElement("span");
      pill.className = `publication-tag publication-tag-${slugifyTag(tag)}`;
      pill.textContent = tag;
      wrapper.appendChild(pill);
    });

    return wrapper;
  }

  function publicationUrlFromBibtex(bibtex) {
    const url = extractField(bibtex, "url");
    if (url) return url;

    const doi = extractField(bibtex, "doi");
    if (doi) return `https://doi.org/${doi}`;

    return "";
  }

  function applyPublicationLink(entry, bibtex) {
    const title = entry.querySelector(".title");
    if (!title || title.querySelector("a")) return;

    const url = publicationUrlFromBibtex(bibtex);
    if (!url) return;

    const link = document.createElement("a");
    link.className = "publication-title-link";
    link.href = url;
    link.target = "_blank";
    link.rel = "external nofollow noopener";
    link.textContent = title.textContent.trim();
    link.setAttribute("aria-label", `${link.textContent} 논문 링크 열기`);

    title.textContent = "";
    title.appendChild(link);
  }

  function applyAbbreviation(entry, abbr) {
    if (!abbr || entry.querySelector(".publication-abbr")) return;

    const row = entry.querySelector(".row");
    if (!row) return;

    const badge = document.createElement("div");
    badge.className = "publication-abbr";
    badge.textContent = abbr;
    row.insertBefore(badge, row.firstElementChild);
  }

  function applyPublicationEnhancements(entry) {
    const bibtexCode = entry.querySelector(".bibtex code");
    if (!bibtexCode) return;

    const bibtex = bibtexCode.textContent || "";
    const entryKey = entry.querySelector("[id]")?.id || "";
    applyAbbreviation(entry, extractField(bibtex, "abbr") || abbrByKey[entryKey]);
    applyPublicationLink(entry, bibtex);

    if (entry.querySelector(".publication-tags")) return;

    const tags = extractKeywords(bibtex);
    if (!tags.length) return;

    const author = entry.querySelector(".author");
    const title = entry.querySelector(".title");
    const anchor = author || title;
    if (!anchor) return;

    anchor.insertAdjacentElement("afterend", buildTagList(tags));
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".publications ol.bibliography > li").forEach(applyPublicationEnhancements);
  });
})();
