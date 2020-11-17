"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusyConsumer = exports.PendingConsumer = exports.FinishedConsumer = exports.ErrorConsumer = exports.SuccessConsumer = exports.IdleConsumer = exports.StatefulGate = exports.StatefulConsumer = exports.Stateful = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Status_1 = require("./Status");
var asArray_1 = __importDefault(require("./utils/asArray"));
var asFlags_1 = __importDefault(require("./utils/asFlags"));
var createCallbacks_1 = __importDefault(require("./utils/createCallbacks"));
var createProps_1 = require("./utils/createProps");
var Context_1 = __importStar(require("./Context"));
var hooks_1 = require("./hooks");
Stateful.defaultProps = {
    // Note that we use the keys of the defaultProps object to omit
    // our own props from propagation to children.
    // MAKE SURE TO CREATE A KEY FOR EACH SUPPORTED PROP, or that prop will be passed to wrapped children
    monitor: ["onClick"],
    pendingProps: [],
    pendingClasses: [],
    busyProps: [],
    busyClasses: [],
    busyDelay: 0,
    successProps: [],
    successClasses: [],
    successDuration: undefined,
    errorProps: [],
    errorClasses: [],
    errorDuration: undefined,
    hintDuration: 1000,
    delimiter: " ",
    shouldRejectValue: function isErrorValue(value) {
        return value instanceof Error;
    },
    provideProps: true,
    provideContext: false,
};
function Stateful(props) {
    var _a = hooks_1.useStateful(props), status = _a.status, handlers = _a.handlers;
    return react_1.default.Children.map(props.children, function (child) {
        if (!react_1.default.isValidElement(child)) {
            return child;
        }
        // all existing props we found on the wrapped child
        var childProps = child.props;
        // the props we generate and attach to the wrapped child
        var statusProps = __assign({ className: classnames_1.default(childProps.className, createProps_1.createStatusClassFlags(status, props)) }, createProps_1.createStatusProps(status, props));
        // props of the child that we pass along because they are unknown to us
        var foreignProps = createProps_1.omitProps(childProps, __spreadArrays(asArray_1.default(props.monitor), Object.keys(Stateful.defaultProps)));
        // overridden callbacks for the wrapped child. these are the monitored functions
        var callbackOverrides = createCallbacks_1.default(childProps, props.monitor, handlers);
        if (props.provideContext && props.provideProps) {
            // case "props and context": provide context, and also attach statusProps
            return (react_1.default.createElement(Context_1.StatefulProvider, { value: { statusProps: statusProps, status: status, configProps: props } }, react_1.default.cloneElement(child, __assign(__assign(__assign({}, callbackOverrides), foreignProps), statusProps))));
        }
        if (props.provideContext) {
            // case "context only": provide context, but do not attach statusProps
            return (react_1.default.createElement(Context_1.StatefulProvider, { value: { statusProps: statusProps, status: status, configProps: props } }, react_1.default.cloneElement(child, __assign(__assign({}, callbackOverrides), foreignProps))));
        }
        // case "props only": only attach statusProps, but do not provide context
        return react_1.default.cloneElement(child, __assign(__assign(__assign({}, callbackOverrides), foreignProps), statusProps));
    });
}
exports.Stateful = Stateful;
function StatefulConsumer(props) {
    var _a = react_1.default.useContext(Context_1.default), configProps = _a.configProps, statusProps = _a.statusProps;
    return react_1.default.Children.map(props.children, function (child) {
        if (!react_1.default.isValidElement(child)) {
            return child;
        }
        var ignoredStatuses = asArray_1.default(props.ignore);
        var effectiveStatuses = Status_1.AllStatuses.filter(function (s) { return !ignoredStatuses.includes(s); });
        var effectivePropKeys = createProps_1.getStatusPropKeys(effectiveStatuses, configProps);
        var effectiveClassKeys = createProps_1.getStatusClassNames(effectiveStatuses, configProps);
        var childProps = __assign(__assign({}, createProps_1.pickProps(statusProps, effectivePropKeys)), { className: classnames_1.default(child.props.className, createProps_1.pickProps(asFlags_1.default(statusProps.className), effectiveClassKeys)) });
        return react_1.default.cloneElement(child, childProps);
    });
}
exports.StatefulConsumer = StatefulConsumer;
function StatefulGate(props) {
    var status = react_1.default.useContext(Context_1.default).status;
    if (props.allow === status || props.allow.includes(status)) {
        return props.children;
    }
    return null;
}
exports.StatefulGate = StatefulGate;
function IdleConsumer(props) {
    return react_1.default.createElement(StatefulGate, __assign({}, props, { allow: Status_1.Status.IDLE }));
}
exports.IdleConsumer = IdleConsumer;
function SuccessConsumer(props) {
    return react_1.default.createElement(StatefulGate, __assign({}, props, { allow: Status_1.Status.SUCCESS }));
}
exports.SuccessConsumer = SuccessConsumer;
function ErrorConsumer(props) {
    return react_1.default.createElement(StatefulGate, __assign({}, props, { allow: Status_1.Status.ERROR }));
}
exports.ErrorConsumer = ErrorConsumer;
function FinishedConsumer(props) {
    return react_1.default.createElement(StatefulGate, __assign({}, props, { allow: [Status_1.Status.SUCCESS, Status_1.Status.ERROR] }));
}
exports.FinishedConsumer = FinishedConsumer;
function PendingConsumer(_a) {
    var exact = _a.exact, props = __rest(_a, ["exact"]);
    return react_1.default.createElement(StatefulGate, __assign({}, props, { allow: exact ? Status_1.Status.PENDING : [Status_1.Status.BUSY, Status_1.Status.PENDING] }));
}
exports.PendingConsumer = PendingConsumer;
function BusyConsumer(_a) {
    var exact = _a.exact, props = __rest(_a, ["exact"]);
    return react_1.default.createElement(StatefulGate, __assign({}, props, { allow: exact ? Status_1.Status.BUSY : [Status_1.Status.BUSY, Status_1.Status.PENDING] }));
}
exports.BusyConsumer = BusyConsumer;
