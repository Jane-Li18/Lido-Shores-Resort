// Scroll top code
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    document.querySelector("#chatbot").classList.add("active");
    document.querySelector("#upscroll").classList.add("active");
  } else {
    document.querySelector("#chatbot").classList.remove("active");
    document.querySelector("#upscroll").classList.remove("active");
  }
});

// Select the class bubble
time = document.getElementsByClassName("bubbles")[0];

if (screen.width < 400) {
  //Change transformation duration and translatey for mobile view
  time.style.setProperty("--transform-duration", "15s");
  time.style.setProperty("--transform-y", "-700vh");
}

window.addEventListener("scroll", function () {
  let value = window.scrollY; //Get Scroll Value (Mobile - High)

  text.style.top = 50 + value * -0.2 + "%";

  bird1.style.top = value * -2 + "px";
  bird1.style.left = value * 1 + "px";

  bird2.style.top = value * -2 + "px";
  bird2.style.left = value * -2 + "px";

  explore.style.marginTop = value * 1.5 + "px";

  rocks.style.top = value * -0.14 + "px";

  tree1.style.left = value * 0.25 + "px";
  tree2.style.left = value * -0.25 + "px";

  beach.style.top = value * 0.9 + "px";
  sky.style.top = value * 0.25 + "px";
});

// Contains the link for all social media handles
var links = document.getElementsByClassName("social-media");

links[0].addEventListener("click", () => {
  openlink(1);
});
links[1].addEventListener("click", () => {
  openlink(2);
});
links[2].addEventListener("click", () => {
  openlink(3);
});

function openlink(x) {
  if (x == 1) {
    window.open("https://web.facebook.com/lidoshores", "_blank");
  }
  if (x == 2) {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=lidoshores.sariaya@gmail.com",
      "_blank"
    );
  }
  if (x == 3) {
    window.open("https://chats.viber.com/lidoshores.sariaya", "_blank");
  }
}
