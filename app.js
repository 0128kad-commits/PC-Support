const resultSets = {
  "usb-c-hub": {
    compact: {
      title: "あなたは軽量5-in-1タイプです",
      text: "選んだ条件から見ると、持ち運びやすさと最低限の端子を優先するタイプです。HDMI、USB-A、USB-C給電があれば、出先でも自宅でも困りにくくなります。"
    },
    lan: {
      title: "あなたはLAN付き安定タイプです",
      text: "選んだ条件から見ると、オンライン会議や大きめのファイル転送が多いタイプです。有線LAN、HDMI、USB-A、USB-C給電を備えた7-in-1前後を優先します。"
    },
    monitor: {
      title: "あなたは4Kモニター重視タイプです",
      text: "選んだ条件から見ると、外部モニターでの作業を優先するタイプです。4K画面を使うなら、HDMI 4K/60Hz対応の表記を最初に確認します。"
    },
    desk: {
      title: "あなたは据え置き整理タイプです",
      text: "選んだ条件から見ると、机に置いたまま使い、配線をまとめたいタイプです。ポート数、給電、LAN、放熱を優先します。"
    }
  },
  "mobile-monitor": {
    "monitor-light": {
      title: "あなたは軽量モバイルタイプです",
      text: "選んだ条件から見ると、外出先でも広げやすい軽量タイプが合いやすいです。14インチ前後、薄さ、重さ、カバー形状を優先します。"
    },
    "monitor-standard": {
      title: "あなたは15.6インチ標準タイプです",
      text: "選んだ条件から見ると、自宅や固定席で見やすさを優先するタイプです。15.6インチ前後のフルHDを軸にすると選びやすくなります。"
    },
    "monitor-usbc": {
      title: "あなたはUSB-C一本接続タイプです",
      text: "選んだ条件から見ると、配線を減らしてすぐ使えるタイプが合いやすいです。PC側のUSB-Cが映像出力に対応しているかを先に確認します。"
    },
    "monitor-game": {
      title: "あなたはゲーム兼用タイプです",
      text: "選んだ条件から見ると、仕事だけでなくゲーム機にも使えるタイプが合いやすいです。HDMI入力、電源の取り方、リフレッシュレートを確認します。"
    }
  },
  "trackball": {
    "trackball-thumb": {
      title: "あなたは親指型トラックボールタイプです",
      text: "選んだ条件から見ると、普通のマウスに近い感覚で始めやすいタイプです。初めてなら親指型、標準サイズ、無線対応を軸にすると選びやすくなります。"
    },
    "trackball-finger": {
      title: "あなたは人差し指・中指型タイプです",
      text: "選んだ条件から見ると、指先で細かく操作したいタイプです。慣れる時間は必要ですが、カーソル操作のしやすさを重視する人に向きます。"
    },
    "trackball-compact": {
      title: "あなたは小型・省スペースタイプです",
      text: "選んだ条件から見ると、机の狭さや持ち運びやすさを優先するタイプです。小型、軽量、無線対応を中心に確認します。"
    },
    "trackball-buttons": {
      title: "あなたは多ボタン・作業効率タイプです",
      text: "選んだ条件から見ると、戻る、進む、ショートカットなどを使って作業を速くしたいタイプです。ボタン数と割り当て機能を確認します。"
    }
  },
  "monitor-light": {
    "desk-light-basic": {
      title: "あなたは標準バーライトタイプです",
      text: "選んだ条件から見ると、まず失敗しにくい基本型が合いやすいです。非対称配光、対応モニター厚、明るさ調整を中心に確認します。"
    },
    "desk-light-remote": {
      title: "あなたはリモコン・ダイヤル付きタイプです",
      text: "選んだ条件から見ると、作業中に明るさや色を手元で変えたいタイプです。リモコンやダイヤルの置き場所、操作しやすさを確認します。"
    },
    "desk-light-wide": {
      title: "あなたはワイド照射タイプです",
      text: "選んだ条件から見ると、キーボードや資料まで広く照らしたいタイプです。ライトの長さ、照らせる幅、机の奥行きを確認します。"
    },
    "desk-light-auto": {
      title: "あなたは自動調光・高機能タイプです",
      text: "選んだ条件から見ると、調整の手間を減らして快適に使いたいタイプです。自動調光、色温度調整、反射しにくい配光を確認します。"
    }
  },
  "laptop-stand": {
    "stand-fixed": {
      title: "あなたは据え置きアルミタイプです",
      text: "選んだ条件から見ると、自宅や固定席で安定して使うタイプが合いやすいです。台座の広さ、耐荷重、滑り止めを中心に確認します。"
    },
    "stand-adjustable": {
      title: "あなたは高さ・角度調整タイプです",
      text: "選んだ条件から見ると、目線の高さをしっかり合わせたいタイプです。高く上げる場合は外部キーボードとマウスを前提に考えます。"
    },
    "stand-portable": {
      title: "あなたは折りたたみ軽量タイプです",
      text: "選んだ条件から見ると、外出先でも使いやすい携帯タイプが合いやすいです。重さ、収納サイズ、組み立てやすさを確認します。"
    },
    "stand-cooling": {
      title: "あなたは放熱・冷却重視タイプです",
      text: "選んだ条件から見ると、長時間作業や発熱対策を重視するタイプです。底面の通気、アルミ素材、ファンの有無を確認します。"
    }
  },
  "monitor-arm": {
    "arm-single": {
      title: "あなたはシングル標準タイプです",
      text: "選んだ条件から見ると、1画面をすっきり浮かせる標準タイプが合いやすいです。対応重量、VESA、机の厚みを確認します。"
    },
    "arm-dual": {
      title: "あなたはデュアルモニタータイプです",
      text: "選んだ条件から見ると、2画面を横並びで整えるタイプが合いやすいです。合計重量、横幅、机の固定条件を確認します。"
    },
    "arm-heavy": {
      title: "あなたは高耐荷重タイプです",
      text: "選んだ条件から見ると、大型・重めのモニターを安定して支えるタイプが合いやすいです。対応重量に余裕を持たせて選びます。"
    },
    "arm-wall": {
      title: "あなたは壁際・省スペースタイプです",
      text: "選んだ条件から見ると、机の奥行きや壁との距離を優先するタイプです。アームをたたんだ時の奥行きと可動範囲を確認します。"
    }
  }
};

