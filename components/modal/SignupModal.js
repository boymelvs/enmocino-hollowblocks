const SignupModal = (props, { getState, setState }) => {
     return {
          div: {
               id: "signupModal",
               className: "modal",
               style: {
                    display: () => (getState("isSignupModalOpen", false) ? "flex" : "none"),
                    opacity: () => (getState("isSignupModalOpen", false) ? "1" : "0"),
               },
               children: [
                    {
                         div: {
                              className: "modal-content",
                              style: {
                                   transform: () => (getState("isSignupModalOpen", false) ? "translateY(0)" : "translateY(0.2rem)"),
                                   transition: "transform 300ms",
                              },
                              children: [
                                   {
                                        span: {
                                             id: "closeSignup",
                                             className: "close-modal",
                                             text: "X",
                                             onClick: () => {
                                                  setState("isSignupModalOpen", false);
                                             },
                                        },
                                   },

                                   {
                                        div: {
                                             className: "modal-title",
                                             children: [
                                                  {
                                                       h2: { text: "Create Account" },
                                                  },
                                             ],
                                        },
                                   },

                                   {
                                        form: {
                                             id: "signupForm",
                                             children: [
                                                  {
                                                       div: {
                                                            className: "form-group",
                                                            children: [
                                                                 {
                                                                      label: {
                                                                           for: "signupName",
                                                                           text: "Full Name",
                                                                      },
                                                                 },
                                                                 {
                                                                      input: {
                                                                           id: "signupName",
                                                                           className: "form-control",
                                                                           type: "text",
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
                                                                           for: "signupEmail",
                                                                           text: "Email Address",
                                                                      },
                                                                 },
                                                                 {
                                                                      input: {
                                                                           id: "signupEmail",
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
                                                                      label: {
                                                                           for: "signupPhone",
                                                                           text: "Phone Number",
                                                                      },
                                                                 },
                                                                 {
                                                                      input: {
                                                                           id: "signupPhone",
                                                                           className: "form-control",
                                                                           type: "tel",
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
                                                                           for: "signupPassword",
                                                                           text: "Password",
                                                                      },
                                                                 },
                                                                 {
                                                                      input: {
                                                                           id: "signupPassword",
                                                                           className: "form-control",
                                                                           type: "password",
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
                                                                           for: "signupConfirm",
                                                                           text: "Confirm Password",
                                                                      },
                                                                 },
                                                                 {
                                                                      input: {
                                                                           id: "signupConfirm",
                                                                           className: "form-control",
                                                                           type: "password",
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
                                                                           for: "signupRole",
                                                                           text: "Account Type",
                                                                      },
                                                                 },
                                                                 {
                                                                      select: {
                                                                           id: "signupRole",
                                                                           className: "form-control",
                                                                           required: true,
                                                                           children: [
                                                                                {
                                                                                     option: { value: "", text: "Select Account Type" },
                                                                                },
                                                                                {
                                                                                     option: { value: "user", text: "Regular User" },
                                                                                },
                                                                                {
                                                                                     option: { value: "admin", text: "Administrator" },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       button: {
                                                            type: "submit",
                                                            className: "submit-btn",
                                                            text: "Create Account",
                                                       },
                                                  },

                                                  {
                                                       div: {
                                                            className: "form-footer",
                                                            children: [
                                                                 "Already have an account? ",
                                                                 {
                                                                      a: {
                                                                           href: "#",
                                                                           id: "switchToLogin",
                                                                           text: "Login Here",
                                                                           onClick: (e) => {
                                                                                e.preventDefault();
                                                                                setState("isSignupModalOpen", false);
                                                                                setState("isLoginModalOpen", true);
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

export default SignupModal;
