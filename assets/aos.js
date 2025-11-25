var Ub = Object.defineProperty,
  zb = Object.defineProperties;
var Nb = Object.getOwnPropertyDescriptors;
var zl = Object.getOwnPropertySymbols;
var Km = Object.prototype.hasOwnProperty,
  Qm = Object.prototype.propertyIsEnumerable;
var ka = (t, n) => ((n = Symbol[t]) ? n : Symbol.for("Symbol." + t)),
  Hb = (t) => {
    throw TypeError(t);
  };
var Gm = (t, n, r) =>
    n in t
      ? Ub(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[n] = r),
  ue = (t, n) => {
    for (var r in n || (n = {})) Km.call(n, r) && Gm(t, r, n[r]);
    if (zl) for (var r of zl(n)) Qm.call(n, r) && Gm(t, r, n[r]);
    return t;
  },
  ze = (t, n) => zb(t, Nb(n));
var zn = (t, n) => {
  var r = {};
  for (var s in t) Km.call(t, s) && n.indexOf(s) < 0 && (r[s] = t[s]);
  if (t != null && zl)
    for (var s of zl(t)) n.indexOf(s) < 0 && Qm.call(t, s) && (r[s] = t[s]);
  return r;
};
var Gr = function (t, n) {
    (this[0] = t), (this[1] = n);
  },
  pf = (t, n, r) => {
    var s = (f, p, x, h) => {
        try {
          var m = r[f](p),
            v = (p = m.value) instanceof Gr,
            y = m.done;
          Promise.resolve(v ? p[0] : p)
            .then((g) =>
              v
                ? s(
                    f === "return" ? f : "next",
                    p[1] ? { done: g.done, value: g.value } : g,
                    x,
                    h,
                  )
                : x({ value: g, done: y }),
            )
            .catch((g) => s("throw", g, x, h));
        } catch (g) {
          h(g);
        }
      },
      l = (f) => (c[f] = (p) => new Promise((x, h) => s(f, p, x, h))),
      c = {};
    return (
      (r = r.apply(t, n)),
      (c[ka("asyncIterator")] = () => c),
      l("next"),
      l("throw"),
      l("return"),
      c
    );
  },
  xf = (t) => {
    var n = t[ka("asyncIterator")],
      r = !1,
      s,
      l = {};
    return (
      n == null
        ? ((n = t[ka("iterator")]()), (s = (c) => (l[c] = (f) => n[c](f))))
        : ((n = n.call(t)),
          (s = (c) =>
            (l[c] = (f) => {
              if (r) {
                if (((r = !1), c === "throw")) throw f;
                return f;
              }
              return (
                (r = !0),
                {
                  done: !1,
                  value: new Gr(
                    new Promise((p) => {
                      var x = n[c](f);
                      x instanceof Object || Hb("Object expected"), p(x);
                    }),
                    1,
                  ),
                }
              );
            }))),
      (l[ka("iterator")] = () => l),
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
  Zm = (t, n, r) =>
    (n = t[ka("asyncIterator")])
      ? n.call(t)
      : ((t = t[ka("iterator")]()),
        (n = {}),
        (r = (s, l) =>
          (l = t[s]) &&
          (n[s] = (c) =>
            new Promise(
              (f, p, x) => (
                (c = l.call(t, c)),
                (x = c.done),
                Promise.resolve(c.value).then(
                  (h) => f({ value: h, done: x }),
                  p,
                )
              ),
            ))),
        r("next"),
        r("return"),
        n);
function Xy(t, n) {
  for (var r = 0; r < n.length; r++) {
    const s = n[r];
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
var mf =
  typeof globalThis != "undefined"
    ? globalThis
    : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
        ? global
        : typeof self != "undefined"
          ? self
          : {};
function Zu(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function Vb(t) {
  if (Object.prototype.hasOwnProperty.call(t, "__esModule")) return t;
  var n = t.default;
  if (typeof n == "function") {
    var r = function s() {
      return this instanceof s
        ? Reflect.construct(n, arguments, this.constructor)
        : n.apply(this, arguments);
    };
    r.prototype = n.prototype;
  } else r = {};
  return (
    Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.keys(t).forEach(function (s) {
      var l = Object.getOwnPropertyDescriptor(t, s);
      Object.defineProperty(
        r,
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
    r
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
 */ var Wm;
function kb() {
  if (Wm) return Ws;
  Wm = 1;
  var t = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.fragment");
  function r(s, l, c) {
    var f = null;
    if (
      (c !== void 0 && (f = "" + c),
      l.key !== void 0 && (f = "" + l.key),
      "key" in l)
    ) {
      c = {};
      for (var p in l) p !== "key" && (c[p] = l[p]);
    } else c = l;
    return (
      (l = c.ref),
      { $$typeof: t, type: s, key: f, ref: l !== void 0 ? l : null, props: c }
    );
  }
  return (Ws.Fragment = n), (Ws.jsx = r), (Ws.jsxs = r), Ws;
}
var $m;
function qb() {
  return $m || (($m = 1), (vf.exports = kb())), vf.exports;
}
var Hi = qb(),
  yf = { exports: {} },
  we = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jm;
function jb() {
  if (Jm) return we;
  Jm = 1;
  var t = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    x = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    m = Symbol.for("react.lazy"),
    v = Symbol.iterator;
  function y(F) {
    return F === null || typeof F != "object"
      ? null
      : ((F = (v && F[v]) || F["@@iterator"]),
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
  function A(F, z, X) {
    (this.props = F),
      (this.context = z),
      (this.refs = S),
      (this.updater = X || g);
  }
  (A.prototype.isReactComponent = {}),
    (A.prototype.setState = function (F, z) {
      if (typeof F != "object" && typeof F != "function" && F != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, F, z, "setState");
    }),
    (A.prototype.forceUpdate = function (F) {
      this.updater.enqueueForceUpdate(this, F, "forceUpdate");
    });
  function R() {}
  R.prototype = A.prototype;
  function C(F, z, X) {
    (this.props = F),
      (this.context = z),
      (this.refs = S),
      (this.updater = X || g);
  }
  var D = (C.prototype = new R());
  (D.constructor = C), b(D, A.prototype), (D.isPureReactComponent = !0);
  var _ = Array.isArray,
    w = { H: null, A: null, T: null, S: null },
    L = Object.prototype.hasOwnProperty;
  function T(F, z, X, K, P, pe) {
    return (
      (X = pe.ref),
      { $$typeof: t, type: F, key: z, ref: X !== void 0 ? X : null, props: pe }
    );
  }
  function U(F, z) {
    return T(F.type, z, void 0, void 0, void 0, F.props);
  }
  function q(F) {
    return typeof F == "object" && F !== null && F.$$typeof === t;
  }
  function O(F) {
    var z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      F.replace(/[=:]/g, function (X) {
        return z[X];
      })
    );
  }
  var j = /\/+/g;
  function $(F, z) {
    return typeof F == "object" && F !== null && F.key != null
      ? O("" + F.key)
      : z.toString(36);
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
                function (z) {
                  F.status === "pending" &&
                    ((F.status = "fulfilled"), (F.value = z));
                },
                function (z) {
                  F.status === "pending" &&
                    ((F.status = "rejected"), (F.reason = z));
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
  function ce(F, z, X, K, P) {
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
              return (xe = F._init), ce(xe(F._payload), z, X, K, P);
          }
      }
    if (xe)
      return (
        (P = P(F)),
        (xe = K === "" ? "." + $(F, 0) : K),
        _(P)
          ? ((X = ""),
            xe != null && (X = xe.replace(j, "$&/") + "/"),
            ce(P, z, X, "", function ($e) {
              return $e;
            }))
          : P != null &&
            (q(P) &&
              (P = U(
                P,
                X +
                  (P.key == null || (F && F.key === P.key)
                    ? ""
                    : ("" + P.key).replace(j, "$&/") + "/") +
                  xe,
              )),
            z.push(P)),
        1
      );
    xe = 0;
    var Me = K === "" ? "." : K + ":";
    if (_(F))
      for (var me = 0; me < F.length; me++)
        (K = F[me]), (pe = Me + $(K, me)), (xe += ce(K, z, X, pe, P));
    else if (((me = y(F)), typeof me == "function"))
      for (F = me.call(F), me = 0; !(K = F.next()).done; )
        (K = K.value), (pe = Me + $(K, me++)), (xe += ce(K, z, X, pe, P));
    else if (pe === "object") {
      if (typeof F.then == "function") return ce(le(F), z, X, K, P);
      throw (
        ((z = String(F)),
        Error(
          "Objects are not valid as a React child (found: " +
            (z === "[object Object]"
              ? "object with keys {" + Object.keys(F).join(", ") + "}"
              : z) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return xe;
  }
  function ee(F, z, X) {
    if (F == null) return F;
    var K = [],
      P = 0;
    return (
      ce(F, K, "", "", function (pe) {
        return z.call(X, pe, P++);
      }),
      K
    );
  }
  function oe(F) {
    if (F._status === -1) {
      var z = F._result;
      (z = z()),
        z.then(
          function (X) {
            (F._status === 0 || F._status === -1) &&
              ((F._status = 1), (F._result = X));
          },
          function (X) {
            (F._status === 0 || F._status === -1) &&
              ((F._status = 2), (F._result = X));
          },
        ),
        F._status === -1 && ((F._status = 0), (F._result = z));
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
            var z = new window.ErrorEvent("error", {
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
            if (!window.dispatchEvent(z)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", F);
            return;
          }
          console.error(F);
        };
  function ye() {}
  return (
    (we.Children = {
      map: ee,
      forEach: function (F, z, X) {
        ee(
          F,
          function () {
            z.apply(this, arguments);
          },
          X,
        );
      },
      count: function (F) {
        var z = 0;
        return (
          ee(F, function () {
            z++;
          }),
          z
        );
      },
      toArray: function (F) {
        return (
          ee(F, function (z) {
            return z;
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
    (we.Component = A),
    (we.Fragment = r),
    (we.Profiler = l),
    (we.PureComponent = C),
    (we.StrictMode = s),
    (we.Suspense = x),
    (we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
    (we.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (we.cache = function (F) {
      return function () {
        return F.apply(null, arguments);
      };
    }),
    (we.cloneElement = function (F, z, X) {
      if (F == null)
        throw Error(
          "The argument must be a React element, but you passed " + F + ".",
        );
      var K = b({}, F.props),
        P = F.key,
        pe = void 0;
      if (z != null)
        for (xe in (z.ref !== void 0 && (pe = void 0),
        z.key !== void 0 && (P = "" + z.key),
        z))
          !L.call(z, xe) ||
            xe === "key" ||
            xe === "__self" ||
            xe === "__source" ||
            (xe === "ref" && z.ref === void 0) ||
            (K[xe] = z[xe]);
      var xe = arguments.length - 2;
      if (xe === 1) K.children = X;
      else if (1 < xe) {
        for (var Me = Array(xe), me = 0; me < xe; me++)
          Me[me] = arguments[me + 2];
        K.children = Me;
      }
      return T(F.type, P, void 0, void 0, pe, K);
    }),
    (we.createContext = function (F) {
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
    (we.createElement = function (F, z, X) {
      var K,
        P = {},
        pe = null;
      if (z != null)
        for (K in (z.key !== void 0 && (pe = "" + z.key), z))
          L.call(z, K) &&
            K !== "key" &&
            K !== "__self" &&
            K !== "__source" &&
            (P[K] = z[K]);
      var xe = arguments.length - 2;
      if (xe === 1) P.children = X;
      else if (1 < xe) {
        for (var Me = Array(xe), me = 0; me < xe; me++)
          Me[me] = arguments[me + 2];
        P.children = Me;
      }
      if (F && F.defaultProps)
        for (K in ((xe = F.defaultProps), xe))
          P[K] === void 0 && (P[K] = xe[K]);
      return T(F, pe, void 0, void 0, null, P);
    }),
    (we.createRef = function () {
      return { current: null };
    }),
    (we.forwardRef = function (F) {
      return { $$typeof: p, render: F };
    }),
    (we.isValidElement = q),
    (we.lazy = function (F) {
      return { $$typeof: m, _payload: { _status: -1, _result: F }, _init: oe };
    }),
    (we.memo = function (F, z) {
      return { $$typeof: h, type: F, compare: z === void 0 ? null : z };
    }),
    (we.startTransition = function (F) {
      var z = w.T,
        X = {};
      w.T = X;
      try {
        var K = F(),
          P = w.S;
        P !== null && P(X, K),
          typeof K == "object" &&
            K !== null &&
            typeof K.then == "function" &&
            K.then(ye, ie);
      } catch (pe) {
        ie(pe);
      } finally {
        w.T = z;
      }
    }),
    (we.unstable_useCacheRefresh = function () {
      return w.H.useCacheRefresh();
    }),
    (we.use = function (F) {
      return w.H.use(F);
    }),
    (we.useActionState = function (F, z, X) {
      return w.H.useActionState(F, z, X);
    }),
    (we.useCallback = function (F, z) {
      return w.H.useCallback(F, z);
    }),
    (we.useContext = function (F) {
      return w.H.useContext(F);
    }),
    (we.useDebugValue = function () {}),
    (we.useDeferredValue = function (F, z) {
      return w.H.useDeferredValue(F, z);
    }),
    (we.useEffect = function (F, z) {
      return w.H.useEffect(F, z);
    }),
    (we.useId = function () {
      return w.H.useId();
    }),
    (we.useImperativeHandle = function (F, z, X) {
      return w.H.useImperativeHandle(F, z, X);
    }),
    (we.useInsertionEffect = function (F, z) {
      return w.H.useInsertionEffect(F, z);
    }),
    (we.useLayoutEffect = function (F, z) {
      return w.H.useLayoutEffect(F, z);
    }),
    (we.useMemo = function (F, z) {
      return w.H.useMemo(F, z);
    }),
    (we.useOptimistic = function (F, z) {
      return w.H.useOptimistic(F, z);
    }),
    (we.useReducer = function (F, z, X) {
      return w.H.useReducer(F, z, X);
    }),
    (we.useRef = function (F) {
      return w.H.useRef(F);
    }),
    (we.useState = function (F) {
      return w.H.useState(F);
    }),
    (we.useSyncExternalStore = function (F, z, X) {
      return w.H.useSyncExternalStore(F, z, X);
    }),
    (we.useTransition = function () {
      return w.H.useTransition();
    }),
    (we.version = "19.0.0"),
    we
  );
}
var Im;
function _h() {
  return Im || ((Im = 1), (yf.exports = jb())), yf.exports;
}
var J = _h();
const Pb = Zu(J),
  Yb = Xy({ __proto__: null, default: Pb }, [J]);
var gf = { exports: {} },
  $s = {},
  Ef = { exports: {} },
  bf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var e1;
function Xb() {
  return (
    e1 ||
      ((e1 = 1),
      (function (t) {
        function n(ee, oe) {
          var ie = ee.length;
          ee.push(oe);
          e: for (; 0 < ie; ) {
            var ye = (ie - 1) >>> 1,
              F = ee[ye];
            if (0 < l(F, oe)) (ee[ye] = oe), (ee[ie] = F), (ie = ye);
            else break e;
          }
        }
        function r(ee) {
          return ee.length === 0 ? null : ee[0];
        }
        function s(ee) {
          if (ee.length === 0) return null;
          var oe = ee[0],
            ie = ee.pop();
          if (ie !== oe) {
            ee[0] = ie;
            e: for (var ye = 0, F = ee.length, z = F >>> 1; ye < z; ) {
              var X = 2 * (ye + 1) - 1,
                K = ee[X],
                P = X + 1,
                pe = ee[P];
              if (0 > l(K, ie))
                P < F && 0 > l(pe, K)
                  ? ((ee[ye] = pe), (ee[P] = ie), (ye = P))
                  : ((ee[ye] = K), (ee[X] = ie), (ye = X));
              else if (P < F && 0 > l(pe, ie))
                (ee[ye] = pe), (ee[P] = ie), (ye = P);
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
            p = f.now();
          t.unstable_now = function () {
            return f.now() - p;
          };
        }
        var x = [],
          h = [],
          m = 1,
          v = null,
          y = 3,
          g = !1,
          b = !1,
          S = !1,
          A = typeof setTimeout == "function" ? setTimeout : null,
          R = typeof clearTimeout == "function" ? clearTimeout : null,
          C = typeof setImmediate != "undefined" ? setImmediate : null;
        function D(ee) {
          for (var oe = r(h); oe !== null; ) {
            if (oe.callback === null) s(h);
            else if (oe.startTime <= ee)
              s(h), (oe.sortIndex = oe.expirationTime), n(x, oe);
            else break;
            oe = r(h);
          }
        }
        function _(ee) {
          if (((S = !1), D(ee), !b))
            if (r(x) !== null) (b = !0), le();
            else {
              var oe = r(h);
              oe !== null && ce(_, oe.startTime - ee);
            }
        }
        var w = !1,
          L = -1,
          T = 5,
          U = -1;
        function q() {
          return !(t.unstable_now() - U < T);
        }
        function O() {
          if (w) {
            var ee = t.unstable_now();
            U = ee;
            var oe = !0;
            try {
              e: {
                (b = !1), S && ((S = !1), R(L), (L = -1)), (g = !0);
                var ie = y;
                try {
                  t: {
                    for (
                      D(ee), v = r(x);
                      v !== null && !(v.expirationTime > ee && q());

                    ) {
                      var ye = v.callback;
                      if (typeof ye == "function") {
                        (v.callback = null), (y = v.priorityLevel);
                        var F = ye(v.expirationTime <= ee);
                        if (((ee = t.unstable_now()), typeof F == "function")) {
                          (v.callback = F), D(ee), (oe = !0);
                          break t;
                        }
                        v === r(x) && s(x), D(ee);
                      } else s(x);
                      v = r(x);
                    }
                    if (v !== null) oe = !0;
                    else {
                      var z = r(h);
                      z !== null && ce(_, z.startTime - ee), (oe = !1);
                    }
                  }
                  break e;
                } finally {
                  (v = null), (y = ie), (g = !1);
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
            C(O);
          };
        else if (typeof MessageChannel != "undefined") {
          var $ = new MessageChannel(),
            I = $.port2;
          ($.port1.onmessage = O),
            (j = function () {
              I.postMessage(null);
            });
        } else
          j = function () {
            A(O, 0);
          };
        function le() {
          w || ((w = !0), j());
        }
        function ce(ee, oe) {
          L = A(function () {
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
              : (T = 0 < ee ? Math.floor(1e3 / ee) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return y;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(x);
          }),
          (t.unstable_next = function (ee) {
            switch (y) {
              case 1:
              case 2:
              case 3:
                var oe = 3;
                break;
              default:
                oe = y;
            }
            var ie = y;
            y = oe;
            try {
              return ee();
            } finally {
              y = ie;
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
            var ie = y;
            y = ee;
            try {
              return oe();
            } finally {
              y = ie;
            }
          }),
          (t.unstable_scheduleCallback = function (ee, oe, ie) {
            var ye = t.unstable_now();
            switch (
              (typeof ie == "object" && ie !== null
                ? ((ie = ie.delay),
                  (ie = typeof ie == "number" && 0 < ie ? ye + ie : ye))
                : (ie = ye),
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
              ie > ye
                ? ((ee.sortIndex = ie),
                  n(h, ee),
                  r(x) === null &&
                    ee === r(h) &&
                    (S ? (R(L), (L = -1)) : (S = !0), ce(_, ie - ye)))
                : ((ee.sortIndex = F), n(x, ee), b || g || ((b = !0), le())),
              ee
            );
          }),
          (t.unstable_shouldYield = q),
          (t.unstable_wrapCallback = function (ee) {
            var oe = y;
            return function () {
              var ie = y;
              y = oe;
              try {
                return ee.apply(this, arguments);
              } finally {
                y = ie;
              }
            };
          });
      })(bf)),
    bf
  );
}
var t1;
function Gb() {
  return t1 || ((t1 = 1), (Ef.exports = Xb())), Ef.exports;
}
var Af = { exports: {} },
  Kt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n1;
function Kb() {
  if (n1) return Kt;
  n1 = 1;
  var t = _h();
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
  function r() {}
  var s = {
      d: {
        f: r,
        r: function () {
          throw Error(n(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    l = Symbol.for("react.portal");
  function c(x, h, m) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: v == null ? null : "" + v,
      children: x,
      containerInfo: h,
      implementation: m,
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(x, h) {
    if (x === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return (
    (Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (Kt.createPortal = function (x, h) {
      var m =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(n(299));
      return c(x, h, null, m);
    }),
    (Kt.flushSync = function (x) {
      var h = f.T,
        m = s.p;
      try {
        if (((f.T = null), (s.p = 2), x)) return x();
      } finally {
        (f.T = h), (s.p = m), s.d.f();
      }
    }),
    (Kt.preconnect = function (x, h) {
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
    (Kt.prefetchDNS = function (x) {
      typeof x == "string" && s.d.D(x);
    }),
    (Kt.preinit = function (x, h) {
      if (typeof x == "string" && h && typeof h.as == "string") {
        var m = h.as,
          v = p(m, h.crossOrigin),
          y = typeof h.integrity == "string" ? h.integrity : void 0,
          g = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        m === "style"
          ? s.d.S(x, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: v,
              integrity: y,
              fetchPriority: g,
            })
          : m === "script" &&
            s.d.X(x, {
              crossOrigin: v,
              integrity: y,
              fetchPriority: g,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
      }
    }),
    (Kt.preinitModule = function (x, h) {
      if (typeof x == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var m = p(h.as, h.crossOrigin);
            s.d.M(x, {
              crossOrigin: m,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
          }
        } else h == null && s.d.M(x);
    }),
    (Kt.preload = function (x, h) {
      if (
        typeof x == "string" &&
        typeof h == "object" &&
        h !== null &&
        typeof h.as == "string"
      ) {
        var m = h.as,
          v = p(m, h.crossOrigin);
        s.d.L(x, m, {
          crossOrigin: v,
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
    (Kt.preloadModule = function (x, h) {
      if (typeof x == "string")
        if (h) {
          var m = p(h.as, h.crossOrigin);
          s.d.m(x, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: m,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          });
        } else s.d.m(x);
    }),
    (Kt.requestFormReset = function (x) {
      s.d.r(x);
    }),
    (Kt.unstable_batchedUpdates = function (x, h) {
      return x(h);
    }),
    (Kt.useFormState = function (x, h, m) {
      return f.H.useFormState(x, h, m);
    }),
    (Kt.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (Kt.version = "19.0.0"),
    Kt
  );
}
var i1;
function Gy() {
  if (i1) return Af.exports;
  i1 = 1;
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
  return t(), (Af.exports = Kb()), Af.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r1;
function Qb() {
  if (r1) return $s;
  r1 = 1;
  var t = Gb(),
    n = _h(),
    r = Gy();
  function s(e) {
    var i = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      i += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        i += "&args[]=" + encodeURIComponent(arguments[a]);
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
    p = Symbol.for("react.portal"),
    x = Symbol.for("react.fragment"),
    h = Symbol.for("react.strict_mode"),
    m = Symbol.for("react.profiler"),
    v = Symbol.for("react.provider"),
    y = Symbol.for("react.consumer"),
    g = Symbol.for("react.context"),
    b = Symbol.for("react.forward_ref"),
    S = Symbol.for("react.suspense"),
    A = Symbol.for("react.suspense_list"),
    R = Symbol.for("react.memo"),
    C = Symbol.for("react.lazy"),
    D = Symbol.for("react.offscreen"),
    _ = Symbol.for("react.memo_cache_sentinel"),
    w = Symbol.iterator;
  function L(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (w && e[w]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var T = Symbol.for("react.client.reference");
  function U(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === T ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case x:
        return "Fragment";
      case p:
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
        case y:
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
            (i = e.displayName || null), i !== null ? i : U(e.type) || "Memo"
          );
        case C:
          (i = e._payload), (e = e._init);
          try {
            return U(e(i));
          } catch (a) {}
      }
    return null;
  }
  var q = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    O = Object.assign,
    j,
    $;
  function I(e) {
    if (j === void 0)
      try {
        throw Error();
      } catch (a) {
        var i = a.stack.trim().match(/\n( *(at )?)/);
        (j = (i && i[1]) || ""),
          ($ =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      j +
      e +
      $
    );
  }
  var le = !1;
  function ce(e, i) {
    if (!e || le) return "";
    le = !0;
    var a = Error.prepareStackTrace;
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
                  var Z = te;
                }
                Reflect.construct(e, [], se);
              } else {
                try {
                  se.call();
                } catch (te) {
                  Z = te;
                }
                e.call(se.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (te) {
                Z = te;
              }
              (se = e()) &&
                typeof se.catch == "function" &&
                se.catch(function () {});
            }
          } catch (te) {
            if (te && Z && typeof te.stack == "string")
              return [te.stack, Z.stack];
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
      var d = o.DetermineComponentFrameRoot(),
        E = d[0],
        B = d[1];
      if (E && B) {
        var M = E.split(`
`),
          k = B.split(`
`);
        for (
          u = o = 0;
          o < M.length && !M[o].includes("DetermineComponentFrameRoot");

        )
          o++;
        for (; u < k.length && !k[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (o === M.length || u === k.length)
          for (
            o = M.length - 1, u = k.length - 1;
            1 <= o && 0 <= u && M[o] !== k[u];

          )
            u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (M[o] !== k[u]) {
            if (o !== 1 || u !== 1)
              do
                if ((o--, u--, 0 > u || M[o] !== k[u])) {
                  var ne =
                    `
` + M[o].replace(" at new ", " at ");
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
      (le = !1), (Error.prepareStackTrace = a);
    }
    return (a = e ? e.displayName || e.name : "") ? I(a) : "";
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
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function ie(e) {
    var i = e,
      a = e;
    if (e.alternate) for (; i.return; ) i = i.return;
    else {
      e = i;
      do (i = e), (i.flags & 4098) !== 0 && (a = i.return), (e = i.return);
      while (e);
    }
    return i.tag === 3 ? a : null;
  }
  function ye(e) {
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
  function z(e) {
    var i = e.alternate;
    if (!i) {
      if (((i = ie(e)), i === null)) throw Error(s(188));
      return i !== e ? null : e;
    }
    for (var a = e, o = i; ; ) {
      var u = a.return;
      if (u === null) break;
      var d = u.alternate;
      if (d === null) {
        if (((o = u.return), o !== null)) {
          a = o;
          continue;
        }
        break;
      }
      if (u.child === d.child) {
        for (d = u.child; d; ) {
          if (d === a) return F(u), e;
          if (d === o) return F(u), i;
          d = d.sibling;
        }
        throw Error(s(188));
      }
      if (a.return !== o.return) (a = u), (o = d);
      else {
        for (var E = !1, B = u.child; B; ) {
          if (B === a) {
            (E = !0), (a = u), (o = d);
            break;
          }
          if (B === o) {
            (E = !0), (o = u), (a = d);
            break;
          }
          B = B.sibling;
        }
        if (!E) {
          for (B = d.child; B; ) {
            if (B === a) {
              (E = !0), (a = d), (o = u);
              break;
            }
            if (B === o) {
              (E = !0), (o = d), (a = u);
              break;
            }
            B = B.sibling;
          }
          if (!E) throw Error(s(189));
        }
      }
      if (a.alternate !== o) throw Error(s(190));
    }
    if (a.tag !== 3) throw Error(s(188));
    return a.stateNode.current === a ? e : i;
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
    P = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    pe = { pending: !1, data: null, method: null, action: null },
    xe = [],
    Me = -1;
  function me(e) {
    return { current: e };
  }
  function $e(e) {
    0 > Me || ((e.current = xe[Me]), (xe[Me] = null), Me--);
  }
  function Ye(e, i) {
    Me++, (xe[Me] = e.current), (e.current = i);
  }
  var jt = me(null),
    et = me(null),
    tt = me(null),
    vt = me(null);
  function jn(e, i) {
    switch ((Ye(tt, i), Ye(et, e), Ye(jt, null), (e = i.nodeType), e)) {
      case 9:
      case 11:
        i = (i = i.documentElement) && (i = i.namespaceURI) ? bm(i) : 0;
        break;
      default:
        if (
          ((e = e === 8 ? i.parentNode : i),
          (i = e.tagName),
          (e = e.namespaceURI))
        )
          (e = bm(e)), (i = Am(e, i));
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
    $e(jt), Ye(jt, i);
  }
  function Et() {
    $e(jt), $e(et), $e(tt);
  }
  function ii(e) {
    e.memoizedState !== null && Ye(vt, e);
    var i = jt.current,
      a = Am(i, e.type);
    i !== a && (Ye(et, e), Ye(jt, a));
  }
  function En(e) {
    et.current === e && ($e(jt), $e(et)),
      vt.current === e && ($e(vt), (Xs._currentValue = pe));
  }
  var ri = Object.prototype.hasOwnProperty,
    Pn = t.unstable_scheduleCallback,
    zt = t.unstable_cancelCallback,
    Pt = t.unstable_shouldYield,
    bn = t.unstable_requestPaint,
    ut = t.unstable_now,
    ai = t.unstable_getCurrentPriorityLevel,
    An = t.unstable_ImmediatePriority,
    Sn = t.unstable_UserBlockingPriority,
    Wt = t.unstable_NormalPriority,
    tn = t.unstable_LowPriority,
    qi = t.unstable_IdlePriority,
    fn = t.log,
    mi = t.unstable_setDisableYieldValue,
    Yt = null,
    Rt = null;
  function Ar(e) {
    if (Rt && typeof Rt.onCommitFiberRoot == "function")
      try {
        Rt.onCommitFiberRoot(Yt, e, void 0, (e.current.flags & 128) === 128);
      } catch (i) {}
  }
  function hn(e) {
    if (
      (typeof fn == "function" && mi(e),
      Rt && typeof Rt.setStrictMode == "function")
    )
      try {
        Rt.setStrictMode(Yt, e);
      } catch (i) {}
  }
  var Nt = Math.clz32 ? Math.clz32 : Cr,
    Sr = Math.log,
    ji = Math.LN2;
  function Cr(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Sr(e) / ji) | 0)) | 0;
  }
  var si = 128,
    Yn = 4194304;
  function Xn(e) {
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
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var o = 0,
      u = e.suspendedLanes,
      d = e.pingedLanes,
      E = e.warmLanes;
    e = e.finishedLanes !== 0;
    var B = a & 134217727;
    return (
      B !== 0
        ? ((a = B & ~u),
          a !== 0
            ? (o = Xn(a))
            : ((d &= B),
              d !== 0
                ? (o = Xn(d))
                : e || ((E = B & ~E), E !== 0 && (o = Xn(E)))))
        : ((B = a & ~u),
          B !== 0
            ? (o = Xn(B))
            : d !== 0
              ? (o = Xn(d))
              : e || ((E = a & ~E), E !== 0 && (o = Xn(E)))),
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
  function yi(e, i) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & i) === 0;
  }
  function Dr(e, i) {
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
  function gi() {
    var e = si;
    return (si <<= 1), (si & 4194176) === 0 && (si = 128), e;
  }
  function Ei() {
    var e = Yn;
    return (Yn <<= 1), (Yn & 62914560) === 0 && (Yn = 4194304), e;
  }
  function Pi(e) {
    for (var i = [], a = 0; 31 > a; a++) i.push(e);
    return i;
  }
  function bi(e, i) {
    (e.pendingLanes |= i),
      i !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function N(e, i, a, o, u, d) {
    var E = e.pendingLanes;
    (e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0);
    var B = e.entanglements,
      M = e.expirationTimes,
      k = e.hiddenUpdates;
    for (a = E & ~a; 0 < a; ) {
      var ne = 31 - Nt(a),
        se = 1 << ne;
      (B[ne] = 0), (M[ne] = -1);
      var Z = k[ne];
      if (Z !== null)
        for (k[ne] = null, ne = 0; ne < Z.length; ne++) {
          var te = Z[ne];
          te !== null && (te.lane &= -536870913);
        }
      a &= ~se;
    }
    o !== 0 && V(e, o, 0),
      d !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(E & ~i));
  }
  function V(e, i, a) {
    (e.pendingLanes |= i), (e.suspendedLanes &= ~i);
    var o = 31 - Nt(i);
    (e.entangledLanes |= i),
      (e.entanglements[o] = e.entanglements[o] | 1073741824 | (a & 4194218));
  }
  function Q(e, i) {
    var a = (e.entangledLanes |= i);
    for (e = e.entanglements; a; ) {
      var o = 31 - Nt(a),
        u = 1 << o;
      (u & i) | (e[o] & i) && (e[o] |= i), (a &= ~u);
    }
  }
  function ae(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function fe() {
    var e = P.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : km(e.type));
  }
  function Ae(e, i) {
    var a = P.p;
    try {
      return (P.p = e), i();
    } finally {
      P.p = a;
    }
  }
  var Ce = Math.random().toString(36).slice(2),
    he = "__reactFiber$" + Ce,
    de = "__reactProps$" + Ce,
    ve = "__reactContainer$" + Ce,
    Ee = "__reactEvents$" + Ce,
    _e = "__reactListeners$" + Ce,
    Ue = "__reactHandles$" + Ce,
    bt = "__reactResources$" + Ce,
    Xe = "__reactMarker$" + Ce;
  function Ne(e) {
    delete e[he], delete e[de], delete e[Ee], delete e[_e], delete e[Ue];
  }
  function Qe(e) {
    var i = e[he];
    if (i) return i;
    for (var a = e.parentNode; a; ) {
      if ((i = a[ve] || a[he])) {
        if (
          ((a = i.alternate),
          i.child !== null || (a !== null && a.child !== null))
        )
          for (e = Dm(e); e !== null; ) {
            if ((a = e[he])) return a;
            e = Dm(e);
          }
        return i;
      }
      (e = a), (a = e.parentNode);
    }
    return null;
  }
  function dn(e) {
    if ((e = e[he] || e[ve])) {
      var i = e.tag;
      if (i === 5 || i === 6 || i === 13 || i === 26 || i === 27 || i === 3)
        return e;
    }
    return null;
  }
  function Gn(e) {
    var i = e.tag;
    if (i === 5 || i === 26 || i === 27 || i === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Xt(e) {
    var i = e[bt];
    return (
      i ||
        (i = e[bt] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      i
    );
  }
  function Ze(e) {
    e[Xe] = !0;
  }
  var la = new Set(),
    Yi = {};
  function $t(e, i) {
    Kn(e, i), Kn(e + "Capture", i);
  }
  function Kn(e, i) {
    for (Yi[e] = i, e = 0; e < i.length; e++) la.add(i[e]);
  }
  var nn = !(
      typeof window == "undefined" ||
      typeof window.document == "undefined" ||
      typeof window.document.createElement == "undefined"
    ),
    je = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    at = {},
    Ai = {};
  function Br(e) {
    return ri.call(Ai, e)
      ? !0
      : ri.call(at, e)
        ? !1
        : je.test(e)
          ? (Ai[e] = !0)
          : ((at[e] = !0), !1);
  }
  function st(e, i, a) {
    if (Br(i))
      if (a === null) e.removeAttribute(i);
      else {
        switch (typeof a) {
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
        e.setAttribute(i, "" + a);
      }
  }
  function Qn(e, i, a) {
    if (a === null) e.removeAttribute(i);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(i);
          return;
      }
      e.setAttribute(i, "" + a);
    }
  }
  function Cn(e, i, a, o) {
    if (o === null) e.removeAttribute(a);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(i, a, "" + o);
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
  function Cd(e) {
    var i = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (i === "checkbox" || i === "radio")
    );
  }
  function wE(e) {
    var i = Cd(e) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(e.constructor.prototype, i),
      o = "" + e[i];
    if (
      !e.hasOwnProperty(i) &&
      typeof a != "undefined" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var u = a.get,
        d = a.set;
      return (
        Object.defineProperty(e, i, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (E) {
            (o = "" + E), d.call(this, E);
          },
        }),
        Object.defineProperty(e, i, { enumerable: a.enumerable }),
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
    e._valueTracker || (e._valueTracker = wE(e));
  }
  function Dd(e) {
    if (!e) return !1;
    var i = e._valueTracker;
    if (!i) return !0;
    var a = i.getValue(),
      o = "";
    return (
      e && (o = Cd(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== a ? (i.setValue(e), !0) : !1
    );
  }
  function Mo(e) {
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
  var OE = /[\n"\\]/g;
  function Dn(e) {
    return e.replace(OE, function (i) {
      return "\\" + i.charCodeAt(0).toString(16) + " ";
    });
  }
  function fc(e, i, a, o, u, d, E, B) {
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
        ? hc(e, E, rn(i))
        : a != null
          ? hc(e, E, rn(a))
          : o != null && e.removeAttribute("value"),
      u == null && d != null && (e.defaultChecked = !!d),
      u != null &&
        (e.checked = u && typeof u != "function" && typeof u != "symbol"),
      B != null &&
      typeof B != "function" &&
      typeof B != "symbol" &&
      typeof B != "boolean"
        ? (e.name = "" + rn(B))
        : e.removeAttribute("name");
  }
  function Bd(e, i, a, o, u, d, E, B) {
    if (
      (d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (e.type = d),
      i != null || a != null)
    ) {
      if (!((d !== "submit" && d !== "reset") || i != null)) return;
      (a = a != null ? "" + rn(a) : ""),
        (i = i != null ? "" + rn(i) : a),
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
  function hc(e, i, a) {
    (i === "number" && Mo(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function ua(e, i, a, o) {
    if (((e = e.options), i)) {
      i = {};
      for (var u = 0; u < a.length; u++) i["$" + a[u]] = !0;
      for (a = 0; a < e.length; a++)
        (u = i.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== u && (e[a].selected = u),
          u && o && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + rn(a), i = null, u = 0; u < e.length; u++) {
        if (e[u].value === a) {
          (e[u].selected = !0), o && (e[u].defaultSelected = !0);
          return;
        }
        i !== null || e[u].disabled || (i = e[u]);
      }
      i !== null && (i.selected = !0);
    }
  }
  function Td(e, i, a) {
    if (
      i != null &&
      ((i = "" + rn(i)), i !== e.value && (e.value = i), a == null)
    ) {
      e.defaultValue !== i && (e.defaultValue = i);
      return;
    }
    e.defaultValue = a != null ? "" + rn(a) : "";
  }
  function _d(e, i, a, o) {
    if (i == null) {
      if (o != null) {
        if (a != null) throw Error(s(92));
        if (K(o)) {
          if (1 < o.length) throw Error(s(93));
          o = o[0];
        }
        a = o;
      }
      a == null && (a = ""), (i = a);
    }
    (a = rn(i)),
      (e.defaultValue = a),
      (o = e.textContent),
      o === a && o !== "" && o !== null && (e.value = o);
  }
  function ca(e, i) {
    if (i) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = i;
        return;
      }
    }
    e.textContent = i;
  }
  var ME = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Rd(e, i, a) {
    var o = i.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? o
        ? e.setProperty(i, "")
        : i === "float"
          ? (e.cssFloat = "")
          : (e[i] = "")
      : o
        ? e.setProperty(i, a)
        : typeof a != "number" || a === 0 || ME.has(i)
          ? i === "float"
            ? (e.cssFloat = a)
            : (e[i] = ("" + a).trim())
          : (e[i] = a + "px");
  }
  function wd(e, i, a) {
    if (i != null && typeof i != "object") throw Error(s(62));
    if (((e = e.style), a != null)) {
      for (var o in a)
        !a.hasOwnProperty(o) ||
          (i != null && i.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? e.setProperty(o, "")
            : o === "float"
              ? (e.cssFloat = "")
              : (e[o] = ""));
      for (var u in i)
        (o = i[u]), i.hasOwnProperty(u) && a[u] !== o && Rd(e, u, o);
    } else for (var d in i) i.hasOwnProperty(d) && Rd(e, d, i[d]);
  }
  function dc(e) {
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
  var FE = new Map([
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
    LE =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Fo(e) {
    return LE.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var pc = null;
  function xc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var fa = null,
    ha = null;
  function Od(e) {
    var i = dn(e);
    if (i && (e = i.stateNode)) {
      var a = e[de] || null;
      e: switch (((e = i.stateNode), i.type)) {
        case "input":
          if (
            (fc(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (i = a.name),
            a.type === "radio" && i != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + Dn("" + i) + '"][type="radio"]',
              ),
                i = 0;
              i < a.length;
              i++
            ) {
              var o = a[i];
              if (o !== e && o.form === e.form) {
                var u = o[de] || null;
                if (!u) throw Error(s(90));
                fc(
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
            for (i = 0; i < a.length; i++)
              (o = a[i]), o.form === e.form && Dd(o);
          }
          break e;
        case "textarea":
          Td(e, a.value, a.defaultValue);
          break e;
        case "select":
          (i = a.value), i != null && ua(e, !!a.multiple, i, !1);
      }
    }
  }
  var mc = !1;
  function Md(e, i, a) {
    if (mc) return e(i, a);
    mc = !0;
    try {
      var o = e(i);
      return o;
    } finally {
      if (
        ((mc = !1),
        (fa !== null || ha !== null) &&
          (ml(), fa && ((i = fa), (e = ha), (ha = fa = null), Od(i), e)))
      )
        for (i = 0; i < e.length; i++) Od(e[i]);
    }
  }
  function as(e, i) {
    var a = e.stateNode;
    if (a === null) return null;
    var o = a[de] || null;
    if (o === null) return null;
    a = o[i];
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
    if (a && typeof a != "function") throw Error(s(231, i, typeof a));
    return a;
  }
  var vc = !1;
  if (nn)
    try {
      var ss = {};
      Object.defineProperty(ss, "passive", {
        get: function () {
          vc = !0;
        },
      }),
        window.addEventListener("test", ss, ss),
        window.removeEventListener("test", ss, ss);
    } catch (e) {
      vc = !1;
    }
  var Xi = null,
    yc = null,
    Lo = null;
  function Fd() {
    if (Lo) return Lo;
    var e,
      i = yc,
      a = i.length,
      o,
      u = "value" in Xi ? Xi.value : Xi.textContent,
      d = u.length;
    for (e = 0; e < a && i[e] === u[e]; e++);
    var E = a - e;
    for (o = 1; o <= E && i[a - o] === u[d - o]; o++);
    return (Lo = u.slice(e, 1 < o ? 1 - o : void 0));
  }
  function Uo(e) {
    var i = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && i === 13 && (e = 13))
        : (e = i),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function zo() {
    return !0;
  }
  function Ld() {
    return !1;
  }
  function an(e) {
    function i(a, o, u, d, E) {
      (this._reactName = a),
        (this._targetInst = u),
        (this.type = o),
        (this.nativeEvent = d),
        (this.target = E),
        (this.currentTarget = null);
      for (var B in e)
        e.hasOwnProperty(B) && ((a = e[B]), (this[B] = a ? a(d) : d[B]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? zo
          : Ld),
        (this.isPropagationStopped = Ld),
        this
      );
    }
    return (
      O(i.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = zo));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = zo));
        },
        persist: function () {},
        isPersistent: zo,
      }),
      i
    );
  }
  var Tr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    No = an(Tr),
    os = O({}, Tr, { view: 0, detail: 0 }),
    UE = an(os),
    gc,
    Ec,
    ls,
    Ho = O({}, os, {
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
      getModifierState: Ac,
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
          : (e !== ls &&
              (ls && e.type === "mousemove"
                ? ((gc = e.screenX - ls.screenX), (Ec = e.screenY - ls.screenY))
                : (Ec = gc = 0),
              (ls = e)),
            gc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ec;
      },
    }),
    Ud = an(Ho),
    zE = O({}, Ho, { dataTransfer: 0 }),
    NE = an(zE),
    HE = O({}, os, { relatedTarget: 0 }),
    bc = an(HE),
    VE = O({}, Tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    kE = an(VE),
    qE = O({}, Tr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    jE = an(qE),
    PE = O({}, Tr, { data: 0 }),
    zd = an(PE),
    YE = {
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
    XE = {
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
    GE = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function KE(e) {
    var i = this.nativeEvent;
    return i.getModifierState
      ? i.getModifierState(e)
      : (e = GE[e])
        ? !!i[e]
        : !1;
  }
  function Ac() {
    return KE;
  }
  var QE = O({}, os, {
      key: function (e) {
        if (e.key) {
          var i = YE[e.key] || e.key;
          if (i !== "Unidentified") return i;
        }
        return e.type === "keypress"
          ? ((e = Uo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? XE[e.keyCode] || "Unidentified"
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
      getModifierState: Ac,
      charCode: function (e) {
        return e.type === "keypress" ? Uo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Uo(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    ZE = an(QE),
    WE = O({}, Ho, {
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
    Nd = an(WE),
    $E = O({}, os, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ac,
    }),
    JE = an($E),
    IE = O({}, Tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    e4 = an(IE),
    t4 = O({}, Ho, {
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
    n4 = an(t4),
    i4 = O({}, Tr, { newState: 0, oldState: 0 }),
    r4 = an(i4),
    a4 = [9, 13, 27, 32],
    Sc = nn && "CompositionEvent" in window,
    us = null;
  nn && "documentMode" in document && (us = document.documentMode);
  var s4 = nn && "TextEvent" in window && !us,
    Hd = nn && (!Sc || (us && 8 < us && 11 >= us)),
    Vd = " ",
    kd = !1;
  function qd(e, i) {
    switch (e) {
      case "keyup":
        return a4.indexOf(i.keyCode) !== -1;
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
  function jd(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var da = !1;
  function o4(e, i) {
    switch (e) {
      case "compositionend":
        return jd(i);
      case "keypress":
        return i.which !== 32 ? null : ((kd = !0), Vd);
      case "textInput":
        return (e = i.data), e === Vd && kd ? null : e;
      default:
        return null;
    }
  }
  function l4(e, i) {
    if (da)
      return e === "compositionend" || (!Sc && qd(e, i))
        ? ((e = Fd()), (Lo = yc = Xi = null), (da = !1), e)
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
  var u4 = {
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
  function Pd(e) {
    var i = e && e.nodeName && e.nodeName.toLowerCase();
    return i === "input" ? !!u4[e.type] : i === "textarea";
  }
  function Yd(e, i, a, o) {
    fa ? (ha ? ha.push(o) : (ha = [o])) : (fa = o),
      (i = bl(i, "onChange")),
      0 < i.length &&
        ((a = new No("onChange", "change", null, a, o)),
        e.push({ event: a, listeners: i }));
  }
  var cs = null,
    fs = null;
  function c4(e) {
    mm(e, 0);
  }
  function Vo(e) {
    var i = Gn(e);
    if (Dd(i)) return e;
  }
  function Xd(e, i) {
    if (e === "change") return i;
  }
  var Gd = !1;
  if (nn) {
    var Cc;
    if (nn) {
      var Dc = "oninput" in document;
      if (!Dc) {
        var Kd = document.createElement("div");
        Kd.setAttribute("oninput", "return;"),
          (Dc = typeof Kd.oninput == "function");
      }
      Cc = Dc;
    } else Cc = !1;
    Gd = Cc && (!document.documentMode || 9 < document.documentMode);
  }
  function Qd() {
    cs && (cs.detachEvent("onpropertychange", Zd), (fs = cs = null));
  }
  function Zd(e) {
    if (e.propertyName === "value" && Vo(fs)) {
      var i = [];
      Yd(i, fs, e, xc(e)), Md(c4, i);
    }
  }
  function f4(e, i, a) {
    e === "focusin"
      ? (Qd(), (cs = i), (fs = a), cs.attachEvent("onpropertychange", Zd))
      : e === "focusout" && Qd();
  }
  function h4(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Vo(fs);
  }
  function d4(e, i) {
    if (e === "click") return Vo(i);
  }
  function p4(e, i) {
    if (e === "input" || e === "change") return Vo(i);
  }
  function x4(e, i) {
    return (e === i && (e !== 0 || 1 / e === 1 / i)) || (e !== e && i !== i);
  }
  var pn = typeof Object.is == "function" ? Object.is : x4;
  function hs(e, i) {
    if (pn(e, i)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof i != "object" ||
      i === null
    )
      return !1;
    var a = Object.keys(e),
      o = Object.keys(i);
    if (a.length !== o.length) return !1;
    for (o = 0; o < a.length; o++) {
      var u = a[o];
      if (!ri.call(i, u) || !pn(e[u], i[u])) return !1;
    }
    return !0;
  }
  function Wd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $d(e, i) {
    var a = Wd(e);
    e = 0;
    for (var o; a; ) {
      if (a.nodeType === 3) {
        if (((o = e + a.textContent.length), e <= i && o >= i))
          return { node: a, offset: i - e };
        e = o;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Wd(a);
    }
  }
  function Jd(e, i) {
    return e && i
      ? e === i
        ? !0
        : e && e.nodeType === 3
          ? !1
          : i && i.nodeType === 3
            ? Jd(e, i.parentNode)
            : "contains" in e
              ? e.contains(i)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(i) & 16)
                : !1
      : !1;
  }
  function Id(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var i = Mo(e.document); i instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof i.contentWindow.location.href == "string";
      } catch (o) {
        a = !1;
      }
      if (a) e = i.contentWindow;
      else break;
      i = Mo(e.document);
    }
    return i;
  }
  function Bc(e) {
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
  function m4(e, i) {
    var a = Id(i);
    i = e.focusedElem;
    var o = e.selectionRange;
    if (
      a !== i &&
      i &&
      i.ownerDocument &&
      Jd(i.ownerDocument.documentElement, i)
    ) {
      if (o !== null && Bc(i)) {
        if (
          ((e = o.start),
          (a = o.end),
          a === void 0 && (a = e),
          "selectionStart" in i)
        )
          (i.selectionStart = e),
            (i.selectionEnd = Math.min(a, i.value.length));
        else if (
          ((a = ((e = i.ownerDocument || document) && e.defaultView) || window),
          a.getSelection)
        ) {
          a = a.getSelection();
          var u = i.textContent.length,
            d = Math.min(o.start, u);
          (o = o.end === void 0 ? d : Math.min(o.end, u)),
            !a.extend && d > o && ((u = o), (o = d), (d = u)),
            (u = $d(i, d));
          var E = $d(i, o);
          u &&
            E &&
            (a.rangeCount !== 1 ||
              a.anchorNode !== u.node ||
              a.anchorOffset !== u.offset ||
              a.focusNode !== E.node ||
              a.focusOffset !== E.offset) &&
            ((e = e.createRange()),
            e.setStart(u.node, u.offset),
            a.removeAllRanges(),
            d > o
              ? (a.addRange(e), a.extend(E.node, E.offset))
              : (e.setEnd(E.node, E.offset), a.addRange(e)));
        }
      }
      for (e = [], a = i; (a = a.parentNode); )
        a.nodeType === 1 &&
          e.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < e.length; i++)
        (a = e[i]),
          (a.element.scrollLeft = a.left),
          (a.element.scrollTop = a.top);
    }
  }
  var v4 = nn && "documentMode" in document && 11 >= document.documentMode,
    pa = null,
    Tc = null,
    ds = null,
    _c = !1;
  function ep(e, i, a) {
    var o =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    _c ||
      pa == null ||
      pa !== Mo(o) ||
      ((o = pa),
      "selectionStart" in o && Bc(o)
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
      (ds && hs(ds, o)) ||
        ((ds = o),
        (o = bl(Tc, "onSelect")),
        0 < o.length &&
          ((i = new No("onSelect", "select", null, i, a)),
          e.push({ event: i, listeners: o }),
          (i.target = pa))));
  }
  function _r(e, i) {
    var a = {};
    return (
      (a[e.toLowerCase()] = i.toLowerCase()),
      (a["Webkit" + e] = "webkit" + i),
      (a["Moz" + e] = "moz" + i),
      a
    );
  }
  var xa = {
      animationend: _r("Animation", "AnimationEnd"),
      animationiteration: _r("Animation", "AnimationIteration"),
      animationstart: _r("Animation", "AnimationStart"),
      transitionrun: _r("Transition", "TransitionRun"),
      transitionstart: _r("Transition", "TransitionStart"),
      transitioncancel: _r("Transition", "TransitionCancel"),
      transitionend: _r("Transition", "TransitionEnd"),
    },
    Rc = {},
    tp = {};
  nn &&
    ((tp = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete xa.animationend.animation,
      delete xa.animationiteration.animation,
      delete xa.animationstart.animation),
    "TransitionEvent" in window || delete xa.transitionend.transition);
  function Rr(e) {
    if (Rc[e]) return Rc[e];
    if (!xa[e]) return e;
    var i = xa[e],
      a;
    for (a in i) if (i.hasOwnProperty(a) && a in tp) return (Rc[e] = i[a]);
    return e;
  }
  var np = Rr("animationend"),
    ip = Rr("animationiteration"),
    rp = Rr("animationstart"),
    y4 = Rr("transitionrun"),
    g4 = Rr("transitionstart"),
    E4 = Rr("transitioncancel"),
    ap = Rr("transitionend"),
    sp = new Map(),
    op =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " ",
      );
  function Zn(e, i) {
    sp.set(e, i), $t(i, [e]);
  }
  var Bn = [],
    ma = 0,
    wc = 0;
  function ko() {
    for (var e = ma, i = (wc = ma = 0); i < e; ) {
      var a = Bn[i];
      Bn[i++] = null;
      var o = Bn[i];
      Bn[i++] = null;
      var u = Bn[i];
      Bn[i++] = null;
      var d = Bn[i];
      if (((Bn[i++] = null), o !== null && u !== null)) {
        var E = o.pending;
        E === null ? (u.next = u) : ((u.next = E.next), (E.next = u)),
          (o.pending = u);
      }
      d !== 0 && lp(a, u, d);
    }
  }
  function qo(e, i, a, o) {
    (Bn[ma++] = e),
      (Bn[ma++] = i),
      (Bn[ma++] = a),
      (Bn[ma++] = o),
      (wc |= o),
      (e.lanes |= o),
      (e = e.alternate),
      e !== null && (e.lanes |= o);
  }
  function Oc(e, i, a, o) {
    return qo(e, i, a, o), jo(e);
  }
  function Gi(e, i) {
    return qo(e, null, null, i), jo(e);
  }
  function lp(e, i, a) {
    e.lanes |= a;
    var o = e.alternate;
    o !== null && (o.lanes |= a);
    for (var u = !1, d = e.return; d !== null; )
      (d.childLanes |= a),
        (o = d.alternate),
        o !== null && (o.childLanes |= a),
        d.tag === 22 &&
          ((e = d.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = d),
        (d = d.return);
    u &&
      i !== null &&
      e.tag === 3 &&
      ((d = e.stateNode),
      (u = 31 - Nt(a)),
      (d = d.hiddenUpdates),
      (e = d[u]),
      e === null ? (d[u] = [i]) : e.push(i),
      (i.lane = a | 536870912));
  }
  function jo(e) {
    if (50 < Hs) throw ((Hs = 0), (N0 = null), Error(s(185)));
    for (var i = e.return; i !== null; ) (e = i), (i = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var va = {},
    up = new WeakMap();
  function Tn(e, i) {
    if (typeof e == "object" && e !== null) {
      var a = up.get(e);
      return a !== void 0
        ? a
        : ((i = { value: e, source: i, stack: oe(i) }), up.set(e, i), i);
    }
    return { value: e, source: i, stack: oe(i) };
  }
  var ya = [],
    ga = 0,
    Po = null,
    Yo = 0,
    _n = [],
    Rn = 0,
    wr = null,
    Si = 1,
    Ci = "";
  function Or(e, i) {
    (ya[ga++] = Yo), (ya[ga++] = Po), (Po = e), (Yo = i);
  }
  function cp(e, i, a) {
    (_n[Rn++] = Si), (_n[Rn++] = Ci), (_n[Rn++] = wr), (wr = e);
    var o = Si;
    e = Ci;
    var u = 32 - Nt(o) - 1;
    (o &= ~(1 << u)), (a += 1);
    var d = 32 - Nt(i) + u;
    if (30 < d) {
      var E = u - (u % 5);
      (d = (o & ((1 << E) - 1)).toString(32)),
        (o >>= E),
        (u -= E),
        (Si = (1 << (32 - Nt(i) + u)) | (a << u) | o),
        (Ci = d + e);
    } else (Si = (1 << d) | (a << u) | o), (Ci = e);
  }
  function Mc(e) {
    e.return !== null && (Or(e, 1), cp(e, 1, 0));
  }
  function Fc(e) {
    for (; e === Po; )
      (Po = ya[--ga]), (ya[ga] = null), (Yo = ya[--ga]), (ya[ga] = null);
    for (; e === wr; )
      (wr = _n[--Rn]),
        (_n[Rn] = null),
        (Ci = _n[--Rn]),
        (_n[Rn] = null),
        (Si = _n[--Rn]),
        (_n[Rn] = null);
  }
  var Jt = null,
    Ht = null,
    Ge = !1,
    Wn = null,
    oi = !1,
    Lc = Error(s(519));
  function Mr(e) {
    var i = Error(s(418, ""));
    throw (ms(Tn(i, e)), Lc);
  }
  function fp(e) {
    var i = e.stateNode,
      a = e.type,
      o = e.memoizedProps;
    switch (((i[he] = e), (i[de] = o), a)) {
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
        for (a = 0; a < ks.length; a++) He(ks[a], i);
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
          Bd(
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
        He("invalid", i), _d(i, o.value, o.defaultValue, o.children), Oo(i);
    }
    (a = o.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      i.textContent === "" + a ||
      o.suppressHydrationWarning === !0 ||
      Em(i.textContent, a)
        ? (o.popover != null && (He("beforetoggle", i), He("toggle", i)),
          o.onScroll != null && He("scroll", i),
          o.onScrollEnd != null && He("scrollend", i),
          o.onClick != null && (i.onclick = Al),
          (i = !0))
        : (i = !1),
      i || Mr(e);
  }
  function hp(e) {
    for (Jt = e.return; Jt; )
      switch (Jt.tag) {
        case 3:
        case 27:
          oi = !0;
          return;
        case 5:
        case 13:
          oi = !1;
          return;
        default:
          Jt = Jt.return;
      }
  }
  function ps(e) {
    if (e !== Jt) return !1;
    if (!Ge) return hp(e), (Ge = !0), !1;
    var i = !1,
      a;
    if (
      ((a = e.tag !== 3 && e.tag !== 27) &&
        ((a = e.tag === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || ef(e.type, e.memoizedProps))),
        (a = !a)),
      a && (i = !0),
      i && Ht && Mr(e),
      hp(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, i = 0; e; ) {
          if (e.nodeType === 8)
            if (((a = e.data), a === "/$")) {
              if (i === 0) {
                Ht = Jn(e.nextSibling);
                break e;
              }
              i--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || i++;
          e = e.nextSibling;
        }
        Ht = null;
      }
    } else Ht = Jt ? Jn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function xs() {
    (Ht = Jt = null), (Ge = !1);
  }
  function ms(e) {
    Wn === null ? (Wn = [e]) : Wn.push(e);
  }
  var vs = Error(s(460)),
    dp = Error(s(474)),
    Uc = { then: function () {} };
  function pp(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function Xo() {}
  function xp(e, i, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(i) : a !== i && (i.then(Xo, Xo), (i = a)),
      i.status)
    ) {
      case "fulfilled":
        return i.value;
      case "rejected":
        throw ((e = i.reason), e === vs ? Error(s(483)) : e);
      default:
        if (typeof i.status == "string") i.then(Xo, Xo);
        else {
          if (((e = it), e !== null && 100 < e.shellSuspendCounter))
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
        throw ((ys = i), vs);
    }
  }
  var ys = null;
  function mp() {
    if (ys === null) throw Error(s(459));
    var e = ys;
    return (ys = null), e;
  }
  var Ea = null,
    gs = 0;
  function Go(e) {
    var i = gs;
    return (gs += 1), Ea === null && (Ea = []), xp(Ea, e, i);
  }
  function Es(e, i) {
    (i = i.props.ref), (e.ref = i !== void 0 ? i : null);
  }
  function Ko(e, i) {
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
  function yp(e) {
    function i(Y, H) {
      if (e) {
        var G = Y.deletions;
        G === null ? ((Y.deletions = [H]), (Y.flags |= 16)) : G.push(H);
      }
    }
    function a(Y, H) {
      if (!e) return null;
      for (; H !== null; ) i(Y, H), (H = H.sibling);
      return null;
    }
    function o(Y) {
      for (var H = new Map(); Y !== null; )
        Y.key !== null ? H.set(Y.key, Y) : H.set(Y.index, Y), (Y = Y.sibling);
      return H;
    }
    function u(Y, H) {
      return (Y = rr(Y, H)), (Y.index = 0), (Y.sibling = null), Y;
    }
    function d(Y, H, G) {
      return (
        (Y.index = G),
        e
          ? ((G = Y.alternate),
            G !== null
              ? ((G = G.index), G < H ? ((Y.flags |= 33554434), H) : G)
              : ((Y.flags |= 33554434), H))
          : ((Y.flags |= 1048576), H)
      );
    }
    function E(Y) {
      return e && Y.alternate === null && (Y.flags |= 33554434), Y;
    }
    function B(Y, H, G, re) {
      return H === null || H.tag !== 6
        ? ((H = R0(G, Y.mode, re)), (H.return = Y), H)
        : ((H = u(H, G)), (H.return = Y), H);
    }
    function M(Y, H, G, re) {
      var ge = G.type;
      return ge === x
        ? ne(Y, H, G.props.children, re, G.key)
        : H !== null &&
            (H.elementType === ge ||
              (typeof ge == "object" &&
                ge !== null &&
                ge.$$typeof === C &&
                vp(ge) === H.type))
          ? ((H = u(H, G.props)), Es(H, G), (H.return = Y), H)
          : ((H = fl(G.type, G.key, G.props, null, Y.mode, re)),
            Es(H, G),
            (H.return = Y),
            H);
    }
    function k(Y, H, G, re) {
      return H === null ||
        H.tag !== 4 ||
        H.stateNode.containerInfo !== G.containerInfo ||
        H.stateNode.implementation !== G.implementation
        ? ((H = w0(G, Y.mode, re)), (H.return = Y), H)
        : ((H = u(H, G.children || [])), (H.return = Y), H);
    }
    function ne(Y, H, G, re, ge) {
      return H === null || H.tag !== 7
        ? ((H = jr(G, Y.mode, re, ge)), (H.return = Y), H)
        : ((H = u(H, G)), (H.return = Y), H);
    }
    function se(Y, H, G) {
      if (
        (typeof H == "string" && H !== "") ||
        typeof H == "number" ||
        typeof H == "bigint"
      )
        return (H = R0("" + H, Y.mode, G)), (H.return = Y), H;
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case f:
            return (
              (G = fl(H.type, H.key, H.props, null, Y.mode, G)),
              Es(G, H),
              (G.return = Y),
              G
            );
          case p:
            return (H = w0(H, Y.mode, G)), (H.return = Y), H;
          case C:
            var re = H._init;
            return (H = re(H._payload)), se(Y, H, G);
        }
        if (K(H) || L(H))
          return (H = jr(H, Y.mode, G, null)), (H.return = Y), H;
        if (typeof H.then == "function") return se(Y, Go(H), G);
        if (H.$$typeof === g) return se(Y, ll(Y, H), G);
        Ko(Y, H);
      }
      return null;
    }
    function Z(Y, H, G, re) {
      var ge = H !== null ? H.key : null;
      if (
        (typeof G == "string" && G !== "") ||
        typeof G == "number" ||
        typeof G == "bigint"
      )
        return ge !== null ? null : B(Y, H, "" + G, re);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case f:
            return G.key === ge ? M(Y, H, G, re) : null;
          case p:
            return G.key === ge ? k(Y, H, G, re) : null;
          case C:
            return (ge = G._init), (G = ge(G._payload)), Z(Y, H, G, re);
        }
        if (K(G) || L(G)) return ge !== null ? null : ne(Y, H, G, re, null);
        if (typeof G.then == "function") return Z(Y, H, Go(G), re);
        if (G.$$typeof === g) return Z(Y, H, ll(Y, G), re);
        Ko(Y, G);
      }
      return null;
    }
    function te(Y, H, G, re, ge) {
      if (
        (typeof re == "string" && re !== "") ||
        typeof re == "number" ||
        typeof re == "bigint"
      )
        return (Y = Y.get(G) || null), B(H, Y, "" + re, ge);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case f:
            return (
              (Y = Y.get(re.key === null ? G : re.key) || null), M(H, Y, re, ge)
            );
          case p:
            return (
              (Y = Y.get(re.key === null ? G : re.key) || null), k(H, Y, re, ge)
            );
          case C:
            var Fe = re._init;
            return (re = Fe(re._payload)), te(Y, H, G, re, ge);
        }
        if (K(re) || L(re))
          return (Y = Y.get(G) || null), ne(H, Y, re, ge, null);
        if (typeof re.then == "function") return te(Y, H, G, Go(re), ge);
        if (re.$$typeof === g) return te(Y, H, G, ll(H, re), ge);
        Ko(H, re);
      }
      return null;
    }
    function be(Y, H, G, re) {
      for (
        var ge = null, Fe = null, Se = H, De = (H = 0), Lt = null;
        Se !== null && De < G.length;
        De++
      ) {
        Se.index > De ? ((Lt = Se), (Se = null)) : (Lt = Se.sibling);
        var Ke = Z(Y, Se, G[De], re);
        if (Ke === null) {
          Se === null && (Se = Lt);
          break;
        }
        e && Se && Ke.alternate === null && i(Y, Se),
          (H = d(Ke, H, De)),
          Fe === null ? (ge = Ke) : (Fe.sibling = Ke),
          (Fe = Ke),
          (Se = Lt);
      }
      if (De === G.length) return a(Y, Se), Ge && Or(Y, De), ge;
      if (Se === null) {
        for (; De < G.length; De++)
          (Se = se(Y, G[De], re)),
            Se !== null &&
              ((H = d(Se, H, De)),
              Fe === null ? (ge = Se) : (Fe.sibling = Se),
              (Fe = Se));
        return Ge && Or(Y, De), ge;
      }
      for (Se = o(Se); De < G.length; De++)
        (Lt = te(Se, Y, De, G[De], re)),
          Lt !== null &&
            (e &&
              Lt.alternate !== null &&
              Se.delete(Lt.key === null ? De : Lt.key),
            (H = d(Lt, H, De)),
            Fe === null ? (ge = Lt) : (Fe.sibling = Lt),
            (Fe = Lt));
      return (
        e &&
          Se.forEach(function (fr) {
            return i(Y, fr);
          }),
        Ge && Or(Y, De),
        ge
      );
    }
    function Te(Y, H, G, re) {
      if (G == null) throw Error(s(151));
      for (
        var ge = null,
          Fe = null,
          Se = H,
          De = (H = 0),
          Lt = null,
          Ke = G.next();
        Se !== null && !Ke.done;
        De++, Ke = G.next()
      ) {
        Se.index > De ? ((Lt = Se), (Se = null)) : (Lt = Se.sibling);
        var fr = Z(Y, Se, Ke.value, re);
        if (fr === null) {
          Se === null && (Se = Lt);
          break;
        }
        e && Se && fr.alternate === null && i(Y, Se),
          (H = d(fr, H, De)),
          Fe === null ? (ge = fr) : (Fe.sibling = fr),
          (Fe = fr),
          (Se = Lt);
      }
      if (Ke.done) return a(Y, Se), Ge && Or(Y, De), ge;
      if (Se === null) {
        for (; !Ke.done; De++, Ke = G.next())
          (Ke = se(Y, Ke.value, re)),
            Ke !== null &&
              ((H = d(Ke, H, De)),
              Fe === null ? (ge = Ke) : (Fe.sibling = Ke),
              (Fe = Ke));
        return Ge && Or(Y, De), ge;
      }
      for (Se = o(Se); !Ke.done; De++, Ke = G.next())
        (Ke = te(Se, Y, De, Ke.value, re)),
          Ke !== null &&
            (e &&
              Ke.alternate !== null &&
              Se.delete(Ke.key === null ? De : Ke.key),
            (H = d(Ke, H, De)),
            Fe === null ? (ge = Ke) : (Fe.sibling = Ke),
            (Fe = Ke));
      return (
        e &&
          Se.forEach(function (Lb) {
            return i(Y, Lb);
          }),
        Ge && Or(Y, De),
        ge
      );
    }
    function xt(Y, H, G, re) {
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
              for (var ge = G.key; H !== null; ) {
                if (H.key === ge) {
                  if (((ge = G.type), ge === x)) {
                    if (H.tag === 7) {
                      a(Y, H.sibling),
                        (re = u(H, G.props.children)),
                        (re.return = Y),
                        (Y = re);
                      break e;
                    }
                  } else if (
                    H.elementType === ge ||
                    (typeof ge == "object" &&
                      ge !== null &&
                      ge.$$typeof === C &&
                      vp(ge) === H.type)
                  ) {
                    a(Y, H.sibling),
                      (re = u(H, G.props)),
                      Es(re, G),
                      (re.return = Y),
                      (Y = re);
                    break e;
                  }
                  a(Y, H);
                  break;
                } else i(Y, H);
                H = H.sibling;
              }
              G.type === x
                ? ((re = jr(G.props.children, Y.mode, re, G.key)),
                  (re.return = Y),
                  (Y = re))
                : ((re = fl(G.type, G.key, G.props, null, Y.mode, re)),
                  Es(re, G),
                  (re.return = Y),
                  (Y = re));
            }
            return E(Y);
          case p:
            e: {
              for (ge = G.key; H !== null; ) {
                if (H.key === ge)
                  if (
                    H.tag === 4 &&
                    H.stateNode.containerInfo === G.containerInfo &&
                    H.stateNode.implementation === G.implementation
                  ) {
                    a(Y, H.sibling),
                      (re = u(H, G.children || [])),
                      (re.return = Y),
                      (Y = re);
                    break e;
                  } else {
                    a(Y, H);
                    break;
                  }
                else i(Y, H);
                H = H.sibling;
              }
              (re = w0(G, Y.mode, re)), (re.return = Y), (Y = re);
            }
            return E(Y);
          case C:
            return (ge = G._init), (G = ge(G._payload)), xt(Y, H, G, re);
        }
        if (K(G)) return be(Y, H, G, re);
        if (L(G)) {
          if (((ge = L(G)), typeof ge != "function")) throw Error(s(150));
          return (G = ge.call(G)), Te(Y, H, G, re);
        }
        if (typeof G.then == "function") return xt(Y, H, Go(G), re);
        if (G.$$typeof === g) return xt(Y, H, ll(Y, G), re);
        Ko(Y, G);
      }
      return (typeof G == "string" && G !== "") ||
        typeof G == "number" ||
        typeof G == "bigint"
        ? ((G = "" + G),
          H !== null && H.tag === 6
            ? (a(Y, H.sibling), (re = u(H, G)), (re.return = Y), (Y = re))
            : (a(Y, H), (re = R0(G, Y.mode, re)), (re.return = Y), (Y = re)),
          E(Y))
        : a(Y, H);
    }
    return function (Y, H, G, re) {
      try {
        gs = 0;
        var ge = xt(Y, H, G, re);
        return (Ea = null), ge;
      } catch (Se) {
        if (Se === vs) throw Se;
        var Fe = Fn(29, Se, null, Y.mode);
        return (Fe.lanes = re), (Fe.return = Y), Fe;
      } finally {
      }
    };
  }
  var Fr = yp(!0),
    gp = yp(!1),
    ba = me(null),
    Qo = me(0);
  function Ep(e, i) {
    (e = Ui), Ye(Qo, e), Ye(ba, i), (Ui = e | i.baseLanes);
  }
  function zc() {
    Ye(Qo, Ui), Ye(ba, ba.current);
  }
  function Nc() {
    (Ui = Qo.current), $e(ba), $e(Qo);
  }
  var wn = me(null),
    li = null;
  function Ki(e) {
    var i = e.alternate;
    Ye(wt, wt.current & 1),
      Ye(wn, e),
      li === null &&
        (i === null || ba.current !== null || i.memoizedState !== null) &&
        (li = e);
  }
  function bp(e) {
    if (e.tag === 22) {
      if ((Ye(wt, wt.current), Ye(wn, e), li === null)) {
        var i = e.alternate;
        i !== null && i.memoizedState !== null && (li = e);
      }
    } else Qi();
  }
  function Qi() {
    Ye(wt, wt.current), Ye(wn, wn.current);
  }
  function Di(e) {
    $e(wn), li === e && (li = null), $e(wt);
  }
  var wt = me(0);
  function Zo(e) {
    for (var i = e; i !== null; ) {
      if (i.tag === 13) {
        var a = i.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || a.data === "$!")
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
  var b4 =
      typeof AbortController != "undefined"
        ? AbortController
        : function () {
            var e = [],
              i = (this.signal = {
                aborted: !1,
                addEventListener: function (a, o) {
                  e.push(o);
                },
              });
            this.abort = function () {
              (i.aborted = !0),
                e.forEach(function (a) {
                  return a();
                });
            };
          },
    A4 = t.unstable_scheduleCallback,
    S4 = t.unstable_NormalPriority,
    Ot = {
      $$typeof: g,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Hc() {
    return { controller: new b4(), data: new Map(), refCount: 0 };
  }
  function bs(e) {
    e.refCount--,
      e.refCount === 0 &&
        A4(S4, function () {
          e.controller.abort();
        });
  }
  var As = null,
    Vc = 0,
    Aa = 0,
    Sa = null;
  function C4(e, i) {
    if (As === null) {
      var a = (As = []);
      (Vc = 0),
        (Aa = X0()),
        (Sa = {
          status: "pending",
          value: void 0,
          then: function (o) {
            a.push(o);
          },
        });
    }
    return Vc++, i.then(Ap, Ap), i;
  }
  function Ap() {
    if (--Vc === 0 && As !== null) {
      Sa !== null && (Sa.status = "fulfilled");
      var e = As;
      (As = null), (Aa = 0), (Sa = null);
      for (var i = 0; i < e.length; i++) (0, e[i])();
    }
  }
  function D4(e, i) {
    var a = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      e.then(
        function () {
          (o.status = "fulfilled"), (o.value = i);
          for (var u = 0; u < a.length; u++) (0, a[u])(i);
        },
        function (u) {
          for (o.status = "rejected", o.reason = u, u = 0; u < a.length; u++)
            (0, a[u])(void 0);
        },
      ),
      o
    );
  }
  var Sp = q.S;
  q.S = function (e, i) {
    typeof i == "object" &&
      i !== null &&
      typeof i.then == "function" &&
      C4(e, i),
      Sp !== null && Sp(e, i);
  };
  var Lr = me(null);
  function kc() {
    var e = Lr.current;
    return e !== null ? e : it.pooledCache;
  }
  function Wo(e, i) {
    i === null ? Ye(Lr, Lr.current) : Ye(Lr, i.pool);
  }
  function Cp() {
    var e = kc();
    return e === null ? null : { parent: Ot._currentValue, pool: e };
  }
  var Zi = 0,
    Oe = null,
    Je = null,
    At = null,
    $o = !1,
    Ca = !1,
    Ur = !1,
    Jo = 0,
    Ss = 0,
    Da = null,
    B4 = 0;
  function yt() {
    throw Error(s(321));
  }
  function qc(e, i) {
    if (i === null) return !1;
    for (var a = 0; a < i.length && a < e.length; a++)
      if (!pn(e[a], i[a])) return !1;
    return !0;
  }
  function jc(e, i, a, o, u, d) {
    return (
      (Zi = d),
      (Oe = i),
      (i.memoizedState = null),
      (i.updateQueue = null),
      (i.lanes = 0),
      (q.H = e === null || e.memoizedState === null ? zr : Wi),
      (Ur = !1),
      (d = a(o, u)),
      (Ur = !1),
      Ca && (d = Bp(i, a, o, u)),
      Dp(e),
      d
    );
  }
  function Dp(e) {
    q.H = ui;
    var i = Je !== null && Je.next !== null;
    if (((Zi = 0), (At = Je = Oe = null), ($o = !1), (Ss = 0), (Da = null), i))
      throw Error(s(300));
    e === null ||
      Mt ||
      ((e = e.dependencies), e !== null && ol(e) && (Mt = !0));
  }
  function Bp(e, i, a, o) {
    Oe = e;
    var u = 0;
    do {
      if ((Ca && (Da = null), (Ss = 0), (Ca = !1), 25 <= u))
        throw Error(s(301));
      if (((u += 1), (At = Je = null), e.updateQueue != null)) {
        var d = e.updateQueue;
        (d.lastEffect = null),
          (d.events = null),
          (d.stores = null),
          d.memoCache != null && (d.memoCache.index = 0);
      }
      (q.H = Nr), (d = i(a, o));
    } while (Ca);
    return d;
  }
  function T4() {
    var e = q.H,
      i = e.useState()[0];
    return (
      (i = typeof i.then == "function" ? Cs(i) : i),
      (e = e.useState()[0]),
      (Je !== null ? Je.memoizedState : null) !== e && (Oe.flags |= 1024),
      i
    );
  }
  function Pc() {
    var e = Jo !== 0;
    return (Jo = 0), e;
  }
  function Yc(e, i, a) {
    (i.updateQueue = e.updateQueue), (i.flags &= -2053), (e.lanes &= ~a);
  }
  function Xc(e) {
    if ($o) {
      for (e = e.memoizedState; e !== null; ) {
        var i = e.queue;
        i !== null && (i.pending = null), (e = e.next);
      }
      $o = !1;
    }
    (Zi = 0), (At = Je = Oe = null), (Ca = !1), (Ss = Jo = 0), (Da = null);
  }
  function sn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return At === null ? (Oe.memoizedState = At = e) : (At = At.next = e), At;
  }
  function St() {
    if (Je === null) {
      var e = Oe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Je.next;
    var i = At === null ? Oe.memoizedState : At.next;
    if (i !== null) (At = i), (Je = e);
    else {
      if (e === null)
        throw Oe.alternate === null ? Error(s(467)) : Error(s(310));
      (Je = e),
        (e = {
          memoizedState: Je.memoizedState,
          baseState: Je.baseState,
          baseQueue: Je.baseQueue,
          queue: Je.queue,
          next: null,
        }),
        At === null ? (Oe.memoizedState = At = e) : (At = At.next = e);
    }
    return At;
  }
  var Io;
  Io = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Cs(e) {
    var i = Ss;
    return (
      (Ss += 1),
      Da === null && (Da = []),
      (e = xp(Da, e, i)),
      (i = Oe),
      (At === null ? i.memoizedState : At.next) === null &&
        ((i = i.alternate),
        (q.H = i === null || i.memoizedState === null ? zr : Wi)),
      e
    );
  }
  function el(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Cs(e);
      if (e.$$typeof === g) return Gt(e);
    }
    throw Error(s(438, String(e)));
  }
  function Gc(e) {
    var i = null,
      a = Oe.updateQueue;
    if ((a !== null && (i = a.memoCache), i == null)) {
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
      a === null && ((a = Io()), (Oe.updateQueue = a)),
      (a.memoCache = i),
      (a = i.data[i.index]),
      a === void 0)
    )
      for (a = i.data[i.index] = Array(e), o = 0; o < e; o++) a[o] = _;
    return i.index++, a;
  }
  function Bi(e, i) {
    return typeof i == "function" ? i(e) : i;
  }
  function tl(e) {
    var i = St();
    return Kc(i, Je, e);
  }
  function Kc(e, i, a) {
    var o = e.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = a;
    var u = e.baseQueue,
      d = o.pending;
    if (d !== null) {
      if (u !== null) {
        var E = u.next;
        (u.next = d.next), (d.next = E);
      }
      (i.baseQueue = u = d), (o.pending = null);
    }
    if (((d = e.baseState), u === null)) e.memoizedState = d;
    else {
      i = u.next;
      var B = (E = null),
        M = null,
        k = i,
        ne = !1;
      do {
        var se = k.lane & -536870913;
        if (se !== k.lane ? (Pe & se) === se : (Zi & se) === se) {
          var Z = k.revertLane;
          if (Z === 0)
            M !== null &&
              (M = M.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: k.action,
                  hasEagerState: k.hasEagerState,
                  eagerState: k.eagerState,
                  next: null,
                }),
              se === Aa && (ne = !0);
          else if ((Zi & Z) === Z) {
            (k = k.next), Z === Aa && (ne = !0);
            continue;
          } else
            (se = {
              lane: 0,
              revertLane: k.revertLane,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null,
            }),
              M === null ? ((B = M = se), (E = d)) : (M = M.next = se),
              (Oe.lanes |= Z),
              (ar |= Z);
          (se = k.action),
            Ur && a(d, se),
            (d = k.hasEagerState ? k.eagerState : a(d, se));
        } else
          (Z = {
            lane: se,
            revertLane: k.revertLane,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null,
          }),
            M === null ? ((B = M = Z), (E = d)) : (M = M.next = Z),
            (Oe.lanes |= se),
            (ar |= se);
        k = k.next;
      } while (k !== null && k !== i);
      if (
        (M === null ? (E = d) : (M.next = B),
        !pn(d, e.memoizedState) && ((Mt = !0), ne && ((a = Sa), a !== null)))
      )
        throw a;
      (e.memoizedState = d),
        (e.baseState = E),
        (e.baseQueue = M),
        (o.lastRenderedState = d);
    }
    return u === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Qc(e) {
    var i = St(),
      a = i.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var o = a.dispatch,
      u = a.pending,
      d = i.memoizedState;
    if (u !== null) {
      a.pending = null;
      var E = (u = u.next);
      do (d = e(d, E.action)), (E = E.next);
      while (E !== u);
      pn(d, i.memoizedState) || (Mt = !0),
        (i.memoizedState = d),
        i.baseQueue === null && (i.baseState = d),
        (a.lastRenderedState = d);
    }
    return [d, o];
  }
  function Tp(e, i, a) {
    var o = Oe,
      u = St(),
      d = Ge;
    if (d) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = i();
    var E = !pn((Je || u).memoizedState, a);
    if (
      (E && ((u.memoizedState = a), (Mt = !0)),
      (u = u.queue),
      $c(wp.bind(null, o, u, e), [e]),
      u.getSnapshot !== i || E || (At !== null && At.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        Ba(9, Rp.bind(null, o, u, a, i), { destroy: void 0 }, null),
        it === null)
      )
        throw Error(s(349));
      d || (Zi & 60) !== 0 || _p(o, i, a);
    }
    return a;
  }
  function _p(e, i, a) {
    (e.flags |= 16384),
      (e = { getSnapshot: i, value: a }),
      (i = Oe.updateQueue),
      i === null
        ? ((i = Io()), (Oe.updateQueue = i), (i.stores = [e]))
        : ((a = i.stores), a === null ? (i.stores = [e]) : a.push(e));
  }
  function Rp(e, i, a, o) {
    (i.value = a), (i.getSnapshot = o), Op(i) && Mp(e);
  }
  function wp(e, i, a) {
    return a(function () {
      Op(i) && Mp(e);
    });
  }
  function Op(e) {
    var i = e.getSnapshot;
    e = e.value;
    try {
      var a = i();
      return !pn(e, a);
    } catch (o) {
      return !0;
    }
  }
  function Mp(e) {
    var i = Gi(e, 2);
    i !== null && It(i, e, 2);
  }
  function Zc(e) {
    var i = sn();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), Ur)) {
        hn(!0);
        try {
          a();
        } finally {
          hn(!1);
        }
      }
    }
    return (
      (i.memoizedState = i.baseState = e),
      (i.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bi,
        lastRenderedState: e,
      }),
      i
    );
  }
  function Fp(e, i, a, o) {
    return (e.baseState = a), Kc(e, Je, typeof o == "function" ? o : Bi);
  }
  function _4(e, i, a, o, u) {
    if (rl(e)) throw Error(s(485));
    if (((e = i.action), e !== null)) {
      var d = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (E) {
          d.listeners.push(E);
        },
      };
      q.T !== null ? a(!0) : (d.isTransition = !1),
        o(d),
        (a = i.pending),
        a === null
          ? ((d.next = i.pending = d), Lp(i, d))
          : ((d.next = a.next), (i.pending = a.next = d));
    }
  }
  function Lp(e, i) {
    var a = i.action,
      o = i.payload,
      u = e.state;
    if (i.isTransition) {
      var d = q.T,
        E = {};
      q.T = E;
      try {
        var B = a(u, o),
          M = q.S;
        M !== null && M(E, B), Up(e, i, B);
      } catch (k) {
        Wc(e, i, k);
      } finally {
        q.T = d;
      }
    } else
      try {
        (d = a(u, o)), Up(e, i, d);
      } catch (k) {
        Wc(e, i, k);
      }
  }
  function Up(e, i, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (o) {
            zp(e, i, o);
          },
          function (o) {
            return Wc(e, i, o);
          },
        )
      : zp(e, i, a);
  }
  function zp(e, i, a) {
    (i.status = "fulfilled"),
      (i.value = a),
      Np(i),
      (e.state = a),
      (i = e.pending),
      i !== null &&
        ((a = i.next),
        a === i ? (e.pending = null) : ((a = a.next), (i.next = a), Lp(e, a)));
  }
  function Wc(e, i, a) {
    var o = e.pending;
    if (((e.pending = null), o !== null)) {
      o = o.next;
      do (i.status = "rejected"), (i.reason = a), Np(i), (i = i.next);
      while (i !== o);
    }
    e.action = null;
  }
  function Np(e) {
    e = e.listeners;
    for (var i = 0; i < e.length; i++) (0, e[i])();
  }
  function Hp(e, i) {
    return i;
  }
  function Vp(e, i) {
    if (Ge) {
      var a = it.formState;
      if (a !== null) {
        e: {
          var o = Oe;
          if (Ge) {
            if (Ht) {
              t: {
                for (var u = Ht, d = oi; u.nodeType !== 8; ) {
                  if (!d) {
                    u = null;
                    break t;
                  }
                  if (((u = Jn(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (d = u.data), (u = d === "F!" || d === "F" ? u : null);
              }
              if (u) {
                (Ht = Jn(u.nextSibling)), (o = u.data === "F!");
                break e;
              }
            }
            Mr(o);
          }
          o = !1;
        }
        o && (i = a[0]);
      }
    }
    return (
      (a = sn()),
      (a.memoizedState = a.baseState = i),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Hp,
        lastRenderedState: i,
      }),
      (a.queue = o),
      (a = ix.bind(null, Oe, o)),
      (o.dispatch = a),
      (o = Zc(!1)),
      (d = n0.bind(null, Oe, !1, o.queue)),
      (o = sn()),
      (u = { state: i, dispatch: null, action: e, pending: null }),
      (o.queue = u),
      (a = _4.bind(null, Oe, u, d, a)),
      (u.dispatch = a),
      (o.memoizedState = e),
      [i, a, !1]
    );
  }
  function kp(e) {
    var i = St();
    return qp(i, Je, e);
  }
  function qp(e, i, a) {
    (i = Kc(e, i, Hp)[0]),
      (e = tl(Bi)[0]),
      (i =
        typeof i == "object" && i !== null && typeof i.then == "function"
          ? Cs(i)
          : i);
    var o = St(),
      u = o.queue,
      d = u.dispatch;
    return (
      a !== o.memoizedState &&
        ((Oe.flags |= 2048),
        Ba(9, R4.bind(null, u, a), { destroy: void 0 }, null)),
      [i, d, e]
    );
  }
  function R4(e, i) {
    e.action = i;
  }
  function jp(e) {
    var i = St(),
      a = Je;
    if (a !== null) return qp(i, a, e);
    St(), (i = i.memoizedState), (a = St());
    var o = a.queue.dispatch;
    return (a.memoizedState = e), [i, o, !1];
  }
  function Ba(e, i, a, o) {
    return (
      (e = { tag: e, create: i, inst: a, deps: o, next: null }),
      (i = Oe.updateQueue),
      i === null && ((i = Io()), (Oe.updateQueue = i)),
      (a = i.lastEffect),
      a === null
        ? (i.lastEffect = e.next = e)
        : ((o = a.next), (a.next = e), (e.next = o), (i.lastEffect = e)),
      e
    );
  }
  function Pp() {
    return St().memoizedState;
  }
  function nl(e, i, a, o) {
    var u = sn();
    (Oe.flags |= e),
      (u.memoizedState = Ba(
        1 | i,
        a,
        { destroy: void 0 },
        o === void 0 ? null : o,
      ));
  }
  function il(e, i, a, o) {
    var u = St();
    o = o === void 0 ? null : o;
    var d = u.memoizedState.inst;
    Je !== null && o !== null && qc(o, Je.memoizedState.deps)
      ? (u.memoizedState = Ba(i, a, d, o))
      : ((Oe.flags |= e), (u.memoizedState = Ba(1 | i, a, d, o)));
  }
  function Yp(e, i) {
    nl(8390656, 8, e, i);
  }
  function $c(e, i) {
    il(2048, 8, e, i);
  }
  function Xp(e, i) {
    return il(4, 2, e, i);
  }
  function Gp(e, i) {
    return il(4, 4, e, i);
  }
  function Kp(e, i) {
    if (typeof i == "function") {
      e = e();
      var a = i(e);
      return function () {
        typeof a == "function" ? a() : i(null);
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
  function Qp(e, i, a) {
    (a = a != null ? a.concat([e]) : null), il(4, 4, Kp.bind(null, i, e), a);
  }
  function Jc() {}
  function Zp(e, i) {
    var a = St();
    i = i === void 0 ? null : i;
    var o = a.memoizedState;
    return i !== null && qc(i, o[1]) ? o[0] : ((a.memoizedState = [e, i]), e);
  }
  function Wp(e, i) {
    var a = St();
    i = i === void 0 ? null : i;
    var o = a.memoizedState;
    if (i !== null && qc(i, o[1])) return o[0];
    if (((o = e()), Ur)) {
      hn(!0);
      try {
        e();
      } finally {
        hn(!1);
      }
    }
    return (a.memoizedState = [o, i]), o;
  }
  function Ic(e, i, a) {
    return a === void 0 || (Zi & 1073741824) !== 0
      ? (e.memoizedState = i)
      : ((e.memoizedState = a), (e = Jx()), (Oe.lanes |= e), (ar |= e), a);
  }
  function $p(e, i, a, o) {
    return pn(a, i)
      ? a
      : ba.current !== null
        ? ((e = Ic(e, a, o)), pn(e, i) || (Mt = !0), e)
        : (Zi & 42) === 0
          ? ((Mt = !0), (e.memoizedState = a))
          : ((e = Jx()), (Oe.lanes |= e), (ar |= e), i);
  }
  function Jp(e, i, a, o, u) {
    var d = P.p;
    P.p = d !== 0 && 8 > d ? d : 8;
    var E = q.T,
      B = {};
    (q.T = B), n0(e, !1, i, a);
    try {
      var M = u(),
        k = q.S;
      if (
        (k !== null && k(B, M),
        M !== null && typeof M == "object" && typeof M.then == "function")
      ) {
        var ne = D4(M, o);
        Ds(e, i, ne, yn(e));
      } else Ds(e, i, o, yn(e));
    } catch (se) {
      Ds(e, i, { then: function () {}, status: "rejected", reason: se }, yn());
    } finally {
      (P.p = d), (q.T = E);
    }
  }
  function w4() {}
  function e0(e, i, a, o) {
    if (e.tag !== 5) throw Error(s(476));
    var u = Ip(e).queue;
    Jp(
      e,
      u,
      i,
      pe,
      a === null
        ? w4
        : function () {
            return ex(e), a(o);
          },
    );
  }
  function Ip(e) {
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
        lastRenderedReducer: Bi,
        lastRenderedState: pe,
      },
      next: null,
    };
    var a = {};
    return (
      (i.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Bi,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = i),
      (e = e.alternate),
      e !== null && (e.memoizedState = i),
      i
    );
  }
  function ex(e) {
    var i = Ip(e).next.queue;
    Ds(e, i, {}, yn());
  }
  function t0() {
    return Gt(Xs);
  }
  function tx() {
    return St().memoizedState;
  }
  function nx() {
    return St().memoizedState;
  }
  function O4(e) {
    for (var i = e.return; i !== null; ) {
      switch (i.tag) {
        case 24:
        case 3:
          var a = yn();
          e = Ii(a);
          var o = er(i, e, a);
          o !== null && (It(o, i, a), _s(o, i, a)),
            (i = { cache: Hc() }),
            (e.payload = i);
          return;
      }
      i = i.return;
    }
  }
  function M4(e, i, a) {
    var o = yn();
    (a = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      rl(e)
        ? rx(i, a)
        : ((a = Oc(e, i, a, o)), a !== null && (It(a, e, o), ax(a, i, o)));
  }
  function ix(e, i, a) {
    var o = yn();
    Ds(e, i, a, o);
  }
  function Ds(e, i, a, o) {
    var u = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (rl(e)) rx(i, u);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = i.lastRenderedReducer), d !== null)
      )
        try {
          var E = i.lastRenderedState,
            B = d(E, a);
          if (((u.hasEagerState = !0), (u.eagerState = B), pn(B, E)))
            return qo(e, i, u, 0), it === null && ko(), !1;
        } catch (M) {
        } finally {
        }
      if (((a = Oc(e, i, u, o)), a !== null))
        return It(a, e, o), ax(a, i, o), !0;
    }
    return !1;
  }
  function n0(e, i, a, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: X0(),
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      rl(e))
    ) {
      if (i) throw Error(s(479));
    } else (i = Oc(e, a, o, 2)), i !== null && It(i, e, 2);
  }
  function rl(e) {
    var i = e.alternate;
    return e === Oe || (i !== null && i === Oe);
  }
  function rx(e, i) {
    Ca = $o = !0;
    var a = e.pending;
    a === null ? (i.next = i) : ((i.next = a.next), (a.next = i)),
      (e.pending = i);
  }
  function ax(e, i, a) {
    if ((a & 4194176) !== 0) {
      var o = i.lanes;
      (o &= e.pendingLanes), (a |= o), (i.lanes = a), Q(e, a);
    }
  }
  var ui = {
    readContext: Gt,
    use: el,
    useCallback: yt,
    useContext: yt,
    useEffect: yt,
    useImperativeHandle: yt,
    useLayoutEffect: yt,
    useInsertionEffect: yt,
    useMemo: yt,
    useReducer: yt,
    useRef: yt,
    useState: yt,
    useDebugValue: yt,
    useDeferredValue: yt,
    useTransition: yt,
    useSyncExternalStore: yt,
    useId: yt,
  };
  (ui.useCacheRefresh = yt),
    (ui.useMemoCache = yt),
    (ui.useHostTransitionStatus = yt),
    (ui.useFormState = yt),
    (ui.useActionState = yt),
    (ui.useOptimistic = yt);
  var zr = {
    readContext: Gt,
    use: el,
    useCallback: function (e, i) {
      return (sn().memoizedState = [e, i === void 0 ? null : i]), e;
    },
    useContext: Gt,
    useEffect: Yp,
    useImperativeHandle: function (e, i, a) {
      (a = a != null ? a.concat([e]) : null),
        nl(4194308, 4, Kp.bind(null, i, e), a);
    },
    useLayoutEffect: function (e, i) {
      return nl(4194308, 4, e, i);
    },
    useInsertionEffect: function (e, i) {
      nl(4, 2, e, i);
    },
    useMemo: function (e, i) {
      var a = sn();
      i = i === void 0 ? null : i;
      var o = e();
      if (Ur) {
        hn(!0);
        try {
          e();
        } finally {
          hn(!1);
        }
      }
      return (a.memoizedState = [o, i]), o;
    },
    useReducer: function (e, i, a) {
      var o = sn();
      if (a !== void 0) {
        var u = a(i);
        if (Ur) {
          hn(!0);
          try {
            a(i);
          } finally {
            hn(!1);
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
        (e = e.dispatch = M4.bind(null, Oe, e)),
        [o.memoizedState, e]
      );
    },
    useRef: function (e) {
      var i = sn();
      return (e = { current: e }), (i.memoizedState = e);
    },
    useState: function (e) {
      e = Zc(e);
      var i = e.queue,
        a = ix.bind(null, Oe, i);
      return (i.dispatch = a), [e.memoizedState, a];
    },
    useDebugValue: Jc,
    useDeferredValue: function (e, i) {
      var a = sn();
      return Ic(a, e, i);
    },
    useTransition: function () {
      var e = Zc(!1);
      return (
        (e = Jp.bind(null, Oe, e.queue, !0, !1)),
        (sn().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, i, a) {
      var o = Oe,
        u = sn();
      if (Ge) {
        if (a === void 0) throw Error(s(407));
        a = a();
      } else {
        if (((a = i()), it === null)) throw Error(s(349));
        (Pe & 60) !== 0 || _p(o, i, a);
      }
      u.memoizedState = a;
      var d = { value: a, getSnapshot: i };
      return (
        (u.queue = d),
        Yp(wp.bind(null, o, d, e), [e]),
        (o.flags |= 2048),
        Ba(9, Rp.bind(null, o, d, a, i), { destroy: void 0 }, null),
        a
      );
    },
    useId: function () {
      var e = sn(),
        i = it.identifierPrefix;
      if (Ge) {
        var a = Ci,
          o = Si;
        (a = (o & ~(1 << (32 - Nt(o) - 1))).toString(32) + a),
          (i = ":" + i + "R" + a),
          (a = Jo++),
          0 < a && (i += "H" + a.toString(32)),
          (i += ":");
      } else (a = B4++), (i = ":" + i + "r" + a.toString(32) + ":");
      return (e.memoizedState = i);
    },
    useCacheRefresh: function () {
      return (sn().memoizedState = O4.bind(null, Oe));
    },
  };
  (zr.useMemoCache = Gc),
    (zr.useHostTransitionStatus = t0),
    (zr.useFormState = Vp),
    (zr.useActionState = Vp),
    (zr.useOptimistic = function (e) {
      var i = sn();
      i.memoizedState = i.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (i.queue = a), (i = n0.bind(null, Oe, !0, a)), (a.dispatch = i), [e, i]
      );
    });
  var Wi = {
    readContext: Gt,
    use: el,
    useCallback: Zp,
    useContext: Gt,
    useEffect: $c,
    useImperativeHandle: Qp,
    useInsertionEffect: Xp,
    useLayoutEffect: Gp,
    useMemo: Wp,
    useReducer: tl,
    useRef: Pp,
    useState: function () {
      return tl(Bi);
    },
    useDebugValue: Jc,
    useDeferredValue: function (e, i) {
      var a = St();
      return $p(a, Je.memoizedState, e, i);
    },
    useTransition: function () {
      var e = tl(Bi)[0],
        i = St().memoizedState;
      return [typeof e == "boolean" ? e : Cs(e), i];
    },
    useSyncExternalStore: Tp,
    useId: tx,
  };
  (Wi.useCacheRefresh = nx),
    (Wi.useMemoCache = Gc),
    (Wi.useHostTransitionStatus = t0),
    (Wi.useFormState = kp),
    (Wi.useActionState = kp),
    (Wi.useOptimistic = function (e, i) {
      var a = St();
      return Fp(a, Je, e, i);
    });
  var Nr = {
    readContext: Gt,
    use: el,
    useCallback: Zp,
    useContext: Gt,
    useEffect: $c,
    useImperativeHandle: Qp,
    useInsertionEffect: Xp,
    useLayoutEffect: Gp,
    useMemo: Wp,
    useReducer: Qc,
    useRef: Pp,
    useState: function () {
      return Qc(Bi);
    },
    useDebugValue: Jc,
    useDeferredValue: function (e, i) {
      var a = St();
      return Je === null ? Ic(a, e, i) : $p(a, Je.memoizedState, e, i);
    },
    useTransition: function () {
      var e = Qc(Bi)[0],
        i = St().memoizedState;
      return [typeof e == "boolean" ? e : Cs(e), i];
    },
    useSyncExternalStore: Tp,
    useId: tx,
  };
  (Nr.useCacheRefresh = nx),
    (Nr.useMemoCache = Gc),
    (Nr.useHostTransitionStatus = t0),
    (Nr.useFormState = jp),
    (Nr.useActionState = jp),
    (Nr.useOptimistic = function (e, i) {
      var a = St();
      return Je !== null
        ? Fp(a, Je, e, i)
        : ((a.baseState = e), [e, a.queue.dispatch]);
    });
  function i0(e, i, a, o) {
    (i = e.memoizedState),
      (a = a(o, i)),
      (a = a == null ? i : O({}, i, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var r0 = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ie(e) === e : !1;
    },
    enqueueSetState: function (e, i, a) {
      e = e._reactInternals;
      var o = yn(),
        u = Ii(o);
      (u.payload = i),
        a != null && (u.callback = a),
        (i = er(e, u, o)),
        i !== null && (It(i, e, o), _s(i, e, o));
    },
    enqueueReplaceState: function (e, i, a) {
      e = e._reactInternals;
      var o = yn(),
        u = Ii(o);
      (u.tag = 1),
        (u.payload = i),
        a != null && (u.callback = a),
        (i = er(e, u, o)),
        i !== null && (It(i, e, o), _s(i, e, o));
    },
    enqueueForceUpdate: function (e, i) {
      e = e._reactInternals;
      var a = yn(),
        o = Ii(a);
      (o.tag = 2),
        i != null && (o.callback = i),
        (i = er(e, o, a)),
        i !== null && (It(i, e, a), _s(i, e, a));
    },
  };
  function sx(e, i, a, o, u, d, E) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, d, E)
        : i.prototype && i.prototype.isPureReactComponent
          ? !hs(a, o) || !hs(u, d)
          : !0
    );
  }
  function ox(e, i, a, o) {
    (e = i.state),
      typeof i.componentWillReceiveProps == "function" &&
        i.componentWillReceiveProps(a, o),
      typeof i.UNSAFE_componentWillReceiveProps == "function" &&
        i.UNSAFE_componentWillReceiveProps(a, o),
      i.state !== e && r0.enqueueReplaceState(i, i.state, null);
  }
  function Hr(e, i) {
    var a = i;
    if ("ref" in i) {
      a = {};
      for (var o in i) o !== "ref" && (a[o] = i[o]);
    }
    if ((e = e.defaultProps)) {
      a === i && (a = O({}, a));
      for (var u in e) a[u] === void 0 && (a[u] = e[u]);
    }
    return a;
  }
  var al =
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
  function lx(e) {
    al(e);
  }
  function ux(e) {
    console.error(e);
  }
  function cx(e) {
    al(e);
  }
  function sl(e, i) {
    try {
      var a = e.onUncaughtError;
      a(i.value, { componentStack: i.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function fx(e, i, a) {
    try {
      var o = e.onCaughtError;
      o(a.value, {
        componentStack: a.stack,
        errorBoundary: i.tag === 1 ? i.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function a0(e, i, a) {
    return (
      (a = Ii(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        sl(e, i);
      }),
      a
    );
  }
  function hx(e) {
    return (e = Ii(e)), (e.tag = 3), e;
  }
  function dx(e, i, a, o) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = o.value;
      (e.payload = function () {
        return u(d);
      }),
        (e.callback = function () {
          fx(i, a, o);
        });
    }
    var E = a.stateNode;
    E !== null &&
      typeof E.componentDidCatch == "function" &&
      (e.callback = function () {
        fx(i, a, o),
          typeof u != "function" &&
            (sr === null ? (sr = new Set([this])) : sr.add(this));
        var B = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: B !== null ? B : "",
        });
      });
  }
  function F4(e, i, a, o, u) {
    if (
      ((a.flags |= 32768),
      o !== null && typeof o == "object" && typeof o.then == "function")
    ) {
      if (
        ((i = a.alternate),
        i !== null && Ts(i, a, u, !0),
        (a = wn.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              li === null ? k0() : a.alternate === null && pt === 0 && (pt = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              o === Uc
                ? (a.flags |= 16384)
                : ((i = a.updateQueue),
                  i === null ? (a.updateQueue = new Set([o])) : i.add(o),
                  j0(e, o, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              o === Uc
                ? (a.flags |= 16384)
                : ((i = a.updateQueue),
                  i === null
                    ? ((i = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([o]),
                      }),
                      (a.updateQueue = i))
                    : ((a = i.retryQueue),
                      a === null ? (i.retryQueue = new Set([o])) : a.add(o)),
                  j0(e, o, u)),
              !1
            );
        }
        throw Error(s(435, a.tag));
      }
      return j0(e, o, u), k0(), !1;
    }
    if (Ge)
      return (
        (i = wn.current),
        i !== null
          ? ((i.flags & 65536) === 0 && (i.flags |= 256),
            (i.flags |= 65536),
            (i.lanes = u),
            o !== Lc && ((e = Error(s(422), { cause: o })), ms(Tn(e, a))))
          : (o !== Lc && ((i = Error(s(423), { cause: o })), ms(Tn(i, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (o = Tn(o, a)),
            (u = a0(e.stateNode, o, u)),
            E0(e, u),
            pt !== 4 && (pt = 2)),
        !1
      );
    var d = Error(s(520), { cause: o });
    if (
      ((d = Tn(d, a)),
      zs === null ? (zs = [d]) : zs.push(d),
      pt !== 4 && (pt = 2),
      i === null)
    )
      return !0;
    (o = Tn(o, a)), (a = i);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = u & -u),
            (a.lanes |= e),
            (e = a0(a.stateNode, o, e)),
            E0(a, e),
            !1
          );
        case 1:
          if (
            ((i = a.type),
            (d = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof i.getDerivedStateFromError == "function" ||
                (d !== null &&
                  typeof d.componentDidCatch == "function" &&
                  (sr === null || !sr.has(d)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = hx(u)),
              dx(u, e, a, o),
              E0(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var px = Error(s(461)),
    Mt = !1;
  function Vt(e, i, a, o) {
    i.child = e === null ? gp(i, null, a, o) : Fr(i, e.child, a, o);
  }
  function xx(e, i, a, o, u) {
    a = a.render;
    var d = i.ref;
    if ("ref" in o) {
      var E = {};
      for (var B in o) B !== "ref" && (E[B] = o[B]);
    } else E = o;
    return (
      kr(i),
      (o = jc(e, i, a, E, d, u)),
      (B = Pc()),
      e !== null && !Mt
        ? (Yc(e, i, u), Ti(e, i, u))
        : (Ge && B && Mc(i), (i.flags |= 1), Vt(e, i, o, u), i.child)
    );
  }
  function mx(e, i, a, o, u) {
    if (e === null) {
      var d = a.type;
      return typeof d == "function" &&
        !_0(d) &&
        d.defaultProps === void 0 &&
        a.compare === null
        ? ((i.tag = 15), (i.type = d), vx(e, i, d, o, u))
        : ((e = fl(a.type, null, o, i, i.mode, u)),
          (e.ref = i.ref),
          (e.return = i),
          (i.child = e));
    }
    if (((d = e.child), !p0(e, u))) {
      var E = d.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : hs), a(E, o) && e.ref === i.ref)
      )
        return Ti(e, i, u);
    }
    return (
      (i.flags |= 1),
      (e = rr(d, o)),
      (e.ref = i.ref),
      (e.return = i),
      (i.child = e)
    );
  }
  function vx(e, i, a, o, u) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (hs(d, o) && e.ref === i.ref)
        if (((Mt = !1), (i.pendingProps = o = d), p0(e, u)))
          (e.flags & 131072) !== 0 && (Mt = !0);
        else return (i.lanes = e.lanes), Ti(e, i, u);
    }
    return s0(e, i, a, o, u);
  }
  function yx(e, i, a) {
    var o = i.pendingProps,
      u = o.children,
      d = (i.stateNode._pendingVisibility & 2) !== 0,
      E = e !== null ? e.memoizedState : null;
    if ((Bs(e, i), o.mode === "hidden" || d)) {
      if ((i.flags & 128) !== 0) {
        if (((o = E !== null ? E.baseLanes | a : a), e !== null)) {
          for (u = i.child = e.child, d = 0; u !== null; )
            (d = d | u.lanes | u.childLanes), (u = u.sibling);
          i.childLanes = d & ~o;
        } else (i.childLanes = 0), (i.child = null);
        return gx(e, i, o, a);
      }
      if ((a & 536870912) !== 0)
        (i.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Wo(i, E !== null ? E.cachePool : null),
          E !== null ? Ep(i, E) : zc(),
          bp(i);
      else
        return (
          (i.lanes = i.childLanes = 536870912),
          gx(e, i, E !== null ? E.baseLanes | a : a, a)
        );
    } else
      E !== null
        ? (Wo(i, E.cachePool), Ep(i, E), Qi(), (i.memoizedState = null))
        : (e !== null && Wo(i, null), zc(), Qi());
    return Vt(e, i, u, a), i.child;
  }
  function gx(e, i, a, o) {
    var u = kc();
    return (
      (u = u === null ? null : { parent: Ot._currentValue, pool: u }),
      (i.memoizedState = { baseLanes: a, cachePool: u }),
      e !== null && Wo(i, null),
      zc(),
      bp(i),
      e !== null && Ts(e, i, o, !0),
      null
    );
  }
  function Bs(e, i) {
    var a = i.ref;
    if (a === null) e !== null && e.ref !== null && (i.flags |= 2097664);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(s(284));
      (e === null || e.ref !== a) && (i.flags |= 2097664);
    }
  }
  function s0(e, i, a, o, u) {
    return (
      kr(i),
      (a = jc(e, i, a, o, void 0, u)),
      (o = Pc()),
      e !== null && !Mt
        ? (Yc(e, i, u), Ti(e, i, u))
        : (Ge && o && Mc(i), (i.flags |= 1), Vt(e, i, a, u), i.child)
    );
  }
  function Ex(e, i, a, o, u, d) {
    return (
      kr(i),
      (i.updateQueue = null),
      (a = Bp(i, o, a, u)),
      Dp(e),
      (o = Pc()),
      e !== null && !Mt
        ? (Yc(e, i, d), Ti(e, i, d))
        : (Ge && o && Mc(i), (i.flags |= 1), Vt(e, i, a, d), i.child)
    );
  }
  function bx(e, i, a, o, u) {
    if ((kr(i), i.stateNode === null)) {
      var d = va,
        E = a.contextType;
      typeof E == "object" && E !== null && (d = Gt(E)),
        (d = new a(o, d)),
        (i.memoizedState =
          d.state !== null && d.state !== void 0 ? d.state : null),
        (d.updater = r0),
        (i.stateNode = d),
        (d._reactInternals = i),
        (d = i.stateNode),
        (d.props = o),
        (d.state = i.memoizedState),
        (d.refs = {}),
        y0(i),
        (E = a.contextType),
        (d.context = typeof E == "object" && E !== null ? Gt(E) : va),
        (d.state = i.memoizedState),
        (E = a.getDerivedStateFromProps),
        typeof E == "function" && (i0(i, a, E, o), (d.state = i.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function" ||
          (typeof d.UNSAFE_componentWillMount != "function" &&
            typeof d.componentWillMount != "function") ||
          ((E = d.state),
          typeof d.componentWillMount == "function" && d.componentWillMount(),
          typeof d.UNSAFE_componentWillMount == "function" &&
            d.UNSAFE_componentWillMount(),
          E !== d.state && r0.enqueueReplaceState(d, d.state, null),
          ws(i, o, d, u),
          Rs(),
          (d.state = i.memoizedState)),
        typeof d.componentDidMount == "function" && (i.flags |= 4194308),
        (o = !0);
    } else if (e === null) {
      d = i.stateNode;
      var B = i.memoizedProps,
        M = Hr(a, B);
      d.props = M;
      var k = d.context,
        ne = a.contextType;
      (E = va), typeof ne == "object" && ne !== null && (E = Gt(ne));
      var se = a.getDerivedStateFromProps;
      (ne =
        typeof se == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function"),
        (B = i.pendingProps !== B),
        ne ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((B || k !== E) && ox(i, d, o, E)),
        (Ji = !1);
      var Z = i.memoizedState;
      (d.state = Z),
        ws(i, o, d, u),
        Rs(),
        (k = i.memoizedState),
        B || Z !== k || Ji
          ? (typeof se == "function" &&
              (i0(i, a, se, o), (k = i.memoizedState)),
            (M = Ji || sx(i, a, M, o, Z, k, E))
              ? (ne ||
                  (typeof d.UNSAFE_componentWillMount != "function" &&
                    typeof d.componentWillMount != "function") ||
                  (typeof d.componentWillMount == "function" &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == "function" &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == "function" &&
                  (i.flags |= 4194308))
              : (typeof d.componentDidMount == "function" &&
                  (i.flags |= 4194308),
                (i.memoizedProps = o),
                (i.memoizedState = k)),
            (d.props = o),
            (d.state = k),
            (d.context = E),
            (o = M))
          : (typeof d.componentDidMount == "function" && (i.flags |= 4194308),
            (o = !1));
    } else {
      (d = i.stateNode),
        g0(e, i),
        (E = i.memoizedProps),
        (ne = Hr(a, E)),
        (d.props = ne),
        (se = i.pendingProps),
        (Z = d.context),
        (k = a.contextType),
        (M = va),
        typeof k == "object" && k !== null && (M = Gt(k)),
        (B = a.getDerivedStateFromProps),
        (k =
          typeof B == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function") ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((E !== se || Z !== M) && ox(i, d, o, M)),
        (Ji = !1),
        (Z = i.memoizedState),
        (d.state = Z),
        ws(i, o, d, u),
        Rs();
      var te = i.memoizedState;
      E !== se ||
      Z !== te ||
      Ji ||
      (e !== null && e.dependencies !== null && ol(e.dependencies))
        ? (typeof B == "function" && (i0(i, a, B, o), (te = i.memoizedState)),
          (ne =
            Ji ||
            sx(i, a, ne, o, Z, te, M) ||
            (e !== null && e.dependencies !== null && ol(e.dependencies)))
            ? (k ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(o, te, M),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(o, te, M)),
              typeof d.componentDidUpdate == "function" && (i.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == "function" &&
                (i.flags |= 1024))
            : (typeof d.componentDidUpdate != "function" ||
                (E === e.memoizedProps && Z === e.memoizedState) ||
                (i.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != "function" ||
                (E === e.memoizedProps && Z === e.memoizedState) ||
                (i.flags |= 1024),
              (i.memoizedProps = o),
              (i.memoizedState = te)),
          (d.props = o),
          (d.state = te),
          (d.context = M),
          (o = ne))
        : (typeof d.componentDidUpdate != "function" ||
            (E === e.memoizedProps && Z === e.memoizedState) ||
            (i.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (E === e.memoizedProps && Z === e.memoizedState) ||
            (i.flags |= 1024),
          (o = !1));
    }
    return (
      (d = o),
      Bs(e, i),
      (o = (i.flags & 128) !== 0),
      d || o
        ? ((d = i.stateNode),
          (a =
            o && typeof a.getDerivedStateFromError != "function"
              ? null
              : d.render()),
          (i.flags |= 1),
          e !== null && o
            ? ((i.child = Fr(i, e.child, null, u)),
              (i.child = Fr(i, null, a, u)))
            : Vt(e, i, a, u),
          (i.memoizedState = d.state),
          (e = i.child))
        : (e = Ti(e, i, u)),
      e
    );
  }
  function Ax(e, i, a, o) {
    return xs(), (i.flags |= 256), Vt(e, i, a, o), i.child;
  }
  var o0 = { dehydrated: null, treeContext: null, retryLane: 0 };
  function l0(e) {
    return { baseLanes: e, cachePool: Cp() };
  }
  function u0(e, i, a) {
    return (e = e !== null ? e.childLanes & ~a : 0), i && (e |= Ln), e;
  }
  function Sx(e, i, a) {
    var o = i.pendingProps,
      u = !1,
      d = (i.flags & 128) !== 0,
      E;
    if (
      ((E = d) ||
        (E =
          e !== null && e.memoizedState === null ? !1 : (wt.current & 2) !== 0),
      E && ((u = !0), (i.flags &= -129)),
      (E = (i.flags & 32) !== 0),
      (i.flags &= -33),
      e === null)
    ) {
      if (Ge) {
        if ((u ? Ki(i) : Qi(), Ge)) {
          var B = Ht,
            M;
          if ((M = B)) {
            e: {
              for (M = B, B = oi; M.nodeType !== 8; ) {
                if (!B) {
                  B = null;
                  break e;
                }
                if (((M = Jn(M.nextSibling)), M === null)) {
                  B = null;
                  break e;
                }
              }
              B = M;
            }
            B !== null
              ? ((i.memoizedState = {
                  dehydrated: B,
                  treeContext: wr !== null ? { id: Si, overflow: Ci } : null,
                  retryLane: 536870912,
                }),
                (M = Fn(18, null, null, 0)),
                (M.stateNode = B),
                (M.return = i),
                (i.child = M),
                (Jt = i),
                (Ht = null),
                (M = !0))
              : (M = !1);
          }
          M || Mr(i);
        }
        if (
          ((B = i.memoizedState),
          B !== null && ((B = B.dehydrated), B !== null))
        )
          return B.data === "$!" ? (i.lanes = 16) : (i.lanes = 536870912), null;
        Di(i);
      }
      return (
        (B = o.children),
        (o = o.fallback),
        u
          ? (Qi(),
            (u = i.mode),
            (B = f0({ mode: "hidden", children: B }, u)),
            (o = jr(o, u, a, null)),
            (B.return = i),
            (o.return = i),
            (B.sibling = o),
            (i.child = B),
            (u = i.child),
            (u.memoizedState = l0(a)),
            (u.childLanes = u0(e, E, a)),
            (i.memoizedState = o0),
            o)
          : (Ki(i), c0(i, B))
      );
    }
    if (
      ((M = e.memoizedState), M !== null && ((B = M.dehydrated), B !== null))
    ) {
      if (d)
        i.flags & 256
          ? (Ki(i), (i.flags &= -257), (i = h0(e, i, a)))
          : i.memoizedState !== null
            ? (Qi(), (i.child = e.child), (i.flags |= 128), (i = null))
            : (Qi(),
              (u = o.fallback),
              (B = i.mode),
              (o = f0({ mode: "visible", children: o.children }, B)),
              (u = jr(u, B, a, null)),
              (u.flags |= 2),
              (o.return = i),
              (u.return = i),
              (o.sibling = u),
              (i.child = o),
              Fr(i, e.child, null, a),
              (o = i.child),
              (o.memoizedState = l0(a)),
              (o.childLanes = u0(e, E, a)),
              (i.memoizedState = o0),
              (i = u));
      else if ((Ki(i), B.data === "$!")) {
        if (((E = B.nextSibling && B.nextSibling.dataset), E)) var k = E.dgst;
        (E = k),
          (o = Error(s(419))),
          (o.stack = ""),
          (o.digest = E),
          ms({ value: o, source: null, stack: null }),
          (i = h0(e, i, a));
      } else if (
        (Mt || Ts(e, i, a, !1), (E = (a & e.childLanes) !== 0), Mt || E)
      ) {
        if (((E = it), E !== null)) {
          if (((o = a & -a), (o & 42) !== 0)) o = 1;
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
            ((o = (o & (E.suspendedLanes | a)) !== 0 ? 0 : o),
            o !== 0 && o !== M.retryLane)
          )
            throw ((M.retryLane = o), Gi(e, o), It(E, e, o), px);
        }
        B.data === "$?" || k0(), (i = h0(e, i, a));
      } else
        B.data === "$?"
          ? ((i.flags |= 128),
            (i.child = e.child),
            (i = Q4.bind(null, e)),
            (B._reactRetry = i),
            (i = null))
          : ((e = M.treeContext),
            (Ht = Jn(B.nextSibling)),
            (Jt = i),
            (Ge = !0),
            (Wn = null),
            (oi = !1),
            e !== null &&
              ((_n[Rn++] = Si),
              (_n[Rn++] = Ci),
              (_n[Rn++] = wr),
              (Si = e.id),
              (Ci = e.overflow),
              (wr = i)),
            (i = c0(i, o.children)),
            (i.flags |= 4096));
      return i;
    }
    return u
      ? (Qi(),
        (u = o.fallback),
        (B = i.mode),
        (M = e.child),
        (k = M.sibling),
        (o = rr(M, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = M.subtreeFlags & 31457280),
        k !== null ? (u = rr(k, u)) : ((u = jr(u, B, a, null)), (u.flags |= 2)),
        (u.return = i),
        (o.return = i),
        (o.sibling = u),
        (i.child = o),
        (o = u),
        (u = i.child),
        (B = e.child.memoizedState),
        B === null
          ? (B = l0(a))
          : ((M = B.cachePool),
            M !== null
              ? ((k = Ot._currentValue),
                (M = M.parent !== k ? { parent: k, pool: k } : M))
              : (M = Cp()),
            (B = { baseLanes: B.baseLanes | a, cachePool: M })),
        (u.memoizedState = B),
        (u.childLanes = u0(e, E, a)),
        (i.memoizedState = o0),
        o)
      : (Ki(i),
        (a = e.child),
        (e = a.sibling),
        (a = rr(a, { mode: "visible", children: o.children })),
        (a.return = i),
        (a.sibling = null),
        e !== null &&
          ((E = i.deletions),
          E === null ? ((i.deletions = [e]), (i.flags |= 16)) : E.push(e)),
        (i.child = a),
        (i.memoizedState = null),
        a);
  }
  function c0(e, i) {
    return (
      (i = f0({ mode: "visible", children: i }, e.mode)),
      (i.return = e),
      (e.child = i)
    );
  }
  function f0(e, i) {
    return Zx(e, i, 0, null);
  }
  function h0(e, i, a) {
    return (
      Fr(i, e.child, null, a),
      (e = c0(i, i.pendingProps.children)),
      (e.flags |= 2),
      (i.memoizedState = null),
      e
    );
  }
  function Cx(e, i, a) {
    e.lanes |= i;
    var o = e.alternate;
    o !== null && (o.lanes |= i), m0(e.return, i, a);
  }
  function d0(e, i, a, o, u) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: i,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: a,
          tailMode: u,
        })
      : ((d.isBackwards = i),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = o),
        (d.tail = a),
        (d.tailMode = u));
  }
  function Dx(e, i, a) {
    var o = i.pendingProps,
      u = o.revealOrder,
      d = o.tail;
    if ((Vt(e, i, o.children, a), (o = wt.current), (o & 2) !== 0))
      (o = (o & 1) | 2), (i.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = i.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Cx(e, a, i);
          else if (e.tag === 19) Cx(e, a, i);
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
    switch ((Ye(wt, o), u)) {
      case "forwards":
        for (a = i.child, u = null; a !== null; )
          (e = a.alternate),
            e !== null && Zo(e) === null && (u = a),
            (a = a.sibling);
        (a = u),
          a === null
            ? ((u = i.child), (i.child = null))
            : ((u = a.sibling), (a.sibling = null)),
          d0(i, !1, u, a, d);
        break;
      case "backwards":
        for (a = null, u = i.child, i.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && Zo(e) === null)) {
            i.child = u;
            break;
          }
          (e = u.sibling), (u.sibling = a), (a = u), (u = e);
        }
        d0(i, !0, a, null, d);
        break;
      case "together":
        d0(i, !1, null, null, void 0);
        break;
      default:
        i.memoizedState = null;
    }
    return i.child;
  }
  function Ti(e, i, a) {
    if (
      (e !== null && (i.dependencies = e.dependencies),
      (ar |= i.lanes),
      (a & i.childLanes) === 0)
    )
      if (e !== null) {
        if ((Ts(e, i, a, !1), (a & i.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && i.child !== e.child) throw Error(s(153));
    if (i.child !== null) {
      for (
        e = i.child, a = rr(e, e.pendingProps), i.child = a, a.return = i;
        e.sibling !== null;

      )
        (e = e.sibling),
          (a = a.sibling = rr(e, e.pendingProps)),
          (a.return = i);
      a.sibling = null;
    }
    return i.child;
  }
  function p0(e, i) {
    return (e.lanes & i) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && ol(e)));
  }
  function L4(e, i, a) {
    switch (i.tag) {
      case 3:
        jn(i, i.stateNode.containerInfo),
          $i(i, Ot, e.memoizedState.cache),
          xs();
        break;
      case 27:
      case 5:
        ii(i);
        break;
      case 4:
        jn(i, i.stateNode.containerInfo);
        break;
      case 10:
        $i(i, i.type, i.memoizedProps.value);
        break;
      case 13:
        var o = i.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (Ki(i), (i.flags |= 128), null)
            : (a & i.child.childLanes) !== 0
              ? Sx(e, i, a)
              : (Ki(i), (e = Ti(e, i, a)), e !== null ? e.sibling : null);
        Ki(i);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((o = (a & i.childLanes) !== 0),
          o || (Ts(e, i, a, !1), (o = (a & i.childLanes) !== 0)),
          u)
        ) {
          if (o) return Dx(e, i, a);
          i.flags |= 128;
        }
        if (
          ((u = i.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Ye(wt, wt.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return (i.lanes = 0), yx(e, i, a);
      case 24:
        $i(i, Ot, e.memoizedState.cache);
    }
    return Ti(e, i, a);
  }
  function Bx(e, i, a) {
    if (e !== null)
      if (e.memoizedProps !== i.pendingProps) Mt = !0;
      else {
        if (!p0(e, a) && (i.flags & 128) === 0) return (Mt = !1), L4(e, i, a);
        Mt = (e.flags & 131072) !== 0;
      }
    else (Mt = !1), Ge && (i.flags & 1048576) !== 0 && cp(i, Yo, i.index);
    switch (((i.lanes = 0), i.tag)) {
      case 16:
        e: {
          e = i.pendingProps;
          var o = i.elementType,
            u = o._init;
          if (((o = u(o._payload)), (i.type = o), typeof o == "function"))
            _0(o)
              ? ((e = Hr(o, e)), (i.tag = 1), (i = bx(null, i, o, e, a)))
              : ((i.tag = 0), (i = s0(null, i, o, e, a)));
          else {
            if (o != null) {
              if (((u = o.$$typeof), u === b)) {
                (i.tag = 11), (i = xx(null, i, o, e, a));
                break e;
              } else if (u === R) {
                (i.tag = 14), (i = mx(null, i, o, e, a));
                break e;
              }
            }
            throw ((i = U(o) || o), Error(s(306, i, "")));
          }
        }
        return i;
      case 0:
        return s0(e, i, i.type, i.pendingProps, a);
      case 1:
        return (o = i.type), (u = Hr(o, i.pendingProps)), bx(e, i, o, u, a);
      case 3:
        e: {
          if ((jn(i, i.stateNode.containerInfo), e === null))
            throw Error(s(387));
          var d = i.pendingProps;
          (u = i.memoizedState), (o = u.element), g0(e, i), ws(i, d, null, a);
          var E = i.memoizedState;
          if (
            ((d = E.cache),
            $i(i, Ot, d),
            d !== u.cache && v0(i, [Ot], a, !0),
            Rs(),
            (d = E.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: d, isDehydrated: !1, cache: E.cache }),
              (i.updateQueue.baseState = u),
              (i.memoizedState = u),
              i.flags & 256)
            ) {
              i = Ax(e, i, d, a);
              break e;
            } else if (d !== o) {
              (o = Tn(Error(s(424)), i)), ms(o), (i = Ax(e, i, d, a));
              break e;
            } else
              for (
                Ht = Jn(i.stateNode.containerInfo.firstChild),
                  Jt = i,
                  Ge = !0,
                  Wn = null,
                  oi = !0,
                  a = gp(i, null, d, a),
                  i.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
          else {
            if ((xs(), d === o)) {
              i = Ti(e, i, a);
              break e;
            }
            Vt(e, i, d, a);
          }
          i = i.child;
        }
        return i;
      case 26:
        return (
          Bs(e, i),
          e === null
            ? (a = Rm(i.type, null, i.pendingProps, null))
              ? (i.memoizedState = a)
              : Ge ||
                ((a = i.type),
                (e = i.pendingProps),
                (o = Sl(tt.current).createElement(a)),
                (o[he] = i),
                (o[de] = e),
                kt(o, a, e),
                Ze(o),
                (i.stateNode = o))
            : (i.memoizedState = Rm(
                i.type,
                e.memoizedProps,
                i.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          ii(i),
          e === null &&
            Ge &&
            ((o = i.stateNode = Bm(i.type, i.pendingProps, tt.current)),
            (Jt = i),
            (oi = !0),
            (Ht = Jn(o.firstChild))),
          (o = i.pendingProps.children),
          e !== null || Ge ? Vt(e, i, o, a) : (i.child = Fr(i, null, o, a)),
          Bs(e, i),
          i.child
        );
      case 5:
        return (
          e === null &&
            Ge &&
            ((u = o = Ht) &&
              ((o = cb(o, i.type, i.pendingProps, oi)),
              o !== null
                ? ((i.stateNode = o),
                  (Jt = i),
                  (Ht = Jn(o.firstChild)),
                  (oi = !1),
                  (u = !0))
                : (u = !1)),
            u || Mr(i)),
          ii(i),
          (u = i.type),
          (d = i.pendingProps),
          (E = e !== null ? e.memoizedProps : null),
          (o = d.children),
          ef(u, d) ? (o = null) : E !== null && ef(u, E) && (i.flags |= 32),
          i.memoizedState !== null &&
            ((u = jc(e, i, T4, null, null, a)), (Xs._currentValue = u)),
          Bs(e, i),
          Vt(e, i, o, a),
          i.child
        );
      case 6:
        return (
          e === null &&
            Ge &&
            ((e = a = Ht) &&
              ((a = fb(a, i.pendingProps, oi)),
              a !== null
                ? ((i.stateNode = a), (Jt = i), (Ht = null), (e = !0))
                : (e = !1)),
            e || Mr(i)),
          null
        );
      case 13:
        return Sx(e, i, a);
      case 4:
        return (
          jn(i, i.stateNode.containerInfo),
          (o = i.pendingProps),
          e === null ? (i.child = Fr(i, null, o, a)) : Vt(e, i, o, a),
          i.child
        );
      case 11:
        return xx(e, i, i.type, i.pendingProps, a);
      case 7:
        return Vt(e, i, i.pendingProps, a), i.child;
      case 8:
        return Vt(e, i, i.pendingProps.children, a), i.child;
      case 12:
        return Vt(e, i, i.pendingProps.children, a), i.child;
      case 10:
        return (
          (o = i.pendingProps),
          $i(i, i.type, o.value),
          Vt(e, i, o.children, a),
          i.child
        );
      case 9:
        return (
          (u = i.type._context),
          (o = i.pendingProps.children),
          kr(i),
          (u = Gt(u)),
          (o = o(u)),
          (i.flags |= 1),
          Vt(e, i, o, a),
          i.child
        );
      case 14:
        return mx(e, i, i.type, i.pendingProps, a);
      case 15:
        return vx(e, i, i.type, i.pendingProps, a);
      case 19:
        return Dx(e, i, a);
      case 22:
        return yx(e, i, a);
      case 24:
        return (
          kr(i),
          (o = Gt(Ot)),
          e === null
            ? ((u = kc()),
              u === null &&
                ((u = it),
                (d = Hc()),
                (u.pooledCache = d),
                d.refCount++,
                d !== null && (u.pooledCacheLanes |= a),
                (u = d)),
              (i.memoizedState = { parent: o, cache: u }),
              y0(i),
              $i(i, Ot, u))
            : ((e.lanes & a) !== 0 && (g0(e, i), ws(i, null, null, a), Rs()),
              (u = e.memoizedState),
              (d = i.memoizedState),
              u.parent !== o
                ? ((u = { parent: o, cache: o }),
                  (i.memoizedState = u),
                  i.lanes === 0 &&
                    (i.memoizedState = i.updateQueue.baseState = u),
                  $i(i, Ot, o))
                : ((o = d.cache),
                  $i(i, Ot, o),
                  o !== u.cache && v0(i, [Ot], a, !0))),
          Vt(e, i, i.pendingProps.children, a),
          i.child
        );
      case 29:
        throw i.pendingProps;
    }
    throw Error(s(156, i.tag));
  }
  var x0 = me(null),
    Vr = null,
    _i = null;
  function $i(e, i, a) {
    Ye(x0, i._currentValue), (i._currentValue = a);
  }
  function Ri(e) {
    (e._currentValue = x0.current), $e(x0);
  }
  function m0(e, i, a) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & i) !== i
          ? ((e.childLanes |= i), o !== null && (o.childLanes |= i))
          : o !== null && (o.childLanes & i) !== i && (o.childLanes |= i),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function v0(e, i, a, o) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var d = u.dependencies;
      if (d !== null) {
        var E = u.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var B = d;
          d = u;
          for (var M = 0; M < i.length; M++)
            if (B.context === i[M]) {
              (d.lanes |= a),
                (B = d.alternate),
                B !== null && (B.lanes |= a),
                m0(d.return, a, e),
                o || (E = null);
              break e;
            }
          d = B.next;
        }
      } else if (u.tag === 18) {
        if (((E = u.return), E === null)) throw Error(s(341));
        (E.lanes |= a),
          (d = E.alternate),
          d !== null && (d.lanes |= a),
          m0(E, a, e),
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
  function Ts(e, i, a, o) {
    e = null;
    for (var u = i, d = !1; u !== null; ) {
      if (!d) {
        if ((u.flags & 524288) !== 0) d = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var E = u.alternate;
        if (E === null) throw Error(s(387));
        if (((E = E.memoizedProps), E !== null)) {
          var B = u.type;
          pn(u.pendingProps.value, E.value) ||
            (e !== null ? e.push(B) : (e = [B]));
        }
      } else if (u === vt.current) {
        if (((E = u.alternate), E === null)) throw Error(s(387));
        E.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(Xs) : (e = [Xs]));
      }
      u = u.return;
    }
    e !== null && v0(i, e, a, o), (i.flags |= 262144);
  }
  function ol(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!pn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function kr(e) {
    (Vr = e),
      (_i = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Gt(e) {
    return Tx(Vr, e);
  }
  function ll(e, i) {
    return Vr === null && kr(e), Tx(e, i);
  }
  function Tx(e, i) {
    var a = i._currentValue;
    if (((i = { context: i, memoizedValue: a, next: null }), _i === null)) {
      if (e === null) throw Error(s(308));
      (_i = i),
        (e.dependencies = { lanes: 0, firstContext: i }),
        (e.flags |= 524288);
    } else _i = _i.next = i;
    return a;
  }
  var Ji = !1;
  function y0(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function g0(e, i) {
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
  function Ii(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function er(e, i, a) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (ft & 2) !== 0)) {
      var u = o.pending;
      return (
        u === null ? (i.next = i) : ((i.next = u.next), (u.next = i)),
        (o.pending = i),
        (i = jo(e)),
        lp(e, null, a),
        i
      );
    }
    return qo(e, o, i, a), jo(e);
  }
  function _s(e, i, a) {
    if (
      ((i = i.updateQueue), i !== null && ((i = i.shared), (a & 4194176) !== 0))
    ) {
      var o = i.lanes;
      (o &= e.pendingLanes), (a |= o), (i.lanes = a), Q(e, a);
    }
  }
  function E0(e, i) {
    var a = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), a === o)) {
      var u = null,
        d = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var E = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          d === null ? (u = d = E) : (d = d.next = E), (a = a.next);
        } while (a !== null);
        d === null ? (u = d = i) : (d = d.next = i);
      } else u = d = i;
      (a = {
        baseState: o.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: d,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (e.updateQueue = a);
      return;
    }
    (e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = i) : (e.next = i),
      (a.lastBaseUpdate = i);
  }
  var b0 = !1;
  function Rs() {
    if (b0) {
      var e = Sa;
      if (e !== null) throw e;
    }
  }
  function ws(e, i, a, o) {
    b0 = !1;
    var u = e.updateQueue;
    Ji = !1;
    var d = u.firstBaseUpdate,
      E = u.lastBaseUpdate,
      B = u.shared.pending;
    if (B !== null) {
      u.shared.pending = null;
      var M = B,
        k = M.next;
      (M.next = null), E === null ? (d = k) : (E.next = k), (E = M);
      var ne = e.alternate;
      ne !== null &&
        ((ne = ne.updateQueue),
        (B = ne.lastBaseUpdate),
        B !== E &&
          (B === null ? (ne.firstBaseUpdate = k) : (B.next = k),
          (ne.lastBaseUpdate = M)));
    }
    if (d !== null) {
      var se = u.baseState;
      (E = 0), (ne = k = M = null), (B = d);
      do {
        var Z = B.lane & -536870913,
          te = Z !== B.lane;
        if (te ? (Pe & Z) === Z : (o & Z) === Z) {
          Z !== 0 && Z === Aa && (b0 = !0),
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
            Z = i;
            var xt = a;
            switch (Te.tag) {
              case 1:
                if (((be = Te.payload), typeof be == "function")) {
                  se = be.call(xt, se, Z);
                  break e;
                }
                se = be;
                break e;
              case 3:
                be.flags = (be.flags & -65537) | 128;
              case 0:
                if (
                  ((be = Te.payload),
                  (Z = typeof be == "function" ? be.call(xt, se, Z) : be),
                  Z == null)
                )
                  break e;
                se = O({}, se, Z);
                break e;
              case 2:
                Ji = !0;
            }
          }
          (Z = B.callback),
            Z !== null &&
              ((e.flags |= 64),
              te && (e.flags |= 8192),
              (te = u.callbacks),
              te === null ? (u.callbacks = [Z]) : te.push(Z));
        } else
          (te = {
            lane: Z,
            tag: B.tag,
            payload: B.payload,
            callback: B.callback,
            next: null,
          }),
            ne === null ? ((k = ne = te), (M = se)) : (ne = ne.next = te),
            (E |= Z);
        if (((B = B.next), B === null)) {
          if (((B = u.shared.pending), B === null)) break;
          (te = B),
            (B = te.next),
            (te.next = null),
            (u.lastBaseUpdate = te),
            (u.shared.pending = null);
        }
      } while (!0);
      ne === null && (M = se),
        (u.baseState = M),
        (u.firstBaseUpdate = k),
        (u.lastBaseUpdate = ne),
        d === null && (u.shared.lanes = 0),
        (ar |= E),
        (e.lanes = E),
        (e.memoizedState = se);
    }
  }
  function _x(e, i) {
    if (typeof e != "function") throw Error(s(191, e));
    e.call(i);
  }
  function Rx(e, i) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) _x(a[e], i);
  }
  function Os(e, i) {
    try {
      var a = i.updateQueue,
        o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            o = void 0;
            var d = a.create,
              E = a.inst;
            (o = d()), (E.destroy = o);
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (B) {
      nt(i, i.return, B);
    }
  }
  function tr(e, i, a) {
    try {
      var o = i.updateQueue,
        u = o !== null ? o.lastEffect : null;
      if (u !== null) {
        var d = u.next;
        o = d;
        do {
          if ((o.tag & e) === e) {
            var E = o.inst,
              B = E.destroy;
            if (B !== void 0) {
              (E.destroy = void 0), (u = i);
              var M = a;
              try {
                B();
              } catch (k) {
                nt(u, M, k);
              }
            }
          }
          o = o.next;
        } while (o !== d);
      }
    } catch (k) {
      nt(i, i.return, k);
    }
  }
  function wx(e) {
    var i = e.updateQueue;
    if (i !== null) {
      var a = e.stateNode;
      try {
        Rx(i, a);
      } catch (o) {
        nt(e, e.return, o);
      }
    }
  }
  function Ox(e, i, a) {
    (a.props = Hr(e.type, e.memoizedProps)), (a.state = e.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (o) {
      nt(e, i, o);
    }
  }
  function qr(e, i) {
    try {
      var a = e.ref;
      if (a !== null) {
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
        typeof a == "function" ? (e.refCleanup = a(u)) : (a.current = u);
      }
    } catch (d) {
      nt(e, i, d);
    }
  }
  function xn(e, i) {
    var a = e.ref,
      o = e.refCleanup;
    if (a !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (u) {
          nt(e, i, u);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          nt(e, i, u);
        }
      else a.current = null;
  }
  function Mx(e) {
    var i = e.type,
      a = e.memoizedProps,
      o = e.stateNode;
    try {
      e: switch (i) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && o.focus();
          break e;
        case "img":
          a.src ? (o.src = a.src) : a.srcSet && (o.srcset = a.srcSet);
      }
    } catch (u) {
      nt(e, e.return, u);
    }
  }
  function Fx(e, i, a) {
    try {
      var o = e.stateNode;
      ab(o, e.type, a, i), (o[de] = i);
    } catch (u) {
      nt(e, e.return, u);
    }
  }
  function Lx(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    );
  }
  function A0(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Lx(e.return)) return null;
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
  function S0(e, i, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode),
        i
          ? a.nodeType === 8
            ? a.parentNode.insertBefore(e, i)
            : a.insertBefore(e, i)
          : (a.nodeType === 8
              ? ((i = a.parentNode), i.insertBefore(e, a))
              : ((i = a), i.appendChild(e)),
            (a = a._reactRootContainer),
            a != null || i.onclick !== null || (i.onclick = Al));
    else if (o !== 4 && o !== 27 && ((e = e.child), e !== null))
      for (S0(e, i, a), e = e.sibling; e !== null; )
        S0(e, i, a), (e = e.sibling);
  }
  function ul(e, i, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode), i ? a.insertBefore(e, i) : a.appendChild(e);
    else if (o !== 4 && o !== 27 && ((e = e.child), e !== null))
      for (ul(e, i, a), e = e.sibling; e !== null; )
        ul(e, i, a), (e = e.sibling);
  }
  var wi = !1,
    dt = !1,
    C0 = !1,
    Ux = typeof WeakSet == "function" ? WeakSet : Set,
    Ft = null,
    zx = !1;
  function U4(e, i) {
    if (((e = e.containerInfo), (J0 = Rl), (e = Id(e)), Bc(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var o = a.getSelection && a.getSelection();
          if (o && o.rangeCount !== 0) {
            a = o.anchorNode;
            var u = o.anchorOffset,
              d = o.focusNode;
            o = o.focusOffset;
            try {
              a.nodeType, d.nodeType;
            } catch (Te) {
              a = null;
              break e;
            }
            var E = 0,
              B = -1,
              M = -1,
              k = 0,
              ne = 0,
              se = e,
              Z = null;
            t: for (;;) {
              for (
                var te;
                se !== a || (u !== 0 && se.nodeType !== 3) || (B = E + u),
                  se !== d || (o !== 0 && se.nodeType !== 3) || (M = E + o),
                  se.nodeType === 3 && (E += se.nodeValue.length),
                  (te = se.firstChild) !== null;

              )
                (Z = se), (se = te);
              for (;;) {
                if (se === e) break t;
                if (
                  (Z === a && ++k === u && (B = E),
                  Z === d && ++ne === o && (M = E),
                  (te = se.nextSibling) !== null)
                )
                  break;
                (se = Z), (Z = se.parentNode);
              }
              se = te;
            }
            a = B === -1 || M === -1 ? null : { start: B, end: M };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      I0 = { focusedElem: e, selectionRange: a }, Rl = !1, Ft = i;
      Ft !== null;

    )
      if (
        ((i = Ft), (e = i.child), (i.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = i), (Ft = e);
      else
        for (; Ft !== null; ) {
          switch (((i = Ft), (d = i.alternate), (e = i.flags), i.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && d !== null) {
                (e = void 0),
                  (a = i),
                  (u = d.memoizedProps),
                  (d = d.memoizedState),
                  (o = a.stateNode);
                try {
                  var be = Hr(a.type, u, a.elementType === a.type);
                  (e = o.getSnapshotBeforeUpdate(be, d)),
                    (o.__reactInternalSnapshotBeforeUpdate = e);
                } catch (Te) {
                  nt(a, a.return, Te);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = i.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  rf(e);
                else if (a === 1)
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
            (e.return = i.return), (Ft = e);
            break;
          }
          Ft = i.return;
        }
    return (be = zx), (zx = !1), be;
  }
  function Nx(e, i, a) {
    var o = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Mi(e, a), o & 4 && Os(5, a);
        break;
      case 1:
        if ((Mi(e, a), o & 4))
          if (((e = a.stateNode), i === null))
            try {
              e.componentDidMount();
            } catch (B) {
              nt(a, a.return, B);
            }
          else {
            var u = Hr(a.type, i.memoizedProps);
            i = i.memoizedState;
            try {
              e.componentDidUpdate(u, i, e.__reactInternalSnapshotBeforeUpdate);
            } catch (B) {
              nt(a, a.return, B);
            }
          }
        o & 64 && wx(a), o & 512 && qr(a, a.return);
        break;
      case 3:
        if ((Mi(e, a), o & 64 && ((o = a.updateQueue), o !== null))) {
          if (((e = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            Rx(o, e);
          } catch (B) {
            nt(a, a.return, B);
          }
        }
        break;
      case 26:
        Mi(e, a), o & 512 && qr(a, a.return);
        break;
      case 27:
      case 5:
        Mi(e, a), i === null && o & 4 && Mx(a), o & 512 && qr(a, a.return);
        break;
      case 12:
        Mi(e, a);
        break;
      case 13:
        Mi(e, a), o & 4 && kx(e, a);
        break;
      case 22:
        if (((u = a.memoizedState !== null || wi), !u)) {
          i = (i !== null && i.memoizedState !== null) || dt;
          var d = wi,
            E = dt;
          (wi = u),
            (dt = i) && !E ? nr(e, a, (a.subtreeFlags & 8772) !== 0) : Mi(e, a),
            (wi = d),
            (dt = E);
        }
        o & 512 &&
          (a.memoizedProps.mode === "manual"
            ? qr(a, a.return)
            : xn(a, a.return));
        break;
      default:
        Mi(e, a);
    }
  }
  function Hx(e) {
    var i = e.alternate;
    i !== null && ((e.alternate = null), Hx(i)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((i = e.stateNode), i !== null && Ne(i)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Ct = null,
    mn = !1;
  function Oi(e, i, a) {
    for (a = a.child; a !== null; ) Vx(e, i, a), (a = a.sibling);
  }
  function Vx(e, i, a) {
    if (Rt && typeof Rt.onCommitFiberUnmount == "function")
      try {
        Rt.onCommitFiberUnmount(Yt, a);
      } catch (E) {}
    switch (a.tag) {
      case 26:
        dt || xn(a, i),
          Oi(e, i, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        dt || xn(a, i);
        var o = Ct,
          u = mn;
        for (
          Ct = a.stateNode, Oi(e, i, a), a = a.stateNode, i = a.attributes;
          i.length;

        )
          a.removeAttributeNode(i[0]);
        Ne(a), (Ct = o), (mn = u);
        break;
      case 5:
        dt || xn(a, i);
      case 6:
        u = Ct;
        var d = mn;
        if (((Ct = null), Oi(e, i, a), (Ct = u), (mn = d), Ct !== null))
          if (mn)
            try {
              (e = Ct),
                (o = a.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(o)
                  : e.removeChild(o);
            } catch (E) {
              nt(a, i, E);
            }
          else
            try {
              Ct.removeChild(a.stateNode);
            } catch (E) {
              nt(a, i, E);
            }
        break;
      case 18:
        Ct !== null &&
          (mn
            ? ((i = Ct),
              (a = a.stateNode),
              i.nodeType === 8
                ? nf(i.parentNode, a)
                : i.nodeType === 1 && nf(i, a),
              Zs(i))
            : nf(Ct, a.stateNode));
        break;
      case 4:
        (o = Ct),
          (u = mn),
          (Ct = a.stateNode.containerInfo),
          (mn = !0),
          Oi(e, i, a),
          (Ct = o),
          (mn = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        dt || tr(2, a, i), dt || tr(4, a, i), Oi(e, i, a);
        break;
      case 1:
        dt ||
          (xn(a, i),
          (o = a.stateNode),
          typeof o.componentWillUnmount == "function" && Ox(a, i, o)),
          Oi(e, i, a);
        break;
      case 21:
        Oi(e, i, a);
        break;
      case 22:
        dt || xn(a, i),
          (dt = (o = dt) || a.memoizedState !== null),
          Oi(e, i, a),
          (dt = o);
        break;
      default:
        Oi(e, i, a);
    }
  }
  function kx(e, i) {
    if (
      i.memoizedState === null &&
      ((e = i.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Zs(e);
      } catch (a) {
        nt(i, i.return, a);
      }
  }
  function z4(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var i = e.stateNode;
        return i === null && (i = e.stateNode = new Ux()), i;
      case 22:
        return (
          (e = e.stateNode),
          (i = e._retryCache),
          i === null && (i = e._retryCache = new Ux()),
          i
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function D0(e, i) {
    var a = z4(e);
    i.forEach(function (o) {
      var u = Z4.bind(null, e, o);
      a.has(o) || (a.add(o), o.then(u, u));
    });
  }
  function On(e, i) {
    var a = i.deletions;
    if (a !== null)
      for (var o = 0; o < a.length; o++) {
        var u = a[o],
          d = e,
          E = i,
          B = E;
        e: for (; B !== null; ) {
          switch (B.tag) {
            case 27:
            case 5:
              (Ct = B.stateNode), (mn = !1);
              break e;
            case 3:
              (Ct = B.stateNode.containerInfo), (mn = !0);
              break e;
            case 4:
              (Ct = B.stateNode.containerInfo), (mn = !0);
              break e;
          }
          B = B.return;
        }
        if (Ct === null) throw Error(s(160));
        Vx(d, E, u),
          (Ct = null),
          (mn = !1),
          (d = u.alternate),
          d !== null && (d.return = null),
          (u.return = null);
      }
    if (i.subtreeFlags & 13878)
      for (i = i.child; i !== null; ) qx(i, e), (i = i.sibling);
  }
  var $n = null;
  function qx(e, i) {
    var a = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        On(i, e),
          Mn(e),
          o & 4 && (tr(3, e, e.return), Os(3, e), tr(5, e, e.return));
        break;
      case 1:
        On(i, e),
          Mn(e),
          o & 512 && (dt || a === null || xn(a, a.return)),
          o & 64 &&
            wi &&
            ((e = e.updateQueue),
            e !== null &&
              ((o = e.callbacks),
              o !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? o : a.concat(o)))));
        break;
      case 26:
        var u = $n;
        if (
          (On(i, e),
          Mn(e),
          o & 512 && (dt || a === null || xn(a, a.return)),
          o & 4)
        ) {
          var d = a !== null ? a.memoizedState : null;
          if (((o = e.memoizedState), a === null))
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  (o = e.type),
                    (a = e.memoizedProps),
                    (u = u.ownerDocument || u);
                  t: switch (o) {
                    case "title":
                      (d = u.getElementsByTagName("title")[0]),
                        (!d ||
                          d[Xe] ||
                          d[he] ||
                          d.namespaceURI === "http://www.w3.org/2000/svg" ||
                          d.hasAttribute("itemprop")) &&
                          ((d = u.createElement(o)),
                          u.head.insertBefore(
                            d,
                            u.querySelector("head > title"),
                          )),
                        kt(d, o, a),
                        (d[he] = e),
                        Ze(d),
                        (o = d);
                      break e;
                    case "link":
                      var E = Mm("link", "href", u).get(o + (a.href || ""));
                      if (E) {
                        for (var B = 0; B < E.length; B++)
                          if (
                            ((d = E[B]),
                            d.getAttribute("href") ===
                              (a.href == null ? null : a.href) &&
                              d.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              d.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              d.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            E.splice(B, 1);
                            break t;
                          }
                      }
                      (d = u.createElement(o)),
                        kt(d, o, a),
                        u.head.appendChild(d);
                      break;
                    case "meta":
                      if (
                        (E = Mm("meta", "content", u).get(
                          o + (a.content || ""),
                        ))
                      ) {
                        for (B = 0; B < E.length; B++)
                          if (
                            ((d = E[B]),
                            d.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              d.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              d.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              d.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              d.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            E.splice(B, 1);
                            break t;
                          }
                      }
                      (d = u.createElement(o)),
                        kt(d, o, a),
                        u.head.appendChild(d);
                      break;
                    default:
                      throw Error(s(468, o));
                  }
                  (d[he] = e), Ze(d), (o = d);
                }
                e.stateNode = o;
              } else Fm(u, e.type, e.stateNode);
            else e.stateNode = Om(u, o, e.memoizedProps);
          else
            d !== o
              ? (d === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : d.count--,
                o === null
                  ? Fm(u, e.type, e.stateNode)
                  : Om(u, o, e.memoizedProps))
              : o === null &&
                e.stateNode !== null &&
                Fx(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        if (o & 4 && e.alternate === null) {
          (u = e.stateNode), (d = e.memoizedProps);
          try {
            for (var M = u.firstChild; M; ) {
              var k = M.nextSibling,
                ne = M.nodeName;
              M[Xe] ||
                ne === "HEAD" ||
                ne === "BODY" ||
                ne === "SCRIPT" ||
                ne === "STYLE" ||
                (ne === "LINK" && M.rel.toLowerCase() === "stylesheet") ||
                u.removeChild(M),
                (M = k);
            }
            for (var se = e.type, Z = u.attributes; Z.length; )
              u.removeAttributeNode(Z[0]);
            kt(u, se, d), (u[he] = e), (u[de] = d);
          } catch (be) {
            nt(e, e.return, be);
          }
        }
      case 5:
        if (
          (On(i, e),
          Mn(e),
          o & 512 && (dt || a === null || xn(a, a.return)),
          e.flags & 32)
        ) {
          u = e.stateNode;
          try {
            ca(u, "");
          } catch (be) {
            nt(e, e.return, be);
          }
        }
        o & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), Fx(e, u, a !== null ? a.memoizedProps : u)),
          o & 1024 && (C0 = !0);
        break;
      case 6:
        if ((On(i, e), Mn(e), o & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (o = e.memoizedProps), (a = e.stateNode);
          try {
            a.nodeValue = o;
          } catch (be) {
            nt(e, e.return, be);
          }
        }
        break;
      case 3:
        if (
          ((Bl = null),
          (u = $n),
          ($n = Cl(i.containerInfo)),
          On(i, e),
          ($n = u),
          Mn(e),
          o & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Zs(i.containerInfo);
          } catch (be) {
            nt(e, e.return, be);
          }
        C0 && ((C0 = !1), jx(e));
        break;
      case 4:
        (o = $n),
          ($n = Cl(e.stateNode.containerInfo)),
          On(i, e),
          Mn(e),
          ($n = o);
        break;
      case 12:
        On(i, e), Mn(e);
        break;
      case 13:
        On(i, e),
          Mn(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (L0 = ut()),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), D0(e, o)));
        break;
      case 22:
        if (
          (o & 512 && (dt || a === null || xn(a, a.return)),
          (M = e.memoizedState !== null),
          (k = a !== null && a.memoizedState !== null),
          (ne = wi),
          (se = dt),
          (wi = ne || M),
          (dt = se || k),
          On(i, e),
          (dt = se),
          (wi = ne),
          Mn(e),
          (i = e.stateNode),
          (i._current = e),
          (i._visibility &= -3),
          (i._visibility |= i._pendingVisibility & 2),
          o & 8192 &&
            ((i._visibility = M ? i._visibility & -2 : i._visibility | 1),
            M && ((i = wi || dt), a === null || k || i || Ta(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
        )
          e: for (a = null, i = e; ; ) {
            if (i.tag === 5 || i.tag === 26 || i.tag === 27) {
              if (a === null) {
                k = a = i;
                try {
                  if (((u = k.stateNode), M))
                    (d = u.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none");
                  else {
                    (E = k.stateNode), (B = k.memoizedProps.style);
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
                  nt(k, k.return, be);
                }
              }
            } else if (i.tag === 6) {
              if (a === null) {
                k = i;
                try {
                  k.stateNode.nodeValue = M ? "" : k.memoizedProps;
                } catch (be) {
                  nt(k, k.return, be);
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
              a === i && (a = null), (i = i.return);
            }
            a === i && (a = null),
              (i.sibling.return = i.return),
              (i = i.sibling);
          }
        o & 4 &&
          ((o = e.updateQueue),
          o !== null &&
            ((a = o.retryQueue),
            a !== null && ((o.retryQueue = null), D0(e, a))));
        break;
      case 19:
        On(i, e),
          Mn(e),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), D0(e, o)));
        break;
      case 21:
        break;
      default:
        On(i, e), Mn(e);
    }
  }
  function Mn(e) {
    var i = e.flags;
    if (i & 2) {
      try {
        if (e.tag !== 27) {
          e: {
            for (var a = e.return; a !== null; ) {
              if (Lx(a)) {
                var o = a;
                break e;
              }
              a = a.return;
            }
            throw Error(s(160));
          }
          switch (o.tag) {
            case 27:
              var u = o.stateNode,
                d = A0(e);
              ul(e, d, u);
              break;
            case 5:
              var E = o.stateNode;
              o.flags & 32 && (ca(E, ""), (o.flags &= -33));
              var B = A0(e);
              ul(e, B, E);
              break;
            case 3:
            case 4:
              var M = o.stateNode.containerInfo,
                k = A0(e);
              S0(e, k, M);
              break;
            default:
              throw Error(s(161));
          }
        }
      } catch (ne) {
        nt(e, e.return, ne);
      }
      e.flags &= -3;
    }
    i & 4096 && (e.flags &= -4097);
  }
  function jx(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var i = e;
        jx(i),
          i.tag === 5 && i.flags & 1024 && i.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function Mi(e, i) {
    if (i.subtreeFlags & 8772)
      for (i = i.child; i !== null; ) Nx(e, i.alternate, i), (i = i.sibling);
  }
  function Ta(e) {
    for (e = e.child; e !== null; ) {
      var i = e;
      switch (i.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          tr(4, i, i.return), Ta(i);
          break;
        case 1:
          xn(i, i.return);
          var a = i.stateNode;
          typeof a.componentWillUnmount == "function" && Ox(i, i.return, a),
            Ta(i);
          break;
        case 26:
        case 27:
        case 5:
          xn(i, i.return), Ta(i);
          break;
        case 22:
          xn(i, i.return), i.memoizedState === null && Ta(i);
          break;
        default:
          Ta(i);
      }
      e = e.sibling;
    }
  }
  function nr(e, i, a) {
    for (a = a && (i.subtreeFlags & 8772) !== 0, i = i.child; i !== null; ) {
      var o = i.alternate,
        u = e,
        d = i,
        E = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          nr(u, d, a), Os(4, d);
          break;
        case 1:
          if (
            (nr(u, d, a),
            (o = d),
            (u = o.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (k) {
              nt(o, o.return, k);
            }
          if (((o = d), (u = o.updateQueue), u !== null)) {
            var B = o.stateNode;
            try {
              var M = u.shared.hiddenCallbacks;
              if (M !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < M.length; u++)
                  _x(M[u], B);
            } catch (k) {
              nt(o, o.return, k);
            }
          }
          a && E & 64 && wx(d), qr(d, d.return);
          break;
        case 26:
        case 27:
        case 5:
          nr(u, d, a), a && o === null && E & 4 && Mx(d), qr(d, d.return);
          break;
        case 12:
          nr(u, d, a);
          break;
        case 13:
          nr(u, d, a), a && E & 4 && kx(u, d);
          break;
        case 22:
          d.memoizedState === null && nr(u, d, a), qr(d, d.return);
          break;
        default:
          nr(u, d, a);
      }
      i = i.sibling;
    }
  }
  function B0(e, i) {
    var a = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      i.memoizedState !== null &&
        i.memoizedState.cachePool !== null &&
        (e = i.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && bs(a));
  }
  function T0(e, i) {
    (e = null),
      i.alternate !== null && (e = i.alternate.memoizedState.cache),
      (i = i.memoizedState.cache),
      i !== e && (i.refCount++, e != null && bs(e));
  }
  function ir(e, i, a, o) {
    if (i.subtreeFlags & 10256)
      for (i = i.child; i !== null; ) Px(e, i, a, o), (i = i.sibling);
  }
  function Px(e, i, a, o) {
    var u = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        ir(e, i, a, o), u & 2048 && Os(9, i);
        break;
      case 3:
        ir(e, i, a, o),
          u & 2048 &&
            ((e = null),
            i.alternate !== null && (e = i.alternate.memoizedState.cache),
            (i = i.memoizedState.cache),
            i !== e && (i.refCount++, e != null && bs(e)));
        break;
      case 12:
        if (u & 2048) {
          ir(e, i, a, o), (e = i.stateNode);
          try {
            var d = i.memoizedProps,
              E = d.id,
              B = d.onPostCommit;
            typeof B == "function" &&
              B(
                E,
                i.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (M) {
            nt(i, i.return, M);
          }
        } else ir(e, i, a, o);
        break;
      case 23:
        break;
      case 22:
        (d = i.stateNode),
          i.memoizedState !== null
            ? d._visibility & 4
              ? ir(e, i, a, o)
              : Ms(e, i)
            : d._visibility & 4
              ? ir(e, i, a, o)
              : ((d._visibility |= 4),
                _a(e, i, a, o, (i.subtreeFlags & 10256) !== 0)),
          u & 2048 && B0(i.alternate, i);
        break;
      case 24:
        ir(e, i, a, o), u & 2048 && T0(i.alternate, i);
        break;
      default:
        ir(e, i, a, o);
    }
  }
  function _a(e, i, a, o, u) {
    for (u = u && (i.subtreeFlags & 10256) !== 0, i = i.child; i !== null; ) {
      var d = e,
        E = i,
        B = a,
        M = o,
        k = E.flags;
      switch (E.tag) {
        case 0:
        case 11:
        case 15:
          _a(d, E, B, M, u), Os(8, E);
          break;
        case 23:
          break;
        case 22:
          var ne = E.stateNode;
          E.memoizedState !== null
            ? ne._visibility & 4
              ? _a(d, E, B, M, u)
              : Ms(d, E)
            : ((ne._visibility |= 4), _a(d, E, B, M, u)),
            u && k & 2048 && B0(E.alternate, E);
          break;
        case 24:
          _a(d, E, B, M, u), u && k & 2048 && T0(E.alternate, E);
          break;
        default:
          _a(d, E, B, M, u);
      }
      i = i.sibling;
    }
  }
  function Ms(e, i) {
    if (i.subtreeFlags & 10256)
      for (i = i.child; i !== null; ) {
        var a = e,
          o = i,
          u = o.flags;
        switch (o.tag) {
          case 22:
            Ms(a, o), u & 2048 && B0(o.alternate, o);
            break;
          case 24:
            Ms(a, o), u & 2048 && T0(o.alternate, o);
            break;
          default:
            Ms(a, o);
        }
        i = i.sibling;
      }
  }
  var Fs = 8192;
  function Ra(e) {
    if (e.subtreeFlags & Fs)
      for (e = e.child; e !== null; ) Yx(e), (e = e.sibling);
  }
  function Yx(e) {
    switch (e.tag) {
      case 26:
        Ra(e),
          e.flags & Fs &&
            e.memoizedState !== null &&
            Cb($n, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Ra(e);
        break;
      case 3:
      case 4:
        var i = $n;
        ($n = Cl(e.stateNode.containerInfo)), Ra(e), ($n = i);
        break;
      case 22:
        e.memoizedState === null &&
          ((i = e.alternate),
          i !== null && i.memoizedState !== null
            ? ((i = Fs), (Fs = 16777216), Ra(e), (Fs = i))
            : Ra(e));
        break;
      default:
        Ra(e);
    }
  }
  function Xx(e) {
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
        for (var a = 0; a < i.length; a++) {
          var o = i[a];
          (Ft = o), Kx(o, e);
        }
      Xx(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Gx(e), (e = e.sibling);
  }
  function Gx(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ls(e), e.flags & 2048 && tr(9, e, e.return);
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
          ? ((i._visibility &= -5), cl(e))
          : Ls(e);
        break;
      default:
        Ls(e);
    }
  }
  function cl(e) {
    var i = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (i !== null)
        for (var a = 0; a < i.length; a++) {
          var o = i[a];
          (Ft = o), Kx(o, e);
        }
      Xx(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((i = e), i.tag)) {
        case 0:
        case 11:
        case 15:
          tr(8, i, i.return), cl(i);
          break;
        case 22:
          (a = i.stateNode),
            a._visibility & 4 && ((a._visibility &= -5), cl(i));
          break;
        default:
          cl(i);
      }
      e = e.sibling;
    }
  }
  function Kx(e, i) {
    for (; Ft !== null; ) {
      var a = Ft;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          tr(8, a, i);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var o = a.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          bs(a.memoizedState.cache);
      }
      if (((o = a.child), o !== null)) (o.return = a), (Ft = o);
      else
        e: for (a = e; Ft !== null; ) {
          o = Ft;
          var u = o.sibling,
            d = o.return;
          if ((Hx(o), o === a)) {
            Ft = null;
            break e;
          }
          if (u !== null) {
            (u.return = d), (Ft = u);
            break e;
          }
          Ft = d;
        }
    }
  }
  function N4(e, i, a, o) {
    (this.tag = e),
      (this.key = a),
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
  function Fn(e, i, a, o) {
    return new N4(e, i, a, o);
  }
  function _0(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function rr(e, i) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = Fn(e.tag, i, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = i),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 31457280),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (i = e.dependencies),
      (a.dependencies =
        i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function Qx(e, i) {
    e.flags &= 31457282;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = i),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (i = a.dependencies),
          (e.dependencies =
            i === null
              ? null
              : { lanes: i.lanes, firstContext: i.firstContext })),
      e
    );
  }
  function fl(e, i, a, o, u, d) {
    var E = 0;
    if (((o = e), typeof e == "function")) _0(e) && (E = 1);
    else if (typeof e == "string")
      E = Ab(e, a, jt.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case x:
          return jr(a.children, u, d, i);
        case h:
          (E = 8), (u |= 24);
          break;
        case m:
          return (
            (e = Fn(12, a, i, u | 2)), (e.elementType = m), (e.lanes = d), e
          );
        case S:
          return (e = Fn(13, a, i, u)), (e.elementType = S), (e.lanes = d), e;
        case A:
          return (e = Fn(19, a, i, u)), (e.elementType = A), (e.lanes = d), e;
        case D:
          return Zx(a, u, d, i);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case v:
              case g:
                E = 10;
                break e;
              case y:
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
            (a = Error(s(130, e === null ? "null" : typeof e, ""))),
            (o = null);
      }
    return (
      (i = Fn(E, a, i, u)), (i.elementType = e), (i.type = o), (i.lanes = d), i
    );
  }
  function jr(e, i, a, o) {
    return (e = Fn(7, e, o, i)), (e.lanes = a), e;
  }
  function Zx(e, i, a, o) {
    (e = Fn(22, e, o, i)), (e.elementType = D), (e.lanes = a);
    var u = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var d = u._current;
        if (d === null) throw Error(s(456));
        if ((u._pendingVisibility & 2) === 0) {
          var E = Gi(d, 2);
          E !== null && ((u._pendingVisibility |= 2), It(E, d, 2));
        }
      },
      attach: function () {
        var d = u._current;
        if (d === null) throw Error(s(456));
        if ((u._pendingVisibility & 2) !== 0) {
          var E = Gi(d, 2);
          E !== null && ((u._pendingVisibility &= -3), It(E, d, 2));
        }
      },
    };
    return (e.stateNode = u), e;
  }
  function R0(e, i, a) {
    return (e = Fn(6, e, null, i)), (e.lanes = a), e;
  }
  function w0(e, i, a) {
    return (
      (i = Fn(4, e.children !== null ? e.children : [], e.key, i)),
      (i.lanes = a),
      (i.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      i
    );
  }
  function Fi(e) {
    e.flags |= 4;
  }
  function Wx(e, i) {
    if (i.type !== "stylesheet" || (i.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Lm(i))) {
      if (
        ((i = wn.current),
        i !== null &&
          ((Pe & 4194176) === Pe
            ? li !== null
            : ((Pe & 62914560) !== Pe && (Pe & 536870912) === 0) || i !== li))
      )
        throw ((ys = Uc), dp);
      e.flags |= 8192;
    }
  }
  function hl(e, i) {
    i !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((i = e.tag !== 22 ? Ei() : 536870912), (e.lanes |= i), (Oa |= i));
  }
  function Us(e, i) {
    if (!Ge)
      switch (e.tailMode) {
        case "hidden":
          i = e.tail;
          for (var a = null; i !== null; )
            i.alternate !== null && (a = i), (i = i.sibling);
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var o = null; a !== null; )
            a.alternate !== null && (o = a), (a = a.sibling);
          o === null
            ? i || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function ct(e) {
    var i = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      o = 0;
    if (i)
      for (var u = e.child; u !== null; )
        (a |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags & 31457280),
          (o |= u.flags & 31457280),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (a |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags),
          (o |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= o), (e.childLanes = a), i;
  }
  function H4(e, i, a) {
    var o = i.pendingProps;
    switch ((Fc(i), i.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ct(i), null;
      case 1:
        return ct(i), null;
      case 3:
        return (
          (a = i.stateNode),
          (o = null),
          e !== null && (o = e.memoizedState.cache),
          i.memoizedState.cache !== o && (i.flags |= 2048),
          Ri(Ot),
          Et(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (ps(i)
              ? Fi(i)
              : e === null ||
                (e.memoizedState.isDehydrated && (i.flags & 256) === 0) ||
                ((i.flags |= 1024), Wn !== null && (H0(Wn), (Wn = null)))),
          ct(i),
          null
        );
      case 26:
        return (
          (a = i.memoizedState),
          e === null
            ? (Fi(i),
              a !== null ? (ct(i), Wx(i, a)) : (ct(i), (i.flags &= -16777217)))
            : a
              ? a !== e.memoizedState
                ? (Fi(i), ct(i), Wx(i, a))
                : (ct(i), (i.flags &= -16777217))
              : (e.memoizedProps !== o && Fi(i), ct(i), (i.flags &= -16777217)),
          null
        );
      case 27:
        En(i), (a = tt.current);
        var u = i.type;
        if (e !== null && i.stateNode != null) e.memoizedProps !== o && Fi(i);
        else {
          if (!o) {
            if (i.stateNode === null) throw Error(s(166));
            return ct(i), null;
          }
          (e = jt.current),
            ps(i) ? fp(i) : ((e = Bm(u, o, a)), (i.stateNode = e), Fi(i));
        }
        return ct(i), null;
      case 5:
        if ((En(i), (a = i.type), e !== null && i.stateNode != null))
          e.memoizedProps !== o && Fi(i);
        else {
          if (!o) {
            if (i.stateNode === null) throw Error(s(166));
            return ct(i), null;
          }
          if (((e = jt.current), ps(i))) fp(i);
          else {
            switch (((u = Sl(tt.current)), e)) {
              case 1:
                e = u.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                e = u.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    e = u.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    e = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a,
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
                        ? u.createElement(a, { is: o.is })
                        : u.createElement(a);
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
            e: switch ((kt(e, a, o), a)) {
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
            e && Fi(i);
          }
        }
        return ct(i), (i.flags &= -16777217), null;
      case 6:
        if (e && i.stateNode != null) e.memoizedProps !== o && Fi(i);
        else {
          if (typeof o != "string" && i.stateNode === null) throw Error(s(166));
          if (((e = tt.current), ps(i))) {
            if (
              ((e = i.stateNode),
              (a = i.memoizedProps),
              (o = null),
              (u = Jt),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  o = u.memoizedProps;
              }
            (e[he] = i),
              (e = !!(
                e.nodeValue === a ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                Em(e.nodeValue, a)
              )),
              e || Mr(i);
          } else (e = Sl(e).createTextNode(o)), (e[he] = i), (i.stateNode = e);
        }
        return ct(i), null;
      case 13:
        if (
          ((o = i.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = ps(i)), o !== null && o.dehydrated !== null)) {
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
              xs(),
                (i.flags & 128) === 0 && (i.memoizedState = null),
                (i.flags |= 4);
            ct(i), (u = !1);
          } else Wn !== null && (H0(Wn), (Wn = null)), (u = !0);
          if (!u) return i.flags & 256 ? (Di(i), i) : (Di(i), null);
        }
        if ((Di(i), (i.flags & 128) !== 0)) return (i.lanes = a), i;
        if (
          ((a = o !== null), (e = e !== null && e.memoizedState !== null), a)
        ) {
          (o = i.child),
            (u = null),
            o.alternate !== null &&
              o.alternate.memoizedState !== null &&
              o.alternate.memoizedState.cachePool !== null &&
              (u = o.alternate.memoizedState.cachePool.pool);
          var d = null;
          o.memoizedState !== null &&
            o.memoizedState.cachePool !== null &&
            (d = o.memoizedState.cachePool.pool),
            d !== u && (o.flags |= 2048);
        }
        return (
          a !== e && a && (i.child.flags |= 8192),
          hl(i, i.updateQueue),
          ct(i),
          null
        );
      case 4:
        return Et(), e === null && Z0(i.stateNode.containerInfo), ct(i), null;
      case 10:
        return Ri(i.type), ct(i), null;
      case 19:
        if (($e(wt), (u = i.memoizedState), u === null)) return ct(i), null;
        if (((o = (i.flags & 128) !== 0), (d = u.rendering), d === null))
          if (o) Us(u, !1);
          else {
            if (pt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = i.child; e !== null; ) {
                if (((d = Zo(e)), d !== null)) {
                  for (
                    i.flags |= 128,
                      Us(u, !1),
                      e = d.updateQueue,
                      i.updateQueue = e,
                      hl(i, e),
                      i.subtreeFlags = 0,
                      e = a,
                      a = i.child;
                    a !== null;

                  )
                    Qx(a, e), (a = a.sibling);
                  return Ye(wt, (wt.current & 1) | 2), i.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              ut() > dl &&
              ((i.flags |= 128), (o = !0), Us(u, !1), (i.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = Zo(d)), e !== null)) {
              if (
                ((i.flags |= 128),
                (o = !0),
                (e = e.updateQueue),
                (i.updateQueue = e),
                hl(i, e),
                Us(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !d.alternate &&
                  !Ge)
              )
                return ct(i), null;
            } else
              2 * ut() - u.renderingStartTime > dl &&
                a !== 536870912 &&
                ((i.flags |= 128), (o = !0), Us(u, !1), (i.lanes = 4194304));
          u.isBackwards
            ? ((d.sibling = i.child), (i.child = d))
            : ((e = u.last),
              e !== null ? (e.sibling = d) : (i.child = d),
              (u.last = d));
        }
        return u.tail !== null
          ? ((i = u.tail),
            (u.rendering = i),
            (u.tail = i.sibling),
            (u.renderingStartTime = ut()),
            (i.sibling = null),
            (e = wt.current),
            Ye(wt, o ? (e & 1) | 2 : e & 1),
            i)
          : (ct(i), null);
      case 22:
      case 23:
        return (
          Di(i),
          Nc(),
          (o = i.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== o && (i.flags |= 8192)
            : o && (i.flags |= 8192),
          o
            ? (a & 536870912) !== 0 &&
              (i.flags & 128) === 0 &&
              (ct(i), i.subtreeFlags & 6 && (i.flags |= 8192))
            : ct(i),
          (a = i.updateQueue),
          a !== null && hl(i, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (o = null),
          i.memoizedState !== null &&
            i.memoizedState.cachePool !== null &&
            (o = i.memoizedState.cachePool.pool),
          o !== a && (i.flags |= 2048),
          e !== null && $e(Lr),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          i.memoizedState.cache !== a && (i.flags |= 2048),
          Ri(Ot),
          ct(i),
          null
        );
      case 25:
        return null;
    }
    throw Error(s(156, i.tag));
  }
  function V4(e, i) {
    switch ((Fc(i), i.tag)) {
      case 1:
        return (
          (e = i.flags), e & 65536 ? ((i.flags = (e & -65537) | 128), i) : null
        );
      case 3:
        return (
          Ri(Ot),
          Et(),
          (e = i.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((i.flags = (e & -65537) | 128), i)
            : null
        );
      case 26:
      case 27:
      case 5:
        return En(i), null;
      case 13:
        if (
          (Di(i), (e = i.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (i.alternate === null) throw Error(s(340));
          xs();
        }
        return (
          (e = i.flags), e & 65536 ? ((i.flags = (e & -65537) | 128), i) : null
        );
      case 19:
        return $e(wt), null;
      case 4:
        return Et(), null;
      case 10:
        return Ri(i.type), null;
      case 22:
      case 23:
        return (
          Di(i),
          Nc(),
          e !== null && $e(Lr),
          (e = i.flags),
          e & 65536 ? ((i.flags = (e & -65537) | 128), i) : null
        );
      case 24:
        return Ri(Ot), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function $x(e, i) {
    switch ((Fc(i), i.tag)) {
      case 3:
        Ri(Ot), Et();
        break;
      case 26:
      case 27:
      case 5:
        En(i);
        break;
      case 4:
        Et();
        break;
      case 13:
        Di(i);
        break;
      case 19:
        $e(wt);
        break;
      case 10:
        Ri(i.type);
        break;
      case 22:
      case 23:
        Di(i), Nc(), e !== null && $e(Lr);
        break;
      case 24:
        Ri(Ot);
    }
  }
  var k4 = {
      getCacheForType: function (e) {
        var i = Gt(Ot),
          a = i.data.get(e);
        return a === void 0 && ((a = e()), i.data.set(e, a)), a;
      },
    },
    q4 = typeof WeakMap == "function" ? WeakMap : Map,
    ft = 0,
    it = null,
    Le = null,
    Pe = 0,
    rt = 0,
    vn = null,
    Li = !1,
    wa = !1,
    O0 = !1,
    Ui = 0,
    pt = 0,
    ar = 0,
    Pr = 0,
    M0 = 0,
    Ln = 0,
    Oa = 0,
    zs = null,
    ci = null,
    F0 = !1,
    L0 = 0,
    dl = 1 / 0,
    pl = null,
    sr = null,
    xl = !1,
    Yr = null,
    Ns = 0,
    U0 = 0,
    z0 = null,
    Hs = 0,
    N0 = null;
  function yn() {
    if ((ft & 2) !== 0 && Pe !== 0) return Pe & -Pe;
    if (q.T !== null) {
      var e = Aa;
      return e !== 0 ? e : X0();
    }
    return fe();
  }
  function Jx() {
    Ln === 0 && (Ln = (Pe & 536870912) === 0 || Ge ? gi() : 536870912);
    var e = wn.current;
    return e !== null && (e.flags |= 32), Ln;
  }
  function It(e, i, a) {
    ((e === it && rt === 2) || e.cancelPendingCommit !== null) &&
      (Ma(e, 0), zi(e, Pe, Ln, !1)),
      bi(e, a),
      ((ft & 2) === 0 || e !== it) &&
        (e === it &&
          ((ft & 2) === 0 && (Pr |= a), pt === 4 && zi(e, Pe, Ln, !1)),
        fi(e));
  }
  function Ix(e, i, a) {
    if ((ft & 6) !== 0) throw Error(s(327));
    var o = (!a && (i & 60) === 0 && (i & e.expiredLanes) === 0) || yi(e, i),
      u = o ? Y4(e, i) : q0(e, i, !0),
      d = o;
    do {
      if (u === 0) {
        wa && !o && zi(e, i, 0, !1);
        break;
      } else if (u === 6) zi(e, i, 0, !Li);
      else {
        if (((a = e.current.alternate), d && !j4(a))) {
          (u = q0(e, i, !1)), (d = !1);
          continue;
        }
        if (u === 2) {
          if (((d = i), e.errorRecoveryDisabledLanes & d)) var E = 0;
          else
            (E = e.pendingLanes & -536870913),
              (E = E !== 0 ? E : E & 536870912 ? 536870912 : 0);
          if (E !== 0) {
            i = E;
            e: {
              var B = e;
              u = zs;
              var M = B.current.memoizedState.isDehydrated;
              if ((M && (Ma(B, E).flags |= 256), (E = q0(B, E, !1)), E !== 2)) {
                if (O0 && !M) {
                  (B.errorRecoveryDisabledLanes |= d), (Pr |= d), (u = 4);
                  break e;
                }
                (d = ci), (ci = u), d !== null && H0(d);
              }
              u = E;
            }
            if (((d = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Ma(e, 0), zi(e, i, 0, !0);
          break;
        }
        e: {
          switch (((o = e), u)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((i & 4194176) === i) {
                zi(o, i, Ln, !Li);
                break e;
              }
              break;
            case 2:
              ci = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if (
            ((o.finishedWork = a),
            (o.finishedLanes = i),
            (i & 62914560) === i && ((d = L0 + 300 - ut()), 10 < d))
          ) {
            if ((zi(o, i, Ln, !Li), vi(o, 0) !== 0)) break e;
            o.timeoutHandle = Sm(
              em.bind(null, o, a, ci, pl, F0, i, Ln, Pr, Oa, Li, 2, -0, 0),
              d,
            );
            break e;
          }
          em(o, a, ci, pl, F0, i, Ln, Pr, Oa, Li, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    fi(e);
  }
  function H0(e) {
    ci === null ? (ci = e) : ci.push.apply(ci, e);
  }
  function em(e, i, a, o, u, d, E, B, M, k, ne, se, Z) {
    var te = i.subtreeFlags;
    if (
      (te & 8192 || (te & 16785408) === 16785408) &&
      ((Ys = { stylesheets: null, count: 0, unsuspend: Sb }),
      Yx(i),
      (i = Db()),
      i !== null)
    ) {
      (e.cancelPendingCommit = i(om.bind(null, e, a, o, u, E, B, M, 1, se, Z))),
        zi(e, d, E, !k);
      return;
    }
    om(e, a, o, u, E, B, M, ne, se, Z);
  }
  function j4(e) {
    for (var i = e; ; ) {
      var a = i.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        i.flags & 16384 &&
        ((a = i.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var o = 0; o < a.length; o++) {
          var u = a[o],
            d = u.getSnapshot;
          u = u.value;
          try {
            if (!pn(d(), u)) return !1;
          } catch (E) {
            return !1;
          }
        }
      if (((a = i.child), i.subtreeFlags & 16384 && a !== null))
        (a.return = i), (i = a);
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
  function zi(e, i, a, o) {
    (i &= ~M0),
      (i &= ~Pr),
      (e.suspendedLanes |= i),
      (e.pingedLanes &= ~i),
      o && (e.warmLanes |= i),
      (o = e.expirationTimes);
    for (var u = i; 0 < u; ) {
      var d = 31 - Nt(u),
        E = 1 << d;
      (o[d] = -1), (u &= ~E);
    }
    a !== 0 && V(e, a, i);
  }
  function ml() {
    return (ft & 6) === 0 ? (Vs(0), !1) : !0;
  }
  function V0() {
    if (Le !== null) {
      if (rt === 0) var e = Le.return;
      else (e = Le), (_i = Vr = null), Xc(e), (Ea = null), (gs = 0), (e = Le);
      for (; e !== null; ) $x(e.alternate, e), (e = e.return);
      Le = null;
    }
  }
  function Ma(e, i) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var a = e.timeoutHandle;
    a !== -1 && ((e.timeoutHandle = -1), ob(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      V0(),
      (it = e),
      (Le = a = rr(e.current, null)),
      (Pe = i),
      (rt = 0),
      (vn = null),
      (Li = !1),
      (wa = yi(e, i)),
      (O0 = !1),
      (Oa = Ln = M0 = Pr = ar = pt = 0),
      (ci = zs = null),
      (F0 = !1),
      (i & 8) !== 0 && (i |= i & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= i; 0 < o; ) {
        var u = 31 - Nt(o),
          d = 1 << u;
        (i |= e[u]), (o &= ~d);
      }
    return (Ui = i), ko(), a;
  }
  function tm(e, i) {
    (Oe = null),
      (q.H = ui),
      i === vs
        ? ((i = mp()), (rt = 3))
        : i === dp
          ? ((i = mp()), (rt = 4))
          : (rt =
              i === px
                ? 8
                : i !== null &&
                    typeof i == "object" &&
                    typeof i.then == "function"
                  ? 6
                  : 1),
      (vn = i),
      Le === null && ((pt = 1), sl(e, Tn(i, e.current)));
  }
  function nm() {
    var e = q.H;
    return (q.H = ui), e === null ? ui : e;
  }
  function im() {
    var e = q.A;
    return (q.A = k4), e;
  }
  function k0() {
    (pt = 4),
      Li || ((Pe & 4194176) !== Pe && wn.current !== null) || (wa = !0),
      ((ar & 134217727) === 0 && (Pr & 134217727) === 0) ||
        it === null ||
        zi(it, Pe, Ln, !1);
  }
  function q0(e, i, a) {
    var o = ft;
    ft |= 2;
    var u = nm(),
      d = im();
    (it !== e || Pe !== i) && ((pl = null), Ma(e, i)), (i = !1);
    var E = pt;
    e: do
      try {
        if (rt !== 0 && Le !== null) {
          var B = Le,
            M = vn;
          switch (rt) {
            case 8:
              V0(), (E = 6);
              break e;
            case 3:
            case 2:
            case 6:
              wn.current === null && (i = !0);
              var k = rt;
              if (((rt = 0), (vn = null), Fa(e, B, M, k), a && wa)) {
                E = 0;
                break e;
              }
              break;
            default:
              (k = rt), (rt = 0), (vn = null), Fa(e, B, M, k);
          }
        }
        P4(), (E = pt);
        break;
      } catch (ne) {
        tm(e, ne);
      }
    while (!0);
    return (
      i && e.shellSuspendCounter++,
      (_i = Vr = null),
      (ft = o),
      (q.H = u),
      (q.A = d),
      Le === null && ((it = null), (Pe = 0), ko()),
      E
    );
  }
  function P4() {
    for (; Le !== null; ) rm(Le);
  }
  function Y4(e, i) {
    var a = ft;
    ft |= 2;
    var o = nm(),
      u = im();
    it !== e || Pe !== i
      ? ((pl = null), (dl = ut() + 500), Ma(e, i))
      : (wa = yi(e, i));
    e: do
      try {
        if (rt !== 0 && Le !== null) {
          i = Le;
          var d = vn;
          t: switch (rt) {
            case 1:
              (rt = 0), (vn = null), Fa(e, i, d, 1);
              break;
            case 2:
              if (pp(d)) {
                (rt = 0), (vn = null), am(i);
                break;
              }
              (i = function () {
                rt === 2 && it === e && (rt = 7), fi(e);
              }),
                d.then(i, i);
              break e;
            case 3:
              rt = 7;
              break e;
            case 4:
              rt = 5;
              break e;
            case 7:
              pp(d)
                ? ((rt = 0), (vn = null), am(i))
                : ((rt = 0), (vn = null), Fa(e, i, d, 7));
              break;
            case 5:
              var E = null;
              switch (Le.tag) {
                case 26:
                  E = Le.memoizedState;
                case 5:
                case 27:
                  var B = Le;
                  if (!E || Lm(E)) {
                    (rt = 0), (vn = null);
                    var M = B.sibling;
                    if (M !== null) Le = M;
                    else {
                      var k = B.return;
                      k !== null ? ((Le = k), vl(k)) : (Le = null);
                    }
                    break t;
                  }
              }
              (rt = 0), (vn = null), Fa(e, i, d, 5);
              break;
            case 6:
              (rt = 0), (vn = null), Fa(e, i, d, 6);
              break;
            case 8:
              V0(), (pt = 6);
              break e;
            default:
              throw Error(s(462));
          }
        }
        X4();
        break;
      } catch (ne) {
        tm(e, ne);
      }
    while (!0);
    return (
      (_i = Vr = null),
      (q.H = o),
      (q.A = u),
      (ft = a),
      Le !== null ? 0 : ((it = null), (Pe = 0), ko(), pt)
    );
  }
  function X4() {
    for (; Le !== null && !Pt(); ) rm(Le);
  }
  function rm(e) {
    var i = Bx(e.alternate, e, Ui);
    (e.memoizedProps = e.pendingProps), i === null ? vl(e) : (Le = i);
  }
  function am(e) {
    var i = e,
      a = i.alternate;
    switch (i.tag) {
      case 15:
      case 0:
        i = Ex(a, i, i.pendingProps, i.type, void 0, Pe);
        break;
      case 11:
        i = Ex(a, i, i.pendingProps, i.type.render, i.ref, Pe);
        break;
      case 5:
        Xc(i);
      default:
        $x(a, i), (i = Le = Qx(i, Ui)), (i = Bx(a, i, Ui));
    }
    (e.memoizedProps = e.pendingProps), i === null ? vl(e) : (Le = i);
  }
  function Fa(e, i, a, o) {
    (_i = Vr = null), Xc(i), (Ea = null), (gs = 0);
    var u = i.return;
    try {
      if (F4(e, u, i, a, Pe)) {
        (pt = 1), sl(e, Tn(a, e.current)), (Le = null);
        return;
      }
    } catch (d) {
      if (u !== null) throw ((Le = u), d);
      (pt = 1), sl(e, Tn(a, e.current)), (Le = null);
      return;
    }
    i.flags & 32768
      ? (Ge || o === 1
          ? (e = !0)
          : wa || (Pe & 536870912) !== 0
            ? (e = !1)
            : ((Li = e = !0),
              (o === 2 || o === 3 || o === 6) &&
                ((o = wn.current),
                o !== null && o.tag === 13 && (o.flags |= 16384))),
        sm(i, e))
      : vl(i);
  }
  function vl(e) {
    var i = e;
    do {
      if ((i.flags & 32768) !== 0) {
        sm(i, Li);
        return;
      }
      e = i.return;
      var a = H4(i.alternate, i, Ui);
      if (a !== null) {
        Le = a;
        return;
      }
      if (((i = i.sibling), i !== null)) {
        Le = i;
        return;
      }
      Le = i = e;
    } while (i !== null);
    pt === 0 && (pt = 5);
  }
  function sm(e, i) {
    do {
      var a = V4(e.alternate, e);
      if (a !== null) {
        (a.flags &= 32767), (Le = a);
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !i && ((e = e.sibling), e !== null))
      ) {
        Le = e;
        return;
      }
      Le = e = a;
    } while (e !== null);
    (pt = 6), (Le = null);
  }
  function om(e, i, a, o, u, d, E, B, M, k) {
    var ne = q.T,
      se = P.p;
    try {
      (P.p = 2), (q.T = null), G4(e, i, a, o, se, u, d, E, B, M, k);
    } finally {
      (q.T = ne), (P.p = se);
    }
  }
  function G4(e, i, a, o, u, d, E, B) {
    do La();
    while (Yr !== null);
    if ((ft & 6) !== 0) throw Error(s(327));
    var M = e.finishedWork;
    if (((o = e.finishedLanes), M === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), M === e.current))
      throw Error(s(177));
    (e.callbackNode = null),
      (e.callbackPriority = 0),
      (e.cancelPendingCommit = null);
    var k = M.lanes | M.childLanes;
    if (
      ((k |= wc),
      N(e, o, k, d, E, B),
      e === it && ((Le = it = null), (Pe = 0)),
      ((M.subtreeFlags & 10256) === 0 && (M.flags & 10256) === 0) ||
        xl ||
        ((xl = !0),
        (U0 = k),
        (z0 = a),
        W4(Wt, function () {
          return La(), null;
        })),
      (a = (M.flags & 15990) !== 0),
      (M.subtreeFlags & 15990) !== 0 || a
        ? ((a = q.T),
          (q.T = null),
          (d = P.p),
          (P.p = 2),
          (E = ft),
          (ft |= 4),
          U4(e, M),
          qx(M, e),
          m4(I0, e.containerInfo),
          (Rl = !!J0),
          (I0 = J0 = null),
          (e.current = M),
          Nx(e, M.alternate, M),
          bn(),
          (ft = E),
          (P.p = d),
          (q.T = a))
        : (e.current = M),
      xl ? ((xl = !1), (Yr = e), (Ns = o)) : lm(e, k),
      (k = e.pendingLanes),
      k === 0 && (sr = null),
      Ar(M.stateNode),
      fi(e),
      i !== null)
    )
      for (u = e.onRecoverableError, M = 0; M < i.length; M++)
        (k = i[M]), u(k.value, { componentStack: k.stack });
    return (
      (Ns & 3) !== 0 && La(),
      (k = e.pendingLanes),
      (o & 4194218) !== 0 && (k & 42) !== 0
        ? e === N0
          ? Hs++
          : ((Hs = 0), (N0 = e))
        : (Hs = 0),
      Vs(0),
      null
    );
  }
  function lm(e, i) {
    (e.pooledCacheLanes &= i) === 0 &&
      ((i = e.pooledCache), i != null && ((e.pooledCache = null), bs(i)));
  }
  function La() {
    if (Yr !== null) {
      var e = Yr,
        i = U0;
      U0 = 0;
      var a = ae(Ns),
        o = q.T,
        u = P.p;
      try {
        if (((P.p = 32 > a ? 32 : a), (q.T = null), Yr === null)) var d = !1;
        else {
          (a = z0), (z0 = null);
          var E = Yr,
            B = Ns;
          if (((Yr = null), (Ns = 0), (ft & 6) !== 0)) throw Error(s(331));
          var M = ft;
          if (
            ((ft |= 4),
            Gx(E.current),
            Px(E, E.current, B, a),
            (ft = M),
            Vs(0, !1),
            Rt && typeof Rt.onPostCommitFiberRoot == "function")
          )
            try {
              Rt.onPostCommitFiberRoot(Yt, E);
            } catch (k) {}
          d = !0;
        }
        return d;
      } finally {
        (P.p = u), (q.T = o), lm(e, i);
      }
    }
    return !1;
  }
  function um(e, i, a) {
    (i = Tn(a, i)),
      (i = a0(e.stateNode, i, 2)),
      (e = er(e, i, 2)),
      e !== null && (bi(e, 2), fi(e));
  }
  function nt(e, i, a) {
    if (e.tag === 3) um(e, e, a);
    else
      for (; i !== null; ) {
        if (i.tag === 3) {
          um(i, e, a);
          break;
        } else if (i.tag === 1) {
          var o = i.stateNode;
          if (
            typeof i.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (sr === null || !sr.has(o)))
          ) {
            (e = Tn(a, e)),
              (a = hx(2)),
              (o = er(i, a, 2)),
              o !== null && (dx(a, o, i, e), bi(o, 2), fi(o));
            break;
          }
        }
        i = i.return;
      }
  }
  function j0(e, i, a) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new q4();
      var u = new Set();
      o.set(i, u);
    } else (u = o.get(i)), u === void 0 && ((u = new Set()), o.set(i, u));
    u.has(a) ||
      ((O0 = !0), u.add(a), (e = K4.bind(null, e, i, a)), i.then(e, e));
  }
  function K4(e, i, a) {
    var o = e.pingCache;
    o !== null && o.delete(i),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      it === e &&
        (Pe & a) === a &&
        (pt === 4 || (pt === 3 && (Pe & 62914560) === Pe && 300 > ut() - L0)
          ? (ft & 2) === 0 && Ma(e, 0)
          : (M0 |= a),
        Oa === Pe && (Oa = 0)),
      fi(e);
  }
  function cm(e, i) {
    i === 0 && (i = Ei()), (e = Gi(e, i)), e !== null && (bi(e, i), fi(e));
  }
  function Q4(e) {
    var i = e.memoizedState,
      a = 0;
    i !== null && (a = i.retryLane), cm(e, a);
  }
  function Z4(e, i) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          u = e.memoizedState;
        u !== null && (a = u.retryLane);
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
    o !== null && o.delete(i), cm(e, a);
  }
  function W4(e, i) {
    return Pn(e, i);
  }
  var yl = null,
    Ua = null,
    P0 = !1,
    gl = !1,
    Y0 = !1,
    Xr = 0;
  function fi(e) {
    e !== Ua &&
      e.next === null &&
      (Ua === null ? (yl = Ua = e) : (Ua = Ua.next = e)),
      (gl = !0),
      P0 || ((P0 = !0), J4($4));
  }
  function Vs(e, i) {
    if (!Y0 && gl) {
      Y0 = !0;
      do
        for (var a = !1, o = yl; o !== null; ) {
          if (e !== 0) {
            var u = o.pendingLanes;
            if (u === 0) var d = 0;
            else {
              var E = o.suspendedLanes,
                B = o.pingedLanes;
              (d = (1 << (31 - Nt(42 | e) + 1)) - 1),
                (d &= u & ~(E & ~B)),
                (d = d & 201326677 ? (d & 201326677) | 1 : d ? d | 2 : 0);
            }
            d !== 0 && ((a = !0), dm(o, d));
          } else
            (d = Pe),
              (d = vi(o, o === it ? d : 0)),
              (d & 3) === 0 || yi(o, d) || ((a = !0), dm(o, d));
          o = o.next;
        }
      while (a);
      Y0 = !1;
    }
  }
  function $4() {
    gl = P0 = !1;
    var e = 0;
    Xr !== 0 && (sb() && (e = Xr), (Xr = 0));
    for (var i = ut(), a = null, o = yl; o !== null; ) {
      var u = o.next,
        d = fm(o, i);
      d === 0
        ? ((o.next = null),
          a === null ? (yl = u) : (a.next = u),
          u === null && (Ua = a))
        : ((a = o), (e !== 0 || (d & 3) !== 0) && (gl = !0)),
        (o = u);
    }
    Vs(e);
  }
  function fm(e, i) {
    for (
      var a = e.suspendedLanes,
        o = e.pingedLanes,
        u = e.expirationTimes,
        d = e.pendingLanes & -62914561;
      0 < d;

    ) {
      var E = 31 - Nt(d),
        B = 1 << E,
        M = u[E];
      M === -1
        ? ((B & a) === 0 || (B & o) !== 0) && (u[E] = Dr(B, i))
        : M <= i && (e.expiredLanes |= B),
        (d &= ~B);
    }
    if (
      ((i = it),
      (a = Pe),
      (a = vi(e, e === i ? a : 0)),
      (o = e.callbackNode),
      a === 0 || (e === i && rt === 2) || e.cancelPendingCommit !== null)
    )
      return (
        o !== null && o !== null && zt(o),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || yi(e, a)) {
      if (((i = a & -a), i === e.callbackPriority)) return i;
      switch ((o !== null && zt(o), ae(a))) {
        case 2:
        case 8:
          a = Sn;
          break;
        case 32:
          a = Wt;
          break;
        case 268435456:
          a = qi;
          break;
        default:
          a = Wt;
      }
      return (
        (o = hm.bind(null, e)),
        (a = Pn(a, o)),
        (e.callbackPriority = i),
        (e.callbackNode = a),
        i
      );
    }
    return (
      o !== null && o !== null && zt(o),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function hm(e, i) {
    var a = e.callbackNode;
    if (La() && e.callbackNode !== a) return null;
    var o = Pe;
    return (
      (o = vi(e, e === it ? o : 0)),
      o === 0
        ? null
        : (Ix(e, o, i),
          fm(e, ut()),
          e.callbackNode != null && e.callbackNode === a
            ? hm.bind(null, e)
            : null)
    );
  }
  function dm(e, i) {
    if (La()) return null;
    Ix(e, i, !0);
  }
  function J4(e) {
    lb(function () {
      (ft & 6) !== 0 ? Pn(An, e) : e();
    });
  }
  function X0() {
    return Xr === 0 && (Xr = gi()), Xr;
  }
  function pm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Fo("" + e);
  }
  function xm(e, i) {
    var a = i.ownerDocument.createElement("input");
    return (
      (a.name = i.name),
      (a.value = i.value),
      e.id && a.setAttribute("form", e.id),
      i.parentNode.insertBefore(a, i),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function I4(e, i, a, o, u) {
    if (i === "submit" && a && a.stateNode === u) {
      var d = pm((u[de] || null).action),
        E = o.submitter;
      E &&
        ((i = (i = E[de] || null)
          ? pm(i.formAction)
          : E.getAttribute("formAction")),
        i !== null && ((d = i), (E = null)));
      var B = new No("action", "action", null, o, u);
      e.push({
        event: B,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (Xr !== 0) {
                  var M = E ? xm(u, E) : new FormData(u);
                  e0(
                    a,
                    { pending: !0, data: M, method: u.method, action: d },
                    null,
                    M,
                  );
                }
              } else
                typeof d == "function" &&
                  (B.preventDefault(),
                  (M = E ? xm(u, E) : new FormData(u)),
                  e0(
                    a,
                    { pending: !0, data: M, method: u.method, action: d },
                    d,
                    M,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var G0 = 0; G0 < op.length; G0++) {
    var K0 = op[G0],
      eb = K0.toLowerCase(),
      tb = K0[0].toUpperCase() + K0.slice(1);
    Zn(eb, "on" + tb);
  }
  Zn(np, "onAnimationEnd"),
    Zn(ip, "onAnimationIteration"),
    Zn(rp, "onAnimationStart"),
    Zn("dblclick", "onDoubleClick"),
    Zn("focusin", "onFocus"),
    Zn("focusout", "onBlur"),
    Zn(y4, "onTransitionRun"),
    Zn(g4, "onTransitionStart"),
    Zn(E4, "onTransitionCancel"),
    Zn(ap, "onTransitionEnd"),
    Kn("onMouseEnter", ["mouseout", "mouseover"]),
    Kn("onMouseLeave", ["mouseout", "mouseover"]),
    Kn("onPointerEnter", ["pointerout", "pointerover"]),
    Kn("onPointerLeave", ["pointerout", "pointerover"]),
    $t(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    $t(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    $t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    $t(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    $t(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    $t(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var ks =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    nb = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ks),
    );
  function mm(e, i) {
    i = (i & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var o = e[a],
        u = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (i)
          for (var E = o.length - 1; 0 <= E; E--) {
            var B = o[E],
              M = B.instance,
              k = B.currentTarget;
            if (((B = B.listener), M !== d && u.isPropagationStopped()))
              break e;
            (d = B), (u.currentTarget = k);
            try {
              d(u);
            } catch (ne) {
              al(ne);
            }
            (u.currentTarget = null), (d = M);
          }
        else
          for (E = 0; E < o.length; E++) {
            if (
              ((B = o[E]),
              (M = B.instance),
              (k = B.currentTarget),
              (B = B.listener),
              M !== d && u.isPropagationStopped())
            )
              break e;
            (d = B), (u.currentTarget = k);
            try {
              d(u);
            } catch (ne) {
              al(ne);
            }
            (u.currentTarget = null), (d = M);
          }
      }
    }
  }
  function He(e, i) {
    var a = i[Ee];
    a === void 0 && (a = i[Ee] = new Set());
    var o = e + "__bubble";
    a.has(o) || (vm(i, e, 2, !1), a.add(o));
  }
  function Q0(e, i, a) {
    var o = 0;
    i && (o |= 4), vm(a, e, o, i);
  }
  var El = "_reactListening" + Math.random().toString(36).slice(2);
  function Z0(e) {
    if (!e[El]) {
      (e[El] = !0),
        la.forEach(function (a) {
          a !== "selectionchange" && (nb.has(a) || Q0(a, !1, e), Q0(a, !0, e));
        });
      var i = e.nodeType === 9 ? e : e.ownerDocument;
      i === null || i[El] || ((i[El] = !0), Q0("selectionchange", !1, i));
    }
  }
  function vm(e, i, a, o) {
    switch (km(i)) {
      case 2:
        var u = _b;
        break;
      case 8:
        u = Rb;
        break;
      default:
        u = uf;
    }
    (a = u.bind(null, i, a, e)),
      (u = void 0),
      !vc ||
        (i !== "touchstart" && i !== "touchmove" && i !== "wheel") ||
        (u = !0),
      o
        ? u !== void 0
          ? e.addEventListener(i, a, { capture: !0, passive: u })
          : e.addEventListener(i, a, !0)
        : u !== void 0
          ? e.addEventListener(i, a, { passive: u })
          : e.addEventListener(i, a, !1);
  }
  function W0(e, i, a, o, u) {
    var d = o;
    if ((i & 1) === 0 && (i & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var E = o.tag;
        if (E === 3 || E === 4) {
          var B = o.stateNode.containerInfo;
          if (B === u || (B.nodeType === 8 && B.parentNode === u)) break;
          if (E === 4)
            for (E = o.return; E !== null; ) {
              var M = E.tag;
              if (
                (M === 3 || M === 4) &&
                ((M = E.stateNode.containerInfo),
                M === u || (M.nodeType === 8 && M.parentNode === u))
              )
                return;
              E = E.return;
            }
          for (; B !== null; ) {
            if (((E = Qe(B)), E === null)) return;
            if (((M = E.tag), M === 5 || M === 6 || M === 26 || M === 27)) {
              o = d = E;
              continue e;
            }
            B = B.parentNode;
          }
        }
        o = o.return;
      }
    Md(function () {
      var k = d,
        ne = xc(a),
        se = [];
      e: {
        var Z = sp.get(e);
        if (Z !== void 0) {
          var te = No,
            be = e;
          switch (e) {
            case "keypress":
              if (Uo(a) === 0) break e;
            case "keydown":
            case "keyup":
              te = ZE;
              break;
            case "focusin":
              (be = "focus"), (te = bc);
              break;
            case "focusout":
              (be = "blur"), (te = bc);
              break;
            case "beforeblur":
            case "afterblur":
              te = bc;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              te = Ud;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              te = NE;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              te = JE;
              break;
            case np:
            case ip:
            case rp:
              te = kE;
              break;
            case ap:
              te = e4;
              break;
            case "scroll":
            case "scrollend":
              te = UE;
              break;
            case "wheel":
              te = n4;
              break;
            case "copy":
            case "cut":
            case "paste":
              te = jE;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              te = Nd;
              break;
            case "toggle":
            case "beforetoggle":
              te = r4;
          }
          var Te = (i & 4) !== 0,
            xt = !Te && (e === "scroll" || e === "scrollend"),
            Y = Te ? (Z !== null ? Z + "Capture" : null) : Z;
          Te = [];
          for (var H = k, G; H !== null; ) {
            var re = H;
            if (
              ((G = re.stateNode),
              (re = re.tag),
              (re !== 5 && re !== 26 && re !== 27) ||
                G === null ||
                Y === null ||
                ((re = as(H, Y)), re != null && Te.push(qs(H, re, G))),
              xt)
            )
              break;
            H = H.return;
          }
          0 < Te.length &&
            ((Z = new te(Z, be, null, a, ne)),
            se.push({ event: Z, listeners: Te }));
        }
      }
      if ((i & 7) === 0) {
        e: {
          if (
            ((Z = e === "mouseover" || e === "pointerover"),
            (te = e === "mouseout" || e === "pointerout"),
            Z &&
              a !== pc &&
              (be = a.relatedTarget || a.fromElement) &&
              (Qe(be) || be[ve]))
          )
            break e;
          if (
            (te || Z) &&
            ((Z =
              ne.window === ne
                ? ne
                : (Z = ne.ownerDocument)
                  ? Z.defaultView || Z.parentWindow
                  : window),
            te
              ? ((be = a.relatedTarget || a.toElement),
                (te = k),
                (be = be ? Qe(be) : null),
                be !== null &&
                  ((xt = ie(be)),
                  (Te = be.tag),
                  be !== xt || (Te !== 5 && Te !== 27 && Te !== 6)) &&
                  (be = null))
              : ((te = null), (be = k)),
            te !== be)
          ) {
            if (
              ((Te = Ud),
              (re = "onMouseLeave"),
              (Y = "onMouseEnter"),
              (H = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Te = Nd),
                (re = "onPointerLeave"),
                (Y = "onPointerEnter"),
                (H = "pointer")),
              (xt = te == null ? Z : Gn(te)),
              (G = be == null ? Z : Gn(be)),
              (Z = new Te(re, H + "leave", te, a, ne)),
              (Z.target = xt),
              (Z.relatedTarget = G),
              (re = null),
              Qe(ne) === k &&
                ((Te = new Te(Y, H + "enter", be, a, ne)),
                (Te.target = G),
                (Te.relatedTarget = xt),
                (re = Te)),
              (xt = re),
              te && be)
            )
              t: {
                for (Te = te, Y = be, H = 0, G = Te; G; G = za(G)) H++;
                for (G = 0, re = Y; re; re = za(re)) G++;
                for (; 0 < H - G; ) (Te = za(Te)), H--;
                for (; 0 < G - H; ) (Y = za(Y)), G--;
                for (; H--; ) {
                  if (Te === Y || (Y !== null && Te === Y.alternate)) break t;
                  (Te = za(Te)), (Y = za(Y));
                }
                Te = null;
              }
            else Te = null;
            te !== null && ym(se, Z, te, Te, !1),
              be !== null && xt !== null && ym(se, xt, be, Te, !0);
          }
        }
        e: {
          if (
            ((Z = k ? Gn(k) : window),
            (te = Z.nodeName && Z.nodeName.toLowerCase()),
            te === "select" || (te === "input" && Z.type === "file"))
          )
            var ge = Xd;
          else if (Pd(Z))
            if (Gd) ge = p4;
            else {
              ge = h4;
              var Fe = f4;
            }
          else
            (te = Z.nodeName),
              !te ||
              te.toLowerCase() !== "input" ||
              (Z.type !== "checkbox" && Z.type !== "radio")
                ? k && dc(k.elementType) && (ge = Xd)
                : (ge = d4);
          if (ge && (ge = ge(e, k))) {
            Yd(se, ge, a, ne);
            break e;
          }
          Fe && Fe(e, Z, k),
            e === "focusout" &&
              k &&
              Z.type === "number" &&
              k.memoizedProps.value != null &&
              hc(Z, "number", Z.value);
        }
        switch (((Fe = k ? Gn(k) : window), e)) {
          case "focusin":
            (Pd(Fe) || Fe.contentEditable === "true") &&
              ((pa = Fe), (Tc = k), (ds = null));
            break;
          case "focusout":
            ds = Tc = pa = null;
            break;
          case "mousedown":
            _c = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (_c = !1), ep(se, a, ne);
            break;
          case "selectionchange":
            if (v4) break;
          case "keydown":
          case "keyup":
            ep(se, a, ne);
        }
        var Se;
        if (Sc)
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
          da
            ? qd(e, a) && (De = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (De = "onCompositionStart");
        De &&
          (Hd &&
            a.locale !== "ko" &&
            (da || De !== "onCompositionStart"
              ? De === "onCompositionEnd" && da && (Se = Fd())
              : ((Xi = ne),
                (yc = "value" in Xi ? Xi.value : Xi.textContent),
                (da = !0))),
          (Fe = bl(k, De)),
          0 < Fe.length &&
            ((De = new zd(De, e, null, a, ne)),
            se.push({ event: De, listeners: Fe }),
            Se
              ? (De.data = Se)
              : ((Se = jd(a)), Se !== null && (De.data = Se)))),
          (Se = s4 ? o4(e, a) : l4(e, a)) &&
            ((De = bl(k, "onBeforeInput")),
            0 < De.length &&
              ((Fe = new zd("onBeforeInput", "beforeinput", null, a, ne)),
              se.push({ event: Fe, listeners: De }),
              (Fe.data = Se))),
          I4(se, e, k, a, ne);
      }
      mm(se, i);
    });
  }
  function qs(e, i, a) {
    return { instance: e, listener: i, currentTarget: a };
  }
  function bl(e, i) {
    for (var a = i + "Capture", o = []; e !== null; ) {
      var u = e,
        d = u.stateNode;
      (u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          d === null ||
          ((u = as(e, a)),
          u != null && o.unshift(qs(e, u, d)),
          (u = as(e, i)),
          u != null && o.push(qs(e, u, d))),
        (e = e.return);
    }
    return o;
  }
  function za(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ym(e, i, a, o, u) {
    for (var d = i._reactName, E = []; a !== null && a !== o; ) {
      var B = a,
        M = B.alternate,
        k = B.stateNode;
      if (((B = B.tag), M !== null && M === o)) break;
      (B !== 5 && B !== 26 && B !== 27) ||
        k === null ||
        ((M = k),
        u
          ? ((k = as(a, d)), k != null && E.unshift(qs(a, k, M)))
          : u || ((k = as(a, d)), k != null && E.push(qs(a, k, M)))),
        (a = a.return);
    }
    E.length !== 0 && e.push({ event: i, listeners: E });
  }
  var ib = /\r\n?/g,
    rb = /\u0000|\uFFFD/g;
  function gm(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        ib,
        `
`,
      )
      .replace(rb, "");
  }
  function Em(e, i) {
    return (i = gm(i)), gm(e) === i;
  }
  function Al() {}
  function Ie(e, i, a, o, u, d) {
    switch (a) {
      case "children":
        typeof o == "string"
          ? i === "body" || (i === "textarea" && o === "") || ca(e, o)
          : (typeof o == "number" || typeof o == "bigint") &&
            i !== "body" &&
            ca(e, "" + o);
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
        Qn(e, a, o);
        break;
      case "style":
        wd(e, o, d);
        break;
      case "data":
        if (i !== "object") {
          Qn(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (i !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "symbol" ||
          typeof o == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        (o = Fo("" + o)), e.setAttribute(a, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof d == "function" &&
            (a === "formAction"
              ? (i !== "input" && Ie(e, i, "name", u.name, u, null),
                Ie(e, i, "formEncType", u.formEncType, u, null),
                Ie(e, i, "formMethod", u.formMethod, u, null),
                Ie(e, i, "formTarget", u.formTarget, u, null))
              : (Ie(e, i, "encType", u.encType, u, null),
                Ie(e, i, "method", u.method, u, null),
                Ie(e, i, "target", u.target, u, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(a);
          break;
        }
        (o = Fo("" + o)), e.setAttribute(a, o);
        break;
      case "onClick":
        o != null && (e.onclick = Al);
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
          if (((a = o.__html), a != null)) {
            if (u.children != null) throw Error(s(60));
            e.innerHTML = a;
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
        (a = Fo("" + o)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
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
          ? e.setAttribute(a, "" + o)
          : e.removeAttribute(a);
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
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        o === !0
          ? e.setAttribute(a, "")
          : o !== !1 &&
              o != null &&
              typeof o != "function" &&
              typeof o != "symbol"
            ? e.setAttribute(a, o)
            : e.removeAttribute(a);
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
          ? e.setAttribute(a, o)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o)
          ? e.removeAttribute(a)
          : e.setAttribute(a, o);
        break;
      case "popover":
        He("beforetoggle", e), He("toggle", e), st(e, "popover", o);
        break;
      case "xlinkActuate":
        Cn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        Cn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        Cn(e, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        Cn(e, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        Cn(e, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        Cn(e, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        Cn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        Cn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        Cn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        st(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = FE.get(a) || a), st(e, a, o));
    }
  }
  function $0(e, i, a, o, u, d) {
    switch (a) {
      case "style":
        wd(e, o, d);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(s(61));
          if (((a = o.__html), a != null)) {
            if (u.children != null) throw Error(s(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof o == "string"
          ? ca(e, o)
          : (typeof o == "number" || typeof o == "bigint") && ca(e, "" + o);
        break;
      case "onScroll":
        o != null && He("scroll", e);
        break;
      case "onScrollEnd":
        o != null && He("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = Al);
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
        if (!Yi.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (i = a.slice(2, u ? a.length - 7 : void 0)),
              (d = e[de] || null),
              (d = d != null ? d[a] : null),
              typeof d == "function" && e.removeEventListener(i, d, u),
              typeof o == "function")
            ) {
              typeof d != "function" &&
                d !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(i, o, u);
              break e;
            }
            a in e
              ? (e[a] = o)
              : o === !0
                ? e.setAttribute(a, "")
                : st(e, a, o);
          }
    }
  }
  function kt(e, i, a) {
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
          d;
        for (d in a)
          if (a.hasOwnProperty(d)) {
            var E = a[d];
            if (E != null)
              switch (d) {
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
                  Ie(e, i, d, E, a, null);
              }
          }
        u && Ie(e, i, "srcSet", a.srcSet, a, null),
          o && Ie(e, i, "src", a.src, a, null);
        return;
      case "input":
        He("invalid", e);
        var B = (d = E = u = null),
          M = null,
          k = null;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var ne = a[o];
            if (ne != null)
              switch (o) {
                case "name":
                  u = ne;
                  break;
                case "type":
                  E = ne;
                  break;
                case "checked":
                  M = ne;
                  break;
                case "defaultChecked":
                  k = ne;
                  break;
                case "value":
                  d = ne;
                  break;
                case "defaultValue":
                  B = ne;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (ne != null) throw Error(s(137, i));
                  break;
                default:
                  Ie(e, i, o, ne, a, null);
              }
          }
        Bd(e, d, B, M, k, E, u, !1), Oo(e);
        return;
      case "select":
        He("invalid", e), (o = E = d = null);
        for (u in a)
          if (a.hasOwnProperty(u) && ((B = a[u]), B != null))
            switch (u) {
              case "value":
                d = B;
                break;
              case "defaultValue":
                E = B;
                break;
              case "multiple":
                o = B;
              default:
                Ie(e, i, u, B, a, null);
            }
        (i = d),
          (a = E),
          (e.multiple = !!o),
          i != null ? ua(e, !!o, i, !1) : a != null && ua(e, !!o, a, !0);
        return;
      case "textarea":
        He("invalid", e), (d = u = o = null);
        for (E in a)
          if (a.hasOwnProperty(E) && ((B = a[E]), B != null))
            switch (E) {
              case "value":
                o = B;
                break;
              case "defaultValue":
                u = B;
                break;
              case "children":
                d = B;
                break;
              case "dangerouslySetInnerHTML":
                if (B != null) throw Error(s(91));
                break;
              default:
                Ie(e, i, E, B, a, null);
            }
        _d(e, o, u, d), Oo(e);
        return;
      case "option":
        for (M in a)
          if (a.hasOwnProperty(M) && ((o = a[M]), o != null))
            switch (M) {
              case "selected":
                e.selected =
                  o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                Ie(e, i, M, o, a, null);
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
        for (o = 0; o < ks.length; o++) He(ks[o], e);
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
        for (k in a)
          if (a.hasOwnProperty(k) && ((o = a[k]), o != null))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, i));
              default:
                Ie(e, i, k, o, a, null);
            }
        return;
      default:
        if (dc(i)) {
          for (ne in a)
            a.hasOwnProperty(ne) &&
              ((o = a[ne]), o !== void 0 && $0(e, i, ne, o, a, void 0));
          return;
        }
    }
    for (B in a)
      a.hasOwnProperty(B) && ((o = a[B]), o != null && Ie(e, i, B, o, a, null));
  }
  function ab(e, i, a, o) {
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
          d = null,
          E = null,
          B = null,
          M = null,
          k = null,
          ne = null;
        for (te in a) {
          var se = a[te];
          if (a.hasOwnProperty(te) && se != null)
            switch (te) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                M = se;
              default:
                o.hasOwnProperty(te) || Ie(e, i, te, null, o, se);
            }
        }
        for (var Z in o) {
          var te = o[Z];
          if (((se = a[Z]), o.hasOwnProperty(Z) && (te != null || se != null)))
            switch (Z) {
              case "type":
                d = te;
                break;
              case "name":
                u = te;
                break;
              case "checked":
                k = te;
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
                te !== se && Ie(e, i, Z, te, o, se);
            }
        }
        fc(e, E, B, M, k, ne, d, u);
        return;
      case "select":
        te = E = B = Z = null;
        for (d in a)
          if (((M = a[d]), a.hasOwnProperty(d) && M != null))
            switch (d) {
              case "value":
                break;
              case "multiple":
                te = M;
              default:
                o.hasOwnProperty(d) || Ie(e, i, d, null, o, M);
            }
        for (u in o)
          if (
            ((d = o[u]),
            (M = a[u]),
            o.hasOwnProperty(u) && (d != null || M != null))
          )
            switch (u) {
              case "value":
                Z = d;
                break;
              case "defaultValue":
                B = d;
                break;
              case "multiple":
                E = d;
              default:
                d !== M && Ie(e, i, u, d, o, M);
            }
        (i = B),
          (a = E),
          (o = te),
          Z != null
            ? ua(e, !!a, Z, !1)
            : !!o != !!a &&
              (i != null ? ua(e, !!a, i, !0) : ua(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        te = Z = null;
        for (B in a)
          if (
            ((u = a[B]),
            a.hasOwnProperty(B) && u != null && !o.hasOwnProperty(B))
          )
            switch (B) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ie(e, i, B, null, o, u);
            }
        for (E in o)
          if (
            ((u = o[E]),
            (d = a[E]),
            o.hasOwnProperty(E) && (u != null || d != null))
          )
            switch (E) {
              case "value":
                Z = u;
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
                u !== d && Ie(e, i, E, u, o, d);
            }
        Td(e, Z, te);
        return;
      case "option":
        for (var be in a)
          if (
            ((Z = a[be]),
            a.hasOwnProperty(be) && Z != null && !o.hasOwnProperty(be))
          )
            switch (be) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ie(e, i, be, null, o, Z);
            }
        for (M in o)
          if (
            ((Z = o[M]),
            (te = a[M]),
            o.hasOwnProperty(M) && Z !== te && (Z != null || te != null))
          )
            switch (M) {
              case "selected":
                e.selected =
                  Z && typeof Z != "function" && typeof Z != "symbol";
                break;
              default:
                Ie(e, i, M, Z, o, te);
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
        for (var Te in a)
          (Z = a[Te]),
            a.hasOwnProperty(Te) &&
              Z != null &&
              !o.hasOwnProperty(Te) &&
              Ie(e, i, Te, null, o, Z);
        for (k in o)
          if (
            ((Z = o[k]),
            (te = a[k]),
            o.hasOwnProperty(k) && Z !== te && (Z != null || te != null))
          )
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null) throw Error(s(137, i));
                break;
              default:
                Ie(e, i, k, Z, o, te);
            }
        return;
      default:
        if (dc(i)) {
          for (var xt in a)
            (Z = a[xt]),
              a.hasOwnProperty(xt) &&
                Z !== void 0 &&
                !o.hasOwnProperty(xt) &&
                $0(e, i, xt, void 0, o, Z);
          for (ne in o)
            (Z = o[ne]),
              (te = a[ne]),
              !o.hasOwnProperty(ne) ||
                Z === te ||
                (Z === void 0 && te === void 0) ||
                $0(e, i, ne, Z, o, te);
          return;
        }
    }
    for (var Y in a)
      (Z = a[Y]),
        a.hasOwnProperty(Y) &&
          Z != null &&
          !o.hasOwnProperty(Y) &&
          Ie(e, i, Y, null, o, Z);
    for (se in o)
      (Z = o[se]),
        (te = a[se]),
        !o.hasOwnProperty(se) ||
          Z === te ||
          (Z == null && te == null) ||
          Ie(e, i, se, Z, o, te);
  }
  var J0 = null,
    I0 = null;
  function Sl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function bm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Am(e, i) {
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
  function ef(e, i) {
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
  var tf = null;
  function sb() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === tf
        ? !1
        : ((tf = e), !0)
      : ((tf = null), !1);
  }
  var Sm = typeof setTimeout == "function" ? setTimeout : void 0,
    ob = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Cm = typeof Promise == "function" ? Promise : void 0,
    lb =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Cm != "undefined"
          ? function (e) {
              return Cm.resolve(null).then(e).catch(ub);
            }
          : Sm;
  function ub(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function nf(e, i) {
    var a = i,
      o = 0;
    do {
      var u = a.nextSibling;
      if ((e.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$")) {
          if (o === 0) {
            e.removeChild(u), Zs(i);
            return;
          }
          o--;
        } else (a !== "$" && a !== "$?" && a !== "$!") || o++;
      a = u;
    } while (a);
    Zs(i);
  }
  function rf(e) {
    var i = e.firstChild;
    for (i && i.nodeType === 10 && (i = i.nextSibling); i; ) {
      var a = i;
      switch (((i = i.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          rf(a), Ne(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function cb(e, i, a, o) {
    for (; e.nodeType === 1; ) {
      var u = a;
      if (e.nodeName.toLowerCase() !== i.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (o) {
        if (!e[Xe])
          switch (i) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((d = e.getAttribute("rel")),
                d === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                d !== u.rel ||
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
                ((d = e.getAttribute("src")),
                (d !== (u.src == null ? null : u.src) ||
                  e.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  e.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  d &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (i === "input" && e.type === "hidden") {
        var d = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === d) return e;
      } else return e;
      if (((e = Jn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function fb(e, i, a) {
    if (i === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = Jn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Jn(e) {
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
  function Dm(e) {
    e = e.previousSibling;
    for (var i = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (i === 0) return e;
          i--;
        } else a === "/$" && i++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Bm(e, i, a) {
    switch (((i = Sl(a)), e)) {
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
    Tm = new Set();
  function Cl(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.ownerDocument;
  }
  var Ni = P.d;
  P.d = { f: hb, r: db, D: pb, C: xb, L: mb, m: vb, X: gb, S: yb, M: Eb };
  function hb() {
    var e = Ni.f(),
      i = ml();
    return e || i;
  }
  function db(e) {
    var i = dn(e);
    i !== null && i.tag === 5 && i.type === "form" ? ex(i) : Ni.r(e);
  }
  var Na = typeof document == "undefined" ? null : document;
  function _m(e, i, a) {
    var o = Na;
    if (o && typeof i == "string" && i) {
      var u = Dn(i);
      (u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        Tm.has(u) ||
          (Tm.add(u),
          (e = { rel: e, crossOrigin: a, href: i }),
          o.querySelector(u) === null &&
            ((i = o.createElement("link")),
            kt(i, "link", e),
            Ze(i),
            o.head.appendChild(i)));
    }
  }
  function pb(e) {
    Ni.D(e), _m("dns-prefetch", e, null);
  }
  function xb(e, i) {
    Ni.C(e, i), _m("preconnect", e, i);
  }
  function mb(e, i, a) {
    Ni.L(e, i, a);
    var o = Na;
    if (o && e && i) {
      var u = 'link[rel="preload"][as="' + Dn(i) + '"]';
      i === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + Dn(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (u += '[imagesizes="' + Dn(a.imageSizes) + '"]'))
        : (u += '[href="' + Dn(e) + '"]');
      var d = u;
      switch (i) {
        case "style":
          d = Ha(e);
          break;
        case "script":
          d = Va(e);
      }
      Un.has(d) ||
        ((e = O(
          {
            rel: "preload",
            href: i === "image" && a && a.imageSrcSet ? void 0 : e,
            as: i,
          },
          a,
        )),
        Un.set(d, e),
        o.querySelector(u) !== null ||
          (i === "style" && o.querySelector(js(d))) ||
          (i === "script" && o.querySelector(Ps(d))) ||
          ((i = o.createElement("link")),
          kt(i, "link", e),
          Ze(i),
          o.head.appendChild(i)));
    }
  }
  function vb(e, i) {
    Ni.m(e, i);
    var a = Na;
    if (a && e) {
      var o = i && typeof i.as == "string" ? i.as : "script",
        u =
          'link[rel="modulepreload"][as="' + Dn(o) + '"][href="' + Dn(e) + '"]',
        d = u;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = Va(e);
      }
      if (
        !Un.has(d) &&
        ((e = O({ rel: "modulepreload", href: e }, i)),
        Un.set(d, e),
        a.querySelector(u) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ps(d))) return;
        }
        (o = a.createElement("link")),
          kt(o, "link", e),
          Ze(o),
          a.head.appendChild(o);
      }
    }
  }
  function yb(e, i, a) {
    Ni.S(e, i, a);
    var o = Na;
    if (o && e) {
      var u = Xt(o).hoistableStyles,
        d = Ha(e);
      i = i || "default";
      var E = u.get(d);
      if (!E) {
        var B = { loading: 0, preload: null };
        if ((E = o.querySelector(js(d)))) B.loading = 5;
        else {
          (e = O({ rel: "stylesheet", href: e, "data-precedence": i }, a)),
            (a = Un.get(d)) && af(e, a);
          var M = (E = o.createElement("link"));
          Ze(M),
            kt(M, "link", e),
            (M._p = new Promise(function (k, ne) {
              (M.onload = k), (M.onerror = ne);
            })),
            M.addEventListener("load", function () {
              B.loading |= 1;
            }),
            M.addEventListener("error", function () {
              B.loading |= 2;
            }),
            (B.loading |= 4),
            Dl(E, i, o);
        }
        (E = { type: "stylesheet", instance: E, count: 1, state: B }),
          u.set(d, E);
      }
    }
  }
  function gb(e, i) {
    Ni.X(e, i);
    var a = Na;
    if (a && e) {
      var o = Xt(a).hoistableScripts,
        u = Va(e),
        d = o.get(u);
      d ||
        ((d = a.querySelector(Ps(u))),
        d ||
          ((e = O({ src: e, async: !0 }, i)),
          (i = Un.get(u)) && sf(e, i),
          (d = a.createElement("script")),
          Ze(d),
          kt(d, "link", e),
          a.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        o.set(u, d));
    }
  }
  function Eb(e, i) {
    Ni.M(e, i);
    var a = Na;
    if (a && e) {
      var o = Xt(a).hoistableScripts,
        u = Va(e),
        d = o.get(u);
      d ||
        ((d = a.querySelector(Ps(u))),
        d ||
          ((e = O({ src: e, async: !0, type: "module" }, i)),
          (i = Un.get(u)) && sf(e, i),
          (d = a.createElement("script")),
          Ze(d),
          kt(d, "link", e),
          a.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        o.set(u, d));
    }
  }
  function Rm(e, i, a, o) {
    var u = (u = tt.current) ? Cl(u) : null;
    if (!u) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((i = Ha(a.href)),
            (a = Xt(u).hoistableStyles),
            (o = a.get(i)),
            o ||
              ((o = { type: "style", instance: null, count: 0, state: null }),
              a.set(i, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = Ha(a.href);
          var d = Xt(u).hoistableStyles,
            E = d.get(e);
          if (
            (E ||
              ((u = u.ownerDocument || u),
              (E = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              d.set(e, E),
              (d = u.querySelector(js(e))) &&
                !d._p &&
                ((E.instance = d), (E.state.loading = 5)),
              Un.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Un.set(e, a),
                d || bb(u, e, a, E.state))),
            i && o === null)
          )
            throw Error(s(528, ""));
          return E;
        }
        if (i && o !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (i = a.async),
          (a = a.src),
          typeof a == "string" &&
          i &&
          typeof i != "function" &&
          typeof i != "symbol"
            ? ((i = Va(a)),
              (a = Xt(u).hoistableScripts),
              (o = a.get(i)),
              o ||
                ((o = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(i, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function Ha(e) {
    return 'href="' + Dn(e) + '"';
  }
  function js(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function wm(e) {
    return O({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function bb(e, i, a, o) {
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
        kt(i, "link", a),
        Ze(i),
        e.head.appendChild(i));
  }
  function Va(e) {
    return '[src="' + Dn(e) + '"]';
  }
  function Ps(e) {
    return "script[async]" + e;
  }
  function Om(e, i, a) {
    if ((i.count++, i.instance === null))
      switch (i.type) {
        case "style":
          var o = e.querySelector('style[data-href~="' + Dn(a.href) + '"]');
          if (o) return (i.instance = o), Ze(o), o;
          var u = O({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (e.ownerDocument || e).createElement("style")),
            Ze(o),
            kt(o, "style", u),
            Dl(o, a.precedence, e),
            (i.instance = o)
          );
        case "stylesheet":
          u = Ha(a.href);
          var d = e.querySelector(js(u));
          if (d) return (i.state.loading |= 4), (i.instance = d), Ze(d), d;
          (o = wm(a)),
            (u = Un.get(u)) && af(o, u),
            (d = (e.ownerDocument || e).createElement("link")),
            Ze(d);
          var E = d;
          return (
            (E._p = new Promise(function (B, M) {
              (E.onload = B), (E.onerror = M);
            })),
            kt(d, "link", o),
            (i.state.loading |= 4),
            Dl(d, a.precedence, e),
            (i.instance = d)
          );
        case "script":
          return (
            (d = Va(a.src)),
            (u = e.querySelector(Ps(d)))
              ? ((i.instance = u), Ze(u), u)
              : ((o = a),
                (u = Un.get(d)) && ((o = O({}, a)), sf(o, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement("script")),
                Ze(u),
                kt(u, "link", o),
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
        ((o = i.instance), (i.state.loading |= 4), Dl(o, a.precedence, e));
    return i.instance;
  }
  function Dl(e, i, a) {
    for (
      var o = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = o.length ? o[o.length - 1] : null,
        d = u,
        E = 0;
      E < o.length;
      E++
    ) {
      var B = o[E];
      if (B.dataset.precedence === i) d = B;
      else if (d !== u) break;
    }
    d
      ? d.parentNode.insertBefore(e, d.nextSibling)
      : ((i = a.nodeType === 9 ? a.head : a), i.insertBefore(e, i.firstChild));
  }
  function af(e, i) {
    e.crossOrigin == null && (e.crossOrigin = i.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = i.referrerPolicy),
      e.title == null && (e.title = i.title);
  }
  function sf(e, i) {
    e.crossOrigin == null && (e.crossOrigin = i.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = i.referrerPolicy),
      e.integrity == null && (e.integrity = i.integrity);
  }
  var Bl = null;
  function Mm(e, i, a) {
    if (Bl === null) {
      var o = new Map(),
        u = (Bl = new Map());
      u.set(a, o);
    } else (u = Bl), (o = u.get(a)), o || ((o = new Map()), u.set(a, o));
    if (o.has(e)) return o;
    for (
      o.set(e, null), a = a.getElementsByTagName(e), u = 0;
      u < a.length;
      u++
    ) {
      var d = a[u];
      if (
        !(
          d[Xe] ||
          d[he] ||
          (e === "link" && d.getAttribute("rel") === "stylesheet")
        ) &&
        d.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var E = d.getAttribute(i) || "";
        E = e + E;
        var B = o.get(E);
        B ? B.push(d) : o.set(E, [d]);
      }
    }
    return o;
  }
  function Fm(e, i, a) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        i === "title" ? e.querySelector("head > title") : null,
      );
  }
  function Ab(e, i, a) {
    if (a === 1 || i.itemProp != null) return !1;
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
  function Lm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ys = null;
  function Sb() {}
  function Cb(e, i, a) {
    if (Ys === null) throw Error(s(475));
    var o = Ys;
    if (
      i.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (i.state.loading & 4) === 0
    ) {
      if (i.instance === null) {
        var u = Ha(a.href),
          d = e.querySelector(js(u));
        if (d) {
          (e = d._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (o.count++, (o = Tl.bind(o)), e.then(o, o)),
            (i.state.loading |= 4),
            (i.instance = d),
            Ze(d);
          return;
        }
        (d = e.ownerDocument || e),
          (a = wm(a)),
          (u = Un.get(u)) && af(a, u),
          (d = d.createElement("link")),
          Ze(d);
        var E = d;
        (E._p = new Promise(function (B, M) {
          (E.onload = B), (E.onerror = M);
        })),
          kt(d, "link", a),
          (i.instance = d);
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
  function Db() {
    if (Ys === null) throw Error(s(475));
    var e = Ys;
    return (
      e.stylesheets && e.count === 0 && of(e, e.stylesheets),
      0 < e.count
        ? function (i) {
            var a = setTimeout(function () {
              if ((e.stylesheets && of(e, e.stylesheets), e.unsuspend)) {
                var o = e.unsuspend;
                (e.unsuspend = null), o();
              }
            }, 6e4);
            return (
              (e.unsuspend = i),
              function () {
                (e.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function Tl() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) of(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var _l = null;
  function of(e, i) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (_l = new Map()),
        i.forEach(Bb, e),
        (_l = null),
        Tl.call(e));
  }
  function Bb(e, i) {
    if (!(i.state.loading & 4)) {
      var a = _l.get(e);
      if (a) var o = a.get(null);
      else {
        (a = new Map()), _l.set(e, a);
        for (
          var u = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            d = 0;
          d < u.length;
          d++
        ) {
          var E = u[d];
          (E.nodeName === "LINK" || E.getAttribute("media") !== "not all") &&
            (a.set(E.dataset.precedence, E), (o = E));
        }
        o && a.set(null, o);
      }
      (u = i.instance),
        (E = u.getAttribute("data-precedence")),
        (d = a.get(E) || o),
        d === o && a.set(null, u),
        a.set(E, u),
        this.count++,
        (o = Tl.bind(this)),
        u.addEventListener("load", o),
        u.addEventListener("error", o),
        d
          ? d.parentNode.insertBefore(u, d.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(u, e.firstChild)),
        (i.state.loading |= 4);
    }
  }
  var Xs = {
    $$typeof: g,
    Provider: null,
    Consumer: null,
    _currentValue: pe,
    _currentValue2: pe,
    _threadCount: 0,
  };
  function Tb(e, i, a, o, u, d, E, B) {
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
      (this.expirationTimes = Pi(-1)),
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
      (this.entanglements = Pi(0)),
      (this.hiddenUpdates = Pi(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = u),
      (this.onCaughtError = d),
      (this.onRecoverableError = E),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = B),
      (this.incompleteTransitions = new Map());
  }
  function Um(e, i, a, o, u, d, E, B, M, k, ne, se) {
    return (
      (e = new Tb(e, i, a, E, B, M, k, se)),
      (i = 1),
      d === !0 && (i |= 24),
      (d = Fn(3, null, null, i)),
      (e.current = d),
      (d.stateNode = e),
      (i = Hc()),
      i.refCount++,
      (e.pooledCache = i),
      i.refCount++,
      (d.memoizedState = { element: o, isDehydrated: a, cache: i }),
      y0(d),
      e
    );
  }
  function zm(e) {
    return e ? ((e = va), e) : va;
  }
  function Nm(e, i, a, o, u, d) {
    (u = zm(u)),
      o.context === null ? (o.context = u) : (o.pendingContext = u),
      (o = Ii(i)),
      (o.payload = { element: a }),
      (d = d === void 0 ? null : d),
      d !== null && (o.callback = d),
      (a = er(e, o, i)),
      a !== null && (It(a, e, i), _s(a, e, i));
  }
  function Hm(e, i) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < i ? a : i;
    }
  }
  function lf(e, i) {
    Hm(e, i), (e = e.alternate) && Hm(e, i);
  }
  function Vm(e) {
    if (e.tag === 13) {
      var i = Gi(e, 67108864);
      i !== null && It(i, e, 67108864), lf(e, 67108864);
    }
  }
  var Rl = !0;
  function _b(e, i, a, o) {
    var u = q.T;
    q.T = null;
    var d = P.p;
    try {
      (P.p = 2), uf(e, i, a, o);
    } finally {
      (P.p = d), (q.T = u);
    }
  }
  function Rb(e, i, a, o) {
    var u = q.T;
    q.T = null;
    var d = P.p;
    try {
      (P.p = 8), uf(e, i, a, o);
    } finally {
      (P.p = d), (q.T = u);
    }
  }
  function uf(e, i, a, o) {
    if (Rl) {
      var u = cf(o);
      if (u === null) W0(e, i, o, wl, a), qm(e, o);
      else if (Ob(u, e, i, a, o)) o.stopPropagation();
      else if ((qm(e, o), i & 4 && -1 < wb.indexOf(e))) {
        for (; u !== null; ) {
          var d = dn(u);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (((d = d.stateNode), d.current.memoizedState.isDehydrated)) {
                  var E = Xn(d.pendingLanes);
                  if (E !== 0) {
                    var B = d;
                    for (B.pendingLanes |= 2, B.entangledLanes |= 2; E; ) {
                      var M = 1 << (31 - Nt(E));
                      (B.entanglements[1] |= M), (E &= ~M);
                    }
                    fi(d), (ft & 6) === 0 && ((dl = ut() + 500), Vs(0));
                  }
                }
                break;
              case 13:
                (B = Gi(d, 2)), B !== null && It(B, d, 2), ml(), lf(d, 2);
            }
          if (((d = cf(o)), d === null && W0(e, i, o, wl, a), d === u)) break;
          u = d;
        }
        u !== null && o.stopPropagation();
      } else W0(e, i, o, null, a);
    }
  }
  function cf(e) {
    return (e = xc(e)), ff(e);
  }
  var wl = null;
  function ff(e) {
    if (((wl = null), (e = Qe(e)), e !== null)) {
      var i = ie(e);
      if (i === null) e = null;
      else {
        var a = i.tag;
        if (a === 13) {
          if (((e = ye(i)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (i.stateNode.current.memoizedState.isDehydrated)
            return i.tag === 3 ? i.stateNode.containerInfo : null;
          e = null;
        } else i !== e && (e = null);
      }
    }
    return (wl = e), null;
  }
  function km(e) {
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
        switch (ai()) {
          case An:
            return 2;
          case Sn:
            return 8;
          case Wt:
          case tn:
            return 32;
          case qi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var hf = !1,
    or = null,
    lr = null,
    ur = null,
    Gs = new Map(),
    Ks = new Map(),
    cr = [],
    wb =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function qm(e, i) {
    switch (e) {
      case "focusin":
      case "focusout":
        or = null;
        break;
      case "dragenter":
      case "dragleave":
        lr = null;
        break;
      case "mouseover":
      case "mouseout":
        ur = null;
        break;
      case "pointerover":
      case "pointerout":
        Gs.delete(i.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ks.delete(i.pointerId);
    }
  }
  function Qs(e, i, a, o, u, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: i,
          domEventName: a,
          eventSystemFlags: o,
          nativeEvent: d,
          targetContainers: [u],
        }),
        i !== null && ((i = dn(i)), i !== null && Vm(i)),
        e)
      : ((e.eventSystemFlags |= o),
        (i = e.targetContainers),
        u !== null && i.indexOf(u) === -1 && i.push(u),
        e);
  }
  function Ob(e, i, a, o, u) {
    switch (i) {
      case "focusin":
        return (or = Qs(or, e, i, a, o, u)), !0;
      case "dragenter":
        return (lr = Qs(lr, e, i, a, o, u)), !0;
      case "mouseover":
        return (ur = Qs(ur, e, i, a, o, u)), !0;
      case "pointerover":
        var d = u.pointerId;
        return Gs.set(d, Qs(Gs.get(d) || null, e, i, a, o, u)), !0;
      case "gotpointercapture":
        return (
          (d = u.pointerId), Ks.set(d, Qs(Ks.get(d) || null, e, i, a, o, u)), !0
        );
    }
    return !1;
  }
  function jm(e) {
    var i = Qe(e.target);
    if (i !== null) {
      var a = ie(i);
      if (a !== null) {
        if (((i = a.tag), i === 13)) {
          if (((i = ye(a)), i !== null)) {
            (e.blockedOn = i),
              Ae(e.priority, function () {
                if (a.tag === 13) {
                  var o = yn(),
                    u = Gi(a, o);
                  u !== null && It(u, a, o), lf(a, o);
                }
              });
            return;
          }
        } else if (i === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ol(e) {
    if (e.blockedOn !== null) return !1;
    for (var i = e.targetContainers; 0 < i.length; ) {
      var a = cf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var o = new a.constructor(a.type, a);
        (pc = o), a.target.dispatchEvent(o), (pc = null);
      } else return (i = dn(a)), i !== null && Vm(i), (e.blockedOn = a), !1;
      i.shift();
    }
    return !0;
  }
  function Pm(e, i, a) {
    Ol(e) && a.delete(i);
  }
  function Mb() {
    (hf = !1),
      or !== null && Ol(or) && (or = null),
      lr !== null && Ol(lr) && (lr = null),
      ur !== null && Ol(ur) && (ur = null),
      Gs.forEach(Pm),
      Ks.forEach(Pm);
  }
  function Ml(e, i) {
    e.blockedOn === i &&
      ((e.blockedOn = null),
      hf ||
        ((hf = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, Mb)));
  }
  var Fl = null;
  function Ym(e) {
    Fl !== e &&
      ((Fl = e),
      t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
        Fl === e && (Fl = null);
        for (var i = 0; i < e.length; i += 3) {
          var a = e[i],
            o = e[i + 1],
            u = e[i + 2];
          if (typeof o != "function") {
            if (ff(o || a) === null) continue;
            break;
          }
          var d = dn(a);
          d !== null &&
            (e.splice(i, 3),
            (i -= 3),
            e0(d, { pending: !0, data: u, method: a.method, action: o }, o, u));
        }
      }));
  }
  function Zs(e) {
    function i(M) {
      return Ml(M, e);
    }
    or !== null && Ml(or, e),
      lr !== null && Ml(lr, e),
      ur !== null && Ml(ur, e),
      Gs.forEach(i),
      Ks.forEach(i);
    for (var a = 0; a < cr.length; a++) {
      var o = cr[a];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < cr.length && ((a = cr[0]), a.blockedOn === null); )
      jm(a), a.blockedOn === null && cr.shift();
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (o = 0; o < a.length; o += 3) {
        var u = a[o],
          d = a[o + 1],
          E = u[de] || null;
        if (typeof d == "function") E || Ym(a);
        else if (E) {
          var B = null;
          if (d && d.hasAttribute("formAction")) {
            if (((u = d), (E = d[de] || null))) B = E.formAction;
            else if (ff(u) !== null) continue;
          } else B = E.action;
          typeof B == "function" ? (a[o + 1] = B) : (a.splice(o, 3), (o -= 3)),
            Ym(a);
        }
      }
  }
  function df(e) {
    this._internalRoot = e;
  }
  (Ll.prototype.render = df.prototype.render =
    function (e) {
      var i = this._internalRoot;
      if (i === null) throw Error(s(409));
      var a = i.current,
        o = yn();
      Nm(a, o, e, i, null, null);
    }),
    (Ll.prototype.unmount = df.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var i = e.containerInfo;
          e.tag === 0 && La(),
            Nm(e.current, 2, null, e, null, null),
            ml(),
            (i[ve] = null);
        }
      });
  function Ll(e) {
    this._internalRoot = e;
  }
  Ll.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var i = fe();
      e = { blockedOn: null, target: e, priority: i };
      for (var a = 0; a < cr.length && i !== 0 && i < cr[a].priority; a++);
      cr.splice(a, 0, e), a === 0 && jm(e);
    }
  };
  var Xm = n.version;
  if (Xm !== "19.0.0") throw Error(s(527, Xm, "19.0.0"));
  P.findDOMNode = function (e) {
    var i = e._reactInternals;
    if (i === void 0)
      throw typeof e.render == "function"
        ? Error(s(188))
        : ((e = Object.keys(e).join(",")), Error(s(268, e)));
    return (
      (e = z(i)),
      (e = e !== null ? X(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Fb = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: q,
    findFiberByHostInstance: Qe,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var Ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ul.isDisabled && Ul.supportsFiber)
      try {
        (Yt = Ul.inject(Fb)), (Rt = Ul);
      } catch (e) {}
  }
  return (
    ($s.createRoot = function (e, i) {
      if (!l(e)) throw Error(s(299));
      var a = !1,
        o = "",
        u = lx,
        d = ux,
        E = cx,
        B = null;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (a = !0),
          i.identifierPrefix !== void 0 && (o = i.identifierPrefix),
          i.onUncaughtError !== void 0 && (u = i.onUncaughtError),
          i.onCaughtError !== void 0 && (d = i.onCaughtError),
          i.onRecoverableError !== void 0 && (E = i.onRecoverableError),
          i.unstable_transitionCallbacks !== void 0 &&
            (B = i.unstable_transitionCallbacks)),
        (i = Um(e, 1, !1, null, null, a, o, u, d, E, B, null)),
        (e[ve] = i.current),
        Z0(e.nodeType === 8 ? e.parentNode : e),
        new df(i)
      );
    }),
    ($s.hydrateRoot = function (e, i, a) {
      if (!l(e)) throw Error(s(299));
      var o = !1,
        u = "",
        d = lx,
        E = ux,
        B = cx,
        M = null,
        k = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (o = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (d = a.onUncaughtError),
          a.onCaughtError !== void 0 && (E = a.onCaughtError),
          a.onRecoverableError !== void 0 && (B = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (M = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (k = a.formState)),
        (i = Um(e, 1, !0, i, a != null ? a : null, o, u, d, E, B, M, k)),
        (i.context = zm(null)),
        (a = i.current),
        (o = yn()),
        (u = Ii(o)),
        (u.callback = null),
        er(a, u, o),
        (i.current.lanes = o),
        bi(i, o),
        fi(i),
        (e[ve] = i.current),
        Z0(e),
        new Ll(i)
      );
    }),
    ($s.version = "19.0.0"),
    $s
  );
}
var a1;
function Zb() {
  if (a1) return gf.exports;
  a1 = 1;
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
  return t(), (gf.exports = Qb()), gf.exports;
}
var Wb = Zb();
const HT = Zu(Wb);
var Ky = Gy();
const $b = Zu(Ky),
  Jb = Xy({ __proto__: null, default: $b }, [Ky]);
/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ot() {
  return (
    (ot = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var s in r)
              Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
          }
          return t;
        }),
    ot.apply(this, arguments)
  );
}
var Dt;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(Dt || (Dt = {}));
const s1 = "popstate";
function Ib(t) {
  t === void 0 && (t = {});
  function n(s, l) {
    let { pathname: c, search: f, hash: p } = s.location;
    return ho(
      "",
      { pathname: c, search: f, hash: p },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
    );
  }
  function r(s, l) {
    return typeof l == "string" ? l : bo(l);
  }
  return t8(n, r, null, t);
}
function ke(t, n) {
  if (t === !1 || t === null || typeof t == "undefined") throw new Error(n);
}
function ra(t, n) {
  if (!t) {
    typeof console != "undefined" && console.warn(n);
    try {
      throw new Error(n);
    } catch (r) {}
  }
}
function e8() {
  return Math.random().toString(36).substr(2, 8);
}
function o1(t, n) {
  return { usr: t.state, key: t.key, idx: n };
}
function ho(t, n, r, s) {
  return (
    r === void 0 && (r = null),
    ot(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof n == "string" ? gr(n) : n,
      { state: r, key: (n && n.key) || s || e8() },
    )
  );
}
function bo(t) {
  let { pathname: n = "/", search: r = "", hash: s = "" } = t;
  return (
    r && r !== "?" && (n += r.charAt(0) === "?" ? r : "?" + r),
    s && s !== "#" && (n += s.charAt(0) === "#" ? s : "#" + s),
    n
  );
}
function gr(t) {
  let n = {};
  if (t) {
    let r = t.indexOf("#");
    r >= 0 && ((n.hash = t.substr(r)), (t = t.substr(0, r)));
    let s = t.indexOf("?");
    s >= 0 && ((n.search = t.substr(s)), (t = t.substr(0, s))),
      t && (n.pathname = t);
  }
  return n;
}
function t8(t, n, r, s) {
  s === void 0 && (s = {});
  let { window: l = document.defaultView, v5Compat: c = !1 } = s,
    f = l.history,
    p = Dt.Pop,
    x = null,
    h = m();
  h == null && ((h = 0), f.replaceState(ot({}, f.state, { idx: h }), ""));
  function m() {
    return (f.state || { idx: null }).idx;
  }
  function v() {
    p = Dt.Pop;
    let A = m(),
      R = A == null ? null : A - h;
    (h = A), x && x({ action: p, location: S.location, delta: R });
  }
  function y(A, R) {
    p = Dt.Push;
    let C = ho(S.location, A, R);
    h = m() + 1;
    let D = o1(C, h),
      _ = S.createHref(C);
    try {
      f.pushState(D, "", _);
    } catch (w) {
      if (w instanceof DOMException && w.name === "DataCloneError") throw w;
      l.location.assign(_);
    }
    c && x && x({ action: p, location: S.location, delta: 1 });
  }
  function g(A, R) {
    p = Dt.Replace;
    let C = ho(S.location, A, R);
    h = m();
    let D = o1(C, h),
      _ = S.createHref(C);
    f.replaceState(D, "", _),
      c && x && x({ action: p, location: S.location, delta: 0 });
  }
  function b(A) {
    let R = l.location.origin !== "null" ? l.location.origin : l.location.href,
      C = typeof A == "string" ? A : bo(A);
    return (
      (C = C.replace(/ $/, "%20")),
      ke(
        R,
        "No window.location.(origin|href) available to create URL for href: " +
          C,
      ),
      new URL(C, R)
    );
  }
  let S = {
    get action() {
      return p;
    },
    get location() {
      return t(l, f);
    },
    listen(A) {
      if (x) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(s1, v),
        (x = A),
        () => {
          l.removeEventListener(s1, v), (x = null);
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
    push: y,
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
const n8 = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function i8(t) {
  return t.index === !0;
}
function Vu(t, n, r, s) {
  return (
    r === void 0 && (r = []),
    s === void 0 && (s = {}),
    t.map((l, c) => {
      let f = [...r, String(c)],
        p = typeof l.id == "string" ? l.id : f.join("-");
      if (
        (ke(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route",
        ),
        ke(
          !s[p],
          'Found a route id collision on id "' +
            p +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        i8(l))
      ) {
        let x = ot({}, l, n(l), { id: p });
        return (s[p] = x), x;
      } else {
        let x = ot({}, l, n(l), { id: p, children: void 0 });
        return (
          (s[p] = x), l.children && (x.children = Vu(l.children, n, f, s)), x
        );
      }
    })
  );
}
function Zr(t, n, r) {
  return r === void 0 && (r = "/"), Xl(t, n, r, !1);
}
function Xl(t, n, r, s) {
  let l = typeof n == "string" ? gr(n) : n,
    c = Ao(l.pathname || "/", r);
  if (c == null) return null;
  let f = Qy(t);
  a8(f);
  let p = null;
  for (let x = 0; p == null && x < f.length; ++x) {
    let h = m8(c);
    p = p8(f[x], h, s);
  }
  return p;
}
function r8(t, n) {
  let { route: r, pathname: s, params: l } = t;
  return { id: r.id, pathname: s, params: l, data: n[r.id], handle: r.handle };
}
function Qy(t, n, r, s) {
  n === void 0 && (n = []), r === void 0 && (r = []), s === void 0 && (s = "");
  let l = (c, f, p) => {
    let x = {
      relativePath: p === void 0 ? c.path || "" : p,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: f,
      route: c,
    };
    x.relativePath.startsWith("/") &&
      (ke(
        x.relativePath.startsWith(s),
        'Absolute route path "' +
          x.relativePath +
          '" nested under path ' +
          ('"' + s + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (x.relativePath = x.relativePath.slice(s.length)));
    let h = xr([s, x.relativePath]),
      m = r.concat(x);
    c.children &&
      c.children.length > 0 &&
      (ke(
        c.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + h + '".'),
      ),
      Qy(c.children, n, m, h)),
      !(c.path == null && !c.index) &&
        n.push({ path: h, score: h8(h, c.index), routesMeta: m });
  };
  return (
    t.forEach((c, f) => {
      var p;
      if (c.path === "" || !((p = c.path) != null && p.includes("?"))) l(c, f);
      else for (let x of Zy(c.path)) l(c, f, x);
    }),
    n
  );
}
function Zy(t) {
  let n = t.split("/");
  if (n.length === 0) return [];
  let [r, ...s] = n,
    l = r.endsWith("?"),
    c = r.replace(/\?$/, "");
  if (s.length === 0) return l ? [c, ""] : [c];
  let f = Zy(s.join("/")),
    p = [];
  return (
    p.push(...f.map((x) => (x === "" ? c : [c, x].join("/")))),
    l && p.push(...f),
    p.map((x) => (t.startsWith("/") && x === "" ? "/" : x))
  );
}
function a8(t) {
  t.sort((n, r) =>
    n.score !== r.score
      ? r.score - n.score
      : d8(
          n.routesMeta.map((s) => s.childrenIndex),
          r.routesMeta.map((s) => s.childrenIndex),
        ),
  );
}
const s8 = /^:[\w-]+$/,
  o8 = 3,
  l8 = 2,
  u8 = 1,
  c8 = 10,
  f8 = -2,
  l1 = (t) => t === "*";
function h8(t, n) {
  let r = t.split("/"),
    s = r.length;
  return (
    r.some(l1) && (s += f8),
    n && (s += l8),
    r
      .filter((l) => !l1(l))
      .reduce((l, c) => l + (s8.test(c) ? o8 : c === "" ? u8 : c8), s)
  );
}
function d8(t, n) {
  return t.length === n.length && t.slice(0, -1).every((s, l) => s === n[l])
    ? t[t.length - 1] - n[n.length - 1]
    : 0;
}
function p8(t, n, r) {
  r === void 0 && (r = !1);
  let { routesMeta: s } = t,
    l = {},
    c = "/",
    f = [];
  for (let p = 0; p < s.length; ++p) {
    let x = s[p],
      h = p === s.length - 1,
      m = c === "/" ? n : n.slice(c.length) || "/",
      v = u1(
        { path: x.relativePath, caseSensitive: x.caseSensitive, end: h },
        m,
      ),
      y = x.route;
    if (
      (!v &&
        h &&
        r &&
        !s[s.length - 1].route.index &&
        (v = u1(
          { path: x.relativePath, caseSensitive: x.caseSensitive, end: !1 },
          m,
        )),
      !v)
    )
      return null;
    Object.assign(l, v.params),
      f.push({
        params: l,
        pathname: xr([c, v.pathname]),
        pathnameBase: E8(xr([c, v.pathnameBase])),
        route: y,
      }),
      v.pathnameBase !== "/" && (c = xr([c, v.pathnameBase]));
  }
  return f;
}
function u1(t, n) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [r, s] = x8(t.path, t.caseSensitive, t.end),
    l = n.match(r);
  if (!l) return null;
  let c = l[0],
    f = c.replace(/(.)\/+$/, "$1"),
    p = l.slice(1);
  return {
    params: s.reduce((h, m, v) => {
      let { paramName: y, isOptional: g } = m;
      if (y === "*") {
        let S = p[v] || "";
        f = c.slice(0, c.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const b = p[v];
      return (
        g && !b ? (h[y] = void 0) : (h[y] = (b || "").replace(/%2F/g, "/")), h
      );
    }, {}),
    pathname: c,
    pathnameBase: f,
    pattern: t,
  };
}
function x8(t, n, r) {
  n === void 0 && (n = !1),
    r === void 0 && (r = !0),
    ra(
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
          (f, p, x) => (
            s.push({ paramName: p, isOptional: x != null }),
            x ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    t.endsWith("*")
      ? (s.push({ paramName: "*" }),
        (l += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
        ? (l += "\\/*$")
        : t !== "" && t !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, n ? void 0 : "i"), s]
  );
}
function m8(t) {
  try {
    return t
      .split("/")
      .map((n) => decodeURIComponent(n).replace(/\//g, "%2F"))
      .join("/");
  } catch (n) {
    return (
      ra(
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
function Ao(t, n) {
  if (n === "/") return t;
  if (!t.toLowerCase().startsWith(n.toLowerCase())) return null;
  let r = n.endsWith("/") ? n.length - 1 : n.length,
    s = t.charAt(r);
  return s && s !== "/" ? null : t.slice(r) || "/";
}
const v8 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  y8 = (t) => v8.test(t);
function g8(t, n) {
  n === void 0 && (n = "/");
  let {
      pathname: r,
      search: s = "",
      hash: l = "",
    } = typeof t == "string" ? gr(t) : t,
    c;
  if (r)
    if (y8(r)) c = r;
    else {
      if (r.includes("//")) {
        let f = r;
        (r = r.replace(/\/\/+/g, "/")),
          ra(
            !1,
            "Pathnames cannot have embedded double slashes - normalizing " +
              (f + " -> " + r),
          );
      }
      r.startsWith("/") ? (c = c1(r.substring(1), "/")) : (c = c1(r, n));
    }
  else c = n;
  return { pathname: c, search: b8(s), hash: A8(l) };
}
function c1(t, n) {
  let r = n.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((l) => {
      l === ".." ? r.length > 1 && r.pop() : l !== "." && r.push(l);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Sf(t, n, r, s) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." +
      n +
      "` field [" +
      JSON.stringify(s) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Wy(t) {
  return t.filter(
    (n, r) => r === 0 || (n.route.path && n.route.path.length > 0),
  );
}
function $y(t, n) {
  let r = Wy(t);
  return n
    ? r.map((s, l) => (l === r.length - 1 ? s.pathname : s.pathnameBase))
    : r.map((s) => s.pathnameBase);
}
function Jy(t, n, r, s) {
  s === void 0 && (s = !1);
  let l;
  typeof t == "string"
    ? (l = gr(t))
    : ((l = ot({}, t)),
      ke(
        !l.pathname || !l.pathname.includes("?"),
        Sf("?", "pathname", "search", l),
      ),
      ke(
        !l.pathname || !l.pathname.includes("#"),
        Sf("#", "pathname", "hash", l),
      ),
      ke(!l.search || !l.search.includes("#"), Sf("#", "search", "hash", l)));
  let c = t === "" || l.pathname === "",
    f = c ? "/" : l.pathname,
    p;
  if (f == null) p = r;
  else {
    let v = n.length - 1;
    if (!s && f.startsWith("..")) {
      let y = f.split("/");
      for (; y[0] === ".."; ) y.shift(), (v -= 1);
      l.pathname = y.join("/");
    }
    p = v >= 0 ? n[v] : "/";
  }
  let x = g8(l, p),
    h = f && f !== "/" && f.endsWith("/"),
    m = (c || f === ".") && r.endsWith("/");
  return !x.pathname.endsWith("/") && (h || m) && (x.pathname += "/"), x;
}
const xr = (t) => t.join("/").replace(/\/\/+/g, "/"),
  E8 = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  b8 = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  A8 = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
class ku {
  constructor(n, r, s, l) {
    l === void 0 && (l = !1),
      (this.status = n),
      (this.statusText = r || ""),
      (this.internal = l),
      s instanceof Error
        ? ((this.data = s.toString()), (this.error = s))
        : (this.data = s);
  }
}
function po(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const Iy = ["post", "put", "patch", "delete"],
  S8 = new Set(Iy),
  C8 = ["get", ...Iy],
  D8 = new Set(C8),
  B8 = new Set([301, 302, 303, 307, 308]),
  T8 = new Set([307, 308]),
  Cf = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  _8 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Js = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Rh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  R8 = (t) => ({ hasErrorBoundary: !!t.hasErrorBoundary }),
  eg = "remix-router-transitions";
function w8(t) {
  const n = t.window
      ? t.window
      : typeof window != "undefined"
        ? window
        : void 0,
    r =
      typeof n != "undefined" &&
      typeof n.document != "undefined" &&
      typeof n.document.createElement != "undefined",
    s = !r;
  ke(
    t.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let l;
  if (t.mapRouteProperties) l = t.mapRouteProperties;
  else if (t.detectErrorBoundary) {
    let N = t.detectErrorBoundary;
    l = (V) => ({ hasErrorBoundary: N(V) });
  } else l = R8;
  let c = {},
    f = Vu(t.routes, l, void 0, c),
    p,
    x = t.basename || "/",
    h = t.dataStrategy || L8,
    m = t.patchRoutesOnNavigation,
    v = ot(
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
    y = null,
    g = new Set(),
    b = null,
    S = null,
    A = null,
    R = t.hydrationData != null,
    C = Zr(f, t.history.location, x),
    D = !1,
    _ = null;
  if (C == null && !m) {
    let N = on(404, { pathname: t.history.location.pathname }),
      { matches: V, route: Q } = b1(f);
    (C = V), (_ = { [Q.id]: N });
  }
  C &&
    !t.hydrationData &&
    gi(C, f, t.history.location.pathname).active &&
    (C = null);
  let w;
  if (C)
    if (C.some((N) => N.route.lazy)) w = !1;
    else if (!C.some((N) => N.route.loader)) w = !0;
    else if (v.v7_partialHydration) {
      let N = t.hydrationData ? t.hydrationData.loaderData : null,
        V = t.hydrationData ? t.hydrationData.errors : null;
      if (V) {
        let Q = C.findIndex((ae) => V[ae.route.id] !== void 0);
        w = C.slice(0, Q + 1).every((ae) => !Zf(ae.route, N, V));
      } else w = C.every((Q) => !Zf(Q.route, N, V));
    } else w = t.hydrationData != null;
  else if (((w = !1), (C = []), v.v7_partialHydration)) {
    let N = gi(null, f, t.history.location.pathname);
    N.active && N.matches && ((D = !0), (C = N.matches));
  }
  let L,
    T = {
      historyAction: t.history.action,
      location: t.history.location,
      matches: C,
      initialized: w,
      navigation: Cf,
      restoreScrollPosition: t.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (t.hydrationData && t.hydrationData.loaderData) || {},
      actionData: (t.hydrationData && t.hydrationData.actionData) || null,
      errors: (t.hydrationData && t.hydrationData.errors) || _,
      fetchers: new Map(),
      blockers: new Map(),
    },
    U = Dt.Pop,
    q = !1,
    O,
    j = !1,
    $ = new Map(),
    I = null,
    le = !1,
    ce = !1,
    ee = [],
    oe = new Set(),
    ie = new Map(),
    ye = 0,
    F = -1,
    z = new Map(),
    X = new Set(),
    K = new Map(),
    P = new Map(),
    pe = new Set(),
    xe = new Map(),
    Me = new Map(),
    me;
  function $e() {
    if (
      ((y = t.history.listen((N) => {
        let { action: V, location: Q, delta: ae } = N;
        if (me) {
          me(), (me = void 0);
          return;
        }
        ra(
          Me.size === 0 || ae != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let fe = Cr({
          currentLocation: T.location,
          nextLocation: Q,
          historyAction: V,
        });
        if (fe && ae != null) {
          let Ae = new Promise((Ce) => {
            me = Ce;
          });
          t.history.go(ae * -1),
            ji(fe, {
              state: "blocked",
              location: Q,
              proceed() {
                ji(fe, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: Q,
                }),
                  Ae.then(() => t.history.go(ae));
              },
              reset() {
                let Ce = new Map(T.blockers);
                Ce.set(fe, Js), et({ blockers: Ce });
              },
            });
          return;
        }
        return Et(V, Q);
      })),
      r)
    ) {
      Q8(n, $);
      let N = () => Z8(n, $);
      n.addEventListener("pagehide", N),
        (I = () => n.removeEventListener("pagehide", N));
    }
    return T.initialized || Et(Dt.Pop, T.location, { initialHydration: !0 }), L;
  }
  function Ye() {
    y && y(),
      I && I(),
      g.clear(),
      O && O.abort(),
      T.fetchers.forEach((N, V) => fn(V)),
      T.blockers.forEach((N, V) => Sr(V));
  }
  function jt(N) {
    return g.add(N), () => g.delete(N);
  }
  function et(N, V) {
    V === void 0 && (V = {}), (T = ot({}, T, N));
    let Q = [],
      ae = [];
    v.v7_fetcherPersist &&
      T.fetchers.forEach((fe, Ae) => {
        fe.state === "idle" && (pe.has(Ae) ? ae.push(Ae) : Q.push(Ae));
      }),
      pe.forEach((fe) => {
        !T.fetchers.has(fe) && !ie.has(fe) && ae.push(fe);
      }),
      [...g].forEach((fe) =>
        fe(T, {
          deletedFetchers: ae,
          viewTransitionOpts: V.viewTransitionOpts,
          flushSync: V.flushSync === !0,
        }),
      ),
      v.v7_fetcherPersist
        ? (Q.forEach((fe) => T.fetchers.delete(fe)), ae.forEach((fe) => fn(fe)))
        : ae.forEach((fe) => pe.delete(fe));
  }
  function tt(N, V, Q) {
    var ae, fe;
    let { flushSync: Ae } = Q === void 0 ? {} : Q,
      Ce =
        T.actionData != null &&
        T.navigation.formMethod != null &&
        ei(T.navigation.formMethod) &&
        T.navigation.state === "loading" &&
        ((ae = N.state) == null ? void 0 : ae._isRedirect) !== !0,
      he;
    V.actionData
      ? Object.keys(V.actionData).length > 0
        ? (he = V.actionData)
        : (he = null)
      : Ce
        ? (he = T.actionData)
        : (he = null);
    let de = V.loaderData
        ? g1(T.loaderData, V.loaderData, V.matches || [], V.errors)
        : T.loaderData,
      ve = T.blockers;
    ve.size > 0 && ((ve = new Map(ve)), ve.forEach((Ue, bt) => ve.set(bt, Js)));
    let Ee =
      q === !0 ||
      (T.navigation.formMethod != null &&
        ei(T.navigation.formMethod) &&
        ((fe = N.state) == null ? void 0 : fe._isRedirect) !== !0);
    p && ((f = p), (p = void 0)),
      le ||
        U === Dt.Pop ||
        (U === Dt.Push
          ? t.history.push(N, N.state)
          : U === Dt.Replace && t.history.replace(N, N.state));
    let _e;
    if (U === Dt.Pop) {
      let Ue = $.get(T.location.pathname);
      Ue && Ue.has(N.pathname)
        ? (_e = { currentLocation: T.location, nextLocation: N })
        : $.has(N.pathname) &&
          (_e = { currentLocation: N, nextLocation: T.location });
    } else if (j) {
      let Ue = $.get(T.location.pathname);
      Ue
        ? Ue.add(N.pathname)
        : ((Ue = new Set([N.pathname])), $.set(T.location.pathname, Ue)),
        (_e = { currentLocation: T.location, nextLocation: N });
    }
    et(
      ot({}, V, {
        actionData: he,
        loaderData: de,
        historyAction: U,
        location: N,
        initialized: !0,
        navigation: Cf,
        revalidation: "idle",
        restoreScrollPosition: Dr(N, V.matches || T.matches),
        preventScrollReset: Ee,
        blockers: ve,
      }),
      { viewTransitionOpts: _e, flushSync: Ae === !0 },
    ),
      (U = Dt.Pop),
      (q = !1),
      (j = !1),
      (le = !1),
      (ce = !1),
      (ee = []);
  }
  async function vt(N, V) {
    if (typeof N == "number") {
      t.history.go(N);
      return;
    }
    let Q = Qf(
        T.location,
        T.matches,
        x,
        v.v7_prependBasename,
        N,
        v.v7_relativeSplatPath,
        V == null ? void 0 : V.fromRouteId,
        V == null ? void 0 : V.relative,
      ),
      {
        path: ae,
        submission: fe,
        error: Ae,
      } = f1(v.v7_normalizeFormMethod, !1, Q, V),
      Ce = T.location,
      he = ho(T.location, ae, V && V.state);
    he = ot({}, he, t.history.encodeLocation(he));
    let de = V && V.replace != null ? V.replace : void 0,
      ve = Dt.Push;
    de === !0
      ? (ve = Dt.Replace)
      : de === !1 ||
        (fe != null &&
          ei(fe.formMethod) &&
          fe.formAction === T.location.pathname + T.location.search &&
          (ve = Dt.Replace));
    let Ee =
        V && "preventScrollReset" in V ? V.preventScrollReset === !0 : void 0,
      _e = (V && V.flushSync) === !0,
      Ue = Cr({ currentLocation: Ce, nextLocation: he, historyAction: ve });
    if (Ue) {
      ji(Ue, {
        state: "blocked",
        location: he,
        proceed() {
          ji(Ue, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: he,
          }),
            vt(N, V);
        },
        reset() {
          let bt = new Map(T.blockers);
          bt.set(Ue, Js), et({ blockers: bt });
        },
      });
      return;
    }
    return await Et(ve, he, {
      submission: fe,
      pendingError: Ae,
      preventScrollReset: Ee,
      replace: V && V.replace,
      enableViewTransition: V && V.viewTransition,
      flushSync: _e,
    });
  }
  function jn() {
    if (
      (Sn(),
      et({ revalidation: "loading" }),
      T.navigation.state !== "submitting")
    ) {
      if (T.navigation.state === "idle") {
        Et(T.historyAction, T.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Et(U || T.historyAction, T.navigation.location, {
        overrideNavigation: T.navigation,
        enableViewTransition: j === !0,
      });
    }
  }
  async function Et(N, V, Q) {
    O && O.abort(),
      (O = null),
      (U = N),
      (le = (Q && Q.startUninterruptedRevalidation) === !0),
      yi(T.location, T.matches),
      (q = (Q && Q.preventScrollReset) === !0),
      (j = (Q && Q.enableViewTransition) === !0);
    let ae = p || f,
      fe = Q && Q.overrideNavigation,
      Ae =
        Q != null &&
        Q.initialHydration &&
        T.matches &&
        T.matches.length > 0 &&
        !D
          ? T.matches
          : Zr(ae, V, x),
      Ce = (Q && Q.flushSync) === !0;
    if (
      Ae &&
      T.initialized &&
      !ce &&
      k8(T.location, V) &&
      !(Q && Q.submission && ei(Q.submission.formMethod))
    ) {
      tt(V, { matches: Ae }, { flushSync: Ce });
      return;
    }
    let he = gi(Ae, ae, V.pathname);
    if ((he.active && he.matches && (Ae = he.matches), !Ae)) {
      let { error: Xe, notFoundMatches: Ne, route: Qe } = si(V.pathname);
      tt(
        V,
        { matches: Ne, loaderData: {}, errors: { [Qe.id]: Xe } },
        { flushSync: Ce },
      );
      return;
    }
    O = new AbortController();
    let de = qa(t.history, V, O.signal, Q && Q.submission),
      ve;
    if (Q && Q.pendingError)
      ve = [Wr(Ae).route.id, { type: We.error, error: Q.pendingError }];
    else if (Q && Q.submission && ei(Q.submission.formMethod)) {
      let Xe = await ii(de, V, Q.submission, Ae, he.active, {
        replace: Q.replace,
        flushSync: Ce,
      });
      if (Xe.shortCircuited) return;
      if (Xe.pendingActionResult) {
        let [Ne, Qe] = Xe.pendingActionResult;
        if (gn(Qe) && po(Qe.error) && Qe.error.status === 404) {
          (O = null),
            tt(V, {
              matches: Xe.matches,
              loaderData: {},
              errors: { [Ne]: Qe.error },
            });
          return;
        }
      }
      (Ae = Xe.matches || Ae),
        (ve = Xe.pendingActionResult),
        (fe = Df(V, Q.submission)),
        (Ce = !1),
        (he.active = !1),
        (de = qa(t.history, de.url, de.signal));
    }
    let {
      shortCircuited: Ee,
      matches: _e,
      loaderData: Ue,
      errors: bt,
    } = await En(
      de,
      V,
      Ae,
      he.active,
      fe,
      Q && Q.submission,
      Q && Q.fetcherSubmission,
      Q && Q.replace,
      Q && Q.initialHydration === !0,
      Ce,
      ve,
    );
    Ee ||
      ((O = null),
      tt(V, ot({ matches: _e || Ae }, E1(ve), { loaderData: Ue, errors: bt })));
  }
  async function ii(N, V, Q, ae, fe, Ae) {
    Ae === void 0 && (Ae = {}), Sn();
    let Ce = G8(V, Q);
    if ((et({ navigation: Ce }, { flushSync: Ae.flushSync === !0 }), fe)) {
      let ve = await Ei(ae, V.pathname, N.signal);
      if (ve.type === "aborted") return { shortCircuited: !0 };
      if (ve.type === "error") {
        let Ee = Wr(ve.partialMatches).route.id;
        return {
          matches: ve.partialMatches,
          pendingActionResult: [Ee, { type: We.error, error: ve.error }],
        };
      } else if (ve.matches) ae = ve.matches;
      else {
        let { notFoundMatches: Ee, error: _e, route: Ue } = si(V.pathname);
        return {
          matches: Ee,
          pendingActionResult: [Ue.id, { type: We.error, error: _e }],
        };
      }
    }
    let he,
      de = ro(ae, V);
    if (!de.route.action && !de.route.lazy)
      he = {
        type: We.error,
        error: on(405, {
          method: N.method,
          pathname: V.pathname,
          routeId: de.route.id,
        }),
      };
    else if (
      ((he = (await ai("action", T, N, [de], ae, null))[de.route.id]),
      N.signal.aborted)
    )
      return { shortCircuited: !0 };
    if ($r(he)) {
      let ve;
      return (
        Ae && Ae.replace != null
          ? (ve = Ae.replace)
          : (ve =
              m1(he.response.headers.get("Location"), new URL(N.url), x) ===
              T.location.pathname + T.location.search),
        await ut(N, he, !0, { submission: Q, replace: ve }),
        { shortCircuited: !0 }
      );
    }
    if (pr(he)) throw on(400, { type: "defer-action" });
    if (gn(he)) {
      let ve = Wr(ae, de.route.id);
      return (
        (Ae && Ae.replace) !== !0 && (U = Dt.Push),
        { matches: ae, pendingActionResult: [ve.route.id, he] }
      );
    }
    return { matches: ae, pendingActionResult: [de.route.id, he] };
  }
  async function En(N, V, Q, ae, fe, Ae, Ce, he, de, ve, Ee) {
    let _e = fe || Df(V, Ae),
      Ue = Ae || Ce || S1(_e),
      bt = !le && (!v.v7_partialHydration || !de);
    if (ae) {
      if (bt) {
        let at = ri(Ee);
        et(ot({ navigation: _e }, at !== void 0 ? { actionData: at } : {}), {
          flushSync: ve,
        });
      }
      let je = await Ei(Q, V.pathname, N.signal);
      if (je.type === "aborted") return { shortCircuited: !0 };
      if (je.type === "error") {
        let at = Wr(je.partialMatches).route.id;
        return {
          matches: je.partialMatches,
          loaderData: {},
          errors: { [at]: je.error },
        };
      } else if (je.matches) Q = je.matches;
      else {
        let { error: at, notFoundMatches: Ai, route: Br } = si(V.pathname);
        return { matches: Ai, loaderData: {}, errors: { [Br.id]: at } };
      }
    }
    let Xe = p || f,
      [Ne, Qe] = d1(
        t.history,
        T,
        Q,
        Ue,
        V,
        v.v7_partialHydration && de === !0,
        v.v7_skipActionErrorRevalidation,
        ce,
        ee,
        oe,
        pe,
        K,
        X,
        Xe,
        x,
        Ee,
      );
    if (
      (Yn(
        (je) =>
          !(Q && Q.some((at) => at.route.id === je)) ||
          (Ne && Ne.some((at) => at.route.id === je)),
      ),
      (F = ++ye),
      Ne.length === 0 && Qe.length === 0)
    ) {
      let je = Ar();
      return (
        tt(
          V,
          ot(
            {
              matches: Q,
              loaderData: {},
              errors: Ee && gn(Ee[1]) ? { [Ee[0]]: Ee[1].error } : null,
            },
            E1(Ee),
            je ? { fetchers: new Map(T.fetchers) } : {},
          ),
          { flushSync: ve },
        ),
        { shortCircuited: !0 }
      );
    }
    if (bt) {
      let je = {};
      if (!ae) {
        je.navigation = _e;
        let at = ri(Ee);
        at !== void 0 && (je.actionData = at);
      }
      Qe.length > 0 && (je.fetchers = Pn(Qe)), et(je, { flushSync: ve });
    }
    Qe.forEach((je) => {
      Yt(je.key), je.controller && ie.set(je.key, je.controller);
    });
    let dn = () => Qe.forEach((je) => Yt(je.key));
    O && O.signal.addEventListener("abort", dn);
    let { loaderResults: Gn, fetcherResults: Xt } = await An(T, Q, Ne, Qe, N);
    if (N.signal.aborted) return { shortCircuited: !0 };
    O && O.signal.removeEventListener("abort", dn),
      Qe.forEach((je) => ie.delete(je.key));
    let Ze = Nl(Gn);
    if (Ze)
      return (
        await ut(N, Ze.result, !0, { replace: he }), { shortCircuited: !0 }
      );
    if (((Ze = Nl(Xt)), Ze))
      return (
        X.add(Ze.key),
        await ut(N, Ze.result, !0, { replace: he }),
        { shortCircuited: !0 }
      );
    let { loaderData: la, errors: Yi } = y1(T, Q, Gn, Ee, Qe, Xt, xe);
    xe.forEach((je, at) => {
      je.subscribe((Ai) => {
        (Ai || je.done) && xe.delete(at);
      });
    }),
      v.v7_partialHydration && de && T.errors && (Yi = ot({}, T.errors, Yi));
    let $t = Ar(),
      Kn = hn(F),
      nn = $t || Kn || Qe.length > 0;
    return ot(
      { matches: Q, loaderData: la, errors: Yi },
      nn ? { fetchers: new Map(T.fetchers) } : {},
    );
  }
  function ri(N) {
    if (N && !gn(N[1])) return { [N[0]]: N[1].data };
    if (T.actionData)
      return Object.keys(T.actionData).length === 0 ? null : T.actionData;
  }
  function Pn(N) {
    return (
      N.forEach((V) => {
        let Q = T.fetchers.get(V.key),
          ae = Is(void 0, Q ? Q.data : void 0);
        T.fetchers.set(V.key, ae);
      }),
      new Map(T.fetchers)
    );
  }
  function zt(N, V, Q, ae) {
    if (s)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    Yt(N);
    let fe = (ae && ae.flushSync) === !0,
      Ae = p || f,
      Ce = Qf(
        T.location,
        T.matches,
        x,
        v.v7_prependBasename,
        Q,
        v.v7_relativeSplatPath,
        V,
        ae == null ? void 0 : ae.relative,
      ),
      he = Zr(Ae, Ce, x),
      de = gi(he, Ae, Ce);
    if ((de.active && de.matches && (he = de.matches), !he)) {
      tn(N, V, on(404, { pathname: Ce }), { flushSync: fe });
      return;
    }
    let {
      path: ve,
      submission: Ee,
      error: _e,
    } = f1(v.v7_normalizeFormMethod, !0, Ce, ae);
    if (_e) {
      tn(N, V, _e, { flushSync: fe });
      return;
    }
    let Ue = ro(he, ve),
      bt = (ae && ae.preventScrollReset) === !0;
    if (Ee && ei(Ee.formMethod)) {
      Pt(N, V, ve, Ue, he, de.active, fe, bt, Ee);
      return;
    }
    K.set(N, { routeId: V, path: ve }),
      bn(N, V, ve, Ue, he, de.active, fe, bt, Ee);
  }
  async function Pt(N, V, Q, ae, fe, Ae, Ce, he, de) {
    Sn(), K.delete(N);
    function ve(st) {
      if (!st.route.action && !st.route.lazy) {
        let Qn = on(405, { method: de.formMethod, pathname: Q, routeId: V });
        return tn(N, V, Qn, { flushSync: Ce }), !0;
      }
      return !1;
    }
    if (!Ae && ve(ae)) return;
    let Ee = T.fetchers.get(N);
    Wt(N, K8(de, Ee), { flushSync: Ce });
    let _e = new AbortController(),
      Ue = qa(t.history, Q, _e.signal, de);
    if (Ae) {
      let st = await Ei(fe, new URL(Ue.url).pathname, Ue.signal, N);
      if (st.type === "aborted") return;
      if (st.type === "error") {
        tn(N, V, st.error, { flushSync: Ce });
        return;
      } else if (st.matches) {
        if (((fe = st.matches), (ae = ro(fe, Q)), ve(ae))) return;
      } else {
        tn(N, V, on(404, { pathname: Q }), { flushSync: Ce });
        return;
      }
    }
    ie.set(N, _e);
    let bt = ye,
      Ne = (await ai("action", T, Ue, [ae], fe, N))[ae.route.id];
    if (Ue.signal.aborted) {
      ie.get(N) === _e && ie.delete(N);
      return;
    }
    if (v.v7_fetcherPersist && pe.has(N)) {
      if ($r(Ne) || gn(Ne)) {
        Wt(N, hr(void 0));
        return;
      }
    } else {
      if ($r(Ne))
        if ((ie.delete(N), F > bt)) {
          Wt(N, hr(void 0));
          return;
        } else
          return (
            X.add(N),
            Wt(N, Is(de)),
            ut(Ue, Ne, !1, { fetcherSubmission: de, preventScrollReset: he })
          );
      if (gn(Ne)) {
        tn(N, V, Ne.error);
        return;
      }
    }
    if (pr(Ne)) throw on(400, { type: "defer-action" });
    let Qe = T.navigation.location || T.location,
      dn = qa(t.history, Qe, _e.signal),
      Gn = p || f,
      Xt =
        T.navigation.state !== "idle"
          ? Zr(Gn, T.navigation.location, x)
          : T.matches;
    ke(Xt, "Didn't find any matches after fetcher action");
    let Ze = ++ye;
    z.set(N, Ze);
    let la = Is(de, Ne.data);
    T.fetchers.set(N, la);
    let [Yi, $t] = d1(
      t.history,
      T,
      Xt,
      de,
      Qe,
      !1,
      v.v7_skipActionErrorRevalidation,
      ce,
      ee,
      oe,
      pe,
      K,
      X,
      Gn,
      x,
      [ae.route.id, Ne],
    );
    $t
      .filter((st) => st.key !== N)
      .forEach((st) => {
        let Qn = st.key,
          Cn = T.fetchers.get(Qn),
          rn = Is(void 0, Cn ? Cn.data : void 0);
        T.fetchers.set(Qn, rn),
          Yt(Qn),
          st.controller && ie.set(Qn, st.controller);
      }),
      et({ fetchers: new Map(T.fetchers) });
    let Kn = () => $t.forEach((st) => Yt(st.key));
    _e.signal.addEventListener("abort", Kn);
    let { loaderResults: nn, fetcherResults: je } = await An(T, Xt, Yi, $t, dn);
    if (_e.signal.aborted) return;
    _e.signal.removeEventListener("abort", Kn),
      z.delete(N),
      ie.delete(N),
      $t.forEach((st) => ie.delete(st.key));
    let at = Nl(nn);
    if (at) return ut(dn, at.result, !1, { preventScrollReset: he });
    if (((at = Nl(je)), at))
      return X.add(at.key), ut(dn, at.result, !1, { preventScrollReset: he });
    let { loaderData: Ai, errors: Br } = y1(T, Xt, nn, void 0, $t, je, xe);
    if (T.fetchers.has(N)) {
      let st = hr(Ne.data);
      T.fetchers.set(N, st);
    }
    hn(Ze),
      T.navigation.state === "loading" && Ze > F
        ? (ke(U, "Expected pending action"),
          O && O.abort(),
          tt(T.navigation.location, {
            matches: Xt,
            loaderData: Ai,
            errors: Br,
            fetchers: new Map(T.fetchers),
          }))
        : (et({
            errors: Br,
            loaderData: g1(T.loaderData, Ai, Xt, Br),
            fetchers: new Map(T.fetchers),
          }),
          (ce = !1));
  }
  async function bn(N, V, Q, ae, fe, Ae, Ce, he, de) {
    let ve = T.fetchers.get(N);
    Wt(N, Is(de, ve ? ve.data : void 0), { flushSync: Ce });
    let Ee = new AbortController(),
      _e = qa(t.history, Q, Ee.signal);
    if (Ae) {
      let Ne = await Ei(fe, new URL(_e.url).pathname, _e.signal, N);
      if (Ne.type === "aborted") return;
      if (Ne.type === "error") {
        tn(N, V, Ne.error, { flushSync: Ce });
        return;
      } else if (Ne.matches) (fe = Ne.matches), (ae = ro(fe, Q));
      else {
        tn(N, V, on(404, { pathname: Q }), { flushSync: Ce });
        return;
      }
    }
    ie.set(N, Ee);
    let Ue = ye,
      Xe = (await ai("loader", T, _e, [ae], fe, N))[ae.route.id];
    if (
      (pr(Xe) && (Xe = (await wh(Xe, _e.signal, !0)) || Xe),
      ie.get(N) === Ee && ie.delete(N),
      !_e.signal.aborted)
    ) {
      if (pe.has(N)) {
        Wt(N, hr(void 0));
        return;
      }
      if ($r(Xe))
        if (F > Ue) {
          Wt(N, hr(void 0));
          return;
        } else {
          X.add(N), await ut(_e, Xe, !1, { preventScrollReset: he });
          return;
        }
      if (gn(Xe)) {
        tn(N, V, Xe.error);
        return;
      }
      ke(!pr(Xe), "Unhandled fetcher deferred data"), Wt(N, hr(Xe.data));
    }
  }
  async function ut(N, V, Q, ae) {
    let {
      submission: fe,
      fetcherSubmission: Ae,
      preventScrollReset: Ce,
      replace: he,
    } = ae === void 0 ? {} : ae;
    V.response.headers.has("X-Remix-Revalidate") && (ce = !0);
    let de = V.response.headers.get("Location");
    ke(de, "Expected a Location header on the redirect Response"),
      (de = m1(de, new URL(N.url), x));
    let ve = ho(T.location, de, { _isRedirect: !0 });
    if (r) {
      let Ne = !1;
      if (V.response.headers.has("X-Remix-Reload-Document")) Ne = !0;
      else if (Rh.test(de)) {
        const Qe = t.history.createURL(de);
        Ne = Qe.origin !== n.location.origin || Ao(Qe.pathname, x) == null;
      }
      if (Ne) {
        he ? n.location.replace(de) : n.location.assign(de);
        return;
      }
    }
    O = null;
    let Ee =
        he === !0 || V.response.headers.has("X-Remix-Replace")
          ? Dt.Replace
          : Dt.Push,
      { formMethod: _e, formAction: Ue, formEncType: bt } = T.navigation;
    !fe && !Ae && _e && Ue && bt && (fe = S1(T.navigation));
    let Xe = fe || Ae;
    if (T8.has(V.response.status) && Xe && ei(Xe.formMethod))
      await Et(Ee, ve, {
        submission: ot({}, Xe, { formAction: de }),
        preventScrollReset: Ce || q,
        enableViewTransition: Q ? j : void 0,
      });
    else {
      let Ne = Df(ve, fe);
      await Et(Ee, ve, {
        overrideNavigation: Ne,
        fetcherSubmission: Ae,
        preventScrollReset: Ce || q,
        enableViewTransition: Q ? j : void 0,
      });
    }
  }
  async function ai(N, V, Q, ae, fe, Ae) {
    let Ce,
      he = {};
    try {
      Ce = await U8(h, N, V, Q, ae, fe, Ae, c, l);
    } catch (de) {
      return (
        ae.forEach((ve) => {
          he[ve.route.id] = { type: We.error, error: de };
        }),
        he
      );
    }
    for (let [de, ve] of Object.entries(Ce))
      if (q8(ve)) {
        let Ee = ve.result;
        he[de] = {
          type: We.redirect,
          response: H8(Ee, Q, de, fe, x, v.v7_relativeSplatPath),
        };
      } else he[de] = await N8(ve);
    return he;
  }
  async function An(N, V, Q, ae, fe) {
    let Ae = N.matches,
      Ce = ai("loader", N, fe, Q, V, null),
      he = Promise.all(
        ae.map(async (Ee) => {
          if (Ee.matches && Ee.match && Ee.controller) {
            let Ue = (
              await ai(
                "loader",
                N,
                qa(t.history, Ee.path, Ee.controller.signal),
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
                error: on(404, { pathname: Ee.path }),
              },
            });
        }),
      ),
      de = await Ce,
      ve = (await he).reduce((Ee, _e) => Object.assign(Ee, _e), {});
    return (
      await Promise.all([
        Y8(V, de, fe.signal, Ae, N.loaderData),
        X8(V, ve, ae),
      ]),
      { loaderResults: de, fetcherResults: ve }
    );
  }
  function Sn() {
    (ce = !0),
      ee.push(...Yn()),
      K.forEach((N, V) => {
        ie.has(V) && oe.add(V), Yt(V);
      });
  }
  function Wt(N, V, Q) {
    Q === void 0 && (Q = {}),
      T.fetchers.set(N, V),
      et(
        { fetchers: new Map(T.fetchers) },
        { flushSync: (Q && Q.flushSync) === !0 },
      );
  }
  function tn(N, V, Q, ae) {
    ae === void 0 && (ae = {});
    let fe = Wr(T.matches, V);
    fn(N),
      et(
        { errors: { [fe.route.id]: Q }, fetchers: new Map(T.fetchers) },
        { flushSync: (ae && ae.flushSync) === !0 },
      );
  }
  function qi(N) {
    return (
      P.set(N, (P.get(N) || 0) + 1),
      pe.has(N) && pe.delete(N),
      T.fetchers.get(N) || _8
    );
  }
  function fn(N) {
    let V = T.fetchers.get(N);
    ie.has(N) && !(V && V.state === "loading" && z.has(N)) && Yt(N),
      K.delete(N),
      z.delete(N),
      X.delete(N),
      v.v7_fetcherPersist && pe.delete(N),
      oe.delete(N),
      T.fetchers.delete(N);
  }
  function mi(N) {
    let V = (P.get(N) || 0) - 1;
    V <= 0
      ? (P.delete(N), pe.add(N), v.v7_fetcherPersist || fn(N))
      : P.set(N, V),
      et({ fetchers: new Map(T.fetchers) });
  }
  function Yt(N) {
    let V = ie.get(N);
    V && (V.abort(), ie.delete(N));
  }
  function Rt(N) {
    for (let V of N) {
      let Q = qi(V),
        ae = hr(Q.data);
      T.fetchers.set(V, ae);
    }
  }
  function Ar() {
    let N = [],
      V = !1;
    for (let Q of X) {
      let ae = T.fetchers.get(Q);
      ke(ae, "Expected fetcher: " + Q),
        ae.state === "loading" && (X.delete(Q), N.push(Q), (V = !0));
    }
    return Rt(N), V;
  }
  function hn(N) {
    let V = [];
    for (let [Q, ae] of z)
      if (ae < N) {
        let fe = T.fetchers.get(Q);
        ke(fe, "Expected fetcher: " + Q),
          fe.state === "loading" && (Yt(Q), z.delete(Q), V.push(Q));
      }
    return Rt(V), V.length > 0;
  }
  function Nt(N, V) {
    let Q = T.blockers.get(N) || Js;
    return Me.get(N) !== V && Me.set(N, V), Q;
  }
  function Sr(N) {
    T.blockers.delete(N), Me.delete(N);
  }
  function ji(N, V) {
    let Q = T.blockers.get(N) || Js;
    ke(
      (Q.state === "unblocked" && V.state === "blocked") ||
        (Q.state === "blocked" && V.state === "blocked") ||
        (Q.state === "blocked" && V.state === "proceeding") ||
        (Q.state === "blocked" && V.state === "unblocked") ||
        (Q.state === "proceeding" && V.state === "unblocked"),
      "Invalid blocker state transition: " + Q.state + " -> " + V.state,
    );
    let ae = new Map(T.blockers);
    ae.set(N, V), et({ blockers: ae });
  }
  function Cr(N) {
    let { currentLocation: V, nextLocation: Q, historyAction: ae } = N;
    if (Me.size === 0) return;
    Me.size > 1 && ra(!1, "A router only supports one blocker at a time");
    let fe = Array.from(Me.entries()),
      [Ae, Ce] = fe[fe.length - 1],
      he = T.blockers.get(Ae);
    if (
      !(he && he.state === "proceeding") &&
      Ce({ currentLocation: V, nextLocation: Q, historyAction: ae })
    )
      return Ae;
  }
  function si(N) {
    let V = on(404, { pathname: N }),
      Q = p || f,
      { matches: ae, route: fe } = b1(Q);
    return Yn(), { notFoundMatches: ae, route: fe, error: V };
  }
  function Yn(N) {
    let V = [];
    return (
      xe.forEach((Q, ae) => {
        (!N || N(ae)) && (Q.cancel(), V.push(ae), xe.delete(ae));
      }),
      V
    );
  }
  function Xn(N, V, Q) {
    if (((b = N), (A = V), (S = Q || null), !R && T.navigation === Cf)) {
      R = !0;
      let ae = Dr(T.location, T.matches);
      ae != null && et({ restoreScrollPosition: ae });
    }
    return () => {
      (b = null), (A = null), (S = null);
    };
  }
  function vi(N, V) {
    return (
      (S &&
        S(
          N,
          V.map((ae) => r8(ae, T.loaderData)),
        )) ||
      N.key
    );
  }
  function yi(N, V) {
    if (b && A) {
      let Q = vi(N, V);
      b[Q] = A();
    }
  }
  function Dr(N, V) {
    if (b) {
      let Q = vi(N, V),
        ae = b[Q];
      if (typeof ae == "number") return ae;
    }
    return null;
  }
  function gi(N, V, Q) {
    if (m)
      if (N) {
        if (Object.keys(N[0].params).length > 0)
          return { active: !0, matches: Xl(V, Q, x, !0) };
      } else return { active: !0, matches: Xl(V, Q, x, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Ei(N, V, Q, ae) {
    if (!m) return { type: "success", matches: N };
    let fe = N;
    for (;;) {
      let Ae = p == null,
        Ce = p || f,
        he = c;
      try {
        await m({
          signal: Q,
          path: V,
          matches: fe,
          fetcherKey: ae,
          patch: (Ee, _e) => {
            Q.aborted || x1(Ee, _e, Ce, he, l);
          },
        });
      } catch (Ee) {
        return { type: "error", error: Ee, partialMatches: fe };
      } finally {
        Ae && !Q.aborted && (f = [...f]);
      }
      if (Q.aborted) return { type: "aborted" };
      let de = Zr(Ce, V, x);
      if (de) return { type: "success", matches: de };
      let ve = Xl(Ce, V, x, !0);
      if (
        !ve ||
        (fe.length === ve.length &&
          fe.every((Ee, _e) => Ee.route.id === ve[_e].route.id))
      )
        return { type: "success", matches: null };
      fe = ve;
    }
  }
  function Pi(N) {
    (c = {}), (p = Vu(N, l, void 0, c));
  }
  function bi(N, V) {
    let Q = p == null;
    x1(N, V, p || f, c, l), Q && ((f = [...f]), et({}));
  }
  return (
    (L = {
      get basename() {
        return x;
      },
      get future() {
        return v;
      },
      get state() {
        return T;
      },
      get routes() {
        return f;
      },
      get window() {
        return n;
      },
      initialize: $e,
      subscribe: jt,
      enableScrollRestoration: Xn,
      navigate: vt,
      fetch: zt,
      revalidate: jn,
      createHref: (N) => t.history.createHref(N),
      encodeLocation: (N) => t.history.encodeLocation(N),
      getFetcher: qi,
      deleteFetcher: mi,
      dispose: Ye,
      getBlocker: Nt,
      deleteBlocker: Sr,
      patchRoutes: bi,
      _internalFetchControllers: ie,
      _internalActiveDeferreds: xe,
      _internalSetRoutes: Pi,
    }),
    L
  );
}
function O8(t) {
  return (
    t != null &&
    (("formData" in t && t.formData != null) ||
      ("body" in t && t.body !== void 0))
  );
}
function Qf(t, n, r, s, l, c, f, p) {
  let x, h;
  if (f) {
    x = [];
    for (let v of n)
      if ((x.push(v), v.route.id === f)) {
        h = v;
        break;
      }
  } else (x = n), (h = n[n.length - 1]);
  let m = Jy(l || ".", $y(x, c), Ao(t.pathname, r) || t.pathname, p === "path");
  if (
    (l == null && ((m.search = t.search), (m.hash = t.hash)),
    (l == null || l === "" || l === ".") && h)
  ) {
    let v = Oh(m.search);
    if (h.route.index && !v)
      m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index";
    else if (!h.route.index && v) {
      let y = new URLSearchParams(m.search),
        g = y.getAll("index");
      y.delete("index"),
        g.filter((S) => S).forEach((S) => y.append("index", S));
      let b = y.toString();
      m.search = b ? "?" + b : "";
    }
  }
  return (
    s &&
      r !== "/" &&
      (m.pathname = m.pathname === "/" ? r : xr([r, m.pathname])),
    bo(m)
  );
}
function f1(t, n, r, s) {
  if (!s || !O8(s)) return { path: r };
  if (s.formMethod && !P8(s.formMethod))
    return { path: r, error: on(405, { method: s.formMethod }) };
  let l = () => ({ path: r, error: on(400, { type: "invalid-body" }) }),
    c = s.formMethod || "get",
    f = t ? c.toUpperCase() : c.toLowerCase(),
    p = ig(r);
  if (s.body !== void 0) {
    if (s.formEncType === "text/plain") {
      if (!ei(f)) return l();
      let y =
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
        path: r,
        submission: {
          formMethod: f,
          formAction: p,
          formEncType: s.formEncType,
          formData: void 0,
          json: void 0,
          text: y,
        },
      };
    } else if (s.formEncType === "application/json") {
      if (!ei(f)) return l();
      try {
        let y = typeof s.body == "string" ? JSON.parse(s.body) : s.body;
        return {
          path: r,
          submission: {
            formMethod: f,
            formAction: p,
            formEncType: s.formEncType,
            formData: void 0,
            json: y,
            text: void 0,
          },
        };
      } catch (y) {
        return l();
      }
    }
  }
  ke(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let x, h;
  if (s.formData) (x = Wf(s.formData)), (h = s.formData);
  else if (s.body instanceof FormData) (x = Wf(s.body)), (h = s.body);
  else if (s.body instanceof URLSearchParams) (x = s.body), (h = v1(x));
  else if (s.body == null) (x = new URLSearchParams()), (h = new FormData());
  else
    try {
      (x = new URLSearchParams(s.body)), (h = v1(x));
    } catch (y) {
      return l();
    }
  let m = {
    formMethod: f,
    formAction: p,
    formEncType: (s && s.formEncType) || "application/x-www-form-urlencoded",
    formData: h,
    json: void 0,
    text: void 0,
  };
  if (ei(m.formMethod)) return { path: r, submission: m };
  let v = gr(r);
  return (
    n && v.search && Oh(v.search) && x.append("index", ""),
    (v.search = "?" + x),
    { path: bo(v), submission: m }
  );
}
function h1(t, n, r) {
  r === void 0 && (r = !1);
  let s = t.findIndex((l) => l.route.id === n);
  return s >= 0 ? t.slice(0, r ? s + 1 : s) : t;
}
function d1(t, n, r, s, l, c, f, p, x, h, m, v, y, g, b, S) {
  let A = S ? (gn(S[1]) ? S[1].error : S[1].data) : void 0,
    R = t.createURL(n.location),
    C = t.createURL(l),
    D = r;
  c && n.errors
    ? (D = h1(r, Object.keys(n.errors)[0], !0))
    : S && gn(S[1]) && (D = h1(r, S[0]));
  let _ = S ? S[1].statusCode : void 0,
    w = f && _ && _ >= 400,
    L = D.filter((U, q) => {
      let { route: O } = U;
      if (O.lazy) return !0;
      if (O.loader == null) return !1;
      if (c) return Zf(O, n.loaderData, n.errors);
      if (M8(n.loaderData, n.matches[q], U) || x.some((I) => I === U.route.id))
        return !0;
      let j = n.matches[q],
        $ = U;
      return p1(
        U,
        ot(
          {
            currentUrl: R,
            currentParams: j.params,
            nextUrl: C,
            nextParams: $.params,
          },
          s,
          {
            actionResult: A,
            actionStatus: _,
            defaultShouldRevalidate: w
              ? !1
              : p ||
                R.pathname + R.search === C.pathname + C.search ||
                R.search !== C.search ||
                tg(j, $),
          },
        ),
      );
    }),
    T = [];
  return (
    v.forEach((U, q) => {
      if (c || !r.some((le) => le.route.id === U.routeId) || m.has(q)) return;
      let O = Zr(g, U.path, b);
      if (!O) {
        T.push({
          key: q,
          routeId: U.routeId,
          path: U.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let j = n.fetchers.get(q),
        $ = ro(O, U.path),
        I = !1;
      y.has(q)
        ? (I = !1)
        : h.has(q)
          ? (h.delete(q), (I = !0))
          : j && j.state !== "idle" && j.data === void 0
            ? (I = p)
            : (I = p1(
                $,
                ot(
                  {
                    currentUrl: R,
                    currentParams: n.matches[n.matches.length - 1].params,
                    nextUrl: C,
                    nextParams: r[r.length - 1].params,
                  },
                  s,
                  {
                    actionResult: A,
                    actionStatus: _,
                    defaultShouldRevalidate: w ? !1 : p,
                  },
                ),
              )),
        I &&
          T.push({
            key: q,
            routeId: U.routeId,
            path: U.path,
            matches: O,
            match: $,
            controller: new AbortController(),
          });
    }),
    [L, T]
  );
}
function Zf(t, n, r) {
  if (t.lazy) return !0;
  if (!t.loader) return !1;
  let s = n != null && n[t.id] !== void 0,
    l = r != null && r[t.id] !== void 0;
  return !s && l
    ? !1
    : typeof t.loader == "function" && t.loader.hydrate === !0
      ? !0
      : !s && !l;
}
function M8(t, n, r) {
  let s = !n || r.route.id !== n.route.id,
    l = t[r.route.id] === void 0;
  return s || l;
}
function tg(t, n) {
  let r = t.route.path;
  return (
    t.pathname !== n.pathname ||
    (r != null && r.endsWith("*") && t.params["*"] !== n.params["*"])
  );
}
function p1(t, n) {
  if (t.route.shouldRevalidate) {
    let r = t.route.shouldRevalidate(n);
    if (typeof r == "boolean") return r;
  }
  return n.defaultShouldRevalidate;
}
function x1(t, n, r, s, l) {
  var c;
  let f;
  if (t) {
    let h = s[t];
    ke(h, "No route found to patch children into: routeId = " + t),
      h.children || (h.children = []),
      (f = h.children);
  } else f = r;
  let p = n.filter((h) => !f.some((m) => ng(h, m))),
    x = Vu(
      p,
      l,
      [t || "_", "patch", String(((c = f) == null ? void 0 : c.length) || "0")],
      s,
    );
  f.push(...x);
}
function ng(t, n) {
  return "id" in t && "id" in n && t.id === n.id
    ? !0
    : t.index === n.index &&
        t.path === n.path &&
        t.caseSensitive === n.caseSensitive
      ? (!t.children || t.children.length === 0) &&
        (!n.children || n.children.length === 0)
        ? !0
        : t.children.every((r, s) => {
            var l;
            return (l = n.children) == null ? void 0 : l.some((c) => ng(r, c));
          })
      : !1;
}
async function F8(t, n, r) {
  if (!t.lazy) return;
  let s = await t.lazy();
  if (!t.lazy) return;
  let l = r[t.id];
  ke(l, "No route found in manifest");
  let c = {};
  for (let f in s) {
    let x = l[f] !== void 0 && f !== "hasErrorBoundary";
    ra(
      !x,
      'Route "' +
        l.id +
        '" has a static property "' +
        f +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + f + '" will be ignored.'),
    ),
      !x && !n8.has(f) && (c[f] = s[f]);
  }
  Object.assign(l, c), Object.assign(l, ot({}, n(l), { lazy: void 0 }));
}
async function L8(t) {
  let { matches: n } = t,
    r = n.filter((l) => l.shouldLoad);
  return (await Promise.all(r.map((l) => l.resolve()))).reduce(
    (l, c, f) => Object.assign(l, { [r[f].route.id]: c }),
    {},
  );
}
async function U8(t, n, r, s, l, c, f, p, x, h) {
  let m = c.map((g) => (g.route.lazy ? F8(g.route, x, p) : void 0)),
    v = c.map((g, b) => {
      let S = m[b],
        A = l.some((C) => C.route.id === g.route.id);
      return ot({}, g, {
        shouldLoad: A,
        resolve: async (C) => (
          C &&
            s.method === "GET" &&
            (g.route.lazy || g.route.loader) &&
            (A = !0),
          A
            ? z8(n, s, g, S, C, h)
            : Promise.resolve({ type: We.data, result: void 0 })
        ),
      });
    }),
    y = await t({
      matches: v,
      request: s,
      params: c[0].params,
      fetcherKey: f,
      context: h,
    });
  try {
    await Promise.all(m);
  } catch (g) {}
  return y;
}
async function z8(t, n, r, s, l, c) {
  let f,
    p,
    x = (h) => {
      let m,
        v = new Promise((b, S) => (m = S));
      (p = () => m()), n.signal.addEventListener("abort", p);
      let y = (b) =>
          typeof h != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + t + '" [routeId: ' + r.route.id + "]"),
                ),
              )
            : h(
                { request: n, params: r.params, context: c },
                ...(b !== void 0 ? [b] : []),
              ),
        g = (async () => {
          try {
            return { type: "data", result: await (l ? l((S) => y(S)) : y()) };
          } catch (b) {
            return { type: "error", result: b };
          }
        })();
      return Promise.race([g, v]);
    };
  try {
    let h = r.route[t];
    if (s)
      if (h) {
        let m,
          [v] = await Promise.all([
            x(h).catch((y) => {
              m = y;
            }),
            s,
          ]);
        if (m !== void 0) throw m;
        f = v;
      } else if ((await s, (h = r.route[t]), h)) f = await x(h);
      else if (t === "action") {
        let m = new URL(n.url),
          v = m.pathname + m.search;
        throw on(405, { method: n.method, pathname: v, routeId: r.route.id });
      } else return { type: We.data, result: void 0 };
    else if (h) f = await x(h);
    else {
      let m = new URL(n.url),
        v = m.pathname + m.search;
      throw on(404, { pathname: v });
    }
    ke(
      f.result !== void 0,
      "You defined " +
        (t === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          r.route.id +
          "\" but didn't return anything from your `" +
          t +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (h) {
    return { type: We.error, result: h };
  } finally {
    p && n.signal.removeEventListener("abort", p);
  }
  return f;
}
async function N8(t) {
  let { result: n, type: r } = t;
  if (rg(n)) {
    let v;
    try {
      let y = n.headers.get("Content-Type");
      y && /\bapplication\/json\b/.test(y)
        ? n.body == null
          ? (v = null)
          : (v = await n.json())
        : (v = await n.text());
    } catch (y) {
      return { type: We.error, error: y };
    }
    return r === We.error
      ? {
          type: We.error,
          error: new ku(n.status, n.statusText, v),
          statusCode: n.status,
          headers: n.headers,
        }
      : { type: We.data, data: v, statusCode: n.status, headers: n.headers };
  }
  if (r === We.error) {
    if (A1(n)) {
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
        error: new ku(
          ((s = n.init) == null ? void 0 : s.status) || 500,
          void 0,
          n.data,
        ),
        statusCode: po(n) ? n.status : void 0,
        headers:
          (l = n.init) != null && l.headers
            ? new Headers(n.init.headers)
            : void 0,
      };
    }
    return { type: We.error, error: n, statusCode: po(n) ? n.status : void 0 };
  }
  if (j8(n)) {
    var p, x;
    return {
      type: We.deferred,
      deferredData: n,
      statusCode: (p = n.init) == null ? void 0 : p.status,
      headers:
        ((x = n.init) == null ? void 0 : x.headers) &&
        new Headers(n.init.headers),
    };
  }
  if (A1(n)) {
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
function H8(t, n, r, s, l, c) {
  let f = t.headers.get("Location");
  if (
    (ke(
      f,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !Rh.test(f))
  ) {
    let p = s.slice(0, s.findIndex((x) => x.route.id === r) + 1);
    (f = Qf(new URL(n.url), p, l, !0, f, c)), t.headers.set("Location", f);
  }
  return t;
}
function m1(t, n, r) {
  if (Rh.test(t)) {
    let s = t,
      l = s.startsWith("//") ? new URL(n.protocol + s) : new URL(s),
      c = Ao(l.pathname, r) != null;
    if (l.origin === n.origin && c) return l.pathname + l.search + l.hash;
  }
  return t;
}
function qa(t, n, r, s) {
  let l = t.createURL(ig(n)).toString(),
    c = { signal: r };
  if (s && ei(s.formMethod)) {
    let { formMethod: f, formEncType: p } = s;
    (c.method = f.toUpperCase()),
      p === "application/json"
        ? ((c.headers = new Headers({ "Content-Type": p })),
          (c.body = JSON.stringify(s.json)))
        : p === "text/plain"
          ? (c.body = s.text)
          : p === "application/x-www-form-urlencoded" && s.formData
            ? (c.body = Wf(s.formData))
            : (c.body = s.formData);
  }
  return new Request(l, c);
}
function Wf(t) {
  let n = new URLSearchParams();
  for (let [r, s] of t.entries())
    n.append(r, typeof s == "string" ? s : s.name);
  return n;
}
function v1(t) {
  let n = new FormData();
  for (let [r, s] of t.entries()) n.append(r, s);
  return n;
}
function V8(t, n, r, s, l) {
  let c = {},
    f = null,
    p,
    x = !1,
    h = {},
    m = r && gn(r[1]) ? r[1].error : void 0;
  return (
    t.forEach((v) => {
      if (!(v.route.id in n)) return;
      let y = v.route.id,
        g = n[y];
      if (
        (ke(!$r(g), "Cannot handle redirect results in processLoaderData"),
        gn(g))
      ) {
        let b = g.error;
        m !== void 0 && ((b = m), (m = void 0)), (f = f || {});
        {
          let S = Wr(t, y);
          f[S.route.id] == null && (f[S.route.id] = b);
        }
        (c[y] = void 0),
          x || ((x = !0), (p = po(g.error) ? g.error.status : 500)),
          g.headers && (h[y] = g.headers);
      } else
        pr(g)
          ? (s.set(y, g.deferredData),
            (c[y] = g.deferredData.data),
            g.statusCode != null &&
              g.statusCode !== 200 &&
              !x &&
              (p = g.statusCode),
            g.headers && (h[y] = g.headers))
          : ((c[y] = g.data),
            g.statusCode && g.statusCode !== 200 && !x && (p = g.statusCode),
            g.headers && (h[y] = g.headers));
    }),
    m !== void 0 && r && ((f = { [r[0]]: m }), (c[r[0]] = void 0)),
    { loaderData: c, errors: f, statusCode: p || 200, loaderHeaders: h }
  );
}
function y1(t, n, r, s, l, c, f) {
  let { loaderData: p, errors: x } = V8(n, r, s, f);
  return (
    l.forEach((h) => {
      let { key: m, match: v, controller: y } = h,
        g = c[m];
      if (
        (ke(g, "Did not find corresponding fetcher result"),
        !(y && y.signal.aborted))
      )
        if (gn(g)) {
          let b = Wr(t.matches, v == null ? void 0 : v.route.id);
          (x && x[b.route.id]) || (x = ot({}, x, { [b.route.id]: g.error })),
            t.fetchers.delete(m);
        } else if ($r(g)) ke(!1, "Unhandled fetcher revalidation redirect");
        else if (pr(g)) ke(!1, "Unhandled fetcher deferred data");
        else {
          let b = hr(g.data);
          t.fetchers.set(m, b);
        }
    }),
    { loaderData: p, errors: x }
  );
}
function g1(t, n, r, s) {
  let l = ot({}, n);
  for (let c of r) {
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
function E1(t) {
  return t
    ? gn(t[1])
      ? { actionData: {} }
      : { actionData: { [t[0]]: t[1].data } }
    : {};
}
function Wr(t, n) {
  return (
    (n ? t.slice(0, t.findIndex((s) => s.route.id === n) + 1) : [...t])
      .reverse()
      .find((s) => s.route.hasErrorBoundary === !0) || t[0]
  );
}
function b1(t) {
  let n =
    t.length === 1
      ? t[0]
      : t.find((r) => r.index || !r.path || r.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: n }],
    route: n,
  };
}
function on(t, n) {
  let {
      pathname: r,
      routeId: s,
      method: l,
      type: c,
      message: f,
    } = n === void 0 ? {} : n,
    p = "Unknown Server Error",
    x = "Unknown @remix-run/router error";
  return (
    t === 400
      ? ((p = "Bad Request"),
        l && r && s
          ? (x =
              "You made a " +
              l +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide a `loader` for route "' + s + '", ') +
              "so there is no way to handle the request.")
          : c === "defer-action"
            ? (x = "defer() is not supported in actions")
            : c === "invalid-body" && (x = "Unable to encode submission body"))
      : t === 403
        ? ((p = "Forbidden"),
          (x = 'Route "' + s + '" does not match URL "' + r + '"'))
        : t === 404
          ? ((p = "Not Found"), (x = 'No route matches URL "' + r + '"'))
          : t === 405 &&
            ((p = "Method Not Allowed"),
            l && r && s
              ? (x =
                  "You made a " +
                  l.toUpperCase() +
                  ' request to "' +
                  r +
                  '" but ' +
                  ('did not provide an `action` for route "' + s + '", ') +
                  "so there is no way to handle the request.")
              : l && (x = 'Invalid request method "' + l.toUpperCase() + '"')),
    new ku(t || 500, p, new Error(x), !0)
  );
}
function Nl(t) {
  let n = Object.entries(t);
  for (let r = n.length - 1; r >= 0; r--) {
    let [s, l] = n[r];
    if ($r(l)) return { key: s, result: l };
  }
}
function ig(t) {
  let n = typeof t == "string" ? gr(t) : t;
  return bo(ot({}, n, { hash: "" }));
}
function k8(t, n) {
  return t.pathname !== n.pathname || t.search !== n.search
    ? !1
    : t.hash === ""
      ? n.hash !== ""
      : t.hash === n.hash
        ? !0
        : n.hash !== "";
}
function q8(t) {
  return rg(t.result) && B8.has(t.result.status);
}
function pr(t) {
  return t.type === We.deferred;
}
function gn(t) {
  return t.type === We.error;
}
function $r(t) {
  return (t && t.type) === We.redirect;
}
function A1(t) {
  return (
    typeof t == "object" &&
    t != null &&
    "type" in t &&
    "data" in t &&
    "init" in t &&
    t.type === "DataWithResponseInit"
  );
}
function j8(t) {
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
function rg(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.headers == "object" &&
    typeof t.body != "undefined"
  );
}
function P8(t) {
  return D8.has(t.toLowerCase());
}
function ei(t) {
  return S8.has(t.toLowerCase());
}
async function Y8(t, n, r, s, l) {
  let c = Object.entries(n);
  for (let f = 0; f < c.length; f++) {
    let [p, x] = c[f],
      h = t.find((y) => (y == null ? void 0 : y.route.id) === p);
    if (!h) continue;
    let m = s.find((y) => y.route.id === h.route.id),
      v = m != null && !tg(m, h) && (l && l[h.route.id]) !== void 0;
    pr(x) &&
      v &&
      (await wh(x, r, !1).then((y) => {
        y && (n[p] = y);
      }));
  }
}
async function X8(t, n, r) {
  for (let s = 0; s < r.length; s++) {
    let { key: l, routeId: c, controller: f } = r[s],
      p = n[l];
    t.find((h) => (h == null ? void 0 : h.route.id) === c) &&
      pr(p) &&
      (ke(
        f,
        "Expected an AbortController for revalidating fetcher deferred result",
      ),
      await wh(p, f.signal, !0).then((h) => {
        h && (n[l] = h);
      }));
  }
}
async function wh(t, n, r) {
  if ((r === void 0 && (r = !1), !(await t.deferredData.resolveData(n)))) {
    if (r)
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
  let r = typeof n == "string" ? gr(n).search : n.search;
  if (t[t.length - 1].route.index && Oh(r || "")) return t[t.length - 1];
  let s = Wy(t);
  return s[s.length - 1];
}
function S1(t) {
  let {
    formMethod: n,
    formAction: r,
    formEncType: s,
    text: l,
    formData: c,
    json: f,
  } = t;
  if (!(!n || !r || !s)) {
    if (l != null)
      return {
        formMethod: n,
        formAction: r,
        formEncType: s,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (c != null)
      return {
        formMethod: n,
        formAction: r,
        formEncType: s,
        formData: c,
        json: void 0,
        text: void 0,
      };
    if (f !== void 0)
      return {
        formMethod: n,
        formAction: r,
        formEncType: s,
        formData: void 0,
        json: f,
        text: void 0,
      };
  }
}
function Df(t, n) {
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
function G8(t, n) {
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
function Is(t, n) {
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
function K8(t, n) {
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
function hr(t) {
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
function Q8(t, n) {
  try {
    let r = t.sessionStorage.getItem(eg);
    if (r) {
      let s = JSON.parse(r);
      for (let [l, c] of Object.entries(s || {}))
        c && Array.isArray(c) && n.set(l, new Set(c || []));
    }
  } catch (r) {}
}
function Z8(t, n) {
  if (n.size > 0) {
    let r = {};
    for (let [s, l] of n) r[s] = [...l];
    try {
      t.sessionStorage.setItem(eg, JSON.stringify(r));
    } catch (s) {
      ra(
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
 */ function qu() {
  return (
    (qu = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var s in r)
              Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
          }
          return t;
        }),
    qu.apply(this, arguments)
  );
}
const Wu = J.createContext(null),
  ag = J.createContext(null),
  $u = J.createContext(null),
  Mh = J.createContext(null),
  Ja = J.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  sg = J.createContext(null);
function Ju() {
  return J.useContext(Mh) != null;
}
function og() {
  return Ju() || ke(!1), J.useContext(Mh).location;
}
function lg(t) {
  J.useContext($u).static || J.useLayoutEffect(t);
}
function VT() {
  let { isDataRoute: t } = J.useContext(Ja);
  return t ? sA() : W8();
}
function W8() {
  Ju() || ke(!1);
  let t = J.useContext(Wu),
    { basename: n, future: r, navigator: s } = J.useContext($u),
    { matches: l } = J.useContext(Ja),
    { pathname: c } = og(),
    f = JSON.stringify($y(l, r.v7_relativeSplatPath)),
    p = J.useRef(!1);
  return (
    lg(() => {
      p.current = !0;
    }),
    J.useCallback(
      function (h, m) {
        if ((m === void 0 && (m = {}), !p.current)) return;
        if (typeof h == "number") {
          s.go(h);
          return;
        }
        let v = Jy(h, JSON.parse(f), c, m.relative === "path");
        t == null &&
          n !== "/" &&
          (v.pathname = v.pathname === "/" ? n : xr([n, v.pathname])),
          (m.replace ? s.replace : s.push)(v, m.state, m);
      },
      [n, s, f, c, t],
    )
  );
}
function kT(t, n) {
  return ug(t);
}
function ug(t, n, r, s) {
  Ju() || ke(!1);
  let { navigator: l } = J.useContext($u),
    { matches: c } = J.useContext(Ja),
    f = c[c.length - 1],
    p = f ? f.params : {};
  f && f.pathname;
  let x = f ? f.pathnameBase : "/";
  f && f.route;
  let h = og(),
    m;
  m = h;
  let v = m.pathname || "/",
    y = v;
  if (x !== "/") {
    let S = x.replace(/^\//, "").split("/");
    y = "/" + v.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let g = Zr(t, { pathname: y });
  return tA(
    g &&
      g.map((S) =>
        Object.assign({}, S, {
          params: Object.assign({}, p, S.params),
          pathname: xr([
            x,
            l.encodeLocation
              ? l.encodeLocation(S.pathname).pathname
              : S.pathname,
          ]),
          pathnameBase:
            S.pathnameBase === "/"
              ? x
              : xr([
                  x,
                  l.encodeLocation
                    ? l.encodeLocation(S.pathnameBase).pathname
                    : S.pathnameBase,
                ]),
        }),
      ),
    c,
    r,
    s,
  );
}
function $8() {
  let t = aA(),
    n = po(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
        ? t.message
        : JSON.stringify(t),
    r = t instanceof Error ? t.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return J.createElement(
    J.Fragment,
    null,
    J.createElement("h2", null, "Unexpected Application Error!"),
    J.createElement("h3", { style: { fontStyle: "italic" } }, n),
    r ? J.createElement("pre", { style: l }, r) : null,
    null,
  );
}
const J8 = J.createElement($8, null);
class I8 extends J.Component {
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
  static getDerivedStateFromProps(n, r) {
    return r.location !== n.location ||
      (r.revalidation !== "idle" && n.revalidation === "idle")
      ? { error: n.error, location: n.location, revalidation: n.revalidation }
      : {
          error: n.error !== void 0 ? n.error : r.error,
          location: r.location,
          revalidation: n.revalidation || r.revalidation,
        };
  }
  componentDidCatch(n, r) {
    console.error(
      "React Router caught the following error during render",
      n,
      r,
    );
  }
  render() {
    return this.state.error !== void 0
      ? J.createElement(
          Ja.Provider,
          { value: this.props.routeContext },
          J.createElement(sg.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function eA(t) {
  let { routeContext: n, match: r, children: s } = t,
    l = J.useContext(Wu);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = r.route.id),
    J.createElement(Ja.Provider, { value: n }, s)
  );
}
function tA(t, n, r, s) {
  var l;
  if (
    (n === void 0 && (n = []),
    r === void 0 && (r = null),
    s === void 0 && (s = null),
    t == null)
  ) {
    var c;
    if (!r) return null;
    if (r.errors) t = r.matches;
    else if (
      (c = s) != null &&
      c.v7_partialHydration &&
      n.length === 0 &&
      !r.initialized &&
      r.matches.length > 0
    )
      t = r.matches;
    else return null;
  }
  let f = t,
    p = (l = r) == null ? void 0 : l.errors;
  if (p != null) {
    let m = f.findIndex(
      (v) => v.route.id && (p == null ? void 0 : p[v.route.id]) !== void 0,
    );
    m >= 0 || ke(!1), (f = f.slice(0, Math.min(f.length, m + 1)));
  }
  let x = !1,
    h = -1;
  if (r && s && s.v7_partialHydration)
    for (let m = 0; m < f.length; m++) {
      let v = f[m];
      if (
        ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (h = m),
        v.route.id)
      ) {
        let { loaderData: y, errors: g } = r,
          b =
            v.route.loader &&
            y[v.route.id] === void 0 &&
            (!g || g[v.route.id] === void 0);
        if (v.route.lazy || b) {
          (x = !0), h >= 0 ? (f = f.slice(0, h + 1)) : (f = [f[0]]);
          break;
        }
      }
    }
  return f.reduceRight((m, v, y) => {
    let g,
      b = !1,
      S = null,
      A = null;
    r &&
      ((g = p && v.route.id ? p[v.route.id] : void 0),
      (S = v.route.errorElement || J8),
      x &&
        (h < 0 && y === 0
          ? (oA("route-fallback"), (b = !0), (A = null))
          : h === y &&
            ((b = !0), (A = v.route.hydrateFallbackElement || null))));
    let R = n.concat(f.slice(0, y + 1)),
      C = () => {
        let D;
        return (
          g
            ? (D = S)
            : b
              ? (D = A)
              : v.route.Component
                ? (D = J.createElement(v.route.Component, null))
                : v.route.element
                  ? (D = v.route.element)
                  : (D = m),
          J.createElement(eA, {
            match: v,
            routeContext: { outlet: m, matches: R, isDataRoute: r != null },
            children: D,
          })
        );
      };
    return r && (v.route.ErrorBoundary || v.route.errorElement || y === 0)
      ? J.createElement(I8, {
          location: r.location,
          revalidation: r.revalidation,
          component: S,
          error: g,
          children: C(),
          routeContext: { outlet: null, matches: R, isDataRoute: !0 },
        })
      : C();
  }, null);
}
var cg = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      t
    );
  })(cg || {}),
  fg = (function (t) {
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
  })(fg || {});
function nA(t) {
  let n = J.useContext(Wu);
  return n || ke(!1), n;
}
function iA(t) {
  let n = J.useContext(ag);
  return n || ke(!1), n;
}
function rA(t) {
  let n = J.useContext(Ja);
  return n || ke(!1), n;
}
function hg(t) {
  let n = rA(),
    r = n.matches[n.matches.length - 1];
  return r.route.id || ke(!1), r.route.id;
}
function aA() {
  var t;
  let n = J.useContext(sg),
    r = iA(fg.UseRouteError),
    s = hg();
  return n !== void 0 ? n : (t = r.errors) == null ? void 0 : t[s];
}
function sA() {
  let { router: t } = nA(cg.UseNavigateStable),
    n = hg(),
    r = J.useRef(!1);
  return (
    lg(() => {
      r.current = !0;
    }),
    J.useCallback(
      function (l, c) {
        c === void 0 && (c = {}),
          r.current &&
            (typeof l == "number"
              ? t.navigate(l)
              : t.navigate(l, qu({ fromRouteId: n }, c)));
      },
      [t, n],
    )
  );
}
const C1 = {};
function oA(t, n, r) {
  C1[t] || (C1[t] = !0);
}
function lA(t, n) {
  t == null || t.v7_startTransition,
    (t == null ? void 0 : t.v7_relativeSplatPath) === void 0 &&
      (!n || n.v7_relativeSplatPath),
    n &&
      (n.v7_fetcherPersist,
      n.v7_normalizeFormMethod,
      n.v7_partialHydration,
      n.v7_skipActionErrorRevalidation);
}
function uA(t) {
  let {
    basename: n = "/",
    children: r = null,
    location: s,
    navigationType: l = Dt.Pop,
    navigator: c,
    static: f = !1,
    future: p,
  } = t;
  Ju() && ke(!1);
  let x = n.replace(/^\/*/, "/"),
    h = J.useMemo(
      () => ({
        basename: x,
        navigator: c,
        static: f,
        future: qu({ v7_relativeSplatPath: !1 }, p),
      }),
      [x, p, c, f],
    );
  typeof s == "string" && (s = gr(s));
  let {
      pathname: m = "/",
      search: v = "",
      hash: y = "",
      state: g = null,
      key: b = "default",
    } = s,
    S = J.useMemo(() => {
      let A = Ao(m, x);
      return A == null
        ? null
        : {
            location: { pathname: A, search: v, hash: y, state: g, key: b },
            navigationType: l,
          };
    }, [x, m, v, y, g, b, l]);
  return S == null
    ? null
    : J.createElement(
        $u.Provider,
        { value: h },
        J.createElement(Mh.Provider, { children: r, value: S }),
      );
}
new Promise(() => {});
function cA(t) {
  let n = {
    hasErrorBoundary: t.ErrorBoundary != null || t.errorElement != null,
  };
  return (
    t.Component &&
      Object.assign(n, {
        element: J.createElement(t.Component),
        Component: void 0,
      }),
    t.HydrateFallback &&
      Object.assign(n, {
        hydrateFallbackElement: J.createElement(t.HydrateFallback),
        HydrateFallback: void 0,
      }),
    t.ErrorBoundary &&
      Object.assign(n, {
        errorElement: J.createElement(t.ErrorBoundary),
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
 */ function ju() {
  return (
    (ju = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var s in r)
              Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
          }
          return t;
        }),
    ju.apply(this, arguments)
  );
}
const fA = "6";
try {
  window.__reactRouterVersion = fA;
} catch (t) {}
function qT(t, n) {
  return w8({
    basename: n == null ? void 0 : n.basename,
    future: ju({}, n == null ? void 0 : n.future, { v7_prependBasename: !0 }),
    history: Ib({ window: n == null ? void 0 : n.window }),
    hydrationData: (n == null ? void 0 : n.hydrationData) || hA(),
    routes: t,
    mapRouteProperties: cA,
    dataStrategy: n == null ? void 0 : n.dataStrategy,
    patchRoutesOnNavigation: n == null ? void 0 : n.patchRoutesOnNavigation,
    window: n == null ? void 0 : n.window,
  }).initialize();
}
function hA() {
  var t;
  let n = (t = window) == null ? void 0 : t.__staticRouterHydrationData;
  return n && n.errors && (n = ju({}, n, { errors: dA(n.errors) })), n;
}
function dA(t) {
  if (!t) return null;
  let n = Object.entries(t),
    r = {};
  for (let [s, l] of n)
    if (l && l.__type === "RouteErrorResponse")
      r[s] = new ku(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let c = window[l.__subType];
        if (typeof c == "function")
          try {
            let f = new c(l.message);
            (f.stack = ""), (r[s] = f);
          } catch (f) {}
      }
      if (r[s] == null) {
        let c = new Error(l.message);
        (c.stack = ""), (r[s] = c);
      }
    } else r[s] = l;
  return r;
}
const pA = J.createContext({ isTransitioning: !1 }),
  xA = J.createContext(new Map()),
  mA = "startTransition",
  D1 = Yb[mA],
  vA = "flushSync",
  B1 = Jb[vA];
function yA(t) {
  D1 ? D1(t) : t();
}
function eo(t) {
  B1 ? B1(t) : t();
}
class gA {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((n, r) => {
        (this.resolve = (s) => {
          this.status === "pending" && ((this.status = "resolved"), n(s));
        }),
          (this.reject = (s) => {
            this.status === "pending" && ((this.status = "rejected"), r(s));
          });
      }));
  }
}
function jT(t) {
  let { fallbackElement: n, router: r, future: s } = t,
    [l, c] = J.useState(r.state),
    [f, p] = J.useState(),
    [x, h] = J.useState({ isTransitioning: !1 }),
    [m, v] = J.useState(),
    [y, g] = J.useState(),
    [b, S] = J.useState(),
    A = J.useRef(new Map()),
    { v7_startTransition: R } = s || {},
    C = J.useCallback(
      (U) => {
        R ? yA(U) : U();
      },
      [R],
    ),
    D = J.useCallback(
      (U, q) => {
        let { deletedFetchers: O, flushSync: j, viewTransitionOpts: $ } = q;
        U.fetchers.forEach((le, ce) => {
          le.data !== void 0 && A.current.set(ce, le.data);
        }),
          O.forEach((le) => A.current.delete(le));
        let I =
          r.window == null ||
          r.window.document == null ||
          typeof r.window.document.startViewTransition != "function";
        if (!$ || I) {
          j ? eo(() => c(U)) : C(() => c(U));
          return;
        }
        if (j) {
          eo(() => {
            y && (m && m.resolve(), y.skipTransition()),
              h({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: $.currentLocation,
                nextLocation: $.nextLocation,
              });
          });
          let le = r.window.document.startViewTransition(() => {
            eo(() => c(U));
          });
          le.finished.finally(() => {
            eo(() => {
              v(void 0), g(void 0), p(void 0), h({ isTransitioning: !1 });
            });
          }),
            eo(() => g(le));
          return;
        }
        y
          ? (m && m.resolve(),
            y.skipTransition(),
            S({
              state: U,
              currentLocation: $.currentLocation,
              nextLocation: $.nextLocation,
            }))
          : (p(U),
            h({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: $.currentLocation,
              nextLocation: $.nextLocation,
            }));
      },
      [r.window, y, m, A, C],
    );
  J.useLayoutEffect(() => r.subscribe(D), [r, D]),
    J.useEffect(() => {
      x.isTransitioning && !x.flushSync && v(new gA());
    }, [x]),
    J.useEffect(() => {
      if (m && f && r.window) {
        let U = f,
          q = m.promise,
          O = r.window.document.startViewTransition(async () => {
            C(() => c(U)), await q;
          });
        O.finished.finally(() => {
          v(void 0), g(void 0), p(void 0), h({ isTransitioning: !1 });
        }),
          g(O);
      }
    }, [C, f, m, r.window]),
    J.useEffect(() => {
      m && f && l.location.key === f.location.key && m.resolve();
    }, [m, y, l.location, f]),
    J.useEffect(() => {
      !x.isTransitioning &&
        b &&
        (p(b.state),
        h({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: b.currentLocation,
          nextLocation: b.nextLocation,
        }),
        S(void 0));
    }, [x.isTransitioning, b]),
    J.useEffect(() => {}, []);
  let _ = J.useMemo(
      () => ({
        createHref: r.createHref,
        encodeLocation: r.encodeLocation,
        go: (U) => r.navigate(U),
        push: (U, q, O) =>
          r.navigate(U, {
            state: q,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
        replace: (U, q, O) =>
          r.navigate(U, {
            replace: !0,
            state: q,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
      }),
      [r],
    ),
    w = r.basename || "/",
    L = J.useMemo(
      () => ({ router: r, navigator: _, static: !1, basename: w }),
      [r, _, w],
    ),
    T = J.useMemo(
      () => ({ v7_relativeSplatPath: r.future.v7_relativeSplatPath }),
      [r.future.v7_relativeSplatPath],
    );
  return (
    J.useEffect(() => lA(s, r.future), [s, r.future]),
    J.createElement(
      J.Fragment,
      null,
      J.createElement(
        Wu.Provider,
        { value: L },
        J.createElement(
          ag.Provider,
          { value: l },
          J.createElement(
            xA.Provider,
            { value: A.current },
            J.createElement(
              pA.Provider,
              { value: x },
              J.createElement(
                uA,
                {
                  basename: w,
                  location: l.location,
                  navigationType: l.historyAction,
                  navigator: _,
                  future: T,
                },
                l.initialized || r.future.v7_partialHydration
                  ? J.createElement(EA, {
                      routes: r.routes,
                      future: r.future,
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
const EA = J.memo(bA);
function bA(t) {
  let { routes: n, future: r, state: s } = t;
  return ug(n, void 0, s, r);
}
var T1;
(function (t) {
  (t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmit = "useSubmit"),
    (t.UseSubmitFetcher = "useSubmitFetcher"),
    (t.UseFetcher = "useFetcher"),
    (t.useViewTransitionState = "useViewTransitionState");
})(T1 || (T1 = {}));
var _1;
(function (t) {
  (t.UseFetcher = "useFetcher"),
    (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration");
})(_1 || (_1 = {}));
var Gl = { exports: {} };
function AA(t) {
  throw new Error(
    'Could not dynamically require "' +
      t +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
  );
}
var Kl = { exports: {} };
const SA = {},
  CA = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: SA },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  DA = Vb(CA);
var BA = Kl.exports,
  R1;
function qe() {
  return (
    R1 ||
      ((R1 = 1),
      (function (t, n) {
        (function (r, s) {
          t.exports = s();
        })(BA, function () {
          var r =
            r ||
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
                !c && typeof mf != "undefined" && mf.crypto && (c = mf.crypto),
                !c && typeof AA == "function")
              )
                try {
                  c = DA;
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
                p =
                  Object.create ||
                  (function () {
                    function C() {}
                    return function (D) {
                      var _;
                      return (
                        (C.prototype = D),
                        (_ = new C()),
                        (C.prototype = null),
                        _
                      );
                    };
                  })(),
                x = {},
                h = (x.lib = {}),
                m = (h.Base = (function () {
                  return {
                    extend: function (C) {
                      var D = p(this);
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
                v = (h.WordArray = m.extend({
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
                      _ = C.words,
                      w = this.sigBytes,
                      L = C.sigBytes;
                    if ((this.clamp(), w % 4))
                      for (var T = 0; T < L; T++) {
                        var U = (_[T >>> 2] >>> (24 - (T % 4) * 8)) & 255;
                        D[(w + T) >>> 2] |= U << (24 - ((w + T) % 4) * 8);
                      }
                    else
                      for (var q = 0; q < L; q += 4)
                        D[(w + q) >>> 2] = _[q >>> 2];
                    return (this.sigBytes += L), this;
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
                    for (var D = [], _ = 0; _ < C; _ += 4) D.push(f());
                    return new v.init(D, C);
                  },
                })),
                y = (x.enc = {}),
                g = (y.Hex = {
                  stringify: function (C) {
                    for (
                      var D = C.words, _ = C.sigBytes, w = [], L = 0;
                      L < _;
                      L++
                    ) {
                      var T = (D[L >>> 2] >>> (24 - (L % 4) * 8)) & 255;
                      w.push((T >>> 4).toString(16)),
                        w.push((T & 15).toString(16));
                    }
                    return w.join("");
                  },
                  parse: function (C) {
                    for (var D = C.length, _ = [], w = 0; w < D; w += 2)
                      _[w >>> 3] |=
                        parseInt(C.substr(w, 2), 16) << (24 - (w % 8) * 4);
                    return new v.init(_, D / 2);
                  },
                }),
                b = (y.Latin1 = {
                  stringify: function (C) {
                    for (
                      var D = C.words, _ = C.sigBytes, w = [], L = 0;
                      L < _;
                      L++
                    ) {
                      var T = (D[L >>> 2] >>> (24 - (L % 4) * 8)) & 255;
                      w.push(String.fromCharCode(T));
                    }
                    return w.join("");
                  },
                  parse: function (C) {
                    for (var D = C.length, _ = [], w = 0; w < D; w++)
                      _[w >>> 2] |=
                        (C.charCodeAt(w) & 255) << (24 - (w % 4) * 8);
                    return new v.init(_, D);
                  },
                }),
                S = (y.Utf8 = {
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
                    (this._data = new v.init()), (this._nDataBytes = 0);
                  },
                  _append: function (C) {
                    typeof C == "string" && (C = S.parse(C)),
                      this._data.concat(C),
                      (this._nDataBytes += C.sigBytes);
                  },
                  _process: function (C) {
                    var D,
                      _ = this._data,
                      w = _.words,
                      L = _.sigBytes,
                      T = this.blockSize,
                      U = T * 4,
                      q = L / U;
                    C
                      ? (q = s.ceil(q))
                      : (q = s.max((q | 0) - this._minBufferSize, 0));
                    var O = q * T,
                      j = s.min(O * 4, L);
                    if (O) {
                      for (var $ = 0; $ < O; $ += T) this._doProcessBlock(w, $);
                      (D = w.splice(0, O)), (_.sigBytes -= j);
                    }
                    return new v.init(D, j);
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
                  return function (D, _) {
                    return new C.init(_).finalize(D);
                  };
                },
                _createHmacHelper: function (C) {
                  return function (D, _) {
                    return new R.HMAC.init(C, _).finalize(D);
                  };
                },
              });
              var R = (x.algo = {});
              return x;
            })(Math);
          return r;
        });
      })(Kl)),
    Kl.exports
  );
}
var Ql = { exports: {} },
  TA = Ql.exports,
  w1;
function Iu() {
  return (
    w1 ||
      ((w1 = 1),
      (function (t, n) {
        (function (r, s) {
          t.exports = s(qe());
        })(TA, function (r) {
          return (
            (function (s) {
              var l = r,
                c = l.lib,
                f = c.Base,
                p = c.WordArray,
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
                      var h = this.words, m = h.length, v = [], y = 0;
                      y < m;
                      y++
                    ) {
                      var g = h[y];
                      v.push(g.high), v.push(g.low);
                    }
                    return p.create(v, this.sigBytes);
                  },
                  clone: function () {
                    for (
                      var h = f.clone.call(this),
                        m = (h.words = this.words.slice(0)),
                        v = m.length,
                        y = 0;
                      y < v;
                      y++
                    )
                      m[y] = m[y].clone();
                    return h;
                  },
                }));
            })(),
            r
          );
        });
      })(Ql)),
    Ql.exports
  );
}
var Zl = { exports: {} },
  _A = Zl.exports,
  O1;
function RA() {
  return (
    O1 ||
      ((O1 = 1),
      (function (t, n) {
        (function (r, s) {
          t.exports = s(qe());
        })(_A, function (r) {
          return (
            (function () {
              if (typeof ArrayBuffer == "function") {
                var s = r,
                  l = s.lib,
                  c = l.WordArray,
                  f = c.init,
                  p = (c.init = function (x) {
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
                      for (var h = x.byteLength, m = [], v = 0; v < h; v++)
                        m[v >>> 2] |= x[v] << (24 - (v % 4) * 8);
                      f.call(this, m, h);
                    } else f.apply(this, arguments);
                  });
                p.prototype = c;
              }
            })(),
            r.lib.WordArray
          );
        });
      })(Zl)),
    Zl.exports
  );
}
var Wl = { exports: {} },
  wA = Wl.exports,
  M1;
function OA() {
  return (
    M1 ||
      ((M1 = 1),
      (function (t, n) {
        (function (r, s) {
          t.exports = s(qe());
        })(wA, function (r) {
          return (
            (function () {
              var s = r,
                l = s.lib,
                c = l.WordArray,
                f = s.enc;
              (f.Utf16 = f.Utf16BE =
                {
                  stringify: function (x) {
                    for (
                      var h = x.words, m = x.sigBytes, v = [], y = 0;
                      y < m;
                      y += 2
                    ) {
                      var g = (h[y >>> 2] >>> (16 - (y % 4) * 8)) & 65535;
                      v.push(String.fromCharCode(g));
                    }
                    return v.join("");
                  },
                  parse: function (x) {
                    for (var h = x.length, m = [], v = 0; v < h; v++)
                      m[v >>> 1] |= x.charCodeAt(v) << (16 - (v % 2) * 16);
                    return c.create(m, h * 2);
                  },
                }),
                (f.Utf16LE = {
                  stringify: function (x) {
                    for (
                      var h = x.words, m = x.sigBytes, v = [], y = 0;
                      y < m;
                      y += 2
                    ) {
                      var g = p((h[y >>> 2] >>> (16 - (y % 4) * 8)) & 65535);
                      v.push(String.fromCharCode(g));
                    }
                    return v.join("");
                  },
                  parse: function (x) {
                    for (var h = x.length, m = [], v = 0; v < h; v++)
                      m[v >>> 1] |= p(x.charCodeAt(v) << (16 - (v % 2) * 16));
                    return c.create(m, h * 2);
                  },
                });
              function p(x) {
                return ((x << 8) & 4278255360) | ((x >>> 8) & 16711935);
              }
            })(),
            r.enc.Utf16
          );
        });
      })(Wl)),
    Wl.exports
  );
}
var $l = { exports: {} },
  MA = $l.exports,
  F1;
function sa() {
  return (
    F1 ||
      ((F1 = 1),
      (function (t, n) {
        (function (r, s) {
          t.exports = s(qe());
        })(MA, function (r) {
          return (
            (function () {
              var s = r,
                l = s.lib,
                c = l.WordArray,
                f = s.enc;
              f.Base64 = {
                stringify: function (x) {
                  var h = x.words,
                    m = x.sigBytes,
                    v = this._map;
                  x.clamp();
                  for (var y = [], g = 0; g < m; g += 3)
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
                      y.push(v.charAt((R >>> (6 * (3 - C))) & 63));
                  var D = v.charAt(64);
                  if (D) for (; y.length % 4; ) y.push(D);
                  return y.join("");
                },
                parse: function (x) {
                  var h = x.length,
                    m = this._map,
                    v = this._reverseMap;
                  if (!v) {
                    v = this._reverseMap = [];
                    for (var y = 0; y < m.length; y++) v[m.charCodeAt(y)] = y;
                  }
                  var g = m.charAt(64);
                  if (g) {
                    var b = x.indexOf(g);
                    b !== -1 && (h = b);
                  }
                  return p(x, h, v);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              };
              function p(x, h, m) {
                for (var v = [], y = 0, g = 0; g < h; g++)
                  if (g % 4) {
                    var b = m[x.charCodeAt(g - 1)] << ((g % 4) * 2),
                      S = m[x.charCodeAt(g)] >>> (6 - (g % 4) * 2),
                      A = b | S;
                    (v[y >>> 2] |= A << (24 - (y % 4) * 8)), y++;
                  }
                return c.create(v, y);
              }
            })(),
            r.enc.Base64
          );
        });
      })($l)),
    $l.exports
  );
}
var Jl = { exports: {} },
  FA = Jl.exports,
  L1;
function LA() {
  return (
    L1 ||
      ((L1 = 1),
      (function (t, n) {
        (function (r, s) {
          t.exports = s(qe());
        })(FA, function (r) {
          return (
            (function () {
              var s = r,
                l = s.lib,
                c = l.WordArray,
                f = s.enc;
              f.Base64url = {
                stringify: function (x, h) {
                  h === void 0 && (h = !0);
                  var m = x.words,
                    v = x.sigBytes,
                    y = h ? this._safe_map : this._map;
                  x.clamp();
                  for (var g = [], b = 0; b < v; b += 3)
                    for (
                      var S = (m[b >>> 2] >>> (24 - (b % 4) * 8)) & 255,
                        A =
                          (m[(b + 1) >>> 2] >>> (24 - ((b + 1) % 4) * 8)) & 255,
                        R =
                          (m[(b + 2) >>> 2] >>> (24 - ((b + 2) % 4) * 8)) & 255,
                        C = (S << 16) | (A << 8) | R,
                        D = 0;
                      D < 4 && b + D * 0.75 < v;
                      D++
                    )
                      g.push(y.charAt((C >>> (6 * (3 - D))) & 63));
                  var _ = y.charAt(64);
                  if (_) for (; g.length % 4; ) g.push(_);
                  return g.join("");
                },
                parse: function (x, h) {
                  h === void 0 && (h = !0);
                  var m = x.length,
                    v = h ? this._safe_map : this._map,
                    y = this._reverseMap;
                  if (!y) {
                    y = this._reverseMap = [];
                    for (var g = 0; g < v.length; g++) y[v.charCodeAt(g)] = g;
                  }
                  var b = v.charAt(64);
                  if (b) {
                    var S = x.indexOf(b);
                    S !== -1 && (m = S);
                  }
                  return p(x, m, y);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                _safe_map:
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
              };
              function p(x, h, m) {
                for (var v = [], y = 0, g = 0; g < h; g++)
                  if (g % 4) {
                    var b = m[x.charCodeAt(g - 1)] << ((g % 4) * 2),
                      S = m[x.charCodeAt(g)] >>> (6 - (g % 4) * 2),
                      A = b | S;
                    (v[y >>> 2] |= A << (24 - (y % 4) * 8)), y++;
                  }
                return c.create(v, y);
              }
            })(),
            r.enc.Base64url
          );
        });
      })(Jl)),
    Jl.exports
  );
}
var Il = { exports: {} },
  UA = Il.exports,
  U1;
function oa() {
  return (
    U1 ||
      ((U1 = 1),
      (function (t, n) {
        (function (r, s) {
          t.exports = s(qe());
        })(UA, function (r) {
          return (
            (function (s) {
              var l = r,
                c = l.lib,
                f = c.WordArray,
                p = c.Hasher,
                x = l.algo,
                h = [];
              (function () {
                for (var S = 0; S < 64; S++)
                  h[S] = (s.abs(s.sin(S + 1)) * 4294967296) | 0;
              })();
              var m = (x.MD5 = p.extend({
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
                  var _ = this._hash.words,
                    w = S[A + 0],
                    L = S[A + 1],
                    T = S[A + 2],
                    U = S[A + 3],
                    q = S[A + 4],
                    O = S[A + 5],
                    j = S[A + 6],
                    $ = S[A + 7],
                    I = S[A + 8],
                    le = S[A + 9],
                    ce = S[A + 10],
                    ee = S[A + 11],
                    oe = S[A + 12],
                    ie = S[A + 13],
                    ye = S[A + 14],
                    F = S[A + 15],
                    z = _[0],
                    X = _[1],
                    K = _[2],
                    P = _[3];
                  (z = v(z, X, K, P, w, 7, h[0])),
                    (P = v(P, z, X, K, L, 12, h[1])),
                    (K = v(K, P, z, X, T, 17, h[2])),
                    (X = v(X, K, P, z, U, 22, h[3])),
                    (z = v(z, X, K, P, q, 7, h[4])),
                    (P = v(P, z, X, K, O, 12, h[5])),
                    (K = v(K, P, z, X, j, 17, h[6])),
                    (X = v(X, K, P, z, $, 22, h[7])),
                    (z = v(z, X, K, P, I, 7, h[8])),
                    (P = v(P, z, X, K, le, 12, h[9])),
                    (K = v(K, P, z, X, ce, 17, h[10])),
                    (X = v(X, K, P, z, ee, 22, h[11])),
                    (z = v(z, X, K, P, oe, 7, h[12])),
                    (P = v(P, z, X, K, ie, 12, h[13])),
                    (K = v(K, P, z, X, ye, 17, h[14])),
                    (X = v(X, K, P, z, F, 22, h[15])),
                    (z = y(z, X, K, P, L, 5, h[16])),
                    (P = y(P, z, X, K, j, 9, h[17])),
                    (K = y(K, P, z, X, ee, 14, h[18])),
                    (X = y(X, K, P, z, w, 20, h[19])),
                    (z = y(z, X, K, P, O, 5, h[20])),
                    (P = y(P, z, X, K, ce, 9, h[21])),
                    (K = y(K, P, z, X, F, 14, h[22])),
                    (X = y(X, K, P, z, q, 20, h[23])),
                    (z = y(z, X, K, P, le, 5, h[24])),
                    (P = y(P, z, X, K, ye, 9, h[25])),
                    (K = y(K, P, z, X, U, 14, h[26])),
                    (X = y(X, K, P, z, I, 20, h[27])),
                    (z = y(z, X, K, P, ie, 5, h[28])),
                    (P = y(P, z, X, K, T, 9, h[29])),
                    (K = y(K, P, z, X, $, 14, h[30])),
                    (X = y(X, K, P, z, oe, 20, h[31])),
                    (z = g(z, X, K, P, O, 4, h[32])),
                    (P = g(P, z, X, K, I, 11, h[33])),
                    (K = g(K, P, z, X, ee, 16, h[34])),
                    (X = g(X, K, P, z, ye, 23, h[35])),
                    (z = g(z, X, K, P, L, 4, h[36])),
                    (P = g(P, z, X, K, q, 11, h[37])),
                    (K = g(K, P, z, X, $, 16, h[38])),
                    (X = g(X, K, P, z, ce, 23, h[39])),
                    (z = g(z, X, K, P, ie, 4, h[40])),
                    (P = g(P, z, X, K, w, 11, h[41])),
                    (K = g(K, P, z, X, U, 16, h[42])),
                    (X = g(X, K, P, z, j, 23, h[43])),
                    (z = g(z, X, K, P, le, 4, h[44])),
                    (P = g(P, z, X, K, oe, 11, h[45])),
                    (K = g(K, P, z, X, F, 16, h[46])),
                    (X = g(X, K, P, z, T, 23, h[47])),
                    (z = b(z, X, K, P, w, 6, h[48])),
                    (P = b(P, z, X, K, $, 10, h[49])),
                    (K = b(K, P, z, X, ye, 15, h[50])),
                    (X = b(X, K, P, z, O, 21, h[51])),
                    (z = b(z, X, K, P, oe, 6, h[52])),
                    (P = b(P, z, X, K, U, 10, h[53])),
                    (K = b(K, P, z, X, ce, 15, h[54])),
                    (X = b(X, K, P, z, L, 21, h[55])),
                    (z = b(z, X, K, P, I, 6, h[56])),
                    (P = b(P, z, X, K, F, 10, h[57])),
                    (K = b(K, P, z, X, j, 15, h[58])),
                    (X = b(X, K, P, z, ie, 21, h[59])),
                    (z = b(z, X, K, P, q, 6, h[60])),
                    (P = b(P, z, X, K, ee, 10, h[61])),
                    (K = b(K, P, z, X, T, 15, h[62])),
                    (X = b(X, K, P, z, le, 21, h[63])),
                    (_[0] = (_[0] + z) | 0),
                    (_[1] = (_[1] + X) | 0),
                    (_[2] = (_[2] + K) | 0),
                    (_[3] = (_[3] + P) | 0);
                },
                _doFinalize: function () {
                  var S = this._data,
                    A = S.words,
                    R = this._nDataBytes * 8,
                    C = S.sigBytes * 8;
                  A[C >>> 5] |= 128 << (24 - (C % 32));
                  var D = s.floor(R / 4294967296),
                    _ = R;
                  (A[(((C + 64) >>> 9) << 4) + 15] =
                    (((D << 8) | (D >>> 24)) & 16711935) |
                    (((D << 24) | (D >>> 8)) & 4278255360)),
                    (A[(((C + 64) >>> 9) << 4) + 14] =
                      (((_ << 8) | (_ >>> 24)) & 16711935) |
                      (((_ << 24) | (_ >>> 8)) & 4278255360)),
                    (S.sigBytes = (A.length + 1) * 4),
                    this._process();
                  for (var w = this._hash, L = w.words, T = 0; T < 4; T++) {
                    var U = L[T];
                    L[T] =
                      (((U << 8) | (U >>> 24)) & 16711935) |
                      (((U << 24) | (U >>> 8)) & 4278255360);
                  }
                  return w;
                },
                clone: function () {
                  var S = p.clone.call(this);
                  return (S._hash = this._hash.clone()), S;
                },
              }));
              function v(S, A, R, C, D, _, w) {
                var L = S + ((A & R) | (~A & C)) + D + w;
                return ((L << _) | (L >>> (32 - _))) + A;
              }
              function y(S, A, R, C, D, _, w) {
                var L = S + ((A & C) | (R & ~C)) + D + w;
                return ((L << _) | (L >>> (32 - _))) + A;
              }
              function g(S, A, R, C, D, _, w) {
                var L = S + (A ^ R ^ C) + D + w;
                return ((L << _) | (L >>> (32 - _))) + A;
              }
              function b(S, A, R, C, D, _, w) {
                var L = S + (R ^ (A | ~C)) + D + w;
                return ((L << _) | (L >>> (32 - _))) + A;
              }
              (l.MD5 = p._createHelper(m)),
                (l.HmacMD5 = p._createHmacHelper(m));
            })(Math),
            r.MD5
          );
        });
      })(Il)),
    Il.exports
  );
}
var eu = { exports: {} },
  zA = eu.exports,
  z1;
function dg() {
  return (
    z1 ||
      ((z1 = 1),
      (function (t, n) {
        (function (r, s) {
          t.exports = s(qe());
        })(zA, function (r) {
          return (
            (function () {
              var s = r,
                l = s.lib,
                c = l.WordArray,
                f = l.Hasher,
                p = s.algo,
                x = [],
                h = (p.SHA1 = f.extend({
                  _doReset: function () {
                    this._hash = new c.init([
                      1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                    ]);
                  },
                  _doProcessBlock: function (m, v) {
                    for (
                      var y = this._hash.words,
                        g = y[0],
                        b = y[1],
                        S = y[2],
                        A = y[3],
                        R = y[4],
                        C = 0;
                      C < 80;
                      C++
                    ) {
                      if (C < 16) x[C] = m[v + C] | 0;
                      else {
                        var D = x[C - 3] ^ x[C - 8] ^ x[C - 14] ^ x[C - 16];
                        x[C] = (D << 1) | (D >>> 31);
                      }
                      var _ = ((g << 5) | (g >>> 27)) + R + x[C];
                      C < 20
                        ? (_ += ((b & S) | (~b & A)) + 1518500249)
                        : C < 40
                          ? (_ += (b ^ S ^ A) + 1859775393)
                          : C < 60
                            ? (_ += ((b & S) | (b & A) | (S & A)) - 1894007588)
                            : (_ += (b ^ S ^ A) - 899497514),
                        (R = A),
                        (A = S),
                        (S = (b << 30) | (b >>> 2)),
                        (b = g),
                        (g = _);
                    }
                    (y[0] = (y[0] + g) | 0),
                      (y[1] = (y[1] + b) | 0),
                      (y[2] = (y[2] + S) | 0),
                      (y[3] = (y[3] + A) | 0),
                      (y[4] = (y[4] + R) | 0);
                  },
                  _doFinalize: function () {
                    var m = this._data,
                      v = m.words,
                      y = this._nDataBytes * 8,
                      g = m.sigBytes * 8;
                    return (
                      (v[g >>> 5] |= 128 << (24 - (g % 32))),
                      (v[(((g + 64) >>> 9) << 4) + 14] = Math.floor(
                        y / 4294967296,
                      )),
                      (v[(((g + 64) >>> 9) << 4) + 15] = y),
                      (m.sigBytes = v.length * 4),
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
            r.SHA1
          );
        });
      })(eu)),
    eu.exports
  );
}
var tu = { exports: {} },
  NA = tu.exports,
  N1;
function Fh() {
  return (
    N1 ||
      ((N1 = 1),
      (function (t, n) {
        (function (r, s) {
          t.exports = s(qe());
        })(NA, function (r) {
          return (
            (function (s) {
              var l = r,
                c = l.lib,
                f = c.WordArray,
                p = c.Hasher,
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
              var v = [],
                y = (x.SHA256 = p.extend({
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
                        _ = S[4],
                        w = S[5],
                        L = S[6],
                        T = S[7],
                        U = 0;
                      U < 64;
                      U++
                    ) {
                      if (U < 16) v[U] = g[b + U] | 0;
                      else {
                        var q = v[U - 15],
                          O =
                            ((q << 25) | (q >>> 7)) ^
                            ((q << 14) | (q >>> 18)) ^
                            (q >>> 3),
                          j = v[U - 2],
                          $ =
                            ((j << 15) | (j >>> 17)) ^
                            ((j << 13) | (j >>> 19)) ^
                            (j >>> 10);
                        v[U] = O + v[U - 7] + $ + v[U - 16];
                      }
                      var I = (_ & w) ^ (~_ & L),
                        le = (A & R) ^ (A & C) ^ (R & C),
                        ce =
                          ((A << 30) | (A >>> 2)) ^
                          ((A << 19) | (A >>> 13)) ^
                          ((A << 10) | (A >>> 22)),
                        ee =
                          ((_ << 26) | (_ >>> 6)) ^
                          ((_ << 21) | (_ >>> 11)) ^
                          ((_ << 7) | (_ >>> 25)),
                        oe = T + ee + I + m[U] + v[U],
                        ie = ce + le;
                      (T = L),
                        (L = w),
                        (w = _),
                        (_ = (D + oe) | 0),
                        (D = C),
                        (C = R),
                        (R = A),
                        (A = (oe + ie) | 0);
                    }
                    (S[0] = (S[0] + A) | 0),
                      (S[1] = (S[1] + R) | 0),
                      (S[2] = (S[2] + C) | 0),
                      (S[3] = (S[3] + D) | 0),
                      (S[4] = (S[4] + _) | 0),
                      (S[5] = (S[5] + w) | 0),
                      (S[6] = (S[6] + L) | 0),
                      (S[7] = (S[7] + T) | 0);
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
                    var g = p.clone.call(this);
                    return (g._hash = this._hash.clone()), g;
                  },
                }));
              (l.SHA256 = p._createHelper(y)),
                (l.HmacSHA256 = p._createHmacHelper(y));
            })(Math),
            r.SHA256
          );
        });
      })(tu)),
    tu.exports
  );
}
var nu = { exports: {} },
  HA = nu.exports,
  H1;
function VA() {
  return (
    H1 ||
      ((H1 = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), Fh());
        })(HA, function (r) {
          return (
            (function () {
              var s = r,
                l = s.lib,
                c = l.WordArray,
                f = s.algo,
                p = f.SHA256,
                x = (f.SHA224 = p.extend({
                  _doReset: function () {
                    this._hash = new c.init([
                      3238371032, 914150663, 812702999, 4144912697, 4290775857,
                      1750603025, 1694076839, 3204075428,
                    ]);
                  },
                  _doFinalize: function () {
                    var h = p._doFinalize.call(this);
                    return (h.sigBytes -= 4), h;
                  },
                }));
              (s.SHA224 = p._createHelper(x)),
                (s.HmacSHA224 = p._createHmacHelper(x));
            })(),
            r.SHA224
          );
        });
      })(nu)),
    nu.exports
  );
}
var iu = { exports: {} },
  kA = iu.exports,
  V1;
function pg() {
  return (
    V1 ||
      ((V1 = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), Iu());
        })(kA, function (r) {
          return (
            (function () {
              var s = r,
                l = s.lib,
                c = l.Hasher,
                f = s.x64,
                p = f.Word,
                x = f.WordArray,
                h = s.algo;
              function m() {
                return p.create.apply(p, arguments);
              }
              var v = [
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
                y = [];
              (function () {
                for (var b = 0; b < 80; b++) y[b] = m();
              })();
              var g = (h.SHA512 = c.extend({
                _doReset: function () {
                  this._hash = new x.init([
                    new p.init(1779033703, 4089235720),
                    new p.init(3144134277, 2227873595),
                    new p.init(1013904242, 4271175723),
                    new p.init(2773480762, 1595750129),
                    new p.init(1359893119, 2917565137),
                    new p.init(2600822924, 725511199),
                    new p.init(528734635, 4215389547),
                    new p.init(1541459225, 327033209),
                  ]);
                },
                _doProcessBlock: function (b, S) {
                  for (
                    var A = this._hash.words,
                      R = A[0],
                      C = A[1],
                      D = A[2],
                      _ = A[3],
                      w = A[4],
                      L = A[5],
                      T = A[6],
                      U = A[7],
                      q = R.high,
                      O = R.low,
                      j = C.high,
                      $ = C.low,
                      I = D.high,
                      le = D.low,
                      ce = _.high,
                      ee = _.low,
                      oe = w.high,
                      ie = w.low,
                      ye = L.high,
                      F = L.low,
                      z = T.high,
                      X = T.low,
                      K = U.high,
                      P = U.low,
                      pe = q,
                      xe = O,
                      Me = j,
                      me = $,
                      $e = I,
                      Ye = le,
                      jt = ce,
                      et = ee,
                      tt = oe,
                      vt = ie,
                      jn = ye,
                      Et = F,
                      ii = z,
                      En = X,
                      ri = K,
                      Pn = P,
                      zt = 0;
                    zt < 80;
                    zt++
                  ) {
                    var Pt,
                      bn,
                      ut = y[zt];
                    if (zt < 16)
                      (bn = ut.high = b[S + zt * 2] | 0),
                        (Pt = ut.low = b[S + zt * 2 + 1] | 0);
                    else {
                      var ai = y[zt - 15],
                        An = ai.high,
                        Sn = ai.low,
                        Wt =
                          ((An >>> 1) | (Sn << 31)) ^
                          ((An >>> 8) | (Sn << 24)) ^
                          (An >>> 7),
                        tn =
                          ((Sn >>> 1) | (An << 31)) ^
                          ((Sn >>> 8) | (An << 24)) ^
                          ((Sn >>> 7) | (An << 25)),
                        qi = y[zt - 2],
                        fn = qi.high,
                        mi = qi.low,
                        Yt =
                          ((fn >>> 19) | (mi << 13)) ^
                          ((fn << 3) | (mi >>> 29)) ^
                          (fn >>> 6),
                        Rt =
                          ((mi >>> 19) | (fn << 13)) ^
                          ((mi << 3) | (fn >>> 29)) ^
                          ((mi >>> 6) | (fn << 26)),
                        Ar = y[zt - 7],
                        hn = Ar.high,
                        Nt = Ar.low,
                        Sr = y[zt - 16],
                        ji = Sr.high,
                        Cr = Sr.low;
                      (Pt = tn + Nt),
                        (bn = Wt + hn + (Pt >>> 0 < tn >>> 0 ? 1 : 0)),
                        (Pt = Pt + Rt),
                        (bn = bn + Yt + (Pt >>> 0 < Rt >>> 0 ? 1 : 0)),
                        (Pt = Pt + Cr),
                        (bn = bn + ji + (Pt >>> 0 < Cr >>> 0 ? 1 : 0)),
                        (ut.high = bn),
                        (ut.low = Pt);
                    }
                    var si = (tt & jn) ^ (~tt & ii),
                      Yn = (vt & Et) ^ (~vt & En),
                      Xn = (pe & Me) ^ (pe & $e) ^ (Me & $e),
                      vi = (xe & me) ^ (xe & Ye) ^ (me & Ye),
                      yi =
                        ((pe >>> 28) | (xe << 4)) ^
                        ((pe << 30) | (xe >>> 2)) ^
                        ((pe << 25) | (xe >>> 7)),
                      Dr =
                        ((xe >>> 28) | (pe << 4)) ^
                        ((xe << 30) | (pe >>> 2)) ^
                        ((xe << 25) | (pe >>> 7)),
                      gi =
                        ((tt >>> 14) | (vt << 18)) ^
                        ((tt >>> 18) | (vt << 14)) ^
                        ((tt << 23) | (vt >>> 9)),
                      Ei =
                        ((vt >>> 14) | (tt << 18)) ^
                        ((vt >>> 18) | (tt << 14)) ^
                        ((vt << 23) | (tt >>> 9)),
                      Pi = v[zt],
                      bi = Pi.high,
                      N = Pi.low,
                      V = Pn + Ei,
                      Q = ri + gi + (V >>> 0 < Pn >>> 0 ? 1 : 0),
                      V = V + Yn,
                      Q = Q + si + (V >>> 0 < Yn >>> 0 ? 1 : 0),
                      V = V + N,
                      Q = Q + bi + (V >>> 0 < N >>> 0 ? 1 : 0),
                      V = V + Pt,
                      Q = Q + bn + (V >>> 0 < Pt >>> 0 ? 1 : 0),
                      ae = Dr + vi,
                      fe = yi + Xn + (ae >>> 0 < Dr >>> 0 ? 1 : 0);
                    (ri = ii),
                      (Pn = En),
                      (ii = jn),
                      (En = Et),
                      (jn = tt),
                      (Et = vt),
                      (vt = (et + V) | 0),
                      (tt = (jt + Q + (vt >>> 0 < et >>> 0 ? 1 : 0)) | 0),
                      (jt = $e),
                      (et = Ye),
                      ($e = Me),
                      (Ye = me),
                      (Me = pe),
                      (me = xe),
                      (xe = (V + ae) | 0),
                      (pe = (Q + fe + (xe >>> 0 < V >>> 0 ? 1 : 0)) | 0);
                  }
                  (O = R.low = O + xe),
                    (R.high = q + pe + (O >>> 0 < xe >>> 0 ? 1 : 0)),
                    ($ = C.low = $ + me),
                    (C.high = j + Me + ($ >>> 0 < me >>> 0 ? 1 : 0)),
                    (le = D.low = le + Ye),
                    (D.high = I + $e + (le >>> 0 < Ye >>> 0 ? 1 : 0)),
                    (ee = _.low = ee + et),
                    (_.high = ce + jt + (ee >>> 0 < et >>> 0 ? 1 : 0)),
                    (ie = w.low = ie + vt),
                    (w.high = oe + tt + (ie >>> 0 < vt >>> 0 ? 1 : 0)),
                    (F = L.low = F + Et),
                    (L.high = ye + jn + (F >>> 0 < Et >>> 0 ? 1 : 0)),
                    (X = T.low = X + En),
                    (T.high = z + ii + (X >>> 0 < En >>> 0 ? 1 : 0)),
                    (P = U.low = P + Pn),
                    (U.high = K + ri + (P >>> 0 < Pn >>> 0 ? 1 : 0));
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
            r.SHA512
          );
        });
      })(iu)),
    iu.exports
  );
}
var ru = { exports: {} },
  qA = ru.exports,
  k1;
function jA() {
  return (
    k1 ||
      ((k1 = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), Iu(), pg());
        })(qA, function (r) {
          return (
            (function () {
              var s = r,
                l = s.x64,
                c = l.Word,
                f = l.WordArray,
                p = s.algo,
                x = p.SHA512,
                h = (p.SHA384 = x.extend({
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
            r.SHA384
          );
        });
      })(ru)),
    ru.exports
  );
}
var au = { exports: {} },
  PA = au.exports,
  q1;
function YA() {
  return (
    q1 ||
      ((q1 = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), Iu());
        })(PA, function (r) {
          return (
            (function (s) {
              var l = r,
                c = l.lib,
                f = c.WordArray,
                p = c.Hasher,
                x = l.x64,
                h = x.Word,
                m = l.algo,
                v = [],
                y = [],
                g = [];
              (function () {
                for (var A = 1, R = 0, C = 0; C < 24; C++) {
                  v[A + 5 * R] = (((C + 1) * (C + 2)) / 2) % 64;
                  var D = R % 5,
                    _ = (2 * A + 3 * R) % 5;
                  (A = D), (R = _);
                }
                for (var A = 0; A < 5; A++)
                  for (var R = 0; R < 5; R++)
                    y[A + 5 * R] = R + ((2 * A + 3 * R) % 5) * 5;
                for (var w = 1, L = 0; L < 24; L++) {
                  for (var T = 0, U = 0, q = 0; q < 7; q++) {
                    if (w & 1) {
                      var O = (1 << q) - 1;
                      O < 32 ? (U ^= 1 << O) : (T ^= 1 << (O - 32));
                    }
                    w & 128 ? (w = (w << 1) ^ 113) : (w <<= 1);
                  }
                  g[L] = h.create(T, U);
                }
              })();
              var b = [];
              (function () {
                for (var A = 0; A < 25; A++) b[A] = h.create();
              })();
              var S = (m.SHA3 = p.extend({
                cfg: p.cfg.extend({ outputLength: 512 }),
                _doReset: function () {
                  for (var A = (this._state = []), R = 0; R < 25; R++)
                    A[R] = new h.init();
                  this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
                },
                _doProcessBlock: function (A, R) {
                  for (
                    var C = this._state, D = this.blockSize / 2, _ = 0;
                    _ < D;
                    _++
                  ) {
                    var w = A[R + 2 * _],
                      L = A[R + 2 * _ + 1];
                    (w =
                      (((w << 8) | (w >>> 24)) & 16711935) |
                      (((w << 24) | (w >>> 8)) & 4278255360)),
                      (L =
                        (((L << 8) | (L >>> 24)) & 16711935) |
                        (((L << 24) | (L >>> 8)) & 4278255360));
                    var T = C[_];
                    (T.high ^= L), (T.low ^= w);
                  }
                  for (var U = 0; U < 24; U++) {
                    for (var q = 0; q < 5; q++) {
                      for (var O = 0, j = 0, $ = 0; $ < 5; $++) {
                        var T = C[q + 5 * $];
                        (O ^= T.high), (j ^= T.low);
                      }
                      var I = b[q];
                      (I.high = O), (I.low = j);
                    }
                    for (var q = 0; q < 5; q++)
                      for (
                        var le = b[(q + 4) % 5],
                          ce = b[(q + 1) % 5],
                          ee = ce.high,
                          oe = ce.low,
                          O = le.high ^ ((ee << 1) | (oe >>> 31)),
                          j = le.low ^ ((oe << 1) | (ee >>> 31)),
                          $ = 0;
                        $ < 5;
                        $++
                      ) {
                        var T = C[q + 5 * $];
                        (T.high ^= O), (T.low ^= j);
                      }
                    for (var ie = 1; ie < 25; ie++) {
                      var O,
                        j,
                        T = C[ie],
                        ye = T.high,
                        F = T.low,
                        z = v[ie];
                      z < 32
                        ? ((O = (ye << z) | (F >>> (32 - z))),
                          (j = (F << z) | (ye >>> (32 - z))))
                        : ((O = (F << (z - 32)) | (ye >>> (64 - z))),
                          (j = (ye << (z - 32)) | (F >>> (64 - z))));
                      var X = b[y[ie]];
                      (X.high = O), (X.low = j);
                    }
                    var K = b[0],
                      P = C[0];
                    (K.high = P.high), (K.low = P.low);
                    for (var q = 0; q < 5; q++)
                      for (var $ = 0; $ < 5; $++) {
                        var ie = q + 5 * $,
                          T = C[ie],
                          pe = b[ie],
                          xe = b[((q + 1) % 5) + 5 * $],
                          Me = b[((q + 2) % 5) + 5 * $];
                        (T.high = pe.high ^ (~xe.high & Me.high)),
                          (T.low = pe.low ^ (~xe.low & Me.low));
                      }
                    var T = C[0],
                      me = g[U];
                    (T.high ^= me.high), (T.low ^= me.low);
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
                    var _ = this._state,
                      w = this.cfg.outputLength / 8,
                      L = w / 8,
                      T = [],
                      U = 0;
                    U < L;
                    U++
                  ) {
                    var q = _[U],
                      O = q.high,
                      j = q.low;
                    (O =
                      (((O << 8) | (O >>> 24)) & 16711935) |
                      (((O << 24) | (O >>> 8)) & 4278255360)),
                      (j =
                        (((j << 8) | (j >>> 24)) & 16711935) |
                        (((j << 24) | (j >>> 8)) & 4278255360)),
                      T.push(j),
                      T.push(O);
                  }
                  return new f.init(T, w);
                },
                clone: function () {
                  for (
                    var A = p.clone.call(this),
                      R = (A._state = this._state.slice(0)),
                      C = 0;
                    C < 25;
                    C++
                  )
                    R[C] = R[C].clone();
                  return A;
                },
              }));
              (l.SHA3 = p._createHelper(S)),
                (l.HmacSHA3 = p._createHmacHelper(S));
            })(Math),
            r.SHA3
          );
        });
      })(au)),
    au.exports
  );
}
var su = { exports: {} },
  XA = su.exports,
  j1;
function GA() {
  return (
    j1 ||
      ((j1 = 1),
      (function (t, n) {
        (function (r, s) {
          t.exports = s(qe());
        })(XA, function (r) {
          /** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/ return (
            (function (s) {
              var l = r,
                c = l.lib,
                f = c.WordArray,
                p = c.Hasher,
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
                v = f.create([
                  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6,
                  8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6,
                  7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15,
                  14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8,
                  13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
                ]),
                y = f.create([
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
                S = (x.RIPEMD160 = p.extend({
                  _doReset: function () {
                    this._hash = f.create([
                      1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                    ]);
                  },
                  _doProcessBlock: function (L, T) {
                    for (var U = 0; U < 16; U++) {
                      var q = T + U,
                        O = L[q];
                      L[q] =
                        (((O << 8) | (O >>> 24)) & 16711935) |
                        (((O << 24) | (O >>> 8)) & 4278255360);
                    }
                    var j = this._hash.words,
                      $ = g.words,
                      I = b.words,
                      le = h.words,
                      ce = m.words,
                      ee = v.words,
                      oe = y.words,
                      ie,
                      ye,
                      F,
                      z,
                      X,
                      K,
                      P,
                      pe,
                      xe,
                      Me;
                    (K = ie = j[0]),
                      (P = ye = j[1]),
                      (pe = F = j[2]),
                      (xe = z = j[3]),
                      (Me = X = j[4]);
                    for (var me, U = 0; U < 80; U += 1)
                      (me = (ie + L[T + le[U]]) | 0),
                        U < 16
                          ? (me += A(ye, F, z) + $[0])
                          : U < 32
                            ? (me += R(ye, F, z) + $[1])
                            : U < 48
                              ? (me += C(ye, F, z) + $[2])
                              : U < 64
                                ? (me += D(ye, F, z) + $[3])
                                : (me += _(ye, F, z) + $[4]),
                        (me = me | 0),
                        (me = w(me, ee[U])),
                        (me = (me + X) | 0),
                        (ie = X),
                        (X = z),
                        (z = w(F, 10)),
                        (F = ye),
                        (ye = me),
                        (me = (K + L[T + ce[U]]) | 0),
                        U < 16
                          ? (me += _(P, pe, xe) + I[0])
                          : U < 32
                            ? (me += D(P, pe, xe) + I[1])
                            : U < 48
                              ? (me += C(P, pe, xe) + I[2])
                              : U < 64
                                ? (me += R(P, pe, xe) + I[3])
                                : (me += A(P, pe, xe) + I[4]),
                        (me = me | 0),
                        (me = w(me, oe[U])),
                        (me = (me + Me) | 0),
                        (K = Me),
                        (Me = xe),
                        (xe = w(pe, 10)),
                        (pe = P),
                        (P = me);
                    (me = (j[1] + F + xe) | 0),
                      (j[1] = (j[2] + z + Me) | 0),
                      (j[2] = (j[3] + X + K) | 0),
                      (j[3] = (j[4] + ie + P) | 0),
                      (j[4] = (j[0] + ye + pe) | 0),
                      (j[0] = me);
                  },
                  _doFinalize: function () {
                    var L = this._data,
                      T = L.words,
                      U = this._nDataBytes * 8,
                      q = L.sigBytes * 8;
                    (T[q >>> 5] |= 128 << (24 - (q % 32))),
                      (T[(((q + 64) >>> 9) << 4) + 14] =
                        (((U << 8) | (U >>> 24)) & 16711935) |
                        (((U << 24) | (U >>> 8)) & 4278255360)),
                      (L.sigBytes = (T.length + 1) * 4),
                      this._process();
                    for (var O = this._hash, j = O.words, $ = 0; $ < 5; $++) {
                      var I = j[$];
                      j[$] =
                        (((I << 8) | (I >>> 24)) & 16711935) |
                        (((I << 24) | (I >>> 8)) & 4278255360);
                    }
                    return O;
                  },
                  clone: function () {
                    var L = p.clone.call(this);
                    return (L._hash = this._hash.clone()), L;
                  },
                }));
              function A(L, T, U) {
                return L ^ T ^ U;
              }
              function R(L, T, U) {
                return (L & T) | (~L & U);
              }
              function C(L, T, U) {
                return (L | ~T) ^ U;
              }
              function D(L, T, U) {
                return (L & U) | (T & ~U);
              }
              function _(L, T, U) {
                return L ^ (T | ~U);
              }
              function w(L, T) {
                return (L << T) | (L >>> (32 - T));
              }
              (l.RIPEMD160 = p._createHelper(S)),
                (l.HmacRIPEMD160 = p._createHmacHelper(S));
            })(),
            r.RIPEMD160
          );
        });
      })(su)),
    su.exports
  );
}
var ou = { exports: {} },
  KA = ou.exports,
  P1;
function Lh() {
  return (
    P1 ||
      ((P1 = 1),
      (function (t, n) {
        (function (r, s) {
          t.exports = s(qe());
        })(KA, function (r) {
          (function () {
            var s = r,
              l = s.lib,
              c = l.Base,
              f = s.enc,
              p = f.Utf8,
              x = s.algo;
            x.HMAC = c.extend({
              init: function (h, m) {
                (h = this._hasher = new h.init()),
                  typeof m == "string" && (m = p.parse(m));
                var v = h.blockSize,
                  y = v * 4;
                m.sigBytes > y && (m = h.finalize(m)), m.clamp();
                for (
                  var g = (this._oKey = m.clone()),
                    b = (this._iKey = m.clone()),
                    S = g.words,
                    A = b.words,
                    R = 0;
                  R < v;
                  R++
                )
                  (S[R] ^= 1549556828), (A[R] ^= 909522486);
                (g.sigBytes = b.sigBytes = y), this.reset();
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
                  v = m.finalize(h);
                m.reset();
                var y = m.finalize(this._oKey.clone().concat(v));
                return y;
              },
            });
          })();
        });
      })(ou)),
    ou.exports
  );
}
var lu = { exports: {} },
  QA = lu.exports,
  Y1;
function ZA() {
  return (
    Y1 ||
      ((Y1 = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), Fh(), Lh());
        })(QA, function (r) {
          return (
            (function () {
              var s = r,
                l = s.lib,
                c = l.Base,
                f = l.WordArray,
                p = s.algo,
                x = p.SHA256,
                h = p.HMAC,
                m = (p.PBKDF2 = c.extend({
                  cfg: c.extend({
                    keySize: 128 / 32,
                    hasher: x,
                    iterations: 25e4,
                  }),
                  init: function (v) {
                    this.cfg = this.cfg.extend(v);
                  },
                  compute: function (v, y) {
                    for (
                      var g = this.cfg,
                        b = h.create(g.hasher, v),
                        S = f.create(),
                        A = f.create([1]),
                        R = S.words,
                        C = A.words,
                        D = g.keySize,
                        _ = g.iterations;
                      R.length < D;

                    ) {
                      var w = b.update(y).finalize(A);
                      b.reset();
                      for (
                        var L = w.words, T = L.length, U = w, q = 1;
                        q < _;
                        q++
                      ) {
                        (U = b.finalize(U)), b.reset();
                        for (var O = U.words, j = 0; j < T; j++) L[j] ^= O[j];
                      }
                      S.concat(w), C[0]++;
                    }
                    return (S.sigBytes = D * 4), S;
                  },
                }));
              s.PBKDF2 = function (v, y, g) {
                return m.create(g).compute(v, y);
              };
            })(),
            r.PBKDF2
          );
        });
      })(lu)),
    lu.exports
  );
}
var uu = { exports: {} },
  WA = uu.exports,
  X1;
function Er() {
  return (
    X1 ||
      ((X1 = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), dg(), Lh());
        })(WA, function (r) {
          return (
            (function () {
              var s = r,
                l = s.lib,
                c = l.Base,
                f = l.WordArray,
                p = s.algo,
                x = p.MD5,
                h = (p.EvpKDF = c.extend({
                  cfg: c.extend({
                    keySize: 128 / 32,
                    hasher: x,
                    iterations: 1,
                  }),
                  init: function (m) {
                    this.cfg = this.cfg.extend(m);
                  },
                  compute: function (m, v) {
                    for (
                      var y,
                        g = this.cfg,
                        b = g.hasher.create(),
                        S = f.create(),
                        A = S.words,
                        R = g.keySize,
                        C = g.iterations;
                      A.length < R;

                    ) {
                      y && b.update(y),
                        (y = b.update(m).finalize(v)),
                        b.reset();
                      for (var D = 1; D < C; D++)
                        (y = b.finalize(y)), b.reset();
                      S.concat(y);
                    }
                    return (S.sigBytes = R * 4), S;
                  },
                }));
              s.EvpKDF = function (m, v, y) {
                return h.create(y).compute(m, v);
              };
            })(),
            r.EvpKDF
          );
        });
      })(uu)),
    uu.exports
  );
}
var cu = { exports: {} },
  $A = cu.exports,
  G1;
function Ut() {
  return (
    G1 ||
      ((G1 = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), Er());
        })($A, function (r) {
          r.lib.Cipher ||
            (function (s) {
              var l = r,
                c = l.lib,
                f = c.Base,
                p = c.WordArray,
                x = c.BufferedBlockAlgorithm,
                h = l.enc;
              h.Utf8;
              var m = h.Base64,
                v = l.algo,
                y = v.EvpKDF,
                g = (c.Cipher = x.extend({
                  cfg: f.extend(),
                  createEncryptor: function (O, j) {
                    return this.create(this._ENC_XFORM_MODE, O, j);
                  },
                  createDecryptor: function (O, j) {
                    return this.create(this._DEC_XFORM_MODE, O, j);
                  },
                  init: function (O, j, $) {
                    (this.cfg = this.cfg.extend($)),
                      (this._xformMode = O),
                      (this._key = j),
                      this.reset();
                  },
                  reset: function () {
                    x.reset.call(this), this._doReset();
                  },
                  process: function (O) {
                    return this._append(O), this._process();
                  },
                  finalize: function (O) {
                    O && this._append(O);
                    var j = this._doFinalize();
                    return j;
                  },
                  keySize: 128 / 32,
                  ivSize: 128 / 32,
                  _ENC_XFORM_MODE: 1,
                  _DEC_XFORM_MODE: 2,
                  _createHelper: (function () {
                    function O(j) {
                      return typeof j == "string" ? q : L;
                    }
                    return function (j) {
                      return {
                        encrypt: function ($, I, le) {
                          return O(I).encrypt(j, $, I, le);
                        },
                        decrypt: function ($, I, le) {
                          return O(I).decrypt(j, $, I, le);
                        },
                      };
                    };
                  })(),
                }));
              c.StreamCipher = g.extend({
                _doFinalize: function () {
                  var O = this._process(!0);
                  return O;
                },
                blockSize: 1,
              });
              var b = (l.mode = {}),
                S = (c.BlockCipherMode = f.extend({
                  createEncryptor: function (O, j) {
                    return this.Encryptor.create(O, j);
                  },
                  createDecryptor: function (O, j) {
                    return this.Decryptor.create(O, j);
                  },
                  init: function (O, j) {
                    (this._cipher = O), (this._iv = j);
                  },
                })),
                A = (b.CBC = (function () {
                  var O = S.extend();
                  (O.Encryptor = O.extend({
                    processBlock: function ($, I) {
                      var le = this._cipher,
                        ce = le.blockSize;
                      j.call(this, $, I, ce),
                        le.encryptBlock($, I),
                        (this._prevBlock = $.slice(I, I + ce));
                    },
                  })),
                    (O.Decryptor = O.extend({
                      processBlock: function ($, I) {
                        var le = this._cipher,
                          ce = le.blockSize,
                          ee = $.slice(I, I + ce);
                        le.decryptBlock($, I),
                          j.call(this, $, I, ce),
                          (this._prevBlock = ee);
                      },
                    }));
                  function j($, I, le) {
                    var ce,
                      ee = this._iv;
                    ee ? ((ce = ee), (this._iv = s)) : (ce = this._prevBlock);
                    for (var oe = 0; oe < le; oe++) $[I + oe] ^= ce[oe];
                  }
                  return O;
                })()),
                R = (l.pad = {}),
                C = (R.Pkcs7 = {
                  pad: function (O, j) {
                    for (
                      var $ = j * 4,
                        I = $ - (O.sigBytes % $),
                        le = (I << 24) | (I << 16) | (I << 8) | I,
                        ce = [],
                        ee = 0;
                      ee < I;
                      ee += 4
                    )
                      ce.push(le);
                    var oe = p.create(ce, I);
                    O.concat(oe);
                  },
                  unpad: function (O) {
                    var j = O.words[(O.sigBytes - 1) >>> 2] & 255;
                    O.sigBytes -= j;
                  },
                });
              c.BlockCipher = g.extend({
                cfg: g.cfg.extend({ mode: A, padding: C }),
                reset: function () {
                  var O;
                  g.reset.call(this);
                  var j = this.cfg,
                    $ = j.iv,
                    I = j.mode;
                  this._xformMode == this._ENC_XFORM_MODE
                    ? (O = I.createEncryptor)
                    : ((O = I.createDecryptor), (this._minBufferSize = 1)),
                    this._mode && this._mode.__creator == O
                      ? this._mode.init(this, $ && $.words)
                      : ((this._mode = O.call(I, this, $ && $.words)),
                        (this._mode.__creator = O));
                },
                _doProcessBlock: function (O, j) {
                  this._mode.processBlock(O, j);
                },
                _doFinalize: function () {
                  var O,
                    j = this.cfg.padding;
                  return (
                    this._xformMode == this._ENC_XFORM_MODE
                      ? (j.pad(this._data, this.blockSize),
                        (O = this._process(!0)))
                      : ((O = this._process(!0)), j.unpad(O)),
                    O
                  );
                },
                blockSize: 128 / 32,
              });
              var D = (c.CipherParams = f.extend({
                  init: function (O) {
                    this.mixIn(O);
                  },
                  toString: function (O) {
                    return (O || this.formatter).stringify(this);
                  },
                })),
                _ = (l.format = {}),
                w = (_.OpenSSL = {
                  stringify: function (O) {
                    var j,
                      $ = O.ciphertext,
                      I = O.salt;
                    return (
                      I
                        ? (j = p
                            .create([1398893684, 1701076831])
                            .concat(I)
                            .concat($))
                        : (j = $),
                      j.toString(m)
                    );
                  },
                  parse: function (O) {
                    var j,
                      $ = m.parse(O),
                      I = $.words;
                    return (
                      I[0] == 1398893684 &&
                        I[1] == 1701076831 &&
                        ((j = p.create(I.slice(2, 4))),
                        I.splice(0, 4),
                        ($.sigBytes -= 16)),
                      D.create({ ciphertext: $, salt: j })
                    );
                  },
                }),
                L = (c.SerializableCipher = f.extend({
                  cfg: f.extend({ format: w }),
                  encrypt: function (O, j, $, I) {
                    I = this.cfg.extend(I);
                    var le = O.createEncryptor($, I),
                      ce = le.finalize(j),
                      ee = le.cfg;
                    return D.create({
                      ciphertext: ce,
                      key: $,
                      iv: ee.iv,
                      algorithm: O,
                      mode: ee.mode,
                      padding: ee.padding,
                      blockSize: O.blockSize,
                      formatter: I.format,
                    });
                  },
                  decrypt: function (O, j, $, I) {
                    (I = this.cfg.extend(I)), (j = this._parse(j, I.format));
                    var le = O.createDecryptor($, I).finalize(j.ciphertext);
                    return le;
                  },
                  _parse: function (O, j) {
                    return typeof O == "string" ? j.parse(O, this) : O;
                  },
                })),
                T = (l.kdf = {}),
                U = (T.OpenSSL = {
                  execute: function (O, j, $, I, le) {
                    if ((I || (I = p.random(64 / 8)), le))
                      var ce = y
                        .create({ keySize: j + $, hasher: le })
                        .compute(O, I);
                    else var ce = y.create({ keySize: j + $ }).compute(O, I);
                    var ee = p.create(ce.words.slice(j), $ * 4);
                    return (
                      (ce.sigBytes = j * 4),
                      D.create({ key: ce, iv: ee, salt: I })
                    );
                  },
                }),
                q = (c.PasswordBasedCipher = L.extend({
                  cfg: L.cfg.extend({ kdf: U }),
                  encrypt: function (O, j, $, I) {
                    I = this.cfg.extend(I);
                    var le = I.kdf.execute(
                      $,
                      O.keySize,
                      O.ivSize,
                      I.salt,
                      I.hasher,
                    );
                    I.iv = le.iv;
                    var ce = L.encrypt.call(this, O, j, le.key, I);
                    return ce.mixIn(le), ce;
                  },
                  decrypt: function (O, j, $, I) {
                    (I = this.cfg.extend(I)), (j = this._parse(j, I.format));
                    var le = I.kdf.execute(
                      $,
                      O.keySize,
                      O.ivSize,
                      j.salt,
                      I.hasher,
                    );
                    I.iv = le.iv;
                    var ce = L.decrypt.call(this, O, j, le.key, I);
                    return ce;
                  },
                }));
            })();
        });
      })(cu)),
    cu.exports
  );
}
var fu = { exports: {} },
  JA = fu.exports,
  K1;
function IA() {
  return (
    K1 ||
      ((K1 = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), Ut());
        })(JA, function (r) {
          return (
            (r.mode.CFB = (function () {
              var s = r.lib.BlockCipherMode.extend();
              (s.Encryptor = s.extend({
                processBlock: function (c, f) {
                  var p = this._cipher,
                    x = p.blockSize;
                  l.call(this, c, f, x, p),
                    (this._prevBlock = c.slice(f, f + x));
                },
              })),
                (s.Decryptor = s.extend({
                  processBlock: function (c, f) {
                    var p = this._cipher,
                      x = p.blockSize,
                      h = c.slice(f, f + x);
                    l.call(this, c, f, x, p), (this._prevBlock = h);
                  },
                }));
              function l(c, f, p, x) {
                var h,
                  m = this._iv;
                m
                  ? ((h = m.slice(0)), (this._iv = void 0))
                  : (h = this._prevBlock),
                  x.encryptBlock(h, 0);
                for (var v = 0; v < p; v++) c[f + v] ^= h[v];
              }
              return s;
            })()),
            r.mode.CFB
          );
        });
      })(fu)),
    fu.exports
  );
}
var hu = { exports: {} },
  e3 = hu.exports,
  Q1;
function t3() {
  return (
    Q1 ||
      ((Q1 = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), Ut());
        })(e3, function (r) {
          return (
            (r.mode.CTR = (function () {
              var s = r.lib.BlockCipherMode.extend(),
                l = (s.Encryptor = s.extend({
                  processBlock: function (c, f) {
                    var p = this._cipher,
                      x = p.blockSize,
                      h = this._iv,
                      m = this._counter;
                    h &&
                      ((m = this._counter = h.slice(0)), (this._iv = void 0));
                    var v = m.slice(0);
                    p.encryptBlock(v, 0), (m[x - 1] = (m[x - 1] + 1) | 0);
                    for (var y = 0; y < x; y++) c[f + y] ^= v[y];
                  },
                }));
              return (s.Decryptor = l), s;
            })()),
            r.mode.CTR
          );
        });
      })(hu)),
    hu.exports
  );
}
var du = { exports: {} },
  n3 = du.exports,
  Z1;
function i3() {
  return (
    Z1 ||
      ((Z1 = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), Ut());
        })(n3, function (r) {
          /** @preserve
           * Counter block mode compatible with  Dr Brian Gladman fileenc.c
           * derived from CryptoJS.mode.CTR
           * Jan Hruby jhruby.web@gmail.com
           */ return (
            (r.mode.CTRGladman = (function () {
              var s = r.lib.BlockCipherMode.extend();
              function l(p) {
                if (((p >> 24) & 255) === 255) {
                  var x = (p >> 16) & 255,
                    h = (p >> 8) & 255,
                    m = p & 255;
                  x === 255
                    ? ((x = 0),
                      h === 255 ? ((h = 0), m === 255 ? (m = 0) : ++m) : ++h)
                    : ++x,
                    (p = 0),
                    (p += x << 16),
                    (p += h << 8),
                    (p += m);
                } else p += 1 << 24;
                return p;
              }
              function c(p) {
                return (p[0] = l(p[0])) === 0 && (p[1] = l(p[1])), p;
              }
              var f = (s.Encryptor = s.extend({
                processBlock: function (p, x) {
                  var h = this._cipher,
                    m = h.blockSize,
                    v = this._iv,
                    y = this._counter;
                  v && ((y = this._counter = v.slice(0)), (this._iv = void 0)),
                    c(y);
                  var g = y.slice(0);
                  h.encryptBlock(g, 0);
                  for (var b = 0; b < m; b++) p[x + b] ^= g[b];
                },
              }));
              return (s.Decryptor = f), s;
            })()),
            r.mode.CTRGladman
          );
        });
      })(du)),
    du.exports
  );
}
var pu = { exports: {} },
  r3 = pu.exports,
  W1;
function a3() {
  return (
    W1 ||
      ((W1 = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), Ut());
        })(r3, function (r) {
          return (
            (r.mode.OFB = (function () {
              var s = r.lib.BlockCipherMode.extend(),
                l = (s.Encryptor = s.extend({
                  processBlock: function (c, f) {
                    var p = this._cipher,
                      x = p.blockSize,
                      h = this._iv,
                      m = this._keystream;
                    h &&
                      ((m = this._keystream = h.slice(0)), (this._iv = void 0)),
                      p.encryptBlock(m, 0);
                    for (var v = 0; v < x; v++) c[f + v] ^= m[v];
                  },
                }));
              return (s.Decryptor = l), s;
            })()),
            r.mode.OFB
          );
        });
      })(pu)),
    pu.exports
  );
}
var xu = { exports: {} },
  s3 = xu.exports,
  $1;
function o3() {
  return (
    $1 ||
      (($1 = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), Ut());
        })(s3, function (r) {
          return (
            (r.mode.ECB = (function () {
              var s = r.lib.BlockCipherMode.extend();
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
            r.mode.ECB
          );
        });
      })(xu)),
    xu.exports
  );
}
var mu = { exports: {} },
  l3 = mu.exports,
  J1;
function u3() {
  return (
    J1 ||
      ((J1 = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), Ut());
        })(l3, function (r) {
          return (
            (r.pad.AnsiX923 = {
              pad: function (s, l) {
                var c = s.sigBytes,
                  f = l * 4,
                  p = f - (c % f),
                  x = c + p - 1;
                s.clamp(),
                  (s.words[x >>> 2] |= p << (24 - (x % 4) * 8)),
                  (s.sigBytes += p);
              },
              unpad: function (s) {
                var l = s.words[(s.sigBytes - 1) >>> 2] & 255;
                s.sigBytes -= l;
              },
            }),
            r.pad.Ansix923
          );
        });
      })(mu)),
    mu.exports
  );
}
var vu = { exports: {} },
  c3 = vu.exports,
  I1;
function f3() {
  return (
    I1 ||
      ((I1 = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), Ut());
        })(c3, function (r) {
          return (
            (r.pad.Iso10126 = {
              pad: function (s, l) {
                var c = l * 4,
                  f = c - (s.sigBytes % c);
                s.concat(r.lib.WordArray.random(f - 1)).concat(
                  r.lib.WordArray.create([f << 24], 1),
                );
              },
              unpad: function (s) {
                var l = s.words[(s.sigBytes - 1) >>> 2] & 255;
                s.sigBytes -= l;
              },
            }),
            r.pad.Iso10126
          );
        });
      })(vu)),
    vu.exports
  );
}
var yu = { exports: {} },
  h3 = yu.exports,
  ev;
function d3() {
  return (
    ev ||
      ((ev = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), Ut());
        })(h3, function (r) {
          return (
            (r.pad.Iso97971 = {
              pad: function (s, l) {
                s.concat(r.lib.WordArray.create([2147483648], 1)),
                  r.pad.ZeroPadding.pad(s, l);
              },
              unpad: function (s) {
                r.pad.ZeroPadding.unpad(s), s.sigBytes--;
              },
            }),
            r.pad.Iso97971
          );
        });
      })(yu)),
    yu.exports
  );
}
var gu = { exports: {} },
  p3 = gu.exports,
  tv;
function x3() {
  return (
    tv ||
      ((tv = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), Ut());
        })(p3, function (r) {
          return (
            (r.pad.ZeroPadding = {
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
            r.pad.ZeroPadding
          );
        });
      })(gu)),
    gu.exports
  );
}
var Eu = { exports: {} },
  m3 = Eu.exports,
  nv;
function v3() {
  return (
    nv ||
      ((nv = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), Ut());
        })(m3, function (r) {
          return (
            (r.pad.NoPadding = { pad: function () {}, unpad: function () {} }),
            r.pad.NoPadding
          );
        });
      })(Eu)),
    Eu.exports
  );
}
var bu = { exports: {} },
  y3 = bu.exports,
  iv;
function g3() {
  return (
    iv ||
      ((iv = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), Ut());
        })(y3, function (r) {
          return (
            (function (s) {
              var l = r,
                c = l.lib,
                f = c.CipherParams,
                p = l.enc,
                x = p.Hex,
                h = l.format;
              h.Hex = {
                stringify: function (m) {
                  return m.ciphertext.toString(x);
                },
                parse: function (m) {
                  var v = x.parse(m);
                  return f.create({ ciphertext: v });
                },
              };
            })(),
            r.format.Hex
          );
        });
      })(bu)),
    bu.exports
  );
}
var Au = { exports: {} },
  E3 = Au.exports,
  rv;
function b3() {
  return (
    rv ||
      ((rv = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), sa(), oa(), Er(), Ut());
        })(E3, function (r) {
          return (
            (function () {
              var s = r,
                l = s.lib,
                c = l.BlockCipher,
                f = s.algo,
                p = [],
                x = [],
                h = [],
                m = [],
                v = [],
                y = [],
                g = [],
                b = [],
                S = [],
                A = [];
              (function () {
                for (var D = [], _ = 0; _ < 256; _++)
                  _ < 128 ? (D[_] = _ << 1) : (D[_] = (_ << 1) ^ 283);
                for (var w = 0, L = 0, _ = 0; _ < 256; _++) {
                  var T = L ^ (L << 1) ^ (L << 2) ^ (L << 3) ^ (L << 4);
                  (T = (T >>> 8) ^ (T & 255) ^ 99), (p[w] = T), (x[T] = w);
                  var U = D[w],
                    q = D[U],
                    O = D[q],
                    j = (D[T] * 257) ^ (T * 16843008);
                  (h[w] = (j << 24) | (j >>> 8)),
                    (m[w] = (j << 16) | (j >>> 16)),
                    (v[w] = (j << 8) | (j >>> 24)),
                    (y[w] = j);
                  var j =
                    (O * 16843009) ^ (q * 65537) ^ (U * 257) ^ (w * 16843008);
                  (g[T] = (j << 24) | (j >>> 8)),
                    (b[T] = (j << 16) | (j >>> 16)),
                    (S[T] = (j << 8) | (j >>> 24)),
                    (A[T] = j),
                    w
                      ? ((w = U ^ D[D[D[O ^ U]]]), (L ^= D[D[L]]))
                      : (w = L = 1);
                }
              })();
              var R = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                C = (f.AES = c.extend({
                  _doReset: function () {
                    var D;
                    if (!(this._nRounds && this._keyPriorReset === this._key)) {
                      for (
                        var _ = (this._keyPriorReset = this._key),
                          w = _.words,
                          L = _.sigBytes / 4,
                          T = (this._nRounds = L + 6),
                          U = (T + 1) * 4,
                          q = (this._keySchedule = []),
                          O = 0;
                        O < U;
                        O++
                      )
                        O < L
                          ? (q[O] = w[O])
                          : ((D = q[O - 1]),
                            O % L
                              ? L > 6 &&
                                O % L == 4 &&
                                (D =
                                  (p[D >>> 24] << 24) |
                                  (p[(D >>> 16) & 255] << 16) |
                                  (p[(D >>> 8) & 255] << 8) |
                                  p[D & 255])
                              : ((D = (D << 8) | (D >>> 24)),
                                (D =
                                  (p[D >>> 24] << 24) |
                                  (p[(D >>> 16) & 255] << 16) |
                                  (p[(D >>> 8) & 255] << 8) |
                                  p[D & 255]),
                                (D ^= R[(O / L) | 0] << 24)),
                            (q[O] = q[O - L] ^ D));
                      for (
                        var j = (this._invKeySchedule = []), $ = 0;
                        $ < U;
                        $++
                      ) {
                        var O = U - $;
                        if ($ % 4) var D = q[O];
                        else var D = q[O - 4];
                        $ < 4 || O <= 4
                          ? (j[$] = D)
                          : (j[$] =
                              g[p[D >>> 24]] ^
                              b[p[(D >>> 16) & 255]] ^
                              S[p[(D >>> 8) & 255]] ^
                              A[p[D & 255]]);
                      }
                    }
                  },
                  encryptBlock: function (D, _) {
                    this._doCryptBlock(D, _, this._keySchedule, h, m, v, y, p);
                  },
                  decryptBlock: function (D, _) {
                    var w = D[_ + 1];
                    (D[_ + 1] = D[_ + 3]),
                      (D[_ + 3] = w),
                      this._doCryptBlock(
                        D,
                        _,
                        this._invKeySchedule,
                        g,
                        b,
                        S,
                        A,
                        x,
                      );
                    var w = D[_ + 1];
                    (D[_ + 1] = D[_ + 3]), (D[_ + 3] = w);
                  },
                  _doCryptBlock: function (D, _, w, L, T, U, q, O) {
                    for (
                      var j = this._nRounds,
                        $ = D[_] ^ w[0],
                        I = D[_ + 1] ^ w[1],
                        le = D[_ + 2] ^ w[2],
                        ce = D[_ + 3] ^ w[3],
                        ee = 4,
                        oe = 1;
                      oe < j;
                      oe++
                    ) {
                      var ie =
                          L[$ >>> 24] ^
                          T[(I >>> 16) & 255] ^
                          U[(le >>> 8) & 255] ^
                          q[ce & 255] ^
                          w[ee++],
                        ye =
                          L[I >>> 24] ^
                          T[(le >>> 16) & 255] ^
                          U[(ce >>> 8) & 255] ^
                          q[$ & 255] ^
                          w[ee++],
                        F =
                          L[le >>> 24] ^
                          T[(ce >>> 16) & 255] ^
                          U[($ >>> 8) & 255] ^
                          q[I & 255] ^
                          w[ee++],
                        z =
                          L[ce >>> 24] ^
                          T[($ >>> 16) & 255] ^
                          U[(I >>> 8) & 255] ^
                          q[le & 255] ^
                          w[ee++];
                      ($ = ie), (I = ye), (le = F), (ce = z);
                    }
                    var ie =
                        ((O[$ >>> 24] << 24) |
                          (O[(I >>> 16) & 255] << 16) |
                          (O[(le >>> 8) & 255] << 8) |
                          O[ce & 255]) ^
                        w[ee++],
                      ye =
                        ((O[I >>> 24] << 24) |
                          (O[(le >>> 16) & 255] << 16) |
                          (O[(ce >>> 8) & 255] << 8) |
                          O[$ & 255]) ^
                        w[ee++],
                      F =
                        ((O[le >>> 24] << 24) |
                          (O[(ce >>> 16) & 255] << 16) |
                          (O[($ >>> 8) & 255] << 8) |
                          O[I & 255]) ^
                        w[ee++],
                      z =
                        ((O[ce >>> 24] << 24) |
                          (O[($ >>> 16) & 255] << 16) |
                          (O[(I >>> 8) & 255] << 8) |
                          O[le & 255]) ^
                        w[ee++];
                    (D[_] = ie),
                      (D[_ + 1] = ye),
                      (D[_ + 2] = F),
                      (D[_ + 3] = z);
                  },
                  keySize: 256 / 32,
                }));
              s.AES = c._createHelper(C);
            })(),
            r.AES
          );
        });
      })(Au)),
    Au.exports
  );
}
var Su = { exports: {} },
  A3 = Su.exports,
  av;
function S3() {
  return (
    av ||
      ((av = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), sa(), oa(), Er(), Ut());
        })(A3, function (r) {
          return (
            (function () {
              var s = r,
                l = s.lib,
                c = l.WordArray,
                f = l.BlockCipher,
                p = s.algo,
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
                v = [
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
                y = [
                  4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504,
                  2147483679,
                ],
                g = (p.DES = f.extend({
                  _doReset: function () {
                    for (
                      var R = this._key, C = R.words, D = [], _ = 0;
                      _ < 56;
                      _++
                    ) {
                      var w = x[_] - 1;
                      D[_] = (C[w >>> 5] >>> (31 - (w % 32))) & 1;
                    }
                    for (var L = (this._subKeys = []), T = 0; T < 16; T++) {
                      for (var U = (L[T] = []), q = m[T], _ = 0; _ < 24; _++)
                        (U[(_ / 6) | 0] |=
                          D[(h[_] - 1 + q) % 28] << (31 - (_ % 6))),
                          (U[4 + ((_ / 6) | 0)] |=
                            D[28 + ((h[_ + 24] - 1 + q) % 28)] <<
                            (31 - (_ % 6)));
                      U[0] = (U[0] << 1) | (U[0] >>> 31);
                      for (var _ = 1; _ < 7; _++)
                        U[_] = U[_] >>> ((_ - 1) * 4 + 3);
                      U[7] = (U[7] << 5) | (U[7] >>> 27);
                    }
                    for (var O = (this._invSubKeys = []), _ = 0; _ < 16; _++)
                      O[_] = L[15 - _];
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
                    for (var _ = 0; _ < 16; _++) {
                      for (
                        var w = D[_],
                          L = this._lBlock,
                          T = this._rBlock,
                          U = 0,
                          q = 0;
                        q < 8;
                        q++
                      )
                        U |= v[q][((T ^ w[q]) & y[q]) >>> 0];
                      (this._lBlock = T), (this._rBlock = L ^ U);
                    }
                    var O = this._lBlock;
                    (this._lBlock = this._rBlock),
                      (this._rBlock = O),
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
              var A = (p.TripleDES = f.extend({
                _doReset: function () {
                  var R = this._key,
                    C = R.words;
                  if (C.length !== 2 && C.length !== 4 && C.length < 6)
                    throw new Error(
                      "Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.",
                    );
                  var D = C.slice(0, 2),
                    _ = C.length < 4 ? C.slice(0, 2) : C.slice(2, 4),
                    w = C.length < 6 ? C.slice(0, 2) : C.slice(4, 6);
                  (this._des1 = g.createEncryptor(c.create(D))),
                    (this._des2 = g.createEncryptor(c.create(_))),
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
            r.TripleDES
          );
        });
      })(Su)),
    Su.exports
  );
}
var Cu = { exports: {} },
  C3 = Cu.exports,
  sv;
function D3() {
  return (
    sv ||
      ((sv = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), sa(), oa(), Er(), Ut());
        })(C3, function (r) {
          return (
            (function () {
              var s = r,
                l = s.lib,
                c = l.StreamCipher,
                f = s.algo,
                p = (f.RC4 = c.extend({
                  _doReset: function () {
                    for (
                      var m = this._key,
                        v = m.words,
                        y = m.sigBytes,
                        g = (this._S = []),
                        b = 0;
                      b < 256;
                      b++
                    )
                      g[b] = b;
                    for (var b = 0, S = 0; b < 256; b++) {
                      var A = b % y,
                        R = (v[A >>> 2] >>> (24 - (A % 4) * 8)) & 255;
                      S = (S + g[b] + R) % 256;
                      var C = g[b];
                      (g[b] = g[S]), (g[S] = C);
                    }
                    this._i = this._j = 0;
                  },
                  _doProcessBlock: function (m, v) {
                    m[v] ^= x.call(this);
                  },
                  keySize: 256 / 32,
                  ivSize: 0,
                }));
              function x() {
                for (
                  var m = this._S, v = this._i, y = this._j, g = 0, b = 0;
                  b < 4;
                  b++
                ) {
                  (v = (v + 1) % 256), (y = (y + m[v]) % 256);
                  var S = m[v];
                  (m[v] = m[y]),
                    (m[y] = S),
                    (g |= m[(m[v] + m[y]) % 256] << (24 - b * 8));
                }
                return (this._i = v), (this._j = y), g;
              }
              s.RC4 = c._createHelper(p);
              var h = (f.RC4Drop = p.extend({
                cfg: p.cfg.extend({ drop: 192 }),
                _doReset: function () {
                  p._doReset.call(this);
                  for (var m = this.cfg.drop; m > 0; m--) x.call(this);
                },
              }));
              s.RC4Drop = c._createHelper(h);
            })(),
            r.RC4
          );
        });
      })(Cu)),
    Cu.exports
  );
}
var Du = { exports: {} },
  B3 = Du.exports,
  ov;
function T3() {
  return (
    ov ||
      ((ov = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), sa(), oa(), Er(), Ut());
        })(B3, function (r) {
          return (
            (function () {
              var s = r,
                l = s.lib,
                c = l.StreamCipher,
                f = s.algo,
                p = [],
                x = [],
                h = [],
                m = (f.Rabbit = c.extend({
                  _doReset: function () {
                    for (
                      var y = this._key.words, g = this.cfg.iv, b = 0;
                      b < 4;
                      b++
                    )
                      y[b] =
                        (((y[b] << 8) | (y[b] >>> 24)) & 16711935) |
                        (((y[b] << 24) | (y[b] >>> 8)) & 4278255360);
                    var S = (this._X = [
                        y[0],
                        (y[3] << 16) | (y[2] >>> 16),
                        y[1],
                        (y[0] << 16) | (y[3] >>> 16),
                        y[2],
                        (y[1] << 16) | (y[0] >>> 16),
                        y[3],
                        (y[2] << 16) | (y[1] >>> 16),
                      ]),
                      A = (this._C = [
                        (y[2] << 16) | (y[2] >>> 16),
                        (y[0] & 4294901760) | (y[1] & 65535),
                        (y[3] << 16) | (y[3] >>> 16),
                        (y[1] & 4294901760) | (y[2] & 65535),
                        (y[0] << 16) | (y[0] >>> 16),
                        (y[2] & 4294901760) | (y[3] & 65535),
                        (y[1] << 16) | (y[1] >>> 16),
                        (y[3] & 4294901760) | (y[0] & 65535),
                      ]);
                    this._b = 0;
                    for (var b = 0; b < 4; b++) v.call(this);
                    for (var b = 0; b < 8; b++) A[b] ^= S[(b + 4) & 7];
                    if (g) {
                      var R = g.words,
                        C = R[0],
                        D = R[1],
                        _ =
                          (((C << 8) | (C >>> 24)) & 16711935) |
                          (((C << 24) | (C >>> 8)) & 4278255360),
                        w =
                          (((D << 8) | (D >>> 24)) & 16711935) |
                          (((D << 24) | (D >>> 8)) & 4278255360),
                        L = (_ >>> 16) | (w & 4294901760),
                        T = (w << 16) | (_ & 65535);
                      (A[0] ^= _),
                        (A[1] ^= L),
                        (A[2] ^= w),
                        (A[3] ^= T),
                        (A[4] ^= _),
                        (A[5] ^= L),
                        (A[6] ^= w),
                        (A[7] ^= T);
                      for (var b = 0; b < 4; b++) v.call(this);
                    }
                  },
                  _doProcessBlock: function (y, g) {
                    var b = this._X;
                    v.call(this),
                      (p[0] = b[0] ^ (b[5] >>> 16) ^ (b[3] << 16)),
                      (p[1] = b[2] ^ (b[7] >>> 16) ^ (b[5] << 16)),
                      (p[2] = b[4] ^ (b[1] >>> 16) ^ (b[7] << 16)),
                      (p[3] = b[6] ^ (b[3] >>> 16) ^ (b[1] << 16));
                    for (var S = 0; S < 4; S++)
                      (p[S] =
                        (((p[S] << 8) | (p[S] >>> 24)) & 16711935) |
                        (((p[S] << 24) | (p[S] >>> 8)) & 4278255360)),
                        (y[g + S] ^= p[S]);
                  },
                  blockSize: 128 / 32,
                  ivSize: 64 / 32,
                }));
              function v() {
                for (var y = this._X, g = this._C, b = 0; b < 8; b++)
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
                  var S = y[b] + g[b],
                    A = S & 65535,
                    R = S >>> 16,
                    C = ((((A * A) >>> 17) + A * R) >>> 15) + R * R,
                    D = (((S & 4294901760) * S) | 0) + (((S & 65535) * S) | 0);
                  h[b] = C ^ D;
                }
                (y[0] =
                  (h[0] +
                    ((h[7] << 16) | (h[7] >>> 16)) +
                    ((h[6] << 16) | (h[6] >>> 16))) |
                  0),
                  (y[1] = (h[1] + ((h[0] << 8) | (h[0] >>> 24)) + h[7]) | 0),
                  (y[2] =
                    (h[2] +
                      ((h[1] << 16) | (h[1] >>> 16)) +
                      ((h[0] << 16) | (h[0] >>> 16))) |
                    0),
                  (y[3] = (h[3] + ((h[2] << 8) | (h[2] >>> 24)) + h[1]) | 0),
                  (y[4] =
                    (h[4] +
                      ((h[3] << 16) | (h[3] >>> 16)) +
                      ((h[2] << 16) | (h[2] >>> 16))) |
                    0),
                  (y[5] = (h[5] + ((h[4] << 8) | (h[4] >>> 24)) + h[3]) | 0),
                  (y[6] =
                    (h[6] +
                      ((h[5] << 16) | (h[5] >>> 16)) +
                      ((h[4] << 16) | (h[4] >>> 16))) |
                    0),
                  (y[7] = (h[7] + ((h[6] << 8) | (h[6] >>> 24)) + h[5]) | 0);
              }
              s.Rabbit = c._createHelper(m);
            })(),
            r.Rabbit
          );
        });
      })(Du)),
    Du.exports
  );
}
var Bu = { exports: {} },
  _3 = Bu.exports,
  lv;
function R3() {
  return (
    lv ||
      ((lv = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), sa(), oa(), Er(), Ut());
        })(_3, function (r) {
          return (
            (function () {
              var s = r,
                l = s.lib,
                c = l.StreamCipher,
                f = s.algo,
                p = [],
                x = [],
                h = [],
                m = (f.RabbitLegacy = c.extend({
                  _doReset: function () {
                    var y = this._key.words,
                      g = this.cfg.iv,
                      b = (this._X = [
                        y[0],
                        (y[3] << 16) | (y[2] >>> 16),
                        y[1],
                        (y[0] << 16) | (y[3] >>> 16),
                        y[2],
                        (y[1] << 16) | (y[0] >>> 16),
                        y[3],
                        (y[2] << 16) | (y[1] >>> 16),
                      ]),
                      S = (this._C = [
                        (y[2] << 16) | (y[2] >>> 16),
                        (y[0] & 4294901760) | (y[1] & 65535),
                        (y[3] << 16) | (y[3] >>> 16),
                        (y[1] & 4294901760) | (y[2] & 65535),
                        (y[0] << 16) | (y[0] >>> 16),
                        (y[2] & 4294901760) | (y[3] & 65535),
                        (y[1] << 16) | (y[1] >>> 16),
                        (y[3] & 4294901760) | (y[0] & 65535),
                      ]);
                    this._b = 0;
                    for (var A = 0; A < 4; A++) v.call(this);
                    for (var A = 0; A < 8; A++) S[A] ^= b[(A + 4) & 7];
                    if (g) {
                      var R = g.words,
                        C = R[0],
                        D = R[1],
                        _ =
                          (((C << 8) | (C >>> 24)) & 16711935) |
                          (((C << 24) | (C >>> 8)) & 4278255360),
                        w =
                          (((D << 8) | (D >>> 24)) & 16711935) |
                          (((D << 24) | (D >>> 8)) & 4278255360),
                        L = (_ >>> 16) | (w & 4294901760),
                        T = (w << 16) | (_ & 65535);
                      (S[0] ^= _),
                        (S[1] ^= L),
                        (S[2] ^= w),
                        (S[3] ^= T),
                        (S[4] ^= _),
                        (S[5] ^= L),
                        (S[6] ^= w),
                        (S[7] ^= T);
                      for (var A = 0; A < 4; A++) v.call(this);
                    }
                  },
                  _doProcessBlock: function (y, g) {
                    var b = this._X;
                    v.call(this),
                      (p[0] = b[0] ^ (b[5] >>> 16) ^ (b[3] << 16)),
                      (p[1] = b[2] ^ (b[7] >>> 16) ^ (b[5] << 16)),
                      (p[2] = b[4] ^ (b[1] >>> 16) ^ (b[7] << 16)),
                      (p[3] = b[6] ^ (b[3] >>> 16) ^ (b[1] << 16));
                    for (var S = 0; S < 4; S++)
                      (p[S] =
                        (((p[S] << 8) | (p[S] >>> 24)) & 16711935) |
                        (((p[S] << 24) | (p[S] >>> 8)) & 4278255360)),
                        (y[g + S] ^= p[S]);
                  },
                  blockSize: 128 / 32,
                  ivSize: 64 / 32,
                }));
              function v() {
                for (var y = this._X, g = this._C, b = 0; b < 8; b++)
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
                  var S = y[b] + g[b],
                    A = S & 65535,
                    R = S >>> 16,
                    C = ((((A * A) >>> 17) + A * R) >>> 15) + R * R,
                    D = (((S & 4294901760) * S) | 0) + (((S & 65535) * S) | 0);
                  h[b] = C ^ D;
                }
                (y[0] =
                  (h[0] +
                    ((h[7] << 16) | (h[7] >>> 16)) +
                    ((h[6] << 16) | (h[6] >>> 16))) |
                  0),
                  (y[1] = (h[1] + ((h[0] << 8) | (h[0] >>> 24)) + h[7]) | 0),
                  (y[2] =
                    (h[2] +
                      ((h[1] << 16) | (h[1] >>> 16)) +
                      ((h[0] << 16) | (h[0] >>> 16))) |
                    0),
                  (y[3] = (h[3] + ((h[2] << 8) | (h[2] >>> 24)) + h[1]) | 0),
                  (y[4] =
                    (h[4] +
                      ((h[3] << 16) | (h[3] >>> 16)) +
                      ((h[2] << 16) | (h[2] >>> 16))) |
                    0),
                  (y[5] = (h[5] + ((h[4] << 8) | (h[4] >>> 24)) + h[3]) | 0),
                  (y[6] =
                    (h[6] +
                      ((h[5] << 16) | (h[5] >>> 16)) +
                      ((h[4] << 16) | (h[4] >>> 16))) |
                    0),
                  (y[7] = (h[7] + ((h[6] << 8) | (h[6] >>> 24)) + h[5]) | 0);
              }
              s.RabbitLegacy = c._createHelper(m);
            })(),
            r.RabbitLegacy
          );
        });
      })(Bu)),
    Bu.exports
  );
}
var Tu = { exports: {} },
  w3 = Tu.exports,
  uv;
function O3() {
  return (
    uv ||
      ((uv = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(qe(), sa(), oa(), Er(), Ut());
        })(w3, function (r) {
          return (
            (function () {
              var s = r,
                l = s.lib,
                c = l.BlockCipher,
                f = s.algo;
              const p = 16,
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
              function v(A, R) {
                let C = (R >> 24) & 255,
                  D = (R >> 16) & 255,
                  _ = (R >> 8) & 255,
                  w = R & 255,
                  L = A.sbox[0][C] + A.sbox[1][D];
                return (L = L ^ A.sbox[2][_]), (L = L + A.sbox[3][w]), L;
              }
              function y(A, R, C) {
                let D = R,
                  _ = C,
                  w;
                for (let L = 0; L < p; ++L)
                  (D = D ^ A.pbox[L]),
                    (_ = v(A, D) ^ _),
                    (w = D),
                    (D = _),
                    (_ = w);
                return (
                  (w = D),
                  (D = _),
                  (_ = w),
                  (_ = _ ^ A.pbox[p]),
                  (D = D ^ A.pbox[p + 1]),
                  { left: D, right: _ }
                );
              }
              function g(A, R, C) {
                let D = R,
                  _ = C,
                  w;
                for (let L = p + 1; L > 1; --L)
                  (D = D ^ A.pbox[L]),
                    (_ = v(A, D) ^ _),
                    (w = D),
                    (D = _),
                    (_ = w);
                return (
                  (w = D),
                  (D = _),
                  (_ = w),
                  (_ = _ ^ A.pbox[1]),
                  (D = D ^ A.pbox[0]),
                  { left: D, right: _ }
                );
              }
              function b(A, R, C) {
                for (let T = 0; T < 4; T++) {
                  A.sbox[T] = [];
                  for (let U = 0; U < 256; U++) A.sbox[T][U] = h[T][U];
                }
                let D = 0;
                for (let T = 0; T < p + 2; T++)
                  (A.pbox[T] = x[T] ^ R[D]), D++, D >= C && (D = 0);
                let _ = 0,
                  w = 0,
                  L = 0;
                for (let T = 0; T < p + 2; T += 2)
                  (L = y(A, _, w)),
                    (_ = L.left),
                    (w = L.right),
                    (A.pbox[T] = _),
                    (A.pbox[T + 1] = w);
                for (let T = 0; T < 4; T++)
                  for (let U = 0; U < 256; U += 2)
                    (L = y(A, _, w)),
                      (_ = L.left),
                      (w = L.right),
                      (A.sbox[T][U] = _),
                      (A.sbox[T][U + 1] = w);
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
                  var C = y(m, A[R], A[R + 1]);
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
            r.Blowfish
          );
        });
      })(Tu)),
    Tu.exports
  );
}
var M3 = Gl.exports,
  cv;
function F3() {
  return (
    cv ||
      ((cv = 1),
      (function (t, n) {
        (function (r, s, l) {
          t.exports = s(
            qe(),
            Iu(),
            RA(),
            OA(),
            sa(),
            LA(),
            oa(),
            dg(),
            Fh(),
            VA(),
            pg(),
            jA(),
            YA(),
            GA(),
            Lh(),
            ZA(),
            Er(),
            Ut(),
            IA(),
            t3(),
            i3(),
            a3(),
            o3(),
            u3(),
            f3(),
            d3(),
            x3(),
            v3(),
            g3(),
            b3(),
            S3(),
            D3(),
            T3(),
            R3(),
            O3(),
          );
        })(M3, function (r) {
          return r;
        });
      })(Gl)),
    Gl.exports
  );
}
var L3 = F3();
const PT = Zu(L3),
  Uh = J.createContext({});
function zh(t) {
  const n = J.useRef(null);
  return n.current === null && (n.current = t()), n.current;
}
const Nh = typeof window != "undefined",
  xg = Nh ? J.useLayoutEffect : J.useEffect,
  ec = J.createContext(null);
function Hh(t, n) {
  t.indexOf(n) === -1 && t.push(n);
}
function Vh(t, n) {
  const r = t.indexOf(n);
  r > -1 && t.splice(r, 1);
}
const Vi = (t, n, r) => (r > n ? n : r < t ? t : r);
let kh = () => {};
const ki = {},
  mg = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function vg(t) {
  return typeof t == "object" && t !== null;
}
const yg = (t) => /^0[^.\s]+$/u.test(t);
function qh(t) {
  let n;
  return () => (n === void 0 && (n = t()), n);
}
const qn = (t) => t,
  U3 = (t, n) => (r) => n(t(r)),
  So = (...t) => t.reduce(U3),
  xo = (t, n, r) => {
    const s = n - t;
    return s === 0 ? 1 : (r - t) / s;
  };
class jh {
  constructor() {
    this.subscriptions = [];
  }
  add(n) {
    return Hh(this.subscriptions, n), () => Vh(this.subscriptions, n);
  }
  notify(n, r, s) {
    const l = this.subscriptions.length;
    if (l)
      if (l === 1) this.subscriptions[0](n, r, s);
      else
        for (let c = 0; c < l; c++) {
          const f = this.subscriptions[c];
          f && f(n, r, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const di = (t) => t * 1e3,
  kn = (t) => t / 1e3;
function gg(t, n) {
  return n ? t * (1e3 / n) : 0;
}
const Eg = (t, n, r) =>
    (((1 - 3 * r + 3 * n) * t + (3 * r - 6 * n)) * t + 3 * n) * t,
  z3 = 1e-7,
  N3 = 12;
function H3(t, n, r, s, l) {
  let c,
    f,
    p = 0;
  do (f = n + (r - n) / 2), (c = Eg(f, s, l) - t), c > 0 ? (r = f) : (n = f);
  while (Math.abs(c) > z3 && ++p < N3);
  return f;
}
function Co(t, n, r, s) {
  if (t === n && r === s) return qn;
  const l = (c) => H3(c, 0, 1, t, r);
  return (c) => (c === 0 || c === 1 ? c : Eg(l(c), n, s));
}
const bg = (t) => (n) => (n <= 0.5 ? t(2 * n) / 2 : (2 - t(2 * (1 - n))) / 2),
  Ag = (t) => (n) => 1 - t(1 - n),
  Sg = Co(0.33, 1.53, 0.69, 0.99),
  Ph = Ag(Sg),
  Cg = bg(Ph),
  Dg = (t) =>
    (t *= 2) < 1 ? 0.5 * Ph(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  Yh = (t) => 1 - Math.sin(Math.acos(t)),
  Bg = Ag(Yh),
  Tg = bg(Yh),
  V3 = Co(0.42, 0, 1, 1),
  k3 = Co(0, 0, 0.58, 1),
  _g = Co(0.42, 0, 0.58, 1),
  q3 = (t) => Array.isArray(t) && typeof t[0] != "number",
  Rg = (t) => Array.isArray(t) && typeof t[0] == "number",
  j3 = {
    linear: qn,
    easeIn: V3,
    easeInOut: _g,
    easeOut: k3,
    circIn: Yh,
    circInOut: Tg,
    circOut: Bg,
    backIn: Ph,
    backInOut: Cg,
    backOut: Sg,
    anticipate: Dg,
  },
  P3 = (t) => typeof t == "string",
  fv = (t) => {
    if (Rg(t)) {
      kh(t.length === 4);
      const [n, r, s, l] = t;
      return Co(n, r, s, l);
    } else if (P3(t)) return j3[t];
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
function Y3(t, n) {
  let r = new Set(),
    s = new Set(),
    l = !1,
    c = !1;
  const f = new WeakSet();
  let p = { delta: 0, timestamp: 0, isProcessing: !1 };
  function x(m) {
    f.has(m) && (h.schedule(m), t()), m(p);
  }
  const h = {
    schedule: (m, v = !1, y = !1) => {
      const b = y && l ? r : s;
      return v && f.add(m), b.has(m) || b.add(m), m;
    },
    cancel: (m) => {
      s.delete(m), f.delete(m);
    },
    process: (m) => {
      if (((p = m), l)) {
        c = !0;
        return;
      }
      (l = !0),
        ([r, s] = [s, r]),
        r.forEach(x),
        r.clear(),
        (l = !1),
        c && ((c = !1), h.process(m));
    },
  };
  return h;
}
const X3 = 40;
function wg(t, n) {
  let r = !1,
    s = !0;
  const l = { delta: 0, timestamp: 0, isProcessing: !1 },
    c = () => (r = !0),
    f = Hl.reduce((D, _) => ((D[_] = Y3(c)), D), {}),
    {
      setup: p,
      read: x,
      resolveKeyframes: h,
      preUpdate: m,
      update: v,
      preRender: y,
      render: g,
      postRender: b,
    } = f,
    S = () => {
      const D = ki.useManualTiming ? l.timestamp : performance.now();
      (r = !1),
        ki.useManualTiming ||
          (l.delta = s ? 1e3 / 60 : Math.max(Math.min(D - l.timestamp, X3), 1)),
        (l.timestamp = D),
        (l.isProcessing = !0),
        p.process(l),
        x.process(l),
        h.process(l),
        m.process(l),
        v.process(l),
        y.process(l),
        g.process(l),
        b.process(l),
        (l.isProcessing = !1),
        r && n && ((s = !1), t(S));
    },
    A = () => {
      (r = !0), (s = !0), l.isProcessing || t(S);
    };
  return {
    schedule: Hl.reduce((D, _) => {
      const w = f[_];
      return (D[_] = (L, T = !1, U = !1) => (r || A(), w.schedule(L, T, U))), D;
    }, {}),
    cancel: (D) => {
      for (let _ = 0; _ < Hl.length; _++) f[Hl[_]].cancel(D);
    },
    state: l,
    steps: f,
  };
}
const {
  schedule: lt,
  cancel: vr,
  state: qt,
  steps: Bf,
} = wg(
  typeof requestAnimationFrame != "undefined" ? requestAnimationFrame : qn,
  !0,
);
let _u;
function G3() {
  _u = void 0;
}
const ln = {
    now: () => (
      _u === void 0 &&
        ln.set(
          qt.isProcessing || ki.useManualTiming
            ? qt.timestamp
            : performance.now(),
        ),
      _u
    ),
    set: (t) => {
      (_u = t), queueMicrotask(G3);
    },
  },
  Og = (t) => (n) => typeof n == "string" && n.startsWith(t),
  Xh = Og("--"),
  K3 = Og("var(--"),
  Gh = (t) => (K3(t) ? Q3.test(t.split("/*")[0].trim()) : !1),
  Q3 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Ia = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t,
  },
  mo = ze(ue({}, Ia), { transform: (t) => Vi(0, 1, t) }),
  Vl = ze(ue({}, Ia), { default: 1 }),
  oo = (t) => Math.round(t * 1e5) / 1e5,
  Kh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Z3(t) {
  return t == null;
}
const W3 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Qh = (t, n) => (r) =>
    !!(
      (typeof r == "string" && W3.test(r) && r.startsWith(t)) ||
      (n && !Z3(r) && Object.prototype.hasOwnProperty.call(r, n))
    ),
  Mg = (t, n, r) => (s) => {
    if (typeof s != "string") return s;
    const [l, c, f, p] = s.match(Kh);
    return {
      [t]: parseFloat(l),
      [n]: parseFloat(c),
      [r]: parseFloat(f),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  $3 = (t) => Vi(0, 255, t),
  Tf = ze(ue({}, Ia), { transform: (t) => Math.round($3(t)) }),
  Jr = {
    test: Qh("rgb", "red"),
    parse: Mg("red", "green", "blue"),
    transform: ({ red: t, green: n, blue: r, alpha: s = 1 }) =>
      "rgba(" +
      Tf.transform(t) +
      ", " +
      Tf.transform(n) +
      ", " +
      Tf.transform(r) +
      ", " +
      oo(mo.transform(s)) +
      ")",
  };
function J3(t) {
  let n = "",
    r = "",
    s = "",
    l = "";
  return (
    t.length > 5
      ? ((n = t.substring(1, 3)),
        (r = t.substring(3, 5)),
        (s = t.substring(5, 7)),
        (l = t.substring(7, 9)))
      : ((n = t.substring(1, 2)),
        (r = t.substring(2, 3)),
        (s = t.substring(3, 4)),
        (l = t.substring(4, 5)),
        (n += n),
        (r += r),
        (s += s),
        (l += l)),
    {
      red: parseInt(n, 16),
      green: parseInt(r, 16),
      blue: parseInt(s, 16),
      alpha: l ? parseInt(l, 16) / 255 : 1,
    }
  );
}
const $f = { test: Qh("#"), parse: J3, transform: Jr.transform },
  Do = (t) => ({
    test: (n) =>
      typeof n == "string" && n.endsWith(t) && n.split(" ").length === 1,
    parse: parseFloat,
    transform: (n) => `${n}${t}`,
  }),
  dr = Do("deg"),
  pi = Do("%"),
  Be = Do("px"),
  I3 = Do("vh"),
  eS = Do("vw"),
  hv = ze(ue({}, pi), {
    parse: (t) => pi.parse(t) / 100,
    transform: (t) => pi.transform(t * 100),
  }),
  ja = {
    test: Qh("hsl", "hue"),
    parse: Mg("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: n, lightness: r, alpha: s = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      pi.transform(oo(n)) +
      ", " +
      pi.transform(oo(r)) +
      ", " +
      oo(mo.transform(s)) +
      ")",
  },
  Bt = {
    test: (t) => Jr.test(t) || $f.test(t) || ja.test(t),
    parse: (t) =>
      Jr.test(t) ? Jr.parse(t) : ja.test(t) ? ja.parse(t) : $f.parse(t),
    transform: (t) =>
      typeof t == "string"
        ? t
        : t.hasOwnProperty("red")
          ? Jr.transform(t)
          : ja.transform(t),
    getAnimatableNone: (t) => {
      const n = Bt.parse(t);
      return (n.alpha = 0), Bt.transform(n);
    },
  },
  tS =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function nS(t) {
  var n, r;
  return (
    isNaN(t) &&
    typeof t == "string" &&
    (((n = t.match(Kh)) == null ? void 0 : n.length) || 0) +
      (((r = t.match(tS)) == null ? void 0 : r.length) || 0) >
      0
  );
}
const Fg = "number",
  Lg = "color",
  iS = "var",
  rS = "var(",
  dv = "${}",
  aS =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function vo(t) {
  const n = t.toString(),
    r = [],
    s = { color: [], number: [], var: [] },
    l = [];
  let c = 0;
  const p = n
    .replace(
      aS,
      (x) => (
        Bt.test(x)
          ? (s.color.push(c), l.push(Lg), r.push(Bt.parse(x)))
          : x.startsWith(rS)
            ? (s.var.push(c), l.push(iS), r.push(x))
            : (s.number.push(c), l.push(Fg), r.push(parseFloat(x))),
        ++c,
        dv
      ),
    )
    .split(dv);
  return { values: r, split: p, indexes: s, types: l };
}
function Ug(t) {
  return vo(t).values;
}
function zg(t) {
  const { split: n, types: r } = vo(t),
    s = n.length;
  return (l) => {
    let c = "";
    for (let f = 0; f < s; f++)
      if (((c += n[f]), l[f] !== void 0)) {
        const p = r[f];
        p === Fg
          ? (c += oo(l[f]))
          : p === Lg
            ? (c += Bt.transform(l[f]))
            : (c += l[f]);
      }
    return c;
  };
}
const sS = (t) =>
  typeof t == "number" ? 0 : Bt.test(t) ? Bt.getAnimatableNone(t) : t;
function oS(t) {
  const n = Ug(t);
  return zg(t)(n.map(sS));
}
const yr = {
  test: nS,
  parse: Ug,
  createTransformer: zg,
  getAnimatableNone: oS,
};
function _f(t, n, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? t + (n - t) * 6 * r
      : r < 1 / 2
        ? n
        : r < 2 / 3
          ? t + (n - t) * (2 / 3 - r) * 6
          : t
  );
}
function lS({ hue: t, saturation: n, lightness: r, alpha: s }) {
  (t /= 360), (n /= 100), (r /= 100);
  let l = 0,
    c = 0,
    f = 0;
  if (!n) l = c = f = r;
  else {
    const p = r < 0.5 ? r * (1 + n) : r + n - r * n,
      x = 2 * r - p;
    (l = _f(x, p, t + 1 / 3)), (c = _f(x, p, t)), (f = _f(x, p, t - 1 / 3));
  }
  return {
    red: Math.round(l * 255),
    green: Math.round(c * 255),
    blue: Math.round(f * 255),
    alpha: s,
  };
}
function Pu(t, n) {
  return (r) => (r > 0 ? n : t);
}
const ht = (t, n, r) => t + (n - t) * r,
  Rf = (t, n, r) => {
    const s = t * t,
      l = r * (n * n - s) + s;
    return l < 0 ? 0 : Math.sqrt(l);
  },
  uS = [$f, Jr, ja],
  cS = (t) => uS.find((n) => n.test(t));
function pv(t) {
  const n = cS(t);
  if (!n) return !1;
  let r = n.parse(t);
  return n === ja && (r = lS(r)), r;
}
const xv = (t, n) => {
    const r = pv(t),
      s = pv(n);
    if (!r || !s) return Pu(t, n);
    const l = ue({}, r);
    return (c) => (
      (l.red = Rf(r.red, s.red, c)),
      (l.green = Rf(r.green, s.green, c)),
      (l.blue = Rf(r.blue, s.blue, c)),
      (l.alpha = ht(r.alpha, s.alpha, c)),
      Jr.transform(l)
    );
  },
  Jf = new Set(["none", "hidden"]);
function fS(t, n) {
  return Jf.has(t) ? (r) => (r <= 0 ? t : n) : (r) => (r >= 1 ? n : t);
}
function hS(t, n) {
  return (r) => ht(t, n, r);
}
function Zh(t) {
  return typeof t == "number"
    ? hS
    : typeof t == "string"
      ? Gh(t)
        ? Pu
        : Bt.test(t)
          ? xv
          : xS
      : Array.isArray(t)
        ? Ng
        : typeof t == "object"
          ? Bt.test(t)
            ? xv
            : dS
          : Pu;
}
function Ng(t, n) {
  const r = [...t],
    s = r.length,
    l = t.map((c, f) => Zh(c)(c, n[f]));
  return (c) => {
    for (let f = 0; f < s; f++) r[f] = l[f](c);
    return r;
  };
}
function dS(t, n) {
  const r = ue(ue({}, t), n),
    s = {};
  for (const l in r)
    t[l] !== void 0 && n[l] !== void 0 && (s[l] = Zh(t[l])(t[l], n[l]));
  return (l) => {
    for (const c in s) r[c] = s[c](l);
    return r;
  };
}
function pS(t, n) {
  var l;
  const r = [],
    s = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < n.values.length; c++) {
    const f = n.types[c],
      p = t.indexes[f][s[f]],
      x = (l = t.values[p]) != null ? l : 0;
    (r[c] = x), s[f]++;
  }
  return r;
}
const xS = (t, n) => {
  const r = yr.createTransformer(n),
    s = vo(t),
    l = vo(n);
  return s.indexes.var.length === l.indexes.var.length &&
    s.indexes.color.length === l.indexes.color.length &&
    s.indexes.number.length >= l.indexes.number.length
    ? (Jf.has(t) && !l.values.length) || (Jf.has(n) && !s.values.length)
      ? fS(t, n)
      : So(Ng(pS(s, l), l.values), r)
    : Pu(t, n);
};
function Hg(t, n, r) {
  return typeof t == "number" && typeof n == "number" && typeof r == "number"
    ? ht(t, n, r)
    : Zh(t)(t, n);
}
const mS = (t) => {
    const n = ({ timestamp: r }) => t(r);
    return {
      start: (r = !0) => lt.update(n, r),
      stop: () => vr(n),
      now: () => (qt.isProcessing ? qt.timestamp : ln.now()),
    };
  },
  Vg = (t, n, r = 10) => {
    let s = "";
    const l = Math.max(Math.round(n / r), 2);
    for (let c = 0; c < l; c++)
      s += Math.round(t(c / (l - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${s.substring(0, s.length - 2)})`;
  },
  Yu = 2e4;
function Wh(t) {
  let n = 0;
  const r = 50;
  let s = t.next(n);
  for (; !s.done && n < Yu; ) (n += r), (s = t.next(n));
  return n >= Yu ? 1 / 0 : n;
}
function vS(t, n = 100, r) {
  const s = r(ze(ue({}, t), { keyframes: [0, n] })),
    l = Math.min(Wh(s), Yu);
  return {
    type: "keyframes",
    ease: (c) => s.next(l * c).value / n,
    duration: kn(l),
  };
}
const yS = 5;
function kg(t, n, r) {
  const s = Math.max(n - yS, 0);
  return gg(r - t(s), n - s);
}
const mt = {
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
  wf = 0.001;
function gS({
  duration: t = mt.duration,
  bounce: n = mt.bounce,
  velocity: r = mt.velocity,
  mass: s = mt.mass,
}) {
  let l,
    c,
    f = 1 - n;
  (f = Vi(mt.minDamping, mt.maxDamping, f)),
    (t = Vi(mt.minDuration, mt.maxDuration, kn(t))),
    f < 1
      ? ((l = (h) => {
          const m = h * f,
            v = m * t,
            y = m - r,
            g = If(h, f),
            b = Math.exp(-v);
          return wf - (y / g) * b;
        }),
        (c = (h) => {
          const v = h * f * t,
            y = v * r + r,
            g = Math.pow(f, 2) * Math.pow(h, 2) * t,
            b = Math.exp(-v),
            S = If(Math.pow(h, 2), f);
          return ((-l(h) + wf > 0 ? -1 : 1) * ((y - g) * b)) / S;
        }))
      : ((l = (h) => {
          const m = Math.exp(-h * t),
            v = (h - r) * t + 1;
          return -wf + m * v;
        }),
        (c = (h) => {
          const m = Math.exp(-h * t),
            v = (r - h) * (t * t);
          return m * v;
        }));
  const p = 5 / t,
    x = bS(l, c, p);
  if (((t = di(t)), isNaN(x)))
    return { stiffness: mt.stiffness, damping: mt.damping, duration: t };
  {
    const h = Math.pow(x, 2) * s;
    return { stiffness: h, damping: f * 2 * Math.sqrt(s * h), duration: t };
  }
}
const ES = 12;
function bS(t, n, r) {
  let s = r;
  for (let l = 1; l < ES; l++) s = s - t(s) / n(s);
  return s;
}
function If(t, n) {
  return t * Math.sqrt(1 - n * n);
}
const AS = ["duration", "bounce"],
  SS = ["stiffness", "damping", "mass"];
function mv(t, n) {
  return n.some((r) => t[r] !== void 0);
}
function CS(t) {
  let n = ue(
    {
      velocity: mt.velocity,
      stiffness: mt.stiffness,
      damping: mt.damping,
      mass: mt.mass,
      isResolvedFromDuration: !1,
    },
    t,
  );
  if (!mv(t, SS) && mv(t, AS))
    if (t.visualDuration) {
      const r = t.visualDuration,
        s = (2 * Math.PI) / (r * 1.2),
        l = s * s,
        c = 2 * Vi(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(l);
      n = ze(ue({}, n), { mass: mt.mass, stiffness: l, damping: c });
    } else {
      const r = gS(t);
      (n = ze(ue(ue({}, n), r), { mass: mt.mass })),
        (n.isResolvedFromDuration = !0);
    }
  return n;
}
function Xu(t = mt.visualDuration, n = mt.bounce) {
  const r =
    typeof t != "object"
      ? { visualDuration: t, keyframes: [0, 1], bounce: n }
      : t;
  let { restSpeed: s, restDelta: l } = r;
  const c = r.keyframes[0],
    f = r.keyframes[r.keyframes.length - 1],
    p = { done: !1, value: c },
    {
      stiffness: x,
      damping: h,
      mass: m,
      duration: v,
      velocity: y,
      isResolvedFromDuration: g,
    } = CS(ze(ue({}, r), { velocity: -kn(r.velocity || 0) })),
    b = y || 0,
    S = h / (2 * Math.sqrt(x * m)),
    A = f - c,
    R = kn(Math.sqrt(x / m)),
    C = Math.abs(A) < 5;
  s || (s = C ? mt.restSpeed.granular : mt.restSpeed.default),
    l || (l = C ? mt.restDelta.granular : mt.restDelta.default);
  let D;
  if (S < 1) {
    const w = If(R, S);
    D = (L) => {
      const T = Math.exp(-S * R * L);
      return (
        f - T * (((b + S * R * A) / w) * Math.sin(w * L) + A * Math.cos(w * L))
      );
    };
  } else if (S === 1) D = (w) => f - Math.exp(-R * w) * (A + (b + R * A) * w);
  else {
    const w = R * Math.sqrt(S * S - 1);
    D = (L) => {
      const T = Math.exp(-S * R * L),
        U = Math.min(w * L, 300);
      return (
        f - (T * ((b + S * R * A) * Math.sinh(U) + w * A * Math.cosh(U))) / w
      );
    };
  }
  const _ = {
    calculatedDuration: (g && v) || null,
    next: (w) => {
      const L = D(w);
      if (g) p.done = w >= v;
      else {
        let T = w === 0 ? b : 0;
        S < 1 && (T = w === 0 ? di(b) : kg(D, w, L));
        const U = Math.abs(T) <= s,
          q = Math.abs(f - L) <= l;
        p.done = U && q;
      }
      return (p.value = p.done ? f : L), p;
    },
    toString: () => {
      const w = Math.min(Wh(_), Yu),
        L = Vg((T) => _.next(w * T).value, w, 30);
      return w + "ms " + L;
    },
    toTransition: () => {},
  };
  return _;
}
Xu.applyToOptions = (t) => {
  const n = vS(t, 100, Xu);
  return (
    (t.ease = n.ease), (t.duration = di(n.duration)), (t.type = "keyframes"), t
  );
};
function eh({
  keyframes: t,
  velocity: n = 0,
  power: r = 0.8,
  timeConstant: s = 325,
  bounceDamping: l = 10,
  bounceStiffness: c = 500,
  modifyTarget: f,
  min: p,
  max: x,
  restDelta: h = 0.5,
  restSpeed: m,
}) {
  const v = t[0],
    y = { done: !1, value: v },
    g = (U) => (p !== void 0 && U < p) || (x !== void 0 && U > x),
    b = (U) =>
      p === void 0
        ? x
        : x === void 0 || Math.abs(p - U) < Math.abs(x - U)
          ? p
          : x;
  let S = r * n;
  const A = v + S,
    R = f === void 0 ? A : f(A);
  R !== A && (S = R - v);
  const C = (U) => -S * Math.exp(-U / s),
    D = (U) => R + C(U),
    _ = (U) => {
      const q = C(U),
        O = D(U);
      (y.done = Math.abs(q) <= h), (y.value = y.done ? R : O);
    };
  let w, L;
  const T = (U) => {
    g(y.value) &&
      ((w = U),
      (L = Xu({
        keyframes: [y.value, b(y.value)],
        velocity: kg(D, U, y.value),
        damping: l,
        stiffness: c,
        restDelta: h,
        restSpeed: m,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (U) => {
        let q = !1;
        return (
          !L && w === void 0 && ((q = !0), _(U), T(U)),
          w !== void 0 && U >= w ? L.next(U - w) : (!q && _(U), y)
        );
      },
    }
  );
}
function DS(t, n, r) {
  const s = [],
    l = r || ki.mix || Hg,
    c = t.length - 1;
  for (let f = 0; f < c; f++) {
    let p = l(t[f], t[f + 1]);
    if (n) {
      const x = Array.isArray(n) ? n[f] || qn : n;
      p = So(x, p);
    }
    s.push(p);
  }
  return s;
}
function BS(t, n, { clamp: r = !0, ease: s, mixer: l } = {}) {
  const c = t.length;
  if ((kh(c === n.length), c === 1)) return () => n[0];
  if (c === 2 && n[0] === n[1]) return () => n[1];
  const f = t[0] === t[1];
  t[0] > t[c - 1] && ((t = [...t].reverse()), (n = [...n].reverse()));
  const p = DS(n, s, l),
    x = p.length,
    h = (m) => {
      if (f && m < t[0]) return n[0];
      let v = 0;
      if (x > 1) for (; v < t.length - 2 && !(m < t[v + 1]); v++);
      const y = xo(t[v], t[v + 1], m);
      return p[v](y);
    };
  return r ? (m) => h(Vi(t[0], t[c - 1], m)) : h;
}
function TS(t, n) {
  const r = t[t.length - 1];
  for (let s = 1; s <= n; s++) {
    const l = xo(0, n, s);
    t.push(ht(r, 1, l));
  }
}
function _S(t) {
  const n = [0];
  return TS(n, t.length - 1), n;
}
function RS(t, n) {
  return t.map((r) => r * n);
}
function wS(t, n) {
  return t.map(() => n || _g).splice(0, t.length - 1);
}
function lo({
  duration: t = 300,
  keyframes: n,
  times: r,
  ease: s = "easeInOut",
}) {
  const l = q3(s) ? s.map(fv) : fv(s),
    c = { done: !1, value: n[0] },
    f = RS(r && r.length === n.length ? r : _S(n), t),
    p = BS(f, n, { ease: Array.isArray(l) ? l : wS(n, l) });
  return {
    calculatedDuration: t,
    next: (x) => ((c.value = p(x)), (c.done = x >= t), c),
  };
}
const OS = (t) => t !== null;
function $h(t, { repeat: n, repeatType: r = "loop" }, s, l = 1) {
  const c = t.filter(OS),
    p = l < 0 || (n && r !== "loop" && n % 2 === 1) ? 0 : c.length - 1;
  return !p || s === void 0 ? c[p] : s;
}
const MS = { decay: eh, inertia: eh, tween: lo, keyframes: lo, spring: Xu };
function qg(t) {
  typeof t.type == "string" && (t.type = MS[t.type]);
}
class Jh {
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
  then(n, r) {
    return this.finished.then(n, r);
  }
}
const FS = (t) => t / 100;
class Ih extends Jh {
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
        const { motionValue: r } = this.options;
        r && r.updatedAt !== ln.now() && this.tick(ln.now()),
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
    qg(n);
    const {
      type: r = lo,
      repeat: s = 0,
      repeatDelay: l = 0,
      repeatType: c,
      velocity: f = 0,
    } = n;
    let { keyframes: p } = n;
    const x = r || lo;
    x !== lo &&
      typeof p[0] != "number" &&
      ((this.mixKeyframes = So(FS, Hg(p[0], p[1]))), (p = [0, 100]));
    const h = x(ze(ue({}, n), { keyframes: p }));
    c === "mirror" &&
      (this.mirroredGenerator = x(
        ze(ue({}, n), { keyframes: [...p].reverse(), velocity: -f }),
      )),
      h.calculatedDuration === null && (h.calculatedDuration = Wh(h));
    const { calculatedDuration: m } = h;
    (this.calculatedDuration = m),
      (this.resolvedDuration = m + l),
      (this.totalDuration = this.resolvedDuration * (s + 1) - l),
      (this.generator = h);
  }
  updateTime(n) {
    const r = Math.round(n - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = r);
  }
  tick(n, r = !1) {
    const {
      generator: s,
      totalDuration: l,
      mixKeyframes: c,
      mirroredGenerator: f,
      resolvedDuration: p,
      calculatedDuration: x,
    } = this;
    if (this.startTime === null) return s.next(0);
    const {
      delay: h = 0,
      keyframes: m,
      repeat: v,
      repeatType: y,
      repeatDelay: g,
      type: b,
      onUpdate: S,
      finalKeyframe: A,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, n))
      : this.speed < 0 &&
        (this.startTime = Math.min(n - l / this.speed, this.startTime)),
      r ? (this.currentTime = n) : this.updateTime(n);
    const R = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1),
      C = this.playbackSpeed >= 0 ? R < 0 : R > l;
    (this.currentTime = Math.max(R, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = l);
    let D = this.currentTime,
      _ = s;
    if (v) {
      const U = Math.min(this.currentTime, l) / p;
      let q = Math.floor(U),
        O = U % 1;
      !O && U >= 1 && (O = 1),
        O === 1 && q--,
        (q = Math.min(q, v + 1)),
        !!(q % 2) &&
          (y === "reverse"
            ? ((O = 1 - O), g && (O -= g / p))
            : y === "mirror" && (_ = f)),
        (D = Vi(0, 1, O) * p);
    }
    const w = C ? { done: !1, value: m[0] } : _.next(D);
    c && (w.value = c(w.value));
    let { done: L } = w;
    !C &&
      x !== null &&
      (L =
        this.playbackSpeed >= 0
          ? this.currentTime >= l
          : this.currentTime <= 0);
    const T =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && L));
    return (
      T && b !== eh && (w.value = $h(m, this.options, A, this.speed)),
      S && S(w.value),
      T && this.finish(),
      w
    );
  }
  then(n, r) {
    return this.finished.then(n, r);
  }
  get duration() {
    return kn(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: n = 0 } = this.options || {};
    return this.duration + kn(n);
  }
  get time() {
    return kn(this.currentTime);
  }
  set time(n) {
    var r;
    (n = di(n)),
      (this.currentTime = n),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = n)
        : this.driver &&
          (this.startTime = this.driver.now() - n / this.playbackSpeed),
      (r = this.driver) == null || r.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(n) {
    this.updateTime(ln.now());
    const r = this.playbackSpeed !== n;
    (this.playbackSpeed = n), r && (this.time = kn(this.currentTime));
  }
  play() {
    var l, c;
    if (this.isStopped) return;
    const { driver: n = mS, startTime: r } = this.options;
    this.driver || (this.driver = n((f) => this.tick(f))),
      (c = (l = this.options).onPlay) == null || c.call(l);
    const s = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = s))
      : this.holdTime !== null
        ? (this.startTime = s - this.holdTime)
        : this.startTime || (this.startTime = r != null ? r : s),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(ln.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var n, r;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (r = (n = this.options).onComplete) == null || r.call(n);
  }
  cancel() {
    var n, r;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (r = (n = this.options).onCancel) == null || r.call(n);
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
    var r;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (r = this.driver) == null || r.stop(),
      n.observe(this)
    );
  }
}
function LS(t) {
  var n;
  for (let r = 1; r < t.length; r++) (n = t[r]) != null || (t[r] = t[r - 1]);
}
const Ir = (t) => (t * 180) / Math.PI,
  th = (t) => {
    const n = Ir(Math.atan2(t[1], t[0]));
    return nh(n);
  },
  US = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: th,
    rotateZ: th,
    skewX: (t) => Ir(Math.atan(t[1])),
    skewY: (t) => Ir(Math.atan(t[2])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
  },
  nh = (t) => ((t = t % 360), t < 0 && (t += 360), t),
  vv = th,
  yv = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
  gv = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
  zS = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: yv,
    scaleY: gv,
    scale: (t) => (yv(t) + gv(t)) / 2,
    rotateX: (t) => nh(Ir(Math.atan2(t[6], t[5]))),
    rotateY: (t) => nh(Ir(Math.atan2(-t[2], t[0]))),
    rotateZ: vv,
    rotate: vv,
    skewX: (t) => Ir(Math.atan(t[4])),
    skewY: (t) => Ir(Math.atan(t[1])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
  };
function ih(t) {
  return t.includes("scale") ? 1 : 0;
}
function rh(t, n) {
  if (!t || t === "none") return ih(n);
  const r = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, l;
  if (r) (s = zS), (l = r);
  else {
    const p = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (s = US), (l = p);
  }
  if (!l) return ih(n);
  const c = s[n],
    f = l[1].split(",").map(HS);
  return typeof c == "function" ? c(f) : f[c];
}
const NS = (t, n) => {
  const { transform: r = "none" } = getComputedStyle(t);
  return rh(r, n);
};
function HS(t) {
  return parseFloat(t.trim());
}
const es = [
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
  ts = new Set(es),
  Ev = (t) => t === Ia || t === Be,
  VS = new Set(["x", "y", "z"]),
  kS = es.filter((t) => !VS.has(t));
function qS(t) {
  const n = [];
  return (
    kS.forEach((r) => {
      const s = t.getValue(r);
      s !== void 0 &&
        (n.push([r, s.get()]), s.set(r.startsWith("scale") ? 1 : 0));
    }),
    n
  );
}
const ta = {
  width: ({ x: t }, { paddingLeft: n = "0", paddingRight: r = "0" }) =>
    t.max - t.min - parseFloat(n) - parseFloat(r),
  height: ({ y: t }, { paddingTop: n = "0", paddingBottom: r = "0" }) =>
    t.max - t.min - parseFloat(n) - parseFloat(r),
  top: (t, { top: n }) => parseFloat(n),
  left: (t, { left: n }) => parseFloat(n),
  bottom: ({ y: t }, { top: n }) => parseFloat(n) + (t.max - t.min),
  right: ({ x: t }, { left: n }) => parseFloat(n) + (t.max - t.min),
  x: (t, { transform: n }) => rh(n, "x"),
  y: (t, { transform: n }) => rh(n, "y"),
};
ta.translateX = ta.x;
ta.translateY = ta.y;
const na = new Set();
let ah = !1,
  sh = !1,
  oh = !1;
function jg() {
  if (sh) {
    const t = Array.from(na).filter((s) => s.needsMeasurement),
      n = new Set(t.map((s) => s.element)),
      r = new Map();
    n.forEach((s) => {
      const l = qS(s);
      l.length && (r.set(s, l), s.render());
    }),
      t.forEach((s) => s.measureInitialState()),
      n.forEach((s) => {
        s.render();
        const l = r.get(s);
        l &&
          l.forEach(([c, f]) => {
            var p;
            (p = s.getValue(c)) == null || p.set(f);
          });
      }),
      t.forEach((s) => s.measureEndState()),
      t.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      });
  }
  (sh = !1), (ah = !1), na.forEach((t) => t.complete(oh)), na.clear();
}
function Pg() {
  na.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (sh = !0);
  });
}
function jS() {
  (oh = !0), Pg(), jg(), (oh = !1);
}
class ed {
  constructor(n, r, s, l, c, f = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...n]),
      (this.onComplete = r),
      (this.name = s),
      (this.motionValue = l),
      (this.element = c),
      (this.isAsync = f);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (na.add(this),
          ah || ((ah = !0), lt.read(Pg), lt.resolveKeyframes(jg)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: n,
      name: r,
      element: s,
      motionValue: l,
    } = this;
    if (n[0] === null) {
      const c = l == null ? void 0 : l.get(),
        f = n[n.length - 1];
      if (c !== void 0) n[0] = c;
      else if (s && r) {
        const p = s.readValue(r, f);
        p != null && (n[0] = p);
      }
      n[0] === void 0 && (n[0] = f), l && c === void 0 && l.set(n[0]);
    }
    LS(n);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(n = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, n),
      na.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (na.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const PS = (t) => t.startsWith("--");
function YS(t, n, r) {
  PS(n) ? t.style.setProperty(n, r) : (t.style[n] = r);
}
const XS = qh(() => window.ScrollTimeline !== void 0),
  GS = {};
function KS(t, n) {
  const r = qh(t);
  return () => {
    var s;
    return (s = GS[n]) != null ? s : r();
  };
}
const Yg = KS(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch (t) {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  ao = ([t, n, r, s]) => `cubic-bezier(${t}, ${n}, ${r}, ${s})`,
  bv = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ao([0, 0.65, 0.55, 1]),
    circOut: ao([0.55, 0, 1, 0.45]),
    backIn: ao([0.31, 0.01, 0.66, -0.59]),
    backOut: ao([0.33, 1.53, 0.69, 0.99]),
  };
function Xg(t, n) {
  if (t)
    return typeof t == "function"
      ? Yg()
        ? Vg(t, n)
        : "ease-out"
      : Rg(t)
        ? ao(t)
        : Array.isArray(t)
          ? t.map((r) => Xg(r, n) || bv.easeOut)
          : bv[t];
}
function QS(
  t,
  n,
  r,
  {
    delay: s = 0,
    duration: l = 300,
    repeat: c = 0,
    repeatType: f = "loop",
    ease: p = "easeOut",
    times: x,
  } = {},
  h = void 0,
) {
  const m = { [n]: r };
  x && (m.offset = x);
  const v = Xg(p, l);
  Array.isArray(v) && (m.easing = v);
  const y = {
    delay: s,
    duration: l,
    easing: Array.isArray(v) ? "linear" : v,
    fill: "both",
    iterations: c + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return h && (y.pseudoElement = h), t.animate(m, y);
}
function Gg(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function ZS(r) {
  var s = r,
    { type: t } = s,
    n = zn(s, ["type"]);
  var l, c;
  return Gg(t) && Yg()
    ? t.applyToOptions(n)
    : ((l = n.duration) != null || (n.duration = 300),
      (c = n.ease) != null || (n.ease = "easeOut"),
      n);
}
class WS extends Jh {
  constructor(n) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !n))
      return;
    const {
      element: r,
      name: s,
      keyframes: l,
      pseudoElement: c,
      allowFlatten: f = !1,
      finalKeyframe: p,
      onComplete: x,
    } = n;
    (this.isPseudoElement = !!c),
      (this.allowFlatten = f),
      (this.options = n),
      kh(typeof n.type != "string");
    const h = ZS(n);
    (this.animation = QS(r, s, l, h, c)),
      h.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !c)) {
          const m = $h(l, this.options, p, this.speed);
          this.updateMotionValue ? this.updateMotionValue(m) : YS(r, s, m),
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
    var n, r;
    (r = (n = this.animation).finish) == null || r.call(n);
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
    var n, r;
    this.isPseudoElement ||
      (r = (n = this.animation).commitStyles) == null ||
      r.call(n);
  }
  get duration() {
    var r, s;
    const n =
      ((s =
        (r = this.animation.effect) == null ? void 0 : r.getComputedTiming) ==
      null
        ? void 0
        : s.call(r).duration) || 0;
    return kn(Number(n));
  }
  get iterationDuration() {
    const { delay: n = 0 } = this.options || {};
    return this.duration + kn(n);
  }
  get time() {
    return kn(Number(this.animation.currentTime) || 0);
  }
  set time(n) {
    (this.finishedTime = null), (this.animation.currentTime = di(n));
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
  attachTimeline({ timeline: n, observe: r }) {
    var s;
    return (
      this.allowFlatten &&
        ((s = this.animation.effect) == null ||
          s.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      n && XS() ? ((this.animation.timeline = n), qn) : r(this)
    );
  }
}
const Kg = { anticipate: Dg, backInOut: Cg, circInOut: Tg };
function $S(t) {
  return t in Kg;
}
function JS(t) {
  typeof t.ease == "string" && $S(t.ease) && (t.ease = Kg[t.ease]);
}
const Av = 10;
class IS extends WS {
  constructor(n) {
    JS(n),
      qg(n),
      super(n),
      n.startTime && (this.startTime = n.startTime),
      (this.options = n);
  }
  updateMotionValue(n) {
    var m;
    const h = this.options,
      { motionValue: r, onUpdate: s, onComplete: l, element: c } = h,
      f = zn(h, ["motionValue", "onUpdate", "onComplete", "element"]);
    if (!r) return;
    if (n !== void 0) {
      r.set(n);
      return;
    }
    const p = new Ih(ze(ue({}, f), { autoplay: !1 })),
      x = di((m = this.finishedTime) != null ? m : this.time);
    r.setWithVelocity(p.sample(x - Av).value, p.sample(x).value, Av), p.stop();
  }
}
const Sv = (t, n) =>
  n === "zIndex"
    ? !1
    : !!(
        typeof t == "number" ||
        Array.isArray(t) ||
        (typeof t == "string" &&
          (yr.test(t) || t === "0") &&
          !t.startsWith("url("))
      );
function e6(t) {
  const n = t[0];
  if (t.length === 1) return !0;
  for (let r = 0; r < t.length; r++) if (t[r] !== n) return !0;
}
function t6(t, n, r, s) {
  const l = t[0];
  if (l === null) return !1;
  if (n === "display" || n === "visibility") return !0;
  const c = t[t.length - 1],
    f = Sv(l, n),
    p = Sv(c, n);
  return !f || !p ? !1 : e6(t) || ((r === "spring" || Gg(r)) && s);
}
function lh(t) {
  (t.duration = 0), (t.type = "keyframes");
}
const n6 = new Set(["opacity", "clipPath", "filter", "transform"]),
  i6 = qh(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function r6(t) {
  var m;
  const {
    motionValue: n,
    name: r,
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
    i6() &&
    r &&
    n6.has(r) &&
    (r !== "transform" || !h) &&
    !x &&
    !s &&
    l !== "mirror" &&
    c !== 0 &&
    f !== "inertia"
  );
}
const a6 = 40;
class s6 extends Jh {
  constructor(y) {
    var g = y,
      {
        autoplay: n = !0,
        delay: r = 0,
        type: s = "keyframes",
        repeat: l = 0,
        repeatDelay: c = 0,
        repeatType: f = "loop",
        keyframes: p,
        name: x,
        motionValue: h,
        element: m,
      } = g,
      v = zn(g, [
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
      (this.createdAt = ln.now());
    const b = ue(
        {
          autoplay: n,
          delay: r,
          type: s,
          repeat: l,
          repeatDelay: c,
          repeatType: f,
          name: x,
          motionValue: h,
          element: m,
        },
        v,
      ),
      S = (m == null ? void 0 : m.KeyframeResolver) || ed;
    (this.keyframeResolver = new S(
      p,
      (R, C, D) => this.onKeyframesResolved(R, C, b, !D),
      x,
      h,
      m,
    )),
      (A = this.keyframeResolver) == null || A.scheduleResolve();
  }
  onKeyframesResolved(n, r, s, l) {
    this.keyframeResolver = void 0;
    const {
      name: c,
      type: f,
      velocity: p,
      delay: x,
      isHandoff: h,
      onUpdate: m,
    } = s;
    (this.resolvedAt = ln.now()),
      t6(n, c, f, p) ||
        ((ki.instantAnimations || !x) && (m == null || m($h(n, s, r))),
        (n[0] = n[n.length - 1]),
        lh(s),
        (s.repeat = 0));
    const v = l
        ? this.resolvedAt
          ? this.resolvedAt - this.createdAt > a6
            ? this.resolvedAt
            : this.createdAt
          : this.createdAt
        : void 0,
      y = ze(ue({ startTime: v, finalKeyframe: r }, s), { keyframes: n }),
      g =
        !h && r6(y)
          ? new IS(ze(ue({}, y), { element: y.motionValue.owner.current }))
          : new Ih(y);
    g.finished.then(() => this.notifyFinished()).catch(qn),
      this.pendingTimeline &&
        ((this.stopTimeline = g.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = g);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(n, r) {
    return this.finished.finally(n).then(() => {});
  }
  get animation() {
    var n;
    return (
      this._animation ||
        ((n = this.keyframeResolver) == null || n.resume(), jS()),
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
const o6 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function l6(t) {
  const n = o6.exec(t);
  if (!n) return [,];
  const [, r, s, l] = n;
  return [`--${r != null ? r : s}`, l];
}
function Qg(t, n, r = 1) {
  const [s, l] = l6(t);
  if (!s) return;
  const c = window.getComputedStyle(n).getPropertyValue(s);
  if (c) {
    const f = c.trim();
    return mg(f) ? parseFloat(f) : f;
  }
  return Gh(l) ? Qg(l, n, r + 1) : l;
}
function td(t, n) {
  var r, s;
  return (s =
    (r = t == null ? void 0 : t[n]) != null
      ? r
      : t == null
        ? void 0
        : t.default) != null
    ? s
    : t;
}
const Zg = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...es,
  ]),
  u6 = { test: (t) => t === "auto", parse: (t) => t },
  Wg = (t) => (n) => n.test(t),
  $g = [Ia, Be, pi, dr, eS, I3, u6],
  Cv = (t) => $g.find(Wg(t));
function c6(t) {
  return typeof t == "number"
    ? t === 0
    : t !== null
      ? t === "none" || t === "0" || yg(t)
      : !0;
}
const f6 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function h6(t) {
  const [n, r] = t.slice(0, -1).split("(");
  if (n === "drop-shadow") return t;
  const [s] = r.match(Kh) || [];
  if (!s) return t;
  const l = r.replace(s, "");
  let c = f6.has(n) ? 1 : 0;
  return s !== r && (c *= 100), n + "(" + c + l + ")";
}
const d6 = /\b([a-z-]*)\(.*?\)/gu,
  uh = ze(ue({}, yr), {
    getAnimatableNone: (t) => {
      const n = t.match(d6);
      return n ? n.map(h6).join(" ") : t;
    },
  }),
  Dv = ze(ue({}, Ia), { transform: Math.round }),
  p6 = {
    rotate: dr,
    rotateX: dr,
    rotateY: dr,
    rotateZ: dr,
    scale: Vl,
    scaleX: Vl,
    scaleY: Vl,
    scaleZ: Vl,
    skew: dr,
    skewX: dr,
    skewY: dr,
    distance: Be,
    translateX: Be,
    translateY: Be,
    translateZ: Be,
    x: Be,
    y: Be,
    z: Be,
    perspective: Be,
    transformPerspective: Be,
    opacity: mo,
    originX: hv,
    originY: hv,
    originZ: Be,
  },
  nd = ze(
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
      p6,
    ),
    { zIndex: Dv, fillOpacity: mo, strokeOpacity: mo, numOctaves: Dv },
  ),
  x6 = ze(ue({}, nd), {
    color: Bt,
    backgroundColor: Bt,
    outlineColor: Bt,
    fill: Bt,
    stroke: Bt,
    borderColor: Bt,
    borderTopColor: Bt,
    borderRightColor: Bt,
    borderBottomColor: Bt,
    borderLeftColor: Bt,
    filter: uh,
    WebkitFilter: uh,
  }),
  Jg = (t) => x6[t];
function Ig(t, n) {
  let r = Jg(t);
  return (
    r !== uh && (r = yr), r.getAnimatableNone ? r.getAnimatableNone(n) : void 0
  );
}
const m6 = new Set(["auto", "none", "0"]);
function v6(t, n, r) {
  let s = 0,
    l;
  for (; s < t.length && !l; ) {
    const c = t[s];
    typeof c == "string" && !m6.has(c) && vo(c).values.length && (l = t[s]),
      s++;
  }
  if (l && r) for (const c of n) t[c] = Ig(r, l);
}
class y6 extends ed {
  constructor(n, r, s, l, c) {
    super(n, r, s, l, c, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: n, element: r, name: s } = this;
    if (!r || !r.current) return;
    super.readKeyframes();
    for (let x = 0; x < n.length; x++) {
      let h = n[x];
      if (typeof h == "string" && ((h = h.trim()), Gh(h))) {
        const m = Qg(h, r.current);
        m !== void 0 && (n[x] = m),
          x === n.length - 1 && (this.finalKeyframe = h);
      }
    }
    if ((this.resolveNoneKeyframes(), !Zg.has(s) || n.length !== 2)) return;
    const [l, c] = n,
      f = Cv(l),
      p = Cv(c);
    if (f !== p)
      if (Ev(f) && Ev(p))
        for (let x = 0; x < n.length; x++) {
          const h = n[x];
          typeof h == "string" && (n[x] = parseFloat(h));
        }
      else ta[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: n, name: r } = this,
      s = [];
    for (let l = 0; l < n.length; l++) (n[l] === null || c6(n[l])) && s.push(l);
    s.length && v6(n, s, r);
  }
  measureInitialState() {
    const { element: n, unresolvedKeyframes: r, name: s } = this;
    if (!n || !n.current) return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ta[s](
        n.measureViewportBox(),
        window.getComputedStyle(n.current),
      )),
      (r[0] = this.measuredOrigin);
    const l = r[r.length - 1];
    l !== void 0 && n.getValue(s, l).jump(l, !1);
  }
  measureEndState() {
    var p;
    const { element: n, name: r, unresolvedKeyframes: s } = this;
    if (!n || !n.current) return;
    const l = n.getValue(r);
    l && l.jump(this.measuredOrigin, !1);
    const c = s.length - 1,
      f = s[c];
    (s[c] = ta[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      (p = this.removedTransforms) != null &&
        p.length &&
        this.removedTransforms.forEach(([x, h]) => {
          n.getValue(x).set(h);
        }),
      this.resolveNoneKeyframes();
  }
}
function g6(t, n, r) {
  var s;
  if (t instanceof EventTarget) return [t];
  if (typeof t == "string") {
    let l = document;
    const c =
      (s = r == null ? void 0 : r[t]) != null ? s : l.querySelectorAll(t);
    return c ? Array.from(c) : [];
  }
  return Array.from(t);
}
const e2 = (t, n) => (n && typeof t == "number" ? n.transform(t) : t);
function t2(t) {
  return vg(t) && "offsetHeight" in t;
}
const Bv = 30,
  E6 = (t) => !isNaN(parseFloat(t));
class b6 {
  constructor(n, r = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s) => {
        var c;
        const l = ln.now();
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
      (this.owner = r.owner);
  }
  setCurrent(n) {
    (this.current = n),
      (this.updatedAt = ln.now()),
      this.canTrackVelocity === null &&
        n !== void 0 &&
        (this.canTrackVelocity = E6(this.current));
  }
  setPrevFrameValue(n = this.current) {
    (this.prevFrameValue = n), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(n) {
    return this.on("change", n);
  }
  on(n, r) {
    this.events[n] || (this.events[n] = new jh());
    const s = this.events[n].add(r);
    return n === "change"
      ? () => {
          s(),
            lt.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : s;
  }
  clearListeners() {
    for (const n in this.events) this.events[n].clear();
  }
  attach(n, r) {
    (this.passiveEffect = n), (this.stopPassiveEffect = r);
  }
  set(n) {
    this.passiveEffect
      ? this.passiveEffect(n, this.updateAndNotify)
      : this.updateAndNotify(n);
  }
  setWithVelocity(n, r, s) {
    this.set(r),
      (this.prev = void 0),
      (this.prevFrameValue = n),
      (this.prevUpdatedAt = this.updatedAt - s);
  }
  jump(n, r = !0) {
    this.updateAndNotify(n),
      (this.prev = n),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      r && this.stop(),
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
    const n = ln.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      n - this.updatedAt > Bv
    )
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, Bv);
    return gg(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  start(n) {
    return (
      this.stop(),
      new Promise((r) => {
        (this.hasAnimated = !0),
          (this.animation = n(r)),
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
    var n, r;
    (n = this.dependents) == null || n.clear(),
      (r = this.events.destroy) == null || r.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Za(t, n) {
  return new b6(t, n);
}
const { schedule: id } = wg(queueMicrotask, !1),
  In = { x: !1, y: !1 };
function n2() {
  return In.x || In.y;
}
function A6(t) {
  return t === "x" || t === "y"
    ? In[t]
      ? null
      : ((In[t] = !0),
        () => {
          In[t] = !1;
        })
    : In.x || In.y
      ? null
      : ((In.x = In.y = !0),
        () => {
          In.x = In.y = !1;
        });
}
function i2(t, n) {
  const r = g6(t),
    s = new AbortController(),
    l = ze(ue({ passive: !0 }, n), { signal: s.signal });
  return [r, l, () => s.abort()];
}
function Tv(t) {
  return !(t.pointerType === "touch" || n2());
}
function S6(t, n, r = {}) {
  const [s, l, c] = i2(t, r),
    f = (p) => {
      if (!Tv(p)) return;
      const { target: x } = p,
        h = n(x, p);
      if (typeof h != "function" || !x) return;
      const m = (v) => {
        Tv(v) && (h(v), x.removeEventListener("pointerleave", m));
      };
      x.addEventListener("pointerleave", m, l);
    };
  return (
    s.forEach((p) => {
      p.addEventListener("pointerenter", f, l);
    }),
    c
  );
}
const r2 = (t, n) => (n ? (t === n ? !0 : r2(t, n.parentElement)) : !1),
  rd = (t) =>
    t.pointerType === "mouse"
      ? typeof t.button != "number" || t.button <= 0
      : t.isPrimary !== !1,
  C6 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function D6(t) {
  return C6.has(t.tagName) || t.tabIndex !== -1;
}
const Ru = new WeakSet();
function _v(t) {
  return (n) => {
    n.key === "Enter" && t(n);
  };
}
function Of(t, n) {
  t.dispatchEvent(
    new PointerEvent("pointer" + n, { isPrimary: !0, bubbles: !0 }),
  );
}
const B6 = (t, n) => {
  const r = t.currentTarget;
  if (!r) return;
  const s = _v(() => {
    if (Ru.has(r)) return;
    Of(r, "down");
    const l = _v(() => {
        Of(r, "up");
      }),
      c = () => Of(r, "cancel");
    r.addEventListener("keyup", l, n), r.addEventListener("blur", c, n);
  });
  r.addEventListener("keydown", s, n),
    r.addEventListener("blur", () => r.removeEventListener("keydown", s), n);
};
function Rv(t) {
  return rd(t) && !n2();
}
function T6(t, n, r = {}) {
  const [s, l, c] = i2(t, r),
    f = (p) => {
      const x = p.currentTarget;
      if (!Rv(p)) return;
      Ru.add(x);
      const h = n(x, p),
        m = (g, b) => {
          window.removeEventListener("pointerup", v),
            window.removeEventListener("pointercancel", y),
            Ru.has(x) && Ru.delete(x),
            Rv(g) && typeof h == "function" && h(g, { success: b });
        },
        v = (g) => {
          m(
            g,
            x === window ||
              x === document ||
              r.useGlobalTarget ||
              r2(x, g.target),
          );
        },
        y = (g) => {
          m(g, !1);
        };
      window.addEventListener("pointerup", v, l),
        window.addEventListener("pointercancel", y, l);
    };
  return (
    s.forEach((p) => {
      (r.useGlobalTarget ? window : p).addEventListener("pointerdown", f, l),
        t2(p) &&
          (p.addEventListener("focus", (h) => B6(h, l)),
          !D6(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0));
    }),
    c
  );
}
function a2(t) {
  return vg(t) && "ownerSVGElement" in t;
}
function _6(t) {
  return a2(t) && t.tagName === "svg";
}
const Zt = (t) => !!(t && t.getVelocity),
  R6 = [...$g, Bt, yr],
  w6 = (t) => R6.find(Wg(t)),
  ad = J.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: "never",
  });
function wv(t, n) {
  if (typeof t == "function") return t(n);
  t != null && (t.current = n);
}
function O6(...t) {
  return (n) => {
    let r = !1;
    const s = t.map((l) => {
      const c = wv(l, n);
      return !r && typeof c == "function" && (r = !0), c;
    });
    if (r)
      return () => {
        for (let l = 0; l < s.length; l++) {
          const c = s[l];
          typeof c == "function" ? c() : wv(t[l], null);
        }
      };
  };
}
function M6(...t) {
  return J.useCallback(O6(...t), t);
}
class F6 extends J.Component {
  getSnapshotBeforeUpdate(n) {
    const r = this.props.childRef.current;
    if (r && n.isPresent && !this.props.isPresent) {
      const s = r.offsetParent,
        l = (t2(s) && s.offsetWidth) || 0,
        c = this.props.sizeRef.current;
      (c.height = r.offsetHeight || 0),
        (c.width = r.offsetWidth || 0),
        (c.top = r.offsetTop),
        (c.left = r.offsetLeft),
        (c.right = l - c.width - c.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function L6({ children: t, isPresent: n, anchorX: r, root: s }) {
  const l = J.useId(),
    c = J.useRef(null),
    f = J.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: p } = J.useContext(ad),
    x = M6(c, t == null ? void 0 : t.ref);
  return (
    J.useInsertionEffect(() => {
      const { width: h, height: m, top: v, left: y, right: g } = f.current;
      if (n || !c.current || !h || !m) return;
      const b = r === "left" ? `left: ${y}` : `right: ${g}`;
      c.current.dataset.motionPopId = l;
      const S = document.createElement("style");
      p && (S.nonce = p);
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
            top: ${v}px !important;
          }
        `),
        () => {
          A.contains(S) && A.removeChild(S);
        }
      );
    }, [n]),
    Hi.jsx(F6, {
      isPresent: n,
      childRef: c,
      sizeRef: f,
      children: J.cloneElement(t, { ref: x }),
    })
  );
}
const U6 = ({
  children: t,
  initial: n,
  isPresent: r,
  onExitComplete: s,
  custom: l,
  presenceAffectsLayout: c,
  mode: f,
  anchorX: p,
  root: x,
}) => {
  const h = zh(z6),
    m = J.useId();
  let v = !0,
    y = J.useMemo(
      () => (
        (v = !1),
        {
          id: m,
          initial: n,
          isPresent: r,
          custom: l,
          onExitComplete: (g) => {
            h.set(g, !0);
            for (const b of h.values()) if (!b) return;
            s && s();
          },
          register: (g) => (h.set(g, !1), () => h.delete(g)),
        }
      ),
      [r, h, s],
    );
  return (
    c && v && (y = ue({}, y)),
    J.useMemo(() => {
      h.forEach((g, b) => h.set(b, !1));
    }, [r]),
    J.useEffect(() => {
      !r && !h.size && s && s();
    }, [r]),
    f === "popLayout" &&
      (t = Hi.jsx(L6, { isPresent: r, anchorX: p, root: x, children: t })),
    Hi.jsx(ec.Provider, { value: y, children: t })
  );
};
function z6() {
  return new Map();
}
function s2(t = !0) {
  const n = J.useContext(ec);
  if (n === null) return [!0, null];
  const { isPresent: r, onExitComplete: s, register: l } = n,
    c = J.useId();
  J.useEffect(() => {
    if (t) return l(c);
  }, [t]);
  const f = J.useCallback(() => t && s && s(c), [c, s, t]);
  return !r && s ? [!1, f] : [!0];
}
const kl = (t) => t.key || "";
function Ov(t) {
  const n = [];
  return (
    J.Children.forEach(t, (r) => {
      J.isValidElement(r) && n.push(r);
    }),
    n
  );
}
const YT = ({
    children: t,
    custom: n,
    initial: r = !0,
    onExitComplete: s,
    presenceAffectsLayout: l = !0,
    mode: c = "sync",
    propagate: f = !1,
    anchorX: p = "left",
    root: x,
  }) => {
    const [h, m] = s2(f),
      v = J.useMemo(() => Ov(t), [t]),
      y = f && !h ? [] : v.map(kl),
      g = J.useRef(!0),
      b = J.useRef(v),
      S = zh(() => new Map()),
      [A, R] = J.useState(v),
      [C, D] = J.useState(v);
    xg(() => {
      (g.current = !1), (b.current = v);
      for (let L = 0; L < C.length; L++) {
        const T = kl(C[L]);
        y.includes(T) ? S.delete(T) : S.get(T) !== !0 && S.set(T, !1);
      }
    }, [C, y.length, y.join("-")]);
    const _ = [];
    if (v !== A) {
      let L = [...v];
      for (let T = 0; T < C.length; T++) {
        const U = C[T],
          q = kl(U);
        y.includes(q) || (L.splice(T, 0, U), _.push(U));
      }
      return c === "wait" && _.length && (L = _), D(Ov(L)), R(v), null;
    }
    const { forceRender: w } = J.useContext(Uh);
    return Hi.jsx(Hi.Fragment, {
      children: C.map((L) => {
        const T = kl(L),
          U = f && !h ? !1 : v === C || y.includes(T),
          q = () => {
            if (S.has(T)) S.set(T, !0);
            else return;
            let O = !0;
            S.forEach((j) => {
              j || (O = !1);
            }),
              O &&
                (w == null || w(),
                D(b.current),
                f && (m == null || m()),
                s && s());
          };
        return Hi.jsx(
          U6,
          {
            isPresent: U,
            initial: !g.current || r ? void 0 : !1,
            custom: n,
            presenceAffectsLayout: l,
            mode: c,
            root: x,
            onExitComplete: U ? void 0 : q,
            anchorX: p,
            children: L,
          },
          T,
        );
      }),
    });
  },
  o2 = J.createContext({ strict: !1 }),
  Mv = {
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
  Wa = {};
for (const t in Mv) Wa[t] = { isEnabled: (n) => Mv[t].some((r) => !!n[r]) };
function N6(t) {
  for (const n in t) Wa[n] = ue(ue({}, Wa[n]), t[n]);
}
const H6 = new Set([
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
function Gu(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    H6.has(t)
  );
}
let l2 = (t) => !Gu(t);
function V6(t) {
  typeof t == "function" && (l2 = (n) => (n.startsWith("on") ? !Gu(n) : t(n)));
}
try {
  V6(require("@emotion/is-prop-valid").default);
} catch (t) {}
function k6(t, n, r) {
  const s = {};
  for (const l in t)
    (l === "values" && typeof t.values == "object") ||
      ((l2(l) ||
        (r === !0 && Gu(l)) ||
        (!n && !Gu(l)) ||
        (t.draggable && l.startsWith("onDrag"))) &&
        (s[l] = t[l]));
  return s;
}
const tc = J.createContext({});
function nc(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function yo(t) {
  return typeof t == "string" || Array.isArray(t);
}
const sd = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  od = ["initial", ...sd];
function ic(t) {
  return nc(t.animate) || od.some((n) => yo(t[n]));
}
function u2(t) {
  return !!(ic(t) || t.variants);
}
function q6(t, n) {
  if (ic(t)) {
    const { initial: r, animate: s } = t;
    return {
      initial: r === !1 || yo(r) ? r : void 0,
      animate: yo(s) ? s : void 0,
    };
  }
  return t.inherit !== !1 ? n : {};
}
function j6(t) {
  const { initial: n, animate: r } = q6(t, J.useContext(tc));
  return J.useMemo(() => ({ initial: n, animate: r }), [Fv(n), Fv(r)]);
}
function Fv(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const go = {};
function P6(t) {
  for (const n in t) (go[n] = t[n]), Xh(n) && (go[n].isCSSVariable = !0);
}
function c2(t, { layout: n, layoutId: r }) {
  return (
    ts.has(t) ||
    t.startsWith("origin") ||
    ((n || r !== void 0) && (!!go[t] || t === "opacity"))
  );
}
const Y6 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  X6 = es.length;
function G6(t, n, r) {
  let s = "",
    l = !0;
  for (let c = 0; c < X6; c++) {
    const f = es[c],
      p = t[f];
    if (p === void 0) continue;
    let x = !0;
    if (
      (typeof p == "number"
        ? (x = p === (f.startsWith("scale") ? 1 : 0))
        : (x = parseFloat(p) === 0),
      !x || r)
    ) {
      const h = e2(p, nd[f]);
      if (!x) {
        l = !1;
        const m = Y6[f] || f;
        s += `${m}(${h}) `;
      }
      r && (n[f] = h);
    }
  }
  return (s = s.trim()), r ? (s = r(n, l ? "" : s)) : l && (s = "none"), s;
}
function ld(t, n, r) {
  const { style: s, vars: l, transformOrigin: c } = t;
  let f = !1,
    p = !1;
  for (const x in n) {
    const h = n[x];
    if (ts.has(x)) {
      f = !0;
      continue;
    } else if (Xh(x)) {
      l[x] = h;
      continue;
    } else {
      const m = e2(h, nd[x]);
      x.startsWith("origin") ? ((p = !0), (c[x] = m)) : (s[x] = m);
    }
  }
  if (
    (n.transform ||
      (f || r
        ? (s.transform = G6(n, t.transform, r))
        : s.transform && (s.transform = "none")),
    p)
  ) {
    const { originX: x = "50%", originY: h = "50%", originZ: m = 0 } = c;
    s.transformOrigin = `${x} ${h} ${m}`;
  }
}
const ud = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function f2(t, n, r) {
  for (const s in n) !Zt(n[s]) && !c2(s, r) && (t[s] = n[s]);
}
function K6({ transformTemplate: t }, n) {
  return J.useMemo(() => {
    const r = ud();
    return ld(r, n, t), Object.assign({}, r.vars, r.style);
  }, [n]);
}
function Q6(t, n) {
  const r = t.style || {},
    s = {};
  return f2(s, r, t), Object.assign(s, K6(t, n)), s;
}
function Z6(t, n) {
  const r = {},
    s = Q6(t, n);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((r.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (r.tabIndex = 0),
    (r.style = s),
    r
  );
}
const W6 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  $6 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function J6(t, n, r = 1, s = 0, l = !0) {
  t.pathLength = 1;
  const c = l ? W6 : $6;
  t[c.offset] = Be.transform(-s);
  const f = Be.transform(n),
    p = Be.transform(r);
  t[c.array] = `${f} ${p}`;
}
function h2(t, v, x, h, m) {
  var y = v,
    {
      attrX: n,
      attrY: r,
      attrScale: s,
      pathLength: l,
      pathSpacing: c = 1,
      pathOffset: f = 0,
    } = y,
    p = zn(y, [
      "attrX",
      "attrY",
      "attrScale",
      "pathLength",
      "pathSpacing",
      "pathOffset",
    ]);
  var S, A;
  if ((ld(t, p, h), x)) {
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
    r !== void 0 && (g.y = r),
    s !== void 0 && (g.scale = s),
    l !== void 0 && J6(g, l, c, f, !1);
}
const d2 = () => ze(ue({}, ud()), { attrs: {} }),
  p2 = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function I6(t, n, r, s) {
  const l = J.useMemo(() => {
    const c = d2();
    return (
      h2(c, n, p2(s), t.transformTemplate, t.style),
      ze(ue({}, c.attrs), { style: ue({}, c.style) })
    );
  }, [n]);
  if (t.style) {
    const c = {};
    f2(c, t.style, t), (l.style = ue(ue({}, c), l.style));
  }
  return l;
}
const eC = [
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
function cd(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(eC.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function tC(t, n, r, { latestValues: s }, l, c = !1) {
  const p = (cd(t) ? I6 : Z6)(n, s, l, t),
    x = k6(n, typeof t == "string", c),
    h = t !== J.Fragment ? ze(ue(ue({}, x), p), { ref: r }) : {},
    { children: m } = n,
    v = J.useMemo(() => (Zt(m) ? m.get() : m), [m]);
  return J.createElement(t, ze(ue({}, h), { children: v }));
}
function Lv(t) {
  const n = [{}, {}];
  return (
    t == null ||
      t.values.forEach((r, s) => {
        (n[0][s] = r.get()), (n[1][s] = r.getVelocity());
      }),
    n
  );
}
function fd(t, n, r, s) {
  if (typeof n == "function") {
    const [l, c] = Lv(s);
    n = n(r !== void 0 ? r : t.custom, l, c);
  }
  if (
    (typeof n == "string" && (n = t.variants && t.variants[n]),
    typeof n == "function")
  ) {
    const [l, c] = Lv(s);
    n = n(r !== void 0 ? r : t.custom, l, c);
  }
  return n;
}
function wu(t) {
  return Zt(t) ? t.get() : t;
}
function nC({ scrapeMotionValuesFromProps: t, createRenderState: n }, r, s, l) {
  return { latestValues: iC(r, s, l, t), renderState: n() };
}
function iC(t, n, r, s) {
  const l = {},
    c = s(t, {});
  for (const g in c) l[g] = wu(c[g]);
  let { initial: f, animate: p } = t;
  const x = ic(t),
    h = u2(t);
  n &&
    h &&
    !x &&
    t.inherit !== !1 &&
    (f === void 0 && (f = n.initial), p === void 0 && (p = n.animate));
  let m = r ? r.initial === !1 : !1;
  m = m || f === !1;
  const v = m ? p : f;
  if (v && typeof v != "boolean" && !nc(v)) {
    const g = Array.isArray(v) ? v : [v];
    for (let b = 0; b < g.length; b++) {
      const S = fd(t, g[b]);
      if (S) {
        const y = S,
          { transitionEnd: A, transition: R } = y,
          C = zn(y, ["transitionEnd", "transition"]);
        for (const D in C) {
          let _ = C[D];
          if (Array.isArray(_)) {
            const w = m ? _.length - 1 : 0;
            _ = _[w];
          }
          _ !== null && (l[D] = _);
        }
        for (const D in A) l[D] = A[D];
      }
    }
  }
  return l;
}
const x2 = (t) => (n, r) => {
  const s = J.useContext(tc),
    l = J.useContext(ec),
    c = () => nC(t, n, s, l);
  return r ? c() : zh(c);
};
function hd(t, n, r) {
  var c;
  const { style: s } = t,
    l = {};
  for (const f in s)
    (Zt(s[f]) ||
      (n.style && Zt(n.style[f])) ||
      c2(f, t) ||
      ((c = r == null ? void 0 : r.getValue(f)) == null
        ? void 0
        : c.liveStyle) !== void 0) &&
      (l[f] = s[f]);
  return l;
}
const rC = x2({ scrapeMotionValuesFromProps: hd, createRenderState: ud });
function m2(t, n, r) {
  const s = hd(t, n, r);
  for (const l in t)
    if (Zt(t[l]) || Zt(n[l])) {
      const c =
        es.indexOf(l) !== -1
          ? "attr" + l.charAt(0).toUpperCase() + l.substring(1)
          : l;
      s[c] = t[l];
    }
  return s;
}
const aC = x2({ scrapeMotionValuesFromProps: m2, createRenderState: d2 }),
  sC = Symbol.for("motionComponentSymbol");
function Pa(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function oC(t, n, r) {
  return J.useCallback(
    (s) => {
      s && t.onMount && t.onMount(s),
        n && (s ? n.mount(s) : n.unmount()),
        r && (typeof r == "function" ? r(s) : Pa(r) && (r.current = s));
    },
    [n],
  );
}
const dd = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  lC = "framerAppearId",
  v2 = "data-" + dd(lC),
  y2 = J.createContext({});
function uC(t, n, r, s, l) {
  var S, A;
  const { visualElement: c } = J.useContext(tc),
    f = J.useContext(o2),
    p = J.useContext(ec),
    x = J.useContext(ad).reducedMotion,
    h = J.useRef(null);
  (s = s || f.renderer),
    !h.current &&
      s &&
      (h.current = s(t, {
        visualState: n,
        parent: c,
        props: r,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: x,
      }));
  const m = h.current,
    v = J.useContext(y2);
  m &&
    !m.projection &&
    l &&
    (m.type === "html" || m.type === "svg") &&
    cC(h.current, r, l, v);
  const y = J.useRef(!1);
  J.useInsertionEffect(() => {
    m && y.current && m.update(r, p);
  });
  const g = r[v2],
    b = J.useRef(
      !!g &&
        !((S = window.MotionHandoffIsComplete) != null && S.call(window, g)) &&
        ((A = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : A.call(window, g)),
    );
  return (
    xg(() => {
      m &&
        ((y.current = !0),
        (window.MotionIsMounted = !0),
        m.updateFeatures(),
        m.scheduleRenderMicrotask(),
        b.current && m.animationState && m.animationState.animateChanges());
    }),
    J.useEffect(() => {
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
function cC(t, n, r, s) {
  const {
    layoutId: l,
    layout: c,
    drag: f,
    dragConstraints: p,
    layoutScroll: x,
    layoutRoot: h,
    layoutCrossfade: m,
  } = n;
  (t.projection = new r(
    t.latestValues,
    n["data-framer-portal-id"] ? void 0 : g2(t.parent),
  )),
    t.projection.setOptions({
      layoutId: l,
      layout: c,
      alwaysMeasureLayout: !!f || (p && Pa(p)),
      visualElement: t,
      animationType: typeof c == "string" ? c : "both",
      initialPromotionConfig: s,
      crossfade: m,
      layoutScroll: x,
      layoutRoot: h,
    });
}
function g2(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : g2(t.parent);
}
function Mf(t, { forwardMotionProps: n = !1 } = {}, r, s) {
  var p, x;
  r && N6(r);
  const l = cd(t) ? aC : rC;
  function c(h, m) {
    let v;
    const y = ze(ue(ue({}, J.useContext(ad)), h), { layoutId: fC(h) }),
      { isStatic: g } = y,
      b = j6(h),
      S = l(h, g);
    if (!g && Nh) {
      hC();
      const A = dC(y);
      (v = A.MeasureLayout),
        (b.visualElement = uC(t, S, y, s, A.ProjectionNode));
    }
    return Hi.jsxs(tc.Provider, {
      value: b,
      children: [
        v && b.visualElement
          ? Hi.jsx(v, ue({ visualElement: b.visualElement }, y))
          : null,
        tC(t, h, oC(S, b.visualElement, m), S, g, n),
      ],
    });
  }
  c.displayName = `motion.${typeof t == "string" ? t : `create(${(x = (p = t.displayName) != null ? p : t.name) != null ? x : ""})`}`;
  const f = J.forwardRef(c);
  return (f[sC] = t), f;
}
function fC({ layoutId: t }) {
  const n = J.useContext(Uh).id;
  return n && t !== void 0 ? n + "-" + t : t;
}
function hC(t, n) {
  J.useContext(o2).strict;
}
function dC(t) {
  const { drag: n, layout: r } = Wa;
  if (!n && !r) return {};
  const s = ue(ue({}, n), r);
  return {
    MeasureLayout:
      (n != null && n.isEnabled(t)) || (r != null && r.isEnabled(t))
        ? s.MeasureLayout
        : void 0,
    ProjectionNode: s.ProjectionNode,
  };
}
function pC(t, n) {
  if (typeof Proxy == "undefined") return Mf;
  const r = new Map(),
    s = (c, f) => Mf(c, f, t, n),
    l = (c, f) => s(c, f);
  return new Proxy(l, {
    get: (c, f) =>
      f === "create"
        ? s
        : (r.has(f) || r.set(f, Mf(f, void 0, t, n)), r.get(f)),
  });
}
function E2({ top: t, left: n, right: r, bottom: s }) {
  return { x: { min: n, max: r }, y: { min: t, max: s } };
}
function xC({ x: t, y: n }) {
  return { top: n.min, right: t.max, bottom: n.max, left: t.min };
}
function mC(t, n) {
  if (!n) return t;
  const r = n({ x: t.left, y: t.top }),
    s = n({ x: t.right, y: t.bottom });
  return { top: r.y, left: r.x, bottom: s.y, right: s.x };
}
function Ff(t) {
  return t === void 0 || t === 1;
}
function ch({ scale: t, scaleX: n, scaleY: r }) {
  return !Ff(t) || !Ff(n) || !Ff(r);
}
function Qr(t) {
  return (
    ch(t) ||
    b2(t) ||
    t.z ||
    t.rotate ||
    t.rotateX ||
    t.rotateY ||
    t.skewX ||
    t.skewY
  );
}
function b2(t) {
  return Uv(t.x) || Uv(t.y);
}
function Uv(t) {
  return t && t !== "0%";
}
function Ku(t, n, r) {
  const s = t - r,
    l = n * s;
  return r + l;
}
function zv(t, n, r, s, l) {
  return l !== void 0 && (t = Ku(t, l, s)), Ku(t, r, s) + n;
}
function fh(t, n = 0, r = 1, s, l) {
  (t.min = zv(t.min, n, r, s, l)), (t.max = zv(t.max, n, r, s, l));
}
function A2(t, { x: n, y: r }) {
  fh(t.x, n.translate, n.scale, n.originPoint),
    fh(t.y, r.translate, r.scale, r.originPoint);
}
const Nv = 0.999999999999,
  Hv = 1.0000000000001;
function vC(t, n, r, s = !1) {
  const l = r.length;
  if (!l) return;
  n.x = n.y = 1;
  let c, f;
  for (let p = 0; p < l; p++) {
    (c = r[p]), (f = c.projectionDelta);
    const { visualElement: x } = c.options;
    (x && x.props.style && x.props.style.display === "contents") ||
      (s &&
        c.options.layoutScroll &&
        c.scroll &&
        c !== c.root &&
        Xa(t, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
      f && ((n.x *= f.x.scale), (n.y *= f.y.scale), A2(t, f)),
      s && Qr(c.latestValues) && Xa(t, c.latestValues));
  }
  n.x < Hv && n.x > Nv && (n.x = 1), n.y < Hv && n.y > Nv && (n.y = 1);
}
function Ya(t, n) {
  (t.min = t.min + n), (t.max = t.max + n);
}
function Vv(t, n, r, s, l = 0.5) {
  const c = ht(t.min, t.max, l);
  fh(t, n, r, c, s);
}
function Xa(t, n) {
  Vv(t.x, n.x, n.scaleX, n.scale, n.originX),
    Vv(t.y, n.y, n.scaleY, n.scale, n.originY);
}
function S2(t, n) {
  return E2(mC(t.getBoundingClientRect(), n));
}
function yC(t, n, r) {
  const s = S2(t, r),
    { scroll: l } = n;
  return l && (Ya(s.x, l.offset.x), Ya(s.y, l.offset.y)), s;
}
const kv = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ga = () => ({ x: kv(), y: kv() }),
  qv = () => ({ min: 0, max: 0 }),
  gt = () => ({ x: qv(), y: qv() }),
  hh = { current: null },
  C2 = { current: !1 };
function gC() {
  if (((C2.current = !0), !!Nh))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        n = () => (hh.current = t.matches);
      t.addEventListener("change", n), n();
    } else hh.current = !1;
}
const EC = new WeakMap();
function bC(t, n, r) {
  for (const s in n) {
    const l = n[s],
      c = r[s];
    if (Zt(l)) t.addValue(s, l);
    else if (Zt(c)) t.addValue(s, Za(l, { owner: t }));
    else if (c !== l)
      if (t.hasValue(s)) {
        const f = t.getValue(s);
        f.liveStyle === !0 ? f.jump(l) : f.hasAnimated || f.set(l);
      } else {
        const f = t.getStaticValue(s);
        t.addValue(s, Za(f !== void 0 ? f : l, { owner: t }));
      }
  }
  for (const s in r) n[s] === void 0 && t.removeValue(s);
  return n;
}
const jv = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class AC {
  scrapeMotionValuesFromProps(n, r, s) {
    return {};
  }
  constructor(
    {
      parent: n,
      props: r,
      presenceContext: s,
      reducedMotionConfig: l,
      blockInitialAnimation: c,
      visualState: f,
    },
    p = {},
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = ed),
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
        const g = ln.now();
        this.renderScheduledAt < g &&
          ((this.renderScheduledAt = g), lt.render(this.render, !1, !0));
      });
    const { latestValues: x, renderState: h } = f;
    (this.latestValues = x),
      (this.baseTarget = ue({}, x)),
      (this.initialValues = r.initial ? ue({}, x) : {}),
      (this.renderState = h),
      (this.parent = n),
      (this.props = r),
      (this.presenceContext = s),
      (this.depth = n ? n.depth + 1 : 0),
      (this.reducedMotionConfig = l),
      (this.options = p),
      (this.blockInitialAnimation = !!c),
      (this.isControllingVariants = ic(r)),
      (this.isVariantNode = u2(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(n && n.current));
    const y = this.scrapeMotionValuesFromProps(r, {}, this),
      { willChange: m } = y,
      v = zn(y, ["willChange"]);
    for (const g in v) {
      const b = v[g];
      x[g] !== void 0 && Zt(b) && b.set(x[g]);
    }
  }
  mount(n) {
    var r;
    (this.current = n),
      EC.set(n, this),
      this.projection && !this.projection.instance && this.projection.mount(n),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, l) => this.bindToMotionValue(l, s)),
      C2.current || gC(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : hh.current),
      (r = this.parent) == null || r.addChild(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var n;
    this.projection && this.projection.unmount(),
      vr(this.notifyUpdate),
      vr(this.render),
      this.valueSubscriptions.forEach((r) => r()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (n = this.parent) == null || n.removeChild(this);
    for (const r in this.events) this.events[r].clear();
    for (const r in this.features) {
      const s = this.features[r];
      s && (s.unmount(), (s.isMounted = !1));
    }
    this.current = null;
  }
  addChild(n) {
    var r;
    this.children.add(n),
      (r = this.enteringChildren) != null ||
        (this.enteringChildren = new Set()),
      this.enteringChildren.add(n);
  }
  removeChild(n) {
    this.children.delete(n),
      this.enteringChildren && this.enteringChildren.delete(n);
  }
  bindToMotionValue(n, r) {
    this.valueSubscriptions.has(n) && this.valueSubscriptions.get(n)();
    const s = ts.has(n);
    s && this.onBindTransform && this.onBindTransform();
    const l = r.on("change", (f) => {
      (this.latestValues[n] = f),
        this.props.onUpdate && lt.preRender(this.notifyUpdate),
        s && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let c;
    window.MotionCheckAppearSync &&
      (c = window.MotionCheckAppearSync(this, n, r)),
      this.valueSubscriptions.set(n, () => {
        l(), c && c(), r.owner && r.stop();
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
    for (n in Wa) {
      const r = Wa[n];
      if (!r) continue;
      const { isEnabled: s, Feature: l } = r;
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
      : gt();
  }
  getStaticValue(n) {
    return this.latestValues[n];
  }
  setStaticValue(n, r) {
    this.latestValues[n] = r;
  }
  update(n, r) {
    (n.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = n),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = r);
    for (let s = 0; s < jv.length; s++) {
      const l = jv[s];
      this.propEventSubscriptions[l] &&
        (this.propEventSubscriptions[l](),
        delete this.propEventSubscriptions[l]);
      const c = "on" + l,
        f = n[c];
      f && (this.propEventSubscriptions[l] = this.on(l, f));
    }
    (this.prevMotionValues = bC(
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
    const r = this.getClosestVariantNode();
    if (r)
      return (
        r.variantChildren && r.variantChildren.add(n),
        () => r.variantChildren.delete(n)
      );
  }
  addValue(n, r) {
    const s = this.values.get(n);
    r !== s &&
      (s && this.removeValue(n),
      this.bindToMotionValue(n, r),
      this.values.set(n, r),
      (this.latestValues[n] = r.get()));
  }
  removeValue(n) {
    this.values.delete(n);
    const r = this.valueSubscriptions.get(n);
    r && (r(), this.valueSubscriptions.delete(n)),
      delete this.latestValues[n],
      this.removeValueFromRenderState(n, this.renderState);
  }
  hasValue(n) {
    return this.values.has(n);
  }
  getValue(n, r) {
    if (this.props.values && this.props.values[n]) return this.props.values[n];
    let s = this.values.get(n);
    return (
      s === void 0 &&
        r !== void 0 &&
        ((s = Za(r === null ? void 0 : r, { owner: this })),
        this.addValue(n, s)),
      s
    );
  }
  readValue(n, r) {
    var l;
    let s =
      this.latestValues[n] !== void 0 || !this.current
        ? this.latestValues[n]
        : (l = this.getBaseTargetFromProps(this.props, n)) != null
          ? l
          : this.readValueFromInstance(this.current, n, this.options);
    return (
      s != null &&
        (typeof s == "string" && (mg(s) || yg(s))
          ? (s = parseFloat(s))
          : !w6(s) && yr.test(r) && (s = Ig(n, r)),
        this.setBaseTarget(n, Zt(s) ? s.get() : s)),
      Zt(s) ? s.get() : s
    );
  }
  setBaseTarget(n, r) {
    this.baseTarget[n] = r;
  }
  getBaseTarget(n) {
    var c;
    const { initial: r } = this.props;
    let s;
    if (typeof r == "string" || typeof r == "object") {
      const f = fd(
        this.props,
        r,
        (c = this.presenceContext) == null ? void 0 : c.custom,
      );
      f && (s = f[n]);
    }
    if (r && s !== void 0) return s;
    const l = this.getBaseTargetFromProps(this.props, n);
    return l !== void 0 && !Zt(l)
      ? l
      : this.initialValues[n] !== void 0 && s === void 0
        ? void 0
        : this.baseTarget[n];
  }
  on(n, r) {
    return this.events[n] || (this.events[n] = new jh()), this.events[n].add(r);
  }
  notify(n, ...r) {
    this.events[n] && this.events[n].notify(...r);
  }
  scheduleRenderMicrotask() {
    id.render(this.render);
  }
}
class D2 extends AC {
  constructor() {
    super(...arguments), (this.KeyframeResolver = y6);
  }
  sortInstanceNodePosition(n, r) {
    return n.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(n, r) {
    return n.style ? n.style[r] : void 0;
  }
  removeValueFromRenderState(n, { vars: r, style: s }) {
    delete r[n], delete s[n];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: n } = this.props;
    Zt(n) &&
      (this.childSubscription = n.on("change", (r) => {
        this.current && (this.current.textContent = `${r}`);
      }));
  }
}
function B2(t, { style: n, vars: r }, s, l) {
  const c = t.style;
  let f;
  for (f in n) c[f] = n[f];
  l == null || l.applyProjectionStyles(c, s);
  for (f in r) c.setProperty(f, r[f]);
}
function SC(t) {
  return window.getComputedStyle(t);
}
class CC extends D2 {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = B2);
  }
  readValueFromInstance(n, r) {
    var s;
    if (ts.has(r))
      return (s = this.projection) != null && s.isProjecting ? ih(r) : NS(n, r);
    {
      const l = SC(n),
        c = (Xh(r) ? l.getPropertyValue(r) : l[r]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(n, { transformPagePoint: r }) {
    return S2(n, r);
  }
  build(n, r, s) {
    ld(n, r, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(n, r, s) {
    return hd(n, r, s);
  }
}
const T2 = new Set([
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
function DC(t, n, r, s) {
  B2(t, n, void 0, s);
  for (const l in n.attrs) t.setAttribute(T2.has(l) ? l : dd(l), n.attrs[l]);
}
class BC extends D2 {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = gt);
  }
  getBaseTargetFromProps(n, r) {
    return n[r];
  }
  readValueFromInstance(n, r) {
    if (ts.has(r)) {
      const s = Jg(r);
      return (s && s.default) || 0;
    }
    return (r = T2.has(r) ? r : dd(r)), n.getAttribute(r);
  }
  scrapeMotionValuesFromProps(n, r, s) {
    return m2(n, r, s);
  }
  build(n, r, s) {
    h2(n, r, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(n, r, s, l) {
    DC(n, r, s, l);
  }
  mount(n) {
    (this.isSVGTag = p2(n.tagName)), super.mount(n);
  }
}
const TC = (t, n) =>
  cd(t) ? new BC(n) : new CC(n, { allowProjection: t !== J.Fragment });
function Ka(t, n, r) {
  const s = t.getProps();
  return fd(s, n, r !== void 0 ? r : s.custom, t);
}
const dh = (t) => Array.isArray(t);
function _C(t, n, r) {
  t.hasValue(n) ? t.getValue(n).set(r) : t.addValue(n, Za(r));
}
function RC(t) {
  return dh(t) ? t[t.length - 1] || 0 : t;
}
function wC(t, n) {
  let f = Ka(t, n) || {},
    { transitionEnd: s = {}, transition: l = {} } = f,
    c = zn(f, ["transitionEnd", "transition"]);
  c = ue(ue({}, c), s);
  for (const p in c) {
    const x = RC(c[p]);
    _C(t, p, x);
  }
}
function OC(t) {
  return !!(Zt(t) && t.add);
}
function ph(t, n) {
  const r = t.getValue("willChange");
  if (OC(r)) return r.add(n);
  if (!r && ki.WillChange) {
    const s = new ki.WillChange("auto");
    t.addValue("willChange", s), s.add(n);
  }
}
function _2(t) {
  return t.props[v2];
}
const MC = (t) => t !== null;
function FC(t, { repeat: n, repeatType: r = "loop" }, s) {
  const l = t.filter(MC),
    c = n && r !== "loop" && n % 2 === 1 ? 0 : l.length - 1;
  return l[c];
}
const LC = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  UC = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  zC = { type: "keyframes", duration: 0.8 },
  NC = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  HC = (t, { keyframes: n }) =>
    n.length > 2
      ? zC
      : ts.has(t)
        ? t.startsWith("scale")
          ? UC(n[1])
          : LC
        : NC;
function VC(v) {
  var y = v,
    {
      when: t,
      delay: n,
      delayChildren: r,
      staggerChildren: s,
      staggerDirection: l,
      repeat: c,
      repeatType: f,
      repeatDelay: p,
      from: x,
      elapsed: h,
    } = y,
    m = zn(y, [
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
const pd =
  (t, n, r, s = {}, l, c) =>
  (f) => {
    const p = td(s, t) || {},
      x = p.delay || s.delay || 0;
    let { elapsed: h = 0 } = s;
    h = h - di(x);
    const m = ze(
      ue(
        {
          keyframes: Array.isArray(r) ? r : [null, r],
          ease: "easeOut",
          velocity: n.getVelocity(),
        },
        p,
      ),
      {
        delay: -h,
        onUpdate: (y) => {
          n.set(y), p.onUpdate && p.onUpdate(y);
        },
        onComplete: () => {
          f(), p.onComplete && p.onComplete();
        },
        name: t,
        motionValue: n,
        element: c ? void 0 : l,
      },
    );
    VC(p) || Object.assign(m, HC(t, m)),
      m.duration && (m.duration = di(m.duration)),
      m.repeatDelay && (m.repeatDelay = di(m.repeatDelay)),
      m.from !== void 0 && (m.keyframes[0] = m.from);
    let v = !1;
    if (
      ((m.type === !1 || (m.duration === 0 && !m.repeatDelay)) &&
        (lh(m), m.delay === 0 && (v = !0)),
      (ki.instantAnimations || ki.skipAnimations) &&
        ((v = !0), lh(m), (m.delay = 0)),
      (m.allowFlatten = !p.type && !p.ease),
      v && !c && n.get() !== void 0)
    ) {
      const y = FC(m.keyframes, p);
      if (y !== void 0) {
        lt.update(() => {
          m.onUpdate(y), m.onComplete();
        });
        return;
      }
    }
    return p.isSync ? new Ih(m) : new s6(m);
  };
function kC({ protectedKeys: t, needsAnimating: n }, r) {
  const s = t.hasOwnProperty(r) && n[r] !== !0;
  return (n[r] = !1), s;
}
function R2(t, n, { delay: r = 0, transitionOverride: s, type: l } = {}) {
  var v;
  let m = n,
    { transition: c = t.getDefaultTransition(), transitionEnd: f } = m,
    p = zn(m, ["transition", "transitionEnd"]);
  s && (c = s);
  const x = [],
    h = l && t.animationState && t.animationState.getState()[l];
  for (const y in p) {
    const g = t.getValue(y, (v = t.latestValues[y]) != null ? v : null),
      b = p[y];
    if (b === void 0 || (h && kC(h, y))) continue;
    const S = ue({ delay: r }, td(c || {}, y)),
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
      const D = _2(t);
      if (D) {
        const _ = window.MotionHandoffAnimation(D, y, lt);
        _ !== null && ((S.startTime = _), (R = !0));
      }
    }
    ph(t, y),
      g.start(
        pd(y, g, b, t.shouldReduceMotion && Zg.has(y) ? { type: !1 } : S, t, R),
      );
    const C = g.animation;
    C && x.push(C);
  }
  return (
    f &&
      Promise.all(x).then(() => {
        lt.update(() => {
          f && wC(t, f);
        });
      }),
    x
  );
}
function w2(t, n, r, s = 0, l = 1) {
  const c = Array.from(t)
      .sort((h, m) => h.sortNodePosition(m))
      .indexOf(n),
    f = t.size,
    p = (f - 1) * s;
  return typeof r == "function" ? r(c, f) : l === 1 ? c * s : p - c * s;
}
function xh(t, n, r = {}) {
  var x;
  const s = Ka(
    t,
    n,
    r.type === "exit"
      ? (x = t.presenceContext) == null
        ? void 0
        : x.custom
      : void 0,
  );
  let { transition: l = t.getDefaultTransition() || {} } = s || {};
  r.transitionOverride && (l = r.transitionOverride);
  const c = s ? () => Promise.all(R2(t, s, r)) : () => Promise.resolve(),
    f =
      t.variantChildren && t.variantChildren.size
        ? (h = 0) => {
            const {
              delayChildren: m = 0,
              staggerChildren: v,
              staggerDirection: y,
            } = l;
            return qC(t, n, h, m, v, y, r);
          }
        : () => Promise.resolve(),
    { when: p } = l;
  if (p) {
    const [h, m] = p === "beforeChildren" ? [c, f] : [f, c];
    return h().then(() => m());
  } else return Promise.all([c(), f(r.delay)]);
}
function qC(t, n, r = 0, s = 0, l = 0, c = 1, f) {
  const p = [];
  for (const x of t.variantChildren)
    x.notify("AnimationStart", n),
      p.push(
        xh(
          x,
          n,
          ze(ue({}, f), {
            delay:
              r +
              (typeof s == "function" ? 0 : s) +
              w2(t.variantChildren, x, s, l, c),
          }),
        ).then(() => x.notify("AnimationComplete", n)),
      );
  return Promise.all(p);
}
function jC(t, n, r = {}) {
  t.notify("AnimationStart", n);
  let s;
  if (Array.isArray(n)) {
    const l = n.map((c) => xh(t, c, r));
    s = Promise.all(l);
  } else if (typeof n == "string") s = xh(t, n, r);
  else {
    const l = typeof n == "function" ? Ka(t, n, r.custom) : n;
    s = Promise.all(R2(t, l, r));
  }
  return s.then(() => {
    t.notify("AnimationComplete", n);
  });
}
function O2(t, n) {
  if (!Array.isArray(n)) return !1;
  const r = n.length;
  if (r !== t.length) return !1;
  for (let s = 0; s < r; s++) if (n[s] !== t[s]) return !1;
  return !0;
}
const PC = od.length;
function M2(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const r = t.parent ? M2(t.parent) || {} : {};
    return t.props.initial !== void 0 && (r.initial = t.props.initial), r;
  }
  const n = {};
  for (let r = 0; r < PC; r++) {
    const s = od[r],
      l = t.props[s];
    (yo(l) || l === !1) && (n[s] = l);
  }
  return n;
}
const YC = [...sd].reverse(),
  XC = sd.length;
function GC(t) {
  return (n) =>
    Promise.all(n.map(({ animation: r, options: s }) => jC(t, r, s)));
}
function KC(t) {
  let n = GC(t),
    r = Pv(),
    s = !0;
  const l = (x) => (h, m) => {
    var y;
    const v = Ka(
      t,
      m,
      x === "exit"
        ? (y = t.presenceContext) == null
          ? void 0
          : y.custom
        : void 0,
    );
    if (v) {
      const g = v,
        { transition: b, transitionEnd: S } = g,
        A = zn(g, ["transition", "transitionEnd"]);
      h = ue(ue(ue({}, h), A), S);
    }
    return h;
  };
  function c(x) {
    n = x(t);
  }
  function f(x) {
    const { props: h } = t,
      m = M2(t.parent) || {},
      v = [],
      y = new Set();
    let g = {},
      b = 1 / 0;
    for (let A = 0; A < XC; A++) {
      const R = YC[A],
        C = r[R],
        D = h[R] !== void 0 ? h[R] : m[R],
        _ = yo(D),
        w = R === x ? C.isActive : null;
      w === !1 && (b = A);
      let L = D === m[R] && D !== h[R] && _;
      if (
        (L && s && t.manuallyAnimateOnMount && (L = !1),
        (C.protectedKeys = ue({}, g)),
        (!C.isActive && w === null) ||
          (!D && !C.prevProp) ||
          nc(D) ||
          typeof D == "boolean")
      )
        continue;
      const T = QC(C.prevProp, D);
      let U = T || (R === x && C.isActive && !L && _) || (A > b && _),
        q = !1;
      const O = Array.isArray(D) ? D : [D];
      let j = O.reduce(l(R), {});
      w === !1 && (j = {});
      const { prevResolvedValues: $ = {} } = C,
        I = ue(ue({}, $), j),
        le = (oe) => {
          (U = !0),
            y.has(oe) && ((q = !0), y.delete(oe)),
            (C.needsAnimating[oe] = !0);
          const ie = t.getValue(oe);
          ie && (ie.liveStyle = !1);
        };
      for (const oe in I) {
        const ie = j[oe],
          ye = $[oe];
        if (g.hasOwnProperty(oe)) continue;
        let F = !1;
        dh(ie) && dh(ye) ? (F = !O2(ie, ye)) : (F = ie !== ye),
          F
            ? ie != null
              ? le(oe)
              : y.add(oe)
            : ie !== void 0 && y.has(oe)
              ? le(oe)
              : (C.protectedKeys[oe] = !0);
      }
      (C.prevProp = D),
        (C.prevResolvedValues = j),
        C.isActive && (g = ue(ue({}, g), j)),
        s && t.blockInitialAnimation && (U = !1);
      const ce = L && T;
      U &&
        (!ce || q) &&
        v.push(
          ...O.map((oe) => {
            const ie = { type: R };
            if (
              typeof oe == "string" &&
              s &&
              !ce &&
              t.manuallyAnimateOnMount &&
              t.parent
            ) {
              const { parent: ye } = t,
                F = Ka(ye, oe);
              if (ye.enteringChildren && F) {
                const { delayChildren: z } = F.transition || {};
                ie.delay = w2(ye.enteringChildren, t, z);
              }
            }
            return { animation: oe, options: ie };
          }),
        );
    }
    if (y.size) {
      const A = {};
      if (typeof h.initial != "boolean") {
        const R = Ka(t, Array.isArray(h.initial) ? h.initial[0] : h.initial);
        R && R.transition && (A.transition = R.transition);
      }
      y.forEach((R) => {
        const C = t.getBaseTarget(R),
          D = t.getValue(R);
        D && (D.liveStyle = !0), (A[R] = C != null ? C : null);
      }),
        v.push({ animation: A });
    }
    let S = !!v.length;
    return (
      s &&
        (h.initial === !1 || h.initial === h.animate) &&
        !t.manuallyAnimateOnMount &&
        (S = !1),
      (s = !1),
      S ? n(v) : Promise.resolve()
    );
  }
  function p(x, h) {
    var v;
    if (r[x].isActive === h) return Promise.resolve();
    (v = t.variantChildren) == null ||
      v.forEach((y) => {
        var g;
        return (g = y.animationState) == null ? void 0 : g.setActive(x, h);
      }),
      (r[x].isActive = h);
    const m = f(x);
    for (const y in r) r[y].protectedKeys = {};
    return m;
  }
  return {
    animateChanges: f,
    setActive: p,
    setAnimateFunction: c,
    getState: () => r,
    reset: () => {
      r = Pv();
    },
  };
}
function QC(t, n) {
  return typeof n == "string" ? n !== t : Array.isArray(n) ? !O2(n, t) : !1;
}
function Kr(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Pv() {
  return {
    animate: Kr(!0),
    whileInView: Kr(),
    whileHover: Kr(),
    whileTap: Kr(),
    whileDrag: Kr(),
    whileFocus: Kr(),
    exit: Kr(),
  };
}
class br {
  constructor(n) {
    (this.isMounted = !1), (this.node = n);
  }
  update() {}
}
class ZC extends br {
  constructor(n) {
    super(n), n.animationState || (n.animationState = KC(n));
  }
  updateAnimationControlsSubscription() {
    const { animate: n } = this.node.getProps();
    nc(n) && (this.unmountControls = n.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: n } = this.node.getProps(),
      { animate: r } = this.node.prevProps || {};
    n !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var n;
    this.node.animationState.reset(),
      (n = this.unmountControls) == null || n.call(this);
  }
}
let WC = 0;
class $C extends br {
  constructor() {
    super(...arguments), (this.id = WC++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: n, onExitComplete: r } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || n === s) return;
    const l = this.node.animationState.setActive("exit", !n);
    r &&
      !n &&
      l.then(() => {
        r(this.id);
      });
  }
  mount() {
    const { register: n, onExitComplete: r } = this.node.presenceContext || {};
    r && r(this.id), n && (this.unmount = n(this.id));
  }
  unmount() {}
}
const JC = { animation: { Feature: ZC }, exit: { Feature: $C } };
function Eo(t, n, r, s = { passive: !0 }) {
  return t.addEventListener(n, r, s), () => t.removeEventListener(n, r);
}
function Bo(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const IC = (t) => (n) => rd(n) && t(n, Bo(n));
function uo(t, n, r, s) {
  return Eo(t, n, IC(r), s);
}
const F2 = 1e-4,
  eD = 1 - F2,
  tD = 1 + F2,
  L2 = 0.01,
  nD = 0 - L2,
  iD = 0 + L2;
function en(t) {
  return t.max - t.min;
}
function rD(t, n, r) {
  return Math.abs(t - n) <= r;
}
function Yv(t, n, r, s = 0.5) {
  (t.origin = s),
    (t.originPoint = ht(n.min, n.max, t.origin)),
    (t.scale = en(r) / en(n)),
    (t.translate = ht(r.min, r.max, t.origin) - t.originPoint),
    ((t.scale >= eD && t.scale <= tD) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= nD && t.translate <= iD) || isNaN(t.translate)) &&
      (t.translate = 0);
}
function co(t, n, r, s) {
  Yv(t.x, n.x, r.x, s ? s.originX : void 0),
    Yv(t.y, n.y, r.y, s ? s.originY : void 0);
}
function Xv(t, n, r) {
  (t.min = r.min + n.min), (t.max = t.min + en(n));
}
function aD(t, n, r) {
  Xv(t.x, n.x, r.x), Xv(t.y, n.y, r.y);
}
function Gv(t, n, r) {
  (t.min = n.min - r.min), (t.max = t.min + en(n));
}
function fo(t, n, r) {
  Gv(t.x, n.x, r.x), Gv(t.y, n.y, r.y);
}
function Hn(t) {
  return [t("x"), t("y")];
}
const U2 = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  Kv = (t, n) => Math.abs(t - n);
function sD(t, n) {
  const r = Kv(t.x, n.x),
    s = Kv(t.y, n.y);
  return Math.sqrt(r ** 2 + s ** 2);
}
class z2 {
  constructor(
    n,
    r,
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
        const y = Uf(this.lastMoveEventInfo, this.history),
          g = this.startEvent !== null,
          b = sD(y.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!g && !b) return;
        const { point: S } = y,
          { timestamp: A } = qt;
        this.history.push(ze(ue({}, S), { timestamp: A }));
        const { onStart: R, onMove: C } = this.handlers;
        g ||
          (R && R(this.lastMoveEvent, y),
          (this.startEvent = this.lastMoveEvent)),
          C && C(this.lastMoveEvent, y);
      }),
      (this.handlePointerMove = (y, g) => {
        (this.lastMoveEvent = y),
          (this.lastMoveEventInfo = Lf(g, this.transformPagePoint)),
          lt.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (y, g) => {
        this.end();
        const { onEnd: b, onSessionEnd: S, resumeAnimation: A } = this.handlers;
        if (
          (this.dragSnapToOrigin && A && A(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const R = Uf(
          y.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Lf(g, this.transformPagePoint),
          this.history,
        );
        this.startEvent && b && b(y, R), S && S(y, R);
      }),
      !rd(n))
    )
      return;
    (this.dragSnapToOrigin = c),
      (this.handlers = r),
      (this.transformPagePoint = s),
      (this.distanceThreshold = f),
      (this.contextWindow = l || window);
    const p = Bo(n),
      x = Lf(p, this.transformPagePoint),
      { point: h } = x,
      { timestamp: m } = qt;
    this.history = [ze(ue({}, h), { timestamp: m })];
    const { onSessionStart: v } = r;
    v && v(n, Uf(x, this.history)),
      (this.removeListeners = So(
        uo(this.contextWindow, "pointermove", this.handlePointerMove),
        uo(this.contextWindow, "pointerup", this.handlePointerUp),
        uo(this.contextWindow, "pointercancel", this.handlePointerUp),
      ));
  }
  updateHandlers(n) {
    this.handlers = n;
  }
  end() {
    this.removeListeners && this.removeListeners(), vr(this.updatePoint);
  }
}
function Lf(t, n) {
  return n ? { point: n(t.point) } : t;
}
function Qv(t, n) {
  return { x: t.x - n.x, y: t.y - n.y };
}
function Uf({ point: t }, n) {
  return {
    point: t,
    delta: Qv(t, N2(n)),
    offset: Qv(t, oD(n)),
    velocity: lD(n, 0.1),
  };
}
function oD(t) {
  return t[0];
}
function N2(t) {
  return t[t.length - 1];
}
function lD(t, n) {
  if (t.length < 2) return { x: 0, y: 0 };
  let r = t.length - 1,
    s = null;
  const l = N2(t);
  for (; r >= 0 && ((s = t[r]), !(l.timestamp - s.timestamp > di(n))); ) r--;
  if (!s) return { x: 0, y: 0 };
  const c = kn(l.timestamp - s.timestamp);
  if (c === 0) return { x: 0, y: 0 };
  const f = { x: (l.x - s.x) / c, y: (l.y - s.y) / c };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function uD(t, { min: n, max: r }, s) {
  return (
    n !== void 0 && t < n
      ? (t = s ? ht(n, t, s.min) : Math.max(t, n))
      : r !== void 0 && t > r && (t = s ? ht(r, t, s.max) : Math.min(t, r)),
    t
  );
}
function Zv(t, n, r) {
  return {
    min: n !== void 0 ? t.min + n : void 0,
    max: r !== void 0 ? t.max + r - (t.max - t.min) : void 0,
  };
}
function cD(t, { top: n, left: r, bottom: s, right: l }) {
  return { x: Zv(t.x, r, l), y: Zv(t.y, n, s) };
}
function Wv(t, n) {
  let r = n.min - t.min,
    s = n.max - t.max;
  return n.max - n.min < t.max - t.min && ([r, s] = [s, r]), { min: r, max: s };
}
function fD(t, n) {
  return { x: Wv(t.x, n.x), y: Wv(t.y, n.y) };
}
function hD(t, n) {
  let r = 0.5;
  const s = en(t),
    l = en(n);
  return (
    l > s
      ? (r = xo(n.min, n.max - s, t.min))
      : s > l && (r = xo(t.min, t.max - l, n.min)),
    Vi(0, 1, r)
  );
}
function dD(t, n) {
  const r = {};
  return (
    n.min !== void 0 && (r.min = n.min - t.min),
    n.max !== void 0 && (r.max = n.max - t.min),
    r
  );
}
const mh = 0.35;
function pD(t = mh) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = mh),
    { x: $v(t, "left", "right"), y: $v(t, "top", "bottom") }
  );
}
function $v(t, n, r) {
  return { min: Jv(t, n), max: Jv(t, r) };
}
function Jv(t, n) {
  return typeof t == "number" ? t : t[n] || 0;
}
const xD = new WeakMap();
class mD {
  constructor(n) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = gt()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = n);
  }
  start(n, { snapToCursor: r = !1, distanceThreshold: s } = {}) {
    const { presenceContext: l } = this.visualElement;
    if (l && l.isPresent === !1) return;
    const c = (v) => {
        const { dragSnapToOrigin: y } = this.getProps();
        y ? this.pauseAnimation() : this.stopAnimation(),
          r && this.snapToCursor(Bo(v).point);
      },
      f = (v, y) => {
        const { drag: g, dragPropagation: b, onDragStart: S } = this.getProps();
        if (
          g &&
          !b &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = A6(g)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = v),
          (this.latestPanInfo = y),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Hn((R) => {
            let C = this.getAxisMotionValue(R).get() || 0;
            if (pi.test(C)) {
              const { projection: D } = this.visualElement;
              if (D && D.layout) {
                const _ = D.layout.layoutBox[R];
                _ && (C = en(_) * (parseFloat(C) / 100));
              }
            }
            this.originPoint[R] = C;
          }),
          S && lt.postRender(() => S(v, y)),
          ph(this.visualElement, "transform");
        const { animationState: A } = this.visualElement;
        A && A.setActive("whileDrag", !0);
      },
      p = (v, y) => {
        (this.latestPointerEvent = v), (this.latestPanInfo = y);
        const {
          dragPropagation: g,
          dragDirectionLock: b,
          onDirectionLock: S,
          onDrag: A,
        } = this.getProps();
        if (!g && !this.openDragLock) return;
        const { offset: R } = y;
        if (b && this.currentDirection === null) {
          (this.currentDirection = vD(R)),
            this.currentDirection !== null && S && S(this.currentDirection);
          return;
        }
        this.updateAxis("x", y.point, R),
          this.updateAxis("y", y.point, R),
          this.visualElement.render(),
          A && A(v, y);
      },
      x = (v, y) => {
        (this.latestPointerEvent = v),
          (this.latestPanInfo = y),
          this.stop(v, y),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      h = () =>
        Hn((v) => {
          var y;
          return (
            this.getAnimationState(v) === "paused" &&
            ((y = this.getAxisMotionValue(v).animation) == null
              ? void 0
              : y.play())
          );
        }),
      { dragSnapToOrigin: m } = this.getProps();
    this.panSession = new z2(
      n,
      {
        onSessionStart: c,
        onStart: f,
        onMove: p,
        onSessionEnd: x,
        resumeAnimation: h,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: m,
        distanceThreshold: s,
        contextWindow: U2(this.visualElement),
      },
    );
  }
  stop(n, r) {
    const s = n || this.latestPointerEvent,
      l = r || this.latestPanInfo,
      c = this.isDragging;
    if ((this.cancel(), !c || !l || !s)) return;
    const { velocity: f } = l;
    this.startAnimation(f);
    const { onDragEnd: p } = this.getProps();
    p && lt.postRender(() => p(s, l));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: n, animationState: r } = this.visualElement;
    n && (n.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: s } = this.getProps();
    !s &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      r && r.setActive("whileDrag", !1);
  }
  updateAxis(n, r, s) {
    const { drag: l } = this.getProps();
    if (!s || !ql(n, l, this.currentDirection)) return;
    const c = this.getAxisMotionValue(n);
    let f = this.originPoint[n] + s[n];
    this.constraints &&
      this.constraints[n] &&
      (f = uD(f, this.constraints[n], this.elastic[n])),
      c.set(f);
  }
  resolveConstraints() {
    var c;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (c = this.visualElement.projection) == null
            ? void 0
            : c.layout,
      l = this.constraints;
    n && Pa(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && s
        ? (this.constraints = cD(s.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = pD(r)),
      l !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Hn((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = dD(s.layoutBox[f], this.constraints[f]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: n, onMeasureDragConstraints: r } = this.getProps();
    if (!n || !Pa(n)) return !1;
    const s = n.current,
      { projection: l } = this.visualElement;
    if (!l || !l.layout) return !1;
    const c = yC(s, l.root, this.visualElement.getTransformPagePoint());
    let f = fD(l.layout.layoutBox, c);
    if (r) {
      const p = r(xC(f));
      (this.hasMutatedConstraints = !!p), p && (f = E2(p));
    }
    return f;
  }
  startAnimation(n) {
    const {
        drag: r,
        dragMomentum: s,
        dragElastic: l,
        dragTransition: c,
        dragSnapToOrigin: f,
        onDragTransitionEnd: p,
      } = this.getProps(),
      x = this.constraints || {},
      h = Hn((m) => {
        if (!ql(m, r, this.currentDirection)) return;
        let v = (x && x[m]) || {};
        f && (v = { min: 0, max: 0 });
        const y = l ? 200 : 1e6,
          g = l ? 40 : 1e7,
          b = ue(
            ue(
              {
                type: "inertia",
                velocity: s ? n[m] : 0,
                bounceStiffness: y,
                bounceDamping: g,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
              },
              c,
            ),
            v,
          );
        return this.startAxisValueAnimation(m, b);
      });
    return Promise.all(h).then(p);
  }
  startAxisValueAnimation(n, r) {
    const s = this.getAxisMotionValue(n);
    return (
      ph(this.visualElement, n), s.start(pd(n, s, 0, r, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Hn((n) => this.getAxisMotionValue(n).stop());
  }
  pauseAnimation() {
    Hn((n) => {
      var r;
      return (r = this.getAxisMotionValue(n).animation) == null
        ? void 0
        : r.pause();
    });
  }
  getAnimationState(n) {
    var r;
    return (r = this.getAxisMotionValue(n).animation) == null
      ? void 0
      : r.state;
  }
  getAxisMotionValue(n) {
    const r = `_drag${n.toUpperCase()}`,
      s = this.visualElement.getProps(),
      l = s[r];
    return (
      l ||
      this.visualElement.getValue(n, (s.initial ? s.initial[n] : void 0) || 0)
    );
  }
  snapToCursor(n) {
    Hn((r) => {
      const { drag: s } = this.getProps();
      if (!ql(r, s, this.currentDirection)) return;
      const { projection: l } = this.visualElement,
        c = this.getAxisMotionValue(r);
      if (l && l.layout) {
        const { min: f, max: p } = l.layout.layoutBox[r];
        c.set(n[r] - ht(f, p, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: n, dragConstraints: r } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!Pa(r) || !s || !this.constraints) return;
    this.stopAnimation();
    const l = { x: 0, y: 0 };
    Hn((f) => {
      const p = this.getAxisMotionValue(f);
      if (p && this.constraints !== !1) {
        const x = p.get();
        l[f] = hD({ min: x, max: x }, this.constraints[f]);
      }
    });
    const { transformTemplate: c } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = c ? c({}, "") : "none"),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      this.resolveConstraints(),
      Hn((f) => {
        if (!ql(f, n, null)) return;
        const p = this.getAxisMotionValue(f),
          { min: x, max: h } = this.constraints[f];
        p.set(ht(x, h, l[f]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    xD.set(this.visualElement, this);
    const n = this.visualElement.current,
      r = uo(n, "pointerdown", (x) => {
        const { drag: h, dragListener: m = !0 } = this.getProps();
        h && m && this.start(x);
      }),
      s = () => {
        const { dragConstraints: x } = this.getProps();
        Pa(x) && x.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: l } = this.visualElement,
      c = l.addEventListener("measure", s);
    l && !l.layout && (l.root && l.root.updateScroll(), l.updateLayout()),
      lt.read(s);
    const f = Eo(window, "resize", () => this.scalePositionWithinConstraints()),
      p = l.addEventListener(
        "didUpdate",
        ({ delta: x, hasLayoutChanged: h }) => {
          this.isDragging &&
            h &&
            (Hn((m) => {
              const v = this.getAxisMotionValue(m);
              v &&
                ((this.originPoint[m] += x[m].translate),
                v.set(v.get() + x[m].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      f(), r(), c(), p && p();
    };
  }
  getProps() {
    const n = this.visualElement.getProps(),
      {
        drag: r = !1,
        dragDirectionLock: s = !1,
        dragPropagation: l = !1,
        dragConstraints: c = !1,
        dragElastic: f = mh,
        dragMomentum: p = !0,
      } = n;
    return ze(ue({}, n), {
      drag: r,
      dragDirectionLock: s,
      dragPropagation: l,
      dragConstraints: c,
      dragElastic: f,
      dragMomentum: p,
    });
  }
}
function ql(t, n, r) {
  return (n === !0 || n === t) && (r === null || r === t);
}
function vD(t, n = 10) {
  let r = null;
  return Math.abs(t.y) > n ? (r = "y") : Math.abs(t.x) > n && (r = "x"), r;
}
class yD extends br {
  constructor(n) {
    super(n),
      (this.removeGroupControls = qn),
      (this.removeListeners = qn),
      (this.controls = new mD(n));
  }
  mount() {
    const { dragControls: n } = this.node.getProps();
    n && (this.removeGroupControls = n.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || qn);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Iv = (t) => (n, r) => {
  t && lt.postRender(() => t(n, r));
};
class gD extends br {
  constructor() {
    super(...arguments), (this.removePointerDownListener = qn);
  }
  onPointerDown(n) {
    this.session = new z2(n, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: U2(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: n,
      onPanStart: r,
      onPan: s,
      onPanEnd: l,
    } = this.node.getProps();
    return {
      onSessionStart: Iv(n),
      onStart: Iv(r),
      onMove: s,
      onEnd: (c, f) => {
        delete this.session, l && lt.postRender(() => l(c, f));
      },
    };
  }
  mount() {
    this.removePointerDownListener = uo(this.node.current, "pointerdown", (n) =>
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
function ey(t, n) {
  return n.max === n.min ? 0 : (t / (n.max - n.min)) * 100;
}
const to = {
    correct: (t, n) => {
      if (!n.target) return t;
      if (typeof t == "string")
        if (Be.test(t)) t = parseFloat(t);
        else return t;
      const r = ey(t, n.target.x),
        s = ey(t, n.target.y);
      return `${r}% ${s}%`;
    },
  },
  ED = {
    correct: (t, { treeScale: n, projectionDelta: r }) => {
      const s = t,
        l = yr.parse(t);
      if (l.length > 5) return s;
      const c = yr.createTransformer(t),
        f = typeof l[0] != "number" ? 1 : 0,
        p = r.x.scale * n.x,
        x = r.y.scale * n.y;
      (l[0 + f] /= p), (l[1 + f] /= x);
      const h = ht(p, x, 0.5);
      return (
        typeof l[2 + f] == "number" && (l[2 + f] /= h),
        typeof l[3 + f] == "number" && (l[3 + f] /= h),
        c(l)
      );
    },
  };
let zf = !1;
class bD extends J.Component {
  componentDidMount() {
    const {
        visualElement: n,
        layoutGroup: r,
        switchLayoutGroup: s,
        layoutId: l,
      } = this.props,
      { projection: c } = n;
    P6(AD),
      c &&
        (r.group && r.group.add(c),
        s && s.register && l && s.register(c),
        zf && c.root.didUpdate(),
        c.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        c.setOptions(
          ze(ue({}, c.options), { onExitComplete: () => this.safeToRemove() }),
        )),
      (Ou.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(n) {
    const {
        layoutDependency: r,
        visualElement: s,
        drag: l,
        isPresent: c,
      } = this.props,
      { projection: f } = s;
    return (
      f &&
        ((f.isPresent = c),
        (zf = !0),
        l || n.layoutDependency !== r || r === void 0 || n.isPresent !== c
          ? f.willUpdate()
          : this.safeToRemove(),
        n.isPresent !== c &&
          (c
            ? f.promote()
            : f.relegate() ||
              lt.postRender(() => {
                const p = f.getStack();
                (!p || !p.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: n } = this.props.visualElement;
    n &&
      (n.root.didUpdate(),
      id.postRender(() => {
        !n.currentAnimation && n.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: n,
        layoutGroup: r,
        switchLayoutGroup: s,
      } = this.props,
      { projection: l } = n;
    (zf = !0),
      l &&
        (l.scheduleCheckAfterUnmount(),
        r && r.group && r.group.remove(l),
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
function H2(t) {
  const [n, r] = s2(),
    s = J.useContext(Uh);
  return Hi.jsx(
    bD,
    ze(ue({}, t), {
      layoutGroup: s,
      switchLayoutGroup: J.useContext(y2),
      isPresent: n,
      safeToRemove: r,
    }),
  );
}
const AD = {
  borderRadius: ze(ue({}, to), {
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  }),
  borderTopLeftRadius: to,
  borderTopRightRadius: to,
  borderBottomLeftRadius: to,
  borderBottomRightRadius: to,
  boxShadow: ED,
};
function SD(t, n, r) {
  const s = Zt(t) ? t : Za(t);
  return s.start(pd("", s, n, r)), s.animation;
}
const CD = (t, n) => t.depth - n.depth;
class DD {
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
    this.isDirty && this.children.sort(CD),
      (this.isDirty = !1),
      this.children.forEach(n);
  }
}
function BD(t, n) {
  const r = ln.now(),
    s = ({ timestamp: l }) => {
      const c = l - r;
      c >= n && (vr(s), t(c - n));
    };
  return lt.setup(s, !0), () => vr(s);
}
const V2 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  TD = V2.length,
  ty = (t) => (typeof t == "string" ? parseFloat(t) : t),
  ny = (t) => typeof t == "number" || Be.test(t);
function _D(t, n, r, s, l, c) {
  var f, p, x, h;
  l
    ? ((t.opacity = ht(0, (f = r.opacity) != null ? f : 1, RD(s))),
      (t.opacityExit = ht((p = n.opacity) != null ? p : 1, 0, wD(s))))
    : c &&
      (t.opacity = ht(
        (x = n.opacity) != null ? x : 1,
        (h = r.opacity) != null ? h : 1,
        s,
      ));
  for (let m = 0; m < TD; m++) {
    const v = `border${V2[m]}Radius`;
    let y = iy(n, v),
      g = iy(r, v);
    if (y === void 0 && g === void 0) continue;
    y || (y = 0),
      g || (g = 0),
      y === 0 || g === 0 || ny(y) === ny(g)
        ? ((t[v] = Math.max(ht(ty(y), ty(g), s), 0)),
          (pi.test(g) || pi.test(y)) && (t[v] += "%"))
        : (t[v] = g);
  }
  (n.rotate || r.rotate) && (t.rotate = ht(n.rotate || 0, r.rotate || 0, s));
}
function iy(t, n) {
  return t[n] !== void 0 ? t[n] : t.borderRadius;
}
const RD = k2(0, 0.5, Bg),
  wD = k2(0.5, 0.95, qn);
function k2(t, n, r) {
  return (s) => (s < t ? 0 : s > n ? 1 : r(xo(t, n, s)));
}
function ry(t, n) {
  (t.min = n.min), (t.max = n.max);
}
function Nn(t, n) {
  ry(t.x, n.x), ry(t.y, n.y);
}
function ay(t, n) {
  (t.translate = n.translate),
    (t.scale = n.scale),
    (t.originPoint = n.originPoint),
    (t.origin = n.origin);
}
function sy(t, n, r, s, l) {
  return (
    (t -= n), (t = Ku(t, 1 / r, s)), l !== void 0 && (t = Ku(t, 1 / l, s)), t
  );
}
function OD(t, n = 0, r = 1, s = 0.5, l, c = t, f = t) {
  if (
    (pi.test(n) &&
      ((n = parseFloat(n)), (n = ht(f.min, f.max, n / 100) - f.min)),
    typeof n != "number")
  )
    return;
  let p = ht(c.min, c.max, s);
  t === c && (p -= n),
    (t.min = sy(t.min, n, r, p, l)),
    (t.max = sy(t.max, n, r, p, l));
}
function oy(t, n, [r, s, l], c, f) {
  OD(t, n[r], n[s], n[l], n.scale, c, f);
}
const MD = ["x", "scaleX", "originX"],
  FD = ["y", "scaleY", "originY"];
function ly(t, n, r, s) {
  oy(t.x, n, MD, r ? r.x : void 0, s ? s.x : void 0),
    oy(t.y, n, FD, r ? r.y : void 0, s ? s.y : void 0);
}
function uy(t) {
  return t.translate === 0 && t.scale === 1;
}
function q2(t) {
  return uy(t.x) && uy(t.y);
}
function cy(t, n) {
  return t.min === n.min && t.max === n.max;
}
function LD(t, n) {
  return cy(t.x, n.x) && cy(t.y, n.y);
}
function fy(t, n) {
  return (
    Math.round(t.min) === Math.round(n.min) &&
    Math.round(t.max) === Math.round(n.max)
  );
}
function j2(t, n) {
  return fy(t.x, n.x) && fy(t.y, n.y);
}
function hy(t) {
  return en(t.x) / en(t.y);
}
function dy(t, n) {
  return (
    t.translate === n.translate &&
    t.scale === n.scale &&
    t.originPoint === n.originPoint
  );
}
class UD {
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
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(n) {
    const r = this.members.findIndex((l) => n === l);
    if (r === 0) return !1;
    let s;
    for (let l = r; l >= 0; l--) {
      const c = this.members[l];
      if (c.isPresent !== !1) {
        s = c;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(n, r) {
    const s = this.lead;
    if (n !== s && ((this.prevLead = s), (this.lead = n), n.show(), s)) {
      s.instance && s.scheduleRender(),
        n.scheduleRender(),
        (n.resumeFrom = s),
        r && (n.resumeFrom.preserveOpacity = !0),
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
      const { options: r, resumingFrom: s } = n;
      r.onExitComplete && r.onExitComplete(),
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
function zD(t, n, r) {
  let s = "";
  const l = t.x.translate / n.x,
    c = t.y.translate / n.y,
    f = (r == null ? void 0 : r.z) || 0;
  if (
    ((l || c || f) && (s = `translate3d(${l}px, ${c}px, ${f}px) `),
    (n.x !== 1 || n.y !== 1) && (s += `scale(${1 / n.x}, ${1 / n.y}) `),
    r)
  ) {
    const {
      transformPerspective: h,
      rotate: m,
      rotateX: v,
      rotateY: y,
      skewX: g,
      skewY: b,
    } = r;
    h && (s = `perspective(${h}px) ${s}`),
      m && (s += `rotate(${m}deg) `),
      v && (s += `rotateX(${v}deg) `),
      y && (s += `rotateY(${y}deg) `),
      g && (s += `skewX(${g}deg) `),
      b && (s += `skewY(${b}deg) `);
  }
  const p = t.x.scale * n.x,
    x = t.y.scale * n.y;
  return (p !== 1 || x !== 1) && (s += `scale(${p}, ${x})`), s || "none";
}
const Nf = ["", "X", "Y", "Z"],
  ND = 1e3;
let HD = 0;
function Hf(t, n, r, s) {
  const { latestValues: l } = n;
  l[t] && ((r[t] = l[t]), n.setStaticValue(t, 0), s && (s[t] = 0));
}
function P2(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: n } = t.options;
  if (!n) return;
  const r = _2(n);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: l, layoutId: c } = t.options;
    window.MotionCancelOptimisedAnimation(r, "transform", lt, !(l || c));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && P2(s);
}
function Y2({
  attachResizeListener: t,
  defaultParent: n,
  measureScroll: r,
  checkIsScrollRoot: s,
  resetTransform: l,
}) {
  return class {
    constructor(f = {}, p = n == null ? void 0 : n()) {
      (this.id = HD++),
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
            this.nodes.forEach(qD),
            this.nodes.forEach(XD),
            this.nodes.forEach(GD),
            this.nodes.forEach(jD);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = p ? p.root || p : this),
        (this.path = p ? [...p.path, p] : []),
        (this.parent = p),
        (this.depth = p ? p.depth + 1 : 0);
      for (let x = 0; x < this.path.length; x++)
        this.path[x].shouldResetTransform = !0;
      this.root === this && (this.nodes = new DD());
    }
    addEventListener(f, p) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new jh()),
        this.eventHandlers.get(f).add(p)
      );
    }
    notifyListeners(f, ...p) {
      const x = this.eventHandlers.get(f);
      x && x.notify(...p);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      (this.isSVG = a2(f) && !_6(f)), (this.instance = f);
      const { layoutId: p, layout: x, visualElement: h } = this.options;
      if (
        (h && !h.current && h.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (x || p) && (this.isLayoutDirty = !0),
        t)
      ) {
        let m,
          v = 0;
        const y = () => (this.root.updateBlockedByResize = !1);
        lt.read(() => {
          v = window.innerWidth;
        }),
          t(f, () => {
            const g = window.innerWidth;
            g !== v &&
              ((v = g),
              (this.root.updateBlockedByResize = !0),
              m && m(),
              (m = BD(y, 250)),
              Ou.hasAnimatedSinceResize &&
                ((Ou.hasAnimatedSinceResize = !1), this.nodes.forEach(my)));
          });
      }
      p && this.root.registerSharedNode(p, this),
        this.options.animate !== !1 &&
          h &&
          (p || x) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: m,
              hasLayoutChanged: v,
              hasRelativeLayoutChanged: y,
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
                R = !this.targetLayout || !j2(this.targetLayout, g),
                C = !v && y;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                C ||
                (v && (R || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const D = ze(ue({}, td(b, "layout")), {
                  onPlay: S,
                  onComplete: A,
                });
                (h.shouldReduceMotion || this.options.layoutRoot) &&
                  ((D.delay = 0), (D.type = !1)),
                  this.startAnimation(D),
                  this.setAnimationOrigin(m, C);
              } else
                v || my(this),
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
        vr(this.updateProjection);
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
        this.nodes && this.nodes.forEach(KD),
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
          P2(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let m = 0; m < this.path.length; m++) {
        const v = this.path[m];
        (v.shouldResetTransform = !0),
          v.updateScroll("snapshot"),
          v.options.layoutRoot && v.willUpdate(!1);
      }
      const { layoutId: p, layout: x } = this.options;
      if (p === void 0 && !x) return;
      const h = this.getTransformTemplate();
      (this.prevTransformTemplateValue = h ? h(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(py);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(xy);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(YD),
            this.nodes.forEach(VD),
            this.nodes.forEach(kD))
          : this.nodes.forEach(xy),
        this.clearAllSnapshots();
      const p = ln.now();
      (qt.delta = Vi(0, 1e3 / 60, p - qt.timestamp)),
        (qt.timestamp = p),
        (qt.isProcessing = !0),
        Bf.update.process(qt),
        Bf.preRender.process(qt),
        Bf.render.process(qt),
        (qt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), id.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(PD), this.sharedNodes.forEach(QD);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        lt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      lt.postRender(() => {
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
          !en(this.snapshot.measuredBox.x) &&
          !en(this.snapshot.measuredBox.y) &&
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
        (this.layoutCorrected = gt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: p } = this.options;
      p &&
        p.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0,
        );
    }
    updateScroll(f = "measure") {
      let p = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (p = !1),
        p && this.instance)
      ) {
        const x = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: x,
          offset: r(this.instance),
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
        p = this.projectionDelta && !q2(this.projectionDelta),
        x = this.getTransformTemplate(),
        h = x ? x(this.latestValues, "") : void 0,
        m = h !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (p || Qr(this.latestValues) || m) &&
        (l(this.instance, h),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const p = this.measurePageBox();
      let x = this.removeElementScroll(p);
      return (
        f && (x = this.removeTransform(x)),
        JD(x),
        {
          animationId: this.root.animationId,
          measuredBox: p,
          layoutBox: x,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var h;
      const { visualElement: f } = this.options;
      if (!f) return gt();
      const p = f.measureViewportBox();
      if (
        !(
          ((h = this.scroll) == null ? void 0 : h.wasRoot) || this.path.some(ID)
        )
      ) {
        const { scroll: m } = this.root;
        m && (Ya(p.x, m.offset.x), Ya(p.y, m.offset.y));
      }
      return p;
    }
    removeElementScroll(f) {
      var x;
      const p = gt();
      if ((Nn(p, f), (x = this.scroll) != null && x.wasRoot)) return p;
      for (let h = 0; h < this.path.length; h++) {
        const m = this.path[h],
          { scroll: v, options: y } = m;
        m !== this.root &&
          v &&
          y.layoutScroll &&
          (v.wasRoot && Nn(p, f), Ya(p.x, v.offset.x), Ya(p.y, v.offset.y));
      }
      return p;
    }
    applyTransform(f, p = !1) {
      const x = gt();
      Nn(x, f);
      for (let h = 0; h < this.path.length; h++) {
        const m = this.path[h];
        !p &&
          m.options.layoutScroll &&
          m.scroll &&
          m !== m.root &&
          Xa(x, { x: -m.scroll.offset.x, y: -m.scroll.offset.y }),
          Qr(m.latestValues) && Xa(x, m.latestValues);
      }
      return Qr(this.latestValues) && Xa(x, this.latestValues), x;
    }
    removeTransform(f) {
      const p = gt();
      Nn(p, f);
      for (let x = 0; x < this.path.length; x++) {
        const h = this.path[x];
        if (!h.instance || !Qr(h.latestValues)) continue;
        ch(h.latestValues) && h.updateSnapshot();
        const m = gt(),
          v = h.measurePageBox();
        Nn(m, v),
          ly(p, h.latestValues, h.snapshot ? h.snapshot.layoutBox : void 0, m);
      }
      return Qr(this.latestValues) && ly(p, this.latestValues), p;
    }
    setTargetDelta(f) {
      (this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(f) {
      this.options = ze(ue(ue({}, this.options), f), {
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
        this.relativeParent.resolvedRelativeTargetAt !== qt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var y;
      const p = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
      const x = !!this.resumingFrom || this !== p;
      if (
        !(
          f ||
          (x && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((y = this.parent) != null && y.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: m, layoutId: v } = this.options;
      if (!(!this.layout || !(m || v))) {
        if (
          ((this.resolvedRelativeTargetAt = qt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = gt()),
              (this.relativeTargetOrigin = gt()),
              fo(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox,
              ),
              Nn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = gt()), (this.targetWithTransforms = gt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              aD(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Nn(this.target, this.layout.layoutBox),
                A2(this.target, this.targetDelta))
              : Nn(this.target, this.layout.layoutBox),
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
              (this.relativeTarget = gt()),
              (this.relativeTargetOrigin = gt()),
              fo(this.relativeTargetOrigin, this.target, g.target),
              Nn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          ch(this.parent.latestValues) ||
          b2(this.parent.latestValues)
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
        p = !!this.resumingFrom || this !== f;
      let x = !0;
      if (
        ((this.isProjectionDirty ||
          ((b = this.parent) != null && b.isProjectionDirty)) &&
          (x = !1),
        p &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (x = !1),
        this.resolvedRelativeTargetAt === qt.timestamp && (x = !1),
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
      Nn(this.layoutCorrected, this.layout.layoutBox);
      const v = this.treeScale.x,
        y = this.treeScale.y;
      vC(this.layoutCorrected, this.treeScale, this.path, p),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = gt()));
      const { target: g } = f;
      if (!g) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (ay(this.prevProjectionDelta.x, this.projectionDelta.x),
          ay(this.prevProjectionDelta.y, this.projectionDelta.y)),
        co(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
        (this.treeScale.x !== v ||
          this.treeScale.y !== y ||
          !dy(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !dy(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
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
      var p;
      if (((p = this.options.visualElement) == null || p.scheduleRender(), f)) {
        const x = this.getStack();
        x && x.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Ga()),
        (this.projectionDelta = Ga()),
        (this.projectionDeltaWithTransform = Ga());
    }
    setAnimationOrigin(f, p = !1) {
      const x = this.snapshot,
        h = x ? x.latestValues : {},
        m = ue({}, this.latestValues),
        v = Ga();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p);
      const y = gt(),
        g = x ? x.source : void 0,
        b = this.layout ? this.layout.source : void 0,
        S = g !== b,
        A = this.getStack(),
        R = !A || A.members.length <= 1,
        C = !!(S && !R && this.options.crossfade === !0 && !this.path.some(WD));
      this.animationProgress = 0;
      let D;
      (this.mixTargetDelta = (_) => {
        const w = _ / 1e3;
        vy(v.x, f.x, w),
          vy(v.y, f.y, w),
          this.setTargetDelta(v),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (fo(y, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            ZD(this.relativeTarget, this.relativeTargetOrigin, y, w),
            D && LD(this.relativeTarget, D) && (this.isProjectionDirty = !1),
            D || (D = gt()),
            Nn(D, this.relativeTarget)),
          S &&
            ((this.animationValues = m), _D(m, h, this.latestValues, w, C, R)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = w);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      var p, x, h;
      this.notifyListeners("animationStart"),
        (p = this.currentAnimation) == null || p.stop(),
        (h = (x = this.resumingFrom) == null ? void 0 : x.currentAnimation) ==
          null || h.stop(),
        this.pendingAnimation &&
          (vr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = lt.update(() => {
          (Ou.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Za(0)),
            (this.currentAnimation = SD(
              this.motionValue,
              [0, 1e3],
              ze(ue({}, f), {
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
        targetWithTransforms: p,
        target: x,
        layout: h,
        latestValues: m,
      } = f;
      if (!(!p || !x || !h)) {
        if (
          this !== f &&
          this.layout &&
          h &&
          X2(this.options.animationType, this.layout.layoutBox, h.layoutBox)
        ) {
          x = this.target || gt();
          const v = en(this.layout.layoutBox.x);
          (x.x.min = f.target.x.min), (x.x.max = x.x.min + v);
          const y = en(this.layout.layoutBox.y);
          (x.y.min = f.target.y.min), (x.y.max = x.y.min + y);
        }
        Nn(p, x),
          Xa(p, m),
          co(this.projectionDeltaWithTransform, this.layoutCorrected, p, m);
      }
    }
    registerSharedNode(f, p) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new UD()),
        this.sharedNodes.get(f).add(p);
      const h = p.options.initialPromotionConfig;
      p.promote({
        transition: h ? h.transition : void 0,
        preserveFollowOpacity:
          h && h.shouldPreserveFollowOpacity
            ? h.shouldPreserveFollowOpacity(p)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      var p;
      const { layoutId: f } = this.options;
      return f
        ? ((p = this.getStack()) == null ? void 0 : p.lead) || this
        : this;
    }
    getPrevLead() {
      var p;
      const { layoutId: f } = this.options;
      return f ? ((p = this.getStack()) == null ? void 0 : p.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: p, preserveFollowOpacity: x } = {}) {
      const h = this.getStack();
      h && h.promote(this, x),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        p && this.setOptions({ transition: p });
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let p = !1;
      const { latestValues: x } = f;
      if (
        ((x.z ||
          x.rotate ||
          x.rotateX ||
          x.rotateY ||
          x.rotateZ ||
          x.skewX ||
          x.skewY) &&
          (p = !0),
        !p)
      )
        return;
      const h = {};
      x.z && Hf("z", f, h, this.animationValues);
      for (let m = 0; m < Nf.length; m++)
        Hf(`rotate${Nf[m]}`, f, h, this.animationValues),
          Hf(`skew${Nf[m]}`, f, h, this.animationValues);
      f.render();
      for (const m in h)
        f.setStaticValue(m, h[m]),
          this.animationValues && (this.animationValues[m] = h[m]);
      f.scheduleRender();
    }
    applyProjectionStyles(f, p) {
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
          (f.pointerEvents = wu(p == null ? void 0 : p.pointerEvents) || ""),
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
          (f.pointerEvents = wu(p == null ? void 0 : p.pointerEvents) || "")),
          this.hasProjected &&
            !Qr(this.latestValues) &&
            ((f.transform = x ? x({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      f.visibility = "";
      const m = h.animationValues || h.latestValues;
      this.applyTransformsToTarget();
      let v = zD(this.projectionDeltaWithTransform, this.treeScale, m);
      x && (v = x(m, v)), (f.transform = v);
      const { x: y, y: g } = this.projectionDelta;
      (f.transformOrigin = `${y.origin * 100}% ${g.origin * 100}% 0`),
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
      for (const A in go) {
        if (m[A] === void 0) continue;
        const { correct: R, applyTo: C, isCSSVariable: D } = go[A],
          _ = v === "none" ? m[A] : R(m[A], h);
        if (C) {
          const w = C.length;
          for (let L = 0; L < w; L++) f[C[L]] = _;
        } else
          D ? (this.options.visualElement.renderState.vars[A] = _) : (f[A] = _);
      }
      this.options.layoutId &&
        (f.pointerEvents =
          h === this ? wu(p == null ? void 0 : p.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((f) => {
        var p;
        return (p = f.currentAnimation) == null ? void 0 : p.stop();
      }),
        this.root.nodes.forEach(py),
        this.root.sharedNodes.clear();
    }
  };
}
function VD(t) {
  t.updateLayout();
}
function kD(t) {
  var r;
  const n = ((r = t.resumeFrom) == null ? void 0 : r.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: l } = t.layout,
      { animationType: c } = t.options,
      f = n.source !== t.layout.source;
    c === "size"
      ? Hn((v) => {
          const y = f ? n.measuredBox[v] : n.layoutBox[v],
            g = en(y);
          (y.min = s[v].min), (y.max = y.min + g);
        })
      : X2(c, n.layoutBox, s) &&
        Hn((v) => {
          const y = f ? n.measuredBox[v] : n.layoutBox[v],
            g = en(s[v]);
          (y.max = y.min + g),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[v].max = t.relativeTarget[v].min + g));
        });
    const p = Ga();
    co(p, s, n.layoutBox);
    const x = Ga();
    f ? co(x, t.applyTransform(l, !0), n.measuredBox) : co(x, s, n.layoutBox);
    const h = !q2(p);
    let m = !1;
    if (!t.resumeFrom) {
      const v = t.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: y, layout: g } = v;
        if (y && g) {
          const b = gt();
          fo(b, n.layoutBox, y.layoutBox);
          const S = gt();
          fo(S, s, g.layoutBox),
            j2(b, S) || (m = !0),
            v.options.layoutRoot &&
              ((t.relativeTarget = S),
              (t.relativeTargetOrigin = b),
              (t.relativeParent = v));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: n,
      delta: x,
      layoutDelta: p,
      hasLayoutChanged: h,
      hasRelativeLayoutChanged: m,
    });
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options;
    s && s();
  }
  t.options.transition = void 0;
}
function qD(t) {
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
function jD(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function PD(t) {
  t.clearSnapshot();
}
function py(t) {
  t.clearMeasurements();
}
function xy(t) {
  t.isLayoutDirty = !1;
}
function YD(t) {
  const { visualElement: n } = t.options;
  n && n.getProps().onBeforeLayoutMeasure && n.notify("BeforeLayoutMeasure"),
    t.resetTransform();
}
function my(t) {
  t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0);
}
function XD(t) {
  t.resolveTargetDelta();
}
function GD(t) {
  t.calcProjection();
}
function KD(t) {
  t.resetSkewAndRotation();
}
function QD(t) {
  t.removeLeadSnapshot();
}
function vy(t, n, r) {
  (t.translate = ht(n.translate, 0, r)),
    (t.scale = ht(n.scale, 1, r)),
    (t.origin = n.origin),
    (t.originPoint = n.originPoint);
}
function yy(t, n, r, s) {
  (t.min = ht(n.min, r.min, s)), (t.max = ht(n.max, r.max, s));
}
function ZD(t, n, r, s) {
  yy(t.x, n.x, r.x, s), yy(t.y, n.y, r.y, s);
}
function WD(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const $D = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  gy = (t) =>
    typeof navigator != "undefined" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(t),
  Ey = gy("applewebkit/") && !gy("chrome/") ? Math.round : qn;
function by(t) {
  (t.min = Ey(t.min)), (t.max = Ey(t.max));
}
function JD(t) {
  by(t.x), by(t.y);
}
function X2(t, n, r) {
  return (
    t === "position" || (t === "preserve-aspect" && !rD(hy(n), hy(r), 0.2))
  );
}
function ID(t) {
  var n;
  return t !== t.root && ((n = t.scroll) == null ? void 0 : n.wasRoot);
}
const e5 = Y2({
    attachResizeListener: (t, n) => Eo(t, "resize", n),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Vf = { current: void 0 },
  G2 = Y2({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!Vf.current) {
        const t = new e5({});
        t.mount(window), t.setOptions({ layoutScroll: !0 }), (Vf.current = t);
      }
      return Vf.current;
    },
    resetTransform: (t, n) => {
      t.style.transform = n !== void 0 ? n : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  t5 = {
    pan: { Feature: gD },
    drag: { Feature: yD, ProjectionNode: G2, MeasureLayout: H2 },
  };
function Ay(t, n, r) {
  const { props: s } = t;
  t.animationState &&
    s.whileHover &&
    t.animationState.setActive("whileHover", r === "Start");
  const l = "onHover" + r,
    c = s[l];
  c && lt.postRender(() => c(n, Bo(n)));
}
class n5 extends br {
  mount() {
    const { current: n } = this.node;
    n &&
      (this.unmount = S6(
        n,
        (r, s) => (Ay(this.node, s, "Start"), (l) => Ay(this.node, l, "End")),
      ));
  }
  unmount() {}
}
class i5 extends br {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let n = !1;
    try {
      n = this.node.current.matches(":focus-visible");
    } catch (r) {
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
    this.unmount = So(
      Eo(this.node.current, "focus", () => this.onFocus()),
      Eo(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Sy(t, n, r) {
  const { props: s } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState &&
    s.whileTap &&
    t.animationState.setActive("whileTap", r === "Start");
  const l = "onTap" + (r === "End" ? "" : r),
    c = s[l];
  c && lt.postRender(() => c(n, Bo(n)));
}
class r5 extends br {
  mount() {
    const { current: n } = this.node;
    n &&
      (this.unmount = T6(
        n,
        (r, s) => (
          Sy(this.node, s, "Start"),
          (l, { success: c }) => Sy(this.node, l, c ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const vh = new WeakMap(),
  kf = new WeakMap(),
  a5 = (t) => {
    const n = vh.get(t.target);
    n && n(t);
  },
  s5 = (t) => {
    t.forEach(a5);
  };
function o5(r) {
  var s = r,
    { root: t } = s,
    n = zn(s, ["root"]);
  const l = t || document;
  kf.has(l) || kf.set(l, {});
  const c = kf.get(l),
    f = JSON.stringify(n);
  return (
    c[f] || (c[f] = new IntersectionObserver(s5, ue({ root: t }, n))), c[f]
  );
}
function l5(t, n, r) {
  const s = o5(n);
  return (
    vh.set(t, r),
    s.observe(t),
    () => {
      vh.delete(t), s.unobserve(t);
    }
  );
}
const u5 = { some: 0, all: 1 };
class c5 extends br {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: n = {} } = this.node.getProps(),
      { root: r, margin: s, amount: l = "some", once: c } = n,
      f = {
        root: r ? r.current : void 0,
        rootMargin: s,
        threshold: typeof l == "number" ? l : u5[l],
      },
      p = (x) => {
        const { isIntersecting: h } = x;
        if (
          this.isInView === h ||
          ((this.isInView = h), c && !h && this.hasEnteredView)
        )
          return;
        h && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", h);
        const { onViewportEnter: m, onViewportLeave: v } = this.node.getProps(),
          y = h ? m : v;
        y && y(x);
      };
    return l5(this.node.current, f, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver == "undefined") return;
    const { props: n, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(f5(n, r)) && this.startObserver();
  }
  unmount() {}
}
function f5({ viewport: t = {} }, { viewport: n = {} } = {}) {
  return (r) => t[r] !== n[r];
}
const h5 = {
    inView: { Feature: c5 },
    tap: { Feature: r5 },
    focus: { Feature: i5 },
    hover: { Feature: n5 },
  },
  d5 = { layout: { ProjectionNode: G2, MeasureLayout: H2 } },
  p5 = ue(ue(ue(ue({}, JC), h5), t5), d5),
  GT = pC(p5, TC);
function K2(t, n) {
  return function () {
    return t.apply(n, arguments);
  };
}
const { toString: x5 } = Object.prototype,
  { getPrototypeOf: xd } = Object,
  { iterator: rc, toStringTag: Q2 } = Symbol,
  ac = ((t) => (n) => {
    const r = x5.call(n);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ni = (t) => ((t = t.toLowerCase()), (n) => ac(n) === t),
  sc = (t) => (n) => typeof n === t,
  { isArray: ns } = Array,
  $a = sc("undefined");
function To(t) {
  return (
    t !== null &&
    !$a(t) &&
    t.constructor !== null &&
    !$a(t.constructor) &&
    un(t.constructor.isBuffer) &&
    t.constructor.isBuffer(t)
  );
}
const Z2 = ni("ArrayBuffer");
function m5(t) {
  let n;
  return (
    typeof ArrayBuffer != "undefined" && ArrayBuffer.isView
      ? (n = ArrayBuffer.isView(t))
      : (n = t && t.buffer && Z2(t.buffer)),
    n
  );
}
const v5 = sc("string"),
  un = sc("function"),
  W2 = sc("number"),
  _o = (t) => t !== null && typeof t == "object",
  y5 = (t) => t === !0 || t === !1,
  Mu = (t) => {
    if (ac(t) !== "object") return !1;
    const n = xd(t);
    return (
      (n === null ||
        n === Object.prototype ||
        Object.getPrototypeOf(n) === null) &&
      !(Q2 in t) &&
      !(rc in t)
    );
  },
  g5 = (t) => {
    if (!_o(t) || To(t)) return !1;
    try {
      return (
        Object.keys(t).length === 0 &&
        Object.getPrototypeOf(t) === Object.prototype
      );
    } catch (n) {
      return !1;
    }
  },
  E5 = ni("Date"),
  b5 = ni("File"),
  A5 = ni("Blob"),
  S5 = ni("FileList"),
  C5 = (t) => _o(t) && un(t.pipe),
  D5 = (t) => {
    let n;
    return (
      t &&
      ((typeof FormData == "function" && t instanceof FormData) ||
        (un(t.append) &&
          ((n = ac(t)) === "formdata" ||
            (n === "object" &&
              un(t.toString) &&
              t.toString() === "[object FormData]"))))
    );
  },
  B5 = ni("URLSearchParams"),
  [T5, _5, R5, w5] = ["ReadableStream", "Request", "Response", "Headers"].map(
    ni,
  ),
  O5 = (t) =>
    t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ro(t, n, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t == "undefined") return;
  let s, l;
  if ((typeof t != "object" && (t = [t]), ns(t)))
    for (s = 0, l = t.length; s < l; s++) n.call(null, t[s], s, t);
  else {
    if (To(t)) return;
    const c = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
      f = c.length;
    let p;
    for (s = 0; s < f; s++) (p = c[s]), n.call(null, t[p], p, t);
  }
}
function $2(t, n) {
  if (To(t)) return null;
  n = n.toLowerCase();
  const r = Object.keys(t);
  let s = r.length,
    l;
  for (; s-- > 0; ) if (((l = r[s]), n === l.toLowerCase())) return l;
  return null;
}
const ea =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
        ? self
        : typeof window != "undefined"
          ? window
          : global,
  J2 = (t) => !$a(t) && t !== ea;
function yh() {
  const { caseless: t, skipUndefined: n } = (J2(this) && this) || {},
    r = {},
    s = (l, c) => {
      const f = (t && $2(r, c)) || c;
      Mu(r[f]) && Mu(l)
        ? (r[f] = yh(r[f], l))
        : Mu(l)
          ? (r[f] = yh({}, l))
          : ns(l)
            ? (r[f] = l.slice())
            : (!n || !$a(l)) && (r[f] = l);
    };
  for (let l = 0, c = arguments.length; l < c; l++)
    arguments[l] && Ro(arguments[l], s);
  return r;
}
const M5 = (t, n, r, { allOwnKeys: s } = {}) => (
    Ro(
      n,
      (l, c) => {
        r && un(l) ? (t[c] = K2(l, r)) : (t[c] = l);
      },
      { allOwnKeys: s },
    ),
    t
  ),
  F5 = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
  L5 = (t, n, r, s) => {
    (t.prototype = Object.create(n.prototype, s)),
      (t.prototype.constructor = t),
      Object.defineProperty(t, "super", { value: n.prototype }),
      r && Object.assign(t.prototype, r);
  },
  U5 = (t, n, r, s) => {
    let l, c, f;
    const p = {};
    if (((n = n || {}), t == null)) return n;
    do {
      for (l = Object.getOwnPropertyNames(t), c = l.length; c-- > 0; )
        (f = l[c]), (!s || s(f, t, n)) && !p[f] && ((n[f] = t[f]), (p[f] = !0));
      t = r !== !1 && xd(t);
    } while (t && (!r || r(t, n)) && t !== Object.prototype);
    return n;
  },
  z5 = (t, n, r) => {
    (t = String(t)),
      (r === void 0 || r > t.length) && (r = t.length),
      (r -= n.length);
    const s = t.indexOf(n, r);
    return s !== -1 && s === r;
  },
  N5 = (t) => {
    if (!t) return null;
    if (ns(t)) return t;
    let n = t.length;
    if (!W2(n)) return null;
    const r = new Array(n);
    for (; n-- > 0; ) r[n] = t[n];
    return r;
  },
  H5 = (
    (t) => (n) =>
      t && n instanceof t
  )(typeof Uint8Array != "undefined" && xd(Uint8Array)),
  V5 = (t, n) => {
    const s = (t && t[rc]).call(t);
    let l;
    for (; (l = s.next()) && !l.done; ) {
      const c = l.value;
      n.call(t, c[0], c[1]);
    }
  },
  k5 = (t, n) => {
    let r;
    const s = [];
    for (; (r = t.exec(n)) !== null; ) s.push(r);
    return s;
  },
  q5 = ni("HTMLFormElement"),
  j5 = (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, s, l) {
      return s.toUpperCase() + l;
    }),
  Cy = (
    ({ hasOwnProperty: t }) =>
    (n, r) =>
      t.call(n, r)
  )(Object.prototype),
  P5 = ni("RegExp"),
  I2 = (t, n) => {
    const r = Object.getOwnPropertyDescriptors(t),
      s = {};
    Ro(r, (l, c) => {
      let f;
      (f = n(l, c, t)) !== !1 && (s[c] = f || l);
    }),
      Object.defineProperties(t, s);
  },
  Y5 = (t) => {
    I2(t, (n, r) => {
      if (un(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
        return !1;
      const s = t[r];
      if (un(s)) {
        if (((n.enumerable = !1), "writable" in n)) {
          n.writable = !1;
          return;
        }
        n.set ||
          (n.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  X5 = (t, n) => {
    const r = {},
      s = (l) => {
        l.forEach((c) => {
          r[c] = !0;
        });
      };
    return ns(t) ? s(t) : s(String(t).split(n)), r;
  },
  G5 = () => {},
  K5 = (t, n) => (t != null && Number.isFinite((t = +t)) ? t : n);
function Q5(t) {
  return !!(t && un(t.append) && t[Q2] === "FormData" && t[rc]);
}
const Z5 = (t) => {
    const n = new Array(10),
      r = (s, l) => {
        if (_o(s)) {
          if (n.indexOf(s) >= 0) return;
          if (To(s)) return s;
          if (!("toJSON" in s)) {
            n[l] = s;
            const c = ns(s) ? [] : {};
            return (
              Ro(s, (f, p) => {
                const x = r(f, l + 1);
                !$a(x) && (c[p] = x);
              }),
              (n[l] = void 0),
              c
            );
          }
        }
        return s;
      };
    return r(t, 0);
  },
  W5 = ni("AsyncFunction"),
  $5 = (t) => t && (_o(t) || un(t)) && un(t.then) && un(t.catch),
  eE = ((t, n) =>
    t
      ? setImmediate
      : n
        ? ((r, s) => (
            ea.addEventListener(
              "message",
              ({ source: l, data: c }) => {
                l === ea && c === r && s.length && s.shift()();
              },
              !1,
            ),
            (l) => {
              s.push(l), ea.postMessage(r, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (r) => setTimeout(r))(
    typeof setImmediate == "function",
    un(ea.postMessage),
  ),
  J5 =
    typeof queueMicrotask != "undefined"
      ? queueMicrotask.bind(ea)
      : (typeof process != "undefined" && process.nextTick) || eE,
  I5 = (t) => t != null && un(t[rc]),
  W = {
    isArray: ns,
    isArrayBuffer: Z2,
    isBuffer: To,
    isFormData: D5,
    isArrayBufferView: m5,
    isString: v5,
    isNumber: W2,
    isBoolean: y5,
    isObject: _o,
    isPlainObject: Mu,
    isEmptyObject: g5,
    isReadableStream: T5,
    isRequest: _5,
    isResponse: R5,
    isHeaders: w5,
    isUndefined: $a,
    isDate: E5,
    isFile: b5,
    isBlob: A5,
    isRegExp: P5,
    isFunction: un,
    isStream: C5,
    isURLSearchParams: B5,
    isTypedArray: H5,
    isFileList: S5,
    forEach: Ro,
    merge: yh,
    extend: M5,
    trim: O5,
    stripBOM: F5,
    inherits: L5,
    toFlatObject: U5,
    kindOf: ac,
    kindOfTest: ni,
    endsWith: z5,
    toArray: N5,
    forEachEntry: V5,
    matchAll: k5,
    isHTMLForm: q5,
    hasOwnProperty: Cy,
    hasOwnProp: Cy,
    reduceDescriptors: I2,
    freezeMethods: Y5,
    toObjectSet: X5,
    toCamelCase: j5,
    noop: G5,
    toFiniteNumber: K5,
    findKey: $2,
    global: ea,
    isContextDefined: J2,
    isSpecCompliantForm: Q5,
    toJSONObject: Z5,
    isAsyncFn: W5,
    isThenable: $5,
    setImmediate: eE,
    asap: J5,
    isIterable: I5,
  };
function Re(t, n, r, s, l) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = t),
    (this.name = "AxiosError"),
    n && (this.code = n),
    r && (this.config = r),
    s && (this.request = s),
    l && ((this.response = l), (this.status = l.status ? l.status : null));
}
W.inherits(Re, Error, {
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
const tE = Re.prototype,
  nE = {};
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
  nE[t] = { value: t };
});
Object.defineProperties(Re, nE);
Object.defineProperty(tE, "isAxiosError", { value: !0 });
Re.from = (t, n, r, s, l, c) => {
  const f = Object.create(tE);
  W.toFlatObject(
    t,
    f,
    function (m) {
      return m !== Error.prototype;
    },
    (h) => h !== "isAxiosError",
  );
  const p = t && t.message ? t.message : "Error",
    x = n == null && t ? t.code : n;
  return (
    Re.call(f, p, x, r, s, l),
    t &&
      f.cause == null &&
      Object.defineProperty(f, "cause", { value: t, configurable: !0 }),
    (f.name = (t && t.name) || "Error"),
    c && Object.assign(f, c),
    f
  );
};
const eB = null;
function gh(t) {
  return W.isPlainObject(t) || W.isArray(t);
}
function iE(t) {
  return W.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Dy(t, n, r) {
  return t
    ? t
        .concat(n)
        .map(function (l, c) {
          return (l = iE(l)), !r && c ? "[" + l + "]" : l;
        })
        .join(r ? "." : "")
    : n;
}
function tB(t) {
  return W.isArray(t) && !t.some(gh);
}
const nB = W.toFlatObject(W, {}, null, function (n) {
  return /^is[A-Z]/.test(n);
});
function oc(t, n, r) {
  if (!W.isObject(t)) throw new TypeError("target must be an object");
  (n = n || new FormData()),
    (r = W.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (S, A) {
        return !W.isUndefined(A[S]);
      },
    ));
  const s = r.metaTokens,
    l = r.visitor || m,
    c = r.dots,
    f = r.indexes,
    x =
      (r.Blob || (typeof Blob != "undefined" && Blob)) &&
      W.isSpecCompliantForm(n);
  if (!W.isFunction(l)) throw new TypeError("visitor must be a function");
  function h(b) {
    if (b === null) return "";
    if (W.isDate(b)) return b.toISOString();
    if (W.isBoolean(b)) return b.toString();
    if (!x && W.isBlob(b))
      throw new Re("Blob is not supported. Use a Buffer instead.");
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
        (W.isArray(b) && tB(b)) ||
        ((W.isFileList(b) || W.endsWith(S, "[]")) && (R = W.toArray(b)))
      )
        return (
          (S = iE(S)),
          R.forEach(function (D, _) {
            !(W.isUndefined(D) || D === null) &&
              n.append(
                f === !0 ? Dy([S], _, c) : f === null ? S : S + "[]",
                h(D),
              );
          }),
          !1
        );
    }
    return gh(b) ? !0 : (n.append(Dy(A, S, c), h(b)), !1);
  }
  const v = [],
    y = Object.assign(nB, {
      defaultVisitor: m,
      convertValue: h,
      isVisitable: gh,
    });
  function g(b, S) {
    if (!W.isUndefined(b)) {
      if (v.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      v.push(b),
        W.forEach(b, function (R, C) {
          (!(W.isUndefined(R) || R === null) &&
            l.call(n, R, W.isString(C) ? C.trim() : C, S, y)) === !0 &&
            g(R, S ? S.concat(C) : [C]);
        }),
        v.pop();
    }
  }
  if (!W.isObject(t)) throw new TypeError("data must be an object");
  return g(t), n;
}
function By(t) {
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
function md(t, n) {
  (this._pairs = []), t && oc(t, this, n);
}
const rE = md.prototype;
rE.append = function (n, r) {
  this._pairs.push([n, r]);
};
rE.toString = function (n) {
  const r = n
    ? function (s) {
        return n.call(this, s, By);
      }
    : By;
  return this._pairs
    .map(function (l) {
      return r(l[0]) + "=" + r(l[1]);
    }, "")
    .join("&");
};
function iB(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function aE(t, n, r) {
  if (!n) return t;
  const s = (r && r.encode) || iB;
  W.isFunction(r) && (r = { serialize: r });
  const l = r && r.serialize;
  let c;
  if (
    (l
      ? (c = l(n, r))
      : (c = W.isURLSearchParams(n) ? n.toString() : new md(n, r).toString(s)),
    c)
  ) {
    const f = t.indexOf("#");
    f !== -1 && (t = t.slice(0, f)),
      (t += (t.indexOf("?") === -1 ? "?" : "&") + c);
  }
  return t;
}
class Ty {
  constructor() {
    this.handlers = [];
  }
  use(n, r, s) {
    return (
      this.handlers.push({
        fulfilled: n,
        rejected: r,
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
const sE = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  rB = typeof URLSearchParams != "undefined" ? URLSearchParams : md,
  aB = typeof FormData != "undefined" ? FormData : null,
  sB = typeof Blob != "undefined" ? Blob : null,
  oB = {
    isBrowser: !0,
    classes: { URLSearchParams: rB, FormData: aB, Blob: sB },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  vd = typeof window != "undefined" && typeof document != "undefined",
  Eh = (typeof navigator == "object" && navigator) || void 0,
  lB =
    vd &&
    (!Eh || ["ReactNative", "NativeScript", "NS"].indexOf(Eh.product) < 0),
  uB =
    typeof WorkerGlobalScope != "undefined" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  cB = (vd && window.location.href) || "http://localhost",
  fB = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: vd,
        hasStandardBrowserEnv: lB,
        hasStandardBrowserWebWorkerEnv: uB,
        navigator: Eh,
        origin: cB,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Qt = ue(ue({}, fB), oB);
function hB(t, n) {
  return oc(
    t,
    new Qt.classes.URLSearchParams(),
    ue(
      {
        visitor: function (r, s, l, c) {
          return Qt.isNode && W.isBuffer(r)
            ? (this.append(s, r.toString("base64")), !1)
            : c.defaultVisitor.apply(this, arguments);
        },
      },
      n,
    ),
  );
}
function dB(t) {
  return W.matchAll(/\w+|\[(\w*)]/g, t).map((n) =>
    n[0] === "[]" ? "" : n[1] || n[0],
  );
}
function pB(t) {
  const n = {},
    r = Object.keys(t);
  let s;
  const l = r.length;
  let c;
  for (s = 0; s < l; s++) (c = r[s]), (n[c] = t[c]);
  return n;
}
function oE(t) {
  function n(r, s, l, c) {
    let f = r[c++];
    if (f === "__proto__") return !0;
    const p = Number.isFinite(+f),
      x = c >= r.length;
    return (
      (f = !f && W.isArray(l) ? l.length : f),
      x
        ? (W.hasOwnProp(l, f) ? (l[f] = [l[f], s]) : (l[f] = s), !p)
        : ((!l[f] || !W.isObject(l[f])) && (l[f] = []),
          n(r, s, l[f], c) && W.isArray(l[f]) && (l[f] = pB(l[f])),
          !p)
    );
  }
  if (W.isFormData(t) && W.isFunction(t.entries)) {
    const r = {};
    return (
      W.forEachEntry(t, (s, l) => {
        n(dB(s), l, r, 0);
      }),
      r
    );
  }
  return null;
}
function xB(t, n, r) {
  if (W.isString(t))
    try {
      return (n || JSON.parse)(t), W.trim(t);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (r || JSON.stringify)(t);
}
const wo = {
  transitional: sE,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (n, r) {
      const s = r.getContentType() || "",
        l = s.indexOf("application/json") > -1,
        c = W.isObject(n);
      if ((c && W.isHTMLForm(n) && (n = new FormData(n)), W.isFormData(n)))
        return l ? JSON.stringify(oE(n)) : n;
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
          r.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          n.toString()
        );
      let p;
      if (c) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return hB(n, this.formSerializer).toString();
        if ((p = W.isFileList(n)) || s.indexOf("multipart/form-data") > -1) {
          const x = this.env && this.env.FormData;
          return oc(
            p ? { "files[]": n } : n,
            x && new x(),
            this.formSerializer,
          );
        }
      }
      return c || l ? (r.setContentType("application/json", !1), xB(n)) : n;
    },
  ],
  transformResponse: [
    function (n) {
      const r = this.transitional || wo.transitional,
        s = r && r.forcedJSONParsing,
        l = this.responseType === "json";
      if (W.isResponse(n) || W.isReadableStream(n)) return n;
      if (n && W.isString(n) && ((s && !this.responseType) || l)) {
        const f = !(r && r.silentJSONParsing) && l;
        try {
          return JSON.parse(n, this.parseReviver);
        } catch (p) {
          if (f)
            throw p.name === "SyntaxError"
              ? Re.from(p, Re.ERR_BAD_RESPONSE, this, null, this.response)
              : p;
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
  wo.headers[t] = {};
});
const mB = W.toObjectSet([
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
  vB = (t) => {
    const n = {};
    let r, s, l;
    return (
      t &&
        t
          .split(
            `
`,
          )
          .forEach(function (f) {
            (l = f.indexOf(":")),
              (r = f.substring(0, l).trim().toLowerCase()),
              (s = f.substring(l + 1).trim()),
              !(!r || (n[r] && mB[r])) &&
                (r === "set-cookie"
                  ? n[r]
                    ? n[r].push(s)
                    : (n[r] = [s])
                  : (n[r] = n[r] ? n[r] + ", " + s : s));
          }),
      n
    );
  },
  _y = Symbol("internals");
function no(t) {
  return t && String(t).trim().toLowerCase();
}
function Fu(t) {
  return t === !1 || t == null ? t : W.isArray(t) ? t.map(Fu) : String(t);
}
function yB(t) {
  const n = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = r.exec(t)); ) n[s[1]] = s[2];
  return n;
}
const gB = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function qf(t, n, r, s, l) {
  if (W.isFunction(s)) return s.call(this, n, r);
  if ((l && (n = r), !!W.isString(n))) {
    if (W.isString(s)) return n.indexOf(s) !== -1;
    if (W.isRegExp(s)) return s.test(n);
  }
}
function EB(t) {
  return t
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (n, r, s) => r.toUpperCase() + s);
}
function bB(t, n) {
  const r = W.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(t, s + r, {
      value: function (l, c, f) {
        return this[s].call(this, n, l, c, f);
      },
      configurable: !0,
    });
  });
}
let cn = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, r, s) {
    const l = this;
    function c(p, x, h) {
      const m = no(x);
      if (!m) throw new Error("header name must be a non-empty string");
      const v = W.findKey(l, m);
      (!v || l[v] === void 0 || h === !0 || (h === void 0 && l[v] !== !1)) &&
        (l[v || x] = Fu(p));
    }
    const f = (p, x) => W.forEach(p, (h, m) => c(h, m, x));
    if (W.isPlainObject(n) || n instanceof this.constructor) f(n, r);
    else if (W.isString(n) && (n = n.trim()) && !gB(n)) f(vB(n), r);
    else if (W.isObject(n) && W.isIterable(n)) {
      let p = {},
        x,
        h;
      for (const m of n) {
        if (!W.isArray(m))
          throw TypeError("Object iterator must return a key-value pair");
        p[(h = m[0])] = (x = p[h])
          ? W.isArray(x)
            ? [...x, m[1]]
            : [x, m[1]]
          : m[1];
      }
      f(p, r);
    } else n != null && c(r, n, s);
    return this;
  }
  get(n, r) {
    if (((n = no(n)), n)) {
      const s = W.findKey(this, n);
      if (s) {
        const l = this[s];
        if (!r) return l;
        if (r === !0) return yB(l);
        if (W.isFunction(r)) return r.call(this, l, s);
        if (W.isRegExp(r)) return r.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, r) {
    if (((n = no(n)), n)) {
      const s = W.findKey(this, n);
      return !!(s && this[s] !== void 0 && (!r || qf(this, this[s], s, r)));
    }
    return !1;
  }
  delete(n, r) {
    const s = this;
    let l = !1;
    function c(f) {
      if (((f = no(f)), f)) {
        const p = W.findKey(s, f);
        p && (!r || qf(s, s[p], p, r)) && (delete s[p], (l = !0));
      }
    }
    return W.isArray(n) ? n.forEach(c) : c(n), l;
  }
  clear(n) {
    const r = Object.keys(this);
    let s = r.length,
      l = !1;
    for (; s--; ) {
      const c = r[s];
      (!n || qf(this, this[c], c, n, !0)) && (delete this[c], (l = !0));
    }
    return l;
  }
  normalize(n) {
    const r = this,
      s = {};
    return (
      W.forEach(this, (l, c) => {
        const f = W.findKey(s, c);
        if (f) {
          (r[f] = Fu(l)), delete r[c];
          return;
        }
        const p = n ? EB(c) : String(c).trim();
        p !== c && delete r[c], (r[p] = Fu(l)), (s[p] = !0);
      }),
      this
    );
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const r = Object.create(null);
    return (
      W.forEach(this, (s, l) => {
        s != null && s !== !1 && (r[l] = n && W.isArray(s) ? s.join(", ") : s);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([n, r]) => n + ": " + r).join(`
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
  static concat(n, ...r) {
    const s = new this(n);
    return r.forEach((l) => s.set(l)), s;
  }
  static accessor(n) {
    const s = (this[_y] = this[_y] = { accessors: {} }).accessors,
      l = this.prototype;
    function c(f) {
      const p = no(f);
      s[p] || (bB(l, f), (s[p] = !0));
    }
    return W.isArray(n) ? n.forEach(c) : c(n), this;
  }
};
cn.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
W.reduceDescriptors(cn.prototype, ({ value: t }, n) => {
  let r = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => t,
    set(s) {
      this[r] = s;
    },
  };
});
W.freezeMethods(cn);
function jf(t, n) {
  const r = this || wo,
    s = n || r,
    l = cn.from(s.headers);
  let c = s.data;
  return (
    W.forEach(t, function (p) {
      c = p.call(r, c, l.normalize(), n ? n.status : void 0);
    }),
    l.normalize(),
    c
  );
}
function lE(t) {
  return !!(t && t.__CANCEL__);
}
function is(t, n, r) {
  Re.call(this, t == null ? "canceled" : t, Re.ERR_CANCELED, n, r),
    (this.name = "CanceledError");
}
W.inherits(is, Re, { __CANCEL__: !0 });
function uE(t, n, r) {
  const s = r.config.validateStatus;
  !r.status || !s || s(r.status)
    ? t(r)
    : n(
        new Re(
          "Request failed with status code " + r.status,
          [Re.ERR_BAD_REQUEST, Re.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r,
        ),
      );
}
function AB(t) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return (n && n[1]) || "";
}
function SB(t, n) {
  t = t || 10;
  const r = new Array(t),
    s = new Array(t);
  let l = 0,
    c = 0,
    f;
  return (
    (n = n !== void 0 ? n : 1e3),
    function (x) {
      const h = Date.now(),
        m = s[c];
      f || (f = h), (r[l] = x), (s[l] = h);
      let v = c,
        y = 0;
      for (; v !== l; ) (y += r[v++]), (v = v % t);
      if (((l = (l + 1) % t), l === c && (c = (c + 1) % t), h - f < n)) return;
      const g = m && h - m;
      return g ? Math.round((y * 1e3) / g) : void 0;
    }
  );
}
function CB(t, n) {
  let r = 0,
    s = 1e3 / n,
    l,
    c;
  const f = (h, m = Date.now()) => {
    (r = m), (l = null), c && (clearTimeout(c), (c = null)), t(...h);
  };
  return [
    (...h) => {
      const m = Date.now(),
        v = m - r;
      v >= s
        ? f(h, m)
        : ((l = h),
          c ||
            (c = setTimeout(() => {
              (c = null), f(l);
            }, s - v)));
    },
    () => l && f(l),
  ];
}
const Qu = (t, n, r = 3) => {
    let s = 0;
    const l = SB(50, 250);
    return CB((c) => {
      const f = c.loaded,
        p = c.lengthComputable ? c.total : void 0,
        x = f - s,
        h = l(x),
        m = f <= p;
      s = f;
      const v = {
        loaded: f,
        total: p,
        progress: p ? f / p : void 0,
        bytes: x,
        rate: h || void 0,
        estimated: h && p && m ? (p - f) / h : void 0,
        event: c,
        lengthComputable: p != null,
        [n ? "download" : "upload"]: !0,
      };
      t(v);
    }, r);
  },
  Ry = (t, n) => {
    const r = t != null;
    return [(s) => n[0]({ lengthComputable: r, total: t, loaded: s }), n[1]];
  },
  wy =
    (t) =>
    (...n) =>
      W.asap(() => t(...n)),
  DB = Qt.hasStandardBrowserEnv
    ? ((t, n) => (r) => (
        (r = new URL(r, Qt.origin)),
        t.protocol === r.protocol &&
          t.host === r.host &&
          (n || t.port === r.port)
      ))(
        new URL(Qt.origin),
        Qt.navigator && /(msie|trident)/i.test(Qt.navigator.userAgent),
      )
    : () => !0,
  BB = Qt.hasStandardBrowserEnv
    ? {
        write(t, n, r, s, l, c, f) {
          if (typeof document == "undefined") return;
          const p = [`${t}=${encodeURIComponent(n)}`];
          W.isNumber(r) && p.push(`expires=${new Date(r).toUTCString()}`),
            W.isString(s) && p.push(`path=${s}`),
            W.isString(l) && p.push(`domain=${l}`),
            c === !0 && p.push("secure"),
            W.isString(f) && p.push(`SameSite=${f}`),
            (document.cookie = p.join("; "));
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
function TB(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function _B(t, n) {
  return n ? t.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : t;
}
function cE(t, n, r) {
  let s = !TB(n);
  return t && (s || r == !1) ? _B(t, n) : n;
}
const Oy = (t) => (t instanceof cn ? ue({}, t) : t);
function aa(t, n) {
  n = n || {};
  const r = {};
  function s(h, m, v, y) {
    return W.isPlainObject(h) && W.isPlainObject(m)
      ? W.merge.call({ caseless: y }, h, m)
      : W.isPlainObject(m)
        ? W.merge({}, m)
        : W.isArray(m)
          ? m.slice()
          : m;
  }
  function l(h, m, v, y) {
    if (W.isUndefined(m)) {
      if (!W.isUndefined(h)) return s(void 0, h, v, y);
    } else return s(h, m, v, y);
  }
  function c(h, m) {
    if (!W.isUndefined(m)) return s(void 0, m);
  }
  function f(h, m) {
    if (W.isUndefined(m)) {
      if (!W.isUndefined(h)) return s(void 0, h);
    } else return s(void 0, m);
  }
  function p(h, m, v) {
    if (v in n) return s(h, m);
    if (v in t) return s(void 0, h);
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
    validateStatus: p,
    headers: (h, m, v) => l(Oy(h), Oy(m), v, !0),
  };
  return (
    W.forEach(Object.keys(ue(ue({}, t), n)), function (m) {
      const v = x[m] || l,
        y = v(t[m], n[m], m);
      (W.isUndefined(y) && v !== p) || (r[m] = y);
    }),
    r
  );
}
const fE = (t) => {
    const n = aa({}, t);
    let {
      data: r,
      withXSRFToken: s,
      xsrfHeaderName: l,
      xsrfCookieName: c,
      headers: f,
      auth: p,
    } = n;
    if (
      ((n.headers = f = cn.from(f)),
      (n.url = aE(
        cE(n.baseURL, n.url, n.allowAbsoluteUrls),
        t.params,
        t.paramsSerializer,
      )),
      p &&
        f.set(
          "Authorization",
          "Basic " +
            btoa(
              (p.username || "") +
                ":" +
                (p.password ? unescape(encodeURIComponent(p.password)) : ""),
            ),
        ),
      W.isFormData(r))
    ) {
      if (Qt.hasStandardBrowserEnv || Qt.hasStandardBrowserWebWorkerEnv)
        f.setContentType(void 0);
      else if (W.isFunction(r.getHeaders)) {
        const x = r.getHeaders(),
          h = ["content-type", "content-length"];
        Object.entries(x).forEach(([m, v]) => {
          h.includes(m.toLowerCase()) && f.set(m, v);
        });
      }
    }
    if (
      Qt.hasStandardBrowserEnv &&
      (s && W.isFunction(s) && (s = s(n)), s || (s !== !1 && DB(n.url)))
    ) {
      const x = l && c && BB.read(c);
      x && f.set(l, x);
    }
    return n;
  },
  RB = typeof XMLHttpRequest != "undefined",
  wB =
    RB &&
    function (t) {
      return new Promise(function (r, s) {
        const l = fE(t);
        let c = l.data;
        const f = cn.from(l.headers).normalize();
        let { responseType: p, onUploadProgress: x, onDownloadProgress: h } = l,
          m,
          v,
          y,
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
          const D = cn.from(
              "getAllResponseHeaders" in A && A.getAllResponseHeaders(),
            ),
            w = {
              data:
                !p || p === "text" || p === "json"
                  ? A.responseText
                  : A.response,
              status: A.status,
              statusText: A.statusText,
              headers: D,
              config: t,
              request: A,
            };
          uE(
            function (T) {
              r(T), S();
            },
            function (T) {
              s(T), S();
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
              (s(new Re("Request aborted", Re.ECONNABORTED, t, A)), (A = null));
          }),
          (A.onerror = function (_) {
            const w = _ && _.message ? _.message : "Network Error",
              L = new Re(w, Re.ERR_NETWORK, t, A);
            (L.event = _ || null), s(L), (A = null);
          }),
          (A.ontimeout = function () {
            let _ = l.timeout
              ? "timeout of " + l.timeout + "ms exceeded"
              : "timeout exceeded";
            const w = l.transitional || sE;
            l.timeoutErrorMessage && (_ = l.timeoutErrorMessage),
              s(
                new Re(
                  _,
                  w.clarifyTimeoutError ? Re.ETIMEDOUT : Re.ECONNABORTED,
                  t,
                  A,
                ),
              ),
              (A = null);
          }),
          c === void 0 && f.setContentType(null),
          "setRequestHeader" in A &&
            W.forEach(f.toJSON(), function (_, w) {
              A.setRequestHeader(w, _);
            }),
          W.isUndefined(l.withCredentials) ||
            (A.withCredentials = !!l.withCredentials),
          p && p !== "json" && (A.responseType = l.responseType),
          h && (([y, b] = Qu(h, !0)), A.addEventListener("progress", y)),
          x &&
            A.upload &&
            (([v, g] = Qu(x)),
            A.upload.addEventListener("progress", v),
            A.upload.addEventListener("loadend", g)),
          (l.cancelToken || l.signal) &&
            ((m = (D) => {
              A &&
                (s(!D || D.type ? new is(null, t, A) : D),
                A.abort(),
                (A = null));
            }),
            l.cancelToken && l.cancelToken.subscribe(m),
            l.signal &&
              (l.signal.aborted ? m() : l.signal.addEventListener("abort", m)));
        const C = AB(l.url);
        if (C && Qt.protocols.indexOf(C) === -1) {
          s(new Re("Unsupported protocol " + C + ":", Re.ERR_BAD_REQUEST, t));
          return;
        }
        A.send(c || null);
      });
    },
  OB = (t, n) => {
    const { length: r } = (t = t ? t.filter(Boolean) : []);
    if (n || r) {
      let s = new AbortController(),
        l;
      const c = function (h) {
        if (!l) {
          (l = !0), p();
          const m = h instanceof Error ? h : this.reason;
          s.abort(
            m instanceof Re ? m : new is(m instanceof Error ? m.message : m),
          );
        }
      };
      let f =
        n &&
        setTimeout(() => {
          (f = null), c(new Re(`timeout ${n} of ms exceeded`, Re.ETIMEDOUT));
        }, n);
      const p = () => {
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
      return (x.unsubscribe = () => W.asap(p)), x;
    }
  },
  MB = function* (t, n) {
    let r = t.byteLength;
    if (r < n) {
      yield t;
      return;
    }
    let s = 0,
      l;
    for (; s < r; ) (l = s + n), yield t.slice(s, l), (s = l);
  },
  FB = function (t, n) {
    return pf(this, null, function* () {
      try {
        for (
          var r = Zm(LB(t)), s, l, c;
          (s = !(l = yield new Gr(r.next())).done);
          s = !1
        ) {
          const f = l.value;
          yield* xf(MB(f, n));
        }
      } catch (l) {
        c = [l];
      } finally {
        try {
          s && (l = r.return) && (yield new Gr(l.call(r)));
        } finally {
          if (c) throw c[0];
        }
      }
    });
  },
  LB = function (t) {
    return pf(this, null, function* () {
      if (t[Symbol.asyncIterator]) {
        yield* xf(t);
        return;
      }
      const n = t.getReader();
      try {
        for (;;) {
          const { done: r, value: s } = yield new Gr(n.read());
          if (r) break;
          yield s;
        }
      } finally {
        yield new Gr(n.cancel());
      }
    });
  },
  My = (t, n, r, s) => {
    const l = FB(t, n);
    let c = 0,
      f,
      p = (x) => {
        f || ((f = !0), s && s(x));
      };
    return new ReadableStream(
      {
        async pull(x) {
          try {
            const { done: h, value: m } = await l.next();
            if (h) {
              p(), x.close();
              return;
            }
            let v = m.byteLength;
            if (r) {
              let y = (c += v);
              r(y);
            }
            x.enqueue(new Uint8Array(m));
          } catch (h) {
            throw (p(h), h);
          }
        },
        cancel(x) {
          return p(x), l.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  Fy = 64 * 1024,
  { isFunction: jl } = W,
  UB = (({ Request: t, Response: n }) => ({ Request: t, Response: n }))(
    W.global,
  ),
  { ReadableStream: Ly, TextEncoder: Uy } = W.global,
  zy = (t, ...n) => {
    try {
      return !!t(...n);
    } catch (r) {
      return !1;
    }
  },
  zB = (t) => {
    t = W.merge.call({ skipUndefined: !0 }, UB, t);
    const { fetch: n, Request: r, Response: s } = t,
      l = n ? jl(n) : typeof fetch == "function",
      c = jl(r),
      f = jl(s);
    if (!l) return !1;
    const p = l && jl(Ly),
      x =
        l &&
        (typeof Uy == "function"
          ? (
              (b) => (S) =>
                b.encode(S)
            )(new Uy())
          : async (b) => new Uint8Array(await new r(b).arrayBuffer())),
      h =
        c &&
        p &&
        zy(() => {
          let b = !1;
          const S = new r(Qt.origin, {
            body: new Ly(),
            method: "POST",
            get duplex() {
              return (b = !0), "half";
            },
          }).headers.has("Content-Type");
          return b && !S;
        }),
      m = f && p && zy(() => W.isReadableStream(new s("").body)),
      v = { stream: m && ((b) => b.body) };
    l &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((b) => {
        !v[b] &&
          (v[b] = (S, A) => {
            let R = S && S[b];
            if (R) return R.call(S);
            throw new Re(
              `Response type '${b}' is not supported`,
              Re.ERR_NOT_SUPPORT,
              A,
            );
          });
      });
    const y = async (b) => {
        if (b == null) return 0;
        if (W.isBlob(b)) return b.size;
        if (W.isSpecCompliantForm(b))
          return (
            await new r(Qt.origin, { method: "POST", body: b }).arrayBuffer()
          ).byteLength;
        if (W.isArrayBufferView(b) || W.isArrayBuffer(b)) return b.byteLength;
        if ((W.isURLSearchParams(b) && (b = b + ""), W.isString(b)))
          return (await x(b)).byteLength;
      },
      g = async (b, S) => {
        const A = W.toFiniteNumber(b.getContentLength());
        return A == null ? y(S) : A;
      };
    return async (b) => {
      let {
          url: S,
          method: A,
          data: R,
          signal: C,
          cancelToken: D,
          timeout: _,
          onDownloadProgress: w,
          onUploadProgress: L,
          responseType: T,
          headers: U,
          withCredentials: q = "same-origin",
          fetchOptions: O,
        } = fE(b),
        j = n || fetch;
      T = T ? (T + "").toLowerCase() : "text";
      let $ = OB([C, D && D.toAbortSignal()], _),
        I = null;
      const le =
        $ &&
        $.unsubscribe &&
        (() => {
          $.unsubscribe();
        });
      let ce;
      try {
        if (
          L &&
          h &&
          A !== "get" &&
          A !== "head" &&
          (ce = await g(U, R)) !== 0
        ) {
          let z = new r(S, { method: "POST", body: R, duplex: "half" }),
            X;
          if (
            (W.isFormData(R) &&
              (X = z.headers.get("content-type")) &&
              U.setContentType(X),
            z.body)
          ) {
            const [K, P] = Ry(ce, Qu(wy(L)));
            R = My(z.body, Fy, K, P);
          }
        }
        W.isString(q) || (q = q ? "include" : "omit");
        const ee = c && "credentials" in r.prototype,
          oe = ze(ue({}, O), {
            signal: $,
            method: A.toUpperCase(),
            headers: U.normalize().toJSON(),
            body: R,
            duplex: "half",
            credentials: ee ? q : void 0,
          });
        I = c && new r(S, oe);
        let ie = await (c ? j(I, O) : j(S, oe));
        const ye = m && (T === "stream" || T === "response");
        if (m && (w || (ye && le))) {
          const z = {};
          ["status", "statusText", "headers"].forEach((pe) => {
            z[pe] = ie[pe];
          });
          const X = W.toFiniteNumber(ie.headers.get("content-length")),
            [K, P] = (w && Ry(X, Qu(wy(w), !0))) || [];
          ie = new s(
            My(ie.body, Fy, K, () => {
              P && P(), le && le();
            }),
            z,
          );
        }
        T = T || "text";
        let F = await v[W.findKey(v, T) || "text"](ie, b);
        return (
          !ye && le && le(),
          await new Promise((z, X) => {
            uE(z, X, {
              data: F,
              headers: cn.from(ie.headers),
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
            ? Object.assign(new Re("Network Error", Re.ERR_NETWORK, b, I), {
                cause: ee.cause || ee,
              })
            : Re.from(ee, ee && ee.code, b, I))
        );
      }
    };
  },
  NB = new Map(),
  hE = (t) => {
    let n = (t && t.env) || {};
    const { fetch: r, Request: s, Response: l } = n,
      c = [s, l, r];
    let f = c.length,
      p = f,
      x,
      h,
      m = NB;
    for (; p--; )
      (x = c[p]),
        (h = m.get(x)),
        h === void 0 && m.set(x, (h = p ? new Map() : zB(n))),
        (m = h);
    return h;
  };
hE();
const yd = { http: eB, xhr: wB, fetch: { get: hE } };
W.forEach(yd, (t, n) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: n });
    } catch (r) {}
    Object.defineProperty(t, "adapterName", { value: n });
  }
});
const Ny = (t) => `- ${t}`,
  HB = (t) => W.isFunction(t) || t === null || t === !1;
function VB(t, n) {
  t = W.isArray(t) ? t : [t];
  const { length: r } = t;
  let s, l;
  const c = {};
  for (let f = 0; f < r; f++) {
    s = t[f];
    let p;
    if (
      ((l = s),
      !HB(s) && ((l = yd[(p = String(s)).toLowerCase()]), l === void 0))
    )
      throw new Re(`Unknown adapter '${p}'`);
    if (l && (W.isFunction(l) || (l = l.get(n)))) break;
    c[p || "#" + f] = l;
  }
  if (!l) {
    const f = Object.entries(c).map(
      ([x, h]) =>
        `adapter ${x} ` +
        (h === !1
          ? "is not supported by the environment"
          : "is not available in the build"),
    );
    let p = r
      ? f.length > 1
        ? `since :
` +
          f.map(Ny).join(`
`)
        : " " + Ny(f[0])
      : "as no adapter specified";
    throw new Re(
      "There is no suitable adapter to dispatch the request " + p,
      "ERR_NOT_SUPPORT",
    );
  }
  return l;
}
const dE = { getAdapter: VB, adapters: yd };
function Pf(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new is(null, t);
}
function Hy(t) {
  return (
    Pf(t),
    (t.headers = cn.from(t.headers)),
    (t.data = jf.call(t, t.transformRequest)),
    ["post", "put", "patch"].indexOf(t.method) !== -1 &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1),
    dE
      .getAdapter(
        t.adapter || wo.adapter,
        t,
      )(t)
      .then(
        function (s) {
          return (
            Pf(t),
            (s.data = jf.call(t, t.transformResponse, s)),
            (s.headers = cn.from(s.headers)),
            s
          );
        },
        function (s) {
          return (
            lE(s) ||
              (Pf(t),
              s &&
                s.response &&
                ((s.response.data = jf.call(
                  t,
                  t.transformResponse,
                  s.response,
                )),
                (s.response.headers = cn.from(s.response.headers)))),
            Promise.reject(s)
          );
        },
      )
  );
}
const pE = "1.13.2",
  lc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (t, n) => {
    lc[t] = function (s) {
      return typeof s === t || "a" + (n < 1 ? "n " : " ") + t;
    };
  },
);
const Vy = {};
lc.transitional = function (n, r, s) {
  function l(c, f) {
    return (
      "[Axios v" +
      pE +
      "] Transitional option '" +
      c +
      "'" +
      f +
      (s ? ". " + s : "")
    );
  }
  return (c, f, p) => {
    if (n === !1)
      throw new Re(
        l(f, " has been removed" + (r ? " in " + r : "")),
        Re.ERR_DEPRECATED,
      );
    return (
      r &&
        !Vy[f] &&
        ((Vy[f] = !0),
        console.warn(
          l(
            f,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future",
          ),
        )),
      n ? n(c, f, p) : !0
    );
  };
};
lc.spelling = function (n) {
  return (r, s) => (console.warn(`${s} is likely a misspelling of ${n}`), !0);
};
function kB(t, n, r) {
  if (typeof t != "object")
    throw new Re("options must be an object", Re.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(t);
  let l = s.length;
  for (; l-- > 0; ) {
    const c = s[l],
      f = n[c];
    if (f) {
      const p = t[c],
        x = p === void 0 || f(p, c, t);
      if (x !== !0)
        throw new Re("option " + c + " must be " + x, Re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new Re("Unknown option " + c, Re.ERR_BAD_OPTION);
  }
}
const Lu = { assertOptions: kB, validators: lc },
  hi = Lu.validators;
let ia = class {
  constructor(n) {
    (this.defaults = n || {}),
      (this.interceptors = { request: new Ty(), response: new Ty() });
  }
  async request(n, r) {
    try {
      return await this._request(n, r);
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
  _request(n, r) {
    typeof n == "string" ? ((r = r || {}), (r.url = n)) : (r = n || {}),
      (r = aa(this.defaults, r));
    const { transitional: s, paramsSerializer: l, headers: c } = r;
    s !== void 0 &&
      Lu.assertOptions(
        s,
        {
          silentJSONParsing: hi.transitional(hi.boolean),
          forcedJSONParsing: hi.transitional(hi.boolean),
          clarifyTimeoutError: hi.transitional(hi.boolean),
        },
        !1,
      ),
      l != null &&
        (W.isFunction(l)
          ? (r.paramsSerializer = { serialize: l })
          : Lu.assertOptions(
              l,
              { encode: hi.function, serialize: hi.function },
              !0,
            )),
      r.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (r.allowAbsoluteUrls = !0)),
      Lu.assertOptions(
        r,
        {
          baseUrl: hi.spelling("baseURL"),
          withXsrfToken: hi.spelling("withXSRFToken"),
        },
        !0,
      ),
      (r.method = (r.method || this.defaults.method || "get").toLowerCase());
    let f = c && W.merge(c.common, c[r.method]);
    c &&
      W.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (b) => {
          delete c[b];
        },
      ),
      (r.headers = cn.concat(f, c));
    const p = [];
    let x = !0;
    this.interceptors.request.forEach(function (S) {
      (typeof S.runWhen == "function" && S.runWhen(r) === !1) ||
        ((x = x && S.synchronous), p.unshift(S.fulfilled, S.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function (S) {
      h.push(S.fulfilled, S.rejected);
    });
    let m,
      v = 0,
      y;
    if (!x) {
      const b = [Hy.bind(this), void 0];
      for (
        b.unshift(...p), b.push(...h), y = b.length, m = Promise.resolve(r);
        v < y;

      )
        m = m.then(b[v++], b[v++]);
      return m;
    }
    y = p.length;
    let g = r;
    for (; v < y; ) {
      const b = p[v++],
        S = p[v++];
      try {
        g = b(g);
      } catch (A) {
        S.call(this, A);
        break;
      }
    }
    try {
      m = Hy.call(this, g);
    } catch (b) {
      return Promise.reject(b);
    }
    for (v = 0, y = h.length; v < y; ) m = m.then(h[v++], h[v++]);
    return m;
  }
  getUri(n) {
    n = aa(this.defaults, n);
    const r = cE(n.baseURL, n.url, n.allowAbsoluteUrls);
    return aE(r, n.params, n.paramsSerializer);
  }
};
W.forEach(["delete", "get", "head", "options"], function (n) {
  ia.prototype[n] = function (r, s) {
    return this.request(
      aa(s || {}, { method: n, url: r, data: (s || {}).data }),
    );
  };
});
W.forEach(["post", "put", "patch"], function (n) {
  function r(s) {
    return function (c, f, p) {
      return this.request(
        aa(p || {}, {
          method: n,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: c,
          data: f,
        }),
      );
    };
  }
  (ia.prototype[n] = r()), (ia.prototype[n + "Form"] = r(!0));
});
let qB = class xE {
  constructor(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function (c) {
      r = c;
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
        const f = new Promise((p) => {
          s.subscribe(p), (c = p);
        }).then(l);
        return (
          (f.cancel = function () {
            s.unsubscribe(c);
          }),
          f
        );
      }),
      n(function (c, f, p) {
        s.reason || ((s.reason = new is(c, f, p)), r(s.reason));
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
    const r = this._listeners.indexOf(n);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const n = new AbortController(),
      r = (s) => {
        n.abort(s);
      };
    return (
      this.subscribe(r),
      (n.signal.unsubscribe = () => this.unsubscribe(r)),
      n.signal
    );
  }
  static source() {
    let n;
    return {
      token: new xE(function (l) {
        n = l;
      }),
      cancel: n,
    };
  }
};
function jB(t) {
  return function (r) {
    return t.apply(null, r);
  };
}
function PB(t) {
  return W.isObject(t) && t.isAxiosError === !0;
}
const bh = {
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
Object.entries(bh).forEach(([t, n]) => {
  bh[n] = t;
});
function mE(t) {
  const n = new ia(t),
    r = K2(ia.prototype.request, n);
  return (
    W.extend(r, ia.prototype, n, { allOwnKeys: !0 }),
    W.extend(r, n, null, { allOwnKeys: !0 }),
    (r.create = function (l) {
      return mE(aa(t, l));
    }),
    r
  );
}
const _t = mE(wo);
_t.Axios = ia;
_t.CanceledError = is;
_t.CancelToken = qB;
_t.isCancel = lE;
_t.VERSION = pE;
_t.toFormData = oc;
_t.AxiosError = Re;
_t.Cancel = _t.CanceledError;
_t.all = function (n) {
  return Promise.all(n);
};
_t.spread = jB;
_t.isAxiosError = PB;
_t.mergeConfig = aa;
_t.AxiosHeaders = cn;
_t.formToJSON = (t) => oE(W.isHTMLForm(t) ? new FormData(t) : t);
_t.getAdapter = dE.getAdapter;
_t.HttpStatusCode = bh;
_t.default = _t;
const {
    Axios: ZT,
    AxiosError: WT,
    CanceledError: $T,
    isCancel: JT,
    CancelToken: IT,
    VERSION: e_,
    all: t_,
    Cancel: n_,
    isAxiosError: i_,
    spread: r_,
    toFormData: a_,
    AxiosHeaders: s_,
    HttpStatusCode: o_,
    formToJSON: l_,
    getAdapter: u_,
    mergeConfig: c_,
  } = _t,
  xi = Object.create(null);
xi.open = "0";
xi.close = "1";
xi.ping = "2";
xi.pong = "3";
xi.message = "4";
xi.upgrade = "5";
xi.noop = "6";
const Uu = Object.create(null);
Object.keys(xi).forEach((t) => {
  Uu[xi[t]] = t;
});
const Ah = { type: "error", data: "parser error" },
  vE =
    typeof Blob == "function" ||
    (typeof Blob != "undefined" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  yE = typeof ArrayBuffer == "function",
  gE = (t) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(t)
      : t && t.buffer instanceof ArrayBuffer,
  gd = ({ type: t, data: n }, r, s) =>
    vE && n instanceof Blob
      ? r
        ? s(n)
        : ky(n, s)
      : yE && (n instanceof ArrayBuffer || gE(n))
        ? r
          ? s(n)
          : ky(new Blob([n]), s)
        : s(xi[t] + (n || "")),
  ky = (t, n) => {
    const r = new FileReader();
    return (
      (r.onload = function () {
        const s = r.result.split(",")[1];
        n("b" + (s || ""));
      }),
      r.readAsDataURL(t)
    );
  };
function qy(t) {
  return t instanceof Uint8Array
    ? t
    : t instanceof ArrayBuffer
      ? new Uint8Array(t)
      : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let Yf;
function YB(t, n) {
  if (vE && t.data instanceof Blob)
    return t.data.arrayBuffer().then(qy).then(n);
  if (yE && (t.data instanceof ArrayBuffer || gE(t.data))) return n(qy(t.data));
  gd(t, !1, (r) => {
    Yf || (Yf = new TextEncoder()), n(Yf.encode(r));
  });
}
const jy = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  so = typeof Uint8Array == "undefined" ? [] : new Uint8Array(256);
for (let t = 0; t < jy.length; t++) so[jy.charCodeAt(t)] = t;
const XB = (t) => {
    let n = t.length * 0.75,
      r = t.length,
      s,
      l = 0,
      c,
      f,
      p,
      x;
    t[t.length - 1] === "=" && (n--, t[t.length - 2] === "=" && n--);
    const h = new ArrayBuffer(n),
      m = new Uint8Array(h);
    for (s = 0; s < r; s += 4)
      (c = so[t.charCodeAt(s)]),
        (f = so[t.charCodeAt(s + 1)]),
        (p = so[t.charCodeAt(s + 2)]),
        (x = so[t.charCodeAt(s + 3)]),
        (m[l++] = (c << 2) | (f >> 4)),
        (m[l++] = ((f & 15) << 4) | (p >> 2)),
        (m[l++] = ((p & 3) << 6) | (x & 63));
    return h;
  },
  GB = typeof ArrayBuffer == "function",
  Ed = (t, n) => {
    if (typeof t != "string") return { type: "message", data: EE(t, n) };
    const r = t.charAt(0);
    return r === "b"
      ? { type: "message", data: KB(t.substring(1), n) }
      : Uu[r]
        ? t.length > 1
          ? { type: Uu[r], data: t.substring(1) }
          : { type: Uu[r] }
        : Ah;
  },
  KB = (t, n) => {
    if (GB) {
      const r = XB(t);
      return EE(r, n);
    } else return { base64: !0, data: t };
  },
  EE = (t, n) => {
    switch (n) {
      case "blob":
        return t instanceof Blob ? t : new Blob([t]);
      case "arraybuffer":
      default:
        return t instanceof ArrayBuffer ? t : t.buffer;
    }
  },
  bE = "",
  QB = (t, n) => {
    const r = t.length,
      s = new Array(r);
    let l = 0;
    t.forEach((c, f) => {
      gd(c, !1, (p) => {
        (s[f] = p), ++l === r && n(s.join(bE));
      });
    });
  },
  ZB = (t, n) => {
    const r = t.split(bE),
      s = [];
    for (let l = 0; l < r.length; l++) {
      const c = Ed(r[l], n);
      if ((s.push(c), c.type === "error")) break;
    }
    return s;
  };
function WB() {
  return new TransformStream({
    transform(t, n) {
      YB(t, (r) => {
        const s = r.length;
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
          n.enqueue(r);
      });
    },
  });
}
let Xf;
function Pl(t) {
  return t.reduce((n, r) => n + r.length, 0);
}
function Yl(t, n) {
  if (t[0].length === n) return t.shift();
  const r = new Uint8Array(n);
  let s = 0;
  for (let l = 0; l < n; l++)
    (r[l] = t[0][s++]), s === t[0].length && (t.shift(), (s = 0));
  return t.length && s < t[0].length && (t[0] = t[0].slice(s)), r;
}
function $B(t, n) {
  Xf || (Xf = new TextDecoder());
  const r = [];
  let s = 0,
    l = -1,
    c = !1;
  return new TransformStream({
    transform(f, p) {
      for (r.push(f); ; ) {
        if (s === 0) {
          if (Pl(r) < 1) break;
          const x = Yl(r, 1);
          (c = (x[0] & 128) === 128),
            (l = x[0] & 127),
            l < 126 ? (s = 3) : l === 126 ? (s = 1) : (s = 2);
        } else if (s === 1) {
          if (Pl(r) < 2) break;
          const x = Yl(r, 2);
          (l = new DataView(x.buffer, x.byteOffset, x.length).getUint16(0)),
            (s = 3);
        } else if (s === 2) {
          if (Pl(r) < 8) break;
          const x = Yl(r, 8),
            h = new DataView(x.buffer, x.byteOffset, x.length),
            m = h.getUint32(0);
          if (m > Math.pow(2, 21) - 1) {
            p.enqueue(Ah);
            break;
          }
          (l = m * Math.pow(2, 32) + h.getUint32(4)), (s = 3);
        } else {
          if (Pl(r) < l) break;
          const x = Yl(r, l);
          p.enqueue(Ed(c ? x : Xf.decode(x), n)), (s = 0);
        }
        if (l === 0 || l > t) {
          p.enqueue(Ah);
          break;
        }
      }
    },
  });
}
const AE = 4;
function Tt(t) {
  if (t) return JB(t);
}
function JB(t) {
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
  function r() {
    this.off(t, r), n.apply(this, arguments);
  }
  return (r.fn = n), this.on(t, r), this;
};
Tt.prototype.off =
  Tt.prototype.removeListener =
  Tt.prototype.removeAllListeners =
  Tt.prototype.removeEventListener =
    function (t, n) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var r = this._callbacks["$" + t];
      if (!r) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + t], this;
      for (var s, l = 0; l < r.length; l++)
        if (((s = r[l]), s === n || s.fn === n)) {
          r.splice(l, 1);
          break;
        }
      return r.length === 0 && delete this._callbacks["$" + t], this;
    };
Tt.prototype.emit = function (t) {
  this._callbacks = this._callbacks || {};
  for (
    var n = new Array(arguments.length - 1),
      r = this._callbacks["$" + t],
      s = 1;
    s < arguments.length;
    s++
  )
    n[s - 1] = arguments[s];
  if (r) {
    r = r.slice(0);
    for (var s = 0, l = r.length; s < l; ++s) r[s].apply(this, n);
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
const uc =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (n) => Promise.resolve().then(n)
      : (n, r) => r(n, 0),
  Vn =
    typeof self != "undefined"
      ? self
      : typeof window != "undefined"
        ? window
        : Function("return this")(),
  IB = "arraybuffer";
function SE(t, ...n) {
  return n.reduce((r, s) => (t.hasOwnProperty(s) && (r[s] = t[s]), r), {});
}
const eT = Vn.setTimeout,
  tT = Vn.clearTimeout;
function cc(t, n) {
  n.useNativeTimers
    ? ((t.setTimeoutFn = eT.bind(Vn)), (t.clearTimeoutFn = tT.bind(Vn)))
    : ((t.setTimeoutFn = Vn.setTimeout.bind(Vn)),
      (t.clearTimeoutFn = Vn.clearTimeout.bind(Vn)));
}
const nT = 1.33;
function iT(t) {
  return typeof t == "string"
    ? rT(t)
    : Math.ceil((t.byteLength || t.size) * nT);
}
function rT(t) {
  let n = 0,
    r = 0;
  for (let s = 0, l = t.length; s < l; s++)
    (n = t.charCodeAt(s)),
      n < 128
        ? (r += 1)
        : n < 2048
          ? (r += 2)
          : n < 55296 || n >= 57344
            ? (r += 3)
            : (s++, (r += 4));
  return r;
}
function CE() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function aT(t) {
  let n = "";
  for (let r in t)
    t.hasOwnProperty(r) &&
      (n.length && (n += "&"),
      (n += encodeURIComponent(r) + "=" + encodeURIComponent(t[r])));
  return n;
}
function sT(t) {
  let n = {},
    r = t.split("&");
  for (let s = 0, l = r.length; s < l; s++) {
    let c = r[s].split("=");
    n[decodeURIComponent(c[0])] = decodeURIComponent(c[1]);
  }
  return n;
}
class oT extends Error {
  constructor(n, r, s) {
    super(n),
      (this.description = r),
      (this.context = s),
      (this.type = "TransportError");
  }
}
class bd extends Tt {
  constructor(n) {
    super(),
      (this.writable = !1),
      cc(this, n),
      (this.opts = n),
      (this.query = n.query),
      (this.socket = n.socket),
      (this.supportsBinary = !n.forceBase64);
  }
  onError(n, r, s) {
    return super.emitReserved("error", new oT(n, r, s)), this;
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
    const r = Ed(n, this.socket.binaryType);
    this.onPacket(r);
  }
  onPacket(n) {
    super.emitReserved("packet", n);
  }
  onClose(n) {
    (this.readyState = "closed"), super.emitReserved("close", n);
  }
  pause(n) {}
  createUri(n, r = {}) {
    return (
      n +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(r)
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
    const r = aT(n);
    return r.length ? "?" + r : "";
  }
}
class lT extends bd {
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
    const r = () => {
      (this.readyState = "paused"), n();
    };
    if (this._polling || !this.writable) {
      let s = 0;
      this._polling &&
        (s++,
        this.once("pollComplete", function () {
          --s || r();
        })),
        this.writable ||
          (s++,
          this.once("drain", function () {
            --s || r();
          }));
    } else r();
  }
  _poll() {
    (this._polling = !0), this.doPoll(), this.emitReserved("poll");
  }
  onData(n) {
    const r = (s) => {
      if (
        (this.readyState === "opening" && s.type === "open" && this.onOpen(),
        s.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }), !1
        );
      this.onPacket(s);
    };
    ZB(n, this.socket.binaryType).forEach(r),
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
      QB(n, (r) => {
        this.doWrite(r, () => {
          (this.writable = !0), this.emitReserved("drain");
        });
      });
  }
  uri() {
    const n = this.opts.secure ? "https" : "http",
      r = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (r[this.opts.timestampParam] = CE()),
      !this.supportsBinary && !r.sid && (r.b64 = 1),
      this.createUri(n, r)
    );
  }
}
let DE = !1;
try {
  DE =
    typeof XMLHttpRequest != "undefined" &&
    "withCredentials" in new XMLHttpRequest();
} catch (t) {}
const uT = DE;
function cT() {}
class fT extends lT {
  constructor(n) {
    if ((super(n), typeof location != "undefined")) {
      const r = location.protocol === "https:";
      let s = location.port;
      s || (s = r ? "443" : "80"),
        (this.xd =
          (typeof location != "undefined" &&
            n.hostname !== location.hostname) ||
          s !== n.port);
    }
  }
  doWrite(n, r) {
    const s = this.request({ method: "POST", data: n });
    s.on("success", r),
      s.on("error", (l, c) => {
        this.onError("xhr post error", l, c);
      });
  }
  doPoll() {
    const n = this.request();
    n.on("data", this.onData.bind(this)),
      n.on("error", (r, s) => {
        this.onError("xhr poll error", r, s);
      }),
      (this.pollXhr = n);
  }
}
let Qa = class zu extends Tt {
  constructor(n, r, s) {
    super(),
      (this.createRequest = n),
      cc(this, s),
      (this._opts = s),
      (this._method = s.method || "GET"),
      (this._uri = r),
      (this._data = s.data !== void 0 ? s.data : null),
      this._create();
  }
  _create() {
    var n;
    const r = SE(
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
    r.xdomain = !!this._opts.xd;
    const s = (this._xhr = this.createRequest(r));
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
      ((this._index = zu.requestsCount++), (zu.requests[this._index] = this));
  }
  _onError(n) {
    this.emitReserved("error", n, this._xhr), this._cleanup(!0);
  }
  _cleanup(n) {
    if (!(typeof this._xhr == "undefined" || this._xhr === null)) {
      if (((this._xhr.onreadystatechange = cT), n))
        try {
          this._xhr.abort();
        } catch (r) {}
      typeof document != "undefined" && delete zu.requests[this._index],
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
Qa.requestsCount = 0;
Qa.requests = {};
if (typeof document != "undefined") {
  if (typeof attachEvent == "function") attachEvent("onunload", Py);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in Vn ? "pagehide" : "unload";
    addEventListener(t, Py, !1);
  }
}
function Py() {
  for (let t in Qa.requests)
    Qa.requests.hasOwnProperty(t) && Qa.requests[t].abort();
}
const hT = (function () {
  const t = BE({ xdomain: !1 });
  return t && t.responseType !== null;
})();
class dT extends fT {
  constructor(n) {
    super(n);
    const r = n && n.forceBase64;
    this.supportsBinary = hT && !r;
  }
  request(n = {}) {
    return (
      Object.assign(n, { xd: this.xd }, this.opts), new Qa(BE, this.uri(), n)
    );
  }
}
function BE(t) {
  const n = t.xdomain;
  try {
    if (typeof XMLHttpRequest != "undefined" && (!n || uT))
      return new XMLHttpRequest();
  } catch (r) {}
  if (!n)
    try {
      return new Vn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (r) {}
}
const TE =
  typeof navigator != "undefined" &&
  typeof navigator.product == "string" &&
  navigator.product.toLowerCase() === "reactnative";
class pT extends bd {
  get name() {
    return "websocket";
  }
  doOpen() {
    const n = this.uri(),
      r = this.opts.protocols,
      s = TE
        ? {}
        : SE(
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
      this.ws = this.createSocket(n, r, s);
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
    for (let r = 0; r < n.length; r++) {
      const s = n[r],
        l = r === n.length - 1;
      gd(s, this.supportsBinary, (c) => {
        try {
          this.doWrite(s, c);
        } catch (f) {}
        l &&
          uc(() => {
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
      r = this.query || {};
    return (
      this.opts.timestampRequests && (r[this.opts.timestampParam] = CE()),
      this.supportsBinary || (r.b64 = 1),
      this.createUri(n, r)
    );
  }
}
const Gf = Vn.WebSocket || Vn.MozWebSocket;
class xT extends pT {
  createSocket(n, r, s) {
    return TE ? new Gf(n, r, s) : r ? new Gf(n, r) : new Gf(n);
  }
  doWrite(n, r) {
    this.ws.send(r);
  }
}
class mT extends bd {
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
          const r = $B(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            s = n.readable.pipeThrough(r).getReader(),
            l = WB();
          l.readable.pipeTo(n.writable),
            (this._writer = l.writable.getWriter());
          const c = () => {
            s.read()
              .then(({ done: p, value: x }) => {
                p || (this.onPacket(x), c());
              })
              .catch((p) => {});
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
    for (let r = 0; r < n.length; r++) {
      const s = n[r],
        l = r === n.length - 1;
      this._writer.write(s).then(() => {
        l &&
          uc(() => {
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
const vT = { websocket: xT, webtransport: mT, polling: dT },
  yT =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  gT = [
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
function Sh(t) {
  if (t.length > 8e3) throw "URI too long";
  const n = t,
    r = t.indexOf("["),
    s = t.indexOf("]");
  r != -1 &&
    s != -1 &&
    (t =
      t.substring(0, r) +
      t.substring(r, s).replace(/:/g, ";") +
      t.substring(s, t.length));
  let l = yT.exec(t || ""),
    c = {},
    f = 14;
  for (; f--; ) c[gT[f]] = l[f] || "";
  return (
    r != -1 &&
      s != -1 &&
      ((c.source = n),
      (c.host = c.host.substring(1, c.host.length - 1).replace(/;/g, ":")),
      (c.authority = c.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (c.ipv6uri = !0)),
    (c.pathNames = ET(c, c.path)),
    (c.queryKey = bT(c, c.query)),
    c
  );
}
function ET(t, n) {
  const r = /\/{2,9}/g,
    s = n.replace(r, "/").split("/");
  return (
    (n.slice(0, 1) == "/" || n.length === 0) && s.splice(0, 1),
    n.slice(-1) == "/" && s.splice(s.length - 1, 1),
    s
  );
}
function bT(t, n) {
  const r = {};
  return (
    n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (s, l, c) {
      l && (r[l] = c);
    }),
    r
  );
}
const Ch =
    typeof addEventListener == "function" &&
    typeof removeEventListener == "function",
  Nu = [];
Ch &&
  addEventListener(
    "offline",
    () => {
      Nu.forEach((t) => t());
    },
    !1,
  );
class mr extends Tt {
  constructor(n, r) {
    if (
      (super(),
      (this.binaryType = IB),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      n && typeof n == "object" && ((r = n), (n = null)),
      n)
    ) {
      const s = Sh(n);
      (r.hostname = s.host),
        (r.secure = s.protocol === "https" || s.protocol === "wss"),
        (r.port = s.port),
        s.query && (r.query = s.query);
    } else r.host && (r.hostname = Sh(r.host).host);
    cc(this, r),
      (this.secure =
        r.secure != null
          ? r.secure
          : typeof location != "undefined" && location.protocol === "https:"),
      r.hostname && !r.port && (r.port = this.secure ? "443" : "80"),
      (this.hostname =
        r.hostname ||
        (typeof location != "undefined" ? location.hostname : "localhost")),
      (this.port =
        r.port ||
        (typeof location != "undefined" && location.port
          ? location.port
          : this.secure
            ? "443"
            : "80")),
      (this.transports = []),
      (this._transportsByName = {}),
      r.transports.forEach((s) => {
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
        r,
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") +
        (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" &&
        (this.opts.query = sT(this.opts.query)),
      Ch &&
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
          Nu.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open();
  }
  createTransport(n) {
    const r = Object.assign({}, this.opts.query);
    (r.EIO = AE), (r.transport = n), this.id && (r.sid = this.id);
    const s = Object.assign(
      {},
      this.opts,
      {
        query: r,
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
      mr.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
        ? "websocket"
        : this.transports[0];
    this.readyState = "opening";
    const r = this.createTransport(n);
    r.open(), this.setTransport(r);
  }
  setTransport(n) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = n),
      n
        .on("drain", this._onDrain.bind(this))
        .on("packet", this._onPacket.bind(this))
        .on("error", this._onError.bind(this))
        .on("close", (r) => this._onClose("transport close", r));
  }
  onOpen() {
    (this.readyState = "open"),
      (mr.priorWebsocketSuccess = this.transport.name === "websocket"),
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
          const r = new Error("server error");
          (r.code = n.data), this._onError(r);
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
    let r = 1;
    for (let s = 0; s < this.writeBuffer.length; s++) {
      const l = this.writeBuffer[s].data;
      if ((l && (r += iT(l)), s > 0 && r > this._maxPayload))
        return this.writeBuffer.slice(0, s);
      r += 2;
    }
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return !0;
    const n = Date.now() > this._pingTimeoutTime;
    return (
      n &&
        ((this._pingTimeoutTime = 0),
        uc(() => {
          this._onClose("ping timeout");
        }, this.setTimeoutFn)),
      n
    );
  }
  write(n, r, s) {
    return this._sendPacket("message", n, r, s), this;
  }
  send(n, r, s) {
    return this._sendPacket("message", n, r, s), this;
  }
  _sendPacket(n, r, s, l) {
    if (
      (typeof r == "function" && ((l = r), (r = void 0)),
      typeof s == "function" && ((l = s), (s = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (s = s || {}), (s.compress = s.compress !== !1);
    const c = { type: n, data: r, options: s };
    this.emitReserved("packetCreate", c),
      this.writeBuffer.push(c),
      l && this.once("flush", l),
      this.flush();
  }
  close() {
    const n = () => {
        this._onClose("forced close"), this.transport.close();
      },
      r = () => {
        this.off("upgrade", r), this.off("upgradeError", r), n();
      },
      s = () => {
        this.once("upgrade", r), this.once("upgradeError", r);
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
      ((mr.priorWebsocketSuccess = !1),
      this.opts.tryAllTransports &&
        this.transports.length > 1 &&
        this.readyState === "opening")
    )
      return this.transports.shift(), this._open();
    this.emitReserved("error", n), this._onClose("transport error", n);
  }
  _onClose(n, r) {
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
        Ch &&
          (this._beforeunloadEventListener &&
            removeEventListener(
              "beforeunload",
              this._beforeunloadEventListener,
              !1,
            ),
          this._offlineEventListener))
      ) {
        const s = Nu.indexOf(this._offlineEventListener);
        s !== -1 && Nu.splice(s, 1);
      }
      (this.readyState = "closed"),
        (this.id = null),
        this.emitReserved("close", n, r),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0);
    }
  }
}
mr.protocol = AE;
class AT extends mr {
  constructor() {
    super(...arguments), (this._upgrades = []);
  }
  onOpen() {
    if ((super.onOpen(), this.readyState === "open" && this.opts.upgrade))
      for (let n = 0; n < this._upgrades.length; n++)
        this._probe(this._upgrades[n]);
  }
  _probe(n) {
    let r = this.createTransport(n),
      s = !1;
    mr.priorWebsocketSuccess = !1;
    const l = () => {
      s ||
        (r.send([{ type: "ping", data: "probe" }]),
        r.once("packet", (v) => {
          if (!s)
            if (v.type === "pong" && v.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", r), !r)
              )
                return;
              (mr.priorWebsocketSuccess = r.name === "websocket"),
                this.transport.pause(() => {
                  s ||
                    (this.readyState !== "closed" &&
                      (m(),
                      this.setTransport(r),
                      r.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", r),
                      (r = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const y = new Error("probe error");
              (y.transport = r.name), this.emitReserved("upgradeError", y);
            }
        }));
    };
    function c() {
      s || ((s = !0), m(), r.close(), (r = null));
    }
    const f = (v) => {
      const y = new Error("probe error: " + v);
      (y.transport = r.name), c(), this.emitReserved("upgradeError", y);
    };
    function p() {
      f("transport closed");
    }
    function x() {
      f("socket closed");
    }
    function h(v) {
      r && v.name !== r.name && c();
    }
    const m = () => {
      r.removeListener("open", l),
        r.removeListener("error", f),
        r.removeListener("close", p),
        this.off("close", x),
        this.off("upgrading", h);
    };
    r.once("open", l),
      r.once("error", f),
      r.once("close", p),
      this.once("close", x),
      this.once("upgrading", h),
      this._upgrades.indexOf("webtransport") !== -1 && n !== "webtransport"
        ? this.setTimeoutFn(() => {
            s || r.open();
          }, 200)
        : r.open();
  }
  onHandshake(n) {
    (this._upgrades = this._filterUpgrades(n.upgrades)), super.onHandshake(n);
  }
  _filterUpgrades(n) {
    const r = [];
    for (let s = 0; s < n.length; s++)
      ~this.transports.indexOf(n[s]) && r.push(n[s]);
    return r;
  }
}
let ST = class extends AT {
  constructor(n, r = {}) {
    const s = typeof n == "object" ? n : r;
    (!s.transports || (s.transports && typeof s.transports[0] == "string")) &&
      (s.transports = (s.transports || ["polling", "websocket", "webtransport"])
        .map((l) => vT[l])
        .filter((l) => !!l)),
      super(n, s);
  }
};
function CT(t, n = "", r) {
  let s = t;
  (r = r || (typeof location != "undefined" && location)),
    t == null && (t = r.protocol + "//" + r.host),
    typeof t == "string" &&
      (t.charAt(0) === "/" &&
        (t.charAt(1) === "/" ? (t = r.protocol + t) : (t = r.host + t)),
      /^(https?|wss?):\/\//.test(t) ||
        (typeof r != "undefined"
          ? (t = r.protocol + "//" + t)
          : (t = "https://" + t)),
      (s = Sh(t))),
    s.port ||
      (/^(http|ws)$/.test(s.protocol)
        ? (s.port = "80")
        : /^(http|ws)s$/.test(s.protocol) && (s.port = "443")),
    (s.path = s.path || "/");
  const c = s.host.indexOf(":") !== -1 ? "[" + s.host + "]" : s.host;
  return (
    (s.id = s.protocol + "://" + c + ":" + s.port + n),
    (s.href =
      s.protocol + "://" + c + (r && r.port === s.port ? "" : ":" + s.port)),
    s
  );
}
const DT = typeof ArrayBuffer == "function",
  BT = (t) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(t)
      : t.buffer instanceof ArrayBuffer,
  _E = Object.prototype.toString,
  TT =
    typeof Blob == "function" ||
    (typeof Blob != "undefined" &&
      _E.call(Blob) === "[object BlobConstructor]"),
  _T =
    typeof File == "function" ||
    (typeof File != "undefined" &&
      _E.call(File) === "[object FileConstructor]");
function Ad(t) {
  return (
    (DT && (t instanceof ArrayBuffer || BT(t))) ||
    (TT && t instanceof Blob) ||
    (_T && t instanceof File)
  );
}
function Hu(t, n) {
  if (!t || typeof t != "object") return !1;
  if (Array.isArray(t)) {
    for (let r = 0, s = t.length; r < s; r++) if (Hu(t[r])) return !0;
    return !1;
  }
  if (Ad(t)) return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return Hu(t.toJSON(), !0);
  for (const r in t)
    if (Object.prototype.hasOwnProperty.call(t, r) && Hu(t[r])) return !0;
  return !1;
}
function RT(t) {
  const n = [],
    r = t.data,
    s = t;
  return (
    (s.data = Dh(r, n)), (s.attachments = n.length), { packet: s, buffers: n }
  );
}
function Dh(t, n) {
  if (!t) return t;
  if (Ad(t)) {
    const r = { _placeholder: !0, num: n.length };
    return n.push(t), r;
  } else if (Array.isArray(t)) {
    const r = new Array(t.length);
    for (let s = 0; s < t.length; s++) r[s] = Dh(t[s], n);
    return r;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const r = {};
    for (const s in t)
      Object.prototype.hasOwnProperty.call(t, s) && (r[s] = Dh(t[s], n));
    return r;
  }
  return t;
}
function wT(t, n) {
  return (t.data = Bh(t.data, n)), delete t.attachments, t;
}
function Bh(t, n) {
  if (!t) return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < n.length)
      return n[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let r = 0; r < t.length; r++) t[r] = Bh(t[r], n);
  else if (typeof t == "object")
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (t[r] = Bh(t[r], n));
  return t;
}
const OT = [
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
class FT {
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
    let r = "" + n.type;
    return (
      (n.type === Ve.BINARY_EVENT || n.type === Ve.BINARY_ACK) &&
        (r += n.attachments + "-"),
      n.nsp && n.nsp !== "/" && (r += n.nsp + ","),
      n.id != null && (r += n.id),
      n.data != null && (r += JSON.stringify(n.data, this.replacer)),
      r
    );
  }
  encodeAsBinary(n) {
    const r = RT(n),
      s = this.encodeAsString(r.packet),
      l = r.buffers;
    return l.unshift(s), l;
  }
}
function Yy(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class Sd extends Tt {
  constructor(n) {
    super(), (this.reviver = n);
  }
  add(n) {
    let r;
    if (typeof n == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      r = this.decodeString(n);
      const s = r.type === Ve.BINARY_EVENT;
      s || r.type === Ve.BINARY_ACK
        ? ((r.type = s ? Ve.EVENT : Ve.ACK),
          (this.reconstructor = new LT(r)),
          r.attachments === 0 && super.emitReserved("decoded", r))
        : super.emitReserved("decoded", r);
    } else if (Ad(n) || n.base64)
      if (this.reconstructor)
        (r = this.reconstructor.takeBinaryData(n)),
          r && ((this.reconstructor = null), super.emitReserved("decoded", r));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + n);
  }
  decodeString(n) {
    let r = 0;
    const s = { type: Number(n.charAt(0)) };
    if (Ve[s.type] === void 0) throw new Error("unknown packet type " + s.type);
    if (s.type === Ve.BINARY_EVENT || s.type === Ve.BINARY_ACK) {
      const c = r + 1;
      for (; n.charAt(++r) !== "-" && r != n.length; );
      const f = n.substring(c, r);
      if (f != Number(f) || n.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      s.attachments = Number(f);
    }
    if (n.charAt(r + 1) === "/") {
      const c = r + 1;
      for (; ++r && !(n.charAt(r) === "," || r === n.length); );
      s.nsp = n.substring(c, r);
    } else s.nsp = "/";
    const l = n.charAt(r + 1);
    if (l !== "" && Number(l) == l) {
      const c = r + 1;
      for (; ++r; ) {
        const f = n.charAt(r);
        if (f == null || Number(f) != f) {
          --r;
          break;
        }
        if (r === n.length) break;
      }
      s.id = Number(n.substring(c, r + 1));
    }
    if (n.charAt(++r)) {
      const c = this.tryParse(n.substr(r));
      if (Sd.isPayloadValid(s.type, c)) s.data = c;
      else throw new Error("invalid payload");
    }
    return s;
  }
  tryParse(n) {
    try {
      return JSON.parse(n, this.reviver);
    } catch (r) {
      return !1;
    }
  }
  static isPayloadValid(n, r) {
    switch (n) {
      case Ve.CONNECT:
        return Yy(r);
      case Ve.DISCONNECT:
        return r === void 0;
      case Ve.CONNECT_ERROR:
        return typeof r == "string" || Yy(r);
      case Ve.EVENT:
      case Ve.BINARY_EVENT:
        return (
          Array.isArray(r) &&
          (typeof r[0] == "number" ||
            (typeof r[0] == "string" && OT.indexOf(r[0]) === -1))
        );
      case Ve.ACK:
      case Ve.BINARY_ACK:
        return Array.isArray(r);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class LT {
  constructor(n) {
    (this.packet = n), (this.buffers = []), (this.reconPack = n);
  }
  takeBinaryData(n) {
    if (
      (this.buffers.push(n), this.buffers.length === this.reconPack.attachments)
    ) {
      const r = wT(this.reconPack, this.buffers);
      return this.finishedReconstruction(), r;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const UT = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: Sd,
      Encoder: FT,
      get PacketType() {
        return Ve;
      },
      protocol: MT,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function ti(t, n, r) {
  return (
    t.on(n, r),
    function () {
      t.off(n, r);
    }
  );
}
const zT = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class RE extends Tt {
  constructor(n, r, s) {
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
      (this.nsp = r),
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
      ti(n, "open", this.onopen.bind(this)),
      ti(n, "packet", this.onpacket.bind(this)),
      ti(n, "error", this.onerror.bind(this)),
      ti(n, "close", this.onclose.bind(this)),
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
  emit(n, ...r) {
    var s, l, c;
    if (zT.hasOwnProperty(n))
      throw new Error('"' + n.toString() + '" is a reserved event name');
    if (
      (r.unshift(n),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(r), this;
    const f = { type: Ve.EVENT, data: r };
    if (
      ((f.options = {}),
      (f.options.compress = this.flags.compress !== !1),
      typeof r[r.length - 1] == "function")
    ) {
      const m = this.ids++,
        v = r.pop();
      this._registerAckCallback(m, v), (f.id = m);
    }
    const p =
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
      (this.flags.volatile && !p) ||
        (x
          ? (this.notifyOutgoingListeners(f), this.packet(f))
          : this.sendBuffer.push(f)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(n, r) {
    var s;
    const l =
      (s = this.flags.timeout) !== null && s !== void 0
        ? s
        : this._opts.ackTimeout;
    if (l === void 0) {
      this.acks[n] = r;
      return;
    }
    const c = this.io.setTimeoutFn(() => {
        delete this.acks[n];
        for (let p = 0; p < this.sendBuffer.length; p++)
          this.sendBuffer[p].id === n && this.sendBuffer.splice(p, 1);
        r.call(this, new Error("operation has timed out"));
      }, l),
      f = (...p) => {
        this.io.clearTimeoutFn(c), r.apply(this, p);
      };
    (f.withError = !0), (this.acks[n] = f);
  }
  emitWithAck(n, ...r) {
    return new Promise((s, l) => {
      const c = (f, p) => (f ? l(f) : s(p));
      (c.withError = !0), r.push(c), this.emit(n, ...r);
    });
  }
  _addToQueue(n) {
    let r;
    typeof n[n.length - 1] == "function" && (r = n.pop());
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
              (this._queue.shift(), r && r(l))
            : (this._queue.shift(), r && r(null, ...c)),
          (s.pending = !1),
          this._drainQueue()),
    ),
      this._queue.push(s),
      this._drainQueue();
  }
  _drainQueue(n = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const r = this._queue[0];
    (r.pending && !n) ||
      ((r.pending = !0),
      r.tryCount++,
      (this.flags = r.flags),
      this.emit.apply(this, r.args));
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
  onclose(n, r) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", n, r),
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
    const r = n.data || [];
    n.id != null && r.push(this.ack(n.id)),
      this.connected
        ? this.emitEvent(r)
        : this.receiveBuffer.push(Object.freeze(r));
  }
  emitEvent(n) {
    if (this._anyListeners && this._anyListeners.length) {
      const r = this._anyListeners.slice();
      for (const s of r) s.apply(this, n);
    }
    super.emit.apply(this, n),
      this._pid &&
        n.length &&
        typeof n[n.length - 1] == "string" &&
        (this._lastOffset = n[n.length - 1]);
  }
  ack(n) {
    const r = this;
    let s = !1;
    return function (...l) {
      s || ((s = !0), r.packet({ type: Ve.ACK, id: n, data: l }));
    };
  }
  onack(n) {
    const r = this.acks[n.id];
    typeof r == "function" &&
      (delete this.acks[n.id],
      r.withError && n.data.unshift(null),
      r.apply(this, n.data));
  }
  onconnect(n, r) {
    (this.id = n),
      (this.recovered = r && this._pid === r),
      (this._pid = r),
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
      const r = this._anyListeners;
      for (let s = 0; s < r.length; s++)
        if (n === r[s]) return r.splice(s, 1), this;
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
      const r = this._anyOutgoingListeners;
      for (let s = 0; s < r.length; s++)
        if (n === r[s]) return r.splice(s, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(n) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const r = this._anyOutgoingListeners.slice();
      for (const s of r) s.apply(this, n.data);
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
      r = Math.floor(n * this.jitter * t);
    t = (Math.floor(n * 10) & 1) == 0 ? t - r : t + r;
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
  constructor(n, r) {
    var s;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      n && typeof n == "object" && ((r = n), (n = void 0)),
      (r = r || {}),
      (r.path = r.path || "/socket.io"),
      (this.opts = r),
      cc(this, r),
      this.reconnection(r.reconnection !== !1),
      this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(r.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (s = r.randomizationFactor) !== null && s !== void 0 ? s : 0.5,
      ),
      (this.backoff = new rs({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(r.timeout == null ? 2e4 : r.timeout),
      (this._readyState = "closed"),
      (this.uri = n);
    const l = r.parser || UT;
    (this.encoder = new l.Encoder()),
      (this.decoder = new l.Decoder()),
      (this._autoConnect = r.autoConnect !== !1),
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
    var r;
    return n === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = n),
        (r = this.backoff) === null || r === void 0 || r.setMin(n),
        this);
  }
  randomizationFactor(n) {
    var r;
    return n === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = n),
        (r = this.backoff) === null || r === void 0 || r.setJitter(n),
        this);
  }
  reconnectionDelayMax(n) {
    var r;
    return n === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = n),
        (r = this.backoff) === null || r === void 0 || r.setMax(n),
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
    this.engine = new ST(this.uri, this.opts);
    const r = this.engine,
      s = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const l = ti(r, "open", function () {
        s.onopen(), n && n();
      }),
      c = (p) => {
        this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", p),
          n ? n(p) : this.maybeReconnectOnOpen();
      },
      f = ti(r, "error", c);
    if (this._timeout !== !1) {
      const p = this._timeout,
        x = this.setTimeoutFn(() => {
          l(), c(new Error("timeout")), r.close();
        }, p);
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
      ti(n, "ping", this.onping.bind(this)),
      ti(n, "data", this.ondata.bind(this)),
      ti(n, "error", this.onerror.bind(this)),
      ti(n, "close", this.onclose.bind(this)),
      ti(this.decoder, "decoded", this.ondecoded.bind(this)),
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(n) {
    try {
      this.decoder.add(n);
    } catch (r) {
      this.onclose("parse error", r);
    }
  }
  ondecoded(n) {
    uc(() => {
      this.emitReserved("packet", n);
    }, this.setTimeoutFn);
  }
  onerror(n) {
    this.emitReserved("error", n);
  }
  socket(n, r) {
    let s = this.nsps[n];
    return (
      s
        ? this._autoConnect && !s.active && s.connect()
        : ((s = new RE(this, n, r)), (this.nsps[n] = s)),
      s
    );
  }
  _destroy(n) {
    const r = Object.keys(this.nsps);
    for (const s of r) if (this.nsps[s].active) return;
    this._close();
  }
  _packet(n) {
    const r = this.encoder.encode(n);
    for (let s = 0; s < r.length; s++) this.engine.write(r[s], n.options);
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
  onclose(n, r) {
    var s;
    this.cleanup(),
      (s = this.engine) === null || s === void 0 || s.close(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", n, r),
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
      const r = this.backoff.duration();
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
      }, r);
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
const io = {};
function Kf(t, n) {
  typeof t == "object" && ((n = t), (t = void 0)), (n = n || {});
  const r = CT(t, n.path || "/socket.io"),
    s = r.source,
    l = r.id,
    c = r.path,
    f = io[l] && c in io[l].nsps,
    p = n.forceNew || n["force new connection"] || n.multiplex === !1 || f;
  let x;
  return (
    p ? (x = new Th(s, n)) : (io[l] || (io[l] = new Th(s, n)), (x = io[l])),
    r.query && !n.query && (n.query = r.queryKey),
    x.socket(r.path, n)
  );
}
Object.assign(Kf, { Manager: Th, Socket: RE, io: Kf, connect: Kf });
export {
  YT as A,
  PT as C,
  HT as R,
  Pb as a,
  jT as b,
  qT as c,
  _t as d,
  kT as e,
  Hi as j,
  Kf as l,
  GT as m,
  J as r,
  VT as u,
};