function scoreUsbHub(values) {
  const scores = { compact: 0, lan: 0, monitor: 0, desk: 0 };

  for (const value of values) {
    if (value === "portable") scores.compact += 2;
    if (value === "home") scores.desk += 2;
    if (value === "lan") scores.lan += 2;
    if (value === "wifi") scores.compact += 1;
    if (value === "4k60") scores.monitor += 2;
    if (value === "simple") scores.compact += 1;
    if (value === "many") scores.desk += 2;
    if (value === "few") scores.compact += 1;
  }

  return scores;
}

function scoreMobileMonitor(values) {
  const scores = {
    "monitor-light": 0,
    "monitor-standard": 0,
    "monitor-usbc": 0,
    "monitor-game": 0
  };

  for (const value of values) {
    if (value === "carry") {
      scores["monitor-light"] += 2;
      scores["monitor-usbc"] += 1;
    }
    if (value === "home-monitor") scores["monitor-standard"] += 2;
    if (value === "laptop") {
      scores["monitor-standard"] += 1;
      scores["monitor-usbc"] += 1;
    }
    if (value === "game") scores["monitor-game"] += 3;
    if (value === "single-cable") {
      scores["monitor-usbc"] += 3;
      scores["monitor-light"] += 1;
    }
    if (value === "hdmi-ok") {
      scores["monitor-standard"] += 1;
      scores["monitor-game"] += 1;
    }
    if (value === "light") scores["monitor-light"] += 2;
    if (value === "large") {
      scores["monitor-standard"] += 2;
      scores["monitor-game"] += 1;
    }
  }

  return scores;
}

function scoreTrackball(values) {
  const scores = {
    "trackball-thumb": 0,
    "trackball-finger": 0,
    "trackball-compact": 0,
    "trackball-buttons": 0
  };

  for (const value of values) {
    if (value === "thumb") scores["trackball-thumb"] += 3;
    if (value === "finger") scores["trackball-finger"] += 3;
    if (value === "compact") scores["trackball-compact"] += 3;
    if (value === "standard") {
      scores["trackball-thumb"] += 1;
      scores["trackball-finger"] += 1;
    }
    if (value === "wireless") {
      scores["trackball-thumb"] += 1;
      scores["trackball-compact"] += 1;
    }
    if (value === "wired") scores["trackball-finger"] += 1;
    if (value === "easy") scores["trackball-thumb"] += 2;
    if (value === "buttons") scores["trackball-buttons"] += 3;
  }

  return scores;
}

