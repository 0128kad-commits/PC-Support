const resultData = {
  compact: {
    title: "あなたは軽量5-in-1タイプです",
    text: "選んだ条件から見ると、持ち運びやすさと最低限の端子を優先するタイプです。HDMI、USB-A、USB-C給電があれば、出先でも自宅でも困りにくくなります。",
    target: "#type-compact",
    slot: "usb-c-hub-compact",
    fallbackUrl: "https://search.rakuten.co.jp/search/mall/USB-C%E3%83%8F%E3%83%96+5-in-1+HDMI+PD/"
  },
  lan: {
    title: "あなたはLAN付き安定タイプです",
    text: "選んだ条件から見ると、オンライン会議や大きめのファイル転送が多いタイプです。有線LAN、HDMI、USB-A、USB-C給電を備えた7-in-1前後を優先します。",
    target: "#type-lan",
    slot: "usb-c-hub-lan",
    fallbackUrl: "https://search.rakuten.co.jp/search/mall/USB-C%E3%83%8F%E3%83%96+LAN+HDMI+PD/"
  },
  monitor: {
    title: "あなたは4Kモニター重視タイプです",
    text: "選んだ条件から見ると、外部モニターでの作業を優先するタイプです。4K画面を使うなら、HDMI 4K/60Hz対応の表記を最初に確認します。",
    target: "#type-monitor",
    slot: "usb-c-hub-monitor",
    fallbackUrl: "https://search.rakuten.co.jp/search/mall/USB-C%E3%83%8F%E3%83%96+4K+60Hz+HDMI+PD/"
  },
  desk: {
    title: "あなたは据え置き整理タイプです",
    text: "選んだ条件から見ると、机に置いたまま使い、配線をまとめたいタイプです。ポート数、給電、LAN、放熱を優先します。",
    target: "#type-desk",
    slot: "usb-c-hub-dock",
    fallbackUrl: "https://search.rakuten.co.jp/search/mall/USB-C%E3%83%89%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3+HDMI+LAN/"
  }
};

function scoreDiagnosis(form) {
  const scores = { compact: 0, lan: 0, monitor: 0, desk: 0 };
  const values = new FormData(form);

  for (const value of values.values()) {
    if (value === "portable") scores.compact += 2;
    if (value === "home") scores.desk += 2;
    if (value === "lan") scores.lan += 2;
    if (value === "wifi") scores.compact += 1;
    if (value === "4k60") scores.monitor += 2;
    if (value === "simple") scores.compact += 1;
    if (value === "many") scores.desk += 2;
    if (value === "few") scores.compact += 1;
  }

  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}

function updateRecommendation(type) {
  document.querySelectorAll("[data-recommendation-card]").forEach((card) => {
    card.classList.toggle("recommended", card.dataset.recommendationCard === type);
  });

  const recommendedArea = document.querySelector("[data-recommendation-result]");
  const data = resultData[type];
  if (!recommendedArea || !data) return;

  recommendedArea.innerHTML = `
    <strong>${data.title}</strong>
    <p>${data.text}</p>
  `;
}

function applyAffiliateLinks() {
  const links = window.HAKADORU_AFFILIATE_LINKS || {};

  document.querySelectorAll("[data-affiliate-slot]").forEach((element) => {
    const slot = element.getAttribute("data-affiliate-slot");
    const url = links[slot];

    if (typeof url !== "string" || url.trim() === "") return;

    element.href = url.trim();
    element.rel = "sponsored nofollow noopener";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyAffiliateLinks();

  const diagnosisForm = document.querySelector("[data-diagnosis]");
  if (!diagnosisForm) return;

  const result = document.querySelector("[data-result]");
  diagnosisForm.addEventListener("change", () => {
    const type = scoreDiagnosis(diagnosisForm);
    const data = resultData[type];
    result.innerHTML = `
      <strong>${data.title}</strong>
      <p>${data.text}</p>
    `;
    updateRecommendation(type);
    applyAffiliateLinks();
  });
});
