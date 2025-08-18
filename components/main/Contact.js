const Contact = () => {
     return {
          section: {
               id: "contact",
               className: "section contact",
               style: {
                    background: "var(--primary)",
                    color: "var(--white)",
               },
               children: [
                    {
                         div: {
                              className: "contact-container",
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
                                                       h2: {
                                                            style: {
                                                                 color: "var(--white)",
                                                            },
                                                            text: "Contact Us",
                                                       },
                                                  },
                                             ],
                                        },
                                   },
                                   {
                                        div: {
                                             className: "contact-wrapper",
                                             style: {
                                                  display: "flex",
                                                  flexWrap: "wrap",
                                                  gap: "4rem",
                                                  width: "100%",
                                             },
                                             children: [
                                                  {
                                                       div: {
                                                            className: "contact-info",
                                                            style: {
                                                                 flex: "1",
                                                                 minWidth: "30rem",
                                                            },
                                                            children: [
                                                                 {
                                                                      h3: {
                                                                           style: {
                                                                                fontSize: "2.4rem",
                                                                                marginBottom: "2rem",
                                                                           },
                                                                           text: "Get in Touch",
                                                                      },
                                                                 },
                                                                 {
                                                                      div: {
                                                                           className: "contact-details",
                                                                           style: {
                                                                                display: "flex",
                                                                                flexDirection: "column",
                                                                                gap: "1.5rem",
                                                                           },
                                                                           children: [
                                                                                {
                                                                                     div: {
                                                                                          className: "contact-item",
                                                                                          children: [
                                                                                               {
                                                                                                    div: {
                                                                                                         className: "contact-icon",
                                                                                                         children: [
                                                                                                              {
                                                                                                                   i: { className: "fas fa-map-marker-alt" },
                                                                                                              },
                                                                                                         ],
                                                                                                    },
                                                                                               },
                                                                                               {
                                                                                                    div: {
                                                                                                         children: [
                                                                                                              {
                                                                                                                   h4: {
                                                                                                                        text: "Address",
                                                                                                                   },
                                                                                                              },
                                                                                                              {
                                                                                                                   p: {
                                                                                                                        text: "123 Industrial Zone, Construction City, CC98765",
                                                                                                                   },
                                                                                                              },
                                                                                                         ],
                                                                                                    },
                                                                                               },
                                                                                          ],
                                                                                     },
                                                                                },
                                                                                {
                                                                                     div: {
                                                                                          className: "contact-item",
                                                                                          children: [
                                                                                               {
                                                                                                    div: {
                                                                                                         className: "contact-icon",
                                                                                                         children: [
                                                                                                              {
                                                                                                                   i: { className: "fas fa-phone-alt" },
                                                                                                              },
                                                                                                         ],
                                                                                                    },
                                                                                               },
                                                                                               {
                                                                                                    div: {
                                                                                                         children: [
                                                                                                              {
                                                                                                                   h4: { text: "Phone" },
                                                                                                              },
                                                                                                              {
                                                                                                                   p: { text: "+1 (555) 123-4567" },
                                                                                                              },
                                                                                                         ],
                                                                                                    },
                                                                                               },
                                                                                          ],
                                                                                     },
                                                                                },
                                                                                {
                                                                                     div: {
                                                                                          className: "contact-item",
                                                                                          children: [
                                                                                               {
                                                                                                    div: {
                                                                                                         className: "contact-icon",
                                                                                                         children: [
                                                                                                              {
                                                                                                                   i: {
                                                                                                                        className: "fas fa-envelope",
                                                                                                                   },
                                                                                                              },
                                                                                                         ],
                                                                                                    },
                                                                                               },
                                                                                               {
                                                                                                    div: {
                                                                                                         children: [
                                                                                                              {
                                                                                                                   h4: { text: "Email" },
                                                                                                              },
                                                                                                              {
                                                                                                                   p: { text: "info@enmocinohollowblocks.com" },
                                                                                                              },
                                                                                                         ],
                                                                                                    },
                                                                                               },
                                                                                          ],
                                                                                     },
                                                                                },
                                                                                {
                                                                                     div: {
                                                                                          className: "contact-item",
                                                                                          children: [
                                                                                               {
                                                                                                    div: {
                                                                                                         className: "contact-icon",
                                                                                                         children: [
                                                                                                              {
                                                                                                                   i: { className: "fas fa-clock" },
                                                                                                              },
                                                                                                         ],
                                                                                                    },
                                                                                               },
                                                                                               {
                                                                                                    div: {
                                                                                                         children: [
                                                                                                              {
                                                                                                                   h4: { text: "Working Hours" },
                                                                                                              },
                                                                                                              {
                                                                                                                   p: { text: "Monday - Friday: 8:00 AM - 5:00 PM" },
                                                                                                              },
                                                                                                              {
                                                                                                                   p: { text: "Saturday: 9:00 AM - 2:00 PM" },
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
                                                  },
                                                  {
                                                       div: {
                                                            className: "contact-form",
                                                            style: {
                                                                 flex: "1",
                                                                 minWidth: "30rem",
                                                                 background: "var(--white)",
                                                                 padding: "3rem",
                                                                 borderRadius: "0.8rem",
                                                                 boxShadow: "0 1rem 3rem rgba(0,0,0,0.1)",
                                                            },
                                                            children: [
                                                                 {
                                                                      form: {
                                                                           id: "contactForm",
                                                                           children: [
                                                                                {
                                                                                     div: {
                                                                                          className: "form-group",
                                                                                          children: [
                                                                                               {
                                                                                                    label: {
                                                                                                         for: "name",
                                                                                                         text: "Your Name",
                                                                                                    },
                                                                                               },
                                                                                               {
                                                                                                    input: {
                                                                                                         type: "text",
                                                                                                         id: "name",
                                                                                                         className: "form-control",
                                                                                                         name: "name",
                                                                                                         placeholder: "e.g., Juan Delacruz",
                                                                                                         required: true,
                                                                                                    },
                                                                                               },
                                                                                          ],
                                                                                     },
                                                                                },
                                                                                {
                                                                                     div: {
                                                                                          className: "form-group",
                                                                                          children: [
                                                                                               {
                                                                                                    label: {
                                                                                                         for: "email",
                                                                                                         text: "Your Email",
                                                                                                    },
                                                                                               },
                                                                                               {
                                                                                                    input: {
                                                                                                         type: "email",
                                                                                                         id: "email",
                                                                                                         className: "form-control",
                                                                                                         name: "email",
                                                                                                         placeholder: "e.g., juandelacruz@email.com",
                                                                                                         required: true,
                                                                                                    },
                                                                                               },
                                                                                          ],
                                                                                     },
                                                                                },
                                                                                {
                                                                                     div: {
                                                                                          className: "form-group",
                                                                                          children: [
                                                                                               {
                                                                                                    label: {
                                                                                                         for: "message",
                                                                                                         text: "Your Message",
                                                                                                    },
                                                                                               },
                                                                                               {
                                                                                                    textarea: {
                                                                                                         id: "message",
                                                                                                         className: "form-control",
                                                                                                         name: "message",
                                                                                                         required: true,
                                                                                                    },
                                                                                               },
                                                                                          ],
                                                                                     },
                                                                                },
                                                                                {
                                                                                     button: {
                                                                                          type: "submit",
                                                                                          className: "submit-btn",
                                                                                          text: "Send Message",
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
                    },
               ],
          },
     };
};

export default Contact;
