const Hero = (setState) => {
     return {
          section: {
               id: "home",
               className: "hero",
               style: {
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: "var(--white)",
                    width: "100%",
                    zIndex: "1",
                    height: "100vh",
               },
               children: [
                    {
                         div: {
                              className: "hero-container",
                              style: {
                                   width: "100%",
                              },
                              children: [
                                   {
                                        div: {
                                             className: "hero-content",
                                             style: {
                                                  display: "flex",
                                                  flexDirection: "column",
                                                  justifyContent: "center",
                                                  alignItems: "center",
                                                  gap: "4rem",
                                             },
                                             children: [
                                                  {
                                                       h1: {
                                                            style: {
                                                                 fontSize: "4.8rem",
                                                                 lineHeight: "normal",
                                                                 textAlign: "center",
                                                                 width: "100%",
                                                                 animation: "fadeInUp 1000ms ease",
                                                            },
                                                            text: "Quality Hollow Blocks",
                                                       },
                                                  },
                                                  {
                                                       p: {
                                                            style: {
                                                                 fontSize: "2rem",
                                                                 lineHeight: "normal",
                                                                 textAlign: "center",
                                                                 animation: "fadeInUp 1000ms ease 300ms forwards",
                                                                 width: "70%",
                                                                 opacity: "0",
                                                            },
                                                            text: "Discover the best hollow blocks for your construction needs. Our products are made with high-quality materials and precision engineering to ensure durability and reliability.",
                                                       },
                                                  },
                                                  {
                                                       a: {
                                                            href: "#contact",
                                                            className: "btn",
                                                            text: "Get a Quote",
                                                            style: {
                                                                 padding: "1.2rem 3rem",
                                                                 color: "var(--white)",
                                                                 textDecoration: "none",
                                                                 borderRadius: "0.5rem",
                                                                 fontWeight: "var(--font-weight-600)",
                                                                 transition: "all 0.3s",
                                                                 border: "none",
                                                                 cursor: "pointer",
                                                                 animation: "fadeInUp 1000ms ease 600ms forwards",
                                                                 opacity: "0",
                                                            },
                                                            // onclick: () => {
                                                            //      setState("isActiveNav", "contact");
                                                            // },
                                                       },
                                                  },
                                             ],
                                        },
                                   },
                              ],
                         },
                    },
               ],
          },
     };
};

export default Hero;
