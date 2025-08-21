import Burger from "./Burger.js";

const Headers = (props, { getState, setState }) => {
     const navItem = ["Home", "About", "Products", "Why Us", "Contact"];

     const closeBurger = () => {
          const burger = document.getElementById("burger-checkbox");
          burger.checked = false;
     };

     return {
          header: {
               id: "header",
               className: "header",
               style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "hsla(0, 0%, 100%, 0.95)",
                    position: "fixed",
                    top: "0",
                    maxWidth: "144rem",
                    minWidth: "32rem",
                    width: "100%",
                    zIndex: "10",
                    boxShadow: "0 0.2rem 1rem rgba(0, 0, 0, 0.1)",
                    transition: "all 300ms ease",
                    margin: "0 auto",
               },
               children: [
                    {
                         div: {
                              id: "headerContainer",
                              className: "header-container",
                              style: {
                                   display: "flex",
                                   justifyContent: "space-between",
                                   width: "100%",
                              },
                              children: [
                                   {
                                        div: {
                                             id: "logo",
                                             className: "logo",
                                             style: {
                                                  fontWeight: "var(--font-weight-700)",
                                                  color: "var(--primary)",
                                                  zIndex: "1002",
                                             },
                                             children: [
                                                  "Enmocino",
                                                  {
                                                       span: {
                                                            text: "HollowBlocks",
                                                            style: {
                                                                 marginLeft: "0.5rem",
                                                                 color: "var(--secondary)",
                                                            },
                                                       },
                                                  },
                                             ],
                                        },
                                   }, //logo

                                   {
                                        input: {
                                             id: "burger-checkbox",
                                             className: "checkbox",
                                             type: "checkbox",
                                             style: {
                                                  display: "none",
                                                  visibility: "hidden",
                                                  position: "absolute",
                                             },
                                        },
                                   }, //checkbox

                                   {
                                        nav: {
                                             className: "nav-bar",
                                             style: {
                                                  display: "flex",
                                                  width: "100%",
                                                  justifyContent: "flex-end",
                                             },
                                             children: [
                                                  {
                                                       ul: {
                                                            id: "navLinks",
                                                            className: "nav-links",
                                                            style: {
                                                                 display: "flex",
                                                                 justifyContent: "flex-start",
                                                                 alignItems: "center",
                                                                 gap: "3rem",
                                                                 listStyle: "none",
                                                            },

                                                            children: [
                                                                 navItem.map((item, index) => {
                                                                      return {
                                                                           li: {
                                                                                key: index,
                                                                                children: [
                                                                                     {
                                                                                          a: {
                                                                                               href: `#${item.toLowerCase()}`,
                                                                                               text: item,
                                                                                               onClick: () => {
                                                                                                    closeBurger();
                                                                                               },
                                                                                          },
                                                                                     },
                                                                                ],
                                                                           },
                                                                      };
                                                                 }),
                                                                 {
                                                                      div: {
                                                                           id: "authButtons",
                                                                           className: "auth-buttons",
                                                                           children: [
                                                                                {
                                                                                     a: {
                                                                                          href: "#",
                                                                                          id: "loginBtn",
                                                                                          className: "btn-auth btn-login",
                                                                                          style: {
                                                                                               padding: "0.3rem 3rem",
                                                                                               borderRadius: "0.5rem",
                                                                                               fontWeight: "var(--font-weight-600)",
                                                                                               transition: "all 300ms",
                                                                                          },
                                                                                          text: "Login",
                                                                                          onClick: () => {
                                                                                               closeBurger();
                                                                                          },
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },

                                                  // Burger component
                                                  Burger(),
                                             ],
                                        },
                                   }, //nav
                              ],
                         },
                    },
               ],
          },
     };
};

export default Headers;
