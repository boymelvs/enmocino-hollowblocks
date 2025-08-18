const About = () => {
     return {
          section: {
               id: "about",
               className: "about section",
               children: [
                    {
                         div: {
                              className: "about-container",
                              style: {
                                   display: "flex",
                                   flexDirection: "column",
                                   justifyContent: "center",
                                   alignItems: "center",
                                   gap: "6rem",
                                   width: "100%",
                                   animation: "fadeInUp 1000ms ease 600ms forwards",
                              },
                              children: [
                                   {
                                        div: {
                                             className: "main-section-title",
                                             children: [
                                                  {
                                                       h2: { text: "About Our Company" },
                                                  },
                                             ],
                                        },
                                   },
                                   {
                                        div: {
                                             className: "about-content",
                                             style: {
                                                  display: "flex",
                                                  alignItems: "flex-start",
                                                  flexWrap: "wrap",
                                                  gap: "4rem",
                                             },
                                             children: [
                                                  {
                                                       div: {
                                                            className: "about-text",
                                                            style: {
                                                                 flex: "1",
                                                                 minWidth: "30rem",
                                                            },
                                                            children: [
                                                                 {
                                                                      h3: {
                                                                           style: {
                                                                                fontSize: "2.8rem",
                                                                                color: "var(--primary)",
                                                                                marginBottom: "2rem",
                                                                                lineHeight: "normal",
                                                                           },
                                                                           text: "Trusted Hollow Blocks Manufacturer",
                                                                      },
                                                                 },
                                                                 {
                                                                      p: {
                                                                           text: "Enmocino HollowBlocks has been a leader in the construction materials industry for over 25 years. We specialize in manufacturing high-quality hollowblocks that meet and exceed industry standards.",
                                                                      },
                                                                 },
                                                                 {
                                                                      p: {
                                                                           text: "Our state-of-the-art manufacturing facility uses the latest technology and highest quality materials to produce durable, consistend products that builders and contractors can rely on for their most important projects.",
                                                                      },
                                                                 },
                                                                 {
                                                                      p: {
                                                                           text: "We take pride in our commitment to quality control, environmental responsiblity, and customer satisfaction. Every block that leaves our facility is inspected to ensure it meets our rigorous standards.",
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       div: {
                                                            className: "about-image",
                                                            children: [
                                                                 {
                                                                      img: {
                                                                           src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                                                                           alt: "HollowBlocks manufacturing facility",
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
                    },
               ],
          },
     };
};

export default About;
