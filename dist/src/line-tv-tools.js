// ==UserScript==
// @name           Line TV 增強功能
// @version        1.0.0
// @description    Line TV 廣告跳過 & 1080P 解鎖功能 & 影片跳過快捷鍵
// @author         Vanisoul
// @match          https://www.linetv.tw/*
// @license        MIT
// @namespace      https://greasyfork.org/users/429936
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_registerMenuCommand
// @grant          GM_unregisterMenuCommand
// ==/UserScript==

(function() {
    "use strict";
    function _mergeNamespaces(n, m) {
        m.forEach((function(e) {
            e && typeof e !== "string" && !Array.isArray(e) && Object.keys(e).forEach((function(k) {
                if (k !== "default" && !(k in n)) {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function() {
                            return e[k];
                        }
                    });
                }
            }));
        }));
        return Object.freeze(n);
    }
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    function _arrayWithHoles(r) {
        if (Array.isArray(r)) return r;
    }
    function _iterableToArrayLimit(r, l) {
        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null != t) {
            var e, n, i, u, a = [], f = true, o = false;
            try {
                if (i = (t = t.call(r)).next, 0 === l) ; else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), 
                a.length !== l); f = !0) ;
            } catch (r) {
                o = true, n = r;
            } finally {
                try {
                    if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
                } finally {
                    if (o) throw n;
                }
            }
            return a;
        }
    }
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _slicedToArray(r, e) {
        return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
    }
    function _unsupportedIterableToArray(r, a) {
        if (r) {
            if ("string" == typeof r) return _arrayLikeToArray(r, a);
            var t = {}.toString.call(r).slice(8, -1);
            return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
        }
    }
    function getDefaultExportFromCjs(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
    }
    function getAugmentedNamespace(n) {
        if (n.__esModule) return n;
        var f = n.default;
        if (typeof f == "function") {
            var a = function a() {
                if (this instanceof a) {
                    return Reflect.construct(f, arguments, this.constructor);
                }
                return f.apply(this, arguments);
            };
            a.prototype = f.prototype;
        } else a = {};
        Object.defineProperty(a, "__esModule", {
            value: true
        });
        Object.keys(n).forEach((function(k) {
            var d = Object.getOwnPropertyDescriptor(n, k);
            Object.defineProperty(a, k, d.get ? d : {
                enumerable: true,
                get: function() {
                    return n[k];
                }
            });
        }));
        return a;
    }
    var react = {
        exports: {}
    };
    var react_production_min = {};
    /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */    var hasRequiredReact_production_min;
    function requireReact_production_min() {
        if (hasRequiredReact_production_min) return react_production_min;
        hasRequiredReact_production_min = 1;
        var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
        function A(a) {
            if (null === a || "object" !== typeof a) return null;
            a = z && a[z] || a["@@iterator"];
            return "function" === typeof a ? a : null;
        }
        var B = {
            isMounted: function() {
                return false;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, C = Object.assign, D = {};
        function E(a, b, e) {
            this.props = a;
            this.context = b;
            this.refs = D;
            this.updater = e || B;
        }
        E.prototype.isReactComponent = {};
        E.prototype.setState = function(a, b) {
            if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, a, b, "setState");
        };
        E.prototype.forceUpdate = function(a) {
            this.updater.enqueueForceUpdate(this, a, "forceUpdate");
        };
        function F() {}
        F.prototype = E.prototype;
        function G(a, b, e) {
            this.props = a;
            this.context = b;
            this.refs = D;
            this.updater = e || B;
        }
        var H = G.prototype = new F;
        H.constructor = G;
        C(H, E.prototype);
        H.isPureReactComponent = true;
        var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = {
            current: null
        }, L = {
            key: true,
            ref: true,
            __self: true,
            __source: true
        };
        function M(a, b, e) {
            var d, c = {}, k = null, h = null;
            if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), 
            b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
            var g = arguments.length - 2;
            if (1 === g) c.children = e; else if (1 < g) {
                for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
                c.children = f;
            }
            if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
            return {
                $$typeof: l,
                type: a,
                key: k,
                ref: h,
                props: c,
                _owner: K.current
            };
        }
        function N(a, b) {
            return {
                $$typeof: l,
                type: a.type,
                key: b,
                ref: a.ref,
                props: a.props,
                _owner: a._owner
            };
        }
        function O(a) {
            return "object" === typeof a && null !== a && a.$$typeof === l;
        }
        function escape(a) {
            var b = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + a.replace(/[=:]/g, (function(a) {
                return b[a];
            }));
        }
        var P = /\/+/g;
        function Q(a, b) {
            return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
        }
        function R(a, b, e, d, c) {
            var k = typeof a;
            if ("undefined" === k || "boolean" === k) a = null;
            var h = false;
            if (null === a) h = true; else switch (k) {
              case "string":
              case "number":
                h = true;
                break;

              case "object":
                switch (a.$$typeof) {
                  case l:
                  case n:
                    h = true;
                }
            }
            if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", 
            null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", (function(a) {
                return a;
            }))) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), 
            b.push(c)), 1;
            h = 0;
            d = "" === d ? "." : d + ":";
            if (I(a)) for (var g = 0; g < a.length; g++) {
                k = a[g];
                var f = d + Q(k, g);
                h += R(k, b, e, f, c);
            } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, 
            f = d + Q(k, g++), h += R(k, b, e, f, c); else if ("object" === k) throw b = String(a), 
            Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
            return h;
        }
        function S(a, b, e) {
            if (null == a) return a;
            var d = [], c = 0;
            R(a, d, "", "", (function(a) {
                return b.call(e, a, c++);
            }));
            return d;
        }
        function T(a) {
            if (-1 === a._status) {
                var b = a._result;
                b = b();
                b.then((function(b) {
                    if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
                }), (function(b) {
                    if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
                }));
                -1 === a._status && (a._status = 0, a._result = b);
            }
            if (1 === a._status) return a._result.default;
            throw a._result;
        }
        var U = {
            current: null
        }, V = {
            transition: null
        }, W = {
            ReactCurrentDispatcher: U,
            ReactCurrentBatchConfig: V,
            ReactCurrentOwner: K
        };
        function X() {
            throw Error("act(...) is not supported in production builds of React.");
        }
        react_production_min.Children = {
            map: S,
            forEach: function(a, b, e) {
                S(a, (function() {
                    b.apply(this, arguments);
                }), e);
            },
            count: function(a) {
                var b = 0;
                S(a, (function() {
                    b++;
                }));
                return b;
            },
            toArray: function(a) {
                return S(a, (function(a) {
                    return a;
                })) || [];
            },
            only: function(a) {
                if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
                return a;
            }
        };
        react_production_min.Component = E;
        react_production_min.Fragment = p;
        react_production_min.Profiler = r;
        react_production_min.PureComponent = G;
        react_production_min.StrictMode = q;
        react_production_min.Suspense = w;
        react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
        react_production_min.act = X;
        react_production_min.cloneElement = function(a, b, e) {
            if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
            var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
            if (null != b) {
                void 0 !== b.ref && (k = b.ref, h = K.current);
                void 0 !== b.key && (c = "" + b.key);
                if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
                for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
            }
            var f = arguments.length - 2;
            if (1 === f) d.children = e; else if (1 < f) {
                g = Array(f);
                for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
                d.children = g;
            }
            return {
                $$typeof: l,
                type: a.type,
                key: c,
                ref: k,
                props: d,
                _owner: h
            };
        };
        react_production_min.createContext = function(a) {
            a = {
                $$typeof: u,
                _currentValue: a,
                _currentValue2: a,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
            };
            a.Provider = {
                $$typeof: t,
                _context: a
            };
            return a.Consumer = a;
        };
        react_production_min.createElement = M;
        react_production_min.createFactory = function(a) {
            var b = M.bind(null, a);
            b.type = a;
            return b;
        };
        react_production_min.createRef = function() {
            return {
                current: null
            };
        };
        react_production_min.forwardRef = function(a) {
            return {
                $$typeof: v,
                render: a
            };
        };
        react_production_min.isValidElement = O;
        react_production_min.lazy = function(a) {
            return {
                $$typeof: y,
                _payload: {
                    _status: -1,
                    _result: a
                },
                _init: T
            };
        };
        react_production_min.memo = function(a, b) {
            return {
                $$typeof: x,
                type: a,
                compare: void 0 === b ? null : b
            };
        };
        react_production_min.startTransition = function(a) {
            var b = V.transition;
            V.transition = {};
            try {
                a();
            } finally {
                V.transition = b;
            }
        };
        react_production_min.unstable_act = X;
        react_production_min.useCallback = function(a, b) {
            return U.current.useCallback(a, b);
        };
        react_production_min.useContext = function(a) {
            return U.current.useContext(a);
        };
        react_production_min.useDebugValue = function() {};
        react_production_min.useDeferredValue = function(a) {
            return U.current.useDeferredValue(a);
        };
        react_production_min.useEffect = function(a, b) {
            return U.current.useEffect(a, b);
        };
        react_production_min.useId = function() {
            return U.current.useId();
        };
        react_production_min.useImperativeHandle = function(a, b, e) {
            return U.current.useImperativeHandle(a, b, e);
        };
        react_production_min.useInsertionEffect = function(a, b) {
            return U.current.useInsertionEffect(a, b);
        };
        react_production_min.useLayoutEffect = function(a, b) {
            return U.current.useLayoutEffect(a, b);
        };
        react_production_min.useMemo = function(a, b) {
            return U.current.useMemo(a, b);
        };
        react_production_min.useReducer = function(a, b, e) {
            return U.current.useReducer(a, b, e);
        };
        react_production_min.useRef = function(a) {
            return U.current.useRef(a);
        };
        react_production_min.useState = function(a) {
            return U.current.useState(a);
        };
        react_production_min.useSyncExternalStore = function(a, b, e) {
            return U.current.useSyncExternalStore(a, b, e);
        };
        react_production_min.useTransition = function() {
            return U.current.useTransition();
        };
        react_production_min.version = "18.3.1";
        return react_production_min;
    }
    {
        react.exports = requireReact_production_min();
    }
    var reactExports = react.exports;
    var React = getDefaultExportFromCjs(reactExports);
    var React$1 = _mergeNamespaces({
        __proto__: null,
        default: React
    }, [ reactExports ]);
    const common = {
        black: "#000",
        white: "#fff"
    };
    const red = {
        300: "#e57373",
        400: "#ef5350",
        500: "#f44336",
        700: "#d32f2f",
        800: "#c62828"
    };
    const purple = {
        50: "#f3e5f5",
        200: "#ce93d8",
        300: "#ba68c8",
        400: "#ab47bc",
        500: "#9c27b0",
        700: "#7b1fa2"
    };
    const blue = {
        50: "#e3f2fd",
        200: "#90caf9",
        400: "#42a5f5",
        700: "#1976d2",
        800: "#1565c0"
    };
    const lightBlue = {
        300: "#4fc3f7",
        400: "#29b6f6",
        500: "#03a9f4",
        700: "#0288d1",
        900: "#01579b"
    };
    const green = {
        300: "#81c784",
        400: "#66bb6a",
        500: "#4caf50",
        700: "#388e3c",
        800: "#2e7d32",
        900: "#1b5e20"
    };
    const orange = {
        300: "#ffb74d",
        400: "#ffa726",
        500: "#ff9800",
        700: "#f57c00",
        900: "#e65100"
    };
    const grey = {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        A100: "#f5f5f5",
        A200: "#eeeeee",
        A400: "#bdbdbd",
        A700: "#616161"
    };
    function formatMuiErrorMessage$1(code) {
        let url = "https://mui.com/production-error/?code=" + code;
        for (let i = 1; i < arguments.length; i += 1) {
            url += "&args[]=" + encodeURIComponent(arguments[i]);
        }
        return "Minified MUI error #" + code + "; visit " + url + " for the full message.";
    }
    var formatMuiErrorMessage = Object.freeze({
        __proto__: null,
        default: formatMuiErrorMessage$1
    });
    var THEME_ID = "$$material";
    function _extends$1() {
        return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
            }
            return n;
        }, _extends$1.apply(null, arguments);
    }
    function _objectWithoutPropertiesLoose(r, e) {
        if (null == r) return {};
        var t = {};
        for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
            if (-1 !== e.indexOf(n)) continue;
            t[n] = r[n];
        }
        return t;
    }
    function sheetForTag(tag) {
        if (tag.sheet) {
            return tag.sheet;
        }
        for (var i = 0; i < document.styleSheets.length; i++) {
            if (document.styleSheets[i].ownerNode === tag) {
                return document.styleSheets[i];
            }
        }
        return undefined;
    }
    function createStyleElement(options) {
        var tag = document.createElement("style");
        tag.setAttribute("data-emotion", options.key);
        if (options.nonce !== undefined) {
            tag.setAttribute("nonce", options.nonce);
        }
        tag.appendChild(document.createTextNode(""));
        tag.setAttribute("data-s", "");
        return tag;
    }
    var StyleSheet = function() {
        function StyleSheet(options) {
            var _this = this;
            this._insertTag = function(tag) {
                var before;
                if (_this.tags.length === 0) {
                    if (_this.insertionPoint) {
                        before = _this.insertionPoint.nextSibling;
                    } else if (_this.prepend) {
                        before = _this.container.firstChild;
                    } else {
                        before = _this.before;
                    }
                } else {
                    before = _this.tags[_this.tags.length - 1].nextSibling;
                }
                _this.container.insertBefore(tag, before);
                _this.tags.push(tag);
            };
            this.isSpeedy = options.speedy === undefined ? true : options.speedy;
            this.tags = [];
            this.ctr = 0;
            this.nonce = options.nonce;
            this.key = options.key;
            this.container = options.container;
            this.prepend = options.prepend;
            this.insertionPoint = options.insertionPoint;
            this.before = null;
        }
        var _proto = StyleSheet.prototype;
        _proto.hydrate = function hydrate(nodes) {
            nodes.forEach(this._insertTag);
        };
        _proto.insert = function insert(rule) {
            if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
                this._insertTag(createStyleElement(this));
            }
            var tag = this.tags[this.tags.length - 1];
            if (this.isSpeedy) {
                var sheet = sheetForTag(tag);
                try {
                    sheet.insertRule(rule, sheet.cssRules.length);
                } catch (e) {}
            } else {
                tag.appendChild(document.createTextNode(rule));
            }
            this.ctr++;
        };
        _proto.flush = function flush() {
            this.tags.forEach((function(tag) {
                var _tag$parentNode;
                return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
            }));
            this.tags = [];
            this.ctr = 0;
        };
        return StyleSheet;
    }();
    var MS = "-ms-";
    var MOZ = "-moz-";
    var WEBKIT = "-webkit-";
    var COMMENT = "comm";
    var RULESET = "rule";
    var DECLARATION = "decl";
    var IMPORT = "@import";
    var KEYFRAMES = "@keyframes";
    var LAYER = "@layer";
    var abs = Math.abs;
    var from = String.fromCharCode;
    var assign = Object.assign;
    function hash(value, length) {
        return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
    }
    function trim(value) {
        return value.trim();
    }
    function match(value, pattern) {
        return (value = pattern.exec(value)) ? value[0] : value;
    }
    function replace(value, pattern, replacement) {
        return value.replace(pattern, replacement);
    }
    function indexof(value, search) {
        return value.indexOf(search);
    }
    function charat(value, index) {
        return value.charCodeAt(index) | 0;
    }
    function substr(value, begin, end) {
        return value.slice(begin, end);
    }
    function strlen(value) {
        return value.length;
    }
    function sizeof(value) {
        return value.length;
    }
    function append(value, array) {
        return array.push(value), value;
    }
    function combine(array, callback) {
        return array.map(callback).join("");
    }
    var line = 1;
    var column = 1;
    var length = 0;
    var position = 0;
    var character = 0;
    var characters = "";
    function node(value, root, parent, type, props, children, length) {
        return {
            value: value,
            root: root,
            parent: parent,
            type: type,
            props: props,
            children: children,
            line: line,
            column: column,
            length: length,
            return: ""
        };
    }
    function copy(root, props) {
        return assign(node("", null, null, "", null, null, 0), root, {
            length: -root.length
        }, props);
    }
    function char() {
        return character;
    }
    function prev() {
        character = position > 0 ? charat(characters, --position) : 0;
        if (column--, character === 10) column = 1, line--;
        return character;
    }
    function next() {
        character = position < length ? charat(characters, position++) : 0;
        if (column++, character === 10) column = 1, line++;
        return character;
    }
    function peek() {
        return charat(characters, position);
    }
    function caret() {
        return position;
    }
    function slice(begin, end) {
        return substr(characters, begin, end);
    }
    function token(type) {
        switch (type) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;

          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;

          case 58:
            return 3;

          case 34:
          case 39:
          case 40:
          case 91:
            return 2;

          case 41:
          case 93:
            return 1;
        }
        return 0;
    }
    function alloc(value) {
        return line = column = 1, length = strlen(characters = value), position = 0, [];
    }
    function dealloc(value) {
        return characters = "", value;
    }
    function delimit(type) {
        return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
    }
    function whitespace(type) {
        while (character = peek()) if (character < 33) next(); else break;
        return token(type) > 2 || token(character) > 3 ? "" : " ";
    }
    function escaping(index, count) {
        while (--count && next()) if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
        return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
    }
    function delimiter(type) {
        while (next()) switch (character) {
          case type:
            return position;

          case 34:
          case 39:
            if (type !== 34 && type !== 39) delimiter(character);
            break;

          case 40:
            if (type === 41) delimiter(type);
            break;

          case 92:
            next();
            break;
        }
        return position;
    }
    function commenter(type, index) {
        while (next()) if (type + character === 47 + 10) break; else if (type + character === 42 + 42 && peek() === 47) break;
        return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
    }
    function identifier(index) {
        while (!token(peek())) next();
        return slice(index, position);
    }
    function compile(value) {
        return dealloc(parse("", null, null, null, [ "" ], value = alloc(value), 0, [ 0 ], value));
    }
    function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
        var index = 0;
        var offset = 0;
        var length = pseudo;
        var atrule = 0;
        var property = 0;
        var previous = 0;
        var variable = 1;
        var scanning = 1;
        var ampersand = 1;
        var character = 0;
        var type = "";
        var props = rules;
        var children = rulesets;
        var reference = rule;
        var characters = type;
        while (scanning) switch (previous = character, character = next()) {
          case 40:
            if (previous != 108 && charat(characters, length - 1) == 58) {
                if (indexof(characters += replace(delimit(character), "&", "&\f"), "&\f") != -1) ampersand = -1;
                break;
            }

          case 34:
          case 39:
          case 91:
            characters += delimit(character);
            break;

          case 9:
          case 10:
          case 13:
          case 32:
            characters += whitespace(previous);
            break;

          case 92:
            characters += escaping(caret() - 1, 7);
            continue;

          case 47:
            switch (peek()) {
              case 42:
              case 47:
                append(comment(commenter(next(), caret()), root, parent), declarations);
                break;

              default:
                characters += "/";
            }
            break;

          case 123 * variable:
            points[index++] = strlen(characters) * ampersand;

          case 125 * variable:
          case 59:
          case 0:
            switch (character) {
              case 0:
              case 125:
                scanning = 0;

              case 59 + offset:
                if (ampersand == -1) characters = replace(characters, /\f/g, "");
                if (property > 0 && strlen(characters) - length) append(property > 32 ? declaration(characters + ";", rule, parent, length - 1) : declaration(replace(characters, " ", "") + ";", rule, parent, length - 2), declarations);
                break;

              case 59:
                characters += ";";

              default:
                append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
                if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children); else switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
                    break;

                  default:
                    parse(characters, reference, reference, reference, [ "" ], children, 0, points, children);
                }
            }
            index = offset = property = 0, variable = ampersand = 1, type = characters = "", 
            length = pseudo;
            break;

          case 58:
            length = 1 + strlen(characters), property = previous;

          default:
            if (variable < 1) if (character == 123) --variable; else if (character == 125 && variable++ == 0 && prev() == 125) continue;
            switch (characters += from(character), character * variable) {
              case 38:
                ampersand = offset > 0 ? 1 : (characters += "\f", -1);
                break;

              case 44:
                points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
                break;

              case 64:
                if (peek() === 45) characters += delimit(next());
                atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), 
                character++;
                break;

              case 45:
                if (previous === 45 && strlen(characters) == 2) variable = 0;
            }
        }
        return rulesets;
    }
    function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
        var post = offset - 1;
        var rule = offset === 0 ? rules : [ "" ];
        var size = sizeof(rule);
        for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
        return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length);
    }
    function comment(value, root, parent) {
        return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
    }
    function declaration(value, root, parent, length) {
        return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length);
    }
    function serialize(children, callback) {
        var output = "";
        var length = sizeof(children);
        for (var i = 0; i < length; i++) output += callback(children[i], i, children, callback) || "";
        return output;
    }
    function stringify(element, index, children, callback) {
        switch (element.type) {
          case LAYER:
            if (element.children.length) break;

          case IMPORT:
          case DECLARATION:
            return element.return = element.return || element.value;

          case COMMENT:
            return "";

          case KEYFRAMES:
            return element.return = element.value + "{" + serialize(element.children, callback) + "}";

          case RULESET:
            element.value = element.props.join(",");
        }
        return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
    }
    function middleware(collection) {
        var length = sizeof(collection);
        return function(element, index, children, callback) {
            var output = "";
            for (var i = 0; i < length; i++) output += collection[i](element, index, children, callback) || "";
            return output;
        };
    }
    function rulesheet(callback) {
        return function(element) {
            if (!element.root) if (element = element.return) callback(element);
        };
    }
    var weakMemoize = function weakMemoize(func) {
        var cache = new WeakMap;
        return function(arg) {
            if (cache.has(arg)) {
                return cache.get(arg);
            }
            var ret = func(arg);
            cache.set(arg, ret);
            return ret;
        };
    };
    function memoize$1(fn) {
        var cache = Object.create(null);
        return function(arg) {
            if (cache[arg] === undefined) cache[arg] = fn(arg);
            return cache[arg];
        };
    }
    var isBrowser$4 = typeof document !== "undefined";
    var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
        var previous = 0;
        var character = 0;
        while (true) {
            previous = character;
            character = peek();
            if (previous === 38 && character === 12) {
                points[index] = 1;
            }
            if (token(character)) {
                break;
            }
            next();
        }
        return slice(begin, position);
    };
    var toRules = function toRules(parsed, points) {
        var index = -1;
        var character = 44;
        do {
            switch (token(character)) {
              case 0:
                if (character === 38 && peek() === 12) {
                    points[index] = 1;
                }
                parsed[index] += identifierWithPointTracking(position - 1, points, index);
                break;

              case 2:
                parsed[index] += delimit(character);
                break;

              case 4:
                if (character === 44) {
                    parsed[++index] = peek() === 58 ? "&\f" : "";
                    points[index] = parsed[index].length;
                    break;
                }

              default:
                parsed[index] += from(character);
            }
        } while (character = next());
        return parsed;
    };
    var getRules = function getRules(value, points) {
        return dealloc(toRules(alloc(value), points));
    };
    var fixedElements = new WeakMap;
    var compat = function compat(element) {
        if (element.type !== "rule" || !element.parent || element.length < 1) {
            return;
        }
        var value = element.value;
        var parent = element.parent;
        var isImplicitRule = element.column === parent.column && element.line === parent.line;
        while (parent.type !== "rule") {
            parent = parent.parent;
            if (!parent) return;
        }
        if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
            return;
        }
        if (isImplicitRule) {
            return;
        }
        fixedElements.set(element, true);
        var points = [];
        var rules = getRules(value, points);
        var parentRules = parent.props;
        for (var i = 0, k = 0; i < rules.length; i++) {
            for (var j = 0; j < parentRules.length; j++, k++) {
                element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
            }
        }
    };
    var removeLabel = function removeLabel(element) {
        if (element.type === "decl") {
            var value = element.value;
            if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
                element["return"] = "";
                element.value = "";
            }
        }
    };
    function prefix(value, length) {
        switch (hash(value, length)) {
          case 5103:
            return WEBKIT + "print-" + value + value;

          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return WEBKIT + value + value;

          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return WEBKIT + value + MOZ + value + MS + value + value;

          case 6828:
          case 4268:
            return WEBKIT + value + MS + value + value;

          case 6165:
            return WEBKIT + value + MS + "flex-" + value + value;

          case 5187:
            return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;

          case 5443:
            return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;

          case 4675:
            return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;

          case 5548:
            return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;

          case 5292:
            return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;

          case 6060:
            return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;

          case 4554:
            return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;

          case 6187:
            return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;

          case 5495:
          case 3959:
            return replace(value, /(image-set\([^]*)/, WEBKIT + "$1" + "$`$1");

          case 4968:
            return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;

          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;

          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
              case 109:
                if (charat(value, length + 4) !== 45) break;

              case 102:
                return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3" + "$1" + MOZ + (charat(value, length + 3) == 108 ? "$3" : "$2-$3")) + value;

              case 115:
                return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length) + value : value;
            }
            break;

          case 4949:
            if (charat(value, length + 1) !== 115) break;

          case 6444:
            switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
              case 107:
                return replace(value, ":", ":" + WEBKIT) + value;

              case 101:
                return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3" + "$1" + WEBKIT + "$2$3" + "$1" + MS + "$2box$3") + value;
            }
            break;

          case 5936:
            switch (charat(value, length + 11)) {
              case 114:
                return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;

              case 108:
                return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;

              case 45:
                return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
            }
            return WEBKIT + value + MS + value + value;
        }
        return value;
    }
    var prefixer = function prefixer(element, index, children, callback) {
        if (element.length > -1) if (!element["return"]) switch (element.type) {
          case DECLARATION:
            element["return"] = prefix(element.value, element.length);
            break;

          case KEYFRAMES:
            return serialize([ copy(element, {
                value: replace(element.value, "@", "@" + WEBKIT)
            }) ], callback);

          case RULESET:
            if (element.length) return combine(element.props, (function(value) {
                switch (match(value, /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    return serialize([ copy(element, {
                        props: [ replace(value, /:(read-\w+)/, ":" + MOZ + "$1") ]
                    }) ], callback);

                  case "::placeholder":
                    return serialize([ copy(element, {
                        props: [ replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1") ]
                    }), copy(element, {
                        props: [ replace(value, /:(plac\w+)/, ":" + MOZ + "$1") ]
                    }), copy(element, {
                        props: [ replace(value, /:(plac\w+)/, MS + "input-$1") ]
                    }) ], callback);
                }
                return "";
            }));
        }
    };
    var getServerStylisCache = isBrowser$4 ? undefined : weakMemoize((function() {
        return memoize$1((function() {
            return {};
        }));
    }));
    var defaultStylisPlugins = [ prefixer ];
    var createCache = function createCache(options) {
        var key = options.key;
        if (isBrowser$4 && key === "css") {
            var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
            Array.prototype.forEach.call(ssrStyles, (function(node) {
                var dataEmotionAttribute = node.getAttribute("data-emotion");
                if (dataEmotionAttribute.indexOf(" ") === -1) {
                    return;
                }
                document.head.appendChild(node);
                node.setAttribute("data-s", "");
            }));
        }
        var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
        var inserted = {};
        var container;
        var nodesToHydrate = [];
        if (isBrowser$4) {
            container = options.container || document.head;
            Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), (function(node) {
                var attrib = node.getAttribute("data-emotion").split(" ");
                for (var i = 1; i < attrib.length; i++) {
                    inserted[attrib[i]] = true;
                }
                nodesToHydrate.push(node);
            }));
        }
        var _insert;
        var omnipresentPlugins = [ compat, removeLabel ];
        if (!getServerStylisCache) {
            var currentSheet;
            var finalizingPlugins = [ stringify, rulesheet((function(rule) {
                currentSheet.insert(rule);
            })) ];
            var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
            var stylis = function stylis(styles) {
                return serialize(compile(styles), serializer);
            };
            _insert = function insert(selector, serialized, sheet, shouldCache) {
                currentSheet = sheet;
                stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
                if (shouldCache) {
                    cache.inserted[serialized.name] = true;
                }
            };
        } else {
            var _finalizingPlugins = [ stringify ];
            var _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));
            var _stylis = function _stylis(styles) {
                return serialize(compile(styles), _serializer);
            };
            var serverStylisCache = getServerStylisCache(stylisPlugins)(key);
            var getRules = function getRules(selector, serialized) {
                var name = serialized.name;
                if (serverStylisCache[name] === undefined) {
                    serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
                }
                return serverStylisCache[name];
            };
            _insert = function _insert(selector, serialized, sheet, shouldCache) {
                var name = serialized.name;
                var rules = getRules(selector, serialized);
                if (cache.compat === undefined) {
                    if (shouldCache) {
                        cache.inserted[name] = true;
                    }
                    return rules;
                } else {
                    if (shouldCache) {
                        cache.inserted[name] = rules;
                    } else {
                        return rules;
                    }
                }
            };
        }
        var cache = {
            key: key,
            sheet: new StyleSheet({
                key: key,
                container: container,
                nonce: options.nonce,
                speedy: options.speedy,
                prepend: options.prepend,
                insertionPoint: options.insertionPoint
            }),
            nonce: options.nonce,
            inserted: inserted,
            registered: {},
            insert: _insert
        };
        cache.sheet.hydrate(nodesToHydrate);
        return cache;
    };
    var reactIs$2 = {
        exports: {}
    };
    var reactIs_production_min = {};
    /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */    var hasRequiredReactIs_production_min;
    function requireReactIs_production_min() {
        if (hasRequiredReactIs_production_min) return reactIs_production_min;
        hasRequiredReactIs_production_min = 1;
        var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
        function z(a) {
            if ("object" === typeof a && null !== a) {
                var u = a.$$typeof;
                switch (u) {
                  case c:
                    switch (a = a.type, a) {
                      case l:
                      case m:
                      case e:
                      case g:
                      case f:
                      case p:
                        return a;

                      default:
                        switch (a = a && a.$$typeof, a) {
                          case k:
                          case n:
                          case t:
                          case r:
                          case h:
                            return a;

                          default:
                            return u;
                        }
                    }

                  case d:
                    return u;
                }
            }
        }
        function A(a) {
            return z(a) === m;
        }
        reactIs_production_min.AsyncMode = l;
        reactIs_production_min.ConcurrentMode = m;
        reactIs_production_min.ContextConsumer = k;
        reactIs_production_min.ContextProvider = h;
        reactIs_production_min.Element = c;
        reactIs_production_min.ForwardRef = n;
        reactIs_production_min.Fragment = e;
        reactIs_production_min.Lazy = t;
        reactIs_production_min.Memo = r;
        reactIs_production_min.Portal = d;
        reactIs_production_min.Profiler = g;
        reactIs_production_min.StrictMode = f;
        reactIs_production_min.Suspense = p;
        reactIs_production_min.isAsyncMode = function(a) {
            return A(a) || z(a) === l;
        };
        reactIs_production_min.isConcurrentMode = A;
        reactIs_production_min.isContextConsumer = function(a) {
            return z(a) === k;
        };
        reactIs_production_min.isContextProvider = function(a) {
            return z(a) === h;
        };
        reactIs_production_min.isElement = function(a) {
            return "object" === typeof a && null !== a && a.$$typeof === c;
        };
        reactIs_production_min.isForwardRef = function(a) {
            return z(a) === n;
        };
        reactIs_production_min.isFragment = function(a) {
            return z(a) === e;
        };
        reactIs_production_min.isLazy = function(a) {
            return z(a) === t;
        };
        reactIs_production_min.isMemo = function(a) {
            return z(a) === r;
        };
        reactIs_production_min.isPortal = function(a) {
            return z(a) === d;
        };
        reactIs_production_min.isProfiler = function(a) {
            return z(a) === g;
        };
        reactIs_production_min.isStrictMode = function(a) {
            return z(a) === f;
        };
        reactIs_production_min.isSuspense = function(a) {
            return z(a) === p;
        };
        reactIs_production_min.isValidElementType = function(a) {
            return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
        };
        reactIs_production_min.typeOf = z;
        return reactIs_production_min;
    }
    {
        reactIs$2.exports = requireReactIs_production_min();
    }
    var reactIsExports$1 = reactIs$2.exports;
    var reactIs$1 = reactIsExports$1;
    var FORWARD_REF_STATICS = {
        $$typeof: true,
        render: true,
        defaultProps: true,
        displayName: true,
        propTypes: true
    };
    var MEMO_STATICS = {
        $$typeof: true,
        compare: true,
        defaultProps: true,
        displayName: true,
        propTypes: true,
        type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;
    var isBrowser$3 = typeof document !== "undefined";
    function getRegisteredStyles(registered, registeredStyles, classNames) {
        var rawClassName = "";
        classNames.split(" ").forEach((function(className) {
            if (registered[className] !== undefined) {
                registeredStyles.push(registered[className] + ";");
            } else if (className) {
                rawClassName += className + " ";
            }
        }));
        return rawClassName;
    }
    var registerStyles = function registerStyles(cache, serialized, isStringTag) {
        var className = cache.key + "-" + serialized.name;
        if ((isStringTag === false || isBrowser$3 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
            cache.registered[className] = serialized.styles;
        }
    };
    var insertStyles = function insertStyles(cache, serialized, isStringTag) {
        registerStyles(cache, serialized, isStringTag);
        var className = cache.key + "-" + serialized.name;
        if (cache.inserted[serialized.name] === undefined) {
            var stylesForSSR = "";
            var current = serialized;
            do {
                var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
                if (!isBrowser$3 && maybeStyles !== undefined) {
                    stylesForSSR += maybeStyles;
                }
                current = current.next;
            } while (current !== undefined);
            if (!isBrowser$3 && stylesForSSR.length !== 0) {
                return stylesForSSR;
            }
        }
    };
    function murmur2(str) {
        var h = 0;
        var k, i = 0, len = str.length;
        for (;len >= 4; ++i, len -= 4) {
            k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
            k = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
            k ^= k >>> 24;
            h = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
        }
        switch (len) {
          case 3:
            h ^= (str.charCodeAt(i + 2) & 255) << 16;

          case 2:
            h ^= (str.charCodeAt(i + 1) & 255) << 8;

          case 1:
            h ^= str.charCodeAt(i) & 255;
            h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
        }
        h ^= h >>> 13;
        h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
        return ((h ^ h >>> 15) >>> 0).toString(36);
    }
    var unitlessKeys = {
        animationIterationCount: 1,
        aspectRatio: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        scale: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
    };
    var hyphenateRegex = /[A-Z]|^ms/g;
    var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
    var isCustomProperty = function isCustomProperty(property) {
        return property.charCodeAt(1) === 45;
    };
    var isProcessableValue = function isProcessableValue(value) {
        return value != null && typeof value !== "boolean";
    };
    var processStyleName = memoize$1((function(styleName) {
        return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
    }));
    var processStyleValue = function processStyleValue(key, value) {
        switch (key) {
          case "animation":
          case "animationName":
            {
                if (typeof value === "string") {
                    return value.replace(animationRegex, (function(match, p1, p2) {
                        cursor = {
                            name: p1,
                            styles: p2,
                            next: cursor
                        };
                        return p1;
                    }));
                }
            }
        }
        if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
            return value + "px";
        }
        return value;
    };
    function handleInterpolation(mergedProps, registered, interpolation) {
        if (interpolation == null) {
            return "";
        }
        var componentSelector = interpolation;
        if (componentSelector.__emotion_styles !== undefined) {
            return componentSelector;
        }
        switch (typeof interpolation) {
          case "boolean":
            {
                return "";
            }

          case "object":
            {
                var keyframes = interpolation;
                if (keyframes.anim === 1) {
                    cursor = {
                        name: keyframes.name,
                        styles: keyframes.styles,
                        next: cursor
                    };
                    return keyframes.name;
                }
                var serializedStyles = interpolation;
                if (serializedStyles.styles !== undefined) {
                    var next = serializedStyles.next;
                    if (next !== undefined) {
                        while (next !== undefined) {
                            cursor = {
                                name: next.name,
                                styles: next.styles,
                                next: cursor
                            };
                            next = next.next;
                        }
                    }
                    var styles = serializedStyles.styles + ";";
                    return styles;
                }
                return createStringFromObject(mergedProps, registered, interpolation);
            }

          case "function":
            {
                if (mergedProps !== undefined) {
                    var previousCursor = cursor;
                    var result = interpolation(mergedProps);
                    cursor = previousCursor;
                    return handleInterpolation(mergedProps, registered, result);
                }
                break;
            }
        }
        var asString = interpolation;
        if (registered == null) {
            return asString;
        }
        var cached = registered[asString];
        return cached !== undefined ? cached : asString;
    }
    function createStringFromObject(mergedProps, registered, obj) {
        var string = "";
        if (Array.isArray(obj)) {
            for (var i = 0; i < obj.length; i++) {
                string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
            }
        } else {
            for (var key in obj) {
                var value = obj[key];
                if (typeof value !== "object") {
                    var asString = value;
                    if (registered != null && registered[asString] !== undefined) {
                        string += key + "{" + registered[asString] + "}";
                    } else if (isProcessableValue(asString)) {
                        string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
                    }
                } else {
                    if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === undefined)) {
                        for (var _i = 0; _i < value.length; _i++) {
                            if (isProcessableValue(value[_i])) {
                                string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
                            }
                        }
                    } else {
                        var interpolated = handleInterpolation(mergedProps, registered, value);
                        switch (key) {
                          case "animation":
                          case "animationName":
                            {
                                string += processStyleName(key) + ":" + interpolated + ";";
                                break;
                            }

                          default:
                            {
                                string += key + "{" + interpolated + "}";
                            }
                        }
                    }
                }
            }
        }
        return string;
    }
    var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
    var cursor;
    function serializeStyles(args, registered, mergedProps) {
        if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== undefined) {
            return args[0];
        }
        var stringMode = true;
        var styles = "";
        cursor = undefined;
        var strings = args[0];
        if (strings == null || strings.raw === undefined) {
            stringMode = false;
            styles += handleInterpolation(mergedProps, registered, strings);
        } else {
            var asTemplateStringsArr = strings;
            styles += asTemplateStringsArr[0];
        }
        for (var i = 1; i < args.length; i++) {
            styles += handleInterpolation(mergedProps, registered, args[i]);
            if (stringMode) {
                var templateStringsArr = strings;
                styles += templateStringsArr[i];
            }
        }
        labelPattern.lastIndex = 0;
        var identifierName = "";
        var match;
        while ((match = labelPattern.exec(styles)) !== null) {
            identifierName += "-" + match[1];
        }
        var name = murmur2(styles) + identifierName;
        return {
            name: name,
            styles: styles,
            next: cursor
        };
    }
    var isBrowser$2 = typeof document !== "undefined";
    var syncFallback = function syncFallback(create) {
        return create();
    };
    var useInsertionEffect = React$1["useInsertion" + "Effect"] ? React$1["useInsertion" + "Effect"] : false;
    var useInsertionEffectAlwaysWithSyncFallback = !isBrowser$2 ? syncFallback : useInsertionEffect || syncFallback;
    var useInsertionEffectWithLayoutFallback = useInsertionEffect || reactExports.useLayoutEffect;
    var isBrowser$1 = typeof document !== "undefined";
    var EmotionCacheContext = reactExports.createContext(typeof HTMLElement !== "undefined" ? createCache({
        key: "css"
    }) : null);
    var CacheProvider = EmotionCacheContext.Provider;
    var withEmotionCache = function withEmotionCache(func) {
        return reactExports.forwardRef((function(props, ref) {
            var cache = reactExports.useContext(EmotionCacheContext);
            return func(props, cache, ref);
        }));
    };
    if (!isBrowser$1) {
        withEmotionCache = function withEmotionCache(func) {
            return function(props) {
                var cache = reactExports.useContext(EmotionCacheContext);
                if (cache === null) {
                    cache = createCache({
                        key: "css"
                    });
                    return reactExports.createElement(EmotionCacheContext.Provider, {
                        value: cache
                    }, func(props, cache));
                } else {
                    return func(props, cache);
                }
            };
        };
    }
    var ThemeContext = reactExports.createContext({});
    var hasOwn = {}.hasOwnProperty;
    var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
    var createEmotionProps = function createEmotionProps(type, props) {
        var newProps = {};
        for (var _key in props) {
            if (hasOwn.call(props, _key)) {
                newProps[_key] = props[_key];
            }
        }
        newProps[typePropName] = type;
        return newProps;
    };
    var Insertion$1 = function Insertion(_ref) {
        var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
        registerStyles(cache, serialized, isStringTag);
        var rules = useInsertionEffectAlwaysWithSyncFallback((function() {
            return insertStyles(cache, serialized, isStringTag);
        }));
        if (!isBrowser$1 && rules !== undefined) {
            var _ref2;
            var serializedNames = serialized.name;
            var next = serialized.next;
            while (next !== undefined) {
                serializedNames += " " + next.name;
                next = next.next;
            }
            return reactExports.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, 
            _ref2.dangerouslySetInnerHTML = {
                __html: rules
            }, _ref2.nonce = cache.sheet.nonce, _ref2));
        }
        return null;
    };
    var Emotion = withEmotionCache((function(props, cache, ref) {
        var cssProp = props.css;
        if (typeof cssProp === "string" && cache.registered[cssProp] !== undefined) {
            cssProp = cache.registered[cssProp];
        }
        var WrappedComponent = props[typePropName];
        var registeredStyles = [ cssProp ];
        var className = "";
        if (typeof props.className === "string") {
            className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
        } else if (props.className != null) {
            className = props.className + " ";
        }
        var serialized = serializeStyles(registeredStyles, undefined, reactExports.useContext(ThemeContext));
        className += cache.key + "-" + serialized.name;
        var newProps = {};
        for (var _key2 in props) {
            if (hasOwn.call(props, _key2) && _key2 !== "css" && _key2 !== typePropName && true) {
                newProps[_key2] = props[_key2];
            }
        }
        newProps.className = className;
        if (ref) {
            newProps.ref = ref;
        }
        return reactExports.createElement(reactExports.Fragment, null, reactExports.createElement(Insertion$1, {
            cache: cache,
            serialized: serialized,
            isStringTag: typeof WrappedComponent === "string"
        }), reactExports.createElement(WrappedComponent, newProps));
    }));
    var Emotion$1 = Emotion;
    var jsx = function jsx(type, props) {
        var args = arguments;
        if (props == null || !hasOwn.call(props, "css")) {
            return reactExports.createElement.apply(undefined, args);
        }
        var argsLength = args.length;
        var createElementArgArray = new Array(argsLength);
        createElementArgArray[0] = Emotion$1;
        createElementArgArray[1] = createEmotionProps(type, props);
        for (var i = 2; i < argsLength; i++) {
            createElementArgArray[i] = args[i];
        }
        return reactExports.createElement.apply(null, createElementArgArray);
    };
    (function(_jsx) {
        var JSX;
        (function(_JSX) {})(JSX || (JSX = _jsx.JSX || (_jsx.JSX = {})));
    })(jsx || (jsx = {}));
    var Global = withEmotionCache((function(props, cache) {
        var styles = props.styles;
        var serialized = serializeStyles([ styles ], undefined, reactExports.useContext(ThemeContext));
        if (!isBrowser$1) {
            var _ref;
            var serializedNames = serialized.name;
            var serializedStyles = serialized.styles;
            var next = serialized.next;
            while (next !== undefined) {
                serializedNames += " " + next.name;
                serializedStyles += next.styles;
                next = next.next;
            }
            var shouldCache = cache.compat === true;
            var rules = cache.insert("", {
                name: serializedNames,
                styles: serializedStyles
            }, cache.sheet, shouldCache);
            if (shouldCache) {
                return null;
            }
            return reactExports.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, 
            _ref.dangerouslySetInnerHTML = {
                __html: rules
            }, _ref.nonce = cache.sheet.nonce, _ref));
        }
        var sheetRef = reactExports.useRef();
        useInsertionEffectWithLayoutFallback((function() {
            var key = cache.key + "-global";
            var sheet = new cache.sheet.constructor({
                key: key,
                nonce: cache.sheet.nonce,
                container: cache.sheet.container,
                speedy: cache.sheet.isSpeedy
            });
            var rehydrating = false;
            var node = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
            if (cache.sheet.tags.length) {
                sheet.before = cache.sheet.tags[0];
            }
            if (node !== null) {
                rehydrating = true;
                node.setAttribute("data-emotion", key);
                sheet.hydrate([ node ]);
            }
            sheetRef.current = [ sheet, rehydrating ];
            return function() {
                sheet.flush();
            };
        }), [ cache ]);
        useInsertionEffectWithLayoutFallback((function() {
            var sheetRefCurrent = sheetRef.current;
            var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
            if (rehydrating) {
                sheetRefCurrent[1] = false;
                return;
            }
            if (serialized.next !== undefined) {
                insertStyles(cache, serialized.next, true);
            }
            if (sheet.tags.length) {
                var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
                sheet.before = element;
                sheet.flush();
            }
            cache.insert("", serialized, sheet, false);
        }), [ cache, serialized.name ]);
        return null;
    }));
    function css() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return serializeStyles(args);
    }
    function keyframes() {
        var insertable = css.apply(void 0, arguments);
        var name = "animation-" + insertable.name;
        return {
            name: name,
            styles: "@keyframes " + name + "{" + insertable.styles + "}",
            anim: 1,
            toString: function toString() {
                return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
            }
        };
    }
    var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    var isPropValid = memoize$1((function(prop) {
        return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
    }));
    var isBrowser = typeof document !== "undefined";
    var testOmitPropsOnStringTag = isPropValid;
    var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
        return key !== "theme";
    };
    var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
        return typeof tag === "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
    };
    var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
        var shouldForwardProp;
        if (options) {
            var optionsShouldForwardProp = options.shouldForwardProp;
            shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
                return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
            } : optionsShouldForwardProp;
        }
        if (typeof shouldForwardProp !== "function" && isReal) {
            shouldForwardProp = tag.__emotion_forwardProp;
        }
        return shouldForwardProp;
    };
    var Insertion = function Insertion(_ref) {
        var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
        registerStyles(cache, serialized, isStringTag);
        var rules = useInsertionEffectAlwaysWithSyncFallback((function() {
            return insertStyles(cache, serialized, isStringTag);
        }));
        if (!isBrowser && rules !== undefined) {
            var _ref2;
            var serializedNames = serialized.name;
            var next = serialized.next;
            while (next !== undefined) {
                serializedNames += " " + next.name;
                next = next.next;
            }
            return reactExports.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, 
            _ref2.dangerouslySetInnerHTML = {
                __html: rules
            }, _ref2.nonce = cache.sheet.nonce, _ref2));
        }
        return null;
    };
    var createStyled$3 = function createStyled(tag, options) {
        var isReal = tag.__emotion_real === tag;
        var baseTag = isReal && tag.__emotion_base || tag;
        var identifierName;
        var targetClassName;
        if (options !== undefined) {
            identifierName = options.label;
            targetClassName = options.target;
        }
        var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
        var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
        var shouldUseAs = !defaultShouldForwardProp("as");
        return function() {
            var args = arguments;
            var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];
            if (identifierName !== undefined) {
                styles.push("label:" + identifierName + ";");
            }
            if (args[0] == null || args[0].raw === undefined) {
                styles.push.apply(styles, args);
            } else {
                var templateStringsArr = args[0];
                styles.push(templateStringsArr[0]);
                var len = args.length;
                var i = 1;
                for (;i < len; i++) {
                    styles.push(args[i], templateStringsArr[i]);
                }
            }
            var Styled = withEmotionCache((function(props, cache, ref) {
                var FinalTag = shouldUseAs && props.as || baseTag;
                var className = "";
                var classInterpolations = [];
                var mergedProps = props;
                if (props.theme == null) {
                    mergedProps = {};
                    for (var key in props) {
                        mergedProps[key] = props[key];
                    }
                    mergedProps.theme = reactExports.useContext(ThemeContext);
                }
                if (typeof props.className === "string") {
                    className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
                } else if (props.className != null) {
                    className = props.className + " ";
                }
                var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
                className += cache.key + "-" + serialized.name;
                if (targetClassName !== undefined) {
                    className += " " + targetClassName;
                }
                var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
                var newProps = {};
                for (var _key in props) {
                    if (shouldUseAs && _key === "as") continue;
                    if (finalShouldForwardProp(_key)) {
                        newProps[_key] = props[_key];
                    }
                }
                newProps.className = className;
                if (ref) {
                    newProps.ref = ref;
                }
                return reactExports.createElement(reactExports.Fragment, null, reactExports.createElement(Insertion, {
                    cache: cache,
                    serialized: serialized,
                    isStringTag: typeof FinalTag === "string"
                }), reactExports.createElement(FinalTag, newProps));
            }));
            Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
            Styled.defaultProps = tag.defaultProps;
            Styled.__emotion_real = Styled;
            Styled.__emotion_base = baseTag;
            Styled.__emotion_styles = styles;
            Styled.__emotion_forwardProp = shouldForwardProp;
            Object.defineProperty(Styled, "toString", {
                value: function value() {
                    return "." + targetClassName;
                }
            });
            Styled.withComponent = function(nextTag, nextOptions) {
                var newStyled = createStyled(nextTag, _extends$1({}, options, nextOptions, {
                    shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
                }));
                return newStyled.apply(void 0, styles);
            };
            return Styled;
        };
    };
    var tags = [ "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan" ];
    var newStyled = createStyled$3.bind(null);
    tags.forEach((function(tagName) {
        newStyled[tagName] = newStyled(tagName);
    }));
    var jsxRuntime = {
        exports: {}
    };
    var reactJsxRuntime_production_min = {};
    /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */    var hasRequiredReactJsxRuntime_production_min;
    function requireReactJsxRuntime_production_min() {
        if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
        hasRequiredReactJsxRuntime_production_min = 1;
        var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = {
            key: true,
            ref: true,
            __self: true,
            __source: true
        };
        function q(c, a, g) {
            var b, d = {}, e = null, h = null;
            void 0 !== g && (e = "" + g);
            void 0 !== a.key && (e = "" + a.key);
            void 0 !== a.ref && (h = a.ref);
            for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
            if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
            return {
                $$typeof: k,
                type: c,
                key: e,
                ref: h,
                props: d,
                _owner: n.current
            };
        }
        reactJsxRuntime_production_min.Fragment = l;
        reactJsxRuntime_production_min.jsx = q;
        reactJsxRuntime_production_min.jsxs = q;
        return reactJsxRuntime_production_min;
    }
    {
        jsxRuntime.exports = requireReactJsxRuntime_production_min();
    }
    var jsxRuntimeExports = jsxRuntime.exports;
    let cache;
    if (typeof document === "object") {
        cache = createCache({
            key: "css",
            prepend: true
        });
    }
    function StyledEngineProvider(props) {
        const {injectFirst: injectFirst, children: children} = props;
        return injectFirst && cache ? jsxRuntimeExports.jsx(CacheProvider, {
            value: cache,
            children: children
        }) : children;
    }
    function isEmpty$4(obj) {
        return obj === undefined || obj === null || Object.keys(obj).length === 0;
    }
    function GlobalStyles$2(props) {
        const {styles: styles, defaultTheme: defaultTheme = {}} = props;
        const globalStyles = typeof styles === "function" ? themeInput => styles(isEmpty$4(themeInput) ? defaultTheme : themeInput) : styles;
        return jsxRuntimeExports.jsx(Global, {
            styles: globalStyles
        });
    }
    /**
   * @mui/styled-engine v5.16.14
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */    function styled$2(tag, options) {
        const stylesFactory = newStyled(tag, options);
        return stylesFactory;
    }
    const internal_processStyles = (tag, processor) => {
        if (Array.isArray(tag.__emotion_styles)) {
            tag.__emotion_styles = processor(tag.__emotion_styles);
        }
    };
    var styledEngine = Object.freeze({
        __proto__: null,
        GlobalStyles: GlobalStyles$2,
        StyledEngineProvider: StyledEngineProvider,
        ThemeContext: ThemeContext,
        css: css,
        default: styled$2,
        internal_processStyles: internal_processStyles,
        keyframes: keyframes
    });
    function isPlainObject(item) {
        if (typeof item !== "object" || item === null) {
            return false;
        }
        const prototype = Object.getPrototypeOf(item);
        return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
    }
    function deepClone(source) {
        if (reactExports.isValidElement(source) || !isPlainObject(source)) {
            return source;
        }
        const output = {};
        Object.keys(source).forEach((key => {
            output[key] = deepClone(source[key]);
        }));
        return output;
    }
    function deepmerge$1(target, source, options = {
        clone: true
    }) {
        const output = options.clone ? _extends$1({}, target) : target;
        if (isPlainObject(target) && isPlainObject(source)) {
            Object.keys(source).forEach((key => {
                if (reactExports.isValidElement(source[key])) {
                    output[key] = source[key];
                } else if (isPlainObject(source[key]) && Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
                    output[key] = deepmerge$1(target[key], source[key], options);
                } else if (options.clone) {
                    output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
                } else {
                    output[key] = source[key];
                }
            }));
        }
        return output;
    }
    var deepmerge = Object.freeze({
        __proto__: null,
        default: deepmerge$1,
        isPlainObject: isPlainObject
    });
    const _excluded$O = [ "values", "unit", "step" ];
    const sortBreakpointsValues = values => {
        const breakpointsAsArray = Object.keys(values).map((key => ({
            key: key,
            val: values[key]
        }))) || [];
        breakpointsAsArray.sort(((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val));
        return breakpointsAsArray.reduce(((acc, obj) => _extends$1({}, acc, {
            [obj.key]: obj.val
        })), {});
    };
    function createBreakpoints(breakpoints) {
        const {values: values = {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }, unit: unit = "px", step: step = 5} = breakpoints, other = _objectWithoutPropertiesLoose(breakpoints, _excluded$O);
        const sortedValues = sortBreakpointsValues(values);
        const keys = Object.keys(sortedValues);
        function up(key) {
            const value = typeof values[key] === "number" ? values[key] : key;
            return `@media (min-width:${value}${unit})`;
        }
        function down(key) {
            const value = typeof values[key] === "number" ? values[key] : key;
            return `@media (max-width:${value - step / 100}${unit})`;
        }
        function between(start, end) {
            const endIndex = keys.indexOf(end);
            return `@media (min-width:${typeof values[start] === "number" ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === "number" ? values[keys[endIndex]] : end) - step / 100}${unit})`;
        }
        function only(key) {
            if (keys.indexOf(key) + 1 < keys.length) {
                return between(key, keys[keys.indexOf(key) + 1]);
            }
            return up(key);
        }
        function not(key) {
            const keyIndex = keys.indexOf(key);
            if (keyIndex === 0) {
                return up(keys[1]);
            }
            if (keyIndex === keys.length - 1) {
                return down(keys[keyIndex]);
            }
            return between(key, keys[keys.indexOf(key) + 1]).replace("@media", "@media not all and");
        }
        return _extends$1({
            keys: keys,
            values: sortedValues,
            up: up,
            down: down,
            between: between,
            only: only,
            not: not,
            unit: unit
        }, other);
    }
    const shape = {
        borderRadius: 4
    };
    function merge(acc, item) {
        if (!item) {
            return acc;
        }
        return deepmerge$1(acc, item, {
            clone: false
        });
    }
    const values$1 = {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
    };
    const defaultBreakpoints = {
        keys: [ "xs", "sm", "md", "lg", "xl" ],
        up: key => `@media (min-width:${values$1[key]}px)`
    };
    function handleBreakpoints(props, propValue, styleFromPropValue) {
        const theme = props.theme || {};
        if (Array.isArray(propValue)) {
            const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
            return propValue.reduce(((acc, item, index) => {
                acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
                return acc;
            }), {});
        }
        if (typeof propValue === "object") {
            const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
            return Object.keys(propValue).reduce(((acc, breakpoint) => {
                if (Object.keys(themeBreakpoints.values || values$1).indexOf(breakpoint) !== -1) {
                    const mediaKey = themeBreakpoints.up(breakpoint);
                    acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
                } else {
                    const cssKey = breakpoint;
                    acc[cssKey] = propValue[cssKey];
                }
                return acc;
            }), {});
        }
        const output = styleFromPropValue(propValue);
        return output;
    }
    function createEmptyBreakpointObject(breakpointsInput = {}) {
        var _breakpointsInput$key;
        const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce(((acc, key) => {
            const breakpointStyleKey = breakpointsInput.up(key);
            acc[breakpointStyleKey] = {};
            return acc;
        }), {});
        return breakpointsInOrder || {};
    }
    function removeUnusedBreakpoints(breakpointKeys, style) {
        return breakpointKeys.reduce(((acc, key) => {
            const breakpointOutput = acc[key];
            const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
            if (isBreakpointUnused) {
                delete acc[key];
            }
            return acc;
        }), style);
    }
    function mergeBreakpointsInOrder(breakpointsInput, ...styles) {
        const emptyBreakpoints = createEmptyBreakpointObject(breakpointsInput);
        const mergedOutput = [ emptyBreakpoints, ...styles ].reduce(((prev, next) => deepmerge$1(prev, next)), {});
        return removeUnusedBreakpoints(Object.keys(emptyBreakpoints), mergedOutput);
    }
    function computeBreakpointsBase(breakpointValues, themeBreakpoints) {
        if (typeof breakpointValues !== "object") {
            return {};
        }
        const base = {};
        const breakpointsKeys = Object.keys(themeBreakpoints);
        if (Array.isArray(breakpointValues)) {
            breakpointsKeys.forEach(((breakpoint, i) => {
                if (i < breakpointValues.length) {
                    base[breakpoint] = true;
                }
            }));
        } else {
            breakpointsKeys.forEach((breakpoint => {
                if (breakpointValues[breakpoint] != null) {
                    base[breakpoint] = true;
                }
            }));
        }
        return base;
    }
    function resolveBreakpointValues({values: breakpointValues, breakpoints: themeBreakpoints, base: customBase}) {
        const base = customBase || computeBreakpointsBase(breakpointValues, themeBreakpoints);
        const keys = Object.keys(base);
        if (keys.length === 0) {
            return breakpointValues;
        }
        let previous;
        return keys.reduce(((acc, breakpoint, i) => {
            if (Array.isArray(breakpointValues)) {
                acc[breakpoint] = breakpointValues[i] != null ? breakpointValues[i] : breakpointValues[previous];
                previous = i;
            } else if (typeof breakpointValues === "object") {
                acc[breakpoint] = breakpointValues[breakpoint] != null ? breakpointValues[breakpoint] : breakpointValues[previous];
                previous = breakpoint;
            } else {
                acc[breakpoint] = breakpointValues;
            }
            return acc;
        }), {});
    }
    function capitalize$1(string) {
        if (typeof string !== "string") {
            throw new Error(formatMuiErrorMessage$1(7));
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    var capitalize = Object.freeze({
        __proto__: null,
        default: capitalize$1
    });
    function getPath(obj, path, checkVars = true) {
        if (!path || typeof path !== "string") {
            return null;
        }
        if (obj && obj.vars && checkVars) {
            const val = `vars.${path}`.split(".").reduce(((acc, item) => acc && acc[item] ? acc[item] : null), obj);
            if (val != null) {
                return val;
            }
        }
        return path.split(".").reduce(((acc, item) => {
            if (acc && acc[item] != null) {
                return acc[item];
            }
            return null;
        }), obj);
    }
    function getStyleValue$1(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
        let value;
        if (typeof themeMapping === "function") {
            value = themeMapping(propValueFinal);
        } else if (Array.isArray(themeMapping)) {
            value = themeMapping[propValueFinal] || userValue;
        } else {
            value = getPath(themeMapping, propValueFinal) || userValue;
        }
        if (transform) {
            value = transform(value, userValue, themeMapping);
        }
        return value;
    }
    function style$2(options) {
        const {prop: prop, cssProperty: cssProperty = options.prop, themeKey: themeKey, transform: transform} = options;
        const fn = props => {
            if (props[prop] == null) {
                return null;
            }
            const propValue = props[prop];
            const theme = props.theme;
            const themeMapping = getPath(theme, themeKey) || {};
            const styleFromPropValue = propValueFinal => {
                let value = getStyleValue$1(themeMapping, transform, propValueFinal);
                if (propValueFinal === value && typeof propValueFinal === "string") {
                    value = getStyleValue$1(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize$1(propValueFinal)}`, propValueFinal);
                }
                if (cssProperty === false) {
                    return value;
                }
                return {
                    [cssProperty]: value
                };
            };
            return handleBreakpoints(props, propValue, styleFromPropValue);
        };
        fn.propTypes = {};
        fn.filterProps = [ prop ];
        return fn;
    }
    function memoize(fn) {
        const cache = {};
        return arg => {
            if (cache[arg] === undefined) {
                cache[arg] = fn(arg);
            }
            return cache[arg];
        };
    }
    const properties = {
        m: "margin",
        p: "padding"
    };
    const directions = {
        t: "Top",
        r: "Right",
        b: "Bottom",
        l: "Left",
        x: [ "Left", "Right" ],
        y: [ "Top", "Bottom" ]
    };
    const aliases = {
        marginX: "mx",
        marginY: "my",
        paddingX: "px",
        paddingY: "py"
    };
    const getCssProperties = memoize((prop => {
        if (prop.length > 2) {
            if (aliases[prop]) {
                prop = aliases[prop];
            } else {
                return [ prop ];
            }
        }
        const [a, b] = prop.split("");
        const property = properties[a];
        const direction = directions[b] || "";
        return Array.isArray(direction) ? direction.map((dir => property + dir)) : [ property + direction ];
    }));
    const marginKeys = [ "m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd" ];
    const paddingKeys = [ "p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd" ];
    [ ...marginKeys, ...paddingKeys ];
    function createUnaryUnit(theme, themeKey, defaultValue, propName) {
        var _getPath;
        const themeSpacing = (_getPath = getPath(theme, themeKey, false)) != null ? _getPath : defaultValue;
        if (typeof themeSpacing === "number") {
            return abs => {
                if (typeof abs === "string") {
                    return abs;
                }
                return themeSpacing * abs;
            };
        }
        if (Array.isArray(themeSpacing)) {
            return abs => {
                if (typeof abs === "string") {
                    return abs;
                }
                return themeSpacing[abs];
            };
        }
        if (typeof themeSpacing === "function") {
            return themeSpacing;
        }
        return () => undefined;
    }
    function createUnarySpacing(theme) {
        return createUnaryUnit(theme, "spacing", 8);
    }
    function getValue(transformer, propValue) {
        if (typeof propValue === "string" || propValue == null) {
            return propValue;
        }
        const abs = Math.abs(propValue);
        const transformed = transformer(abs);
        if (propValue >= 0) {
            return transformed;
        }
        if (typeof transformed === "number") {
            return -transformed;
        }
        return `-${transformed}`;
    }
    function getStyleFromPropValue(cssProperties, transformer) {
        return propValue => cssProperties.reduce(((acc, cssProperty) => {
            acc[cssProperty] = getValue(transformer, propValue);
            return acc;
        }), {});
    }
    function resolveCssProperty(props, keys, prop, transformer) {
        if (keys.indexOf(prop) === -1) {
            return null;
        }
        const cssProperties = getCssProperties(prop);
        const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
        const propValue = props[prop];
        return handleBreakpoints(props, propValue, styleFromPropValue);
    }
    function style$1(props, keys) {
        const transformer = createUnarySpacing(props.theme);
        return Object.keys(props).map((prop => resolveCssProperty(props, keys, prop, transformer))).reduce(merge, {});
    }
    function margin(props) {
        return style$1(props, marginKeys);
    }
    margin.propTypes = {};
    margin.filterProps = marginKeys;
    function padding(props) {
        return style$1(props, paddingKeys);
    }
    padding.propTypes = {};
    padding.filterProps = paddingKeys;
    function createSpacing(spacingInput = 8) {
        if (spacingInput.mui) {
            return spacingInput;
        }
        const transform = createUnarySpacing({
            spacing: spacingInput
        });
        const spacing = (...argsInput) => {
            const args = argsInput.length === 0 ? [ 1 ] : argsInput;
            return args.map((argument => {
                const output = transform(argument);
                return typeof output === "number" ? `${output}px` : output;
            })).join(" ");
        };
        spacing.mui = true;
        return spacing;
    }
    function compose(...styles) {
        const handlers = styles.reduce(((acc, style) => {
            style.filterProps.forEach((prop => {
                acc[prop] = style;
            }));
            return acc;
        }), {});
        const fn = props => Object.keys(props).reduce(((acc, prop) => {
            if (handlers[prop]) {
                return merge(acc, handlers[prop](props));
            }
            return acc;
        }), {});
        fn.propTypes = {};
        fn.filterProps = styles.reduce(((acc, style) => acc.concat(style.filterProps)), []);
        return fn;
    }
    function borderTransform(value) {
        if (typeof value !== "number") {
            return value;
        }
        return `${value}px solid`;
    }
    function createBorderStyle(prop, transform) {
        return style$2({
            prop: prop,
            themeKey: "borders",
            transform: transform
        });
    }
    const border = createBorderStyle("border", borderTransform);
    const borderTop = createBorderStyle("borderTop", borderTransform);
    const borderRight = createBorderStyle("borderRight", borderTransform);
    const borderBottom = createBorderStyle("borderBottom", borderTransform);
    const borderLeft = createBorderStyle("borderLeft", borderTransform);
    const borderColor = createBorderStyle("borderColor");
    const borderTopColor = createBorderStyle("borderTopColor");
    const borderRightColor = createBorderStyle("borderRightColor");
    const borderBottomColor = createBorderStyle("borderBottomColor");
    const borderLeftColor = createBorderStyle("borderLeftColor");
    const outline = createBorderStyle("outline", borderTransform);
    const outlineColor = createBorderStyle("outlineColor");
    const borderRadius = props => {
        if (props.borderRadius !== undefined && props.borderRadius !== null) {
            const transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4);
            const styleFromPropValue = propValue => ({
                borderRadius: getValue(transformer, propValue)
            });
            return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
        }
        return null;
    };
    borderRadius.propTypes = {};
    borderRadius.filterProps = [ "borderRadius" ];
    compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);
    const gap = props => {
        if (props.gap !== undefined && props.gap !== null) {
            const transformer = createUnaryUnit(props.theme, "spacing", 8);
            const styleFromPropValue = propValue => ({
                gap: getValue(transformer, propValue)
            });
            return handleBreakpoints(props, props.gap, styleFromPropValue);
        }
        return null;
    };
    gap.propTypes = {};
    gap.filterProps = [ "gap" ];
    const columnGap = props => {
        if (props.columnGap !== undefined && props.columnGap !== null) {
            const transformer = createUnaryUnit(props.theme, "spacing", 8);
            const styleFromPropValue = propValue => ({
                columnGap: getValue(transformer, propValue)
            });
            return handleBreakpoints(props, props.columnGap, styleFromPropValue);
        }
        return null;
    };
    columnGap.propTypes = {};
    columnGap.filterProps = [ "columnGap" ];
    const rowGap = props => {
        if (props.rowGap !== undefined && props.rowGap !== null) {
            const transformer = createUnaryUnit(props.theme, "spacing", 8);
            const styleFromPropValue = propValue => ({
                rowGap: getValue(transformer, propValue)
            });
            return handleBreakpoints(props, props.rowGap, styleFromPropValue);
        }
        return null;
    };
    rowGap.propTypes = {};
    rowGap.filterProps = [ "rowGap" ];
    const gridColumn = style$2({
        prop: "gridColumn"
    });
    const gridRow = style$2({
        prop: "gridRow"
    });
    const gridAutoFlow = style$2({
        prop: "gridAutoFlow"
    });
    const gridAutoColumns = style$2({
        prop: "gridAutoColumns"
    });
    const gridAutoRows = style$2({
        prop: "gridAutoRows"
    });
    const gridTemplateColumns = style$2({
        prop: "gridTemplateColumns"
    });
    const gridTemplateRows = style$2({
        prop: "gridTemplateRows"
    });
    const gridTemplateAreas = style$2({
        prop: "gridTemplateAreas"
    });
    const gridArea = style$2({
        prop: "gridArea"
    });
    compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
    function paletteTransform(value, userValue) {
        if (userValue === "grey") {
            return userValue;
        }
        return value;
    }
    const color = style$2({
        prop: "color",
        themeKey: "palette",
        transform: paletteTransform
    });
    const bgcolor = style$2({
        prop: "bgcolor",
        cssProperty: "backgroundColor",
        themeKey: "palette",
        transform: paletteTransform
    });
    const backgroundColor = style$2({
        prop: "backgroundColor",
        themeKey: "palette",
        transform: paletteTransform
    });
    compose(color, bgcolor, backgroundColor);
    function sizingTransform(value) {
        return value <= 1 && value !== 0 ? `${value * 100}%` : value;
    }
    const width = style$2({
        prop: "width",
        transform: sizingTransform
    });
    const maxWidth = props => {
        if (props.maxWidth !== undefined && props.maxWidth !== null) {
            const styleFromPropValue = propValue => {
                var _props$theme, _props$theme2;
                const breakpoint = ((_props$theme = props.theme) == null || (_props$theme = _props$theme.breakpoints) == null || (_props$theme = _props$theme.values) == null ? void 0 : _props$theme[propValue]) || values$1[propValue];
                if (!breakpoint) {
                    return {
                        maxWidth: sizingTransform(propValue)
                    };
                }
                if (((_props$theme2 = props.theme) == null || (_props$theme2 = _props$theme2.breakpoints) == null ? void 0 : _props$theme2.unit) !== "px") {
                    return {
                        maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
                    };
                }
                return {
                    maxWidth: breakpoint
                };
            };
            return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
        }
        return null;
    };
    maxWidth.filterProps = [ "maxWidth" ];
    const minWidth = style$2({
        prop: "minWidth",
        transform: sizingTransform
    });
    const height = style$2({
        prop: "height",
        transform: sizingTransform
    });
    const maxHeight = style$2({
        prop: "maxHeight",
        transform: sizingTransform
    });
    const minHeight = style$2({
        prop: "minHeight",
        transform: sizingTransform
    });
    style$2({
        prop: "size",
        cssProperty: "width",
        transform: sizingTransform
    });
    style$2({
        prop: "size",
        cssProperty: "height",
        transform: sizingTransform
    });
    const boxSizing = style$2({
        prop: "boxSizing"
    });
    compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
    const defaultSxConfig = {
        border: {
            themeKey: "borders",
            transform: borderTransform
        },
        borderTop: {
            themeKey: "borders",
            transform: borderTransform
        },
        borderRight: {
            themeKey: "borders",
            transform: borderTransform
        },
        borderBottom: {
            themeKey: "borders",
            transform: borderTransform
        },
        borderLeft: {
            themeKey: "borders",
            transform: borderTransform
        },
        borderColor: {
            themeKey: "palette"
        },
        borderTopColor: {
            themeKey: "palette"
        },
        borderRightColor: {
            themeKey: "palette"
        },
        borderBottomColor: {
            themeKey: "palette"
        },
        borderLeftColor: {
            themeKey: "palette"
        },
        outline: {
            themeKey: "borders",
            transform: borderTransform
        },
        outlineColor: {
            themeKey: "palette"
        },
        borderRadius: {
            themeKey: "shape.borderRadius",
            style: borderRadius
        },
        color: {
            themeKey: "palette",
            transform: paletteTransform
        },
        bgcolor: {
            themeKey: "palette",
            cssProperty: "backgroundColor",
            transform: paletteTransform
        },
        backgroundColor: {
            themeKey: "palette",
            transform: paletteTransform
        },
        p: {
            style: padding
        },
        pt: {
            style: padding
        },
        pr: {
            style: padding
        },
        pb: {
            style: padding
        },
        pl: {
            style: padding
        },
        px: {
            style: padding
        },
        py: {
            style: padding
        },
        padding: {
            style: padding
        },
        paddingTop: {
            style: padding
        },
        paddingRight: {
            style: padding
        },
        paddingBottom: {
            style: padding
        },
        paddingLeft: {
            style: padding
        },
        paddingX: {
            style: padding
        },
        paddingY: {
            style: padding
        },
        paddingInline: {
            style: padding
        },
        paddingInlineStart: {
            style: padding
        },
        paddingInlineEnd: {
            style: padding
        },
        paddingBlock: {
            style: padding
        },
        paddingBlockStart: {
            style: padding
        },
        paddingBlockEnd: {
            style: padding
        },
        m: {
            style: margin
        },
        mt: {
            style: margin
        },
        mr: {
            style: margin
        },
        mb: {
            style: margin
        },
        ml: {
            style: margin
        },
        mx: {
            style: margin
        },
        my: {
            style: margin
        },
        margin: {
            style: margin
        },
        marginTop: {
            style: margin
        },
        marginRight: {
            style: margin
        },
        marginBottom: {
            style: margin
        },
        marginLeft: {
            style: margin
        },
        marginX: {
            style: margin
        },
        marginY: {
            style: margin
        },
        marginInline: {
            style: margin
        },
        marginInlineStart: {
            style: margin
        },
        marginInlineEnd: {
            style: margin
        },
        marginBlock: {
            style: margin
        },
        marginBlockStart: {
            style: margin
        },
        marginBlockEnd: {
            style: margin
        },
        displayPrint: {
            cssProperty: false,
            transform: value => ({
                "@media print": {
                    display: value
                }
            })
        },
        display: {},
        overflow: {},
        textOverflow: {},
        visibility: {},
        whiteSpace: {},
        flexBasis: {},
        flexDirection: {},
        flexWrap: {},
        justifyContent: {},
        alignItems: {},
        alignContent: {},
        order: {},
        flex: {},
        flexGrow: {},
        flexShrink: {},
        alignSelf: {},
        justifyItems: {},
        justifySelf: {},
        gap: {
            style: gap
        },
        rowGap: {
            style: rowGap
        },
        columnGap: {
            style: columnGap
        },
        gridColumn: {},
        gridRow: {},
        gridAutoFlow: {},
        gridAutoColumns: {},
        gridAutoRows: {},
        gridTemplateColumns: {},
        gridTemplateRows: {},
        gridTemplateAreas: {},
        gridArea: {},
        position: {},
        zIndex: {
            themeKey: "zIndex"
        },
        top: {},
        right: {},
        bottom: {},
        left: {},
        boxShadow: {
            themeKey: "shadows"
        },
        width: {
            transform: sizingTransform
        },
        maxWidth: {
            style: maxWidth
        },
        minWidth: {
            transform: sizingTransform
        },
        height: {
            transform: sizingTransform
        },
        maxHeight: {
            transform: sizingTransform
        },
        minHeight: {
            transform: sizingTransform
        },
        boxSizing: {},
        fontFamily: {
            themeKey: "typography"
        },
        fontSize: {
            themeKey: "typography"
        },
        fontStyle: {
            themeKey: "typography"
        },
        fontWeight: {
            themeKey: "typography"
        },
        letterSpacing: {},
        textTransform: {},
        lineHeight: {},
        textAlign: {},
        typography: {
            cssProperty: false,
            themeKey: "typography"
        }
    };
    function objectsHaveSameKeys(...objects) {
        const allKeys = objects.reduce(((keys, object) => keys.concat(Object.keys(object))), []);
        const union = new Set(allKeys);
        return objects.every((object => union.size === Object.keys(object).length));
    }
    function callIfFn(maybeFn, arg) {
        return typeof maybeFn === "function" ? maybeFn(arg) : maybeFn;
    }
    function unstable_createStyleFunctionSx() {
        function getThemeValue(prop, val, theme, config) {
            const props = {
                [prop]: val,
                theme: theme
            };
            const options = config[prop];
            if (!options) {
                return {
                    [prop]: val
                };
            }
            const {cssProperty: cssProperty = prop, themeKey: themeKey, transform: transform, style: style} = options;
            if (val == null) {
                return null;
            }
            if (themeKey === "typography" && val === "inherit") {
                return {
                    [prop]: val
                };
            }
            const themeMapping = getPath(theme, themeKey) || {};
            if (style) {
                return style(props);
            }
            const styleFromPropValue = propValueFinal => {
                let value = getStyleValue$1(themeMapping, transform, propValueFinal);
                if (propValueFinal === value && typeof propValueFinal === "string") {
                    value = getStyleValue$1(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize$1(propValueFinal)}`, propValueFinal);
                }
                if (cssProperty === false) {
                    return value;
                }
                return {
                    [cssProperty]: value
                };
            };
            return handleBreakpoints(props, val, styleFromPropValue);
        }
        function styleFunctionSx(props) {
            var _theme$unstable_sxCon;
            const {sx: sx, theme: theme = {}} = props || {};
            if (!sx) {
                return null;
            }
            const config = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig;
            function traverse(sxInput) {
                let sxObject = sxInput;
                if (typeof sxInput === "function") {
                    sxObject = sxInput(theme);
                } else if (typeof sxInput !== "object") {
                    return sxInput;
                }
                if (!sxObject) {
                    return null;
                }
                const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
                const breakpointsKeys = Object.keys(emptyBreakpoints);
                let css = emptyBreakpoints;
                Object.keys(sxObject).forEach((styleKey => {
                    const value = callIfFn(sxObject[styleKey], theme);
                    if (value !== null && value !== undefined) {
                        if (typeof value === "object") {
                            if (config[styleKey]) {
                                css = merge(css, getThemeValue(styleKey, value, theme, config));
                            } else {
                                const breakpointsValues = handleBreakpoints({
                                    theme: theme
                                }, value, (x => ({
                                    [styleKey]: x
                                })));
                                if (objectsHaveSameKeys(breakpointsValues, value)) {
                                    css[styleKey] = styleFunctionSx({
                                        sx: value,
                                        theme: theme
                                    });
                                } else {
                                    css = merge(css, breakpointsValues);
                                }
                            }
                        } else {
                            css = merge(css, getThemeValue(styleKey, value, theme, config));
                        }
                    }
                }));
                return removeUnusedBreakpoints(breakpointsKeys, css);
            }
            return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
        }
        return styleFunctionSx;
    }
    const styleFunctionSx$1 = unstable_createStyleFunctionSx();
    styleFunctionSx$1.filterProps = [ "sx" ];
    function applyStyles(key, styles) {
        const theme = this;
        if (theme.vars && typeof theme.getColorSchemeSelector === "function") {
            const selector = theme.getColorSchemeSelector(key).replace(/(\[[^\]]+\])/, "*:where($1)");
            return {
                [selector]: styles
            };
        }
        if (theme.palette.mode === key) {
            return styles;
        }
        return {};
    }
    const _excluded$N = [ "breakpoints", "palette", "spacing", "shape" ];
    function createTheme$2(options = {}, ...args) {
        const {breakpoints: breakpointsInput = {}, palette: paletteInput = {}, spacing: spacingInput, shape: shapeInput = {}} = options, other = _objectWithoutPropertiesLoose(options, _excluded$N);
        const breakpoints = createBreakpoints(breakpointsInput);
        const spacing = createSpacing(spacingInput);
        let muiTheme = deepmerge$1({
            breakpoints: breakpoints,
            direction: "ltr",
            components: {},
            palette: _extends$1({
                mode: "light"
            }, paletteInput),
            spacing: spacing,
            shape: _extends$1({}, shape, shapeInput)
        }, other);
        muiTheme.applyStyles = applyStyles;
        muiTheme = args.reduce(((acc, argument) => deepmerge$1(acc, argument)), muiTheme);
        muiTheme.unstable_sxConfig = _extends$1({}, defaultSxConfig, other == null ? void 0 : other.unstable_sxConfig);
        muiTheme.unstable_sx = function sx(props) {
            return styleFunctionSx$1({
                sx: props,
                theme: this
            });
        };
        return muiTheme;
    }
    var createTheme$1 = Object.freeze({
        __proto__: null,
        default: createTheme$2,
        private_createBreakpoints: createBreakpoints,
        unstable_applyStyles: applyStyles
    });
    function isObjectEmpty$1(obj) {
        return Object.keys(obj).length === 0;
    }
    function useTheme$2(defaultTheme = null) {
        const contextTheme = reactExports.useContext(ThemeContext);
        return !contextTheme || isObjectEmpty$1(contextTheme) ? defaultTheme : contextTheme;
    }
    const systemDefaultTheme$2 = createTheme$2();
    function useTheme$1(defaultTheme = systemDefaultTheme$2) {
        return useTheme$2(defaultTheme);
    }
    function GlobalStyles$1({styles: styles, themeId: themeId, defaultTheme: defaultTheme = {}}) {
        const upperTheme = useTheme$1(defaultTheme);
        const globalStyles = typeof styles === "function" ? styles(themeId ? upperTheme[themeId] || upperTheme : upperTheme) : styles;
        return jsxRuntimeExports.jsx(GlobalStyles$2, {
            styles: globalStyles
        });
    }
    const _excluded$M = [ "sx" ];
    const splitProps = props => {
        var _props$theme$unstable, _props$theme;
        const result = {
            systemProps: {},
            otherProps: {}
        };
        const config = (_props$theme$unstable = props == null || (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : defaultSxConfig;
        Object.keys(props).forEach((prop => {
            if (config[prop]) {
                result.systemProps[prop] = props[prop];
            } else {
                result.otherProps[prop] = props[prop];
            }
        }));
        return result;
    };
    function extendSxProp(props) {
        const {sx: inSx} = props, other = _objectWithoutPropertiesLoose(props, _excluded$M);
        const {systemProps: systemProps, otherProps: otherProps} = splitProps(other);
        let finalSx;
        if (Array.isArray(inSx)) {
            finalSx = [ systemProps, ...inSx ];
        } else if (typeof inSx === "function") {
            finalSx = (...args) => {
                const result = inSx(...args);
                if (!isPlainObject(result)) {
                    return systemProps;
                }
                return _extends$1({}, systemProps, result);
            };
        } else {
            finalSx = _extends$1({}, systemProps, inSx);
        }
        return _extends$1({}, otherProps, {
            sx: finalSx
        });
    }
    var styleFunctionSx = Object.freeze({
        __proto__: null,
        default: styleFunctionSx$1,
        extendSxProp: extendSxProp,
        unstable_createStyleFunctionSx: unstable_createStyleFunctionSx,
        unstable_defaultSxConfig: defaultSxConfig
    });
    const defaultGenerator = componentName => componentName;
    const createClassNameGenerator = () => {
        let generate = defaultGenerator;
        return {
            configure(generator) {
                generate = generator;
            },
            generate(componentName) {
                return generate(componentName);
            },
            reset() {
                generate = defaultGenerator;
            }
        };
    };
    const ClassNameGenerator = createClassNameGenerator();
    function r(e) {
        var t, f, n = "";
        if ("string" == typeof e || "number" == typeof e) n += e; else if ("object" == typeof e) if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
        } else for (f in e) e[f] && (n && (n += " "), n += f);
        return n;
    }
    function clsx() {
        for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), 
        n += t);
        return n;
    }
    const _excluded$L = [ "className", "component" ];
    function createBox(options = {}) {
        const {themeId: themeId, defaultTheme: defaultTheme, defaultClassName: defaultClassName = "MuiBox-root", generateClassName: generateClassName} = options;
        const BoxRoot = styled$2("div", {
            shouldForwardProp: prop => prop !== "theme" && prop !== "sx" && prop !== "as"
        })(styleFunctionSx$1);
        const Box = reactExports.forwardRef((function Box(inProps, ref) {
            const theme = useTheme$1(defaultTheme);
            const _extendSxProp = extendSxProp(inProps), {className: className, component: component = "div"} = _extendSxProp, other = _objectWithoutPropertiesLoose(_extendSxProp, _excluded$L);
            return jsxRuntimeExports.jsx(BoxRoot, _extends$1({
                as: component,
                ref: ref,
                className: clsx(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
                theme: themeId ? theme[themeId] || theme : theme
            }, other));
        }));
        return Box;
    }
    const globalStateClasses = {
        active: "active",
        checked: "checked",
        completed: "completed",
        disabled: "disabled",
        error: "error",
        expanded: "expanded",
        focused: "focused",
        focusVisible: "focusVisible",
        open: "open",
        readOnly: "readOnly",
        required: "required",
        selected: "selected"
    };
    function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
        const globalStateClass = globalStateClasses[slot];
        return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator.generate(componentName)}-${slot}`;
    }
    function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
        const result = {};
        slots.forEach((slot => {
            result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
        }));
        return result;
    }
    var reactIs = {
        exports: {}
    };
    var reactIs_production = {};
    /**
   * @license React
   * react-is.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */    var hasRequiredReactIs_production;
    function requireReactIs_production() {
        if (hasRequiredReactIs_production) return reactIs_production;
        hasRequiredReactIs_production = 1;
        var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
        function typeOf(object) {
            if ("object" === typeof object && null !== object) {
                var $$typeof = object.$$typeof;
                switch ($$typeof) {
                  case REACT_ELEMENT_TYPE:
                    switch (object = object.type, object) {
                      case REACT_FRAGMENT_TYPE:
                      case REACT_PROFILER_TYPE:
                      case REACT_STRICT_MODE_TYPE:
                      case REACT_SUSPENSE_TYPE:
                      case REACT_SUSPENSE_LIST_TYPE:
                      case REACT_VIEW_TRANSITION_TYPE:
                        return object;

                      default:
                        switch (object = object && object.$$typeof, object) {
                          case REACT_CONTEXT_TYPE:
                          case REACT_FORWARD_REF_TYPE:
                          case REACT_LAZY_TYPE:
                          case REACT_MEMO_TYPE:
                            return object;

                          case REACT_CONSUMER_TYPE:
                            return object;

                          default:
                            return $$typeof;
                        }
                    }

                  case REACT_PORTAL_TYPE:
                    return $$typeof;
                }
            }
        }
        reactIs_production.ContextConsumer = REACT_CONSUMER_TYPE;
        reactIs_production.ContextProvider = REACT_CONTEXT_TYPE;
        reactIs_production.Element = REACT_ELEMENT_TYPE;
        reactIs_production.ForwardRef = REACT_FORWARD_REF_TYPE;
        reactIs_production.Fragment = REACT_FRAGMENT_TYPE;
        reactIs_production.Lazy = REACT_LAZY_TYPE;
        reactIs_production.Memo = REACT_MEMO_TYPE;
        reactIs_production.Portal = REACT_PORTAL_TYPE;
        reactIs_production.Profiler = REACT_PROFILER_TYPE;
        reactIs_production.StrictMode = REACT_STRICT_MODE_TYPE;
        reactIs_production.Suspense = REACT_SUSPENSE_TYPE;
        reactIs_production.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        reactIs_production.isContextConsumer = function(object) {
            return typeOf(object) === REACT_CONSUMER_TYPE;
        };
        reactIs_production.isContextProvider = function(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        };
        reactIs_production.isElement = function(object) {
            return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
        };
        reactIs_production.isForwardRef = function(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        };
        reactIs_production.isFragment = function(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        };
        reactIs_production.isLazy = function(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        };
        reactIs_production.isMemo = function(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        };
        reactIs_production.isPortal = function(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        };
        reactIs_production.isProfiler = function(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        };
        reactIs_production.isStrictMode = function(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        };
        reactIs_production.isSuspense = function(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        };
        reactIs_production.isSuspenseList = function(object) {
            return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        };
        reactIs_production.isValidElementType = function(type) {
            return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? true : false;
        };
        reactIs_production.typeOf = typeOf;
        return reactIs_production;
    }
    {
        reactIs.exports = requireReactIs_production();
    }
    var reactIsExports = reactIs.exports;
    const fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
    function getFunctionName(fn) {
        const match = `${fn}`.match(fnNameMatchRegex);
        const name = match && match[1];
        return name || "";
    }
    function getFunctionComponentName(Component, fallback = "") {
        return Component.displayName || Component.name || getFunctionName(Component) || fallback;
    }
    function getWrappedName(outerType, innerType, wrapperName) {
        const functionName = getFunctionComponentName(innerType);
        return outerType.displayName || (functionName !== "" ? `${wrapperName}(${functionName})` : wrapperName);
    }
    function getDisplayName$1(Component) {
        if (Component == null) {
            return undefined;
        }
        if (typeof Component === "string") {
            return Component;
        }
        if (typeof Component === "function") {
            return getFunctionComponentName(Component, "Component");
        }
        if (typeof Component === "object") {
            switch (Component.$$typeof) {
              case reactIsExports.ForwardRef:
                return getWrappedName(Component, Component.render, "ForwardRef");

              case reactIsExports.Memo:
                return getWrappedName(Component, Component.type, "memo");

              default:
                return undefined;
            }
        }
        return undefined;
    }
    var getDisplayName = Object.freeze({
        __proto__: null,
        default: getDisplayName$1,
        getFunctionName: getFunctionName
    });
    const _excluded$K = [ "ownerState" ], _excluded2$4 = [ "variants" ], _excluded3$2 = [ "name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver" ];
    function isEmpty$3(obj) {
        return Object.keys(obj).length === 0;
    }
    function isStringTag$1(tag) {
        return typeof tag === "string" && tag.charCodeAt(0) > 96;
    }
    function shouldForwardProp$1(prop) {
        return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
    }
    const systemDefaultTheme$1 = createTheme$2();
    const lowercaseFirstLetter$1 = string => {
        if (!string) {
            return string;
        }
        return string.charAt(0).toLowerCase() + string.slice(1);
    };
    function resolveTheme$1({defaultTheme: defaultTheme, theme: theme, themeId: themeId}) {
        return isEmpty$3(theme) ? defaultTheme : theme[themeId] || theme;
    }
    function defaultOverridesResolver$1(slot) {
        if (!slot) {
            return null;
        }
        return (props, styles) => styles[slot];
    }
    function processStyleArg$1(callableStyle, _ref) {
        let {ownerState: ownerState} = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded$K);
        const resolvedStylesArg = typeof callableStyle === "function" ? callableStyle(_extends$1({
            ownerState: ownerState
        }, props)) : callableStyle;
        if (Array.isArray(resolvedStylesArg)) {
            return resolvedStylesArg.flatMap((resolvedStyle => processStyleArg$1(resolvedStyle, _extends$1({
                ownerState: ownerState
            }, props))));
        }
        if (!!resolvedStylesArg && typeof resolvedStylesArg === "object" && Array.isArray(resolvedStylesArg.variants)) {
            const {variants: variants = []} = resolvedStylesArg, otherStyles = _objectWithoutPropertiesLoose(resolvedStylesArg, _excluded2$4);
            let result = otherStyles;
            variants.forEach((variant => {
                let isMatch = true;
                if (typeof variant.props === "function") {
                    isMatch = variant.props(_extends$1({
                        ownerState: ownerState
                    }, props, ownerState));
                } else {
                    Object.keys(variant.props).forEach((key => {
                        if ((ownerState == null ? void 0 : ownerState[key]) !== variant.props[key] && props[key] !== variant.props[key]) {
                            isMatch = false;
                        }
                    }));
                }
                if (isMatch) {
                    if (!Array.isArray(result)) {
                        result = [ result ];
                    }
                    result.push(typeof variant.style === "function" ? variant.style(_extends$1({
                        ownerState: ownerState
                    }, props, ownerState)) : variant.style);
                }
            }));
            return result;
        }
        return resolvedStylesArg;
    }
    function createStyled$2(input = {}) {
        const {themeId: themeId, defaultTheme: defaultTheme = systemDefaultTheme$1, rootShouldForwardProp: rootShouldForwardProp = shouldForwardProp$1, slotShouldForwardProp: slotShouldForwardProp = shouldForwardProp$1} = input;
        const systemSx = props => styleFunctionSx$1(_extends$1({}, props, {
            theme: resolveTheme$1(_extends$1({}, props, {
                defaultTheme: defaultTheme,
                themeId: themeId
            }))
        }));
        systemSx.__mui_systemSx = true;
        return (tag, inputOptions = {}) => {
            internal_processStyles(tag, (styles => styles.filter((style => !(style != null && style.__mui_systemSx)))));
            const {name: componentName, slot: componentSlot, skipVariantsResolver: inputSkipVariantsResolver, skipSx: inputSkipSx, overridesResolver: overridesResolver = defaultOverridesResolver$1(lowercaseFirstLetter$1(componentSlot))} = inputOptions, options = _objectWithoutPropertiesLoose(inputOptions, _excluded3$2);
            const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver : componentSlot && componentSlot !== "Root" && componentSlot !== "root" || false;
            const skipSx = inputSkipSx || false;
            let label;
            let shouldForwardPropOption = shouldForwardProp$1;
            if (componentSlot === "Root" || componentSlot === "root") {
                shouldForwardPropOption = rootShouldForwardProp;
            } else if (componentSlot) {
                shouldForwardPropOption = slotShouldForwardProp;
            } else if (isStringTag$1(tag)) {
                shouldForwardPropOption = undefined;
            }
            const defaultStyledResolver = styled$2(tag, _extends$1({
                shouldForwardProp: shouldForwardPropOption,
                label: label
            }, options));
            const transformStyleArg = stylesArg => {
                if (typeof stylesArg === "function" && stylesArg.__emotion_real !== stylesArg || isPlainObject(stylesArg)) {
                    return props => processStyleArg$1(stylesArg, _extends$1({}, props, {
                        theme: resolveTheme$1({
                            theme: props.theme,
                            defaultTheme: defaultTheme,
                            themeId: themeId
                        })
                    }));
                }
                return stylesArg;
            };
            const muiStyledResolver = (styleArg, ...expressions) => {
                let transformedStyleArg = transformStyleArg(styleArg);
                const expressionsWithDefaultTheme = expressions ? expressions.map(transformStyleArg) : [];
                if (componentName && overridesResolver) {
                    expressionsWithDefaultTheme.push((props => {
                        const theme = resolveTheme$1(_extends$1({}, props, {
                            defaultTheme: defaultTheme,
                            themeId: themeId
                        }));
                        if (!theme.components || !theme.components[componentName] || !theme.components[componentName].styleOverrides) {
                            return null;
                        }
                        const styleOverrides = theme.components[componentName].styleOverrides;
                        const resolvedStyleOverrides = {};
                        Object.entries(styleOverrides).forEach((([slotKey, slotStyle]) => {
                            resolvedStyleOverrides[slotKey] = processStyleArg$1(slotStyle, _extends$1({}, props, {
                                theme: theme
                            }));
                        }));
                        return overridesResolver(props, resolvedStyleOverrides);
                    }));
                }
                if (componentName && !skipVariantsResolver) {
                    expressionsWithDefaultTheme.push((props => {
                        var _theme$components;
                        const theme = resolveTheme$1(_extends$1({}, props, {
                            defaultTheme: defaultTheme,
                            themeId: themeId
                        }));
                        const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[componentName]) == null ? void 0 : _theme$components.variants;
                        return processStyleArg$1({
                            variants: themeVariants
                        }, _extends$1({}, props, {
                            theme: theme
                        }));
                    }));
                }
                if (!skipSx) {
                    expressionsWithDefaultTheme.push(systemSx);
                }
                const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
                if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
                    const placeholders = new Array(numOfCustomFnsApplied).fill("");
                    transformedStyleArg = [ ...styleArg, ...placeholders ];
                    transformedStyleArg.raw = [ ...styleArg.raw, ...placeholders ];
                }
                const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
                if (tag.muiName) {
                    Component.muiName = tag.muiName;
                }
                return Component;
            };
            if (defaultStyledResolver.withConfig) {
                muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
            }
            return muiStyledResolver;
        };
    }
    const styled$1 = createStyled$2();
    function resolveProps(defaultProps, props) {
        const output = _extends$1({}, props);
        Object.keys(defaultProps).forEach((propName => {
            if (propName.toString().match(/^(components|slots)$/)) {
                output[propName] = _extends$1({}, defaultProps[propName], output[propName]);
            } else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
                const defaultSlotProps = defaultProps[propName] || {};
                const slotProps = props[propName];
                output[propName] = {};
                if (!slotProps || !Object.keys(slotProps)) {
                    output[propName] = defaultSlotProps;
                } else if (!defaultSlotProps || !Object.keys(defaultSlotProps)) {
                    output[propName] = slotProps;
                } else {
                    output[propName] = _extends$1({}, slotProps);
                    Object.keys(defaultSlotProps).forEach((slotPropName => {
                        output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
                    }));
                }
            } else if (output[propName] === undefined) {
                output[propName] = defaultProps[propName];
            }
        }));
        return output;
    }
    function getThemeProps$1(params) {
        const {theme: theme, name: name, props: props} = params;
        if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
            return props;
        }
        return resolveProps(theme.components[name].defaultProps, props);
    }
    function useThemeProps({props: props, name: name, defaultTheme: defaultTheme, themeId: themeId}) {
        let theme = useTheme$1(defaultTheme);
        if (themeId) {
            theme = theme[themeId] || theme;
        }
        const mergedProps = getThemeProps$1({
            theme: theme,
            name: name,
            props: props
        });
        return mergedProps;
    }
    const useEnhancedEffect = typeof window !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
    function clamp$1(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
        return Math.max(min, Math.min(val, max));
    }
    var clamp = Object.freeze({
        __proto__: null,
        default: clamp$1
    });
    function createChainedFunction(...funcs) {
        return funcs.reduce(((acc, func) => {
            if (func == null) {
                return acc;
            }
            return function chainedFunction(...args) {
                acc.apply(this, args);
                func.apply(this, args);
            };
        }), (() => {}));
    }
    function debounce(func, wait = 166) {
        let timeout;
        function debounced(...args) {
            const later = () => {
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        }
        debounced.clear = () => {
            clearTimeout(timeout);
        };
        return debounced;
    }
    function isMuiElement(element, muiNames) {
        var _muiName, _element$type;
        return reactExports.isValidElement(element) && muiNames.indexOf((_muiName = element.type.muiName) != null ? _muiName : (_element$type = element.type) == null || (_element$type = _element$type._payload) == null || (_element$type = _element$type.value) == null ? void 0 : _element$type.muiName) !== -1;
    }
    function ownerDocument(node) {
        return node && node.ownerDocument || document;
    }
    function ownerWindow(node) {
        const doc = ownerDocument(node);
        return doc.defaultView || window;
    }
    function setRef(ref, value) {
        if (typeof ref === "function") {
            ref(value);
        } else if (ref) {
            ref.current = value;
        }
    }
    let globalId = 0;
    function useGlobalId(idOverride) {
        const [defaultId, setDefaultId] = reactExports.useState(idOverride);
        const id = idOverride || defaultId;
        reactExports.useEffect((() => {
            if (defaultId == null) {
                globalId += 1;
                setDefaultId(`mui-${globalId}`);
            }
        }), [ defaultId ]);
        return id;
    }
    const maybeReactUseId = React$1["useId".toString()];
    function useId(idOverride) {
        if (maybeReactUseId !== undefined) {
            const reactId = maybeReactUseId();
            return idOverride != null ? idOverride : reactId;
        }
        return useGlobalId(idOverride);
    }
    function useControlled({controlled: controlled, default: defaultProp, name: name, state: state = "value"}) {
        const {current: isControlled} = reactExports.useRef(controlled !== undefined);
        const [valueState, setValue] = reactExports.useState(defaultProp);
        const value = isControlled ? controlled : valueState;
        const setValueIfUncontrolled = reactExports.useCallback((newValue => {
            if (!isControlled) {
                setValue(newValue);
            }
        }), []);
        return [ value, setValueIfUncontrolled ];
    }
    function useEventCallback(fn) {
        const ref = reactExports.useRef(fn);
        useEnhancedEffect((() => {
            ref.current = fn;
        }));
        return reactExports.useRef(((...args) => (0, ref.current)(...args))).current;
    }
    function useForkRef(...refs) {
        return reactExports.useMemo((() => {
            if (refs.every((ref => ref == null))) {
                return null;
            }
            return instance => {
                refs.forEach((ref => {
                    setRef(ref, instance);
                }));
            };
        }), refs);
    }
    const UNINITIALIZED = {};
    function useLazyRef(init, initArg) {
        const ref = reactExports.useRef(UNINITIALIZED);
        if (ref.current === UNINITIALIZED) {
            ref.current = init(initArg);
        }
        return ref;
    }
    const EMPTY = [];
    function useOnMount(fn) {
        reactExports.useEffect(fn, EMPTY);
    }
    class Timeout {
        constructor() {
            this.currentId = null;
            this.clear = () => {
                if (this.currentId !== null) {
                    clearTimeout(this.currentId);
                    this.currentId = null;
                }
            };
            this.disposeEffect = () => this.clear;
        }
        static create() {
            return new Timeout;
        }
        start(delay, fn) {
            this.clear();
            this.currentId = setTimeout((() => {
                this.currentId = null;
                fn();
            }), delay);
        }
    }
    function useTimeout() {
        const timeout = useLazyRef(Timeout.create).current;
        useOnMount(timeout.disposeEffect);
        return timeout;
    }
    let hadKeyboardEvent = true;
    let hadFocusVisibleRecently = false;
    const hadFocusVisibleRecentlyTimeout = new Timeout;
    const inputTypesWhitelist = {
        text: true,
        search: true,
        url: true,
        tel: true,
        email: true,
        password: true,
        number: true,
        date: true,
        month: true,
        week: true,
        time: true,
        datetime: true,
        "datetime-local": true
    };
    function focusTriggersKeyboardModality(node) {
        const {type: type, tagName: tagName} = node;
        if (tagName === "INPUT" && inputTypesWhitelist[type] && !node.readOnly) {
            return true;
        }
        if (tagName === "TEXTAREA" && !node.readOnly) {
            return true;
        }
        if (node.isContentEditable) {
            return true;
        }
        return false;
    }
    function handleKeyDown(event) {
        if (event.metaKey || event.altKey || event.ctrlKey) {
            return;
        }
        hadKeyboardEvent = true;
    }
    function handlePointerDown() {
        hadKeyboardEvent = false;
    }
    function handleVisibilityChange() {
        if (this.visibilityState === "hidden") {
            if (hadFocusVisibleRecently) {
                hadKeyboardEvent = true;
            }
        }
    }
    function prepare(doc) {
        doc.addEventListener("keydown", handleKeyDown, true);
        doc.addEventListener("mousedown", handlePointerDown, true);
        doc.addEventListener("pointerdown", handlePointerDown, true);
        doc.addEventListener("touchstart", handlePointerDown, true);
        doc.addEventListener("visibilitychange", handleVisibilityChange, true);
    }
    function isFocusVisible(event) {
        const {target: target} = event;
        try {
            return target.matches(":focus-visible");
        } catch (error) {}
        return hadKeyboardEvent || focusTriggersKeyboardModality(target);
    }
    function useIsFocusVisible() {
        const ref = reactExports.useCallback((node => {
            if (node != null) {
                prepare(node.ownerDocument);
            }
        }), []);
        const isFocusVisibleRef = reactExports.useRef(false);
        function handleBlurVisible() {
            if (isFocusVisibleRef.current) {
                hadFocusVisibleRecently = true;
                hadFocusVisibleRecentlyTimeout.start(100, (() => {
                    hadFocusVisibleRecently = false;
                }));
                isFocusVisibleRef.current = false;
                return true;
            }
            return false;
        }
        function handleFocusVisible(event) {
            if (isFocusVisible(event)) {
                isFocusVisibleRef.current = true;
                return true;
            }
            return false;
        }
        return {
            isFocusVisibleRef: isFocusVisibleRef,
            onFocus: handleFocusVisible,
            onBlur: handleBlurVisible,
            ref: ref
        };
    }
    function getScrollbarSize(doc) {
        const documentWidth = doc.documentElement.clientWidth;
        return Math.abs(window.innerWidth - documentWidth);
    }
    function composeClasses(slots, getUtilityClass, classes = undefined) {
        const output = {};
        Object.keys(slots).forEach((slot => {
            output[slot] = slots[slot].reduce(((acc, key) => {
                if (key) {
                    const utilityClass = getUtilityClass(key);
                    if (utilityClass !== "") {
                        acc.push(utilityClass);
                    }
                    if (classes && classes[key]) {
                        acc.push(classes[key]);
                    }
                }
                return acc;
            }), []).join(" ");
        }));
        return output;
    }
    function isHostComponent(element) {
        return typeof element === "string";
    }
    function appendOwnerState(elementType, otherProps, ownerState) {
        if (elementType === undefined || isHostComponent(elementType)) {
            return otherProps;
        }
        return _extends$1({}, otherProps, {
            ownerState: _extends$1({}, otherProps.ownerState, ownerState)
        });
    }
    function extractEventHandlers(object, excludeKeys = []) {
        if (object === undefined) {
            return {};
        }
        const result = {};
        Object.keys(object).filter((prop => prop.match(/^on[A-Z]/) && typeof object[prop] === "function" && !excludeKeys.includes(prop))).forEach((prop => {
            result[prop] = object[prop];
        }));
        return result;
    }
    function omitEventHandlers(object) {
        if (object === undefined) {
            return {};
        }
        const result = {};
        Object.keys(object).filter((prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === "function"))).forEach((prop => {
            result[prop] = object[prop];
        }));
        return result;
    }
    function mergeSlotProps(parameters) {
        const {getSlotProps: getSlotProps, additionalProps: additionalProps, externalSlotProps: externalSlotProps, externalForwardedProps: externalForwardedProps, className: className} = parameters;
        if (!getSlotProps) {
            const joinedClasses = clsx(additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
            const mergedStyle = _extends$1({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
            const props = _extends$1({}, additionalProps, externalForwardedProps, externalSlotProps);
            if (joinedClasses.length > 0) {
                props.className = joinedClasses;
            }
            if (Object.keys(mergedStyle).length > 0) {
                props.style = mergedStyle;
            }
            return {
                props: props,
                internalRef: undefined
            };
        }
        const eventHandlers = extractEventHandlers(_extends$1({}, externalForwardedProps, externalSlotProps));
        const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
        const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
        const internalSlotProps = getSlotProps(eventHandlers);
        const joinedClasses = clsx(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
        const mergedStyle = _extends$1({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
        const props = _extends$1({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
        if (joinedClasses.length > 0) {
            props.className = joinedClasses;
        }
        if (Object.keys(mergedStyle).length > 0) {
            props.style = mergedStyle;
        }
        return {
            props: props,
            internalRef: internalSlotProps.ref
        };
    }
    function resolveComponentProps(componentProps, ownerState, slotState) {
        if (typeof componentProps === "function") {
            return componentProps(ownerState, slotState);
        }
        return componentProps;
    }
    const _excluded$J = [ "elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps" ];
    function useSlotProps(parameters) {
        var _parameters$additiona;
        const {elementType: elementType, externalSlotProps: externalSlotProps, ownerState: ownerState, skipResolvingSlotProps: skipResolvingSlotProps = false} = parameters, rest = _objectWithoutPropertiesLoose(parameters, _excluded$J);
        const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState);
        const {props: mergedProps, internalRef: internalRef} = mergeSlotProps(_extends$1({}, rest, {
            externalSlotProps: resolvedComponentsProps
        }));
        const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
        const props = appendOwnerState(elementType, _extends$1({}, mergedProps, {
            ref: ref
        }), ownerState);
        return props;
    }
    function getReactElementRef(element) {
        if (parseInt(reactExports.version, 10) >= 19) {
            var _element$props;
            return (element == null || (_element$props = element.props) == null ? void 0 : _element$props.ref) || null;
        }
        return (element == null ? void 0 : element.ref) || null;
    }
    const RtlContext = reactExports.createContext();
    const useRtl = () => {
        const value = reactExports.useContext(RtlContext);
        return value != null ? value : false;
    };
    const PropsContext = reactExports.createContext(undefined);
    function getThemeProps(params) {
        const {theme: theme, name: name, props: props} = params;
        if (!theme || !theme.components || !theme.components[name]) {
            return props;
        }
        const config = theme.components[name];
        if (config.defaultProps) {
            return resolveProps(config.defaultProps, props);
        }
        if (!config.styleOverrides && !config.variants) {
            return resolveProps(config, props);
        }
        return props;
    }
    function useDefaultProps$1({props: props, name: name}) {
        const ctx = reactExports.useContext(PropsContext);
        return getThemeProps({
            props: props,
            name: name,
            theme: {
                components: ctx
            }
        });
    }
    const _excluded$I = [ "component", "direction", "spacing", "divider", "children", "className", "useFlexGap" ];
    const defaultTheme$2 = createTheme$2();
    const defaultCreateStyledComponent = styled$1("div", {
        name: "MuiStack",
        slot: "Root",
        overridesResolver: (props, styles) => styles.root
    });
    function useThemePropsDefault(props) {
        return useThemeProps({
            props: props,
            name: "MuiStack",
            defaultTheme: defaultTheme$2
        });
    }
    function joinChildren(children, separator) {
        const childrenArray = reactExports.Children.toArray(children).filter(Boolean);
        return childrenArray.reduce(((output, child, index) => {
            output.push(child);
            if (index < childrenArray.length - 1) {
                output.push(reactExports.cloneElement(separator, {
                    key: `separator-${index}`
                }));
            }
            return output;
        }), []);
    }
    const getSideFromDirection = direction => ({
        row: "Left",
        "row-reverse": "Right",
        column: "Top",
        "column-reverse": "Bottom"
    }[direction]);
    const style = ({ownerState: ownerState, theme: theme}) => {
        let styles = _extends$1({
            display: "flex",
            flexDirection: "column"
        }, handleBreakpoints({
            theme: theme
        }, resolveBreakpointValues({
            values: ownerState.direction,
            breakpoints: theme.breakpoints.values
        }), (propValue => ({
            flexDirection: propValue
        }))));
        if (ownerState.spacing) {
            const transformer = createUnarySpacing(theme);
            const base = Object.keys(theme.breakpoints.values).reduce(((acc, breakpoint) => {
                if (typeof ownerState.spacing === "object" && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === "object" && ownerState.direction[breakpoint] != null) {
                    acc[breakpoint] = true;
                }
                return acc;
            }), {});
            const directionValues = resolveBreakpointValues({
                values: ownerState.direction,
                base: base
            });
            const spacingValues = resolveBreakpointValues({
                values: ownerState.spacing,
                base: base
            });
            if (typeof directionValues === "object") {
                Object.keys(directionValues).forEach(((breakpoint, index, breakpoints) => {
                    const directionValue = directionValues[breakpoint];
                    if (!directionValue) {
                        const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : "column";
                        directionValues[breakpoint] = previousDirectionValue;
                    }
                }));
            }
            const styleFromPropValue = (propValue, breakpoint) => {
                if (ownerState.useFlexGap) {
                    return {
                        gap: getValue(transformer, propValue)
                    };
                }
                return {
                    "& > :not(style):not(style)": {
                        margin: 0
                    },
                    "& > :not(style) ~ :not(style)": {
                        [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: getValue(transformer, propValue)
                    }
                };
            };
            styles = deepmerge$1(styles, handleBreakpoints({
                theme: theme
            }, spacingValues, styleFromPropValue));
        }
        styles = mergeBreakpointsInOrder(theme.breakpoints, styles);
        return styles;
    };
    function createStack(options = {}) {
        const {createStyledComponent: createStyledComponent = defaultCreateStyledComponent, useThemeProps: useThemeProps = useThemePropsDefault, componentName: componentName = "MuiStack"} = options;
        const useUtilityClasses = () => {
            const slots = {
                root: [ "root" ]
            };
            return composeClasses(slots, (slot => generateUtilityClass(componentName, slot)), {});
        };
        const StackRoot = createStyledComponent(style);
        const Stack = reactExports.forwardRef((function Grid(inProps, ref) {
            const themeProps = useThemeProps(inProps);
            const props = extendSxProp(themeProps);
            const {component: component = "div", direction: direction = "column", spacing: spacing = 0, divider: divider, children: children, className: className, useFlexGap: useFlexGap = false} = props, other = _objectWithoutPropertiesLoose(props, _excluded$I);
            const ownerState = {
                direction: direction,
                spacing: spacing,
                useFlexGap: useFlexGap
            };
            const classes = useUtilityClasses();
            return jsxRuntimeExports.jsx(StackRoot, _extends$1({
                as: component,
                ownerState: ownerState,
                ref: ref,
                className: clsx(classes.root, className)
            }, other, {
                children: divider ? joinChildren(children, divider) : children
            }));
        }));
        return Stack;
    }
    function createMixins(breakpoints, mixins) {
        return _extends$1({
            toolbar: {
                minHeight: 56,
                [breakpoints.up("xs")]: {
                    "@media (orientation: landscape)": {
                        minHeight: 48
                    }
                },
                [breakpoints.up("sm")]: {
                    minHeight: 64
                }
            }
        }, mixins);
    }
    var colorManipulator = {};
    var interopRequireDefault = {
        exports: {}
    };
    (function(module) {
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(interopRequireDefault);
    var interopRequireDefaultExports = interopRequireDefault.exports;
    var require$$1$1 = getAugmentedNamespace(formatMuiErrorMessage);
    var require$$2 = getAugmentedNamespace(clamp);
    var _interopRequireDefault$1 = interopRequireDefaultExports;
    Object.defineProperty(colorManipulator, "__esModule", {
        value: true
    });
    var alpha_1 = colorManipulator.alpha = alpha;
    colorManipulator.blend = blend;
    colorManipulator.colorChannel = void 0;
    var darken_1 = colorManipulator.darken = darken;
    colorManipulator.decomposeColor = decomposeColor;
    colorManipulator.emphasize = emphasize;
    var getContrastRatio_1 = colorManipulator.getContrastRatio = getContrastRatio;
    colorManipulator.getLuminance = getLuminance;
    colorManipulator.hexToRgb = hexToRgb;
    colorManipulator.hslToRgb = hslToRgb;
    var lighten_1 = colorManipulator.lighten = lighten;
    colorManipulator.private_safeAlpha = private_safeAlpha;
    colorManipulator.private_safeColorChannel = void 0;
    colorManipulator.private_safeDarken = private_safeDarken;
    colorManipulator.private_safeEmphasize = private_safeEmphasize;
    colorManipulator.private_safeLighten = private_safeLighten;
    colorManipulator.recomposeColor = recomposeColor;
    colorManipulator.rgbToHex = rgbToHex;
    var _formatMuiErrorMessage2 = _interopRequireDefault$1(require$$1$1);
    var _clamp = _interopRequireDefault$1(require$$2);
    function clampWrapper(value, min = 0, max = 1) {
        return (0, _clamp.default)(value, min, max);
    }
    function hexToRgb(color) {
        color = color.slice(1);
        const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, "g");
        let colors = color.match(re);
        if (colors && colors[0].length === 1) {
            colors = colors.map((n => n + n));
        }
        return colors ? `rgb${colors.length === 4 ? "a" : ""}(${colors.map(((n, index) => index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3)).join(", ")})` : "";
    }
    function intToHex(int) {
        const hex = int.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    }
    function decomposeColor(color) {
        if (color.type) {
            return color;
        }
        if (color.charAt(0) === "#") {
            return decomposeColor(hexToRgb(color));
        }
        const marker = color.indexOf("(");
        const type = color.substring(0, marker);
        if ([ "rgb", "rgba", "hsl", "hsla", "color" ].indexOf(type) === -1) {
            throw new Error((0, _formatMuiErrorMessage2.default)(9, color));
        }
        let values = color.substring(marker + 1, color.length - 1);
        let colorSpace;
        if (type === "color") {
            values = values.split(" ");
            colorSpace = values.shift();
            if (values.length === 4 && values[3].charAt(0) === "/") {
                values[3] = values[3].slice(1);
            }
            if ([ "srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020" ].indexOf(colorSpace) === -1) {
                throw new Error((0, _formatMuiErrorMessage2.default)(10, colorSpace));
            }
        } else {
            values = values.split(",");
        }
        values = values.map((value => parseFloat(value)));
        return {
            type: type,
            values: values,
            colorSpace: colorSpace
        };
    }
    const colorChannel = color => {
        const decomposedColor = decomposeColor(color);
        return decomposedColor.values.slice(0, 3).map(((val, idx) => decomposedColor.type.indexOf("hsl") !== -1 && idx !== 0 ? `${val}%` : val)).join(" ");
    };
    colorManipulator.colorChannel = colorChannel;
    const private_safeColorChannel = (color, warning) => {
        try {
            return colorChannel(color);
        } catch (error) {
            return color;
        }
    };
    colorManipulator.private_safeColorChannel = private_safeColorChannel;
    function recomposeColor(color) {
        const {type: type, colorSpace: colorSpace} = color;
        let {values: values} = color;
        if (type.indexOf("rgb") !== -1) {
            values = values.map(((n, i) => i < 3 ? parseInt(n, 10) : n));
        } else if (type.indexOf("hsl") !== -1) {
            values[1] = `${values[1]}%`;
            values[2] = `${values[2]}%`;
        }
        if (type.indexOf("color") !== -1) {
            values = `${colorSpace} ${values.join(" ")}`;
        } else {
            values = `${values.join(", ")}`;
        }
        return `${type}(${values})`;
    }
    function rgbToHex(color) {
        if (color.indexOf("#") === 0) {
            return color;
        }
        const {values: values} = decomposeColor(color);
        return `#${values.map(((n, i) => intToHex(i === 3 ? Math.round(255 * n) : n))).join("")}`;
    }
    function hslToRgb(color) {
        color = decomposeColor(color);
        const {values: values} = color;
        const h = values[0];
        const s = values[1] / 100;
        const l = values[2] / 100;
        const a = s * Math.min(l, 1 - l);
        const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        let type = "rgb";
        const rgb = [ Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255) ];
        if (color.type === "hsla") {
            type += "a";
            rgb.push(values[3]);
        }
        return recomposeColor({
            type: type,
            values: rgb
        });
    }
    function getLuminance(color) {
        color = decomposeColor(color);
        let rgb = color.type === "hsl" || color.type === "hsla" ? decomposeColor(hslToRgb(color)).values : color.values;
        rgb = rgb.map((val => {
            if (color.type !== "color") {
                val /= 255;
            }
            return val <= .03928 ? val / 12.92 : ((val + .055) / 1.055) ** 2.4;
        }));
        return Number((.2126 * rgb[0] + .7152 * rgb[1] + .0722 * rgb[2]).toFixed(3));
    }
    function getContrastRatio(foreground, background) {
        const lumA = getLuminance(foreground);
        const lumB = getLuminance(background);
        return (Math.max(lumA, lumB) + .05) / (Math.min(lumA, lumB) + .05);
    }
    function alpha(color, value) {
        color = decomposeColor(color);
        value = clampWrapper(value);
        if (color.type === "rgb" || color.type === "hsl") {
            color.type += "a";
        }
        if (color.type === "color") {
            color.values[3] = `/${value}`;
        } else {
            color.values[3] = value;
        }
        return recomposeColor(color);
    }
    function private_safeAlpha(color, value, warning) {
        try {
            return alpha(color, value);
        } catch (error) {
            return color;
        }
    }
    function darken(color, coefficient) {
        color = decomposeColor(color);
        coefficient = clampWrapper(coefficient);
        if (color.type.indexOf("hsl") !== -1) {
            color.values[2] *= 1 - coefficient;
        } else if (color.type.indexOf("rgb") !== -1 || color.type.indexOf("color") !== -1) {
            for (let i = 0; i < 3; i += 1) {
                color.values[i] *= 1 - coefficient;
            }
        }
        return recomposeColor(color);
    }
    function private_safeDarken(color, coefficient, warning) {
        try {
            return darken(color, coefficient);
        } catch (error) {
            return color;
        }
    }
    function lighten(color, coefficient) {
        color = decomposeColor(color);
        coefficient = clampWrapper(coefficient);
        if (color.type.indexOf("hsl") !== -1) {
            color.values[2] += (100 - color.values[2]) * coefficient;
        } else if (color.type.indexOf("rgb") !== -1) {
            for (let i = 0; i < 3; i += 1) {
                color.values[i] += (255 - color.values[i]) * coefficient;
            }
        } else if (color.type.indexOf("color") !== -1) {
            for (let i = 0; i < 3; i += 1) {
                color.values[i] += (1 - color.values[i]) * coefficient;
            }
        }
        return recomposeColor(color);
    }
    function private_safeLighten(color, coefficient, warning) {
        try {
            return lighten(color, coefficient);
        } catch (error) {
            return color;
        }
    }
    function emphasize(color, coefficient = .15) {
        return getLuminance(color) > .5 ? darken(color, coefficient) : lighten(color, coefficient);
    }
    function private_safeEmphasize(color, coefficient, warning) {
        try {
            return emphasize(color, coefficient);
        } catch (error) {
            return color;
        }
    }
    function blend(background, overlay, opacity, gamma = 1) {
        const blendChannel = (b, o) => Math.round((b ** (1 / gamma) * (1 - opacity) + o ** (1 / gamma) * opacity) ** gamma);
        const backgroundColor = decomposeColor(background);
        const overlayColor = decomposeColor(overlay);
        const rgb = [ blendChannel(backgroundColor.values[0], overlayColor.values[0]), blendChannel(backgroundColor.values[1], overlayColor.values[1]), blendChannel(backgroundColor.values[2], overlayColor.values[2]) ];
        return recomposeColor({
            type: "rgb",
            values: rgb
        });
    }
    const _excluded$H = [ "mode", "contrastThreshold", "tonalOffset" ];
    const light = {
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.6)",
            disabled: "rgba(0, 0, 0, 0.38)"
        },
        divider: "rgba(0, 0, 0, 0.12)",
        background: {
            paper: common.white,
            default: common.white
        },
        action: {
            active: "rgba(0, 0, 0, 0.54)",
            hover: "rgba(0, 0, 0, 0.04)",
            hoverOpacity: .04,
            selected: "rgba(0, 0, 0, 0.08)",
            selectedOpacity: .08,
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)",
            disabledOpacity: .38,
            focus: "rgba(0, 0, 0, 0.12)",
            focusOpacity: .12,
            activatedOpacity: .12
        }
    };
    const dark = {
        text: {
            primary: common.white,
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
            icon: "rgba(255, 255, 255, 0.5)"
        },
        divider: "rgba(255, 255, 255, 0.12)",
        background: {
            paper: "#121212",
            default: "#121212"
        },
        action: {
            active: common.white,
            hover: "rgba(255, 255, 255, 0.08)",
            hoverOpacity: .08,
            selected: "rgba(255, 255, 255, 0.16)",
            selectedOpacity: .16,
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
            disabledOpacity: .38,
            focus: "rgba(255, 255, 255, 0.12)",
            focusOpacity: .12,
            activatedOpacity: .24
        }
    };
    function addLightOrDark(intent, direction, shade, tonalOffset) {
        const tonalOffsetLight = tonalOffset.light || tonalOffset;
        const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
        if (!intent[direction]) {
            if (intent.hasOwnProperty(shade)) {
                intent[direction] = intent[shade];
            } else if (direction === "light") {
                intent.light = lighten_1(intent.main, tonalOffsetLight);
            } else if (direction === "dark") {
                intent.dark = darken_1(intent.main, tonalOffsetDark);
            }
        }
    }
    function getDefaultPrimary(mode = "light") {
        if (mode === "dark") {
            return {
                main: blue[200],
                light: blue[50],
                dark: blue[400]
            };
        }
        return {
            main: blue[700],
            light: blue[400],
            dark: blue[800]
        };
    }
    function getDefaultSecondary(mode = "light") {
        if (mode === "dark") {
            return {
                main: purple[200],
                light: purple[50],
                dark: purple[400]
            };
        }
        return {
            main: purple[500],
            light: purple[300],
            dark: purple[700]
        };
    }
    function getDefaultError(mode = "light") {
        if (mode === "dark") {
            return {
                main: red[500],
                light: red[300],
                dark: red[700]
            };
        }
        return {
            main: red[700],
            light: red[400],
            dark: red[800]
        };
    }
    function getDefaultInfo(mode = "light") {
        if (mode === "dark") {
            return {
                main: lightBlue[400],
                light: lightBlue[300],
                dark: lightBlue[700]
            };
        }
        return {
            main: lightBlue[700],
            light: lightBlue[500],
            dark: lightBlue[900]
        };
    }
    function getDefaultSuccess(mode = "light") {
        if (mode === "dark") {
            return {
                main: green[400],
                light: green[300],
                dark: green[700]
            };
        }
        return {
            main: green[800],
            light: green[500],
            dark: green[900]
        };
    }
    function getDefaultWarning(mode = "light") {
        if (mode === "dark") {
            return {
                main: orange[400],
                light: orange[300],
                dark: orange[700]
            };
        }
        return {
            main: "#ed6c02",
            light: orange[500],
            dark: orange[900]
        };
    }
    function createPalette(palette) {
        const {mode: mode = "light", contrastThreshold: contrastThreshold = 3, tonalOffset: tonalOffset = .2} = palette, other = _objectWithoutPropertiesLoose(palette, _excluded$H);
        const primary = palette.primary || getDefaultPrimary(mode);
        const secondary = palette.secondary || getDefaultSecondary(mode);
        const error = palette.error || getDefaultError(mode);
        const info = palette.info || getDefaultInfo(mode);
        const success = palette.success || getDefaultSuccess(mode);
        const warning = palette.warning || getDefaultWarning(mode);
        function getContrastText(background) {
            const contrastText = getContrastRatio_1(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
            return contrastText;
        }
        const augmentColor = ({color: color, name: name, mainShade: mainShade = 500, lightShade: lightShade = 300, darkShade: darkShade = 700}) => {
            color = _extends$1({}, color);
            if (!color.main && color[mainShade]) {
                color.main = color[mainShade];
            }
            if (!color.hasOwnProperty("main")) {
                throw new Error(formatMuiErrorMessage$1(11, name ? ` (${name})` : "", mainShade));
            }
            if (typeof color.main !== "string") {
                throw new Error(formatMuiErrorMessage$1(12, name ? ` (${name})` : "", JSON.stringify(color.main)));
            }
            addLightOrDark(color, "light", lightShade, tonalOffset);
            addLightOrDark(color, "dark", darkShade, tonalOffset);
            if (!color.contrastText) {
                color.contrastText = getContrastText(color.main);
            }
            return color;
        };
        const modes = {
            dark: dark,
            light: light
        };
        const paletteOutput = deepmerge$1(_extends$1({
            common: _extends$1({}, common),
            mode: mode,
            primary: augmentColor({
                color: primary,
                name: "primary"
            }),
            secondary: augmentColor({
                color: secondary,
                name: "secondary",
                mainShade: "A400",
                lightShade: "A200",
                darkShade: "A700"
            }),
            error: augmentColor({
                color: error,
                name: "error"
            }),
            warning: augmentColor({
                color: warning,
                name: "warning"
            }),
            info: augmentColor({
                color: info,
                name: "info"
            }),
            success: augmentColor({
                color: success,
                name: "success"
            }),
            grey: grey,
            contrastThreshold: contrastThreshold,
            getContrastText: getContrastText,
            augmentColor: augmentColor,
            tonalOffset: tonalOffset
        }, modes[mode]), other);
        return paletteOutput;
    }
    const _excluded$G = [ "fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem" ];
    function round(value) {
        return Math.round(value * 1e5) / 1e5;
    }
    const caseAllCaps = {
        textTransform: "uppercase"
    };
    const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
    function createTypography(palette, typography) {
        const _ref = typeof typography === "function" ? typography(palette) : typography, {fontFamily: fontFamily = defaultFontFamily, fontSize: fontSize = 14, fontWeightLight: fontWeightLight = 300, fontWeightRegular: fontWeightRegular = 400, fontWeightMedium: fontWeightMedium = 500, fontWeightBold: fontWeightBold = 700, htmlFontSize: htmlFontSize = 16, allVariants: allVariants, pxToRem: pxToRem2} = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded$G);
        const coef = fontSize / 14;
        const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);
        const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends$1({
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            fontSize: pxToRem(size),
            lineHeight: lineHeight
        }, fontFamily === defaultFontFamily ? {
            letterSpacing: `${round(letterSpacing / size)}em`
        } : {}, casing, allVariants);
        const variants = {
            h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
            h2: buildVariant(fontWeightLight, 60, 1.2, -.5),
            h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
            h4: buildVariant(fontWeightRegular, 34, 1.235, .25),
            h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
            h6: buildVariant(fontWeightMedium, 20, 1.6, .15),
            subtitle1: buildVariant(fontWeightRegular, 16, 1.75, .15),
            subtitle2: buildVariant(fontWeightMedium, 14, 1.57, .1),
            body1: buildVariant(fontWeightRegular, 16, 1.5, .15),
            body2: buildVariant(fontWeightRegular, 14, 1.43, .15),
            button: buildVariant(fontWeightMedium, 14, 1.75, .4, caseAllCaps),
            caption: buildVariant(fontWeightRegular, 12, 1.66, .4),
            overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
            inherit: {
                fontFamily: "inherit",
                fontWeight: "inherit",
                fontSize: "inherit",
                lineHeight: "inherit",
                letterSpacing: "inherit"
            }
        };
        return deepmerge$1(_extends$1({
            htmlFontSize: htmlFontSize,
            pxToRem: pxToRem,
            fontFamily: fontFamily,
            fontSize: fontSize,
            fontWeightLight: fontWeightLight,
            fontWeightRegular: fontWeightRegular,
            fontWeightMedium: fontWeightMedium,
            fontWeightBold: fontWeightBold
        }, variants), other, {
            clone: false
        });
    }
    const shadowKeyUmbraOpacity = .2;
    const shadowKeyPenumbraOpacity = .14;
    const shadowAmbientShadowOpacity = .12;
    function createShadow(...px) {
        return [ `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})` ].join(",");
    }
    const shadows = [ "none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8) ];
    const _excluded$F = [ "duration", "easing", "delay" ];
    const easing = {
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
    };
    const duration = {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195
    };
    function formatMs(milliseconds) {
        return `${Math.round(milliseconds)}ms`;
    }
    function getAutoHeightDuration(height) {
        if (!height) {
            return 0;
        }
        const constant = height / 36;
        return Math.round((4 + 15 * constant ** .25 + constant / 5) * 10);
    }
    function createTransitions(inputTransitions) {
        const mergedEasing = _extends$1({}, easing, inputTransitions.easing);
        const mergedDuration = _extends$1({}, duration, inputTransitions.duration);
        const create = (props = [ "all" ], options = {}) => {
            const {duration: durationOption = mergedDuration.standard, easing: easingOption = mergedEasing.easeInOut, delay: delay = 0} = options;
            _objectWithoutPropertiesLoose(options, _excluded$F);
            return (Array.isArray(props) ? props : [ props ]).map((animatedProp => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`)).join(",");
        };
        return _extends$1({
            getAutoHeightDuration: getAutoHeightDuration,
            create: create
        }, inputTransitions, {
            easing: mergedEasing,
            duration: mergedDuration
        });
    }
    const zIndex = {
        mobileStepper: 1e3,
        fab: 1050,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500
    };
    const _excluded$E = [ "breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape" ];
    function createTheme(options = {}, ...args) {
        const {mixins: mixinsInput = {}, palette: paletteInput = {}, transitions: transitionsInput = {}, typography: typographyInput = {}} = options, other = _objectWithoutPropertiesLoose(options, _excluded$E);
        if (options.vars && options.generateCssVars === undefined) {
            throw new Error(formatMuiErrorMessage$1(18));
        }
        const palette = createPalette(paletteInput);
        const systemTheme = createTheme$2(options);
        let muiTheme = deepmerge$1(systemTheme, {
            mixins: createMixins(systemTheme.breakpoints, mixinsInput),
            palette: palette,
            shadows: shadows.slice(),
            typography: createTypography(palette, typographyInput),
            transitions: createTransitions(transitionsInput),
            zIndex: _extends$1({}, zIndex)
        });
        muiTheme = deepmerge$1(muiTheme, other);
        muiTheme = args.reduce(((acc, argument) => deepmerge$1(acc, argument)), muiTheme);
        muiTheme.unstable_sxConfig = _extends$1({}, defaultSxConfig, other == null ? void 0 : other.unstable_sxConfig);
        muiTheme.unstable_sx = function sx(props) {
            return styleFunctionSx$1({
                sx: props,
                theme: this
            });
        };
        return muiTheme;
    }
    const defaultTheme$1 = createTheme();
    function useTheme() {
        const theme = useTheme$1(defaultTheme$1);
        return theme[THEME_ID] || theme;
    }
    var createStyled$1 = {};
    var _extends = {
        exports: {}
    };
    var hasRequired_extends;
    function require_extends() {
        if (hasRequired_extends) return _extends.exports;
        hasRequired_extends = 1;
        (function(module) {
            function _extends() {
                return module.exports = _extends = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    }
                    return n;
                }, module.exports.__esModule = true, module.exports["default"] = module.exports, 
                _extends.apply(null, arguments);
            }
            module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
        })(_extends);
        return _extends.exports;
    }
    var objectWithoutPropertiesLoose = {
        exports: {}
    };
    var hasRequiredObjectWithoutPropertiesLoose;
    function requireObjectWithoutPropertiesLoose() {
        if (hasRequiredObjectWithoutPropertiesLoose) return objectWithoutPropertiesLoose.exports;
        hasRequiredObjectWithoutPropertiesLoose = 1;
        (function(module) {
            function _objectWithoutPropertiesLoose(r, e) {
                if (null == r) return {};
                var t = {};
                for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
                    if (-1 !== e.indexOf(n)) continue;
                    t[n] = r[n];
                }
                return t;
            }
            module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, 
            module.exports["default"] = module.exports;
        })(objectWithoutPropertiesLoose);
        return objectWithoutPropertiesLoose.exports;
    }
    var require$$1 = getAugmentedNamespace(styledEngine);
    var require$$4 = getAugmentedNamespace(deepmerge);
    var require$$5 = getAugmentedNamespace(capitalize);
    var require$$6 = getAugmentedNamespace(getDisplayName);
    var require$$7 = getAugmentedNamespace(createTheme$1);
    var require$$8 = getAugmentedNamespace(styleFunctionSx);
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(createStyled$1, "__esModule", {
        value: true
    });
    var _default = createStyled$1.default = createStyled;
    createStyled$1.shouldForwardProp = shouldForwardProp;
    createStyled$1.systemDefaultTheme = void 0;
    var _extends2 = _interopRequireDefault(require_extends());
    var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
    var _styledEngine = _interopRequireWildcard(require$$1);
    var _deepmerge = require$$4;
    _interopRequireDefault(require$$5);
    _interopRequireDefault(require$$6);
    var _createTheme = _interopRequireDefault(require$$7);
    var _styleFunctionSx = _interopRequireDefault(require$$8);
    const _excluded$D = [ "ownerState" ], _excluded2$3 = [ "variants" ], _excluded3$1 = [ "name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver" ];
    function _getRequireWildcardCache(e) {
        if ("function" != typeof WeakMap) return null;
        var r = new WeakMap, t = new WeakMap;
        return (_getRequireWildcardCache = function(e) {
            return e ? t : r;
        })(e);
    }
    function _interopRequireWildcard(e, r) {
        if (e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var t = _getRequireWildcardCache(r);
        if (t && t.has(e)) return t.get(e);
        var n = {
            __proto__: null
        }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
        }
        return n.default = e, t && t.set(e, n), n;
    }
    function isEmpty$2(obj) {
        return Object.keys(obj).length === 0;
    }
    function isStringTag(tag) {
        return typeof tag === "string" && tag.charCodeAt(0) > 96;
    }
    function shouldForwardProp(prop) {
        return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
    }
    const systemDefaultTheme = createStyled$1.systemDefaultTheme = (0, _createTheme.default)();
    const lowercaseFirstLetter = string => {
        if (!string) {
            return string;
        }
        return string.charAt(0).toLowerCase() + string.slice(1);
    };
    function resolveTheme({defaultTheme: defaultTheme, theme: theme, themeId: themeId}) {
        return isEmpty$2(theme) ? defaultTheme : theme[themeId] || theme;
    }
    function defaultOverridesResolver(slot) {
        if (!slot) {
            return null;
        }
        return (props, styles) => styles[slot];
    }
    function processStyleArg(callableStyle, _ref) {
        let {ownerState: ownerState} = _ref, props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded$D);
        const resolvedStylesArg = typeof callableStyle === "function" ? callableStyle((0, 
        _extends2.default)({
            ownerState: ownerState
        }, props)) : callableStyle;
        if (Array.isArray(resolvedStylesArg)) {
            return resolvedStylesArg.flatMap((resolvedStyle => processStyleArg(resolvedStyle, (0, 
            _extends2.default)({
                ownerState: ownerState
            }, props))));
        }
        if (!!resolvedStylesArg && typeof resolvedStylesArg === "object" && Array.isArray(resolvedStylesArg.variants)) {
            const {variants: variants = []} = resolvedStylesArg, otherStyles = (0, _objectWithoutPropertiesLoose2.default)(resolvedStylesArg, _excluded2$3);
            let result = otherStyles;
            variants.forEach((variant => {
                let isMatch = true;
                if (typeof variant.props === "function") {
                    isMatch = variant.props((0, _extends2.default)({
                        ownerState: ownerState
                    }, props, ownerState));
                } else {
                    Object.keys(variant.props).forEach((key => {
                        if ((ownerState == null ? void 0 : ownerState[key]) !== variant.props[key] && props[key] !== variant.props[key]) {
                            isMatch = false;
                        }
                    }));
                }
                if (isMatch) {
                    if (!Array.isArray(result)) {
                        result = [ result ];
                    }
                    result.push(typeof variant.style === "function" ? variant.style((0, _extends2.default)({
                        ownerState: ownerState
                    }, props, ownerState)) : variant.style);
                }
            }));
            return result;
        }
        return resolvedStylesArg;
    }
    function createStyled(input = {}) {
        const {themeId: themeId, defaultTheme: defaultTheme = systemDefaultTheme, rootShouldForwardProp: rootShouldForwardProp = shouldForwardProp, slotShouldForwardProp: slotShouldForwardProp = shouldForwardProp} = input;
        const systemSx = props => (0, _styleFunctionSx.default)((0, _extends2.default)({}, props, {
            theme: resolveTheme((0, _extends2.default)({}, props, {
                defaultTheme: defaultTheme,
                themeId: themeId
            }))
        }));
        systemSx.__mui_systemSx = true;
        return (tag, inputOptions = {}) => {
            (0, _styledEngine.internal_processStyles)(tag, (styles => styles.filter((style => !(style != null && style.__mui_systemSx)))));
            const {name: componentName, slot: componentSlot, skipVariantsResolver: inputSkipVariantsResolver, skipSx: inputSkipSx, overridesResolver: overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot))} = inputOptions, options = (0, 
            _objectWithoutPropertiesLoose2.default)(inputOptions, _excluded3$1);
            const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver : componentSlot && componentSlot !== "Root" && componentSlot !== "root" || false;
            const skipSx = inputSkipSx || false;
            let label;
            let shouldForwardPropOption = shouldForwardProp;
            if (componentSlot === "Root" || componentSlot === "root") {
                shouldForwardPropOption = rootShouldForwardProp;
            } else if (componentSlot) {
                shouldForwardPropOption = slotShouldForwardProp;
            } else if (isStringTag(tag)) {
                shouldForwardPropOption = undefined;
            }
            const defaultStyledResolver = (0, _styledEngine.default)(tag, (0, _extends2.default)({
                shouldForwardProp: shouldForwardPropOption,
                label: label
            }, options));
            const transformStyleArg = stylesArg => {
                if (typeof stylesArg === "function" && stylesArg.__emotion_real !== stylesArg || (0, 
                _deepmerge.isPlainObject)(stylesArg)) {
                    return props => processStyleArg(stylesArg, (0, _extends2.default)({}, props, {
                        theme: resolveTheme({
                            theme: props.theme,
                            defaultTheme: defaultTheme,
                            themeId: themeId
                        })
                    }));
                }
                return stylesArg;
            };
            const muiStyledResolver = (styleArg, ...expressions) => {
                let transformedStyleArg = transformStyleArg(styleArg);
                const expressionsWithDefaultTheme = expressions ? expressions.map(transformStyleArg) : [];
                if (componentName && overridesResolver) {
                    expressionsWithDefaultTheme.push((props => {
                        const theme = resolveTheme((0, _extends2.default)({}, props, {
                            defaultTheme: defaultTheme,
                            themeId: themeId
                        }));
                        if (!theme.components || !theme.components[componentName] || !theme.components[componentName].styleOverrides) {
                            return null;
                        }
                        const styleOverrides = theme.components[componentName].styleOverrides;
                        const resolvedStyleOverrides = {};
                        Object.entries(styleOverrides).forEach((([slotKey, slotStyle]) => {
                            resolvedStyleOverrides[slotKey] = processStyleArg(slotStyle, (0, _extends2.default)({}, props, {
                                theme: theme
                            }));
                        }));
                        return overridesResolver(props, resolvedStyleOverrides);
                    }));
                }
                if (componentName && !skipVariantsResolver) {
                    expressionsWithDefaultTheme.push((props => {
                        var _theme$components;
                        const theme = resolveTheme((0, _extends2.default)({}, props, {
                            defaultTheme: defaultTheme,
                            themeId: themeId
                        }));
                        const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[componentName]) == null ? void 0 : _theme$components.variants;
                        return processStyleArg({
                            variants: themeVariants
                        }, (0, _extends2.default)({}, props, {
                            theme: theme
                        }));
                    }));
                }
                if (!skipSx) {
                    expressionsWithDefaultTheme.push(systemSx);
                }
                const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
                if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
                    const placeholders = new Array(numOfCustomFnsApplied).fill("");
                    transformedStyleArg = [ ...styleArg, ...placeholders ];
                    transformedStyleArg.raw = [ ...styleArg.raw, ...placeholders ];
                }
                const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
                if (tag.muiName) {
                    Component.muiName = tag.muiName;
                }
                return Component;
            };
            if (defaultStyledResolver.withConfig) {
                muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
            }
            return muiStyledResolver;
        };
    }
    function slotShouldForwardProp(prop) {
        return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
    }
    const rootShouldForwardProp = prop => slotShouldForwardProp(prop) && prop !== "classes";
    const styled = _default({
        themeId: THEME_ID,
        defaultTheme: defaultTheme$1,
        rootShouldForwardProp: rootShouldForwardProp
    });
    const getOverlayAlpha = elevation => {
        let alphaValue;
        if (elevation < 1) {
            alphaValue = 5.11916 * elevation ** 2;
        } else {
            alphaValue = 4.5 * Math.log(elevation + 1) + 2;
        }
        return (alphaValue / 100).toFixed(2);
    };
    function useDefaultProps(params) {
        return useDefaultProps$1(params);
    }
    function getSvgIconUtilityClass(slot) {
        return generateUtilityClass("MuiSvgIcon", slot);
    }
    generateUtilityClasses("MuiSvgIcon", [ "root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge" ]);
    const _excluded$C = [ "children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox" ];
    const useUtilityClasses$w = ownerState => {
        const {color: color, fontSize: fontSize, classes: classes} = ownerState;
        const slots = {
            root: [ "root", color !== "inherit" && `color${capitalize$1(color)}`, `fontSize${capitalize$1(fontSize)}` ]
        };
        return composeClasses(slots, getSvgIconUtilityClass, classes);
    };
    const SvgIconRoot = styled("svg", {
        name: "MuiSvgIcon",
        slot: "Root",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.root, ownerState.color !== "inherit" && styles[`color${capitalize$1(ownerState.color)}`], styles[`fontSize${capitalize$1(ownerState.fontSize)}`] ];
        }
    })((({theme: theme, ownerState: ownerState}) => {
        var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette2, _palette3;
        return {
            userSelect: "none",
            width: "1em",
            height: "1em",
            display: "inline-block",
            fill: ownerState.hasSvgAsChild ? undefined : "currentColor",
            flexShrink: 0,
            transition: (_theme$transitions = theme.transitions) == null || (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, "fill", {
                duration: (_theme$transitions2 = theme.transitions) == null || (_theme$transitions2 = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2.shorter
            }),
            fontSize: {
                inherit: "inherit",
                small: ((_theme$typography = theme.typography) == null || (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || "1.25rem",
                medium: ((_theme$typography2 = theme.typography) == null || (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || "1.5rem",
                large: ((_theme$typography3 = theme.typography) == null || (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || "2.1875rem"
            }[ownerState.fontSize],
            color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null || (_palette = _palette[ownerState.color]) == null ? void 0 : _palette.main) != null ? _palette$ownerState$c : {
                action: (_palette2 = (theme.vars || theme).palette) == null || (_palette2 = _palette2.action) == null ? void 0 : _palette2.active,
                disabled: (_palette3 = (theme.vars || theme).palette) == null || (_palette3 = _palette3.action) == null ? void 0 : _palette3.disabled,
                inherit: undefined
            }[ownerState.color]
        };
    }));
    const SvgIcon = reactExports.forwardRef((function SvgIcon(inProps, ref) {
        const props = useDefaultProps({
            props: inProps,
            name: "MuiSvgIcon"
        });
        const {children: children, className: className, color: color = "inherit", component: component = "svg", fontSize: fontSize = "medium", htmlColor: htmlColor, inheritViewBox: inheritViewBox = false, titleAccess: titleAccess, viewBox: viewBox = "0 0 24 24"} = props, other = _objectWithoutPropertiesLoose(props, _excluded$C);
        const hasSvgAsChild = reactExports.isValidElement(children) && children.type === "svg";
        const ownerState = _extends$1({}, props, {
            color: color,
            component: component,
            fontSize: fontSize,
            instanceFontSize: inProps.fontSize,
            inheritViewBox: inheritViewBox,
            viewBox: viewBox,
            hasSvgAsChild: hasSvgAsChild
        });
        const more = {};
        if (!inheritViewBox) {
            more.viewBox = viewBox;
        }
        const classes = useUtilityClasses$w(ownerState);
        return jsxRuntimeExports.jsxs(SvgIconRoot, _extends$1({
            as: component,
            className: clsx(classes.root, className),
            focusable: "false",
            color: htmlColor,
            "aria-hidden": titleAccess ? undefined : true,
            role: titleAccess ? "img" : undefined,
            ref: ref
        }, more, other, hasSvgAsChild && children.props, {
            ownerState: ownerState,
            children: [ hasSvgAsChild ? children.props.children : children, titleAccess ? jsxRuntimeExports.jsx("title", {
                children: titleAccess
            }) : null ]
        }));
    }));
    SvgIcon.muiName = "SvgIcon";
    function createSvgIcon(path, displayName) {
        function Component(props, ref) {
            return jsxRuntimeExports.jsx(SvgIcon, _extends$1({
                "data-testid": `${displayName}Icon`,
                ref: ref
            }, props, {
                children: path
            }));
        }
        Component.muiName = SvgIcon.muiName;
        return reactExports.memo(reactExports.forwardRef(Component));
    }
    function _setPrototypeOf(t, e) {
        return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e, t;
        }, _setPrototypeOf(t, e);
    }
    function _inheritsLoose(t, o) {
        t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
    }
    var reactDom = {
        exports: {}
    };
    var reactDom_production_min = {};
    var scheduler = {
        exports: {}
    };
    var scheduler_production_min = {};
    /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */    var hasRequiredScheduler_production_min;
    function requireScheduler_production_min() {
        if (hasRequiredScheduler_production_min) return scheduler_production_min;
        hasRequiredScheduler_production_min = 1;
        (function(exports) {
            function f(a, b) {
                var c = a.length;
                a.push(b);
                a: for (;0 < c; ) {
                    var d = c - 1 >>> 1, e = a[d];
                    if (0 < g(e, b)) a[d] = b, a[c] = e, c = d; else break a;
                }
            }
            function h(a) {
                return 0 === a.length ? null : a[0];
            }
            function k(a) {
                if (0 === a.length) return null;
                var b = a[0], c = a.pop();
                if (c !== b) {
                    a[0] = c;
                    a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
                        var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
                        if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, 
                        a[m] = c, d = m); else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n; else break a;
                    }
                }
                return b;
            }
            function g(a, b) {
                var c = a.sortIndex - b.sortIndex;
                return 0 !== c ? c : a.id - b.id;
            }
            if ("object" === typeof performance && "function" === typeof performance.now) {
                var l = performance;
                exports.unstable_now = function() {
                    return l.now();
                };
            } else {
                var p = Date, q = p.now();
                exports.unstable_now = function() {
                    return p.now() - q;
                };
            }
            var r = [], t = [], u = 1, v = null, y = 3, z = false, A = false, B = false, D = "function" === typeof setTimeout ? setTimeout : null, E = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
            "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            function G(a) {
                for (var b = h(t); null !== b; ) {
                    if (null === b.callback) k(t); else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, 
                    f(r, b); else break;
                    b = h(t);
                }
            }
            function H(a) {
                B = false;
                G(a);
                if (!A) if (null !== h(r)) A = true, I(J); else {
                    var b = h(t);
                    null !== b && K(H, b.startTime - a);
                }
            }
            function J(a, b) {
                A = false;
                B && (B = false, E(L), L = -1);
                z = true;
                var c = y;
                try {
                    G(b);
                    for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
                        var d = v.callback;
                        if ("function" === typeof d) {
                            v.callback = null;
                            y = v.priorityLevel;
                            var e = d(v.expirationTime <= b);
                            b = exports.unstable_now();
                            "function" === typeof e ? v.callback = e : v === h(r) && k(r);
                            G(b);
                        } else k(r);
                        v = h(r);
                    }
                    if (null !== v) var w = !0; else {
                        var m = h(t);
                        null !== m && K(H, m.startTime - b);
                        w = !1;
                    }
                    return w;
                } finally {
                    v = null, y = c, z = false;
                }
            }
            var N = false, O = null, L = -1, P = 5, Q = -1;
            function M() {
                return exports.unstable_now() - Q < P ? false : true;
            }
            function R() {
                if (null !== O) {
                    var a = exports.unstable_now();
                    Q = a;
                    var b = true;
                    try {
                        b = O(!0, a);
                    } finally {
                        b ? S() : (N = false, O = null);
                    }
                } else N = false;
            }
            var S;
            if ("function" === typeof F) S = function() {
                F(R);
            }; else if ("undefined" !== typeof MessageChannel) {
                var T = new MessageChannel, U = T.port2;
                T.port1.onmessage = R;
                S = function() {
                    U.postMessage(null);
                };
            } else S = function() {
                D(R, 0);
            };
            function I(a) {
                O = a;
                N || (N = true, S());
            }
            function K(a, b) {
                L = D((function() {
                    a(exports.unstable_now());
                }), b);
            }
            exports.unstable_IdlePriority = 5;
            exports.unstable_ImmediatePriority = 1;
            exports.unstable_LowPriority = 4;
            exports.unstable_NormalPriority = 3;
            exports.unstable_Profiling = null;
            exports.unstable_UserBlockingPriority = 2;
            exports.unstable_cancelCallback = function(a) {
                a.callback = null;
            };
            exports.unstable_continueExecution = function() {
                A || z || (A = true, I(J));
            };
            exports.unstable_forceFrameRate = function(a) {
                0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
            };
            exports.unstable_getCurrentPriorityLevel = function() {
                return y;
            };
            exports.unstable_getFirstCallbackNode = function() {
                return h(r);
            };
            exports.unstable_next = function(a) {
                switch (y) {
                  case 1:
                  case 2:
                  case 3:
                    var b = 3;
                    break;

                  default:
                    b = y;
                }
                var c = y;
                y = b;
                try {
                    return a();
                } finally {
                    y = c;
                }
            };
            exports.unstable_pauseExecution = function() {};
            exports.unstable_requestPaint = function() {};
            exports.unstable_runWithPriority = function(a, b) {
                switch (a) {
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                    break;

                  default:
                    a = 3;
                }
                var c = y;
                y = a;
                try {
                    return b();
                } finally {
                    y = c;
                }
            };
            exports.unstable_scheduleCallback = function(a, b, c) {
                var d = exports.unstable_now();
                "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
                switch (a) {
                  case 1:
                    var e = -1;
                    break;

                  case 2:
                    e = 250;
                    break;

                  case 5:
                    e = 1073741823;
                    break;

                  case 4:
                    e = 1e4;
                    break;

                  default:
                    e = 5e3;
                }
                e = c + e;
                a = {
                    id: u++,
                    callback: b,
                    priorityLevel: a,
                    startTime: c,
                    expirationTime: e,
                    sortIndex: -1
                };
                c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, 
                K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
                return a;
            };
            exports.unstable_shouldYield = M;
            exports.unstable_wrapCallback = function(a) {
                var b = y;
                return function() {
                    var c = y;
                    y = b;
                    try {
                        return a.apply(this, arguments);
                    } finally {
                        y = c;
                    }
                };
            };
        })(scheduler_production_min);
        return scheduler_production_min;
    }
    var hasRequiredScheduler;
    function requireScheduler() {
        if (hasRequiredScheduler) return scheduler.exports;
        hasRequiredScheduler = 1;
        {
            scheduler.exports = requireScheduler_production_min();
        }
        return scheduler.exports;
    }
    /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */    var hasRequiredReactDom_production_min;
    function requireReactDom_production_min() {
        if (hasRequiredReactDom_production_min) return reactDom_production_min;
        hasRequiredReactDom_production_min = 1;
        var aa = reactExports, ca = requireScheduler();
        function p(a) {
            for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
            return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        var da = new Set, ea = {};
        function fa(a, b) {
            ha(a, b);
            ha(a + "Capture", b);
        }
        function ha(a, b) {
            ea[a] = b;
            for (a = 0; a < b.length; a++) da.add(b[a]);
        }
        var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
        function oa(a) {
            if (ja.call(ma, a)) return true;
            if (ja.call(la, a)) return false;
            if (ka.test(a)) return ma[a] = true;
            la[a] = true;
            return false;
        }
        function pa(a, b, c, d) {
            if (null !== c && 0 === c.type) return false;
            switch (typeof b) {
              case "function":
              case "symbol":
                return true;

              case "boolean":
                if (d) return false;
                if (null !== c) return !c.acceptsBooleans;
                a = a.toLowerCase().slice(0, 5);
                return "data-" !== a && "aria-" !== a;

              default:
                return false;
            }
        }
        function qa(a, b, c, d) {
            if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
            if (d) return false;
            if (null !== c) switch (c.type) {
              case 3:
                return !b;

              case 4:
                return false === b;

              case 5:
                return isNaN(b);

              case 6:
                return isNaN(b) || 1 > b;
            }
            return false;
        }
        function v(a, b, c, d, e, f, g) {
            this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
            this.attributeName = d;
            this.attributeNamespace = e;
            this.mustUseProperty = c;
            this.propertyName = a;
            this.type = b;
            this.sanitizeURL = f;
            this.removeEmptyString = g;
        }
        var z = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(a) {
            z[a] = new v(a, 0, false, a, null, false, false);
        }));
        [ [ "acceptCharset", "accept-charset" ], [ "className", "class" ], [ "htmlFor", "for" ], [ "httpEquiv", "http-equiv" ] ].forEach((function(a) {
            var b = a[0];
            z[b] = new v(b, 1, false, a[1], null, false, false);
        }));
        [ "contentEditable", "draggable", "spellCheck", "value" ].forEach((function(a) {
            z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
        }));
        [ "autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha" ].forEach((function(a) {
            z[a] = new v(a, 2, false, a, null, false, false);
        }));
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(a) {
            z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
        }));
        [ "checked", "multiple", "muted", "selected" ].forEach((function(a) {
            z[a] = new v(a, 3, true, a, null, false, false);
        }));
        [ "capture", "download" ].forEach((function(a) {
            z[a] = new v(a, 4, false, a, null, false, false);
        }));
        [ "cols", "rows", "size", "span" ].forEach((function(a) {
            z[a] = new v(a, 6, false, a, null, false, false);
        }));
        [ "rowSpan", "start" ].forEach((function(a) {
            z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
        }));
        var ra = /[\-:]([a-z])/g;
        function sa(a) {
            return a[1].toUpperCase();
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(a) {
            var b = a.replace(ra, sa);
            z[b] = new v(b, 1, false, a, null, false, false);
        }));
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(a) {
            var b = a.replace(ra, sa);
            z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
        }));
        [ "xml:base", "xml:lang", "xml:space" ].forEach((function(a) {
            var b = a.replace(ra, sa);
            z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
        }));
        [ "tabIndex", "crossOrigin" ].forEach((function(a) {
            z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
        }));
        z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
        [ "src", "href", "action", "formAction" ].forEach((function(a) {
            z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
        }));
        function ta(a, b, c, d) {
            var e = z.hasOwnProperty(b) ? z[b] : null;
            if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), 
            d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, 
            d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, 
            d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
        }
        var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
        var Ia = Symbol.for("react.offscreen");
        var Ja = Symbol.iterator;
        function Ka(a) {
            if (null === a || "object" !== typeof a) return null;
            a = Ja && a[Ja] || a["@@iterator"];
            return "function" === typeof a ? a : null;
        }
        var A = Object.assign, La;
        function Ma(a) {
            if (void 0 === La) try {
                throw Error();
            } catch (c) {
                var b = c.stack.trim().match(/\n( *(at )?)/);
                La = b && b[1] || "";
            }
            return "\n" + La + a;
        }
        var Na = false;
        function Oa(a, b) {
            if (!a || Na) return "";
            Na = true;
            var c = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                if (b) if (b = function() {
                    throw Error();
                }, Object.defineProperty(b.prototype, "props", {
                    set: function() {
                        throw Error();
                    }
                }), "object" === typeof Reflect && Reflect.construct) {
                    try {
                        Reflect.construct(b, []);
                    } catch (l) {
                        var d = l;
                    }
                    Reflect.construct(a, [], b);
                } else {
                    try {
                        b.call();
                    } catch (l) {
                        d = l;
                    }
                    a.call(b.prototype);
                } else {
                    try {
                        throw Error();
                    } catch (l) {
                        d = l;
                    }
                    a();
                }
            } catch (l) {
                if (l && d && "string" === typeof l.stack) {
                    for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
                    for (;1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
                        if (1 !== g || 1 !== h) {
                            do {
                                if (g--, h--, 0 > h || e[g] !== f[h]) {
                                    var k = "\n" + e[g].replace(" at new ", " at ");
                                    a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                                    return k;
                                }
                            } while (1 <= g && 0 <= h);
                        }
                        break;
                    }
                }
            } finally {
                Na = false, Error.prepareStackTrace = c;
            }
            return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
        }
        function Pa(a) {
            switch (a.tag) {
              case 5:
                return Ma(a.type);

              case 16:
                return Ma("Lazy");

              case 13:
                return Ma("Suspense");

              case 19:
                return Ma("SuspenseList");

              case 0:
              case 2:
              case 15:
                return a = Oa(a.type, false), a;

              case 11:
                return a = Oa(a.type.render, false), a;

              case 1:
                return a = Oa(a.type, true), a;

              default:
                return "";
            }
        }
        function Qa(a) {
            if (null == a) return null;
            if ("function" === typeof a) return a.displayName || a.name || null;
            if ("string" === typeof a) return a;
            switch (a) {
              case ya:
                return "Fragment";

              case wa:
                return "Portal";

              case Aa:
                return "Profiler";

              case za:
                return "StrictMode";

              case Ea:
                return "Suspense";

              case Fa:
                return "SuspenseList";
            }
            if ("object" === typeof a) switch (a.$$typeof) {
              case Ca:
                return (a.displayName || "Context") + ".Consumer";

              case Ba:
                return (a._context.displayName || "Context") + ".Provider";

              case Da:
                var b = a.render;
                a = a.displayName;
                a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
                return a;

              case Ga:
                return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";

              case Ha:
                b = a._payload;
                a = a._init;
                try {
                    return Qa(a(b));
                } catch (c) {}
            }
            return null;
        }
        function Ra(a) {
            var b = a.type;
            switch (a.tag) {
              case 24:
                return "Cache";

              case 9:
                return (b.displayName || "Context") + ".Consumer";

              case 10:
                return (b._context.displayName || "Context") + ".Provider";

              case 18:
                return "DehydratedFragment";

              case 11:
                return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");

              case 7:
                return "Fragment";

              case 5:
                return b;

              case 4:
                return "Portal";

              case 3:
                return "Root";

              case 6:
                return "Text";

              case 16:
                return Qa(b);

              case 8:
                return b === za ? "StrictMode" : "Mode";

              case 22:
                return "Offscreen";

              case 12:
                return "Profiler";

              case 21:
                return "Scope";

              case 13:
                return "Suspense";

              case 19:
                return "SuspenseList";

              case 25:
                return "TracingMarker";

              case 1:
              case 0:
              case 17:
              case 2:
              case 14:
              case 15:
                if ("function" === typeof b) return b.displayName || b.name || null;
                if ("string" === typeof b) return b;
            }
            return null;
        }
        function Sa(a) {
            switch (typeof a) {
              case "boolean":
              case "number":
              case "string":
              case "undefined":
                return a;

              case "object":
                return a;

              default:
                return "";
            }
        }
        function Ta(a) {
            var b = a.type;
            return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
        }
        function Ua(a) {
            var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
            if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
                var e = c.get, f = c.set;
                Object.defineProperty(a, b, {
                    configurable: true,
                    get: function() {
                        return e.call(this);
                    },
                    set: function(a) {
                        d = "" + a;
                        f.call(this, a);
                    }
                });
                Object.defineProperty(a, b, {
                    enumerable: c.enumerable
                });
                return {
                    getValue: function() {
                        return d;
                    },
                    setValue: function(a) {
                        d = "" + a;
                    },
                    stopTracking: function() {
                        a._valueTracker = null;
                        delete a[b];
                    }
                };
            }
        }
        function Va(a) {
            a._valueTracker || (a._valueTracker = Ua(a));
        }
        function Wa(a) {
            if (!a) return false;
            var b = a._valueTracker;
            if (!b) return true;
            var c = b.getValue();
            var d = "";
            a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
            a = d;
            return a !== c ? (b.setValue(a), true) : false;
        }
        function Xa(a) {
            a = a || ("undefined" !== typeof document ? document : void 0);
            if ("undefined" === typeof a) return null;
            try {
                return a.activeElement || a.body;
            } catch (b) {
                return a.body;
            }
        }
        function Ya(a, b) {
            var c = b.checked;
            return A({}, b, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: void 0,
                checked: null != c ? c : a._wrapperState.initialChecked
            });
        }
        function Za(a, b) {
            var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
            c = Sa(null != b.value ? b.value : c);
            a._wrapperState = {
                initialChecked: d,
                initialValue: c,
                controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
            };
        }
        function ab(a, b) {
            b = b.checked;
            null != b && ta(a, "checked", b, false);
        }
        function bb(a, b) {
            ab(a, b);
            var c = Sa(b.value), d = b.type;
            if (null != c) if ("number" === d) {
                if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
            } else a.value !== "" + c && (a.value = "" + c); else if ("submit" === d || "reset" === d) {
                a.removeAttribute("value");
                return;
            }
            b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
            null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
        }
        function db(a, b, c) {
            if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
                var d = b.type;
                if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
                b = "" + a._wrapperState.initialValue;
                c || b === a.value || (a.value = b);
                a.defaultValue = b;
            }
            c = a.name;
            "" !== c && (a.name = "");
            a.defaultChecked = !!a._wrapperState.initialChecked;
            "" !== c && (a.name = c);
        }
        function cb(a, b, c) {
            if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
        }
        var eb = Array.isArray;
        function fb(a, b, c, d) {
            a = a.options;
            if (b) {
                b = {};
                for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
                for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), 
                e && d && (a[c].defaultSelected = true);
            } else {
                c = "" + Sa(c);
                b = null;
                for (e = 0; e < a.length; e++) {
                    if (a[e].value === c) {
                        a[e].selected = true;
                        d && (a[e].defaultSelected = true);
                        return;
                    }
                    null !== b || a[e].disabled || (b = a[e]);
                }
                null !== b && (b.selected = true);
            }
        }
        function gb(a, b) {
            if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
            return A({}, b, {
                value: void 0,
                defaultValue: void 0,
                children: "" + a._wrapperState.initialValue
            });
        }
        function hb(a, b) {
            var c = b.value;
            if (null == c) {
                c = b.children;
                b = b.defaultValue;
                if (null != c) {
                    if (null != b) throw Error(p(92));
                    if (eb(c)) {
                        if (1 < c.length) throw Error(p(93));
                        c = c[0];
                    }
                    b = c;
                }
                null == b && (b = "");
                c = b;
            }
            a._wrapperState = {
                initialValue: Sa(c)
            };
        }
        function ib(a, b) {
            var c = Sa(b.value), d = Sa(b.defaultValue);
            null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
            null != d && (a.defaultValue = "" + d);
        }
        function jb(a) {
            var b = a.textContent;
            b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
        }
        function kb(a) {
            switch (a) {
              case "svg":
                return "http://www.w3.org/2000/svg";

              case "math":
                return "http://www.w3.org/1998/Math/MathML";

              default:
                return "http://www.w3.org/1999/xhtml";
            }
        }
        function lb(a, b) {
            return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
        }
        var mb, nb = function(a) {
            return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
                MSApp.execUnsafeLocalFunction((function() {
                    return a(b, c, d, e);
                }));
            } : a;
        }((function(a, b) {
            if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b; else {
                mb = mb || document.createElement("div");
                mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
                for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
                for (;b.firstChild; ) a.appendChild(b.firstChild);
            }
        }));
        function ob(a, b) {
            if (b) {
                var c = a.firstChild;
                if (c && c === a.lastChild && 3 === c.nodeType) {
                    c.nodeValue = b;
                    return;
                }
            }
            a.textContent = b;
        }
        var pb = {
            animationIterationCount: true,
            aspectRatio: true,
            borderImageOutset: true,
            borderImageSlice: true,
            borderImageWidth: true,
            boxFlex: true,
            boxFlexGroup: true,
            boxOrdinalGroup: true,
            columnCount: true,
            columns: true,
            flex: true,
            flexGrow: true,
            flexPositive: true,
            flexShrink: true,
            flexNegative: true,
            flexOrder: true,
            gridArea: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowSpan: true,
            gridRowStart: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnSpan: true,
            gridColumnStart: true,
            fontWeight: true,
            lineClamp: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            tabSize: true,
            widows: true,
            zIndex: true,
            zoom: true,
            fillOpacity: true,
            floodOpacity: true,
            stopOpacity: true,
            strokeDasharray: true,
            strokeDashoffset: true,
            strokeMiterlimit: true,
            strokeOpacity: true,
            strokeWidth: true
        }, qb = [ "Webkit", "ms", "Moz", "O" ];
        Object.keys(pb).forEach((function(a) {
            qb.forEach((function(b) {
                b = b + a.charAt(0).toUpperCase() + a.substring(1);
                pb[b] = pb[a];
            }));
        }));
        function rb(a, b, c) {
            return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
        }
        function sb(a, b) {
            a = a.style;
            for (var c in b) if (b.hasOwnProperty(c)) {
                var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
                "float" === c && (c = "cssFloat");
                d ? a.setProperty(c, e) : a[c] = e;
            }
        }
        var tb = A({
            menuitem: true
        }, {
            area: true,
            base: true,
            br: true,
            col: true,
            embed: true,
            hr: true,
            img: true,
            input: true,
            keygen: true,
            link: true,
            meta: true,
            param: true,
            source: true,
            track: true,
            wbr: true
        });
        function ub(a, b) {
            if (b) {
                if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
                if (null != b.dangerouslySetInnerHTML) {
                    if (null != b.children) throw Error(p(60));
                    if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
                }
                if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
            }
        }
        function vb(a, b) {
            if (-1 === a.indexOf("-")) return "string" === typeof b.is;
            switch (a) {
              case "annotation-xml":
              case "color-profile":
              case "font-face":
              case "font-face-src":
              case "font-face-uri":
              case "font-face-format":
              case "font-face-name":
              case "missing-glyph":
                return false;

              default:
                return true;
            }
        }
        var wb = null;
        function xb(a) {
            a = a.target || a.srcElement || window;
            a.correspondingUseElement && (a = a.correspondingUseElement);
            return 3 === a.nodeType ? a.parentNode : a;
        }
        var yb = null, zb = null, Ab = null;
        function Bb(a) {
            if (a = Cb(a)) {
                if ("function" !== typeof yb) throw Error(p(280));
                var b = a.stateNode;
                b && (b = Db(b), yb(a.stateNode, a.type, b));
            }
        }
        function Eb(a) {
            zb ? Ab ? Ab.push(a) : Ab = [ a ] : zb = a;
        }
        function Fb() {
            if (zb) {
                var a = zb, b = Ab;
                Ab = zb = null;
                Bb(a);
                if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
            }
        }
        function Gb(a, b) {
            return a(b);
        }
        function Hb() {}
        var Ib = false;
        function Jb(a, b, c) {
            if (Ib) return a(b, c);
            Ib = true;
            try {
                return Gb(a, b, c);
            } finally {
                if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
            }
        }
        function Kb(a, b) {
            var c = a.stateNode;
            if (null === c) return null;
            var d = Db(c);
            if (null === d) return null;
            c = d[b];
            a: switch (b) {
              case "onClick":
              case "onClickCapture":
              case "onDoubleClick":
              case "onDoubleClickCapture":
              case "onMouseDown":
              case "onMouseDownCapture":
              case "onMouseMove":
              case "onMouseMoveCapture":
              case "onMouseUp":
              case "onMouseUpCapture":
              case "onMouseEnter":
                (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
                a = !d;
                break a;

              default:
                a = false;
            }
            if (a) return null;
            if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
            return c;
        }
        var Lb = false;
        if (ia) try {
            var Mb = {};
            Object.defineProperty(Mb, "passive", {
                get: function() {
                    Lb = !0;
                }
            });
            window.addEventListener("test", Mb, Mb);
            window.removeEventListener("test", Mb, Mb);
        } catch (a) {
            Lb = false;
        }
        function Nb(a, b, c, d, e, f, g, h, k) {
            var l = Array.prototype.slice.call(arguments, 3);
            try {
                b.apply(c, l);
            } catch (m) {
                this.onError(m);
            }
        }
        var Ob = false, Pb = null, Qb = false, Rb = null, Sb = {
            onError: function(a) {
                Ob = true;
                Pb = a;
            }
        };
        function Tb(a, b, c, d, e, f, g, h, k) {
            Ob = false;
            Pb = null;
            Nb.apply(Sb, arguments);
        }
        function Ub(a, b, c, d, e, f, g, h, k) {
            Tb.apply(this, arguments);
            if (Ob) {
                if (Ob) {
                    var l = Pb;
                    Ob = false;
                    Pb = null;
                } else throw Error(p(198));
                Qb || (Qb = true, Rb = l);
            }
        }
        function Vb(a) {
            var b = a, c = a;
            if (a.alternate) for (;b.return; ) b = b.return; else {
                a = b;
                do {
                    b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
                } while (a);
            }
            return 3 === b.tag ? c : null;
        }
        function Wb(a) {
            if (13 === a.tag) {
                var b = a.memoizedState;
                null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
                if (null !== b) return b.dehydrated;
            }
            return null;
        }
        function Xb(a) {
            if (Vb(a) !== a) throw Error(p(188));
        }
        function Yb(a) {
            var b = a.alternate;
            if (!b) {
                b = Vb(a);
                if (null === b) throw Error(p(188));
                return b !== a ? null : a;
            }
            for (var c = a, d = b; ;) {
                var e = c.return;
                if (null === e) break;
                var f = e.alternate;
                if (null === f) {
                    d = e.return;
                    if (null !== d) {
                        c = d;
                        continue;
                    }
                    break;
                }
                if (e.child === f.child) {
                    for (f = e.child; f; ) {
                        if (f === c) return Xb(e), a;
                        if (f === d) return Xb(e), b;
                        f = f.sibling;
                    }
                    throw Error(p(188));
                }
                if (c.return !== d.return) c = e, d = f; else {
                    for (var g = false, h = e.child; h; ) {
                        if (h === c) {
                            g = true;
                            c = e;
                            d = f;
                            break;
                        }
                        if (h === d) {
                            g = true;
                            d = e;
                            c = f;
                            break;
                        }
                        h = h.sibling;
                    }
                    if (!g) {
                        for (h = f.child; h; ) {
                            if (h === c) {
                                g = true;
                                c = f;
                                d = e;
                                break;
                            }
                            if (h === d) {
                                g = true;
                                d = f;
                                c = e;
                                break;
                            }
                            h = h.sibling;
                        }
                        if (!g) throw Error(p(189));
                    }
                }
                if (c.alternate !== d) throw Error(p(190));
            }
            if (3 !== c.tag) throw Error(p(188));
            return c.stateNode.current === c ? a : b;
        }
        function Zb(a) {
            a = Yb(a);
            return null !== a ? $b(a) : null;
        }
        function $b(a) {
            if (5 === a.tag || 6 === a.tag) return a;
            for (a = a.child; null !== a; ) {
                var b = $b(a);
                if (null !== b) return b;
                a = a.sibling;
            }
            return null;
        }
        var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
        function mc(a) {
            if (lc && "function" === typeof lc.onCommitFiberRoot) try {
                lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
            } catch (b) {}
        }
        var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
        function nc(a) {
            a >>>= 0;
            return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
        }
        var rc = 64, sc = 4194304;
        function tc(a) {
            switch (a & -a) {
              case 1:
                return 1;

              case 2:
                return 2;

              case 4:
                return 4;

              case 8:
                return 8;

              case 16:
                return 16;

              case 32:
                return 32;

              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
                return a & 4194240;

              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                return a & 130023424;

              case 134217728:
                return 134217728;

              case 268435456:
                return 268435456;

              case 536870912:
                return 536870912;

              case 1073741824:
                return 1073741824;

              default:
                return a;
            }
        }
        function uc(a, b) {
            var c = a.pendingLanes;
            if (0 === c) return 0;
            var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
            if (0 !== g) {
                var h = g & ~e;
                0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
            } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
            if (0 === d) return 0;
            if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
            0 !== (d & 4) && (d |= c & 16);
            b = a.entangledLanes;
            if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, 
            d |= a[c], b &= ~e;
            return d;
        }
        function vc(a, b) {
            switch (a) {
              case 1:
              case 2:
              case 4:
                return b + 250;

              case 8:
              case 16:
              case 32:
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
                return b + 5e3;

              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                return -1;

              case 134217728:
              case 268435456:
              case 536870912:
              case 1073741824:
                return -1;

              default:
                return -1;
            }
        }
        function wc(a, b) {
            for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
                var g = 31 - oc(f), h = 1 << g, k = e[g];
                if (-1 === k) {
                    if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
                } else k <= b && (a.expiredLanes |= h);
                f &= ~h;
            }
        }
        function xc(a) {
            a = a.pendingLanes & -1073741825;
            return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
        }
        function yc() {
            var a = rc;
            rc <<= 1;
            0 === (rc & 4194240) && (rc = 64);
            return a;
        }
        function zc(a) {
            for (var b = [], c = 0; 31 > c; c++) b.push(a);
            return b;
        }
        function Ac(a, b, c) {
            a.pendingLanes |= b;
            536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
            a = a.eventTimes;
            b = 31 - oc(b);
            a[b] = c;
        }
        function Bc(a, b) {
            var c = a.pendingLanes & ~b;
            a.pendingLanes = b;
            a.suspendedLanes = 0;
            a.pingedLanes = 0;
            a.expiredLanes &= b;
            a.mutableReadLanes &= b;
            a.entangledLanes &= b;
            b = a.entanglements;
            var d = a.eventTimes;
            for (a = a.expirationTimes; 0 < c; ) {
                var e = 31 - oc(c), f = 1 << e;
                b[e] = 0;
                d[e] = -1;
                a[e] = -1;
                c &= ~f;
            }
        }
        function Cc(a, b) {
            var c = a.entangledLanes |= b;
            for (a = a.entanglements; c; ) {
                var d = 31 - oc(c), e = 1 << d;
                e & b | a[d] & b && (a[d] |= b);
                c &= ~e;
            }
        }
        var C = 0;
        function Dc(a) {
            a &= -a;
            return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
        }
        var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = new Map, Pc = new Map, Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
        function Sc(a, b) {
            switch (a) {
              case "focusin":
              case "focusout":
                Lc = null;
                break;

              case "dragenter":
              case "dragleave":
                Mc = null;
                break;

              case "mouseover":
              case "mouseout":
                Nc = null;
                break;

              case "pointerover":
              case "pointerout":
                Oc.delete(b.pointerId);
                break;

              case "gotpointercapture":
              case "lostpointercapture":
                Pc.delete(b.pointerId);
            }
        }
        function Tc(a, b, c, d, e, f) {
            if (null === a || a.nativeEvent !== f) return a = {
                blockedOn: b,
                domEventName: c,
                eventSystemFlags: d,
                nativeEvent: f,
                targetContainers: [ e ]
            }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
            a.eventSystemFlags |= d;
            b = a.targetContainers;
            null !== e && -1 === b.indexOf(e) && b.push(e);
            return a;
        }
        function Uc(a, b, c, d, e) {
            switch (b) {
              case "focusin":
                return Lc = Tc(Lc, a, b, c, d, e), true;

              case "dragenter":
                return Mc = Tc(Mc, a, b, c, d, e), true;

              case "mouseover":
                return Nc = Tc(Nc, a, b, c, d, e), true;

              case "pointerover":
                var f = e.pointerId;
                Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
                return true;

              case "gotpointercapture":
                return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
            }
            return false;
        }
        function Vc(a) {
            var b = Wc(a.target);
            if (null !== b) {
                var c = Vb(b);
                if (null !== c) if (b = c.tag, 13 === b) {
                    if (b = Wb(c), null !== b) {
                        a.blockedOn = b;
                        Ic(a.priority, (function() {
                            Gc(c);
                        }));
                        return;
                    }
                } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
                    a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
                    return;
                }
            }
            a.blockedOn = null;
        }
        function Xc(a) {
            if (null !== a.blockedOn) return false;
            for (var b = a.targetContainers; 0 < b.length; ) {
                var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
                if (null === c) {
                    c = a.nativeEvent;
                    var d = new c.constructor(c.type, c);
                    wb = d;
                    c.target.dispatchEvent(d);
                    wb = null;
                } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
                b.shift();
            }
            return true;
        }
        function Zc(a, b, c) {
            Xc(a) && c.delete(b);
        }
        function $c() {
            Jc = false;
            null !== Lc && Xc(Lc) && (Lc = null);
            null !== Mc && Xc(Mc) && (Mc = null);
            null !== Nc && Xc(Nc) && (Nc = null);
            Oc.forEach(Zc);
            Pc.forEach(Zc);
        }
        function ad(a, b) {
            a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
        }
        function bd(a) {
            function b(b) {
                return ad(b, a);
            }
            if (0 < Kc.length) {
                ad(Kc[0], a);
                for (var c = 1; c < Kc.length; c++) {
                    var d = Kc[c];
                    d.blockedOn === a && (d.blockedOn = null);
                }
            }
            null !== Lc && ad(Lc, a);
            null !== Mc && ad(Mc, a);
            null !== Nc && ad(Nc, a);
            Oc.forEach(b);
            Pc.forEach(b);
            for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
            for (;0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
        }
        var cd = ua.ReactCurrentBatchConfig, dd = true;
        function ed(a, b, c, d) {
            var e = C, f = cd.transition;
            cd.transition = null;
            try {
                C = 1, fd(a, b, c, d);
            } finally {
                C = e, cd.transition = f;
            }
        }
        function gd(a, b, c, d) {
            var e = C, f = cd.transition;
            cd.transition = null;
            try {
                C = 4, fd(a, b, c, d);
            } finally {
                C = e, cd.transition = f;
            }
        }
        function fd(a, b, c, d) {
            if (dd) {
                var e = Yc(a, b, c, d);
                if (null === e) hd(a, b, d, id, c), Sc(a, d); else if (Uc(e, a, b, c, d)) d.stopPropagation(); else if (Sc(a, d), 
                b & 4 && -1 < Rc.indexOf(a)) {
                    for (;null !== e; ) {
                        var f = Cb(e);
                        null !== f && Ec(f);
                        f = Yc(a, b, c, d);
                        null === f && hd(a, b, d, id, c);
                        if (f === e) break;
                        e = f;
                    }
                    null !== e && d.stopPropagation();
                } else hd(a, b, d, null, c);
            }
        }
        var id = null;
        function Yc(a, b, c, d) {
            id = null;
            a = xb(d);
            a = Wc(a);
            if (null !== a) if (b = Vb(a), null === b) a = null; else if (c = b.tag, 13 === c) {
                a = Wb(b);
                if (null !== a) return a;
                a = null;
            } else if (3 === c) {
                if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
                a = null;
            } else b !== a && (a = null);
            id = a;
            return null;
        }
        function jd(a) {
            switch (a) {
              case "cancel":
              case "click":
              case "close":
              case "contextmenu":
              case "copy":
              case "cut":
              case "auxclick":
              case "dblclick":
              case "dragend":
              case "dragstart":
              case "drop":
              case "focusin":
              case "focusout":
              case "input":
              case "invalid":
              case "keydown":
              case "keypress":
              case "keyup":
              case "mousedown":
              case "mouseup":
              case "paste":
              case "pause":
              case "play":
              case "pointercancel":
              case "pointerdown":
              case "pointerup":
              case "ratechange":
              case "reset":
              case "resize":
              case "seeked":
              case "submit":
              case "touchcancel":
              case "touchend":
              case "touchstart":
              case "volumechange":
              case "change":
              case "selectionchange":
              case "textInput":
              case "compositionstart":
              case "compositionend":
              case "compositionupdate":
              case "beforeblur":
              case "afterblur":
              case "beforeinput":
              case "blur":
              case "fullscreenchange":
              case "focus":
              case "hashchange":
              case "popstate":
              case "select":
              case "selectstart":
                return 1;

              case "drag":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "mousemove":
              case "mouseout":
              case "mouseover":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "scroll":
              case "toggle":
              case "touchmove":
              case "wheel":
              case "mouseenter":
              case "mouseleave":
              case "pointerenter":
              case "pointerleave":
                return 4;

              case "message":
                switch (ec()) {
                  case fc:
                    return 1;

                  case gc:
                    return 4;

                  case hc:
                  case ic:
                    return 16;

                  case jc:
                    return 536870912;

                  default:
                    return 16;
                }

              default:
                return 16;
            }
        }
        var kd = null, ld = null, md = null;
        function nd() {
            if (md) return md;
            var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
            for (a = 0; a < c && b[a] === e[a]; a++) ;
            var g = c - a;
            for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
            return md = e.slice(a, 1 < d ? 1 - d : void 0);
        }
        function od(a) {
            var b = a.keyCode;
            "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
            10 === a && (a = 13);
            return 32 <= a || 13 === a ? a : 0;
        }
        function pd() {
            return true;
        }
        function qd() {
            return false;
        }
        function rd(a) {
            function b(b, d, e, f, g) {
                this._reactName = b;
                this._targetInst = e;
                this.type = d;
                this.nativeEvent = f;
                this.target = g;
                this.currentTarget = null;
                for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
                this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
                this.isPropagationStopped = qd;
                return this;
            }
            A(b.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = true;
                    var a = this.nativeEvent;
                    a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = false), 
                    this.isDefaultPrevented = pd);
                },
                stopPropagation: function() {
                    var a = this.nativeEvent;
                    a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = true), 
                    this.isPropagationStopped = pd);
                },
                persist: function() {},
                isPersistent: pd
            });
            return b;
        }
        var sd = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(a) {
                return a.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
        }, td = rd(sd), ud = A({}, sd, {
            view: 0,
            detail: 0
        }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: zd,
            button: 0,
            buttons: 0,
            relatedTarget: function(a) {
                return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
            },
            movementX: function(a) {
                if ("movementX" in a) return a.movementX;
                a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, 
                yd = a);
                return wd;
            },
            movementY: function(a) {
                return "movementY" in a ? a.movementY : xd;
            }
        }), Bd = rd(Ad), Cd = A({}, Ad, {
            dataTransfer: 0
        }), Dd = rd(Cd), Ed = A({}, ud, {
            relatedTarget: 0
        }), Fd = rd(Ed), Gd = A({}, sd, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), Hd = rd(Gd), Id = A({}, sd, {
            clipboardData: function(a) {
                return "clipboardData" in a ? a.clipboardData : window.clipboardData;
            }
        }), Jd = rd(Id), Kd = A({}, sd, {
            data: 0
        }), Ld = rd(Kd), Md = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        }, Nd = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        }, Od = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function Pd(a) {
            var b = this.nativeEvent;
            return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
        }
        function zd() {
            return Pd;
        }
        var Qd = A({}, ud, {
            key: function(a) {
                if (a.key) {
                    var b = Md[a.key] || a.key;
                    if ("Unidentified" !== b) return b;
                }
                return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: zd,
            charCode: function(a) {
                return "keypress" === a.type ? od(a) : 0;
            },
            keyCode: function(a) {
                return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
            },
            which: function(a) {
                return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
            }
        }), Rd = rd(Qd), Sd = A({}, Ad, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }), Td = rd(Sd), Ud = A({}, ud, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: zd
        }), Vd = rd(Ud), Wd = A({}, sd, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), Xd = rd(Wd), Yd = A({}, Ad, {
            deltaX: function(a) {
                return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
            },
            deltaY: function(a) {
                return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), Zd = rd(Yd), $d = [ 9, 13, 27, 32 ], ae = ia && "CompositionEvent" in window, be = null;
        ia && "documentMode" in document && (be = document.documentMode);
        var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
        function ge(a, b) {
            switch (a) {
              case "keyup":
                return -1 !== $d.indexOf(b.keyCode);

              case "keydown":
                return 229 !== b.keyCode;

              case "keypress":
              case "mousedown":
              case "focusout":
                return true;

              default:
                return false;
            }
        }
        function he(a) {
            a = a.detail;
            return "object" === typeof a && "data" in a ? a.data : null;
        }
        var ie = false;
        function je(a, b) {
            switch (a) {
              case "compositionend":
                return he(b);

              case "keypress":
                if (32 !== b.which) return null;
                fe = true;
                return ee;

              case "textInput":
                return a = b.data, a === ee && fe ? null : a;

              default:
                return null;
            }
        }
        function ke(a, b) {
            if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, 
            ie = false, a) : null;
            switch (a) {
              case "paste":
                return null;

              case "keypress":
                if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
                    if (b.char && 1 < b.char.length) return b.char;
                    if (b.which) return String.fromCharCode(b.which);
                }
                return null;

              case "compositionend":
                return de && "ko" !== b.locale ? null : b.data;

              default:
                return null;
            }
        }
        var le = {
            color: true,
            date: true,
            datetime: true,
            "datetime-local": true,
            email: true,
            month: true,
            number: true,
            password: true,
            range: true,
            search: true,
            tel: true,
            text: true,
            time: true,
            url: true,
            week: true
        };
        function me(a) {
            var b = a && a.nodeName && a.nodeName.toLowerCase();
            return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
        }
        function ne(a, b, c, d) {
            Eb(d);
            b = oe(b, "onChange");
            0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
                event: c,
                listeners: b
            }));
        }
        var pe = null, qe = null;
        function re(a) {
            se(a, 0);
        }
        function te(a) {
            var b = ue(a);
            if (Wa(b)) return a;
        }
        function ve(a, b) {
            if ("change" === a) return b;
        }
        var we = false;
        if (ia) {
            var xe;
            if (ia) {
                var ye = "oninput" in document;
                if (!ye) {
                    var ze = document.createElement("div");
                    ze.setAttribute("oninput", "return;");
                    ye = "function" === typeof ze.oninput;
                }
                xe = ye;
            } else xe = false;
            we = xe && (!document.documentMode || 9 < document.documentMode);
        }
        function Ae() {
            pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
        }
        function Be(a) {
            if ("value" === a.propertyName && te(qe)) {
                var b = [];
                ne(b, qe, a, xb(a));
                Jb(re, b);
            }
        }
        function Ce(a, b, c) {
            "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
        }
        function De(a) {
            if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
        }
        function Ee(a, b) {
            if ("click" === a) return te(b);
        }
        function Fe(a, b) {
            if ("input" === a || "change" === a) return te(b);
        }
        function Ge(a, b) {
            return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
        }
        var He = "function" === typeof Object.is ? Object.is : Ge;
        function Ie(a, b) {
            if (He(a, b)) return true;
            if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
            var c = Object.keys(a), d = Object.keys(b);
            if (c.length !== d.length) return false;
            for (d = 0; d < c.length; d++) {
                var e = c[d];
                if (!ja.call(b, e) || !He(a[e], b[e])) return false;
            }
            return true;
        }
        function Je(a) {
            for (;a && a.firstChild; ) a = a.firstChild;
            return a;
        }
        function Ke(a, b) {
            var c = Je(a);
            a = 0;
            for (var d; c; ) {
                if (3 === c.nodeType) {
                    d = a + c.textContent.length;
                    if (a <= b && d >= b) return {
                        node: c,
                        offset: b - a
                    };
                    a = d;
                }
                a: {
                    for (;c; ) {
                        if (c.nextSibling) {
                            c = c.nextSibling;
                            break a;
                        }
                        c = c.parentNode;
                    }
                    c = void 0;
                }
                c = Je(c);
            }
        }
        function Le(a, b) {
            return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
        }
        function Me() {
            for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
                try {
                    var c = "string" === typeof b.contentWindow.location.href;
                } catch (d) {
                    c = false;
                }
                if (c) a = b.contentWindow; else break;
                b = Xa(a.document);
            }
            return b;
        }
        function Ne(a) {
            var b = a && a.nodeName && a.nodeName.toLowerCase();
            return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
        }
        function Oe(a) {
            var b = Me(), c = a.focusedElem, d = a.selectionRange;
            if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
                if (null !== d && Ne(c)) if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, 
                c.selectionEnd = Math.min(a, c.value.length); else if (a = (b = c.ownerDocument || document) && b.defaultView || window, 
                a.getSelection) {
                    a = a.getSelection();
                    var e = c.textContent.length, f = Math.min(d.start, e);
                    d = void 0 === d.end ? f : Math.min(d.end, e);
                    !a.extend && f > d && (e = d, d = f, f = e);
                    e = Ke(c, f);
                    var g = Ke(c, d);
                    e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), 
                    b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), 
                    a.addRange(b)));
                }
                b = [];
                for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({
                    element: a,
                    left: a.scrollLeft,
                    top: a.scrollTop
                });
                "function" === typeof c.focus && c.focus();
                for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
            }
        }
        var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
        function Ue(a, b, c) {
            var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
            Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
                start: d.selectionStart,
                end: d.selectionEnd
            } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), 
            d = {
                anchorNode: d.anchorNode,
                anchorOffset: d.anchorOffset,
                focusNode: d.focusNode,
                focusOffset: d.focusOffset
            }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), 
            a.push({
                event: b,
                listeners: d
            }), b.target = Qe)));
        }
        function Ve(a, b) {
            var c = {};
            c[a.toLowerCase()] = b.toLowerCase();
            c["Webkit" + a] = "webkit" + b;
            c["Moz" + a] = "moz" + b;
            return c;
        }
        var We = {
            animationend: Ve("Animation", "AnimationEnd"),
            animationiteration: Ve("Animation", "AnimationIteration"),
            animationstart: Ve("Animation", "AnimationStart"),
            transitionend: Ve("Transition", "TransitionEnd")
        }, Xe = {}, Ye = {};
        ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, 
        delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
        function Ze(a) {
            if (Xe[a]) return Xe[a];
            if (!We[a]) return a;
            var b = We[a], c;
            for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
            return a;
        }
        var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = new Map, ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        function ff(a, b) {
            df.set(a, b);
            fa(b, [ a ]);
        }
        for (var gf = 0; gf < ef.length; gf++) {
            var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
            ff(jf, "on" + kf);
        }
        ff($e, "onAnimationEnd");
        ff(af, "onAnimationIteration");
        ff(bf, "onAnimationStart");
        ff("dblclick", "onDoubleClick");
        ff("focusin", "onFocus");
        ff("focusout", "onBlur");
        ff(cf, "onTransitionEnd");
        ha("onMouseEnter", [ "mouseout", "mouseover" ]);
        ha("onMouseLeave", [ "mouseout", "mouseover" ]);
        ha("onPointerEnter", [ "pointerout", "pointerover" ]);
        ha("onPointerLeave", [ "pointerout", "pointerover" ]);
        fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
        fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
        fa("onBeforeInput", [ "compositionend", "keypress", "textInput", "paste" ]);
        fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
        fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
        fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
        function nf(a, b, c) {
            var d = a.type || "unknown-event";
            a.currentTarget = c;
            Ub(d, b, void 0, a);
            a.currentTarget = null;
        }
        function se(a, b) {
            b = 0 !== (b & 4);
            for (var c = 0; c < a.length; c++) {
                var d = a[c], e = d.event;
                d = d.listeners;
                a: {
                    var f = void 0;
                    if (b) for (var g = d.length - 1; 0 <= g; g--) {
                        var h = d[g], k = h.instance, l = h.currentTarget;
                        h = h.listener;
                        if (k !== f && e.isPropagationStopped()) break a;
                        nf(e, h, l);
                        f = k;
                    } else for (g = 0; g < d.length; g++) {
                        h = d[g];
                        k = h.instance;
                        l = h.currentTarget;
                        h = h.listener;
                        if (k !== f && e.isPropagationStopped()) break a;
                        nf(e, h, l);
                        f = k;
                    }
                }
            }
            if (Qb) throw a = Rb, Qb = false, Rb = null, a;
        }
        function D(a, b) {
            var c = b[of];
            void 0 === c && (c = b[of] = new Set);
            var d = a + "__bubble";
            c.has(d) || (pf(b, a, 2, false), c.add(d));
        }
        function qf(a, b, c) {
            var d = 0;
            b && (d |= 4);
            pf(c, a, d, b);
        }
        var rf = "_reactListening" + Math.random().toString(36).slice(2);
        function sf(a) {
            if (!a[rf]) {
                a[rf] = true;
                da.forEach((function(b) {
                    "selectionchange" !== b && (mf.has(b) || qf(b, false, a), qf(b, true, a));
                }));
                var b = 9 === a.nodeType ? a : a.ownerDocument;
                null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
            }
        }
        function pf(a, b, c, d) {
            switch (jd(b)) {
              case 1:
                var e = ed;
                break;

              case 4:
                e = gd;
                break;

              default:
                e = fd;
            }
            c = e.bind(null, b, c, a);
            e = void 0;
            !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
            d ? void 0 !== e ? a.addEventListener(b, c, {
                capture: true,
                passive: e
            }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, {
                passive: e
            }) : a.addEventListener(b, c, false);
        }
        function hd(a, b, c, d, e) {
            var f = d;
            if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
                if (null === d) return;
                var g = d.tag;
                if (3 === g || 4 === g) {
                    var h = d.stateNode.containerInfo;
                    if (h === e || 8 === h.nodeType && h.parentNode === e) break;
                    if (4 === g) for (g = d.return; null !== g; ) {
                        var k = g.tag;
                        if (3 === k || 4 === k) if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
                        g = g.return;
                    }
                    for (;null !== h; ) {
                        g = Wc(h);
                        if (null === g) return;
                        k = g.tag;
                        if (5 === k || 6 === k) {
                            d = f = g;
                            continue a;
                        }
                        h = h.parentNode;
                    }
                }
                d = d.return;
            }
            Jb((function() {
                var d = f, e = xb(c), g = [];
                a: {
                    var h = df.get(a);
                    if (void 0 !== h) {
                        var k = td, n = a;
                        switch (a) {
                          case "keypress":
                            if (0 === od(c)) break a;

                          case "keydown":
                          case "keyup":
                            k = Rd;
                            break;

                          case "focusin":
                            n = "focus";
                            k = Fd;
                            break;

                          case "focusout":
                            n = "blur";
                            k = Fd;
                            break;

                          case "beforeblur":
                          case "afterblur":
                            k = Fd;
                            break;

                          case "click":
                            if (2 === c.button) break a;

                          case "auxclick":
                          case "dblclick":
                          case "mousedown":
                          case "mousemove":
                          case "mouseup":
                          case "mouseout":
                          case "mouseover":
                          case "contextmenu":
                            k = Bd;
                            break;

                          case "drag":
                          case "dragend":
                          case "dragenter":
                          case "dragexit":
                          case "dragleave":
                          case "dragover":
                          case "dragstart":
                          case "drop":
                            k = Dd;
                            break;

                          case "touchcancel":
                          case "touchend":
                          case "touchmove":
                          case "touchstart":
                            k = Vd;
                            break;

                          case $e:
                          case af:
                          case bf:
                            k = Hd;
                            break;

                          case cf:
                            k = Xd;
                            break;

                          case "scroll":
                            k = vd;
                            break;

                          case "wheel":
                            k = Zd;
                            break;

                          case "copy":
                          case "cut":
                          case "paste":
                            k = Jd;
                            break;

                          case "gotpointercapture":
                          case "lostpointercapture":
                          case "pointercancel":
                          case "pointerdown":
                          case "pointermove":
                          case "pointerout":
                          case "pointerover":
                          case "pointerup":
                            k = Td;
                        }
                        var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h ? h + "Capture" : null : h;
                        t = [];
                        for (var w = d, u; null !== w; ) {
                            u = w;
                            var F = u.stateNode;
                            5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
                            if (J) break;
                            w = w.return;
                        }
                        0 < t.length && (h = new k(h, n, null, c, e), g.push({
                            event: h,
                            listeners: t
                        }));
                    }
                }
                if (0 === (b & 7)) {
                    a: {
                        h = "mouseover" === a || "pointerover" === a;
                        k = "mouseout" === a || "pointerout" === a;
                        if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
                        if (k || h) {
                            h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
                            if (k) {
                                if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), 
                                n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
                            } else k = null, n = d;
                            if (k !== n) {
                                t = Bd;
                                F = "onMouseLeave";
                                x = "onMouseEnter";
                                w = "mouse";
                                if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", 
                                w = "pointer";
                                J = null == k ? h : ue(k);
                                u = null == n ? h : ue(n);
                                h = new t(F, w + "leave", k, c, e);
                                h.target = J;
                                h.relatedTarget = u;
                                F = null;
                                Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, 
                                F = t);
                                J = F;
                                if (k && n) b: {
                                    t = k;
                                    x = n;
                                    w = 0;
                                    for (u = t; u; u = vf(u)) w++;
                                    u = 0;
                                    for (F = x; F; F = vf(F)) u++;
                                    for (;0 < w - u; ) t = vf(t), w--;
                                    for (;0 < u - w; ) x = vf(x), u--;
                                    for (;w--; ) {
                                        if (t === x || null !== x && t === x.alternate) break b;
                                        t = vf(t);
                                        x = vf(x);
                                    }
                                    t = null;
                                } else t = null;
                                null !== k && wf(g, h, k, t, false);
                                null !== n && null !== J && wf(g, J, n, t, true);
                            }
                        }
                    }
                    a: {
                        h = d ? ue(d) : window;
                        k = h.nodeName && h.nodeName.toLowerCase();
                        if ("select" === k || "input" === k && "file" === h.type) var na = ve; else if (me(h)) if (we) na = Fe; else {
                            na = De;
                            var xa = Ce;
                        } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
                        if (na && (na = na(a, d))) {
                            ne(g, na, c, e);
                            break a;
                        }
                        xa && xa(a, h, d);
                        "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
                    }
                    xa = d ? ue(d) : window;
                    switch (a) {
                      case "focusin":
                        if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d, Se = null;
                        break;

                      case "focusout":
                        Se = Re = Qe = null;
                        break;

                      case "mousedown":
                        Te = true;
                        break;

                      case "contextmenu":
                      case "mouseup":
                      case "dragend":
                        Te = false;
                        Ue(g, c, e);
                        break;

                      case "selectionchange":
                        if (Pe) break;

                      case "keydown":
                      case "keyup":
                        Ue(g, c, e);
                    }
                    var $a;
                    if (ae) b: {
                        switch (a) {
                          case "compositionstart":
                            var ba = "onCompositionStart";
                            break b;

                          case "compositionend":
                            ba = "onCompositionEnd";
                            break b;

                          case "compositionupdate":
                            ba = "onCompositionUpdate";
                            break b;
                        }
                        ba = void 0;
                    } else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
                    ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e, 
                    ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), 
                    g.push({
                        event: ba,
                        listeners: xa
                    }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
                    if ($a = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), 
                    g.push({
                        event: e,
                        listeners: d
                    }), e.data = $a);
                }
                se(g, b);
            }));
        }
        function tf(a, b, c) {
            return {
                instance: a,
                listener: b,
                currentTarget: c
            };
        }
        function oe(a, b) {
            for (var c = b + "Capture", d = []; null !== a; ) {
                var e = a, f = e.stateNode;
                5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), 
                f = Kb(a, b), null != f && d.push(tf(a, f, e)));
                a = a.return;
            }
            return d;
        }
        function vf(a) {
            if (null === a) return null;
            do {
                a = a.return;
            } while (a && 5 !== a.tag);
            return a ? a : null;
        }
        function wf(a, b, c, d, e) {
            for (var f = b._reactName, g = []; null !== c && c !== d; ) {
                var h = c, k = h.alternate, l = h.stateNode;
                if (null !== k && k === d) break;
                5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), 
                null != k && g.push(tf(c, k, h))));
                c = c.return;
            }
            0 !== g.length && a.push({
                event: b,
                listeners: g
            });
        }
        var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
        function zf(a) {
            return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
        }
        function Af(a, b, c) {
            b = zf(b);
            if (zf(a) !== b && c) throw Error(p(425));
        }
        function Bf() {}
        var Cf = null, Df = null;
        function Ef(a, b) {
            return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
        }
        var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
            return Hf.resolve(null).then(a).catch(If);
        } : Ff;
        function If(a) {
            setTimeout((function() {
                throw a;
            }));
        }
        function Kf(a, b) {
            var c = b, d = 0;
            do {
                var e = c.nextSibling;
                a.removeChild(c);
                if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
                    if (0 === d) {
                        a.removeChild(e);
                        bd(b);
                        return;
                    }
                    d--;
                } else "$" !== c && "$?" !== c && "$!" !== c || d++;
                c = e;
            } while (c);
            bd(b);
        }
        function Lf(a) {
            for (;null != a; a = a.nextSibling) {
                var b = a.nodeType;
                if (1 === b || 3 === b) break;
                if (8 === b) {
                    b = a.data;
                    if ("$" === b || "$!" === b || "$?" === b) break;
                    if ("/$" === b) return null;
                }
            }
            return a;
        }
        function Mf(a) {
            a = a.previousSibling;
            for (var b = 0; a; ) {
                if (8 === a.nodeType) {
                    var c = a.data;
                    if ("$" === c || "$!" === c || "$?" === c) {
                        if (0 === b) return a;
                        b--;
                    } else "/$" === c && b++;
                }
                a = a.previousSibling;
            }
            return null;
        }
        var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
        function Wc(a) {
            var b = a[Of];
            if (b) return b;
            for (var c = a.parentNode; c; ) {
                if (b = c[uf] || c[Of]) {
                    c = b.alternate;
                    if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
                        if (c = a[Of]) return c;
                        a = Mf(a);
                    }
                    return b;
                }
                a = c;
                c = a.parentNode;
            }
            return null;
        }
        function Cb(a) {
            a = a[Of] || a[uf];
            return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
        }
        function ue(a) {
            if (5 === a.tag || 6 === a.tag) return a.stateNode;
            throw Error(p(33));
        }
        function Db(a) {
            return a[Pf] || null;
        }
        var Sf = [], Tf = -1;
        function Uf(a) {
            return {
                current: a
            };
        }
        function E(a) {
            0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
        }
        function G(a, b) {
            Tf++;
            Sf[Tf] = a.current;
            a.current = b;
        }
        var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
        function Yf(a, b) {
            var c = a.type.contextTypes;
            if (!c) return Vf;
            var d = a.stateNode;
            if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
            var e = {}, f;
            for (f in c) e[f] = b[f];
            d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
            return e;
        }
        function Zf(a) {
            a = a.childContextTypes;
            return null !== a && void 0 !== a;
        }
        function $f() {
            E(Wf);
            E(H);
        }
        function ag(a, b, c) {
            if (H.current !== Vf) throw Error(p(168));
            G(H, b);
            G(Wf, c);
        }
        function bg(a, b, c) {
            var d = a.stateNode;
            b = b.childContextTypes;
            if ("function" !== typeof d.getChildContext) return c;
            d = d.getChildContext();
            for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
            return A({}, c, d);
        }
        function cg(a) {
            a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
            Xf = H.current;
            G(H, a);
            G(Wf, Wf.current);
            return true;
        }
        function dg(a, b, c) {
            var d = a.stateNode;
            if (!d) throw Error(p(169));
            c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), 
            G(H, a)) : E(Wf);
            G(Wf, c);
        }
        var eg = null, fg = false, gg = false;
        function hg(a) {
            null === eg ? eg = [ a ] : eg.push(a);
        }
        function ig(a) {
            fg = true;
            hg(a);
        }
        function jg() {
            if (!gg && null !== eg) {
                gg = true;
                var a = 0, b = C;
                try {
                    var c = eg;
                    for (C = 1; a < c.length; a++) {
                        var d = c[a];
                        do {
                            d = d(!0);
                        } while (null !== d);
                    }
                    eg = null;
                    fg = !1;
                } catch (e) {
                    throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
                } finally {
                    C = b, gg = false;
                }
            }
            return null;
        }
        var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
        function tg(a, b) {
            kg[lg++] = ng;
            kg[lg++] = mg;
            mg = a;
            ng = b;
        }
        function ug(a, b, c) {
            og[pg++] = rg;
            og[pg++] = sg;
            og[pg++] = qg;
            qg = a;
            var d = rg;
            a = sg;
            var e = 32 - oc(d) - 1;
            d &= ~(1 << e);
            c += 1;
            var f = 32 - oc(b) + e;
            if (30 < f) {
                var g = e - e % 5;
                f = (d & (1 << g) - 1).toString(32);
                d >>= g;
                e -= g;
                rg = 1 << 32 - oc(b) + e | c << e | d;
                sg = f + a;
            } else rg = 1 << f | c << e | d, sg = a;
        }
        function vg(a) {
            null !== a.return && (tg(a, 1), ug(a, 1, 0));
        }
        function wg(a) {
            for (;a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
            for (;a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], 
            og[pg] = null;
        }
        var xg = null, yg = null, I = false, zg = null;
        function Ag(a, b) {
            var c = Bg(5, null, null, 0);
            c.elementType = "DELETED";
            c.stateNode = b;
            c.return = a;
            b = a.deletions;
            null === b ? (a.deletions = [ c ], a.flags |= 16) : b.push(c);
        }
        function Cg(a, b) {
            switch (a.tag) {
              case 5:
                var c = a.type;
                b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
                return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;

              case 6:
                return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, 
                xg = a, yg = null, true) : false;

              case 13:
                return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
                    id: rg,
                    overflow: sg
                } : null, a.memoizedState = {
                    dehydrated: b,
                    treeContext: c,
                    retryLane: 1073741824
                }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, 
                yg = null, true) : false;

              default:
                return false;
            }
        }
        function Dg(a) {
            return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
        }
        function Eg(a) {
            if (I) {
                var b = yg;
                if (b) {
                    var c = b;
                    if (!Cg(a, b)) {
                        if (Dg(a)) throw Error(p(418));
                        b = Lf(c.nextSibling);
                        var d = xg;
                        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
                    }
                } else {
                    if (Dg(a)) throw Error(p(418));
                    a.flags = a.flags & -4097 | 2;
                    I = false;
                    xg = a;
                }
            }
        }
        function Fg(a) {
            for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
            xg = a;
        }
        function Gg(a) {
            if (a !== xg) return false;
            if (!I) return Fg(a), I = true, false;
            var b;
            (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
            if (b && (b = yg)) {
                if (Dg(a)) throw Hg(), Error(p(418));
                for (;b; ) Ag(a, b), b = Lf(b.nextSibling);
            }
            Fg(a);
            if (13 === a.tag) {
                a = a.memoizedState;
                a = null !== a ? a.dehydrated : null;
                if (!a) throw Error(p(317));
                a: {
                    a = a.nextSibling;
                    for (b = 0; a; ) {
                        if (8 === a.nodeType) {
                            var c = a.data;
                            if ("/$" === c) {
                                if (0 === b) {
                                    yg = Lf(a.nextSibling);
                                    break a;
                                }
                                b--;
                            } else "$" !== c && "$!" !== c && "$?" !== c || b++;
                        }
                        a = a.nextSibling;
                    }
                    yg = null;
                }
            } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
            return true;
        }
        function Hg() {
            for (var a = yg; a; ) a = Lf(a.nextSibling);
        }
        function Ig() {
            yg = xg = null;
            I = false;
        }
        function Jg(a) {
            null === zg ? zg = [ a ] : zg.push(a);
        }
        var Kg = ua.ReactCurrentBatchConfig;
        function Lg(a, b, c) {
            a = c.ref;
            if (null !== a && "function" !== typeof a && "object" !== typeof a) {
                if (c._owner) {
                    c = c._owner;
                    if (c) {
                        if (1 !== c.tag) throw Error(p(309));
                        var d = c.stateNode;
                    }
                    if (!d) throw Error(p(147, a));
                    var e = d, f = "" + a;
                    if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
                    b = function(a) {
                        var b = e.refs;
                        null === a ? delete b[f] : b[f] = a;
                    };
                    b._stringRef = f;
                    return b;
                }
                if ("string" !== typeof a) throw Error(p(284));
                if (!c._owner) throw Error(p(290, a));
            }
            return a;
        }
        function Mg(a, b) {
            a = Object.prototype.toString.call(b);
            throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
        }
        function Ng(a) {
            var b = a._init;
            return b(a._payload);
        }
        function Og(a) {
            function b(b, c) {
                if (a) {
                    var d = b.deletions;
                    null === d ? (b.deletions = [ c ], b.flags |= 16) : d.push(c);
                }
            }
            function c(c, d) {
                if (!a) return null;
                for (;null !== d; ) b(c, d), d = d.sibling;
                return null;
            }
            function d(a, b) {
                for (a = new Map; null !== b; ) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), 
                b = b.sibling;
                return a;
            }
            function e(a, b) {
                a = Pg(a, b);
                a.index = 0;
                a.sibling = null;
                return a;
            }
            function f(b, c, d) {
                b.index = d;
                if (!a) return b.flags |= 1048576, c;
                d = b.alternate;
                if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
                b.flags |= 2;
                return c;
            }
            function g(b) {
                a && null === b.alternate && (b.flags |= 2);
                return b;
            }
            function h(a, b, c, d) {
                if (null === b || 6 !== b.tag) return b = Qg(c, a.mode, d), b.return = a, b;
                b = e(b, c);
                b.return = a;
                return b;
            }
            function k(a, b, c, d) {
                var f = c.type;
                if (f === ya) return m(a, b, c.props.children, d, c.key);
                if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && Ng(f) === b.type)) return d = e(b, c.props), 
                d.ref = Lg(a, b, c), d.return = a, d;
                d = Rg(c.type, c.key, c.props, null, a.mode, d);
                d.ref = Lg(a, b, c);
                d.return = a;
                return d;
            }
            function l(a, b, c, d) {
                if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Sg(c, a.mode, d), 
                b.return = a, b;
                b = e(b, c.children || []);
                b.return = a;
                return b;
            }
            function m(a, b, c, d, f) {
                if (null === b || 7 !== b.tag) return b = Tg(c, a.mode, d, f), b.return = a, b;
                b = e(b, c);
                b.return = a;
                return b;
            }
            function q(a, b, c) {
                if ("string" === typeof b && "" !== b || "number" === typeof b) return b = Qg("" + b, a.mode, c), 
                b.return = a, b;
                if ("object" === typeof b && null !== b) {
                    switch (b.$$typeof) {
                      case va:
                        return c = Rg(b.type, b.key, b.props, null, a.mode, c), c.ref = Lg(a, null, b), 
                        c.return = a, c;

                      case wa:
                        return b = Sg(b, a.mode, c), b.return = a, b;

                      case Ha:
                        var d = b._init;
                        return q(a, d(b._payload), c);
                    }
                    if (eb(b) || Ka(b)) return b = Tg(b, a.mode, c, null), b.return = a, b;
                    Mg(a, b);
                }
                return null;
            }
            function r(a, b, c, d) {
                var e = null !== b ? b.key : null;
                if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
                if ("object" === typeof c && null !== c) {
                    switch (c.$$typeof) {
                      case va:
                        return c.key === e ? k(a, b, c, d) : null;

                      case wa:
                        return c.key === e ? l(a, b, c, d) : null;

                      case Ha:
                        return e = c._init, r(a, b, e(c._payload), d);
                    }
                    if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
                    Mg(a, c);
                }
                return null;
            }
            function y(a, b, c, d, e) {
                if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, 
                h(b, a, "" + d, e);
                if ("object" === typeof d && null !== d) {
                    switch (d.$$typeof) {
                      case va:
                        return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);

                      case wa:
                        return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);

                      case Ha:
                        var f = d._init;
                        return y(a, b, c, f(d._payload), e);
                    }
                    if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
                    Mg(b, d);
                }
                return null;
            }
            function n(e, g, h, k) {
                for (var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++) {
                    u.index > w ? (x = u, u = null) : x = u.sibling;
                    var n = r(e, u, h[w], k);
                    if (null === n) {
                        null === u && (u = x);
                        break;
                    }
                    a && u && null === n.alternate && b(e, u);
                    g = f(n, g, w);
                    null === m ? l = n : m.sibling = n;
                    m = n;
                    u = x;
                }
                if (w === h.length) return c(e, u), I && tg(e, w), l;
                if (null === u) {
                    for (;w < h.length; w++) u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, 
                    m = u);
                    I && tg(e, w);
                    return l;
                }
                for (u = d(e, u); w < h.length; w++) x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), 
                g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
                a && u.forEach((function(a) {
                    return b(e, a);
                }));
                I && tg(e, w);
                return l;
            }
            function t(e, g, h, k) {
                var l = Ka(h);
                if ("function" !== typeof l) throw Error(p(150));
                h = l.call(h);
                if (null == h) throw Error(p(151));
                for (var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, 
                n = h.next()) {
                    m.index > w ? (x = m, m = null) : x = m.sibling;
                    var t = r(e, m, n.value, k);
                    if (null === t) {
                        null === m && (m = x);
                        break;
                    }
                    a && m && null === t.alternate && b(e, m);
                    g = f(t, g, w);
                    null === u ? l = t : u.sibling = t;
                    u = t;
                    m = x;
                }
                if (n.done) return c(e, m), I && tg(e, w), l;
                if (null === m) {
                    for (;!n.done; w++, n = h.next()) n = q(e, n.value, k), null !== n && (g = f(n, g, w), 
                    null === u ? l = n : u.sibling = n, u = n);
                    I && tg(e, w);
                    return l;
                }
                for (m = d(e, m); !n.done; w++, n = h.next()) n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), 
                g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
                a && m.forEach((function(a) {
                    return b(e, a);
                }));
                I && tg(e, w);
                return l;
            }
            function J(a, d, f, h) {
                "object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
                if ("object" === typeof f && null !== f) {
                    switch (f.$$typeof) {
                      case va:
                        a: {
                            for (var k = f.key, l = d; null !== l; ) {
                                if (l.key === k) {
                                    k = f.type;
                                    if (k === ya) {
                                        if (7 === l.tag) {
                                            c(a, l.sibling);
                                            d = e(l, f.props.children);
                                            d.return = a;
                                            a = d;
                                            break a;
                                        }
                                    } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && Ng(k) === l.type) {
                                        c(a, l.sibling);
                                        d = e(l, f.props);
                                        d.ref = Lg(a, l, f);
                                        d.return = a;
                                        a = d;
                                        break a;
                                    }
                                    c(a, l);
                                    break;
                                } else b(a, l);
                                l = l.sibling;
                            }
                            f.type === ya ? (d = Tg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Rg(f.type, f.key, f.props, null, a.mode, h), 
                            h.ref = Lg(a, d, f), h.return = a, a = h);
                        }
                        return g(a);

                      case wa:
                        a: {
                            for (l = f.key; null !== d; ) {
                                if (d.key === l) if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                                    c(a, d.sibling);
                                    d = e(d, f.children || []);
                                    d.return = a;
                                    a = d;
                                    break a;
                                } else {
                                    c(a, d);
                                    break;
                                } else b(a, d);
                                d = d.sibling;
                            }
                            d = Sg(f, a.mode, h);
                            d.return = a;
                            a = d;
                        }
                        return g(a);

                      case Ha:
                        return l = f._init, J(a, d, l(f._payload), h);
                    }
                    if (eb(f)) return n(a, d, f, h);
                    if (Ka(f)) return t(a, d, f, h);
                    Mg(a, f);
                }
                return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, 
                null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), 
                d = Qg(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
            }
            return J;
        }
        var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
        function $g() {
            Zg = Yg = Xg = null;
        }
        function ah(a) {
            var b = Wg.current;
            E(Wg);
            a._currentValue = b;
        }
        function bh(a, b, c) {
            for (;null !== a; ) {
                var d = a.alternate;
                (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
                if (a === c) break;
                a = a.return;
            }
        }
        function ch(a, b) {
            Xg = a;
            Zg = Yg = null;
            a = a.dependencies;
            null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
        }
        function eh(a) {
            var b = a._currentValue;
            if (Zg !== a) if (a = {
                context: a,
                memoizedValue: b,
                next: null
            }, null === Yg) {
                if (null === Xg) throw Error(p(308));
                Yg = a;
                Xg.dependencies = {
                    lanes: 0,
                    firstContext: a
                };
            } else Yg = Yg.next = a;
            return b;
        }
        var fh = null;
        function gh(a) {
            null === fh ? fh = [ a ] : fh.push(a);
        }
        function hh(a, b, c, d) {
            var e = b.interleaved;
            null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
            b.interleaved = c;
            return ih(a, d);
        }
        function ih(a, b) {
            a.lanes |= b;
            var c = a.alternate;
            null !== c && (c.lanes |= b);
            c = a;
            for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), 
            c = a, a = a.return;
            return 3 === c.tag ? c.stateNode : null;
        }
        var jh = false;
        function kh(a) {
            a.updateQueue = {
                baseState: a.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: {
                    pending: null,
                    interleaved: null,
                    lanes: 0
                },
                effects: null
            };
        }
        function lh(a, b) {
            a = a.updateQueue;
            b.updateQueue === a && (b.updateQueue = {
                baseState: a.baseState,
                firstBaseUpdate: a.firstBaseUpdate,
                lastBaseUpdate: a.lastBaseUpdate,
                shared: a.shared,
                effects: a.effects
            });
        }
        function mh(a, b) {
            return {
                eventTime: a,
                lane: b,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            };
        }
        function nh(a, b, c) {
            var d = a.updateQueue;
            if (null === d) return null;
            d = d.shared;
            if (0 !== (K & 2)) {
                var e = d.pending;
                null === e ? b.next = b : (b.next = e.next, e.next = b);
                d.pending = b;
                return ih(a, c);
            }
            e = d.interleaved;
            null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
            d.interleaved = b;
            return ih(a, c);
        }
        function oh(a, b, c) {
            b = b.updateQueue;
            if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
                var d = b.lanes;
                d &= a.pendingLanes;
                c |= d;
                b.lanes = c;
                Cc(a, c);
            }
        }
        function ph(a, b) {
            var c = a.updateQueue, d = a.alternate;
            if (null !== d && (d = d.updateQueue, c === d)) {
                var e = null, f = null;
                c = c.firstBaseUpdate;
                if (null !== c) {
                    do {
                        var g = {
                            eventTime: c.eventTime,
                            lane: c.lane,
                            tag: c.tag,
                            payload: c.payload,
                            callback: c.callback,
                            next: null
                        };
                        null === f ? e = f = g : f = f.next = g;
                        c = c.next;
                    } while (null !== c);
                    null === f ? e = f = b : f = f.next = b;
                } else e = f = b;
                c = {
                    baseState: d.baseState,
                    firstBaseUpdate: e,
                    lastBaseUpdate: f,
                    shared: d.shared,
                    effects: d.effects
                };
                a.updateQueue = c;
                return;
            }
            a = c.lastBaseUpdate;
            null === a ? c.firstBaseUpdate = b : a.next = b;
            c.lastBaseUpdate = b;
        }
        function qh(a, b, c, d) {
            var e = a.updateQueue;
            jh = false;
            var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
            if (null !== h) {
                e.shared.pending = null;
                var k = h, l = k.next;
                k.next = null;
                null === g ? f = l : g.next = l;
                g = k;
                var m = a.alternate;
                null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, 
                m.lastBaseUpdate = k));
            }
            if (null !== f) {
                var q = e.baseState;
                g = 0;
                m = l = k = null;
                h = f;
                do {
                    var r = h.lane, y = h.eventTime;
                    if ((d & r) === r) {
                        null !== m && (m = m.next = {
                            eventTime: y,
                            lane: 0,
                            tag: h.tag,
                            payload: h.payload,
                            callback: h.callback,
                            next: null
                        });
                        a: {
                            var n = a, t = h;
                            r = b;
                            y = c;
                            switch (t.tag) {
                              case 1:
                                n = t.payload;
                                if ("function" === typeof n) {
                                    q = n.call(y, q, r);
                                    break a;
                                }
                                q = n;
                                break a;

                              case 3:
                                n.flags = n.flags & -65537 | 128;

                              case 0:
                                n = t.payload;
                                r = "function" === typeof n ? n.call(y, q, r) : n;
                                if (null === r || void 0 === r) break a;
                                q = A({}, q, r);
                                break a;

                              case 2:
                                jh = true;
                            }
                        }
                        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [ h ] : r.push(h));
                    } else y = {
                        eventTime: y,
                        lane: r,
                        tag: h.tag,
                        payload: h.payload,
                        callback: h.callback,
                        next: null
                    }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
                    h = h.next;
                    if (null === h) if (h = e.shared.pending, null === h) break; else r = h, h = r.next, 
                    r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
                } while (1);
                null === m && (k = q);
                e.baseState = k;
                e.firstBaseUpdate = l;
                e.lastBaseUpdate = m;
                b = e.shared.interleaved;
                if (null !== b) {
                    e = b;
                    do {
                        g |= e.lane, e = e.next;
                    } while (e !== b);
                } else null === f && (e.shared.lanes = 0);
                rh |= g;
                a.lanes = g;
                a.memoizedState = q;
            }
        }
        function sh(a, b, c) {
            a = b.effects;
            b.effects = null;
            if (null !== a) for (b = 0; b < a.length; b++) {
                var d = a[b], e = d.callback;
                if (null !== e) {
                    d.callback = null;
                    d = c;
                    if ("function" !== typeof e) throw Error(p(191, e));
                    e.call(d);
                }
            }
        }
        var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
        function xh(a) {
            if (a === th) throw Error(p(174));
            return a;
        }
        function yh(a, b) {
            G(wh, b);
            G(vh, a);
            G(uh, th);
            a = b.nodeType;
            switch (a) {
              case 9:
              case 11:
                b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
                break;

              default:
                a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
            }
            E(uh);
            G(uh, b);
        }
        function zh() {
            E(uh);
            E(vh);
            E(wh);
        }
        function Ah(a) {
            xh(wh.current);
            var b = xh(uh.current);
            var c = lb(b, a.type);
            b !== c && (G(vh, a), G(uh, c));
        }
        function Bh(a) {
            vh.current === a && (E(uh), E(vh));
        }
        var L = Uf(0);
        function Ch(a) {
            for (var b = a; null !== b; ) {
                if (13 === b.tag) {
                    var c = b.memoizedState;
                    if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
                } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
                    if (0 !== (b.flags & 128)) return b;
                } else if (null !== b.child) {
                    b.child.return = b;
                    b = b.child;
                    continue;
                }
                if (b === a) break;
                for (;null === b.sibling; ) {
                    if (null === b.return || b.return === a) return null;
                    b = b.return;
                }
                b.sibling.return = b.return;
                b = b.sibling;
            }
            return null;
        }
        var Dh = [];
        function Eh() {
            for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
            Dh.length = 0;
        }
        var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
        function P() {
            throw Error(p(321));
        }
        function Mh(a, b) {
            if (null === b) return false;
            for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
            return true;
        }
        function Nh(a, b, c, d, e, f) {
            Hh = f;
            M = b;
            b.memoizedState = null;
            b.updateQueue = null;
            b.lanes = 0;
            Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
            a = c(d, e);
            if (Jh) {
                f = 0;
                do {
                    Jh = false;
                    Kh = 0;
                    if (25 <= f) throw Error(p(301));
                    f += 1;
                    O = N = null;
                    b.updateQueue = null;
                    Fh.current = Qh;
                    a = c(d, e);
                } while (Jh);
            }
            Fh.current = Rh;
            b = null !== N && null !== N.next;
            Hh = 0;
            O = N = M = null;
            Ih = false;
            if (b) throw Error(p(300));
            return a;
        }
        function Sh() {
            var a = 0 !== Kh;
            Kh = 0;
            return a;
        }
        function Th() {
            var a = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            null === O ? M.memoizedState = O = a : O = O.next = a;
            return O;
        }
        function Uh() {
            if (null === N) {
                var a = M.alternate;
                a = null !== a ? a.memoizedState : null;
            } else a = N.next;
            var b = null === O ? M.memoizedState : O.next;
            if (null !== b) O = b, N = a; else {
                if (null === a) throw Error(p(310));
                N = a;
                a = {
                    memoizedState: N.memoizedState,
                    baseState: N.baseState,
                    baseQueue: N.baseQueue,
                    queue: N.queue,
                    next: null
                };
                null === O ? M.memoizedState = O = a : O = O.next = a;
            }
            return O;
        }
        function Vh(a, b) {
            return "function" === typeof b ? b(a) : b;
        }
        function Wh(a) {
            var b = Uh(), c = b.queue;
            if (null === c) throw Error(p(311));
            c.lastRenderedReducer = a;
            var d = N, e = d.baseQueue, f = c.pending;
            if (null !== f) {
                if (null !== e) {
                    var g = e.next;
                    e.next = f.next;
                    f.next = g;
                }
                d.baseQueue = e = f;
                c.pending = null;
            }
            if (null !== e) {
                f = e.next;
                d = d.baseState;
                var h = g = null, k = null, l = f;
                do {
                    var m = l.lane;
                    if ((Hh & m) === m) null !== k && (k = k.next = {
                        lane: 0,
                        action: l.action,
                        hasEagerState: l.hasEagerState,
                        eagerState: l.eagerState,
                        next: null
                    }), d = l.hasEagerState ? l.eagerState : a(d, l.action); else {
                        var q = {
                            lane: m,
                            action: l.action,
                            hasEagerState: l.hasEagerState,
                            eagerState: l.eagerState,
                            next: null
                        };
                        null === k ? (h = k = q, g = d) : k = k.next = q;
                        M.lanes |= m;
                        rh |= m;
                    }
                    l = l.next;
                } while (null !== l && l !== f);
                null === k ? g = d : k.next = h;
                He(d, b.memoizedState) || (dh = true);
                b.memoizedState = d;
                b.baseState = g;
                b.baseQueue = k;
                c.lastRenderedState = d;
            }
            a = c.interleaved;
            if (null !== a) {
                e = a;
                do {
                    f = e.lane, M.lanes |= f, rh |= f, e = e.next;
                } while (e !== a);
            } else null === e && (c.lanes = 0);
            return [ b.memoizedState, c.dispatch ];
        }
        function Xh(a) {
            var b = Uh(), c = b.queue;
            if (null === c) throw Error(p(311));
            c.lastRenderedReducer = a;
            var d = c.dispatch, e = c.pending, f = b.memoizedState;
            if (null !== e) {
                c.pending = null;
                var g = e = e.next;
                do {
                    f = a(f, g.action), g = g.next;
                } while (g !== e);
                He(f, b.memoizedState) || (dh = true);
                b.memoizedState = f;
                null === b.baseQueue && (b.baseState = f);
                c.lastRenderedState = f;
            }
            return [ f, d ];
        }
        function Yh() {}
        function Zh(a, b) {
            var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
            f && (d.memoizedState = e, dh = true);
            d = d.queue;
            $h(ai.bind(null, c, d, a), [ a ]);
            if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
                c.flags |= 2048;
                bi(9, ci.bind(null, c, d, e, b), void 0, null);
                if (null === Q) throw Error(p(349));
                0 !== (Hh & 30) || di(c, b, e);
            }
            return e;
        }
        function di(a, b, c) {
            a.flags |= 16384;
            a = {
                getSnapshot: b,
                value: c
            };
            b = M.updateQueue;
            null === b ? (b = {
                lastEffect: null,
                stores: null
            }, M.updateQueue = b, b.stores = [ a ]) : (c = b.stores, null === c ? b.stores = [ a ] : c.push(a));
        }
        function ci(a, b, c, d) {
            b.value = c;
            b.getSnapshot = d;
            ei(b) && fi(a);
        }
        function ai(a, b, c) {
            return c((function() {
                ei(b) && fi(a);
            }));
        }
        function ei(a) {
            var b = a.getSnapshot;
            a = a.value;
            try {
                var c = b();
                return !He(a, c);
            } catch (d) {
                return true;
            }
        }
        function fi(a) {
            var b = ih(a, 1);
            null !== b && gi(b, a, 1, -1);
        }
        function hi(a) {
            var b = Th();
            "function" === typeof a && (a = a());
            b.memoizedState = b.baseState = a;
            a = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Vh,
                lastRenderedState: a
            };
            b.queue = a;
            a = a.dispatch = ii.bind(null, M, a);
            return [ b.memoizedState, a ];
        }
        function bi(a, b, c, d) {
            a = {
                tag: a,
                create: b,
                destroy: c,
                deps: d,
                next: null
            };
            b = M.updateQueue;
            null === b ? (b = {
                lastEffect: null,
                stores: null
            }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, 
            c.next = a, a.next = d, b.lastEffect = a));
            return a;
        }
        function ji() {
            return Uh().memoizedState;
        }
        function ki(a, b, c, d) {
            var e = Th();
            M.flags |= a;
            e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
        }
        function li(a, b, c, d) {
            var e = Uh();
            d = void 0 === d ? null : d;
            var f = void 0;
            if (null !== N) {
                var g = N.memoizedState;
                f = g.destroy;
                if (null !== d && Mh(d, g.deps)) {
                    e.memoizedState = bi(b, c, f, d);
                    return;
                }
            }
            M.flags |= a;
            e.memoizedState = bi(1 | b, c, f, d);
        }
        function mi(a, b) {
            return ki(8390656, 8, a, b);
        }
        function $h(a, b) {
            return li(2048, 8, a, b);
        }
        function ni(a, b) {
            return li(4, 2, a, b);
        }
        function oi(a, b) {
            return li(4, 4, a, b);
        }
        function pi(a, b) {
            if ("function" === typeof b) return a = a(), b(a), function() {
                b(null);
            };
            if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
                b.current = null;
            };
        }
        function qi(a, b, c) {
            c = null !== c && void 0 !== c ? c.concat([ a ]) : null;
            return li(4, 4, pi.bind(null, b, a), c);
        }
        function ri() {}
        function si(a, b) {
            var c = Uh();
            b = void 0 === b ? null : b;
            var d = c.memoizedState;
            if (null !== d && null !== b && Mh(b, d[1])) return d[0];
            c.memoizedState = [ a, b ];
            return a;
        }
        function ti(a, b) {
            var c = Uh();
            b = void 0 === b ? null : b;
            var d = c.memoizedState;
            if (null !== d && null !== b && Mh(b, d[1])) return d[0];
            a = a();
            c.memoizedState = [ a, b ];
            return a;
        }
        function ui(a, b, c) {
            if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
            He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
            return b;
        }
        function vi(a, b) {
            var c = C;
            C = 0 !== c && 4 > c ? c : 4;
            a(true);
            var d = Gh.transition;
            Gh.transition = {};
            try {
                a(!1), b();
            } finally {
                C = c, Gh.transition = d;
            }
        }
        function wi() {
            return Uh().memoizedState;
        }
        function xi(a, b, c) {
            var d = yi(a);
            c = {
                lane: d,
                action: c,
                hasEagerState: false,
                eagerState: null,
                next: null
            };
            if (zi(a)) Ai(b, c); else if (c = hh(a, b, c, d), null !== c) {
                var e = R();
                gi(c, a, d, e);
                Bi(c, b, d);
            }
        }
        function ii(a, b, c) {
            var d = yi(a), e = {
                lane: d,
                action: c,
                hasEagerState: false,
                eagerState: null,
                next: null
            };
            if (zi(a)) Ai(b, e); else {
                var f = a.alternate;
                if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, 
                null !== f)) try {
                    var g = b.lastRenderedState, h = f(g, c);
                    e.hasEagerState = !0;
                    e.eagerState = h;
                    if (He(h, g)) {
                        var k = b.interleaved;
                        null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
                        b.interleaved = e;
                        return;
                    }
                } catch (l) {} finally {}
                c = hh(a, b, e, d);
                null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
            }
        }
        function zi(a) {
            var b = a.alternate;
            return a === M || null !== b && b === M;
        }
        function Ai(a, b) {
            Jh = Ih = true;
            var c = a.pending;
            null === c ? b.next = b : (b.next = c.next, c.next = b);
            a.pending = b;
        }
        function Bi(a, b, c) {
            if (0 !== (c & 4194240)) {
                var d = b.lanes;
                d &= a.pendingLanes;
                c |= d;
                b.lanes = c;
                Cc(a, c);
            }
        }
        var Rh = {
            readContext: eh,
            useCallback: P,
            useContext: P,
            useEffect: P,
            useImperativeHandle: P,
            useInsertionEffect: P,
            useLayoutEffect: P,
            useMemo: P,
            useReducer: P,
            useRef: P,
            useState: P,
            useDebugValue: P,
            useDeferredValue: P,
            useTransition: P,
            useMutableSource: P,
            useSyncExternalStore: P,
            useId: P,
            unstable_isNewReconciler: false
        }, Oh = {
            readContext: eh,
            useCallback: function(a, b) {
                Th().memoizedState = [ a, void 0 === b ? null : b ];
                return a;
            },
            useContext: eh,
            useEffect: mi,
            useImperativeHandle: function(a, b, c) {
                c = null !== c && void 0 !== c ? c.concat([ a ]) : null;
                return ki(4194308, 4, pi.bind(null, b, a), c);
            },
            useLayoutEffect: function(a, b) {
                return ki(4194308, 4, a, b);
            },
            useInsertionEffect: function(a, b) {
                return ki(4, 2, a, b);
            },
            useMemo: function(a, b) {
                var c = Th();
                b = void 0 === b ? null : b;
                a = a();
                c.memoizedState = [ a, b ];
                return a;
            },
            useReducer: function(a, b, c) {
                var d = Th();
                b = void 0 !== c ? c(b) : b;
                d.memoizedState = d.baseState = b;
                a = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: a,
                    lastRenderedState: b
                };
                d.queue = a;
                a = a.dispatch = xi.bind(null, M, a);
                return [ d.memoizedState, a ];
            },
            useRef: function(a) {
                var b = Th();
                a = {
                    current: a
                };
                return b.memoizedState = a;
            },
            useState: hi,
            useDebugValue: ri,
            useDeferredValue: function(a) {
                return Th().memoizedState = a;
            },
            useTransition: function() {
                var a = hi(false), b = a[0];
                a = vi.bind(null, a[1]);
                Th().memoizedState = a;
                return [ b, a ];
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(a, b, c) {
                var d = M, e = Th();
                if (I) {
                    if (void 0 === c) throw Error(p(407));
                    c = c();
                } else {
                    c = b();
                    if (null === Q) throw Error(p(349));
                    0 !== (Hh & 30) || di(d, b, c);
                }
                e.memoizedState = c;
                var f = {
                    value: c,
                    getSnapshot: b
                };
                e.queue = f;
                mi(ai.bind(null, d, f, a), [ a ]);
                d.flags |= 2048;
                bi(9, ci.bind(null, d, f, c, b), void 0, null);
                return c;
            },
            useId: function() {
                var a = Th(), b = Q.identifierPrefix;
                if (I) {
                    var c = sg;
                    var d = rg;
                    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
                    b = ":" + b + "R" + c;
                    c = Kh++;
                    0 < c && (b += "H" + c.toString(32));
                    b += ":";
                } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
                return a.memoizedState = b;
            },
            unstable_isNewReconciler: false
        }, Ph = {
            readContext: eh,
            useCallback: si,
            useContext: eh,
            useEffect: $h,
            useImperativeHandle: qi,
            useInsertionEffect: ni,
            useLayoutEffect: oi,
            useMemo: ti,
            useReducer: Wh,
            useRef: ji,
            useState: function() {
                return Wh(Vh);
            },
            useDebugValue: ri,
            useDeferredValue: function(a) {
                var b = Uh();
                return ui(b, N.memoizedState, a);
            },
            useTransition: function() {
                var a = Wh(Vh)[0], b = Uh().memoizedState;
                return [ a, b ];
            },
            useMutableSource: Yh,
            useSyncExternalStore: Zh,
            useId: wi,
            unstable_isNewReconciler: false
        }, Qh = {
            readContext: eh,
            useCallback: si,
            useContext: eh,
            useEffect: $h,
            useImperativeHandle: qi,
            useInsertionEffect: ni,
            useLayoutEffect: oi,
            useMemo: ti,
            useReducer: Xh,
            useRef: ji,
            useState: function() {
                return Xh(Vh);
            },
            useDebugValue: ri,
            useDeferredValue: function(a) {
                var b = Uh();
                return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
            },
            useTransition: function() {
                var a = Xh(Vh)[0], b = Uh().memoizedState;
                return [ a, b ];
            },
            useMutableSource: Yh,
            useSyncExternalStore: Zh,
            useId: wi,
            unstable_isNewReconciler: false
        };
        function Ci(a, b) {
            if (a && a.defaultProps) {
                b = A({}, b);
                a = a.defaultProps;
                for (var c in a) void 0 === b[c] && (b[c] = a[c]);
                return b;
            }
            return b;
        }
        function Di(a, b, c, d) {
            b = a.memoizedState;
            c = c(d, b);
            c = null === c || void 0 === c ? b : A({}, b, c);
            a.memoizedState = c;
            0 === a.lanes && (a.updateQueue.baseState = c);
        }
        var Ei = {
            isMounted: function(a) {
                return (a = a._reactInternals) ? Vb(a) === a : false;
            },
            enqueueSetState: function(a, b, c) {
                a = a._reactInternals;
                var d = R(), e = yi(a), f = mh(d, e);
                f.payload = b;
                void 0 !== c && null !== c && (f.callback = c);
                b = nh(a, f, e);
                null !== b && (gi(b, a, e, d), oh(b, a, e));
            },
            enqueueReplaceState: function(a, b, c) {
                a = a._reactInternals;
                var d = R(), e = yi(a), f = mh(d, e);
                f.tag = 1;
                f.payload = b;
                void 0 !== c && null !== c && (f.callback = c);
                b = nh(a, f, e);
                null !== b && (gi(b, a, e, d), oh(b, a, e));
            },
            enqueueForceUpdate: function(a, b) {
                a = a._reactInternals;
                var c = R(), d = yi(a), e = mh(c, d);
                e.tag = 2;
                void 0 !== b && null !== b && (e.callback = b);
                b = nh(a, e, d);
                null !== b && (gi(b, a, d, c), oh(b, a, d));
            }
        };
        function Fi(a, b, c, d, e, f, g) {
            a = a.stateNode;
            return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
        }
        function Gi(a, b, c) {
            var d = false, e = Vf;
            var f = b.contextType;
            "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, 
            f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
            b = new b(c, f);
            a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
            b.updater = Ei;
            a.stateNode = b;
            b._reactInternals = a;
            d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
            return b;
        }
        function Hi(a, b, c, d) {
            a = b.state;
            "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
            "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
            b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
        }
        function Ii(a, b, c, d) {
            var e = a.stateNode;
            e.props = c;
            e.state = a.memoizedState;
            e.refs = {};
            kh(a);
            var f = b.contextType;
            "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, 
            e.context = Yf(a, f));
            e.state = a.memoizedState;
            f = b.getDerivedStateFromProps;
            "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
            "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, 
            "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), 
            b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
            "function" === typeof e.componentDidMount && (a.flags |= 4194308);
        }
        function Ji(a, b) {
            try {
                var c = "", d = b;
                do {
                    c += Pa(d), d = d.return;
                } while (d);
                var e = c;
            } catch (f) {
                e = "\nError generating stack: " + f.message + "\n" + f.stack;
            }
            return {
                value: a,
                source: b,
                stack: e,
                digest: null
            };
        }
        function Ki(a, b, c) {
            return {
                value: a,
                source: null,
                stack: null != c ? c : null,
                digest: null != b ? b : null
            };
        }
        function Li(a, b) {
            try {
                console.error(b.value);
            } catch (c) {
                setTimeout((function() {
                    throw c;
                }));
            }
        }
        var Mi = "function" === typeof WeakMap ? WeakMap : Map;
        function Ni(a, b, c) {
            c = mh(-1, c);
            c.tag = 3;
            c.payload = {
                element: null
            };
            var d = b.value;
            c.callback = function() {
                Oi || (Oi = true, Pi = d);
                Li(a, b);
            };
            return c;
        }
        function Qi(a, b, c) {
            c = mh(-1, c);
            c.tag = 3;
            var d = a.type.getDerivedStateFromError;
            if ("function" === typeof d) {
                var e = b.value;
                c.payload = function() {
                    return d(e);
                };
                c.callback = function() {
                    Li(a, b);
                };
            }
            var f = a.stateNode;
            null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
                Li(a, b);
                "function" !== typeof d && (null === Ri ? Ri = new Set([ this ]) : Ri.add(this));
                var c = b.stack;
                this.componentDidCatch(b.value, {
                    componentStack: null !== c ? c : ""
                });
            });
            return c;
        }
        function Si(a, b, c) {
            var d = a.pingCache;
            if (null === d) {
                d = a.pingCache = new Mi;
                var e = new Set;
                d.set(b, e);
            } else e = d.get(b), void 0 === e && (e = new Set, d.set(b, e));
            e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
        }
        function Ui(a) {
            do {
                var b;
                if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
                if (b) return a;
                a = a.return;
            } while (null !== a);
            return null;
        }
        function Vi(a, b, c, d, e) {
            if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, 
            c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), 
            b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
            a.flags |= 65536;
            a.lanes = e;
            return a;
        }
        var Wi = ua.ReactCurrentOwner, dh = false;
        function Xi(a, b, c, d) {
            b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
        }
        function Yi(a, b, c, d, e) {
            c = c.render;
            var f = b.ref;
            ch(b, e);
            d = Nh(a, b, c, d, f, e);
            c = Sh();
            if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, 
            Zi(a, b, e);
            I && c && vg(b);
            b.flags |= 1;
            Xi(a, b, d, e);
            return b.child;
        }
        function $i(a, b, c, d, e) {
            if (null === a) {
                var f = c.type;
                if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, 
                b.type = f, bj(a, b, f, d, e);
                a = Rg(c.type, null, d, b, b.mode, e);
                a.ref = b.ref;
                a.return = b;
                return b.child = a;
            }
            f = a.child;
            if (0 === (a.lanes & e)) {
                var g = f.memoizedProps;
                c = c.compare;
                c = null !== c ? c : Ie;
                if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
            }
            b.flags |= 1;
            a = Pg(f, d);
            a.ref = b.ref;
            a.return = b;
            return b.child = a;
        }
        function bj(a, b, c, d, e) {
            if (null !== a) {
                var f = a.memoizedProps;
                if (Ie(f, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true); else return b.lanes = a.lanes, 
                Zi(a, b, e);
            }
            return cj(a, b, c, d, e);
        }
        function dj(a, b, c) {
            var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
            if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, G(ej, fj), fj |= c; else {
                if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, 
                b.memoizedState = {
                    baseLanes: a,
                    cachePool: null,
                    transitions: null
                }, b.updateQueue = null, G(ej, fj), fj |= a, null;
                b.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                };
                d = null !== f ? f.baseLanes : c;
                G(ej, fj);
                fj |= d;
            } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), 
            fj |= d;
            Xi(a, b, e, c);
            return b.child;
        }
        function gj(a, b) {
            var c = b.ref;
            if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
        }
        function cj(a, b, c, d, e) {
            var f = Zf(c) ? Xf : H.current;
            f = Yf(b, f);
            ch(b, e);
            c = Nh(a, b, c, d, f, e);
            d = Sh();
            if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, 
            Zi(a, b, e);
            I && d && vg(b);
            b.flags |= 1;
            Xi(a, b, c, e);
            return b.child;
        }
        function hj(a, b, c, d, e) {
            if (Zf(c)) {
                var f = true;
                cg(b);
            } else f = false;
            ch(b, e);
            if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true; else if (null === a) {
                var g = b.stateNode, h = b.memoizedProps;
                g.props = h;
                var k = g.context, l = c.contextType;
                "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
                var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
                q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
                jh = false;
                var r = b.memoizedState;
                g.state = r;
                qh(b, d, g, e);
                k = b.memoizedState;
                h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), 
                k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), 
                "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), 
                "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), 
                b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, 
                d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
            } else {
                g = b.stateNode;
                lh(a, b);
                h = b.memoizedProps;
                l = b.type === b.elementType ? h : Ci(b.type, h);
                g.props = l;
                q = b.pendingProps;
                r = g.context;
                k = c.contextType;
                "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
                var y = c.getDerivedStateFromProps;
                (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
                jh = false;
                r = b.memoizedState;
                g.state = r;
                qh(b, d, g, e);
                var n = b.memoizedState;
                h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), 
                n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), 
                "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), 
                "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), 
                "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), 
                b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, 
                d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), 
                "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), 
                d = false);
            }
            return jj(a, b, c, d, f, e);
        }
        function jj(a, b, c, d, e, f) {
            gj(a, b);
            var g = 0 !== (b.flags & 128);
            if (!d && !g) return e && dg(b, c, false), Zi(a, b, f);
            d = b.stateNode;
            Wi.current = b;
            var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
            b.flags |= 1;
            null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
            b.memoizedState = d.state;
            e && dg(b, c, true);
            return b.child;
        }
        function kj(a) {
            var b = a.stateNode;
            b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
            yh(a, b.containerInfo);
        }
        function lj(a, b, c, d, e) {
            Ig();
            Jg(e);
            b.flags |= 256;
            Xi(a, b, c, d);
            return b.child;
        }
        var mj = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0
        };
        function nj(a) {
            return {
                baseLanes: a,
                cachePool: null,
                transitions: null
            };
        }
        function oj(a, b, c) {
            var d = b.pendingProps, e = L.current, f = false, g = 0 !== (b.flags & 128), h;
            (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
            if (h) f = true, b.flags &= -129; else if (null === a || null !== a.memoizedState) e |= 1;
            G(L, e & 1);
            if (null === a) {
                Eg(b);
                a = b.memoizedState;
                if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, 
                null;
                g = d.children;
                a = d.fallback;
                return f ? (d = b.mode, f = b.child, g = {
                    mode: "hidden",
                    children: g
                }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), 
                a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), 
                b.memoizedState = mj, a) : qj(b, g);
            }
            e = a.memoizedState;
            if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
            if (f) {
                f = d.fallback;
                g = b.mode;
                e = a.child;
                h = e.sibling;
                var k = {
                    mode: "hidden",
                    children: d.children
                };
                0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, 
                b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
                null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
                f.return = b;
                d.return = b;
                d.sibling = f;
                b.child = d;
                d = f;
                f = b.child;
                g = a.child.memoizedState;
                g = null === g ? nj(c) : {
                    baseLanes: g.baseLanes | c,
                    cachePool: null,
                    transitions: g.transitions
                };
                f.memoizedState = g;
                f.childLanes = a.childLanes & ~c;
                b.memoizedState = mj;
                return d;
            }
            f = a.child;
            a = f.sibling;
            d = Pg(f, {
                mode: "visible",
                children: d.children
            });
            0 === (b.mode & 1) && (d.lanes = c);
            d.return = b;
            d.sibling = null;
            null !== a && (c = b.deletions, null === c ? (b.deletions = [ a ], b.flags |= 16) : c.push(a));
            b.child = d;
            b.memoizedState = null;
            return d;
        }
        function qj(a, b) {
            b = pj({
                mode: "visible",
                children: b
            }, a.mode, 0, null);
            b.return = a;
            return a.child = b;
        }
        function sj(a, b, c, d) {
            null !== d && Jg(d);
            Ug(b, a.child, null, c);
            a = qj(b, b.pendingProps.children);
            a.flags |= 2;
            b.memoizedState = null;
            return a;
        }
        function rj(a, b, c, d, e, f, g) {
            if (c) {
                if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
                if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
                f = d.fallback;
                e = b.mode;
                d = pj({
                    mode: "visible",
                    children: d.children
                }, e, 0, null);
                f = Tg(f, e, g, null);
                f.flags |= 2;
                d.return = b;
                f.return = b;
                d.sibling = f;
                b.child = d;
                0 !== (b.mode & 1) && Ug(b, a.child, null, g);
                b.child.memoizedState = nj(g);
                b.memoizedState = mj;
                return f;
            }
            if (0 === (b.mode & 1)) return sj(a, b, g, null);
            if ("$!" === e.data) {
                d = e.nextSibling && e.nextSibling.dataset;
                if (d) var h = d.dgst;
                d = h;
                f = Error(p(419));
                d = Ki(f, d, void 0);
                return sj(a, b, g, d);
            }
            h = 0 !== (g & a.childLanes);
            if (dh || h) {
                d = Q;
                if (null !== d) {
                    switch (g & -g) {
                      case 4:
                        e = 2;
                        break;

                      case 16:
                        e = 8;
                        break;

                      case 64:
                      case 128:
                      case 256:
                      case 512:
                      case 1024:
                      case 2048:
                      case 4096:
                      case 8192:
                      case 16384:
                      case 32768:
                      case 65536:
                      case 131072:
                      case 262144:
                      case 524288:
                      case 1048576:
                      case 2097152:
                      case 4194304:
                      case 8388608:
                      case 16777216:
                      case 33554432:
                      case 67108864:
                        e = 32;
                        break;

                      case 536870912:
                        e = 268435456;
                        break;

                      default:
                        e = 0;
                    }
                    e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
                    0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
                }
                tj();
                d = Ki(Error(p(421)));
                return sj(a, b, g, d);
            }
            if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), 
            e._reactRetry = b, null;
            a = f.treeContext;
            yg = Lf(e.nextSibling);
            xg = b;
            I = true;
            zg = null;
            null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, 
            qg = b);
            b = qj(b, d.children);
            b.flags |= 4096;
            return b;
        }
        function vj(a, b, c) {
            a.lanes |= b;
            var d = a.alternate;
            null !== d && (d.lanes |= b);
            bh(a.return, b, c);
        }
        function wj(a, b, c, d, e) {
            var f = a.memoizedState;
            null === f ? a.memoizedState = {
                isBackwards: b,
                rendering: null,
                renderingStartTime: 0,
                last: d,
                tail: c,
                tailMode: e
            } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, 
            f.tail = c, f.tailMode = e);
        }
        function xj(a, b, c) {
            var d = b.pendingProps, e = d.revealOrder, f = d.tail;
            Xi(a, b, d.children, c);
            d = L.current;
            if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128; else {
                if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
                    if (13 === a.tag) null !== a.memoizedState && vj(a, c, b); else if (19 === a.tag) vj(a, c, b); else if (null !== a.child) {
                        a.child.return = a;
                        a = a.child;
                        continue;
                    }
                    if (a === b) break a;
                    for (;null === a.sibling; ) {
                        if (null === a.return || a.return === b) break a;
                        a = a.return;
                    }
                    a.sibling.return = a.return;
                    a = a.sibling;
                }
                d &= 1;
            }
            G(L, d);
            if (0 === (b.mode & 1)) b.memoizedState = null; else switch (e) {
              case "forwards":
                c = b.child;
                for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), 
                c = c.sibling;
                c = e;
                null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
                wj(b, false, e, c, f);
                break;

              case "backwards":
                c = null;
                e = b.child;
                for (b.child = null; null !== e; ) {
                    a = e.alternate;
                    if (null !== a && null === Ch(a)) {
                        b.child = e;
                        break;
                    }
                    a = e.sibling;
                    e.sibling = c;
                    c = e;
                    e = a;
                }
                wj(b, true, c, null, f);
                break;

              case "together":
                wj(b, false, null, null, void 0);
                break;

              default:
                b.memoizedState = null;
            }
            return b.child;
        }
        function ij(a, b) {
            0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
        }
        function Zi(a, b, c) {
            null !== a && (b.dependencies = a.dependencies);
            rh |= b.lanes;
            if (0 === (c & b.childLanes)) return null;
            if (null !== a && b.child !== a.child) throw Error(p(153));
            if (null !== b.child) {
                a = b.child;
                c = Pg(a, a.pendingProps);
                b.child = c;
                for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), 
                c.return = b;
                c.sibling = null;
            }
            return b.child;
        }
        function yj(a, b, c) {
            switch (b.tag) {
              case 3:
                kj(b);
                Ig();
                break;

              case 5:
                Ah(b);
                break;

              case 1:
                Zf(b.type) && cg(b);
                break;

              case 4:
                yh(b, b.stateNode.containerInfo);
                break;

              case 10:
                var d = b.type._context, e = b.memoizedProps.value;
                G(Wg, d._currentValue);
                d._currentValue = e;
                break;

              case 13:
                d = b.memoizedState;
                if (null !== d) {
                    if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
                    if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
                    G(L, L.current & 1);
                    a = Zi(a, b, c);
                    return null !== a ? a.sibling : null;
                }
                G(L, L.current & 1);
                break;

              case 19:
                d = 0 !== (c & b.childLanes);
                if (0 !== (a.flags & 128)) {
                    if (d) return xj(a, b, c);
                    b.flags |= 128;
                }
                e = b.memoizedState;
                null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
                G(L, L.current);
                if (d) break; else return null;

              case 22:
              case 23:
                return b.lanes = 0, dj(a, b, c);
            }
            return Zi(a, b, c);
        }
        var zj, Aj, Bj, Cj;
        zj = function(a, b) {
            for (var c = b.child; null !== c; ) {
                if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode); else if (4 !== c.tag && null !== c.child) {
                    c.child.return = c;
                    c = c.child;
                    continue;
                }
                if (c === b) break;
                for (;null === c.sibling; ) {
                    if (null === c.return || c.return === b) return;
                    c = c.return;
                }
                c.sibling.return = c.return;
                c = c.sibling;
            }
        };
        Aj = function() {};
        Bj = function(a, b, c, d) {
            var e = a.memoizedProps;
            if (e !== d) {
                a = b.stateNode;
                xh(uh.current);
                var f = null;
                switch (c) {
                  case "input":
                    e = Ya(a, e);
                    d = Ya(a, d);
                    f = [];
                    break;

                  case "select":
                    e = A({}, e, {
                        value: void 0
                    });
                    d = A({}, d, {
                        value: void 0
                    });
                    f = [];
                    break;

                  case "textarea":
                    e = gb(a, e);
                    d = gb(a, d);
                    f = [];
                    break;

                  default:
                    "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
                }
                ub(c, d);
                var g;
                c = null;
                for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
                    var h = e[l];
                    for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
                } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
                for (l in d) {
                    var k = d[l];
                    h = null != e ? e[l] : void 0;
                    if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
                        for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), 
                        c[g] = "");
                        for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
                    } else c || (f || (f = []), f.push(l, c)), c = k; else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, 
                    h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), 
                    f || h === k || (f = [])) : (f = f || []).push(l, k));
                }
                c && (f = f || []).push("style", c);
                var l = f;
                if (b.updateQueue = l) b.flags |= 4;
            }
        };
        Cj = function(a, b, c, d) {
            c !== d && (b.flags |= 4);
        };
        function Dj(a, b) {
            if (!I) switch (a.tailMode) {
              case "hidden":
                b = a.tail;
                for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
                null === c ? a.tail = null : c.sibling = null;
                break;

              case "collapsed":
                c = a.tail;
                for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
                null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
            }
        }
        function S(a) {
            var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
            if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, 
            d |= e.flags & 14680064, e.return = a, e = e.sibling; else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, 
            d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
            a.subtreeFlags |= d;
            a.childLanes = c;
            return b;
        }
        function Ej(a, b, c) {
            var d = b.pendingProps;
            wg(b);
            switch (b.tag) {
              case 2:
              case 16:
              case 15:
              case 0:
              case 11:
              case 7:
              case 8:
              case 12:
              case 9:
              case 14:
                return S(b), null;

              case 1:
                return Zf(b.type) && $f(), S(b), null;

              case 3:
                d = b.stateNode;
                zh();
                E(Wf);
                E(H);
                Eh();
                d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
                if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, 
                null !== zg && (Fj(zg), zg = null));
                Aj(a, b);
                S(b);
                return null;

              case 5:
                Bh(b);
                var e = xh(wh.current);
                c = b.type;
                if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, 
                b.flags |= 2097152); else {
                    if (!d) {
                        if (null === b.stateNode) throw Error(p(166));
                        S(b);
                        return null;
                    }
                    a = xh(uh.current);
                    if (Gg(b)) {
                        d = b.stateNode;
                        c = b.type;
                        var f = b.memoizedProps;
                        d[Of] = b;
                        d[Pf] = f;
                        a = 0 !== (b.mode & 1);
                        switch (c) {
                          case "dialog":
                            D("cancel", d);
                            D("close", d);
                            break;

                          case "iframe":
                          case "object":
                          case "embed":
                            D("load", d);
                            break;

                          case "video":
                          case "audio":
                            for (e = 0; e < lf.length; e++) D(lf[e], d);
                            break;

                          case "source":
                            D("error", d);
                            break;

                          case "img":
                          case "image":
                          case "link":
                            D("error", d);
                            D("load", d);
                            break;

                          case "details":
                            D("toggle", d);
                            break;

                          case "input":
                            Za(d, f);
                            D("invalid", d);
                            break;

                          case "select":
                            d._wrapperState = {
                                wasMultiple: !!f.multiple
                            };
                            D("invalid", d);
                            break;

                          case "textarea":
                            hb(d, f), D("invalid", d);
                        }
                        ub(c, f);
                        e = null;
                        for (var g in f) if (f.hasOwnProperty(g)) {
                            var h = f[g];
                            "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), 
                            e = [ "children", h ]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), 
                            e = [ "children", "" + h ]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                        }
                        switch (c) {
                          case "input":
                            Va(d);
                            db(d, f, true);
                            break;

                          case "textarea":
                            Va(d);
                            jb(d);
                            break;

                          case "select":
                          case "option":
                            break;

                          default:
                            "function" === typeof f.onClick && (d.onclick = Bf);
                        }
                        d = e;
                        b.updateQueue = d;
                        null !== d && (b.flags |= 4);
                    } else {
                        g = 9 === e.nodeType ? e : e.ownerDocument;
                        "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                        "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), 
                        a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
                            is: d.is
                        }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                        a[Of] = b;
                        a[Pf] = d;
                        zj(a, b, false, false);
                        b.stateNode = a;
                        a: {
                            g = vb(c, d);
                            switch (c) {
                              case "dialog":
                                D("cancel", a);
                                D("close", a);
                                e = d;
                                break;

                              case "iframe":
                              case "object":
                              case "embed":
                                D("load", a);
                                e = d;
                                break;

                              case "video":
                              case "audio":
                                for (e = 0; e < lf.length; e++) D(lf[e], a);
                                e = d;
                                break;

                              case "source":
                                D("error", a);
                                e = d;
                                break;

                              case "img":
                              case "image":
                              case "link":
                                D("error", a);
                                D("load", a);
                                e = d;
                                break;

                              case "details":
                                D("toggle", a);
                                e = d;
                                break;

                              case "input":
                                Za(a, d);
                                e = Ya(a, d);
                                D("invalid", a);
                                break;

                              case "option":
                                e = d;
                                break;

                              case "select":
                                a._wrapperState = {
                                    wasMultiple: !!d.multiple
                                };
                                e = A({}, d, {
                                    value: void 0
                                });
                                D("invalid", a);
                                break;

                              case "textarea":
                                hb(a, d);
                                e = gb(a, d);
                                D("invalid", a);
                                break;

                              default:
                                e = d;
                            }
                            ub(c, e);
                            h = e;
                            for (f in h) if (h.hasOwnProperty(f)) {
                                var k = h[f];
                                "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, 
                                null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
                            }
                            switch (c) {
                              case "input":
                                Va(a);
                                db(a, d, false);
                                break;

                              case "textarea":
                                Va(a);
                                jb(a);
                                break;

                              case "option":
                                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                                break;

                              case "select":
                                a.multiple = !!d.multiple;
                                f = d.value;
                                null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, true);
                                break;

                              default:
                                "function" === typeof e.onClick && (a.onclick = Bf);
                            }
                            switch (c) {
                              case "button":
                              case "input":
                              case "select":
                              case "textarea":
                                d = !!d.autoFocus;
                                break a;

                              case "img":
                                d = true;
                                break a;

                              default:
                                d = false;
                            }
                        }
                        d && (b.flags |= 4);
                    }
                    null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
                }
                S(b);
                return null;

              case 6:
                if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d); else {
                    if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
                    c = xh(wh.current);
                    xh(uh.current);
                    if (Gg(b)) {
                        d = b.stateNode;
                        c = b.memoizedProps;
                        d[Of] = b;
                        if (f = d.nodeValue !== c) if (a = xg, null !== a) switch (a.tag) {
                          case 3:
                            Af(d.nodeValue, c, 0 !== (a.mode & 1));
                            break;

                          case 5:
                            true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                        }
                        f && (b.flags |= 4);
                    } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, 
                    b.stateNode = d;
                }
                S(b);
                return null;

              case 13:
                E(L);
                d = b.memoizedState;
                if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
                    if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), 
                    b.flags |= 98560, f = false; else if (f = Gg(b), null !== d && null !== d.dehydrated) {
                        if (null === a) {
                            if (!f) throw Error(p(318));
                            f = b.memoizedState;
                            f = null !== f ? f.dehydrated : null;
                            if (!f) throw Error(p(317));
                            f[Of] = b;
                        } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                        S(b);
                        f = false;
                    } else null !== zg && (Fj(zg), zg = null), f = true;
                    if (!f) return b.flags & 65536 ? b : null;
                }
                if (0 !== (b.flags & 128)) return b.lanes = c, b;
                d = null !== d;
                d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
                null !== b.updateQueue && (b.flags |= 4);
                S(b);
                return null;

              case 4:
                return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;

              case 10:
                return ah(b.type._context), S(b), null;

              case 17:
                return Zf(b.type) && $f(), S(b), null;

              case 19:
                E(L);
                f = b.memoizedState;
                if (null === f) return S(b), null;
                d = 0 !== (b.flags & 128);
                g = f.rendering;
                if (null === g) if (d) Dj(f, false); else {
                    if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
                        g = Ch(a);
                        if (null !== g) {
                            b.flags |= 128;
                            Dj(f, false);
                            d = g.updateQueue;
                            null !== d && (b.updateQueue = d, b.flags |= 4);
                            b.subtreeFlags = 0;
                            d = c;
                            for (c = b.child; null !== c; ) f = c, a = d, f.flags &= 14680066, g = f.alternate, 
                            null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, 
                            f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, 
                            f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, 
                            f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, 
                            f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
                                lanes: a.lanes,
                                firstContext: a.firstContext
                            }), c = c.sibling;
                            G(L, L.current & 1 | 2);
                            return b.child;
                        }
                        a = a.sibling;
                    }
                    null !== f.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
                } else {
                    if (!d) if (a = Ch(g), null !== a) {
                        if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, 
                        b.flags |= 4), Dj(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), 
                        null;
                    } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, 
                    d = true, Dj(f, false), b.lanes = 4194304);
                    f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, 
                    f.last = g);
                }
                if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), 
                b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
                S(b);
                return null;

              case 22:
              case 23:
                return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), 
                d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), 
                null;

              case 24:
                return null;

              case 25:
                return null;
            }
            throw Error(p(156, b.tag));
        }
        function Ij(a, b) {
            wg(b);
            switch (b.tag) {
              case 1:
                return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, 
                b) : null;

              case 3:
                return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, 
                b) : null;

              case 5:
                return Bh(b), null;

              case 13:
                E(L);
                a = b.memoizedState;
                if (null !== a && null !== a.dehydrated) {
                    if (null === b.alternate) throw Error(p(340));
                    Ig();
                }
                a = b.flags;
                return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;

              case 19:
                return E(L), null;

              case 4:
                return zh(), null;

              case 10:
                return ah(b.type._context), null;

              case 22:
              case 23:
                return Hj(), null;

              case 24:
                return null;

              default:
                return null;
            }
        }
        var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
        function Lj(a, b) {
            var c = a.ref;
            if (null !== c) if ("function" === typeof c) try {
                c(null);
            } catch (d) {
                W(a, b, d);
            } else c.current = null;
        }
        function Mj(a, b, c) {
            try {
                c();
            } catch (d) {
                W(a, b, d);
            }
        }
        var Nj = false;
        function Oj(a, b) {
            Cf = dd;
            a = Me();
            if (Ne(a)) {
                if ("selectionStart" in a) var c = {
                    start: a.selectionStart,
                    end: a.selectionEnd
                }; else a: {
                    c = (c = a.ownerDocument) && c.defaultView || window;
                    var d = c.getSelection && c.getSelection();
                    if (d && 0 !== d.rangeCount) {
                        c = d.anchorNode;
                        var e = d.anchorOffset, f = d.focusNode;
                        d = d.focusOffset;
                        try {
                            c.nodeType, f.nodeType;
                        } catch (F) {
                            c = null;
                            break a;
                        }
                        var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
                        b: for (;;) {
                            for (var y; ;) {
                                q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                                q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                                3 === q.nodeType && (g += q.nodeValue.length);
                                if (null === (y = q.firstChild)) break;
                                r = q;
                                q = y;
                            }
                            for (;;) {
                                if (q === a) break b;
                                r === c && ++l === e && (h = g);
                                r === f && ++m === d && (k = g);
                                if (null !== (y = q.nextSibling)) break;
                                q = r;
                                r = q.parentNode;
                            }
                            q = y;
                        }
                        c = -1 === h || -1 === k ? null : {
                            start: h,
                            end: k
                        };
                    } else c = null;
                }
                c = c || {
                    start: 0,
                    end: 0
                };
            } else c = null;
            Df = {
                focusedElem: a,
                selectionRange: c
            };
            dd = false;
            for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, 
            V = a; else for (;null !== V; ) {
                b = V;
                try {
                    var n = b.alternate;
                    if (0 !== (b.flags & 1024)) switch (b.tag) {
                      case 0:
                      case 11:
                      case 15:
                        break;

                      case 1:
                        if (null !== n) {
                            var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
                            x.__reactInternalSnapshotBeforeUpdate = w;
                        }
                        break;

                      case 3:
                        var u = b.stateNode.containerInfo;
                        1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                        break;

                      case 5:
                      case 6:
                      case 4:
                      case 17:
                        break;

                      default:
                        throw Error(p(163));
                    }
                } catch (F) {
                    W(b, b.return, F);
                }
                a = b.sibling;
                if (null !== a) {
                    a.return = b.return;
                    V = a;
                    break;
                }
                V = b.return;
            }
            n = Nj;
            Nj = false;
            return n;
        }
        function Pj(a, b, c) {
            var d = b.updateQueue;
            d = null !== d ? d.lastEffect : null;
            if (null !== d) {
                var e = d = d.next;
                do {
                    if ((e.tag & a) === a) {
                        var f = e.destroy;
                        e.destroy = void 0;
                        void 0 !== f && Mj(b, c, f);
                    }
                    e = e.next;
                } while (e !== d);
            }
        }
        function Qj(a, b) {
            b = b.updateQueue;
            b = null !== b ? b.lastEffect : null;
            if (null !== b) {
                var c = b = b.next;
                do {
                    if ((c.tag & a) === a) {
                        var d = c.create;
                        c.destroy = d();
                    }
                    c = c.next;
                } while (c !== b);
            }
        }
        function Rj(a) {
            var b = a.ref;
            if (null !== b) {
                var c = a.stateNode;
                switch (a.tag) {
                  case 5:
                    a = c;
                    break;

                  default:
                    a = c;
                }
                "function" === typeof b ? b(a) : b.current = a;
            }
        }
        function Sj(a) {
            var b = a.alternate;
            null !== b && (a.alternate = null, Sj(b));
            a.child = null;
            a.deletions = null;
            a.sibling = null;
            5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], 
            delete b[Qf], delete b[Rf]));
            a.stateNode = null;
            a.return = null;
            a.dependencies = null;
            a.memoizedProps = null;
            a.memoizedState = null;
            a.pendingProps = null;
            a.stateNode = null;
            a.updateQueue = null;
        }
        function Tj(a) {
            return 5 === a.tag || 3 === a.tag || 4 === a.tag;
        }
        function Uj(a) {
            a: for (;;) {
                for (;null === a.sibling; ) {
                    if (null === a.return || Tj(a.return)) return null;
                    a = a.return;
                }
                a.sibling.return = a.return;
                for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
                    if (a.flags & 2) continue a;
                    if (null === a.child || 4 === a.tag) continue a; else a.child.return = a, a = a.child;
                }
                if (!(a.flags & 2)) return a.stateNode;
            }
        }
        function Vj(a, b, c) {
            var d = a.tag;
            if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, 
            b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf)); else if (4 !== d && (a = a.child, 
            null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
        }
        function Wj(a, b, c) {
            var d = a.tag;
            if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a); else if (4 !== d && (a = a.child, 
            null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
        }
        var X = null, Xj = false;
        function Yj(a, b, c) {
            for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
        }
        function Zj(a, b, c) {
            if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
                lc.onCommitFiberUnmount(kc, c);
            } catch (h) {}
            switch (c.tag) {
              case 5:
                U || Lj(c, b);

              case 6:
                var d = X, e = Xj;
                X = null;
                Yj(a, b, c);
                X = d;
                Xj = e;
                null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
                break;

              case 18:
                null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), 
                bd(a)) : Kf(X, c.stateNode));
                break;

              case 4:
                d = X;
                e = Xj;
                X = c.stateNode.containerInfo;
                Xj = true;
                Yj(a, b, c);
                X = d;
                Xj = e;
                break;

              case 0:
              case 11:
              case 14:
              case 15:
                if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
                    e = d = d.next;
                    do {
                        var f = e, g = f.destroy;
                        f = f.tag;
                        void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
                        e = e.next;
                    } while (e !== d);
                }
                Yj(a, b, c);
                break;

              case 1:
                if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
                    d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
                } catch (h) {
                    W(c, b, h);
                }
                Yj(a, b, c);
                break;

              case 21:
                Yj(a, b, c);
                break;

              case 22:
                c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
                break;

              default:
                Yj(a, b, c);
            }
        }
        function ak(a) {
            var b = a.updateQueue;
            if (null !== b) {
                a.updateQueue = null;
                var c = a.stateNode;
                null === c && (c = a.stateNode = new Kj);
                b.forEach((function(b) {
                    var d = bk.bind(null, a, b);
                    c.has(b) || (c.add(b), b.then(d, d));
                }));
            }
        }
        function ck(a, b) {
            var c = b.deletions;
            if (null !== c) for (var d = 0; d < c.length; d++) {
                var e = c[d];
                try {
                    var f = a, g = b, h = g;
                    a: for (;null !== h; ) {
                        switch (h.tag) {
                          case 5:
                            X = h.stateNode;
                            Xj = !1;
                            break a;

                          case 3:
                            X = h.stateNode.containerInfo;
                            Xj = !0;
                            break a;

                          case 4:
                            X = h.stateNode.containerInfo;
                            Xj = !0;
                            break a;
                        }
                        h = h.return;
                    }
                    if (null === X) throw Error(p(160));
                    Zj(f, g, e);
                    X = null;
                    Xj = !1;
                    var k = e.alternate;
                    null !== k && (k.return = null);
                    e.return = null;
                } catch (l) {
                    W(e, b, l);
                }
            }
            if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
        }
        function dk(a, b) {
            var c = a.alternate, d = a.flags;
            switch (a.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ck(b, a);
                ek(a);
                if (d & 4) {
                    try {
                        Pj(3, a, a.return), Qj(3, a);
                    } catch (t) {
                        W(a, a.return, t);
                    }
                    try {
                        Pj(5, a, a.return);
                    } catch (t) {
                        W(a, a.return, t);
                    }
                }
                break;

              case 1:
                ck(b, a);
                ek(a);
                d & 512 && null !== c && Lj(c, c.return);
                break;

              case 5:
                ck(b, a);
                ek(a);
                d & 512 && null !== c && Lj(c, c.return);
                if (a.flags & 32) {
                    var e = a.stateNode;
                    try {
                        ob(e, "");
                    } catch (t) {
                        W(a, a.return, t);
                    }
                }
                if (d & 4 && (e = a.stateNode, null != e)) {
                    var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
                    a.updateQueue = null;
                    if (null !== k) try {
                        "input" === h && "radio" === f.type && null != f.name && ab(e, f);
                        vb(h, g);
                        var l = vb(h, f);
                        for (g = 0; g < k.length; g += 2) {
                            var m = k[g], q = k[g + 1];
                            "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
                        }
                        switch (h) {
                          case "input":
                            bb(e, f);
                            break;

                          case "textarea":
                            ib(e, f);
                            break;

                          case "select":
                            var r = e._wrapperState.wasMultiple;
                            e._wrapperState.wasMultiple = !!f.multiple;
                            var y = f.value;
                            null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
                        }
                        e[Pf] = f;
                    } catch (t) {
                        W(a, a.return, t);
                    }
                }
                break;

              case 6:
                ck(b, a);
                ek(a);
                if (d & 4) {
                    if (null === a.stateNode) throw Error(p(162));
                    e = a.stateNode;
                    f = a.memoizedProps;
                    try {
                        e.nodeValue = f;
                    } catch (t) {
                        W(a, a.return, t);
                    }
                }
                break;

              case 3:
                ck(b, a);
                ek(a);
                if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
                    bd(b.containerInfo);
                } catch (t) {
                    W(a, a.return, t);
                }
                break;

              case 4:
                ck(b, a);
                ek(a);
                break;

              case 13:
                ck(b, a);
                ek(a);
                e = a.child;
                e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
                d & 4 && ak(a);
                break;

              case 22:
                m = null !== c && null !== c.memoizedState;
                a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
                ek(a);
                if (d & 8192) {
                    l = null !== a.memoizedState;
                    if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
                        for (q = V = m; null !== V; ) {
                            r = V;
                            y = r.child;
                            switch (r.tag) {
                              case 0:
                              case 11:
                              case 14:
                              case 15:
                                Pj(4, r, r.return);
                                break;

                              case 1:
                                Lj(r, r.return);
                                var n = r.stateNode;
                                if ("function" === typeof n.componentWillUnmount) {
                                    d = r;
                                    c = r.return;
                                    try {
                                        b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                                    } catch (t) {
                                        W(d, c, t);
                                    }
                                }
                                break;

                              case 5:
                                Lj(r, r.return);
                                break;

                              case 22:
                                if (null !== r.memoizedState) {
                                    gk(q);
                                    continue;
                                }
                            }
                            null !== y ? (y.return = r, V = y) : gk(q);
                        }
                        m = m.sibling;
                    }
                    a: for (m = null, q = a; ;) {
                        if (5 === q.tag) {
                            if (null === m) {
                                m = q;
                                try {
                                    e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, 
                                    k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, 
                                    h.style.display = rb("display", g));
                                } catch (t) {
                                    W(a, a.return, t);
                                }
                            }
                        } else if (6 === q.tag) {
                            if (null === m) try {
                                q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                            } catch (t) {
                                W(a, a.return, t);
                            }
                        } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                            q.child.return = q;
                            q = q.child;
                            continue;
                        }
                        if (q === a) break a;
                        for (;null === q.sibling; ) {
                            if (null === q.return || q.return === a) break a;
                            m === q && (m = null);
                            q = q.return;
                        }
                        m === q && (m = null);
                        q.sibling.return = q.return;
                        q = q.sibling;
                    }
                }
                break;

              case 19:
                ck(b, a);
                ek(a);
                d & 4 && ak(a);
                break;

              case 21:
                break;

              default:
                ck(b, a), ek(a);
            }
        }
        function ek(a) {
            var b = a.flags;
            if (b & 2) {
                try {
                    a: {
                        for (var c = a.return; null !== c; ) {
                            if (Tj(c)) {
                                var d = c;
                                break a;
                            }
                            c = c.return;
                        }
                        throw Error(p(160));
                    }
                    switch (d.tag) {
                      case 5:
                        var e = d.stateNode;
                        d.flags & 32 && (ob(e, ""), d.flags &= -33);
                        var f = Uj(a);
                        Wj(a, f, e);
                        break;

                      case 3:
                      case 4:
                        var g = d.stateNode.containerInfo, h = Uj(a);
                        Vj(a, h, g);
                        break;

                      default:
                        throw Error(p(161));
                    }
                } catch (k) {
                    W(a, a.return, k);
                }
                a.flags &= -3;
            }
            b & 4096 && (a.flags &= -4097);
        }
        function hk(a, b, c) {
            V = a;
            ik(a);
        }
        function ik(a, b, c) {
            for (var d = 0 !== (a.mode & 1); null !== V; ) {
                var e = V, f = e.child;
                if (22 === e.tag && d) {
                    var g = null !== e.memoizedState || Jj;
                    if (!g) {
                        var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
                        h = Jj;
                        var l = U;
                        Jj = g;
                        if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, 
                        V = k) : jk(e);
                        for (;null !== f; ) V = f, ik(f), f = f.sibling;
                        V = e;
                        Jj = h;
                        U = l;
                    }
                    kk(a);
                } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a);
            }
        }
        function kk(a) {
            for (;null !== V; ) {
                var b = V;
                if (0 !== (b.flags & 8772)) {
                    var c = b.alternate;
                    try {
                        if (0 !== (b.flags & 8772)) switch (b.tag) {
                          case 0:
                          case 11:
                          case 15:
                            U || Qj(5, b);
                            break;

                          case 1:
                            var d = b.stateNode;
                            if (b.flags & 4 && !U) if (null === c) d.componentDidMount(); else {
                                var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                                d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                            }
                            var f = b.updateQueue;
                            null !== f && sh(b, f, d);
                            break;

                          case 3:
                            var g = b.updateQueue;
                            if (null !== g) {
                                c = null;
                                if (null !== b.child) switch (b.child.tag) {
                                  case 5:
                                    c = b.child.stateNode;
                                    break;

                                  case 1:
                                    c = b.child.stateNode;
                                }
                                sh(b, g, c);
                            }
                            break;

                          case 5:
                            var h = b.stateNode;
                            if (null === c && b.flags & 4) {
                                c = h;
                                var k = b.memoizedProps;
                                switch (b.type) {
                                  case "button":
                                  case "input":
                                  case "select":
                                  case "textarea":
                                    k.autoFocus && c.focus();
                                    break;

                                  case "img":
                                    k.src && (c.src = k.src);
                                }
                            }
                            break;

                          case 6:
                            break;

                          case 4:
                            break;

                          case 12:
                            break;

                          case 13:
                            if (null === b.memoizedState) {
                                var l = b.alternate;
                                if (null !== l) {
                                    var m = l.memoizedState;
                                    if (null !== m) {
                                        var q = m.dehydrated;
                                        null !== q && bd(q);
                                    }
                                }
                            }
                            break;

                          case 19:
                          case 17:
                          case 21:
                          case 22:
                          case 23:
                          case 25:
                            break;

                          default:
                            throw Error(p(163));
                        }
                        U || b.flags & 512 && Rj(b);
                    } catch (r) {
                        W(b, b.return, r);
                    }
                }
                if (b === a) {
                    V = null;
                    break;
                }
                c = b.sibling;
                if (null !== c) {
                    c.return = b.return;
                    V = c;
                    break;
                }
                V = b.return;
            }
        }
        function gk(a) {
            for (;null !== V; ) {
                var b = V;
                if (b === a) {
                    V = null;
                    break;
                }
                var c = b.sibling;
                if (null !== c) {
                    c.return = b.return;
                    V = c;
                    break;
                }
                V = b.return;
            }
        }
        function jk(a) {
            for (;null !== V; ) {
                var b = V;
                try {
                    switch (b.tag) {
                      case 0:
                      case 11:
                      case 15:
                        var c = b.return;
                        try {
                            Qj(4, b);
                        } catch (k) {
                            W(b, c, k);
                        }
                        break;

                      case 1:
                        var d = b.stateNode;
                        if ("function" === typeof d.componentDidMount) {
                            var e = b.return;
                            try {
                                d.componentDidMount();
                            } catch (k) {
                                W(b, e, k);
                            }
                        }
                        var f = b.return;
                        try {
                            Rj(b);
                        } catch (k) {
                            W(b, f, k);
                        }
                        break;

                      case 5:
                        var g = b.return;
                        try {
                            Rj(b);
                        } catch (k) {
                            W(b, g, k);
                        }
                    }
                } catch (k) {
                    W(b, b.return, k);
                }
                if (b === a) {
                    V = null;
                    break;
                }
                var h = b.sibling;
                if (null !== h) {
                    h.return = b.return;
                    V = h;
                    break;
                }
                V = b.return;
            }
        }
        var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
        function R() {
            return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
        }
        function yi(a) {
            if (0 === (a.mode & 1)) return 1;
            if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
            if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
            a = C;
            if (0 !== a) return a;
            a = window.event;
            a = void 0 === a ? 16 : jd(a.type);
            return a;
        }
        function gi(a, b, c, d) {
            if (50 < yk) throw yk = 0, zk = null, Error(p(185));
            Ac(a, c, d);
            if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), 
            Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
        }
        function Dk(a, b) {
            var c = a.callbackNode;
            wc(a, b);
            var d = uc(a, a === Q ? Z : 0);
            if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0; else if (b = d & -d, 
            a.callbackPriority !== b) {
                null != c && bc(c);
                if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf((function() {
                    0 === (K & 6) && jg();
                })), c = null; else {
                    switch (Dc(d)) {
                      case 1:
                        c = fc;
                        break;

                      case 4:
                        c = gc;
                        break;

                      case 16:
                        c = hc;
                        break;

                      case 536870912:
                        c = jc;
                        break;

                      default:
                        c = hc;
                    }
                    c = Fk(c, Gk.bind(null, a));
                }
                a.callbackPriority = b;
                a.callbackNode = c;
            }
        }
        function Gk(a, b) {
            Ak = -1;
            Bk = 0;
            if (0 !== (K & 6)) throw Error(p(327));
            var c = a.callbackNode;
            if (Hk() && a.callbackNode !== c) return null;
            var d = uc(a, a === Q ? Z : 0);
            if (0 === d) return null;
            if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d); else {
                b = d;
                var e = K;
                K |= 2;
                var f = Jk();
                if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
                do {
                    try {
                        Lk();
                        break;
                    } catch (h) {
                        Mk(a, h);
                    }
                } while (1);
                $g();
                mk.current = f;
                K = e;
                null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
            }
            if (0 !== b) {
                2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
                if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
                if (6 === b) Ck(a, d); else {
                    e = a.current.alternate;
                    if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, 
                    b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
                    a.finishedWork = e;
                    a.finishedLanes = d;
                    switch (b) {
                      case 0:
                      case 1:
                        throw Error(p(345));

                      case 2:
                        Pk(a, tk, uk);
                        break;

                      case 3:
                        Ck(a, d);
                        if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
                            if (0 !== uc(a, 0)) break;
                            e = a.suspendedLanes;
                            if ((e & d) !== d) {
                                R();
                                a.pingedLanes |= a.suspendedLanes & e;
                                break;
                            }
                            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                            break;
                        }
                        Pk(a, tk, uk);
                        break;

                      case 4:
                        Ck(a, d);
                        if ((d & 4194240) === d) break;
                        b = a.eventTimes;
                        for (e = -1; 0 < d; ) {
                            var g = 31 - oc(d);
                            f = 1 << g;
                            g = b[g];
                            g > e && (e = g);
                            d &= ~f;
                        }
                        d = e;
                        d = B() - d;
                        d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
                        if (10 < d) {
                            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                            break;
                        }
                        Pk(a, tk, uk);
                        break;

                      case 5:
                        Pk(a, tk, uk);
                        break;

                      default:
                        throw Error(p(329));
                    }
                }
            }
            Dk(a, B());
            return a.callbackNode === c ? Gk.bind(null, a) : null;
        }
        function Nk(a, b) {
            var c = sk;
            a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
            a = Ik(a, b);
            2 !== a && (b = tk, tk = c, null !== b && Fj(b));
            return a;
        }
        function Fj(a) {
            null === tk ? tk = a : tk.push.apply(tk, a);
        }
        function Ok(a) {
            for (var b = a; ;) {
                if (b.flags & 16384) {
                    var c = b.updateQueue;
                    if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
                        var e = c[d], f = e.getSnapshot;
                        e = e.value;
                        try {
                            if (!He(f(), e)) return !1;
                        } catch (g) {
                            return false;
                        }
                    }
                }
                c = b.child;
                if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c; else {
                    if (b === a) break;
                    for (;null === b.sibling; ) {
                        if (null === b.return || b.return === a) return true;
                        b = b.return;
                    }
                    b.sibling.return = b.return;
                    b = b.sibling;
                }
            }
            return true;
        }
        function Ck(a, b) {
            b &= ~rk;
            b &= ~qk;
            a.suspendedLanes |= b;
            a.pingedLanes &= ~b;
            for (a = a.expirationTimes; 0 < b; ) {
                var c = 31 - oc(b), d = 1 << c;
                a[c] = -1;
                b &= ~d;
            }
        }
        function Ek(a) {
            if (0 !== (K & 6)) throw Error(p(327));
            Hk();
            var b = uc(a, 0);
            if (0 === (b & 1)) return Dk(a, B()), null;
            var c = Ik(a, b);
            if (0 !== a.tag && 2 === c) {
                var d = xc(a);
                0 !== d && (b = d, c = Nk(a, d));
            }
            if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
            if (6 === c) throw Error(p(345));
            a.finishedWork = a.current.alternate;
            a.finishedLanes = b;
            Pk(a, tk, uk);
            Dk(a, B());
            return null;
        }
        function Qk(a, b) {
            var c = K;
            K |= 1;
            try {
                return a(b);
            } finally {
                K = c, 0 === K && (Gj = B() + 500, fg && jg());
            }
        }
        function Rk(a) {
            null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
            var b = K;
            K |= 1;
            var c = ok.transition, d = C;
            try {
                if (ok.transition = null, C = 1, a) return a();
            } finally {
                C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
            }
        }
        function Hj() {
            fj = ej.current;
            E(ej);
        }
        function Kk(a, b) {
            a.finishedWork = null;
            a.finishedLanes = 0;
            var c = a.timeoutHandle;
            -1 !== c && (a.timeoutHandle = -1, Gf(c));
            if (null !== Y) for (c = Y.return; null !== c; ) {
                var d = c;
                wg(d);
                switch (d.tag) {
                  case 1:
                    d = d.type.childContextTypes;
                    null !== d && void 0 !== d && $f();
                    break;

                  case 3:
                    zh();
                    E(Wf);
                    E(H);
                    Eh();
                    break;

                  case 5:
                    Bh(d);
                    break;

                  case 4:
                    zh();
                    break;

                  case 13:
                    E(L);
                    break;

                  case 19:
                    E(L);
                    break;

                  case 10:
                    ah(d.type._context);
                    break;

                  case 22:
                  case 23:
                    Hj();
                }
                c = c.return;
            }
            Q = a;
            Y = a = Pg(a.current, null);
            Z = fj = b;
            T = 0;
            pk = null;
            rk = qk = rh = 0;
            tk = sk = null;
            if (null !== fh) {
                for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
                    c.interleaved = null;
                    var e = d.next, f = c.pending;
                    if (null !== f) {
                        var g = f.next;
                        f.next = e;
                        d.next = g;
                    }
                    c.pending = d;
                }
                fh = null;
            }
            return a;
        }
        function Mk(a, b) {
            do {
                var c = Y;
                try {
                    $g();
                    Fh.current = Rh;
                    if (Ih) {
                        for (var d = M.memoizedState; null !== d; ) {
                            var e = d.queue;
                            null !== e && (e.pending = null);
                            d = d.next;
                        }
                        Ih = !1;
                    }
                    Hh = 0;
                    O = N = M = null;
                    Jh = !1;
                    Kh = 0;
                    nk.current = null;
                    if (null === c || null === c.return) {
                        T = 1;
                        pk = b;
                        Y = null;
                        break;
                    }
                    a: {
                        var f = a, g = c.return, h = c, k = b;
                        b = Z;
                        h.flags |= 32768;
                        if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                            var l = k, m = h, q = m.tag;
                            if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                                var r = m.alternate;
                                r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, 
                                m.memoizedState = null);
                            }
                            var y = Ui(g);
                            if (null !== y) {
                                y.flags &= -257;
                                Vi(y, g, h, f, b);
                                y.mode & 1 && Si(f, l, b);
                                b = y;
                                k = l;
                                var n = b.updateQueue;
                                if (null === n) {
                                    var t = new Set;
                                    t.add(k);
                                    b.updateQueue = t;
                                } else n.add(k);
                                break a;
                            } else {
                                if (0 === (b & 1)) {
                                    Si(f, l, b);
                                    tj();
                                    break a;
                                }
                                k = Error(p(426));
                            }
                        } else if (I && h.mode & 1) {
                            var J = Ui(g);
                            if (null !== J) {
                                0 === (J.flags & 65536) && (J.flags |= 256);
                                Vi(J, g, h, f, b);
                                Jg(Ji(k, h));
                                break a;
                            }
                        }
                        f = k = Ji(k, h);
                        4 !== T && (T = 2);
                        null === sk ? sk = [ f ] : sk.push(f);
                        f = g;
                        do {
                            switch (f.tag) {
                              case 3:
                                f.flags |= 65536;
                                b &= -b;
                                f.lanes |= b;
                                var x = Ni(f, k, b);
                                ph(f, x);
                                break a;

                              case 1:
                                h = k;
                                var w = f.type, u = f.stateNode;
                                if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                                    f.flags |= 65536;
                                    b &= -b;
                                    f.lanes |= b;
                                    var F = Qi(f, h, b);
                                    ph(f, F);
                                    break a;
                                }
                            }
                            f = f.return;
                        } while (null !== f);
                    }
                    Sk(c);
                } catch (na) {
                    b = na;
                    Y === c && null !== c && (Y = c = c.return);
                    continue;
                }
                break;
            } while (1);
        }
        function Jk() {
            var a = mk.current;
            mk.current = Rh;
            return null === a ? Rh : a;
        }
        function tj() {
            if (0 === T || 3 === T || 2 === T) T = 4;
            null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
        }
        function Ik(a, b) {
            var c = K;
            K |= 2;
            var d = Jk();
            if (Q !== a || Z !== b) uk = null, Kk(a, b);
            do {
                try {
                    Tk();
                    break;
                } catch (e) {
                    Mk(a, e);
                }
            } while (1);
            $g();
            K = c;
            mk.current = d;
            if (null !== Y) throw Error(p(261));
            Q = null;
            Z = 0;
            return T;
        }
        function Tk() {
            for (;null !== Y; ) Uk(Y);
        }
        function Lk() {
            for (;null !== Y && !cc(); ) Uk(Y);
        }
        function Uk(a) {
            var b = Vk(a.alternate, a, fj);
            a.memoizedProps = a.pendingProps;
            null === b ? Sk(a) : Y = b;
            nk.current = null;
        }
        function Sk(a) {
            var b = a;
            do {
                var c = b.alternate;
                a = b.return;
                if (0 === (b.flags & 32768)) {
                    if (c = Ej(c, b, fj), null !== c) {
                        Y = c;
                        return;
                    }
                } else {
                    c = Ij(c, b);
                    if (null !== c) {
                        c.flags &= 32767;
                        Y = c;
                        return;
                    }
                    if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null; else {
                        T = 6;
                        Y = null;
                        return;
                    }
                }
                b = b.sibling;
                if (null !== b) {
                    Y = b;
                    return;
                }
                Y = b = a;
            } while (null !== b);
            0 === T && (T = 5);
        }
        function Pk(a, b, c) {
            var d = C, e = ok.transition;
            try {
                ok.transition = null, C = 1, Wk(a, b, c, d);
            } finally {
                ok.transition = e, C = d;
            }
            return null;
        }
        function Wk(a, b, c, d) {
            do {
                Hk();
            } while (null !== wk);
            if (0 !== (K & 6)) throw Error(p(327));
            c = a.finishedWork;
            var e = a.finishedLanes;
            if (null === c) return null;
            a.finishedWork = null;
            a.finishedLanes = 0;
            if (c === a.current) throw Error(p(177));
            a.callbackNode = null;
            a.callbackPriority = 0;
            var f = c.lanes | c.childLanes;
            Bc(a, f);
            a === Q && (Y = Q = null, Z = 0);
            0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, (function() {
                Hk();
                return null;
            })));
            f = 0 !== (c.flags & 15990);
            if (0 !== (c.subtreeFlags & 15990) || f) {
                f = ok.transition;
                ok.transition = null;
                var g = C;
                C = 1;
                var h = K;
                K |= 4;
                nk.current = null;
                Oj(a, c);
                dk(c, a);
                Oe(Df);
                dd = !!Cf;
                Df = Cf = null;
                a.current = c;
                hk(c);
                dc();
                K = h;
                C = g;
                ok.transition = f;
            } else a.current = c;
            vk && (vk = false, wk = a, xk = e);
            f = a.pendingLanes;
            0 === f && (Ri = null);
            mc(c.stateNode);
            Dk(a, B());
            if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], 
            d(e.value, {
                componentStack: e.stack,
                digest: e.digest
            });
            if (Oi) throw Oi = false, a = Pi, Pi = null, a;
            0 !== (xk & 1) && 0 !== a.tag && Hk();
            f = a.pendingLanes;
            0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
            jg();
            return null;
        }
        function Hk() {
            if (null !== wk) {
                var a = Dc(xk), b = ok.transition, c = C;
                try {
                    ok.transition = null;
                    C = 16 > a ? 16 : a;
                    if (null === wk) var d = !1; else {
                        a = wk;
                        wk = null;
                        xk = 0;
                        if (0 !== (K & 6)) throw Error(p(331));
                        var e = K;
                        K |= 4;
                        for (V = a.current; null !== V; ) {
                            var f = V, g = f.child;
                            if (0 !== (V.flags & 16)) {
                                var h = f.deletions;
                                if (null !== h) {
                                    for (var k = 0; k < h.length; k++) {
                                        var l = h[k];
                                        for (V = l; null !== V; ) {
                                            var m = V;
                                            switch (m.tag) {
                                              case 0:
                                              case 11:
                                              case 15:
                                                Pj(8, m, f);
                                            }
                                            var q = m.child;
                                            if (null !== q) q.return = m, V = q; else for (;null !== V; ) {
                                                m = V;
                                                var r = m.sibling, y = m.return;
                                                Sj(m);
                                                if (m === l) {
                                                    V = null;
                                                    break;
                                                }
                                                if (null !== r) {
                                                    r.return = y;
                                                    V = r;
                                                    break;
                                                }
                                                V = y;
                                            }
                                        }
                                    }
                                    var n = f.alternate;
                                    if (null !== n) {
                                        var t = n.child;
                                        if (null !== t) {
                                            n.child = null;
                                            do {
                                                var J = t.sibling;
                                                t.sibling = null;
                                                t = J;
                                            } while (null !== t);
                                        }
                                    }
                                    V = f;
                                }
                            }
                            if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g; else b: for (;null !== V; ) {
                                f = V;
                                if (0 !== (f.flags & 2048)) switch (f.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                    Pj(9, f, f.return);
                                }
                                var x = f.sibling;
                                if (null !== x) {
                                    x.return = f.return;
                                    V = x;
                                    break b;
                                }
                                V = f.return;
                            }
                        }
                        var w = a.current;
                        for (V = w; null !== V; ) {
                            g = V;
                            var u = g.child;
                            if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u; else b: for (g = w; null !== V; ) {
                                h = V;
                                if (0 !== (h.flags & 2048)) try {
                                    switch (h.tag) {
                                      case 0:
                                      case 11:
                                      case 15:
                                        Qj(9, h);
                                    }
                                } catch (na) {
                                    W(h, h.return, na);
                                }
                                if (h === g) {
                                    V = null;
                                    break b;
                                }
                                var F = h.sibling;
                                if (null !== F) {
                                    F.return = h.return;
                                    V = F;
                                    break b;
                                }
                                V = h.return;
                            }
                        }
                        K = e;
                        jg();
                        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                            lc.onPostCommitFiberRoot(kc, a);
                        } catch (na) {}
                        d = !0;
                    }
                    return d;
                } finally {
                    C = c, ok.transition = b;
                }
            }
            return false;
        }
        function Xk(a, b, c) {
            b = Ji(c, b);
            b = Ni(a, b, 1);
            a = nh(a, b, 1);
            b = R();
            null !== a && (Ac(a, 1, b), Dk(a, b));
        }
        function W(a, b, c) {
            if (3 === a.tag) Xk(a, a, c); else for (;null !== b; ) {
                if (3 === b.tag) {
                    Xk(b, a, c);
                    break;
                } else if (1 === b.tag) {
                    var d = b.stateNode;
                    if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
                        a = Ji(c, a);
                        a = Qi(b, a, 1);
                        b = nh(b, a, 1);
                        a = R();
                        null !== b && (Ac(b, 1, a), Dk(b, a));
                        break;
                    }
                }
                b = b.return;
            }
        }
        function Ti(a, b, c) {
            var d = a.pingCache;
            null !== d && d.delete(b);
            b = R();
            a.pingedLanes |= a.suspendedLanes & c;
            Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
            Dk(a, b);
        }
        function Yk(a, b) {
            0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
            var c = R();
            a = ih(a, b);
            null !== a && (Ac(a, b, c), Dk(a, c));
        }
        function uj(a) {
            var b = a.memoizedState, c = 0;
            null !== b && (c = b.retryLane);
            Yk(a, c);
        }
        function bk(a, b) {
            var c = 0;
            switch (a.tag) {
              case 13:
                var d = a.stateNode;
                var e = a.memoizedState;
                null !== e && (c = e.retryLane);
                break;

              case 19:
                d = a.stateNode;
                break;

              default:
                throw Error(p(314));
            }
            null !== d && d.delete(b);
            Yk(a, c);
        }
        var Vk;
        Vk = function(a, b, c) {
            if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true; else {
                if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
                dh = 0 !== (a.flags & 131072) ? true : false;
            } else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
            b.lanes = 0;
            switch (b.tag) {
              case 2:
                var d = b.type;
                ij(a, b);
                a = b.pendingProps;
                var e = Yf(b, H.current);
                ch(b, c);
                e = Nh(null, b, d, a, e, c);
                var f = Sh();
                b.flags |= 1;
                "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, 
                b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, 
                b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), 
                e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f, c)) : (b.tag = 0, 
                I && f && vg(b), Xi(null, b, e, c), b = b.child);
                return b;

              case 16:
                d = b.elementType;
                a: {
                    ij(a, b);
                    a = b.pendingProps;
                    e = d._init;
                    d = e(d._payload);
                    b.type = d;
                    e = b.tag = Zk(d);
                    a = Ci(d, a);
                    switch (e) {
                      case 0:
                        b = cj(null, b, d, a, c);
                        break a;

                      case 1:
                        b = hj(null, b, d, a, c);
                        break a;

                      case 11:
                        b = Yi(null, b, d, a, c);
                        break a;

                      case 14:
                        b = $i(null, b, d, Ci(d.type, a), c);
                        break a;
                    }
                    throw Error(p(306, d, ""));
                }
                return b;

              case 0:
                return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);

              case 1:
                return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);

              case 3:
                a: {
                    kj(b);
                    if (null === a) throw Error(p(387));
                    d = b.pendingProps;
                    f = b.memoizedState;
                    e = f.element;
                    lh(a, b);
                    qh(b, d, null, c);
                    var g = b.memoizedState;
                    d = g.element;
                    if (f.isDehydrated) if (f = {
                        element: d,
                        isDehydrated: false,
                        cache: g.cache,
                        pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                        transitions: g.transitions
                    }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                        e = Ji(Error(p(423)), b);
                        b = lj(a, b, d, c, e);
                        break a;
                    } else if (d !== e) {
                        e = Ji(Error(p(424)), b);
                        b = lj(a, b, d, c, e);
                        break a;
                    } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, 
                    c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling; else {
                        Ig();
                        if (d === e) {
                            b = Zi(a, b, c);
                            break a;
                        }
                        Xi(a, b, d, c);
                    }
                    b = b.child;
                }
                return b;

              case 5:
                return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, 
                g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), 
                gj(a, b), Xi(a, b, g, c), b.child;

              case 6:
                return null === a && Eg(b), null;

              case 13:
                return oj(a, b, c);

              case 4:
                return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), 
                b.child;

              case 11:
                return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);

              case 7:
                return Xi(a, b, b.pendingProps, c), b.child;

              case 8:
                return Xi(a, b, b.pendingProps.children, c), b.child;

              case 12:
                return Xi(a, b, b.pendingProps.children, c), b.child;

              case 10:
                a: {
                    d = b.type._context;
                    e = b.pendingProps;
                    f = b.memoizedProps;
                    g = e.value;
                    G(Wg, d._currentValue);
                    d._currentValue = g;
                    if (null !== f) if (He(f.value, g)) {
                        if (f.children === e.children && !Wf.current) {
                            b = Zi(a, b, c);
                            break a;
                        }
                    } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
                        var h = f.dependencies;
                        if (null !== h) {
                            g = f.child;
                            for (var k = h.firstContext; null !== k; ) {
                                if (k.context === d) {
                                    if (1 === f.tag) {
                                        k = mh(-1, c & -c);
                                        k.tag = 2;
                                        var l = f.updateQueue;
                                        if (null !== l) {
                                            l = l.shared;
                                            var m = l.pending;
                                            null === m ? k.next = k : (k.next = m.next, m.next = k);
                                            l.pending = k;
                                        }
                                    }
                                    f.lanes |= c;
                                    k = f.alternate;
                                    null !== k && (k.lanes |= c);
                                    bh(f.return, c, b);
                                    h.lanes |= c;
                                    break;
                                }
                                k = k.next;
                            }
                        } else if (10 === f.tag) g = f.type === b.type ? null : f.child; else if (18 === f.tag) {
                            g = f.return;
                            if (null === g) throw Error(p(341));
                            g.lanes |= c;
                            h = g.alternate;
                            null !== h && (h.lanes |= c);
                            bh(g, c, b);
                            g = f.sibling;
                        } else g = f.child;
                        if (null !== g) g.return = f; else for (g = f; null !== g; ) {
                            if (g === b) {
                                g = null;
                                break;
                            }
                            f = g.sibling;
                            if (null !== f) {
                                f.return = g.return;
                                g = f;
                                break;
                            }
                            g = g.return;
                        }
                        f = g;
                    }
                    Xi(a, b, e.children, c);
                    b = b.child;
                }
                return b;

              case 9:
                return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, 
                Xi(a, b, d, c), b.child;

              case 14:
                return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);

              case 15:
                return bj(a, b, b.type, b.pendingProps, c);

              case 17:
                return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), 
                b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), 
                jj(null, b, d, true, a, c);

              case 19:
                return xj(a, b, c);

              case 22:
                return dj(a, b, c);
            }
            throw Error(p(156, b.tag));
        };
        function Fk(a, b) {
            return ac(a, b);
        }
        function $k(a, b, c, d) {
            this.tag = a;
            this.key = c;
            this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
            this.index = 0;
            this.ref = null;
            this.pendingProps = b;
            this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
            this.mode = d;
            this.subtreeFlags = this.flags = 0;
            this.deletions = null;
            this.childLanes = this.lanes = 0;
            this.alternate = null;
        }
        function Bg(a, b, c, d) {
            return new $k(a, b, c, d);
        }
        function aj(a) {
            a = a.prototype;
            return !(!a || !a.isReactComponent);
        }
        function Zk(a) {
            if ("function" === typeof a) return aj(a) ? 1 : 0;
            if (void 0 !== a && null !== a) {
                a = a.$$typeof;
                if (a === Da) return 11;
                if (a === Ga) return 14;
            }
            return 2;
        }
        function Pg(a, b) {
            var c = a.alternate;
            null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, 
            c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, 
            c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
            c.flags = a.flags & 14680064;
            c.childLanes = a.childLanes;
            c.lanes = a.lanes;
            c.child = a.child;
            c.memoizedProps = a.memoizedProps;
            c.memoizedState = a.memoizedState;
            c.updateQueue = a.updateQueue;
            b = a.dependencies;
            c.dependencies = null === b ? null : {
                lanes: b.lanes,
                firstContext: b.firstContext
            };
            c.sibling = a.sibling;
            c.index = a.index;
            c.ref = a.ref;
            return c;
        }
        function Rg(a, b, c, d, e, f) {
            var g = 2;
            d = a;
            if ("function" === typeof a) aj(a) && (g = 1); else if ("string" === typeof a) g = 5; else a: switch (a) {
              case ya:
                return Tg(c.children, e, f, b);

              case za:
                g = 8;
                e |= 8;
                break;

              case Aa:
                return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;

              case Ea:
                return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;

              case Fa:
                return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;

              case Ia:
                return pj(c, e, f, b);

              default:
                if ("object" === typeof a && null !== a) switch (a.$$typeof) {
                  case Ba:
                    g = 10;
                    break a;

                  case Ca:
                    g = 9;
                    break a;

                  case Da:
                    g = 11;
                    break a;

                  case Ga:
                    g = 14;
                    break a;

                  case Ha:
                    g = 16;
                    d = null;
                    break a;
                }
                throw Error(p(130, null == a ? a : typeof a, ""));
            }
            b = Bg(g, c, b, e);
            b.elementType = a;
            b.type = d;
            b.lanes = f;
            return b;
        }
        function Tg(a, b, c, d) {
            a = Bg(7, a, d, b);
            a.lanes = c;
            return a;
        }
        function pj(a, b, c, d) {
            a = Bg(22, a, d, b);
            a.elementType = Ia;
            a.lanes = c;
            a.stateNode = {
                isHidden: false
            };
            return a;
        }
        function Qg(a, b, c) {
            a = Bg(6, a, null, b);
            a.lanes = c;
            return a;
        }
        function Sg(a, b, c) {
            b = Bg(4, null !== a.children ? a.children : [], a.key, b);
            b.lanes = c;
            b.stateNode = {
                containerInfo: a.containerInfo,
                pendingChildren: null,
                implementation: a.implementation
            };
            return b;
        }
        function al(a, b, c, d, e) {
            this.tag = b;
            this.containerInfo = a;
            this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
            this.timeoutHandle = -1;
            this.callbackNode = this.pendingContext = this.context = null;
            this.callbackPriority = 0;
            this.eventTimes = zc(0);
            this.expirationTimes = zc(-1);
            this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
            this.entanglements = zc(0);
            this.identifierPrefix = d;
            this.onRecoverableError = e;
            this.mutableSourceEagerHydrationData = null;
        }
        function bl(a, b, c, d, e, f, g, h, k) {
            a = new al(a, b, c, h, k);
            1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
            f = Bg(3, null, null, b);
            a.current = f;
            f.stateNode = a;
            f.memoizedState = {
                element: d,
                isDehydrated: c,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null
            };
            kh(f);
            return a;
        }
        function cl(a, b, c) {
            var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return {
                $$typeof: wa,
                key: null == d ? null : "" + d,
                children: a,
                containerInfo: b,
                implementation: c
            };
        }
        function dl(a) {
            if (!a) return Vf;
            a = a._reactInternals;
            a: {
                if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
                var b = a;
                do {
                    switch (b.tag) {
                      case 3:
                        b = b.stateNode.context;
                        break a;

                      case 1:
                        if (Zf(b.type)) {
                            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                            break a;
                        }
                    }
                    b = b.return;
                } while (null !== b);
                throw Error(p(171));
            }
            if (1 === a.tag) {
                var c = a.type;
                if (Zf(c)) return bg(a, c, b);
            }
            return b;
        }
        function el(a, b, c, d, e, f, g, h, k) {
            a = bl(c, d, true, a, e, f, g, h, k);
            a.context = dl(null);
            c = a.current;
            d = R();
            e = yi(c);
            f = mh(d, e);
            f.callback = void 0 !== b && null !== b ? b : null;
            nh(c, f, e);
            a.current.lanes = e;
            Ac(a, e, d);
            Dk(a, d);
            return a;
        }
        function fl(a, b, c, d) {
            var e = b.current, f = R(), g = yi(e);
            c = dl(c);
            null === b.context ? b.context = c : b.pendingContext = c;
            b = mh(f, g);
            b.payload = {
                element: a
            };
            d = void 0 === d ? null : d;
            null !== d && (b.callback = d);
            a = nh(e, b, g);
            null !== a && (gi(a, e, g, f), oh(a, e, g));
            return g;
        }
        function gl(a) {
            a = a.current;
            if (!a.child) return null;
            switch (a.child.tag) {
              case 5:
                return a.child.stateNode;

              default:
                return a.child.stateNode;
            }
        }
        function hl(a, b) {
            a = a.memoizedState;
            if (null !== a && null !== a.dehydrated) {
                var c = a.retryLane;
                a.retryLane = 0 !== c && c < b ? c : b;
            }
        }
        function il(a, b) {
            hl(a, b);
            (a = a.alternate) && hl(a, b);
        }
        function jl() {
            return null;
        }
        var kl = "function" === typeof reportError ? reportError : function(a) {
            console.error(a);
        };
        function ll(a) {
            this._internalRoot = a;
        }
        ml.prototype.render = ll.prototype.render = function(a) {
            var b = this._internalRoot;
            if (null === b) throw Error(p(409));
            fl(a, b, null, null);
        };
        ml.prototype.unmount = ll.prototype.unmount = function() {
            var a = this._internalRoot;
            if (null !== a) {
                this._internalRoot = null;
                var b = a.containerInfo;
                Rk((function() {
                    fl(null, a, null, null);
                }));
                b[uf] = null;
            }
        };
        function ml(a) {
            this._internalRoot = a;
        }
        ml.prototype.unstable_scheduleHydration = function(a) {
            if (a) {
                var b = Hc();
                a = {
                    blockedOn: null,
                    target: a,
                    priority: b
                };
                for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
                Qc.splice(c, 0, a);
                0 === c && Vc(a);
            }
        };
        function nl(a) {
            return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
        }
        function ol(a) {
            return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
        }
        function pl() {}
        function ql(a, b, c, d, e) {
            if (e) {
                if ("function" === typeof d) {
                    var f = d;
                    d = function() {
                        var a = gl(g);
                        f.call(a);
                    };
                }
                var g = el(b, d, a, 0, null, false, false, "", pl);
                a._reactRootContainer = g;
                a[uf] = g.current;
                sf(8 === a.nodeType ? a.parentNode : a);
                Rk();
                return g;
            }
            for (;e = a.lastChild; ) a.removeChild(e);
            if ("function" === typeof d) {
                var h = d;
                d = function() {
                    var a = gl(k);
                    h.call(a);
                };
            }
            var k = bl(a, 0, false, null, null, false, false, "", pl);
            a._reactRootContainer = k;
            a[uf] = k.current;
            sf(8 === a.nodeType ? a.parentNode : a);
            Rk((function() {
                fl(b, k, c, d);
            }));
            return k;
        }
        function rl(a, b, c, d, e) {
            var f = c._reactRootContainer;
            if (f) {
                var g = f;
                if ("function" === typeof e) {
                    var h = e;
                    e = function() {
                        var a = gl(g);
                        h.call(a);
                    };
                }
                fl(b, g, a, e);
            } else g = ql(c, b, a, e, d);
            return gl(g);
        }
        Ec = function(a) {
            switch (a.tag) {
              case 3:
                var b = a.stateNode;
                if (b.current.memoizedState.isDehydrated) {
                    var c = tc(b.pendingLanes);
                    0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
                }
                break;

              case 13:
                Rk((function() {
                    var b = ih(a, 1);
                    if (null !== b) {
                        var c = R();
                        gi(b, a, 1, c);
                    }
                })), il(a, 1);
            }
        };
        Fc = function(a) {
            if (13 === a.tag) {
                var b = ih(a, 134217728);
                if (null !== b) {
                    var c = R();
                    gi(b, a, 134217728, c);
                }
                il(a, 134217728);
            }
        };
        Gc = function(a) {
            if (13 === a.tag) {
                var b = yi(a), c = ih(a, b);
                if (null !== c) {
                    var d = R();
                    gi(c, a, b, d);
                }
                il(a, b);
            }
        };
        Hc = function() {
            return C;
        };
        Ic = function(a, b) {
            var c = C;
            try {
                return C = a, b();
            } finally {
                C = c;
            }
        };
        yb = function(a, b, c) {
            switch (b) {
              case "input":
                bb(a, c);
                b = c.name;
                if ("radio" === c.type && null != b) {
                    for (c = a; c.parentNode; ) c = c.parentNode;
                    c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
                    for (b = 0; b < c.length; b++) {
                        var d = c[b];
                        if (d !== a && d.form === a.form) {
                            var e = Db(d);
                            if (!e) throw Error(p(90));
                            Wa(d);
                            bb(d, e);
                        }
                    }
                }
                break;

              case "textarea":
                ib(a, c);
                break;

              case "select":
                b = c.value, null != b && fb(a, !!c.multiple, b, false);
            }
        };
        Gb = Qk;
        Hb = Rk;
        var sl = {
            usingClientEntryPoint: false,
            Events: [ Cb, ue, Db, Eb, Fb, Qk ]
        }, tl = {
            findFiberByHostInstance: Wc,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        };
        var ul = {
            bundleType: tl.bundleType,
            version: tl.version,
            rendererPackageName: tl.rendererPackageName,
            rendererConfig: tl.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: ua.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(a) {
                a = Zb(a);
                return null === a ? null : a.stateNode;
            },
            findFiberByHostInstance: tl.findFiberByHostInstance || jl,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!vl.isDisabled && vl.supportsFiber) try {
                kc = vl.inject(ul), lc = vl;
            } catch (a) {}
        }
        reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
        reactDom_production_min.createPortal = function(a, b) {
            var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!nl(b)) throw Error(p(200));
            return cl(a, b, null, c);
        };
        reactDom_production_min.createRoot = function(a, b) {
            if (!nl(a)) throw Error(p(299));
            var c = false, d = "", e = kl;
            null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), 
            void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
            b = bl(a, 1, false, null, null, c, false, d, e);
            a[uf] = b.current;
            sf(8 === a.nodeType ? a.parentNode : a);
            return new ll(b);
        };
        reactDom_production_min.findDOMNode = function(a) {
            if (null == a) return null;
            if (1 === a.nodeType) return a;
            var b = a._reactInternals;
            if (void 0 === b) {
                if ("function" === typeof a.render) throw Error(p(188));
                a = Object.keys(a).join(",");
                throw Error(p(268, a));
            }
            a = Zb(b);
            a = null === a ? null : a.stateNode;
            return a;
        };
        reactDom_production_min.flushSync = function(a) {
            return Rk(a);
        };
        reactDom_production_min.hydrate = function(a, b, c) {
            if (!ol(b)) throw Error(p(200));
            return rl(null, a, b, true, c);
        };
        reactDom_production_min.hydrateRoot = function(a, b, c) {
            if (!nl(a)) throw Error(p(405));
            var d = null != c && c.hydratedSources || null, e = false, f = "", g = kl;
            null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), 
            void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
            b = el(b, null, a, 1, null != c ? c : null, e, false, f, g);
            a[uf] = b.current;
            sf(a);
            if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), 
            null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [ c, e ] : b.mutableSourceEagerHydrationData.push(c, e);
            return new ml(b);
        };
        reactDom_production_min.render = function(a, b, c) {
            if (!ol(b)) throw Error(p(200));
            return rl(null, a, b, false, c);
        };
        reactDom_production_min.unmountComponentAtNode = function(a) {
            if (!ol(a)) throw Error(p(40));
            return a._reactRootContainer ? (Rk((function() {
                rl(null, null, a, !1, (function() {
                    a._reactRootContainer = null;
                    a[uf] = null;
                }));
            })), true) : false;
        };
        reactDom_production_min.unstable_batchedUpdates = Qk;
        reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
            if (!ol(c)) throw Error(p(200));
            if (null == a || void 0 === a._reactInternals) throw Error(p(38));
            return rl(a, b, c, false, d);
        };
        reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
        return reactDom_production_min;
    }
    function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
            return;
        }
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
            console.error(err);
        }
    }
    {
        checkDCE();
        reactDom.exports = requireReactDom_production_min();
    }
    var reactDomExports = reactDom.exports;
    var ReactDOM = getDefaultExportFromCjs(reactDomExports);
    var config = {
        disabled: false
    };
    var TransitionGroupContext = React.createContext(null);
    var forceReflow = function forceReflow(node) {
        return node.scrollTop;
    };
    var UNMOUNTED = "unmounted";
    var EXITED = "exited";
    var ENTERING = "entering";
    var ENTERED = "entered";
    var EXITING = "exiting";
    var Transition = function(_React$Component) {
        _inheritsLoose(Transition, _React$Component);
        function Transition(props, context) {
            var _this;
            _this = _React$Component.call(this, props, context) || this;
            var parentGroup = context;
            var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
            var initialStatus;
            _this.appearStatus = null;
            if (props.in) {
                if (appear) {
                    initialStatus = EXITED;
                    _this.appearStatus = ENTERING;
                } else {
                    initialStatus = ENTERED;
                }
            } else {
                if (props.unmountOnExit || props.mountOnEnter) {
                    initialStatus = UNMOUNTED;
                } else {
                    initialStatus = EXITED;
                }
            }
            _this.state = {
                status: initialStatus
            };
            _this.nextCallback = null;
            return _this;
        }
        Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
            var nextIn = _ref.in;
            if (nextIn && prevState.status === UNMOUNTED) {
                return {
                    status: EXITED
                };
            }
            return null;
        };
        var _proto = Transition.prototype;
        _proto.componentDidMount = function componentDidMount() {
            this.updateStatus(true, this.appearStatus);
        };
        _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
            var nextStatus = null;
            if (prevProps !== this.props) {
                var status = this.state.status;
                if (this.props.in) {
                    if (status !== ENTERING && status !== ENTERED) {
                        nextStatus = ENTERING;
                    }
                } else {
                    if (status === ENTERING || status === ENTERED) {
                        nextStatus = EXITING;
                    }
                }
            }
            this.updateStatus(false, nextStatus);
        };
        _proto.componentWillUnmount = function componentWillUnmount() {
            this.cancelNextCallback();
        };
        _proto.getTimeouts = function getTimeouts() {
            var timeout = this.props.timeout;
            var exit, enter, appear;
            exit = enter = appear = timeout;
            if (timeout != null && typeof timeout !== "number") {
                exit = timeout.exit;
                enter = timeout.enter;
                appear = timeout.appear !== undefined ? timeout.appear : enter;
            }
            return {
                exit: exit,
                enter: enter,
                appear: appear
            };
        };
        _proto.updateStatus = function updateStatus(mounting, nextStatus) {
            if (mounting === void 0) {
                mounting = false;
            }
            if (nextStatus !== null) {
                this.cancelNextCallback();
                if (nextStatus === ENTERING) {
                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                        var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
                        if (node) forceReflow(node);
                    }
                    this.performEnter(mounting);
                } else {
                    this.performExit();
                }
            } else if (this.props.unmountOnExit && this.state.status === EXITED) {
                this.setState({
                    status: UNMOUNTED
                });
            }
        };
        _proto.performEnter = function performEnter(mounting) {
            var _this2 = this;
            var enter = this.props.enter;
            var appearing = this.context ? this.context.isMounting : mounting;
            var _ref2 = this.props.nodeRef ? [ appearing ] : [ ReactDOM.findDOMNode(this), appearing ], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
            var timeouts = this.getTimeouts();
            var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
            if (!mounting && !enter || config.disabled) {
                this.safeSetState({
                    status: ENTERED
                }, (function() {
                    _this2.props.onEntered(maybeNode);
                }));
                return;
            }
            this.props.onEnter(maybeNode, maybeAppearing);
            this.safeSetState({
                status: ENTERING
            }, (function() {
                _this2.props.onEntering(maybeNode, maybeAppearing);
                _this2.onTransitionEnd(enterTimeout, (function() {
                    _this2.safeSetState({
                        status: ENTERED
                    }, (function() {
                        _this2.props.onEntered(maybeNode, maybeAppearing);
                    }));
                }));
            }));
        };
        _proto.performExit = function performExit() {
            var _this3 = this;
            var exit = this.props.exit;
            var timeouts = this.getTimeouts();
            var maybeNode = this.props.nodeRef ? undefined : ReactDOM.findDOMNode(this);
            if (!exit || config.disabled) {
                this.safeSetState({
                    status: EXITED
                }, (function() {
                    _this3.props.onExited(maybeNode);
                }));
                return;
            }
            this.props.onExit(maybeNode);
            this.safeSetState({
                status: EXITING
            }, (function() {
                _this3.props.onExiting(maybeNode);
                _this3.onTransitionEnd(timeouts.exit, (function() {
                    _this3.safeSetState({
                        status: EXITED
                    }, (function() {
                        _this3.props.onExited(maybeNode);
                    }));
                }));
            }));
        };
        _proto.cancelNextCallback = function cancelNextCallback() {
            if (this.nextCallback !== null) {
                this.nextCallback.cancel();
                this.nextCallback = null;
            }
        };
        _proto.safeSetState = function safeSetState(nextState, callback) {
            callback = this.setNextCallback(callback);
            this.setState(nextState, callback);
        };
        _proto.setNextCallback = function setNextCallback(callback) {
            var _this4 = this;
            var active = true;
            this.nextCallback = function(event) {
                if (active) {
                    active = false;
                    _this4.nextCallback = null;
                    callback(event);
                }
            };
            this.nextCallback.cancel = function() {
                active = false;
            };
            return this.nextCallback;
        };
        _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
            this.setNextCallback(handler);
            var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
            var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
            if (!node || doesNotHaveTimeoutOrListener) {
                setTimeout(this.nextCallback, 0);
                return;
            }
            if (this.props.addEndListener) {
                var _ref3 = this.props.nodeRef ? [ this.nextCallback ] : [ node, this.nextCallback ], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
                this.props.addEndListener(maybeNode, maybeNextCallback);
            }
            if (timeout != null) {
                setTimeout(this.nextCallback, timeout);
            }
        };
        _proto.render = function render() {
            var status = this.state.status;
            if (status === UNMOUNTED) {
                return null;
            }
            var _this$props = this.props, children = _this$props.children;
            _this$props.in;
            _this$props.mountOnEnter;
            _this$props.unmountOnExit;
            _this$props.appear;
            _this$props.enter;
            _this$props.exit;
            _this$props.timeout;
            _this$props.addEndListener;
            _this$props.onEnter;
            _this$props.onEntering;
            _this$props.onEntered;
            _this$props.onExit;
            _this$props.onExiting;
            _this$props.onExited;
            _this$props.nodeRef;
            var childProps = _objectWithoutPropertiesLoose(_this$props, [ "children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef" ]);
            return React.createElement(TransitionGroupContext.Provider, {
                value: null
            }, typeof children === "function" ? children(status, childProps) : React.cloneElement(React.Children.only(children), childProps));
        };
        return Transition;
    }(React.Component);
    Transition.contextType = TransitionGroupContext;
    Transition.propTypes = {};
    function noop() {}
    Transition.defaultProps = {
        in: false,
        mountOnEnter: false,
        unmountOnExit: false,
        appear: false,
        enter: true,
        exit: true,
        onEnter: noop,
        onEntering: noop,
        onEntered: noop,
        onExit: noop,
        onExiting: noop,
        onExited: noop
    };
    Transition.UNMOUNTED = UNMOUNTED;
    Transition.EXITED = EXITED;
    Transition.ENTERING = ENTERING;
    Transition.ENTERED = ENTERED;
    Transition.EXITING = EXITING;
    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
    }
    function getChildMapping(children, mapFn) {
        var mapper = function mapper(child) {
            return mapFn && reactExports.isValidElement(child) ? mapFn(child) : child;
        };
        var result = Object.create(null);
        if (children) reactExports.Children.map(children, (function(c) {
            return c;
        })).forEach((function(child) {
            result[child.key] = mapper(child);
        }));
        return result;
    }
    function mergeChildMappings(prev, next) {
        prev = prev || {};
        next = next || {};
        function getValueForKey(key) {
            return key in next ? next[key] : prev[key];
        }
        var nextKeysPending = Object.create(null);
        var pendingKeys = [];
        for (var prevKey in prev) {
            if (prevKey in next) {
                if (pendingKeys.length) {
                    nextKeysPending[prevKey] = pendingKeys;
                    pendingKeys = [];
                }
            } else {
                pendingKeys.push(prevKey);
            }
        }
        var i;
        var childMapping = {};
        for (var nextKey in next) {
            if (nextKeysPending[nextKey]) {
                for (i = 0; i < nextKeysPending[nextKey].length; i++) {
                    var pendingNextKey = nextKeysPending[nextKey][i];
                    childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
                }
            }
            childMapping[nextKey] = getValueForKey(nextKey);
        }
        for (i = 0; i < pendingKeys.length; i++) {
            childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
        }
        return childMapping;
    }
    function getProp(child, prop, props) {
        return props[prop] != null ? props[prop] : child.props[prop];
    }
    function getInitialChildMapping(props, onExited) {
        return getChildMapping(props.children, (function(child) {
            return reactExports.cloneElement(child, {
                onExited: onExited.bind(null, child),
                in: true,
                appear: getProp(child, "appear", props),
                enter: getProp(child, "enter", props),
                exit: getProp(child, "exit", props)
            });
        }));
    }
    function getNextChildMapping(nextProps, prevChildMapping, onExited) {
        var nextChildMapping = getChildMapping(nextProps.children);
        var children = mergeChildMappings(prevChildMapping, nextChildMapping);
        Object.keys(children).forEach((function(key) {
            var child = children[key];
            if (!reactExports.isValidElement(child)) return;
            var hasPrev = key in prevChildMapping;
            var hasNext = key in nextChildMapping;
            var prevChild = prevChildMapping[key];
            var isLeaving = reactExports.isValidElement(prevChild) && !prevChild.props.in;
            if (hasNext && (!hasPrev || isLeaving)) {
                children[key] = reactExports.cloneElement(child, {
                    onExited: onExited.bind(null, child),
                    in: true,
                    exit: getProp(child, "exit", nextProps),
                    enter: getProp(child, "enter", nextProps)
                });
            } else if (!hasNext && hasPrev && !isLeaving) {
                children[key] = reactExports.cloneElement(child, {
                    in: false
                });
            } else if (hasNext && hasPrev && reactExports.isValidElement(prevChild)) {
                children[key] = reactExports.cloneElement(child, {
                    onExited: onExited.bind(null, child),
                    in: prevChild.props.in,
                    exit: getProp(child, "exit", nextProps),
                    enter: getProp(child, "enter", nextProps)
                });
            }
        }));
        return children;
    }
    var values = Object.values || function(obj) {
        return Object.keys(obj).map((function(k) {
            return obj[k];
        }));
    };
    var defaultProps = {
        component: "div",
        childFactory: function childFactory(child) {
            return child;
        }
    };
    var TransitionGroup = function(_React$Component) {
        _inheritsLoose(TransitionGroup, _React$Component);
        function TransitionGroup(props, context) {
            var _this;
            _this = _React$Component.call(this, props, context) || this;
            var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
            _this.state = {
                contextValue: {
                    isMounting: true
                },
                handleExited: handleExited,
                firstRender: true
            };
            return _this;
        }
        var _proto = TransitionGroup.prototype;
        _proto.componentDidMount = function componentDidMount() {
            this.mounted = true;
            this.setState({
                contextValue: {
                    isMounting: false
                }
            });
        };
        _proto.componentWillUnmount = function componentWillUnmount() {
            this.mounted = false;
        };
        TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
            var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
            return {
                children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
                firstRender: false
            };
        };
        _proto.handleExited = function handleExited(child, node) {
            var currentChildMapping = getChildMapping(this.props.children);
            if (child.key in currentChildMapping) return;
            if (child.props.onExited) {
                child.props.onExited(node);
            }
            if (this.mounted) {
                this.setState((function(state) {
                    var children = _extends$1({}, state.children);
                    delete children[child.key];
                    return {
                        children: children
                    };
                }));
            }
        };
        _proto.render = function render() {
            var _this$props = this.props, Component = _this$props.component, childFactory = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, [ "component", "childFactory" ]);
            var contextValue = this.state.contextValue;
            var children = values(this.state.children).map(childFactory);
            delete props.appear;
            delete props.enter;
            delete props.exit;
            if (Component === null) {
                return React.createElement(TransitionGroupContext.Provider, {
                    value: contextValue
                }, children);
            }
            return React.createElement(TransitionGroupContext.Provider, {
                value: contextValue
            }, React.createElement(Component, props, children));
        };
        return TransitionGroup;
    }(React.Component);
    TransitionGroup.propTypes = {};
    TransitionGroup.defaultProps = defaultProps;
    const reflow = node => node.scrollTop;
    function getTransitionProps(props, options) {
        var _style$transitionDura, _style$transitionTimi;
        const {timeout: timeout, easing: easing, style: style = {}} = props;
        return {
            duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout === "number" ? timeout : timeout[options.mode] || 0,
            easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === "object" ? easing[options.mode] : easing,
            delay: style.transitionDelay
        };
    }
    function getPaperUtilityClass(slot) {
        return generateUtilityClass("MuiPaper", slot);
    }
    generateUtilityClasses("MuiPaper", [ "root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24" ]);
    const _excluded$B = [ "className", "component", "elevation", "square", "variant" ];
    const useUtilityClasses$v = ownerState => {
        const {square: square, elevation: elevation, variant: variant, classes: classes} = ownerState;
        const slots = {
            root: [ "root", variant, !square && "rounded", variant === "elevation" && `elevation${elevation}` ]
        };
        return composeClasses(slots, getPaperUtilityClass, classes);
    };
    const PaperRoot = styled("div", {
        name: "MuiPaper",
        slot: "Root",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === "elevation" && styles[`elevation${ownerState.elevation}`] ];
        }
    })((({theme: theme, ownerState: ownerState}) => {
        var _theme$vars$overlays;
        return _extends$1({
            backgroundColor: (theme.vars || theme).palette.background.paper,
            color: (theme.vars || theme).palette.text.primary,
            transition: theme.transitions.create("box-shadow")
        }, !ownerState.square && {
            borderRadius: theme.shape.borderRadius
        }, ownerState.variant === "outlined" && {
            border: `1px solid ${(theme.vars || theme).palette.divider}`
        }, ownerState.variant === "elevation" && _extends$1({
            boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
        }, !theme.vars && theme.palette.mode === "dark" && {
            backgroundImage: `linear-gradient(${alpha_1("#fff", getOverlayAlpha(ownerState.elevation))}, ${alpha_1("#fff", getOverlayAlpha(ownerState.elevation))})`
        }, theme.vars && {
            backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
        }));
    }));
    const Paper = reactExports.forwardRef((function Paper(inProps, ref) {
        const props = useDefaultProps({
            props: inProps,
            name: "MuiPaper"
        });
        const {className: className, component: component = "div", elevation: elevation = 1, square: square = false, variant: variant = "elevation"} = props, other = _objectWithoutPropertiesLoose(props, _excluded$B);
        const ownerState = _extends$1({}, props, {
            component: component,
            elevation: elevation,
            square: square,
            variant: variant
        });
        const classes = useUtilityClasses$v(ownerState);
        return jsxRuntimeExports.jsx(PaperRoot, _extends$1({
            as: component,
            ownerState: ownerState,
            className: clsx(classes.root, className),
            ref: ref
        }, other));
    }));
    function Ripple(props) {
        const {className: className, classes: classes, pulsate: pulsate = false, rippleX: rippleX, rippleY: rippleY, rippleSize: rippleSize, in: inProp, onExited: onExited, timeout: timeout} = props;
        const [leaving, setLeaving] = reactExports.useState(false);
        const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
        const rippleStyles = {
            width: rippleSize,
            height: rippleSize,
            top: -(rippleSize / 2) + rippleY,
            left: -(rippleSize / 2) + rippleX
        };
        const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
        if (!inProp && !leaving) {
            setLeaving(true);
        }
        reactExports.useEffect((() => {
            if (!inProp && onExited != null) {
                const timeoutId = setTimeout(onExited, timeout);
                return () => {
                    clearTimeout(timeoutId);
                };
            }
            return undefined;
        }), [ onExited, inProp, timeout ]);
        return jsxRuntimeExports.jsx("span", {
            className: rippleClassName,
            style: rippleStyles,
            children: jsxRuntimeExports.jsx("span", {
                className: childClassName
            })
        });
    }
    const touchRippleClasses = generateUtilityClasses("MuiTouchRipple", [ "root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate" ]);
    const _excluded$A = [ "center", "classes", "className" ];
    let _ = t => t, _t, _t2, _t3, _t4;
    const DURATION = 550;
    const DELAY_RIPPLE = 80;
    const enterKeyframe = keyframes(_t || (_t = _`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
    const exitKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
    const pulsateKeyframe = keyframes(_t3 || (_t3 = _`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
    const TouchRippleRoot = styled("span", {
        name: "MuiTouchRipple",
        slot: "Root"
    })({
        overflow: "hidden",
        pointerEvents: "none",
        position: "absolute",
        zIndex: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: "inherit"
    });
    const TouchRippleRipple = styled(Ripple, {
        name: "MuiTouchRipple",
        slot: "Ripple"
    })(_t4 || (_t4 = _`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses.rippleVisible, enterKeyframe, DURATION, (({theme: theme}) => theme.transitions.easing.easeInOut), touchRippleClasses.ripplePulsate, (({theme: theme}) => theme.transitions.duration.shorter), touchRippleClasses.child, touchRippleClasses.childLeaving, exitKeyframe, DURATION, (({theme: theme}) => theme.transitions.easing.easeInOut), touchRippleClasses.childPulsate, pulsateKeyframe, (({theme: theme}) => theme.transitions.easing.easeInOut));
    const TouchRipple = reactExports.forwardRef((function TouchRipple(inProps, ref) {
        const props = useDefaultProps({
            props: inProps,
            name: "MuiTouchRipple"
        });
        const {center: centerProp = false, classes: classes = {}, className: className} = props, other = _objectWithoutPropertiesLoose(props, _excluded$A);
        const [ripples, setRipples] = reactExports.useState([]);
        const nextKey = reactExports.useRef(0);
        const rippleCallback = reactExports.useRef(null);
        reactExports.useEffect((() => {
            if (rippleCallback.current) {
                rippleCallback.current();
                rippleCallback.current = null;
            }
        }), [ ripples ]);
        const ignoringMouseDown = reactExports.useRef(false);
        const startTimer = useTimeout();
        const startTimerCommit = reactExports.useRef(null);
        const container = reactExports.useRef(null);
        const startCommit = reactExports.useCallback((params => {
            const {pulsate: pulsate, rippleX: rippleX, rippleY: rippleY, rippleSize: rippleSize, cb: cb} = params;
            setRipples((oldRipples => [ ...oldRipples, jsxRuntimeExports.jsx(TouchRippleRipple, {
                classes: {
                    ripple: clsx(classes.ripple, touchRippleClasses.ripple),
                    rippleVisible: clsx(classes.rippleVisible, touchRippleClasses.rippleVisible),
                    ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses.ripplePulsate),
                    child: clsx(classes.child, touchRippleClasses.child),
                    childLeaving: clsx(classes.childLeaving, touchRippleClasses.childLeaving),
                    childPulsate: clsx(classes.childPulsate, touchRippleClasses.childPulsate)
                },
                timeout: DURATION,
                pulsate: pulsate,
                rippleX: rippleX,
                rippleY: rippleY,
                rippleSize: rippleSize
            }, nextKey.current) ]));
            nextKey.current += 1;
            rippleCallback.current = cb;
        }), [ classes ]);
        const start = reactExports.useCallback(((event = {}, options = {}, cb = () => {}) => {
            const {pulsate: pulsate = false, center: center = centerProp || options.pulsate, fakeElement: fakeElement = false} = options;
            if ((event == null ? void 0 : event.type) === "mousedown" && ignoringMouseDown.current) {
                ignoringMouseDown.current = false;
                return;
            }
            if ((event == null ? void 0 : event.type) === "touchstart") {
                ignoringMouseDown.current = true;
            }
            const element = fakeElement ? null : container.current;
            const rect = element ? element.getBoundingClientRect() : {
                width: 0,
                height: 0,
                left: 0,
                top: 0
            };
            let rippleX;
            let rippleY;
            let rippleSize;
            if (center || event === undefined || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
                rippleX = Math.round(rect.width / 2);
                rippleY = Math.round(rect.height / 2);
            } else {
                const {clientX: clientX, clientY: clientY} = event.touches && event.touches.length > 0 ? event.touches[0] : event;
                rippleX = Math.round(clientX - rect.left);
                rippleY = Math.round(clientY - rect.top);
            }
            if (center) {
                rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
                if (rippleSize % 2 === 0) {
                    rippleSize += 1;
                }
            } else {
                const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
                const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
                rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
            }
            if (event != null && event.touches) {
                if (startTimerCommit.current === null) {
                    startTimerCommit.current = () => {
                        startCommit({
                            pulsate: pulsate,
                            rippleX: rippleX,
                            rippleY: rippleY,
                            rippleSize: rippleSize,
                            cb: cb
                        });
                    };
                    startTimer.start(DELAY_RIPPLE, (() => {
                        if (startTimerCommit.current) {
                            startTimerCommit.current();
                            startTimerCommit.current = null;
                        }
                    }));
                }
            } else {
                startCommit({
                    pulsate: pulsate,
                    rippleX: rippleX,
                    rippleY: rippleY,
                    rippleSize: rippleSize,
                    cb: cb
                });
            }
        }), [ centerProp, startCommit, startTimer ]);
        const pulsate = reactExports.useCallback((() => {
            start({}, {
                pulsate: true
            });
        }), [ start ]);
        const stop = reactExports.useCallback(((event, cb) => {
            startTimer.clear();
            if ((event == null ? void 0 : event.type) === "touchend" && startTimerCommit.current) {
                startTimerCommit.current();
                startTimerCommit.current = null;
                startTimer.start(0, (() => {
                    stop(event, cb);
                }));
                return;
            }
            startTimerCommit.current = null;
            setRipples((oldRipples => {
                if (oldRipples.length > 0) {
                    return oldRipples.slice(1);
                }
                return oldRipples;
            }));
            rippleCallback.current = cb;
        }), [ startTimer ]);
        reactExports.useImperativeHandle(ref, (() => ({
            pulsate: pulsate,
            start: start,
            stop: stop
        })), [ pulsate, start, stop ]);
        return jsxRuntimeExports.jsx(TouchRippleRoot, _extends$1({
            className: clsx(touchRippleClasses.root, classes.root, className),
            ref: container
        }, other, {
            children: jsxRuntimeExports.jsx(TransitionGroup, {
                component: null,
                exit: true,
                children: ripples
            })
        }));
    }));
    function getButtonBaseUtilityClass(slot) {
        return generateUtilityClass("MuiButtonBase", slot);
    }
    const buttonBaseClasses = generateUtilityClasses("MuiButtonBase", [ "root", "disabled", "focusVisible" ]);
    const _excluded$z = [ "action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type" ];
    const useUtilityClasses$u = ownerState => {
        const {disabled: disabled, focusVisible: focusVisible, focusVisibleClassName: focusVisibleClassName, classes: classes} = ownerState;
        const slots = {
            root: [ "root", disabled && "disabled", focusVisible && "focusVisible" ]
        };
        const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
        if (focusVisible && focusVisibleClassName) {
            composedClasses.root += ` ${focusVisibleClassName}`;
        }
        return composedClasses;
    };
    const ButtonBaseRoot = styled("button", {
        name: "MuiButtonBase",
        slot: "Root",
        overridesResolver: (props, styles) => styles.root
    })({
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        outline: 0,
        border: 0,
        margin: 0,
        borderRadius: 0,
        padding: 0,
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        MozAppearance: "none",
        WebkitAppearance: "none",
        textDecoration: "none",
        color: "inherit",
        "&::-moz-focus-inner": {
            borderStyle: "none"
        },
        [`&.${buttonBaseClasses.disabled}`]: {
            pointerEvents: "none",
            cursor: "default"
        },
        "@media print": {
            colorAdjust: "exact"
        }
    });
    const ButtonBase = reactExports.forwardRef((function ButtonBase(inProps, ref) {
        const props = useDefaultProps({
            props: inProps,
            name: "MuiButtonBase"
        });
        const {action: action, centerRipple: centerRipple = false, children: children, className: className, component: component = "button", disabled: disabled = false, disableRipple: disableRipple = false, disableTouchRipple: disableTouchRipple = false, focusRipple: focusRipple = false, LinkComponent: LinkComponent = "a", onBlur: onBlur, onClick: onClick, onContextMenu: onContextMenu, onDragLeave: onDragLeave, onFocus: onFocus, onFocusVisible: onFocusVisible, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onMouseDown: onMouseDown, onMouseLeave: onMouseLeave, onMouseUp: onMouseUp, onTouchEnd: onTouchEnd, onTouchMove: onTouchMove, onTouchStart: onTouchStart, tabIndex: tabIndex = 0, TouchRippleProps: TouchRippleProps, touchRippleRef: touchRippleRef, type: type} = props, other = _objectWithoutPropertiesLoose(props, _excluded$z);
        const buttonRef = reactExports.useRef(null);
        const rippleRef = reactExports.useRef(null);
        const handleRippleRef = useForkRef(rippleRef, touchRippleRef);
        const {isFocusVisibleRef: isFocusVisibleRef, onFocus: handleFocusVisible, onBlur: handleBlurVisible, ref: focusVisibleRef} = useIsFocusVisible();
        const [focusVisible, setFocusVisible] = reactExports.useState(false);
        if (disabled && focusVisible) {
            setFocusVisible(false);
        }
        reactExports.useImperativeHandle(action, (() => ({
            focusVisible: () => {
                setFocusVisible(true);
                buttonRef.current.focus();
            }
        })), []);
        const [mountedState, setMountedState] = reactExports.useState(false);
        reactExports.useEffect((() => {
            setMountedState(true);
        }), []);
        const enableTouchRipple = mountedState && !disableRipple && !disabled;
        reactExports.useEffect((() => {
            if (focusVisible && focusRipple && !disableRipple && mountedState) {
                rippleRef.current.pulsate();
            }
        }), [ disableRipple, focusRipple, focusVisible, mountedState ]);
        function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
            return useEventCallback((event => {
                if (eventCallback) {
                    eventCallback(event);
                }
                const ignore = skipRippleAction;
                if (!ignore && rippleRef.current) {
                    rippleRef.current[rippleAction](event);
                }
                return true;
            }));
        }
        const handleMouseDown = useRippleHandler("start", onMouseDown);
        const handleContextMenu = useRippleHandler("stop", onContextMenu);
        const handleDragLeave = useRippleHandler("stop", onDragLeave);
        const handleMouseUp = useRippleHandler("stop", onMouseUp);
        const handleMouseLeave = useRippleHandler("stop", (event => {
            if (focusVisible) {
                event.preventDefault();
            }
            if (onMouseLeave) {
                onMouseLeave(event);
            }
        }));
        const handleTouchStart = useRippleHandler("start", onTouchStart);
        const handleTouchEnd = useRippleHandler("stop", onTouchEnd);
        const handleTouchMove = useRippleHandler("stop", onTouchMove);
        const handleBlur = useRippleHandler("stop", (event => {
            handleBlurVisible(event);
            if (isFocusVisibleRef.current === false) {
                setFocusVisible(false);
            }
            if (onBlur) {
                onBlur(event);
            }
        }), false);
        const handleFocus = useEventCallback((event => {
            if (!buttonRef.current) {
                buttonRef.current = event.currentTarget;
            }
            handleFocusVisible(event);
            if (isFocusVisibleRef.current === true) {
                setFocusVisible(true);
                if (onFocusVisible) {
                    onFocusVisible(event);
                }
            }
            if (onFocus) {
                onFocus(event);
            }
        }));
        const isNonNativeButton = () => {
            const button = buttonRef.current;
            return component && component !== "button" && !(button.tagName === "A" && button.href);
        };
        const keydownRef = reactExports.useRef(false);
        const handleKeyDown = useEventCallback((event => {
            if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === " ") {
                keydownRef.current = true;
                rippleRef.current.stop(event, (() => {
                    rippleRef.current.start(event);
                }));
            }
            if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
                event.preventDefault();
            }
            if (onKeyDown) {
                onKeyDown(event);
            }
            if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled) {
                event.preventDefault();
                if (onClick) {
                    onClick(event);
                }
            }
        }));
        const handleKeyUp = useEventCallback((event => {
            if (focusRipple && event.key === " " && rippleRef.current && focusVisible && !event.defaultPrevented) {
                keydownRef.current = false;
                rippleRef.current.stop(event, (() => {
                    rippleRef.current.pulsate(event);
                }));
            }
            if (onKeyUp) {
                onKeyUp(event);
            }
            if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
                onClick(event);
            }
        }));
        let ComponentProp = component;
        if (ComponentProp === "button" && (other.href || other.to)) {
            ComponentProp = LinkComponent;
        }
        const buttonProps = {};
        if (ComponentProp === "button") {
            buttonProps.type = type === undefined ? "button" : type;
            buttonProps.disabled = disabled;
        } else {
            if (!other.href && !other.to) {
                buttonProps.role = "button";
            }
            if (disabled) {
                buttonProps["aria-disabled"] = disabled;
            }
        }
        const handleRef = useForkRef(ref, focusVisibleRef, buttonRef);
        const ownerState = _extends$1({}, props, {
            centerRipple: centerRipple,
            component: component,
            disabled: disabled,
            disableRipple: disableRipple,
            disableTouchRipple: disableTouchRipple,
            focusRipple: focusRipple,
            tabIndex: tabIndex,
            focusVisible: focusVisible
        });
        const classes = useUtilityClasses$u(ownerState);
        return jsxRuntimeExports.jsxs(ButtonBaseRoot, _extends$1({
            as: ComponentProp,
            className: clsx(classes.root, className),
            ownerState: ownerState,
            onBlur: handleBlur,
            onClick: onClick,
            onContextMenu: handleContextMenu,
            onFocus: handleFocus,
            onKeyDown: handleKeyDown,
            onKeyUp: handleKeyUp,
            onMouseDown: handleMouseDown,
            onMouseLeave: handleMouseLeave,
            onMouseUp: handleMouseUp,
            onDragLeave: handleDragLeave,
            onTouchEnd: handleTouchEnd,
            onTouchMove: handleTouchMove,
            onTouchStart: handleTouchStart,
            ref: handleRef,
            tabIndex: disabled ? -1 : tabIndex,
            type: type
        }, buttonProps, other, {
            children: [ children, enableTouchRipple ? jsxRuntimeExports.jsx(TouchRipple, _extends$1({
                ref: handleRippleRef,
                center: centerRipple
            }, TouchRippleProps)) : null ]
        }));
    }));
    function getIconButtonUtilityClass(slot) {
        return generateUtilityClass("MuiIconButton", slot);
    }
    const iconButtonClasses = generateUtilityClasses("MuiIconButton", [ "root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge" ]);
    const _excluded$y = [ "edge", "children", "className", "color", "disabled", "disableFocusRipple", "size" ];
    const useUtilityClasses$t = ownerState => {
        const {classes: classes, disabled: disabled, color: color, edge: edge, size: size} = ownerState;
        const slots = {
            root: [ "root", disabled && "disabled", color !== "default" && `color${capitalize$1(color)}`, edge && `edge${capitalize$1(edge)}`, `size${capitalize$1(size)}` ]
        };
        return composeClasses(slots, getIconButtonUtilityClass, classes);
    };
    const IconButtonRoot = styled(ButtonBase, {
        name: "MuiIconButton",
        slot: "Root",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.root, ownerState.color !== "default" && styles[`color${capitalize$1(ownerState.color)}`], ownerState.edge && styles[`edge${capitalize$1(ownerState.edge)}`], styles[`size${capitalize$1(ownerState.size)}`] ];
        }
    })((({theme: theme, ownerState: ownerState}) => _extends$1({
        textAlign: "center",
        flex: "0 0 auto",
        fontSize: theme.typography.pxToRem(24),
        padding: 8,
        borderRadius: "50%",
        overflow: "visible",
        color: (theme.vars || theme).palette.action.active,
        transition: theme.transitions.create("background-color", {
            duration: theme.transitions.duration.shortest
        })
    }, !ownerState.disableRipple && {
        "&:hover": {
            backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha_1(theme.palette.action.active, theme.palette.action.hoverOpacity),
            "@media (hover: none)": {
                backgroundColor: "transparent"
            }
        }
    }, ownerState.edge === "start" && {
        marginLeft: ownerState.size === "small" ? -3 : -12
    }, ownerState.edge === "end" && {
        marginRight: ownerState.size === "small" ? -3 : -12
    })), (({theme: theme, ownerState: ownerState}) => {
        var _palette;
        const palette = (_palette = (theme.vars || theme).palette) == null ? void 0 : _palette[ownerState.color];
        return _extends$1({}, ownerState.color === "inherit" && {
            color: "inherit"
        }, ownerState.color !== "inherit" && ownerState.color !== "default" && _extends$1({
            color: palette == null ? void 0 : palette.main
        }, !ownerState.disableRipple && {
            "&:hover": _extends$1({}, palette && {
                backgroundColor: theme.vars ? `rgba(${palette.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha_1(palette.main, theme.palette.action.hoverOpacity)
            }, {
                "@media (hover: none)": {
                    backgroundColor: "transparent"
                }
            })
        }), ownerState.size === "small" && {
            padding: 5,
            fontSize: theme.typography.pxToRem(18)
        }, ownerState.size === "large" && {
            padding: 12,
            fontSize: theme.typography.pxToRem(28)
        }, {
            [`&.${iconButtonClasses.disabled}`]: {
                backgroundColor: "transparent",
                color: (theme.vars || theme).palette.action.disabled
            }
        });
    }));
    const IconButton = reactExports.forwardRef((function IconButton(inProps, ref) {
        const props = useDefaultProps({
            props: inProps,
            name: "MuiIconButton"
        });
        const {edge: edge = false, children: children, className: className, color: color = "default", disabled: disabled = false, disableFocusRipple: disableFocusRipple = false, size: size = "medium"} = props, other = _objectWithoutPropertiesLoose(props, _excluded$y);
        const ownerState = _extends$1({}, props, {
            edge: edge,
            color: color,
            disabled: disabled,
            disableFocusRipple: disableFocusRipple,
            size: size
        });
        const classes = useUtilityClasses$t(ownerState);
        return jsxRuntimeExports.jsx(IconButtonRoot, _extends$1({
            className: clsx(classes.root, className),
            centerRipple: true,
            focusRipple: !disableFocusRipple,
            disabled: disabled,
            ref: ref
        }, other, {
            ownerState: ownerState,
            children: children
        }));
    }));
    function getTypographyUtilityClass(slot) {
        return generateUtilityClass("MuiTypography", slot);
    }
    generateUtilityClasses("MuiTypography", [ "root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph" ]);
    const _excluded$x = [ "align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping" ];
    const useUtilityClasses$s = ownerState => {
        const {align: align, gutterBottom: gutterBottom, noWrap: noWrap, paragraph: paragraph, variant: variant, classes: classes} = ownerState;
        const slots = {
            root: [ "root", variant, ownerState.align !== "inherit" && `align${capitalize$1(align)}`, gutterBottom && "gutterBottom", noWrap && "noWrap", paragraph && "paragraph" ]
        };
        return composeClasses(slots, getTypographyUtilityClass, classes);
    };
    const TypographyRoot = styled("span", {
        name: "MuiTypography",
        slot: "Root",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== "inherit" && styles[`align${capitalize$1(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph ];
        }
    })((({theme: theme, ownerState: ownerState}) => _extends$1({
        margin: 0
    }, ownerState.variant === "inherit" && {
        font: "inherit"
    }, ownerState.variant !== "inherit" && theme.typography[ownerState.variant], ownerState.align !== "inherit" && {
        textAlign: ownerState.align
    }, ownerState.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    }, ownerState.gutterBottom && {
        marginBottom: "0.35em"
    }, ownerState.paragraph && {
        marginBottom: 16
    })));
    const defaultVariantMapping = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "h6",
        subtitle2: "h6",
        body1: "p",
        body2: "p",
        inherit: "p"
    };
    const colorTransformations = {
        primary: "primary.main",
        textPrimary: "text.primary",
        secondary: "secondary.main",
        textSecondary: "text.secondary",
        error: "error.main"
    };
    const transformDeprecatedColors = color => colorTransformations[color] || color;
    const Typography = reactExports.forwardRef((function Typography(inProps, ref) {
        const themeProps = useDefaultProps({
            props: inProps,
            name: "MuiTypography"
        });
        const color = transformDeprecatedColors(themeProps.color);
        const props = extendSxProp(_extends$1({}, themeProps, {
            color: color
        }));
        const {align: align = "inherit", className: className, component: component, gutterBottom: gutterBottom = false, noWrap: noWrap = false, paragraph: paragraph = false, variant: variant = "body1", variantMapping: variantMapping = defaultVariantMapping} = props, other = _objectWithoutPropertiesLoose(props, _excluded$x);
        const ownerState = _extends$1({}, props, {
            align: align,
            color: color,
            className: className,
            component: component,
            gutterBottom: gutterBottom,
            noWrap: noWrap,
            paragraph: paragraph,
            variant: variant,
            variantMapping: variantMapping
        });
        const Component = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
        const classes = useUtilityClasses$s(ownerState);
        return jsxRuntimeExports.jsx(TypographyRoot, _extends$1({
            as: Component,
            ref: ref,
            ownerState: ownerState,
            className: clsx(classes.root, className)
        }, other));
    }));
    function getContainer$1(container) {
        return typeof container === "function" ? container() : container;
    }
    const Portal = reactExports.forwardRef((function Portal(props, forwardedRef) {
        const {children: children, container: container, disablePortal: disablePortal = false} = props;
        const [mountNode, setMountNode] = reactExports.useState(null);
        const handleRef = useForkRef(reactExports.isValidElement(children) ? getReactElementRef(children) : null, forwardedRef);
        useEnhancedEffect((() => {
            if (!disablePortal) {
                setMountNode(getContainer$1(container) || document.body);
            }
        }), [ container, disablePortal ]);
        useEnhancedEffect((() => {
            if (mountNode && !disablePortal) {
                setRef(forwardedRef, mountNode);
                return () => {
                    setRef(forwardedRef, null);
                };
            }
            return undefined;
        }), [ forwardedRef, mountNode, disablePortal ]);
        if (disablePortal) {
            if (reactExports.isValidElement(children)) {
                const newProps = {
                    ref: handleRef
                };
                return reactExports.cloneElement(children, newProps);
            }
            return jsxRuntimeExports.jsx(reactExports.Fragment, {
                children: children
            });
        }
        return jsxRuntimeExports.jsx(reactExports.Fragment, {
            children: mountNode ? reactDomExports.createPortal(children, mountNode) : mountNode
        });
    }));
    const _excluded$w = [ "onChange", "maxRows", "minRows", "style", "value" ];
    function getStyleValue(value) {
        return parseInt(value, 10) || 0;
    }
    const styles$2 = {
        shadow: {
            visibility: "hidden",
            position: "absolute",
            overflow: "hidden",
            height: 0,
            top: 0,
            left: 0,
            transform: "translateZ(0)"
        }
    };
    function isObjectEmpty(object) {
        for (const _ in object) {
            return false;
        }
        return true;
    }
    function isEmpty$1(obj) {
        return isObjectEmpty(obj) || obj.outerHeightStyle === 0 && !obj.overflowing;
    }
    const TextareaAutosize = reactExports.forwardRef((function TextareaAutosize(props, forwardedRef) {
        const {onChange: onChange, maxRows: maxRows, minRows: minRows = 1, style: style, value: value} = props, other = _objectWithoutPropertiesLoose(props, _excluded$w);
        const {current: isControlled} = reactExports.useRef(value != null);
        const textareaRef = reactExports.useRef(null);
        const handleRef = useForkRef(forwardedRef, textareaRef);
        const heightRef = reactExports.useRef(null);
        const hiddenTextareaRef = reactExports.useRef(null);
        const calculateTextareaStyles = reactExports.useCallback((() => {
            const textarea = textareaRef.current;
            const hiddenTextarea = hiddenTextareaRef.current;
            if (!textarea || !hiddenTextarea) {
                return undefined;
            }
            const containerWindow = ownerWindow(textarea);
            const computedStyle = containerWindow.getComputedStyle(textarea);
            if (computedStyle.width === "0px") {
                return {
                    outerHeightStyle: 0,
                    overflowing: false
                };
            }
            hiddenTextarea.style.width = computedStyle.width;
            hiddenTextarea.value = textarea.value || props.placeholder || "x";
            if (hiddenTextarea.value.slice(-1) === "\n") {
                hiddenTextarea.value += " ";
            }
            const boxSizing = computedStyle.boxSizing;
            const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
            const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);
            const innerHeight = hiddenTextarea.scrollHeight;
            hiddenTextarea.value = "x";
            const singleRowHeight = hiddenTextarea.scrollHeight;
            let outerHeight = innerHeight;
            if (minRows) {
                outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
            }
            if (maxRows) {
                outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
            }
            outerHeight = Math.max(outerHeight, singleRowHeight);
            const outerHeightStyle = outerHeight + (boxSizing === "border-box" ? padding + border : 0);
            const overflowing = Math.abs(outerHeight - innerHeight) <= 1;
            return {
                outerHeightStyle: outerHeightStyle,
                overflowing: overflowing
            };
        }), [ maxRows, minRows, props.placeholder ]);
        const didHeightChange = useEventCallback((() => {
            const textarea = textareaRef.current;
            const textareaStyles = calculateTextareaStyles();
            if (!textarea || !textareaStyles || isEmpty$1(textareaStyles)) {
                return false;
            }
            const outerHeightStyle = textareaStyles.outerHeightStyle;
            return heightRef.current != null && heightRef.current !== outerHeightStyle;
        }));
        const syncHeight = reactExports.useCallback((() => {
            const textarea = textareaRef.current;
            const textareaStyles = calculateTextareaStyles();
            if (!textarea || !textareaStyles || isEmpty$1(textareaStyles)) {
                return;
            }
            const outerHeightStyle = textareaStyles.outerHeightStyle;
            if (heightRef.current !== outerHeightStyle) {
                heightRef.current = outerHeightStyle;
                textarea.style.height = `${outerHeightStyle}px`;
            }
            textarea.style.overflow = textareaStyles.overflowing ? "hidden" : "";
        }), [ calculateTextareaStyles ]);
        const frameRef = reactExports.useRef(-1);
        useEnhancedEffect((() => {
            const debouncedHandleResize = debounce(syncHeight);
            const textarea = textareaRef == null ? void 0 : textareaRef.current;
            if (!textarea) {
                return undefined;
            }
            const containerWindow = ownerWindow(textarea);
            containerWindow.addEventListener("resize", debouncedHandleResize);
            let resizeObserver;
            if (typeof ResizeObserver !== "undefined") {
                resizeObserver = new ResizeObserver((() => {
                    if (didHeightChange()) {
                        resizeObserver.unobserve(textarea);
                        cancelAnimationFrame(frameRef.current);
                        syncHeight();
                        frameRef.current = requestAnimationFrame((() => {
                            resizeObserver.observe(textarea);
                        }));
                    }
                }));
                resizeObserver.observe(textarea);
            }
            return () => {
                debouncedHandleResize.clear();
                cancelAnimationFrame(frameRef.current);
                containerWindow.removeEventListener("resize", debouncedHandleResize);
                if (resizeObserver) {
                    resizeObserver.disconnect();
                }
            };
        }), [ calculateTextareaStyles, syncHeight, didHeightChange ]);
        useEnhancedEffect((() => {
            syncHeight();
        }));
        const handleChange = event => {
            if (!isControlled) {
                syncHeight();
            }
            if (onChange) {
                onChange(event);
            }
        };
        return jsxRuntimeExports.jsxs(reactExports.Fragment, {
            children: [ jsxRuntimeExports.jsx("textarea", _extends$1({
                value: value,
                onChange: handleChange,
                ref: handleRef,
                rows: minRows,
                style: style
            }, other)), jsxRuntimeExports.jsx("textarea", {
                "aria-hidden": true,
                className: props.className,
                readOnly: true,
                ref: hiddenTextareaRef,
                tabIndex: -1,
                style: _extends$1({}, styles$2.shadow, style, {
                    paddingTop: 0,
                    paddingBottom: 0
                })
            }) ]
        });
    }));
    function formControlState({props: props, states: states, muiFormControl: muiFormControl}) {
        return states.reduce(((acc, state) => {
            acc[state] = props[state];
            if (muiFormControl) {
                if (typeof props[state] === "undefined") {
                    acc[state] = muiFormControl[state];
                }
            }
            return acc;
        }), {});
    }
    const FormControlContext = reactExports.createContext(undefined);
    function useFormControl() {
        return reactExports.useContext(FormControlContext);
    }
    function GlobalStyles(props) {
        return jsxRuntimeExports.jsx(GlobalStyles$1, _extends$1({}, props, {
            defaultTheme: defaultTheme$1,
            themeId: THEME_ID
        }));
    }
    function hasValue(value) {
        return value != null && !(Array.isArray(value) && value.length === 0);
    }
    function isFilled(obj, SSR = false) {
        return obj && (hasValue(obj.value) && obj.value !== "" || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== "");
    }
    function isAdornedStart(obj) {
        return obj.startAdornment;
    }
    function getInputBaseUtilityClass(slot) {
        return generateUtilityClass("MuiInputBase", slot);
    }
    const inputBaseClasses = generateUtilityClasses("MuiInputBase", [ "root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel" ]);
    const _excluded$v = [ "aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value" ];
    const rootOverridesResolver = (props, styles) => {
        const {ownerState: ownerState} = props;
        return [ styles.root, ownerState.formControl && styles.formControl, ownerState.startAdornment && styles.adornedStart, ownerState.endAdornment && styles.adornedEnd, ownerState.error && styles.error, ownerState.size === "small" && styles.sizeSmall, ownerState.multiline && styles.multiline, ownerState.color && styles[`color${capitalize$1(ownerState.color)}`], ownerState.fullWidth && styles.fullWidth, ownerState.hiddenLabel && styles.hiddenLabel ];
    };
    const inputOverridesResolver = (props, styles) => {
        const {ownerState: ownerState} = props;
        return [ styles.input, ownerState.size === "small" && styles.inputSizeSmall, ownerState.multiline && styles.inputMultiline, ownerState.type === "search" && styles.inputTypeSearch, ownerState.startAdornment && styles.inputAdornedStart, ownerState.endAdornment && styles.inputAdornedEnd, ownerState.hiddenLabel && styles.inputHiddenLabel ];
    };
    const useUtilityClasses$r = ownerState => {
        const {classes: classes, color: color, disabled: disabled, error: error, endAdornment: endAdornment, focused: focused, formControl: formControl, fullWidth: fullWidth, hiddenLabel: hiddenLabel, multiline: multiline, readOnly: readOnly, size: size, startAdornment: startAdornment, type: type} = ownerState;
        const slots = {
            root: [ "root", `color${capitalize$1(color)}`, disabled && "disabled", error && "error", fullWidth && "fullWidth", focused && "focused", formControl && "formControl", size && size !== "medium" && `size${capitalize$1(size)}`, multiline && "multiline", startAdornment && "adornedStart", endAdornment && "adornedEnd", hiddenLabel && "hiddenLabel", readOnly && "readOnly" ],
            input: [ "input", disabled && "disabled", type === "search" && "inputTypeSearch", multiline && "inputMultiline", size === "small" && "inputSizeSmall", hiddenLabel && "inputHiddenLabel", startAdornment && "inputAdornedStart", endAdornment && "inputAdornedEnd", readOnly && "readOnly" ]
        };
        return composeClasses(slots, getInputBaseUtilityClass, classes);
    };
    const InputBaseRoot = styled("div", {
        name: "MuiInputBase",
        slot: "Root",
        overridesResolver: rootOverridesResolver
    })((({theme: theme, ownerState: ownerState}) => _extends$1({}, theme.typography.body1, {
        color: (theme.vars || theme).palette.text.primary,
        lineHeight: "1.4375em",
        boxSizing: "border-box",
        position: "relative",
        cursor: "text",
        display: "inline-flex",
        alignItems: "center",
        [`&.${inputBaseClasses.disabled}`]: {
            color: (theme.vars || theme).palette.text.disabled,
            cursor: "default"
        }
    }, ownerState.multiline && _extends$1({
        padding: "4px 0 5px"
    }, ownerState.size === "small" && {
        paddingTop: 1
    }), ownerState.fullWidth && {
        width: "100%"
    })));
    const InputBaseComponent = styled("input", {
        name: "MuiInputBase",
        slot: "Input",
        overridesResolver: inputOverridesResolver
    })((({theme: theme, ownerState: ownerState}) => {
        const light = theme.palette.mode === "light";
        const placeholder = _extends$1({
            color: "currentColor"
        }, theme.vars ? {
            opacity: theme.vars.opacity.inputPlaceholder
        } : {
            opacity: light ? .42 : .5
        }, {
            transition: theme.transitions.create("opacity", {
                duration: theme.transitions.duration.shorter
            })
        });
        const placeholderHidden = {
            opacity: "0 !important"
        };
        const placeholderVisible = theme.vars ? {
            opacity: theme.vars.opacity.inputPlaceholder
        } : {
            opacity: light ? .42 : .5
        };
        return _extends$1({
            font: "inherit",
            letterSpacing: "inherit",
            color: "currentColor",
            padding: "4px 0 5px",
            border: 0,
            boxSizing: "content-box",
            background: "none",
            height: "1.4375em",
            margin: 0,
            WebkitTapHighlightColor: "transparent",
            display: "block",
            minWidth: 0,
            width: "100%",
            animationName: "mui-auto-fill-cancel",
            animationDuration: "10ms",
            "&::-webkit-input-placeholder": placeholder,
            "&::-moz-placeholder": placeholder,
            "&:-ms-input-placeholder": placeholder,
            "&::-ms-input-placeholder": placeholder,
            "&:focus": {
                outline: 0
            },
            "&:invalid": {
                boxShadow: "none"
            },
            "&::-webkit-search-decoration": {
                WebkitAppearance: "none"
            },
            [`label[data-shrink=false] + .${inputBaseClasses.formControl} &`]: {
                "&::-webkit-input-placeholder": placeholderHidden,
                "&::-moz-placeholder": placeholderHidden,
                "&:-ms-input-placeholder": placeholderHidden,
                "&::-ms-input-placeholder": placeholderHidden,
                "&:focus::-webkit-input-placeholder": placeholderVisible,
                "&:focus::-moz-placeholder": placeholderVisible,
                "&:focus:-ms-input-placeholder": placeholderVisible,
                "&:focus::-ms-input-placeholder": placeholderVisible
            },
            [`&.${inputBaseClasses.disabled}`]: {
                opacity: 1,
                WebkitTextFillColor: (theme.vars || theme).palette.text.disabled
            },
            "&:-webkit-autofill": {
                animationDuration: "5000s",
                animationName: "mui-auto-fill"
            }
        }, ownerState.size === "small" && {
            paddingTop: 1
        }, ownerState.multiline && {
            height: "auto",
            resize: "none",
            padding: 0,
            paddingTop: 0
        }, ownerState.type === "search" && {
            MozAppearance: "textfield"
        });
    }));
    const inputGlobalStyles = jsxRuntimeExports.jsx(GlobalStyles, {
        styles: {
            "@keyframes mui-auto-fill": {
                from: {
                    display: "block"
                }
            },
            "@keyframes mui-auto-fill-cancel": {
                from: {
                    display: "block"
                }
            }
        }
    });
    const InputBase = reactExports.forwardRef((function InputBase(inProps, ref) {
        var _slotProps$input;
        const props = useDefaultProps({
            props: inProps,
            name: "MuiInputBase"
        });
        const {"aria-describedby": ariaDescribedby, autoComplete: autoComplete, autoFocus: autoFocus, className: className, components: components = {}, componentsProps: componentsProps = {}, defaultValue: defaultValue, disabled: disabled, disableInjectingGlobalStyles: disableInjectingGlobalStyles, endAdornment: endAdornment, fullWidth: fullWidth = false, id: id, inputComponent: inputComponent = "input", inputProps: inputPropsProp = {}, inputRef: inputRefProp, maxRows: maxRows, minRows: minRows, multiline: multiline = false, name: name, onBlur: onBlur, onChange: onChange, onClick: onClick, onFocus: onFocus, onKeyDown: onKeyDown, onKeyUp: onKeyUp, placeholder: placeholder, readOnly: readOnly, renderSuffix: renderSuffix, rows: rows, slotProps: slotProps = {}, slots: slots = {}, startAdornment: startAdornment, type: type = "text", value: valueProp} = props, other = _objectWithoutPropertiesLoose(props, _excluded$v);
        const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
        const {current: isControlled} = reactExports.useRef(value != null);
        const inputRef = reactExports.useRef();
        const handleInputRefWarning = reactExports.useCallback((instance => {}), []);
        const handleInputRef = useForkRef(inputRef, inputRefProp, inputPropsProp.ref, handleInputRefWarning);
        const [focused, setFocused] = reactExports.useState(false);
        const muiFormControl = useFormControl();
        const fcs = formControlState({
            props: props,
            muiFormControl: muiFormControl,
            states: [ "color", "disabled", "error", "hiddenLabel", "size", "required", "filled" ]
        });
        fcs.focused = muiFormControl ? muiFormControl.focused : focused;
        reactExports.useEffect((() => {
            if (!muiFormControl && disabled && focused) {
                setFocused(false);
                if (onBlur) {
                    onBlur();
                }
            }
        }), [ muiFormControl, disabled, focused, onBlur ]);
        const onFilled = muiFormControl && muiFormControl.onFilled;
        const onEmpty = muiFormControl && muiFormControl.onEmpty;
        const checkDirty = reactExports.useCallback((obj => {
            if (isFilled(obj)) {
                if (onFilled) {
                    onFilled();
                }
            } else if (onEmpty) {
                onEmpty();
            }
        }), [ onFilled, onEmpty ]);
        useEnhancedEffect((() => {
            if (isControlled) {
                checkDirty({
                    value: value
                });
            }
        }), [ value, checkDirty, isControlled ]);
        const handleFocus = event => {
            if (fcs.disabled) {
                event.stopPropagation();
                return;
            }
            if (onFocus) {
                onFocus(event);
            }
            if (inputPropsProp.onFocus) {
                inputPropsProp.onFocus(event);
            }
            if (muiFormControl && muiFormControl.onFocus) {
                muiFormControl.onFocus(event);
            } else {
                setFocused(true);
            }
        };
        const handleBlur = event => {
            if (onBlur) {
                onBlur(event);
            }
            if (inputPropsProp.onBlur) {
                inputPropsProp.onBlur(event);
            }
            if (muiFormControl && muiFormControl.onBlur) {
                muiFormControl.onBlur(event);
            } else {
                setFocused(false);
            }
        };
        const handleChange = (event, ...args) => {
            if (!isControlled) {
                const element = event.target || inputRef.current;
                if (element == null) {
                    throw new Error(formatMuiErrorMessage$1(1));
                }
                checkDirty({
                    value: element.value
                });
            }
            if (inputPropsProp.onChange) {
                inputPropsProp.onChange(event, ...args);
            }
            if (onChange) {
                onChange(event, ...args);
            }
        };
        reactExports.useEffect((() => {
            checkDirty(inputRef.current);
        }), []);
        const handleClick = event => {
            if (inputRef.current && event.currentTarget === event.target) {
                inputRef.current.focus();
            }
            if (onClick) {
                onClick(event);
            }
        };
        let InputComponent = inputComponent;
        let inputProps = inputPropsProp;
        if (multiline && InputComponent === "input") {
            if (rows) {
                inputProps = _extends$1({
                    type: undefined,
                    minRows: rows,
                    maxRows: rows
                }, inputProps);
            } else {
                inputProps = _extends$1({
                    type: undefined,
                    maxRows: maxRows,
                    minRows: minRows
                }, inputProps);
            }
            InputComponent = TextareaAutosize;
        }
        const handleAutoFill = event => {
            checkDirty(event.animationName === "mui-auto-fill-cancel" ? inputRef.current : {
                value: "x"
            });
        };
        reactExports.useEffect((() => {
            if (muiFormControl) {
                muiFormControl.setAdornedStart(Boolean(startAdornment));
            }
        }), [ muiFormControl, startAdornment ]);
        const ownerState = _extends$1({}, props, {
            color: fcs.color || "primary",
            disabled: fcs.disabled,
            endAdornment: endAdornment,
            error: fcs.error,
            focused: fcs.focused,
            formControl: muiFormControl,
            fullWidth: fullWidth,
            hiddenLabel: fcs.hiddenLabel,
            multiline: multiline,
            size: fcs.size,
            startAdornment: startAdornment,
            type: type
        });
        const classes = useUtilityClasses$r(ownerState);
        const Root = slots.root || components.Root || InputBaseRoot;
        const rootProps = slotProps.root || componentsProps.root || {};
        const Input = slots.input || components.Input || InputBaseComponent;
        inputProps = _extends$1({}, inputProps, (_slotProps$input = slotProps.input) != null ? _slotProps$input : componentsProps.input);
        return jsxRuntimeExports.jsxs(reactExports.Fragment, {
            children: [ !disableInjectingGlobalStyles && inputGlobalStyles, jsxRuntimeExports.jsxs(Root, _extends$1({}, rootProps, !isHostComponent(Root) && {
                ownerState: _extends$1({}, ownerState, rootProps.ownerState)
            }, {
                ref: ref,
                onClick: handleClick
            }, other, {
                className: clsx(classes.root, rootProps.className, className, readOnly && "MuiInputBase-readOnly"),
                children: [ startAdornment, jsxRuntimeExports.jsx(FormControlContext.Provider, {
                    value: null,
                    children: jsxRuntimeExports.jsx(Input, _extends$1({
                        ownerState: ownerState,
                        "aria-invalid": fcs.error,
                        "aria-describedby": ariaDescribedby,
                        autoComplete: autoComplete,
                        autoFocus: autoFocus,
                        defaultValue: defaultValue,
                        disabled: fcs.disabled,
                        id: id,
                        onAnimationStart: handleAutoFill,
                        name: name,
                        placeholder: placeholder,
                        readOnly: readOnly,
                        required: fcs.required,
                        rows: rows,
                        value: value,
                        onKeyDown: onKeyDown,
                        onKeyUp: onKeyUp,
                        type: type
                    }, inputProps, !isHostComponent(Input) && {
                        as: InputComponent,
                        ownerState: _extends$1({}, ownerState, inputProps.ownerState)
                    }, {
                        ref: handleInputRef,
                        className: clsx(classes.input, inputProps.className, readOnly && "MuiInputBase-readOnly"),
                        onBlur: handleBlur,
                        onChange: handleChange,
                        onFocus: handleFocus
                    }))
                }), endAdornment, renderSuffix ? renderSuffix(_extends$1({}, fcs, {
                    startAdornment: startAdornment
                })) : null ]
            })) ]
        });
    }));
    function getInputUtilityClass(slot) {
        return generateUtilityClass("MuiInput", slot);
    }
    const inputClasses = _extends$1({}, inputBaseClasses, generateUtilityClasses("MuiInput", [ "root", "underline", "input" ]));
    function getOutlinedInputUtilityClass(slot) {
        return generateUtilityClass("MuiOutlinedInput", slot);
    }
    const outlinedInputClasses = _extends$1({}, inputBaseClasses, generateUtilityClasses("MuiOutlinedInput", [ "root", "notchedOutline", "input" ]));
    function getFilledInputUtilityClass(slot) {
        return generateUtilityClass("MuiFilledInput", slot);
    }
    const filledInputClasses = _extends$1({}, inputBaseClasses, generateUtilityClasses("MuiFilledInput", [ "root", "underline", "input" ]));
    var ArrowDropDownIcon = createSvgIcon(jsxRuntimeExports.jsx("path", {
        d: "M7 10l5 5 5-5z"
    }), "ArrowDropDown");
    const _excluded$u = [ "addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent" ];
    const styles$1 = {
        entering: {
            opacity: 1
        },
        entered: {
            opacity: 1
        }
    };
    const Fade = reactExports.forwardRef((function Fade(props, ref) {
        const theme = useTheme();
        const defaultTimeout = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
        };
        const {addEndListener: addEndListener, appear: appear = true, children: children, easing: easing, in: inProp, onEnter: onEnter, onEntered: onEntered, onEntering: onEntering, onExit: onExit, onExited: onExited, onExiting: onExiting, style: style, timeout: timeout = defaultTimeout, TransitionComponent: TransitionComponent = Transition} = props, other = _objectWithoutPropertiesLoose(props, _excluded$u);
        const nodeRef = reactExports.useRef(null);
        const handleRef = useForkRef(nodeRef, getReactElementRef(children), ref);
        const normalizedTransitionCallback = callback => maybeIsAppearing => {
            if (callback) {
                const node = nodeRef.current;
                if (maybeIsAppearing === undefined) {
                    callback(node);
                } else {
                    callback(node, maybeIsAppearing);
                }
            }
        };
        const handleEntering = normalizedTransitionCallback(onEntering);
        const handleEnter = normalizedTransitionCallback(((node, isAppearing) => {
            reflow(node);
            const transitionProps = getTransitionProps({
                style: style,
                timeout: timeout,
                easing: easing
            }, {
                mode: "enter"
            });
            node.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
            node.style.transition = theme.transitions.create("opacity", transitionProps);
            if (onEnter) {
                onEnter(node, isAppearing);
            }
        }));
        const handleEntered = normalizedTransitionCallback(onEntered);
        const handleExiting = normalizedTransitionCallback(onExiting);
        const handleExit = normalizedTransitionCallback((node => {
            const transitionProps = getTransitionProps({
                style: style,
                timeout: timeout,
                easing: easing
            }, {
                mode: "exit"
            });
            node.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
            node.style.transition = theme.transitions.create("opacity", transitionProps);
            if (onExit) {
                onExit(node);
            }
        }));
        const handleExited = normalizedTransitionCallback(onExited);
        const handleAddEndListener = next => {
            if (addEndListener) {
                addEndListener(nodeRef.current, next);
            }
        };
        return jsxRuntimeExports.jsx(TransitionComponent, _extends$1({
            appear: appear,
            in: inProp,
            nodeRef: nodeRef,
            onEnter: handleEnter,
            onEntered: handleEntered,
            onEntering: handleEntering,
            onExit: handleExit,
            onExited: handleExited,
            onExiting: handleExiting,
            addEndListener: handleAddEndListener,
            timeout: timeout
        }, other, {
            children: (state, childProps) => reactExports.cloneElement(children, _extends$1({
                style: _extends$1({
                    opacity: 0,
                    visibility: state === "exited" && !inProp ? "hidden" : undefined
                }, styles$1[state], style, children.props.style),
                ref: handleRef
            }, childProps))
        }));
    }));
    function getBackdropUtilityClass(slot) {
        return generateUtilityClass("MuiBackdrop", slot);
    }
    generateUtilityClasses("MuiBackdrop", [ "root", "invisible" ]);
    const _excluded$t = [ "children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration" ];
    const useUtilityClasses$q = ownerState => {
        const {classes: classes, invisible: invisible} = ownerState;
        const slots = {
            root: [ "root", invisible && "invisible" ]
        };
        return composeClasses(slots, getBackdropUtilityClass, classes);
    };
    const BackdropRoot = styled("div", {
        name: "MuiBackdrop",
        slot: "Root",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.root, ownerState.invisible && styles.invisible ];
        }
    })((({ownerState: ownerState}) => _extends$1({
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent"
    }, ownerState.invisible && {
        backgroundColor: "transparent"
    })));
    const Backdrop = reactExports.forwardRef((function Backdrop(inProps, ref) {
        var _slotProps$root, _ref, _slots$root;
        const props = useDefaultProps({
            props: inProps,
            name: "MuiBackdrop"
        });
        const {children: children, className: className, component: component = "div", components: components = {}, componentsProps: componentsProps = {}, invisible: invisible = false, open: open, slotProps: slotProps = {}, slots: slots = {}, TransitionComponent: TransitionComponent = Fade, transitionDuration: transitionDuration} = props, other = _objectWithoutPropertiesLoose(props, _excluded$t);
        const ownerState = _extends$1({}, props, {
            component: component,
            invisible: invisible
        });
        const classes = useUtilityClasses$q(ownerState);
        const rootSlotProps = (_slotProps$root = slotProps.root) != null ? _slotProps$root : componentsProps.root;
        return jsxRuntimeExports.jsx(TransitionComponent, _extends$1({
            in: open,
            timeout: transitionDuration
        }, other, {
            children: jsxRuntimeExports.jsx(BackdropRoot, _extends$1({
                "aria-hidden": true
            }, rootSlotProps, {
                as: (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : component,
                className: clsx(classes.root, className, rootSlotProps == null ? void 0 : rootSlotProps.className),
                ownerState: _extends$1({}, ownerState, rootSlotProps == null ? void 0 : rootSlotProps.ownerState),
                classes: classes,
                ref: ref,
                children: children
            }))
        }));
    }));
    const boxClasses = generateUtilityClasses("MuiBox", [ "root" ]);
    const defaultTheme = createTheme();
    const Box = createBox({
        themeId: THEME_ID,
        defaultTheme: defaultTheme,
        defaultClassName: boxClasses.root,
        generateClassName: ClassNameGenerator.generate
    });
    function getButtonUtilityClass(slot) {
        return generateUtilityClass("MuiButton", slot);
    }
    const buttonClasses = generateUtilityClasses("MuiButton", [ "root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge" ]);
    const ButtonGroupContext = reactExports.createContext({});
    const ButtonGroupButtonContext = reactExports.createContext(undefined);
    const _excluded$s = [ "children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant" ];
    const useUtilityClasses$p = ownerState => {
        const {color: color, disableElevation: disableElevation, fullWidth: fullWidth, size: size, variant: variant, classes: classes} = ownerState;
        const slots = {
            root: [ "root", variant, `${variant}${capitalize$1(color)}`, `size${capitalize$1(size)}`, `${variant}Size${capitalize$1(size)}`, `color${capitalize$1(color)}`, disableElevation && "disableElevation", fullWidth && "fullWidth" ],
            label: [ "label" ],
            startIcon: [ "icon", "startIcon", `iconSize${capitalize$1(size)}` ],
            endIcon: [ "icon", "endIcon", `iconSize${capitalize$1(size)}` ]
        };
        const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
        return _extends$1({}, classes, composedClasses);
    };
    const commonIconStyles = ownerState => _extends$1({}, ownerState.size === "small" && {
        "& > *:nth-of-type(1)": {
            fontSize: 18
        }
    }, ownerState.size === "medium" && {
        "& > *:nth-of-type(1)": {
            fontSize: 20
        }
    }, ownerState.size === "large" && {
        "& > *:nth-of-type(1)": {
            fontSize: 22
        }
    });
    const ButtonRoot = styled(ButtonBase, {
        shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === "classes",
        name: "MuiButton",
        slot: "Root",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${capitalize$1(ownerState.color)}`], styles[`size${capitalize$1(ownerState.size)}`], styles[`${ownerState.variant}Size${capitalize$1(ownerState.size)}`], ownerState.color === "inherit" && styles.colorInherit, ownerState.disableElevation && styles.disableElevation, ownerState.fullWidth && styles.fullWidth ];
        }
    })((({theme: theme, ownerState: ownerState}) => {
        var _theme$palette$getCon, _theme$palette;
        const inheritContainedBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey[300] : theme.palette.grey[800];
        const inheritContainedHoverBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey.A100 : theme.palette.grey[700];
        return _extends$1({}, theme.typography.button, {
            minWidth: 64,
            padding: "6px 16px",
            borderRadius: (theme.vars || theme).shape.borderRadius,
            transition: theme.transitions.create([ "background-color", "box-shadow", "border-color", "color" ], {
                duration: theme.transitions.duration.short
            }),
            "&:hover": _extends$1({
                textDecoration: "none",
                backgroundColor: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha_1(theme.palette.text.primary, theme.palette.action.hoverOpacity),
                "@media (hover: none)": {
                    backgroundColor: "transparent"
                }
            }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
                backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha_1(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
                "@media (hover: none)": {
                    backgroundColor: "transparent"
                }
            }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
                border: `1px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
                backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha_1(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
                "@media (hover: none)": {
                    backgroundColor: "transparent"
                }
            }, ownerState.variant === "contained" && {
                backgroundColor: theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
                boxShadow: (theme.vars || theme).shadows[4],
                "@media (hover: none)": {
                    boxShadow: (theme.vars || theme).shadows[2],
                    backgroundColor: (theme.vars || theme).palette.grey[300]
                }
            }, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
                backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
                "@media (hover: none)": {
                    backgroundColor: (theme.vars || theme).palette[ownerState.color].main
                }
            }),
            "&:active": _extends$1({}, ownerState.variant === "contained" && {
                boxShadow: (theme.vars || theme).shadows[8]
            }),
            [`&.${buttonClasses.focusVisible}`]: _extends$1({}, ownerState.variant === "contained" && {
                boxShadow: (theme.vars || theme).shadows[6]
            }),
            [`&.${buttonClasses.disabled}`]: _extends$1({
                color: (theme.vars || theme).palette.action.disabled
            }, ownerState.variant === "outlined" && {
                border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
            }, ownerState.variant === "contained" && {
                color: (theme.vars || theme).palette.action.disabled,
                boxShadow: (theme.vars || theme).shadows[0],
                backgroundColor: (theme.vars || theme).palette.action.disabledBackground
            })
        }, ownerState.variant === "text" && {
            padding: "6px 8px"
        }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
            color: (theme.vars || theme).palette[ownerState.color].main
        }, ownerState.variant === "outlined" && {
            padding: "5px 15px",
            border: "1px solid currentColor"
        }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
            color: (theme.vars || theme).palette[ownerState.color].main,
            border: theme.vars ? `1px solid rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)` : `1px solid ${alpha_1(theme.palette[ownerState.color].main, .5)}`
        }, ownerState.variant === "contained" && {
            color: theme.vars ? theme.vars.palette.text.primary : (_theme$palette$getCon = (_theme$palette = theme.palette).getContrastText) == null ? void 0 : _theme$palette$getCon.call(_theme$palette, theme.palette.grey[300]),
            backgroundColor: theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
            boxShadow: (theme.vars || theme).shadows[2]
        }, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
            color: (theme.vars || theme).palette[ownerState.color].contrastText,
            backgroundColor: (theme.vars || theme).palette[ownerState.color].main
        }, ownerState.color === "inherit" && {
            color: "inherit",
            borderColor: "currentColor"
        }, ownerState.size === "small" && ownerState.variant === "text" && {
            padding: "4px 5px",
            fontSize: theme.typography.pxToRem(13)
        }, ownerState.size === "large" && ownerState.variant === "text" && {
            padding: "8px 11px",
            fontSize: theme.typography.pxToRem(15)
        }, ownerState.size === "small" && ownerState.variant === "outlined" && {
            padding: "3px 9px",
            fontSize: theme.typography.pxToRem(13)
        }, ownerState.size === "large" && ownerState.variant === "outlined" && {
            padding: "7px 21px",
            fontSize: theme.typography.pxToRem(15)
        }, ownerState.size === "small" && ownerState.variant === "contained" && {
            padding: "4px 10px",
            fontSize: theme.typography.pxToRem(13)
        }, ownerState.size === "large" && ownerState.variant === "contained" && {
            padding: "8px 22px",
            fontSize: theme.typography.pxToRem(15)
        }, ownerState.fullWidth && {
            width: "100%"
        });
    }), (({ownerState: ownerState}) => ownerState.disableElevation && {
        boxShadow: "none",
        "&:hover": {
            boxShadow: "none"
        },
        [`&.${buttonClasses.focusVisible}`]: {
            boxShadow: "none"
        },
        "&:active": {
            boxShadow: "none"
        },
        [`&.${buttonClasses.disabled}`]: {
            boxShadow: "none"
        }
    }));
    const ButtonStartIcon = styled("span", {
        name: "MuiButton",
        slot: "StartIcon",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.startIcon, styles[`iconSize${capitalize$1(ownerState.size)}`] ];
        }
    })((({ownerState: ownerState}) => _extends$1({
        display: "inherit",
        marginRight: 8,
        marginLeft: -4
    }, ownerState.size === "small" && {
        marginLeft: -2
    }, commonIconStyles(ownerState))));
    const ButtonEndIcon = styled("span", {
        name: "MuiButton",
        slot: "EndIcon",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.endIcon, styles[`iconSize${capitalize$1(ownerState.size)}`] ];
        }
    })((({ownerState: ownerState}) => _extends$1({
        display: "inherit",
        marginRight: -4,
        marginLeft: 8
    }, ownerState.size === "small" && {
        marginRight: -2
    }, commonIconStyles(ownerState))));
    const Button = reactExports.forwardRef((function Button(inProps, ref) {
        const contextProps = reactExports.useContext(ButtonGroupContext);
        const buttonGroupButtonContextPositionClassName = reactExports.useContext(ButtonGroupButtonContext);
        const resolvedProps = resolveProps(contextProps, inProps);
        const props = useDefaultProps({
            props: resolvedProps,
            name: "MuiButton"
        });
        const {children: children, color: color = "primary", component: component = "button", className: className, disabled: disabled = false, disableElevation: disableElevation = false, disableFocusRipple: disableFocusRipple = false, endIcon: endIconProp, focusVisibleClassName: focusVisibleClassName, fullWidth: fullWidth = false, size: size = "medium", startIcon: startIconProp, type: type, variant: variant = "text"} = props, other = _objectWithoutPropertiesLoose(props, _excluded$s);
        const ownerState = _extends$1({}, props, {
            color: color,
            component: component,
            disabled: disabled,
            disableElevation: disableElevation,
            disableFocusRipple: disableFocusRipple,
            fullWidth: fullWidth,
            size: size,
            type: type,
            variant: variant
        });
        const classes = useUtilityClasses$p(ownerState);
        const startIcon = startIconProp && jsxRuntimeExports.jsx(ButtonStartIcon, {
            className: classes.startIcon,
            ownerState: ownerState,
            children: startIconProp
        });
        const endIcon = endIconProp && jsxRuntimeExports.jsx(ButtonEndIcon, {
            className: classes.endIcon,
            ownerState: ownerState,
            children: endIconProp
        });
        const positionClassName = buttonGroupButtonContextPositionClassName || "";
        return jsxRuntimeExports.jsxs(ButtonRoot, _extends$1({
            ownerState: ownerState,
            className: clsx(contextProps.className, classes.root, className, positionClassName),
            component: component,
            disabled: disabled,
            focusRipple: !disableFocusRipple,
            focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
            ref: ref,
            type: type
        }, other, {
            classes: classes,
            children: [ startIcon, children, endIcon ]
        }));
    }));
    function getSwitchBaseUtilityClass(slot) {
        return generateUtilityClass("PrivateSwitchBase", slot);
    }
    generateUtilityClasses("PrivateSwitchBase", [ "root", "checked", "disabled", "input", "edgeStart", "edgeEnd" ]);
    const _excluded$r = [ "autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value" ];
    const useUtilityClasses$o = ownerState => {
        const {classes: classes, checked: checked, disabled: disabled, edge: edge} = ownerState;
        const slots = {
            root: [ "root", checked && "checked", disabled && "disabled", edge && `edge${capitalize$1(edge)}` ],
            input: [ "input" ]
        };
        return composeClasses(slots, getSwitchBaseUtilityClass, classes);
    };
    const SwitchBaseRoot = styled(ButtonBase)((({ownerState: ownerState}) => _extends$1({
        padding: 9,
        borderRadius: "50%"
    }, ownerState.edge === "start" && {
        marginLeft: ownerState.size === "small" ? -3 : -12
    }, ownerState.edge === "end" && {
        marginRight: ownerState.size === "small" ? -3 : -12
    })));
    const SwitchBaseInput = styled("input", {
        shouldForwardProp: rootShouldForwardProp
    })({
        cursor: "inherit",
        position: "absolute",
        opacity: 0,
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        zIndex: 1
    });
    const SwitchBase = reactExports.forwardRef((function SwitchBase(props, ref) {
        const {autoFocus: autoFocus, checked: checkedProp, checkedIcon: checkedIcon, className: className, defaultChecked: defaultChecked, disabled: disabledProp, disableFocusRipple: disableFocusRipple = false, edge: edge = false, icon: icon, id: id, inputProps: inputProps, inputRef: inputRef, name: name, onBlur: onBlur, onChange: onChange, onFocus: onFocus, readOnly: readOnly, required: required = false, tabIndex: tabIndex, type: type, value: value} = props, other = _objectWithoutPropertiesLoose(props, _excluded$r);
        const [checked, setCheckedState] = useControlled({
            controlled: checkedProp,
            default: Boolean(defaultChecked),
            name: "SwitchBase",
            state: "checked"
        });
        const muiFormControl = useFormControl();
        const handleFocus = event => {
            if (onFocus) {
                onFocus(event);
            }
            if (muiFormControl && muiFormControl.onFocus) {
                muiFormControl.onFocus(event);
            }
        };
        const handleBlur = event => {
            if (onBlur) {
                onBlur(event);
            }
            if (muiFormControl && muiFormControl.onBlur) {
                muiFormControl.onBlur(event);
            }
        };
        const handleInputChange = event => {
            if (event.nativeEvent.defaultPrevented) {
                return;
            }
            const newChecked = event.target.checked;
            setCheckedState(newChecked);
            if (onChange) {
                onChange(event, newChecked);
            }
        };
        let disabled = disabledProp;
        if (muiFormControl) {
            if (typeof disabled === "undefined") {
                disabled = muiFormControl.disabled;
            }
        }
        const hasLabelFor = type === "checkbox" || type === "radio";
        const ownerState = _extends$1({}, props, {
            checked: checked,
            disabled: disabled,
            disableFocusRipple: disableFocusRipple,
            edge: edge
        });
        const classes = useUtilityClasses$o(ownerState);
        return jsxRuntimeExports.jsxs(SwitchBaseRoot, _extends$1({
            component: "span",
            className: clsx(classes.root, className),
            centerRipple: true,
            focusRipple: !disableFocusRipple,
            disabled: disabled,
            tabIndex: null,
            role: undefined,
            onFocus: handleFocus,
            onBlur: handleBlur,
            ownerState: ownerState,
            ref: ref
        }, other, {
            children: [ jsxRuntimeExports.jsx(SwitchBaseInput, _extends$1({
                autoFocus: autoFocus,
                checked: checkedProp,
                defaultChecked: defaultChecked,
                className: classes.input,
                disabled: disabled,
                id: hasLabelFor ? id : undefined,
                name: name,
                onChange: handleInputChange,
                readOnly: readOnly,
                ref: inputRef,
                required: required,
                ownerState: ownerState,
                tabIndex: tabIndex,
                type: type
            }, type === "checkbox" && value === undefined ? {} : {
                value: value
            }, inputProps)), checked ? checkedIcon : icon ]
        }));
    }));
    const html = (theme, enableColorScheme) => _extends$1({
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        boxSizing: "border-box",
        WebkitTextSizeAdjust: "100%"
    }, enableColorScheme && !theme.vars && {
        colorScheme: theme.palette.mode
    });
    const body = theme => _extends$1({
        color: (theme.vars || theme).palette.text.primary
    }, theme.typography.body1, {
        backgroundColor: (theme.vars || theme).palette.background.default,
        "@media print": {
            backgroundColor: (theme.vars || theme).palette.common.white
        }
    });
    function isOverflowing(container) {
        const doc = ownerDocument(container);
        if (doc.body === container) {
            return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
        }
        return container.scrollHeight > container.clientHeight;
    }
    function ariaHidden(element, show) {
        if (show) {
            element.setAttribute("aria-hidden", "true");
        } else {
            element.removeAttribute("aria-hidden");
        }
    }
    function getPaddingRight(element) {
        return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
    }
    function isAriaHiddenForbiddenOnElement(element) {
        const forbiddenTagNames = [ "TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK" ];
        const isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
        const isInputHidden = element.tagName === "INPUT" && element.getAttribute("type") === "hidden";
        return isForbiddenTagName || isInputHidden;
    }
    function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, show) {
        const blacklist = [ mountElement, currentElement, ...elementsToExclude ];
        [].forEach.call(container.children, (element => {
            const isNotExcludedElement = blacklist.indexOf(element) === -1;
            const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
            if (isNotExcludedElement && isNotForbiddenElement) {
                ariaHidden(element, show);
            }
        }));
    }
    function findIndexOf(items, callback) {
        let idx = -1;
        items.some(((item, index) => {
            if (callback(item)) {
                idx = index;
                return true;
            }
            return false;
        }));
        return idx;
    }
    function handleContainer(containerInfo, props) {
        const restoreStyle = [];
        const container = containerInfo.container;
        if (!props.disableScrollLock) {
            if (isOverflowing(container)) {
                const scrollbarSize = getScrollbarSize(ownerDocument(container));
                restoreStyle.push({
                    value: container.style.paddingRight,
                    property: "padding-right",
                    el: container
                });
                container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;
                const fixedElements = ownerDocument(container).querySelectorAll(".mui-fixed");
                [].forEach.call(fixedElements, (element => {
                    restoreStyle.push({
                        value: element.style.paddingRight,
                        property: "padding-right",
                        el: element
                    });
                    element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
                }));
            }
            let scrollContainer;
            if (container.parentNode instanceof DocumentFragment) {
                scrollContainer = ownerDocument(container).body;
            } else {
                const parent = container.parentElement;
                const containerWindow = ownerWindow(container);
                scrollContainer = (parent == null ? void 0 : parent.nodeName) === "HTML" && containerWindow.getComputedStyle(parent).overflowY === "scroll" ? parent : container;
            }
            restoreStyle.push({
                value: scrollContainer.style.overflow,
                property: "overflow",
                el: scrollContainer
            }, {
                value: scrollContainer.style.overflowX,
                property: "overflow-x",
                el: scrollContainer
            }, {
                value: scrollContainer.style.overflowY,
                property: "overflow-y",
                el: scrollContainer
            });
            scrollContainer.style.overflow = "hidden";
        }
        const restore = () => {
            restoreStyle.forEach((({value: value, el: el, property: property}) => {
                if (value) {
                    el.style.setProperty(property, value);
                } else {
                    el.style.removeProperty(property);
                }
            }));
        };
        return restore;
    }
    function getHiddenSiblings(container) {
        const hiddenSiblings = [];
        [].forEach.call(container.children, (element => {
            if (element.getAttribute("aria-hidden") === "true") {
                hiddenSiblings.push(element);
            }
        }));
        return hiddenSiblings;
    }
    class ModalManager {
        constructor() {
            this.containers = void 0;
            this.modals = void 0;
            this.modals = [];
            this.containers = [];
        }
        add(modal, container) {
            let modalIndex = this.modals.indexOf(modal);
            if (modalIndex !== -1) {
                return modalIndex;
            }
            modalIndex = this.modals.length;
            this.modals.push(modal);
            if (modal.modalRef) {
                ariaHidden(modal.modalRef, false);
            }
            const hiddenSiblings = getHiddenSiblings(container);
            ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
            const containerIndex = findIndexOf(this.containers, (item => item.container === container));
            if (containerIndex !== -1) {
                this.containers[containerIndex].modals.push(modal);
                return modalIndex;
            }
            this.containers.push({
                modals: [ modal ],
                container: container,
                restore: null,
                hiddenSiblings: hiddenSiblings
            });
            return modalIndex;
        }
        mount(modal, props) {
            const containerIndex = findIndexOf(this.containers, (item => item.modals.indexOf(modal) !== -1));
            const containerInfo = this.containers[containerIndex];
            if (!containerInfo.restore) {
                containerInfo.restore = handleContainer(containerInfo, props);
            }
        }
        remove(modal, ariaHiddenState = true) {
            const modalIndex = this.modals.indexOf(modal);
            if (modalIndex === -1) {
                return modalIndex;
            }
            const containerIndex = findIndexOf(this.containers, (item => item.modals.indexOf(modal) !== -1));
            const containerInfo = this.containers[containerIndex];
            containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
            this.modals.splice(modalIndex, 1);
            if (containerInfo.modals.length === 0) {
                if (containerInfo.restore) {
                    containerInfo.restore();
                }
                if (modal.modalRef) {
                    ariaHidden(modal.modalRef, ariaHiddenState);
                }
                ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
                this.containers.splice(containerIndex, 1);
            } else {
                const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
                if (nextTop.modalRef) {
                    ariaHidden(nextTop.modalRef, false);
                }
            }
            return modalIndex;
        }
        isTopModal(modal) {
            return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
        }
    }
    const candidatesSelector = [ "input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])' ].join(",");
    function getTabIndex(node) {
        const tabindexAttr = parseInt(node.getAttribute("tabindex") || "", 10);
        if (!Number.isNaN(tabindexAttr)) {
            return tabindexAttr;
        }
        if (node.contentEditable === "true" || (node.nodeName === "AUDIO" || node.nodeName === "VIDEO" || node.nodeName === "DETAILS") && node.getAttribute("tabindex") === null) {
            return 0;
        }
        return node.tabIndex;
    }
    function isNonTabbableRadio(node) {
        if (node.tagName !== "INPUT" || node.type !== "radio") {
            return false;
        }
        if (!node.name) {
            return false;
        }
        const getRadio = selector => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);
        let roving = getRadio(`[name="${node.name}"]:checked`);
        if (!roving) {
            roving = getRadio(`[name="${node.name}"]`);
        }
        return roving !== node;
    }
    function isNodeMatchingSelectorFocusable(node) {
        if (node.disabled || node.tagName === "INPUT" && node.type === "hidden" || isNonTabbableRadio(node)) {
            return false;
        }
        return true;
    }
    function defaultGetTabbable(root) {
        const regularTabNodes = [];
        const orderedTabNodes = [];
        Array.from(root.querySelectorAll(candidatesSelector)).forEach(((node, i) => {
            const nodeTabIndex = getTabIndex(node);
            if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
                return;
            }
            if (nodeTabIndex === 0) {
                regularTabNodes.push(node);
            } else {
                orderedTabNodes.push({
                    documentOrder: i,
                    tabIndex: nodeTabIndex,
                    node: node
                });
            }
        }));
        return orderedTabNodes.sort(((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex)).map((a => a.node)).concat(regularTabNodes);
    }
    function defaultIsEnabled() {
        return true;
    }
    function FocusTrap(props) {
        const {children: children, disableAutoFocus: disableAutoFocus = false, disableEnforceFocus: disableEnforceFocus = false, disableRestoreFocus: disableRestoreFocus = false, getTabbable: getTabbable = defaultGetTabbable, isEnabled: isEnabled = defaultIsEnabled, open: open} = props;
        const ignoreNextEnforceFocus = reactExports.useRef(false);
        const sentinelStart = reactExports.useRef(null);
        const sentinelEnd = reactExports.useRef(null);
        const nodeToRestore = reactExports.useRef(null);
        const reactFocusEventTarget = reactExports.useRef(null);
        const activated = reactExports.useRef(false);
        const rootRef = reactExports.useRef(null);
        const handleRef = useForkRef(getReactElementRef(children), rootRef);
        const lastKeydown = reactExports.useRef(null);
        reactExports.useEffect((() => {
            if (!open || !rootRef.current) {
                return;
            }
            activated.current = !disableAutoFocus;
        }), [ disableAutoFocus, open ]);
        reactExports.useEffect((() => {
            if (!open || !rootRef.current) {
                return;
            }
            const doc = ownerDocument(rootRef.current);
            if (!rootRef.current.contains(doc.activeElement)) {
                if (!rootRef.current.hasAttribute("tabIndex")) {
                    rootRef.current.setAttribute("tabIndex", "-1");
                }
                if (activated.current) {
                    rootRef.current.focus();
                }
            }
            return () => {
                if (!disableRestoreFocus) {
                    if (nodeToRestore.current && nodeToRestore.current.focus) {
                        ignoreNextEnforceFocus.current = true;
                        nodeToRestore.current.focus();
                    }
                    nodeToRestore.current = null;
                }
            };
        }), [ open ]);
        reactExports.useEffect((() => {
            if (!open || !rootRef.current) {
                return;
            }
            const doc = ownerDocument(rootRef.current);
            const loopFocus = nativeEvent => {
                lastKeydown.current = nativeEvent;
                if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== "Tab") {
                    return;
                }
                if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
                    ignoreNextEnforceFocus.current = true;
                    if (sentinelEnd.current) {
                        sentinelEnd.current.focus();
                    }
                }
            };
            const contain = () => {
                const rootElement = rootRef.current;
                if (rootElement === null) {
                    return;
                }
                if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
                    ignoreNextEnforceFocus.current = false;
                    return;
                }
                if (rootElement.contains(doc.activeElement)) {
                    return;
                }
                if (disableEnforceFocus && doc.activeElement !== sentinelStart.current && doc.activeElement !== sentinelEnd.current) {
                    return;
                }
                if (doc.activeElement !== reactFocusEventTarget.current) {
                    reactFocusEventTarget.current = null;
                } else if (reactFocusEventTarget.current !== null) {
                    return;
                }
                if (!activated.current) {
                    return;
                }
                let tabbable = [];
                if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
                    tabbable = getTabbable(rootRef.current);
                }
                if (tabbable.length > 0) {
                    var _lastKeydown$current, _lastKeydown$current2;
                    const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === "Tab");
                    const focusNext = tabbable[0];
                    const focusPrevious = tabbable[tabbable.length - 1];
                    if (typeof focusNext !== "string" && typeof focusPrevious !== "string") {
                        if (isShiftTab) {
                            focusPrevious.focus();
                        } else {
                            focusNext.focus();
                        }
                    }
                } else {
                    rootElement.focus();
                }
            };
            doc.addEventListener("focusin", contain);
            doc.addEventListener("keydown", loopFocus, true);
            const interval = setInterval((() => {
                if (doc.activeElement && doc.activeElement.tagName === "BODY") {
                    contain();
                }
            }), 50);
            return () => {
                clearInterval(interval);
                doc.removeEventListener("focusin", contain);
                doc.removeEventListener("keydown", loopFocus, true);
            };
        }), [ disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable ]);
        const onFocus = event => {
            if (nodeToRestore.current === null) {
                nodeToRestore.current = event.relatedTarget;
            }
            activated.current = true;
            reactFocusEventTarget.current = event.target;
            const childrenPropsHandler = children.props.onFocus;
            if (childrenPropsHandler) {
                childrenPropsHandler(event);
            }
        };
        const handleFocusSentinel = event => {
            if (nodeToRestore.current === null) {
                nodeToRestore.current = event.relatedTarget;
            }
            activated.current = true;
        };
        return jsxRuntimeExports.jsxs(reactExports.Fragment, {
            children: [ jsxRuntimeExports.jsx("div", {
                tabIndex: open ? 0 : -1,
                onFocus: handleFocusSentinel,
                ref: sentinelStart,
                "data-testid": "sentinelStart"
            }), reactExports.cloneElement(children, {
                ref: handleRef,
                onFocus: onFocus
            }), jsxRuntimeExports.jsx("div", {
                tabIndex: open ? 0 : -1,
                onFocus: handleFocusSentinel,
                ref: sentinelEnd,
                "data-testid": "sentinelEnd"
            }) ]
        });
    }
    function getContainer(container) {
        return typeof container === "function" ? container() : container;
    }
    function getHasTransition(children) {
        return children ? children.props.hasOwnProperty("in") : false;
    }
    const defaultManager = new ModalManager;
    function useModal(parameters) {
        const {container: container, disableEscapeKeyDown: disableEscapeKeyDown = false, disableScrollLock: disableScrollLock = false, manager: manager = defaultManager, closeAfterTransition: closeAfterTransition = false, onTransitionEnter: onTransitionEnter, onTransitionExited: onTransitionExited, children: children, onClose: onClose, open: open, rootRef: rootRef} = parameters;
        const modal = reactExports.useRef({});
        const mountNodeRef = reactExports.useRef(null);
        const modalRef = reactExports.useRef(null);
        const handleRef = useForkRef(modalRef, rootRef);
        const [exited, setExited] = reactExports.useState(!open);
        const hasTransition = getHasTransition(children);
        let ariaHiddenProp = true;
        if (parameters["aria-hidden"] === "false" || parameters["aria-hidden"] === false) {
            ariaHiddenProp = false;
        }
        const getDoc = () => ownerDocument(mountNodeRef.current);
        const getModal = () => {
            modal.current.modalRef = modalRef.current;
            modal.current.mount = mountNodeRef.current;
            return modal.current;
        };
        const handleMounted = () => {
            manager.mount(getModal(), {
                disableScrollLock: disableScrollLock
            });
            if (modalRef.current) {
                modalRef.current.scrollTop = 0;
            }
        };
        const handleOpen = useEventCallback((() => {
            const resolvedContainer = getContainer(container) || getDoc().body;
            manager.add(getModal(), resolvedContainer);
            if (modalRef.current) {
                handleMounted();
            }
        }));
        const isTopModal = reactExports.useCallback((() => manager.isTopModal(getModal())), [ manager ]);
        const handlePortalRef = useEventCallback((node => {
            mountNodeRef.current = node;
            if (!node) {
                return;
            }
            if (open && isTopModal()) {
                handleMounted();
            } else if (modalRef.current) {
                ariaHidden(modalRef.current, ariaHiddenProp);
            }
        }));
        const handleClose = reactExports.useCallback((() => {
            manager.remove(getModal(), ariaHiddenProp);
        }), [ ariaHiddenProp, manager ]);
        reactExports.useEffect((() => () => {
            handleClose();
        }), [ handleClose ]);
        reactExports.useEffect((() => {
            if (open) {
                handleOpen();
            } else if (!hasTransition || !closeAfterTransition) {
                handleClose();
            }
        }), [ open, handleClose, hasTransition, closeAfterTransition, handleOpen ]);
        const createHandleKeyDown = otherHandlers => event => {
            var _otherHandlers$onKeyD;
            (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
            if (event.key !== "Escape" || event.which === 229 || !isTopModal()) {
                return;
            }
            if (!disableEscapeKeyDown) {
                event.stopPropagation();
                if (onClose) {
                    onClose(event, "escapeKeyDown");
                }
            }
        };
        const createHandleBackdropClick = otherHandlers => event => {
            var _otherHandlers$onClic;
            (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
            if (event.target !== event.currentTarget) {
                return;
            }
            if (onClose) {
                onClose(event, "backdropClick");
            }
        };
        const getRootProps = (otherHandlers = {}) => {
            const propsEventHandlers = extractEventHandlers(parameters);
            delete propsEventHandlers.onTransitionEnter;
            delete propsEventHandlers.onTransitionExited;
            const externalEventHandlers = _extends$1({}, propsEventHandlers, otherHandlers);
            return _extends$1({
                role: "presentation"
            }, externalEventHandlers, {
                onKeyDown: createHandleKeyDown(externalEventHandlers),
                ref: handleRef
            });
        };
        const getBackdropProps = (otherHandlers = {}) => {
            const externalEventHandlers = otherHandlers;
            return _extends$1({
                "aria-hidden": true
            }, externalEventHandlers, {
                onClick: createHandleBackdropClick(externalEventHandlers),
                open: open
            });
        };
        const getTransitionProps = () => {
            const handleEnter = () => {
                setExited(false);
                if (onTransitionEnter) {
                    onTransitionEnter();
                }
            };
            const handleExited = () => {
                setExited(true);
                if (onTransitionExited) {
                    onTransitionExited();
                }
                if (closeAfterTransition) {
                    handleClose();
                }
            };
            return {
                onEnter: createChainedFunction(handleEnter, children == null ? void 0 : children.props.onEnter),
                onExited: createChainedFunction(handleExited, children == null ? void 0 : children.props.onExited)
            };
        };
        return {
            getRootProps: getRootProps,
            getBackdropProps: getBackdropProps,
            getTransitionProps: getTransitionProps,
            rootRef: handleRef,
            portalRef: handlePortalRef,
            isTopModal: isTopModal,
            exited: exited,
            hasTransition: hasTransition
        };
    }
    function getModalUtilityClass(slot) {
        return generateUtilityClass("MuiModal", slot);
    }
    generateUtilityClasses("MuiModal", [ "root", "hidden", "backdrop" ]);
    const _excluded$q = [ "BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme" ];
    const useUtilityClasses$n = ownerState => {
        const {open: open, exited: exited, classes: classes} = ownerState;
        const slots = {
            root: [ "root", !open && exited && "hidden" ],
            backdrop: [ "backdrop" ]
        };
        return composeClasses(slots, getModalUtilityClass, classes);
    };
    const ModalRoot = styled("div", {
        name: "MuiModal",
        slot: "Root",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.root, !ownerState.open && ownerState.exited && styles.hidden ];
        }
    })((({theme: theme, ownerState: ownerState}) => _extends$1({
        position: "fixed",
        zIndex: (theme.vars || theme).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0
    }, !ownerState.open && ownerState.exited && {
        visibility: "hidden"
    })));
    const ModalBackdrop = styled(Backdrop, {
        name: "MuiModal",
        slot: "Backdrop",
        overridesResolver: (props, styles) => styles.backdrop
    })({
        zIndex: -1
    });
    const Modal = reactExports.forwardRef((function Modal(inProps, ref) {
        var _ref, _slots$root, _ref2, _slots$backdrop, _slotProps$root, _slotProps$backdrop;
        const props = useDefaultProps({
            name: "MuiModal",
            props: inProps
        });
        const {BackdropComponent: BackdropComponent = ModalBackdrop, BackdropProps: BackdropProps, className: className, closeAfterTransition: closeAfterTransition = false, children: children, container: container, component: component, components: components = {}, componentsProps: componentsProps = {}, disableAutoFocus: disableAutoFocus = false, disableEnforceFocus: disableEnforceFocus = false, disableEscapeKeyDown: disableEscapeKeyDown = false, disablePortal: disablePortal = false, disableRestoreFocus: disableRestoreFocus = false, disableScrollLock: disableScrollLock = false, hideBackdrop: hideBackdrop = false, keepMounted: keepMounted = false, onBackdropClick: onBackdropClick, open: open, slotProps: slotProps, slots: slots} = props, other = _objectWithoutPropertiesLoose(props, _excluded$q);
        const propsWithDefaults = _extends$1({}, props, {
            closeAfterTransition: closeAfterTransition,
            disableAutoFocus: disableAutoFocus,
            disableEnforceFocus: disableEnforceFocus,
            disableEscapeKeyDown: disableEscapeKeyDown,
            disablePortal: disablePortal,
            disableRestoreFocus: disableRestoreFocus,
            disableScrollLock: disableScrollLock,
            hideBackdrop: hideBackdrop,
            keepMounted: keepMounted
        });
        const {getRootProps: getRootProps, getBackdropProps: getBackdropProps, getTransitionProps: getTransitionProps, portalRef: portalRef, isTopModal: isTopModal, exited: exited, hasTransition: hasTransition} = useModal(_extends$1({}, propsWithDefaults, {
            rootRef: ref
        }));
        const ownerState = _extends$1({}, propsWithDefaults, {
            exited: exited
        });
        const classes = useUtilityClasses$n(ownerState);
        const childProps = {};
        if (children.props.tabIndex === undefined) {
            childProps.tabIndex = "-1";
        }
        if (hasTransition) {
            const {onEnter: onEnter, onExited: onExited} = getTransitionProps();
            childProps.onEnter = onEnter;
            childProps.onExited = onExited;
        }
        const RootSlot = (_ref = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components.Root) != null ? _ref : ModalRoot;
        const BackdropSlot = (_ref2 = (_slots$backdrop = slots == null ? void 0 : slots.backdrop) != null ? _slots$backdrop : components.Backdrop) != null ? _ref2 : BackdropComponent;
        const rootSlotProps = (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null ? _slotProps$root : componentsProps.root;
        const backdropSlotProps = (_slotProps$backdrop = slotProps == null ? void 0 : slotProps.backdrop) != null ? _slotProps$backdrop : componentsProps.backdrop;
        const rootProps = useSlotProps({
            elementType: RootSlot,
            externalSlotProps: rootSlotProps,
            externalForwardedProps: other,
            getSlotProps: getRootProps,
            additionalProps: {
                ref: ref,
                as: component
            },
            ownerState: ownerState,
            className: clsx(className, rootSlotProps == null ? void 0 : rootSlotProps.className, classes == null ? void 0 : classes.root, !ownerState.open && ownerState.exited && (classes == null ? void 0 : classes.hidden))
        });
        const backdropProps = useSlotProps({
            elementType: BackdropSlot,
            externalSlotProps: backdropSlotProps,
            additionalProps: BackdropProps,
            getSlotProps: otherHandlers => getBackdropProps(_extends$1({}, otherHandlers, {
                onClick: e => {
                    if (onBackdropClick) {
                        onBackdropClick(e);
                    }
                    if (otherHandlers != null && otherHandlers.onClick) {
                        otherHandlers.onClick(e);
                    }
                }
            })),
            className: clsx(backdropSlotProps == null ? void 0 : backdropSlotProps.className, BackdropProps == null ? void 0 : BackdropProps.className, classes == null ? void 0 : classes.backdrop),
            ownerState: ownerState
        });
        if (!keepMounted && !open && (!hasTransition || exited)) {
            return null;
        }
        return jsxRuntimeExports.jsx(Portal, {
            ref: portalRef,
            container: container,
            disablePortal: disablePortal,
            children: jsxRuntimeExports.jsxs(RootSlot, _extends$1({}, rootProps, {
                children: [ !hideBackdrop && BackdropComponent ? jsxRuntimeExports.jsx(BackdropSlot, _extends$1({}, backdropProps)) : null, jsxRuntimeExports.jsx(FocusTrap, {
                    disableEnforceFocus: disableEnforceFocus,
                    disableAutoFocus: disableAutoFocus,
                    disableRestoreFocus: disableRestoreFocus,
                    isEnabled: isTopModal,
                    open: open,
                    children: reactExports.cloneElement(children, childProps)
                }) ]
            }))
        });
    }));
    function getDialogUtilityClass(slot) {
        return generateUtilityClass("MuiDialog", slot);
    }
    const dialogClasses = generateUtilityClasses("MuiDialog", [ "root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen" ]);
    const DialogContext = reactExports.createContext({});
    const _excluded$p = [ "aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps" ];
    const DialogBackdrop = styled(Backdrop, {
        name: "MuiDialog",
        slot: "Backdrop",
        overrides: (props, styles) => styles.backdrop
    })({
        zIndex: -1
    });
    const useUtilityClasses$m = ownerState => {
        const {classes: classes, scroll: scroll, maxWidth: maxWidth, fullWidth: fullWidth, fullScreen: fullScreen} = ownerState;
        const slots = {
            root: [ "root" ],
            container: [ "container", `scroll${capitalize$1(scroll)}` ],
            paper: [ "paper", `paperScroll${capitalize$1(scroll)}`, `paperWidth${capitalize$1(String(maxWidth))}`, fullWidth && "paperFullWidth", fullScreen && "paperFullScreen" ]
        };
        return composeClasses(slots, getDialogUtilityClass, classes);
    };
    const DialogRoot = styled(Modal, {
        name: "MuiDialog",
        slot: "Root",
        overridesResolver: (props, styles) => styles.root
    })({
        "@media print": {
            position: "absolute !important"
        }
    });
    const DialogContainer = styled("div", {
        name: "MuiDialog",
        slot: "Container",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.container, styles[`scroll${capitalize$1(ownerState.scroll)}`] ];
        }
    })((({ownerState: ownerState}) => _extends$1({
        height: "100%",
        "@media print": {
            height: "auto"
        },
        outline: 0
    }, ownerState.scroll === "paper" && {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }, ownerState.scroll === "body" && {
        overflowY: "auto",
        overflowX: "hidden",
        textAlign: "center",
        "&::after": {
            content: '""',
            display: "inline-block",
            verticalAlign: "middle",
            height: "100%",
            width: "0"
        }
    })));
    const DialogPaper = styled(Paper, {
        name: "MuiDialog",
        slot: "Paper",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.paper, styles[`scrollPaper${capitalize$1(ownerState.scroll)}`], styles[`paperWidth${capitalize$1(String(ownerState.maxWidth))}`], ownerState.fullWidth && styles.paperFullWidth, ownerState.fullScreen && styles.paperFullScreen ];
        }
    })((({theme: theme, ownerState: ownerState}) => _extends$1({
        margin: 32,
        position: "relative",
        overflowY: "auto",
        "@media print": {
            overflowY: "visible",
            boxShadow: "none"
        }
    }, ownerState.scroll === "paper" && {
        display: "flex",
        flexDirection: "column",
        maxHeight: "calc(100% - 64px)"
    }, ownerState.scroll === "body" && {
        display: "inline-block",
        verticalAlign: "middle",
        textAlign: "left"
    }, !ownerState.maxWidth && {
        maxWidth: "calc(100% - 64px)"
    }, ownerState.maxWidth === "xs" && {
        maxWidth: theme.breakpoints.unit === "px" ? Math.max(theme.breakpoints.values.xs, 444) : `max(${theme.breakpoints.values.xs}${theme.breakpoints.unit}, 444px)`,
        [`&.${dialogClasses.paperScrollBody}`]: {
            [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
                maxWidth: "calc(100% - 64px)"
            }
        }
    }, ownerState.maxWidth && ownerState.maxWidth !== "xs" && {
        maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`,
        [`&.${dialogClasses.paperScrollBody}`]: {
            [theme.breakpoints.down(theme.breakpoints.values[ownerState.maxWidth] + 32 * 2)]: {
                maxWidth: "calc(100% - 64px)"
            }
        }
    }, ownerState.fullWidth && {
        width: "calc(100% - 64px)"
    }, ownerState.fullScreen && {
        margin: 0,
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        maxHeight: "none",
        borderRadius: 0,
        [`&.${dialogClasses.paperScrollBody}`]: {
            margin: 0,
            maxWidth: "100%"
        }
    })));
    const Dialog = reactExports.forwardRef((function Dialog(inProps, ref) {
        const props = useDefaultProps({
            props: inProps,
            name: "MuiDialog"
        });
        const theme = useTheme();
        const defaultTransitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
        };
        const {"aria-describedby": ariaDescribedby, "aria-labelledby": ariaLabelledbyProp, BackdropComponent: BackdropComponent, BackdropProps: BackdropProps, children: children, className: className, disableEscapeKeyDown: disableEscapeKeyDown = false, fullScreen: fullScreen = false, fullWidth: fullWidth = false, maxWidth: maxWidth = "sm", onBackdropClick: onBackdropClick, onClick: onClick, onClose: onClose, open: open, PaperComponent: PaperComponent = Paper, PaperProps: PaperProps = {}, scroll: scroll = "paper", TransitionComponent: TransitionComponent = Fade, transitionDuration: transitionDuration = defaultTransitionDuration, TransitionProps: TransitionProps} = props, other = _objectWithoutPropertiesLoose(props, _excluded$p);
        const ownerState = _extends$1({}, props, {
            disableEscapeKeyDown: disableEscapeKeyDown,
            fullScreen: fullScreen,
            fullWidth: fullWidth,
            maxWidth: maxWidth,
            scroll: scroll
        });
        const classes = useUtilityClasses$m(ownerState);
        const backdropClick = reactExports.useRef();
        const handleMouseDown = event => {
            backdropClick.current = event.target === event.currentTarget;
        };
        const handleBackdropClick = event => {
            if (onClick) {
                onClick(event);
            }
            if (!backdropClick.current) {
                return;
            }
            backdropClick.current = null;
            if (onBackdropClick) {
                onBackdropClick(event);
            }
            if (onClose) {
                onClose(event, "backdropClick");
            }
        };
        const ariaLabelledby = useId(ariaLabelledbyProp);
        const dialogContextValue = reactExports.useMemo((() => ({
            titleId: ariaLabelledby
        })), [ ariaLabelledby ]);
        return jsxRuntimeExports.jsx(DialogRoot, _extends$1({
            className: clsx(classes.root, className),
            closeAfterTransition: true,
            components: {
                Backdrop: DialogBackdrop
            },
            componentsProps: {
                backdrop: _extends$1({
                    transitionDuration: transitionDuration,
                    as: BackdropComponent
                }, BackdropProps)
            },
            disableEscapeKeyDown: disableEscapeKeyDown,
            onClose: onClose,
            open: open,
            ref: ref,
            onClick: handleBackdropClick,
            ownerState: ownerState
        }, other, {
            children: jsxRuntimeExports.jsx(TransitionComponent, _extends$1({
                appear: true,
                in: open,
                timeout: transitionDuration,
                role: "presentation"
            }, TransitionProps, {
                children: jsxRuntimeExports.jsx(DialogContainer, {
                    className: clsx(classes.container),
                    onMouseDown: handleMouseDown,
                    ownerState: ownerState,
                    children: jsxRuntimeExports.jsx(DialogPaper, _extends$1({
                        as: PaperComponent,
                        elevation: 24,
                        role: "dialog",
                        "aria-describedby": ariaDescribedby,
                        "aria-labelledby": ariaLabelledby
                    }, PaperProps, {
                        className: clsx(classes.paper, PaperProps.className),
                        ownerState: ownerState,
                        children: jsxRuntimeExports.jsx(DialogContext.Provider, {
                            value: dialogContextValue,
                            children: children
                        })
                    }))
                })
            }))
        }));
    }));
    function getDialogActionsUtilityClass(slot) {
        return generateUtilityClass("MuiDialogActions", slot);
    }
    generateUtilityClasses("MuiDialogActions", [ "root", "spacing" ]);
    const _excluded$o = [ "className", "disableSpacing" ];
    const useUtilityClasses$l = ownerState => {
        const {classes: classes, disableSpacing: disableSpacing} = ownerState;
        const slots = {
            root: [ "root", !disableSpacing && "spacing" ]
        };
        return composeClasses(slots, getDialogActionsUtilityClass, classes);
    };
    const DialogActionsRoot = styled("div", {
        name: "MuiDialogActions",
        slot: "Root",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.root, !ownerState.disableSpacing && styles.spacing ];
        }
    })((({ownerState: ownerState}) => _extends$1({
        display: "flex",
        alignItems: "center",
        padding: 8,
        justifyContent: "flex-end",
        flex: "0 0 auto"
    }, !ownerState.disableSpacing && {
        "& > :not(style) ~ :not(style)": {
            marginLeft: 8
        }
    })));
    const DialogActions = reactExports.forwardRef((function DialogActions(inProps, ref) {
        const props = useDefaultProps({
            props: inProps,
            name: "MuiDialogActions"
        });
        const {className: className, disableSpacing: disableSpacing = false} = props, other = _objectWithoutPropertiesLoose(props, _excluded$o);
        const ownerState = _extends$1({}, props, {
            disableSpacing: disableSpacing
        });
        const classes = useUtilityClasses$l(ownerState);
        return jsxRuntimeExports.jsx(DialogActionsRoot, _extends$1({
            className: clsx(classes.root, className),
            ownerState: ownerState,
            ref: ref
        }, other));
    }));
    function getDialogContentUtilityClass(slot) {
        return generateUtilityClass("MuiDialogContent", slot);
    }
    generateUtilityClasses("MuiDialogContent", [ "root", "dividers" ]);
    function getDialogTitleUtilityClass(slot) {
        return generateUtilityClass("MuiDialogTitle", slot);
    }
    const dialogTitleClasses = generateUtilityClasses("MuiDialogTitle", [ "root" ]);
    const _excluded$n = [ "className", "dividers" ];
    const useUtilityClasses$k = ownerState => {
        const {classes: classes, dividers: dividers} = ownerState;
        const slots = {
            root: [ "root", dividers && "dividers" ]
        };
        return composeClasses(slots, getDialogContentUtilityClass, classes);
    };
    const DialogContentRoot = styled("div", {
        name: "MuiDialogContent",
        slot: "Root",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.root, ownerState.dividers && styles.dividers ];
        }
    })((({theme: theme, ownerState: ownerState}) => _extends$1({
        flex: "1 1 auto",
        WebkitOverflowScrolling: "touch",
        overflowY: "auto",
        padding: "20px 24px"
    }, ownerState.dividers ? {
        padding: "16px 24px",
        borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
        borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
    } : {
        [`.${dialogTitleClasses.root} + &`]: {
            paddingTop: 0
        }
    })));
    const DialogContent = reactExports.forwardRef((function DialogContent(inProps, ref) {
        const props = useDefaultProps({
            props: inProps,
            name: "MuiDialogContent"
        });
        const {className: className, dividers: dividers = false} = props, other = _objectWithoutPropertiesLoose(props, _excluded$n);
        const ownerState = _extends$1({}, props, {
            dividers: dividers
        });
        const classes = useUtilityClasses$k(ownerState);
        return jsxRuntimeExports.jsx(DialogContentRoot, _extends$1({
            className: clsx(classes.root, className),
            ownerState: ownerState,
            ref: ref
        }, other));
    }));
    const _excluded$m = [ "className", "id" ];
    const useUtilityClasses$j = ownerState => {
        const {classes: classes} = ownerState;
        const slots = {
            root: [ "root" ]
        };
        return composeClasses(slots, getDialogTitleUtilityClass, classes);
    };
    const DialogTitleRoot = styled(Typography, {
        name: "MuiDialogTitle",
        slot: "Root",
        overridesResolver: (props, styles) => styles.root
    })({
        padding: "16px 24px",
        flex: "0 0 auto"
    });
    const DialogTitle = reactExports.forwardRef((function DialogTitle(inProps, ref) {
        const props = useDefaultProps({
            props: inProps,
            name: "MuiDialogTitle"
        });
        const {className: className, id: idProp} = props, other = _objectWithoutPropertiesLoose(props, _excluded$m);
        const ownerState = props;
        const classes = useUtilityClasses$j(ownerState);
        const {titleId: titleId = idProp} = reactExports.useContext(DialogContext);
        return jsxRuntimeExports.jsx(DialogTitleRoot, _extends$1({
            component: "h2",
            className: clsx(classes.root, className),
            ownerState: ownerState,
            ref: ref,
            variant: "h6",
            id: idProp != null ? idProp : titleId
        }, other));
    }));
    function getDividerUtilityClass(slot) {
        return generateUtilityClass("MuiDivider", slot);
    }
    generateUtilityClasses("MuiDivider", [ "root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical" ]);
    const _excluded$l = [ "absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant" ];
    const useUtilityClasses$i = ownerState => {
        const {absolute: absolute, children: children, classes: classes, flexItem: flexItem, light: light, orientation: orientation, textAlign: textAlign, variant: variant} = ownerState;
        const slots = {
            root: [ "root", absolute && "absolute", variant, light && "light", orientation === "vertical" && "vertical", flexItem && "flexItem", children && "withChildren", children && orientation === "vertical" && "withChildrenVertical", textAlign === "right" && orientation !== "vertical" && "textAlignRight", textAlign === "left" && orientation !== "vertical" && "textAlignLeft" ],
            wrapper: [ "wrapper", orientation === "vertical" && "wrapperVertical" ]
        };
        return composeClasses(slots, getDividerUtilityClass, classes);
    };
    const DividerRoot = styled("div", {
        name: "MuiDivider",
        slot: "Root",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.root, ownerState.absolute && styles.absolute, styles[ownerState.variant], ownerState.light && styles.light, ownerState.orientation === "vertical" && styles.vertical, ownerState.flexItem && styles.flexItem, ownerState.children && styles.withChildren, ownerState.children && ownerState.orientation === "vertical" && styles.withChildrenVertical, ownerState.textAlign === "right" && ownerState.orientation !== "vertical" && styles.textAlignRight, ownerState.textAlign === "left" && ownerState.orientation !== "vertical" && styles.textAlignLeft ];
        }
    })((({theme: theme, ownerState: ownerState}) => _extends$1({
        margin: 0,
        flexShrink: 0,
        borderWidth: 0,
        borderStyle: "solid",
        borderColor: (theme.vars || theme).palette.divider,
        borderBottomWidth: "thin"
    }, ownerState.absolute && {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%"
    }, ownerState.light && {
        borderColor: theme.vars ? `rgba(${theme.vars.palette.dividerChannel} / 0.08)` : alpha_1(theme.palette.divider, .08)
    }, ownerState.variant === "inset" && {
        marginLeft: 72
    }, ownerState.variant === "middle" && ownerState.orientation === "horizontal" && {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    }, ownerState.variant === "middle" && ownerState.orientation === "vertical" && {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }, ownerState.orientation === "vertical" && {
        height: "100%",
        borderBottomWidth: 0,
        borderRightWidth: "thin"
    }, ownerState.flexItem && {
        alignSelf: "stretch",
        height: "auto"
    })), (({ownerState: ownerState}) => _extends$1({}, ownerState.children && {
        display: "flex",
        whiteSpace: "nowrap",
        textAlign: "center",
        border: 0,
        borderTopStyle: "solid",
        borderLeftStyle: "solid",
        "&::before, &::after": {
            content: '""',
            alignSelf: "center"
        }
    })), (({theme: theme, ownerState: ownerState}) => _extends$1({}, ownerState.children && ownerState.orientation !== "vertical" && {
        "&::before, &::after": {
            width: "100%",
            borderTop: `thin solid ${(theme.vars || theme).palette.divider}`,
            borderTopStyle: "inherit"
        }
    })), (({theme: theme, ownerState: ownerState}) => _extends$1({}, ownerState.children && ownerState.orientation === "vertical" && {
        flexDirection: "column",
        "&::before, &::after": {
            height: "100%",
            borderLeft: `thin solid ${(theme.vars || theme).palette.divider}`,
            borderLeftStyle: "inherit"
        }
    })), (({ownerState: ownerState}) => _extends$1({}, ownerState.textAlign === "right" && ownerState.orientation !== "vertical" && {
        "&::before": {
            width: "90%"
        },
        "&::after": {
            width: "10%"
        }
    }, ownerState.textAlign === "left" && ownerState.orientation !== "vertical" && {
        "&::before": {
            width: "10%"
        },
        "&::after": {
            width: "90%"
        }
    })));
    const DividerWrapper = styled("span", {
        name: "MuiDivider",
        slot: "Wrapper",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.wrapper, ownerState.orientation === "vertical" && styles.wrapperVertical ];
        }
    })((({theme: theme, ownerState: ownerState}) => _extends$1({
        display: "inline-block",
        paddingLeft: `calc(${theme.spacing(1)} * 1.2)`,
        paddingRight: `calc(${theme.spacing(1)} * 1.2)`
    }, ownerState.orientation === "vertical" && {
        paddingTop: `calc(${theme.spacing(1)} * 1.2)`,
        paddingBottom: `calc(${theme.spacing(1)} * 1.2)`
    })));
    const Divider = reactExports.forwardRef((function Divider(inProps, ref) {
        const props = useDefaultProps({
            props: inProps,
            name: "MuiDivider"
        });
        const {absolute: absolute = false, children: children, className: className, component: component = (children ? "div" : "hr"), flexItem: flexItem = false, light: light = false, orientation: orientation = "horizontal", role: role = (component !== "hr" ? "separator" : undefined), textAlign: textAlign = "center", variant: variant = "fullWidth"} = props, other = _objectWithoutPropertiesLoose(props, _excluded$l);
        const ownerState = _extends$1({}, props, {
            absolute: absolute,
            component: component,
            flexItem: flexItem,
            light: light,
            orientation: orientation,
            role: role,
            textAlign: textAlign,
            variant: variant
        });
        const classes = useUtilityClasses$i(ownerState);
        return jsxRuntimeExports.jsx(DividerRoot, _extends$1({
            as: component,
            className: clsx(classes.root, className),
            role: role,
            ref: ref,
            ownerState: ownerState
        }, other, {
            children: children ? jsxRuntimeExports.jsx(DividerWrapper, {
                className: classes.wrapper,
                ownerState: ownerState,
                children: children
            }) : null
        }));
    }));
    Divider.muiSkipListHighlight = true;
    const _excluded$k = [ "disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type" ];
    const useUtilityClasses$h = ownerState => {
        const {classes: classes, disableUnderline: disableUnderline} = ownerState;
        const slots = {
            root: [ "root", !disableUnderline && "underline" ],
            input: [ "input" ]
        };
        const composedClasses = composeClasses(slots, getFilledInputUtilityClass, classes);
        return _extends$1({}, classes, composedClasses);
    };
    const FilledInputRoot = styled(InputBaseRoot, {
        shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === "classes",
        name: "MuiFilledInput",
        slot: "Root",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ ...rootOverridesResolver(props, styles), !ownerState.disableUnderline && styles.underline ];
        }
    })((({theme: theme, ownerState: ownerState}) => {
        var _palette;
        const light = theme.palette.mode === "light";
        const bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
        const backgroundColor = light ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)";
        const hoverBackground = light ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)";
        const disabledBackground = light ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
        return _extends$1({
            position: "relative",
            backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor,
            borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
            borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
            transition: theme.transitions.create("background-color", {
                duration: theme.transitions.duration.shorter,
                easing: theme.transitions.easing.easeOut
            }),
            "&:hover": {
                backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
                "@media (hover: none)": {
                    backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
                }
            },
            [`&.${filledInputClasses.focused}`]: {
                backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
            },
            [`&.${filledInputClasses.disabled}`]: {
                backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
            }
        }, !ownerState.disableUnderline && {
            "&::after": {
                borderBottom: `2px solid ${(_palette = (theme.vars || theme).palette[ownerState.color || "primary"]) == null ? void 0 : _palette.main}`,
                left: 0,
                bottom: 0,
                content: '""',
                position: "absolute",
                right: 0,
                transform: "scaleX(0)",
                transition: theme.transitions.create("transform", {
                    duration: theme.transitions.duration.shorter,
                    easing: theme.transitions.easing.easeOut
                }),
                pointerEvents: "none"
            },
            [`&.${filledInputClasses.focused}:after`]: {
                transform: "scaleX(1) translateX(0)"
            },
            [`&.${filledInputClasses.error}`]: {
                "&::before, &::after": {
                    borderBottomColor: (theme.vars || theme).palette.error.main
                }
            },
            "&::before": {
                borderBottom: `1px solid ${theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})` : bottomLineColor}`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: "absolute",
                right: 0,
                transition: theme.transitions.create("border-bottom-color", {
                    duration: theme.transitions.duration.shorter
                }),
                pointerEvents: "none"
            },
            [`&:hover:not(.${filledInputClasses.disabled}, .${filledInputClasses.error}):before`]: {
                borderBottom: `1px solid ${(theme.vars || theme).palette.text.primary}`
            },
            [`&.${filledInputClasses.disabled}:before`]: {
                borderBottomStyle: "dotted"
            }
        }, ownerState.startAdornment && {
            paddingLeft: 12
        }, ownerState.endAdornment && {
            paddingRight: 12
        }, ownerState.multiline && _extends$1({
            padding: "25px 12px 8px"
        }, ownerState.size === "small" && {
            paddingTop: 21,
            paddingBottom: 4
        }, ownerState.hiddenLabel && {
            paddingTop: 16,
            paddingBottom: 17
        }, ownerState.hiddenLabel && ownerState.size === "small" && {
            paddingTop: 8,
            paddingBottom: 9
        }));
    }));
    const FilledInputInput = styled(InputBaseComponent, {
        name: "MuiFilledInput",
        slot: "Input",
        overridesResolver: inputOverridesResolver
    })((({theme: theme, ownerState: ownerState}) => _extends$1({
        paddingTop: 25,
        paddingRight: 12,
        paddingBottom: 8,
        paddingLeft: 12
    }, !theme.vars && {
        "&:-webkit-autofill": {
            WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
            WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
            caretColor: theme.palette.mode === "light" ? null : "#fff",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit"
        }
    }, theme.vars && {
        "&:-webkit-autofill": {
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit"
        },
        [theme.getColorSchemeSelector("dark")]: {
            "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 100px #266798 inset",
                WebkitTextFillColor: "#fff",
                caretColor: "#fff"
            }
        }
    }, ownerState.size === "small" && {
        paddingTop: 21,
        paddingBottom: 4
    }, ownerState.hiddenLabel && {
        paddingTop: 16,
        paddingBottom: 17
    }, ownerState.startAdornment && {
        paddingLeft: 0
    }, ownerState.endAdornment && {
        paddingRight: 0
    }, ownerState.hiddenLabel && ownerState.size === "small" && {
        paddingTop: 8,
        paddingBottom: 9
    }, ownerState.multiline && {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
    })));
    const FilledInput = reactExports.forwardRef((function FilledInput(inProps, ref) {
        var _ref, _slots$root, _ref2, _slots$input;
        const props = useDefaultProps({
            props: inProps,
            name: "MuiFilledInput"
        });
        const {components: components = {}, componentsProps: componentsPropsProp, fullWidth: fullWidth = false, inputComponent: inputComponent = "input", multiline: multiline = false, slotProps: slotProps, slots: slots = {}, type: type = "text"} = props, other = _objectWithoutPropertiesLoose(props, _excluded$k);
        const ownerState = _extends$1({}, props, {
            fullWidth: fullWidth,
            inputComponent: inputComponent,
            multiline: multiline,
            type: type
        });
        const classes = useUtilityClasses$h(props);
        const filledInputComponentsProps = {
            root: {
                ownerState: ownerState
            },
            input: {
                ownerState: ownerState
            }
        };
        const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? deepmerge$1(filledInputComponentsProps, slotProps != null ? slotProps : componentsPropsProp) : filledInputComponentsProps;
        const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : FilledInputRoot;
        const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : FilledInputInput;
        return jsxRuntimeExports.jsx(InputBase, _extends$1({
            slots: {
                root: RootSlot,
                input: InputSlot
            },
            componentsProps: componentsProps,
            fullWidth: fullWidth,
            inputComponent: inputComponent,
            multiline: multiline,
            ref: ref,
            type: type
        }, other, {
            classes: classes
        }));
    }));
    FilledInput.muiName = "Input";
    function getFormControlUtilityClasses(slot) {
        return generateUtilityClass("MuiFormControl", slot);
    }
    generateUtilityClasses("MuiFormControl", [ "root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled" ]);
    const _excluded$j = [ "children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant" ];
    const useUtilityClasses$g = ownerState => {
        const {classes: classes, margin: margin, fullWidth: fullWidth} = ownerState;
        const slots = {
            root: [ "root", margin !== "none" && `margin${capitalize$1(margin)}`, fullWidth && "fullWidth" ]
        };
        return composeClasses(slots, getFormControlUtilityClasses, classes);
    };
    const FormControlRoot = styled("div", {
        name: "MuiFormControl",
        slot: "Root",
        overridesResolver: ({ownerState: ownerState}, styles) => _extends$1({}, styles.root, styles[`margin${capitalize$1(ownerState.margin)}`], ownerState.fullWidth && styles.fullWidth)
    })((({ownerState: ownerState}) => _extends$1({
        display: "inline-flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: "top"
    }, ownerState.margin === "normal" && {
        marginTop: 16,
        marginBottom: 8
    }, ownerState.margin === "dense" && {
        marginTop: 8,
        marginBottom: 4
    }, ownerState.fullWidth && {
        width: "100%"
    })));
    const FormControl = reactExports.forwardRef((function FormControl(inProps, ref) {
        const props = useDefaultProps({
            props: inProps,
            name: "MuiFormControl"
        });
        const {children: children, className: className, color: color = "primary", component: component = "div", disabled: disabled = false, error: error = false, focused: visuallyFocused, fullWidth: fullWidth = false, hiddenLabel: hiddenLabel = false, margin: margin = "none", required: required = false, size: size = "medium", variant: variant = "outlined"} = props, other = _objectWithoutPropertiesLoose(props, _excluded$j);
        const ownerState = _extends$1({}, props, {
            color: color,
            component: component,
            disabled: disabled,
            error: error,
            fullWidth: fullWidth,
            hiddenLabel: hiddenLabel,
            margin: margin,
            required: required,
            size: size,
            variant: variant
        });
        const classes = useUtilityClasses$g(ownerState);
        const [adornedStart, setAdornedStart] = reactExports.useState((() => {
            let initialAdornedStart = false;
            if (children) {
                reactExports.Children.forEach(children, (child => {
                    if (!isMuiElement(child, [ "Input", "Select" ])) {
                        return;
                    }
                    const input = isMuiElement(child, [ "Select" ]) ? child.props.input : child;
                    if (input && isAdornedStart(input.props)) {
                        initialAdornedStart = true;
                    }
                }));
            }
            return initialAdornedStart;
        }));
        const [filled, setFilled] = reactExports.useState((() => {
            let initialFilled = false;
            if (children) {
                reactExports.Children.forEach(children, (child => {
                    if (!isMuiElement(child, [ "Input", "Select" ])) {
                        return;
                    }
                    if (isFilled(child.props, true) || isFilled(child.props.inputProps, true)) {
                        initialFilled = true;
                    }
                }));
            }
            return initialFilled;
        }));
        const [focusedState, setFocused] = reactExports.useState(false);
        if (disabled && focusedState) {
            setFocused(false);
        }
        const focused = visuallyFocused !== undefined && !disabled ? visuallyFocused : focusedState;
        let registerEffect;
        const childContext = reactExports.useMemo((() => ({
            adornedStart: adornedStart,
            setAdornedStart: setAdornedStart,
            color: color,
            disabled: disabled,
            error: error,
            filled: filled,
            focused: focused,
            fullWidth: fullWidth,
            hiddenLabel: hiddenLabel,
            size: size,
            onBlur: () => {
                setFocused(false);
            },
            onEmpty: () => {
                setFilled(false);
            },
            onFilled: () => {
                setFilled(true);
            },
            onFocus: () => {
                setFocused(true);
            },
            registerEffect: registerEffect,
            required: required,
            variant: variant
        })), [ adornedStart, color, disabled, error, filled, focused, fullWidth, hiddenLabel, registerEffect, required, size, variant ]);
        return jsxRuntimeExports.jsx(FormControlContext.Provider, {
            value: childContext,
            children: jsxRuntimeExports.jsx(FormControlRoot, _extends$1({
                as: component,
                ownerState: ownerState,
                className: clsx(classes.root, className),
                ref: ref
            }, other, {
                children: children
            }))
        });
    }));
    const Stack = createStack({
        createStyledComponent: styled("div", {
            name: "MuiStack",
            slot: "Root",
            overridesResolver: (props, styles) => styles.root
        }),
        useThemeProps: inProps => useDefaultProps({
            props: inProps,
            name: "MuiStack"
        })
    });
    function getFormControlLabelUtilityClasses(slot) {
        return generateUtilityClass("MuiFormControlLabel", slot);
    }
    const formControlLabelClasses = generateUtilityClasses("MuiFormControlLabel", [ "root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk" ]);
    const _excluded$i = [ "checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value" ];
    const useUtilityClasses$f = ownerState => {
        const {classes: classes, disabled: disabled, labelPlacement: labelPlacement, error: error, required: required} = ownerState;
        const slots = {
            root: [ "root", disabled && "disabled", `labelPlacement${capitalize$1(labelPlacement)}`, error && "error", required && "required" ],
            label: [ "label", disabled && "disabled" ],
            asterisk: [ "asterisk", error && "error" ]
        };
        return composeClasses(slots, getFormControlLabelUtilityClasses, classes);
    };
    const FormControlLabelRoot = styled("label", {
        name: "MuiFormControlLabel",
        slot: "Root",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ {
                [`& .${formControlLabelClasses.label}`]: styles.label
            }, styles.root, styles[`labelPlacement${capitalize$1(ownerState.labelPlacement)}`] ];
        }
    })((({theme: theme, ownerState: ownerState}) => _extends$1({
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        verticalAlign: "middle",
        WebkitTapHighlightColor: "transparent",
        marginLeft: -11,
        marginRight: 16,
        [`&.${formControlLabelClasses.disabled}`]: {
            cursor: "default"
        }
    }, ownerState.labelPlacement === "start" && {
        flexDirection: "row-reverse",
        marginLeft: 16,
        marginRight: -11
    }, ownerState.labelPlacement === "top" && {
        flexDirection: "column-reverse",
        marginLeft: 16
    }, ownerState.labelPlacement === "bottom" && {
        flexDirection: "column",
        marginLeft: 16
    }, {
        [`& .${formControlLabelClasses.label}`]: {
            [`&.${formControlLabelClasses.disabled}`]: {
                color: (theme.vars || theme).palette.text.disabled
            }
        }
    })));
    const AsteriskComponent$1 = styled("span", {
        name: "MuiFormControlLabel",
        slot: "Asterisk",
        overridesResolver: (props, styles) => styles.asterisk
    })((({theme: theme}) => ({
        [`&.${formControlLabelClasses.error}`]: {
            color: (theme.vars || theme).palette.error.main
        }
    })));
    const FormControlLabel = reactExports.forwardRef((function FormControlLabel(inProps, ref) {
        var _ref, _slotProps$typography;
        const props = useDefaultProps({
            props: inProps,
            name: "MuiFormControlLabel"
        });
        const {className: className, componentsProps: componentsProps = {}, control: control, disabled: disabledProp, disableTypography: disableTypography, label: labelProp, labelPlacement: labelPlacement = "end", required: requiredProp, slotProps: slotProps = {}} = props, other = _objectWithoutPropertiesLoose(props, _excluded$i);
        const muiFormControl = useFormControl();
        const disabled = (_ref = disabledProp != null ? disabledProp : control.props.disabled) != null ? _ref : muiFormControl == null ? void 0 : muiFormControl.disabled;
        const required = requiredProp != null ? requiredProp : control.props.required;
        const controlProps = {
            disabled: disabled,
            required: required
        };
        [ "checked", "name", "onChange", "value", "inputRef" ].forEach((key => {
            if (typeof control.props[key] === "undefined" && typeof props[key] !== "undefined") {
                controlProps[key] = props[key];
            }
        }));
        const fcs = formControlState({
            props: props,
            muiFormControl: muiFormControl,
            states: [ "error" ]
        });
        const ownerState = _extends$1({}, props, {
            disabled: disabled,
            labelPlacement: labelPlacement,
            required: required,
            error: fcs.error
        });
        const classes = useUtilityClasses$f(ownerState);
        const typographySlotProps = (_slotProps$typography = slotProps.typography) != null ? _slotProps$typography : componentsProps.typography;
        let label = labelProp;
        if (label != null && label.type !== Typography && !disableTypography) {
            label = jsxRuntimeExports.jsx(Typography, _extends$1({
                component: "span"
            }, typographySlotProps, {
                className: clsx(classes.label, typographySlotProps == null ? void 0 : typographySlotProps.className),
                children: label
            }));
        }
        return jsxRuntimeExports.jsxs(FormControlLabelRoot, _extends$1({
            className: clsx(classes.root, className),
            ownerState: ownerState,
            ref: ref
        }, other, {
            children: [ reactExports.cloneElement(control, controlProps), required ? jsxRuntimeExports.jsxs(Stack, {
                display: "block",
                children: [ label, jsxRuntimeExports.jsxs(AsteriskComponent$1, {
                    ownerState: ownerState,
                    "aria-hidden": true,
                    className: classes.asterisk,
                    children: [ " ", "*" ]
                }) ]
            }) : label ]
        }));
    }));
    function getFormHelperTextUtilityClasses(slot) {
        return generateUtilityClass("MuiFormHelperText", slot);
    }
    const formHelperTextClasses = generateUtilityClasses("MuiFormHelperText", [ "root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required" ]);
    var _span$3;
    const _excluded$h = [ "children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant" ];
    const useUtilityClasses$e = ownerState => {
        const {classes: classes, contained: contained, size: size, disabled: disabled, error: error, filled: filled, focused: focused, required: required} = ownerState;
        const slots = {
            root: [ "root", disabled && "disabled", error && "error", size && `size${capitalize$1(size)}`, contained && "contained", focused && "focused", filled && "filled", required && "required" ]
        };
        return composeClasses(slots, getFormHelperTextUtilityClasses, classes);
    };
    const FormHelperTextRoot = styled("p", {
        name: "MuiFormHelperText",
        slot: "Root",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.root, ownerState.size && styles[`size${capitalize$1(ownerState.size)}`], ownerState.contained && styles.contained, ownerState.filled && styles.filled ];
        }
    })((({theme: theme, ownerState: ownerState}) => _extends$1({
        color: (theme.vars || theme).palette.text.secondary
    }, theme.typography.caption, {
        textAlign: "left",
        marginTop: 3,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        [`&.${formHelperTextClasses.disabled}`]: {
            color: (theme.vars || theme).palette.text.disabled
        },
        [`&.${formHelperTextClasses.error}`]: {
            color: (theme.vars || theme).palette.error.main
        }
    }, ownerState.size === "small" && {
        marginTop: 4
    }, ownerState.contained && {
        marginLeft: 14,
        marginRight: 14
    })));
    const FormHelperText = reactExports.forwardRef((function FormHelperText(inProps, ref) {
        const props = useDefaultProps({
            props: inProps,
            name: "MuiFormHelperText"
        });
        const {children: children, className: className, component: component = "p"} = props, other = _objectWithoutPropertiesLoose(props, _excluded$h);
        const muiFormControl = useFormControl();
        const fcs = formControlState({
            props: props,
            muiFormControl: muiFormControl,
            states: [ "variant", "size", "disabled", "error", "filled", "focused", "required" ]
        });
        const ownerState = _extends$1({}, props, {
            component: component,
            contained: fcs.variant === "filled" || fcs.variant === "outlined",
            variant: fcs.variant,
            size: fcs.size,
            disabled: fcs.disabled,
            error: fcs.error,
            filled: fcs.filled,
            focused: fcs.focused,
            required: fcs.required
        });
        const classes = useUtilityClasses$e(ownerState);
        return jsxRuntimeExports.jsx(FormHelperTextRoot, _extends$1({
            as: component,
            ownerState: ownerState,
            className: clsx(classes.root, className),
            ref: ref
        }, other, {
            children: children === " " ? _span$3 || (_span$3 = jsxRuntimeExports.jsx("span", {
                className: "notranslate",
                children: "​"
            })) : children
        }));
    }));
    function getFormLabelUtilityClasses(slot) {
        return generateUtilityClass("MuiFormLabel", slot);
    }
    const formLabelClasses = generateUtilityClasses("MuiFormLabel", [ "root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk" ]);
    const _excluded$g = [ "children", "className", "color", "component", "disabled", "error", "filled", "focused", "required" ];
    const useUtilityClasses$d = ownerState => {
        const {classes: classes, color: color, focused: focused, disabled: disabled, error: error, filled: filled, required: required} = ownerState;
        const slots = {
            root: [ "root", `color${capitalize$1(color)}`, disabled && "disabled", error && "error", filled && "filled", focused && "focused", required && "required" ],
            asterisk: [ "asterisk", error && "error" ]
        };
        return composeClasses(slots, getFormLabelUtilityClasses, classes);
    };
    const FormLabelRoot = styled("label", {
        name: "MuiFormLabel",
        slot: "Root",
        overridesResolver: ({ownerState: ownerState}, styles) => _extends$1({}, styles.root, ownerState.color === "secondary" && styles.colorSecondary, ownerState.filled && styles.filled)
    })((({theme: theme, ownerState: ownerState}) => _extends$1({
        color: (theme.vars || theme).palette.text.secondary
    }, theme.typography.body1, {
        lineHeight: "1.4375em",
        padding: 0,
        position: "relative",
        [`&.${formLabelClasses.focused}`]: {
            color: (theme.vars || theme).palette[ownerState.color].main
        },
        [`&.${formLabelClasses.disabled}`]: {
            color: (theme.vars || theme).palette.text.disabled
        },
        [`&.${formLabelClasses.error}`]: {
            color: (theme.vars || theme).palette.error.main
        }
    })));
    const AsteriskComponent = styled("span", {
        name: "MuiFormLabel",
        slot: "Asterisk",
        overridesResolver: (props, styles) => styles.asterisk
    })((({theme: theme}) => ({
        [`&.${formLabelClasses.error}`]: {
            color: (theme.vars || theme).palette.error.main
        }
    })));
    const FormLabel = reactExports.forwardRef((function FormLabel(inProps, ref) {
        const props = useDefaultProps({
            props: inProps,
            name: "MuiFormLabel"
        });
        const {children: children, className: className, component: component = "label"} = props, other = _objectWithoutPropertiesLoose(props, _excluded$g);
        const muiFormControl = useFormControl();
        const fcs = formControlState({
            props: props,
            muiFormControl: muiFormControl,
            states: [ "color", "required", "focused", "disabled", "error", "filled" ]
        });
        const ownerState = _extends$1({}, props, {
            color: fcs.color || "primary",
            component: component,
            disabled: fcs.disabled,
            error: fcs.error,
            filled: fcs.filled,
            focused: fcs.focused,
            required: fcs.required
        });
        const classes = useUtilityClasses$d(ownerState);
        return jsxRuntimeExports.jsxs(FormLabelRoot, _extends$1({
            as: component,
            ownerState: ownerState,
            className: clsx(classes.root, className),
            ref: ref
        }, other, {
            children: [ children, fcs.required && jsxRuntimeExports.jsxs(AsteriskComponent, {
                ownerState: ownerState,
                "aria-hidden": true,
                className: classes.asterisk,
                children: [ " ", "*" ]
            }) ]
        }));
    }));
    const _excluded$f = [ "addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent" ];
    function getScale(value) {
        return `scale(${value}, ${value ** 2})`;
    }
    const styles = {
        entering: {
            opacity: 1,
            transform: getScale(1)
        },
        entered: {
            opacity: 1,
            transform: "none"
        }
    };
    const isWebKit154 = typeof navigator !== "undefined" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);
    const Grow = reactExports.forwardRef((function Grow(props, ref) {
        const {addEndListener: addEndListener, appear: appear = true, children: children, easing: easing, in: inProp, onEnter: onEnter, onEntered: onEntered, onEntering: onEntering, onExit: onExit, onExited: onExited, onExiting: onExiting, style: style, timeout: timeout = "auto", TransitionComponent: TransitionComponent = Transition} = props, other = _objectWithoutPropertiesLoose(props, _excluded$f);
        const timer = useTimeout();
        const autoTimeout = reactExports.useRef();
        const theme = useTheme();
        const nodeRef = reactExports.useRef(null);
        const handleRef = useForkRef(nodeRef, getReactElementRef(children), ref);
        const normalizedTransitionCallback = callback => maybeIsAppearing => {
            if (callback) {
                const node = nodeRef.current;
                if (maybeIsAppearing === undefined) {
                    callback(node);
                } else {
                    callback(node, maybeIsAppearing);
                }
            }
        };
        const handleEntering = normalizedTransitionCallback(onEntering);
        const handleEnter = normalizedTransitionCallback(((node, isAppearing) => {
            reflow(node);
            const {duration: transitionDuration, delay: delay, easing: transitionTimingFunction} = getTransitionProps({
                style: style,
                timeout: timeout,
                easing: easing
            }, {
                mode: "enter"
            });
            let duration;
            if (timeout === "auto") {
                duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
                autoTimeout.current = duration;
            } else {
                duration = transitionDuration;
            }
            node.style.transition = [ theme.transitions.create("opacity", {
                duration: duration,
                delay: delay
            }), theme.transitions.create("transform", {
                duration: isWebKit154 ? duration : duration * .666,
                delay: delay,
                easing: transitionTimingFunction
            }) ].join(",");
            if (onEnter) {
                onEnter(node, isAppearing);
            }
        }));
        const handleEntered = normalizedTransitionCallback(onEntered);
        const handleExiting = normalizedTransitionCallback(onExiting);
        const handleExit = normalizedTransitionCallback((node => {
            const {duration: transitionDuration, delay: delay, easing: transitionTimingFunction} = getTransitionProps({
                style: style,
                timeout: timeout,
                easing: easing
            }, {
                mode: "exit"
            });
            let duration;
            if (timeout === "auto") {
                duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
                autoTimeout.current = duration;
            } else {
                duration = transitionDuration;
            }
            node.style.transition = [ theme.transitions.create("opacity", {
                duration: duration,
                delay: delay
            }), theme.transitions.create("transform", {
                duration: isWebKit154 ? duration : duration * .666,
                delay: isWebKit154 ? delay : delay || duration * .333,
                easing: transitionTimingFunction
            }) ].join(",");
            node.style.opacity = 0;
            node.style.transform = getScale(.75);
            if (onExit) {
                onExit(node);
            }
        }));
        const handleExited = normalizedTransitionCallback(onExited);
        const handleAddEndListener = next => {
            if (timeout === "auto") {
                timer.start(autoTimeout.current || 0, next);
            }
            if (addEndListener) {
                addEndListener(nodeRef.current, next);
            }
        };
        return jsxRuntimeExports.jsx(TransitionComponent, _extends$1({
            appear: appear,
            in: inProp,
            nodeRef: nodeRef,
            onEnter: handleEnter,
            onEntered: handleEntered,
            onEntering: handleEntering,
            onExit: handleExit,
            onExited: handleExited,
            onExiting: handleExiting,
            addEndListener: handleAddEndListener,
            timeout: timeout === "auto" ? null : timeout
        }, other, {
            children: (state, childProps) => reactExports.cloneElement(children, _extends$1({
                style: _extends$1({
                    opacity: 0,
                    transform: getScale(.75),
                    visibility: state === "exited" && !inProp ? "hidden" : undefined
                }, styles[state], style, children.props.style),
                ref: handleRef
            }, childProps))
        }));
    }));
    Grow.muiSupportAuto = true;
    const _excluded$e = [ "disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type" ];
    const useUtilityClasses$c = ownerState => {
        const {classes: classes, disableUnderline: disableUnderline} = ownerState;
        const slots = {
            root: [ "root", !disableUnderline && "underline" ],
            input: [ "input" ]
        };
        const composedClasses = composeClasses(slots, getInputUtilityClass, classes);
        return _extends$1({}, classes, composedClasses);
    };
    const InputRoot = styled(InputBaseRoot, {
        shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === "classes",
        name: "MuiInput",
        slot: "Root",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ ...rootOverridesResolver(props, styles), !ownerState.disableUnderline && styles.underline ];
        }
    })((({theme: theme, ownerState: ownerState}) => {
        const light = theme.palette.mode === "light";
        let bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
        if (theme.vars) {
            bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`;
        }
        return _extends$1({
            position: "relative"
        }, ownerState.formControl && {
            "label + &": {
                marginTop: 16
            }
        }, !ownerState.disableUnderline && {
            "&::after": {
                borderBottom: `2px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
                left: 0,
                bottom: 0,
                content: '""',
                position: "absolute",
                right: 0,
                transform: "scaleX(0)",
                transition: theme.transitions.create("transform", {
                    duration: theme.transitions.duration.shorter,
                    easing: theme.transitions.easing.easeOut
                }),
                pointerEvents: "none"
            },
            [`&.${inputClasses.focused}:after`]: {
                transform: "scaleX(1) translateX(0)"
            },
            [`&.${inputClasses.error}`]: {
                "&::before, &::after": {
                    borderBottomColor: (theme.vars || theme).palette.error.main
                }
            },
            "&::before": {
                borderBottom: `1px solid ${bottomLineColor}`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: "absolute",
                right: 0,
                transition: theme.transitions.create("border-bottom-color", {
                    duration: theme.transitions.duration.shorter
                }),
                pointerEvents: "none"
            },
            [`&:hover:not(.${inputClasses.disabled}, .${inputClasses.error}):before`]: {
                borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
                "@media (hover: none)": {
                    borderBottom: `1px solid ${bottomLineColor}`
                }
            },
            [`&.${inputClasses.disabled}:before`]: {
                borderBottomStyle: "dotted"
            }
        });
    }));
    const InputInput = styled(InputBaseComponent, {
        name: "MuiInput",
        slot: "Input",
        overridesResolver: inputOverridesResolver
    })({});
    const Input = reactExports.forwardRef((function Input(inProps, ref) {
        var _ref, _slots$root, _ref2, _slots$input;
        const props = useDefaultProps({
            props: inProps,
            name: "MuiInput"
        });
        const {disableUnderline: disableUnderline, components: components = {}, componentsProps: componentsPropsProp, fullWidth: fullWidth = false, inputComponent: inputComponent = "input", multiline: multiline = false, slotProps: slotProps, slots: slots = {}, type: type = "text"} = props, other = _objectWithoutPropertiesLoose(props, _excluded$e);
        const classes = useUtilityClasses$c(props);
        const ownerState = {
            disableUnderline: disableUnderline
        };
        const inputComponentsProps = {
            root: {
                ownerState: ownerState
            }
        };
        const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? deepmerge$1(slotProps != null ? slotProps : componentsPropsProp, inputComponentsProps) : inputComponentsProps;
        const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : InputRoot;
        const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : InputInput;
        return jsxRuntimeExports.jsx(InputBase, _extends$1({
            slots: {
                root: RootSlot,
                input: InputSlot
            },
            slotProps: componentsProps,
            fullWidth: fullWidth,
            inputComponent: inputComponent,
            multiline: multiline,
            ref: ref,
            type: type
        }, other, {
            classes: classes
        }));
    }));
    Input.muiName = "Input";
    function getInputAdornmentUtilityClass(slot) {
        return generateUtilityClass("MuiInputAdornment", slot);
    }
    const inputAdornmentClasses = generateUtilityClasses("MuiInputAdornment", [ "root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall" ]);
    var _span$2;
    const _excluded$d = [ "children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant" ];
    const overridesResolver = (props, styles) => {
        const {ownerState: ownerState} = props;
        return [ styles.root, styles[`position${capitalize$1(ownerState.position)}`], ownerState.disablePointerEvents === true && styles.disablePointerEvents, styles[ownerState.variant] ];
    };
    const useUtilityClasses$b = ownerState => {
        const {classes: classes, disablePointerEvents: disablePointerEvents, hiddenLabel: hiddenLabel, position: position, size: size, variant: variant} = ownerState;
        const slots = {
            root: [ "root", disablePointerEvents && "disablePointerEvents", position && `position${capitalize$1(position)}`, variant, hiddenLabel && "hiddenLabel", size && `size${capitalize$1(size)}` ]
        };
        return composeClasses(slots, getInputAdornmentUtilityClass, classes);
    };
    const InputAdornmentRoot = styled("div", {
        name: "MuiInputAdornment",
        slot: "Root",
        overridesResolver: overridesResolver
    })((({theme: theme, ownerState: ownerState}) => _extends$1({
        display: "flex",
        height: "0.01em",
        maxHeight: "2em",
        alignItems: "center",
        whiteSpace: "nowrap",
        color: (theme.vars || theme).palette.action.active
    }, ownerState.variant === "filled" && {
        [`&.${inputAdornmentClasses.positionStart}&:not(.${inputAdornmentClasses.hiddenLabel})`]: {
            marginTop: 16
        }
    }, ownerState.position === "start" && {
        marginRight: 8
    }, ownerState.position === "end" && {
        marginLeft: 8
    }, ownerState.disablePointerEvents === true && {
        pointerEvents: "none"
    })));
    const InputAdornment = reactExports.forwardRef((function InputAdornment(inProps, ref) {
        const props = useDefaultProps({
            props: inProps,
            name: "MuiInputAdornment"
        });
        const {children: children, className: className, component: component = "div", disablePointerEvents: disablePointerEvents = false, disableTypography: disableTypography = false, position: position, variant: variantProp} = props, other = _objectWithoutPropertiesLoose(props, _excluded$d);
        const muiFormControl = useFormControl() || {};
        let variant = variantProp;
        if (variantProp && muiFormControl.variant) ;
        if (muiFormControl && !variant) {
            variant = muiFormControl.variant;
        }
        const ownerState = _extends$1({}, props, {
            hiddenLabel: muiFormControl.hiddenLabel,
            size: muiFormControl.size,
            disablePointerEvents: disablePointerEvents,
            position: position,
            variant: variant
        });
        const classes = useUtilityClasses$b(ownerState);
        return jsxRuntimeExports.jsx(FormControlContext.Provider, {
            value: null,
            children: jsxRuntimeExports.jsx(InputAdornmentRoot, _extends$1({
                as: component,
                ownerState: ownerState,
                className: clsx(classes.root, className),
                ref: ref
            }, other, {
                children: typeof children === "string" && !disableTypography ? jsxRuntimeExports.jsx(Typography, {
                    color: "text.secondary",
                    children: children
                }) : jsxRuntimeExports.jsxs(reactExports.Fragment, {
                    children: [ position === "start" ? _span$2 || (_span$2 = jsxRuntimeExports.jsx("span", {
                        className: "notranslate",
                        children: "​"
                    })) : null, children ]
                })
            }))
        });
    }));
    function getInputLabelUtilityClasses(slot) {
        return generateUtilityClass("MuiInputLabel", slot);
    }
    generateUtilityClasses("MuiInputLabel", [ "root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined" ]);
    const _excluded$c = [ "disableAnimation", "margin", "shrink", "variant", "className" ];
    const useUtilityClasses$a = ownerState => {
        const {classes: classes, formControl: formControl, size: size, shrink: shrink, disableAnimation: disableAnimation, variant: variant, required: required} = ownerState;
        const slots = {
            root: [ "root", formControl && "formControl", !disableAnimation && "animated", shrink && "shrink", size && size !== "normal" && `size${capitalize$1(size)}`, variant ],
            asterisk: [ required && "asterisk" ]
        };
        const composedClasses = composeClasses(slots, getInputLabelUtilityClasses, classes);
        return _extends$1({}, classes, composedClasses);
    };
    const InputLabelRoot = styled(FormLabel, {
        shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === "classes",
        name: "MuiInputLabel",
        slot: "Root",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ {
                [`& .${formLabelClasses.asterisk}`]: styles.asterisk
            }, styles.root, ownerState.formControl && styles.formControl, ownerState.size === "small" && styles.sizeSmall, ownerState.shrink && styles.shrink, !ownerState.disableAnimation && styles.animated, ownerState.focused && styles.focused, styles[ownerState.variant] ];
        }
    })((({theme: theme, ownerState: ownerState}) => _extends$1({
        display: "block",
        transformOrigin: "top left",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "100%"
    }, ownerState.formControl && {
        position: "absolute",
        left: 0,
        top: 0,
        transform: "translate(0, 20px) scale(1)"
    }, ownerState.size === "small" && {
        transform: "translate(0, 17px) scale(1)"
    }, ownerState.shrink && {
        transform: "translate(0, -1.5px) scale(0.75)",
        transformOrigin: "top left",
        maxWidth: "133%"
    }, !ownerState.disableAnimation && {
        transition: theme.transitions.create([ "color", "transform", "max-width" ], {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
        })
    }, ownerState.variant === "filled" && _extends$1({
        zIndex: 1,
        pointerEvents: "none",
        transform: "translate(12px, 16px) scale(1)",
        maxWidth: "calc(100% - 24px)"
    }, ownerState.size === "small" && {
        transform: "translate(12px, 13px) scale(1)"
    }, ownerState.shrink && _extends$1({
        userSelect: "none",
        pointerEvents: "auto",
        transform: "translate(12px, 7px) scale(0.75)",
        maxWidth: "calc(133% - 24px)"
    }, ownerState.size === "small" && {
        transform: "translate(12px, 4px) scale(0.75)"
    })), ownerState.variant === "outlined" && _extends$1({
        zIndex: 1,
        pointerEvents: "none",
        transform: "translate(14px, 16px) scale(1)",
        maxWidth: "calc(100% - 24px)"
    }, ownerState.size === "small" && {
        transform: "translate(14px, 9px) scale(1)"
    }, ownerState.shrink && {
        userSelect: "none",
        pointerEvents: "auto",
        maxWidth: "calc(133% - 32px)",
        transform: "translate(14px, -9px) scale(0.75)"
    }))));
    const InputLabel = reactExports.forwardRef((function InputLabel(inProps, ref) {
        const props = useDefaultProps({
            name: "MuiInputLabel",
            props: inProps
        });
        const {disableAnimation: disableAnimation = false, shrink: shrinkProp, className: className} = props, other = _objectWithoutPropertiesLoose(props, _excluded$c);
        const muiFormControl = useFormControl();
        let shrink = shrinkProp;
        if (typeof shrink === "undefined" && muiFormControl) {
            shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
        }
        const fcs = formControlState({
            props: props,
            muiFormControl: muiFormControl,
            states: [ "size", "variant", "required", "focused" ]
        });
        const ownerState = _extends$1({}, props, {
            disableAnimation: disableAnimation,
            formControl: muiFormControl,
            shrink: shrink,
            size: fcs.size,
            variant: fcs.variant,
            required: fcs.required,
            focused: fcs.focused
        });
        const classes = useUtilityClasses$a(ownerState);
        return jsxRuntimeExports.jsx(InputLabelRoot, _extends$1({
            "data-shrink": shrink,
            ownerState: ownerState,
            ref: ref,
            className: clsx(classes.root, className)
        }, other, {
            classes: classes
        }));
    }));
    const ListContext = reactExports.createContext({});
    function getListUtilityClass(slot) {
        return generateUtilityClass("MuiList", slot);
    }
    generateUtilityClasses("MuiList", [ "root", "padding", "dense", "subheader" ]);
    const _excluded$b = [ "children", "className", "component", "dense", "disablePadding", "subheader" ];
    const useUtilityClasses$9 = ownerState => {
        const {classes: classes, disablePadding: disablePadding, dense: dense, subheader: subheader} = ownerState;
        const slots = {
            root: [ "root", !disablePadding && "padding", dense && "dense", subheader && "subheader" ]
        };
        return composeClasses(slots, getListUtilityClass, classes);
    };
    const ListRoot = styled("ul", {
        name: "MuiList",
        slot: "Root",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.root, !ownerState.disablePadding && styles.padding, ownerState.dense && styles.dense, ownerState.subheader && styles.subheader ];
        }
    })((({ownerState: ownerState}) => _extends$1({
        listStyle: "none",
        margin: 0,
        padding: 0,
        position: "relative"
    }, !ownerState.disablePadding && {
        paddingTop: 8,
        paddingBottom: 8
    }, ownerState.subheader && {
        paddingTop: 0
    })));
    const List = reactExports.forwardRef((function List(inProps, ref) {
        const props = useDefaultProps({
            props: inProps,
            name: "MuiList"
        });
        const {children: children, className: className, component: component = "ul", dense: dense = false, disablePadding: disablePadding = false, subheader: subheader} = props, other = _objectWithoutPropertiesLoose(props, _excluded$b);
        const context = reactExports.useMemo((() => ({
            dense: dense
        })), [ dense ]);
        const ownerState = _extends$1({}, props, {
            component: component,
            dense: dense,
            disablePadding: disablePadding
        });
        const classes = useUtilityClasses$9(ownerState);
        return jsxRuntimeExports.jsx(ListContext.Provider, {
            value: context,
            children: jsxRuntimeExports.jsxs(ListRoot, _extends$1({
                as: component,
                className: clsx(classes.root, className),
                ref: ref,
                ownerState: ownerState
            }, other, {
                children: [ subheader, children ]
            }))
        });
    }));
    const _excluded$a = [ "actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant" ];
    function nextItem(list, item, disableListWrap) {
        if (list === item) {
            return list.firstChild;
        }
        if (item && item.nextElementSibling) {
            return item.nextElementSibling;
        }
        return disableListWrap ? null : list.firstChild;
    }
    function previousItem(list, item, disableListWrap) {
        if (list === item) {
            return disableListWrap ? list.firstChild : list.lastChild;
        }
        if (item && item.previousElementSibling) {
            return item.previousElementSibling;
        }
        return disableListWrap ? null : list.lastChild;
    }
    function textCriteriaMatches(nextFocus, textCriteria) {
        if (textCriteria === undefined) {
            return true;
        }
        let text = nextFocus.innerText;
        if (text === undefined) {
            text = nextFocus.textContent;
        }
        text = text.trim().toLowerCase();
        if (text.length === 0) {
            return false;
        }
        if (textCriteria.repeating) {
            return text[0] === textCriteria.keys[0];
        }
        return text.indexOf(textCriteria.keys.join("")) === 0;
    }
    function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
        let wrappedOnce = false;
        let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);
        while (nextFocus) {
            if (nextFocus === list.firstChild) {
                if (wrappedOnce) {
                    return false;
                }
                wrappedOnce = true;
            }
            const nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
            if (!nextFocus.hasAttribute("tabindex") || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
                nextFocus = traversalFunction(list, nextFocus, disableListWrap);
            } else {
                nextFocus.focus();
                return true;
            }
        }
        return false;
    }
    const MenuList = reactExports.forwardRef((function MenuList(props, ref) {
        const {actions: actions, autoFocus: autoFocus = false, autoFocusItem: autoFocusItem = false, children: children, className: className, disabledItemsFocusable: disabledItemsFocusable = false, disableListWrap: disableListWrap = false, onKeyDown: onKeyDown, variant: variant = "selectedMenu"} = props, other = _objectWithoutPropertiesLoose(props, _excluded$a);
        const listRef = reactExports.useRef(null);
        const textCriteriaRef = reactExports.useRef({
            keys: [],
            repeating: true,
            previousKeyMatched: true,
            lastTime: null
        });
        useEnhancedEffect((() => {
            if (autoFocus) {
                listRef.current.focus();
            }
        }), [ autoFocus ]);
        reactExports.useImperativeHandle(actions, (() => ({
            adjustStyleForScrollbar: (containerElement, {direction: direction}) => {
                const noExplicitWidth = !listRef.current.style.width;
                if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
                    const scrollbarSize = `${getScrollbarSize(ownerDocument(containerElement))}px`;
                    listRef.current.style[direction === "rtl" ? "paddingLeft" : "paddingRight"] = scrollbarSize;
                    listRef.current.style.width = `calc(100% + ${scrollbarSize})`;
                }
                return listRef.current;
            }
        })), []);
        const handleKeyDown = event => {
            const list = listRef.current;
            const key = event.key;
            const currentFocus = ownerDocument(list).activeElement;
            if (key === "ArrowDown") {
                event.preventDefault();
                moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
            } else if (key === "ArrowUp") {
                event.preventDefault();
                moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
            } else if (key === "Home") {
                event.preventDefault();
                moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
            } else if (key === "End") {
                event.preventDefault();
                moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
            } else if (key.length === 1) {
                const criteria = textCriteriaRef.current;
                const lowerKey = key.toLowerCase();
                const currTime = performance.now();
                if (criteria.keys.length > 0) {
                    if (currTime - criteria.lastTime > 500) {
                        criteria.keys = [];
                        criteria.repeating = true;
                        criteria.previousKeyMatched = true;
                    } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
                        criteria.repeating = false;
                    }
                }
                criteria.lastTime = currTime;
                criteria.keys.push(lowerKey);
                const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
                if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
                    event.preventDefault();
                } else {
                    criteria.previousKeyMatched = false;
                }
            }
            if (onKeyDown) {
                onKeyDown(event);
            }
        };
        const handleRef = useForkRef(listRef, ref);
        let activeItemIndex = -1;
        reactExports.Children.forEach(children, ((child, index) => {
            if (!reactExports.isValidElement(child)) {
                if (activeItemIndex === index) {
                    activeItemIndex += 1;
                    if (activeItemIndex >= children.length) {
                        activeItemIndex = -1;
                    }
                }
                return;
            }
            if (!child.props.disabled) {
                if (variant === "selectedMenu" && child.props.selected) {
                    activeItemIndex = index;
                } else if (activeItemIndex === -1) {
                    activeItemIndex = index;
                }
            }
            if (activeItemIndex === index && (child.props.disabled || child.props.muiSkipListHighlight || child.type.muiSkipListHighlight)) {
                activeItemIndex += 1;
                if (activeItemIndex >= children.length) {
                    activeItemIndex = -1;
                }
            }
        }));
        const items = reactExports.Children.map(children, ((child, index) => {
            if (index === activeItemIndex) {
                const newChildProps = {};
                if (autoFocusItem) {
                    newChildProps.autoFocus = true;
                }
                if (child.props.tabIndex === undefined && variant === "selectedMenu") {
                    newChildProps.tabIndex = 0;
                }
                return reactExports.cloneElement(child, newChildProps);
            }
            return child;
        }));
        return jsxRuntimeExports.jsx(List, _extends$1({
            role: "menu",
            ref: handleRef,
            className: className,
            onKeyDown: handleKeyDown,
            tabIndex: autoFocus ? 0 : -1
        }, other, {
            children: items
        }));
    }));
    function getPopoverUtilityClass(slot) {
        return generateUtilityClass("MuiPopover", slot);
    }
    generateUtilityClasses("MuiPopover", [ "root", "paper" ]);
    const _excluded$9 = [ "onEntering" ], _excluded2$2 = [ "action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock" ], _excluded3 = [ "slotProps" ];
    function getOffsetTop(rect, vertical) {
        let offset = 0;
        if (typeof vertical === "number") {
            offset = vertical;
        } else if (vertical === "center") {
            offset = rect.height / 2;
        } else if (vertical === "bottom") {
            offset = rect.height;
        }
        return offset;
    }
    function getOffsetLeft(rect, horizontal) {
        let offset = 0;
        if (typeof horizontal === "number") {
            offset = horizontal;
        } else if (horizontal === "center") {
            offset = rect.width / 2;
        } else if (horizontal === "right") {
            offset = rect.width;
        }
        return offset;
    }
    function getTransformOriginValue(transformOrigin) {
        return [ transformOrigin.horizontal, transformOrigin.vertical ].map((n => typeof n === "number" ? `${n}px` : n)).join(" ");
    }
    function resolveAnchorEl(anchorEl) {
        return typeof anchorEl === "function" ? anchorEl() : anchorEl;
    }
    const useUtilityClasses$8 = ownerState => {
        const {classes: classes} = ownerState;
        const slots = {
            root: [ "root" ],
            paper: [ "paper" ]
        };
        return composeClasses(slots, getPopoverUtilityClass, classes);
    };
    const PopoverRoot = styled(Modal, {
        name: "MuiPopover",
        slot: "Root",
        overridesResolver: (props, styles) => styles.root
    })({});
    const PopoverPaper = styled(Paper, {
        name: "MuiPopover",
        slot: "Paper",
        overridesResolver: (props, styles) => styles.paper
    })({
        position: "absolute",
        overflowY: "auto",
        overflowX: "hidden",
        minWidth: 16,
        minHeight: 16,
        maxWidth: "calc(100% - 32px)",
        maxHeight: "calc(100% - 32px)",
        outline: 0
    });
    const Popover = reactExports.forwardRef((function Popover(inProps, ref) {
        var _slotProps$paper, _slots$root, _slots$paper;
        const props = useDefaultProps({
            props: inProps,
            name: "MuiPopover"
        });
        const {action: action, anchorEl: anchorEl, anchorOrigin: anchorOrigin = {
            vertical: "top",
            horizontal: "left"
        }, anchorPosition: anchorPosition, anchorReference: anchorReference = "anchorEl", children: children, className: className, container: containerProp, elevation: elevation = 8, marginThreshold: marginThreshold = 16, open: open, PaperProps: PaperPropsProp = {}, slots: slots, slotProps: slotProps, transformOrigin: transformOrigin = {
            vertical: "top",
            horizontal: "left"
        }, TransitionComponent: TransitionComponent = Grow, transitionDuration: transitionDurationProp = "auto", TransitionProps: {onEntering: onEntering} = {}, disableScrollLock: disableScrollLock = false} = props, TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded$9), other = _objectWithoutPropertiesLoose(props, _excluded2$2);
        const externalPaperSlotProps = (_slotProps$paper = slotProps == null ? void 0 : slotProps.paper) != null ? _slotProps$paper : PaperPropsProp;
        const paperRef = reactExports.useRef();
        const handlePaperRef = useForkRef(paperRef, externalPaperSlotProps.ref);
        const ownerState = _extends$1({}, props, {
            anchorOrigin: anchorOrigin,
            anchorReference: anchorReference,
            elevation: elevation,
            marginThreshold: marginThreshold,
            externalPaperSlotProps: externalPaperSlotProps,
            transformOrigin: transformOrigin,
            TransitionComponent: TransitionComponent,
            transitionDuration: transitionDurationProp,
            TransitionProps: TransitionProps
        });
        const classes = useUtilityClasses$8(ownerState);
        const getAnchorOffset = reactExports.useCallback((() => {
            if (anchorReference === "anchorPosition") {
                return anchorPosition;
            }
            const resolvedAnchorEl = resolveAnchorEl(anchorEl);
            const anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
            const anchorRect = anchorElement.getBoundingClientRect();
            return {
                top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
                left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
            };
        }), [ anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference ]);
        const getTransformOrigin = reactExports.useCallback((elemRect => ({
            vertical: getOffsetTop(elemRect, transformOrigin.vertical),
            horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
        })), [ transformOrigin.horizontal, transformOrigin.vertical ]);
        const getPositioningStyle = reactExports.useCallback((element => {
            const elemRect = {
                width: element.offsetWidth,
                height: element.offsetHeight
            };
            const elemTransformOrigin = getTransformOrigin(elemRect);
            if (anchorReference === "none") {
                return {
                    top: null,
                    left: null,
                    transformOrigin: getTransformOriginValue(elemTransformOrigin)
                };
            }
            const anchorOffset = getAnchorOffset();
            let top = anchorOffset.top - elemTransformOrigin.vertical;
            let left = anchorOffset.left - elemTransformOrigin.horizontal;
            const bottom = top + elemRect.height;
            const right = left + elemRect.width;
            const containerWindow = ownerWindow(resolveAnchorEl(anchorEl));
            const heightThreshold = containerWindow.innerHeight - marginThreshold;
            const widthThreshold = containerWindow.innerWidth - marginThreshold;
            if (marginThreshold !== null && top < marginThreshold) {
                const diff = top - marginThreshold;
                top -= diff;
                elemTransformOrigin.vertical += diff;
            } else if (marginThreshold !== null && bottom > heightThreshold) {
                const diff = bottom - heightThreshold;
                top -= diff;
                elemTransformOrigin.vertical += diff;
            }
            if (marginThreshold !== null && left < marginThreshold) {
                const diff = left - marginThreshold;
                left -= diff;
                elemTransformOrigin.horizontal += diff;
            } else if (right > widthThreshold) {
                const diff = right - widthThreshold;
                left -= diff;
                elemTransformOrigin.horizontal += diff;
            }
            return {
                top: `${Math.round(top)}px`,
                left: `${Math.round(left)}px`,
                transformOrigin: getTransformOriginValue(elemTransformOrigin)
            };
        }), [ anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold ]);
        const [isPositioned, setIsPositioned] = reactExports.useState(open);
        const setPositioningStyles = reactExports.useCallback((() => {
            const element = paperRef.current;
            if (!element) {
                return;
            }
            const positioning = getPositioningStyle(element);
            if (positioning.top !== null) {
                element.style.top = positioning.top;
            }
            if (positioning.left !== null) {
                element.style.left = positioning.left;
            }
            element.style.transformOrigin = positioning.transformOrigin;
            setIsPositioned(true);
        }), [ getPositioningStyle ]);
        reactExports.useEffect((() => {
            if (disableScrollLock) {
                window.addEventListener("scroll", setPositioningStyles);
            }
            return () => window.removeEventListener("scroll", setPositioningStyles);
        }), [ anchorEl, disableScrollLock, setPositioningStyles ]);
        const handleEntering = (element, isAppearing) => {
            if (onEntering) {
                onEntering(element, isAppearing);
            }
            setPositioningStyles();
        };
        const handleExited = () => {
            setIsPositioned(false);
        };
        reactExports.useEffect((() => {
            if (open) {
                setPositioningStyles();
            }
        }));
        reactExports.useImperativeHandle(action, (() => open ? {
            updatePosition: () => {
                setPositioningStyles();
            }
        } : null), [ open, setPositioningStyles ]);
        reactExports.useEffect((() => {
            if (!open) {
                return undefined;
            }
            const handleResize = debounce((() => {
                setPositioningStyles();
            }));
            const containerWindow = ownerWindow(anchorEl);
            containerWindow.addEventListener("resize", handleResize);
            return () => {
                handleResize.clear();
                containerWindow.removeEventListener("resize", handleResize);
            };
        }), [ anchorEl, open, setPositioningStyles ]);
        let transitionDuration = transitionDurationProp;
        if (transitionDurationProp === "auto" && !TransitionComponent.muiSupportAuto) {
            transitionDuration = undefined;
        }
        const container = containerProp || (anchorEl ? ownerDocument(resolveAnchorEl(anchorEl)).body : undefined);
        const RootSlot = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : PopoverRoot;
        const PaperSlot = (_slots$paper = slots == null ? void 0 : slots.paper) != null ? _slots$paper : PopoverPaper;
        const paperProps = useSlotProps({
            elementType: PaperSlot,
            externalSlotProps: _extends$1({}, externalPaperSlotProps, {
                style: isPositioned ? externalPaperSlotProps.style : _extends$1({}, externalPaperSlotProps.style, {
                    opacity: 0
                })
            }),
            additionalProps: {
                elevation: elevation,
                ref: handlePaperRef
            },
            ownerState: ownerState,
            className: clsx(classes.paper, externalPaperSlotProps == null ? void 0 : externalPaperSlotProps.className)
        });
        const _useSlotProps = useSlotProps({
            elementType: RootSlot,
            externalSlotProps: (slotProps == null ? void 0 : slotProps.root) || {},
            externalForwardedProps: other,
            additionalProps: {
                ref: ref,
                slotProps: {
                    backdrop: {
                        invisible: true
                    }
                },
                container: container,
                open: open
            },
            ownerState: ownerState,
            className: clsx(classes.root, className)
        }), {slotProps: rootSlotPropsProp} = _useSlotProps, rootProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded3);
        return jsxRuntimeExports.jsx(RootSlot, _extends$1({}, rootProps, !isHostComponent(RootSlot) && {
            slotProps: rootSlotPropsProp,
            disableScrollLock: disableScrollLock
        }, {
            children: jsxRuntimeExports.jsx(TransitionComponent, _extends$1({
                appear: true,
                in: open,
                onEntering: handleEntering,
                onExited: handleExited,
                timeout: transitionDuration
            }, TransitionProps, {
                children: jsxRuntimeExports.jsx(PaperSlot, _extends$1({}, paperProps, {
                    children: children
                }))
            }))
        }));
    }));
    function getMenuUtilityClass(slot) {
        return generateUtilityClass("MuiMenu", slot);
    }
    generateUtilityClasses("MuiMenu", [ "root", "paper", "list" ]);
    const _excluded$8 = [ "onEntering" ], _excluded2$1 = [ "autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps" ];
    const RTL_ORIGIN = {
        vertical: "top",
        horizontal: "right"
    };
    const LTR_ORIGIN = {
        vertical: "top",
        horizontal: "left"
    };
    const useUtilityClasses$7 = ownerState => {
        const {classes: classes} = ownerState;
        const slots = {
            root: [ "root" ],
            paper: [ "paper" ],
            list: [ "list" ]
        };
        return composeClasses(slots, getMenuUtilityClass, classes);
    };
    const MenuRoot = styled(Popover, {
        shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === "classes",
        name: "MuiMenu",
        slot: "Root",
        overridesResolver: (props, styles) => styles.root
    })({});
    const MenuPaper = styled(PopoverPaper, {
        name: "MuiMenu",
        slot: "Paper",
        overridesResolver: (props, styles) => styles.paper
    })({
        maxHeight: "calc(100% - 96px)",
        WebkitOverflowScrolling: "touch"
    });
    const MenuMenuList = styled(MenuList, {
        name: "MuiMenu",
        slot: "List",
        overridesResolver: (props, styles) => styles.list
    })({
        outline: 0
    });
    const Menu = reactExports.forwardRef((function Menu(inProps, ref) {
        var _slots$paper, _slotProps$paper;
        const props = useDefaultProps({
            props: inProps,
            name: "MuiMenu"
        });
        const {autoFocus: autoFocus = true, children: children, className: className, disableAutoFocusItem: disableAutoFocusItem = false, MenuListProps: MenuListProps = {}, onClose: onClose, open: open, PaperProps: PaperProps = {}, PopoverClasses: PopoverClasses, transitionDuration: transitionDuration = "auto", TransitionProps: {onEntering: onEntering} = {}, variant: variant = "selectedMenu", slots: slots = {}, slotProps: slotProps = {}} = props, TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded$8), other = _objectWithoutPropertiesLoose(props, _excluded2$1);
        const isRtl = useRtl();
        const ownerState = _extends$1({}, props, {
            autoFocus: autoFocus,
            disableAutoFocusItem: disableAutoFocusItem,
            MenuListProps: MenuListProps,
            onEntering: onEntering,
            PaperProps: PaperProps,
            transitionDuration: transitionDuration,
            TransitionProps: TransitionProps,
            variant: variant
        });
        const classes = useUtilityClasses$7(ownerState);
        const autoFocusItem = autoFocus && !disableAutoFocusItem && open;
        const menuListActionsRef = reactExports.useRef(null);
        const handleEntering = (element, isAppearing) => {
            if (menuListActionsRef.current) {
                menuListActionsRef.current.adjustStyleForScrollbar(element, {
                    direction: isRtl ? "rtl" : "ltr"
                });
            }
            if (onEntering) {
                onEntering(element, isAppearing);
            }
        };
        const handleListKeyDown = event => {
            if (event.key === "Tab") {
                event.preventDefault();
                if (onClose) {
                    onClose(event, "tabKeyDown");
                }
            }
        };
        let activeItemIndex = -1;
        reactExports.Children.map(children, ((child, index) => {
            if (!reactExports.isValidElement(child)) {
                return;
            }
            if (!child.props.disabled) {
                if (variant === "selectedMenu" && child.props.selected) {
                    activeItemIndex = index;
                } else if (activeItemIndex === -1) {
                    activeItemIndex = index;
                }
            }
        }));
        const PaperSlot = (_slots$paper = slots.paper) != null ? _slots$paper : MenuPaper;
        const paperExternalSlotProps = (_slotProps$paper = slotProps.paper) != null ? _slotProps$paper : PaperProps;
        const rootSlotProps = useSlotProps({
            elementType: slots.root,
            externalSlotProps: slotProps.root,
            ownerState: ownerState,
            className: [ classes.root, className ]
        });
        const paperSlotProps = useSlotProps({
            elementType: PaperSlot,
            externalSlotProps: paperExternalSlotProps,
            ownerState: ownerState,
            className: classes.paper
        });
        return jsxRuntimeExports.jsx(MenuRoot, _extends$1({
            onClose: onClose,
            anchorOrigin: {
                vertical: "bottom",
                horizontal: isRtl ? "right" : "left"
            },
            transformOrigin: isRtl ? RTL_ORIGIN : LTR_ORIGIN,
            slots: {
                paper: PaperSlot,
                root: slots.root
            },
            slotProps: {
                root: rootSlotProps,
                paper: paperSlotProps
            },
            open: open,
            ref: ref,
            transitionDuration: transitionDuration,
            TransitionProps: _extends$1({
                onEntering: handleEntering
            }, TransitionProps),
            ownerState: ownerState
        }, other, {
            classes: PopoverClasses,
            children: jsxRuntimeExports.jsx(MenuMenuList, _extends$1({
                onKeyDown: handleListKeyDown,
                actions: menuListActionsRef,
                autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
                autoFocusItem: autoFocusItem,
                variant: variant
            }, MenuListProps, {
                className: clsx(classes.list, MenuListProps.className),
                children: children
            }))
        }));
    }));
    function getNativeSelectUtilityClasses(slot) {
        return generateUtilityClass("MuiNativeSelect", slot);
    }
    const nativeSelectClasses = generateUtilityClasses("MuiNativeSelect", [ "root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error" ]);
    const _excluded$7 = [ "className", "disabled", "error", "IconComponent", "inputRef", "variant" ];
    const useUtilityClasses$6 = ownerState => {
        const {classes: classes, variant: variant, disabled: disabled, multiple: multiple, open: open, error: error} = ownerState;
        const slots = {
            select: [ "select", variant, disabled && "disabled", multiple && "multiple", error && "error" ],
            icon: [ "icon", `icon${capitalize$1(variant)}`, open && "iconOpen", disabled && "disabled" ]
        };
        return composeClasses(slots, getNativeSelectUtilityClasses, classes);
    };
    const nativeSelectSelectStyles = ({ownerState: ownerState, theme: theme}) => _extends$1({
        MozAppearance: "none",
        WebkitAppearance: "none",
        userSelect: "none",
        borderRadius: 0,
        cursor: "pointer",
        "&:focus": _extends$1({}, theme.vars ? {
            backgroundColor: `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.05)`
        } : {
            backgroundColor: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
        }, {
            borderRadius: 0
        }),
        "&::-ms-expand": {
            display: "none"
        },
        [`&.${nativeSelectClasses.disabled}`]: {
            cursor: "default"
        },
        "&[multiple]": {
            height: "auto"
        },
        "&:not([multiple]) option, &:not([multiple]) optgroup": {
            backgroundColor: (theme.vars || theme).palette.background.paper
        },
        "&&&": {
            paddingRight: 24,
            minWidth: 16
        }
    }, ownerState.variant === "filled" && {
        "&&&": {
            paddingRight: 32
        }
    }, ownerState.variant === "outlined" && {
        borderRadius: (theme.vars || theme).shape.borderRadius,
        "&:focus": {
            borderRadius: (theme.vars || theme).shape.borderRadius
        },
        "&&&": {
            paddingRight: 32
        }
    });
    const NativeSelectSelect = styled("select", {
        name: "MuiNativeSelect",
        slot: "Select",
        shouldForwardProp: rootShouldForwardProp,
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.select, styles[ownerState.variant], ownerState.error && styles.error, {
                [`&.${nativeSelectClasses.multiple}`]: styles.multiple
            } ];
        }
    })(nativeSelectSelectStyles);
    const nativeSelectIconStyles = ({ownerState: ownerState, theme: theme}) => _extends$1({
        position: "absolute",
        right: 0,
        top: "calc(50% - .5em)",
        pointerEvents: "none",
        color: (theme.vars || theme).palette.action.active,
        [`&.${nativeSelectClasses.disabled}`]: {
            color: (theme.vars || theme).palette.action.disabled
        }
    }, ownerState.open && {
        transform: "rotate(180deg)"
    }, ownerState.variant === "filled" && {
        right: 7
    }, ownerState.variant === "outlined" && {
        right: 7
    });
    const NativeSelectIcon = styled("svg", {
        name: "MuiNativeSelect",
        slot: "Icon",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.icon, ownerState.variant && styles[`icon${capitalize$1(ownerState.variant)}`], ownerState.open && styles.iconOpen ];
        }
    })(nativeSelectIconStyles);
    const NativeSelectInput = reactExports.forwardRef((function NativeSelectInput(props, ref) {
        const {className: className, disabled: disabled, error: error, IconComponent: IconComponent, inputRef: inputRef, variant: variant = "standard"} = props, other = _objectWithoutPropertiesLoose(props, _excluded$7);
        const ownerState = _extends$1({}, props, {
            disabled: disabled,
            variant: variant,
            error: error
        });
        const classes = useUtilityClasses$6(ownerState);
        return jsxRuntimeExports.jsxs(reactExports.Fragment, {
            children: [ jsxRuntimeExports.jsx(NativeSelectSelect, _extends$1({
                ownerState: ownerState,
                className: clsx(classes.select, className),
                disabled: disabled,
                ref: inputRef || ref
            }, other)), props.multiple ? null : jsxRuntimeExports.jsx(NativeSelectIcon, {
                as: IconComponent,
                ownerState: ownerState,
                className: classes.icon
            }) ]
        });
    }));
    var _span$1;
    const _excluded$6 = [ "children", "classes", "className", "label", "notched" ];
    const NotchedOutlineRoot$1 = styled("fieldset", {
        shouldForwardProp: rootShouldForwardProp
    })({
        textAlign: "left",
        position: "absolute",
        bottom: 0,
        right: 0,
        top: -5,
        left: 0,
        margin: 0,
        padding: "0 8px",
        pointerEvents: "none",
        borderRadius: "inherit",
        borderStyle: "solid",
        borderWidth: 1,
        overflow: "hidden",
        minWidth: "0%"
    });
    const NotchedOutlineLegend = styled("legend", {
        shouldForwardProp: rootShouldForwardProp
    })((({ownerState: ownerState, theme: theme}) => _extends$1({
        float: "unset",
        width: "auto",
        overflow: "hidden"
    }, !ownerState.withLabel && {
        padding: 0,
        lineHeight: "11px",
        transition: theme.transitions.create("width", {
            duration: 150,
            easing: theme.transitions.easing.easeOut
        })
    }, ownerState.withLabel && _extends$1({
        display: "block",
        padding: 0,
        height: 11,
        fontSize: "0.75em",
        visibility: "hidden",
        maxWidth: .01,
        transition: theme.transitions.create("max-width", {
            duration: 50,
            easing: theme.transitions.easing.easeOut
        }),
        whiteSpace: "nowrap",
        "& > span": {
            paddingLeft: 5,
            paddingRight: 5,
            display: "inline-block",
            opacity: 0,
            visibility: "visible"
        }
    }, ownerState.notched && {
        maxWidth: "100%",
        transition: theme.transitions.create("max-width", {
            duration: 100,
            easing: theme.transitions.easing.easeOut,
            delay: 50
        })
    }))));
    function NotchedOutline(props) {
        const {className: className, label: label, notched: notched} = props, other = _objectWithoutPropertiesLoose(props, _excluded$6);
        const withLabel = label != null && label !== "";
        const ownerState = _extends$1({}, props, {
            notched: notched,
            withLabel: withLabel
        });
        return jsxRuntimeExports.jsx(NotchedOutlineRoot$1, _extends$1({
            "aria-hidden": true,
            className: className,
            ownerState: ownerState
        }, other, {
            children: jsxRuntimeExports.jsx(NotchedOutlineLegend, {
                ownerState: ownerState,
                children: withLabel ? jsxRuntimeExports.jsx("span", {
                    children: label
                }) : _span$1 || (_span$1 = jsxRuntimeExports.jsx("span", {
                    className: "notranslate",
                    children: "​"
                }))
            })
        }));
    }
    const _excluded$5 = [ "components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type" ];
    const useUtilityClasses$5 = ownerState => {
        const {classes: classes} = ownerState;
        const slots = {
            root: [ "root" ],
            notchedOutline: [ "notchedOutline" ],
            input: [ "input" ]
        };
        const composedClasses = composeClasses(slots, getOutlinedInputUtilityClass, classes);
        return _extends$1({}, classes, composedClasses);
    };
    const OutlinedInputRoot = styled(InputBaseRoot, {
        shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === "classes",
        name: "MuiOutlinedInput",
        slot: "Root",
        overridesResolver: rootOverridesResolver
    })((({theme: theme, ownerState: ownerState}) => {
        const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
        return _extends$1({
            position: "relative",
            borderRadius: (theme.vars || theme).shape.borderRadius,
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: (theme.vars || theme).palette.text.primary
            },
            "@media (hover: none)": {
                [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
                }
            },
            [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: (theme.vars || theme).palette[ownerState.color].main,
                borderWidth: 2
            },
            [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: (theme.vars || theme).palette.error.main
            },
            [`&.${outlinedInputClasses.disabled} .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: (theme.vars || theme).palette.action.disabled
            }
        }, ownerState.startAdornment && {
            paddingLeft: 14
        }, ownerState.endAdornment && {
            paddingRight: 14
        }, ownerState.multiline && _extends$1({
            padding: "16.5px 14px"
        }, ownerState.size === "small" && {
            padding: "8.5px 14px"
        }));
    }));
    const NotchedOutlineRoot = styled(NotchedOutline, {
        name: "MuiOutlinedInput",
        slot: "NotchedOutline",
        overridesResolver: (props, styles) => styles.notchedOutline
    })((({theme: theme}) => {
        const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
        return {
            borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
        };
    }));
    const OutlinedInputInput = styled(InputBaseComponent, {
        name: "MuiOutlinedInput",
        slot: "Input",
        overridesResolver: inputOverridesResolver
    })((({theme: theme, ownerState: ownerState}) => _extends$1({
        padding: "16.5px 14px"
    }, !theme.vars && {
        "&:-webkit-autofill": {
            WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
            WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
            caretColor: theme.palette.mode === "light" ? null : "#fff",
            borderRadius: "inherit"
        }
    }, theme.vars && {
        "&:-webkit-autofill": {
            borderRadius: "inherit"
        },
        [theme.getColorSchemeSelector("dark")]: {
            "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 100px #266798 inset",
                WebkitTextFillColor: "#fff",
                caretColor: "#fff"
            }
        }
    }, ownerState.size === "small" && {
        padding: "8.5px 14px"
    }, ownerState.multiline && {
        padding: 0
    }, ownerState.startAdornment && {
        paddingLeft: 0
    }, ownerState.endAdornment && {
        paddingRight: 0
    })));
    const OutlinedInput = reactExports.forwardRef((function OutlinedInput(inProps, ref) {
        var _ref, _slots$root, _ref2, _slots$input, _React$Fragment;
        const props = useDefaultProps({
            props: inProps,
            name: "MuiOutlinedInput"
        });
        const {components: components = {}, fullWidth: fullWidth = false, inputComponent: inputComponent = "input", label: label, multiline: multiline = false, notched: notched, slots: slots = {}, type: type = "text"} = props, other = _objectWithoutPropertiesLoose(props, _excluded$5);
        const classes = useUtilityClasses$5(props);
        const muiFormControl = useFormControl();
        const fcs = formControlState({
            props: props,
            muiFormControl: muiFormControl,
            states: [ "color", "disabled", "error", "focused", "hiddenLabel", "size", "required" ]
        });
        const ownerState = _extends$1({}, props, {
            color: fcs.color || "primary",
            disabled: fcs.disabled,
            error: fcs.error,
            focused: fcs.focused,
            formControl: muiFormControl,
            fullWidth: fullWidth,
            hiddenLabel: fcs.hiddenLabel,
            multiline: multiline,
            size: fcs.size,
            type: type
        });
        const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : OutlinedInputRoot;
        const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : OutlinedInputInput;
        return jsxRuntimeExports.jsx(InputBase, _extends$1({
            slots: {
                root: RootSlot,
                input: InputSlot
            },
            renderSuffix: state => jsxRuntimeExports.jsx(NotchedOutlineRoot, {
                ownerState: ownerState,
                className: classes.notchedOutline,
                label: label != null && label !== "" && fcs.required ? _React$Fragment || (_React$Fragment = jsxRuntimeExports.jsxs(reactExports.Fragment, {
                    children: [ label, " ", "*" ]
                })) : label,
                notched: typeof notched !== "undefined" ? notched : Boolean(state.startAdornment || state.filled || state.focused)
            }),
            fullWidth: fullWidth,
            inputComponent: inputComponent,
            multiline: multiline,
            ref: ref,
            type: type
        }, other, {
            classes: _extends$1({}, classes, {
                notchedOutline: null
            })
        }));
    }));
    OutlinedInput.muiName = "Input";
    function getScopedCssBaselineUtilityClass(slot) {
        return generateUtilityClass("MuiScopedCssBaseline", slot);
    }
    generateUtilityClasses("MuiScopedCssBaseline", [ "root" ]);
    const _excluded$4 = [ "className", "component", "enableColorScheme" ];
    const useUtilityClasses$4 = ownerState => {
        const {classes: classes} = ownerState;
        const slots = {
            root: [ "root" ]
        };
        return composeClasses(slots, getScopedCssBaselineUtilityClass, classes);
    };
    const ScopedCssBaselineRoot = styled("div", {
        name: "MuiScopedCssBaseline",
        slot: "Root",
        overridesResolver: (props, styles) => styles.root
    })((({theme: theme, ownerState: ownerState}) => {
        const colorSchemeStyles = {};
        if (ownerState.enableColorScheme && theme.colorSchemes) {
            Object.entries(theme.colorSchemes).forEach((([key, scheme]) => {
                var _scheme$palette;
                colorSchemeStyles[`&${theme.getColorSchemeSelector(key).replace(/\s*&/, "")}`] = {
                    colorScheme: (_scheme$palette = scheme.palette) == null ? void 0 : _scheme$palette.mode
                };
            }));
        }
        return _extends$1({}, html(theme, ownerState.enableColorScheme), body(theme), {
            "& *, & *::before, & *::after": {
                boxSizing: "inherit"
            },
            "& strong, & b": {
                fontWeight: theme.typography.fontWeightBold
            }
        }, colorSchemeStyles);
    }));
    const ScopedCssBaseline = reactExports.forwardRef((function ScopedCssBaseline(inProps, ref) {
        const props = useDefaultProps({
            props: inProps,
            name: "MuiScopedCssBaseline"
        });
        const {className: className, component: component = "div"} = props, other = _objectWithoutPropertiesLoose(props, _excluded$4);
        const ownerState = _extends$1({}, props, {
            component: component
        });
        const classes = useUtilityClasses$4(ownerState);
        return jsxRuntimeExports.jsx(ScopedCssBaselineRoot, _extends$1({
            as: component,
            className: clsx(classes.root, className),
            ref: ref,
            ownerState: ownerState
        }, other));
    }));
    function getSelectUtilityClasses(slot) {
        return generateUtilityClass("MuiSelect", slot);
    }
    const selectClasses = generateUtilityClasses("MuiSelect", [ "root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error" ]);
    var _span;
    const _excluded$3 = [ "aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant" ];
    const SelectSelect = styled("div", {
        name: "MuiSelect",
        slot: "Select",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ {
                [`&.${selectClasses.select}`]: styles.select
            }, {
                [`&.${selectClasses.select}`]: styles[ownerState.variant]
            }, {
                [`&.${selectClasses.error}`]: styles.error
            }, {
                [`&.${selectClasses.multiple}`]: styles.multiple
            } ];
        }
    })(nativeSelectSelectStyles, {
        [`&.${selectClasses.select}`]: {
            height: "auto",
            minHeight: "1.4375em",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden"
        }
    });
    const SelectIcon = styled("svg", {
        name: "MuiSelect",
        slot: "Icon",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.icon, ownerState.variant && styles[`icon${capitalize$1(ownerState.variant)}`], ownerState.open && styles.iconOpen ];
        }
    })(nativeSelectIconStyles);
    const SelectNativeInput = styled("input", {
        shouldForwardProp: prop => slotShouldForwardProp(prop) && prop !== "classes",
        name: "MuiSelect",
        slot: "NativeInput",
        overridesResolver: (props, styles) => styles.nativeInput
    })({
        bottom: 0,
        left: 0,
        position: "absolute",
        opacity: 0,
        pointerEvents: "none",
        width: "100%",
        boxSizing: "border-box"
    });
    function areEqualValues(a, b) {
        if (typeof b === "object" && b !== null) {
            return a === b;
        }
        return String(a) === String(b);
    }
    function isEmpty(display) {
        return display == null || typeof display === "string" && !display.trim();
    }
    const useUtilityClasses$3 = ownerState => {
        const {classes: classes, variant: variant, disabled: disabled, multiple: multiple, open: open, error: error} = ownerState;
        const slots = {
            select: [ "select", variant, disabled && "disabled", multiple && "multiple", error && "error" ],
            icon: [ "icon", `icon${capitalize$1(variant)}`, open && "iconOpen", disabled && "disabled" ],
            nativeInput: [ "nativeInput" ]
        };
        return composeClasses(slots, getSelectUtilityClasses, classes);
    };
    const SelectInput = reactExports.forwardRef((function SelectInput(props, ref) {
        var _MenuProps$slotProps;
        const {"aria-describedby": ariaDescribedby, "aria-label": ariaLabel, autoFocus: autoFocus, autoWidth: autoWidth, children: children, className: className, defaultOpen: defaultOpen, defaultValue: defaultValue, disabled: disabled, displayEmpty: displayEmpty, error: error = false, IconComponent: IconComponent, inputRef: inputRefProp, labelId: labelId, MenuProps: MenuProps = {}, multiple: multiple, name: name, onBlur: onBlur, onChange: onChange, onClose: onClose, onFocus: onFocus, onOpen: onOpen, open: openProp, readOnly: readOnly, renderValue: renderValue, SelectDisplayProps: SelectDisplayProps = {}, tabIndex: tabIndexProp, value: valueProp, variant: variant = "standard"} = props, other = _objectWithoutPropertiesLoose(props, _excluded$3);
        const [value, setValueState] = useControlled({
            controlled: valueProp,
            default: defaultValue,
            name: "Select"
        });
        const [openState, setOpenState] = useControlled({
            controlled: openProp,
            default: defaultOpen,
            name: "Select"
        });
        const inputRef = reactExports.useRef(null);
        const displayRef = reactExports.useRef(null);
        const [displayNode, setDisplayNode] = reactExports.useState(null);
        const {current: isOpenControlled} = reactExports.useRef(openProp != null);
        const [menuMinWidthState, setMenuMinWidthState] = reactExports.useState();
        const handleRef = useForkRef(ref, inputRefProp);
        const handleDisplayRef = reactExports.useCallback((node => {
            displayRef.current = node;
            if (node) {
                setDisplayNode(node);
            }
        }), []);
        const anchorElement = displayNode == null ? void 0 : displayNode.parentNode;
        reactExports.useImperativeHandle(handleRef, (() => ({
            focus: () => {
                displayRef.current.focus();
            },
            node: inputRef.current,
            value: value
        })), [ value ]);
        reactExports.useEffect((() => {
            if (defaultOpen && openState && displayNode && !isOpenControlled) {
                setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
                displayRef.current.focus();
            }
        }), [ displayNode, autoWidth ]);
        reactExports.useEffect((() => {
            if (autoFocus) {
                displayRef.current.focus();
            }
        }), [ autoFocus ]);
        reactExports.useEffect((() => {
            if (!labelId) {
                return undefined;
            }
            const label = ownerDocument(displayRef.current).getElementById(labelId);
            if (label) {
                const handler = () => {
                    if (getSelection().isCollapsed) {
                        displayRef.current.focus();
                    }
                };
                label.addEventListener("click", handler);
                return () => {
                    label.removeEventListener("click", handler);
                };
            }
            return undefined;
        }), [ labelId ]);
        const update = (open, event) => {
            if (open) {
                if (onOpen) {
                    onOpen(event);
                }
            } else if (onClose) {
                onClose(event);
            }
            if (!isOpenControlled) {
                setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
                setOpenState(open);
            }
        };
        const handleMouseDown = event => {
            if (event.button !== 0) {
                return;
            }
            event.preventDefault();
            displayRef.current.focus();
            update(true, event);
        };
        const handleClose = event => {
            update(false, event);
        };
        const childrenArray = reactExports.Children.toArray(children);
        const handleChange = event => {
            const child = childrenArray.find((childItem => childItem.props.value === event.target.value));
            if (child === undefined) {
                return;
            }
            setValueState(child.props.value);
            if (onChange) {
                onChange(event, child);
            }
        };
        const handleItemClick = child => event => {
            let newValue;
            if (!event.currentTarget.hasAttribute("tabindex")) {
                return;
            }
            if (multiple) {
                newValue = Array.isArray(value) ? value.slice() : [];
                const itemIndex = value.indexOf(child.props.value);
                if (itemIndex === -1) {
                    newValue.push(child.props.value);
                } else {
                    newValue.splice(itemIndex, 1);
                }
            } else {
                newValue = child.props.value;
            }
            if (child.props.onClick) {
                child.props.onClick(event);
            }
            if (value !== newValue) {
                setValueState(newValue);
                if (onChange) {
                    const nativeEvent = event.nativeEvent || event;
                    const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
                    Object.defineProperty(clonedEvent, "target", {
                        writable: true,
                        value: {
                            value: newValue,
                            name: name
                        }
                    });
                    onChange(clonedEvent, child);
                }
            }
            if (!multiple) {
                update(false, event);
            }
        };
        const handleKeyDown = event => {
            if (!readOnly) {
                const validKeys = [ " ", "ArrowUp", "ArrowDown", "Enter" ];
                if (validKeys.indexOf(event.key) !== -1) {
                    event.preventDefault();
                    update(true, event);
                }
            }
        };
        const open = displayNode !== null && openState;
        const handleBlur = event => {
            if (!open && onBlur) {
                Object.defineProperty(event, "target", {
                    writable: true,
                    value: {
                        value: value,
                        name: name
                    }
                });
                onBlur(event);
            }
        };
        delete other["aria-invalid"];
        let display;
        let displaySingle;
        const displayMultiple = [];
        let computeDisplay = false;
        if (isFilled({
            value: value
        }) || displayEmpty) {
            if (renderValue) {
                display = renderValue(value);
            } else {
                computeDisplay = true;
            }
        }
        const items = childrenArray.map((child => {
            if (!reactExports.isValidElement(child)) {
                return null;
            }
            let selected;
            if (multiple) {
                if (!Array.isArray(value)) {
                    throw new Error(formatMuiErrorMessage$1(2));
                }
                selected = value.some((v => areEqualValues(v, child.props.value)));
                if (selected && computeDisplay) {
                    displayMultiple.push(child.props.children);
                }
            } else {
                selected = areEqualValues(value, child.props.value);
                if (selected && computeDisplay) {
                    displaySingle = child.props.children;
                }
            }
            return reactExports.cloneElement(child, {
                "aria-selected": selected ? "true" : "false",
                onClick: handleItemClick(child),
                onKeyUp: event => {
                    if (event.key === " ") {
                        event.preventDefault();
                    }
                    if (child.props.onKeyUp) {
                        child.props.onKeyUp(event);
                    }
                },
                role: "option",
                selected: selected,
                value: undefined,
                "data-value": child.props.value
            });
        }));
        if (computeDisplay) {
            if (multiple) {
                if (displayMultiple.length === 0) {
                    display = null;
                } else {
                    display = displayMultiple.reduce(((output, child, index) => {
                        output.push(child);
                        if (index < displayMultiple.length - 1) {
                            output.push(", ");
                        }
                        return output;
                    }), []);
                }
            } else {
                display = displaySingle;
            }
        }
        let menuMinWidth = menuMinWidthState;
        if (!autoWidth && isOpenControlled && displayNode) {
            menuMinWidth = anchorElement.clientWidth;
        }
        let tabIndex;
        if (typeof tabIndexProp !== "undefined") {
            tabIndex = tabIndexProp;
        } else {
            tabIndex = disabled ? null : 0;
        }
        const buttonId = SelectDisplayProps.id || (name ? `mui-component-select-${name}` : undefined);
        const ownerState = _extends$1({}, props, {
            variant: variant,
            value: value,
            open: open,
            error: error
        });
        const classes = useUtilityClasses$3(ownerState);
        const paperProps = _extends$1({}, MenuProps.PaperProps, (_MenuProps$slotProps = MenuProps.slotProps) == null ? void 0 : _MenuProps$slotProps.paper);
        const listboxId = useId();
        return jsxRuntimeExports.jsxs(reactExports.Fragment, {
            children: [ jsxRuntimeExports.jsx(SelectSelect, _extends$1({
                ref: handleDisplayRef,
                tabIndex: tabIndex,
                role: "combobox",
                "aria-controls": listboxId,
                "aria-disabled": disabled ? "true" : undefined,
                "aria-expanded": open ? "true" : "false",
                "aria-haspopup": "listbox",
                "aria-label": ariaLabel,
                "aria-labelledby": [ labelId, buttonId ].filter(Boolean).join(" ") || undefined,
                "aria-describedby": ariaDescribedby,
                onKeyDown: handleKeyDown,
                onMouseDown: disabled || readOnly ? null : handleMouseDown,
                onBlur: handleBlur,
                onFocus: onFocus
            }, SelectDisplayProps, {
                ownerState: ownerState,
                className: clsx(SelectDisplayProps.className, classes.select, className),
                id: buttonId,
                children: isEmpty(display) ? _span || (_span = jsxRuntimeExports.jsx("span", {
                    className: "notranslate",
                    children: "​"
                })) : display
            })), jsxRuntimeExports.jsx(SelectNativeInput, _extends$1({
                "aria-invalid": error,
                value: Array.isArray(value) ? value.join(",") : value,
                name: name,
                ref: inputRef,
                "aria-hidden": true,
                onChange: handleChange,
                tabIndex: -1,
                disabled: disabled,
                className: classes.nativeInput,
                autoFocus: autoFocus,
                ownerState: ownerState
            }, other)), jsxRuntimeExports.jsx(SelectIcon, {
                as: IconComponent,
                className: classes.icon,
                ownerState: ownerState
            }), jsxRuntimeExports.jsx(Menu, _extends$1({
                id: `menu-${name || ""}`,
                anchorEl: anchorElement,
                open: open,
                onClose: handleClose,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "center"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "center"
                }
            }, MenuProps, {
                MenuListProps: _extends$1({
                    "aria-labelledby": labelId,
                    role: "listbox",
                    "aria-multiselectable": multiple ? "true" : undefined,
                    disableListWrap: true,
                    id: listboxId
                }, MenuProps.MenuListProps),
                slotProps: _extends$1({}, MenuProps.slotProps, {
                    paper: _extends$1({}, paperProps, {
                        style: _extends$1({
                            minWidth: menuMinWidth
                        }, paperProps != null ? paperProps.style : null)
                    })
                }),
                children: items
            })) ]
        });
    }));
    const _excluded$2 = [ "autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant" ], _excluded2 = [ "root" ];
    const useUtilityClasses$2 = ownerState => {
        const {classes: classes} = ownerState;
        return classes;
    };
    const styledRootConfig = {
        name: "MuiSelect",
        overridesResolver: (props, styles) => styles.root,
        shouldForwardProp: prop => rootShouldForwardProp(prop) && prop !== "variant",
        slot: "Root"
    };
    const StyledInput = styled(Input, styledRootConfig)("");
    const StyledOutlinedInput = styled(OutlinedInput, styledRootConfig)("");
    const StyledFilledInput = styled(FilledInput, styledRootConfig)("");
    const Select = reactExports.forwardRef((function Select(inProps, ref) {
        const props = useDefaultProps({
            name: "MuiSelect",
            props: inProps
        });
        const {autoWidth: autoWidth = false, children: children, classes: classesProp = {}, className: className, defaultOpen: defaultOpen = false, displayEmpty: displayEmpty = false, IconComponent: IconComponent = ArrowDropDownIcon, id: id, input: input, inputProps: inputProps, label: label, labelId: labelId, MenuProps: MenuProps, multiple: multiple = false, native: native = false, onClose: onClose, onOpen: onOpen, open: open, renderValue: renderValue, SelectDisplayProps: SelectDisplayProps, variant: variantProp = "outlined"} = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
        const inputComponent = native ? NativeSelectInput : SelectInput;
        const muiFormControl = useFormControl();
        const fcs = formControlState({
            props: props,
            muiFormControl: muiFormControl,
            states: [ "variant", "error" ]
        });
        const variant = fcs.variant || variantProp;
        const ownerState = _extends$1({}, props, {
            variant: variant,
            classes: classesProp
        });
        const classes = useUtilityClasses$2(ownerState);
        const restOfClasses = _objectWithoutPropertiesLoose(classes, _excluded2);
        const InputComponent = input || {
            standard: jsxRuntimeExports.jsx(StyledInput, {
                ownerState: ownerState
            }),
            outlined: jsxRuntimeExports.jsx(StyledOutlinedInput, {
                label: label,
                ownerState: ownerState
            }),
            filled: jsxRuntimeExports.jsx(StyledFilledInput, {
                ownerState: ownerState
            })
        }[variant];
        const inputComponentRef = useForkRef(ref, getReactElementRef(InputComponent));
        return jsxRuntimeExports.jsx(reactExports.Fragment, {
            children: reactExports.cloneElement(InputComponent, _extends$1({
                inputComponent: inputComponent,
                inputProps: _extends$1({
                    children: children,
                    error: fcs.error,
                    IconComponent: IconComponent,
                    variant: variant,
                    type: undefined,
                    multiple: multiple
                }, native ? {
                    id: id
                } : {
                    autoWidth: autoWidth,
                    defaultOpen: defaultOpen,
                    displayEmpty: displayEmpty,
                    labelId: labelId,
                    MenuProps: MenuProps,
                    onClose: onClose,
                    onOpen: onOpen,
                    open: open,
                    renderValue: renderValue,
                    SelectDisplayProps: _extends$1({
                        id: id
                    }, SelectDisplayProps)
                }, inputProps, {
                    classes: inputProps ? deepmerge$1(restOfClasses, inputProps.classes) : restOfClasses
                }, input ? input.props.inputProps : {})
            }, (multiple && native || displayEmpty) && variant === "outlined" ? {
                notched: true
            } : {}, {
                ref: inputComponentRef,
                className: clsx(InputComponent.props.className, className, classes.root)
            }, !input && {
                variant: variant
            }, other))
        });
    }));
    Select.muiName = "Select";
    function getSwitchUtilityClass(slot) {
        return generateUtilityClass("MuiSwitch", slot);
    }
    const switchClasses = generateUtilityClasses("MuiSwitch", [ "root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track" ]);
    const _excluded$1 = [ "className", "color", "edge", "size", "sx" ];
    const useUtilityClasses$1 = ownerState => {
        const {classes: classes, edge: edge, size: size, color: color, checked: checked, disabled: disabled} = ownerState;
        const slots = {
            root: [ "root", edge && `edge${capitalize$1(edge)}`, `size${capitalize$1(size)}` ],
            switchBase: [ "switchBase", `color${capitalize$1(color)}`, checked && "checked", disabled && "disabled" ],
            thumb: [ "thumb" ],
            track: [ "track" ],
            input: [ "input" ]
        };
        const composedClasses = composeClasses(slots, getSwitchUtilityClass, classes);
        return _extends$1({}, classes, composedClasses);
    };
    const SwitchRoot = styled("span", {
        name: "MuiSwitch",
        slot: "Root",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.root, ownerState.edge && styles[`edge${capitalize$1(ownerState.edge)}`], styles[`size${capitalize$1(ownerState.size)}`] ];
        }
    })({
        display: "inline-flex",
        width: 34 + 12 * 2,
        height: 14 + 12 * 2,
        overflow: "hidden",
        padding: 12,
        boxSizing: "border-box",
        position: "relative",
        flexShrink: 0,
        zIndex: 0,
        verticalAlign: "middle",
        "@media print": {
            colorAdjust: "exact"
        },
        variants: [ {
            props: {
                edge: "start"
            },
            style: {
                marginLeft: -8
            }
        }, {
            props: {
                edge: "end"
            },
            style: {
                marginRight: -8
            }
        }, {
            props: {
                size: "small"
            },
            style: {
                width: 40,
                height: 24,
                padding: 7,
                [`& .${switchClasses.thumb}`]: {
                    width: 16,
                    height: 16
                },
                [`& .${switchClasses.switchBase}`]: {
                    padding: 4,
                    [`&.${switchClasses.checked}`]: {
                        transform: "translateX(16px)"
                    }
                }
            }
        } ]
    });
    const SwitchSwitchBase = styled(SwitchBase, {
        name: "MuiSwitch",
        slot: "SwitchBase",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.switchBase, {
                [`& .${switchClasses.input}`]: styles.input
            }, ownerState.color !== "default" && styles[`color${capitalize$1(ownerState.color)}`] ];
        }
    })((({theme: theme}) => ({
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        color: theme.vars ? theme.vars.palette.Switch.defaultColor : `${theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.grey[300]}`,
        transition: theme.transitions.create([ "left", "transform" ], {
            duration: theme.transitions.duration.shortest
        }),
        [`&.${switchClasses.checked}`]: {
            transform: "translateX(20px)"
        },
        [`&.${switchClasses.disabled}`]: {
            color: theme.vars ? theme.vars.palette.Switch.defaultDisabledColor : `${theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600]}`
        },
        [`&.${switchClasses.checked} + .${switchClasses.track}`]: {
            opacity: .5
        },
        [`&.${switchClasses.disabled} + .${switchClasses.track}`]: {
            opacity: theme.vars ? theme.vars.opacity.switchTrackDisabled : `${theme.palette.mode === "light" ? .12 : .2}`
        },
        [`& .${switchClasses.input}`]: {
            left: "-100%",
            width: "300%"
        }
    })), (({theme: theme}) => ({
        "&:hover": {
            backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha_1(theme.palette.action.active, theme.palette.action.hoverOpacity),
            "@media (hover: none)": {
                backgroundColor: "transparent"
            }
        },
        variants: [ ...Object.entries(theme.palette).filter((([, value]) => value.main && value.light)).map((([color]) => ({
            props: {
                color: color
            },
            style: {
                [`&.${switchClasses.checked}`]: {
                    color: (theme.vars || theme).palette[color].main,
                    "&:hover": {
                        backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha_1(theme.palette[color].main, theme.palette.action.hoverOpacity),
                        "@media (hover: none)": {
                            backgroundColor: "transparent"
                        }
                    },
                    [`&.${switchClasses.disabled}`]: {
                        color: theme.vars ? theme.vars.palette.Switch[`${color}DisabledColor`] : `${theme.palette.mode === "light" ? lighten_1(theme.palette[color].main, .62) : darken_1(theme.palette[color].main, .55)}`
                    }
                },
                [`&.${switchClasses.checked} + .${switchClasses.track}`]: {
                    backgroundColor: (theme.vars || theme).palette[color].main
                }
            }
        }))) ]
    })));
    const SwitchTrack = styled("span", {
        name: "MuiSwitch",
        slot: "Track",
        overridesResolver: (props, styles) => styles.track
    })((({theme: theme}) => ({
        height: "100%",
        width: "100%",
        borderRadius: 14 / 2,
        zIndex: -1,
        transition: theme.transitions.create([ "opacity", "background-color" ], {
            duration: theme.transitions.duration.shortest
        }),
        backgroundColor: theme.vars ? theme.vars.palette.common.onBackground : `${theme.palette.mode === "light" ? theme.palette.common.black : theme.palette.common.white}`,
        opacity: theme.vars ? theme.vars.opacity.switchTrack : `${theme.palette.mode === "light" ? .38 : .3}`
    })));
    const SwitchThumb = styled("span", {
        name: "MuiSwitch",
        slot: "Thumb",
        overridesResolver: (props, styles) => styles.thumb
    })((({theme: theme}) => ({
        boxShadow: (theme.vars || theme).shadows[1],
        backgroundColor: "currentColor",
        width: 20,
        height: 20,
        borderRadius: "50%"
    })));
    const Switch = reactExports.forwardRef((function Switch(inProps, ref) {
        const props = useDefaultProps({
            props: inProps,
            name: "MuiSwitch"
        });
        const {className: className, color: color = "primary", edge: edge = false, size: size = "medium", sx: sx} = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
        const ownerState = _extends$1({}, props, {
            color: color,
            edge: edge,
            size: size
        });
        const classes = useUtilityClasses$1(ownerState);
        const icon = jsxRuntimeExports.jsx(SwitchThumb, {
            className: classes.thumb,
            ownerState: ownerState
        });
        return jsxRuntimeExports.jsxs(SwitchRoot, {
            className: clsx(classes.root, className),
            sx: sx,
            ownerState: ownerState,
            children: [ jsxRuntimeExports.jsx(SwitchSwitchBase, _extends$1({
                type: "checkbox",
                icon: icon,
                checkedIcon: icon,
                ref: ref,
                ownerState: ownerState
            }, other, {
                classes: _extends$1({}, classes, {
                    root: classes.switchBase
                })
            })), jsxRuntimeExports.jsx(SwitchTrack, {
                className: classes.track,
                ownerState: ownerState
            }) ]
        });
    }));
    function getTextFieldUtilityClass(slot) {
        return generateUtilityClass("MuiTextField", slot);
    }
    generateUtilityClasses("MuiTextField", [ "root" ]);
    const _excluded = [ "autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant" ];
    const variantComponent = {
        standard: Input,
        filled: FilledInput,
        outlined: OutlinedInput
    };
    const useUtilityClasses = ownerState => {
        const {classes: classes} = ownerState;
        const slots = {
            root: [ "root" ]
        };
        return composeClasses(slots, getTextFieldUtilityClass, classes);
    };
    const TextFieldRoot = styled(FormControl, {
        name: "MuiTextField",
        slot: "Root",
        overridesResolver: (props, styles) => styles.root
    })({});
    const TextField = reactExports.forwardRef((function TextField(inProps, ref) {
        const props = useDefaultProps({
            props: inProps,
            name: "MuiTextField"
        });
        const {autoComplete: autoComplete, autoFocus: autoFocus = false, children: children, className: className, color: color = "primary", defaultValue: defaultValue, disabled: disabled = false, error: error = false, FormHelperTextProps: FormHelperTextProps, fullWidth: fullWidth = false, helperText: helperText, id: idOverride, InputLabelProps: InputLabelProps, inputProps: inputProps, InputProps: InputProps, inputRef: inputRef, label: label, maxRows: maxRows, minRows: minRows, multiline: multiline = false, name: name, onBlur: onBlur, onChange: onChange, onFocus: onFocus, placeholder: placeholder, required: required = false, rows: rows, select: select = false, SelectProps: SelectProps, type: type, value: value, variant: variant = "outlined"} = props, other = _objectWithoutPropertiesLoose(props, _excluded);
        const ownerState = _extends$1({}, props, {
            autoFocus: autoFocus,
            color: color,
            disabled: disabled,
            error: error,
            fullWidth: fullWidth,
            multiline: multiline,
            required: required,
            select: select,
            variant: variant
        });
        const classes = useUtilityClasses(ownerState);
        const InputMore = {};
        if (variant === "outlined") {
            if (InputLabelProps && typeof InputLabelProps.shrink !== "undefined") {
                InputMore.notched = InputLabelProps.shrink;
            }
            InputMore.label = label;
        }
        if (select) {
            if (!SelectProps || !SelectProps.native) {
                InputMore.id = undefined;
            }
            InputMore["aria-describedby"] = undefined;
        }
        const id = useId(idOverride);
        const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
        const inputLabelId = label && id ? `${id}-label` : undefined;
        const InputComponent = variantComponent[variant];
        const InputElement = jsxRuntimeExports.jsx(InputComponent, _extends$1({
            "aria-describedby": helperTextId,
            autoComplete: autoComplete,
            autoFocus: autoFocus,
            defaultValue: defaultValue,
            fullWidth: fullWidth,
            multiline: multiline,
            name: name,
            rows: rows,
            maxRows: maxRows,
            minRows: minRows,
            type: type,
            value: value,
            id: id,
            inputRef: inputRef,
            onBlur: onBlur,
            onChange: onChange,
            onFocus: onFocus,
            placeholder: placeholder,
            inputProps: inputProps
        }, InputMore, InputProps));
        return jsxRuntimeExports.jsxs(TextFieldRoot, _extends$1({
            className: clsx(classes.root, className),
            disabled: disabled,
            error: error,
            fullWidth: fullWidth,
            ref: ref,
            required: required,
            color: color,
            variant: variant,
            ownerState: ownerState
        }, other, {
            children: [ label != null && label !== "" && jsxRuntimeExports.jsx(InputLabel, _extends$1({
                htmlFor: id,
                id: inputLabelId
            }, InputLabelProps, {
                children: label
            })), select ? jsxRuntimeExports.jsx(Select, _extends$1({
                "aria-describedby": helperTextId,
                id: id,
                labelId: inputLabelId,
                value: value,
                input: InputElement
            }, SelectProps, {
                children: children
            })) : InputElement, helperText && jsxRuntimeExports.jsx(FormHelperText, _extends$1({
                id: helperTextId
            }, FormHelperTextProps, {
                children: helperText
            })) ]
        }));
    }));
    var createRoot;
    var m = reactDomExports;
    {
        createRoot = m.createRoot;
        m.hydrateRoot;
    }
    function appendComponentToElement(ReactComponent, selector) {
        var myElement = document.querySelector(selector);
        if (!myElement) {
            console.error("Specified selector not found in the document.");
            return false;
        }
        function fragmentApp() {
            return React.createElement(React.Fragment, null, reactDomExports.createPortal(React.createElement(ReactComponent, null), myElement));
        }
        var fragmentElement = document.createDocumentFragment();
        myElement.appendChild(fragmentElement);
        createRoot(fragmentElement).render(fragmentApp());
        return true;
    }
    function useGmValue(key, defaultValue) {
        const [data, setValue] = reactExports.useState(GM_getValue(key, defaultValue));
        function updateData(input) {
            GM_setValue(key, input);
            setValue(input);
        }
        return {
            data: data,
            updateData: updateData
        };
    }
    const useGmMenu = (menuText, onTriggerMenu) => {
        reactExports.useEffect((() => {
            const id = GM_registerMenuCommand(menuText, onTriggerMenu);
            return () => {
                GM_unregisterMenuCommand(id);
            };
        }), [ menuText, onTriggerMenu ]);
    };
    function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (typeof document === "undefined") {
            return;
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        var style = document.createElement("style");
        style.type = "text/css";
        if (insertAt === "top") {
            if (head.firstChild) {
                head.insertBefore(style, head.firstChild);
            } else {
                head.appendChild(style);
            }
        } else {
            head.appendChild(style);
        }
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }
    var css_248z = "*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  \n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  \n}\n\n.tailwind .container {\n  width: 100%\n}\n\n@media (min-width: 640px) {\n  .tailwind .container {\n    max-width: 640px\n  }\n}\n\n@media (min-width: 768px) {\n  .tailwind .container {\n    max-width: 768px\n  }\n}\n\n@media (min-width: 1024px) {\n  .tailwind .container {\n    max-width: 1024px\n  }\n}\n\n@media (min-width: 1280px) {\n  .tailwind .container {\n    max-width: 1280px\n  }\n}\n\n@media (min-width: 1536px) {\n  .tailwind .container {\n    max-width: 1536px\n  }\n}\n\n.tailwind .static {\n  position: static\n}\n\n.tailwind .fixed {\n  position: fixed\n}\n\n.tailwind .absolute {\n  position: absolute\n}\n\n.tailwind .relative {\n  position: relative\n}\n\n.tailwind .right-2 {\n  right: 0.5rem\n}\n\n.tailwind .top-2 {\n  top: 0.5rem\n}\n\n.tailwind .m-0 {\n  margin: 0px\n}\n\n.tailwind .m-4 {\n  margin: 1rem\n}\n\n.tailwind .my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem\n}\n\n.tailwind .mb-2 {\n  margin-bottom: 0.5rem\n}\n\n.tailwind .ml-12 {\n  margin-left: 3rem\n}\n\n.tailwind .ml-2 {\n  margin-left: 0.5rem\n}\n\n.tailwind .mr-2 {\n  margin-right: 0.5rem\n}\n\n.tailwind .mr-3 {\n  margin-right: 0.75rem\n}\n\n.tailwind .mt-1 {\n  margin-top: 0.25rem\n}\n\n.tailwind .mt-2 {\n  margin-top: 0.5rem\n}\n\n.tailwind .mt-4 {\n  margin-top: 1rem\n}\n\n.tailwind .mt-6 {\n  margin-top: 1.5rem\n}\n\n.tailwind .block {\n  display: block\n}\n\n.tailwind .inline-block {\n  display: inline-block\n}\n\n.tailwind .flex {\n  display: flex\n}\n\n.tailwind .table {\n  display: table\n}\n\n.tailwind .grid {\n  display: grid\n}\n\n.tailwind .h-12 {\n  height: 3rem\n}\n\n.tailwind .h-2 {\n  height: 0.5rem\n}\n\n.tailwind .h-4 {\n  height: 1rem\n}\n\n.tailwind .h-5 {\n  height: 1.25rem\n}\n\n.tailwind .h-6 {\n  height: 1.5rem\n}\n\n.tailwind .h-full {\n  height: 100%\n}\n\n.tailwind .min-h-\\[200px\\] {\n  min-height: 200px\n}\n\n.tailwind .w-1\\/2 {\n  width: 50%\n}\n\n.tailwind .w-3\\/4 {\n  width: 75%\n}\n\n.tailwind .w-5 {\n  width: 1.25rem\n}\n\n.tailwind .w-6 {\n  width: 1.5rem\n}\n\n.tailwind .w-full {\n  width: 100%\n}\n\n.tailwind .min-w-\\[300px\\] {\n  min-width: 300px\n}\n\n.tailwind .min-w-full {\n  min-width: 100%\n}\n\n.tailwind .max-w-2xl {\n  max-width: 42rem\n}\n\n.tailwind .max-w-4xl {\n  max-width: 56rem\n}\n\n.tailwind .max-w-\\[400px\\] {\n  max-width: 400px\n}\n\n.tailwind .max-w-md {\n  max-width: 28rem\n}\n\n.tailwind .max-w-none {\n  max-width: none\n}\n\n.tailwind .flex-1 {\n  flex: 1 1 0%\n}\n\n@keyframes pulse {\n  50% {\n    opacity: .5\n  }\n}\n\n.tailwind .animate-pulse {\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite\n}\n\n.tailwind .cursor-not-allowed {\n  cursor: not-allowed\n}\n\n.tailwind .grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr))\n}\n\n.tailwind .items-start {\n  align-items: flex-start\n}\n\n.tailwind .items-center {\n  align-items: center\n}\n\n.tailwind .justify-start {\n  justify-content: flex-start\n}\n\n.tailwind .justify-end {\n  justify-content: flex-end\n}\n\n.tailwind .justify-center {\n  justify-content: center\n}\n\n.tailwind .gap-3 {\n  gap: 0.75rem\n}\n\n.tailwind .gap-4 {\n  gap: 1rem\n}\n\n.tailwind .space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse))\n}\n\n.tailwind .space-y-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse))\n}\n\n.tailwind .divide-y > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-y-reverse: 0;\n  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n  border-bottom-width: calc(1px * var(--tw-divide-y-reverse))\n}\n\n.tailwind .divide-gray-200 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-divide-opacity, 1))\n}\n\n.tailwind .overflow-auto {\n  overflow: auto\n}\n\n.tailwind .overflow-y-auto {\n  overflow-y: auto\n}\n\n.tailwind .truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap\n}\n\n.tailwind .whitespace-nowrap {\n  white-space: nowrap\n}\n\n.tailwind .break-all {\n  word-break: break-all\n}\n\n.tailwind .rounded {\n  border-radius: 0.25rem\n}\n\n.tailwind .rounded-full {\n  border-radius: 9999px\n}\n\n.tailwind .rounded-lg {\n  border-radius: 0.5rem\n}\n\n.tailwind .rounded-md {\n  border-radius: 0.375rem\n}\n\n.tailwind .rounded-none {\n  border-radius: 0px\n}\n\n.tailwind .rounded-xl {\n  border-radius: 0.75rem\n}\n\n.tailwind .border {\n  border-width: 1px\n}\n\n.tailwind .border-b {\n  border-bottom-width: 1px\n}\n\n.tailwind .border-t {\n  border-top-width: 1px\n}\n\n.tailwind .border-blue-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(191 219 254 / var(--tw-border-opacity, 1))\n}\n\n.tailwind .border-gray-100 {\n  --tw-border-opacity: 1;\n  border-color: rgb(243 244 246 / var(--tw-border-opacity, 1))\n}\n\n.tailwind .border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1))\n}\n\n.tailwind .border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1))\n}\n\n.tailwind .border-green-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(187 247 208 / var(--tw-border-opacity, 1))\n}\n\n.tailwind .border-red-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 202 202 / var(--tw-border-opacity, 1))\n}\n\n.tailwind .border-yellow-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 240 138 / var(--tw-border-opacity, 1))\n}\n\n.tailwind .bg-blue-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 246 255 / var(--tw-bg-opacity, 1))\n}\n\n.tailwind .bg-blue-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1))\n}\n\n.tailwind .bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1))\n}\n\n.tailwind .bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1))\n}\n\n.tailwind .bg-gray-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1))\n}\n\n.tailwind .bg-green-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(240 253 244 / var(--tw-bg-opacity, 1))\n}\n\n.tailwind .bg-red-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 242 242 / var(--tw-bg-opacity, 1))\n}\n\n.tailwind .bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1))\n}\n\n.tailwind .bg-yellow-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 252 232 / var(--tw-bg-opacity, 1))\n}\n\n.tailwind .bg-opacity-70 {\n  --tw-bg-opacity: 0.7\n}\n\n.tailwind .bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops))\n}\n\n.tailwind .from-blue-50 {\n  --tw-gradient-from: #eff6ff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(239 246 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)\n}\n\n.tailwind .to-indigo-50 {\n  --tw-gradient-to: #eef2ff var(--tw-gradient-to-position)\n}\n\n.tailwind .p-4 {\n  padding: 1rem\n}\n\n.tailwind .p-6 {\n  padding: 1.5rem\n}\n\n.tailwind .px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem\n}\n\n.tailwind .px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem\n}\n\n.tailwind .py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem\n}\n\n.tailwind .py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem\n}\n\n.tailwind .py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem\n}\n\n.tailwind .pr-8 {\n  padding-right: 2rem\n}\n\n.tailwind .text-left {\n  text-align: left\n}\n\n.tailwind .text-center {\n  text-align: center\n}\n\n.tailwind .text-right {\n  text-align: right\n}\n\n.tailwind .text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem\n}\n\n.tailwind .text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem\n}\n\n.tailwind .text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem\n}\n\n.tailwind .text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem\n}\n\n.tailwind .font-medium {\n  font-weight: 500\n}\n\n.tailwind .font-normal {\n  font-weight: 400\n}\n\n.tailwind .font-semibold {\n  font-weight: 600\n}\n\n.tailwind .uppercase {\n  text-transform: uppercase\n}\n\n.tailwind .normal-case {\n  text-transform: none\n}\n\n.tailwind .leading-relaxed {\n  line-height: 1.625\n}\n\n.tailwind .tracking-wider {\n  letter-spacing: 0.05em\n}\n\n.tailwind .text-blue-800 {\n  --tw-text-opacity: 1;\n  color: rgb(30 64 175 / var(--tw-text-opacity, 1))\n}\n\n.tailwind .text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1))\n}\n\n.tailwind .text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1))\n}\n\n.tailwind .text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity, 1))\n}\n\n.tailwind .text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity, 1))\n}\n\n.tailwind .text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity, 1))\n}\n\n.tailwind .text-green-700 {\n  --tw-text-opacity: 1;\n  color: rgb(21 128 61 / var(--tw-text-opacity, 1))\n}\n\n.tailwind .text-green-800 {\n  --tw-text-opacity: 1;\n  color: rgb(22 101 52 / var(--tw-text-opacity, 1))\n}\n\n.tailwind .text-indigo-600 {\n  --tw-text-opacity: 1;\n  color: rgb(79 70 229 / var(--tw-text-opacity, 1))\n}\n\n.tailwind .text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1))\n}\n\n.tailwind .text-red-700 {\n  --tw-text-opacity: 1;\n  color: rgb(185 28 28 / var(--tw-text-opacity, 1))\n}\n\n.tailwind .text-red-800 {\n  --tw-text-opacity: 1;\n  color: rgb(153 27 27 / var(--tw-text-opacity, 1))\n}\n\n.tailwind .text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1))\n}\n\n.tailwind .text-yellow-800 {\n  --tw-text-opacity: 1;\n  color: rgb(133 77 14 / var(--tw-text-opacity, 1))\n}\n\n.tailwind .opacity-50 {\n  opacity: 0.5\n}\n\n.tailwind .shadow-2xl {\n  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n.tailwind .shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n.tailwind .shadow-none {\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n.tailwind .shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n.tailwind .filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)\n}\n\n.tailwind .transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms\n}\n\n.tailwind .transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms\n}\n\n.tailwind .transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms\n}\n\n.tailwind .transition-shadow {\n  transition-property: box-shadow;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms\n}\n\n.tailwind .duration-200 {\n  transition-duration: 200ms\n}\n\n.tailwind .hover\\:border-blue-500:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity, 1))\n}\n\n.tailwind .hover\\:border-gray-400:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(156 163 175 / var(--tw-border-opacity, 1))\n}\n\n.tailwind .hover\\:bg-blue-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 246 255 / var(--tw-bg-opacity, 1))\n}\n\n.tailwind .hover\\:bg-blue-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity, 1))\n}\n\n.tailwind .hover\\:bg-gray-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1))\n}\n\n.tailwind .hover\\:bg-gray-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1))\n}\n\n.tailwind .hover\\:bg-gray-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1))\n}\n\n.tailwind .hover\\:text-gray-700:hover {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity, 1))\n}\n\n.tailwind .hover\\:text-indigo-900:hover {\n  --tw-text-opacity: 1;\n  color: rgb(49 46 129 / var(--tw-text-opacity, 1))\n}\n\n.tailwind .hover\\:text-red-900:hover {\n  --tw-text-opacity: 1;\n  color: rgb(127 29 29 / var(--tw-text-opacity, 1))\n}\n\n@media (min-width: 640px) {\n  .tailwind .sm\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr))\n  }\n}";
    styleInject(css_248z);
    var App = function App() {
        var _useState = reactExports.useState(false), _useState2 = _slicedToArray(_useState, 2), showDialog = _useState2[0], setShowDialog = _useState2[1];
        var _useGmValue = useGmValue("lineTvAdSkipEnabled", true), adSkipEnabled = _useGmValue.data, setAdSkipEnabled = _useGmValue.updateData;
        var _useGmValue2 = useGmValue("lineTvQualityUnlockEnabled", true), qualityUnlockEnabled = _useGmValue2.data, setQualityUnlockEnabled = _useGmValue2.updateData;
        var _useGmValue3 = useGmValue("lineTvVideoSkipEnabled", true), videoSkipEnabled = _useGmValue3.data, setVideoSkipEnabled = _useGmValue3.updateData;
        var _useGmValue4 = useGmValue("lineTvSkipHotkey", "j"), skipHotkey = _useGmValue4.data, setSkipHotkey = _useGmValue4.updateData;
        var _useGmValue5 = useGmValue("lineTvSkipSeconds", 90), skipSeconds = _useGmValue5.data, setSkipSeconds = _useGmValue5.updateData;
        useGmMenu("Line TV Tools 設定", (function() {
            return setShowDialog(true);
        }));
        var removeAdElements = function removeAdElements() {
            var _a, _b;
            var adContainers = document.getElementsByClassName("player_ima-ad-container");
            while (adContainers.length > 0) {
                (_a = adContainers[0].parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(adContainers[0]);
            }
            var overlayAds = document.getElementsByClassName("vjs-overlay-pause-ad-pc");
            while (overlayAds.length > 0) {
                (_b = overlayAds[0].parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(overlayAds[0]);
            }
        };
        var removeQualityOverlay = function removeQualityOverlay() {
            var qualityOverlays = document.querySelectorAll(".vjs-overlay.vjs-overlay-top-left.vjs-overlay-quality-cover.absolute.w-full.h-full.pin.bg-linetv-background.bg-opacity-70.text-linetv-high-emphasis.vjs-overlay-no-background");
            qualityOverlays.forEach((function(overlay) {
                var _a;
                (_a = overlay.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(overlay);
            }));
            var fallbackOverlays = document.querySelectorAll(".vjs-overlay-quality-cover");
            fallbackOverlays.forEach((function(overlay) {
                var _a;
                if (overlay.classList.contains("vjs-overlay-top-left") && overlay.classList.contains("bg-linetv-background")) {
                    (_a = overlay.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(overlay);
                }
            }));
        };
        reactExports.useEffect((function() {
            if (!adSkipEnabled) return;
            var interval = setInterval(removeAdElements, 1e3);
            return function() {
                return clearInterval(interval);
            };
        }), [ adSkipEnabled ]);
        reactExports.useEffect((function() {
            if (!qualityUnlockEnabled) return;
            var interval = setInterval(removeQualityOverlay, 1e3);
            return function() {
                return clearInterval(interval);
            };
        }), [ qualityUnlockEnabled ]);
        var skipVideo = function skipVideo() {
            var video = document.getElementById("player_html5_api");
            if (video && !video.paused) {
                video.currentTime += skipSeconds;
                showSkipNotification();
            }
        };
        var showSkipNotification = function showSkipNotification() {
            var notification = document.createElement("div");
            notification.textContent = "⏭️ 跳過 ".concat(skipSeconds, " 秒");
            notification.style.cssText = "\n      position: fixed;\n      top: 20px;\n      right: 20px;\n      background: rgba(0, 0, 0, 0.8);\n      color: white;\n      padding: 12px 20px;\n      border-radius: 8px;\n      font-size: 14px;\n      font-weight: 500;\n      z-index: 10000;\n      transition: opacity 0.3s ease;\n    ";
            document.body.appendChild(notification);
            setTimeout((function() {
                notification.style.opacity = "0";
                setTimeout((function() {
                    document.body.removeChild(notification);
                }), 300);
            }), 3e3);
        };
        reactExports.useEffect((function() {
            if (!videoSkipEnabled) return;
            var handleKeyPress = function handleKeyPress(event) {
                var target = event.target;
                if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
                    return;
                }
                if (event.key.toLowerCase() === skipHotkey.toLowerCase()) {
                    event.preventDefault();
                    skipVideo();
                }
            };
            document.addEventListener("keydown", handleKeyPress);
            return function() {
                return document.removeEventListener("keydown", handleKeyPress);
            };
        }), [ videoSkipEnabled, skipHotkey, skipSeconds ]);
        var handleCloseDialog = function handleCloseDialog() {
            setShowDialog(false);
        };
        return React.createElement(ScopedCssBaseline, null, React.createElement(Dialog, {
            className: "tailwind",
            open: showDialog,
            onClose: handleCloseDialog,
            maxWidth: "sm",
            fullWidth: true,
            PaperProps: {
                className: "m-4 max-w-md w-full rounded-xl shadow-2xl border border-gray-100"
            },
            "aria-labelledby": "line-tv-settings-title"
        }, React.createElement(DialogTitle, {
            id: "line-tv-settings-title",
            className: "px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 relative"
        }, React.createElement(Typography, {
            variant: "h6",
            component: "h2",
            className: "text-xl font-semibold text-gray-800 pr-8"
        }, "Line TV 增強功能設定"), React.createElement(IconButton, {
            "aria-label": "關閉對話框",
            onClick: handleCloseDialog,
            className: "absolute right-2 top-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200",
            size: "small"
        }, React.createElement("svg", {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
        }, React.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M6 18L18 6M6 6l12 12"
        })))), React.createElement(DialogContent, {
            className: "p-6 bg-white"
        }, React.createElement(Box, {
            className: "space-y-6"
        }, React.createElement(Box, null, React.createElement(FormControlLabel, {
            control: React.createElement(Switch, {
                checked: adSkipEnabled,
                onChange: function onChange(e) {
                    return setAdSkipEnabled(e.target.checked);
                },
                color: "primary"
            }),
            label: React.createElement(Box, null, React.createElement(Typography, {
                variant: "subtitle1",
                className: "font-medium text-gray-800"
            }, "廣告跳過"), React.createElement(Typography, {
                variant: "body2",
                className: "text-gray-600 mt-1"
            }, "自動移除播放器中的廣告容器和暫停廣告")),
            className: "items-start"
        })), React.createElement(Divider, {
            className: "my-4"
        }), React.createElement(Box, null, React.createElement(FormControlLabel, {
            control: React.createElement(Switch, {
                checked: qualityUnlockEnabled,
                onChange: function onChange(e) {
                    return setQualityUnlockEnabled(e.target.checked);
                },
                color: "primary"
            }),
            label: React.createElement(Box, null, React.createElement(Typography, {
                variant: "subtitle1",
                className: "font-medium text-gray-800"
            }, "1080P 解鎖"), React.createElement(Typography, {
                variant: "body2",
                className: "text-gray-600 mt-1"
            }, "移除品質限制覆蓋層，解鎖高畫質播放")),
            className: "items-start"
        })), React.createElement(Divider, {
            className: "my-4"
        }), React.createElement(Box, null, React.createElement(FormControlLabel, {
            control: React.createElement(Switch, {
                checked: videoSkipEnabled,
                onChange: function onChange(e) {
                    return setVideoSkipEnabled(e.target.checked);
                },
                color: "primary"
            }),
            label: React.createElement(Box, null, React.createElement(Typography, {
                variant: "subtitle1",
                className: "font-medium text-gray-800"
            }, "一鍵跳過影片"), React.createElement(Typography, {
                variant: "body2",
                className: "text-gray-600 mt-1"
            }, "使用快捷鍵快速跳過指定秒數")),
            className: "items-start"
        }), videoSkipEnabled && React.createElement(Box, {
            className: "mt-4 ml-12"
        }, React.createElement(Box, {
            className: "flex gap-4 items-start"
        }, React.createElement(TextField, {
            label: "快捷鍵",
            value: skipHotkey,
            onChange: function onChange(e) {
                return setSkipHotkey(e.target.value.toLowerCase());
            },
            size: "small",
            sx: {
                width: 120
            },
            inputProps: {
                maxLength: 1,
                style: {
                    textTransform: "uppercase",
                    textAlign: "center"
                }
            },
            helperText: "單個字母鍵"
        }), React.createElement(TextField, {
            label: "跳過秒數",
            type: "number",
            value: skipSeconds,
            onChange: function onChange(e) {
                return setSkipSeconds(Math.max(1, parseInt(e.target.value) || 1));
            },
            size: "small",
            sx: {
                width: 140
            },
            InputProps: {
                endAdornment: React.createElement(InputAdornment, {
                    position: "end"
                }, "秒")
            },
            inputProps: {
                min: 1,
                max: 300
            },
            helperText: "1-300秒"
        })))), React.createElement(Box, {
            className: "mt-6 p-4 bg-blue-50 rounded-lg"
        }, React.createElement(Typography, {
            variant: "body2",
            className: "text-blue-800"
        }, "💡 提示：功能開關會自動保存，下次訪問時會記住您的設定"), videoSkipEnabled && React.createElement(Typography, {
            variant: "body2",
            className: "text-blue-800 mt-2"
        }, "🎮 按 ", React.createElement("strong", null, skipHotkey.toUpperCase()), " 鍵可跳過 ", React.createElement("strong", null, skipSeconds), " 秒影片")))), React.createElement(DialogActions, {
            className: "px-6 py-4 border-t border-gray-100 bg-gray-50 justify-end"
        }, React.createElement(Button, {
            onClick: handleCloseDialog,
            variant: "contained",
            className: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
        }, "完成"))));
    };
    var mountInterval = setInterval((function() {
        var success = appendComponentToElement(App, "body");
        if (success) {
            clearInterval(mountInterval);
        }
    }), 3e3);
})();