function scoreMonitorLight(values) {
  const scores = {
    "desk-light-basic": 0,
    "desk-light-remote": 0,
    "desk-light-wide": 0,
    "desk-light-auto": 0
  };

  for (const value of values) {
    if (value === "desk-work") {
      scores["desk-light-basic"] += 1;
      scores["desk-light-wide"] += 2;
    }
    if (value === "night") {
      scores["desk-light-auto"] += 2;
      scores["desk-light-remote"] += 1;
    }
    if (value === "standard-screen") scores["desk-light-basic"] += 2;
    if (value === "thin-curve") scores["desk-light-auto"] += 2;
    if (value === "simple-control") scores["desk-light-basic"] += 2;
    if (value === "remote-control") scores["desk-light-remote"] += 3;
    if (value === "basic") scores["desk-light-basic"] += 2;
    if (value === "auto") scores["desk-light-auto"] += 3;
  }

  return scores;
}

function scoreLaptopStand(values) {
  const scores = {
    "stand-fixed": 0,
    "stand-adjustable": 0,
    "stand-portable": 0,
    "stand-cooling": 0
  };

  for (const value of values) {
    if (value === "fixed-desk") scores["stand-fixed"] += 2;
    if (value === "carry-stand") scores["stand-portable"] += 3;
    if (value === "external") scores["stand-adjustable"] += 2;
    if (value === "built-in") {
      scores["stand-fixed"] += 1;
      scores["stand-portable"] += 1;
    }
    if (value === "height") scores["stand-adjustable"] += 3;
    if (value === "stability") scores["stand-fixed"] += 3;
    if (value === "normal") scores["stand-fixed"] += 1;
    if (value === "hot") scores["stand-cooling"] += 3;
  }

  return scores;
}

function scoreMonitorArm(values) {
  const scores = {
    "arm-single": 0,
    "arm-dual": 0,
    "arm-heavy": 0,
    "arm-wall": 0
  };

  for (const value of values) {
    if (value === "single") scores["arm-single"] += 2;
    if (value === "dual") scores["arm-dual"] += 3;
    if (value === "standard-monitor") scores["arm-single"] += 2;
    if (value === "heavy-monitor") scores["arm-heavy"] += 3;
    if (value === "open-back") scores["arm-single"] += 1;
    if (value === "wall-close") scores["arm-wall"] += 3;
    if (value === "move-often") scores["arm-single"] += 1;
    if (value === "stable-arm") {
      scores["arm-heavy"] += 1;
      scores["arm-wall"] += 1;
    }
  }

  return scores;
}

function scoreDiagnosis(form, mode) {
  const values = new FormData(form);
  const selectedValues = Array.from(values.values());
  let scores = scoreUsbHub(selectedValues);

  if (mode === "mobile-monitor") scores = scoreMobileMonitor(selectedValues);
  if (mode === "trackball") scores = scoreTrackball(selectedValues);
  if (mode === "monitor-light") scores = scoreMonitorLight(selectedValues);
  if (mode === "laptop-stand") scores = scoreLaptopStand(selectedValues);
  if (mode === "monitor-arm") scores = scoreMonitorArm(selectedValues);

  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}

function updateRecommendation(type, dataSet) {
  document.querySelectorAll("[data-recommendation-card]").forEach((card) => {
    card.classList.toggle("recommended", card.dataset.recommendationCard === type);
  });

  const recommendedArea = document.querySelector("[data-recommendation-result]");
  const data = dataSet[type];
  if (!recommendedArea || !data) return;

  recommendedArea.innerHTML = `
    <strong>${data.title}</strong>
    <p>${data.text}</p>
  `;
}

function getAffiliateHtml(value) {
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed.startsWith("<") ? trimmed : "";
  }

  if (value && typeof value === "object" && typeof value.html === "string") {
    return value.html.trim();
  }

  return "";
}

function getAffiliateUrl(value) {
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed.startsWith("<") ? "" : trimmed;
  }

  if (value && typeof value === "object" && typeof value.url === "string") {
    return value.url.trim();
  }

  return "";
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getSafeUrl(value) {
  const trimmed = value.trim();
  return /^javascript:/i.test(trimmed) ? "" : trimmed;
}

function getRakutenThumbnailFallback(imageUrl) {
  try {
    const parsedUrl = new URL(imageUrl);
    return getSafeUrl(parsedUrl.searchParams.get("pc") || "");
  } catch (error) {
    return "";
  }
}

function attachAffiliateImageFallbacks(root) {
  root.querySelectorAll("img[data-fallback-src]").forEach((image) => {
    image.addEventListener("error", () => {
      const fallbackSrc = image.getAttribute("data-fallback-src");
      if (!fallbackSrc || image.src === fallbackSrc) return;

      image.src = fallbackSrc;
      image.removeAttribute("data-fallback-src");
    }, { once: true });
  });
}

