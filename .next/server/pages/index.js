(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 714:
/***/ ((module) => {

// Exports
module.exports = {
	"circle": "home_circle__zuMak",
	"circle__inner": "home_circle__inner__WIDwK",
	"circle__image": "home_circle__image__mVW2l",
	"rotating": "home_rotating__pgBJd"
};


/***/ }),

/***/ 280:
/***/ ((module) => {

// Exports
module.exports = {
	"waitlist": "waitlist_waitlist__9aXab",
	"waitlist__form": "waitlist_waitlist__form__d_Gfn"
};


/***/ }),

/***/ 484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: external "lottie-react"
const external_lottie_react_namespaceObject = require("lottie-react");
// EXTERNAL MODULE: ./styles/home.module.scss
var home_module = __webpack_require__(714);
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./styles/waitlist.module.scss
var waitlist_module = __webpack_require__(280);
var waitlist_module_default = /*#__PURE__*/__webpack_require__.n(waitlist_module);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./components/icons.js

function Arrow(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M10.665 2.628a.5.5 0 0 1 .707.038l4.5 5a.5.5 0 0 1 0 .668l-4.5 5a.5.5 0 0 1-.744-.668l3.75-4.166H.5a.5.5 0 1 1 0-1h13.877l-3.749-4.166a.5.5 0 0 1 .037-.706Z",
            fill: "currentColor"
        })
    }));
}
function Check(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
        })
    }));
}
function Loading(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                style: {
                    opacity: 0.25
                },
                cx: 12,
                cy: 12,
                r: 10,
                stroke: "currentColor",
                strokeWidth: 4
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    opacity: 0.75
                },
                fill: "currentColor",
                d: "M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            })
        ]
    }));
}
function Twitter(props) {
    return(/*#__PURE__*/ _jsx("svg", {
        width: 20,
        height: 20,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M6.29 18.333c7.547 0 11.675-6.411 11.675-11.971 0-.182-.004-.364-.012-.544A8.466 8.466 0 0 0 20 3.639a8.025 8.025 0 0 1-2.356.663 4.205 4.205 0 0 0 1.804-2.327 8.107 8.107 0 0 1-2.606 1.02 4.052 4.052 0 0 0-2.995-1.329c-2.266 0-4.103 1.885-4.103 4.207 0 .33.036.652.106.96-3.41-.176-6.434-1.85-8.458-4.396A4.278 4.278 0 0 0 .836 4.55c0 1.46.725 2.749 1.826 3.503a3.996 3.996 0 0 1-1.858-.526v.053c0 2.038 1.414 3.74 3.291 4.125a4.013 4.013 0 0 1-1.853.072c.522 1.672 2.037 2.888 3.833 2.922A8.104 8.104 0 0 1 0 16.443a11.407 11.407 0 0 0 6.29 1.89",
            fill: "#fff"
        })
    }));
}
function Github(props) {
    return(/*#__PURE__*/ _jsx("svg", {
        width: 20,
        height: 20,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M10 0C4.478 0 0 4.59 0 10.253c0 4.53 2.865 8.374 6.839 9.73.5.094.683-.223.683-.494 0-.244-.01-1.052-.014-1.909-2.782.62-3.369-1.21-3.369-1.21-.455-1.185-1.11-1.5-1.11-1.5-.907-.636.068-.623.068-.623 1.005.072 1.533 1.056 1.533 1.056.892 1.568 2.34 1.115 2.91.853.09-.663.35-1.115.635-1.371-2.221-.26-4.556-1.139-4.556-5.067 0-1.12.39-2.034 1.03-2.752-.103-.259-.446-1.302.097-2.714 0 0 .84-.275 2.751 1.051A9.363 9.363 0 0 1 10 4.958c.85.004 1.706.118 2.505.345 1.909-1.326 2.747-1.05 2.747-1.05.545 1.411.202 2.454.098 2.713.642.718 1.03 1.632 1.03 2.752 0 3.938-2.34 4.805-4.566 5.059.358.318.678.942.678 1.898 0 1.372-.012 2.476-.012 2.814 0 .273.18.593.687.492 3.971-1.357 6.833-5.2 6.833-9.728C20 4.59 15.523 0 10 0Z",
            fill: "#fff"
        })
    }));
}
function Dribbble(props) {
    return(/*#__PURE__*/ _jsx("svg", {
        width: 20,
        height: 20,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10c5.51 0 10-4.48 10-10S15.51 0 10 0Zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.4 25.4 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362ZM10 1.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.686 8.686 0 0 1 10 1.475Zm-3.633.803a53.9 53.9 0 0 1 3.167 4.935c-3.992 1.062-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975ZM1.453 10.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 0 1-2.19-5.705ZM10 18.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 0 1 1.823 6.475 8.4 8.4 0 0 1-3.341.684Zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715Z",
            fill: "#fff"
        })
    }));
}

;// CONCATENATED MODULE: ./components/waitlist.js





