var type = new Typed(".multiple_text", {
  strings: ["Frontend Web Developer", "Web Designer", "Wordpress Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  typeDaly: 1000,
  loop: true,
});

window.onscroll = () => {
  let header = document.querySelector("header");

  header.classList.toggle("ariful", window.scrollY > 100);
};

// scrol changes background color
window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('ariful', scrollY > 100);
 }

 // Toggle menu function
function toggleMenu() {
    const navbarNav = document.getElementById("navbarNav");
    const menuIcon = document.getElementById("menu-icon");
    
    navbarNav.classList.toggle("show");
    if (navbarNav.classList.contains("show")) {
        menuIcon.classList.remove("navbar-toggler-icon");
        menuIcon.innerHTML = "&times;"; // Cross icon
    } else {
        menuIcon.classList.add("navbar-toggler-icon");
        menuIcon.innerHTML = ""; // Back to hamburger icon
    }
};

// live time

const showTime = () => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  if (h > 11) {
    session = "PM";
  }

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;


  let time = h + ":" + m + ":" + s + "" + session;
  document.getElementById("clock").innerHTML = time;
};

setInterval(showTime, 1000);


// faq section js code design 

function toggleFaq(header) {
  const body = header.nextElementSibling;
  const icon = header.querySelector('.toggle-icon');

  // Close other FAQs
  document.querySelectorAll('.faq-card-body').forEach(faqBody => {
      if (faqBody !== body) {
          faqBody.classList.remove('open');
          faqBody.previousElementSibling.querySelector('.toggle-icon').classList.remove('open');
      }
  });

  // Toggle current FAQ
  if (body.classList.contains('open')) {
      body.classList.remove('open');
      icon.classList.remove('open');
  } else {
      body.classList.add('open');
      icon.classList.add('open');
  }
}


// wow js 

new WOW().init(); 



