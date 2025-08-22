const LoginModal = (props, { getState, setState }) => {
     return {
          div: {
               id: "loginModal",
               className: "modal",
               style: {
                    display: () => (getState("isLoginModalOpen", false) ? "flex" : "none"),
                    opacity: () => (getState("isLoginModalOpen", false) ? "1" : "0"),
               },
               children: [
                    {
                         div: {
                              className: "modal-content",
                              style: {
                                   transform: () => (getState("isLoginModalOpen", false) ? "translateY(0)" : "translateY(0.2rem)"),
                                   transition: "transform 300ms",
                              },
                              children: [
                                   {
                                        span: {
                                             id: "closeLogin",
                                             className: "close-modal",
                                             text: "X",
                                             onClick: () => {
                                                  setState("isLoginModalOpen", false);
                                             },
                                        },
                                   },
                                   {
                                        div: {
                                             className: "modal-title",
                                             children: [
                                                  {
                                                       h2: { text: "Welcome Back!" },
                                                  },
                                                  {
                                                       p: { text: "Login to your account to access special features." },
                                                  },
                                             ],
                                        },
                                   },
                                   {
                                        form: {
                                             id: "loginForm",
                                             children: [
                                                  {
                                                       div: {
                                                            className: "form-group",
                                                            children: [
                                                                 {
                                                                      label: { for: "loginEmail", text: "Email Address" },
                                                                 },
                                                                 {
                                                                      input: {
                                                                           id: "loginEmail",
                                                                           className: "form-control",
                                                                           type: "email",
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
                                                                      label: { for: "loginPassword", text: "Password" },
                                                                 },
                                                                 {
                                                                      input: {
                                                                           id: "loginPassword",
                                                                           className: "form-control",
                                                                           type: "password",
                                                                           required: true,
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       button: {
                                                            className: "submit-btn",
                                                            type: "submit",
                                                            text: "Login",
                                                       },
                                                  },
                                                  {
                                                       div: {
                                                            className: "form-footer",
                                                            children: [
                                                                 "Don't have an account? ",
                                                                 {
                                                                      a: {
                                                                           href: "#",
                                                                           id: "switchToSignup",
                                                                           text: "Sign Up here",
                                                                           onclick: (e) => {
                                                                                e.preventDefault();
                                                                                setState("isSignupModalOpen", true);
                                                                                setState("isLoginModalOpen", false);
                                                                           },
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

export default LoginModal;
