"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useTimeout = _interopRequireDefault(require("@rooks/use-timeout"));

var _useDidMount = _interopRequireDefault(require("@rooks/use-did-mount"));

var _useWillUnmount = _interopRequireDefault(require("@rooks/use-will-unmount"));

var Status = _interopRequireWildcard(require("./utils/Status"));

var _asArray = _interopRequireDefault(require("./utils/asArray"));

var _createCallbacks = _interopRequireDefault(require("./utils/createCallbacks"));

var _createProps = require("./utils/createProps");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Shapes = {
  def: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)])
};
Stateful.propTypes = {
  children: _propTypes.default.node,
  callbacks: Shapes.def,
  pendingProps: Shapes.def,
  pendingClasses: Shapes.def,
  busyDelay: _propTypes.default.number,
  busyProps: Shapes.def,
  busyClasses: Shapes.def,
  successProps: Shapes.def,
  successClasses: Shapes.def,
  errorProps: Shapes.def,
  errorClasses: Shapes.def,
  hintDuration: _propTypes.default.number,
  delimiter: _propTypes.default.string
}; // Note that we use the keys of the defaultProps object to omit
// our own props from propagation to children
// make sure to create a key for each own prop - even if the value must be `undefined`

Stateful.defaultProps = {
  callbacks: ['onClick', 'onTouchStart'],
  pendingProps: ['disabled'],
  pendingClasses: [],
  busyDelay: 0,
  busyProps: ['disabled'],
  busyClasses: ['busy'],
  successProps: [],
  successClasses: ['success'],
  errorProps: [],
  errorClasses: ['error'],
  hintDuration: 1000,
  delimiter: ' '
};

function Stateful(props) {
  var isMounted = _react.default.useRef();

  var ifMounted = function ifMounted(fn) {
    return function () {
      return isMounted.current && fn();
    };
  };

  var _React$useState = _react.default.useState(Status.IDLE),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      status = _React$useState2[0],
      setStatus = _React$useState2[1];

  var setBusy = function setBusy() {
    return setStatus(Status.BUSY);
  };

  var setIdle = function setIdle() {
    return setStatus(Status.IDLE);
  };

  var busyTimer = (0, _useTimeout.default)(setBusy, props.busyDelay);
  var idleTimer = (0, _useTimeout.default)(setIdle, props.hintDuration);
  (0, _useDidMount.default)(function () {
    isMounted.current = true;
  });
  (0, _useWillUnmount.default)(function () {
    isMounted.current = false;
    idleTimer.clear();
    busyTimer.clear();
  });
  var handlers = {
    onPromise: ifMounted(function () {
      setStatus(Status.PENDING);
      idleTimer.clear();
      busyTimer.start();
    }),
    onReject: ifMounted(function () {
      setStatus(Status.ERROR);
      busyTimer.clear();
      idleTimer.start();
    }),
    onResolve: ifMounted(function () {
      setStatus(Status.SUCCESS);
      busyTimer.clear();
      idleTimer.start();
    })
  };
  return _react.default.Children.map(props.children, function (child) {
    // propagate all unknown props
    var propagatedProps = (0, _createProps.omitProps)(child.props, [].concat(_toConsumableArray((0, _asArray.default)(props.callbacks)), _toConsumableArray(Object.keys(Stateful.defaultProps)))); // add new props for the current status

    var statusProps = _objectSpread({
      className: (0, _classnames.default)(child.props.className, (0, _createProps.createStatusClasses)(status, props))
    }, (0, _createProps.createStatusProps)(status, props)); // override the callbacks, attach handlers


    var callbackProps = (0, _createCallbacks.default)(child.props, props.callbacks, handlers);
    return _react.default.cloneElement(child, _objectSpread({}, propagatedProps, statusProps, callbackProps));
  });
}

var _default = Stateful;
exports.default = _default;