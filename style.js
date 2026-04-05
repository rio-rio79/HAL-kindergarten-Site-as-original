function openMenu() {
  const body = document.body;
  body.classList.add("menu-open");
  body.style.overflow = "hidden";

  const button = document.querySelector(".hamburger-button");
  if (button) {
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-label", "メニューを閉じる");
  }
}

function closeMenu() {
  const body = document.body;
  body.classList.remove("menu-open");
  body.style.overflow = "";

  const button = document.querySelector(".hamburger-button");
  if (button) {
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "メニューを開く");
  }
}

function toggleMenu() {
  const isOpen = document.body.classList.contains("menu-open");
  if (isOpen) closeMenu();
  else openMenu();
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".hamburger-button");
  const overlay = document.querySelector(".menu-overlay");
  const menu = document.getElementById("global-menu");

  if (button) {
    button.addEventListener("click", toggleMenu);
  }

  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }

  // メニュー内リンククリックで閉じる
  if (menu) {
    menu.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.tagName === "A") closeMenu();
    });
  }

  // ESCキーで閉じる
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // 画面が大きくなったら閉じる（SP→PCの事故防止）
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) closeMenu();
  });
});
