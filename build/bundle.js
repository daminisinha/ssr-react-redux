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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HomePage = __webpack_require__(9);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _UsersListPage = __webpack_require__(10);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _HomePage2.default, {
    path: '/',
    exact: true
}), _extends({}, _UsersListPage2.default, {
    path: '/users'
})];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUsers = exports.FETCH_USERS = undefined;

var _axios = __webpack_require__(11);

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


              dispatch({
                type: FETCH_USERS,
                payload: res
              });

            case 4:
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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var _express = __webpack_require__(8);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(1);

var _Routes = __webpack_require__(2);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(12);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(15);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
  var store = (0, _createStore2.default)();
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    //reference to our ssr redux store
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(function () {
    res.send((0, _renderer2.default)(req, store));
  });
  //logic to initialize and load data into store
  // res.send(renderer(req,store));
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
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

exports.default = {
    component: Home };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadData = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersList = function (_Component) {
    _inherits(UsersList, _Component);

    function UsersList() {
        _classCallCheck(this, UsersList);

        return _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).apply(this, arguments));
    }

    _createClass(UsersList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchUsers();
        }
    }, {
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
function loadData(store) {
    return store.dispatch((0, _actions.fetchUsers)());
}

exports.loadData = loadData;
exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UsersList)
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(13);

var _reactRouterDom = __webpack_require__(14);

var _reactRedux = __webpack_require__(3);

var _reactRouterConfig = __webpack_require__(1);

var _Routes = __webpack_require__(2);

var _Routes2 = _interopRequireDefault(_Routes);

var _serializeJavascript = __webpack_require__(19);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//express routing
exports.default = function (req, store) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: {} },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));
  return '\n    <html>\n      <head></head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>\n        window.INITIAL_STATE =' + JSON.stringify((0, _serializeJavascript2.default)(store.getState())) + ';\n        </script>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
};
//creates a URL encoded text string string by serializing form values for XSS atack

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(5);

var _reduxThunk = __webpack_require__(16);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(17);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

  return store;
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(5);

