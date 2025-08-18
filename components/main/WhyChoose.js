const WhyChoose = () => {
     return {
          section: {
               id: "why us",
               className: "section",
               children: [
                    {
                         div: {
                              className: "why-choose-container",
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
                                        div: { className: "main-section-title", children: [{ h2: { text: "Why Choose Enmocino HollowBlocks" } }] },
                                   },
                                   {
                                        div: {
                                             className: "features",
                                             style: {
                                                  display: "grid",
                                                  gridTemplateColumns: "repeat(auto-fit,minmax(30rem,1fr))",
                                                  gap: "3rem",
                                             },
                                             children: [
                                                  {
                                                       div: {
                                                            className: "feature-card",
                                                            children: [
                                                                 {
                                                                      div: {
                                                                           className: "feature-icon",
                                                                           children: [
                                                                                {
                                                                                     i: { className: "fas fa-award" },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                                 {
                                                                      h3: {
                                                                           text: "Premium Quality",
                                                                      },
                                                                 },
                                                                 {
                                                                      p: {
                                                                           text: "Our blocks undergo rigorous quality control to ensure consistent size, strength, and durability. We use only the best materials and manufacturing processes to deliver products that stand the test of time.",
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       div: {
                                                            className: "feature-card",
                                                            children: [
                                                                 {
                                                                      div: {
                                                                           className: "feature-icon",
                                                                           children: [
                                                                                {
                                                                                     i: { className: "fas fa-leaf" },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                                 { h3: { text: "Eco-Friendly" } },
                                                                 {
                                                                      p: {
                                                                           text: "We use sustainable manufacturing processes and recycled materials whenever possible.",
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       div: {
                                                            className: "feature-card",
                                                            children: [
                                                                 {
                                                                      div: {
                                                                           className: "feature-icon",
                                                                           children: [
                                                                                {
                                                                                     i: { className: "fas fa-truck" },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                                 { h3: { text: "Reliable Delivery" } },
                                                                 {
                                                                      p: {
                                                                           text: "On-time delivery to your construction site with our fleet of specialized trucks.",
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       div: {
                                                            className: "feature-card",
                                                            children: [
                                                                 {
                                                                      div: {
                                                                           className: "feature-icon",
                                                                           children: [
                                                                                {
                                                                                     i: { className: "fas fa-headset" },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                                 { h3: { text: "Expert Support" } },
                                                                 {
                                                                      p: {
                                                                           text: "Our team of construction specialists is available to help with product selection and technical advice.",
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

export default WhyChoose;
