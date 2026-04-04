AOS.init();

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
  });
}

// TYPING EFFECT
const text = ["Web Developer", "UI Designer", "Freelancer"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function typing() {
  current = text[i];

  if (!isDeleting) {
    document.getElementById("typing").textContent = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(typing, 1000);
      return;
    }
  } else {
    document.getElementById("typing").textContent = current.substring(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(typing, isDeleting ? 50 : 100);
}

typing();

// PARTICLES
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#38bdf8" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 2 },
  },
});
