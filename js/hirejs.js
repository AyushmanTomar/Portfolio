function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  }
  else {
    menuBtn.className = "nav-menu";
  }
}

// shodow on navigation bar 
window.onscroll = function () {
  headerShadow()
};
function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "0 1px 6px rgba(0, 0, 0 , 0.1)";
  }
  else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  }
}
const body = document.querySelector("body"),
toggleSwitch = document.getElementById("toggle-switch");
// toggleSwitch.addEventListener('click', () => {
//   body.classList.toggle("dark");
// })
// Function to set the cookie
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get the cookie
function getCookie(name) {
  const cookieArr = document.cookie.split(';');
  for (let i = 0; i < cookieArr.length; i++) {
    let cookie = cookieArr[i].trim();
    if (cookie.indexOf(name + "=") === 0) {
      return cookie.substring(name.length + 1);
    }
  }
  return "";
}

// Apply the saved mode on page load
function applyModeFromCookie() {
  const mode = getCookie("themeMode");
  if (mode === "dark") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
}

// Toggle dark/light mode and save preference in cookie
toggleSwitch.addEventListener('click', () => {
  body.classList.toggle("dark");
  const mode = body.classList.contains("dark") ? "dark" : "light";
  setCookie("themeMode", mode, 365); // Cookie set to expire in 1 year
});

// Apply the mode when the page loads
document.addEventListener("DOMContentLoaded", () => {
  applyModeFromCookie();
});


var typed = new Typed('.typedText', {
  strings: ["Let's Talk"],
  typeSpeed: 40, smartBackspace: true, loop: true, backSpeed: 30, onBegin: (self) => { }, backDelay: 1000,
});

let linkedin1 = document.getElementById("linkedin1");
linkedin1.addEventListener("click", function () {
  window.open('https://www.linkedin.com/in/ayushman-tomar-3a357b25a', '_blank');
});

let insta1 = document.getElementById("instagram1");
insta1.addEventListener("click", function () {
  window.open('https://www.instagram.com/_ayushmaan__21/', '_blank');
});

let git1 = document.getElementById("github1");
git1.addEventListener("click", function () {
  window.open('https://github.com/AyushmanTomar', '_blank');
});
let mail1 = document.getElementById("mail1");
mail1.addEventListener("click", function () {
  window.open("mailto:ayuhmantomar721@gmail.com", '_blank');
});



const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 1500,
  reset: true
})
// sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 100 })
const srbottom = ScrollReveal({
  origin: 'bottom',
  distance: '80px',
  duration: 1500,
  reset: true
})
srbottom.reveal('.featured-image', { delay: 200 })
srbottom.reveal('.contact-form', { delay: 200 })

srbottom.reveal('.social_icons2', { delay: 100 })
srbottom.reveal('.rights', { delay: 100 })
srbottom.reveal('.nav-name2', { delay: 100 })