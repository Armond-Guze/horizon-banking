"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/layout",{

/***/ "(app-pages-browser)/./components/MobileNav.tsx":
/*!**********************************!*\
  !*** ./components/MobileNav.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/sheet */ \"(app-pages-browser)/./components/ui/sheet.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst MobileNav = (param)=>{\n    let { user } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-full max-w-264px\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_1__.Sheet, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_1__.SheetTrigger, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        src: \"/icons/hamburger.svg\",\n                        width: 30,\n                        height: 30,\n                        alt: \"menu\",\n                        className: \"cursor-pointer\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 23\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_1__.SheetContent, {\n                    side: \"left\",\n                    className: \"border-none bg-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            href: \"/\",\n                            className: \"cursor-pointer flex items-center gap-1 px-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    src: \"/icons/logo.svg\",\n                                    width: 34,\n                                    height: 34,\n                                    alt: \"Horizon logo\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-26 font-ibm-plex-serif font-bold text-black-1\",\n                                    children: \"Horizon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        }, undefined),\n                        _constants__WEBPACK_IMPORTED_MODULE_2__.sidebarLinks.map((item)=>{\n                            const isActive = pathname === item.route || pathname.startsWith(\"\".concat(item.route, \"/\"));\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                href: item.route,\n                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(\"sidebar-link\", {\n                                    \"bg-bank-gradient\": isActive\n                                }),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative size-6\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            src: item.imgURL,\n                                            alt: item.label,\n                                            fill: true,\n                                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)({\n                                                \"brightness-[3] invert-0\": isActive\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(\"sidebar-label\", {\n                                            \"!text-white\": isActive\n                                        }),\n                                        children: item.label\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, item.label, true, {\n                                fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MobileNav, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname\n    ];\n});\n_c = MobileNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileNav);\nvar _c;\n$RefreshReg$(_c, \"MobileNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTW9iaWxlTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBUytCO0FBQ1k7QUFDVjtBQUNIO0FBQ0Q7QUFDaUI7QUFFOUMsTUFBTVEsWUFBWTtRQUFDLEVBQUVDLElBQUksRUFBa0I7O0lBQ3pDLE1BQU1DLFdBQVdILDREQUFXQTtJQUM1QixxQkFDRSw4REFBQ0k7UUFBUUMsV0FBVTtrQkFDakIsNEVBQUNaLHVEQUFLQTs7OEJBQ0osOERBQUNFLDhEQUFZQTs4QkFBQyw0RUFBQ0csa0RBQUtBO3dCQUFDUSxLQUFJO3dCQUF1QkMsT0FBTzt3QkFBSUMsUUFBUTt3QkFBSUMsS0FBSTt3QkFBT0osV0FBVTs7Ozs7Ozs7Ozs7OEJBQzVGLDhEQUFDWCw4REFBWUE7b0JBQUNnQixNQUFLO29CQUFPTCxXQUFVOztzQ0FDcEMsOERBQUNOLGlEQUFJQTs0QkFBQ1ksTUFBSzs0QkFBSU4sV0FBVTs7OENBQ3ZCLDhEQUFDUCxrREFBS0E7b0NBQ0pRLEtBQUk7b0NBQ0pDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JDLEtBQUk7Ozs7Ozs4Q0FFTiw4REFBQ0c7b0NBQUdQLFdBQVU7OENBQXFEOzs7Ozs7Ozs7Ozs7d0JBR3BFVCxvREFBWUEsQ0FBQ2lCLEdBQUcsQ0FBQyxDQUFDQzs0QkFDakIsTUFBTUMsV0FDSlosYUFBYVcsS0FBS0UsS0FBSyxJQUFJYixTQUFTYyxVQUFVLENBQUMsR0FBYyxPQUFYSCxLQUFLRSxLQUFLLEVBQUM7NEJBQy9ELHFCQUNFLDhEQUFDakIsaURBQUlBO2dDQUNIWSxNQUFNRyxLQUFLRSxLQUFLO2dDQUVoQlgsV0FBV1IsOENBQUVBLENBQUMsZ0JBQWdCO29DQUFFLG9CQUFvQmtCO2dDQUFTOztrREFFN0QsOERBQUNHO3dDQUFJYixXQUFVO2tEQUNiLDRFQUFDUCxrREFBS0E7NENBQUNRLEtBQUtRLEtBQUtLLE1BQU07NENBQUVWLEtBQUtLLEtBQUtNLEtBQUs7NENBQUVDLElBQUk7NENBQUNoQixXQUFXUiw4Q0FBRUEsQ0FBQztnREFDM0QsMkJBQTJCa0I7NENBQzdCOzs7Ozs7Ozs7OztrREFFRiw4REFBQ087d0NBQUVqQixXQUFXUiw4Q0FBRUEsQ0FBQyxpQkFBaUI7NENBQUMsZUFBZWtCO3dDQUFRO2tEQUFLRCxLQUFLTSxLQUFLOzs7Ozs7OytCQVJwRU4sS0FBS00sS0FBSzs7Ozs7d0JBV3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLUjtHQXZDTW5COztRQUNhRCx3REFBV0E7OztLQUR4QkM7QUF5Q04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2JpbGVOYXYudHN4P2FiNzAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7XHJcbiAgU2hlZXQsXHJcbiAgU2hlZXRDb250ZW50LFxyXG4gIFNoZWV0RGVzY3JpcHRpb24sXHJcbiAgU2hlZXRIZWFkZXIsXHJcbiAgU2hlZXRUaXRsZSxcclxuICBTaGVldFRyaWdnZXIsXHJcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zaGVldFwiO1xyXG5pbXBvcnQgeyBzaWRlYmFyTGlua3MgfSBmcm9tIFwiQC9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmNvbnN0IE1vYmlsZU5hdiA9ICh7IHVzZXIgfTogTW9iaWxlTmF2UHJvcHMpID0+IHtcclxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy0yNjRweFwiPlxyXG4gICAgICA8U2hlZXQ+XHJcbiAgICAgICAgPFNoZWV0VHJpZ2dlcj48SW1hZ2Ugc3JjPVwiL2ljb25zL2hhbWJ1cmdlci5zdmdcIiB3aWR0aD17MzB9IGhlaWdodD17MzB9IGFsdD1cIm1lbnVcIiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiLz48L1NoZWV0VHJpZ2dlcj5cclxuICAgICAgICA8U2hlZXRDb250ZW50IHNpZGU9XCJsZWZ0XCIgY2xhc3NOYW1lPVwiYm9yZGVyLW5vbmUgYmctd2hpdGVcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHB4LTRcIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCIvaWNvbnMvbG9nby5zdmdcIlxyXG4gICAgICAgICAgICB3aWR0aD17MzR9XHJcbiAgICAgICAgICAgIGhlaWdodD17MzR9XHJcbiAgICAgICAgICAgIGFsdD1cIkhvcml6b24gbG9nb1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMjYgZm9udC1pYm0tcGxleC1zZXJpZiBmb250LWJvbGQgdGV4dC1ibGFjay0xXCI+SG9yaXpvbjwvaDE+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICB7c2lkZWJhckxpbmtzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaXNBY3RpdmUgPVxyXG4gICAgICAgICAgICBwYXRobmFtZSA9PT0gaXRlbS5yb3V0ZSB8fCBwYXRobmFtZS5zdGFydHNXaXRoKGAke2l0ZW0ucm91dGV9L2ApO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPXtpdGVtLnJvdXRlfVxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFwic2lkZWJhci1saW5rXCIsIHsgXCJiZy1iYW5rLWdyYWRpZW50XCI6IGlzQWN0aXZlIH0pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzaXplLTZcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1nVVJMfSBhbHQ9e2l0ZW0ubGFiZWx9IGZpbGwgY2xhc3NOYW1lPXtjbih7XHJcbiAgICAgICAgICAgICAgICAgICdicmlnaHRuZXNzLVszXSBpbnZlcnQtMCc6IGlzQWN0aXZlXHJcbiAgICAgICAgICAgICAgICB9KX0vPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y24oJ3NpZGViYXItbGFiZWwnLCB7XCIhdGV4dC13aGl0ZVwiIDppc0FjdGl2ZX0pfT57aXRlbS5sYWJlbH08L3A+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPC9TaGVldENvbnRlbnQ+XHJcbiAgICAgIDwvU2hlZXQ+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU5hdjtcclxuIl0sIm5hbWVzIjpbIlNoZWV0IiwiU2hlZXRDb250ZW50IiwiU2hlZXRUcmlnZ2VyIiwic2lkZWJhckxpbmtzIiwiY24iLCJJbWFnZSIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsIk1vYmlsZU5hdiIsInVzZXIiLCJwYXRobmFtZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNpZGUiLCJocmVmIiwiaDEiLCJtYXAiLCJpdGVtIiwiaXNBY3RpdmUiLCJyb3V0ZSIsInN0YXJ0c1dpdGgiLCJkaXYiLCJpbWdVUkwiLCJsYWJlbCIsImZpbGwiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MobileNav.tsx\n"));

/***/ })

});