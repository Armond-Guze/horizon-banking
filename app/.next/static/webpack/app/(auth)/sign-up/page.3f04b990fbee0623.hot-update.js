"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/sign-up/page",{

/***/ "(app-pages-browser)/./components/AuthForm.tsx":
/*!*********************************!*\
  !*** ./components/AuthForm.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst formSchema = zod__WEBPACK_IMPORTED_MODULE_5__.z.object({\n    username: zod__WEBPACK_IMPORTED_MODULE_5__.z.string().min(2, {\n        message: \"Username must be at least 2 characters.\"\n    })\n});\nconst AuthForm = (param)=>{\n    let { type } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // 1. Define your form.\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_4__.zodResolver)(formSchema),\n        defaultValues: {\n            username: \"\"\n        }\n    });\n    // 2. Define a submit handler.\n    function onSubmit(values) {\n        // Do something with the form values.\n        // ✅ This will be type-safe and validated.\n        console.log(values);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"auth-form\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"flex flex-col gap-5 md:gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: \"/\",\n                        className: \"cursor-pointer flex items-center gap-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                src: \"/icons/logo.svg\",\n                                width: 34,\n                                height: 34,\n                                alt: \"Horizon logo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\AuthForm.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-26 font-ibm-plex-serif font-bold text-black-1\",\n                                children: \"Horizon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\AuthForm.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\AuthForm.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-1 md:gap-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-24 lg:text-36 font-semibold text-gray-900\",\n                            children: [\n                                user ? \"Link Account\" : type === \"sign-in\" ? \"Sign In\" : \"Sign Up\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-16 font-normal text-gray-600\",\n                                    children: user ? \"Link your account to get started\" : \"Please enter your details\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\AuthForm.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\AuthForm.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\AuthForm.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\AuthForm.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined),\n            user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-4\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\AuthForm.tsx\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: \"FORM\"\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\AuthForm.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthForm, \"ARGI7YtAWSJWPfUWEasldGu4CMs=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm\n    ];\n});\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQXV0aEZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRCO0FBQ1c7QUFDVDtBQUVQO0FBQzhCO0FBQ1o7QUFjekMsTUFBTU8sYUFBYUgsa0NBQUNBLENBQUNJLE1BQU0sQ0FBQztJQUN4QkMsVUFBVUwsa0NBQUNBLENBQUNNLE1BQU0sR0FBR0MsR0FBRyxDQUFDLEdBQUc7UUFDMUJDLFNBQVM7SUFDWDtBQUNGO0FBRUYsTUFBTUMsV0FBVztRQUFDLEVBQUVDLElBQUksRUFBb0I7O0lBQ3hDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUVoQyx1QkFBdUI7SUFDMUIsTUFBTWUsT0FBT1gsd0RBQU9BLENBQTZCO1FBQy9DWSxVQUFVYixvRUFBV0EsQ0FBQ0U7UUFDdEJZLGVBQWU7WUFDYlYsVUFBVTtRQUNaO0lBQ0Y7SUFFQSw4QkFBOEI7SUFDOUIsU0FBU1csU0FBU0MsTUFBa0M7UUFDbEQscUNBQXFDO1FBQ3JDLDBDQUEwQztRQUMxQ0MsUUFBUUMsR0FBRyxDQUFDRjtJQUNkO0lBQ0EscUJBQ0UsOERBQUNHO1FBQVFDLFdBQVU7OzBCQUNmLDhEQUFDQztnQkFBT0QsV0FBVTs7a0NBQ2QsOERBQUN6QixpREFBSUE7d0JBQUMyQixNQUFLO3dCQUFJRixXQUFVOzswQ0FDM0IsOERBQUN0QixrREFBS0E7Z0NBQ0p5QixLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSQyxLQUFJOzs7Ozs7MENBRU4sOERBQUNDO2dDQUFHUCxXQUFVOzBDQUFxRDs7Ozs7Ozs7Ozs7O2tDQUVyRSw4REFBQ1E7d0JBQUlSLFdBQVU7a0NBQ1gsNEVBQUNPOzRCQUFHUCxXQUFVOztnQ0FDVFYsT0FBTyxpQkFBaUJELFNBQVMsWUFBWSxZQUFZOzhDQUMxRCw4REFBQ29CO29DQUFFVCxXQUFVOzhDQUNSVixPQUFPLHFDQUFxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLeERBLHFCQUNHLDhEQUFDa0I7Z0JBQUlSLFdBQVU7Ozs7OzBDQUlmOzBCQUFFOzs7Ozs7OztBQU1kO0dBakRNWjs7UUFJU1Asb0RBQU9BOzs7S0FKaEJPO0FBbUROLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXV0aEZvcm0udHN4P2JjODMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCJcclxuaW1wb3J0IHsgem9kUmVzb2x2ZXIgfSBmcm9tIFwiQGhvb2tmb3JtL3Jlc29sdmVycy96b2RcIlxyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiXHJcblxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiXHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtRGVzY3JpcHRpb24sXHJcbiAgRm9ybUZpZWxkLFxyXG4gIEZvcm1JdGVtLFxyXG4gIEZvcm1MYWJlbCxcclxuICBGb3JtTWVzc2FnZSxcclxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2Zvcm1cIlxyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIlxyXG5cclxuY29uc3QgZm9ybVNjaGVtYSA9IHoub2JqZWN0KHtcclxuICAgIHVzZXJuYW1lOiB6LnN0cmluZygpLm1pbigyLCB7XHJcbiAgICAgIG1lc3NhZ2U6IFwiVXNlcm5hbWUgbXVzdCBiZSBhdCBsZWFzdCAyIGNoYXJhY3RlcnMuXCIsXHJcbiAgICB9KSxcclxuICB9KVxyXG5cclxuY29uc3QgQXV0aEZvcm0gPSAoeyB0eXBlIH06IHsgdHlwZTogc3RyaW5nIH0pID0+IHtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgIC8vIDEuIERlZmluZSB5b3VyIGZvcm0uXHJcbiAgY29uc3QgZm9ybSA9IHVzZUZvcm08ei5pbmZlcjx0eXBlb2YgZm9ybVNjaGVtYT4+KHtcclxuICAgIHJlc29sdmVyOiB6b2RSZXNvbHZlcihmb3JtU2NoZW1hKSxcclxuICAgIGRlZmF1bHRWYWx1ZXM6IHtcclxuICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gIH0pXHJcbiBcclxuICAvLyAyLiBEZWZpbmUgYSBzdWJtaXQgaGFuZGxlci5cclxuICBmdW5jdGlvbiBvblN1Ym1pdCh2YWx1ZXM6IHouaW5mZXI8dHlwZW9mIGZvcm1TY2hlbWE+KSB7XHJcbiAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCB0aGUgZm9ybSB2YWx1ZXMuXHJcbiAgICAvLyDinIUgVGhpcyB3aWxsIGJlIHR5cGUtc2FmZSBhbmQgdmFsaWRhdGVkLlxyXG4gICAgY29uc29sZS5sb2codmFsdWVzKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdhdXRoLWZvcm0nPlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC01IG1kOmdhcC04Jz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9pY29ucy9sb2dvLnN2Z1wiXHJcbiAgICAgICAgICAgIHdpZHRoPXszNH1cclxuICAgICAgICAgICAgaGVpZ2h0PXszNH1cclxuICAgICAgICAgICAgYWx0PVwiSG9yaXpvbiBsb2dvXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yNiBmb250LWlibS1wbGV4LXNlcmlmIGZvbnQtYm9sZCB0ZXh0LWJsYWNrLTFcIj5Ib3Jpem9uPC9oMT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTEgbWQ6Z2FwLTInPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTI0IGxnOnRleHQtMzYgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwJz5cclxuICAgICAgICAgICAgICAgIHt1c2VyID8gJ0xpbmsgQWNjb3VudCcgOiB0eXBlID09PSAnc2lnbi1pbicgPyAnU2lnbiBJbicgOiAnU2lnbiBVcCd9XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtMTYgZm9udC1ub3JtYWwgdGV4dC1ncmF5LTYwMCc+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXIgPyAnTGluayB5b3VyIGFjY291bnQgdG8gZ2V0IHN0YXJ0ZWQnIDogJ1BsZWFzZSBlbnRlciB5b3VyIGRldGFpbHMnfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIHt1c2VyID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtNCc+XHJcbiAgICAgICAgICAgICAgICB7LyogUGxhaWQgQWNjb3VudCAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICBGT1JNXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybVxyXG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsInoiLCJ6b2RSZXNvbHZlciIsInVzZUZvcm0iLCJmb3JtU2NoZW1hIiwib2JqZWN0IiwidXNlcm5hbWUiLCJzdHJpbmciLCJtaW4iLCJtZXNzYWdlIiwiQXV0aEZvcm0iLCJ0eXBlIiwidXNlciIsInNldFVzZXIiLCJmb3JtIiwicmVzb2x2ZXIiLCJkZWZhdWx0VmFsdWVzIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImhlYWRlciIsImhyZWYiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImgxIiwiZGl2IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AuthForm.tsx\n"));

/***/ })

});