// ===== AOS =====
AOS.init({
  duration: 800,
  once: true,
  offset: 80,
});

// ===== SCROLL TO SECTION =====
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
  });
}

// ===== TYPING EFFECT =====
const text = [
  "Web Developer",
  "Software Engineer",
  "Problem Solver",
  "UI/UX Enthusiast",
];
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
      setTimeout(typing, 1500);
      return;
    }
  } else {
    document.getElementById("typing").textContent = current.substring(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(typing, isDeleting ? 40 : 80);
}

typing();

// ===== PARTICLES =====
particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 900 } },
    color: { value: "#6366f1" },
    shape: { type: "circle" },
    opacity: { value: 0.4, random: true },
    size: { value: 2.5, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#6366f1",
      opacity: 0.15,
      width: 1,
    },
    move: { enable: true, speed: 1.5, direction: "none", random: true },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      resize: true,
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.5 } },
    },
  },
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const top = section.offsetTop - 100;
    if (scrollY >= top) current = section.getAttribute("id");
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===== HAMBURGER =====
const hamburger = document.getElementById("hamburger");
const navLinksUl = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinksUl.classList.toggle("open");
});

// Close menu on link click
navLinksUl.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinksUl.classList.remove("open");
  });
});

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== SKILL BARS ANIMATION =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute("data-width");
        bar.style.width = width + "%";
        observer.unobserve(bar);
      }
    });
  },
  { threshold: 0.5 },
);

document.querySelectorAll(".bar-fill").forEach((bar) => {
  observer.observe(bar);
});

// ===== STATS COUNTER =====
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-count"));
        let count = 0;
        const duration = 1500;
        const step = target / (duration / 16);

        function update() {
          count += step;
          if (count >= target) {
            el.textContent = target + "+";
            return;
          }
          el.textContent = Math.floor(count) + "+";
          requestAnimationFrame(update);
        }

        update();
        counterObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 },
);

document.querySelectorAll("[data-count]").forEach((el) => {
  counterObserver.observe(el);
});

// ===== CONTACT FORM =====
function handleSubmit(e) {
  e.preventDefault();
  showToast("Pesan berhasil dikirim! Saya akan segera merespons. ✨");
  e.target.reset();
}

// ===== TOAST =====
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ===== SMOOTH SCROLL FOR ALL ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
