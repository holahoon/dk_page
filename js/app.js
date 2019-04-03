// Sticky Navbar
window.addEventListener("scroll", () => {
  const nav = document.querySelector("#nav");
  if (window.innerWidth < 450) {
    return;
  } else {
    if (window.pageYOffset >= nav.offsetHeight) {
      nav.style.paddingTop = "0.5rem";
    } else {
      nav.style.paddingTop = "2rem";
    }
  }
});

// Smooth scroll (may not be supported in the older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Carousel images, change project names and descriptions
(function() {
  const carouselSlide = document.querySelector(".carousel-slide");
  const carouselImages = document.querySelectorAll(".carousel-slide img");
  const size = carouselImages[0].clientWidth;
  let counter = 0;

  carouselSlide.style.trasform = `translateX(${-size * counter}px)`;
  document.querySelector(".group1").classList.add("selected");

  // Arrow left
  document.querySelector(".arrow-left").addEventListener("click", () => {
    if (counter === 0) {
      counter = carouselImages.length - 1;
      carouselSlide.style.transform = `translate(${-size * counter}px)`;
    } else {
      counter--;
      carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
    // Update project name and description
    switch (counter) {
      case 0:
        document.querySelector(".group2").classList.remove("selected");
        document.querySelector(".group1").classList.add("selected");
        return;
      case 1:
        document.querySelector(".group3").classList.remove("selected");
        document.querySelector(".group2").classList.add("selected");
        return;
      case 2:
        document.querySelector(".group4").classList.remove("selected");
        document.querySelector(".group3").classList.add("selected");
        return;
      case 3:
        document.querySelector(".group1").classList.remove("selected");
        document.querySelector(".group4").classList.add("selected");
        return;
      default:
        return;
    }
  });

  // Arrow right
  document.querySelector(".arrow-right").addEventListener("click", () => {
    if (counter >= carouselImages.length - 1) {
      counter = 0;
      carouselSlide.style.transform = `translate(${-size * counter}px)`;
    } else {
      counter++;
      carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
    // Update project name and description
    switch (counter) {
      case 0:
        document.querySelector(".group4").classList.remove("selected");
        document.querySelector(".group1").classList.add("selected");
        return;
      case 1:
        document.querySelector(".group1").classList.remove("selected");
        document.querySelector(".group2").classList.add("selected");
        return;
      case 2:
        document.querySelector(".group2").classList.remove("selected");
        document.querySelector(".group3").classList.add("selected");
        return;
      case 3:
        document.querySelector(".group3").classList.remove("selected");
        document.querySelector(".group4").classList.add("selected");
        return;
      default:
        return;
    }
  });
})();

// Copy Email
const copyEmail = () => {
  const myEmail = document.querySelector(".my-email");

  myEmail.addEventListener("copy", e => {
    e.preventDefault();
    if (e.clipboardData) {
      e.clipboardData.setData("text/plain", myEmail.dataset.email);
      document.querySelector(".click-email").textContent = "(copied!)";
      console.log("copied: " + e.clipboardData.getData("text"));
    }
  });
  document.execCommand("copy");
};

// Open hamburger menu
let opened = false;

const openMenu = hamburger => {
  if (opened) {
    opened = false;
    hamburger.classList.remove("change");
    document.querySelector(".menu-container").classList.remove("open");
  } else {
    opened = true;
    hamburger.classList.add("change");
    document.querySelector(".menu-container").classList.add("open");
  }
};
// Hide menu on menu list click
const hideMenu = () => {
  if (opened) {
    opened = false;
    document.querySelector(".hamburger-container").classList.remove("change");
    document.querySelector(".menu-container").classList.remove("open");
  } else {
    opened = true;
    document.querySelector(".hamburger-container").classList.add("change");
    document.querySelector(".menu-container").classList.add("open");
  }
};
