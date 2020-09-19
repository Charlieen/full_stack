webpackHotUpdate("static/development/pages/test/c.js",{

/***/ "./pages/test/c.js":
/*!*************************!*\
  !*** ./pages/test/c.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_my_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/my-context */ "./lib/my-context.js");




function countReducer(state, action) {
  switch (action.type) {
    case 'add':
      return state + 1;

    case 'minus':
      return state - 1;

    default:
      return state;
  }
}
/**
 *  函数式组件，在每次被 虚拟DOM 要求刷新时，如果 函数式组件 内部的 对象 或者 函数 都会 重新生成 新的，
 *  1. 不必要的 重新生成
 *  2.  由于重新生成，导致  值变化，需要 再次  组件刷新。
 * 
 *  避免方法使用 useMemo(obj,[]) 处理 对象， useCallback(fn,[])处理函数
 */


function MyCountFunc() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(countReducer, 0),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReducer, 2),
      count = _useReducer2[0],
      dispatchCount = _useReducer2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('charlie'),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1]; // 每一次 MyCountFunc 组件 刷新，该config 都会重新生成新的对象，


  var config = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      text: "count is ".concat(count),
      color: count > 3 ? 'red' : 'blue'
    };
  }, [count]); // 每一次 MyCountFunc 组件 刷新，()=>dispatchCount({type:'add'}) 都会重新生成新的匿名函数，

  var handleButtonClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return dispatchCount({
      type: 'add'
    });
  }, [dispatchCount]);
  var handleButtonClick2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return function () {
      return dispatchCount();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Child, {
    config: config,
    onButtonClick: handleButtonClick
  }));
}

var Child = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(function Child(_ref) {
  var onButtonClick = _ref.onButtonClick,
      config = _ref.config;
  console.log('child render');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: onButtonClick,
    style: {
      color: config.color
    }
  }, config.text);
});
/* harmony default export */ __webpack_exports__["default"] = (MyCountFunc);

/***/ })

})
//# sourceMappingURL=c.js.94dcabfd4715951f3110.hot-update.js.map