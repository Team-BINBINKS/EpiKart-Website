function updateColor() {
  if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.body.classList.add("duration-1000");
    document.querySelector("html").classList.add("dark");
    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#0f172a");
    setBtnMoon();
  } else {
    document.body.classList.add("duration-1000");
    document.querySelector("html").classList.remove("dark");
    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#ef4444");
    setBtnSun();
  }
}

function setColorTheme() {
  if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.querySelector("html").classList.add("dark");
    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#0f172a");
    setBtnMoonLoad();
  } else {
    document.querySelector("html").classList.remove("dark");
    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#ef4444");
    setBtnSunLoad();
  }
}

function setColorMode() {
  if (localStorage.theme == "light") {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
  updateColor();
}

// ROTATE ICON WITH BOUNCE EFFECT
// FADE BOTH ICON

function setBtnMoon() {
  sun = document.getElementsByClassName("switch-icon-sun");
  moon = document.getElementsByClassName("switch-icon-moon");

  for (const sunel of sun) {
    sunel.classList.add("duration-1000");
    sunel.classList.remove("opacity-100");
    sunel.classList.add("rotate-[359deg]");
    sunel.classList.add("opacity-0");
  }
  for (const moonel of moon) {
    moonel.classList.add("duration-1000");
    moonel.classList.remove("opacity-0");
    moonel.classList.remove("rotate-[359deg]");
    moonel.classList.add("opacity-100");
    moonel.classList.add("rotate-0");
  }
}
function setBtnSun() {
  sun = document.getElementsByClassName("switch-icon-sun");
  moon = document.getElementsByClassName("switch-icon-moon");

  for (const sunel of sun) {
    sunel.classList.add("duration-1000");
    sunel.classList.remove("rotate-[359deg]");
    sunel.classList.remove("opacity-0");
    sunel.classList.add("opacity-100");
  }
  for (const moonel of moon) {
    moonel.classList.add("duration-1000");
    moonel.classList.remove("opacity-100");
    moonel.classList.remove("rotate-0");
    moonel.classList.add("opacity-0");
    moonel.classList.add("rotate-[359deg]");
  }
}

function setBtnMoonLoad() {
  sun = document.getElementsByClassName("switch-icon-sun");
  moon = document.getElementsByClassName("switch-icon-moon");

  for (const sunel of sun) {
    sunel.classList.remove("opacity-100");
    sunel.classList.add("rotate-[359deg]");
    sunel.classList.add("opacity-0");
  }
  for (const moonel of moon) {
    moonel.classList.remove("opacity-0");
    moonel.classList.remove("rotate-[359deg]");
    moonel.classList.add("opacity-100");
    moonel.classList.add("rotate-0");
  }
}
function setBtnSunLoad() {
  sun = document.getElementsByClassName("switch-icon-sun");
  moon = document.getElementsByClassName("switch-icon-moon");

  for (const sunel of sun) {
    sunel.classList.remove("rotate-[359deg]");
    sunel.classList.remove("opacity-0");
    sunel.classList.add("opacity-100");
  }

  for (const moonel of moon) {
    moonel.classList.remove("opacity-100");
    moonel.classList.remove("rotate-0");
    moonel.classList.add("opacity-0");
    moonel.classList.add("rotate-[359deg]");
  }
}

function showNav() {
  let el = document.getElementById("mobile-nav");
  el.classList.remove("bottom-full");
  el.classList.add("bottom-0");
  el.classList.remove("-top-full");
  el.classList.add("top-0");
  let navItems = document.getElementsByClassName("nav-items");
  for (const navItem of navItems) {
    navItem.classList.add("-translate-x-0");
    navItem.classList.add("opacity-100");
  }
}
function hideNav() {
  let el = document.getElementById("mobile-nav");
  el.classList.remove("bottom-0");
  el.classList.add("bottom-full");
  el.classList.remove("top-0");
  el.classList.add("-top-full");

  let navItems = document.getElementsByClassName("nav-items");
  for (const navItem of navItems) {
    navItem.classList.remove("-translate-x-0");
    navItem.classList.remove("opacity-100");
  }
}
// ------

function ScrollSection1() {
  document.getElementById("section-1").scrollIntoView();
}

// ------ ADD ELIOTT CROWN ------

function ToggleSpecialItem(id) {
  const el = document.getElementById(id);
  if (el.classList.contains("hidden")) {
    el.classList.remove("hidden");
  } else {
    el.classList.add("hidden");
  }
}
