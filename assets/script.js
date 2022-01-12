function updateColor() {
  if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
  }
}
function setColorMode() {
  if (localStorage.theme == "light") {
    localStorage.theme = "dark";
    animateBtnOn();
  } else {
    localStorage.theme = "light";
    animateBtnOff();
  }
  updateColor();
}

function animateBtnOn() {
  sun = document.getElementById("switch-icon-sun");
  moon = document.getElementById("switch-icon-moon");
  sun.classList.add("rotate-[359deg]");
  sun.classList.remove("opacity-100");
  sun.classList.add("opacity-0");
  moon.classList.remove("opacity-0");
  moon.classList.add("opacity-100");
  moon.classList.remove("rotate-[359deg]");
  moon.classList.add("rotate-0");
  // ROTATE ICON WITH BOUNCE EFFECT
  // FADE BOTH ICON
}

function animateBtnOff() {
  sun = document.getElementById("switch-icon-sun");
  moon = document.getElementById("switch-icon-moon");
  sun.classList.remove("rotate-[359deg]");
  sun.classList.add("opacity-100");
  sun.classList.remove("opacity-0");
  moon.classList.add("opacity-0");
  moon.classList.remove("opacity-100");
  moon.classList.add("rotate-[359deg]");
  moon.classList.remove("rotate-0");
  // ROTATE ICON WITH BOUNCE EFFECT
  // FADE BOTH ICON
}
