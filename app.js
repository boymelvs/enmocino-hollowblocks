import Headers from "./components/header/Headers.js";
import Main from "./components/main/Main.js";
import Footer from "./components/footer/Footer.js";

const juris = new Juris({
     components: {
          Headers,
          Main,
          Footer,
     },

     headlessComponents: {},

     states: {},

     layout: [{ Headers: {} }, { Main: {} }, { Footer: {} }],

     // logLevel: "warn",
});

juris.render("#app");
