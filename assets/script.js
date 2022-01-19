function updateColor() {
  if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.querySelector("html").classList.add("dark");
    setBtnMoon();
  } else {
    document.querySelector("html").classList.remove("dark");
    setBtnSun();
  }
}

function setColorTheme() {
  if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.querySelector("html").classList.add("dark");
    setBtnMoonLoad();
  } else {
    document.querySelector("html").classList.remove("dark");
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
  sun = document.getElementById("switch-icon-sun");
  moon = document.getElementById("switch-icon-moon");

  sun.classList.add("duration-1000");
  moon.classList.add("duration-1000");

  sun.classList.remove("opacity-100");
  sun.classList.add("rotate-[359deg]");
  sun.classList.add("opacity-0");
  moon.classList.remove("opacity-0");
  moon.classList.remove("rotate-[359deg]");
  moon.classList.add("opacity-100");
  moon.classList.add("rotate-0");
}
function setBtnSun() {
  sun = document.getElementById("switch-icon-sun");
  moon = document.getElementById("switch-icon-moon");
  sun.classList.add("duration-1000");
  moon.classList.add("duration-1000");

  sun.classList.remove("rotate-[359deg]");
  sun.classList.remove("opacity-0");
  sun.classList.add("opacity-100");
  moon.classList.remove("opacity-100");
  moon.classList.remove("rotate-0");
  moon.classList.add("opacity-0");
  moon.classList.add("rotate-[359deg]");
}

function setBtnMoonLoad() {
  sun = document.getElementById("switch-icon-sun");
  moon = document.getElementById("switch-icon-moon");
  sun.classList.remove("opacity-100");
  sun.classList.add("rotate-[359deg]");
  sun.classList.add("opacity-0");
  moon.classList.remove("opacity-0");
  moon.classList.remove("rotate-[359deg]");
  moon.classList.add("opacity-100");
  moon.classList.add("rotate-0");
}
function setBtnSunLoad() {
  sun = document.getElementById("switch-icon-sun");
  moon = document.getElementById("switch-icon-moon");
  sun.classList.remove("rotate-[359deg]");
  sun.classList.remove("opacity-0");
  sun.classList.add("opacity-100");
  moon.classList.remove("opacity-100");
  moon.classList.remove("rotate-0");
  moon.classList.add("opacity-0");
  moon.classList.add("rotate-[359deg]");
}

function showNav() {
  let el = document.getElementById("mobile-nav");
  el.classList.remove("hidden");
  el.classList.add("absolute");
}
