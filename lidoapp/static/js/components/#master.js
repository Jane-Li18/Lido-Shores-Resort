/* -------------------------------------------------------------- Color Changer */
const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark",
};

const theme =
  localStorage.getItem("theme") ||
  ((tmp = Object.keys(themeMap)[0]), localStorage.setItem("theme", tmp), tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem("theme");
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem("theme", next);
}

document.getElementById("themeButton").onclick = toggleTheme;

/* -------------------------------------------------------------- Sticky Navbar Code */
$(document).ready(function () {
  var navbar = $(".sticky-nav");
  var sticky = navbar.offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() >= sticky) {
      navbar.addClass("sticky");
    } else {
      navbar.removeClass("sticky");
    }
  });
});

