// ==UserScript==
// @name           ani-gamer-question
// @version        1.1.0
// @description    巴哈頁面新增動畫瘋答題按鈕，點擊後會跳出動畫瘋答題視窗
// @author         Vanisoul
// @match          https://www.gamer.com.tw/*
// @match          https://forum.gamer.com.tw/*
// @license        MIT
// @namespace      https://greasyfork.org/users/429936
// @updateHistory  1.0.1 (2024-01-04) 封裝 API, 邏輯未改變
// @updateHistory  1.1.0 (2024-01-12) 改為 react 版本 & 第三方元件使用 MUI
// @connect        ani.gamer.com.tw
// @grant          GM_xmlhttpRequest
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
    function _iterableToArrayLimit(r, l) {
        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null != t) {
            var e, n, i, u, a = [], f = !0, o = !1;
            try {
                if (i = (t = t.call(r)).next, 0 === l) {
                    if (Object(t) !== t) return;
                    f = !1;
                } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
            } catch (r) {
                o = !0, n = r;
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
    function _regeneratorRuntime() {
        _regeneratorRuntime = function() {
            return e;
        };
        var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
            t[e] = r.value;
        }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
        function define(t, e, r) {
            return Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), t[e];
        }
        try {
            define({}, "");
        } catch (t) {
            define = function(t, e, r) {
                return t[e] = r;
            };
        }
        function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []);
            return o(a, "_invoke", {
                value: makeInvokeMethod(t, r, c)
            }), a;
        }
        function tryCatch(t, e, r) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, r)
                };
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                };
            }
        }
        e.wrap = wrap;
        var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var p = {};
        define(p, a, (function() {
            return this;
        }));
        var d = Object.getPrototypeOf, v = d && d(d(values([])));
        v && v !== r && n.call(v, a) && (p = v);
        var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
        function defineIteratorMethods(t) {
            [ "next", "throw", "return" ].forEach((function(e) {
                define(t, e, (function(t) {
                    return this._invoke(e, t);
                }));
            }));
        }
        function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
                var c = tryCatch(t[r], t, o);
                if ("throw" !== c.type) {
                    var u = c.arg, h = u.value;
                    return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then((function(t) {
                        invoke("next", t, i, a);
                    }), (function(t) {
                        invoke("throw", t, i, a);
                    })) : e.resolve(h).then((function(t) {
                        u.value = t, i(u);
                    }), (function(t) {
                        return invoke("throw", t, i, a);
                    }));
                }
                a(c.arg);
            }
            var r;
            o(this, "_invoke", {
                value: function(t, n) {
                    function callInvokeWithMethodAndArg() {
                        return new e((function(e, r) {
                            invoke(t, n, e, r);
                        }));
                    }
                    return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
                }
            });
        }
        function makeInvokeMethod(e, r, n) {
            var o = h;
            return function(i, a) {
                if (o === f) throw new Error("Generator is already running");
                if (o === s) {
                    if ("throw" === i) throw a;
                    return {
                        value: t,
                        done: !0
                    };
                }
                for (n.method = i, n.arg = a; ;) {
                    var c = n.delegate;
                    if (c) {
                        var u = maybeInvokeDelegate(c, n);
                        if (u) {
                            if (u === y) continue;
                            return u;
                        }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                        if (o === h) throw o = s, n.arg;
                        n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    o = f;
                    var p = tryCatch(e, r, n);
                    if ("normal" === p.type) {
                        if (o = n.done ? s : l, p.arg === y) continue;
                        return {
                            value: p.arg,
                            done: n.done
                        };
                    }
                    "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
                }
            };
        }
        function maybeInvokeDelegate(e, r) {
            var n = r.method, o = e.iterator[n];
            if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", 
            r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", 
            r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, 
            y;
            var a = i.arg;
            return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", 
            r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), 
            r.delegate = null, y);
        }
        function pushTryEntry(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), 
            this.tryEntries.push(e);
        }
        function resetTryEntry(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e;
        }
        function Context(t) {
            this.tryEntries = [ {
                tryLoc: "root"
            } ], t.forEach(pushTryEntry, this), this.reset(!0);
        }
        function values(e) {
            if (e || "" === e) {
                var r = e[a];
                if (r) return r.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1, i = function next() {
                        for (;++o < e.length; ) if (n.call(e, o)) return next.value = e[o], next.done = !1, 
                        next;
                        return next.value = t, next.done = !0, next;
                    };
                    return i.next = i;
                }
            }
            throw new TypeError(typeof e + " is not iterable");
        }
        return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
            value: GeneratorFunctionPrototype,
            configurable: !0
        }), o(GeneratorFunctionPrototype, "constructor", {
            value: GeneratorFunction,
            configurable: !0
        }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), 
        e.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
        }, e.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, 
            define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
        }, e.awrap = function(t) {
            return {
                __await: t
            };
        }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, (function() {
            return this;
        })), e.AsyncIterator = AsyncIterator, e.async = function(t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new AsyncIterator(wrap(t, r, n, o), i);
            return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                return t.done ? t.value : a.next();
            }));
        }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, (function() {
            return this;
        })), define(g, "toString", (function() {
            return "[object Generator]";
        })), e.keys = function(t) {
            var e = Object(t), r = [];
            for (var n in e) r.push(n);
            return r.reverse(), function next() {
                for (;r.length; ) {
                    var t = r.pop();
                    if (t in e) return next.value = t, next.done = !1, next;
                }
                return next.done = !0, next;
            };
        }, e.values = values, Context.prototype = {
            constructor: Context,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, 
                this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
            },
            dispatchException: function(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                    return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), 
                    !!o;
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var i = this.tryEntries[o], a = i.completion;
                    if ("root" === i.tryLoc) return handle("end");
                    if (i.tryLoc <= this.prev) {
                        var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                        if (c && u) {
                            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                        } else if (c) {
                            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                        } else {
                            if (!u) throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var o = this.tryEntries[r];
                    if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break;
                    }
                }
                i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, 
                y) : this.complete(a);
            },
            complete: function(t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
                this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), 
                y;
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), 
                    y;
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            resetTryEntry(r);
                        }
                        return o;
                    }
                }
                throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, r, n) {
                return this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n
                }, "next" === this.method && (this.arg = t), y;
            }
        }, e;
    }
    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
    }
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P ? value : new P((function(resolve) {
                resolve(value);
            }));
        }
        return new (P || (P = Promise))((function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        }));
    }
    typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    function getDefaultExportFromCjs(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
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
                return !1;
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
        H.isPureReactComponent = !0;
        var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = {
            current: null
        }, L = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
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
            var h = !1;
            if (null === a) h = !0; else switch (k) {
              case "string":
              case "number":
                h = !0;
                break;

              case "object":
                switch (a.$$typeof) {
                  case l:
                  case n:
                    h = !0;
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
        react_production_min.unstable_act = function() {
            throw Error("act(...) is not supported in production builds of React.");
        };
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
        react_production_min.version = "18.2.0";
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
    var reactDom = {
        exports: {}
    };
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
            var r = [], t = [], u = 1, v = null, y = 3, z = !1, A = !1, B = !1, D = "function" === typeof setTimeout ? setTimeout : null, E = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
            "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            function G(a) {
                for (var b = h(t); null !== b; ) {
                    if (null === b.callback) k(t); else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, 
                    f(r, b); else break;
                    b = h(t);
                }
            }
            function H(a) {
                B = !1;
                G(a);
                if (!A) if (null !== h(r)) A = !0, I(J); else {
                    var b = h(t);
                    null !== b && K(H, b.startTime - a);
                }
            }
            function J(a, b) {
                A = !1;
                B && (B = !1, E(L), L = -1);
                z = !0;
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
                    v = null, y = c, z = !1;
                }
            }
            var N = !1, O = null, L = -1, P = 5, Q = -1;
            function M() {
                return exports.unstable_now() - Q < P ? !1 : !0;
            }
            function R() {
                if (null !== O) {
                    var a = exports.unstable_now();
                    Q = a;
                    var b = !0;
                    try {
                        b = O(!0, a);
                    } finally {
                        b ? S() : (N = !1, O = null);
                    }
                } else N = !1;
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
                N || (N = !0, S());
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
                A || z || (A = !0, I(J));
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
                c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, 
                K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
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
    var reactDom_production_min = {};
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
            if (ja.call(ma, a)) return !0;
            if (ja.call(la, a)) return !1;
            if (ka.test(a)) return ma[a] = !0;
            la[a] = !0;
            return !1;
        }
        function pa(a, b, c, d) {
            if (null !== c && 0 === c.type) return !1;
            switch (typeof b) {
              case "function":
              case "symbol":
                return !0;

              case "boolean":
                if (d) return !1;
                if (null !== c) return !c.acceptsBooleans;
                a = a.toLowerCase().slice(0, 5);
                return "data-" !== a && "aria-" !== a;

              default:
                return !1;
            }
        }
        function qa(a, b, c, d) {
            if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
            if (d) return !1;
            if (null !== c) switch (c.type) {
              case 3:
                return !b;

              case 4:
                return !1 === b;

              case 5:
                return isNaN(b);

              case 6:
                return isNaN(b) || 1 > b;
            }
            return !1;
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
            z[a] = new v(a, 0, !1, a, null, !1, !1);
        }));
        [ [ "acceptCharset", "accept-charset" ], [ "className", "class" ], [ "htmlFor", "for" ], [ "httpEquiv", "http-equiv" ] ].forEach((function(a) {
            var b = a[0];
            z[b] = new v(b, 1, !1, a[1], null, !1, !1);
        }));
        [ "contentEditable", "draggable", "spellCheck", "value" ].forEach((function(a) {
            z[a] = new v(a, 2, !1, a.toLowerCase(), null, !1, !1);
        }));
        [ "autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha" ].forEach((function(a) {
            z[a] = new v(a, 2, !1, a, null, !1, !1);
        }));
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(a) {
            z[a] = new v(a, 3, !1, a.toLowerCase(), null, !1, !1);
        }));
        [ "checked", "multiple", "muted", "selected" ].forEach((function(a) {
            z[a] = new v(a, 3, !0, a, null, !1, !1);
        }));
        [ "capture", "download" ].forEach((function(a) {
            z[a] = new v(a, 4, !1, a, null, !1, !1);
        }));
        [ "cols", "rows", "size", "span" ].forEach((function(a) {
            z[a] = new v(a, 6, !1, a, null, !1, !1);
        }));
        [ "rowSpan", "start" ].forEach((function(a) {
            z[a] = new v(a, 5, !1, a.toLowerCase(), null, !1, !1);
        }));
        var ra = /[\-:]([a-z])/g;
        function sa(a) {
            return a[1].toUpperCase();
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(a) {
            var b = a.replace(ra, sa);
            z[b] = new v(b, 1, !1, a, null, !1, !1);
        }));
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(a) {
            var b = a.replace(ra, sa);
            z[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
        }));
        [ "xml:base", "xml:lang", "xml:space" ].forEach((function(a) {
            var b = a.replace(ra, sa);
            z[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
        }));
        [ "tabIndex", "crossOrigin" ].forEach((function(a) {
            z[a] = new v(a, 1, !1, a.toLowerCase(), null, !1, !1);
        }));
        z.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
        [ "src", "href", "action", "formAction" ].forEach((function(a) {
            z[a] = new v(a, 1, !1, a.toLowerCase(), null, !0, !0);
        }));
        function ta(a, b, c, d) {
            var e = z.hasOwnProperty(b) ? z[b] : null;
            if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), 
            d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, 
            d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, 
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
        var Na = !1;
        function Oa(a, b) {
            if (!a || Na) return "";
            Na = !0;
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
                Na = !1, Error.prepareStackTrace = c;
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
                return a = Oa(a.type, !1), a;

              case 11:
                return a = Oa(a.type.render, !1), a;

              case 1:
                return a = Oa(a.type, !0), a;

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
                    configurable: !0,
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
            if (!a) return !1;
            var b = a._valueTracker;
            if (!b) return !0;
            var c = b.getValue();
            var d = "";
            a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
            a = d;
            return a !== c ? (b.setValue(a), !0) : !1;
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
            null != b && ta(a, "checked", b, !1);
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
                for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
                for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), 
                e && d && (a[c].defaultSelected = !0);
            } else {
                c = "" + Sa(c);
                b = null;
                for (e = 0; e < a.length; e++) {
                    if (a[e].value === c) {
                        a[e].selected = !0;
                        d && (a[e].defaultSelected = !0);
                        return;
                    }
                    null !== b || a[e].disabled || (b = a[e]);
                }
                null !== b && (b.selected = !0);
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
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
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
            menuitem: !0
        }, {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
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
                return !1;

              default:
                return !0;
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
        var Ib = !1;
        function Jb(a, b, c) {
            if (Ib) return a(b, c);
            Ib = !0;
            try {
                return Gb(a, b, c);
            } finally {
                if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
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
                a = !1;
            }
            if (a) return null;
            if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
            return c;
        }
        var Lb = !1;
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
            Lb = !1;
        }
        function Nb(a, b, c, d, e, f, g, h, k) {
            var l = Array.prototype.slice.call(arguments, 3);
            try {
                b.apply(c, l);
            } catch (m) {
                this.onError(m);
            }
        }
        var Ob = !1, Pb = null, Qb = !1, Rb = null, Sb = {
            onError: function(a) {
                Ob = !0;
                Pb = a;
            }
        };
        function Tb(a, b, c, d, e, f, g, h, k) {
            Ob = !1;
            Pb = null;
            Nb.apply(Sb, arguments);
        }
        function Ub(a, b, c, d, e, f, g, h, k) {
            Tb.apply(this, arguments);
            if (Ob) {
                if (Ob) {
                    var l = Pb;
                    Ob = !1;
                    Pb = null;
                } else throw Error(p(198));
                Qb || (Qb = !0, Rb = l);
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
                    for (var g = !1, h = e.child; h; ) {
                        if (h === c) {
                            g = !0;
                            c = e;
                            d = f;
                            break;
                        }
                        if (h === d) {
                            g = !0;
                            d = e;
                            c = f;
                            break;
                        }
                        h = h.sibling;
                    }
                    if (!g) {
                        for (h = f.child; h; ) {
                            if (h === c) {
                                g = !0;
                                c = f;
                                d = e;
                                break;
                            }
                            if (h === d) {
                                g = !0;
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
        var Ec, Fc, Gc, Hc, Ic, Jc = !1, Kc = [], Lc = null, Mc = null, Nc = null, Oc = new Map, Pc = new Map, Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
                return Lc = Tc(Lc, a, b, c, d, e), !0;

              case "dragenter":
                return Mc = Tc(Mc, a, b, c, d, e), !0;

              case "mouseover":
                return Nc = Tc(Nc, a, b, c, d, e), !0;

              case "pointerover":
                var f = e.pointerId;
                Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
                return !0;

              case "gotpointercapture":
                return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), !0;
            }
            return !1;
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
            if (null !== a.blockedOn) return !1;
            for (var b = a.targetContainers; 0 < b.length; ) {
                var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
                if (null === c) {
                    c = a.nativeEvent;
                    var d = new c.constructor(c.type, c);
                    wb = d;
                    c.target.dispatchEvent(d);
                    wb = null;
                } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
                b.shift();
            }
            return !0;
        }
        function Zc(a, b, c) {
            Xc(a) && c.delete(b);
        }
        function $c() {
            Jc = !1;
            null !== Lc && Xc(Lc) && (Lc = null);
            null !== Mc && Xc(Mc) && (Mc = null);
            null !== Nc && Xc(Nc) && (Nc = null);
            Oc.forEach(Zc);
            Pc.forEach(Zc);
        }
        function ad(a, b) {
            a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
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
        var cd = ua.ReactCurrentBatchConfig, dd = !0;
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
            return !0;
        }
        function qd() {
            return !1;
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
                this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
                this.isPropagationStopped = qd;
                return this;
            }
            A(b.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var a = this.nativeEvent;
                    a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), 
                    this.isDefaultPrevented = pd);
                },
                stopPropagation: function() {
                    var a = this.nativeEvent;
                    a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), 
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
            return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
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
        var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = !1;
        function ge(a, b) {
            switch (a) {
              case "keyup":
                return -1 !== $d.indexOf(b.keyCode);

              case "keydown":
                return 229 !== b.keyCode;

              case "keypress":
              case "mousedown":
              case "focusout":
                return !0;

              default:
                return !1;
            }
        }
        function he(a) {
            a = a.detail;
            return "object" === typeof a && "data" in a ? a.data : null;
        }
        var ie = !1;
        function je(a, b) {
            switch (a) {
              case "compositionend":
                return he(b);

              case "keypress":
                if (32 !== b.which) return null;
                fe = !0;
                return ee;

              case "textInput":
                return a = b.data, a === ee && fe ? null : a;

              default:
                return null;
            }
        }
        function ke(a, b) {
            if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, 
            ie = !1, a) : null;
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
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };
        function me(a) {
            var b = a && a.nodeName && a.nodeName.toLowerCase();
            return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
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
        var we = !1;
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
            } else xe = !1;
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
            if (He(a, b)) return !0;
            if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
            var c = Object.keys(a), d = Object.keys(b);
            if (c.length !== d.length) return !1;
            for (d = 0; d < c.length; d++) {
                var e = c[d];
                if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
            }
            return !0;
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
            return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
        }
        function Me() {
            for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
                try {
                    var c = "string" === typeof b.contentWindow.location.href;
                } catch (d) {
                    c = !1;
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
        var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = !1;
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
            if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
        }
        function D(a, b) {
            var c = b[of];
            void 0 === c && (c = b[of] = new Set);
            var d = a + "__bubble";
            c.has(d) || (pf(b, a, 2, !1), c.add(d));
        }
        function qf(a, b, c) {
            var d = 0;
            b && (d |= 4);
            pf(c, a, d, b);
        }
        var rf = "_reactListening" + Math.random().toString(36).slice(2);
        function sf(a) {
            if (!a[rf]) {
                a[rf] = !0;
                da.forEach((function(b) {
                    "selectionchange" !== b && (mf.has(b) || qf(b, !1, a), qf(b, !0, a));
                }));
                var b = 9 === a.nodeType ? a : a.ownerDocument;
                null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
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
            !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
            d ? void 0 !== e ? a.addEventListener(b, c, {
                capture: !0,
                passive: e
            }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
                passive: e
            }) : a.addEventListener(b, c, !1);
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
                                null !== k && wf(g, h, k, t, !1);
                                null !== n && null !== J && wf(g, J, n, t, !0);
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
                        Te = !0;
                        break;

                      case "contextmenu":
                      case "mouseup":
                      case "dragend":
                        Te = !1;
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
                    ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), xa = oe(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), 
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
        var Vf = {}, H = Uf(Vf), Wf = Uf(!1), Xf = Vf;
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
            return !0;
        }
        function dg(a, b, c) {
            var d = a.stateNode;
            if (!d) throw Error(p(169));
            c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), 
            G(H, a)) : E(Wf);
            G(Wf, c);
        }
        var eg = null, fg = !1, gg = !1;
        function hg(a) {
            null === eg ? eg = [ a ] : eg.push(a);
        }
        function ig(a) {
            fg = !0;
            hg(a);
        }
        function jg() {
            if (!gg && null !== eg) {
                gg = !0;
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
                    C = b, gg = !1;
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
        var xg = null, yg = null, I = !1, zg = null;
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
                return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;

              case 6:
                return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, 
                xg = a, yg = null, !0) : !1;

              case 13:
                return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
                    id: rg,
                    overflow: sg
                } : null, a.memoizedState = {
                    dehydrated: b,
                    treeContext: c,
                    retryLane: 1073741824
                }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, 
                yg = null, !0) : !1;

              default:
                return !1;
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
                        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = !1, xg = a);
                    }
                } else {
                    if (Dg(a)) throw Error(p(418));
                    a.flags = a.flags & -4097 | 2;
                    I = !1;
                    xg = a;
                }
            }
        }
        function Fg(a) {
            for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
            xg = a;
        }
        function Gg(a) {
            if (a !== xg) return !1;
            if (!I) return Fg(a), I = !0, !1;
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
            return !0;
        }
        function Hg() {
            for (var a = yg; a; ) a = Lf(a.nextSibling);
        }
        function Ig() {
            yg = xg = null;
            I = !1;
        }
        function Jg(a) {
            null === zg ? zg = [ a ] : zg.push(a);
        }
        var Kg = ua.ReactCurrentBatchConfig;
        function Lg(a, b) {
            if (a && a.defaultProps) {
                b = A({}, b);
                a = a.defaultProps;
                for (var c in a) void 0 === b[c] && (b[c] = a[c]);
                return b;
            }
            return b;
        }
        var Mg = Uf(null), Ng = null, Og = null, Pg = null;
        function Qg() {
            Pg = Og = Ng = null;
        }
        function Rg(a) {
            var b = Mg.current;
            E(Mg);
            a._currentValue = b;
        }
        function Sg(a, b, c) {
            for (;null !== a; ) {
                var d = a.alternate;
                (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
                if (a === c) break;
                a = a.return;
            }
        }
        function Tg(a, b) {
            Ng = a;
            Pg = Og = null;
            a = a.dependencies;
            null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = !0), a.firstContext = null);
        }
        function Vg(a) {
            var b = a._currentValue;
            if (Pg !== a) if (a = {
                context: a,
                memoizedValue: b,
                next: null
            }, null === Og) {
                if (null === Ng) throw Error(p(308));
                Og = a;
                Ng.dependencies = {
                    lanes: 0,
                    firstContext: a
                };
            } else Og = Og.next = a;
            return b;
        }
        var Wg = null;
        function Xg(a) {
            null === Wg ? Wg = [ a ] : Wg.push(a);
        }
        function Yg(a, b, c, d) {
            var e = b.interleaved;
            null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
            b.interleaved = c;
            return Zg(a, d);
        }
        function Zg(a, b) {
            a.lanes |= b;
            var c = a.alternate;
            null !== c && (c.lanes |= b);
            c = a;
            for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), 
            c = a, a = a.return;
            return 3 === c.tag ? c.stateNode : null;
        }
        var $g = !1;
        function ah(a) {
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
        function bh(a, b) {
            a = a.updateQueue;
            b.updateQueue === a && (b.updateQueue = {
                baseState: a.baseState,
                firstBaseUpdate: a.firstBaseUpdate,
                lastBaseUpdate: a.lastBaseUpdate,
                shared: a.shared,
                effects: a.effects
            });
        }
        function ch(a, b) {
            return {
                eventTime: a,
                lane: b,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            };
        }
        function dh(a, b, c) {
            var d = a.updateQueue;
            if (null === d) return null;
            d = d.shared;
            if (0 !== (K & 2)) {
                var e = d.pending;
                null === e ? b.next = b : (b.next = e.next, e.next = b);
                d.pending = b;
                return Zg(a, c);
            }
            e = d.interleaved;
            null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
            d.interleaved = b;
            return Zg(a, c);
        }
        function eh(a, b, c) {
            b = b.updateQueue;
            if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
                var d = b.lanes;
                d &= a.pendingLanes;
                c |= d;
                b.lanes = c;
                Cc(a, c);
            }
        }
        function fh(a, b) {
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
        function gh(a, b, c, d) {
            var e = a.updateQueue;
            $g = !1;
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
                                $g = !0;
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
                hh |= g;
                a.lanes = g;
                a.memoizedState = q;
            }
        }
        function ih(a, b, c) {
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
        var jh = (new aa.Component).refs;
        function kh(a, b, c, d) {
            b = a.memoizedState;
            c = c(d, b);
            c = null === c || void 0 === c ? b : A({}, b, c);
            a.memoizedState = c;
            0 === a.lanes && (a.updateQueue.baseState = c);
        }
        var nh = {
            isMounted: function(a) {
                return (a = a._reactInternals) ? Vb(a) === a : !1;
            },
            enqueueSetState: function(a, b, c) {
                a = a._reactInternals;
                var d = L(), e = lh(a), f = ch(d, e);
                f.payload = b;
                void 0 !== c && null !== c && (f.callback = c);
                b = dh(a, f, e);
                null !== b && (mh(b, a, e, d), eh(b, a, e));
            },
            enqueueReplaceState: function(a, b, c) {
                a = a._reactInternals;
                var d = L(), e = lh(a), f = ch(d, e);
                f.tag = 1;
                f.payload = b;
                void 0 !== c && null !== c && (f.callback = c);
                b = dh(a, f, e);
                null !== b && (mh(b, a, e, d), eh(b, a, e));
            },
            enqueueForceUpdate: function(a, b) {
                a = a._reactInternals;
                var c = L(), d = lh(a), e = ch(c, d);
                e.tag = 2;
                void 0 !== b && null !== b && (e.callback = b);
                b = dh(a, e, d);
                null !== b && (mh(b, a, d, c), eh(b, a, d));
            }
        };
        function oh(a, b, c, d, e, f, g) {
            a = a.stateNode;
            return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : !0;
        }
        function ph(a, b, c) {
            var d = !1, e = Vf;
            var f = b.contextType;
            "object" === typeof f && null !== f ? f = Vg(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, 
            f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
            b = new b(c, f);
            a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
            b.updater = nh;
            a.stateNode = b;
            b._reactInternals = a;
            d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
            return b;
        }
        function qh(a, b, c, d) {
            a = b.state;
            "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
            "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
            b.state !== a && nh.enqueueReplaceState(b, b.state, null);
        }
        function rh(a, b, c, d) {
            var e = a.stateNode;
            e.props = c;
            e.state = a.memoizedState;
            e.refs = jh;
            ah(a);
            var f = b.contextType;
            "object" === typeof f && null !== f ? e.context = Vg(f) : (f = Zf(b) ? Xf : H.current, 
            e.context = Yf(a, f));
            e.state = a.memoizedState;
            f = b.getDerivedStateFromProps;
            "function" === typeof f && (kh(a, b, f, c), e.state = a.memoizedState);
            "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, 
            "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), 
            b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
            "function" === typeof e.componentDidMount && (a.flags |= 4194308);
        }
        function sh(a, b, c) {
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
                        b === jh && (b = e.refs = {});
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
        function th(a, b) {
            a = Object.prototype.toString.call(b);
            throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
        }
        function uh(a) {
            var b = a._init;
            return b(a._payload);
        }
        function vh(a) {
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
                a = wh(a, b);
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
                if (null === b || 6 !== b.tag) return b = xh(c, a.mode, d), b.return = a, b;
                b = e(b, c);
                b.return = a;
                return b;
            }
            function k(a, b, c, d) {
                var f = c.type;
                if (f === ya) return m(a, b, c.props.children, d, c.key);
                if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && uh(f) === b.type)) return d = e(b, c.props), 
                d.ref = sh(a, b, c), d.return = a, d;
                d = yh(c.type, c.key, c.props, null, a.mode, d);
                d.ref = sh(a, b, c);
                d.return = a;
                return d;
            }
            function l(a, b, c, d) {
                if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = zh(c, a.mode, d), 
                b.return = a, b;
                b = e(b, c.children || []);
                b.return = a;
                return b;
            }
            function m(a, b, c, d, f) {
                if (null === b || 7 !== b.tag) return b = Ah(c, a.mode, d, f), b.return = a, b;
                b = e(b, c);
                b.return = a;
                return b;
            }
            function q(a, b, c) {
                if ("string" === typeof b && "" !== b || "number" === typeof b) return b = xh("" + b, a.mode, c), 
                b.return = a, b;
                if ("object" === typeof b && null !== b) {
                    switch (b.$$typeof) {
                      case va:
                        return c = yh(b.type, b.key, b.props, null, a.mode, c), c.ref = sh(a, null, b), 
                        c.return = a, c;

                      case wa:
                        return b = zh(b, a.mode, c), b.return = a, b;

                      case Ha:
                        var d = b._init;
                        return q(a, d(b._payload), c);
                    }
                    if (eb(b) || Ka(b)) return b = Ah(b, a.mode, c, null), b.return = a, b;
                    th(a, b);
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
                    th(a, c);
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
                    th(b, d);
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
                                    } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && uh(k) === l.type) {
                                        c(a, l.sibling);
                                        d = e(l, f.props);
                                        d.ref = sh(a, l, f);
                                        d.return = a;
                                        a = d;
                                        break a;
                                    }
                                    c(a, l);
                                    break;
                                } else b(a, l);
                                l = l.sibling;
                            }
                            f.type === ya ? (d = Ah(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = yh(f.type, f.key, f.props, null, a.mode, h), 
                            h.ref = sh(a, d, f), h.return = a, a = h);
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
                            d = zh(f, a.mode, h);
                            d.return = a;
                            a = d;
                        }
                        return g(a);

                      case Ha:
                        return l = f._init, J(a, d, l(f._payload), h);
                    }
                    if (eb(f)) return n(a, d, f, h);
                    if (Ka(f)) return t(a, d, f, h);
                    th(a, f);
                }
                return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, 
                null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), 
                d = xh(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
            }
            return J;
        }
        var Bh = vh(!0), Ch = vh(!1), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
        function Hh(a) {
            if (a === Dh) throw Error(p(174));
            return a;
        }
        function Ih(a, b) {
            G(Gh, b);
            G(Fh, a);
            G(Eh, Dh);
            a = b.nodeType;
            switch (a) {
              case 9:
              case 11:
                b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
                break;

              default:
                a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
            }
            E(Eh);
            G(Eh, b);
        }
        function Jh() {
            E(Eh);
            E(Fh);
            E(Gh);
        }
        function Kh(a) {
            Hh(Gh.current);
            var b = Hh(Eh.current);
            var c = lb(b, a.type);
            b !== c && (G(Fh, a), G(Eh, c));
        }
        function Lh(a) {
            Fh.current === a && (E(Eh), E(Fh));
        }
        var M = Uf(0);
        function Mh(a) {
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
        var Nh = [];
        function Oh() {
            for (var a = 0; a < Nh.length; a++) Nh[a]._workInProgressVersionPrimary = null;
            Nh.length = 0;
        }
        var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = !1, Th = !1, Uh = 0, Vh = 0;
        function Q() {
            throw Error(p(321));
        }
        function Wh(a, b) {
            if (null === b) return !1;
            for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;
            return !0;
        }
        function Xh(a, b, c, d, e, f) {
            Rh = f;
            N = b;
            b.memoizedState = null;
            b.updateQueue = null;
            b.lanes = 0;
            Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
            a = c(d, e);
            if (Th) {
                f = 0;
                do {
                    Th = !1;
                    Uh = 0;
                    if (25 <= f) throw Error(p(301));
                    f += 1;
                    P = O = null;
                    b.updateQueue = null;
                    Ph.current = $h;
                    a = c(d, e);
                } while (Th);
            }
            Ph.current = ai;
            b = null !== O && null !== O.next;
            Rh = 0;
            P = O = N = null;
            Sh = !1;
            if (b) throw Error(p(300));
            return a;
        }
        function bi() {
            var a = 0 !== Uh;
            Uh = 0;
            return a;
        }
        function ci() {
            var a = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            null === P ? N.memoizedState = P = a : P = P.next = a;
            return P;
        }
        function di() {
            if (null === O) {
                var a = N.alternate;
                a = null !== a ? a.memoizedState : null;
            } else a = O.next;
            var b = null === P ? N.memoizedState : P.next;
            if (null !== b) P = b, O = a; else {
                if (null === a) throw Error(p(310));
                O = a;
                a = {
                    memoizedState: O.memoizedState,
                    baseState: O.baseState,
                    baseQueue: O.baseQueue,
                    queue: O.queue,
                    next: null
                };
                null === P ? N.memoizedState = P = a : P = P.next = a;
            }
            return P;
        }
        function ei(a, b) {
            return "function" === typeof b ? b(a) : b;
        }
        function fi(a) {
            var b = di(), c = b.queue;
            if (null === c) throw Error(p(311));
            c.lastRenderedReducer = a;
            var d = O, e = d.baseQueue, f = c.pending;
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
                    if ((Rh & m) === m) null !== k && (k = k.next = {
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
                        N.lanes |= m;
                        hh |= m;
                    }
                    l = l.next;
                } while (null !== l && l !== f);
                null === k ? g = d : k.next = h;
                He(d, b.memoizedState) || (Ug = !0);
                b.memoizedState = d;
                b.baseState = g;
                b.baseQueue = k;
                c.lastRenderedState = d;
            }
            a = c.interleaved;
            if (null !== a) {
                e = a;
                do {
                    f = e.lane, N.lanes |= f, hh |= f, e = e.next;
                } while (e !== a);
            } else null === e && (c.lanes = 0);
            return [ b.memoizedState, c.dispatch ];
        }
        function gi(a) {
            var b = di(), c = b.queue;
            if (null === c) throw Error(p(311));
            c.lastRenderedReducer = a;
            var d = c.dispatch, e = c.pending, f = b.memoizedState;
            if (null !== e) {
                c.pending = null;
                var g = e = e.next;
                do {
                    f = a(f, g.action), g = g.next;
                } while (g !== e);
                He(f, b.memoizedState) || (Ug = !0);
                b.memoizedState = f;
                null === b.baseQueue && (b.baseState = f);
                c.lastRenderedState = f;
            }
            return [ f, d ];
        }
        function hi() {}
        function ii(a, b) {
            var c = N, d = di(), e = b(), f = !He(d.memoizedState, e);
            f && (d.memoizedState = e, Ug = !0);
            d = d.queue;
            ji(ki.bind(null, c, d, a), [ a ]);
            if (d.getSnapshot !== b || f || null !== P && P.memoizedState.tag & 1) {
                c.flags |= 2048;
                li(9, mi.bind(null, c, d, e, b), void 0, null);
                if (null === R) throw Error(p(349));
                0 !== (Rh & 30) || ni(c, b, e);
            }
            return e;
        }
        function ni(a, b, c) {
            a.flags |= 16384;
            a = {
                getSnapshot: b,
                value: c
            };
            b = N.updateQueue;
            null === b ? (b = {
                lastEffect: null,
                stores: null
            }, N.updateQueue = b, b.stores = [ a ]) : (c = b.stores, null === c ? b.stores = [ a ] : c.push(a));
        }
        function mi(a, b, c, d) {
            b.value = c;
            b.getSnapshot = d;
            oi(b) && pi(a);
        }
        function ki(a, b, c) {
            return c((function() {
                oi(b) && pi(a);
            }));
        }
        function oi(a) {
            var b = a.getSnapshot;
            a = a.value;
            try {
                var c = b();
                return !He(a, c);
            } catch (d) {
                return !0;
            }
        }
        function pi(a) {
            var b = Zg(a, 1);
            null !== b && mh(b, a, 1, -1);
        }
        function qi(a) {
            var b = ci();
            "function" === typeof a && (a = a());
            b.memoizedState = b.baseState = a;
            a = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ei,
                lastRenderedState: a
            };
            b.queue = a;
            a = a.dispatch = ri.bind(null, N, a);
            return [ b.memoizedState, a ];
        }
        function li(a, b, c, d) {
            a = {
                tag: a,
                create: b,
                destroy: c,
                deps: d,
                next: null
            };
            b = N.updateQueue;
            null === b ? (b = {
                lastEffect: null,
                stores: null
            }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, 
            c.next = a, a.next = d, b.lastEffect = a));
            return a;
        }
        function si() {
            return di().memoizedState;
        }
        function ti(a, b, c, d) {
            var e = ci();
            N.flags |= a;
            e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
        }
        function ui(a, b, c, d) {
            var e = di();
            d = void 0 === d ? null : d;
            var f = void 0;
            if (null !== O) {
                var g = O.memoizedState;
                f = g.destroy;
                if (null !== d && Wh(d, g.deps)) {
                    e.memoizedState = li(b, c, f, d);
                    return;
                }
            }
            N.flags |= a;
            e.memoizedState = li(1 | b, c, f, d);
        }
        function vi(a, b) {
            return ti(8390656, 8, a, b);
        }
        function ji(a, b) {
            return ui(2048, 8, a, b);
        }
        function wi(a, b) {
            return ui(4, 2, a, b);
        }
        function xi(a, b) {
            return ui(4, 4, a, b);
        }
        function yi(a, b) {
            if ("function" === typeof b) return a = a(), b(a), function() {
                b(null);
            };
            if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
                b.current = null;
            };
        }
        function zi(a, b, c) {
            c = null !== c && void 0 !== c ? c.concat([ a ]) : null;
            return ui(4, 4, yi.bind(null, b, a), c);
        }
        function Ai() {}
        function Bi(a, b) {
            var c = di();
            b = void 0 === b ? null : b;
            var d = c.memoizedState;
            if (null !== d && null !== b && Wh(b, d[1])) return d[0];
            c.memoizedState = [ a, b ];
            return a;
        }
        function Ci(a, b) {
            var c = di();
            b = void 0 === b ? null : b;
            var d = c.memoizedState;
            if (null !== d && null !== b && Wh(b, d[1])) return d[0];
            a = a();
            c.memoizedState = [ a, b ];
            return a;
        }
        function Di(a, b, c) {
            if (0 === (Rh & 21)) return a.baseState && (a.baseState = !1, Ug = !0), a.memoizedState = c;
            He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = !0);
            return b;
        }
        function Ei(a, b) {
            var c = C;
            C = 0 !== c && 4 > c ? c : 4;
            a(!0);
            var d = Qh.transition;
            Qh.transition = {};
            try {
                a(!1), b();
            } finally {
                C = c, Qh.transition = d;
            }
        }
        function Fi() {
            return di().memoizedState;
        }
        function Gi(a, b, c) {
            var d = lh(a);
            c = {
                lane: d,
                action: c,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (Hi(a)) Ii(b, c); else if (c = Yg(a, b, c, d), null !== c) {
                var e = L();
                mh(c, a, d, e);
                Ji(c, b, d);
            }
        }
        function ri(a, b, c) {
            var d = lh(a), e = {
                lane: d,
                action: c,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (Hi(a)) Ii(b, e); else {
                var f = a.alternate;
                if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, 
                null !== f)) try {
                    var g = b.lastRenderedState, h = f(g, c);
                    e.hasEagerState = !0;
                    e.eagerState = h;
                    if (He(h, g)) {
                        var k = b.interleaved;
                        null === k ? (e.next = e, Xg(b)) : (e.next = k.next, k.next = e);
                        b.interleaved = e;
                        return;
                    }
                } catch (l) {} finally {}
                c = Yg(a, b, e, d);
                null !== c && (e = L(), mh(c, a, d, e), Ji(c, b, d));
            }
        }
        function Hi(a) {
            var b = a.alternate;
            return a === N || null !== b && b === N;
        }
        function Ii(a, b) {
            Th = Sh = !0;
            var c = a.pending;
            null === c ? b.next = b : (b.next = c.next, c.next = b);
            a.pending = b;
        }
        function Ji(a, b, c) {
            if (0 !== (c & 4194240)) {
                var d = b.lanes;
                d &= a.pendingLanes;
                c |= d;
                b.lanes = c;
                Cc(a, c);
            }
        }
        var ai = {
            readContext: Vg,
            useCallback: Q,
            useContext: Q,
            useEffect: Q,
            useImperativeHandle: Q,
            useInsertionEffect: Q,
            useLayoutEffect: Q,
            useMemo: Q,
            useReducer: Q,
            useRef: Q,
            useState: Q,
            useDebugValue: Q,
            useDeferredValue: Q,
            useTransition: Q,
            useMutableSource: Q,
            useSyncExternalStore: Q,
            useId: Q,
            unstable_isNewReconciler: !1
        }, Yh = {
            readContext: Vg,
            useCallback: function(a, b) {
                ci().memoizedState = [ a, void 0 === b ? null : b ];
                return a;
            },
            useContext: Vg,
            useEffect: vi,
            useImperativeHandle: function(a, b, c) {
                c = null !== c && void 0 !== c ? c.concat([ a ]) : null;
                return ti(4194308, 4, yi.bind(null, b, a), c);
            },
            useLayoutEffect: function(a, b) {
                return ti(4194308, 4, a, b);
            },
            useInsertionEffect: function(a, b) {
                return ti(4, 2, a, b);
            },
            useMemo: function(a, b) {
                var c = ci();
                b = void 0 === b ? null : b;
                a = a();
                c.memoizedState = [ a, b ];
                return a;
            },
            useReducer: function(a, b, c) {
                var d = ci();
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
                a = a.dispatch = Gi.bind(null, N, a);
                return [ d.memoizedState, a ];
            },
            useRef: function(a) {
                var b = ci();
                a = {
                    current: a
                };
                return b.memoizedState = a;
            },
            useState: qi,
            useDebugValue: Ai,
            useDeferredValue: function(a) {
                return ci().memoizedState = a;
            },
            useTransition: function() {
                var a = qi(!1), b = a[0];
                a = Ei.bind(null, a[1]);
                ci().memoizedState = a;
                return [ b, a ];
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(a, b, c) {
                var d = N, e = ci();
                if (I) {
                    if (void 0 === c) throw Error(p(407));
                    c = c();
                } else {
                    c = b();
                    if (null === R) throw Error(p(349));
                    0 !== (Rh & 30) || ni(d, b, c);
                }
                e.memoizedState = c;
                var f = {
                    value: c,
                    getSnapshot: b
                };
                e.queue = f;
                vi(ki.bind(null, d, f, a), [ a ]);
                d.flags |= 2048;
                li(9, mi.bind(null, d, f, c, b), void 0, null);
                return c;
            },
            useId: function() {
                var a = ci(), b = R.identifierPrefix;
                if (I) {
                    var c = sg;
                    var d = rg;
                    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
                    b = ":" + b + "R" + c;
                    c = Uh++;
                    0 < c && (b += "H" + c.toString(32));
                    b += ":";
                } else c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
                return a.memoizedState = b;
            },
            unstable_isNewReconciler: !1
        }, Zh = {
            readContext: Vg,
            useCallback: Bi,
            useContext: Vg,
            useEffect: ji,
            useImperativeHandle: zi,
            useInsertionEffect: wi,
            useLayoutEffect: xi,
            useMemo: Ci,
            useReducer: fi,
            useRef: si,
            useState: function() {
                return fi(ei);
            },
            useDebugValue: Ai,
            useDeferredValue: function(a) {
                var b = di();
                return Di(b, O.memoizedState, a);
            },
            useTransition: function() {
                var a = fi(ei)[0], b = di().memoizedState;
                return [ a, b ];
            },
            useMutableSource: hi,
            useSyncExternalStore: ii,
            useId: Fi,
            unstable_isNewReconciler: !1
        }, $h = {
            readContext: Vg,
            useCallback: Bi,
            useContext: Vg,
            useEffect: ji,
            useImperativeHandle: zi,
            useInsertionEffect: wi,
            useLayoutEffect: xi,
            useMemo: Ci,
            useReducer: gi,
            useRef: si,
            useState: function() {
                return gi(ei);
            },
            useDebugValue: Ai,
            useDeferredValue: function(a) {
                var b = di();
                return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
            },
            useTransition: function() {
                var a = gi(ei)[0], b = di().memoizedState;
                return [ a, b ];
            },
            useMutableSource: hi,
            useSyncExternalStore: ii,
            useId: Fi,
            unstable_isNewReconciler: !1
        };
        function Ki(a, b) {
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
        function Li(a, b, c) {
            return {
                value: a,
                source: null,
                stack: null != c ? c : null,
                digest: null != b ? b : null
            };
        }
        function Mi(a, b) {
            try {
                console.error(b.value);
            } catch (c) {
                setTimeout((function() {
                    throw c;
                }));
            }
        }
        var Ni = "function" === typeof WeakMap ? WeakMap : Map;
        function Oi(a, b, c) {
            c = ch(-1, c);
            c.tag = 3;
            c.payload = {
                element: null
            };
            var d = b.value;
            c.callback = function() {
                Pi || (Pi = !0, Qi = d);
                Mi(a, b);
            };
            return c;
        }
        function Ri(a, b, c) {
            c = ch(-1, c);
            c.tag = 3;
            var d = a.type.getDerivedStateFromError;
            if ("function" === typeof d) {
                var e = b.value;
                c.payload = function() {
                    return d(e);
                };
                c.callback = function() {
                    Mi(a, b);
                };
            }
            var f = a.stateNode;
            null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
                Mi(a, b);
                "function" !== typeof d && (null === Si ? Si = new Set([ this ]) : Si.add(this));
                var c = b.stack;
                this.componentDidCatch(b.value, {
                    componentStack: null !== c ? c : ""
                });
            });
            return c;
        }
        function Ti(a, b, c) {
            var d = a.pingCache;
            if (null === d) {
                d = a.pingCache = new Ni;
                var e = new Set;
                d.set(b, e);
            } else e = d.get(b), void 0 === e && (e = new Set, d.set(b, e));
            e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
        }
        function Vi(a) {
            do {
                var b;
                if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
                if (b) return a;
                a = a.return;
            } while (null !== a);
            return null;
        }
        function Wi(a, b, c, d, e) {
            if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, 
            c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), 
            b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
            a.flags |= 65536;
            a.lanes = e;
            return a;
        }
        var Xi = ua.ReactCurrentOwner, Ug = !1;
        function Yi(a, b, c, d) {
            b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
        }
        function Zi(a, b, c, d, e) {
            c = c.render;
            var f = b.ref;
            Tg(b, e);
            d = Xh(a, b, c, d, f, e);
            c = bi();
            if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, 
            $i(a, b, e);
            I && c && vg(b);
            b.flags |= 1;
            Yi(a, b, d, e);
            return b.child;
        }
        function aj(a, b, c, d, e) {
            if (null === a) {
                var f = c.type;
                if ("function" === typeof f && !bj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, 
                b.type = f, cj(a, b, f, d, e);
                a = yh(c.type, null, d, b, b.mode, e);
                a.ref = b.ref;
                a.return = b;
                return b.child = a;
            }
            f = a.child;
            if (0 === (a.lanes & e)) {
                var g = f.memoizedProps;
                c = c.compare;
                c = null !== c ? c : Ie;
                if (c(g, d) && a.ref === b.ref) return $i(a, b, e);
            }
            b.flags |= 1;
            a = wh(f, d);
            a.ref = b.ref;
            a.return = b;
            return b.child = a;
        }
        function cj(a, b, c, d, e) {
            if (null !== a) {
                var f = a.memoizedProps;
                if (Ie(f, d) && a.ref === b.ref) if (Ug = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (Ug = !0); else return b.lanes = a.lanes, 
                $i(a, b, e);
            }
            return dj(a, b, c, d, e);
        }
        function ej(a, b, c) {
            var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
            if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, G(fj, gj), gj |= c; else {
                if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, 
                b.memoizedState = {
                    baseLanes: a,
                    cachePool: null,
                    transitions: null
                }, b.updateQueue = null, G(fj, gj), gj |= a, null;
                b.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                };
                d = null !== f ? f.baseLanes : c;
                G(fj, gj);
                gj |= d;
            } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), 
            gj |= d;
            Yi(a, b, e, c);
            return b.child;
        }
        function hj(a, b) {
            var c = b.ref;
            if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
        }
        function dj(a, b, c, d, e) {
            var f = Zf(c) ? Xf : H.current;
            f = Yf(b, f);
            Tg(b, e);
            c = Xh(a, b, c, d, f, e);
            d = bi();
            if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, 
            $i(a, b, e);
            I && d && vg(b);
            b.flags |= 1;
            Yi(a, b, c, e);
            return b.child;
        }
        function ij(a, b, c, d, e) {
            if (Zf(c)) {
                var f = !0;
                cg(b);
            } else f = !1;
            Tg(b, e);
            if (null === b.stateNode) jj(a, b), ph(b, c, d), rh(b, c, d, e), d = !0; else if (null === a) {
                var g = b.stateNode, h = b.memoizedProps;
                g.props = h;
                var k = g.context, l = c.contextType;
                "object" === typeof l && null !== l ? l = Vg(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
                var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
                q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && qh(b, g, d, l);
                $g = !1;
                var r = b.memoizedState;
                g.state = r;
                gh(b, d, g, e);
                k = b.memoizedState;
                h !== d || r !== k || Wf.current || $g ? ("function" === typeof m && (kh(b, c, m, d), 
                k = b.memoizedState), (h = $g || oh(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), 
                "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), 
                "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), 
                b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, 
                d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
            } else {
                g = b.stateNode;
                bh(a, b);
                h = b.memoizedProps;
                l = b.type === b.elementType ? h : Lg(b.type, h);
                g.props = l;
                q = b.pendingProps;
                r = g.context;
                k = c.contextType;
                "object" === typeof k && null !== k ? k = Vg(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
                var y = c.getDerivedStateFromProps;
                (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && qh(b, g, d, k);
                $g = !1;
                r = b.memoizedState;
                g.state = r;
                gh(b, d, g, e);
                var n = b.memoizedState;
                h !== q || r !== n || Wf.current || $g ? ("function" === typeof y && (kh(b, c, y, d), 
                n = b.memoizedState), (l = $g || oh(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), 
                "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), 
                "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), 
                "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), 
                b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, 
                d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), 
                "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), 
                d = !1);
            }
            return kj(a, b, c, d, f, e);
        }
        function kj(a, b, c, d, e, f) {
            hj(a, b);
            var g = 0 !== (b.flags & 128);
            if (!d && !g) return e && dg(b, c, !1), $i(a, b, f);
            d = b.stateNode;
            Xi.current = b;
            var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
            b.flags |= 1;
            null !== a && g ? (b.child = Bh(b, a.child, null, f), b.child = Bh(b, null, h, f)) : Yi(a, b, h, f);
            b.memoizedState = d.state;
            e && dg(b, c, !0);
            return b.child;
        }
        function lj(a) {
            var b = a.stateNode;
            b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
            Ih(a, b.containerInfo);
        }
        function mj(a, b, c, d, e) {
            Ig();
            Jg(e);
            b.flags |= 256;
            Yi(a, b, c, d);
            return b.child;
        }
        var nj = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0
        };
        function oj(a) {
            return {
                baseLanes: a,
                cachePool: null,
                transitions: null
            };
        }
        function pj(a, b, c) {
            var d = b.pendingProps, e = M.current, f = !1, g = 0 !== (b.flags & 128), h;
            (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
            if (h) f = !0, b.flags &= -129; else if (null === a || null !== a.memoizedState) e |= 1;
            G(M, e & 1);
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
                }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = qj(g, d, 0, null), 
                a = Ah(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = oj(c), 
                b.memoizedState = nj, a) : rj(b, g);
            }
            e = a.memoizedState;
            if (null !== e && (h = e.dehydrated, null !== h)) return sj(a, b, g, d, h, e, c);
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
                b.deletions = null) : (d = wh(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
                null !== h ? f = wh(h, f) : (f = Ah(f, g, c, null), f.flags |= 2);
                f.return = b;
                d.return = b;
                d.sibling = f;
                b.child = d;
                d = f;
                f = b.child;
                g = a.child.memoizedState;
                g = null === g ? oj(c) : {
                    baseLanes: g.baseLanes | c,
                    cachePool: null,
                    transitions: g.transitions
                };
                f.memoizedState = g;
                f.childLanes = a.childLanes & ~c;
                b.memoizedState = nj;
                return d;
            }
            f = a.child;
            a = f.sibling;
            d = wh(f, {
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
        function rj(a, b) {
            b = qj({
                mode: "visible",
                children: b
            }, a.mode, 0, null);
            b.return = a;
            return a.child = b;
        }
        function tj(a, b, c, d) {
            null !== d && Jg(d);
            Bh(b, a.child, null, c);
            a = rj(b, b.pendingProps.children);
            a.flags |= 2;
            b.memoizedState = null;
            return a;
        }
        function sj(a, b, c, d, e, f, g) {
            if (c) {
                if (b.flags & 256) return b.flags &= -257, d = Li(Error(p(422))), tj(a, b, g, d);
                if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
                f = d.fallback;
                e = b.mode;
                d = qj({
                    mode: "visible",
                    children: d.children
                }, e, 0, null);
                f = Ah(f, e, g, null);
                f.flags |= 2;
                d.return = b;
                f.return = b;
                d.sibling = f;
                b.child = d;
                0 !== (b.mode & 1) && Bh(b, a.child, null, g);
                b.child.memoizedState = oj(g);
                b.memoizedState = nj;
                return f;
            }
            if (0 === (b.mode & 1)) return tj(a, b, g, null);
            if ("$!" === e.data) {
                d = e.nextSibling && e.nextSibling.dataset;
                if (d) var h = d.dgst;
                d = h;
                f = Error(p(419));
                d = Li(f, d, void 0);
                return tj(a, b, g, d);
            }
            h = 0 !== (g & a.childLanes);
            if (Ug || h) {
                d = R;
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
                    0 !== e && e !== f.retryLane && (f.retryLane = e, Zg(a, e), mh(d, a, e, -1));
                }
                uj();
                d = Li(Error(p(421)));
                return tj(a, b, g, d);
            }
            if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), 
            e._reactRetry = b, null;
            a = f.treeContext;
            yg = Lf(e.nextSibling);
            xg = b;
            I = !0;
            zg = null;
            null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, 
            qg = b);
            b = rj(b, d.children);
            b.flags |= 4096;
            return b;
        }
        function wj(a, b, c) {
            a.lanes |= b;
            var d = a.alternate;
            null !== d && (d.lanes |= b);
            Sg(a.return, b, c);
        }
        function xj(a, b, c, d, e) {
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
        function yj(a, b, c) {
            var d = b.pendingProps, e = d.revealOrder, f = d.tail;
            Yi(a, b, d.children, c);
            d = M.current;
            if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128; else {
                if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
                    if (13 === a.tag) null !== a.memoizedState && wj(a, c, b); else if (19 === a.tag) wj(a, c, b); else if (null !== a.child) {
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
            G(M, d);
            if (0 === (b.mode & 1)) b.memoizedState = null; else switch (e) {
              case "forwards":
                c = b.child;
                for (e = null; null !== c; ) a = c.alternate, null !== a && null === Mh(a) && (e = c), 
                c = c.sibling;
                c = e;
                null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
                xj(b, !1, e, c, f);
                break;

              case "backwards":
                c = null;
                e = b.child;
                for (b.child = null; null !== e; ) {
                    a = e.alternate;
                    if (null !== a && null === Mh(a)) {
                        b.child = e;
                        break;
                    }
                    a = e.sibling;
                    e.sibling = c;
                    c = e;
                    e = a;
                }
                xj(b, !0, c, null, f);
                break;

              case "together":
                xj(b, !1, null, null, void 0);
                break;

              default:
                b.memoizedState = null;
            }
            return b.child;
        }
        function jj(a, b) {
            0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
        }
        function $i(a, b, c) {
            null !== a && (b.dependencies = a.dependencies);
            hh |= b.lanes;
            if (0 === (c & b.childLanes)) return null;
            if (null !== a && b.child !== a.child) throw Error(p(153));
            if (null !== b.child) {
                a = b.child;
                c = wh(a, a.pendingProps);
                b.child = c;
                for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = wh(a, a.pendingProps), 
                c.return = b;
                c.sibling = null;
            }
            return b.child;
        }
        function zj(a, b, c) {
            switch (b.tag) {
              case 3:
                lj(b);
                Ig();
                break;

              case 5:
                Kh(b);
                break;

              case 1:
                Zf(b.type) && cg(b);
                break;

              case 4:
                Ih(b, b.stateNode.containerInfo);
                break;

              case 10:
                var d = b.type._context, e = b.memoizedProps.value;
                G(Mg, d._currentValue);
                d._currentValue = e;
                break;

              case 13:
                d = b.memoizedState;
                if (null !== d) {
                    if (null !== d.dehydrated) return G(M, M.current & 1), b.flags |= 128, null;
                    if (0 !== (c & b.child.childLanes)) return pj(a, b, c);
                    G(M, M.current & 1);
                    a = $i(a, b, c);
                    return null !== a ? a.sibling : null;
                }
                G(M, M.current & 1);
                break;

              case 19:
                d = 0 !== (c & b.childLanes);
                if (0 !== (a.flags & 128)) {
                    if (d) return yj(a, b, c);
                    b.flags |= 128;
                }
                e = b.memoizedState;
                null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
                G(M, M.current);
                if (d) break; else return null;

              case 22:
              case 23:
                return b.lanes = 0, ej(a, b, c);
            }
            return $i(a, b, c);
        }
        var Aj, Bj, Cj, Dj;
        Aj = function(a, b) {
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
        Bj = function() {};
        Cj = function(a, b, c, d) {
            var e = a.memoizedProps;
            if (e !== d) {
                a = b.stateNode;
                Hh(Eh.current);
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
        Dj = function(a, b, c, d) {
            c !== d && (b.flags |= 4);
        };
        function Ej(a, b) {
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
        function Fj(a, b, c) {
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
                Jh();
                E(Wf);
                E(H);
                Oh();
                d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
                if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, 
                null !== zg && (Gj(zg), zg = null));
                Bj(a, b);
                S(b);
                return null;

              case 5:
                Lh(b);
                var e = Hh(Gh.current);
                c = b.type;
                if (null !== a && null != b.stateNode) Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, 
                b.flags |= 2097152); else {
                    if (!d) {
                        if (null === b.stateNode) throw Error(p(166));
                        S(b);
                        return null;
                    }
                    a = Hh(Eh.current);
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
                            "children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), 
                            e = [ "children", h ]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), 
                            e = [ "children", "" + h ]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                        }
                        switch (c) {
                          case "input":
                            Va(d);
                            db(d, f, !0);
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
                        }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                        a[Of] = b;
                        a[Pf] = d;
                        Aj(a, b, !1, !1);
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
                                db(a, d, !1);
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
                                null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
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
                                d = !0;
                                break a;

                              default:
                                d = !1;
                            }
                        }
                        d && (b.flags |= 4);
                    }
                    null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
                }
                S(b);
                return null;

              case 6:
                if (a && null != b.stateNode) Dj(a, b, a.memoizedProps, d); else {
                    if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
                    c = Hh(Gh.current);
                    Hh(Eh.current);
                    if (Gg(b)) {
                        d = b.stateNode;
                        c = b.memoizedProps;
                        d[Of] = b;
                        if (f = d.nodeValue !== c) if (a = xg, null !== a) switch (a.tag) {
                          case 3:
                            Af(d.nodeValue, c, 0 !== (a.mode & 1));
                            break;

                          case 5:
                            !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                        }
                        f && (b.flags |= 4);
                    } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, 
                    b.stateNode = d;
                }
                S(b);
                return null;

              case 13:
                E(M);
                d = b.memoizedState;
                if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
                    if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), 
                    b.flags |= 98560, f = !1; else if (f = Gg(b), null !== d && null !== d.dehydrated) {
                        if (null === a) {
                            if (!f) throw Error(p(318));
                            f = b.memoizedState;
                            f = null !== f ? f.dehydrated : null;
                            if (!f) throw Error(p(317));
                            f[Of] = b;
                        } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                        S(b);
                        f = !1;
                    } else null !== zg && (Gj(zg), zg = null), f = !0;
                    if (!f) return b.flags & 65536 ? b : null;
                }
                if (0 !== (b.flags & 128)) return b.lanes = c, b;
                d = null !== d;
                d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
                null !== b.updateQueue && (b.flags |= 4);
                S(b);
                return null;

              case 4:
                return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;

              case 10:
                return Rg(b.type._context), S(b), null;

              case 17:
                return Zf(b.type) && $f(), S(b), null;

              case 19:
                E(M);
                f = b.memoizedState;
                if (null === f) return S(b), null;
                d = 0 !== (b.flags & 128);
                g = f.rendering;
                if (null === g) if (d) Ej(f, !1); else {
                    if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
                        g = Mh(a);
                        if (null !== g) {
                            b.flags |= 128;
                            Ej(f, !1);
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
                            G(M, M.current & 1 | 2);
                            return b.child;
                        }
                        a = a.sibling;
                    }
                    null !== f.tail && B() > Hj && (b.flags |= 128, d = !0, Ej(f, !1), b.lanes = 4194304);
                } else {
                    if (!d) if (a = Mh(g), null !== a) {
                        if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, 
                        b.flags |= 4), Ej(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), 
                        null;
                    } else 2 * B() - f.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, 
                    d = !0, Ej(f, !1), b.lanes = 4194304);
                    f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, 
                    f.last = g);
                }
                if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), 
                b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
                S(b);
                return null;

              case 22:
              case 23:
                return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), 
                d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), 
                null;

              case 24:
                return null;

              case 25:
                return null;
            }
            throw Error(p(156, b.tag));
        }
        function Jj(a, b) {
            wg(b);
            switch (b.tag) {
              case 1:
                return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, 
                b) : null;

              case 3:
                return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, 
                b) : null;

              case 5:
                return Lh(b), null;

              case 13:
                E(M);
                a = b.memoizedState;
                if (null !== a && null !== a.dehydrated) {
                    if (null === b.alternate) throw Error(p(340));
                    Ig();
                }
                a = b.flags;
                return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;

              case 19:
                return E(M), null;

              case 4:
                return Jh(), null;

              case 10:
                return Rg(b.type._context), null;

              case 22:
              case 23:
                return Ij(), null;

              case 24:
                return null;

              default:
                return null;
            }
        }
        var Kj = !1, U = !1, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
        function Mj(a, b) {
            var c = a.ref;
            if (null !== c) if ("function" === typeof c) try {
                c(null);
            } catch (d) {
                W(a, b, d);
            } else c.current = null;
        }
        function Nj(a, b, c) {
            try {
                c();
            } catch (d) {
                W(a, b, d);
            }
        }
        var Oj = !1;
        function Pj(a, b) {
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
            dd = !1;
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
                            var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Lg(b.type, t), J);
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
            n = Oj;
            Oj = !1;
            return n;
        }
        function Qj(a, b, c) {
            var d = b.updateQueue;
            d = null !== d ? d.lastEffect : null;
            if (null !== d) {
                var e = d = d.next;
                do {
                    if ((e.tag & a) === a) {
                        var f = e.destroy;
                        e.destroy = void 0;
                        void 0 !== f && Nj(b, c, f);
                    }
                    e = e.next;
                } while (e !== d);
            }
        }
        function Rj(a, b) {
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
        function Sj(a) {
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
        function Tj(a) {
            var b = a.alternate;
            null !== b && (a.alternate = null, Tj(b));
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
        function Uj(a) {
            return 5 === a.tag || 3 === a.tag || 4 === a.tag;
        }
        function Vj(a) {
            a: for (;;) {
                for (;null === a.sibling; ) {
                    if (null === a.return || Uj(a.return)) return null;
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
        function Wj(a, b, c) {
            var d = a.tag;
            if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, 
            b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf)); else if (4 !== d && (a = a.child, 
            null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
        }
        function Xj(a, b, c) {
            var d = a.tag;
            if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a); else if (4 !== d && (a = a.child, 
            null !== a)) for (Xj(a, b, c), a = a.sibling; null !== a; ) Xj(a, b, c), a = a.sibling;
        }
        var X = null, Yj = !1;
        function Zj(a, b, c) {
            for (c = c.child; null !== c; ) ak(a, b, c), c = c.sibling;
        }
        function ak(a, b, c) {
            if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
                lc.onCommitFiberUnmount(kc, c);
            } catch (h) {}
            switch (c.tag) {
              case 5:
                U || Mj(c, b);

              case 6:
                var d = X, e = Yj;
                X = null;
                Zj(a, b, c);
                X = d;
                Yj = e;
                null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
                break;

              case 18:
                null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), 
                bd(a)) : Kf(X, c.stateNode));
                break;

              case 4:
                d = X;
                e = Yj;
                X = c.stateNode.containerInfo;
                Yj = !0;
                Zj(a, b, c);
                X = d;
                Yj = e;
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
                        void 0 !== g && (0 !== (f & 2) ? Nj(c, b, g) : 0 !== (f & 4) && Nj(c, b, g));
                        e = e.next;
                    } while (e !== d);
                }
                Zj(a, b, c);
                break;

              case 1:
                if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
                    d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
                } catch (h) {
                    W(c, b, h);
                }
                Zj(a, b, c);
                break;

              case 21:
                Zj(a, b, c);
                break;

              case 22:
                c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
                break;

              default:
                Zj(a, b, c);
            }
        }
        function bk(a) {
            var b = a.updateQueue;
            if (null !== b) {
                a.updateQueue = null;
                var c = a.stateNode;
                null === c && (c = a.stateNode = new Lj);
                b.forEach((function(b) {
                    var d = ck.bind(null, a, b);
                    c.has(b) || (c.add(b), b.then(d, d));
                }));
            }
        }
        function dk(a, b) {
            var c = b.deletions;
            if (null !== c) for (var d = 0; d < c.length; d++) {
                var e = c[d];
                try {
                    var f = a, g = b, h = g;
                    a: for (;null !== h; ) {
                        switch (h.tag) {
                          case 5:
                            X = h.stateNode;
                            Yj = !1;
                            break a;

                          case 3:
                            X = h.stateNode.containerInfo;
                            Yj = !0;
                            break a;

                          case 4:
                            X = h.stateNode.containerInfo;
                            Yj = !0;
                            break a;
                        }
                        h = h.return;
                    }
                    if (null === X) throw Error(p(160));
                    ak(f, g, e);
                    X = null;
                    Yj = !1;
                    var k = e.alternate;
                    null !== k && (k.return = null);
                    e.return = null;
                } catch (l) {
                    W(e, b, l);
                }
            }
            if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) ek(b, a), b = b.sibling;
        }
        function ek(a, b) {
            var c = a.alternate, d = a.flags;
            switch (a.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                dk(b, a);
                fk(a);
                if (d & 4) {
                    try {
                        Qj(3, a, a.return), Rj(3, a);
                    } catch (t) {
                        W(a, a.return, t);
                    }
                    try {
                        Qj(5, a, a.return);
                    } catch (t) {
                        W(a, a.return, t);
                    }
                }
                break;

              case 1:
                dk(b, a);
                fk(a);
                d & 512 && null !== c && Mj(c, c.return);
                break;

              case 5:
                dk(b, a);
                fk(a);
                d & 512 && null !== c && Mj(c, c.return);
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
                dk(b, a);
                fk(a);
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
                dk(b, a);
                fk(a);
                if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
                    bd(b.containerInfo);
                } catch (t) {
                    W(a, a.return, t);
                }
                break;

              case 4:
                dk(b, a);
                fk(a);
                break;

              case 13:
                dk(b, a);
                fk(a);
                e = a.child;
                e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B()));
                d & 4 && bk(a);
                break;

              case 22:
                m = null !== c && null !== c.memoizedState;
                a.mode & 1 ? (U = (l = U) || m, dk(b, a), U = l) : dk(b, a);
                fk(a);
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
                                Qj(4, r, r.return);
                                break;

                              case 1:
                                Mj(r, r.return);
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
                                Mj(r, r.return);
                                break;

                              case 22:
                                if (null !== r.memoizedState) {
                                    hk(q);
                                    continue;
                                }
                            }
                            null !== y ? (y.return = r, V = y) : hk(q);
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
                dk(b, a);
                fk(a);
                d & 4 && bk(a);
                break;

              case 21:
                break;

              default:
                dk(b, a), fk(a);
            }
        }
        function fk(a) {
            var b = a.flags;
            if (b & 2) {
                try {
                    a: {
                        for (var c = a.return; null !== c; ) {
                            if (Uj(c)) {
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
                        var f = Vj(a);
                        Xj(a, f, e);
                        break;

                      case 3:
                      case 4:
                        var g = d.stateNode.containerInfo, h = Vj(a);
                        Wj(a, h, g);
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
        function ik(a, b, c) {
            V = a;
            jk(a);
        }
        function jk(a, b, c) {
            for (var d = 0 !== (a.mode & 1); null !== V; ) {
                var e = V, f = e.child;
                if (22 === e.tag && d) {
                    var g = null !== e.memoizedState || Kj;
                    if (!g) {
                        var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
                        h = Kj;
                        var l = U;
                        Kj = g;
                        if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k ? (k.return = g, 
                        V = k) : kk(e);
                        for (;null !== f; ) V = f, jk(f), f = f.sibling;
                        V = e;
                        Kj = h;
                        U = l;
                    }
                    lk(a);
                } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : lk(a);
            }
        }
        function lk(a) {
            for (;null !== V; ) {
                var b = V;
                if (0 !== (b.flags & 8772)) {
                    var c = b.alternate;
                    try {
                        if (0 !== (b.flags & 8772)) switch (b.tag) {
                          case 0:
                          case 11:
                          case 15:
                            U || Rj(5, b);
                            break;

                          case 1:
                            var d = b.stateNode;
                            if (b.flags & 4 && !U) if (null === c) d.componentDidMount(); else {
                                var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
                                d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                            }
                            var f = b.updateQueue;
                            null !== f && ih(b, f, d);
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
                                ih(b, g, c);
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
                        U || b.flags & 512 && Sj(b);
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
        function hk(a) {
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
        function kk(a) {
            for (;null !== V; ) {
                var b = V;
                try {
                    switch (b.tag) {
                      case 0:
                      case 11:
                      case 15:
                        var c = b.return;
                        try {
                            Rj(4, b);
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
                            Sj(b);
                        } catch (k) {
                            W(b, f, k);
                        }
                        break;

                      case 5:
                        var g = b.return;
                        try {
                            Sj(b);
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
        var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = !1, Qi = null, Si = null, wk = !1, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
        function L() {
            return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
        }
        function lh(a) {
            if (0 === (a.mode & 1)) return 1;
            if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
            if (null !== Kg.transition) return 0 === Ck && (Ck = yc()), Ck;
            a = C;
            if (0 !== a) return a;
            a = window.event;
            a = void 0 === a ? 16 : jd(a.type);
            return a;
        }
        function mh(a, b, c, d) {
            if (50 < zk) throw zk = 0, Ak = null, Error(p(185));
            Ac(a, c, d);
            if (0 === (K & 2) || a !== R) a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), 
            Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
        }
        function Ek(a, b) {
            var c = a.callbackNode;
            wc(a, b);
            var d = uc(a, a === R ? Z : 0);
            if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0; else if (b = d & -d, 
            a.callbackPriority !== b) {
                null != c && bc(c);
                if (1 === b) 0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf((function() {
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
                    c = Gk(c, Hk.bind(null, a));
                }
                a.callbackPriority = b;
                a.callbackNode = c;
            }
        }
        function Hk(a, b) {
            Bk = -1;
            Ck = 0;
            if (0 !== (K & 6)) throw Error(p(327));
            var c = a.callbackNode;
            if (Ik() && a.callbackNode !== c) return null;
            var d = uc(a, a === R ? Z : 0);
            if (0 === d) return null;
            if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Jk(a, d); else {
                b = d;
                var e = K;
                K |= 2;
                var f = Kk();
                if (R !== a || Z !== b) vk = null, Hj = B() + 500, Lk(a, b);
                do {
                    try {
                        Mk();
                        break;
                    } catch (h) {
                        Nk(a, h);
                    }
                } while (1);
                Qg();
                nk.current = f;
                K = e;
                null !== Y ? b = 0 : (R = null, Z = 0, b = T);
            }
            if (0 !== b) {
                2 === b && (e = xc(a), 0 !== e && (d = e, b = Ok(a, e)));
                if (1 === b) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
                if (6 === b) Dk(a, d); else {
                    e = a.current.alternate;
                    if (0 === (d & 30) && !Pk(e) && (b = Jk(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, 
                    b = Ok(a, f))), 1 === b)) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
                    a.finishedWork = e;
                    a.finishedLanes = d;
                    switch (b) {
                      case 0:
                      case 1:
                        throw Error(p(345));

                      case 2:
                        Qk(a, uk, vk);
                        break;

                      case 3:
                        Dk(a, d);
                        if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
                            if (0 !== uc(a, 0)) break;
                            e = a.suspendedLanes;
                            if ((e & d) !== d) {
                                L();
                                a.pingedLanes |= a.suspendedLanes & e;
                                break;
                            }
                            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
                            break;
                        }
                        Qk(a, uk, vk);
                        break;

                      case 4:
                        Dk(a, d);
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
                        d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
                        if (10 < d) {
                            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
                            break;
                        }
                        Qk(a, uk, vk);
                        break;

                      case 5:
                        Qk(a, uk, vk);
                        break;

                      default:
                        throw Error(p(329));
                    }
                }
            }
            Ek(a, B());
            return a.callbackNode === c ? Hk.bind(null, a) : null;
        }
        function Ok(a, b) {
            var c = tk;
            a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
            a = Jk(a, b);
            2 !== a && (b = uk, uk = c, null !== b && Gj(b));
            return a;
        }
        function Gj(a) {
            null === uk ? uk = a : uk.push.apply(uk, a);
        }
        function Pk(a) {
            for (var b = a; ;) {
                if (b.flags & 16384) {
                    var c = b.updateQueue;
                    if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
                        var e = c[d], f = e.getSnapshot;
                        e = e.value;
                        try {
                            if (!He(f(), e)) return !1;
                        } catch (g) {
                            return !1;
                        }
                    }
                }
                c = b.child;
                if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c; else {
                    if (b === a) break;
                    for (;null === b.sibling; ) {
                        if (null === b.return || b.return === a) return !0;
                        b = b.return;
                    }
                    b.sibling.return = b.return;
                    b = b.sibling;
                }
            }
            return !0;
        }
        function Dk(a, b) {
            b &= ~sk;
            b &= ~rk;
            a.suspendedLanes |= b;
            a.pingedLanes &= ~b;
            for (a = a.expirationTimes; 0 < b; ) {
                var c = 31 - oc(b), d = 1 << c;
                a[c] = -1;
                b &= ~d;
            }
        }
        function Fk(a) {
            if (0 !== (K & 6)) throw Error(p(327));
            Ik();
            var b = uc(a, 0);
            if (0 === (b & 1)) return Ek(a, B()), null;
            var c = Jk(a, b);
            if (0 !== a.tag && 2 === c) {
                var d = xc(a);
                0 !== d && (b = d, c = Ok(a, d));
            }
            if (1 === c) throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
            if (6 === c) throw Error(p(345));
            a.finishedWork = a.current.alternate;
            a.finishedLanes = b;
            Qk(a, uk, vk);
            Ek(a, B());
            return null;
        }
        function Rk(a, b) {
            var c = K;
            K |= 1;
            try {
                return a(b);
            } finally {
                K = c, 0 === K && (Hj = B() + 500, fg && jg());
            }
        }
        function Sk(a) {
            null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
            var b = K;
            K |= 1;
            var c = pk.transition, d = C;
            try {
                if (pk.transition = null, C = 1, a) return a();
            } finally {
                C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
            }
        }
        function Ij() {
            gj = fj.current;
            E(fj);
        }
        function Lk(a, b) {
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
                    Jh();
                    E(Wf);
                    E(H);
                    Oh();
                    break;

                  case 5:
                    Lh(d);
                    break;

                  case 4:
                    Jh();
                    break;

                  case 13:
                    E(M);
                    break;

                  case 19:
                    E(M);
                    break;

                  case 10:
                    Rg(d.type._context);
                    break;

                  case 22:
                  case 23:
                    Ij();
                }
                c = c.return;
            }
            R = a;
            Y = a = wh(a.current, null);
            Z = gj = b;
            T = 0;
            qk = null;
            sk = rk = hh = 0;
            uk = tk = null;
            if (null !== Wg) {
                for (b = 0; b < Wg.length; b++) if (c = Wg[b], d = c.interleaved, null !== d) {
                    c.interleaved = null;
                    var e = d.next, f = c.pending;
                    if (null !== f) {
                        var g = f.next;
                        f.next = e;
                        d.next = g;
                    }
                    c.pending = d;
                }
                Wg = null;
            }
            return a;
        }
        function Nk(a, b) {
            do {
                var c = Y;
                try {
                    Qg();
                    Ph.current = ai;
                    if (Sh) {
                        for (var d = N.memoizedState; null !== d; ) {
                            var e = d.queue;
                            null !== e && (e.pending = null);
                            d = d.next;
                        }
                        Sh = !1;
                    }
                    Rh = 0;
                    P = O = N = null;
                    Th = !1;
                    Uh = 0;
                    ok.current = null;
                    if (null === c || null === c.return) {
                        T = 1;
                        qk = b;
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
                            var y = Vi(g);
                            if (null !== y) {
                                y.flags &= -257;
                                Wi(y, g, h, f, b);
                                y.mode & 1 && Ti(f, l, b);
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
                                    Ti(f, l, b);
                                    uj();
                                    break a;
                                }
                                k = Error(p(426));
                            }
                        } else if (I && h.mode & 1) {
                            var J = Vi(g);
                            if (null !== J) {
                                0 === (J.flags & 65536) && (J.flags |= 256);
                                Wi(J, g, h, f, b);
                                Jg(Ki(k, h));
                                break a;
                            }
                        }
                        f = k = Ki(k, h);
                        4 !== T && (T = 2);
                        null === tk ? tk = [ f ] : tk.push(f);
                        f = g;
                        do {
                            switch (f.tag) {
                              case 3:
                                f.flags |= 65536;
                                b &= -b;
                                f.lanes |= b;
                                var x = Oi(f, k, b);
                                fh(f, x);
                                break a;

                              case 1:
                                h = k;
                                var w = f.type, u = f.stateNode;
                                if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Si || !Si.has(u)))) {
                                    f.flags |= 65536;
                                    b &= -b;
                                    f.lanes |= b;
                                    var F = Ri(f, h, b);
                                    fh(f, F);
                                    break a;
                                }
                            }
                            f = f.return;
                        } while (null !== f);
                    }
                    Tk(c);
                } catch (na) {
                    b = na;
                    Y === c && null !== c && (Y = c = c.return);
                    continue;
                }
                break;
            } while (1);
        }
        function Kk() {
            var a = nk.current;
            nk.current = ai;
            return null === a ? ai : a;
        }
        function uj() {
            if (0 === T || 3 === T || 2 === T) T = 4;
            null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
        }
        function Jk(a, b) {
            var c = K;
            K |= 2;
            var d = Kk();
            if (R !== a || Z !== b) vk = null, Lk(a, b);
            do {
                try {
                    Uk();
                    break;
                } catch (e) {
                    Nk(a, e);
                }
            } while (1);
            Qg();
            K = c;
            nk.current = d;
            if (null !== Y) throw Error(p(261));
            R = null;
            Z = 0;
            return T;
        }
        function Uk() {
            for (;null !== Y; ) Vk(Y);
        }
        function Mk() {
            for (;null !== Y && !cc(); ) Vk(Y);
        }
        function Vk(a) {
            var b = Wk(a.alternate, a, gj);
            a.memoizedProps = a.pendingProps;
            null === b ? Tk(a) : Y = b;
            ok.current = null;
        }
        function Tk(a) {
            var b = a;
            do {
                var c = b.alternate;
                a = b.return;
                if (0 === (b.flags & 32768)) {
                    if (c = Fj(c, b, gj), null !== c) {
                        Y = c;
                        return;
                    }
                } else {
                    c = Jj(c, b);
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
        function Qk(a, b, c) {
            var d = C, e = pk.transition;
            try {
                pk.transition = null, C = 1, Xk(a, b, c, d);
            } finally {
                pk.transition = e, C = d;
            }
            return null;
        }
        function Xk(a, b, c, d) {
            do {
                Ik();
            } while (null !== xk);
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
            a === R && (Y = R = null, Z = 0);
            0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = !0, Gk(hc, (function() {
                Ik();
                return null;
            })));
            f = 0 !== (c.flags & 15990);
            if (0 !== (c.subtreeFlags & 15990) || f) {
                f = pk.transition;
                pk.transition = null;
                var g = C;
                C = 1;
                var h = K;
                K |= 4;
                ok.current = null;
                Pj(a, c);
                ek(c, a);
                Oe(Df);
                dd = !!Cf;
                Df = Cf = null;
                a.current = c;
                ik(c);
                dc();
                K = h;
                C = g;
                pk.transition = f;
            } else a.current = c;
            wk && (wk = !1, xk = a, yk = e);
            f = a.pendingLanes;
            0 === f && (Si = null);
            mc(c.stateNode);
            Ek(a, B());
            if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], 
            d(e.value, {
                componentStack: e.stack,
                digest: e.digest
            });
            if (Pi) throw Pi = !1, a = Qi, Qi = null, a;
            0 !== (yk & 1) && 0 !== a.tag && Ik();
            f = a.pendingLanes;
            0 !== (f & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
            jg();
            return null;
        }
        function Ik() {
            if (null !== xk) {
                var a = Dc(yk), b = pk.transition, c = C;
                try {
                    pk.transition = null;
                    C = 16 > a ? 16 : a;
                    if (null === xk) var d = !1; else {
                        a = xk;
                        xk = null;
                        yk = 0;
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
                                                Qj(8, m, f);
                                            }
                                            var q = m.child;
                                            if (null !== q) q.return = m, V = q; else for (;null !== V; ) {
                                                m = V;
                                                var r = m.sibling, y = m.return;
                                                Tj(m);
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
                                    Qj(9, f, f.return);
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
                                        Rj(9, h);
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
                    C = c, pk.transition = b;
                }
            }
            return !1;
        }
        function Yk(a, b, c) {
            b = Ki(c, b);
            b = Oi(a, b, 1);
            a = dh(a, b, 1);
            b = L();
            null !== a && (Ac(a, 1, b), Ek(a, b));
        }
        function W(a, b, c) {
            if (3 === a.tag) Yk(a, a, c); else for (;null !== b; ) {
                if (3 === b.tag) {
                    Yk(b, a, c);
                    break;
                } else if (1 === b.tag) {
                    var d = b.stateNode;
                    if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
                        a = Ki(c, a);
                        a = Ri(b, a, 1);
                        b = dh(b, a, 1);
                        a = L();
                        null !== b && (Ac(b, 1, a), Ek(b, a));
                        break;
                    }
                }
                b = b.return;
            }
        }
        function Ui(a, b, c) {
            var d = a.pingCache;
            null !== d && d.delete(b);
            b = L();
            a.pingedLanes |= a.suspendedLanes & c;
            R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
            Ek(a, b);
        }
        function Zk(a, b) {
            0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
            var c = L();
            a = Zg(a, b);
            null !== a && (Ac(a, b, c), Ek(a, c));
        }
        function vj(a) {
            var b = a.memoizedState, c = 0;
            null !== b && (c = b.retryLane);
            Zk(a, c);
        }
        function ck(a, b) {
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
            Zk(a, c);
        }
        var Wk;
        Wk = function(a, b, c) {
            if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) Ug = !0; else {
                if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return Ug = !1, zj(a, b, c);
                Ug = 0 !== (a.flags & 131072) ? !0 : !1;
            } else Ug = !1, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
            b.lanes = 0;
            switch (b.tag) {
              case 2:
                var d = b.type;
                jj(a, b);
                a = b.pendingProps;
                var e = Yf(b, H.current);
                Tg(b, c);
                e = Xh(null, b, d, a, e, c);
                var f = bi();
                b.flags |= 1;
                "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, 
                b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = !0, cg(b)) : f = !1, 
                b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), 
                e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, !0, f, c)) : (b.tag = 0, 
                I && f && vg(b), Yi(null, b, e, c), b = b.child);
                return b;

              case 16:
                d = b.elementType;
                a: {
                    jj(a, b);
                    a = b.pendingProps;
                    e = d._init;
                    d = e(d._payload);
                    b.type = d;
                    e = b.tag = $k(d);
                    a = Lg(d, a);
                    switch (e) {
                      case 0:
                        b = dj(null, b, d, a, c);
                        break a;

                      case 1:
                        b = ij(null, b, d, a, c);
                        break a;

                      case 11:
                        b = Zi(null, b, d, a, c);
                        break a;

                      case 14:
                        b = aj(null, b, d, Lg(d.type, a), c);
                        break a;
                    }
                    throw Error(p(306, d, ""));
                }
                return b;

              case 0:
                return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);

              case 1:
                return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);

              case 3:
                a: {
                    lj(b);
                    if (null === a) throw Error(p(387));
                    d = b.pendingProps;
                    f = b.memoizedState;
                    e = f.element;
                    bh(a, b);
                    gh(b, d, null, c);
                    var g = b.memoizedState;
                    d = g.element;
                    if (f.isDehydrated) if (f = {
                        element: d,
                        isDehydrated: !1,
                        cache: g.cache,
                        pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                        transitions: g.transitions
                    }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                        e = Ki(Error(p(423)), b);
                        b = mj(a, b, d, c, e);
                        break a;
                    } else if (d !== e) {
                        e = Ki(Error(p(424)), b);
                        b = mj(a, b, d, c, e);
                        break a;
                    } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = !0, zg = null, 
                    c = Ch(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling; else {
                        Ig();
                        if (d === e) {
                            b = $i(a, b, c);
                            break a;
                        }
                        Yi(a, b, d, c);
                    }
                    b = b.child;
                }
                return b;

              case 5:
                return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, 
                g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), 
                hj(a, b), Yi(a, b, g, c), b.child;

              case 6:
                return null === a && Eg(b), null;

              case 13:
                return pj(a, b, c);

              case 4:
                return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), 
                b.child;

              case 11:
                return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);

              case 7:
                return Yi(a, b, b.pendingProps, c), b.child;

              case 8:
                return Yi(a, b, b.pendingProps.children, c), b.child;

              case 12:
                return Yi(a, b, b.pendingProps.children, c), b.child;

              case 10:
                a: {
                    d = b.type._context;
                    e = b.pendingProps;
                    f = b.memoizedProps;
                    g = e.value;
                    G(Mg, d._currentValue);
                    d._currentValue = g;
                    if (null !== f) if (He(f.value, g)) {
                        if (f.children === e.children && !Wf.current) {
                            b = $i(a, b, c);
                            break a;
                        }
                    } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
                        var h = f.dependencies;
                        if (null !== h) {
                            g = f.child;
                            for (var k = h.firstContext; null !== k; ) {
                                if (k.context === d) {
                                    if (1 === f.tag) {
                                        k = ch(-1, c & -c);
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
                                    Sg(f.return, c, b);
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
                            Sg(g, c, b);
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
                    Yi(a, b, e.children, c);
                    b = b.child;
                }
                return b;

              case 9:
                return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, 
                Yi(a, b, d, c), b.child;

              case 14:
                return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);

              case 15:
                return cj(a, b, b.type, b.pendingProps, c);

              case 17:
                return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), 
                b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, Tg(b, c), ph(b, d, e), rh(b, d, e, c), 
                kj(null, b, d, !0, a, c);

              case 19:
                return yj(a, b, c);

              case 22:
                return ej(a, b, c);
            }
            throw Error(p(156, b.tag));
        };
        function Gk(a, b) {
            return ac(a, b);
        }
        function al(a, b, c, d) {
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
            return new al(a, b, c, d);
        }
        function bj(a) {
            a = a.prototype;
            return !(!a || !a.isReactComponent);
        }
        function $k(a) {
            if ("function" === typeof a) return bj(a) ? 1 : 0;
            if (void 0 !== a && null !== a) {
                a = a.$$typeof;
                if (a === Da) return 11;
                if (a === Ga) return 14;
            }
            return 2;
        }
        function wh(a, b) {
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
        function yh(a, b, c, d, e, f) {
            var g = 2;
            d = a;
            if ("function" === typeof a) bj(a) && (g = 1); else if ("string" === typeof a) g = 5; else a: switch (a) {
              case ya:
                return Ah(c.children, e, f, b);

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
                return qj(c, e, f, b);

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
        function Ah(a, b, c, d) {
            a = Bg(7, a, d, b);
            a.lanes = c;
            return a;
        }
        function qj(a, b, c, d) {
            a = Bg(22, a, d, b);
            a.elementType = Ia;
            a.lanes = c;
            a.stateNode = {
                isHidden: !1
            };
            return a;
        }
        function xh(a, b, c) {
            a = Bg(6, a, null, b);
            a.lanes = c;
            return a;
        }
        function zh(a, b, c) {
            b = Bg(4, null !== a.children ? a.children : [], a.key, b);
            b.lanes = c;
            b.stateNode = {
                containerInfo: a.containerInfo,
                pendingChildren: null,
                implementation: a.implementation
            };
            return b;
        }
        function bl(a, b, c, d, e) {
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
        function cl(a, b, c, d, e, f, g, h, k) {
            a = new bl(a, b, c, h, k);
            1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
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
            ah(f);
            return a;
        }
        function dl(a, b, c) {
            var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return {
                $$typeof: wa,
                key: null == d ? null : "" + d,
                children: a,
                containerInfo: b,
                implementation: c
            };
        }
        function el(a) {
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
        function fl(a, b, c, d, e, f, g, h, k) {
            a = cl(c, d, !0, a, e, f, g, h, k);
            a.context = el(null);
            c = a.current;
            d = L();
            e = lh(c);
            f = ch(d, e);
            f.callback = void 0 !== b && null !== b ? b : null;
            dh(c, f, e);
            a.current.lanes = e;
            Ac(a, e, d);
            Ek(a, d);
            return a;
        }
        function gl(a, b, c, d) {
            var e = b.current, f = L(), g = lh(e);
            c = el(c);
            null === b.context ? b.context = c : b.pendingContext = c;
            b = ch(f, g);
            b.payload = {
                element: a
            };
            d = void 0 === d ? null : d;
            null !== d && (b.callback = d);
            a = dh(e, b, g);
            null !== a && (mh(a, e, g, f), eh(a, e, g));
            return g;
        }
        function hl(a) {
            a = a.current;
            if (!a.child) return null;
            switch (a.child.tag) {
              case 5:
                return a.child.stateNode;

              default:
                return a.child.stateNode;
            }
        }
        function il(a, b) {
            a = a.memoizedState;
            if (null !== a && null !== a.dehydrated) {
                var c = a.retryLane;
                a.retryLane = 0 !== c && c < b ? c : b;
            }
        }
        function jl(a, b) {
            il(a, b);
            (a = a.alternate) && il(a, b);
        }
        function kl() {
            return null;
        }
        var ll = "function" === typeof reportError ? reportError : function(a) {
            console.error(a);
        };
        function ml(a) {
            this._internalRoot = a;
        }
        nl.prototype.render = ml.prototype.render = function(a) {
            var b = this._internalRoot;
            if (null === b) throw Error(p(409));
            gl(a, b, null, null);
        };
        nl.prototype.unmount = ml.prototype.unmount = function() {
            var a = this._internalRoot;
            if (null !== a) {
                this._internalRoot = null;
                var b = a.containerInfo;
                Sk((function() {
                    gl(null, a, null, null);
                }));
                b[uf] = null;
            }
        };
        function nl(a) {
            this._internalRoot = a;
        }
        nl.prototype.unstable_scheduleHydration = function(a) {
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
        function ol(a) {
            return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
        }
        function pl(a) {
            return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
        }
        function ql() {}
        function rl(a, b, c, d, e) {
            if (e) {
                if ("function" === typeof d) {
                    var f = d;
                    d = function() {
                        var a = hl(g);
                        f.call(a);
                    };
                }
                var g = fl(b, d, a, 0, null, !1, !1, "", ql);
                a._reactRootContainer = g;
                a[uf] = g.current;
                sf(8 === a.nodeType ? a.parentNode : a);
                Sk();
                return g;
            }
            for (;e = a.lastChild; ) a.removeChild(e);
            if ("function" === typeof d) {
                var h = d;
                d = function() {
                    var a = hl(k);
                    h.call(a);
                };
            }
            var k = cl(a, 0, !1, null, null, !1, !1, "", ql);
            a._reactRootContainer = k;
            a[uf] = k.current;
            sf(8 === a.nodeType ? a.parentNode : a);
            Sk((function() {
                gl(b, k, c, d);
            }));
            return k;
        }
        function sl(a, b, c, d, e) {
            var f = c._reactRootContainer;
            if (f) {
                var g = f;
                if ("function" === typeof e) {
                    var h = e;
                    e = function() {
                        var a = hl(g);
                        h.call(a);
                    };
                }
                gl(b, g, a, e);
            } else g = rl(c, b, a, e, d);
            return hl(g);
        }
        Ec = function(a) {
            switch (a.tag) {
              case 3:
                var b = a.stateNode;
                if (b.current.memoizedState.isDehydrated) {
                    var c = tc(b.pendingLanes);
                    0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
                }
                break;

              case 13:
                Sk((function() {
                    var b = Zg(a, 1);
                    if (null !== b) {
                        var c = L();
                        mh(b, a, 1, c);
                    }
                })), jl(a, 1);
            }
        };
        Fc = function(a) {
            if (13 === a.tag) {
                var b = Zg(a, 134217728);
                if (null !== b) {
                    var c = L();
                    mh(b, a, 134217728, c);
                }
                jl(a, 134217728);
            }
        };
        Gc = function(a) {
            if (13 === a.tag) {
                var b = lh(a), c = Zg(a, b);
                if (null !== c) {
                    var d = L();
                    mh(c, a, b, d);
                }
                jl(a, b);
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
                b = c.value, null != b && fb(a, !!c.multiple, b, !1);
            }
        };
        Gb = Rk;
        Hb = Sk;
        var tl = {
            usingClientEntryPoint: !1,
            Events: [ Cb, ue, Db, Eb, Fb, Rk ]
        }, ul = {
            findFiberByHostInstance: Wc,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom"
        };
        var vl = {
            bundleType: ul.bundleType,
            version: ul.version,
            rendererPackageName: ul.rendererPackageName,
            rendererConfig: ul.rendererConfig,
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
            findFiberByHostInstance: ul.findFiberByHostInstance || kl,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
        };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!wl.isDisabled && wl.supportsFiber) try {
                kc = wl.inject(vl), lc = wl;
            } catch (a) {}
        }
        reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
        reactDom_production_min.createPortal = function(a, b) {
            var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!ol(b)) throw Error(p(200));
            return dl(a, b, null, c);
        };
        reactDom_production_min.createRoot = function(a, b) {
            if (!ol(a)) throw Error(p(299));
            var c = !1, d = "", e = ll;
            null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), 
            void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
            b = cl(a, 1, !1, null, null, c, !1, d, e);
            a[uf] = b.current;
            sf(8 === a.nodeType ? a.parentNode : a);
            return new ml(b);
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
            return Sk(a);
        };
        reactDom_production_min.hydrate = function(a, b, c) {
            if (!pl(b)) throw Error(p(200));
            return sl(null, a, b, !0, c);
        };
        reactDom_production_min.hydrateRoot = function(a, b, c) {
            if (!ol(a)) throw Error(p(405));
            var d = null != c && c.hydratedSources || null, e = !1, f = "", g = ll;
            null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), 
            void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
            b = fl(b, null, a, 1, null != c ? c : null, e, !1, f, g);
            a[uf] = b.current;
            sf(a);
            if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), 
            null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [ c, e ] : b.mutableSourceEagerHydrationData.push(c, e);
            return new nl(b);
        };
        reactDom_production_min.render = function(a, b, c) {
            if (!pl(b)) throw Error(p(200));
            return sl(null, a, b, !1, c);
        };
        reactDom_production_min.unmountComponentAtNode = function(a) {
            if (!pl(a)) throw Error(p(40));
            return a._reactRootContainer ? (Sk((function() {
                sl(null, null, a, !1, (function() {
                    a._reactRootContainer = null;
                    a[uf] = null;
                }));
            })), !0) : !1;
        };
        reactDom_production_min.unstable_batchedUpdates = Rk;
        reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
            if (!pl(c)) throw Error(p(200));
            if (null == a || void 0 === a._reactInternals) throw Error(p(38));
            return sl(a, b, c, !1, d);
        };
        reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
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
    function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }
        return target;
    }
    function _extends() {
        _extends = Object.assign ? Object.assign.bind() : function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        return _extends.apply(this, arguments);
    }
    var reactIs$1 = {
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
    var hasRequiredReactIs;
    function requireReactIs() {
        if (hasRequiredReactIs) return reactIs$1.exports;
        hasRequiredReactIs = 1;
        {
            reactIs$1.exports = requireReactIs_production_min();
        }
        return reactIs$1.exports;
    }
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
    function isPlainObject(item) {
        if (typeof item !== "object" || item === null) {
            return false;
        }
        const prototype = Object.getPrototypeOf(item);
        return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
    }
    function deepClone(source) {
        if (!isPlainObject(source)) {
            return source;
        }
        const output = {};
        Object.keys(source).forEach((key => {
            output[key] = deepClone(source[key]);
        }));
        return output;
    }
    function deepmerge(target, source, options = {
        clone: true
    }) {
        const output = options.clone ? _extends({}, target) : target;
        if (isPlainObject(target) && isPlainObject(source)) {
            Object.keys(source).forEach((key => {
                if (key === "__proto__") {
                    return;
                }
                if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
                    output[key] = deepmerge(target[key], source[key], options);
                } else if (options.clone) {
                    output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
                } else {
                    output[key] = source[key];
                }
            }));
        }
        return output;
    }
    function formatMuiErrorMessage(code) {
        let url = "https://mui.com/production-error/?code=" + code;
        for (let i = 1; i < arguments.length; i += 1) {
            url += "&args[]=" + encodeURIComponent(arguments[i]);
        }
        return "Minified MUI error #" + code + "; visit " + url + " for the full message.";
    }
    function capitalize(string) {
        if (typeof string !== "string") {
            throw new Error(formatMuiErrorMessage(7));
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
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
    const useEnhancedEffect = typeof window !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
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
    let hadKeyboardEvent = true;
    let hadFocusVisibleRecently = false;
    let hadFocusVisibleRecentlyTimeout;
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
                window.clearTimeout(hadFocusVisibleRecentlyTimeout);
                hadFocusVisibleRecentlyTimeout = window.setTimeout((() => {
                    hadFocusVisibleRecently = false;
                }), 100);
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
    function resolveProps(defaultProps, props) {
        const output = _extends({}, props);
        Object.keys(defaultProps).forEach((propName => {
            if (propName.toString().match(/^(components|slots)$/)) {
                output[propName] = _extends({}, defaultProps[propName], output[propName]);
            } else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
                const defaultSlotProps = defaultProps[propName] || {};
                const slotProps = props[propName];
                output[propName] = {};
                if (!slotProps || !Object.keys(slotProps)) {
                    output[propName] = defaultSlotProps;
                } else if (!defaultSlotProps || !Object.keys(defaultSlotProps)) {
                    output[propName] = slotProps;
                } else {
                    output[propName] = _extends({}, slotProps);
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
    const globalStateClassesMapping = {
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
        const globalStateClass = globalStateClassesMapping[slot];
        return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator.generate(componentName)}-${slot}`;
    }
    function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
        const result = {};
        slots.forEach((slot => {
            result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
        }));
        return result;
    }
    function memoize$1(fn) {
        var cache = Object.create(null);
        return function(arg) {
            if (cache[arg] === undefined) cache[arg] = fn(arg);
            return cache[arg];
        };
    }
    var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    var isPropValid = memoize$1((function(prop) {
        return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
    }));
    function sheetForTag(tag) {
        if (tag.sheet) {
            return tag.sheet;
        }
        for (var i = 0; i < document.styleSheets.length; i++) {
            if (document.styleSheets[i].ownerNode === tag) {
                return document.styleSheets[i];
            }
        }
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
            this.isSpeedy = options.speedy === undefined ? "production" === "production" : options.speedy;
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
                return tag.parentNode && tag.parentNode.removeChild(tag);
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
        var value = element.value, parent = element.parent;
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
    var isBrowser$4 = typeof document !== "undefined";
    var getServerStylisCache = isBrowser$4 ? undefined : weakMemoize((function() {
        return memoize$1((function() {
            var cache = {};
            return function(name) {
                return cache[name];
            };
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
        if (isBrowser$4) {
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
    var reactIs = requireReactIs();
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
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    var isBrowser$3 = typeof document !== "undefined";
    function getRegisteredStyles(registered, registeredStyles, classNames) {
        var rawClassName = "";
        classNames.split(" ").forEach((function(className) {
            if (registered[className] !== undefined) {
                registeredStyles.push(registered[className] + ";");
            } else {
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
    var noComponentSelectorMessage = "Component selectors can only be used in conjunction with " + "@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware " + "compiler transform.";
    function handleInterpolation(mergedProps, registered, interpolation) {
        if (interpolation == null) {
            return "";
        }
        if (interpolation.__emotion_styles !== undefined) {
            return interpolation;
        }
        switch (typeof interpolation) {
          case "boolean":
            {
                return "";
            }

          case "object":
            {
                if (interpolation.anim === 1) {
                    cursor = {
                        name: interpolation.name,
                        styles: interpolation.styles,
                        next: cursor
                    };
                    return interpolation.name;
                }
                if (interpolation.styles !== undefined) {
                    var next = interpolation.next;
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
                    var styles = interpolation.styles + ";";
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
        if (registered == null) {
            return interpolation;
        }
        var cached = registered[interpolation];
        return cached !== undefined ? cached : interpolation;
    }
    function createStringFromObject(mergedProps, registered, obj) {
        var string = "";
        if (Array.isArray(obj)) {
            for (var i = 0; i < obj.length; i++) {
                string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
            }
        } else {
            for (var _key in obj) {
                var value = obj[_key];
                if (typeof value !== "object") {
                    if (registered != null && registered[value] !== undefined) {
                        string += _key + "{" + registered[value] + "}";
                    } else if (isProcessableValue(value)) {
                        string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
                    }
                } else {
                    if (_key === "NO_COMPONENT_SELECTOR" && "production" !== "production") {
                        throw new Error(noComponentSelectorMessage);
                    }
                    if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === undefined)) {
                        for (var _i = 0; _i < value.length; _i++) {
                            if (isProcessableValue(value[_i])) {
                                string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
                            }
                        }
                    } else {
                        var interpolated = handleInterpolation(mergedProps, registered, value);
                        switch (_key) {
                          case "animation":
                          case "animationName":
                            {
                                string += processStyleName(_key) + ":" + interpolated + ";";
                                break;
                            }

                          default:
                            {
                                string += _key + "{" + interpolated + "}";
                            }
                        }
                    }
                }
            }
        }
        return string;
    }
    var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
    var cursor;
    var serializeStyles = function serializeStyles(args, registered, mergedProps) {
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
            styles += strings[0];
        }
        for (var i = 1; i < args.length; i++) {
            styles += handleInterpolation(mergedProps, registered, args[i]);
            if (stringMode) {
                styles += strings[i];
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
    };
    var isBrowser$2 = typeof document !== "undefined";
    var syncFallback = function syncFallback(create) {
        return create();
    };
    var useInsertionEffect = React$1["useInsertion" + "Effect"] ? React$1["useInsertion" + "Effect"] : false;
    var useInsertionEffectAlwaysWithSyncFallback = !isBrowser$2 ? syncFallback : useInsertionEffect || syncFallback;
    var isBrowser$1 = typeof document !== "undefined";
    var EmotionCacheContext = reactExports.createContext(typeof HTMLElement !== "undefined" ? createCache({
        key: "css"
    }) : null);
    EmotionCacheContext.Provider;
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
    function css() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return serializeStyles(args);
    }
    var keyframes = function keyframes() {
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
    };
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
    var isBrowser = typeof document !== "undefined";
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
    var createStyled$1 = function createStyled(tag, options) {
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
                styles.push(args[0][0]);
                var len = args.length;
                var i = 1;
                for (;i < len; i++) {
                    styles.push(args[i], args[0][i]);
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
                newProps.ref = ref;
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
                    if (targetClassName === undefined && "production" !== "production") {
                        return "NO_COMPONENT_SELECTOR";
                    }
                    return "." + targetClassName;
                }
            });
            Styled.withComponent = function(nextTag, nextOptions) {
                return createStyled(nextTag, _extends({}, options, nextOptions, {
                    shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
                })).apply(void 0, styles);
            };
            return Styled;
        };
    };
    var tags = [ "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan" ];
    var newStyled = createStyled$1.bind();
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
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
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
    /**
   * @mui/styled-engine v5.15.4
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */    function styled$1(tag, options) {
        const stylesFactory = newStyled(tag, options);
        return stylesFactory;
    }
    const internal_processStyles = (tag, processor) => {
        if (Array.isArray(tag.__emotion_styles)) {
            tag.__emotion_styles = processor(tag.__emotion_styles);
        }
    };
    const _excluded$j = [ "values", "unit", "step" ];
    const sortBreakpointsValues = values => {
        const breakpointsAsArray = Object.keys(values).map((key => ({
            key: key,
            val: values[key]
        }))) || [];
        breakpointsAsArray.sort(((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val));
        return breakpointsAsArray.reduce(((acc, obj) => _extends({}, acc, {
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
        }, unit: unit = "px", step: step = 5} = breakpoints, other = _objectWithoutPropertiesLoose(breakpoints, _excluded$j);
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
        return _extends({
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
    var shape$1 = shape;
    function merge(acc, item) {
        if (!item) {
            return acc;
        }
        return deepmerge(acc, item, {
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
    function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
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
    function style$1(options) {
        const {prop: prop, cssProperty: cssProperty = options.prop, themeKey: themeKey, transform: transform} = options;
        const fn = props => {
            if (props[prop] == null) {
                return null;
            }
            const propValue = props[prop];
            const theme = props.theme;
            const themeMapping = getPath(theme, themeKey) || {};
            const styleFromPropValue = propValueFinal => {
                let value = getStyleValue(themeMapping, transform, propValueFinal);
                if (propValueFinal === value && typeof propValueFinal === "string") {
                    value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
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
    function style(props, keys) {
        const transformer = createUnarySpacing(props.theme);
        return Object.keys(props).map((prop => resolveCssProperty(props, keys, prop, transformer))).reduce(merge, {});
    }
    function margin(props) {
        return style(props, marginKeys);
    }
    margin.propTypes = {};
    margin.filterProps = marginKeys;
    function padding(props) {
        return style(props, paddingKeys);
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
        return style$1({
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
    const gridColumn = style$1({
        prop: "gridColumn"
    });
    const gridRow = style$1({
        prop: "gridRow"
    });
    const gridAutoFlow = style$1({
        prop: "gridAutoFlow"
    });
    const gridAutoColumns = style$1({
        prop: "gridAutoColumns"
    });
    const gridAutoRows = style$1({
        prop: "gridAutoRows"
    });
    const gridTemplateColumns = style$1({
        prop: "gridTemplateColumns"
    });
    const gridTemplateRows = style$1({
        prop: "gridTemplateRows"
    });
    const gridTemplateAreas = style$1({
        prop: "gridTemplateAreas"
    });
    const gridArea = style$1({
        prop: "gridArea"
    });
    compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
    function paletteTransform(value, userValue) {
        if (userValue === "grey") {
            return userValue;
        }
        return value;
    }
    const color = style$1({
        prop: "color",
        themeKey: "palette",
        transform: paletteTransform
    });
    const bgcolor = style$1({
        prop: "bgcolor",
        cssProperty: "backgroundColor",
        themeKey: "palette",
        transform: paletteTransform
    });
    const backgroundColor = style$1({
        prop: "backgroundColor",
        themeKey: "palette",
        transform: paletteTransform
    });
    compose(color, bgcolor, backgroundColor);
    function sizingTransform(value) {
        return value <= 1 && value !== 0 ? `${value * 100}%` : value;
    }
    const width = style$1({
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
    const minWidth = style$1({
        prop: "minWidth",
        transform: sizingTransform
    });
    const height = style$1({
        prop: "height",
        transform: sizingTransform
    });
    const maxHeight = style$1({
        prop: "maxHeight",
        transform: sizingTransform
    });
    const minHeight = style$1({
        prop: "minHeight",
        transform: sizingTransform
    });
    style$1({
        prop: "size",
        cssProperty: "width",
        transform: sizingTransform
    });
    style$1({
        prop: "size",
        cssProperty: "height",
        transform: sizingTransform
    });
    const boxSizing = style$1({
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
    var defaultSxConfig$1 = defaultSxConfig;
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
                let value = getStyleValue(themeMapping, transform, propValueFinal);
                if (propValueFinal === value && typeof propValueFinal === "string") {
                    value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
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
            const config = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig$1;
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
    const styleFunctionSx = unstable_createStyleFunctionSx();
    styleFunctionSx.filterProps = [ "sx" ];
    const _excluded$i = [ "breakpoints", "palette", "spacing", "shape" ];
    function createTheme$1(options = {}, ...args) {
        const {breakpoints: breakpointsInput = {}, palette: paletteInput = {}, spacing: spacingInput, shape: shapeInput = {}} = options, other = _objectWithoutPropertiesLoose(options, _excluded$i);
        const breakpoints = createBreakpoints(breakpointsInput);
        const spacing = createSpacing(spacingInput);
        let muiTheme = deepmerge({
            breakpoints: breakpoints,
            direction: "ltr",
            components: {},
            palette: _extends({
                mode: "light"
            }, paletteInput),
            spacing: spacing,
            shape: _extends({}, shape$1, shapeInput)
        }, other);
        muiTheme = args.reduce(((acc, argument) => deepmerge(acc, argument)), muiTheme);
        muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig$1, other == null ? void 0 : other.unstable_sxConfig);
        muiTheme.unstable_sx = function sx(props) {
            return styleFunctionSx({
                sx: props,
                theme: this
            });
        };
        return muiTheme;
    }
    function isObjectEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    function useTheme$2(defaultTheme = null) {
        const contextTheme = reactExports.useContext(ThemeContext);
        return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
    }
    const systemDefaultTheme$1 = createTheme$1();
    function useTheme$1(defaultTheme = systemDefaultTheme$1) {
        return useTheme$2(defaultTheme);
    }
    const _excluded$h = [ "sx" ];
    const splitProps = props => {
        var _props$theme$unstable, _props$theme;
        const result = {
            systemProps: {},
            otherProps: {}
        };
        const config = (_props$theme$unstable = props == null || (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : defaultSxConfig$1;
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
        const {sx: inSx} = props, other = _objectWithoutPropertiesLoose(props, _excluded$h);
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
                return _extends({}, systemProps, result);
            };
        } else {
            finalSx = _extends({}, systemProps, inSx);
        }
        return _extends({}, otherProps, {
            sx: finalSx
        });
    }
    const _excluded$g = [ "variant" ];
    function isEmpty$1(string) {
        return string.length === 0;
    }
    function propsToClassKey(props) {
        const {variant: variant} = props, other = _objectWithoutPropertiesLoose(props, _excluded$g);
        let classKey = variant || "";
        Object.keys(other).sort().forEach((key => {
            if (key === "color") {
                classKey += isEmpty$1(classKey) ? props[key] : capitalize(props[key]);
            } else {
                classKey += `${isEmpty$1(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
            }
        }));
        return classKey;
    }
    const _excluded$f = [ "name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver" ];
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    function isStringTag(tag) {
        return typeof tag === "string" && tag.charCodeAt(0) > 96;
    }
    const getStyleOverrides = (name, theme) => {
        if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
            return theme.components[name].styleOverrides;
        }
        return null;
    };
    const transformVariants = variants => {
        let numOfCallbacks = 0;
        const variantsStyles = {};
        if (variants) {
            variants.forEach((definition => {
                let key = "";
                if (typeof definition.props === "function") {
                    key = `callback${numOfCallbacks}`;
                    numOfCallbacks += 1;
                } else {
                    key = propsToClassKey(definition.props);
                }
                variantsStyles[key] = definition.style;
            }));
        }
        return variantsStyles;
    };
    const getVariantStyles = (name, theme) => {
        let variants = [];
        if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
            variants = theme.components[name].variants;
        }
        return transformVariants(variants);
    };
    const variantsResolver = (props, styles, variants) => {
        const {ownerState: ownerState = {}} = props;
        const variantsStyles = [];
        let numOfCallbacks = 0;
        if (variants) {
            variants.forEach((variant => {
                let isMatch = true;
                if (typeof variant.props === "function") {
                    const propsToCheck = _extends({}, props, ownerState);
                    isMatch = variant.props(propsToCheck);
                } else {
                    Object.keys(variant.props).forEach((key => {
                        if (ownerState[key] !== variant.props[key] && props[key] !== variant.props[key]) {
                            isMatch = false;
                        }
                    }));
                }
                if (isMatch) {
                    if (typeof variant.props === "function") {
                        variantsStyles.push(styles[`callback${numOfCallbacks}`]);
                    } else {
                        variantsStyles.push(styles[propsToClassKey(variant.props)]);
                    }
                }
                if (typeof variant.props === "function") {
                    numOfCallbacks += 1;
                }
            }));
        }
        return variantsStyles;
    };
    const themeVariantsResolver = (props, styles, theme, name) => {
        var _theme$components;
        const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[name]) == null ? void 0 : _theme$components.variants;
        return variantsResolver(props, styles, themeVariants);
    };
    function shouldForwardProp(prop) {
        return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
    }
    const systemDefaultTheme = createTheme$1();
    const lowercaseFirstLetter = string => {
        if (!string) {
            return string;
        }
        return string.charAt(0).toLowerCase() + string.slice(1);
    };
    function resolveTheme({defaultTheme: defaultTheme, theme: theme, themeId: themeId}) {
        return isEmpty(theme) ? defaultTheme : theme[themeId] || theme;
    }
    function defaultOverridesResolver(slot) {
        if (!slot) {
            return null;
        }
        return (props, styles) => styles[slot];
    }
    const muiStyledFunctionResolver = ({styledArg: styledArg, props: props, defaultTheme: defaultTheme, themeId: themeId}) => {
        const resolvedStyles = styledArg(_extends({}, props, {
            theme: resolveTheme(_extends({}, props, {
                defaultTheme: defaultTheme,
                themeId: themeId
            }))
        }));
        let optionalVariants;
        if (resolvedStyles && resolvedStyles.variants) {
            optionalVariants = resolvedStyles.variants;
            delete resolvedStyles.variants;
        }
        if (optionalVariants) {
            const variantsStyles = variantsResolver(props, transformVariants(optionalVariants), optionalVariants);
            return [ resolvedStyles, ...variantsStyles ];
        }
        return resolvedStyles;
    };
    function createStyled(input = {}) {
        const {themeId: themeId, defaultTheme: defaultTheme = systemDefaultTheme, rootShouldForwardProp: rootShouldForwardProp = shouldForwardProp, slotShouldForwardProp: slotShouldForwardProp = shouldForwardProp} = input;
        const systemSx = props => styleFunctionSx(_extends({}, props, {
            theme: resolveTheme(_extends({}, props, {
                defaultTheme: defaultTheme,
                themeId: themeId
            }))
        }));
        systemSx.__mui_systemSx = true;
        return (tag, inputOptions = {}) => {
            internal_processStyles(tag, (styles => styles.filter((style => !(style != null && style.__mui_systemSx)))));
            const {name: componentName, slot: componentSlot, skipVariantsResolver: inputSkipVariantsResolver, skipSx: inputSkipSx, overridesResolver: overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot))} = inputOptions, options = _objectWithoutPropertiesLoose(inputOptions, _excluded$f);
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
            const defaultStyledResolver = styled$1(tag, _extends({
                shouldForwardProp: shouldForwardPropOption,
                label: label
            }, options));
            const muiStyledResolver = (styleArg, ...expressions) => {
                const expressionsWithDefaultTheme = expressions ? expressions.map((stylesArg => {
                    if (typeof stylesArg === "function" && stylesArg.__emotion_real !== stylesArg) {
                        return props => muiStyledFunctionResolver({
                            styledArg: stylesArg,
                            props: props,
                            defaultTheme: defaultTheme,
                            themeId: themeId
                        });
                    }
                    if (isPlainObject(stylesArg)) {
                        let transformedStylesArg = stylesArg;
                        let styledArgVariants;
                        if (stylesArg && stylesArg.variants) {
                            styledArgVariants = stylesArg.variants;
                            delete transformedStylesArg.variants;
                            transformedStylesArg = props => {
                                let result = stylesArg;
                                const variantStyles = variantsResolver(props, transformVariants(styledArgVariants), styledArgVariants);
                                variantStyles.forEach((variantStyle => {
                                    result = deepmerge(result, variantStyle);
                                }));
                                return result;
                            };
                        }
                        return transformedStylesArg;
                    }
                    return stylesArg;
                })) : [];
                let transformedStyleArg = styleArg;
                if (isPlainObject(styleArg)) {
                    let styledArgVariants;
                    if (styleArg && styleArg.variants) {
                        styledArgVariants = styleArg.variants;
                        delete transformedStyleArg.variants;
                        transformedStyleArg = props => {
                            let result = styleArg;
                            const variantStyles = variantsResolver(props, transformVariants(styledArgVariants), styledArgVariants);
                            variantStyles.forEach((variantStyle => {
                                result = deepmerge(result, variantStyle);
                            }));
                            return result;
                        };
                    }
                } else if (typeof styleArg === "function" && styleArg.__emotion_real !== styleArg) {
                    transformedStyleArg = props => muiStyledFunctionResolver({
                        styledArg: styleArg,
                        props: props,
                        defaultTheme: defaultTheme,
                        themeId: themeId
                    });
                }
                if (componentName && overridesResolver) {
                    expressionsWithDefaultTheme.push((props => {
                        const theme = resolveTheme(_extends({}, props, {
                            defaultTheme: defaultTheme,
                            themeId: themeId
                        }));
                        const styleOverrides = getStyleOverrides(componentName, theme);
                        if (styleOverrides) {
                            const resolvedStyleOverrides = {};
                            Object.entries(styleOverrides).forEach((([slotKey, slotStyle]) => {
                                resolvedStyleOverrides[slotKey] = typeof slotStyle === "function" ? slotStyle(_extends({}, props, {
                                    theme: theme
                                })) : slotStyle;
                            }));
                            return overridesResolver(props, resolvedStyleOverrides);
                        }
                        return null;
                    }));
                }
                if (componentName && !skipVariantsResolver) {
                    expressionsWithDefaultTheme.push((props => {
                        const theme = resolveTheme(_extends({}, props, {
                            defaultTheme: defaultTheme,
                            themeId: themeId
                        }));
                        return themeVariantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
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
    function getThemeProps(params) {
        const {theme: theme, name: name, props: props} = params;
        if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
            return props;
        }
        return resolveProps(theme.components[name].defaultProps, props);
    }
    function useThemeProps$1({props: props, name: name, defaultTheme: defaultTheme, themeId: themeId}) {
        let theme = useTheme$1(defaultTheme);
        if (themeId) {
            theme = theme[themeId] || theme;
        }
        const mergedProps = getThemeProps({
            theme: theme,
            name: name,
            props: props
        });
        return mergedProps;
    }
    function clamp(value, min = 0, max = 1) {
        return Math.min(Math.max(min, value), max);
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
            throw new Error(formatMuiErrorMessage(9, color));
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
                throw new Error(formatMuiErrorMessage(10, colorSpace));
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
        value = clamp(value);
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
    function darken(color, coefficient) {
        color = decomposeColor(color);
        coefficient = clamp(coefficient);
        if (color.type.indexOf("hsl") !== -1) {
            color.values[2] *= 1 - coefficient;
        } else if (color.type.indexOf("rgb") !== -1 || color.type.indexOf("color") !== -1) {
            for (let i = 0; i < 3; i += 1) {
                color.values[i] *= 1 - coefficient;
            }
        }
        return recomposeColor(color);
    }
    function lighten(color, coefficient) {
        color = decomposeColor(color);
        coefficient = clamp(coefficient);
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
    function createMixins(breakpoints, mixins) {
        return _extends({
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
    const common = {
        black: "#000",
        white: "#fff"
    };
    var common$1 = common;
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
    var grey$1 = grey;
    const purple = {
        50: "#f3e5f5",
        100: "#e1bee7",
        200: "#ce93d8",
        300: "#ba68c8",
        400: "#ab47bc",
        500: "#9c27b0",
        600: "#8e24aa",
        700: "#7b1fa2",
        800: "#6a1b9a",
        900: "#4a148c",
        A100: "#ea80fc",
        A200: "#e040fb",
        A400: "#d500f9",
        A700: "#aa00ff"
    };
    var purple$1 = purple;
    const red = {
        50: "#ffebee",
        100: "#ffcdd2",
        200: "#ef9a9a",
        300: "#e57373",
        400: "#ef5350",
        500: "#f44336",
        600: "#e53935",
        700: "#d32f2f",
        800: "#c62828",
        900: "#b71c1c",
        A100: "#ff8a80",
        A200: "#ff5252",
        A400: "#ff1744",
        A700: "#d50000"
    };
    var red$1 = red;
    const orange = {
        50: "#fff3e0",
        100: "#ffe0b2",
        200: "#ffcc80",
        300: "#ffb74d",
        400: "#ffa726",
        500: "#ff9800",
        600: "#fb8c00",
        700: "#f57c00",
        800: "#ef6c00",
        900: "#e65100",
        A100: "#ffd180",
        A200: "#ffab40",
        A400: "#ff9100",
        A700: "#ff6d00"
    };
    var orange$1 = orange;
    const blue = {
        50: "#e3f2fd",
        100: "#bbdefb",
        200: "#90caf9",
        300: "#64b5f6",
        400: "#42a5f5",
        500: "#2196f3",
        600: "#1e88e5",
        700: "#1976d2",
        800: "#1565c0",
        900: "#0d47a1",
        A100: "#82b1ff",
        A200: "#448aff",
        A400: "#2979ff",
        A700: "#2962ff"
    };
    var blue$1 = blue;
    const lightBlue = {
        50: "#e1f5fe",
        100: "#b3e5fc",
        200: "#81d4fa",
        300: "#4fc3f7",
        400: "#29b6f6",
        500: "#03a9f4",
        600: "#039be5",
        700: "#0288d1",
        800: "#0277bd",
        900: "#01579b",
        A100: "#80d8ff",
        A200: "#40c4ff",
        A400: "#00b0ff",
        A700: "#0091ea"
    };
    var lightBlue$1 = lightBlue;
    const green = {
        50: "#e8f5e9",
        100: "#c8e6c9",
        200: "#a5d6a7",
        300: "#81c784",
        400: "#66bb6a",
        500: "#4caf50",
        600: "#43a047",
        700: "#388e3c",
        800: "#2e7d32",
        900: "#1b5e20",
        A100: "#b9f6ca",
        A200: "#69f0ae",
        A400: "#00e676",
        A700: "#00c853"
    };
    var green$1 = green;
    const _excluded$e = [ "mode", "contrastThreshold", "tonalOffset" ];
    const light = {
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.6)",
            disabled: "rgba(0, 0, 0, 0.38)"
        },
        divider: "rgba(0, 0, 0, 0.12)",
        background: {
            paper: common$1.white,
            default: common$1.white
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
            primary: common$1.white,
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
            active: common$1.white,
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
                intent.light = lighten(intent.main, tonalOffsetLight);
            } else if (direction === "dark") {
                intent.dark = darken(intent.main, tonalOffsetDark);
            }
        }
    }
    function getDefaultPrimary(mode = "light") {
        if (mode === "dark") {
            return {
                main: blue$1[200],
                light: blue$1[50],
                dark: blue$1[400]
            };
        }
        return {
            main: blue$1[700],
            light: blue$1[400],
            dark: blue$1[800]
        };
    }
    function getDefaultSecondary(mode = "light") {
        if (mode === "dark") {
            return {
                main: purple$1[200],
                light: purple$1[50],
                dark: purple$1[400]
            };
        }
        return {
            main: purple$1[500],
            light: purple$1[300],
            dark: purple$1[700]
        };
    }
    function getDefaultError(mode = "light") {
        if (mode === "dark") {
            return {
                main: red$1[500],
                light: red$1[300],
                dark: red$1[700]
            };
        }
        return {
            main: red$1[700],
            light: red$1[400],
            dark: red$1[800]
        };
    }
    function getDefaultInfo(mode = "light") {
        if (mode === "dark") {
            return {
                main: lightBlue$1[400],
                light: lightBlue$1[300],
                dark: lightBlue$1[700]
            };
        }
        return {
            main: lightBlue$1[700],
            light: lightBlue$1[500],
            dark: lightBlue$1[900]
        };
    }
    function getDefaultSuccess(mode = "light") {
        if (mode === "dark") {
            return {
                main: green$1[400],
                light: green$1[300],
                dark: green$1[700]
            };
        }
        return {
            main: green$1[800],
            light: green$1[500],
            dark: green$1[900]
        };
    }
    function getDefaultWarning(mode = "light") {
        if (mode === "dark") {
            return {
                main: orange$1[400],
                light: orange$1[300],
                dark: orange$1[700]
            };
        }
        return {
            main: "#ed6c02",
            light: orange$1[500],
            dark: orange$1[900]
        };
    }
    function createPalette(palette) {
        const {mode: mode = "light", contrastThreshold: contrastThreshold = 3, tonalOffset: tonalOffset = .2} = palette, other = _objectWithoutPropertiesLoose(palette, _excluded$e);
        const primary = palette.primary || getDefaultPrimary(mode);
        const secondary = palette.secondary || getDefaultSecondary(mode);
        const error = palette.error || getDefaultError(mode);
        const info = palette.info || getDefaultInfo(mode);
        const success = palette.success || getDefaultSuccess(mode);
        const warning = palette.warning || getDefaultWarning(mode);
        function getContrastText(background) {
            const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
            return contrastText;
        }
        const augmentColor = ({color: color, name: name, mainShade: mainShade = 500, lightShade: lightShade = 300, darkShade: darkShade = 700}) => {
            color = _extends({}, color);
            if (!color.main && color[mainShade]) {
                color.main = color[mainShade];
            }
            if (!color.hasOwnProperty("main")) {
                throw new Error(formatMuiErrorMessage(11, name ? ` (${name})` : "", mainShade));
            }
            if (typeof color.main !== "string") {
                throw new Error(formatMuiErrorMessage(12, name ? ` (${name})` : "", JSON.stringify(color.main)));
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
        const paletteOutput = deepmerge(_extends({
            common: _extends({}, common$1),
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
            grey: grey$1,
            contrastThreshold: contrastThreshold,
            getContrastText: getContrastText,
            augmentColor: augmentColor,
            tonalOffset: tonalOffset
        }, modes[mode]), other);
        return paletteOutput;
    }
    const _excluded$d = [ "fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem" ];
    function round(value) {
        return Math.round(value * 1e5) / 1e5;
    }
    const caseAllCaps = {
        textTransform: "uppercase"
    };
    const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
    function createTypography(palette, typography) {
        const _ref = typeof typography === "function" ? typography(palette) : typography, {fontFamily: fontFamily = defaultFontFamily, fontSize: fontSize = 14, fontWeightLight: fontWeightLight = 300, fontWeightRegular: fontWeightRegular = 400, fontWeightMedium: fontWeightMedium = 500, fontWeightBold: fontWeightBold = 700, htmlFontSize: htmlFontSize = 16, allVariants: allVariants, pxToRem: pxToRem2} = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded$d);
        const coef = fontSize / 14;
        const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);
        const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends({
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
        return deepmerge(_extends({
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
    const _excluded$c = [ "duration", "easing", "delay" ];
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
        const mergedEasing = _extends({}, easing, inputTransitions.easing);
        const mergedDuration = _extends({}, duration, inputTransitions.duration);
        const create = (props = [ "all" ], options = {}) => {
            const {duration: durationOption = mergedDuration.standard, easing: easingOption = mergedEasing.easeInOut, delay: delay = 0} = options;
            _objectWithoutPropertiesLoose(options, _excluded$c);
            return (Array.isArray(props) ? props : [ props ]).map((animatedProp => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`)).join(",");
        };
        return _extends({
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
    var zIndex$1 = zIndex;
    const _excluded$b = [ "breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape" ];
    function createTheme(options = {}, ...args) {
        const {mixins: mixinsInput = {}, palette: paletteInput = {}, transitions: transitionsInput = {}, typography: typographyInput = {}} = options, other = _objectWithoutPropertiesLoose(options, _excluded$b);
        if (options.vars) {
            throw new Error(formatMuiErrorMessage(18));
        }
        const palette = createPalette(paletteInput);
        const systemTheme = createTheme$1(options);
        let muiTheme = deepmerge(systemTheme, {
            mixins: createMixins(systemTheme.breakpoints, mixinsInput),
            palette: palette,
            shadows: shadows.slice(),
            typography: createTypography(palette, typographyInput),
            transitions: createTransitions(transitionsInput),
            zIndex: _extends({}, zIndex$1)
        });
        muiTheme = deepmerge(muiTheme, other);
        muiTheme = args.reduce(((acc, argument) => deepmerge(acc, argument)), muiTheme);
        muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig$1, other == null ? void 0 : other.unstable_sxConfig);
        muiTheme.unstable_sx = function sx(props) {
            return styleFunctionSx({
                sx: props,
                theme: this
            });
        };
        return muiTheme;
    }
    const defaultTheme = createTheme();
    var defaultTheme$1 = defaultTheme;
    var THEME_ID = "$$material";
    function useThemeProps({props: props, name: name}) {
        return useThemeProps$1({
            props: props,
            name: name,
            defaultTheme: defaultTheme$1,
            themeId: THEME_ID
        });
    }
    const rootShouldForwardProp = prop => shouldForwardProp(prop) && prop !== "classes";
    const styled = createStyled({
        themeId: THEME_ID,
        defaultTheme: defaultTheme$1,
        rootShouldForwardProp: rootShouldForwardProp
    });
    const html = (theme, enableColorScheme) => _extends({
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        boxSizing: "border-box",
        WebkitTextSizeAdjust: "100%"
    }, enableColorScheme && !theme.vars && {
        colorScheme: theme.palette.mode
    });
    const body = theme => _extends({
        color: (theme.vars || theme).palette.text.primary
    }, theme.typography.body1, {
        backgroundColor: (theme.vars || theme).palette.background.default,
        "@media print": {
            backgroundColor: (theme.vars || theme).palette.common.white
        }
    });
    function getScopedCssBaselineUtilityClass(slot) {
        return generateUtilityClass("MuiScopedCssBaseline", slot);
    }
    generateUtilityClasses("MuiScopedCssBaseline", [ "root" ]);
    const _excluded$a = [ "className", "component", "enableColorScheme" ];
    const useUtilityClasses$7 = ownerState => {
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
        return _extends({}, html(theme, ownerState.enableColorScheme), body(theme), {
            "& *, & *::before, & *::after": {
                boxSizing: "inherit"
            },
            "& strong, & b": {
                fontWeight: theme.typography.fontWeightBold
            }
        }, colorSchemeStyles);
    }));
    const ScopedCssBaseline = reactExports.forwardRef((function ScopedCssBaseline(inProps, ref) {
        const props = useThemeProps({
            props: inProps,
            name: "MuiScopedCssBaseline"
        });
        const {className: className, component: component = "div"} = props, other = _objectWithoutPropertiesLoose(props, _excluded$a);
        const ownerState = _extends({}, props, {
            component: component
        });
        const classes = useUtilityClasses$7(ownerState);
        return jsxRuntimeExports.jsx(ScopedCssBaselineRoot, _extends({
            as: component,
            className: clsx(classes.root, className),
            ref: ref,
            ownerState: ownerState
        }, other));
    }));
    var ScopedCssBaseline$1 = ScopedCssBaseline;
    function isHostComponent(element) {
        return typeof element === "string";
    }
    function appendOwnerState(elementType, otherProps, ownerState) {
        if (elementType === undefined || isHostComponent(elementType)) {
            return otherProps;
        }
        return _extends({}, otherProps, {
            ownerState: _extends({}, otherProps.ownerState, ownerState)
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
    function resolveComponentProps(componentProps, ownerState, slotState) {
        if (typeof componentProps === "function") {
            return componentProps(ownerState, slotState);
        }
        return componentProps;
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
            const mergedStyle = _extends({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
            const props = _extends({}, additionalProps, externalForwardedProps, externalSlotProps);
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
        const eventHandlers = extractEventHandlers(_extends({}, externalForwardedProps, externalSlotProps));
        const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
        const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
        const internalSlotProps = getSlotProps(eventHandlers);
        const joinedClasses = clsx(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
        const mergedStyle = _extends({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
        const props = _extends({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
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
    const _excluded$9 = [ "elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps" ];
    function useSlotProps(parameters) {
        var _parameters$additiona;
        const {elementType: elementType, externalSlotProps: externalSlotProps, ownerState: ownerState, skipResolvingSlotProps: skipResolvingSlotProps = false} = parameters, rest = _objectWithoutPropertiesLoose(parameters, _excluded$9);
        const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState);
        const {props: mergedProps, internalRef: internalRef} = mergeSlotProps(_extends({}, rest, {
            externalSlotProps: resolvedComponentsProps
        }));
        const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
        const props = appendOwnerState(elementType, _extends({}, mergedProps, {
            ref: ref
        }), ownerState);
        return props;
    }
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
    function getContainer$1(container) {
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
            const resolvedContainer = getContainer$1(container) || getDoc().body;
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
            const externalEventHandlers = _extends({}, propsEventHandlers, otherHandlers);
            return _extends({
                role: "presentation"
            }, externalEventHandlers, {
                onKeyDown: createHandleKeyDown(externalEventHandlers),
                ref: handleRef
            });
        };
        const getBackdropProps = (otherHandlers = {}) => {
            const externalEventHandlers = otherHandlers;
            return _extends({
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
        const handleRef = useForkRef(children.ref, rootRef);
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
    const Portal = reactExports.forwardRef((function Portal(props, forwardedRef) {
        const {children: children, container: container, disablePortal: disablePortal = false} = props;
        const [mountNode, setMountNode] = reactExports.useState(null);
        const handleRef = useForkRef(reactExports.isValidElement(children) ? children.ref : null, forwardedRef);
        useEnhancedEffect((() => {
            if (!disablePortal) {
                setMountNode(getContainer(container) || document.body);
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
    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
        return _setPrototypeOf(o, p);
    }
    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
    }
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
    var Transition$1 = Transition;
    function _assertThisInitialized(self) {
        if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
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
                    var children = _extends({}, state.children);
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
    var TransitionGroup$1 = TransitionGroup;
    function useTheme() {
        const theme = useTheme$1(defaultTheme$1);
        return theme[THEME_ID] || theme;
    }
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
    const _excluded$8 = [ "addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent" ];
    const styles = {
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
        const {addEndListener: addEndListener, appear: appear = true, children: children, easing: easing, in: inProp, onEnter: onEnter, onEntered: onEntered, onEntering: onEntering, onExit: onExit, onExited: onExited, onExiting: onExiting, style: style, timeout: timeout = defaultTimeout, TransitionComponent: TransitionComponent = Transition$1} = props, other = _objectWithoutPropertiesLoose(props, _excluded$8);
        const nodeRef = reactExports.useRef(null);
        const handleRef = useForkRef(nodeRef, children.ref, ref);
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
        return jsxRuntimeExports.jsx(TransitionComponent, _extends({
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
            children: (state, childProps) => reactExports.cloneElement(children, _extends({
                style: _extends({
                    opacity: 0,
                    visibility: state === "exited" && !inProp ? "hidden" : undefined
                }, styles[state], style, children.props.style),
                ref: handleRef
            }, childProps))
        }));
    }));
    var Fade$1 = Fade;
    function getBackdropUtilityClass(slot) {
        return generateUtilityClass("MuiBackdrop", slot);
    }
    generateUtilityClasses("MuiBackdrop", [ "root", "invisible" ]);
    const _excluded$7 = [ "children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration" ];
    const useUtilityClasses$6 = ownerState => {
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
    })((({ownerState: ownerState}) => _extends({
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
        const props = useThemeProps({
            props: inProps,
            name: "MuiBackdrop"
        });
        const {children: children, className: className, component: component = "div", components: components = {}, componentsProps: componentsProps = {}, invisible: invisible = false, open: open, slotProps: slotProps = {}, slots: slots = {}, TransitionComponent: TransitionComponent = Fade$1, transitionDuration: transitionDuration} = props, other = _objectWithoutPropertiesLoose(props, _excluded$7);
        const ownerState = _extends({}, props, {
            component: component,
            invisible: invisible
        });
        const classes = useUtilityClasses$6(ownerState);
        const rootSlotProps = (_slotProps$root = slotProps.root) != null ? _slotProps$root : componentsProps.root;
        return jsxRuntimeExports.jsx(TransitionComponent, _extends({
            in: open,
            timeout: transitionDuration
        }, other, {
            children: jsxRuntimeExports.jsx(BackdropRoot, _extends({
                "aria-hidden": true
            }, rootSlotProps, {
                as: (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : component,
                className: clsx(classes.root, className, rootSlotProps == null ? void 0 : rootSlotProps.className),
                ownerState: _extends({}, ownerState, rootSlotProps == null ? void 0 : rootSlotProps.ownerState),
                classes: classes,
                ref: ref,
                children: children
            }))
        }));
    }));
    var Backdrop$1 = Backdrop;
    function getModalUtilityClass(slot) {
        return generateUtilityClass("MuiModal", slot);
    }
    generateUtilityClasses("MuiModal", [ "root", "hidden", "backdrop" ]);
    const _excluded$6 = [ "BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme" ];
    const useUtilityClasses$5 = ownerState => {
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
    })((({theme: theme, ownerState: ownerState}) => _extends({
        position: "fixed",
        zIndex: (theme.vars || theme).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0
    }, !ownerState.open && ownerState.exited && {
        visibility: "hidden"
    })));
    const ModalBackdrop = styled(Backdrop$1, {
        name: "MuiModal",
        slot: "Backdrop",
        overridesResolver: (props, styles) => styles.backdrop
    })({
        zIndex: -1
    });
    const Modal = reactExports.forwardRef((function Modal(inProps, ref) {
        var _ref, _slots$root, _ref2, _slots$backdrop, _slotProps$root, _slotProps$backdrop;
        const props = useThemeProps({
            name: "MuiModal",
            props: inProps
        });
        const {BackdropComponent: BackdropComponent = ModalBackdrop, BackdropProps: BackdropProps, className: className, closeAfterTransition: closeAfterTransition = false, children: children, container: container, component: component, components: components = {}, componentsProps: componentsProps = {}, disableAutoFocus: disableAutoFocus = false, disableEnforceFocus: disableEnforceFocus = false, disableEscapeKeyDown: disableEscapeKeyDown = false, disablePortal: disablePortal = false, disableRestoreFocus: disableRestoreFocus = false, disableScrollLock: disableScrollLock = false, hideBackdrop: hideBackdrop = false, keepMounted: keepMounted = false, onBackdropClick: onBackdropClick, open: open, slotProps: slotProps, slots: slots} = props, other = _objectWithoutPropertiesLoose(props, _excluded$6);
        const propsWithDefaults = _extends({}, props, {
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
        const {getRootProps: getRootProps, getBackdropProps: getBackdropProps, getTransitionProps: getTransitionProps, portalRef: portalRef, isTopModal: isTopModal, exited: exited, hasTransition: hasTransition} = useModal(_extends({}, propsWithDefaults, {
            rootRef: ref
        }));
        const ownerState = _extends({}, propsWithDefaults, {
            exited: exited
        });
        const classes = useUtilityClasses$5(ownerState);
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
            getSlotProps: otherHandlers => getBackdropProps(_extends({}, otherHandlers, {
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
            children: jsxRuntimeExports.jsxs(RootSlot, _extends({}, rootProps, {
                children: [ !hideBackdrop && BackdropComponent ? jsxRuntimeExports.jsx(BackdropSlot, _extends({}, backdropProps)) : null, jsxRuntimeExports.jsx(FocusTrap, {
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
    var Modal$1 = Modal;
    const getOverlayAlpha = elevation => {
        let alphaValue;
        if (elevation < 1) {
            alphaValue = 5.11916 * elevation ** 2;
        } else {
            alphaValue = 4.5 * Math.log(elevation + 1) + 2;
        }
        return (alphaValue / 100).toFixed(2);
    };
    function getPaperUtilityClass(slot) {
        return generateUtilityClass("MuiPaper", slot);
    }
    generateUtilityClasses("MuiPaper", [ "root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24" ]);
    const _excluded$5 = [ "className", "component", "elevation", "square", "variant" ];
    const useUtilityClasses$4 = ownerState => {
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
        return _extends({
            backgroundColor: (theme.vars || theme).palette.background.paper,
            color: (theme.vars || theme).palette.text.primary,
            transition: theme.transitions.create("box-shadow")
        }, !ownerState.square && {
            borderRadius: theme.shape.borderRadius
        }, ownerState.variant === "outlined" && {
            border: `1px solid ${(theme.vars || theme).palette.divider}`
        }, ownerState.variant === "elevation" && _extends({
            boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
        }, !theme.vars && theme.palette.mode === "dark" && {
            backgroundImage: `linear-gradient(${alpha("#fff", getOverlayAlpha(ownerState.elevation))}, ${alpha("#fff", getOverlayAlpha(ownerState.elevation))})`
        }, theme.vars && {
            backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
        }));
    }));
    const Paper = reactExports.forwardRef((function Paper(inProps, ref) {
        const props = useThemeProps({
            props: inProps,
            name: "MuiPaper"
        });
        const {className: className, component: component = "div", elevation: elevation = 1, square: square = false, variant: variant = "elevation"} = props, other = _objectWithoutPropertiesLoose(props, _excluded$5);
        const ownerState = _extends({}, props, {
            component: component,
            elevation: elevation,
            square: square,
            variant: variant
        });
        const classes = useUtilityClasses$4(ownerState);
        return jsxRuntimeExports.jsx(PaperRoot, _extends({
            as: component,
            ownerState: ownerState,
            className: clsx(classes.root, className),
            ref: ref
        }, other));
    }));
    var Paper$1 = Paper;
    function getDialogUtilityClass(slot) {
        return generateUtilityClass("MuiDialog", slot);
    }
    const dialogClasses = generateUtilityClasses("MuiDialog", [ "root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen" ]);
    var dialogClasses$1 = dialogClasses;
    const DialogContext = reactExports.createContext({});
    var DialogContext$1 = DialogContext;
    const _excluded$4 = [ "aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps" ];
    const DialogBackdrop = styled(Backdrop$1, {
        name: "MuiDialog",
        slot: "Backdrop",
        overrides: (props, styles) => styles.backdrop
    })({
        zIndex: -1
    });
    const useUtilityClasses$3 = ownerState => {
        const {classes: classes, scroll: scroll, maxWidth: maxWidth, fullWidth: fullWidth, fullScreen: fullScreen} = ownerState;
        const slots = {
            root: [ "root" ],
            container: [ "container", `scroll${capitalize(scroll)}` ],
            paper: [ "paper", `paperScroll${capitalize(scroll)}`, `paperWidth${capitalize(String(maxWidth))}`, fullWidth && "paperFullWidth", fullScreen && "paperFullScreen" ]
        };
        return composeClasses(slots, getDialogUtilityClass, classes);
    };
    const DialogRoot = styled(Modal$1, {
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
            return [ styles.container, styles[`scroll${capitalize(ownerState.scroll)}`] ];
        }
    })((({ownerState: ownerState}) => _extends({
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
    const DialogPaper = styled(Paper$1, {
        name: "MuiDialog",
        slot: "Paper",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.paper, styles[`scrollPaper${capitalize(ownerState.scroll)}`], styles[`paperWidth${capitalize(String(ownerState.maxWidth))}`], ownerState.fullWidth && styles.paperFullWidth, ownerState.fullScreen && styles.paperFullScreen ];
        }
    })((({theme: theme, ownerState: ownerState}) => _extends({
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
        [`&.${dialogClasses$1.paperScrollBody}`]: {
            [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
                maxWidth: "calc(100% - 64px)"
            }
        }
    }, ownerState.maxWidth && ownerState.maxWidth !== "xs" && {
        maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`,
        [`&.${dialogClasses$1.paperScrollBody}`]: {
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
        [`&.${dialogClasses$1.paperScrollBody}`]: {
            margin: 0,
            maxWidth: "100%"
        }
    })));
    const Dialog = reactExports.forwardRef((function Dialog(inProps, ref) {
        const props = useThemeProps({
            props: inProps,
            name: "MuiDialog"
        });
        const theme = useTheme();
        const defaultTransitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
        };
        const {"aria-describedby": ariaDescribedby, "aria-labelledby": ariaLabelledbyProp, BackdropComponent: BackdropComponent, BackdropProps: BackdropProps, children: children, className: className, disableEscapeKeyDown: disableEscapeKeyDown = false, fullScreen: fullScreen = false, fullWidth: fullWidth = false, maxWidth: maxWidth = "sm", onBackdropClick: onBackdropClick, onClose: onClose, open: open, PaperComponent: PaperComponent = Paper$1, PaperProps: PaperProps = {}, scroll: scroll = "paper", TransitionComponent: TransitionComponent = Fade$1, transitionDuration: transitionDuration = defaultTransitionDuration, TransitionProps: TransitionProps} = props, other = _objectWithoutPropertiesLoose(props, _excluded$4);
        const ownerState = _extends({}, props, {
            disableEscapeKeyDown: disableEscapeKeyDown,
            fullScreen: fullScreen,
            fullWidth: fullWidth,
            maxWidth: maxWidth,
            scroll: scroll
        });
        const classes = useUtilityClasses$3(ownerState);
        const backdropClick = reactExports.useRef();
        const handleMouseDown = event => {
            backdropClick.current = event.target === event.currentTarget;
        };
        const handleBackdropClick = event => {
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
        return jsxRuntimeExports.jsx(DialogRoot, _extends({
            className: clsx(classes.root, className),
            closeAfterTransition: true,
            components: {
                Backdrop: DialogBackdrop
            },
            componentsProps: {
                backdrop: _extends({
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
            children: jsxRuntimeExports.jsx(TransitionComponent, _extends({
                appear: true,
                in: open,
                timeout: transitionDuration,
                role: "presentation"
            }, TransitionProps, {
                children: jsxRuntimeExports.jsx(DialogContainer, {
                    className: clsx(classes.container),
                    onMouseDown: handleMouseDown,
                    ownerState: ownerState,
                    children: jsxRuntimeExports.jsx(DialogPaper, _extends({
                        as: PaperComponent,
                        elevation: 24,
                        role: "dialog",
                        "aria-describedby": ariaDescribedby,
                        "aria-labelledby": ariaLabelledby
                    }, PaperProps, {
                        className: clsx(classes.paper, PaperProps.className),
                        ownerState: ownerState,
                        children: jsxRuntimeExports.jsx(DialogContext$1.Provider, {
                            value: dialogContextValue,
                            children: children
                        })
                    }))
                })
            }))
        }));
    }));
    var Dialog$1 = Dialog;
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
    const _excluded$3 = [ "center", "classes", "className" ];
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
        const props = useThemeProps({
            props: inProps,
            name: "MuiTouchRipple"
        });
        const {center: centerProp = false, classes: classes = {}, className: className} = props, other = _objectWithoutPropertiesLoose(props, _excluded$3);
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
        const startTimer = reactExports.useRef(0);
        const startTimerCommit = reactExports.useRef(null);
        const container = reactExports.useRef(null);
        reactExports.useEffect((() => () => {
            if (startTimer.current) {
                clearTimeout(startTimer.current);
            }
        }), []);
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
        const start = reactExports.useCallback(((event = {}, options = {}, cb = (() => {})) => {
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
                    startTimer.current = setTimeout((() => {
                        if (startTimerCommit.current) {
                            startTimerCommit.current();
                            startTimerCommit.current = null;
                        }
                    }), DELAY_RIPPLE);
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
        }), [ centerProp, startCommit ]);
        const pulsate = reactExports.useCallback((() => {
            start({}, {
                pulsate: true
            });
        }), [ start ]);
        const stop = reactExports.useCallback(((event, cb) => {
            clearTimeout(startTimer.current);
            if ((event == null ? void 0 : event.type) === "touchend" && startTimerCommit.current) {
                startTimerCommit.current();
                startTimerCommit.current = null;
                startTimer.current = setTimeout((() => {
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
        }), []);
        reactExports.useImperativeHandle(ref, (() => ({
            pulsate: pulsate,
            start: start,
            stop: stop
        })), [ pulsate, start, stop ]);
        return jsxRuntimeExports.jsx(TouchRippleRoot, _extends({
            className: clsx(touchRippleClasses.root, classes.root, className),
            ref: container
        }, other, {
            children: jsxRuntimeExports.jsx(TransitionGroup$1, {
                component: null,
                exit: true,
                children: ripples
            })
        }));
    }));
    var TouchRipple$1 = TouchRipple;
    function getButtonBaseUtilityClass(slot) {
        return generateUtilityClass("MuiButtonBase", slot);
    }
    const buttonBaseClasses = generateUtilityClasses("MuiButtonBase", [ "root", "disabled", "focusVisible" ]);
    const _excluded$2 = [ "action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type" ];
    const useUtilityClasses$2 = ownerState => {
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
        const props = useThemeProps({
            props: inProps,
            name: "MuiButtonBase"
        });
        const {action: action, centerRipple: centerRipple = false, children: children, className: className, component: component = "button", disabled: disabled = false, disableRipple: disableRipple = false, disableTouchRipple: disableTouchRipple = false, focusRipple: focusRipple = false, LinkComponent: LinkComponent = "a", onBlur: onBlur, onClick: onClick, onContextMenu: onContextMenu, onDragLeave: onDragLeave, onFocus: onFocus, onFocusVisible: onFocusVisible, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onMouseDown: onMouseDown, onMouseLeave: onMouseLeave, onMouseUp: onMouseUp, onTouchEnd: onTouchEnd, onTouchMove: onTouchMove, onTouchStart: onTouchStart, tabIndex: tabIndex = 0, TouchRippleProps: TouchRippleProps, touchRippleRef: touchRippleRef, type: type} = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
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
        const ownerState = _extends({}, props, {
            centerRipple: centerRipple,
            component: component,
            disabled: disabled,
            disableRipple: disableRipple,
            disableTouchRipple: disableTouchRipple,
            focusRipple: focusRipple,
            tabIndex: tabIndex,
            focusVisible: focusVisible
        });
        const classes = useUtilityClasses$2(ownerState);
        return jsxRuntimeExports.jsxs(ButtonBaseRoot, _extends({
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
            children: [ children, enableTouchRipple ? jsxRuntimeExports.jsx(TouchRipple$1, _extends({
                ref: handleRippleRef,
                center: centerRipple
            }, TouchRippleProps)) : null ]
        }));
    }));
    var ButtonBase$1 = ButtonBase;
    function getButtonUtilityClass(slot) {
        return generateUtilityClass("MuiButton", slot);
    }
    const buttonClasses = generateUtilityClasses("MuiButton", [ "root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge" ]);
    var buttonClasses$1 = buttonClasses;
    const ButtonGroupContext = reactExports.createContext({});
    var ButtonGroupContext$1 = ButtonGroupContext;
    const ButtonGroupButtonContext = reactExports.createContext(undefined);
    var ButtonGroupButtonContext$1 = ButtonGroupButtonContext;
    const _excluded$1 = [ "children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant" ];
    const useUtilityClasses$1 = ownerState => {
        const {color: color, disableElevation: disableElevation, fullWidth: fullWidth, size: size, variant: variant, classes: classes} = ownerState;
        const slots = {
            root: [ "root", variant, `${variant}${capitalize(color)}`, `size${capitalize(size)}`, `${variant}Size${capitalize(size)}`, color === "inherit" && "colorInherit", disableElevation && "disableElevation", fullWidth && "fullWidth" ],
            label: [ "label" ],
            startIcon: [ "startIcon", `iconSize${capitalize(size)}` ],
            endIcon: [ "endIcon", `iconSize${capitalize(size)}` ]
        };
        const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
        return _extends({}, classes, composedClasses);
    };
    const commonIconStyles = ownerState => _extends({}, ownerState.size === "small" && {
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
    const ButtonRoot = styled(ButtonBase$1, {
        shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === "classes",
        name: "MuiButton",
        slot: "Root",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${capitalize(ownerState.color)}`], styles[`size${capitalize(ownerState.size)}`], styles[`${ownerState.variant}Size${capitalize(ownerState.size)}`], ownerState.color === "inherit" && styles.colorInherit, ownerState.disableElevation && styles.disableElevation, ownerState.fullWidth && styles.fullWidth ];
        }
    })((({theme: theme, ownerState: ownerState}) => {
        var _theme$palette$getCon, _theme$palette;
        const inheritContainedBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey[300] : theme.palette.grey[800];
        const inheritContainedHoverBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey.A100 : theme.palette.grey[700];
        return _extends({}, theme.typography.button, {
            minWidth: 64,
            padding: "6px 16px",
            borderRadius: (theme.vars || theme).shape.borderRadius,
            transition: theme.transitions.create([ "background-color", "box-shadow", "border-color", "color" ], {
                duration: theme.transitions.duration.short
            }),
            "&:hover": _extends({
                textDecoration: "none",
                backgroundColor: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
                "@media (hover: none)": {
                    backgroundColor: "transparent"
                }
            }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
                backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
                "@media (hover: none)": {
                    backgroundColor: "transparent"
                }
            }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
                border: `1px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
                backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
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
            "&:active": _extends({}, ownerState.variant === "contained" && {
                boxShadow: (theme.vars || theme).shadows[8]
            }),
            [`&.${buttonClasses$1.focusVisible}`]: _extends({}, ownerState.variant === "contained" && {
                boxShadow: (theme.vars || theme).shadows[6]
            }),
            [`&.${buttonClasses$1.disabled}`]: _extends({
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
            border: theme.vars ? `1px solid rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)` : `1px solid ${alpha(theme.palette[ownerState.color].main, .5)}`
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
        [`&.${buttonClasses$1.focusVisible}`]: {
            boxShadow: "none"
        },
        "&:active": {
            boxShadow: "none"
        },
        [`&.${buttonClasses$1.disabled}`]: {
            boxShadow: "none"
        }
    }));
    const ButtonStartIcon = styled("span", {
        name: "MuiButton",
        slot: "StartIcon",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            return [ styles.startIcon, styles[`iconSize${capitalize(ownerState.size)}`] ];
        }
    })((({ownerState: ownerState}) => _extends({
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
            return [ styles.endIcon, styles[`iconSize${capitalize(ownerState.size)}`] ];
        }
    })((({ownerState: ownerState}) => _extends({
        display: "inherit",
        marginRight: -4,
        marginLeft: 8
    }, ownerState.size === "small" && {
        marginRight: -2
    }, commonIconStyles(ownerState))));
    const Button = reactExports.forwardRef((function Button(inProps, ref) {
        const contextProps = reactExports.useContext(ButtonGroupContext$1);
        const buttonGroupButtonContextPositionClassName = reactExports.useContext(ButtonGroupButtonContext$1);
        const resolvedProps = resolveProps(contextProps, inProps);
        const props = useThemeProps({
            props: resolvedProps,
            name: "MuiButton"
        });
        const {children: children, color: color = "primary", component: component = "button", className: className, disabled: disabled = false, disableElevation: disableElevation = false, disableFocusRipple: disableFocusRipple = false, endIcon: endIconProp, focusVisibleClassName: focusVisibleClassName, fullWidth: fullWidth = false, size: size = "medium", startIcon: startIconProp, type: type, variant: variant = "text"} = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
        const ownerState = _extends({}, props, {
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
        const classes = useUtilityClasses$1(ownerState);
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
        return jsxRuntimeExports.jsxs(ButtonRoot, _extends({
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
    var Button$1 = Button;
    function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === "undefined") {
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
    var css_248z = "*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  \n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  \n}\n\n.tailwind .container {\n  width: 100%\n}\n\n@media (min-width: 640px) {\n  .tailwind .container {\n    max-width: 640px\n  }\n}\n\n@media (min-width: 768px) {\n  .tailwind .container {\n    max-width: 768px\n  }\n}\n\n@media (min-width: 1024px) {\n  .tailwind .container {\n    max-width: 1024px\n  }\n}\n\n@media (min-width: 1280px) {\n  .tailwind .container {\n    max-width: 1280px\n  }\n}\n\n@media (min-width: 1536px) {\n  .tailwind .container {\n    max-width: 1536px\n  }\n}\n\n.tailwind .h-2 {\n  height: 0.5rem\n}\n\n.tailwind .\\!rounded-md {\n  border-radius: 0.375rem !important\n}\n\n.tailwind .p-4 {\n  padding: 1rem\n}\n\n.tailwind .text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity))\n}";
    styleInject(css_248z);
    function ButtonDialog(_ref) {
        var buttonLabel = _ref.buttonLabel, renderDialog = _ref.renderDialog, onOpenDialog = _ref.onOpenDialog, onCloseDialog = _ref.onCloseDialog;
        var _useState = reactExports.useState(false), _useState2 = _slicedToArray(_useState, 2), showDialog = _useState2[0], setShowDialog = _useState2[1];
        var handleOpenDialog = function handleOpenDialog() {
            setShowDialog(true);
            if (onOpenDialog) {
                onOpenDialog();
            }
        };
        var handleCloseDialog = function handleCloseDialog() {
            setShowDialog(false);
            if (onCloseDialog) {
                onCloseDialog();
            }
        };
        return React.createElement("div", null, React.createElement(ScopedCssBaseline$1, null, React.createElement(Button$1, {
            onClick: handleOpenDialog
        }, buttonLabel)), showDialog && React.createElement(Dialog$1, {
            className: "tailwind",
            PaperProps: {
                className: "p-4"
            },
            open: showDialog,
            onClose: handleCloseDialog
        }, renderDialog()));
    }
    class UseFetch {
        static get(url) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise(((resolve, reject) => {
                    GM_xmlhttpRequest({
                        method: "GET",
                        url: url,
                        onload: function(res) {
                            const json = JSON.parse(res.responseText);
                            console.log(`Success: ${res.responseText}`);
                            resolve(json);
                        },
                        onerror: function(err) {
                            console.log(`Error: ${err}`);
                            reject(err);
                        }
                    });
                }));
            }));
        }
        static postJson(url, params) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise(((resolve, reject) => {
                    GM_xmlhttpRequest({
                        method: "POST",
                        url: url,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        data: JSON.stringify(params),
                        onload: function(res) {
                            const json = JSON.parse(res.responseText);
                            console.log(`Success: ${res.responseText}`);
                            resolve(json);
                        },
                        onerror: function(err) {
                            console.log(`Error: ${err}`);
                            reject(err);
                        }
                    });
                }));
            }));
        }
        static postForm(url, params) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise(((resolve, reject) => {
                    GM_xmlhttpRequest({
                        method: "POST",
                        url: url,
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        data: new URLSearchParams(params).toString(),
                        onload: function(res) {
                            const json = JSON.parse(res.responseText);
                            console.log(`Success: ${res.responseText}`);
                            resolve(json);
                        },
                        onerror: function(err) {
                            console.log(`Error: ${err}`);
                            reject(err);
                        }
                    });
                }));
            }));
        }
    }
    class GamerAPI {
        getQuestion() {
            return __awaiter(this, void 0, void 0, (function*() {
                const result = yield UseFetch.get("https://ani.gamer.com.tw/ajax/animeGetQuestion.php");
                return result;
            }));
        }
        sendAnswer(token, ans) {
            return __awaiter(this, void 0, void 0, (function*() {
                const result = yield UseFetch.postForm("https://ani.gamer.com.tw/ajax/animeAnsQuestion.php", {
                    token: token,
                    ans: ans.toString()
                });
                return result;
            }));
        }
    }
    const GridContext = reactExports.createContext();
    var GridContext$1 = GridContext;
    function getGridUtilityClass(slot) {
        return generateUtilityClass("MuiGrid", slot);
    }
    const SPACINGS = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    const DIRECTIONS = [ "column-reverse", "column", "row-reverse", "row" ];
    const WRAPS = [ "nowrap", "wrap-reverse", "wrap" ];
    const GRID_SIZES = [ "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
    const gridClasses = generateUtilityClasses("MuiGrid", [ "root", "container", "item", "zeroMinWidth", ...SPACINGS.map((spacing => `spacing-xs-${spacing}`)), ...DIRECTIONS.map((direction => `direction-xs-${direction}`)), ...WRAPS.map((wrap => `wrap-xs-${wrap}`)), ...GRID_SIZES.map((size => `grid-xs-${size}`)), ...GRID_SIZES.map((size => `grid-sm-${size}`)), ...GRID_SIZES.map((size => `grid-md-${size}`)), ...GRID_SIZES.map((size => `grid-lg-${size}`)), ...GRID_SIZES.map((size => `grid-xl-${size}`)) ]);
    const _excluded = [ "className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth" ];
    function getOffset(val) {
        const parse = parseFloat(val);
        return `${parse}${String(val).replace(String(parse), "") || "px"}`;
    }
    function generateGrid({theme: theme, ownerState: ownerState}) {
        let size;
        return theme.breakpoints.keys.reduce(((globalStyles, breakpoint) => {
            let styles = {};
            if (ownerState[breakpoint]) {
                size = ownerState[breakpoint];
            }
            if (!size) {
                return globalStyles;
            }
            if (size === true) {
                styles = {
                    flexBasis: 0,
                    flexGrow: 1,
                    maxWidth: "100%"
                };
            } else if (size === "auto") {
                styles = {
                    flexBasis: "auto",
                    flexGrow: 0,
                    flexShrink: 0,
                    maxWidth: "none",
                    width: "auto"
                };
            } else {
                const columnsBreakpointValues = resolveBreakpointValues({
                    values: ownerState.columns,
                    breakpoints: theme.breakpoints.values
                });
                const columnValue = typeof columnsBreakpointValues === "object" ? columnsBreakpointValues[breakpoint] : columnsBreakpointValues;
                if (columnValue === undefined || columnValue === null) {
                    return globalStyles;
                }
                const width = `${Math.round(size / columnValue * 1e8) / 1e6}%`;
                let more = {};
                if (ownerState.container && ownerState.item && ownerState.columnSpacing !== 0) {
                    const themeSpacing = theme.spacing(ownerState.columnSpacing);
                    if (themeSpacing !== "0px") {
                        const fullWidth = `calc(${width} + ${getOffset(themeSpacing)})`;
                        more = {
                            flexBasis: fullWidth,
                            maxWidth: fullWidth
                        };
                    }
                }
                styles = _extends({
                    flexBasis: width,
                    flexGrow: 0,
                    maxWidth: width
                }, more);
            }
            if (theme.breakpoints.values[breakpoint] === 0) {
                Object.assign(globalStyles, styles);
            } else {
                globalStyles[theme.breakpoints.up(breakpoint)] = styles;
            }
            return globalStyles;
        }), {});
    }
    function generateDirection({theme: theme, ownerState: ownerState}) {
        const directionValues = resolveBreakpointValues({
            values: ownerState.direction,
            breakpoints: theme.breakpoints.values
        });
        return handleBreakpoints({
            theme: theme
        }, directionValues, (propValue => {
            const output = {
                flexDirection: propValue
            };
            if (propValue.indexOf("column") === 0) {
                output[`& > .${gridClasses.item}`] = {
                    maxWidth: "none"
                };
            }
            return output;
        }));
    }
    function extractZeroValueBreakpointKeys({breakpoints: breakpoints, values: values}) {
        let nonZeroKey = "";
        Object.keys(values).forEach((key => {
            if (nonZeroKey !== "") {
                return;
            }
            if (values[key] !== 0) {
                nonZeroKey = key;
            }
        }));
        const sortedBreakpointKeysByValue = Object.keys(breakpoints).sort(((a, b) => breakpoints[a] - breakpoints[b]));
        return sortedBreakpointKeysByValue.slice(0, sortedBreakpointKeysByValue.indexOf(nonZeroKey));
    }
    function generateRowGap({theme: theme, ownerState: ownerState}) {
        const {container: container, rowSpacing: rowSpacing} = ownerState;
        let styles = {};
        if (container && rowSpacing !== 0) {
            const rowSpacingValues = resolveBreakpointValues({
                values: rowSpacing,
                breakpoints: theme.breakpoints.values
            });
            let zeroValueBreakpointKeys;
            if (typeof rowSpacingValues === "object") {
                zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
                    breakpoints: theme.breakpoints.values,
                    values: rowSpacingValues
                });
            }
            styles = handleBreakpoints({
                theme: theme
            }, rowSpacingValues, ((propValue, breakpoint) => {
                var _zeroValueBreakpointK;
                const themeSpacing = theme.spacing(propValue);
                if (themeSpacing !== "0px") {
                    return {
                        marginTop: `-${getOffset(themeSpacing)}`,
                        [`& > .${gridClasses.item}`]: {
                            paddingTop: getOffset(themeSpacing)
                        }
                    };
                }
                if ((_zeroValueBreakpointK = zeroValueBreakpointKeys) != null && _zeroValueBreakpointK.includes(breakpoint)) {
                    return {};
                }
                return {
                    marginTop: 0,
                    [`& > .${gridClasses.item}`]: {
                        paddingTop: 0
                    }
                };
            }));
        }
        return styles;
    }
    function generateColumnGap({theme: theme, ownerState: ownerState}) {
        const {container: container, columnSpacing: columnSpacing} = ownerState;
        let styles = {};
        if (container && columnSpacing !== 0) {
            const columnSpacingValues = resolveBreakpointValues({
                values: columnSpacing,
                breakpoints: theme.breakpoints.values
            });
            let zeroValueBreakpointKeys;
            if (typeof columnSpacingValues === "object") {
                zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
                    breakpoints: theme.breakpoints.values,
                    values: columnSpacingValues
                });
            }
            styles = handleBreakpoints({
                theme: theme
            }, columnSpacingValues, ((propValue, breakpoint) => {
                var _zeroValueBreakpointK2;
                const themeSpacing = theme.spacing(propValue);
                if (themeSpacing !== "0px") {
                    return {
                        width: `calc(100% + ${getOffset(themeSpacing)})`,
                        marginLeft: `-${getOffset(themeSpacing)}`,
                        [`& > .${gridClasses.item}`]: {
                            paddingLeft: getOffset(themeSpacing)
                        }
                    };
                }
                if ((_zeroValueBreakpointK2 = zeroValueBreakpointKeys) != null && _zeroValueBreakpointK2.includes(breakpoint)) {
                    return {};
                }
                return {
                    width: "100%",
                    marginLeft: 0,
                    [`& > .${gridClasses.item}`]: {
                        paddingLeft: 0
                    }
                };
            }));
        }
        return styles;
    }
    function resolveSpacingStyles(spacing, breakpoints, styles = {}) {
        if (!spacing || spacing <= 0) {
            return [];
        }
        if (typeof spacing === "string" && !Number.isNaN(Number(spacing)) || typeof spacing === "number") {
            return [ styles[`spacing-xs-${String(spacing)}`] ];
        }
        const spacingStyles = [];
        breakpoints.forEach((breakpoint => {
            const value = spacing[breakpoint];
            if (Number(value) > 0) {
                spacingStyles.push(styles[`spacing-${breakpoint}-${String(value)}`]);
            }
        }));
        return spacingStyles;
    }
    const GridRoot = styled("div", {
        name: "MuiGrid",
        slot: "Root",
        overridesResolver: (props, styles) => {
            const {ownerState: ownerState} = props;
            const {container: container, direction: direction, item: item, spacing: spacing, wrap: wrap, zeroMinWidth: zeroMinWidth, breakpoints: breakpoints} = ownerState;
            let spacingStyles = [];
            if (container) {
                spacingStyles = resolveSpacingStyles(spacing, breakpoints, styles);
            }
            const breakpointsStyles = [];
            breakpoints.forEach((breakpoint => {
                const value = ownerState[breakpoint];
                if (value) {
                    breakpointsStyles.push(styles[`grid-${breakpoint}-${String(value)}`]);
                }
            }));
            return [ styles.root, container && styles.container, item && styles.item, zeroMinWidth && styles.zeroMinWidth, ...spacingStyles, direction !== "row" && styles[`direction-xs-${String(direction)}`], wrap !== "wrap" && styles[`wrap-xs-${String(wrap)}`], ...breakpointsStyles ];
        }
    })((({ownerState: ownerState}) => _extends({
        boxSizing: "border-box"
    }, ownerState.container && {
        display: "flex",
        flexWrap: "wrap",
        width: "100%"
    }, ownerState.item && {
        margin: 0
    }, ownerState.zeroMinWidth && {
        minWidth: 0
    }, ownerState.wrap !== "wrap" && {
        flexWrap: ownerState.wrap
    })), generateDirection, generateRowGap, generateColumnGap, generateGrid);
    function resolveSpacingClasses(spacing, breakpoints) {
        if (!spacing || spacing <= 0) {
            return [];
        }
        if (typeof spacing === "string" && !Number.isNaN(Number(spacing)) || typeof spacing === "number") {
            return [ `spacing-xs-${String(spacing)}` ];
        }
        const classes = [];
        breakpoints.forEach((breakpoint => {
            const value = spacing[breakpoint];
            if (Number(value) > 0) {
                const className = `spacing-${breakpoint}-${String(value)}`;
                classes.push(className);
            }
        }));
        return classes;
    }
    const useUtilityClasses = ownerState => {
        const {classes: classes, container: container, direction: direction, item: item, spacing: spacing, wrap: wrap, zeroMinWidth: zeroMinWidth, breakpoints: breakpoints} = ownerState;
        let spacingClasses = [];
        if (container) {
            spacingClasses = resolveSpacingClasses(spacing, breakpoints);
        }
        const breakpointsClasses = [];
        breakpoints.forEach((breakpoint => {
            const value = ownerState[breakpoint];
            if (value) {
                breakpointsClasses.push(`grid-${breakpoint}-${String(value)}`);
            }
        }));
        const slots = {
            root: [ "root", container && "container", item && "item", zeroMinWidth && "zeroMinWidth", ...spacingClasses, direction !== "row" && `direction-xs-${String(direction)}`, wrap !== "wrap" && `wrap-xs-${String(wrap)}`, ...breakpointsClasses ]
        };
        return composeClasses(slots, getGridUtilityClass, classes);
    };
    const Grid = reactExports.forwardRef((function Grid(inProps, ref) {
        const themeProps = useThemeProps({
            props: inProps,
            name: "MuiGrid"
        });
        const {breakpoints: breakpoints} = useTheme();
        const props = extendSxProp(themeProps);
        const {className: className, columns: columnsProp, columnSpacing: columnSpacingProp, component: component = "div", container: container = false, direction: direction = "row", item: item = false, rowSpacing: rowSpacingProp, spacing: spacing = 0, wrap: wrap = "wrap", zeroMinWidth: zeroMinWidth = false} = props, other = _objectWithoutPropertiesLoose(props, _excluded);
        const rowSpacing = rowSpacingProp || spacing;
        const columnSpacing = columnSpacingProp || spacing;
        const columnsContext = reactExports.useContext(GridContext$1);
        const columns = container ? columnsProp || 12 : columnsContext;
        const breakpointsValues = {};
        const otherFiltered = _extends({}, other);
        breakpoints.keys.forEach((breakpoint => {
            if (other[breakpoint] != null) {
                breakpointsValues[breakpoint] = other[breakpoint];
                delete otherFiltered[breakpoint];
            }
        }));
        const ownerState = _extends({}, props, {
            columns: columns,
            container: container,
            direction: direction,
            item: item,
            rowSpacing: rowSpacing,
            columnSpacing: columnSpacing,
            wrap: wrap,
            zeroMinWidth: zeroMinWidth,
            spacing: spacing
        }, breakpointsValues, {
            breakpoints: breakpoints.keys
        });
        const classes = useUtilityClasses(ownerState);
        return jsxRuntimeExports.jsx(GridContext$1.Provider, {
            value: columns,
            children: jsxRuntimeExports.jsx(GridRoot, _extends({
                ownerState: ownerState,
                className: clsx(classes.root, className),
                as: component,
                ref: ref
            }, otherFiltered))
        });
    }));
    var Grid$1 = Grid;
    function SelectOptionComponent(_ref) {
        var renderTitle = _ref.renderTitle, options = _ref.options, onSelectOption = _ref.onSelectOption;
        function handleSelectOption(idx, option) {
            onSelectOption(idx, option);
        }
        return React.createElement("div", null, React.createElement(ScopedCssBaseline$1, null, React.createElement(Grid$1, {
            container: true,
            spacing: 2
        }, React.createElement(Grid$1, {
            item: true,
            xs: 12
        }, renderTitle()), options.map((function(option, idx) {
            return React.createElement(Grid$1, {
                item: true,
                key: option
            }, React.createElement(Button$1, {
                variant: "contained",
                onClick: function onClick() {
                    return handleSelectOption(idx, option);
                }
            }, option));
        })))));
    }
    function ButtonDialogApp() {
        var _this = this;
        var gamerAPI = new GamerAPI;
        var _useState = reactExports.useState("載入中............"), _useState2 = _slicedToArray(_useState, 2), questionTitle = _useState2[0], setQuestionTitle = _useState2[1];
        var _useState3 = reactExports.useState(""), _useState4 = _slicedToArray(_useState3, 2), question = _useState4[0], setQuestion = _useState4[1];
        var _useState5 = reactExports.useState([]), _useState6 = _slicedToArray(_useState5, 2), options = _useState6[0], setOptions = _useState6[1];
        var _useState7 = reactExports.useState(""), _useState8 = _slicedToArray(_useState7, 2), questionToken = _useState8[0], setQuestionToken = _useState8[1];
        var selectOption = function selectOption(idx, _) {
            return __awaiter(_this, void 0, void 0, _regeneratorRuntime().mark((function _callee() {
                var result;
                return _regeneratorRuntime().wrap((function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return gamerAPI.sendAnswer(questionToken, idx + 1);

                      case 2:
                        result = _context.sent;
                        if ("error" in result) {
                            setQuestionTitle("");
                            setQuestion(result.msg);
                            setOptions([]);
                            setQuestionToken("");
                        } else {
                            setQuestionTitle("");
                            setQuestion(result.gift);
                            setOptions([]);
                            setQuestionToken("");
                        }

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                }), _callee);
            })));
        };
        var renderDialog = function renderDialog() {
            return React.createElement(SelectOptionComponent, {
                onSelectOption: selectOption,
                renderTitle: function renderTitle() {
                    return React.createElement(React.Fragment, null, React.createElement("b", null, React.createElement("div", null, questionTitle)), React.createElement("br", null), React.createElement("div", null, question), React.createElement("br", null));
                },
                options: options
            });
        };
        var buttonLabel = "動畫瘋答題";
        var updateQuestion = function updateQuestion() {
            return __awaiter(_this, void 0, void 0, _regeneratorRuntime().mark((function _callee2() {
                var result;
                return _regeneratorRuntime().wrap((function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return gamerAPI.getQuestion();

                      case 2:
                        result = _context2.sent;
                        if ("error" in result) {
                            setQuestionTitle("");
                            setQuestion(result.msg);
                            setOptions([]);
                            setQuestionToken("");
                        } else {
                            setQuestionTitle(result.game);
                            setQuestion(result.question);
                            setOptions([ result.a1, result.a2, result.a3, result.a4 ]);
                            setQuestionToken(result.token);
                        }

                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                }), _callee2);
            })));
        };
        var cleanQuestion = function cleanQuestion() {
            setQuestionTitle("載入中............");
            setQuestion("");
            setOptions([]);
            setQuestionToken("");
        };
        return React.createElement("li", null, React.createElement(ButtonDialog, {
            onCloseDialog: cleanQuestion,
            onOpenDialog: updateQuestion,
            renderDialog: renderDialog,
            buttonLabel: buttonLabel
        }));
    }
    var insertBtnInverval = setInterval((function() {
        var success = appendComponentToElement(ButtonDialogApp, ".TOP-my ul");
        if (success) {
            clearInterval(insertBtnInverval);
        }
    }), 3e3);
})();
