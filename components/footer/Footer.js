const Footer = (props, { getState, setState }) => {
     return {
          footer: {
               className: "footer",
               style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "var(--dark)",
                    color: "var(--white)",
                    padding: "2rem 0",
                    maxWidth: "144rem",
                    width: "100%",
               },
               children: [
                    {
                         div: {
                              className: "footer-content",
                              style: {
                                   display: "flex",
                                   flexDirection: "column",
                                   justifyContent: "center",
                                   alignItems: "center",
                                   gap: "2rem",
                                   width: "100%",
                              },
                              children: [
                                   {
                                        div: {
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
                                   },
                                   {
                                        div: {
                                             className: "social-links",
                                             style: {
                                                  display: "flex",
                                                  justifyContent: "center",
                                                  alignItems: "center",
                                                  gap: "2rem",
                                                  width: "100%",
                                             },
                                             children: [
                                                  {
                                                       a: {
                                                            href: "#",
                                                            children: [
                                                                 {
                                                                      i: { className: "fab fa-facebook-f" },
                                                                 },
                                                            ],
                                                       },
                                                  },

                                                  {
                                                       a: {
                                                            href: "#",
                                                            children: [
                                                                 {
                                                                      i: { className: "fab fa-twitter" },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       a: {
                                                            href: "#",
                                                            children: [
                                                                 {
                                                                      i: { className: "fab fa-instagram" },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   },
                                   {
                                        div: {
                                             className: "copyright",
                                             style: {
                                                  fontSize: "1.3rem",
                                                  textAlign: "center",
                                                  width: "100%",
                                                  opacity: "0.8",
                                             },
                                             text: "&copy; 2025 Enmocino HollowBlocks. All Right Reserved.",
                                        },
                                   },
                              ],
                         },
                    },
               ],
          },
     };
};

export default Footer;
