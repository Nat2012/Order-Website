let searchbar = document.getElementById("search");
let dark = document.getElementById("dark");
searchbar.addEventListener("focus", function () {
  dark.style.zIndex = "1";
});

searchbar.addEventListener("focusout", function () {
  dark.style.zIndex = "-1";
});

