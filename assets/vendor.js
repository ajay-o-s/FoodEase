var kE = Object.defineProperty,
  HE = Object.defineProperties;
var VE = Object.getOwnPropertyDescriptors;
var Ul = Object.getOwnPropertySymbols;
var Zx = Object.prototype.hasOwnProperty,
  Qx = Object.prototype.propertyIsEnumerable;
var qr = (t, n) => ((n = Symbol[t]) ? n : Symbol.for("Symbol." + t)),
  qE = (t) => {
    throw TypeError(t);
  };
var Kx = (t, n, a) =>
    n in t
      ? kE(t, n, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[n] = a),
  ue = (t, n) => {
    for (var a in n || (n = {})) Zx.call(n, a) && Kx(t, a, n[a]);
    if (Ul) for (var a of Ul(n)) Qx.call(n, a) && Kx(t, a, n[a]);
    return t;
  },
  Ne = (t, n) => HE(t, VE(n));
var ln = (t, n) => {
  var a = {};
  for (var s in t) Zx.call(t, s) && n.indexOf(s) < 0 && (a[s] = t[s]);
  if (t != null && Ul)
    for (var s of Ul(t)) n.indexOf(s) < 0 && Qx.call(t, s) && (a[s] = t[s]);
  return a;
};
var Ka = function (t, n) {
    (this[0] = t), (this[1] = n);
  },
  xf = (t, n, a) => {
    var s = (f, d, x, h) => {
        try {
          var m = a[f](d),
            y = (d = m.value) instanceof Ka,
            v = m.done;
          Promise.resolve(y ? d[0] : d)
            .then((g) =>
              y
                ? s(
                    f === "return" ? f : "next",
                    d[1] ? { done: g.done, value: g.value } : g,
                    x,
                    h,
                  )
                : x({ value: g, done: v }),
            )
            .catch((g) => s("throw", g, x, h));
        } catch (g) {
          h(g);
        }
      },
      l = (f) => (c[f] = (d) => new Promise((x, h) => s(f, d, x, h))),
      c = {};
    return (
      (a = a.apply(t, n)),
      (c[qr("asyncIterator")] = () => c),
      l("next"),
      l("throw"),
      l("return"),
      c
    );
  },
  mf = (t) => {
    var n = t[qr("asyncIterator")],
      a = !1,
      s,
      l = {};
    return (
      n == null
        ? ((n = t[qr("iterator")]()), (s = (c) => (l[c] = (f) => n[c](f))))
        : ((n = n.call(t)),
          (s = (c) =>
            (l[c] = (f) => {
              if (a) {
                if (((a = !1), c === "throw")) throw f;
                return f;
              }
              return (
                (a = !0),
                {
                  done: !1,
                  value: new Ka(
                    new Promise((d) => {
                      var x = n[c](f);
                      x instanceof Object || qE("Object expected"), d(x);
                    }),
                    1,
                  ),
                }
              );
            }))),
      (l[qr("iterator")] = () => l),
      s("next"),
      "throw" in n
        ? s("throw")
        : (l.throw = (c) => {
            throw c;
          }),
      "return" in n && s("return"),
      l
    );
  },
  $x = (t, n, a) =>
    (n = t[qr("asyncIterator")])
      ? n.call(t)
      : ((t = t[qr("iterator")]()),
        (n = {}),
        (a = (s, l) =>
          (l = t[s]) &&
          (n[s] = (c) =>
            new Promise(
              (f, d, x) => (
                (c = l.call(t, c)),
                (x = c.done),
                Promise.resolve(c.value).then(
                  (h) => f({ value: h, done: x }),
                  d,
                )
              ),
            ))),
        a("next"),
        a("return"),
        n);
function Kv(t, n) {
  for (var a = 0; a < n.length; a++) {
    const s = n[a];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const l in s)
        if (l !== "default" && !(l in t)) {
          const c = Object.getOwnPropertyDescriptor(s, l);
          c &&
            Object.defineProperty(
              t,
              l,
              c.get ? c : { enumerable: !0, get: () => s[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  );
}
var yf =
  typeof globalThis != "undefined"
    ? globalThis
    : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
        ? global
        : typeof self != "undefined"
          ? self
          : {};
function $u(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function jE(t) {
  if (Object.prototype.hasOwnProperty.call(t, "__esModule")) return t;
  var n = t.default;
  if (typeof n == "function") {
    var a = function s() {
      return this instanceof s
        ? Reflect.construct(n, arguments, this.constructor)
        : n.apply(this, arguments);
    };
    a.prototype = n.prototype;
  } else a = {};
  return (
    Object.defineProperty(a, "__esModule", { value: !0 }),
    Object.keys(t).forEach(function (s) {
      var l = Object.getOwnPropertyDescriptor(t, s);
      Object.defineProperty(
        a,
        s,
        l.get
          ? l
          : {
              enumerable: !0,
              get: function () {
                return t[s];
              },
            },
      );
    }),
    a
  );
}
var vf = { exports: {} },
  Ws = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wx;
function PE() {
  if (Wx) return Ws;
  Wx = 1;
  var t = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.fragment");
  function a(s, l, c) {
    var f = null;
    if (
      (c !== void 0 && (f = "" + c),
      l.key !== void 0 && (f = "" + l.key),
      "key" in l)
    ) {
      c = {};
      for (var d in l) d !== "key" && (c[d] = l[d]);
    } else c = l;
    return (
      (l = c.ref),
      { $$typeof: t, type: s, key: f, ref: l !== void 0 ? l : null, props: c }
    );
  }
  return (Ws.Fragment = n), (Ws.jsx = a), (Ws.jsxs = a), Ws;
}
var Jx;
function YE() {
  return Jx || ((Jx = 1), (vf.exports = PE())), vf.exports;
}
var Hi = YE(),
  gf = { exports: {} },
  Me = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ix;
function XE() {
  if (Ix) return Me;
  Ix = 1;
  var t = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    x = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    m = Symbol.for("react.lazy"),
    y = Symbol.iterator;
  function v(F) {
    return F === null || typeof F != "object"
      ? null
      : ((F = (y && F[y]) || F["@@iterator"]),
        typeof F == "function" ? F : null);
  }
  var g = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    b = Object.assign,
    S = {};
  function A(F, N, X) {
    (this.props = F),
      (this.context = N),
      (this.refs = S),
      (this.updater = X || g);
  }
  (A.prototype.isReactComponent = {}),
    (A.prototype.setState = function (F, N) {
      if (typeof F != "object" && typeof F != "function" && F != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, F, N, "setState");
    }),
    (A.prototype.forceUpdate = function (F) {
      this.updater.enqueueForceUpdate(this, F, "forceUpdate");
    });
  function R() {}
  R.prototype = A.prototype;
  function C(F, N, X) {
    (this.props = F),
      (this.context = N),
      (this.refs = S),
      (this.updater = X || g);
  }
  var D = (C.prototype = new R());
  (D.constructor = C), b(D, A.prototype), (D.isPureReactComponent = !0);
  var T = Array.isArray,
    w = { H: null, A: null, T: null, S: null },
    z = Object.prototype.hasOwnProperty;
  function _(F, N, X, K, P, pe) {
    return (
      (X = pe.ref),
      { $$typeof: t, type: F, key: N, ref: X !== void 0 ? X : null, props: pe }
    );
  }
  function L(F, N) {
    return _(F.type, N, void 0, void 0, void 0, F.props);
  }
  function q(F) {
    return typeof F == "object" && F !== null && F.$$typeof === t;
  }
  function M(F) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      F.replace(/[=:]/g, function (X) {
        return N[X];
      })
    );
  }
  var j = /\/+/g;
  function J(F, N) {
    return typeof F == "object" && F !== null && F.key != null
      ? M("" + F.key)
      : N.toString(36);
  }
  function I() {}
  function le(F) {
    switch (F.status) {
      case "fulfilled":
        return F.value;
      case "rejected":
        throw F.reason;
      default:
        switch (
          (typeof F.status == "string"
            ? F.then(I, I)
            : ((F.status = "pending"),
              F.then(
                function (N) {
                  F.status === "pending" &&
                    ((F.status = "fulfilled"), (F.value = N));
                },
                function (N) {
                  F.status === "pending" &&
                    ((F.status = "rejected"), (F.reason = N));
                },
              )),
          F.status)
        ) {
          case "fulfilled":
            return F.value;
          case "rejected":
            throw F.reason;
        }
    }
    throw F;
  }
  function ce(F, N, X, K, P) {
    var pe = typeof F;
    (pe === "undefined" || pe === "boolean") && (F = null);
    var xe = !1;
    if (F === null) xe = !0;
    else
      switch (pe) {
        case "bigint":
        case "string":
        case "number":
          xe = !0;
          break;
        case "object":
          switch (F.$$typeof) {
            case t:
            case n:
              xe = !0;
              break;
            case m:
              return (xe = F._init), ce(xe(F._payload), N, X, K, P);
          }
      }
    if (xe)
      return (
        (P = P(F)),
        (xe = K === "" ? "." + J(F, 0) : K),
        T(P)
          ? ((X = ""),
            xe != null && (X = xe.replace(j, "$&/") + "/"),
            ce(P, N, X, "", function (Je) {
              return Je;
            }))
          : P != null &&
            (q(P) &&
              (P = L(
                P,
                X +
                  (P.key == null || (F && F.key === P.key)
                    ? ""
                    : ("" + P.key).replace(j, "$&/") + "/") +
                  xe,
              )),
            N.push(P)),
        1
      );
    xe = 0;
    var Fe = K === "" ? "." : K + ":";
    if (T(F))
      for (var me = 0; me < F.length; me++)
        (K = F[me]), (pe = Fe + J(K, me)), (xe += ce(K, N, X, pe, P));
    else if (((me = v(F)), typeof me == "function"))
      for (F = me.call(F), me = 0; !(K = F.next()).done; )
        (K = K.value), (pe = Fe + J(K, me++)), (xe += ce(K, N, X, pe, P));
    else if (pe === "object") {
      if (typeof F.then == "function") return ce(le(F), N, X, K, P);
      throw (
        ((N = String(F)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(F).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return xe;
  }
  function ee(F, N, X) {
    if (F == null) return F;
    var K = [],
      P = 0;
    return (
      ce(F, K, "", "", function (pe) {
        return N.call(X, pe, P++);
      }),
      K
    );
  }
  function oe(F) {
    if (F._status === -1) {
      var N = F._result;
      (N = N()),
        N.then(
          function (X) {
            (F._status === 0 || F._status === -1) &&
              ((F._status = 1), (F._result = X));
          },
          function (X) {
            (F._status === 0 || F._status === -1) &&
              ((F._status = 2), (F._result = X));
          },
        ),
        F._status === -1 && ((F._status = 0), (F._result = N));
    }
    if (F._status === 1) return F._result.default;
    throw F._result;
  }
  var ie =
    typeof reportError == "function"
      ? reportError
      : function (F) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var N = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof F == "object" &&
                F !== null &&
                typeof F.message == "string"
                  ? String(F.message)
                  : String(F),
              error: F,
            });
            if (!window.dispatchEvent(N)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", F);
            return;
          }
          console.error(F);
        };
  function ve() {}
  return (
    (Me.Children = {
      map: ee,
      forEach: function (F, N, X) {
        ee(
          F,
          function () {
            N.apply(this, arguments);
          },
          X,
        );
      },
      count: function (F) {
        var N = 0;
        return (
          ee(F, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (F) {
        return (
          ee(F, function (N) {
            return N;
          }) || []
        );
      },
      only: function (F) {
        if (!q(F))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return F;
      },
    }),
    (Me.Component = A),
    (Me.Fragment = a),
    (Me.Profiler = l),
    (Me.PureComponent = C),
    (Me.StrictMode = s),
    (Me.Suspense = x),
    (Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
    (Me.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (Me.cache = function (F) {
      return function () {
        return F.apply(null, arguments);
      };
    }),
    (Me.cloneElement = function (F, N, X) {
      if (F == null)
        throw Error(
          "The argument must be a React element, but you passed " + F + ".",
        );
      var K = b({}, F.props),
        P = F.key,
        pe = void 0;
      if (N != null)
        for (xe in (N.ref !== void 0 && (pe = void 0),
        N.key !== void 0 && (P = "" + N.key),
        N))
          !z.call(N, xe) ||
            xe === "key" ||
            xe === "__self" ||
            xe === "__source" ||
            (xe === "ref" && N.ref === void 0) ||
            (K[xe] = N[xe]);
      var xe = arguments.length - 2;
      if (xe === 1) K.children = X;
      else if (1 < xe) {
        for (var Fe = Array(xe), me = 0; me < xe; me++)
          Fe[me] = arguments[me + 2];
        K.children = Fe;
      }
      return _(F.type, P, void 0, void 0, pe, K);
    }),
    (Me.createContext = function (F) {
      return (
        (F = {
          $$typeof: f,
          _currentValue: F,
          _currentValue2: F,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (F.Provider = F),
        (F.Consumer = { $$typeof: c, _context: F }),
        F
      );
    }),
    (Me.createElement = function (F, N, X) {
      var K,
        P = {},
        pe = null;
      if (N != null)
        for (K in (N.key !== void 0 && (pe = "" + N.key), N))
          z.call(N, K) &&
            K !== "key" &&
            K !== "__self" &&
            K !== "__source" &&
            (P[K] = N[K]);
      var xe = arguments.length - 2;
      if (xe === 1) P.children = X;
      else if (1 < xe) {
        for (var Fe = Array(xe), me = 0; me < xe; me++)
          Fe[me] = arguments[me + 2];
        P.children = Fe;
      }
      if (F && F.defaultProps)
        for (K in ((xe = F.defaultProps), xe))
          P[K] === void 0 && (P[K] = xe[K]);
      return _(F, pe, void 0, void 0, null, P);
    }),
    (Me.createRef = function () {
      return { current: null };
    }),
    (Me.forwardRef = function (F) {
      return { $$typeof: d, render: F };
    }),
    (Me.isValidElement = q),
    (Me.lazy = function (F) {
      return { $$typeof: m, _payload: { _status: -1, _result: F }, _init: oe };
    }),
    (Me.memo = function (F, N) {
      return { $$typeof: h, type: F, compare: N === void 0 ? null : N };
    }),
    (Me.startTransition = function (F) {
      var N = w.T,
        X = {};
      w.T = X;
      try {
        var K = F(),
          P = w.S;
        P !== null && P(X, K),
          typeof K == "object" &&
            K !== null &&
            typeof K.then == "function" &&
            K.then(ve, ie);
      } catch (pe) {
        ie(pe);
      } finally {
        w.T = N;
      }
    }),
    (Me.unstable_useCacheRefresh = function () {
      return w.H.useCacheRefresh();
    }),
    (Me.use = function (F) {
      return w.H.use(F);
    }),
    (Me.useActionState = function (F, N, X) {
      return w.H.useActionState(F, N, X);
    }),
    (Me.useCallback = function (F, N) {
      return w.H.useCallback(F, N);
    }),
    (Me.useContext = function (F) {
      return w.H.useContext(F);
    }),
    (Me.useDebugValue = function () {}),
    (Me.useDeferredValue = function (F, N) {
      return w.H.useDeferredValue(F, N);
    }),
    (Me.useEffect = function (F, N) {
      return w.H.useEffect(F, N);
    }),
    (Me.useId = function () {
      return w.H.useId();
    }),
    (Me.useImperativeHandle = function (F, N, X) {
      return w.H.useImperativeHandle(F, N, X);
    }),
    (Me.useInsertionEffect = function (F, N) {
      return w.H.useInsertionEffect(F, N);
    }),
    (Me.useLayoutEffect = function (F, N) {
      return w.H.useLayoutEffect(F, N);
    }),
    (Me.useMemo = function (F, N) {
      return w.H.useMemo(F, N);
    }),
    (Me.useOptimistic = function (F, N) {
      return w.H.useOptimistic(F, N);
    }),
    (Me.useReducer = function (F, N, X) {
      return w.H.useReducer(F, N, X);
    }),
    (Me.useRef = function (F) {
      return w.H.useRef(F);
    }),
    (Me.useState = function (F) {
      return w.H.useState(F);
    }),
    (Me.useSyncExternalStore = function (F, N, X) {
      return w.H.useSyncExternalStore(F, N, X);
    }),
    (Me.useTransition = function () {
      return w.H.useTransition();
    }),
    (Me.version = "19.0.0"),
    Me
  );
}
var em;
function Rh() {
  return em || ((em = 1), (gf.exports = XE())), gf.exports;
}
var $ = Rh();
const GE = $u($),
  KE = Kv({ __proto__: null, default: GE }, [$]);
var Ef = { exports: {} },
  Js = {},
  bf = { exports: {} },
  Af = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tm;
function ZE() {
  return (
    tm ||
      ((tm = 1),
      (function (t) {
        function n(ee, oe) {
          var ie = ee.length;
          ee.push(oe);
          e: for (; 0 < ie; ) {
            var ve = (ie - 1) >>> 1,
              F = ee[ve];
            if (0 < l(F, oe)) (ee[ve] = oe), (ee[ie] = F), (ie = ve);
            else break e;
          }
        }
        function a(ee) {
          return ee.length === 0 ? null : ee[0];
        }
        function s(ee) {
          if (ee.length === 0) return null;
          var oe = ee[0],
            ie = ee.pop();
          if (ie !== oe) {
            ee[0] = ie;
            e: for (var ve = 0, F = ee.length, N = F >>> 1; ve < N; ) {
              var X = 2 * (ve + 1) - 1,
                K = ee[X],
                P = X + 1,
                pe = ee[P];
              if (0 > l(K, ie))
                P < F && 0 > l(pe, K)
                  ? ((ee[ve] = pe), (ee[P] = ie), (ve = P))
                  : ((ee[ve] = K), (ee[X] = ie), (ve = X));
              else if (P < F && 0 > l(pe, ie))
                (ee[ve] = pe), (ee[P] = ie), (ve = P);
              else break e;
            }
          }
          return oe;
        }
        function l(ee, oe) {
          var ie = ee.sortIndex - oe.sortIndex;
          return ie !== 0 ? ie : ee.id - oe.id;
        }
        if (
          ((t.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var c = performance;
          t.unstable_now = function () {
            return c.now();
          };
        } else {
          var f = Date,
            d = f.now();
          t.unstable_now = function () {
            return f.now() - d;
          };
        }
        var x = [],
          h = [],
          m = 1,
          y = null,
          v = 3,
          g = !1,
          b = !1,
          S = !1,
          A = typeof setTimeout == "function" ? setTimeout : null,
          R = typeof clearTimeout == "function" ? clearTimeout : null,
          C = typeof setImmediate != "undefined" ? setImmediate : null;
        function D(ee) {
          for (var oe = a(h); oe !== null; ) {
            if (oe.callback === null) s(h);
            else if (oe.startTime <= ee)
              s(h), (oe.sortIndex = oe.expirationTime), n(x, oe);
            else break;
            oe = a(h);
          }
        }
        function T(ee) {
          if (((S = !1), D(ee), !b))
            if (a(x) !== null) (b = !0), le();
            else {
              var oe = a(h);
              oe !== null && ce(T, oe.startTime - ee);
            }
        }
        var w = !1,
          z = -1,
          _ = 5,
          L = -1;
        function q() {
          return !(t.unstable_now() - L < _);
        }
        function M() {
          if (w) {
            var ee = t.unstable_now();
            L = ee;
            var oe = !0;
            try {
              e: {
                (b = !1), S && ((S = !1), R(z), (z = -1)), (g = !0);
                var ie = v;
                try {
                  t: {
                    for (
                      D(ee), y = a(x);
                      y !== null && !(y.expirationTime > ee && q());

                    ) {
                      var ve = y.callback;
                      if (typeof ve == "function") {
                        (y.callback = null), (v = y.priorityLevel);
                        var F = ve(y.expirationTime <= ee);
                        if (((ee = t.unstable_now()), typeof F == "function")) {
                          (y.callback = F), D(ee), (oe = !0);
                          break t;
                        }
                        y === a(x) && s(x), D(ee);
                      } else s(x);
                      y = a(x);
                    }
                    if (y !== null) oe = !0;
                    else {
                      var N = a(h);
                      N !== null && ce(T, N.startTime - ee), (oe = !1);
                    }
                  }
                  break e;
                } finally {
                  (y = null), (v = ie), (g = !1);
                }
                oe = void 0;
              }
            } finally {
              oe ? j() : (w = !1);
            }
          }
        }
        var j;
        if (typeof C == "function")
          j = function () {
            C(M);
          };
        else if (typeof MessageChannel != "undefined") {
          var J = new MessageChannel(),
            I = J.port2;
          (J.port1.onmessage = M),
            (j = function () {
              I.postMessage(null);
            });
        } else
          j = function () {
            A(M, 0);
          };
        function le() {
          w || ((w = !0), j());
        }
        function ce(ee, oe) {
          z = A(function () {
            ee(t.unstable_now());
          }, oe);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (ee) {
            ee.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            b || g || ((b = !0), le());
          }),
          (t.unstable_forceFrameRate = function (ee) {
            0 > ee || 125 < ee
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (_ = 0 < ee ? Math.floor(1e3 / ee) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return v;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return a(x);
          }),
          (t.unstable_next = function (ee) {
            switch (v) {
              case 1:
              case 2:
              case 3:
                var oe = 3;
                break;
              default:
                oe = v;
            }
            var ie = v;
            v = oe;
            try {
              return ee();
            } finally {
              v = ie;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (ee, oe) {
            switch (ee) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                ee = 3;
            }
            var ie = v;
            v = ee;
            try {
              return oe();
            } finally {
              v = ie;
            }
          }),
          (t.unstable_scheduleCallback = function (ee, oe, ie) {
            var ve = t.unstable_now();
            switch (
              (typeof ie == "object" && ie !== null
                ? ((ie = ie.delay),
                  (ie = typeof ie == "number" && 0 < ie ? ve + ie : ve))
                : (ie = ve),
              ee)
            ) {
              case 1:
                var F = -1;
                break;
              case 2:
                F = 250;
                break;
              case 5:
                F = 1073741823;
                break;
              case 4:
                F = 1e4;
                break;
              default:
                F = 5e3;
            }
            return (
              (F = ie + F),
              (ee = {
                id: m++,
                callback: oe,
                priorityLevel: ee,
                startTime: ie,
                expirationTime: F,
                sortIndex: -1,
              }),
              ie > ve
                ? ((ee.sortIndex = ie),
                  n(h, ee),
                  a(x) === null &&
                    ee === a(h) &&
                    (S ? (R(z), (z = -1)) : (S = !0), ce(T, ie - ve)))
                : ((ee.sortIndex = F), n(x, ee), b || g || ((b = !0), le())),
              ee
            );
          }),
          (t.unstable_shouldYield = q),
          (t.unstable_wrapCallback = function (ee) {
            var oe = v;
            return function () {
              var ie = v;
              v = oe;
              try {
                return ee.apply(this, arguments);
              } finally {
                v = ie;
              }
            };
          });
      })(Af)),
    Af
  );
}
var nm;
function QE() {
  return nm || ((nm = 1), (bf.exports = ZE())), bf.exports;
}
var Sf = { exports: {} },
  Zt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var im;
function $E() {
  if (im) return Zt;
  im = 1;
  var t = Rh();
  function n(x) {
    var h = "https://react.dev/errors/" + x;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++)
        h += "&args[]=" + encodeURIComponent(arguments[m]);
    }
    return (
      "Minified React error #" +
      x +
      "; visit " +
      h +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function a() {}
  var s = {
      d: {
        f: a,
        r: function () {
          throw Error(n(522));
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a,
      },
      p: 0,
      findDOMNode: null,
    },
    l = Symbol.for("react.portal");
  function c(x, h, m) {
    var y =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: y == null ? null : "" + y,
      children: x,
      containerInfo: h,
      implementation: m,
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(x, h) {
    if (x === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return (
    (Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (Zt.createPortal = function (x, h) {
      var m =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(n(299));
      return c(x, h, null, m);
    }),
    (Zt.flushSync = function (x) {
      var h = f.T,
        m = s.p;
      try {
        if (((f.T = null), (s.p = 2), x)) return x();
      } finally {
        (f.T = h), (s.p = m), s.d.f();
      }
    }),
    (Zt.preconnect = function (x, h) {
      typeof x == "string" &&
        (h
          ? ((h = h.crossOrigin),
            (h =
              typeof h == "string"
                ? h === "use-credentials"
                  ? h
                  : ""
                : void 0))
          : (h = null),
        s.d.C(x, h));
    }),
    (Zt.prefetchDNS = function (x) {
      typeof x == "string" && s.d.D(x);
    }),
    (Zt.preinit = function (x, h) {
      if (typeof x == "string" && h && typeof h.as == "string") {
        var m = h.as,
          y = d(m, h.crossOrigin),
          v = typeof h.integrity == "string" ? h.integrity : void 0,
          g = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        m === "style"
          ? s.d.S(x, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: y,
              integrity: v,
              fetchPriority: g,
            })
          : m === "script" &&
            s.d.X(x, {
              crossOrigin: y,
              integrity: v,
              fetchPriority: g,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
      }
    }),
    (Zt.preinitModule = function (x, h) {
      if (typeof x == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var m = d(h.as, h.crossOrigin);
            s.d.M(x, {
              crossOrigin: m,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
          }
        } else h == null && s.d.M(x);
    }),
    (Zt.preload = function (x, h) {
      if (
        typeof x == "string" &&
        typeof h == "object" &&
        h !== null &&
        typeof h.as == "string"
      ) {
        var m = h.as,
          y = d(m, h.crossOrigin);
        s.d.L(x, m, {
          crossOrigin: y,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0,
          type: typeof h.type == "string" ? h.type : void 0,
          fetchPriority:
            typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
          referrerPolicy:
            typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
          imageSrcSet:
            typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
          media: typeof h.media == "string" ? h.media : void 0,
        });
      }
    }),
    (Zt.preloadModule = function (x, h) {
      if (typeof x == "string")
        if (h) {
          var m = d(h.as, h.crossOrigin);
          s.d.m(x, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: m,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          });
        } else s.d.m(x);
    }),
    (Zt.requestFormReset = function (x) {
      s.d.r(x);
    }),
    (Zt.unstable_batchedUpdates = function (x, h) {
      return x(h);
    }),
    (Zt.useFormState = function (x, h, m) {
      return f.H.useFormState(x, h, m);
    }),
    (Zt.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (Zt.version = "19.0.0"),
    Zt
  );
}
var am;
function Zv() {
  if (am) return Sf.exports;
  am = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  return t(), (Sf.exports = $E()), Sf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rm;
function WE() {
  if (rm) return Js;
  rm = 1;
  var t = QE(),
    n = Rh(),
    a = Zv();
  function s(e) {
    var i = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      i += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++)
        i += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      i +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  var c = Symbol.for("react.element"),
    f = Symbol.for("react.transitional.element"),
    d = Symbol.for("react.portal"),
    x = Symbol.for("react.fragment"),
    h = Symbol.for("react.strict_mode"),
    m = Symbol.for("react.profiler"),
    y = Symbol.for("react.provider"),
    v = Symbol.for("react.consumer"),
    g = Symbol.for("react.context"),
    b = Symbol.for("react.forward_ref"),
    S = Symbol.for("react.suspense"),
    A = Symbol.for("react.suspense_list"),
    R = Symbol.for("react.memo"),
    C = Symbol.for("react.lazy"),
    D = Symbol.for("react.offscreen"),
    T = Symbol.for("react.memo_cache_sentinel"),
    w = Symbol.iterator;
  function z(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (w && e[w]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var _ = Symbol.for("react.client.reference");
  function L(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === _ ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case x:
        return "Fragment";
      case d:
        return "Portal";
      case m:
        return "Profiler";
      case h:
        return "StrictMode";
      case S:
        return "Suspense";
      case A:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case g:
          return (e.displayName || "Context") + ".Provider";
        case v:
          return (e._context.displayName || "Context") + ".Consumer";
        case b:
          var i = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = i.displayName || i.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case R:
          return (
            (i = e.displayName || null), i !== null ? i : L(e.type) || "Memo"
          );
        case C:
          (i = e._payload), (e = e._init);
          try {
            return L(e(i));
          } catch (r) {}
      }
    return null;
  }
  var q = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    M = Object.assign,
    j,
    J;
  function I(e) {
    if (j === void 0)
      try {
        throw Error();
      } catch (r) {
        var i = r.stack.trim().match(/\n( *(at )?)/);
        (j = (i && i[1]) || ""),
          (J =
            -1 <
            r.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < r.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      j +
      e +
      J
    );
  }
  var le = !1;
  function ce(e, i) {
    if (!e || le) return "";
    le = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (i) {
              var se = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(se.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(se, []);
                } catch (te) {
                  var Q = te;
                }
                Reflect.construct(e, [], se);
              } else {
                try {
                  se.call();
                } catch (te) {
                  Q = te;
                }
                e.call(se.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (te) {
                Q = te;
              }
              (se = e()) &&
                typeof se.catch == "function" &&
                se.catch(function () {});
            }
          } catch (te) {
            if (te && Q && typeof te.stack == "string")
              return [te.stack, Q.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var p = o.DetermineComponentFrameRoot(),
        E = p[0],
        B = p[1];
      if (E && B) {
        var O = E.split(`
`),
          V = B.split(`
`);
        for (
          u = o = 0;
          o < O.length && !O[o].includes("DetermineComponentFrameRoot");

        )
          o++;
        for (; u < V.length && !V[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (o === O.length || u === V.length)
          for (
            o = O.length - 1, u = V.length - 1;
            1 <= o && 0 <= u && O[o] !== V[u];

          )
            u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (O[o] !== V[u]) {
            if (o !== 1 || u !== 1)
              do
                if ((o--, u--, 0 > u || O[o] !== V[u])) {
                  var ne =
                    `
` + O[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      ne.includes("<anonymous>") &&
                      (ne = ne.replace("<anonymous>", e.displayName)),
                    ne
                  );
                }
              while (1 <= o && 0 <= u);
            break;
          }
      }
    } finally {
      (le = !1), (Error.prepareStackTrace = r);
    }
    return (r = e ? e.displayName || e.name : "") ? I(r) : "";
  }
  function ee(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return I(e.type);
      case 16:
        return I("Lazy");
      case 13:
        return I("Suspense");
      case 19:
        return I("SuspenseList");
      case 0:
      case 15:
        return (e = ce(e.type, !1)), e;
      case 11:
        return (e = ce(e.type.render, !1)), e;
      case 1:
        return (e = ce(e.type, !0)), e;
      default:
        return "";
    }
  }
  function oe(e) {
    try {
      var i = "";
      do (i += ee(e)), (e = e.return);
      while (e);
      return i;
    } catch (r) {
      return (
        `
Error generating stack: ` +
        r.message +
        `
` +
        r.stack
      );
    }
  }
  function ie(e) {
    var i = e,
      r = e;
    if (e.alternate) for (; i.return; ) i = i.return;
    else {
      e = i;
      do (i = e), (i.flags & 4098) !== 0 && (r = i.return), (e = i.return);
      while (e);
    }
    return i.tag === 3 ? r : null;
  }
  function ve(e) {
    if (e.tag === 13) {
      var i = e.memoizedState;
      if (
        (i === null && ((e = e.alternate), e !== null && (i = e.memoizedState)),
        i !== null)
      )
        return i.dehydrated;
    }
    return null;
  }
  function F(e) {
    if (ie(e) !== e) throw Error(s(188));
  }
  function N(e) {
    var i = e.alternate;
    if (!i) {
      if (((i = ie(e)), i === null)) throw Error(s(188));
      return i !== e ? null : e;
    }
    for (var r = e, o = i; ; ) {
      var u = r.return;
      if (u === null) break;
      var p = u.alternate;
      if (p === null) {
        if (((o = u.return), o !== null)) {
          r = o;
          continue;
        }
        break;
      }
      if (u.child === p.child) {
        for (p = u.child; p; ) {
          if (p === r) return F(u), e;
          if (p === o) return F(u), i;
          p = p.sibling;
        }
        throw Error(s(188));
      }
      if (r.return !== o.return) (r = u), (o = p);
      else {
        for (var E = !1, B = u.child; B; ) {
          if (B === r) {
            (E = !0), (r = u), (o = p);
            break;
          }
          if (B === o) {
            (E = !0), (o = u), (r = p);
            break;
          }
          B = B.sibling;
        }
        if (!E) {
          for (B = p.child; B; ) {
            if (B === r) {
              (E = !0), (r = p), (o = u);
              break;
            }
            if (B === o) {
              (E = !0), (o = p), (r = u);
              break;
            }
            B = B.sibling;
          }
          if (!E) throw Error(s(189));
        }
      }
      if (r.alternate !== o) throw Error(s(190));
    }
    if (r.tag !== 3) throw Error(s(188));
    return r.stateNode.current === r ? e : i;
  }
  function X(e) {
    var i = e.tag;
    if (i === 5 || i === 26 || i === 27 || i === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((i = X(e)), i !== null)) return i;
      e = e.sibling;
    }
    return null;
  }
  var K = Array.isArray,
    P = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    pe = { pending: !1, data: null, method: null, action: null },
    xe = [],
    Fe = -1;
  function me(e) {
    return { current: e };
  }
  function Je(e) {
    0 > Fe || ((e.current = xe[Fe]), (xe[Fe] = null), Fe--);
  }
  function Xe(e, i) {
    Fe++, (xe[Fe] = e.current), (e.current = i);
  }
  var Pt = me(null),
    tt = me(null),
    nt = me(null),
    vt = me(null);
  function Pn(e, i) {
    switch ((Xe(nt, i), Xe(tt, e), Xe(Pt, null), (e = i.nodeType), e)) {
      case 9:
      case 11:
        i = (i = i.documentElement) && (i = i.namespaceURI) ? Ax(i) : 0;
        break;
      default:
        if (
          ((e = e === 8 ? i.parentNode : i),
          (i = e.tagName),
          (e = e.namespaceURI))
        )
          (e = Ax(e)), (i = Sx(e, i));
        else
          switch (i) {
            case "svg":
              i = 1;
              break;
            case "math":
              i = 2;
              break;
            default:
              i = 0;
          }
    }
    Je(Pt), Xe(Pt, i);
  }
  function bt() {
    Je(Pt), Je(tt), Je(nt);
  }
  function ai(e) {
    e.memoizedState !== null && Xe(vt, e);
    var i = Pt.current,
      r = Sx(i, e.type);
    i !== r && (Xe(tt, e), Xe(Pt, r));
  }
  function An(e) {
    tt.current === e && (Je(Pt), Je(tt)),
      vt.current === e && (Je(vt), (Gs._currentValue = pe));
  }
  var ri = Object.prototype.hasOwnProperty,
    Yn = t.unstable_scheduleCallback,
    Ut = t.unstable_cancelCallback,
    Yt = t.unstable_shouldYield,
    Sn = t.unstable_requestPaint,
    ct = t.unstable_now,
    si = t.unstable_getCurrentPriorityLevel,
    Cn = t.unstable_ImmediatePriority,
    Dn = t.unstable_UserBlockingPriority,
    Wt = t.unstable_NormalPriority,
    nn = t.unstable_LowPriority,
    ji = t.unstable_IdlePriority,
    dn = t.log,
    yi = t.unstable_setDisableYieldValue,
    Xt = null,
    wt = null;
  function Sa(e) {
    if (wt && typeof wt.onCommitFiberRoot == "function")
      try {
        wt.onCommitFiberRoot(Xt, e, void 0, (e.current.flags & 128) === 128);
      } catch (i) {}
  }
  function pn(e) {
    if (
      (typeof dn == "function" && yi(e),
      wt && typeof wt.setStrictMode == "function")
    )
      try {
        wt.setStrictMode(Xt, e);
      } catch (i) {}
  }
  var kt = Math.clz32 ? Math.clz32 : Da,
    Ca = Math.log,
    Pi = Math.LN2;
  function Da(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Ca(e) / Pi) | 0)) | 0;
  }
  var oi = 128,
    Xn = 4194304;
  function Gn(e) {
    var i = e & 42;
    if (i !== 0) return i;
    switch (e & -e) {
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
        return 64;
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
        return e & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function vi(e, i) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var o = 0,
      u = e.suspendedLanes,
      p = e.pingedLanes,
      E = e.warmLanes;
    e = e.finishedLanes !== 0;
    var B = r & 134217727;
    return (
      B !== 0
        ? ((r = B & ~u),
          r !== 0
            ? (o = Gn(r))
            : ((p &= B),
              p !== 0
                ? (o = Gn(p))
                : e || ((E = B & ~E), E !== 0 && (o = Gn(E)))))
        : ((B = r & ~u),
          B !== 0
            ? (o = Gn(B))
            : p !== 0
              ? (o = Gn(p))
              : e || ((E = r & ~E), E !== 0 && (o = Gn(E)))),
      o === 0
        ? 0
        : i !== 0 &&
            i !== o &&
            (i & u) === 0 &&
            ((u = o & -o),
            (E = i & -i),
            u >= E || (u === 32 && (E & 4194176) !== 0))
          ? i
          : o
    );
  }
  function gi(e, i) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & i) === 0;
  }
  function Ba(e, i) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
        return i + 250;
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
        return i + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ei() {
    var e = oi;
    return (oi <<= 1), (oi & 4194176) === 0 && (oi = 128), e;
  }
  function bi() {
    var e = Xn;
    return (Xn <<= 1), (Xn & 62914560) === 0 && (Xn = 4194304), e;
  }
  function Yi(e) {
    for (var i = [], r = 0; 31 > r; r++) i.push(e);
    return i;
  }
  function Ai(e, i) {
    (e.pendingLanes |= i),
      i !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function U(e, i, r, o, u, p) {
    var E = e.pendingLanes;
    (e.pendingLanes = r),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= r),
      (e.entangledLanes &= r),
      (e.errorRecoveryDisabledLanes &= r),
      (e.shellSuspendCounter = 0);
    var B = e.entanglements,
      O = e.expirationTimes,
      V = e.hiddenUpdates;
    for (r = E & ~r; 0 < r; ) {
      var ne = 31 - kt(r),
        se = 1 << ne;
      (B[ne] = 0), (O[ne] = -1);
      var Q = V[ne];
      if (Q !== null)
        for (V[ne] = null, ne = 0; ne < Q.length; ne++) {
          var te = Q[ne];
          te !== null && (te.lane &= -536870913);
        }
      r &= ~se;
    }
    o !== 0 && H(e, o, 0),
      p !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= p & ~(E & ~i));
  }
  function H(e, i, r) {
    (e.pendingLanes |= i), (e.suspendedLanes &= ~i);
    var o = 31 - kt(i);
    (e.entangledLanes |= i),
      (e.entanglements[o] = e.entanglements[o] | 1073741824 | (r & 4194218));
  }
  function Z(e, i) {
    var r = (e.entangledLanes |= i);
    for (e = e.entanglements; r; ) {
      var o = 31 - kt(r),
        u = 1 << o;
      (u & i) | (e[o] & i) && (e[o] |= i), (r &= ~u);
    }
  }
  function re(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function fe() {
    var e = P.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : qx(e.type));
  }
  function Ae(e, i) {
    var r = P.p;
    try {
      return (P.p = e), i();
    } finally {
      P.p = r;
    }
  }
  var Ce = Math.random().toString(36).slice(2),
    he = "__reactFiber$" + Ce,
    de = "__reactProps$" + Ce,
    ye = "__reactContainer$" + Ce,
    Ee = "__reactEvents$" + Ce,
    Re = "__reactListeners$" + Ce,
    Ue = "__reactHandles$" + Ce,
    At = "__reactResources$" + Ce,
    Ge = "__reactMarker$" + Ce;
  function ke(e) {
    delete e[he], delete e[de], delete e[Ee], delete e[Re], delete e[Ue];
  }
  function Qe(e) {
    var i = e[he];
    if (i) return i;
    for (var r = e.parentNode; r; ) {
      if ((i = r[ye] || r[he])) {
        if (
          ((r = i.alternate),
          i.child !== null || (r !== null && r.child !== null))
        )
          for (e = Bx(e); e !== null; ) {
            if ((r = e[he])) return r;
            e = Bx(e);
          }
        return i;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function xn(e) {
    if ((e = e[he] || e[ye])) {
      var i = e.tag;
      if (i === 5 || i === 6 || i === 13 || i === 26 || i === 27 || i === 3)
        return e;
    }
    return null;
  }
  function Kn(e) {
    var i = e.tag;
    if (i === 5 || i === 26 || i === 27 || i === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Gt(e) {
    var i = e[At];
    return (
      i ||
        (i = e[At] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      i
    );
  }
  function $e(e) {
    e[Ge] = !0;
  }
  var ur = new Set(),
    Xi = {};
  function Jt(e, i) {
    Zn(e, i), Zn(e + "Capture", i);
  }
  function Zn(e, i) {
    for (Xi[e] = i, e = 0; e < i.length; e++) ur.add(i[e]);
  }
  var an = !(
      typeof window == "undefined" ||
      typeof window.document == "undefined" ||
      typeof window.document.createElement == "undefined"
    ),
    Pe = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    st = {},
    Si = {};
  function _a(e) {
    return ri.call(Si, e)
      ? !0
      : ri.call(st, e)
        ? !1
        : Pe.test(e)
          ? (Si[e] = !0)
          : ((st[e] = !0), !1);
  }
  function ot(e, i, r) {
    if (_a(i))
      if (r === null) e.removeAttribute(i);
      else {
        switch (typeof r) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(i);
            return;
          case "boolean":
            var o = i.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(i);
              return;
            }
        }
        e.setAttribute(i, "" + r);
      }
  }
  function Qn(e, i, r) {
    if (r === null) e.removeAttribute(i);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(i);
          return;
      }
      e.setAttribute(i, "" + r);
    }
  }
  function Bn(e, i, r, o) {
    if (o === null) e.removeAttribute(r);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(r);
          return;
      }
      e.setAttributeNS(i, r, "" + o);
    }
  }
  function rn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Dd(e) {
    var i = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (i === "checkbox" || i === "radio")
    );
  }
  function F4(e) {
    var i = Dd(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, i),
      o = "" + e[i];
    if (
      !e.hasOwnProperty(i) &&
      typeof r != "undefined" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var u = r.get,
        p = r.set;
      return (
        Object.defineProperty(e, i, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (E) {
            (o = "" + E), p.call(this, E);
          },
        }),
        Object.defineProperty(e, i, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (E) {
            o = "" + E;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[i];
          },
        }
      );
    }
  }
  function Oo(e) {
    e._valueTracker || (e._valueTracker = F4(e));
  }
  function Bd(e) {
    if (!e) return !1;
    var i = e._valueTracker;
    if (!i) return !0;
    var r = i.getValue(),
      o = "";
    return (
      e && (o = Dd(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== r ? (i.setValue(e), !0) : !1
    );
  }
  function Fo(e) {
    if (
      ((e = e || (typeof document != "undefined" ? document : void 0)),
      typeof e == "undefined")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch (i) {
      return e.body;
    }
  }
  var z4 = /[\n"\\]/g;
  function _n(e) {
    return e.replace(z4, function (i) {
      return "\\" + i.charCodeAt(0).toString(16) + " ";
    });
  }
  function hc(e, i, r, o, u, p, E, B) {
    (e.name = ""),
      E != null &&
      typeof E != "function" &&
      typeof E != "symbol" &&
      typeof E != "boolean"
        ? (e.type = E)
        : e.removeAttribute("type"),
      i != null
        ? E === "number"
          ? ((i === 0 && e.value === "") || e.value != i) &&
            (e.value = "" + rn(i))
          : e.value !== "" + rn(i) && (e.value = "" + rn(i))
        : (E !== "submit" && E !== "reset") || e.removeAttribute("value"),
      i != null
        ? dc(e, E, rn(i))
        : r != null
          ? dc(e, E, rn(r))
          : o != null && e.removeAttribute("value"),
      u == null && p != null && (e.defaultChecked = !!p),
      u != null &&
        (e.checked = u && typeof u != "function" && typeof u != "symbol"),
      B != null &&
      typeof B != "function" &&
      typeof B != "symbol" &&
      typeof B != "boolean"
        ? (e.name = "" + rn(B))
        : e.removeAttribute("name");
  }
  function _d(e, i, r, o, u, p, E, B) {
    if (
      (p != null &&
        typeof p != "function" &&
        typeof p != "symbol" &&
        typeof p != "boolean" &&
        (e.type = p),
      i != null || r != null)
    ) {
      if (!((p !== "submit" && p !== "reset") || i != null)) return;
      (r = r != null ? "" + rn(r) : ""),
        (i = i != null ? "" + rn(i) : r),
        B || i === e.value || (e.value = i),
        (e.defaultValue = i);
    }
    (o = o != null ? o : u),
      (o = typeof o != "function" && typeof o != "symbol" && !!o),
      (e.checked = B ? e.checked : !!o),
      (e.defaultChecked = !!o),
      E != null &&
        typeof E != "function" &&
        typeof E != "symbol" &&
        typeof E != "boolean" &&
        (e.name = E);
  }
  function dc(e, i, r) {
    (i === "number" && Fo(e.ownerDocument) === e) ||
      e.defaultValue === "" + r ||
      (e.defaultValue = "" + r);
  }
  function cr(e, i, r, o) {
    if (((e = e.options), i)) {
      i = {};
      for (var u = 0; u < r.length; u++) i["$" + r[u]] = !0;
      for (r = 0; r < e.length; r++)
        (u = i.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== u && (e[r].selected = u),
          u && o && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + rn(r), i = null, u = 0; u < e.length; u++) {
        if (e[u].value === r) {
          (e[u].selected = !0), o && (e[u].defaultSelected = !0);
          return;
        }
        i !== null || e[u].disabled || (i = e[u]);
      }
      i !== null && (i.selected = !0);
    }
  }
  function Td(e, i, r) {
    if (
      i != null &&
      ((i = "" + rn(i)), i !== e.value && (e.value = i), r == null)
    ) {
      e.defaultValue !== i && (e.defaultValue = i);
      return;
    }
    e.defaultValue = r != null ? "" + rn(r) : "";
  }
  function Rd(e, i, r, o) {
    if (i == null) {
      if (o != null) {
        if (r != null) throw Error(s(92));
        if (K(o)) {
          if (1 < o.length) throw Error(s(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), (i = r);
    }
    (r = rn(i)),
      (e.defaultValue = r),
      (o = e.textContent),
      o === r && o !== "" && o !== null && (e.value = o);
  }
  function fr(e, i) {
    if (i) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = i;
        return;
      }
    }
    e.textContent = i;
  }
  var L4 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function wd(e, i, r) {
    var o = i.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === ""
      ? o
        ? e.setProperty(i, "")
        : i === "float"
          ? (e.cssFloat = "")
          : (e[i] = "")
      : o
        ? e.setProperty(i, r)
        : typeof r != "number" || r === 0 || L4.has(i)
          ? i === "float"
            ? (e.cssFloat = r)
            : (e[i] = ("" + r).trim())
          : (e[i] = r + "px");
  }
  function Md(e, i, r) {
    if (i != null && typeof i != "object") throw Error(s(62));
    if (((e = e.style), r != null)) {
      for (var o in r)
        !r.hasOwnProperty(o) ||
          (i != null && i.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? e.setProperty(o, "")
            : o === "float"
              ? (e.cssFloat = "")
              : (e[o] = ""));
      for (var u in i)
        (o = i[u]), i.hasOwnProperty(u) && r[u] !== o && wd(e, u, o);
    } else for (var p in i) i.hasOwnProperty(p) && wd(e, p, i[p]);
  }
  function pc(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
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
  var N4 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    U4 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function zo(e) {
    return U4.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var xc = null;
  function mc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var hr = null,
    dr = null;
  function Od(e) {
    var i = xn(e);
    if (i && (e = i.stateNode)) {
      var r = e[de] || null;
      e: switch (((e = i.stateNode), i.type)) {
        case "input":
          if (
            (hc(
              e,
              r.value,
              r.defaultValue,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
            ),
            (i = r.name),
            r.type === "radio" && i != null)
          ) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                'input[name="' + _n("" + i) + '"][type="radio"]',
              ),
                i = 0;
              i < r.length;
              i++
            ) {
              var o = r[i];
              if (o !== e && o.form === e.form) {
                var u = o[de] || null;
                if (!u) throw Error(s(90));
                hc(
                  o,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (i = 0; i < r.length; i++)
              (o = r[i]), o.form === e.form && Bd(o);
          }
          break e;
        case "textarea":
          Td(e, r.value, r.defaultValue);
          break e;
        case "select":
          (i = r.value), i != null && cr(e, !!r.multiple, i, !1);
      }
    }
  }
  var yc = !1;
  function Fd(e, i, r) {
    if (yc) return e(i, r);
    yc = !0;
    try {
      var o = e(i);
      return o;
    } finally {
      if (
        ((yc = !1),
        (hr !== null || dr !== null) &&
          (yl(), hr && ((i = hr), (e = dr), (dr = hr = null), Od(i), e)))
      )
        for (i = 0; i < e.length; i++) Od(e[i]);
    }
  }
  function ss(e, i) {
    var r = e.stateNode;
    if (r === null) return null;
    var o = r[de] || null;
    if (o === null) return null;
    r = o[i];
    e: switch (i) {
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
        (o = !o.disabled) ||
          ((e = e.type),
          (o = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !o);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(s(231, i, typeof r));
    return r;
  }
  var vc = !1;
  if (an)
    try {
      var os = {};
      Object.defineProperty(os, "passive", {
        get: function () {
          vc = !0;
        },
      }),
        window.addEventListener("test", os, os),
        window.removeEventListener("test", os, os);
    } catch (e) {
      vc = !1;
    }
  var Gi = null,
    gc = null,
    Lo = null;
  function zd() {
    if (Lo) return Lo;
    var e,
      i = gc,
      r = i.length,
      o,
      u = "value" in Gi ? Gi.value : Gi.textContent,
      p = u.length;
    for (e = 0; e < r && i[e] === u[e]; e++);
    var E = r - e;
    for (o = 1; o <= E && i[r - o] === u[p - o]; o++);
    return (Lo = u.slice(e, 1 < o ? 1 - o : void 0));
  }
  function No(e) {
    var i = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && i === 13 && (e = 13))
        : (e = i),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Uo() {
    return !0;
  }
  function Ld() {
    return !1;
  }
  function sn(e) {
    function i(r, o, u, p, E) {
      (this._reactName = r),
        (this._targetInst = u),
        (this.type = o),
        (this.nativeEvent = p),
        (this.target = E),
        (this.currentTarget = null);
      for (var B in e)
        e.hasOwnProperty(B) && ((r = e[B]), (this[B] = r ? r(p) : p[B]));
      return (
        (this.isDefaultPrevented = (
          p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
        )
          ? Uo
          : Ld),
        (this.isPropagationStopped = Ld),
        this
      );
    }
    return (
      M(i.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = Uo));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = Uo));
        },
        persist: function () {},
        isPersistent: Uo,
      }),
      i
    );
  }
  var Ta = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ko = sn(Ta),
    ls = M({}, Ta, { view: 0, detail: 0 }),
    k4 = sn(ls),
    Ec,
    bc,
    us,
    Ho = M({}, ls, {
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
      getModifierState: Sc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== us &&
              (us && e.type === "mousemove"
                ? ((Ec = e.screenX - us.screenX), (bc = e.screenY - us.screenY))
                : (bc = Ec = 0),
              (us = e)),
            Ec);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : bc;
      },
    }),
    Nd = sn(Ho),
    H4 = M({}, Ho, { dataTransfer: 0 }),
    V4 = sn(H4),
    q4 = M({}, ls, { relatedTarget: 0 }),
    Ac = sn(q4),
    j4 = M({}, Ta, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    P4 = sn(j4),
    Y4 = M({}, Ta, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    X4 = sn(Y4),
    G4 = M({}, Ta, { data: 0 }),
    Ud = sn(G4),
    K4 = {
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
      MozPrintableKey: "Unidentified",
    },
    Z4 = {
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
      224: "Meta",
    },
    Q4 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function $4(e) {
    var i = this.nativeEvent;
    return i.getModifierState
      ? i.getModifierState(e)
      : (e = Q4[e])
        ? !!i[e]
        : !1;
  }
  function Sc() {
    return $4;
  }
  var W4 = M({}, ls, {
      key: function (e) {
        if (e.key) {
          var i = K4[e.key] || e.key;
          if (i !== "Unidentified") return i;
        }
        return e.type === "keypress"
          ? ((e = No(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Z4[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Sc,
      charCode: function (e) {
        return e.type === "keypress" ? No(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? No(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    J4 = sn(W4),
    I4 = M({}, Ho, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    kd = sn(I4),
    e8 = M({}, ls, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Sc,
    }),
    t8 = sn(e8),
    n8 = M({}, Ta, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    i8 = sn(n8),
    a8 = M({}, Ho, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    r8 = sn(a8),
    s8 = M({}, Ta, { newState: 0, oldState: 0 }),
    o8 = sn(s8),
    l8 = [9, 13, 27, 32],
    Cc = an && "CompositionEvent" in window,
    cs = null;
  an && "documentMode" in document && (cs = document.documentMode);
  var u8 = an && "TextEvent" in window && !cs,
    Hd = an && (!Cc || (cs && 8 < cs && 11 >= cs)),
    Vd = " ",
    qd = !1;
  function jd(e, i) {
    switch (e) {
      case "keyup":
        return l8.indexOf(i.keyCode) !== -1;
      case "keydown":
        return i.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Pd(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var pr = !1;
  function c8(e, i) {
    switch (e) {
      case "compositionend":
        return Pd(i);
      case "keypress":
        return i.which !== 32 ? null : ((qd = !0), Vd);
      case "textInput":
        return (e = i.data), e === Vd && qd ? null : e;
      default:
        return null;
    }
  }
  function f8(e, i) {
    if (pr)
      return e === "compositionend" || (!Cc && jd(e, i))
        ? ((e = zd()), (Lo = gc = Gi = null), (pr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(i.ctrlKey || i.altKey || i.metaKey) || (i.ctrlKey && i.altKey)) {
          if (i.char && 1 < i.char.length) return i.char;
          if (i.which) return String.fromCharCode(i.which);
        }
        return null;
      case "compositionend":
        return Hd && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var h8 = {
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
    week: !0,
  };
  function Yd(e) {
    var i = e && e.nodeName && e.nodeName.toLowerCase();
    return i === "input" ? !!h8[e.type] : i === "textarea";
  }
  function Xd(e, i, r, o) {
    hr ? (dr ? dr.push(o) : (dr = [o])) : (hr = o),
      (i = Al(i, "onChange")),
      0 < i.length &&
        ((r = new ko("onChange", "change", null, r, o)),
        e.push({ event: r, listeners: i }));
  }
  var fs = null,
    hs = null;
  function d8(e) {
    yx(e, 0);
  }
  function Vo(e) {
    var i = Kn(e);
    if (Bd(i)) return e;
  }
  function Gd(e, i) {
    if (e === "change") return i;
  }
  var Kd = !1;
  if (an) {
    var Dc;
    if (an) {
      var Bc = "oninput" in document;
      if (!Bc) {
        var Zd = document.createElement("div");
        Zd.setAttribute("oninput", "return;"),
          (Bc = typeof Zd.oninput == "function");
      }
      Dc = Bc;
    } else Dc = !1;
    Kd = Dc && (!document.documentMode || 9 < document.documentMode);
  }
  function Qd() {
    fs && (fs.detachEvent("onpropertychange", $d), (hs = fs = null));
  }
  function $d(e) {
    if (e.propertyName === "value" && Vo(hs)) {
      var i = [];
      Xd(i, hs, e, mc(e)), Fd(d8, i);
    }
  }
  function p8(e, i, r) {
    e === "focusin"
      ? (Qd(), (fs = i), (hs = r), fs.attachEvent("onpropertychange", $d))
      : e === "focusout" && Qd();
  }
  function x8(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Vo(hs);
  }
  function m8(e, i) {
    if (e === "click") return Vo(i);
  }
  function y8(e, i) {
    if (e === "input" || e === "change") return Vo(i);
  }
  function v8(e, i) {
    return (e === i && (e !== 0 || 1 / e === 1 / i)) || (e !== e && i !== i);
  }
  var mn = typeof Object.is == "function" ? Object.is : v8;
  function ds(e, i) {
    if (mn(e, i)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof i != "object" ||
      i === null
    )
      return !1;
    var r = Object.keys(e),
      o = Object.keys(i);
    if (r.length !== o.length) return !1;
    for (o = 0; o < r.length; o++) {
      var u = r[o];
      if (!ri.call(i, u) || !mn(e[u], i[u])) return !1;
    }
    return !0;
  }
  function Wd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Jd(e, i) {
    var r = Wd(e);
    e = 0;
    for (var o; r; ) {
      if (r.nodeType === 3) {
        if (((o = e + r.textContent.length), e <= i && o >= i))
          return { node: r, offset: i - e };
        e = o;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Wd(r);
    }
  }
  function Id(e, i) {
    return e && i
      ? e === i
        ? !0
        : e && e.nodeType === 3
          ? !1
          : i && i.nodeType === 3
            ? Id(e, i.parentNode)
            : "contains" in e
              ? e.contains(i)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(i) & 16)
                : !1
      : !1;
  }
  function ep(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var i = Fo(e.document); i instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof i.contentWindow.location.href == "string";
      } catch (o) {
        r = !1;
      }
      if (r) e = i.contentWindow;
      else break;
      i = Fo(e.document);
    }
    return i;
  }
  function _c(e) {
    var i = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      i &&
      ((i === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        i === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function g8(e, i) {
    var r = ep(i);
    i = e.focusedElem;
    var o = e.selectionRange;
    if (
      r !== i &&
      i &&
      i.ownerDocument &&
      Id(i.ownerDocument.documentElement, i)
    ) {
      if (o !== null && _c(i)) {
        if (
          ((e = o.start),
          (r = o.end),
          r === void 0 && (r = e),
          "selectionStart" in i)
        )
          (i.selectionStart = e),
            (i.selectionEnd = Math.min(r, i.value.length));
        else if (
          ((r = ((e = i.ownerDocument || document) && e.defaultView) || window),
          r.getSelection)
        ) {
          r = r.getSelection();
          var u = i.textContent.length,
            p = Math.min(o.start, u);
          (o = o.end === void 0 ? p : Math.min(o.end, u)),
            !r.extend && p > o && ((u = o), (o = p), (p = u)),
            (u = Jd(i, p));
          var E = Jd(i, o);
          u &&
            E &&
            (r.rangeCount !== 1 ||
              r.anchorNode !== u.node ||
              r.anchorOffset !== u.offset ||
              r.focusNode !== E.node ||
              r.focusOffset !== E.offset) &&
            ((e = e.createRange()),
            e.setStart(u.node, u.offset),
            r.removeAllRanges(),
            p > o
              ? (r.addRange(e), r.extend(E.node, E.offset))
              : (e.setEnd(E.node, E.offset), r.addRange(e)));
        }
      }
      for (e = [], r = i; (r = r.parentNode); )
        r.nodeType === 1 &&
          e.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < e.length; i++)
        (r = e[i]),
          (r.element.scrollLeft = r.left),
          (r.element.scrollTop = r.top);
    }
  }
  var E8 = an && "documentMode" in document && 11 >= document.documentMode,
    xr = null,
    Tc = null,
    ps = null,
    Rc = !1;
  function tp(e, i, r) {
    var o =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Rc ||
      xr == null ||
      xr !== Fo(o) ||
      ((o = xr),
      "selectionStart" in o && _c(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (ps && ds(ps, o)) ||
        ((ps = o),
        (o = Al(Tc, "onSelect")),
        0 < o.length &&
          ((i = new ko("onSelect", "select", null, i, r)),
          e.push({ event: i, listeners: o }),
          (i.target = xr))));
  }
  function Ra(e, i) {
    var r = {};
    return (
      (r[e.toLowerCase()] = i.toLowerCase()),
      (r["Webkit" + e] = "webkit" + i),
      (r["Moz" + e] = "moz" + i),
      r
    );
  }
  var mr = {
      animationend: Ra("Animation", "AnimationEnd"),
      animationiteration: Ra("Animation", "AnimationIteration"),
      animationstart: Ra("Animation", "AnimationStart"),
      transitionrun: Ra("Transition", "TransitionRun"),
      transitionstart: Ra("Transition", "TransitionStart"),
      transitioncancel: Ra("Transition", "TransitionCancel"),
      transitionend: Ra("Transition", "TransitionEnd"),
    },
    wc = {},
    np = {};
  an &&
    ((np = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete mr.animationend.animation,
      delete mr.animationiteration.animation,
      delete mr.animationstart.animation),
    "TransitionEvent" in window || delete mr.transitionend.transition);
  function wa(e) {
    if (wc[e]) return wc[e];
    if (!mr[e]) return e;
    var i = mr[e],
      r;
    for (r in i) if (i.hasOwnProperty(r) && r in np) return (wc[e] = i[r]);
    return e;
  }
  var ip = wa("animationend"),
    ap = wa("animationiteration"),
    rp = wa("animationstart"),
    b8 = wa("transitionrun"),
    A8 = wa("transitionstart"),
    S8 = wa("transitioncancel"),
    sp = wa("transitionend"),
    op = new Map(),
    lp =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " ",
      );
  function $n(e, i) {
    op.set(e, i), Jt(i, [e]);
  }
  var Tn = [],
    yr = 0,
    Mc = 0;
  function qo() {
    for (var e = yr, i = (Mc = yr = 0); i < e; ) {
      var r = Tn[i];
      Tn[i++] = null;
      var o = Tn[i];
      Tn[i++] = null;
      var u = Tn[i];
      Tn[i++] = null;
      var p = Tn[i];
      if (((Tn[i++] = null), o !== null && u !== null)) {
        var E = o.pending;
        E === null ? (u.next = u) : ((u.next = E.next), (E.next = u)),
          (o.pending = u);
      }
      p !== 0 && up(r, u, p);
    }
  }
  function jo(e, i, r, o) {
    (Tn[yr++] = e),
      (Tn[yr++] = i),
      (Tn[yr++] = r),
      (Tn[yr++] = o),
      (Mc |= o),
      (e.lanes |= o),
      (e = e.alternate),
      e !== null && (e.lanes |= o);
  }
  function Oc(e, i, r, o) {
    return jo(e, i, r, o), Po(e);
  }
  function Ki(e, i) {
    return jo(e, null, null, i), Po(e);
  }
  function up(e, i, r) {
    e.lanes |= r;
    var o = e.alternate;
    o !== null && (o.lanes |= r);
    for (var u = !1, p = e.return; p !== null; )
      (p.childLanes |= r),
        (o = p.alternate),
        o !== null && (o.childLanes |= r),
        p.tag === 22 &&
          ((e = p.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = p),
        (p = p.return);
    u &&
      i !== null &&
      e.tag === 3 &&
      ((p = e.stateNode),
      (u = 31 - kt(r)),
      (p = p.hiddenUpdates),
      (e = p[u]),
      e === null ? (p[u] = [i]) : e.push(i),
      (i.lane = r | 536870912));
  }
  function Po(e) {
    if (50 < Hs) throw ((Hs = 0), (k0 = null), Error(s(185)));
    for (var i = e.return; i !== null; ) (e = i), (i = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var vr = {},
    cp = new WeakMap();
  function Rn(e, i) {
    if (typeof e == "object" && e !== null) {
      var r = cp.get(e);
      return r !== void 0
        ? r
        : ((i = { value: e, source: i, stack: oe(i) }), cp.set(e, i), i);
    }
    return { value: e, source: i, stack: oe(i) };
  }
  var gr = [],
    Er = 0,
    Yo = null,
    Xo = 0,
    wn = [],
    Mn = 0,
    Ma = null,
    Ci = 1,
    Di = "";
  function Oa(e, i) {
    (gr[Er++] = Xo), (gr[Er++] = Yo), (Yo = e), (Xo = i);
  }
  function fp(e, i, r) {
    (wn[Mn++] = Ci), (wn[Mn++] = Di), (wn[Mn++] = Ma), (Ma = e);
    var o = Ci;
    e = Di;
    var u = 32 - kt(o) - 1;
    (o &= ~(1 << u)), (r += 1);
    var p = 32 - kt(i) + u;
    if (30 < p) {
      var E = u - (u % 5);
      (p = (o & ((1 << E) - 1)).toString(32)),
        (o >>= E),
        (u -= E),
        (Ci = (1 << (32 - kt(i) + u)) | (r << u) | o),
        (Di = p + e);
    } else (Ci = (1 << p) | (r << u) | o), (Di = e);
  }
  function Fc(e) {
    e.return !== null && (Oa(e, 1), fp(e, 1, 0));
  }
  function zc(e) {
    for (; e === Yo; )
      (Yo = gr[--Er]), (gr[Er] = null), (Xo = gr[--Er]), (gr[Er] = null);
    for (; e === Ma; )
      (Ma = wn[--Mn]),
        (wn[Mn] = null),
        (Di = wn[--Mn]),
        (wn[Mn] = null),
        (Ci = wn[--Mn]),
        (wn[Mn] = null);
  }
  var It = null,
    Ht = null,
    Ke = !1,
    Wn = null,
    li = !1,
    Lc = Error(s(519));
  function Fa(e) {
    var i = Error(s(418, ""));
    throw (ys(Rn(i, e)), Lc);
  }
  function hp(e) {
    var i = e.stateNode,
      r = e.type,
      o = e.memoizedProps;
    switch (((i[he] = e), (i[de] = o), r)) {
      case "dialog":
        He("cancel", i), He("close", i);
        break;
      case "iframe":
      case "object":
      case "embed":
        He("load", i);
        break;
      case "video":
      case "audio":
        for (r = 0; r < qs.length; r++) He(qs[r], i);
        break;
      case "source":
        He("error", i);
        break;
      case "img":
      case "image":
      case "link":
        He("error", i), He("load", i);
        break;
      case "details":
        He("toggle", i);
        break;
      case "input":
        He("invalid", i),
          _d(
            i,
            o.value,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name,
            !0,
          ),
          Oo(i);
        break;
      case "select":
        He("invalid", i);
        break;
      case "textarea":
        He("invalid", i), Rd(i, o.value, o.defaultValue, o.children), Oo(i);
    }
    (r = o.children),
      (typeof r != "string" && typeof r != "number" && typeof r != "bigint") ||
      i.textContent === "" + r ||
      o.suppressHydrationWarning === !0 ||
      bx(i.textContent, r)
        ? (o.popover != null && (He("beforetoggle", i), He("toggle", i)),
          o.onScroll != null && He("scroll", i),
          o.onScrollEnd != null && He("scrollend", i),
          o.onClick != null && (i.onclick = Sl),
          (i = !0))
        : (i = !1),
      i || Fa(e);
  }
  function dp(e) {
    for (It = e.return; It; )
      switch (It.tag) {
        case 3:
        case 27:
          li = !0;
          return;
        case 5:
        case 13:
          li = !1;
          return;
        default:
          It = It.return;
      }
  }
  function xs(e) {
    if (e !== It) return !1;
    if (!Ke) return dp(e), (Ke = !0), !1;
    var i = !1,
      r;
    if (
      ((r = e.tag !== 3 && e.tag !== 27) &&
        ((r = e.tag === 5) &&
          ((r = e.type),
          (r =
            !(r !== "form" && r !== "button") || tf(e.type, e.memoizedProps))),
        (r = !r)),
      r && (i = !0),
      i && Ht && Fa(e),
      dp(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, i = 0; e; ) {
          if (e.nodeType === 8)
            if (((r = e.data), r === "/$")) {
              if (i === 0) {
                Ht = In(e.nextSibling);
                break e;
              }
              i--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || i++;
          e = e.nextSibling;
        }
        Ht = null;
      }
    } else Ht = It ? In(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ms() {
    (Ht = It = null), (Ke = !1);
  }
  function ys(e) {
    Wn === null ? (Wn = [e]) : Wn.push(e);
  }
  var vs = Error(s(460)),
    pp = Error(s(474)),
    Nc = { then: function () {} };
  function xp(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function Go() {}
  function mp(e, i, r) {
    switch (
      ((r = e[r]),
      r === void 0 ? e.push(i) : r !== i && (i.then(Go, Go), (i = r)),
      i.status)
    ) {
      case "fulfilled":
        return i.value;
      case "rejected":
        throw ((e = i.reason), e === vs ? Error(s(483)) : e);
      default:
        if (typeof i.status == "string") i.then(Go, Go);
        else {
          if (((e = at), e !== null && 100 < e.shellSuspendCounter))
            throw Error(s(482));
          (e = i),
            (e.status = "pending"),
            e.then(
              function (o) {
                if (i.status === "pending") {
                  var u = i;
                  (u.status = "fulfilled"), (u.value = o);
                }
              },
              function (o) {
                if (i.status === "pending") {
                  var u = i;
                  (u.status = "rejected"), (u.reason = o);
                }
              },
            );
        }
        switch (i.status) {
          case "fulfilled":
            return i.value;
          case "rejected":
            throw ((e = i.reason), e === vs ? Error(s(483)) : e);
        }
        throw ((gs = i), vs);
    }
  }
  var gs = null;
  function yp() {
    if (gs === null) throw Error(s(459));
    var e = gs;
    return (gs = null), e;
  }
  var br = null,
    Es = 0;
  function Ko(e) {
    var i = Es;
    return (Es += 1), br === null && (br = []), mp(br, e, i);
  }
  function bs(e, i) {
    (i = i.props.ref), (e.ref = i !== void 0 ? i : null);
  }
  function Zo(e, i) {
    throw i.$$typeof === c
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(i)),
        Error(
          s(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(i).join(", ") + "}"
              : e,
          ),
        ));
  }
  function vp(e) {
    var i = e._init;
    return i(e._payload);
  }
  function gp(e) {
    function i(Y, k) {
      if (e) {
        var G = Y.deletions;
        G === null ? ((Y.deletions = [k]), (Y.flags |= 16)) : G.push(k);
      }
    }
    function r(Y, k) {
      if (!e) return null;
      for (; k !== null; ) i(Y, k), (k = k.sibling);
      return null;
    }
    function o(Y) {
      for (var k = new Map(); Y !== null; )
        Y.key !== null ? k.set(Y.key, Y) : k.set(Y.index, Y), (Y = Y.sibling);
      return k;
    }
    function u(Y, k) {
      return (Y = ra(Y, k)), (Y.index = 0), (Y.sibling = null), Y;
    }
    function p(Y, k, G) {
      return (
        (Y.index = G),
        e
          ? ((G = Y.alternate),
            G !== null
              ? ((G = G.index), G < k ? ((Y.flags |= 33554434), k) : G)
              : ((Y.flags |= 33554434), k))
          : ((Y.flags |= 1048576), k)
      );
    }
    function E(Y) {
      return e && Y.alternate === null && (Y.flags |= 33554434), Y;
    }
    function B(Y, k, G, ae) {
      return k === null || k.tag !== 6
        ? ((k = w0(G, Y.mode, ae)), (k.return = Y), k)
        : ((k = u(k, G)), (k.return = Y), k);
    }
    function O(Y, k, G, ae) {
      var ge = G.type;
      return ge === x
        ? ne(Y, k, G.props.children, ae, G.key)
        : k !== null &&
            (k.elementType === ge ||
              (typeof ge == "object" &&
                ge !== null &&
                ge.$$typeof === C &&
                vp(ge) === k.type))
          ? ((k = u(k, G.props)), bs(k, G), (k.return = Y), k)
          : ((k = hl(G.type, G.key, G.props, null, Y.mode, ae)),
            bs(k, G),
            (k.return = Y),
            k);
    }
    function V(Y, k, G, ae) {
      return k === null ||
        k.tag !== 4 ||
        k.stateNode.containerInfo !== G.containerInfo ||
        k.stateNode.implementation !== G.implementation
        ? ((k = M0(G, Y.mode, ae)), (k.return = Y), k)
        : ((k = u(k, G.children || [])), (k.return = Y), k);
    }
    function ne(Y, k, G, ae, ge) {
      return k === null || k.tag !== 7
        ? ((k = Pa(G, Y.mode, ae, ge)), (k.return = Y), k)
        : ((k = u(k, G)), (k.return = Y), k);
    }
    function se(Y, k, G) {
      if (
        (typeof k == "string" && k !== "") ||
        typeof k == "number" ||
        typeof k == "bigint"
      )
        return (k = w0("" + k, Y.mode, G)), (k.return = Y), k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case f:
            return (
              (G = hl(k.type, k.key, k.props, null, Y.mode, G)),
              bs(G, k),
              (G.return = Y),
              G
            );
          case d:
            return (k = M0(k, Y.mode, G)), (k.return = Y), k;
          case C:
            var ae = k._init;
            return (k = ae(k._payload)), se(Y, k, G);
        }
        if (K(k) || z(k))
          return (k = Pa(k, Y.mode, G, null)), (k.return = Y), k;
        if (typeof k.then == "function") return se(Y, Ko(k), G);
        if (k.$$typeof === g) return se(Y, ul(Y, k), G);
        Zo(Y, k);
      }
      return null;
    }
    function Q(Y, k, G, ae) {
      var ge = k !== null ? k.key : null;
      if (
        (typeof G == "string" && G !== "") ||
        typeof G == "number" ||
        typeof G == "bigint"
      )
        return ge !== null ? null : B(Y, k, "" + G, ae);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case f:
            return G.key === ge ? O(Y, k, G, ae) : null;
          case d:
            return G.key === ge ? V(Y, k, G, ae) : null;
          case C:
            return (ge = G._init), (G = ge(G._payload)), Q(Y, k, G, ae);
        }
        if (K(G) || z(G)) return ge !== null ? null : ne(Y, k, G, ae, null);
        if (typeof G.then == "function") return Q(Y, k, Ko(G), ae);
        if (G.$$typeof === g) return Q(Y, k, ul(Y, G), ae);
        Zo(Y, G);
      }
      return null;
    }
    function te(Y, k, G, ae, ge) {
      if (
        (typeof ae == "string" && ae !== "") ||
        typeof ae == "number" ||
        typeof ae == "bigint"
      )
        return (Y = Y.get(G) || null), B(k, Y, "" + ae, ge);
      if (typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case f:
            return (
              (Y = Y.get(ae.key === null ? G : ae.key) || null), O(k, Y, ae, ge)
            );
          case d:
            return (
              (Y = Y.get(ae.key === null ? G : ae.key) || null), V(k, Y, ae, ge)
            );
          case C:
            var ze = ae._init;
            return (ae = ze(ae._payload)), te(Y, k, G, ae, ge);
        }
        if (K(ae) || z(ae))
          return (Y = Y.get(G) || null), ne(k, Y, ae, ge, null);
        if (typeof ae.then == "function") return te(Y, k, G, Ko(ae), ge);
        if (ae.$$typeof === g) return te(Y, k, G, ul(k, ae), ge);
        Zo(k, ae);
      }
      return null;
    }
    function be(Y, k, G, ae) {
      for (
        var ge = null, ze = null, Se = k, De = (k = 0), Lt = null;
        Se !== null && De < G.length;
        De++
      ) {
        Se.index > De ? ((Lt = Se), (Se = null)) : (Lt = Se.sibling);
        var Ze = Q(Y, Se, G[De], ae);
        if (Ze === null) {
          Se === null && (Se = Lt);
          break;
        }
        e && Se && Ze.alternate === null && i(Y, Se),
          (k = p(Ze, k, De)),
          ze === null ? (ge = Ze) : (ze.sibling = Ze),
          (ze = Ze),
          (Se = Lt);
      }
      if (De === G.length) return r(Y, Se), Ke && Oa(Y, De), ge;
      if (Se === null) {
        for (; De < G.length; De++)
          (Se = se(Y, G[De], ae)),
            Se !== null &&
              ((k = p(Se, k, De)),
              ze === null ? (ge = Se) : (ze.sibling = Se),
              (ze = Se));
        return Ke && Oa(Y, De), ge;
      }
      for (Se = o(Se); De < G.length; De++)
        (Lt = te(Se, Y, De, G[De], ae)),
          Lt !== null &&
            (e &&
              Lt.alternate !== null &&
              Se.delete(Lt.key === null ? De : Lt.key),
            (k = p(Lt, k, De)),
            ze === null ? (ge = Lt) : (ze.sibling = Lt),
            (ze = Lt));
      return (
        e &&
          Se.forEach(function (ha) {
            return i(Y, ha);
          }),
        Ke && Oa(Y, De),
        ge
      );
    }
    function Te(Y, k, G, ae) {
      if (G == null) throw Error(s(151));
      for (
        var ge = null,
          ze = null,
          Se = k,
          De = (k = 0),
          Lt = null,
          Ze = G.next();
        Se !== null && !Ze.done;
        De++, Ze = G.next()
      ) {
        Se.index > De ? ((Lt = Se), (Se = null)) : (Lt = Se.sibling);
        var ha = Q(Y, Se, Ze.value, ae);
        if (ha === null) {
          Se === null && (Se = Lt);
          break;
        }
        e && Se && ha.alternate === null && i(Y, Se),
          (k = p(ha, k, De)),
          ze === null ? (ge = ha) : (ze.sibling = ha),
          (ze = ha),
          (Se = Lt);
      }
      if (Ze.done) return r(Y, Se), Ke && Oa(Y, De), ge;
      if (Se === null) {
        for (; !Ze.done; De++, Ze = G.next())
          (Ze = se(Y, Ze.value, ae)),
            Ze !== null &&
              ((k = p(Ze, k, De)),
              ze === null ? (ge = Ze) : (ze.sibling = Ze),
              (ze = Ze));
        return Ke && Oa(Y, De), ge;
      }
      for (Se = o(Se); !Ze.done; De++, Ze = G.next())
        (Ze = te(Se, Y, De, Ze.value, ae)),
          Ze !== null &&
            (e &&
              Ze.alternate !== null &&
              Se.delete(Ze.key === null ? De : Ze.key),
            (k = p(Ze, k, De)),
            ze === null ? (ge = Ze) : (ze.sibling = Ze),
            (ze = Ze));
      return (
        e &&
          Se.forEach(function (UE) {
            return i(Y, UE);
          }),
        Ke && Oa(Y, De),
        ge
      );
    }
    function mt(Y, k, G, ae) {
      if (
        (typeof G == "object" &&
          G !== null &&
          G.type === x &&
          G.key === null &&
          (G = G.props.children),
        typeof G == "object" && G !== null)
      ) {
        switch (G.$$typeof) {
          case f:
            e: {
              for (var ge = G.key; k !== null; ) {
                if (k.key === ge) {
                  if (((ge = G.type), ge === x)) {
                    if (k.tag === 7) {
                      r(Y, k.sibling),
                        (ae = u(k, G.props.children)),
                        (ae.return = Y),
                        (Y = ae);
                      break e;
                    }
                  } else if (
                    k.elementType === ge ||
                    (typeof ge == "object" &&
                      ge !== null &&
                      ge.$$typeof === C &&
                      vp(ge) === k.type)
                  ) {
                    r(Y, k.sibling),
                      (ae = u(k, G.props)),
                      bs(ae, G),
                      (ae.return = Y),
                      (Y = ae);
                    break e;
                  }
                  r(Y, k);
                  break;
                } else i(Y, k);
                k = k.sibling;
              }
              G.type === x
                ? ((ae = Pa(G.props.children, Y.mode, ae, G.key)),
                  (ae.return = Y),
                  (Y = ae))
                : ((ae = hl(G.type, G.key, G.props, null, Y.mode, ae)),
                  bs(ae, G),
                  (ae.return = Y),
                  (Y = ae));
            }
            return E(Y);
          case d:
            e: {
              for (ge = G.key; k !== null; ) {
                if (k.key === ge)
                  if (
                    k.tag === 4 &&
                    k.stateNode.containerInfo === G.containerInfo &&
                    k.stateNode.implementation === G.implementation
                  ) {
                    r(Y, k.sibling),
                      (ae = u(k, G.children || [])),
                      (ae.return = Y),
                      (Y = ae);
                    break e;
                  } else {
                    r(Y, k);
                    break;
                  }
                else i(Y, k);
                k = k.sibling;
              }
              (ae = M0(G, Y.mode, ae)), (ae.return = Y), (Y = ae);
            }
            return E(Y);
          case C:
            return (ge = G._init), (G = ge(G._payload)), mt(Y, k, G, ae);
        }
        if (K(G)) return be(Y, k, G, ae);
        if (z(G)) {
          if (((ge = z(G)), typeof ge != "function")) throw Error(s(150));
          return (G = ge.call(G)), Te(Y, k, G, ae);
        }
        if (typeof G.then == "function") return mt(Y, k, Ko(G), ae);
        if (G.$$typeof === g) return mt(Y, k, ul(Y, G), ae);
        Zo(Y, G);
      }
      return (typeof G == "string" && G !== "") ||
        typeof G == "number" ||
        typeof G == "bigint"
        ? ((G = "" + G),
          k !== null && k.tag === 6
            ? (r(Y, k.sibling), (ae = u(k, G)), (ae.return = Y), (Y = ae))
            : (r(Y, k), (ae = w0(G, Y.mode, ae)), (ae.return = Y), (Y = ae)),
          E(Y))
        : r(Y, k);
    }
    return function (Y, k, G, ae) {
      try {
        Es = 0;
        var ge = mt(Y, k, G, ae);
        return (br = null), ge;
      } catch (Se) {
        if (Se === vs) throw Se;
        var ze = Ln(29, Se, null, Y.mode);
        return (ze.lanes = ae), (ze.return = Y), ze;
      } finally {
      }
    };
  }
  var za = gp(!0),
    Ep = gp(!1),
    Ar = me(null),
    Qo = me(0);
  function bp(e, i) {
    (e = Ni), Xe(Qo, e), Xe(Ar, i), (Ni = e | i.baseLanes);
  }
  function Uc() {
    Xe(Qo, Ni), Xe(Ar, Ar.current);
  }
  function kc() {
    (Ni = Qo.current), Je(Ar), Je(Qo);
  }
  var On = me(null),
    ui = null;
  function Zi(e) {
    var i = e.alternate;
    Xe(Mt, Mt.current & 1),
      Xe(On, e),
      ui === null &&
        (i === null || Ar.current !== null || i.memoizedState !== null) &&
        (ui = e);
  }
  function Ap(e) {
    if (e.tag === 22) {
      if ((Xe(Mt, Mt.current), Xe(On, e), ui === null)) {
        var i = e.alternate;
        i !== null && i.memoizedState !== null && (ui = e);
      }
    } else Qi();
  }
  function Qi() {
    Xe(Mt, Mt.current), Xe(On, On.current);
  }
  function Bi(e) {
    Je(On), ui === e && (ui = null), Je(Mt);
  }
  var Mt = me(0);
  function $o(e) {
    for (var i = e; i !== null; ) {
      if (i.tag === 13) {
        var r = i.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
        )
          return i;
      } else if (i.tag === 19 && i.memoizedProps.revealOrder !== void 0) {
        if ((i.flags & 128) !== 0) return i;
      } else if (i.child !== null) {
        (i.child.return = i), (i = i.child);
        continue;
      }
      if (i === e) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === e) return null;
        i = i.return;
      }
      (i.sibling.return = i.return), (i = i.sibling);
    }
    return null;
  }
  var C8 =
      typeof AbortController != "undefined"
        ? AbortController
        : function () {
            var e = [],
              i = (this.signal = {
                aborted: !1,
                addEventListener: function (r, o) {
                  e.push(o);
                },
              });
            this.abort = function () {
              (i.aborted = !0),
                e.forEach(function (r) {
                  return r();
                });
            };
          },
    D8 = t.unstable_scheduleCallback,
    B8 = t.unstable_NormalPriority,
    Ot = {
      $$typeof: g,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Hc() {
    return { controller: new C8(), data: new Map(), refCount: 0 };
  }
  function As(e) {
    e.refCount--,
      e.refCount === 0 &&
        D8(B8, function () {
          e.controller.abort();
        });
  }
  var Ss = null,
    Vc = 0,
    Sr = 0,
    Cr = null;
  function _8(e, i) {
    if (Ss === null) {
      var r = (Ss = []);
      (Vc = 0),
        (Sr = G0()),
        (Cr = {
          status: "pending",
          value: void 0,
          then: function (o) {
            r.push(o);
          },
        });
    }
    return Vc++, i.then(Sp, Sp), i;
  }
  function Sp() {
    if (--Vc === 0 && Ss !== null) {
      Cr !== null && (Cr.status = "fulfilled");
      var e = Ss;
      (Ss = null), (Sr = 0), (Cr = null);
      for (var i = 0; i < e.length; i++) (0, e[i])();
    }
  }
  function T8(e, i) {
    var r = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          r.push(u);
        },
      };
    return (
      e.then(
        function () {
          (o.status = "fulfilled"), (o.value = i);
          for (var u = 0; u < r.length; u++) (0, r[u])(i);
        },
        function (u) {
          for (o.status = "rejected", o.reason = u, u = 0; u < r.length; u++)
            (0, r[u])(void 0);
        },
      ),
      o
    );
  }
  var Cp = q.S;
  q.S = function (e, i) {
    typeof i == "object" &&
      i !== null &&
      typeof i.then == "function" &&
      _8(e, i),
      Cp !== null && Cp(e, i);
  };
  var La = me(null);
  function qc() {
    var e = La.current;
    return e !== null ? e : at.pooledCache;
  }
  function Wo(e, i) {
    i === null ? Xe(La, La.current) : Xe(La, i.pool);
  }
  function Dp() {
    var e = qc();
    return e === null ? null : { parent: Ot._currentValue, pool: e };
  }
  var $i = 0,
    Oe = null,
    Ie = null,
    St = null,
    Jo = !1,
    Dr = !1,
    Na = !1,
    Io = 0,
    Cs = 0,
    Br = null,
    R8 = 0;
  function gt() {
    throw Error(s(321));
  }
  function jc(e, i) {
    if (i === null) return !1;
    for (var r = 0; r < i.length && r < e.length; r++)
      if (!mn(e[r], i[r])) return !1;
    return !0;
  }
  function Pc(e, i, r, o, u, p) {
    return (
      ($i = p),
      (Oe = i),
      (i.memoizedState = null),
      (i.updateQueue = null),
      (i.lanes = 0),
      (q.H = e === null || e.memoizedState === null ? Ua : Wi),
      (Na = !1),
      (p = r(o, u)),
      (Na = !1),
      Dr && (p = _p(i, r, o, u)),
      Bp(e),
      p
    );
  }
  function Bp(e) {
    q.H = ci;
    var i = Ie !== null && Ie.next !== null;
    if ((($i = 0), (St = Ie = Oe = null), (Jo = !1), (Cs = 0), (Br = null), i))
      throw Error(s(300));
    e === null ||
      Ft ||
      ((e = e.dependencies), e !== null && ll(e) && (Ft = !0));
  }
  function _p(e, i, r, o) {
    Oe = e;
    var u = 0;
    do {
      if ((Dr && (Br = null), (Cs = 0), (Dr = !1), 25 <= u))
        throw Error(s(301));
      if (((u += 1), (St = Ie = null), e.updateQueue != null)) {
        var p = e.updateQueue;
        (p.lastEffect = null),
          (p.events = null),
          (p.stores = null),
          p.memoCache != null && (p.memoCache.index = 0);
      }
      (q.H = ka), (p = i(r, o));
    } while (Dr);
    return p;
  }
  function w8() {
    var e = q.H,
      i = e.useState()[0];
    return (
      (i = typeof i.then == "function" ? Ds(i) : i),
      (e = e.useState()[0]),
      (Ie !== null ? Ie.memoizedState : null) !== e && (Oe.flags |= 1024),
      i
    );
  }
  function Yc() {
    var e = Io !== 0;
    return (Io = 0), e;
  }
  function Xc(e, i, r) {
    (i.updateQueue = e.updateQueue), (i.flags &= -2053), (e.lanes &= ~r);
  }
  function Gc(e) {
    if (Jo) {
      for (e = e.memoizedState; e !== null; ) {
        var i = e.queue;
        i !== null && (i.pending = null), (e = e.next);
      }
      Jo = !1;
    }
    ($i = 0), (St = Ie = Oe = null), (Dr = !1), (Cs = Io = 0), (Br = null);
  }
  function on() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return St === null ? (Oe.memoizedState = St = e) : (St = St.next = e), St;
  }
  function Ct() {
    if (Ie === null) {
      var e = Oe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ie.next;
    var i = St === null ? Oe.memoizedState : St.next;
    if (i !== null) (St = i), (Ie = e);
    else {
      if (e === null)
        throw Oe.alternate === null ? Error(s(467)) : Error(s(310));
      (Ie = e),
        (e = {
          memoizedState: Ie.memoizedState,
          baseState: Ie.baseState,
          baseQueue: Ie.baseQueue,
          queue: Ie.queue,
          next: null,
        }),
        St === null ? (Oe.memoizedState = St = e) : (St = St.next = e);
    }
    return St;
  }
  var el;
  el = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Ds(e) {
    var i = Cs;
    return (
      (Cs += 1),
      Br === null && (Br = []),
      (e = mp(Br, e, i)),
      (i = Oe),
      (St === null ? i.memoizedState : St.next) === null &&
        ((i = i.alternate),
        (q.H = i === null || i.memoizedState === null ? Ua : Wi)),
      e
    );
  }
  function tl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ds(e);
      if (e.$$typeof === g) return Kt(e);
    }
    throw Error(s(438, String(e)));
  }
  function Kc(e) {
    var i = null,
      r = Oe.updateQueue;
    if ((r !== null && (i = r.memoCache), i == null)) {
      var o = Oe.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (i = {
              data: o.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (i == null && (i = { data: [], index: 0 }),
      r === null && ((r = el()), (Oe.updateQueue = r)),
      (r.memoCache = i),
      (r = i.data[i.index]),
      r === void 0)
    )
      for (r = i.data[i.index] = Array(e), o = 0; o < e; o++) r[o] = T;
    return i.index++, r;
  }
  function _i(e, i) {
    return typeof i == "function" ? i(e) : i;
  }
  function nl(e) {
    var i = Ct();
    return Zc(i, Ie, e);
  }
  function Zc(e, i, r) {
    var o = e.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = r;
    var u = e.baseQueue,
      p = o.pending;
    if (p !== null) {
      if (u !== null) {
        var E = u.next;
        (u.next = p.next), (p.next = E);
      }
      (i.baseQueue = u = p), (o.pending = null);
    }
    if (((p = e.baseState), u === null)) e.memoizedState = p;
    else {
      i = u.next;
      var B = (E = null),
        O = null,
        V = i,
        ne = !1;
      do {
        var se = V.lane & -536870913;
        if (se !== V.lane ? (Ye & se) === se : ($i & se) === se) {
          var Q = V.revertLane;
          if (Q === 0)
            O !== null &&
              (O = O.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: V.action,
                  hasEagerState: V.hasEagerState,
                  eagerState: V.eagerState,
                  next: null,
                }),
              se === Sr && (ne = !0);
          else if (($i & Q) === Q) {
            (V = V.next), Q === Sr && (ne = !0);
            continue;
          } else
            (se = {
              lane: 0,
              revertLane: V.revertLane,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null,
            }),
              O === null ? ((B = O = se), (E = p)) : (O = O.next = se),
              (Oe.lanes |= Q),
              (sa |= Q);
          (se = V.action),
            Na && r(p, se),
            (p = V.hasEagerState ? V.eagerState : r(p, se));
        } else
          (Q = {
            lane: se,
            revertLane: V.revertLane,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null,
          }),
            O === null ? ((B = O = Q), (E = p)) : (O = O.next = Q),
            (Oe.lanes |= se),
            (sa |= se);
        V = V.next;
      } while (V !== null && V !== i);
      if (
        (O === null ? (E = p) : (O.next = B),
        !mn(p, e.memoizedState) && ((Ft = !0), ne && ((r = Cr), r !== null)))
      )
        throw r;
      (e.memoizedState = p),
        (e.baseState = E),
        (e.baseQueue = O),
        (o.lastRenderedState = p);
    }
    return u === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Qc(e) {
    var i = Ct(),
      r = i.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var o = r.dispatch,
      u = r.pending,
      p = i.memoizedState;
    if (u !== null) {
      r.pending = null;
      var E = (u = u.next);
      do (p = e(p, E.action)), (E = E.next);
      while (E !== u);
      mn(p, i.memoizedState) || (Ft = !0),
        (i.memoizedState = p),
        i.baseQueue === null && (i.baseState = p),
        (r.lastRenderedState = p);
    }
    return [p, o];
  }
  function Tp(e, i, r) {
    var o = Oe,
      u = Ct(),
      p = Ke;
    if (p) {
      if (r === void 0) throw Error(s(407));
      r = r();
    } else r = i();
    var E = !mn((Ie || u).memoizedState, r);
    if (
      (E && ((u.memoizedState = r), (Ft = !0)),
      (u = u.queue),
      Jc(Mp.bind(null, o, u, e), [e]),
      u.getSnapshot !== i || E || (St !== null && St.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        _r(9, wp.bind(null, o, u, r, i), { destroy: void 0 }, null),
        at === null)
      )
        throw Error(s(349));
      p || ($i & 60) !== 0 || Rp(o, i, r);
    }
    return r;
  }
  function Rp(e, i, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: i, value: r }),
      (i = Oe.updateQueue),
      i === null
        ? ((i = el()), (Oe.updateQueue = i), (i.stores = [e]))
        : ((r = i.stores), r === null ? (i.stores = [e]) : r.push(e));
  }
  function wp(e, i, r, o) {
    (i.value = r), (i.getSnapshot = o), Op(i) && Fp(e);
  }
  function Mp(e, i, r) {
    return r(function () {
      Op(i) && Fp(e);
    });
  }
  function Op(e) {
    var i = e.getSnapshot;
    e = e.value;
    try {
      var r = i();
      return !mn(e, r);
    } catch (o) {
      return !0;
    }
  }
  function Fp(e) {
    var i = Ki(e, 2);
    i !== null && en(i, e, 2);
  }
  function $c(e) {
    var i = on();
    if (typeof e == "function") {
      var r = e;
      if (((e = r()), Na)) {
        pn(!0);
        try {
          r();
        } finally {
          pn(!1);
        }
      }
    }
    return (
      (i.memoizedState = i.baseState = e),
      (i.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _i,
        lastRenderedState: e,
      }),
      i
    );
  }
  function zp(e, i, r, o) {
    return (e.baseState = r), Zc(e, Ie, typeof o == "function" ? o : _i);
  }
  function M8(e, i, r, o, u) {
    if (rl(e)) throw Error(s(485));
    if (((e = i.action), e !== null)) {
      var p = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (E) {
          p.listeners.push(E);
        },
      };
      q.T !== null ? r(!0) : (p.isTransition = !1),
        o(p),
        (r = i.pending),
        r === null
          ? ((p.next = i.pending = p), Lp(i, p))
          : ((p.next = r.next), (i.pending = r.next = p));
    }
  }
  function Lp(e, i) {
    var r = i.action,
      o = i.payload,
      u = e.state;
    if (i.isTransition) {
      var p = q.T,
        E = {};
      q.T = E;
      try {
        var B = r(u, o),
          O = q.S;
        O !== null && O(E, B), Np(e, i, B);
      } catch (V) {
        Wc(e, i, V);
      } finally {
        q.T = p;
      }
    } else
      try {
        (p = r(u, o)), Np(e, i, p);
      } catch (V) {
        Wc(e, i, V);
      }
  }
  function Np(e, i, r) {
    r !== null && typeof r == "object" && typeof r.then == "function"
      ? r.then(
          function (o) {
            Up(e, i, o);
          },
          function (o) {
            return Wc(e, i, o);
          },
        )
      : Up(e, i, r);
  }
  function Up(e, i, r) {
    (i.status = "fulfilled"),
      (i.value = r),
      kp(i),
      (e.state = r),
      (i = e.pending),
      i !== null &&
        ((r = i.next),
        r === i ? (e.pending = null) : ((r = r.next), (i.next = r), Lp(e, r)));
  }
  function Wc(e, i, r) {
    var o = e.pending;
    if (((e.pending = null), o !== null)) {
      o = o.next;
      do (i.status = "rejected"), (i.reason = r), kp(i), (i = i.next);
      while (i !== o);
    }
    e.action = null;
  }
  function kp(e) {
    e = e.listeners;
    for (var i = 0; i < e.length; i++) (0, e[i])();
  }
  function Hp(e, i) {
    return i;
  }
  function Vp(e, i) {
    if (Ke) {
      var r = at.formState;
      if (r !== null) {
        e: {
          var o = Oe;
          if (Ke) {
            if (Ht) {
              t: {
                for (var u = Ht, p = li; u.nodeType !== 8; ) {
                  if (!p) {
                    u = null;
                    break t;
                  }
                  if (((u = In(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (p = u.data), (u = p === "F!" || p === "F" ? u : null);
              }
              if (u) {
                (Ht = In(u.nextSibling)), (o = u.data === "F!");
                break e;
              }
            }
            Fa(o);
          }
          o = !1;
        }
        o && (i = r[0]);
      }
    }
    return (
      (r = on()),
      (r.memoizedState = r.baseState = i),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Hp,
        lastRenderedState: i,
      }),
      (r.queue = o),
      (r = a1.bind(null, Oe, o)),
      (o.dispatch = r),
      (o = $c(!1)),
      (p = i0.bind(null, Oe, !1, o.queue)),
      (o = on()),
      (u = { state: i, dispatch: null, action: e, pending: null }),
      (o.queue = u),
      (r = M8.bind(null, Oe, u, p, r)),
      (u.dispatch = r),
      (o.memoizedState = e),
      [i, r, !1]
    );
  }
  function qp(e) {
    var i = Ct();
    return jp(i, Ie, e);
  }
  function jp(e, i, r) {
    (i = Zc(e, i, Hp)[0]),
      (e = nl(_i)[0]),
      (i =
        typeof i == "object" && i !== null && typeof i.then == "function"
          ? Ds(i)
          : i);
    var o = Ct(),
      u = o.queue,
      p = u.dispatch;
    return (
      r !== o.memoizedState &&
        ((Oe.flags |= 2048),
        _r(9, O8.bind(null, u, r), { destroy: void 0 }, null)),
      [i, p, e]
    );
  }
  function O8(e, i) {
    e.action = i;
  }
  function Pp(e) {
    var i = Ct(),
      r = Ie;
    if (r !== null) return jp(i, r, e);
    Ct(), (i = i.memoizedState), (r = Ct());
    var o = r.queue.dispatch;
    return (r.memoizedState = e), [i, o, !1];
  }
  function _r(e, i, r, o) {
    return (
      (e = { tag: e, create: i, inst: r, deps: o, next: null }),
      (i = Oe.updateQueue),
      i === null && ((i = el()), (Oe.updateQueue = i)),
      (r = i.lastEffect),
      r === null
        ? (i.lastEffect = e.next = e)
        : ((o = r.next), (r.next = e), (e.next = o), (i.lastEffect = e)),
      e
    );
  }
  function Yp() {
    return Ct().memoizedState;
  }
  function il(e, i, r, o) {
    var u = on();
    (Oe.flags |= e),
      (u.memoizedState = _r(
        1 | i,
        r,
        { destroy: void 0 },
        o === void 0 ? null : o,
      ));
  }
  function al(e, i, r, o) {
    var u = Ct();
    o = o === void 0 ? null : o;
    var p = u.memoizedState.inst;
    Ie !== null && o !== null && jc(o, Ie.memoizedState.deps)
      ? (u.memoizedState = _r(i, r, p, o))
      : ((Oe.flags |= e), (u.memoizedState = _r(1 | i, r, p, o)));
  }
  function Xp(e, i) {
    il(8390656, 8, e, i);
  }
  function Jc(e, i) {
    al(2048, 8, e, i);
  }
  function Gp(e, i) {
    return al(4, 2, e, i);
  }
  function Kp(e, i) {
    return al(4, 4, e, i);
  }
  function Zp(e, i) {
    if (typeof i == "function") {
      e = e();
      var r = i(e);
      return function () {
        typeof r == "function" ? r() : i(null);
      };
    }
    if (i != null)
      return (
        (e = e()),
        (i.current = e),
        function () {
          i.current = null;
        }
      );
  }
  function Qp(e, i, r) {
    (r = r != null ? r.concat([e]) : null), al(4, 4, Zp.bind(null, i, e), r);
  }
  function Ic() {}
  function $p(e, i) {
    var r = Ct();
    i = i === void 0 ? null : i;
    var o = r.memoizedState;
    return i !== null && jc(i, o[1]) ? o[0] : ((r.memoizedState = [e, i]), e);
  }
  function Wp(e, i) {
    var r = Ct();
    i = i === void 0 ? null : i;
    var o = r.memoizedState;
    if (i !== null && jc(i, o[1])) return o[0];
    if (((o = e()), Na)) {
      pn(!0);
      try {
        e();
      } finally {
        pn(!1);
      }
    }
    return (r.memoizedState = [o, i]), o;
  }
  function e0(e, i, r) {
    return r === void 0 || ($i & 1073741824) !== 0
      ? (e.memoizedState = i)
      : ((e.memoizedState = r), (e = I1()), (Oe.lanes |= e), (sa |= e), r);
  }
  function Jp(e, i, r, o) {
    return mn(r, i)
      ? r
      : Ar.current !== null
        ? ((e = e0(e, r, o)), mn(e, i) || (Ft = !0), e)
        : ($i & 42) === 0
          ? ((Ft = !0), (e.memoizedState = r))
          : ((e = I1()), (Oe.lanes |= e), (sa |= e), i);
  }
  function Ip(e, i, r, o, u) {
    var p = P.p;
    P.p = p !== 0 && 8 > p ? p : 8;
    var E = q.T,
      B = {};
    (q.T = B), i0(e, !1, i, r);
    try {
      var O = u(),
        V = q.S;
      if (
        (V !== null && V(B, O),
        O !== null && typeof O == "object" && typeof O.then == "function")
      ) {
        var ne = T8(O, o);
        Bs(e, i, ne, En(e));
      } else Bs(e, i, o, En(e));
    } catch (se) {
      Bs(e, i, { then: function () {}, status: "rejected", reason: se }, En());
    } finally {
      (P.p = p), (q.T = E);
    }
  }
  function F8() {}
  function t0(e, i, r, o) {
    if (e.tag !== 5) throw Error(s(476));
    var u = e1(e).queue;
    Ip(
      e,
      u,
      i,
      pe,
      r === null
        ? F8
        : function () {
            return t1(e), r(o);
          },
    );
  }
  function e1(e) {
    var i = e.memoizedState;
    if (i !== null) return i;
    i = {
      memoizedState: pe,
      baseState: pe,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _i,
        lastRenderedState: pe,
      },
      next: null,
    };
    var r = {};
    return (
      (i.next = {
        memoizedState: r,
        baseState: r,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: _i,
          lastRenderedState: r,
        },
        next: null,
      }),
      (e.memoizedState = i),
      (e = e.alternate),
      e !== null && (e.memoizedState = i),
      i
    );
  }
  function t1(e) {
    var i = e1(e).next.queue;
    Bs(e, i, {}, En());
  }
  function n0() {
    return Kt(Gs);
  }
  function n1() {
    return Ct().memoizedState;
  }
  function i1() {
    return Ct().memoizedState;
  }
  function z8(e) {
    for (var i = e.return; i !== null; ) {
      switch (i.tag) {
        case 24:
        case 3:
          var r = En();
          e = ea(r);
          var o = ta(i, e, r);
          o !== null && (en(o, i, r), Rs(o, i, r)),
            (i = { cache: Hc() }),
            (e.payload = i);
          return;
      }
      i = i.return;
    }
  }
  function L8(e, i, r) {
    var o = En();
    (r = {
      lane: o,
      revertLane: 0,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      rl(e)
        ? r1(i, r)
        : ((r = Oc(e, i, r, o)), r !== null && (en(r, e, o), s1(r, i, o)));
  }
  function a1(e, i, r) {
    var o = En();
    Bs(e, i, r, o);
  }
  function Bs(e, i, r, o) {
    var u = {
      lane: o,
      revertLane: 0,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (rl(e)) r1(i, u);
    else {
      var p = e.alternate;
      if (
        e.lanes === 0 &&
        (p === null || p.lanes === 0) &&
        ((p = i.lastRenderedReducer), p !== null)
      )
        try {
          var E = i.lastRenderedState,
            B = p(E, r);
          if (((u.hasEagerState = !0), (u.eagerState = B), mn(B, E)))
            return jo(e, i, u, 0), at === null && qo(), !1;
        } catch (O) {
        } finally {
        }
      if (((r = Oc(e, i, u, o)), r !== null))
        return en(r, e, o), s1(r, i, o), !0;
    }
    return !1;
  }
  function i0(e, i, r, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: G0(),
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      rl(e))
    ) {
      if (i) throw Error(s(479));
    } else (i = Oc(e, r, o, 2)), i !== null && en(i, e, 2);
  }
  function rl(e) {
    var i = e.alternate;
    return e === Oe || (i !== null && i === Oe);
  }
  function r1(e, i) {
    Dr = Jo = !0;
    var r = e.pending;
    r === null ? (i.next = i) : ((i.next = r.next), (r.next = i)),
      (e.pending = i);
  }
  function s1(e, i, r) {
    if ((r & 4194176) !== 0) {
      var o = i.lanes;
      (o &= e.pendingLanes), (r |= o), (i.lanes = r), Z(e, r);
    }
  }
  var ci = {
    readContext: Kt,
    use: tl,
    useCallback: gt,
    useContext: gt,
    useEffect: gt,
    useImperativeHandle: gt,
    useLayoutEffect: gt,
    useInsertionEffect: gt,
    useMemo: gt,
    useReducer: gt,
    useRef: gt,
    useState: gt,
    useDebugValue: gt,
    useDeferredValue: gt,
    useTransition: gt,
    useSyncExternalStore: gt,
    useId: gt,
  };
  (ci.useCacheRefresh = gt),
    (ci.useMemoCache = gt),
    (ci.useHostTransitionStatus = gt),
    (ci.useFormState = gt),
    (ci.useActionState = gt),
    (ci.useOptimistic = gt);
  var Ua = {
    readContext: Kt,
    use: tl,
    useCallback: function (e, i) {
      return (on().memoizedState = [e, i === void 0 ? null : i]), e;
    },
    useContext: Kt,
    useEffect: Xp,
    useImperativeHandle: function (e, i, r) {
      (r = r != null ? r.concat([e]) : null),
        il(4194308, 4, Zp.bind(null, i, e), r);
    },
    useLayoutEffect: function (e, i) {
      return il(4194308, 4, e, i);
    },
    useInsertionEffect: function (e, i) {
      il(4, 2, e, i);
    },
    useMemo: function (e, i) {
      var r = on();
      i = i === void 0 ? null : i;
      var o = e();
      if (Na) {
        pn(!0);
        try {
          e();
        } finally {
          pn(!1);
        }
      }
      return (r.memoizedState = [o, i]), o;
    },
    useReducer: function (e, i, r) {
      var o = on();
      if (r !== void 0) {
        var u = r(i);
        if (Na) {
          pn(!0);
          try {
            r(i);
          } finally {
            pn(!1);
          }
        }
      } else u = i;
      return (
        (o.memoizedState = o.baseState = u),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: u,
        }),
        (o.queue = e),
        (e = e.dispatch = L8.bind(null, Oe, e)),
        [o.memoizedState, e]
      );
    },
    useRef: function (e) {
      var i = on();
      return (e = { current: e }), (i.memoizedState = e);
    },
    useState: function (e) {
      e = $c(e);
      var i = e.queue,
        r = a1.bind(null, Oe, i);
      return (i.dispatch = r), [e.memoizedState, r];
    },
    useDebugValue: Ic,
    useDeferredValue: function (e, i) {
      var r = on();
      return e0(r, e, i);
    },
    useTransition: function () {
      var e = $c(!1);
      return (
        (e = Ip.bind(null, Oe, e.queue, !0, !1)),
        (on().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, i, r) {
      var o = Oe,
        u = on();
      if (Ke) {
        if (r === void 0) throw Error(s(407));
        r = r();
      } else {
        if (((r = i()), at === null)) throw Error(s(349));
        (Ye & 60) !== 0 || Rp(o, i, r);
      }
      u.memoizedState = r;
      var p = { value: r, getSnapshot: i };
      return (
        (u.queue = p),
        Xp(Mp.bind(null, o, p, e), [e]),
        (o.flags |= 2048),
        _r(9, wp.bind(null, o, p, r, i), { destroy: void 0 }, null),
        r
      );
    },
    useId: function () {
      var e = on(),
        i = at.identifierPrefix;
      if (Ke) {
        var r = Di,
          o = Ci;
        (r = (o & ~(1 << (32 - kt(o) - 1))).toString(32) + r),
          (i = ":" + i + "R" + r),
          (r = Io++),
          0 < r && (i += "H" + r.toString(32)),
          (i += ":");
      } else (r = R8++), (i = ":" + i + "r" + r.toString(32) + ":");
      return (e.memoizedState = i);
    },
    useCacheRefresh: function () {
      return (on().memoizedState = z8.bind(null, Oe));
    },
  };
  (Ua.useMemoCache = Kc),
    (Ua.useHostTransitionStatus = n0),
    (Ua.useFormState = Vp),
    (Ua.useActionState = Vp),
    (Ua.useOptimistic = function (e) {
      var i = on();
      i.memoizedState = i.baseState = e;
      var r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (i.queue = r), (i = i0.bind(null, Oe, !0, r)), (r.dispatch = i), [e, i]
      );
    });
  var Wi = {
    readContext: Kt,
    use: tl,
    useCallback: $p,
    useContext: Kt,
    useEffect: Jc,
    useImperativeHandle: Qp,
    useInsertionEffect: Gp,
    useLayoutEffect: Kp,
    useMemo: Wp,
    useReducer: nl,
    useRef: Yp,
    useState: function () {
      return nl(_i);
    },
    useDebugValue: Ic,
    useDeferredValue: function (e, i) {
      var r = Ct();
      return Jp(r, Ie.memoizedState, e, i);
    },
    useTransition: function () {
      var e = nl(_i)[0],
        i = Ct().memoizedState;
      return [typeof e == "boolean" ? e : Ds(e), i];
    },
    useSyncExternalStore: Tp,
    useId: n1,
  };
  (Wi.useCacheRefresh = i1),
    (Wi.useMemoCache = Kc),
    (Wi.useHostTransitionStatus = n0),
    (Wi.useFormState = qp),
    (Wi.useActionState = qp),
    (Wi.useOptimistic = function (e, i) {
      var r = Ct();
      return zp(r, Ie, e, i);
    });
  var ka = {
    readContext: Kt,
    use: tl,
    useCallback: $p,
    useContext: Kt,
    useEffect: Jc,
    useImperativeHandle: Qp,
    useInsertionEffect: Gp,
    useLayoutEffect: Kp,
    useMemo: Wp,
    useReducer: Qc,
    useRef: Yp,
    useState: function () {
      return Qc(_i);
    },
    useDebugValue: Ic,
    useDeferredValue: function (e, i) {
      var r = Ct();
      return Ie === null ? e0(r, e, i) : Jp(r, Ie.memoizedState, e, i);
    },
    useTransition: function () {
      var e = Qc(_i)[0],
        i = Ct().memoizedState;
      return [typeof e == "boolean" ? e : Ds(e), i];
    },
    useSyncExternalStore: Tp,
    useId: n1,
  };
  (ka.useCacheRefresh = i1),
    (ka.useMemoCache = Kc),
    (ka.useHostTransitionStatus = n0),
    (ka.useFormState = Pp),
    (ka.useActionState = Pp),
    (ka.useOptimistic = function (e, i) {
      var r = Ct();
      return Ie !== null
        ? zp(r, Ie, e, i)
        : ((r.baseState = e), [e, r.queue.dispatch]);
    });
  function a0(e, i, r, o) {
    (i = e.memoizedState),
      (r = r(o, i)),
      (r = r == null ? i : M({}, i, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var r0 = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ie(e) === e : !1;
    },
    enqueueSetState: function (e, i, r) {
      e = e._reactInternals;
      var o = En(),
        u = ea(o);
      (u.payload = i),
        r != null && (u.callback = r),
        (i = ta(e, u, o)),
        i !== null && (en(i, e, o), Rs(i, e, o));
    },
    enqueueReplaceState: function (e, i, r) {
      e = e._reactInternals;
      var o = En(),
        u = ea(o);
      (u.tag = 1),
        (u.payload = i),
        r != null && (u.callback = r),
        (i = ta(e, u, o)),
        i !== null && (en(i, e, o), Rs(i, e, o));
    },
    enqueueForceUpdate: function (e, i) {
      e = e._reactInternals;
      var r = En(),
        o = ea(r);
      (o.tag = 2),
        i != null && (o.callback = i),
        (i = ta(e, o, r)),
        i !== null && (en(i, e, r), Rs(i, e, r));
    },
  };
  function o1(e, i, r, o, u, p, E) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, p, E)
        : i.prototype && i.prototype.isPureReactComponent
          ? !ds(r, o) || !ds(u, p)
          : !0
    );
  }
  function l1(e, i, r, o) {
    (e = i.state),
      typeof i.componentWillReceiveProps == "function" &&
        i.componentWillReceiveProps(r, o),
      typeof i.UNSAFE_componentWillReceiveProps == "function" &&
        i.UNSAFE_componentWillReceiveProps(r, o),
      i.state !== e && r0.enqueueReplaceState(i, i.state, null);
  }
  function Ha(e, i) {
    var r = i;
    if ("ref" in i) {
      r = {};
      for (var o in i) o !== "ref" && (r[o] = i[o]);
    }
    if ((e = e.defaultProps)) {
      r === i && (r = M({}, r));
      for (var u in e) r[u] === void 0 && (r[u] = e[u]);
    }
    return r;
  }
  var sl =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var i = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(i)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function u1(e) {
    sl(e);
  }
  function c1(e) {
    console.error(e);
  }
  function f1(e) {
    sl(e);
  }
  function ol(e, i) {
    try {
      var r = e.onUncaughtError;
      r(i.value, { componentStack: i.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function h1(e, i, r) {
    try {
      var o = e.onCaughtError;
      o(r.value, {
        componentStack: r.stack,
        errorBoundary: i.tag === 1 ? i.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function s0(e, i, r) {
    return (
      (r = ea(r)),
      (r.tag = 3),
      (r.payload = { element: null }),
      (r.callback = function () {
        ol(e, i);
      }),
      r
    );
  }
  function d1(e) {
    return (e = ea(e)), (e.tag = 3), e;
  }
  function p1(e, i, r, o) {
    var u = r.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var p = o.value;
      (e.payload = function () {
        return u(p);
      }),
        (e.callback = function () {
          h1(i, r, o);
        });
    }
    var E = r.stateNode;
    E !== null &&
      typeof E.componentDidCatch == "function" &&
      (e.callback = function () {
        h1(i, r, o),
          typeof u != "function" &&
            (oa === null ? (oa = new Set([this])) : oa.add(this));
        var B = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: B !== null ? B : "",
        });
      });
  }
  function N8(e, i, r, o, u) {
    if (
      ((r.flags |= 32768),
      o !== null && typeof o == "object" && typeof o.then == "function")
    ) {
      if (
        ((i = r.alternate),
        i !== null && Ts(i, r, u, !0),
        (r = On.current),
        r !== null)
      ) {
        switch (r.tag) {
          case 13:
            return (
              ui === null ? q0() : r.alternate === null && xt === 0 && (xt = 3),
              (r.flags &= -257),
              (r.flags |= 65536),
              (r.lanes = u),
              o === Nc
                ? (r.flags |= 16384)
                : ((i = r.updateQueue),
                  i === null ? (r.updateQueue = new Set([o])) : i.add(o),
                  P0(e, o, u)),
              !1
            );
          case 22:
            return (
              (r.flags |= 65536),
              o === Nc
                ? (r.flags |= 16384)
                : ((i = r.updateQueue),
                  i === null
                    ? ((i = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([o]),
                      }),
                      (r.updateQueue = i))
                    : ((r = i.retryQueue),
                      r === null ? (i.retryQueue = new Set([o])) : r.add(o)),
                  P0(e, o, u)),
              !1
            );
        }
        throw Error(s(435, r.tag));
      }
      return P0(e, o, u), q0(), !1;
    }
    if (Ke)
      return (
        (i = On.current),
        i !== null
          ? ((i.flags & 65536) === 0 && (i.flags |= 256),
            (i.flags |= 65536),
            (i.lanes = u),
            o !== Lc && ((e = Error(s(422), { cause: o })), ys(Rn(e, r))))
          : (o !== Lc && ((i = Error(s(423), { cause: o })), ys(Rn(i, r))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (o = Rn(o, r)),
            (u = s0(e.stateNode, o, u)),
            b0(e, u),
            xt !== 4 && (xt = 2)),
        !1
      );
    var p = Error(s(520), { cause: o });
    if (
      ((p = Rn(p, r)),
      Us === null ? (Us = [p]) : Us.push(p),
      xt !== 4 && (xt = 2),
      i === null)
    )
      return !0;
    (o = Rn(o, r)), (r = i);
    do {
      switch (r.tag) {
        case 3:
          return (
            (r.flags |= 65536),
            (e = u & -u),
            (r.lanes |= e),
            (e = s0(r.stateNode, o, e)),
            b0(r, e),
            !1
          );
        case 1:
          if (
            ((i = r.type),
            (p = r.stateNode),
            (r.flags & 128) === 0 &&
              (typeof i.getDerivedStateFromError == "function" ||
                (p !== null &&
                  typeof p.componentDidCatch == "function" &&
                  (oa === null || !oa.has(p)))))
          )
            return (
              (r.flags |= 65536),
              (u &= -u),
              (r.lanes |= u),
              (u = d1(u)),
              p1(u, e, r, o),
              b0(r, u),
              !1
            );
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var x1 = Error(s(461)),
    Ft = !1;
  function Vt(e, i, r, o) {
    i.child = e === null ? Ep(i, null, r, o) : za(i, e.child, r, o);
  }
  function m1(e, i, r, o, u) {
    r = r.render;
    var p = i.ref;
    if ("ref" in o) {
      var E = {};
      for (var B in o) B !== "ref" && (E[B] = o[B]);
    } else E = o;
    return (
      qa(i),
      (o = Pc(e, i, r, E, p, u)),
      (B = Yc()),
      e !== null && !Ft
        ? (Xc(e, i, u), Ti(e, i, u))
        : (Ke && B && Fc(i), (i.flags |= 1), Vt(e, i, o, u), i.child)
    );
  }
  function y1(e, i, r, o, u) {
    if (e === null) {
      var p = r.type;
      return typeof p == "function" &&
        !R0(p) &&
        p.defaultProps === void 0 &&
        r.compare === null
        ? ((i.tag = 15), (i.type = p), v1(e, i, p, o, u))
        : ((e = hl(r.type, null, o, i, i.mode, u)),
          (e.ref = i.ref),
          (e.return = i),
          (i.child = e));
    }
    if (((p = e.child), !x0(e, u))) {
      var E = p.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : ds), r(E, o) && e.ref === i.ref)
      )
        return Ti(e, i, u);
    }
    return (
      (i.flags |= 1),
      (e = ra(p, o)),
      (e.ref = i.ref),
      (e.return = i),
      (i.child = e)
    );
  }
  function v1(e, i, r, o, u) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (ds(p, o) && e.ref === i.ref)
        if (((Ft = !1), (i.pendingProps = o = p), x0(e, u)))
          (e.flags & 131072) !== 0 && (Ft = !0);
        else return (i.lanes = e.lanes), Ti(e, i, u);
    }
    return o0(e, i, r, o, u);
  }
  function g1(e, i, r) {
    var o = i.pendingProps,
      u = o.children,
      p = (i.stateNode._pendingVisibility & 2) !== 0,
      E = e !== null ? e.memoizedState : null;
    if ((_s(e, i), o.mode === "hidden" || p)) {
      if ((i.flags & 128) !== 0) {
        if (((o = E !== null ? E.baseLanes | r : r), e !== null)) {
          for (u = i.child = e.child, p = 0; u !== null; )
            (p = p | u.lanes | u.childLanes), (u = u.sibling);
          i.childLanes = p & ~o;
        } else (i.childLanes = 0), (i.child = null);
        return E1(e, i, o, r);
      }
      if ((r & 536870912) !== 0)
        (i.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Wo(i, E !== null ? E.cachePool : null),
          E !== null ? bp(i, E) : Uc(),
          Ap(i);
      else
        return (
          (i.lanes = i.childLanes = 536870912),
          E1(e, i, E !== null ? E.baseLanes | r : r, r)
        );
    } else
      E !== null
        ? (Wo(i, E.cachePool), bp(i, E), Qi(), (i.memoizedState = null))
        : (e !== null && Wo(i, null), Uc(), Qi());
    return Vt(e, i, u, r), i.child;
  }
  function E1(e, i, r, o) {
    var u = qc();
    return (
      (u = u === null ? null : { parent: Ot._currentValue, pool: u }),
      (i.memoizedState = { baseLanes: r, cachePool: u }),
      e !== null && Wo(i, null),
      Uc(),
      Ap(i),
      e !== null && Ts(e, i, o, !0),
      null
    );
  }
  function _s(e, i) {
    var r = i.ref;
    if (r === null) e !== null && e.ref !== null && (i.flags |= 2097664);
    else {
      if (typeof r != "function" && typeof r != "object") throw Error(s(284));
      (e === null || e.ref !== r) && (i.flags |= 2097664);
    }
  }
  function o0(e, i, r, o, u) {
    return (
      qa(i),
      (r = Pc(e, i, r, o, void 0, u)),
      (o = Yc()),
      e !== null && !Ft
        ? (Xc(e, i, u), Ti(e, i, u))
        : (Ke && o && Fc(i), (i.flags |= 1), Vt(e, i, r, u), i.child)
    );
  }
  function b1(e, i, r, o, u, p) {
    return (
      qa(i),
      (i.updateQueue = null),
      (r = _p(i, o, r, u)),
      Bp(e),
      (o = Yc()),
      e !== null && !Ft
        ? (Xc(e, i, p), Ti(e, i, p))
        : (Ke && o && Fc(i), (i.flags |= 1), Vt(e, i, r, p), i.child)
    );
  }
  function A1(e, i, r, o, u) {
    if ((qa(i), i.stateNode === null)) {
      var p = vr,
        E = r.contextType;
      typeof E == "object" && E !== null && (p = Kt(E)),
        (p = new r(o, p)),
        (i.memoizedState =
          p.state !== null && p.state !== void 0 ? p.state : null),
        (p.updater = r0),
        (i.stateNode = p),
        (p._reactInternals = i),
        (p = i.stateNode),
        (p.props = o),
        (p.state = i.memoizedState),
        (p.refs = {}),
        g0(i),
        (E = r.contextType),
        (p.context = typeof E == "object" && E !== null ? Kt(E) : vr),
        (p.state = i.memoizedState),
        (E = r.getDerivedStateFromProps),
        typeof E == "function" && (a0(i, r, E, o), (p.state = i.memoizedState)),
        typeof r.getDerivedStateFromProps == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function" ||
          (typeof p.UNSAFE_componentWillMount != "function" &&
            typeof p.componentWillMount != "function") ||
          ((E = p.state),
          typeof p.componentWillMount == "function" && p.componentWillMount(),
          typeof p.UNSAFE_componentWillMount == "function" &&
            p.UNSAFE_componentWillMount(),
          E !== p.state && r0.enqueueReplaceState(p, p.state, null),
          Ms(i, o, p, u),
          ws(),
          (p.state = i.memoizedState)),
        typeof p.componentDidMount == "function" && (i.flags |= 4194308),
        (o = !0);
    } else if (e === null) {
      p = i.stateNode;
      var B = i.memoizedProps,
        O = Ha(r, B);
      p.props = O;
      var V = p.context,
        ne = r.contextType;
      (E = vr), typeof ne == "object" && ne !== null && (E = Kt(ne));
      var se = r.getDerivedStateFromProps;
      (ne =
        typeof se == "function" ||
        typeof p.getSnapshotBeforeUpdate == "function"),
        (B = i.pendingProps !== B),
        ne ||
          (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
            typeof p.componentWillReceiveProps != "function") ||
          ((B || V !== E) && l1(i, p, o, E)),
        (Ii = !1);
      var Q = i.memoizedState;
      (p.state = Q),
        Ms(i, o, p, u),
        ws(),
        (V = i.memoizedState),
        B || Q !== V || Ii
          ? (typeof se == "function" &&
              (a0(i, r, se, o), (V = i.memoizedState)),
            (O = Ii || o1(i, r, O, o, Q, V, E))
              ? (ne ||
                  (typeof p.UNSAFE_componentWillMount != "function" &&
                    typeof p.componentWillMount != "function") ||
                  (typeof p.componentWillMount == "function" &&
                    p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == "function" &&
                    p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == "function" &&
                  (i.flags |= 4194308))
              : (typeof p.componentDidMount == "function" &&
                  (i.flags |= 4194308),
                (i.memoizedProps = o),
                (i.memoizedState = V)),
            (p.props = o),
            (p.state = V),
            (p.context = E),
            (o = O))
          : (typeof p.componentDidMount == "function" && (i.flags |= 4194308),
            (o = !1));
    } else {
      (p = i.stateNode),
        E0(e, i),
        (E = i.memoizedProps),
        (ne = Ha(r, E)),
        (p.props = ne),
        (se = i.pendingProps),
        (Q = p.context),
        (V = r.contextType),
        (O = vr),
        typeof V == "object" && V !== null && (O = Kt(V)),
        (B = r.getDerivedStateFromProps),
        (V =
          typeof B == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function") ||
          (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
            typeof p.componentWillReceiveProps != "function") ||
          ((E !== se || Q !== O) && l1(i, p, o, O)),
        (Ii = !1),
        (Q = i.memoizedState),
        (p.state = Q),
        Ms(i, o, p, u),
        ws();
      var te = i.memoizedState;
      E !== se ||
      Q !== te ||
      Ii ||
      (e !== null && e.dependencies !== null && ll(e.dependencies))
        ? (typeof B == "function" && (a0(i, r, B, o), (te = i.memoizedState)),
          (ne =
            Ii ||
            o1(i, r, ne, o, Q, te, O) ||
            (e !== null && e.dependencies !== null && ll(e.dependencies)))
            ? (V ||
                (typeof p.UNSAFE_componentWillUpdate != "function" &&
                  typeof p.componentWillUpdate != "function") ||
                (typeof p.componentWillUpdate == "function" &&
                  p.componentWillUpdate(o, te, O),
                typeof p.UNSAFE_componentWillUpdate == "function" &&
                  p.UNSAFE_componentWillUpdate(o, te, O)),
              typeof p.componentDidUpdate == "function" && (i.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == "function" &&
                (i.flags |= 1024))
            : (typeof p.componentDidUpdate != "function" ||
                (E === e.memoizedProps && Q === e.memoizedState) ||
                (i.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != "function" ||
                (E === e.memoizedProps && Q === e.memoizedState) ||
                (i.flags |= 1024),
              (i.memoizedProps = o),
              (i.memoizedState = te)),
          (p.props = o),
          (p.state = te),
          (p.context = O),
          (o = ne))
        : (typeof p.componentDidUpdate != "function" ||
            (E === e.memoizedProps && Q === e.memoizedState) ||
            (i.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != "function" ||
            (E === e.memoizedProps && Q === e.memoizedState) ||
            (i.flags |= 1024),
          (o = !1));
    }
    return (
      (p = o),
      _s(e, i),
      (o = (i.flags & 128) !== 0),
      p || o
        ? ((p = i.stateNode),
          (r =
            o && typeof r.getDerivedStateFromError != "function"
              ? null
              : p.render()),
          (i.flags |= 1),
          e !== null && o
            ? ((i.child = za(i, e.child, null, u)),
              (i.child = za(i, null, r, u)))
            : Vt(e, i, r, u),
          (i.memoizedState = p.state),
          (e = i.child))
        : (e = Ti(e, i, u)),
      e
    );
  }
  function S1(e, i, r, o) {
    return ms(), (i.flags |= 256), Vt(e, i, r, o), i.child;
  }
  var l0 = { dehydrated: null, treeContext: null, retryLane: 0 };
  function u0(e) {
    return { baseLanes: e, cachePool: Dp() };
  }
  function c0(e, i, r) {
    return (e = e !== null ? e.childLanes & ~r : 0), i && (e |= Nn), e;
  }
  function C1(e, i, r) {
    var o = i.pendingProps,
      u = !1,
      p = (i.flags & 128) !== 0,
      E;
    if (
      ((E = p) ||
        (E =
          e !== null && e.memoizedState === null ? !1 : (Mt.current & 2) !== 0),
      E && ((u = !0), (i.flags &= -129)),
      (E = (i.flags & 32) !== 0),
      (i.flags &= -33),
      e === null)
    ) {
      if (Ke) {
        if ((u ? Zi(i) : Qi(), Ke)) {
          var B = Ht,
            O;
          if ((O = B)) {
            e: {
              for (O = B, B = li; O.nodeType !== 8; ) {
                if (!B) {
                  B = null;
                  break e;
                }
                if (((O = In(O.nextSibling)), O === null)) {
                  B = null;
                  break e;
                }
              }
              B = O;
            }
            B !== null
              ? ((i.memoizedState = {
                  dehydrated: B,
                  treeContext: Ma !== null ? { id: Ci, overflow: Di } : null,
                  retryLane: 536870912,
                }),
                (O = Ln(18, null, null, 0)),
                (O.stateNode = B),
                (O.return = i),
                (i.child = O),
                (It = i),
                (Ht = null),
                (O = !0))
              : (O = !1);
          }
          O || Fa(i);
        }
        if (
          ((B = i.memoizedState),
          B !== null && ((B = B.dehydrated), B !== null))
        )
          return B.data === "$!" ? (i.lanes = 16) : (i.lanes = 536870912), null;
        Bi(i);
      }
      return (
        (B = o.children),
        (o = o.fallback),
        u
          ? (Qi(),
            (u = i.mode),
            (B = h0({ mode: "hidden", children: B }, u)),
            (o = Pa(o, u, r, null)),
            (B.return = i),
            (o.return = i),
            (B.sibling = o),
            (i.child = B),
            (u = i.child),
            (u.memoizedState = u0(r)),
            (u.childLanes = c0(e, E, r)),
            (i.memoizedState = l0),
            o)
          : (Zi(i), f0(i, B))
      );
    }
    if (
      ((O = e.memoizedState), O !== null && ((B = O.dehydrated), B !== null))
    ) {
      if (p)
        i.flags & 256
          ? (Zi(i), (i.flags &= -257), (i = d0(e, i, r)))
          : i.memoizedState !== null
            ? (Qi(), (i.child = e.child), (i.flags |= 128), (i = null))
            : (Qi(),
              (u = o.fallback),
              (B = i.mode),
              (o = h0({ mode: "visible", children: o.children }, B)),
              (u = Pa(u, B, r, null)),
              (u.flags |= 2),
              (o.return = i),
              (u.return = i),
              (o.sibling = u),
              (i.child = o),
              za(i, e.child, null, r),
              (o = i.child),
              (o.memoizedState = u0(r)),
              (o.childLanes = c0(e, E, r)),
              (i.memoizedState = l0),
              (i = u));
      else if ((Zi(i), B.data === "$!")) {
        if (((E = B.nextSibling && B.nextSibling.dataset), E)) var V = E.dgst;
        (E = V),
          (o = Error(s(419))),
          (o.stack = ""),
          (o.digest = E),
          ys({ value: o, source: null, stack: null }),
          (i = d0(e, i, r));
      } else if (
        (Ft || Ts(e, i, r, !1), (E = (r & e.childLanes) !== 0), Ft || E)
      ) {
        if (((E = at), E !== null)) {
          if (((o = r & -r), (o & 42) !== 0)) o = 1;
          else
            switch (o) {
              case 2:
                o = 1;
                break;
              case 8:
                o = 4;
                break;
              case 32:
                o = 16;
                break;
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
                o = 64;
                break;
              case 268435456:
                o = 134217728;
                break;
              default:
                o = 0;
            }
          if (
            ((o = (o & (E.suspendedLanes | r)) !== 0 ? 0 : o),
            o !== 0 && o !== O.retryLane)
          )
            throw ((O.retryLane = o), Ki(e, o), en(E, e, o), x1);
        }
        B.data === "$?" || q0(), (i = d0(e, i, r));
      } else
        B.data === "$?"
          ? ((i.flags |= 128),
            (i.child = e.child),
            (i = W8.bind(null, e)),
            (B._reactRetry = i),
            (i = null))
          : ((e = O.treeContext),
            (Ht = In(B.nextSibling)),
            (It = i),
            (Ke = !0),
            (Wn = null),
            (li = !1),
            e !== null &&
              ((wn[Mn++] = Ci),
              (wn[Mn++] = Di),
              (wn[Mn++] = Ma),
              (Ci = e.id),
              (Di = e.overflow),
              (Ma = i)),
            (i = f0(i, o.children)),
            (i.flags |= 4096));
      return i;
    }
    return u
      ? (Qi(),
        (u = o.fallback),
        (B = i.mode),
        (O = e.child),
        (V = O.sibling),
        (o = ra(O, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = O.subtreeFlags & 31457280),
        V !== null ? (u = ra(V, u)) : ((u = Pa(u, B, r, null)), (u.flags |= 2)),
        (u.return = i),
        (o.return = i),
        (o.sibling = u),
        (i.child = o),
        (o = u),
        (u = i.child),
        (B = e.child.memoizedState),
        B === null
          ? (B = u0(r))
          : ((O = B.cachePool),
            O !== null
              ? ((V = Ot._currentValue),
                (O = O.parent !== V ? { parent: V, pool: V } : O))
              : (O = Dp()),
            (B = { baseLanes: B.baseLanes | r, cachePool: O })),
        (u.memoizedState = B),
        (u.childLanes = c0(e, E, r)),
        (i.memoizedState = l0),
        o)
      : (Zi(i),
        (r = e.child),
        (e = r.sibling),
        (r = ra(r, { mode: "visible", children: o.children })),
        (r.return = i),
        (r.sibling = null),
        e !== null &&
          ((E = i.deletions),
          E === null ? ((i.deletions = [e]), (i.flags |= 16)) : E.push(e)),
        (i.child = r),
        (i.memoizedState = null),
        r);
  }
  function f0(e, i) {
    return (
      (i = h0({ mode: "visible", children: i }, e.mode)),
      (i.return = e),
      (e.child = i)
    );
  }
  function h0(e, i) {
    return $1(e, i, 0, null);
  }
  function d0(e, i, r) {
    return (
      za(i, e.child, null, r),
      (e = f0(i, i.pendingProps.children)),
      (e.flags |= 2),
      (i.memoizedState = null),
      e
    );
  }
  function D1(e, i, r) {
    e.lanes |= i;
    var o = e.alternate;
    o !== null && (o.lanes |= i), y0(e.return, i, r);
  }
  function p0(e, i, r, o, u) {
    var p = e.memoizedState;
    p === null
      ? (e.memoizedState = {
          isBackwards: i,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: r,
          tailMode: u,
        })
      : ((p.isBackwards = i),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = o),
        (p.tail = r),
        (p.tailMode = u));
  }
  function B1(e, i, r) {
    var o = i.pendingProps,
      u = o.revealOrder,
      p = o.tail;
    if ((Vt(e, i, o.children, r), (o = Mt.current), (o & 2) !== 0))
      (o = (o & 1) | 2), (i.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = i.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && D1(e, r, i);
          else if (e.tag === 19) D1(e, r, i);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === i) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === i) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      o &= 1;
    }
    switch ((Xe(Mt, o), u)) {
      case "forwards":
        for (r = i.child, u = null; r !== null; )
          (e = r.alternate),
            e !== null && $o(e) === null && (u = r),
            (r = r.sibling);
        (r = u),
          r === null
            ? ((u = i.child), (i.child = null))
            : ((u = r.sibling), (r.sibling = null)),
          p0(i, !1, u, r, p);
        break;
      case "backwards":
        for (r = null, u = i.child, i.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && $o(e) === null)) {
            i.child = u;
            break;
          }
          (e = u.sibling), (u.sibling = r), (r = u), (u = e);
        }
        p0(i, !0, r, null, p);
        break;
      case "together":
        p0(i, !1, null, null, void 0);
        break;
      default:
        i.memoizedState = null;
    }
    return i.child;
  }
  function Ti(e, i, r) {
    if (
      (e !== null && (i.dependencies = e.dependencies),
      (sa |= i.lanes),
      (r & i.childLanes) === 0)
    )
      if (e !== null) {
        if ((Ts(e, i, r, !1), (r & i.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && i.child !== e.child) throw Error(s(153));
    if (i.child !== null) {
      for (
        e = i.child, r = ra(e, e.pendingProps), i.child = r, r.return = i;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = ra(e, e.pendingProps)),
          (r.return = i);
      r.sibling = null;
    }
    return i.child;
  }
  function x0(e, i) {
    return (e.lanes & i) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && ll(e)));
  }
  function U8(e, i, r) {
    switch (i.tag) {
      case 3:
        Pn(i, i.stateNode.containerInfo),
          Ji(i, Ot, e.memoizedState.cache),
          ms();
        break;
      case 27:
      case 5:
        ai(i);
        break;
      case 4:
        Pn(i, i.stateNode.containerInfo);
        break;
      case 10:
        Ji(i, i.type, i.memoizedProps.value);
        break;
      case 13:
        var o = i.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (Zi(i), (i.flags |= 128), null)
            : (r & i.child.childLanes) !== 0
              ? C1(e, i, r)
              : (Zi(i), (e = Ti(e, i, r)), e !== null ? e.sibling : null);
        Zi(i);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((o = (r & i.childLanes) !== 0),
          o || (Ts(e, i, r, !1), (o = (r & i.childLanes) !== 0)),
          u)
        ) {
          if (o) return B1(e, i, r);
          i.flags |= 128;
        }
        if (
          ((u = i.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Xe(Mt, Mt.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return (i.lanes = 0), g1(e, i, r);
      case 24:
        Ji(i, Ot, e.memoizedState.cache);
    }
    return Ti(e, i, r);
  }
  function _1(e, i, r) {
    if (e !== null)
      if (e.memoizedProps !== i.pendingProps) Ft = !0;
      else {
        if (!x0(e, r) && (i.flags & 128) === 0) return (Ft = !1), U8(e, i, r);
        Ft = (e.flags & 131072) !== 0;
      }
    else (Ft = !1), Ke && (i.flags & 1048576) !== 0 && fp(i, Xo, i.index);
    switch (((i.lanes = 0), i.tag)) {
      case 16:
        e: {
          e = i.pendingProps;
          var o = i.elementType,
            u = o._init;
          if (((o = u(o._payload)), (i.type = o), typeof o == "function"))
            R0(o)
              ? ((e = Ha(o, e)), (i.tag = 1), (i = A1(null, i, o, e, r)))
              : ((i.tag = 0), (i = o0(null, i, o, e, r)));
          else {
            if (o != null) {
              if (((u = o.$$typeof), u === b)) {
                (i.tag = 11), (i = m1(null, i, o, e, r));
                break e;
              } else if (u === R) {
                (i.tag = 14), (i = y1(null, i, o, e, r));
                break e;
              }
            }
            throw ((i = L(o) || o), Error(s(306, i, "")));
          }
        }
        return i;
      case 0:
        return o0(e, i, i.type, i.pendingProps, r);
      case 1:
        return (o = i.type), (u = Ha(o, i.pendingProps)), A1(e, i, o, u, r);
      case 3:
        e: {
          if ((Pn(i, i.stateNode.containerInfo), e === null))
            throw Error(s(387));
          var p = i.pendingProps;
          (u = i.memoizedState), (o = u.element), E0(e, i), Ms(i, p, null, r);
          var E = i.memoizedState;
          if (
            ((p = E.cache),
            Ji(i, Ot, p),
            p !== u.cache && v0(i, [Ot], r, !0),
            ws(),
            (p = E.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: p, isDehydrated: !1, cache: E.cache }),
              (i.updateQueue.baseState = u),
              (i.memoizedState = u),
              i.flags & 256)
            ) {
              i = S1(e, i, p, r);
              break e;
            } else if (p !== o) {
              (o = Rn(Error(s(424)), i)), ys(o), (i = S1(e, i, p, r));
              break e;
            } else
              for (
                Ht = In(i.stateNode.containerInfo.firstChild),
                  It = i,
                  Ke = !0,
                  Wn = null,
                  li = !0,
                  r = Ep(i, null, p, r),
                  i.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((ms(), p === o)) {
              i = Ti(e, i, r);
              break e;
            }
            Vt(e, i, p, r);
          }
          i = i.child;
        }
        return i;
      case 26:
        return (
          _s(e, i),
          e === null
            ? (r = wx(i.type, null, i.pendingProps, null))
              ? (i.memoizedState = r)
              : Ke ||
                ((r = i.type),
                (e = i.pendingProps),
                (o = Cl(nt.current).createElement(r)),
                (o[he] = i),
                (o[de] = e),
                qt(o, r, e),
                $e(o),
                (i.stateNode = o))
            : (i.memoizedState = wx(
                i.type,
                e.memoizedProps,
                i.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          ai(i),
          e === null &&
            Ke &&
            ((o = i.stateNode = _x(i.type, i.pendingProps, nt.current)),
            (It = i),
            (li = !0),
            (Ht = In(o.firstChild))),
          (o = i.pendingProps.children),
          e !== null || Ke ? Vt(e, i, o, r) : (i.child = za(i, null, o, r)),
          _s(e, i),
          i.child
        );
      case 5:
        return (
          e === null &&
            Ke &&
            ((u = o = Ht) &&
              ((o = dE(o, i.type, i.pendingProps, li)),
              o !== null
                ? ((i.stateNode = o),
                  (It = i),
                  (Ht = In(o.firstChild)),
                  (li = !1),
                  (u = !0))
                : (u = !1)),
            u || Fa(i)),
          ai(i),
          (u = i.type),
          (p = i.pendingProps),
          (E = e !== null ? e.memoizedProps : null),
          (o = p.children),
          tf(u, p) ? (o = null) : E !== null && tf(u, E) && (i.flags |= 32),
          i.memoizedState !== null &&
            ((u = Pc(e, i, w8, null, null, r)), (Gs._currentValue = u)),
          _s(e, i),
          Vt(e, i, o, r),
          i.child
        );
      case 6:
        return (
          e === null &&
            Ke &&
            ((e = r = Ht) &&
              ((r = pE(r, i.pendingProps, li)),
              r !== null
                ? ((i.stateNode = r), (It = i), (Ht = null), (e = !0))
                : (e = !1)),
            e || Fa(i)),
          null
        );
      case 13:
        return C1(e, i, r);
      case 4:
        return (
          Pn(i, i.stateNode.containerInfo),
          (o = i.pendingProps),
          e === null ? (i.child = za(i, null, o, r)) : Vt(e, i, o, r),
          i.child
        );
      case 11:
        return m1(e, i, i.type, i.pendingProps, r);
      case 7:
        return Vt(e, i, i.pendingProps, r), i.child;
      case 8:
        return Vt(e, i, i.pendingProps.children, r), i.child;
      case 12:
        return Vt(e, i, i.pendingProps.children, r), i.child;
      case 10:
        return (
          (o = i.pendingProps),
          Ji(i, i.type, o.value),
          Vt(e, i, o.children, r),
          i.child
        );
      case 9:
        return (
          (u = i.type._context),
          (o = i.pendingProps.children),
          qa(i),
          (u = Kt(u)),
          (o = o(u)),
          (i.flags |= 1),
          Vt(e, i, o, r),
          i.child
        );
      case 14:
        return y1(e, i, i.type, i.pendingProps, r);
      case 15:
        return v1(e, i, i.type, i.pendingProps, r);
      case 19:
        return B1(e, i, r);
      case 22:
        return g1(e, i, r);
      case 24:
        return (
          qa(i),
          (o = Kt(Ot)),
          e === null
            ? ((u = qc()),
              u === null &&
                ((u = at),
                (p = Hc()),
                (u.pooledCache = p),
                p.refCount++,
                p !== null && (u.pooledCacheLanes |= r),
                (u = p)),
              (i.memoizedState = { parent: o, cache: u }),
              g0(i),
              Ji(i, Ot, u))
            : ((e.lanes & r) !== 0 && (E0(e, i), Ms(i, null, null, r), ws()),
              (u = e.memoizedState),
              (p = i.memoizedState),
              u.parent !== o
                ? ((u = { parent: o, cache: o }),
                  (i.memoizedState = u),
                  i.lanes === 0 &&
                    (i.memoizedState = i.updateQueue.baseState = u),
                  Ji(i, Ot, o))
                : ((o = p.cache),
                  Ji(i, Ot, o),
                  o !== u.cache && v0(i, [Ot], r, !0))),
          Vt(e, i, i.pendingProps.children, r),
          i.child
        );
      case 29:
        throw i.pendingProps;
    }
    throw Error(s(156, i.tag));
  }
  var m0 = me(null),
    Va = null,
    Ri = null;
  function Ji(e, i, r) {
    Xe(m0, i._currentValue), (i._currentValue = r);
  }
  function wi(e) {
    (e._currentValue = m0.current), Je(m0);
  }
  function y0(e, i, r) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & i) !== i
          ? ((e.childLanes |= i), o !== null && (o.childLanes |= i))
          : o !== null && (o.childLanes & i) !== i && (o.childLanes |= i),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function v0(e, i, r, o) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var p = u.dependencies;
      if (p !== null) {
        var E = u.child;
        p = p.firstContext;
        e: for (; p !== null; ) {
          var B = p;
          p = u;
          for (var O = 0; O < i.length; O++)
            if (B.context === i[O]) {
              (p.lanes |= r),
                (B = p.alternate),
                B !== null && (B.lanes |= r),
                y0(p.return, r, e),
                o || (E = null);
              break e;
            }
          p = B.next;
        }
      } else if (u.tag === 18) {
        if (((E = u.return), E === null)) throw Error(s(341));
        (E.lanes |= r),
          (p = E.alternate),
          p !== null && (p.lanes |= r),
          y0(E, r, e),
          (E = null);
      } else E = u.child;
      if (E !== null) E.return = u;
      else
        for (E = u; E !== null; ) {
          if (E === e) {
            E = null;
            break;
          }
          if (((u = E.sibling), u !== null)) {
            (u.return = E.return), (E = u);
            break;
          }
          E = E.return;
        }
      u = E;
    }
  }
  function Ts(e, i, r, o) {
    e = null;
    for (var u = i, p = !1; u !== null; ) {
      if (!p) {
        if ((u.flags & 524288) !== 0) p = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var E = u.alternate;
        if (E === null) throw Error(s(387));
        if (((E = E.memoizedProps), E !== null)) {
          var B = u.type;
          mn(u.pendingProps.value, E.value) ||
            (e !== null ? e.push(B) : (e = [B]));
        }
      } else if (u === vt.current) {
        if (((E = u.alternate), E === null)) throw Error(s(387));
        E.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(Gs) : (e = [Gs]));
      }
      u = u.return;
    }
    e !== null && v0(i, e, r, o), (i.flags |= 262144);
  }
  function ll(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!mn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function qa(e) {
    (Va = e),
      (Ri = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Kt(e) {
    return T1(Va, e);
  }
  function ul(e, i) {
    return Va === null && qa(e), T1(e, i);
  }
  function T1(e, i) {
    var r = i._currentValue;
    if (((i = { context: i, memoizedValue: r, next: null }), Ri === null)) {
      if (e === null) throw Error(s(308));
      (Ri = i),
        (e.dependencies = { lanes: 0, firstContext: i }),
        (e.flags |= 524288);
    } else Ri = Ri.next = i;
    return r;
  }
  var Ii = !1;
  function g0(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function E0(e, i) {
    (e = e.updateQueue),
      i.updateQueue === e &&
        (i.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function ea(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ta(e, i, r) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (ht & 2) !== 0)) {
      var u = o.pending;
      return (
        u === null ? (i.next = i) : ((i.next = u.next), (u.next = i)),
        (o.pending = i),
        (i = Po(e)),
        up(e, null, r),
        i
      );
    }
    return jo(e, o, i, r), Po(e);
  }
  function Rs(e, i, r) {
    if (
      ((i = i.updateQueue), i !== null && ((i = i.shared), (r & 4194176) !== 0))
    ) {
      var o = i.lanes;
      (o &= e.pendingLanes), (r |= o), (i.lanes = r), Z(e, r);
    }
  }
  function b0(e, i) {
    var r = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), r === o)) {
      var u = null,
        p = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var E = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null,
          };
          p === null ? (u = p = E) : (p = p.next = E), (r = r.next);
        } while (r !== null);
        p === null ? (u = p = i) : (p = p.next = i);
      } else u = p = i;
      (r = {
        baseState: o.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: p,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = i) : (e.next = i),
      (r.lastBaseUpdate = i);
  }
  var A0 = !1;
  function ws() {
    if (A0) {
      var e = Cr;
      if (e !== null) throw e;
    }
  }
  function Ms(e, i, r, o) {
    A0 = !1;
    var u = e.updateQueue;
    Ii = !1;
    var p = u.firstBaseUpdate,
      E = u.lastBaseUpdate,
      B = u.shared.pending;
    if (B !== null) {
      u.shared.pending = null;
      var O = B,
        V = O.next;
      (O.next = null), E === null ? (p = V) : (E.next = V), (E = O);
      var ne = e.alternate;
      ne !== null &&
        ((ne = ne.updateQueue),
        (B = ne.lastBaseUpdate),
        B !== E &&
          (B === null ? (ne.firstBaseUpdate = V) : (B.next = V),
          (ne.lastBaseUpdate = O)));
    }
    if (p !== null) {
      var se = u.baseState;
      (E = 0), (ne = V = O = null), (B = p);
      do {
        var Q = B.lane & -536870913,
          te = Q !== B.lane;
        if (te ? (Ye & Q) === Q : (o & Q) === Q) {
          Q !== 0 && Q === Sr && (A0 = !0),
            ne !== null &&
              (ne = ne.next =
                {
                  lane: 0,
                  tag: B.tag,
                  payload: B.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var be = e,
              Te = B;
            Q = i;
            var mt = r;
            switch (Te.tag) {
              case 1:
                if (((be = Te.payload), typeof be == "function")) {
                  se = be.call(mt, se, Q);
                  break e;
                }
                se = be;
                break e;
              case 3:
                be.flags = (be.flags & -65537) | 128;
              case 0:
                if (
                  ((be = Te.payload),
                  (Q = typeof be == "function" ? be.call(mt, se, Q) : be),
                  Q == null)
                )
                  break e;
                se = M({}, se, Q);
                break e;
              case 2:
                Ii = !0;
            }
          }
          (Q = B.callback),
            Q !== null &&
              ((e.flags |= 64),
              te && (e.flags |= 8192),
              (te = u.callbacks),
              te === null ? (u.callbacks = [Q]) : te.push(Q));
        } else
          (te = {
            lane: Q,
            tag: B.tag,
            payload: B.payload,
            callback: B.callback,
            next: null,
          }),
            ne === null ? ((V = ne = te), (O = se)) : (ne = ne.next = te),
            (E |= Q);
        if (((B = B.next), B === null)) {
          if (((B = u.shared.pending), B === null)) break;
          (te = B),
            (B = te.next),
            (te.next = null),
            (u.lastBaseUpdate = te),
            (u.shared.pending = null);
        }
      } while (!0);
      ne === null && (O = se),
        (u.baseState = O),
        (u.firstBaseUpdate = V),
        (u.lastBaseUpdate = ne),
        p === null && (u.shared.lanes = 0),
        (sa |= E),
        (e.lanes = E),
        (e.memoizedState = se);
    }
  }
  function R1(e, i) {
    if (typeof e != "function") throw Error(s(191, e));
    e.call(i);
  }
  function w1(e, i) {
    var r = e.callbacks;
    if (r !== null)
      for (e.callbacks = null, e = 0; e < r.length; e++) R1(r[e], i);
  }
  function Os(e, i) {
    try {
      var r = i.updateQueue,
        o = r !== null ? r.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        r = u;
        do {
          if ((r.tag & e) === e) {
            o = void 0;
            var p = r.create,
              E = r.inst;
            (o = p()), (E.destroy = o);
          }
          r = r.next;
        } while (r !== u);
      }
    } catch (B) {
      it(i, i.return, B);
    }
  }
  function na(e, i, r) {
    try {
      var o = i.updateQueue,
        u = o !== null ? o.lastEffect : null;
      if (u !== null) {
        var p = u.next;
        o = p;
        do {
          if ((o.tag & e) === e) {
            var E = o.inst,
              B = E.destroy;
            if (B !== void 0) {
              (E.destroy = void 0), (u = i);
              var O = r;
              try {
                B();
              } catch (V) {
                it(u, O, V);
              }
            }
          }
          o = o.next;
        } while (o !== p);
      }
    } catch (V) {
      it(i, i.return, V);
    }
  }
  function M1(e) {
    var i = e.updateQueue;
    if (i !== null) {
      var r = e.stateNode;
      try {
        w1(i, r);
      } catch (o) {
        it(e, e.return, o);
      }
    }
  }
  function O1(e, i, r) {
    (r.props = Ha(e.type, e.memoizedProps)), (r.state = e.memoizedState);
    try {
      r.componentWillUnmount();
    } catch (o) {
      it(e, i, o);
    }
  }
  function ja(e, i) {
    try {
      var r = e.ref;
      if (r !== null) {
        var o = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var u = o;
            break;
          default:
            u = o;
        }
        typeof r == "function" ? (e.refCleanup = r(u)) : (r.current = u);
      }
    } catch (p) {
      it(e, i, p);
    }
  }
  function yn(e, i) {
    var r = e.ref,
      o = e.refCleanup;
    if (r !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (u) {
          it(e, i, u);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof r == "function")
        try {
          r(null);
        } catch (u) {
          it(e, i, u);
        }
      else r.current = null;
  }
  function F1(e) {
    var i = e.type,
      r = e.memoizedProps,
      o = e.stateNode;
    try {
      e: switch (i) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          r.autoFocus && o.focus();
          break e;
        case "img":
          r.src ? (o.src = r.src) : r.srcSet && (o.srcset = r.srcSet);
      }
    } catch (u) {
      it(e, e.return, u);
    }
  }
  function z1(e, i, r) {
    try {
      var o = e.stateNode;
      lE(o, e.type, r, i), (o[de] = i);
    } catch (u) {
      it(e, e.return, u);
    }
  }
  function L1(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    );
  }
  function S0(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || L1(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function C0(e, i, r) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode),
        i
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, i)
            : r.insertBefore(e, i)
          : (r.nodeType === 8
              ? ((i = r.parentNode), i.insertBefore(e, r))
              : ((i = r), i.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || i.onclick !== null || (i.onclick = Sl));
    else if (o !== 4 && o !== 27 && ((e = e.child), e !== null))
      for (C0(e, i, r), e = e.sibling; e !== null; )
        C0(e, i, r), (e = e.sibling);
  }
  function cl(e, i, r) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode), i ? r.insertBefore(e, i) : r.appendChild(e);
    else if (o !== 4 && o !== 27 && ((e = e.child), e !== null))
      for (cl(e, i, r), e = e.sibling; e !== null; )
        cl(e, i, r), (e = e.sibling);
  }
  var Mi = !1,
    pt = !1,
    D0 = !1,
    N1 = typeof WeakSet == "function" ? WeakSet : Set,
    zt = null,
    U1 = !1;
  function k8(e, i) {
    if (((e = e.containerInfo), (I0 = wl), (e = ep(e)), _c(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var o = r.getSelection && r.getSelection();
          if (o && o.rangeCount !== 0) {
            r = o.anchorNode;
            var u = o.anchorOffset,
              p = o.focusNode;
            o = o.focusOffset;
            try {
              r.nodeType, p.nodeType;
            } catch (Te) {
              r = null;
              break e;
            }
            var E = 0,
              B = -1,
              O = -1,
              V = 0,
              ne = 0,
              se = e,
              Q = null;
            t: for (;;) {
              for (
                var te;
                se !== r || (u !== 0 && se.nodeType !== 3) || (B = E + u),
                  se !== p || (o !== 0 && se.nodeType !== 3) || (O = E + o),
                  se.nodeType === 3 && (E += se.nodeValue.length),
                  (te = se.firstChild) !== null;

              )
                (Q = se), (se = te);
              for (;;) {
                if (se === e) break t;
                if (
                  (Q === r && ++V === u && (B = E),
                  Q === p && ++ne === o && (O = E),
                  (te = se.nextSibling) !== null)
                )
                  break;
                (se = Q), (Q = se.parentNode);
              }
              se = te;
            }
            r = B === -1 || O === -1 ? null : { start: B, end: O };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      ef = { focusedElem: e, selectionRange: r }, wl = !1, zt = i;
      zt !== null;

    )
      if (
        ((i = zt), (e = i.child), (i.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = i), (zt = e);
      else
        for (; zt !== null; ) {
          switch (((i = zt), (p = i.alternate), (e = i.flags), i.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && p !== null) {
                (e = void 0),
                  (r = i),
                  (u = p.memoizedProps),
                  (p = p.memoizedState),
                  (o = r.stateNode);
                try {
                  var be = Ha(r.type, u, r.elementType === r.type);
                  (e = o.getSnapshotBeforeUpdate(be, p)),
                    (o.__reactInternalSnapshotBeforeUpdate = e);
                } catch (Te) {
                  it(r, r.return, Te);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = i.stateNode.containerInfo), (r = e.nodeType), r === 9)
                )
                  rf(e);
                else if (r === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      rf(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (((e = i.sibling), e !== null)) {
            (e.return = i.return), (zt = e);
            break;
          }
          zt = i.return;
        }
    return (be = U1), (U1 = !1), be;
  }
  function k1(e, i, r) {
    var o = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        Fi(e, r), o & 4 && Os(5, r);
        break;
      case 1:
        if ((Fi(e, r), o & 4))
          if (((e = r.stateNode), i === null))
            try {
              e.componentDidMount();
            } catch (B) {
              it(r, r.return, B);
            }
          else {
            var u = Ha(r.type, i.memoizedProps);
            i = i.memoizedState;
            try {
              e.componentDidUpdate(u, i, e.__reactInternalSnapshotBeforeUpdate);
            } catch (B) {
              it(r, r.return, B);
            }
          }
        o & 64 && M1(r), o & 512 && ja(r, r.return);
        break;
      case 3:
        if ((Fi(e, r), o & 64 && ((o = r.updateQueue), o !== null))) {
          if (((e = null), r.child !== null))
            switch (r.child.tag) {
              case 27:
              case 5:
                e = r.child.stateNode;
                break;
              case 1:
                e = r.child.stateNode;
            }
          try {
            w1(o, e);
          } catch (B) {
            it(r, r.return, B);
          }
        }
        break;
      case 26:
        Fi(e, r), o & 512 && ja(r, r.return);
        break;
      case 27:
      case 5:
        Fi(e, r), i === null && o & 4 && F1(r), o & 512 && ja(r, r.return);
        break;
      case 12:
        Fi(e, r);
        break;
      case 13:
        Fi(e, r), o & 4 && q1(e, r);
        break;
      case 22:
        if (((u = r.memoizedState !== null || Mi), !u)) {
          i = (i !== null && i.memoizedState !== null) || pt;
          var p = Mi,
            E = pt;
          (Mi = u),
            (pt = i) && !E ? ia(e, r, (r.subtreeFlags & 8772) !== 0) : Fi(e, r),
            (Mi = p),
            (pt = E);
        }
        o & 512 &&
          (r.memoizedProps.mode === "manual"
            ? ja(r, r.return)
            : yn(r, r.return));
        break;
      default:
        Fi(e, r);
    }
  }
  function H1(e) {
    var i = e.alternate;
    i !== null && ((e.alternate = null), H1(i)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((i = e.stateNode), i !== null && ke(i)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Dt = null,
    vn = !1;
  function Oi(e, i, r) {
    for (r = r.child; r !== null; ) V1(e, i, r), (r = r.sibling);
  }
  function V1(e, i, r) {
    if (wt && typeof wt.onCommitFiberUnmount == "function")
      try {
        wt.onCommitFiberUnmount(Xt, r);
      } catch (E) {}
    switch (r.tag) {
      case 26:
        pt || yn(r, i),
          Oi(e, i, r),
          r.memoizedState
            ? r.memoizedState.count--
            : r.stateNode && ((r = r.stateNode), r.parentNode.removeChild(r));
        break;
      case 27:
        pt || yn(r, i);
        var o = Dt,
          u = vn;
        for (
          Dt = r.stateNode, Oi(e, i, r), r = r.stateNode, i = r.attributes;
          i.length;

        )
          r.removeAttributeNode(i[0]);
        ke(r), (Dt = o), (vn = u);
        break;
      case 5:
        pt || yn(r, i);
      case 6:
        u = Dt;
        var p = vn;
        if (((Dt = null), Oi(e, i, r), (Dt = u), (vn = p), Dt !== null))
          if (vn)
            try {
              (e = Dt),
                (o = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(o)
                  : e.removeChild(o);
            } catch (E) {
              it(r, i, E);
            }
          else
            try {
              Dt.removeChild(r.stateNode);
            } catch (E) {
              it(r, i, E);
            }
        break;
      case 18:
        Dt !== null &&
          (vn
            ? ((i = Dt),
              (r = r.stateNode),
              i.nodeType === 8
                ? af(i.parentNode, r)
                : i.nodeType === 1 && af(i, r),
              $s(i))
            : af(Dt, r.stateNode));
        break;
      case 4:
        (o = Dt),
          (u = vn),
          (Dt = r.stateNode.containerInfo),
          (vn = !0),
          Oi(e, i, r),
          (Dt = o),
          (vn = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        pt || na(2, r, i), pt || na(4, r, i), Oi(e, i, r);
        break;
      case 1:
        pt ||
          (yn(r, i),
          (o = r.stateNode),
          typeof o.componentWillUnmount == "function" && O1(r, i, o)),
          Oi(e, i, r);
        break;
      case 21:
        Oi(e, i, r);
        break;
      case 22:
        pt || yn(r, i),
          (pt = (o = pt) || r.memoizedState !== null),
          Oi(e, i, r),
          (pt = o);
        break;
      default:
        Oi(e, i, r);
    }
  }
  function q1(e, i) {
    if (
      i.memoizedState === null &&
      ((e = i.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        $s(e);
      } catch (r) {
        it(i, i.return, r);
      }
  }
  function H8(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var i = e.stateNode;
        return i === null && (i = e.stateNode = new N1()), i;
      case 22:
        return (
          (e = e.stateNode),
          (i = e._retryCache),
          i === null && (i = e._retryCache = new N1()),
          i
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function B0(e, i) {
    var r = H8(e);
    i.forEach(function (o) {
      var u = J8.bind(null, e, o);
      r.has(o) || (r.add(o), o.then(u, u));
    });
  }
  function Fn(e, i) {
    var r = i.deletions;
    if (r !== null)
      for (var o = 0; o < r.length; o++) {
        var u = r[o],
          p = e,
          E = i,
          B = E;
        e: for (; B !== null; ) {
          switch (B.tag) {
            case 27:
            case 5:
              (Dt = B.stateNode), (vn = !1);
              break e;
            case 3:
              (Dt = B.stateNode.containerInfo), (vn = !0);
              break e;
            case 4:
              (Dt = B.stateNode.containerInfo), (vn = !0);
              break e;
          }
          B = B.return;
        }
        if (Dt === null) throw Error(s(160));
        V1(p, E, u),
          (Dt = null),
          (vn = !1),
          (p = u.alternate),
          p !== null && (p.return = null),
          (u.return = null);
      }
    if (i.subtreeFlags & 13878)
      for (i = i.child; i !== null; ) j1(i, e), (i = i.sibling);
  }
  var Jn = null;
  function j1(e, i) {
    var r = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Fn(i, e),
          zn(e),
          o & 4 && (na(3, e, e.return), Os(3, e), na(5, e, e.return));
        break;
      case 1:
        Fn(i, e),
          zn(e),
          o & 512 && (pt || r === null || yn(r, r.return)),
          o & 64 &&
            Mi &&
            ((e = e.updateQueue),
            e !== null &&
              ((o = e.callbacks),
              o !== null &&
                ((r = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = r === null ? o : r.concat(o)))));
        break;
      case 26:
        var u = Jn;
        if (
          (Fn(i, e),
          zn(e),
          o & 512 && (pt || r === null || yn(r, r.return)),
          o & 4)
        ) {
          var p = r !== null ? r.memoizedState : null;
          if (((o = e.memoizedState), r === null))
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  (o = e.type),
                    (r = e.memoizedProps),
                    (u = u.ownerDocument || u);
                  t: switch (o) {
                    case "title":
                      (p = u.getElementsByTagName("title")[0]),
                        (!p ||
                          p[Ge] ||
                          p[he] ||
                          p.namespaceURI === "http://www.w3.org/2000/svg" ||
                          p.hasAttribute("itemprop")) &&
                          ((p = u.createElement(o)),
                          u.head.insertBefore(
                            p,
                            u.querySelector("head > title"),
                          )),
                        qt(p, o, r),
                        (p[he] = e),
                        $e(p),
                        (o = p);
                      break e;
                    case "link":
                      var E = Fx("link", "href", u).get(o + (r.href || ""));
                      if (E) {
                        for (var B = 0; B < E.length; B++)
                          if (
                            ((p = E[B]),
                            p.getAttribute("href") ===
                              (r.href == null ? null : r.href) &&
                              p.getAttribute("rel") ===
                                (r.rel == null ? null : r.rel) &&
                              p.getAttribute("title") ===
                                (r.title == null ? null : r.title) &&
                              p.getAttribute("crossorigin") ===
                                (r.crossOrigin == null ? null : r.crossOrigin))
                          ) {
                            E.splice(B, 1);
                            break t;
                          }
                      }
                      (p = u.createElement(o)),
                        qt(p, o, r),
                        u.head.appendChild(p);
                      break;
                    case "meta":
                      if (
                        (E = Fx("meta", "content", u).get(
                          o + (r.content || ""),
                        ))
                      ) {
                        for (B = 0; B < E.length; B++)
                          if (
                            ((p = E[B]),
                            p.getAttribute("content") ===
                              (r.content == null ? null : "" + r.content) &&
                              p.getAttribute("name") ===
                                (r.name == null ? null : r.name) &&
                              p.getAttribute("property") ===
                                (r.property == null ? null : r.property) &&
                              p.getAttribute("http-equiv") ===
                                (r.httpEquiv == null ? null : r.httpEquiv) &&
                              p.getAttribute("charset") ===
                                (r.charSet == null ? null : r.charSet))
                          ) {
                            E.splice(B, 1);
                            break t;
                          }
                      }
                      (p = u.createElement(o)),
                        qt(p, o, r),
                        u.head.appendChild(p);
                      break;
                    default:
                      throw Error(s(468, o));
                  }
                  (p[he] = e), $e(p), (o = p);
                }
                e.stateNode = o;
              } else zx(u, e.type, e.stateNode);
            else e.stateNode = Ox(u, o, e.memoizedProps);
          else
            p !== o
              ? (p === null
                  ? r.stateNode !== null &&
                    ((r = r.stateNode), r.parentNode.removeChild(r))
                  : p.count--,
                o === null
                  ? zx(u, e.type, e.stateNode)
                  : Ox(u, o, e.memoizedProps))
              : o === null &&
                e.stateNode !== null &&
                z1(e, e.memoizedProps, r.memoizedProps);
        }
        break;
      case 27:
        if (o & 4 && e.alternate === null) {
          (u = e.stateNode), (p = e.memoizedProps);
          try {
            for (var O = u.firstChild; O; ) {
              var V = O.nextSibling,
                ne = O.nodeName;
              O[Ge] ||
                ne === "HEAD" ||
                ne === "BODY" ||
                ne === "SCRIPT" ||
                ne === "STYLE" ||
                (ne === "LINK" && O.rel.toLowerCase() === "stylesheet") ||
                u.removeChild(O),
                (O = V);
            }
            for (var se = e.type, Q = u.attributes; Q.length; )
              u.removeAttributeNode(Q[0]);
            qt(u, se, p), (u[he] = e), (u[de] = p);
          } catch (be) {
            it(e, e.return, be);
          }
        }
      case 5:
        if (
          (Fn(i, e),
          zn(e),
          o & 512 && (pt || r === null || yn(r, r.return)),
          e.flags & 32)
        ) {
          u = e.stateNode;
          try {
            fr(u, "");
          } catch (be) {
            it(e, e.return, be);
          }
        }
        o & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), z1(e, u, r !== null ? r.memoizedProps : u)),
          o & 1024 && (D0 = !0);
        break;
      case 6:
        if ((Fn(i, e), zn(e), o & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (o = e.memoizedProps), (r = e.stateNode);
          try {
            r.nodeValue = o;
          } catch (be) {
            it(e, e.return, be);
          }
        }
        break;
      case 3:
        if (
          ((_l = null),
          (u = Jn),
          (Jn = Dl(i.containerInfo)),
          Fn(i, e),
          (Jn = u),
          zn(e),
          o & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            $s(i.containerInfo);
          } catch (be) {
            it(e, e.return, be);
          }
        D0 && ((D0 = !1), P1(e));
        break;
      case 4:
        (o = Jn),
          (Jn = Dl(e.stateNode.containerInfo)),
          Fn(i, e),
          zn(e),
          (Jn = o);
        break;
      case 12:
        Fn(i, e), zn(e);
        break;
      case 13:
        Fn(i, e),
          zn(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (r !== null && r.memoizedState !== null) &&
            (L0 = ct()),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), B0(e, o)));
        break;
      case 22:
        if (
          (o & 512 && (pt || r === null || yn(r, r.return)),
          (O = e.memoizedState !== null),
          (V = r !== null && r.memoizedState !== null),
          (ne = Mi),
          (se = pt),
          (Mi = ne || O),
          (pt = se || V),
          Fn(i, e),
          (pt = se),
          (Mi = ne),
          zn(e),
          (i = e.stateNode),
          (i._current = e),
          (i._visibility &= -3),
          (i._visibility |= i._pendingVisibility & 2),
          o & 8192 &&
            ((i._visibility = O ? i._visibility & -2 : i._visibility | 1),
            O && ((i = Mi || pt), r === null || V || i || Tr(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
        )
          e: for (r = null, i = e; ; ) {
            if (i.tag === 5 || i.tag === 26 || i.tag === 27) {
              if (r === null) {
                V = r = i;
                try {
                  if (((u = V.stateNode), O))
                    (p = u.style),
                      typeof p.setProperty == "function"
                        ? p.setProperty("display", "none", "important")
                        : (p.display = "none");
                  else {
                    (E = V.stateNode), (B = V.memoizedProps.style);
                    var te =
                      B != null && B.hasOwnProperty("display")
                        ? B.display
                        : null;
                    E.style.display =
                      te == null || typeof te == "boolean"
                        ? ""
                        : ("" + te).trim();
                  }
                } catch (be) {
                  it(V, V.return, be);
                }
              }
            } else if (i.tag === 6) {
              if (r === null) {
                V = i;
                try {
                  V.stateNode.nodeValue = O ? "" : V.memoizedProps;
                } catch (be) {
                  it(V, V.return, be);
                }
              }
            } else if (
              ((i.tag !== 22 && i.tag !== 23) ||
                i.memoizedState === null ||
                i === e) &&
              i.child !== null
            ) {
              (i.child.return = i), (i = i.child);
              continue;
            }
            if (i === e) break e;
            for (; i.sibling === null; ) {
              if (i.return === null || i.return === e) break e;
              r === i && (r = null), (i = i.return);
            }
            r === i && (r = null),
              (i.sibling.return = i.return),
              (i = i.sibling);
          }
        o & 4 &&
          ((o = e.updateQueue),
          o !== null &&
            ((r = o.retryQueue),
            r !== null && ((o.retryQueue = null), B0(e, r))));
        break;
      case 19:
        Fn(i, e),
          zn(e),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), B0(e, o)));
        break;
      case 21:
        break;
      default:
        Fn(i, e), zn(e);
    }
  }
  function zn(e) {
    var i = e.flags;
    if (i & 2) {
      try {
        if (e.tag !== 27) {
          e: {
            for (var r = e.return; r !== null; ) {
              if (L1(r)) {
                var o = r;
                break e;
              }
              r = r.return;
            }
            throw Error(s(160));
          }
          switch (o.tag) {
            case 27:
              var u = o.stateNode,
                p = S0(e);
              cl(e, p, u);
              break;
            case 5:
              var E = o.stateNode;
              o.flags & 32 && (fr(E, ""), (o.flags &= -33));
              var B = S0(e);
              cl(e, B, E);
              break;
            case 3:
            case 4:
              var O = o.stateNode.containerInfo,
                V = S0(e);
              C0(e, V, O);
              break;
            default:
              throw Error(s(161));
          }
        }
      } catch (ne) {
        it(e, e.return, ne);
      }
      e.flags &= -3;
    }
    i & 4096 && (e.flags &= -4097);
  }
  function P1(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var i = e;
        P1(i),
          i.tag === 5 && i.flags & 1024 && i.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function Fi(e, i) {
    if (i.subtreeFlags & 8772)
      for (i = i.child; i !== null; ) k1(e, i.alternate, i), (i = i.sibling);
  }
  function Tr(e) {
    for (e = e.child; e !== null; ) {
      var i = e;
      switch (i.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          na(4, i, i.return), Tr(i);
          break;
        case 1:
          yn(i, i.return);
          var r = i.stateNode;
          typeof r.componentWillUnmount == "function" && O1(i, i.return, r),
            Tr(i);
          break;
        case 26:
        case 27:
        case 5:
          yn(i, i.return), Tr(i);
          break;
        case 22:
          yn(i, i.return), i.memoizedState === null && Tr(i);
          break;
        default:
          Tr(i);
      }
      e = e.sibling;
    }
  }
  function ia(e, i, r) {
    for (r = r && (i.subtreeFlags & 8772) !== 0, i = i.child; i !== null; ) {
      var o = i.alternate,
        u = e,
        p = i,
        E = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          ia(u, p, r), Os(4, p);
          break;
        case 1:
          if (
            (ia(u, p, r),
            (o = p),
            (u = o.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (V) {
              it(o, o.return, V);
            }
          if (((o = p), (u = o.updateQueue), u !== null)) {
            var B = o.stateNode;
            try {
              var O = u.shared.hiddenCallbacks;
              if (O !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < O.length; u++)
                  R1(O[u], B);
            } catch (V) {
              it(o, o.return, V);
            }
          }
          r && E & 64 && M1(p), ja(p, p.return);
          break;
        case 26:
        case 27:
        case 5:
          ia(u, p, r), r && o === null && E & 4 && F1(p), ja(p, p.return);
          break;
        case 12:
          ia(u, p, r);
          break;
        case 13:
          ia(u, p, r), r && E & 4 && q1(u, p);
          break;
        case 22:
          p.memoizedState === null && ia(u, p, r), ja(p, p.return);
          break;
        default:
          ia(u, p, r);
      }
      i = i.sibling;
    }
  }
  function _0(e, i) {
    var r = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (r = e.memoizedState.cachePool.pool),
      (e = null),
      i.memoizedState !== null &&
        i.memoizedState.cachePool !== null &&
        (e = i.memoizedState.cachePool.pool),
      e !== r && (e != null && e.refCount++, r != null && As(r));
  }
  function T0(e, i) {
    (e = null),
      i.alternate !== null && (e = i.alternate.memoizedState.cache),
      (i = i.memoizedState.cache),
      i !== e && (i.refCount++, e != null && As(e));
  }
  function aa(e, i, r, o) {
    if (i.subtreeFlags & 10256)
      for (i = i.child; i !== null; ) Y1(e, i, r, o), (i = i.sibling);
  }
  function Y1(e, i, r, o) {
    var u = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        aa(e, i, r, o), u & 2048 && Os(9, i);
        break;
      case 3:
        aa(e, i, r, o),
          u & 2048 &&
            ((e = null),
            i.alternate !== null && (e = i.alternate.memoizedState.cache),
            (i = i.memoizedState.cache),
            i !== e && (i.refCount++, e != null && As(e)));
        break;
      case 12:
        if (u & 2048) {
          aa(e, i, r, o), (e = i.stateNode);
          try {
            var p = i.memoizedProps,
              E = p.id,
              B = p.onPostCommit;
            typeof B == "function" &&
              B(
                E,
                i.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (O) {
            it(i, i.return, O);
          }
        } else aa(e, i, r, o);
        break;
      case 23:
        break;
      case 22:
        (p = i.stateNode),
          i.memoizedState !== null
            ? p._visibility & 4
              ? aa(e, i, r, o)
              : Fs(e, i)
            : p._visibility & 4
              ? aa(e, i, r, o)
              : ((p._visibility |= 4),
                Rr(e, i, r, o, (i.subtreeFlags & 10256) !== 0)),
          u & 2048 && _0(i.alternate, i);
        break;
      case 24:
        aa(e, i, r, o), u & 2048 && T0(i.alternate, i);
        break;
      default:
        aa(e, i, r, o);
    }
  }
  function Rr(e, i, r, o, u) {
    for (u = u && (i.subtreeFlags & 10256) !== 0, i = i.child; i !== null; ) {
      var p = e,
        E = i,
        B = r,
        O = o,
        V = E.flags;
      switch (E.tag) {
        case 0:
        case 11:
        case 15:
          Rr(p, E, B, O, u), Os(8, E);
          break;
        case 23:
          break;
        case 22:
          var ne = E.stateNode;
          E.memoizedState !== null
            ? ne._visibility & 4
              ? Rr(p, E, B, O, u)
              : Fs(p, E)
            : ((ne._visibility |= 4), Rr(p, E, B, O, u)),
            u && V & 2048 && _0(E.alternate, E);
          break;
        case 24:
          Rr(p, E, B, O, u), u && V & 2048 && T0(E.alternate, E);
          break;
        default:
          Rr(p, E, B, O, u);
      }
      i = i.sibling;
    }
  }
  function Fs(e, i) {
    if (i.subtreeFlags & 10256)
      for (i = i.child; i !== null; ) {
        var r = e,
          o = i,
          u = o.flags;
        switch (o.tag) {
          case 22:
            Fs(r, o), u & 2048 && _0(o.alternate, o);
            break;
          case 24:
            Fs(r, o), u & 2048 && T0(o.alternate, o);
            break;
          default:
            Fs(r, o);
        }
        i = i.sibling;
      }
  }
  var zs = 8192;
  function wr(e) {
    if (e.subtreeFlags & zs)
      for (e = e.child; e !== null; ) X1(e), (e = e.sibling);
  }
  function X1(e) {
    switch (e.tag) {
      case 26:
        wr(e),
          e.flags & zs &&
            e.memoizedState !== null &&
            _E(Jn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        wr(e);
        break;
      case 3:
      case 4:
        var i = Jn;
        (Jn = Dl(e.stateNode.containerInfo)), wr(e), (Jn = i);
        break;
      case 22:
        e.memoizedState === null &&
          ((i = e.alternate),
          i !== null && i.memoizedState !== null
            ? ((i = zs), (zs = 16777216), wr(e), (zs = i))
            : wr(e));
        break;
      default:
        wr(e);
    }
  }
  function G1(e) {
    var i = e.alternate;
    if (i !== null && ((e = i.child), e !== null)) {
      i.child = null;
      do (i = e.sibling), (e.sibling = null), (e = i);
      while (e !== null);
    }
  }
  function Ls(e) {
    var i = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (i !== null)
        for (var r = 0; r < i.length; r++) {
          var o = i[r];
          (zt = o), Z1(o, e);
        }
      G1(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) K1(e), (e = e.sibling);
  }
  function K1(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ls(e), e.flags & 2048 && na(9, e, e.return);
        break;
      case 3:
        Ls(e);
        break;
      case 12:
        Ls(e);
        break;
      case 22:
        var i = e.stateNode;
        e.memoizedState !== null &&
        i._visibility & 4 &&
        (e.return === null || e.return.tag !== 13)
          ? ((i._visibility &= -5), fl(e))
          : Ls(e);
        break;
      default:
        Ls(e);
    }
  }
  function fl(e) {
    var i = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (i !== null)
        for (var r = 0; r < i.length; r++) {
          var o = i[r];
          (zt = o), Z1(o, e);
        }
      G1(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((i = e), i.tag)) {
        case 0:
        case 11:
        case 15:
          na(8, i, i.return), fl(i);
          break;
        case 22:
          (r = i.stateNode),
            r._visibility & 4 && ((r._visibility &= -5), fl(i));
          break;
        default:
          fl(i);
      }
      e = e.sibling;
    }
  }
  function Z1(e, i) {
    for (; zt !== null; ) {
      var r = zt;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          na(8, r, i);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var o = r.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          As(r.memoizedState.cache);
      }
      if (((o = r.child), o !== null)) (o.return = r), (zt = o);
      else
        e: for (r = e; zt !== null; ) {
          o = zt;
          var u = o.sibling,
            p = o.return;
          if ((H1(o), o === r)) {
            zt = null;
            break e;
          }
          if (u !== null) {
            (u.return = p), (zt = u);
            break e;
          }
          zt = p;
        }
    }
  }
  function V8(e, i, r, o) {
    (this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = i),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ln(e, i, r, o) {
    return new V8(e, i, r, o);
  }
  function R0(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function ra(e, i) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = Ln(e.tag, i, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = i),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 31457280),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (i = e.dependencies),
      (r.dependencies =
        i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      (r.refCleanup = e.refCleanup),
      r
    );
  }
  function Q1(e, i) {
    e.flags &= 31457282;
    var r = e.alternate;
    return (
      r === null
        ? ((e.childLanes = 0),
          (e.lanes = i),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = r.childLanes),
          (e.lanes = r.lanes),
          (e.child = r.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = r.memoizedProps),
          (e.memoizedState = r.memoizedState),
          (e.updateQueue = r.updateQueue),
          (e.type = r.type),
          (i = r.dependencies),
          (e.dependencies =
            i === null
              ? null
              : { lanes: i.lanes, firstContext: i.firstContext })),
      e
    );
  }
  function hl(e, i, r, o, u, p) {
    var E = 0;
    if (((o = e), typeof e == "function")) R0(e) && (E = 1);
    else if (typeof e == "string")
      E = DE(e, r, Pt.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case x:
          return Pa(r.children, u, p, i);
        case h:
          (E = 8), (u |= 24);
          break;
        case m:
          return (
            (e = Ln(12, r, i, u | 2)), (e.elementType = m), (e.lanes = p), e
          );
        case S:
          return (e = Ln(13, r, i, u)), (e.elementType = S), (e.lanes = p), e;
        case A:
          return (e = Ln(19, r, i, u)), (e.elementType = A), (e.lanes = p), e;
        case D:
          return $1(r, u, p, i);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case y:
              case g:
                E = 10;
                break e;
              case v:
                E = 9;
                break e;
              case b:
                E = 11;
                break e;
              case R:
                E = 14;
                break e;
              case C:
                (E = 16), (o = null);
                break e;
            }
          (E = 29),
            (r = Error(s(130, e === null ? "null" : typeof e, ""))),
            (o = null);
      }
    return (
      (i = Ln(E, r, i, u)), (i.elementType = e), (i.type = o), (i.lanes = p), i
    );
  }
  function Pa(e, i, r, o) {
    return (e = Ln(7, e, o, i)), (e.lanes = r), e;
  }
  function $1(e, i, r, o) {
    (e = Ln(22, e, o, i)), (e.elementType = D), (e.lanes = r);
    var u = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var p = u._current;
        if (p === null) throw Error(s(456));
        if ((u._pendingVisibility & 2) === 0) {
          var E = Ki(p, 2);
          E !== null && ((u._pendingVisibility |= 2), en(E, p, 2));
        }
      },
      attach: function () {
        var p = u._current;
        if (p === null) throw Error(s(456));
        if ((u._pendingVisibility & 2) !== 0) {
          var E = Ki(p, 2);
          E !== null && ((u._pendingVisibility &= -3), en(E, p, 2));
        }
      },
    };
    return (e.stateNode = u), e;
  }
  function w0(e, i, r) {
    return (e = Ln(6, e, null, i)), (e.lanes = r), e;
  }
  function M0(e, i, r) {
    return (
      (i = Ln(4, e.children !== null ? e.children : [], e.key, i)),
      (i.lanes = r),
      (i.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      i
    );
  }
  function zi(e) {
    e.flags |= 4;
  }
  function W1(e, i) {
    if (i.type !== "stylesheet" || (i.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Lx(i))) {
      if (
        ((i = On.current),
        i !== null &&
          ((Ye & 4194176) === Ye
            ? ui !== null
            : ((Ye & 62914560) !== Ye && (Ye & 536870912) === 0) || i !== ui))
      )
        throw ((gs = Nc), pp);
      e.flags |= 8192;
    }
  }
  function dl(e, i) {
    i !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((i = e.tag !== 22 ? bi() : 536870912), (e.lanes |= i), (Or |= i));
  }
  function Ns(e, i) {
    if (!Ke)
      switch (e.tailMode) {
        case "hidden":
          i = e.tail;
          for (var r = null; i !== null; )
            i.alternate !== null && (r = i), (i = i.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), (r = r.sibling);
          o === null
            ? i || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function ft(e) {
    var i = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      o = 0;
    if (i)
      for (var u = e.child; u !== null; )
        (r |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags & 31457280),
          (o |= u.flags & 31457280),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (r |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags),
          (o |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= o), (e.childLanes = r), i;
  }
  function q8(e, i, r) {
    var o = i.pendingProps;
    switch ((zc(i), i.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ft(i), null;
      case 1:
        return ft(i), null;
      case 3:
        return (
          (r = i.stateNode),
          (o = null),
          e !== null && (o = e.memoizedState.cache),
          i.memoizedState.cache !== o && (i.flags |= 2048),
          wi(Ot),
          bt(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (xs(i)
              ? zi(i)
              : e === null ||
                (e.memoizedState.isDehydrated && (i.flags & 256) === 0) ||
                ((i.flags |= 1024), Wn !== null && (H0(Wn), (Wn = null)))),
          ft(i),
          null
        );
      case 26:
        return (
          (r = i.memoizedState),
          e === null
            ? (zi(i),
              r !== null ? (ft(i), W1(i, r)) : (ft(i), (i.flags &= -16777217)))
            : r
              ? r !== e.memoizedState
                ? (zi(i), ft(i), W1(i, r))
                : (ft(i), (i.flags &= -16777217))
              : (e.memoizedProps !== o && zi(i), ft(i), (i.flags &= -16777217)),
          null
        );
      case 27:
        An(i), (r = nt.current);
        var u = i.type;
        if (e !== null && i.stateNode != null) e.memoizedProps !== o && zi(i);
        else {
          if (!o) {
            if (i.stateNode === null) throw Error(s(166));
            return ft(i), null;
          }
          (e = Pt.current),
            xs(i) ? hp(i) : ((e = _x(u, o, r)), (i.stateNode = e), zi(i));
        }
        return ft(i), null;
      case 5:
        if ((An(i), (r = i.type), e !== null && i.stateNode != null))
          e.memoizedProps !== o && zi(i);
        else {
          if (!o) {
            if (i.stateNode === null) throw Error(s(166));
            return ft(i), null;
          }
          if (((e = Pt.current), xs(i))) hp(i);
          else {
            switch (((u = Cl(nt.current)), e)) {
              case 1:
                e = u.createElementNS("http://www.w3.org/2000/svg", r);
                break;
              case 2:
                e = u.createElementNS("http://www.w3.org/1998/Math/MathML", r);
                break;
              default:
                switch (r) {
                  case "svg":
                    e = u.createElementNS("http://www.w3.org/2000/svg", r);
                    break;
                  case "math":
                    e = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      r,
                    );
                    break;
                  case "script":
                    (e = u.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof o.is == "string"
                        ? u.createElement("select", { is: o.is })
                        : u.createElement("select")),
                      o.multiple
                        ? (e.multiple = !0)
                        : o.size && (e.size = o.size);
                    break;
                  default:
                    e =
                      typeof o.is == "string"
                        ? u.createElement(r, { is: o.is })
                        : u.createElement(r);
                }
            }
            (e[he] = i), (e[de] = o);
            e: for (u = i.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) e.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === i) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === i) break e;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            i.stateNode = e;
            e: switch ((qt(e, r, o), r)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!o.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && zi(i);
          }
        }
        return ft(i), (i.flags &= -16777217), null;
      case 6:
        if (e && i.stateNode != null) e.memoizedProps !== o && zi(i);
        else {
          if (typeof o != "string" && i.stateNode === null) throw Error(s(166));
          if (((e = nt.current), xs(i))) {
            if (
              ((e = i.stateNode),
              (r = i.memoizedProps),
              (o = null),
              (u = It),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  o = u.memoizedProps;
              }
            (e[he] = i),
              (e = !!(
                e.nodeValue === r ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                bx(e.nodeValue, r)
              )),
              e || Fa(i);
          } else (e = Cl(e).createTextNode(o)), (e[he] = i), (i.stateNode = e);
        }
        return ft(i), null;
      case 13:
        if (
          ((o = i.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = xs(i)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (
                ((u = i.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(s(317));
              u[he] = i;
            } else
              ms(),
                (i.flags & 128) === 0 && (i.memoizedState = null),
                (i.flags |= 4);
            ft(i), (u = !1);
          } else Wn !== null && (H0(Wn), (Wn = null)), (u = !0);
          if (!u) return i.flags & 256 ? (Bi(i), i) : (Bi(i), null);
        }
        if ((Bi(i), (i.flags & 128) !== 0)) return (i.lanes = r), i;
        if (
          ((r = o !== null), (e = e !== null && e.memoizedState !== null), r)
        ) {
          (o = i.child),
            (u = null),
            o.alternate !== null &&
              o.alternate.memoizedState !== null &&
              o.alternate.memoizedState.cachePool !== null &&
              (u = o.alternate.memoizedState.cachePool.pool);
          var p = null;
          o.memoizedState !== null &&
            o.memoizedState.cachePool !== null &&
            (p = o.memoizedState.cachePool.pool),
            p !== u && (o.flags |= 2048);
        }
        return (
          r !== e && r && (i.child.flags |= 8192),
          dl(i, i.updateQueue),
          ft(i),
          null
        );
      case 4:
        return bt(), e === null && $0(i.stateNode.containerInfo), ft(i), null;
      case 10:
        return wi(i.type), ft(i), null;
      case 19:
        if ((Je(Mt), (u = i.memoizedState), u === null)) return ft(i), null;
        if (((o = (i.flags & 128) !== 0), (p = u.rendering), p === null))
          if (o) Ns(u, !1);
          else {
            if (xt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = i.child; e !== null; ) {
                if (((p = $o(e)), p !== null)) {
                  for (
                    i.flags |= 128,
                      Ns(u, !1),
                      e = p.updateQueue,
                      i.updateQueue = e,
                      dl(i, e),
                      i.subtreeFlags = 0,
                      e = r,
                      r = i.child;
                    r !== null;

                  )
                    Q1(r, e), (r = r.sibling);
                  return Xe(Mt, (Mt.current & 1) | 2), i.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              ct() > pl &&
              ((i.flags |= 128), (o = !0), Ns(u, !1), (i.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = $o(p)), e !== null)) {
              if (
                ((i.flags |= 128),
                (o = !0),
                (e = e.updateQueue),
                (i.updateQueue = e),
                dl(i, e),
                Ns(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !p.alternate &&
                  !Ke)
              )
                return ft(i), null;
            } else
              2 * ct() - u.renderingStartTime > pl &&
                r !== 536870912 &&
                ((i.flags |= 128), (o = !0), Ns(u, !1), (i.lanes = 4194304));
          u.isBackwards
            ? ((p.sibling = i.child), (i.child = p))
            : ((e = u.last),
              e !== null ? (e.sibling = p) : (i.child = p),
              (u.last = p));
        }
        return u.tail !== null
          ? ((i = u.tail),
            (u.rendering = i),
            (u.tail = i.sibling),
            (u.renderingStartTime = ct()),
            (i.sibling = null),
            (e = Mt.current),
            Xe(Mt, o ? (e & 1) | 2 : e & 1),
            i)
          : (ft(i), null);
      case 22:
      case 23:
        return (
          Bi(i),
          kc(),
          (o = i.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== o && (i.flags |= 8192)
            : o && (i.flags |= 8192),
          o
            ? (r & 536870912) !== 0 &&
              (i.flags & 128) === 0 &&
              (ft(i), i.subtreeFlags & 6 && (i.flags |= 8192))
            : ft(i),
          (r = i.updateQueue),
          r !== null && dl(i, r.retryQueue),
          (r = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (r = e.memoizedState.cachePool.pool),
          (o = null),
          i.memoizedState !== null &&
            i.memoizedState.cachePool !== null &&
            (o = i.memoizedState.cachePool.pool),
          o !== r && (i.flags |= 2048),
          e !== null && Je(La),
          null
        );
      case 24:
        return (
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          i.memoizedState.cache !== r && (i.flags |= 2048),
          wi(Ot),
          ft(i),
          null
        );
      case 25:
        return null;
    }
    throw Error(s(156, i.tag));
  }
  function j8(e, i) {
    switch ((zc(i), i.tag)) {
      case 1:
        return (
          (e = i.flags), e & 65536 ? ((i.flags = (e & -65537) | 128), i) : null
        );
      case 3:
        return (
          wi(Ot),
          bt(),
          (e = i.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((i.flags = (e & -65537) | 128), i)
            : null
        );
      case 26:
      case 27:
      case 5:
        return An(i), null;
      case 13:
        if (
          (Bi(i), (e = i.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (i.alternate === null) throw Error(s(340));
          ms();
        }
        return (
          (e = i.flags), e & 65536 ? ((i.flags = (e & -65537) | 128), i) : null
        );
      case 19:
        return Je(Mt), null;
      case 4:
        return bt(), null;
      case 10:
        return wi(i.type), null;
      case 22:
      case 23:
        return (
          Bi(i),
          kc(),
          e !== null && Je(La),
          (e = i.flags),
          e & 65536 ? ((i.flags = (e & -65537) | 128), i) : null
        );
      case 24:
        return wi(Ot), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function J1(e, i) {
    switch ((zc(i), i.tag)) {
      case 3:
        wi(Ot), bt();
        break;
      case 26:
      case 27:
      case 5:
        An(i);
        break;
      case 4:
        bt();
        break;
      case 13:
        Bi(i);
        break;
      case 19:
        Je(Mt);
        break;
      case 10:
        wi(i.type);
        break;
      case 22:
      case 23:
        Bi(i), kc(), e !== null && Je(La);
        break;
      case 24:
        wi(Ot);
    }
  }
  var P8 = {
      getCacheForType: function (e) {
        var i = Kt(Ot),
          r = i.data.get(e);
        return r === void 0 && ((r = e()), i.data.set(e, r)), r;
      },
    },
    Y8 = typeof WeakMap == "function" ? WeakMap : Map,
    ht = 0,
    at = null,
    Le = null,
    Ye = 0,
    rt = 0,
    gn = null,
    Li = !1,
    Mr = !1,
    O0 = !1,
    Ni = 0,
    xt = 0,
    sa = 0,
    Ya = 0,
    F0 = 0,
    Nn = 0,
    Or = 0,
    Us = null,
    fi = null,
    z0 = !1,
    L0 = 0,
    pl = 1 / 0,
    xl = null,
    oa = null,
    ml = !1,
    Xa = null,
    ks = 0,
    N0 = 0,
    U0 = null,
    Hs = 0,
    k0 = null;
  function En() {
    if ((ht & 2) !== 0 && Ye !== 0) return Ye & -Ye;
    if (q.T !== null) {
      var e = Sr;
      return e !== 0 ? e : G0();
    }
    return fe();
  }
  function I1() {
    Nn === 0 && (Nn = (Ye & 536870912) === 0 || Ke ? Ei() : 536870912);
    var e = On.current;
    return e !== null && (e.flags |= 32), Nn;
  }
  function en(e, i, r) {
    ((e === at && rt === 2) || e.cancelPendingCommit !== null) &&
      (Fr(e, 0), Ui(e, Ye, Nn, !1)),
      Ai(e, r),
      ((ht & 2) === 0 || e !== at) &&
        (e === at &&
          ((ht & 2) === 0 && (Ya |= r), xt === 4 && Ui(e, Ye, Nn, !1)),
        hi(e));
  }
  function ex(e, i, r) {
    if ((ht & 6) !== 0) throw Error(s(327));
    var o = (!r && (i & 60) === 0 && (i & e.expiredLanes) === 0) || gi(e, i),
      u = o ? K8(e, i) : j0(e, i, !0),
      p = o;
    do {
      if (u === 0) {
        Mr && !o && Ui(e, i, 0, !1);
        break;
      } else if (u === 6) Ui(e, i, 0, !Li);
      else {
        if (((r = e.current.alternate), p && !X8(r))) {
          (u = j0(e, i, !1)), (p = !1);
          continue;
        }
        if (u === 2) {
          if (((p = i), e.errorRecoveryDisabledLanes & p)) var E = 0;
          else
            (E = e.pendingLanes & -536870913),
              (E = E !== 0 ? E : E & 536870912 ? 536870912 : 0);
          if (E !== 0) {
            i = E;
            e: {
              var B = e;
              u = Us;
              var O = B.current.memoizedState.isDehydrated;
              if ((O && (Fr(B, E).flags |= 256), (E = j0(B, E, !1)), E !== 2)) {
                if (O0 && !O) {
                  (B.errorRecoveryDisabledLanes |= p), (Ya |= p), (u = 4);
                  break e;
                }
                (p = fi), (fi = u), p !== null && H0(p);
              }
              u = E;
            }
            if (((p = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Fr(e, 0), Ui(e, i, 0, !0);
          break;
        }
        e: {
          switch (((o = e), u)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((i & 4194176) === i) {
                Ui(o, i, Nn, !Li);
                break e;
              }
              break;
            case 2:
              fi = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if (
            ((o.finishedWork = r),
            (o.finishedLanes = i),
            (i & 62914560) === i && ((p = L0 + 300 - ct()), 10 < p))
          ) {
            if ((Ui(o, i, Nn, !Li), vi(o, 0) !== 0)) break e;
            o.timeoutHandle = Cx(
              tx.bind(null, o, r, fi, xl, z0, i, Nn, Ya, Or, Li, 2, -0, 0),
              p,
            );
            break e;
          }
          tx(o, r, fi, xl, z0, i, Nn, Ya, Or, Li, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    hi(e);
  }
  function H0(e) {
    fi === null ? (fi = e) : fi.push.apply(fi, e);
  }
  function tx(e, i, r, o, u, p, E, B, O, V, ne, se, Q) {
    var te = i.subtreeFlags;
    if (
      (te & 8192 || (te & 16785408) === 16785408) &&
      ((Xs = { stylesheets: null, count: 0, unsuspend: BE }),
      X1(i),
      (i = TE()),
      i !== null)
    ) {
      (e.cancelPendingCommit = i(lx.bind(null, e, r, o, u, E, B, O, 1, se, Q))),
        Ui(e, p, E, !V);
      return;
    }
    lx(e, r, o, u, E, B, O, ne, se, Q);
  }
  function X8(e) {
    for (var i = e; ; ) {
      var r = i.tag;
      if (
        (r === 0 || r === 11 || r === 15) &&
        i.flags & 16384 &&
        ((r = i.updateQueue), r !== null && ((r = r.stores), r !== null))
      )
        for (var o = 0; o < r.length; o++) {
          var u = r[o],
            p = u.getSnapshot;
          u = u.value;
          try {
            if (!mn(p(), u)) return !1;
          } catch (E) {
            return !1;
          }
        }
      if (((r = i.child), i.subtreeFlags & 16384 && r !== null))
        (r.return = i), (i = r);
      else {
        if (i === e) break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e) return !0;
          i = i.return;
        }
        (i.sibling.return = i.return), (i = i.sibling);
      }
    }
    return !0;
  }
  function Ui(e, i, r, o) {
    (i &= ~F0),
      (i &= ~Ya),
      (e.suspendedLanes |= i),
      (e.pingedLanes &= ~i),
      o && (e.warmLanes |= i),
      (o = e.expirationTimes);
    for (var u = i; 0 < u; ) {
      var p = 31 - kt(u),
        E = 1 << p;
      (o[p] = -1), (u &= ~E);
    }
    r !== 0 && H(e, r, i);
  }
  function yl() {
    return (ht & 6) === 0 ? (Vs(0), !1) : !0;
  }
  function V0() {
    if (Le !== null) {
      if (rt === 0) var e = Le.return;
      else (e = Le), (Ri = Va = null), Gc(e), (br = null), (Es = 0), (e = Le);
      for (; e !== null; ) J1(e.alternate, e), (e = e.return);
      Le = null;
    }
  }
  function Fr(e, i) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    r !== -1 && ((e.timeoutHandle = -1), cE(r)),
      (r = e.cancelPendingCommit),
      r !== null && ((e.cancelPendingCommit = null), r()),
      V0(),
      (at = e),
      (Le = r = ra(e.current, null)),
      (Ye = i),
      (rt = 0),
      (gn = null),
      (Li = !1),
      (Mr = gi(e, i)),
      (O0 = !1),
      (Or = Nn = F0 = Ya = sa = xt = 0),
      (fi = Us = null),
      (z0 = !1),
      (i & 8) !== 0 && (i |= i & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= i; 0 < o; ) {
        var u = 31 - kt(o),
          p = 1 << u;
        (i |= e[u]), (o &= ~p);
      }
    return (Ni = i), qo(), r;
  }
  function nx(e, i) {
    (Oe = null),
      (q.H = ci),
      i === vs
        ? ((i = yp()), (rt = 3))
        : i === pp
          ? ((i = yp()), (rt = 4))
          : (rt =
              i === x1
                ? 8
                : i !== null &&
                    typeof i == "object" &&
                    typeof i.then == "function"
                  ? 6
                  : 1),
      (gn = i),
      Le === null && ((xt = 1), ol(e, Rn(i, e.current)));
  }
  function ix() {
    var e = q.H;
    return (q.H = ci), e === null ? ci : e;
  }
  function ax() {
    var e = q.A;
    return (q.A = P8), e;
  }
  function q0() {
    (xt = 4),
      Li || ((Ye & 4194176) !== Ye && On.current !== null) || (Mr = !0),
      ((sa & 134217727) === 0 && (Ya & 134217727) === 0) ||
        at === null ||
        Ui(at, Ye, Nn, !1);
  }
  function j0(e, i, r) {
    var o = ht;
    ht |= 2;
    var u = ix(),
      p = ax();
    (at !== e || Ye !== i) && ((xl = null), Fr(e, i)), (i = !1);
    var E = xt;
    e: do
      try {
        if (rt !== 0 && Le !== null) {
          var B = Le,
            O = gn;
          switch (rt) {
            case 8:
              V0(), (E = 6);
              break e;
            case 3:
            case 2:
            case 6:
              On.current === null && (i = !0);
              var V = rt;
              if (((rt = 0), (gn = null), zr(e, B, O, V), r && Mr)) {
                E = 0;
                break e;
              }
              break;
            default:
              (V = rt), (rt = 0), (gn = null), zr(e, B, O, V);
          }
        }
        G8(), (E = xt);
        break;
      } catch (ne) {
        nx(e, ne);
      }
    while (!0);
    return (
      i && e.shellSuspendCounter++,
      (Ri = Va = null),
      (ht = o),
      (q.H = u),
      (q.A = p),
      Le === null && ((at = null), (Ye = 0), qo()),
      E
    );
  }
  function G8() {
    for (; Le !== null; ) rx(Le);
  }
  function K8(e, i) {
    var r = ht;
    ht |= 2;
    var o = ix(),
      u = ax();
    at !== e || Ye !== i
      ? ((xl = null), (pl = ct() + 500), Fr(e, i))
      : (Mr = gi(e, i));
    e: do
      try {
        if (rt !== 0 && Le !== null) {
          i = Le;
          var p = gn;
          t: switch (rt) {
            case 1:
              (rt = 0), (gn = null), zr(e, i, p, 1);
              break;
            case 2:
              if (xp(p)) {
                (rt = 0), (gn = null), sx(i);
                break;
              }
              (i = function () {
                rt === 2 && at === e && (rt = 7), hi(e);
              }),
                p.then(i, i);
              break e;
            case 3:
              rt = 7;
              break e;
            case 4:
              rt = 5;
              break e;
            case 7:
              xp(p)
                ? ((rt = 0), (gn = null), sx(i))
                : ((rt = 0), (gn = null), zr(e, i, p, 7));
              break;
            case 5:
              var E = null;
              switch (Le.tag) {
                case 26:
                  E = Le.memoizedState;
                case 5:
                case 27:
                  var B = Le;
                  if (!E || Lx(E)) {
                    (rt = 0), (gn = null);
                    var O = B.sibling;
                    if (O !== null) Le = O;
                    else {
                      var V = B.return;
                      V !== null ? ((Le = V), vl(V)) : (Le = null);
                    }
                    break t;
                  }
              }
              (rt = 0), (gn = null), zr(e, i, p, 5);
              break;
            case 6:
              (rt = 0), (gn = null), zr(e, i, p, 6);
              break;
            case 8:
              V0(), (xt = 6);
              break e;
            default:
              throw Error(s(462));
          }
        }
        Z8();
        break;
      } catch (ne) {
        nx(e, ne);
      }
    while (!0);
    return (
      (Ri = Va = null),
      (q.H = o),
      (q.A = u),
      (ht = r),
      Le !== null ? 0 : ((at = null), (Ye = 0), qo(), xt)
    );
  }
  function Z8() {
    for (; Le !== null && !Yt(); ) rx(Le);
  }
  function rx(e) {
    var i = _1(e.alternate, e, Ni);
    (e.memoizedProps = e.pendingProps), i === null ? vl(e) : (Le = i);
  }
  function sx(e) {
    var i = e,
      r = i.alternate;
    switch (i.tag) {
      case 15:
      case 0:
        i = b1(r, i, i.pendingProps, i.type, void 0, Ye);
        break;
      case 11:
        i = b1(r, i, i.pendingProps, i.type.render, i.ref, Ye);
        break;
      case 5:
        Gc(i);
      default:
        J1(r, i), (i = Le = Q1(i, Ni)), (i = _1(r, i, Ni));
    }
    (e.memoizedProps = e.pendingProps), i === null ? vl(e) : (Le = i);
  }
  function zr(e, i, r, o) {
    (Ri = Va = null), Gc(i), (br = null), (Es = 0);
    var u = i.return;
    try {
      if (N8(e, u, i, r, Ye)) {
        (xt = 1), ol(e, Rn(r, e.current)), (Le = null);
        return;
      }
    } catch (p) {
      if (u !== null) throw ((Le = u), p);
      (xt = 1), ol(e, Rn(r, e.current)), (Le = null);
      return;
    }
    i.flags & 32768
      ? (Ke || o === 1
          ? (e = !0)
          : Mr || (Ye & 536870912) !== 0
            ? (e = !1)
            : ((Li = e = !0),
              (o === 2 || o === 3 || o === 6) &&
                ((o = On.current),
                o !== null && o.tag === 13 && (o.flags |= 16384))),
        ox(i, e))
      : vl(i);
  }
  function vl(e) {
    var i = e;
    do {
      if ((i.flags & 32768) !== 0) {
        ox(i, Li);
        return;
      }
      e = i.return;
      var r = q8(i.alternate, i, Ni);
      if (r !== null) {
        Le = r;
        return;
      }
      if (((i = i.sibling), i !== null)) {
        Le = i;
        return;
      }
      Le = i = e;
    } while (i !== null);
    xt === 0 && (xt = 5);
  }
  function ox(e, i) {
    do {
      var r = j8(e.alternate, e);
      if (r !== null) {
        (r.flags &= 32767), (Le = r);
        return;
      }
      if (
        ((r = e.return),
        r !== null &&
          ((r.flags |= 32768), (r.subtreeFlags = 0), (r.deletions = null)),
        !i && ((e = e.sibling), e !== null))
      ) {
        Le = e;
        return;
      }
      Le = e = r;
    } while (e !== null);
    (xt = 6), (Le = null);
  }
  function lx(e, i, r, o, u, p, E, B, O, V) {
    var ne = q.T,
      se = P.p;
    try {
      (P.p = 2), (q.T = null), Q8(e, i, r, o, se, u, p, E, B, O, V);
    } finally {
      (q.T = ne), (P.p = se);
    }
  }
  function Q8(e, i, r, o, u, p, E, B) {
    do Lr();
    while (Xa !== null);
    if ((ht & 6) !== 0) throw Error(s(327));
    var O = e.finishedWork;
    if (((o = e.finishedLanes), O === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), O === e.current))
      throw Error(s(177));
    (e.callbackNode = null),
      (e.callbackPriority = 0),
      (e.cancelPendingCommit = null);
    var V = O.lanes | O.childLanes;
    if (
      ((V |= Mc),
      U(e, o, V, p, E, B),
      e === at && ((Le = at = null), (Ye = 0)),
      ((O.subtreeFlags & 10256) === 0 && (O.flags & 10256) === 0) ||
        ml ||
        ((ml = !0),
        (N0 = V),
        (U0 = r),
        I8(Wt, function () {
          return Lr(), null;
        })),
      (r = (O.flags & 15990) !== 0),
      (O.subtreeFlags & 15990) !== 0 || r
        ? ((r = q.T),
          (q.T = null),
          (p = P.p),
          (P.p = 2),
          (E = ht),
          (ht |= 4),
          k8(e, O),
          j1(O, e),
          g8(ef, e.containerInfo),
          (wl = !!I0),
          (ef = I0 = null),
          (e.current = O),
          k1(e, O.alternate, O),
          Sn(),
          (ht = E),
          (P.p = p),
          (q.T = r))
        : (e.current = O),
      ml ? ((ml = !1), (Xa = e), (ks = o)) : ux(e, V),
      (V = e.pendingLanes),
      V === 0 && (oa = null),
      Sa(O.stateNode),
      hi(e),
      i !== null)
    )
      for (u = e.onRecoverableError, O = 0; O < i.length; O++)
        (V = i[O]), u(V.value, { componentStack: V.stack });
    return (
      (ks & 3) !== 0 && Lr(),
      (V = e.pendingLanes),
      (o & 4194218) !== 0 && (V & 42) !== 0
        ? e === k0
          ? Hs++
          : ((Hs = 0), (k0 = e))
        : (Hs = 0),
      Vs(0),
      null
    );
  }
  function ux(e, i) {
    (e.pooledCacheLanes &= i) === 0 &&
      ((i = e.pooledCache), i != null && ((e.pooledCache = null), As(i)));
  }
  function Lr() {
    if (Xa !== null) {
      var e = Xa,
        i = N0;
      N0 = 0;
      var r = re(ks),
        o = q.T,
        u = P.p;
      try {
        if (((P.p = 32 > r ? 32 : r), (q.T = null), Xa === null)) var p = !1;
        else {
          (r = U0), (U0 = null);
          var E = Xa,
            B = ks;
          if (((Xa = null), (ks = 0), (ht & 6) !== 0)) throw Error(s(331));
          var O = ht;
          if (
            ((ht |= 4),
            K1(E.current),
            Y1(E, E.current, B, r),
            (ht = O),
            Vs(0, !1),
            wt && typeof wt.onPostCommitFiberRoot == "function")
          )
            try {
              wt.onPostCommitFiberRoot(Xt, E);
            } catch (V) {}
          p = !0;
        }
        return p;
      } finally {
        (P.p = u), (q.T = o), ux(e, i);
      }
    }
    return !1;
  }
  function cx(e, i, r) {
    (i = Rn(r, i)),
      (i = s0(e.stateNode, i, 2)),
      (e = ta(e, i, 2)),
      e !== null && (Ai(e, 2), hi(e));
  }
  function it(e, i, r) {
    if (e.tag === 3) cx(e, e, r);
    else
      for (; i !== null; ) {
        if (i.tag === 3) {
          cx(i, e, r);
          break;
        } else if (i.tag === 1) {
          var o = i.stateNode;
          if (
            typeof i.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (oa === null || !oa.has(o)))
          ) {
            (e = Rn(r, e)),
              (r = d1(2)),
              (o = ta(i, r, 2)),
              o !== null && (p1(r, o, i, e), Ai(o, 2), hi(o));
            break;
          }
        }
        i = i.return;
      }
  }
  function P0(e, i, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Y8();
      var u = new Set();
      o.set(i, u);
    } else (u = o.get(i)), u === void 0 && ((u = new Set()), o.set(i, u));
    u.has(r) ||
      ((O0 = !0), u.add(r), (e = $8.bind(null, e, i, r)), i.then(e, e));
  }
  function $8(e, i, r) {
    var o = e.pingCache;
    o !== null && o.delete(i),
      (e.pingedLanes |= e.suspendedLanes & r),
      (e.warmLanes &= ~r),
      at === e &&
        (Ye & r) === r &&
        (xt === 4 || (xt === 3 && (Ye & 62914560) === Ye && 300 > ct() - L0)
          ? (ht & 2) === 0 && Fr(e, 0)
          : (F0 |= r),
        Or === Ye && (Or = 0)),
      hi(e);
  }
  function fx(e, i) {
    i === 0 && (i = bi()), (e = Ki(e, i)), e !== null && (Ai(e, i), hi(e));
  }
  function W8(e) {
    var i = e.memoizedState,
      r = 0;
    i !== null && (r = i.retryLane), fx(e, r);
  }
  function J8(e, i) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          u = e.memoizedState;
        u !== null && (r = u.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    o !== null && o.delete(i), fx(e, r);
  }
  function I8(e, i) {
    return Yn(e, i);
  }
  var gl = null,
    Nr = null,
    Y0 = !1,
    El = !1,
    X0 = !1,
    Ga = 0;
  function hi(e) {
    e !== Nr &&
      e.next === null &&
      (Nr === null ? (gl = Nr = e) : (Nr = Nr.next = e)),
      (El = !0),
      Y0 || ((Y0 = !0), tE(eE));
  }
  function Vs(e, i) {
    if (!X0 && El) {
      X0 = !0;
      do
        for (var r = !1, o = gl; o !== null; ) {
          if (e !== 0) {
            var u = o.pendingLanes;
            if (u === 0) var p = 0;
            else {
              var E = o.suspendedLanes,
                B = o.pingedLanes;
              (p = (1 << (31 - kt(42 | e) + 1)) - 1),
                (p &= u & ~(E & ~B)),
                (p = p & 201326677 ? (p & 201326677) | 1 : p ? p | 2 : 0);
            }
            p !== 0 && ((r = !0), px(o, p));
          } else
            (p = Ye),
              (p = vi(o, o === at ? p : 0)),
              (p & 3) === 0 || gi(o, p) || ((r = !0), px(o, p));
          o = o.next;
        }
      while (r);
      X0 = !1;
    }
  }
  function eE() {
    El = Y0 = !1;
    var e = 0;
    Ga !== 0 && (uE() && (e = Ga), (Ga = 0));
    for (var i = ct(), r = null, o = gl; o !== null; ) {
      var u = o.next,
        p = hx(o, i);
      p === 0
        ? ((o.next = null),
          r === null ? (gl = u) : (r.next = u),
          u === null && (Nr = r))
        : ((r = o), (e !== 0 || (p & 3) !== 0) && (El = !0)),
        (o = u);
    }
    Vs(e);
  }
  function hx(e, i) {
    for (
      var r = e.suspendedLanes,
        o = e.pingedLanes,
        u = e.expirationTimes,
        p = e.pendingLanes & -62914561;
      0 < p;

    ) {
      var E = 31 - kt(p),
        B = 1 << E,
        O = u[E];
      O === -1
        ? ((B & r) === 0 || (B & o) !== 0) && (u[E] = Ba(B, i))
        : O <= i && (e.expiredLanes |= B),
        (p &= ~B);
    }
    if (
      ((i = at),
      (r = Ye),
      (r = vi(e, e === i ? r : 0)),
      (o = e.callbackNode),
      r === 0 || (e === i && rt === 2) || e.cancelPendingCommit !== null)
    )
      return (
        o !== null && o !== null && Ut(o),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((r & 3) === 0 || gi(e, r)) {
      if (((i = r & -r), i === e.callbackPriority)) return i;
      switch ((o !== null && Ut(o), re(r))) {
        case 2:
        case 8:
          r = Dn;
          break;
        case 32:
          r = Wt;
          break;
        case 268435456:
          r = ji;
          break;
        default:
          r = Wt;
      }
      return (
        (o = dx.bind(null, e)),
        (r = Yn(r, o)),
        (e.callbackPriority = i),
        (e.callbackNode = r),
        i
      );
    }
    return (
      o !== null && o !== null && Ut(o),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function dx(e, i) {
    var r = e.callbackNode;
    if (Lr() && e.callbackNode !== r) return null;
    var o = Ye;
    return (
      (o = vi(e, e === at ? o : 0)),
      o === 0
        ? null
        : (ex(e, o, i),
          hx(e, ct()),
          e.callbackNode != null && e.callbackNode === r
            ? dx.bind(null, e)
            : null)
    );
  }
  function px(e, i) {
    if (Lr()) return null;
    ex(e, i, !0);
  }
  function tE(e) {
    fE(function () {
      (ht & 6) !== 0 ? Yn(Cn, e) : e();
    });
  }
  function G0() {
    return Ga === 0 && (Ga = Ei()), Ga;
  }
  function xx(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : zo("" + e);
  }
  function mx(e, i) {
    var r = i.ownerDocument.createElement("input");
    return (
      (r.name = i.name),
      (r.value = i.value),
      e.id && r.setAttribute("form", e.id),
      i.parentNode.insertBefore(r, i),
      (e = new FormData(e)),
      r.parentNode.removeChild(r),
      e
    );
  }
  function nE(e, i, r, o, u) {
    if (i === "submit" && r && r.stateNode === u) {
      var p = xx((u[de] || null).action),
        E = o.submitter;
      E &&
        ((i = (i = E[de] || null)
          ? xx(i.formAction)
          : E.getAttribute("formAction")),
        i !== null && ((p = i), (E = null)));
      var B = new ko("action", "action", null, o, u);
      e.push({
        event: B,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (Ga !== 0) {
                  var O = E ? mx(u, E) : new FormData(u);
                  t0(
                    r,
                    { pending: !0, data: O, method: u.method, action: p },
                    null,
                    O,
                  );
                }
              } else
                typeof p == "function" &&
                  (B.preventDefault(),
                  (O = E ? mx(u, E) : new FormData(u)),
                  t0(
                    r,
                    { pending: !0, data: O, method: u.method, action: p },
                    p,
                    O,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var K0 = 0; K0 < lp.length; K0++) {
    var Z0 = lp[K0],
      iE = Z0.toLowerCase(),
      aE = Z0[0].toUpperCase() + Z0.slice(1);
    $n(iE, "on" + aE);
  }
  $n(ip, "onAnimationEnd"),
    $n(ap, "onAnimationIteration"),
    $n(rp, "onAnimationStart"),
    $n("dblclick", "onDoubleClick"),
    $n("focusin", "onFocus"),
    $n("focusout", "onBlur"),
    $n(b8, "onTransitionRun"),
    $n(A8, "onTransitionStart"),
    $n(S8, "onTransitionCancel"),
    $n(sp, "onTransitionEnd"),
    Zn("onMouseEnter", ["mouseout", "mouseover"]),
    Zn("onMouseLeave", ["mouseout", "mouseover"]),
    Zn("onPointerEnter", ["pointerout", "pointerover"]),
    Zn("onPointerLeave", ["pointerout", "pointerover"]),
    Jt(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Jt(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Jt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Jt(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Jt(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Jt(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var qs =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    rE = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(qs),
    );
  function yx(e, i) {
    i = (i & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var o = e[r],
        u = o.event;
      o = o.listeners;
      e: {
        var p = void 0;
        if (i)
          for (var E = o.length - 1; 0 <= E; E--) {
            var B = o[E],
              O = B.instance,
              V = B.currentTarget;
            if (((B = B.listener), O !== p && u.isPropagationStopped()))
              break e;
            (p = B), (u.currentTarget = V);
            try {
              p(u);
            } catch (ne) {
              sl(ne);
            }
            (u.currentTarget = null), (p = O);
          }
        else
          for (E = 0; E < o.length; E++) {
            if (
              ((B = o[E]),
              (O = B.instance),
              (V = B.currentTarget),
              (B = B.listener),
              O !== p && u.isPropagationStopped())
            )
              break e;
            (p = B), (u.currentTarget = V);
            try {
              p(u);
            } catch (ne) {
              sl(ne);
            }
            (u.currentTarget = null), (p = O);
          }
      }
    }
  }
  function He(e, i) {
    var r = i[Ee];
    r === void 0 && (r = i[Ee] = new Set());
    var o = e + "__bubble";
    r.has(o) || (vx(i, e, 2, !1), r.add(o));
  }
  function Q0(e, i, r) {
    var o = 0;
    i && (o |= 4), vx(r, e, o, i);
  }
  var bl = "_reactListening" + Math.random().toString(36).slice(2);
  function $0(e) {
    if (!e[bl]) {
      (e[bl] = !0),
        ur.forEach(function (r) {
          r !== "selectionchange" && (rE.has(r) || Q0(r, !1, e), Q0(r, !0, e));
        });
      var i = e.nodeType === 9 ? e : e.ownerDocument;
      i === null || i[bl] || ((i[bl] = !0), Q0("selectionchange", !1, i));
    }
  }
  function vx(e, i, r, o) {
    switch (qx(i)) {
      case 2:
        var u = ME;
        break;
      case 8:
        u = OE;
        break;
      default:
        u = cf;
    }
    (r = u.bind(null, i, r, e)),
      (u = void 0),
      !vc ||
        (i !== "touchstart" && i !== "touchmove" && i !== "wheel") ||
        (u = !0),
      o
        ? u !== void 0
          ? e.addEventListener(i, r, { capture: !0, passive: u })
          : e.addEventListener(i, r, !0)
        : u !== void 0
          ? e.addEventListener(i, r, { passive: u })
          : e.addEventListener(i, r, !1);
  }
  function W0(e, i, r, o, u) {
    var p = o;
    if ((i & 1) === 0 && (i & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var E = o.tag;
        if (E === 3 || E === 4) {
          var B = o.stateNode.containerInfo;
          if (B === u || (B.nodeType === 8 && B.parentNode === u)) break;
          if (E === 4)
            for (E = o.return; E !== null; ) {
              var O = E.tag;
              if (
                (O === 3 || O === 4) &&
                ((O = E.stateNode.containerInfo),
                O === u || (O.nodeType === 8 && O.parentNode === u))
              )
                return;
              E = E.return;
            }
          for (; B !== null; ) {
            if (((E = Qe(B)), E === null)) return;
            if (((O = E.tag), O === 5 || O === 6 || O === 26 || O === 27)) {
              o = p = E;
              continue e;
            }
            B = B.parentNode;
          }
        }
        o = o.return;
      }
    Fd(function () {
      var V = p,
        ne = mc(r),
        se = [];
      e: {
        var Q = op.get(e);
        if (Q !== void 0) {
          var te = ko,
            be = e;
          switch (e) {
            case "keypress":
              if (No(r) === 0) break e;
            case "keydown":
            case "keyup":
              te = J4;
              break;
            case "focusin":
              (be = "focus"), (te = Ac);
              break;
            case "focusout":
              (be = "blur"), (te = Ac);
              break;
            case "beforeblur":
            case "afterblur":
              te = Ac;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              te = Nd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              te = V4;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              te = t8;
              break;
            case ip:
            case ap:
            case rp:
              te = P4;
              break;
            case sp:
              te = i8;
              break;
            case "scroll":
            case "scrollend":
              te = k4;
              break;
            case "wheel":
              te = r8;
              break;
            case "copy":
            case "cut":
            case "paste":
              te = X4;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              te = kd;
              break;
            case "toggle":
            case "beforetoggle":
              te = o8;
          }
          var Te = (i & 4) !== 0,
            mt = !Te && (e === "scroll" || e === "scrollend"),
            Y = Te ? (Q !== null ? Q + "Capture" : null) : Q;
          Te = [];
          for (var k = V, G; k !== null; ) {
            var ae = k;
            if (
              ((G = ae.stateNode),
              (ae = ae.tag),
              (ae !== 5 && ae !== 26 && ae !== 27) ||
                G === null ||
                Y === null ||
                ((ae = ss(k, Y)), ae != null && Te.push(js(k, ae, G))),
              mt)
            )
              break;
            k = k.return;
          }
          0 < Te.length &&
            ((Q = new te(Q, be, null, r, ne)),
            se.push({ event: Q, listeners: Te }));
        }
      }
      if ((i & 7) === 0) {
        e: {
          if (
            ((Q = e === "mouseover" || e === "pointerover"),
            (te = e === "mouseout" || e === "pointerout"),
            Q &&
              r !== xc &&
              (be = r.relatedTarget || r.fromElement) &&
              (Qe(be) || be[ye]))
          )
            break e;
          if (
            (te || Q) &&
            ((Q =
              ne.window === ne
                ? ne
                : (Q = ne.ownerDocument)
                  ? Q.defaultView || Q.parentWindow
                  : window),
            te
              ? ((be = r.relatedTarget || r.toElement),
                (te = V),
                (be = be ? Qe(be) : null),
                be !== null &&
                  ((mt = ie(be)),
                  (Te = be.tag),
                  be !== mt || (Te !== 5 && Te !== 27 && Te !== 6)) &&
                  (be = null))
              : ((te = null), (be = V)),
            te !== be)
          ) {
            if (
              ((Te = Nd),
              (ae = "onMouseLeave"),
              (Y = "onMouseEnter"),
              (k = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Te = kd),
                (ae = "onPointerLeave"),
                (Y = "onPointerEnter"),
                (k = "pointer")),
              (mt = te == null ? Q : Kn(te)),
              (G = be == null ? Q : Kn(be)),
              (Q = new Te(ae, k + "leave", te, r, ne)),
              (Q.target = mt),
              (Q.relatedTarget = G),
              (ae = null),
              Qe(ne) === V &&
                ((Te = new Te(Y, k + "enter", be, r, ne)),
                (Te.target = G),
                (Te.relatedTarget = mt),
                (ae = Te)),
              (mt = ae),
              te && be)
            )
              t: {
                for (Te = te, Y = be, k = 0, G = Te; G; G = Ur(G)) k++;
                for (G = 0, ae = Y; ae; ae = Ur(ae)) G++;
                for (; 0 < k - G; ) (Te = Ur(Te)), k--;
                for (; 0 < G - k; ) (Y = Ur(Y)), G--;
                for (; k--; ) {
                  if (Te === Y || (Y !== null && Te === Y.alternate)) break t;
                  (Te = Ur(Te)), (Y = Ur(Y));
                }
                Te = null;
              }
            else Te = null;
            te !== null && gx(se, Q, te, Te, !1),
              be !== null && mt !== null && gx(se, mt, be, Te, !0);
          }
        }
        e: {
          if (
            ((Q = V ? Kn(V) : window),
            (te = Q.nodeName && Q.nodeName.toLowerCase()),
            te === "select" || (te === "input" && Q.type === "file"))
          )
            var ge = Gd;
          else if (Yd(Q))
            if (Kd) ge = y8;
            else {
              ge = x8;
              var ze = p8;
            }
          else
            (te = Q.nodeName),
              !te ||
              te.toLowerCase() !== "input" ||
              (Q.type !== "checkbox" && Q.type !== "radio")
                ? V && pc(V.elementType) && (ge = Gd)
                : (ge = m8);
          if (ge && (ge = ge(e, V))) {
            Xd(se, ge, r, ne);
            break e;
          }
          ze && ze(e, Q, V),
            e === "focusout" &&
              V &&
              Q.type === "number" &&
              V.memoizedProps.value != null &&
              dc(Q, "number", Q.value);
        }
        switch (((ze = V ? Kn(V) : window), e)) {
          case "focusin":
            (Yd(ze) || ze.contentEditable === "true") &&
              ((xr = ze), (Tc = V), (ps = null));
            break;
          case "focusout":
            ps = Tc = xr = null;
            break;
          case "mousedown":
            Rc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Rc = !1), tp(se, r, ne);
            break;
          case "selectionchange":
            if (E8) break;
          case "keydown":
          case "keyup":
            tp(se, r, ne);
        }
        var Se;
        if (Cc)
          e: {
            switch (e) {
              case "compositionstart":
                var De = "onCompositionStart";
                break e;
              case "compositionend":
                De = "onCompositionEnd";
                break e;
              case "compositionupdate":
                De = "onCompositionUpdate";
                break e;
            }
            De = void 0;
          }
        else
          pr
            ? jd(e, r) && (De = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (De = "onCompositionStart");
        De &&
          (Hd &&
            r.locale !== "ko" &&
            (pr || De !== "onCompositionStart"
              ? De === "onCompositionEnd" && pr && (Se = zd())
              : ((Gi = ne),
                (gc = "value" in Gi ? Gi.value : Gi.textContent),
                (pr = !0))),
          (ze = Al(V, De)),
          0 < ze.length &&
            ((De = new Ud(De, e, null, r, ne)),
            se.push({ event: De, listeners: ze }),
            Se
              ? (De.data = Se)
              : ((Se = Pd(r)), Se !== null && (De.data = Se)))),
          (Se = u8 ? c8(e, r) : f8(e, r)) &&
            ((De = Al(V, "onBeforeInput")),
            0 < De.length &&
              ((ze = new Ud("onBeforeInput", "beforeinput", null, r, ne)),
              se.push({ event: ze, listeners: De }),
              (ze.data = Se))),
          nE(se, e, V, r, ne);
      }
      yx(se, i);
    });
  }
  function js(e, i, r) {
    return { instance: e, listener: i, currentTarget: r };
  }
  function Al(e, i) {
    for (var r = i + "Capture", o = []; e !== null; ) {
      var u = e,
        p = u.stateNode;
      (u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          p === null ||
          ((u = ss(e, r)),
          u != null && o.unshift(js(e, u, p)),
          (u = ss(e, i)),
          u != null && o.push(js(e, u, p))),
        (e = e.return);
    }
    return o;
  }
  function Ur(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function gx(e, i, r, o, u) {
    for (var p = i._reactName, E = []; r !== null && r !== o; ) {
      var B = r,
        O = B.alternate,
        V = B.stateNode;
      if (((B = B.tag), O !== null && O === o)) break;
      (B !== 5 && B !== 26 && B !== 27) ||
        V === null ||
        ((O = V),
        u
          ? ((V = ss(r, p)), V != null && E.unshift(js(r, V, O)))
          : u || ((V = ss(r, p)), V != null && E.push(js(r, V, O)))),
        (r = r.return);
    }
    E.length !== 0 && e.push({ event: i, listeners: E });
  }
  var sE = /\r\n?/g,
    oE = /\u0000|\uFFFD/g;
  function Ex(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        sE,
        `
`,
      )
      .replace(oE, "");
  }
  function bx(e, i) {
    return (i = Ex(i)), Ex(e) === i;
  }
  function Sl() {}
  function et(e, i, r, o, u, p) {
    switch (r) {
      case "children":
        typeof o == "string"
          ? i === "body" || (i === "textarea" && o === "") || fr(e, o)
          : (typeof o == "number" || typeof o == "bigint") &&
            i !== "body" &&
            fr(e, "" + o);
        break;
      case "className":
        Qn(e, "class", o);
        break;
      case "tabIndex":
        Qn(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Qn(e, r, o);
        break;
      case "style":
        Md(e, o, p);
        break;
      case "data":
        if (i !== "object") {
          Qn(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (i !== "a" || r !== "href")) {
          e.removeAttribute(r);
          break;
        }
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "symbol" ||
          typeof o == "boolean"
        ) {
          e.removeAttribute(r);
          break;
        }
        (o = zo("" + o)), e.setAttribute(r, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            r,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof p == "function" &&
            (r === "formAction"
              ? (i !== "input" && et(e, i, "name", u.name, u, null),
                et(e, i, "formEncType", u.formEncType, u, null),
                et(e, i, "formMethod", u.formMethod, u, null),
                et(e, i, "formTarget", u.formTarget, u, null))
              : (et(e, i, "encType", u.encType, u, null),
                et(e, i, "method", u.method, u, null),
                et(e, i, "target", u.target, u, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(r);
          break;
        }
        (o = zo("" + o)), e.setAttribute(r, o);
        break;
      case "onClick":
        o != null && (e.onclick = Sl);
        break;
      case "onScroll":
        o != null && He("scroll", e);
        break;
      case "onScrollEnd":
        o != null && He("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(s(61));
          if (((r = o.__html), r != null)) {
            if (u.children != null) throw Error(s(60));
            e.innerHTML = r;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "boolean" ||
          typeof o == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (r = zo("" + o)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol"
          ? e.setAttribute(r, "" + o)
          : e.removeAttribute(r);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol"
          ? e.setAttribute(r, "")
          : e.removeAttribute(r);
        break;
      case "capture":
      case "download":
        o === !0
          ? e.setAttribute(r, "")
          : o !== !1 &&
              o != null &&
              typeof o != "function" &&
              typeof o != "symbol"
            ? e.setAttribute(r, o)
            : e.removeAttribute(r);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        !isNaN(o) &&
        1 <= o
          ? e.setAttribute(r, o)
          : e.removeAttribute(r);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o)
          ? e.removeAttribute(r)
          : e.setAttribute(r, o);
        break;
      case "popover":
        He("beforetoggle", e), He("toggle", e), ot(e, "popover", o);
        break;
      case "xlinkActuate":
        Bn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        Bn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        Bn(e, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        Bn(e, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        Bn(e, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        Bn(e, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        Bn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        Bn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        Bn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        ot(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < r.length) ||
          (r[0] !== "o" && r[0] !== "O") ||
          (r[1] !== "n" && r[1] !== "N")) &&
          ((r = N4.get(r) || r), ot(e, r, o));
    }
  }
  function J0(e, i, r, o, u, p) {
    switch (r) {
      case "style":
        Md(e, o, p);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(s(61));
          if (((r = o.__html), r != null)) {
            if (u.children != null) throw Error(s(60));
            e.innerHTML = r;
          }
        }
        break;
      case "children":
        typeof o == "string"
          ? fr(e, o)
          : (typeof o == "number" || typeof o == "bigint") && fr(e, "" + o);
        break;
      case "onScroll":
        o != null && He("scroll", e);
        break;
      case "onScrollEnd":
        o != null && He("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = Sl);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Xi.hasOwnProperty(r))
          e: {
            if (
              r[0] === "o" &&
              r[1] === "n" &&
              ((u = r.endsWith("Capture")),
              (i = r.slice(2, u ? r.length - 7 : void 0)),
              (p = e[de] || null),
              (p = p != null ? p[r] : null),
              typeof p == "function" && e.removeEventListener(i, p, u),
              typeof o == "function")
            ) {
              typeof p != "function" &&
                p !== null &&
                (r in e
                  ? (e[r] = null)
                  : e.hasAttribute(r) && e.removeAttribute(r)),
                e.addEventListener(i, o, u);
              break e;
            }
            r in e
              ? (e[r] = o)
              : o === !0
                ? e.setAttribute(r, "")
                : ot(e, r, o);
          }
    }
  }
  function qt(e, i, r) {
    switch (i) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        He("error", e), He("load", e);
        var o = !1,
          u = !1,
          p;
        for (p in r)
          if (r.hasOwnProperty(p)) {
            var E = r[p];
            if (E != null)
              switch (p) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, i));
                default:
                  et(e, i, p, E, r, null);
              }
          }
        u && et(e, i, "srcSet", r.srcSet, r, null),
          o && et(e, i, "src", r.src, r, null);
        return;
      case "input":
        He("invalid", e);
        var B = (p = E = u = null),
          O = null,
          V = null;
        for (o in r)
          if (r.hasOwnProperty(o)) {
            var ne = r[o];
            if (ne != null)
              switch (o) {
                case "name":
                  u = ne;
                  break;
                case "type":
                  E = ne;
                  break;
                case "checked":
                  O = ne;
                  break;
                case "defaultChecked":
                  V = ne;
                  break;
                case "value":
                  p = ne;
                  break;
                case "defaultValue":
                  B = ne;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (ne != null) throw Error(s(137, i));
                  break;
                default:
                  et(e, i, o, ne, r, null);
              }
          }
        _d(e, p, B, O, V, E, u, !1), Oo(e);
        return;
      case "select":
        He("invalid", e), (o = E = p = null);
        for (u in r)
          if (r.hasOwnProperty(u) && ((B = r[u]), B != null))
            switch (u) {
              case "value":
                p = B;
                break;
              case "defaultValue":
                E = B;
                break;
              case "multiple":
                o = B;
              default:
                et(e, i, u, B, r, null);
            }
        (i = p),
          (r = E),
          (e.multiple = !!o),
          i != null ? cr(e, !!o, i, !1) : r != null && cr(e, !!o, r, !0);
        return;
      case "textarea":
        He("invalid", e), (p = u = o = null);
        for (E in r)
          if (r.hasOwnProperty(E) && ((B = r[E]), B != null))
            switch (E) {
              case "value":
                o = B;
                break;
              case "defaultValue":
                u = B;
                break;
              case "children":
                p = B;
                break;
              case "dangerouslySetInnerHTML":
                if (B != null) throw Error(s(91));
                break;
              default:
                et(e, i, E, B, r, null);
            }
        Rd(e, o, u, p), Oo(e);
        return;
      case "option":
        for (O in r)
          if (r.hasOwnProperty(O) && ((o = r[O]), o != null))
            switch (O) {
              case "selected":
                e.selected =
                  o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                et(e, i, O, o, r, null);
            }
        return;
      case "dialog":
        He("cancel", e), He("close", e);
        break;
      case "iframe":
      case "object":
        He("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < qs.length; o++) He(qs[o], e);
        break;
      case "image":
        He("error", e), He("load", e);
        break;
      case "details":
        He("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        He("error", e), He("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (V in r)
          if (r.hasOwnProperty(V) && ((o = r[V]), o != null))
            switch (V) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, i));
              default:
                et(e, i, V, o, r, null);
            }
        return;
      default:
        if (pc(i)) {
          for (ne in r)
            r.hasOwnProperty(ne) &&
              ((o = r[ne]), o !== void 0 && J0(e, i, ne, o, r, void 0));
          return;
        }
    }
    for (B in r)
      r.hasOwnProperty(B) && ((o = r[B]), o != null && et(e, i, B, o, r, null));
  }
  function lE(e, i, r, o) {
    switch (i) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          p = null,
          E = null,
          B = null,
          O = null,
          V = null,
          ne = null;
        for (te in r) {
          var se = r[te];
          if (r.hasOwnProperty(te) && se != null)
            switch (te) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                O = se;
              default:
                o.hasOwnProperty(te) || et(e, i, te, null, o, se);
            }
        }
        for (var Q in o) {
          var te = o[Q];
          if (((se = r[Q]), o.hasOwnProperty(Q) && (te != null || se != null)))
            switch (Q) {
              case "type":
                p = te;
                break;
              case "name":
                u = te;
                break;
              case "checked":
                V = te;
                break;
              case "defaultChecked":
                ne = te;
                break;
              case "value":
                E = te;
                break;
              case "defaultValue":
                B = te;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (te != null) throw Error(s(137, i));
                break;
              default:
                te !== se && et(e, i, Q, te, o, se);
            }
        }
        hc(e, E, B, O, V, ne, p, u);
        return;
      case "select":
        te = E = B = Q = null;
        for (p in r)
          if (((O = r[p]), r.hasOwnProperty(p) && O != null))
            switch (p) {
              case "value":
                break;
              case "multiple":
                te = O;
              default:
                o.hasOwnProperty(p) || et(e, i, p, null, o, O);
            }
        for (u in o)
          if (
            ((p = o[u]),
            (O = r[u]),
            o.hasOwnProperty(u) && (p != null || O != null))
          )
            switch (u) {
              case "value":
                Q = p;
                break;
              case "defaultValue":
                B = p;
                break;
              case "multiple":
                E = p;
              default:
                p !== O && et(e, i, u, p, o, O);
            }
        (i = B),
          (r = E),
          (o = te),
          Q != null
            ? cr(e, !!r, Q, !1)
            : !!o != !!r &&
              (i != null ? cr(e, !!r, i, !0) : cr(e, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        te = Q = null;
        for (B in r)
          if (
            ((u = r[B]),
            r.hasOwnProperty(B) && u != null && !o.hasOwnProperty(B))
          )
            switch (B) {
              case "value":
                break;
              case "children":
                break;
              default:
                et(e, i, B, null, o, u);
            }
        for (E in o)
          if (
            ((u = o[E]),
            (p = r[E]),
            o.hasOwnProperty(E) && (u != null || p != null))
          )
            switch (E) {
              case "value":
                Q = u;
                break;
              case "defaultValue":
                te = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(s(91));
                break;
              default:
                u !== p && et(e, i, E, u, o, p);
            }
        Td(e, Q, te);
        return;
      case "option":
        for (var be in r)
          if (
            ((Q = r[be]),
            r.hasOwnProperty(be) && Q != null && !o.hasOwnProperty(be))
          )
            switch (be) {
              case "selected":
                e.selected = !1;
                break;
              default:
                et(e, i, be, null, o, Q);
            }
        for (O in o)
          if (
            ((Q = o[O]),
            (te = r[O]),
            o.hasOwnProperty(O) && Q !== te && (Q != null || te != null))
          )
            switch (O) {
              case "selected":
                e.selected =
                  Q && typeof Q != "function" && typeof Q != "symbol";
                break;
              default:
                et(e, i, O, Q, o, te);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Te in r)
          (Q = r[Te]),
            r.hasOwnProperty(Te) &&
              Q != null &&
              !o.hasOwnProperty(Te) &&
              et(e, i, Te, null, o, Q);
        for (V in o)
          if (
            ((Q = o[V]),
            (te = r[V]),
            o.hasOwnProperty(V) && Q !== te && (Q != null || te != null))
          )
            switch (V) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Q != null) throw Error(s(137, i));
                break;
              default:
                et(e, i, V, Q, o, te);
            }
        return;
      default:
        if (pc(i)) {
          for (var mt in r)
            (Q = r[mt]),
              r.hasOwnProperty(mt) &&
                Q !== void 0 &&
                !o.hasOwnProperty(mt) &&
                J0(e, i, mt, void 0, o, Q);
          for (ne in o)
            (Q = o[ne]),
              (te = r[ne]),
              !o.hasOwnProperty(ne) ||
                Q === te ||
                (Q === void 0 && te === void 0) ||
                J0(e, i, ne, Q, o, te);
          return;
        }
    }
    for (var Y in r)
      (Q = r[Y]),
        r.hasOwnProperty(Y) &&
          Q != null &&
          !o.hasOwnProperty(Y) &&
          et(e, i, Y, null, o, Q);
    for (se in o)
      (Q = o[se]),
        (te = r[se]),
        !o.hasOwnProperty(se) ||
          Q === te ||
          (Q == null && te == null) ||
          et(e, i, se, Q, o, te);
  }
  var I0 = null,
    ef = null;
  function Cl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Ax(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Sx(e, i) {
    if (e === 0)
      switch (i) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && i === "foreignObject" ? 0 : e;
  }
  function tf(e, i) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof i.children == "string" ||
      typeof i.children == "number" ||
      typeof i.children == "bigint" ||
      (typeof i.dangerouslySetInnerHTML == "object" &&
        i.dangerouslySetInnerHTML !== null &&
        i.dangerouslySetInnerHTML.__html != null)
    );
  }
  var nf = null;
  function uE() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === nf
        ? !1
        : ((nf = e), !0)
      : ((nf = null), !1);
  }
  var Cx = typeof setTimeout == "function" ? setTimeout : void 0,
    cE = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Dx = typeof Promise == "function" ? Promise : void 0,
    fE =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Dx != "undefined"
          ? function (e) {
              return Dx.resolve(null).then(e).catch(hE);
            }
          : Cx;
  function hE(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function af(e, i) {
    var r = i,
      o = 0;
    do {
      var u = r.nextSibling;
      if ((e.removeChild(r), u && u.nodeType === 8))
        if (((r = u.data), r === "/$")) {
          if (o === 0) {
            e.removeChild(u), $s(i);
            return;
          }
          o--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || o++;
      r = u;
    } while (r);
    $s(i);
  }
  function rf(e) {
    var i = e.firstChild;
    for (i && i.nodeType === 10 && (i = i.nextSibling); i; ) {
      var r = i;
      switch (((i = i.nextSibling), r.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          rf(r), ke(r);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (r.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(r);
    }
  }
  function dE(e, i, r, o) {
    for (; e.nodeType === 1; ) {
      var u = r;
      if (e.nodeName.toLowerCase() !== i.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (o) {
        if (!e[Ge])
          switch (i) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((p = e.getAttribute("rel")),
                p === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                p !== u.rel ||
                e.getAttribute("href") !== (u.href == null ? null : u.href) ||
                e.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((p = e.getAttribute("src")),
                (p !== (u.src == null ? null : u.src) ||
                  e.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  e.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  p &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (i === "input" && e.type === "hidden") {
        var p = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === p) return e;
      } else return e;
      if (((e = In(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function pE(e, i, r) {
    if (i === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !r) ||
        ((e = In(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function In(e) {
    for (; e != null; e = e.nextSibling) {
      var i = e.nodeType;
      if (i === 1 || i === 3) break;
      if (i === 8) {
        if (
          ((i = e.data),
          i === "$" || i === "$!" || i === "$?" || i === "F!" || i === "F")
        )
          break;
        if (i === "/$") return null;
      }
    }
    return e;
  }
  function Bx(e) {
    e = e.previousSibling;
    for (var i = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (i === 0) return e;
          i--;
        } else r === "/$" && i++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function _x(e, i, r) {
    switch (((i = Cl(r)), e)) {
      case "html":
        if (((e = i.documentElement), !e)) throw Error(s(452));
        return e;
      case "head":
        if (((e = i.head), !e)) throw Error(s(453));
        return e;
      case "body":
        if (((e = i.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  var Un = new Map(),
    Tx = new Set();
  function Dl(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.ownerDocument;
  }
  var ki = P.d;
  P.d = { f: xE, r: mE, D: yE, C: vE, L: gE, m: EE, X: AE, S: bE, M: SE };
  function xE() {
    var e = ki.f(),
      i = yl();
    return e || i;
  }
  function mE(e) {
    var i = xn(e);
    i !== null && i.tag === 5 && i.type === "form" ? t1(i) : ki.r(e);
  }
  var kr = typeof document == "undefined" ? null : document;
  function Rx(e, i, r) {
    var o = kr;
    if (o && typeof i == "string" && i) {
      var u = _n(i);
      (u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof r == "string" && (u += '[crossorigin="' + r + '"]'),
        Tx.has(u) ||
          (Tx.add(u),
          (e = { rel: e, crossOrigin: r, href: i }),
          o.querySelector(u) === null &&
            ((i = o.createElement("link")),
            qt(i, "link", e),
            $e(i),
            o.head.appendChild(i)));
    }
  }
  function yE(e) {
    ki.D(e), Rx("dns-prefetch", e, null);
  }
  function vE(e, i) {
    ki.C(e, i), Rx("preconnect", e, i);
  }
  function gE(e, i, r) {
    ki.L(e, i, r);
    var o = kr;
    if (o && e && i) {
      var u = 'link[rel="preload"][as="' + _n(i) + '"]';
      i === "image" && r && r.imageSrcSet
        ? ((u += '[imagesrcset="' + _n(r.imageSrcSet) + '"]'),
          typeof r.imageSizes == "string" &&
            (u += '[imagesizes="' + _n(r.imageSizes) + '"]'))
        : (u += '[href="' + _n(e) + '"]');
      var p = u;
      switch (i) {
        case "style":
          p = Hr(e);
          break;
        case "script":
          p = Vr(e);
      }
      Un.has(p) ||
        ((e = M(
          {
            rel: "preload",
            href: i === "image" && r && r.imageSrcSet ? void 0 : e,
            as: i,
          },
          r,
        )),
        Un.set(p, e),
        o.querySelector(u) !== null ||
          (i === "style" && o.querySelector(Ps(p))) ||
          (i === "script" && o.querySelector(Ys(p))) ||
          ((i = o.createElement("link")),
          qt(i, "link", e),
          $e(i),
          o.head.appendChild(i)));
    }
  }
  function EE(e, i) {
    ki.m(e, i);
    var r = kr;
    if (r && e) {
      var o = i && typeof i.as == "string" ? i.as : "script",
        u =
          'link[rel="modulepreload"][as="' + _n(o) + '"][href="' + _n(e) + '"]',
        p = u;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          p = Vr(e);
      }
      if (
        !Un.has(p) &&
        ((e = M({ rel: "modulepreload", href: e }, i)),
        Un.set(p, e),
        r.querySelector(u) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(Ys(p))) return;
        }
        (o = r.createElement("link")),
          qt(o, "link", e),
          $e(o),
          r.head.appendChild(o);
      }
    }
  }
  function bE(e, i, r) {
    ki.S(e, i, r);
    var o = kr;
    if (o && e) {
      var u = Gt(o).hoistableStyles,
        p = Hr(e);
      i = i || "default";
      var E = u.get(p);
      if (!E) {
        var B = { loading: 0, preload: null };
        if ((E = o.querySelector(Ps(p)))) B.loading = 5;
        else {
          (e = M({ rel: "stylesheet", href: e, "data-precedence": i }, r)),
            (r = Un.get(p)) && sf(e, r);
          var O = (E = o.createElement("link"));
          $e(O),
            qt(O, "link", e),
            (O._p = new Promise(function (V, ne) {
              (O.onload = V), (O.onerror = ne);
            })),
            O.addEventListener("load", function () {
              B.loading |= 1;
            }),
            O.addEventListener("error", function () {
              B.loading |= 2;
            }),
            (B.loading |= 4),
            Bl(E, i, o);
        }
        (E = { type: "stylesheet", instance: E, count: 1, state: B }),
          u.set(p, E);
      }
    }
  }
  function AE(e, i) {
    ki.X(e, i);
    var r = kr;
    if (r && e) {
      var o = Gt(r).hoistableScripts,
        u = Vr(e),
        p = o.get(u);
      p ||
        ((p = r.querySelector(Ys(u))),
        p ||
          ((e = M({ src: e, async: !0 }, i)),
          (i = Un.get(u)) && of(e, i),
          (p = r.createElement("script")),
          $e(p),
          qt(p, "link", e),
          r.head.appendChild(p)),
        (p = { type: "script", instance: p, count: 1, state: null }),
        o.set(u, p));
    }
  }
  function SE(e, i) {
    ki.M(e, i);
    var r = kr;
    if (r && e) {
      var o = Gt(r).hoistableScripts,
        u = Vr(e),
        p = o.get(u);
      p ||
        ((p = r.querySelector(Ys(u))),
        p ||
          ((e = M({ src: e, async: !0, type: "module" }, i)),
          (i = Un.get(u)) && of(e, i),
          (p = r.createElement("script")),
          $e(p),
          qt(p, "link", e),
          r.head.appendChild(p)),
        (p = { type: "script", instance: p, count: 1, state: null }),
        o.set(u, p));
    }
  }
  function wx(e, i, r, o) {
    var u = (u = nt.current) ? Dl(u) : null;
    if (!u) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string"
          ? ((i = Hr(r.href)),
            (r = Gt(u).hoistableStyles),
            (o = r.get(i)),
            o ||
              ((o = { type: "style", instance: null, count: 0, state: null }),
              r.set(i, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          r.rel === "stylesheet" &&
          typeof r.href == "string" &&
          typeof r.precedence == "string"
        ) {
          e = Hr(r.href);
          var p = Gt(u).hoistableStyles,
            E = p.get(e);
          if (
            (E ||
              ((u = u.ownerDocument || u),
              (E = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              p.set(e, E),
              (p = u.querySelector(Ps(e))) &&
                !p._p &&
                ((E.instance = p), (E.state.loading = 5)),
              Un.has(e) ||
                ((r = {
                  rel: "preload",
                  as: "style",
                  href: r.href,
                  crossOrigin: r.crossOrigin,
                  integrity: r.integrity,
                  media: r.media,
                  hrefLang: r.hrefLang,
                  referrerPolicy: r.referrerPolicy,
                }),
                Un.set(e, r),
                p || CE(u, e, r, E.state))),
            i && o === null)
          )
            throw Error(s(528, ""));
          return E;
        }
        if (i && o !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (i = r.async),
          (r = r.src),
          typeof r == "string" &&
          i &&
          typeof i != "function" &&
          typeof i != "symbol"
            ? ((i = Vr(r)),
              (r = Gt(u).hoistableScripts),
              (o = r.get(i)),
              o ||
                ((o = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                r.set(i, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function Hr(e) {
    return 'href="' + _n(e) + '"';
  }
  function Ps(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Mx(e) {
    return M({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function CE(e, i, r, o) {
    e.querySelector('link[rel="preload"][as="style"][' + i + "]")
      ? (o.loading = 1)
      : ((i = e.createElement("link")),
        (o.preload = i),
        i.addEventListener("load", function () {
          return (o.loading |= 1);
        }),
        i.addEventListener("error", function () {
          return (o.loading |= 2);
        }),
        qt(i, "link", r),
        $e(i),
        e.head.appendChild(i));
  }
  function Vr(e) {
    return '[src="' + _n(e) + '"]';
  }
  function Ys(e) {
    return "script[async]" + e;
  }
  function Ox(e, i, r) {
    if ((i.count++, i.instance === null))
      switch (i.type) {
        case "style":
          var o = e.querySelector('style[data-href~="' + _n(r.href) + '"]');
          if (o) return (i.instance = o), $e(o), o;
          var u = M({}, r, {
            "data-href": r.href,
            "data-precedence": r.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (e.ownerDocument || e).createElement("style")),
            $e(o),
            qt(o, "style", u),
            Bl(o, r.precedence, e),
            (i.instance = o)
          );
        case "stylesheet":
          u = Hr(r.href);
          var p = e.querySelector(Ps(u));
          if (p) return (i.state.loading |= 4), (i.instance = p), $e(p), p;
          (o = Mx(r)),
            (u = Un.get(u)) && sf(o, u),
            (p = (e.ownerDocument || e).createElement("link")),
            $e(p);
          var E = p;
          return (
            (E._p = new Promise(function (B, O) {
              (E.onload = B), (E.onerror = O);
            })),
            qt(p, "link", o),
            (i.state.loading |= 4),
            Bl(p, r.precedence, e),
            (i.instance = p)
          );
        case "script":
          return (
            (p = Vr(r.src)),
            (u = e.querySelector(Ys(p)))
              ? ((i.instance = u), $e(u), u)
              : ((o = r),
                (u = Un.get(p)) && ((o = M({}, r)), of(o, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement("script")),
                $e(u),
                qt(u, "link", o),
                e.head.appendChild(u),
                (i.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, i.type));
      }
    else
      i.type === "stylesheet" &&
        (i.state.loading & 4) === 0 &&
        ((o = i.instance), (i.state.loading |= 4), Bl(o, r.precedence, e));
    return i.instance;
  }
  function Bl(e, i, r) {
    for (
      var o = r.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = o.length ? o[o.length - 1] : null,
        p = u,
        E = 0;
      E < o.length;
      E++
    ) {
      var B = o[E];
      if (B.dataset.precedence === i) p = B;
      else if (p !== u) break;
    }
    p
      ? p.parentNode.insertBefore(e, p.nextSibling)
      : ((i = r.nodeType === 9 ? r.head : r), i.insertBefore(e, i.firstChild));
  }
  function sf(e, i) {
    e.crossOrigin == null && (e.crossOrigin = i.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = i.referrerPolicy),
      e.title == null && (e.title = i.title);
  }
  function of(e, i) {
    e.crossOrigin == null && (e.crossOrigin = i.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = i.referrerPolicy),
      e.integrity == null && (e.integrity = i.integrity);
  }
  var _l = null;
  function Fx(e, i, r) {
    if (_l === null) {
      var o = new Map(),
        u = (_l = new Map());
      u.set(r, o);
    } else (u = _l), (o = u.get(r)), o || ((o = new Map()), u.set(r, o));
    if (o.has(e)) return o;
    for (
      o.set(e, null), r = r.getElementsByTagName(e), u = 0;
      u < r.length;
      u++
    ) {
      var p = r[u];
      if (
        !(
          p[Ge] ||
          p[he] ||
          (e === "link" && p.getAttribute("rel") === "stylesheet")
        ) &&
        p.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var E = p.getAttribute(i) || "";
        E = e + E;
        var B = o.get(E);
        B ? B.push(p) : o.set(E, [p]);
      }
    }
    return o;
  }
  function zx(e, i, r) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        r,
        i === "title" ? e.querySelector("head > title") : null,
      );
  }
  function DE(e, i, r) {
    if (r === 1 || i.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof i.precedence != "string" ||
          typeof i.href != "string" ||
          i.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof i.rel != "string" ||
          typeof i.href != "string" ||
          i.href === "" ||
          i.onLoad ||
          i.onError
        )
          break;
        switch (i.rel) {
          case "stylesheet":
            return (
              (e = i.disabled), typeof i.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          i.async &&
          typeof i.async != "function" &&
          typeof i.async != "symbol" &&
          !i.onLoad &&
          !i.onError &&
          i.src &&
          typeof i.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Lx(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Xs = null;
  function BE() {}
  function _E(e, i, r) {
    if (Xs === null) throw Error(s(475));
    var o = Xs;
    if (
      i.type === "stylesheet" &&
      (typeof r.media != "string" || matchMedia(r.media).matches !== !1) &&
      (i.state.loading & 4) === 0
    ) {
      if (i.instance === null) {
        var u = Hr(r.href),
          p = e.querySelector(Ps(u));
        if (p) {
          (e = p._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (o.count++, (o = Tl.bind(o)), e.then(o, o)),
            (i.state.loading |= 4),
            (i.instance = p),
            $e(p);
          return;
        }
        (p = e.ownerDocument || e),
          (r = Mx(r)),
          (u = Un.get(u)) && sf(r, u),
          (p = p.createElement("link")),
          $e(p);
        var E = p;
        (E._p = new Promise(function (B, O) {
          (E.onload = B), (E.onerror = O);
        })),
          qt(p, "link", r),
          (i.instance = p);
      }
      o.stylesheets === null && (o.stylesheets = new Map()),
        o.stylesheets.set(i, e),
        (e = i.state.preload) &&
          (i.state.loading & 3) === 0 &&
          (o.count++,
          (i = Tl.bind(o)),
          e.addEventListener("load", i),
          e.addEventListener("error", i));
    }
  }
  function TE() {
    if (Xs === null) throw Error(s(475));
    var e = Xs;
    return (
      e.stylesheets && e.count === 0 && lf(e, e.stylesheets),
      0 < e.count
        ? function (i) {
            var r = setTimeout(function () {
              if ((e.stylesheets && lf(e, e.stylesheets), e.unsuspend)) {
                var o = e.unsuspend;
                (e.unsuspend = null), o();
              }
            }, 6e4);
            return (
              (e.unsuspend = i),
              function () {
                (e.unsuspend = null), clearTimeout(r);
              }
            );
          }
        : null
    );
  }
  function Tl() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) lf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Rl = null;
  function lf(e, i) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Rl = new Map()),
        i.forEach(RE, e),
        (Rl = null),
        Tl.call(e));
  }
  function RE(e, i) {
    if (!(i.state.loading & 4)) {
      var r = Rl.get(e);
      if (r) var o = r.get(null);
      else {
        (r = new Map()), Rl.set(e, r);
        for (
          var u = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            p = 0;
          p < u.length;
          p++
        ) {
          var E = u[p];
          (E.nodeName === "LINK" || E.getAttribute("media") !== "not all") &&
            (r.set(E.dataset.precedence, E), (o = E));
        }
        o && r.set(null, o);
      }
      (u = i.instance),
        (E = u.getAttribute("data-precedence")),
        (p = r.get(E) || o),
        p === o && r.set(null, u),
        r.set(E, u),
        this.count++,
        (o = Tl.bind(this)),
        u.addEventListener("load", o),
        u.addEventListener("error", o),
        p
          ? p.parentNode.insertBefore(u, p.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(u, e.firstChild)),
        (i.state.loading |= 4);
    }
  }
  var Gs = {
    $$typeof: g,
    Provider: null,
    Consumer: null,
    _currentValue: pe,
    _currentValue2: pe,
    _threadCount: 0,
  };
  function wE(e, i, r, o, u, p, E, B) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Yi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Yi(0)),
      (this.hiddenUpdates = Yi(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = u),
      (this.onCaughtError = p),
      (this.onRecoverableError = E),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = B),
      (this.incompleteTransitions = new Map());
  }
  function Nx(e, i, r, o, u, p, E, B, O, V, ne, se) {
    return (
      (e = new wE(e, i, r, E, B, O, V, se)),
      (i = 1),
      p === !0 && (i |= 24),
      (p = Ln(3, null, null, i)),
      (e.current = p),
      (p.stateNode = e),
      (i = Hc()),
      i.refCount++,
      (e.pooledCache = i),
      i.refCount++,
      (p.memoizedState = { element: o, isDehydrated: r, cache: i }),
      g0(p),
      e
    );
  }
  function Ux(e) {
    return e ? ((e = vr), e) : vr;
  }
  function kx(e, i, r, o, u, p) {
    (u = Ux(u)),
      o.context === null ? (o.context = u) : (o.pendingContext = u),
      (o = ea(i)),
      (o.payload = { element: r }),
      (p = p === void 0 ? null : p),
      p !== null && (o.callback = p),
      (r = ta(e, o, i)),
      r !== null && (en(r, e, i), Rs(r, e, i));
  }
  function Hx(e, i) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < i ? r : i;
    }
  }
  function uf(e, i) {
    Hx(e, i), (e = e.alternate) && Hx(e, i);
  }
  function Vx(e) {
    if (e.tag === 13) {
      var i = Ki(e, 67108864);
      i !== null && en(i, e, 67108864), uf(e, 67108864);
    }
  }
  var wl = !0;
  function ME(e, i, r, o) {
    var u = q.T;
    q.T = null;
    var p = P.p;
    try {
      (P.p = 2), cf(e, i, r, o);
    } finally {
      (P.p = p), (q.T = u);
    }
  }
  function OE(e, i, r, o) {
    var u = q.T;
    q.T = null;
    var p = P.p;
    try {
      (P.p = 8), cf(e, i, r, o);
    } finally {
      (P.p = p), (q.T = u);
    }
  }
  function cf(e, i, r, o) {
    if (wl) {
      var u = ff(o);
      if (u === null) W0(e, i, o, Ml, r), jx(e, o);
      else if (zE(u, e, i, r, o)) o.stopPropagation();
      else if ((jx(e, o), i & 4 && -1 < FE.indexOf(e))) {
        for (; u !== null; ) {
          var p = xn(u);
          if (p !== null)
            switch (p.tag) {
              case 3:
                if (((p = p.stateNode), p.current.memoizedState.isDehydrated)) {
                  var E = Gn(p.pendingLanes);
                  if (E !== 0) {
                    var B = p;
                    for (B.pendingLanes |= 2, B.entangledLanes |= 2; E; ) {
                      var O = 1 << (31 - kt(E));
                      (B.entanglements[1] |= O), (E &= ~O);
                    }
                    hi(p), (ht & 6) === 0 && ((pl = ct() + 500), Vs(0));
                  }
                }
                break;
              case 13:
                (B = Ki(p, 2)), B !== null && en(B, p, 2), yl(), uf(p, 2);
            }
          if (((p = ff(o)), p === null && W0(e, i, o, Ml, r), p === u)) break;
          u = p;
        }
        u !== null && o.stopPropagation();
      } else W0(e, i, o, null, r);
    }
  }
  function ff(e) {
    return (e = mc(e)), hf(e);
  }
  var Ml = null;
  function hf(e) {
    if (((Ml = null), (e = Qe(e)), e !== null)) {
      var i = ie(e);
      if (i === null) e = null;
      else {
        var r = i.tag;
        if (r === 13) {
          if (((e = ve(i)), e !== null)) return e;
          e = null;
        } else if (r === 3) {
          if (i.stateNode.current.memoizedState.isDehydrated)
            return i.tag === 3 ? i.stateNode.containerInfo : null;
          e = null;
        } else i !== e && (e = null);
      }
    }
    return (Ml = e), null;
  }
  function qx(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (si()) {
          case Cn:
            return 2;
          case Dn:
            return 8;
          case Wt:
          case nn:
            return 32;
          case ji:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var df = !1,
    la = null,
    ua = null,
    ca = null,
    Ks = new Map(),
    Zs = new Map(),
    fa = [],
    FE =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function jx(e, i) {
    switch (e) {
      case "focusin":
      case "focusout":
        la = null;
        break;
      case "dragenter":
      case "dragleave":
        ua = null;
        break;
      case "mouseover":
      case "mouseout":
        ca = null;
        break;
      case "pointerover":
      case "pointerout":
        Ks.delete(i.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Zs.delete(i.pointerId);
    }
  }
  function Qs(e, i, r, o, u, p) {
    return e === null || e.nativeEvent !== p
      ? ((e = {
          blockedOn: i,
          domEventName: r,
          eventSystemFlags: o,
          nativeEvent: p,
          targetContainers: [u],
        }),
        i !== null && ((i = xn(i)), i !== null && Vx(i)),
        e)
      : ((e.eventSystemFlags |= o),
        (i = e.targetContainers),
        u !== null && i.indexOf(u) === -1 && i.push(u),
        e);
  }
  function zE(e, i, r, o, u) {
    switch (i) {
      case "focusin":
        return (la = Qs(la, e, i, r, o, u)), !0;
      case "dragenter":
        return (ua = Qs(ua, e, i, r, o, u)), !0;
      case "mouseover":
        return (ca = Qs(ca, e, i, r, o, u)), !0;
      case "pointerover":
        var p = u.pointerId;
        return Ks.set(p, Qs(Ks.get(p) || null, e, i, r, o, u)), !0;
      case "gotpointercapture":
        return (
          (p = u.pointerId), Zs.set(p, Qs(Zs.get(p) || null, e, i, r, o, u)), !0
        );
    }
    return !1;
  }
  function Px(e) {
    var i = Qe(e.target);
    if (i !== null) {
      var r = ie(i);
      if (r !== null) {
        if (((i = r.tag), i === 13)) {
          if (((i = ve(r)), i !== null)) {
            (e.blockedOn = i),
              Ae(e.priority, function () {
                if (r.tag === 13) {
                  var o = En(),
                    u = Ki(r, o);
                  u !== null && en(u, r, o), uf(r, o);
                }
              });
            return;
          }
        } else if (i === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ol(e) {
    if (e.blockedOn !== null) return !1;
    for (var i = e.targetContainers; 0 < i.length; ) {
      var r = ff(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        (xc = o), r.target.dispatchEvent(o), (xc = null);
      } else return (i = xn(r)), i !== null && Vx(i), (e.blockedOn = r), !1;
      i.shift();
    }
    return !0;
  }
  function Yx(e, i, r) {
    Ol(e) && r.delete(i);
  }
  function LE() {
    (df = !1),
      la !== null && Ol(la) && (la = null),
      ua !== null && Ol(ua) && (ua = null),
      ca !== null && Ol(ca) && (ca = null),
      Ks.forEach(Yx),
      Zs.forEach(Yx);
  }
  function Fl(e, i) {
    e.blockedOn === i &&
      ((e.blockedOn = null),
      df ||
        ((df = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, LE)));
  }
  var zl = null;
  function Xx(e) {
    zl !== e &&
      ((zl = e),
      t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
        zl === e && (zl = null);
        for (var i = 0; i < e.length; i += 3) {
          var r = e[i],
            o = e[i + 1],
            u = e[i + 2];
          if (typeof o != "function") {
            if (hf(o || r) === null) continue;
            break;
          }
          var p = xn(r);
          p !== null &&
            (e.splice(i, 3),
            (i -= 3),
            t0(p, { pending: !0, data: u, method: r.method, action: o }, o, u));
        }
      }));
  }
  function $s(e) {
    function i(O) {
      return Fl(O, e);
    }
    la !== null && Fl(la, e),
      ua !== null && Fl(ua, e),
      ca !== null && Fl(ca, e),
      Ks.forEach(i),
      Zs.forEach(i);
    for (var r = 0; r < fa.length; r++) {
      var o = fa[r];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < fa.length && ((r = fa[0]), r.blockedOn === null); )
      Px(r), r.blockedOn === null && fa.shift();
    if (((r = (e.ownerDocument || e).$$reactFormReplay), r != null))
      for (o = 0; o < r.length; o += 3) {
        var u = r[o],
          p = r[o + 1],
          E = u[de] || null;
        if (typeof p == "function") E || Xx(r);
        else if (E) {
          var B = null;
          if (p && p.hasAttribute("formAction")) {
            if (((u = p), (E = p[de] || null))) B = E.formAction;
            else if (hf(u) !== null) continue;
          } else B = E.action;
          typeof B == "function" ? (r[o + 1] = B) : (r.splice(o, 3), (o -= 3)),
            Xx(r);
        }
      }
  }
  function pf(e) {
    this._internalRoot = e;
  }
  (Ll.prototype.render = pf.prototype.render =
    function (e) {
      var i = this._internalRoot;
      if (i === null) throw Error(s(409));
      var r = i.current,
        o = En();
      kx(r, o, e, i, null, null);
    }),
    (Ll.prototype.unmount = pf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var i = e.containerInfo;
          e.tag === 0 && Lr(),
            kx(e.current, 2, null, e, null, null),
            yl(),
            (i[ye] = null);
        }
      });
  function Ll(e) {
    this._internalRoot = e;
  }
  Ll.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var i = fe();
      e = { blockedOn: null, target: e, priority: i };
      for (var r = 0; r < fa.length && i !== 0 && i < fa[r].priority; r++);
      fa.splice(r, 0, e), r === 0 && Px(e);
    }
  };
  var Gx = n.version;
  if (Gx !== "19.0.0") throw Error(s(527, Gx, "19.0.0"));
  P.findDOMNode = function (e) {
    var i = e._reactInternals;
    if (i === void 0)
      throw typeof e.render == "function"
        ? Error(s(188))
        : ((e = Object.keys(e).join(",")), Error(s(268, e)));
    return (
      (e = N(i)),
      (e = e !== null ? X(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var NE = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: q,
    findFiberByHostInstance: Qe,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var Nl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nl.isDisabled && Nl.supportsFiber)
      try {
        (Xt = Nl.inject(NE)), (wt = Nl);
      } catch (e) {}
  }
  return (
    (Js.createRoot = function (e, i) {
      if (!l(e)) throw Error(s(299));
      var r = !1,
        o = "",
        u = u1,
        p = c1,
        E = f1,
        B = null;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (r = !0),
          i.identifierPrefix !== void 0 && (o = i.identifierPrefix),
          i.onUncaughtError !== void 0 && (u = i.onUncaughtError),
          i.onCaughtError !== void 0 && (p = i.onCaughtError),
          i.onRecoverableError !== void 0 && (E = i.onRecoverableError),
          i.unstable_transitionCallbacks !== void 0 &&
            (B = i.unstable_transitionCallbacks)),
        (i = Nx(e, 1, !1, null, null, r, o, u, p, E, B, null)),
        (e[ye] = i.current),
        $0(e.nodeType === 8 ? e.parentNode : e),
        new pf(i)
      );
    }),
    (Js.hydrateRoot = function (e, i, r) {
      if (!l(e)) throw Error(s(299));
      var o = !1,
        u = "",
        p = u1,
        E = c1,
        B = f1,
        O = null,
        V = null;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (o = !0),
          r.identifierPrefix !== void 0 && (u = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (p = r.onUncaughtError),
          r.onCaughtError !== void 0 && (E = r.onCaughtError),
          r.onRecoverableError !== void 0 && (B = r.onRecoverableError),
          r.unstable_transitionCallbacks !== void 0 &&
            (O = r.unstable_transitionCallbacks),
          r.formState !== void 0 && (V = r.formState)),
        (i = Nx(e, 1, !0, i, r != null ? r : null, o, u, p, E, B, O, V)),
        (i.context = Ux(null)),
        (r = i.current),
        (o = En()),
        (u = ea(o)),
        (u.callback = null),
        ta(r, u, o),
        (i.current.lanes = o),
        Ai(i, o),
        hi(i),
        (e[ye] = i.current),
        $0(e),
        new Ll(i)
      );
    }),
    (Js.version = "19.0.0"),
    Js
  );
}
var sm;
function JE() {
  if (sm) return Ef.exports;
  sm = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  return t(), (Ef.exports = WE()), Ef.exports;
}
var IE = JE();
const UT = $u(IE);
var Qv = Zv();
const eb = $u(Qv),
  tb = Kv({ __proto__: null, default: eb }, [Qv]);
/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function lt() {
  return (
    (lt = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var s in a)
              Object.prototype.hasOwnProperty.call(a, s) && (t[s] = a[s]);
          }
          return t;
        }),
    lt.apply(this, arguments)
  );
}
var Bt;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(Bt || (Bt = {}));
const om = "popstate";
function nb(t) {
  t === void 0 && (t = {});
  function n(s, l) {
    let { pathname: c, search: f, hash: d } = s.location;
    return po(
      "",
      { pathname: c, search: f, hash: d },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
    );
  }
  function a(s, l) {
    return typeof l == "string" ? l : Ao(l);
  }
  return ab(n, a, null, t);
}
function qe(t, n) {
  if (t === !1 || t === null || typeof t == "undefined") throw new Error(n);
}
function rr(t, n) {
  if (!t) {
    typeof console != "undefined" && console.warn(n);
    try {
      throw new Error(n);
    } catch (a) {}
  }
}
function ib() {
  return Math.random().toString(36).substr(2, 8);
}
function lm(t, n) {
  return { usr: t.state, key: t.key, idx: n };
}
function po(t, n, a, s) {
  return (
    a === void 0 && (a = null),
    lt(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof n == "string" ? Ea(n) : n,
      { state: a, key: (n && n.key) || s || ib() },
    )
  );
}
function Ao(t) {
  let { pathname: n = "/", search: a = "", hash: s = "" } = t;
  return (
    a && a !== "?" && (n += a.charAt(0) === "?" ? a : "?" + a),
    s && s !== "#" && (n += s.charAt(0) === "#" ? s : "#" + s),
    n
  );
}
function Ea(t) {
  let n = {};
  if (t) {
    let a = t.indexOf("#");
    a >= 0 && ((n.hash = t.substr(a)), (t = t.substr(0, a)));
    let s = t.indexOf("?");
    s >= 0 && ((n.search = t.substr(s)), (t = t.substr(0, s))),
      t && (n.pathname = t);
  }
  return n;
}
function ab(t, n, a, s) {
  s === void 0 && (s = {});
  let { window: l = document.defaultView, v5Compat: c = !1 } = s,
    f = l.history,
    d = Bt.Pop,
    x = null,
    h = m();
  h == null && ((h = 0), f.replaceState(lt({}, f.state, { idx: h }), ""));
  function m() {
    return (f.state || { idx: null }).idx;
  }
  function y() {
    d = Bt.Pop;
    let A = m(),
      R = A == null ? null : A - h;
    (h = A), x && x({ action: d, location: S.location, delta: R });
  }
  function v(A, R) {
    d = Bt.Push;
    let C = po(S.location, A, R);
    h = m() + 1;
    let D = lm(C, h),
      T = S.createHref(C);
    try {
      f.pushState(D, "", T);
    } catch (w) {
      if (w instanceof DOMException && w.name === "DataCloneError") throw w;
      l.location.assign(T);
    }
    c && x && x({ action: d, location: S.location, delta: 1 });
  }
  function g(A, R) {
    d = Bt.Replace;
    let C = po(S.location, A, R);
    h = m();
    let D = lm(C, h),
      T = S.createHref(C);
    f.replaceState(D, "", T),
      c && x && x({ action: d, location: S.location, delta: 0 });
  }
  function b(A) {
    let R = l.location.origin !== "null" ? l.location.origin : l.location.href,
      C = typeof A == "string" ? A : Ao(A);
    return (
      (C = C.replace(/ $/, "%20")),
      qe(
        R,
        "No window.location.(origin|href) available to create URL for href: " +
          C,
      ),
      new URL(C, R)
    );
  }
  let S = {
    get action() {
      return d;
    },
    get location() {
      return t(l, f);
    },
    listen(A) {
      if (x) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(om, y),
        (x = A),
        () => {
          l.removeEventListener(om, y), (x = null);
        }
      );
    },
    createHref(A) {
      return n(l, A);
    },
    createURL: b,
    encodeLocation(A) {
      let R = b(A);
      return { pathname: R.pathname, search: R.search, hash: R.hash };
    },
    push: v,
    replace: g,
    go(A) {
      return f.go(A);
    },
  };
  return S;
}
var We;
(function (t) {
  (t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error");
})(We || (We = {}));
const rb = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function sb(t) {
  return t.index === !0;
}
function Vu(t, n, a, s) {
  return (
    a === void 0 && (a = []),
    s === void 0 && (s = {}),
    t.map((l, c) => {
      let f = [...a, String(c)],
        d = typeof l.id == "string" ? l.id : f.join("-");
      if (
        (qe(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route",
        ),
        qe(
          !s[d],
          'Found a route id collision on id "' +
            d +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        sb(l))
      ) {
        let x = lt({}, l, n(l), { id: d });
        return (s[d] = x), x;
      } else {
        let x = lt({}, l, n(l), { id: d, children: void 0 });
        return (
          (s[d] = x), l.children && (x.children = Vu(l.children, n, f, s)), x
        );
      }
    })
  );
}
function $a(t, n, a) {
  return a === void 0 && (a = "/"), Gl(t, n, a, !1);
}
function Gl(t, n, a, s) {
  let l = typeof n == "string" ? Ea(n) : n,
    c = So(l.pathname || "/", a);
  if (c == null) return null;
  let f = $v(t);
  lb(f);
  let d = null;
  for (let x = 0; d == null && x < f.length; ++x) {
    let h = gb(c);
    d = yb(f[x], h, s);
  }
  return d;
}
function ob(t, n) {
  let { route: a, pathname: s, params: l } = t;
  return { id: a.id, pathname: s, params: l, data: n[a.id], handle: a.handle };
}
function $v(t, n, a, s) {
  n === void 0 && (n = []), a === void 0 && (a = []), s === void 0 && (s = "");
  let l = (c, f, d) => {
    let x = {
      relativePath: d === void 0 ? c.path || "" : d,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: f,
      route: c,
    };
    x.relativePath.startsWith("/") &&
      (qe(
        x.relativePath.startsWith(s),
        'Absolute route path "' +
          x.relativePath +
          '" nested under path ' +
          ('"' + s + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (x.relativePath = x.relativePath.slice(s.length)));
    let h = ma([s, x.relativePath]),
      m = a.concat(x);
    c.children &&
      c.children.length > 0 &&
      (qe(
        c.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + h + '".'),
      ),
      $v(c.children, n, m, h)),
      !(c.path == null && !c.index) &&
        n.push({ path: h, score: xb(h, c.index), routesMeta: m });
  };
  return (
    t.forEach((c, f) => {
      var d;
      if (c.path === "" || !((d = c.path) != null && d.includes("?"))) l(c, f);
      else for (let x of Wv(c.path)) l(c, f, x);
    }),
    n
  );
}
function Wv(t) {
  let n = t.split("/");
  if (n.length === 0) return [];
  let [a, ...s] = n,
    l = a.endsWith("?"),
    c = a.replace(/\?$/, "");
  if (s.length === 0) return l ? [c, ""] : [c];
  let f = Wv(s.join("/")),
    d = [];
  return (
    d.push(...f.map((x) => (x === "" ? c : [c, x].join("/")))),
    l && d.push(...f),
    d.map((x) => (t.startsWith("/") && x === "" ? "/" : x))
  );
}
function lb(t) {
  t.sort((n, a) =>
    n.score !== a.score
      ? a.score - n.score
      : mb(
          n.routesMeta.map((s) => s.childrenIndex),
          a.routesMeta.map((s) => s.childrenIndex),
        ),
  );
}
const ub = /^:[\w-]+$/,
  cb = 3,
  fb = 2,
  hb = 1,
  db = 10,
  pb = -2,
  um = (t) => t === "*";
function xb(t, n) {
  let a = t.split("/"),
    s = a.length;
  return (
    a.some(um) && (s += pb),
    n && (s += fb),
    a
      .filter((l) => !um(l))
      .reduce((l, c) => l + (ub.test(c) ? cb : c === "" ? hb : db), s)
  );
}
function mb(t, n) {
  return t.length === n.length && t.slice(0, -1).every((s, l) => s === n[l])
    ? t[t.length - 1] - n[n.length - 1]
    : 0;
}
function yb(t, n, a) {
  a === void 0 && (a = !1);
  let { routesMeta: s } = t,
    l = {},
    c = "/",
    f = [];
  for (let d = 0; d < s.length; ++d) {
    let x = s[d],
      h = d === s.length - 1,
      m = c === "/" ? n : n.slice(c.length) || "/",
      y = cm(
        { path: x.relativePath, caseSensitive: x.caseSensitive, end: h },
        m,
      ),
      v = x.route;
    if (
      (!y &&
        h &&
        a &&
        !s[s.length - 1].route.index &&
        (y = cm(
          { path: x.relativePath, caseSensitive: x.caseSensitive, end: !1 },
          m,
        )),
      !y)
    )
      return null;
    Object.assign(l, y.params),
      f.push({
        params: l,
        pathname: ma([c, y.pathname]),
        pathnameBase: Sb(ma([c, y.pathnameBase])),
        route: v,
      }),
      y.pathnameBase !== "/" && (c = ma([c, y.pathnameBase]));
  }
  return f;
}
function cm(t, n) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [a, s] = vb(t.path, t.caseSensitive, t.end),
    l = n.match(a);
  if (!l) return null;
  let c = l[0],
    f = c.replace(/(.)\/+$/, "$1"),
    d = l.slice(1);
  return {
    params: s.reduce((h, m, y) => {
      let { paramName: v, isOptional: g } = m;
      if (v === "*") {
        let S = d[y] || "";
        f = c.slice(0, c.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const b = d[y];
      return (
        g && !b ? (h[v] = void 0) : (h[v] = (b || "").replace(/%2F/g, "/")), h
      );
    }, {}),
    pathname: c,
    pathnameBase: f,
    pattern: t,
  };
}
function vb(t, n, a) {
  n === void 0 && (n = !1),
    a === void 0 && (a = !0),
    rr(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'),
    );
  let s = [],
    l =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (f, d, x) => (
            s.push({ paramName: d, isOptional: x != null }),
            x ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    t.endsWith("*")
      ? (s.push({ paramName: "*" }),
        (l += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
        ? (l += "\\/*$")
        : t !== "" && t !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, n ? void 0 : "i"), s]
  );
}
function gb(t) {
  try {
    return t
      .split("/")
      .map((n) => decodeURIComponent(n).replace(/\//g, "%2F"))
      .join("/");
  } catch (n) {
    return (
      rr(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + n + ")."),
      ),
      t
    );
  }
}
function So(t, n) {
  if (n === "/") return t;
  if (!t.toLowerCase().startsWith(n.toLowerCase())) return null;
  let a = n.endsWith("/") ? n.length - 1 : n.length,
    s = t.charAt(a);
  return s && s !== "/" ? null : t.slice(a) || "/";
}
const Eb = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  bb = (t) => Eb.test(t);
function Ab(t, n) {
  n === void 0 && (n = "/");
  let {
      pathname: a,
      search: s = "",
      hash: l = "",
    } = typeof t == "string" ? Ea(t) : t,
    c;
  if (a)
    if (bb(a)) c = a;
    else {
      if (a.includes("//")) {
        let f = a;
        (a = a.replace(/\/\/+/g, "/")),
          rr(
            !1,
            "Pathnames cannot have embedded double slashes - normalizing " +
              (f + " -> " + a),
          );
      }
      a.startsWith("/") ? (c = fm(a.substring(1), "/")) : (c = fm(a, n));
    }
  else c = n;
  return { pathname: c, search: Cb(s), hash: Db(l) };
}
function fm(t, n) {
  let a = n.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((l) => {
      l === ".." ? a.length > 1 && a.pop() : l !== "." && a.push(l);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function Cf(t, n, a, s) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." +
      n +
      "` field [" +
      JSON.stringify(s) +
      "].  Please separate it out to the ") +
    ("`to." + a + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Jv(t) {
  return t.filter(
    (n, a) => a === 0 || (n.route.path && n.route.path.length > 0),
  );
}
function Iv(t, n) {
  let a = Jv(t);
  return n
    ? a.map((s, l) => (l === a.length - 1 ? s.pathname : s.pathnameBase))
    : a.map((s) => s.pathnameBase);
}
function eg(t, n, a, s) {
  s === void 0 && (s = !1);
  let l;
  typeof t == "string"
    ? (l = Ea(t))
    : ((l = lt({}, t)),
      qe(
        !l.pathname || !l.pathname.includes("?"),
        Cf("?", "pathname", "search", l),
      ),
      qe(
        !l.pathname || !l.pathname.includes("#"),
        Cf("#", "pathname", "hash", l),
      ),
      qe(!l.search || !l.search.includes("#"), Cf("#", "search", "hash", l)));
  let c = t === "" || l.pathname === "",
    f = c ? "/" : l.pathname,
    d;
  if (f == null) d = a;
  else {
    let y = n.length - 1;
    if (!s && f.startsWith("..")) {
      let v = f.split("/");
      for (; v[0] === ".."; ) v.shift(), (y -= 1);
      l.pathname = v.join("/");
    }
    d = y >= 0 ? n[y] : "/";
  }
  let x = Ab(l, d),
    h = f && f !== "/" && f.endsWith("/"),
    m = (c || f === ".") && a.endsWith("/");
  return !x.pathname.endsWith("/") && (h || m) && (x.pathname += "/"), x;
}
const ma = (t) => t.join("/").replace(/\/\/+/g, "/"),
  Sb = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Cb = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  Db = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
class qu {
  constructor(n, a, s, l) {
    l === void 0 && (l = !1),
      (this.status = n),
      (this.statusText = a || ""),
      (this.internal = l),
      s instanceof Error
        ? ((this.data = s.toString()), (this.error = s))
        : (this.data = s);
  }
}
function xo(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const tg = ["post", "put", "patch", "delete"],
  Bb = new Set(tg),
  _b = ["get", ...tg],
  Tb = new Set(_b),
  Rb = new Set([301, 302, 303, 307, 308]),
  wb = new Set([307, 308]),
  Df = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Mb = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Is = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  wh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ob = (t) => ({ hasErrorBoundary: !!t.hasErrorBoundary }),
  ng = "remix-router-transitions";
function Fb(t) {
  const n = t.window
      ? t.window
      : typeof window != "undefined"
        ? window
        : void 0,
    a =
      typeof n != "undefined" &&
      typeof n.document != "undefined" &&
      typeof n.document.createElement != "undefined",
    s = !a;
  qe(
    t.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let l;
  if (t.mapRouteProperties) l = t.mapRouteProperties;
  else if (t.detectErrorBoundary) {
    let U = t.detectErrorBoundary;
    l = (H) => ({ hasErrorBoundary: U(H) });
  } else l = Ob;
  let c = {},
    f = Vu(t.routes, l, void 0, c),
    d,
    x = t.basename || "/",
    h = t.dataStrategy || Ub,
    m = t.patchRoutesOnNavigation,
    y = lt(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      t.future,
    ),
    v = null,
    g = new Set(),
    b = null,
    S = null,
    A = null,
    R = t.hydrationData != null,
    C = $a(f, t.history.location, x),
    D = !1,
    T = null;
  if (C == null && !m) {
    let U = un(404, { pathname: t.history.location.pathname }),
      { matches: H, route: Z } = Am(f);
    (C = H), (T = { [Z.id]: U });
  }
  C &&
    !t.hydrationData &&
    Ei(C, f, t.history.location.pathname).active &&
    (C = null);
  let w;
  if (C)
    if (C.some((U) => U.route.lazy)) w = !1;
    else if (!C.some((U) => U.route.loader)) w = !0;
    else if (y.v7_partialHydration) {
      let U = t.hydrationData ? t.hydrationData.loaderData : null,
        H = t.hydrationData ? t.hydrationData.errors : null;
      if (H) {
        let Z = C.findIndex((re) => H[re.route.id] !== void 0);
        w = C.slice(0, Z + 1).every((re) => !$f(re.route, U, H));
      } else w = C.every((Z) => !$f(Z.route, U, H));
    } else w = t.hydrationData != null;
  else if (((w = !1), (C = []), y.v7_partialHydration)) {
    let U = Ei(null, f, t.history.location.pathname);
    U.active && U.matches && ((D = !0), (C = U.matches));
  }
  let z,
    _ = {
      historyAction: t.history.action,
      location: t.history.location,
      matches: C,
      initialized: w,
      navigation: Df,
      restoreScrollPosition: t.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (t.hydrationData && t.hydrationData.loaderData) || {},
      actionData: (t.hydrationData && t.hydrationData.actionData) || null,
      errors: (t.hydrationData && t.hydrationData.errors) || T,
      fetchers: new Map(),
      blockers: new Map(),
    },
    L = Bt.Pop,
    q = !1,
    M,
    j = !1,
    J = new Map(),
    I = null,
    le = !1,
    ce = !1,
    ee = [],
    oe = new Set(),
    ie = new Map(),
    ve = 0,
    F = -1,
    N = new Map(),
    X = new Set(),
    K = new Map(),
    P = new Map(),
    pe = new Set(),
    xe = new Map(),
    Fe = new Map(),
    me;
  function Je() {
    if (
      ((v = t.history.listen((U) => {
        let { action: H, location: Z, delta: re } = U;
        if (me) {
          me(), (me = void 0);
          return;
        }
        rr(
          Fe.size === 0 || re != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let fe = Da({
          currentLocation: _.location,
          nextLocation: Z,
          historyAction: H,
        });
        if (fe && re != null) {
          let Ae = new Promise((Ce) => {
            me = Ce;
          });
          t.history.go(re * -1),
            Pi(fe, {
              state: "blocked",
              location: Z,
              proceed() {
                Pi(fe, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: Z,
                }),
                  Ae.then(() => t.history.go(re));
              },
              reset() {
                let Ce = new Map(_.blockers);
                Ce.set(fe, Is), tt({ blockers: Ce });
              },
            });
          return;
        }
        return bt(H, Z);
      })),
      a)
    ) {
      Wb(n, J);
      let U = () => Jb(n, J);
      n.addEventListener("pagehide", U),
        (I = () => n.removeEventListener("pagehide", U));
    }
    return _.initialized || bt(Bt.Pop, _.location, { initialHydration: !0 }), z;
  }
  function Xe() {
    v && v(),
      I && I(),
      g.clear(),
      M && M.abort(),
      _.fetchers.forEach((U, H) => dn(H)),
      _.blockers.forEach((U, H) => Ca(H));
  }
  function Pt(U) {
    return g.add(U), () => g.delete(U);
  }
  function tt(U, H) {
    H === void 0 && (H = {}), (_ = lt({}, _, U));
    let Z = [],
      re = [];
    y.v7_fetcherPersist &&
      _.fetchers.forEach((fe, Ae) => {
        fe.state === "idle" && (pe.has(Ae) ? re.push(Ae) : Z.push(Ae));
      }),
      pe.forEach((fe) => {
        !_.fetchers.has(fe) && !ie.has(fe) && re.push(fe);
      }),
      [...g].forEach((fe) =>
        fe(_, {
          deletedFetchers: re,
          viewTransitionOpts: H.viewTransitionOpts,
          flushSync: H.flushSync === !0,
        }),
      ),
      y.v7_fetcherPersist
        ? (Z.forEach((fe) => _.fetchers.delete(fe)), re.forEach((fe) => dn(fe)))
        : re.forEach((fe) => pe.delete(fe));
  }
  function nt(U, H, Z) {
    var re, fe;
    let { flushSync: Ae } = Z === void 0 ? {} : Z,
      Ce =
        _.actionData != null &&
        _.navigation.formMethod != null &&
        ti(_.navigation.formMethod) &&
        _.navigation.state === "loading" &&
        ((re = U.state) == null ? void 0 : re._isRedirect) !== !0,
      he;
    H.actionData
      ? Object.keys(H.actionData).length > 0
        ? (he = H.actionData)
        : (he = null)
      : Ce
        ? (he = _.actionData)
        : (he = null);
    let de = H.loaderData
        ? Em(_.loaderData, H.loaderData, H.matches || [], H.errors)
        : _.loaderData,
      ye = _.blockers;
    ye.size > 0 && ((ye = new Map(ye)), ye.forEach((Ue, At) => ye.set(At, Is)));
    let Ee =
      q === !0 ||
      (_.navigation.formMethod != null &&
        ti(_.navigation.formMethod) &&
        ((fe = U.state) == null ? void 0 : fe._isRedirect) !== !0);
    d && ((f = d), (d = void 0)),
      le ||
        L === Bt.Pop ||
        (L === Bt.Push
          ? t.history.push(U, U.state)
          : L === Bt.Replace && t.history.replace(U, U.state));
    let Re;
    if (L === Bt.Pop) {
      let Ue = J.get(_.location.pathname);
      Ue && Ue.has(U.pathname)
        ? (Re = { currentLocation: _.location, nextLocation: U })
        : J.has(U.pathname) &&
          (Re = { currentLocation: U, nextLocation: _.location });
    } else if (j) {
      let Ue = J.get(_.location.pathname);
      Ue
        ? Ue.add(U.pathname)
        : ((Ue = new Set([U.pathname])), J.set(_.location.pathname, Ue)),
        (Re = { currentLocation: _.location, nextLocation: U });
    }
    tt(
      lt({}, H, {
        actionData: he,
        loaderData: de,
        historyAction: L,
        location: U,
        initialized: !0,
        navigation: Df,
        revalidation: "idle",
        restoreScrollPosition: Ba(U, H.matches || _.matches),
        preventScrollReset: Ee,
        blockers: ye,
      }),
      { viewTransitionOpts: Re, flushSync: Ae === !0 },
    ),
      (L = Bt.Pop),
      (q = !1),
      (j = !1),
      (le = !1),
      (ce = !1),
      (ee = []);
  }
  async function vt(U, H) {
    if (typeof U == "number") {
      t.history.go(U);
      return;
    }
    let Z = Qf(
        _.location,
        _.matches,
        x,
        y.v7_prependBasename,
        U,
        y.v7_relativeSplatPath,
        H == null ? void 0 : H.fromRouteId,
        H == null ? void 0 : H.relative,
      ),
      {
        path: re,
        submission: fe,
        error: Ae,
      } = hm(y.v7_normalizeFormMethod, !1, Z, H),
      Ce = _.location,
      he = po(_.location, re, H && H.state);
    he = lt({}, he, t.history.encodeLocation(he));
    let de = H && H.replace != null ? H.replace : void 0,
      ye = Bt.Push;
    de === !0
      ? (ye = Bt.Replace)
      : de === !1 ||
        (fe != null &&
          ti(fe.formMethod) &&
          fe.formAction === _.location.pathname + _.location.search &&
          (ye = Bt.Replace));
    let Ee =
        H && "preventScrollReset" in H ? H.preventScrollReset === !0 : void 0,
      Re = (H && H.flushSync) === !0,
      Ue = Da({ currentLocation: Ce, nextLocation: he, historyAction: ye });
    if (Ue) {
      Pi(Ue, {
        state: "blocked",
        location: he,
        proceed() {
          Pi(Ue, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: he,
          }),
            vt(U, H);
        },
        reset() {
          let At = new Map(_.blockers);
          At.set(Ue, Is), tt({ blockers: At });
        },
      });
      return;
    }
    return await bt(ye, he, {
      submission: fe,
      pendingError: Ae,
      preventScrollReset: Ee,
      replace: H && H.replace,
      enableViewTransition: H && H.viewTransition,
      flushSync: Re,
    });
  }
  function Pn() {
    if (
      (Dn(),
      tt({ revalidation: "loading" }),
      _.navigation.state !== "submitting")
    ) {
      if (_.navigation.state === "idle") {
        bt(_.historyAction, _.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      bt(L || _.historyAction, _.navigation.location, {
        overrideNavigation: _.navigation,
        enableViewTransition: j === !0,
      });
    }
  }
  async function bt(U, H, Z) {
    M && M.abort(),
      (M = null),
      (L = U),
      (le = (Z && Z.startUninterruptedRevalidation) === !0),
      gi(_.location, _.matches),
      (q = (Z && Z.preventScrollReset) === !0),
      (j = (Z && Z.enableViewTransition) === !0);
    let re = d || f,
      fe = Z && Z.overrideNavigation,
      Ae =
        Z != null &&
        Z.initialHydration &&
        _.matches &&
        _.matches.length > 0 &&
        !D
          ? _.matches
          : $a(re, H, x),
      Ce = (Z && Z.flushSync) === !0;
    if (
      Ae &&
      _.initialized &&
      !ce &&
      Pb(_.location, H) &&
      !(Z && Z.submission && ti(Z.submission.formMethod))
    ) {
      nt(H, { matches: Ae }, { flushSync: Ce });
      return;
    }
    let he = Ei(Ae, re, H.pathname);
    if ((he.active && he.matches && (Ae = he.matches), !Ae)) {
      let { error: Ge, notFoundMatches: ke, route: Qe } = oi(H.pathname);
      nt(
        H,
        { matches: ke, loaderData: {}, errors: { [Qe.id]: Ge } },
        { flushSync: Ce },
      );
      return;
    }
    M = new AbortController();
    let de = jr(t.history, H, M.signal, Z && Z.submission),
      ye;
    if (Z && Z.pendingError)
      ye = [Wa(Ae).route.id, { type: We.error, error: Z.pendingError }];
    else if (Z && Z.submission && ti(Z.submission.formMethod)) {
      let Ge = await ai(de, H, Z.submission, Ae, he.active, {
        replace: Z.replace,
        flushSync: Ce,
      });
      if (Ge.shortCircuited) return;
      if (Ge.pendingActionResult) {
        let [ke, Qe] = Ge.pendingActionResult;
        if (bn(Qe) && xo(Qe.error) && Qe.error.status === 404) {
          (M = null),
            nt(H, {
              matches: Ge.matches,
              loaderData: {},
              errors: { [ke]: Qe.error },
            });
          return;
        }
      }
      (Ae = Ge.matches || Ae),
        (ye = Ge.pendingActionResult),
        (fe = Bf(H, Z.submission)),
        (Ce = !1),
        (he.active = !1),
        (de = jr(t.history, de.url, de.signal));
    }
    let {
      shortCircuited: Ee,
      matches: Re,
      loaderData: Ue,
      errors: At,
    } = await An(
      de,
      H,
      Ae,
      he.active,
      fe,
      Z && Z.submission,
      Z && Z.fetcherSubmission,
      Z && Z.replace,
      Z && Z.initialHydration === !0,
      Ce,
      ye,
    );
    Ee ||
      ((M = null),
      nt(H, lt({ matches: Re || Ae }, bm(ye), { loaderData: Ue, errors: At })));
  }
  async function ai(U, H, Z, re, fe, Ae) {
    Ae === void 0 && (Ae = {}), Dn();
    let Ce = Qb(H, Z);
    if ((tt({ navigation: Ce }, { flushSync: Ae.flushSync === !0 }), fe)) {
      let ye = await bi(re, H.pathname, U.signal);
      if (ye.type === "aborted") return { shortCircuited: !0 };
      if (ye.type === "error") {
        let Ee = Wa(ye.partialMatches).route.id;
        return {
          matches: ye.partialMatches,
          pendingActionResult: [Ee, { type: We.error, error: ye.error }],
        };
      } else if (ye.matches) re = ye.matches;
      else {
        let { notFoundMatches: Ee, error: Re, route: Ue } = oi(H.pathname);
        return {
          matches: Ee,
          pendingActionResult: [Ue.id, { type: We.error, error: Re }],
        };
      }
    }
    let he,
      de = ro(re, H);
    if (!de.route.action && !de.route.lazy)
      he = {
        type: We.error,
        error: un(405, {
          method: U.method,
          pathname: H.pathname,
          routeId: de.route.id,
        }),
      };
    else if (
      ((he = (await si("action", _, U, [de], re, null))[de.route.id]),
      U.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Ja(he)) {
      let ye;
      return (
        Ae && Ae.replace != null
          ? (ye = Ae.replace)
          : (ye =
              ym(he.response.headers.get("Location"), new URL(U.url), x) ===
              _.location.pathname + _.location.search),
        await ct(U, he, !0, { submission: Z, replace: ye }),
        { shortCircuited: !0 }
      );
    }
    if (xa(he)) throw un(400, { type: "defer-action" });
    if (bn(he)) {
      let ye = Wa(re, de.route.id);
      return (
        (Ae && Ae.replace) !== !0 && (L = Bt.Push),
        { matches: re, pendingActionResult: [ye.route.id, he] }
      );
    }
    return { matches: re, pendingActionResult: [de.route.id, he] };
  }
  async function An(U, H, Z, re, fe, Ae, Ce, he, de, ye, Ee) {
    let Re = fe || Bf(H, Ae),
      Ue = Ae || Ce || Cm(Re),
      At = !le && (!y.v7_partialHydration || !de);
    if (re) {
      if (At) {
        let st = ri(Ee);
        tt(lt({ navigation: Re }, st !== void 0 ? { actionData: st } : {}), {
          flushSync: ye,
        });
      }
      let Pe = await bi(Z, H.pathname, U.signal);
      if (Pe.type === "aborted") return { shortCircuited: !0 };
      if (Pe.type === "error") {
        let st = Wa(Pe.partialMatches).route.id;
        return {
          matches: Pe.partialMatches,
          loaderData: {},
          errors: { [st]: Pe.error },
        };
      } else if (Pe.matches) Z = Pe.matches;
      else {
        let { error: st, notFoundMatches: Si, route: _a } = oi(H.pathname);
        return { matches: Si, loaderData: {}, errors: { [_a.id]: st } };
      }
    }
    let Ge = d || f,
      [ke, Qe] = pm(
        t.history,
        _,
        Z,
        Ue,
        H,
        y.v7_partialHydration && de === !0,
        y.v7_skipActionErrorRevalidation,
        ce,
        ee,
        oe,
        pe,
        K,
        X,
        Ge,
        x,
        Ee,
      );
    if (
      (Xn(
        (Pe) =>
          !(Z && Z.some((st) => st.route.id === Pe)) ||
          (ke && ke.some((st) => st.route.id === Pe)),
      ),
      (F = ++ve),
      ke.length === 0 && Qe.length === 0)
    ) {
      let Pe = Sa();
      return (
        nt(
          H,
          lt(
            {
              matches: Z,
              loaderData: {},
              errors: Ee && bn(Ee[1]) ? { [Ee[0]]: Ee[1].error } : null,
            },
            bm(Ee),
            Pe ? { fetchers: new Map(_.fetchers) } : {},
          ),
          { flushSync: ye },
        ),
        { shortCircuited: !0 }
      );
    }
    if (At) {
      let Pe = {};
      if (!re) {
        Pe.navigation = Re;
        let st = ri(Ee);
        st !== void 0 && (Pe.actionData = st);
      }
      Qe.length > 0 && (Pe.fetchers = Yn(Qe)), tt(Pe, { flushSync: ye });
    }
    Qe.forEach((Pe) => {
      Xt(Pe.key), Pe.controller && ie.set(Pe.key, Pe.controller);
    });
    let xn = () => Qe.forEach((Pe) => Xt(Pe.key));
    M && M.signal.addEventListener("abort", xn);
    let { loaderResults: Kn, fetcherResults: Gt } = await Cn(_, Z, ke, Qe, U);
    if (U.signal.aborted) return { shortCircuited: !0 };
    M && M.signal.removeEventListener("abort", xn),
      Qe.forEach((Pe) => ie.delete(Pe.key));
    let $e = kl(Kn);
    if ($e)
      return (
        await ct(U, $e.result, !0, { replace: he }), { shortCircuited: !0 }
      );
    if ((($e = kl(Gt)), $e))
      return (
        X.add($e.key),
        await ct(U, $e.result, !0, { replace: he }),
        { shortCircuited: !0 }
      );
    let { loaderData: ur, errors: Xi } = gm(_, Z, Kn, Ee, Qe, Gt, xe);
    xe.forEach((Pe, st) => {
      Pe.subscribe((Si) => {
        (Si || Pe.done) && xe.delete(st);
      });
    }),
      y.v7_partialHydration && de && _.errors && (Xi = lt({}, _.errors, Xi));
    let Jt = Sa(),
      Zn = pn(F),
      an = Jt || Zn || Qe.length > 0;
    return lt(
      { matches: Z, loaderData: ur, errors: Xi },
      an ? { fetchers: new Map(_.fetchers) } : {},
    );
  }
  function ri(U) {
    if (U && !bn(U[1])) return { [U[0]]: U[1].data };
    if (_.actionData)
      return Object.keys(_.actionData).length === 0 ? null : _.actionData;
  }
  function Yn(U) {
    return (
      U.forEach((H) => {
        let Z = _.fetchers.get(H.key),
          re = eo(void 0, Z ? Z.data : void 0);
        _.fetchers.set(H.key, re);
      }),
      new Map(_.fetchers)
    );
  }
  function Ut(U, H, Z, re) {
    if (s)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    Xt(U);
    let fe = (re && re.flushSync) === !0,
      Ae = d || f,
      Ce = Qf(
        _.location,
        _.matches,
        x,
        y.v7_prependBasename,
        Z,
        y.v7_relativeSplatPath,
        H,
        re == null ? void 0 : re.relative,
      ),
      he = $a(Ae, Ce, x),
      de = Ei(he, Ae, Ce);
    if ((de.active && de.matches && (he = de.matches), !he)) {
      nn(U, H, un(404, { pathname: Ce }), { flushSync: fe });
      return;
    }
    let {
      path: ye,
      submission: Ee,
      error: Re,
    } = hm(y.v7_normalizeFormMethod, !0, Ce, re);
    if (Re) {
      nn(U, H, Re, { flushSync: fe });
      return;
    }
    let Ue = ro(he, ye),
      At = (re && re.preventScrollReset) === !0;
    if (Ee && ti(Ee.formMethod)) {
      Yt(U, H, ye, Ue, he, de.active, fe, At, Ee);
      return;
    }
    K.set(U, { routeId: H, path: ye }),
      Sn(U, H, ye, Ue, he, de.active, fe, At, Ee);
  }
  async function Yt(U, H, Z, re, fe, Ae, Ce, he, de) {
    Dn(), K.delete(U);
    function ye(ot) {
      if (!ot.route.action && !ot.route.lazy) {
        let Qn = un(405, { method: de.formMethod, pathname: Z, routeId: H });
        return nn(U, H, Qn, { flushSync: Ce }), !0;
      }
      return !1;
    }
    if (!Ae && ye(re)) return;
    let Ee = _.fetchers.get(U);
    Wt(U, $b(de, Ee), { flushSync: Ce });
    let Re = new AbortController(),
      Ue = jr(t.history, Z, Re.signal, de);
    if (Ae) {
      let ot = await bi(fe, new URL(Ue.url).pathname, Ue.signal, U);
      if (ot.type === "aborted") return;
      if (ot.type === "error") {
        nn(U, H, ot.error, { flushSync: Ce });
        return;
      } else if (ot.matches) {
        if (((fe = ot.matches), (re = ro(fe, Z)), ye(re))) return;
      } else {
        nn(U, H, un(404, { pathname: Z }), { flushSync: Ce });
        return;
      }
    }
    ie.set(U, Re);
    let At = ve,
      ke = (await si("action", _, Ue, [re], fe, U))[re.route.id];
    if (Ue.signal.aborted) {
      ie.get(U) === Re && ie.delete(U);
      return;
    }
    if (y.v7_fetcherPersist && pe.has(U)) {
      if (Ja(ke) || bn(ke)) {
        Wt(U, da(void 0));
        return;
      }
    } else {
      if (Ja(ke))
        if ((ie.delete(U), F > At)) {
          Wt(U, da(void 0));
          return;
        } else
          return (
            X.add(U),
            Wt(U, eo(de)),
            ct(Ue, ke, !1, { fetcherSubmission: de, preventScrollReset: he })
          );
      if (bn(ke)) {
        nn(U, H, ke.error);
        return;
      }
    }
    if (xa(ke)) throw un(400, { type: "defer-action" });
    let Qe = _.navigation.location || _.location,
      xn = jr(t.history, Qe, Re.signal),
      Kn = d || f,
      Gt =
        _.navigation.state !== "idle"
          ? $a(Kn, _.navigation.location, x)
          : _.matches;
    qe(Gt, "Didn't find any matches after fetcher action");
    let $e = ++ve;
    N.set(U, $e);
    let ur = eo(de, ke.data);
    _.fetchers.set(U, ur);
    let [Xi, Jt] = pm(
      t.history,
      _,
      Gt,
      de,
      Qe,
      !1,
      y.v7_skipActionErrorRevalidation,
      ce,
      ee,
      oe,
      pe,
      K,
      X,
      Kn,
      x,
      [re.route.id, ke],
    );
    Jt.filter((ot) => ot.key !== U).forEach((ot) => {
      let Qn = ot.key,
        Bn = _.fetchers.get(Qn),
        rn = eo(void 0, Bn ? Bn.data : void 0);
      _.fetchers.set(Qn, rn),
        Xt(Qn),
        ot.controller && ie.set(Qn, ot.controller);
    }),
      tt({ fetchers: new Map(_.fetchers) });
    let Zn = () => Jt.forEach((ot) => Xt(ot.key));
    Re.signal.addEventListener("abort", Zn);
    let { loaderResults: an, fetcherResults: Pe } = await Cn(_, Gt, Xi, Jt, xn);
    if (Re.signal.aborted) return;
    Re.signal.removeEventListener("abort", Zn),
      N.delete(U),
      ie.delete(U),
      Jt.forEach((ot) => ie.delete(ot.key));
    let st = kl(an);
    if (st) return ct(xn, st.result, !1, { preventScrollReset: he });
    if (((st = kl(Pe)), st))
      return X.add(st.key), ct(xn, st.result, !1, { preventScrollReset: he });
    let { loaderData: Si, errors: _a } = gm(_, Gt, an, void 0, Jt, Pe, xe);
    if (_.fetchers.has(U)) {
      let ot = da(ke.data);
      _.fetchers.set(U, ot);
    }
    pn($e),
      _.navigation.state === "loading" && $e > F
        ? (qe(L, "Expected pending action"),
          M && M.abort(),
          nt(_.navigation.location, {
            matches: Gt,
            loaderData: Si,
            errors: _a,
            fetchers: new Map(_.fetchers),
          }))
        : (tt({
            errors: _a,
            loaderData: Em(_.loaderData, Si, Gt, _a),
            fetchers: new Map(_.fetchers),
          }),
          (ce = !1));
  }
  async function Sn(U, H, Z, re, fe, Ae, Ce, he, de) {
    let ye = _.fetchers.get(U);
    Wt(U, eo(de, ye ? ye.data : void 0), { flushSync: Ce });
    let Ee = new AbortController(),
      Re = jr(t.history, Z, Ee.signal);
    if (Ae) {
      let ke = await bi(fe, new URL(Re.url).pathname, Re.signal, U);
      if (ke.type === "aborted") return;
      if (ke.type === "error") {
        nn(U, H, ke.error, { flushSync: Ce });
        return;
      } else if (ke.matches) (fe = ke.matches), (re = ro(fe, Z));
      else {
        nn(U, H, un(404, { pathname: Z }), { flushSync: Ce });
        return;
      }
    }
    ie.set(U, Ee);
    let Ue = ve,
      Ge = (await si("loader", _, Re, [re], fe, U))[re.route.id];
    if (
      (xa(Ge) && (Ge = (await Mh(Ge, Re.signal, !0)) || Ge),
      ie.get(U) === Ee && ie.delete(U),
      !Re.signal.aborted)
    ) {
      if (pe.has(U)) {
        Wt(U, da(void 0));
        return;
      }
      if (Ja(Ge))
        if (F > Ue) {
          Wt(U, da(void 0));
          return;
        } else {
          X.add(U), await ct(Re, Ge, !1, { preventScrollReset: he });
          return;
        }
      if (bn(Ge)) {
        nn(U, H, Ge.error);
        return;
      }
      qe(!xa(Ge), "Unhandled fetcher deferred data"), Wt(U, da(Ge.data));
    }
  }
  async function ct(U, H, Z, re) {
    let {
      submission: fe,
      fetcherSubmission: Ae,
      preventScrollReset: Ce,
      replace: he,
    } = re === void 0 ? {} : re;
    H.response.headers.has("X-Remix-Revalidate") && (ce = !0);
    let de = H.response.headers.get("Location");
    qe(de, "Expected a Location header on the redirect Response"),
      (de = ym(de, new URL(U.url), x));
    let ye = po(_.location, de, { _isRedirect: !0 });
    if (a) {
      let ke = !1;
      if (H.response.headers.has("X-Remix-Reload-Document")) ke = !0;
      else if (wh.test(de)) {
        const Qe = t.history.createURL(de);
        ke = Qe.origin !== n.location.origin || So(Qe.pathname, x) == null;
      }
      if (ke) {
        he ? n.location.replace(de) : n.location.assign(de);
        return;
      }
    }
    M = null;
    let Ee =
        he === !0 || H.response.headers.has("X-Remix-Replace")
          ? Bt.Replace
          : Bt.Push,
      { formMethod: Re, formAction: Ue, formEncType: At } = _.navigation;
    !fe && !Ae && Re && Ue && At && (fe = Cm(_.navigation));
    let Ge = fe || Ae;
    if (wb.has(H.response.status) && Ge && ti(Ge.formMethod))
      await bt(Ee, ye, {
        submission: lt({}, Ge, { formAction: de }),
        preventScrollReset: Ce || q,
        enableViewTransition: Z ? j : void 0,
      });
    else {
      let ke = Bf(ye, fe);
      await bt(Ee, ye, {
        overrideNavigation: ke,
        fetcherSubmission: Ae,
        preventScrollReset: Ce || q,
        enableViewTransition: Z ? j : void 0,
      });
    }
  }
  async function si(U, H, Z, re, fe, Ae) {
    let Ce,
      he = {};
    try {
      Ce = await kb(h, U, H, Z, re, fe, Ae, c, l);
    } catch (de) {
      return (
        re.forEach((ye) => {
          he[ye.route.id] = { type: We.error, error: de };
        }),
        he
      );
    }
    for (let [de, ye] of Object.entries(Ce))
      if (Yb(ye)) {
        let Ee = ye.result;
        he[de] = {
          type: We.redirect,
          response: qb(Ee, Z, de, fe, x, y.v7_relativeSplatPath),
        };
      } else he[de] = await Vb(ye);
    return he;
  }
  async function Cn(U, H, Z, re, fe) {
    let Ae = U.matches,
      Ce = si("loader", U, fe, Z, H, null),
      he = Promise.all(
        re.map(async (Ee) => {
          if (Ee.matches && Ee.match && Ee.controller) {
            let Ue = (
              await si(
                "loader",
                U,
                jr(t.history, Ee.path, Ee.controller.signal),
                [Ee.match],
                Ee.matches,
                Ee.key,
              )
            )[Ee.match.route.id];
            return { [Ee.key]: Ue };
          } else
            return Promise.resolve({
              [Ee.key]: {
                type: We.error,
                error: un(404, { pathname: Ee.path }),
              },
            });
        }),
      ),
      de = await Ce,
      ye = (await he).reduce((Ee, Re) => Object.assign(Ee, Re), {});
    return (
      await Promise.all([
        Kb(H, de, fe.signal, Ae, U.loaderData),
        Zb(H, ye, re),
      ]),
      { loaderResults: de, fetcherResults: ye }
    );
  }
  function Dn() {
    (ce = !0),
      ee.push(...Xn()),
      K.forEach((U, H) => {
        ie.has(H) && oe.add(H), Xt(H);
      });
  }
  function Wt(U, H, Z) {
    Z === void 0 && (Z = {}),
      _.fetchers.set(U, H),
      tt(
        { fetchers: new Map(_.fetchers) },
        { flushSync: (Z && Z.flushSync) === !0 },
      );
  }
  function nn(U, H, Z, re) {
    re === void 0 && (re = {});
    let fe = Wa(_.matches, H);
    dn(U),
      tt(
        { errors: { [fe.route.id]: Z }, fetchers: new Map(_.fetchers) },
        { flushSync: (re && re.flushSync) === !0 },
      );
  }
  function ji(U) {
    return (
      P.set(U, (P.get(U) || 0) + 1),
      pe.has(U) && pe.delete(U),
      _.fetchers.get(U) || Mb
    );
  }
  function dn(U) {
    let H = _.fetchers.get(U);
    ie.has(U) && !(H && H.state === "loading" && N.has(U)) && Xt(U),
      K.delete(U),
      N.delete(U),
      X.delete(U),
      y.v7_fetcherPersist && pe.delete(U),
      oe.delete(U),
      _.fetchers.delete(U);
  }
  function yi(U) {
    let H = (P.get(U) || 0) - 1;
    H <= 0
      ? (P.delete(U), pe.add(U), y.v7_fetcherPersist || dn(U))
      : P.set(U, H),
      tt({ fetchers: new Map(_.fetchers) });
  }
  function Xt(U) {
    let H = ie.get(U);
    H && (H.abort(), ie.delete(U));
  }
  function wt(U) {
    for (let H of U) {
      let Z = ji(H),
        re = da(Z.data);
      _.fetchers.set(H, re);
    }
  }
  function Sa() {
    let U = [],
      H = !1;
    for (let Z of X) {
      let re = _.fetchers.get(Z);
      qe(re, "Expected fetcher: " + Z),
        re.state === "loading" && (X.delete(Z), U.push(Z), (H = !0));
    }
    return wt(U), H;
  }
  function pn(U) {
    let H = [];
    for (let [Z, re] of N)
      if (re < U) {
        let fe = _.fetchers.get(Z);
        qe(fe, "Expected fetcher: " + Z),
          fe.state === "loading" && (Xt(Z), N.delete(Z), H.push(Z));
      }
    return wt(H), H.length > 0;
  }
  function kt(U, H) {
    let Z = _.blockers.get(U) || Is;
    return Fe.get(U) !== H && Fe.set(U, H), Z;
  }
  function Ca(U) {
    _.blockers.delete(U), Fe.delete(U);
  }
  function Pi(U, H) {
    let Z = _.blockers.get(U) || Is;
    qe(
      (Z.state === "unblocked" && H.state === "blocked") ||
        (Z.state === "blocked" && H.state === "blocked") ||
        (Z.state === "blocked" && H.state === "proceeding") ||
        (Z.state === "blocked" && H.state === "unblocked") ||
        (Z.state === "proceeding" && H.state === "unblocked"),
      "Invalid blocker state transition: " + Z.state + " -> " + H.state,
    );
    let re = new Map(_.blockers);
    re.set(U, H), tt({ blockers: re });
  }
  function Da(U) {
    let { currentLocation: H, nextLocation: Z, historyAction: re } = U;
    if (Fe.size === 0) return;
    Fe.size > 1 && rr(!1, "A router only supports one blocker at a time");
    let fe = Array.from(Fe.entries()),
      [Ae, Ce] = fe[fe.length - 1],
      he = _.blockers.get(Ae);
    if (
      !(he && he.state === "proceeding") &&
      Ce({ currentLocation: H, nextLocation: Z, historyAction: re })
    )
      return Ae;
  }
  function oi(U) {
    let H = un(404, { pathname: U }),
      Z = d || f,
      { matches: re, route: fe } = Am(Z);
    return Xn(), { notFoundMatches: re, route: fe, error: H };
  }
  function Xn(U) {
    let H = [];
    return (
      xe.forEach((Z, re) => {
        (!U || U(re)) && (Z.cancel(), H.push(re), xe.delete(re));
      }),
      H
    );
  }
  function Gn(U, H, Z) {
    if (((b = U), (A = H), (S = Z || null), !R && _.navigation === Df)) {
      R = !0;
      let re = Ba(_.location, _.matches);
      re != null && tt({ restoreScrollPosition: re });
    }
    return () => {
      (b = null), (A = null), (S = null);
    };
  }
  function vi(U, H) {
    return (
      (S &&
        S(
          U,
          H.map((re) => ob(re, _.loaderData)),
        )) ||
      U.key
    );
  }
  function gi(U, H) {
    if (b && A) {
      let Z = vi(U, H);
      b[Z] = A();
    }
  }
  function Ba(U, H) {
    if (b) {
      let Z = vi(U, H),
        re = b[Z];
      if (typeof re == "number") return re;
    }
    return null;
  }
  function Ei(U, H, Z) {
    if (m)
      if (U) {
        if (Object.keys(U[0].params).length > 0)
          return { active: !0, matches: Gl(H, Z, x, !0) };
      } else return { active: !0, matches: Gl(H, Z, x, !0) || [] };
    return { active: !1, matches: null };
  }
  async function bi(U, H, Z, re) {
    if (!m) return { type: "success", matches: U };
    let fe = U;
    for (;;) {
      let Ae = d == null,
        Ce = d || f,
        he = c;
      try {
        await m({
          signal: Z,
          path: H,
          matches: fe,
          fetcherKey: re,
          patch: (Ee, Re) => {
            Z.aborted || mm(Ee, Re, Ce, he, l);
          },
        });
      } catch (Ee) {
        return { type: "error", error: Ee, partialMatches: fe };
      } finally {
        Ae && !Z.aborted && (f = [...f]);
      }
      if (Z.aborted) return { type: "aborted" };
      let de = $a(Ce, H, x);
      if (de) return { type: "success", matches: de };
      let ye = Gl(Ce, H, x, !0);
      if (
        !ye ||
        (fe.length === ye.length &&
          fe.every((Ee, Re) => Ee.route.id === ye[Re].route.id))
      )
        return { type: "success", matches: null };
      fe = ye;
    }
  }
  function Yi(U) {
    (c = {}), (d = Vu(U, l, void 0, c));
  }
  function Ai(U, H) {
    let Z = d == null;
    mm(U, H, d || f, c, l), Z && ((f = [...f]), tt({}));
  }
  return (
    (z = {
      get basename() {
        return x;
      },
      get future() {
        return y;
      },
      get state() {
        return _;
      },
      get routes() {
        return f;
      },
      get window() {
        return n;
      },
      initialize: Je,
      subscribe: Pt,
      enableScrollRestoration: Gn,
      navigate: vt,
      fetch: Ut,
      revalidate: Pn,
      createHref: (U) => t.history.createHref(U),
      encodeLocation: (U) => t.history.encodeLocation(U),
      getFetcher: ji,
      deleteFetcher: yi,
      dispose: Xe,
      getBlocker: kt,
      deleteBlocker: Ca,
      patchRoutes: Ai,
      _internalFetchControllers: ie,
      _internalActiveDeferreds: xe,
      _internalSetRoutes: Yi,
    }),
    z
  );
}
function zb(t) {
  return (
    t != null &&
    (("formData" in t && t.formData != null) ||
      ("body" in t && t.body !== void 0))
  );
}
function Qf(t, n, a, s, l, c, f, d) {
  let x, h;
  if (f) {
    x = [];
    for (let y of n)
      if ((x.push(y), y.route.id === f)) {
        h = y;
        break;
      }
  } else (x = n), (h = n[n.length - 1]);
  let m = eg(l || ".", Iv(x, c), So(t.pathname, a) || t.pathname, d === "path");
  if (
    (l == null && ((m.search = t.search), (m.hash = t.hash)),
    (l == null || l === "" || l === ".") && h)
  ) {
    let y = Oh(m.search);
    if (h.route.index && !y)
      m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index";
    else if (!h.route.index && y) {
      let v = new URLSearchParams(m.search),
        g = v.getAll("index");
      v.delete("index"),
        g.filter((S) => S).forEach((S) => v.append("index", S));
      let b = v.toString();
      m.search = b ? "?" + b : "";
    }
  }
  return (
    s &&
      a !== "/" &&
      (m.pathname = m.pathname === "/" ? a : ma([a, m.pathname])),
    Ao(m)
  );
}
function hm(t, n, a, s) {
  if (!s || !zb(s)) return { path: a };
  if (s.formMethod && !Gb(s.formMethod))
    return { path: a, error: un(405, { method: s.formMethod }) };
  let l = () => ({ path: a, error: un(400, { type: "invalid-body" }) }),
    c = s.formMethod || "get",
    f = t ? c.toUpperCase() : c.toLowerCase(),
    d = rg(a);
  if (s.body !== void 0) {
    if (s.formEncType === "text/plain") {
      if (!ti(f)) return l();
      let v =
        typeof s.body == "string"
          ? s.body
          : s.body instanceof FormData || s.body instanceof URLSearchParams
            ? Array.from(s.body.entries()).reduce((g, b) => {
                let [S, A] = b;
                return (
                  "" +
                  g +
                  S +
                  "=" +
                  A +
                  `
`
                );
              }, "")
            : String(s.body);
      return {
        path: a,
        submission: {
          formMethod: f,
          formAction: d,
          formEncType: s.formEncType,
          formData: void 0,
          json: void 0,
          text: v,
        },
      };
    } else if (s.formEncType === "application/json") {
      if (!ti(f)) return l();
      try {
        let v = typeof s.body == "string" ? JSON.parse(s.body) : s.body;
        return {
          path: a,
          submission: {
            formMethod: f,
            formAction: d,
            formEncType: s.formEncType,
            formData: void 0,
            json: v,
            text: void 0,
          },
        };
      } catch (v) {
        return l();
      }
    }
  }
  qe(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let x, h;
  if (s.formData) (x = Wf(s.formData)), (h = s.formData);
  else if (s.body instanceof FormData) (x = Wf(s.body)), (h = s.body);
  else if (s.body instanceof URLSearchParams) (x = s.body), (h = vm(x));
  else if (s.body == null) (x = new URLSearchParams()), (h = new FormData());
  else
    try {
      (x = new URLSearchParams(s.body)), (h = vm(x));
    } catch (v) {
      return l();
    }
  let m = {
    formMethod: f,
    formAction: d,
    formEncType: (s && s.formEncType) || "application/x-www-form-urlencoded",
    formData: h,
    json: void 0,
    text: void 0,
  };
  if (ti(m.formMethod)) return { path: a, submission: m };
  let y = Ea(a);
  return (
    n && y.search && Oh(y.search) && x.append("index", ""),
    (y.search = "?" + x),
    { path: Ao(y), submission: m }
  );
}
function dm(t, n, a) {
  a === void 0 && (a = !1);
  let s = t.findIndex((l) => l.route.id === n);
  return s >= 0 ? t.slice(0, a ? s + 1 : s) : t;
}
function pm(t, n, a, s, l, c, f, d, x, h, m, y, v, g, b, S) {
  let A = S ? (bn(S[1]) ? S[1].error : S[1].data) : void 0,
    R = t.createURL(n.location),
    C = t.createURL(l),
    D = a;
  c && n.errors
    ? (D = dm(a, Object.keys(n.errors)[0], !0))
    : S && bn(S[1]) && (D = dm(a, S[0]));
  let T = S ? S[1].statusCode : void 0,
    w = f && T && T >= 400,
    z = D.filter((L, q) => {
      let { route: M } = L;
      if (M.lazy) return !0;
      if (M.loader == null) return !1;
      if (c) return $f(M, n.loaderData, n.errors);
      if (Lb(n.loaderData, n.matches[q], L) || x.some((I) => I === L.route.id))
        return !0;
      let j = n.matches[q],
        J = L;
      return xm(
        L,
        lt(
          {
            currentUrl: R,
            currentParams: j.params,
            nextUrl: C,
            nextParams: J.params,
          },
          s,
          {
            actionResult: A,
            actionStatus: T,
            defaultShouldRevalidate: w
              ? !1
              : d ||
                R.pathname + R.search === C.pathname + C.search ||
                R.search !== C.search ||
                ig(j, J),
          },
        ),
      );
    }),
    _ = [];
  return (
    y.forEach((L, q) => {
      if (c || !a.some((le) => le.route.id === L.routeId) || m.has(q)) return;
      let M = $a(g, L.path, b);
      if (!M) {
        _.push({
          key: q,
          routeId: L.routeId,
          path: L.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let j = n.fetchers.get(q),
        J = ro(M, L.path),
        I = !1;
      v.has(q)
        ? (I = !1)
        : h.has(q)
          ? (h.delete(q), (I = !0))
          : j && j.state !== "idle" && j.data === void 0
            ? (I = d)
            : (I = xm(
                J,
                lt(
                  {
                    currentUrl: R,
                    currentParams: n.matches[n.matches.length - 1].params,
                    nextUrl: C,
                    nextParams: a[a.length - 1].params,
                  },
                  s,
                  {
                    actionResult: A,
                    actionStatus: T,
                    defaultShouldRevalidate: w ? !1 : d,
                  },
                ),
              )),
        I &&
          _.push({
            key: q,
            routeId: L.routeId,
            path: L.path,
            matches: M,
            match: J,
            controller: new AbortController(),
          });
    }),
    [z, _]
  );
}
function $f(t, n, a) {
  if (t.lazy) return !0;
  if (!t.loader) return !1;
  let s = n != null && n[t.id] !== void 0,
    l = a != null && a[t.id] !== void 0;
  return !s && l
    ? !1
    : typeof t.loader == "function" && t.loader.hydrate === !0
      ? !0
      : !s && !l;
}
function Lb(t, n, a) {
  let s = !n || a.route.id !== n.route.id,
    l = t[a.route.id] === void 0;
  return s || l;
}
function ig(t, n) {
  let a = t.route.path;
  return (
    t.pathname !== n.pathname ||
    (a != null && a.endsWith("*") && t.params["*"] !== n.params["*"])
  );
}
function xm(t, n) {
  if (t.route.shouldRevalidate) {
    let a = t.route.shouldRevalidate(n);
    if (typeof a == "boolean") return a;
  }
  return n.defaultShouldRevalidate;
}
function mm(t, n, a, s, l) {
  var c;
  let f;
  if (t) {
    let h = s[t];
    qe(h, "No route found to patch children into: routeId = " + t),
      h.children || (h.children = []),
      (f = h.children);
  } else f = a;
  let d = n.filter((h) => !f.some((m) => ag(h, m))),
    x = Vu(
      d,
      l,
      [t || "_", "patch", String(((c = f) == null ? void 0 : c.length) || "0")],
      s,
    );
  f.push(...x);
}
function ag(t, n) {
  return "id" in t && "id" in n && t.id === n.id
    ? !0
    : t.index === n.index &&
        t.path === n.path &&
        t.caseSensitive === n.caseSensitive
      ? (!t.children || t.children.length === 0) &&
        (!n.children || n.children.length === 0)
        ? !0
        : t.children.every((a, s) => {
            var l;
            return (l = n.children) == null ? void 0 : l.some((c) => ag(a, c));
          })
      : !1;
}
async function Nb(t, n, a) {
  if (!t.lazy) return;
  let s = await t.lazy();
  if (!t.lazy) return;
  let l = a[t.id];
  qe(l, "No route found in manifest");
  let c = {};
  for (let f in s) {
    let x = l[f] !== void 0 && f !== "hasErrorBoundary";
    rr(
      !x,
      'Route "' +
        l.id +
        '" has a static property "' +
        f +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + f + '" will be ignored.'),
    ),
      !x && !rb.has(f) && (c[f] = s[f]);
  }
  Object.assign(l, c), Object.assign(l, lt({}, n(l), { lazy: void 0 }));
}
async function Ub(t) {
  let { matches: n } = t,
    a = n.filter((l) => l.shouldLoad);
  return (await Promise.all(a.map((l) => l.resolve()))).reduce(
    (l, c, f) => Object.assign(l, { [a[f].route.id]: c }),
    {},
  );
}
async function kb(t, n, a, s, l, c, f, d, x, h) {
  let m = c.map((g) => (g.route.lazy ? Nb(g.route, x, d) : void 0)),
    y = c.map((g, b) => {
      let S = m[b],
        A = l.some((C) => C.route.id === g.route.id);
      return lt({}, g, {
        shouldLoad: A,
        resolve: async (C) => (
          C &&
            s.method === "GET" &&
            (g.route.lazy || g.route.loader) &&
            (A = !0),
          A
            ? Hb(n, s, g, S, C, h)
            : Promise.resolve({ type: We.data, result: void 0 })
        ),
      });
    }),
    v = await t({
      matches: y,
      request: s,
      params: c[0].params,
      fetcherKey: f,
      context: h,
    });
  try {
    await Promise.all(m);
  } catch (g) {}
  return v;
}
async function Hb(t, n, a, s, l, c) {
  let f,
    d,
    x = (h) => {
      let m,
        y = new Promise((b, S) => (m = S));
      (d = () => m()), n.signal.addEventListener("abort", d);
      let v = (b) =>
          typeof h != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + t + '" [routeId: ' + a.route.id + "]"),
                ),
              )
            : h(
                { request: n, params: a.params, context: c },
                ...(b !== void 0 ? [b] : []),
              ),
        g = (async () => {
          try {
            return { type: "data", result: await (l ? l((S) => v(S)) : v()) };
          } catch (b) {
            return { type: "error", result: b };
          }
        })();
      return Promise.race([g, y]);
    };
  try {
    let h = a.route[t];
    if (s)
      if (h) {
        let m,
          [y] = await Promise.all([
            x(h).catch((v) => {
              m = v;
            }),
            s,
          ]);
        if (m !== void 0) throw m;
        f = y;
      } else if ((await s, (h = a.route[t]), h)) f = await x(h);
      else if (t === "action") {
        let m = new URL(n.url),
          y = m.pathname + m.search;
        throw un(405, { method: n.method, pathname: y, routeId: a.route.id });
      } else return { type: We.data, result: void 0 };
    else if (h) f = await x(h);
    else {
      let m = new URL(n.url),
        y = m.pathname + m.search;
      throw un(404, { pathname: y });
    }
    qe(
      f.result !== void 0,
      "You defined " +
        (t === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          a.route.id +
          "\" but didn't return anything from your `" +
          t +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (h) {
    return { type: We.error, result: h };
  } finally {
    d && n.signal.removeEventListener("abort", d);
  }
  return f;
}
async function Vb(t) {
  let { result: n, type: a } = t;
  if (sg(n)) {
    let y;
    try {
      let v = n.headers.get("Content-Type");
      v && /\bapplication\/json\b/.test(v)
        ? n.body == null
          ? (y = null)
          : (y = await n.json())
        : (y = await n.text());
    } catch (v) {
      return { type: We.error, error: v };
    }
    return a === We.error
      ? {
          type: We.error,
          error: new qu(n.status, n.statusText, y),
          statusCode: n.status,
          headers: n.headers,
        }
      : { type: We.data, data: y, statusCode: n.status, headers: n.headers };
  }
  if (a === We.error) {
    if (Sm(n)) {
      var s, l;
      if (n.data instanceof Error) {
        var c, f;
        return {
          type: We.error,
          error: n.data,
          statusCode: (c = n.init) == null ? void 0 : c.status,
          headers:
            (f = n.init) != null && f.headers
              ? new Headers(n.init.headers)
              : void 0,
        };
      }
      return {
        type: We.error,
        error: new qu(
          ((s = n.init) == null ? void 0 : s.status) || 500,
          void 0,
          n.data,
        ),
        statusCode: xo(n) ? n.status : void 0,
        headers:
          (l = n.init) != null && l.headers
            ? new Headers(n.init.headers)
            : void 0,
      };
    }
    return { type: We.error, error: n, statusCode: xo(n) ? n.status : void 0 };
  }
  if (Xb(n)) {
    var d, x;
    return {
      type: We.deferred,
      deferredData: n,
      statusCode: (d = n.init) == null ? void 0 : d.status,
      headers:
        ((x = n.init) == null ? void 0 : x.headers) &&
        new Headers(n.init.headers),
    };
  }
  if (Sm(n)) {
    var h, m;
    return {
      type: We.data,
      data: n.data,
      statusCode: (h = n.init) == null ? void 0 : h.status,
      headers:
        (m = n.init) != null && m.headers
          ? new Headers(n.init.headers)
          : void 0,
    };
  }
  return { type: We.data, data: n };
}
function qb(t, n, a, s, l, c) {
  let f = t.headers.get("Location");
  if (
    (qe(
      f,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !wh.test(f))
  ) {
    let d = s.slice(0, s.findIndex((x) => x.route.id === a) + 1);
    (f = Qf(new URL(n.url), d, l, !0, f, c)), t.headers.set("Location", f);
  }
  return t;
}
function ym(t, n, a) {
  if (wh.test(t)) {
    let s = t,
      l = s.startsWith("//") ? new URL(n.protocol + s) : new URL(s),
      c = So(l.pathname, a) != null;
    if (l.origin === n.origin && c) return l.pathname + l.search + l.hash;
  }
  return t;
}
function jr(t, n, a, s) {
  let l = t.createURL(rg(n)).toString(),
    c = { signal: a };
  if (s && ti(s.formMethod)) {
    let { formMethod: f, formEncType: d } = s;
    (c.method = f.toUpperCase()),
      d === "application/json"
        ? ((c.headers = new Headers({ "Content-Type": d })),
          (c.body = JSON.stringify(s.json)))
        : d === "text/plain"
          ? (c.body = s.text)
          : d === "application/x-www-form-urlencoded" && s.formData
            ? (c.body = Wf(s.formData))
            : (c.body = s.formData);
  }
  return new Request(l, c);
}
function Wf(t) {
  let n = new URLSearchParams();
  for (let [a, s] of t.entries())
    n.append(a, typeof s == "string" ? s : s.name);
  return n;
}
function vm(t) {
  let n = new FormData();
  for (let [a, s] of t.entries()) n.append(a, s);
  return n;
}
function jb(t, n, a, s, l) {
  let c = {},
    f = null,
    d,
    x = !1,
    h = {},
    m = a && bn(a[1]) ? a[1].error : void 0;
  return (
    t.forEach((y) => {
      if (!(y.route.id in n)) return;
      let v = y.route.id,
        g = n[v];
      if (
        (qe(!Ja(g), "Cannot handle redirect results in processLoaderData"),
        bn(g))
      ) {
        let b = g.error;
        m !== void 0 && ((b = m), (m = void 0)), (f = f || {});
        {
          let S = Wa(t, v);
          f[S.route.id] == null && (f[S.route.id] = b);
        }
        (c[v] = void 0),
          x || ((x = !0), (d = xo(g.error) ? g.error.status : 500)),
          g.headers && (h[v] = g.headers);
      } else
        xa(g)
          ? (s.set(v, g.deferredData),
            (c[v] = g.deferredData.data),
            g.statusCode != null &&
              g.statusCode !== 200 &&
              !x &&
              (d = g.statusCode),
            g.headers && (h[v] = g.headers))
          : ((c[v] = g.data),
            g.statusCode && g.statusCode !== 200 && !x && (d = g.statusCode),
            g.headers && (h[v] = g.headers));
    }),
    m !== void 0 && a && ((f = { [a[0]]: m }), (c[a[0]] = void 0)),
    { loaderData: c, errors: f, statusCode: d || 200, loaderHeaders: h }
  );
}
function gm(t, n, a, s, l, c, f) {
  let { loaderData: d, errors: x } = jb(n, a, s, f);
  return (
    l.forEach((h) => {
      let { key: m, match: y, controller: v } = h,
        g = c[m];
      if (
        (qe(g, "Did not find corresponding fetcher result"),
        !(v && v.signal.aborted))
      )
        if (bn(g)) {
          let b = Wa(t.matches, y == null ? void 0 : y.route.id);
          (x && x[b.route.id]) || (x = lt({}, x, { [b.route.id]: g.error })),
            t.fetchers.delete(m);
        } else if (Ja(g)) qe(!1, "Unhandled fetcher revalidation redirect");
        else if (xa(g)) qe(!1, "Unhandled fetcher deferred data");
        else {
          let b = da(g.data);
          t.fetchers.set(m, b);
        }
    }),
    { loaderData: d, errors: x }
  );
}
function Em(t, n, a, s) {
  let l = lt({}, n);
  for (let c of a) {
    let f = c.route.id;
    if (
      (n.hasOwnProperty(f)
        ? n[f] !== void 0 && (l[f] = n[f])
        : t[f] !== void 0 && c.route.loader && (l[f] = t[f]),
      s && s.hasOwnProperty(f))
    )
      break;
  }
  return l;
}
function bm(t) {
  return t
    ? bn(t[1])
      ? { actionData: {} }
      : { actionData: { [t[0]]: t[1].data } }
    : {};
}
function Wa(t, n) {
  return (
    (n ? t.slice(0, t.findIndex((s) => s.route.id === n) + 1) : [...t])
      .reverse()
      .find((s) => s.route.hasErrorBoundary === !0) || t[0]
  );
}
function Am(t) {
  let n =
    t.length === 1
      ? t[0]
      : t.find((a) => a.index || !a.path || a.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: n }],
    route: n,
  };
}
function un(t, n) {
  let {
      pathname: a,
      routeId: s,
      method: l,
      type: c,
      message: f,
    } = n === void 0 ? {} : n,
    d = "Unknown Server Error",
    x = "Unknown @remix-run/router error";
  return (
    t === 400
      ? ((d = "Bad Request"),
        l && a && s
          ? (x =
              "You made a " +
              l +
              ' request to "' +
              a +
              '" but ' +
              ('did not provide a `loader` for route "' + s + '", ') +
              "so there is no way to handle the request.")
          : c === "defer-action"
            ? (x = "defer() is not supported in actions")
            : c === "invalid-body" && (x = "Unable to encode submission body"))
      : t === 403
        ? ((d = "Forbidden"),
          (x = 'Route "' + s + '" does not match URL "' + a + '"'))
        : t === 404
          ? ((d = "Not Found"), (x = 'No route matches URL "' + a + '"'))
          : t === 405 &&
            ((d = "Method Not Allowed"),
            l && a && s
              ? (x =
                  "You made a " +
                  l.toUpperCase() +
                  ' request to "' +
                  a +
                  '" but ' +
                  ('did not provide an `action` for route "' + s + '", ') +
                  "so there is no way to handle the request.")
              : l && (x = 'Invalid request method "' + l.toUpperCase() + '"')),
    new qu(t || 500, d, new Error(x), !0)
  );
}
function kl(t) {
  let n = Object.entries(t);
  for (let a = n.length - 1; a >= 0; a--) {
    let [s, l] = n[a];
    if (Ja(l)) return { key: s, result: l };
  }
}
function rg(t) {
  let n = typeof t == "string" ? Ea(t) : t;
  return Ao(lt({}, n, { hash: "" }));
}
function Pb(t, n) {
  return t.pathname !== n.pathname || t.search !== n.search
    ? !1
    : t.hash === ""
      ? n.hash !== ""
      : t.hash === n.hash
        ? !0
        : n.hash !== "";
}
function Yb(t) {
  return sg(t.result) && Rb.has(t.result.status);
}
function xa(t) {
  return t.type === We.deferred;
}
function bn(t) {
  return t.type === We.error;
}
function Ja(t) {
  return (t && t.type) === We.redirect;
}
function Sm(t) {
  return (
    typeof t == "object" &&
    t != null &&
    "type" in t &&
    "data" in t &&
    "init" in t &&
    t.type === "DataWithResponseInit"
  );
}
function Xb(t) {
  let n = t;
  return (
    n &&
    typeof n == "object" &&
    typeof n.data == "object" &&
    typeof n.subscribe == "function" &&
    typeof n.cancel == "function" &&
    typeof n.resolveData == "function"
  );
}
function sg(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.headers == "object" &&
    typeof t.body != "undefined"
  );
}
function Gb(t) {
  return Tb.has(t.toLowerCase());
}
function ti(t) {
  return Bb.has(t.toLowerCase());
}
async function Kb(t, n, a, s, l) {
  let c = Object.entries(n);
  for (let f = 0; f < c.length; f++) {
    let [d, x] = c[f],
      h = t.find((v) => (v == null ? void 0 : v.route.id) === d);
    if (!h) continue;
    let m = s.find((v) => v.route.id === h.route.id),
      y = m != null && !ig(m, h) && (l && l[h.route.id]) !== void 0;
    xa(x) &&
      y &&
      (await Mh(x, a, !1).then((v) => {
        v && (n[d] = v);
      }));
  }
}
async function Zb(t, n, a) {
  for (let s = 0; s < a.length; s++) {
    let { key: l, routeId: c, controller: f } = a[s],
      d = n[l];
    t.find((h) => (h == null ? void 0 : h.route.id) === c) &&
      xa(d) &&
      (qe(
        f,
        "Expected an AbortController for revalidating fetcher deferred result",
      ),
      await Mh(d, f.signal, !0).then((h) => {
        h && (n[l] = h);
      }));
  }
}
async function Mh(t, n, a) {
  if ((a === void 0 && (a = !1), !(await t.deferredData.resolveData(n)))) {
    if (a)
      try {
        return { type: We.data, data: t.deferredData.unwrappedData };
      } catch (l) {
        return { type: We.error, error: l };
      }
    return { type: We.data, data: t.deferredData.data };
  }
}
function Oh(t) {
  return new URLSearchParams(t).getAll("index").some((n) => n === "");
}
function ro(t, n) {
  let a = typeof n == "string" ? Ea(n).search : n.search;
  if (t[t.length - 1].route.index && Oh(a || "")) return t[t.length - 1];
  let s = Jv(t);
  return s[s.length - 1];
}
function Cm(t) {
  let {
    formMethod: n,
    formAction: a,
    formEncType: s,
    text: l,
    formData: c,
    json: f,
  } = t;
  if (!(!n || !a || !s)) {
    if (l != null)
      return {
        formMethod: n,
        formAction: a,
        formEncType: s,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (c != null)
      return {
        formMethod: n,
        formAction: a,
        formEncType: s,
        formData: c,
        json: void 0,
        text: void 0,
      };
    if (f !== void 0)
      return {
        formMethod: n,
        formAction: a,
        formEncType: s,
        formData: void 0,
        json: f,
        text: void 0,
      };
  }
}
function Bf(t, n) {
  return n
    ? {
        state: "loading",
        location: t,
        formMethod: n.formMethod,
        formAction: n.formAction,
        formEncType: n.formEncType,
        formData: n.formData,
        json: n.json,
        text: n.text,
      }
    : {
        state: "loading",
        location: t,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Qb(t, n) {
  return {
    state: "submitting",
    location: t,
    formMethod: n.formMethod,
    formAction: n.formAction,
    formEncType: n.formEncType,
    formData: n.formData,
    json: n.json,
    text: n.text,
  };
}
function eo(t, n) {
  return t
    ? {
        state: "loading",
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
        data: n,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: n,
      };
}
function $b(t, n) {
  return {
    state: "submitting",
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
    data: n ? n.data : void 0,
  };
}
function da(t) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t,
  };
}
function Wb(t, n) {
  try {
    let a = t.sessionStorage.getItem(ng);
    if (a) {
      let s = JSON.parse(a);
      for (let [l, c] of Object.entries(s || {}))
        c && Array.isArray(c) && n.set(l, new Set(c || []));
    }
  } catch (a) {}
}
function Jb(t, n) {
  if (n.size > 0) {
    let a = {};
    for (let [s, l] of n) a[s] = [...l];
    try {
      t.sessionStorage.setItem(ng, JSON.stringify(a));
    } catch (s) {
      rr(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          s +
          ").",
      );
    }
  }
}
/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ju() {
  return (
    (ju = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var s in a)
              Object.prototype.hasOwnProperty.call(a, s) && (t[s] = a[s]);
          }
          return t;
        }),
    ju.apply(this, arguments)
  );
}
const Wu = $.createContext(null),
  og = $.createContext(null),
  Ju = $.createContext(null),
  Fh = $.createContext(null),
  Ir = $.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  lg = $.createContext(null);
function Iu() {
  return $.useContext(Fh) != null;
}
function ug() {
  return Iu() || qe(!1), $.useContext(Fh).location;
}
function cg(t) {
  $.useContext(Ju).static || $.useLayoutEffect(t);
}
function kT() {
  let { isDataRoute: t } = $.useContext(Ir);
  return t ? u3() : Ib();
}
function Ib() {
  Iu() || qe(!1);
  let t = $.useContext(Wu),
    { basename: n, future: a, navigator: s } = $.useContext(Ju),
    { matches: l } = $.useContext(Ir),
    { pathname: c } = ug(),
    f = JSON.stringify(Iv(l, a.v7_relativeSplatPath)),
    d = $.useRef(!1);
  return (
    cg(() => {
      d.current = !0;
    }),
    $.useCallback(
      function (h, m) {
        if ((m === void 0 && (m = {}), !d.current)) return;
        if (typeof h == "number") {
          s.go(h);
          return;
        }
        let y = eg(h, JSON.parse(f), c, m.relative === "path");
        t == null &&
          n !== "/" &&
          (y.pathname = y.pathname === "/" ? n : ma([n, y.pathname])),
          (m.replace ? s.replace : s.push)(y, m.state, m);
      },
      [n, s, f, c, t],
    )
  );
}
function HT(t, n) {
  return fg(t);
}
function fg(t, n, a, s) {
  Iu() || qe(!1);
  let { navigator: l } = $.useContext(Ju),
    { matches: c } = $.useContext(Ir),
    f = c[c.length - 1],
    d = f ? f.params : {};
  f && f.pathname;
  let x = f ? f.pathnameBase : "/";
  f && f.route;
  let h = ug(),
    m;
  m = h;
  let y = m.pathname || "/",
    v = y;
  if (x !== "/") {
    let S = x.replace(/^\//, "").split("/");
    v = "/" + y.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let g = $a(t, { pathname: v });
  return a3(
    g &&
      g.map((S) =>
        Object.assign({}, S, {
          params: Object.assign({}, d, S.params),
          pathname: ma([
            x,
            l.encodeLocation
              ? l.encodeLocation(S.pathname).pathname
              : S.pathname,
          ]),
          pathnameBase:
            S.pathnameBase === "/"
              ? x
              : ma([
                  x,
                  l.encodeLocation
                    ? l.encodeLocation(S.pathnameBase).pathname
                    : S.pathnameBase,
                ]),
        }),
      ),
    c,
    a,
    s,
  );
}
function e3() {
  let t = l3(),
    n = xo(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
        ? t.message
        : JSON.stringify(t),
    a = t instanceof Error ? t.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return $.createElement(
    $.Fragment,
    null,
    $.createElement("h2", null, "Unexpected Application Error!"),
    $.createElement("h3", { style: { fontStyle: "italic" } }, n),
    a ? $.createElement("pre", { style: l }, a) : null,
    null,
  );
}
const t3 = $.createElement(e3, null);
class n3 extends $.Component {
  constructor(n) {
    super(n),
      (this.state = {
        location: n.location,
        revalidation: n.revalidation,
        error: n.error,
      });
  }
  static getDerivedStateFromError(n) {
    return { error: n };
  }
  static getDerivedStateFromProps(n, a) {
    return a.location !== n.location ||
      (a.revalidation !== "idle" && n.revalidation === "idle")
      ? { error: n.error, location: n.location, revalidation: n.revalidation }
      : {
          error: n.error !== void 0 ? n.error : a.error,
          location: a.location,
          revalidation: n.revalidation || a.revalidation,
        };
  }
  componentDidCatch(n, a) {
    console.error(
      "React Router caught the following error during render",
      n,
      a,
    );
  }
  render() {
    return this.state.error !== void 0
      ? $.createElement(
          Ir.Provider,
          { value: this.props.routeContext },
          $.createElement(lg.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function i3(t) {
  let { routeContext: n, match: a, children: s } = t,
    l = $.useContext(Wu);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (a.route.errorElement || a.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = a.route.id),
    $.createElement(Ir.Provider, { value: n }, s)
  );
}
function a3(t, n, a, s) {
  var l;
  if (
    (n === void 0 && (n = []),
    a === void 0 && (a = null),
    s === void 0 && (s = null),
    t == null)
  ) {
    var c;
    if (!a) return null;
    if (a.errors) t = a.matches;
    else if (
      (c = s) != null &&
      c.v7_partialHydration &&
      n.length === 0 &&
      !a.initialized &&
      a.matches.length > 0
    )
      t = a.matches;
    else return null;
  }
  let f = t,
    d = (l = a) == null ? void 0 : l.errors;
  if (d != null) {
    let m = f.findIndex(
      (y) => y.route.id && (d == null ? void 0 : d[y.route.id]) !== void 0,
    );
    m >= 0 || qe(!1), (f = f.slice(0, Math.min(f.length, m + 1)));
  }
  let x = !1,
    h = -1;
  if (a && s && s.v7_partialHydration)
    for (let m = 0; m < f.length; m++) {
      let y = f[m];
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (h = m),
        y.route.id)
      ) {
        let { loaderData: v, errors: g } = a,
          b =
            y.route.loader &&
            v[y.route.id] === void 0 &&
            (!g || g[y.route.id] === void 0);
        if (y.route.lazy || b) {
          (x = !0), h >= 0 ? (f = f.slice(0, h + 1)) : (f = [f[0]]);
          break;
        }
      }
    }
  return f.reduceRight((m, y, v) => {
    let g,
      b = !1,
      S = null,
      A = null;
    a &&
      ((g = d && y.route.id ? d[y.route.id] : void 0),
      (S = y.route.errorElement || t3),
      x &&
        (h < 0 && v === 0
          ? (c3("route-fallback"), (b = !0), (A = null))
          : h === v &&
            ((b = !0), (A = y.route.hydrateFallbackElement || null))));
    let R = n.concat(f.slice(0, v + 1)),
      C = () => {
        let D;
        return (
          g
            ? (D = S)
            : b
              ? (D = A)
              : y.route.Component
                ? (D = $.createElement(y.route.Component, null))
                : y.route.element
                  ? (D = y.route.element)
                  : (D = m),
          $.createElement(i3, {
            match: y,
            routeContext: { outlet: m, matches: R, isDataRoute: a != null },
            children: D,
          })
        );
      };
    return a && (y.route.ErrorBoundary || y.route.errorElement || v === 0)
      ? $.createElement(n3, {
          location: a.location,
          revalidation: a.revalidation,
          component: S,
          error: g,
          children: C(),
          routeContext: { outlet: null, matches: R, isDataRoute: !0 },
        })
      : C();
  }, null);
}
var hg = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      t
    );
  })(hg || {}),
  dg = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseLoaderData = "useLoaderData"),
      (t.UseActionData = "useActionData"),
      (t.UseRouteError = "useRouteError"),
      (t.UseNavigation = "useNavigation"),
      (t.UseRouteLoaderData = "useRouteLoaderData"),
      (t.UseMatches = "useMatches"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      (t.UseRouteId = "useRouteId"),
      t
    );
  })(dg || {});
function r3(t) {
  let n = $.useContext(Wu);
  return n || qe(!1), n;
}
function s3(t) {
  let n = $.useContext(og);
  return n || qe(!1), n;
}
function o3(t) {
  let n = $.useContext(Ir);
  return n || qe(!1), n;
}
function pg(t) {
  let n = o3(),
    a = n.matches[n.matches.length - 1];
  return a.route.id || qe(!1), a.route.id;
}
function l3() {
  var t;
  let n = $.useContext(lg),
    a = s3(dg.UseRouteError),
    s = pg();
  return n !== void 0 ? n : (t = a.errors) == null ? void 0 : t[s];
}
function u3() {
  let { router: t } = r3(hg.UseNavigateStable),
    n = pg(),
    a = $.useRef(!1);
  return (
    cg(() => {
      a.current = !0;
    }),
    $.useCallback(
      function (l, c) {
        c === void 0 && (c = {}),
          a.current &&
            (typeof l == "number"
              ? t.navigate(l)
              : t.navigate(l, ju({ fromRouteId: n }, c)));
      },
      [t, n],
    )
  );
}
const Dm = {};
function c3(t, n, a) {
  Dm[t] || (Dm[t] = !0);
}
function f3(t, n) {
  t == null || t.v7_startTransition,
    (t == null ? void 0 : t.v7_relativeSplatPath) === void 0 &&
      (!n || n.v7_relativeSplatPath),
    n &&
      (n.v7_fetcherPersist,
      n.v7_normalizeFormMethod,
      n.v7_partialHydration,
      n.v7_skipActionErrorRevalidation);
}
function h3(t) {
  let {
    basename: n = "/",
    children: a = null,
    location: s,
    navigationType: l = Bt.Pop,
    navigator: c,
    static: f = !1,
    future: d,
  } = t;
  Iu() && qe(!1);
  let x = n.replace(/^\/*/, "/"),
    h = $.useMemo(
      () => ({
        basename: x,
        navigator: c,
        static: f,
        future: ju({ v7_relativeSplatPath: !1 }, d),
      }),
      [x, d, c, f],
    );
  typeof s == "string" && (s = Ea(s));
  let {
      pathname: m = "/",
      search: y = "",
      hash: v = "",
      state: g = null,
      key: b = "default",
    } = s,
    S = $.useMemo(() => {
      let A = So(m, x);
      return A == null
        ? null
        : {
            location: { pathname: A, search: y, hash: v, state: g, key: b },
            navigationType: l,
          };
    }, [x, m, y, v, g, b, l]);
  return S == null
    ? null
    : $.createElement(
        Ju.Provider,
        { value: h },
        $.createElement(Fh.Provider, { children: a, value: S }),
      );
}
new Promise(() => {});
function d3(t) {
  let n = {
    hasErrorBoundary: t.ErrorBoundary != null || t.errorElement != null,
  };
  return (
    t.Component &&
      Object.assign(n, {
        element: $.createElement(t.Component),
        Component: void 0,
      }),
    t.HydrateFallback &&
      Object.assign(n, {
        hydrateFallbackElement: $.createElement(t.HydrateFallback),
        HydrateFallback: void 0,
      }),
    t.ErrorBoundary &&
      Object.assign(n, {
        errorElement: $.createElement(t.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    n
  );
}
/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Pu() {
  return (
    (Pu = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var s in a)
              Object.prototype.hasOwnProperty.call(a, s) && (t[s] = a[s]);
          }
          return t;
        }),
    Pu.apply(this, arguments)
  );
}
const p3 = "6";
try {
  window.__reactRouterVersion = p3;
} catch (t) {}
function VT(t, n) {
  return Fb({
    basename: n == null ? void 0 : n.basename,
    future: Pu({}, n == null ? void 0 : n.future, { v7_prependBasename: !0 }),
    history: nb({ window: n == null ? void 0 : n.window }),
    hydrationData: (n == null ? void 0 : n.hydrationData) || x3(),
    routes: t,
    mapRouteProperties: d3,
    dataStrategy: n == null ? void 0 : n.dataStrategy,
    patchRoutesOnNavigation: n == null ? void 0 : n.patchRoutesOnNavigation,
    window: n == null ? void 0 : n.window,
  }).initialize();
}
function x3() {
  var t;
  let n = (t = window) == null ? void 0 : t.__staticRouterHydrationData;
  return n && n.errors && (n = Pu({}, n, { errors: m3(n.errors) })), n;
}
function m3(t) {
  if (!t) return null;
  let n = Object.entries(t),
    a = {};
  for (let [s, l] of n)
    if (l && l.__type === "RouteErrorResponse")
      a[s] = new qu(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let c = window[l.__subType];
        if (typeof c == "function")
          try {
            let f = new c(l.message);
            (f.stack = ""), (a[s] = f);
          } catch (f) {}
      }
      if (a[s] == null) {
        let c = new Error(l.message);
        (c.stack = ""), (a[s] = c);
      }
    } else a[s] = l;
  return a;
}
const y3 = $.createContext({ isTransitioning: !1 }),
  v3 = $.createContext(new Map()),
  g3 = "startTransition",
  Bm = KE[g3],
  E3 = "flushSync",
  _m = tb[E3];
function b3(t) {
  Bm ? Bm(t) : t();
}
function to(t) {
  _m ? _m(t) : t();
}
class A3 {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((n, a) => {
        (this.resolve = (s) => {
          this.status === "pending" && ((this.status = "resolved"), n(s));
        }),
          (this.reject = (s) => {
            this.status === "pending" && ((this.status = "rejected"), a(s));
          });
      }));
  }
}
function qT(t) {
  let { fallbackElement: n, router: a, future: s } = t,
    [l, c] = $.useState(a.state),
    [f, d] = $.useState(),
    [x, h] = $.useState({ isTransitioning: !1 }),
    [m, y] = $.useState(),
    [v, g] = $.useState(),
    [b, S] = $.useState(),
    A = $.useRef(new Map()),
    { v7_startTransition: R } = s || {},
    C = $.useCallback(
      (L) => {
        R ? b3(L) : L();
      },
      [R],
    ),
    D = $.useCallback(
      (L, q) => {
        let { deletedFetchers: M, flushSync: j, viewTransitionOpts: J } = q;
        L.fetchers.forEach((le, ce) => {
          le.data !== void 0 && A.current.set(ce, le.data);
        }),
          M.forEach((le) => A.current.delete(le));
        let I =
          a.window == null ||
          a.window.document == null ||
          typeof a.window.document.startViewTransition != "function";
        if (!J || I) {
          j ? to(() => c(L)) : C(() => c(L));
          return;
        }
        if (j) {
          to(() => {
            v && (m && m.resolve(), v.skipTransition()),
              h({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: J.currentLocation,
                nextLocation: J.nextLocation,
              });
          });
          let le = a.window.document.startViewTransition(() => {
            to(() => c(L));
          });
          le.finished.finally(() => {
            to(() => {
              y(void 0), g(void 0), d(void 0), h({ isTransitioning: !1 });
            });
          }),
            to(() => g(le));
          return;
        }
        v
          ? (m && m.resolve(),
            v.skipTransition(),
            S({
              state: L,
              currentLocation: J.currentLocation,
              nextLocation: J.nextLocation,
            }))
          : (d(L),
            h({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: J.currentLocation,
              nextLocation: J.nextLocation,
            }));
      },
      [a.window, v, m, A, C],
    );
  $.useLayoutEffect(() => a.subscribe(D), [a, D]),
    $.useEffect(() => {
      x.isTransitioning && !x.flushSync && y(new A3());
    }, [x]),
    $.useEffect(() => {
      if (m && f && a.window) {
        let L = f,
          q = m.promise,
          M = a.window.document.startViewTransition(async () => {
            C(() => c(L)), await q;
          });
        M.finished.finally(() => {
          y(void 0), g(void 0), d(void 0), h({ isTransitioning: !1 });
        }),
          g(M);
      }
    }, [C, f, m, a.window]),
    $.useEffect(() => {
      m && f && l.location.key === f.location.key && m.resolve();
    }, [m, v, l.location, f]),
    $.useEffect(() => {
      !x.isTransitioning &&
        b &&
        (d(b.state),
        h({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: b.currentLocation,
          nextLocation: b.nextLocation,
        }),
        S(void 0));
    }, [x.isTransitioning, b]),
    $.useEffect(() => {}, []);
  let T = $.useMemo(
      () => ({
        createHref: a.createHref,
        encodeLocation: a.encodeLocation,
        go: (L) => a.navigate(L),
        push: (L, q, M) =>
          a.navigate(L, {
            state: q,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
        replace: (L, q, M) =>
          a.navigate(L, {
            replace: !0,
            state: q,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
      }),
      [a],
    ),
    w = a.basename || "/",
    z = $.useMemo(
      () => ({ router: a, navigator: T, static: !1, basename: w }),
      [a, T, w],
    ),
    _ = $.useMemo(
      () => ({ v7_relativeSplatPath: a.future.v7_relativeSplatPath }),
      [a.future.v7_relativeSplatPath],
    );
  return (
    $.useEffect(() => f3(s, a.future), [s, a.future]),
    $.createElement(
      $.Fragment,
      null,
      $.createElement(
        Wu.Provider,
        { value: z },
        $.createElement(
          og.Provider,
          { value: l },
          $.createElement(
            v3.Provider,
            { value: A.current },
            $.createElement(
              y3.Provider,
              { value: x },
              $.createElement(
                h3,
                {
                  basename: w,
                  location: l.location,
                  navigationType: l.historyAction,
                  navigator: T,
                  future: _,
                },
                l.initialized || a.future.v7_partialHydration
                  ? $.createElement(S3, {
                      routes: a.routes,
                      future: a.future,
                      state: l,
                    })
                  : n,
              ),
            ),
          ),
        ),
      ),
      null,
    )
  );
}
const S3 = $.memo(C3);
function C3(t) {
  let { routes: n, future: a, state: s } = t;
  return fg(n, void 0, s, a);
}
var Tm;
(function (t) {
  (t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmit = "useSubmit"),
    (t.UseSubmitFetcher = "useSubmitFetcher"),
    (t.UseFetcher = "useFetcher"),
    (t.useViewTransitionState = "useViewTransitionState");
})(Tm || (Tm = {}));
var Rm;
(function (t) {
  (t.UseFetcher = "useFetcher"),
    (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration");
})(Rm || (Rm = {}));
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D3 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  B3 = (t) =>
    t.replace(/^([A-Z])|[\s-_]+(\w)/g, (n, a, s) =>
      s ? s.toUpperCase() : a.toLowerCase(),
    ),
  wm = (t) => {
    const n = B3(t);
    return n.charAt(0).toUpperCase() + n.slice(1);
  },
  xg = (...t) =>
    t
      .filter((n, a, s) => !!n && n.trim() !== "" && s.indexOf(n) === a)
      .join(" ")
      .trim(),
  _3 = (t) => {
    for (const n in t)
      if (n.startsWith("aria-") || n === "role" || n === "title") return !0;
  };
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var T3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const R3 = $.forwardRef((h, x) => {
  var m = h,
    {
      color: t = "currentColor",
      size: n = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: s,
      className: l = "",
      children: c,
      iconNode: f,
    } = m,
    d = ln(m, [
      "color",
      "size",
      "strokeWidth",
      "absoluteStrokeWidth",
      "className",
      "children",
      "iconNode",
    ]);
  return $.createElement(
    "svg",
    ue(
      ue(
        Ne(ue({ ref: x }, T3), {
          width: n,
          height: n,
          stroke: t,
          strokeWidth: s ? (Number(a) * 24) / Number(n) : a,
          className: xg("lucide", l),
        }),
        !c && !_3(d) && { "aria-hidden": "true" },
      ),
      d,
    ),
    [
      ...f.map(([y, v]) => $.createElement(y, v)),
      ...(Array.isArray(c) ? c : [c]),
    ],
  );
});
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _e = (t, n) => {
  const a = $.forwardRef((f, c) => {
    var d = f,
      { className: s } = d,
      l = ln(d, ["className"]);
    return $.createElement(
      R3,
      ue(
        {
          ref: c,
          iconNode: n,
          className: xg(`lucide-${D3(wm(t))}`, `lucide-${t}`, s),
        },
        l,
      ),
    );
  });
  return (a.displayName = wm(t)), a;
};
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w3 = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse",
      },
    ],
  ],
  jT = _e("activity", w3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const M3 = [
    ["path", { d: "M12 6.528V3a1 1 0 0 1 1-1h0", key: "11qiee" }],
    [
      "path",
      {
        d: "M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21",
        key: "110c12",
      },
    ],
  ],
  PT = _e("apple", M3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O3 = [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
  ],
  YT = _e("arrow-left", O3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F3 = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  XT = _e("arrow-right", F3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const z3 = [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ],
  GT = _e("book-open", z3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L3 = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  KT = _e("calendar", L3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N3 = [
    [
      "path",
      {
        d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",
        key: "1qvrer",
      },
    ],
    ["path", { d: "M6 17h12", key: "1jwigz" }],
  ],
  ZT = _e("chef-hat", N3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const U3 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  QT = _e("chevron-down", U3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k3 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  $T = _e("chevron-left", k3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H3 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  WT = _e("chevron-right", H3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V3 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  JT = _e("circle-alert", V3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q3 = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  IT = _e("circle-check-big", q3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j3 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  e7 = _e("circle-check", j3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P3 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
    ["path", { d: "m9 9 6 6", key: "z0biqf" }],
  ],
  t7 = _e("circle-x", P3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y3 = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  n7 = _e("clock", Y3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X3 = [
    [
      "path",
      {
        d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
        key: "1vdc57",
      },
    ],
    ["path", { d: "M5 21h14", key: "11awu3" }],
  ],
  i7 = _e("crown", X3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G3 = [
    ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
    [
      "path",
      { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
    ],
  ],
  a7 = _e("dollar-sign", G3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K3 = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ],
  r7 = _e("download", K3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z3 = [
    [
      "path",
      {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7",
      },
    ],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }],
  ],
  s7 = _e("file-text", Z3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q3 = [
    [
      "path",
      {
        d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
        key: "96xj49",
      },
    ],
  ],
  o7 = _e("flame", Q3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $3 = [
    [
      "path",
      {
        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        key: "mvr1a0",
      },
    ],
  ],
  l7 = _e("heart", $3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const W3 = [
    [
      "path",
      { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
    ],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "1d0kgt",
      },
    ],
  ],
  u7 = _e("house", W3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J3 = [
    ["path", { d: "M16 10h2", key: "8sgtl7" }],
    ["path", { d: "M16 14h2", key: "epxaof" }],
    ["path", { d: "M6.17 15a3 3 0 0 1 5.66 0", key: "n6f512" }],
    ["circle", { cx: "9", cy: "11", r: "2", key: "yxgjnd" }],
    [
      "rect",
      { x: "2", y: "5", width: "20", height: "14", rx: "2", key: "qneu4z" },
    ],
  ],
  c7 = _e("id-card", J3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I3 = [
    ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
    ["path", { d: "M21 12H9", key: "dn1m92" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ],
  f7 = _e("log-out", I3);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eA = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  h7 = _e("mail", eA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tA = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  d7 = _e("phone", tA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nA = [
    ["path", { d: "m12 14-1 1", key: "11onhr" }],
    ["path", { d: "m13.75 18.25-1.25 1.42", key: "1yisr3" }],
    [
      "path",
      { d: "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12", key: "1qtqk6" },
    ],
    ["path", { d: "M18.8 9.3a1 1 0 0 0 2.1 7.7", key: "fbbbr2" }],
    [
      "path",
      {
        d: "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z",
        key: "1hyfdd",
      },
    ],
  ],
  p7 = _e("pizza", nA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iA = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  x7 = _e("plus", iA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aA = [
    [
      "path",
      {
        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        key: "v9h5vc",
      },
    ],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    [
      "path",
      {
        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        key: "3uifl3",
      },
    ],
    ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ],
  m7 = _e("refresh-cw", aA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rA = [
    [
      "path",
      { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
    ],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ],
  y7 = _e("rotate-ccw", rA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sA = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  v7 = _e("search", sA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oA = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  g7 = _e("send", oA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lA = [
    [
      "path",
      {
        d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
        key: "1i5ecw",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  E7 = _e("settings", lA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uA = [
    [
      "rect",
      {
        width: "14",
        height: "20",
        x: "5",
        y: "2",
        rx: "2",
        ry: "2",
        key: "1yt0o3",
      },
    ],
    ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ],
  b7 = _e("smartphone", uA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cA = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  A7 = _e("sparkles", cA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fA = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  S7 = _e("star", fA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hA = [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq",
      },
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ],
  C7 = _e("triangle-alert", hA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dA = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  D7 = _e("user", dA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pA = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  B7 = _e("users", pA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xA = [
    [
      "path",
      {
        d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",
        key: "n7qcjb",
      },
    ],
    [
      "path",
      {
        d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",
        key: "d0u48b",
      },
    ],
    ["path", { d: "m2.1 21.8 6.4-6.3", key: "yn04lh" }],
    ["path", { d: "m19 5-7 7", key: "194lzd" }],
  ],
  _7 = _e("utensils-crossed", xA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mA = [
    ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
    ["path", { d: "M7 2v20", key: "1473qp" }],
    [
      "path",
      { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" },
    ],
  ],
  T7 = _e("utensils", mA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yA = [
    ["path", { d: "M12 20h.01", key: "zekei9" }],
    ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
    ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
    ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
    ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
    ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ],
  R7 = _e("wifi-off", yA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vA = [
    ["path", { d: "M12 20h.01", key: "zekei9" }],
    ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
    ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
    ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ],
  w7 = _e("wifi", vA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gA = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  M7 = _e("x", gA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const EA = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  O7 = _e("zap", EA);
var Kl = { exports: {} };
function bA(t) {
  throw new Error(
    'Could not dynamically require "' +
      t +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
  );
}
var Zl = { exports: {} };
const AA = {},
  SA = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: AA },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  CA = jE(SA);
var DA = Zl.exports,
  Mm;
function je() {
  return (
    Mm ||
      ((Mm = 1),
      (function (t, n) {
        (function (a, s) {
          t.exports = s();
        })(DA, function () {
          var a =
            a ||
            (function (s, l) {
              var c;
              if (
                (typeof window != "undefined" &&
                  window.crypto &&
                  (c = window.crypto),
                typeof self != "undefined" && self.crypto && (c = self.crypto),
                typeof globalThis != "undefined" &&
                  globalThis.crypto &&
                  (c = globalThis.crypto),
                !c &&
                  typeof window != "undefined" &&
                  window.msCrypto &&
                  (c = window.msCrypto),
                !c && typeof yf != "undefined" && yf.crypto && (c = yf.crypto),
                !c && typeof bA == "function")
              )
                try {
                  c = CA;
                } catch (C) {}
              var f = function () {
                  if (c) {
                    if (typeof c.getRandomValues == "function")
                      try {
                        return c.getRandomValues(new Uint32Array(1))[0];
                      } catch (C) {}
                    if (typeof c.randomBytes == "function")
                      try {
                        return c.randomBytes(4).readInt32LE();
                      } catch (C) {}
                  }
                  throw new Error(
                    "Native crypto module could not be used to get secure random number.",
                  );
                },
                d =
                  Object.create ||
                  (function () {
                    function C() {}
                    return function (D) {
                      var T;
                      return (
                        (C.prototype = D),
                        (T = new C()),
                        (C.prototype = null),
                        T
                      );
                    };
                  })(),
                x = {},
                h = (x.lib = {}),
                m = (h.Base = (function () {
                  return {
                    extend: function (C) {
                      var D = d(this);
                      return (
                        C && D.mixIn(C),
                        (!D.hasOwnProperty("init") || this.init === D.init) &&
                          (D.init = function () {
                            D.$super.init.apply(this, arguments);
                          }),
                        (D.init.prototype = D),
                        (D.$super = this),
                        D
                      );
                    },
                    create: function () {
                      var C = this.extend();
                      return C.init.apply(C, arguments), C;
                    },
                    init: function () {},
                    mixIn: function (C) {
                      for (var D in C) C.hasOwnProperty(D) && (this[D] = C[D]);
                      C.hasOwnProperty("toString") &&
                        (this.toString = C.toString);
                    },
                    clone: function () {
                      return this.init.prototype.extend(this);
                    },
                  };
                })()),
                y = (h.WordArray = m.extend({
                  init: function (C, D) {
                    (C = this.words = C || []),
                      D != l
                        ? (this.sigBytes = D)
                        : (this.sigBytes = C.length * 4);
                  },
                  toString: function (C) {
                    return (C || g).stringify(this);
                  },
                  concat: function (C) {
                    var D = this.words,
                      T = C.words,
                      w = this.sigBytes,
                      z = C.sigBytes;
                    if ((this.clamp(), w % 4))
                      for (var _ = 0; _ < z; _++) {
                        var L = (T[_ >>> 2] >>> (24 - (_ % 4) * 8)) & 255;
                        D[(w + _) >>> 2] |= L << (24 - ((w + _) % 4) * 8);
                      }
                    else
                      for (var q = 0; q < z; q += 4)
                        D[(w + q) >>> 2] = T[q >>> 2];
                    return (this.sigBytes += z), this;
                  },
                  clamp: function () {
                    var C = this.words,
                      D = this.sigBytes;
                    (C[D >>> 2] &= 4294967295 << (32 - (D % 4) * 8)),
                      (C.length = s.ceil(D / 4));
                  },
                  clone: function () {
                    var C = m.clone.call(this);
                    return (C.words = this.words.slice(0)), C;
                  },
                  random: function (C) {
                    for (var D = [], T = 0; T < C; T += 4) D.push(f());
                    return new y.init(D, C);
                  },
                })),
                v = (x.enc = {}),
                g = (v.Hex = {
                  stringify: function (C) {
                    for (
                      var D = C.words, T = C.sigBytes, w = [], z = 0;
                      z < T;
                      z++
                    ) {
                      var _ = (D[z >>> 2] >>> (24 - (z % 4) * 8)) & 255;
                      w.push((_ >>> 4).toString(16)),
                        w.push((_ & 15).toString(16));
                    }
                    return w.join("");
                  },
                  parse: function (C) {
                    for (var D = C.length, T = [], w = 0; w < D; w += 2)
                      T[w >>> 3] |=
                        parseInt(C.substr(w, 2), 16) << (24 - (w % 8) * 4);
                    return new y.init(T, D / 2);
                  },
                }),
                b = (v.Latin1 = {
                  stringify: function (C) {
                    for (
                      var D = C.words, T = C.sigBytes, w = [], z = 0;
                      z < T;
                      z++
                    ) {
                      var _ = (D[z >>> 2] >>> (24 - (z % 4) * 8)) & 255;
                      w.push(String.fromCharCode(_));
                    }
                    return w.join("");
                  },
                  parse: function (C) {
                    for (var D = C.length, T = [], w = 0; w < D; w++)
                      T[w >>> 2] |=
                        (C.charCodeAt(w) & 255) << (24 - (w % 4) * 8);
                    return new y.init(T, D);
                  },
                }),
                S = (v.Utf8 = {
                  stringify: function (C) {
                    try {
                      return decodeURIComponent(escape(b.stringify(C)));
                    } catch (D) {
                      throw new Error("Malformed UTF-8 data");
                    }
                  },
                  parse: function (C) {
                    return b.parse(unescape(encodeURIComponent(C)));
                  },
                }),
                A = (h.BufferedBlockAlgorithm = m.extend({
                  reset: function () {
                    (this._data = new y.init()), (this._nDataBytes = 0);
                  },
                  _append: function (C) {
                    typeof C == "string" && (C = S.parse(C)),
                      this._data.concat(C),
                      (this._nDataBytes += C.sigBytes);
                  },
                  _process: function (C) {
                    var D,
                      T = this._data,
                      w = T.words,
                      z = T.sigBytes,
                      _ = this.blockSize,
                      L = _ * 4,
                      q = z / L;
                    C
                      ? (q = s.ceil(q))
                      : (q = s.max((q | 0) - this._minBufferSize, 0));
                    var M = q * _,
                      j = s.min(M * 4, z);
                    if (M) {
                      for (var J = 0; J < M; J += _) this._doProcessBlock(w, J);
                      (D = w.splice(0, M)), (T.sigBytes -= j);
                    }
                    return new y.init(D, j);
                  },
                  clone: function () {
                    var C = m.clone.call(this);
                    return (C._data = this._data.clone()), C;
                  },
                  _minBufferSize: 0,
                }));
              h.Hasher = A.extend({
                cfg: m.extend(),
                init: function (C) {
                  (this.cfg = this.cfg.extend(C)), this.reset();
                },
                reset: function () {
                  A.reset.call(this), this._doReset();
                },
                update: function (C) {
                  return this._append(C), this._process(), this;
                },
                finalize: function (C) {
                  C && this._append(C);
                  var D = this._doFinalize();
                  return D;
                },
                blockSize: 16,
                _createHelper: function (C) {
                  return function (D, T) {
                    return new C.init(T).finalize(D);
                  };
                },
                _createHmacHelper: function (C) {
                  return function (D, T) {
                    return new R.HMAC.init(C, T).finalize(D);
                  };
                },
              });
              var R = (x.algo = {});
              return x;
            })(Math);
          return a;
        });
      })(Zl)),
    Zl.exports
  );
}
var Ql = { exports: {} },
  BA = Ql.exports,
  Om;
function ec() {
  return (
    Om ||
      ((Om = 1),
      (function (t, n) {
        (function (a, s) {
          t.exports = s(je());
        })(BA, function (a) {
          return (
            (function (s) {
              var l = a,
                c = l.lib,
                f = c.Base,
                d = c.WordArray,
                x = (l.x64 = {});
              (x.Word = f.extend({
                init: function (h, m) {
                  (this.high = h), (this.low = m);
                },
              })),
                (x.WordArray = f.extend({
                  init: function (h, m) {
                    (h = this.words = h || []),
                      m != s
                        ? (this.sigBytes = m)
                        : (this.sigBytes = h.length * 8);
                  },
                  toX32: function () {
                    for (
                      var h = this.words, m = h.length, y = [], v = 0;
                      v < m;
                      v++
                    ) {
                      var g = h[v];
                      y.push(g.high), y.push(g.low);
                    }
                    return d.create(y, this.sigBytes);
                  },
                  clone: function () {
                    for (
                      var h = f.clone.call(this),
                        m = (h.words = this.words.slice(0)),
                        y = m.length,
                        v = 0;
                      v < y;
                      v++
                    )
                      m[v] = m[v].clone();
                    return h;
                  },
                }));
            })(),
            a
          );
        });
      })(Ql)),
    Ql.exports
  );
}
var $l = { exports: {} },
  _A = $l.exports,
  Fm;
function TA() {
  return (
    Fm ||
      ((Fm = 1),
      (function (t, n) {
        (function (a, s) {
          t.exports = s(je());
        })(_A, function (a) {
          return (
            (function () {
              if (typeof ArrayBuffer == "function") {
                var s = a,
                  l = s.lib,
                  c = l.WordArray,
                  f = c.init,
                  d = (c.init = function (x) {
                    if (
                      (x instanceof ArrayBuffer && (x = new Uint8Array(x)),
                      (x instanceof Int8Array ||
                        (typeof Uint8ClampedArray != "undefined" &&
                          x instanceof Uint8ClampedArray) ||
                        x instanceof Int16Array ||
                        x instanceof Uint16Array ||
                        x instanceof Int32Array ||
                        x instanceof Uint32Array ||
                        x instanceof Float32Array ||
                        x instanceof Float64Array) &&
                        (x = new Uint8Array(
                          x.buffer,
                          x.byteOffset,
                          x.byteLength,
                        )),
                      x instanceof Uint8Array)
                    ) {
                      for (var h = x.byteLength, m = [], y = 0; y < h; y++)
                        m[y >>> 2] |= x[y] << (24 - (y % 4) * 8);
                      f.call(this, m, h);
                    } else f.apply(this, arguments);
                  });
                d.prototype = c;
              }
            })(),
            a.lib.WordArray
          );
        });
      })($l)),
    $l.exports
  );
}
var Wl = { exports: {} },
  RA = Wl.exports,
  zm;
function wA() {
  return (
    zm ||
      ((zm = 1),
      (function (t, n) {
        (function (a, s) {
          t.exports = s(je());
        })(RA, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.WordArray,
                f = s.enc;
              (f.Utf16 = f.Utf16BE =
                {
                  stringify: function (x) {
                    for (
                      var h = x.words, m = x.sigBytes, y = [], v = 0;
                      v < m;
                      v += 2
                    ) {
                      var g = (h[v >>> 2] >>> (16 - (v % 4) * 8)) & 65535;
                      y.push(String.fromCharCode(g));
                    }
                    return y.join("");
                  },
                  parse: function (x) {
                    for (var h = x.length, m = [], y = 0; y < h; y++)
                      m[y >>> 1] |= x.charCodeAt(y) << (16 - (y % 2) * 16);
                    return c.create(m, h * 2);
                  },
                }),
                (f.Utf16LE = {
                  stringify: function (x) {
                    for (
                      var h = x.words, m = x.sigBytes, y = [], v = 0;
                      v < m;
                      v += 2
                    ) {
                      var g = d((h[v >>> 2] >>> (16 - (v % 4) * 8)) & 65535);
                      y.push(String.fromCharCode(g));
                    }
                    return y.join("");
                  },
                  parse: function (x) {
                    for (var h = x.length, m = [], y = 0; y < h; y++)
                      m[y >>> 1] |= d(x.charCodeAt(y) << (16 - (y % 2) * 16));
                    return c.create(m, h * 2);
                  },
                });
              function d(x) {
                return ((x << 8) & 4278255360) | ((x >>> 8) & 16711935);
              }
            })(),
            a.enc.Utf16
          );
        });
      })(Wl)),
    Wl.exports
  );
}
var Jl = { exports: {} },
  MA = Jl.exports,
  Lm;
function or() {
  return (
    Lm ||
      ((Lm = 1),
      (function (t, n) {
        (function (a, s) {
          t.exports = s(je());
        })(MA, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.WordArray,
                f = s.enc;
              f.Base64 = {
                stringify: function (x) {
                  var h = x.words,
                    m = x.sigBytes,
                    y = this._map;
                  x.clamp();
                  for (var v = [], g = 0; g < m; g += 3)
                    for (
                      var b = (h[g >>> 2] >>> (24 - (g % 4) * 8)) & 255,
                        S =
                          (h[(g + 1) >>> 2] >>> (24 - ((g + 1) % 4) * 8)) & 255,
                        A =
                          (h[(g + 2) >>> 2] >>> (24 - ((g + 2) % 4) * 8)) & 255,
                        R = (b << 16) | (S << 8) | A,
                        C = 0;
                      C < 4 && g + C * 0.75 < m;
                      C++
                    )
                      v.push(y.charAt((R >>> (6 * (3 - C))) & 63));
                  var D = y.charAt(64);
                  if (D) for (; v.length % 4; ) v.push(D);
                  return v.join("");
                },
                parse: function (x) {
                  var h = x.length,
                    m = this._map,
                    y = this._reverseMap;
                  if (!y) {
                    y = this._reverseMap = [];
                    for (var v = 0; v < m.length; v++) y[m.charCodeAt(v)] = v;
                  }
                  var g = m.charAt(64);
                  if (g) {
                    var b = x.indexOf(g);
                    b !== -1 && (h = b);
                  }
                  return d(x, h, y);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              };
              function d(x, h, m) {
                for (var y = [], v = 0, g = 0; g < h; g++)
                  if (g % 4) {
                    var b = m[x.charCodeAt(g - 1)] << ((g % 4) * 2),
                      S = m[x.charCodeAt(g)] >>> (6 - (g % 4) * 2),
                      A = b | S;
                    (y[v >>> 2] |= A << (24 - (v % 4) * 8)), v++;
                  }
                return c.create(y, v);
              }
            })(),
            a.enc.Base64
          );
        });
      })(Jl)),
    Jl.exports
  );
}
var Il = { exports: {} },
  OA = Il.exports,
  Nm;
function FA() {
  return (
    Nm ||
      ((Nm = 1),
      (function (t, n) {
        (function (a, s) {
          t.exports = s(je());
        })(OA, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.WordArray,
                f = s.enc;
              f.Base64url = {
                stringify: function (x, h) {
                  h === void 0 && (h = !0);
                  var m = x.words,
                    y = x.sigBytes,
                    v = h ? this._safe_map : this._map;
                  x.clamp();
                  for (var g = [], b = 0; b < y; b += 3)
                    for (
                      var S = (m[b >>> 2] >>> (24 - (b % 4) * 8)) & 255,
                        A =
                          (m[(b + 1) >>> 2] >>> (24 - ((b + 1) % 4) * 8)) & 255,
                        R =
                          (m[(b + 2) >>> 2] >>> (24 - ((b + 2) % 4) * 8)) & 255,
                        C = (S << 16) | (A << 8) | R,
                        D = 0;
                      D < 4 && b + D * 0.75 < y;
                      D++
                    )
                      g.push(v.charAt((C >>> (6 * (3 - D))) & 63));
                  var T = v.charAt(64);
                  if (T) for (; g.length % 4; ) g.push(T);
                  return g.join("");
                },
                parse: function (x, h) {
                  h === void 0 && (h = !0);
                  var m = x.length,
                    y = h ? this._safe_map : this._map,
                    v = this._reverseMap;
                  if (!v) {
                    v = this._reverseMap = [];
                    for (var g = 0; g < y.length; g++) v[y.charCodeAt(g)] = g;
                  }
                  var b = y.charAt(64);
                  if (b) {
                    var S = x.indexOf(b);
                    S !== -1 && (m = S);
                  }
                  return d(x, m, v);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                _safe_map:
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
              };
              function d(x, h, m) {
                for (var y = [], v = 0, g = 0; g < h; g++)
                  if (g % 4) {
                    var b = m[x.charCodeAt(g - 1)] << ((g % 4) * 2),
                      S = m[x.charCodeAt(g)] >>> (6 - (g % 4) * 2),
                      A = b | S;
                    (y[v >>> 2] |= A << (24 - (v % 4) * 8)), v++;
                  }
                return c.create(y, v);
              }
            })(),
            a.enc.Base64url
          );
        });
      })(Il)),
    Il.exports
  );
}
var eu = { exports: {} },
  zA = eu.exports,
  Um;
function lr() {
  return (
    Um ||
      ((Um = 1),
      (function (t, n) {
        (function (a, s) {
          t.exports = s(je());
        })(zA, function (a) {
          return (
            (function (s) {
              var l = a,
                c = l.lib,
                f = c.WordArray,
                d = c.Hasher,
                x = l.algo,
                h = [];
              (function () {
                for (var S = 0; S < 64; S++)
                  h[S] = (s.abs(s.sin(S + 1)) * 4294967296) | 0;
              })();
              var m = (x.MD5 = d.extend({
                _doReset: function () {
                  this._hash = new f.init([
                    1732584193, 4023233417, 2562383102, 271733878,
                  ]);
                },
                _doProcessBlock: function (S, A) {
                  for (var R = 0; R < 16; R++) {
                    var C = A + R,
                      D = S[C];
                    S[C] =
                      (((D << 8) | (D >>> 24)) & 16711935) |
                      (((D << 24) | (D >>> 8)) & 4278255360);
                  }
                  var T = this._hash.words,
                    w = S[A + 0],
                    z = S[A + 1],
                    _ = S[A + 2],
                    L = S[A + 3],
                    q = S[A + 4],
                    M = S[A + 5],
                    j = S[A + 6],
                    J = S[A + 7],
                    I = S[A + 8],
                    le = S[A + 9],
                    ce = S[A + 10],
                    ee = S[A + 11],
                    oe = S[A + 12],
                    ie = S[A + 13],
                    ve = S[A + 14],
                    F = S[A + 15],
                    N = T[0],
                    X = T[1],
                    K = T[2],
                    P = T[3];
                  (N = y(N, X, K, P, w, 7, h[0])),
                    (P = y(P, N, X, K, z, 12, h[1])),
                    (K = y(K, P, N, X, _, 17, h[2])),
                    (X = y(X, K, P, N, L, 22, h[3])),
                    (N = y(N, X, K, P, q, 7, h[4])),
                    (P = y(P, N, X, K, M, 12, h[5])),
                    (K = y(K, P, N, X, j, 17, h[6])),
                    (X = y(X, K, P, N, J, 22, h[7])),
                    (N = y(N, X, K, P, I, 7, h[8])),
                    (P = y(P, N, X, K, le, 12, h[9])),
                    (K = y(K, P, N, X, ce, 17, h[10])),
                    (X = y(X, K, P, N, ee, 22, h[11])),
                    (N = y(N, X, K, P, oe, 7, h[12])),
                    (P = y(P, N, X, K, ie, 12, h[13])),
                    (K = y(K, P, N, X, ve, 17, h[14])),
                    (X = y(X, K, P, N, F, 22, h[15])),
                    (N = v(N, X, K, P, z, 5, h[16])),
                    (P = v(P, N, X, K, j, 9, h[17])),
                    (K = v(K, P, N, X, ee, 14, h[18])),
                    (X = v(X, K, P, N, w, 20, h[19])),
                    (N = v(N, X, K, P, M, 5, h[20])),
                    (P = v(P, N, X, K, ce, 9, h[21])),
                    (K = v(K, P, N, X, F, 14, h[22])),
                    (X = v(X, K, P, N, q, 20, h[23])),
                    (N = v(N, X, K, P, le, 5, h[24])),
                    (P = v(P, N, X, K, ve, 9, h[25])),
                    (K = v(K, P, N, X, L, 14, h[26])),
                    (X = v(X, K, P, N, I, 20, h[27])),
                    (N = v(N, X, K, P, ie, 5, h[28])),
                    (P = v(P, N, X, K, _, 9, h[29])),
                    (K = v(K, P, N, X, J, 14, h[30])),
                    (X = v(X, K, P, N, oe, 20, h[31])),
                    (N = g(N, X, K, P, M, 4, h[32])),
                    (P = g(P, N, X, K, I, 11, h[33])),
                    (K = g(K, P, N, X, ee, 16, h[34])),
                    (X = g(X, K, P, N, ve, 23, h[35])),
                    (N = g(N, X, K, P, z, 4, h[36])),
                    (P = g(P, N, X, K, q, 11, h[37])),
                    (K = g(K, P, N, X, J, 16, h[38])),
                    (X = g(X, K, P, N, ce, 23, h[39])),
                    (N = g(N, X, K, P, ie, 4, h[40])),
                    (P = g(P, N, X, K, w, 11, h[41])),
                    (K = g(K, P, N, X, L, 16, h[42])),
                    (X = g(X, K, P, N, j, 23, h[43])),
                    (N = g(N, X, K, P, le, 4, h[44])),
                    (P = g(P, N, X, K, oe, 11, h[45])),
                    (K = g(K, P, N, X, F, 16, h[46])),
                    (X = g(X, K, P, N, _, 23, h[47])),
                    (N = b(N, X, K, P, w, 6, h[48])),
                    (P = b(P, N, X, K, J, 10, h[49])),
                    (K = b(K, P, N, X, ve, 15, h[50])),
                    (X = b(X, K, P, N, M, 21, h[51])),
                    (N = b(N, X, K, P, oe, 6, h[52])),
                    (P = b(P, N, X, K, L, 10, h[53])),
                    (K = b(K, P, N, X, ce, 15, h[54])),
                    (X = b(X, K, P, N, z, 21, h[55])),
                    (N = b(N, X, K, P, I, 6, h[56])),
                    (P = b(P, N, X, K, F, 10, h[57])),
                    (K = b(K, P, N, X, j, 15, h[58])),
                    (X = b(X, K, P, N, ie, 21, h[59])),
                    (N = b(N, X, K, P, q, 6, h[60])),
                    (P = b(P, N, X, K, ee, 10, h[61])),
                    (K = b(K, P, N, X, _, 15, h[62])),
                    (X = b(X, K, P, N, le, 21, h[63])),
                    (T[0] = (T[0] + N) | 0),
                    (T[1] = (T[1] + X) | 0),
                    (T[2] = (T[2] + K) | 0),
                    (T[3] = (T[3] + P) | 0);
                },
                _doFinalize: function () {
                  var S = this._data,
                    A = S.words,
                    R = this._nDataBytes * 8,
                    C = S.sigBytes * 8;
                  A[C >>> 5] |= 128 << (24 - (C % 32));
                  var D = s.floor(R / 4294967296),
                    T = R;
                  (A[(((C + 64) >>> 9) << 4) + 15] =
                    (((D << 8) | (D >>> 24)) & 16711935) |
                    (((D << 24) | (D >>> 8)) & 4278255360)),
                    (A[(((C + 64) >>> 9) << 4) + 14] =
                      (((T << 8) | (T >>> 24)) & 16711935) |
                      (((T << 24) | (T >>> 8)) & 4278255360)),
                    (S.sigBytes = (A.length + 1) * 4),
                    this._process();
                  for (var w = this._hash, z = w.words, _ = 0; _ < 4; _++) {
                    var L = z[_];
                    z[_] =
                      (((L << 8) | (L >>> 24)) & 16711935) |
                      (((L << 24) | (L >>> 8)) & 4278255360);
                  }
                  return w;
                },
                clone: function () {
                  var S = d.clone.call(this);
                  return (S._hash = this._hash.clone()), S;
                },
              }));
              function y(S, A, R, C, D, T, w) {
                var z = S + ((A & R) | (~A & C)) + D + w;
                return ((z << T) | (z >>> (32 - T))) + A;
              }
              function v(S, A, R, C, D, T, w) {
                var z = S + ((A & C) | (R & ~C)) + D + w;
                return ((z << T) | (z >>> (32 - T))) + A;
              }
              function g(S, A, R, C, D, T, w) {
                var z = S + (A ^ R ^ C) + D + w;
                return ((z << T) | (z >>> (32 - T))) + A;
              }
              function b(S, A, R, C, D, T, w) {
                var z = S + (R ^ (A | ~C)) + D + w;
                return ((z << T) | (z >>> (32 - T))) + A;
              }
              (l.MD5 = d._createHelper(m)),
                (l.HmacMD5 = d._createHmacHelper(m));
            })(Math),
            a.MD5
          );
        });
      })(eu)),
    eu.exports
  );
}
var tu = { exports: {} },
  LA = tu.exports,
  km;
function mg() {
  return (
    km ||
      ((km = 1),
      (function (t, n) {
        (function (a, s) {
          t.exports = s(je());
        })(LA, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.WordArray,
                f = l.Hasher,
                d = s.algo,
                x = [],
                h = (d.SHA1 = f.extend({
                  _doReset: function () {
                    this._hash = new c.init([
                      1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                    ]);
                  },
                  _doProcessBlock: function (m, y) {
                    for (
                      var v = this._hash.words,
                        g = v[0],
                        b = v[1],
                        S = v[2],
                        A = v[3],
                        R = v[4],
                        C = 0;
                      C < 80;
                      C++
                    ) {
                      if (C < 16) x[C] = m[y + C] | 0;
                      else {
                        var D = x[C - 3] ^ x[C - 8] ^ x[C - 14] ^ x[C - 16];
                        x[C] = (D << 1) | (D >>> 31);
                      }
                      var T = ((g << 5) | (g >>> 27)) + R + x[C];
                      C < 20
                        ? (T += ((b & S) | (~b & A)) + 1518500249)
                        : C < 40
                          ? (T += (b ^ S ^ A) + 1859775393)
                          : C < 60
                            ? (T += ((b & S) | (b & A) | (S & A)) - 1894007588)
                            : (T += (b ^ S ^ A) - 899497514),
                        (R = A),
                        (A = S),
                        (S = (b << 30) | (b >>> 2)),
                        (b = g),
                        (g = T);
                    }
                    (v[0] = (v[0] + g) | 0),
                      (v[1] = (v[1] + b) | 0),
                      (v[2] = (v[2] + S) | 0),
                      (v[3] = (v[3] + A) | 0),
                      (v[4] = (v[4] + R) | 0);
                  },
                  _doFinalize: function () {
                    var m = this._data,
                      y = m.words,
                      v = this._nDataBytes * 8,
                      g = m.sigBytes * 8;
                    return (
                      (y[g >>> 5] |= 128 << (24 - (g % 32))),
                      (y[(((g + 64) >>> 9) << 4) + 14] = Math.floor(
                        v / 4294967296,
                      )),
                      (y[(((g + 64) >>> 9) << 4) + 15] = v),
                      (m.sigBytes = y.length * 4),
                      this._process(),
                      this._hash
                    );
                  },
                  clone: function () {
                    var m = f.clone.call(this);
                    return (m._hash = this._hash.clone()), m;
                  },
                }));
              (s.SHA1 = f._createHelper(h)),
                (s.HmacSHA1 = f._createHmacHelper(h));
            })(),
            a.SHA1
          );
        });
      })(tu)),
    tu.exports
  );
}
var nu = { exports: {} },
  NA = nu.exports,
  Hm;
function zh() {
  return (
    Hm ||
      ((Hm = 1),
      (function (t, n) {
        (function (a, s) {
          t.exports = s(je());
        })(NA, function (a) {
          return (
            (function (s) {
              var l = a,
                c = l.lib,
                f = c.WordArray,
                d = c.Hasher,
                x = l.algo,
                h = [],
                m = [];
              (function () {
                function g(R) {
                  for (var C = s.sqrt(R), D = 2; D <= C; D++)
                    if (!(R % D)) return !1;
                  return !0;
                }
                function b(R) {
                  return ((R - (R | 0)) * 4294967296) | 0;
                }
                for (var S = 2, A = 0; A < 64; )
                  g(S) &&
                    (A < 8 && (h[A] = b(s.pow(S, 1 / 2))),
                    (m[A] = b(s.pow(S, 1 / 3))),
                    A++),
                    S++;
              })();
              var y = [],
                v = (x.SHA256 = d.extend({
                  _doReset: function () {
                    this._hash = new f.init(h.slice(0));
                  },
                  _doProcessBlock: function (g, b) {
                    for (
                      var S = this._hash.words,
                        A = S[0],
                        R = S[1],
                        C = S[2],
                        D = S[3],
                        T = S[4],
                        w = S[5],
                        z = S[6],
                        _ = S[7],
                        L = 0;
                      L < 64;
                      L++
                    ) {
                      if (L < 16) y[L] = g[b + L] | 0;
                      else {
                        var q = y[L - 15],
                          M =
                            ((q << 25) | (q >>> 7)) ^
                            ((q << 14) | (q >>> 18)) ^
                            (q >>> 3),
                          j = y[L - 2],
                          J =
                            ((j << 15) | (j >>> 17)) ^
                            ((j << 13) | (j >>> 19)) ^
                            (j >>> 10);
                        y[L] = M + y[L - 7] + J + y[L - 16];
                      }
                      var I = (T & w) ^ (~T & z),
                        le = (A & R) ^ (A & C) ^ (R & C),
                        ce =
                          ((A << 30) | (A >>> 2)) ^
                          ((A << 19) | (A >>> 13)) ^
                          ((A << 10) | (A >>> 22)),
                        ee =
                          ((T << 26) | (T >>> 6)) ^
                          ((T << 21) | (T >>> 11)) ^
                          ((T << 7) | (T >>> 25)),
                        oe = _ + ee + I + m[L] + y[L],
                        ie = ce + le;
                      (_ = z),
                        (z = w),
                        (w = T),
                        (T = (D + oe) | 0),
                        (D = C),
                        (C = R),
                        (R = A),
                        (A = (oe + ie) | 0);
                    }
                    (S[0] = (S[0] + A) | 0),
                      (S[1] = (S[1] + R) | 0),
                      (S[2] = (S[2] + C) | 0),
                      (S[3] = (S[3] + D) | 0),
                      (S[4] = (S[4] + T) | 0),
                      (S[5] = (S[5] + w) | 0),
                      (S[6] = (S[6] + z) | 0),
                      (S[7] = (S[7] + _) | 0);
                  },
                  _doFinalize: function () {
                    var g = this._data,
                      b = g.words,
                      S = this._nDataBytes * 8,
                      A = g.sigBytes * 8;
                    return (
                      (b[A >>> 5] |= 128 << (24 - (A % 32))),
                      (b[(((A + 64) >>> 9) << 4) + 14] = s.floor(
                        S / 4294967296,
                      )),
                      (b[(((A + 64) >>> 9) << 4) + 15] = S),
                      (g.sigBytes = b.length * 4),
                      this._process(),
                      this._hash
                    );
                  },
                  clone: function () {
                    var g = d.clone.call(this);
                    return (g._hash = this._hash.clone()), g;
                  },
                }));
              (l.SHA256 = d._createHelper(v)),
                (l.HmacSHA256 = d._createHmacHelper(v));
            })(Math),
            a.SHA256
          );
        });
      })(nu)),
    nu.exports
  );
}
var iu = { exports: {} },
  UA = iu.exports,
  Vm;
function kA() {
  return (
    Vm ||
      ((Vm = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), zh());
        })(UA, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.WordArray,
                f = s.algo,
                d = f.SHA256,
                x = (f.SHA224 = d.extend({
                  _doReset: function () {
                    this._hash = new c.init([
                      3238371032, 914150663, 812702999, 4144912697, 4290775857,
                      1750603025, 1694076839, 3204075428,
                    ]);
                  },
                  _doFinalize: function () {
                    var h = d._doFinalize.call(this);
                    return (h.sigBytes -= 4), h;
                  },
                }));
              (s.SHA224 = d._createHelper(x)),
                (s.HmacSHA224 = d._createHmacHelper(x));
            })(),
            a.SHA224
          );
        });
      })(iu)),
    iu.exports
  );
}
var au = { exports: {} },
  HA = au.exports,
  qm;
function yg() {
  return (
    qm ||
      ((qm = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), ec());
        })(HA, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.Hasher,
                f = s.x64,
                d = f.Word,
                x = f.WordArray,
                h = s.algo;
              function m() {
                return d.create.apply(d, arguments);
              }
              var y = [
                  m(1116352408, 3609767458),
                  m(1899447441, 602891725),
                  m(3049323471, 3964484399),
                  m(3921009573, 2173295548),
                  m(961987163, 4081628472),
                  m(1508970993, 3053834265),
                  m(2453635748, 2937671579),
                  m(2870763221, 3664609560),
                  m(3624381080, 2734883394),
                  m(310598401, 1164996542),
                  m(607225278, 1323610764),
                  m(1426881987, 3590304994),
                  m(1925078388, 4068182383),
                  m(2162078206, 991336113),
                  m(2614888103, 633803317),
                  m(3248222580, 3479774868),
                  m(3835390401, 2666613458),
                  m(4022224774, 944711139),
                  m(264347078, 2341262773),
                  m(604807628, 2007800933),
                  m(770255983, 1495990901),
                  m(1249150122, 1856431235),
                  m(1555081692, 3175218132),
                  m(1996064986, 2198950837),
                  m(2554220882, 3999719339),
                  m(2821834349, 766784016),
                  m(2952996808, 2566594879),
                  m(3210313671, 3203337956),
                  m(3336571891, 1034457026),
                  m(3584528711, 2466948901),
                  m(113926993, 3758326383),
                  m(338241895, 168717936),
                  m(666307205, 1188179964),
                  m(773529912, 1546045734),
                  m(1294757372, 1522805485),
                  m(1396182291, 2643833823),
                  m(1695183700, 2343527390),
                  m(1986661051, 1014477480),
                  m(2177026350, 1206759142),
                  m(2456956037, 344077627),
                  m(2730485921, 1290863460),
                  m(2820302411, 3158454273),
                  m(3259730800, 3505952657),
                  m(3345764771, 106217008),
                  m(3516065817, 3606008344),
                  m(3600352804, 1432725776),
                  m(4094571909, 1467031594),
                  m(275423344, 851169720),
                  m(430227734, 3100823752),
                  m(506948616, 1363258195),
                  m(659060556, 3750685593),
                  m(883997877, 3785050280),
                  m(958139571, 3318307427),
                  m(1322822218, 3812723403),
                  m(1537002063, 2003034995),
                  m(1747873779, 3602036899),
                  m(1955562222, 1575990012),
                  m(2024104815, 1125592928),
                  m(2227730452, 2716904306),
                  m(2361852424, 442776044),
                  m(2428436474, 593698344),
                  m(2756734187, 3733110249),
                  m(3204031479, 2999351573),
                  m(3329325298, 3815920427),
                  m(3391569614, 3928383900),
                  m(3515267271, 566280711),
                  m(3940187606, 3454069534),
                  m(4118630271, 4000239992),
                  m(116418474, 1914138554),
                  m(174292421, 2731055270),
                  m(289380356, 3203993006),
                  m(460393269, 320620315),
                  m(685471733, 587496836),
                  m(852142971, 1086792851),
                  m(1017036298, 365543100),
                  m(1126000580, 2618297676),
                  m(1288033470, 3409855158),
                  m(1501505948, 4234509866),
                  m(1607167915, 987167468),
                  m(1816402316, 1246189591),
                ],
                v = [];
              (function () {
                for (var b = 0; b < 80; b++) v[b] = m();
              })();
              var g = (h.SHA512 = c.extend({
                _doReset: function () {
                  this._hash = new x.init([
                    new d.init(1779033703, 4089235720),
                    new d.init(3144134277, 2227873595),
                    new d.init(1013904242, 4271175723),
                    new d.init(2773480762, 1595750129),
                    new d.init(1359893119, 2917565137),
                    new d.init(2600822924, 725511199),
                    new d.init(528734635, 4215389547),
                    new d.init(1541459225, 327033209),
                  ]);
                },
                _doProcessBlock: function (b, S) {
                  for (
                    var A = this._hash.words,
                      R = A[0],
                      C = A[1],
                      D = A[2],
                      T = A[3],
                      w = A[4],
                      z = A[5],
                      _ = A[6],
                      L = A[7],
                      q = R.high,
                      M = R.low,
                      j = C.high,
                      J = C.low,
                      I = D.high,
                      le = D.low,
                      ce = T.high,
                      ee = T.low,
                      oe = w.high,
                      ie = w.low,
                      ve = z.high,
                      F = z.low,
                      N = _.high,
                      X = _.low,
                      K = L.high,
                      P = L.low,
                      pe = q,
                      xe = M,
                      Fe = j,
                      me = J,
                      Je = I,
                      Xe = le,
                      Pt = ce,
                      tt = ee,
                      nt = oe,
                      vt = ie,
                      Pn = ve,
                      bt = F,
                      ai = N,
                      An = X,
                      ri = K,
                      Yn = P,
                      Ut = 0;
                    Ut < 80;
                    Ut++
                  ) {
                    var Yt,
                      Sn,
                      ct = v[Ut];
                    if (Ut < 16)
                      (Sn = ct.high = b[S + Ut * 2] | 0),
                        (Yt = ct.low = b[S + Ut * 2 + 1] | 0);
                    else {
                      var si = v[Ut - 15],
                        Cn = si.high,
                        Dn = si.low,
                        Wt =
                          ((Cn >>> 1) | (Dn << 31)) ^
                          ((Cn >>> 8) | (Dn << 24)) ^
                          (Cn >>> 7),
                        nn =
                          ((Dn >>> 1) | (Cn << 31)) ^
                          ((Dn >>> 8) | (Cn << 24)) ^
                          ((Dn >>> 7) | (Cn << 25)),
                        ji = v[Ut - 2],
                        dn = ji.high,
                        yi = ji.low,
                        Xt =
                          ((dn >>> 19) | (yi << 13)) ^
                          ((dn << 3) | (yi >>> 29)) ^
                          (dn >>> 6),
                        wt =
                          ((yi >>> 19) | (dn << 13)) ^
                          ((yi << 3) | (dn >>> 29)) ^
                          ((yi >>> 6) | (dn << 26)),
                        Sa = v[Ut - 7],
                        pn = Sa.high,
                        kt = Sa.low,
                        Ca = v[Ut - 16],
                        Pi = Ca.high,
                        Da = Ca.low;
                      (Yt = nn + kt),
                        (Sn = Wt + pn + (Yt >>> 0 < nn >>> 0 ? 1 : 0)),
                        (Yt = Yt + wt),
                        (Sn = Sn + Xt + (Yt >>> 0 < wt >>> 0 ? 1 : 0)),
                        (Yt = Yt + Da),
                        (Sn = Sn + Pi + (Yt >>> 0 < Da >>> 0 ? 1 : 0)),
                        (ct.high = Sn),
                        (ct.low = Yt);
                    }
                    var oi = (nt & Pn) ^ (~nt & ai),
                      Xn = (vt & bt) ^ (~vt & An),
                      Gn = (pe & Fe) ^ (pe & Je) ^ (Fe & Je),
                      vi = (xe & me) ^ (xe & Xe) ^ (me & Xe),
                      gi =
                        ((pe >>> 28) | (xe << 4)) ^
                        ((pe << 30) | (xe >>> 2)) ^
                        ((pe << 25) | (xe >>> 7)),
                      Ba =
                        ((xe >>> 28) | (pe << 4)) ^
                        ((xe << 30) | (pe >>> 2)) ^
                        ((xe << 25) | (pe >>> 7)),
                      Ei =
                        ((nt >>> 14) | (vt << 18)) ^
                        ((nt >>> 18) | (vt << 14)) ^
                        ((nt << 23) | (vt >>> 9)),
                      bi =
                        ((vt >>> 14) | (nt << 18)) ^
                        ((vt >>> 18) | (nt << 14)) ^
                        ((vt << 23) | (nt >>> 9)),
                      Yi = y[Ut],
                      Ai = Yi.high,
                      U = Yi.low,
                      H = Yn + bi,
                      Z = ri + Ei + (H >>> 0 < Yn >>> 0 ? 1 : 0),
                      H = H + Xn,
                      Z = Z + oi + (H >>> 0 < Xn >>> 0 ? 1 : 0),
                      H = H + U,
                      Z = Z + Ai + (H >>> 0 < U >>> 0 ? 1 : 0),
                      H = H + Yt,
                      Z = Z + Sn + (H >>> 0 < Yt >>> 0 ? 1 : 0),
                      re = Ba + vi,
                      fe = gi + Gn + (re >>> 0 < Ba >>> 0 ? 1 : 0);
                    (ri = ai),
                      (Yn = An),
                      (ai = Pn),
                      (An = bt),
                      (Pn = nt),
                      (bt = vt),
                      (vt = (tt + H) | 0),
                      (nt = (Pt + Z + (vt >>> 0 < tt >>> 0 ? 1 : 0)) | 0),
                      (Pt = Je),
                      (tt = Xe),
                      (Je = Fe),
                      (Xe = me),
                      (Fe = pe),
                      (me = xe),
                      (xe = (H + re) | 0),
                      (pe = (Z + fe + (xe >>> 0 < H >>> 0 ? 1 : 0)) | 0);
                  }
                  (M = R.low = M + xe),
                    (R.high = q + pe + (M >>> 0 < xe >>> 0 ? 1 : 0)),
                    (J = C.low = J + me),
                    (C.high = j + Fe + (J >>> 0 < me >>> 0 ? 1 : 0)),
                    (le = D.low = le + Xe),
                    (D.high = I + Je + (le >>> 0 < Xe >>> 0 ? 1 : 0)),
                    (ee = T.low = ee + tt),
                    (T.high = ce + Pt + (ee >>> 0 < tt >>> 0 ? 1 : 0)),
                    (ie = w.low = ie + vt),
                    (w.high = oe + nt + (ie >>> 0 < vt >>> 0 ? 1 : 0)),
                    (F = z.low = F + bt),
                    (z.high = ve + Pn + (F >>> 0 < bt >>> 0 ? 1 : 0)),
                    (X = _.low = X + An),
                    (_.high = N + ai + (X >>> 0 < An >>> 0 ? 1 : 0)),
                    (P = L.low = P + Yn),
                    (L.high = K + ri + (P >>> 0 < Yn >>> 0 ? 1 : 0));
                },
                _doFinalize: function () {
                  var b = this._data,
                    S = b.words,
                    A = this._nDataBytes * 8,
                    R = b.sigBytes * 8;
                  (S[R >>> 5] |= 128 << (24 - (R % 32))),
                    (S[(((R + 128) >>> 10) << 5) + 30] = Math.floor(
                      A / 4294967296,
                    )),
                    (S[(((R + 128) >>> 10) << 5) + 31] = A),
                    (b.sigBytes = S.length * 4),
                    this._process();
                  var C = this._hash.toX32();
                  return C;
                },
                clone: function () {
                  var b = c.clone.call(this);
                  return (b._hash = this._hash.clone()), b;
                },
                blockSize: 1024 / 32,
              }));
              (s.SHA512 = c._createHelper(g)),
                (s.HmacSHA512 = c._createHmacHelper(g));
            })(),
            a.SHA512
          );
        });
      })(au)),
    au.exports
  );
}
var ru = { exports: {} },
  VA = ru.exports,
  jm;
function qA() {
  return (
    jm ||
      ((jm = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), ec(), yg());
        })(VA, function (a) {
          return (
            (function () {
              var s = a,
                l = s.x64,
                c = l.Word,
                f = l.WordArray,
                d = s.algo,
                x = d.SHA512,
                h = (d.SHA384 = x.extend({
                  _doReset: function () {
                    this._hash = new f.init([
                      new c.init(3418070365, 3238371032),
                      new c.init(1654270250, 914150663),
                      new c.init(2438529370, 812702999),
                      new c.init(355462360, 4144912697),
                      new c.init(1731405415, 4290775857),
                      new c.init(2394180231, 1750603025),
                      new c.init(3675008525, 1694076839),
                      new c.init(1203062813, 3204075428),
                    ]);
                  },
                  _doFinalize: function () {
                    var m = x._doFinalize.call(this);
                    return (m.sigBytes -= 16), m;
                  },
                }));
              (s.SHA384 = x._createHelper(h)),
                (s.HmacSHA384 = x._createHmacHelper(h));
            })(),
            a.SHA384
          );
        });
      })(ru)),
    ru.exports
  );
}
var su = { exports: {} },
  jA = su.exports,
  Pm;
function PA() {
  return (
    Pm ||
      ((Pm = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), ec());
        })(jA, function (a) {
          return (
            (function (s) {
              var l = a,
                c = l.lib,
                f = c.WordArray,
                d = c.Hasher,
                x = l.x64,
                h = x.Word,
                m = l.algo,
                y = [],
                v = [],
                g = [];
              (function () {
                for (var A = 1, R = 0, C = 0; C < 24; C++) {
                  y[A + 5 * R] = (((C + 1) * (C + 2)) / 2) % 64;
                  var D = R % 5,
                    T = (2 * A + 3 * R) % 5;
                  (A = D), (R = T);
                }
                for (var A = 0; A < 5; A++)
                  for (var R = 0; R < 5; R++)
                    v[A + 5 * R] = R + ((2 * A + 3 * R) % 5) * 5;
                for (var w = 1, z = 0; z < 24; z++) {
                  for (var _ = 0, L = 0, q = 0; q < 7; q++) {
                    if (w & 1) {
                      var M = (1 << q) - 1;
                      M < 32 ? (L ^= 1 << M) : (_ ^= 1 << (M - 32));
                    }
                    w & 128 ? (w = (w << 1) ^ 113) : (w <<= 1);
                  }
                  g[z] = h.create(_, L);
                }
              })();
              var b = [];
              (function () {
                for (var A = 0; A < 25; A++) b[A] = h.create();
              })();
              var S = (m.SHA3 = d.extend({
                cfg: d.cfg.extend({ outputLength: 512 }),
                _doReset: function () {
                  for (var A = (this._state = []), R = 0; R < 25; R++)
                    A[R] = new h.init();
                  this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
                },
                _doProcessBlock: function (A, R) {
                  for (
                    var C = this._state, D = this.blockSize / 2, T = 0;
                    T < D;
                    T++
                  ) {
                    var w = A[R + 2 * T],
                      z = A[R + 2 * T + 1];
                    (w =
                      (((w << 8) | (w >>> 24)) & 16711935) |
                      (((w << 24) | (w >>> 8)) & 4278255360)),
                      (z =
                        (((z << 8) | (z >>> 24)) & 16711935) |
                        (((z << 24) | (z >>> 8)) & 4278255360));
                    var _ = C[T];
                    (_.high ^= z), (_.low ^= w);
                  }
                  for (var L = 0; L < 24; L++) {
                    for (var q = 0; q < 5; q++) {
                      for (var M = 0, j = 0, J = 0; J < 5; J++) {
                        var _ = C[q + 5 * J];
                        (M ^= _.high), (j ^= _.low);
                      }
                      var I = b[q];
                      (I.high = M), (I.low = j);
                    }
                    for (var q = 0; q < 5; q++)
                      for (
                        var le = b[(q + 4) % 5],
                          ce = b[(q + 1) % 5],
                          ee = ce.high,
                          oe = ce.low,
                          M = le.high ^ ((ee << 1) | (oe >>> 31)),
                          j = le.low ^ ((oe << 1) | (ee >>> 31)),
                          J = 0;
                        J < 5;
                        J++
                      ) {
                        var _ = C[q + 5 * J];
                        (_.high ^= M), (_.low ^= j);
                      }
                    for (var ie = 1; ie < 25; ie++) {
                      var M,
                        j,
                        _ = C[ie],
                        ve = _.high,
                        F = _.low,
                        N = y[ie];
                      N < 32
                        ? ((M = (ve << N) | (F >>> (32 - N))),
                          (j = (F << N) | (ve >>> (32 - N))))
                        : ((M = (F << (N - 32)) | (ve >>> (64 - N))),
                          (j = (ve << (N - 32)) | (F >>> (64 - N))));
                      var X = b[v[ie]];
                      (X.high = M), (X.low = j);
                    }
                    var K = b[0],
                      P = C[0];
                    (K.high = P.high), (K.low = P.low);
                    for (var q = 0; q < 5; q++)
                      for (var J = 0; J < 5; J++) {
                        var ie = q + 5 * J,
                          _ = C[ie],
                          pe = b[ie],
                          xe = b[((q + 1) % 5) + 5 * J],
                          Fe = b[((q + 2) % 5) + 5 * J];
                        (_.high = pe.high ^ (~xe.high & Fe.high)),
                          (_.low = pe.low ^ (~xe.low & Fe.low));
                      }
                    var _ = C[0],
                      me = g[L];
                    (_.high ^= me.high), (_.low ^= me.low);
                  }
                },
                _doFinalize: function () {
                  var A = this._data,
                    R = A.words;
                  this._nDataBytes * 8;
                  var C = A.sigBytes * 8,
                    D = this.blockSize * 32;
                  (R[C >>> 5] |= 1 << (24 - (C % 32))),
                    (R[((s.ceil((C + 1) / D) * D) >>> 5) - 1] |= 128),
                    (A.sigBytes = R.length * 4),
                    this._process();
                  for (
                    var T = this._state,
                      w = this.cfg.outputLength / 8,
                      z = w / 8,
                      _ = [],
                      L = 0;
                    L < z;
                    L++
                  ) {
                    var q = T[L],
                      M = q.high,
                      j = q.low;
                    (M =
                      (((M << 8) | (M >>> 24)) & 16711935) |
                      (((M << 24) | (M >>> 8)) & 4278255360)),
                      (j =
                        (((j << 8) | (j >>> 24)) & 16711935) |
                        (((j << 24) | (j >>> 8)) & 4278255360)),
                      _.push(j),
                      _.push(M);
                  }
                  return new f.init(_, w);
                },
                clone: function () {
                  for (
                    var A = d.clone.call(this),
                      R = (A._state = this._state.slice(0)),
                      C = 0;
                    C < 25;
                    C++
                  )
                    R[C] = R[C].clone();
                  return A;
                },
              }));
              (l.SHA3 = d._createHelper(S)),
                (l.HmacSHA3 = d._createHmacHelper(S));
            })(Math),
            a.SHA3
          );
        });
      })(su)),
    su.exports
  );
}
var ou = { exports: {} },
  YA = ou.exports,
  Ym;
function XA() {
  return (
    Ym ||
      ((Ym = 1),
      (function (t, n) {
        (function (a, s) {
          t.exports = s(je());
        })(YA, function (a) {
          /** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/ return (
            (function (s) {
              var l = a,
                c = l.lib,
                f = c.WordArray,
                d = c.Hasher,
                x = l.algo,
                h = f.create([
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4,
                  13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4,
                  9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8,
                  12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10,
                  14, 1, 3, 8, 11, 6, 15, 13,
                ]),
                m = f.create([
                  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11,
                  3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7,
                  14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15,
                  0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6,
                  2, 13, 14, 0, 3, 9, 11,
                ]),
                y = f.create([
                  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6,
                  8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6,
                  7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15,
                  14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8,
                  13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
                ]),
                v = f.create([
                  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13,
                  15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11,
                  8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14,
                  14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14,
                  6, 8, 13, 6, 5, 15, 13, 11, 11,
                ]),
                g = f.create([
                  0, 1518500249, 1859775393, 2400959708, 2840853838,
                ]),
                b = f.create([
                  1352829926, 1548603684, 1836072691, 2053994217, 0,
                ]),
                S = (x.RIPEMD160 = d.extend({
                  _doReset: function () {
                    this._hash = f.create([
                      1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                    ]);
                  },
                  _doProcessBlock: function (z, _) {
                    for (var L = 0; L < 16; L++) {
                      var q = _ + L,
                        M = z[q];
                      z[q] =
                        (((M << 8) | (M >>> 24)) & 16711935) |
                        (((M << 24) | (M >>> 8)) & 4278255360);
                    }
                    var j = this._hash.words,
                      J = g.words,
                      I = b.words,
                      le = h.words,
                      ce = m.words,
                      ee = y.words,
                      oe = v.words,
                      ie,
                      ve,
                      F,
                      N,
                      X,
                      K,
                      P,
                      pe,
                      xe,
                      Fe;
                    (K = ie = j[0]),
                      (P = ve = j[1]),
                      (pe = F = j[2]),
                      (xe = N = j[3]),
                      (Fe = X = j[4]);
                    for (var me, L = 0; L < 80; L += 1)
                      (me = (ie + z[_ + le[L]]) | 0),
                        L < 16
                          ? (me += A(ve, F, N) + J[0])
                          : L < 32
                            ? (me += R(ve, F, N) + J[1])
                            : L < 48
                              ? (me += C(ve, F, N) + J[2])
                              : L < 64
                                ? (me += D(ve, F, N) + J[3])
                                : (me += T(ve, F, N) + J[4]),
                        (me = me | 0),
                        (me = w(me, ee[L])),
                        (me = (me + X) | 0),
                        (ie = X),
                        (X = N),
                        (N = w(F, 10)),
                        (F = ve),
                        (ve = me),
                        (me = (K + z[_ + ce[L]]) | 0),
                        L < 16
                          ? (me += T(P, pe, xe) + I[0])
                          : L < 32
                            ? (me += D(P, pe, xe) + I[1])
                            : L < 48
                              ? (me += C(P, pe, xe) + I[2])
                              : L < 64
                                ? (me += R(P, pe, xe) + I[3])
                                : (me += A(P, pe, xe) + I[4]),
                        (me = me | 0),
                        (me = w(me, oe[L])),
                        (me = (me + Fe) | 0),
                        (K = Fe),
                        (Fe = xe),
                        (xe = w(pe, 10)),
                        (pe = P),
                        (P = me);
                    (me = (j[1] + F + xe) | 0),
                      (j[1] = (j[2] + N + Fe) | 0),
                      (j[2] = (j[3] + X + K) | 0),
                      (j[3] = (j[4] + ie + P) | 0),
                      (j[4] = (j[0] + ve + pe) | 0),
                      (j[0] = me);
                  },
                  _doFinalize: function () {
                    var z = this._data,
                      _ = z.words,
                      L = this._nDataBytes * 8,
                      q = z.sigBytes * 8;
                    (_[q >>> 5] |= 128 << (24 - (q % 32))),
                      (_[(((q + 64) >>> 9) << 4) + 14] =
                        (((L << 8) | (L >>> 24)) & 16711935) |
                        (((L << 24) | (L >>> 8)) & 4278255360)),
                      (z.sigBytes = (_.length + 1) * 4),
                      this._process();
                    for (var M = this._hash, j = M.words, J = 0; J < 5; J++) {
                      var I = j[J];
                      j[J] =
                        (((I << 8) | (I >>> 24)) & 16711935) |
                        (((I << 24) | (I >>> 8)) & 4278255360);
                    }
                    return M;
                  },
                  clone: function () {
                    var z = d.clone.call(this);
                    return (z._hash = this._hash.clone()), z;
                  },
                }));
              function A(z, _, L) {
                return z ^ _ ^ L;
              }
              function R(z, _, L) {
                return (z & _) | (~z & L);
              }
              function C(z, _, L) {
                return (z | ~_) ^ L;
              }
              function D(z, _, L) {
                return (z & L) | (_ & ~L);
              }
              function T(z, _, L) {
                return z ^ (_ | ~L);
              }
              function w(z, _) {
                return (z << _) | (z >>> (32 - _));
              }
              (l.RIPEMD160 = d._createHelper(S)),
                (l.HmacRIPEMD160 = d._createHmacHelper(S));
            })(),
            a.RIPEMD160
          );
        });
      })(ou)),
    ou.exports
  );
}
var lu = { exports: {} },
  GA = lu.exports,
  Xm;
function Lh() {
  return (
    Xm ||
      ((Xm = 1),
      (function (t, n) {
        (function (a, s) {
          t.exports = s(je());
        })(GA, function (a) {
          (function () {
            var s = a,
              l = s.lib,
              c = l.Base,
              f = s.enc,
              d = f.Utf8,
              x = s.algo;
            x.HMAC = c.extend({
              init: function (h, m) {
                (h = this._hasher = new h.init()),
                  typeof m == "string" && (m = d.parse(m));
                var y = h.blockSize,
                  v = y * 4;
                m.sigBytes > v && (m = h.finalize(m)), m.clamp();
                for (
                  var g = (this._oKey = m.clone()),
                    b = (this._iKey = m.clone()),
                    S = g.words,
                    A = b.words,
                    R = 0;
                  R < y;
                  R++
                )
                  (S[R] ^= 1549556828), (A[R] ^= 909522486);
                (g.sigBytes = b.sigBytes = v), this.reset();
              },
              reset: function () {
                var h = this._hasher;
                h.reset(), h.update(this._iKey);
              },
              update: function (h) {
                return this._hasher.update(h), this;
              },
              finalize: function (h) {
                var m = this._hasher,
                  y = m.finalize(h);
                m.reset();
                var v = m.finalize(this._oKey.clone().concat(y));
                return v;
              },
            });
          })();
        });
      })(lu)),
    lu.exports
  );
}
var uu = { exports: {} },
  KA = uu.exports,
  Gm;
function ZA() {
  return (
    Gm ||
      ((Gm = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), zh(), Lh());
        })(KA, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.Base,
                f = l.WordArray,
                d = s.algo,
                x = d.SHA256,
                h = d.HMAC,
                m = (d.PBKDF2 = c.extend({
                  cfg: c.extend({
                    keySize: 128 / 32,
                    hasher: x,
                    iterations: 25e4,
                  }),
                  init: function (y) {
                    this.cfg = this.cfg.extend(y);
                  },
                  compute: function (y, v) {
                    for (
                      var g = this.cfg,
                        b = h.create(g.hasher, y),
                        S = f.create(),
                        A = f.create([1]),
                        R = S.words,
                        C = A.words,
                        D = g.keySize,
                        T = g.iterations;
                      R.length < D;

                    ) {
                      var w = b.update(v).finalize(A);
                      b.reset();
                      for (
                        var z = w.words, _ = z.length, L = w, q = 1;
                        q < T;
                        q++
                      ) {
                        (L = b.finalize(L)), b.reset();
                        for (var M = L.words, j = 0; j < _; j++) z[j] ^= M[j];
                      }
                      S.concat(w), C[0]++;
                    }
                    return (S.sigBytes = D * 4), S;
                  },
                }));
              s.PBKDF2 = function (y, v, g) {
                return m.create(g).compute(y, v);
              };
            })(),
            a.PBKDF2
          );
        });
      })(uu)),
    uu.exports
  );
}
var cu = { exports: {} },
  QA = cu.exports,
  Km;
function ba() {
  return (
    Km ||
      ((Km = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), mg(), Lh());
        })(QA, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.Base,
                f = l.WordArray,
                d = s.algo,
                x = d.MD5,
                h = (d.EvpKDF = c.extend({
                  cfg: c.extend({
                    keySize: 128 / 32,
                    hasher: x,
                    iterations: 1,
                  }),
                  init: function (m) {
                    this.cfg = this.cfg.extend(m);
                  },
                  compute: function (m, y) {
                    for (
                      var v,
                        g = this.cfg,
                        b = g.hasher.create(),
                        S = f.create(),
                        A = S.words,
                        R = g.keySize,
                        C = g.iterations;
                      A.length < R;

                    ) {
                      v && b.update(v),
                        (v = b.update(m).finalize(y)),
                        b.reset();
                      for (var D = 1; D < C; D++)
                        (v = b.finalize(v)), b.reset();
                      S.concat(v);
                    }
                    return (S.sigBytes = R * 4), S;
                  },
                }));
              s.EvpKDF = function (m, y, v) {
                return h.create(v).compute(m, y);
              };
            })(),
            a.EvpKDF
          );
        });
      })(cu)),
    cu.exports
  );
}
var fu = { exports: {} },
  $A = fu.exports,
  Zm;
function Nt() {
  return (
    Zm ||
      ((Zm = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), ba());
        })($A, function (a) {
          a.lib.Cipher ||
            (function (s) {
              var l = a,
                c = l.lib,
                f = c.Base,
                d = c.WordArray,
                x = c.BufferedBlockAlgorithm,
                h = l.enc;
              h.Utf8;
              var m = h.Base64,
                y = l.algo,
                v = y.EvpKDF,
                g = (c.Cipher = x.extend({
                  cfg: f.extend(),
                  createEncryptor: function (M, j) {
                    return this.create(this._ENC_XFORM_MODE, M, j);
                  },
                  createDecryptor: function (M, j) {
                    return this.create(this._DEC_XFORM_MODE, M, j);
                  },
                  init: function (M, j, J) {
                    (this.cfg = this.cfg.extend(J)),
                      (this._xformMode = M),
                      (this._key = j),
                      this.reset();
                  },
                  reset: function () {
                    x.reset.call(this), this._doReset();
                  },
                  process: function (M) {
                    return this._append(M), this._process();
                  },
                  finalize: function (M) {
                    M && this._append(M);
                    var j = this._doFinalize();
                    return j;
                  },
                  keySize: 128 / 32,
                  ivSize: 128 / 32,
                  _ENC_XFORM_MODE: 1,
                  _DEC_XFORM_MODE: 2,
                  _createHelper: (function () {
                    function M(j) {
                      return typeof j == "string" ? q : z;
                    }
                    return function (j) {
                      return {
                        encrypt: function (J, I, le) {
                          return M(I).encrypt(j, J, I, le);
                        },
                        decrypt: function (J, I, le) {
                          return M(I).decrypt(j, J, I, le);
                        },
                      };
                    };
                  })(),
                }));
              c.StreamCipher = g.extend({
                _doFinalize: function () {
                  var M = this._process(!0);
                  return M;
                },
                blockSize: 1,
              });
              var b = (l.mode = {}),
                S = (c.BlockCipherMode = f.extend({
                  createEncryptor: function (M, j) {
                    return this.Encryptor.create(M, j);
                  },
                  createDecryptor: function (M, j) {
                    return this.Decryptor.create(M, j);
                  },
                  init: function (M, j) {
                    (this._cipher = M), (this._iv = j);
                  },
                })),
                A = (b.CBC = (function () {
                  var M = S.extend();
                  (M.Encryptor = M.extend({
                    processBlock: function (J, I) {
                      var le = this._cipher,
                        ce = le.blockSize;
                      j.call(this, J, I, ce),
                        le.encryptBlock(J, I),
                        (this._prevBlock = J.slice(I, I + ce));
                    },
                  })),
                    (M.Decryptor = M.extend({
                      processBlock: function (J, I) {
                        var le = this._cipher,
                          ce = le.blockSize,
                          ee = J.slice(I, I + ce);
                        le.decryptBlock(J, I),
                          j.call(this, J, I, ce),
                          (this._prevBlock = ee);
                      },
                    }));
                  function j(J, I, le) {
                    var ce,
                      ee = this._iv;
                    ee ? ((ce = ee), (this._iv = s)) : (ce = this._prevBlock);
                    for (var oe = 0; oe < le; oe++) J[I + oe] ^= ce[oe];
                  }
                  return M;
                })()),
                R = (l.pad = {}),
                C = (R.Pkcs7 = {
                  pad: function (M, j) {
                    for (
                      var J = j * 4,
                        I = J - (M.sigBytes % J),
                        le = (I << 24) | (I << 16) | (I << 8) | I,
                        ce = [],
                        ee = 0;
                      ee < I;
                      ee += 4
                    )
                      ce.push(le);
                    var oe = d.create(ce, I);
                    M.concat(oe);
                  },
                  unpad: function (M) {
                    var j = M.words[(M.sigBytes - 1) >>> 2] & 255;
                    M.sigBytes -= j;
                  },
                });
              c.BlockCipher = g.extend({
                cfg: g.cfg.extend({ mode: A, padding: C }),
                reset: function () {
                  var M;
                  g.reset.call(this);
                  var j = this.cfg,
                    J = j.iv,
                    I = j.mode;
                  this._xformMode == this._ENC_XFORM_MODE
                    ? (M = I.createEncryptor)
                    : ((M = I.createDecryptor), (this._minBufferSize = 1)),
                    this._mode && this._mode.__creator == M
                      ? this._mode.init(this, J && J.words)
                      : ((this._mode = M.call(I, this, J && J.words)),
                        (this._mode.__creator = M));
                },
                _doProcessBlock: function (M, j) {
                  this._mode.processBlock(M, j);
                },
                _doFinalize: function () {
                  var M,
                    j = this.cfg.padding;
                  return (
                    this._xformMode == this._ENC_XFORM_MODE
                      ? (j.pad(this._data, this.blockSize),
                        (M = this._process(!0)))
                      : ((M = this._process(!0)), j.unpad(M)),
                    M
                  );
                },
                blockSize: 128 / 32,
              });
              var D = (c.CipherParams = f.extend({
                  init: function (M) {
                    this.mixIn(M);
                  },
                  toString: function (M) {
                    return (M || this.formatter).stringify(this);
                  },
                })),
                T = (l.format = {}),
                w = (T.OpenSSL = {
                  stringify: function (M) {
                    var j,
                      J = M.ciphertext,
                      I = M.salt;
                    return (
                      I
                        ? (j = d
                            .create([1398893684, 1701076831])
                            .concat(I)
                            .concat(J))
                        : (j = J),
                      j.toString(m)
                    );
                  },
                  parse: function (M) {
                    var j,
                      J = m.parse(M),
                      I = J.words;
                    return (
                      I[0] == 1398893684 &&
                        I[1] == 1701076831 &&
                        ((j = d.create(I.slice(2, 4))),
                        I.splice(0, 4),
                        (J.sigBytes -= 16)),
                      D.create({ ciphertext: J, salt: j })
                    );
                  },
                }),
                z = (c.SerializableCipher = f.extend({
                  cfg: f.extend({ format: w }),
                  encrypt: function (M, j, J, I) {
                    I = this.cfg.extend(I);
                    var le = M.createEncryptor(J, I),
                      ce = le.finalize(j),
                      ee = le.cfg;
                    return D.create({
                      ciphertext: ce,
                      key: J,
                      iv: ee.iv,
                      algorithm: M,
                      mode: ee.mode,
                      padding: ee.padding,
                      blockSize: M.blockSize,
                      formatter: I.format,
                    });
                  },
                  decrypt: function (M, j, J, I) {
                    (I = this.cfg.extend(I)), (j = this._parse(j, I.format));
                    var le = M.createDecryptor(J, I).finalize(j.ciphertext);
                    return le;
                  },
                  _parse: function (M, j) {
                    return typeof M == "string" ? j.parse(M, this) : M;
                  },
                })),
                _ = (l.kdf = {}),
                L = (_.OpenSSL = {
                  execute: function (M, j, J, I, le) {
                    if ((I || (I = d.random(64 / 8)), le))
                      var ce = v
                        .create({ keySize: j + J, hasher: le })
                        .compute(M, I);
                    else var ce = v.create({ keySize: j + J }).compute(M, I);
                    var ee = d.create(ce.words.slice(j), J * 4);
                    return (
                      (ce.sigBytes = j * 4),
                      D.create({ key: ce, iv: ee, salt: I })
                    );
                  },
                }),
                q = (c.PasswordBasedCipher = z.extend({
                  cfg: z.cfg.extend({ kdf: L }),
                  encrypt: function (M, j, J, I) {
                    I = this.cfg.extend(I);
                    var le = I.kdf.execute(
                      J,
                      M.keySize,
                      M.ivSize,
                      I.salt,
                      I.hasher,
                    );
                    I.iv = le.iv;
                    var ce = z.encrypt.call(this, M, j, le.key, I);
                    return ce.mixIn(le), ce;
                  },
                  decrypt: function (M, j, J, I) {
                    (I = this.cfg.extend(I)), (j = this._parse(j, I.format));
                    var le = I.kdf.execute(
                      J,
                      M.keySize,
                      M.ivSize,
                      j.salt,
                      I.hasher,
                    );
                    I.iv = le.iv;
                    var ce = z.decrypt.call(this, M, j, le.key, I);
                    return ce;
                  },
                }));
            })();
        });
      })(fu)),
    fu.exports
  );
}
var hu = { exports: {} },
  WA = hu.exports,
  Qm;
function JA() {
  return (
    Qm ||
      ((Qm = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), Nt());
        })(WA, function (a) {
          return (
            (a.mode.CFB = (function () {
              var s = a.lib.BlockCipherMode.extend();
              (s.Encryptor = s.extend({
                processBlock: function (c, f) {
                  var d = this._cipher,
                    x = d.blockSize;
                  l.call(this, c, f, x, d),
                    (this._prevBlock = c.slice(f, f + x));
                },
              })),
                (s.Decryptor = s.extend({
                  processBlock: function (c, f) {
                    var d = this._cipher,
                      x = d.blockSize,
                      h = c.slice(f, f + x);
                    l.call(this, c, f, x, d), (this._prevBlock = h);
                  },
                }));
              function l(c, f, d, x) {
                var h,
                  m = this._iv;
                m
                  ? ((h = m.slice(0)), (this._iv = void 0))
                  : (h = this._prevBlock),
                  x.encryptBlock(h, 0);
                for (var y = 0; y < d; y++) c[f + y] ^= h[y];
              }
              return s;
            })()),
            a.mode.CFB
          );
        });
      })(hu)),
    hu.exports
  );
}
var du = { exports: {} },
  IA = du.exports,
  $m;
function e5() {
  return (
    $m ||
      (($m = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), Nt());
        })(IA, function (a) {
          return (
            (a.mode.CTR = (function () {
              var s = a.lib.BlockCipherMode.extend(),
                l = (s.Encryptor = s.extend({
                  processBlock: function (c, f) {
                    var d = this._cipher,
                      x = d.blockSize,
                      h = this._iv,
                      m = this._counter;
                    h &&
                      ((m = this._counter = h.slice(0)), (this._iv = void 0));
                    var y = m.slice(0);
                    d.encryptBlock(y, 0), (m[x - 1] = (m[x - 1] + 1) | 0);
                    for (var v = 0; v < x; v++) c[f + v] ^= y[v];
                  },
                }));
              return (s.Decryptor = l), s;
            })()),
            a.mode.CTR
          );
        });
      })(du)),
    du.exports
  );
}
var pu = { exports: {} },
  t5 = pu.exports,
  Wm;
function n5() {
  return (
    Wm ||
      ((Wm = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), Nt());
        })(t5, function (a) {
          /** @preserve
           * Counter block mode compatible with  Dr Brian Gladman fileenc.c
           * derived from CryptoJS.mode.CTR
           * Jan Hruby jhruby.web@gmail.com
           */ return (
            (a.mode.CTRGladman = (function () {
              var s = a.lib.BlockCipherMode.extend();
              function l(d) {
                if (((d >> 24) & 255) === 255) {
                  var x = (d >> 16) & 255,
                    h = (d >> 8) & 255,
                    m = d & 255;
                  x === 255
                    ? ((x = 0),
                      h === 255 ? ((h = 0), m === 255 ? (m = 0) : ++m) : ++h)
                    : ++x,
                    (d = 0),
                    (d += x << 16),
                    (d += h << 8),
                    (d += m);
                } else d += 1 << 24;
                return d;
              }
              function c(d) {
                return (d[0] = l(d[0])) === 0 && (d[1] = l(d[1])), d;
              }
              var f = (s.Encryptor = s.extend({
                processBlock: function (d, x) {
                  var h = this._cipher,
                    m = h.blockSize,
                    y = this._iv,
                    v = this._counter;
                  y && ((v = this._counter = y.slice(0)), (this._iv = void 0)),
                    c(v);
                  var g = v.slice(0);
                  h.encryptBlock(g, 0);
                  for (var b = 0; b < m; b++) d[x + b] ^= g[b];
                },
              }));
              return (s.Decryptor = f), s;
            })()),
            a.mode.CTRGladman
          );
        });
      })(pu)),
    pu.exports
  );
}
var xu = { exports: {} },
  i5 = xu.exports,
  Jm;
function a5() {
  return (
    Jm ||
      ((Jm = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), Nt());
        })(i5, function (a) {
          return (
            (a.mode.OFB = (function () {
              var s = a.lib.BlockCipherMode.extend(),
                l = (s.Encryptor = s.extend({
                  processBlock: function (c, f) {
                    var d = this._cipher,
                      x = d.blockSize,
                      h = this._iv,
                      m = this._keystream;
                    h &&
                      ((m = this._keystream = h.slice(0)), (this._iv = void 0)),
                      d.encryptBlock(m, 0);
                    for (var y = 0; y < x; y++) c[f + y] ^= m[y];
                  },
                }));
              return (s.Decryptor = l), s;
            })()),
            a.mode.OFB
          );
        });
      })(xu)),
    xu.exports
  );
}
var mu = { exports: {} },
  r5 = mu.exports,
  Im;
function s5() {
  return (
    Im ||
      ((Im = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), Nt());
        })(r5, function (a) {
          return (
            (a.mode.ECB = (function () {
              var s = a.lib.BlockCipherMode.extend();
              return (
                (s.Encryptor = s.extend({
                  processBlock: function (l, c) {
                    this._cipher.encryptBlock(l, c);
                  },
                })),
                (s.Decryptor = s.extend({
                  processBlock: function (l, c) {
                    this._cipher.decryptBlock(l, c);
                  },
                })),
                s
              );
            })()),
            a.mode.ECB
          );
        });
      })(mu)),
    mu.exports
  );
}
var yu = { exports: {} },
  o5 = yu.exports,
  ey;
function l5() {
  return (
    ey ||
      ((ey = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), Nt());
        })(o5, function (a) {
          return (
            (a.pad.AnsiX923 = {
              pad: function (s, l) {
                var c = s.sigBytes,
                  f = l * 4,
                  d = f - (c % f),
                  x = c + d - 1;
                s.clamp(),
                  (s.words[x >>> 2] |= d << (24 - (x % 4) * 8)),
                  (s.sigBytes += d);
              },
              unpad: function (s) {
                var l = s.words[(s.sigBytes - 1) >>> 2] & 255;
                s.sigBytes -= l;
              },
            }),
            a.pad.Ansix923
          );
        });
      })(yu)),
    yu.exports
  );
}
var vu = { exports: {} },
  u5 = vu.exports,
  ty;
function c5() {
  return (
    ty ||
      ((ty = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), Nt());
        })(u5, function (a) {
          return (
            (a.pad.Iso10126 = {
              pad: function (s, l) {
                var c = l * 4,
                  f = c - (s.sigBytes % c);
                s.concat(a.lib.WordArray.random(f - 1)).concat(
                  a.lib.WordArray.create([f << 24], 1),
                );
              },
              unpad: function (s) {
                var l = s.words[(s.sigBytes - 1) >>> 2] & 255;
                s.sigBytes -= l;
              },
            }),
            a.pad.Iso10126
          );
        });
      })(vu)),
    vu.exports
  );
}
var gu = { exports: {} },
  f5 = gu.exports,
  ny;
function h5() {
  return (
    ny ||
      ((ny = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), Nt());
        })(f5, function (a) {
          return (
            (a.pad.Iso97971 = {
              pad: function (s, l) {
                s.concat(a.lib.WordArray.create([2147483648], 1)),
                  a.pad.ZeroPadding.pad(s, l);
              },
              unpad: function (s) {
                a.pad.ZeroPadding.unpad(s), s.sigBytes--;
              },
            }),
            a.pad.Iso97971
          );
        });
      })(gu)),
    gu.exports
  );
}
var Eu = { exports: {} },
  d5 = Eu.exports,
  iy;
function p5() {
  return (
    iy ||
      ((iy = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), Nt());
        })(d5, function (a) {
          return (
            (a.pad.ZeroPadding = {
              pad: function (s, l) {
                var c = l * 4;
                s.clamp(), (s.sigBytes += c - (s.sigBytes % c || c));
              },
              unpad: function (s) {
                for (
                  var l = s.words, c = s.sigBytes - 1, c = s.sigBytes - 1;
                  c >= 0;
                  c--
                )
                  if ((l[c >>> 2] >>> (24 - (c % 4) * 8)) & 255) {
                    s.sigBytes = c + 1;
                    break;
                  }
              },
            }),
            a.pad.ZeroPadding
          );
        });
      })(Eu)),
    Eu.exports
  );
}
var bu = { exports: {} },
  x5 = bu.exports,
  ay;
function m5() {
  return (
    ay ||
      ((ay = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), Nt());
        })(x5, function (a) {
          return (
            (a.pad.NoPadding = { pad: function () {}, unpad: function () {} }),
            a.pad.NoPadding
          );
        });
      })(bu)),
    bu.exports
  );
}
var Au = { exports: {} },
  y5 = Au.exports,
  ry;
function v5() {
  return (
    ry ||
      ((ry = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), Nt());
        })(y5, function (a) {
          return (
            (function (s) {
              var l = a,
                c = l.lib,
                f = c.CipherParams,
                d = l.enc,
                x = d.Hex,
                h = l.format;
              h.Hex = {
                stringify: function (m) {
                  return m.ciphertext.toString(x);
                },
                parse: function (m) {
                  var y = x.parse(m);
                  return f.create({ ciphertext: y });
                },
              };
            })(),
            a.format.Hex
          );
        });
      })(Au)),
    Au.exports
  );
}
var Su = { exports: {} },
  g5 = Su.exports,
  sy;
function E5() {
  return (
    sy ||
      ((sy = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), or(), lr(), ba(), Nt());
        })(g5, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.BlockCipher,
                f = s.algo,
                d = [],
                x = [],
                h = [],
                m = [],
                y = [],
                v = [],
                g = [],
                b = [],
                S = [],
                A = [];
              (function () {
                for (var D = [], T = 0; T < 256; T++)
                  T < 128 ? (D[T] = T << 1) : (D[T] = (T << 1) ^ 283);
                for (var w = 0, z = 0, T = 0; T < 256; T++) {
                  var _ = z ^ (z << 1) ^ (z << 2) ^ (z << 3) ^ (z << 4);
                  (_ = (_ >>> 8) ^ (_ & 255) ^ 99), (d[w] = _), (x[_] = w);
                  var L = D[w],
                    q = D[L],
                    M = D[q],
                    j = (D[_] * 257) ^ (_ * 16843008);
                  (h[w] = (j << 24) | (j >>> 8)),
                    (m[w] = (j << 16) | (j >>> 16)),
                    (y[w] = (j << 8) | (j >>> 24)),
                    (v[w] = j);
                  var j =
                    (M * 16843009) ^ (q * 65537) ^ (L * 257) ^ (w * 16843008);
                  (g[_] = (j << 24) | (j >>> 8)),
                    (b[_] = (j << 16) | (j >>> 16)),
                    (S[_] = (j << 8) | (j >>> 24)),
                    (A[_] = j),
                    w
                      ? ((w = L ^ D[D[D[M ^ L]]]), (z ^= D[D[z]]))
                      : (w = z = 1);
                }
              })();
              var R = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                C = (f.AES = c.extend({
                  _doReset: function () {
                    var D;
                    if (!(this._nRounds && this._keyPriorReset === this._key)) {
                      for (
                        var T = (this._keyPriorReset = this._key),
                          w = T.words,
                          z = T.sigBytes / 4,
                          _ = (this._nRounds = z + 6),
                          L = (_ + 1) * 4,
                          q = (this._keySchedule = []),
                          M = 0;
                        M < L;
                        M++
                      )
                        M < z
                          ? (q[M] = w[M])
                          : ((D = q[M - 1]),
                            M % z
                              ? z > 6 &&
                                M % z == 4 &&
                                (D =
                                  (d[D >>> 24] << 24) |
                                  (d[(D >>> 16) & 255] << 16) |
                                  (d[(D >>> 8) & 255] << 8) |
                                  d[D & 255])
                              : ((D = (D << 8) | (D >>> 24)),
                                (D =
                                  (d[D >>> 24] << 24) |
                                  (d[(D >>> 16) & 255] << 16) |
                                  (d[(D >>> 8) & 255] << 8) |
                                  d[D & 255]),
                                (D ^= R[(M / z) | 0] << 24)),
                            (q[M] = q[M - z] ^ D));
                      for (
                        var j = (this._invKeySchedule = []), J = 0;
                        J < L;
                        J++
                      ) {
                        var M = L - J;
                        if (J % 4) var D = q[M];
                        else var D = q[M - 4];
                        J < 4 || M <= 4
                          ? (j[J] = D)
                          : (j[J] =
                              g[d[D >>> 24]] ^
                              b[d[(D >>> 16) & 255]] ^
                              S[d[(D >>> 8) & 255]] ^
                              A[d[D & 255]]);
                      }
                    }
                  },
                  encryptBlock: function (D, T) {
                    this._doCryptBlock(D, T, this._keySchedule, h, m, y, v, d);
                  },
                  decryptBlock: function (D, T) {
                    var w = D[T + 1];
                    (D[T + 1] = D[T + 3]),
                      (D[T + 3] = w),
                      this._doCryptBlock(
                        D,
                        T,
                        this._invKeySchedule,
                        g,
                        b,
                        S,
                        A,
                        x,
                      );
                    var w = D[T + 1];
                    (D[T + 1] = D[T + 3]), (D[T + 3] = w);
                  },
                  _doCryptBlock: function (D, T, w, z, _, L, q, M) {
                    for (
                      var j = this._nRounds,
                        J = D[T] ^ w[0],
                        I = D[T + 1] ^ w[1],
                        le = D[T + 2] ^ w[2],
                        ce = D[T + 3] ^ w[3],
                        ee = 4,
                        oe = 1;
                      oe < j;
                      oe++
                    ) {
                      var ie =
                          z[J >>> 24] ^
                          _[(I >>> 16) & 255] ^
                          L[(le >>> 8) & 255] ^
                          q[ce & 255] ^
                          w[ee++],
                        ve =
                          z[I >>> 24] ^
                          _[(le >>> 16) & 255] ^
                          L[(ce >>> 8) & 255] ^
                          q[J & 255] ^
                          w[ee++],
                        F =
                          z[le >>> 24] ^
                          _[(ce >>> 16) & 255] ^
                          L[(J >>> 8) & 255] ^
                          q[I & 255] ^
                          w[ee++],
                        N =
                          z[ce >>> 24] ^
                          _[(J >>> 16) & 255] ^
                          L[(I >>> 8) & 255] ^
                          q[le & 255] ^
                          w[ee++];
                      (J = ie), (I = ve), (le = F), (ce = N);
                    }
                    var ie =
                        ((M[J >>> 24] << 24) |
                          (M[(I >>> 16) & 255] << 16) |
                          (M[(le >>> 8) & 255] << 8) |
                          M[ce & 255]) ^
                        w[ee++],
                      ve =
                        ((M[I >>> 24] << 24) |
                          (M[(le >>> 16) & 255] << 16) |
                          (M[(ce >>> 8) & 255] << 8) |
                          M[J & 255]) ^
                        w[ee++],
                      F =
                        ((M[le >>> 24] << 24) |
                          (M[(ce >>> 16) & 255] << 16) |
                          (M[(J >>> 8) & 255] << 8) |
                          M[I & 255]) ^
                        w[ee++],
                      N =
                        ((M[ce >>> 24] << 24) |
                          (M[(J >>> 16) & 255] << 16) |
                          (M[(I >>> 8) & 255] << 8) |
                          M[le & 255]) ^
                        w[ee++];
                    (D[T] = ie),
                      (D[T + 1] = ve),
                      (D[T + 2] = F),
                      (D[T + 3] = N);
                  },
                  keySize: 256 / 32,
                }));
              s.AES = c._createHelper(C);
            })(),
            a.AES
          );
        });
      })(Su)),
    Su.exports
  );
}
var Cu = { exports: {} },
  b5 = Cu.exports,
  oy;
function A5() {
  return (
    oy ||
      ((oy = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), or(), lr(), ba(), Nt());
        })(b5, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.WordArray,
                f = l.BlockCipher,
                d = s.algo,
                x = [
                  57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2,
                  59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39,
                  31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37,
                  29, 21, 13, 5, 28, 20, 12, 4,
                ],
                h = [
                  14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26,
                  8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51,
                  45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32,
                ],
                m = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
                y = [
                  {
                    0: 8421888,
                    268435456: 32768,
                    536870912: 8421378,
                    805306368: 2,
                    1073741824: 512,
                    1342177280: 8421890,
                    1610612736: 8389122,
                    1879048192: 8388608,
                    2147483648: 514,
                    2415919104: 8389120,
                    2684354560: 33280,
                    2952790016: 8421376,
                    3221225472: 32770,
                    3489660928: 8388610,
                    3758096384: 0,
                    4026531840: 33282,
                    134217728: 0,
                    402653184: 8421890,
                    671088640: 33282,
                    939524096: 32768,
                    1207959552: 8421888,
                    1476395008: 512,
                    1744830464: 8421378,
                    2013265920: 2,
                    2281701376: 8389120,
                    2550136832: 33280,
                    2818572288: 8421376,
                    3087007744: 8389122,
                    3355443200: 8388610,
                    3623878656: 32770,
                    3892314112: 514,
                    4160749568: 8388608,
                    1: 32768,
                    268435457: 2,
                    536870913: 8421888,
                    805306369: 8388608,
                    1073741825: 8421378,
                    1342177281: 33280,
                    1610612737: 512,
                    1879048193: 8389122,
                    2147483649: 8421890,
                    2415919105: 8421376,
                    2684354561: 8388610,
                    2952790017: 33282,
                    3221225473: 514,
                    3489660929: 8389120,
                    3758096385: 32770,
                    4026531841: 0,
                    134217729: 8421890,
                    402653185: 8421376,
                    671088641: 8388608,
                    939524097: 512,
                    1207959553: 32768,
                    1476395009: 8388610,
                    1744830465: 2,
                    2013265921: 33282,
                    2281701377: 32770,
                    2550136833: 8389122,
                    2818572289: 514,
                    3087007745: 8421888,
                    3355443201: 8389120,
                    3623878657: 0,
                    3892314113: 33280,
                    4160749569: 8421378,
                  },
                  {
                    0: 1074282512,
                    16777216: 16384,
                    33554432: 524288,
                    50331648: 1074266128,
                    67108864: 1073741840,
                    83886080: 1074282496,
                    100663296: 1073758208,
                    117440512: 16,
                    134217728: 540672,
                    150994944: 1073758224,
                    167772160: 1073741824,
                    184549376: 540688,
                    201326592: 524304,
                    218103808: 0,
                    234881024: 16400,
                    251658240: 1074266112,
                    8388608: 1073758208,
                    25165824: 540688,
                    41943040: 16,
                    58720256: 1073758224,
                    75497472: 1074282512,
                    92274688: 1073741824,
                    109051904: 524288,
                    125829120: 1074266128,
                    142606336: 524304,
                    159383552: 0,
                    176160768: 16384,
                    192937984: 1074266112,
                    209715200: 1073741840,
                    226492416: 540672,
                    243269632: 1074282496,
                    260046848: 16400,
                    268435456: 0,
                    285212672: 1074266128,
                    301989888: 1073758224,
                    318767104: 1074282496,
                    335544320: 1074266112,
                    352321536: 16,
                    369098752: 540688,
                    385875968: 16384,
                    402653184: 16400,
                    419430400: 524288,
                    436207616: 524304,
                    452984832: 1073741840,
                    469762048: 540672,
                    486539264: 1073758208,
                    503316480: 1073741824,
                    520093696: 1074282512,
                    276824064: 540688,
                    293601280: 524288,
                    310378496: 1074266112,
                    327155712: 16384,
                    343932928: 1073758208,
                    360710144: 1074282512,
                    377487360: 16,
                    394264576: 1073741824,
                    411041792: 1074282496,
                    427819008: 1073741840,
                    444596224: 1073758224,
                    461373440: 524304,
                    478150656: 0,
                    494927872: 16400,
                    511705088: 1074266128,
                    528482304: 540672,
                  },
                  {
                    0: 260,
                    1048576: 0,
                    2097152: 67109120,
                    3145728: 65796,
                    4194304: 65540,
                    5242880: 67108868,
                    6291456: 67174660,
                    7340032: 67174400,
                    8388608: 67108864,
                    9437184: 67174656,
                    10485760: 65792,
                    11534336: 67174404,
                    12582912: 67109124,
                    13631488: 65536,
                    14680064: 4,
                    15728640: 256,
                    524288: 67174656,
                    1572864: 67174404,
                    2621440: 0,
                    3670016: 67109120,
                    4718592: 67108868,
                    5767168: 65536,
                    6815744: 65540,
                    7864320: 260,
                    8912896: 4,
                    9961472: 256,
                    11010048: 67174400,
                    12058624: 65796,
                    13107200: 65792,
                    14155776: 67109124,
                    15204352: 67174660,
                    16252928: 67108864,
                    16777216: 67174656,
                    17825792: 65540,
                    18874368: 65536,
                    19922944: 67109120,
                    20971520: 256,
                    22020096: 67174660,
                    23068672: 67108868,
                    24117248: 0,
                    25165824: 67109124,
                    26214400: 67108864,
                    27262976: 4,
                    28311552: 65792,
                    29360128: 67174400,
                    30408704: 260,
                    31457280: 65796,
                    32505856: 67174404,
                    17301504: 67108864,
                    18350080: 260,
                    19398656: 67174656,
                    20447232: 0,
                    21495808: 65540,
                    22544384: 67109120,
                    23592960: 256,
                    24641536: 67174404,
                    25690112: 65536,
                    26738688: 67174660,
                    27787264: 65796,
                    28835840: 67108868,
                    29884416: 67109124,
                    30932992: 67174400,
                    31981568: 4,
                    33030144: 65792,
                  },
                  {
                    0: 2151682048,
                    65536: 2147487808,
                    131072: 4198464,
                    196608: 2151677952,
                    262144: 0,
                    327680: 4198400,
                    393216: 2147483712,
                    458752: 4194368,
                    524288: 2147483648,
                    589824: 4194304,
                    655360: 64,
                    720896: 2147487744,
                    786432: 2151678016,
                    851968: 4160,
                    917504: 4096,
                    983040: 2151682112,
                    32768: 2147487808,
                    98304: 64,
                    163840: 2151678016,
                    229376: 2147487744,
                    294912: 4198400,
                    360448: 2151682112,
                    425984: 0,
                    491520: 2151677952,
                    557056: 4096,
                    622592: 2151682048,
                    688128: 4194304,
                    753664: 4160,
                    819200: 2147483648,
                    884736: 4194368,
                    950272: 4198464,
                    1015808: 2147483712,
                    1048576: 4194368,
                    1114112: 4198400,
                    1179648: 2147483712,
                    1245184: 0,
                    1310720: 4160,
                    1376256: 2151678016,
                    1441792: 2151682048,
                    1507328: 2147487808,
                    1572864: 2151682112,
                    1638400: 2147483648,
                    1703936: 2151677952,
                    1769472: 4198464,
                    1835008: 2147487744,
                    1900544: 4194304,
                    1966080: 64,
                    2031616: 4096,
                    1081344: 2151677952,
                    1146880: 2151682112,
                    1212416: 0,
                    1277952: 4198400,
                    1343488: 4194368,
                    1409024: 2147483648,
                    1474560: 2147487808,
                    1540096: 64,
                    1605632: 2147483712,
                    1671168: 4096,
                    1736704: 2147487744,
                    1802240: 2151678016,
                    1867776: 4160,
                    1933312: 2151682048,
                    1998848: 4194304,
                    2064384: 4198464,
                  },
                  {
                    0: 128,
                    4096: 17039360,
                    8192: 262144,
                    12288: 536870912,
                    16384: 537133184,
                    20480: 16777344,
                    24576: 553648256,
                    28672: 262272,
                    32768: 16777216,
                    36864: 537133056,
                    40960: 536871040,
                    45056: 553910400,
                    49152: 553910272,
                    53248: 0,
                    57344: 17039488,
                    61440: 553648128,
                    2048: 17039488,
                    6144: 553648256,
                    10240: 128,
                    14336: 17039360,
                    18432: 262144,
                    22528: 537133184,
                    26624: 553910272,
                    30720: 536870912,
                    34816: 537133056,
                    38912: 0,
                    43008: 553910400,
                    47104: 16777344,
                    51200: 536871040,
                    55296: 553648128,
                    59392: 16777216,
                    63488: 262272,
                    65536: 262144,
                    69632: 128,
                    73728: 536870912,
                    77824: 553648256,
                    81920: 16777344,
                    86016: 553910272,
                    90112: 537133184,
                    94208: 16777216,
                    98304: 553910400,
                    102400: 553648128,
                    106496: 17039360,
                    110592: 537133056,
                    114688: 262272,
                    118784: 536871040,
                    122880: 0,
                    126976: 17039488,
                    67584: 553648256,
                    71680: 16777216,
                    75776: 17039360,
                    79872: 537133184,
                    83968: 536870912,
                    88064: 17039488,
                    92160: 128,
                    96256: 553910272,
                    100352: 262272,
                    104448: 553910400,
                    108544: 0,
                    112640: 553648128,
                    116736: 16777344,
                    120832: 262144,
                    124928: 537133056,
                    129024: 536871040,
                  },
                  {
                    0: 268435464,
                    256: 8192,
                    512: 270532608,
                    768: 270540808,
                    1024: 268443648,
                    1280: 2097152,
                    1536: 2097160,
                    1792: 268435456,
                    2048: 0,
                    2304: 268443656,
                    2560: 2105344,
                    2816: 8,
                    3072: 270532616,
                    3328: 2105352,
                    3584: 8200,
                    3840: 270540800,
                    128: 270532608,
                    384: 270540808,
                    640: 8,
                    896: 2097152,
                    1152: 2105352,
                    1408: 268435464,
                    1664: 268443648,
                    1920: 8200,
                    2176: 2097160,
                    2432: 8192,
                    2688: 268443656,
                    2944: 270532616,
                    3200: 0,
                    3456: 270540800,
                    3712: 2105344,
                    3968: 268435456,
                    4096: 268443648,
                    4352: 270532616,
                    4608: 270540808,
                    4864: 8200,
                    5120: 2097152,
                    5376: 268435456,
                    5632: 268435464,
                    5888: 2105344,
                    6144: 2105352,
                    6400: 0,
                    6656: 8,
                    6912: 270532608,
                    7168: 8192,
                    7424: 268443656,
                    7680: 270540800,
                    7936: 2097160,
                    4224: 8,
                    4480: 2105344,
                    4736: 2097152,
                    4992: 268435464,
                    5248: 268443648,
                    5504: 8200,
                    5760: 270540808,
                    6016: 270532608,
                    6272: 270540800,
                    6528: 270532616,
                    6784: 8192,
                    7040: 2105352,
                    7296: 2097160,
                    7552: 0,
                    7808: 268435456,
                    8064: 268443656,
                  },
                  {
                    0: 1048576,
                    16: 33555457,
                    32: 1024,
                    48: 1049601,
                    64: 34604033,
                    80: 0,
                    96: 1,
                    112: 34603009,
                    128: 33555456,
                    144: 1048577,
                    160: 33554433,
                    176: 34604032,
                    192: 34603008,
                    208: 1025,
                    224: 1049600,
                    240: 33554432,
                    8: 34603009,
                    24: 0,
                    40: 33555457,
                    56: 34604032,
                    72: 1048576,
                    88: 33554433,
                    104: 33554432,
                    120: 1025,
                    136: 1049601,
                    152: 33555456,
                    168: 34603008,
                    184: 1048577,
                    200: 1024,
                    216: 34604033,
                    232: 1,
                    248: 1049600,
                    256: 33554432,
                    272: 1048576,
                    288: 33555457,
                    304: 34603009,
                    320: 1048577,
                    336: 33555456,
                    352: 34604032,
                    368: 1049601,
                    384: 1025,
                    400: 34604033,
                    416: 1049600,
                    432: 1,
                    448: 0,
                    464: 34603008,
                    480: 33554433,
                    496: 1024,
                    264: 1049600,
                    280: 33555457,
                    296: 34603009,
                    312: 1,
                    328: 33554432,
                    344: 1048576,
                    360: 1025,
                    376: 34604032,
                    392: 33554433,
                    408: 34603008,
                    424: 0,
                    440: 34604033,
                    456: 1049601,
                    472: 1024,
                    488: 33555456,
                    504: 1048577,
                  },
                  {
                    0: 134219808,
                    1: 131072,
                    2: 134217728,
                    3: 32,
                    4: 131104,
                    5: 134350880,
                    6: 134350848,
                    7: 2048,
                    8: 134348800,
                    9: 134219776,
                    10: 133120,
                    11: 134348832,
                    12: 2080,
                    13: 0,
                    14: 134217760,
                    15: 133152,
                    2147483648: 2048,
                    2147483649: 134350880,
                    2147483650: 134219808,
                    2147483651: 134217728,
                    2147483652: 134348800,
                    2147483653: 133120,
                    2147483654: 133152,
                    2147483655: 32,
                    2147483656: 134217760,
                    2147483657: 2080,
                    2147483658: 131104,
                    2147483659: 134350848,
                    2147483660: 0,
                    2147483661: 134348832,
                    2147483662: 134219776,
                    2147483663: 131072,
                    16: 133152,
                    17: 134350848,
                    18: 32,
                    19: 2048,
                    20: 134219776,
                    21: 134217760,
                    22: 134348832,
                    23: 131072,
                    24: 0,
                    25: 131104,
                    26: 134348800,
                    27: 134219808,
                    28: 134350880,
                    29: 133120,
                    30: 2080,
                    31: 134217728,
                    2147483664: 131072,
                    2147483665: 2048,
                    2147483666: 134348832,
                    2147483667: 133152,
                    2147483668: 32,
                    2147483669: 134348800,
                    2147483670: 134217728,
                    2147483671: 134219808,
                    2147483672: 134350880,
                    2147483673: 134217760,
                    2147483674: 134219776,
                    2147483675: 0,
                    2147483676: 133120,
                    2147483677: 2080,
                    2147483678: 131104,
                    2147483679: 134350848,
                  },
                ],
                v = [
                  4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504,
                  2147483679,
                ],
                g = (d.DES = f.extend({
                  _doReset: function () {
                    for (
                      var R = this._key, C = R.words, D = [], T = 0;
                      T < 56;
                      T++
                    ) {
                      var w = x[T] - 1;
                      D[T] = (C[w >>> 5] >>> (31 - (w % 32))) & 1;
                    }
                    for (var z = (this._subKeys = []), _ = 0; _ < 16; _++) {
                      for (var L = (z[_] = []), q = m[_], T = 0; T < 24; T++)
                        (L[(T / 6) | 0] |=
                          D[(h[T] - 1 + q) % 28] << (31 - (T % 6))),
                          (L[4 + ((T / 6) | 0)] |=
                            D[28 + ((h[T + 24] - 1 + q) % 28)] <<
                            (31 - (T % 6)));
                      L[0] = (L[0] << 1) | (L[0] >>> 31);
                      for (var T = 1; T < 7; T++)
                        L[T] = L[T] >>> ((T - 1) * 4 + 3);
                      L[7] = (L[7] << 5) | (L[7] >>> 27);
                    }
                    for (var M = (this._invSubKeys = []), T = 0; T < 16; T++)
                      M[T] = z[15 - T];
                  },
                  encryptBlock: function (R, C) {
                    this._doCryptBlock(R, C, this._subKeys);
                  },
                  decryptBlock: function (R, C) {
                    this._doCryptBlock(R, C, this._invSubKeys);
                  },
                  _doCryptBlock: function (R, C, D) {
                    (this._lBlock = R[C]),
                      (this._rBlock = R[C + 1]),
                      b.call(this, 4, 252645135),
                      b.call(this, 16, 65535),
                      S.call(this, 2, 858993459),
                      S.call(this, 8, 16711935),
                      b.call(this, 1, 1431655765);
                    for (var T = 0; T < 16; T++) {
                      for (
                        var w = D[T],
                          z = this._lBlock,
                          _ = this._rBlock,
                          L = 0,
                          q = 0;
                        q < 8;
                        q++
                      )
                        L |= y[q][((_ ^ w[q]) & v[q]) >>> 0];
                      (this._lBlock = _), (this._rBlock = z ^ L);
                    }
                    var M = this._lBlock;
                    (this._lBlock = this._rBlock),
                      (this._rBlock = M),
                      b.call(this, 1, 1431655765),
                      S.call(this, 8, 16711935),
                      S.call(this, 2, 858993459),
                      b.call(this, 16, 65535),
                      b.call(this, 4, 252645135),
                      (R[C] = this._lBlock),
                      (R[C + 1] = this._rBlock);
                  },
                  keySize: 64 / 32,
                  ivSize: 64 / 32,
                  blockSize: 64 / 32,
                }));
              function b(R, C) {
                var D = ((this._lBlock >>> R) ^ this._rBlock) & C;
                (this._rBlock ^= D), (this._lBlock ^= D << R);
              }
              function S(R, C) {
                var D = ((this._rBlock >>> R) ^ this._lBlock) & C;
                (this._lBlock ^= D), (this._rBlock ^= D << R);
              }
              s.DES = f._createHelper(g);
              var A = (d.TripleDES = f.extend({
                _doReset: function () {
                  var R = this._key,
                    C = R.words;
                  if (C.length !== 2 && C.length !== 4 && C.length < 6)
                    throw new Error(
                      "Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.",
                    );
                  var D = C.slice(0, 2),
                    T = C.length < 4 ? C.slice(0, 2) : C.slice(2, 4),
                    w = C.length < 6 ? C.slice(0, 2) : C.slice(4, 6);
                  (this._des1 = g.createEncryptor(c.create(D))),
                    (this._des2 = g.createEncryptor(c.create(T))),
                    (this._des3 = g.createEncryptor(c.create(w)));
                },
                encryptBlock: function (R, C) {
                  this._des1.encryptBlock(R, C),
                    this._des2.decryptBlock(R, C),
                    this._des3.encryptBlock(R, C);
                },
                decryptBlock: function (R, C) {
                  this._des3.decryptBlock(R, C),
                    this._des2.encryptBlock(R, C),
                    this._des1.decryptBlock(R, C);
                },
                keySize: 192 / 32,
                ivSize: 64 / 32,
                blockSize: 64 / 32,
              }));
              s.TripleDES = f._createHelper(A);
            })(),
            a.TripleDES
          );
        });
      })(Cu)),
    Cu.exports
  );
}
var Du = { exports: {} },
  S5 = Du.exports,
  ly;
function C5() {
  return (
    ly ||
      ((ly = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), or(), lr(), ba(), Nt());
        })(S5, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.StreamCipher,
                f = s.algo,
                d = (f.RC4 = c.extend({
                  _doReset: function () {
                    for (
                      var m = this._key,
                        y = m.words,
                        v = m.sigBytes,
                        g = (this._S = []),
                        b = 0;
                      b < 256;
                      b++
                    )
                      g[b] = b;
                    for (var b = 0, S = 0; b < 256; b++) {
                      var A = b % v,
                        R = (y[A >>> 2] >>> (24 - (A % 4) * 8)) & 255;
                      S = (S + g[b] + R) % 256;
                      var C = g[b];
                      (g[b] = g[S]), (g[S] = C);
                    }
                    this._i = this._j = 0;
                  },
                  _doProcessBlock: function (m, y) {
                    m[y] ^= x.call(this);
                  },
                  keySize: 256 / 32,
                  ivSize: 0,
                }));
              function x() {
                for (
                  var m = this._S, y = this._i, v = this._j, g = 0, b = 0;
                  b < 4;
                  b++
                ) {
                  (y = (y + 1) % 256), (v = (v + m[y]) % 256);
                  var S = m[y];
                  (m[y] = m[v]),
                    (m[v] = S),
                    (g |= m[(m[y] + m[v]) % 256] << (24 - b * 8));
                }
                return (this._i = y), (this._j = v), g;
              }
              s.RC4 = c._createHelper(d);
              var h = (f.RC4Drop = d.extend({
                cfg: d.cfg.extend({ drop: 192 }),
                _doReset: function () {
                  d._doReset.call(this);
                  for (var m = this.cfg.drop; m > 0; m--) x.call(this);
                },
              }));
              s.RC4Drop = c._createHelper(h);
            })(),
            a.RC4
          );
        });
      })(Du)),
    Du.exports
  );
}
var Bu = { exports: {} },
  D5 = Bu.exports,
  uy;
function B5() {
  return (
    uy ||
      ((uy = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), or(), lr(), ba(), Nt());
        })(D5, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.StreamCipher,
                f = s.algo,
                d = [],
                x = [],
                h = [],
                m = (f.Rabbit = c.extend({
                  _doReset: function () {
                    for (
                      var v = this._key.words, g = this.cfg.iv, b = 0;
                      b < 4;
                      b++
                    )
                      v[b] =
                        (((v[b] << 8) | (v[b] >>> 24)) & 16711935) |
                        (((v[b] << 24) | (v[b] >>> 8)) & 4278255360);
                    var S = (this._X = [
                        v[0],
                        (v[3] << 16) | (v[2] >>> 16),
                        v[1],
                        (v[0] << 16) | (v[3] >>> 16),
                        v[2],
                        (v[1] << 16) | (v[0] >>> 16),
                        v[3],
                        (v[2] << 16) | (v[1] >>> 16),
                      ]),
                      A = (this._C = [
                        (v[2] << 16) | (v[2] >>> 16),
                        (v[0] & 4294901760) | (v[1] & 65535),
                        (v[3] << 16) | (v[3] >>> 16),
                        (v[1] & 4294901760) | (v[2] & 65535),
                        (v[0] << 16) | (v[0] >>> 16),
                        (v[2] & 4294901760) | (v[3] & 65535),
                        (v[1] << 16) | (v[1] >>> 16),
                        (v[3] & 4294901760) | (v[0] & 65535),
                      ]);
                    this._b = 0;
                    for (var b = 0; b < 4; b++) y.call(this);
                    for (var b = 0; b < 8; b++) A[b] ^= S[(b + 4) & 7];
                    if (g) {
                      var R = g.words,
                        C = R[0],
                        D = R[1],
                        T =
                          (((C << 8) | (C >>> 24)) & 16711935) |
                          (((C << 24) | (C >>> 8)) & 4278255360),
                        w =
                          (((D << 8) | (D >>> 24)) & 16711935) |
                          (((D << 24) | (D >>> 8)) & 4278255360),
                        z = (T >>> 16) | (w & 4294901760),
                        _ = (w << 16) | (T & 65535);
                      (A[0] ^= T),
                        (A[1] ^= z),
                        (A[2] ^= w),
                        (A[3] ^= _),
                        (A[4] ^= T),
                        (A[5] ^= z),
                        (A[6] ^= w),
                        (A[7] ^= _);
                      for (var b = 0; b < 4; b++) y.call(this);
                    }
                  },
                  _doProcessBlock: function (v, g) {
                    var b = this._X;
                    y.call(this),
                      (d[0] = b[0] ^ (b[5] >>> 16) ^ (b[3] << 16)),
                      (d[1] = b[2] ^ (b[7] >>> 16) ^ (b[5] << 16)),
                      (d[2] = b[4] ^ (b[1] >>> 16) ^ (b[7] << 16)),
                      (d[3] = b[6] ^ (b[3] >>> 16) ^ (b[1] << 16));
                    for (var S = 0; S < 4; S++)
                      (d[S] =
                        (((d[S] << 8) | (d[S] >>> 24)) & 16711935) |
                        (((d[S] << 24) | (d[S] >>> 8)) & 4278255360)),
                        (v[g + S] ^= d[S]);
                  },
                  blockSize: 128 / 32,
                  ivSize: 64 / 32,
                }));
              function y() {
                for (var v = this._X, g = this._C, b = 0; b < 8; b++)
                  x[b] = g[b];
                (g[0] = (g[0] + 1295307597 + this._b) | 0),
                  (g[1] =
                    (g[1] + 3545052371 + (g[0] >>> 0 < x[0] >>> 0 ? 1 : 0)) |
                    0),
                  (g[2] =
                    (g[2] + 886263092 + (g[1] >>> 0 < x[1] >>> 0 ? 1 : 0)) | 0),
                  (g[3] =
                    (g[3] + 1295307597 + (g[2] >>> 0 < x[2] >>> 0 ? 1 : 0)) |
                    0),
                  (g[4] =
                    (g[4] + 3545052371 + (g[3] >>> 0 < x[3] >>> 0 ? 1 : 0)) |
                    0),
                  (g[5] =
                    (g[5] + 886263092 + (g[4] >>> 0 < x[4] >>> 0 ? 1 : 0)) | 0),
                  (g[6] =
                    (g[6] + 1295307597 + (g[5] >>> 0 < x[5] >>> 0 ? 1 : 0)) |
                    0),
                  (g[7] =
                    (g[7] + 3545052371 + (g[6] >>> 0 < x[6] >>> 0 ? 1 : 0)) |
                    0),
                  (this._b = g[7] >>> 0 < x[7] >>> 0 ? 1 : 0);
                for (var b = 0; b < 8; b++) {
                  var S = v[b] + g[b],
                    A = S & 65535,
                    R = S >>> 16,
                    C = ((((A * A) >>> 17) + A * R) >>> 15) + R * R,
                    D = (((S & 4294901760) * S) | 0) + (((S & 65535) * S) | 0);
                  h[b] = C ^ D;
                }
                (v[0] =
                  (h[0] +
                    ((h[7] << 16) | (h[7] >>> 16)) +
                    ((h[6] << 16) | (h[6] >>> 16))) |
                  0),
                  (v[1] = (h[1] + ((h[0] << 8) | (h[0] >>> 24)) + h[7]) | 0),
                  (v[2] =
                    (h[2] +
                      ((h[1] << 16) | (h[1] >>> 16)) +
                      ((h[0] << 16) | (h[0] >>> 16))) |
                    0),
                  (v[3] = (h[3] + ((h[2] << 8) | (h[2] >>> 24)) + h[1]) | 0),
                  (v[4] =
                    (h[4] +
                      ((h[3] << 16) | (h[3] >>> 16)) +
                      ((h[2] << 16) | (h[2] >>> 16))) |
                    0),
                  (v[5] = (h[5] + ((h[4] << 8) | (h[4] >>> 24)) + h[3]) | 0),
                  (v[6] =
                    (h[6] +
                      ((h[5] << 16) | (h[5] >>> 16)) +
                      ((h[4] << 16) | (h[4] >>> 16))) |
                    0),
                  (v[7] = (h[7] + ((h[6] << 8) | (h[6] >>> 24)) + h[5]) | 0);
              }
              s.Rabbit = c._createHelper(m);
            })(),
            a.Rabbit
          );
        });
      })(Bu)),
    Bu.exports
  );
}
var _u = { exports: {} },
  _5 = _u.exports,
  cy;
function T5() {
  return (
    cy ||
      ((cy = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), or(), lr(), ba(), Nt());
        })(_5, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.StreamCipher,
                f = s.algo,
                d = [],
                x = [],
                h = [],
                m = (f.RabbitLegacy = c.extend({
                  _doReset: function () {
                    var v = this._key.words,
                      g = this.cfg.iv,
                      b = (this._X = [
                        v[0],
                        (v[3] << 16) | (v[2] >>> 16),
                        v[1],
                        (v[0] << 16) | (v[3] >>> 16),
                        v[2],
                        (v[1] << 16) | (v[0] >>> 16),
                        v[3],
                        (v[2] << 16) | (v[1] >>> 16),
                      ]),
                      S = (this._C = [
                        (v[2] << 16) | (v[2] >>> 16),
                        (v[0] & 4294901760) | (v[1] & 65535),
                        (v[3] << 16) | (v[3] >>> 16),
                        (v[1] & 4294901760) | (v[2] & 65535),
                        (v[0] << 16) | (v[0] >>> 16),
                        (v[2] & 4294901760) | (v[3] & 65535),
                        (v[1] << 16) | (v[1] >>> 16),
                        (v[3] & 4294901760) | (v[0] & 65535),
                      ]);
                    this._b = 0;
                    for (var A = 0; A < 4; A++) y.call(this);
                    for (var A = 0; A < 8; A++) S[A] ^= b[(A + 4) & 7];
                    if (g) {
                      var R = g.words,
                        C = R[0],
                        D = R[1],
                        T =
                          (((C << 8) | (C >>> 24)) & 16711935) |
                          (((C << 24) | (C >>> 8)) & 4278255360),
                        w =
                          (((D << 8) | (D >>> 24)) & 16711935) |
                          (((D << 24) | (D >>> 8)) & 4278255360),
                        z = (T >>> 16) | (w & 4294901760),
                        _ = (w << 16) | (T & 65535);
                      (S[0] ^= T),
                        (S[1] ^= z),
                        (S[2] ^= w),
                        (S[3] ^= _),
                        (S[4] ^= T),
                        (S[5] ^= z),
                        (S[6] ^= w),
                        (S[7] ^= _);
                      for (var A = 0; A < 4; A++) y.call(this);
                    }
                  },
                  _doProcessBlock: function (v, g) {
                    var b = this._X;
                    y.call(this),
                      (d[0] = b[0] ^ (b[5] >>> 16) ^ (b[3] << 16)),
                      (d[1] = b[2] ^ (b[7] >>> 16) ^ (b[5] << 16)),
                      (d[2] = b[4] ^ (b[1] >>> 16) ^ (b[7] << 16)),
                      (d[3] = b[6] ^ (b[3] >>> 16) ^ (b[1] << 16));
                    for (var S = 0; S < 4; S++)
                      (d[S] =
                        (((d[S] << 8) | (d[S] >>> 24)) & 16711935) |
                        (((d[S] << 24) | (d[S] >>> 8)) & 4278255360)),
                        (v[g + S] ^= d[S]);
                  },
                  blockSize: 128 / 32,
                  ivSize: 64 / 32,
                }));
              function y() {
                for (var v = this._X, g = this._C, b = 0; b < 8; b++)
                  x[b] = g[b];
                (g[0] = (g[0] + 1295307597 + this._b) | 0),
                  (g[1] =
                    (g[1] + 3545052371 + (g[0] >>> 0 < x[0] >>> 0 ? 1 : 0)) |
                    0),
                  (g[2] =
                    (g[2] + 886263092 + (g[1] >>> 0 < x[1] >>> 0 ? 1 : 0)) | 0),
                  (g[3] =
                    (g[3] + 1295307597 + (g[2] >>> 0 < x[2] >>> 0 ? 1 : 0)) |
                    0),
                  (g[4] =
                    (g[4] + 3545052371 + (g[3] >>> 0 < x[3] >>> 0 ? 1 : 0)) |
                    0),
                  (g[5] =
                    (g[5] + 886263092 + (g[4] >>> 0 < x[4] >>> 0 ? 1 : 0)) | 0),
                  (g[6] =
                    (g[6] + 1295307597 + (g[5] >>> 0 < x[5] >>> 0 ? 1 : 0)) |
                    0),
                  (g[7] =
                    (g[7] + 3545052371 + (g[6] >>> 0 < x[6] >>> 0 ? 1 : 0)) |
                    0),
                  (this._b = g[7] >>> 0 < x[7] >>> 0 ? 1 : 0);
                for (var b = 0; b < 8; b++) {
                  var S = v[b] + g[b],
                    A = S & 65535,
                    R = S >>> 16,
                    C = ((((A * A) >>> 17) + A * R) >>> 15) + R * R,
                    D = (((S & 4294901760) * S) | 0) + (((S & 65535) * S) | 0);
                  h[b] = C ^ D;
                }
                (v[0] =
                  (h[0] +
                    ((h[7] << 16) | (h[7] >>> 16)) +
                    ((h[6] << 16) | (h[6] >>> 16))) |
                  0),
                  (v[1] = (h[1] + ((h[0] << 8) | (h[0] >>> 24)) + h[7]) | 0),
                  (v[2] =
                    (h[2] +
                      ((h[1] << 16) | (h[1] >>> 16)) +
                      ((h[0] << 16) | (h[0] >>> 16))) |
                    0),
                  (v[3] = (h[3] + ((h[2] << 8) | (h[2] >>> 24)) + h[1]) | 0),
                  (v[4] =
                    (h[4] +
                      ((h[3] << 16) | (h[3] >>> 16)) +
                      ((h[2] << 16) | (h[2] >>> 16))) |
                    0),
                  (v[5] = (h[5] + ((h[4] << 8) | (h[4] >>> 24)) + h[3]) | 0),
                  (v[6] =
                    (h[6] +
                      ((h[5] << 16) | (h[5] >>> 16)) +
                      ((h[4] << 16) | (h[4] >>> 16))) |
                    0),
                  (v[7] = (h[7] + ((h[6] << 8) | (h[6] >>> 24)) + h[5]) | 0);
              }
              s.RabbitLegacy = c._createHelper(m);
            })(),
            a.RabbitLegacy
          );
        });
      })(_u)),
    _u.exports
  );
}
var Tu = { exports: {} },
  R5 = Tu.exports,
  fy;
function w5() {
  return (
    fy ||
      ((fy = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(je(), or(), lr(), ba(), Nt());
        })(R5, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.BlockCipher,
                f = s.algo;
              const d = 16,
                x = [
                  608135816, 2242054355, 320440878, 57701188, 2752067618,
                  698298832, 137296536, 3964562569, 1160258022, 953160567,
                  3193202383, 887688300, 3232508343, 3380367581, 1065670069,
                  3041331479, 2450970073, 2306472731,
                ],
                h = [
                  [
                    3509652390, 2564797868, 805139163, 3491422135, 3101798381,
                    1780907670, 3128725573, 4046225305, 614570311, 3012652279,
                    134345442, 2240740374, 1667834072, 1901547113, 2757295779,
                    4103290238, 227898511, 1921955416, 1904987480, 2182433518,
                    2069144605, 3260701109, 2620446009, 720527379, 3318853667,
                    677414384, 3393288472, 3101374703, 2390351024, 1614419982,
                    1822297739, 2954791486, 3608508353, 3174124327, 2024746970,
                    1432378464, 3864339955, 2857741204, 1464375394, 1676153920,
                    1439316330, 715854006, 3033291828, 289532110, 2706671279,
                    2087905683, 3018724369, 1668267050, 732546397, 1947742710,
                    3462151702, 2609353502, 2950085171, 1814351708, 2050118529,
                    680887927, 999245976, 1800124847, 3300911131, 1713906067,
                    1641548236, 4213287313, 1216130144, 1575780402, 4018429277,
                    3917837745, 3693486850, 3949271944, 596196993, 3549867205,
                    258830323, 2213823033, 772490370, 2760122372, 1774776394,
                    2652871518, 566650946, 4142492826, 1728879713, 2882767088,
                    1783734482, 3629395816, 2517608232, 2874225571, 1861159788,
                    326777828, 3124490320, 2130389656, 2716951837, 967770486,
                    1724537150, 2185432712, 2364442137, 1164943284, 2105845187,
                    998989502, 3765401048, 2244026483, 1075463327, 1455516326,
                    1322494562, 910128902, 469688178, 1117454909, 936433444,
                    3490320968, 3675253459, 1240580251, 122909385, 2157517691,
                    634681816, 4142456567, 3825094682, 3061402683, 2540495037,
                    79693498, 3249098678, 1084186820, 1583128258, 426386531,
                    1761308591, 1047286709, 322548459, 995290223, 1845252383,
                    2603652396, 3431023940, 2942221577, 3202600964, 3727903485,
                    1712269319, 422464435, 3234572375, 1170764815, 3523960633,
                    3117677531, 1434042557, 442511882, 3600875718, 1076654713,
                    1738483198, 4213154764, 2393238008, 3677496056, 1014306527,
                    4251020053, 793779912, 2902807211, 842905082, 4246964064,
                    1395751752, 1040244610, 2656851899, 3396308128, 445077038,
                    3742853595, 3577915638, 679411651, 2892444358, 2354009459,
                    1767581616, 3150600392, 3791627101, 3102740896, 284835224,
                    4246832056, 1258075500, 768725851, 2589189241, 3069724005,
                    3532540348, 1274779536, 3789419226, 2764799539, 1660621633,
                    3471099624, 4011903706, 913787905, 3497959166, 737222580,
                    2514213453, 2928710040, 3937242737, 1804850592, 3499020752,
                    2949064160, 2386320175, 2390070455, 2415321851, 4061277028,
                    2290661394, 2416832540, 1336762016, 1754252060, 3520065937,
                    3014181293, 791618072, 3188594551, 3933548030, 2332172193,
                    3852520463, 3043980520, 413987798, 3465142937, 3030929376,
                    4245938359, 2093235073, 3534596313, 375366246, 2157278981,
                    2479649556, 555357303, 3870105701, 2008414854, 3344188149,
                    4221384143, 3956125452, 2067696032, 3594591187, 2921233993,
                    2428461, 544322398, 577241275, 1471733935, 610547355,
                    4027169054, 1432588573, 1507829418, 2025931657, 3646575487,
                    545086370, 48609733, 2200306550, 1653985193, 298326376,
                    1316178497, 3007786442, 2064951626, 458293330, 2589141269,
                    3591329599, 3164325604, 727753846, 2179363840, 146436021,
                    1461446943, 4069977195, 705550613, 3059967265, 3887724982,
                    4281599278, 3313849956, 1404054877, 2845806497, 146425753,
                    1854211946,
                  ],
                  [
                    1266315497, 3048417604, 3681880366, 3289982499, 290971e4,
                    1235738493, 2632868024, 2414719590, 3970600049, 1771706367,
                    1449415276, 3266420449, 422970021, 1963543593, 2690192192,
                    3826793022, 1062508698, 1531092325, 1804592342, 2583117782,
                    2714934279, 4024971509, 1294809318, 4028980673, 1289560198,
                    2221992742, 1669523910, 35572830, 157838143, 1052438473,
                    1016535060, 1802137761, 1753167236, 1386275462, 3080475397,
                    2857371447, 1040679964, 2145300060, 2390574316, 1461121720,
                    2956646967, 4031777805, 4028374788, 33600511, 2920084762,
                    1018524850, 629373528, 3691585981, 3515945977, 2091462646,
                    2486323059, 586499841, 988145025, 935516892, 3367335476,
                    2599673255, 2839830854, 265290510, 3972581182, 2759138881,
                    3795373465, 1005194799, 847297441, 406762289, 1314163512,
                    1332590856, 1866599683, 4127851711, 750260880, 613907577,
                    1450815602, 3165620655, 3734664991, 3650291728, 3012275730,
                    3704569646, 1427272223, 778793252, 1343938022, 2676280711,
                    2052605720, 1946737175, 3164576444, 3914038668, 3967478842,
                    3682934266, 1661551462, 3294938066, 4011595847, 840292616,
                    3712170807, 616741398, 312560963, 711312465, 1351876610,
                    322626781, 1910503582, 271666773, 2175563734, 1594956187,
                    70604529, 3617834859, 1007753275, 1495573769, 4069517037,
                    2549218298, 2663038764, 504708206, 2263041392, 3941167025,
                    2249088522, 1514023603, 1998579484, 1312622330, 694541497,
                    2582060303, 2151582166, 1382467621, 776784248, 2618340202,
                    3323268794, 2497899128, 2784771155, 503983604, 4076293799,
                    907881277, 423175695, 432175456, 1378068232, 4145222326,
                    3954048622, 3938656102, 3820766613, 2793130115, 2977904593,
                    26017576, 3274890735, 3194772133, 1700274565, 1756076034,
                    4006520079, 3677328699, 720338349, 1533947780, 354530856,
                    688349552, 3973924725, 1637815568, 332179504, 3949051286,
                    53804574, 2852348879, 3044236432, 1282449977, 3583942155,
                    3416972820, 4006381244, 1617046695, 2628476075, 3002303598,
                    1686838959, 431878346, 2686675385, 1700445008, 1080580658,
                    1009431731, 832498133, 3223435511, 2605976345, 2271191193,
                    2516031870, 1648197032, 4164389018, 2548247927, 300782431,
                    375919233, 238389289, 3353747414, 2531188641, 2019080857,
                    1475708069, 455242339, 2609103871, 448939670, 3451063019,
                    1395535956, 2413381860, 1841049896, 1491858159, 885456874,
                    4264095073, 4001119347, 1565136089, 3898914787, 1108368660,
                    540939232, 1173283510, 2745871338, 3681308437, 4207628240,
                    3343053890, 4016749493, 1699691293, 1103962373, 3625875870,
                    2256883143, 3830138730, 1031889488, 3479347698, 1535977030,
                    4236805024, 3251091107, 2132092099, 1774941330, 1199868427,
                    1452454533, 157007616, 2904115357, 342012276, 595725824,
                    1480756522, 206960106, 497939518, 591360097, 863170706,
                    2375253569, 3596610801, 1814182875, 2094937945, 3421402208,
                    1082520231, 3463918190, 2785509508, 435703966, 3908032597,
                    1641649973, 2842273706, 3305899714, 1510255612, 2148256476,
                    2655287854, 3276092548, 4258621189, 236887753, 3681803219,
                    274041037, 1734335097, 3815195456, 3317970021, 1899903192,
                    1026095262, 4050517792, 356393447, 2410691914, 3873677099,
                    3682840055,
                  ],
                  [
                    3913112168, 2491498743, 4132185628, 2489919796, 1091903735,
                    1979897079, 3170134830, 3567386728, 3557303409, 857797738,
                    1136121015, 1342202287, 507115054, 2535736646, 337727348,
                    3213592640, 1301675037, 2528481711, 1895095763, 1721773893,
                    3216771564, 62756741, 2142006736, 835421444, 2531993523,
                    1442658625, 3659876326, 2882144922, 676362277, 1392781812,
                    170690266, 3921047035, 1759253602, 3611846912, 1745797284,
                    664899054, 1329594018, 3901205900, 3045908486, 2062866102,
                    2865634940, 3543621612, 3464012697, 1080764994, 553557557,
                    3656615353, 3996768171, 991055499, 499776247, 1265440854,
                    648242737, 3940784050, 980351604, 3713745714, 1749149687,
                    3396870395, 4211799374, 3640570775, 1161844396, 3125318951,
                    1431517754, 545492359, 4268468663, 3499529547, 1437099964,
                    2702547544, 3433638243, 2581715763, 2787789398, 1060185593,
                    1593081372, 2418618748, 4260947970, 69676912, 2159744348,
                    86519011, 2512459080, 3838209314, 1220612927, 3339683548,
                    133810670, 1090789135, 1078426020, 1569222167, 845107691,
                    3583754449, 4072456591, 1091646820, 628848692, 1613405280,
                    3757631651, 526609435, 236106946, 48312990, 2942717905,
                    3402727701, 1797494240, 859738849, 992217954, 4005476642,
                    2243076622, 3870952857, 3732016268, 765654824, 3490871365,
                    2511836413, 1685915746, 3888969200, 1414112111, 2273134842,
                    3281911079, 4080962846, 172450625, 2569994100, 980381355,
                    4109958455, 2819808352, 2716589560, 2568741196, 3681446669,
                    3329971472, 1835478071, 660984891, 3704678404, 4045999559,
                    3422617507, 3040415634, 1762651403, 1719377915, 3470491036,
                    2693910283, 3642056355, 3138596744, 1364962596, 2073328063,
                    1983633131, 926494387, 3423689081, 2150032023, 4096667949,
                    1749200295, 3328846651, 309677260, 2016342300, 1779581495,
                    3079819751, 111262694, 1274766160, 443224088, 298511866,
                    1025883608, 3806446537, 1145181785, 168956806, 3641502830,
                    3584813610, 1689216846, 3666258015, 3200248200, 1692713982,
                    2646376535, 4042768518, 1618508792, 1610833997, 3523052358,
                    4130873264, 2001055236, 3610705100, 2202168115, 4028541809,
                    2961195399, 1006657119, 2006996926, 3186142756, 1430667929,
                    3210227297, 1314452623, 4074634658, 4101304120, 2273951170,
                    1399257539, 3367210612, 3027628629, 1190975929, 2062231137,
                    2333990788, 2221543033, 2438960610, 1181637006, 548689776,
                    2362791313, 3372408396, 3104550113, 3145860560, 296247880,
                    1970579870, 3078560182, 3769228297, 1714227617, 3291629107,
                    3898220290, 166772364, 1251581989, 493813264, 448347421,
                    195405023, 2709975567, 677966185, 3703036547, 1463355134,
                    2715995803, 1338867538, 1343315457, 2802222074, 2684532164,
                    233230375, 2599980071, 2000651841, 3277868038, 1638401717,
                    4028070440, 3237316320, 6314154, 819756386, 300326615,
                    590932579, 1405279636, 3267499572, 3150704214, 2428286686,
                    3959192993, 3461946742, 1862657033, 1266418056, 963775037,
                    2089974820, 2263052895, 1917689273, 448879540, 3550394620,
                    3981727096, 150775221, 3627908307, 1303187396, 508620638,
                    2975983352, 2726630617, 1817252668, 1876281319, 1457606340,
                    908771278, 3720792119, 3617206836, 2455994898, 1729034894,
                    1080033504,
                  ],
                  [
                    976866871, 3556439503, 2881648439, 1522871579, 1555064734,
                    1336096578, 3548522304, 2579274686, 3574697629, 3205460757,
                    3593280638, 3338716283, 3079412587, 564236357, 2993598910,
                    1781952180, 1464380207, 3163844217, 3332601554, 1699332808,
                    1393555694, 1183702653, 3581086237, 1288719814, 691649499,
                    2847557200, 2895455976, 3193889540, 2717570544, 1781354906,
                    1676643554, 2592534050, 3230253752, 1126444790, 2770207658,
                    2633158820, 2210423226, 2615765581, 2414155088, 3127139286,
                    673620729, 2805611233, 1269405062, 4015350505, 3341807571,
                    4149409754, 1057255273, 2012875353, 2162469141, 2276492801,
                    2601117357, 993977747, 3918593370, 2654263191, 753973209,
                    36408145, 2530585658, 25011837, 3520020182, 2088578344,
                    530523599, 2918365339, 1524020338, 1518925132, 3760827505,
                    3759777254, 1202760957, 3985898139, 3906192525, 674977740,
                    4174734889, 2031300136, 2019492241, 3983892565, 4153806404,
                    3822280332, 352677332, 2297720250, 60907813, 90501309,
                    3286998549, 1016092578, 2535922412, 2839152426, 457141659,
                    509813237, 4120667899, 652014361, 1966332200, 2975202805,
                    55981186, 2327461051, 676427537, 3255491064, 2882294119,
                    3433927263, 1307055953, 942726286, 933058658, 2468411793,
                    3933900994, 4215176142, 1361170020, 2001714738, 2830558078,
                    3274259782, 1222529897, 1679025792, 2729314320, 3714953764,
                    1770335741, 151462246, 3013232138, 1682292957, 1483529935,
                    471910574, 1539241949, 458788160, 3436315007, 1807016891,
                    3718408830, 978976581, 1043663428, 3165965781, 1927990952,
                    4200891579, 2372276910, 3208408903, 3533431907, 1412390302,
                    2931980059, 4132332400, 1947078029, 3881505623, 4168226417,
                    2941484381, 1077988104, 1320477388, 886195818, 18198404,
                    3786409e3, 2509781533, 112762804, 3463356488, 1866414978,
                    891333506, 18488651, 661792760, 1628790961, 3885187036,
                    3141171499, 876946877, 2693282273, 1372485963, 791857591,
                    2686433993, 3759982718, 3167212022, 3472953795, 2716379847,
                    445679433, 3561995674, 3504004811, 3574258232, 54117162,
                    3331405415, 2381918588, 3769707343, 4154350007, 1140177722,
                    4074052095, 668550556, 3214352940, 367459370, 261225585,
                    2610173221, 4209349473, 3468074219, 3265815641, 314222801,
                    3066103646, 3808782860, 282218597, 3406013506, 3773591054,
                    379116347, 1285071038, 846784868, 2669647154, 3771962079,
                    3550491691, 2305946142, 453669953, 1268987020, 3317592352,
                    3279303384, 3744833421, 2610507566, 3859509063, 266596637,
                    3847019092, 517658769, 3462560207, 3443424879, 370717030,
                    4247526661, 2224018117, 4143653529, 4112773975, 2788324899,
                    2477274417, 1456262402, 2901442914, 1517677493, 1846949527,
                    2295493580, 3734397586, 2176403920, 1280348187, 1908823572,
                    3871786941, 846861322, 1172426758, 3287448474, 3383383037,
                    1655181056, 3139813346, 901632758, 1897031941, 2986607138,
                    3066810236, 3447102507, 1393639104, 373351379, 950779232,
                    625454576, 3124240540, 4148612726, 2007998917, 544563296,
                    2244738638, 2330496472, 2058025392, 1291430526, 424198748,
                    50039436, 29584100, 3605783033, 2429876329, 2791104160,
                    1057563949, 3255363231, 3075367218, 3463963227, 1469046755,
                    985887462,
                  ],
                ];
              var m = { pbox: [], sbox: [] };
              function y(A, R) {
                let C = (R >> 24) & 255,
                  D = (R >> 16) & 255,
                  T = (R >> 8) & 255,
                  w = R & 255,
                  z = A.sbox[0][C] + A.sbox[1][D];
                return (z = z ^ A.sbox[2][T]), (z = z + A.sbox[3][w]), z;
              }
              function v(A, R, C) {
                let D = R,
                  T = C,
                  w;
                for (let z = 0; z < d; ++z)
                  (D = D ^ A.pbox[z]),
                    (T = y(A, D) ^ T),
                    (w = D),
                    (D = T),
                    (T = w);
                return (
                  (w = D),
                  (D = T),
                  (T = w),
                  (T = T ^ A.pbox[d]),
                  (D = D ^ A.pbox[d + 1]),
                  { left: D, right: T }
                );
              }
              function g(A, R, C) {
                let D = R,
                  T = C,
                  w;
                for (let z = d + 1; z > 1; --z)
                  (D = D ^ A.pbox[z]),
                    (T = y(A, D) ^ T),
                    (w = D),
                    (D = T),
                    (T = w);
                return (
                  (w = D),
                  (D = T),
                  (T = w),
                  (T = T ^ A.pbox[1]),
                  (D = D ^ A.pbox[0]),
                  { left: D, right: T }
                );
              }
              function b(A, R, C) {
                for (let _ = 0; _ < 4; _++) {
                  A.sbox[_] = [];
                  for (let L = 0; L < 256; L++) A.sbox[_][L] = h[_][L];
                }
                let D = 0;
                for (let _ = 0; _ < d + 2; _++)
                  (A.pbox[_] = x[_] ^ R[D]), D++, D >= C && (D = 0);
                let T = 0,
                  w = 0,
                  z = 0;
                for (let _ = 0; _ < d + 2; _ += 2)
                  (z = v(A, T, w)),
                    (T = z.left),
                    (w = z.right),
                    (A.pbox[_] = T),
                    (A.pbox[_ + 1] = w);
                for (let _ = 0; _ < 4; _++)
                  for (let L = 0; L < 256; L += 2)
                    (z = v(A, T, w)),
                      (T = z.left),
                      (w = z.right),
                      (A.sbox[_][L] = T),
                      (A.sbox[_][L + 1] = w);
                return !0;
              }
              var S = (f.Blowfish = c.extend({
                _doReset: function () {
                  if (this._keyPriorReset !== this._key) {
                    var A = (this._keyPriorReset = this._key),
                      R = A.words,
                      C = A.sigBytes / 4;
                    b(m, R, C);
                  }
                },
                encryptBlock: function (A, R) {
                  var C = v(m, A[R], A[R + 1]);
                  (A[R] = C.left), (A[R + 1] = C.right);
                },
                decryptBlock: function (A, R) {
                  var C = g(m, A[R], A[R + 1]);
                  (A[R] = C.left), (A[R + 1] = C.right);
                },
                blockSize: 64 / 32,
                keySize: 128 / 32,
                ivSize: 64 / 32,
              }));
              s.Blowfish = c._createHelper(S);
            })(),
            a.Blowfish
          );
        });
      })(Tu)),
    Tu.exports
  );
}
var M5 = Kl.exports,
  hy;
function O5() {
  return (
    hy ||
      ((hy = 1),
      (function (t, n) {
        (function (a, s, l) {
          t.exports = s(
            je(),
            ec(),
            TA(),
            wA(),
            or(),
            FA(),
            lr(),
            mg(),
            zh(),
            kA(),
            yg(),
            qA(),
            PA(),
            XA(),
            Lh(),
            ZA(),
            ba(),
            Nt(),
            JA(),
            e5(),
            n5(),
            a5(),
            s5(),
            l5(),
            c5(),
            h5(),
            p5(),
            m5(),
            v5(),
            E5(),
            A5(),
            C5(),
            B5(),
            T5(),
            w5(),
          );
        })(M5, function (a) {
          return a;
        });
      })(Kl)),
    Kl.exports
  );
}
var F5 = O5();
const F7 = $u(F5),
  Nh = $.createContext({});
function Uh(t) {
  const n = $.useRef(null);
  return n.current === null && (n.current = t()), n.current;
}
const kh = typeof window != "undefined",
  vg = kh ? $.useLayoutEffect : $.useEffect,
  tc = $.createContext(null);
function Hh(t, n) {
  t.indexOf(n) === -1 && t.push(n);
}
function Vh(t, n) {
  const a = t.indexOf(n);
  a > -1 && t.splice(a, 1);
}
const Vi = (t, n, a) => (a > n ? n : a < t ? t : a);
let qh = () => {};
const qi = {},
  gg = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function Eg(t) {
  return typeof t == "object" && t !== null;
}
const bg = (t) => /^0[^.\s]+$/u.test(t);
function jh(t) {
  let n;
  return () => (n === void 0 && (n = t()), n);
}
const jn = (t) => t,
  z5 = (t, n) => (a) => n(t(a)),
  Co = (...t) => t.reduce(z5),
  mo = (t, n, a) => {
    const s = n - t;
    return s === 0 ? 1 : (a - t) / s;
  };
class Ph {
  constructor() {
    this.subscriptions = [];
  }
  add(n) {
    return Hh(this.subscriptions, n), () => Vh(this.subscriptions, n);
  }
  notify(n, a, s) {
    const l = this.subscriptions.length;
    if (l)
      if (l === 1) this.subscriptions[0](n, a, s);
      else
        for (let c = 0; c < l; c++) {
          const f = this.subscriptions[c];
          f && f(n, a, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const pi = (t) => t * 1e3,
  qn = (t) => t / 1e3;
function Ag(t, n) {
  return n ? t * (1e3 / n) : 0;
}
const Sg = (t, n, a) =>
    (((1 - 3 * a + 3 * n) * t + (3 * a - 6 * n)) * t + 3 * n) * t,
  L5 = 1e-7,
  N5 = 12;
function U5(t, n, a, s, l) {
  let c,
    f,
    d = 0;
  do (f = n + (a - n) / 2), (c = Sg(f, s, l) - t), c > 0 ? (a = f) : (n = f);
  while (Math.abs(c) > L5 && ++d < N5);
  return f;
}
function Do(t, n, a, s) {
  if (t === n && a === s) return jn;
  const l = (c) => U5(c, 0, 1, t, a);
  return (c) => (c === 0 || c === 1 ? c : Sg(l(c), n, s));
}
const Cg = (t) => (n) => (n <= 0.5 ? t(2 * n) / 2 : (2 - t(2 * (1 - n))) / 2),
  Dg = (t) => (n) => 1 - t(1 - n),
  Bg = Do(0.33, 1.53, 0.69, 0.99),
  Yh = Dg(Bg),
  _g = Cg(Yh),
  Tg = (t) =>
    (t *= 2) < 1 ? 0.5 * Yh(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  Xh = (t) => 1 - Math.sin(Math.acos(t)),
  Rg = Dg(Xh),
  wg = Cg(Xh),
  k5 = Do(0.42, 0, 1, 1),
  H5 = Do(0, 0, 0.58, 1),
  Mg = Do(0.42, 0, 0.58, 1),
  V5 = (t) => Array.isArray(t) && typeof t[0] != "number",
  Og = (t) => Array.isArray(t) && typeof t[0] == "number",
  q5 = {
    linear: jn,
    easeIn: k5,
    easeInOut: Mg,
    easeOut: H5,
    circIn: Xh,
    circInOut: wg,
    circOut: Rg,
    backIn: Yh,
    backInOut: _g,
    backOut: Bg,
    anticipate: Tg,
  },
  j5 = (t) => typeof t == "string",
  dy = (t) => {
    if (Og(t)) {
      qh(t.length === 4);
      const [n, a, s, l] = t;
      return Do(n, a, s, l);
    } else if (j5(t)) return q5[t];
    return t;
  },
  Hl = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function P5(t, n) {
  let a = new Set(),
    s = new Set(),
    l = !1,
    c = !1;
  const f = new WeakSet();
  let d = { delta: 0, timestamp: 0, isProcessing: !1 };
  function x(m) {
    f.has(m) && (h.schedule(m), t()), m(d);
  }
  const h = {
    schedule: (m, y = !1, v = !1) => {
      const b = v && l ? a : s;
      return y && f.add(m), b.has(m) || b.add(m), m;
    },
    cancel: (m) => {
      s.delete(m), f.delete(m);
    },
    process: (m) => {
      if (((d = m), l)) {
        c = !0;
        return;
      }
      (l = !0),
        ([a, s] = [s, a]),
        a.forEach(x),
        a.clear(),
        (l = !1),
        c && ((c = !1), h.process(m));
    },
  };
  return h;
}
const Y5 = 40;
function Fg(t, n) {
  let a = !1,
    s = !0;
  const l = { delta: 0, timestamp: 0, isProcessing: !1 },
    c = () => (a = !0),
    f = Hl.reduce((D, T) => ((D[T] = P5(c)), D), {}),
    {
      setup: d,
      read: x,
      resolveKeyframes: h,
      preUpdate: m,
      update: y,
      preRender: v,
      render: g,
      postRender: b,
    } = f,
    S = () => {
      const D = qi.useManualTiming ? l.timestamp : performance.now();
      (a = !1),
        qi.useManualTiming ||
          (l.delta = s ? 1e3 / 60 : Math.max(Math.min(D - l.timestamp, Y5), 1)),
        (l.timestamp = D),
        (l.isProcessing = !0),
        d.process(l),
        x.process(l),
        h.process(l),
        m.process(l),
        y.process(l),
        v.process(l),
        g.process(l),
        b.process(l),
        (l.isProcessing = !1),
        a && n && ((s = !1), t(S));
    },
    A = () => {
      (a = !0), (s = !0), l.isProcessing || t(S);
    };
  return {
    schedule: Hl.reduce((D, T) => {
      const w = f[T];
      return (D[T] = (z, _ = !1, L = !1) => (a || A(), w.schedule(z, _, L))), D;
    }, {}),
    cancel: (D) => {
      for (let T = 0; T < Hl.length; T++) f[Hl[T]].cancel(D);
    },
    state: l,
    steps: f,
  };
}
const {
  schedule: ut,
  cancel: va,
  state: jt,
  steps: _f,
} = Fg(
  typeof requestAnimationFrame != "undefined" ? requestAnimationFrame : jn,
  !0,
);
let Ru;
function X5() {
  Ru = void 0;
}
const cn = {
    now: () => (
      Ru === void 0 &&
        cn.set(
          jt.isProcessing || qi.useManualTiming
            ? jt.timestamp
            : performance.now(),
        ),
      Ru
    ),
    set: (t) => {
      (Ru = t), queueMicrotask(X5);
    },
  },
  zg = (t) => (n) => typeof n == "string" && n.startsWith(t),
  Gh = zg("--"),
  G5 = zg("var(--"),
  Kh = (t) => (G5(t) ? K5.test(t.split("/*")[0].trim()) : !1),
  K5 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  es = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t,
  },
  yo = Ne(ue({}, es), { transform: (t) => Vi(0, 1, t) }),
  Vl = Ne(ue({}, es), { default: 1 }),
  lo = (t) => Math.round(t * 1e5) / 1e5,
  Zh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Z5(t) {
  return t == null;
}
const Q5 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Qh = (t, n) => (a) =>
    !!(
      (typeof a == "string" && Q5.test(a) && a.startsWith(t)) ||
      (n && !Z5(a) && Object.prototype.hasOwnProperty.call(a, n))
    ),
  Lg = (t, n, a) => (s) => {
    if (typeof s != "string") return s;
    const [l, c, f, d] = s.match(Zh);
    return {
      [t]: parseFloat(l),
      [n]: parseFloat(c),
      [a]: parseFloat(f),
      alpha: d !== void 0 ? parseFloat(d) : 1,
    };
  },
  $5 = (t) => Vi(0, 255, t),
  Tf = Ne(ue({}, es), { transform: (t) => Math.round($5(t)) }),
  Ia = {
    test: Qh("rgb", "red"),
    parse: Lg("red", "green", "blue"),
    transform: ({ red: t, green: n, blue: a, alpha: s = 1 }) =>
      "rgba(" +
      Tf.transform(t) +
      ", " +
      Tf.transform(n) +
      ", " +
      Tf.transform(a) +
      ", " +
      lo(yo.transform(s)) +
      ")",
  };
function W5(t) {
  let n = "",
    a = "",
    s = "",
    l = "";
  return (
    t.length > 5
      ? ((n = t.substring(1, 3)),
        (a = t.substring(3, 5)),
        (s = t.substring(5, 7)),
        (l = t.substring(7, 9)))
      : ((n = t.substring(1, 2)),
        (a = t.substring(2, 3)),
        (s = t.substring(3, 4)),
        (l = t.substring(4, 5)),
        (n += n),
        (a += a),
        (s += s),
        (l += l)),
    {
      red: parseInt(n, 16),
      green: parseInt(a, 16),
      blue: parseInt(s, 16),
      alpha: l ? parseInt(l, 16) / 255 : 1,
    }
  );
}
const Jf = { test: Qh("#"), parse: W5, transform: Ia.transform },
  Bo = (t) => ({
    test: (n) =>
      typeof n == "string" && n.endsWith(t) && n.split(" ").length === 1,
    parse: parseFloat,
    transform: (n) => `${n}${t}`,
  }),
  pa = Bo("deg"),
  xi = Bo("%"),
  Be = Bo("px"),
  J5 = Bo("vh"),
  I5 = Bo("vw"),
  py = Ne(ue({}, xi), {
    parse: (t) => xi.parse(t) / 100,
    transform: (t) => xi.transform(t * 100),
  }),
  Pr = {
    test: Qh("hsl", "hue"),
    parse: Lg("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: n, lightness: a, alpha: s = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      xi.transform(lo(n)) +
      ", " +
      xi.transform(lo(a)) +
      ", " +
      lo(yo.transform(s)) +
      ")",
  },
  _t = {
    test: (t) => Ia.test(t) || Jf.test(t) || Pr.test(t),
    parse: (t) =>
      Ia.test(t) ? Ia.parse(t) : Pr.test(t) ? Pr.parse(t) : Jf.parse(t),
    transform: (t) =>
      typeof t == "string"
        ? t
        : t.hasOwnProperty("red")
          ? Ia.transform(t)
          : Pr.transform(t),
    getAnimatableNone: (t) => {
      const n = _t.parse(t);
      return (n.alpha = 0), _t.transform(n);
    },
  },
  e6 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function t6(t) {
  var n, a;
  return (
    isNaN(t) &&
    typeof t == "string" &&
    (((n = t.match(Zh)) == null ? void 0 : n.length) || 0) +
      (((a = t.match(e6)) == null ? void 0 : a.length) || 0) >
      0
  );
}
const Ng = "number",
  Ug = "color",
  n6 = "var",
  i6 = "var(",
  xy = "${}",
  a6 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function vo(t) {
  const n = t.toString(),
    a = [],
    s = { color: [], number: [], var: [] },
    l = [];
  let c = 0;
  const d = n
    .replace(
      a6,
      (x) => (
        _t.test(x)
          ? (s.color.push(c), l.push(Ug), a.push(_t.parse(x)))
          : x.startsWith(i6)
            ? (s.var.push(c), l.push(n6), a.push(x))
            : (s.number.push(c), l.push(Ng), a.push(parseFloat(x))),
        ++c,
        xy
      ),
    )
    .split(xy);
  return { values: a, split: d, indexes: s, types: l };
}
function kg(t) {
  return vo(t).values;
}
function Hg(t) {
  const { split: n, types: a } = vo(t),
    s = n.length;
  return (l) => {
    let c = "";
    for (let f = 0; f < s; f++)
      if (((c += n[f]), l[f] !== void 0)) {
        const d = a[f];
        d === Ng
          ? (c += lo(l[f]))
          : d === Ug
            ? (c += _t.transform(l[f]))
            : (c += l[f]);
      }
    return c;
  };
}
const r6 = (t) =>
  typeof t == "number" ? 0 : _t.test(t) ? _t.getAnimatableNone(t) : t;
function s6(t) {
  const n = kg(t);
  return Hg(t)(n.map(r6));
}
const ga = {
  test: t6,
  parse: kg,
  createTransformer: Hg,
  getAnimatableNone: s6,
};
function Rf(t, n, a) {
  return (
    a < 0 && (a += 1),
    a > 1 && (a -= 1),
    a < 1 / 6
      ? t + (n - t) * 6 * a
      : a < 1 / 2
        ? n
        : a < 2 / 3
          ? t + (n - t) * (2 / 3 - a) * 6
          : t
  );
}
function o6({ hue: t, saturation: n, lightness: a, alpha: s }) {
  (t /= 360), (n /= 100), (a /= 100);
  let l = 0,
    c = 0,
    f = 0;
  if (!n) l = c = f = a;
  else {
    const d = a < 0.5 ? a * (1 + n) : a + n - a * n,
      x = 2 * a - d;
    (l = Rf(x, d, t + 1 / 3)), (c = Rf(x, d, t)), (f = Rf(x, d, t - 1 / 3));
  }
  return {
    red: Math.round(l * 255),
    green: Math.round(c * 255),
    blue: Math.round(f * 255),
    alpha: s,
  };
}
function Yu(t, n) {
  return (a) => (a > 0 ? n : t);
}
const dt = (t, n, a) => t + (n - t) * a,
  wf = (t, n, a) => {
    const s = t * t,
      l = a * (n * n - s) + s;
    return l < 0 ? 0 : Math.sqrt(l);
  },
  l6 = [Jf, Ia, Pr],
  u6 = (t) => l6.find((n) => n.test(t));
function my(t) {
  const n = u6(t);
  if (!n) return !1;
  let a = n.parse(t);
  return n === Pr && (a = o6(a)), a;
}
const yy = (t, n) => {
    const a = my(t),
      s = my(n);
    if (!a || !s) return Yu(t, n);
    const l = ue({}, a);
    return (c) => (
      (l.red = wf(a.red, s.red, c)),
      (l.green = wf(a.green, s.green, c)),
      (l.blue = wf(a.blue, s.blue, c)),
      (l.alpha = dt(a.alpha, s.alpha, c)),
      Ia.transform(l)
    );
  },
  If = new Set(["none", "hidden"]);
function c6(t, n) {
  return If.has(t) ? (a) => (a <= 0 ? t : n) : (a) => (a >= 1 ? n : t);
}
function f6(t, n) {
  return (a) => dt(t, n, a);
}
function $h(t) {
  return typeof t == "number"
    ? f6
    : typeof t == "string"
      ? Kh(t)
        ? Yu
        : _t.test(t)
          ? yy
          : p6
      : Array.isArray(t)
        ? Vg
        : typeof t == "object"
          ? _t.test(t)
            ? yy
            : h6
          : Yu;
}
function Vg(t, n) {
  const a = [...t],
    s = a.length,
    l = t.map((c, f) => $h(c)(c, n[f]));
  return (c) => {
    for (let f = 0; f < s; f++) a[f] = l[f](c);
    return a;
  };
}
function h6(t, n) {
  const a = ue(ue({}, t), n),
    s = {};
  for (const l in a)
    t[l] !== void 0 && n[l] !== void 0 && (s[l] = $h(t[l])(t[l], n[l]));
  return (l) => {
    for (const c in s) a[c] = s[c](l);
    return a;
  };
}
function d6(t, n) {
  var l;
  const a = [],
    s = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < n.values.length; c++) {
    const f = n.types[c],
      d = t.indexes[f][s[f]],
      x = (l = t.values[d]) != null ? l : 0;
    (a[c] = x), s[f]++;
  }
  return a;
}
const p6 = (t, n) => {
  const a = ga.createTransformer(n),
    s = vo(t),
    l = vo(n);
  return s.indexes.var.length === l.indexes.var.length &&
    s.indexes.color.length === l.indexes.color.length &&
    s.indexes.number.length >= l.indexes.number.length
    ? (If.has(t) && !l.values.length) || (If.has(n) && !s.values.length)
      ? c6(t, n)
      : Co(Vg(d6(s, l), l.values), a)
    : Yu(t, n);
};
function qg(t, n, a) {
  return typeof t == "number" && typeof n == "number" && typeof a == "number"
    ? dt(t, n, a)
    : $h(t)(t, n);
}
const x6 = (t) => {
    const n = ({ timestamp: a }) => t(a);
    return {
      start: (a = !0) => ut.update(n, a),
      stop: () => va(n),
      now: () => (jt.isProcessing ? jt.timestamp : cn.now()),
    };
  },
  jg = (t, n, a = 10) => {
    let s = "";
    const l = Math.max(Math.round(n / a), 2);
    for (let c = 0; c < l; c++)
      s += Math.round(t(c / (l - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${s.substring(0, s.length - 2)})`;
  },
  Xu = 2e4;
function Wh(t) {
  let n = 0;
  const a = 50;
  let s = t.next(n);
  for (; !s.done && n < Xu; ) (n += a), (s = t.next(n));
  return n >= Xu ? 1 / 0 : n;
}
function m6(t, n = 100, a) {
  const s = a(Ne(ue({}, t), { keyframes: [0, n] })),
    l = Math.min(Wh(s), Xu);
  return {
    type: "keyframes",
    ease: (c) => s.next(l * c).value / n,
    duration: qn(l),
  };
}
const y6 = 5;
function Pg(t, n, a) {
  const s = Math.max(n - y6, 0);
  return Ag(a - t(s), n - s);
}
const yt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Mf = 0.001;
function v6({
  duration: t = yt.duration,
  bounce: n = yt.bounce,
  velocity: a = yt.velocity,
  mass: s = yt.mass,
}) {
  let l,
    c,
    f = 1 - n;
  (f = Vi(yt.minDamping, yt.maxDamping, f)),
    (t = Vi(yt.minDuration, yt.maxDuration, qn(t))),
    f < 1
      ? ((l = (h) => {
          const m = h * f,
            y = m * t,
            v = m - a,
            g = eh(h, f),
            b = Math.exp(-y);
          return Mf - (v / g) * b;
        }),
        (c = (h) => {
          const y = h * f * t,
            v = y * a + a,
            g = Math.pow(f, 2) * Math.pow(h, 2) * t,
            b = Math.exp(-y),
            S = eh(Math.pow(h, 2), f);
          return ((-l(h) + Mf > 0 ? -1 : 1) * ((v - g) * b)) / S;
        }))
      : ((l = (h) => {
          const m = Math.exp(-h * t),
            y = (h - a) * t + 1;
          return -Mf + m * y;
        }),
        (c = (h) => {
          const m = Math.exp(-h * t),
            y = (a - h) * (t * t);
          return m * y;
        }));
  const d = 5 / t,
    x = E6(l, c, d);
  if (((t = pi(t)), isNaN(x)))
    return { stiffness: yt.stiffness, damping: yt.damping, duration: t };
  {
    const h = Math.pow(x, 2) * s;
    return { stiffness: h, damping: f * 2 * Math.sqrt(s * h), duration: t };
  }
}
const g6 = 12;
function E6(t, n, a) {
  let s = a;
  for (let l = 1; l < g6; l++) s = s - t(s) / n(s);
  return s;
}
function eh(t, n) {
  return t * Math.sqrt(1 - n * n);
}
const b6 = ["duration", "bounce"],
  A6 = ["stiffness", "damping", "mass"];
function vy(t, n) {
  return n.some((a) => t[a] !== void 0);
}
function S6(t) {
  let n = ue(
    {
      velocity: yt.velocity,
      stiffness: yt.stiffness,
      damping: yt.damping,
      mass: yt.mass,
      isResolvedFromDuration: !1,
    },
    t,
  );
  if (!vy(t, A6) && vy(t, b6))
    if (t.visualDuration) {
      const a = t.visualDuration,
        s = (2 * Math.PI) / (a * 1.2),
        l = s * s,
        c = 2 * Vi(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(l);
      n = Ne(ue({}, n), { mass: yt.mass, stiffness: l, damping: c });
    } else {
      const a = v6(t);
      (n = Ne(ue(ue({}, n), a), { mass: yt.mass })),
        (n.isResolvedFromDuration = !0);
    }
  return n;
}
function Gu(t = yt.visualDuration, n = yt.bounce) {
  const a =
    typeof t != "object"
      ? { visualDuration: t, keyframes: [0, 1], bounce: n }
      : t;
  let { restSpeed: s, restDelta: l } = a;
  const c = a.keyframes[0],
    f = a.keyframes[a.keyframes.length - 1],
    d = { done: !1, value: c },
    {
      stiffness: x,
      damping: h,
      mass: m,
      duration: y,
      velocity: v,
      isResolvedFromDuration: g,
    } = S6(Ne(ue({}, a), { velocity: -qn(a.velocity || 0) })),
    b = v || 0,
    S = h / (2 * Math.sqrt(x * m)),
    A = f - c,
    R = qn(Math.sqrt(x / m)),
    C = Math.abs(A) < 5;
  s || (s = C ? yt.restSpeed.granular : yt.restSpeed.default),
    l || (l = C ? yt.restDelta.granular : yt.restDelta.default);
  let D;
  if (S < 1) {
    const w = eh(R, S);
    D = (z) => {
      const _ = Math.exp(-S * R * z);
      return (
        f - _ * (((b + S * R * A) / w) * Math.sin(w * z) + A * Math.cos(w * z))
      );
    };
  } else if (S === 1) D = (w) => f - Math.exp(-R * w) * (A + (b + R * A) * w);
  else {
    const w = R * Math.sqrt(S * S - 1);
    D = (z) => {
      const _ = Math.exp(-S * R * z),
        L = Math.min(w * z, 300);
      return (
        f - (_ * ((b + S * R * A) * Math.sinh(L) + w * A * Math.cosh(L))) / w
      );
    };
  }
  const T = {
    calculatedDuration: (g && y) || null,
    next: (w) => {
      const z = D(w);
      if (g) d.done = w >= y;
      else {
        let _ = w === 0 ? b : 0;
        S < 1 && (_ = w === 0 ? pi(b) : Pg(D, w, z));
        const L = Math.abs(_) <= s,
          q = Math.abs(f - z) <= l;
        d.done = L && q;
      }
      return (d.value = d.done ? f : z), d;
    },
    toString: () => {
      const w = Math.min(Wh(T), Xu),
        z = jg((_) => T.next(w * _).value, w, 30);
      return w + "ms " + z;
    },
    toTransition: () => {},
  };
  return T;
}
Gu.applyToOptions = (t) => {
  const n = m6(t, 100, Gu);
  return (
    (t.ease = n.ease), (t.duration = pi(n.duration)), (t.type = "keyframes"), t
  );
};
function th({
  keyframes: t,
  velocity: n = 0,
  power: a = 0.8,
  timeConstant: s = 325,
  bounceDamping: l = 10,
  bounceStiffness: c = 500,
  modifyTarget: f,
  min: d,
  max: x,
  restDelta: h = 0.5,
  restSpeed: m,
}) {
  const y = t[0],
    v = { done: !1, value: y },
    g = (L) => (d !== void 0 && L < d) || (x !== void 0 && L > x),
    b = (L) =>
      d === void 0
        ? x
        : x === void 0 || Math.abs(d - L) < Math.abs(x - L)
          ? d
          : x;
  let S = a * n;
  const A = y + S,
    R = f === void 0 ? A : f(A);
  R !== A && (S = R - y);
  const C = (L) => -S * Math.exp(-L / s),
    D = (L) => R + C(L),
    T = (L) => {
      const q = C(L),
        M = D(L);
      (v.done = Math.abs(q) <= h), (v.value = v.done ? R : M);
    };
  let w, z;
  const _ = (L) => {
    g(v.value) &&
      ((w = L),
      (z = Gu({
        keyframes: [v.value, b(v.value)],
        velocity: Pg(D, L, v.value),
        damping: l,
        stiffness: c,
        restDelta: h,
        restSpeed: m,
      })));
  };
  return (
    _(0),
    {
      calculatedDuration: null,
      next: (L) => {
        let q = !1;
        return (
          !z && w === void 0 && ((q = !0), T(L), _(L)),
          w !== void 0 && L >= w ? z.next(L - w) : (!q && T(L), v)
        );
      },
    }
  );
}
function C6(t, n, a) {
  const s = [],
    l = a || qi.mix || qg,
    c = t.length - 1;
  for (let f = 0; f < c; f++) {
    let d = l(t[f], t[f + 1]);
    if (n) {
      const x = Array.isArray(n) ? n[f] || jn : n;
      d = Co(x, d);
    }
    s.push(d);
  }
  return s;
}
function D6(t, n, { clamp: a = !0, ease: s, mixer: l } = {}) {
  const c = t.length;
  if ((qh(c === n.length), c === 1)) return () => n[0];
  if (c === 2 && n[0] === n[1]) return () => n[1];
  const f = t[0] === t[1];
  t[0] > t[c - 1] && ((t = [...t].reverse()), (n = [...n].reverse()));
  const d = C6(n, s, l),
    x = d.length,
    h = (m) => {
      if (f && m < t[0]) return n[0];
      let y = 0;
      if (x > 1) for (; y < t.length - 2 && !(m < t[y + 1]); y++);
      const v = mo(t[y], t[y + 1], m);
      return d[y](v);
    };
  return a ? (m) => h(Vi(t[0], t[c - 1], m)) : h;
}
function B6(t, n) {
  const a = t[t.length - 1];
  for (let s = 1; s <= n; s++) {
    const l = mo(0, n, s);
    t.push(dt(a, 1, l));
  }
}
function _6(t) {
  const n = [0];
  return B6(n, t.length - 1), n;
}
function T6(t, n) {
  return t.map((a) => a * n);
}
function R6(t, n) {
  return t.map(() => n || Mg).splice(0, t.length - 1);
}
function uo({
  duration: t = 300,
  keyframes: n,
  times: a,
  ease: s = "easeInOut",
}) {
  const l = V5(s) ? s.map(dy) : dy(s),
    c = { done: !1, value: n[0] },
    f = T6(a && a.length === n.length ? a : _6(n), t),
    d = D6(f, n, { ease: Array.isArray(l) ? l : R6(n, l) });
  return {
    calculatedDuration: t,
    next: (x) => ((c.value = d(x)), (c.done = x >= t), c),
  };
}
const w6 = (t) => t !== null;
function Jh(t, { repeat: n, repeatType: a = "loop" }, s, l = 1) {
  const c = t.filter(w6),
    d = l < 0 || (n && a !== "loop" && n % 2 === 1) ? 0 : c.length - 1;
  return !d || s === void 0 ? c[d] : s;
}
const M6 = { decay: th, inertia: th, tween: uo, keyframes: uo, spring: Gu };
function Yg(t) {
  typeof t.type == "string" && (t.type = M6[t.type]);
}
class Ih {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((n) => {
      this.resolve = n;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(n, a) {
    return this.finished.then(n, a);
  }
}
const O6 = (t) => t / 100;
class ed extends Ih {
  constructor(n) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var s, l;
        const { motionValue: a } = this.options;
        a && a.updatedAt !== cn.now() && this.tick(cn.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (l = (s = this.options).onStop) == null || l.call(s));
      }),
      (this.options = n),
      this.initAnimation(),
      this.play(),
      n.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: n } = this;
    Yg(n);
    const {
      type: a = uo,
      repeat: s = 0,
      repeatDelay: l = 0,
      repeatType: c,
      velocity: f = 0,
    } = n;
    let { keyframes: d } = n;
    const x = a || uo;
    x !== uo &&
      typeof d[0] != "number" &&
      ((this.mixKeyframes = Co(O6, qg(d[0], d[1]))), (d = [0, 100]));
    const h = x(Ne(ue({}, n), { keyframes: d }));
    c === "mirror" &&
      (this.mirroredGenerator = x(
        Ne(ue({}, n), { keyframes: [...d].reverse(), velocity: -f }),
      )),
      h.calculatedDuration === null && (h.calculatedDuration = Wh(h));
    const { calculatedDuration: m } = h;
    (this.calculatedDuration = m),
      (this.resolvedDuration = m + l),
      (this.totalDuration = this.resolvedDuration * (s + 1) - l),
      (this.generator = h);
  }
  updateTime(n) {
    const a = Math.round(n - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = a);
  }
  tick(n, a = !1) {
    const {
      generator: s,
      totalDuration: l,
      mixKeyframes: c,
      mirroredGenerator: f,
      resolvedDuration: d,
      calculatedDuration: x,
    } = this;
    if (this.startTime === null) return s.next(0);
    const {
      delay: h = 0,
      keyframes: m,
      repeat: y,
      repeatType: v,
      repeatDelay: g,
      type: b,
      onUpdate: S,
      finalKeyframe: A,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, n))
      : this.speed < 0 &&
        (this.startTime = Math.min(n - l / this.speed, this.startTime)),
      a ? (this.currentTime = n) : this.updateTime(n);
    const R = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1),
      C = this.playbackSpeed >= 0 ? R < 0 : R > l;
    (this.currentTime = Math.max(R, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = l);
    let D = this.currentTime,
      T = s;
    if (y) {
      const L = Math.min(this.currentTime, l) / d;
      let q = Math.floor(L),
        M = L % 1;
      !M && L >= 1 && (M = 1),
        M === 1 && q--,
        (q = Math.min(q, y + 1)),
        !!(q % 2) &&
          (v === "reverse"
            ? ((M = 1 - M), g && (M -= g / d))
            : v === "mirror" && (T = f)),
        (D = Vi(0, 1, M) * d);
    }
    const w = C ? { done: !1, value: m[0] } : T.next(D);
    c && (w.value = c(w.value));
    let { done: z } = w;
    !C &&
      x !== null &&
      (z =
        this.playbackSpeed >= 0
          ? this.currentTime >= l
          : this.currentTime <= 0);
    const _ =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && z));
    return (
      _ && b !== th && (w.value = Jh(m, this.options, A, this.speed)),
      S && S(w.value),
      _ && this.finish(),
      w
    );
  }
  then(n, a) {
    return this.finished.then(n, a);
  }
  get duration() {
    return qn(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: n = 0 } = this.options || {};
    return this.duration + qn(n);
  }
  get time() {
    return qn(this.currentTime);
  }
  set time(n) {
    var a;
    (n = pi(n)),
      (this.currentTime = n),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = n)
        : this.driver &&
          (this.startTime = this.driver.now() - n / this.playbackSpeed),
      (a = this.driver) == null || a.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(n) {
    this.updateTime(cn.now());
    const a = this.playbackSpeed !== n;
    (this.playbackSpeed = n), a && (this.time = qn(this.currentTime));
  }
  play() {
    var l, c;
    if (this.isStopped) return;
    const { driver: n = x6, startTime: a } = this.options;
    this.driver || (this.driver = n((f) => this.tick(f))),
      (c = (l = this.options).onPlay) == null || c.call(l);
    const s = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = s))
      : this.holdTime !== null
        ? (this.startTime = s - this.holdTime)
        : this.startTime || (this.startTime = a != null ? a : s),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(cn.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var n, a;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (a = (n = this.options).onComplete) == null || a.call(n);
  }
  cancel() {
    var n, a;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (a = (n = this.options).onCancel) == null || a.call(n);
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(n) {
    return (this.startTime = 0), this.tick(n, !0);
  }
  attachTimeline(n) {
    var a;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (a = this.driver) == null || a.stop(),
      n.observe(this)
    );
  }
}
function F6(t) {
  var n;
  for (let a = 1; a < t.length; a++) (n = t[a]) != null || (t[a] = t[a - 1]);
}
const er = (t) => (t * 180) / Math.PI,
  nh = (t) => {
    const n = er(Math.atan2(t[1], t[0]));
    return ih(n);
  },
  z6 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: nh,
    rotateZ: nh,
    skewX: (t) => er(Math.atan(t[1])),
    skewY: (t) => er(Math.atan(t[2])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
  },
  ih = (t) => ((t = t % 360), t < 0 && (t += 360), t),
  gy = nh,
  Ey = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
  by = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
  L6 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Ey,
    scaleY: by,
    scale: (t) => (Ey(t) + by(t)) / 2,
    rotateX: (t) => ih(er(Math.atan2(t[6], t[5]))),
    rotateY: (t) => ih(er(Math.atan2(-t[2], t[0]))),
    rotateZ: gy,
    rotate: gy,
    skewX: (t) => er(Math.atan(t[4])),
    skewY: (t) => er(Math.atan(t[1])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
  };
function ah(t) {
  return t.includes("scale") ? 1 : 0;
}
function rh(t, n) {
  if (!t || t === "none") return ah(n);
  const a = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, l;
  if (a) (s = L6), (l = a);
  else {
    const d = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (s = z6), (l = d);
  }
  if (!l) return ah(n);
  const c = s[n],
    f = l[1].split(",").map(U6);
  return typeof c == "function" ? c(f) : f[c];
}
const N6 = (t, n) => {
  const { transform: a = "none" } = getComputedStyle(t);
  return rh(a, n);
};
function U6(t) {
  return parseFloat(t.trim());
}
const ts = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  ns = new Set(ts),
  Ay = (t) => t === es || t === Be,
  k6 = new Set(["x", "y", "z"]),
  H6 = ts.filter((t) => !k6.has(t));
function V6(t) {
  const n = [];
  return (
    H6.forEach((a) => {
      const s = t.getValue(a);
      s !== void 0 &&
        (n.push([a, s.get()]), s.set(a.startsWith("scale") ? 1 : 0));
    }),
    n
  );
}
const nr = {
  width: ({ x: t }, { paddingLeft: n = "0", paddingRight: a = "0" }) =>
    t.max - t.min - parseFloat(n) - parseFloat(a),
  height: ({ y: t }, { paddingTop: n = "0", paddingBottom: a = "0" }) =>
    t.max - t.min - parseFloat(n) - parseFloat(a),
  top: (t, { top: n }) => parseFloat(n),
  left: (t, { left: n }) => parseFloat(n),
  bottom: ({ y: t }, { top: n }) => parseFloat(n) + (t.max - t.min),
  right: ({ x: t }, { left: n }) => parseFloat(n) + (t.max - t.min),
  x: (t, { transform: n }) => rh(n, "x"),
  y: (t, { transform: n }) => rh(n, "y"),
};
nr.translateX = nr.x;
nr.translateY = nr.y;
const ir = new Set();
let sh = !1,
  oh = !1,
  lh = !1;
function Xg() {
  if (oh) {
    const t = Array.from(ir).filter((s) => s.needsMeasurement),
      n = new Set(t.map((s) => s.element)),
      a = new Map();
    n.forEach((s) => {
      const l = V6(s);
      l.length && (a.set(s, l), s.render());
    }),
      t.forEach((s) => s.measureInitialState()),
      n.forEach((s) => {
        s.render();
        const l = a.get(s);
        l &&
          l.forEach(([c, f]) => {
            var d;
            (d = s.getValue(c)) == null || d.set(f);
          });
      }),
      t.forEach((s) => s.measureEndState()),
      t.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      });
  }
  (oh = !1), (sh = !1), ir.forEach((t) => t.complete(lh)), ir.clear();
}
function Gg() {
  ir.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (oh = !0);
  });
}
function q6() {
  (lh = !0), Gg(), Xg(), (lh = !1);
}
class td {
  constructor(n, a, s, l, c, f = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...n]),
      (this.onComplete = a),
      (this.name = s),
      (this.motionValue = l),
      (this.element = c),
      (this.isAsync = f);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (ir.add(this),
          sh || ((sh = !0), ut.read(Gg), ut.resolveKeyframes(Xg)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: n,
      name: a,
      element: s,
      motionValue: l,
    } = this;
    if (n[0] === null) {
      const c = l == null ? void 0 : l.get(),
        f = n[n.length - 1];
      if (c !== void 0) n[0] = c;
      else if (s && a) {
        const d = s.readValue(a, f);
        d != null && (n[0] = d);
      }
      n[0] === void 0 && (n[0] = f), l && c === void 0 && l.set(n[0]);
    }
    F6(n);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(n = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, n),
      ir.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (ir.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const j6 = (t) => t.startsWith("--");
function P6(t, n, a) {
  j6(n) ? t.style.setProperty(n, a) : (t.style[n] = a);
}
const Y6 = jh(() => window.ScrollTimeline !== void 0),
  X6 = {};
function G6(t, n) {
  const a = jh(t);
  return () => {
    var s;
    return (s = X6[n]) != null ? s : a();
  };
}
const Kg = G6(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch (t) {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  so = ([t, n, a, s]) => `cubic-bezier(${t}, ${n}, ${a}, ${s})`,
  Sy = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: so([0, 0.65, 0.55, 1]),
    circOut: so([0.55, 0, 1, 0.45]),
    backIn: so([0.31, 0.01, 0.66, -0.59]),
    backOut: so([0.33, 1.53, 0.69, 0.99]),
  };
function Zg(t, n) {
  if (t)
    return typeof t == "function"
      ? Kg()
        ? jg(t, n)
        : "ease-out"
      : Og(t)
        ? so(t)
        : Array.isArray(t)
          ? t.map((a) => Zg(a, n) || Sy.easeOut)
          : Sy[t];
}
function K6(
  t,
  n,
  a,
  {
    delay: s = 0,
    duration: l = 300,
    repeat: c = 0,
    repeatType: f = "loop",
    ease: d = "easeOut",
    times: x,
  } = {},
  h = void 0,
) {
  const m = { [n]: a };
  x && (m.offset = x);
  const y = Zg(d, l);
  Array.isArray(y) && (m.easing = y);
  const v = {
    delay: s,
    duration: l,
    easing: Array.isArray(y) ? "linear" : y,
    fill: "both",
    iterations: c + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return h && (v.pseudoElement = h), t.animate(m, v);
}
function Qg(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function Z6(a) {
  var s = a,
    { type: t } = s,
    n = ln(s, ["type"]);
  var l, c;
  return Qg(t) && Kg()
    ? t.applyToOptions(n)
    : ((l = n.duration) != null || (n.duration = 300),
      (c = n.ease) != null || (n.ease = "easeOut"),
      n);
}
class Q6 extends Ih {
  constructor(n) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !n))
      return;
    const {
      element: a,
      name: s,
      keyframes: l,
      pseudoElement: c,
      allowFlatten: f = !1,
      finalKeyframe: d,
      onComplete: x,
    } = n;
    (this.isPseudoElement = !!c),
      (this.allowFlatten = f),
      (this.options = n),
      qh(typeof n.type != "string");
    const h = Z6(n);
    (this.animation = K6(a, s, l, h, c)),
      h.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !c)) {
          const m = Jh(l, this.options, d, this.speed);
          this.updateMotionValue ? this.updateMotionValue(m) : P6(a, s, m),
            this.animation.cancel();
        }
        x == null || x(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var n, a;
    (a = (n = this.animation).finish) == null || a.call(n);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch (n) {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: n } = this;
    n === "idle" ||
      n === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var n, a;
    this.isPseudoElement ||
      (a = (n = this.animation).commitStyles) == null ||
      a.call(n);
  }
  get duration() {
    var a, s;
    const n =
      ((s =
        (a = this.animation.effect) == null ? void 0 : a.getComputedTiming) ==
      null
        ? void 0
        : s.call(a).duration) || 0;
    return qn(Number(n));
  }
  get iterationDuration() {
    const { delay: n = 0 } = this.options || {};
    return this.duration + qn(n);
  }
  get time() {
    return qn(Number(this.animation.currentTime) || 0);
  }
  set time(n) {
    (this.finishedTime = null), (this.animation.currentTime = pi(n));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(n) {
    n < 0 && (this.finishedTime = null), (this.animation.playbackRate = n);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(n) {
    this.animation.startTime = n;
  }
  attachTimeline({ timeline: n, observe: a }) {
    var s;
    return (
      this.allowFlatten &&
        ((s = this.animation.effect) == null ||
          s.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      n && Y6() ? ((this.animation.timeline = n), jn) : a(this)
    );
  }
}
const $g = { anticipate: Tg, backInOut: _g, circInOut: wg };
function $6(t) {
  return t in $g;
}
function W6(t) {
  typeof t.ease == "string" && $6(t.ease) && (t.ease = $g[t.ease]);
}
const Cy = 10;
class J6 extends Q6 {
  constructor(n) {
    W6(n),
      Yg(n),
      super(n),
      n.startTime && (this.startTime = n.startTime),
      (this.options = n);
  }
  updateMotionValue(n) {
    var m;
    const h = this.options,
      { motionValue: a, onUpdate: s, onComplete: l, element: c } = h,
      f = ln(h, ["motionValue", "onUpdate", "onComplete", "element"]);
    if (!a) return;
    if (n !== void 0) {
      a.set(n);
      return;
    }
    const d = new ed(Ne(ue({}, f), { autoplay: !1 })),
      x = pi((m = this.finishedTime) != null ? m : this.time);
    a.setWithVelocity(d.sample(x - Cy).value, d.sample(x).value, Cy), d.stop();
  }
}
const Dy = (t, n) =>
  n === "zIndex"
    ? !1
    : !!(
        typeof t == "number" ||
        Array.isArray(t) ||
        (typeof t == "string" &&
          (ga.test(t) || t === "0") &&
          !t.startsWith("url("))
      );
function I6(t) {
  const n = t[0];
  if (t.length === 1) return !0;
  for (let a = 0; a < t.length; a++) if (t[a] !== n) return !0;
}
function eS(t, n, a, s) {
  const l = t[0];
  if (l === null) return !1;
  if (n === "display" || n === "visibility") return !0;
  const c = t[t.length - 1],
    f = Dy(l, n),
    d = Dy(c, n);
  return !f || !d ? !1 : I6(t) || ((a === "spring" || Qg(a)) && s);
}
function uh(t) {
  (t.duration = 0), (t.type = "keyframes");
}
const tS = new Set(["opacity", "clipPath", "filter", "transform"]),
  nS = jh(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function iS(t) {
  var m;
  const {
    motionValue: n,
    name: a,
    repeatDelay: s,
    repeatType: l,
    damping: c,
    type: f,
  } = t;
  if (
    !(
      ((m = n == null ? void 0 : n.owner) == null
        ? void 0
        : m.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: x, transformTemplate: h } = n.owner.getProps();
  return (
    nS() &&
    a &&
    tS.has(a) &&
    (a !== "transform" || !h) &&
    !x &&
    !s &&
    l !== "mirror" &&
    c !== 0 &&
    f !== "inertia"
  );
}
const aS = 40;
class rS extends Ih {
  constructor(v) {
    var g = v,
      {
        autoplay: n = !0,
        delay: a = 0,
        type: s = "keyframes",
        repeat: l = 0,
        repeatDelay: c = 0,
        repeatType: f = "loop",
        keyframes: d,
        name: x,
        motionValue: h,
        element: m,
      } = g,
      y = ln(g, [
        "autoplay",
        "delay",
        "type",
        "repeat",
        "repeatDelay",
        "repeatType",
        "keyframes",
        "name",
        "motionValue",
        "element",
      ]);
    var A;
    super(),
      (this.stop = () => {
        var R, C;
        this._animation &&
          (this._animation.stop(),
          (R = this.stopTimeline) == null || R.call(this)),
          (C = this.keyframeResolver) == null || C.cancel();
      }),
      (this.createdAt = cn.now());
    const b = ue(
        {
          autoplay: n,
          delay: a,
          type: s,
          repeat: l,
          repeatDelay: c,
          repeatType: f,
          name: x,
          motionValue: h,
          element: m,
        },
        y,
      ),
      S = (m == null ? void 0 : m.KeyframeResolver) || td;
    (this.keyframeResolver = new S(
      d,
      (R, C, D) => this.onKeyframesResolved(R, C, b, !D),
      x,
      h,
      m,
    )),
      (A = this.keyframeResolver) == null || A.scheduleResolve();
  }
  onKeyframesResolved(n, a, s, l) {
    this.keyframeResolver = void 0;
    const {
      name: c,
      type: f,
      velocity: d,
      delay: x,
      isHandoff: h,
      onUpdate: m,
    } = s;
    (this.resolvedAt = cn.now()),
      eS(n, c, f, d) ||
        ((qi.instantAnimations || !x) && (m == null || m(Jh(n, s, a))),
        (n[0] = n[n.length - 1]),
        uh(s),
        (s.repeat = 0));
    const y = l
        ? this.resolvedAt
          ? this.resolvedAt - this.createdAt > aS
            ? this.resolvedAt
            : this.createdAt
          : this.createdAt
        : void 0,
      v = Ne(ue({ startTime: y, finalKeyframe: a }, s), { keyframes: n }),
      g =
        !h && iS(v)
          ? new J6(Ne(ue({}, v), { element: v.motionValue.owner.current }))
          : new ed(v);
    g.finished.then(() => this.notifyFinished()).catch(jn),
      this.pendingTimeline &&
        ((this.stopTimeline = g.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = g);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(n, a) {
    return this.finished.finally(n).then(() => {});
  }
  get animation() {
    var n;
    return (
      this._animation ||
        ((n = this.keyframeResolver) == null || n.resume(), q6()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(n) {
    this.animation.time = n;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(n) {
    this.animation.speed = n;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(n) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(n))
        : (this.pendingTimeline = n),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var n;
    this._animation && this.animation.cancel(),
      (n = this.keyframeResolver) == null || n.cancel();
  }
}
const sS = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function oS(t) {
  const n = sS.exec(t);
  if (!n) return [,];
  const [, a, s, l] = n;
  return [`--${a != null ? a : s}`, l];
}
function Wg(t, n, a = 1) {
  const [s, l] = oS(t);
  if (!s) return;
  const c = window.getComputedStyle(n).getPropertyValue(s);
  if (c) {
    const f = c.trim();
    return gg(f) ? parseFloat(f) : f;
  }
  return Kh(l) ? Wg(l, n, a + 1) : l;
}
function nd(t, n) {
  var a, s;
  return (s =
    (a = t == null ? void 0 : t[n]) != null
      ? a
      : t == null
        ? void 0
        : t.default) != null
    ? s
    : t;
}
const Jg = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...ts,
  ]),
  lS = { test: (t) => t === "auto", parse: (t) => t },
  Ig = (t) => (n) => n.test(t),
  e2 = [es, Be, xi, pa, I5, J5, lS],
  By = (t) => e2.find(Ig(t));
function uS(t) {
  return typeof t == "number"
    ? t === 0
    : t !== null
      ? t === "none" || t === "0" || bg(t)
      : !0;
}
const cS = new Set(["brightness", "contrast", "saturate", "opacity"]);
function fS(t) {
  const [n, a] = t.slice(0, -1).split("(");
  if (n === "drop-shadow") return t;
  const [s] = a.match(Zh) || [];
  if (!s) return t;
  const l = a.replace(s, "");
  let c = cS.has(n) ? 1 : 0;
  return s !== a && (c *= 100), n + "(" + c + l + ")";
}
const hS = /\b([a-z-]*)\(.*?\)/gu,
  ch = Ne(ue({}, ga), {
    getAnimatableNone: (t) => {
      const n = t.match(hS);
      return n ? n.map(fS).join(" ") : t;
    },
  }),
  _y = Ne(ue({}, es), { transform: Math.round }),
  dS = {
    rotate: pa,
    rotateX: pa,
    rotateY: pa,
    rotateZ: pa,
    scale: Vl,
    scaleX: Vl,
    scaleY: Vl,
    scaleZ: Vl,
    skew: pa,
    skewX: pa,
    skewY: pa,
    distance: Be,
    translateX: Be,
    translateY: Be,
    translateZ: Be,
    x: Be,
    y: Be,
    z: Be,
    perspective: Be,
    transformPerspective: Be,
    opacity: yo,
    originX: py,
    originY: py,
    originZ: Be,
  },
  id = Ne(
    ue(
      {
        borderWidth: Be,
        borderTopWidth: Be,
        borderRightWidth: Be,
        borderBottomWidth: Be,
        borderLeftWidth: Be,
        borderRadius: Be,
        radius: Be,
        borderTopLeftRadius: Be,
        borderTopRightRadius: Be,
        borderBottomRightRadius: Be,
        borderBottomLeftRadius: Be,
        width: Be,
        maxWidth: Be,
        height: Be,
        maxHeight: Be,
        top: Be,
        right: Be,
        bottom: Be,
        left: Be,
        padding: Be,
        paddingTop: Be,
        paddingRight: Be,
        paddingBottom: Be,
        paddingLeft: Be,
        margin: Be,
        marginTop: Be,
        marginRight: Be,
        marginBottom: Be,
        marginLeft: Be,
        backgroundPositionX: Be,
        backgroundPositionY: Be,
      },
      dS,
    ),
    { zIndex: _y, fillOpacity: yo, strokeOpacity: yo, numOctaves: _y },
  ),
  pS = Ne(ue({}, id), {
    color: _t,
    backgroundColor: _t,
    outlineColor: _t,
    fill: _t,
    stroke: _t,
    borderColor: _t,
    borderTopColor: _t,
    borderRightColor: _t,
    borderBottomColor: _t,
    borderLeftColor: _t,
    filter: ch,
    WebkitFilter: ch,
  }),
  t2 = (t) => pS[t];
function n2(t, n) {
  let a = t2(t);
  return (
    a !== ch && (a = ga), a.getAnimatableNone ? a.getAnimatableNone(n) : void 0
  );
}
const xS = new Set(["auto", "none", "0"]);
function mS(t, n, a) {
  let s = 0,
    l;
  for (; s < t.length && !l; ) {
    const c = t[s];
    typeof c == "string" && !xS.has(c) && vo(c).values.length && (l = t[s]),
      s++;
  }
  if (l && a) for (const c of n) t[c] = n2(a, l);
}
class yS extends td {
  constructor(n, a, s, l, c) {
    super(n, a, s, l, c, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: n, element: a, name: s } = this;
    if (!a || !a.current) return;
    super.readKeyframes();
    for (let x = 0; x < n.length; x++) {
      let h = n[x];
      if (typeof h == "string" && ((h = h.trim()), Kh(h))) {
        const m = Wg(h, a.current);
        m !== void 0 && (n[x] = m),
          x === n.length - 1 && (this.finalKeyframe = h);
      }
    }
    if ((this.resolveNoneKeyframes(), !Jg.has(s) || n.length !== 2)) return;
    const [l, c] = n,
      f = By(l),
      d = By(c);
    if (f !== d)
      if (Ay(f) && Ay(d))
        for (let x = 0; x < n.length; x++) {
          const h = n[x];
          typeof h == "string" && (n[x] = parseFloat(h));
        }
      else nr[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: n, name: a } = this,
      s = [];
    for (let l = 0; l < n.length; l++) (n[l] === null || uS(n[l])) && s.push(l);
    s.length && mS(n, s, a);
  }
  measureInitialState() {
    const { element: n, unresolvedKeyframes: a, name: s } = this;
    if (!n || !n.current) return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = nr[s](
        n.measureViewportBox(),
        window.getComputedStyle(n.current),
      )),
      (a[0] = this.measuredOrigin);
    const l = a[a.length - 1];
    l !== void 0 && n.getValue(s, l).jump(l, !1);
  }
  measureEndState() {
    var d;
    const { element: n, name: a, unresolvedKeyframes: s } = this;
    if (!n || !n.current) return;
    const l = n.getValue(a);
    l && l.jump(this.measuredOrigin, !1);
    const c = s.length - 1,
      f = s[c];
    (s[c] = nr[a](n.measureViewportBox(), window.getComputedStyle(n.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      (d = this.removedTransforms) != null &&
        d.length &&
        this.removedTransforms.forEach(([x, h]) => {
          n.getValue(x).set(h);
        }),
      this.resolveNoneKeyframes();
  }
}
function vS(t, n, a) {
  var s;
  if (t instanceof EventTarget) return [t];
  if (typeof t == "string") {
    let l = document;
    const c =
      (s = a == null ? void 0 : a[t]) != null ? s : l.querySelectorAll(t);
    return c ? Array.from(c) : [];
  }
  return Array.from(t);
}
const i2 = (t, n) => (n && typeof t == "number" ? n.transform(t) : t);
function a2(t) {
  return Eg(t) && "offsetHeight" in t;
}
const Ty = 30,
  gS = (t) => !isNaN(parseFloat(t));
class ES {
  constructor(n, a = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s) => {
        var c;
        const l = cn.now();
        if (
          (this.updatedAt !== l && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(s),
          this.current !== this.prev &&
            ((c = this.events.change) == null || c.notify(this.current),
            this.dependents))
        )
          for (const f of this.dependents) f.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(n),
      (this.owner = a.owner);
  }
  setCurrent(n) {
    (this.current = n),
      (this.updatedAt = cn.now()),
      this.canTrackVelocity === null &&
        n !== void 0 &&
        (this.canTrackVelocity = gS(this.current));
  }
  setPrevFrameValue(n = this.current) {
    (this.prevFrameValue = n), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(n) {
    return this.on("change", n);
  }
  on(n, a) {
    this.events[n] || (this.events[n] = new Ph());
    const s = this.events[n].add(a);
    return n === "change"
      ? () => {
          s(),
            ut.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : s;
  }
  clearListeners() {
    for (const n in this.events) this.events[n].clear();
  }
  attach(n, a) {
    (this.passiveEffect = n), (this.stopPassiveEffect = a);
  }
  set(n) {
    this.passiveEffect
      ? this.passiveEffect(n, this.updateAndNotify)
      : this.updateAndNotify(n);
  }
  setWithVelocity(n, a, s) {
    this.set(a),
      (this.prev = void 0),
      (this.prevFrameValue = n),
      (this.prevUpdatedAt = this.updatedAt - s);
  }
  jump(n, a = !0) {
    this.updateAndNotify(n),
      (this.prev = n),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      a && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var n;
    (n = this.events.change) == null || n.notify(this.current);
  }
  addDependent(n) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(n);
  }
  removeDependent(n) {
    this.dependents && this.dependents.delete(n);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const n = cn.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      n - this.updatedAt > Ty
    )
      return 0;
    const a = Math.min(this.updatedAt - this.prevUpdatedAt, Ty);
    return Ag(parseFloat(this.current) - parseFloat(this.prevFrameValue), a);
  }
  start(n) {
    return (
      this.stop(),
      new Promise((a) => {
        (this.hasAnimated = !0),
          (this.animation = n(a)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var n, a;
    (n = this.dependents) == null || n.clear(),
      (a = this.events.destroy) == null || a.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function $r(t, n) {
  return new ES(t, n);
}
const { schedule: ad } = Fg(queueMicrotask, !1),
  ei = { x: !1, y: !1 };
function r2() {
  return ei.x || ei.y;
}
function bS(t) {
  return t === "x" || t === "y"
    ? ei[t]
      ? null
      : ((ei[t] = !0),
        () => {
          ei[t] = !1;
        })
    : ei.x || ei.y
      ? null
      : ((ei.x = ei.y = !0),
        () => {
          ei.x = ei.y = !1;
        });
}
function s2(t, n) {
  const a = vS(t),
    s = new AbortController(),
    l = Ne(ue({ passive: !0 }, n), { signal: s.signal });
  return [a, l, () => s.abort()];
}
function Ry(t) {
  return !(t.pointerType === "touch" || r2());
}
function AS(t, n, a = {}) {
  const [s, l, c] = s2(t, a),
    f = (d) => {
      if (!Ry(d)) return;
      const { target: x } = d,
        h = n(x, d);
      if (typeof h != "function" || !x) return;
      const m = (y) => {
        Ry(y) && (h(y), x.removeEventListener("pointerleave", m));
      };
      x.addEventListener("pointerleave", m, l);
    };
  return (
    s.forEach((d) => {
      d.addEventListener("pointerenter", f, l);
    }),
    c
  );
}
const o2 = (t, n) => (n ? (t === n ? !0 : o2(t, n.parentElement)) : !1),
  rd = (t) =>
    t.pointerType === "mouse"
      ? typeof t.button != "number" || t.button <= 0
      : t.isPrimary !== !1,
  SS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function CS(t) {
  return SS.has(t.tagName) || t.tabIndex !== -1;
}
const wu = new WeakSet();
function wy(t) {
  return (n) => {
    n.key === "Enter" && t(n);
  };
}
function Of(t, n) {
  t.dispatchEvent(
    new PointerEvent("pointer" + n, { isPrimary: !0, bubbles: !0 }),
  );
}
const DS = (t, n) => {
  const a = t.currentTarget;
  if (!a) return;
  const s = wy(() => {
    if (wu.has(a)) return;
    Of(a, "down");
    const l = wy(() => {
        Of(a, "up");
      }),
      c = () => Of(a, "cancel");
    a.addEventListener("keyup", l, n), a.addEventListener("blur", c, n);
  });
  a.addEventListener("keydown", s, n),
    a.addEventListener("blur", () => a.removeEventListener("keydown", s), n);
};
function My(t) {
  return rd(t) && !r2();
}
function BS(t, n, a = {}) {
  const [s, l, c] = s2(t, a),
    f = (d) => {
      const x = d.currentTarget;
      if (!My(d)) return;
      wu.add(x);
      const h = n(x, d),
        m = (g, b) => {
          window.removeEventListener("pointerup", y),
            window.removeEventListener("pointercancel", v),
            wu.has(x) && wu.delete(x),
            My(g) && typeof h == "function" && h(g, { success: b });
        },
        y = (g) => {
          m(
            g,
            x === window ||
              x === document ||
              a.useGlobalTarget ||
              o2(x, g.target),
          );
        },
        v = (g) => {
          m(g, !1);
        };
      window.addEventListener("pointerup", y, l),
        window.addEventListener("pointercancel", v, l);
    };
  return (
    s.forEach((d) => {
      (a.useGlobalTarget ? window : d).addEventListener("pointerdown", f, l),
        a2(d) &&
          (d.addEventListener("focus", (h) => DS(h, l)),
          !CS(d) && !d.hasAttribute("tabindex") && (d.tabIndex = 0));
    }),
    c
  );
}
function l2(t) {
  return Eg(t) && "ownerSVGElement" in t;
}
function _S(t) {
  return l2(t) && t.tagName === "svg";
}
const $t = (t) => !!(t && t.getVelocity),
  TS = [...e2, _t, ga],
  RS = (t) => TS.find(Ig(t)),
  sd = $.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: "never",
  });
function Oy(t, n) {
  if (typeof t == "function") return t(n);
  t != null && (t.current = n);
}
function wS(...t) {
  return (n) => {
    let a = !1;
    const s = t.map((l) => {
      const c = Oy(l, n);
      return !a && typeof c == "function" && (a = !0), c;
    });
    if (a)
      return () => {
        for (let l = 0; l < s.length; l++) {
          const c = s[l];
          typeof c == "function" ? c() : Oy(t[l], null);
        }
      };
  };
}
function MS(...t) {
  return $.useCallback(wS(...t), t);
}
class OS extends $.Component {
  getSnapshotBeforeUpdate(n) {
    const a = this.props.childRef.current;
    if (a && n.isPresent && !this.props.isPresent) {
      const s = a.offsetParent,
        l = (a2(s) && s.offsetWidth) || 0,
        c = this.props.sizeRef.current;
      (c.height = a.offsetHeight || 0),
        (c.width = a.offsetWidth || 0),
        (c.top = a.offsetTop),
        (c.left = a.offsetLeft),
        (c.right = l - c.width - c.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function FS({ children: t, isPresent: n, anchorX: a, root: s }) {
  const l = $.useId(),
    c = $.useRef(null),
    f = $.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: d } = $.useContext(sd),
    x = MS(c, t == null ? void 0 : t.ref);
  return (
    $.useInsertionEffect(() => {
      const { width: h, height: m, top: y, left: v, right: g } = f.current;
      if (n || !c.current || !h || !m) return;
      const b = a === "left" ? `left: ${v}` : `right: ${g}`;
      c.current.dataset.motionPopId = l;
      const S = document.createElement("style");
      d && (S.nonce = d);
      const A = s != null ? s : document.head;
      return (
        A.appendChild(S),
        S.sheet &&
          S.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${m}px !important;
            ${b}px !important;
            top: ${y}px !important;
          }
        `),
        () => {
          A.contains(S) && A.removeChild(S);
        }
      );
    }, [n]),
    Hi.jsx(OS, {
      isPresent: n,
      childRef: c,
      sizeRef: f,
      children: $.cloneElement(t, { ref: x }),
    })
  );
}
const zS = ({
  children: t,
  initial: n,
  isPresent: a,
  onExitComplete: s,
  custom: l,
  presenceAffectsLayout: c,
  mode: f,
  anchorX: d,
  root: x,
}) => {
  const h = Uh(LS),
    m = $.useId();
  let y = !0,
    v = $.useMemo(
      () => (
        (y = !1),
        {
          id: m,
          initial: n,
          isPresent: a,
          custom: l,
          onExitComplete: (g) => {
            h.set(g, !0);
            for (const b of h.values()) if (!b) return;
            s && s();
          },
          register: (g) => (h.set(g, !1), () => h.delete(g)),
        }
      ),
      [a, h, s],
    );
  return (
    c && y && (v = ue({}, v)),
    $.useMemo(() => {
      h.forEach((g, b) => h.set(b, !1));
    }, [a]),
    $.useEffect(() => {
      !a && !h.size && s && s();
    }, [a]),
    f === "popLayout" &&
      (t = Hi.jsx(FS, { isPresent: a, anchorX: d, root: x, children: t })),
    Hi.jsx(tc.Provider, { value: v, children: t })
  );
};
function LS() {
  return new Map();
}
function u2(t = !0) {
  const n = $.useContext(tc);
  if (n === null) return [!0, null];
  const { isPresent: a, onExitComplete: s, register: l } = n,
    c = $.useId();
  $.useEffect(() => {
    if (t) return l(c);
  }, [t]);
  const f = $.useCallback(() => t && s && s(c), [c, s, t]);
  return !a && s ? [!1, f] : [!0];
}
const ql = (t) => t.key || "";
function Fy(t) {
  const n = [];
  return (
    $.Children.forEach(t, (a) => {
      $.isValidElement(a) && n.push(a);
    }),
    n
  );
}
const z7 = ({
    children: t,
    custom: n,
    initial: a = !0,
    onExitComplete: s,
    presenceAffectsLayout: l = !0,
    mode: c = "sync",
    propagate: f = !1,
    anchorX: d = "left",
    root: x,
  }) => {
    const [h, m] = u2(f),
      y = $.useMemo(() => Fy(t), [t]),
      v = f && !h ? [] : y.map(ql),
      g = $.useRef(!0),
      b = $.useRef(y),
      S = Uh(() => new Map()),
      [A, R] = $.useState(y),
      [C, D] = $.useState(y);
    vg(() => {
      (g.current = !1), (b.current = y);
      for (let z = 0; z < C.length; z++) {
        const _ = ql(C[z]);
        v.includes(_) ? S.delete(_) : S.get(_) !== !0 && S.set(_, !1);
      }
    }, [C, v.length, v.join("-")]);
    const T = [];
    if (y !== A) {
      let z = [...y];
      for (let _ = 0; _ < C.length; _++) {
        const L = C[_],
          q = ql(L);
        v.includes(q) || (z.splice(_, 0, L), T.push(L));
      }
      return c === "wait" && T.length && (z = T), D(Fy(z)), R(y), null;
    }
    const { forceRender: w } = $.useContext(Nh);
    return Hi.jsx(Hi.Fragment, {
      children: C.map((z) => {
        const _ = ql(z),
          L = f && !h ? !1 : y === C || v.includes(_),
          q = () => {
            if (S.has(_)) S.set(_, !0);
            else return;
            let M = !0;
            S.forEach((j) => {
              j || (M = !1);
            }),
              M &&
                (w == null || w(),
                D(b.current),
                f && (m == null || m()),
                s && s());
          };
        return Hi.jsx(
          zS,
          {
            isPresent: L,
            initial: !g.current || a ? void 0 : !1,
            custom: n,
            presenceAffectsLayout: l,
            mode: c,
            root: x,
            onExitComplete: L ? void 0 : q,
            anchorX: d,
            children: z,
          },
          _,
        );
      }),
    });
  },
  c2 = $.createContext({ strict: !1 }),
  zy = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Wr = {};
for (const t in zy) Wr[t] = { isEnabled: (n) => zy[t].some((a) => !!n[a]) };
function NS(t) {
  for (const n in t) Wr[n] = ue(ue({}, Wr[n]), t[n]);
}
const US = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Ku(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    US.has(t)
  );
}
let f2 = (t) => !Ku(t);
function kS(t) {
  typeof t == "function" && (f2 = (n) => (n.startsWith("on") ? !Ku(n) : t(n)));
}
try {
  kS(require("@emotion/is-prop-valid").default);
} catch (t) {}
function HS(t, n, a) {
  const s = {};
  for (const l in t)
    (l === "values" && typeof t.values == "object") ||
      ((f2(l) ||
        (a === !0 && Ku(l)) ||
        (!n && !Ku(l)) ||
        (t.draggable && l.startsWith("onDrag"))) &&
        (s[l] = t[l]));
  return s;
}
const nc = $.createContext({});
function ic(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function go(t) {
  return typeof t == "string" || Array.isArray(t);
}
const od = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  ld = ["initial", ...od];
function ac(t) {
  return ic(t.animate) || ld.some((n) => go(t[n]));
}
function h2(t) {
  return !!(ac(t) || t.variants);
}
function VS(t, n) {
  if (ac(t)) {
    const { initial: a, animate: s } = t;
    return {
      initial: a === !1 || go(a) ? a : void 0,
      animate: go(s) ? s : void 0,
    };
  }
  return t.inherit !== !1 ? n : {};
}
function qS(t) {
  const { initial: n, animate: a } = VS(t, $.useContext(nc));
  return $.useMemo(() => ({ initial: n, animate: a }), [Ly(n), Ly(a)]);
}
function Ly(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Eo = {};
function jS(t) {
  for (const n in t) (Eo[n] = t[n]), Gh(n) && (Eo[n].isCSSVariable = !0);
}
function d2(t, { layout: n, layoutId: a }) {
  return (
    ns.has(t) ||
    t.startsWith("origin") ||
    ((n || a !== void 0) && (!!Eo[t] || t === "opacity"))
  );
}
const PS = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  YS = ts.length;
function XS(t, n, a) {
  let s = "",
    l = !0;
  for (let c = 0; c < YS; c++) {
    const f = ts[c],
      d = t[f];
    if (d === void 0) continue;
    let x = !0;
    if (
      (typeof d == "number"
        ? (x = d === (f.startsWith("scale") ? 1 : 0))
        : (x = parseFloat(d) === 0),
      !x || a)
    ) {
      const h = i2(d, id[f]);
      if (!x) {
        l = !1;
        const m = PS[f] || f;
        s += `${m}(${h}) `;
      }
      a && (n[f] = h);
    }
  }
  return (s = s.trim()), a ? (s = a(n, l ? "" : s)) : l && (s = "none"), s;
}
function ud(t, n, a) {
  const { style: s, vars: l, transformOrigin: c } = t;
  let f = !1,
    d = !1;
  for (const x in n) {
    const h = n[x];
    if (ns.has(x)) {
      f = !0;
      continue;
    } else if (Gh(x)) {
      l[x] = h;
      continue;
    } else {
      const m = i2(h, id[x]);
      x.startsWith("origin") ? ((d = !0), (c[x] = m)) : (s[x] = m);
    }
  }
  if (
    (n.transform ||
      (f || a
        ? (s.transform = XS(n, t.transform, a))
        : s.transform && (s.transform = "none")),
    d)
  ) {
    const { originX: x = "50%", originY: h = "50%", originZ: m = 0 } = c;
    s.transformOrigin = `${x} ${h} ${m}`;
  }
}
const cd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function p2(t, n, a) {
  for (const s in n) !$t(n[s]) && !d2(s, a) && (t[s] = n[s]);
}
function GS({ transformTemplate: t }, n) {
  return $.useMemo(() => {
    const a = cd();
    return ud(a, n, t), Object.assign({}, a.vars, a.style);
  }, [n]);
}
function KS(t, n) {
  const a = t.style || {},
    s = {};
  return p2(s, a, t), Object.assign(s, GS(t, n)), s;
}
function ZS(t, n) {
  const a = {},
    s = KS(t, n);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((a.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (a.tabIndex = 0),
    (a.style = s),
    a
  );
}
const QS = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  $S = { offset: "strokeDashoffset", array: "strokeDasharray" };
function WS(t, n, a = 1, s = 0, l = !0) {
  t.pathLength = 1;
  const c = l ? QS : $S;
  t[c.offset] = Be.transform(-s);
  const f = Be.transform(n),
    d = Be.transform(a);
  t[c.array] = `${f} ${d}`;
}
function x2(t, y, x, h, m) {
  var v = y,
    {
      attrX: n,
      attrY: a,
      attrScale: s,
      pathLength: l,
      pathSpacing: c = 1,
      pathOffset: f = 0,
    } = v,
    d = ln(v, [
      "attrX",
      "attrY",
      "attrScale",
      "pathLength",
      "pathSpacing",
      "pathOffset",
    ]);
  var S, A;
  if ((ud(t, d, h), x)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  (t.attrs = t.style), (t.style = {});
  const { attrs: g, style: b } = t;
  g.transform && ((b.transform = g.transform), delete g.transform),
    (b.transform || g.transformOrigin) &&
      ((b.transformOrigin = (S = g.transformOrigin) != null ? S : "50% 50%"),
      delete g.transformOrigin),
    b.transform &&
      ((b.transformBox =
        (A = m == null ? void 0 : m.transformBox) != null ? A : "fill-box"),
      delete g.transformBox),
    n !== void 0 && (g.x = n),
    a !== void 0 && (g.y = a),
    s !== void 0 && (g.scale = s),
    l !== void 0 && WS(g, l, c, f, !1);
}
const m2 = () => Ne(ue({}, cd()), { attrs: {} }),
  y2 = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function JS(t, n, a, s) {
  const l = $.useMemo(() => {
    const c = m2();
    return (
      x2(c, n, y2(s), t.transformTemplate, t.style),
      Ne(ue({}, c.attrs), { style: ue({}, c.style) })
    );
  }, [n]);
  if (t.style) {
    const c = {};
    p2(c, t.style, t), (l.style = ue(ue({}, c), l.style));
  }
  return l;
}
const IS = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function fd(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(IS.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function eC(t, n, a, { latestValues: s }, l, c = !1) {
  const d = (fd(t) ? JS : ZS)(n, s, l, t),
    x = HS(n, typeof t == "string", c),
    h = t !== $.Fragment ? Ne(ue(ue({}, x), d), { ref: a }) : {},
    { children: m } = n,
    y = $.useMemo(() => ($t(m) ? m.get() : m), [m]);
  return $.createElement(t, Ne(ue({}, h), { children: y }));
}
function Ny(t) {
  const n = [{}, {}];
  return (
    t == null ||
      t.values.forEach((a, s) => {
        (n[0][s] = a.get()), (n[1][s] = a.getVelocity());
      }),
    n
  );
}
function hd(t, n, a, s) {
  if (typeof n == "function") {
    const [l, c] = Ny(s);
    n = n(a !== void 0 ? a : t.custom, l, c);
  }
  if (
    (typeof n == "string" && (n = t.variants && t.variants[n]),
    typeof n == "function")
  ) {
    const [l, c] = Ny(s);
    n = n(a !== void 0 ? a : t.custom, l, c);
  }
  return n;
}
function Mu(t) {
  return $t(t) ? t.get() : t;
}
function tC({ scrapeMotionValuesFromProps: t, createRenderState: n }, a, s, l) {
  return { latestValues: nC(a, s, l, t), renderState: n() };
}
function nC(t, n, a, s) {
  const l = {},
    c = s(t, {});
  for (const g in c) l[g] = Mu(c[g]);
  let { initial: f, animate: d } = t;
  const x = ac(t),
    h = h2(t);
  n &&
    h &&
    !x &&
    t.inherit !== !1 &&
    (f === void 0 && (f = n.initial), d === void 0 && (d = n.animate));
  let m = a ? a.initial === !1 : !1;
  m = m || f === !1;
  const y = m ? d : f;
  if (y && typeof y != "boolean" && !ic(y)) {
    const g = Array.isArray(y) ? y : [y];
    for (let b = 0; b < g.length; b++) {
      const S = hd(t, g[b]);
      if (S) {
        const v = S,
          { transitionEnd: A, transition: R } = v,
          C = ln(v, ["transitionEnd", "transition"]);
        for (const D in C) {
          let T = C[D];
          if (Array.isArray(T)) {
            const w = m ? T.length - 1 : 0;
            T = T[w];
          }
          T !== null && (l[D] = T);
        }
        for (const D in A) l[D] = A[D];
      }
    }
  }
  return l;
}
const v2 = (t) => (n, a) => {
  const s = $.useContext(nc),
    l = $.useContext(tc),
    c = () => tC(t, n, s, l);
  return a ? c() : Uh(c);
};
function dd(t, n, a) {
  var c;
  const { style: s } = t,
    l = {};
  for (const f in s)
    ($t(s[f]) ||
      (n.style && $t(n.style[f])) ||
      d2(f, t) ||
      ((c = a == null ? void 0 : a.getValue(f)) == null
        ? void 0
        : c.liveStyle) !== void 0) &&
      (l[f] = s[f]);
  return l;
}
const iC = v2({ scrapeMotionValuesFromProps: dd, createRenderState: cd });
function g2(t, n, a) {
  const s = dd(t, n, a);
  for (const l in t)
    if ($t(t[l]) || $t(n[l])) {
      const c =
        ts.indexOf(l) !== -1
          ? "attr" + l.charAt(0).toUpperCase() + l.substring(1)
          : l;
      s[c] = t[l];
    }
  return s;
}
const aC = v2({ scrapeMotionValuesFromProps: g2, createRenderState: m2 }),
  rC = Symbol.for("motionComponentSymbol");
function Yr(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function sC(t, n, a) {
  return $.useCallback(
    (s) => {
      s && t.onMount && t.onMount(s),
        n && (s ? n.mount(s) : n.unmount()),
        a && (typeof a == "function" ? a(s) : Yr(a) && (a.current = s));
    },
    [n],
  );
}
const pd = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  oC = "framerAppearId",
  E2 = "data-" + pd(oC),
  b2 = $.createContext({});
function lC(t, n, a, s, l) {
  var S, A;
  const { visualElement: c } = $.useContext(nc),
    f = $.useContext(c2),
    d = $.useContext(tc),
    x = $.useContext(sd).reducedMotion,
    h = $.useRef(null);
  (s = s || f.renderer),
    !h.current &&
      s &&
      (h.current = s(t, {
        visualState: n,
        parent: c,
        props: a,
        presenceContext: d,
        blockInitialAnimation: d ? d.initial === !1 : !1,
        reducedMotionConfig: x,
      }));
  const m = h.current,
    y = $.useContext(b2);
  m &&
    !m.projection &&
    l &&
    (m.type === "html" || m.type === "svg") &&
    uC(h.current, a, l, y);
  const v = $.useRef(!1);
  $.useInsertionEffect(() => {
    m && v.current && m.update(a, d);
  });
  const g = a[E2],
    b = $.useRef(
      !!g &&
        !((S = window.MotionHandoffIsComplete) != null && S.call(window, g)) &&
        ((A = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : A.call(window, g)),
    );
  return (
    vg(() => {
      m &&
        ((v.current = !0),
        (window.MotionIsMounted = !0),
        m.updateFeatures(),
        m.scheduleRenderMicrotask(),
        b.current && m.animationState && m.animationState.animateChanges());
    }),
    $.useEffect(() => {
      m &&
        (!b.current && m.animationState && m.animationState.animateChanges(),
        b.current &&
          (queueMicrotask(() => {
            var R;
            (R = window.MotionHandoffMarkAsComplete) == null ||
              R.call(window, g);
          }),
          (b.current = !1)),
        (m.enteringChildren = void 0));
    }),
    m
  );
}
function uC(t, n, a, s) {
  const {
    layoutId: l,
    layout: c,
    drag: f,
    dragConstraints: d,
    layoutScroll: x,
    layoutRoot: h,
    layoutCrossfade: m,
  } = n;
  (t.projection = new a(
    t.latestValues,
    n["data-framer-portal-id"] ? void 0 : A2(t.parent),
  )),
    t.projection.setOptions({
      layoutId: l,
      layout: c,
      alwaysMeasureLayout: !!f || (d && Yr(d)),
      visualElement: t,
      animationType: typeof c == "string" ? c : "both",
      initialPromotionConfig: s,
      crossfade: m,
      layoutScroll: x,
      layoutRoot: h,
    });
}
function A2(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : A2(t.parent);
}
function Ff(t, { forwardMotionProps: n = !1 } = {}, a, s) {
  var d, x;
  a && NS(a);
  const l = fd(t) ? aC : iC;
  function c(h, m) {
    let y;
    const v = Ne(ue(ue({}, $.useContext(sd)), h), { layoutId: cC(h) }),
      { isStatic: g } = v,
      b = qS(h),
      S = l(h, g);
    if (!g && kh) {
      fC();
      const A = hC(v);
      (y = A.MeasureLayout),
        (b.visualElement = lC(t, S, v, s, A.ProjectionNode));
    }
    return Hi.jsxs(nc.Provider, {
      value: b,
      children: [
        y && b.visualElement
          ? Hi.jsx(y, ue({ visualElement: b.visualElement }, v))
          : null,
        eC(t, h, sC(S, b.visualElement, m), S, g, n),
      ],
    });
  }
  c.displayName = `motion.${typeof t == "string" ? t : `create(${(x = (d = t.displayName) != null ? d : t.name) != null ? x : ""})`}`;
  const f = $.forwardRef(c);
  return (f[rC] = t), f;
}
function cC({ layoutId: t }) {
  const n = $.useContext(Nh).id;
  return n && t !== void 0 ? n + "-" + t : t;
}
function fC(t, n) {
  $.useContext(c2).strict;
}
function hC(t) {
  const { drag: n, layout: a } = Wr;
  if (!n && !a) return {};
  const s = ue(ue({}, n), a);
  return {
    MeasureLayout:
      (n != null && n.isEnabled(t)) || (a != null && a.isEnabled(t))
        ? s.MeasureLayout
        : void 0,
    ProjectionNode: s.ProjectionNode,
  };
}
function dC(t, n) {
  if (typeof Proxy == "undefined") return Ff;
  const a = new Map(),
    s = (c, f) => Ff(c, f, t, n),
    l = (c, f) => s(c, f);
  return new Proxy(l, {
    get: (c, f) =>
      f === "create"
        ? s
        : (a.has(f) || a.set(f, Ff(f, void 0, t, n)), a.get(f)),
  });
}
function S2({ top: t, left: n, right: a, bottom: s }) {
  return { x: { min: n, max: a }, y: { min: t, max: s } };
}
function pC({ x: t, y: n }) {
  return { top: n.min, right: t.max, bottom: n.max, left: t.min };
}
function xC(t, n) {
  if (!n) return t;
  const a = n({ x: t.left, y: t.top }),
    s = n({ x: t.right, y: t.bottom });
  return { top: a.y, left: a.x, bottom: s.y, right: s.x };
}
function zf(t) {
  return t === void 0 || t === 1;
}
function fh({ scale: t, scaleX: n, scaleY: a }) {
  return !zf(t) || !zf(n) || !zf(a);
}
function Qa(t) {
  return (
    fh(t) ||
    C2(t) ||
    t.z ||
    t.rotate ||
    t.rotateX ||
    t.rotateY ||
    t.skewX ||
    t.skewY
  );
}
function C2(t) {
  return Uy(t.x) || Uy(t.y);
}
function Uy(t) {
  return t && t !== "0%";
}
function Zu(t, n, a) {
  const s = t - a,
    l = n * s;
  return a + l;
}
function ky(t, n, a, s, l) {
  return l !== void 0 && (t = Zu(t, l, s)), Zu(t, a, s) + n;
}
function hh(t, n = 0, a = 1, s, l) {
  (t.min = ky(t.min, n, a, s, l)), (t.max = ky(t.max, n, a, s, l));
}
function D2(t, { x: n, y: a }) {
  hh(t.x, n.translate, n.scale, n.originPoint),
    hh(t.y, a.translate, a.scale, a.originPoint);
}
const Hy = 0.999999999999,
  Vy = 1.0000000000001;
function mC(t, n, a, s = !1) {
  const l = a.length;
  if (!l) return;
  n.x = n.y = 1;
  let c, f;
  for (let d = 0; d < l; d++) {
    (c = a[d]), (f = c.projectionDelta);
    const { visualElement: x } = c.options;
    (x && x.props.style && x.props.style.display === "contents") ||
      (s &&
        c.options.layoutScroll &&
        c.scroll &&
        c !== c.root &&
        Gr(t, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
      f && ((n.x *= f.x.scale), (n.y *= f.y.scale), D2(t, f)),
      s && Qa(c.latestValues) && Gr(t, c.latestValues));
  }
  n.x < Vy && n.x > Hy && (n.x = 1), n.y < Vy && n.y > Hy && (n.y = 1);
}
function Xr(t, n) {
  (t.min = t.min + n), (t.max = t.max + n);
}
function qy(t, n, a, s, l = 0.5) {
  const c = dt(t.min, t.max, l);
  hh(t, n, a, c, s);
}
function Gr(t, n) {
  qy(t.x, n.x, n.scaleX, n.scale, n.originX),
    qy(t.y, n.y, n.scaleY, n.scale, n.originY);
}
function B2(t, n) {
  return S2(xC(t.getBoundingClientRect(), n));
}
function yC(t, n, a) {
  const s = B2(t, a),
    { scroll: l } = n;
  return l && (Xr(s.x, l.offset.x), Xr(s.y, l.offset.y)), s;
}
const jy = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Kr = () => ({ x: jy(), y: jy() }),
  Py = () => ({ min: 0, max: 0 }),
  Et = () => ({ x: Py(), y: Py() }),
  dh = { current: null },
  _2 = { current: !1 };
function vC() {
  if (((_2.current = !0), !!kh))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        n = () => (dh.current = t.matches);
      t.addEventListener("change", n), n();
    } else dh.current = !1;
}
const gC = new WeakMap();
function EC(t, n, a) {
  for (const s in n) {
    const l = n[s],
      c = a[s];
    if ($t(l)) t.addValue(s, l);
    else if ($t(c)) t.addValue(s, $r(l, { owner: t }));
    else if (c !== l)
      if (t.hasValue(s)) {
        const f = t.getValue(s);
        f.liveStyle === !0 ? f.jump(l) : f.hasAnimated || f.set(l);
      } else {
        const f = t.getStaticValue(s);
        t.addValue(s, $r(f !== void 0 ? f : l, { owner: t }));
      }
  }
  for (const s in a) n[s] === void 0 && t.removeValue(s);
  return n;
}
const Yy = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class bC {
  scrapeMotionValuesFromProps(n, a, s) {
    return {};
  }
  constructor(
    {
      parent: n,
      props: a,
      presenceContext: s,
      reducedMotionConfig: l,
      blockInitialAnimation: c,
      visualState: f,
    },
    d = {},
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = td),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const g = cn.now();
        this.renderScheduledAt < g &&
          ((this.renderScheduledAt = g), ut.render(this.render, !1, !0));
      });
    const { latestValues: x, renderState: h } = f;
    (this.latestValues = x),
      (this.baseTarget = ue({}, x)),
      (this.initialValues = a.initial ? ue({}, x) : {}),
      (this.renderState = h),
      (this.parent = n),
      (this.props = a),
      (this.presenceContext = s),
      (this.depth = n ? n.depth + 1 : 0),
      (this.reducedMotionConfig = l),
      (this.options = d),
      (this.blockInitialAnimation = !!c),
      (this.isControllingVariants = ac(a)),
      (this.isVariantNode = h2(a)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(n && n.current));
    const v = this.scrapeMotionValuesFromProps(a, {}, this),
      { willChange: m } = v,
      y = ln(v, ["willChange"]);
    for (const g in y) {
      const b = y[g];
      x[g] !== void 0 && $t(b) && b.set(x[g]);
    }
  }
  mount(n) {
    var a;
    (this.current = n),
      gC.set(n, this),
      this.projection && !this.projection.instance && this.projection.mount(n),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, l) => this.bindToMotionValue(l, s)),
      _2.current || vC(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : dh.current),
      (a = this.parent) == null || a.addChild(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var n;
    this.projection && this.projection.unmount(),
      va(this.notifyUpdate),
      va(this.render),
      this.valueSubscriptions.forEach((a) => a()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (n = this.parent) == null || n.removeChild(this);
    for (const a in this.events) this.events[a].clear();
    for (const a in this.features) {
      const s = this.features[a];
      s && (s.unmount(), (s.isMounted = !1));
    }
    this.current = null;
  }
  addChild(n) {
    var a;
    this.children.add(n),
      (a = this.enteringChildren) != null ||
        (this.enteringChildren = new Set()),
      this.enteringChildren.add(n);
  }
  removeChild(n) {
    this.children.delete(n),
      this.enteringChildren && this.enteringChildren.delete(n);
  }
  bindToMotionValue(n, a) {
    this.valueSubscriptions.has(n) && this.valueSubscriptions.get(n)();
    const s = ns.has(n);
    s && this.onBindTransform && this.onBindTransform();
    const l = a.on("change", (f) => {
      (this.latestValues[n] = f),
        this.props.onUpdate && ut.preRender(this.notifyUpdate),
        s && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let c;
    window.MotionCheckAppearSync &&
      (c = window.MotionCheckAppearSync(this, n, a)),
      this.valueSubscriptions.set(n, () => {
        l(), c && c(), a.owner && a.stop();
      });
  }
  sortNodePosition(n) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== n.type
      ? 0
      : this.sortInstanceNodePosition(this.current, n.current);
  }
  updateFeatures() {
    let n = "animation";
    for (n in Wr) {
      const a = Wr[n];
      if (!a) continue;
      const { isEnabled: s, Feature: l } = a;
      if (
        (!this.features[n] &&
          l &&
          s(this.props) &&
          (this.features[n] = new l(this)),
        this.features[n])
      ) {
        const c = this.features[n];
        c.isMounted ? c.update() : (c.mount(), (c.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Et();
  }
  getStaticValue(n) {
    return this.latestValues[n];
  }
  setStaticValue(n, a) {
    this.latestValues[n] = a;
  }
  update(n, a) {
    (n.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = n),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = a);
    for (let s = 0; s < Yy.length; s++) {
      const l = Yy[s];
      this.propEventSubscriptions[l] &&
        (this.propEventSubscriptions[l](),
        delete this.propEventSubscriptions[l]);
      const c = "on" + l,
        f = n[c];
      f && (this.propEventSubscriptions[l] = this.on(l, f));
    }
    (this.prevMotionValues = EC(
      this,
      this.scrapeMotionValuesFromProps(n, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(n) {
    return this.props.variants ? this.props.variants[n] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(n) {
    const a = this.getClosestVariantNode();
    if (a)
      return (
        a.variantChildren && a.variantChildren.add(n),
        () => a.variantChildren.delete(n)
      );
  }
  addValue(n, a) {
    const s = this.values.get(n);
    a !== s &&
      (s && this.removeValue(n),
      this.bindToMotionValue(n, a),
      this.values.set(n, a),
      (this.latestValues[n] = a.get()));
  }
  removeValue(n) {
    this.values.delete(n);
    const a = this.valueSubscriptions.get(n);
    a && (a(), this.valueSubscriptions.delete(n)),
      delete this.latestValues[n],
      this.removeValueFromRenderState(n, this.renderState);
  }
  hasValue(n) {
    return this.values.has(n);
  }
  getValue(n, a) {
    if (this.props.values && this.props.values[n]) return this.props.values[n];
    let s = this.values.get(n);
    return (
      s === void 0 &&
        a !== void 0 &&
        ((s = $r(a === null ? void 0 : a, { owner: this })),
        this.addValue(n, s)),
      s
    );
  }
  readValue(n, a) {
    var l;
    let s =
      this.latestValues[n] !== void 0 || !this.current
        ? this.latestValues[n]
        : (l = this.getBaseTargetFromProps(this.props, n)) != null
          ? l
          : this.readValueFromInstance(this.current, n, this.options);
    return (
      s != null &&
        (typeof s == "string" && (gg(s) || bg(s))
          ? (s = parseFloat(s))
          : !RS(s) && ga.test(a) && (s = n2(n, a)),
        this.setBaseTarget(n, $t(s) ? s.get() : s)),
      $t(s) ? s.get() : s
    );
  }
  setBaseTarget(n, a) {
    this.baseTarget[n] = a;
  }
  getBaseTarget(n) {
    var c;
    const { initial: a } = this.props;
    let s;
    if (typeof a == "string" || typeof a == "object") {
      const f = hd(
        this.props,
        a,
        (c = this.presenceContext) == null ? void 0 : c.custom,
      );
      f && (s = f[n]);
    }
    if (a && s !== void 0) return s;
    const l = this.getBaseTargetFromProps(this.props, n);
    return l !== void 0 && !$t(l)
      ? l
      : this.initialValues[n] !== void 0 && s === void 0
        ? void 0
        : this.baseTarget[n];
  }
  on(n, a) {
    return this.events[n] || (this.events[n] = new Ph()), this.events[n].add(a);
  }
  notify(n, ...a) {
    this.events[n] && this.events[n].notify(...a);
  }
  scheduleRenderMicrotask() {
    ad.render(this.render);
  }
}
class T2 extends bC {
  constructor() {
    super(...arguments), (this.KeyframeResolver = yS);
  }
  sortInstanceNodePosition(n, a) {
    return n.compareDocumentPosition(a) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(n, a) {
    return n.style ? n.style[a] : void 0;
  }
  removeValueFromRenderState(n, { vars: a, style: s }) {
    delete a[n], delete s[n];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: n } = this.props;
    $t(n) &&
      (this.childSubscription = n.on("change", (a) => {
        this.current && (this.current.textContent = `${a}`);
      }));
  }
}
function R2(t, { style: n, vars: a }, s, l) {
  const c = t.style;
  let f;
  for (f in n) c[f] = n[f];
  l == null || l.applyProjectionStyles(c, s);
  for (f in a) c.setProperty(f, a[f]);
}
function AC(t) {
  return window.getComputedStyle(t);
}
class SC extends T2 {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = R2);
  }
  readValueFromInstance(n, a) {
    var s;
    if (ns.has(a))
      return (s = this.projection) != null && s.isProjecting ? ah(a) : N6(n, a);
    {
      const l = AC(n),
        c = (Gh(a) ? l.getPropertyValue(a) : l[a]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(n, { transformPagePoint: a }) {
    return B2(n, a);
  }
  build(n, a, s) {
    ud(n, a, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(n, a, s) {
    return dd(n, a, s);
  }
}
const w2 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function CC(t, n, a, s) {
  R2(t, n, void 0, s);
  for (const l in n.attrs) t.setAttribute(w2.has(l) ? l : pd(l), n.attrs[l]);
}
class DC extends T2 {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Et);
  }
  getBaseTargetFromProps(n, a) {
    return n[a];
  }
  readValueFromInstance(n, a) {
    if (ns.has(a)) {
      const s = t2(a);
      return (s && s.default) || 0;
    }
    return (a = w2.has(a) ? a : pd(a)), n.getAttribute(a);
  }
  scrapeMotionValuesFromProps(n, a, s) {
    return g2(n, a, s);
  }
  build(n, a, s) {
    x2(n, a, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(n, a, s, l) {
    CC(n, a, s, l);
  }
  mount(n) {
    (this.isSVGTag = y2(n.tagName)), super.mount(n);
  }
}
const BC = (t, n) =>
  fd(t) ? new DC(n) : new SC(n, { allowProjection: t !== $.Fragment });
function Zr(t, n, a) {
  const s = t.getProps();
  return hd(s, n, a !== void 0 ? a : s.custom, t);
}
const ph = (t) => Array.isArray(t);
function _C(t, n, a) {
  t.hasValue(n) ? t.getValue(n).set(a) : t.addValue(n, $r(a));
}
function TC(t) {
  return ph(t) ? t[t.length - 1] || 0 : t;
}
function RC(t, n) {
  let f = Zr(t, n) || {},
    { transitionEnd: s = {}, transition: l = {} } = f,
    c = ln(f, ["transitionEnd", "transition"]);
  c = ue(ue({}, c), s);
  for (const d in c) {
    const x = TC(c[d]);
    _C(t, d, x);
  }
}
function wC(t) {
  return !!($t(t) && t.add);
}
function xh(t, n) {
  const a = t.getValue("willChange");
  if (wC(a)) return a.add(n);
  if (!a && qi.WillChange) {
    const s = new qi.WillChange("auto");
    t.addValue("willChange", s), s.add(n);
  }
}
function M2(t) {
  return t.props[E2];
}
const MC = (t) => t !== null;
function OC(t, { repeat: n, repeatType: a = "loop" }, s) {
  const l = t.filter(MC),
    c = n && a !== "loop" && n % 2 === 1 ? 0 : l.length - 1;
  return l[c];
}
const FC = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  zC = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  LC = { type: "keyframes", duration: 0.8 },
  NC = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  UC = (t, { keyframes: n }) =>
    n.length > 2
      ? LC
      : ns.has(t)
        ? t.startsWith("scale")
          ? zC(n[1])
          : FC
        : NC;
function kC(y) {
  var v = y,
    {
      when: t,
      delay: n,
      delayChildren: a,
      staggerChildren: s,
      staggerDirection: l,
      repeat: c,
      repeatType: f,
      repeatDelay: d,
      from: x,
      elapsed: h,
    } = v,
    m = ln(v, [
      "when",
      "delay",
      "delayChildren",
      "staggerChildren",
      "staggerDirection",
      "repeat",
      "repeatType",
      "repeatDelay",
      "from",
      "elapsed",
    ]);
  return !!Object.keys(m).length;
}
const xd =
  (t, n, a, s = {}, l, c) =>
  (f) => {
    const d = nd(s, t) || {},
      x = d.delay || s.delay || 0;
    let { elapsed: h = 0 } = s;
    h = h - pi(x);
    const m = Ne(
      ue(
        {
          keyframes: Array.isArray(a) ? a : [null, a],
          ease: "easeOut",
          velocity: n.getVelocity(),
        },
        d,
      ),
      {
        delay: -h,
        onUpdate: (v) => {
          n.set(v), d.onUpdate && d.onUpdate(v);
        },
        onComplete: () => {
          f(), d.onComplete && d.onComplete();
        },
        name: t,
        motionValue: n,
        element: c ? void 0 : l,
      },
    );
    kC(d) || Object.assign(m, UC(t, m)),
      m.duration && (m.duration = pi(m.duration)),
      m.repeatDelay && (m.repeatDelay = pi(m.repeatDelay)),
      m.from !== void 0 && (m.keyframes[0] = m.from);
    let y = !1;
    if (
      ((m.type === !1 || (m.duration === 0 && !m.repeatDelay)) &&
        (uh(m), m.delay === 0 && (y = !0)),
      (qi.instantAnimations || qi.skipAnimations) &&
        ((y = !0), uh(m), (m.delay = 0)),
      (m.allowFlatten = !d.type && !d.ease),
      y && !c && n.get() !== void 0)
    ) {
      const v = OC(m.keyframes, d);
      if (v !== void 0) {
        ut.update(() => {
          m.onUpdate(v), m.onComplete();
        });
        return;
      }
    }
    return d.isSync ? new ed(m) : new rS(m);
  };
function HC({ protectedKeys: t, needsAnimating: n }, a) {
  const s = t.hasOwnProperty(a) && n[a] !== !0;
  return (n[a] = !1), s;
}
function O2(t, n, { delay: a = 0, transitionOverride: s, type: l } = {}) {
  var y;
  let m = n,
    { transition: c = t.getDefaultTransition(), transitionEnd: f } = m,
    d = ln(m, ["transition", "transitionEnd"]);
  s && (c = s);
  const x = [],
    h = l && t.animationState && t.animationState.getState()[l];
  for (const v in d) {
    const g = t.getValue(v, (y = t.latestValues[v]) != null ? y : null),
      b = d[v];
    if (b === void 0 || (h && HC(h, v))) continue;
    const S = ue({ delay: a }, nd(c || {}, v)),
      A = g.get();
    if (
      A !== void 0 &&
      !g.isAnimating &&
      !Array.isArray(b) &&
      b === A &&
      !S.velocity
    )
      continue;
    let R = !1;
    if (window.MotionHandoffAnimation) {
      const D = M2(t);
      if (D) {
        const T = window.MotionHandoffAnimation(D, v, ut);
        T !== null && ((S.startTime = T), (R = !0));
      }
    }
    xh(t, v),
      g.start(
        xd(v, g, b, t.shouldReduceMotion && Jg.has(v) ? { type: !1 } : S, t, R),
      );
    const C = g.animation;
    C && x.push(C);
  }
  return (
    f &&
      Promise.all(x).then(() => {
        ut.update(() => {
          f && RC(t, f);
        });
      }),
    x
  );
}
function F2(t, n, a, s = 0, l = 1) {
  const c = Array.from(t)
      .sort((h, m) => h.sortNodePosition(m))
      .indexOf(n),
    f = t.size,
    d = (f - 1) * s;
  return typeof a == "function" ? a(c, f) : l === 1 ? c * s : d - c * s;
}
function mh(t, n, a = {}) {
  var x;
  const s = Zr(
    t,
    n,
    a.type === "exit"
      ? (x = t.presenceContext) == null
        ? void 0
        : x.custom
      : void 0,
  );
  let { transition: l = t.getDefaultTransition() || {} } = s || {};
  a.transitionOverride && (l = a.transitionOverride);
  const c = s ? () => Promise.all(O2(t, s, a)) : () => Promise.resolve(),
    f =
      t.variantChildren && t.variantChildren.size
        ? (h = 0) => {
            const {
              delayChildren: m = 0,
              staggerChildren: y,
              staggerDirection: v,
            } = l;
            return VC(t, n, h, m, y, v, a);
          }
        : () => Promise.resolve(),
    { when: d } = l;
  if (d) {
    const [h, m] = d === "beforeChildren" ? [c, f] : [f, c];
    return h().then(() => m());
  } else return Promise.all([c(), f(a.delay)]);
}
function VC(t, n, a = 0, s = 0, l = 0, c = 1, f) {
  const d = [];
  for (const x of t.variantChildren)
    x.notify("AnimationStart", n),
      d.push(
        mh(
          x,
          n,
          Ne(ue({}, f), {
            delay:
              a +
              (typeof s == "function" ? 0 : s) +
              F2(t.variantChildren, x, s, l, c),
          }),
        ).then(() => x.notify("AnimationComplete", n)),
      );
  return Promise.all(d);
}
function qC(t, n, a = {}) {
  t.notify("AnimationStart", n);
  let s;
  if (Array.isArray(n)) {
    const l = n.map((c) => mh(t, c, a));
    s = Promise.all(l);
  } else if (typeof n == "string") s = mh(t, n, a);
  else {
    const l = typeof n == "function" ? Zr(t, n, a.custom) : n;
    s = Promise.all(O2(t, l, a));
  }
  return s.then(() => {
    t.notify("AnimationComplete", n);
  });
}
function z2(t, n) {
  if (!Array.isArray(n)) return !1;
  const a = n.length;
  if (a !== t.length) return !1;
  for (let s = 0; s < a; s++) if (n[s] !== t[s]) return !1;
  return !0;
}
const jC = ld.length;
function L2(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const a = t.parent ? L2(t.parent) || {} : {};
    return t.props.initial !== void 0 && (a.initial = t.props.initial), a;
  }
  const n = {};
  for (let a = 0; a < jC; a++) {
    const s = ld[a],
      l = t.props[s];
    (go(l) || l === !1) && (n[s] = l);
  }
  return n;
}
const PC = [...od].reverse(),
  YC = od.length;
function XC(t) {
  return (n) =>
    Promise.all(n.map(({ animation: a, options: s }) => qC(t, a, s)));
}
function GC(t) {
  let n = XC(t),
    a = Xy(),
    s = !0;
  const l = (x) => (h, m) => {
    var v;
    const y = Zr(
      t,
      m,
      x === "exit"
        ? (v = t.presenceContext) == null
          ? void 0
          : v.custom
        : void 0,
    );
    if (y) {
      const g = y,
        { transition: b, transitionEnd: S } = g,
        A = ln(g, ["transition", "transitionEnd"]);
      h = ue(ue(ue({}, h), A), S);
    }
    return h;
  };
  function c(x) {
    n = x(t);
  }
  function f(x) {
    const { props: h } = t,
      m = L2(t.parent) || {},
      y = [],
      v = new Set();
    let g = {},
      b = 1 / 0;
    for (let A = 0; A < YC; A++) {
      const R = PC[A],
        C = a[R],
        D = h[R] !== void 0 ? h[R] : m[R],
        T = go(D),
        w = R === x ? C.isActive : null;
      w === !1 && (b = A);
      let z = D === m[R] && D !== h[R] && T;
      if (
        (z && s && t.manuallyAnimateOnMount && (z = !1),
        (C.protectedKeys = ue({}, g)),
        (!C.isActive && w === null) ||
          (!D && !C.prevProp) ||
          ic(D) ||
          typeof D == "boolean")
      )
        continue;
      const _ = KC(C.prevProp, D);
      let L = _ || (R === x && C.isActive && !z && T) || (A > b && T),
        q = !1;
      const M = Array.isArray(D) ? D : [D];
      let j = M.reduce(l(R), {});
      w === !1 && (j = {});
      const { prevResolvedValues: J = {} } = C,
        I = ue(ue({}, J), j),
        le = (oe) => {
          (L = !0),
            v.has(oe) && ((q = !0), v.delete(oe)),
            (C.needsAnimating[oe] = !0);
          const ie = t.getValue(oe);
          ie && (ie.liveStyle = !1);
        };
      for (const oe in I) {
        const ie = j[oe],
          ve = J[oe];
        if (g.hasOwnProperty(oe)) continue;
        let F = !1;
        ph(ie) && ph(ve) ? (F = !z2(ie, ve)) : (F = ie !== ve),
          F
            ? ie != null
              ? le(oe)
              : v.add(oe)
            : ie !== void 0 && v.has(oe)
              ? le(oe)
              : (C.protectedKeys[oe] = !0);
      }
      (C.prevProp = D),
        (C.prevResolvedValues = j),
        C.isActive && (g = ue(ue({}, g), j)),
        s && t.blockInitialAnimation && (L = !1);
      const ce = z && _;
      L &&
        (!ce || q) &&
        y.push(
          ...M.map((oe) => {
            const ie = { type: R };
            if (
              typeof oe == "string" &&
              s &&
              !ce &&
              t.manuallyAnimateOnMount &&
              t.parent
            ) {
              const { parent: ve } = t,
                F = Zr(ve, oe);
              if (ve.enteringChildren && F) {
                const { delayChildren: N } = F.transition || {};
                ie.delay = F2(ve.enteringChildren, t, N);
              }
            }
            return { animation: oe, options: ie };
          }),
        );
    }
    if (v.size) {
      const A = {};
      if (typeof h.initial != "boolean") {
        const R = Zr(t, Array.isArray(h.initial) ? h.initial[0] : h.initial);
        R && R.transition && (A.transition = R.transition);
      }
      v.forEach((R) => {
        const C = t.getBaseTarget(R),
          D = t.getValue(R);
        D && (D.liveStyle = !0), (A[R] = C != null ? C : null);
      }),
        y.push({ animation: A });
    }
    let S = !!y.length;
    return (
      s &&
        (h.initial === !1 || h.initial === h.animate) &&
        !t.manuallyAnimateOnMount &&
        (S = !1),
      (s = !1),
      S ? n(y) : Promise.resolve()
    );
  }
  function d(x, h) {
    var y;
    if (a[x].isActive === h) return Promise.resolve();
    (y = t.variantChildren) == null ||
      y.forEach((v) => {
        var g;
        return (g = v.animationState) == null ? void 0 : g.setActive(x, h);
      }),
      (a[x].isActive = h);
    const m = f(x);
    for (const v in a) a[v].protectedKeys = {};
    return m;
  }
  return {
    animateChanges: f,
    setActive: d,
    setAnimateFunction: c,
    getState: () => a,
    reset: () => {
      a = Xy();
    },
  };
}
function KC(t, n) {
  return typeof n == "string" ? n !== t : Array.isArray(n) ? !z2(n, t) : !1;
}
function Za(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Xy() {
  return {
    animate: Za(!0),
    whileInView: Za(),
    whileHover: Za(),
    whileTap: Za(),
    whileDrag: Za(),
    whileFocus: Za(),
    exit: Za(),
  };
}
class Aa {
  constructor(n) {
    (this.isMounted = !1), (this.node = n);
  }
  update() {}
}
class ZC extends Aa {
  constructor(n) {
    super(n), n.animationState || (n.animationState = GC(n));
  }
  updateAnimationControlsSubscription() {
    const { animate: n } = this.node.getProps();
    ic(n) && (this.unmountControls = n.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: n } = this.node.getProps(),
      { animate: a } = this.node.prevProps || {};
    n !== a && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var n;
    this.node.animationState.reset(),
      (n = this.unmountControls) == null || n.call(this);
  }
}
let QC = 0;
class $C extends Aa {
  constructor() {
    super(...arguments), (this.id = QC++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: n, onExitComplete: a } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || n === s) return;
    const l = this.node.animationState.setActive("exit", !n);
    a &&
      !n &&
      l.then(() => {
        a(this.id);
      });
  }
  mount() {
    const { register: n, onExitComplete: a } = this.node.presenceContext || {};
    a && a(this.id), n && (this.unmount = n(this.id));
  }
  unmount() {}
}
const WC = { animation: { Feature: ZC }, exit: { Feature: $C } };
function bo(t, n, a, s = { passive: !0 }) {
  return t.addEventListener(n, a, s), () => t.removeEventListener(n, a);
}
function _o(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const JC = (t) => (n) => rd(n) && t(n, _o(n));
function co(t, n, a, s) {
  return bo(t, n, JC(a), s);
}
const N2 = 1e-4,
  IC = 1 - N2,
  eD = 1 + N2,
  U2 = 0.01,
  tD = 0 - U2,
  nD = 0 + U2;
function tn(t) {
  return t.max - t.min;
}
function iD(t, n, a) {
  return Math.abs(t - n) <= a;
}
function Gy(t, n, a, s = 0.5) {
  (t.origin = s),
    (t.originPoint = dt(n.min, n.max, t.origin)),
    (t.scale = tn(a) / tn(n)),
    (t.translate = dt(a.min, a.max, t.origin) - t.originPoint),
    ((t.scale >= IC && t.scale <= eD) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= tD && t.translate <= nD) || isNaN(t.translate)) &&
      (t.translate = 0);
}
function fo(t, n, a, s) {
  Gy(t.x, n.x, a.x, s ? s.originX : void 0),
    Gy(t.y, n.y, a.y, s ? s.originY : void 0);
}
function Ky(t, n, a) {
  (t.min = a.min + n.min), (t.max = t.min + tn(n));
}
function aD(t, n, a) {
  Ky(t.x, n.x, a.x), Ky(t.y, n.y, a.y);
}
function Zy(t, n, a) {
  (t.min = n.min - a.min), (t.max = t.min + tn(n));
}
function ho(t, n, a) {
  Zy(t.x, n.x, a.x), Zy(t.y, n.y, a.y);
}
function Hn(t) {
  return [t("x"), t("y")];
}
const k2 = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  Qy = (t, n) => Math.abs(t - n);
function rD(t, n) {
  const a = Qy(t.x, n.x),
    s = Qy(t.y, n.y);
  return Math.sqrt(a ** 2 + s ** 2);
}
class H2 {
  constructor(
    n,
    a,
    {
      transformPagePoint: s,
      contextWindow: l = window,
      dragSnapToOrigin: c = !1,
      distanceThreshold: f = 3,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const v = Nf(this.lastMoveEventInfo, this.history),
          g = this.startEvent !== null,
          b = rD(v.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!g && !b) return;
        const { point: S } = v,
          { timestamp: A } = jt;
        this.history.push(Ne(ue({}, S), { timestamp: A }));
        const { onStart: R, onMove: C } = this.handlers;
        g ||
          (R && R(this.lastMoveEvent, v),
          (this.startEvent = this.lastMoveEvent)),
          C && C(this.lastMoveEvent, v);
      }),
      (this.handlePointerMove = (v, g) => {
        (this.lastMoveEvent = v),
          (this.lastMoveEventInfo = Lf(g, this.transformPagePoint)),
          ut.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (v, g) => {
        this.end();
        const { onEnd: b, onSessionEnd: S, resumeAnimation: A } = this.handlers;
        if (
          (this.dragSnapToOrigin && A && A(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const R = Nf(
          v.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Lf(g, this.transformPagePoint),
          this.history,
        );
        this.startEvent && b && b(v, R), S && S(v, R);
      }),
      !rd(n))
    )
      return;
    (this.dragSnapToOrigin = c),
      (this.handlers = a),
      (this.transformPagePoint = s),
      (this.distanceThreshold = f),
      (this.contextWindow = l || window);
    const d = _o(n),
      x = Lf(d, this.transformPagePoint),
      { point: h } = x,
      { timestamp: m } = jt;
    this.history = [Ne(ue({}, h), { timestamp: m })];
    const { onSessionStart: y } = a;
    y && y(n, Nf(x, this.history)),
      (this.removeListeners = Co(
        co(this.contextWindow, "pointermove", this.handlePointerMove),
        co(this.contextWindow, "pointerup", this.handlePointerUp),
        co(this.contextWindow, "pointercancel", this.handlePointerUp),
      ));
  }
  updateHandlers(n) {
    this.handlers = n;
  }
  end() {
    this.removeListeners && this.removeListeners(), va(this.updatePoint);
  }
}
function Lf(t, n) {
  return n ? { point: n(t.point) } : t;
}
function $y(t, n) {
  return { x: t.x - n.x, y: t.y - n.y };
}
function Nf({ point: t }, n) {
  return {
    point: t,
    delta: $y(t, V2(n)),
    offset: $y(t, sD(n)),
    velocity: oD(n, 0.1),
  };
}
function sD(t) {
  return t[0];
}
function V2(t) {
  return t[t.length - 1];
}
function oD(t, n) {
  if (t.length < 2) return { x: 0, y: 0 };
  let a = t.length - 1,
    s = null;
  const l = V2(t);
  for (; a >= 0 && ((s = t[a]), !(l.timestamp - s.timestamp > pi(n))); ) a--;
  if (!s) return { x: 0, y: 0 };
  const c = qn(l.timestamp - s.timestamp);
  if (c === 0) return { x: 0, y: 0 };
  const f = { x: (l.x - s.x) / c, y: (l.y - s.y) / c };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function lD(t, { min: n, max: a }, s) {
  return (
    n !== void 0 && t < n
      ? (t = s ? dt(n, t, s.min) : Math.max(t, n))
      : a !== void 0 && t > a && (t = s ? dt(a, t, s.max) : Math.min(t, a)),
    t
  );
}
function Wy(t, n, a) {
  return {
    min: n !== void 0 ? t.min + n : void 0,
    max: a !== void 0 ? t.max + a - (t.max - t.min) : void 0,
  };
}
function uD(t, { top: n, left: a, bottom: s, right: l }) {
  return { x: Wy(t.x, a, l), y: Wy(t.y, n, s) };
}
function Jy(t, n) {
  let a = n.min - t.min,
    s = n.max - t.max;
  return n.max - n.min < t.max - t.min && ([a, s] = [s, a]), { min: a, max: s };
}
function cD(t, n) {
  return { x: Jy(t.x, n.x), y: Jy(t.y, n.y) };
}
function fD(t, n) {
  let a = 0.5;
  const s = tn(t),
    l = tn(n);
  return (
    l > s
      ? (a = mo(n.min, n.max - s, t.min))
      : s > l && (a = mo(t.min, t.max - l, n.min)),
    Vi(0, 1, a)
  );
}
function hD(t, n) {
  const a = {};
  return (
    n.min !== void 0 && (a.min = n.min - t.min),
    n.max !== void 0 && (a.max = n.max - t.min),
    a
  );
}
const yh = 0.35;
function dD(t = yh) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = yh),
    { x: Iy(t, "left", "right"), y: Iy(t, "top", "bottom") }
  );
}
function Iy(t, n, a) {
  return { min: ev(t, n), max: ev(t, a) };
}
function ev(t, n) {
  return typeof t == "number" ? t : t[n] || 0;
}
const pD = new WeakMap();
class xD {
  constructor(n) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Et()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = n);
  }
  start(n, { snapToCursor: a = !1, distanceThreshold: s } = {}) {
    const { presenceContext: l } = this.visualElement;
    if (l && l.isPresent === !1) return;
    const c = (y) => {
        const { dragSnapToOrigin: v } = this.getProps();
        v ? this.pauseAnimation() : this.stopAnimation(),
          a && this.snapToCursor(_o(y).point);
      },
      f = (y, v) => {
        const { drag: g, dragPropagation: b, onDragStart: S } = this.getProps();
        if (
          g &&
          !b &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = bS(g)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = y),
          (this.latestPanInfo = v),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Hn((R) => {
            let C = this.getAxisMotionValue(R).get() || 0;
            if (xi.test(C)) {
              const { projection: D } = this.visualElement;
              if (D && D.layout) {
                const T = D.layout.layoutBox[R];
                T && (C = tn(T) * (parseFloat(C) / 100));
              }
            }
            this.originPoint[R] = C;
          }),
          S && ut.postRender(() => S(y, v)),
          xh(this.visualElement, "transform");
        const { animationState: A } = this.visualElement;
        A && A.setActive("whileDrag", !0);
      },
      d = (y, v) => {
        (this.latestPointerEvent = y), (this.latestPanInfo = v);
        const {
          dragPropagation: g,
          dragDirectionLock: b,
          onDirectionLock: S,
          onDrag: A,
        } = this.getProps();
        if (!g && !this.openDragLock) return;
        const { offset: R } = v;
        if (b && this.currentDirection === null) {
          (this.currentDirection = mD(R)),
            this.currentDirection !== null && S && S(this.currentDirection);
          return;
        }
        this.updateAxis("x", v.point, R),
          this.updateAxis("y", v.point, R),
          this.visualElement.render(),
          A && A(y, v);
      },
      x = (y, v) => {
        (this.latestPointerEvent = y),
          (this.latestPanInfo = v),
          this.stop(y, v),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      h = () =>
        Hn((y) => {
          var v;
          return (
            this.getAnimationState(y) === "paused" &&
            ((v = this.getAxisMotionValue(y).animation) == null
              ? void 0
              : v.play())
          );
        }),
      { dragSnapToOrigin: m } = this.getProps();
    this.panSession = new H2(
      n,
      {
        onSessionStart: c,
        onStart: f,
        onMove: d,
        onSessionEnd: x,
        resumeAnimation: h,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: m,
        distanceThreshold: s,
        contextWindow: k2(this.visualElement),
      },
    );
  }
  stop(n, a) {
    const s = n || this.latestPointerEvent,
      l = a || this.latestPanInfo,
      c = this.isDragging;
    if ((this.cancel(), !c || !l || !s)) return;
    const { velocity: f } = l;
    this.startAnimation(f);
    const { onDragEnd: d } = this.getProps();
    d && ut.postRender(() => d(s, l));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: n, animationState: a } = this.visualElement;
    n && (n.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: s } = this.getProps();
    !s &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      a && a.setActive("whileDrag", !1);
  }
  updateAxis(n, a, s) {
    const { drag: l } = this.getProps();
    if (!s || !jl(n, l, this.currentDirection)) return;
    const c = this.getAxisMotionValue(n);
    let f = this.originPoint[n] + s[n];
    this.constraints &&
      this.constraints[n] &&
      (f = lD(f, this.constraints[n], this.elastic[n])),
      c.set(f);
  }
  resolveConstraints() {
    var c;
    const { dragConstraints: n, dragElastic: a } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (c = this.visualElement.projection) == null
            ? void 0
            : c.layout,
      l = this.constraints;
    n && Yr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && s
        ? (this.constraints = uD(s.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = dD(a)),
      l !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Hn((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = hD(s.layoutBox[f], this.constraints[f]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: n, onMeasureDragConstraints: a } = this.getProps();
    if (!n || !Yr(n)) return !1;
    const s = n.current,
      { projection: l } = this.visualElement;
    if (!l || !l.layout) return !1;
    const c = yC(s, l.root, this.visualElement.getTransformPagePoint());
    let f = cD(l.layout.layoutBox, c);
    if (a) {
      const d = a(pC(f));
      (this.hasMutatedConstraints = !!d), d && (f = S2(d));
    }
    return f;
  }
  startAnimation(n) {
    const {
        drag: a,
        dragMomentum: s,
        dragElastic: l,
        dragTransition: c,
        dragSnapToOrigin: f,
        onDragTransitionEnd: d,
      } = this.getProps(),
      x = this.constraints || {},
      h = Hn((m) => {
        if (!jl(m, a, this.currentDirection)) return;
        let y = (x && x[m]) || {};
        f && (y = { min: 0, max: 0 });
        const v = l ? 200 : 1e6,
          g = l ? 40 : 1e7,
          b = ue(
            ue(
              {
                type: "inertia",
                velocity: s ? n[m] : 0,
                bounceStiffness: v,
                bounceDamping: g,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
              },
              c,
            ),
            y,
          );
        return this.startAxisValueAnimation(m, b);
      });
    return Promise.all(h).then(d);
  }
  startAxisValueAnimation(n, a) {
    const s = this.getAxisMotionValue(n);
    return (
      xh(this.visualElement, n), s.start(xd(n, s, 0, a, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Hn((n) => this.getAxisMotionValue(n).stop());
  }
  pauseAnimation() {
    Hn((n) => {
      var a;
      return (a = this.getAxisMotionValue(n).animation) == null
        ? void 0
        : a.pause();
    });
  }
  getAnimationState(n) {
    var a;
    return (a = this.getAxisMotionValue(n).animation) == null
      ? void 0
      : a.state;
  }
  getAxisMotionValue(n) {
    const a = `_drag${n.toUpperCase()}`,
      s = this.visualElement.getProps(),
      l = s[a];
    return (
      l ||
      this.visualElement.getValue(n, (s.initial ? s.initial[n] : void 0) || 0)
    );
  }
  snapToCursor(n) {
    Hn((a) => {
      const { drag: s } = this.getProps();
      if (!jl(a, s, this.currentDirection)) return;
      const { projection: l } = this.visualElement,
        c = this.getAxisMotionValue(a);
      if (l && l.layout) {
        const { min: f, max: d } = l.layout.layoutBox[a];
        c.set(n[a] - dt(f, d, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: n, dragConstraints: a } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!Yr(a) || !s || !this.constraints) return;
    this.stopAnimation();
    const l = { x: 0, y: 0 };
    Hn((f) => {
      const d = this.getAxisMotionValue(f);
      if (d && this.constraints !== !1) {
        const x = d.get();
        l[f] = fD({ min: x, max: x }, this.constraints[f]);
      }
    });
    const { transformTemplate: c } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = c ? c({}, "") : "none"),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      this.resolveConstraints(),
      Hn((f) => {
        if (!jl(f, n, null)) return;
        const d = this.getAxisMotionValue(f),
          { min: x, max: h } = this.constraints[f];
        d.set(dt(x, h, l[f]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    pD.set(this.visualElement, this);
    const n = this.visualElement.current,
      a = co(n, "pointerdown", (x) => {
        const { drag: h, dragListener: m = !0 } = this.getProps();
        h && m && this.start(x);
      }),
      s = () => {
        const { dragConstraints: x } = this.getProps();
        Yr(x) && x.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: l } = this.visualElement,
      c = l.addEventListener("measure", s);
    l && !l.layout && (l.root && l.root.updateScroll(), l.updateLayout()),
      ut.read(s);
    const f = bo(window, "resize", () => this.scalePositionWithinConstraints()),
      d = l.addEventListener(
        "didUpdate",
        ({ delta: x, hasLayoutChanged: h }) => {
          this.isDragging &&
            h &&
            (Hn((m) => {
              const y = this.getAxisMotionValue(m);
              y &&
                ((this.originPoint[m] += x[m].translate),
                y.set(y.get() + x[m].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      f(), a(), c(), d && d();
    };
  }
  getProps() {
    const n = this.visualElement.getProps(),
      {
        drag: a = !1,
        dragDirectionLock: s = !1,
        dragPropagation: l = !1,
        dragConstraints: c = !1,
        dragElastic: f = yh,
        dragMomentum: d = !0,
      } = n;
    return Ne(ue({}, n), {
      drag: a,
      dragDirectionLock: s,
      dragPropagation: l,
      dragConstraints: c,
      dragElastic: f,
      dragMomentum: d,
    });
  }
}
function jl(t, n, a) {
  return (n === !0 || n === t) && (a === null || a === t);
}
function mD(t, n = 10) {
  let a = null;
  return Math.abs(t.y) > n ? (a = "y") : Math.abs(t.x) > n && (a = "x"), a;
}
class yD extends Aa {
  constructor(n) {
    super(n),
      (this.removeGroupControls = jn),
      (this.removeListeners = jn),
      (this.controls = new xD(n));
  }
  mount() {
    const { dragControls: n } = this.node.getProps();
    n && (this.removeGroupControls = n.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || jn);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const tv = (t) => (n, a) => {
  t && ut.postRender(() => t(n, a));
};
class vD extends Aa {
  constructor() {
    super(...arguments), (this.removePointerDownListener = jn);
  }
  onPointerDown(n) {
    this.session = new H2(n, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: k2(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: n,
      onPanStart: a,
      onPan: s,
      onPanEnd: l,
    } = this.node.getProps();
    return {
      onSessionStart: tv(n),
      onStart: tv(a),
      onMove: s,
      onEnd: (c, f) => {
        delete this.session, l && ut.postRender(() => l(c, f));
      },
    };
  }
  mount() {
    this.removePointerDownListener = co(this.node.current, "pointerdown", (n) =>
      this.onPointerDown(n),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ou = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function nv(t, n) {
  return n.max === n.min ? 0 : (t / (n.max - n.min)) * 100;
}
const no = {
    correct: (t, n) => {
      if (!n.target) return t;
      if (typeof t == "string")
        if (Be.test(t)) t = parseFloat(t);
        else return t;
      const a = nv(t, n.target.x),
        s = nv(t, n.target.y);
      return `${a}% ${s}%`;
    },
  },
  gD = {
    correct: (t, { treeScale: n, projectionDelta: a }) => {
      const s = t,
        l = ga.parse(t);
      if (l.length > 5) return s;
      const c = ga.createTransformer(t),
        f = typeof l[0] != "number" ? 1 : 0,
        d = a.x.scale * n.x,
        x = a.y.scale * n.y;
      (l[0 + f] /= d), (l[1 + f] /= x);
      const h = dt(d, x, 0.5);
      return (
        typeof l[2 + f] == "number" && (l[2 + f] /= h),
        typeof l[3 + f] == "number" && (l[3 + f] /= h),
        c(l)
      );
    },
  };
let Uf = !1;
class ED extends $.Component {
  componentDidMount() {
    const {
        visualElement: n,
        layoutGroup: a,
        switchLayoutGroup: s,
        layoutId: l,
      } = this.props,
      { projection: c } = n;
    jS(bD),
      c &&
        (a.group && a.group.add(c),
        s && s.register && l && s.register(c),
        Uf && c.root.didUpdate(),
        c.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        c.setOptions(
          Ne(ue({}, c.options), { onExitComplete: () => this.safeToRemove() }),
        )),
      (Ou.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(n) {
    const {
        layoutDependency: a,
        visualElement: s,
        drag: l,
        isPresent: c,
      } = this.props,
      { projection: f } = s;
    return (
      f &&
        ((f.isPresent = c),
        (Uf = !0),
        l || n.layoutDependency !== a || a === void 0 || n.isPresent !== c
          ? f.willUpdate()
          : this.safeToRemove(),
        n.isPresent !== c &&
          (c
            ? f.promote()
            : f.relegate() ||
              ut.postRender(() => {
                const d = f.getStack();
                (!d || !d.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: n } = this.props.visualElement;
    n &&
      (n.root.didUpdate(),
      ad.postRender(() => {
        !n.currentAnimation && n.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: n,
        layoutGroup: a,
        switchLayoutGroup: s,
      } = this.props,
      { projection: l } = n;
    (Uf = !0),
      l &&
        (l.scheduleCheckAfterUnmount(),
        a && a.group && a.group.remove(l),
        s && s.deregister && s.deregister(l));
  }
  safeToRemove() {
    const { safeToRemove: n } = this.props;
    n && n();
  }
  render() {
    return null;
  }
}
function q2(t) {
  const [n, a] = u2(),
    s = $.useContext(Nh);
  return Hi.jsx(
    ED,
    Ne(ue({}, t), {
      layoutGroup: s,
      switchLayoutGroup: $.useContext(b2),
      isPresent: n,
      safeToRemove: a,
    }),
  );
}
const bD = {
  borderRadius: Ne(ue({}, no), {
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  }),
  borderTopLeftRadius: no,
  borderTopRightRadius: no,
  borderBottomLeftRadius: no,
  borderBottomRightRadius: no,
  boxShadow: gD,
};
function AD(t, n, a) {
  const s = $t(t) ? t : $r(t);
  return s.start(xd("", s, n, a)), s.animation;
}
const SD = (t, n) => t.depth - n.depth;
class CD {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(n) {
    Hh(this.children, n), (this.isDirty = !0);
  }
  remove(n) {
    Vh(this.children, n), (this.isDirty = !0);
  }
  forEach(n) {
    this.isDirty && this.children.sort(SD),
      (this.isDirty = !1),
      this.children.forEach(n);
  }
}
function DD(t, n) {
  const a = cn.now(),
    s = ({ timestamp: l }) => {
      const c = l - a;
      c >= n && (va(s), t(c - n));
    };
  return ut.setup(s, !0), () => va(s);
}
const j2 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  BD = j2.length,
  iv = (t) => (typeof t == "string" ? parseFloat(t) : t),
  av = (t) => typeof t == "number" || Be.test(t);
function _D(t, n, a, s, l, c) {
  var f, d, x, h;
  l
    ? ((t.opacity = dt(0, (f = a.opacity) != null ? f : 1, TD(s))),
      (t.opacityExit = dt((d = n.opacity) != null ? d : 1, 0, RD(s))))
    : c &&
      (t.opacity = dt(
        (x = n.opacity) != null ? x : 1,
        (h = a.opacity) != null ? h : 1,
        s,
      ));
  for (let m = 0; m < BD; m++) {
    const y = `border${j2[m]}Radius`;
    let v = rv(n, y),
      g = rv(a, y);
    if (v === void 0 && g === void 0) continue;
    v || (v = 0),
      g || (g = 0),
      v === 0 || g === 0 || av(v) === av(g)
        ? ((t[y] = Math.max(dt(iv(v), iv(g), s), 0)),
          (xi.test(g) || xi.test(v)) && (t[y] += "%"))
        : (t[y] = g);
  }
  (n.rotate || a.rotate) && (t.rotate = dt(n.rotate || 0, a.rotate || 0, s));
}
function rv(t, n) {
  return t[n] !== void 0 ? t[n] : t.borderRadius;
}
const TD = P2(0, 0.5, Rg),
  RD = P2(0.5, 0.95, jn);
function P2(t, n, a) {
  return (s) => (s < t ? 0 : s > n ? 1 : a(mo(t, n, s)));
}
function sv(t, n) {
  (t.min = n.min), (t.max = n.max);
}
function kn(t, n) {
  sv(t.x, n.x), sv(t.y, n.y);
}
function ov(t, n) {
  (t.translate = n.translate),
    (t.scale = n.scale),
    (t.originPoint = n.originPoint),
    (t.origin = n.origin);
}
function lv(t, n, a, s, l) {
  return (
    (t -= n), (t = Zu(t, 1 / a, s)), l !== void 0 && (t = Zu(t, 1 / l, s)), t
  );
}
function wD(t, n = 0, a = 1, s = 0.5, l, c = t, f = t) {
  if (
    (xi.test(n) &&
      ((n = parseFloat(n)), (n = dt(f.min, f.max, n / 100) - f.min)),
    typeof n != "number")
  )
    return;
  let d = dt(c.min, c.max, s);
  t === c && (d -= n),
    (t.min = lv(t.min, n, a, d, l)),
    (t.max = lv(t.max, n, a, d, l));
}
function uv(t, n, [a, s, l], c, f) {
  wD(t, n[a], n[s], n[l], n.scale, c, f);
}
const MD = ["x", "scaleX", "originX"],
  OD = ["y", "scaleY", "originY"];
function cv(t, n, a, s) {
  uv(t.x, n, MD, a ? a.x : void 0, s ? s.x : void 0),
    uv(t.y, n, OD, a ? a.y : void 0, s ? s.y : void 0);
}
function fv(t) {
  return t.translate === 0 && t.scale === 1;
}
function Y2(t) {
  return fv(t.x) && fv(t.y);
}
function hv(t, n) {
  return t.min === n.min && t.max === n.max;
}
function FD(t, n) {
  return hv(t.x, n.x) && hv(t.y, n.y);
}
function dv(t, n) {
  return (
    Math.round(t.min) === Math.round(n.min) &&
    Math.round(t.max) === Math.round(n.max)
  );
}
function X2(t, n) {
  return dv(t.x, n.x) && dv(t.y, n.y);
}
function pv(t) {
  return tn(t.x) / tn(t.y);
}
function xv(t, n) {
  return (
    t.translate === n.translate &&
    t.scale === n.scale &&
    t.originPoint === n.originPoint
  );
}
class zD {
  constructor() {
    this.members = [];
  }
  add(n) {
    Hh(this.members, n), n.scheduleRender();
  }
  remove(n) {
    if (
      (Vh(this.members, n),
      n === this.prevLead && (this.prevLead = void 0),
      n === this.lead)
    ) {
      const a = this.members[this.members.length - 1];
      a && this.promote(a);
    }
  }
  relegate(n) {
    const a = this.members.findIndex((l) => n === l);
    if (a === 0) return !1;
    let s;
    for (let l = a; l >= 0; l--) {
      const c = this.members[l];
      if (c.isPresent !== !1) {
        s = c;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(n, a) {
    const s = this.lead;
    if (n !== s && ((this.prevLead = s), (this.lead = n), n.show(), s)) {
      s.instance && s.scheduleRender(),
        n.scheduleRender(),
        (n.resumeFrom = s),
        a && (n.resumeFrom.preserveOpacity = !0),
        s.snapshot &&
          ((n.snapshot = s.snapshot),
          (n.snapshot.latestValues = s.animationValues || s.latestValues)),
        n.root && n.root.isUpdating && (n.isLayoutDirty = !0);
      const { crossfade: l } = n.options;
      l === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((n) => {
      const { options: a, resumingFrom: s } = n;
      a.onExitComplete && a.onExitComplete(),
        s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((n) => {
      n.instance && n.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function LD(t, n, a) {
  let s = "";
  const l = t.x.translate / n.x,
    c = t.y.translate / n.y,
    f = (a == null ? void 0 : a.z) || 0;
  if (
    ((l || c || f) && (s = `translate3d(${l}px, ${c}px, ${f}px) `),
    (n.x !== 1 || n.y !== 1) && (s += `scale(${1 / n.x}, ${1 / n.y}) `),
    a)
  ) {
    const {
      transformPerspective: h,
      rotate: m,
      rotateX: y,
      rotateY: v,
      skewX: g,
      skewY: b,
    } = a;
    h && (s = `perspective(${h}px) ${s}`),
      m && (s += `rotate(${m}deg) `),
      y && (s += `rotateX(${y}deg) `),
      v && (s += `rotateY(${v}deg) `),
      g && (s += `skewX(${g}deg) `),
      b && (s += `skewY(${b}deg) `);
  }
  const d = t.x.scale * n.x,
    x = t.y.scale * n.y;
  return (d !== 1 || x !== 1) && (s += `scale(${d}, ${x})`), s || "none";
}
const kf = ["", "X", "Y", "Z"],
  ND = 1e3;
let UD = 0;
function Hf(t, n, a, s) {
  const { latestValues: l } = n;
  l[t] && ((a[t] = l[t]), n.setStaticValue(t, 0), s && (s[t] = 0));
}
function G2(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: n } = t.options;
  if (!n) return;
  const a = M2(n);
  if (window.MotionHasOptimisedAnimation(a, "transform")) {
    const { layout: l, layoutId: c } = t.options;
    window.MotionCancelOptimisedAnimation(a, "transform", ut, !(l || c));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && G2(s);
}
function K2({
  attachResizeListener: t,
  defaultParent: n,
  measureScroll: a,
  checkIsScrollRoot: s,
  resetTransform: l,
}) {
  return class {
    constructor(f = {}, d = n == null ? void 0 : n()) {
      (this.id = UD++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(VD),
            this.nodes.forEach(YD),
            this.nodes.forEach(XD),
            this.nodes.forEach(qD);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = d ? d.root || d : this),
        (this.path = d ? [...d.path, d] : []),
        (this.parent = d),
        (this.depth = d ? d.depth + 1 : 0);
      for (let x = 0; x < this.path.length; x++)
        this.path[x].shouldResetTransform = !0;
      this.root === this && (this.nodes = new CD());
    }
    addEventListener(f, d) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new Ph()),
        this.eventHandlers.get(f).add(d)
      );
    }
    notifyListeners(f, ...d) {
      const x = this.eventHandlers.get(f);
      x && x.notify(...d);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      (this.isSVG = l2(f) && !_S(f)), (this.instance = f);
      const { layoutId: d, layout: x, visualElement: h } = this.options;
      if (
        (h && !h.current && h.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (x || d) && (this.isLayoutDirty = !0),
        t)
      ) {
        let m,
          y = 0;
        const v = () => (this.root.updateBlockedByResize = !1);
        ut.read(() => {
          y = window.innerWidth;
        }),
          t(f, () => {
            const g = window.innerWidth;
            g !== y &&
              ((y = g),
              (this.root.updateBlockedByResize = !0),
              m && m(),
              (m = DD(v, 250)),
              Ou.hasAnimatedSinceResize &&
                ((Ou.hasAnimatedSinceResize = !1), this.nodes.forEach(vv)));
          });
      }
      d && this.root.registerSharedNode(d, this),
        this.options.animate !== !1 &&
          h &&
          (d || x) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: m,
              hasLayoutChanged: y,
              hasRelativeLayoutChanged: v,
              layout: g,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const b =
                  this.options.transition || h.getDefaultTransition() || $D,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: A } =
                  h.getProps(),
                R = !this.targetLayout || !X2(this.targetLayout, g),
                C = !y && v;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                C ||
                (y && (R || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const D = Ne(ue({}, nd(b, "layout")), {
                  onPlay: S,
                  onComplete: A,
                });
                (h.shouldReduceMotion || this.options.layoutRoot) &&
                  ((D.delay = 0), (D.type = !1)),
                  this.startAnimation(D),
                  this.setAnimationOrigin(m, C);
              } else
                y || vv(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = g;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        va(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(GD),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          G2(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let m = 0; m < this.path.length; m++) {
        const y = this.path[m];
        (y.shouldResetTransform = !0),
          y.updateScroll("snapshot"),
          y.options.layoutRoot && y.willUpdate(!1);
      }
      const { layoutId: d, layout: x } = this.options;
      if (d === void 0 && !x) return;
      const h = this.getTransformTemplate();
      (this.prevTransformTemplateValue = h ? h(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(mv);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(yv);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(PD),
            this.nodes.forEach(kD),
            this.nodes.forEach(HD))
          : this.nodes.forEach(yv),
        this.clearAllSnapshots();
      const d = cn.now();
      (jt.delta = Vi(0, 1e3 / 60, d - jt.timestamp)),
        (jt.timestamp = d),
        (jt.isProcessing = !0),
        _f.update.process(jt),
        _f.preRender.process(jt),
        _f.render.process(jt),
        (jt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), ad.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(jD), this.sharedNodes.forEach(KD);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ut.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ut.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !tn(this.snapshot.measuredBox.x) &&
          !tn(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let x = 0; x < this.path.length; x++) this.path[x].updateScroll();
      const f = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Et()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: d } = this.options;
      d &&
        d.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0,
        );
    }
    updateScroll(f = "measure") {
      let d = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (d = !1),
        d && this.instance)
      ) {
        const x = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: x,
          offset: a(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : x,
        };
      }
    }
    resetTransform() {
      if (!l) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        d = this.projectionDelta && !Y2(this.projectionDelta),
        x = this.getTransformTemplate(),
        h = x ? x(this.latestValues, "") : void 0,
        m = h !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (d || Qa(this.latestValues) || m) &&
        (l(this.instance, h),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const d = this.measurePageBox();
      let x = this.removeElementScroll(d);
      return (
        f && (x = this.removeTransform(x)),
        WD(x),
        {
          animationId: this.root.animationId,
          measuredBox: d,
          layoutBox: x,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var h;
      const { visualElement: f } = this.options;
      if (!f) return Et();
      const d = f.measureViewportBox();
      if (
        !(
          ((h = this.scroll) == null ? void 0 : h.wasRoot) || this.path.some(JD)
        )
      ) {
        const { scroll: m } = this.root;
        m && (Xr(d.x, m.offset.x), Xr(d.y, m.offset.y));
      }
      return d;
    }
    removeElementScroll(f) {
      var x;
      const d = Et();
      if ((kn(d, f), (x = this.scroll) != null && x.wasRoot)) return d;
      for (let h = 0; h < this.path.length; h++) {
        const m = this.path[h],
          { scroll: y, options: v } = m;
        m !== this.root &&
          y &&
          v.layoutScroll &&
          (y.wasRoot && kn(d, f), Xr(d.x, y.offset.x), Xr(d.y, y.offset.y));
      }
      return d;
    }
    applyTransform(f, d = !1) {
      const x = Et();
      kn(x, f);
      for (let h = 0; h < this.path.length; h++) {
        const m = this.path[h];
        !d &&
          m.options.layoutScroll &&
          m.scroll &&
          m !== m.root &&
          Gr(x, { x: -m.scroll.offset.x, y: -m.scroll.offset.y }),
          Qa(m.latestValues) && Gr(x, m.latestValues);
      }
      return Qa(this.latestValues) && Gr(x, this.latestValues), x;
    }
    removeTransform(f) {
      const d = Et();
      kn(d, f);
      for (let x = 0; x < this.path.length; x++) {
        const h = this.path[x];
        if (!h.instance || !Qa(h.latestValues)) continue;
        fh(h.latestValues) && h.updateSnapshot();
        const m = Et(),
          y = h.measurePageBox();
        kn(m, y),
          cv(d, h.latestValues, h.snapshot ? h.snapshot.layoutBox : void 0, m);
      }
      return Qa(this.latestValues) && cv(d, this.latestValues), d;
    }
    setTargetDelta(f) {
      (this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(f) {
      this.options = Ne(ue(ue({}, this.options), f), {
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      });
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== jt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var v;
      const d = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = d.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = d.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = d.isSharedProjectionDirty);
      const x = !!this.resumingFrom || this !== d;
      if (
        !(
          f ||
          (x && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((v = this.parent) != null && v.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: m, layoutId: y } = this.options;
      if (!(!this.layout || !(m || y))) {
        if (
          ((this.resolvedRelativeTargetAt = jt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Et()),
              (this.relativeTargetOrigin = Et()),
              ho(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox,
              ),
              kn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Et()), (this.targetWithTransforms = Et())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              aD(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : kn(this.target, this.layout.layoutBox),
                D2(this.target, this.targetDelta))
              : kn(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const g = this.getClosestProjectingParent();
          g &&
          !!g.resumingFrom == !!this.resumingFrom &&
          !g.options.layoutScroll &&
          g.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Et()),
              (this.relativeTargetOrigin = Et()),
              ho(this.relativeTargetOrigin, this.target, g.target),
              kn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          fh(this.parent.latestValues) ||
          C2(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var b;
      const f = this.getLead(),
        d = !!this.resumingFrom || this !== f;
      let x = !0;
      if (
        ((this.isProjectionDirty ||
          ((b = this.parent) != null && b.isProjectionDirty)) &&
          (x = !1),
        d &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (x = !1),
        this.resolvedRelativeTargetAt === jt.timestamp && (x = !1),
        x)
      )
        return;
      const { layout: h, layoutId: m } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(h || m))
      )
        return;
      kn(this.layoutCorrected, this.layout.layoutBox);
      const y = this.treeScale.x,
        v = this.treeScale.y;
      mC(this.layoutCorrected, this.treeScale, this.path, d),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = Et()));
      const { target: g } = f;
      if (!g) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (ov(this.prevProjectionDelta.x, this.projectionDelta.x),
          ov(this.prevProjectionDelta.y, this.projectionDelta.y)),
        fo(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
        (this.treeScale.x !== y ||
          this.treeScale.y !== v ||
          !xv(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !xv(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", g));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      var d;
      if (((d = this.options.visualElement) == null || d.scheduleRender(), f)) {
        const x = this.getStack();
        x && x.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Kr()),
        (this.projectionDelta = Kr()),
        (this.projectionDeltaWithTransform = Kr());
    }
    setAnimationOrigin(f, d = !1) {
      const x = this.snapshot,
        h = x ? x.latestValues : {},
        m = ue({}, this.latestValues),
        y = Kr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !d);
      const v = Et(),
        g = x ? x.source : void 0,
        b = this.layout ? this.layout.source : void 0,
        S = g !== b,
        A = this.getStack(),
        R = !A || A.members.length <= 1,
        C = !!(S && !R && this.options.crossfade === !0 && !this.path.some(QD));
      this.animationProgress = 0;
      let D;
      (this.mixTargetDelta = (T) => {
        const w = T / 1e3;
        gv(y.x, f.x, w),
          gv(y.y, f.y, w),
          this.setTargetDelta(y),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ho(v, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            ZD(this.relativeTarget, this.relativeTargetOrigin, v, w),
            D && FD(this.relativeTarget, D) && (this.isProjectionDirty = !1),
            D || (D = Et()),
            kn(D, this.relativeTarget)),
          S &&
            ((this.animationValues = m), _D(m, h, this.latestValues, w, C, R)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = w);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      var d, x, h;
      this.notifyListeners("animationStart"),
        (d = this.currentAnimation) == null || d.stop(),
        (h = (x = this.resumingFrom) == null ? void 0 : x.currentAnimation) ==
          null || h.stop(),
        this.pendingAnimation &&
          (va(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ut.update(() => {
          (Ou.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = $r(0)),
            (this.currentAnimation = AD(
              this.motionValue,
              [0, 1e3],
              Ne(ue({}, f), {
                velocity: 0,
                isSync: !0,
                onUpdate: (m) => {
                  this.mixTargetDelta(m), f.onUpdate && f.onUpdate(m);
                },
                onStop: () => {},
                onComplete: () => {
                  f.onComplete && f.onComplete(), this.completeAnimation();
                },
              }),
            )),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(ND),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: d,
        target: x,
        layout: h,
        latestValues: m,
      } = f;
      if (!(!d || !x || !h)) {
        if (
          this !== f &&
          this.layout &&
          h &&
          Z2(this.options.animationType, this.layout.layoutBox, h.layoutBox)
        ) {
          x = this.target || Et();
          const y = tn(this.layout.layoutBox.x);
          (x.x.min = f.target.x.min), (x.x.max = x.x.min + y);
          const v = tn(this.layout.layoutBox.y);
          (x.y.min = f.target.y.min), (x.y.max = x.y.min + v);
        }
        kn(d, x),
          Gr(d, m),
          fo(this.projectionDeltaWithTransform, this.layoutCorrected, d, m);
      }
    }
    registerSharedNode(f, d) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new zD()),
        this.sharedNodes.get(f).add(d);
      const h = d.options.initialPromotionConfig;
      d.promote({
        transition: h ? h.transition : void 0,
        preserveFollowOpacity:
          h && h.shouldPreserveFollowOpacity
            ? h.shouldPreserveFollowOpacity(d)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      var d;
      const { layoutId: f } = this.options;
      return f
        ? ((d = this.getStack()) == null ? void 0 : d.lead) || this
        : this;
    }
    getPrevLead() {
      var d;
      const { layoutId: f } = this.options;
      return f ? ((d = this.getStack()) == null ? void 0 : d.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: d, preserveFollowOpacity: x } = {}) {
      const h = this.getStack();
      h && h.promote(this, x),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        d && this.setOptions({ transition: d });
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let d = !1;
      const { latestValues: x } = f;
      if (
        ((x.z ||
          x.rotate ||
          x.rotateX ||
          x.rotateY ||
          x.rotateZ ||
          x.skewX ||
          x.skewY) &&
          (d = !0),
        !d)
      )
        return;
      const h = {};
      x.z && Hf("z", f, h, this.animationValues);
      for (let m = 0; m < kf.length; m++)
        Hf(`rotate${kf[m]}`, f, h, this.animationValues),
          Hf(`skew${kf[m]}`, f, h, this.animationValues);
      f.render();
      for (const m in h)
        f.setStaticValue(m, h[m]),
          this.animationValues && (this.animationValues[m] = h[m]);
      f.scheduleRender();
    }
    applyProjectionStyles(f, d) {
      var b, S;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const x = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (f.visibility = ""),
          (f.opacity = ""),
          (f.pointerEvents = Mu(d == null ? void 0 : d.pointerEvents) || ""),
          (f.transform = x ? x(this.latestValues, "") : "none");
        return;
      }
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        this.options.layoutId &&
          ((f.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (f.pointerEvents = Mu(d == null ? void 0 : d.pointerEvents) || "")),
          this.hasProjected &&
            !Qa(this.latestValues) &&
            ((f.transform = x ? x({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      f.visibility = "";
      const m = h.animationValues || h.latestValues;
      this.applyTransformsToTarget();
      let y = LD(this.projectionDeltaWithTransform, this.treeScale, m);
      x && (y = x(m, y)), (f.transform = y);
      const { x: v, y: g } = this.projectionDelta;
      (f.transformOrigin = `${v.origin * 100}% ${g.origin * 100}% 0`),
        h.animationValues
          ? (f.opacity =
              h === this
                ? (S =
                    (b = m.opacity) != null ? b : this.latestValues.opacity) !=
                  null
                  ? S
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : m.opacityExit)
          : (f.opacity =
              h === this
                ? m.opacity !== void 0
                  ? m.opacity
                  : ""
                : m.opacityExit !== void 0
                  ? m.opacityExit
                  : 0);
      for (const A in Eo) {
        if (m[A] === void 0) continue;
        const { correct: R, applyTo: C, isCSSVariable: D } = Eo[A],
          T = y === "none" ? m[A] : R(m[A], h);
        if (C) {
          const w = C.length;
          for (let z = 0; z < w; z++) f[C[z]] = T;
        } else
          D ? (this.options.visualElement.renderState.vars[A] = T) : (f[A] = T);
      }
      this.options.layoutId &&
        (f.pointerEvents =
          h === this ? Mu(d == null ? void 0 : d.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((f) => {
        var d;
        return (d = f.currentAnimation) == null ? void 0 : d.stop();
      }),
        this.root.nodes.forEach(mv),
        this.root.sharedNodes.clear();
    }
  };
}
function kD(t) {
  t.updateLayout();
}
function HD(t) {
  var a;
  const n = ((a = t.resumeFrom) == null ? void 0 : a.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: l } = t.layout,
      { animationType: c } = t.options,
      f = n.source !== t.layout.source;
    c === "size"
      ? Hn((y) => {
          const v = f ? n.measuredBox[y] : n.layoutBox[y],
            g = tn(v);
          (v.min = s[y].min), (v.max = v.min + g);
        })
      : Z2(c, n.layoutBox, s) &&
        Hn((y) => {
          const v = f ? n.measuredBox[y] : n.layoutBox[y],
            g = tn(s[y]);
          (v.max = v.min + g),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[y].max = t.relativeTarget[y].min + g));
        });
    const d = Kr();
    fo(d, s, n.layoutBox);
    const x = Kr();
    f ? fo(x, t.applyTransform(l, !0), n.measuredBox) : fo(x, s, n.layoutBox);
    const h = !Y2(d);
    let m = !1;
    if (!t.resumeFrom) {
      const y = t.getClosestProjectingParent();
      if (y && !y.resumeFrom) {
        const { snapshot: v, layout: g } = y;
        if (v && g) {
          const b = Et();
          ho(b, n.layoutBox, v.layoutBox);
          const S = Et();
          ho(S, s, g.layoutBox),
            X2(b, S) || (m = !0),
            y.options.layoutRoot &&
              ((t.relativeTarget = S),
              (t.relativeTargetOrigin = b),
              (t.relativeParent = y));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: n,
      delta: x,
      layoutDelta: d,
      hasLayoutChanged: h,
      hasRelativeLayoutChanged: m,
    });
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options;
    s && s();
  }
  t.options.transition = void 0;
}
function VD(t) {
  t.parent &&
    (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty ||
      (t.isSharedProjectionDirty = !!(
        t.isProjectionDirty ||
        t.parent.isProjectionDirty ||
        t.parent.isSharedProjectionDirty
      )),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function qD(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function jD(t) {
  t.clearSnapshot();
}
function mv(t) {
  t.clearMeasurements();
}
function yv(t) {
  t.isLayoutDirty = !1;
}
function PD(t) {
  const { visualElement: n } = t.options;
  n && n.getProps().onBeforeLayoutMeasure && n.notify("BeforeLayoutMeasure"),
    t.resetTransform();
}
function vv(t) {
  t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0);
}
function YD(t) {
  t.resolveTargetDelta();
}
function XD(t) {
  t.calcProjection();
}
function GD(t) {
  t.resetSkewAndRotation();
}
function KD(t) {
  t.removeLeadSnapshot();
}
function gv(t, n, a) {
  (t.translate = dt(n.translate, 0, a)),
    (t.scale = dt(n.scale, 1, a)),
    (t.origin = n.origin),
    (t.originPoint = n.originPoint);
}
function Ev(t, n, a, s) {
  (t.min = dt(n.min, a.min, s)), (t.max = dt(n.max, a.max, s));
}
function ZD(t, n, a, s) {
  Ev(t.x, n.x, a.x, s), Ev(t.y, n.y, a.y, s);
}
function QD(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const $D = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  bv = (t) =>
    typeof navigator != "undefined" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(t),
  Av = bv("applewebkit/") && !bv("chrome/") ? Math.round : jn;
function Sv(t) {
  (t.min = Av(t.min)), (t.max = Av(t.max));
}
function WD(t) {
  Sv(t.x), Sv(t.y);
}
function Z2(t, n, a) {
  return (
    t === "position" || (t === "preserve-aspect" && !iD(pv(n), pv(a), 0.2))
  );
}
function JD(t) {
  var n;
  return t !== t.root && ((n = t.scroll) == null ? void 0 : n.wasRoot);
}
const ID = K2({
    attachResizeListener: (t, n) => bo(t, "resize", n),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Vf = { current: void 0 },
  Q2 = K2({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!Vf.current) {
        const t = new ID({});
        t.mount(window), t.setOptions({ layoutScroll: !0 }), (Vf.current = t);
      }
      return Vf.current;
    },
    resetTransform: (t, n) => {
      t.style.transform = n !== void 0 ? n : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  eB = {
    pan: { Feature: vD },
    drag: { Feature: yD, ProjectionNode: Q2, MeasureLayout: q2 },
  };
function Cv(t, n, a) {
  const { props: s } = t;
  t.animationState &&
    s.whileHover &&
    t.animationState.setActive("whileHover", a === "Start");
  const l = "onHover" + a,
    c = s[l];
  c && ut.postRender(() => c(n, _o(n)));
}
class tB extends Aa {
  mount() {
    const { current: n } = this.node;
    n &&
      (this.unmount = AS(
        n,
        (a, s) => (Cv(this.node, s, "Start"), (l) => Cv(this.node, l, "End")),
      ));
  }
  unmount() {}
}
class nB extends Aa {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let n = !1;
    try {
      n = this.node.current.matches(":focus-visible");
    } catch (a) {
      n = !0;
    }
    !n ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Co(
      bo(this.node.current, "focus", () => this.onFocus()),
      bo(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Dv(t, n, a) {
  const { props: s } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState &&
    s.whileTap &&
    t.animationState.setActive("whileTap", a === "Start");
  const l = "onTap" + (a === "End" ? "" : a),
    c = s[l];
  c && ut.postRender(() => c(n, _o(n)));
}
class iB extends Aa {
  mount() {
    const { current: n } = this.node;
    n &&
      (this.unmount = BS(
        n,
        (a, s) => (
          Dv(this.node, s, "Start"),
          (l, { success: c }) => Dv(this.node, l, c ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const vh = new WeakMap(),
  qf = new WeakMap(),
  aB = (t) => {
    const n = vh.get(t.target);
    n && n(t);
  },
  rB = (t) => {
    t.forEach(aB);
  };
function sB(a) {
  var s = a,
    { root: t } = s,
    n = ln(s, ["root"]);
  const l = t || document;
  qf.has(l) || qf.set(l, {});
  const c = qf.get(l),
    f = JSON.stringify(n);
  return (
    c[f] || (c[f] = new IntersectionObserver(rB, ue({ root: t }, n))), c[f]
  );
}
function oB(t, n, a) {
  const s = sB(n);
  return (
    vh.set(t, a),
    s.observe(t),
    () => {
      vh.delete(t), s.unobserve(t);
    }
  );
}
const lB = { some: 0, all: 1 };
class uB extends Aa {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: n = {} } = this.node.getProps(),
      { root: a, margin: s, amount: l = "some", once: c } = n,
      f = {
        root: a ? a.current : void 0,
        rootMargin: s,
        threshold: typeof l == "number" ? l : lB[l],
      },
      d = (x) => {
        const { isIntersecting: h } = x;
        if (
          this.isInView === h ||
          ((this.isInView = h), c && !h && this.hasEnteredView)
        )
          return;
        h && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", h);
        const { onViewportEnter: m, onViewportLeave: y } = this.node.getProps(),
          v = h ? m : y;
        v && v(x);
      };
    return oB(this.node.current, f, d);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver == "undefined") return;
    const { props: n, prevProps: a } = this.node;
    ["amount", "margin", "root"].some(cB(n, a)) && this.startObserver();
  }
  unmount() {}
}
function cB({ viewport: t = {} }, { viewport: n = {} } = {}) {
  return (a) => t[a] !== n[a];
}
const fB = {
    inView: { Feature: uB },
    tap: { Feature: iB },
    focus: { Feature: nB },
    hover: { Feature: tB },
  },
  hB = { layout: { ProjectionNode: Q2, MeasureLayout: q2 } },
  dB = ue(ue(ue(ue({}, WC), fB), eB), hB),
  N7 = dC(dB, BC);
function $2(t, n) {
  return function () {
    return t.apply(n, arguments);
  };
}
const { toString: pB } = Object.prototype,
  { getPrototypeOf: md } = Object,
  { iterator: rc, toStringTag: W2 } = Symbol,
  sc = ((t) => (n) => {
    const a = pB.call(n);
    return t[a] || (t[a] = a.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ii = (t) => ((t = t.toLowerCase()), (n) => sc(n) === t),
  oc = (t) => (n) => typeof n === t,
  { isArray: is } = Array,
  Jr = oc("undefined");
function To(t) {
  return (
    t !== null &&
    !Jr(t) &&
    t.constructor !== null &&
    !Jr(t.constructor) &&
    fn(t.constructor.isBuffer) &&
    t.constructor.isBuffer(t)
  );
}
const J2 = ii("ArrayBuffer");
function xB(t) {
  let n;
  return (
    typeof ArrayBuffer != "undefined" && ArrayBuffer.isView
      ? (n = ArrayBuffer.isView(t))
      : (n = t && t.buffer && J2(t.buffer)),
    n
  );
}
const mB = oc("string"),
  fn = oc("function"),
  I2 = oc("number"),
  Ro = (t) => t !== null && typeof t == "object",
  yB = (t) => t === !0 || t === !1,
  Fu = (t) => {
    if (sc(t) !== "object") return !1;
    const n = md(t);
    return (
      (n === null ||
        n === Object.prototype ||
        Object.getPrototypeOf(n) === null) &&
      !(W2 in t) &&
      !(rc in t)
    );
  },
  vB = (t) => {
    if (!Ro(t) || To(t)) return !1;
    try {
      return (
        Object.keys(t).length === 0 &&
        Object.getPrototypeOf(t) === Object.prototype
      );
    } catch (n) {
      return !1;
    }
  },
  gB = ii("Date"),
  EB = ii("File"),
  bB = ii("Blob"),
  AB = ii("FileList"),
  SB = (t) => Ro(t) && fn(t.pipe),
  CB = (t) => {
    let n;
    return (
      t &&
      ((typeof FormData == "function" && t instanceof FormData) ||
        (fn(t.append) &&
          ((n = sc(t)) === "formdata" ||
            (n === "object" &&
              fn(t.toString) &&
              t.toString() === "[object FormData]"))))
    );
  },
  DB = ii("URLSearchParams"),
  [BB, _B, TB, RB] = ["ReadableStream", "Request", "Response", "Headers"].map(
    ii,
  ),
  wB = (t) =>
    t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function wo(t, n, { allOwnKeys: a = !1 } = {}) {
  if (t === null || typeof t == "undefined") return;
  let s, l;
  if ((typeof t != "object" && (t = [t]), is(t)))
    for (s = 0, l = t.length; s < l; s++) n.call(null, t[s], s, t);
  else {
    if (To(t)) return;
    const c = a ? Object.getOwnPropertyNames(t) : Object.keys(t),
      f = c.length;
    let d;
    for (s = 0; s < f; s++) (d = c[s]), n.call(null, t[d], d, t);
  }
}
function e4(t, n) {
  if (To(t)) return null;
  n = n.toLowerCase();
  const a = Object.keys(t);
  let s = a.length,
    l;
  for (; s-- > 0; ) if (((l = a[s]), n === l.toLowerCase())) return l;
  return null;
}
const tr =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
        ? self
        : typeof window != "undefined"
          ? window
          : global,
  t4 = (t) => !Jr(t) && t !== tr;
function gh() {
  const { caseless: t, skipUndefined: n } = (t4(this) && this) || {},
    a = {},
    s = (l, c) => {
      const f = (t && e4(a, c)) || c;
      Fu(a[f]) && Fu(l)
        ? (a[f] = gh(a[f], l))
        : Fu(l)
          ? (a[f] = gh({}, l))
          : is(l)
            ? (a[f] = l.slice())
            : (!n || !Jr(l)) && (a[f] = l);
    };
  for (let l = 0, c = arguments.length; l < c; l++)
    arguments[l] && wo(arguments[l], s);
  return a;
}
const MB = (t, n, a, { allOwnKeys: s } = {}) => (
    wo(
      n,
      (l, c) => {
        a && fn(l) ? (t[c] = $2(l, a)) : (t[c] = l);
      },
      { allOwnKeys: s },
    ),
    t
  ),
  OB = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
  FB = (t, n, a, s) => {
    (t.prototype = Object.create(n.prototype, s)),
      (t.prototype.constructor = t),
      Object.defineProperty(t, "super", { value: n.prototype }),
      a && Object.assign(t.prototype, a);
  },
  zB = (t, n, a, s) => {
    let l, c, f;
    const d = {};
    if (((n = n || {}), t == null)) return n;
    do {
      for (l = Object.getOwnPropertyNames(t), c = l.length; c-- > 0; )
        (f = l[c]), (!s || s(f, t, n)) && !d[f] && ((n[f] = t[f]), (d[f] = !0));
      t = a !== !1 && md(t);
    } while (t && (!a || a(t, n)) && t !== Object.prototype);
    return n;
  },
  LB = (t, n, a) => {
    (t = String(t)),
      (a === void 0 || a > t.length) && (a = t.length),
      (a -= n.length);
    const s = t.indexOf(n, a);
    return s !== -1 && s === a;
  },
  NB = (t) => {
    if (!t) return null;
    if (is(t)) return t;
    let n = t.length;
    if (!I2(n)) return null;
    const a = new Array(n);
    for (; n-- > 0; ) a[n] = t[n];
    return a;
  },
  UB = (
    (t) => (n) =>
      t && n instanceof t
  )(typeof Uint8Array != "undefined" && md(Uint8Array)),
  kB = (t, n) => {
    const s = (t && t[rc]).call(t);
    let l;
    for (; (l = s.next()) && !l.done; ) {
      const c = l.value;
      n.call(t, c[0], c[1]);
    }
  },
  HB = (t, n) => {
    let a;
    const s = [];
    for (; (a = t.exec(n)) !== null; ) s.push(a);
    return s;
  },
  VB = ii("HTMLFormElement"),
  qB = (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (a, s, l) {
      return s.toUpperCase() + l;
    }),
  Bv = (
    ({ hasOwnProperty: t }) =>
    (n, a) =>
      t.call(n, a)
  )(Object.prototype),
  jB = ii("RegExp"),
  n4 = (t, n) => {
    const a = Object.getOwnPropertyDescriptors(t),
      s = {};
    wo(a, (l, c) => {
      let f;
      (f = n(l, c, t)) !== !1 && (s[c] = f || l);
    }),
      Object.defineProperties(t, s);
  },
  PB = (t) => {
    n4(t, (n, a) => {
      if (fn(t) && ["arguments", "caller", "callee"].indexOf(a) !== -1)
        return !1;
      const s = t[a];
      if (fn(s)) {
        if (((n.enumerable = !1), "writable" in n)) {
          n.writable = !1;
          return;
        }
        n.set ||
          (n.set = () => {
            throw Error("Can not rewrite read-only method '" + a + "'");
          });
      }
    });
  },
  YB = (t, n) => {
    const a = {},
      s = (l) => {
        l.forEach((c) => {
          a[c] = !0;
        });
      };
    return is(t) ? s(t) : s(String(t).split(n)), a;
  },
  XB = () => {},
  GB = (t, n) => (t != null && Number.isFinite((t = +t)) ? t : n);
function KB(t) {
  return !!(t && fn(t.append) && t[W2] === "FormData" && t[rc]);
}
const ZB = (t) => {
    const n = new Array(10),
      a = (s, l) => {
        if (Ro(s)) {
          if (n.indexOf(s) >= 0) return;
          if (To(s)) return s;
          if (!("toJSON" in s)) {
            n[l] = s;
            const c = is(s) ? [] : {};
            return (
              wo(s, (f, d) => {
                const x = a(f, l + 1);
                !Jr(x) && (c[d] = x);
              }),
              (n[l] = void 0),
              c
            );
          }
        }
        return s;
      };
    return a(t, 0);
  },
  QB = ii("AsyncFunction"),
  $B = (t) => t && (Ro(t) || fn(t)) && fn(t.then) && fn(t.catch),
  i4 = ((t, n) =>
    t
      ? setImmediate
      : n
        ? ((a, s) => (
            tr.addEventListener(
              "message",
              ({ source: l, data: c }) => {
                l === tr && c === a && s.length && s.shift()();
              },
              !1,
            ),
            (l) => {
              s.push(l), tr.postMessage(a, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (a) => setTimeout(a))(
    typeof setImmediate == "function",
    fn(tr.postMessage),
  ),
  WB =
    typeof queueMicrotask != "undefined"
      ? queueMicrotask.bind(tr)
      : (typeof process != "undefined" && process.nextTick) || i4,
  JB = (t) => t != null && fn(t[rc]),
  W = {
    isArray: is,
    isArrayBuffer: J2,
    isBuffer: To,
    isFormData: CB,
    isArrayBufferView: xB,
    isString: mB,
    isNumber: I2,
    isBoolean: yB,
    isObject: Ro,
    isPlainObject: Fu,
    isEmptyObject: vB,
    isReadableStream: BB,
    isRequest: _B,
    isResponse: TB,
    isHeaders: RB,
    isUndefined: Jr,
    isDate: gB,
    isFile: EB,
    isBlob: bB,
    isRegExp: jB,
    isFunction: fn,
    isStream: SB,
    isURLSearchParams: DB,
    isTypedArray: UB,
    isFileList: AB,
    forEach: wo,
    merge: gh,
    extend: MB,
    trim: wB,
    stripBOM: OB,
    inherits: FB,
    toFlatObject: zB,
    kindOf: sc,
    kindOfTest: ii,
    endsWith: LB,
    toArray: NB,
    forEachEntry: kB,
    matchAll: HB,
    isHTMLForm: VB,
    hasOwnProperty: Bv,
    hasOwnProp: Bv,
    reduceDescriptors: n4,
    freezeMethods: PB,
    toObjectSet: YB,
    toCamelCase: qB,
    noop: XB,
    toFiniteNumber: GB,
    findKey: e4,
    global: tr,
    isContextDefined: t4,
    isSpecCompliantForm: KB,
    toJSONObject: ZB,
    isAsyncFn: QB,
    isThenable: $B,
    setImmediate: i4,
    asap: WB,
    isIterable: JB,
  };
function we(t, n, a, s, l) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = t),
    (this.name = "AxiosError"),
    n && (this.code = n),
    a && (this.config = a),
    s && (this.request = s),
    l && ((this.response = l), (this.status = l.status ? l.status : null));
}
W.inherits(we, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: W.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const a4 = we.prototype,
  r4 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((t) => {
  r4[t] = { value: t };
});
Object.defineProperties(we, r4);
Object.defineProperty(a4, "isAxiosError", { value: !0 });
we.from = (t, n, a, s, l, c) => {
  const f = Object.create(a4);
  W.toFlatObject(
    t,
    f,
    function (m) {
      return m !== Error.prototype;
    },
    (h) => h !== "isAxiosError",
  );
  const d = t && t.message ? t.message : "Error",
    x = n == null && t ? t.code : n;
  return (
    we.call(f, d, x, a, s, l),
    t &&
      f.cause == null &&
      Object.defineProperty(f, "cause", { value: t, configurable: !0 }),
    (f.name = (t && t.name) || "Error"),
    c && Object.assign(f, c),
    f
  );
};
const IB = null;
function Eh(t) {
  return W.isPlainObject(t) || W.isArray(t);
}
function s4(t) {
  return W.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function _v(t, n, a) {
  return t
    ? t
        .concat(n)
        .map(function (l, c) {
          return (l = s4(l)), !a && c ? "[" + l + "]" : l;
        })
        .join(a ? "." : "")
    : n;
}
function e_(t) {
  return W.isArray(t) && !t.some(Eh);
}
const t_ = W.toFlatObject(W, {}, null, function (n) {
  return /^is[A-Z]/.test(n);
});
function lc(t, n, a) {
  if (!W.isObject(t)) throw new TypeError("target must be an object");
  (n = n || new FormData()),
    (a = W.toFlatObject(
      a,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (S, A) {
        return !W.isUndefined(A[S]);
      },
    ));
  const s = a.metaTokens,
    l = a.visitor || m,
    c = a.dots,
    f = a.indexes,
    x =
      (a.Blob || (typeof Blob != "undefined" && Blob)) &&
      W.isSpecCompliantForm(n);
  if (!W.isFunction(l)) throw new TypeError("visitor must be a function");
  function h(b) {
    if (b === null) return "";
    if (W.isDate(b)) return b.toISOString();
    if (W.isBoolean(b)) return b.toString();
    if (!x && W.isBlob(b))
      throw new we("Blob is not supported. Use a Buffer instead.");
    return W.isArrayBuffer(b) || W.isTypedArray(b)
      ? x && typeof Blob == "function"
        ? new Blob([b])
        : Buffer.from(b)
      : b;
  }
  function m(b, S, A) {
    let R = b;
    if (b && !A && typeof b == "object") {
      if (W.endsWith(S, "{}"))
        (S = s ? S : S.slice(0, -2)), (b = JSON.stringify(b));
      else if (
        (W.isArray(b) && e_(b)) ||
        ((W.isFileList(b) || W.endsWith(S, "[]")) && (R = W.toArray(b)))
      )
        return (
          (S = s4(S)),
          R.forEach(function (D, T) {
            !(W.isUndefined(D) || D === null) &&
              n.append(
                f === !0 ? _v([S], T, c) : f === null ? S : S + "[]",
                h(D),
              );
          }),
          !1
        );
    }
    return Eh(b) ? !0 : (n.append(_v(A, S, c), h(b)), !1);
  }
  const y = [],
    v = Object.assign(t_, {
      defaultVisitor: m,
      convertValue: h,
      isVisitable: Eh,
    });
  function g(b, S) {
    if (!W.isUndefined(b)) {
      if (y.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      y.push(b),
        W.forEach(b, function (R, C) {
          (!(W.isUndefined(R) || R === null) &&
            l.call(n, R, W.isString(C) ? C.trim() : C, S, v)) === !0 &&
            g(R, S ? S.concat(C) : [C]);
        }),
        y.pop();
    }
  }
  if (!W.isObject(t)) throw new TypeError("data must be an object");
  return g(t), n;
}
function Tv(t) {
  const n = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (s) {
    return n[s];
  });
}
function yd(t, n) {
  (this._pairs = []), t && lc(t, this, n);
}
const o4 = yd.prototype;
o4.append = function (n, a) {
  this._pairs.push([n, a]);
};
o4.toString = function (n) {
  const a = n
    ? function (s) {
        return n.call(this, s, Tv);
      }
    : Tv;
  return this._pairs
    .map(function (l) {
      return a(l[0]) + "=" + a(l[1]);
    }, "")
    .join("&");
};
function n_(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function l4(t, n, a) {
  if (!n) return t;
  const s = (a && a.encode) || n_;
  W.isFunction(a) && (a = { serialize: a });
  const l = a && a.serialize;
  let c;
  if (
    (l
      ? (c = l(n, a))
      : (c = W.isURLSearchParams(n) ? n.toString() : new yd(n, a).toString(s)),
    c)
  ) {
    const f = t.indexOf("#");
    f !== -1 && (t = t.slice(0, f)),
      (t += (t.indexOf("?") === -1 ? "?" : "&") + c);
  }
  return t;
}
class Rv {
  constructor() {
    this.handlers = [];
  }
  use(n, a, s) {
    return (
      this.handlers.push({
        fulfilled: n,
        rejected: a,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(n) {
    this.handlers[n] && (this.handlers[n] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(n) {
    W.forEach(this.handlers, function (s) {
      s !== null && n(s);
    });
  }
}
const u4 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  i_ = typeof URLSearchParams != "undefined" ? URLSearchParams : yd,
  a_ = typeof FormData != "undefined" ? FormData : null,
  r_ = typeof Blob != "undefined" ? Blob : null,
  s_ = {
    isBrowser: !0,
    classes: { URLSearchParams: i_, FormData: a_, Blob: r_ },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  vd = typeof window != "undefined" && typeof document != "undefined",
  bh = (typeof navigator == "object" && navigator) || void 0,
  o_ =
    vd &&
    (!bh || ["ReactNative", "NativeScript", "NS"].indexOf(bh.product) < 0),
  l_ =
    typeof WorkerGlobalScope != "undefined" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  u_ = (vd && window.location.href) || "http://localhost",
  c_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: vd,
        hasStandardBrowserEnv: o_,
        hasStandardBrowserWebWorkerEnv: l_,
        navigator: bh,
        origin: u_,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Qt = ue(ue({}, c_), s_);
function f_(t, n) {
  return lc(
    t,
    new Qt.classes.URLSearchParams(),
    ue(
      {
        visitor: function (a, s, l, c) {
          return Qt.isNode && W.isBuffer(a)
            ? (this.append(s, a.toString("base64")), !1)
            : c.defaultVisitor.apply(this, arguments);
        },
      },
      n,
    ),
  );
}
function h_(t) {
  return W.matchAll(/\w+|\[(\w*)]/g, t).map((n) =>
    n[0] === "[]" ? "" : n[1] || n[0],
  );
}
function d_(t) {
  const n = {},
    a = Object.keys(t);
  let s;
  const l = a.length;
  let c;
  for (s = 0; s < l; s++) (c = a[s]), (n[c] = t[c]);
  return n;
}
function c4(t) {
  function n(a, s, l, c) {
    let f = a[c++];
    if (f === "__proto__") return !0;
    const d = Number.isFinite(+f),
      x = c >= a.length;
    return (
      (f = !f && W.isArray(l) ? l.length : f),
      x
        ? (W.hasOwnProp(l, f) ? (l[f] = [l[f], s]) : (l[f] = s), !d)
        : ((!l[f] || !W.isObject(l[f])) && (l[f] = []),
          n(a, s, l[f], c) && W.isArray(l[f]) && (l[f] = d_(l[f])),
          !d)
    );
  }
  if (W.isFormData(t) && W.isFunction(t.entries)) {
    const a = {};
    return (
      W.forEachEntry(t, (s, l) => {
        n(h_(s), l, a, 0);
      }),
      a
    );
  }
  return null;
}
function p_(t, n, a) {
  if (W.isString(t))
    try {
      return (n || JSON.parse)(t), W.trim(t);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (a || JSON.stringify)(t);
}
const Mo = {
  transitional: u4,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (n, a) {
      const s = a.getContentType() || "",
        l = s.indexOf("application/json") > -1,
        c = W.isObject(n);
      if ((c && W.isHTMLForm(n) && (n = new FormData(n)), W.isFormData(n)))
        return l ? JSON.stringify(c4(n)) : n;
      if (
        W.isArrayBuffer(n) ||
        W.isBuffer(n) ||
        W.isStream(n) ||
        W.isFile(n) ||
        W.isBlob(n) ||
        W.isReadableStream(n)
      )
        return n;
      if (W.isArrayBufferView(n)) return n.buffer;
      if (W.isURLSearchParams(n))
        return (
          a.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          n.toString()
        );
      let d;
      if (c) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return f_(n, this.formSerializer).toString();
        if ((d = W.isFileList(n)) || s.indexOf("multipart/form-data") > -1) {
          const x = this.env && this.env.FormData;
          return lc(
            d ? { "files[]": n } : n,
            x && new x(),
            this.formSerializer,
          );
        }
      }
      return c || l ? (a.setContentType("application/json", !1), p_(n)) : n;
    },
  ],
  transformResponse: [
    function (n) {
      const a = this.transitional || Mo.transitional,
        s = a && a.forcedJSONParsing,
        l = this.responseType === "json";
      if (W.isResponse(n) || W.isReadableStream(n)) return n;
      if (n && W.isString(n) && ((s && !this.responseType) || l)) {
        const f = !(a && a.silentJSONParsing) && l;
        try {
          return JSON.parse(n, this.parseReviver);
        } catch (d) {
          if (f)
            throw d.name === "SyntaxError"
              ? we.from(d, we.ERR_BAD_RESPONSE, this, null, this.response)
              : d;
        }
      }
      return n;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Qt.classes.FormData, Blob: Qt.classes.Blob },
  validateStatus: function (n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
W.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Mo.headers[t] = {};
});
const x_ = W.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  m_ = (t) => {
    const n = {};
    let a, s, l;
    return (
      t &&
        t
          .split(
            `
`,
          )
          .forEach(function (f) {
            (l = f.indexOf(":")),
              (a = f.substring(0, l).trim().toLowerCase()),
              (s = f.substring(l + 1).trim()),
              !(!a || (n[a] && x_[a])) &&
                (a === "set-cookie"
                  ? n[a]
                    ? n[a].push(s)
                    : (n[a] = [s])
                  : (n[a] = n[a] ? n[a] + ", " + s : s));
          }),
      n
    );
  },
  wv = Symbol("internals");
function io(t) {
  return t && String(t).trim().toLowerCase();
}
function zu(t) {
  return t === !1 || t == null ? t : W.isArray(t) ? t.map(zu) : String(t);
}
function y_(t) {
  const n = Object.create(null),
    a = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = a.exec(t)); ) n[s[1]] = s[2];
  return n;
}
const v_ = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function jf(t, n, a, s, l) {
  if (W.isFunction(s)) return s.call(this, n, a);
  if ((l && (n = a), !!W.isString(n))) {
    if (W.isString(s)) return n.indexOf(s) !== -1;
    if (W.isRegExp(s)) return s.test(n);
  }
}
function g_(t) {
  return t
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (n, a, s) => a.toUpperCase() + s);
}
function E_(t, n) {
  const a = W.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(t, s + a, {
      value: function (l, c, f) {
        return this[s].call(this, n, l, c, f);
      },
      configurable: !0,
    });
  });
}
let hn = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, a, s) {
    const l = this;
    function c(d, x, h) {
      const m = io(x);
      if (!m) throw new Error("header name must be a non-empty string");
      const y = W.findKey(l, m);
      (!y || l[y] === void 0 || h === !0 || (h === void 0 && l[y] !== !1)) &&
        (l[y || x] = zu(d));
    }
    const f = (d, x) => W.forEach(d, (h, m) => c(h, m, x));
    if (W.isPlainObject(n) || n instanceof this.constructor) f(n, a);
    else if (W.isString(n) && (n = n.trim()) && !v_(n)) f(m_(n), a);
    else if (W.isObject(n) && W.isIterable(n)) {
      let d = {},
        x,
        h;
      for (const m of n) {
        if (!W.isArray(m))
          throw TypeError("Object iterator must return a key-value pair");
        d[(h = m[0])] = (x = d[h])
          ? W.isArray(x)
            ? [...x, m[1]]
            : [x, m[1]]
          : m[1];
      }
      f(d, a);
    } else n != null && c(a, n, s);
    return this;
  }
  get(n, a) {
    if (((n = io(n)), n)) {
      const s = W.findKey(this, n);
      if (s) {
        const l = this[s];
        if (!a) return l;
        if (a === !0) return y_(l);
        if (W.isFunction(a)) return a.call(this, l, s);
        if (W.isRegExp(a)) return a.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, a) {
    if (((n = io(n)), n)) {
      const s = W.findKey(this, n);
      return !!(s && this[s] !== void 0 && (!a || jf(this, this[s], s, a)));
    }
    return !1;
  }
  delete(n, a) {
    const s = this;
    let l = !1;
    function c(f) {
      if (((f = io(f)), f)) {
        const d = W.findKey(s, f);
        d && (!a || jf(s, s[d], d, a)) && (delete s[d], (l = !0));
      }
    }
    return W.isArray(n) ? n.forEach(c) : c(n), l;
  }
  clear(n) {
    const a = Object.keys(this);
    let s = a.length,
      l = !1;
    for (; s--; ) {
      const c = a[s];
      (!n || jf(this, this[c], c, n, !0)) && (delete this[c], (l = !0));
    }
    return l;
  }
  normalize(n) {
    const a = this,
      s = {};
    return (
      W.forEach(this, (l, c) => {
        const f = W.findKey(s, c);
        if (f) {
          (a[f] = zu(l)), delete a[c];
          return;
        }
        const d = n ? g_(c) : String(c).trim();
        d !== c && delete a[c], (a[d] = zu(l)), (s[d] = !0);
      }),
      this
    );
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const a = Object.create(null);
    return (
      W.forEach(this, (s, l) => {
        s != null && s !== !1 && (a[l] = n && W.isArray(s) ? s.join(", ") : s);
      }),
      a
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([n, a]) => n + ": " + a).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(n) {
    return n instanceof this ? n : new this(n);
  }
  static concat(n, ...a) {
    const s = new this(n);
    return a.forEach((l) => s.set(l)), s;
  }
  static accessor(n) {
    const s = (this[wv] = this[wv] = { accessors: {} }).accessors,
      l = this.prototype;
    function c(f) {
      const d = io(f);
      s[d] || (E_(l, f), (s[d] = !0));
    }
    return W.isArray(n) ? n.forEach(c) : c(n), this;
  }
};
hn.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
W.reduceDescriptors(hn.prototype, ({ value: t }, n) => {
  let a = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => t,
    set(s) {
      this[a] = s;
    },
  };
});
W.freezeMethods(hn);
function Pf(t, n) {
  const a = this || Mo,
    s = n || a,
    l = hn.from(s.headers);
  let c = s.data;
  return (
    W.forEach(t, function (d) {
      c = d.call(a, c, l.normalize(), n ? n.status : void 0);
    }),
    l.normalize(),
    c
  );
}
function f4(t) {
  return !!(t && t.__CANCEL__);
}
function as(t, n, a) {
  we.call(this, t == null ? "canceled" : t, we.ERR_CANCELED, n, a),
    (this.name = "CanceledError");
}
W.inherits(as, we, { __CANCEL__: !0 });
function h4(t, n, a) {
  const s = a.config.validateStatus;
  !a.status || !s || s(a.status)
    ? t(a)
    : n(
        new we(
          "Request failed with status code " + a.status,
          [we.ERR_BAD_REQUEST, we.ERR_BAD_RESPONSE][
            Math.floor(a.status / 100) - 4
          ],
          a.config,
          a.request,
          a,
        ),
      );
}
function b_(t) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return (n && n[1]) || "";
}
function A_(t, n) {
  t = t || 10;
  const a = new Array(t),
    s = new Array(t);
  let l = 0,
    c = 0,
    f;
  return (
    (n = n !== void 0 ? n : 1e3),
    function (x) {
      const h = Date.now(),
        m = s[c];
      f || (f = h), (a[l] = x), (s[l] = h);
      let y = c,
        v = 0;
      for (; y !== l; ) (v += a[y++]), (y = y % t);
      if (((l = (l + 1) % t), l === c && (c = (c + 1) % t), h - f < n)) return;
      const g = m && h - m;
      return g ? Math.round((v * 1e3) / g) : void 0;
    }
  );
}
function S_(t, n) {
  let a = 0,
    s = 1e3 / n,
    l,
    c;
  const f = (h, m = Date.now()) => {
    (a = m), (l = null), c && (clearTimeout(c), (c = null)), t(...h);
  };
  return [
    (...h) => {
      const m = Date.now(),
        y = m - a;
      y >= s
        ? f(h, m)
        : ((l = h),
          c ||
            (c = setTimeout(() => {
              (c = null), f(l);
            }, s - y)));
    },
    () => l && f(l),
  ];
}
const Qu = (t, n, a = 3) => {
    let s = 0;
    const l = A_(50, 250);
    return S_((c) => {
      const f = c.loaded,
        d = c.lengthComputable ? c.total : void 0,
        x = f - s,
        h = l(x),
        m = f <= d;
      s = f;
      const y = {
        loaded: f,
        total: d,
        progress: d ? f / d : void 0,
        bytes: x,
        rate: h || void 0,
        estimated: h && d && m ? (d - f) / h : void 0,
        event: c,
        lengthComputable: d != null,
        [n ? "download" : "upload"]: !0,
      };
      t(y);
    }, a);
  },
  Mv = (t, n) => {
    const a = t != null;
    return [(s) => n[0]({ lengthComputable: a, total: t, loaded: s }), n[1]];
  },
  Ov =
    (t) =>
    (...n) =>
      W.asap(() => t(...n)),
  C_ = Qt.hasStandardBrowserEnv
    ? ((t, n) => (a) => (
        (a = new URL(a, Qt.origin)),
        t.protocol === a.protocol &&
          t.host === a.host &&
          (n || t.port === a.port)
      ))(
        new URL(Qt.origin),
        Qt.navigator && /(msie|trident)/i.test(Qt.navigator.userAgent),
      )
    : () => !0,
  D_ = Qt.hasStandardBrowserEnv
    ? {
        write(t, n, a, s, l, c, f) {
          if (typeof document == "undefined") return;
          const d = [`${t}=${encodeURIComponent(n)}`];
          W.isNumber(a) && d.push(`expires=${new Date(a).toUTCString()}`),
            W.isString(s) && d.push(`path=${s}`),
            W.isString(l) && d.push(`domain=${l}`),
            c === !0 && d.push("secure"),
            W.isString(f) && d.push(`SameSite=${f}`),
            (document.cookie = d.join("; "));
        },
        read(t) {
          if (typeof document == "undefined") return null;
          const n = document.cookie.match(
            new RegExp("(?:^|; )" + t + "=([^;]*)"),
          );
          return n ? decodeURIComponent(n[1]) : null;
        },
        remove(t) {
          this.write(t, "", Date.now() - 864e5, "/");
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function B_(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function __(t, n) {
  return n ? t.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : t;
}
function d4(t, n, a) {
  let s = !B_(n);
  return t && (s || a == !1) ? __(t, n) : n;
}
const Fv = (t) => (t instanceof hn ? ue({}, t) : t);
function sr(t, n) {
  n = n || {};
  const a = {};
  function s(h, m, y, v) {
    return W.isPlainObject(h) && W.isPlainObject(m)
      ? W.merge.call({ caseless: v }, h, m)
      : W.isPlainObject(m)
        ? W.merge({}, m)
        : W.isArray(m)
          ? m.slice()
          : m;
  }
  function l(h, m, y, v) {
    if (W.isUndefined(m)) {
      if (!W.isUndefined(h)) return s(void 0, h, y, v);
    } else return s(h, m, y, v);
  }
  function c(h, m) {
    if (!W.isUndefined(m)) return s(void 0, m);
  }
  function f(h, m) {
    if (W.isUndefined(m)) {
      if (!W.isUndefined(h)) return s(void 0, h);
    } else return s(void 0, m);
  }
  function d(h, m, y) {
    if (y in n) return s(h, m);
    if (y in t) return s(void 0, h);
  }
  const x = {
    url: c,
    method: c,
    data: c,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    withXSRFToken: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: d,
    headers: (h, m, y) => l(Fv(h), Fv(m), y, !0),
  };
  return (
    W.forEach(Object.keys(ue(ue({}, t), n)), function (m) {
      const y = x[m] || l,
        v = y(t[m], n[m], m);
      (W.isUndefined(v) && y !== d) || (a[m] = v);
    }),
    a
  );
}
const p4 = (t) => {
    const n = sr({}, t);
    let {
      data: a,
      withXSRFToken: s,
      xsrfHeaderName: l,
      xsrfCookieName: c,
      headers: f,
      auth: d,
    } = n;
    if (
      ((n.headers = f = hn.from(f)),
      (n.url = l4(
        d4(n.baseURL, n.url, n.allowAbsoluteUrls),
        t.params,
        t.paramsSerializer,
      )),
      d &&
        f.set(
          "Authorization",
          "Basic " +
            btoa(
              (d.username || "") +
                ":" +
                (d.password ? unescape(encodeURIComponent(d.password)) : ""),
            ),
        ),
      W.isFormData(a))
    ) {
      if (Qt.hasStandardBrowserEnv || Qt.hasStandardBrowserWebWorkerEnv)
        f.setContentType(void 0);
      else if (W.isFunction(a.getHeaders)) {
        const x = a.getHeaders(),
          h = ["content-type", "content-length"];
        Object.entries(x).forEach(([m, y]) => {
          h.includes(m.toLowerCase()) && f.set(m, y);
        });
      }
    }
    if (
      Qt.hasStandardBrowserEnv &&
      (s && W.isFunction(s) && (s = s(n)), s || (s !== !1 && C_(n.url)))
    ) {
      const x = l && c && D_.read(c);
      x && f.set(l, x);
    }
    return n;
  },
  T_ = typeof XMLHttpRequest != "undefined",
  R_ =
    T_ &&
    function (t) {
      return new Promise(function (a, s) {
        const l = p4(t);
        let c = l.data;
        const f = hn.from(l.headers).normalize();
        let { responseType: d, onUploadProgress: x, onDownloadProgress: h } = l,
          m,
          y,
          v,
          g,
          b;
        function S() {
          g && g(),
            b && b(),
            l.cancelToken && l.cancelToken.unsubscribe(m),
            l.signal && l.signal.removeEventListener("abort", m);
        }
        let A = new XMLHttpRequest();
        A.open(l.method.toUpperCase(), l.url, !0), (A.timeout = l.timeout);
        function R() {
          if (!A) return;
          const D = hn.from(
              "getAllResponseHeaders" in A && A.getAllResponseHeaders(),
            ),
            w = {
              data:
                !d || d === "text" || d === "json"
                  ? A.responseText
                  : A.response,
              status: A.status,
              statusText: A.statusText,
              headers: D,
              config: t,
              request: A,
            };
          h4(
            function (_) {
              a(_), S();
            },
            function (_) {
              s(_), S();
            },
            w,
          ),
            (A = null);
        }
        "onloadend" in A
          ? (A.onloadend = R)
          : (A.onreadystatechange = function () {
              !A ||
                A.readyState !== 4 ||
                (A.status === 0 &&
                  !(A.responseURL && A.responseURL.indexOf("file:") === 0)) ||
                setTimeout(R);
            }),
          (A.onabort = function () {
            A &&
              (s(new we("Request aborted", we.ECONNABORTED, t, A)), (A = null));
          }),
          (A.onerror = function (T) {
            const w = T && T.message ? T.message : "Network Error",
              z = new we(w, we.ERR_NETWORK, t, A);
            (z.event = T || null), s(z), (A = null);
          }),
          (A.ontimeout = function () {
            let T = l.timeout
              ? "timeout of " + l.timeout + "ms exceeded"
              : "timeout exceeded";
            const w = l.transitional || u4;
            l.timeoutErrorMessage && (T = l.timeoutErrorMessage),
              s(
                new we(
                  T,
                  w.clarifyTimeoutError ? we.ETIMEDOUT : we.ECONNABORTED,
                  t,
                  A,
                ),
              ),
              (A = null);
          }),
          c === void 0 && f.setContentType(null),
          "setRequestHeader" in A &&
            W.forEach(f.toJSON(), function (T, w) {
              A.setRequestHeader(w, T);
            }),
          W.isUndefined(l.withCredentials) ||
            (A.withCredentials = !!l.withCredentials),
          d && d !== "json" && (A.responseType = l.responseType),
          h && (([v, b] = Qu(h, !0)), A.addEventListener("progress", v)),
          x &&
            A.upload &&
            (([y, g] = Qu(x)),
            A.upload.addEventListener("progress", y),
            A.upload.addEventListener("loadend", g)),
          (l.cancelToken || l.signal) &&
            ((m = (D) => {
              A &&
                (s(!D || D.type ? new as(null, t, A) : D),
                A.abort(),
                (A = null));
            }),
            l.cancelToken && l.cancelToken.subscribe(m),
            l.signal &&
              (l.signal.aborted ? m() : l.signal.addEventListener("abort", m)));
        const C = b_(l.url);
        if (C && Qt.protocols.indexOf(C) === -1) {
          s(new we("Unsupported protocol " + C + ":", we.ERR_BAD_REQUEST, t));
          return;
        }
        A.send(c || null);
      });
    },
  w_ = (t, n) => {
    const { length: a } = (t = t ? t.filter(Boolean) : []);
    if (n || a) {
      let s = new AbortController(),
        l;
      const c = function (h) {
        if (!l) {
          (l = !0), d();
          const m = h instanceof Error ? h : this.reason;
          s.abort(
            m instanceof we ? m : new as(m instanceof Error ? m.message : m),
          );
        }
      };
      let f =
        n &&
        setTimeout(() => {
          (f = null), c(new we(`timeout ${n} of ms exceeded`, we.ETIMEDOUT));
        }, n);
      const d = () => {
        t &&
          (f && clearTimeout(f),
          (f = null),
          t.forEach((h) => {
            h.unsubscribe
              ? h.unsubscribe(c)
              : h.removeEventListener("abort", c);
          }),
          (t = null));
      };
      t.forEach((h) => h.addEventListener("abort", c));
      const { signal: x } = s;
      return (x.unsubscribe = () => W.asap(d)), x;
    }
  },
  M_ = function* (t, n) {
    let a = t.byteLength;
    if (a < n) {
      yield t;
      return;
    }
    let s = 0,
      l;
    for (; s < a; ) (l = s + n), yield t.slice(s, l), (s = l);
  },
  O_ = function (t, n) {
    return xf(this, null, function* () {
      try {
        for (
          var a = $x(F_(t)), s, l, c;
          (s = !(l = yield new Ka(a.next())).done);
          s = !1
        ) {
          const f = l.value;
          yield* mf(M_(f, n));
        }
      } catch (l) {
        c = [l];
      } finally {
        try {
          s && (l = a.return) && (yield new Ka(l.call(a)));
        } finally {
          if (c) throw c[0];
        }
      }
    });
  },
  F_ = function (t) {
    return xf(this, null, function* () {
      if (t[Symbol.asyncIterator]) {
        yield* mf(t);
        return;
      }
      const n = t.getReader();
      try {
        for (;;) {
          const { done: a, value: s } = yield new Ka(n.read());
          if (a) break;
          yield s;
        }
      } finally {
        yield new Ka(n.cancel());
      }
    });
  },
  zv = (t, n, a, s) => {
    const l = O_(t, n);
    let c = 0,
      f,
      d = (x) => {
        f || ((f = !0), s && s(x));
      };
    return new ReadableStream(
      {
        async pull(x) {
          try {
            const { done: h, value: m } = await l.next();
            if (h) {
              d(), x.close();
              return;
            }
            let y = m.byteLength;
            if (a) {
              let v = (c += y);
              a(v);
            }
            x.enqueue(new Uint8Array(m));
          } catch (h) {
            throw (d(h), h);
          }
        },
        cancel(x) {
          return d(x), l.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  Lv = 64 * 1024,
  { isFunction: Pl } = W,
  z_ = (({ Request: t, Response: n }) => ({ Request: t, Response: n }))(
    W.global,
  ),
  { ReadableStream: Nv, TextEncoder: Uv } = W.global,
  kv = (t, ...n) => {
    try {
      return !!t(...n);
    } catch (a) {
      return !1;
    }
  },
  L_ = (t) => {
    t = W.merge.call({ skipUndefined: !0 }, z_, t);
    const { fetch: n, Request: a, Response: s } = t,
      l = n ? Pl(n) : typeof fetch == "function",
      c = Pl(a),
      f = Pl(s);
    if (!l) return !1;
    const d = l && Pl(Nv),
      x =
        l &&
        (typeof Uv == "function"
          ? (
              (b) => (S) =>
                b.encode(S)
            )(new Uv())
          : async (b) => new Uint8Array(await new a(b).arrayBuffer())),
      h =
        c &&
        d &&
        kv(() => {
          let b = !1;
          const S = new a(Qt.origin, {
            body: new Nv(),
            method: "POST",
            get duplex() {
              return (b = !0), "half";
            },
          }).headers.has("Content-Type");
          return b && !S;
        }),
      m = f && d && kv(() => W.isReadableStream(new s("").body)),
      y = { stream: m && ((b) => b.body) };
    l &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((b) => {
        !y[b] &&
          (y[b] = (S, A) => {
            let R = S && S[b];
            if (R) return R.call(S);
            throw new we(
              `Response type '${b}' is not supported`,
              we.ERR_NOT_SUPPORT,
              A,
            );
          });
      });
    const v = async (b) => {
        if (b == null) return 0;
        if (W.isBlob(b)) return b.size;
        if (W.isSpecCompliantForm(b))
          return (
            await new a(Qt.origin, { method: "POST", body: b }).arrayBuffer()
          ).byteLength;
        if (W.isArrayBufferView(b) || W.isArrayBuffer(b)) return b.byteLength;
        if ((W.isURLSearchParams(b) && (b = b + ""), W.isString(b)))
          return (await x(b)).byteLength;
      },
      g = async (b, S) => {
        const A = W.toFiniteNumber(b.getContentLength());
        return A == null ? v(S) : A;
      };
    return async (b) => {
      let {
          url: S,
          method: A,
          data: R,
          signal: C,
          cancelToken: D,
          timeout: T,
          onDownloadProgress: w,
          onUploadProgress: z,
          responseType: _,
          headers: L,
          withCredentials: q = "same-origin",
          fetchOptions: M,
        } = p4(b),
        j = n || fetch;
      _ = _ ? (_ + "").toLowerCase() : "text";
      let J = w_([C, D && D.toAbortSignal()], T),
        I = null;
      const le =
        J &&
        J.unsubscribe &&
        (() => {
          J.unsubscribe();
        });
      let ce;
      try {
        if (
          z &&
          h &&
          A !== "get" &&
          A !== "head" &&
          (ce = await g(L, R)) !== 0
        ) {
          let N = new a(S, { method: "POST", body: R, duplex: "half" }),
            X;
          if (
            (W.isFormData(R) &&
              (X = N.headers.get("content-type")) &&
              L.setContentType(X),
            N.body)
          ) {
            const [K, P] = Mv(ce, Qu(Ov(z)));
            R = zv(N.body, Lv, K, P);
          }
        }
        W.isString(q) || (q = q ? "include" : "omit");
        const ee = c && "credentials" in a.prototype,
          oe = Ne(ue({}, M), {
            signal: J,
            method: A.toUpperCase(),
            headers: L.normalize().toJSON(),
            body: R,
            duplex: "half",
            credentials: ee ? q : void 0,
          });
        I = c && new a(S, oe);
        let ie = await (c ? j(I, M) : j(S, oe));
        const ve = m && (_ === "stream" || _ === "response");
        if (m && (w || (ve && le))) {
          const N = {};
          ["status", "statusText", "headers"].forEach((pe) => {
            N[pe] = ie[pe];
          });
          const X = W.toFiniteNumber(ie.headers.get("content-length")),
            [K, P] = (w && Mv(X, Qu(Ov(w), !0))) || [];
          ie = new s(
            zv(ie.body, Lv, K, () => {
              P && P(), le && le();
            }),
            N,
          );
        }
        _ = _ || "text";
        let F = await y[W.findKey(y, _) || "text"](ie, b);
        return (
          !ve && le && le(),
          await new Promise((N, X) => {
            h4(N, X, {
              data: F,
              headers: hn.from(ie.headers),
              status: ie.status,
              statusText: ie.statusText,
              config: b,
              request: I,
            });
          })
        );
      } catch (ee) {
        throw (
          (le && le(),
          ee && ee.name === "TypeError" && /Load failed|fetch/i.test(ee.message)
            ? Object.assign(new we("Network Error", we.ERR_NETWORK, b, I), {
                cause: ee.cause || ee,
              })
            : we.from(ee, ee && ee.code, b, I))
        );
      }
    };
  },
  N_ = new Map(),
  x4 = (t) => {
    let n = (t && t.env) || {};
    const { fetch: a, Request: s, Response: l } = n,
      c = [s, l, a];
    let f = c.length,
      d = f,
      x,
      h,
      m = N_;
    for (; d--; )
      (x = c[d]),
        (h = m.get(x)),
        h === void 0 && m.set(x, (h = d ? new Map() : L_(n))),
        (m = h);
    return h;
  };
x4();
const gd = { http: IB, xhr: R_, fetch: { get: x4 } };
W.forEach(gd, (t, n) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: n });
    } catch (a) {}
    Object.defineProperty(t, "adapterName", { value: n });
  }
});
const Hv = (t) => `- ${t}`,
  U_ = (t) => W.isFunction(t) || t === null || t === !1;
function k_(t, n) {
  t = W.isArray(t) ? t : [t];
  const { length: a } = t;
  let s, l;
  const c = {};
  for (let f = 0; f < a; f++) {
    s = t[f];
    let d;
    if (
      ((l = s),
      !U_(s) && ((l = gd[(d = String(s)).toLowerCase()]), l === void 0))
    )
      throw new we(`Unknown adapter '${d}'`);
    if (l && (W.isFunction(l) || (l = l.get(n)))) break;
    c[d || "#" + f] = l;
  }
  if (!l) {
    const f = Object.entries(c).map(
      ([x, h]) =>
        `adapter ${x} ` +
        (h === !1
          ? "is not supported by the environment"
          : "is not available in the build"),
    );
    let d = a
      ? f.length > 1
        ? `since :
` +
          f.map(Hv).join(`
`)
        : " " + Hv(f[0])
      : "as no adapter specified";
    throw new we(
      "There is no suitable adapter to dispatch the request " + d,
      "ERR_NOT_SUPPORT",
    );
  }
  return l;
}
const m4 = { getAdapter: k_, adapters: gd };
function Yf(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new as(null, t);
}
function Vv(t) {
  return (
    Yf(t),
    (t.headers = hn.from(t.headers)),
    (t.data = Pf.call(t, t.transformRequest)),
    ["post", "put", "patch"].indexOf(t.method) !== -1 &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1),
    m4
      .getAdapter(
        t.adapter || Mo.adapter,
        t,
      )(t)
      .then(
        function (s) {
          return (
            Yf(t),
            (s.data = Pf.call(t, t.transformResponse, s)),
            (s.headers = hn.from(s.headers)),
            s
          );
        },
        function (s) {
          return (
            f4(s) ||
              (Yf(t),
              s &&
                s.response &&
                ((s.response.data = Pf.call(
                  t,
                  t.transformResponse,
                  s.response,
                )),
                (s.response.headers = hn.from(s.response.headers)))),
            Promise.reject(s)
          );
        },
      )
  );
}
const y4 = "1.13.2",
  uc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (t, n) => {
    uc[t] = function (s) {
      return typeof s === t || "a" + (n < 1 ? "n " : " ") + t;
    };
  },
);
const qv = {};
uc.transitional = function (n, a, s) {
  function l(c, f) {
    return (
      "[Axios v" +
      y4 +
      "] Transitional option '" +
      c +
      "'" +
      f +
      (s ? ". " + s : "")
    );
  }
  return (c, f, d) => {
    if (n === !1)
      throw new we(
        l(f, " has been removed" + (a ? " in " + a : "")),
        we.ERR_DEPRECATED,
      );
    return (
      a &&
        !qv[f] &&
        ((qv[f] = !0),
        console.warn(
          l(
            f,
            " has been deprecated since v" +
              a +
              " and will be removed in the near future",
          ),
        )),
      n ? n(c, f, d) : !0
    );
  };
};
uc.spelling = function (n) {
  return (a, s) => (console.warn(`${s} is likely a misspelling of ${n}`), !0);
};
function H_(t, n, a) {
  if (typeof t != "object")
    throw new we("options must be an object", we.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(t);
  let l = s.length;
  for (; l-- > 0; ) {
    const c = s[l],
      f = n[c];
    if (f) {
      const d = t[c],
        x = d === void 0 || f(d, c, t);
      if (x !== !0)
        throw new we("option " + c + " must be " + x, we.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (a !== !0) throw new we("Unknown option " + c, we.ERR_BAD_OPTION);
  }
}
const Lu = { assertOptions: H_, validators: uc },
  di = Lu.validators;
let ar = class {
  constructor(n) {
    (this.defaults = n || {}),
      (this.interceptors = { request: new Rv(), response: new Rv() });
  }
  async request(n, a) {
    try {
      return await this._request(n, a);
    } catch (s) {
      if (s instanceof Error) {
        let l = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(l)
          : (l = new Error());
        const c = l.stack ? l.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack
            ? c &&
              !String(s.stack).endsWith(c.replace(/^.+\n.+\n/, "")) &&
              (s.stack +=
                `
` + c)
            : (s.stack = c);
        } catch (f) {}
      }
      throw s;
    }
  }
  _request(n, a) {
    typeof n == "string" ? ((a = a || {}), (a.url = n)) : (a = n || {}),
      (a = sr(this.defaults, a));
    const { transitional: s, paramsSerializer: l, headers: c } = a;
    s !== void 0 &&
      Lu.assertOptions(
        s,
        {
          silentJSONParsing: di.transitional(di.boolean),
          forcedJSONParsing: di.transitional(di.boolean),
          clarifyTimeoutError: di.transitional(di.boolean),
        },
        !1,
      ),
      l != null &&
        (W.isFunction(l)
          ? (a.paramsSerializer = { serialize: l })
          : Lu.assertOptions(
              l,
              { encode: di.function, serialize: di.function },
              !0,
            )),
      a.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (a.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (a.allowAbsoluteUrls = !0)),
      Lu.assertOptions(
        a,
        {
          baseUrl: di.spelling("baseURL"),
          withXsrfToken: di.spelling("withXSRFToken"),
        },
        !0,
      ),
      (a.method = (a.method || this.defaults.method || "get").toLowerCase());
    let f = c && W.merge(c.common, c[a.method]);
    c &&
      W.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (b) => {
          delete c[b];
        },
      ),
      (a.headers = hn.concat(f, c));
    const d = [];
    let x = !0;
    this.interceptors.request.forEach(function (S) {
      (typeof S.runWhen == "function" && S.runWhen(a) === !1) ||
        ((x = x && S.synchronous), d.unshift(S.fulfilled, S.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function (S) {
      h.push(S.fulfilled, S.rejected);
    });
    let m,
      y = 0,
      v;
    if (!x) {
      const b = [Vv.bind(this), void 0];
      for (
        b.unshift(...d), b.push(...h), v = b.length, m = Promise.resolve(a);
        y < v;

      )
        m = m.then(b[y++], b[y++]);
      return m;
    }
    v = d.length;
    let g = a;
    for (; y < v; ) {
      const b = d[y++],
        S = d[y++];
      try {
        g = b(g);
      } catch (A) {
        S.call(this, A);
        break;
      }
    }
    try {
      m = Vv.call(this, g);
    } catch (b) {
      return Promise.reject(b);
    }
    for (y = 0, v = h.length; y < v; ) m = m.then(h[y++], h[y++]);
    return m;
  }
  getUri(n) {
    n = sr(this.defaults, n);
    const a = d4(n.baseURL, n.url, n.allowAbsoluteUrls);
    return l4(a, n.params, n.paramsSerializer);
  }
};
W.forEach(["delete", "get", "head", "options"], function (n) {
  ar.prototype[n] = function (a, s) {
    return this.request(
      sr(s || {}, { method: n, url: a, data: (s || {}).data }),
    );
  };
});
W.forEach(["post", "put", "patch"], function (n) {
  function a(s) {
    return function (c, f, d) {
      return this.request(
        sr(d || {}, {
          method: n,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: c,
          data: f,
        }),
      );
    };
  }
  (ar.prototype[n] = a()), (ar.prototype[n + "Form"] = a(!0));
});
let V_ = class v4 {
  constructor(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    let a;
    this.promise = new Promise(function (c) {
      a = c;
    });
    const s = this;
    this.promise.then((l) => {
      if (!s._listeners) return;
      let c = s._listeners.length;
      for (; c-- > 0; ) s._listeners[c](l);
      s._listeners = null;
    }),
      (this.promise.then = (l) => {
        let c;
        const f = new Promise((d) => {
          s.subscribe(d), (c = d);
        }).then(l);
        return (
          (f.cancel = function () {
            s.unsubscribe(c);
          }),
          f
        );
      }),
      n(function (c, f, d) {
        s.reason || ((s.reason = new as(c, f, d)), a(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : (this._listeners = [n]);
  }
  unsubscribe(n) {
    if (!this._listeners) return;
    const a = this._listeners.indexOf(n);
    a !== -1 && this._listeners.splice(a, 1);
  }
  toAbortSignal() {
    const n = new AbortController(),
      a = (s) => {
        n.abort(s);
      };
    return (
      this.subscribe(a),
      (n.signal.unsubscribe = () => this.unsubscribe(a)),
      n.signal
    );
  }
  static source() {
    let n;
    return {
      token: new v4(function (l) {
        n = l;
      }),
      cancel: n,
    };
  }
};
function q_(t) {
  return function (a) {
    return t.apply(null, a);
  };
}
function j_(t) {
  return W.isObject(t) && t.isAxiosError === !0;
}
const Ah = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(Ah).forEach(([t, n]) => {
  Ah[n] = t;
});
function g4(t) {
  const n = new ar(t),
    a = $2(ar.prototype.request, n);
  return (
    W.extend(a, ar.prototype, n, { allOwnKeys: !0 }),
    W.extend(a, n, null, { allOwnKeys: !0 }),
    (a.create = function (l) {
      return g4(sr(t, l));
    }),
    a
  );
}
const Rt = g4(Mo);
Rt.Axios = ar;
Rt.CanceledError = as;
Rt.CancelToken = V_;
Rt.isCancel = f4;
Rt.VERSION = y4;
Rt.toFormData = lc;
Rt.AxiosError = we;
Rt.Cancel = Rt.CanceledError;
Rt.all = function (n) {
  return Promise.all(n);
};
Rt.spread = q_;
Rt.isAxiosError = j_;
Rt.mergeConfig = sr;
Rt.AxiosHeaders = hn;
Rt.formToJSON = (t) => c4(W.isHTMLForm(t) ? new FormData(t) : t);
Rt.getAdapter = m4.getAdapter;
Rt.HttpStatusCode = Ah;
Rt.default = Rt;
const {
    Axios: H7,
    AxiosError: V7,
    CanceledError: q7,
    isCancel: j7,
    CancelToken: P7,
    VERSION: Y7,
    all: X7,
    Cancel: G7,
    isAxiosError: K7,
    spread: Z7,
    toFormData: Q7,
    AxiosHeaders: $7,
    HttpStatusCode: W7,
    formToJSON: J7,
    getAdapter: I7,
    mergeConfig: e9,
  } = Rt,
  mi = Object.create(null);
mi.open = "0";
mi.close = "1";
mi.ping = "2";
mi.pong = "3";
mi.message = "4";
mi.upgrade = "5";
mi.noop = "6";
const Nu = Object.create(null);
Object.keys(mi).forEach((t) => {
  Nu[mi[t]] = t;
});
const Sh = { type: "error", data: "parser error" },
  E4 =
    typeof Blob == "function" ||
    (typeof Blob != "undefined" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  b4 = typeof ArrayBuffer == "function",
  A4 = (t) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(t)
      : t && t.buffer instanceof ArrayBuffer,
  Ed = ({ type: t, data: n }, a, s) =>
    E4 && n instanceof Blob
      ? a
        ? s(n)
        : jv(n, s)
      : b4 && (n instanceof ArrayBuffer || A4(n))
        ? a
          ? s(n)
          : jv(new Blob([n]), s)
        : s(mi[t] + (n || "")),
  jv = (t, n) => {
    const a = new FileReader();
    return (
      (a.onload = function () {
        const s = a.result.split(",")[1];
        n("b" + (s || ""));
      }),
      a.readAsDataURL(t)
    );
  };
function Pv(t) {
  return t instanceof Uint8Array
    ? t
    : t instanceof ArrayBuffer
      ? new Uint8Array(t)
      : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let Xf;
function P_(t, n) {
  if (E4 && t.data instanceof Blob)
    return t.data.arrayBuffer().then(Pv).then(n);
  if (b4 && (t.data instanceof ArrayBuffer || A4(t.data))) return n(Pv(t.data));
  Ed(t, !1, (a) => {
    Xf || (Xf = new TextEncoder()), n(Xf.encode(a));
  });
}
const Yv = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  oo = typeof Uint8Array == "undefined" ? [] : new Uint8Array(256);
for (let t = 0; t < Yv.length; t++) oo[Yv.charCodeAt(t)] = t;
const Y_ = (t) => {
    let n = t.length * 0.75,
      a = t.length,
      s,
      l = 0,
      c,
      f,
      d,
      x;
    t[t.length - 1] === "=" && (n--, t[t.length - 2] === "=" && n--);
    const h = new ArrayBuffer(n),
      m = new Uint8Array(h);
    for (s = 0; s < a; s += 4)
      (c = oo[t.charCodeAt(s)]),
        (f = oo[t.charCodeAt(s + 1)]),
        (d = oo[t.charCodeAt(s + 2)]),
        (x = oo[t.charCodeAt(s + 3)]),
        (m[l++] = (c << 2) | (f >> 4)),
        (m[l++] = ((f & 15) << 4) | (d >> 2)),
        (m[l++] = ((d & 3) << 6) | (x & 63));
    return h;
  },
  X_ = typeof ArrayBuffer == "function",
  bd = (t, n) => {
    if (typeof t != "string") return { type: "message", data: S4(t, n) };
    const a = t.charAt(0);
    return a === "b"
      ? { type: "message", data: G_(t.substring(1), n) }
      : Nu[a]
        ? t.length > 1
          ? { type: Nu[a], data: t.substring(1) }
          : { type: Nu[a] }
        : Sh;
  },
  G_ = (t, n) => {
    if (X_) {
      const a = Y_(t);
      return S4(a, n);
    } else return { base64: !0, data: t };
  },
  S4 = (t, n) => {
    switch (n) {
      case "blob":
        return t instanceof Blob ? t : new Blob([t]);
      case "arraybuffer":
      default:
        return t instanceof ArrayBuffer ? t : t.buffer;
    }
  },
  C4 = "",
  K_ = (t, n) => {
    const a = t.length,
      s = new Array(a);
    let l = 0;
    t.forEach((c, f) => {
      Ed(c, !1, (d) => {
        (s[f] = d), ++l === a && n(s.join(C4));
      });
    });
  },
  Z_ = (t, n) => {
    const a = t.split(C4),
      s = [];
    for (let l = 0; l < a.length; l++) {
      const c = bd(a[l], n);
      if ((s.push(c), c.type === "error")) break;
    }
    return s;
  };
function Q_() {
  return new TransformStream({
    transform(t, n) {
      P_(t, (a) => {
        const s = a.length;
        let l;
        if (s < 126)
          (l = new Uint8Array(1)), new DataView(l.buffer).setUint8(0, s);
        else if (s < 65536) {
          l = new Uint8Array(3);
          const c = new DataView(l.buffer);
          c.setUint8(0, 126), c.setUint16(1, s);
        } else {
          l = new Uint8Array(9);
          const c = new DataView(l.buffer);
          c.setUint8(0, 127), c.setBigUint64(1, BigInt(s));
        }
        t.data && typeof t.data != "string" && (l[0] |= 128),
          n.enqueue(l),
          n.enqueue(a);
      });
    },
  });
}
let Gf;
function Yl(t) {
  return t.reduce((n, a) => n + a.length, 0);
}
function Xl(t, n) {
  if (t[0].length === n) return t.shift();
  const a = new Uint8Array(n);
  let s = 0;
  for (let l = 0; l < n; l++)
    (a[l] = t[0][s++]), s === t[0].length && (t.shift(), (s = 0));
  return t.length && s < t[0].length && (t[0] = t[0].slice(s)), a;
}
function $_(t, n) {
  Gf || (Gf = new TextDecoder());
  const a = [];
  let s = 0,
    l = -1,
    c = !1;
  return new TransformStream({
    transform(f, d) {
      for (a.push(f); ; ) {
        if (s === 0) {
          if (Yl(a) < 1) break;
          const x = Xl(a, 1);
          (c = (x[0] & 128) === 128),
            (l = x[0] & 127),
            l < 126 ? (s = 3) : l === 126 ? (s = 1) : (s = 2);
        } else if (s === 1) {
          if (Yl(a) < 2) break;
          const x = Xl(a, 2);
          (l = new DataView(x.buffer, x.byteOffset, x.length).getUint16(0)),
            (s = 3);
        } else if (s === 2) {
          if (Yl(a) < 8) break;
          const x = Xl(a, 8),
            h = new DataView(x.buffer, x.byteOffset, x.length),
            m = h.getUint32(0);
          if (m > Math.pow(2, 21) - 1) {
            d.enqueue(Sh);
            break;
          }
          (l = m * Math.pow(2, 32) + h.getUint32(4)), (s = 3);
        } else {
          if (Yl(a) < l) break;
          const x = Xl(a, l);
          d.enqueue(bd(c ? x : Gf.decode(x), n)), (s = 0);
        }
        if (l === 0 || l > t) {
          d.enqueue(Sh);
          break;
        }
      }
    },
  });
}
const D4 = 4;
function Tt(t) {
  if (t) return W_(t);
}
function W_(t) {
  for (var n in Tt.prototype) t[n] = Tt.prototype[n];
  return t;
}
Tt.prototype.on = Tt.prototype.addEventListener = function (t, n) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(n),
    this
  );
};
Tt.prototype.once = function (t, n) {
  function a() {
    this.off(t, a), n.apply(this, arguments);
  }
  return (a.fn = n), this.on(t, a), this;
};
Tt.prototype.off =
  Tt.prototype.removeListener =
  Tt.prototype.removeAllListeners =
  Tt.prototype.removeEventListener =
    function (t, n) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var a = this._callbacks["$" + t];
      if (!a) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + t], this;
      for (var s, l = 0; l < a.length; l++)
        if (((s = a[l]), s === n || s.fn === n)) {
          a.splice(l, 1);
          break;
        }
      return a.length === 0 && delete this._callbacks["$" + t], this;
    };
Tt.prototype.emit = function (t) {
  this._callbacks = this._callbacks || {};
  for (
    var n = new Array(arguments.length - 1),
      a = this._callbacks["$" + t],
      s = 1;
    s < arguments.length;
    s++
  )
    n[s - 1] = arguments[s];
  if (a) {
    a = a.slice(0);
    for (var s = 0, l = a.length; s < l; ++s) a[s].apply(this, n);
  }
  return this;
};
Tt.prototype.emitReserved = Tt.prototype.emit;
Tt.prototype.listeners = function (t) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks["$" + t] || []
  );
};
Tt.prototype.hasListeners = function (t) {
  return !!this.listeners(t).length;
};
const cc =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (n) => Promise.resolve().then(n)
      : (n, a) => a(n, 0),
  Vn =
    typeof self != "undefined"
      ? self
      : typeof window != "undefined"
        ? window
        : Function("return this")(),
  J_ = "arraybuffer";
function B4(t, ...n) {
  return n.reduce((a, s) => (t.hasOwnProperty(s) && (a[s] = t[s]), a), {});
}
const I_ = Vn.setTimeout,
  eT = Vn.clearTimeout;
function fc(t, n) {
  n.useNativeTimers
    ? ((t.setTimeoutFn = I_.bind(Vn)), (t.clearTimeoutFn = eT.bind(Vn)))
    : ((t.setTimeoutFn = Vn.setTimeout.bind(Vn)),
      (t.clearTimeoutFn = Vn.clearTimeout.bind(Vn)));
}
const tT = 1.33;
function nT(t) {
  return typeof t == "string"
    ? iT(t)
    : Math.ceil((t.byteLength || t.size) * tT);
}
function iT(t) {
  let n = 0,
    a = 0;
  for (let s = 0, l = t.length; s < l; s++)
    (n = t.charCodeAt(s)),
      n < 128
        ? (a += 1)
        : n < 2048
          ? (a += 2)
          : n < 55296 || n >= 57344
            ? (a += 3)
            : (s++, (a += 4));
  return a;
}
function _4() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function aT(t) {
  let n = "";
  for (let a in t)
    t.hasOwnProperty(a) &&
      (n.length && (n += "&"),
      (n += encodeURIComponent(a) + "=" + encodeURIComponent(t[a])));
  return n;
}
function rT(t) {
  let n = {},
    a = t.split("&");
  for (let s = 0, l = a.length; s < l; s++) {
    let c = a[s].split("=");
    n[decodeURIComponent(c[0])] = decodeURIComponent(c[1]);
  }
  return n;
}
class sT extends Error {
  constructor(n, a, s) {
    super(n),
      (this.description = a),
      (this.context = s),
      (this.type = "TransportError");
  }
}
class Ad extends Tt {
  constructor(n) {
    super(),
      (this.writable = !1),
      fc(this, n),
      (this.opts = n),
      (this.query = n.query),
      (this.socket = n.socket),
      (this.supportsBinary = !n.forceBase64);
  }
  onError(n, a, s) {
    return super.emitReserved("error", new sT(n, a, s)), this;
  }
  open() {
    return (this.readyState = "opening"), this.doOpen(), this;
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(n) {
    this.readyState === "open" && this.write(n);
  }
  onOpen() {
    (this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open");
  }
  onData(n) {
    const a = bd(n, this.socket.binaryType);
    this.onPacket(a);
  }
  onPacket(n) {
    super.emitReserved("packet", n);
  }
  onClose(n) {
    (this.readyState = "closed"), super.emitReserved("close", n);
  }
  pause(n) {}
  createUri(n, a = {}) {
    return (
      n +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(a)
    );
  }
  _hostname() {
    const n = this.opts.hostname;
    return n.indexOf(":") === -1 ? n : "[" + n + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(n) {
    const a = aT(n);
    return a.length ? "?" + a : "";
  }
}
class oT extends Ad {
  constructor() {
    super(...arguments), (this._polling = !1);
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this._poll();
  }
  pause(n) {
    this.readyState = "pausing";
    const a = () => {
      (this.readyState = "paused"), n();
    };
    if (this._polling || !this.writable) {
      let s = 0;
      this._polling &&
        (s++,
        this.once("pollComplete", function () {
          --s || a();
        })),
        this.writable ||
          (s++,
          this.once("drain", function () {
            --s || a();
          }));
    } else a();
  }
  _poll() {
    (this._polling = !0), this.doPoll(), this.emitReserved("poll");
  }
  onData(n) {
    const a = (s) => {
      if (
        (this.readyState === "opening" && s.type === "open" && this.onOpen(),
        s.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }), !1
        );
      this.onPacket(s);
    };
    Z_(n, this.socket.binaryType).forEach(a),
      this.readyState !== "closed" &&
        ((this._polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll());
  }
  doClose() {
    const n = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? n() : this.once("open", n);
  }
  write(n) {
    (this.writable = !1),
      K_(n, (a) => {
        this.doWrite(a, () => {
          (this.writable = !0), this.emitReserved("drain");
        });
      });
  }
  uri() {
    const n = this.opts.secure ? "https" : "http",
      a = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (a[this.opts.timestampParam] = _4()),
      !this.supportsBinary && !a.sid && (a.b64 = 1),
      this.createUri(n, a)
    );
  }
}
let T4 = !1;
try {
  T4 =
    typeof XMLHttpRequest != "undefined" &&
    "withCredentials" in new XMLHttpRequest();
} catch (t) {}
const lT = T4;
function uT() {}
class cT extends oT {
  constructor(n) {
    if ((super(n), typeof location != "undefined")) {
      const a = location.protocol === "https:";
      let s = location.port;
      s || (s = a ? "443" : "80"),
        (this.xd =
          (typeof location != "undefined" &&
            n.hostname !== location.hostname) ||
          s !== n.port);
    }
  }
  doWrite(n, a) {
    const s = this.request({ method: "POST", data: n });
    s.on("success", a),
      s.on("error", (l, c) => {
        this.onError("xhr post error", l, c);
      });
  }
  doPoll() {
    const n = this.request();
    n.on("data", this.onData.bind(this)),
      n.on("error", (a, s) => {
        this.onError("xhr poll error", a, s);
      }),
      (this.pollXhr = n);
  }
}
let Qr = class Uu extends Tt {
  constructor(n, a, s) {
    super(),
      (this.createRequest = n),
      fc(this, s),
      (this._opts = s),
      (this._method = s.method || "GET"),
      (this._uri = a),
      (this._data = s.data !== void 0 ? s.data : null),
      this._create();
  }
  _create() {
    var n;
    const a = B4(
      this._opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref",
    );
    a.xdomain = !!this._opts.xd;
    const s = (this._xhr = this.createRequest(a));
    try {
      s.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          s.setDisableHeaderCheck && s.setDisableHeaderCheck(!0);
          for (let l in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(l) &&
              s.setRequestHeader(l, this._opts.extraHeaders[l]);
        }
      } catch (l) {}
      if (this._method === "POST")
        try {
          s.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (l) {}
      try {
        s.setRequestHeader("Accept", "*/*");
      } catch (l) {}
      (n = this._opts.cookieJar) === null || n === void 0 || n.addCookies(s),
        "withCredentials" in s &&
          (s.withCredentials = this._opts.withCredentials),
        this._opts.requestTimeout && (s.timeout = this._opts.requestTimeout),
        (s.onreadystatechange = () => {
          var l;
          s.readyState === 3 &&
            ((l = this._opts.cookieJar) === null ||
              l === void 0 ||
              l.parseCookies(s.getResponseHeader("set-cookie"))),
            s.readyState === 4 &&
              (s.status === 200 || s.status === 1223
                ? this._onLoad()
                : this.setTimeoutFn(() => {
                    this._onError(typeof s.status == "number" ? s.status : 0);
                  }, 0));
        }),
        s.send(this._data);
    } catch (l) {
      this.setTimeoutFn(() => {
        this._onError(l);
      }, 0);
      return;
    }
    typeof document != "undefined" &&
      ((this._index = Uu.requestsCount++), (Uu.requests[this._index] = this));
  }
  _onError(n) {
    this.emitReserved("error", n, this._xhr), this._cleanup(!0);
  }
  _cleanup(n) {
    if (!(typeof this._xhr == "undefined" || this._xhr === null)) {
      if (((this._xhr.onreadystatechange = uT), n))
        try {
          this._xhr.abort();
        } catch (a) {}
      typeof document != "undefined" && delete Uu.requests[this._index],
        (this._xhr = null);
    }
  }
  _onLoad() {
    const n = this._xhr.responseText;
    n !== null &&
      (this.emitReserved("data", n),
      this.emitReserved("success"),
      this._cleanup());
  }
  abort() {
    this._cleanup();
  }
};
Qr.requestsCount = 0;
Qr.requests = {};
if (typeof document != "undefined") {
  if (typeof attachEvent == "function") attachEvent("onunload", Xv);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in Vn ? "pagehide" : "unload";
    addEventListener(t, Xv, !1);
  }
}
function Xv() {
  for (let t in Qr.requests)
    Qr.requests.hasOwnProperty(t) && Qr.requests[t].abort();
}
const fT = (function () {
  const t = R4({ xdomain: !1 });
  return t && t.responseType !== null;
})();
class hT extends cT {
  constructor(n) {
    super(n);
    const a = n && n.forceBase64;
    this.supportsBinary = fT && !a;
  }
  request(n = {}) {
    return (
      Object.assign(n, { xd: this.xd }, this.opts), new Qr(R4, this.uri(), n)
    );
  }
}
function R4(t) {
  const n = t.xdomain;
  try {
    if (typeof XMLHttpRequest != "undefined" && (!n || lT))
      return new XMLHttpRequest();
  } catch (a) {}
  if (!n)
    try {
      return new Vn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (a) {}
}
const w4 =
  typeof navigator != "undefined" &&
  typeof navigator.product == "string" &&
  navigator.product.toLowerCase() === "reactnative";
class dT extends Ad {
  get name() {
    return "websocket";
  }
  doOpen() {
    const n = this.uri(),
      a = this.opts.protocols,
      s = w4
        ? {}
        : B4(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity",
          );
    this.opts.extraHeaders && (s.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(n, a, s);
    } catch (l) {
      return this.emitReserved("error", l);
    }
    (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (n) =>
        this.onClose({
          description: "websocket connection closed",
          context: n,
        })),
      (this.ws.onmessage = (n) => this.onData(n.data)),
      (this.ws.onerror = (n) => this.onError("websocket error", n));
  }
  write(n) {
    this.writable = !1;
    for (let a = 0; a < n.length; a++) {
      const s = n[a],
        l = a === n.length - 1;
      Ed(s, this.supportsBinary, (c) => {
        try {
          this.doWrite(s, c);
        } catch (f) {}
        l &&
          cc(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws != "undefined" &&
      ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
  }
  uri() {
    const n = this.opts.secure ? "wss" : "ws",
      a = this.query || {};
    return (
      this.opts.timestampRequests && (a[this.opts.timestampParam] = _4()),
      this.supportsBinary || (a.b64 = 1),
      this.createUri(n, a)
    );
  }
}
const Kf = Vn.WebSocket || Vn.MozWebSocket;
class pT extends dT {
  createSocket(n, a, s) {
    return w4 ? new Kf(n, a, s) : a ? new Kf(n, a) : new Kf(n);
  }
  doWrite(n, a) {
    this.ws.send(a);
  }
}
class xT extends Ad {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name],
      );
    } catch (n) {
      return this.emitReserved("error", n);
    }
    this._transport.closed
      .then(() => {
        this.onClose();
      })
      .catch((n) => {
        this.onError("webtransport error", n);
      }),
      this._transport.ready.then(() => {
        this._transport.createBidirectionalStream().then((n) => {
          const a = $_(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            s = n.readable.pipeThrough(a).getReader(),
            l = Q_();
          l.readable.pipeTo(n.writable),
            (this._writer = l.writable.getWriter());
          const c = () => {
            s.read()
              .then(({ done: d, value: x }) => {
                d || (this.onPacket(x), c());
              })
              .catch((d) => {});
          };
          c();
          const f = { type: "open" };
          this.query.sid && (f.data = `{"sid":"${this.query.sid}"}`),
            this._writer.write(f).then(() => this.onOpen());
        });
      });
  }
  write(n) {
    this.writable = !1;
    for (let a = 0; a < n.length; a++) {
      const s = n[a],
        l = a === n.length - 1;
      this._writer.write(s).then(() => {
        l &&
          cc(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var n;
    (n = this._transport) === null || n === void 0 || n.close();
  }
}
const mT = { websocket: pT, webtransport: xT, polling: hT },
  yT =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  vT = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function Ch(t) {
  if (t.length > 8e3) throw "URI too long";
  const n = t,
    a = t.indexOf("["),
    s = t.indexOf("]");
  a != -1 &&
    s != -1 &&
    (t =
      t.substring(0, a) +
      t.substring(a, s).replace(/:/g, ";") +
      t.substring(s, t.length));
  let l = yT.exec(t || ""),
    c = {},
    f = 14;
  for (; f--; ) c[vT[f]] = l[f] || "";
  return (
    a != -1 &&
      s != -1 &&
      ((c.source = n),
      (c.host = c.host.substring(1, c.host.length - 1).replace(/;/g, ":")),
      (c.authority = c.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (c.ipv6uri = !0)),
    (c.pathNames = gT(c, c.path)),
    (c.queryKey = ET(c, c.query)),
    c
  );
}
function gT(t, n) {
  const a = /\/{2,9}/g,
    s = n.replace(a, "/").split("/");
  return (
    (n.slice(0, 1) == "/" || n.length === 0) && s.splice(0, 1),
    n.slice(-1) == "/" && s.splice(s.length - 1, 1),
    s
  );
}
function ET(t, n) {
  const a = {};
  return (
    n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (s, l, c) {
      l && (a[l] = c);
    }),
    a
  );
}
const Dh =
    typeof addEventListener == "function" &&
    typeof removeEventListener == "function",
  ku = [];
Dh &&
  addEventListener(
    "offline",
    () => {
      ku.forEach((t) => t());
    },
    !1,
  );
class ya extends Tt {
  constructor(n, a) {
    if (
      (super(),
      (this.binaryType = J_),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      n && typeof n == "object" && ((a = n), (n = null)),
      n)
    ) {
      const s = Ch(n);
      (a.hostname = s.host),
        (a.secure = s.protocol === "https" || s.protocol === "wss"),
        (a.port = s.port),
        s.query && (a.query = s.query);
    } else a.host && (a.hostname = Ch(a.host).host);
    fc(this, a),
      (this.secure =
        a.secure != null
          ? a.secure
          : typeof location != "undefined" && location.protocol === "https:"),
      a.hostname && !a.port && (a.port = this.secure ? "443" : "80"),
      (this.hostname =
        a.hostname ||
        (typeof location != "undefined" ? location.hostname : "localhost")),
      (this.port =
        a.port ||
        (typeof location != "undefined" && location.port
          ? location.port
          : this.secure
            ? "443"
            : "80")),
      (this.transports = []),
      (this._transportsByName = {}),
      a.transports.forEach((s) => {
        const l = s.prototype.name;
        this.transports.push(l), (this._transportsByName[l] = s);
      }),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        a,
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") +
        (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" &&
        (this.opts.query = rT(this.opts.query)),
      Dh &&
        (this.opts.closeOnBeforeunload &&
          ((this._beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener(
            "beforeunload",
            this._beforeunloadEventListener,
            !1,
          )),
        this.hostname !== "localhost" &&
          ((this._offlineEventListener = () => {
            this._onClose("transport close", {
              description: "network connection lost",
            });
          }),
          ku.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open();
  }
  createTransport(n) {
    const a = Object.assign({}, this.opts.query);
    (a.EIO = D4), (a.transport = n), this.id && (a.sid = this.id);
    const s = Object.assign(
      {},
      this.opts,
      {
        query: a,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[n],
    );
    return new this._transportsByName[n](s);
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const n =
      this.opts.rememberUpgrade &&
      ya.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
        ? "websocket"
        : this.transports[0];
    this.readyState = "opening";
    const a = this.createTransport(n);
    a.open(), this.setTransport(a);
  }
  setTransport(n) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = n),
      n
        .on("drain", this._onDrain.bind(this))
        .on("packet", this._onPacket.bind(this))
        .on("error", this._onError.bind(this))
        .on("close", (a) => this._onClose("transport close", a));
  }
  onOpen() {
    (this.readyState = "open"),
      (ya.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush();
  }
  _onPacket(n) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", n), this.emitReserved("heartbeat"), n.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(n.data));
          break;
        case "ping":
          this._sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong"),
            this._resetPingTimeout();
          break;
        case "error":
          const a = new Error("server error");
          (a.code = n.data), this._onError(a);
          break;
        case "message":
          this.emitReserved("data", n.data),
            this.emitReserved("message", n.data);
          break;
      }
  }
  onHandshake(n) {
    this.emitReserved("handshake", n),
      (this.id = n.sid),
      (this.transport.query.sid = n.sid),
      (this._pingInterval = n.pingInterval),
      (this._pingTimeout = n.pingTimeout),
      (this._maxPayload = n.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this._resetPingTimeout();
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const n = this._pingInterval + this._pingTimeout;
    (this._pingTimeoutTime = Date.now() + n),
      (this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose("ping timeout");
      }, n)),
      this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen),
      (this._prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const n = this._getWritablePackets();
      this.transport.send(n),
        (this._prevBufferLen = n.length),
        this.emitReserved("flush");
    }
  }
  _getWritablePackets() {
    if (
      !(
        this._maxPayload &&
        this.transport.name === "polling" &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let a = 1;
    for (let s = 0; s < this.writeBuffer.length; s++) {
      const l = this.writeBuffer[s].data;
      if ((l && (a += nT(l)), s > 0 && a > this._maxPayload))
        return this.writeBuffer.slice(0, s);
      a += 2;
    }
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return !0;
    const n = Date.now() > this._pingTimeoutTime;
    return (
      n &&
        ((this._pingTimeoutTime = 0),
        cc(() => {
          this._onClose("ping timeout");
        }, this.setTimeoutFn)),
      n
    );
  }
  write(n, a, s) {
    return this._sendPacket("message", n, a, s), this;
  }
  send(n, a, s) {
    return this._sendPacket("message", n, a, s), this;
  }
  _sendPacket(n, a, s, l) {
    if (
      (typeof a == "function" && ((l = a), (a = void 0)),
      typeof s == "function" && ((l = s), (s = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (s = s || {}), (s.compress = s.compress !== !1);
    const c = { type: n, data: a, options: s };
    this.emitReserved("packetCreate", c),
      this.writeBuffer.push(c),
      l && this.once("flush", l),
      this.flush();
  }
  close() {
    const n = () => {
        this._onClose("forced close"), this.transport.close();
      },
      a = () => {
        this.off("upgrade", a), this.off("upgradeError", a), n();
      },
      s = () => {
        this.once("upgrade", a), this.once("upgradeError", a);
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? s() : n();
            })
          : this.upgrading
            ? s()
            : n()),
      this
    );
  }
  _onError(n) {
    if (
      ((ya.priorWebsocketSuccess = !1),
      this.opts.tryAllTransports &&
        this.transports.length > 1 &&
        this.readyState === "opening")
    )
      return this.transports.shift(), this._open();
    this.emitReserved("error", n), this._onClose("transport error", n);
  }
  _onClose(n, a) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    ) {
      if (
        (this.clearTimeoutFn(this._pingTimeoutTimer),
        this.transport.removeAllListeners("close"),
        this.transport.close(),
        this.transport.removeAllListeners(),
        Dh &&
          (this._beforeunloadEventListener &&
            removeEventListener(
              "beforeunload",
              this._beforeunloadEventListener,
              !1,
            ),
          this._offlineEventListener))
      ) {
        const s = ku.indexOf(this._offlineEventListener);
        s !== -1 && ku.splice(s, 1);
      }
      (this.readyState = "closed"),
        (this.id = null),
        this.emitReserved("close", n, a),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0);
    }
  }
}
ya.protocol = D4;
class bT extends ya {
  constructor() {
    super(...arguments), (this._upgrades = []);
  }
  onOpen() {
    if ((super.onOpen(), this.readyState === "open" && this.opts.upgrade))
      for (let n = 0; n < this._upgrades.length; n++)
        this._probe(this._upgrades[n]);
  }
  _probe(n) {
    let a = this.createTransport(n),
      s = !1;
    ya.priorWebsocketSuccess = !1;
    const l = () => {
      s ||
        (a.send([{ type: "ping", data: "probe" }]),
        a.once("packet", (y) => {
          if (!s)
            if (y.type === "pong" && y.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", a), !a)
              )
                return;
              (ya.priorWebsocketSuccess = a.name === "websocket"),
                this.transport.pause(() => {
                  s ||
                    (this.readyState !== "closed" &&
                      (m(),
                      this.setTransport(a),
                      a.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", a),
                      (a = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const v = new Error("probe error");
              (v.transport = a.name), this.emitReserved("upgradeError", v);
            }
        }));
    };
    function c() {
      s || ((s = !0), m(), a.close(), (a = null));
    }
    const f = (y) => {
      const v = new Error("probe error: " + y);
      (v.transport = a.name), c(), this.emitReserved("upgradeError", v);
    };
    function d() {
      f("transport closed");
    }
    function x() {
      f("socket closed");
    }
    function h(y) {
      a && y.name !== a.name && c();
    }
    const m = () => {
      a.removeListener("open", l),
        a.removeListener("error", f),
        a.removeListener("close", d),
        this.off("close", x),
        this.off("upgrading", h);
    };
    a.once("open", l),
      a.once("error", f),
      a.once("close", d),
      this.once("close", x),
      this.once("upgrading", h),
      this._upgrades.indexOf("webtransport") !== -1 && n !== "webtransport"
        ? this.setTimeoutFn(() => {
            s || a.open();
          }, 200)
        : a.open();
  }
  onHandshake(n) {
    (this._upgrades = this._filterUpgrades(n.upgrades)), super.onHandshake(n);
  }
  _filterUpgrades(n) {
    const a = [];
    for (let s = 0; s < n.length; s++)
      ~this.transports.indexOf(n[s]) && a.push(n[s]);
    return a;
  }
}
let AT = class extends bT {
  constructor(n, a = {}) {
    const s = typeof n == "object" ? n : a;
    (!s.transports || (s.transports && typeof s.transports[0] == "string")) &&
      (s.transports = (s.transports || ["polling", "websocket", "webtransport"])
        .map((l) => mT[l])
        .filter((l) => !!l)),
      super(n, s);
  }
};
function ST(t, n = "", a) {
  let s = t;
  (a = a || (typeof location != "undefined" && location)),
    t == null && (t = a.protocol + "//" + a.host),
    typeof t == "string" &&
      (t.charAt(0) === "/" &&
        (t.charAt(1) === "/" ? (t = a.protocol + t) : (t = a.host + t)),
      /^(https?|wss?):\/\//.test(t) ||
        (typeof a != "undefined"
          ? (t = a.protocol + "//" + t)
          : (t = "https://" + t)),
      (s = Ch(t))),
    s.port ||
      (/^(http|ws)$/.test(s.protocol)
        ? (s.port = "80")
        : /^(http|ws)s$/.test(s.protocol) && (s.port = "443")),
    (s.path = s.path || "/");
  const c = s.host.indexOf(":") !== -1 ? "[" + s.host + "]" : s.host;
  return (
    (s.id = s.protocol + "://" + c + ":" + s.port + n),
    (s.href =
      s.protocol + "://" + c + (a && a.port === s.port ? "" : ":" + s.port)),
    s
  );
}
const CT = typeof ArrayBuffer == "function",
  DT = (t) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(t)
      : t.buffer instanceof ArrayBuffer,
  M4 = Object.prototype.toString,
  BT =
    typeof Blob == "function" ||
    (typeof Blob != "undefined" &&
      M4.call(Blob) === "[object BlobConstructor]"),
  _T =
    typeof File == "function" ||
    (typeof File != "undefined" &&
      M4.call(File) === "[object FileConstructor]");
function Sd(t) {
  return (
    (CT && (t instanceof ArrayBuffer || DT(t))) ||
    (BT && t instanceof Blob) ||
    (_T && t instanceof File)
  );
}
function Hu(t, n) {
  if (!t || typeof t != "object") return !1;
  if (Array.isArray(t)) {
    for (let a = 0, s = t.length; a < s; a++) if (Hu(t[a])) return !0;
    return !1;
  }
  if (Sd(t)) return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return Hu(t.toJSON(), !0);
  for (const a in t)
    if (Object.prototype.hasOwnProperty.call(t, a) && Hu(t[a])) return !0;
  return !1;
}
function TT(t) {
  const n = [],
    a = t.data,
    s = t;
  return (
    (s.data = Bh(a, n)), (s.attachments = n.length), { packet: s, buffers: n }
  );
}
function Bh(t, n) {
  if (!t) return t;
  if (Sd(t)) {
    const a = { _placeholder: !0, num: n.length };
    return n.push(t), a;
  } else if (Array.isArray(t)) {
    const a = new Array(t.length);
    for (let s = 0; s < t.length; s++) a[s] = Bh(t[s], n);
    return a;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const a = {};
    for (const s in t)
      Object.prototype.hasOwnProperty.call(t, s) && (a[s] = Bh(t[s], n));
    return a;
  }
  return t;
}
function RT(t, n) {
  return (t.data = _h(t.data, n)), delete t.attachments, t;
}
function _h(t, n) {
  if (!t) return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < n.length)
      return n[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let a = 0; a < t.length; a++) t[a] = _h(t[a], n);
  else if (typeof t == "object")
    for (const a in t)
      Object.prototype.hasOwnProperty.call(t, a) && (t[a] = _h(t[a], n));
  return t;
}
const wT = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  MT = 5;
var Ve;
(function (t) {
  (t[(t.CONNECT = 0)] = "CONNECT"),
    (t[(t.DISCONNECT = 1)] = "DISCONNECT"),
    (t[(t.EVENT = 2)] = "EVENT"),
    (t[(t.ACK = 3)] = "ACK"),
    (t[(t.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (t[(t.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (t[(t.BINARY_ACK = 6)] = "BINARY_ACK");
})(Ve || (Ve = {}));
class OT {
  constructor(n) {
    this.replacer = n;
  }
  encode(n) {
    return (n.type === Ve.EVENT || n.type === Ve.ACK) && Hu(n)
      ? this.encodeAsBinary({
          type: n.type === Ve.EVENT ? Ve.BINARY_EVENT : Ve.BINARY_ACK,
          nsp: n.nsp,
          data: n.data,
          id: n.id,
        })
      : [this.encodeAsString(n)];
  }
  encodeAsString(n) {
    let a = "" + n.type;
    return (
      (n.type === Ve.BINARY_EVENT || n.type === Ve.BINARY_ACK) &&
        (a += n.attachments + "-"),
      n.nsp && n.nsp !== "/" && (a += n.nsp + ","),
      n.id != null && (a += n.id),
      n.data != null && (a += JSON.stringify(n.data, this.replacer)),
      a
    );
  }
  encodeAsBinary(n) {
    const a = TT(n),
      s = this.encodeAsString(a.packet),
      l = a.buffers;
    return l.unshift(s), l;
  }
}
function Gv(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class Cd extends Tt {
  constructor(n) {
    super(), (this.reviver = n);
  }
  add(n) {
    let a;
    if (typeof n == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      a = this.decodeString(n);
      const s = a.type === Ve.BINARY_EVENT;
      s || a.type === Ve.BINARY_ACK
        ? ((a.type = s ? Ve.EVENT : Ve.ACK),
          (this.reconstructor = new FT(a)),
          a.attachments === 0 && super.emitReserved("decoded", a))
        : super.emitReserved("decoded", a);
    } else if (Sd(n) || n.base64)
      if (this.reconstructor)
        (a = this.reconstructor.takeBinaryData(n)),
          a && ((this.reconstructor = null), super.emitReserved("decoded", a));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + n);
  }
  decodeString(n) {
    let a = 0;
    const s = { type: Number(n.charAt(0)) };
    if (Ve[s.type] === void 0) throw new Error("unknown packet type " + s.type);
    if (s.type === Ve.BINARY_EVENT || s.type === Ve.BINARY_ACK) {
      const c = a + 1;
      for (; n.charAt(++a) !== "-" && a != n.length; );
      const f = n.substring(c, a);
      if (f != Number(f) || n.charAt(a) !== "-")
        throw new Error("Illegal attachments");
      s.attachments = Number(f);
    }
    if (n.charAt(a + 1) === "/") {
      const c = a + 1;
      for (; ++a && !(n.charAt(a) === "," || a === n.length); );
      s.nsp = n.substring(c, a);
    } else s.nsp = "/";
    const l = n.charAt(a + 1);
    if (l !== "" && Number(l) == l) {
      const c = a + 1;
      for (; ++a; ) {
        const f = n.charAt(a);
        if (f == null || Number(f) != f) {
          --a;
          break;
        }
        if (a === n.length) break;
      }
      s.id = Number(n.substring(c, a + 1));
    }
    if (n.charAt(++a)) {
      const c = this.tryParse(n.substr(a));
      if (Cd.isPayloadValid(s.type, c)) s.data = c;
      else throw new Error("invalid payload");
    }
    return s;
  }
  tryParse(n) {
    try {
      return JSON.parse(n, this.reviver);
    } catch (a) {
      return !1;
    }
  }
  static isPayloadValid(n, a) {
    switch (n) {
      case Ve.CONNECT:
        return Gv(a);
      case Ve.DISCONNECT:
        return a === void 0;
      case Ve.CONNECT_ERROR:
        return typeof a == "string" || Gv(a);
      case Ve.EVENT:
      case Ve.BINARY_EVENT:
        return (
          Array.isArray(a) &&
          (typeof a[0] == "number" ||
            (typeof a[0] == "string" && wT.indexOf(a[0]) === -1))
        );
      case Ve.ACK:
      case Ve.BINARY_ACK:
        return Array.isArray(a);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class FT {
  constructor(n) {
    (this.packet = n), (this.buffers = []), (this.reconPack = n);
  }
  takeBinaryData(n) {
    if (
      (this.buffers.push(n), this.buffers.length === this.reconPack.attachments)
    ) {
      const a = RT(this.reconPack, this.buffers);
      return this.finishedReconstruction(), a;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const zT = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: Cd,
      Encoder: OT,
      get PacketType() {
        return Ve;
      },
      protocol: MT,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function ni(t, n, a) {
  return (
    t.on(n, a),
    function () {
      t.off(n, a);
    }
  );
}
const LT = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class O4 extends Tt {
  constructor(n, a, s) {
    super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = n),
      (this.nsp = a),
      s && s.auth && (this.auth = s.auth),
      (this._opts = Object.assign({}, s)),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const n = this.io;
    this.subs = [
      ni(n, "open", this.onopen.bind(this)),
      ni(n, "packet", this.onpacket.bind(this)),
      ni(n, "error", this.onerror.bind(this)),
      ni(n, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...n) {
    return n.unshift("message"), this.emit.apply(this, n), this;
  }
  emit(n, ...a) {
    var s, l, c;
    if (LT.hasOwnProperty(n))
      throw new Error('"' + n.toString() + '" is a reserved event name');
    if (
      (a.unshift(n),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(a), this;
    const f = { type: Ve.EVENT, data: a };
    if (
      ((f.options = {}),
      (f.options.compress = this.flags.compress !== !1),
      typeof a[a.length - 1] == "function")
    ) {
      const m = this.ids++,
        y = a.pop();
      this._registerAckCallback(m, y), (f.id = m);
    }
    const d =
        (l =
          (s = this.io.engine) === null || s === void 0
            ? void 0
            : s.transport) === null || l === void 0
          ? void 0
          : l.writable,
      x =
        this.connected &&
        !(
          !((c = this.io.engine) === null || c === void 0) &&
          c._hasPingExpired()
        );
    return (
      (this.flags.volatile && !d) ||
        (x
          ? (this.notifyOutgoingListeners(f), this.packet(f))
          : this.sendBuffer.push(f)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(n, a) {
    var s;
    const l =
      (s = this.flags.timeout) !== null && s !== void 0
        ? s
        : this._opts.ackTimeout;
    if (l === void 0) {
      this.acks[n] = a;
      return;
    }
    const c = this.io.setTimeoutFn(() => {
        delete this.acks[n];
        for (let d = 0; d < this.sendBuffer.length; d++)
          this.sendBuffer[d].id === n && this.sendBuffer.splice(d, 1);
        a.call(this, new Error("operation has timed out"));
      }, l),
      f = (...d) => {
        this.io.clearTimeoutFn(c), a.apply(this, d);
      };
    (f.withError = !0), (this.acks[n] = f);
  }
  emitWithAck(n, ...a) {
    return new Promise((s, l) => {
      const c = (f, d) => (f ? l(f) : s(d));
      (c.withError = !0), a.push(c), this.emit(n, ...a);
    });
  }
  _addToQueue(n) {
    let a;
    typeof n[n.length - 1] == "function" && (a = n.pop());
    const s = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: n,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    n.push((l, ...c) =>
      s !== this._queue[0]
        ? void 0
        : (l !== null
            ? s.tryCount > this._opts.retries &&
              (this._queue.shift(), a && a(l))
            : (this._queue.shift(), a && a(null, ...c)),
          (s.pending = !1),
          this._drainQueue()),
    ),
      this._queue.push(s),
      this._drainQueue();
  }
  _drainQueue(n = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const a = this._queue[0];
    (a.pending && !n) ||
      ((a.pending = !0),
      a.tryCount++,
      (this.flags = a.flags),
      this.emit.apply(this, a.args));
  }
  packet(n) {
    (n.nsp = this.nsp), this.io._packet(n);
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((n) => {
          this._sendConnectPacket(n);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(n) {
    this.packet({
      type: Ve.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, n)
        : n,
    });
  }
  onerror(n) {
    this.connected || this.emitReserved("connect_error", n);
  }
  onclose(n, a) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", n, a),
      this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((n) => {
      if (!this.sendBuffer.some((s) => String(s.id) === n)) {
        const s = this.acks[n];
        delete this.acks[n],
          s.withError &&
            s.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  onpacket(n) {
    if (n.nsp === this.nsp)
      switch (n.type) {
        case Ve.CONNECT:
          n.data && n.data.sid
            ? this.onconnect(n.data.sid, n.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)",
                ),
              );
          break;
        case Ve.EVENT:
        case Ve.BINARY_EVENT:
          this.onevent(n);
          break;
        case Ve.ACK:
        case Ve.BINARY_ACK:
          this.onack(n);
          break;
        case Ve.DISCONNECT:
          this.ondisconnect();
          break;
        case Ve.CONNECT_ERROR:
          this.destroy();
          const s = new Error(n.data.message);
          (s.data = n.data.data), this.emitReserved("connect_error", s);
          break;
      }
  }
  onevent(n) {
    const a = n.data || [];
    n.id != null && a.push(this.ack(n.id)),
      this.connected
        ? this.emitEvent(a)
        : this.receiveBuffer.push(Object.freeze(a));
  }
  emitEvent(n) {
    if (this._anyListeners && this._anyListeners.length) {
      const a = this._anyListeners.slice();
      for (const s of a) s.apply(this, n);
    }
    super.emit.apply(this, n),
      this._pid &&
        n.length &&
        typeof n[n.length - 1] == "string" &&
        (this._lastOffset = n[n.length - 1]);
  }
  ack(n) {
    const a = this;
    let s = !1;
    return function (...l) {
      s || ((s = !0), a.packet({ type: Ve.ACK, id: n, data: l }));
    };
  }
  onack(n) {
    const a = this.acks[n.id];
    typeof a == "function" &&
      (delete this.acks[n.id],
      a.withError && n.data.unshift(null),
      a.apply(this, n.data));
  }
  onconnect(n, a) {
    (this.id = n),
      (this.recovered = a && this._pid === a),
      (this._pid = a),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved("connect"),
      this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((n) => this.emitEvent(n)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((n) => {
        this.notifyOutgoingListeners(n), this.packet(n);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((n) => n()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: Ve.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(n) {
    return (this.flags.compress = n), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(n) {
    return (this.flags.timeout = n), this;
  }
  onAny(n) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(n),
      this
    );
  }
  prependAny(n) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(n),
      this
    );
  }
  offAny(n) {
    if (!this._anyListeners) return this;
    if (n) {
      const a = this._anyListeners;
      for (let s = 0; s < a.length; s++)
        if (n === a[s]) return a.splice(s, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(n) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(n),
      this
    );
  }
  prependAnyOutgoing(n) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(n),
      this
    );
  }
  offAnyOutgoing(n) {
    if (!this._anyOutgoingListeners) return this;
    if (n) {
      const a = this._anyOutgoingListeners;
      for (let s = 0; s < a.length; s++)
        if (n === a[s]) return a.splice(s, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(n) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const a = this._anyOutgoingListeners.slice();
      for (const s of a) s.apply(this, n.data);
    }
  }
}
function rs(t) {
  (t = t || {}),
    (this.ms = t.min || 100),
    (this.max = t.max || 1e4),
    (this.factor = t.factor || 2),
    (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
    (this.attempts = 0);
}
rs.prototype.duration = function () {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var n = Math.random(),
      a = Math.floor(n * this.jitter * t);
    t = (Math.floor(n * 10) & 1) == 0 ? t - a : t + a;
  }
  return Math.min(t, this.max) | 0;
};
rs.prototype.reset = function () {
  this.attempts = 0;
};
rs.prototype.setMin = function (t) {
  this.ms = t;
};
rs.prototype.setMax = function (t) {
  this.max = t;
};
rs.prototype.setJitter = function (t) {
  this.jitter = t;
};
class Th extends Tt {
  constructor(n, a) {
    var s;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      n && typeof n == "object" && ((a = n), (n = void 0)),
      (a = a || {}),
      (a.path = a.path || "/socket.io"),
      (this.opts = a),
      fc(this, a),
      this.reconnection(a.reconnection !== !1),
      this.reconnectionAttempts(a.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(a.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(a.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (s = a.randomizationFactor) !== null && s !== void 0 ? s : 0.5,
      ),
      (this.backoff = new rs({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(a.timeout == null ? 2e4 : a.timeout),
      (this._readyState = "closed"),
      (this.uri = n);
    const l = a.parser || zT;
    (this.encoder = new l.Encoder()),
      (this.decoder = new l.Decoder()),
      (this._autoConnect = a.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(n) {
    return arguments.length
      ? ((this._reconnection = !!n), n || (this.skipReconnect = !0), this)
      : this._reconnection;
  }
  reconnectionAttempts(n) {
    return n === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = n), this);
  }
  reconnectionDelay(n) {
    var a;
    return n === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = n),
        (a = this.backoff) === null || a === void 0 || a.setMin(n),
        this);
  }
  randomizationFactor(n) {
    var a;
    return n === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = n),
        (a = this.backoff) === null || a === void 0 || a.setJitter(n),
        this);
  }
  reconnectionDelayMax(n) {
    var a;
    return n === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = n),
        (a = this.backoff) === null || a === void 0 || a.setMax(n),
        this);
  }
  timeout(n) {
    return arguments.length ? ((this._timeout = n), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(n) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new AT(this.uri, this.opts);
    const a = this.engine,
      s = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const l = ni(a, "open", function () {
        s.onopen(), n && n();
      }),
      c = (d) => {
        this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", d),
          n ? n(d) : this.maybeReconnectOnOpen();
      },
      f = ni(a, "error", c);
    if (this._timeout !== !1) {
      const d = this._timeout,
        x = this.setTimeoutFn(() => {
          l(), c(new Error("timeout")), a.close();
        }, d);
      this.opts.autoUnref && x.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(x);
        });
    }
    return this.subs.push(l), this.subs.push(f), this;
  }
  connect(n) {
    return this.open(n);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const n = this.engine;
    this.subs.push(
      ni(n, "ping", this.onping.bind(this)),
      ni(n, "data", this.ondata.bind(this)),
      ni(n, "error", this.onerror.bind(this)),
      ni(n, "close", this.onclose.bind(this)),
      ni(this.decoder, "decoded", this.ondecoded.bind(this)),
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(n) {
    try {
      this.decoder.add(n);
    } catch (a) {
      this.onclose("parse error", a);
    }
  }
  ondecoded(n) {
    cc(() => {
      this.emitReserved("packet", n);
    }, this.setTimeoutFn);
  }
  onerror(n) {
    this.emitReserved("error", n);
  }
  socket(n, a) {
    let s = this.nsps[n];
    return (
      s
        ? this._autoConnect && !s.active && s.connect()
        : ((s = new O4(this, n, a)), (this.nsps[n] = s)),
      s
    );
  }
  _destroy(n) {
    const a = Object.keys(this.nsps);
    for (const s of a) if (this.nsps[s].active) return;
    this._close();
  }
  _packet(n) {
    const a = this.encoder.encode(n);
    for (let s = 0; s < a.length; s++) this.engine.write(a[s], n.options);
  }
  cleanup() {
    this.subs.forEach((n) => n()),
      (this.subs.length = 0),
      this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close");
  }
  disconnect() {
    return this._close();
  }
  onclose(n, a) {
    var s;
    this.cleanup(),
      (s = this.engine) === null || s === void 0 || s.close(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", n, a),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const n = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1);
    else {
      const a = this.backoff.duration();
      this._reconnecting = !0;
      const s = this.setTimeoutFn(() => {
        n.skipReconnect ||
          (this.emitReserved("reconnect_attempt", n.backoff.attempts),
          !n.skipReconnect &&
            n.open((l) => {
              l
                ? ((n._reconnecting = !1),
                  n.reconnect(),
                  this.emitReserved("reconnect_error", l))
                : n.onreconnect();
            }));
      }, a);
      this.opts.autoUnref && s.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(s);
        });
    }
  }
  onreconnect() {
    const n = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", n);
  }
}
const ao = {};
function Zf(t, n) {
  typeof t == "object" && ((n = t), (t = void 0)), (n = n || {});
  const a = ST(t, n.path || "/socket.io"),
    s = a.source,
    l = a.id,
    c = a.path,
    f = ao[l] && c in ao[l].nsps,
    d = n.forceNew || n["force new connection"] || n.multiplex === !1 || f;
  let x;
  return (
    d ? (x = new Th(s, n)) : (ao[l] || (ao[l] = new Th(s, n)), (x = ao[l])),
    a.query && !n.query && (n.query = a.queryKey),
    x.socket(a.path, n)
  );
}
Object.assign(Zf, { Manager: Th, Socket: O4, io: Zf, connect: Zf });
export {
  Zf as $,
  z7 as A,
  GT as B,
  ZT as C,
  a7 as D,
  IT as E,
  o7 as F,
  XT as G,
  l7 as H,
  c7 as I,
  S7 as J,
  i7 as K,
  f7 as L,
  h7 as M,
  g7 as N,
  e7 as O,
  p7 as P,
  t7 as Q,
  UT as R,
  A7 as S,
  $T as T,
  T7 as U,
  WT as V,
  r7 as W,
  M7 as X,
  y7 as Y,
  O7 as Z,
  HT as _,
  GE as a,
  QT as a0,
  R7 as a1,
  C7 as a2,
  w7 as a3,
  qT as b,
  VT as c,
  F7 as d,
  Rt as e,
  _7 as f,
  KT as g,
  s7 as h,
  E7 as i,
  Hi as j,
  B7 as k,
  YT as l,
  N7 as m,
  u7 as n,
  v7 as o,
  x7 as p,
  m7 as q,
  $ as r,
  JT as s,
  jT as t,
  kT as u,
  b7 as v,
  n7 as w,
  D7 as x,
  d7 as y,
  PT as z,
};
