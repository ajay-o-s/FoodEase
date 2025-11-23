var Qv = Object.defineProperty,
  Zv = Object.defineProperties;
var Vv = Object.getOwnPropertyDescriptors;
var Fi = Object.getOwnPropertySymbols;
var Ah = Object.prototype.hasOwnProperty,
  _h = Object.prototype.propertyIsEnumerable;
var Ef = (i, c, o) =>
    c in i
      ? Qv(i, c, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (i[c] = o),
  Du = (i, c) => {
    for (var o in c || (c = {})) Ah.call(c, o) && Ef(i, o, c[o]);
    if (Fi) for (var o of Fi(c)) _h.call(c, o) && Ef(i, o, c[o]);
    return i;
  },
  Rh = (i, c) => Zv(i, Vv(c));
var xf = (i, c) => {
  var o = {};
  for (var f in i) Ah.call(i, f) && c.indexOf(f) < 0 && (o[f] = i[f]);
  if (i != null && Fi)
    for (var f of Fi(i)) c.indexOf(f) < 0 && _h.call(i, f) && (o[f] = i[f]);
  return o;
};
var On = (i, c, o) => Ef(i, typeof c != "symbol" ? c + "" : c, o);
function s0(i, c) {
  for (var o = 0; o < c.length; o++) {
    const f = c[o];
    if (typeof f != "string" && !Array.isArray(f)) {
      for (const d in f)
        if (d !== "default" && !(d in i)) {
          const v = Object.getOwnPropertyDescriptor(f, d);
          v &&
            Object.defineProperty(
              i,
              d,
              v.get ? v : { enumerable: !0, get: () => f[d] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const c = document.createElement("link").relList;
  if (c && c.supports && c.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) f(d);
  new MutationObserver((d) => {
    for (const v of d)
      if (v.type === "childList")
        for (const y of v.addedNodes)
          y.tagName === "LINK" && y.rel === "modulepreload" && f(y);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(d) {
    const v = {};
    return (
      d.integrity && (v.integrity = d.integrity),
      d.referrerPolicy && (v.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (v.credentials = "include")
        : d.crossOrigin === "anonymous"
          ? (v.credentials = "omit")
          : (v.credentials = "same-origin"),
      v
    );
  }
  function f(d) {
    if (d.ep) return;
    d.ep = !0;
    const v = o(d);
    fetch(d.href, v);
  }
})();
const Kv = "modulepreload",
  Jv = function (i) {
    return "/" + i;
  },
  Oh = {},
  kv = function (c, o, f) {
    let d = Promise.resolve();
    if (o && o.length > 0) {
      let y = function (m) {
        return Promise.all(
          m.map((R) =>
            Promise.resolve(R).then(
              (T) => ({ status: "fulfilled", value: T }),
              (T) => ({ status: "rejected", reason: T }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const z = document.querySelector("meta[property=csp-nonce]"),
        p =
          (z == null ? void 0 : z.nonce) ||
          (z == null ? void 0 : z.getAttribute("nonce"));
      d = y(
        o.map((m) => {
          if (((m = Jv(m)), m in Oh)) return;
          Oh[m] = !0;
          const R = m.endsWith(".css"),
            T = R ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${m}"]${T}`)) return;
          const w = document.createElement("link");
          if (
            ((w.rel = R ? "stylesheet" : Kv),
            R || (w.as = "script"),
            (w.crossOrigin = ""),
            (w.href = m),
            p && w.setAttribute("nonce", p),
            document.head.appendChild(w),
            R)
          )
            return new Promise((G, W) => {
              w.addEventListener("load", G),
                w.addEventListener("error", () =>
                  W(new Error(`Unable to preload CSS for ${m}`)),
                );
            });
        }),
      );
    }
    function v(y) {
      const z = new Event("vite:preloadError", { cancelable: !0 });
      if (((z.payload = y), window.dispatchEvent(z), !z.defaultPrevented))
        throw y;
    }
    return d.then((y) => {
      for (const z of y || []) z.status === "rejected" && v(z.reason);
      return c().catch(v);
    });
  };
var Fg =
  typeof globalThis != "undefined"
    ? globalThis
    : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
        ? global
        : typeof self != "undefined"
          ? self
          : {};
function Hf(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
function $g(i) {
  if (Object.prototype.hasOwnProperty.call(i, "__esModule")) return i;
  var c = i.default;
  if (typeof c == "function") {
    var o = function f() {
      return this instanceof f
        ? Reflect.construct(c, arguments, this.constructor)
        : c.apply(this, arguments);
    };
    o.prototype = c.prototype;
  } else o = {};
  return (
    Object.defineProperty(o, "__esModule", { value: !0 }),
    Object.keys(i).forEach(function (f) {
      var d = Object.getOwnPropertyDescriptor(i, f);
      Object.defineProperty(
        o,
        f,
        d.get
          ? d
          : {
              enumerable: !0,
              get: function () {
                return i[f];
              },
            },
      );
    }),
    o
  );
}
var Tf = { exports: {} },
  Au = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nh;
function Wv() {
  if (Nh) return Au;
  Nh = 1;
  var i = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.fragment");
  function o(f, d, v) {
    var y = null;
    if (
      (v !== void 0 && (y = "" + v),
      d.key !== void 0 && (y = "" + d.key),
      "key" in d)
    ) {
      v = {};
      for (var z in d) z !== "key" && (v[z] = d[z]);
    } else v = d;
    return (
      (d = v.ref),
      { $$typeof: i, type: f, key: y, ref: d !== void 0 ? d : null, props: v }
    );
  }
  return (Au.Fragment = c), (Au.jsx = o), (Au.jsxs = o), Au;
}
var Uh;
function Fv() {
  return Uh || ((Uh = 1), (Tf.exports = Wv())), Tf.exports;
}
var L = Fv(),
  zf = { exports: {} },
  se = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ch;
function $v() {
  if (Ch) return se;
  Ch = 1;
  var i = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    v = Symbol.for("react.consumer"),
    y = Symbol.for("react.context"),
    z = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    R = Symbol.for("react.lazy"),
    T = Symbol.for("react.activity"),
    w = Symbol.iterator;
  function G(S) {
    return S === null || typeof S != "object"
      ? null
      : ((S = (w && S[w]) || S["@@iterator"]),
        typeof S == "function" ? S : null);
  }
  var W = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    J = Object.assign,
    te = {};
  function de(S, j, X) {
    (this.props = S),
      (this.context = j),
      (this.refs = te),
      (this.updater = X || W);
  }
  (de.prototype.isReactComponent = {}),
    (de.prototype.setState = function (S, j) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, S, j, "setState");
    }),
    (de.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    });
  function ie() {}
  ie.prototype = de.prototype;
  function ge(S, j, X) {
    (this.props = S),
      (this.context = j),
      (this.refs = te),
      (this.updater = X || W);
  }
  var je = (ge.prototype = new ie());
  (je.constructor = ge), J(je, de.prototype), (je.isPureReactComponent = !0);
  var He = Array.isArray;
  function et() {}
  var A = { H: null, A: null, T: null, S: null },
    le = Object.prototype.hasOwnProperty;
  function ze(S, j, X) {
    var F = X.ref;
    return {
      $$typeof: i,
      type: S,
      key: j,
      ref: F !== void 0 ? F : null,
      props: X,
    };
  }
  function he(S, j) {
    return ze(S.type, j, S.props);
  }
  function Qe(S) {
    return typeof S == "object" && S !== null && S.$$typeof === i;
  }
  function Me(S) {
    var j = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (X) {
        return j[X];
      })
    );
  }
  var nt = /\/+/g;
  function Fe(S, j) {
    return typeof S == "object" && S !== null && S.key != null
      ? Me("" + S.key)
      : j.toString(36);
  }
  function ut(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (
          (typeof S.status == "string"
            ? S.then(et, et)
            : ((S.status = "pending"),
              S.then(
                function (j) {
                  S.status === "pending" &&
                    ((S.status = "fulfilled"), (S.value = j));
                },
                function (j) {
                  S.status === "pending" &&
                    ((S.status = "rejected"), (S.reason = j));
                },
              )),
          S.status)
        ) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function U(S, j, X, F, ue) {
    var fe = typeof S;
    (fe === "undefined" || fe === "boolean") && (S = null);
    var ye = !1;
    if (S === null) ye = !0;
    else
      switch (fe) {
        case "bigint":
        case "string":
        case "number":
          ye = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case i:
            case c:
              ye = !0;
              break;
            case R:
              return (ye = S._init), U(ye(S._payload), j, X, F, ue);
          }
      }
    if (ye)
      return (
        (ue = ue(S)),
        (ye = F === "" ? "." + Fe(S, 0) : F),
        He(ue)
          ? ((X = ""),
            ye != null && (X = ye.replace(nt, "$&/") + "/"),
            U(ue, j, X, "", function (pa) {
              return pa;
            }))
          : ue != null &&
            (Qe(ue) &&
              (ue = he(
                ue,
                X +
                  (ue.key == null || (S && S.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(nt, "$&/") + "/") +
                  ye,
              )),
            j.push(ue)),
        1
      );
    ye = 0;
    var ft = F === "" ? "." : F + ":";
    if (He(S))
      for (var Pe = 0; Pe < S.length; Pe++)
        (F = S[Pe]), (fe = ft + Fe(F, Pe)), (ye += U(F, j, X, fe, ue));
    else if (((Pe = G(S)), typeof Pe == "function"))
      for (S = Pe.call(S), Pe = 0; !(F = S.next()).done; )
        (F = F.value), (fe = ft + Fe(F, Pe++)), (ye += U(F, j, X, fe, ue));
    else if (fe === "object") {
      if (typeof S.then == "function") return U(ut(S), j, X, F, ue);
      throw (
        ((j = String(S)),
        Error(
          "Objects are not valid as a React child (found: " +
            (j === "[object Object]"
              ? "object with keys {" + Object.keys(S).join(", ") + "}"
              : j) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return ye;
  }
  function Q(S, j, X) {
    if (S == null) return S;
    var F = [],
      ue = 0;
    return (
      U(S, F, "", "", function (fe) {
        return j.call(X, fe, ue++);
      }),
      F
    );
  }
  function $(S) {
    if (S._status === -1) {
      var j = S._result;
      (j = j()),
        j.then(
          function (X) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = X));
          },
          function (X) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = X));
          },
        ),
        S._status === -1 && ((S._status = 0), (S._result = j));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var Re =
      typeof reportError == "function"
        ? reportError
        : function (S) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var j = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof S == "object" &&
                  S !== null &&
                  typeof S.message == "string"
                    ? String(S.message)
                    : String(S),
                error: S,
              });
              if (!window.dispatchEvent(j)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", S);
              return;
            }
            console.error(S);
          },
    Oe = {
      map: Q,
      forEach: function (S, j, X) {
        Q(
          S,
          function () {
            j.apply(this, arguments);
          },
          X,
        );
      },
      count: function (S) {
        var j = 0;
        return (
          Q(S, function () {
            j++;
          }),
          j
        );
      },
      toArray: function (S) {
        return (
          Q(S, function (j) {
            return j;
          }) || []
        );
      },
      only: function (S) {
        if (!Qe(S))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return S;
      },
    };
  return (
    (se.Activity = T),
    (se.Children = Oe),
    (se.Component = de),
    (se.Fragment = o),
    (se.Profiler = d),
    (se.PureComponent = ge),
    (se.StrictMode = f),
    (se.Suspense = p),
    (se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = A),
    (se.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (S) {
        return A.H.useMemoCache(S);
      },
    }),
    (se.cache = function (S) {
      return function () {
        return S.apply(null, arguments);
      };
    }),
    (se.cacheSignal = function () {
      return null;
    }),
    (se.cloneElement = function (S, j, X) {
      if (S == null)
        throw Error(
          "The argument must be a React element, but you passed " + S + ".",
        );
      var F = J({}, S.props),
        ue = S.key;
      if (j != null)
        for (fe in (j.key !== void 0 && (ue = "" + j.key), j))
          !le.call(j, fe) ||
            fe === "key" ||
            fe === "__self" ||
            fe === "__source" ||
            (fe === "ref" && j.ref === void 0) ||
            (F[fe] = j[fe]);
      var fe = arguments.length - 2;
      if (fe === 1) F.children = X;
      else if (1 < fe) {
        for (var ye = Array(fe), ft = 0; ft < fe; ft++)
          ye[ft] = arguments[ft + 2];
        F.children = ye;
      }
      return ze(S.type, ue, F);
    }),
    (se.createContext = function (S) {
      return (
        (S = {
          $$typeof: y,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (S.Provider = S),
        (S.Consumer = { $$typeof: v, _context: S }),
        S
      );
    }),
    (se.createElement = function (S, j, X) {
      var F,
        ue = {},
        fe = null;
      if (j != null)
        for (F in (j.key !== void 0 && (fe = "" + j.key), j))
          le.call(j, F) &&
            F !== "key" &&
            F !== "__self" &&
            F !== "__source" &&
            (ue[F] = j[F]);
      var ye = arguments.length - 2;
      if (ye === 1) ue.children = X;
      else if (1 < ye) {
        for (var ft = Array(ye), Pe = 0; Pe < ye; Pe++)
          ft[Pe] = arguments[Pe + 2];
        ue.children = ft;
      }
      if (S && S.defaultProps)
        for (F in ((ye = S.defaultProps), ye))
          ue[F] === void 0 && (ue[F] = ye[F]);
      return ze(S, fe, ue);
    }),
    (se.createRef = function () {
      return { current: null };
    }),
    (se.forwardRef = function (S) {
      return { $$typeof: z, render: S };
    }),
    (se.isValidElement = Qe),
    (se.lazy = function (S) {
      return { $$typeof: R, _payload: { _status: -1, _result: S }, _init: $ };
    }),
    (se.memo = function (S, j) {
      return { $$typeof: m, type: S, compare: j === void 0 ? null : j };
    }),
    (se.startTransition = function (S) {
      var j = A.T,
        X = {};
      A.T = X;
      try {
        var F = S(),
          ue = A.S;
        ue !== null && ue(X, F),
          typeof F == "object" &&
            F !== null &&
            typeof F.then == "function" &&
            F.then(et, Re);
      } catch (fe) {
        Re(fe);
      } finally {
        j !== null && X.types !== null && (j.types = X.types), (A.T = j);
      }
    }),
    (se.unstable_useCacheRefresh = function () {
      return A.H.useCacheRefresh();
    }),
    (se.use = function (S) {
      return A.H.use(S);
    }),
    (se.useActionState = function (S, j, X) {
      return A.H.useActionState(S, j, X);
    }),
    (se.useCallback = function (S, j) {
      return A.H.useCallback(S, j);
    }),
    (se.useContext = function (S) {
      return A.H.useContext(S);
    }),
    (se.useDebugValue = function () {}),
    (se.useDeferredValue = function (S, j) {
      return A.H.useDeferredValue(S, j);
    }),
    (se.useEffect = function (S, j) {
      return A.H.useEffect(S, j);
    }),
    (se.useEffectEvent = function (S) {
      return A.H.useEffectEvent(S);
    }),
    (se.useId = function () {
      return A.H.useId();
    }),
    (se.useImperativeHandle = function (S, j, X) {
      return A.H.useImperativeHandle(S, j, X);
    }),
    (se.useInsertionEffect = function (S, j) {
      return A.H.useInsertionEffect(S, j);
    }),
    (se.useLayoutEffect = function (S, j) {
      return A.H.useLayoutEffect(S, j);
    }),
    (se.useMemo = function (S, j) {
      return A.H.useMemo(S, j);
    }),
    (se.useOptimistic = function (S, j) {
      return A.H.useOptimistic(S, j);
    }),
    (se.useReducer = function (S, j, X) {
      return A.H.useReducer(S, j, X);
    }),
    (se.useRef = function (S) {
      return A.H.useRef(S);
    }),
    (se.useState = function (S) {
      return A.H.useState(S);
    }),
    (se.useSyncExternalStore = function (S, j, X) {
      return A.H.useSyncExternalStore(S, j, X);
    }),
    (se.useTransition = function () {
      return A.H.useTransition();
    }),
    (se.version = "19.2.0"),
    se
  );
}
var jh;
function wf() {
  return jh || ((jh = 1), (zf.exports = $v())), zf.exports;
}
var q = wf();
const d0 = Hf(q),
  Iv = s0({ __proto__: null, default: d0 }, [q]);
var Mf = { exports: {} },
  _u = {},
  Df = { exports: {} },
  Af = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hh;
function Pv() {
  return (
    Hh ||
      ((Hh = 1),
      (function (i) {
        function c(U, Q) {
          var $ = U.length;
          U.push(Q);
          e: for (; 0 < $; ) {
            var Re = ($ - 1) >>> 1,
              Oe = U[Re];
            if (0 < d(Oe, Q)) (U[Re] = Q), (U[$] = Oe), ($ = Re);
            else break e;
          }
        }
        function o(U) {
          return U.length === 0 ? null : U[0];
        }
        function f(U) {
          if (U.length === 0) return null;
          var Q = U[0],
            $ = U.pop();
          if ($ !== Q) {
            U[0] = $;
            e: for (var Re = 0, Oe = U.length, S = Oe >>> 1; Re < S; ) {
              var j = 2 * (Re + 1) - 1,
                X = U[j],
                F = j + 1,
                ue = U[F];
              if (0 > d(X, $))
                F < Oe && 0 > d(ue, X)
                  ? ((U[Re] = ue), (U[F] = $), (Re = F))
                  : ((U[Re] = X), (U[j] = $), (Re = j));
              else if (F < Oe && 0 > d(ue, $))
                (U[Re] = ue), (U[F] = $), (Re = F);
              else break e;
            }
          }
          return Q;
        }
        function d(U, Q) {
          var $ = U.sortIndex - Q.sortIndex;
          return $ !== 0 ? $ : U.id - Q.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var v = performance;
          i.unstable_now = function () {
            return v.now();
          };
        } else {
          var y = Date,
            z = y.now();
          i.unstable_now = function () {
            return y.now() - z;
          };
        }
        var p = [],
          m = [],
          R = 1,
          T = null,
          w = 3,
          G = !1,
          W = !1,
          J = !1,
          te = !1,
          de = typeof setTimeout == "function" ? setTimeout : null,
          ie = typeof clearTimeout == "function" ? clearTimeout : null,
          ge = typeof setImmediate != "undefined" ? setImmediate : null;
        function je(U) {
          for (var Q = o(m); Q !== null; ) {
            if (Q.callback === null) f(m);
            else if (Q.startTime <= U)
              f(m), (Q.sortIndex = Q.expirationTime), c(p, Q);
            else break;
            Q = o(m);
          }
        }
        function He(U) {
          if (((J = !1), je(U), !W))
            if (o(p) !== null) (W = !0), et || ((et = !0), Me());
            else {
              var Q = o(m);
              Q !== null && ut(He, Q.startTime - U);
            }
        }
        var et = !1,
          A = -1,
          le = 5,
          ze = -1;
        function he() {
          return te ? !0 : !(i.unstable_now() - ze < le);
        }
        function Qe() {
          if (((te = !1), et)) {
            var U = i.unstable_now();
            ze = U;
            var Q = !0;
            try {
              e: {
                (W = !1), J && ((J = !1), ie(A), (A = -1)), (G = !0);
                var $ = w;
                try {
                  t: {
                    for (
                      je(U), T = o(p);
                      T !== null && !(T.expirationTime > U && he());

                    ) {
                      var Re = T.callback;
                      if (typeof Re == "function") {
                        (T.callback = null), (w = T.priorityLevel);
                        var Oe = Re(T.expirationTime <= U);
                        if (((U = i.unstable_now()), typeof Oe == "function")) {
                          (T.callback = Oe), je(U), (Q = !0);
                          break t;
                        }
                        T === o(p) && f(p), je(U);
                      } else f(p);
                      T = o(p);
                    }
                    if (T !== null) Q = !0;
                    else {
                      var S = o(m);
                      S !== null && ut(He, S.startTime - U), (Q = !1);
                    }
                  }
                  break e;
                } finally {
                  (T = null), (w = $), (G = !1);
                }
                Q = void 0;
              }
            } finally {
              Q ? Me() : (et = !1);
            }
          }
        }
        var Me;
        if (typeof ge == "function")
          Me = function () {
            ge(Qe);
          };
        else if (typeof MessageChannel != "undefined") {
          var nt = new MessageChannel(),
            Fe = nt.port2;
          (nt.port1.onmessage = Qe),
            (Me = function () {
              Fe.postMessage(null);
            });
        } else
          Me = function () {
            de(Qe, 0);
          };
        function ut(U, Q) {
          A = de(function () {
            U(i.unstable_now());
          }, Q);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (U) {
            U.callback = null;
          }),
          (i.unstable_forceFrameRate = function (U) {
            0 > U || 125 < U
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (le = 0 < U ? Math.floor(1e3 / U) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (i.unstable_next = function (U) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = w;
            }
            var $ = w;
            w = Q;
            try {
              return U();
            } finally {
              w = $;
            }
          }),
          (i.unstable_requestPaint = function () {
            te = !0;
          }),
          (i.unstable_runWithPriority = function (U, Q) {
            switch (U) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                U = 3;
            }
            var $ = w;
            w = U;
            try {
              return Q();
            } finally {
              w = $;
            }
          }),
          (i.unstable_scheduleCallback = function (U, Q, $) {
            var Re = i.unstable_now();
            switch (
              (typeof $ == "object" && $ !== null
                ? (($ = $.delay),
                  ($ = typeof $ == "number" && 0 < $ ? Re + $ : Re))
                : ($ = Re),
              U)
            ) {
              case 1:
                var Oe = -1;
                break;
              case 2:
                Oe = 250;
                break;
              case 5:
                Oe = 1073741823;
                break;
              case 4:
                Oe = 1e4;
                break;
              default:
                Oe = 5e3;
            }
            return (
              (Oe = $ + Oe),
              (U = {
                id: R++,
                callback: Q,
                priorityLevel: U,
                startTime: $,
                expirationTime: Oe,
                sortIndex: -1,
              }),
              $ > Re
                ? ((U.sortIndex = $),
                  c(m, U),
                  o(p) === null &&
                    U === o(m) &&
                    (J ? (ie(A), (A = -1)) : (J = !0), ut(He, $ - Re)))
                : ((U.sortIndex = Oe),
                  c(p, U),
                  W || G || ((W = !0), et || ((et = !0), Me()))),
              U
            );
          }),
          (i.unstable_shouldYield = he),
          (i.unstable_wrapCallback = function (U) {
            var Q = w;
            return function () {
              var $ = w;
              w = Q;
              try {
                return U.apply(this, arguments);
              } finally {
                w = $;
              }
            };
          });
      })(Af)),
    Af
  );
}
var wh;
function ey() {
  return wh || ((wh = 1), (Df.exports = Pv())), Df.exports;
}
var _f = { exports: {} },
  Dt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bh;
function ty() {
  if (Bh) return Dt;
  Bh = 1;
  var i = wf();
  function c(p) {
    var m = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var R = 2; R < arguments.length; R++)
        m += "&args[]=" + encodeURIComponent(arguments[R]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var f = {
      d: {
        f: o,
        r: function () {
          throw Error(c(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    d = Symbol.for("react.portal");
  function v(p, m, R) {
    var T =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: T == null ? null : "" + T,
      children: p,
      containerInfo: m,
      implementation: R,
    };
  }
  var y = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function z(p, m) {
    if (p === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (Dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    (Dt.createPortal = function (p, m) {
      var R =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(c(299));
      return v(p, m, null, R);
    }),
    (Dt.flushSync = function (p) {
      var m = y.T,
        R = f.p;
      try {
        if (((y.T = null), (f.p = 2), p)) return p();
      } finally {
        (y.T = m), (f.p = R), f.d.f();
      }
    }),
    (Dt.preconnect = function (p, m) {
      typeof p == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        f.d.C(p, m));
    }),
    (Dt.prefetchDNS = function (p) {
      typeof p == "string" && f.d.D(p);
    }),
    (Dt.preinit = function (p, m) {
      if (typeof p == "string" && m && typeof m.as == "string") {
        var R = m.as,
          T = z(R, m.crossOrigin),
          w = typeof m.integrity == "string" ? m.integrity : void 0,
          G = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        R === "style"
          ? f.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: T,
              integrity: w,
              fetchPriority: G,
            })
          : R === "script" &&
            f.d.X(p, {
              crossOrigin: T,
              integrity: w,
              fetchPriority: G,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (Dt.preinitModule = function (p, m) {
      if (typeof p == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var R = z(m.as, m.crossOrigin);
            f.d.M(p, {
              crossOrigin: R,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && f.d.M(p);
    }),
    (Dt.preload = function (p, m) {
      if (
        typeof p == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var R = m.as,
          T = z(R, m.crossOrigin);
        f.d.L(p, R, {
          crossOrigin: T,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (Dt.preloadModule = function (p, m) {
      if (typeof p == "string")
        if (m) {
          var R = z(m.as, m.crossOrigin);
          f.d.m(p, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: R,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else f.d.m(p);
    }),
    (Dt.requestFormReset = function (p) {
      f.d.r(p);
    }),
    (Dt.unstable_batchedUpdates = function (p, m) {
      return p(m);
    }),
    (Dt.useFormState = function (p, m, R) {
      return y.H.useFormState(p, m, R);
    }),
    (Dt.useFormStatus = function () {
      return y.H.useHostTransitionStatus();
    }),
    (Dt.version = "19.2.0"),
    Dt
  );
}
var Lh;
function h0() {
  if (Lh) return _f.exports;
  Lh = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (c) {
        console.error(c);
      }
  }
  return i(), (_f.exports = ty()), _f.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yh;
function ly() {
  if (Yh) return _u;
  Yh = 1;
  var i = ey(),
    c = wf(),
    o = h0();
  function f(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function d(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function v(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function y(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function z(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (v(e) !== e) throw Error(f(188));
  }
  function m(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = v(e)), t === null)) throw Error(f(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return p(n), e;
          if (u === a) return p(n), t;
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) (l = n), (a = u);
      else {
        for (var r = !1, s = n.child; s; ) {
          if (s === l) {
            (r = !0), (l = n), (a = u);
            break;
          }
          if (s === a) {
            (r = !0), (a = n), (l = u);
            break;
          }
          s = s.sibling;
        }
        if (!r) {
          for (s = u.child; s; ) {
            if (s === l) {
              (r = !0), (l = u), (a = n);
              break;
            }
            if (s === a) {
              (r = !0), (a = u), (l = n);
              break;
            }
            s = s.sibling;
          }
          if (!r) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? e : t;
  }
  function R(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = R(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var T = Object.assign,
    w = Symbol.for("react.element"),
    G = Symbol.for("react.transitional.element"),
    W = Symbol.for("react.portal"),
    J = Symbol.for("react.fragment"),
    te = Symbol.for("react.strict_mode"),
    de = Symbol.for("react.profiler"),
    ie = Symbol.for("react.consumer"),
    ge = Symbol.for("react.context"),
    je = Symbol.for("react.forward_ref"),
    He = Symbol.for("react.suspense"),
    et = Symbol.for("react.suspense_list"),
    A = Symbol.for("react.memo"),
    le = Symbol.for("react.lazy"),
    ze = Symbol.for("react.activity"),
    he = Symbol.for("react.memo_cache_sentinel"),
    Qe = Symbol.iterator;
  function Me(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Qe && e[Qe]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var nt = Symbol.for("react.client.reference");
  function Fe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === nt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case J:
        return "Fragment";
      case de:
        return "Profiler";
      case te:
        return "StrictMode";
      case He:
        return "Suspense";
      case et:
        return "SuspenseList";
      case ze:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case W:
          return "Portal";
        case ge:
          return e.displayName || "Context";
        case ie:
          return (e._context.displayName || "Context") + ".Consumer";
        case je:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case A:
          return (
            (t = e.displayName || null), t !== null ? t : Fe(e.type) || "Memo"
          );
        case le:
          (t = e._payload), (e = e._init);
          try {
            return Fe(e(t));
          } catch (l) {}
      }
    return null;
  }
  var ut = Array.isArray,
    U = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    $ = { pending: !1, data: null, method: null, action: null },
    Re = [],
    Oe = -1;
  function S(e) {
    return { current: e };
  }
  function j(e) {
    0 > Oe || ((e.current = Re[Oe]), (Re[Oe] = null), Oe--);
  }
  function X(e, t) {
    Oe++, (Re[Oe] = e.current), (e.current = t);
  }
  var F = S(null),
    ue = S(null),
    fe = S(null),
    ye = S(null);
  function ft(e, t) {
    switch ((X(fe, t), X(ue, e), X(F, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Fd(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = Fd(t)), (e = $d(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    j(F), X(F, e);
  }
  function Pe() {
    j(F), j(ue), j(fe);
  }
  function pa(e) {
    e.memoizedState !== null && X(ye, e);
    var t = F.current,
      l = $d(t, e.type);
    t !== l && (X(ue, e), X(F, l));
  }
  function Va(e) {
    ue.current === e && (j(F), j(ue)),
      ye.current === e && (j(ye), (xu._currentValue = $));
  }
  var vt, El;
  function vl(e) {
    if (vt === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        (vt = (t && t[1]) || ""),
          (El =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      vt +
      e +
      El
    );
  }
  var jn = !1;
  function il(e, t) {
    if (!e || jn) return "";
    jn = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var B = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(B.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(B, []);
                } catch (N) {
                  var _ = N;
                }
                Reflect.construct(e, [], B);
              } else {
                try {
                  B.call();
                } catch (N) {
                  _ = N;
                }
                e.call(B.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                _ = N;
              }
              (B = e()) &&
                typeof B.catch == "function" &&
                B.catch(function () {});
            }
          } catch (N) {
            if (N && _ && typeof N.stack == "string") return [N.stack, _.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        r = u[0],
        s = u[1];
      if (r && s) {
        var h = r.split(`
`),
          D = s.split(`
`);
        for (
          n = a = 0;
          a < h.length && !h[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; n < D.length && !D[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === h.length || n === D.length)
          for (
            a = h.length - 1, n = D.length - 1;
            1 <= a && 0 <= n && h[a] !== D[n];

          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (h[a] !== D[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || h[a] !== D[n])) {
                  var C =
                    `
` + h[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      C.includes("<anonymous>") &&
                      (C = C.replace("<anonymous>", e.displayName)),
                    C
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (jn = !1), (Error.prepareStackTrace = l);
    }
    return (l = e ? e.displayName || e.name : "") ? vl(l) : "";
  }
  function rr(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return vl(e.type);
      case 16:
        return vl("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? vl("Suspense Fallback")
          : vl("Suspense");
      case 19:
        return vl("SuspenseList");
      case 0:
      case 15:
        return il(e.type, !1);
      case 11:
        return il(e.type.render, !1);
      case 1:
        return il(e.type, !0);
      case 31:
        return vl("Activity");
      default:
        return "";
    }
  }
  function Bu(e) {
    try {
      var t = "",
        l = null;
      do (t += rr(e, l)), (l = e), (e = e.return);
      while (e);
      return t;
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
  var Ka = Object.prototype.hasOwnProperty,
    Hn = i.unstable_scheduleCallback,
    wn = i.unstable_cancelCallback,
    cr = i.unstable_shouldYield,
    fr = i.unstable_requestPaint,
    it = i.unstable_now,
    ba = i.unstable_getCurrentPriorityLevel,
    Bn = i.unstable_ImmediatePriority,
    Ja = i.unstable_UserBlockingPriority,
    Lt = i.unstable_NormalPriority,
    rl = i.unstable_LowPriority,
    Ln = i.unstable_IdlePriority,
    ka = i.log,
    or = i.unstable_setDisableYieldValue,
    Rt = null,
    zt = null;
  function cl(e) {
    if (
      (typeof ka == "function" && or(e),
      zt && typeof zt.setStrictMode == "function")
    )
      try {
        zt.setStrictMode(Rt, e);
      } catch (t) {}
  }
  var Mt = Math.clz32 ? Math.clz32 : Wa,
    sr = Math.log,
    Lu = Math.LN2;
  function Wa(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((sr(e) / Lu) | 0)) | 0;
  }
  var Sa = 256,
    Gl = 262144,
    Xl = 4194304;
  function xl(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 128;
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
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
  function Ea(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = e.suspendedLanes,
      r = e.pingedLanes;
    e = e.warmLanes;
    var s = a & 134217727;
    return (
      s !== 0
        ? ((a = s & ~u),
          a !== 0
            ? (n = xl(a))
            : ((r &= s),
              r !== 0
                ? (n = xl(r))
                : l || ((l = s & ~e), l !== 0 && (n = xl(l)))))
        : ((s = a & ~u),
          s !== 0
            ? (n = xl(s))
            : r !== 0
              ? (n = xl(r))
              : l || ((l = a & ~e), l !== 0 && (n = xl(l)))),
      n === 0
        ? 0
        : t !== 0 &&
            t !== n &&
            (t & u) === 0 &&
            ((u = n & -n),
            (l = t & -t),
            u >= l || (u === 32 && (l & 4194048) !== 0))
          ? t
          : n
    );
  }
  function xa(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Yu(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return t + 5e3;
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
  function Ta() {
    var e = Xl;
    return (Xl <<= 1), (Xl & 62914560) === 0 && (Xl = 4194304), e;
  }
  function Ql(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function za(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function dr(e, t, l, a, n, u) {
    var r = e.pendingLanes;
    (e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0);
    var s = e.entanglements,
      h = e.expirationTimes,
      D = e.hiddenUpdates;
    for (l = r & ~l; 0 < l; ) {
      var C = 31 - Mt(l),
        B = 1 << C;
      (s[C] = 0), (h[C] = -1);
      var _ = D[C];
      if (_ !== null)
        for (D[C] = null, C = 0; C < _.length; C++) {
          var N = _[C];
          N !== null && (N.lane &= -536870913);
        }
      l &= ~B;
    }
    a !== 0 && g(e, a, 0),
      u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(r & ~t));
  }
  function g(e, t, l) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var a = 31 - Mt(t);
    (e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 261930));
  }
  function x(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - Mt(l),
        n = 1 << a;
      (n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n);
    }
  }
  function O(e, t) {
    var l = t & -t;
    return (
      (l = (l & 42) !== 0 ? 1 : Y(l)),
      (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    );
  }
  function Y(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Z(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ae() {
    var e = Q.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Sh(e.type));
  }
  function ce(e, t) {
    var l = Q.p;
    try {
      return (Q.p = e), t();
    } finally {
      Q.p = l;
    }
  }
  var k = Math.random().toString(36).slice(2),
    K = "__reactFiber$" + k,
    V = "__reactProps$" + k,
    P = "__reactContainer$" + k,
    oe = "__reactEvents$" + k,
    Ee = "__reactListeners$" + k,
    yt = "__reactHandles$" + k,
    we = "__reactResources$" + k,
    pe = "__reactMarker$" + k;
  function Ve(e) {
    delete e[K], delete e[V], delete e[oe], delete e[Ee], delete e[yt];
  }
  function Yt(e) {
    var t = e[K];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[P] || l[K])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = nh(e); e !== null; ) {
            if ((l = e[K])) return l;
            e = nh(e);
          }
        return t;
      }
      (e = l), (l = e.parentNode);
    }
    return null;
  }
  function kt(e) {
    if ((e = e[K] || e[P])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function At(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(f(33));
  }
  function bt(e) {
    var t = e[we];
    return (
      t ||
        (t = e[we] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function tt(e) {
    e[pe] = !0;
  }
  var Zl = new Set(),
    yl = {};
  function Wt(e, t) {
    fl(e, t), fl(e + "Capture", t);
  }
  function fl(e, t) {
    for (yl[e] = t, e = 0; e < t.length; e++) Zl.add(t[e]);
  }
  var _e = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Ke = {},
    Tl = {};
  function Ma(e) {
    return Ka.call(Tl, e)
      ? !0
      : Ka.call(Ke, e)
        ? !1
        : _e.test(e)
          ? (Tl[e] = !0)
          : ((Ke[e] = !0), !1);
  }
  function Je(e, t, l) {
    if (Ma(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function ol(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Ft(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  function Ot(e) {
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
  function Gf(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function w0(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof a != "undefined" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (r) {
            (l = "" + r), u.call(this, r);
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (r) {
            l = "" + r;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function hr(e) {
    if (!e._valueTracker) {
      var t = Gf(e) ? "checked" : "value";
      e._valueTracker = w0(e, t, "" + e[t]);
    }
  }
  function Xf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return (
      e && (a = Gf(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function qu(e) {
    if (
      ((e = e || (typeof document != "undefined" ? document : void 0)),
      typeof e == "undefined")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch (t) {
      return e.body;
    }
  }
  var B0 = /[\n"\\]/g;
  function $t(e) {
    return e.replace(B0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function mr(e, t, l, a, n, u, r, s) {
    (e.name = ""),
      r != null &&
      typeof r != "function" &&
      typeof r != "symbol" &&
      typeof r != "boolean"
        ? (e.type = r)
        : e.removeAttribute("type"),
      t != null
        ? r === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Ot(t))
          : e.value !== "" + Ot(t) && (e.value = "" + Ot(t))
        : (r !== "submit" && r !== "reset") || e.removeAttribute("value"),
      t != null
        ? vr(e, r, Ot(t))
        : l != null
          ? vr(e, r, Ot(l))
          : a != null && e.removeAttribute("value"),
      n == null && u != null && (e.defaultChecked = !!u),
      n != null &&
        (e.checked = n && typeof n != "function" && typeof n != "symbol"),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (e.name = "" + Ot(s))
        : e.removeAttribute("name");
  }
  function Qf(e, t, l, a, n, u, r, s) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.type = u),
      t != null || l != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) {
        hr(e);
        return;
      }
      (l = l != null ? "" + Ot(l) : ""),
        (t = t != null ? "" + Ot(t) : l),
        s || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (a = a != null ? a : n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = s ? e.checked : !!a),
      (e.defaultChecked = !!a),
      r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (e.name = r),
      hr(e);
  }
  function vr(e, t, l) {
    (t === "number" && qu(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function Fa(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        (n = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Ot(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          (e[n].selected = !0), a && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Zf(e, t, l) {
    if (
      t != null &&
      ((t = "" + Ot(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Ot(l) : "";
  }
  function Vf(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (ut(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (t = l);
    }
    (l = Ot(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== "" && a !== null && (e.value = a),
      hr(e);
  }
  function $a(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var L0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Kf(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : a
        ? e.setProperty(t, l)
        : typeof l != "number" || l === 0 || L0.has(t)
          ? t === "float"
            ? (e.cssFloat = l)
            : (e[t] = ("" + l).trim())
          : (e[t] = l + "px");
  }
  function Jf(e, t, l) {
    if (t != null && typeof t != "object") throw Error(f(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
              ? (e.cssFloat = "")
              : (e[a] = ""));
      for (var n in t)
        (a = t[n]), t.hasOwnProperty(n) && l[n] !== a && Kf(e, n, a);
    } else for (var u in t) t.hasOwnProperty(u) && Kf(e, u, t[u]);
  }
  function yr(e) {
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
  var Y0 = new Map([
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
    q0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Gu(e) {
    return q0.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function zl() {}
  var gr = null;
  function pr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ia = null,
    Pa = null;
  function kf(e) {
    var t = kt(e);
    if (t && (e = t.stateNode)) {
      var l = e[V] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (mr(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + $t("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[V] || null;
                if (!n) throw Error(f(90));
                mr(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (t = 0; t < l.length; t++)
              (a = l[t]), a.form === e.form && Xf(a);
          }
          break e;
        case "textarea":
          Zf(e, l.value, l.defaultValue);
          break e;
        case "select":
          (t = l.value), t != null && Fa(e, !!l.multiple, t, !1);
      }
    }
  }
  var br = !1;
  function Wf(e, t, l) {
    if (br) return e(t, l);
    br = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((br = !1),
        (Ia !== null || Pa !== null) &&
          (_i(), Ia && ((t = Ia), (e = Pa), (Pa = Ia = null), kf(t), e)))
      )
        for (t = 0; t < e.length; t++) kf(e[t]);
    }
  }
  function Yn(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[V] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
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
        (a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(f(231, t, typeof l));
    return l;
  }
  var Ml = !(
      typeof window == "undefined" ||
      typeof window.document == "undefined" ||
      typeof window.document.createElement == "undefined"
    ),
    Sr = !1;
  if (Ml)
    try {
      var qn = {};
      Object.defineProperty(qn, "passive", {
        get: function () {
          Sr = !0;
        },
      }),
        window.addEventListener("test", qn, qn),
        window.removeEventListener("test", qn, qn);
    } catch (e) {
      Sr = !1;
    }
  var Vl = null,
    Er = null,
    Xu = null;
  function Ff() {
    if (Xu) return Xu;
    var e,
      t = Er,
      l = t.length,
      a,
      n = "value" in Vl ? Vl.value : Vl.textContent,
      u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var r = l - e;
    for (a = 1; a <= r && t[l - a] === n[u - a]; a++);
    return (Xu = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function Qu(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Zu() {
    return !0;
  }
  function $f() {
    return !1;
  }
  function Nt(e) {
    function t(l, a, n, u, r) {
      (this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = r),
        (this.currentTarget = null);
      for (var s in e)
        e.hasOwnProperty(s) && ((l = e[s]), (this[s] = l ? l(u) : u[s]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Zu
          : $f),
        (this.isPropagationStopped = $f),
        this
      );
    }
    return (
      T(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Zu));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Zu));
        },
        persist: function () {},
        isPersistent: Zu,
      }),
      t
    );
  }
  var Da = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Vu = Nt(Da),
    Gn = T({}, Da, { view: 0, detail: 0 }),
    G0 = Nt(Gn),
    xr,
    Tr,
    Xn,
    Ku = T({}, Gn, {
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
      getModifierState: Mr,
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
          : (e !== Xn &&
              (Xn && e.type === "mousemove"
                ? ((xr = e.screenX - Xn.screenX), (Tr = e.screenY - Xn.screenY))
                : (Tr = xr = 0),
              (Xn = e)),
            xr);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Tr;
      },
    }),
    If = Nt(Ku),
    X0 = T({}, Ku, { dataTransfer: 0 }),
    Q0 = Nt(X0),
    Z0 = T({}, Gn, { relatedTarget: 0 }),
    zr = Nt(Z0),
    V0 = T({}, Da, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    K0 = Nt(V0),
    J0 = T({}, Da, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    k0 = Nt(J0),
    W0 = T({}, Da, { data: 0 }),
    Pf = Nt(W0),
    F0 = {
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
    $0 = {
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
    I0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function P0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = I0[e])
        ? !!t[e]
        : !1;
  }
  function Mr() {
    return P0;
  }
  var em = T({}, Gn, {
      key: function (e) {
        if (e.key) {
          var t = F0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Qu(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? $0[e.keyCode] || "Unidentified"
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
      getModifierState: Mr,
      charCode: function (e) {
        return e.type === "keypress" ? Qu(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Qu(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    tm = Nt(em),
    lm = T({}, Ku, {
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
    eo = Nt(lm),
    am = T({}, Gn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Mr,
    }),
    nm = Nt(am),
    um = T({}, Da, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    im = Nt(um),
    rm = T({}, Ku, {
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
    cm = Nt(rm),
    fm = T({}, Da, { newState: 0, oldState: 0 }),
    om = Nt(fm),
    sm = [9, 13, 27, 32],
    Dr = Ml && "CompositionEvent" in window,
    Qn = null;
  Ml && "documentMode" in document && (Qn = document.documentMode);
  var dm = Ml && "TextEvent" in window && !Qn,
    to = Ml && (!Dr || (Qn && 8 < Qn && 11 >= Qn)),
    lo = " ",
    ao = !1;
  function no(e, t) {
    switch (e) {
      case "keyup":
        return sm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function uo(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var en = !1;
  function hm(e, t) {
    switch (e) {
      case "compositionend":
        return uo(t);
      case "keypress":
        return t.which !== 32 ? null : ((ao = !0), lo);
      case "textInput":
        return (e = t.data), e === lo && ao ? null : e;
      default:
        return null;
    }
  }
  function mm(e, t) {
    if (en)
      return e === "compositionend" || (!Dr && no(e, t))
        ? ((e = Ff()), (Xu = Er = Vl = null), (en = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return to && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var vm = {
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
  function io(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!vm[e.type] : t === "textarea";
  }
  function ro(e, t, l, a) {
    Ia ? (Pa ? Pa.push(a) : (Pa = [a])) : (Ia = a),
      (t = Hi(t, "onChange")),
      0 < t.length &&
        ((l = new Vu("onChange", "change", null, l, a)),
        e.push({ event: l, listeners: t }));
  }
  var Zn = null,
    Vn = null;
  function ym(e) {
    Zd(e, 0);
  }
  function Ju(e) {
    var t = At(e);
    if (Xf(t)) return e;
  }
  function co(e, t) {
    if (e === "change") return t;
  }
  var fo = !1;
  if (Ml) {
    var Ar;
    if (Ml) {
      var _r = "oninput" in document;
      if (!_r) {
        var oo = document.createElement("div");
        oo.setAttribute("oninput", "return;"),
          (_r = typeof oo.oninput == "function");
      }
      Ar = _r;
    } else Ar = !1;
    fo = Ar && (!document.documentMode || 9 < document.documentMode);
  }
  function so() {
    Zn && (Zn.detachEvent("onpropertychange", ho), (Vn = Zn = null));
  }
  function ho(e) {
    if (e.propertyName === "value" && Ju(Vn)) {
      var t = [];
      ro(t, Vn, e, pr(e)), Wf(ym, t);
    }
  }
  function gm(e, t, l) {
    e === "focusin"
      ? (so(), (Zn = t), (Vn = l), Zn.attachEvent("onpropertychange", ho))
      : e === "focusout" && so();
  }
  function pm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ju(Vn);
  }
  function bm(e, t) {
    if (e === "click") return Ju(t);
  }
  function Sm(e, t) {
    if (e === "input" || e === "change") return Ju(t);
  }
  function Em(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var qt = typeof Object.is == "function" ? Object.is : Em;
  function Kn(e, t) {
    if (qt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Ka.call(t, n) || !qt(e[n], t[n])) return !1;
    }
    return !0;
  }
  function mo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function vo(e, t) {
    var l = mo(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = mo(l);
    }
  }
  function yo(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? yo(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function go(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = qu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch (a) {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = qu(e.document);
    }
    return t;
  }
  function Rr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var xm = Ml && "documentMode" in document && 11 >= document.documentMode,
    tn = null,
    Or = null,
    Jn = null,
    Nr = !1;
  function po(e, t, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Nr ||
      tn == null ||
      tn !== qu(a) ||
      ((a = tn),
      "selectionStart" in a && Rr(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Jn && Kn(Jn, a)) ||
        ((Jn = a),
        (a = Hi(Or, "onSelect")),
        0 < a.length &&
          ((t = new Vu("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = tn))));
  }
  function Aa(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var ln = {
      animationend: Aa("Animation", "AnimationEnd"),
      animationiteration: Aa("Animation", "AnimationIteration"),
      animationstart: Aa("Animation", "AnimationStart"),
      transitionrun: Aa("Transition", "TransitionRun"),
      transitionstart: Aa("Transition", "TransitionStart"),
      transitioncancel: Aa("Transition", "TransitionCancel"),
      transitionend: Aa("Transition", "TransitionEnd"),
    },
    Ur = {},
    bo = {};
  Ml &&
    ((bo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ln.animationend.animation,
      delete ln.animationiteration.animation,
      delete ln.animationstart.animation),
    "TransitionEvent" in window || delete ln.transitionend.transition);
  function _a(e) {
    if (Ur[e]) return Ur[e];
    if (!ln[e]) return e;
    var t = ln[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in bo) return (Ur[e] = t[l]);
    return e;
  }
  var So = _a("animationend"),
    Eo = _a("animationiteration"),
    xo = _a("animationstart"),
    Tm = _a("transitionrun"),
    zm = _a("transitionstart"),
    Mm = _a("transitioncancel"),
    To = _a("transitionend"),
    zo = new Map(),
    Cr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Cr.push("scrollEnd");
  function sl(e, t) {
    zo.set(e, t), Wt(t, [e]);
  }
  var ku =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
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
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    It = [],
    an = 0,
    jr = 0;
  function Wu() {
    for (var e = an, t = (jr = an = 0); t < e; ) {
      var l = It[t];
      It[t++] = null;
      var a = It[t];
      It[t++] = null;
      var n = It[t];
      It[t++] = null;
      var u = It[t];
      if (((It[t++] = null), a !== null && n !== null)) {
        var r = a.pending;
        r === null ? (n.next = n) : ((n.next = r.next), (r.next = n)),
          (a.pending = n);
      }
      u !== 0 && Mo(l, n, u);
    }
  }
  function Fu(e, t, l, a) {
    (It[an++] = e),
      (It[an++] = t),
      (It[an++] = l),
      (It[an++] = a),
      (jr |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a);
  }
  function Hr(e, t, l, a) {
    return Fu(e, t, l, a), $u(e);
  }
  function Ra(e, t) {
    return Fu(e, null, null, t), $u(e);
  }
  function Mo(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null; )
      (u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
          ((e = u.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = u),
        (u = u.return);
    return e.tag === 3
      ? ((u = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - Mt(l)),
          (e = u.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        u)
      : null;
  }
  function $u(e) {
    if (50 < vu) throw ((vu = 0), (Zc = null), Error(f(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var nn = {};
  function Dm(e, t, l, a) {
    (this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Gt(e, t, l, a) {
    return new Dm(e, t, l, a);
  }
  function wr(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Dl(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = Gt(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function Do(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Iu(e, t, l, a, n, u) {
    var r = 0;
    if (((a = e), typeof e == "function")) wr(e) && (r = 1);
    else if (typeof e == "string")
      r = Nv(e, l, F.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case ze:
          return (e = Gt(31, l, t, n)), (e.elementType = ze), (e.lanes = u), e;
        case J:
          return Oa(l.children, n, u, t);
        case te:
          (r = 8), (n |= 24);
          break;
        case de:
          return (
            (e = Gt(12, l, t, n | 2)), (e.elementType = de), (e.lanes = u), e
          );
        case He:
          return (e = Gt(13, l, t, n)), (e.elementType = He), (e.lanes = u), e;
        case et:
          return (e = Gt(19, l, t, n)), (e.elementType = et), (e.lanes = u), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ge:
                r = 10;
                break e;
              case ie:
                r = 9;
                break e;
              case je:
                r = 11;
                break e;
              case A:
                r = 14;
                break e;
              case le:
                (r = 16), (a = null);
                break e;
            }
          (r = 29),
            (l = Error(f(130, e === null ? "null" : typeof e, ""))),
            (a = null);
      }
    return (
      (t = Gt(r, l, t, n)), (t.elementType = e), (t.type = a), (t.lanes = u), t
    );
  }
  function Oa(e, t, l, a) {
    return (e = Gt(7, e, a, t)), (e.lanes = l), e;
  }
  function Br(e, t, l) {
    return (e = Gt(6, e, null, t)), (e.lanes = l), e;
  }
  function Ao(e) {
    var t = Gt(18, null, null, 0);
    return (t.stateNode = e), t;
  }
  function Lr(e, t, l) {
    return (
      (t = Gt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var _o = new WeakMap();
  function Pt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = _o.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: Bu(t) }), _o.set(e, t), t);
    }
    return { value: e, source: t, stack: Bu(t) };
  }
  var un = [],
    rn = 0,
    Pu = null,
    kn = 0,
    el = [],
    tl = 0,
    Kl = null,
    gl = 1,
    pl = "";
  function Al(e, t) {
    (un[rn++] = kn), (un[rn++] = Pu), (Pu = e), (kn = t);
  }
  function Ro(e, t, l) {
    (el[tl++] = gl), (el[tl++] = pl), (el[tl++] = Kl), (Kl = e);
    var a = gl;
    e = pl;
    var n = 32 - Mt(a) - 1;
    (a &= ~(1 << n)), (l += 1);
    var u = 32 - Mt(t) + n;
    if (30 < u) {
      var r = n - (n % 5);
      (u = (a & ((1 << r) - 1)).toString(32)),
        (a >>= r),
        (n -= r),
        (gl = (1 << (32 - Mt(t) + n)) | (l << n) | a),
        (pl = u + e);
    } else (gl = (1 << u) | (l << n) | a), (pl = e);
  }
  function Yr(e) {
    e.return !== null && (Al(e, 1), Ro(e, 1, 0));
  }
  function qr(e) {
    for (; e === Pu; )
      (Pu = un[--rn]), (un[rn] = null), (kn = un[--rn]), (un[rn] = null);
    for (; e === Kl; )
      (Kl = el[--tl]),
        (el[tl] = null),
        (pl = el[--tl]),
        (el[tl] = null),
        (gl = el[--tl]),
        (el[tl] = null);
  }
  function Oo(e, t) {
    (el[tl++] = gl),
      (el[tl++] = pl),
      (el[tl++] = Kl),
      (gl = t.id),
      (pl = t.overflow),
      (Kl = e);
  }
  var St = null,
    ke = null,
    De = !1,
    Jl = null,
    ll = !1,
    Gr = Error(f(519));
  function kl(e) {
    var t = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Wn(Pt(t, e)), Gr);
  }
  function No(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[K] = e), (t[V] = a), l)) {
      case "dialog":
        Se("cancel", t), Se("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Se("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < gu.length; l++) Se(gu[l], t);
        break;
      case "source":
        Se("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Se("error", t), Se("load", t);
        break;
      case "details":
        Se("toggle", t);
        break;
      case "input":
        Se("invalid", t),
          Qf(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          );
        break;
      case "select":
        Se("invalid", t);
        break;
      case "textarea":
        Se("invalid", t), Vf(t, a.value, a.defaultValue, a.children);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      kd(t.textContent, l)
        ? (a.popover != null && (Se("beforetoggle", t), Se("toggle", t)),
          a.onScroll != null && Se("scroll", t),
          a.onScrollEnd != null && Se("scrollend", t),
          a.onClick != null && (t.onclick = zl),
          (t = !0))
        : (t = !1),
      t || kl(e, !0);
  }
  function Uo(e) {
    for (St = e.return; St; )
      switch (St.tag) {
        case 5:
        case 31:
        case 13:
          ll = !1;
          return;
        case 27:
        case 3:
          ll = !0;
          return;
        default:
          St = St.return;
      }
  }
  function cn(e) {
    if (e !== St) return !1;
    if (!De) return Uo(e), (De = !0), !1;
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || uf(e.type, e.memoizedProps))),
        (l = !l)),
      l && ke && kl(e),
      Uo(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(f(317));
      ke = ah(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(f(317));
      ke = ah(e);
    } else
      t === 27
        ? ((t = ke), ca(e.type) ? ((e = sf), (sf = null), (ke = e)) : (ke = t))
        : (ke = St ? nl(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Na() {
    (ke = St = null), (De = !1);
  }
  function Xr() {
    var e = Jl;
    return (
      e !== null &&
        (Ht === null ? (Ht = e) : Ht.push.apply(Ht, e), (Jl = null)),
      e
    );
  }
  function Wn(e) {
    Jl === null ? (Jl = [e]) : Jl.push(e);
  }
  var Qr = S(null),
    Ua = null,
    _l = null;
  function Wl(e, t, l) {
    X(Qr, t._currentValue), (t._currentValue = l);
  }
  function Rl(e) {
    (e._currentValue = Qr.current), j(Qr);
  }
  function Zr(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function Vr(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var r = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var s = u;
          u = n;
          for (var h = 0; h < t.length; h++)
            if (s.context === t[h]) {
              (u.lanes |= l),
                (s = u.alternate),
                s !== null && (s.lanes |= l),
                Zr(u.return, l, e),
                a || (r = null);
              break e;
            }
          u = s.next;
        }
      } else if (n.tag === 18) {
        if (((r = n.return), r === null)) throw Error(f(341));
        (r.lanes |= l),
          (u = r.alternate),
          u !== null && (u.lanes |= l),
          Zr(r, l, e),
          (r = null);
      } else r = n.child;
      if (r !== null) r.return = n;
      else
        for (r = n; r !== null; ) {
          if (r === e) {
            r = null;
            break;
          }
          if (((n = r.sibling), n !== null)) {
            (n.return = r.return), (r = n);
            break;
          }
          r = r.return;
        }
      n = r;
    }
  }
  function fn(e, t, l, a) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var r = n.alternate;
        if (r === null) throw Error(f(387));
        if (((r = r.memoizedProps), r !== null)) {
          var s = n.type;
          qt(n.pendingProps.value, r.value) ||
            (e !== null ? e.push(s) : (e = [s]));
        }
      } else if (n === ye.current) {
        if (((r = n.alternate), r === null)) throw Error(f(387));
        r.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(xu) : (e = [xu]));
      }
      n = n.return;
    }
    e !== null && Vr(t, e, l, a), (t.flags |= 262144);
  }
  function ei(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!qt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ca(e) {
    (Ua = e),
      (_l = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Et(e) {
    return Co(Ua, e);
  }
  function ti(e, t) {
    return Ua === null && Ca(e), Co(e, t);
  }
  function Co(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), _l === null)) {
      if (e === null) throw Error(f(308));
      (_l = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else _l = _l.next = t;
    return l;
  }
  var Am =
      typeof AbortController != "undefined"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                });
            };
          },
    _m = i.unstable_scheduleCallback,
    Rm = i.unstable_NormalPriority,
    ot = {
      $$typeof: ge,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Kr() {
    return { controller: new Am(), data: new Map(), refCount: 0 };
  }
  function Fn(e) {
    e.refCount--,
      e.refCount === 0 &&
        _m(Rm, function () {
          e.controller.abort();
        });
  }
  var $n = null,
    Jr = 0,
    on = 0,
    sn = null;
  function Om(e, t) {
    if ($n === null) {
      var l = ($n = []);
      (Jr = 0),
        (on = Fc()),
        (sn = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return Jr++, t.then(jo, jo), t;
  }
  function jo() {
    if (--Jr === 0 && $n !== null) {
      sn !== null && (sn.status = "fulfilled");
      var e = $n;
      ($n = null), (on = 0), (sn = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Nm(e, t) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      e.then(
        function () {
          (a.status = "fulfilled"), (a.value = t);
          for (var n = 0; n < l.length; n++) (0, l[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        },
      ),
      a
    );
  }
  var Ho = U.S;
  U.S = function (e, t) {
    (pd = it()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Om(e, t),
      Ho !== null && Ho(e, t);
  };
  var ja = S(null);
  function kr() {
    var e = ja.current;
    return e !== null ? e : Ze.pooledCache;
  }
  function li(e, t) {
    t === null ? X(ja, ja.current) : X(ja, t.pool);
  }
  function wo() {
    var e = kr();
    return e === null ? null : { parent: ot._currentValue, pool: e };
  }
  var dn = Error(f(460)),
    Wr = Error(f(474)),
    ai = Error(f(542)),
    ni = { then: function () {} };
  function Bo(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function Lo(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(zl, zl), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), qo(e), e);
      default:
        if (typeof t.status == "string") t.then(zl, zl);
        else {
          if (((e = Ze), e !== null && 100 < e.shellSuspendCounter))
            throw Error(f(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "fulfilled"), (n.value = a);
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "rejected"), (n.reason = a);
                }
              },
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), qo(e), e);
        }
        throw ((wa = t), dn);
    }
  }
  function Ha(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((wa = l), dn)
        : l;
    }
  }
  var wa = null;
  function Yo() {
    if (wa === null) throw Error(f(459));
    var e = wa;
    return (wa = null), e;
  }
  function qo(e) {
    if (e === dn || e === ai) throw Error(f(483));
  }
  var hn = null,
    In = 0;
  function ui(e) {
    var t = In;
    return (In += 1), hn === null && (hn = []), Lo(hn, e, t);
  }
  function Pn(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function ii(e, t) {
    throw t.$$typeof === w
      ? Error(f(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          f(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Go(e) {
    function t(E, b) {
      if (e) {
        var M = E.deletions;
        M === null ? ((E.deletions = [b]), (E.flags |= 16)) : M.push(b);
      }
    }
    function l(E, b) {
      if (!e) return null;
      for (; b !== null; ) t(E, b), (b = b.sibling);
      return null;
    }
    function a(E) {
      for (var b = new Map(); E !== null; )
        E.key !== null ? b.set(E.key, E) : b.set(E.index, E), (E = E.sibling);
      return b;
    }
    function n(E, b) {
      return (E = Dl(E, b)), (E.index = 0), (E.sibling = null), E;
    }
    function u(E, b, M) {
      return (
        (E.index = M),
        e
          ? ((M = E.alternate),
            M !== null
              ? ((M = M.index), M < b ? ((E.flags |= 67108866), b) : M)
              : ((E.flags |= 67108866), b))
          : ((E.flags |= 1048576), b)
      );
    }
    function r(E) {
      return e && E.alternate === null && (E.flags |= 67108866), E;
    }
    function s(E, b, M, H) {
      return b === null || b.tag !== 6
        ? ((b = Br(M, E.mode, H)), (b.return = E), b)
        : ((b = n(b, M)), (b.return = E), b);
    }
    function h(E, b, M, H) {
      var ne = M.type;
      return ne === J
        ? C(E, b, M.props.children, H, M.key)
        : b !== null &&
            (b.elementType === ne ||
              (typeof ne == "object" &&
                ne !== null &&
                ne.$$typeof === le &&
                Ha(ne) === b.type))
          ? ((b = n(b, M.props)), Pn(b, M), (b.return = E), b)
          : ((b = Iu(M.type, M.key, M.props, null, E.mode, H)),
            Pn(b, M),
            (b.return = E),
            b);
    }
    function D(E, b, M, H) {
      return b === null ||
        b.tag !== 4 ||
        b.stateNode.containerInfo !== M.containerInfo ||
        b.stateNode.implementation !== M.implementation
        ? ((b = Lr(M, E.mode, H)), (b.return = E), b)
        : ((b = n(b, M.children || [])), (b.return = E), b);
    }
    function C(E, b, M, H, ne) {
      return b === null || b.tag !== 7
        ? ((b = Oa(M, E.mode, H, ne)), (b.return = E), b)
        : ((b = n(b, M)), (b.return = E), b);
    }
    function B(E, b, M) {
      if (
        (typeof b == "string" && b !== "") ||
        typeof b == "number" ||
        typeof b == "bigint"
      )
        return (b = Br("" + b, E.mode, M)), (b.return = E), b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case G:
            return (
              (M = Iu(b.type, b.key, b.props, null, E.mode, M)),
              Pn(M, b),
              (M.return = E),
              M
            );
          case W:
            return (b = Lr(b, E.mode, M)), (b.return = E), b;
          case le:
            return (b = Ha(b)), B(E, b, M);
        }
        if (ut(b) || Me(b))
          return (b = Oa(b, E.mode, M, null)), (b.return = E), b;
        if (typeof b.then == "function") return B(E, ui(b), M);
        if (b.$$typeof === ge) return B(E, ti(E, b), M);
        ii(E, b);
      }
      return null;
    }
    function _(E, b, M, H) {
      var ne = b !== null ? b.key : null;
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return ne !== null ? null : s(E, b, "" + M, H);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case G:
            return M.key === ne ? h(E, b, M, H) : null;
          case W:
            return M.key === ne ? D(E, b, M, H) : null;
          case le:
            return (M = Ha(M)), _(E, b, M, H);
        }
        if (ut(M) || Me(M)) return ne !== null ? null : C(E, b, M, H, null);
        if (typeof M.then == "function") return _(E, b, ui(M), H);
        if (M.$$typeof === ge) return _(E, b, ti(E, M), H);
        ii(E, M);
      }
      return null;
    }
    function N(E, b, M, H, ne) {
      if (
        (typeof H == "string" && H !== "") ||
        typeof H == "number" ||
        typeof H == "bigint"
      )
        return (E = E.get(M) || null), s(b, E, "" + H, ne);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case G:
            return (
              (E = E.get(H.key === null ? M : H.key) || null), h(b, E, H, ne)
            );
          case W:
            return (
              (E = E.get(H.key === null ? M : H.key) || null), D(b, E, H, ne)
            );
          case le:
            return (H = Ha(H)), N(E, b, M, H, ne);
        }
        if (ut(H) || Me(H)) return (E = E.get(M) || null), C(b, E, H, ne, null);
        if (typeof H.then == "function") return N(E, b, M, ui(H), ne);
        if (H.$$typeof === ge) return N(E, b, M, ti(b, H), ne);
        ii(b, H);
      }
      return null;
    }
    function I(E, b, M, H) {
      for (
        var ne = null, Ne = null, ee = b, ve = (b = 0), Te = null;
        ee !== null && ve < M.length;
        ve++
      ) {
        ee.index > ve ? ((Te = ee), (ee = null)) : (Te = ee.sibling);
        var Ue = _(E, ee, M[ve], H);
        if (Ue === null) {
          ee === null && (ee = Te);
          break;
        }
        e && ee && Ue.alternate === null && t(E, ee),
          (b = u(Ue, b, ve)),
          Ne === null ? (ne = Ue) : (Ne.sibling = Ue),
          (Ne = Ue),
          (ee = Te);
      }
      if (ve === M.length) return l(E, ee), De && Al(E, ve), ne;
      if (ee === null) {
        for (; ve < M.length; ve++)
          (ee = B(E, M[ve], H)),
            ee !== null &&
              ((b = u(ee, b, ve)),
              Ne === null ? (ne = ee) : (Ne.sibling = ee),
              (Ne = ee));
        return De && Al(E, ve), ne;
      }
      for (ee = a(ee); ve < M.length; ve++)
        (Te = N(ee, E, ve, M[ve], H)),
          Te !== null &&
            (e &&
              Te.alternate !== null &&
              ee.delete(Te.key === null ? ve : Te.key),
            (b = u(Te, b, ve)),
            Ne === null ? (ne = Te) : (Ne.sibling = Te),
            (Ne = Te));
      return (
        e &&
          ee.forEach(function (ha) {
            return t(E, ha);
          }),
        De && Al(E, ve),
        ne
      );
    }
    function re(E, b, M, H) {
      if (M == null) throw Error(f(151));
      for (
        var ne = null,
          Ne = null,
          ee = b,
          ve = (b = 0),
          Te = null,
          Ue = M.next();
        ee !== null && !Ue.done;
        ve++, Ue = M.next()
      ) {
        ee.index > ve ? ((Te = ee), (ee = null)) : (Te = ee.sibling);
        var ha = _(E, ee, Ue.value, H);
        if (ha === null) {
          ee === null && (ee = Te);
          break;
        }
        e && ee && ha.alternate === null && t(E, ee),
          (b = u(ha, b, ve)),
          Ne === null ? (ne = ha) : (Ne.sibling = ha),
          (Ne = ha),
          (ee = Te);
      }
      if (Ue.done) return l(E, ee), De && Al(E, ve), ne;
      if (ee === null) {
        for (; !Ue.done; ve++, Ue = M.next())
          (Ue = B(E, Ue.value, H)),
            Ue !== null &&
              ((b = u(Ue, b, ve)),
              Ne === null ? (ne = Ue) : (Ne.sibling = Ue),
              (Ne = Ue));
        return De && Al(E, ve), ne;
      }
      for (ee = a(ee); !Ue.done; ve++, Ue = M.next())
        (Ue = N(ee, E, ve, Ue.value, H)),
          Ue !== null &&
            (e &&
              Ue.alternate !== null &&
              ee.delete(Ue.key === null ? ve : Ue.key),
            (b = u(Ue, b, ve)),
            Ne === null ? (ne = Ue) : (Ne.sibling = Ue),
            (Ne = Ue));
      return (
        e &&
          ee.forEach(function (Xv) {
            return t(E, Xv);
          }),
        De && Al(E, ve),
        ne
      );
    }
    function Xe(E, b, M, H) {
      if (
        (typeof M == "object" &&
          M !== null &&
          M.type === J &&
          M.key === null &&
          (M = M.props.children),
        typeof M == "object" && M !== null)
      ) {
        switch (M.$$typeof) {
          case G:
            e: {
              for (var ne = M.key; b !== null; ) {
                if (b.key === ne) {
                  if (((ne = M.type), ne === J)) {
                    if (b.tag === 7) {
                      l(E, b.sibling),
                        (H = n(b, M.props.children)),
                        (H.return = E),
                        (E = H);
                      break e;
                    }
                  } else if (
                    b.elementType === ne ||
                    (typeof ne == "object" &&
                      ne !== null &&
                      ne.$$typeof === le &&
                      Ha(ne) === b.type)
                  ) {
                    l(E, b.sibling),
                      (H = n(b, M.props)),
                      Pn(H, M),
                      (H.return = E),
                      (E = H);
                    break e;
                  }
                  l(E, b);
                  break;
                } else t(E, b);
                b = b.sibling;
              }
              M.type === J
                ? ((H = Oa(M.props.children, E.mode, H, M.key)),
                  (H.return = E),
                  (E = H))
                : ((H = Iu(M.type, M.key, M.props, null, E.mode, H)),
                  Pn(H, M),
                  (H.return = E),
                  (E = H));
            }
            return r(E);
          case W:
            e: {
              for (ne = M.key; b !== null; ) {
                if (b.key === ne)
                  if (
                    b.tag === 4 &&
                    b.stateNode.containerInfo === M.containerInfo &&
                    b.stateNode.implementation === M.implementation
                  ) {
                    l(E, b.sibling),
                      (H = n(b, M.children || [])),
                      (H.return = E),
                      (E = H);
                    break e;
                  } else {
                    l(E, b);
                    break;
                  }
                else t(E, b);
                b = b.sibling;
              }
              (H = Lr(M, E.mode, H)), (H.return = E), (E = H);
            }
            return r(E);
          case le:
            return (M = Ha(M)), Xe(E, b, M, H);
        }
        if (ut(M)) return I(E, b, M, H);
        if (Me(M)) {
          if (((ne = Me(M)), typeof ne != "function")) throw Error(f(150));
          return (M = ne.call(M)), re(E, b, M, H);
        }
        if (typeof M.then == "function") return Xe(E, b, ui(M), H);
        if (M.$$typeof === ge) return Xe(E, b, ti(E, M), H);
        ii(E, M);
      }
      return (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
        ? ((M = "" + M),
          b !== null && b.tag === 6
            ? (l(E, b.sibling), (H = n(b, M)), (H.return = E), (E = H))
            : (l(E, b), (H = Br(M, E.mode, H)), (H.return = E), (E = H)),
          r(E))
        : l(E, b);
    }
    return function (E, b, M, H) {
      try {
        In = 0;
        var ne = Xe(E, b, M, H);
        return (hn = null), ne;
      } catch (ee) {
        if (ee === dn || ee === ai) throw ee;
        var Ne = Gt(29, ee, null, E.mode);
        return (Ne.lanes = H), (Ne.return = E), Ne;
      } finally {
      }
    };
  }
  var Ba = Go(!0),
    Xo = Go(!1),
    Fl = !1;
  function Fr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function $r(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function $l(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Il(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Ce & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = $u(e)),
        Mo(e, null, l),
        t
      );
    }
    return Fu(e, a, t, l), $u(e);
  }
  function eu(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), x(e, l);
    }
  }
  function Ir(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var r = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          u === null ? (n = u = r) : (u = u.next = r), (l = l.next);
        } while (l !== null);
        u === null ? (n = u = t) : (u = u.next = t);
      } else n = u = t;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l);
      return;
    }
    (e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t);
  }
  var Pr = !1;
  function tu() {
    if (Pr) {
      var e = sn;
      if (e !== null) throw e;
    }
  }
  function lu(e, t, l, a) {
    Pr = !1;
    var n = e.updateQueue;
    Fl = !1;
    var u = n.firstBaseUpdate,
      r = n.lastBaseUpdate,
      s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var h = s,
        D = h.next;
      (h.next = null), r === null ? (u = D) : (r.next = D), (r = h);
      var C = e.alternate;
      C !== null &&
        ((C = C.updateQueue),
        (s = C.lastBaseUpdate),
        s !== r &&
          (s === null ? (C.firstBaseUpdate = D) : (s.next = D),
          (C.lastBaseUpdate = h)));
    }
    if (u !== null) {
      var B = n.baseState;
      (r = 0), (C = D = h = null), (s = u);
      do {
        var _ = s.lane & -536870913,
          N = _ !== s.lane;
        if (N ? (xe & _) === _ : (a & _) === _) {
          _ !== 0 && _ === on && (Pr = !0),
            C !== null &&
              (C = C.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var I = e,
              re = s;
            _ = t;
            var Xe = l;
            switch (re.tag) {
              case 1:
                if (((I = re.payload), typeof I == "function")) {
                  B = I.call(Xe, B, _);
                  break e;
                }
                B = I;
                break e;
              case 3:
                I.flags = (I.flags & -65537) | 128;
              case 0:
                if (
                  ((I = re.payload),
                  (_ = typeof I == "function" ? I.call(Xe, B, _) : I),
                  _ == null)
                )
                  break e;
                B = T({}, B, _);
                break e;
              case 2:
                Fl = !0;
            }
          }
          (_ = s.callback),
            _ !== null &&
              ((e.flags |= 64),
              N && (e.flags |= 8192),
              (N = n.callbacks),
              N === null ? (n.callbacks = [_]) : N.push(_));
        } else
          (N = {
            lane: _,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            C === null ? ((D = C = N), (h = B)) : (C = C.next = N),
            (r |= _);
        if (((s = s.next), s === null)) {
          if (((s = n.shared.pending), s === null)) break;
          (N = s),
            (s = N.next),
            (N.next = null),
            (n.lastBaseUpdate = N),
            (n.shared.pending = null);
        }
      } while (!0);
      C === null && (h = B),
        (n.baseState = h),
        (n.firstBaseUpdate = D),
        (n.lastBaseUpdate = C),
        u === null && (n.shared.lanes = 0),
        (aa |= r),
        (e.lanes = r),
        (e.memoizedState = B);
    }
  }
  function Qo(e, t) {
    if (typeof e != "function") throw Error(f(191, e));
    e.call(t);
  }
  function Zo(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) Qo(l[e], t);
  }
  var mn = S(null),
    ri = S(0);
  function Vo(e, t) {
    (e = Ll), X(ri, e), X(mn, t), (Ll = e | t.baseLanes);
  }
  function ec() {
    X(ri, Ll), X(mn, mn.current);
  }
  function tc() {
    (Ll = ri.current), j(mn), j(ri);
  }
  var Xt = S(null),
    al = null;
  function Pl(e) {
    var t = e.alternate;
    X(rt, rt.current & 1),
      X(Xt, e),
      al === null &&
        (t === null || mn.current !== null || t.memoizedState !== null) &&
        (al = e);
  }
  function lc(e) {
    X(rt, rt.current), X(Xt, e), al === null && (al = e);
  }
  function Ko(e) {
    e.tag === 22
      ? (X(rt, rt.current), X(Xt, e), al === null && (al = e))
      : ea();
  }
  function ea() {
    X(rt, rt.current), X(Xt, Xt.current);
  }
  function Qt(e) {
    j(Xt), al === e && (al = null), j(rt);
  }
  var rt = S(0);
  function ci(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || ff(l) || of(l)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Ol = 0,
    me = null,
    qe = null,
    st = null,
    fi = !1,
    vn = !1,
    La = !1,
    oi = 0,
    au = 0,
    yn = null,
    Um = 0;
  function lt() {
    throw Error(f(321));
  }
  function ac(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!qt(e[l], t[l])) return !1;
    return !0;
  }
  function nc(e, t, l, a, n, u) {
    return (
      (Ol = u),
      (me = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (U.H = e === null || e.memoizedState === null ? Rs : bc),
      (La = !1),
      (u = l(a, n)),
      (La = !1),
      vn && (u = ko(t, l, a, n)),
      Jo(e),
      u
    );
  }
  function Jo(e) {
    U.H = iu;
    var t = qe !== null && qe.next !== null;
    if (((Ol = 0), (st = qe = me = null), (fi = !1), (au = 0), (yn = null), t))
      throw Error(f(300));
    e === null ||
      dt ||
      ((e = e.dependencies), e !== null && ei(e) && (dt = !0));
  }
  function ko(e, t, l, a) {
    me = e;
    var n = 0;
    do {
      if ((vn && (yn = null), (au = 0), (vn = !1), 25 <= n))
        throw Error(f(301));
      if (((n += 1), (st = qe = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (U.H = Os), (u = t(l, a));
    } while (vn);
    return u;
  }
  function Cm() {
    var e = U.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? nu(t) : t),
      (e = e.useState()[0]),
      (qe !== null ? qe.memoizedState : null) !== e && (me.flags |= 1024),
      t
    );
  }
  function uc() {
    var e = oi !== 0;
    return (oi = 0), e;
  }
  function ic(e, t, l) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l);
  }
  function rc(e) {
    if (fi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      fi = !1;
    }
    (Ol = 0), (st = qe = me = null), (vn = !1), (au = oi = 0), (yn = null);
  }
  function _t() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return st === null ? (me.memoizedState = st = e) : (st = st.next = e), st;
  }
  function ct() {
    if (qe === null) {
      var e = me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = qe.next;
    var t = st === null ? me.memoizedState : st.next;
    if (t !== null) (st = t), (qe = e);
    else {
      if (e === null)
        throw me.alternate === null ? Error(f(467)) : Error(f(310));
      (qe = e),
        (e = {
          memoizedState: qe.memoizedState,
          baseState: qe.baseState,
          baseQueue: qe.baseQueue,
          queue: qe.queue,
          next: null,
        }),
        st === null ? (me.memoizedState = st = e) : (st = st.next = e);
    }
    return st;
  }
  function si() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function nu(e) {
    var t = au;
    return (
      (au += 1),
      yn === null && (yn = []),
      (e = Lo(yn, e, t)),
      (t = me),
      (st === null ? t.memoizedState : st.next) === null &&
        ((t = t.alternate),
        (U.H = t === null || t.memoizedState === null ? Rs : bc)),
      e
    );
  }
  function di(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return nu(e);
      if (e.$$typeof === ge) return Et(e);
    }
    throw Error(f(438, String(e)));
  }
  function cc(e) {
    var t = null,
      l = me.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = me.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = si()), (me.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = he;
    return t.index++, l;
  }
  function Nl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function hi(e) {
    var t = ct();
    return fc(t, qe, e);
  }
  function fc(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var r = n.next;
        (n.next = u.next), (u.next = r);
      }
      (t.baseQueue = n = u), (a.pending = null);
    }
    if (((u = e.baseState), n === null)) e.memoizedState = u;
    else {
      t = n.next;
      var s = (r = null),
        h = null,
        D = t,
        C = !1;
      do {
        var B = D.lane & -536870913;
        if (B !== D.lane ? (xe & B) === B : (Ol & B) === B) {
          var _ = D.revertLane;
          if (_ === 0)
            h !== null &&
              (h = h.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: D.action,
                  hasEagerState: D.hasEagerState,
                  eagerState: D.eagerState,
                  next: null,
                }),
              B === on && (C = !0);
          else if ((Ol & _) === _) {
            (D = D.next), _ === on && (C = !0);
            continue;
          } else
            (B = {
              lane: 0,
              revertLane: D.revertLane,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null,
            }),
              h === null ? ((s = h = B), (r = u)) : (h = h.next = B),
              (me.lanes |= _),
              (aa |= _);
          (B = D.action),
            La && l(u, B),
            (u = D.hasEagerState ? D.eagerState : l(u, B));
        } else
          (_ = {
            lane: B,
            revertLane: D.revertLane,
            gesture: D.gesture,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null,
          }),
            h === null ? ((s = h = _), (r = u)) : (h = h.next = _),
            (me.lanes |= B),
            (aa |= B);
        D = D.next;
      } while (D !== null && D !== t);
      if (
        (h === null ? (r = u) : (h.next = s),
        !qt(u, e.memoizedState) && ((dt = !0), C && ((l = sn), l !== null)))
      )
        throw l;
      (e.memoizedState = u),
        (e.baseState = r),
        (e.baseQueue = h),
        (a.lastRenderedState = u);
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function oc(e) {
    var t = ct(),
      l = t.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      u = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var r = (n = n.next);
      do (u = e(u, r.action)), (r = r.next);
      while (r !== n);
      qt(u, t.memoizedState) || (dt = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (l.lastRenderedState = u);
    }
    return [u, a];
  }
  function Wo(e, t, l) {
    var a = me,
      n = ct(),
      u = De;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = t();
    var r = !qt((qe || n).memoizedState, l);
    if (
      (r && ((n.memoizedState = l), (dt = !0)),
      (n = n.queue),
      hc(Io.bind(null, a, n, e), [e]),
      n.getSnapshot !== t || r || (st !== null && st.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        gn(9, { destroy: void 0 }, $o.bind(null, a, n, l, t), null),
        Ze === null)
      )
        throw Error(f(349));
      u || (Ol & 127) !== 0 || Fo(a, t, l);
    }
    return l;
  }
  function Fo(e, t, l) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = me.updateQueue),
      t === null
        ? ((t = si()), (me.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e));
  }
  function $o(e, t, l, a) {
    (t.value = l), (t.getSnapshot = a), Po(t) && es(e);
  }
  function Io(e, t, l) {
    return l(function () {
      Po(t) && es(e);
    });
  }
  function Po(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !qt(e, l);
    } catch (a) {
      return !0;
    }
  }
  function es(e) {
    var t = Ra(e, 2);
    t !== null && wt(t, e, 2);
  }
  function sc(e) {
    var t = _t();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), La)) {
        cl(!0);
        try {
          l();
        } finally {
          cl(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nl,
        lastRenderedState: e,
      }),
      t
    );
  }
  function ts(e, t, l, a) {
    return (e.baseState = l), fc(e, qe, typeof a == "function" ? a : Nl);
  }
  function jm(e, t, l, a, n) {
    if (yi(e)) throw Error(f(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (r) {
          u.listeners.push(r);
        },
      };
      U.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = t.pending),
        l === null
          ? ((u.next = t.pending = u), ls(t, u))
          : ((u.next = l.next), (t.pending = l.next = u));
    }
  }
  function ls(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var u = U.T,
        r = {};
      U.T = r;
      try {
        var s = l(n, a),
          h = U.S;
        h !== null && h(r, s), as(e, t, s);
      } catch (D) {
        dc(e, t, D);
      } finally {
        u !== null && r.types !== null && (u.types = r.types), (U.T = u);
      }
    } else
      try {
        (u = l(n, a)), as(e, t, u);
      } catch (D) {
        dc(e, t, D);
      }
  }
  function as(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            ns(e, t, a);
          },
          function (a) {
            return dc(e, t, a);
          },
        )
      : ns(e, t, l);
  }
  function ns(e, t, l) {
    (t.status = "fulfilled"),
      (t.value = l),
      us(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), ls(e, l)));
  }
  function dc(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do (t.status = "rejected"), (t.reason = l), us(t), (t = t.next);
      while (t !== a);
    }
    e.action = null;
  }
  function us(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function is(e, t) {
    return t;
  }
  function rs(e, t) {
    if (De) {
      var l = Ze.formState;
      if (l !== null) {
        e: {
          var a = me;
          if (De) {
            if (ke) {
              t: {
                for (var n = ke, u = ll; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = nl(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                (u = n.data), (n = u === "F!" || u === "F" ? n : null);
              }
              if (n) {
                (ke = nl(n.nextSibling)), (a = n.data === "F!");
                break e;
              }
            }
            kl(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = _t()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: is,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = Ds.bind(null, me, a)),
      (a.dispatch = l),
      (a = sc(!1)),
      (u = pc.bind(null, me, !1, a.queue)),
      (a = _t()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = jm.bind(null, me, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function cs(e) {
    var t = ct();
    return fs(t, qe, e);
  }
  function fs(e, t, l) {
    if (
      ((t = fc(e, t, is)[0]),
      (e = hi(Nl)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = nu(t);
      } catch (r) {
        throw r === dn ? ai : r;
      }
    else a = t;
    t = ct();
    var n = t.queue,
      u = n.dispatch;
    return (
      l !== t.memoizedState &&
        ((me.flags |= 2048),
        gn(9, { destroy: void 0 }, Hm.bind(null, n, l), null)),
      [a, u, e]
    );
  }
  function Hm(e, t) {
    e.action = t;
  }
  function os(e) {
    var t = ct(),
      l = qe;
    if (l !== null) return fs(t, l, e);
    ct(), (t = t.memoizedState), (l = ct());
    var a = l.queue.dispatch;
    return (l.memoizedState = e), [t, a, !1];
  }
  function gn(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = me.updateQueue),
      t === null && ((t = si()), (me.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function ss() {
    return ct().memoizedState;
  }
  function mi(e, t, l, a) {
    var n = _t();
    (me.flags |= e),
      (n.memoizedState = gn(
        1 | t,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a,
      ));
  }
  function vi(e, t, l, a) {
    var n = ct();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    qe !== null && a !== null && ac(a, qe.memoizedState.deps)
      ? (n.memoizedState = gn(t, u, l, a))
      : ((me.flags |= e), (n.memoizedState = gn(1 | t, u, l, a)));
  }
  function ds(e, t) {
    mi(8390656, 8, e, t);
  }
  function hc(e, t) {
    vi(2048, 8, e, t);
  }
  function wm(e) {
    me.flags |= 4;
    var t = me.updateQueue;
    if (t === null) (t = si()), (me.updateQueue = t), (t.events = [e]);
    else {
      var l = t.events;
      l === null ? (t.events = [e]) : l.push(e);
    }
  }
  function hs(e) {
    var t = ct().memoizedState;
    return (
      wm({ ref: t, nextImpl: e }),
      function () {
        if ((Ce & 2) !== 0) throw Error(f(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function ms(e, t) {
    return vi(4, 2, e, t);
  }
  function vs(e, t) {
    return vi(4, 4, e, t);
  }
  function ys(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function gs(e, t, l) {
    (l = l != null ? l.concat([e]) : null), vi(4, 4, ys.bind(null, t, e), l);
  }
  function mc() {}
  function ps(e, t) {
    var l = ct();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && ac(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function bs(e, t) {
    var l = ct();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && ac(t, a[1])) return a[0];
    if (((a = e()), La)) {
      cl(!0);
      try {
        e();
      } finally {
        cl(!1);
      }
    }
    return (l.memoizedState = [a, t]), a;
  }
  function vc(e, t, l) {
    return l === void 0 || ((Ol & 1073741824) !== 0 && (xe & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = Sd()), (me.lanes |= e), (aa |= e), l);
  }
  function Ss(e, t, l, a) {
    return qt(l, t)
      ? l
      : mn.current !== null
        ? ((e = vc(e, l, a)), qt(e, t) || (dt = !0), e)
        : (Ol & 42) === 0 || ((Ol & 1073741824) !== 0 && (xe & 261930) === 0)
          ? ((dt = !0), (e.memoizedState = l))
          : ((e = Sd()), (me.lanes |= e), (aa |= e), t);
  }
  function Es(e, t, l, a, n) {
    var u = Q.p;
    Q.p = u !== 0 && 8 > u ? u : 8;
    var r = U.T,
      s = {};
    (U.T = s), pc(e, !1, t, l);
    try {
      var h = n(),
        D = U.S;
      if (
        (D !== null && D(s, h),
        h !== null && typeof h == "object" && typeof h.then == "function")
      ) {
        var C = Nm(h, a);
        uu(e, t, C, Kt(e));
      } else uu(e, t, a, Kt(e));
    } catch (B) {
      uu(e, t, { then: function () {}, status: "rejected", reason: B }, Kt());
    } finally {
      (Q.p = u),
        r !== null && s.types !== null && (r.types = s.types),
        (U.T = r);
    }
  }
  function Bm() {}
  function yc(e, t, l, a) {
    if (e.tag !== 5) throw Error(f(476));
    var n = xs(e).queue;
    Es(
      e,
      n,
      t,
      $,
      l === null
        ? Bm
        : function () {
            return Ts(e), l(a);
          },
    );
  }
  function xs(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: $,
      baseState: $,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nl,
        lastRenderedState: $,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Nl,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Ts(e) {
    var t = xs(e);
    t.next === null && (t = e.alternate.memoizedState),
      uu(e, t.next.queue, {}, Kt());
  }
  function gc() {
    return Et(xu);
  }
  function zs() {
    return ct().memoizedState;
  }
  function Ms() {
    return ct().memoizedState;
  }
  function Lm(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Kt();
          e = $l(l);
          var a = Il(t, e, l);
          a !== null && (wt(a, t, l), eu(a, t, l)),
            (t = { cache: Kr() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Ym(e, t, l) {
    var a = Kt();
    (l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      yi(e)
        ? As(t, l)
        : ((l = Hr(e, t, l, a)), l !== null && (wt(l, e, a), _s(l, t, a)));
  }
  function Ds(e, t, l) {
    var a = Kt();
    uu(e, t, l, a);
  }
  function uu(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (yi(e)) As(t, n);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var r = t.lastRenderedState,
            s = u(r, l);
          if (((n.hasEagerState = !0), (n.eagerState = s), qt(s, r)))
            return Fu(e, t, n, 0), Ze === null && Wu(), !1;
        } catch (h) {
        } finally {
        }
      if (((l = Hr(e, t, n, a)), l !== null))
        return wt(l, e, a), _s(l, t, a), !0;
    }
    return !1;
  }
  function pc(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Fc(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      yi(e))
    ) {
      if (t) throw Error(f(479));
    } else (t = Hr(e, l, a, 2)), t !== null && wt(t, e, 2);
  }
  function yi(e) {
    var t = e.alternate;
    return e === me || (t !== null && t === me);
  }
  function As(e, t) {
    vn = fi = !0;
    var l = e.pending;
    l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t);
  }
  function _s(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), x(e, l);
    }
  }
  var iu = {
    readContext: Et,
    use: di,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useLayoutEffect: lt,
    useInsertionEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useSyncExternalStore: lt,
    useId: lt,
    useHostTransitionStatus: lt,
    useFormState: lt,
    useActionState: lt,
    useOptimistic: lt,
    useMemoCache: lt,
    useCacheRefresh: lt,
  };
  iu.useEffectEvent = lt;
  var Rs = {
      readContext: Et,
      use: di,
      useCallback: function (e, t) {
        return (_t().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Et,
      useEffect: ds,
      useImperativeHandle: function (e, t, l) {
        (l = l != null ? l.concat([e]) : null),
          mi(4194308, 4, ys.bind(null, t, e), l);
      },
      useLayoutEffect: function (e, t) {
        return mi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        mi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = _t();
        t = t === void 0 ? null : t;
        var a = e();
        if (La) {
          cl(!0);
          try {
            e();
          } finally {
            cl(!1);
          }
        }
        return (l.memoizedState = [a, t]), a;
      },
      useReducer: function (e, t, l) {
        var a = _t();
        if (l !== void 0) {
          var n = l(t);
          if (La) {
            cl(!0);
            try {
              l(t);
            } finally {
              cl(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = Ym.bind(null, me, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = _t();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = sc(e);
        var t = e.queue,
          l = Ds.bind(null, me, t);
        return (t.dispatch = l), [e.memoizedState, l];
      },
      useDebugValue: mc,
      useDeferredValue: function (e, t) {
        var l = _t();
        return vc(l, e, t);
      },
      useTransition: function () {
        var e = sc(!1);
        return (
          (e = Es.bind(null, me, e.queue, !0, !1)),
          (_t().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var a = me,
          n = _t();
        if (De) {
          if (l === void 0) throw Error(f(407));
          l = l();
        } else {
          if (((l = t()), Ze === null)) throw Error(f(349));
          (xe & 127) !== 0 || Fo(a, t, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: t };
        return (
          (n.queue = u),
          ds(Io.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          gn(9, { destroy: void 0 }, $o.bind(null, a, u, l, t), null),
          l
        );
      },
      useId: function () {
        var e = _t(),
          t = Ze.identifierPrefix;
        if (De) {
          var l = pl,
            a = gl;
          (l = (a & ~(1 << (32 - Mt(a) - 1))).toString(32) + l),
            (t = "_" + t + "R_" + l),
            (l = oi++),
            0 < l && (t += "H" + l.toString(32)),
            (t += "_");
        } else (l = Um++), (t = "_" + t + "r_" + l.toString(32) + "_");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: gc,
      useFormState: rs,
      useActionState: rs,
      useOptimistic: function (e) {
        var t = _t();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l),
          (t = pc.bind(null, me, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: cc,
      useCacheRefresh: function () {
        return (_t().memoizedState = Lm.bind(null, me));
      },
      useEffectEvent: function (e) {
        var t = _t(),
          l = { impl: e };
        return (
          (t.memoizedState = l),
          function () {
            if ((Ce & 2) !== 0) throw Error(f(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    bc = {
      readContext: Et,
      use: di,
      useCallback: ps,
      useContext: Et,
      useEffect: hc,
      useImperativeHandle: gs,
      useInsertionEffect: ms,
      useLayoutEffect: vs,
      useMemo: bs,
      useReducer: hi,
      useRef: ss,
      useState: function () {
        return hi(Nl);
      },
      useDebugValue: mc,
      useDeferredValue: function (e, t) {
        var l = ct();
        return Ss(l, qe.memoizedState, e, t);
      },
      useTransition: function () {
        var e = hi(Nl)[0],
          t = ct().memoizedState;
        return [typeof e == "boolean" ? e : nu(e), t];
      },
      useSyncExternalStore: Wo,
      useId: zs,
      useHostTransitionStatus: gc,
      useFormState: cs,
      useActionState: cs,
      useOptimistic: function (e, t) {
        var l = ct();
        return ts(l, qe, e, t);
      },
      useMemoCache: cc,
      useCacheRefresh: Ms,
    };
  bc.useEffectEvent = hs;
  var Os = {
    readContext: Et,
    use: di,
    useCallback: ps,
    useContext: Et,
    useEffect: hc,
    useImperativeHandle: gs,
    useInsertionEffect: ms,
    useLayoutEffect: vs,
    useMemo: bs,
    useReducer: oc,
    useRef: ss,
    useState: function () {
      return oc(Nl);
    },
    useDebugValue: mc,
    useDeferredValue: function (e, t) {
      var l = ct();
      return qe === null ? vc(l, e, t) : Ss(l, qe.memoizedState, e, t);
    },
    useTransition: function () {
      var e = oc(Nl)[0],
        t = ct().memoizedState;
      return [typeof e == "boolean" ? e : nu(e), t];
    },
    useSyncExternalStore: Wo,
    useId: zs,
    useHostTransitionStatus: gc,
    useFormState: os,
    useActionState: os,
    useOptimistic: function (e, t) {
      var l = ct();
      return qe !== null
        ? ts(l, qe, e, t)
        : ((l.baseState = e), [e, l.queue.dispatch]);
    },
    useMemoCache: cc,
    useCacheRefresh: Ms,
  };
  Os.useEffectEvent = hs;
  function Sc(e, t, l, a) {
    (t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : T({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Ec = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = Kt(),
        n = $l(a);
      (n.payload = t),
        l != null && (n.callback = l),
        (t = Il(e, n, a)),
        t !== null && (wt(t, e, a), eu(t, e, a));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = Kt(),
        n = $l(a);
      (n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = Il(e, n, a)),
        t !== null && (wt(t, e, a), eu(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = Kt(),
        a = $l(l);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = Il(e, a, l)),
        t !== null && (wt(t, e, l), eu(t, e, l));
    },
  };
  function Ns(e, t, l, a, n, u, r) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, u, r)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Kn(l, a) || !Kn(n, u)
          : !0
    );
  }
  function Us(e, t, l, a) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && Ec.enqueueReplaceState(t, t.state, null);
  }
  function Ya(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = T({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function Cs(e) {
    ku(e);
  }
  function js(e) {
    console.error(e);
  }
  function Hs(e) {
    ku(e);
  }
  function gi(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function ws(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function xc(e, t, l) {
    return (
      (l = $l(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        gi(e, t);
      }),
      l
    );
  }
  function Bs(e) {
    return (e = $l(e)), (e.tag = 3), e;
  }
  function Ls(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      (e.payload = function () {
        return n(u);
      }),
        (e.callback = function () {
          ws(t, l, a);
        });
    }
    var r = l.stateNode;
    r !== null &&
      typeof r.componentDidCatch == "function" &&
      (e.callback = function () {
        ws(t, l, a),
          typeof n != "function" &&
            (na === null ? (na = new Set([this])) : na.add(this));
        var s = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: s !== null ? s : "",
        });
      });
  }
  function qm(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && fn(t, l, n, !0),
        (l = Xt.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              al === null ? Ri() : l.alternate === null && at === 0 && (at = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === ni
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  Jc(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === ni
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  Jc(e, a, n)),
              !1
            );
        }
        throw Error(f(435, l.tag));
      }
      return Jc(e, a, n), Ri(), !1;
    }
    if (De)
      return (
        (t = Xt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== Gr && ((e = Error(f(422), { cause: a })), Wn(Pt(e, l))))
          : (a !== Gr && ((t = Error(f(423), { cause: a })), Wn(Pt(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = Pt(a, l)),
            (n = xc(e.stateNode, a, n)),
            Ir(e, n),
            at !== 4 && (at = 2)),
        !1
      );
    var u = Error(f(520), { cause: a });
    if (
      ((u = Pt(u, l)),
      mu === null ? (mu = [u]) : mu.push(u),
      at !== 4 && (at = 2),
      t === null)
    )
      return !0;
    (a = Pt(a, l)), (l = t);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = xc(l.stateNode, a, e)),
            Ir(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (na === null || !na.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = Bs(n)),
              Ls(n, e, l, a),
              Ir(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Tc = Error(f(461)),
    dt = !1;
  function xt(e, t, l, a) {
    t.child = e === null ? Xo(t, null, l, a) : Ba(t, e.child, l, a);
  }
  function Ys(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ("ref" in a) {
      var r = {};
      for (var s in a) s !== "ref" && (r[s] = a[s]);
    } else r = a;
    return (
      Ca(t),
      (a = nc(e, t, l, r, u, n)),
      (s = uc()),
      e !== null && !dt
        ? (ic(e, t, n), Ul(e, t, n))
        : (De && s && Yr(t), (t.flags |= 1), xt(e, t, a, n), t.child)
    );
  }
  function qs(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" &&
        !wr(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = u), Gs(e, t, u, a, n))
        : ((e = Iu(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !Nc(e, n))) {
      var r = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Kn), l(r, a) && e.ref === t.ref)
      )
        return Ul(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = Dl(u, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Gs(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Kn(u, a) && e.ref === t.ref)
        if (((dt = !1), (t.pendingProps = a = u), Nc(e, n)))
          (e.flags & 131072) !== 0 && (dt = !0);
        else return (t.lanes = e.lanes), Ul(e, t, n);
    }
    return zc(e, t, l, a, n);
  }
  function Xs(e, t, l, a) {
    var n = a.children,
      u = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | l : l), e !== null)) {
          for (a = t.child = e.child, n = 0; a !== null; )
            (n = n | a.lanes | a.childLanes), (a = a.sibling);
          a = n & ~u;
        } else (a = 0), (t.child = null);
        return Qs(e, t, u, l, a);
      }
      if ((l & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && li(t, u !== null ? u.cachePool : null),
          u !== null ? Vo(t, u) : ec(),
          Ko(t);
      else
        return (
          (a = t.lanes = 536870912),
          Qs(e, t, u !== null ? u.baseLanes | l : l, l, a)
        );
    } else
      u !== null
        ? (li(t, u.cachePool), Vo(t, u), ea(), (t.memoizedState = null))
        : (e !== null && li(t, null), ec(), ea());
    return xt(e, t, n, l), t.child;
  }
  function ru(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Qs(e, t, l, a, n) {
    var u = kr();
    return (
      (u = u === null ? null : { parent: ot._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: l, cachePool: u }),
      e !== null && li(t, null),
      ec(),
      Ko(t),
      e !== null && fn(e, t, a, !0),
      (t.childLanes = n),
      null
    );
  }
  function pi(e, t) {
    return (
      (t = Si({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Zs(e, t, l) {
    return (
      Ba(t, e.child, null, l),
      (e = pi(t, t.pendingProps)),
      (e.flags |= 2),
      Qt(t),
      (t.memoizedState = null),
      e
    );
  }
  function Gm(e, t, l) {
    var a = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (De) {
        if (a.mode === "hidden")
          return (e = pi(t, a)), (t.lanes = 536870912), ru(null, e);
        if (
          (lc(t),
          (e = ke)
            ? ((e = lh(e, ll)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Kl !== null ? { id: gl, overflow: pl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Ao(e)),
                (l.return = t),
                (t.child = l),
                (St = t),
                (ke = null)))
            : (e = null),
          e === null)
        )
          throw kl(t);
        return (t.lanes = 536870912), null;
      }
      return pi(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var r = u.dehydrated;
      if ((lc(t), n))
        if (t.flags & 256) (t.flags &= -257), (t = Zs(e, t, l));
        else if (t.memoizedState !== null)
          (t.child = e.child), (t.flags |= 128), (t = null);
        else throw Error(f(558));
      else if (
        (dt || fn(e, t, l, !1), (n = (l & e.childLanes) !== 0), dt || n)
      ) {
        if (
          ((a = Ze),
          a !== null && ((r = O(a, l)), r !== 0 && r !== u.retryLane))
        )
          throw ((u.retryLane = r), Ra(e, r), wt(a, e, r), Tc);
        Ri(), (t = Zs(e, t, l));
      } else
        (e = u.treeContext),
          (ke = nl(r.nextSibling)),
          (St = t),
          (De = !0),
          (Jl = null),
          (ll = !1),
          e !== null && Oo(t, e),
          (t = pi(t, a)),
          (t.flags |= 4096);
      return t;
    }
    return (
      (e = Dl(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function bi(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(f(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function zc(e, t, l, a, n) {
    return (
      Ca(t),
      (l = nc(e, t, l, a, void 0, n)),
      (a = uc()),
      e !== null && !dt
        ? (ic(e, t, n), Ul(e, t, n))
        : (De && a && Yr(t), (t.flags |= 1), xt(e, t, l, n), t.child)
    );
  }
  function Vs(e, t, l, a, n, u) {
    return (
      Ca(t),
      (t.updateQueue = null),
      (l = ko(t, a, l, n)),
      Jo(e),
      (a = uc()),
      e !== null && !dt
        ? (ic(e, t, u), Ul(e, t, u))
        : (De && a && Yr(t), (t.flags |= 1), xt(e, t, l, u), t.child)
    );
  }
  function Ks(e, t, l, a, n) {
    if ((Ca(t), t.stateNode === null)) {
      var u = nn,
        r = l.contextType;
      typeof r == "object" && r !== null && (u = Et(r)),
        (u = new l(a, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Ec),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Fr(t),
        (r = l.contextType),
        (u.context = typeof r == "object" && r !== null ? Et(r) : nn),
        (u.state = t.memoizedState),
        (r = l.getDerivedStateFromProps),
        typeof r == "function" && (Sc(t, l, r, a), (u.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((r = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          r !== u.state && Ec.enqueueReplaceState(u, u.state, null),
          lu(t, a, u, n),
          tu(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0);
    } else if (e === null) {
      u = t.stateNode;
      var s = t.memoizedProps,
        h = Ya(l, s);
      u.props = h;
      var D = u.context,
        C = l.contextType;
      (r = nn), typeof C == "object" && C !== null && (r = Et(C));
      var B = l.getDerivedStateFromProps;
      (C =
        typeof B == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (s = t.pendingProps !== s),
        C ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((s || D !== r) && Us(t, u, a, r)),
        (Fl = !1);
      var _ = t.memoizedState;
      (u.state = _),
        lu(t, a, u, n),
        tu(),
        (D = t.memoizedState),
        s || _ !== D || Fl
          ? (typeof B == "function" && (Sc(t, l, B, a), (D = t.memoizedState)),
            (h = Fl || Ns(t, l, h, a, _, D, r))
              ? (C ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = D)),
            (u.props = a),
            (u.state = D),
            (u.context = r),
            (a = h))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (u = t.stateNode),
        $r(e, t),
        (r = t.memoizedProps),
        (C = Ya(l, r)),
        (u.props = C),
        (B = t.pendingProps),
        (_ = u.context),
        (D = l.contextType),
        (h = nn),
        typeof D == "object" && D !== null && (h = Et(D)),
        (s = l.getDerivedStateFromProps),
        (D =
          typeof s == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((r !== B || _ !== h) && Us(t, u, a, h)),
        (Fl = !1),
        (_ = t.memoizedState),
        (u.state = _),
        lu(t, a, u, n),
        tu();
      var N = t.memoizedState;
      r !== B ||
      _ !== N ||
      Fl ||
      (e !== null && e.dependencies !== null && ei(e.dependencies))
        ? (typeof s == "function" && (Sc(t, l, s, a), (N = t.memoizedState)),
          (C =
            Fl ||
            Ns(t, l, C, a, _, N, h) ||
            (e !== null && e.dependencies !== null && ei(e.dependencies)))
            ? (D ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, N, h),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, N, h)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (r === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (r === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = N)),
          (u.props = a),
          (u.state = N),
          (u.context = h),
          (a = C))
        : (typeof u.componentDidUpdate != "function" ||
            (r === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (r === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      bi(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = Ba(t, e.child, null, n)),
              (t.child = Ba(t, null, l, n)))
            : xt(e, t, l, n),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = Ul(e, t, n)),
      e
    );
  }
  function Js(e, t, l, a) {
    return Na(), (t.flags |= 256), xt(e, t, l, a), t.child;
  }
  var Mc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Dc(e) {
    return { baseLanes: e, cachePool: wo() };
  }
  function Ac(e, t, l) {
    return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= Vt), e;
  }
  function ks(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      r;
    if (
      ((r = u) ||
        (r =
          e !== null && e.memoizedState === null ? !1 : (rt.current & 2) !== 0),
      r && ((n = !0), (t.flags &= -129)),
      (r = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (De) {
        if (
          (n ? Pl(t) : ea(),
          (e = ke)
            ? ((e = lh(e, ll)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Kl !== null ? { id: gl, overflow: pl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Ao(e)),
                (l.return = t),
                (t.child = l),
                (St = t),
                (ke = null)))
            : (e = null),
          e === null)
        )
          throw kl(t);
        return of(e) ? (t.lanes = 32) : (t.lanes = 536870912), null;
      }
      var s = a.children;
      return (
        (a = a.fallback),
        n
          ? (ea(),
            (n = t.mode),
            (s = Si({ mode: "hidden", children: s }, n)),
            (a = Oa(a, n, l, null)),
            (s.return = t),
            (a.return = t),
            (s.sibling = a),
            (t.child = s),
            (a = t.child),
            (a.memoizedState = Dc(l)),
            (a.childLanes = Ac(e, r, l)),
            (t.memoizedState = Mc),
            ru(null, a))
          : (Pl(t), _c(t, s))
      );
    }
    var h = e.memoizedState;
    if (h !== null && ((s = h.dehydrated), s !== null)) {
      if (u)
        t.flags & 256
          ? (Pl(t), (t.flags &= -257), (t = Rc(e, t, l)))
          : t.memoizedState !== null
            ? (ea(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (ea(),
              (s = a.fallback),
              (n = t.mode),
              (a = Si({ mode: "visible", children: a.children }, n)),
              (s = Oa(s, n, l, null)),
              (s.flags |= 2),
              (a.return = t),
              (s.return = t),
              (a.sibling = s),
              (t.child = a),
              Ba(t, e.child, null, l),
              (a = t.child),
              (a.memoizedState = Dc(l)),
              (a.childLanes = Ac(e, r, l)),
              (t.memoizedState = Mc),
              (t = ru(null, a)));
      else if ((Pl(t), of(s))) {
        if (((r = s.nextSibling && s.nextSibling.dataset), r)) var D = r.dgst;
        (r = D),
          (a = Error(f(419))),
          (a.stack = ""),
          (a.digest = r),
          Wn({ value: a, source: null, stack: null }),
          (t = Rc(e, t, l));
      } else if (
        (dt || fn(e, t, l, !1), (r = (l & e.childLanes) !== 0), dt || r)
      ) {
        if (
          ((r = Ze),
          r !== null && ((a = O(r, l)), a !== 0 && a !== h.retryLane))
        )
          throw ((h.retryLane = a), Ra(e, a), wt(r, e, a), Tc);
        ff(s) || Ri(), (t = Rc(e, t, l));
      } else
        ff(s)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = h.treeContext),
            (ke = nl(s.nextSibling)),
            (St = t),
            (De = !0),
            (Jl = null),
            (ll = !1),
            e !== null && Oo(t, e),
            (t = _c(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (ea(),
        (s = a.fallback),
        (n = t.mode),
        (h = e.child),
        (D = h.sibling),
        (a = Dl(h, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = h.subtreeFlags & 65011712),
        D !== null ? (s = Dl(D, s)) : ((s = Oa(s, n, l, null)), (s.flags |= 2)),
        (s.return = t),
        (a.return = t),
        (a.sibling = s),
        (t.child = a),
        ru(null, a),
        (a = t.child),
        (s = e.child.memoizedState),
        s === null
          ? (s = Dc(l))
          : ((n = s.cachePool),
            n !== null
              ? ((h = ot._currentValue),
                (n = n.parent !== h ? { parent: h, pool: h } : n))
              : (n = wo()),
            (s = { baseLanes: s.baseLanes | l, cachePool: n })),
        (a.memoizedState = s),
        (a.childLanes = Ac(e, r, l)),
        (t.memoizedState = Mc),
        ru(e.child, a))
      : (Pl(t),
        (l = e.child),
        (e = l.sibling),
        (l = Dl(l, { mode: "visible", children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((r = t.deletions),
          r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function _c(e, t) {
    return (
      (t = Si({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Si(e, t) {
    return (e = Gt(22, e, null, t)), (e.lanes = 0), e;
  }
  function Rc(e, t, l) {
    return (
      Ba(t, e.child, null, l),
      (e = _c(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ws(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Zr(e.return, t, l);
  }
  function Oc(e, t, l, a, n, u) {
    var r = e.memoizedState;
    r === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
          treeForkCount: u,
        })
      : ((r.isBackwards = t),
        (r.rendering = null),
        (r.renderingStartTime = 0),
        (r.last = a),
        (r.tail = l),
        (r.tailMode = n),
        (r.treeForkCount = u));
  }
  function Fs(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var r = rt.current,
      s = (r & 2) !== 0;
    if (
      (s ? ((r = (r & 1) | 2), (t.flags |= 128)) : (r &= 1),
      X(rt, r),
      xt(e, t, a, l),
      (a = De ? kn : 0),
      !s && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ws(e, l, t);
        else if (e.tag === 19) Ws(e, l, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    switch (n) {
      case "forwards":
        for (l = t.child, n = null; l !== null; )
          (e = l.alternate),
            e !== null && ci(e) === null && (n = l),
            (l = l.sibling);
        (l = n),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          Oc(t, !1, n, l, u, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && ci(e) === null)) {
            t.child = n;
            break;
          }
          (e = n.sibling), (n.sibling = l), (l = n), (n = e);
        }
        Oc(t, !0, l, null, u, a);
        break;
      case "together":
        Oc(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ul(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (aa |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((fn(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(f(153));
    if (t.child !== null) {
      for (
        e = t.child, l = Dl(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (l = l.sibling = Dl(e, e.pendingProps)),
          (l.return = t);
      l.sibling = null;
    }
    return t.child;
  }
  function Nc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && ei(e)));
  }
  function Xm(e, t, l) {
    switch (t.tag) {
      case 3:
        ft(t, t.stateNode.containerInfo),
          Wl(t, ot, e.memoizedState.cache),
          Na();
        break;
      case 27:
      case 5:
        pa(t);
        break;
      case 4:
        ft(t, t.stateNode.containerInfo);
        break;
      case 10:
        Wl(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return (t.flags |= 128), lc(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (Pl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? ks(e, t, l)
              : (Pl(t), (e = Ul(e, t, l)), e !== null ? e.sibling : null);
        Pl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (fn(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return Fs(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          X(rt, rt.current),
          a)
        )
          break;
        return null;
      case 22:
        return (t.lanes = 0), Xs(e, t, l, t.pendingProps);
      case 24:
        Wl(t, ot, e.memoizedState.cache);
    }
    return Ul(e, t, l);
  }
  function $s(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) dt = !0;
      else {
        if (!Nc(e, l) && (t.flags & 128) === 0) return (dt = !1), Xm(e, t, l);
        dt = (e.flags & 131072) !== 0;
      }
    else (dt = !1), De && (t.flags & 1048576) !== 0 && Ro(t, kn, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Ha(t.elementType)), (t.type = e), typeof e == "function"))
            wr(e)
              ? ((a = Ya(e, a)), (t.tag = 1), (t = Ks(null, t, e, a, l)))
              : ((t.tag = 0), (t = zc(null, t, e, a, l)));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === je) {
                (t.tag = 11), (t = Ys(null, t, e, a, l));
                break e;
              } else if (n === A) {
                (t.tag = 14), (t = qs(null, t, e, a, l));
                break e;
              }
            }
            throw ((t = Fe(e) || e), Error(f(306, t, "")));
          }
        }
        return t;
      case 0:
        return zc(e, t, t.type, t.pendingProps, l);
      case 1:
        return (a = t.type), (n = Ya(a, t.pendingProps)), Ks(e, t, a, n, l);
      case 3:
        e: {
          if ((ft(t, t.stateNode.containerInfo), e === null))
            throw Error(f(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          (n = u.element), $r(e, t), lu(t, a, null, l);
          var r = t.memoizedState;
          if (
            ((a = r.cache),
            Wl(t, ot, a),
            a !== u.cache && Vr(t, [ot], l, !0),
            tu(),
            (a = r.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: r.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Js(e, t, a, l);
              break e;
            } else if (a !== n) {
              (n = Pt(Error(f(424)), t)), Wn(n), (t = Js(e, t, a, l));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                ke = nl(e.firstChild),
                  St = t,
                  De = !0,
                  Jl = null,
                  ll = !0,
                  l = Xo(t, null, a, l),
                  t.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((Na(), a === n)) {
              t = Ul(e, t, l);
              break e;
            }
            xt(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          bi(e, t),
          e === null
            ? (l = ch(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : De ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = wi(fe.current).createElement(l)),
                (a[K] = t),
                (a[V] = e),
                Tt(a, l, e),
                tt(a),
                (t.stateNode = a))
            : (t.memoizedState = ch(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          pa(t),
          e === null &&
            De &&
            ((a = t.stateNode = uh(t.type, t.pendingProps, fe.current)),
            (St = t),
            (ll = !0),
            (n = ke),
            ca(t.type) ? ((sf = n), (ke = nl(a.firstChild))) : (ke = n)),
          xt(e, t, t.pendingProps.children, l),
          bi(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            De &&
            ((n = a = ke) &&
              ((a = pv(a, t.type, t.pendingProps, ll)),
              a !== null
                ? ((t.stateNode = a),
                  (St = t),
                  (ke = nl(a.firstChild)),
                  (ll = !1),
                  (n = !0))
                : (n = !1)),
            n || kl(t)),
          pa(t),
          (n = t.type),
          (u = t.pendingProps),
          (r = e !== null ? e.memoizedProps : null),
          (a = u.children),
          uf(n, u) ? (a = null) : r !== null && uf(n, r) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = nc(e, t, Cm, null, null, l)), (xu._currentValue = n)),
          bi(e, t),
          xt(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            De &&
            ((e = l = ke) &&
              ((l = bv(l, t.pendingProps, ll)),
              l !== null
                ? ((t.stateNode = l), (St = t), (ke = null), (e = !0))
                : (e = !1)),
            e || kl(t)),
          null
        );
      case 13:
        return ks(e, t, l);
      case 4:
        return (
          ft(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Ba(t, null, a, l)) : xt(e, t, a, l),
          t.child
        );
      case 11:
        return Ys(e, t, t.type, t.pendingProps, l);
      case 7:
        return xt(e, t, t.pendingProps, l), t.child;
      case 8:
        return xt(e, t, t.pendingProps.children, l), t.child;
      case 12:
        return xt(e, t, t.pendingProps.children, l), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          Wl(t, t.type, a.value),
          xt(e, t, a.children, l),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Ca(t),
          (n = Et(n)),
          (a = a(n)),
          (t.flags |= 1),
          xt(e, t, a, l),
          t.child
        );
      case 14:
        return qs(e, t, t.type, t.pendingProps, l);
      case 15:
        return Gs(e, t, t.type, t.pendingProps, l);
      case 19:
        return Fs(e, t, l);
      case 31:
        return Gm(e, t, l);
      case 22:
        return Xs(e, t, l, t.pendingProps);
      case 24:
        return (
          Ca(t),
          (a = Et(ot)),
          e === null
            ? ((n = kr()),
              n === null &&
                ((n = Ze),
                (u = Kr()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (t.memoizedState = { parent: a, cache: n }),
              Fr(t),
              Wl(t, ot, n))
            : ((e.lanes & l) !== 0 && ($r(e, t), lu(t, null, null, l), tu()),
              (n = e.memoizedState),
              (u = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  Wl(t, ot, a))
                : ((a = u.cache),
                  Wl(t, ot, a),
                  a !== n.cache && Vr(t, [ot], l, !0))),
          xt(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(f(156, t.tag));
  }
  function Cl(e) {
    e.flags |= 4;
  }
  function Uc(e, t, l, a, n) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (n & 335544128) === n))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (zd()) e.flags |= 8192;
        else throw ((wa = ni), Wr);
    } else e.flags &= -16777217;
  }
  function Is(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !hh(t)))
      if (zd()) e.flags |= 8192;
      else throw ((wa = ni), Wr);
  }
  function Ei(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Ta() : 536870912), (e.lanes |= t), (En |= t));
  }
  function cu(e, t) {
    if (!De)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), (t = t.sibling);
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function We(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling);
    else
      for (n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling);
    return (e.subtreeFlags |= a), (e.childLanes = l), t;
  }
  function Qm(e, t, l) {
    var a = t.pendingProps;
    switch ((qr(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return We(t), null;
      case 1:
        return We(t), null;
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Rl(ot),
          Pe(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (cn(t)
              ? Cl(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Xr())),
          We(t),
          null
        );
      case 26:
        var n = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (Cl(t),
              u !== null ? (We(t), Is(t, u)) : (We(t), Uc(t, n, null, a, l)))
            : u
              ? u !== e.memoizedState
                ? (Cl(t), We(t), Is(t, u))
                : (We(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== a && Cl(t),
                We(t),
                Uc(t, n, e, a, l)),
          null
        );
      case 27:
        if (
          (Va(t),
          (l = fe.current),
          (n = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== a && Cl(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(f(166));
            return We(t), null;
          }
          (e = F.current),
            cn(t) ? No(t) : ((e = uh(n, a, l)), (t.stateNode = e), Cl(t));
        }
        return We(t), null;
      case 5:
        if ((Va(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Cl(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(f(166));
            return We(t), null;
          }
          if (((u = F.current), cn(t))) No(t);
          else {
            var r = wi(fe.current);
            switch (u) {
              case 1:
                u = r.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = r.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = r.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    (u = r.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild));
                    break;
                  case "select":
                    (u =
                      typeof a.is == "string"
                        ? r.createElement("select", { is: a.is })
                        : r.createElement("select")),
                      a.multiple
                        ? (u.multiple = !0)
                        : a.size && (u.size = a.size);
                    break;
                  default:
                    u =
                      typeof a.is == "string"
                        ? r.createElement(n, { is: a.is })
                        : r.createElement(n);
                }
            }
            (u[K] = t), (u[V] = a);
            e: for (r = t.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6) u.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                (r.child.return = r), (r = r.child);
                continue;
              }
              if (r === t) break e;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === t) break e;
                r = r.return;
              }
              (r.sibling.return = r.return), (r = r.sibling);
            }
            t.stateNode = u;
            e: switch ((Tt(u, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && Cl(t);
          }
        }
        return (
          We(t),
          Uc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && Cl(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(f(166));
          if (((e = fe.current), cn(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (n = St),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (e[K] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                kd(e.nodeValue, l)
              )),
              e || kl(t, !0);
          } else (e = wi(e).createTextNode(a)), (e[K] = t), (t.stateNode = e);
        }
        return We(t), null;
      case 31:
        if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = cn(t)), l !== null)) {
            if (e === null) {
              if (!a) throw Error(f(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(f(557));
              e[K] = t;
            } else
              Na(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            We(t), (e = !1);
          } else
            (l = Xr()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (e = !0);
          if (!e) return t.flags & 256 ? (Qt(t), t) : (Qt(t), null);
          if ((t.flags & 128) !== 0) throw Error(f(558));
        }
        return We(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = cn(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(f(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(f(317));
              n[K] = t;
            } else
              Na(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            We(t), (n = !1);
          } else
            (n = Xr()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return t.flags & 256 ? (Qt(t), t) : (Qt(t), null);
        }
        return (
          Qt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = l), t)
            : ((l = a !== null),
              (e = e !== null && e.memoizedState !== null),
              l &&
                ((a = t.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)),
              l !== e && l && (t.child.flags |= 8192),
              Ei(t, t.updateQueue),
              We(t),
              null)
        );
      case 4:
        return Pe(), e === null && ef(t.stateNode.containerInfo), We(t), null;
      case 10:
        return Rl(t.type), We(t), null;
      case 19:
        if ((j(rt), (a = t.memoizedState), a === null)) return We(t), null;
        if (((n = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) cu(a, !1);
          else {
            if (at !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = ci(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      cu(a, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Ei(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;

                  )
                    Do(l, e), (l = l.sibling);
                  return (
                    X(rt, (rt.current & 1) | 2),
                    De && Al(t, a.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            a.tail !== null &&
              it() > Di &&
              ((t.flags |= 128), (n = !0), cu(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = ci(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Ei(t, e),
                cu(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !u.alternate &&
                  !De)
              )
                return We(t), null;
            } else
              2 * it() - a.renderingStartTime > Di &&
                l !== 536870912 &&
                ((t.flags |= 128), (n = !0), cu(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = a.last),
              e !== null ? (e.sibling = u) : (t.child = u),
              (a.last = u));
        }
        return a.tail !== null
          ? ((e = a.tail),
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = it()),
            (e.sibling = null),
            (l = rt.current),
            X(rt, n ? (l & 1) | 2 : l & 1),
            De && Al(t, a.treeForkCount),
            e)
          : (We(t), null);
      case 22:
      case 23:
        return (
          Qt(t),
          tc(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (We(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : We(t),
          (l = t.updateQueue),
          l !== null && Ei(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && j(ja),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Rl(ot),
          We(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function Zm(e, t) {
    switch ((qr(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Rl(ot),
          Pe(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Va(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ((Qt(t), t.alternate === null)) throw Error(f(340));
          Na();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Qt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(f(340));
          Na();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return j(rt), null;
      case 4:
        return Pe(), null;
      case 10:
        return Rl(t.type), null;
      case 22:
      case 23:
        return (
          Qt(t),
          tc(),
          e !== null && j(ja),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return Rl(ot), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ps(e, t) {
    switch ((qr(t), t.tag)) {
      case 3:
        Rl(ot), Pe();
        break;
      case 26:
      case 27:
      case 5:
        Va(t);
        break;
      case 4:
        Pe();
        break;
      case 31:
        t.memoizedState !== null && Qt(t);
        break;
      case 13:
        Qt(t);
        break;
      case 19:
        j(rt);
        break;
      case 10:
        Rl(t.type);
        break;
      case 22:
      case 23:
        Qt(t), tc(), e !== null && j(ja);
        break;
      case 24:
        Rl(ot);
    }
  }
  function fu(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var u = l.create,
              r = l.inst;
            (a = u()), (r.destroy = a);
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (s) {
      Le(t, t.return, s);
    }
  }
  function ta(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var r = a.inst,
              s = r.destroy;
            if (s !== void 0) {
              (r.destroy = void 0), (n = t);
              var h = l,
                D = s;
              try {
                D();
              } catch (C) {
                Le(n, h, C);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (C) {
      Le(t, t.return, C);
    }
  }
  function ed(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Zo(t, l);
      } catch (a) {
        Le(e, e.return, a);
      }
    }
  }
  function td(e, t, l) {
    (l.props = Ya(e.type, e.memoizedProps)), (l.state = e.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      Le(e, t, a);
    }
  }
  function ou(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      Le(e, t, n);
    }
  }
  function bl(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          Le(e, t, n);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          Le(e, t, n);
        }
      else l.current = null;
  }
  function ld(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      Le(e, e.return, n);
    }
  }
  function Cc(e, t, l) {
    try {
      var a = e.stateNode;
      dv(a, e.type, l, t), (a[V] = t);
    } catch (n) {
      Le(e, e.return, n);
    }
  }
  function ad(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && ca(e.type)) ||
      e.tag === 4
    );
  }
  function jc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ad(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && ca(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Hc(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(e, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = zl));
    else if (
      a !== 4 &&
      (a === 27 && ca(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Hc(e, t, l), e = e.sibling; e !== null; )
        Hc(e, t, l), (e = e.sibling);
  }
  function xi(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (
      a !== 4 &&
      (a === 27 && ca(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (xi(e, t, l), e = e.sibling; e !== null; )
        xi(e, t, l), (e = e.sibling);
  }
  function nd(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      Tt(t, a, l), (t[K] = e), (t[V] = l);
    } catch (u) {
      Le(e, e.return, u);
    }
  }
  var jl = !1,
    ht = !1,
    wc = !1,
    ud = typeof WeakSet == "function" ? WeakSet : Set,
    pt = null;
  function Vm(e, t) {
    if (((e = e.containerInfo), (af = Qi), (e = go(e)), Rr(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch (re) {
              l = null;
              break e;
            }
            var r = 0,
              s = -1,
              h = -1,
              D = 0,
              C = 0,
              B = e,
              _ = null;
            t: for (;;) {
              for (
                var N;
                B !== l || (n !== 0 && B.nodeType !== 3) || (s = r + n),
                  B !== u || (a !== 0 && B.nodeType !== 3) || (h = r + a),
                  B.nodeType === 3 && (r += B.nodeValue.length),
                  (N = B.firstChild) !== null;

              )
                (_ = B), (B = N);
              for (;;) {
                if (B === e) break t;
                if (
                  (_ === l && ++D === n && (s = r),
                  _ === u && ++C === a && (h = r),
                  (N = B.nextSibling) !== null)
                )
                  break;
                (B = _), (_ = B.parentNode);
              }
              B = N;
            }
            l = s === -1 || h === -1 ? null : { start: s, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      nf = { focusedElem: e, selectionRange: l }, Qi = !1, pt = t;
      pt !== null;

    )
      if (
        ((t = pt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (pt = e);
      else
        for (; pt !== null; ) {
          switch (((t = pt), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (l = 0; l < e.length; l++)
                  (n = e[l]), (n.ref.impl = n.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                (e = void 0),
                  (l = t),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode);
                try {
                  var I = Ya(l.type, n);
                  (e = a.getSnapshotBeforeUpdate(I, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = e);
                } catch (re) {
                  Le(l, l.return, re);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  cf(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      cf(e);
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
              if ((e & 1024) !== 0) throw Error(f(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (pt = e);
            break;
          }
          pt = t.return;
        }
  }
  function id(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        wl(e, l), a & 4 && fu(5, l);
        break;
      case 1:
        if ((wl(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (r) {
              Le(l, l.return, r);
            }
          else {
            var n = Ya(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (r) {
              Le(l, l.return, r);
            }
          }
        a & 64 && ed(l), a & 512 && ou(l, l.return);
        break;
      case 3:
        if ((wl(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Zo(e, t);
          } catch (r) {
            Le(l, l.return, r);
          }
        }
        break;
      case 27:
        t === null && a & 4 && nd(l);
      case 26:
      case 5:
        wl(e, l), t === null && a & 4 && ld(l), a & 512 && ou(l, l.return);
        break;
      case 12:
        wl(e, l);
        break;
      case 31:
        wl(e, l), a & 4 && fd(e, l);
        break;
      case 13:
        wl(e, l),
          a & 4 && od(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = ev.bind(null, l)), Sv(e, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || jl), !a)) {
          (t = (t !== null && t.memoizedState !== null) || ht), (n = jl);
          var u = ht;
          (jl = a),
            (ht = t) && !u ? Bl(e, l, (l.subtreeFlags & 8772) !== 0) : wl(e, l),
            (jl = n),
            (ht = u);
        }
        break;
      case 30:
        break;
      default:
        wl(e, l);
    }
  }
  function rd(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), rd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Ve(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var $e = null,
    Ut = !1;
  function Hl(e, t, l) {
    for (l = l.child; l !== null; ) cd(e, t, l), (l = l.sibling);
  }
  function cd(e, t, l) {
    if (zt && typeof zt.onCommitFiberUnmount == "function")
      try {
        zt.onCommitFiberUnmount(Rt, l);
      } catch (u) {}
    switch (l.tag) {
      case 26:
        ht || bl(l, t),
          Hl(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        ht || bl(l, t);
        var a = $e,
          n = Ut;
        ca(l.type) && (($e = l.stateNode), (Ut = !1)),
          Hl(e, t, l),
          bu(l.stateNode),
          ($e = a),
          (Ut = n);
        break;
      case 5:
        ht || bl(l, t);
      case 6:
        if (
          ((a = $e),
          (n = Ut),
          ($e = null),
          Hl(e, t, l),
          ($e = a),
          (Ut = n),
          $e !== null)
        )
          if (Ut)
            try {
              ($e.nodeType === 9
                ? $e.body
                : $e.nodeName === "HTML"
                  ? $e.ownerDocument.body
                  : $e
              ).removeChild(l.stateNode);
            } catch (u) {
              Le(l, t, u);
            }
          else
            try {
              $e.removeChild(l.stateNode);
            } catch (u) {
              Le(l, t, u);
            }
        break;
      case 18:
        $e !== null &&
          (Ut
            ? ((e = $e),
              eh(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                l.stateNode,
              ),
              Rn(e))
            : eh($e, l.stateNode));
        break;
      case 4:
        (a = $e),
          (n = Ut),
          ($e = l.stateNode.containerInfo),
          (Ut = !0),
          Hl(e, t, l),
          ($e = a),
          (Ut = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ta(2, l, t), ht || ta(4, l, t), Hl(e, t, l);
        break;
      case 1:
        ht ||
          (bl(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && td(l, t, a)),
          Hl(e, t, l);
        break;
      case 21:
        Hl(e, t, l);
        break;
      case 22:
        (ht = (a = ht) || l.memoizedState !== null), Hl(e, t, l), (ht = a);
        break;
      default:
        Hl(e, t, l);
    }
  }
  function fd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Rn(e);
      } catch (l) {
        Le(t, t.return, l);
      }
    }
  }
  function od(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Rn(e);
      } catch (l) {
        Le(t, t.return, l);
      }
  }
  function Km(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new ud()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new ud()),
          t
        );
      default:
        throw Error(f(435, e.tag));
    }
  }
  function Ti(e, t) {
    var l = Km(e);
    t.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = tv.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function Ct(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = e,
          r = t,
          s = r;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (ca(s.type)) {
                ($e = s.stateNode), (Ut = !1);
                break e;
              }
              break;
            case 5:
              ($e = s.stateNode), (Ut = !1);
              break e;
            case 3:
            case 4:
              ($e = s.stateNode.containerInfo), (Ut = !0);
              break e;
          }
          s = s.return;
        }
        if ($e === null) throw Error(f(160));
        cd(u, r, n),
          ($e = null),
          (Ut = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null);
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) sd(t, e), (t = t.sibling);
  }
  var dl = null;
  function sd(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ct(t, e),
          jt(e),
          a & 4 && (ta(3, e, e.return), fu(3, e), ta(5, e, e.return));
        break;
      case 1:
        Ct(t, e),
          jt(e),
          a & 512 && (ht || l === null || bl(l, l.return)),
          a & 64 &&
            jl &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var n = dl;
        if (
          (Ct(t, e),
          jt(e),
          a & 512 && (ht || l === null || bl(l, l.return)),
          a & 4)
        ) {
          var u = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  (a = e.type),
                    (l = e.memoizedProps),
                    (n = n.ownerDocument || n);
                  t: switch (a) {
                    case "title":
                      (u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[pe] ||
                          u[K] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title"),
                          )),
                        Tt(u, a, l),
                        (u[K] = e),
                        tt(u),
                        (a = u);
                      break e;
                    case "link":
                      var r = sh("link", "href", n).get(a + (l.href || ""));
                      if (r) {
                        for (var s = 0; s < r.length; s++)
                          if (
                            ((u = r[s]),
                            u.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              u.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              u.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              u.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            r.splice(s, 1);
                            break t;
                          }
                      }
                      (u = n.createElement(a)),
                        Tt(u, a, l),
                        n.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (r = sh("meta", "content", n).get(
                          a + (l.content || ""),
                        ))
                      ) {
                        for (s = 0; s < r.length; s++)
                          if (
                            ((u = r[s]),
                            u.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              u.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              u.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            r.splice(s, 1);
                            break t;
                          }
                      }
                      (u = n.createElement(a)),
                        Tt(u, a, l),
                        n.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  (u[K] = e), tt(u), (a = u);
                }
                e.stateNode = a;
              } else dh(n, e.type, e.stateNode);
            else e.stateNode = oh(n, a, e.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                a === null
                  ? dh(n, e.type, e.stateNode)
                  : oh(n, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                Cc(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        Ct(t, e),
          jt(e),
          a & 512 && (ht || l === null || bl(l, l.return)),
          l !== null && a & 4 && Cc(e, e.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (Ct(t, e),
          jt(e),
          a & 512 && (ht || l === null || bl(l, l.return)),
          e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            $a(n, "");
          } catch (I) {
            Le(e, e.return, I);
          }
        }
        a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), Cc(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (wc = !0);
        break;
      case 6:
        if ((Ct(t, e), jt(e), a & 4)) {
          if (e.stateNode === null) throw Error(f(162));
          (a = e.memoizedProps), (l = e.stateNode);
          try {
            l.nodeValue = a;
          } catch (I) {
            Le(e, e.return, I);
          }
        }
        break;
      case 3:
        if (
          ((Yi = null),
          (n = dl),
          (dl = Bi(t.containerInfo)),
          Ct(t, e),
          (dl = n),
          jt(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Rn(t.containerInfo);
          } catch (I) {
            Le(e, e.return, I);
          }
        wc && ((wc = !1), dd(e));
        break;
      case 4:
        (a = dl),
          (dl = Bi(e.stateNode.containerInfo)),
          Ct(t, e),
          jt(e),
          (dl = a);
        break;
      case 12:
        Ct(t, e), jt(e);
        break;
      case 31:
        Ct(t, e),
          jt(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Ti(e, a)));
        break;
      case 13:
        Ct(t, e),
          jt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Mi = it()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Ti(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null,
          D = jl,
          C = ht;
        if (
          ((jl = D || n),
          (ht = C || h),
          Ct(t, e),
          (ht = C),
          (jl = D),
          jt(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (l === null || h || jl || ht || qa(e)),
              l = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                h = l = t;
                try {
                  if (((u = h.stateNode), n))
                    (r = u.style),
                      typeof r.setProperty == "function"
                        ? r.setProperty("display", "none", "important")
                        : (r.display = "none");
                  else {
                    s = h.stateNode;
                    var B = h.memoizedProps.style,
                      _ =
                        B != null && B.hasOwnProperty("display")
                          ? B.display
                          : null;
                    s.style.display =
                      _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (I) {
                  Le(h, h.return, I);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                h = t;
                try {
                  h.stateNode.nodeValue = n ? "" : h.memoizedProps;
                } catch (I) {
                  Le(h, h.return, I);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                h = t;
                try {
                  var N = h.stateNode;
                  n ? th(N, !0) : th(h.stateNode, !1);
                } catch (I) {
                  Le(h, h.return, I);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), (t = t.return);
            }
            l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Ti(e, l))));
        break;
      case 19:
        Ct(t, e),
          jt(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Ti(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ct(t, e), jt(e);
    }
  }
  function jt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (ad(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = jc(e);
            xi(e, u, n);
            break;
          case 5:
            var r = l.stateNode;
            l.flags & 32 && ($a(r, ""), (l.flags &= -33));
            var s = jc(e);
            xi(e, s, r);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo,
              D = jc(e);
            Hc(e, D, h);
            break;
          default:
            throw Error(f(161));
        }
      } catch (C) {
        Le(e, e.return, C);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function dd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        dd(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function wl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) id(e, t.alternate, t), (t = t.sibling);
  }
  function qa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ta(4, t, t.return), qa(t);
          break;
        case 1:
          bl(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && td(t, t.return, l),
            qa(t);
          break;
        case 27:
          bu(t.stateNode);
        case 26:
        case 5:
          bl(t, t.return), qa(t);
          break;
        case 22:
          t.memoizedState === null && qa(t);
          break;
        case 30:
          qa(t);
          break;
        default:
          qa(t);
      }
      e = e.sibling;
    }
  }
  function Bl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        u = t,
        r = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Bl(n, u, l), fu(4, u);
          break;
        case 1:
          if (
            (Bl(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (D) {
              Le(a, a.return, D);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var s = a.stateNode;
            try {
              var h = n.shared.hiddenCallbacks;
              if (h !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < h.length; n++)
                  Qo(h[n], s);
            } catch (D) {
              Le(a, a.return, D);
            }
          }
          l && r & 64 && ed(u), ou(u, u.return);
          break;
        case 27:
          nd(u);
        case 26:
        case 5:
          Bl(n, u, l), l && a === null && r & 4 && ld(u), ou(u, u.return);
          break;
        case 12:
          Bl(n, u, l);
          break;
        case 31:
          Bl(n, u, l), l && r & 4 && fd(n, u);
          break;
        case 13:
          Bl(n, u, l), l && r & 4 && od(n, u);
          break;
        case 22:
          u.memoizedState === null && Bl(n, u, l), ou(u, u.return);
          break;
        case 30:
          break;
        default:
          Bl(n, u, l);
      }
      t = t.sibling;
    }
  }
  function Bc(e, t) {
    var l = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && Fn(l));
  }
  function Lc(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Fn(e));
  }
  function hl(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) hd(e, t, l, a), (t = t.sibling);
  }
  function hd(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        hl(e, t, l, a), n & 2048 && fu(9, t);
        break;
      case 1:
        hl(e, t, l, a);
        break;
      case 3:
        hl(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Fn(e)));
        break;
      case 12:
        if (n & 2048) {
          hl(e, t, l, a), (e = t.stateNode);
          try {
            var u = t.memoizedProps,
              r = u.id,
              s = u.onPostCommit;
            typeof s == "function" &&
              s(
                r,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (h) {
            Le(t, t.return, h);
          }
        } else hl(e, t, l, a);
        break;
      case 31:
        hl(e, t, l, a);
        break;
      case 13:
        hl(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        (u = t.stateNode),
          (r = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? hl(e, t, l, a)
              : su(e, t)
            : u._visibility & 2
              ? hl(e, t, l, a)
              : ((u._visibility |= 2),
                pn(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && Bc(r, t);
        break;
      case 24:
        hl(e, t, l, a), n & 2048 && Lc(t.alternate, t);
        break;
      default:
        hl(e, t, l, a);
    }
  }
  function pn(e, t, l, a, n) {
    for (
      n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var u = e,
        r = t,
        s = l,
        h = a,
        D = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          pn(u, r, s, h, n), fu(8, r);
          break;
        case 23:
          break;
        case 22:
          var C = r.stateNode;
          r.memoizedState !== null
            ? C._visibility & 2
              ? pn(u, r, s, h, n)
              : su(u, r)
            : ((C._visibility |= 2), pn(u, r, s, h, n)),
            n && D & 2048 && Bc(r.alternate, r);
          break;
        case 24:
          pn(u, r, s, h, n), n && D & 2048 && Lc(r.alternate, r);
          break;
        default:
          pn(u, r, s, h, n);
      }
      t = t.sibling;
    }
  }
  function su(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            su(l, a), n & 2048 && Bc(a.alternate, a);
            break;
          case 24:
            su(l, a), n & 2048 && Lc(a.alternate, a);
            break;
          default:
            su(l, a);
        }
        t = t.sibling;
      }
  }
  var du = 8192;
  function bn(e, t, l) {
    if (e.subtreeFlags & du)
      for (e = e.child; e !== null; ) md(e, t, l), (e = e.sibling);
  }
  function md(e, t, l) {
    switch (e.tag) {
      case 26:
        bn(e, t, l),
          e.flags & du &&
            e.memoizedState !== null &&
            Uv(l, dl, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        bn(e, t, l);
        break;
      case 3:
      case 4:
        var a = dl;
        (dl = Bi(e.stateNode.containerInfo)), bn(e, t, l), (dl = a);
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = du), (du = 16777216), bn(e, t, l), (du = a))
            : bn(e, t, l));
        break;
      default:
        bn(e, t, l);
    }
  }
  function vd(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function hu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (pt = a), gd(a, e);
        }
      vd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) yd(e), (e = e.sibling);
  }
  function yd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        hu(e), e.flags & 2048 && ta(9, e, e.return);
        break;
      case 3:
        hu(e);
        break;
      case 12:
        hu(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), zi(e))
          : hu(e);
        break;
      default:
        hu(e);
    }
  }
  function zi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (pt = a), gd(a, e);
        }
      vd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          ta(8, t, t.return), zi(t);
          break;
        case 22:
          (l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), zi(t));
          break;
        default:
          zi(t);
      }
      e = e.sibling;
    }
  }
  function gd(e, t) {
    for (; pt !== null; ) {
      var l = pt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ta(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Fn(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (pt = a);
      else
        e: for (l = e; pt !== null; ) {
          a = pt;
          var n = a.sibling,
            u = a.return;
          if ((rd(a), a === l)) {
            pt = null;
            break e;
          }
          if (n !== null) {
            (n.return = u), (pt = n);
            break e;
          }
          pt = u;
        }
    }
  }
  var Jm = {
      getCacheForType: function (e) {
        var t = Et(ot),
          l = t.data.get(e);
        return l === void 0 && ((l = e()), t.data.set(e, l)), l;
      },
      cacheSignal: function () {
        return Et(ot).controller.signal;
      },
    },
    km = typeof WeakMap == "function" ? WeakMap : Map,
    Ce = 0,
    Ze = null,
    be = null,
    xe = 0,
    Be = 0,
    Zt = null,
    la = !1,
    Sn = !1,
    Yc = !1,
    Ll = 0,
    at = 0,
    aa = 0,
    Ga = 0,
    qc = 0,
    Vt = 0,
    En = 0,
    mu = null,
    Ht = null,
    Gc = !1,
    Mi = 0,
    pd = 0,
    Di = 1 / 0,
    Ai = null,
    na = null,
    gt = 0,
    ua = null,
    xn = null,
    Yl = 0,
    Xc = 0,
    Qc = null,
    bd = null,
    vu = 0,
    Zc = null;
  function Kt() {
    return (Ce & 2) !== 0 && xe !== 0 ? xe & -xe : U.T !== null ? Fc() : ae();
  }
  function Sd() {
    if (Vt === 0)
      if ((xe & 536870912) === 0 || De) {
        var e = Gl;
        (Gl <<= 1), (Gl & 3932160) === 0 && (Gl = 262144), (Vt = e);
      } else Vt = 536870912;
    return (e = Xt.current), e !== null && (e.flags |= 32), Vt;
  }
  function wt(e, t, l) {
    ((e === Ze && (Be === 2 || Be === 9)) || e.cancelPendingCommit !== null) &&
      (Tn(e, 0), ia(e, xe, Vt, !1)),
      za(e, l),
      ((Ce & 2) === 0 || e !== Ze) &&
        (e === Ze &&
          ((Ce & 2) === 0 && (Ga |= l), at === 4 && ia(e, xe, Vt, !1)),
        Sl(e));
  }
  function Ed(e, t, l) {
    if ((Ce & 6) !== 0) throw Error(f(327));
    var a = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || xa(e, t),
      n = a ? $m(e, t) : Kc(e, t, !0),
      u = a;
    do {
      if (n === 0) {
        Sn && !a && ia(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), u && !Wm(l))) {
          (n = Kc(e, t, !1)), (u = !1);
          continue;
        }
        if (n === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var r = 0;
          else
            (r = e.pendingLanes & -536870913),
              (r = r !== 0 ? r : r & 536870912 ? 536870912 : 0);
          if (r !== 0) {
            t = r;
            e: {
              var s = e;
              n = mu;
              var h = s.current.memoizedState.isDehydrated;
              if ((h && (Tn(s, r).flags |= 256), (r = Kc(s, r, !1)), r !== 2)) {
                if (Yc && !h) {
                  (s.errorRecoveryDisabledLanes |= u), (Ga |= u), (n = 4);
                  break e;
                }
                (u = Ht),
                  (Ht = n),
                  u !== null && (Ht === null ? (Ht = u) : Ht.push.apply(Ht, u));
              }
              n = r;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          Tn(e, 0), ia(e, t, 0, !0);
          break;
        }
        e: {
          switch (((a = e), (u = n), u)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ia(a, t, Vt, !la);
              break e;
            case 2:
              Ht = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((t & 62914560) === t && ((n = Mi + 300 - it()), 10 < n)) {
            if ((ia(a, t, Vt, !la), Ea(a, 0, !0) !== 0)) break e;
            (Yl = t),
              (a.timeoutHandle = Id(
                xd.bind(
                  null,
                  a,
                  l,
                  Ht,
                  Ai,
                  Gc,
                  t,
                  Vt,
                  Ga,
                  En,
                  la,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                n,
              ));
            break e;
          }
          xd(a, l, Ht, Ai, Gc, t, Vt, Ga, En, la, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Sl(e);
  }
  function xd(e, t, l, a, n, u, r, s, h, D, C, B, _, N) {
    if (
      ((e.timeoutHandle = -1),
      (B = t.subtreeFlags),
      B & 8192 || (B & 16785408) === 16785408)
    ) {
      (B = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: zl,
      }),
        md(t, u, B);
      var I =
        (u & 62914560) === u ? Mi - it() : (u & 4194048) === u ? pd - it() : 0;
      if (((I = Cv(B, I)), I !== null)) {
        (Yl = u),
          (e.cancelPendingCommit = I(
            Od.bind(null, e, t, u, l, a, n, r, s, h, C, B, null, _, N),
          )),
          ia(e, u, r, !D);
        return;
      }
    }
    Od(e, t, u, l, a, n, r, s, h);
  }
  function Wm(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!qt(u(), n)) return !1;
          } catch (r) {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        (l.return = t), (t = l);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function ia(e, t, l, a) {
    (t &= ~qc),
      (t &= ~Ga),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes);
    for (var n = t; 0 < n; ) {
      var u = 31 - Mt(n),
        r = 1 << u;
      (a[u] = -1), (n &= ~r);
    }
    l !== 0 && g(e, l, t);
  }
  function _i() {
    return (Ce & 6) === 0 ? (yu(0), !1) : !0;
  }
  function Vc() {
    if (be !== null) {
      if (Be === 0) var e = be.return;
      else (e = be), (_l = Ua = null), rc(e), (hn = null), (In = 0), (e = be);
      for (; e !== null; ) Ps(e.alternate, e), (e = e.return);
      be = null;
    }
  }
  function Tn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && ((e.timeoutHandle = -1), vv(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (Yl = 0),
      Vc(),
      (Ze = e),
      (be = l = Dl(e.current, null)),
      (xe = t),
      (Be = 0),
      (Zt = null),
      (la = !1),
      (Sn = xa(e, t)),
      (Yc = !1),
      (En = Vt = qc = Ga = aa = at = 0),
      (Ht = mu = null),
      (Gc = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - Mt(a),
          u = 1 << n;
        (t |= e[n]), (a &= ~u);
      }
    return (Ll = t), Wu(), l;
  }
  function Td(e, t) {
    (me = null),
      (U.H = iu),
      t === dn || t === ai
        ? ((t = Yo()), (Be = 3))
        : t === Wr
          ? ((t = Yo()), (Be = 4))
          : (Be =
              t === Tc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (Zt = t),
      be === null && ((at = 1), gi(e, Pt(t, e.current)));
  }
  function zd() {
    var e = Xt.current;
    return e === null
      ? !0
      : (xe & 4194048) === xe
        ? al === null
        : (xe & 62914560) === xe || (xe & 536870912) !== 0
          ? e === al
          : !1;
  }
  function Md() {
    var e = U.H;
    return (U.H = iu), e === null ? iu : e;
  }
  function Dd() {
    var e = U.A;
    return (U.A = Jm), e;
  }
  function Ri() {
    (at = 4),
      la || ((xe & 4194048) !== xe && Xt.current !== null) || (Sn = !0),
      ((aa & 134217727) === 0 && (Ga & 134217727) === 0) ||
        Ze === null ||
        ia(Ze, xe, Vt, !1);
  }
  function Kc(e, t, l) {
    var a = Ce;
    Ce |= 2;
    var n = Md(),
      u = Dd();
    (Ze !== e || xe !== t) && ((Ai = null), Tn(e, t)), (t = !1);
    var r = at;
    e: do
      try {
        if (Be !== 0 && be !== null) {
          var s = be,
            h = Zt;
          switch (Be) {
            case 8:
              Vc(), (r = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Xt.current === null && (t = !0);
              var D = Be;
              if (((Be = 0), (Zt = null), zn(e, s, h, D), l && Sn)) {
                r = 0;
                break e;
              }
              break;
            default:
              (D = Be), (Be = 0), (Zt = null), zn(e, s, h, D);
          }
        }
        Fm(), (r = at);
        break;
      } catch (C) {
        Td(e, C);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (_l = Ua = null),
      (Ce = a),
      (U.H = n),
      (U.A = u),
      be === null && ((Ze = null), (xe = 0), Wu()),
      r
    );
  }
  function Fm() {
    for (; be !== null; ) Ad(be);
  }
  function $m(e, t) {
    var l = Ce;
    Ce |= 2;
    var a = Md(),
      n = Dd();
    Ze !== e || xe !== t
      ? ((Ai = null), (Di = it() + 500), Tn(e, t))
      : (Sn = xa(e, t));
    e: do
      try {
        if (Be !== 0 && be !== null) {
          t = be;
          var u = Zt;
          t: switch (Be) {
            case 1:
              (Be = 0), (Zt = null), zn(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Bo(u)) {
                (Be = 0), (Zt = null), _d(t);
                break;
              }
              (t = function () {
                (Be !== 2 && Be !== 9) || Ze !== e || (Be = 7), Sl(e);
              }),
                u.then(t, t);
              break e;
            case 3:
              Be = 7;
              break e;
            case 4:
              Be = 5;
              break e;
            case 7:
              Bo(u)
                ? ((Be = 0), (Zt = null), _d(t))
                : ((Be = 0), (Zt = null), zn(e, t, u, 7));
              break;
            case 5:
              var r = null;
              switch (be.tag) {
                case 26:
                  r = be.memoizedState;
                case 5:
                case 27:
                  var s = be;
                  if (r ? hh(r) : s.stateNode.complete) {
                    (Be = 0), (Zt = null);
                    var h = s.sibling;
                    if (h !== null) be = h;
                    else {
                      var D = s.return;
                      D !== null ? ((be = D), Oi(D)) : (be = null);
                    }
                    break t;
                  }
              }
              (Be = 0), (Zt = null), zn(e, t, u, 5);
              break;
            case 6:
              (Be = 0), (Zt = null), zn(e, t, u, 6);
              break;
            case 8:
              Vc(), (at = 6);
              break e;
            default:
              throw Error(f(462));
          }
        }
        Im();
        break;
      } catch (C) {
        Td(e, C);
      }
    while (!0);
    return (
      (_l = Ua = null),
      (U.H = a),
      (U.A = n),
      (Ce = l),
      be !== null ? 0 : ((Ze = null), (xe = 0), Wu(), at)
    );
  }
  function Im() {
    for (; be !== null && !cr(); ) Ad(be);
  }
  function Ad(e) {
    var t = $s(e.alternate, e, Ll);
    (e.memoizedProps = e.pendingProps), t === null ? Oi(e) : (be = t);
  }
  function _d(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Vs(l, t, t.pendingProps, t.type, void 0, xe);
        break;
      case 11:
        t = Vs(l, t, t.pendingProps, t.type.render, t.ref, xe);
        break;
      case 5:
        rc(t);
      default:
        Ps(l, t), (t = be = Do(t, Ll)), (t = $s(l, t, Ll));
    }
    (e.memoizedProps = e.pendingProps), t === null ? Oi(e) : (be = t);
  }
  function zn(e, t, l, a) {
    (_l = Ua = null), rc(t), (hn = null), (In = 0);
    var n = t.return;
    try {
      if (qm(e, n, t, l, xe)) {
        (at = 1), gi(e, Pt(l, e.current)), (be = null);
        return;
      }
    } catch (u) {
      if (n !== null) throw ((be = n), u);
      (at = 1), gi(e, Pt(l, e.current)), (be = null);
      return;
    }
    t.flags & 32768
      ? (De || a === 1
          ? (e = !0)
          : Sn || (xe & 536870912) !== 0
            ? (e = !1)
            : ((la = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Xt.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Rd(t, e))
      : Oi(t);
  }
  function Oi(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Rd(t, la);
        return;
      }
      e = t.return;
      var l = Qm(t.alternate, t, Ll);
      if (l !== null) {
        be = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        be = t;
        return;
      }
      be = t = e;
    } while (t !== null);
    at === 0 && (at = 5);
  }
  function Rd(e, t) {
    do {
      var l = Zm(e.alternate, e);
      if (l !== null) {
        (l.flags &= 32767), (be = l);
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        be = e;
        return;
      }
      be = e = l;
    } while (e !== null);
    (at = 6), (be = null);
  }
  function Od(e, t, l, a, n, u, r, s, h) {
    e.cancelPendingCommit = null;
    do Ni();
    while (gt !== 0);
    if ((Ce & 6) !== 0) throw Error(f(327));
    if (t !== null) {
      if (t === e.current) throw Error(f(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= jr),
        dr(e, l, u, r, s, h),
        e === Ze && ((be = Ze = null), (xe = 0)),
        (xn = t),
        (ua = e),
        (Yl = l),
        (Xc = u),
        (Qc = n),
        (bd = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            lv(Lt, function () {
              return Hd(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = U.T), (U.T = null), (n = Q.p), (Q.p = 2), (r = Ce), (Ce |= 4);
        try {
          Vm(e, t, l);
        } finally {
          (Ce = r), (Q.p = n), (U.T = a);
        }
      }
      (gt = 1), Nd(), Ud(), Cd();
    }
  }
  function Nd() {
    if (gt === 1) {
      gt = 0;
      var e = ua,
        t = xn,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        (l = U.T), (U.T = null);
        var a = Q.p;
        Q.p = 2;
        var n = Ce;
        Ce |= 4;
        try {
          sd(t, e);
          var u = nf,
            r = go(e.containerInfo),
            s = u.focusedElem,
            h = u.selectionRange;
          if (
            r !== s &&
            s &&
            s.ownerDocument &&
            yo(s.ownerDocument.documentElement, s)
          ) {
            if (h !== null && Rr(s)) {
              var D = h.start,
                C = h.end;
              if ((C === void 0 && (C = D), "selectionStart" in s))
                (s.selectionStart = D),
                  (s.selectionEnd = Math.min(C, s.value.length));
              else {
                var B = s.ownerDocument || document,
                  _ = (B && B.defaultView) || window;
                if (_.getSelection) {
                  var N = _.getSelection(),
                    I = s.textContent.length,
                    re = Math.min(h.start, I),
                    Xe = h.end === void 0 ? re : Math.min(h.end, I);
                  !N.extend && re > Xe && ((r = Xe), (Xe = re), (re = r));
                  var E = vo(s, re),
                    b = vo(s, Xe);
                  if (
                    E &&
                    b &&
                    (N.rangeCount !== 1 ||
                      N.anchorNode !== E.node ||
                      N.anchorOffset !== E.offset ||
                      N.focusNode !== b.node ||
                      N.focusOffset !== b.offset)
                  ) {
                    var M = B.createRange();
                    M.setStart(E.node, E.offset),
                      N.removeAllRanges(),
                      re > Xe
                        ? (N.addRange(M), N.extend(b.node, b.offset))
                        : (M.setEnd(b.node, b.offset), N.addRange(M));
                  }
                }
              }
            }
            for (B = [], N = s; (N = N.parentNode); )
              N.nodeType === 1 &&
                B.push({ element: N, left: N.scrollLeft, top: N.scrollTop });
            for (
              typeof s.focus == "function" && s.focus(), s = 0;
              s < B.length;
              s++
            ) {
              var H = B[s];
              (H.element.scrollLeft = H.left), (H.element.scrollTop = H.top);
            }
          }
          (Qi = !!af), (nf = af = null);
        } finally {
          (Ce = n), (Q.p = a), (U.T = l);
        }
      }
      (e.current = t), (gt = 2);
    }
  }
  function Ud() {
    if (gt === 2) {
      gt = 0;
      var e = ua,
        t = xn,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        (l = U.T), (U.T = null);
        var a = Q.p;
        Q.p = 2;
        var n = Ce;
        Ce |= 4;
        try {
          id(e, t.alternate, t);
        } finally {
          (Ce = n), (Q.p = a), (U.T = l);
        }
      }
      gt = 3;
    }
  }
  function Cd() {
    if (gt === 4 || gt === 3) {
      (gt = 0), fr();
      var e = ua,
        t = xn,
        l = Yl,
        a = bd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (gt = 5)
        : ((gt = 0), (xn = ua = null), jd(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (na = null),
        Z(l),
        (t = t.stateNode),
        zt && typeof zt.onCommitFiberRoot == "function")
      )
        try {
          zt.onCommitFiberRoot(Rt, t, void 0, (t.current.flags & 128) === 128);
        } catch (h) {}
      if (a !== null) {
        (t = U.T), (n = Q.p), (Q.p = 2), (U.T = null);
        try {
          for (var u = e.onRecoverableError, r = 0; r < a.length; r++) {
            var s = a[r];
            u(s.value, { componentStack: s.stack });
          }
        } finally {
          (U.T = t), (Q.p = n);
        }
      }
      (Yl & 3) !== 0 && Ni(),
        Sl(e),
        (n = e.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0
          ? e === Zc
            ? vu++
            : ((vu = 0), (Zc = e))
          : (vu = 0),
        yu(0);
    }
  }
  function jd(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Fn(t)));
  }
  function Ni() {
    return Nd(), Ud(), Cd(), Hd();
  }
  function Hd() {
    if (gt !== 5) return !1;
    var e = ua,
      t = Xc;
    Xc = 0;
    var l = Z(Yl),
      a = U.T,
      n = Q.p;
    try {
      (Q.p = 32 > l ? 32 : l), (U.T = null), (l = Qc), (Qc = null);
      var u = ua,
        r = Yl;
      if (((gt = 0), (xn = ua = null), (Yl = 0), (Ce & 6) !== 0))
        throw Error(f(331));
      var s = Ce;
      if (
        ((Ce |= 4),
        yd(u.current),
        hd(u, u.current, r, l),
        (Ce = s),
        yu(0, !1),
        zt && typeof zt.onPostCommitFiberRoot == "function")
      )
        try {
          zt.onPostCommitFiberRoot(Rt, u);
        } catch (h) {}
      return !0;
    } finally {
      (Q.p = n), (U.T = a), jd(e, t);
    }
  }
  function wd(e, t, l) {
    (t = Pt(l, t)),
      (t = xc(e.stateNode, t, 2)),
      (e = Il(e, t, 2)),
      e !== null && (za(e, 2), Sl(e));
  }
  function Le(e, t, l) {
    if (e.tag === 3) wd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          wd(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (na === null || !na.has(a)))
          ) {
            (e = Pt(l, e)),
              (l = Bs(2)),
              (a = Il(t, l, 2)),
              a !== null && (Ls(l, a, t, e), za(a, 2), Sl(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Jc(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new km();
      var n = new Set();
      a.set(t, n);
    } else (n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n));
    n.has(l) ||
      ((Yc = !0), n.add(l), (e = Pm.bind(null, e, t, l)), t.then(e, e));
  }
  function Pm(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      Ze === e &&
        (xe & l) === l &&
        (at === 4 || (at === 3 && (xe & 62914560) === xe && 300 > it() - Mi)
          ? (Ce & 2) === 0 && Tn(e, 0)
          : (qc |= l),
        En === xe && (En = 0)),
      Sl(e);
  }
  function Bd(e, t) {
    t === 0 && (t = Ta()), (e = Ra(e, t)), e !== null && (za(e, t), Sl(e));
  }
  function ev(e) {
    var t = e.memoizedState,
      l = 0;
    t !== null && (l = t.retryLane), Bd(e, l);
  }
  function tv(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(t), Bd(e, l);
  }
  function lv(e, t) {
    return Hn(e, t);
  }
  var Ui = null,
    Mn = null,
    kc = !1,
    Ci = !1,
    Wc = !1,
    ra = 0;
  function Sl(e) {
    e !== Mn &&
      e.next === null &&
      (Mn === null ? (Ui = Mn = e) : (Mn = Mn.next = e)),
      (Ci = !0),
      kc || ((kc = !0), nv());
  }
  function yu(e, t) {
    if (!Wc && Ci) {
      Wc = !0;
      do
        for (var l = !1, a = Ui; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var r = a.suspendedLanes,
                s = a.pingedLanes;
              (u = (1 << (31 - Mt(42 | e) + 1)) - 1),
                (u &= n & ~(r & ~s)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((l = !0), Gd(a, u));
          } else
            (u = xe),
              (u = Ea(
                a,
                a === Ze ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || xa(a, u) || ((l = !0), Gd(a, u));
          a = a.next;
        }
      while (l);
      Wc = !1;
    }
  }
  function av() {
    Ld();
  }
  function Ld() {
    Ci = kc = !1;
    var e = 0;
    ra !== 0 && mv() && (e = ra);
    for (var t = it(), l = null, a = Ui; a !== null; ) {
      var n = a.next,
        u = Yd(a, t);
      u === 0
        ? ((a.next = null),
          l === null ? (Ui = n) : (l.next = n),
          n === null && (Mn = l))
        : ((l = a), (e !== 0 || (u & 3) !== 0) && (Ci = !0)),
        (a = n);
    }
    (gt !== 0 && gt !== 5) || yu(e), ra !== 0 && (ra = 0);
  }
  function Yd(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;

    ) {
      var r = 31 - Mt(u),
        s = 1 << r,
        h = n[r];
      h === -1
        ? ((s & l) === 0 || (s & a) !== 0) && (n[r] = Yu(s, t))
        : h <= t && (e.expiredLanes |= s),
        (u &= ~s);
    }
    if (
      ((t = Ze),
      (l = xe),
      (l = Ea(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (a = e.callbackNode),
      l === 0 ||
        (e === t && (Be === 2 || Be === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && wn(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || xa(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && wn(a), Z(l))) {
        case 2:
        case 8:
          l = Ja;
          break;
        case 32:
          l = Lt;
          break;
        case 268435456:
          l = Ln;
          break;
        default:
          l = Lt;
      }
      return (
        (a = qd.bind(null, e)),
        (l = Hn(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && wn(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function qd(e, t) {
    if (gt !== 0 && gt !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var l = e.callbackNode;
    if (Ni() && e.callbackNode !== l) return null;
    var a = xe;
    return (
      (a = Ea(
        e,
        e === Ze ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (Ed(e, a, t),
          Yd(e, it()),
          e.callbackNode != null && e.callbackNode === l
            ? qd.bind(null, e)
            : null)
    );
  }
  function Gd(e, t) {
    if (Ni()) return null;
    Ed(e, t, !0);
  }
  function nv() {
    yv(function () {
      (Ce & 6) !== 0 ? Hn(Bn, av) : Ld();
    });
  }
  function Fc() {
    if (ra === 0) {
      var e = on;
      e === 0 && ((e = Sa), (Sa <<= 1), (Sa & 261888) === 0 && (Sa = 256)),
        (ra = e);
    }
    return ra;
  }
  function Xd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Gu("" + e);
  }
  function Qd(e, t) {
    var l = t.ownerDocument.createElement("input");
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute("form", e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function uv(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var u = Xd((n[V] || null).action),
        r = a.submitter;
      r &&
        ((t = (t = r[V] || null)
          ? Xd(t.formAction)
          : r.getAttribute("formAction")),
        t !== null && ((u = t), (r = null)));
      var s = new Vu("action", "action", null, a, n);
      e.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (ra !== 0) {
                  var h = r ? Qd(n, r) : new FormData(n);
                  yc(
                    l,
                    { pending: !0, data: h, method: n.method, action: u },
                    null,
                    h,
                  );
                }
              } else
                typeof u == "function" &&
                  (s.preventDefault(),
                  (h = r ? Qd(n, r) : new FormData(n)),
                  yc(
                    l,
                    { pending: !0, data: h, method: n.method, action: u },
                    u,
                    h,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var $c = 0; $c < Cr.length; $c++) {
    var Ic = Cr[$c],
      iv = Ic.toLowerCase(),
      rv = Ic[0].toUpperCase() + Ic.slice(1);
    sl(iv, "on" + rv);
  }
  sl(So, "onAnimationEnd"),
    sl(Eo, "onAnimationIteration"),
    sl(xo, "onAnimationStart"),
    sl("dblclick", "onDoubleClick"),
    sl("focusin", "onFocus"),
    sl("focusout", "onBlur"),
    sl(Tm, "onTransitionRun"),
    sl(zm, "onTransitionStart"),
    sl(Mm, "onTransitionCancel"),
    sl(To, "onTransitionEnd"),
    fl("onMouseEnter", ["mouseout", "mouseover"]),
    fl("onMouseLeave", ["mouseout", "mouseover"]),
    fl("onPointerEnter", ["pointerout", "pointerover"]),
    fl("onPointerLeave", ["pointerout", "pointerover"]),
    Wt(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Wt(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Wt(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Wt(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Wt(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var gu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    cv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(gu),
    );
  function Zd(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var r = a.length - 1; 0 <= r; r--) {
            var s = a[r],
              h = s.instance,
              D = s.currentTarget;
            if (((s = s.listener), h !== u && n.isPropagationStopped()))
              break e;
            (u = s), (n.currentTarget = D);
            try {
              u(n);
            } catch (C) {
              ku(C);
            }
            (n.currentTarget = null), (u = h);
          }
        else
          for (r = 0; r < a.length; r++) {
            if (
              ((s = a[r]),
              (h = s.instance),
              (D = s.currentTarget),
              (s = s.listener),
              h !== u && n.isPropagationStopped())
            )
              break e;
            (u = s), (n.currentTarget = D);
            try {
              u(n);
            } catch (C) {
              ku(C);
            }
            (n.currentTarget = null), (u = h);
          }
      }
    }
  }
  function Se(e, t) {
    var l = t[oe];
    l === void 0 && (l = t[oe] = new Set());
    var a = e + "__bubble";
    l.has(a) || (Vd(t, e, 2, !1), l.add(a));
  }
  function Pc(e, t, l) {
    var a = 0;
    t && (a |= 4), Vd(l, e, a, t);
  }
  var ji = "_reactListening" + Math.random().toString(36).slice(2);
  function ef(e) {
    if (!e[ji]) {
      (e[ji] = !0),
        Zl.forEach(function (l) {
          l !== "selectionchange" && (cv.has(l) || Pc(l, !1, e), Pc(l, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ji] || ((t[ji] = !0), Pc("selectionchange", !1, t));
    }
  }
  function Vd(e, t, l, a) {
    switch (Sh(t)) {
      case 2:
        var n = wv;
        break;
      case 8:
        n = Bv;
        break;
      default:
        n = yf;
    }
    (l = n.bind(null, t, l, e)),
      (n = void 0),
      !Sr ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
          ? e.addEventListener(t, l, { passive: n })
          : e.addEventListener(t, l, !1);
  }
  function tf(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var r = a.tag;
        if (r === 3 || r === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (r === 4)
            for (r = a.return; r !== null; ) {
              var h = r.tag;
              if ((h === 3 || h === 4) && r.stateNode.containerInfo === n)
                return;
              r = r.return;
            }
          for (; s !== null; ) {
            if (((r = Yt(s)), r === null)) return;
            if (((h = r.tag), h === 5 || h === 6 || h === 26 || h === 27)) {
              a = u = r;
              continue e;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    Wf(function () {
      var D = u,
        C = pr(l),
        B = [];
      e: {
        var _ = zo.get(e);
        if (_ !== void 0) {
          var N = Vu,
            I = e;
          switch (e) {
            case "keypress":
              if (Qu(l) === 0) break e;
            case "keydown":
            case "keyup":
              N = tm;
              break;
            case "focusin":
              (I = "focus"), (N = zr);
              break;
            case "focusout":
              (I = "blur"), (N = zr);
              break;
            case "beforeblur":
            case "afterblur":
              N = zr;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = If;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = Q0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = nm;
              break;
            case So:
            case Eo:
            case xo:
              N = K0;
              break;
            case To:
              N = im;
              break;
            case "scroll":
            case "scrollend":
              N = G0;
              break;
            case "wheel":
              N = cm;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = k0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = eo;
              break;
            case "toggle":
            case "beforetoggle":
              N = om;
          }
          var re = (t & 4) !== 0,
            Xe = !re && (e === "scroll" || e === "scrollend"),
            E = re ? (_ !== null ? _ + "Capture" : null) : _;
          re = [];
          for (var b = D, M; b !== null; ) {
            var H = b;
            if (
              ((M = H.stateNode),
              (H = H.tag),
              (H !== 5 && H !== 26 && H !== 27) ||
                M === null ||
                E === null ||
                ((H = Yn(b, E)), H != null && re.push(pu(b, H, M))),
              Xe)
            )
              break;
            b = b.return;
          }
          0 < re.length &&
            ((_ = new N(_, I, null, l, C)),
            B.push({ event: _, listeners: re }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((_ = e === "mouseover" || e === "pointerover"),
            (N = e === "mouseout" || e === "pointerout"),
            _ &&
              l !== gr &&
              (I = l.relatedTarget || l.fromElement) &&
              (Yt(I) || I[P]))
          )
            break e;
          if (
            (N || _) &&
            ((_ =
              C.window === C
                ? C
                : (_ = C.ownerDocument)
                  ? _.defaultView || _.parentWindow
                  : window),
            N
              ? ((I = l.relatedTarget || l.toElement),
                (N = D),
                (I = I ? Yt(I) : null),
                I !== null &&
                  ((Xe = v(I)),
                  (re = I.tag),
                  I !== Xe || (re !== 5 && re !== 27 && re !== 6)) &&
                  (I = null))
              : ((N = null), (I = D)),
            N !== I)
          ) {
            if (
              ((re = If),
              (H = "onMouseLeave"),
              (E = "onMouseEnter"),
              (b = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((re = eo),
                (H = "onPointerLeave"),
                (E = "onPointerEnter"),
                (b = "pointer")),
              (Xe = N == null ? _ : At(N)),
              (M = I == null ? _ : At(I)),
              (_ = new re(H, b + "leave", N, l, C)),
              (_.target = Xe),
              (_.relatedTarget = M),
              (H = null),
              Yt(C) === D &&
                ((re = new re(E, b + "enter", I, l, C)),
                (re.target = M),
                (re.relatedTarget = Xe),
                (H = re)),
              (Xe = H),
              N && I)
            )
              t: {
                for (re = fv, E = N, b = I, M = 0, H = E; H; H = re(H)) M++;
                H = 0;
                for (var ne = b; ne; ne = re(ne)) H++;
                for (; 0 < M - H; ) (E = re(E)), M--;
                for (; 0 < H - M; ) (b = re(b)), H--;
                for (; M--; ) {
                  if (E === b || (b !== null && E === b.alternate)) {
                    re = E;
                    break t;
                  }
                  (E = re(E)), (b = re(b));
                }
                re = null;
              }
            else re = null;
            N !== null && Kd(B, _, N, re, !1),
              I !== null && Xe !== null && Kd(B, Xe, I, re, !0);
          }
        }
        e: {
          if (
            ((_ = D ? At(D) : window),
            (N = _.nodeName && _.nodeName.toLowerCase()),
            N === "select" || (N === "input" && _.type === "file"))
          )
            var Ne = co;
          else if (io(_))
            if (fo) Ne = Sm;
            else {
              Ne = pm;
              var ee = gm;
            }
          else
            (N = _.nodeName),
              !N ||
              N.toLowerCase() !== "input" ||
              (_.type !== "checkbox" && _.type !== "radio")
                ? D && yr(D.elementType) && (Ne = co)
                : (Ne = bm);
          if (Ne && (Ne = Ne(e, D))) {
            ro(B, Ne, l, C);
            break e;
          }
          ee && ee(e, _, D),
            e === "focusout" &&
              D &&
              _.type === "number" &&
              D.memoizedProps.value != null &&
              vr(_, "number", _.value);
        }
        switch (((ee = D ? At(D) : window), e)) {
          case "focusin":
            (io(ee) || ee.contentEditable === "true") &&
              ((tn = ee), (Or = D), (Jn = null));
            break;
          case "focusout":
            Jn = Or = tn = null;
            break;
          case "mousedown":
            Nr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Nr = !1), po(B, l, C);
            break;
          case "selectionchange":
            if (xm) break;
          case "keydown":
          case "keyup":
            po(B, l, C);
        }
        var ve;
        if (Dr)
          e: {
            switch (e) {
              case "compositionstart":
                var Te = "onCompositionStart";
                break e;
              case "compositionend":
                Te = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Te = "onCompositionUpdate";
                break e;
            }
            Te = void 0;
          }
        else
          en
            ? no(e, l) && (Te = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (Te = "onCompositionStart");
        Te &&
          (to &&
            l.locale !== "ko" &&
            (en || Te !== "onCompositionStart"
              ? Te === "onCompositionEnd" && en && (ve = Ff())
              : ((Vl = C),
                (Er = "value" in Vl ? Vl.value : Vl.textContent),
                (en = !0))),
          (ee = Hi(D, Te)),
          0 < ee.length &&
            ((Te = new Pf(Te, e, null, l, C)),
            B.push({ event: Te, listeners: ee }),
            ve
              ? (Te.data = ve)
              : ((ve = uo(l)), ve !== null && (Te.data = ve)))),
          (ve = dm ? hm(e, l) : mm(e, l)) &&
            ((Te = Hi(D, "onBeforeInput")),
            0 < Te.length &&
              ((ee = new Pf("onBeforeInput", "beforeinput", null, l, C)),
              B.push({ event: ee, listeners: Te }),
              (ee.data = ve))),
          uv(B, e, D, l, C);
      }
      Zd(B, t);
    });
  }
  function pu(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function Hi(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Yn(e, l)),
          n != null && a.unshift(pu(e, n, u)),
          (n = Yn(e, t)),
          n != null && a.push(pu(e, n, u))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function fv(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Kd(e, t, l, a, n) {
    for (var u = t._reactName, r = []; l !== null && l !== a; ) {
      var s = l,
        h = s.alternate,
        D = s.stateNode;
      if (((s = s.tag), h !== null && h === a)) break;
      (s !== 5 && s !== 26 && s !== 27) ||
        D === null ||
        ((h = D),
        n
          ? ((D = Yn(l, u)), D != null && r.unshift(pu(l, D, h)))
          : n || ((D = Yn(l, u)), D != null && r.push(pu(l, D, h)))),
        (l = l.return);
    }
    r.length !== 0 && e.push({ event: t, listeners: r });
  }
  var ov = /\r\n?/g,
    sv = /\u0000|\uFFFD/g;
  function Jd(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        ov,
        `
`,
      )
      .replace(sv, "");
  }
  function kd(e, t) {
    return (t = Jd(t)), Jd(e) === t;
  }
  function Ge(e, t, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || $a(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            $a(e, "" + a);
        break;
      case "className":
        ol(e, "class", a);
        break;
      case "tabIndex":
        ol(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ol(e, l, a);
        break;
      case "style":
        Jf(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          ol(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        (a = Gu("" + a)), e.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (l === "formAction"
              ? (t !== "input" && Ge(e, t, "name", n.name, n, null),
                Ge(e, t, "formEncType", n.formEncType, n, null),
                Ge(e, t, "formMethod", n.formMethod, n, null),
                Ge(e, t, "formTarget", n.formTarget, n, null))
              : (Ge(e, t, "encType", n.encType, n, null),
                Ge(e, t, "method", n.method, n, null),
                Ge(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        (a = Gu("" + a)), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = zl);
        break;
      case "onScroll":
        a != null && Se("scroll", e);
        break;
      case "onScrollEnd":
        a != null && Se("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
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
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (l = Gu("" + a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "" + a)
          : e.removeAttribute(l);
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
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(l, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? e.setAttribute(l, a)
            : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case "popover":
        Se("beforetoggle", e), Se("toggle", e), Je(e, "popover", a);
        break;
      case "xlinkActuate":
        Ft(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Ft(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Ft(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Ft(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Ft(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Ft(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Ft(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Ft(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Ft(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Je(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Y0.get(l) || l), Je(e, l, a));
    }
  }
  function lf(e, t, l, a, n, u) {
    switch (l) {
      case "style":
        Jf(e, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? $a(e, a)
          : (typeof a == "number" || typeof a == "bigint") && $a(e, "" + a);
        break;
      case "onScroll":
        a != null && Se("scroll", e);
        break;
      case "onScrollEnd":
        a != null && Se("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = zl);
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
        if (!yl.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (t = l.slice(2, n ? l.length - 7 : void 0)),
              (u = e[V] || null),
              (u = u != null ? u[l] : null),
              typeof u == "function" && e.removeEventListener(t, u, n),
              typeof a == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, n);
              break e;
            }
            l in e
              ? (e[l] = a)
              : a === !0
                ? e.setAttribute(l, "")
                : Je(e, l, a);
          }
    }
  }
  function Tt(e, t, l) {
    switch (t) {
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
        Se("error", e), Se("load", e);
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var r = l[u];
            if (r != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, t));
                default:
                  Ge(e, t, u, r, l, null);
              }
          }
        n && Ge(e, t, "srcSet", l.srcSet, l, null),
          a && Ge(e, t, "src", l.src, l, null);
        return;
      case "input":
        Se("invalid", e);
        var s = (u = r = n = null),
          h = null,
          D = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var C = l[a];
            if (C != null)
              switch (a) {
                case "name":
                  n = C;
                  break;
                case "type":
                  r = C;
                  break;
                case "checked":
                  h = C;
                  break;
                case "defaultChecked":
                  D = C;
                  break;
                case "value":
                  u = C;
                  break;
                case "defaultValue":
                  s = C;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (C != null) throw Error(f(137, t));
                  break;
                default:
                  Ge(e, t, a, C, l, null);
              }
          }
        Qf(e, u, s, h, D, r, n, !1);
        return;
      case "select":
        Se("invalid", e), (a = r = u = null);
        for (n in l)
          if (l.hasOwnProperty(n) && ((s = l[n]), s != null))
            switch (n) {
              case "value":
                u = s;
                break;
              case "defaultValue":
                r = s;
                break;
              case "multiple":
                a = s;
              default:
                Ge(e, t, n, s, l, null);
            }
        (t = u),
          (l = r),
          (e.multiple = !!a),
          t != null ? Fa(e, !!a, t, !1) : l != null && Fa(e, !!a, l, !0);
        return;
      case "textarea":
        Se("invalid", e), (u = n = a = null);
        for (r in l)
          if (l.hasOwnProperty(r) && ((s = l[r]), s != null))
            switch (r) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                u = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(f(91));
                break;
              default:
                Ge(e, t, r, s, l, null);
            }
        Vf(e, a, n, u);
        return;
      case "option":
        for (h in l)
          if (l.hasOwnProperty(h) && ((a = l[h]), a != null))
            switch (h) {
              case "selected":
                e.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Ge(e, t, h, a, l, null);
            }
        return;
      case "dialog":
        Se("beforetoggle", e), Se("toggle", e), Se("cancel", e), Se("close", e);
        break;
      case "iframe":
      case "object":
        Se("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < gu.length; a++) Se(gu[a], e);
        break;
      case "image":
        Se("error", e), Se("load", e);
        break;
      case "details":
        Se("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Se("error", e), Se("load", e);
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
        for (D in l)
          if (l.hasOwnProperty(D) && ((a = l[D]), a != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, t));
              default:
                Ge(e, t, D, a, l, null);
            }
        return;
      default:
        if (yr(t)) {
          for (C in l)
            l.hasOwnProperty(C) &&
              ((a = l[C]), a !== void 0 && lf(e, t, C, a, l, void 0));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && ((a = l[s]), a != null && Ge(e, t, s, a, l, null));
  }
  function dv(e, t, l, a) {
    switch (t) {
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
        var n = null,
          u = null,
          r = null,
          s = null,
          h = null,
          D = null,
          C = null;
        for (N in l) {
          var B = l[N];
          if (l.hasOwnProperty(N) && B != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = B;
              default:
                a.hasOwnProperty(N) || Ge(e, t, N, null, a, B);
            }
        }
        for (var _ in a) {
          var N = a[_];
          if (((B = l[_]), a.hasOwnProperty(_) && (N != null || B != null)))
            switch (_) {
              case "type":
                u = N;
                break;
              case "name":
                n = N;
                break;
              case "checked":
                D = N;
                break;
              case "defaultChecked":
                C = N;
                break;
              case "value":
                r = N;
                break;
              case "defaultValue":
                s = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(f(137, t));
                break;
              default:
                N !== B && Ge(e, t, _, N, a, B);
            }
        }
        mr(e, r, s, h, D, C, u, n);
        return;
      case "select":
        N = r = s = _ = null;
        for (u in l)
          if (((h = l[u]), l.hasOwnProperty(u) && h != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                N = h;
              default:
                a.hasOwnProperty(u) || Ge(e, t, u, null, a, h);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (h = l[n]),
            a.hasOwnProperty(n) && (u != null || h != null))
          )
            switch (n) {
              case "value":
                _ = u;
                break;
              case "defaultValue":
                s = u;
                break;
              case "multiple":
                r = u;
              default:
                u !== h && Ge(e, t, n, u, a, h);
            }
        (t = s),
          (l = r),
          (a = N),
          _ != null
            ? Fa(e, !!l, _, !1)
            : !!a != !!l &&
              (t != null ? Fa(e, !!l, t, !0) : Fa(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        N = _ = null;
        for (s in l)
          if (
            ((n = l[s]),
            l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
          )
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ge(e, t, s, null, a, n);
            }
        for (r in a)
          if (
            ((n = a[r]),
            (u = l[r]),
            a.hasOwnProperty(r) && (n != null || u != null))
          )
            switch (r) {
              case "value":
                _ = n;
                break;
              case "defaultValue":
                N = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && Ge(e, t, r, n, a, u);
            }
        Zf(e, _, N);
        return;
      case "option":
        for (var I in l)
          if (
            ((_ = l[I]),
            l.hasOwnProperty(I) && _ != null && !a.hasOwnProperty(I))
          )
            switch (I) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ge(e, t, I, null, a, _);
            }
        for (h in a)
          if (
            ((_ = a[h]),
            (N = l[h]),
            a.hasOwnProperty(h) && _ !== N && (_ != null || N != null))
          )
            switch (h) {
              case "selected":
                e.selected =
                  _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                Ge(e, t, h, _, a, N);
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
        for (var re in l)
          (_ = l[re]),
            l.hasOwnProperty(re) &&
              _ != null &&
              !a.hasOwnProperty(re) &&
              Ge(e, t, re, null, a, _);
        for (D in a)
          if (
            ((_ = a[D]),
            (N = l[D]),
            a.hasOwnProperty(D) && _ !== N && (_ != null || N != null))
          )
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(f(137, t));
                break;
              default:
                Ge(e, t, D, _, a, N);
            }
        return;
      default:
        if (yr(t)) {
          for (var Xe in l)
            (_ = l[Xe]),
              l.hasOwnProperty(Xe) &&
                _ !== void 0 &&
                !a.hasOwnProperty(Xe) &&
                lf(e, t, Xe, void 0, a, _);
          for (C in a)
            (_ = a[C]),
              (N = l[C]),
              !a.hasOwnProperty(C) ||
                _ === N ||
                (_ === void 0 && N === void 0) ||
                lf(e, t, C, _, a, N);
          return;
        }
    }
    for (var E in l)
      (_ = l[E]),
        l.hasOwnProperty(E) &&
          _ != null &&
          !a.hasOwnProperty(E) &&
          Ge(e, t, E, null, a, _);
    for (B in a)
      (_ = a[B]),
        (N = l[B]),
        !a.hasOwnProperty(B) ||
          _ === N ||
          (_ == null && N == null) ||
          Ge(e, t, B, _, a, N);
  }
  function Wd(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function hv() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          u = n.transferSize,
          r = n.initiatorType,
          s = n.duration;
        if (u && s && Wd(r)) {
          for (r = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
            var h = l[a],
              D = h.startTime;
            if (D > s) break;
            var C = h.transferSize,
              B = h.initiatorType;
            C &&
              Wd(B) &&
              ((h = h.responseEnd), (r += C * (h < s ? 1 : (s - D) / (h - D))));
          }
          if ((--a, (t += (8 * (u + r)) / (n.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var af = null,
    nf = null;
  function wi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Fd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function $d(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function uf(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var rf = null;
  function mv() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === rf
        ? !1
        : ((rf = e), !0)
      : ((rf = null), !1);
  }
  var Id = typeof setTimeout == "function" ? setTimeout : void 0,
    vv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Pd = typeof Promise == "function" ? Promise : void 0,
    yv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Pd != "undefined"
          ? function (e) {
              return Pd.resolve(null).then(e).catch(gv);
            }
          : Id;
  function gv(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ca(e) {
    return e === "head";
  }
  function eh(e, t) {
    var l = t,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((e.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === "/$" || l === "/&")) {
          if (a === 0) {
            e.removeChild(n), Rn(t);
            return;
          }
          a--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          a++;
        else if (l === "html") bu(e.ownerDocument.documentElement);
        else if (l === "head") {
          (l = e.ownerDocument.head), bu(l);
          for (var u = l.firstChild; u; ) {
            var r = u.nextSibling,
              s = u.nodeName;
            u[pe] ||
              s === "SCRIPT" ||
              s === "STYLE" ||
              (s === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(u),
              (u = r);
          }
        } else l === "body" && bu(e.ownerDocument.body);
      l = n;
    } while (l);
    Rn(t);
  }
  function th(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? t
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (t
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === "/$")) {
          if (e === 0) break;
          e--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || e++;
      l = a;
    } while (l);
  }
  function cf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          cf(l), Ve(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function pv(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[pe])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((u = e.getAttribute("rel")),
                u === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                e.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                e.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((u = e.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  e.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  e.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (((e = nl(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function bv(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = nl(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function lh(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = nl(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function ff(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function of(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function Sv(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading") t();
    else {
      var a = function () {
        t(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), (e._reactRetry = a);
    }
  }
  function nl(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var sf = null;
  function ah(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0) return nl(e.nextSibling);
          t--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function nh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else (l !== "/$" && l !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function uh(e, t, l) {
    switch (((t = wi(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(f(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(f(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(f(454));
        return e;
      default:
        throw Error(f(451));
    }
  }
  function bu(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Ve(e);
  }
  var ul = new Map(),
    ih = new Set();
  function Bi(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var ql = Q.d;
  Q.d = { f: Ev, r: xv, D: Tv, C: zv, L: Mv, m: Dv, X: _v, S: Av, M: Rv };
  function Ev() {
    var e = ql.f(),
      t = _i();
    return e || t;
  }
  function xv(e) {
    var t = kt(e);
    t !== null && t.tag === 5 && t.type === "form" ? Ts(t) : ql.r(e);
  }
  var Dn = typeof document == "undefined" ? null : document;
  function rh(e, t, l) {
    var a = Dn;
    if (a && typeof t == "string" && t) {
      var n = $t(t);
      (n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        ih.has(n) ||
          (ih.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement("link")),
            Tt(t, "link", e),
            tt(t),
            a.head.appendChild(t)));
    }
  }
  function Tv(e) {
    ql.D(e), rh("dns-prefetch", e, null);
  }
  function zv(e, t) {
    ql.C(e, t), rh("preconnect", e, t);
  }
  function Mv(e, t, l) {
    ql.L(e, t, l);
    var a = Dn;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + $t(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + $t(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + $t(l.imageSizes) + '"]'))
        : (n += '[href="' + $t(e) + '"]');
      var u = n;
      switch (t) {
        case "style":
          u = An(e);
          break;
        case "script":
          u = _n(e);
      }
      ul.has(u) ||
        ((e = T(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l,
        )),
        ul.set(u, e),
        a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(Su(u))) ||
          (t === "script" && a.querySelector(Eu(u))) ||
          ((t = a.createElement("link")),
          Tt(t, "link", e),
          tt(t),
          a.head.appendChild(t)));
    }
  }
  function Dv(e, t) {
    ql.m(e, t);
    var l = Dn;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + $t(a) + '"][href="' + $t(e) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = _n(e);
      }
      if (
        !ul.has(u) &&
        ((e = T({ rel: "modulepreload", href: e }, t)),
        ul.set(u, e),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Eu(u))) return;
        }
        (a = l.createElement("link")),
          Tt(a, "link", e),
          tt(a),
          l.head.appendChild(a);
      }
    }
  }
  function Av(e, t, l) {
    ql.S(e, t, l);
    var a = Dn;
    if (a && e) {
      var n = bt(a).hoistableStyles,
        u = An(e);
      t = t || "default";
      var r = n.get(u);
      if (!r) {
        var s = { loading: 0, preload: null };
        if ((r = a.querySelector(Su(u)))) s.loading = 5;
        else {
          (e = T({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = ul.get(u)) && df(e, l);
          var h = (r = a.createElement("link"));
          tt(h),
            Tt(h, "link", e),
            (h._p = new Promise(function (D, C) {
              (h.onload = D), (h.onerror = C);
            })),
            h.addEventListener("load", function () {
              s.loading |= 1;
            }),
            h.addEventListener("error", function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            Li(r, t, a);
        }
        (r = { type: "stylesheet", instance: r, count: 1, state: s }),
          n.set(u, r);
      }
    }
  }
  function _v(e, t) {
    ql.X(e, t);
    var l = Dn;
    if (l && e) {
      var a = bt(l).hoistableScripts,
        n = _n(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(Eu(n))),
        u ||
          ((e = T({ src: e, async: !0 }, t)),
          (t = ul.get(n)) && hf(e, t),
          (u = l.createElement("script")),
          tt(u),
          Tt(u, "link", e),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Rv(e, t) {
    ql.M(e, t);
    var l = Dn;
    if (l && e) {
      var a = bt(l).hoistableScripts,
        n = _n(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(Eu(n))),
        u ||
          ((e = T({ src: e, async: !0, type: "module" }, t)),
          (t = ul.get(n)) && hf(e, t),
          (u = l.createElement("script")),
          tt(u),
          Tt(u, "link", e),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function ch(e, t, l, a) {
    var n = (n = fe.current) ? Bi(n) : null;
    if (!n) throw Error(f(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = An(l.href)),
            (l = bt(n).hoistableStyles),
            (a = l.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = An(l.href);
          var u = bt(n).hoistableStyles,
            r = u.get(e);
          if (
            (r ||
              ((n = n.ownerDocument || n),
              (r = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, r),
              (u = n.querySelector(Su(e))) &&
                !u._p &&
                ((r.instance = u), (r.state.loading = 5)),
              ul.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                ul.set(e, l),
                u || Ov(n, e, l, r.state))),
            t && a === null)
          )
            throw Error(f(528, ""));
          return r;
        }
        if (t && a !== null) throw Error(f(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = _n(l)),
              (l = bt(n).hoistableScripts),
              (a = l.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(f(444, e));
    }
  }
  function An(e) {
    return 'href="' + $t(e) + '"';
  }
  function Su(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function fh(e) {
    return T({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Ov(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = e.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Tt(t, "link", l),
        tt(t),
        e.head.appendChild(t));
  }
  function _n(e) {
    return '[src="' + $t(e) + '"]';
  }
  function Eu(e) {
    return "script[async]" + e;
  }
  function oh(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + $t(l.href) + '"]');
          if (a) return (t.instance = a), tt(a), a;
          var n = T({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            tt(a),
            Tt(a, "style", n),
            Li(a, l.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          n = An(l.href);
          var u = e.querySelector(Su(n));
          if (u) return (t.state.loading |= 4), (t.instance = u), tt(u), u;
          (a = fh(l)),
            (n = ul.get(n)) && df(a, n),
            (u = (e.ownerDocument || e).createElement("link")),
            tt(u);
          var r = u;
          return (
            (r._p = new Promise(function (s, h) {
              (r.onload = s), (r.onerror = h);
            })),
            Tt(u, "link", a),
            (t.state.loading |= 4),
            Li(u, l.precedence, e),
            (t.instance = u)
          );
        case "script":
          return (
            (u = _n(l.src)),
            (n = e.querySelector(Eu(u)))
              ? ((t.instance = n), tt(n), n)
              : ((a = l),
                (n = ul.get(u)) && ((a = T({}, l)), hf(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement("script")),
                tt(n),
                Tt(n, "link", a),
                e.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(f(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Li(a, l.precedence, e));
    return t.instance;
  }
  function Li(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        r = 0;
      r < a.length;
      r++
    ) {
      var s = a[r];
      if (s.dataset.precedence === t) u = s;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function df(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function hf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Yi = null;
  function sh(e, t, l) {
    if (Yi === null) {
      var a = new Map(),
        n = (Yi = new Map());
      n.set(l, a);
    } else (n = Yi), (a = n.get(l)), a || ((a = new Map()), n.set(l, a));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[pe] ||
          u[K] ||
          (e === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var r = u.getAttribute(t) || "";
        r = e + r;
        var s = a.get(r);
        s ? s.push(u) : a.set(r, [u]);
      }
    }
    return a;
  }
  function dh(e, t, l) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null,
      );
  }
  function Nv(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function hh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Uv(e, t, l, a) {
    if (
      l.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = An(a.href),
          u = t.querySelector(Su(n));
        if (u) {
          (t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = qi.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = u),
            tt(u);
          return;
        }
        (u = t.ownerDocument || t),
          (a = fh(a)),
          (n = ul.get(n)) && df(a, n),
          (u = u.createElement("link")),
          tt(u);
        var r = u;
        (r._p = new Promise(function (s, h) {
          (r.onload = s), (r.onerror = h);
        })),
          Tt(u, "link", a),
          (l.instance = u);
      }
      e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = qi.bind(e)),
          t.addEventListener("load", l),
          t.addEventListener("error", l));
    }
  }
  var mf = 0;
  function Cv(e, t) {
    return (
      e.stylesheets && e.count === 0 && Xi(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((e.stylesheets && Xi(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                (e.unsuspend = null), u();
              }
            }, 6e4 + t);
            0 < e.imgBytes && mf === 0 && (mf = 62500 * hv());
            var n = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Xi(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  (e.unsuspend = null), u();
                }
              },
              (e.imgBytes > mf ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = l),
              function () {
                (e.unsuspend = null), clearTimeout(a), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function qi() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Xi(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Gi = null;
  function Xi(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Gi = new Map()),
        t.forEach(jv, e),
        (Gi = null),
        qi.call(e));
  }
  function jv(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Gi.get(e);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), Gi.set(e, l);
        for (
          var n = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var r = n[u];
          (r.nodeName === "LINK" || r.getAttribute("media") !== "not all") &&
            (l.set(r.dataset.precedence, r), (a = r));
        }
        a && l.set(null, a);
      }
      (n = t.instance),
        (r = n.getAttribute("data-precedence")),
        (u = l.get(r) || a),
        u === a && l.set(null, n),
        l.set(r, n),
        this.count++,
        (a = qi.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var xu = {
    $$typeof: ge,
    Provider: null,
    Consumer: null,
    _currentValue: $,
    _currentValue2: $,
    _threadCount: 0,
  };
  function Hv(e, t, l, a, n, u, r, s, h) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ql(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ql(0)),
      (this.hiddenUpdates = Ql(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = r),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = h),
      (this.incompleteTransitions = new Map());
  }
  function mh(e, t, l, a, n, u, r, s, h, D, C, B) {
    return (
      (e = new Hv(e, t, l, r, h, D, C, B, s)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = Gt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = Kr()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: t }),
      Fr(u),
      e
    );
  }
  function vh(e) {
    return e ? ((e = nn), e) : nn;
  }
  function yh(e, t, l, a, n, u) {
    (n = vh(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = $l(t)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = Il(e, a, t)),
      l !== null && (wt(l, e, t), eu(l, e, t));
  }
  function gh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function vf(e, t) {
    gh(e, t), (e = e.alternate) && gh(e, t);
  }
  function ph(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ra(e, 67108864);
      t !== null && wt(t, e, 67108864), vf(e, 67108864);
    }
  }
  function bh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Kt();
      t = Y(t);
      var l = Ra(e, t);
      l !== null && wt(l, e, t), vf(e, t);
    }
  }
  var Qi = !0;
  function wv(e, t, l, a) {
    var n = U.T;
    U.T = null;
    var u = Q.p;
    try {
      (Q.p = 2), yf(e, t, l, a);
    } finally {
      (Q.p = u), (U.T = n);
    }
  }
  function Bv(e, t, l, a) {
    var n = U.T;
    U.T = null;
    var u = Q.p;
    try {
      (Q.p = 8), yf(e, t, l, a);
    } finally {
      (Q.p = u), (U.T = n);
    }
  }
  function yf(e, t, l, a) {
    if (Qi) {
      var n = gf(a);
      if (n === null) tf(e, t, a, Zi, l), Eh(e, a);
      else if (Yv(n, e, t, l, a)) a.stopPropagation();
      else if ((Eh(e, a), t & 4 && -1 < Lv.indexOf(e))) {
        for (; n !== null; ) {
          var u = kt(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var r = xl(u.pendingLanes);
                  if (r !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; r; ) {
                      var h = 1 << (31 - Mt(r));
                      (s.entanglements[1] |= h), (r &= ~h);
                    }
                    Sl(u), (Ce & 6) === 0 && ((Di = it() + 500), yu(0));
                  }
                }
                break;
              case 31:
              case 13:
                (s = Ra(u, 2)), s !== null && wt(s, u, 2), _i(), vf(u, 2);
            }
          if (((u = gf(a)), u === null && tf(e, t, a, Zi, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else tf(e, t, a, null, l);
    }
  }
  function gf(e) {
    return (e = pr(e)), pf(e);
  }
  var Zi = null;
  function pf(e) {
    if (((Zi = null), (e = Yt(e)), e !== null)) {
      var t = v(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = y(t)), e !== null)) return e;
          e = null;
        } else if (l === 31) {
          if (((e = z(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Zi = e), null;
  }
  function Sh(e) {
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
        switch (ba()) {
          case Bn:
            return 2;
          case Ja:
            return 8;
          case Lt:
          case rl:
            return 32;
          case Ln:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var bf = !1,
    fa = null,
    oa = null,
    sa = null,
    Tu = new Map(),
    zu = new Map(),
    da = [],
    Lv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Eh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        fa = null;
        break;
      case "dragenter":
      case "dragleave":
        oa = null;
        break;
      case "mouseover":
      case "mouseout":
        sa = null;
        break;
      case "pointerover":
      case "pointerout":
        Tu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zu.delete(t.pointerId);
    }
  }
  function Mu(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = kt(t)), t !== null && ph(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function Yv(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return (fa = Mu(fa, e, t, l, a, n)), !0;
      case "dragenter":
        return (oa = Mu(oa, e, t, l, a, n)), !0;
      case "mouseover":
        return (sa = Mu(sa, e, t, l, a, n)), !0;
      case "pointerover":
        var u = n.pointerId;
        return Tu.set(u, Mu(Tu.get(u) || null, e, t, l, a, n)), !0;
      case "gotpointercapture":
        return (
          (u = n.pointerId), zu.set(u, Mu(zu.get(u) || null, e, t, l, a, n)), !0
        );
    }
    return !1;
  }
  function xh(e) {
    var t = Yt(e.target);
    if (t !== null) {
      var l = v(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = y(l)), t !== null)) {
            (e.blockedOn = t),
              ce(e.priority, function () {
                bh(l);
              });
            return;
          }
        } else if (t === 31) {
          if (((t = z(l)), t !== null)) {
            (e.blockedOn = t),
              ce(e.priority, function () {
                bh(l);
              });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Vi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = gf(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        (gr = a), l.target.dispatchEvent(a), (gr = null);
      } else return (t = kt(l)), t !== null && ph(t), (e.blockedOn = l), !1;
      t.shift();
    }
    return !0;
  }
  function Th(e, t, l) {
    Vi(e) && l.delete(t);
  }
  function qv() {
    (bf = !1),
      fa !== null && Vi(fa) && (fa = null),
      oa !== null && Vi(oa) && (oa = null),
      sa !== null && Vi(sa) && (sa = null),
      Tu.forEach(Th),
      zu.forEach(Th);
  }
  function Ki(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      bf ||
        ((bf = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, qv)));
  }
  var Ji = null;
  function zh(e) {
    Ji !== e &&
      ((Ji = e),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        Ji === e && (Ji = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != "function") {
            if (pf(a || l) === null) continue;
            break;
          }
          var u = kt(l);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            yc(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Rn(e) {
    function t(h) {
      return Ki(h, e);
    }
    fa !== null && Ki(fa, e),
      oa !== null && Ki(oa, e),
      sa !== null && Ki(sa, e),
      Tu.forEach(t),
      zu.forEach(t);
    for (var l = 0; l < da.length; l++) {
      var a = da[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < da.length && ((l = da[0]), l.blockedOn === null); )
      xh(l), l.blockedOn === null && da.shift();
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          r = n[V] || null;
        if (typeof u == "function") r || zh(l);
        else if (r) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (r = u[V] || null))) s = r.formAction;
            else if (pf(n) !== null) continue;
          } else s = r.action;
          typeof s == "function" ? (l[a + 1] = s) : (l.splice(a, 3), (a -= 3)),
            zh(l);
        }
      }
  }
  function Mh() {
    function e(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (r) {
              return (n = r);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      n !== null && (n(), (n = null)), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(l, 100),
        function () {
          (a = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            n !== null && (n(), (n = null));
        }
      );
    }
  }
  function Sf(e) {
    this._internalRoot = e;
  }
  (ki.prototype.render = Sf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(f(409));
      var l = t.current,
        a = Kt();
      yh(l, a, e, t, null, null);
    }),
    (ki.prototype.unmount = Sf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          yh(e.current, 2, null, e, null, null), _i(), (t[P] = null);
        }
      });
  function ki(e) {
    this._internalRoot = e;
  }
  ki.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ae();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < da.length && t !== 0 && t < da[l].priority; l++);
      da.splice(l, 0, e), l === 0 && xh(e);
    }
  };
  var Dh = c.version;
  if (Dh !== "19.2.0") throw Error(f(527, Dh, "19.2.0"));
  Q.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(f(188))
        : ((e = Object.keys(e).join(",")), Error(f(268, e)));
    return (
      (e = m(t)),
      (e = e !== null ? R(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Gv = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var Wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wi.isDisabled && Wi.supportsFiber)
      try {
        (Rt = Wi.inject(Gv)), (zt = Wi);
      } catch (e) {}
  }
  return (
    (_u.createRoot = function (e, t) {
      if (!d(e)) throw Error(f(299));
      var l = !1,
        a = "",
        n = Cs,
        u = js,
        r = Hs;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
        (t = mh(e, 1, !1, null, null, l, a, null, n, u, r, Mh)),
        (e[P] = t.current),
        ef(e),
        new Sf(t)
      );
    }),
    (_u.hydrateRoot = function (e, t, l) {
      if (!d(e)) throw Error(f(299));
      var a = !1,
        n = "",
        u = Cs,
        r = js,
        s = Hs,
        h = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (r = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.formState !== void 0 && (h = l.formState)),
        (t = mh(e, 1, !0, t, l != null ? l : null, a, n, h, u, r, s, Mh)),
        (t.context = vh(null)),
        (l = t.current),
        (a = Kt()),
        (a = Y(a)),
        (n = $l(a)),
        (n.callback = null),
        Il(l, n, a),
        (l = a),
        (t.current.lanes = l),
        za(t, l),
        Sl(t),
        (e[P] = t.current),
        ef(e),
        new ki(t)
      );
    }),
    (_u.version = "19.2.0"),
    _u
  );
}
var qh;
function ay() {
  if (qh) return Mf.exports;
  qh = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (c) {
        console.error(c);
      }
  }
  return i(), (Mf.exports = ly()), Mf.exports;
}
var ny = ay();
const uy = Hf(ny);
var m0 = h0();
const iy = Hf(m0),
  ry = s0({ __proto__: null, default: iy }, [m0]);
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ie() {
  return (
    (Ie = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var c = 1; c < arguments.length; c++) {
            var o = arguments[c];
            for (var f in o)
              Object.prototype.hasOwnProperty.call(o, f) && (i[f] = o[f]);
          }
          return i;
        }),
    Ie.apply(this, arguments)
  );
}
var mt;
(function (i) {
  (i.Pop = "POP"), (i.Push = "PUSH"), (i.Replace = "REPLACE");
})(mt || (mt = {}));
const Gh = "popstate";
function cy(i) {
  i === void 0 && (i = {});
  function c(f, d) {
    let { pathname: v, search: y, hash: z } = f.location;
    return Cu(
      "",
      { pathname: v, search: y, hash: z },
      (d.state && d.state.usr) || null,
      (d.state && d.state.key) || "default",
    );
  }
  function o(f, d) {
    return typeof d == "string" ? d : Hu(d);
  }
  return oy(c, o, null, i);
}
function Ae(i, c) {
  if (i === !1 || i === null || typeof i == "undefined") throw new Error(c);
}
function Un(i, c) {
  if (!i) {
    typeof console != "undefined" && console.warn(c);
    try {
      throw new Error(c);
    } catch (o) {}
  }
}
function fy() {
  return Math.random().toString(36).substr(2, 8);
}
function Xh(i, c) {
  return { usr: i.state, key: i.key, idx: c };
}
function Cu(i, c, o, f) {
  return (
    o === void 0 && (o = null),
    Ie(
      { pathname: typeof i == "string" ? i : i.pathname, search: "", hash: "" },
      typeof c == "string" ? ga(c) : c,
      { state: o, key: (c && c.key) || f || fy() },
    )
  );
}
function Hu(i) {
  let { pathname: c = "/", search: o = "", hash: f = "" } = i;
  return (
    o && o !== "?" && (c += o.charAt(0) === "?" ? o : "?" + o),
    f && f !== "#" && (c += f.charAt(0) === "#" ? f : "#" + f),
    c
  );
}
function ga(i) {
  let c = {};
  if (i) {
    let o = i.indexOf("#");
    o >= 0 && ((c.hash = i.substr(o)), (i = i.substr(0, o)));
    let f = i.indexOf("?");
    f >= 0 && ((c.search = i.substr(f)), (i = i.substr(0, f))),
      i && (c.pathname = i);
  }
  return c;
}
function oy(i, c, o, f) {
  f === void 0 && (f = {});
  let { window: d = document.defaultView, v5Compat: v = !1 } = f,
    y = d.history,
    z = mt.Pop,
    p = null,
    m = R();
  m == null && ((m = 0), y.replaceState(Ie({}, y.state, { idx: m }), ""));
  function R() {
    return (y.state || { idx: null }).idx;
  }
  function T() {
    z = mt.Pop;
    let te = R(),
      de = te == null ? null : te - m;
    (m = te), p && p({ action: z, location: J.location, delta: de });
  }
  function w(te, de) {
    z = mt.Push;
    let ie = Cu(J.location, te, de);
    m = R() + 1;
    let ge = Xh(ie, m),
      je = J.createHref(ie);
    try {
      y.pushState(ge, "", je);
    } catch (He) {
      if (He instanceof DOMException && He.name === "DataCloneError") throw He;
      d.location.assign(je);
    }
    v && p && p({ action: z, location: J.location, delta: 1 });
  }
  function G(te, de) {
    z = mt.Replace;
    let ie = Cu(J.location, te, de);
    m = R();
    let ge = Xh(ie, m),
      je = J.createHref(ie);
    y.replaceState(ge, "", je),
      v && p && p({ action: z, location: J.location, delta: 0 });
  }
  function W(te) {
    let de = d.location.origin !== "null" ? d.location.origin : d.location.href,
      ie = typeof te == "string" ? te : Hu(te);
    return (
      (ie = ie.replace(/ $/, "%20")),
      Ae(
        de,
        "No window.location.(origin|href) available to create URL for href: " +
          ie,
      ),
      new URL(ie, de)
    );
  }
  let J = {
    get action() {
      return z;
    },
    get location() {
      return i(d, y);
    },
    listen(te) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        d.addEventListener(Gh, T),
        (p = te),
        () => {
          d.removeEventListener(Gh, T), (p = null);
        }
      );
    },
    createHref(te) {
      return c(d, te);
    },
    createURL: W,
    encodeLocation(te) {
      let de = W(te);
      return { pathname: de.pathname, search: de.search, hash: de.hash };
    },
    push: w,
    replace: G,
    go(te) {
      return y.go(te);
    },
  };
  return J;
}
var Ye;
(function (i) {
  (i.data = "data"),
    (i.deferred = "deferred"),
    (i.redirect = "redirect"),
    (i.error = "error");
})(Ye || (Ye = {}));
const sy = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function dy(i) {
  return i.index === !0;
}
function Pi(i, c, o, f) {
  return (
    o === void 0 && (o = []),
    f === void 0 && (f = {}),
    i.map((d, v) => {
      let y = [...o, String(v)],
        z = typeof d.id == "string" ? d.id : y.join("-");
      if (
        (Ae(
          d.index !== !0 || !d.children,
          "Cannot specify children on an index route",
        ),
        Ae(
          !f[z],
          'Found a route id collision on id "' +
            z +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        dy(d))
      ) {
        let p = Ie({}, d, c(d), { id: z });
        return (f[z] = p), p;
      } else {
        let p = Ie({}, d, c(d), { id: z, children: void 0 });
        return (
          (f[z] = p), d.children && (p.children = Pi(d.children, c, y, f)), p
        );
      }
    })
  );
}
function Xa(i, c, o) {
  return o === void 0 && (o = "/"), Ii(i, c, o, !1);
}
function Ii(i, c, o, f) {
  let d = typeof c == "string" ? ga(c) : c,
    v = wu(d.pathname || "/", o);
  if (v == null) return null;
  let y = v0(i);
  my(y);
  let z = null;
  for (let p = 0; z == null && p < y.length; ++p) {
    let m = My(v);
    z = Ty(y[p], m, f);
  }
  return z;
}
function hy(i, c) {
  let { route: o, pathname: f, params: d } = i;
  return { id: o.id, pathname: f, params: d, data: c[o.id], handle: o.handle };
}
function v0(i, c, o, f) {
  c === void 0 && (c = []), o === void 0 && (o = []), f === void 0 && (f = "");
  let d = (v, y, z) => {
    let p = {
      relativePath: z === void 0 ? v.path || "" : z,
      caseSensitive: v.caseSensitive === !0,
      childrenIndex: y,
      route: v,
    };
    p.relativePath.startsWith("/") &&
      (Ae(
        p.relativePath.startsWith(f),
        'Absolute route path "' +
          p.relativePath +
          '" nested under path ' +
          ('"' + f + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (p.relativePath = p.relativePath.slice(f.length)));
    let m = ya([f, p.relativePath]),
      R = o.concat(p);
    v.children &&
      v.children.length > 0 &&
      (Ae(
        v.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + m + '".'),
      ),
      v0(v.children, c, R, m)),
      !(v.path == null && !v.index) &&
        c.push({ path: m, score: Ey(m, v.index), routesMeta: R });
  };
  return (
    i.forEach((v, y) => {
      var z;
      if (v.path === "" || !((z = v.path) != null && z.includes("?"))) d(v, y);
      else for (let p of y0(v.path)) d(v, y, p);
    }),
    c
  );
}
function y0(i) {
  let c = i.split("/");
  if (c.length === 0) return [];
  let [o, ...f] = c,
    d = o.endsWith("?"),
    v = o.replace(/\?$/, "");
  if (f.length === 0) return d ? [v, ""] : [v];
  let y = y0(f.join("/")),
    z = [];
  return (
    z.push(...y.map((p) => (p === "" ? v : [v, p].join("/")))),
    d && z.push(...y),
    z.map((p) => (i.startsWith("/") && p === "" ? "/" : p))
  );
}
function my(i) {
  i.sort((c, o) =>
    c.score !== o.score
      ? o.score - c.score
      : xy(
          c.routesMeta.map((f) => f.childrenIndex),
          o.routesMeta.map((f) => f.childrenIndex),
        ),
  );
}
const vy = /^:[\w-]+$/,
  yy = 3,
  gy = 2,
  py = 1,
  by = 10,
  Sy = -2,
  Qh = (i) => i === "*";
function Ey(i, c) {
  let o = i.split("/"),
    f = o.length;
  return (
    o.some(Qh) && (f += Sy),
    c && (f += gy),
    o
      .filter((d) => !Qh(d))
      .reduce((d, v) => d + (vy.test(v) ? yy : v === "" ? py : by), f)
  );
}
function xy(i, c) {
  return i.length === c.length && i.slice(0, -1).every((f, d) => f === c[d])
    ? i[i.length - 1] - c[c.length - 1]
    : 0;
}
function Ty(i, c, o) {
  o === void 0 && (o = !1);
  let { routesMeta: f } = i,
    d = {},
    v = "/",
    y = [];
  for (let z = 0; z < f.length; ++z) {
    let p = f[z],
      m = z === f.length - 1,
      R = v === "/" ? c : c.slice(v.length) || "/",
      T = Zh(
        { path: p.relativePath, caseSensitive: p.caseSensitive, end: m },
        R,
      ),
      w = p.route;
    if (
      (!T &&
        m &&
        o &&
        !f[f.length - 1].route.index &&
        (T = Zh(
          { path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
          R,
        )),
      !T)
    )
      return null;
    Object.assign(d, T.params),
      y.push({
        params: d,
        pathname: ya([v, T.pathname]),
        pathnameBase: _y(ya([v, T.pathnameBase])),
        route: w,
      }),
      T.pathnameBase !== "/" && (v = ya([v, T.pathnameBase]));
  }
  return y;
}
function Zh(i, c) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [o, f] = zy(i.path, i.caseSensitive, i.end),
    d = c.match(o);
  if (!d) return null;
  let v = d[0],
    y = v.replace(/(.)\/+$/, "$1"),
    z = d.slice(1);
  return {
    params: f.reduce((m, R, T) => {
      let { paramName: w, isOptional: G } = R;
      if (w === "*") {
        let J = z[T] || "";
        y = v.slice(0, v.length - J.length).replace(/(.)\/+$/, "$1");
      }
      const W = z[T];
      return (
        G && !W ? (m[w] = void 0) : (m[w] = (W || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: v,
    pathnameBase: y,
    pattern: i,
  };
}
function zy(i, c, o) {
  c === void 0 && (c = !1),
    o === void 0 && (o = !0),
    Un(
      i === "*" || !i.endsWith("*") || i.endsWith("/*"),
      'Route path "' +
        i +
        '" will be treated as if it were ' +
        ('"' + i.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + i.replace(/\*$/, "/*") + '".'),
    );
  let f = [],
    d =
      "^" +
      i
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (y, z, p) => (
            f.push({ paramName: z, isOptional: p != null }),
            p ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    i.endsWith("*")
      ? (f.push({ paramName: "*" }),
        (d += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : o
        ? (d += "\\/*$")
        : i !== "" && i !== "/" && (d += "(?:(?=\\/|$))"),
    [new RegExp(d, c ? void 0 : "i"), f]
  );
}
function My(i) {
  try {
    return i
      .split("/")
      .map((c) => decodeURIComponent(c).replace(/\//g, "%2F"))
      .join("/");
  } catch (c) {
    return (
      Un(
        !1,
        'The URL path "' +
          i +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + c + ")."),
      ),
      i
    );
  }
}
function wu(i, c) {
  if (c === "/") return i;
  if (!i.toLowerCase().startsWith(c.toLowerCase())) return null;
  let o = c.endsWith("/") ? c.length - 1 : c.length,
    f = i.charAt(o);
  return f && f !== "/" ? null : i.slice(o) || "/";
}
function Dy(i, c) {
  c === void 0 && (c = "/");
  let {
    pathname: o,
    search: f = "",
    hash: d = "",
  } = typeof i == "string" ? ga(i) : i;
  return {
    pathname: o ? (o.startsWith("/") ? o : Ay(o, c)) : c,
    search: Ry(f),
    hash: Oy(d),
  };
}
function Ay(i, c) {
  let o = c.replace(/\/+$/, "").split("/");
  return (
    i.split("/").forEach((d) => {
      d === ".." ? o.length > 1 && o.pop() : d !== "." && o.push(d);
    }),
    o.length > 1 ? o.join("/") : "/"
  );
}
function Rf(i, c, o, f) {
  return (
    "Cannot include a '" +
    i +
    "' character in a manually specified " +
    ("`to." +
      c +
      "` field [" +
      JSON.stringify(f) +
      "].  Please separate it out to the ") +
    ("`to." + o + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function g0(i) {
  return i.filter(
    (c, o) => o === 0 || (c.route.path && c.route.path.length > 0),
  );
}
function p0(i, c) {
  let o = g0(i);
  return c
    ? o.map((f, d) => (d === o.length - 1 ? f.pathname : f.pathnameBase))
    : o.map((f) => f.pathnameBase);
}
function b0(i, c, o, f) {
  f === void 0 && (f = !1);
  let d;
  typeof i == "string"
    ? (d = ga(i))
    : ((d = Ie({}, i)),
      Ae(
        !d.pathname || !d.pathname.includes("?"),
        Rf("?", "pathname", "search", d),
      ),
      Ae(
        !d.pathname || !d.pathname.includes("#"),
        Rf("#", "pathname", "hash", d),
      ),
      Ae(!d.search || !d.search.includes("#"), Rf("#", "search", "hash", d)));
  let v = i === "" || d.pathname === "",
    y = v ? "/" : d.pathname,
    z;
  if (y == null) z = o;
  else {
    let T = c.length - 1;
    if (!f && y.startsWith("..")) {
      let w = y.split("/");
      for (; w[0] === ".."; ) w.shift(), (T -= 1);
      d.pathname = w.join("/");
    }
    z = T >= 0 ? c[T] : "/";
  }
  let p = Dy(d, z),
    m = y && y !== "/" && y.endsWith("/"),
    R = (v || y === ".") && o.endsWith("/");
  return !p.pathname.endsWith("/") && (m || R) && (p.pathname += "/"), p;
}
const ya = (i) => i.join("/").replace(/\/\/+/g, "/"),
  _y = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Ry = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
  Oy = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i);
class er {
  constructor(c, o, f, d) {
    d === void 0 && (d = !1),
      (this.status = c),
      (this.statusText = o || ""),
      (this.internal = d),
      f instanceof Error
        ? ((this.data = f.toString()), (this.error = f))
        : (this.data = f);
  }
}
function ju(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.internal == "boolean" &&
    "data" in i
  );
}
const S0 = ["post", "put", "patch", "delete"],
  Ny = new Set(S0),
  Uy = ["get", ...S0],
  Cy = new Set(Uy),
  jy = new Set([301, 302, 303, 307, 308]),
  Hy = new Set([307, 308]),
  Of = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  wy = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ru = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Bf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  By = (i) => ({ hasErrorBoundary: !!i.hasErrorBoundary }),
  E0 = "remix-router-transitions";
function Ly(i) {
  const c = i.window
      ? i.window
      : typeof window != "undefined"
        ? window
        : void 0,
    o =
      typeof c != "undefined" &&
      typeof c.document != "undefined" &&
      typeof c.document.createElement != "undefined",
    f = !o;
  Ae(
    i.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let d;
  if (i.mapRouteProperties) d = i.mapRouteProperties;
  else if (i.detectErrorBoundary) {
    let g = i.detectErrorBoundary;
    d = (x) => ({ hasErrorBoundary: g(x) });
  } else d = By;
  let v = {},
    y = Pi(i.routes, d, void 0, v),
    z,
    p = i.basename || "/",
    m = i.dataStrategy || Xy,
    R = i.patchRoutesOnNavigation,
    T = Ie(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      i.future,
    ),
    w = null,
    G = new Set(),
    W = null,
    J = null,
    te = null,
    de = i.hydrationData != null,
    ie = Xa(y, i.history.location, p),
    ge = !1,
    je = null;
  if (ie == null && !R) {
    let g = Bt(404, { pathname: i.history.location.pathname }),
      { matches: x, route: O } = t0(y);
    (ie = x), (je = { [O.id]: g });
  }
  ie &&
    !i.hydrationData &&
    Ta(ie, y, i.history.location.pathname).active &&
    (ie = null);
  let He;
  if (ie)
    if (ie.some((g) => g.route.lazy)) He = !1;
    else if (!ie.some((g) => g.route.loader)) He = !0;
    else if (T.v7_partialHydration) {
      let g = i.hydrationData ? i.hydrationData.loaderData : null,
        x = i.hydrationData ? i.hydrationData.errors : null;
      if (x) {
        let O = ie.findIndex((Y) => x[Y.route.id] !== void 0);
        He = ie.slice(0, O + 1).every((Y) => !Cf(Y.route, g, x));
      } else He = ie.every((O) => !Cf(O.route, g, x));
    } else He = i.hydrationData != null;
  else if (((He = !1), (ie = []), T.v7_partialHydration)) {
    let g = Ta(null, y, i.history.location.pathname);
    g.active && g.matches && ((ge = !0), (ie = g.matches));
  }
  let et,
    A = {
      historyAction: i.history.action,
      location: i.history.location,
      matches: ie,
      initialized: He,
      navigation: Of,
      restoreScrollPosition: i.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (i.hydrationData && i.hydrationData.loaderData) || {},
      actionData: (i.hydrationData && i.hydrationData.actionData) || null,
      errors: (i.hydrationData && i.hydrationData.errors) || je,
      fetchers: new Map(),
      blockers: new Map(),
    },
    le = mt.Pop,
    ze = !1,
    he,
    Qe = !1,
    Me = new Map(),
    nt = null,
    Fe = !1,
    ut = !1,
    U = [],
    Q = new Set(),
    $ = new Map(),
    Re = 0,
    Oe = -1,
    S = new Map(),
    j = new Set(),
    X = new Map(),
    F = new Map(),
    ue = new Set(),
    fe = new Map(),
    ye = new Map(),
    ft;
  function Pe() {
    if (
      ((w = i.history.listen((g) => {
        let { action: x, location: O, delta: Y } = g;
        if (ft) {
          ft(), (ft = void 0);
          return;
        }
        Un(
          ye.size === 0 || Y != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let Z = Sa({
          currentLocation: A.location,
          nextLocation: O,
          historyAction: x,
        });
        if (Z && Y != null) {
          let ae = new Promise((ce) => {
            ft = ce;
          });
          i.history.go(Y * -1),
            Wa(Z, {
              state: "blocked",
              location: O,
              proceed() {
                Wa(Z, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: O,
                }),
                  ae.then(() => i.history.go(Y));
              },
              reset() {
                let ce = new Map(A.blockers);
                ce.set(Z, Ru), vt({ blockers: ce });
              },
            });
          return;
        }
        return il(x, O);
      })),
      o)
    ) {
      lg(c, Me);
      let g = () => ag(c, Me);
      c.addEventListener("pagehide", g),
        (nt = () => c.removeEventListener("pagehide", g));
    }
    return (
      A.initialized || il(mt.Pop, A.location, { initialHydration: !0 }), et
    );
  }
  function pa() {
    w && w(),
      nt && nt(),
      G.clear(),
      he && he.abort(),
      A.fetchers.forEach((g, x) => ka(x)),
      A.blockers.forEach((g, x) => Lu(x));
  }
  function Va(g) {
    return G.add(g), () => G.delete(g);
  }
  function vt(g, x) {
    x === void 0 && (x = {}), (A = Ie({}, A, g));
    let O = [],
      Y = [];
    T.v7_fetcherPersist &&
      A.fetchers.forEach((Z, ae) => {
        Z.state === "idle" && (ue.has(ae) ? Y.push(ae) : O.push(ae));
      }),
      ue.forEach((Z) => {
        !A.fetchers.has(Z) && !$.has(Z) && Y.push(Z);
      }),
      [...G].forEach((Z) =>
        Z(A, {
          deletedFetchers: Y,
          viewTransitionOpts: x.viewTransitionOpts,
          flushSync: x.flushSync === !0,
        }),
      ),
      T.v7_fetcherPersist
        ? (O.forEach((Z) => A.fetchers.delete(Z)), Y.forEach((Z) => ka(Z)))
        : Y.forEach((Z) => ue.delete(Z));
  }
  function El(g, x, O) {
    var Y, Z;
    let { flushSync: ae } = O === void 0 ? {} : O,
      ce =
        A.actionData != null &&
        A.navigation.formMethod != null &&
        ml(A.navigation.formMethod) &&
        A.navigation.state === "loading" &&
        ((Y = g.state) == null ? void 0 : Y._isRedirect) !== !0,
      k;
    x.actionData
      ? Object.keys(x.actionData).length > 0
        ? (k = x.actionData)
        : (k = null)
      : ce
        ? (k = A.actionData)
        : (k = null);
    let K = x.loaderData
        ? Ph(A.loaderData, x.loaderData, x.matches || [], x.errors)
        : A.loaderData,
      V = A.blockers;
    V.size > 0 && ((V = new Map(V)), V.forEach((Ee, yt) => V.set(yt, Ru)));
    let P =
      ze === !0 ||
      (A.navigation.formMethod != null &&
        ml(A.navigation.formMethod) &&
        ((Z = g.state) == null ? void 0 : Z._isRedirect) !== !0);
    z && ((y = z), (z = void 0)),
      Fe ||
        le === mt.Pop ||
        (le === mt.Push
          ? i.history.push(g, g.state)
          : le === mt.Replace && i.history.replace(g, g.state));
    let oe;
    if (le === mt.Pop) {
      let Ee = Me.get(A.location.pathname);
      Ee && Ee.has(g.pathname)
        ? (oe = { currentLocation: A.location, nextLocation: g })
        : Me.has(g.pathname) &&
          (oe = { currentLocation: g, nextLocation: A.location });
    } else if (Qe) {
      let Ee = Me.get(A.location.pathname);
      Ee
        ? Ee.add(g.pathname)
        : ((Ee = new Set([g.pathname])), Me.set(A.location.pathname, Ee)),
        (oe = { currentLocation: A.location, nextLocation: g });
    }
    vt(
      Ie({}, x, {
        actionData: k,
        loaderData: K,
        historyAction: le,
        location: g,
        initialized: !0,
        navigation: Of,
        revalidation: "idle",
        restoreScrollPosition: Yu(g, x.matches || A.matches),
        preventScrollReset: P,
        blockers: V,
      }),
      { viewTransitionOpts: oe, flushSync: ae === !0 },
    ),
      (le = mt.Pop),
      (ze = !1),
      (Qe = !1),
      (Fe = !1),
      (ut = !1),
      (U = []);
  }
  async function vl(g, x) {
    if (typeof g == "number") {
      i.history.go(g);
      return;
    }
    let O = Uf(
        A.location,
        A.matches,
        p,
        T.v7_prependBasename,
        g,
        T.v7_relativeSplatPath,
        x == null ? void 0 : x.fromRouteId,
        x == null ? void 0 : x.relative,
      ),
      {
        path: Y,
        submission: Z,
        error: ae,
      } = Vh(T.v7_normalizeFormMethod, !1, O, x),
      ce = A.location,
      k = Cu(A.location, Y, x && x.state);
    k = Ie({}, k, i.history.encodeLocation(k));
    let K = x && x.replace != null ? x.replace : void 0,
      V = mt.Push;
    K === !0
      ? (V = mt.Replace)
      : K === !1 ||
        (Z != null &&
          ml(Z.formMethod) &&
          Z.formAction === A.location.pathname + A.location.search &&
          (V = mt.Replace));
    let P =
        x && "preventScrollReset" in x ? x.preventScrollReset === !0 : void 0,
      oe = (x && x.flushSync) === !0,
      Ee = Sa({ currentLocation: ce, nextLocation: k, historyAction: V });
    if (Ee) {
      Wa(Ee, {
        state: "blocked",
        location: k,
        proceed() {
          Wa(Ee, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: k,
          }),
            vl(g, x);
        },
        reset() {
          let yt = new Map(A.blockers);
          yt.set(Ee, Ru), vt({ blockers: yt });
        },
      });
      return;
    }
    return await il(V, k, {
      submission: Z,
      pendingError: ae,
      preventScrollReset: P,
      replace: x && x.replace,
      enableViewTransition: x && x.viewTransition,
      flushSync: oe,
    });
  }
  function jn() {
    if (
      (Ja(),
      vt({ revalidation: "loading" }),
      A.navigation.state !== "submitting")
    ) {
      if (A.navigation.state === "idle") {
        il(A.historyAction, A.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      il(le || A.historyAction, A.navigation.location, {
        overrideNavigation: A.navigation,
        enableViewTransition: Qe === !0,
      });
    }
  }
  async function il(g, x, O) {
    he && he.abort(),
      (he = null),
      (le = g),
      (Fe = (O && O.startUninterruptedRevalidation) === !0),
      xa(A.location, A.matches),
      (ze = (O && O.preventScrollReset) === !0),
      (Qe = (O && O.enableViewTransition) === !0);
    let Y = z || y,
      Z = O && O.overrideNavigation,
      ae =
        O != null &&
        O.initialHydration &&
        A.matches &&
        A.matches.length > 0 &&
        !ge
          ? A.matches
          : Xa(Y, x, p),
      ce = (O && O.flushSync) === !0;
    if (
      ae &&
      A.initialized &&
      !ut &&
      ky(A.location, x) &&
      !(O && O.submission && ml(O.submission.formMethod))
    ) {
      El(x, { matches: ae }, { flushSync: ce });
      return;
    }
    let k = Ta(ae, Y, x.pathname);
    if ((k.active && k.matches && (ae = k.matches), !ae)) {
      let { error: we, notFoundMatches: pe, route: Ve } = Gl(x.pathname);
      El(
        x,
        { matches: pe, loaderData: {}, errors: { [Ve.id]: we } },
        { flushSync: ce },
      );
      return;
    }
    he = new AbortController();
    let K = Nn(i.history, x, he.signal, O && O.submission),
      V;
    if (O && O.pendingError)
      V = [Qa(ae).route.id, { type: Ye.error, error: O.pendingError }];
    else if (O && O.submission && ml(O.submission.formMethod)) {
      let we = await rr(K, x, O.submission, ae, k.active, {
        replace: O.replace,
        flushSync: ce,
      });
      if (we.shortCircuited) return;
      if (we.pendingActionResult) {
        let [pe, Ve] = we.pendingActionResult;
        if (Jt(Ve) && ju(Ve.error) && Ve.error.status === 404) {
          (he = null),
            El(x, {
              matches: we.matches,
              loaderData: {},
              errors: { [pe]: Ve.error },
            });
          return;
        }
      }
      (ae = we.matches || ae),
        (V = we.pendingActionResult),
        (Z = Nf(x, O.submission)),
        (ce = !1),
        (k.active = !1),
        (K = Nn(i.history, K.url, K.signal));
    }
    let {
      shortCircuited: P,
      matches: oe,
      loaderData: Ee,
      errors: yt,
    } = await Bu(
      K,
      x,
      ae,
      k.active,
      Z,
      O && O.submission,
      O && O.fetcherSubmission,
      O && O.replace,
      O && O.initialHydration === !0,
      ce,
      V,
    );
    P ||
      ((he = null),
      El(x, Ie({ matches: oe || ae }, e0(V), { loaderData: Ee, errors: yt })));
  }
  async function rr(g, x, O, Y, Z, ae) {
    ae === void 0 && (ae = {}), Ja();
    let ce = eg(x, O);
    if ((vt({ navigation: ce }, { flushSync: ae.flushSync === !0 }), Z)) {
      let V = await Ql(Y, x.pathname, g.signal);
      if (V.type === "aborted") return { shortCircuited: !0 };
      if (V.type === "error") {
        let P = Qa(V.partialMatches).route.id;
        return {
          matches: V.partialMatches,
          pendingActionResult: [P, { type: Ye.error, error: V.error }],
        };
      } else if (V.matches) Y = V.matches;
      else {
        let { notFoundMatches: P, error: oe, route: Ee } = Gl(x.pathname);
        return {
          matches: P,
          pendingActionResult: [Ee.id, { type: Ye.error, error: oe }],
        };
      }
    }
    let k,
      K = Uu(Y, x);
    if (!K.route.action && !K.route.lazy)
      k = {
        type: Ye.error,
        error: Bt(405, {
          method: g.method,
          pathname: x.pathname,
          routeId: K.route.id,
        }),
      };
    else if (
      ((k = (await ba("action", A, g, [K], Y, null))[K.route.id]),
      g.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Za(k)) {
      let V;
      return (
        ae && ae.replace != null
          ? (V = ae.replace)
          : (V =
              Fh(k.response.headers.get("Location"), new URL(g.url), p) ===
              A.location.pathname + A.location.search),
        await it(g, k, !0, { submission: O, replace: V }),
        { shortCircuited: !0 }
      );
    }
    if (va(k)) throw Bt(400, { type: "defer-action" });
    if (Jt(k)) {
      let V = Qa(Y, K.route.id);
      return (
        (ae && ae.replace) !== !0 && (le = mt.Push),
        { matches: Y, pendingActionResult: [V.route.id, k] }
      );
    }
    return { matches: Y, pendingActionResult: [K.route.id, k] };
  }
  async function Bu(g, x, O, Y, Z, ae, ce, k, K, V, P) {
    let oe = Z || Nf(x, ae),
      Ee = ae || ce || a0(oe),
      yt = !Fe && (!T.v7_partialHydration || !K);
    if (Y) {
      if (yt) {
        let Ke = Ka(P);
        vt(Ie({ navigation: oe }, Ke !== void 0 ? { actionData: Ke } : {}), {
          flushSync: V,
        });
      }
      let _e = await Ql(O, x.pathname, g.signal);
      if (_e.type === "aborted") return { shortCircuited: !0 };
      if (_e.type === "error") {
        let Ke = Qa(_e.partialMatches).route.id;
        return {
          matches: _e.partialMatches,
          loaderData: {},
          errors: { [Ke]: _e.error },
        };
      } else if (_e.matches) O = _e.matches;
      else {
        let { error: Ke, notFoundMatches: Tl, route: Ma } = Gl(x.pathname);
        return { matches: Tl, loaderData: {}, errors: { [Ma.id]: Ke } };
      }
    }
    let we = z || y,
      [pe, Ve] = Jh(
        i.history,
        A,
        O,
        Ee,
        x,
        T.v7_partialHydration && K === !0,
        T.v7_skipActionErrorRevalidation,
        ut,
        U,
        Q,
        ue,
        X,
        j,
        we,
        p,
        P,
      );
    if (
      (Xl(
        (_e) =>
          !(O && O.some((Ke) => Ke.route.id === _e)) ||
          (pe && pe.some((Ke) => Ke.route.id === _e)),
      ),
      (Oe = ++Re),
      pe.length === 0 && Ve.length === 0)
    ) {
      let _e = cl();
      return (
        El(
          x,
          Ie(
            {
              matches: O,
              loaderData: {},
              errors: P && Jt(P[1]) ? { [P[0]]: P[1].error } : null,
            },
            e0(P),
            _e ? { fetchers: new Map(A.fetchers) } : {},
          ),
          { flushSync: V },
        ),
        { shortCircuited: !0 }
      );
    }
    if (yt) {
      let _e = {};
      if (!Y) {
        _e.navigation = oe;
        let Ke = Ka(P);
        Ke !== void 0 && (_e.actionData = Ke);
      }
      Ve.length > 0 && (_e.fetchers = Hn(Ve)), vt(_e, { flushSync: V });
    }
    Ve.forEach((_e) => {
      Rt(_e.key), _e.controller && $.set(_e.key, _e.controller);
    });
    let Yt = () => Ve.forEach((_e) => Rt(_e.key));
    he && he.signal.addEventListener("abort", Yt);
    let { loaderResults: kt, fetcherResults: At } = await Bn(A, O, pe, Ve, g);
    if (g.signal.aborted) return { shortCircuited: !0 };
    he && he.signal.removeEventListener("abort", Yt),
      Ve.forEach((_e) => $.delete(_e.key));
    let bt = $i(kt);
    if (bt)
      return await it(g, bt.result, !0, { replace: k }), { shortCircuited: !0 };
    if (((bt = $i(At)), bt))
      return (
        j.add(bt.key),
        await it(g, bt.result, !0, { replace: k }),
        { shortCircuited: !0 }
      );
    let { loaderData: tt, errors: Zl } = Ih(A, O, kt, P, Ve, At, fe);
    fe.forEach((_e, Ke) => {
      _e.subscribe((Tl) => {
        (Tl || _e.done) && fe.delete(Ke);
      });
    }),
      T.v7_partialHydration && K && A.errors && (Zl = Ie({}, A.errors, Zl));
    let yl = cl(),
      Wt = Mt(Oe),
      fl = yl || Wt || Ve.length > 0;
    return Ie(
      { matches: O, loaderData: tt, errors: Zl },
      fl ? { fetchers: new Map(A.fetchers) } : {},
    );
  }
  function Ka(g) {
    if (g && !Jt(g[1])) return { [g[0]]: g[1].data };
    if (A.actionData)
      return Object.keys(A.actionData).length === 0 ? null : A.actionData;
  }
  function Hn(g) {
    return (
      g.forEach((x) => {
        let O = A.fetchers.get(x.key),
          Y = Ou(void 0, O ? O.data : void 0);
        A.fetchers.set(x.key, Y);
      }),
      new Map(A.fetchers)
    );
  }
  function wn(g, x, O, Y) {
    if (f)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    Rt(g);
    let Z = (Y && Y.flushSync) === !0,
      ae = z || y,
      ce = Uf(
        A.location,
        A.matches,
        p,
        T.v7_prependBasename,
        O,
        T.v7_relativeSplatPath,
        x,
        Y == null ? void 0 : Y.relative,
      ),
      k = Xa(ae, ce, p),
      K = Ta(k, ae, ce);
    if ((K.active && K.matches && (k = K.matches), !k)) {
      rl(g, x, Bt(404, { pathname: ce }), { flushSync: Z });
      return;
    }
    let {
      path: V,
      submission: P,
      error: oe,
    } = Vh(T.v7_normalizeFormMethod, !0, ce, Y);
    if (oe) {
      rl(g, x, oe, { flushSync: Z });
      return;
    }
    let Ee = Uu(k, V),
      yt = (Y && Y.preventScrollReset) === !0;
    if (P && ml(P.formMethod)) {
      cr(g, x, V, Ee, k, K.active, Z, yt, P);
      return;
    }
    X.set(g, { routeId: x, path: V }), fr(g, x, V, Ee, k, K.active, Z, yt, P);
  }
  async function cr(g, x, O, Y, Z, ae, ce, k, K) {
    Ja(), X.delete(g);
    function V(Je) {
      if (!Je.route.action && !Je.route.lazy) {
        let ol = Bt(405, { method: K.formMethod, pathname: O, routeId: x });
        return rl(g, x, ol, { flushSync: ce }), !0;
      }
      return !1;
    }
    if (!ae && V(Y)) return;
    let P = A.fetchers.get(g);
    Lt(g, tg(K, P), { flushSync: ce });
    let oe = new AbortController(),
      Ee = Nn(i.history, O, oe.signal, K);
    if (ae) {
      let Je = await Ql(Z, new URL(Ee.url).pathname, Ee.signal, g);
      if (Je.type === "aborted") return;
      if (Je.type === "error") {
        rl(g, x, Je.error, { flushSync: ce });
        return;
      } else if (Je.matches) {
        if (((Z = Je.matches), (Y = Uu(Z, O)), V(Y))) return;
      } else {
        rl(g, x, Bt(404, { pathname: O }), { flushSync: ce });
        return;
      }
    }
    $.set(g, oe);
    let yt = Re,
      pe = (await ba("action", A, Ee, [Y], Z, g))[Y.route.id];
    if (Ee.signal.aborted) {
      $.get(g) === oe && $.delete(g);
      return;
    }
    if (T.v7_fetcherPersist && ue.has(g)) {
      if (Za(pe) || Jt(pe)) {
        Lt(g, ma(void 0));
        return;
      }
    } else {
      if (Za(pe))
        if (($.delete(g), Oe > yt)) {
          Lt(g, ma(void 0));
          return;
        } else
          return (
            j.add(g),
            Lt(g, Ou(K)),
            it(Ee, pe, !1, { fetcherSubmission: K, preventScrollReset: k })
          );
      if (Jt(pe)) {
        rl(g, x, pe.error);
        return;
      }
    }
    if (va(pe)) throw Bt(400, { type: "defer-action" });
    let Ve = A.navigation.location || A.location,
      Yt = Nn(i.history, Ve, oe.signal),
      kt = z || y,
      At =
        A.navigation.state !== "idle"
          ? Xa(kt, A.navigation.location, p)
          : A.matches;
    Ae(At, "Didn't find any matches after fetcher action");
    let bt = ++Re;
    S.set(g, bt);
    let tt = Ou(K, pe.data);
    A.fetchers.set(g, tt);
    let [Zl, yl] = Jh(
      i.history,
      A,
      At,
      K,
      Ve,
      !1,
      T.v7_skipActionErrorRevalidation,
      ut,
      U,
      Q,
      ue,
      X,
      j,
      kt,
      p,
      [Y.route.id, pe],
    );
    yl
      .filter((Je) => Je.key !== g)
      .forEach((Je) => {
        let ol = Je.key,
          Ft = A.fetchers.get(ol),
          Ot = Ou(void 0, Ft ? Ft.data : void 0);
        A.fetchers.set(ol, Ot),
          Rt(ol),
          Je.controller && $.set(ol, Je.controller);
      }),
      vt({ fetchers: new Map(A.fetchers) });
    let Wt = () => yl.forEach((Je) => Rt(Je.key));
    oe.signal.addEventListener("abort", Wt);
    let { loaderResults: fl, fetcherResults: _e } = await Bn(A, At, Zl, yl, Yt);
    if (oe.signal.aborted) return;
    oe.signal.removeEventListener("abort", Wt),
      S.delete(g),
      $.delete(g),
      yl.forEach((Je) => $.delete(Je.key));
    let Ke = $i(fl);
    if (Ke) return it(Yt, Ke.result, !1, { preventScrollReset: k });
    if (((Ke = $i(_e)), Ke))
      return j.add(Ke.key), it(Yt, Ke.result, !1, { preventScrollReset: k });
    let { loaderData: Tl, errors: Ma } = Ih(A, At, fl, void 0, yl, _e, fe);
    if (A.fetchers.has(g)) {
      let Je = ma(pe.data);
      A.fetchers.set(g, Je);
    }
    Mt(bt),
      A.navigation.state === "loading" && bt > Oe
        ? (Ae(le, "Expected pending action"),
          he && he.abort(),
          El(A.navigation.location, {
            matches: At,
            loaderData: Tl,
            errors: Ma,
            fetchers: new Map(A.fetchers),
          }))
        : (vt({
            errors: Ma,
            loaderData: Ph(A.loaderData, Tl, At, Ma),
            fetchers: new Map(A.fetchers),
          }),
          (ut = !1));
  }
  async function fr(g, x, O, Y, Z, ae, ce, k, K) {
    let V = A.fetchers.get(g);
    Lt(g, Ou(K, V ? V.data : void 0), { flushSync: ce });
    let P = new AbortController(),
      oe = Nn(i.history, O, P.signal);
    if (ae) {
      let pe = await Ql(Z, new URL(oe.url).pathname, oe.signal, g);
      if (pe.type === "aborted") return;
      if (pe.type === "error") {
        rl(g, x, pe.error, { flushSync: ce });
        return;
      } else if (pe.matches) (Z = pe.matches), (Y = Uu(Z, O));
      else {
        rl(g, x, Bt(404, { pathname: O }), { flushSync: ce });
        return;
      }
    }
    $.set(g, P);
    let Ee = Re,
      we = (await ba("loader", A, oe, [Y], Z, g))[Y.route.id];
    if (
      (va(we) && (we = (await Lf(we, oe.signal, !0)) || we),
      $.get(g) === P && $.delete(g),
      !oe.signal.aborted)
    ) {
      if (ue.has(g)) {
        Lt(g, ma(void 0));
        return;
      }
      if (Za(we))
        if (Oe > Ee) {
          Lt(g, ma(void 0));
          return;
        } else {
          j.add(g), await it(oe, we, !1, { preventScrollReset: k });
          return;
        }
      if (Jt(we)) {
        rl(g, x, we.error);
        return;
      }
      Ae(!va(we), "Unhandled fetcher deferred data"), Lt(g, ma(we.data));
    }
  }
  async function it(g, x, O, Y) {
    let {
      submission: Z,
      fetcherSubmission: ae,
      preventScrollReset: ce,
      replace: k,
    } = Y === void 0 ? {} : Y;
    x.response.headers.has("X-Remix-Revalidate") && (ut = !0);
    let K = x.response.headers.get("Location");
    Ae(K, "Expected a Location header on the redirect Response"),
      (K = Fh(K, new URL(g.url), p));
    let V = Cu(A.location, K, { _isRedirect: !0 });
    if (o) {
      let pe = !1;
      if (x.response.headers.has("X-Remix-Reload-Document")) pe = !0;
      else if (Bf.test(K)) {
        const Ve = i.history.createURL(K);
        pe = Ve.origin !== c.location.origin || wu(Ve.pathname, p) == null;
      }
      if (pe) {
        k ? c.location.replace(K) : c.location.assign(K);
        return;
      }
    }
    he = null;
    let P =
        k === !0 || x.response.headers.has("X-Remix-Replace")
          ? mt.Replace
          : mt.Push,
      { formMethod: oe, formAction: Ee, formEncType: yt } = A.navigation;
    !Z && !ae && oe && Ee && yt && (Z = a0(A.navigation));
    let we = Z || ae;
    if (Hy.has(x.response.status) && we && ml(we.formMethod))
      await il(P, V, {
        submission: Ie({}, we, { formAction: K }),
        preventScrollReset: ce || ze,
        enableViewTransition: O ? Qe : void 0,
      });
    else {
      let pe = Nf(V, Z);
      await il(P, V, {
        overrideNavigation: pe,
        fetcherSubmission: ae,
        preventScrollReset: ce || ze,
        enableViewTransition: O ? Qe : void 0,
      });
    }
  }
  async function ba(g, x, O, Y, Z, ae) {
    let ce,
      k = {};
    try {
      ce = await Qy(m, g, x, O, Y, Z, ae, v, d);
    } catch (K) {
      return (
        Y.forEach((V) => {
          k[V.route.id] = { type: Ye.error, error: K };
        }),
        k
      );
    }
    for (let [K, V] of Object.entries(ce))
      if (Wy(V)) {
        let P = V.result;
        k[K] = {
          type: Ye.redirect,
          response: Ky(P, O, K, Z, p, T.v7_relativeSplatPath),
        };
      } else k[K] = await Vy(V);
    return k;
  }
  async function Bn(g, x, O, Y, Z) {
    let ae = g.matches,
      ce = ba("loader", g, Z, O, x, null),
      k = Promise.all(
        Y.map(async (P) => {
          if (P.matches && P.match && P.controller) {
            let Ee = (
              await ba(
                "loader",
                g,
                Nn(i.history, P.path, P.controller.signal),
                [P.match],
                P.matches,
                P.key,
              )
            )[P.match.route.id];
            return { [P.key]: Ee };
          } else
            return Promise.resolve({
              [P.key]: { type: Ye.error, error: Bt(404, { pathname: P.path }) },
            });
        }),
      ),
      K = await ce,
      V = (await k).reduce((P, oe) => Object.assign(P, oe), {});
    return (
      await Promise.all([Iy(x, K, Z.signal, ae, g.loaderData), Py(x, V, Y)]),
      { loaderResults: K, fetcherResults: V }
    );
  }
  function Ja() {
    (ut = !0),
      U.push(...Xl()),
      X.forEach((g, x) => {
        $.has(x) && Q.add(x), Rt(x);
      });
  }
  function Lt(g, x, O) {
    O === void 0 && (O = {}),
      A.fetchers.set(g, x),
      vt(
        { fetchers: new Map(A.fetchers) },
        { flushSync: (O && O.flushSync) === !0 },
      );
  }
  function rl(g, x, O, Y) {
    Y === void 0 && (Y = {});
    let Z = Qa(A.matches, x);
    ka(g),
      vt(
        { errors: { [Z.route.id]: O }, fetchers: new Map(A.fetchers) },
        { flushSync: (Y && Y.flushSync) === !0 },
      );
  }
  function Ln(g) {
    return (
      F.set(g, (F.get(g) || 0) + 1),
      ue.has(g) && ue.delete(g),
      A.fetchers.get(g) || wy
    );
  }
  function ka(g) {
    let x = A.fetchers.get(g);
    $.has(g) && !(x && x.state === "loading" && S.has(g)) && Rt(g),
      X.delete(g),
      S.delete(g),
      j.delete(g),
      T.v7_fetcherPersist && ue.delete(g),
      Q.delete(g),
      A.fetchers.delete(g);
  }
  function or(g) {
    let x = (F.get(g) || 0) - 1;
    x <= 0
      ? (F.delete(g), ue.add(g), T.v7_fetcherPersist || ka(g))
      : F.set(g, x),
      vt({ fetchers: new Map(A.fetchers) });
  }
  function Rt(g) {
    let x = $.get(g);
    x && (x.abort(), $.delete(g));
  }
  function zt(g) {
    for (let x of g) {
      let O = Ln(x),
        Y = ma(O.data);
      A.fetchers.set(x, Y);
    }
  }
  function cl() {
    let g = [],
      x = !1;
    for (let O of j) {
      let Y = A.fetchers.get(O);
      Ae(Y, "Expected fetcher: " + O),
        Y.state === "loading" && (j.delete(O), g.push(O), (x = !0));
    }
    return zt(g), x;
  }
  function Mt(g) {
    let x = [];
    for (let [O, Y] of S)
      if (Y < g) {
        let Z = A.fetchers.get(O);
        Ae(Z, "Expected fetcher: " + O),
          Z.state === "loading" && (Rt(O), S.delete(O), x.push(O));
      }
    return zt(x), x.length > 0;
  }
  function sr(g, x) {
    let O = A.blockers.get(g) || Ru;
    return ye.get(g) !== x && ye.set(g, x), O;
  }
  function Lu(g) {
    A.blockers.delete(g), ye.delete(g);
  }
  function Wa(g, x) {
    let O = A.blockers.get(g) || Ru;
    Ae(
      (O.state === "unblocked" && x.state === "blocked") ||
        (O.state === "blocked" && x.state === "blocked") ||
        (O.state === "blocked" && x.state === "proceeding") ||
        (O.state === "blocked" && x.state === "unblocked") ||
        (O.state === "proceeding" && x.state === "unblocked"),
      "Invalid blocker state transition: " + O.state + " -> " + x.state,
    );
    let Y = new Map(A.blockers);
    Y.set(g, x), vt({ blockers: Y });
  }
  function Sa(g) {
    let { currentLocation: x, nextLocation: O, historyAction: Y } = g;
    if (ye.size === 0) return;
    ye.size > 1 && Un(!1, "A router only supports one blocker at a time");
    let Z = Array.from(ye.entries()),
      [ae, ce] = Z[Z.length - 1],
      k = A.blockers.get(ae);
    if (
      !(k && k.state === "proceeding") &&
      ce({ currentLocation: x, nextLocation: O, historyAction: Y })
    )
      return ae;
  }
  function Gl(g) {
    let x = Bt(404, { pathname: g }),
      O = z || y,
      { matches: Y, route: Z } = t0(O);
    return Xl(), { notFoundMatches: Y, route: Z, error: x };
  }
  function Xl(g) {
    let x = [];
    return (
      fe.forEach((O, Y) => {
        (!g || g(Y)) && (O.cancel(), x.push(Y), fe.delete(Y));
      }),
      x
    );
  }
  function xl(g, x, O) {
    if (((W = g), (te = x), (J = O || null), !de && A.navigation === Of)) {
      de = !0;
      let Y = Yu(A.location, A.matches);
      Y != null && vt({ restoreScrollPosition: Y });
    }
    return () => {
      (W = null), (te = null), (J = null);
    };
  }
  function Ea(g, x) {
    return (
      (J &&
        J(
          g,
          x.map((Y) => hy(Y, A.loaderData)),
        )) ||
      g.key
    );
  }
  function xa(g, x) {
    if (W && te) {
      let O = Ea(g, x);
      W[O] = te();
    }
  }
  function Yu(g, x) {
    if (W) {
      let O = Ea(g, x),
        Y = W[O];
      if (typeof Y == "number") return Y;
    }
    return null;
  }
  function Ta(g, x, O) {
    if (R)
      if (g) {
        if (Object.keys(g[0].params).length > 0)
          return { active: !0, matches: Ii(x, O, p, !0) };
      } else return { active: !0, matches: Ii(x, O, p, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Ql(g, x, O, Y) {
    if (!R) return { type: "success", matches: g };
    let Z = g;
    for (;;) {
      let ae = z == null,
        ce = z || y,
        k = v;
      try {
        await R({
          signal: O,
          path: x,
          matches: Z,
          fetcherKey: Y,
          patch: (P, oe) => {
            O.aborted || Wh(P, oe, ce, k, d);
          },
        });
      } catch (P) {
        return { type: "error", error: P, partialMatches: Z };
      } finally {
        ae && !O.aborted && (y = [...y]);
      }
      if (O.aborted) return { type: "aborted" };
      let K = Xa(ce, x, p);
      if (K) return { type: "success", matches: K };
      let V = Ii(ce, x, p, !0);
      if (
        !V ||
        (Z.length === V.length &&
          Z.every((P, oe) => P.route.id === V[oe].route.id))
      )
        return { type: "success", matches: null };
      Z = V;
    }
  }
  function za(g) {
    (v = {}), (z = Pi(g, d, void 0, v));
  }
  function dr(g, x) {
    let O = z == null;
    Wh(g, x, z || y, v, d), O && ((y = [...y]), vt({}));
  }
  return (
    (et = {
      get basename() {
        return p;
      },
      get future() {
        return T;
      },
      get state() {
        return A;
      },
      get routes() {
        return y;
      },
      get window() {
        return c;
      },
      initialize: Pe,
      subscribe: Va,
      enableScrollRestoration: xl,
      navigate: vl,
      fetch: wn,
      revalidate: jn,
      createHref: (g) => i.history.createHref(g),
      encodeLocation: (g) => i.history.encodeLocation(g),
      getFetcher: Ln,
      deleteFetcher: or,
      dispose: pa,
      getBlocker: sr,
      deleteBlocker: Lu,
      patchRoutes: dr,
      _internalFetchControllers: $,
      _internalActiveDeferreds: fe,
      _internalSetRoutes: za,
    }),
    et
  );
}
function Yy(i) {
  return (
    i != null &&
    (("formData" in i && i.formData != null) ||
      ("body" in i && i.body !== void 0))
  );
}
function Uf(i, c, o, f, d, v, y, z) {
  let p, m;
  if (y) {
    p = [];
    for (let T of c)
      if ((p.push(T), T.route.id === y)) {
        m = T;
        break;
      }
  } else (p = c), (m = c[c.length - 1]);
  let R = b0(d || ".", p0(p, v), wu(i.pathname, o) || i.pathname, z === "path");
  if (
    (d == null && ((R.search = i.search), (R.hash = i.hash)),
    (d == null || d === "" || d === ".") && m)
  ) {
    let T = Yf(R.search);
    if (m.route.index && !T)
      R.search = R.search ? R.search.replace(/^\?/, "?index&") : "?index";
    else if (!m.route.index && T) {
      let w = new URLSearchParams(R.search),
        G = w.getAll("index");
      w.delete("index"),
        G.filter((J) => J).forEach((J) => w.append("index", J));
      let W = w.toString();
      R.search = W ? "?" + W : "";
    }
  }
  return (
    f &&
      o !== "/" &&
      (R.pathname = R.pathname === "/" ? o : ya([o, R.pathname])),
    Hu(R)
  );
}
function Vh(i, c, o, f) {
  if (!f || !Yy(f)) return { path: o };
  if (f.formMethod && !$y(f.formMethod))
    return { path: o, error: Bt(405, { method: f.formMethod }) };
  let d = () => ({ path: o, error: Bt(400, { type: "invalid-body" }) }),
    v = f.formMethod || "get",
    y = i ? v.toUpperCase() : v.toLowerCase(),
    z = z0(o);
  if (f.body !== void 0) {
    if (f.formEncType === "text/plain") {
      if (!ml(y)) return d();
      let w =
        typeof f.body == "string"
          ? f.body
          : f.body instanceof FormData || f.body instanceof URLSearchParams
            ? Array.from(f.body.entries()).reduce((G, W) => {
                let [J, te] = W;
                return (
                  "" +
                  G +
                  J +
                  "=" +
                  te +
                  `
`
                );
              }, "")
            : String(f.body);
      return {
        path: o,
        submission: {
          formMethod: y,
          formAction: z,
          formEncType: f.formEncType,
          formData: void 0,
          json: void 0,
          text: w,
        },
      };
    } else if (f.formEncType === "application/json") {
      if (!ml(y)) return d();
      try {
        let w = typeof f.body == "string" ? JSON.parse(f.body) : f.body;
        return {
          path: o,
          submission: {
            formMethod: y,
            formAction: z,
            formEncType: f.formEncType,
            formData: void 0,
            json: w,
            text: void 0,
          },
        };
      } catch (w) {
        return d();
      }
    }
  }
  Ae(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let p, m;
  if (f.formData) (p = jf(f.formData)), (m = f.formData);
  else if (f.body instanceof FormData) (p = jf(f.body)), (m = f.body);
  else if (f.body instanceof URLSearchParams) (p = f.body), (m = $h(p));
  else if (f.body == null) (p = new URLSearchParams()), (m = new FormData());
  else
    try {
      (p = new URLSearchParams(f.body)), (m = $h(p));
    } catch (w) {
      return d();
    }
  let R = {
    formMethod: y,
    formAction: z,
    formEncType: (f && f.formEncType) || "application/x-www-form-urlencoded",
    formData: m,
    json: void 0,
    text: void 0,
  };
  if (ml(R.formMethod)) return { path: o, submission: R };
  let T = ga(o);
  return (
    c && T.search && Yf(T.search) && p.append("index", ""),
    (T.search = "?" + p),
    { path: Hu(T), submission: R }
  );
}
function Kh(i, c, o) {
  o === void 0 && (o = !1);
  let f = i.findIndex((d) => d.route.id === c);
  return f >= 0 ? i.slice(0, o ? f + 1 : f) : i;
}
function Jh(i, c, o, f, d, v, y, z, p, m, R, T, w, G, W, J) {
  let te = J ? (Jt(J[1]) ? J[1].error : J[1].data) : void 0,
    de = i.createURL(c.location),
    ie = i.createURL(d),
    ge = o;
  v && c.errors
    ? (ge = Kh(o, Object.keys(c.errors)[0], !0))
    : J && Jt(J[1]) && (ge = Kh(o, J[0]));
  let je = J ? J[1].statusCode : void 0,
    He = y && je && je >= 400,
    et = ge.filter((le, ze) => {
      let { route: he } = le;
      if (he.lazy) return !0;
      if (he.loader == null) return !1;
      if (v) return Cf(he, c.loaderData, c.errors);
      if (
        qy(c.loaderData, c.matches[ze], le) ||
        p.some((nt) => nt === le.route.id)
      )
        return !0;
      let Qe = c.matches[ze],
        Me = le;
      return kh(
        le,
        Ie(
          {
            currentUrl: de,
            currentParams: Qe.params,
            nextUrl: ie,
            nextParams: Me.params,
          },
          f,
          {
            actionResult: te,
            actionStatus: je,
            defaultShouldRevalidate: He
              ? !1
              : z ||
                de.pathname + de.search === ie.pathname + ie.search ||
                de.search !== ie.search ||
                x0(Qe, Me),
          },
        ),
      );
    }),
    A = [];
  return (
    T.forEach((le, ze) => {
      if (v || !o.some((Fe) => Fe.route.id === le.routeId) || R.has(ze)) return;
      let he = Xa(G, le.path, W);
      if (!he) {
        A.push({
          key: ze,
          routeId: le.routeId,
          path: le.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let Qe = c.fetchers.get(ze),
        Me = Uu(he, le.path),
        nt = !1;
      w.has(ze)
        ? (nt = !1)
        : m.has(ze)
          ? (m.delete(ze), (nt = !0))
          : Qe && Qe.state !== "idle" && Qe.data === void 0
            ? (nt = z)
            : (nt = kh(
                Me,
                Ie(
                  {
                    currentUrl: de,
                    currentParams: c.matches[c.matches.length - 1].params,
                    nextUrl: ie,
                    nextParams: o[o.length - 1].params,
                  },
                  f,
                  {
                    actionResult: te,
                    actionStatus: je,
                    defaultShouldRevalidate: He ? !1 : z,
                  },
                ),
              )),
        nt &&
          A.push({
            key: ze,
            routeId: le.routeId,
            path: le.path,
            matches: he,
            match: Me,
            controller: new AbortController(),
          });
    }),
    [et, A]
  );
}
function Cf(i, c, o) {
  if (i.lazy) return !0;
  if (!i.loader) return !1;
  let f = c != null && c[i.id] !== void 0,
    d = o != null && o[i.id] !== void 0;
  return !f && d
    ? !1
    : typeof i.loader == "function" && i.loader.hydrate === !0
      ? !0
      : !f && !d;
}
function qy(i, c, o) {
  let f = !c || o.route.id !== c.route.id,
    d = i[o.route.id] === void 0;
  return f || d;
}
function x0(i, c) {
  let o = i.route.path;
  return (
    i.pathname !== c.pathname ||
    (o != null && o.endsWith("*") && i.params["*"] !== c.params["*"])
  );
}
function kh(i, c) {
  if (i.route.shouldRevalidate) {
    let o = i.route.shouldRevalidate(c);
    if (typeof o == "boolean") return o;
  }
  return c.defaultShouldRevalidate;
}
function Wh(i, c, o, f, d) {
  var v;
  let y;
  if (i) {
    let m = f[i];
    Ae(m, "No route found to patch children into: routeId = " + i),
      m.children || (m.children = []),
      (y = m.children);
  } else y = o;
  let z = c.filter((m) => !y.some((R) => T0(m, R))),
    p = Pi(
      z,
      d,
      [i || "_", "patch", String(((v = y) == null ? void 0 : v.length) || "0")],
      f,
    );
  y.push(...p);
}
function T0(i, c) {
  return "id" in i && "id" in c && i.id === c.id
    ? !0
    : i.index === c.index &&
        i.path === c.path &&
        i.caseSensitive === c.caseSensitive
      ? (!i.children || i.children.length === 0) &&
        (!c.children || c.children.length === 0)
        ? !0
        : i.children.every((o, f) => {
            var d;
            return (d = c.children) == null ? void 0 : d.some((v) => T0(o, v));
          })
      : !1;
}
async function Gy(i, c, o) {
  if (!i.lazy) return;
  let f = await i.lazy();
  if (!i.lazy) return;
  let d = o[i.id];
  Ae(d, "No route found in manifest");
  let v = {};
  for (let y in f) {
    let p = d[y] !== void 0 && y !== "hasErrorBoundary";
    Un(
      !p,
      'Route "' +
        d.id +
        '" has a static property "' +
        y +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + y + '" will be ignored.'),
    ),
      !p && !sy.has(y) && (v[y] = f[y]);
  }
  Object.assign(d, v), Object.assign(d, Ie({}, c(d), { lazy: void 0 }));
}
async function Xy(i) {
  let { matches: c } = i,
    o = c.filter((d) => d.shouldLoad);
  return (await Promise.all(o.map((d) => d.resolve()))).reduce(
    (d, v, y) => Object.assign(d, { [o[y].route.id]: v }),
    {},
  );
}
async function Qy(i, c, o, f, d, v, y, z, p, m) {
  let R = v.map((G) => (G.route.lazy ? Gy(G.route, p, z) : void 0)),
    T = v.map((G, W) => {
      let J = R[W],
        te = d.some((ie) => ie.route.id === G.route.id);
      return Ie({}, G, {
        shouldLoad: te,
        resolve: async (ie) => (
          ie &&
            f.method === "GET" &&
            (G.route.lazy || G.route.loader) &&
            (te = !0),
          te
            ? Zy(c, f, G, J, ie, m)
            : Promise.resolve({ type: Ye.data, result: void 0 })
        ),
      });
    }),
    w = await i({
      matches: T,
      request: f,
      params: v[0].params,
      fetcherKey: y,
      context: m,
    });
  try {
    await Promise.all(R);
  } catch (G) {}
  return w;
}
async function Zy(i, c, o, f, d, v) {
  let y,
    z,
    p = (m) => {
      let R,
        T = new Promise((W, J) => (R = J));
      (z = () => R()), c.signal.addEventListener("abort", z);
      let w = (W) =>
          typeof m != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + i + '" [routeId: ' + o.route.id + "]"),
                ),
              )
            : m(
                { request: c, params: o.params, context: v },
                ...(W !== void 0 ? [W] : []),
              ),
        G = (async () => {
          try {
            return { type: "data", result: await (d ? d((J) => w(J)) : w()) };
          } catch (W) {
            return { type: "error", result: W };
          }
        })();
      return Promise.race([G, T]);
    };
  try {
    let m = o.route[i];
    if (f)
      if (m) {
        let R,
          [T] = await Promise.all([
            p(m).catch((w) => {
              R = w;
            }),
            f,
          ]);
        if (R !== void 0) throw R;
        y = T;
      } else if ((await f, (m = o.route[i]), m)) y = await p(m);
      else if (i === "action") {
        let R = new URL(c.url),
          T = R.pathname + R.search;
        throw Bt(405, { method: c.method, pathname: T, routeId: o.route.id });
      } else return { type: Ye.data, result: void 0 };
    else if (m) y = await p(m);
    else {
      let R = new URL(c.url),
        T = R.pathname + R.search;
      throw Bt(404, { pathname: T });
    }
    Ae(
      y.result !== void 0,
      "You defined " +
        (i === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          o.route.id +
          "\" but didn't return anything from your `" +
          i +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (m) {
    return { type: Ye.error, result: m };
  } finally {
    z && c.signal.removeEventListener("abort", z);
  }
  return y;
}
async function Vy(i) {
  let { result: c, type: o } = i;
  if (M0(c)) {
    let T;
    try {
      let w = c.headers.get("Content-Type");
      w && /\bapplication\/json\b/.test(w)
        ? c.body == null
          ? (T = null)
          : (T = await c.json())
        : (T = await c.text());
    } catch (w) {
      return { type: Ye.error, error: w };
    }
    return o === Ye.error
      ? {
          type: Ye.error,
          error: new er(c.status, c.statusText, T),
          statusCode: c.status,
          headers: c.headers,
        }
      : { type: Ye.data, data: T, statusCode: c.status, headers: c.headers };
  }
  if (o === Ye.error) {
    if (l0(c)) {
      var f, d;
      if (c.data instanceof Error) {
        var v, y;
        return {
          type: Ye.error,
          error: c.data,
          statusCode: (v = c.init) == null ? void 0 : v.status,
          headers:
            (y = c.init) != null && y.headers
              ? new Headers(c.init.headers)
              : void 0,
        };
      }
      return {
        type: Ye.error,
        error: new er(
          ((f = c.init) == null ? void 0 : f.status) || 500,
          void 0,
          c.data,
        ),
        statusCode: ju(c) ? c.status : void 0,
        headers:
          (d = c.init) != null && d.headers
            ? new Headers(c.init.headers)
            : void 0,
      };
    }
    return { type: Ye.error, error: c, statusCode: ju(c) ? c.status : void 0 };
  }
  if (Fy(c)) {
    var z, p;
    return {
      type: Ye.deferred,
      deferredData: c,
      statusCode: (z = c.init) == null ? void 0 : z.status,
      headers:
        ((p = c.init) == null ? void 0 : p.headers) &&
        new Headers(c.init.headers),
    };
  }
  if (l0(c)) {
    var m, R;
    return {
      type: Ye.data,
      data: c.data,
      statusCode: (m = c.init) == null ? void 0 : m.status,
      headers:
        (R = c.init) != null && R.headers
          ? new Headers(c.init.headers)
          : void 0,
    };
  }
  return { type: Ye.data, data: c };
}
function Ky(i, c, o, f, d, v) {
  let y = i.headers.get("Location");
  if (
    (Ae(
      y,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !Bf.test(y))
  ) {
    let z = f.slice(0, f.findIndex((p) => p.route.id === o) + 1);
    (y = Uf(new URL(c.url), z, d, !0, y, v)), i.headers.set("Location", y);
  }
  return i;
}
function Fh(i, c, o) {
  if (Bf.test(i)) {
    let f = i,
      d = f.startsWith("//") ? new URL(c.protocol + f) : new URL(f),
      v = wu(d.pathname, o) != null;
    if (d.origin === c.origin && v) return d.pathname + d.search + d.hash;
  }
  return i;
}
function Nn(i, c, o, f) {
  let d = i.createURL(z0(c)).toString(),
    v = { signal: o };
  if (f && ml(f.formMethod)) {
    let { formMethod: y, formEncType: z } = f;
    (v.method = y.toUpperCase()),
      z === "application/json"
        ? ((v.headers = new Headers({ "Content-Type": z })),
          (v.body = JSON.stringify(f.json)))
        : z === "text/plain"
          ? (v.body = f.text)
          : z === "application/x-www-form-urlencoded" && f.formData
            ? (v.body = jf(f.formData))
            : (v.body = f.formData);
  }
  return new Request(d, v);
}
function jf(i) {
  let c = new URLSearchParams();
  for (let [o, f] of i.entries())
    c.append(o, typeof f == "string" ? f : f.name);
  return c;
}
function $h(i) {
  let c = new FormData();
  for (let [o, f] of i.entries()) c.append(o, f);
  return c;
}
function Jy(i, c, o, f, d) {
  let v = {},
    y = null,
    z,
    p = !1,
    m = {},
    R = o && Jt(o[1]) ? o[1].error : void 0;
  return (
    i.forEach((T) => {
      if (!(T.route.id in c)) return;
      let w = T.route.id,
        G = c[w];
      if (
        (Ae(!Za(G), "Cannot handle redirect results in processLoaderData"),
        Jt(G))
      ) {
        let W = G.error;
        R !== void 0 && ((W = R), (R = void 0)), (y = y || {});
        {
          let J = Qa(i, w);
          y[J.route.id] == null && (y[J.route.id] = W);
        }
        (v[w] = void 0),
          p || ((p = !0), (z = ju(G.error) ? G.error.status : 500)),
          G.headers && (m[w] = G.headers);
      } else
        va(G)
          ? (f.set(w, G.deferredData),
            (v[w] = G.deferredData.data),
            G.statusCode != null &&
              G.statusCode !== 200 &&
              !p &&
              (z = G.statusCode),
            G.headers && (m[w] = G.headers))
          : ((v[w] = G.data),
            G.statusCode && G.statusCode !== 200 && !p && (z = G.statusCode),
            G.headers && (m[w] = G.headers));
    }),
    R !== void 0 && o && ((y = { [o[0]]: R }), (v[o[0]] = void 0)),
    { loaderData: v, errors: y, statusCode: z || 200, loaderHeaders: m }
  );
}
function Ih(i, c, o, f, d, v, y) {
  let { loaderData: z, errors: p } = Jy(c, o, f, y);
  return (
    d.forEach((m) => {
      let { key: R, match: T, controller: w } = m,
        G = v[R];
      if (
        (Ae(G, "Did not find corresponding fetcher result"),
        !(w && w.signal.aborted))
      )
        if (Jt(G)) {
          let W = Qa(i.matches, T == null ? void 0 : T.route.id);
          (p && p[W.route.id]) || (p = Ie({}, p, { [W.route.id]: G.error })),
            i.fetchers.delete(R);
        } else if (Za(G)) Ae(!1, "Unhandled fetcher revalidation redirect");
        else if (va(G)) Ae(!1, "Unhandled fetcher deferred data");
        else {
          let W = ma(G.data);
          i.fetchers.set(R, W);
        }
    }),
    { loaderData: z, errors: p }
  );
}
function Ph(i, c, o, f) {
  let d = Ie({}, c);
  for (let v of o) {
    let y = v.route.id;
    if (
      (c.hasOwnProperty(y)
        ? c[y] !== void 0 && (d[y] = c[y])
        : i[y] !== void 0 && v.route.loader && (d[y] = i[y]),
      f && f.hasOwnProperty(y))
    )
      break;
  }
  return d;
}
function e0(i) {
  return i
    ? Jt(i[1])
      ? { actionData: {} }
      : { actionData: { [i[0]]: i[1].data } }
    : {};
}
function Qa(i, c) {
  return (
    (c ? i.slice(0, i.findIndex((f) => f.route.id === c) + 1) : [...i])
      .reverse()
      .find((f) => f.route.hasErrorBoundary === !0) || i[0]
  );
}
function t0(i) {
  let c =
    i.length === 1
      ? i[0]
      : i.find((o) => o.index || !o.path || o.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: c }],
    route: c,
  };
}
function Bt(i, c) {
  let {
      pathname: o,
      routeId: f,
      method: d,
      type: v,
      message: y,
    } = c === void 0 ? {} : c,
    z = "Unknown Server Error",
    p = "Unknown @remix-run/router error";
  return (
    i === 400
      ? ((z = "Bad Request"),
        d && o && f
          ? (p =
              "You made a " +
              d +
              ' request to "' +
              o +
              '" but ' +
              ('did not provide a `loader` for route "' + f + '", ') +
              "so there is no way to handle the request.")
          : v === "defer-action"
            ? (p = "defer() is not supported in actions")
            : v === "invalid-body" && (p = "Unable to encode submission body"))
      : i === 403
        ? ((z = "Forbidden"),
          (p = 'Route "' + f + '" does not match URL "' + o + '"'))
        : i === 404
          ? ((z = "Not Found"), (p = 'No route matches URL "' + o + '"'))
          : i === 405 &&
            ((z = "Method Not Allowed"),
            d && o && f
              ? (p =
                  "You made a " +
                  d.toUpperCase() +
                  ' request to "' +
                  o +
                  '" but ' +
                  ('did not provide an `action` for route "' + f + '", ') +
                  "so there is no way to handle the request.")
              : d && (p = 'Invalid request method "' + d.toUpperCase() + '"')),
    new er(i || 500, z, new Error(p), !0)
  );
}
function $i(i) {
  let c = Object.entries(i);
  for (let o = c.length - 1; o >= 0; o--) {
    let [f, d] = c[o];
    if (Za(d)) return { key: f, result: d };
  }
}
function z0(i) {
  let c = typeof i == "string" ? ga(i) : i;
  return Hu(Ie({}, c, { hash: "" }));
}
function ky(i, c) {
  return i.pathname !== c.pathname || i.search !== c.search
    ? !1
    : i.hash === ""
      ? c.hash !== ""
      : i.hash === c.hash
        ? !0
        : c.hash !== "";
}
function Wy(i) {
  return M0(i.result) && jy.has(i.result.status);
}
function va(i) {
  return i.type === Ye.deferred;
}
function Jt(i) {
  return i.type === Ye.error;
}
function Za(i) {
  return (i && i.type) === Ye.redirect;
}
function l0(i) {
  return (
    typeof i == "object" &&
    i != null &&
    "type" in i &&
    "data" in i &&
    "init" in i &&
    i.type === "DataWithResponseInit"
  );
}
function Fy(i) {
  let c = i;
  return (
    c &&
    typeof c == "object" &&
    typeof c.data == "object" &&
    typeof c.subscribe == "function" &&
    typeof c.cancel == "function" &&
    typeof c.resolveData == "function"
  );
}
function M0(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.headers == "object" &&
    typeof i.body != "undefined"
  );
}
function $y(i) {
  return Cy.has(i.toLowerCase());
}
function ml(i) {
  return Ny.has(i.toLowerCase());
}
async function Iy(i, c, o, f, d) {
  let v = Object.entries(c);
  for (let y = 0; y < v.length; y++) {
    let [z, p] = v[y],
      m = i.find((w) => (w == null ? void 0 : w.route.id) === z);
    if (!m) continue;
    let R = f.find((w) => w.route.id === m.route.id),
      T = R != null && !x0(R, m) && (d && d[m.route.id]) !== void 0;
    va(p) &&
      T &&
      (await Lf(p, o, !1).then((w) => {
        w && (c[z] = w);
      }));
  }
}
async function Py(i, c, o) {
  for (let f = 0; f < o.length; f++) {
    let { key: d, routeId: v, controller: y } = o[f],
      z = c[d];
    i.find((m) => (m == null ? void 0 : m.route.id) === v) &&
      va(z) &&
      (Ae(
        y,
        "Expected an AbortController for revalidating fetcher deferred result",
      ),
      await Lf(z, y.signal, !0).then((m) => {
        m && (c[d] = m);
      }));
  }
}
async function Lf(i, c, o) {
  if ((o === void 0 && (o = !1), !(await i.deferredData.resolveData(c)))) {
    if (o)
      try {
        return { type: Ye.data, data: i.deferredData.unwrappedData };
      } catch (d) {
        return { type: Ye.error, error: d };
      }
    return { type: Ye.data, data: i.deferredData.data };
  }
}
function Yf(i) {
  return new URLSearchParams(i).getAll("index").some((c) => c === "");
}
function Uu(i, c) {
  let o = typeof c == "string" ? ga(c).search : c.search;
  if (i[i.length - 1].route.index && Yf(o || "")) return i[i.length - 1];
  let f = g0(i);
  return f[f.length - 1];
}
function a0(i) {
  let {
    formMethod: c,
    formAction: o,
    formEncType: f,
    text: d,
    formData: v,
    json: y,
  } = i;
  if (!(!c || !o || !f)) {
    if (d != null)
      return {
        formMethod: c,
        formAction: o,
        formEncType: f,
        formData: void 0,
        json: void 0,
        text: d,
      };
    if (v != null)
      return {
        formMethod: c,
        formAction: o,
        formEncType: f,
        formData: v,
        json: void 0,
        text: void 0,
      };
    if (y !== void 0)
      return {
        formMethod: c,
        formAction: o,
        formEncType: f,
        formData: void 0,
        json: y,
        text: void 0,
      };
  }
}
function Nf(i, c) {
  return c
    ? {
        state: "loading",
        location: i,
        formMethod: c.formMethod,
        formAction: c.formAction,
        formEncType: c.formEncType,
        formData: c.formData,
        json: c.json,
        text: c.text,
      }
    : {
        state: "loading",
        location: i,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function eg(i, c) {
  return {
    state: "submitting",
    location: i,
    formMethod: c.formMethod,
    formAction: c.formAction,
    formEncType: c.formEncType,
    formData: c.formData,
    json: c.json,
    text: c.text,
  };
}
function Ou(i, c) {
  return i
    ? {
        state: "loading",
        formMethod: i.formMethod,
        formAction: i.formAction,
        formEncType: i.formEncType,
        formData: i.formData,
        json: i.json,
        text: i.text,
        data: c,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: c,
      };
}
function tg(i, c) {
  return {
    state: "submitting",
    formMethod: i.formMethod,
    formAction: i.formAction,
    formEncType: i.formEncType,
    formData: i.formData,
    json: i.json,
    text: i.text,
    data: c ? c.data : void 0,
  };
}
function ma(i) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: i,
  };
}
function lg(i, c) {
  try {
    let o = i.sessionStorage.getItem(E0);
    if (o) {
      let f = JSON.parse(o);
      for (let [d, v] of Object.entries(f || {}))
        v && Array.isArray(v) && c.set(d, new Set(v || []));
    }
  } catch (o) {}
}
function ag(i, c) {
  if (c.size > 0) {
    let o = {};
    for (let [f, d] of c) o[f] = [...d];
    try {
      i.sessionStorage.setItem(E0, JSON.stringify(o));
    } catch (f) {
      Un(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          f +
          ").",
      );
    }
  }
}
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function tr() {
  return (
    (tr = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var c = 1; c < arguments.length; c++) {
            var o = arguments[c];
            for (var f in o)
              Object.prototype.hasOwnProperty.call(o, f) && (i[f] = o[f]);
          }
          return i;
        }),
    tr.apply(this, arguments)
  );
}
const ar = q.createContext(null),
  D0 = q.createContext(null),
  nr = q.createContext(null),
  qf = q.createContext(null),
  Cn = q.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  A0 = q.createContext(null);
function ur() {
  return q.useContext(qf) != null;
}
function _0() {
  return ur() || Ae(!1), q.useContext(qf).location;
}
function R0(i) {
  q.useContext(nr).static || q.useLayoutEffect(i);
}
function Ig() {
  let { isDataRoute: i } = q.useContext(Cn);
  return i ? mg() : ng();
}
function ng() {
  ur() || Ae(!1);
  let i = q.useContext(ar),
    { basename: c, future: o, navigator: f } = q.useContext(nr),
    { matches: d } = q.useContext(Cn),
    { pathname: v } = _0(),
    y = JSON.stringify(p0(d, o.v7_relativeSplatPath)),
    z = q.useRef(!1);
  return (
    R0(() => {
      z.current = !0;
    }),
    q.useCallback(
      function (m, R) {
        if ((R === void 0 && (R = {}), !z.current)) return;
        if (typeof m == "number") {
          f.go(m);
          return;
        }
        let T = b0(m, JSON.parse(y), v, R.relative === "path");
        i == null &&
          c !== "/" &&
          (T.pathname = T.pathname === "/" ? c : ya([c, T.pathname])),
          (R.replace ? f.replace : f.push)(T, R.state, R);
      },
      [c, f, y, v, i],
    )
  );
}
function Pg(i, c) {
  return O0(i);
}
function O0(i, c, o, f) {
  ur() || Ae(!1);
  let { navigator: d } = q.useContext(nr),
    { matches: v } = q.useContext(Cn),
    y = v[v.length - 1],
    z = y ? y.params : {};
  y && y.pathname;
  let p = y ? y.pathnameBase : "/";
  y && y.route;
  let m = _0(),
    R;
  R = m;
  let T = R.pathname || "/",
    w = T;
  if (p !== "/") {
    let J = p.replace(/^\//, "").split("/");
    w = "/" + T.replace(/^\//, "").split("/").slice(J.length).join("/");
  }
  let G = Xa(i, { pathname: w });
  return fg(
    G &&
      G.map((J) =>
        Object.assign({}, J, {
          params: Object.assign({}, z, J.params),
          pathname: ya([
            p,
            d.encodeLocation
              ? d.encodeLocation(J.pathname).pathname
              : J.pathname,
          ]),
          pathnameBase:
            J.pathnameBase === "/"
              ? p
              : ya([
                  p,
                  d.encodeLocation
                    ? d.encodeLocation(J.pathnameBase).pathname
                    : J.pathnameBase,
                ]),
        }),
      ),
    v,
    o,
    f,
  );
}
function ug() {
  let i = hg(),
    c = ju(i)
      ? i.status + " " + i.statusText
      : i instanceof Error
        ? i.message
        : JSON.stringify(i),
    o = i instanceof Error ? i.stack : null,
    d = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return q.createElement(
    q.Fragment,
    null,
    q.createElement("h2", null, "Unexpected Application Error!"),
    q.createElement("h3", { style: { fontStyle: "italic" } }, c),
    o ? q.createElement("pre", { style: d }, o) : null,
    null,
  );
}
const ig = q.createElement(ug, null);
class rg extends q.Component {
  constructor(c) {
    super(c),
      (this.state = {
        location: c.location,
        revalidation: c.revalidation,
        error: c.error,
      });
  }
  static getDerivedStateFromError(c) {
    return { error: c };
  }
  static getDerivedStateFromProps(c, o) {
    return o.location !== c.location ||
      (o.revalidation !== "idle" && c.revalidation === "idle")
      ? { error: c.error, location: c.location, revalidation: c.revalidation }
      : {
          error: c.error !== void 0 ? c.error : o.error,
          location: o.location,
          revalidation: c.revalidation || o.revalidation,
        };
  }
  componentDidCatch(c, o) {
    console.error(
      "React Router caught the following error during render",
      c,
      o,
    );
  }
  render() {
    return this.state.error !== void 0
      ? q.createElement(
          Cn.Provider,
          { value: this.props.routeContext },
          q.createElement(A0.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function cg(i) {
  let { routeContext: c, match: o, children: f } = i,
    d = q.useContext(ar);
  return (
    d &&
      d.static &&
      d.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (d.staticContext._deepestRenderedBoundaryId = o.route.id),
    q.createElement(Cn.Provider, { value: c }, f)
  );
}
function fg(i, c, o, f) {
  var d;
  if (
    (c === void 0 && (c = []),
    o === void 0 && (o = null),
    f === void 0 && (f = null),
    i == null)
  ) {
    var v;
    if (!o) return null;
    if (o.errors) i = o.matches;
    else if (
      (v = f) != null &&
      v.v7_partialHydration &&
      c.length === 0 &&
      !o.initialized &&
      o.matches.length > 0
    )
      i = o.matches;
    else return null;
  }
  let y = i,
    z = (d = o) == null ? void 0 : d.errors;
  if (z != null) {
    let R = y.findIndex(
      (T) => T.route.id && (z == null ? void 0 : z[T.route.id]) !== void 0,
    );
    R >= 0 || Ae(!1), (y = y.slice(0, Math.min(y.length, R + 1)));
  }
  let p = !1,
    m = -1;
  if (o && f && f.v7_partialHydration)
    for (let R = 0; R < y.length; R++) {
      let T = y[R];
      if (
        ((T.route.HydrateFallback || T.route.hydrateFallbackElement) && (m = R),
        T.route.id)
      ) {
        let { loaderData: w, errors: G } = o,
          W =
            T.route.loader &&
            w[T.route.id] === void 0 &&
            (!G || G[T.route.id] === void 0);
        if (T.route.lazy || W) {
          (p = !0), m >= 0 ? (y = y.slice(0, m + 1)) : (y = [y[0]]);
          break;
        }
      }
    }
  return y.reduceRight((R, T, w) => {
    let G,
      W = !1,
      J = null,
      te = null;
    o &&
      ((G = z && T.route.id ? z[T.route.id] : void 0),
      (J = T.route.errorElement || ig),
      p &&
        (m < 0 && w === 0
          ? (vg("route-fallback"), (W = !0), (te = null))
          : m === w &&
            ((W = !0), (te = T.route.hydrateFallbackElement || null))));
    let de = c.concat(y.slice(0, w + 1)),
      ie = () => {
        let ge;
        return (
          G
            ? (ge = J)
            : W
              ? (ge = te)
              : T.route.Component
                ? (ge = q.createElement(T.route.Component, null))
                : T.route.element
                  ? (ge = T.route.element)
                  : (ge = R),
          q.createElement(cg, {
            match: T,
            routeContext: { outlet: R, matches: de, isDataRoute: o != null },
            children: ge,
          })
        );
      };
    return o && (T.route.ErrorBoundary || T.route.errorElement || w === 0)
      ? q.createElement(rg, {
          location: o.location,
          revalidation: o.revalidation,
          component: J,
          error: G,
          children: ie(),
          routeContext: { outlet: null, matches: de, isDataRoute: !0 },
        })
      : ie();
  }, null);
}
var N0 = (function (i) {
    return (
      (i.UseBlocker = "useBlocker"),
      (i.UseRevalidator = "useRevalidator"),
      (i.UseNavigateStable = "useNavigate"),
      i
    );
  })(N0 || {}),
  U0 = (function (i) {
    return (
      (i.UseBlocker = "useBlocker"),
      (i.UseLoaderData = "useLoaderData"),
      (i.UseActionData = "useActionData"),
      (i.UseRouteError = "useRouteError"),
      (i.UseNavigation = "useNavigation"),
      (i.UseRouteLoaderData = "useRouteLoaderData"),
      (i.UseMatches = "useMatches"),
      (i.UseRevalidator = "useRevalidator"),
      (i.UseNavigateStable = "useNavigate"),
      (i.UseRouteId = "useRouteId"),
      i
    );
  })(U0 || {});
function og(i) {
  let c = q.useContext(ar);
  return c || Ae(!1), c;
}
function sg(i) {
  let c = q.useContext(D0);
  return c || Ae(!1), c;
}
function dg(i) {
  let c = q.useContext(Cn);
  return c || Ae(!1), c;
}
function C0(i) {
  let c = dg(),
    o = c.matches[c.matches.length - 1];
  return o.route.id || Ae(!1), o.route.id;
}
function hg() {
  var i;
  let c = q.useContext(A0),
    o = sg(U0.UseRouteError),
    f = C0();
  return c !== void 0 ? c : (i = o.errors) == null ? void 0 : i[f];
}
function mg() {
  let { router: i } = og(N0.UseNavigateStable),
    c = C0(),
    o = q.useRef(!1);
  return (
    R0(() => {
      o.current = !0;
    }),
    q.useCallback(
      function (d, v) {
        v === void 0 && (v = {}),
          o.current &&
            (typeof d == "number"
              ? i.navigate(d)
              : i.navigate(d, tr({ fromRouteId: c }, v)));
      },
      [i, c],
    )
  );
}
const n0 = {};
function vg(i, c, o) {
  n0[i] || (n0[i] = !0);
}
function yg(i, c) {
  i == null || i.v7_startTransition,
    (i == null ? void 0 : i.v7_relativeSplatPath) === void 0 &&
      (!c || c.v7_relativeSplatPath),
    c &&
      (c.v7_fetcherPersist,
      c.v7_normalizeFormMethod,
      c.v7_partialHydration,
      c.v7_skipActionErrorRevalidation);
}
function gg(i) {
  let {
    basename: c = "/",
    children: o = null,
    location: f,
    navigationType: d = mt.Pop,
    navigator: v,
    static: y = !1,
    future: z,
  } = i;
  ur() && Ae(!1);
  let p = c.replace(/^\/*/, "/"),
    m = q.useMemo(
      () => ({
        basename: p,
        navigator: v,
        static: y,
        future: tr({ v7_relativeSplatPath: !1 }, z),
      }),
      [p, z, v, y],
    );
  typeof f == "string" && (f = ga(f));
  let {
      pathname: R = "/",
      search: T = "",
      hash: w = "",
      state: G = null,
      key: W = "default",
    } = f,
    J = q.useMemo(() => {
      let te = wu(R, p);
      return te == null
        ? null
        : {
            location: { pathname: te, search: T, hash: w, state: G, key: W },
            navigationType: d,
          };
    }, [p, R, T, w, G, W, d]);
  return J == null
    ? null
    : q.createElement(
        nr.Provider,
        { value: m },
        q.createElement(qf.Provider, { children: o, value: J }),
      );
}
new Promise(() => {});
function pg(i) {
  let c = {
    hasErrorBoundary: i.ErrorBoundary != null || i.errorElement != null,
  };
  return (
    i.Component &&
      Object.assign(c, {
        element: q.createElement(i.Component),
        Component: void 0,
      }),
    i.HydrateFallback &&
      Object.assign(c, {
        hydrateFallbackElement: q.createElement(i.HydrateFallback),
        HydrateFallback: void 0,
      }),
    i.ErrorBoundary &&
      Object.assign(c, {
        errorElement: q.createElement(i.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    c
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function lr() {
  return (
    (lr = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var c = 1; c < arguments.length; c++) {
            var o = arguments[c];
            for (var f in o)
              Object.prototype.hasOwnProperty.call(o, f) && (i[f] = o[f]);
          }
          return i;
        }),
    lr.apply(this, arguments)
  );
}
const bg = "6";
try {
  window.__reactRouterVersion = bg;
} catch (i) {}
function Sg(i, c) {
  return Ly({
    basename: c == null ? void 0 : c.basename,
    future: lr({}, c == null ? void 0 : c.future, { v7_prependBasename: !0 }),
    history: cy({ window: c == null ? void 0 : c.window }),
    hydrationData: (c == null ? void 0 : c.hydrationData) || Eg(),
    routes: i,
    mapRouteProperties: pg,
    dataStrategy: c == null ? void 0 : c.dataStrategy,
    patchRoutesOnNavigation: c == null ? void 0 : c.patchRoutesOnNavigation,
    window: c == null ? void 0 : c.window,
  }).initialize();
}
function Eg() {
  var i;
  let c = (i = window) == null ? void 0 : i.__staticRouterHydrationData;
  return c && c.errors && (c = lr({}, c, { errors: xg(c.errors) })), c;
}
function xg(i) {
  if (!i) return null;
  let c = Object.entries(i),
    o = {};
  for (let [f, d] of c)
    if (d && d.__type === "RouteErrorResponse")
      o[f] = new er(d.status, d.statusText, d.data, d.internal === !0);
    else if (d && d.__type === "Error") {
      if (d.__subType) {
        let v = window[d.__subType];
        if (typeof v == "function")
          try {
            let y = new v(d.message);
            (y.stack = ""), (o[f] = y);
          } catch (y) {}
      }
      if (o[f] == null) {
        let v = new Error(d.message);
        (v.stack = ""), (o[f] = v);
      }
    } else o[f] = d;
  return o;
}
const Tg = q.createContext({ isTransitioning: !1 }),
  zg = q.createContext(new Map()),
  Mg = "startTransition",
  u0 = Iv[Mg],
  Dg = "flushSync",
  i0 = ry[Dg];
function Ag(i) {
  u0 ? u0(i) : i();
}
function Nu(i) {
  i0 ? i0(i) : i();
}
class _g {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((c, o) => {
        (this.resolve = (f) => {
          this.status === "pending" && ((this.status = "resolved"), c(f));
        }),
          (this.reject = (f) => {
            this.status === "pending" && ((this.status = "rejected"), o(f));
          });
      }));
  }
}
function Rg(i) {
  let { fallbackElement: c, router: o, future: f } = i,
    [d, v] = q.useState(o.state),
    [y, z] = q.useState(),
    [p, m] = q.useState({ isTransitioning: !1 }),
    [R, T] = q.useState(),
    [w, G] = q.useState(),
    [W, J] = q.useState(),
    te = q.useRef(new Map()),
    { v7_startTransition: de } = f || {},
    ie = q.useCallback(
      (le) => {
        de ? Ag(le) : le();
      },
      [de],
    ),
    ge = q.useCallback(
      (le, ze) => {
        let { deletedFetchers: he, flushSync: Qe, viewTransitionOpts: Me } = ze;
        le.fetchers.forEach((Fe, ut) => {
          Fe.data !== void 0 && te.current.set(ut, Fe.data);
        }),
          he.forEach((Fe) => te.current.delete(Fe));
        let nt =
          o.window == null ||
          o.window.document == null ||
          typeof o.window.document.startViewTransition != "function";
        if (!Me || nt) {
          Qe ? Nu(() => v(le)) : ie(() => v(le));
          return;
        }
        if (Qe) {
          Nu(() => {
            w && (R && R.resolve(), w.skipTransition()),
              m({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Me.currentLocation,
                nextLocation: Me.nextLocation,
              });
          });
          let Fe = o.window.document.startViewTransition(() => {
            Nu(() => v(le));
          });
          Fe.finished.finally(() => {
            Nu(() => {
              T(void 0), G(void 0), z(void 0), m({ isTransitioning: !1 });
            });
          }),
            Nu(() => G(Fe));
          return;
        }
        w
          ? (R && R.resolve(),
            w.skipTransition(),
            J({
              state: le,
              currentLocation: Me.currentLocation,
              nextLocation: Me.nextLocation,
            }))
          : (z(le),
            m({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Me.currentLocation,
              nextLocation: Me.nextLocation,
            }));
      },
      [o.window, w, R, te, ie],
    );
  q.useLayoutEffect(() => o.subscribe(ge), [o, ge]),
    q.useEffect(() => {
      p.isTransitioning && !p.flushSync && T(new _g());
    }, [p]),
    q.useEffect(() => {
      if (R && y && o.window) {
        let le = y,
          ze = R.promise,
          he = o.window.document.startViewTransition(async () => {
            ie(() => v(le)), await ze;
          });
        he.finished.finally(() => {
          T(void 0), G(void 0), z(void 0), m({ isTransitioning: !1 });
        }),
          G(he);
      }
    }, [ie, y, R, o.window]),
    q.useEffect(() => {
      R && y && d.location.key === y.location.key && R.resolve();
    }, [R, w, d.location, y]),
    q.useEffect(() => {
      !p.isTransitioning &&
        W &&
        (z(W.state),
        m({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: W.currentLocation,
          nextLocation: W.nextLocation,
        }),
        J(void 0));
    }, [p.isTransitioning, W]),
    q.useEffect(() => {}, []);
  let je = q.useMemo(
      () => ({
        createHref: o.createHref,
        encodeLocation: o.encodeLocation,
        go: (le) => o.navigate(le),
        push: (le, ze, he) =>
          o.navigate(le, {
            state: ze,
            preventScrollReset: he == null ? void 0 : he.preventScrollReset,
          }),
        replace: (le, ze, he) =>
          o.navigate(le, {
            replace: !0,
            state: ze,
            preventScrollReset: he == null ? void 0 : he.preventScrollReset,
          }),
      }),
      [o],
    ),
    He = o.basename || "/",
    et = q.useMemo(
      () => ({ router: o, navigator: je, static: !1, basename: He }),
      [o, je, He],
    ),
    A = q.useMemo(
      () => ({ v7_relativeSplatPath: o.future.v7_relativeSplatPath }),
      [o.future.v7_relativeSplatPath],
    );
  return (
    q.useEffect(() => yg(f, o.future), [f, o.future]),
    q.createElement(
      q.Fragment,
      null,
      q.createElement(
        ar.Provider,
        { value: et },
        q.createElement(
          D0.Provider,
          { value: d },
          q.createElement(
            zg.Provider,
            { value: te.current },
            q.createElement(
              Tg.Provider,
              { value: p },
              q.createElement(
                gg,
                {
                  basename: He,
                  location: d.location,
                  navigationType: d.historyAction,
                  navigator: je,
                  future: A,
                },
                d.initialized || o.future.v7_partialHydration
                  ? q.createElement(Og, {
                      routes: o.routes,
                      future: o.future,
                      state: d,
                    })
                  : c,
              ),
            ),
          ),
        ),
      ),
      null,
    )
  );
}
const Og = q.memo(Ng);
function Ng(i) {
  let { routes: c, future: o, state: f } = i;
  return O0(c, void 0, f, o);
}
var r0;
(function (i) {
  (i.UseScrollRestoration = "useScrollRestoration"),
    (i.UseSubmit = "useSubmit"),
    (i.UseSubmitFetcher = "useSubmitFetcher"),
    (i.UseFetcher = "useFetcher"),
    (i.useViewTransitionState = "useViewTransitionState");
})(r0 || (r0 = {}));
var c0;
(function (i) {
  (i.UseFetcher = "useFetcher"),
    (i.UseFetchers = "useFetchers"),
    (i.UseScrollRestoration = "useScrollRestoration");
})(c0 || (c0 = {}));
class Ug extends q.Component {
  constructor(o) {
    super(o);
    On(this, "handleGoHome", () => {
      this.props.history && typeof this.props.history.push == "function"
        ? this.props.history.push("/")
        : typeof window != "undefined" && (window.location.href = "/");
    });
    On(this, "openModal", () => this.setState({ showModal: !0 }));
    On(this, "closeModal", () => this.setState({ showModal: !1 }));
    On(this, "toggleDetails", () => {
      this.setState((o) => ({ showDetails: !o.showDetails }));
    });
    On(this, "copyErrorId", async () => {
      const { errorId: o } = this.state;
      if (!(!o || typeof navigator == "undefined" || !navigator.clipboard))
        try {
          await navigator.clipboard.writeText(o),
            this.setState({ copied: !0 }),
            setTimeout(() => this.setState({ copied: !1 }), 2e3);
        } catch (f) {}
    });
    this.state = {
      hasError: !1,
      error: null,
      errorInfo: null,
      errorId: null,
      showDetails: !1,
      showModal: !1,
      copied: !1,
    };
  }
  static getDerivedStateFromError(o) {
    const f =
      "ERR-" +
      Date.now().toString(36).toUpperCase() +
      "-" +
      Math.random().toString(36).slice(2, 7).toUpperCase();
    return { hasError: !0, error: o, errorId: f };
  }
  componentDidCatch(o, f) {
    if (
      (this.setState({ errorInfo: f }),
      console.error("ErrorBoundary caught an error:", o, f),
      typeof this.props.onError == "function")
    )
      try {
        this.props.onError({
          error: o,
          errorInfo: f,
          errorId: this.state.errorId,
        });
      } catch (d) {
        console.warn("onError callback failed", d);
      }
  }
  render() {
    var f;
    if (!this.state.hasError) return this.props.children;
    const o =
      typeof window != "undefined" && this.state.errorId
        ? `https://status.ajayos.in/error/status/${this.state.errorId}`
        : `/error/status/${this.state.errorId || "unknown"}`;
    return L.jsxs("div", {
      className: "error-container",
      role: "alert",
      "aria-live": "assertive",
      children: [
        L.jsx("div", {
          className: "particles",
          "aria-hidden": "true",
          children: [...Array(40)].map((d, v) =>
            L.jsx(
              "div",
              {
                className: "particle",
                style: {
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`,
                  animationDuration: `${15 + Math.random() * 10}s`,
                },
              },
              v,
            ),
          ),
        }),
        L.jsx("div", {
          className: "matrix-lines",
          "aria-hidden": "true",
          children: [...Array(8)].map((d, v) =>
            L.jsx(
              "div",
              {
                className: "matrix-line",
                style: { left: `${12.5 * v}%`, animationDelay: `${v * 0.5}s` },
              },
              v,
            ),
          ),
        }),
        L.jsxs("div", {
          className: "error-content",
          children: [
            L.jsxs("div", {
              className: "glitch-container",
              "aria-hidden": "true",
              children: [
                L.jsx("div", { className: "glitch-icon", children: "⚠" }),
                L.jsx("div", {
                  className: "glitch-icon glitch-shadow-1",
                  children: "⚠",
                }),
                L.jsx("div", {
                  className: "glitch-icon glitch-shadow-2",
                  children: "⚠",
                }),
              ],
            }),
            L.jsx("h1", {
              className: "error-title glitch-text",
              "data-text": "Oops!",
              children: "Oops!",
            }),
            L.jsx("div", {
              className: "error-subtitle",
              children: L.jsx("span", {
                className: "typing-text",
                "aria-hidden": "true",
                children: "Something went wrong...!",
              }),
            }),
            L.jsx("div", {
              className: "space-error-subtitle",
              children: L.jsx("span", {
                className: "space-typing-text",
                "aria-hidden": "true",
                children: "Lost in the void of space...",
              }),
            }),
            L.jsxs("div", {
              className: "error-id-display",
              "aria-label": "Error identifier",
              children: [
                L.jsx("div", { className: "scan-line" }),
                L.jsx("div", {
                  className: "error-label",
                  children: "ERROR_ID",
                }),
                L.jsx("div", {
                  className: "error-value",
                  children: L.jsx("code", { children: this.state.errorId }),
                }),
                L.jsxs("div", {
                  style: {
                    marginTop: "8px",
                    display: "flex",
                    gap: "8px",
                    justifyContent: "center",
                  },
                  children: [
                    L.jsx("button", {
                      className: "small-btn",
                      onClick: this.copyErrorId,
                      "aria-label": "Copy error id",
                      children: this.state.copied ? "COPIED" : "COPY ID",
                    }),
                    L.jsx("a", {
                      href: o,
                      onClick: (d) => {
                        typeof window != "undefined" &&
                          (d.preventDefault(),
                          window.open(o, "_blank", "noopener,noreferrer"));
                      },
                      className: "small-link",
                      children: "VIEW STATUS",
                    }),
                  ],
                }),
              ],
            }),
            L.jsxs("div", {
              className: "action-panel",
              children: [
                L.jsxs("button", {
                  className: "cyber-btn primary",
                  onClick: this.handleGoHome,
                  children: [
                    L.jsx("span", {
                      className: "btn-text",
                      children: "RETURN HOME",
                    }),
                    L.jsx("div", { className: "btn-glow" }),
                  ],
                }),
                L.jsxs("button", {
                  className: "cyber-btn primary",
                  onClick: this.openModal,
                  children: [
                    L.jsx("span", {
                      className: "btn-text",
                      children: "📊 VIEW LOGS",
                    }),
                    L.jsx("div", { className: "btn-glow" }),
                  ],
                }),
              ],
            }),
            this.state.showModal &&
              L.jsx("div", {
                className: "space-modal-backdrop",
                onClick: this.closeModal,
                children: L.jsxs("div", {
                  className: "space-modal",
                  onClick: (d) => d.stopPropagation(),
                  children: [
                    L.jsxs("div", {
                      className: "space-modal-header",
                      children: [
                        L.jsx("h2", { children: "⚙ Error Diagnostics ⚙" }),
                        L.jsx("button", {
                          className: "space-modal-close",
                          onClick: this.closeModal,
                          children: "✖",
                        }),
                      ],
                    }),
                    L.jsxs("div", {
                      className: "space-modal-content",
                      children: [
                        L.jsxs("div", {
                          className: "space-log-line",
                          children: [
                            L.jsx("span", {
                              className: "space-log-label",
                              children: "ERROR:",
                            }),
                            L.jsx("span", {
                              className: "space-log-value",
                              children:
                                ((f = this.state.error) == null
                                  ? void 0
                                  : f.message) || "Unknown anomaly detected",
                            }),
                          ],
                        }),
                        this.state.errorInfo &&
                          L.jsxs("div", {
                            className: "space-stack-container",
                            children: [
                              L.jsx("div", {
                                className: "space-stack-label",
                                children: "STACK TRACE:",
                              }),
                              L.jsx("div", {
                                className: "space-stack-content",
                                children: this.state.errorInfo.componentStack,
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            L.jsxs("div", {
              className: "footer-info",
              children: [
                L.jsxs("div", {
                  className: "footer-line",
                  children: ["REF: ", this.state.errorId],
                }),
                L.jsx("div", {
                  className: "footer-line",
                  children: "AWAITING SYSTEM RECOVERY...",
                }),
              ],
            }),
          ],
        }),
        L.jsx("style", {
          children: `
          /* Modal */
          .space-modal-backdrop { position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.85); display:flex; align-items:center; justify-content:center; z-index:100000;}
          .space-modal { background:#0a0a1a; border:2px solid #00e5ff; border-radius:12px; width:90%; max-width:600px; padding:1.5rem; max-height:80vh; overflow-y:auto; box-shadow:0 0 30px #00e5ff;}
          .space-modal-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; }
          .space-modal-close { background:none; border:none; color:#ff0080; font-size:1.3rem; cursor:pointer; }
          .space-modal-content { font-family:'Courier New', monospace; color:#d0f0ff; }
          .space-stack-content { background:rgba(255,0,128,0.05); border:1px solid rgba(255,0,128,0.1); border-radius:6px; padding:0.8rem; color:#c0e0ff; font-size:0.8rem; max-height:300px; overflow-y:auto; white-space:pre-wrap; line-height:1.4;}
          .space-error-subtitle { font-size:1.1rem; margin-bottom:1.5rem; color:#ff6b9d; font-style:italic;}
          .space-typing-text { display:inline-block; overflow:hidden; border-right:0.2em solid #00e5ff; white-space:nowrap; letter-spacing:0.15em; animation:space-typing 4s steps(25,end), blink-space 0.75s step-end infinite;}
          @keyframes space-typing {from{width:0;}to{width:100%;}} @keyframes blink-space{0%,100%{border-color:transparent;}50%{border-color:#00e5ff;}}
          
          .error-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
            color: #00ff88;
            font-family: 'Courier New', monospace;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999999;
          }

          .particles { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; }
          .particle { position: absolute; width: 2px; height: 2px; background: #00ff88; border-radius: 50%; animation: float infinite linear; opacity: 0.7; }
          @keyframes float {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
          }

          .matrix-lines { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; }
          .matrix-line { position: absolute; width: 1px; height: 100%; background: linear-gradient(to bottom, transparent, #00ff88, transparent); animation: matrix-scan 3s infinite; opacity: 0.25; }
          @keyframes matrix-scan { 0%,100% { transform: translateY(-100%); } 50% { transform: translateY(100%); } }

          .error-content { position: relative; z-index: 10; text-align: center; max-width: 720px; padding: 2rem; }
          .glitch-container { position: relative; margin-bottom: 1.25rem; }
          .glitch-icon { font-size: 3.5rem; color: #00ff88; position: relative; display: inline-block; animation: glitch-pulse 2s infinite; }
          .glitch-shadow-1, .glitch-shadow-2 { position: absolute; top: 0; left: 0; }
          .glitch-shadow-1 { color: #ff0088; animation: glitch-1 0.5s infinite; }
          .glitch-shadow-2 { color: #0088ff; animation: glitch-2 0.7s infinite; }

          @keyframes glitch-pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.08); filter: brightness(1.2); } }
          @keyframes glitch-1 { 0%,100%{transform:translate(0);} 20%{transform:translate(-2px,2px);} 40%{transform:translate(-2px,-2px);} 60%{transform:translate(2px,2px);} 80%{transform:translate(2px,-2px);} }
          @keyframes glitch-2 { 0%,100%{transform:translate(0);} 25%{transform:translate(2px,-2px);} 50%{transform:translate(-2px,2px);} 75%{transform:translate(2px,2px);} }

          .error-title { font-size: 2.6rem; font-weight: 700; margin-bottom: 0.75rem; position: relative; text-shadow: 0 0 10px #00ff88; }
          .glitch-text { position: relative; }
          .glitch-text::before, .glitch-text::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; }
          .glitch-text::before { color: #ff0088; animation: glitch-3 0.3s infinite; z-index: -1; }
          .glitch-text::after { color: #0088ff; animation: glitch-4 0.3s infinite; z-index: -2; }
          @keyframes glitch-3 { 0%{transform:translate(-1px,-1px);}25%{transform:translate(1px,1px);}50%{transform:translate(-1px,1px);}75%{transform:translate(1px,-1px);}100%{transform:translate(-1px,-1px);} }
          @keyframes glitch-4 { 0%{transform:translate(1px,1px);}25%{transform:translate(-1px,-1px);}50%{transform:translate(1px,-1px);}75%{transform:translate(-1px,1px);}100%{transform:translate(1px,1px);} }

          .error-subtitle { font-size: 1.05rem; margin-bottom: 0.25rem; color: #ff6b6b; }
          .typing-text { display:inline-block; overflow: hidden; border-right: 0.15em solid #00ff88; white-space: nowrap; letter-spacing: 0.12em; animation: typing 3.5s steps(20, end), blink-caret 0.75s step-end infinite; text-align: left; }
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink-caret { from,to { border-color: transparent; } 50% { border-color: #00ff88; } }

          .error-id-display { background: rgba(0,255,136,0.06); border: 1px solid rgba(0,255,136,0.12); border-radius: 8px; padding: 1.25rem; margin-bottom: 1.25rem; position: relative; overflow: hidden; }
          .scan-line { position:absolute; top:0; left:0; width:100%; height:2px; background:#00ff88; animation: scan 2.2s infinite; opacity:0.12; }
          @keyframes scan { 0%{transform:translateY(0);} 100%{transform:translateY(100px);} }

          .error-label { font-size: 0.88rem; margin-bottom: 0.35rem; color: #00ff88; }
          .error-value { font-size: 1.2rem; font-weight: 700; color: #fff; text-shadow: 0 0 8px #00ff88; }

          .qr-section { display:flex; align-items:center; justify-content:center; gap:1.5rem; margin-bottom:1.25rem; flex-wrap:wrap; }
          .qr-container { position:relative; padding:0.6rem; border: 1px solid rgba(0,255,136,0.12); border-radius:8px; background: rgba(0,0,0,0.6); }
          .qr-glow { position:absolute; top:-2px; left:-2px; right:-2px; bottom:-2px; background: linear-gradient(45deg, #00ff88, #0088ff, #ff0088, #00ff88); border-radius:8px; z-index:-1; animation: rotate-border 3s linear infinite; opacity:0.25; }
          @keyframes rotate-border { 0%{transform:rotate(0);}100%{transform:rotate(360deg);} }

          .qr-code { width:120px; height:120px; border-radius:4px; animation: qr-pulse 2s infinite; display:block; }
          @keyframes qr-pulse { 0%,100%{transform:scale(1);}50%{transform:scale(1.04);} }

          .status-text { text-align:left; max-width:320px; }
          .status-line { font-size:1.02rem; font-weight:700; margin-bottom:0.4rem; color:#00ff88; }
          .status-url { font-size:0.88rem; color:#cfcfcf; word-break:break-all; background: rgba(0,255,136,0.04); padding:0.45rem; border-radius:4px; border-left:3px solid #00ff88; }

          .action-panel { display:flex; gap:1rem; justify-content:center; margin-bottom:1rem; flex-wrap:wrap; }
          .cyber-btn { position:relative; padding:0.75rem 1.5rem; background:transparent; border:1.5px solid #00ff88; color:#00ff88; font-family:inherit; font-size:0.95rem; cursor:pointer; transition:all 0.25s ease; text-transform:uppercase; letter-spacing:1px; overflow:hidden; min-width:140px; border-radius:8px; }
          .cyber-btn.primary { border-color:#00ff88; color:#00ff88; }
          .cyber-btn.secondary { border-color:#0088ff; color:#0088ff; }

          .btn-glow { position:absolute; top:0; left:-90%; width:90%; height:100%; background: linear-gradient(90deg, transparent, rgba(0,255,136,0.12), transparent); transition:left 0.45s; pointer-events:none; }
          .cyber-btn:hover .btn-glow { left:100%; }
          .cyber-btn:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,255,136,0.06); background: rgba(0,255,136,0.03); }

          .btn-text { position:relative; z-index:1; }

          .details-panel { background: rgba(0,0,0,0.75); border: 1px solid rgba(0,255,136,0.08); border-radius:8px; padding:1rem; margin-bottom:1rem; text-align:left; animation: slide-up 0.45s ease; max-height:320px; overflow:auto; }
          @keyframes slide-up { from { opacity:0; transform: translateY(12px); } to { opacity:1; transform: translateY(0); } }

          .panel-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:0.6rem; padding-bottom:0.4rem; border-bottom:1px solid rgba(0,255,136,0.04); }
          .panel-title { font-weight:700; color:#00ff88; font-size:0.95rem; }
          .status-indicator { width:12px; height:12px; background:#ff6b6b; border-radius:50%; animation: status-blink 1s infinite; }
          @keyframes status-blink { 0%,50%{opacity:1}51%,100%{opacity:0.35} }

          .error-log { font-family: 'Courier New', monospace; color:#ddd; }
          .log-line { margin-bottom:0.8rem; display:flex; flex-wrap:wrap; gap:0.5rem; }
          .log-label { color:#ff6b6b; font-weight:700; min-width:90px; }
          .log-value { color:#fff; flex:1; }

          .stack-container { margin-top:0.8rem; }
          .stack-label { color:#ff6b6b; font-weight:700; margin-bottom:0.4rem; }
          .stack-content { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.03); border-radius:6px; padding:0.75rem; color:#cfcfcf; font-size:0.82rem; max-height:180px; overflow-y:auto; white-space:pre-wrap; line-height:1.35; }

          .footer-info { font-size:0.9rem; color:#9aa; animation: footer-fade 1s ease 0.9s both; margin-top:0.5rem; }
          .footer-line { margin-bottom:0.25rem; }

          .small-btn { background:transparent; border:1px solid rgba(255,255,255,0.06); color:#cfcfcf; padding:6px 10px; border-radius:6px; cursor:pointer; font-size:0.8rem; }
          .small-link { color:#cfefff; text-decoration:none; font-size:0.85rem; padding:6px 10px; border-radius:6px; border:1px solid rgba(255,255,255,0.04); }

          @media (max-width:768px) {
            .error-content { padding:1rem; max-width:92%; }
            .error-title { font-size:1.8rem; }
            .glitch-icon { font-size:2.6rem; }
            .qr-section { flex-direction:column; gap:0.9rem; }
            .status-text { text-align:center; max-width:none; }
            .action-panel { flex-direction:column; gap:0.6rem; }
            .cyber-btn { width:100%; min-width:auto; border-radius:10px; }
          }
        `,
        }),
      ],
    });
  }
}
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cg = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  jg = (i) =>
    i.replace(/^([A-Z])|[\s-_]+(\w)/g, (c, o, f) =>
      f ? f.toUpperCase() : o.toLowerCase(),
    ),
  f0 = (i) => {
    const c = jg(i);
    return c.charAt(0).toUpperCase() + c.slice(1);
  },
  j0 = (...i) =>
    i
      .filter((c, o, f) => !!c && c.trim() !== "" && f.indexOf(c) === o)
      .join(" ")
      .trim(),
  Hg = (i) => {
    for (const c in i)
      if (c.startsWith("aria-") || c === "role" || c === "title") return !0;
  };
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var wg = {
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
 */ const Bg = q.forwardRef((m, p) => {
  var R = m,
    {
      color: i = "currentColor",
      size: c = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: f,
      className: d = "",
      children: v,
      iconNode: y,
    } = R,
    z = xf(R, [
      "color",
      "size",
      "strokeWidth",
      "absoluteStrokeWidth",
      "className",
      "children",
      "iconNode",
    ]);
  return q.createElement(
    "svg",
    Du(
      Du(
        Rh(Du({ ref: p }, wg), {
          width: c,
          height: c,
          stroke: i,
          strokeWidth: f ? (Number(o) * 24) / Number(c) : o,
          className: j0("lucide", d),
        }),
        !v && !Hg(z) && { "aria-hidden": "true" },
      ),
      z,
    ),
    [
      ...y.map(([T, w]) => q.createElement(T, w)),
      ...(Array.isArray(v) ? v : [v]),
    ],
  );
});
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ir = (i, c) => {
  const o = q.forwardRef((y, v) => {
    var z = y,
      { className: f } = z,
      d = xf(z, ["className"]);
    return q.createElement(
      Bg,
      Du(
        {
          ref: v,
          iconNode: c,
          className: j0(`lucide-${Cg(f0(i))}`, `lucide-${i}`, f),
        },
        d,
      ),
    );
  });
  return (o.displayName = f0(i)), o;
};
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lg = [
    [
      "path",
      {
        d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",
        key: "1qvrer",
      },
    ],
    ["path", { d: "M6 17h12", key: "1jwigz" }],
  ],
  Yg = ir("chef-hat", Lg);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qg = [
    [
      "path",
      {
        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        key: "mvr1a0",
      },
    ],
  ],
  Gg = ir("heart", qg);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xg = [
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
  o0 = ir("sparkles", Xg);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qg = [
    ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
    ["path", { d: "M7 2v20", key: "1473qp" }],
    [
      "path",
      { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" },
    ],
  ],
  Zg = ir("utensils", Qg);
function H0() {
  const [i, c] = q.useState(0),
    [o, f] = q.useState(0);
  q.useEffect(() => {
    const v = setInterval(() => {
      c((y) => (y + 2) % 360);
    }, 16);
    return () => clearInterval(v);
  }, []),
    q.useEffect(() => {
      const v = setInterval(() => {
        f((y) => (y + 1) % 4);
      }, 2e3);
      return () => clearInterval(v);
    }, []);
  const d = [
    { text: "Cooking magic", icon: "🍳" },
    { text: "Plating dishes", icon: "🍽️" },
    { text: "Gathering recipes", icon: "📚" },
    { text: "Perfecting flavors", icon: "✨" },
  ];
  return L.jsxs("div", {
    className:
      "min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 flex items-center justify-center p-3 sm:p-4 relative overflow-hidden",
    children: [
      L.jsxs("div", {
        className: "absolute inset-0",
        children: [
          L.jsx("div", {
            className:
              "absolute -top-32 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob",
          }),
          L.jsx("div", {
            className:
              "absolute -top-20 -right-32 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000",
          }),
          L.jsx("div", {
            className:
              "absolute -bottom-32 left-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000",
          }),
          L.jsx("div", {
            className:
              "absolute -bottom-32 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-6000",
          }),
          L.jsx("div", {
            className: "absolute inset-0 opacity-5",
            style: {
              backgroundImage:
                "linear-gradient(rgba(100, 200, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 200, 255, 0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            },
          }),
        ],
      }),
      L.jsx("div", {
        className: "relative z-10 w-full max-w-2xl mx-auto",
        children: L.jsxs("div", {
          className:
            "flex flex-col items-center justify-center min-h-screen sm:min-h-auto",
          children: [
            L.jsx("div", {
              className:
                "absolute top-8 sm:top-16 left-2 sm:left-6 opacity-70 animate-float",
              children: L.jsxs("div", {
                className: "relative",
                children: [
                  L.jsx("div", {
                    className:
                      "absolute inset-0 bg-pink-500 blur-lg opacity-50 rounded-full",
                  }),
                  L.jsx(Gg, {
                    className:
                      "w-6 h-6 sm:w-8 sm:h-8 text-pink-400 fill-pink-400 relative",
                  }),
                ],
              }),
            }),
            L.jsx("div", {
              className:
                "absolute top-16 sm:top-28 right-2 sm:right-6 opacity-70 animate-float",
              style: { animationDelay: "1s" },
              children: L.jsxs("div", {
                className: "relative",
                children: [
                  L.jsx("div", {
                    className:
                      "absolute inset-0 bg-cyan-500 blur-lg opacity-50 rounded-full",
                  }),
                  L.jsx(Zg, {
                    className: "w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 relative",
                  }),
                ],
              }),
            }),
            L.jsxs("div", {
              className:
                "text-center space-y-6 sm:space-y-10 px-3 sm:px-4 w-full",
              children: [
                L.jsxs("div", {
                  className:
                    "flex justify-center mb-6 sm:mb-10 relative h-40 sm:h-64 w-40 sm:w-64 mx-auto",
                  children: [
                    L.jsx("div", {
                      className:
                        "absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-20 blur-2xl animate-pulse",
                    }),
                    L.jsxs("div", {
                      className: "absolute inset-0",
                      children: [
                        L.jsx("div", {
                          className:
                            "absolute inset-0 rounded-full border-2 sm:border-3 border-transparent border-t-cyan-400 border-r-pink-400 border-b-purple-400",
                          style: {
                            animation: "spin 6s linear infinite",
                            boxShadow:
                              "0 0 20px sm:0 0 30px rgba(34, 211, 238, 0.5), inset 0 0 20px sm:inset 0 0 30px rgba(34, 211, 238, 0.2)",
                          },
                        }),
                        L.jsx("div", {
                          className:
                            "absolute inset-3 sm:inset-6 rounded-full border-2 sm:border-3 border-transparent border-t-pink-400 border-r-purple-500 border-b-cyan-400",
                          style: {
                            animation: "spin 8s linear reverse",
                            boxShadow:
                              "0 0 15px sm:0 0 25px rgba(236, 72, 153, 0.4), inset 0 0 15px sm:inset 0 0 25px rgba(236, 72, 153, 0.15)",
                          },
                        }),
                        L.jsx("div", {
                          className:
                            "absolute inset-6 sm:inset-12 rounded-full border-2 sm:border-3 border-transparent border-t-purple-400 border-r-emerald-400 border-b-pink-400",
                          style: {
                            animation: "spin 10s linear infinite",
                            boxShadow:
                              "0 0 15px sm:0 0 20px rgba(168, 85, 245, 0.4), inset 0 0 15px sm:inset 0 0 20px rgba(168, 85, 245, 0.15)",
                          },
                        }),
                        L.jsxs("div", {
                          className:
                            "absolute inset-9 sm:inset-16 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 shadow-2xl flex items-center justify-center",
                          children: [
                            L.jsx("div", {
                              className:
                                "absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300 to-pink-300 animate-pulse opacity-30",
                            }),
                            L.jsx("div", {
                              className:
                                "absolute -inset-3 sm:-inset-4 rounded-full border border-cyan-400/30 animate-pulse",
                            }),
                            L.jsxs("div", {
                              className:
                                "relative flex items-center justify-center gap-1 sm:gap-2",
                              children: [
                                L.jsx(Yg, {
                                  className:
                                    "w-6 h-6 sm:w-10 sm:h-10 text-white fill-white animate-bounce",
                                }),
                                L.jsx("span", {
                                  className:
                                    "text-xs sm:text-base font-bold text-white drop-shadow-lg",
                                  children: "FoodEase",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    [0, 1, 2, 3].map((v) =>
                      L.jsx(
                        "div",
                        {
                          className: "absolute w-6 h-6 sm:w-10 sm:h-10",
                          style: {
                            animation: "orbit 8s linear infinite",
                            animationDelay: `${v * 2}s`,
                          },
                          children: L.jsx("div", {
                            className: `w-full h-full rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold shadow-lg backdrop-blur-sm
                    ${v % 3 === 0 ? "bg-cyan-500/30 border border-cyan-400 shadow-cyan-500/50" : v % 3 === 1 ? "bg-pink-500/30 border border-pink-400 shadow-pink-500/50" : "bg-purple-500/30 border border-purple-400 shadow-purple-500/50"}`,
                            children:
                              v % 3 === 0 ? "🍜" : v % 3 === 1 ? "🍱" : "🍕",
                          }),
                        },
                        v,
                      ),
                    ),
                    L.jsx("div", {
                      className: "absolute top-0 left-1/4 animate-float",
                      style: { animationDelay: "0s" },
                      children: L.jsx(o0, {
                        className:
                          "w-3 h-3 sm:w-5 sm:h-5 text-cyan-300 opacity-60",
                      }),
                    }),
                    L.jsx("div", {
                      className: "absolute bottom-1/4 right-1/4 animate-float",
                      style: { animationDelay: "1.5s" },
                      children: L.jsx(o0, {
                        className:
                          "w-3 h-3 sm:w-5 sm:h-5 text-pink-300 opacity-60",
                      }),
                    }),
                  ],
                }),
                L.jsxs("div", {
                  className: "space-y-3 sm:space-y-4",
                  children: [
                    L.jsx("h2", {
                      className:
                        "text-2xl sm:text-5xl font-black bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse drop-shadow-lg",
                      children: "FoodEase",
                    }),
                    L.jsxs("div", {
                      className: "flex flex-col items-center gap-3",
                      children: [
                        L.jsxs("div", {
                          className:
                            "inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-cyan-500/30 backdrop-blur-md",
                          children: [
                            L.jsx("span", {
                              className: "text-2xl sm:text-3xl",
                              children: d[o].icon,
                            }),
                            L.jsx("span", {
                              className:
                                "text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent",
                              children: d[o].text,
                            }),
                            L.jsxs("span", {
                              className: "inline-flex gap-1.5",
                              children: [
                                L.jsx("span", {
                                  className:
                                    "w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce shadow-lg shadow-cyan-500/50",
                                }),
                                L.jsx("span", {
                                  className:
                                    "w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full animate-bounce shadow-lg shadow-pink-500/50",
                                  style: { animationDelay: "0.15s" },
                                }),
                                L.jsx("span", {
                                  className:
                                    "w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full animate-bounce shadow-lg shadow-purple-500/50",
                                  style: { animationDelay: "0.3s" },
                                }),
                              ],
                            }),
                          ],
                        }),
                        L.jsx("p", {
                          className:
                            "text-xs sm:text-sm bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-semibold",
                          children: "Delicious moments loading...",
                        }),
                      ],
                    }),
                  ],
                }),
                L.jsxs("div", {
                  className: "space-y-2 sm:space-y-3 max-w-md mx-auto",
                  children: [
                    L.jsx("div", {
                      className:
                        "w-full bg-gradient-to-r from-slate-800 to-slate-900 rounded-full h-2.5 sm:h-4 overflow-hidden shadow-2xl border border-cyan-500/20",
                      children: L.jsx("div", {
                        className:
                          "h-full bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 rounded-full",
                        style: {
                          animation: "progress 3s ease-in-out infinite",
                          boxShadow:
                            "0 0 20px rgba(34, 211, 238, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.3)",
                        },
                      }),
                    }),
                    L.jsx("div", {
                      className: "text-center",
                      children: L.jsx("span", {
                        className:
                          "text-xs sm:text-sm bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent font-bold",
                        children: "Initializing...",
                      }),
                    }),
                  ],
                }),
                L.jsx("div", {
                  className: "flex gap-3 sm:gap-8 justify-center pb-4 sm:pb-0",
                  children: ["🍕", "🍔", "🍰"].map((v, y) =>
                    L.jsxs(
                      "div",
                      {
                        className:
                          "text-2xl sm:text-4xl animate-float relative",
                        style: { animationDelay: `${y * 0.2}s` },
                        children: [
                          L.jsx("div", {
                            className:
                              "absolute inset-0 blur-lg opacity-40 rounded-full",
                            style: {
                              background:
                                y === 0
                                  ? "rgb(236, 72, 153)"
                                  : y === 1
                                    ? "rgb(34, 211, 238)"
                                    : "rgb(168, 85, 245)",
                            },
                          }),
                          L.jsx("span", { className: "relative", children: v }),
                        ],
                      },
                      y,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
      L.jsx("style", {
        children: `
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(90px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(90px) rotate(-360deg); }
        }

        @keyframes progress {
          0%, 100% { width: 0%; }
          50% { width: 100%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-6000 { animation-delay: 6s; }
        .animate-float { animation: float 3s ease-in-out infinite; }

        @media (max-width: 640px) {
          @keyframes orbit {
            0% { transform: rotate(0deg) translateX(60px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
          }
        }

        @media (max-width: 480px) {
          @keyframes orbit {
            0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
          }
        }
      `,
      }),
    ],
  });
}
const Vg = q.createContext(),
  Kg = ({ children: i }) => {
    const [c, o] = q.useState(null),
      [f, d] = q.useState(null);
    return L.jsx(Vg.Provider, {
      value: { user: c, setUser: o, device: f, setDevice: d },
      children: i,
    });
  },
  Jg = q.lazy(() => kv(() => import("./SystemGuard.js"), [])),
  kg = Sg(
    [
      {
        path: "*",
        element: L.jsx(Ug, { children: L.jsx(Jg, {}) }),
        HydrateFallback: L.jsx(H0, {}),
      },
    ],
    { future: { v7_startTransition: !0 } },
  );
uy.createRoot(document.getElementById("ajayos")).render(
  L.jsx(d0.StrictMode, {
    children: L.jsx(q.Suspense, {
      fallback: L.jsx(H0, {}),
      children: L.jsx(Kg, { children: L.jsx(Rg, { router: kg }) }),
    }),
  }),
);
export {
  Yg as C,
  H0 as F,
  o0 as S,
  Vg as U,
  Fg as a,
  Hf as b,
  ir as c,
  Zg as d,
  Pg as e,
  $g as g,
  L as j,
  q as r,
  Ig as u,
};
