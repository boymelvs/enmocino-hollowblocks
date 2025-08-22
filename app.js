import Headers from "./components/header/Headers.js";
import Main from "./components/main/Main.js";
import Footer from "./components/footer/Footer.js";
import LoginModal from "./components/modal/LoginModal.js";
import SignupModal from "./components/modal/SignupModal.js";

// Animation on scroll
function animateOnScroll() {
     const elements = document.querySelectorAll(".main-section-title, .about-content, .products-grid, .features, .contact-wrapper");

     elements.forEach((element) => {
          const elementPosition = element.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;

          if (elementPosition < screenPosition) {
               element.style.opacity = "1";
               element.style.transform = "translateY(0)";
          }
     });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

const juris = new Juris({
     components: {
          Headers,
          Main,
          Footer,
          LoginModal,
          SignupModal,
     },

     headlessComponents: {},

     states: {},

     layout: [{ Headers: {} }, { Main: {} }, { Footer: {} }, { LoginModal: {} }, { SignupModal: {} }],

     // logLevel: "warn",
});

juris.render("#app");
