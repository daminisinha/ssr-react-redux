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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/users');

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

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';
var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.get('/current_user');

            case 2:
              res = _context2.sent;


              dispatch({
                type: FETCH_CURRENT_USER,
                payload: res
              });

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var FETCH_ADMINS = exports.FETCH_ADMINS = 'fetch_admins';
var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return api.get('/admins');

            case 2:
              res = _context3.sent;

              dispatch({
                type: FETCH_ADMINS,
                payload: res
              });

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(11);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(13);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _UsersListPage = __webpack_require__(14);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

var _NotFoundPage = __webpack_require__(15);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _AdminsListPage = __webpack_require__(16);

var _AdminsListPage2 = _interopRequireDefault(_AdminsListPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//roytes will be rendered by the main component whic h is App
exports.default = [_extends({}, _App2.default, {
    routes: [_extends({}, _HomePage2.default, {
        path: '/',
        exact: true
    }), _extends({}, _UsersListPage2.default, {
        path: '/users'
    }), _extends({}, _AdminsListPage2.default, {
        path: '/admins'
    }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(3);

var _expressHttpProxy = __webpack_require__(10);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(17);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(20);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));
app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
  var store = (0, _createStore2.default)(req);
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    //reference to our ssr redux store
    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);
    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
  //logic to initialize and load data into store
  // res.send(renderer(req,store));
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(3);

var _Header = __webpack_require__(12);

var _Header2 = _interopRequireDefault(_Header);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App,
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _actions.fetchCurrentUser)());
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var auth = _ref.auth;

    console.log('My auth status is ', auth);
    var authButton = auth ? _react2.default.createElement(
        'a',
        { href: '/api/logout' },
        'L'
    ) : _react2.default.createElement(
        'a',
        { href: '/api/auth/google' },
        'Login'
    );
    return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
            'div',
            { className: 'nav-wrapper' },
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/', className: 'brand-logo' },
                'React SSR'
            ),
            _react2.default.createElement(
                'ul',
                { className: 'right' },
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/users' },
                        'Users'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/admins' },
                        'Admins'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    authButton
                )
            )
        )
    );
};
function mapStateToProps(_ref2) {
    var auth = _ref2.auth;

    return { auth: auth };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 13 */
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
        { className: 'center-align', style: { marginTop: '200px' } },
        _react2.default.createElement(
            'h3',
            null,
            'Welcome'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Check out these awesome features'
        )
    );
};

exports.default = {
    component: Home };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadData = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _reactHelmet = __webpack_require__(28);

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
        key: 'head',
        value: function head() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    this.props.users.length + ' Users Loaded'
                ),
                _react2.default.createElement('meta', { property: 'og:title', content: 'Users App' })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.head(),
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
    var _ref$staticContext = _ref.staticContext,
        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

    staticContext.notFound = true;
    return _react2.default.createElement(
        'h1',
        null,
        'Ooops,route not found'
    );
};

exports.default = {
    component: NotFoundPage
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _requireAuth = __webpack_require__(27);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminsListPage = function (_React$Component) {
    _inherits(AdminsListPage, _React$Component);

    function AdminsListPage() {
        _classCallCheck(this, AdminsListPage);

        return _possibleConstructorReturn(this, (AdminsListPage.__proto__ || Object.getPrototypeOf(AdminsListPage)).apply(this, arguments));
    }

    _createClass(AdminsListPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchAdmins();
        }
    }, {
        key: 'renderAdmins',
        value: function renderAdmins() {
            return this.props.admins.map(function (admin) {
                return _react2.default.createElement(
                    'li',
                    { key: admin.id },
                    admin.name
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h3',
                    null,
                    'Protected List of Admins'
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    this.renderAdmins()
                )
            );
        }
    }]);

    return AdminsListPage;
}(_react2.default.Component);

;

function mapStateToProps(_ref) {
    var admins = _ref.admins;

    return { admins: admins };
};

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _actions.fetchAdmins })(AdminsListPage),
    loadData: function loadData(_ref2) {
        var dispatch = _ref2.dispatch;
        return dispatch((0, _actions.fetchAdmins)());
    }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(18);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(3);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

