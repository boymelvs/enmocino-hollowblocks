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
                                                                                          src: "./assets/img/hollowblocks.jpg",
                                                                                          alt: "Hollow Blocks",
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
                                                                                     h3: { text: "Hollow Blocks" },
                                                                                },
                                                                                {
                                                                                     p: {
                                                                                          text: "Our most popular product, perfect for general construction needs. Available in 4 inches size.",
                                                                                     },
                                                                                },
                                                                                {
                                                                                     div: { className: "price", text: "Php 12.00 per block" },
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
                                                                                          src: "./assets/img/mayon_cement.jpg",
                                                                                          alt: "Mayon Cement",
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
                                                                                     h3: { text: "Mayon Cement" },
                                                                                },
                                                                                {
                                                                                     p: {
                                                                                          text: "Perfect for general construction needs.",
                                                                                     },
                                                                                },
                                                                                {
                                                                                     div: { className: "price", text: "Php 240.00 per bag" },
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
                                                                                          src: "./assets/img/sand.jpg",
                                                                                          alt: "sand aggregates",
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
                                                                                     h3: { text: "Aggregates" },
                                                                                },
                                                                                {
                                                                                     p: {
                                                                                          text: "Perfect for general construction needs.",
                                                                                     },
                                                                                },
                                                                                {
                                                                                     div: { className: "price", text: "Php 900.00 per cubic meter" },
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
