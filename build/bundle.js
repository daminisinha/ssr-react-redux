/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUsers = exports.FETCH_USERS = undefined;

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios2.default.get('http://react-ssr-api.herokuapp.com/users');

            case 2:
              res = _context.sent;

              console.log("resukt is " + res);
              dispatch({
                type: FETCH_USERS,
                payload: res
              });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(8);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(14);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
  var store = (0, _createStore2.default)();
  //logic to initialize and load data into store
  res.send((0, _renderer2.default)(req, store));
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(9);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _Routes = __webpack_require__(10);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//express routing
exports.default = function (req, store) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: {} },
      _react2.default.createElement(_Routes2.default, null)
    )
  ));
  return '\n    <html>\n      <head></head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Home = __webpack_require__(11);

var _Home2 = _interopRequireDefault(_Home);

var _UsersList = __webpack_require__(12);

var _UsersList2 = _interopRequireDefault(_UsersList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/users', component: _UsersList2.default })
    );
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h5',
            null,
            'I\'m the extremely best home component'
        ),
        _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                    return console.log('Hi there!');
                } },
            'Click me!'
        )
    );
};

exports.default = Home;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersList = function (_Component) {
    _inherits(UsersList, _Component);

    function UsersList(props) {
        _classCallCheck(this, UsersList);

        var _this = _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).call(this, props));

        _this.renderUsers = _this.renderUsers.bind(_this);
        return _this;
    }

    _createClass(UsersList, [{
        key: 'renderUsers',
        value: function renderUsers() {
            return this.props.users.map(function (user) {
                return _react2.default.createElement(
                    'li',
                    { key: user.id },
                    user.name
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'Here\'s a big list of users:',
                _react2.default.createElement(
                    'ul',
                    null,
                    this.renderUsers()
                )
            );
        }
    }]);

    return UsersList;
}(_react.Component);

function mapStateToProps(state) {
    return { users: state.users };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, _actions.fetchUsers)(UsersList);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(4);

var _reduxThunk = __webpack_require__(15);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(16);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

  return store;
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(4);

var _usersReducer = __webpack_require__(17);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _usersReducer2.default
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(3);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTJmZThkOGY5MTFjZmIyYjU1NTQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9Vc2Vyc0xpc3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9jcmVhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yZWR1Y2Vycy91c2Vyc1JlZHVjZXIuanMiXSwibmFtZXMiOlsiRkVUQ0hfVVNFUlMiLCJmZXRjaFVzZXJzIiwiZGlzcGF0Y2giLCJheGlvcyIsImdldCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwicGF5bG9hZCIsImFwcCIsInVzZSIsImV4cHJlc3MiLCJzdGF0aWMiLCJyZXEiLCJzdG9yZSIsInNlbmQiLCJsaXN0ZW4iLCJjb250ZW50IiwicGF0aCIsIkhvbWUiLCJVc2Vyc0xpc3QiLCJwcm9wcyIsInJlbmRlclVzZXJzIiwiYmluZCIsInVzZXJzIiwibWFwIiwidXNlciIsImlkIiwibmFtZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicmVkdWNlcnMiLCJ0aHVuayIsInVzZXJzUmVkdWNlciIsImFjdGlvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSxrQzs7Ozs7O0FDQUEsNkM7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7OztBQUVPLElBQU1BLG9DQUFjLGFBQXBCO0FBQ0EsSUFBTUMsa0NBQWEsU0FBYkEsVUFBYTtBQUFBO0FBQUEsdUVBQU0saUJBQU1DLFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDWkMsZ0JBQU1DLEdBQU4sQ0FBVSwwQ0FBVixDQURZOztBQUFBO0FBQ3hCQyxpQkFEd0I7O0FBRWhDQyxzQkFBUUMsR0FBUixDQUFZLGVBQWFGLEdBQXpCO0FBQ0VILHVCQUFTO0FBQ1BNLHNCQUFNUixXQURDO0FBRVBTLHlCQUFTSjtBQUZGLGVBQVQ7O0FBSDhCO0FBQUE7QUFB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LEVBQXRCLEVBQTBCLDRCQUFnQkMsb0JBQWhCLENBQTFCLENBQWQ7O0FBRUEsU0FBT25CLEtBQVA7QUFDRCxDOzs7Ozs7QUNSRCx3Qzs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUNBOzs7Ozs7a0JBRWUsNEJBQWdCO0FBQzdCVSxTQUFPVTtBQURzQixDQUFoQixDOzs7Ozs7Ozs7Ozs7O0FDSGY7O2tCQUVlLFlBQXdCO0FBQUEsTUFBdkJILEtBQXVCLHVFQUFmLEVBQWU7QUFBQSxNQUFYSSxNQUFXOztBQUNyQyxVQUFRQSxPQUFPNUIsSUFBZjtBQUNFLFNBQUtSLG9CQUFMO0FBQ0UsYUFBT29DLE9BQU8zQixPQUFQLENBQWU0QixJQUF0QjtBQUNGO0FBQ0UsYUFBT0wsS0FBUDtBQUpKO0FBTUQsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhMmZlOGQ4ZjkxMWNmYjJiNTU1NCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtcmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZFVENIX1VTRVJTID0gJ2ZldGNoX3VzZXJzJztcclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnMgPSAoKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vcmVhY3Qtc3NyLWFwaS5oZXJva3VhcHAuY29tL3VzZXJzJyk7XHJcbmNvbnNvbGUubG9nKFwicmVzdWt0IGlzIFwiK3Jlcyk7XHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogRkVUQ0hfVVNFUlMsXHJcbiAgICBwYXlsb2FkOiByZXNcclxuICB9KTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2FjdGlvbnMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XHJcbmltcG9ydCBleHByZXNzICBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4vaGVscGVycy9yZW5kZXJlcic7XHJcbmltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuL2hlbHBlcnMvY3JlYXRlU3RvcmUnO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpO1xyXG5hcHAuZ2V0KCcqJywocmVxLHJlcyk9PntcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKCk7XHJcbiAgLy9sb2dpYyB0byBpbml0aWFsaXplIGFuZCBsb2FkIGRhdGEgaW50byBzdG9yZVxyXG4gIHJlcy5zZW5kKHJlbmRlcmVyKHJlcSxzdG9yZSkpO1xyXG59KTtcclxuXHJcbmFwcC5saXN0ZW4oMzAwMCwgKCk9PntcclxuICAgIGNvbnNvbGUubG9nKCdMaXN0ZW5pbmcgb24gcG9ydCAzMDAwJyk7XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cmVuZGVyVG9TdHJpbmd9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQge1N0YXRpY1JvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJvdXRlcyBmcm9tICcuLi9jbGllbnQvUm91dGVzJztcclxuXHJcbi8vZXhwcmVzcyByb3V0aW5nXHJcbmV4cG9ydCBkZWZhdWx0IChyZXEsc3RvcmUpPT57XHJcbiAgICBjb25zdCBjb250ZW50ID0gcmVuZGVyVG9TdHJpbmcoXHJcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS5wYXRofSBjb250ZXh0PXt7fX0+XHJcbiAgICAgICAgICAgIDxSb3V0ZXMvPlxyXG4gICAgICAgIDwvU3RhdGljUm91dGVyPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKTtcclxuICAgIHJldHVybiBgXHJcbiAgICA8aHRtbD5cclxuICAgICAgPGhlYWQ+PC9oZWFkPlxyXG4gICAgICA8Ym9keT5cclxuICAgICAgICA8ZGl2IGlkPVwicm9vdFwiPiR7Y29udGVudH08L2Rpdj5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImJ1bmRsZS5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICA8L2JvZHk+XHJcbiAgICA8L2h0bWw+XHJcbiAgYDtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9yZW5kZXJlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcclxuaW1wb3J0IFVzZXJzTGlzdCAgZnJvbSAnLi9jb21wb25lbnRzL1VzZXJzTGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZX0gLz5cclxuICAgICAgICA8Um91dGUgIHBhdGg9XCIvdXNlcnNcIiBjb21wb25lbnQ9e1VzZXJzTGlzdH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9Sb3V0ZXMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGg1PlxyXG4gICAgICAgIEknbSB0aGUgZXh0cmVtZWx5IGJlc3QgaG9tZSBjb21wb25lbnRcclxuICAgICAgICA8L2g1PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ0hpIHRoZXJlIScpfT5cclxuICAgICAgICAgICAgQ2xpY2sgbWUhXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSG9tZS5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtmZXRjaFVzZXJzfSBmcm9tICcuLi9hY3Rpb25zJztcclxuXHJcbmNsYXNzIFVzZXJzTGlzdCBleHRlbmRzICBDb21wb25lbnR7XHJcblxyXG4gICAgICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICAgICB0aGlzLnJlbmRlclVzZXJzID0gdGhpcy5yZW5kZXJVc2Vycy5iaW5kKHRoaXMpO1xyXG4gICAgICAgfVxyXG5cclxuICAgIHJlbmRlclVzZXJzKCl7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLnVzZXJzLm1hcCh1c2VyID0+e1xyXG4gICAgICAgIHJldHVybiAgPGxpIGtleT17dXNlci5pZH0+e3VzZXIubmFtZX08L2xpPjtcclxuICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgSGVyZSdzIGEgYmlnIGxpc3Qgb2YgdXNlcnM6XHJcbiAgICAgICAgICAgIDx1bD57dGhpcy5yZW5kZXJVc2VycygpfTwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSl7XHJcbiAgICByZXR1cm4ge3VzZXJzOnN0YXRlLnVzZXJzfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsZmV0Y2hVc2VycykoVXNlcnNMaXN0KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvVXNlcnNMaXN0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJheGlvc1wiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi4vY2xpZW50L3JlZHVjZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCB7fSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSk7XHJcblxyXG4gIHJldHVybiBzdG9yZTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9jcmVhdGVTdG9yZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXgtdGh1bmtcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdXNlcnNSZWR1Y2VyIGZyb20gJy4vdXNlcnNSZWR1Y2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgdXNlcnM6IHVzZXJzUmVkdWNlclxyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0IHsgRkVUQ0hfVVNFUlMgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEZFVENIX1VTRVJTOlxyXG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9yZWR1Y2Vycy91c2Vyc1JlZHVjZXIuanMiXSwic291cmNlUm9vdCI6IiJ9