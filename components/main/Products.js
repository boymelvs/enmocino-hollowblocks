const Products = () => {
     return {
          section: {
               id: "products",
               className: "section products",
               style: {
                    background: "var(--white)",
                    boxShadow: "0rem 0.1rem 1rem rgba(0, 0, 0, 0.1)",
               },
               children: [
                    {
                         div: {
                              className: "products-container",
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
                                                       h2: { text: "Our Products" },
                                                  },
                                             ],
                                        },
                                   },
                                   {
                                        div: {
                                             className: "products-grid",
                                             style: {
                                                  display: "grid",
                                                  gridTemplateColumns: "repeat(auto-fit,minmax(30rem,1fr))",
                                                  gap: "3rem",
                                                  width: "100%",
                                             },
                                             children: [
                                                  {
                                                       div: {
                                                            className: "product-card",
                                                            children: [
                                                                 {
                                                                      div: {
                                                                           className: "product-image",
                                                                           children: [
                                                                                {
                                                                                     img: {
                                                                                          src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                                                                                          alt: "Standard Hollow Blocks",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                                 {
                                                                      div: {
                                                                           className: "product-info",
                                                                           children: [
                                                                                {
                                                                                     h3: { text: "Standard Hollow Blocks" },
                                                                                },
                                                                                {
                                                                                     p: {
                                                                                          text: "Our most popular product, perfect for general construction needs. Available in various sizes and densities.",
                                                                                     },
                                                                                },
                                                                                {
                                                                                     div: { className: "price", text: "From Php12.00 per block" },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       div: {
                                                            className: "product-card",
                                                            children: [
                                                                 {
                                                                      div: {
                                                                           className: "product-image",
                                                                           children: [
                                                                                {
                                                                                     img: {
                                                                                          src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                                                                                          alt: "Standard Hollow Blocks",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                                 {
                                                                      div: {
                                                                           className: "product-info",
                                                                           children: [
                                                                                {
                                                                                     h3: { text: "Standard Hollow Blocks" },
                                                                                },
                                                                                {
                                                                                     p: {
                                                                                          text: "Our most popular product, perfect for general construction needs. Available in various sizes and densities.",
                                                                                     },
                                                                                },
                                                                                {
                                                                                     div: { className: "price", text: "From Php12.00 per block" },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       div: {
                                                            className: "product-card",
                                                            children: [
                                                                 {
                                                                      div: {
                                                                           className: "product-image",
                                                                           children: [
                                                                                {
                                                                                     img: {
                                                                                          src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                                                                                          alt: "Standard Hollow Blocks",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                                 {
                                                                      div: {
                                                                           className: "product-info",
                                                                           children: [
                                                                                {
                                                                                     h3: { text: "Standard Hollow Blocks" },
                                                                                },
                                                                                {
                                                                                     p: {
                                                                                          text: "Our most popular product, perfect for general construction needs. Available in various sizes and densities.",
                                                                                     },
                                                                                },
                                                                                {
                                                                                     div: { className: "price", text: "From Php12.00 per block" },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       div: {
                                                            className: "product-card",
                                                            children: [
                                                                 {
                                                                      div: {
                                                                           className: "product-image",
                                                                           children: [
                                                                                {
                                                                                     img: {
                                                                                          src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                                                                                          alt: "Standard Hollow Blocks",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                                 {
                                                                      div: {
                                                                           className: "product-info",
                                                                           children: [
                                                                                {
                                                                                     h3: { text: "Standard Hollow Blocks" },
                                                                                },
                                                                                {
                                                                                     p: {
                                                                                          text: "Our most popular product, perfect for general construction needs. Available in various sizes and densities.",
                                                                                     },
                                                                                },
                                                                                {
                                                                                     div: { className: "price", text: "From Php12.00 per block" },
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

export default Products;
