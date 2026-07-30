(function () {
  "use strict";

  const storageKey = "khreat-site-language";
  const languages = ["en", "ko"];

  const koText = {
    about: "소개",
    About: "소개",
    publications: "논문",
    Publications: "논문",
    research: "연구",
    Research: "연구",
    "selected publications": "주요 논문",
    "Selected Publications": "주요 논문",
    CV: "이력서",
    "Academic CV.": "학술 이력서.",
    "Machine Learning for Single-Cell Analysis and Clinical Omics": "단일세포 분석과 임상 오믹스를 위한 머신러닝",
    "Peer-reviewed articles, preprints, and conference presentations.": "학술지 논문, 프리프린트, 학회 발표.",
    "machine learning methods for single-cell and translational biomedicine.": "단일세포 및 중개의학을 위한 머신러닝 방법론.",

    "Contact Information": "연락처",
    Name: "이름",
    "Professional Title": "전문 분야",
    Email: "이메일",
    "Bioinformatics and Machine Learning Researcher": "바이오인포매틱스 및 머신러닝 연구자",
    "Professional Summary": "연구 요약",
    "Bioinformatics researcher working on machine learning for single-cell omics and clinical multi-omics studies.": "단일세포 오믹스 알고리즘과 임상 멀티오믹스 연구를 수행하는 생물정보학 및 머신러닝 연구자입니다.",
    Experience: "경력",
    Education: "학력",
    "Conference Presentations": "학회 발표",
    Projects: "프로젝트",
    Awards: "수상",
    Skills: "기술",
    References: "추천인",
    "Seoul, Republic of Korea": "서울, 대한민국",
    "Bioinformatics Researcher, Cancer Research Institute": "생물정보학 연구원, 암연구소",
    "Bioinformatics Researcher, Biomedical Research Institute, Division of Clinical Bioinformatics": "생물정보학 연구원, 의생명연구원 임상생물정보학과",
    "Seoul National University Hospital": "서울대학교병원",
    "Advisor: Prof. Seock-Ah Im": "지도교수: 임석아 교수",
    "Advisor: Prof. Kwangsoo Kim": "지도교수: 김광수 교수",
    "Research interest: Bioinformatics": "연구 관심 분야: 생물정보학",
    "Advisors: Prof. Kwangsoo Kim and Prof. Jinwook Choi": "지도교수: 김광수 교수, 최진욱 교수",
    "Seoul National University": "서울대학교",
    "Interdisciplinary Program in Bioengineering": "협동과정 바이오엔지니어링 전공",
    "Korea University": "고려대학교",
    "Division of Life Sciences": "생명과학부",
    "Ph.D.": "박사과정",
    "B.S.": "학사",

    "AI-based Non-invasive Diagnosis System for Glomerular Diseases": "사구체 질환 비침습 AI 진단 시스템",
    "Developed a machine learning classifier for glomerular disease subtyping.": "사구체질환 아형 분류를 위한 머신러닝 분류기를 개발했습니다.",
    "Manuscript in preparation.": "논문 준비 중.",
    "COVID-19 Multi-omics Integration Analysis and Prognosis Prediction Model Development": "COVID-19 멀티오믹스 통합 분석 및 예후 예측 모델 개발",
    "Converted cell-cell interaction activity into sample-level CCI-GSVA scores for COVID-19 patient subtyping.": "세포 간 상호작용 활성을 샘플 수준 CCI-GSVA 점수로 변환하여 COVID-19 환자 아형 분석에 적용했습니다.",
    "Published in Scientific Reports.": "Scientific Reports 게재.",
    "Tumor Methylation as Predictive Biomarker for Immunotherapy": "면역치료 예측 바이오마커로서의 종양 메틸화 분석",
    "Analyzed pan-cancer DNA methylation and its association with tumor immunogenicity.": "범암 DNA 메틸화와 종양 면역원성의 연관성을 분석했습니다.",
    "Supported by Personalized Healthcare Innovation Medical Science Education Research Group.": "개인맞춤형 헬스케어 혁신 의과학 교육연구단 지원.",
    "Published in Cancer Immunology, Immunotherapy.": "Cancer Immunology, Immunotherapy 게재.",
    "FIRST-Cancer Panel Enhancement, Commercialization and Clinical Trial": "FIRST-Cancer 패널 고도화, 사업화 및 임상시험",
    "Developed a homologous repair deficiency score for breast cancer.": "유방암의 homologous repair deficiency 점수를 개발했습니다.",
    "Built a computational framework to identify defects in DNA damage response pathways.": "DNA 손상 반응 경로의 결함을 식별하는 계산 프레임워크를 구축했습니다.",
    "Anti-cancer Drug Resistance Kinome Profiling": "항암제 내성 키놈 프로파일링",
    "Developed kinome-targeting strategies for clinical application.": "임상 적용을 위한 키놈 표적 전략을 개발했습니다.",
    "Analyzed mechanisms of paclitaxel resistance in triple-negative breast cancer.": "삼중음성 유방암의 paclitaxel 내성 기전을 분석했습니다.",
    "Published in Journal of Breast Cancer.": "Journal of Breast Cancer 게재.",
    "Mechanism of CASQ2 Calcium-binding Protein in Breast Cancer Metastasis": "유방암 전이에서 CASQ2 칼슘 결합 단백질의 기전 연구",
    "Studied calcium signaling pathways associated with breast cancer metastasis.": "유방암 전이와 관련된 칼슘 신호전달 경로를 연구했습니다.",
    "Gold Medal, International Genetically Engineered Machine (iGEM)": "금메달, International Genetically Engineered Machine (iGEM)",
    "Creative Challenger Scholarships (CCP)": "Creative Challenger Scholarships (CCP)",
    "Future Leaders Development Program Scholarship": "Future Leaders Development Program Scholarship",
    "Computational Biology:": "계산생물학:",
    "Machine Learning:": "머신러닝:",
    "Programming:": "프로그래밍:",
    "Single-cell omics, NGS analysis, systems biology, bioinformatics": "단일세포 오믹스, NGS 분석, 시스템생물학, 생물정보학",
    "Weak supervision, multiple-instance learning, foundation-model adaptation, predictive modeling": "약지도학습, multiple-instance learning, 파운데이션 모델 적응, 예측 모델링",
    "Python, R, shell scripting": "Python, R, shell scripting",
    "Co-first author (equal contribution)": "공동 제1저자 (동등 기여)",
    "First author": "제1저자",
    "Preprint": "프리프린트",
    Method: "방법론",
    Collaborative: "협업연구",
    "Single-cell": "단일세포",
    "Regulatory genomics": "조절유전체",
    "Weak supervision": "약지도학습",
    Proteomics: "단백체",
    Kidney: "신장질환",
    "Foundation model": "파운데이션 모델",
    "Systems biology": "시스템생물학",
    Infection: "감염",
    Cancer: "암",
    Transcriptomics: "전사체",
    "Cell-cell interaction": "세포 간 상호작용",
    "Liquid biopsy": "액체생검",
    "Cancer genomics": "암 유전체",
    "Breast cancer": "유방암",
    "Multi-omics": "멀티오믹스",
    "Drug resistance": "약제 내성",
    Diagnostics: "진단",
    HPV: "HPV",
    miRNA: "miRNA",
  };

  const enText = {
    "selected publications": "Selected Publications",
  };

  function normalizeText(value) {
    return value.replace(/\s+/g, " ").trim();
  }

  function translatedValue(original, language) {
    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];
    const normalized = normalizeText(original);
    if (language === "en") {
      const english = enText[normalized];
      return english ? `${leading}${english}${trailing}` : original;
    }
    const translated = koText[normalized];
    return translated ? `${leading}${translated}${trailing}` : original;
  }

  function collectTextNodes(root) {
    const nodes = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!normalizeText(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.closest("script, style, noscript, textarea, input, select, option, code, pre")) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }
    return nodes;
  }

  function applyTextTranslations(language) {
    collectTextNodes(document.body).forEach((node) => {
      if (!node.__siteLanguageOriginal) {
        node.__siteLanguageOriginal = node.nodeValue;
      }
      node.nodeValue = translatedValue(node.__siteLanguageOriginal, language);
    });
  }

  function currentLanguage() {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (languages.includes(saved)) return saved;
    } catch (error) {
      // Ignore storage failures in private browsing modes.
    }
    return "en";
  }

  function saveLanguage(language) {
    try {
      window.localStorage.setItem(storageKey, language);
    } catch (error) {
      // Ignore storage failures in private browsing modes.
    }
  }

  function updateButtons(language) {
    document.querySelectorAll("[data-language-button]").forEach((button) => {
      const isActive = button.dataset.languageButton === language;
      button.setAttribute("aria-pressed", String(isActive));
      button.classList.toggle("active", isActive);
    });
  }

  function setLanguage(language) {
    const nextLanguage = languages.includes(language) ? language : "en";
    document.documentElement.dataset.siteLang = nextLanguage;
    document.documentElement.lang = nextLanguage;
    applyTextTranslations(nextLanguage);
    updateButtons(nextLanguage);
    saveLanguage(nextLanguage);
  }

  function injectSwitcher() {
    const navList = document.querySelector("#navbar .navbar-nav");
    if (!navList || navList.querySelector(".language-switcher")) return;

    const item = document.createElement("li");
    item.className = "nav-item language-switcher";
    item.innerHTML = [
      '<button type="button" class="language-button" data-language-button="en" aria-label="Switch to English">ENG</button>',
      '<button type="button" class="language-button" data-language-button="ko" aria-label="한국어로 보기">KOR</button>',
    ].join("");

    const searchItem = navList.querySelector("#search-toggle")?.closest("li");
    navList.insertBefore(item, searchItem || null);

    item.querySelectorAll("[data-language-button]").forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.dataset.languageButton));
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    injectSwitcher();
    setLanguage(currentLanguage());
  });
})();
