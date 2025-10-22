// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  const icon = mobileMenuBtn.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll("a");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    const icon = mobileMenuBtn.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Active navigation link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-blue-400");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("text-blue-400");
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  observer.observe(section);
});

// Contact Form Handling
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Here you would typically send this data to a backend service
  // For now, we'll just show an alert
  alert(
    `Terima kasih ${name}! Pesan Anda telah diterima. Saya akan segera menghubungi Anda di ${email}.`
  );

  // Reset form
  contactForm.reset();

  // You can integrate with services like:
  // - EmailJS (https://www.emailjs.com/)
  // - Formspree (https://formspree.io/)
  // - Netlify Forms (built-in with Netlify)
  // - Your own backend API
});

// Add typing effect to hero section (optional enhancement)
const heroText = document.querySelector("h1");
const originalText = heroText.textContent;

function typingEffect() {
  heroText.textContent = "";
  let i = 0;

  const typing = setInterval(() => {
    if (i < originalText.length) {
      heroText.textContent += originalText.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, 100);
}

// Uncomment below to enable typing effect on page load
// window.addEventListener('load', typingEffect);

// Scroll to top button (optional enhancement)
const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className =
  "fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg transition duration-300 transform hover:scale-110 opacity-0 pointer-events-none z-50";
scrollTopBtn.style.transition = "opacity 0.3s ease-in-out";
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.opacity = "1";
    scrollTopBtn.style.pointerEvents = "auto";
  } else {
    scrollTopBtn.style.opacity = "0";
    scrollTopBtn.style.pointerEvents = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Parallax effect DISABLED - caused layout issues
// Uncomment below if you want to enable parallax (may cause content overlap)
/*
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.getElementById("home");
  if (hero && scrolled < window.innerHeight) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});
*/

console.log("Portfolio website loaded successfully! 🚀");
