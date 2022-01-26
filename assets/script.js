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
    console.log("sunel : ", sunel);
    sunel.classList.add("duration-1000");
    sunel.classList.remove("rotate-[359deg]");
    sunel.classList.remove("opacity-0");
    sunel.classList.add("opacity-100");
  }
  for (const moonel of moon) {
    console.log("moonel : ", moonel);
    moonel.classList.add("duration-1000");
    moonel.classList.remove("opacity-100");
    moonel.classList.remove("rotate-0");
    moonel.classList.add("opacity-0");
    moonel.classList.add("rotate-[359deg]");
  }
}

function setBtnMoonLoad() {
  sun = document.getElementsByClassName("switch-icon-sun");
  console.log(sun);
  moon = document.getElementsByClassName("switch-icon-moon");
  console.log(moon);

  for (const sunel of sun) {
    console.log("sunel : ", sunel);
    sunel.classList.remove("opacity-100");
    sunel.classList.add("rotate-[359deg]");
    sunel.classList.add("opacity-0");
    console.log("sunel2 : ", sunel);
  }
  for (const moonel of moon) {
    console.log("moonel : ", moonel);
    moonel.classList.remove("opacity-0");
    moonel.classList.remove("rotate-[359deg]");
    moonel.classList.add("opacity-100");
    moonel.classList.add("rotate-0");
    console.log("moonel2 : ", moonel);
  }
}
function setBtnSunLoad() {
  sun = document.getElementsByClassName("switch-icon-sun");
  console.log(sun);
  moon = document.getElementsByClassName("switch-icon-moon");
  console.log(moon);

  for (const sunel of sun) {
    console.log("sunnel : ", sunel);
    sunel.classList.remove("rotate-[359deg]");
    sunel.classList.remove("opacity-0");
    sunel.classList.add("opacity-100");
    console.log("sunel2 : ", sunel);
  }

  for (const moonel of moon) {
    console.log("moonel : ", moonel);
    moonel.classList.remove("opacity-100");
    moonel.classList.remove("rotate-0");
    moonel.classList.add("opacity-0");
    moonel.classList.add("rotate-[359deg]");
    console.log("moonel2 : ", moonel);
  }
}

function showNav() {
  let el = document.getElementById("mobile-nav");
  el.classList.remove("-translate-y-full");
  el.classList.add("-translate-y-0");
  let navItems = document.getElementsByClassName("nav-items");
  for (const navItem of navItems) {
    navItem.classList.add("-translate-x-0");
    navItem.classList.add("opacity-100");
  }
}
function hideNav() {
  let el = document.getElementById("mobile-nav");
  el.classList.remove("-translate-y-0");
  el.classList.add("-translate-y-full");
  let navItems = document.getElementsByClassName("nav-items");
  for (const navItem of navItems) {
    navItem.classList.remove("-translate-x-0");
    navItem.classList.remove("opacity-100");
  }
}