function Waitlist() {
    const recaptchaRef = (0,external_react_.useRef)();
    const emailRef = (0,external_react_.useRef)();
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: result , 1: setResult  } = (0,external_react_.useState)({});
    const { 0: membersLoading , 1: setMembersLoading  } = (0,external_react_.useState)(false);
    const { 0: memberCount , 1: setMemberCount  } = (0,external_react_.useState)({});
    const handleSubmit = async (event)=>{
        event.preventDefault();
        stop();
        if (!event.target.email.value) {
            emailRef.current.focus();
        } else {
            setLoading(true);
            setResult({});
            external_axios_default().post("/api/join", {
                email: event.target.email.value
            }).then((response)=>{
                setResult(response.data);
                setLoading(false);
            }).catch((error)=>{
                setResult({
                    success: false,
                    message: "Something went wrong."
                });
                setLoading(false);
            });
        }
    };
    const members = ()=>{
        // Fetch members list from api
        setMembersLoading(true);
        setResult({});
        external_axios_default().get("/api/members").then((res)=>{
            setMemberCount(res.data);
            setMembersLoading(false);
        }).catch((err)=>{
            setMemberCount({
                success: false,
                message: "Member fetch failed."
            });
            setMembersLoading(false);
        });
    };
    (0,external_react_.useEffect)(()=>{
        members();
        console.log("Called members");
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (waitlist_module_default()).waitlist,
        "data-aos": "fade-up",
        "data-aos-delay": 1400,
        "data-aos-anchor": "body",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col text-base text-white",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "font-medium",
                        children: [
                            "Join our waitlist!  ",
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "text-white text-opacity-50",
                                children: [
                                    "• ",
                                    memberCount?.success && memberCount?.message || "Member fetch failed.",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-white text-opacity-30",
                                        children: "members are currently waiting!"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-white text-opacity-30 mt-2",
                        children: "Sign up for our waitlist for a chance to gain early-access to our product!"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        className: (waitlist_module_default()).waitlist__form,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                ref: emailRef,
                                type: "email",
                                name: "email",
                                id: "email",
                                autoComplete: "email",
                                placeholder: "Email address",
                                disabled: loading || result?.success,
                                value: result?.success && result?.message || emailRef.value
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                type: "submit",
                                className: [
                                    loading || result?.success ? "hover:bg-transparent cursor-default" : "",
                                    result?.success ? "pointer-events-none" : "", 
                                ].join(" "),
                                children: [
                                    !loading && (!result?.success && /*#__PURE__*/ jsx_runtime_.jsx(Arrow, {
                                        className: "w-4 h-4 text-white"
                                    }) || result?.success && /*#__PURE__*/ jsx_runtime_.jsx(Check, {
                                        className: "w-4 h-4 text-white"
                                    })),
                                    loading && /*#__PURE__*/ jsx_runtime_.jsx(Loading, {
                                        className: "w-4 h-4 text-white animate-spin"
                                    })
                                ]
                            })
                        ]
                    }),
                    !loading && result?.message && !result?.success && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-2.5 ml-3 text-xs text-red-500",
                        children: result.message
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/index.js



// import { Dribbble, Github, Twitter } from "../components/icons";


function Content() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center gap-4 text-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ContentLogo, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-white text-opacity-50 text-md mt-4 -mb-2 leading-6",
                "data-aos": "fade-up",
                "data-aos-delay": 300,
                "data-aos-anchor": "body",
                children: "Get Ready for the Launch"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-white text-opacity-75 text-lg leading-6",
                "data-aos": "fade-up",
                "data-aos-delay": 300,
                "data-aos-anchor": "body",
                children: "Stay tuned for the launch of Gradison, which will bring state-of-the-art AI capabilities to your fingertips. Join our waitlist to know when we're live!"
            })
        ]
    }));
}
function ContentLogo() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center gap-1 pointer-events-none select-none",
        "data-aos": "fade-up",
        "data-aos-anchor": "body",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: "/favicon.png",
                width: 100,
                height: 100,
                alt: "Gradison Logo"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-3xl font-bold tracking-[0.0080em] -mt-4",
                children: "Gradison"
            })
        ]
    }));
}
// function ContentSocial() {
//   let social = [
//     {
//       icon: Twitter,
//       url: 'https://twitter.com/revolicon',
//     },
//     {
//       icon: Github,
//       url: 'https://github.com/revolicon',
//     },
//     {
//       icon: Dribbble,
//       url: 'https://dribbble.com/revolicon',
//     }
//   ]
//   return (
//     <div className="flex gap-3">
//       {social.map((item, index) => (
//         <a
//           href={item.url}
//           key={index}
//           target="_blank"
//           rel="noreferrer"
//           className="h-10 w-10 flex items-center justify-center rounded-full transition-all duration-300 bg-white bg-opacity-0 ring-1 ring-white ring-inset ring-opacity-0 hover:ring-opacity-20 hover:bg-opacity-10"
//         >
//           <item.icon
//             width="20"
//             height="20"
//           />
//         </a>
//       ))}
//     </div>
//   )
// }
// function Creators() {
//   return (
//     <div
//       className="flex items-center gap-3"
//       data-aos="fade-up"
//       data-aos-delay={1700}
//       data-aos-anchor="body"
//     >
//       <CreatorsItem link="https://github.com/trifledmatter" badge="Founder, Developer" name="Ethan Pelletier"/>
//     </div>
//   )
// }
// function CreatorsItem({ name, link, badge }) {
//   return (
//     <div className="flex gap-1">
//       <span className="hidden sm:inline text-white text-opacity-25">{badge}</span>
//       <a
//         className="text-white text-opacity-50 hover:text-opacity-100 transition-colors duration-200"
//         href={link}
//         target="_blank"
//         rel="noreferrer"
//       >{name}</a>
//     </div>
//   )
// }
function Circle() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (home_module_default()).circle,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (home_module_default()).circle__inner,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (home_module_default()).circle__image,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: "/circle.jpg",
                    alt: "Background Effect",
                    width: 1920 * 8,
                    height: 1920 * 8,
                    loading: "eager",
                    draggable: false,
                    unoptimized: true,
                    quality: 100
                })
            })
        })
    }));
}
function Home() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Circle, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-full flex flex-col justify-center items-center overflow-hidden px-4 relative",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "max-w-[552px] w-full flex flex-col items-center gap-[72px]",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Content, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-col items-center gap-6 w-full",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Waitlist, {})
                        })
                    ]
                })
            })
        ]
    }));
};


/***/ }),

/***/ 28:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 18:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(484)));
module.exports = __webpack_exports__;

})();