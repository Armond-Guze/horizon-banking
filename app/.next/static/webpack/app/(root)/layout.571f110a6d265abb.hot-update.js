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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/sheet */ \"(app-pages-browser)/./components/ui/sheet.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst MobileNav = (param)=>{\n    let { user } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-full max-w-264px\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_1__.Sheet, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_1__.SheetTrigger, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        src: \"/icons/hamburger.svg\",\n                        width: 30,\n                        height: 30,\n                        alt: \"menu\",\n                        className: \"cursor-pointer\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 23\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_1__.SheetContent, {\n                    side: \"left\",\n                    className: \"border-none bg-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            href: \"/\",\n                            className: \"cursor-pointer flex items-center gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    src: \"/icons/logo.svg\",\n                                    width: 34,\n                                    height: 34,\n                                    alt: \"Horizon logo\",\n                                    className: \"size-[24px] max-xl:size-14\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"sidebar-logo\",\n                                    children: \"Horizon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        }, undefined),\n                        _constants__WEBPACK_IMPORTED_MODULE_2__.sidebarLinks.map((item)=>{\n                            const isActive = pathname === item.route || pathname.startsWith(\"\".concat(item.route, \"/\"));\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                href: item.route,\n                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(\"sidebar-link\", {\n                                    \"bg-bank-gradient\": isActive\n                                }),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative size-6\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            src: item.imgURL,\n                                            alt: item.label,\n                                            fill: true,\n                                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)({\n                                                \"brightness-[3] invert-0\": isActive\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(\"sidebar-label\", {\n                                            \"!text-white\": isActive\n                                        }),\n                                        children: item.label\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, item.label, true, {\n                                fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\MobileNav.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MobileNav, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname\n    ];\n});\n_c = MobileNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileNav);\nvar _c;\n$RefreshReg$(_c, \"MobileNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTW9iaWxlTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBUytCO0FBQ1k7QUFDVjtBQUNIO0FBQ0Q7QUFDaUI7QUFFOUMsTUFBTVEsWUFBWTtRQUFDLEVBQUVDLElBQUksRUFBa0I7O0lBQ3pDLE1BQU1DLFdBQVdILDREQUFXQTtJQUM1QixxQkFDRSw4REFBQ0k7UUFBUUMsV0FBVTtrQkFDakIsNEVBQUNaLHVEQUFLQTs7OEJBQ0osOERBQUNFLDhEQUFZQTs4QkFBQyw0RUFBQ0csa0RBQUtBO3dCQUFDUSxLQUFJO3dCQUF1QkMsT0FBTzt3QkFBSUMsUUFBUTt3QkFBSUMsS0FBSTt3QkFBT0osV0FBVTs7Ozs7Ozs7Ozs7OEJBQzVGLDhEQUFDWCw4REFBWUE7b0JBQUNnQixNQUFLO29CQUFPTCxXQUFVOztzQ0FDcEMsOERBQUNOLGlEQUFJQTs0QkFBQ1ksTUFBSzs0QkFBSU4sV0FBVTs7OENBQ3ZCLDhEQUFDUCxrREFBS0E7b0NBQ0pRLEtBQUk7b0NBQ0pDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JDLEtBQUk7b0NBQ0pKLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ087b0NBQUdQLFdBQVU7OENBQWU7Ozs7Ozs7Ozs7Ozt3QkFHOUJULG9EQUFZQSxDQUFDaUIsR0FBRyxDQUFDLENBQUNDOzRCQUNqQixNQUFNQyxXQUNKWixhQUFhVyxLQUFLRSxLQUFLLElBQUliLFNBQVNjLFVBQVUsQ0FBQyxHQUFjLE9BQVhILEtBQUtFLEtBQUssRUFBQzs0QkFDL0QscUJBQ0UsOERBQUNqQixpREFBSUE7Z0NBQ0hZLE1BQU1HLEtBQUtFLEtBQUs7Z0NBRWhCWCxXQUFXUiw4Q0FBRUEsQ0FBQyxnQkFBZ0I7b0NBQUUsb0JBQW9Ca0I7Z0NBQVM7O2tEQUU3RCw4REFBQ0c7d0NBQUliLFdBQVU7a0RBQ2IsNEVBQUNQLGtEQUFLQTs0Q0FBQ1EsS0FBS1EsS0FBS0ssTUFBTTs0Q0FBRVYsS0FBS0ssS0FBS00sS0FBSzs0Q0FBRUMsSUFBSTs0Q0FBQ2hCLFdBQVdSLDhDQUFFQSxDQUFDO2dEQUMzRCwyQkFBMkJrQjs0Q0FDN0I7Ozs7Ozs7Ozs7O2tEQUVGLDhEQUFDTzt3Q0FBRWpCLFdBQVdSLDhDQUFFQSxDQUFDLGlCQUFpQjs0Q0FBQyxlQUFla0I7d0NBQVE7a0RBQUtELEtBQUtNLEtBQUs7Ozs7Ozs7K0JBUnBFTixLQUFLTSxLQUFLOzs7Ozt3QkFXckI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtSO0dBeENNbkI7O1FBQ2FELHdEQUFXQTs7O0tBRHhCQztBQTBDTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vYmlsZU5hdi50c3g/YWI3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHtcclxuICBTaGVldCxcclxuICBTaGVldENvbnRlbnQsXHJcbiAgU2hlZXREZXNjcmlwdGlvbixcclxuICBTaGVldEhlYWRlcixcclxuICBTaGVldFRpdGxlLFxyXG4gIFNoZWV0VHJpZ2dlcixcclxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NoZWV0XCI7XHJcbmltcG9ydCB7IHNpZGViYXJMaW5rcyB9IGZyb20gXCJAL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuY29uc3QgTW9iaWxlTmF2ID0gKHsgdXNlciB9OiBNb2JpbGVOYXZQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTI2NHB4XCI+XHJcbiAgICAgIDxTaGVldD5cclxuICAgICAgICA8U2hlZXRUcmlnZ2VyPjxJbWFnZSBzcmM9XCIvaWNvbnMvaGFtYnVyZ2VyLnN2Z1wiIHdpZHRoPXszMH0gaGVpZ2h0PXszMH0gYWx0PVwibWVudVwiIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIvPjwvU2hlZXRUcmlnZ2VyPlxyXG4gICAgICAgIDxTaGVldENvbnRlbnQgc2lkZT1cImxlZnRcIiBjbGFzc05hbWU9XCJib3JkZXItbm9uZSBiZy13aGl0ZVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCIvaWNvbnMvbG9nby5zdmdcIlxyXG4gICAgICAgICAgICB3aWR0aD17MzR9XHJcbiAgICAgICAgICAgIGhlaWdodD17MzR9XHJcbiAgICAgICAgICAgIGFsdD1cIkhvcml6b24gbG9nb1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpemUtWzI0cHhdIG1heC14bDpzaXplLTE0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2lkZWJhci1sb2dvXCI+SG9yaXpvbjwvaDE+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICB7c2lkZWJhckxpbmtzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaXNBY3RpdmUgPVxyXG4gICAgICAgICAgICBwYXRobmFtZSA9PT0gaXRlbS5yb3V0ZSB8fCBwYXRobmFtZS5zdGFydHNXaXRoKGAke2l0ZW0ucm91dGV9L2ApO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPXtpdGVtLnJvdXRlfVxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFwic2lkZWJhci1saW5rXCIsIHsgXCJiZy1iYW5rLWdyYWRpZW50XCI6IGlzQWN0aXZlIH0pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzaXplLTZcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1nVVJMfSBhbHQ9e2l0ZW0ubGFiZWx9IGZpbGwgY2xhc3NOYW1lPXtjbih7XHJcbiAgICAgICAgICAgICAgICAgICdicmlnaHRuZXNzLVszXSBpbnZlcnQtMCc6IGlzQWN0aXZlXHJcbiAgICAgICAgICAgICAgICB9KX0vPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y24oJ3NpZGViYXItbGFiZWwnLCB7XCIhdGV4dC13aGl0ZVwiIDppc0FjdGl2ZX0pfT57aXRlbS5sYWJlbH08L3A+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPC9TaGVldENvbnRlbnQ+XHJcbiAgICAgIDwvU2hlZXQ+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU5hdjtcclxuIl0sIm5hbWVzIjpbIlNoZWV0IiwiU2hlZXRDb250ZW50IiwiU2hlZXRUcmlnZ2VyIiwic2lkZWJhckxpbmtzIiwiY24iLCJJbWFnZSIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsIk1vYmlsZU5hdiIsInVzZXIiLCJwYXRobmFtZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNpZGUiLCJocmVmIiwiaDEiLCJtYXAiLCJpdGVtIiwiaXNBY3RpdmUiLCJyb3V0ZSIsInN0YXJ0c1dpdGgiLCJkaXYiLCJpbWdVUkwiLCJsYWJlbCIsImZpbGwiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MobileNav.tsx\n"));

/***/ })

});