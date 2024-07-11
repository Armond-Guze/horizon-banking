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

/***/ "(app-pages-browser)/./components/Sidebar.tsx":
/*!********************************!*\
  !*** ./components/Sidebar.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Sidebar = (param)=>{\n    let { user } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"sidebar\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"flex flex-col gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/\",\n                    className: \"mb-12 cursor-pointer flex items-center gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/icons/logo.svg\",\n                            width: 34,\n                            height: 34,\n                            alt: \"Horizon logo\",\n                            className: \"size-[24px] max-xl:size-14\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\Sidebar.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"sidebar-logo\",\n                            children: \"Horizon\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\Sidebar.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined),\n                _constants__WEBPACK_IMPORTED_MODULE_3__.sidebarLinks.map((item)=>{\n                    const isActive = pathname === item.route || pathname.startsWith(\"\".concat(item.route, \"/\"));\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: item.route,\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"sidebar-link\", {\n                            \"bg-bank-gradient\": isActive\n                        }),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative size-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: item.imgURL,\n                                    alt: item.label,\n                                    fill: true,\n                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)({\n                                        \"brightness-[3] invert-0\": isActive\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\Sidebar.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\Sidebar.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"sidebar-label\", {\n                                    \"!text-white\": isActive\n                                }),\n                                children: item.label\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\Sidebar.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, item.label, true, {\n                        fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\Sidebar.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, undefined);\n                }),\n                \"USER\"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\Sidebar.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\Sidebar.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTZCO0FBQ0U7QUFDWTtBQUNWO0FBQ2E7QUFFOUMsTUFBTUssVUFBVTtRQUFDLEVBQUVDLElBQUksRUFBaUI7O0lBQ3RDLE1BQU1DLFdBQVdILDREQUFXQTtJQUM1QixxQkFDRSw4REFBQ0k7UUFBUUMsV0FBVTtrQkFDakIsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDVCxpREFBSUE7b0JBQUNXLE1BQUs7b0JBQUlGLFdBQVU7O3NDQUN2Qiw4REFBQ1Isa0RBQUtBOzRCQUNKVyxLQUFJOzRCQUNKQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxLQUFJOzRCQUNKTixXQUFVOzs7Ozs7c0NBRVosOERBQUNPOzRCQUFHUCxXQUFVO3NDQUFlOzs7Ozs7Ozs7Ozs7Z0JBRzlCUCxvREFBWUEsQ0FBQ2UsR0FBRyxDQUFDLENBQUNDO29CQUNqQixNQUFNQyxXQUNKWixhQUFhVyxLQUFLRSxLQUFLLElBQUliLFNBQVNjLFVBQVUsQ0FBQyxHQUFjLE9BQVhILEtBQUtFLEtBQUssRUFBQztvQkFDL0QscUJBQ0UsOERBQUNwQixpREFBSUE7d0JBQ0hXLE1BQU1PLEtBQUtFLEtBQUs7d0JBRWhCWCxXQUFXTiw4Q0FBRUEsQ0FBQyxnQkFBZ0I7NEJBQUUsb0JBQW9CZ0I7d0JBQVM7OzBDQUU3RCw4REFBQ0c7Z0NBQUliLFdBQVU7MENBQ2IsNEVBQUNSLGtEQUFLQTtvQ0FBQ1csS0FBS00sS0FBS0ssTUFBTTtvQ0FBRVIsS0FBS0csS0FBS00sS0FBSztvQ0FBRUMsSUFBSTtvQ0FBQ2hCLFdBQVdOLDhDQUFFQSxDQUFDO3dDQUMzRCwyQkFBMkJnQjtvQ0FDN0I7Ozs7Ozs7Ozs7OzBDQUVGLDhEQUFDTztnQ0FBRWpCLFdBQVdOLDhDQUFFQSxDQUFDLGlCQUFpQjtvQ0FBQyxlQUFlZ0I7Z0NBQVE7MENBQUtELEtBQUtNLEtBQUs7Ozs7Ozs7dUJBUnBFTixLQUFLTSxLQUFLOzs7OztnQkFXckI7Z0JBQUc7Ozs7Ozs7Ozs7OztBQU1YO0dBdkNNbkI7O1FBQ2FELHdEQUFXQTs7O0tBRHhCQztBQXlDTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXIudHN4PzZiYTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBzaWRlYmFyTGlua3MgfSBmcm9tIFwiQC9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKHsgdXNlciB9OiBTaWRlcmJhclByb3BzKSA9PiB7XHJcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibWItMTIgY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCIvaWNvbnMvbG9nby5zdmdcIlxyXG4gICAgICAgICAgICB3aWR0aD17MzR9XHJcbiAgICAgICAgICAgIGhlaWdodD17MzR9XHJcbiAgICAgICAgICAgIGFsdD1cIkhvcml6b24gbG9nb1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpemUtWzI0cHhdIG1heC14bDpzaXplLTE0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2lkZWJhci1sb2dvXCI+SG9yaXpvbjwvaDE+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICB7c2lkZWJhckxpbmtzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaXNBY3RpdmUgPVxyXG4gICAgICAgICAgICBwYXRobmFtZSA9PT0gaXRlbS5yb3V0ZSB8fCBwYXRobmFtZS5zdGFydHNXaXRoKGAke2l0ZW0ucm91dGV9L2ApO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPXtpdGVtLnJvdXRlfVxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFwic2lkZWJhci1saW5rXCIsIHsgXCJiZy1iYW5rLWdyYWRpZW50XCI6IGlzQWN0aXZlIH0pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzaXplLTZcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1nVVJMfSBhbHQ9e2l0ZW0ubGFiZWx9IGZpbGwgY2xhc3NOYW1lPXtjbih7XHJcbiAgICAgICAgICAgICAgICAgICdicmlnaHRuZXNzLVszXSBpbnZlcnQtMCc6IGlzQWN0aXZlXHJcbiAgICAgICAgICAgICAgICB9KX0vPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y24oJ3NpZGViYXItbGFiZWwnLCB7XCIhdGV4dC13aGl0ZVwiIDppc0FjdGl2ZX0pfT57aXRlbS5sYWJlbH08L3A+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgVVNFUlxyXG4gICAgICA8L25hdj5cclxuICAgICAgXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJzaWRlYmFyTGlua3MiLCJjbiIsInVzZVBhdGhuYW1lIiwiU2lkZWJhciIsInVzZXIiLCJwYXRobmFtZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJuYXYiLCJocmVmIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoMSIsIm1hcCIsIml0ZW0iLCJpc0FjdGl2ZSIsInJvdXRlIiwic3RhcnRzV2l0aCIsImRpdiIsImltZ1VSTCIsImxhYmVsIiwiZmlsbCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Sidebar.tsx\n"));

/***/ })

});