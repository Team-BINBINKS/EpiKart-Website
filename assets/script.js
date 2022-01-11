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
  } else {
    localStorage.theme = "light";
  }
  updateColor();
}
