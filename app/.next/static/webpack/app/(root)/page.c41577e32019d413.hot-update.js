"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/page",{

/***/ "(app-pages-browser)/./components/DoughnutChart.tsx":
/*!**************************************!*\
  !*** ./components/DoughnutChart.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nchart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);\nconst DoughnutChart = (param)=>{\n    let { accounts } = param;\n    const data = {\n        datasets: [\n            {\n                label: \"Banks\",\n                data: [\n                    1250,\n                    2500,\n                    3750\n                ],\n                backgroundColor: [\n                    \"#0747b6\",\n                    \"#2265d8\",\n                    \"#2f91fa\"\n                ]\n            }\n        ],\n        labels: [\n            \"Bank 1\",\n            \"Bank 2\",\n            \"Bank 3\"\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Doughnut, {\n        data: data,\n        options: {}\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Armon\\\\OneDrive\\\\Desktop\\\\jsm_banking\\\\components\\\\DoughnutChart.tsx\",\n        lineNumber: 18,\n        columnNumber: 10\n    }, undefined);\n};\n_c = DoughnutChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoughnutChart);\nvar _c;\n$RefreshReg$(_c, \"DoughnutChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRG91Z2hudXRDaGFydC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDeUU7QUFDOUI7QUFFM0NDLDJDQUFPQSxDQUFDSyxRQUFRLENBQUNKLGdEQUFVQSxFQUFFQyw2Q0FBT0EsRUFBRUMsNENBQU1BO0FBRTVDLE1BQU1HLGdCQUFnQjtRQUFDLEVBQUVDLFFBQVEsRUFBc0I7SUFDbkQsTUFBTUMsT0FBTztRQUNUQyxVQUFVO1lBQ047Z0JBQ0lDLE9BQU87Z0JBQ1BGLE1BQU07b0JBQUM7b0JBQU07b0JBQU07aUJBQUs7Z0JBQ3hCRyxpQkFBaUI7b0JBQUM7b0JBQVc7b0JBQVc7aUJBQVU7WUFDdEQ7U0FDSDtRQUNEQyxRQUFRO1lBQUM7WUFBVTtZQUFVO1NBQVM7SUFDMUM7SUFDRixxQkFBTyw4REFBQ1IscURBQVFBO1FBQ2ZJLE1BQU1BO1FBQ05LLFNBQVMsQ0FFVDs7Ozs7O0FBRUg7S0FqQk1QO0FBbUJOLCtEQUFlQSxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRG91Z2hudXRDaGFydC50c3g/NmJhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyBDaGFydCBhcyBDaGFydEpTLCBBcmNFbGVtZW50LCBUb29sdGlwLCBMZWdlbmQgfSBmcm9tIFwiY2hhcnQuanNcIjtcclxuaW1wb3J0IHsgRG91Z2hudXQgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XHJcblxyXG5DaGFydEpTLnJlZ2lzdGVyKEFyY0VsZW1lbnQsIFRvb2x0aXAsIExlZ2VuZCk7XHJcblxyXG5jb25zdCBEb3VnaG51dENoYXJ0ID0gKHsgYWNjb3VudHMgfTogRG91Z2hudXRDaGFydFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnQmFua3MnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzEyNTAsIDI1MDAsIDM3NTBdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbJyMwNzQ3YjYnLCAnIzIyNjVkOCcsICcjMmY5MWZhJ11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGFiZWxzOiBbJ0JhbmsgMScsICdCYW5rIDInLCAnQmFuayAzJ11cclxuICAgIH1cclxuICByZXR1cm4gPERvdWdobnV0XHJcbiAgIGRhdGE9e2RhdGF9IFxyXG4gICBvcHRpb25zPXt7XHJcbiAgICBcclxuICAgfX1cclxuICAvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb3VnaG51dENoYXJ0XHJcbiJdLCJuYW1lcyI6WyJDaGFydCIsIkNoYXJ0SlMiLCJBcmNFbGVtZW50IiwiVG9vbHRpcCIsIkxlZ2VuZCIsIkRvdWdobnV0IiwicmVnaXN0ZXIiLCJEb3VnaG51dENoYXJ0IiwiYWNjb3VudHMiLCJkYXRhIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImxhYmVscyIsIm9wdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/DoughnutChart.tsx\n"));

/***/ })

});