webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_projects_emranhossen_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prism-react-renderer */ "./node_modules/prism-react-renderer/dist/index.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "D:\\projects\\emranhossen.github.io\\pages\\_app.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_projects_emranhossen_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var components = {
  pre: function pre(props) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__["defaultProps"]), {}, {
      code: props.children.props.children,
      language: "js",
      children: function children(_ref) {
        var className = _ref.className,
            style = _ref.style,
            tokens = _ref.tokens,
            getLineProps = _ref.getLineProps,
            getTokenProps = _ref.getTokenProps;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("pre", {
          className: className,
          style: style,
          children: tokens.map(function (line, i) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({}, getLineProps({
              line: line,
              key: i
            })), {}, {
              children: line.map(function (token, key) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", _objectSpread({}, getTokenProps({
                  token: token,
                  key: key
                })), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 13
                }, _this);
              })
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 9
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 5
        }, _this);
      }
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }, _this);
  },
  code: function code(props) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("pre", _objectSpread({
      style: {
        color: 'tomato'
      }
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 18
    }, _this);
  }
};

function MyApp(_ref2) {
  var Component = _ref2.Component,
      pageProps = _ref2.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageTitle: "Blog",
    description: "My Personal Blog",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["MDXProvider"], {
      components: components,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 10
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwicHJlIiwicHJvcHMiLCJkZWZhdWx0UHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInN0eWxlIiwidG9rZW5zIiwiZ2V0TGluZVByb3BzIiwiZ2V0VG9rZW5Qcm9wcyIsIm1hcCIsImxpbmUiLCJpIiwia2V5IiwidG9rZW4iLCJjb2RlIiwiY29sb3IiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsS0FBRyxFQUFFLGFBQUFDLEtBQUs7QUFBQSx3QkFBSSxxRUFBQyw0REFBRCxrQ0FBZUMsaUVBQWY7QUFBNkIsVUFBSSxFQUFFRCxLQUFLLENBQUNFLFFBQU4sQ0FBZUYsS0FBZixDQUFxQkUsUUFBeEQ7QUFBa0UsY0FBUSxFQUFDLElBQTNFO0FBQUEsZ0JBQ2I7QUFBQSxZQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxZQUFjQyxLQUFkLFFBQWNBLEtBQWQ7QUFBQSxZQUFxQkMsTUFBckIsUUFBcUJBLE1BQXJCO0FBQUEsWUFBNkJDLFlBQTdCLFFBQTZCQSxZQUE3QjtBQUFBLFlBQTJDQyxhQUEzQyxRQUEyQ0EsYUFBM0M7QUFBQSw0QkFDQztBQUFLLG1CQUFTLEVBQUVKLFNBQWhCO0FBQTJCLGVBQUssRUFBRUMsS0FBbEM7QUFBQSxvQkFDR0MsTUFBTSxDQUFDRyxHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsZ0NBQ1YsNEdBQVNKLFlBQVksQ0FBQztBQUFFRyxrQkFBSSxFQUFKQSxJQUFGO0FBQVFFLGlCQUFHLEVBQUVEO0FBQWIsYUFBRCxDQUFyQjtBQUFBLHdCQUNHRCxJQUFJLENBQUNELEdBQUwsQ0FBUyxVQUFDSSxLQUFELEVBQVFELEdBQVI7QUFBQSxvQ0FDUiwrRkFBVUosYUFBYSxDQUFDO0FBQUVLLHVCQUFLLEVBQUxBLEtBQUY7QUFBU0QscUJBQUcsRUFBSEE7QUFBVCxpQkFBRCxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURRO0FBQUEsZUFBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFU7QUFBQSxXQUFYO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQUFBO0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFKO0FBQUEsR0FETztBQWNqQkUsTUFBSSxFQUFFLGNBQUFiLEtBQUs7QUFBQSx3QkFBSTtBQUFLLFdBQUssRUFBRTtBQUFDYyxhQUFLLEVBQUU7QUFBUjtBQUFaLE9BQW1DZCxLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUo7QUFBQTtBQWRNLENBQW5COztBQWlCQSxTQUFTZSxLQUFULFFBQXlDO0FBQUEsTUFBeEJDLFNBQXdCLFNBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsU0FBYkEsU0FBYTtBQUN2QyxzQkFBTyxxRUFBQywwREFBRDtBQUFRLGFBQVMsRUFBQyxNQUFsQjtBQUF5QixlQUFXLEVBQUMsa0JBQXJDO0FBQUEsMkJBRUwscUVBQUMseURBQUQ7QUFBYSxnQkFBVSxFQUFFbkIsVUFBekI7QUFBQSw2QkFDQSxxRUFBQyxTQUFELG9CQUFlbUIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZLO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQU1EOztLQVBRRixLO0FBU01BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTMxODljMjQyYzg1YzY3NmM2MjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCJcclxuaW1wb3J0IHtNRFhQcm92aWRlcn0gZnJvbSAnQG1keC1qcy9yZWFjdCdcclxuaW1wb3J0IEhpZ2hsaWdodCwgeyBkZWZhdWx0UHJvcHMgfSBmcm9tIFwicHJpc20tcmVhY3QtcmVuZGVyZXJcIlxyXG5pbXBvcnQgJy4vLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IHtcclxuICBwcmU6IHByb3BzID0+IDxIaWdobGlnaHQgey4uLmRlZmF1bHRQcm9wc30gY29kZT17cHJvcHMuY2hpbGRyZW4ucHJvcHMuY2hpbGRyZW59IGxhbmd1YWdlPVwianNcIj5cclxuICB7KHsgY2xhc3NOYW1lLCBzdHlsZSwgdG9rZW5zLCBnZXRMaW5lUHJvcHMsIGdldFRva2VuUHJvcHMgfSkgPT4gKFxyXG4gICAgPHByZSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAge3Rva2Vucy5tYXAoKGxpbmUsIGkpID0+IChcclxuICAgICAgICA8ZGl2IHsuLi5nZXRMaW5lUHJvcHMoeyBsaW5lLCBrZXk6IGkgfSl9PlxyXG4gICAgICAgICAge2xpbmUubWFwKCh0b2tlbiwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgIDxzcGFuIHsuLi5nZXRUb2tlblByb3BzKHsgdG9rZW4sIGtleSB9KX0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvcHJlPlxyXG4gICl9XHJcbjwvSGlnaGxpZ2h0PixcclxuICBjb2RlOiBwcm9wcyA9PiA8cHJlIHN0eWxlPXt7Y29sb3I6ICd0b21hdG8nfX0gey4uLnByb3BzfSAvPlxyXG59XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gPExheW91dCBwYWdlVGl0bGU9XCJCbG9nXCIgZGVzY3JpcHRpb249XCJNeSBQZXJzb25hbCBCbG9nXCI+XHJcblxyXG4gICAgPE1EWFByb3ZpZGVyIGNvbXBvbmVudHM9e2NvbXBvbmVudHN9PlxyXG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gIDwvTURYUHJvdmlkZXI+XHJcbiAgPC9MYXlvdXQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=