var _serializeJavascript = __webpack_require__(19);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//creates a URL encoded text string string by serializing form values for XSS atack
var helmet = _reactHelmet.Helmet.renderStatic();
//express routing

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: { context: context } },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));
  return '\n    <html>\n      <head>\n      ' + helmet.title.toString() + '\n      ' + helmet.meta.toString() + '\n      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">\n      </head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>\n        window.INITIAL_STATE =' + JSON.stringify((0, _serializeJavascript2.default)(store.getState())) + ';\n        </script>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _reduxThunk = __webpack_require__(21);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(22);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(23);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' }
  });
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

  return store;
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _usersReducer = __webpack_require__(24);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _authReducer = __webpack_require__(25);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _adminsReducer = __webpack_require__(26);

var _adminsReducer2 = _interopRequireDefault(_adminsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _usersReducer2.default,
  auth: _authReducer2.default,
  admins: _adminsReducer2.default
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_CURRENT_USER:
            return action.payload.data || false;
        default:
            return state;
    }
};

var _actions = __webpack_require__(1);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_ADMINS:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent) {
    var RequireAuth = function (_Component) {
        _inherits(RequireAuth, _Component);

        function RequireAuth() {
            _classCallCheck(this, RequireAuth);

            return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
        }

        _createClass(RequireAuth, [{
            key: 'render',
            value: function render() {
                switch (this.props.auth) {
                    case false:
                        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
                    case null:
                        return _react2.default.createElement(
                            'div',
                            null,
                            'Loading ...'
                        );
                    default:
                        return _react2.default.createElement(ChildComponent, this.props);
                }
            }
        }]);

        return RequireAuth;
    }(Component);

    function mapStateToProps(_ref) {
        var auth = _ref.auth;

        return { auth: auth };
    }
    return (0, _reactRedux.connect)()(RequireAuth);
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWE2ODk2YzZjNjYyNmI0OTM0MjAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9Sb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3MtaHR0cC1wcm94eVwiIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9wYWdlcy9Ib21lUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL1VzZXJzTGlzdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9wYWdlcy9Ob3RGb3VuZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9wYWdlcy9BZG1pbnNMaXN0UGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9jcmVhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JlZHVjZXJzL3VzZXJzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JlZHVjZXJzL2F1dGhSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVkdWNlcnMvYWRtaW5zUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvaG9jcy9yZXF1aXJlQXV0aC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiJdLCJuYW1lcyI6WyJGRVRDSF9VU0VSUyIsImZldGNoVXNlcnMiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwiYXBpIiwiZ2V0IiwicmVzIiwidHlwZSIsInBheWxvYWQiLCJGRVRDSF9DVVJSRU5UX1VTRVIiLCJmZXRjaEN1cnJlbnRVc2VyIiwiRkVUQ0hfQURNSU5TIiwiZmV0Y2hBZG1pbnMiLCJBcHAiLCJyb3V0ZXMiLCJIb21lUGFnZSIsInBhdGgiLCJleGFjdCIsIlVzZXJzTGlzdFBhZ2UiLCJBZG1pbnNMaXN0UGFnZSIsIk5vdEZvdW5kUGFnZSIsImFwcCIsInVzZSIsInByb3h5UmVxT3B0RGVjb3JhdG9yIiwib3B0cyIsImhlYWRlcnMiLCJleHByZXNzIiwic3RhdGljIiwicmVxIiwic3RvcmUiLCJwcm9taXNlcyIsIlJvdXRlcyIsIm1hcCIsInJvdXRlIiwibG9hZERhdGEiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0aGVuIiwiY2F0Y2giLCJhbGwiLCJjb250ZXh0IiwiY29udGVudCIsInVybCIsInJlZGlyZWN0Iiwibm90Rm91bmQiLCJzdGF0dXMiLCJzZW5kIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCIsIkhlYWRlciIsImF1dGgiLCJhdXRoQnV0dG9uIiwibWFwU3RhdGVUb1Byb3BzIiwiSG9tZSIsIm1hcmdpblRvcCIsIlVzZXJzTGlzdCIsInByb3BzIiwidXNlcnMiLCJ1c2VyIiwiaWQiLCJuYW1lIiwibGVuZ3RoIiwiaGVhZCIsInJlbmRlclVzZXJzIiwiQ29tcG9uZW50Iiwic3RhdGUiLCJzdGF0aWNDb250ZXh0IiwiYWRtaW5zIiwiYWRtaW4iLCJyZW5kZXJBZG1pbnMiLCJSZWFjdCIsImhlbG1ldCIsIkhlbG1ldCIsInJlbmRlclN0YXRpYyIsInRpdGxlIiwidG9TdHJpbmciLCJtZXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImF4aW9zSW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJjb29raWUiLCJyZWR1Y2VycyIsInRodW5rIiwid2l0aEV4dHJhQXJndW1lbnQiLCJ1c2Vyc1JlZHVjZXIiLCJhdXRoUmVkdWNlciIsImFkbWluc1JlZHVjZXIiLCJhY3Rpb24iLCJkYXRhIiwiQ2hpbGRDb21wb25lbnQiLCJSZXF1aXJlQXV0aCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLGtDOzs7Ozs7Ozs7Ozs7Ozs7QUNFTyxJQUFNQSxvQ0FBYyxhQUFwQjtB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QVA7QUFDRix5QkFBSyxJQUFMO0FBQ0ksK0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBUDtBQUNKO0FBQ0ksK0JBQU8sOEJBQUMsY0FBRCxFQUFvQixLQUFLTSxLQUF6QixDQUFQO0FBTlI7QUFRSDtBQVp5Qjs7QUFBQTtBQUFBLE1BRUpRLFNBRkk7O0FBZTlCLGFBQVNaLGVBQVQsT0FBZ0M7QUFBQSxZQUFORixJQUFNLFFBQU5BLElBQU07O0FBQzVCLGVBQU0sRUFBQ0EsVUFBRCxFQUFOO0FBQ0g7QUFDRixXQUFRLDJCQUFVMkMsV0FBVixDQUFSO0FBQ0YsQzs7Ozs7O0FDdEJELHlDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFhNjg5NmM2YzY2MjZiNDkzNDIwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5cclxuZXhwb3J0IGNvbnN0IEZFVENIX1VTRVJTID0gJ2ZldGNoX3VzZXJzJztcclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnMgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gsZ2V0U3RhdGUsYXBpKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldCgnL3VzZXJzJyk7XHJcblxyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IEZFVENIX1VTRVJTLFxyXG4gICAgcGF5bG9hZDogcmVzXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRkVUQ0hfQ1VSUkVOVF9VU0VSID0gJ2ZldGNoX2N1cnJlbnRfdXNlcic7XHJcbmV4cG9ydCBjb25zdCBmZXRjaEN1cnJlbnRVc2VyID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoLGdldFN0YXRlLGFwaSk9PntcclxuICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0KCcvY3VycmVudF91c2VyJyk7XHJcblxyXG5kaXNwYXRjaCh7XHJcbiAgdHlwZTpGRVRDSF9DVVJSRU5UX1VTRVIsXHJcbiAgcGF5bG9hZDpyZXNcclxuIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0ICBGRVRDSF9BRE1JTlMgPSAnZmV0Y2hfYWRtaW5zJztcclxuZXhwb3J0IGNvbnN0IGZldGNoQWRtaW5zID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoLGdldFN0YXRlLGFwaSkgPT57XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldCgnL2FkbWlucycpO1xyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6RkVUQ0hfQURNSU5TLFxyXG4gICAgcGF5bG9hZDpyZXNcclxuICB9KVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2FjdGlvbnMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1jb25maWdcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi9wYWdlcy9Ib21lUGFnZSc7XHJcbmltcG9ydCBVc2Vyc0xpc3RQYWdlLHtsb2FkRGF0YX0gIGZyb20gJy4vcGFnZXMvVXNlcnNMaXN0UGFnZSc7XHJcbmltcG9ydCBOb3RGb3VuZFBhZ2UgZnJvbSAnLi9wYWdlcy9Ob3RGb3VuZFBhZ2UnO1xyXG5pbXBvcnQgQWRtaW5zTGlzdFBhZ2UgZnJvbSAnLi9wYWdlcy9BZG1pbnNMaXN0UGFnZSc7XHJcbi8vcm95dGVzIHdpbGwgYmUgcmVuZGVyZWQgYnkgdGhlIG1haW4gY29tcG9uZW50IHdoaWMgaCBpcyBBcHBcclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAge1xyXG4gIC4uLkFwcCxcclxuICAgcm91dGVzIDogW1xyXG4gICAge1xyXG4gICAgICAgIC4uLkhvbWVQYWdlLFxyXG4gICAgICAgIHBhdGg6Jy8nLFxyXG4gICAgICAgIGV4YWN0OnRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgLi4uVXNlcnNMaXN0UGFnZSxcclxuICAgICAgICBwYXRoOicvdXNlcnMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIC4uLkFkbWluc0xpc3RQYWdlLFxyXG4gICAgICAgIHBhdGg6Jy9hZG1pbnMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIC4uLk5vdEZvdW5kUGFnZSxcclxuICAgIH1cclxuICAgXVxyXG4gICAgfVxyXG5dO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9Sb3V0ZXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcclxuaW1wb3J0IGV4cHJlc3MgIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQge21hdGNoUm91dGVzfSBmcm9tICdyZWFjdC1yb3V0ZXItY29uZmlnJztcclxuaW1wb3J0IHByb3h5IGZyb20gJ2V4cHJlc3MtaHR0cC1wcm94eSc7XHJcbmltcG9ydCBSb3V0ZXMgIGZyb20gJy4vY2xpZW50L1JvdXRlcydcclxuaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4vaGVscGVycy9yZW5kZXJlcic7XHJcbmltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuL2hlbHBlcnMvY3JlYXRlU3RvcmUnO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnVzZSgnL2FwaScscHJveHkoJ2h0dHA6Ly9yZWFjdC1zc3ItYXBpLmhlcm9rdWFwcC5jb20nLHtcclxuICBwcm94eVJlcU9wdERlY29yYXRvcihvcHRzKXtcclxuICAgIG9wdHMuaGVhZGVyc1sneC1mb3J3YXJkZWQtaG9zdCddPSAnbG9jYWxob3N0OjMwMDAnO1xyXG4gICAgcmV0dXJuIG9wdHM7XHJcbiAgfVxyXG59XHJcbikpXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKTtcclxuYXBwLmdldCgnKicsKHJlcSxyZXMpPT57XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZXEpO1xyXG4gY29uc3QgcHJvbWlzZXMgPSAgbWF0Y2hSb3V0ZXMoUm91dGVzLHJlcS5wYXRoKS5tYXAoKHtyb3V0ZX0pID0+IHtcclxuICAgIC8vcmVmZXJlbmNlIHRvIG91ciBzc3IgcmVkdXggc3RvcmVcclxuICAgIHJldHVybiByb3V0ZS5sb2FkRGF0YSA/IHJvdXRlLmxvYWREYXRhKHN0b3JlKTpudWxsO1xyXG4gIH0pLm1hcChwcm9taXNlID0+e1xyXG4gICAgaWYocHJvbWlzZSl7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVzb2x2ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKT0+e1xyXG4gICAgY29uc3QgY29udGV4dCA9IHt9O1xyXG4gICAgY29uc3QgY29udGVudCA9IHJlbmRlcmVyKHJlcSxzdG9yZSxjb250ZXh0KTtcclxuICAgIGlmKGNvbnRleHQudXJsKXtcclxuICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgzMDEsY29udGV4dC51cmwpXHJcbiAgICB9XHJcbiAgICBpZihjb250ZXh0Lm5vdEZvdW5kKXtcclxuICAgICAgcmVzLnN0YXR1cyg0MDQpO1xyXG4gICAgfVxyXG4gICAgcmVzLnNlbmQoY29udGVudCk7XHJcbiAgfSlcclxuICAvL2xvZ2ljIHRvIGluaXRpYWxpemUgYW5kIGxvYWQgZGF0YSBpbnRvIHN0b3JlXHJcbiAvLyByZXMuc2VuZChyZW5kZXJlcihyZXEsc3RvcmUpKTtcclxufSk7XHJcblxyXG5hcHAubGlzdGVuKDMwMDAsICgpPT57XHJcbiAgICBjb25zb2xlLmxvZygnTGlzdGVuaW5nIG9uIHBvcnQgMzAwMCcpO1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWh0dHAtcHJveHlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzLWh0dHAtcHJveHlcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVuZGVyUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCB7IGZldGNoQ3VycmVudFVzZXIgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgQXBwID0gKHsgcm91dGUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIHtyZW5kZXJSb3V0ZXMocm91dGUucm91dGVzKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY29tcG9uZW50OiBBcHAsXHJcbiAgbG9hZERhdGE6ICh7IGRpc3BhdGNoIH0pID0+IGRpc3BhdGNoKGZldGNoQ3VycmVudFVzZXIoKSlcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9BcHAuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQge2Nvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoe2F1dGh9KT0+e1xyXG4gICAgY29uc29sZS5sb2coJ015IGF1dGggc3RhdHVzIGlzICcsYXV0aCk7XHJcbiAgICBjb25zdCBhdXRoQnV0dG9uID0gYXV0aCA/IChcclxuICAgICAgICA8YSBocmVmPVwiL2FwaS9sb2dvdXRcIj5MPC9hPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxhIGhyZWY9XCIvYXBpL2F1dGgvZ29vZ2xlXCI+TG9naW48L2E+XHJcbiAgICAgICk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImJyYW5kLWxvZ29cIj5SZWFjdCBTU1I8L0xpbms+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvdXNlcnNcIj5Vc2VyczwvTGluaz48L2xpPiBcclxuICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9hZG1pbnNcIj5BZG1pbnM8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgPGxpPnthdXRoQnV0dG9ufTwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn07XHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7YXV0aH0pe1xyXG4gICAgcmV0dXJuIHthdXRofTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhlYWRlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItYWxpZ25cIiBzdHlsZT17e21hcmdpblRvcDonMjAwcHgnfX0+XHJcbiAgICAgIDxoMz5XZWxjb21lPC9oMz5cclxuICAgICAgPHA+Q2hlY2sgb3V0IHRoZXNlIGF3ZXNvbWUgZmVhdHVyZXM8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29tcG9uZW50OiBIb21lfVxyXG4gICAgO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvcGFnZXMvSG9tZVBhZ2UuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7ZmV0Y2hVc2Vyc30gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcblxyXG5jbGFzcyBVc2Vyc0xpc3QgZXh0ZW5kcyAgQ29tcG9uZW50e1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hVc2VycygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgcmVuZGVyVXNlcnMoKXtcclxuICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudXNlcnMubWFwKHVzZXIgPT57XHJcbiAgICAgICAgcmV0dXJuICA8bGkga2V5PXt1c2VyLmlkfT57dXNlci5uYW1lfTwvbGk+O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaGVhZCgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEhlbG1ldD5cclxuICAgICAgICAgICAgPHRpdGxlPntgJHt0aGlzLnByb3BzLnVzZXJzLmxlbmd0aH0gVXNlcnMgTG9hZGVkYH08L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIlVzZXJzIEFwcFwiIC8+XHJcbiAgICAgICAgICA8L0hlbG1ldD5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAge3RoaXMuaGVhZCgpfVxyXG4gICAgICAgICAgICAgICAgSGVyZSdzIGEgYmlnIGxpc3Qgb2YgdXNlcnM6XHJcbiAgICAgICAgICAgIDx1bD57dGhpcy5yZW5kZXJVc2VycygpfTwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSl7XHJcbiAgICByZXR1cm4ge3VzZXJzOnN0YXRlLnVzZXJzfTtcclxufVxyXG5mdW5jdGlvbiBsb2FkRGF0YShzdG9yZSl7XHJcbiAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChmZXRjaFVzZXJzKCkpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgbG9hZERhdGEgfTtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbG9hZERhdGEsXHJcbiAgIGNvbXBvbmVudDogY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMse2ZldGNoVXNlcnN9KShVc2Vyc0xpc3QpXHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9wYWdlcy9Vc2Vyc0xpc3RQYWdlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE5vdEZvdW5kUGFnZSA9ICh7c3RhdGljQ29udGV4dD17fX0pID0+e1xyXG4gICAgc3RhdGljQ29udGV4dC5ub3RGb3VuZCA9IHRydWU7XHJcbiAgICByZXR1cm4gPGgxPk9vb3BzLHJvdXRlIG5vdCBmb3VuZDwvaDE+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudDpOb3RGb3VuZFBhZ2VcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L3BhZ2VzL05vdEZvdW5kUGFnZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge2ZldGNoQWRtaW5zfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHJlcXVpcmVBdXRoIGZyb20gJy4uL2NvbXBvbmVudHMvaG9jcy9yZXF1aXJlQXV0aCdcclxuXHJcbmNsYXNzIEFkbWluc0xpc3RQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5jb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgdGhpcy5wcm9wcy5mZXRjaEFkbWlucygpO1xyXG59XHJcblxyXG5yZW5kZXJBZG1pbnMoKXtcclxuICAgIHJldHVybiB0aGlzLnByb3BzLmFkbWlucy5tYXAoYWRtaW4gPT57XHJcbiAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2FkbWluLmlkfT57YWRtaW4ubmFtZX08L2xpPjtcclxuICAgIH0pO1xyXG59XHJcblxyXG5yZW5kZXIoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+UHJvdGVjdGVkIExpc3Qgb2YgQWRtaW5zPC9oMz5cclxuICAgICAgICAgICAgPHVsPnt0aGlzLnJlbmRlckFkbWlucygpfTwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7YWRtaW5zfSl7XHJcbiAgICByZXR1cm57YWRtaW5zfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuY29tcG9uZW50OmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLHtmZXRjaEFkbWluc30pKEFkbWluc0xpc3RQYWdlKSxcclxubG9hZERhdGE6KHtkaXNwYXRjaH0pID0+IGRpc3BhdGNoKGZldGNoQWRtaW5zKCkpXHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9wYWdlcy9BZG1pbnNMaXN0UGFnZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cmVuZGVyVG9TdHJpbmd9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQge1N0YXRpY1JvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtyZW5kZXJSb3V0ZXN9IGZyb20gJ3JlYWN0LXJvdXRlci1jb25maWcnO1xyXG5pbXBvcnQgUm91dGVzIGZyb20gJy4uL2NsaWVudC9Sb3V0ZXMnO1xyXG4vL2NyZWF0ZXMgYSBVUkwgZW5jb2RlZCB0ZXh0IHN0cmluZyBzdHJpbmcgYnkgc2VyaWFsaXppbmcgZm9ybSB2YWx1ZXMgZm9yIFhTUyBhdGFja1xyXG5pbXBvcnQgc2VyaWFsaXplICBmcm9tICdzZXJpYWxpemUtamF2YXNjcmlwdCc7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcblxyXG5jb25zdCBoZWxtZXQgPSBIZWxtZXQucmVuZGVyU3RhdGljKCk7XHJcbi8vZXhwcmVzcyByb3V0aW5nXHJcbmV4cG9ydCBkZWZhdWx0IChyZXEsc3RvcmUsY29udGV4dCk9PntcclxuICAgIGNvbnN0IGNvbnRlbnQgPSByZW5kZXJUb1N0cmluZyhcclxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnBhdGh9IGNvbnRleHQ9e3tjb250ZXh0fX0+XHJcbiAgICAgICAgIDxkaXY+e3JlbmRlclJvdXRlcyhSb3V0ZXMpfTwvZGl2PlxyXG4gICAgICAgIDwvU3RhdGljUm91dGVyPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKTtcclxuICAgIHJldHVybiBgXHJcbiAgICA8aHRtbD5cclxuICAgICAgPGhlYWQ+XHJcbiAgICAgICR7aGVsbWV0LnRpdGxlLnRvU3RyaW5nKCl9XHJcbiAgICAgICR7aGVsbWV0Lm1ldGEudG9TdHJpbmcoKX1cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbGl6ZS8xLjAuMC9jc3MvbWF0ZXJpYWxpemUubWluLmNzc1wiPlxyXG4gICAgICA8L2hlYWQ+XHJcbiAgICAgIDxib2R5PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJyb290XCI+JHtjb250ZW50fTwvZGl2PlxyXG4gICAgICAgIDxzY3JpcHQ+XHJcbiAgICAgICAgd2luZG93LklOSVRJQUxfU1RBVEUgPSR7SlNPTi5zdHJpbmdpZnkoc2VyaWFsaXplKHN0b3JlLmdldFN0YXRlKCkpKX07XHJcbiAgICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJidW5kbGUuanNcIj48L3NjcmlwdD5cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC9odG1sPlxyXG4gIGA7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvcmVuZGVyZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4uL2NsaWVudC9yZWR1Y2Vycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXEgPT4ge1xyXG4gIGNvbnN0IGF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTCA6J2h0dHA6Ly9yZWFjdC1zc3ItYXBpLmhlcm9rdWFwcC5jb20nLFxyXG4gICAgaGVhZGVyczp7Y29va2llOnJlcS5nZXQoJ2Nvb2tpZScpfHwnJ31cclxuICB9KTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCB7fSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rLndpdGhFeHRyYUFyZ3VtZW50KGF4aW9zSW5zdGFuY2UpKSk7XHJcblxyXG4gIHJldHVybiBzdG9yZTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9jcmVhdGVTdG9yZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXgtdGh1bmtcIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJheGlvc1wiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB1c2Vyc1JlZHVjZXIgZnJvbSAnLi91c2Vyc1JlZHVjZXInO1xyXG5pbXBvcnQgYXV0aFJlZHVjZXIgIGZyb20gJy4vYXV0aFJlZHVjZXInO1xyXG5pbXBvcnQgYWRtaW5zUmVkdWNlciBmcm9tICcuL2FkbWluc1JlZHVjZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICB1c2VyczogdXNlcnNSZWR1Y2VyLFxyXG4gIGF1dGg6YXV0aFJlZHVjZXIsXHJcbiAgYWRtaW5zOmFkbWluc1JlZHVjZXJcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCB7IEZFVENIX1VTRVJTIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBGRVRDSF9VU0VSUzpcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvcmVkdWNlcnMvdXNlcnNSZWR1Y2VyLmpzIiwiaW1wb3J0IHtGRVRDSF9DVVJSRU5UX1VTRVJ9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgIGZ1bmN0aW9uKHN0YXRlPW51bGwsYWN0aW9uKXtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBGRVRDSF9DVVJSRU5UX1VTRVI6XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLmRhdGEgfHwgZmFsc2U7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L3JlZHVjZXJzL2F1dGhSZWR1Y2VyLmpzIiwiaW1wb3J0IHtGRVRDSF9BRE1JTlN9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGU9W10sYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgRkVUQ0hfQURNSU5TOlxyXG4gICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L3JlZHVjZXJzL2FkbWluc1JlZHVjZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtSZWRpcmVjdH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmV4cG9ydCBkZWZhdWx0IChDaGlsZENvbXBvbmVudCkgPT57XHJcblxyXG4gICAgY2xhc3MgUmVxdWlyZUF1dGggZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICAgICAgcmVuZGVyKCl7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy5hdXRoKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvXCIgLz47XHJcbiAgICAgICAgICAgICAgICBjYXNlIG51bGw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZyAuLi48L2Rpdj5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDaGlsZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoe2F1dGh9KXtcclxuICAgICAgICByZXR1cm57YXV0aH07XHJcbiAgICB9XHJcbiAgIHJldHVybiAgY29ubmVjdCgpKFJlcXVpcmVBdXRoKTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvaG9jcy9yZXF1aXJlQXV0aC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhlbG1ldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9