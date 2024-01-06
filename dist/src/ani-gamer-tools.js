// ==UserScript==
// @name           ani gamer video
// @version        1.0.2
// @description    動畫瘋, 自動撥放, J 鍵跳過 90S, 自動設定影片速度, 隱藏觀看歷史
// @author         Vanisoul
// @match          https://ani.gamer.com.tw/*
// @license        MIT
// @namespace      https://greasyfork.org/users/429936
// @grant          unsafeWindow
// @updateHistory  1.0.1 (2024-01-04) 增加各種快捷鍵功能 & 新增時間設定選項 & 自動撥放啟用提示
// @updateHistory  1.0.2 (2024-01-06) 增加隱藏歷史觀看紀錄功能, 但是畫面會先出現在隱藏, 只是方便隱藏試看影片
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_registerMenuCommand
// ==/UserScript==

(function() {
    "use strict";
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
    function makeMap(str, expectsLowerCase) {
        const map = Object.create(null);
        const list = str.split(",");
        for (let i = 0; i < list.length; i++) {
            map[list[i]] = true;
        }
        return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
    }
    const NOOP = () => {};
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const hasOwn = (val, key) => hasOwnProperty.call(val, key);
    const isArray = Array.isArray;
    const isMap = val => toTypeString(val) === "[object Map]";
    const isFunction = val => typeof val === "function";
    const isString = val => typeof val === "string";
    const isSymbol = val => typeof val === "symbol";
    const isObject = val => val !== null && typeof val === "object";
    const objectToString = Object.prototype.toString;
    const toTypeString = value => objectToString.call(value);
    const toRawType = value => toTypeString(value).slice(8, -1);
    const isIntegerKey = key => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
    const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
    let activeEffectScope;
    function recordEffectScope(effect, scope = activeEffectScope) {
        if (scope && scope.active) {
            scope.effects.push(effect);
        }
    }
    const createDep = effects => {
        const dep = new Set(effects);
        dep.w = 0;
        dep.n = 0;
        return dep;
    };
    const wasTracked = dep => (dep.w & trackOpBit) > 0;
    const newTracked = dep => (dep.n & trackOpBit) > 0;
    const initDepMarkers = ({deps: deps}) => {
        if (deps.length) {
            for (let i = 0; i < deps.length; i++) {
                deps[i].w |= trackOpBit;
            }
        }
    };
    const finalizeDepMarkers = effect => {
        const {deps: deps} = effect;
        if (deps.length) {
            let ptr = 0;
            for (let i = 0; i < deps.length; i++) {
                const dep = deps[i];
                if (wasTracked(dep) && !newTracked(dep)) {
                    dep.delete(effect);
                } else {
                    deps[ptr++] = dep;
                }
                dep.w &= ~trackOpBit;
                dep.n &= ~trackOpBit;
            }
            deps.length = ptr;
        }
    };
    const targetMap = new WeakMap;
    let effectTrackDepth = 0;
    let trackOpBit = 1;
    const maxMarkerBits = 30;
    let activeEffect;
    const ITERATE_KEY = Symbol("");
    const MAP_KEY_ITERATE_KEY = Symbol("");
    class ReactiveEffect {
        constructor(fn, scheduler = null, scope) {
            this.fn = fn;
            this.scheduler = scheduler;
            this.active = true;
            this.deps = [];
            this.parent = undefined;
            recordEffectScope(this, scope);
        }
        run() {
            if (!this.active) {
                return this.fn();
            }
            let parent = activeEffect;
            let lastShouldTrack = shouldTrack;
            while (parent) {
                if (parent === this) {
                    return;
                }
                parent = parent.parent;
            }
            try {
                this.parent = activeEffect;
                activeEffect = this;
                shouldTrack = true;
                trackOpBit = 1 << ++effectTrackDepth;
                if (effectTrackDepth <= maxMarkerBits) {
                    initDepMarkers(this);
                } else {
                    cleanupEffect(this);
                }
                return this.fn();
            } finally {
                if (effectTrackDepth <= maxMarkerBits) {
                    finalizeDepMarkers(this);
                }
                trackOpBit = 1 << --effectTrackDepth;
                activeEffect = this.parent;
                shouldTrack = lastShouldTrack;
                this.parent = undefined;
                if (this.deferStop) {
                    this.stop();
                }
            }
        }
        stop() {
            if (activeEffect === this) {
                this.deferStop = true;
            } else if (this.active) {
                cleanupEffect(this);
                if (this.onStop) {
                    this.onStop();
                }
                this.active = false;
            }
        }
    }
    function cleanupEffect(effect) {
        const {deps: deps} = effect;
        if (deps.length) {
            for (let i = 0; i < deps.length; i++) {
                deps[i].delete(effect);
            }
            deps.length = 0;
        }
    }
    let shouldTrack = true;
    const trackStack = [];
    function pauseTracking() {
        trackStack.push(shouldTrack);
        shouldTrack = false;
    }
    function resetTracking() {
        const last = trackStack.pop();
        shouldTrack = last === undefined ? true : last;
    }
    function track(target, type, key) {
        if (shouldTrack && activeEffect) {
            let depsMap = targetMap.get(target);
            if (!depsMap) {
                targetMap.set(target, depsMap = new Map);
            }
            let dep = depsMap.get(key);
            if (!dep) {
                depsMap.set(key, dep = createDep());
            }
            trackEffects(dep);
        }
    }
    function trackEffects(dep, debuggerEventExtraInfo) {
        let shouldTrack = false;
        if (effectTrackDepth <= maxMarkerBits) {
            if (!newTracked(dep)) {
                dep.n |= trackOpBit;
                shouldTrack = !wasTracked(dep);
            }
        } else {
            shouldTrack = !dep.has(activeEffect);
        }
        if (shouldTrack) {
            dep.add(activeEffect);
            activeEffect.deps.push(dep);
        }
    }
    function trigger(target, type, key, newValue, oldValue, oldTarget) {
        const depsMap = targetMap.get(target);
        if (!depsMap) {
            return;
        }
        let deps = [];
        if (type === "clear") {
            deps = [ ...depsMap.values() ];
        } else if (key === "length" && isArray(target)) {
            depsMap.forEach(((dep, key) => {
                if (key === "length" || key >= newValue) {
                    deps.push(dep);
                }
            }));
        } else {
            if (key !== void 0) {
                deps.push(depsMap.get(key));
            }
            switch (type) {
              case "add":
                if (!isArray(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) {
                        deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                } else if (isIntegerKey(key)) {
                    deps.push(depsMap.get("length"));
                }
                break;

              case "delete":
                if (!isArray(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) {
                        deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                break;

              case "set":
                if (isMap(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                }
                break;
            }
        }
        if (deps.length === 1) {
            if (deps[0]) {
                {
                    triggerEffects(deps[0]);
                }
            }
        } else {
            const effects = [];
            for (const dep of deps) {
                if (dep) {
                    effects.push(...dep);
                }
            }
            {
                triggerEffects(createDep(effects));
            }
        }
    }
    function triggerEffects(dep, debuggerEventExtraInfo) {
        const effects = isArray(dep) ? dep : [ ...dep ];
        for (const effect of effects) {
            if (effect.computed) {
                triggerEffect(effect);
            }
        }
        for (const effect of effects) {
            if (!effect.computed) {
                triggerEffect(effect);
            }
        }
    }
    function triggerEffect(effect, debuggerEventExtraInfo) {
        if (effect !== activeEffect || effect.allowRecurse) {
            if (effect.scheduler) {
                effect.scheduler();
            } else {
                effect.run();
            }
        }
    }
    const isNonTrackableKeys = makeMap(`__proto__,__v_isRef,__isVue`);
    const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).filter((key => key !== "arguments" && key !== "caller")).map((key => Symbol[key])).filter(isSymbol));
    const get = createGetter();
    const readonlyGet = createGetter(true);
    const arrayInstrumentations = createArrayInstrumentations();
    function createArrayInstrumentations() {
        const instrumentations = {};
        [ "includes", "indexOf", "lastIndexOf" ].forEach((key => {
            instrumentations[key] = function(...args) {
                const arr = toRaw(this);
                for (let i = 0, l = this.length; i < l; i++) {
                    track(arr, "get", i + "");
                }
                const res = arr[key](...args);
                if (res === -1 || res === false) {
                    return arr[key](...args.map(toRaw));
                } else {
                    return res;
                }
            };
        }));
        [ "push", "pop", "shift", "unshift", "splice" ].forEach((key => {
            instrumentations[key] = function(...args) {
                pauseTracking();
                const res = toRaw(this)[key].apply(this, args);
                resetTracking();
                return res;
            };
        }));
        return instrumentations;
    }
    function createGetter(isReadonly = false, shallow = false) {
        return function get(target, key, receiver) {
            if (key === "__v_isReactive") {
                return !isReadonly;
            } else if (key === "__v_isReadonly") {
                return isReadonly;
            } else if (key === "__v_isShallow") {
                return shallow;
            } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
                return target;
            }
            const targetIsArray = isArray(target);
            if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
                return Reflect.get(arrayInstrumentations, key, receiver);
            }
            const res = Reflect.get(target, key, receiver);
            if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
                return res;
            }
            if (!isReadonly) {
                track(target, "get", key);
            }
            if (shallow) {
                return res;
            }
            if (isRef(res)) {
                return targetIsArray && isIntegerKey(key) ? res : res.value;
            }
            if (isObject(res)) {
                return isReadonly ? readonly(res) : reactive(res);
            }
            return res;
        };
    }
    const set = createSetter();
    function createSetter(shallow = false) {
        return function set(target, key, value, receiver) {
            let oldValue = target[key];
            if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
                return false;
            }
            if (!shallow && !isReadonly(value)) {
                if (!isShallow(value)) {
                    value = toRaw(value);
                    oldValue = toRaw(oldValue);
                }
                if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
                    oldValue.value = value;
                    return true;
                }
            }
            const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
            const result = Reflect.set(target, key, value, receiver);
            if (target === toRaw(receiver)) {
                if (!hadKey) {
                    trigger(target, "add", key, value);
                } else if (hasChanged(value, oldValue)) {
                    trigger(target, "set", key, value);
                }
            }
            return result;
        };
    }
    function deleteProperty(target, key) {
        const hadKey = hasOwn(target, key);
        target[key];
        const result = Reflect.deleteProperty(target, key);
        if (result && hadKey) {
            trigger(target, "delete", key, undefined);
        }
        return result;
    }
    function has(target, key) {
        const result = Reflect.has(target, key);
        if (!isSymbol(key) || !builtInSymbols.has(key)) {
            track(target, "has", key);
        }
        return result;
    }
    function ownKeys(target) {
        track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
        return Reflect.ownKeys(target);
    }
    const mutableHandlers = {
        get: get,
        set: set,
        deleteProperty: deleteProperty,
        has: has,
        ownKeys: ownKeys
    };
    const readonlyHandlers = {
        get: readonlyGet,
        set(target, key) {
            return true;
        },
        deleteProperty(target, key) {
            return true;
        }
    };
    const toShallow = value => value;
    const getProto = v => Reflect.getPrototypeOf(v);
    function get$1(target, key, isReadonly = false, isShallow = false) {
        target = target["__v_raw"];
        const rawTarget = toRaw(target);
        const rawKey = toRaw(key);
        if (!isReadonly) {
            if (key !== rawKey) {
                track(rawTarget, "get", key);
            }
            track(rawTarget, "get", rawKey);
        }
        const {has: has} = getProto(rawTarget);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        if (has.call(rawTarget, key)) {
            return wrap(target.get(key));
        } else if (has.call(rawTarget, rawKey)) {
            return wrap(target.get(rawKey));
        } else if (target !== rawTarget) {
            target.get(key);
        }
    }
    function has$1(key, isReadonly = false) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const rawKey = toRaw(key);
        if (!isReadonly) {
            if (key !== rawKey) {
                track(rawTarget, "has", key);
            }
            track(rawTarget, "has", rawKey);
        }
        return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
    }
    function size(target, isReadonly = false) {
        target = target["__v_raw"];
        !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
        return Reflect.get(target, "size", target);
    }
    function add(value) {
        value = toRaw(value);
        const target = toRaw(this);
        const proto = getProto(target);
        const hadKey = proto.has.call(target, value);
        if (!hadKey) {
            target.add(value);
            trigger(target, "add", value, value);
        }
        return this;
    }
    function set$1(key, value) {
        value = toRaw(value);
        const target = toRaw(this);
        const {has: has, get: get} = getProto(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
            key = toRaw(key);
            hadKey = has.call(target, key);
        }
        const oldValue = get.call(target, key);
        target.set(key, value);
        if (!hadKey) {
            trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
            trigger(target, "set", key, value);
        }
        return this;
    }
    function deleteEntry(key) {
        const target = toRaw(this);
        const {has: has, get: get} = getProto(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
            key = toRaw(key);
            hadKey = has.call(target, key);
        }
        get ? get.call(target, key) : undefined;
        const result = target.delete(key);
        if (hadKey) {
            trigger(target, "delete", key, undefined);
        }
        return result;
    }
    function clear() {
        const target = toRaw(this);
        const hadItems = target.size !== 0;
        const result = target.clear();
        if (hadItems) {
            trigger(target, "clear", undefined, undefined);
        }
        return result;
    }
    function createForEach(isReadonly, isShallow) {
        return function forEach(callback, thisArg) {
            const observed = this;
            const target = observed["__v_raw"];
            const rawTarget = toRaw(target);
            const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
            !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
            return target.forEach(((value, key) => callback.call(thisArg, wrap(value), wrap(key), observed)));
        };
    }
    function createIterableMethod(method, isReadonly, isShallow) {
        return function(...args) {
            const target = this["__v_raw"];
            const rawTarget = toRaw(target);
            const targetIsMap = isMap(rawTarget);
            const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
            const isKeyOnly = method === "keys" && targetIsMap;
            const innerIterator = target[method](...args);
            const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
            !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
            return {
                next() {
                    const {value: value, done: done} = innerIterator.next();
                    return done ? {
                        value: value,
                        done: done
                    } : {
                        value: isPair ? [ wrap(value[0]), wrap(value[1]) ] : wrap(value),
                        done: done
                    };
                },
                [Symbol.iterator]() {
                    return this;
                }
            };
        };
    }
    function createReadonlyMethod(type) {
        return function(...args) {
            return type === "delete" ? false : this;
        };
    }
    function createInstrumentations() {
        const mutableInstrumentations = {
            get(key) {
                return get$1(this, key);
            },
            get size() {
                return size(this);
            },
            has: has$1,
            add: add,
            set: set$1,
            delete: deleteEntry,
            clear: clear,
            forEach: createForEach(false, false)
        };
        const shallowInstrumentations = {
            get(key) {
                return get$1(this, key, false, true);
            },
            get size() {
                return size(this);
            },
            has: has$1,
            add: add,
            set: set$1,
            delete: deleteEntry,
            clear: clear,
            forEach: createForEach(false, true)
        };
        const readonlyInstrumentations = {
            get(key) {
                return get$1(this, key, true);
            },
            get size() {
                return size(this, true);
            },
            has(key) {
                return has$1.call(this, key, true);
            },
            add: createReadonlyMethod("add"),
            set: createReadonlyMethod("set"),
            delete: createReadonlyMethod("delete"),
            clear: createReadonlyMethod("clear"),
            forEach: createForEach(true, false)
        };
        const shallowReadonlyInstrumentations = {
            get(key) {
                return get$1(this, key, true, true);
            },
            get size() {
                return size(this, true);
            },
            has(key) {
                return has$1.call(this, key, true);
            },
            add: createReadonlyMethod("add"),
            set: createReadonlyMethod("set"),
            delete: createReadonlyMethod("delete"),
            clear: createReadonlyMethod("clear"),
            forEach: createForEach(true, true)
        };
        const iteratorMethods = [ "keys", "values", "entries", Symbol.iterator ];
        iteratorMethods.forEach((method => {
            mutableInstrumentations[method] = createIterableMethod(method, false, false);
            readonlyInstrumentations[method] = createIterableMethod(method, true, false);
            shallowInstrumentations[method] = createIterableMethod(method, false, true);
            shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
        }));
        return [ mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations ];
    }
    const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = createInstrumentations();
    function createInstrumentationGetter(isReadonly, shallow) {
        const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
        return (target, key, receiver) => {
            if (key === "__v_isReactive") {
                return !isReadonly;
            } else if (key === "__v_isReadonly") {
                return isReadonly;
            } else if (key === "__v_raw") {
                return target;
            }
            return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
        };
    }
    const mutableCollectionHandlers = {
        get: createInstrumentationGetter(false, false)
    };
    const readonlyCollectionHandlers = {
        get: createInstrumentationGetter(true, false)
    };
    const reactiveMap = new WeakMap;
    const shallowReactiveMap = new WeakMap;
    const readonlyMap = new WeakMap;
    const shallowReadonlyMap = new WeakMap;
    function targetTypeMap(rawType) {
        switch (rawType) {
          case "Object":
          case "Array":
            return 1;

          case "Map":
          case "Set":
          case "WeakMap":
          case "WeakSet":
            return 2;

          default:
            return 0;
        }
    }
    function getTargetType(value) {
        return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
    }
    function reactive(target) {
        if (isReadonly(target)) {
            return target;
        }
        return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
    }
    function readonly(target) {
        return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
    }
    function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
        if (!isObject(target)) {
            return target;
        }
        if (target["__v_raw"] && !(isReadonly && target["__v_isReactive"])) {
            return target;
        }
        const existingProxy = proxyMap.get(target);
        if (existingProxy) {
            return existingProxy;
        }
        const targetType = getTargetType(target);
        if (targetType === 0) {
            return target;
        }
        const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
        proxyMap.set(target, proxy);
        return proxy;
    }
    function isReadonly(value) {
        return !!(value && value["__v_isReadonly"]);
    }
    function isShallow(value) {
        return !!(value && value["__v_isShallow"]);
    }
    function toRaw(observed) {
        const raw = observed && observed["__v_raw"];
        return raw ? toRaw(raw) : observed;
    }
    const toReactive = value => isObject(value) ? reactive(value) : value;
    const toReadonly = value => isObject(value) ? readonly(value) : value;
    function trackRefValue(ref) {
        if (shouldTrack && activeEffect) {
            ref = toRaw(ref);
            {
                trackEffects(ref.dep || (ref.dep = createDep()));
            }
        }
    }
    function triggerRefValue(ref, newVal) {
        ref = toRaw(ref);
        if (ref.dep) {
            {
                triggerEffects(ref.dep);
            }
        }
    }
    function isRef(r) {
        return !!(r && r.__v_isRef === true);
    }
    function ref(value) {
        return createRef(value, false);
    }
    function createRef(rawValue, shallow) {
        if (isRef(rawValue)) {
            return rawValue;
        }
        return new RefImpl(rawValue, shallow);
    }
    class RefImpl {
        constructor(value, __v_isShallow) {
            this.__v_isShallow = __v_isShallow;
            this.dep = undefined;
            this.__v_isRef = true;
            this._rawValue = __v_isShallow ? value : toRaw(value);
            this._value = __v_isShallow ? value : toReactive(value);
        }
        get value() {
            trackRefValue(this);
            return this._value;
        }
        set value(newVal) {
            newVal = this.__v_isShallow ? newVal : toRaw(newVal);
            if (hasChanged(newVal, this._rawValue)) {
                this._rawValue = newVal;
                this._value = this.__v_isShallow ? newVal : toReactive(newVal);
                triggerRefValue(this);
            }
        }
    }
    class ComputedRefImpl {
        constructor(getter, _setter, isReadonly, isSSR) {
            this._setter = _setter;
            this.dep = undefined;
            this.__v_isRef = true;
            this._dirty = true;
            this.effect = new ReactiveEffect(getter, (() => {
                if (!this._dirty) {
                    this._dirty = true;
                    triggerRefValue(this);
                }
            }));
            this.effect.computed = this;
            this.effect.active = this._cacheable = !isSSR;
            this["__v_isReadonly"] = isReadonly;
        }
        get value() {
            const self = toRaw(this);
            trackRefValue(self);
            if (self._dirty || !self._cacheable) {
                self._dirty = false;
                self._value = self.effect.run();
            }
            return self._value;
        }
        set value(newValue) {
            this._setter(newValue);
        }
    }
    function computed$1(getterOrOptions, debugOptions, isSSR = false) {
        let getter;
        let setter;
        const onlyGetter = isFunction(getterOrOptions);
        if (onlyGetter) {
            getter = getterOrOptions;
            setter = NOOP;
        } else {
            getter = getterOrOptions.get;
            setter = getterOrOptions.set;
        }
        const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
        return cRef;
    }
    let isInSSRComponentSetup = false;
    const computed = (getterOrOptions, debugOptions) => computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
    function useGmValue(key, defaultValue) {
        const refValue = ref();
        refValue.value = GM_getValue(key, defaultValue);
        const data = computed({
            get() {
                return refValue.value;
            },
            set(val) {
                GM_setValue(key, val);
                refValue.value = val;
            }
        });
        function updateData(input) {
            data.value = input;
        }
        return {
            data: data,
            updateData: updateData
        };
    }
    function useGmMenu(menuText) {
        const event = ref((() => {}));
        const onTriggerMenu = fn => {
            event.value = fn;
        };
        GM_registerMenuCommand(menuText, (() => {
            event.value();
        }));
        return {
            onTriggerMenu: onTriggerMenu
        };
    }
    const defaultGamerSkipKey = "j";
    const {data: gamerSkipKey, updateData: updateGamerSkipKey} = useGmValue("gamerSkipKey", defaultGamerSkipKey);
    const {onTriggerMenu: onSkipKeyTriggerMenu} = useGmMenu("設定跳過觸發鍵");
    onSkipKeyTriggerMenu((() => {
        const key = prompt("請輸入跳過觸發鍵", gamerSkipKey.value);
        if (key) {
            if (key.length > 1) {
                alert("只能輸入一個字");
                return;
            }
            updateGamerSkipKey(key);
            alert(`已設定跳過觸發鍵為 ${key}`);
        }
    }));
    const defaultGamerOPTime = 90;
    const {data: gamerOPTime, updateData: updateGamerOPTime} = useGmValue("gamerOPTime", defaultGamerOPTime);
    const {onTriggerMenu: onOPTimeTriggerMenu} = useGmMenu("設定跳過長度");
    onOPTimeTriggerMenu((() => {
        var _a;
        const time = prompt("請輸入跳過長度", (_a = gamerOPTime.value) === null || _a === void 0 ? void 0 : _a.toString());
        if (time) {
            if (isNaN(parseInt(time, 10))) {
                alert("請輸入數字");
                return;
            }
            updateGamerOPTime(parseInt(time, 10));
            alert(`已設定跳過長度為 ${time}`);
        }
    }));
    const gamerVideoRatePool = [ .5, .75, 1, 1.25, 1.5, 1.75, 2 ];
    const defaultGamerVideoRate = 1.5;
    const {data: gamerVideoRate, updateData: updateGamerVideoRate} = useGmValue("gamerVideoRate", defaultGamerVideoRate);
    const {onTriggerMenu: onVideoRateTriggerMenu} = useGmMenu("設定影片速度");
    onVideoRateTriggerMenu((() => {
        var _a;
        const rate = prompt(`請輸入影片速度 [${gamerVideoRatePool.toString()}]`, (_a = gamerVideoRate.value) === null || _a === void 0 ? void 0 : _a.toString());
        if (rate) {
            const rateNumber = parseFloat(rate);
            if (gamerVideoRatePool.includes(rateNumber)) {
                updateGamerVideoRate(rateNumber);
                setVideoRate();
                alert(`已設定影片速度為 ${rate}`);
            } else {
                alert(`請輸入正確的速度 [${gamerVideoRatePool.toString()}]`);
            }
        }
    }));
    const defaultFullScanKey = "f";
    const {data: fullScanKey, updateData: updateFullScanKey} = useGmValue("fullScanKey", defaultFullScanKey);
    const {onTriggerMenu: onFullScanKeyTriggerMenu} = useGmMenu("設定全螢幕切換鍵");
    onFullScanKeyTriggerMenu((() => {
        const key = prompt("請輸入全螢幕切換鍵", fullScanKey.value);
        if (key) {
            if (key.length > 1) {
                alert("只能輸入一個字");
                return;
            }
            updateFullScanKey(key);
            alert(`已設定全螢幕切換鍵為 ${key}`);
        }
    }));
    const defaultAutoNext = true;
    const {data: autoNext, updateData: updateAutoNext} = useGmValue("autoNext", defaultAutoNext);
    const {onTriggerMenu: onAutoNextTriggerMenu} = useGmMenu("設定自動切換下一集");
    onAutoNextTriggerMenu((() => {
        const isAutoNext = confirm("是否啟用自動切換下一集");
        updateAutoNext(isAutoNext);
        alert(`已設定自動切換下一集功能 ${isAutoNext}`);
    }));
    const defaultHideHistoryIds = [];
    const {data: hideHistoryIds, updateData: updateHideHistoryIds} = useGmValue("hideHistoryIds", defaultHideHistoryIds);
    const {onTriggerMenu: onHideHistoryIdsTriggerMenu} = useGmMenu("設定隱藏觀看紀錄");
    onHideHistoryIdsTriggerMenu((() => {
        var _a;
        const ids = prompt("請輸入要隱藏的觀看紀錄 影片 Sn , 分隔, EX : 12345, 54321", (_a = hideHistoryIds.value) === null || _a === void 0 ? void 0 : _a.join(","));
        if (ids === null) {
            return;
        }
        if (ids) {
            const idsArray = ids.split(",").map((id => parseInt(id.trim(), 10)));
            updateHideHistoryIds(idsArray);
            triggerHideHistoryIds();
            alert(`已設定隱藏觀看紀錄 ${idsArray.toString()}`);
        } else {
            updateHideHistoryIds([]);
            triggerHideHistoryIds();
            alert(`已取消隱藏觀看紀錄`);
        }
    }));
    const defaultAutoPlay = false;
    const {data: autoPlay, updateData: updateAutoPlay} = useGmValue("autoPlay", defaultAutoPlay);
    const {onTriggerMenu: onAutoPlayTriggerMenu} = useGmMenu("設定自動同意撥放");
    onAutoPlayTriggerMenu((() => {
        const isAutoPlay = confirm("是否啟用自動同意撥放");
        if (isAutoPlay) {
            alert("要自動撥放，請先設定網站設置");
            alert(`網址欄左側，點擊鎖頭圖標或信息圖標（取決於網站是否使用 HTTPS），在彈出的菜單中選擇「網站設置」，在「網站設置」頁面，找到「聲音」選項，並將其設置為「允許」。`);
        }
        updateAutoPlay(isAutoPlay);
        alert(`已設定自動同意撥放功能 ${isAutoPlay}`);
    }));
    const gamerVideo = ref(undefined);
    const videoSnArray = ref([]);
    function setVideoRate() {
        if (gamerVideoRate.value && gamerVideo.value) {
            gamerVideo.value.playbackRate = gamerVideoRate.value;
        }
    }
    function initVideo() {
        setVideoRate();
        getSnList();
    }
    function getSnList() {
        unsafeWindow.$(".season ul li a").each((function() {
            const href = unsafeWindow.$(this).attr("href");
            const sn = href === null || href === void 0 ? void 0 : href.split("=")[1];
            if (sn) {
                videoSnArray.value.push(parseInt(sn, 10));
            }
        }));
    }
    function goToNextPage() {
        const currentPageIndex = getCurrentPage();
        if (currentPageIndex >= 0 && currentPageIndex < videoSnArray.value.length - 1) {
            const nextSN = videoSnArray.value[currentPageIndex + 1];
            window.location.href = "?sn=" + nextSN;
        } else {
            console.log("已經是最後一頁了，無法轉到下一頁。");
        }
    }
    function getCurrentPage() {
        var currentSN = window.location.search.split("=")[1];
        return videoSnArray.value.indexOf(parseInt(currentSN, 10));
    }
    function autoPlayMethed() {
        return __awaiter(this, void 0, void 0, (function*() {
            const adultClick = unsafeWindow.$._data(unsafeWindow.$("#adult")[0], "events").click;
            if (adultClick && adultClick.length !== 0) {
                adultClick[0].handler();
            }
        }));
    }
    function triggerHideHistoryIds() {
        const historyList = unsafeWindow.$(".user-watch-list .click-area");
        if (historyList.length === 0) {
            return false;
        }
        if (hideHistoryIds.value.length === 0) {
            historyList.each((function() {
                unsafeWindow.$(this).closest(".user-watch-list").show();
            }));
            return false;
        }
        historyList.each((function() {
            var _a;
            const href = unsafeWindow.$(this).attr("href");
            const sn = parseInt((_a = href === null || href === void 0 ? void 0 : href.split("=")[1].trim()) !== null && _a !== void 0 ? _a : "", 10);
            if (sn && hideHistoryIds.value.includes(sn)) {
                unsafeWindow.$(this).closest(".user-watch-list").hide();
            }
        }));
        return true;
    }
    document.addEventListener("keydown", (function(event) {
        if (event.key.toLocaleLowerCase() === gamerSkipKey.value && gamerVideo.value && gamerOPTime.value) {
            gamerVideo.value.currentTime += gamerOPTime.value;
        }
        if (event.key.toLocaleLowerCase() === fullScanKey.value) {
            unsafeWindow.$(".vjs-fullscreen-control").trigger("click");
        }
    }));
    const gamerInterval = setInterval((() => __awaiter(void 0, void 0, void 0, (function*() {
        gamerVideo.value = document.getElementById("ani_video_html5_api");
        if (!unsafeWindow.$ || !gamerVideo.value) {
            return;
        }
        clearInterval(gamerInterval);
        if (autoPlay.value) {
            void autoPlayMethed();
        }
        gamerVideo.value.addEventListener("play", (function() {
            initVideo();
        }));
        gamerVideo.value.addEventListener("ended", (function() {
            if (autoNext.value) {
                goToNextPage();
            }
        }));
    }))), 2e3);
    const hideHistoryIdsInterval = setInterval((() => {
        triggerHideHistoryIds();
    }), 10);
    setTimeout((() => {
        clearInterval(hideHistoryIdsInterval);
    }), 3e3);
})();