var _usersReducer = __webpack_require__(18);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _usersReducer2.default
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(4);

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

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDE4MTI4MzAzODhhYmE3N2NjMWIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9Sb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9wYWdlcy9Ib21lUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL1VzZXJzTGlzdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2NyZWF0ZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JlZHVjZXJzL3VzZXJzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIl0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicGF0aCIsImV4YWN0IiwiVXNlcnNMaXN0UGFnZSIsIkZFVENIX1VTRVJTIiwiZmV0Y2hVc2VycyIsImRpc3BhdGNoIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJ0eXBlIiwicGF5bG9hZCIsImFwcCIsInVzZSIsImV4cHJlc3MiLCJzdGF0aWMiLCJyZXEiLCJzdG9yZSIsInByb21pc2VzIiwiUm91dGVzIiwibWFwIiwicm91dGUiLCJsb2FkRGF0YSIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwic2VuZCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJIb21lIiwiY29tcG9uZW50IiwiVXNlcnNMaXN0IiwicHJvcHMiLCJ1c2VycyIsInVzZXIiLCJpZCIsIm5hbWUiLCJyZW5kZXJVc2VycyIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29udGVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRTdGF0ZSIsInJlZHVjZXJzIiwidGh1bmsiLCJ1c2Vyc1JlZHVjZXIiLCJhY3Rpb24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsa0M7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSxjQUVKQSxrQkFGSTtBQUdQQyxVQUFLLEdBSEU7QUFJUEMsV0FBTTtBQUpD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Q0UsYUFBT1QsS0FBUDtBQUpKO0FBTUQsQzs7Ozs7O0FDVEQsaUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDE4MTI4MzAzODhhYmE3N2NjMWIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1jb25maWdcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi9wYWdlcy9Ib21lUGFnZSc7XHJcbmltcG9ydCBVc2Vyc0xpc3RQYWdlLHtsb2FkRGF0YX0gIGZyb20gJy4vcGFnZXMvVXNlcnNMaXN0UGFnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICB7XHJcbiAgICAgICAgLi4uSG9tZVBhZ2UsXHJcbiAgICAgICAgcGF0aDonLycsXHJcbiAgICAgICAgZXhhY3Q6dHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICAuLi5Vc2Vyc0xpc3RQYWdlLFxyXG4gICAgICAgIHBhdGg6Jy91c2VycydcclxuICAgIH1cclxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L1JvdXRlcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtcmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZFVENIX1VTRVJTID0gJ2ZldGNoX3VzZXJzJztcclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnMgPSAoKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vcmVhY3Qtc3NyLWFwaS5oZXJva3VhcHAuY29tL3VzZXJzJyk7XHJcblxyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IEZFVENIX1VTRVJTLFxyXG4gICAgcGF5bG9hZDogcmVzXHJcbiAgfSk7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9hY3Rpb25zL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xyXG5pbXBvcnQgZXhwcmVzcyAgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7bWF0Y2hSb3V0ZXN9IGZyb20gJ3JlYWN0LXJvdXRlci1jb25maWcnO1xyXG5pbXBvcnQgUm91dGVzICBmcm9tICcuL2NsaWVudC9Sb3V0ZXMnXHJcbmltcG9ydCByZW5kZXJlciBmcm9tICcuL2hlbHBlcnMvcmVuZGVyZXInO1xyXG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnLi9oZWxwZXJzL2NyZWF0ZVN0b3JlJztcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKTtcclxuYXBwLmdldCgnKicsKHJlcSxyZXMpPT57XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZSgpO1xyXG4gY29uc3QgcHJvbWlzZXMgPSAgbWF0Y2hSb3V0ZXMoUm91dGVzLHJlcS5wYXRoKS5tYXAoKHtyb3V0ZX0pID0+IHtcclxuICAgIC8vcmVmZXJlbmNlIHRvIG91ciBzc3IgcmVkdXggc3RvcmVcclxuICAgIHJldHVybiByb3V0ZS5sb2FkRGF0YSA/IHJvdXRlLmxvYWREYXRhKHN0b3JlKTpudWxsO1xyXG4gIH0pO1xyXG5cclxuICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKT0+e1xyXG4gICAgcmVzLnNlbmQocmVuZGVyZXIocmVxLHN0b3JlKSk7XHJcbiAgfSlcclxuICAvL2xvZ2ljIHRvIGluaXRpYWxpemUgYW5kIGxvYWQgZGF0YSBpbnRvIHN0b3JlXHJcbiAvLyByZXMuc2VuZChyZW5kZXJlcihyZXEsc3RvcmUpKTtcclxufSk7XHJcblxyXG5hcHAubGlzdGVuKDMwMDAsICgpPT57XHJcbiAgICBjb25zb2xlLmxvZygnTGlzdGVuaW5nIG9uIHBvcnQgMzAwMCcpO1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGg1PlxyXG4gICAgICAgIEknbSB0aGUgZXh0cmVtZWx5IGJlc3QgaG9tZSBjb21wb25lbnRcclxuICAgICAgICA8L2g1PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ0hpIHRoZXJlIScpfT5cclxuICAgICAgICAgICAgQ2xpY2sgbWUhXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29tcG9uZW50OiBIb21lfVxyXG4gICAgO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvcGFnZXMvSG9tZVBhZ2UuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7ZmV0Y2hVc2Vyc30gZnJvbSAnLi4vYWN0aW9ucyc7XHJcblxyXG5jbGFzcyBVc2Vyc0xpc3QgZXh0ZW5kcyAgQ29tcG9uZW50e1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hVc2VycygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgcmVuZGVyVXNlcnMoKXtcclxuICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudXNlcnMubWFwKHVzZXIgPT57XHJcbiAgICAgICAgcmV0dXJuICA8bGkga2V5PXt1c2VyLmlkfT57dXNlci5uYW1lfTwvbGk+O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIEhlcmUncyBhIGJpZyBsaXN0IG9mIHVzZXJzOlxyXG4gICAgICAgICAgICA8dWw+e3RoaXMucmVuZGVyVXNlcnMoKX08L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpe1xyXG4gICAgcmV0dXJuIHt1c2VyczpzdGF0ZS51c2Vyc307XHJcbn1cclxuZnVuY3Rpb24gbG9hZERhdGEoc3RvcmUpe1xyXG4gICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2hVc2VycygpKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IGxvYWREYXRhIH07XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGxvYWREYXRhLFxyXG4gICBjb21wb25lbnQ6IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLHtmZXRjaFVzZXJzfSkoVXNlcnNMaXN0KVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvcGFnZXMvVXNlcnNMaXN0UGFnZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXhpb3NcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJUb1N0cmluZ30gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XHJcbmltcG9ydCB7U3RhdGljUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge3JlbmRlclJvdXRlc30gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XHJcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi4vY2xpZW50L1JvdXRlcyc7XHJcbi8vY3JlYXRlcyBhIFVSTCBlbmNvZGVkIHRleHQgc3RyaW5nIHN0cmluZyBieSBzZXJpYWxpemluZyBmb3JtIHZhbHVlcyBmb3IgWFNTIGF0YWNrXHJcbmltcG9ydCBzZXJpYWxpemUgIGZyb20gJ3NlcmlhbGl6ZS1qYXZhc2NyaXB0JztcclxuXHJcbi8vZXhwcmVzcyByb3V0aW5nXHJcbmV4cG9ydCBkZWZhdWx0IChyZXEsc3RvcmUpPT57XHJcbiAgICBjb25zdCBjb250ZW50ID0gcmVuZGVyVG9TdHJpbmcoXHJcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS5wYXRofSBjb250ZXh0PXt7fX0+XHJcbiAgICAgICAgIDxkaXY+e3JlbmRlclJvdXRlcyhSb3V0ZXMpfTwvZGl2PlxyXG4gICAgICAgIDwvU3RhdGljUm91dGVyPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKTtcclxuICAgIHJldHVybiBgXHJcbiAgICA8aHRtbD5cclxuICAgICAgPGhlYWQ+PC9oZWFkPlxyXG4gICAgICA8Ym9keT5cclxuICAgICAgICA8ZGl2IGlkPVwicm9vdFwiPiR7Y29udGVudH08L2Rpdj5cclxuICAgICAgICA8c2NyaXB0PlxyXG4gICAgICAgIHdpbmRvdy5JTklUSUFMX1NUQVRFID0ke0pTT04uc3RyaW5naWZ5KHNlcmlhbGl6ZShzdG9yZS5nZXRTdGF0ZSgpKSl9O1xyXG4gICAgICAgIDwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiYnVuZGxlLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5cclxuICBgO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL3JlbmRlcmVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4uL2NsaWVudC9yZWR1Y2Vycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2Vycywge30sIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpO1xyXG5cclxuICByZXR1cm4gc3RvcmU7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvY3JlYXRlU3RvcmUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LXRodW5rXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHVzZXJzUmVkdWNlciBmcm9tICcuL3VzZXJzUmVkdWNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHVzZXJzOiB1c2Vyc1JlZHVjZXJcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCB7IEZFVENIX1VTRVJTIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBGRVRDSF9VU0VSUzpcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvcmVkdWNlcnMvdXNlcnNSZWR1Y2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VyaWFsaXplLWphdmFzY3JpcHRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9