function buildAffiliateCreative(html) {
  const template = document.createElement("template");
  template.innerHTML = html;

  const anchors = Array.from(template.content.querySelectorAll("a[href]"));
  const titleLink = anchors
    .filter((anchor) => anchor.textContent.trim().length > 0)
    .sort((a, b) => b.textContent.trim().length - a.textContent.trim().length)[0];
  const firstLink = anchors[0];
  const linkUrl = getSafeUrl((titleLink || firstLink)?.getAttribute("href") || "");
  const productTitle = (titleLink?.textContent || "参考商品を見る").replace(/\s+/g, " ").trim();
  const productImage = Array.from(template.content.querySelectorAll("img[src]"))
    .find((image) => !image.getAttribute("src").includes("makelink/rl.svg"));
  const imageUrl = getSafeUrl(productImage?.getAttribute("src") || "");
  const fallbackImageUrl = imageUrl ? getRakutenThumbnailFallback(imageUrl) : "";
  const priceMatch = template.content.textContent.replace(/\s+/g, " ").match(/価格：[^()]+(?:税込|円|送料無料)?/);
  const priceText = priceMatch ? priceMatch[0].trim() : "";

  if (!linkUrl) return "";

  return `
    <a class="affiliate-product" href="${escapeHtml(linkUrl)}" target="_blank" rel="sponsored nofollow noopener">
      ${imageUrl ? `<span class="affiliate-image"><img src="${escapeHtml(imageUrl)}" ${fallbackImageUrl ? `data-fallback-src="${escapeHtml(fallbackImageUrl)}"` : ""} alt="" loading="lazy" decoding="async"></span>` : ""}
      <span class="affiliate-copy">
        <strong>${escapeHtml(productTitle)}</strong>
        ${priceText ? `<span class="affiliate-price">${escapeHtml(priceText)}</span>` : ""}
        <span class="affiliate-cta">楽天で見る</span>
      </span>
    </a>
  `;
}

function sanitizeAffiliateHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html;

  template.content.querySelectorAll("script, style, iframe, object, embed, form, input, button").forEach((node) => {
    node.remove();
  });

  template.content.querySelectorAll("*").forEach((node) => {
    Array.from(node.attributes).forEach((attribute) => {
      const name = attribute.name.toLowerCase();
      const value = attribute.value.trim();

      if (name.startsWith("on")) node.removeAttribute(attribute.name);
      if ((name === "href" || name === "src") && /^javascript:/i.test(value)) {
        node.removeAttribute(attribute.name);
      }
    });

    if (node.tagName === "A") {
      node.target = "_blank";
      node.rel = "sponsored nofollow noopener";
    }

    if (node.tagName === "IMG") {
      node.loading = "lazy";
      node.decoding = "async";
      if (!node.alt) node.alt = "参考商品";
    }
  });

  return template.innerHTML.trim();
}

function applyAffiliateLinks() {
  const links = window.HAKADORU_AFFILIATE_LINKS || {};

  document.querySelectorAll("[data-affiliate-slot]").forEach((element) => {
    const slot = element.getAttribute("data-affiliate-slot");
    const value = links[slot];
    const html = getAffiliateHtml(value);
    const url = getAffiliateUrl(value);

    if (html) {
      const wrapper = element.classList.contains("affiliate-creative")
        ? element
        : document.createElement("div");

      wrapper.className = "affiliate-creative";
      wrapper.setAttribute("data-affiliate-slot", slot);
      wrapper.innerHTML = buildAffiliateCreative(html) || sanitizeAffiliateHtml(html);
      attachAffiliateImageFallbacks(wrapper);

      if (wrapper !== element) element.replaceWith(wrapper);
      return;
    }

    if (url === "") return;

    if (element.tagName === "A") {
      element.href = url;
      element.rel = "sponsored nofollow noopener";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyAffiliateLinks();

  const diagnosisForm = document.querySelector("[data-diagnosis]");
  if (!diagnosisForm) return;

  const result = document.querySelector("[data-result]");
  const mode = diagnosisForm.dataset.diagnosis || "usb-c-hub";
  const dataSet = resultSets[mode] || resultSets["usb-c-hub"];

  diagnosisForm.addEventListener("change", () => {
    const type = scoreDiagnosis(diagnosisForm, mode);
    const data = dataSet[type];
    result.innerHTML = `
      <strong>${data.title}</strong>
      <p>${data.text}</p>
    `;
    updateRecommendation(type, dataSet);
    applyAffiliateLinks();
  });
});
