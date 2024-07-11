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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Sidebar = (param)=>{\n    let { user } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"sidebar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: \"/\",\n                        className: \"mb-12 cursor-pointer flex items-center gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/icons/logo.svg\",\n                                width: 34,\n                                height: 34,\n                                alt: \"Horizon logo\",\n                                className: \"size-[24px] max-xl:size-14\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\Sidebar.tsx\",\n                                lineNumber: 15,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"sidebar-logo\",\n                                children: \"Horizon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\Sidebar.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\Sidebar.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    _constants__WEBPACK_IMPORTED_MODULE_3__.sidebarLinks.map((item)=>{\n                        const isActive = pathname === item.route || pathname.startsWith(\"\".concat(item.route, \"/\"));\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: item.route,\n                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"sidebar-link\", {\n                                \"bg-bank-gradient\": isActive\n                            }),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative size-6\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: item.imgURL,\n                                        alt: item.label,\n                                        fill: true,\n                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)({\n                                            \"brightness-[3] invert-0\": isActive\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\Sidebar.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\Sidebar.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"sidebar-label\", {\n                                        \"!text-white\": isActive\n                                    }),\n                                    children: item.label\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\Sidebar.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, item.label, true, {\n                            fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\Sidebar.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined);\n                    }),\n                    \"USER\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\Sidebar.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            \"USER\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\Sidebar.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTZCO0FBQ0U7QUFDWTtBQUNWO0FBQ2E7QUFFOUMsTUFBTUssVUFBVTtRQUFDLEVBQUVDLElBQUksRUFBaUI7O0lBQ3RDLE1BQU1DLFdBQVdILDREQUFXQTtJQUM1QixxQkFDRSw4REFBQ0k7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNULGlEQUFJQTt3QkFBQ1csTUFBSzt3QkFBSUYsV0FBVTs7MENBQ3ZCLDhEQUFDUixrREFBS0E7Z0NBQ0pXLEtBQUk7Z0NBQ0pDLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JDLEtBQUk7Z0NBQ0pOLFdBQVU7Ozs7OzswQ0FFWiw4REFBQ087Z0NBQUdQLFdBQVU7MENBQWU7Ozs7Ozs7Ozs7OztvQkFHOUJQLG9EQUFZQSxDQUFDZSxHQUFHLENBQUMsQ0FBQ0M7d0JBQ2pCLE1BQU1DLFdBQ0paLGFBQWFXLEtBQUtFLEtBQUssSUFBSWIsU0FBU2MsVUFBVSxDQUFDLEdBQWMsT0FBWEgsS0FBS0UsS0FBSyxFQUFDO3dCQUMvRCxxQkFDRSw4REFBQ3BCLGlEQUFJQTs0QkFDSFcsTUFBTU8sS0FBS0UsS0FBSzs0QkFFaEJYLFdBQVdOLDhDQUFFQSxDQUFDLGdCQUFnQjtnQ0FBRSxvQkFBb0JnQjs0QkFBUzs7OENBRTdELDhEQUFDRztvQ0FBSWIsV0FBVTs4Q0FDYiw0RUFBQ1Isa0RBQUtBO3dDQUFDVyxLQUFLTSxLQUFLSyxNQUFNO3dDQUFFUixLQUFLRyxLQUFLTSxLQUFLO3dDQUFFQyxJQUFJO3dDQUFDaEIsV0FBV04sOENBQUVBLENBQUM7NENBQzNELDJCQUEyQmdCO3dDQUM3Qjs7Ozs7Ozs7Ozs7OENBRUYsOERBQUNPO29DQUFFakIsV0FBV04sOENBQUVBLENBQUMsaUJBQWlCO3dDQUFDLGVBQWVnQjtvQ0FBUTs4Q0FBS0QsS0FBS00sS0FBSzs7Ozs7OzsyQkFScEVOLEtBQUtNLEtBQUs7Ozs7O29CQVdyQjtvQkFBRzs7Ozs7OztZQUVDOzs7Ozs7O0FBSVo7R0F2Q01uQjs7UUFDYUQsd0RBQVdBOzs7S0FEeEJDO0FBeUNOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZWJhci50c3g/NmJhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHNpZGViYXJMaW5rcyB9IGZyb20gXCJAL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoeyB1c2VyIH06IFNpZGVyYmFyUHJvcHMpID0+IHtcclxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtYi0xMiBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9pY29ucy9sb2dvLnN2Z1wiXHJcbiAgICAgICAgICAgIHdpZHRoPXszNH1cclxuICAgICAgICAgICAgaGVpZ2h0PXszNH1cclxuICAgICAgICAgICAgYWx0PVwiSG9yaXpvbiBsb2dvXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l6ZS1bMjRweF0gbWF4LXhsOnNpemUtMTRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzaWRlYmFyLWxvZ29cIj5Ib3Jpem9uPC9oMT5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIHtzaWRlYmFyTGlua3MubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9XHJcbiAgICAgICAgICAgIHBhdGhuYW1lID09PSBpdGVtLnJvdXRlIHx8IHBhdGhuYW1lLnN0YXJ0c1dpdGgoYCR7aXRlbS5yb3V0ZX0vYCk7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9e2l0ZW0ucm91dGV9XHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXCJzaWRlYmFyLWxpbmtcIiwgeyBcImJnLWJhbmstZ3JhZGllbnRcIjogaXNBY3RpdmUgfSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHNpemUtNlwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pbWdVUkx9IGFsdD17aXRlbS5sYWJlbH0gZmlsbCBjbGFzc05hbWU9e2NuKHtcclxuICAgICAgICAgICAgICAgICAgJ2JyaWdodG5lc3MtWzNdIGludmVydC0wJzogaXNBY3RpdmVcclxuICAgICAgICAgICAgICAgIH0pfS8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbignc2lkZWJhci1sYWJlbCcsIHtcIiF0ZXh0LXdoaXRlXCIgOmlzQWN0aXZlfSl9PntpdGVtLmxhYmVsfTwvcD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICBVU0VSXHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICBVU0VSXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJzaWRlYmFyTGlua3MiLCJjbiIsInVzZVBhdGhuYW1lIiwiU2lkZWJhciIsInVzZXIiLCJwYXRobmFtZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJuYXYiLCJocmVmIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoMSIsIm1hcCIsIml0ZW0iLCJpc0FjdGl2ZSIsInJvdXRlIiwic3RhcnRzV2l0aCIsImRpdiIsImltZ1VSTCIsImxhYmVsIiwiZmlsbCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Sidebar.tsx\n"));

/***/ })

});