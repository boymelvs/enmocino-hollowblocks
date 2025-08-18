import Hero from "./Hero.js";
import About from "./About.js";
import Products from "./Products.js";
import WhyChoose from "./WhyChoose.js";
import Contact from "./Contact.js";

const Main = (props, { getState, setState }) => {
     return {
          main: {
               className: "main",
               style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "144rem",
                    width: "100%",
                    zIndex: "1",
               },
               children: [Hero(), About(), Products(), WhyChoose(), Contact()],
          },
     };
};

export default Main;
