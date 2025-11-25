var hv = Object.defineProperty,
  mv = Object.defineProperties;
var vv = Object.getOwnPropertyDescriptors;
var Ki = Object.getOwnPropertySymbols;
var Pd = Object.prototype.hasOwnProperty,
  Id = Object.prototype.propertyIsEnumerable;
var ff = (i, r, o) =>
    r in i
      ? hv(i, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (i[r] = o),
  Mu = (i, r) => {
    for (var o in r || (r = {})) Pd.call(r, o) && ff(i, o, r[o]);
    if (Ki) for (var o of Ki(r)) Id.call(r, o) && ff(i, o, r[o]);
    return i;
  },
  eh = (i, r) => mv(i, vv(r));
var of = (i, r) => {
  var o = {};
  for (var f in i) Pd.call(i, f) && r.indexOf(f) < 0 && (o[f] = i[f]);
  if (i != null && Ki)
    for (var f of Ki(i)) r.indexOf(f) < 0 && Id.call(i, f) && (o[f] = i[f]);
  return o;
};
var Mn = (i, r, o) => ff(i, typeof r != "symbol" ? r + "" : r, o);
function Bh(i, r) {
  for (var o = 0; o < r.length; o++) {
    const f = r[o];
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
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
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
const yv = "modulepreload",
  gv = function (i) {
    return "/" + i;
  },
  th = {},
  pv = function (r, o, f) {
    let d = Promise.resolve();
    if (o && o.length > 0) {
      let y = function (m) {
        return Promise.all(
          m.map((M) =>
            Promise.resolve(M).then(
              (z) => ({ status: "fulfilled", value: z }),
              (z) => ({ status: "rejected", reason: z }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const D = document.querySelector("meta[property=csp-nonce]"),
        g =
          (D == null ? void 0 : D.nonce) ||
          (D == null ? void 0 : D.getAttribute("nonce"));
      d = y(
        o.map((m) => {
          if (((m = gv(m)), m in th)) return;
          th[m] = !0;
          const M = m.endsWith(".css"),
            z = M ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${m}"]${z}`)) return;
          const j = document.createElement("link");
          if (
            ((j.rel = M ? "stylesheet" : yv),
            M || (j.as = "script"),
            (j.crossOrigin = ""),
            (j.href = m),
            g && j.setAttribute("nonce", g),
            document.head.appendChild(j),
            M)
          )
            return new Promise((Y, W) => {
              j.addEventListener("load", Y),
                j.addEventListener("error", () =>
                  W(new Error(`Unable to preload CSS for ${m}`)),
                );
            });
        }),
      );
    }
    function v(y) {
      const D = new Event("vite:preloadError", { cancelable: !0 });
      if (((D.payload = y), window.dispatchEvent(D), !D.defaultPrevented))
        throw y;
    }
    return d.then((y) => {
      for (const D of y || []) D.status === "rejected" && v(D.reason);
      return r().catch(v);
    });
  };
var Eg =
  typeof globalThis != "undefined"
    ? globalThis
    : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
        ? global
        : typeof self != "undefined"
          ? self
          : {};
function Tf(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
function xg(i) {
  if (Object.prototype.hasOwnProperty.call(i, "__esModule")) return i;
  var r = i.default;
  if (typeof r == "function") {
    var o = function f() {
      return this instanceof f
        ? Reflect.construct(r, arguments, this.constructor)
        : r.apply(this, arguments);
    };
    o.prototype = r.prototype;
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
var sf = { exports: {} },
  zu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lh;
function bv() {
  if (lh) return zu;
  lh = 1;
  var i = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function o(f, d, v) {
    var y = null;
    if (
      (v !== void 0 && (y = "" + v),
      d.key !== void 0 && (y = "" + d.key),
      "key" in d)
    ) {
      v = {};
      for (var D in d) D !== "key" && (v[D] = d[D]);
    } else v = d;
    return (
      (d = v.ref),
      { $$typeof: i, type: f, key: y, ref: d !== void 0 ? d : null, props: v }
    );
  }
  return (zu.Fragment = r), (zu.jsx = o), (zu.jsxs = o), zu;
}
var ah;
function Sv() {
  return ah || ((ah = 1), (sf.exports = bv())), sf.exports;
}
var C = Sv(),
  df = { exports: {} },
  ye = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nh;
function Ev() {
  if (nh) return ye;
  nh = 1;
  var i = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    v = Symbol.for("react.consumer"),
    y = Symbol.for("react.context"),
    D = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    M = Symbol.for("react.lazy"),
    z = Symbol.iterator;
  function j(b) {
    return b === null || typeof b != "object"
      ? null
      : ((b = (z && b[z]) || b["@@iterator"]),
        typeof b == "function" ? b : null);
  }
  var Y = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    W = Object.assign,
    K = {};
  function I(b, L, le) {
    (this.props = b),
      (this.context = L),
      (this.refs = K),
      (this.updater = le || Y);
  }
  (I.prototype.isReactComponent = {}),
    (I.prototype.setState = function (b, L) {
      if (typeof b != "object" && typeof b != "function" && b != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, b, L, "setState");
    }),
    (I.prototype.forceUpdate = function (b) {
      this.updater.enqueueForceUpdate(this, b, "forceUpdate");
    });
  function pe() {}
  pe.prototype = I.prototype;
  function te(b, L, le) {
    (this.props = b),
      (this.context = L),
      (this.refs = K),
      (this.updater = le || Y);
  }
  var Ae = (te.prototype = new pe());
  (Ae.constructor = te), W(Ae, I.prototype), (Ae.isPureReactComponent = !0);
  var Ve = Array.isArray,
    fe = { H: null, A: null, T: null, S: null },
    et = Object.prototype.hasOwnProperty;
  function O(b, L, le, ne, J, he) {
    return (
      (le = he.ref),
      {
        $$typeof: i,
        type: b,
        key: L,
        ref: le !== void 0 ? le : null,
        props: he,
      }
    );
  }
  function ce(b, L) {
    return O(b.type, L, void 0, void 0, void 0, b.props);
  }
  function Z(b) {
    return typeof b == "object" && b !== null && b.$$typeof === i;
  }
  function F(b) {
    var L = { "=": "=0", ":": "=2" };
    return (
      "$" +
      b.replace(/[=:]/g, function (le) {
        return L[le];
      })
    );
  }
  var Ce = /\/+/g;
  function je(b, L) {
    return typeof b == "object" && b !== null && b.key != null
      ? F("" + b.key)
      : L.toString(36);
  }
  function Je() {}
  function ke(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (
          (typeof b.status == "string"
            ? b.then(Je, Je)
            : ((b.status = "pending"),
              b.then(
                function (L) {
                  b.status === "pending" &&
                    ((b.status = "fulfilled"), (b.value = L));
                },
                function (L) {
                  b.status === "pending" &&
                    ((b.status = "rejected"), (b.reason = L));
                },
              )),
          b.status)
        ) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
        }
    }
    throw b;
  }
  function We(b, L, le, ne, J) {
    var he = typeof b;
    (he === "undefined" || he === "boolean") && (b = null);
    var de = !1;
    if (b === null) de = !0;
    else
      switch (he) {
        case "bigint":
        case "string":
        case "number":
          de = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case i:
            case r:
              de = !0;
              break;
            case M:
              return (de = b._init), We(de(b._payload), L, le, ne, J);
          }
      }
    if (de)
      return (
        (J = J(b)),
        (de = ne === "" ? "." + je(b, 0) : ne),
        Ve(J)
          ? ((le = ""),
            de != null && (le = de.replace(Ce, "$&/") + "/"),
            We(J, L, le, "", function (tt) {
              return tt;
            }))
          : J != null &&
            (Z(J) &&
              (J = ce(
                J,
                le +
                  (J.key == null || (b && b.key === J.key)
                    ? ""
                    : ("" + J.key).replace(Ce, "$&/") + "/") +
                  de,
              )),
            L.push(J)),
        1
      );
    de = 0;
    var $e = ne === "" ? "." : ne + ":";
    if (Ve(b))
      for (var xe = 0; xe < b.length; xe++)
        (ne = b[xe]), (he = $e + je(ne, xe)), (de += We(ne, L, le, he, J));
    else if (((xe = j(b)), typeof xe == "function"))
      for (b = xe.call(b), xe = 0; !(ne = b.next()).done; )
        (ne = ne.value), (he = $e + je(ne, xe++)), (de += We(ne, L, le, he, J));
    else if (he === "object") {
      if (typeof b.then == "function") return We(ke(b), L, le, ne, J);
      throw (
        ((L = String(b)),
        Error(
          "Objects are not valid as a React child (found: " +
            (L === "[object Object]"
              ? "object with keys {" + Object.keys(b).join(", ") + "}"
              : L) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return de;
  }
  function X(b, L, le) {
    if (b == null) return b;
    var ne = [],
      J = 0;
    return (
      We(b, ne, "", "", function (he) {
        return L.call(le, he, J++);
      }),
      ne
    );
  }
  function se(b) {
    if (b._status === -1) {
      var L = b._result;
      (L = L()),
        L.then(
          function (le) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 1), (b._result = le));
          },
          function (le) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 2), (b._result = le));
          },
        ),
        b._status === -1 && ((b._status = 0), (b._result = L));
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var $ =
    typeof reportError == "function"
      ? reportError
      : function (b) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var L = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof b == "object" &&
                b !== null &&
                typeof b.message == "string"
                  ? String(b.message)
                  : String(b),
              error: b,
            });
            if (!window.dispatchEvent(L)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", b);
            return;
          }
          console.error(b);
        };
  function Ne() {}
  return (
    (ye.Children = {
      map: X,
      forEach: function (b, L, le) {
        X(
          b,
          function () {
            L.apply(this, arguments);
          },
          le,
        );
      },
      count: function (b) {
        var L = 0;
        return (
          X(b, function () {
            L++;
          }),
          L
        );
      },
      toArray: function (b) {
        return (
          X(b, function (L) {
            return L;
          }) || []
        );
      },
      only: function (b) {
        if (!Z(b))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return b;
      },
    }),
    (ye.Component = I),
    (ye.Fragment = o),
    (ye.Profiler = d),
    (ye.PureComponent = te),
    (ye.StrictMode = f),
    (ye.Suspense = g),
    (ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = fe),
    (ye.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (ye.cache = function (b) {
      return function () {
        return b.apply(null, arguments);
      };
    }),
    (ye.cloneElement = function (b, L, le) {
      if (b == null)
        throw Error(
          "The argument must be a React element, but you passed " + b + ".",
        );
      var ne = W({}, b.props),
        J = b.key,
        he = void 0;
      if (L != null)
        for (de in (L.ref !== void 0 && (he = void 0),
        L.key !== void 0 && (J = "" + L.key),
        L))
          !et.call(L, de) ||
            de === "key" ||
            de === "__self" ||
            de === "__source" ||
            (de === "ref" && L.ref === void 0) ||
            (ne[de] = L[de]);
      var de = arguments.length - 2;
      if (de === 1) ne.children = le;
      else if (1 < de) {
        for (var $e = Array(de), xe = 0; xe < de; xe++)
          $e[xe] = arguments[xe + 2];
        ne.children = $e;
      }
      return O(b.type, J, void 0, void 0, he, ne);
    }),
    (ye.createContext = function (b) {
      return (
        (b = {
          $$typeof: y,
          _currentValue: b,
          _currentValue2: b,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (b.Provider = b),
        (b.Consumer = { $$typeof: v, _context: b }),
        b
      );
    }),
    (ye.createElement = function (b, L, le) {
      var ne,
        J = {},
        he = null;
      if (L != null)
        for (ne in (L.key !== void 0 && (he = "" + L.key), L))
          et.call(L, ne) &&
            ne !== "key" &&
            ne !== "__self" &&
            ne !== "__source" &&
            (J[ne] = L[ne]);
      var de = arguments.length - 2;
      if (de === 1) J.children = le;
      else if (1 < de) {
        for (var $e = Array(de), xe = 0; xe < de; xe++)
          $e[xe] = arguments[xe + 2];
        J.children = $e;
      }
      if (b && b.defaultProps)
        for (ne in ((de = b.defaultProps), de))
          J[ne] === void 0 && (J[ne] = de[ne]);
      return O(b, he, void 0, void 0, null, J);
    }),
    (ye.createRef = function () {
      return { current: null };
    }),
    (ye.forwardRef = function (b) {
      return { $$typeof: D, render: b };
    }),
    (ye.isValidElement = Z),
    (ye.lazy = function (b) {
      return { $$typeof: M, _payload: { _status: -1, _result: b }, _init: se };
    }),
    (ye.memo = function (b, L) {
      return { $$typeof: m, type: b, compare: L === void 0 ? null : L };
    }),
    (ye.startTransition = function (b) {
      var L = fe.T,
        le = {};
      fe.T = le;
      try {
        var ne = b(),
          J = fe.S;
        J !== null && J(le, ne),
          typeof ne == "object" &&
            ne !== null &&
            typeof ne.then == "function" &&
            ne.then(Ne, $);
      } catch (he) {
        $(he);
      } finally {
        fe.T = L;
      }
    }),
    (ye.unstable_useCacheRefresh = function () {
      return fe.H.useCacheRefresh();
    }),
    (ye.use = function (b) {
      return fe.H.use(b);
    }),
    (ye.useActionState = function (b, L, le) {
      return fe.H.useActionState(b, L, le);
    }),
    (ye.useCallback = function (b, L) {
      return fe.H.useCallback(b, L);
    }),
    (ye.useContext = function (b) {
      return fe.H.useContext(b);
    }),
    (ye.useDebugValue = function () {}),
    (ye.useDeferredValue = function (b, L) {
      return fe.H.useDeferredValue(b, L);
    }),
    (ye.useEffect = function (b, L) {
      return fe.H.useEffect(b, L);
    }),
    (ye.useId = function () {
      return fe.H.useId();
    }),
    (ye.useImperativeHandle = function (b, L, le) {
      return fe.H.useImperativeHandle(b, L, le);
    }),
    (ye.useInsertionEffect = function (b, L) {
      return fe.H.useInsertionEffect(b, L);
    }),
    (ye.useLayoutEffect = function (b, L) {
      return fe.H.useLayoutEffect(b, L);
    }),
    (ye.useMemo = function (b, L) {
      return fe.H.useMemo(b, L);
    }),
    (ye.useOptimistic = function (b, L) {
      return fe.H.useOptimistic(b, L);
    }),
    (ye.useReducer = function (b, L, le) {
      return fe.H.useReducer(b, L, le);
    }),
    (ye.useRef = function (b) {
      return fe.H.useRef(b);
    }),
    (ye.useState = function (b) {
      return fe.H.useState(b);
    }),
    (ye.useSyncExternalStore = function (b, L, le) {
      return fe.H.useSyncExternalStore(b, L, le);
    }),
    (ye.useTransition = function () {
      return fe.H.useTransition();
    }),
    (ye.version = "19.0.0"),
    ye
  );
}
var uh;
function Df() {
  return uh || ((uh = 1), (df.exports = Ev())), df.exports;
}
var q = Df();
const Lh = Tf(q),
  xv = Bh({ __proto__: null, default: Lh }, [q]);
var hf = { exports: {} },
  Au = {},
  mf = { exports: {} },
  vf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ih;
function Tv() {
  return (
    ih ||
      ((ih = 1),
      (function (i) {
        function r(X, se) {
          var $ = X.length;
          X.push(se);
          e: for (; 0 < $; ) {
            var Ne = ($ - 1) >>> 1,
              b = X[Ne];
            if (0 < d(b, se)) (X[Ne] = se), (X[$] = b), ($ = Ne);
            else break e;
          }
        }
        function o(X) {
          return X.length === 0 ? null : X[0];
        }
        function f(X) {
          if (X.length === 0) return null;
          var se = X[0],
            $ = X.pop();
          if ($ !== se) {
            X[0] = $;
            e: for (var Ne = 0, b = X.length, L = b >>> 1; Ne < L; ) {
              var le = 2 * (Ne + 1) - 1,
                ne = X[le],
                J = le + 1,
                he = X[J];
              if (0 > d(ne, $))
                J < b && 0 > d(he, ne)
                  ? ((X[Ne] = he), (X[J] = $), (Ne = J))
                  : ((X[Ne] = ne), (X[le] = $), (Ne = le));
              else if (J < b && 0 > d(he, $))
                (X[Ne] = he), (X[J] = $), (Ne = J);
              else break e;
            }
          }
          return se;
        }
        function d(X, se) {
          var $ = X.sortIndex - se.sortIndex;
          return $ !== 0 ? $ : X.id - se.id;
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
            D = y.now();
          i.unstable_now = function () {
            return y.now() - D;
          };
        }
        var g = [],
          m = [],
          M = 1,
          z = null,
          j = 3,
          Y = !1,
          W = !1,
          K = !1,
          I = typeof setTimeout == "function" ? setTimeout : null,
          pe = typeof clearTimeout == "function" ? clearTimeout : null,
          te = typeof setImmediate != "undefined" ? setImmediate : null;
        function Ae(X) {
          for (var se = o(m); se !== null; ) {
            if (se.callback === null) f(m);
            else if (se.startTime <= X)
              f(m), (se.sortIndex = se.expirationTime), r(g, se);
            else break;
            se = o(m);
          }
        }
        function Ve(X) {
          if (((K = !1), Ae(X), !W))
            if (o(g) !== null) (W = !0), ke();
            else {
              var se = o(m);
              se !== null && We(Ve, se.startTime - X);
            }
        }
        var fe = !1,
          et = -1,
          O = 5,
          ce = -1;
        function Z() {
          return !(i.unstable_now() - ce < O);
        }
        function F() {
          if (fe) {
            var X = i.unstable_now();
            ce = X;
            var se = !0;
            try {
              e: {
                (W = !1), K && ((K = !1), pe(et), (et = -1)), (Y = !0);
                var $ = j;
                try {
                  t: {
                    for (
                      Ae(X), z = o(g);
                      z !== null && !(z.expirationTime > X && Z());

                    ) {
                      var Ne = z.callback;
                      if (typeof Ne == "function") {
                        (z.callback = null), (j = z.priorityLevel);
                        var b = Ne(z.expirationTime <= X);
                        if (((X = i.unstable_now()), typeof b == "function")) {
                          (z.callback = b), Ae(X), (se = !0);
                          break t;
                        }
                        z === o(g) && f(g), Ae(X);
                      } else f(g);
                      z = o(g);
                    }
                    if (z !== null) se = !0;
                    else {
                      var L = o(m);
                      L !== null && We(Ve, L.startTime - X), (se = !1);
                    }
                  }
                  break e;
                } finally {
                  (z = null), (j = $), (Y = !1);
                }
                se = void 0;
              }
            } finally {
              se ? Ce() : (fe = !1);
            }
          }
        }
        var Ce;
        if (typeof te == "function")
          Ce = function () {
            te(F);
          };
        else if (typeof MessageChannel != "undefined") {
          var je = new MessageChannel(),
            Je = je.port2;
          (je.port1.onmessage = F),
            (Ce = function () {
              Je.postMessage(null);
            });
        } else
          Ce = function () {
            I(F, 0);
          };
        function ke() {
          fe || ((fe = !0), Ce());
        }
        function We(X, se) {
          et = I(function () {
            X(i.unstable_now());
          }, se);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (X) {
            X.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            W || Y || ((W = !0), ke());
          }),
          (i.unstable_forceFrameRate = function (X) {
            0 > X || 125 < X
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (O = 0 < X ? Math.floor(1e3 / X) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return j;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return o(g);
          }),
          (i.unstable_next = function (X) {
            switch (j) {
              case 1:
              case 2:
              case 3:
                var se = 3;
                break;
              default:
                se = j;
            }
            var $ = j;
            j = se;
            try {
              return X();
            } finally {
              j = $;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (X, se) {
            switch (X) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                X = 3;
            }
            var $ = j;
            j = X;
            try {
              return se();
            } finally {
              j = $;
            }
          }),
          (i.unstable_scheduleCallback = function (X, se, $) {
            var Ne = i.unstable_now();
            switch (
              (typeof $ == "object" && $ !== null
                ? (($ = $.delay),
                  ($ = typeof $ == "number" && 0 < $ ? Ne + $ : Ne))
                : ($ = Ne),
              X)
            ) {
              case 1:
                var b = -1;
                break;
              case 2:
                b = 250;
                break;
              case 5:
                b = 1073741823;
                break;
              case 4:
                b = 1e4;
                break;
              default:
                b = 5e3;
            }
            return (
              (b = $ + b),
              (X = {
                id: M++,
                callback: se,
                priorityLevel: X,
                startTime: $,
                expirationTime: b,
                sortIndex: -1,
              }),
              $ > Ne
                ? ((X.sortIndex = $),
                  r(m, X),
                  o(g) === null &&
                    X === o(m) &&
                    (K ? (pe(et), (et = -1)) : (K = !0), We(Ve, $ - Ne)))
                : ((X.sortIndex = b), r(g, X), W || Y || ((W = !0), ke())),
              X
            );
          }),
          (i.unstable_shouldYield = Z),
          (i.unstable_wrapCallback = function (X) {
            var se = j;
            return function () {
              var $ = j;
              j = se;
              try {
                return X.apply(this, arguments);
              } finally {
                j = $;
              }
            };
          });
      })(vf)),
    vf
  );
}
var rh;
function Dv() {
  return rh || ((rh = 1), (mf.exports = Tv())), mf.exports;
}
var yf = { exports: {} },
  Dt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ch;
function Rv() {
  if (ch) return Dt;
  ch = 1;
  var i = Df();
  function r(g) {
    var m = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var M = 2; M < arguments.length; M++)
        m += "&args[]=" + encodeURIComponent(arguments[M]);
    }
    return (
      "Minified React error #" +
      g +
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
          throw Error(r(522));
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
  function v(g, m, M) {
    var z =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: z == null ? null : "" + z,
      children: g,
      containerInfo: m,
      implementation: M,
    };
  }
  var y = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function D(g, m) {
    if (g === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (Dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    (Dt.createPortal = function (g, m) {
      var M =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(r(299));
      return v(g, m, null, M);
    }),
    (Dt.flushSync = function (g) {
      var m = y.T,
        M = f.p;
      try {
        if (((y.T = null), (f.p = 2), g)) return g();
      } finally {
        (y.T = m), (f.p = M), f.d.f();
      }
    }),
    (Dt.preconnect = function (g, m) {
      typeof g == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        f.d.C(g, m));
    }),
    (Dt.prefetchDNS = function (g) {
      typeof g == "string" && f.d.D(g);
    }),
    (Dt.preinit = function (g, m) {
      if (typeof g == "string" && m && typeof m.as == "string") {
        var M = m.as,
          z = D(M, m.crossOrigin),
          j = typeof m.integrity == "string" ? m.integrity : void 0,
          Y = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        M === "style"
          ? f.d.S(g, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: z,
              integrity: j,
              fetchPriority: Y,
            })
          : M === "script" &&
            f.d.X(g, {
              crossOrigin: z,
              integrity: j,
              fetchPriority: Y,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (Dt.preinitModule = function (g, m) {
      if (typeof g == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var M = D(m.as, m.crossOrigin);
            f.d.M(g, {
              crossOrigin: M,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && f.d.M(g);
    }),
    (Dt.preload = function (g, m) {
      if (
        typeof g == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var M = m.as,
          z = D(M, m.crossOrigin);
        f.d.L(g, M, {
          crossOrigin: z,
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
    (Dt.preloadModule = function (g, m) {
      if (typeof g == "string")
        if (m) {
          var M = D(m.as, m.crossOrigin);
          f.d.m(g, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: M,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else f.d.m(g);
    }),
    (Dt.requestFormReset = function (g) {
      f.d.r(g);
    }),
    (Dt.unstable_batchedUpdates = function (g, m) {
      return g(m);
    }),
    (Dt.useFormState = function (g, m, M) {
      return y.H.useFormState(g, m, M);
    }),
    (Dt.useFormStatus = function () {
      return y.H.useHostTransitionStatus();
    }),
    (Dt.version = "19.0.0"),
    Dt
  );
}
var fh;
function Yh() {
  if (fh) return yf.exports;
  fh = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), (yf.exports = Rv()), yf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oh;
function Mv() {
  if (oh) return Au;
  oh = 1;
  var i = Dv(),
    r = Df(),
    o = Yh();
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
  var v = Symbol.for("react.element"),
    y = Symbol.for("react.transitional.element"),
    D = Symbol.for("react.portal"),
    g = Symbol.for("react.fragment"),
    m = Symbol.for("react.strict_mode"),
    M = Symbol.for("react.profiler"),
    z = Symbol.for("react.provider"),
    j = Symbol.for("react.consumer"),
    Y = Symbol.for("react.context"),
    W = Symbol.for("react.forward_ref"),
    K = Symbol.for("react.suspense"),
    I = Symbol.for("react.suspense_list"),
    pe = Symbol.for("react.memo"),
    te = Symbol.for("react.lazy"),
    Ae = Symbol.for("react.offscreen"),
    Ve = Symbol.for("react.memo_cache_sentinel"),
    fe = Symbol.iterator;
  function et(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (fe && e[fe]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var O = Symbol.for("react.client.reference");
  function ce(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === O ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case g:
        return "Fragment";
      case D:
        return "Portal";
      case M:
        return "Profiler";
      case m:
        return "StrictMode";
      case K:
        return "Suspense";
      case I:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Y:
          return (e.displayName || "Context") + ".Provider";
        case j:
          return (e._context.displayName || "Context") + ".Consumer";
        case W:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case pe:
          return (
            (t = e.displayName || null), t !== null ? t : ce(e.type) || "Memo"
          );
        case te:
          (t = e._payload), (e = e._init);
          try {
            return ce(e(t));
          } catch (l) {}
      }
    return null;
  }
  var Z = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = Object.assign,
    Ce,
    je;
  function Je(e) {
    if (Ce === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        (Ce = (t && t[1]) || ""),
          (je =
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
      Ce +
      e +
      je
    );
  }
  var ke = !1;
  function We(e, t) {
    if (!e || ke) return "";
    ke = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var H = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(H.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(H, []);
                } catch (U) {
                  var A = U;
                }
                Reflect.construct(e, [], H);
              } else {
                try {
                  H.call();
                } catch (U) {
                  A = U;
                }
                e.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                A = U;
              }
              (H = e()) &&
                typeof H.catch == "function" &&
                H.catch(function () {});
            }
          } catch (U) {
            if (U && A && typeof U.stack == "string") return [U.stack, A.stack];
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
        c = u[0],
        s = u[1];
      if (c && s) {
        var h = c.split(`
`),
          E = s.split(`
`);
        for (
          n = a = 0;
          a < h.length && !h[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; n < E.length && !E[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === h.length || n === E.length)
          for (
            a = h.length - 1, n = E.length - 1;
            1 <= a && 0 <= n && h[a] !== E[n];

          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (h[a] !== E[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || h[a] !== E[n])) {
                  var N =
                    `
` + h[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      N.includes("<anonymous>") &&
                      (N = N.replace("<anonymous>", e.displayName)),
                    N
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (ke = !1), (Error.prepareStackTrace = l);
    }
    return (l = e ? e.displayName || e.name : "") ? Je(l) : "";
  }
  function X(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Je(e.type);
      case 16:
        return Je("Lazy");
      case 13:
        return Je("Suspense");
      case 19:
        return Je("SuspenseList");
      case 0:
      case 15:
        return (e = We(e.type, !1)), e;
      case 11:
        return (e = We(e.type.render, !1)), e;
      case 1:
        return (e = We(e.type, !0)), e;
      default:
        return "";
    }
  }
  function se(e) {
    try {
      var t = "";
      do (t += X(e)), (e = e.return);
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function $(e) {
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
  function Ne(e) {
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
  function b(e) {
    if ($(e) !== e) throw Error(f(188));
  }
  function L(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = $(e)), t === null)) throw Error(f(188));
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
          if (u === l) return b(n), e;
          if (u === a) return b(n), t;
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) (l = n), (a = u);
      else {
        for (var c = !1, s = n.child; s; ) {
          if (s === l) {
            (c = !0), (l = n), (a = u);
            break;
          }
          if (s === a) {
            (c = !0), (a = n), (l = u);
            break;
          }
          s = s.sibling;
        }
        if (!c) {
          for (s = u.child; s; ) {
            if (s === l) {
              (c = !0), (l = u), (a = n);
              break;
            }
            if (s === a) {
              (c = !0), (a = u), (l = n);
              break;
            }
            s = s.sibling;
          }
          if (!c) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? e : t;
  }
  function le(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = le(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var ne = Array.isArray,
    J = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    he = { pending: !1, data: null, method: null, action: null },
    de = [],
    $e = -1;
  function xe(e) {
    return { current: e };
  }
  function tt(e) {
    0 > $e || ((e.current = de[$e]), (de[$e] = null), $e--);
  }
  function Ge(e, t) {
    $e++, (de[$e] = e.current), (e.current = t);
  }
  var Zt = xe(null),
    ut = xe(null),
    Rt = xe(null),
    oa = xe(null);
  function Ga(e, t) {
    switch ((Ge(Rt, t), Ge(ut, e), Ge(Zt, null), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? zd(t) : 0;
        break;
      default:
        if (
          ((e = e === 8 ? t.parentNode : t),
          (t = e.tagName),
          (e = e.namespaceURI))
        )
          (e = zd(e)), (t = Ad(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    tt(Zt), Ge(Zt, t);
  }
  function Ot() {
    tt(Zt), tt(ut), tt(Rt);
  }
  function _n(e) {
    e.memoizedState !== null && Ge(oa, e);
    var t = Zt.current,
      l = Ad(t, e.type);
    t !== l && (Ge(ut, e), Ge(Zt, l));
  }
  function Xa(e) {
    ut.current === e && (tt(Zt), tt(ut)),
      oa.current === e && (tt(oa), (Eu._currentValue = he));
  }
  var Qa = Object.prototype.hasOwnProperty,
    On = i.unstable_scheduleCallback,
    Un = i.unstable_cancelCallback,
    ar = i.unstable_shouldYield,
    nr = i.unstable_requestPaint,
    mt = i.unstable_now,
    sa = i.unstable_getCurrentPriorityLevel,
    Nn = i.unstable_ImmediatePriority,
    Va = i.unstable_UserBlockingPriority,
    Bt = i.unstable_NormalPriority,
    nl = i.unstable_LowPriority,
    jn = i.unstable_IdlePriority,
    Za = i.log,
    ur = i.unstable_setDisableYieldValue,
    Ut = null,
    Et = null;
  function Bu(e) {
    if (Et && typeof Et.onCommitFiberRoot == "function")
      try {
        Et.onCommitFiberRoot(Ut, e, void 0, (e.current.flags & 128) === 128);
      } catch (t) {}
  }
  function ul(e) {
    if (
      (typeof Za == "function" && ur(e),
      Et && typeof Et.setStrictMode == "function")
    )
      try {
        Et.setStrictMode(Ut, e);
      } catch (t) {}
  }
  var Mt = Math.clz32 ? Math.clz32 : Yu,
    Lu = Math.log,
    Ka = Math.LN2;
  function Yu(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Lu(e) / Ka) | 0)) | 0;
  }
  var Hl = 128,
    Bl = 4194304;
  function bl(e) {
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
  function da(e, t) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var a = 0,
      n = e.suspendedLanes,
      u = e.pingedLanes,
      c = e.warmLanes;
    e = e.finishedLanes !== 0;
    var s = l & 134217727;
    return (
      s !== 0
        ? ((l = s & ~n),
          l !== 0
            ? (a = bl(l))
            : ((u &= s),
              u !== 0
                ? (a = bl(u))
                : e || ((c = s & ~c), c !== 0 && (a = bl(c)))))
        : ((s = l & ~n),
          s !== 0
            ? (a = bl(s))
            : u !== 0
              ? (a = bl(u))
              : e || ((c = l & ~c), c !== 0 && (a = bl(c)))),
      a === 0
        ? 0
        : t !== 0 &&
            t !== a &&
            (t & n) === 0 &&
            ((n = a & -a),
            (c = t & -t),
            n >= c || (n === 32 && (c & 4194176) !== 0))
          ? t
          : a
    );
  }
  function ha(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function qu(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
        return t + 250;
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
  function ma() {
    var e = Hl;
    return (Hl <<= 1), (Hl & 4194176) === 0 && (Hl = 128), e;
  }
  function va() {
    var e = Bl;
    return (Bl <<= 1), (Bl & 62914560) === 0 && (Bl = 4194304), e;
  }
  function wn(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function ya(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function p(e, t, l, a, n, u) {
    var c = e.pendingLanes;
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
      E = e.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var N = 31 - Mt(l),
        H = 1 << N;
      (s[N] = 0), (h[N] = -1);
      var A = E[N];
      if (A !== null)
        for (E[N] = null, N = 0; N < A.length; N++) {
          var U = A[N];
          U !== null && (U.lane &= -536870913);
        }
      l &= ~H;
    }
    a !== 0 && x(e, a, 0),
      u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t));
  }
  function x(e, t, l) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var a = 31 - Mt(t);
    (e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 4194218));
  }
  function _(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - Mt(l),
        n = 1 << a;
      (n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n);
    }
  }
  function B(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Q() {
    var e = J.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Kd(e.type));
  }
  function ue(e, t) {
    var l = J.p;
    try {
      return (J.p = e), t();
    } finally {
      J.p = l;
    }
  }
  var re = Math.random().toString(36).slice(2),
    G = "__reactFiber$" + re,
    V = "__reactProps$" + re,
    k = "__reactContainer$" + re,
    ee = "__reactEvents$" + re,
    ve = "__reactListeners$" + re,
    Ee = "__reactHandles$" + re,
    rt = "__reactResources$" + re,
    _e = "__reactMarker$" + re;
  function Te(e) {
    delete e[G], delete e[V], delete e[ee], delete e[ve], delete e[Ee];
  }
  function we(e) {
    var t = e[G];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[k] || l[G])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = Ud(e); e !== null; ) {
            if ((l = e[G])) return l;
            e = Ud(e);
          }
        return t;
      }
      (e = l), (l = e.parentNode);
    }
    return null;
  }
  function Lt(e) {
    if ((e = e[G] || e[k])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function il(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(f(33));
  }
  function xt(e) {
    var t = e[rt];
    return (
      t ||
        (t = e[rt] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function He(e) {
    e[_e] = !0;
  }
  var Ja = new Set(),
    Ll = {};
  function zt(e, t) {
    rl(e, t), rl(e + "Capture", t);
  }
  function rl(e, t) {
    for (Ll[e] = t, e = 0; e < t.length; e++) Ja.add(t[e]);
  }
  var Nt = !(
      typeof window == "undefined" ||
      typeof window.document == "undefined" ||
      typeof window.document.createElement == "undefined"
    ),
    Me = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Ze = {},
    Sl = {};
  function ga(e) {
    return Qa.call(Sl, e)
      ? !0
      : Qa.call(Ze, e)
        ? !1
        : Me.test(e)
          ? (Sl[e] = !0)
          : ((Ze[e] = !0), !1);
  }
  function Ke(e, t, l) {
    if (ga(t))
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
  function cl(e, t, l) {
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
  function Kt(e, t, l, a) {
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
  function jt(e) {
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
  function _f(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function c0(e) {
    var t = _f(e) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof l != "undefined" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var n = l.get,
        u = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (c) {
            (a = "" + c), u.call(this, c);
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Gu(e) {
    e._valueTracker || (e._valueTracker = c0(e));
  }
  function Of(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return (
      e && (a = _f(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function Xu(e) {
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
  var f0 = /[\n"\\]/g;
  function Jt(e) {
    return e.replace(f0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function ir(e, t, l, a, n, u, c, s) {
    (e.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (e.type = c)
        : e.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + jt(t))
          : e.value !== "" + jt(t) && (e.value = "" + jt(t))
        : (c !== "submit" && c !== "reset") || e.removeAttribute("value"),
      t != null
        ? rr(e, c, jt(t))
        : l != null
          ? rr(e, c, jt(l))
          : a != null && e.removeAttribute("value"),
      n == null && u != null && (e.defaultChecked = !!u),
      n != null &&
        (e.checked = n && typeof n != "function" && typeof n != "symbol"),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (e.name = "" + jt(s))
        : e.removeAttribute("name");
  }
  function Uf(e, t, l, a, n, u, c, s) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.type = u),
      t != null || l != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) return;
      (l = l != null ? "" + jt(l) : ""),
        (t = t != null ? "" + jt(t) : l),
        s || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (a = a != null ? a : n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = s ? e.checked : !!a),
      (e.defaultChecked = !!a),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (e.name = c);
  }
  function rr(e, t, l) {
    (t === "number" && Xu(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function ka(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        (n = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + jt(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          (e[n].selected = !0), a && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Nf(e, t, l) {
    if (
      t != null &&
      ((t = "" + jt(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + jt(l) : "";
  }
  function jf(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (ne(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (t = l);
    }
    (l = jt(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== "" && a !== null && (e.value = a);
  }
  function Wa(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var o0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function wf(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : a
        ? e.setProperty(t, l)
        : typeof l != "number" || l === 0 || o0.has(t)
          ? t === "float"
            ? (e.cssFloat = l)
            : (e[t] = ("" + l).trim())
          : (e[t] = l + "px");
  }
  function Cf(e, t, l) {
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
        (a = t[n]), t.hasOwnProperty(n) && l[n] !== a && wf(e, n, a);
    } else for (var u in t) t.hasOwnProperty(u) && wf(e, u, t[u]);
  }
  function cr(e) {
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
  var s0 = new Map([
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
    d0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Qu(e) {
    return d0.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var fr = null;
  function or(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Fa = null,
    $a = null;
  function Hf(e) {
    var t = Lt(e);
    if (t && (e = t.stateNode)) {
      var l = e[V] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (ir(
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
                'input[name="' + Jt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[V] || null;
                if (!n) throw Error(f(90));
                ir(
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
              (a = l[t]), a.form === e.form && Of(a);
          }
          break e;
        case "textarea":
          Nf(e, l.value, l.defaultValue);
          break e;
        case "select":
          (t = l.value), t != null && ka(e, !!l.multiple, t, !1);
      }
    }
  }
  var sr = !1;
  function Bf(e, t, l) {
    if (sr) return e(t, l);
    sr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((sr = !1),
        (Fa !== null || $a !== null) &&
          (Mi(), Fa && ((t = Fa), (e = $a), ($a = Fa = null), Hf(t), e)))
      )
        for (t = 0; t < e.length; t++) Hf(e[t]);
    }
  }
  function Cn(e, t) {
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
  var dr = !1;
  if (Nt)
    try {
      var Hn = {};
      Object.defineProperty(Hn, "passive", {
        get: function () {
          dr = !0;
        },
      }),
        window.addEventListener("test", Hn, Hn),
        window.removeEventListener("test", Hn, Hn);
    } catch (e) {
      dr = !1;
    }
  var Yl = null,
    hr = null,
    Vu = null;
  function Lf() {
    if (Vu) return Vu;
    var e,
      t = hr,
      l = t.length,
      a,
      n = "value" in Yl ? Yl.value : Yl.textContent,
      u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var c = l - e;
    for (a = 1; a <= c && t[l - a] === n[u - a]; a++);
    return (Vu = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function Zu(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ku() {
    return !0;
  }
  function Yf() {
    return !1;
  }
  function wt(e) {
    function t(l, a, n, u, c) {
      (this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = c),
        (this.currentTarget = null);
      for (var s in e)
        e.hasOwnProperty(s) && ((l = e[s]), (this[s] = l ? l(u) : u[s]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Ku
          : Yf),
        (this.isPropagationStopped = Yf),
        this
      );
    }
    return (
      F(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Ku));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Ku));
        },
        persist: function () {},
        isPersistent: Ku,
      }),
      t
    );
  }
  var pa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ju = wt(pa),
    Bn = F({}, pa, { view: 0, detail: 0 }),
    h0 = wt(Bn),
    mr,
    vr,
    Ln,
    ku = F({}, Bn, {
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
      getModifierState: gr,
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
          : (e !== Ln &&
              (Ln && e.type === "mousemove"
                ? ((mr = e.screenX - Ln.screenX), (vr = e.screenY - Ln.screenY))
                : (vr = mr = 0),
              (Ln = e)),
            mr);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : vr;
      },
    }),
    qf = wt(ku),
    m0 = F({}, ku, { dataTransfer: 0 }),
    v0 = wt(m0),
    y0 = F({}, Bn, { relatedTarget: 0 }),
    yr = wt(y0),
    g0 = F({}, pa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    p0 = wt(g0),
    b0 = F({}, pa, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    S0 = wt(b0),
    E0 = F({}, pa, { data: 0 }),
    Gf = wt(E0),
    x0 = {
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
    T0 = {
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
    D0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function R0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = D0[e])
        ? !!t[e]
        : !1;
  }
  function gr() {
    return R0;
  }
  var M0 = F({}, Bn, {
      key: function (e) {
        if (e.key) {
          var t = x0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Zu(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? T0[e.keyCode] || "Unidentified"
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
      getModifierState: gr,
      charCode: function (e) {
        return e.type === "keypress" ? Zu(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Zu(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    z0 = wt(M0),
    A0 = F({}, ku, {
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
    Xf = wt(A0),
    _0 = F({}, Bn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: gr,
    }),
    O0 = wt(_0),
    U0 = F({}, pa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    N0 = wt(U0),
    j0 = F({}, ku, {
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
    w0 = wt(j0),
    C0 = F({}, pa, { newState: 0, oldState: 0 }),
    H0 = wt(C0),
    B0 = [9, 13, 27, 32],
    pr = Nt && "CompositionEvent" in window,
    Yn = null;
  Nt && "documentMode" in document && (Yn = document.documentMode);
  var L0 = Nt && "TextEvent" in window && !Yn,
    Qf = Nt && (!pr || (Yn && 8 < Yn && 11 >= Yn)),
    Vf = " ",
    Zf = !1;
  function Kf(e, t) {
    switch (e) {
      case "keyup":
        return B0.indexOf(t.keyCode) !== -1;
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
  function Jf(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Pa = !1;
  function Y0(e, t) {
    switch (e) {
      case "compositionend":
        return Jf(t);
      case "keypress":
        return t.which !== 32 ? null : ((Zf = !0), Vf);
      case "textInput":
        return (e = t.data), e === Vf && Zf ? null : e;
      default:
        return null;
    }
  }
  function q0(e, t) {
    if (Pa)
      return e === "compositionend" || (!pr && Kf(e, t))
        ? ((e = Lf()), (Vu = hr = Yl = null), (Pa = !1), e)
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
        return Qf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var G0 = {
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
  function kf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!G0[e.type] : t === "textarea";
  }
  function Wf(e, t, l, a) {
    Fa ? ($a ? $a.push(a) : ($a = [a])) : (Fa = a),
      (t = Ui(t, "onChange")),
      0 < t.length &&
        ((l = new Ju("onChange", "change", null, l, a)),
        e.push({ event: l, listeners: t }));
  }
  var qn = null,
    Gn = null;
  function X0(e) {
    xd(e, 0);
  }
  function Wu(e) {
    var t = il(e);
    if (Of(t)) return e;
  }
  function Ff(e, t) {
    if (e === "change") return t;
  }
  var $f = !1;
  if (Nt) {
    var br;
    if (Nt) {
      var Sr = "oninput" in document;
      if (!Sr) {
        var Pf = document.createElement("div");
        Pf.setAttribute("oninput", "return;"),
          (Sr = typeof Pf.oninput == "function");
      }
      br = Sr;
    } else br = !1;
    $f = br && (!document.documentMode || 9 < document.documentMode);
  }
  function If() {
    qn && (qn.detachEvent("onpropertychange", eo), (Gn = qn = null));
  }
  function eo(e) {
    if (e.propertyName === "value" && Wu(Gn)) {
      var t = [];
      Wf(t, Gn, e, or(e)), Bf(X0, t);
    }
  }
  function Q0(e, t, l) {
    e === "focusin"
      ? (If(), (qn = t), (Gn = l), qn.attachEvent("onpropertychange", eo))
      : e === "focusout" && If();
  }
  function V0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Wu(Gn);
  }
  function Z0(e, t) {
    if (e === "click") return Wu(t);
  }
  function K0(e, t) {
    if (e === "input" || e === "change") return Wu(t);
  }
  function J0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Yt = typeof Object.is == "function" ? Object.is : J0;
  function Xn(e, t) {
    if (Yt(e, t)) return !0;
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
      if (!Qa.call(t, n) || !Yt(e[n], t[n])) return !1;
    }
    return !0;
  }
  function to(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function lo(e, t) {
    var l = to(e);
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
      l = to(l);
    }
  }
  function ao(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? ao(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function no(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Xu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch (a) {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Xu(e.document);
    }
    return t;
  }
  function Er(e) {
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
  function k0(e, t) {
    var l = no(t);
    t = e.focusedElem;
    var a = e.selectionRange;
    if (
      l !== t &&
      t &&
      t.ownerDocument &&
      ao(t.ownerDocument.documentElement, t)
    ) {
      if (a !== null && Er(t)) {
        if (
          ((e = a.start),
          (l = a.end),
          l === void 0 && (l = e),
          "selectionStart" in t)
        )
          (t.selectionStart = e),
            (t.selectionEnd = Math.min(l, t.value.length));
        else if (
          ((l = ((e = t.ownerDocument || document) && e.defaultView) || window),
          l.getSelection)
        ) {
          l = l.getSelection();
          var n = t.textContent.length,
            u = Math.min(a.start, n);
          (a = a.end === void 0 ? u : Math.min(a.end, n)),
            !l.extend && u > a && ((n = a), (a = u), (u = n)),
            (n = lo(t, u));
          var c = lo(t, a);
          n &&
            c &&
            (l.rangeCount !== 1 ||
              l.anchorNode !== n.node ||
              l.anchorOffset !== n.offset ||
              l.focusNode !== c.node ||
              l.focusOffset !== c.offset) &&
            ((e = e.createRange()),
            e.setStart(n.node, n.offset),
            l.removeAllRanges(),
            u > a
              ? (l.addRange(e), l.extend(c.node, c.offset))
              : (e.setEnd(c.node, c.offset), l.addRange(e)));
        }
      }
      for (e = [], l = t; (l = l.parentNode); )
        l.nodeType === 1 &&
          e.push({ element: l, left: l.scrollLeft, top: l.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++)
        (l = e[t]),
          (l.element.scrollLeft = l.left),
          (l.element.scrollTop = l.top);
    }
  }
  var W0 = Nt && "documentMode" in document && 11 >= document.documentMode,
    Ia = null,
    xr = null,
    Qn = null,
    Tr = !1;
  function uo(e, t, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Tr ||
      Ia == null ||
      Ia !== Xu(a) ||
      ((a = Ia),
      "selectionStart" in a && Er(a)
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
      (Qn && Xn(Qn, a)) ||
        ((Qn = a),
        (a = Ui(xr, "onSelect")),
        0 < a.length &&
          ((t = new Ju("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = Ia))));
  }
  function ba(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var en = {
      animationend: ba("Animation", "AnimationEnd"),
      animationiteration: ba("Animation", "AnimationIteration"),
      animationstart: ba("Animation", "AnimationStart"),
      transitionrun: ba("Transition", "TransitionRun"),
      transitionstart: ba("Transition", "TransitionStart"),
      transitioncancel: ba("Transition", "TransitionCancel"),
      transitionend: ba("Transition", "TransitionEnd"),
    },
    Dr = {},
    io = {};
  Nt &&
    ((io = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete en.animationend.animation,
      delete en.animationiteration.animation,
      delete en.animationstart.animation),
    "TransitionEvent" in window || delete en.transitionend.transition);
  function Sa(e) {
    if (Dr[e]) return Dr[e];
    if (!en[e]) return e;
    var t = en[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in io) return (Dr[e] = t[l]);
    return e;
  }
  var ro = Sa("animationend"),
    co = Sa("animationiteration"),
    fo = Sa("animationstart"),
    F0 = Sa("transitionrun"),
    $0 = Sa("transitionstart"),
    P0 = Sa("transitioncancel"),
    oo = Sa("transitionend"),
    so = new Map(),
    ho =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " ",
      );
  function fl(e, t) {
    so.set(e, t), zt(t, [e]);
  }
  var kt = [],
    tn = 0,
    Rr = 0;
  function Fu() {
    for (var e = tn, t = (Rr = tn = 0); t < e; ) {
      var l = kt[t];
      kt[t++] = null;
      var a = kt[t];
      kt[t++] = null;
      var n = kt[t];
      kt[t++] = null;
      var u = kt[t];
      if (((kt[t++] = null), a !== null && n !== null)) {
        var c = a.pending;
        c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
          (a.pending = n);
      }
      u !== 0 && mo(l, n, u);
    }
  }
  function $u(e, t, l, a) {
    (kt[tn++] = e),
      (kt[tn++] = t),
      (kt[tn++] = l),
      (kt[tn++] = a),
      (Rr |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a);
  }
  function Mr(e, t, l, a) {
    return $u(e, t, l, a), Pu(e);
  }
  function ql(e, t) {
    return $u(e, null, null, t), Pu(e);
  }
  function mo(e, t, l) {
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
    n &&
      t !== null &&
      e.tag === 3 &&
      ((u = e.stateNode),
      (n = 31 - Mt(l)),
      (u = u.hiddenUpdates),
      (e = u[n]),
      e === null ? (u[n] = [t]) : e.push(t),
      (t.lane = l | 536870912));
  }
  function Pu(e) {
    if (50 < mu) throw ((mu = 0), (Nc = null), Error(f(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var ln = {},
    vo = new WeakMap();
  function Wt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = vo.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: se(t) }), vo.set(e, t), t);
    }
    return { value: e, source: t, stack: se(t) };
  }
  var an = [],
    nn = 0,
    Iu = null,
    ei = 0,
    Ft = [],
    $t = 0,
    Ea = null,
    El = 1,
    xl = "";
  function xa(e, t) {
    (an[nn++] = ei), (an[nn++] = Iu), (Iu = e), (ei = t);
  }
  function yo(e, t, l) {
    (Ft[$t++] = El), (Ft[$t++] = xl), (Ft[$t++] = Ea), (Ea = e);
    var a = El;
    e = xl;
    var n = 32 - Mt(a) - 1;
    (a &= ~(1 << n)), (l += 1);
    var u = 32 - Mt(t) + n;
    if (30 < u) {
      var c = n - (n % 5);
      (u = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (n -= c),
        (El = (1 << (32 - Mt(t) + n)) | (l << n) | a),
        (xl = u + e);
    } else (El = (1 << u) | (l << n) | a), (xl = e);
  }
  function zr(e) {
    e.return !== null && (xa(e, 1), yo(e, 1, 0));
  }
  function Ar(e) {
    for (; e === Iu; )
      (Iu = an[--nn]), (an[nn] = null), (ei = an[--nn]), (an[nn] = null);
    for (; e === Ea; )
      (Ea = Ft[--$t]),
        (Ft[$t] = null),
        (xl = Ft[--$t]),
        (Ft[$t] = null),
        (El = Ft[--$t]),
        (Ft[$t] = null);
  }
  var At = null,
    pt = null,
    Oe = !1,
    ol = null,
    ml = !1,
    _r = Error(f(519));
  function Ta(e) {
    var t = Error(f(418, ""));
    throw (Kn(Wt(t, e)), _r);
  }
  function go(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[G] = e), (t[V] = a), l)) {
      case "dialog":
        De("cancel", t), De("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        De("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < yu.length; l++) De(yu[l], t);
        break;
      case "source":
        De("error", t);
        break;
      case "img":
      case "image":
      case "link":
        De("error", t), De("load", t);
        break;
      case "details":
        De("toggle", t);
        break;
      case "input":
        De("invalid", t),
          Uf(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ),
          Gu(t);
        break;
      case "select":
        De("invalid", t);
        break;
      case "textarea":
        De("invalid", t), jf(t, a.value, a.defaultValue, a.children), Gu(t);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      Md(t.textContent, l)
        ? (a.popover != null && (De("beforetoggle", t), De("toggle", t)),
          a.onScroll != null && De("scroll", t),
          a.onScrollEnd != null && De("scrollend", t),
          a.onClick != null && (t.onclick = Ni),
          (t = !0))
        : (t = !1),
      t || Ta(e);
  }
  function po(e) {
    for (At = e.return; At; )
      switch (At.tag) {
        case 3:
        case 27:
          ml = !0;
          return;
        case 5:
        case 13:
          ml = !1;
          return;
        default:
          At = At.return;
      }
  }
  function Vn(e) {
    if (e !== At) return !1;
    if (!Oe) return po(e), (Oe = !0), !1;
    var t = !1,
      l;
    if (
      ((l = e.tag !== 3 && e.tag !== 27) &&
        ((l = e.tag === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || Wc(e.type, e.memoizedProps))),
        (l = !l)),
      l && (t = !0),
      t && pt && Ta(e),
      po(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(f(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((l = e.data), l === "/$")) {
              if (t === 0) {
                pt = dl(e.nextSibling);
                break e;
              }
              t--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || t++;
          e = e.nextSibling;
        }
        pt = null;
      }
    } else pt = At ? dl(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Zn() {
    (pt = At = null), (Oe = !1);
  }
  function Kn(e) {
    ol === null ? (ol = [e]) : ol.push(e);
  }
  var Jn = Error(f(460)),
    bo = Error(f(474)),
    Or = { then: function () {} };
  function So(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function ti() {}
  function Eo(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(ti, ti), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), e === Jn ? Error(f(483)) : e);
      default:
        if (typeof t.status == "string") t.then(ti, ti);
        else {
          if (((e = Xe), e !== null && 100 < e.shellSuspendCounter))
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
            throw ((e = t.reason), e === Jn ? Error(f(483)) : e);
        }
        throw ((kn = t), Jn);
    }
  }
  var kn = null;
  function xo() {
    if (kn === null) throw Error(f(459));
    var e = kn;
    return (kn = null), e;
  }
  var un = null,
    Wn = 0;
  function li(e) {
    var t = Wn;
    return (Wn += 1), un === null && (un = []), Eo(un, e, t);
  }
  function Fn(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function ai(e, t) {
    throw t.$$typeof === v
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
  function To(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Do(e) {
    function t(T, S) {
      if (e) {
        var R = T.deletions;
        R === null ? ((T.deletions = [S]), (T.flags |= 16)) : R.push(S);
      }
    }
    function l(T, S) {
      if (!e) return null;
      for (; S !== null; ) t(T, S), (S = S.sibling);
      return null;
    }
    function a(T) {
      for (var S = new Map(); T !== null; )
        T.key !== null ? S.set(T.key, T) : S.set(T.index, T), (T = T.sibling);
      return S;
    }
    function n(T, S) {
      return (T = Pl(T, S)), (T.index = 0), (T.sibling = null), T;
    }
    function u(T, S, R) {
      return (
        (T.index = R),
        e
          ? ((R = T.alternate),
            R !== null
              ? ((R = R.index), R < S ? ((T.flags |= 33554434), S) : R)
              : ((T.flags |= 33554434), S))
          : ((T.flags |= 1048576), S)
      );
    }
    function c(T) {
      return e && T.alternate === null && (T.flags |= 33554434), T;
    }
    function s(T, S, R, w) {
      return S === null || S.tag !== 6
        ? ((S = Dc(R, T.mode, w)), (S.return = T), S)
        : ((S = n(S, R)), (S.return = T), S);
    }
    function h(T, S, R, w) {
      var P = R.type;
      return P === g
        ? N(T, S, R.props.children, w, R.key)
        : S !== null &&
            (S.elementType === P ||
              (typeof P == "object" &&
                P !== null &&
                P.$$typeof === te &&
                To(P) === S.type))
          ? ((S = n(S, R.props)), Fn(S, R), (S.return = T), S)
          : ((S = Ei(R.type, R.key, R.props, null, T.mode, w)),
            Fn(S, R),
            (S.return = T),
            S);
    }
    function E(T, S, R, w) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== R.containerInfo ||
        S.stateNode.implementation !== R.implementation
        ? ((S = Rc(R, T.mode, w)), (S.return = T), S)
        : ((S = n(S, R.children || [])), (S.return = T), S);
    }
    function N(T, S, R, w, P) {
      return S === null || S.tag !== 7
        ? ((S = ja(R, T.mode, w, P)), (S.return = T), S)
        : ((S = n(S, R)), (S.return = T), S);
    }
    function H(T, S, R) {
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return (S = Dc("" + S, T.mode, R)), (S.return = T), S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case y:
            return (
              (R = Ei(S.type, S.key, S.props, null, T.mode, R)),
              Fn(R, S),
              (R.return = T),
              R
            );
          case D:
            return (S = Rc(S, T.mode, R)), (S.return = T), S;
          case te:
            var w = S._init;
            return (S = w(S._payload)), H(T, S, R);
        }
        if (ne(S) || et(S))
          return (S = ja(S, T.mode, R, null)), (S.return = T), S;
        if (typeof S.then == "function") return H(T, li(S), R);
        if (S.$$typeof === Y) return H(T, pi(T, S), R);
        ai(T, S);
      }
      return null;
    }
    function A(T, S, R, w) {
      var P = S !== null ? S.key : null;
      if (
        (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
      )
        return P !== null ? null : s(T, S, "" + R, w);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case y:
            return R.key === P ? h(T, S, R, w) : null;
          case D:
            return R.key === P ? E(T, S, R, w) : null;
          case te:
            return (P = R._init), (R = P(R._payload)), A(T, S, R, w);
        }
        if (ne(R) || et(R)) return P !== null ? null : N(T, S, R, w, null);
        if (typeof R.then == "function") return A(T, S, li(R), w);
        if (R.$$typeof === Y) return A(T, S, pi(T, R), w);
        ai(T, R);
      }
      return null;
    }
    function U(T, S, R, w, P) {
      if (
        (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
      )
        return (T = T.get(R) || null), s(S, T, "" + w, P);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case y:
            return (
              (T = T.get(w.key === null ? R : w.key) || null), h(S, T, w, P)
            );
          case D:
            return (
              (T = T.get(w.key === null ? R : w.key) || null), E(S, T, w, P)
            );
          case te:
            var be = w._init;
            return (w = be(w._payload)), U(T, S, R, w, P);
        }
        if (ne(w) || et(w)) return (T = T.get(R) || null), N(S, T, w, P, null);
        if (typeof w.then == "function") return U(T, S, R, li(w), P);
        if (w.$$typeof === Y) return U(T, S, R, pi(S, w), P);
        ai(S, w);
      }
      return null;
    }
    function ae(T, S, R, w) {
      for (
        var P = null, be = null, ie = S, oe = (S = 0), gt = null;
        ie !== null && oe < R.length;
        oe++
      ) {
        ie.index > oe ? ((gt = ie), (ie = null)) : (gt = ie.sibling);
        var Ue = A(T, ie, R[oe], w);
        if (Ue === null) {
          ie === null && (ie = gt);
          break;
        }
        e && ie && Ue.alternate === null && t(T, ie),
          (S = u(Ue, S, oe)),
          be === null ? (P = Ue) : (be.sibling = Ue),
          (be = Ue),
          (ie = gt);
      }
      if (oe === R.length) return l(T, ie), Oe && xa(T, oe), P;
      if (ie === null) {
        for (; oe < R.length; oe++)
          (ie = H(T, R[oe], w)),
            ie !== null &&
              ((S = u(ie, S, oe)),
              be === null ? (P = ie) : (be.sibling = ie),
              (be = ie));
        return Oe && xa(T, oe), P;
      }
      for (ie = a(ie); oe < R.length; oe++)
        (gt = U(ie, T, oe, R[oe], w)),
          gt !== null &&
            (e &&
              gt.alternate !== null &&
              ie.delete(gt.key === null ? oe : gt.key),
            (S = u(gt, S, oe)),
            be === null ? (P = gt) : (be.sibling = gt),
            (be = gt));
      return (
        e &&
          ie.forEach(function (ua) {
            return t(T, ua);
          }),
        Oe && xa(T, oe),
        P
      );
    }
    function me(T, S, R, w) {
      if (R == null) throw Error(f(151));
      for (
        var P = null, be = null, ie = S, oe = (S = 0), gt = null, Ue = R.next();
        ie !== null && !Ue.done;
        oe++, Ue = R.next()
      ) {
        ie.index > oe ? ((gt = ie), (ie = null)) : (gt = ie.sibling);
        var ua = A(T, ie, Ue.value, w);
        if (ua === null) {
          ie === null && (ie = gt);
          break;
        }
        e && ie && ua.alternate === null && t(T, ie),
          (S = u(ua, S, oe)),
          be === null ? (P = ua) : (be.sibling = ua),
          (be = ua),
          (ie = gt);
      }
      if (Ue.done) return l(T, ie), Oe && xa(T, oe), P;
      if (ie === null) {
        for (; !Ue.done; oe++, Ue = R.next())
          (Ue = H(T, Ue.value, w)),
            Ue !== null &&
              ((S = u(Ue, S, oe)),
              be === null ? (P = Ue) : (be.sibling = Ue),
              (be = Ue));
        return Oe && xa(T, oe), P;
      }
      for (ie = a(ie); !Ue.done; oe++, Ue = R.next())
        (Ue = U(ie, T, oe, Ue.value, w)),
          Ue !== null &&
            (e &&
              Ue.alternate !== null &&
              ie.delete(Ue.key === null ? oe : Ue.key),
            (S = u(Ue, S, oe)),
            be === null ? (P = Ue) : (be.sibling = Ue),
            (be = Ue));
      return (
        e &&
          ie.forEach(function (dv) {
            return t(T, dv);
          }),
        Oe && xa(T, oe),
        P
      );
    }
    function nt(T, S, R, w) {
      if (
        (typeof R == "object" &&
          R !== null &&
          R.type === g &&
          R.key === null &&
          (R = R.props.children),
        typeof R == "object" && R !== null)
      ) {
        switch (R.$$typeof) {
          case y:
            e: {
              for (var P = R.key; S !== null; ) {
                if (S.key === P) {
                  if (((P = R.type), P === g)) {
                    if (S.tag === 7) {
                      l(T, S.sibling),
                        (w = n(S, R.props.children)),
                        (w.return = T),
                        (T = w);
                      break e;
                    }
                  } else if (
                    S.elementType === P ||
                    (typeof P == "object" &&
                      P !== null &&
                      P.$$typeof === te &&
                      To(P) === S.type)
                  ) {
                    l(T, S.sibling),
                      (w = n(S, R.props)),
                      Fn(w, R),
                      (w.return = T),
                      (T = w);
                    break e;
                  }
                  l(T, S);
                  break;
                } else t(T, S);
                S = S.sibling;
              }
              R.type === g
                ? ((w = ja(R.props.children, T.mode, w, R.key)),
                  (w.return = T),
                  (T = w))
                : ((w = Ei(R.type, R.key, R.props, null, T.mode, w)),
                  Fn(w, R),
                  (w.return = T),
                  (T = w));
            }
            return c(T);
          case D:
            e: {
              for (P = R.key; S !== null; ) {
                if (S.key === P)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === R.containerInfo &&
                    S.stateNode.implementation === R.implementation
                  ) {
                    l(T, S.sibling),
                      (w = n(S, R.children || [])),
                      (w.return = T),
                      (T = w);
                    break e;
                  } else {
                    l(T, S);
                    break;
                  }
                else t(T, S);
                S = S.sibling;
              }
              (w = Rc(R, T.mode, w)), (w.return = T), (T = w);
            }
            return c(T);
          case te:
            return (P = R._init), (R = P(R._payload)), nt(T, S, R, w);
        }
        if (ne(R)) return ae(T, S, R, w);
        if (et(R)) {
          if (((P = et(R)), typeof P != "function")) throw Error(f(150));
          return (R = P.call(R)), me(T, S, R, w);
        }
        if (typeof R.then == "function") return nt(T, S, li(R), w);
        if (R.$$typeof === Y) return nt(T, S, pi(T, R), w);
        ai(T, R);
      }
      return (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
        ? ((R = "" + R),
          S !== null && S.tag === 6
            ? (l(T, S.sibling), (w = n(S, R)), (w.return = T), (T = w))
            : (l(T, S), (w = Dc(R, T.mode, w)), (w.return = T), (T = w)),
          c(T))
        : l(T, S);
    }
    return function (T, S, R, w) {
      try {
        Wn = 0;
        var P = nt(T, S, R, w);
        return (un = null), P;
      } catch (ie) {
        if (ie === Jn) throw ie;
        var be = tl(29, ie, null, T.mode);
        return (be.lanes = w), (be.return = T), be;
      } finally {
      }
    };
  }
  var Da = Do(!0),
    Ro = Do(!1),
    rn = xe(null),
    ni = xe(0);
  function Mo(e, t) {
    (e = jl), Ge(ni, e), Ge(rn, t), (jl = e | t.baseLanes);
  }
  function Ur() {
    Ge(ni, jl), Ge(rn, rn.current);
  }
  function Nr() {
    (jl = ni.current), tt(rn), tt(ni);
  }
  var Pt = xe(null),
    vl = null;
  function Gl(e) {
    var t = e.alternate;
    Ge(dt, dt.current & 1),
      Ge(Pt, e),
      vl === null &&
        (t === null || rn.current !== null || t.memoizedState !== null) &&
        (vl = e);
  }
  function zo(e) {
    if (e.tag === 22) {
      if ((Ge(dt, dt.current), Ge(Pt, e), vl === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (vl = e);
      }
    } else Xl();
  }
  function Xl() {
    Ge(dt, dt.current), Ge(Pt, Pt.current);
  }
  function Tl(e) {
    tt(Pt), vl === e && (vl = null), tt(dt);
  }
  var dt = xe(0);
  function ui(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || l.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
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
  var I0 =
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
    em = i.unstable_scheduleCallback,
    tm = i.unstable_NormalPriority,
    ht = {
      $$typeof: Y,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function jr() {
    return { controller: new I0(), data: new Map(), refCount: 0 };
  }
  function $n(e) {
    e.refCount--,
      e.refCount === 0 &&
        em(tm, function () {
          e.controller.abort();
        });
  }
  var Pn = null,
    wr = 0,
    cn = 0,
    fn = null;
  function lm(e, t) {
    if (Pn === null) {
      var l = (Pn = []);
      (wr = 0),
        (cn = qc()),
        (fn = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return wr++, t.then(Ao, Ao), t;
  }
  function Ao() {
    if (--wr === 0 && Pn !== null) {
      fn !== null && (fn.status = "fulfilled");
      var e = Pn;
      (Pn = null), (cn = 0), (fn = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function am(e, t) {
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
  var _o = Z.S;
  Z.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      lm(e, t),
      _o !== null && _o(e, t);
  };
  var Ra = xe(null);
  function Cr() {
    var e = Ra.current;
    return e !== null ? e : Xe.pooledCache;
  }
  function ii(e, t) {
    t === null ? Ge(Ra, Ra.current) : Ge(Ra, t.pool);
  }
  function Oo() {
    var e = Cr();
    return e === null ? null : { parent: ht._currentValue, pool: e };
  }
  var Ql = 0,
    ge = null,
    Le = null,
    ct = null,
    ri = !1,
    on = !1,
    Ma = !1,
    ci = 0,
    In = 0,
    sn = null,
    nm = 0;
  function it() {
    throw Error(f(321));
  }
  function Hr(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Yt(e[l], t[l])) return !1;
    return !0;
  }
  function Br(e, t, l, a, n, u) {
    return (
      (Ql = u),
      (ge = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Z.H = e === null || e.memoizedState === null ? za : Vl),
      (Ma = !1),
      (u = l(a, n)),
      (Ma = !1),
      on && (u = No(t, l, a, n)),
      Uo(e),
      u
    );
  }
  function Uo(e) {
    Z.H = yl;
    var t = Le !== null && Le.next !== null;
    if (((Ql = 0), (ct = Le = ge = null), (ri = !1), (In = 0), (sn = null), t))
      throw Error(f(300));
    e === null ||
      vt ||
      ((e = e.dependencies), e !== null && gi(e) && (vt = !0));
  }
  function No(e, t, l, a) {
    ge = e;
    var n = 0;
    do {
      if ((on && (sn = null), (In = 0), (on = !1), 25 <= n))
        throw Error(f(301));
      if (((n += 1), (ct = Le = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (Z.H = Aa), (u = t(l, a));
    } while (on);
    return u;
  }
  function um() {
    var e = Z.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? eu(t) : t),
      (e = e.useState()[0]),
      (Le !== null ? Le.memoizedState : null) !== e && (ge.flags |= 1024),
      t
    );
  }
  function Lr() {
    var e = ci !== 0;
    return (ci = 0), e;
  }
  function Yr(e, t, l) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l);
  }
  function qr(e) {
    if (ri) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      ri = !1;
    }
    (Ql = 0), (ct = Le = ge = null), (on = !1), (In = ci = 0), (sn = null);
  }
  function Ct() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ct === null ? (ge.memoizedState = ct = e) : (ct = ct.next = e), ct;
  }
  function ft() {
    if (Le === null) {
      var e = ge.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = ct === null ? ge.memoizedState : ct.next;
    if (t !== null) (ct = t), (Le = e);
    else {
      if (e === null)
        throw ge.alternate === null ? Error(f(467)) : Error(f(310));
      (Le = e),
        (e = {
          memoizedState: Le.memoizedState,
          baseState: Le.baseState,
          baseQueue: Le.baseQueue,
          queue: Le.queue,
          next: null,
        }),
        ct === null ? (ge.memoizedState = ct = e) : (ct = ct.next = e);
    }
    return ct;
  }
  var fi;
  fi = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function eu(e) {
    var t = In;
    return (
      (In += 1),
      sn === null && (sn = []),
      (e = Eo(sn, e, t)),
      (t = ge),
      (ct === null ? t.memoizedState : ct.next) === null &&
        ((t = t.alternate),
        (Z.H = t === null || t.memoizedState === null ? za : Vl)),
      e
    );
  }
  function oi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return eu(e);
      if (e.$$typeof === Y) return Tt(e);
    }
    throw Error(f(438, String(e)));
  }
  function Gr(e) {
    var t = null,
      l = ge.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = ge.alternate;
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
      l === null && ((l = fi()), (ge.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = Ve;
    return t.index++, l;
  }
  function Dl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function si(e) {
    var t = ft();
    return Xr(t, Le, e);
  }
  function Xr(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var c = n.next;
        (n.next = u.next), (u.next = c);
      }
      (t.baseQueue = n = u), (a.pending = null);
    }
    if (((u = e.baseState), n === null)) e.memoizedState = u;
    else {
      t = n.next;
      var s = (c = null),
        h = null,
        E = t,
        N = !1;
      do {
        var H = E.lane & -536870913;
        if (H !== E.lane ? (ze & H) === H : (Ql & H) === H) {
          var A = E.revertLane;
          if (A === 0)
            h !== null &&
              (h = h.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: E.action,
                  hasEagerState: E.hasEagerState,
                  eagerState: E.eagerState,
                  next: null,
                }),
              H === cn && (N = !0);
          else if ((Ql & A) === A) {
            (E = E.next), A === cn && (N = !0);
            continue;
          } else
            (H = {
              lane: 0,
              revertLane: E.revertLane,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null,
            }),
              h === null ? ((s = h = H), (c = u)) : (h = h.next = H),
              (ge.lanes |= A),
              (Il |= A);
          (H = E.action),
            Ma && l(u, H),
            (u = E.hasEagerState ? E.eagerState : l(u, H));
        } else
          (A = {
            lane: H,
            revertLane: E.revertLane,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          }),
            h === null ? ((s = h = A), (c = u)) : (h = h.next = A),
            (ge.lanes |= H),
            (Il |= H);
        E = E.next;
      } while (E !== null && E !== t);
      if (
        (h === null ? (c = u) : (h.next = s),
        !Yt(u, e.memoizedState) && ((vt = !0), N && ((l = fn), l !== null)))
      )
        throw l;
      (e.memoizedState = u),
        (e.baseState = c),
        (e.baseQueue = h),
        (a.lastRenderedState = u);
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Qr(e) {
    var t = ft(),
      l = t.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      u = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var c = (n = n.next);
      do (u = e(u, c.action)), (c = c.next);
      while (c !== n);
      Yt(u, t.memoizedState) || (vt = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (l.lastRenderedState = u);
    }
    return [u, a];
  }
  function jo(e, t, l) {
    var a = ge,
      n = ft(),
      u = Oe;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = t();
    var c = !Yt((Le || n).memoizedState, l);
    if (
      (c && ((n.memoizedState = l), (vt = !0)),
      (n = n.queue),
      Kr(Ho.bind(null, a, n, e), [e]),
      n.getSnapshot !== t || c || (ct !== null && ct.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        dn(9, Co.bind(null, a, n, l, t), { destroy: void 0 }, null),
        Xe === null)
      )
        throw Error(f(349));
      u || (Ql & 60) !== 0 || wo(a, t, l);
    }
    return l;
  }
  function wo(e, t, l) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = ge.updateQueue),
      t === null
        ? ((t = fi()), (ge.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e));
  }
  function Co(e, t, l, a) {
    (t.value = l), (t.getSnapshot = a), Bo(t) && Lo(e);
  }
  function Ho(e, t, l) {
    return l(function () {
      Bo(t) && Lo(e);
    });
  }
  function Bo(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !Yt(e, l);
    } catch (a) {
      return !0;
    }
  }
  function Lo(e) {
    var t = ql(e, 2);
    t !== null && _t(t, e, 2);
  }
  function Vr(e) {
    var t = Ct();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), Ma)) {
        ul(!0);
        try {
          l();
        } finally {
          ul(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Dl,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Yo(e, t, l, a) {
    return (e.baseState = l), Xr(e, Le, typeof a == "function" ? a : Dl);
  }
  function im(e, t, l, a, n) {
    if (mi(e)) throw Error(f(485));
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
        then: function (c) {
          u.listeners.push(c);
        },
      };
      Z.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = t.pending),
        l === null
          ? ((u.next = t.pending = u), qo(t, u))
          : ((u.next = l.next), (t.pending = l.next = u));
    }
  }
  function qo(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var u = Z.T,
        c = {};
      Z.T = c;
      try {
        var s = l(n, a),
          h = Z.S;
        h !== null && h(c, s), Go(e, t, s);
      } catch (E) {
        Zr(e, t, E);
      } finally {
        Z.T = u;
      }
    } else
      try {
        (u = l(n, a)), Go(e, t, u);
      } catch (E) {
        Zr(e, t, E);
      }
  }
  function Go(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            Xo(e, t, a);
          },
          function (a) {
            return Zr(e, t, a);
          },
        )
      : Xo(e, t, l);
  }
  function Xo(e, t, l) {
    (t.status = "fulfilled"),
      (t.value = l),
      Qo(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), qo(e, l)));
  }
  function Zr(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do (t.status = "rejected"), (t.reason = l), Qo(t), (t = t.next);
      while (t !== a);
    }
    e.action = null;
  }
  function Qo(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Vo(e, t) {
    return t;
  }
  function Zo(e, t) {
    if (Oe) {
      var l = Xe.formState;
      if (l !== null) {
        e: {
          var a = ge;
          if (Oe) {
            if (pt) {
              t: {
                for (var n = pt, u = ml; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = dl(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                (u = n.data), (n = u === "F!" || u === "F" ? n : null);
              }
              if (n) {
                (pt = dl(n.nextSibling)), (a = n.data === "F!");
                break e;
              }
            }
            Ta(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = Ct()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vo,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = fs.bind(null, ge, a)),
      (a.dispatch = l),
      (a = Vr(!1)),
      (u = $r.bind(null, ge, !1, a.queue)),
      (a = Ct()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = im.bind(null, ge, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function Ko(e) {
    var t = ft();
    return Jo(t, Le, e);
  }
  function Jo(e, t, l) {
    (t = Xr(e, t, Vo)[0]),
      (e = si(Dl)[0]),
      (t =
        typeof t == "object" && t !== null && typeof t.then == "function"
          ? eu(t)
          : t);
    var a = ft(),
      n = a.queue,
      u = n.dispatch;
    return (
      l !== a.memoizedState &&
        ((ge.flags |= 2048),
        dn(9, rm.bind(null, n, l), { destroy: void 0 }, null)),
      [t, u, e]
    );
  }
  function rm(e, t) {
    e.action = t;
  }
  function ko(e) {
    var t = ft(),
      l = Le;
    if (l !== null) return Jo(t, l, e);
    ft(), (t = t.memoizedState), (l = ft());
    var a = l.queue.dispatch;
    return (l.memoizedState = e), [t, a, !1];
  }
  function dn(e, t, l, a) {
    return (
      (e = { tag: e, create: t, inst: l, deps: a, next: null }),
      (t = ge.updateQueue),
      t === null && ((t = fi()), (ge.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Wo() {
    return ft().memoizedState;
  }
  function di(e, t, l, a) {
    var n = Ct();
    (ge.flags |= e),
      (n.memoizedState = dn(
        1 | t,
        l,
        { destroy: void 0 },
        a === void 0 ? null : a,
      ));
  }
  function hi(e, t, l, a) {
    var n = ft();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    Le !== null && a !== null && Hr(a, Le.memoizedState.deps)
      ? (n.memoizedState = dn(t, l, u, a))
      : ((ge.flags |= e), (n.memoizedState = dn(1 | t, l, u, a)));
  }
  function Fo(e, t) {
    di(8390656, 8, e, t);
  }
  function Kr(e, t) {
    hi(2048, 8, e, t);
  }
  function $o(e, t) {
    return hi(4, 2, e, t);
  }
  function Po(e, t) {
    return hi(4, 4, e, t);
  }
  function Io(e, t) {
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
  function es(e, t, l) {
    (l = l != null ? l.concat([e]) : null), hi(4, 4, Io.bind(null, t, e), l);
  }
  function Jr() {}
  function ts(e, t) {
    var l = ft();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Hr(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function ls(e, t) {
    var l = ft();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Hr(t, a[1])) return a[0];
    if (((a = e()), Ma)) {
      ul(!0);
      try {
        e();
      } finally {
        ul(!1);
      }
    }
    return (l.memoizedState = [a, t]), a;
  }
  function kr(e, t, l) {
    return l === void 0 || (Ql & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = nd()), (ge.lanes |= e), (Il |= e), l);
  }
  function as(e, t, l, a) {
    return Yt(l, t)
      ? l
      : rn.current !== null
        ? ((e = kr(e, l, a)), Yt(e, t) || (vt = !0), e)
        : (Ql & 42) === 0
          ? ((vt = !0), (e.memoizedState = l))
          : ((e = nd()), (ge.lanes |= e), (Il |= e), t);
  }
  function ns(e, t, l, a, n) {
    var u = J.p;
    J.p = u !== 0 && 8 > u ? u : 8;
    var c = Z.T,
      s = {};
    (Z.T = s), $r(e, !1, t, l);
    try {
      var h = n(),
        E = Z.S;
      if (
        (E !== null && E(s, h),
        h !== null && typeof h == "object" && typeof h.then == "function")
      ) {
        var N = am(h, a);
        tu(e, t, N, Qt(e));
      } else tu(e, t, a, Qt(e));
    } catch (H) {
      tu(e, t, { then: function () {}, status: "rejected", reason: H }, Qt());
    } finally {
      (J.p = u), (Z.T = c);
    }
  }
  function cm() {}
  function Wr(e, t, l, a) {
    if (e.tag !== 5) throw Error(f(476));
    var n = us(e).queue;
    ns(
      e,
      n,
      t,
      he,
      l === null
        ? cm
        : function () {
            return is(e), l(a);
          },
    );
  }
  function us(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: he,
      baseState: he,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Dl,
        lastRenderedState: he,
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
          lastRenderedReducer: Dl,
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
  function is(e) {
    var t = us(e).next.queue;
    tu(e, t, {}, Qt());
  }
  function Fr() {
    return Tt(Eu);
  }
  function rs() {
    return ft().memoizedState;
  }
  function cs() {
    return ft().memoizedState;
  }
  function fm(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Qt();
          e = Jl(l);
          var a = kl(t, e, l);
          a !== null && (_t(a, t, l), nu(a, t, l)),
            (t = { cache: jr() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function om(e, t, l) {
    var a = Qt();
    (l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      mi(e)
        ? os(t, l)
        : ((l = Mr(e, t, l, a)), l !== null && (_t(l, e, a), ss(l, t, a)));
  }
  function fs(e, t, l) {
    var a = Qt();
    tu(e, t, l, a);
  }
  function tu(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (mi(e)) os(t, n);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var c = t.lastRenderedState,
            s = u(c, l);
          if (((n.hasEagerState = !0), (n.eagerState = s), Yt(s, c)))
            return $u(e, t, n, 0), Xe === null && Fu(), !1;
        } catch (h) {
        } finally {
        }
      if (((l = Mr(e, t, n, a)), l !== null))
        return _t(l, e, a), ss(l, t, a), !0;
    }
    return !1;
  }
  function $r(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: qc(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      mi(e))
    ) {
      if (t) throw Error(f(479));
    } else (t = Mr(e, l, a, 2)), t !== null && _t(t, e, 2);
  }
  function mi(e) {
    var t = e.alternate;
    return e === ge || (t !== null && t === ge);
  }
  function os(e, t) {
    on = ri = !0;
    var l = e.pending;
    l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t);
  }
  function ss(e, t, l) {
    if ((l & 4194176) !== 0) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), _(e, l);
    }
  }
  var yl = {
    readContext: Tt,
    use: oi,
    useCallback: it,
    useContext: it,
    useEffect: it,
    useImperativeHandle: it,
    useLayoutEffect: it,
    useInsertionEffect: it,
    useMemo: it,
    useReducer: it,
    useRef: it,
    useState: it,
    useDebugValue: it,
    useDeferredValue: it,
    useTransition: it,
    useSyncExternalStore: it,
    useId: it,
  };
  (yl.useCacheRefresh = it),
    (yl.useMemoCache = it),
    (yl.useHostTransitionStatus = it),
    (yl.useFormState = it),
    (yl.useActionState = it),
    (yl.useOptimistic = it);
  var za = {
    readContext: Tt,
    use: oi,
    useCallback: function (e, t) {
      return (Ct().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Tt,
    useEffect: Fo,
    useImperativeHandle: function (e, t, l) {
      (l = l != null ? l.concat([e]) : null),
        di(4194308, 4, Io.bind(null, t, e), l);
    },
    useLayoutEffect: function (e, t) {
      return di(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      di(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var l = Ct();
      t = t === void 0 ? null : t;
      var a = e();
      if (Ma) {
        ul(!0);
        try {
          e();
        } finally {
          ul(!1);
        }
      }
      return (l.memoizedState = [a, t]), a;
    },
    useReducer: function (e, t, l) {
      var a = Ct();
      if (l !== void 0) {
        var n = l(t);
        if (Ma) {
          ul(!0);
          try {
            l(t);
          } finally {
            ul(!1);
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
        (e = e.dispatch = om.bind(null, ge, e)),
        [a.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ct();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: function (e) {
      e = Vr(e);
      var t = e.queue,
        l = fs.bind(null, ge, t);
      return (t.dispatch = l), [e.memoizedState, l];
    },
    useDebugValue: Jr,
    useDeferredValue: function (e, t) {
      var l = Ct();
      return kr(l, e, t);
    },
    useTransition: function () {
      var e = Vr(!1);
      return (
        (e = ns.bind(null, ge, e.queue, !0, !1)),
        (Ct().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, t, l) {
      var a = ge,
        n = Ct();
      if (Oe) {
        if (l === void 0) throw Error(f(407));
        l = l();
      } else {
        if (((l = t()), Xe === null)) throw Error(f(349));
        (ze & 60) !== 0 || wo(a, t, l);
      }
      n.memoizedState = l;
      var u = { value: l, getSnapshot: t };
      return (
        (n.queue = u),
        Fo(Ho.bind(null, a, u, e), [e]),
        (a.flags |= 2048),
        dn(9, Co.bind(null, a, u, l, t), { destroy: void 0 }, null),
        l
      );
    },
    useId: function () {
      var e = Ct(),
        t = Xe.identifierPrefix;
      if (Oe) {
        var l = xl,
          a = El;
        (l = (a & ~(1 << (32 - Mt(a) - 1))).toString(32) + l),
          (t = ":" + t + "R" + l),
          (l = ci++),
          0 < l && (t += "H" + l.toString(32)),
          (t += ":");
      } else (l = nm++), (t = ":" + t + "r" + l.toString(32) + ":");
      return (e.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (Ct().memoizedState = fm.bind(null, ge));
    },
  };
  (za.useMemoCache = Gr),
    (za.useHostTransitionStatus = Fr),
    (za.useFormState = Zo),
    (za.useActionState = Zo),
    (za.useOptimistic = function (e) {
      var t = Ct();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (t.queue = l), (t = $r.bind(null, ge, !0, l)), (l.dispatch = t), [e, t]
      );
    });
  var Vl = {
    readContext: Tt,
    use: oi,
    useCallback: ts,
    useContext: Tt,
    useEffect: Kr,
    useImperativeHandle: es,
    useInsertionEffect: $o,
    useLayoutEffect: Po,
    useMemo: ls,
    useReducer: si,
    useRef: Wo,
    useState: function () {
      return si(Dl);
    },
    useDebugValue: Jr,
    useDeferredValue: function (e, t) {
      var l = ft();
      return as(l, Le.memoizedState, e, t);
    },
    useTransition: function () {
      var e = si(Dl)[0],
        t = ft().memoizedState;
      return [typeof e == "boolean" ? e : eu(e), t];
    },
    useSyncExternalStore: jo,
    useId: rs,
  };
  (Vl.useCacheRefresh = cs),
    (Vl.useMemoCache = Gr),
    (Vl.useHostTransitionStatus = Fr),
    (Vl.useFormState = Ko),
    (Vl.useActionState = Ko),
    (Vl.useOptimistic = function (e, t) {
      var l = ft();
      return Yo(l, Le, e, t);
    });
  var Aa = {
    readContext: Tt,
    use: oi,
    useCallback: ts,
    useContext: Tt,
    useEffect: Kr,
    useImperativeHandle: es,
    useInsertionEffect: $o,
    useLayoutEffect: Po,
    useMemo: ls,
    useReducer: Qr,
    useRef: Wo,
    useState: function () {
      return Qr(Dl);
    },
    useDebugValue: Jr,
    useDeferredValue: function (e, t) {
      var l = ft();
      return Le === null ? kr(l, e, t) : as(l, Le.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Qr(Dl)[0],
        t = ft().memoizedState;
      return [typeof e == "boolean" ? e : eu(e), t];
    },
    useSyncExternalStore: jo,
    useId: rs,
  };
  (Aa.useCacheRefresh = cs),
    (Aa.useMemoCache = Gr),
    (Aa.useHostTransitionStatus = Fr),
    (Aa.useFormState = ko),
    (Aa.useActionState = ko),
    (Aa.useOptimistic = function (e, t) {
      var l = ft();
      return Le !== null
        ? Yo(l, Le, e, t)
        : ((l.baseState = e), [e, l.queue.dispatch]);
    });
  function Pr(e, t, l, a) {
    (t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : F({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Ir = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? $(e) === e : !1;
    },
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = Qt(),
        n = Jl(a);
      (n.payload = t),
        l != null && (n.callback = l),
        (t = kl(e, n, a)),
        t !== null && (_t(t, e, a), nu(t, e, a));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = Qt(),
        n = Jl(a);
      (n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = kl(e, n, a)),
        t !== null && (_t(t, e, a), nu(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = Qt(),
        a = Jl(l);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = kl(e, a, l)),
        t !== null && (_t(t, e, l), nu(t, e, l));
    },
  };
  function ds(e, t, l, a, n, u, c) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, u, c)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Xn(l, a) || !Xn(n, u)
          : !0
    );
  }
  function hs(e, t, l, a) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && Ir.enqueueReplaceState(t, t.state, null);
  }
  function _a(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = F({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  var vi =
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
        };
  function ms(e) {
    vi(e);
  }
  function vs(e) {
    console.error(e);
  }
  function ys(e) {
    vi(e);
  }
  function yi(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function gs(e, t, l) {
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
  function ec(e, t, l) {
    return (
      (l = Jl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        yi(e, t);
      }),
      l
    );
  }
  function ps(e) {
    return (e = Jl(e)), (e.tag = 3), e;
  }
  function bs(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      (e.payload = function () {
        return n(u);
      }),
        (e.callback = function () {
          gs(t, l, a);
        });
    }
    var c = l.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (e.callback = function () {
        gs(t, l, a),
          typeof n != "function" &&
            (ea === null ? (ea = new Set([this])) : ea.add(this));
        var s = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: s !== null ? s : "",
        });
      });
  }
  function sm(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && au(t, l, n, !0),
        (l = Pt.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              vl === null ? Cc() : l.alternate === null && at === 0 && (at = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === Or
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  Bc(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === Or
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
                  Bc(e, a, n)),
              !1
            );
        }
        throw Error(f(435, l.tag));
      }
      return Bc(e, a, n), Cc(), !1;
    }
    if (Oe)
      return (
        (t = Pt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== _r && ((e = Error(f(422), { cause: a })), Kn(Wt(e, l))))
          : (a !== _r && ((t = Error(f(423), { cause: a })), Kn(Wt(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = Wt(a, l)),
            (n = ec(e.stateNode, a, n)),
            vc(e, n),
            at !== 4 && (at = 2)),
        !1
      );
    var u = Error(f(520), { cause: a });
    if (
      ((u = Wt(u, l)),
      du === null ? (du = [u]) : du.push(u),
      at !== 4 && (at = 2),
      t === null)
    )
      return !0;
    (a = Wt(a, l)), (l = t);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = ec(l.stateNode, a, e)),
            vc(l, e),
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
                  (ea === null || !ea.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = ps(n)),
              bs(n, e, l, a),
              vc(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Ss = Error(f(461)),
    vt = !1;
  function bt(e, t, l, a) {
    t.child = e === null ? Ro(t, null, l, a) : Da(t, e.child, l, a);
  }
  function Es(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var s in a) s !== "ref" && (c[s] = a[s]);
    } else c = a;
    return (
      Ua(t),
      (a = Br(e, t, l, c, u, n)),
      (s = Lr()),
      e !== null && !vt
        ? (Yr(e, t, n), Rl(e, t, n))
        : (Oe && s && zr(t), (t.flags |= 1), bt(e, t, a, n), t.child)
    );
  }
  function xs(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" &&
        !Tc(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = u), Ts(e, t, u, a, n))
        : ((e = Ei(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !fc(e, n))) {
      var c = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Xn), l(c, a) && e.ref === t.ref)
      )
        return Rl(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = Pl(u, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ts(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Xn(u, a) && e.ref === t.ref)
        if (((vt = !1), (t.pendingProps = a = u), fc(e, n)))
          (e.flags & 131072) !== 0 && (vt = !0);
        else return (t.lanes = e.lanes), Rl(e, t, n);
    }
    return tc(e, t, l, a, n);
  }
  function Ds(e, t, l) {
    var a = t.pendingProps,
      n = a.children,
      u = (t.stateNode._pendingVisibility & 2) !== 0,
      c = e !== null ? e.memoizedState : null;
    if ((lu(e, t), a.mode === "hidden" || u)) {
      if ((t.flags & 128) !== 0) {
        if (((a = c !== null ? c.baseLanes | l : l), e !== null)) {
          for (n = t.child = e.child, u = 0; n !== null; )
            (u = u | n.lanes | n.childLanes), (n = n.sibling);
          t.childLanes = u & ~a;
        } else (t.childLanes = 0), (t.child = null);
        return Rs(e, t, a, l);
      }
      if ((l & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && ii(t, c !== null ? c.cachePool : null),
          c !== null ? Mo(t, c) : Ur(),
          zo(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          Rs(e, t, c !== null ? c.baseLanes | l : l, l)
        );
    } else
      c !== null
        ? (ii(t, c.cachePool), Mo(t, c), Xl(), (t.memoizedState = null))
        : (e !== null && ii(t, null), Ur(), Xl());
    return bt(e, t, n, l), t.child;
  }
  function Rs(e, t, l, a) {
    var n = Cr();
    return (
      (n = n === null ? null : { parent: ht._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: l, cachePool: n }),
      e !== null && ii(t, null),
      Ur(),
      zo(t),
      e !== null && au(e, t, a, !0),
      null
    );
  }
  function lu(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(f(284));
      (e === null || e.ref !== l) && (t.flags |= 2097664);
    }
  }
  function tc(e, t, l, a, n) {
    return (
      Ua(t),
      (l = Br(e, t, l, a, void 0, n)),
      (a = Lr()),
      e !== null && !vt
        ? (Yr(e, t, n), Rl(e, t, n))
        : (Oe && a && zr(t), (t.flags |= 1), bt(e, t, l, n), t.child)
    );
  }
  function Ms(e, t, l, a, n, u) {
    return (
      Ua(t),
      (t.updateQueue = null),
      (l = No(t, a, l, n)),
      Uo(e),
      (a = Lr()),
      e !== null && !vt
        ? (Yr(e, t, u), Rl(e, t, u))
        : (Oe && a && zr(t), (t.flags |= 1), bt(e, t, l, u), t.child)
    );
  }
  function zs(e, t, l, a, n) {
    if ((Ua(t), t.stateNode === null)) {
      var u = ln,
        c = l.contextType;
      typeof c == "object" && c !== null && (u = Tt(c)),
        (u = new l(a, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Ir),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        hc(t),
        (c = l.contextType),
        (u.context = typeof c == "object" && c !== null ? Tt(c) : ln),
        (u.state = t.memoizedState),
        (c = l.getDerivedStateFromProps),
        typeof c == "function" && (Pr(t, l, c, a), (u.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((c = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          c !== u.state && Ir.enqueueReplaceState(u, u.state, null),
          iu(t, a, u, n),
          uu(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0);
    } else if (e === null) {
      u = t.stateNode;
      var s = t.memoizedProps,
        h = _a(l, s);
      u.props = h;
      var E = u.context,
        N = l.contextType;
      (c = ln), typeof N == "object" && N !== null && (c = Tt(N));
      var H = l.getDerivedStateFromProps;
      (N =
        typeof H == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (s = t.pendingProps !== s),
        N ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((s || E !== c) && hs(t, u, a, c)),
        (Kl = !1);
      var A = t.memoizedState;
      (u.state = A),
        iu(t, a, u, n),
        uu(),
        (E = t.memoizedState),
        s || A !== E || Kl
          ? (typeof H == "function" && (Pr(t, l, H, a), (E = t.memoizedState)),
            (h = Kl || ds(t, l, h, a, A, E, c))
              ? (N ||
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
                (t.memoizedState = E)),
            (u.props = a),
            (u.state = E),
            (u.context = c),
            (a = h))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (u = t.stateNode),
        mc(e, t),
        (c = t.memoizedProps),
        (N = _a(l, c)),
        (u.props = N),
        (H = t.pendingProps),
        (A = u.context),
        (E = l.contextType),
        (h = ln),
        typeof E == "object" && E !== null && (h = Tt(E)),
        (s = l.getDerivedStateFromProps),
        (E =
          typeof s == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((c !== H || A !== h) && hs(t, u, a, h)),
        (Kl = !1),
        (A = t.memoizedState),
        (u.state = A),
        iu(t, a, u, n),
        uu();
      var U = t.memoizedState;
      c !== H ||
      A !== U ||
      Kl ||
      (e !== null && e.dependencies !== null && gi(e.dependencies))
        ? (typeof s == "function" && (Pr(t, l, s, a), (U = t.memoizedState)),
          (N =
            Kl ||
            ds(t, l, N, a, A, U, h) ||
            (e !== null && e.dependencies !== null && gi(e.dependencies)))
            ? (E ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, U, h),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, U, h)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (c === e.memoizedProps && A === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (c === e.memoizedProps && A === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = U)),
          (u.props = a),
          (u.state = U),
          (u.context = h),
          (a = N))
        : (typeof u.componentDidUpdate != "function" ||
            (c === e.memoizedProps && A === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (c === e.memoizedProps && A === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      lu(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = Da(t, e.child, null, n)),
              (t.child = Da(t, null, l, n)))
            : bt(e, t, l, n),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = Rl(e, t, n)),
      e
    );
  }
  function As(e, t, l, a) {
    return Zn(), (t.flags |= 256), bt(e, t, l, a), t.child;
  }
  var lc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ac(e) {
    return { baseLanes: e, cachePool: Oo() };
  }
  function nc(e, t, l) {
    return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= ll), e;
  }
  function _s(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      c;
    if (
      ((c = u) ||
        (c =
          e !== null && e.memoizedState === null ? !1 : (dt.current & 2) !== 0),
      c && ((n = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Oe) {
        if ((n ? Gl(t) : Xl(), Oe)) {
          var s = pt,
            h;
          if ((h = s)) {
            e: {
              for (h = s, s = ml; h.nodeType !== 8; ) {
                if (!s) {
                  s = null;
                  break e;
                }
                if (((h = dl(h.nextSibling)), h === null)) {
                  s = null;
                  break e;
                }
              }
              s = h;
            }
            s !== null
              ? ((t.memoizedState = {
                  dehydrated: s,
                  treeContext: Ea !== null ? { id: El, overflow: xl } : null,
                  retryLane: 536870912,
                }),
                (h = tl(18, null, null, 0)),
                (h.stateNode = s),
                (h.return = t),
                (t.child = h),
                (At = t),
                (pt = null),
                (h = !0))
              : (h = !1);
          }
          h || Ta(t);
        }
        if (
          ((s = t.memoizedState),
          s !== null && ((s = s.dehydrated), s !== null))
        )
          return s.data === "$!" ? (t.lanes = 16) : (t.lanes = 536870912), null;
        Tl(t);
      }
      return (
        (s = a.children),
        (a = a.fallback),
        n
          ? (Xl(),
            (n = t.mode),
            (s = ic({ mode: "hidden", children: s }, n)),
            (a = ja(a, n, l, null)),
            (s.return = t),
            (a.return = t),
            (s.sibling = a),
            (t.child = s),
            (n = t.child),
            (n.memoizedState = ac(l)),
            (n.childLanes = nc(e, c, l)),
            (t.memoizedState = lc),
            a)
          : (Gl(t), uc(t, s))
      );
    }
    if (
      ((h = e.memoizedState), h !== null && ((s = h.dehydrated), s !== null))
    ) {
      if (u)
        t.flags & 256
          ? (Gl(t), (t.flags &= -257), (t = rc(e, t, l)))
          : t.memoizedState !== null
            ? (Xl(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Xl(),
              (n = a.fallback),
              (s = t.mode),
              (a = ic({ mode: "visible", children: a.children }, s)),
              (n = ja(n, s, l, null)),
              (n.flags |= 2),
              (a.return = t),
              (n.return = t),
              (a.sibling = n),
              (t.child = a),
              Da(t, e.child, null, l),
              (a = t.child),
              (a.memoizedState = ac(l)),
              (a.childLanes = nc(e, c, l)),
              (t.memoizedState = lc),
              (t = n));
      else if ((Gl(t), s.data === "$!")) {
        if (((c = s.nextSibling && s.nextSibling.dataset), c)) var E = c.dgst;
        (c = E),
          (a = Error(f(419))),
          (a.stack = ""),
          (a.digest = c),
          Kn({ value: a, source: null, stack: null }),
          (t = rc(e, t, l));
      } else if (
        (vt || au(e, t, l, !1), (c = (l & e.childLanes) !== 0), vt || c)
      ) {
        if (((c = Xe), c !== null)) {
          if (((a = l & -l), (a & 42) !== 0)) a = 1;
          else
            switch (a) {
              case 2:
                a = 1;
                break;
              case 8:
                a = 4;
                break;
              case 32:
                a = 16;
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
                a = 64;
                break;
              case 268435456:
                a = 134217728;
                break;
              default:
                a = 0;
            }
          if (
            ((a = (a & (c.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== h.retryLane)
          )
            throw ((h.retryLane = a), ql(e, a), _t(c, e, a), Ss);
        }
        s.data === "$?" || Cc(), (t = rc(e, t, l));
      } else
        s.data === "$?"
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = Mm.bind(null, e)),
            (s._reactRetry = t),
            (t = null))
          : ((e = h.treeContext),
            (pt = dl(s.nextSibling)),
            (At = t),
            (Oe = !0),
            (ol = null),
            (ml = !1),
            e !== null &&
              ((Ft[$t++] = El),
              (Ft[$t++] = xl),
              (Ft[$t++] = Ea),
              (El = e.id),
              (xl = e.overflow),
              (Ea = t)),
            (t = uc(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (Xl(),
        (n = a.fallback),
        (s = t.mode),
        (h = e.child),
        (E = h.sibling),
        (a = Pl(h, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = h.subtreeFlags & 31457280),
        E !== null ? (n = Pl(E, n)) : ((n = ja(n, s, l, null)), (n.flags |= 2)),
        (n.return = t),
        (a.return = t),
        (a.sibling = n),
        (t.child = a),
        (a = n),
        (n = t.child),
        (s = e.child.memoizedState),
        s === null
          ? (s = ac(l))
          : ((h = s.cachePool),
            h !== null
              ? ((E = ht._currentValue),
                (h = h.parent !== E ? { parent: E, pool: E } : h))
              : (h = Oo()),
            (s = { baseLanes: s.baseLanes | l, cachePool: h })),
        (n.memoizedState = s),
        (n.childLanes = nc(e, c, l)),
        (t.memoizedState = lc),
        a)
      : (Gl(t),
        (l = e.child),
        (e = l.sibling),
        (l = Pl(l, { mode: "visible", children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [e]), (t.flags |= 16)) : c.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function uc(e, t) {
    return (
      (t = ic({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ic(e, t) {
    return td(e, t, 0, null);
  }
  function rc(e, t, l) {
    return (
      Da(t, e.child, null, l),
      (e = uc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Os(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), sc(e.return, t, l);
  }
  function cc(e, t, l, a, n) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = a),
        (u.tail = l),
        (u.tailMode = n));
  }
  function Us(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    if ((bt(e, t, a.children, l), (a = dt.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Os(e, l, t);
          else if (e.tag === 19) Os(e, l, t);
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
      a &= 1;
    }
    switch ((Ge(dt, a), n)) {
      case "forwards":
        for (l = t.child, n = null; l !== null; )
          (e = l.alternate),
            e !== null && ui(e) === null && (n = l),
            (l = l.sibling);
        (l = n),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          cc(t, !1, n, l, u);
        break;
      case "backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && ui(e) === null)) {
            t.child = n;
            break;
          }
          (e = n.sibling), (n.sibling = l), (l = n), (n = e);
        }
        cc(t, !0, l, null, u);
        break;
      case "together":
        cc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Rl(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Il |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((au(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(f(153));
    if (t.child !== null) {
      for (
        e = t.child, l = Pl(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (l = l.sibling = Pl(e, e.pendingProps)),
          (l.return = t);
      l.sibling = null;
    }
    return t.child;
  }
  function fc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && gi(e)));
  }
  function dm(e, t, l) {
    switch (t.tag) {
      case 3:
        Ga(t, t.stateNode.containerInfo),
          Zl(t, ht, e.memoizedState.cache),
          Zn();
        break;
      case 27:
      case 5:
        _n(t);
        break;
      case 4:
        Ga(t, t.stateNode.containerInfo);
        break;
      case 10:
        Zl(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (Gl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? _s(e, t, l)
              : (Gl(t), (e = Rl(e, t, l)), e !== null ? e.sibling : null);
        Gl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (au(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return Us(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          Ge(dt, dt.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Ds(e, t, l);
      case 24:
        Zl(t, ht, e.memoizedState.cache);
    }
    return Rl(e, t, l);
  }
  function Ns(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) vt = !0;
      else {
        if (!fc(e, l) && (t.flags & 128) === 0) return (vt = !1), dm(e, t, l);
        vt = (e.flags & 131072) !== 0;
      }
    else (vt = !1), Oe && (t.flags & 1048576) !== 0 && yo(t, ei, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var a = t.elementType,
            n = a._init;
          if (((a = n(a._payload)), (t.type = a), typeof a == "function"))
            Tc(a)
              ? ((e = _a(a, e)), (t.tag = 1), (t = zs(null, t, a, e, l)))
              : ((t.tag = 0), (t = tc(null, t, a, e, l)));
          else {
            if (a != null) {
              if (((n = a.$$typeof), n === W)) {
                (t.tag = 11), (t = Es(null, t, a, e, l));
                break e;
              } else if (n === pe) {
                (t.tag = 14), (t = xs(null, t, a, e, l));
                break e;
              }
            }
            throw ((t = ce(a) || a), Error(f(306, t, "")));
          }
        }
        return t;
      case 0:
        return tc(e, t, t.type, t.pendingProps, l);
      case 1:
        return (a = t.type), (n = _a(a, t.pendingProps)), zs(e, t, a, n, l);
      case 3:
        e: {
          if ((Ga(t, t.stateNode.containerInfo), e === null))
            throw Error(f(387));
          var u = t.pendingProps;
          (n = t.memoizedState), (a = n.element), mc(e, t), iu(t, u, null, l);
          var c = t.memoizedState;
          if (
            ((u = c.cache),
            Zl(t, ht, u),
            u !== n.cache && dc(t, [ht], l, !0),
            uu(),
            (u = c.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: u, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = As(e, t, u, l);
              break e;
            } else if (u !== a) {
              (a = Wt(Error(f(424)), t)), Kn(a), (t = As(e, t, u, l));
              break e;
            } else
              for (
                pt = dl(t.stateNode.containerInfo.firstChild),
                  At = t,
                  Oe = !0,
                  ol = null,
                  ml = !0,
                  l = Ro(t, null, u, l),
                  t.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
          else {
            if ((Zn(), u === a)) {
              t = Rl(e, t, l);
              break e;
            }
            bt(e, t, u, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          lu(e, t),
          e === null
            ? (l = Cd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : Oe ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = ji(Rt.current).createElement(l)),
                (a[G] = t),
                (a[V] = e),
                St(a, l, e),
                He(a),
                (t.stateNode = a))
            : (t.memoizedState = Cd(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          _n(t),
          e === null &&
            Oe &&
            ((a = t.stateNode = Nd(t.type, t.pendingProps, Rt.current)),
            (At = t),
            (ml = !0),
            (pt = dl(a.firstChild))),
          (a = t.pendingProps.children),
          e !== null || Oe ? bt(e, t, a, l) : (t.child = Da(t, null, a, l)),
          lu(e, t),
          t.child
        );
      case 5:
        return (
          e === null &&
            Oe &&
            ((n = a = pt) &&
              ((a = Xm(a, t.type, t.pendingProps, ml)),
              a !== null
                ? ((t.stateNode = a),
                  (At = t),
                  (pt = dl(a.firstChild)),
                  (ml = !1),
                  (n = !0))
                : (n = !1)),
            n || Ta(t)),
          _n(t),
          (n = t.type),
          (u = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (a = u.children),
          Wc(n, u) ? (a = null) : c !== null && Wc(n, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = Br(e, t, um, null, null, l)), (Eu._currentValue = n)),
          lu(e, t),
          bt(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            Oe &&
            ((e = l = pt) &&
              ((l = Qm(l, t.pendingProps, ml)),
              l !== null
                ? ((t.stateNode = l), (At = t), (pt = null), (e = !0))
                : (e = !1)),
            e || Ta(t)),
          null
        );
      case 13:
        return _s(e, t, l);
      case 4:
        return (
          Ga(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Da(t, null, a, l)) : bt(e, t, a, l),
          t.child
        );
      case 11:
        return Es(e, t, t.type, t.pendingProps, l);
      case 7:
        return bt(e, t, t.pendingProps, l), t.child;
      case 8:
        return bt(e, t, t.pendingProps.children, l), t.child;
      case 12:
        return bt(e, t, t.pendingProps.children, l), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          Zl(t, t.type, a.value),
          bt(e, t, a.children, l),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Ua(t),
          (n = Tt(n)),
          (a = a(n)),
          (t.flags |= 1),
          bt(e, t, a, l),
          t.child
        );
      case 14:
        return xs(e, t, t.type, t.pendingProps, l);
      case 15:
        return Ts(e, t, t.type, t.pendingProps, l);
      case 19:
        return Us(e, t, l);
      case 22:
        return Ds(e, t, l);
      case 24:
        return (
          Ua(t),
          (a = Tt(ht)),
          e === null
            ? ((n = Cr()),
              n === null &&
                ((n = Xe),
                (u = jr()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (t.memoizedState = { parent: a, cache: n }),
              hc(t),
              Zl(t, ht, n))
            : ((e.lanes & l) !== 0 && (mc(e, t), iu(t, null, null, l), uu()),
              (n = e.memoizedState),
              (u = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  Zl(t, ht, a))
                : ((a = u.cache),
                  Zl(t, ht, a),
                  a !== n.cache && dc(t, [ht], l, !0))),
          bt(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(f(156, t.tag));
  }
  var oc = xe(null),
    Oa = null,
    Ml = null;
  function Zl(e, t, l) {
    Ge(oc, t._currentValue), (t._currentValue = l);
  }
  function zl(e) {
    (e._currentValue = oc.current), tt(oc);
  }
  function sc(e, t, l) {
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
  function dc(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var c = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var s = u;
          u = n;
          for (var h = 0; h < t.length; h++)
            if (s.context === t[h]) {
              (u.lanes |= l),
                (s = u.alternate),
                s !== null && (s.lanes |= l),
                sc(u.return, l, e),
                a || (c = null);
              break e;
            }
          u = s.next;
        }
      } else if (n.tag === 18) {
        if (((c = n.return), c === null)) throw Error(f(341));
        (c.lanes |= l),
          (u = c.alternate),
          u !== null && (u.lanes |= l),
          sc(c, l, e),
          (c = null);
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null; ) {
          if (c === e) {
            c = null;
            break;
          }
          if (((n = c.sibling), n !== null)) {
            (n.return = c.return), (c = n);
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function au(e, t, l, a) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(f(387));
        if (((c = c.memoizedProps), c !== null)) {
          var s = n.type;
          Yt(n.pendingProps.value, c.value) ||
            (e !== null ? e.push(s) : (e = [s]));
        }
      } else if (n === oa.current) {
        if (((c = n.alternate), c === null)) throw Error(f(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(Eu) : (e = [Eu]));
      }
      n = n.return;
    }
    e !== null && dc(t, e, l, a), (t.flags |= 262144);
  }
  function gi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Yt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ua(e) {
    (Oa = e),
      (Ml = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Tt(e) {
    return js(Oa, e);
  }
  function pi(e, t) {
    return Oa === null && Ua(e), js(e, t);
  }
  function js(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), Ml === null)) {
      if (e === null) throw Error(f(308));
      (Ml = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else Ml = Ml.next = t;
    return l;
  }
  var Kl = !1;
  function hc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function mc(e, t) {
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
  function Jl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function kl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Ie & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = Pu(e)),
        mo(e, null, l),
        t
      );
    }
    return $u(e, a, t, l), Pu(e);
  }
  function nu(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194176) !== 0))
    ) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), _(e, l);
    }
  }
  function vc(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          u === null ? (n = u = c) : (u = u.next = c), (l = l.next);
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
  var yc = !1;
  function uu() {
    if (yc) {
      var e = fn;
      if (e !== null) throw e;
    }
  }
  function iu(e, t, l, a) {
    yc = !1;
    var n = e.updateQueue;
    Kl = !1;
    var u = n.firstBaseUpdate,
      c = n.lastBaseUpdate,
      s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var h = s,
        E = h.next;
      (h.next = null), c === null ? (u = E) : (c.next = E), (c = h);
      var N = e.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (s = N.lastBaseUpdate),
        s !== c &&
          (s === null ? (N.firstBaseUpdate = E) : (s.next = E),
          (N.lastBaseUpdate = h)));
    }
    if (u !== null) {
      var H = n.baseState;
      (c = 0), (N = E = h = null), (s = u);
      do {
        var A = s.lane & -536870913,
          U = A !== s.lane;
        if (U ? (ze & A) === A : (a & A) === A) {
          A !== 0 && A === cn && (yc = !0),
            N !== null &&
              (N = N.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var ae = e,
              me = s;
            A = t;
            var nt = l;
            switch (me.tag) {
              case 1:
                if (((ae = me.payload), typeof ae == "function")) {
                  H = ae.call(nt, H, A);
                  break e;
                }
                H = ae;
                break e;
              case 3:
                ae.flags = (ae.flags & -65537) | 128;
              case 0:
                if (
                  ((ae = me.payload),
                  (A = typeof ae == "function" ? ae.call(nt, H, A) : ae),
                  A == null)
                )
                  break e;
                H = F({}, H, A);
                break e;
              case 2:
                Kl = !0;
            }
          }
          (A = s.callback),
            A !== null &&
              ((e.flags |= 64),
              U && (e.flags |= 8192),
              (U = n.callbacks),
              U === null ? (n.callbacks = [A]) : U.push(A));
        } else
          (U = {
            lane: A,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            N === null ? ((E = N = U), (h = H)) : (N = N.next = U),
            (c |= A);
        if (((s = s.next), s === null)) {
          if (((s = n.shared.pending), s === null)) break;
          (U = s),
            (s = U.next),
            (U.next = null),
            (n.lastBaseUpdate = U),
            (n.shared.pending = null);
        }
      } while (!0);
      N === null && (h = H),
        (n.baseState = h),
        (n.firstBaseUpdate = E),
        (n.lastBaseUpdate = N),
        u === null && (n.shared.lanes = 0),
        (Il |= c),
        (e.lanes = c),
        (e.memoizedState = H);
    }
  }
  function ws(e, t) {
    if (typeof e != "function") throw Error(f(191, e));
    e.call(t);
  }
  function Cs(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) ws(l[e], t);
  }
  function ru(e, t) {
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
              c = l.inst;
            (a = u()), (c.destroy = a);
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (s) {
      qe(t, t.return, s);
    }
  }
  function Wl(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var c = a.inst,
              s = c.destroy;
            if (s !== void 0) {
              (c.destroy = void 0), (n = t);
              var h = l;
              try {
                s();
              } catch (E) {
                qe(n, h, E);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (E) {
      qe(t, t.return, E);
    }
  }
  function Hs(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Cs(t, l);
      } catch (a) {
        qe(e, e.return, a);
      }
    }
  }
  function Bs(e, t, l) {
    (l.props = _a(e.type, e.memoizedProps)), (l.state = e.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      qe(e, t, a);
    }
  }
  function Na(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        var a = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = a;
            break;
          default:
            n = a;
        }
        typeof l == "function" ? (e.refCleanup = l(n)) : (l.current = n);
      }
    } catch (u) {
      qe(e, t, u);
    }
  }
  function qt(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          qe(e, t, n);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          qe(e, t, n);
        }
      else l.current = null;
  }
  function Ls(e) {
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
      qe(e, e.return, n);
    }
  }
  function Ys(e, t, l) {
    try {
      var a = e.stateNode;
      Bm(a, e.type, l, t), (a[V] = t);
    } catch (n) {
      qe(e, e.return, n);
    }
  }
  function qs(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    );
  }
  function gc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || qs(e.return)) return null;
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
  function pc(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode),
        t
          ? l.nodeType === 8
            ? l.parentNode.insertBefore(e, t)
            : l.insertBefore(e, t)
          : (l.nodeType === 8
              ? ((t = l.parentNode), t.insertBefore(e, l))
              : ((t = l), t.appendChild(e)),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = Ni));
    else if (a !== 4 && a !== 27 && ((e = e.child), e !== null))
      for (pc(e, t, l), e = e.sibling; e !== null; )
        pc(e, t, l), (e = e.sibling);
  }
  function bi(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && a !== 27 && ((e = e.child), e !== null))
      for (bi(e, t, l), e = e.sibling; e !== null; )
        bi(e, t, l), (e = e.sibling);
  }
  var Al = !1,
    lt = !1,
    bc = !1,
    Gs = typeof WeakSet == "function" ? WeakSet : Set,
    yt = null,
    Xs = !1;
  function hm(e, t) {
    if (((e = e.containerInfo), (Jc = Yi), (e = no(e)), Er(e))) {
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
            } catch (me) {
              l = null;
              break e;
            }
            var c = 0,
              s = -1,
              h = -1,
              E = 0,
              N = 0,
              H = e,
              A = null;
            t: for (;;) {
              for (
                var U;
                H !== l || (n !== 0 && H.nodeType !== 3) || (s = c + n),
                  H !== u || (a !== 0 && H.nodeType !== 3) || (h = c + a),
                  H.nodeType === 3 && (c += H.nodeValue.length),
                  (U = H.firstChild) !== null;

              )
                (A = H), (H = U);
              for (;;) {
                if (H === e) break t;
                if (
                  (A === l && ++E === n && (s = c),
                  A === u && ++N === a && (h = c),
                  (U = H.nextSibling) !== null)
                )
                  break;
                (H = A), (A = H.parentNode);
              }
              H = U;
            }
            l = s === -1 || h === -1 ? null : { start: s, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      kc = { focusedElem: e, selectionRange: l }, Yi = !1, yt = t;
      yt !== null;

    )
      if (
        ((t = yt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (yt = e);
      else
        for (; yt !== null; ) {
          switch (((t = yt), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
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
                  var ae = _a(l.type, n, l.elementType === l.type);
                  (e = a.getSnapshotBeforeUpdate(ae, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = e);
                } catch (me) {
                  qe(l, l.return, me);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  Pc(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Pc(e);
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
            (e.return = t.return), (yt = e);
            break;
          }
          yt = t.return;
        }
    return (ae = Xs), (Xs = !1), ae;
  }
  function Qs(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ol(e, l), a & 4 && ru(5, l);
        break;
      case 1:
        if ((Ol(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (s) {
              qe(l, l.return, s);
            }
          else {
            var n = _a(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (s) {
              qe(l, l.return, s);
            }
          }
        a & 64 && Hs(l), a & 512 && Na(l, l.return);
        break;
      case 3:
        if ((Ol(e, l), a & 64 && ((a = l.updateQueue), a !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            Cs(a, e);
          } catch (s) {
            qe(l, l.return, s);
          }
        }
        break;
      case 26:
        Ol(e, l), a & 512 && Na(l, l.return);
        break;
      case 27:
      case 5:
        Ol(e, l), t === null && a & 4 && Ls(l), a & 512 && Na(l, l.return);
        break;
      case 12:
        Ol(e, l);
        break;
      case 13:
        Ol(e, l), a & 4 && Ks(e, l);
        break;
      case 22:
        if (((n = l.memoizedState !== null || Al), !n)) {
          t = (t !== null && t.memoizedState !== null) || lt;
          var u = Al,
            c = lt;
          (Al = n),
            (lt = t) && !c ? Fl(e, l, (l.subtreeFlags & 8772) !== 0) : Ol(e, l),
            (Al = u),
            (lt = c);
        }
        a & 512 &&
          (l.memoizedProps.mode === "manual"
            ? Na(l, l.return)
            : qt(l, l.return));
        break;
      default:
        Ol(e, l);
    }
  }
  function Vs(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Vs(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Te(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var ot = null,
    Gt = !1;
  function _l(e, t, l) {
    for (l = l.child; l !== null; ) Zs(e, t, l), (l = l.sibling);
  }
  function Zs(e, t, l) {
    if (Et && typeof Et.onCommitFiberUnmount == "function")
      try {
        Et.onCommitFiberUnmount(Ut, l);
      } catch (c) {}
    switch (l.tag) {
      case 26:
        lt || qt(l, t),
          _l(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        lt || qt(l, t);
        var a = ot,
          n = Gt;
        for (
          ot = l.stateNode, _l(e, t, l), l = l.stateNode, t = l.attributes;
          t.length;

        )
          l.removeAttributeNode(t[0]);
        Te(l), (ot = a), (Gt = n);
        break;
      case 5:
        lt || qt(l, t);
      case 6:
        n = ot;
        var u = Gt;
        if (((ot = null), _l(e, t, l), (ot = n), (Gt = u), ot !== null))
          if (Gt)
            try {
              (e = ot),
                (a = l.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(a)
                  : e.removeChild(a);
            } catch (c) {
              qe(l, t, c);
            }
          else
            try {
              ot.removeChild(l.stateNode);
            } catch (c) {
              qe(l, t, c);
            }
        break;
      case 18:
        ot !== null &&
          (Gt
            ? ((t = ot),
              (l = l.stateNode),
              t.nodeType === 8
                ? $c(t.parentNode, l)
                : t.nodeType === 1 && $c(t, l),
              Ru(t))
            : $c(ot, l.stateNode));
        break;
      case 4:
        (a = ot),
          (n = Gt),
          (ot = l.stateNode.containerInfo),
          (Gt = !0),
          _l(e, t, l),
          (ot = a),
          (Gt = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        lt || Wl(2, l, t), lt || Wl(4, l, t), _l(e, t, l);
        break;
      case 1:
        lt ||
          (qt(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && Bs(l, t, a)),
          _l(e, t, l);
        break;
      case 21:
        _l(e, t, l);
        break;
      case 22:
        lt || qt(l, t),
          (lt = (a = lt) || l.memoizedState !== null),
          _l(e, t, l),
          (lt = a);
        break;
      default:
        _l(e, t, l);
    }
  }
  function Ks(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ru(e);
      } catch (l) {
        qe(t, t.return, l);
      }
  }
  function mm(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Gs()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Gs()),
          t
        );
      default:
        throw Error(f(435, e.tag));
    }
  }
  function Sc(e, t) {
    var l = mm(e);
    t.forEach(function (a) {
      var n = zm.bind(null, e, a);
      l.has(a) || (l.add(a), a.then(n, n));
    });
  }
  function It(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = e,
          c = t,
          s = c;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
            case 5:
              (ot = s.stateNode), (Gt = !1);
              break e;
            case 3:
              (ot = s.stateNode.containerInfo), (Gt = !0);
              break e;
            case 4:
              (ot = s.stateNode.containerInfo), (Gt = !0);
              break e;
          }
          s = s.return;
        }
        if (ot === null) throw Error(f(160));
        Zs(u, c, n),
          (ot = null),
          (Gt = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Js(t, e), (t = t.sibling);
  }
  var sl = null;
  function Js(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        It(t, e),
          el(e),
          a & 4 && (Wl(3, e, e.return), ru(3, e), Wl(5, e, e.return));
        break;
      case 1:
        It(t, e),
          el(e),
          a & 512 && (lt || l === null || qt(l, l.return)),
          a & 64 &&
            Al &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var n = sl;
        if (
          (It(t, e),
          el(e),
          a & 512 && (lt || l === null || qt(l, l.return)),
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
                          u[_e] ||
                          u[G] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title"),
                          )),
                        St(u, a, l),
                        (u[G] = e),
                        He(u),
                        (a = u);
                      break e;
                    case "link":
                      var c = Ld("link", "href", n).get(a + (l.href || ""));
                      if (c) {
                        for (var s = 0; s < c.length; s++)
                          if (
                            ((u = c[s]),
                            u.getAttribute("href") ===
                              (l.href == null ? null : l.href) &&
                              u.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              u.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              u.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            c.splice(s, 1);
                            break t;
                          }
                      }
                      (u = n.createElement(a)),
                        St(u, a, l),
                        n.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (c = Ld("meta", "content", n).get(
                          a + (l.content || ""),
                        ))
                      ) {
                        for (s = 0; s < c.length; s++)
                          if (
                            ((u = c[s]),
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
                            c.splice(s, 1);
                            break t;
                          }
                      }
                      (u = n.createElement(a)),
                        St(u, a, l),
                        n.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  (u[G] = e), He(u), (a = u);
                }
                e.stateNode = a;
              } else Yd(n, e.type, e.stateNode);
            else e.stateNode = Bd(n, a, e.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                a === null
                  ? Yd(n, e.type, e.stateNode)
                  : Bd(n, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                Ys(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        if (a & 4 && e.alternate === null) {
          (n = e.stateNode), (u = e.memoizedProps);
          try {
            for (var h = n.firstChild; h; ) {
              var E = h.nextSibling,
                N = h.nodeName;
              h[_e] ||
                N === "HEAD" ||
                N === "BODY" ||
                N === "SCRIPT" ||
                N === "STYLE" ||
                (N === "LINK" && h.rel.toLowerCase() === "stylesheet") ||
                n.removeChild(h),
                (h = E);
            }
            for (var H = e.type, A = n.attributes; A.length; )
              n.removeAttributeNode(A[0]);
            St(n, H, u), (n[G] = e), (n[V] = u);
          } catch (ae) {
            qe(e, e.return, ae);
          }
        }
      case 5:
        if (
          (It(t, e),
          el(e),
          a & 512 && (lt || l === null || qt(l, l.return)),
          e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            Wa(n, "");
          } catch (ae) {
            qe(e, e.return, ae);
          }
        }
        a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), Ys(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (bc = !0);
        break;
      case 6:
        if ((It(t, e), el(e), a & 4)) {
          if (e.stateNode === null) throw Error(f(162));
          (a = e.memoizedProps), (l = e.stateNode);
          try {
            l.nodeValue = a;
          } catch (ae) {
            qe(e, e.return, ae);
          }
        }
        break;
      case 3:
        if (
          ((Hi = null),
          (n = sl),
          (sl = wi(t.containerInfo)),
          It(t, e),
          (sl = n),
          el(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Ru(t.containerInfo);
          } catch (ae) {
            qe(e, e.return, ae);
          }
        bc && ((bc = !1), ks(e));
        break;
      case 4:
        (a = sl),
          (sl = wi(e.stateNode.containerInfo)),
          It(t, e),
          el(e),
          (sl = a);
        break;
      case 12:
        It(t, e), el(e);
        break;
      case 13:
        It(t, e),
          el(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (_c = mt()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Sc(e, a)));
        break;
      case 22:
        if (
          (a & 512 && (lt || l === null || qt(l, l.return)),
          (h = e.memoizedState !== null),
          (E = l !== null && l.memoizedState !== null),
          (N = Al),
          (H = lt),
          (Al = N || h),
          (lt = H || E),
          It(t, e),
          (lt = H),
          (Al = N),
          el(e),
          (t = e.stateNode),
          (t._current = e),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          a & 8192 &&
            ((t._visibility = h ? t._visibility & -2 : t._visibility | 1),
            h && ((t = Al || lt), l === null || E || t || hn(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
        )
          e: for (l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (l === null) {
                E = l = t;
                try {
                  if (((n = E.stateNode), h))
                    (u = n.style),
                      typeof u.setProperty == "function"
                        ? u.setProperty("display", "none", "important")
                        : (u.display = "none");
                  else {
                    (c = E.stateNode), (s = E.memoizedProps.style);
                    var U =
                      s != null && s.hasOwnProperty("display")
                        ? s.display
                        : null;
                    c.style.display =
                      U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                  }
                } catch (ae) {
                  qe(E, E.return, ae);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                E = t;
                try {
                  E.stateNode.nodeValue = h ? "" : E.memoizedProps;
                } catch (ae) {
                  qe(E, E.return, ae);
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
            l !== null && ((a.retryQueue = null), Sc(e, l))));
        break;
      case 19:
        It(t, e),
          el(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Sc(e, a)));
        break;
      case 21:
        break;
      default:
        It(t, e), el(e);
    }
  }
  function el(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        if (e.tag !== 27) {
          e: {
            for (var l = e.return; l !== null; ) {
              if (qs(l)) {
                var a = l;
                break e;
              }
              l = l.return;
            }
            throw Error(f(160));
          }
          switch (a.tag) {
            case 27:
              var n = a.stateNode,
                u = gc(e);
              bi(e, u, n);
              break;
            case 5:
              var c = a.stateNode;
              a.flags & 32 && (Wa(c, ""), (a.flags &= -33));
              var s = gc(e);
              bi(e, s, c);
              break;
            case 3:
            case 4:
              var h = a.stateNode.containerInfo,
                E = gc(e);
              pc(e, E, h);
              break;
            default:
              throw Error(f(161));
          }
        }
      } catch (N) {
        qe(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ks(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        ks(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function Ol(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Qs(e, t.alternate, t), (t = t.sibling);
  }
  function hn(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Wl(4, t, t.return), hn(t);
          break;
        case 1:
          qt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Bs(t, t.return, l),
            hn(t);
          break;
        case 26:
        case 27:
        case 5:
          qt(t, t.return), hn(t);
          break;
        case 22:
          qt(t, t.return), t.memoizedState === null && hn(t);
          break;
        default:
          hn(t);
      }
      e = e.sibling;
    }
  }
  function Fl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        u = t,
        c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Fl(n, u, l), ru(4, u);
          break;
        case 1:
          if (
            (Fl(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (E) {
              qe(a, a.return, E);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var s = a.stateNode;
            try {
              var h = n.shared.hiddenCallbacks;
              if (h !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < h.length; n++)
                  ws(h[n], s);
            } catch (E) {
              qe(a, a.return, E);
            }
          }
          l && c & 64 && Hs(u), Na(u, u.return);
          break;
        case 26:
        case 27:
        case 5:
          Fl(n, u, l), l && a === null && c & 4 && Ls(u), Na(u, u.return);
          break;
        case 12:
          Fl(n, u, l);
          break;
        case 13:
          Fl(n, u, l), l && c & 4 && Ks(n, u);
          break;
        case 22:
          u.memoizedState === null && Fl(n, u, l), Na(u, u.return);
          break;
        default:
          Fl(n, u, l);
      }
      t = t.sibling;
    }
  }
  function Ec(e, t) {
    var l = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && $n(l));
  }
  function xc(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && $n(e));
  }
  function $l(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Ws(e, t, l, a), (t = t.sibling);
  }
  function Ws(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        $l(e, t, l, a), n & 2048 && ru(9, t);
        break;
      case 3:
        $l(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && $n(e)));
        break;
      case 12:
        if (n & 2048) {
          $l(e, t, l, a), (e = t.stateNode);
          try {
            var u = t.memoizedProps,
              c = u.id,
              s = u.onPostCommit;
            typeof s == "function" &&
              s(
                c,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (h) {
            qe(t, t.return, h);
          }
        } else $l(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        (u = t.stateNode),
          t.memoizedState !== null
            ? u._visibility & 4
              ? $l(e, t, l, a)
              : cu(e, t)
            : u._visibility & 4
              ? $l(e, t, l, a)
              : ((u._visibility |= 4),
                mn(e, t, l, a, (t.subtreeFlags & 10256) !== 0)),
          n & 2048 && Ec(t.alternate, t);
        break;
      case 24:
        $l(e, t, l, a), n & 2048 && xc(t.alternate, t);
        break;
      default:
        $l(e, t, l, a);
    }
  }
  function mn(e, t, l, a, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var u = e,
        c = t,
        s = l,
        h = a,
        E = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          mn(u, c, s, h, n), ru(8, c);
          break;
        case 23:
          break;
        case 22:
          var N = c.stateNode;
          c.memoizedState !== null
            ? N._visibility & 4
              ? mn(u, c, s, h, n)
              : cu(u, c)
            : ((N._visibility |= 4), mn(u, c, s, h, n)),
            n && E & 2048 && Ec(c.alternate, c);
          break;
        case 24:
          mn(u, c, s, h, n), n && E & 2048 && xc(c.alternate, c);
          break;
        default:
          mn(u, c, s, h, n);
      }
      t = t.sibling;
    }
  }
  function cu(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            cu(l, a), n & 2048 && Ec(a.alternate, a);
            break;
          case 24:
            cu(l, a), n & 2048 && xc(a.alternate, a);
            break;
          default:
            cu(l, a);
        }
        t = t.sibling;
      }
  }
  var fu = 8192;
  function vn(e) {
    if (e.subtreeFlags & fu)
      for (e = e.child; e !== null; ) Fs(e), (e = e.sibling);
  }
  function Fs(e) {
    switch (e.tag) {
      case 26:
        vn(e),
          e.flags & fu &&
            e.memoizedState !== null &&
            lv(sl, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        vn(e);
        break;
      case 3:
      case 4:
        var t = sl;
        (sl = wi(e.stateNode.containerInfo)), vn(e), (sl = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = fu), (fu = 16777216), vn(e), (fu = t))
            : vn(e));
        break;
      default:
        vn(e);
    }
  }
  function $s(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function ou(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (yt = a), Is(a, e);
        }
      $s(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Ps(e), (e = e.sibling);
  }
  function Ps(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ou(e), e.flags & 2048 && Wl(9, e, e.return);
        break;
      case 3:
        ou(e);
        break;
      case 12:
        ou(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 4 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -5), Si(e))
          : ou(e);
        break;
      default:
        ou(e);
    }
  }
  function Si(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (yt = a), Is(a, e);
        }
      $s(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Wl(8, t, t.return), Si(t);
          break;
        case 22:
          (l = t.stateNode),
            l._visibility & 4 && ((l._visibility &= -5), Si(t));
          break;
        default:
          Si(t);
      }
      e = e.sibling;
    }
  }
  function Is(e, t) {
    for (; yt !== null; ) {
      var l = yt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Wl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          $n(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (yt = a);
      else
        e: for (l = e; yt !== null; ) {
          a = yt;
          var n = a.sibling,
            u = a.return;
          if ((Vs(a), a === l)) {
            yt = null;
            break e;
          }
          if (n !== null) {
            (n.return = u), (yt = n);
            break e;
          }
          yt = u;
        }
    }
  }
  function vm(e, t, l, a) {
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
  function tl(e, t, l, a) {
    return new vm(e, t, l, a);
  }
  function Tc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Pl(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = tl(e.tag, t, e.key, e.mode)),
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
      (l.flags = e.flags & 31457280),
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
  function ed(e, t) {
    e.flags &= 31457282;
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
  function Ei(e, t, l, a, n, u) {
    var c = 0;
    if (((a = e), typeof e == "function")) Tc(e) && (c = 1);
    else if (typeof e == "string")
      c = ev(e, l, Zt.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case g:
          return ja(l.children, n, u, t);
        case m:
          (c = 8), (n |= 24);
          break;
        case M:
          return (
            (e = tl(12, l, t, n | 2)), (e.elementType = M), (e.lanes = u), e
          );
        case K:
          return (e = tl(13, l, t, n)), (e.elementType = K), (e.lanes = u), e;
        case I:
          return (e = tl(19, l, t, n)), (e.elementType = I), (e.lanes = u), e;
        case Ae:
          return td(l, n, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case z:
              case Y:
                c = 10;
                break e;
              case j:
                c = 9;
                break e;
              case W:
                c = 11;
                break e;
              case pe:
                c = 14;
                break e;
              case te:
                (c = 16), (a = null);
                break e;
            }
          (c = 29),
            (l = Error(f(130, e === null ? "null" : typeof e, ""))),
            (a = null);
      }
    return (
      (t = tl(c, l, t, n)), (t.elementType = e), (t.type = a), (t.lanes = u), t
    );
  }
  function ja(e, t, l, a) {
    return (e = tl(7, e, a, t)), (e.lanes = l), e;
  }
  function td(e, t, l, a) {
    (e = tl(22, e, a, t)), (e.elementType = Ae), (e.lanes = l);
    var n = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var u = n._current;
        if (u === null) throw Error(f(456));
        if ((n._pendingVisibility & 2) === 0) {
          var c = ql(u, 2);
          c !== null && ((n._pendingVisibility |= 2), _t(c, u, 2));
        }
      },
      attach: function () {
        var u = n._current;
        if (u === null) throw Error(f(456));
        if ((n._pendingVisibility & 2) !== 0) {
          var c = ql(u, 2);
          c !== null && ((n._pendingVisibility &= -3), _t(c, u, 2));
        }
      },
    };
    return (e.stateNode = n), e;
  }
  function Dc(e, t, l) {
    return (e = tl(6, e, null, t)), (e.lanes = l), e;
  }
  function Rc(e, t, l) {
    return (
      (t = tl(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Ul(e) {
    e.flags |= 4;
  }
  function ld(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !qd(t))) {
      if (
        ((t = Pt.current),
        t !== null &&
          ((ze & 4194176) === ze
            ? vl !== null
            : ((ze & 62914560) !== ze && (ze & 536870912) === 0) || t !== vl))
      )
        throw ((kn = Or), bo);
      e.flags |= 8192;
    }
  }
  function xi(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? va() : 536870912), (e.lanes |= t), (gn |= t));
  }
  function su(e, t) {
    if (!Oe)
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
  function Pe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 31457280),
          (a |= n.flags & 31457280),
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
  function ym(e, t, l) {
    var a = t.pendingProps;
    switch ((Ar(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Pe(t), null;
      case 1:
        return Pe(t), null;
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          zl(ht),
          Ot(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (Vn(t)
              ? Ul(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ol !== null && (jc(ol), (ol = null)))),
          Pe(t),
          null
        );
      case 26:
        return (
          (l = t.memoizedState),
          e === null
            ? (Ul(t),
              l !== null ? (Pe(t), ld(t, l)) : (Pe(t), (t.flags &= -16777217)))
            : l
              ? l !== e.memoizedState
                ? (Ul(t), Pe(t), ld(t, l))
                : (Pe(t), (t.flags &= -16777217))
              : (e.memoizedProps !== a && Ul(t), Pe(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        Xa(t), (l = Rt.current);
        var n = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== a && Ul(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(f(166));
            return Pe(t), null;
          }
          (e = Zt.current),
            Vn(t) ? go(t) : ((e = Nd(n, a, l)), (t.stateNode = e), Ul(t));
        }
        return Pe(t), null;
      case 5:
        if ((Xa(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Ul(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(f(166));
            return Pe(t), null;
          }
          if (((e = Zt.current), Vn(t))) go(t);
          else {
            switch (((n = ji(Rt.current)), e)) {
              case 1:
                e = n.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                e = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    e = n.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    e = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l,
                    );
                    break;
                  case "script":
                    (e = n.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof a.is == "string"
                        ? n.createElement("select", { is: a.is })
                        : n.createElement("select")),
                      a.multiple
                        ? (e.multiple = !0)
                        : a.size && (e.size = a.size);
                    break;
                  default:
                    e =
                      typeof a.is == "string"
                        ? n.createElement(l, { is: a.is })
                        : n.createElement(l);
                }
            }
            (e[G] = t), (e[V] = a);
            e: for (n = t.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                (n.child.return = n), (n = n.child);
                continue;
              }
              if (n === t) break e;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === t) break e;
                n = n.return;
              }
              (n.sibling.return = n.return), (n = n.sibling);
            }
            t.stateNode = e;
            e: switch ((St(e, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!a.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Ul(t);
          }
        }
        return Pe(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && Ul(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(f(166));
          if (((e = Rt.current), Vn(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (n = At),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (e[G] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Md(e.nodeValue, l)
              )),
              e || Ta(t);
          } else (e = ji(e).createTextNode(a)), (e[G] = t), (t.stateNode = e);
        }
        return Pe(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = Vn(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(f(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(f(317));
              n[G] = t;
            } else
              Zn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Pe(t), (n = !1);
          } else ol !== null && (jc(ol), (ol = null)), (n = !0);
          if (!n) return t.flags & 256 ? (Tl(t), t) : (Tl(t), null);
        }
        if ((Tl(t), (t.flags & 128) !== 0)) return (t.lanes = l), t;
        if (
          ((l = a !== null), (e = e !== null && e.memoizedState !== null), l)
        ) {
          (a = t.child),
            (n = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (n = a.alternate.memoizedState.cachePool.pool);
          var u = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (u = a.memoizedState.cachePool.pool),
            u !== n && (a.flags |= 2048);
        }
        return (
          l !== e && l && (t.child.flags |= 8192),
          xi(t, t.updateQueue),
          Pe(t),
          null
        );
      case 4:
        return Ot(), e === null && Vc(t.stateNode.containerInfo), Pe(t), null;
      case 10:
        return zl(t.type), Pe(t), null;
      case 19:
        if ((tt(dt), (n = t.memoizedState), n === null)) return Pe(t), null;
        if (((a = (t.flags & 128) !== 0), (u = n.rendering), u === null))
          if (a) su(n, !1);
          else {
            if (at !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = ui(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      su(n, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      xi(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;

                  )
                    ed(l, e), (l = l.sibling);
                  return Ge(dt, (dt.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null &&
              mt() > Ti &&
              ((t.flags |= 128), (a = !0), su(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = ui(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                xi(t, e),
                su(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !u.alternate &&
                  !Oe)
              )
                return Pe(t), null;
            } else
              2 * mt() - n.renderingStartTime > Ti &&
                l !== 536870912 &&
                ((t.flags |= 128), (a = !0), su(n, !1), (t.lanes = 4194304));
          n.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = n.last),
              e !== null ? (e.sibling = u) : (t.child = u),
              (n.last = u));
        }
        return n.tail !== null
          ? ((t = n.tail),
            (n.rendering = t),
            (n.tail = t.sibling),
            (n.renderingStartTime = mt()),
            (t.sibling = null),
            (e = dt.current),
            Ge(dt, a ? (e & 1) | 2 : e & 1),
            t)
          : (Pe(t), null);
      case 22:
      case 23:
        return (
          Tl(t),
          Nr(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Pe(t),
          (l = t.updateQueue),
          l !== null && xi(t, l.retryQueue),
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
          e !== null && tt(Ra),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          zl(ht),
          Pe(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function gm(e, t) {
    switch ((Ar(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          zl(ht),
          Ot(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Xa(t), null;
      case 13:
        if (
          (Tl(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(f(340));
          Zn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return tt(dt), null;
      case 4:
        return Ot(), null;
      case 10:
        return zl(t.type), null;
      case 22:
      case 23:
        return (
          Tl(t),
          Nr(),
          e !== null && tt(Ra),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return zl(ht), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ad(e, t) {
    switch ((Ar(t), t.tag)) {
      case 3:
        zl(ht), Ot();
        break;
      case 26:
      case 27:
      case 5:
        Xa(t);
        break;
      case 4:
        Ot();
        break;
      case 13:
        Tl(t);
        break;
      case 19:
        tt(dt);
        break;
      case 10:
        zl(t.type);
        break;
      case 22:
      case 23:
        Tl(t), Nr(), e !== null && tt(Ra);
        break;
      case 24:
        zl(ht);
    }
  }
  var pm = {
      getCacheForType: function (e) {
        var t = Tt(ht),
          l = t.data.get(e);
        return l === void 0 && ((l = e()), t.data.set(e, l)), l;
      },
    },
    bm = typeof WeakMap == "function" ? WeakMap : Map,
    Ie = 0,
    Xe = null,
    Se = null,
    ze = 0,
    Qe = 0,
    Xt = null,
    Nl = !1,
    yn = !1,
    Mc = !1,
    jl = 0,
    at = 0,
    Il = 0,
    wa = 0,
    zc = 0,
    ll = 0,
    gn = 0,
    du = null,
    gl = null,
    Ac = !1,
    _c = 0,
    Ti = 1 / 0,
    Di = null,
    ea = null,
    Ri = !1,
    Ca = null,
    hu = 0,
    Oc = 0,
    Uc = null,
    mu = 0,
    Nc = null;
  function Qt() {
    if ((Ie & 2) !== 0 && ze !== 0) return ze & -ze;
    if (Z.T !== null) {
      var e = cn;
      return e !== 0 ? e : qc();
    }
    return Q();
  }
  function nd() {
    ll === 0 && (ll = (ze & 536870912) === 0 || Oe ? ma() : 536870912);
    var e = Pt.current;
    return e !== null && (e.flags |= 32), ll;
  }
  function _t(e, t, l) {
    ((e === Xe && Qe === 2) || e.cancelPendingCommit !== null) &&
      (pn(e, 0), wl(e, ze, ll, !1)),
      ya(e, l),
      ((Ie & 2) === 0 || e !== Xe) &&
        (e === Xe &&
          ((Ie & 2) === 0 && (wa |= l), at === 4 && wl(e, ze, ll, !1)),
        pl(e));
  }
  function ud(e, t, l) {
    if ((Ie & 6) !== 0) throw Error(f(327));
    var a = (!l && (t & 60) === 0 && (t & e.expiredLanes) === 0) || ha(e, t),
      n = a ? xm(e, t) : Hc(e, t, !0),
      u = a;
    do {
      if (n === 0) {
        yn && !a && wl(e, t, 0, !1);
        break;
      } else if (n === 6) wl(e, t, 0, !Nl);
      else {
        if (((l = e.current.alternate), u && !Sm(l))) {
          (n = Hc(e, t, !1)), (u = !1);
          continue;
        }
        if (n === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var c = 0;
          else
            (c = e.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            t = c;
            e: {
              var s = e;
              n = du;
              var h = s.current.memoizedState.isDehydrated;
              if ((h && (pn(s, c).flags |= 256), (c = Hc(s, c, !1)), c !== 2)) {
                if (Mc && !h) {
                  (s.errorRecoveryDisabledLanes |= u), (wa |= u), (n = 4);
                  break e;
                }
                (u = gl), (gl = n), u !== null && jc(u);
              }
              n = c;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          pn(e, 0), wl(e, t, 0, !0);
          break;
        }
        e: {
          switch (((a = e), n)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((t & 4194176) === t) {
                wl(a, t, ll, !Nl);
                break e;
              }
              break;
            case 2:
              gl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if (
            ((a.finishedWork = l),
            (a.finishedLanes = t),
            (t & 62914560) === t && ((u = _c + 300 - mt()), 10 < u))
          ) {
            if ((wl(a, t, ll, !Nl), da(a, 0) !== 0)) break e;
            a.timeoutHandle = _d(
              id.bind(null, a, l, gl, Di, Ac, t, ll, wa, gn, Nl, 2, -0, 0),
              u,
            );
            break e;
          }
          id(a, l, gl, Di, Ac, t, ll, wa, gn, Nl, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    pl(e);
  }
  function jc(e) {
    gl === null ? (gl = e) : gl.push.apply(gl, e);
  }
  function id(e, t, l, a, n, u, c, s, h, E, N, H, A) {
    var U = t.subtreeFlags;
    if (
      (U & 8192 || (U & 16785408) === 16785408) &&
      ((Su = { stylesheets: null, count: 0, unsuspend: tv }),
      Fs(t),
      (t = av()),
      t !== null)
    ) {
      (e.cancelPendingCommit = t(hd.bind(null, e, l, a, n, c, s, h, 1, H, A))),
        wl(e, u, c, !E);
      return;
    }
    hd(e, l, a, n, c, s, h, N, H, A);
  }
  function Sm(e) {
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
            if (!Yt(u(), n)) return !1;
          } catch (c) {
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
  function wl(e, t, l, a) {
    (t &= ~zc),
      (t &= ~wa),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes);
    for (var n = t; 0 < n; ) {
      var u = 31 - Mt(n),
        c = 1 << u;
      (a[u] = -1), (n &= ~c);
    }
    l !== 0 && x(e, l, t);
  }
  function Mi() {
    return (Ie & 6) === 0 ? (vu(0), !1) : !0;
  }
  function wc() {
    if (Se !== null) {
      if (Qe === 0) var e = Se.return;
      else (e = Se), (Ml = Oa = null), qr(e), (un = null), (Wn = 0), (e = Se);
      for (; e !== null; ) ad(e.alternate, e), (e = e.return);
      Se = null;
    }
  }
  function pn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var l = e.timeoutHandle;
    l !== -1 && ((e.timeoutHandle = -1), Ym(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      wc(),
      (Xe = e),
      (Se = l = Pl(e.current, null)),
      (ze = t),
      (Qe = 0),
      (Xt = null),
      (Nl = !1),
      (yn = ha(e, t)),
      (Mc = !1),
      (gn = ll = zc = wa = Il = at = 0),
      (gl = du = null),
      (Ac = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - Mt(a),
          u = 1 << n;
        (t |= e[n]), (a &= ~u);
      }
    return (jl = t), Fu(), l;
  }
  function rd(e, t) {
    (ge = null),
      (Z.H = yl),
      t === Jn
        ? ((t = xo()), (Qe = 3))
        : t === bo
          ? ((t = xo()), (Qe = 4))
          : (Qe =
              t === Ss
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (Xt = t),
      Se === null && ((at = 1), yi(e, Wt(t, e.current)));
  }
  function cd() {
    var e = Z.H;
    return (Z.H = yl), e === null ? yl : e;
  }
  function fd() {
    var e = Z.A;
    return (Z.A = pm), e;
  }
  function Cc() {
    (at = 4),
      Nl || ((ze & 4194176) !== ze && Pt.current !== null) || (yn = !0),
      ((Il & 134217727) === 0 && (wa & 134217727) === 0) ||
        Xe === null ||
        wl(Xe, ze, ll, !1);
  }
  function Hc(e, t, l) {
    var a = Ie;
    Ie |= 2;
    var n = cd(),
      u = fd();
    (Xe !== e || ze !== t) && ((Di = null), pn(e, t)), (t = !1);
    var c = at;
    e: do
      try {
        if (Qe !== 0 && Se !== null) {
          var s = Se,
            h = Xt;
          switch (Qe) {
            case 8:
              wc(), (c = 6);
              break e;
            case 3:
            case 2:
            case 6:
              Pt.current === null && (t = !0);
              var E = Qe;
              if (((Qe = 0), (Xt = null), bn(e, s, h, E), l && yn)) {
                c = 0;
                break e;
              }
              break;
            default:
              (E = Qe), (Qe = 0), (Xt = null), bn(e, s, h, E);
          }
        }
        Em(), (c = at);
        break;
      } catch (N) {
        rd(e, N);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Ml = Oa = null),
      (Ie = a),
      (Z.H = n),
      (Z.A = u),
      Se === null && ((Xe = null), (ze = 0), Fu()),
      c
    );
  }
  function Em() {
    for (; Se !== null; ) od(Se);
  }
  function xm(e, t) {
    var l = Ie;
    Ie |= 2;
    var a = cd(),
      n = fd();
    Xe !== e || ze !== t
      ? ((Di = null), (Ti = mt() + 500), pn(e, t))
      : (yn = ha(e, t));
    e: do
      try {
        if (Qe !== 0 && Se !== null) {
          t = Se;
          var u = Xt;
          t: switch (Qe) {
            case 1:
              (Qe = 0), (Xt = null), bn(e, t, u, 1);
              break;
            case 2:
              if (So(u)) {
                (Qe = 0), (Xt = null), sd(t);
                break;
              }
              (t = function () {
                Qe === 2 && Xe === e && (Qe = 7), pl(e);
              }),
                u.then(t, t);
              break e;
            case 3:
              Qe = 7;
              break e;
            case 4:
              Qe = 5;
              break e;
            case 7:
              So(u)
                ? ((Qe = 0), (Xt = null), sd(t))
                : ((Qe = 0), (Xt = null), bn(e, t, u, 7));
              break;
            case 5:
              var c = null;
              switch (Se.tag) {
                case 26:
                  c = Se.memoizedState;
                case 5:
                case 27:
                  var s = Se;
                  if (!c || qd(c)) {
                    (Qe = 0), (Xt = null);
                    var h = s.sibling;
                    if (h !== null) Se = h;
                    else {
                      var E = s.return;
                      E !== null ? ((Se = E), zi(E)) : (Se = null);
                    }
                    break t;
                  }
              }
              (Qe = 0), (Xt = null), bn(e, t, u, 5);
              break;
            case 6:
              (Qe = 0), (Xt = null), bn(e, t, u, 6);
              break;
            case 8:
              wc(), (at = 6);
              break e;
            default:
              throw Error(f(462));
          }
        }
        Tm();
        break;
      } catch (N) {
        rd(e, N);
      }
    while (!0);
    return (
      (Ml = Oa = null),
      (Z.H = a),
      (Z.A = n),
      (Ie = l),
      Se !== null ? 0 : ((Xe = null), (ze = 0), Fu(), at)
    );
  }
  function Tm() {
    for (; Se !== null && !ar(); ) od(Se);
  }
  function od(e) {
    var t = Ns(e.alternate, e, jl);
    (e.memoizedProps = e.pendingProps), t === null ? zi(e) : (Se = t);
  }
  function sd(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ms(l, t, t.pendingProps, t.type, void 0, ze);
        break;
      case 11:
        t = Ms(l, t, t.pendingProps, t.type.render, t.ref, ze);
        break;
      case 5:
        qr(t);
      default:
        ad(l, t), (t = Se = ed(t, jl)), (t = Ns(l, t, jl));
    }
    (e.memoizedProps = e.pendingProps), t === null ? zi(e) : (Se = t);
  }
  function bn(e, t, l, a) {
    (Ml = Oa = null), qr(t), (un = null), (Wn = 0);
    var n = t.return;
    try {
      if (sm(e, n, t, l, ze)) {
        (at = 1), yi(e, Wt(l, e.current)), (Se = null);
        return;
      }
    } catch (u) {
      if (n !== null) throw ((Se = n), u);
      (at = 1), yi(e, Wt(l, e.current)), (Se = null);
      return;
    }
    t.flags & 32768
      ? (Oe || a === 1
          ? (e = !0)
          : yn || (ze & 536870912) !== 0
            ? (e = !1)
            : ((Nl = e = !0),
              (a === 2 || a === 3 || a === 6) &&
                ((a = Pt.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        dd(t, e))
      : zi(t);
  }
  function zi(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        dd(t, Nl);
        return;
      }
      e = t.return;
      var l = ym(t.alternate, t, jl);
      if (l !== null) {
        Se = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Se = t;
        return;
      }
      Se = t = e;
    } while (t !== null);
    at === 0 && (at = 5);
  }
  function dd(e, t) {
    do {
      var l = gm(e.alternate, e);
      if (l !== null) {
        (l.flags &= 32767), (Se = l);
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Se = e;
        return;
      }
      Se = e = l;
    } while (e !== null);
    (at = 6), (Se = null);
  }
  function hd(e, t, l, a, n, u, c, s, h, E) {
    var N = Z.T,
      H = J.p;
    try {
      (J.p = 2), (Z.T = null), Dm(e, t, l, a, H, n, u, c, s, h, E);
    } finally {
      (Z.T = N), (J.p = H);
    }
  }
  function Dm(e, t, l, a, n, u, c, s) {
    do Sn();
    while (Ca !== null);
    if ((Ie & 6) !== 0) throw Error(f(327));
    var h = e.finishedWork;
    if (((a = e.finishedLanes), h === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), h === e.current))
      throw Error(f(177));
    (e.callbackNode = null),
      (e.callbackPriority = 0),
      (e.cancelPendingCommit = null);
    var E = h.lanes | h.childLanes;
    if (
      ((E |= Rr),
      p(e, a, E, u, c, s),
      e === Xe && ((Se = Xe = null), (ze = 0)),
      ((h.subtreeFlags & 10256) === 0 && (h.flags & 10256) === 0) ||
        Ri ||
        ((Ri = !0),
        (Oc = E),
        (Uc = l),
        Am(Bt, function () {
          return Sn(), null;
        })),
      (l = (h.flags & 15990) !== 0),
      (h.subtreeFlags & 15990) !== 0 || l
        ? ((l = Z.T),
          (Z.T = null),
          (u = J.p),
          (J.p = 2),
          (c = Ie),
          (Ie |= 4),
          hm(e, h),
          Js(h, e),
          k0(kc, e.containerInfo),
          (Yi = !!Jc),
          (kc = Jc = null),
          (e.current = h),
          Qs(e, h.alternate, h),
          nr(),
          (Ie = c),
          (J.p = u),
          (Z.T = l))
        : (e.current = h),
      Ri ? ((Ri = !1), (Ca = e), (hu = a)) : md(e, E),
      (E = e.pendingLanes),
      E === 0 && (ea = null),
      Bu(h.stateNode),
      pl(e),
      t !== null)
    )
      for (n = e.onRecoverableError, h = 0; h < t.length; h++)
        (E = t[h]), n(E.value, { componentStack: E.stack });
    return (
      (hu & 3) !== 0 && Sn(),
      (E = e.pendingLanes),
      (a & 4194218) !== 0 && (E & 42) !== 0
        ? e === Nc
          ? mu++
          : ((mu = 0), (Nc = e))
        : (mu = 0),
      vu(0),
      null
    );
  }
  function md(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), $n(t)));
  }
  function Sn() {
    if (Ca !== null) {
      var e = Ca,
        t = Oc;
      Oc = 0;
      var l = B(hu),
        a = Z.T,
        n = J.p;
      try {
        if (((J.p = 32 > l ? 32 : l), (Z.T = null), Ca === null)) var u = !1;
        else {
          (l = Uc), (Uc = null);
          var c = Ca,
            s = hu;
          if (((Ca = null), (hu = 0), (Ie & 6) !== 0)) throw Error(f(331));
          var h = Ie;
          if (
            ((Ie |= 4),
            Ps(c.current),
            Ws(c, c.current, s, l),
            (Ie = h),
            vu(0, !1),
            Et && typeof Et.onPostCommitFiberRoot == "function")
          )
            try {
              Et.onPostCommitFiberRoot(Ut, c);
            } catch (E) {}
          u = !0;
        }
        return u;
      } finally {
        (J.p = n), (Z.T = a), md(e, t);
      }
    }
    return !1;
  }
  function vd(e, t, l) {
    (t = Wt(l, t)),
      (t = ec(e.stateNode, t, 2)),
      (e = kl(e, t, 2)),
      e !== null && (ya(e, 2), pl(e));
  }
  function qe(e, t, l) {
    if (e.tag === 3) vd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          vd(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (ea === null || !ea.has(a)))
          ) {
            (e = Wt(l, e)),
              (l = ps(2)),
              (a = kl(t, l, 2)),
              a !== null && (bs(l, a, t, e), ya(a, 2), pl(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Bc(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new bm();
      var n = new Set();
      a.set(t, n);
    } else (n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n));
    n.has(l) ||
      ((Mc = !0), n.add(l), (e = Rm.bind(null, e, t, l)), t.then(e, e));
  }
  function Rm(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      Xe === e &&
        (ze & l) === l &&
        (at === 4 || (at === 3 && (ze & 62914560) === ze && 300 > mt() - _c)
          ? (Ie & 2) === 0 && pn(e, 0)
          : (zc |= l),
        gn === ze && (gn = 0)),
      pl(e);
  }
  function yd(e, t) {
    t === 0 && (t = va()), (e = ql(e, t)), e !== null && (ya(e, t), pl(e));
  }
  function Mm(e) {
    var t = e.memoizedState,
      l = 0;
    t !== null && (l = t.retryLane), yd(e, l);
  }
  function zm(e, t) {
    var l = 0;
    switch (e.tag) {
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
    a !== null && a.delete(t), yd(e, l);
  }
  function Am(e, t) {
    return On(e, t);
  }
  var Ai = null,
    En = null,
    Lc = !1,
    _i = !1,
    Yc = !1,
    Ha = 0;
  function pl(e) {
    e !== En &&
      e.next === null &&
      (En === null ? (Ai = En = e) : (En = En.next = e)),
      (_i = !0),
      Lc || ((Lc = !0), Om(_m));
  }
  function vu(e, t) {
    if (!Yc && _i) {
      Yc = !0;
      do
        for (var l = !1, a = Ai; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var c = a.suspendedLanes,
                s = a.pingedLanes;
              (u = (1 << (31 - Mt(42 | e) + 1)) - 1),
                (u &= n & ~(c & ~s)),
                (u = u & 201326677 ? (u & 201326677) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((l = !0), bd(a, u));
          } else
            (u = ze),
              (u = da(a, a === Xe ? u : 0)),
              (u & 3) === 0 || ha(a, u) || ((l = !0), bd(a, u));
          a = a.next;
        }
      while (l);
      Yc = !1;
    }
  }
  function _m() {
    _i = Lc = !1;
    var e = 0;
    Ha !== 0 && (Lm() && (e = Ha), (Ha = 0));
    for (var t = mt(), l = null, a = Ai; a !== null; ) {
      var n = a.next,
        u = gd(a, t);
      u === 0
        ? ((a.next = null),
          l === null ? (Ai = n) : (l.next = n),
          n === null && (En = l))
        : ((l = a), (e !== 0 || (u & 3) !== 0) && (_i = !0)),
        (a = n);
    }
    vu(e);
  }
  function gd(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;

    ) {
      var c = 31 - Mt(u),
        s = 1 << c,
        h = n[c];
      h === -1
        ? ((s & l) === 0 || (s & a) !== 0) && (n[c] = qu(s, t))
        : h <= t && (e.expiredLanes |= s),
        (u &= ~s);
    }
    if (
      ((t = Xe),
      (l = ze),
      (l = da(e, e === t ? l : 0)),
      (a = e.callbackNode),
      l === 0 || (e === t && Qe === 2) || e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Un(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || ha(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && Un(a), B(l))) {
        case 2:
        case 8:
          l = Va;
          break;
        case 32:
          l = Bt;
          break;
        case 268435456:
          l = jn;
          break;
        default:
          l = Bt;
      }
      return (
        (a = pd.bind(null, e)),
        (l = On(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && Un(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function pd(e, t) {
    var l = e.callbackNode;
    if (Sn() && e.callbackNode !== l) return null;
    var a = ze;
    return (
      (a = da(e, e === Xe ? a : 0)),
      a === 0
        ? null
        : (ud(e, a, t),
          gd(e, mt()),
          e.callbackNode != null && e.callbackNode === l
            ? pd.bind(null, e)
            : null)
    );
  }
  function bd(e, t) {
    if (Sn()) return null;
    ud(e, t, !0);
  }
  function Om(e) {
    qm(function () {
      (Ie & 6) !== 0 ? On(Nn, e) : e();
    });
  }
  function qc() {
    return Ha === 0 && (Ha = ma()), Ha;
  }
  function Sd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Qu("" + e);
  }
  function Ed(e, t) {
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
  function Um(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var u = Sd((n[V] || null).action),
        c = a.submitter;
      c &&
        ((t = (t = c[V] || null)
          ? Sd(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((u = t), (c = null)));
      var s = new Ju("action", "action", null, a, n);
      e.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Ha !== 0) {
                  var h = c ? Ed(n, c) : new FormData(n);
                  Wr(
                    l,
                    { pending: !0, data: h, method: n.method, action: u },
                    null,
                    h,
                  );
                }
              } else
                typeof u == "function" &&
                  (s.preventDefault(),
                  (h = c ? Ed(n, c) : new FormData(n)),
                  Wr(
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
  for (var Gc = 0; Gc < ho.length; Gc++) {
    var Xc = ho[Gc],
      Nm = Xc.toLowerCase(),
      jm = Xc[0].toUpperCase() + Xc.slice(1);
    fl(Nm, "on" + jm);
  }
  fl(ro, "onAnimationEnd"),
    fl(co, "onAnimationIteration"),
    fl(fo, "onAnimationStart"),
    fl("dblclick", "onDoubleClick"),
    fl("focusin", "onFocus"),
    fl("focusout", "onBlur"),
    fl(F0, "onTransitionRun"),
    fl($0, "onTransitionStart"),
    fl(P0, "onTransitionCancel"),
    fl(oo, "onTransitionEnd"),
    rl("onMouseEnter", ["mouseout", "mouseover"]),
    rl("onMouseLeave", ["mouseout", "mouseover"]),
    rl("onPointerEnter", ["pointerout", "pointerover"]),
    rl("onPointerLeave", ["pointerout", "pointerover"]),
    zt(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    zt(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    zt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    zt(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    zt(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    zt(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var yu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    wm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(yu),
    );
  function xd(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var s = a[c],
              h = s.instance,
              E = s.currentTarget;
            if (((s = s.listener), h !== u && n.isPropagationStopped()))
              break e;
            (u = s), (n.currentTarget = E);
            try {
              u(n);
            } catch (N) {
              vi(N);
            }
            (n.currentTarget = null), (u = h);
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((s = a[c]),
              (h = s.instance),
              (E = s.currentTarget),
              (s = s.listener),
              h !== u && n.isPropagationStopped())
            )
              break e;
            (u = s), (n.currentTarget = E);
            try {
              u(n);
            } catch (N) {
              vi(N);
            }
            (n.currentTarget = null), (u = h);
          }
      }
    }
  }
  function De(e, t) {
    var l = t[ee];
    l === void 0 && (l = t[ee] = new Set());
    var a = e + "__bubble";
    l.has(a) || (Td(t, e, 2, !1), l.add(a));
  }
  function Qc(e, t, l) {
    var a = 0;
    t && (a |= 4), Td(l, e, a, t);
  }
  var Oi = "_reactListening" + Math.random().toString(36).slice(2);
  function Vc(e) {
    if (!e[Oi]) {
      (e[Oi] = !0),
        Ja.forEach(function (l) {
          l !== "selectionchange" && (wm.has(l) || Qc(l, !1, e), Qc(l, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Oi] || ((t[Oi] = !0), Qc("selectionchange", !1, t));
    }
  }
  function Td(e, t, l, a) {
    switch (Kd(t)) {
      case 2:
        var n = iv;
        break;
      case 8:
        n = rv;
        break;
      default:
        n = af;
    }
    (l = n.bind(null, t, l, e)),
      (n = void 0),
      !dr ||
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
  function Zc(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n || (s.nodeType === 8 && s.parentNode === n)) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var h = c.tag;
              if (
                (h === 3 || h === 4) &&
                ((h = c.stateNode.containerInfo),
                h === n || (h.nodeType === 8 && h.parentNode === n))
              )
                return;
              c = c.return;
            }
          for (; s !== null; ) {
            if (((c = we(s)), c === null)) return;
            if (((h = c.tag), h === 5 || h === 6 || h === 26 || h === 27)) {
              a = u = c;
              continue e;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    Bf(function () {
      var E = u,
        N = or(l),
        H = [];
      e: {
        var A = so.get(e);
        if (A !== void 0) {
          var U = Ju,
            ae = e;
          switch (e) {
            case "keypress":
              if (Zu(l) === 0) break e;
            case "keydown":
            case "keyup":
              U = z0;
              break;
            case "focusin":
              (ae = "focus"), (U = yr);
              break;
            case "focusout":
              (ae = "blur"), (U = yr);
              break;
            case "beforeblur":
            case "afterblur":
              U = yr;
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
              U = qf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = v0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = O0;
              break;
            case ro:
            case co:
            case fo:
              U = p0;
              break;
            case oo:
              U = N0;
              break;
            case "scroll":
            case "scrollend":
              U = h0;
              break;
            case "wheel":
              U = w0;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = S0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = Xf;
              break;
            case "toggle":
            case "beforetoggle":
              U = H0;
          }
          var me = (t & 4) !== 0,
            nt = !me && (e === "scroll" || e === "scrollend"),
            T = me ? (A !== null ? A + "Capture" : null) : A;
          me = [];
          for (var S = E, R; S !== null; ) {
            var w = S;
            if (
              ((R = w.stateNode),
              (w = w.tag),
              (w !== 5 && w !== 26 && w !== 27) ||
                R === null ||
                T === null ||
                ((w = Cn(S, T)), w != null && me.push(gu(S, w, R))),
              nt)
            )
              break;
            S = S.return;
          }
          0 < me.length &&
            ((A = new U(A, ae, null, l, N)),
            H.push({ event: A, listeners: me }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((A = e === "mouseover" || e === "pointerover"),
            (U = e === "mouseout" || e === "pointerout"),
            A &&
              l !== fr &&
              (ae = l.relatedTarget || l.fromElement) &&
              (we(ae) || ae[k]))
          )
            break e;
          if (
            (U || A) &&
            ((A =
              N.window === N
                ? N
                : (A = N.ownerDocument)
                  ? A.defaultView || A.parentWindow
                  : window),
            U
              ? ((ae = l.relatedTarget || l.toElement),
                (U = E),
                (ae = ae ? we(ae) : null),
                ae !== null &&
                  ((nt = $(ae)),
                  (me = ae.tag),
                  ae !== nt || (me !== 5 && me !== 27 && me !== 6)) &&
                  (ae = null))
              : ((U = null), (ae = E)),
            U !== ae)
          ) {
            if (
              ((me = qf),
              (w = "onMouseLeave"),
              (T = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((me = Xf),
                (w = "onPointerLeave"),
                (T = "onPointerEnter"),
                (S = "pointer")),
              (nt = U == null ? A : il(U)),
              (R = ae == null ? A : il(ae)),
              (A = new me(w, S + "leave", U, l, N)),
              (A.target = nt),
              (A.relatedTarget = R),
              (w = null),
              we(N) === E &&
                ((me = new me(T, S + "enter", ae, l, N)),
                (me.target = R),
                (me.relatedTarget = nt),
                (w = me)),
              (nt = w),
              U && ae)
            )
              t: {
                for (me = U, T = ae, S = 0, R = me; R; R = xn(R)) S++;
                for (R = 0, w = T; w; w = xn(w)) R++;
                for (; 0 < S - R; ) (me = xn(me)), S--;
                for (; 0 < R - S; ) (T = xn(T)), R--;
                for (; S--; ) {
                  if (me === T || (T !== null && me === T.alternate)) break t;
                  (me = xn(me)), (T = xn(T));
                }
                me = null;
              }
            else me = null;
            U !== null && Dd(H, A, U, me, !1),
              ae !== null && nt !== null && Dd(H, nt, ae, me, !0);
          }
        }
        e: {
          if (
            ((A = E ? il(E) : window),
            (U = A.nodeName && A.nodeName.toLowerCase()),
            U === "select" || (U === "input" && A.type === "file"))
          )
            var P = Ff;
          else if (kf(A))
            if ($f) P = K0;
            else {
              P = V0;
              var be = Q0;
            }
          else
            (U = A.nodeName),
              !U ||
              U.toLowerCase() !== "input" ||
              (A.type !== "checkbox" && A.type !== "radio")
                ? E && cr(E.elementType) && (P = Ff)
                : (P = Z0);
          if (P && (P = P(e, E))) {
            Wf(H, P, l, N);
            break e;
          }
          be && be(e, A, E),
            e === "focusout" &&
              E &&
              A.type === "number" &&
              E.memoizedProps.value != null &&
              rr(A, "number", A.value);
        }
        switch (((be = E ? il(E) : window), e)) {
          case "focusin":
            (kf(be) || be.contentEditable === "true") &&
              ((Ia = be), (xr = E), (Qn = null));
            break;
          case "focusout":
            Qn = xr = Ia = null;
            break;
          case "mousedown":
            Tr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Tr = !1), uo(H, l, N);
            break;
          case "selectionchange":
            if (W0) break;
          case "keydown":
          case "keyup":
            uo(H, l, N);
        }
        var ie;
        if (pr)
          e: {
            switch (e) {
              case "compositionstart":
                var oe = "onCompositionStart";
                break e;
              case "compositionend":
                oe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                oe = "onCompositionUpdate";
                break e;
            }
            oe = void 0;
          }
        else
          Pa
            ? Kf(e, l) && (oe = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (oe = "onCompositionStart");
        oe &&
          (Qf &&
            l.locale !== "ko" &&
            (Pa || oe !== "onCompositionStart"
              ? oe === "onCompositionEnd" && Pa && (ie = Lf())
              : ((Yl = N),
                (hr = "value" in Yl ? Yl.value : Yl.textContent),
                (Pa = !0))),
          (be = Ui(E, oe)),
          0 < be.length &&
            ((oe = new Gf(oe, e, null, l, N)),
            H.push({ event: oe, listeners: be }),
            ie
              ? (oe.data = ie)
              : ((ie = Jf(l)), ie !== null && (oe.data = ie)))),
          (ie = L0 ? Y0(e, l) : q0(e, l)) &&
            ((oe = Ui(E, "onBeforeInput")),
            0 < oe.length &&
              ((be = new Gf("onBeforeInput", "beforeinput", null, l, N)),
              H.push({ event: be, listeners: oe }),
              (be.data = ie))),
          Um(H, e, E, l, N);
      }
      xd(H, t);
    });
  }
  function gu(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function Ui(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e,
        u = n.stateNode;
      (n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Cn(e, l)),
          n != null && a.unshift(gu(e, n, u)),
          (n = Cn(e, t)),
          n != null && a.push(gu(e, n, u))),
        (e = e.return);
    }
    return a;
  }
  function xn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Dd(e, t, l, a, n) {
    for (var u = t._reactName, c = []; l !== null && l !== a; ) {
      var s = l,
        h = s.alternate,
        E = s.stateNode;
      if (((s = s.tag), h !== null && h === a)) break;
      (s !== 5 && s !== 26 && s !== 27) ||
        E === null ||
        ((h = E),
        n
          ? ((E = Cn(l, u)), E != null && c.unshift(gu(l, E, h)))
          : n || ((E = Cn(l, u)), E != null && c.push(gu(l, E, h)))),
        (l = l.return);
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var Cm = /\r\n?/g,
    Hm = /\u0000|\uFFFD/g;
  function Rd(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Cm,
        `
`,
      )
      .replace(Hm, "");
  }
  function Md(e, t) {
    return (t = Rd(t)), Rd(e) === t;
  }
  function Ni() {}
  function Ye(e, t, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || Wa(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            Wa(e, "" + a);
        break;
      case "className":
        cl(e, "class", a);
        break;
      case "tabIndex":
        cl(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        cl(e, l, a);
        break;
      case "style":
        Cf(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          cl(e, "data", a);
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
        (a = Qu("" + a)), e.setAttribute(l, a);
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
              ? (t !== "input" && Ye(e, t, "name", n.name, n, null),
                Ye(e, t, "formEncType", n.formEncType, n, null),
                Ye(e, t, "formMethod", n.formMethod, n, null),
                Ye(e, t, "formTarget", n.formTarget, n, null))
              : (Ye(e, t, "encType", n.encType, n, null),
                Ye(e, t, "method", n.method, n, null),
                Ye(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        (a = Qu("" + a)), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = Ni);
        break;
      case "onScroll":
        a != null && De("scroll", e);
        break;
      case "onScrollEnd":
        a != null && De("scrollend", e);
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
        (l = Qu("" + a)),
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
        De("beforetoggle", e), De("toggle", e), Ke(e, "popover", a);
        break;
      case "xlinkActuate":
        Kt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Kt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Kt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Kt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Kt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Kt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Ke(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = s0.get(l) || l), Ke(e, l, a));
    }
  }
  function Kc(e, t, l, a, n, u) {
    switch (l) {
      case "style":
        Cf(e, a, u);
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
          ? Wa(e, a)
          : (typeof a == "number" || typeof a == "bigint") && Wa(e, "" + a);
        break;
      case "onScroll":
        a != null && De("scroll", e);
        break;
      case "onScrollEnd":
        a != null && De("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Ni);
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
        if (!Ll.hasOwnProperty(l))
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
                : Ke(e, l, a);
          }
    }
  }
  function St(e, t, l) {
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
        De("error", e), De("load", e);
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var c = l[u];
            if (c != null)
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
                  Ye(e, t, u, c, l, null);
              }
          }
        n && Ye(e, t, "srcSet", l.srcSet, l, null),
          a && Ye(e, t, "src", l.src, l, null);
        return;
      case "input":
        De("invalid", e);
        var s = (u = c = n = null),
          h = null,
          E = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var N = l[a];
            if (N != null)
              switch (a) {
                case "name":
                  n = N;
                  break;
                case "type":
                  c = N;
                  break;
                case "checked":
                  h = N;
                  break;
                case "defaultChecked":
                  E = N;
                  break;
                case "value":
                  u = N;
                  break;
                case "defaultValue":
                  s = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null) throw Error(f(137, t));
                  break;
                default:
                  Ye(e, t, a, N, l, null);
              }
          }
        Uf(e, u, s, h, E, c, n, !1), Gu(e);
        return;
      case "select":
        De("invalid", e), (a = c = u = null);
        for (n in l)
          if (l.hasOwnProperty(n) && ((s = l[n]), s != null))
            switch (n) {
              case "value":
                u = s;
                break;
              case "defaultValue":
                c = s;
                break;
              case "multiple":
                a = s;
              default:
                Ye(e, t, n, s, l, null);
            }
        (t = u),
          (l = c),
          (e.multiple = !!a),
          t != null ? ka(e, !!a, t, !1) : l != null && ka(e, !!a, l, !0);
        return;
      case "textarea":
        De("invalid", e), (u = n = a = null);
        for (c in l)
          if (l.hasOwnProperty(c) && ((s = l[c]), s != null))
            switch (c) {
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
                Ye(e, t, c, s, l, null);
            }
        jf(e, a, n, u), Gu(e);
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
                Ye(e, t, h, a, l, null);
            }
        return;
      case "dialog":
        De("cancel", e), De("close", e);
        break;
      case "iframe":
      case "object":
        De("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < yu.length; a++) De(yu[a], e);
        break;
      case "image":
        De("error", e), De("load", e);
        break;
      case "details":
        De("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        De("error", e), De("load", e);
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
        for (E in l)
          if (l.hasOwnProperty(E) && ((a = l[E]), a != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, t));
              default:
                Ye(e, t, E, a, l, null);
            }
        return;
      default:
        if (cr(t)) {
          for (N in l)
            l.hasOwnProperty(N) &&
              ((a = l[N]), a !== void 0 && Kc(e, t, N, a, l, void 0));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && ((a = l[s]), a != null && Ye(e, t, s, a, l, null));
  }
  function Bm(e, t, l, a) {
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
          c = null,
          s = null,
          h = null,
          E = null,
          N = null;
        for (U in l) {
          var H = l[U];
          if (l.hasOwnProperty(U) && H != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = H;
              default:
                a.hasOwnProperty(U) || Ye(e, t, U, null, a, H);
            }
        }
        for (var A in a) {
          var U = a[A];
          if (((H = l[A]), a.hasOwnProperty(A) && (U != null || H != null)))
            switch (A) {
              case "type":
                u = U;
                break;
              case "name":
                n = U;
                break;
              case "checked":
                E = U;
                break;
              case "defaultChecked":
                N = U;
                break;
              case "value":
                c = U;
                break;
              case "defaultValue":
                s = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(f(137, t));
                break;
              default:
                U !== H && Ye(e, t, A, U, a, H);
            }
        }
        ir(e, c, s, h, E, N, u, n);
        return;
      case "select":
        U = c = s = A = null;
        for (u in l)
          if (((h = l[u]), l.hasOwnProperty(u) && h != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                U = h;
              default:
                a.hasOwnProperty(u) || Ye(e, t, u, null, a, h);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (h = l[n]),
            a.hasOwnProperty(n) && (u != null || h != null))
          )
            switch (n) {
              case "value":
                A = u;
                break;
              case "defaultValue":
                s = u;
                break;
              case "multiple":
                c = u;
              default:
                u !== h && Ye(e, t, n, u, a, h);
            }
        (t = s),
          (l = c),
          (a = U),
          A != null
            ? ka(e, !!l, A, !1)
            : !!a != !!l &&
              (t != null ? ka(e, !!l, t, !0) : ka(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        U = A = null;
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
                Ye(e, t, s, null, a, n);
            }
        for (c in a)
          if (
            ((n = a[c]),
            (u = l[c]),
            a.hasOwnProperty(c) && (n != null || u != null))
          )
            switch (c) {
              case "value":
                A = n;
                break;
              case "defaultValue":
                U = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && Ye(e, t, c, n, a, u);
            }
        Nf(e, A, U);
        return;
      case "option":
        for (var ae in l)
          if (
            ((A = l[ae]),
            l.hasOwnProperty(ae) && A != null && !a.hasOwnProperty(ae))
          )
            switch (ae) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ye(e, t, ae, null, a, A);
            }
        for (h in a)
          if (
            ((A = a[h]),
            (U = l[h]),
            a.hasOwnProperty(h) && A !== U && (A != null || U != null))
          )
            switch (h) {
              case "selected":
                e.selected =
                  A && typeof A != "function" && typeof A != "symbol";
                break;
              default:
                Ye(e, t, h, A, a, U);
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
        for (var me in l)
          (A = l[me]),
            l.hasOwnProperty(me) &&
              A != null &&
              !a.hasOwnProperty(me) &&
              Ye(e, t, me, null, a, A);
        for (E in a)
          if (
            ((A = a[E]),
            (U = l[E]),
            a.hasOwnProperty(E) && A !== U && (A != null || U != null))
          )
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null) throw Error(f(137, t));
                break;
              default:
                Ye(e, t, E, A, a, U);
            }
        return;
      default:
        if (cr(t)) {
          for (var nt in l)
            (A = l[nt]),
              l.hasOwnProperty(nt) &&
                A !== void 0 &&
                !a.hasOwnProperty(nt) &&
                Kc(e, t, nt, void 0, a, A);
          for (N in a)
            (A = a[N]),
              (U = l[N]),
              !a.hasOwnProperty(N) ||
                A === U ||
                (A === void 0 && U === void 0) ||
                Kc(e, t, N, A, a, U);
          return;
        }
    }
    for (var T in l)
      (A = l[T]),
        l.hasOwnProperty(T) &&
          A != null &&
          !a.hasOwnProperty(T) &&
          Ye(e, t, T, null, a, A);
    for (H in a)
      (A = a[H]),
        (U = l[H]),
        !a.hasOwnProperty(H) ||
          A === U ||
          (A == null && U == null) ||
          Ye(e, t, H, A, a, U);
  }
  var Jc = null,
    kc = null;
  function ji(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function zd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ad(e, t) {
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
  function Wc(e, t) {
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
  var Fc = null;
  function Lm() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Fc
        ? !1
        : ((Fc = e), !0)
      : ((Fc = null), !1);
  }
  var _d = typeof setTimeout == "function" ? setTimeout : void 0,
    Ym = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Od = typeof Promise == "function" ? Promise : void 0,
    qm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Od != "undefined"
          ? function (e) {
              return Od.resolve(null).then(e).catch(Gm);
            }
          : _d;
  function Gm(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function $c(e, t) {
    var l = t,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((e.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === "/$")) {
          if (a === 0) {
            e.removeChild(n), Ru(t);
            return;
          }
          a--;
        } else (l !== "$" && l !== "$?" && l !== "$!") || a++;
      l = n;
    } while (l);
    Ru(t);
  }
  function Pc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Pc(l), Te(l);
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
  function Xm(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[_e])
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
                e.getAttribute("href") !== (n.href == null ? null : n.href) ||
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
      if (((e = dl(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Qm(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = dl(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function dl(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Ud(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (t === 0) return e;
          t--;
        } else l === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Nd(e, t, l) {
    switch (((t = ji(l)), e)) {
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
  var al = new Map(),
    jd = new Set();
  function wi(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.ownerDocument;
  }
  var Cl = J.d;
  J.d = { f: Vm, r: Zm, D: Km, C: Jm, L: km, m: Wm, X: $m, S: Fm, M: Pm };
  function Vm() {
    var e = Cl.f(),
      t = Mi();
    return e || t;
  }
  function Zm(e) {
    var t = Lt(e);
    t !== null && t.tag === 5 && t.type === "form" ? is(t) : Cl.r(e);
  }
  var Tn = typeof document == "undefined" ? null : document;
  function wd(e, t, l) {
    var a = Tn;
    if (a && typeof t == "string" && t) {
      var n = Jt(t);
      (n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        jd.has(n) ||
          (jd.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement("link")),
            St(t, "link", e),
            He(t),
            a.head.appendChild(t)));
    }
  }
  function Km(e) {
    Cl.D(e), wd("dns-prefetch", e, null);
  }
  function Jm(e, t) {
    Cl.C(e, t), wd("preconnect", e, t);
  }
  function km(e, t, l) {
    Cl.L(e, t, l);
    var a = Tn;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + Jt(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + Jt(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + Jt(l.imageSizes) + '"]'))
        : (n += '[href="' + Jt(e) + '"]');
      var u = n;
      switch (t) {
        case "style":
          u = Dn(e);
          break;
        case "script":
          u = Rn(e);
      }
      al.has(u) ||
        ((e = F(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l,
        )),
        al.set(u, e),
        a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(pu(u))) ||
          (t === "script" && a.querySelector(bu(u))) ||
          ((t = a.createElement("link")),
          St(t, "link", e),
          He(t),
          a.head.appendChild(t)));
    }
  }
  function Wm(e, t) {
    Cl.m(e, t);
    var l = Tn;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + Jt(a) + '"][href="' + Jt(e) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Rn(e);
      }
      if (
        !al.has(u) &&
        ((e = F({ rel: "modulepreload", href: e }, t)),
        al.set(u, e),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(bu(u))) return;
        }
        (a = l.createElement("link")),
          St(a, "link", e),
          He(a),
          l.head.appendChild(a);
      }
    }
  }
  function Fm(e, t, l) {
    Cl.S(e, t, l);
    var a = Tn;
    if (a && e) {
      var n = xt(a).hoistableStyles,
        u = Dn(e);
      t = t || "default";
      var c = n.get(u);
      if (!c) {
        var s = { loading: 0, preload: null };
        if ((c = a.querySelector(pu(u)))) s.loading = 5;
        else {
          (e = F({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = al.get(u)) && Ic(e, l);
          var h = (c = a.createElement("link"));
          He(h),
            St(h, "link", e),
            (h._p = new Promise(function (E, N) {
              (h.onload = E), (h.onerror = N);
            })),
            h.addEventListener("load", function () {
              s.loading |= 1;
            }),
            h.addEventListener("error", function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            Ci(c, t, a);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: s }),
          n.set(u, c);
      }
    }
  }
  function $m(e, t) {
    Cl.X(e, t);
    var l = Tn;
    if (l && e) {
      var a = xt(l).hoistableScripts,
        n = Rn(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(bu(n))),
        u ||
          ((e = F({ src: e, async: !0 }, t)),
          (t = al.get(n)) && ef(e, t),
          (u = l.createElement("script")),
          He(u),
          St(u, "link", e),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Pm(e, t) {
    Cl.M(e, t);
    var l = Tn;
    if (l && e) {
      var a = xt(l).hoistableScripts,
        n = Rn(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(bu(n))),
        u ||
          ((e = F({ src: e, async: !0, type: "module" }, t)),
          (t = al.get(n)) && ef(e, t),
          (u = l.createElement("script")),
          He(u),
          St(u, "link", e),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Cd(e, t, l, a) {
    var n = (n = Rt.current) ? wi(n) : null;
    if (!n) throw Error(f(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = Dn(l.href)),
            (l = xt(n).hoistableStyles),
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
          e = Dn(l.href);
          var u = xt(n).hoistableStyles,
            c = u.get(e);
          if (
            (c ||
              ((n = n.ownerDocument || n),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, c),
              (u = n.querySelector(pu(e))) &&
                !u._p &&
                ((c.instance = u), (c.state.loading = 5)),
              al.has(e) ||
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
                al.set(e, l),
                u || Im(n, e, l, c.state))),
            t && a === null)
          )
            throw Error(f(528, ""));
          return c;
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
            ? ((t = Rn(l)),
              (l = xt(n).hoistableScripts),
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
  function Dn(e) {
    return 'href="' + Jt(e) + '"';
  }
  function pu(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Hd(e) {
    return F({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Im(e, t, l, a) {
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
        St(t, "link", l),
        He(t),
        e.head.appendChild(t));
  }
  function Rn(e) {
    return '[src="' + Jt(e) + '"]';
  }
  function bu(e) {
    return "script[async]" + e;
  }
  function Bd(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + Jt(l.href) + '"]');
          if (a) return (t.instance = a), He(a), a;
          var n = F({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            He(a),
            St(a, "style", n),
            Ci(a, l.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          n = Dn(l.href);
          var u = e.querySelector(pu(n));
          if (u) return (t.state.loading |= 4), (t.instance = u), He(u), u;
          (a = Hd(l)),
            (n = al.get(n)) && Ic(a, n),
            (u = (e.ownerDocument || e).createElement("link")),
            He(u);
          var c = u;
          return (
            (c._p = new Promise(function (s, h) {
              (c.onload = s), (c.onerror = h);
            })),
            St(u, "link", a),
            (t.state.loading |= 4),
            Ci(u, l.precedence, e),
            (t.instance = u)
          );
        case "script":
          return (
            (u = Rn(l.src)),
            (n = e.querySelector(bu(u)))
              ? ((t.instance = n), He(n), n)
              : ((a = l),
                (n = al.get(u)) && ((a = F({}, l)), ef(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement("script")),
                He(n),
                St(n, "link", a),
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
        ((a = t.instance), (t.state.loading |= 4), Ci(a, l.precedence, e));
    return t.instance;
  }
  function Ci(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        c = 0;
      c < a.length;
      c++
    ) {
      var s = a[c];
      if (s.dataset.precedence === t) u = s;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function Ic(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function ef(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Hi = null;
  function Ld(e, t, l) {
    if (Hi === null) {
      var a = new Map(),
        n = (Hi = new Map());
      n.set(l, a);
    } else (n = Hi), (a = n.get(l)), a || ((a = new Map()), n.set(l, a));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[_e] ||
          u[G] ||
          (e === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = u.getAttribute(t) || "";
        c = e + c;
        var s = a.get(c);
        s ? s.push(u) : a.set(c, [u]);
      }
    }
    return a;
  }
  function Yd(e, t, l) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null,
      );
  }
  function ev(e, t, l) {
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
  function qd(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Su = null;
  function tv() {}
  function lv(e, t, l) {
    if (Su === null) throw Error(f(475));
    var a = Su;
    if (
      t.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var n = Dn(l.href),
          u = e.querySelector(pu(n));
        if (u) {
          (e = u._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (a.count++, (a = Bi.bind(a)), e.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = u),
            He(u);
          return;
        }
        (u = e.ownerDocument || e),
          (l = Hd(l)),
          (n = al.get(n)) && Ic(l, n),
          (u = u.createElement("link")),
          He(u);
        var c = u;
        (c._p = new Promise(function (s, h) {
          (c.onload = s), (c.onerror = h);
        })),
          St(u, "link", l),
          (t.instance = u);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = Bi.bind(a)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function av() {
    if (Su === null) throw Error(f(475));
    var e = Su;
    return (
      e.stylesheets && e.count === 0 && tf(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var l = setTimeout(function () {
              if ((e.stylesheets && tf(e, e.stylesheets), e.unsuspend)) {
                var a = e.unsuspend;
                (e.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function Bi() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) tf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Li = null;
  function tf(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Li = new Map()),
        t.forEach(nv, e),
        (Li = null),
        Bi.call(e));
  }
  function nv(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Li.get(e);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), Li.set(e, l);
        for (
          var n = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var c = n[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (l.set(c.dataset.precedence, c), (a = c));
        }
        a && l.set(null, a);
      }
      (n = t.instance),
        (c = n.getAttribute("data-precedence")),
        (u = l.get(c) || a),
        u === a && l.set(null, n),
        l.set(c, n),
        this.count++,
        (a = Bi.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Eu = {
    $$typeof: Y,
    Provider: null,
    Consumer: null,
    _currentValue: he,
    _currentValue2: he,
    _threadCount: 0,
  };
  function uv(e, t, l, a, n, u, c, s) {
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
      (this.expirationTimes = wn(-1)),
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
      (this.entanglements = wn(0)),
      (this.hiddenUpdates = wn(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map());
  }
  function Gd(e, t, l, a, n, u, c, s, h, E, N, H) {
    return (
      (e = new uv(e, t, l, c, s, h, E, H)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = tl(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = jr()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: t }),
      hc(u),
      e
    );
  }
  function Xd(e) {
    return e ? ((e = ln), e) : ln;
  }
  function Qd(e, t, l, a, n, u) {
    (n = Xd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = Jl(t)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = kl(e, a, t)),
      l !== null && (_t(l, e, t), nu(l, e, t));
  }
  function Vd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function lf(e, t) {
    Vd(e, t), (e = e.alternate) && Vd(e, t);
  }
  function Zd(e) {
    if (e.tag === 13) {
      var t = ql(e, 67108864);
      t !== null && _t(t, e, 67108864), lf(e, 67108864);
    }
  }
  var Yi = !0;
  function iv(e, t, l, a) {
    var n = Z.T;
    Z.T = null;
    var u = J.p;
    try {
      (J.p = 2), af(e, t, l, a);
    } finally {
      (J.p = u), (Z.T = n);
    }
  }
  function rv(e, t, l, a) {
    var n = Z.T;
    Z.T = null;
    var u = J.p;
    try {
      (J.p = 8), af(e, t, l, a);
    } finally {
      (J.p = u), (Z.T = n);
    }
  }
  function af(e, t, l, a) {
    if (Yi) {
      var n = nf(a);
      if (n === null) Zc(e, t, a, qi, l), Jd(e, a);
      else if (fv(n, e, t, l, a)) a.stopPropagation();
      else if ((Jd(e, a), t & 4 && -1 < cv.indexOf(e))) {
        for (; n !== null; ) {
          var u = Lt(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var c = bl(u.pendingLanes);
                  if (c !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; c; ) {
                      var h = 1 << (31 - Mt(c));
                      (s.entanglements[1] |= h), (c &= ~h);
                    }
                    pl(u), (Ie & 6) === 0 && ((Ti = mt() + 500), vu(0));
                  }
                }
                break;
              case 13:
                (s = ql(u, 2)), s !== null && _t(s, u, 2), Mi(), lf(u, 2);
            }
          if (((u = nf(a)), u === null && Zc(e, t, a, qi, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else Zc(e, t, a, null, l);
    }
  }
  function nf(e) {
    return (e = or(e)), uf(e);
  }
  var qi = null;
  function uf(e) {
    if (((qi = null), (e = we(e)), e !== null)) {
      var t = $(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = Ne(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (qi = e), null;
  }
  function Kd(e) {
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
        switch (sa()) {
          case Nn:
            return 2;
          case Va:
            return 8;
          case Bt:
          case nl:
            return 32;
          case jn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var rf = !1,
    ta = null,
    la = null,
    aa = null,
    xu = new Map(),
    Tu = new Map(),
    na = [],
    cv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Jd(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ta = null;
        break;
      case "dragenter":
      case "dragleave":
        la = null;
        break;
      case "mouseover":
      case "mouseout":
        aa = null;
        break;
      case "pointerover":
      case "pointerout":
        xu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tu.delete(t.pointerId);
    }
  }
  function Du(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = Lt(t)), t !== null && Zd(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function fv(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return (ta = Du(ta, e, t, l, a, n)), !0;
      case "dragenter":
        return (la = Du(la, e, t, l, a, n)), !0;
      case "mouseover":
        return (aa = Du(aa, e, t, l, a, n)), !0;
      case "pointerover":
        var u = n.pointerId;
        return xu.set(u, Du(xu.get(u) || null, e, t, l, a, n)), !0;
      case "gotpointercapture":
        return (
          (u = n.pointerId), Tu.set(u, Du(Tu.get(u) || null, e, t, l, a, n)), !0
        );
    }
    return !1;
  }
  function kd(e) {
    var t = we(e.target);
    if (t !== null) {
      var l = $(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = Ne(l)), t !== null)) {
            (e.blockedOn = t),
              ue(e.priority, function () {
                if (l.tag === 13) {
                  var a = Qt(),
                    n = ql(l, a);
                  n !== null && _t(n, l, a), lf(l, a);
                }
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
  function Gi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = nf(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        (fr = a), l.target.dispatchEvent(a), (fr = null);
      } else return (t = Lt(l)), t !== null && Zd(t), (e.blockedOn = l), !1;
      t.shift();
    }
    return !0;
  }
  function Wd(e, t, l) {
    Gi(e) && l.delete(t);
  }
  function ov() {
    (rf = !1),
      ta !== null && Gi(ta) && (ta = null),
      la !== null && Gi(la) && (la = null),
      aa !== null && Gi(aa) && (aa = null),
      xu.forEach(Wd),
      Tu.forEach(Wd);
  }
  function Xi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      rf ||
        ((rf = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, ov)));
  }
  var Qi = null;
  function Fd(e) {
    Qi !== e &&
      ((Qi = e),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        Qi === e && (Qi = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != "function") {
            if (uf(a || l) === null) continue;
            break;
          }
          var u = Lt(l);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Wr(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Ru(e) {
    function t(h) {
      return Xi(h, e);
    }
    ta !== null && Xi(ta, e),
      la !== null && Xi(la, e),
      aa !== null && Xi(aa, e),
      xu.forEach(t),
      Tu.forEach(t);
    for (var l = 0; l < na.length; l++) {
      var a = na[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < na.length && ((l = na[0]), l.blockedOn === null); )
      kd(l), l.blockedOn === null && na.shift();
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          c = n[V] || null;
        if (typeof u == "function") c || Fd(l);
        else if (c) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (c = u[V] || null))) s = c.formAction;
            else if (uf(n) !== null) continue;
          } else s = c.action;
          typeof s == "function" ? (l[a + 1] = s) : (l.splice(a, 3), (a -= 3)),
            Fd(l);
        }
      }
  }
  function cf(e) {
    this._internalRoot = e;
  }
  (Vi.prototype.render = cf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(f(409));
      var l = t.current,
        a = Qt();
      Qd(l, a, e, t, null, null);
    }),
    (Vi.prototype.unmount = cf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          e.tag === 0 && Sn(),
            Qd(e.current, 2, null, e, null, null),
            Mi(),
            (t[k] = null);
        }
      });
  function Vi(e) {
    this._internalRoot = e;
  }
  Vi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Q();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < na.length && t !== 0 && t < na[l].priority; l++);
      na.splice(l, 0, e), l === 0 && kd(e);
    }
  };
  var $d = r.version;
  if ($d !== "19.0.0") throw Error(f(527, $d, "19.0.0"));
  J.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(f(188))
        : ((e = Object.keys(e).join(",")), Error(f(268, e)));
    return (
      (e = L(t)),
      (e = e !== null ? le(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var sv = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Z,
    findFiberByHostInstance: we,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var Zi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zi.isDisabled && Zi.supportsFiber)
      try {
        (Ut = Zi.inject(sv)), (Et = Zi);
      } catch (e) {}
  }
  return (
    (Au.createRoot = function (e, t) {
      if (!d(e)) throw Error(f(299));
      var l = !1,
        a = "",
        n = ms,
        u = vs,
        c = ys,
        s = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (s = t.unstable_transitionCallbacks)),
        (t = Gd(e, 1, !1, null, null, l, a, n, u, c, s, null)),
        (e[k] = t.current),
        Vc(e.nodeType === 8 ? e.parentNode : e),
        new cf(t)
      );
    }),
    (Au.hydrateRoot = function (e, t, l) {
      if (!d(e)) throw Error(f(299));
      var a = !1,
        n = "",
        u = ms,
        c = vs,
        s = ys,
        h = null,
        E = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (c = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (h = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (E = l.formState)),
        (t = Gd(e, 1, !0, t, l != null ? l : null, a, n, u, c, s, h, E)),
        (t.context = Xd(null)),
        (l = t.current),
        (a = Qt()),
        (n = Jl(a)),
        (n.callback = null),
        kl(l, n, a),
        (t.current.lanes = a),
        ya(t, a),
        pl(t),
        (e[k] = t.current),
        Vc(e),
        new Vi(t)
      );
    }),
    (Au.version = "19.0.0"),
    Au
  );
}
var sh;
function zv() {
  if (sh) return hf.exports;
  sh = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), (hf.exports = Mv()), hf.exports;
}
var Av = zv();
const _v = Tf(Av);
var qh = Yh();
const Ov = Tf(qh),
  Uv = Bh({ __proto__: null, default: Ov }, [qh]);
/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fe() {
  return (
    (Fe = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var f in o)
              Object.prototype.hasOwnProperty.call(o, f) && (i[f] = o[f]);
          }
          return i;
        }),
    Fe.apply(this, arguments)
  );
}
var st;
(function (i) {
  (i.Pop = "POP"), (i.Push = "PUSH"), (i.Replace = "REPLACE");
})(st || (st = {}));
const dh = "popstate";
function Nv(i) {
  i === void 0 && (i = {});
  function r(f, d) {
    let { pathname: v, search: y, hash: D } = f.location;
    return ju(
      "",
      { pathname: v, search: y, hash: D },
      (d.state && d.state.usr) || null,
      (d.state && d.state.key) || "default",
    );
  }
  function o(f, d) {
    return typeof d == "string" ? d : Cu(d);
  }
  return wv(r, o, null, i);
}
function Re(i, r) {
  if (i === !1 || i === null || typeof i == "undefined") throw new Error(r);
}
function qa(i, r) {
  if (!i) {
    typeof console != "undefined" && console.warn(r);
    try {
      throw new Error(r);
    } catch (o) {}
  }
}
function jv() {
  return Math.random().toString(36).substr(2, 8);
}
function hh(i, r) {
  return { usr: i.state, key: i.key, idx: r };
}
function ju(i, r, o, f) {
  return (
    o === void 0 && (o = null),
    Fe(
      { pathname: typeof i == "string" ? i : i.pathname, search: "", hash: "" },
      typeof r == "string" ? fa(r) : r,
      { state: o, key: (r && r.key) || f || jv() },
    )
  );
}
function Cu(i) {
  let { pathname: r = "/", search: o = "", hash: f = "" } = i;
  return (
    o && o !== "?" && (r += o.charAt(0) === "?" ? o : "?" + o),
    f && f !== "#" && (r += f.charAt(0) === "#" ? f : "#" + f),
    r
  );
}
function fa(i) {
  let r = {};
  if (i) {
    let o = i.indexOf("#");
    o >= 0 && ((r.hash = i.substr(o)), (i = i.substr(0, o)));
    let f = i.indexOf("?");
    f >= 0 && ((r.search = i.substr(f)), (i = i.substr(0, f))),
      i && (r.pathname = i);
  }
  return r;
}
function wv(i, r, o, f) {
  f === void 0 && (f = {});
  let { window: d = document.defaultView, v5Compat: v = !1 } = f,
    y = d.history,
    D = st.Pop,
    g = null,
    m = M();
  m == null && ((m = 0), y.replaceState(Fe({}, y.state, { idx: m }), ""));
  function M() {
    return (y.state || { idx: null }).idx;
  }
  function z() {
    D = st.Pop;
    let I = M(),
      pe = I == null ? null : I - m;
    (m = I), g && g({ action: D, location: K.location, delta: pe });
  }
  function j(I, pe) {
    D = st.Push;
    let te = ju(K.location, I, pe);
    m = M() + 1;
    let Ae = hh(te, m),
      Ve = K.createHref(te);
    try {
      y.pushState(Ae, "", Ve);
    } catch (fe) {
      if (fe instanceof DOMException && fe.name === "DataCloneError") throw fe;
      d.location.assign(Ve);
    }
    v && g && g({ action: D, location: K.location, delta: 1 });
  }
  function Y(I, pe) {
    D = st.Replace;
    let te = ju(K.location, I, pe);
    m = M();
    let Ae = hh(te, m),
      Ve = K.createHref(te);
    y.replaceState(Ae, "", Ve),
      v && g && g({ action: D, location: K.location, delta: 0 });
  }
  function W(I) {
    let pe = d.location.origin !== "null" ? d.location.origin : d.location.href,
      te = typeof I == "string" ? I : Cu(I);
    return (
      (te = te.replace(/ $/, "%20")),
      Re(
        pe,
        "No window.location.(origin|href) available to create URL for href: " +
          te,
      ),
      new URL(te, pe)
    );
  }
  let K = {
    get action() {
      return D;
    },
    get location() {
      return i(d, y);
    },
    listen(I) {
      if (g) throw new Error("A history only accepts one active listener");
      return (
        d.addEventListener(dh, z),
        (g = I),
        () => {
          d.removeEventListener(dh, z), (g = null);
        }
      );
    },
    createHref(I) {
      return r(d, I);
    },
    createURL: W,
    encodeLocation(I) {
      let pe = W(I);
      return { pathname: pe.pathname, search: pe.search, hash: pe.hash };
    },
    push: j,
    replace: Y,
    go(I) {
      return y.go(I);
    },
  };
  return K;
}
var Be;
(function (i) {
  (i.data = "data"),
    (i.deferred = "deferred"),
    (i.redirect = "redirect"),
    (i.error = "error");
})(Be || (Be = {}));
const Cv = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Hv(i) {
  return i.index === !0;
}
function Wi(i, r, o, f) {
  return (
    o === void 0 && (o = []),
    f === void 0 && (f = {}),
    i.map((d, v) => {
      let y = [...o, String(v)],
        D = typeof d.id == "string" ? d.id : y.join("-");
      if (
        (Re(
          d.index !== !0 || !d.children,
          "Cannot specify children on an index route",
        ),
        Re(
          !f[D],
          'Found a route id collision on id "' +
            D +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        Hv(d))
      ) {
        let g = Fe({}, d, r(d), { id: D });
        return (f[D] = g), g;
      } else {
        let g = Fe({}, d, r(d), { id: D, children: void 0 });
        return (
          (f[D] = g), d.children && (g.children = Wi(d.children, r, y, f)), g
        );
      }
    })
  );
}
function Ba(i, r, o) {
  return o === void 0 && (o = "/"), ki(i, r, o, !1);
}
function ki(i, r, o, f) {
  let d = typeof r == "string" ? fa(r) : r,
    v = Hu(d.pathname || "/", o);
  if (v == null) return null;
  let y = Gh(i);
  Lv(y);
  let D = null;
  for (let g = 0; D == null && g < y.length; ++g) {
    let m = Wv(v);
    D = Jv(y[g], m, f);
  }
  return D;
}
function Bv(i, r) {
  let { route: o, pathname: f, params: d } = i;
  return { id: o.id, pathname: f, params: d, data: r[o.id], handle: o.handle };
}
function Gh(i, r, o, f) {
  r === void 0 && (r = []), o === void 0 && (o = []), f === void 0 && (f = "");
  let d = (v, y, D) => {
    let g = {
      relativePath: D === void 0 ? v.path || "" : D,
      caseSensitive: v.caseSensitive === !0,
      childrenIndex: y,
      route: v,
    };
    g.relativePath.startsWith("/") &&
      (Re(
        g.relativePath.startsWith(f),
        'Absolute route path "' +
          g.relativePath +
          '" nested under path ' +
          ('"' + f + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (g.relativePath = g.relativePath.slice(f.length)));
    let m = ca([f, g.relativePath]),
      M = o.concat(g);
    v.children &&
      v.children.length > 0 &&
      (Re(
        v.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + m + '".'),
      ),
      Gh(v.children, r, M, m)),
      !(v.path == null && !v.index) &&
        r.push({ path: m, score: Zv(m, v.index), routesMeta: M });
  };
  return (
    i.forEach((v, y) => {
      var D;
      if (v.path === "" || !((D = v.path) != null && D.includes("?"))) d(v, y);
      else for (let g of Xh(v.path)) d(v, y, g);
    }),
    r
  );
}
function Xh(i) {
  let r = i.split("/");
  if (r.length === 0) return [];
  let [o, ...f] = r,
    d = o.endsWith("?"),
    v = o.replace(/\?$/, "");
  if (f.length === 0) return d ? [v, ""] : [v];
  let y = Xh(f.join("/")),
    D = [];
  return (
    D.push(...y.map((g) => (g === "" ? v : [v, g].join("/")))),
    d && D.push(...y),
    D.map((g) => (i.startsWith("/") && g === "" ? "/" : g))
  );
}
function Lv(i) {
  i.sort((r, o) =>
    r.score !== o.score
      ? o.score - r.score
      : Kv(
          r.routesMeta.map((f) => f.childrenIndex),
          o.routesMeta.map((f) => f.childrenIndex),
        ),
  );
}
const Yv = /^:[\w-]+$/,
  qv = 3,
  Gv = 2,
  Xv = 1,
  Qv = 10,
  Vv = -2,
  mh = (i) => i === "*";
function Zv(i, r) {
  let o = i.split("/"),
    f = o.length;
  return (
    o.some(mh) && (f += Vv),
    r && (f += Gv),
    o
      .filter((d) => !mh(d))
      .reduce((d, v) => d + (Yv.test(v) ? qv : v === "" ? Xv : Qv), f)
  );
}
function Kv(i, r) {
  return i.length === r.length && i.slice(0, -1).every((f, d) => f === r[d])
    ? i[i.length - 1] - r[r.length - 1]
    : 0;
}
function Jv(i, r, o) {
  o === void 0 && (o = !1);
  let { routesMeta: f } = i,
    d = {},
    v = "/",
    y = [];
  for (let D = 0; D < f.length; ++D) {
    let g = f[D],
      m = D === f.length - 1,
      M = v === "/" ? r : r.slice(v.length) || "/",
      z = vh(
        { path: g.relativePath, caseSensitive: g.caseSensitive, end: m },
        M,
      ),
      j = g.route;
    if (
      (!z &&
        m &&
        o &&
        !f[f.length - 1].route.index &&
        (z = vh(
          { path: g.relativePath, caseSensitive: g.caseSensitive, end: !1 },
          M,
        )),
      !z)
    )
      return null;
    Object.assign(d, z.params),
      y.push({
        params: d,
        pathname: ca([v, z.pathname]),
        pathnameBase: Iv(ca([v, z.pathnameBase])),
        route: j,
      }),
      z.pathnameBase !== "/" && (v = ca([v, z.pathnameBase]));
  }
  return y;
}
function vh(i, r) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [o, f] = kv(i.path, i.caseSensitive, i.end),
    d = r.match(o);
  if (!d) return null;
  let v = d[0],
    y = v.replace(/(.)\/+$/, "$1"),
    D = d.slice(1);
  return {
    params: f.reduce((m, M, z) => {
      let { paramName: j, isOptional: Y } = M;
      if (j === "*") {
        let K = D[z] || "";
        y = v.slice(0, v.length - K.length).replace(/(.)\/+$/, "$1");
      }
      const W = D[z];
      return (
        Y && !W ? (m[j] = void 0) : (m[j] = (W || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: v,
    pathnameBase: y,
    pattern: i,
  };
}
function kv(i, r, o) {
  r === void 0 && (r = !1),
    o === void 0 && (o = !0),
    qa(
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
          (y, D, g) => (
            f.push({ paramName: D, isOptional: g != null }),
            g ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    i.endsWith("*")
      ? (f.push({ paramName: "*" }),
        (d += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : o
        ? (d += "\\/*$")
        : i !== "" && i !== "/" && (d += "(?:(?=\\/|$))"),
    [new RegExp(d, r ? void 0 : "i"), f]
  );
}
function Wv(i) {
  try {
    return i
      .split("/")
      .map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
      .join("/");
  } catch (r) {
    return (
      qa(
        !1,
        'The URL path "' +
          i +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + r + ")."),
      ),
      i
    );
  }
}
function Hu(i, r) {
  if (r === "/") return i;
  if (!i.toLowerCase().startsWith(r.toLowerCase())) return null;
  let o = r.endsWith("/") ? r.length - 1 : r.length,
    f = i.charAt(o);
  return f && f !== "/" ? null : i.slice(o) || "/";
}
const Fv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  $v = (i) => Fv.test(i);
function Pv(i, r) {
  r === void 0 && (r = "/");
  let {
      pathname: o,
      search: f = "",
      hash: d = "",
    } = typeof i == "string" ? fa(i) : i,
    v;
  if (o)
    if ($v(o)) v = o;
    else {
      if (o.includes("//")) {
        let y = o;
        (o = o.replace(/\/\/+/g, "/")),
          qa(
            !1,
            "Pathnames cannot have embedded double slashes - normalizing " +
              (y + " -> " + o),
          );
      }
      o.startsWith("/") ? (v = yh(o.substring(1), "/")) : (v = yh(o, r));
    }
  else v = r;
  return { pathname: v, search: ey(f), hash: ty(d) };
}
function yh(i, r) {
  let o = r.replace(/\/+$/, "").split("/");
  return (
    i.split("/").forEach((d) => {
      d === ".." ? o.length > 1 && o.pop() : d !== "." && o.push(d);
    }),
    o.length > 1 ? o.join("/") : "/"
  );
}
function gf(i, r, o, f) {
  return (
    "Cannot include a '" +
    i +
    "' character in a manually specified " +
    ("`to." +
      r +
      "` field [" +
      JSON.stringify(f) +
      "].  Please separate it out to the ") +
    ("`to." + o + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Qh(i) {
  return i.filter(
    (r, o) => o === 0 || (r.route.path && r.route.path.length > 0),
  );
}
function Vh(i, r) {
  let o = Qh(i);
  return r
    ? o.map((f, d) => (d === o.length - 1 ? f.pathname : f.pathnameBase))
    : o.map((f) => f.pathnameBase);
}
function Zh(i, r, o, f) {
  f === void 0 && (f = !1);
  let d;
  typeof i == "string"
    ? (d = fa(i))
    : ((d = Fe({}, i)),
      Re(
        !d.pathname || !d.pathname.includes("?"),
        gf("?", "pathname", "search", d),
      ),
      Re(
        !d.pathname || !d.pathname.includes("#"),
        gf("#", "pathname", "hash", d),
      ),
      Re(!d.search || !d.search.includes("#"), gf("#", "search", "hash", d)));
  let v = i === "" || d.pathname === "",
    y = v ? "/" : d.pathname,
    D;
  if (y == null) D = o;
  else {
    let z = r.length - 1;
    if (!f && y.startsWith("..")) {
      let j = y.split("/");
      for (; j[0] === ".."; ) j.shift(), (z -= 1);
      d.pathname = j.join("/");
    }
    D = z >= 0 ? r[z] : "/";
  }
  let g = Pv(d, D),
    m = y && y !== "/" && y.endsWith("/"),
    M = (v || y === ".") && o.endsWith("/");
  return !g.pathname.endsWith("/") && (m || M) && (g.pathname += "/"), g;
}
const ca = (i) => i.join("/").replace(/\/\/+/g, "/"),
  Iv = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
  ey = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
  ty = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i);
class Fi {
  constructor(r, o, f, d) {
    d === void 0 && (d = !1),
      (this.status = r),
      (this.statusText = o || ""),
      (this.internal = d),
      f instanceof Error
        ? ((this.data = f.toString()), (this.error = f))
        : (this.data = f);
  }
}
function wu(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.internal == "boolean" &&
    "data" in i
  );
}
const Kh = ["post", "put", "patch", "delete"],
  ly = new Set(Kh),
  ay = ["get", ...Kh],
  ny = new Set(ay),
  uy = new Set([301, 302, 303, 307, 308]),
  iy = new Set([307, 308]),
  pf = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ry = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  _u = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Rf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  cy = (i) => ({ hasErrorBoundary: !!i.hasErrorBoundary }),
  Jh = "remix-router-transitions";
function fy(i) {
  const r = i.window
      ? i.window
      : typeof window != "undefined"
        ? window
        : void 0,
    o =
      typeof r != "undefined" &&
      typeof r.document != "undefined" &&
      typeof r.document.createElement != "undefined",
    f = !o;
  Re(
    i.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let d;
  if (i.mapRouteProperties) d = i.mapRouteProperties;
  else if (i.detectErrorBoundary) {
    let p = i.detectErrorBoundary;
    d = (x) => ({ hasErrorBoundary: p(x) });
  } else d = cy;
  let v = {},
    y = Wi(i.routes, d, void 0, v),
    D,
    g = i.basename || "/",
    m = i.dataStrategy || hy,
    M = i.patchRoutesOnNavigation,
    z = Fe(
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
    j = null,
    Y = new Set(),
    W = null,
    K = null,
    I = null,
    pe = i.hydrationData != null,
    te = Ba(y, i.history.location, g),
    Ae = !1,
    Ve = null;
  if (te == null && !M) {
    let p = Ht(404, { pathname: i.history.location.pathname }),
      { matches: x, route: _ } = zh(y);
    (te = x), (Ve = { [_.id]: p });
  }
  te &&
    !i.hydrationData &&
    ma(te, y, i.history.location.pathname).active &&
    (te = null);
  let fe;
  if (te)
    if (te.some((p) => p.route.lazy)) fe = !1;
    else if (!te.some((p) => p.route.loader)) fe = !0;
    else if (z.v7_partialHydration) {
      let p = i.hydrationData ? i.hydrationData.loaderData : null,
        x = i.hydrationData ? i.hydrationData.errors : null;
      if (x) {
        let _ = te.findIndex((B) => x[B.route.id] !== void 0);
        fe = te.slice(0, _ + 1).every((B) => !Ef(B.route, p, x));
      } else fe = te.every((_) => !Ef(_.route, p, x));
    } else fe = i.hydrationData != null;
  else if (((fe = !1), (te = []), z.v7_partialHydration)) {
    let p = ma(null, y, i.history.location.pathname);
    p.active && p.matches && ((Ae = !0), (te = p.matches));
  }
  let et,
    O = {
      historyAction: i.history.action,
      location: i.history.location,
      matches: te,
      initialized: fe,
      navigation: pf,
      restoreScrollPosition: i.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (i.hydrationData && i.hydrationData.loaderData) || {},
      actionData: (i.hydrationData && i.hydrationData.actionData) || null,
      errors: (i.hydrationData && i.hydrationData.errors) || Ve,
      fetchers: new Map(),
      blockers: new Map(),
    },
    ce = st.Pop,
    Z = !1,
    F,
    Ce = !1,
    je = new Map(),
    Je = null,
    ke = !1,
    We = !1,
    X = [],
    se = new Set(),
    $ = new Map(),
    Ne = 0,
    b = -1,
    L = new Map(),
    le = new Set(),
    ne = new Map(),
    J = new Map(),
    he = new Set(),
    de = new Map(),
    $e = new Map(),
    xe;
  function tt() {
    if (
      ((j = i.history.listen((p) => {
        let { action: x, location: _, delta: B } = p;
        if (xe) {
          xe(), (xe = void 0);
          return;
        }
        qa(
          $e.size === 0 || B != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let Q = Yu({
          currentLocation: O.location,
          nextLocation: _,
          historyAction: x,
        });
        if (Q && B != null) {
          let ue = new Promise((re) => {
            xe = re;
          });
          i.history.go(B * -1),
            Ka(Q, {
              state: "blocked",
              location: _,
              proceed() {
                Ka(Q, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: _,
                }),
                  ue.then(() => i.history.go(B));
              },
              reset() {
                let re = new Map(O.blockers);
                re.set(Q, _u), ut({ blockers: re });
              },
            });
          return;
        }
        return Ot(x, _);
      })),
      o)
    ) {
      zy(r, je);
      let p = () => Ay(r, je);
      r.addEventListener("pagehide", p),
        (Je = () => r.removeEventListener("pagehide", p));
    }
    return (
      O.initialized || Ot(st.Pop, O.location, { initialHydration: !0 }), et
    );
  }
  function Ge() {
    j && j(),
      Je && Je(),
      Y.clear(),
      F && F.abort(),
      O.fetchers.forEach((p, x) => Za(x)),
      O.blockers.forEach((p, x) => Lu(x));
  }
  function Zt(p) {
    return Y.add(p), () => Y.delete(p);
  }
  function ut(p, x) {
    x === void 0 && (x = {}), (O = Fe({}, O, p));
    let _ = [],
      B = [];
    z.v7_fetcherPersist &&
      O.fetchers.forEach((Q, ue) => {
        Q.state === "idle" && (he.has(ue) ? B.push(ue) : _.push(ue));
      }),
      he.forEach((Q) => {
        !O.fetchers.has(Q) && !$.has(Q) && B.push(Q);
      }),
      [...Y].forEach((Q) =>
        Q(O, {
          deletedFetchers: B,
          viewTransitionOpts: x.viewTransitionOpts,
          flushSync: x.flushSync === !0,
        }),
      ),
      z.v7_fetcherPersist
        ? (_.forEach((Q) => O.fetchers.delete(Q)), B.forEach((Q) => Za(Q)))
        : B.forEach((Q) => he.delete(Q));
  }
  function Rt(p, x, _) {
    var B, Q;
    let { flushSync: ue } = _ === void 0 ? {} : _,
      re =
        O.actionData != null &&
        O.navigation.formMethod != null &&
        hl(O.navigation.formMethod) &&
        O.navigation.state === "loading" &&
        ((B = p.state) == null ? void 0 : B._isRedirect) !== !0,
      G;
    x.actionData
      ? Object.keys(x.actionData).length > 0
        ? (G = x.actionData)
        : (G = null)
      : re
        ? (G = O.actionData)
        : (G = null);
    let V = x.loaderData
        ? Rh(O.loaderData, x.loaderData, x.matches || [], x.errors)
        : O.loaderData,
      k = O.blockers;
    k.size > 0 && ((k = new Map(k)), k.forEach((Ee, rt) => k.set(rt, _u)));
    let ee =
      Z === !0 ||
      (O.navigation.formMethod != null &&
        hl(O.navigation.formMethod) &&
        ((Q = p.state) == null ? void 0 : Q._isRedirect) !== !0);
    D && ((y = D), (D = void 0)),
      ke ||
        ce === st.Pop ||
        (ce === st.Push
          ? i.history.push(p, p.state)
          : ce === st.Replace && i.history.replace(p, p.state));
    let ve;
    if (ce === st.Pop) {
      let Ee = je.get(O.location.pathname);
      Ee && Ee.has(p.pathname)
        ? (ve = { currentLocation: O.location, nextLocation: p })
        : je.has(p.pathname) &&
          (ve = { currentLocation: p, nextLocation: O.location });
    } else if (Ce) {
      let Ee = je.get(O.location.pathname);
      Ee
        ? Ee.add(p.pathname)
        : ((Ee = new Set([p.pathname])), je.set(O.location.pathname, Ee)),
        (ve = { currentLocation: O.location, nextLocation: p });
    }
    ut(
      Fe({}, x, {
        actionData: G,
        loaderData: V,
        historyAction: ce,
        location: p,
        initialized: !0,
        navigation: pf,
        revalidation: "idle",
        restoreScrollPosition: qu(p, x.matches || O.matches),
        preventScrollReset: ee,
        blockers: k,
      }),
      { viewTransitionOpts: ve, flushSync: ue === !0 },
    ),
      (ce = st.Pop),
      (Z = !1),
      (Ce = !1),
      (ke = !1),
      (We = !1),
      (X = []);
  }
  async function oa(p, x) {
    if (typeof p == "number") {
      i.history.go(p);
      return;
    }
    let _ = Sf(
        O.location,
        O.matches,
        g,
        z.v7_prependBasename,
        p,
        z.v7_relativeSplatPath,
        x == null ? void 0 : x.fromRouteId,
        x == null ? void 0 : x.relative,
      ),
      {
        path: B,
        submission: Q,
        error: ue,
      } = gh(z.v7_normalizeFormMethod, !1, _, x),
      re = O.location,
      G = ju(O.location, B, x && x.state);
    G = Fe({}, G, i.history.encodeLocation(G));
    let V = x && x.replace != null ? x.replace : void 0,
      k = st.Push;
    V === !0
      ? (k = st.Replace)
      : V === !1 ||
        (Q != null &&
          hl(Q.formMethod) &&
          Q.formAction === O.location.pathname + O.location.search &&
          (k = st.Replace));
    let ee =
        x && "preventScrollReset" in x ? x.preventScrollReset === !0 : void 0,
      ve = (x && x.flushSync) === !0,
      Ee = Yu({ currentLocation: re, nextLocation: G, historyAction: k });
    if (Ee) {
      Ka(Ee, {
        state: "blocked",
        location: G,
        proceed() {
          Ka(Ee, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: G,
          }),
            oa(p, x);
        },
        reset() {
          let rt = new Map(O.blockers);
          rt.set(Ee, _u), ut({ blockers: rt });
        },
      });
      return;
    }
    return await Ot(k, G, {
      submission: Q,
      pendingError: ue,
      preventScrollReset: ee,
      replace: x && x.replace,
      enableViewTransition: x && x.viewTransition,
      flushSync: ve,
    });
  }
  function Ga() {
    if (
      (Va(),
      ut({ revalidation: "loading" }),
      O.navigation.state !== "submitting")
    ) {
      if (O.navigation.state === "idle") {
        Ot(O.historyAction, O.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Ot(ce || O.historyAction, O.navigation.location, {
        overrideNavigation: O.navigation,
        enableViewTransition: Ce === !0,
      });
    }
  }
  async function Ot(p, x, _) {
    F && F.abort(),
      (F = null),
      (ce = p),
      (ke = (_ && _.startUninterruptedRevalidation) === !0),
      ha(O.location, O.matches),
      (Z = (_ && _.preventScrollReset) === !0),
      (Ce = (_ && _.enableViewTransition) === !0);
    let B = D || y,
      Q = _ && _.overrideNavigation,
      ue =
        _ != null &&
        _.initialHydration &&
        O.matches &&
        O.matches.length > 0 &&
        !Ae
          ? O.matches
          : Ba(B, x, g),
      re = (_ && _.flushSync) === !0;
    if (
      ue &&
      O.initialized &&
      !We &&
      by(O.location, x) &&
      !(_ && _.submission && hl(_.submission.formMethod))
    ) {
      Rt(x, { matches: ue }, { flushSync: re });
      return;
    }
    let G = ma(ue, B, x.pathname);
    if ((G.active && G.matches && (ue = G.matches), !ue)) {
      let { error: _e, notFoundMatches: Te, route: we } = Hl(x.pathname);
      Rt(
        x,
        { matches: Te, loaderData: {}, errors: { [we.id]: _e } },
        { flushSync: re },
      );
      return;
    }
    F = new AbortController();
    let V = zn(i.history, x, F.signal, _ && _.submission),
      k;
    if (_ && _.pendingError)
      k = [La(ue).route.id, { type: Be.error, error: _.pendingError }];
    else if (_ && _.submission && hl(_.submission.formMethod)) {
      let _e = await _n(V, x, _.submission, ue, G.active, {
        replace: _.replace,
        flushSync: re,
      });
      if (_e.shortCircuited) return;
      if (_e.pendingActionResult) {
        let [Te, we] = _e.pendingActionResult;
        if (Vt(we) && wu(we.error) && we.error.status === 404) {
          (F = null),
            Rt(x, {
              matches: _e.matches,
              loaderData: {},
              errors: { [Te]: we.error },
            });
          return;
        }
      }
      (ue = _e.matches || ue),
        (k = _e.pendingActionResult),
        (Q = bf(x, _.submission)),
        (re = !1),
        (G.active = !1),
        (V = zn(i.history, V.url, V.signal));
    }
    let {
      shortCircuited: ee,
      matches: ve,
      loaderData: Ee,
      errors: rt,
    } = await Xa(
      V,
      x,
      ue,
      G.active,
      Q,
      _ && _.submission,
      _ && _.fetcherSubmission,
      _ && _.replace,
      _ && _.initialHydration === !0,
      re,
      k,
    );
    ee ||
      ((F = null),
      Rt(x, Fe({ matches: ve || ue }, Mh(k), { loaderData: Ee, errors: rt })));
  }
  async function _n(p, x, _, B, Q, ue) {
    ue === void 0 && (ue = {}), Va();
    let re = Ry(x, _);
    if ((ut({ navigation: re }, { flushSync: ue.flushSync === !0 }), Q)) {
      let k = await va(B, x.pathname, p.signal);
      if (k.type === "aborted") return { shortCircuited: !0 };
      if (k.type === "error") {
        let ee = La(k.partialMatches).route.id;
        return {
          matches: k.partialMatches,
          pendingActionResult: [ee, { type: Be.error, error: k.error }],
        };
      } else if (k.matches) B = k.matches;
      else {
        let { notFoundMatches: ee, error: ve, route: Ee } = Hl(x.pathname);
        return {
          matches: ee,
          pendingActionResult: [Ee.id, { type: Be.error, error: ve }],
        };
      }
    }
    let G,
      V = Nu(B, x);
    if (!V.route.action && !V.route.lazy)
      G = {
        type: Be.error,
        error: Ht(405, {
          method: p.method,
          pathname: x.pathname,
          routeId: V.route.id,
        }),
      };
    else if (
      ((G = (await sa("action", O, p, [V], B, null))[V.route.id]),
      p.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Ya(G)) {
      let k;
      return (
        ue && ue.replace != null
          ? (k = ue.replace)
          : (k =
              xh(G.response.headers.get("Location"), new URL(p.url), g) ===
              O.location.pathname + O.location.search),
        await mt(p, G, !0, { submission: _, replace: k }),
        { shortCircuited: !0 }
      );
    }
    if (ra(G)) throw Ht(400, { type: "defer-action" });
    if (Vt(G)) {
      let k = La(B, V.route.id);
      return (
        (ue && ue.replace) !== !0 && (ce = st.Push),
        { matches: B, pendingActionResult: [k.route.id, G] }
      );
    }
    return { matches: B, pendingActionResult: [V.route.id, G] };
  }
  async function Xa(p, x, _, B, Q, ue, re, G, V, k, ee) {
    let ve = Q || bf(x, ue),
      Ee = ue || re || _h(ve),
      rt = !ke && (!z.v7_partialHydration || !V);
    if (B) {
      if (rt) {
        let Ze = Qa(ee);
        ut(Fe({ navigation: ve }, Ze !== void 0 ? { actionData: Ze } : {}), {
          flushSync: k,
        });
      }
      let Me = await va(_, x.pathname, p.signal);
      if (Me.type === "aborted") return { shortCircuited: !0 };
      if (Me.type === "error") {
        let Ze = La(Me.partialMatches).route.id;
        return {
          matches: Me.partialMatches,
          loaderData: {},
          errors: { [Ze]: Me.error },
        };
      } else if (Me.matches) _ = Me.matches;
      else {
        let { error: Ze, notFoundMatches: Sl, route: ga } = Hl(x.pathname);
        return { matches: Sl, loaderData: {}, errors: { [ga.id]: Ze } };
      }
    }
    let _e = D || y,
      [Te, we] = bh(
        i.history,
        O,
        _,
        Ee,
        x,
        z.v7_partialHydration && V === !0,
        z.v7_skipActionErrorRevalidation,
        We,
        X,
        se,
        he,
        ne,
        le,
        _e,
        g,
        ee,
      );
    if (
      (Bl(
        (Me) =>
          !(_ && _.some((Ze) => Ze.route.id === Me)) ||
          (Te && Te.some((Ze) => Ze.route.id === Me)),
      ),
      (b = ++Ne),
      Te.length === 0 && we.length === 0)
    ) {
      let Me = Bu();
      return (
        Rt(
          x,
          Fe(
            {
              matches: _,
              loaderData: {},
              errors: ee && Vt(ee[1]) ? { [ee[0]]: ee[1].error } : null,
            },
            Mh(ee),
            Me ? { fetchers: new Map(O.fetchers) } : {},
          ),
          { flushSync: k },
        ),
        { shortCircuited: !0 }
      );
    }
    if (rt) {
      let Me = {};
      if (!B) {
        Me.navigation = ve;
        let Ze = Qa(ee);
        Ze !== void 0 && (Me.actionData = Ze);
      }
      we.length > 0 && (Me.fetchers = On(we)), ut(Me, { flushSync: k });
    }
    we.forEach((Me) => {
      Ut(Me.key), Me.controller && $.set(Me.key, Me.controller);
    });
    let Lt = () => we.forEach((Me) => Ut(Me.key));
    F && F.signal.addEventListener("abort", Lt);
    let { loaderResults: il, fetcherResults: xt } = await Nn(O, _, Te, we, p);
    if (p.signal.aborted) return { shortCircuited: !0 };
    F && F.signal.removeEventListener("abort", Lt),
      we.forEach((Me) => $.delete(Me.key));
    let He = Ji(il);
    if (He)
      return await mt(p, He.result, !0, { replace: G }), { shortCircuited: !0 };
    if (((He = Ji(xt)), He))
      return (
        le.add(He.key),
        await mt(p, He.result, !0, { replace: G }),
        { shortCircuited: !0 }
      );
    let { loaderData: Ja, errors: Ll } = Dh(O, _, il, ee, we, xt, de);
    de.forEach((Me, Ze) => {
      Me.subscribe((Sl) => {
        (Sl || Me.done) && de.delete(Ze);
      });
    }),
      z.v7_partialHydration && V && O.errors && (Ll = Fe({}, O.errors, Ll));
    let zt = Bu(),
      rl = ul(b),
      Nt = zt || rl || we.length > 0;
    return Fe(
      { matches: _, loaderData: Ja, errors: Ll },
      Nt ? { fetchers: new Map(O.fetchers) } : {},
    );
  }
  function Qa(p) {
    if (p && !Vt(p[1])) return { [p[0]]: p[1].data };
    if (O.actionData)
      return Object.keys(O.actionData).length === 0 ? null : O.actionData;
  }
  function On(p) {
    return (
      p.forEach((x) => {
        let _ = O.fetchers.get(x.key),
          B = Ou(void 0, _ ? _.data : void 0);
        O.fetchers.set(x.key, B);
      }),
      new Map(O.fetchers)
    );
  }
  function Un(p, x, _, B) {
    if (f)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    Ut(p);
    let Q = (B && B.flushSync) === !0,
      ue = D || y,
      re = Sf(
        O.location,
        O.matches,
        g,
        z.v7_prependBasename,
        _,
        z.v7_relativeSplatPath,
        x,
        B == null ? void 0 : B.relative,
      ),
      G = Ba(ue, re, g),
      V = ma(G, ue, re);
    if ((V.active && V.matches && (G = V.matches), !G)) {
      nl(p, x, Ht(404, { pathname: re }), { flushSync: Q });
      return;
    }
    let {
      path: k,
      submission: ee,
      error: ve,
    } = gh(z.v7_normalizeFormMethod, !0, re, B);
    if (ve) {
      nl(p, x, ve, { flushSync: Q });
      return;
    }
    let Ee = Nu(G, k),
      rt = (B && B.preventScrollReset) === !0;
    if (ee && hl(ee.formMethod)) {
      ar(p, x, k, Ee, G, V.active, Q, rt, ee);
      return;
    }
    ne.set(p, { routeId: x, path: k }), nr(p, x, k, Ee, G, V.active, Q, rt, ee);
  }
  async function ar(p, x, _, B, Q, ue, re, G, V) {
    Va(), ne.delete(p);
    function k(Ke) {
      if (!Ke.route.action && !Ke.route.lazy) {
        let cl = Ht(405, { method: V.formMethod, pathname: _, routeId: x });
        return nl(p, x, cl, { flushSync: re }), !0;
      }
      return !1;
    }
    if (!ue && k(B)) return;
    let ee = O.fetchers.get(p);
    Bt(p, My(V, ee), { flushSync: re });
    let ve = new AbortController(),
      Ee = zn(i.history, _, ve.signal, V);
    if (ue) {
      let Ke = await va(Q, new URL(Ee.url).pathname, Ee.signal, p);
      if (Ke.type === "aborted") return;
      if (Ke.type === "error") {
        nl(p, x, Ke.error, { flushSync: re });
        return;
      } else if (Ke.matches) {
        if (((Q = Ke.matches), (B = Nu(Q, _)), k(B))) return;
      } else {
        nl(p, x, Ht(404, { pathname: _ }), { flushSync: re });
        return;
      }
    }
    $.set(p, ve);
    let rt = Ne,
      Te = (await sa("action", O, Ee, [B], Q, p))[B.route.id];
    if (Ee.signal.aborted) {
      $.get(p) === ve && $.delete(p);
      return;
    }
    if (z.v7_fetcherPersist && he.has(p)) {
      if (Ya(Te) || Vt(Te)) {
        Bt(p, ia(void 0));
        return;
      }
    } else {
      if (Ya(Te))
        if (($.delete(p), b > rt)) {
          Bt(p, ia(void 0));
          return;
        } else
          return (
            le.add(p),
            Bt(p, Ou(V)),
            mt(Ee, Te, !1, { fetcherSubmission: V, preventScrollReset: G })
          );
      if (Vt(Te)) {
        nl(p, x, Te.error);
        return;
      }
    }
    if (ra(Te)) throw Ht(400, { type: "defer-action" });
    let we = O.navigation.location || O.location,
      Lt = zn(i.history, we, ve.signal),
      il = D || y,
      xt =
        O.navigation.state !== "idle"
          ? Ba(il, O.navigation.location, g)
          : O.matches;
    Re(xt, "Didn't find any matches after fetcher action");
    let He = ++Ne;
    L.set(p, He);
    let Ja = Ou(V, Te.data);
    O.fetchers.set(p, Ja);
    let [Ll, zt] = bh(
      i.history,
      O,
      xt,
      V,
      we,
      !1,
      z.v7_skipActionErrorRevalidation,
      We,
      X,
      se,
      he,
      ne,
      le,
      il,
      g,
      [B.route.id, Te],
    );
    zt
      .filter((Ke) => Ke.key !== p)
      .forEach((Ke) => {
        let cl = Ke.key,
          Kt = O.fetchers.get(cl),
          jt = Ou(void 0, Kt ? Kt.data : void 0);
        O.fetchers.set(cl, jt),
          Ut(cl),
          Ke.controller && $.set(cl, Ke.controller);
      }),
      ut({ fetchers: new Map(O.fetchers) });
    let rl = () => zt.forEach((Ke) => Ut(Ke.key));
    ve.signal.addEventListener("abort", rl);
    let { loaderResults: Nt, fetcherResults: Me } = await Nn(O, xt, Ll, zt, Lt);
    if (ve.signal.aborted) return;
    ve.signal.removeEventListener("abort", rl),
      L.delete(p),
      $.delete(p),
      zt.forEach((Ke) => $.delete(Ke.key));
    let Ze = Ji(Nt);
    if (Ze) return mt(Lt, Ze.result, !1, { preventScrollReset: G });
    if (((Ze = Ji(Me)), Ze))
      return le.add(Ze.key), mt(Lt, Ze.result, !1, { preventScrollReset: G });
    let { loaderData: Sl, errors: ga } = Dh(O, xt, Nt, void 0, zt, Me, de);
    if (O.fetchers.has(p)) {
      let Ke = ia(Te.data);
      O.fetchers.set(p, Ke);
    }
    ul(He),
      O.navigation.state === "loading" && He > b
        ? (Re(ce, "Expected pending action"),
          F && F.abort(),
          Rt(O.navigation.location, {
            matches: xt,
            loaderData: Sl,
            errors: ga,
            fetchers: new Map(O.fetchers),
          }))
        : (ut({
            errors: ga,
            loaderData: Rh(O.loaderData, Sl, xt, ga),
            fetchers: new Map(O.fetchers),
          }),
          (We = !1));
  }
  async function nr(p, x, _, B, Q, ue, re, G, V) {
    let k = O.fetchers.get(p);
    Bt(p, Ou(V, k ? k.data : void 0), { flushSync: re });
    let ee = new AbortController(),
      ve = zn(i.history, _, ee.signal);
    if (ue) {
      let Te = await va(Q, new URL(ve.url).pathname, ve.signal, p);
      if (Te.type === "aborted") return;
      if (Te.type === "error") {
        nl(p, x, Te.error, { flushSync: re });
        return;
      } else if (Te.matches) (Q = Te.matches), (B = Nu(Q, _));
      else {
        nl(p, x, Ht(404, { pathname: _ }), { flushSync: re });
        return;
      }
    }
    $.set(p, ee);
    let Ee = Ne,
      _e = (await sa("loader", O, ve, [B], Q, p))[B.route.id];
    if (
      (ra(_e) && (_e = (await Mf(_e, ve.signal, !0)) || _e),
      $.get(p) === ee && $.delete(p),
      !ve.signal.aborted)
    ) {
      if (he.has(p)) {
        Bt(p, ia(void 0));
        return;
      }
      if (Ya(_e))
        if (b > Ee) {
          Bt(p, ia(void 0));
          return;
        } else {
          le.add(p), await mt(ve, _e, !1, { preventScrollReset: G });
          return;
        }
      if (Vt(_e)) {
        nl(p, x, _e.error);
        return;
      }
      Re(!ra(_e), "Unhandled fetcher deferred data"), Bt(p, ia(_e.data));
    }
  }
  async function mt(p, x, _, B) {
    let {
      submission: Q,
      fetcherSubmission: ue,
      preventScrollReset: re,
      replace: G,
    } = B === void 0 ? {} : B;
    x.response.headers.has("X-Remix-Revalidate") && (We = !0);
    let V = x.response.headers.get("Location");
    Re(V, "Expected a Location header on the redirect Response"),
      (V = xh(V, new URL(p.url), g));
    let k = ju(O.location, V, { _isRedirect: !0 });
    if (o) {
      let Te = !1;
      if (x.response.headers.has("X-Remix-Reload-Document")) Te = !0;
      else if (Rf.test(V)) {
        const we = i.history.createURL(V);
        Te = we.origin !== r.location.origin || Hu(we.pathname, g) == null;
      }
      if (Te) {
        G ? r.location.replace(V) : r.location.assign(V);
        return;
      }
    }
    F = null;
    let ee =
        G === !0 || x.response.headers.has("X-Remix-Replace")
          ? st.Replace
          : st.Push,
      { formMethod: ve, formAction: Ee, formEncType: rt } = O.navigation;
    !Q && !ue && ve && Ee && rt && (Q = _h(O.navigation));
    let _e = Q || ue;
    if (iy.has(x.response.status) && _e && hl(_e.formMethod))
      await Ot(ee, k, {
        submission: Fe({}, _e, { formAction: V }),
        preventScrollReset: re || Z,
        enableViewTransition: _ ? Ce : void 0,
      });
    else {
      let Te = bf(k, Q);
      await Ot(ee, k, {
        overrideNavigation: Te,
        fetcherSubmission: ue,
        preventScrollReset: re || Z,
        enableViewTransition: _ ? Ce : void 0,
      });
    }
  }
  async function sa(p, x, _, B, Q, ue) {
    let re,
      G = {};
    try {
      re = await my(m, p, x, _, B, Q, ue, v, d);
    } catch (V) {
      return (
        B.forEach((k) => {
          G[k.route.id] = { type: Be.error, error: V };
        }),
        G
      );
    }
    for (let [V, k] of Object.entries(re))
      if (Sy(k)) {
        let ee = k.result;
        G[V] = {
          type: Be.redirect,
          response: gy(ee, _, V, Q, g, z.v7_relativeSplatPath),
        };
      } else G[V] = await yy(k);
    return G;
  }
  async function Nn(p, x, _, B, Q) {
    let ue = p.matches,
      re = sa("loader", p, Q, _, x, null),
      G = Promise.all(
        B.map(async (ee) => {
          if (ee.matches && ee.match && ee.controller) {
            let Ee = (
              await sa(
                "loader",
                p,
                zn(i.history, ee.path, ee.controller.signal),
                [ee.match],
                ee.matches,
                ee.key,
              )
            )[ee.match.route.id];
            return { [ee.key]: Ee };
          } else
            return Promise.resolve({
              [ee.key]: {
                type: Be.error,
                error: Ht(404, { pathname: ee.path }),
              },
            });
        }),
      ),
      V = await re,
      k = (await G).reduce((ee, ve) => Object.assign(ee, ve), {});
    return (
      await Promise.all([Ty(x, V, Q.signal, ue, p.loaderData), Dy(x, k, B)]),
      { loaderResults: V, fetcherResults: k }
    );
  }
  function Va() {
    (We = !0),
      X.push(...Bl()),
      ne.forEach((p, x) => {
        $.has(x) && se.add(x), Ut(x);
      });
  }
  function Bt(p, x, _) {
    _ === void 0 && (_ = {}),
      O.fetchers.set(p, x),
      ut(
        { fetchers: new Map(O.fetchers) },
        { flushSync: (_ && _.flushSync) === !0 },
      );
  }
  function nl(p, x, _, B) {
    B === void 0 && (B = {});
    let Q = La(O.matches, x);
    Za(p),
      ut(
        { errors: { [Q.route.id]: _ }, fetchers: new Map(O.fetchers) },
        { flushSync: (B && B.flushSync) === !0 },
      );
  }
  function jn(p) {
    return (
      J.set(p, (J.get(p) || 0) + 1),
      he.has(p) && he.delete(p),
      O.fetchers.get(p) || ry
    );
  }
  function Za(p) {
    let x = O.fetchers.get(p);
    $.has(p) && !(x && x.state === "loading" && L.has(p)) && Ut(p),
      ne.delete(p),
      L.delete(p),
      le.delete(p),
      z.v7_fetcherPersist && he.delete(p),
      se.delete(p),
      O.fetchers.delete(p);
  }
  function ur(p) {
    let x = (J.get(p) || 0) - 1;
    x <= 0
      ? (J.delete(p), he.add(p), z.v7_fetcherPersist || Za(p))
      : J.set(p, x),
      ut({ fetchers: new Map(O.fetchers) });
  }
  function Ut(p) {
    let x = $.get(p);
    x && (x.abort(), $.delete(p));
  }
  function Et(p) {
    for (let x of p) {
      let _ = jn(x),
        B = ia(_.data);
      O.fetchers.set(x, B);
    }
  }
  function Bu() {
    let p = [],
      x = !1;
    for (let _ of le) {
      let B = O.fetchers.get(_);
      Re(B, "Expected fetcher: " + _),
        B.state === "loading" && (le.delete(_), p.push(_), (x = !0));
    }
    return Et(p), x;
  }
  function ul(p) {
    let x = [];
    for (let [_, B] of L)
      if (B < p) {
        let Q = O.fetchers.get(_);
        Re(Q, "Expected fetcher: " + _),
          Q.state === "loading" && (Ut(_), L.delete(_), x.push(_));
      }
    return Et(x), x.length > 0;
  }
  function Mt(p, x) {
    let _ = O.blockers.get(p) || _u;
    return $e.get(p) !== x && $e.set(p, x), _;
  }
  function Lu(p) {
    O.blockers.delete(p), $e.delete(p);
  }
  function Ka(p, x) {
    let _ = O.blockers.get(p) || _u;
    Re(
      (_.state === "unblocked" && x.state === "blocked") ||
        (_.state === "blocked" && x.state === "blocked") ||
        (_.state === "blocked" && x.state === "proceeding") ||
        (_.state === "blocked" && x.state === "unblocked") ||
        (_.state === "proceeding" && x.state === "unblocked"),
      "Invalid blocker state transition: " + _.state + " -> " + x.state,
    );
    let B = new Map(O.blockers);
    B.set(p, x), ut({ blockers: B });
  }
  function Yu(p) {
    let { currentLocation: x, nextLocation: _, historyAction: B } = p;
    if ($e.size === 0) return;
    $e.size > 1 && qa(!1, "A router only supports one blocker at a time");
    let Q = Array.from($e.entries()),
      [ue, re] = Q[Q.length - 1],
      G = O.blockers.get(ue);
    if (
      !(G && G.state === "proceeding") &&
      re({ currentLocation: x, nextLocation: _, historyAction: B })
    )
      return ue;
  }
  function Hl(p) {
    let x = Ht(404, { pathname: p }),
      _ = D || y,
      { matches: B, route: Q } = zh(_);
    return Bl(), { notFoundMatches: B, route: Q, error: x };
  }
  function Bl(p) {
    let x = [];
    return (
      de.forEach((_, B) => {
        (!p || p(B)) && (_.cancel(), x.push(B), de.delete(B));
      }),
      x
    );
  }
  function bl(p, x, _) {
    if (((W = p), (I = x), (K = _ || null), !pe && O.navigation === pf)) {
      pe = !0;
      let B = qu(O.location, O.matches);
      B != null && ut({ restoreScrollPosition: B });
    }
    return () => {
      (W = null), (I = null), (K = null);
    };
  }
  function da(p, x) {
    return (
      (K &&
        K(
          p,
          x.map((B) => Bv(B, O.loaderData)),
        )) ||
      p.key
    );
  }
  function ha(p, x) {
    if (W && I) {
      let _ = da(p, x);
      W[_] = I();
    }
  }
  function qu(p, x) {
    if (W) {
      let _ = da(p, x),
        B = W[_];
      if (typeof B == "number") return B;
    }
    return null;
  }
  function ma(p, x, _) {
    if (M)
      if (p) {
        if (Object.keys(p[0].params).length > 0)
          return { active: !0, matches: ki(x, _, g, !0) };
      } else return { active: !0, matches: ki(x, _, g, !0) || [] };
    return { active: !1, matches: null };
  }
  async function va(p, x, _, B) {
    if (!M) return { type: "success", matches: p };
    let Q = p;
    for (;;) {
      let ue = D == null,
        re = D || y,
        G = v;
      try {
        await M({
          signal: _,
          path: x,
          matches: Q,
          fetcherKey: B,
          patch: (ee, ve) => {
            _.aborted || Eh(ee, ve, re, G, d);
          },
        });
      } catch (ee) {
        return { type: "error", error: ee, partialMatches: Q };
      } finally {
        ue && !_.aborted && (y = [...y]);
      }
      if (_.aborted) return { type: "aborted" };
      let V = Ba(re, x, g);
      if (V) return { type: "success", matches: V };
      let k = ki(re, x, g, !0);
      if (
        !k ||
        (Q.length === k.length &&
          Q.every((ee, ve) => ee.route.id === k[ve].route.id))
      )
        return { type: "success", matches: null };
      Q = k;
    }
  }
  function wn(p) {
    (v = {}), (D = Wi(p, d, void 0, v));
  }
  function ya(p, x) {
    let _ = D == null;
    Eh(p, x, D || y, v, d), _ && ((y = [...y]), ut({}));
  }
  return (
    (et = {
      get basename() {
        return g;
      },
      get future() {
        return z;
      },
      get state() {
        return O;
      },
      get routes() {
        return y;
      },
      get window() {
        return r;
      },
      initialize: tt,
      subscribe: Zt,
      enableScrollRestoration: bl,
      navigate: oa,
      fetch: Un,
      revalidate: Ga,
      createHref: (p) => i.history.createHref(p),
      encodeLocation: (p) => i.history.encodeLocation(p),
      getFetcher: jn,
      deleteFetcher: ur,
      dispose: Ge,
      getBlocker: Mt,
      deleteBlocker: Lu,
      patchRoutes: ya,
      _internalFetchControllers: $,
      _internalActiveDeferreds: de,
      _internalSetRoutes: wn,
    }),
    et
  );
}
function oy(i) {
  return (
    i != null &&
    (("formData" in i && i.formData != null) ||
      ("body" in i && i.body !== void 0))
  );
}
function Sf(i, r, o, f, d, v, y, D) {
  let g, m;
  if (y) {
    g = [];
    for (let z of r)
      if ((g.push(z), z.route.id === y)) {
        m = z;
        break;
      }
  } else (g = r), (m = r[r.length - 1]);
  let M = Zh(d || ".", Vh(g, v), Hu(i.pathname, o) || i.pathname, D === "path");
  if (
    (d == null && ((M.search = i.search), (M.hash = i.hash)),
    (d == null || d === "" || d === ".") && m)
  ) {
    let z = zf(M.search);
    if (m.route.index && !z)
      M.search = M.search ? M.search.replace(/^\?/, "?index&") : "?index";
    else if (!m.route.index && z) {
      let j = new URLSearchParams(M.search),
        Y = j.getAll("index");
      j.delete("index"),
        Y.filter((K) => K).forEach((K) => j.append("index", K));
      let W = j.toString();
      M.search = W ? "?" + W : "";
    }
  }
  return (
    f &&
      o !== "/" &&
      (M.pathname = M.pathname === "/" ? o : ca([o, M.pathname])),
    Cu(M)
  );
}
function gh(i, r, o, f) {
  if (!f || !oy(f)) return { path: o };
  if (f.formMethod && !xy(f.formMethod))
    return { path: o, error: Ht(405, { method: f.formMethod }) };
  let d = () => ({ path: o, error: Ht(400, { type: "invalid-body" }) }),
    v = f.formMethod || "get",
    y = i ? v.toUpperCase() : v.toLowerCase(),
    D = Fh(o);
  if (f.body !== void 0) {
    if (f.formEncType === "text/plain") {
      if (!hl(y)) return d();
      let j =
        typeof f.body == "string"
          ? f.body
          : f.body instanceof FormData || f.body instanceof URLSearchParams
            ? Array.from(f.body.entries()).reduce((Y, W) => {
                let [K, I] = W;
                return (
                  "" +
                  Y +
                  K +
                  "=" +
                  I +
                  `
`
                );
              }, "")
            : String(f.body);
      return {
        path: o,
        submission: {
          formMethod: y,
          formAction: D,
          formEncType: f.formEncType,
          formData: void 0,
          json: void 0,
          text: j,
        },
      };
    } else if (f.formEncType === "application/json") {
      if (!hl(y)) return d();
      try {
        let j = typeof f.body == "string" ? JSON.parse(f.body) : f.body;
        return {
          path: o,
          submission: {
            formMethod: y,
            formAction: D,
            formEncType: f.formEncType,
            formData: void 0,
            json: j,
            text: void 0,
          },
        };
      } catch (j) {
        return d();
      }
    }
  }
  Re(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let g, m;
  if (f.formData) (g = xf(f.formData)), (m = f.formData);
  else if (f.body instanceof FormData) (g = xf(f.body)), (m = f.body);
  else if (f.body instanceof URLSearchParams) (g = f.body), (m = Th(g));
  else if (f.body == null) (g = new URLSearchParams()), (m = new FormData());
  else
    try {
      (g = new URLSearchParams(f.body)), (m = Th(g));
    } catch (j) {
      return d();
    }
  let M = {
    formMethod: y,
    formAction: D,
    formEncType: (f && f.formEncType) || "application/x-www-form-urlencoded",
    formData: m,
    json: void 0,
    text: void 0,
  };
  if (hl(M.formMethod)) return { path: o, submission: M };
  let z = fa(o);
  return (
    r && z.search && zf(z.search) && g.append("index", ""),
    (z.search = "?" + g),
    { path: Cu(z), submission: M }
  );
}
function ph(i, r, o) {
  o === void 0 && (o = !1);
  let f = i.findIndex((d) => d.route.id === r);
  return f >= 0 ? i.slice(0, o ? f + 1 : f) : i;
}
function bh(i, r, o, f, d, v, y, D, g, m, M, z, j, Y, W, K) {
  let I = K ? (Vt(K[1]) ? K[1].error : K[1].data) : void 0,
    pe = i.createURL(r.location),
    te = i.createURL(d),
    Ae = o;
  v && r.errors
    ? (Ae = ph(o, Object.keys(r.errors)[0], !0))
    : K && Vt(K[1]) && (Ae = ph(o, K[0]));
  let Ve = K ? K[1].statusCode : void 0,
    fe = y && Ve && Ve >= 400,
    et = Ae.filter((ce, Z) => {
      let { route: F } = ce;
      if (F.lazy) return !0;
      if (F.loader == null) return !1;
      if (v) return Ef(F, r.loaderData, r.errors);
      if (
        sy(r.loaderData, r.matches[Z], ce) ||
        g.some((Je) => Je === ce.route.id)
      )
        return !0;
      let Ce = r.matches[Z],
        je = ce;
      return Sh(
        ce,
        Fe(
          {
            currentUrl: pe,
            currentParams: Ce.params,
            nextUrl: te,
            nextParams: je.params,
          },
          f,
          {
            actionResult: I,
            actionStatus: Ve,
            defaultShouldRevalidate: fe
              ? !1
              : D ||
                pe.pathname + pe.search === te.pathname + te.search ||
                pe.search !== te.search ||
                kh(Ce, je),
          },
        ),
      );
    }),
    O = [];
  return (
    z.forEach((ce, Z) => {
      if (v || !o.some((ke) => ke.route.id === ce.routeId) || M.has(Z)) return;
      let F = Ba(Y, ce.path, W);
      if (!F) {
        O.push({
          key: Z,
          routeId: ce.routeId,
          path: ce.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let Ce = r.fetchers.get(Z),
        je = Nu(F, ce.path),
        Je = !1;
      j.has(Z)
        ? (Je = !1)
        : m.has(Z)
          ? (m.delete(Z), (Je = !0))
          : Ce && Ce.state !== "idle" && Ce.data === void 0
            ? (Je = D)
            : (Je = Sh(
                je,
                Fe(
                  {
                    currentUrl: pe,
                    currentParams: r.matches[r.matches.length - 1].params,
                    nextUrl: te,
                    nextParams: o[o.length - 1].params,
                  },
                  f,
                  {
                    actionResult: I,
                    actionStatus: Ve,
                    defaultShouldRevalidate: fe ? !1 : D,
                  },
                ),
              )),
        Je &&
          O.push({
            key: Z,
            routeId: ce.routeId,
            path: ce.path,
            matches: F,
            match: je,
            controller: new AbortController(),
          });
    }),
    [et, O]
  );
}
function Ef(i, r, o) {
  if (i.lazy) return !0;
  if (!i.loader) return !1;
  let f = r != null && r[i.id] !== void 0,
    d = o != null && o[i.id] !== void 0;
  return !f && d
    ? !1
    : typeof i.loader == "function" && i.loader.hydrate === !0
      ? !0
      : !f && !d;
}
function sy(i, r, o) {
  let f = !r || o.route.id !== r.route.id,
    d = i[o.route.id] === void 0;
  return f || d;
}
function kh(i, r) {
  let o = i.route.path;
  return (
    i.pathname !== r.pathname ||
    (o != null && o.endsWith("*") && i.params["*"] !== r.params["*"])
  );
}
function Sh(i, r) {
  if (i.route.shouldRevalidate) {
    let o = i.route.shouldRevalidate(r);
    if (typeof o == "boolean") return o;
  }
  return r.defaultShouldRevalidate;
}
function Eh(i, r, o, f, d) {
  var v;
  let y;
  if (i) {
    let m = f[i];
    Re(m, "No route found to patch children into: routeId = " + i),
      m.children || (m.children = []),
      (y = m.children);
  } else y = o;
  let D = r.filter((m) => !y.some((M) => Wh(m, M))),
    g = Wi(
      D,
      d,
      [i || "_", "patch", String(((v = y) == null ? void 0 : v.length) || "0")],
      f,
    );
  y.push(...g);
}
function Wh(i, r) {
  return "id" in i && "id" in r && i.id === r.id
    ? !0
    : i.index === r.index &&
        i.path === r.path &&
        i.caseSensitive === r.caseSensitive
      ? (!i.children || i.children.length === 0) &&
        (!r.children || r.children.length === 0)
        ? !0
        : i.children.every((o, f) => {
            var d;
            return (d = r.children) == null ? void 0 : d.some((v) => Wh(o, v));
          })
      : !1;
}
async function dy(i, r, o) {
  if (!i.lazy) return;
  let f = await i.lazy();
  if (!i.lazy) return;
  let d = o[i.id];
  Re(d, "No route found in manifest");
  let v = {};
  for (let y in f) {
    let g = d[y] !== void 0 && y !== "hasErrorBoundary";
    qa(
      !g,
      'Route "' +
        d.id +
        '" has a static property "' +
        y +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + y + '" will be ignored.'),
    ),
      !g && !Cv.has(y) && (v[y] = f[y]);
  }
  Object.assign(d, v), Object.assign(d, Fe({}, r(d), { lazy: void 0 }));
}
async function hy(i) {
  let { matches: r } = i,
    o = r.filter((d) => d.shouldLoad);
  return (await Promise.all(o.map((d) => d.resolve()))).reduce(
    (d, v, y) => Object.assign(d, { [o[y].route.id]: v }),
    {},
  );
}
async function my(i, r, o, f, d, v, y, D, g, m) {
  let M = v.map((Y) => (Y.route.lazy ? dy(Y.route, g, D) : void 0)),
    z = v.map((Y, W) => {
      let K = M[W],
        I = d.some((te) => te.route.id === Y.route.id);
      return Fe({}, Y, {
        shouldLoad: I,
        resolve: async (te) => (
          te &&
            f.method === "GET" &&
            (Y.route.lazy || Y.route.loader) &&
            (I = !0),
          I
            ? vy(r, f, Y, K, te, m)
            : Promise.resolve({ type: Be.data, result: void 0 })
        ),
      });
    }),
    j = await i({
      matches: z,
      request: f,
      params: v[0].params,
      fetcherKey: y,
      context: m,
    });
  try {
    await Promise.all(M);
  } catch (Y) {}
  return j;
}
async function vy(i, r, o, f, d, v) {
  let y,
    D,
    g = (m) => {
      let M,
        z = new Promise((W, K) => (M = K));
      (D = () => M()), r.signal.addEventListener("abort", D);
      let j = (W) =>
          typeof m != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + i + '" [routeId: ' + o.route.id + "]"),
                ),
              )
            : m(
                { request: r, params: o.params, context: v },
                ...(W !== void 0 ? [W] : []),
              ),
        Y = (async () => {
          try {
            return { type: "data", result: await (d ? d((K) => j(K)) : j()) };
          } catch (W) {
            return { type: "error", result: W };
          }
        })();
      return Promise.race([Y, z]);
    };
  try {
    let m = o.route[i];
    if (f)
      if (m) {
        let M,
          [z] = await Promise.all([
            g(m).catch((j) => {
              M = j;
            }),
            f,
          ]);
        if (M !== void 0) throw M;
        y = z;
      } else if ((await f, (m = o.route[i]), m)) y = await g(m);
      else if (i === "action") {
        let M = new URL(r.url),
          z = M.pathname + M.search;
        throw Ht(405, { method: r.method, pathname: z, routeId: o.route.id });
      } else return { type: Be.data, result: void 0 };
    else if (m) y = await g(m);
    else {
      let M = new URL(r.url),
        z = M.pathname + M.search;
      throw Ht(404, { pathname: z });
    }
    Re(
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
    return { type: Be.error, result: m };
  } finally {
    D && r.signal.removeEventListener("abort", D);
  }
  return y;
}
async function yy(i) {
  let { result: r, type: o } = i;
  if ($h(r)) {
    let z;
    try {
      let j = r.headers.get("Content-Type");
      j && /\bapplication\/json\b/.test(j)
        ? r.body == null
          ? (z = null)
          : (z = await r.json())
        : (z = await r.text());
    } catch (j) {
      return { type: Be.error, error: j };
    }
    return o === Be.error
      ? {
          type: Be.error,
          error: new Fi(r.status, r.statusText, z),
          statusCode: r.status,
          headers: r.headers,
        }
      : { type: Be.data, data: z, statusCode: r.status, headers: r.headers };
  }
  if (o === Be.error) {
    if (Ah(r)) {
      var f, d;
      if (r.data instanceof Error) {
        var v, y;
        return {
          type: Be.error,
          error: r.data,
          statusCode: (v = r.init) == null ? void 0 : v.status,
          headers:
            (y = r.init) != null && y.headers
              ? new Headers(r.init.headers)
              : void 0,
        };
      }
      return {
        type: Be.error,
        error: new Fi(
          ((f = r.init) == null ? void 0 : f.status) || 500,
          void 0,
          r.data,
        ),
        statusCode: wu(r) ? r.status : void 0,
        headers:
          (d = r.init) != null && d.headers
            ? new Headers(r.init.headers)
            : void 0,
      };
    }
    return { type: Be.error, error: r, statusCode: wu(r) ? r.status : void 0 };
  }
  if (Ey(r)) {
    var D, g;
    return {
      type: Be.deferred,
      deferredData: r,
      statusCode: (D = r.init) == null ? void 0 : D.status,
      headers:
        ((g = r.init) == null ? void 0 : g.headers) &&
        new Headers(r.init.headers),
    };
  }
  if (Ah(r)) {
    var m, M;
    return {
      type: Be.data,
      data: r.data,
      statusCode: (m = r.init) == null ? void 0 : m.status,
      headers:
        (M = r.init) != null && M.headers
          ? new Headers(r.init.headers)
          : void 0,
    };
  }
  return { type: Be.data, data: r };
}
function gy(i, r, o, f, d, v) {
  let y = i.headers.get("Location");
  if (
    (Re(
      y,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !Rf.test(y))
  ) {
    let D = f.slice(0, f.findIndex((g) => g.route.id === o) + 1);
    (y = Sf(new URL(r.url), D, d, !0, y, v)), i.headers.set("Location", y);
  }
  return i;
}
function xh(i, r, o) {
  if (Rf.test(i)) {
    let f = i,
      d = f.startsWith("//") ? new URL(r.protocol + f) : new URL(f),
      v = Hu(d.pathname, o) != null;
    if (d.origin === r.origin && v) return d.pathname + d.search + d.hash;
  }
  return i;
}
function zn(i, r, o, f) {
  let d = i.createURL(Fh(r)).toString(),
    v = { signal: o };
  if (f && hl(f.formMethod)) {
    let { formMethod: y, formEncType: D } = f;
    (v.method = y.toUpperCase()),
      D === "application/json"
        ? ((v.headers = new Headers({ "Content-Type": D })),
          (v.body = JSON.stringify(f.json)))
        : D === "text/plain"
          ? (v.body = f.text)
          : D === "application/x-www-form-urlencoded" && f.formData
            ? (v.body = xf(f.formData))
            : (v.body = f.formData);
  }
  return new Request(d, v);
}
function xf(i) {
  let r = new URLSearchParams();
  for (let [o, f] of i.entries())
    r.append(o, typeof f == "string" ? f : f.name);
  return r;
}
function Th(i) {
  let r = new FormData();
  for (let [o, f] of i.entries()) r.append(o, f);
  return r;
}
function py(i, r, o, f, d) {
  let v = {},
    y = null,
    D,
    g = !1,
    m = {},
    M = o && Vt(o[1]) ? o[1].error : void 0;
  return (
    i.forEach((z) => {
      if (!(z.route.id in r)) return;
      let j = z.route.id,
        Y = r[j];
      if (
        (Re(!Ya(Y), "Cannot handle redirect results in processLoaderData"),
        Vt(Y))
      ) {
        let W = Y.error;
        M !== void 0 && ((W = M), (M = void 0)), (y = y || {});
        {
          let K = La(i, j);
          y[K.route.id] == null && (y[K.route.id] = W);
        }
        (v[j] = void 0),
          g || ((g = !0), (D = wu(Y.error) ? Y.error.status : 500)),
          Y.headers && (m[j] = Y.headers);
      } else
        ra(Y)
          ? (f.set(j, Y.deferredData),
            (v[j] = Y.deferredData.data),
            Y.statusCode != null &&
              Y.statusCode !== 200 &&
              !g &&
              (D = Y.statusCode),
            Y.headers && (m[j] = Y.headers))
          : ((v[j] = Y.data),
            Y.statusCode && Y.statusCode !== 200 && !g && (D = Y.statusCode),
            Y.headers && (m[j] = Y.headers));
    }),
    M !== void 0 && o && ((y = { [o[0]]: M }), (v[o[0]] = void 0)),
    { loaderData: v, errors: y, statusCode: D || 200, loaderHeaders: m }
  );
}
function Dh(i, r, o, f, d, v, y) {
  let { loaderData: D, errors: g } = py(r, o, f, y);
  return (
    d.forEach((m) => {
      let { key: M, match: z, controller: j } = m,
        Y = v[M];
      if (
        (Re(Y, "Did not find corresponding fetcher result"),
        !(j && j.signal.aborted))
      )
        if (Vt(Y)) {
          let W = La(i.matches, z == null ? void 0 : z.route.id);
          (g && g[W.route.id]) || (g = Fe({}, g, { [W.route.id]: Y.error })),
            i.fetchers.delete(M);
        } else if (Ya(Y)) Re(!1, "Unhandled fetcher revalidation redirect");
        else if (ra(Y)) Re(!1, "Unhandled fetcher deferred data");
        else {
          let W = ia(Y.data);
          i.fetchers.set(M, W);
        }
    }),
    { loaderData: D, errors: g }
  );
}
function Rh(i, r, o, f) {
  let d = Fe({}, r);
  for (let v of o) {
    let y = v.route.id;
    if (
      (r.hasOwnProperty(y)
        ? r[y] !== void 0 && (d[y] = r[y])
        : i[y] !== void 0 && v.route.loader && (d[y] = i[y]),
      f && f.hasOwnProperty(y))
    )
      break;
  }
  return d;
}
function Mh(i) {
  return i
    ? Vt(i[1])
      ? { actionData: {} }
      : { actionData: { [i[0]]: i[1].data } }
    : {};
}
function La(i, r) {
  return (
    (r ? i.slice(0, i.findIndex((f) => f.route.id === r) + 1) : [...i])
      .reverse()
      .find((f) => f.route.hasErrorBoundary === !0) || i[0]
  );
}
function zh(i) {
  let r =
    i.length === 1
      ? i[0]
      : i.find((o) => o.index || !o.path || o.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: r }],
    route: r,
  };
}
function Ht(i, r) {
  let {
      pathname: o,
      routeId: f,
      method: d,
      type: v,
      message: y,
    } = r === void 0 ? {} : r,
    D = "Unknown Server Error",
    g = "Unknown @remix-run/router error";
  return (
    i === 400
      ? ((D = "Bad Request"),
        d && o && f
          ? (g =
              "You made a " +
              d +
              ' request to "' +
              o +
              '" but ' +
              ('did not provide a `loader` for route "' + f + '", ') +
              "so there is no way to handle the request.")
          : v === "defer-action"
            ? (g = "defer() is not supported in actions")
            : v === "invalid-body" && (g = "Unable to encode submission body"))
      : i === 403
        ? ((D = "Forbidden"),
          (g = 'Route "' + f + '" does not match URL "' + o + '"'))
        : i === 404
          ? ((D = "Not Found"), (g = 'No route matches URL "' + o + '"'))
          : i === 405 &&
            ((D = "Method Not Allowed"),
            d && o && f
              ? (g =
                  "You made a " +
                  d.toUpperCase() +
                  ' request to "' +
                  o +
                  '" but ' +
                  ('did not provide an `action` for route "' + f + '", ') +
                  "so there is no way to handle the request.")
              : d && (g = 'Invalid request method "' + d.toUpperCase() + '"')),
    new Fi(i || 500, D, new Error(g), !0)
  );
}
function Ji(i) {
  let r = Object.entries(i);
  for (let o = r.length - 1; o >= 0; o--) {
    let [f, d] = r[o];
    if (Ya(d)) return { key: f, result: d };
  }
}
function Fh(i) {
  let r = typeof i == "string" ? fa(i) : i;
  return Cu(Fe({}, r, { hash: "" }));
}
function by(i, r) {
  return i.pathname !== r.pathname || i.search !== r.search
    ? !1
    : i.hash === ""
      ? r.hash !== ""
      : i.hash === r.hash
        ? !0
        : r.hash !== "";
}
function Sy(i) {
  return $h(i.result) && uy.has(i.result.status);
}
function ra(i) {
  return i.type === Be.deferred;
}
function Vt(i) {
  return i.type === Be.error;
}
function Ya(i) {
  return (i && i.type) === Be.redirect;
}
function Ah(i) {
  return (
    typeof i == "object" &&
    i != null &&
    "type" in i &&
    "data" in i &&
    "init" in i &&
    i.type === "DataWithResponseInit"
  );
}
function Ey(i) {
  let r = i;
  return (
    r &&
    typeof r == "object" &&
    typeof r.data == "object" &&
    typeof r.subscribe == "function" &&
    typeof r.cancel == "function" &&
    typeof r.resolveData == "function"
  );
}
function $h(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.headers == "object" &&
    typeof i.body != "undefined"
  );
}
function xy(i) {
  return ny.has(i.toLowerCase());
}
function hl(i) {
  return ly.has(i.toLowerCase());
}
async function Ty(i, r, o, f, d) {
  let v = Object.entries(r);
  for (let y = 0; y < v.length; y++) {
    let [D, g] = v[y],
      m = i.find((j) => (j == null ? void 0 : j.route.id) === D);
    if (!m) continue;
    let M = f.find((j) => j.route.id === m.route.id),
      z = M != null && !kh(M, m) && (d && d[m.route.id]) !== void 0;
    ra(g) &&
      z &&
      (await Mf(g, o, !1).then((j) => {
        j && (r[D] = j);
      }));
  }
}
async function Dy(i, r, o) {
  for (let f = 0; f < o.length; f++) {
    let { key: d, routeId: v, controller: y } = o[f],
      D = r[d];
    i.find((m) => (m == null ? void 0 : m.route.id) === v) &&
      ra(D) &&
      (Re(
        y,
        "Expected an AbortController for revalidating fetcher deferred result",
      ),
      await Mf(D, y.signal, !0).then((m) => {
        m && (r[d] = m);
      }));
  }
}
async function Mf(i, r, o) {
  if ((o === void 0 && (o = !1), !(await i.deferredData.resolveData(r)))) {
    if (o)
      try {
        return { type: Be.data, data: i.deferredData.unwrappedData };
      } catch (d) {
        return { type: Be.error, error: d };
      }
    return { type: Be.data, data: i.deferredData.data };
  }
}
function zf(i) {
  return new URLSearchParams(i).getAll("index").some((r) => r === "");
}
function Nu(i, r) {
  let o = typeof r == "string" ? fa(r).search : r.search;
  if (i[i.length - 1].route.index && zf(o || "")) return i[i.length - 1];
  let f = Qh(i);
  return f[f.length - 1];
}
function _h(i) {
  let {
    formMethod: r,
    formAction: o,
    formEncType: f,
    text: d,
    formData: v,
    json: y,
  } = i;
  if (!(!r || !o || !f)) {
    if (d != null)
      return {
        formMethod: r,
        formAction: o,
        formEncType: f,
        formData: void 0,
        json: void 0,
        text: d,
      };
    if (v != null)
      return {
        formMethod: r,
        formAction: o,
        formEncType: f,
        formData: v,
        json: void 0,
        text: void 0,
      };
    if (y !== void 0)
      return {
        formMethod: r,
        formAction: o,
        formEncType: f,
        formData: void 0,
        json: y,
        text: void 0,
      };
  }
}
function bf(i, r) {
  return r
    ? {
        state: "loading",
        location: i,
        formMethod: r.formMethod,
        formAction: r.formAction,
        formEncType: r.formEncType,
        formData: r.formData,
        json: r.json,
        text: r.text,
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
function Ry(i, r) {
  return {
    state: "submitting",
    location: i,
    formMethod: r.formMethod,
    formAction: r.formAction,
    formEncType: r.formEncType,
    formData: r.formData,
    json: r.json,
    text: r.text,
  };
}
function Ou(i, r) {
  return i
    ? {
        state: "loading",
        formMethod: i.formMethod,
        formAction: i.formAction,
        formEncType: i.formEncType,
        formData: i.formData,
        json: i.json,
        text: i.text,
        data: r,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: r,
      };
}
function My(i, r) {
  return {
    state: "submitting",
    formMethod: i.formMethod,
    formAction: i.formAction,
    formEncType: i.formEncType,
    formData: i.formData,
    json: i.json,
    text: i.text,
    data: r ? r.data : void 0,
  };
}
function ia(i) {
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
function zy(i, r) {
  try {
    let o = i.sessionStorage.getItem(Jh);
    if (o) {
      let f = JSON.parse(o);
      for (let [d, v] of Object.entries(f || {}))
        v && Array.isArray(v) && r.set(d, new Set(v || []));
    }
  } catch (o) {}
}
function Ay(i, r) {
  if (r.size > 0) {
    let o = {};
    for (let [f, d] of r) o[f] = [...d];
    try {
      i.sessionStorage.setItem(Jh, JSON.stringify(o));
    } catch (f) {
      qa(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          f +
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
 */ function $i() {
  return (
    ($i = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var f in o)
              Object.prototype.hasOwnProperty.call(o, f) && (i[f] = o[f]);
          }
          return i;
        }),
    $i.apply(this, arguments)
  );
}
const Ii = q.createContext(null),
  Ph = q.createContext(null),
  er = q.createContext(null),
  Af = q.createContext(null),
  An = q.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ih = q.createContext(null);
function tr() {
  return q.useContext(Af) != null;
}
function e0() {
  return tr() || Re(!1), q.useContext(Af).location;
}
function t0(i) {
  q.useContext(er).static || q.useLayoutEffect(i);
}
function Tg() {
  let { isDataRoute: i } = q.useContext(An);
  return i ? Yy() : _y();
}
function _y() {
  tr() || Re(!1);
  let i = q.useContext(Ii),
    { basename: r, future: o, navigator: f } = q.useContext(er),
    { matches: d } = q.useContext(An),
    { pathname: v } = e0(),
    y = JSON.stringify(Vh(d, o.v7_relativeSplatPath)),
    D = q.useRef(!1);
  return (
    t0(() => {
      D.current = !0;
    }),
    q.useCallback(
      function (m, M) {
        if ((M === void 0 && (M = {}), !D.current)) return;
        if (typeof m == "number") {
          f.go(m);
          return;
        }
        let z = Zh(m, JSON.parse(y), v, M.relative === "path");
        i == null &&
          r !== "/" &&
          (z.pathname = z.pathname === "/" ? r : ca([r, z.pathname])),
          (M.replace ? f.replace : f.push)(z, M.state, M);
      },
      [r, f, y, v, i],
    )
  );
}
function Dg(i, r) {
  return l0(i);
}
function l0(i, r, o, f) {
  tr() || Re(!1);
  let { navigator: d } = q.useContext(er),
    { matches: v } = q.useContext(An),
    y = v[v.length - 1],
    D = y ? y.params : {};
  y && y.pathname;
  let g = y ? y.pathnameBase : "/";
  y && y.route;
  let m = e0(),
    M;
  M = m;
  let z = M.pathname || "/",
    j = z;
  if (g !== "/") {
    let K = g.replace(/^\//, "").split("/");
    j = "/" + z.replace(/^\//, "").split("/").slice(K.length).join("/");
  }
  let Y = Ba(i, { pathname: j });
  return wy(
    Y &&
      Y.map((K) =>
        Object.assign({}, K, {
          params: Object.assign({}, D, K.params),
          pathname: ca([
            g,
            d.encodeLocation
              ? d.encodeLocation(K.pathname).pathname
              : K.pathname,
          ]),
          pathnameBase:
            K.pathnameBase === "/"
              ? g
              : ca([
                  g,
                  d.encodeLocation
                    ? d.encodeLocation(K.pathnameBase).pathname
                    : K.pathnameBase,
                ]),
        }),
      ),
    v,
    o,
    f,
  );
}
function Oy() {
  let i = Ly(),
    r = wu(i)
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
    q.createElement("h3", { style: { fontStyle: "italic" } }, r),
    o ? q.createElement("pre", { style: d }, o) : null,
    null,
  );
}
const Uy = q.createElement(Oy, null);
class Ny extends q.Component {
  constructor(r) {
    super(r),
      (this.state = {
        location: r.location,
        revalidation: r.revalidation,
        error: r.error,
      });
  }
  static getDerivedStateFromError(r) {
    return { error: r };
  }
  static getDerivedStateFromProps(r, o) {
    return o.location !== r.location ||
      (o.revalidation !== "idle" && r.revalidation === "idle")
      ? { error: r.error, location: r.location, revalidation: r.revalidation }
      : {
          error: r.error !== void 0 ? r.error : o.error,
          location: o.location,
          revalidation: r.revalidation || o.revalidation,
        };
  }
  componentDidCatch(r, o) {
    console.error(
      "React Router caught the following error during render",
      r,
      o,
    );
  }
  render() {
    return this.state.error !== void 0
      ? q.createElement(
          An.Provider,
          { value: this.props.routeContext },
          q.createElement(Ih.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function jy(i) {
  let { routeContext: r, match: o, children: f } = i,
    d = q.useContext(Ii);
  return (
    d &&
      d.static &&
      d.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (d.staticContext._deepestRenderedBoundaryId = o.route.id),
    q.createElement(An.Provider, { value: r }, f)
  );
}
function wy(i, r, o, f) {
  var d;
  if (
    (r === void 0 && (r = []),
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
      r.length === 0 &&
      !o.initialized &&
      o.matches.length > 0
    )
      i = o.matches;
    else return null;
  }
  let y = i,
    D = (d = o) == null ? void 0 : d.errors;
  if (D != null) {
    let M = y.findIndex(
      (z) => z.route.id && (D == null ? void 0 : D[z.route.id]) !== void 0,
    );
    M >= 0 || Re(!1), (y = y.slice(0, Math.min(y.length, M + 1)));
  }
  let g = !1,
    m = -1;
  if (o && f && f.v7_partialHydration)
    for (let M = 0; M < y.length; M++) {
      let z = y[M];
      if (
        ((z.route.HydrateFallback || z.route.hydrateFallbackElement) && (m = M),
        z.route.id)
      ) {
        let { loaderData: j, errors: Y } = o,
          W =
            z.route.loader &&
            j[z.route.id] === void 0 &&
            (!Y || Y[z.route.id] === void 0);
        if (z.route.lazy || W) {
          (g = !0), m >= 0 ? (y = y.slice(0, m + 1)) : (y = [y[0]]);
          break;
        }
      }
    }
  return y.reduceRight((M, z, j) => {
    let Y,
      W = !1,
      K = null,
      I = null;
    o &&
      ((Y = D && z.route.id ? D[z.route.id] : void 0),
      (K = z.route.errorElement || Uy),
      g &&
        (m < 0 && j === 0
          ? (qy("route-fallback"), (W = !0), (I = null))
          : m === j &&
            ((W = !0), (I = z.route.hydrateFallbackElement || null))));
    let pe = r.concat(y.slice(0, j + 1)),
      te = () => {
        let Ae;
        return (
          Y
            ? (Ae = K)
            : W
              ? (Ae = I)
              : z.route.Component
                ? (Ae = q.createElement(z.route.Component, null))
                : z.route.element
                  ? (Ae = z.route.element)
                  : (Ae = M),
          q.createElement(jy, {
            match: z,
            routeContext: { outlet: M, matches: pe, isDataRoute: o != null },
            children: Ae,
          })
        );
      };
    return o && (z.route.ErrorBoundary || z.route.errorElement || j === 0)
      ? q.createElement(Ny, {
          location: o.location,
          revalidation: o.revalidation,
          component: K,
          error: Y,
          children: te(),
          routeContext: { outlet: null, matches: pe, isDataRoute: !0 },
        })
      : te();
  }, null);
}
var a0 = (function (i) {
    return (
      (i.UseBlocker = "useBlocker"),
      (i.UseRevalidator = "useRevalidator"),
      (i.UseNavigateStable = "useNavigate"),
      i
    );
  })(a0 || {}),
  n0 = (function (i) {
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
  })(n0 || {});
function Cy(i) {
  let r = q.useContext(Ii);
  return r || Re(!1), r;
}
function Hy(i) {
  let r = q.useContext(Ph);
  return r || Re(!1), r;
}
function By(i) {
  let r = q.useContext(An);
  return r || Re(!1), r;
}
function u0(i) {
  let r = By(),
    o = r.matches[r.matches.length - 1];
  return o.route.id || Re(!1), o.route.id;
}
function Ly() {
  var i;
  let r = q.useContext(Ih),
    o = Hy(n0.UseRouteError),
    f = u0();
  return r !== void 0 ? r : (i = o.errors) == null ? void 0 : i[f];
}
function Yy() {
  let { router: i } = Cy(a0.UseNavigateStable),
    r = u0(),
    o = q.useRef(!1);
  return (
    t0(() => {
      o.current = !0;
    }),
    q.useCallback(
      function (d, v) {
        v === void 0 && (v = {}),
          o.current &&
            (typeof d == "number"
              ? i.navigate(d)
              : i.navigate(d, $i({ fromRouteId: r }, v)));
      },
      [i, r],
    )
  );
}
const Oh = {};
function qy(i, r, o) {
  Oh[i] || (Oh[i] = !0);
}
function Gy(i, r) {
  i == null || i.v7_startTransition,
    (i == null ? void 0 : i.v7_relativeSplatPath) === void 0 &&
      (!r || r.v7_relativeSplatPath),
    r &&
      (r.v7_fetcherPersist,
      r.v7_normalizeFormMethod,
      r.v7_partialHydration,
      r.v7_skipActionErrorRevalidation);
}
function Xy(i) {
  let {
    basename: r = "/",
    children: o = null,
    location: f,
    navigationType: d = st.Pop,
    navigator: v,
    static: y = !1,
    future: D,
  } = i;
  tr() && Re(!1);
  let g = r.replace(/^\/*/, "/"),
    m = q.useMemo(
      () => ({
        basename: g,
        navigator: v,
        static: y,
        future: $i({ v7_relativeSplatPath: !1 }, D),
      }),
      [g, D, v, y],
    );
  typeof f == "string" && (f = fa(f));
  let {
      pathname: M = "/",
      search: z = "",
      hash: j = "",
      state: Y = null,
      key: W = "default",
    } = f,
    K = q.useMemo(() => {
      let I = Hu(M, g);
      return I == null
        ? null
        : {
            location: { pathname: I, search: z, hash: j, state: Y, key: W },
            navigationType: d,
          };
    }, [g, M, z, j, Y, W, d]);
  return K == null
    ? null
    : q.createElement(
        er.Provider,
        { value: m },
        q.createElement(Af.Provider, { children: o, value: K }),
      );
}
new Promise(() => {});
function Qy(i) {
  let r = {
    hasErrorBoundary: i.ErrorBoundary != null || i.errorElement != null,
  };
  return (
    i.Component &&
      Object.assign(r, {
        element: q.createElement(i.Component),
        Component: void 0,
      }),
    i.HydrateFallback &&
      Object.assign(r, {
        hydrateFallbackElement: q.createElement(i.HydrateFallback),
        HydrateFallback: void 0,
      }),
    i.ErrorBoundary &&
      Object.assign(r, {
        errorElement: q.createElement(i.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    r
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
 */ function Pi() {
  return (
    (Pi = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var f in o)
              Object.prototype.hasOwnProperty.call(o, f) && (i[f] = o[f]);
          }
          return i;
        }),
    Pi.apply(this, arguments)
  );
}
const Vy = "6";
try {
  window.__reactRouterVersion = Vy;
} catch (i) {}
function Zy(i, r) {
  return fy({
    basename: r == null ? void 0 : r.basename,
    future: Pi({}, r == null ? void 0 : r.future, { v7_prependBasename: !0 }),
    history: Nv({ window: r == null ? void 0 : r.window }),
    hydrationData: (r == null ? void 0 : r.hydrationData) || Ky(),
    routes: i,
    mapRouteProperties: Qy,
    dataStrategy: r == null ? void 0 : r.dataStrategy,
    patchRoutesOnNavigation: r == null ? void 0 : r.patchRoutesOnNavigation,
    window: r == null ? void 0 : r.window,
  }).initialize();
}
function Ky() {
  var i;
  let r = (i = window) == null ? void 0 : i.__staticRouterHydrationData;
  return r && r.errors && (r = Pi({}, r, { errors: Jy(r.errors) })), r;
}
function Jy(i) {
  if (!i) return null;
  let r = Object.entries(i),
    o = {};
  for (let [f, d] of r)
    if (d && d.__type === "RouteErrorResponse")
      o[f] = new Fi(d.status, d.statusText, d.data, d.internal === !0);
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
const ky = q.createContext({ isTransitioning: !1 }),
  Wy = q.createContext(new Map()),
  Fy = "startTransition",
  Uh = xv[Fy],
  $y = "flushSync",
  Nh = Uv[$y];
function Py(i) {
  Uh ? Uh(i) : i();
}
function Uu(i) {
  Nh ? Nh(i) : i();
}
class Iy {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((r, o) => {
        (this.resolve = (f) => {
          this.status === "pending" && ((this.status = "resolved"), r(f));
        }),
          (this.reject = (f) => {
            this.status === "pending" && ((this.status = "rejected"), o(f));
          });
      }));
  }
}
function eg(i) {
  let { fallbackElement: r, router: o, future: f } = i,
    [d, v] = q.useState(o.state),
    [y, D] = q.useState(),
    [g, m] = q.useState({ isTransitioning: !1 }),
    [M, z] = q.useState(),
    [j, Y] = q.useState(),
    [W, K] = q.useState(),
    I = q.useRef(new Map()),
    { v7_startTransition: pe } = f || {},
    te = q.useCallback(
      (ce) => {
        pe ? Py(ce) : ce();
      },
      [pe],
    ),
    Ae = q.useCallback(
      (ce, Z) => {
        let { deletedFetchers: F, flushSync: Ce, viewTransitionOpts: je } = Z;
        ce.fetchers.forEach((ke, We) => {
          ke.data !== void 0 && I.current.set(We, ke.data);
        }),
          F.forEach((ke) => I.current.delete(ke));
        let Je =
          o.window == null ||
          o.window.document == null ||
          typeof o.window.document.startViewTransition != "function";
        if (!je || Je) {
          Ce ? Uu(() => v(ce)) : te(() => v(ce));
          return;
        }
        if (Ce) {
          Uu(() => {
            j && (M && M.resolve(), j.skipTransition()),
              m({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: je.currentLocation,
                nextLocation: je.nextLocation,
              });
          });
          let ke = o.window.document.startViewTransition(() => {
            Uu(() => v(ce));
          });
          ke.finished.finally(() => {
            Uu(() => {
              z(void 0), Y(void 0), D(void 0), m({ isTransitioning: !1 });
            });
          }),
            Uu(() => Y(ke));
          return;
        }
        j
          ? (M && M.resolve(),
            j.skipTransition(),
            K({
              state: ce,
              currentLocation: je.currentLocation,
              nextLocation: je.nextLocation,
            }))
          : (D(ce),
            m({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: je.currentLocation,
              nextLocation: je.nextLocation,
            }));
      },
      [o.window, j, M, I, te],
    );
  q.useLayoutEffect(() => o.subscribe(Ae), [o, Ae]),
    q.useEffect(() => {
      g.isTransitioning && !g.flushSync && z(new Iy());
    }, [g]),
    q.useEffect(() => {
      if (M && y && o.window) {
        let ce = y,
          Z = M.promise,
          F = o.window.document.startViewTransition(async () => {
            te(() => v(ce)), await Z;
          });
        F.finished.finally(() => {
          z(void 0), Y(void 0), D(void 0), m({ isTransitioning: !1 });
        }),
          Y(F);
      }
    }, [te, y, M, o.window]),
    q.useEffect(() => {
      M && y && d.location.key === y.location.key && M.resolve();
    }, [M, j, d.location, y]),
    q.useEffect(() => {
      !g.isTransitioning &&
        W &&
        (D(W.state),
        m({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: W.currentLocation,
          nextLocation: W.nextLocation,
        }),
        K(void 0));
    }, [g.isTransitioning, W]),
    q.useEffect(() => {}, []);
  let Ve = q.useMemo(
      () => ({
        createHref: o.createHref,
        encodeLocation: o.encodeLocation,
        go: (ce) => o.navigate(ce),
        push: (ce, Z, F) =>
          o.navigate(ce, {
            state: Z,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
        replace: (ce, Z, F) =>
          o.navigate(ce, {
            replace: !0,
            state: Z,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
      }),
      [o],
    ),
    fe = o.basename || "/",
    et = q.useMemo(
      () => ({ router: o, navigator: Ve, static: !1, basename: fe }),
      [o, Ve, fe],
    ),
    O = q.useMemo(
      () => ({ v7_relativeSplatPath: o.future.v7_relativeSplatPath }),
      [o.future.v7_relativeSplatPath],
    );
  return (
    q.useEffect(() => Gy(f, o.future), [f, o.future]),
    q.createElement(
      q.Fragment,
      null,
      q.createElement(
        Ii.Provider,
        { value: et },
        q.createElement(
          Ph.Provider,
          { value: d },
          q.createElement(
            Wy.Provider,
            { value: I.current },
            q.createElement(
              ky.Provider,
              { value: g },
              q.createElement(
                Xy,
                {
                  basename: fe,
                  location: d.location,
                  navigationType: d.historyAction,
                  navigator: Ve,
                  future: O,
                },
                d.initialized || o.future.v7_partialHydration
                  ? q.createElement(tg, {
                      routes: o.routes,
                      future: o.future,
                      state: d,
                    })
                  : r,
              ),
            ),
          ),
        ),
      ),
      null,
    )
  );
}
const tg = q.memo(lg);
function lg(i) {
  let { routes: r, future: o, state: f } = i;
  return l0(r, void 0, f, o);
}
var jh;
(function (i) {
  (i.UseScrollRestoration = "useScrollRestoration"),
    (i.UseSubmit = "useSubmit"),
    (i.UseSubmitFetcher = "useSubmitFetcher"),
    (i.UseFetcher = "useFetcher"),
    (i.useViewTransitionState = "useViewTransitionState");
})(jh || (jh = {}));
var wh;
(function (i) {
  (i.UseFetcher = "useFetcher"),
    (i.UseFetchers = "useFetchers"),
    (i.UseScrollRestoration = "useScrollRestoration");
})(wh || (wh = {}));
class ag extends q.Component {
  constructor(o) {
    super(o);
    Mn(this, "handleGoHome", () => {
      this.props.history && typeof this.props.history.push == "function"
        ? this.props.history.push("/")
        : typeof window != "undefined" && (window.location.href = "/");
    });
    Mn(this, "openModal", () => this.setState({ showModal: !0 }));
    Mn(this, "closeModal", () => this.setState({ showModal: !1 }));
    Mn(this, "toggleDetails", () => {
      this.setState((o) => ({ showDetails: !o.showDetails }));
    });
    Mn(this, "copyErrorId", async () => {
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
    return C.jsxs("div", {
      className: "error-container",
      role: "alert",
      "aria-live": "assertive",
      children: [
        C.jsx("div", {
          className: "particles",
          "aria-hidden": "true",
          children: [...Array(40)].map((d, v) =>
            C.jsx(
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
        C.jsx("div", {
          className: "matrix-lines",
          "aria-hidden": "true",
          children: [...Array(8)].map((d, v) =>
            C.jsx(
              "div",
              {
                className: "matrix-line",
                style: { left: `${12.5 * v}%`, animationDelay: `${v * 0.5}s` },
              },
              v,
            ),
          ),
        }),
        C.jsxs("div", {
          className: "error-content",
          children: [
            C.jsxs("div", {
              className: "glitch-container",
              "aria-hidden": "true",
              children: [
                C.jsx("div", { className: "glitch-icon", children: "⚠" }),
                C.jsx("div", {
                  className: "glitch-icon glitch-shadow-1",
                  children: "⚠",
                }),
                C.jsx("div", {
                  className: "glitch-icon glitch-shadow-2",
                  children: "⚠",
                }),
              ],
            }),
            C.jsx("h1", {
              className: "error-title glitch-text",
              "data-text": "Oops!",
              children: "Oops!",
            }),
            C.jsx("div", {
              className: "error-subtitle",
              children: C.jsx("span", {
                className: "typing-text",
                "aria-hidden": "true",
                children: "Something went wrong...!",
              }),
            }),
            C.jsx("div", {
              className: "space-error-subtitle",
              children: C.jsx("span", {
                className: "space-typing-text",
                "aria-hidden": "true",
                children: "Lost in the void of space...",
              }),
            }),
            C.jsxs("div", {
              className: "error-id-display",
              "aria-label": "Error identifier",
              children: [
                C.jsx("div", { className: "scan-line" }),
                C.jsx("div", {
                  className: "error-label",
                  children: "ERROR_ID",
                }),
                C.jsx("div", {
                  className: "error-value",
                  children: C.jsx("code", { children: this.state.errorId }),
                }),
                C.jsxs("div", {
                  style: {
                    marginTop: "8px",
                    display: "flex",
                    gap: "8px",
                    justifyContent: "center",
                  },
                  children: [
                    C.jsx("button", {
                      className: "small-btn",
                      onClick: this.copyErrorId,
                      "aria-label": "Copy error id",
                      children: this.state.copied ? "COPIED" : "COPY ID",
                    }),
                    C.jsx("a", {
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
            C.jsxs("div", {
              className: "action-panel",
              children: [
                C.jsxs("button", {
                  className: "cyber-btn primary",
                  onClick: this.handleGoHome,
                  children: [
                    C.jsx("span", {
                      className: "btn-text",
                      children: "RETURN HOME",
                    }),
                    C.jsx("div", { className: "btn-glow" }),
                  ],
                }),
                C.jsxs("button", {
                  className: "cyber-btn primary",
                  onClick: this.openModal,
                  children: [
                    C.jsx("span", {
                      className: "btn-text",
                      children: "📊 VIEW LOGS",
                    }),
                    C.jsx("div", { className: "btn-glow" }),
                  ],
                }),
              ],
            }),
            this.state.showModal &&
              C.jsx("div", {
                className: "space-modal-backdrop",
                onClick: this.closeModal,
                children: C.jsxs("div", {
                  className: "space-modal",
                  onClick: (d) => d.stopPropagation(),
                  children: [
                    C.jsxs("div", {
                      className: "space-modal-header",
                      children: [
                        C.jsx("h2", { children: "⚙ Error Diagnostics ⚙" }),
                        C.jsx("button", {
                          className: "space-modal-close",
                          onClick: this.closeModal,
                          children: "✖",
                        }),
                      ],
                    }),
                    C.jsxs("div", {
                      className: "space-modal-content",
                      children: [
                        C.jsxs("div", {
                          className: "space-log-line",
                          children: [
                            C.jsx("span", {
                              className: "space-log-label",
                              children: "ERROR:",
                            }),
                            C.jsx("span", {
                              className: "space-log-value",
                              children:
                                ((f = this.state.error) == null
                                  ? void 0
                                  : f.message) || "Unknown anomaly detected",
                            }),
                          ],
                        }),
                        this.state.errorInfo &&
                          C.jsxs("div", {
                            className: "space-stack-container",
                            children: [
                              C.jsx("div", {
                                className: "space-stack-label",
                                children: "STACK TRACE:",
                              }),
                              C.jsx("div", {
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
            C.jsxs("div", {
              className: "footer-info",
              children: [
                C.jsxs("div", {
                  className: "footer-line",
                  children: ["REF: ", this.state.errorId],
                }),
                C.jsx("div", {
                  className: "footer-line",
                  children: "AWAITING SYSTEM RECOVERY...",
                }),
              ],
            }),
          ],
        }),
        C.jsx("style", {
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
 */ const ng = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  ug = (i) =>
    i.replace(/^([A-Z])|[\s-_]+(\w)/g, (r, o, f) =>
      f ? f.toUpperCase() : o.toLowerCase(),
    ),
  Ch = (i) => {
    const r = ug(i);
    return r.charAt(0).toUpperCase() + r.slice(1);
  },
  i0 = (...i) =>
    i
      .filter((r, o, f) => !!r && r.trim() !== "" && f.indexOf(r) === o)
      .join(" ")
      .trim(),
  ig = (i) => {
    for (const r in i)
      if (r.startsWith("aria-") || r === "role" || r === "title") return !0;
  };
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var rg = {
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
 */ const cg = q.forwardRef((m, g) => {
  var M = m,
    {
      color: i = "currentColor",
      size: r = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: f,
      className: d = "",
      children: v,
      iconNode: y,
    } = M,
    D = of(M, [
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
    Mu(
      Mu(
        eh(Mu({ ref: g }, rg), {
          width: r,
          height: r,
          stroke: i,
          strokeWidth: f ? (Number(o) * 24) / Number(r) : o,
          className: i0("lucide", d),
        }),
        !v && !ig(D) && { "aria-hidden": "true" },
      ),
      D,
    ),
    [
      ...y.map(([z, j]) => q.createElement(z, j)),
      ...(Array.isArray(v) ? v : [v]),
    ],
  );
});
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lr = (i, r) => {
  const o = q.forwardRef((y, v) => {
    var D = y,
      { className: f } = D,
      d = of(D, ["className"]);
    return q.createElement(
      cg,
      Mu(
        {
          ref: v,
          iconNode: r,
          className: i0(`lucide-${ng(Ch(i))}`, `lucide-${i}`, f),
        },
        d,
      ),
    );
  });
  return (o.displayName = Ch(i)), o;
};
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fg = [
    [
      "path",
      {
        d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",
        key: "1qvrer",
      },
    ],
    ["path", { d: "M6 17h12", key: "1jwigz" }],
  ],
  og = lr("chef-hat", fg);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sg = [
    [
      "path",
      {
        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        key: "mvr1a0",
      },
    ],
  ],
  dg = lr("heart", sg);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hg = [
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
  Hh = lr("sparkles", hg);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mg = [
    ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
    ["path", { d: "M7 2v20", key: "1473qp" }],
    [
      "path",
      { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" },
    ],
  ],
  vg = lr("utensils", mg);
function r0() {
  const [i, r] = q.useState(0),
    [o, f] = q.useState(0);
  q.useEffect(() => {
    const v = setInterval(() => {
      r((y) => (y + 2) % 360);
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
  return C.jsxs("div", {
    className:
      "min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 flex items-center justify-center p-3 sm:p-4 relative overflow-hidden",
    children: [
      C.jsxs("div", {
        className: "absolute inset-0",
        children: [
          C.jsx("div", {
            className:
              "absolute -top-32 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob",
          }),
          C.jsx("div", {
            className:
              "absolute -top-20 -right-32 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000",
          }),
          C.jsx("div", {
            className:
              "absolute -bottom-32 left-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000",
          }),
          C.jsx("div", {
            className:
              "absolute -bottom-32 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-6000",
          }),
          C.jsx("div", {
            className: "absolute inset-0 opacity-5",
            style: {
              backgroundImage:
                "linear-gradient(rgba(100, 200, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 200, 255, 0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            },
          }),
        ],
      }),
      C.jsx("div", {
        className: "relative z-10 w-full max-w-2xl mx-auto",
        children: C.jsxs("div", {
          className:
            "flex flex-col items-center justify-center min-h-screen sm:min-h-auto",
          children: [
            C.jsx("div", {
              className:
                "absolute top-8 sm:top-16 left-2 sm:left-6 opacity-70 animate-float",
              children: C.jsxs("div", {
                className: "relative",
                children: [
                  C.jsx("div", {
                    className:
                      "absolute inset-0 bg-pink-500 blur-lg opacity-50 rounded-full",
                  }),
                  C.jsx(dg, {
                    className:
                      "w-6 h-6 sm:w-8 sm:h-8 text-pink-400 fill-pink-400 relative",
                  }),
                ],
              }),
            }),
            C.jsx("div", {
              className:
                "absolute top-16 sm:top-28 right-2 sm:right-6 opacity-70 animate-float",
              style: { animationDelay: "1s" },
              children: C.jsxs("div", {
                className: "relative",
                children: [
                  C.jsx("div", {
                    className:
                      "absolute inset-0 bg-cyan-500 blur-lg opacity-50 rounded-full",
                  }),
                  C.jsx(vg, {
                    className: "w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 relative",
                  }),
                ],
              }),
            }),
            C.jsxs("div", {
              className:
                "text-center space-y-6 sm:space-y-10 px-3 sm:px-4 w-full",
              children: [
                C.jsxs("div", {
                  className:
                    "flex justify-center mb-6 sm:mb-10 relative h-40 sm:h-64 w-40 sm:w-64 mx-auto",
                  children: [
                    C.jsx("div", {
                      className:
                        "absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-20 blur-2xl animate-pulse",
                    }),
                    C.jsxs("div", {
                      className: "absolute inset-0",
                      children: [
                        C.jsx("div", {
                          className:
                            "absolute inset-0 rounded-full border-2 sm:border-3 border-transparent border-t-cyan-400 border-r-pink-400 border-b-purple-400",
                          style: {
                            animation: "spin 6s linear infinite",
                            boxShadow:
                              "0 0 20px sm:0 0 30px rgba(34, 211, 238, 0.5), inset 0 0 20px sm:inset 0 0 30px rgba(34, 211, 238, 0.2)",
                          },
                        }),
                        C.jsx("div", {
                          className:
                            "absolute inset-3 sm:inset-6 rounded-full border-2 sm:border-3 border-transparent border-t-pink-400 border-r-purple-500 border-b-cyan-400",
                          style: {
                            animation: "spin 8s linear reverse",
                            boxShadow:
                              "0 0 15px sm:0 0 25px rgba(236, 72, 153, 0.4), inset 0 0 15px sm:inset 0 0 25px rgba(236, 72, 153, 0.15)",
                          },
                        }),
                        C.jsx("div", {
                          className:
                            "absolute inset-6 sm:inset-12 rounded-full border-2 sm:border-3 border-transparent border-t-purple-400 border-r-emerald-400 border-b-pink-400",
                          style: {
                            animation: "spin 10s linear infinite",
                            boxShadow:
                              "0 0 15px sm:0 0 20px rgba(168, 85, 245, 0.4), inset 0 0 15px sm:inset 0 0 20px rgba(168, 85, 245, 0.15)",
                          },
                        }),
                        C.jsxs("div", {
                          className:
                            "absolute inset-9 sm:inset-16 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 shadow-2xl flex items-center justify-center",
                          children: [
                            C.jsx("div", {
                              className:
                                "absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300 to-pink-300 animate-pulse opacity-30",
                            }),
                            C.jsx("div", {
                              className:
                                "absolute -inset-3 sm:-inset-4 rounded-full border border-cyan-400/30 animate-pulse",
                            }),
                            C.jsxs("div", {
                              className:
                                "relative flex items-center justify-center gap-1 sm:gap-2",
                              children: [
                                C.jsx(og, {
                                  className:
                                    "w-6 h-6 sm:w-10 sm:h-10 text-white fill-white animate-bounce",
                                }),
                                C.jsx("span", {
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
                      C.jsx(
                        "div",
                        {
                          className: "absolute w-6 h-6 sm:w-10 sm:h-10",
                          style: {
                            animation: "orbit 8s linear infinite",
                            animationDelay: `${v * 2}s`,
                          },
                          children: C.jsx("div", {
                            className: `w-full h-full rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold shadow-lg backdrop-blur-sm
                    ${v % 3 === 0 ? "bg-cyan-500/30 border border-cyan-400 shadow-cyan-500/50" : v % 3 === 1 ? "bg-pink-500/30 border border-pink-400 shadow-pink-500/50" : "bg-purple-500/30 border border-purple-400 shadow-purple-500/50"}`,
                            children:
                              v % 3 === 0 ? "🍜" : v % 3 === 1 ? "🍱" : "🍕",
                          }),
                        },
                        v,
                      ),
                    ),
                    C.jsx("div", {
                      className: "absolute top-0 left-1/4 animate-float",
                      style: { animationDelay: "0s" },
                      children: C.jsx(Hh, {
                        className:
                          "w-3 h-3 sm:w-5 sm:h-5 text-cyan-300 opacity-60",
                      }),
                    }),
                    C.jsx("div", {
                      className: "absolute bottom-1/4 right-1/4 animate-float",
                      style: { animationDelay: "1.5s" },
                      children: C.jsx(Hh, {
                        className:
                          "w-3 h-3 sm:w-5 sm:h-5 text-pink-300 opacity-60",
                      }),
                    }),
                  ],
                }),
                C.jsxs("div", {
                  className: "space-y-3 sm:space-y-4",
                  children: [
                    C.jsx("h2", {
                      className:
                        "text-2xl sm:text-5xl font-black bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse drop-shadow-lg",
                      children: "FoodEase",
                    }),
                    C.jsxs("div", {
                      className: "flex flex-col items-center gap-3",
                      children: [
                        C.jsxs("div", {
                          className:
                            "inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-cyan-500/30 backdrop-blur-md",
                          children: [
                            C.jsx("span", {
                              className: "text-2xl sm:text-3xl",
                              children: d[o].icon,
                            }),
                            C.jsx("span", {
                              className:
                                "text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent",
                              children: d[o].text,
                            }),
                            C.jsxs("span", {
                              className: "inline-flex gap-1.5",
                              children: [
                                C.jsx("span", {
                                  className:
                                    "w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce shadow-lg shadow-cyan-500/50",
                                }),
                                C.jsx("span", {
                                  className:
                                    "w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full animate-bounce shadow-lg shadow-pink-500/50",
                                  style: { animationDelay: "0.15s" },
                                }),
                                C.jsx("span", {
                                  className:
                                    "w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full animate-bounce shadow-lg shadow-purple-500/50",
                                  style: { animationDelay: "0.3s" },
                                }),
                              ],
                            }),
                          ],
                        }),
                        C.jsx("p", {
                          className:
                            "text-xs sm:text-sm bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-semibold",
                          children: "Delicious moments loading...",
                        }),
                      ],
                    }),
                  ],
                }),
                C.jsxs("div", {
                  className: "space-y-2 sm:space-y-3 max-w-md mx-auto",
                  children: [
                    C.jsx("div", {
                      className:
                        "w-full bg-gradient-to-r from-slate-800 to-slate-900 rounded-full h-2.5 sm:h-4 overflow-hidden shadow-2xl border border-cyan-500/20",
                      children: C.jsx("div", {
                        className:
                          "h-full bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 rounded-full",
                        style: {
                          animation: "progress 3s ease-in-out infinite",
                          boxShadow:
                            "0 0 20px rgba(34, 211, 238, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.3)",
                        },
                      }),
                    }),
                    C.jsx("div", {
                      className: "text-center",
                      children: C.jsx("span", {
                        className:
                          "text-xs sm:text-sm bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent font-bold",
                        children: "Initializing...",
                      }),
                    }),
                  ],
                }),
                C.jsx("div", {
                  className: "flex gap-3 sm:gap-8 justify-center pb-4 sm:pb-0",
                  children: ["🍕", "🍔", "🍰"].map((v, y) =>
                    C.jsxs(
                      "div",
                      {
                        className:
                          "text-2xl sm:text-4xl animate-float relative",
                        style: { animationDelay: `${y * 0.2}s` },
                        children: [
                          C.jsx("div", {
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
                          C.jsx("span", { className: "relative", children: v }),
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
      C.jsx("style", {
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
const yg = q.createContext(),
  gg = ({ children: i }) => {
    const [r, o] = q.useState(null),
      [f, d] = q.useState(null);
    return C.jsx(yg.Provider, {
      value: { user: r, setUser: o, device: f, setDevice: d },
      children: i,
    });
  },
  pg = q.lazy(() => pv(() => import("./SystemGuard.js"), [])),
  bg = Zy(
    [
      {
        path: "*",
        element: C.jsx(ag, { children: C.jsx(pg, {}) }),
        HydrateFallback: C.jsx(r0, {}),
      },
    ],
    { future: { v7_startTransition: !0 } },
  );
_v.createRoot(document.getElementById("ajayos")).render(
  C.jsx(Lh.StrictMode, {
    children: C.jsx(q.Suspense, {
      fallback: C.jsx(r0, {}),
      children: C.jsx(gg, { children: C.jsx(eg, { router: bg }) }),
    }),
  }),
);
export {
  og as C,
  r0 as F,
  Hh as S,
  yg as U,
  Eg as a,
  Tf as b,
  lr as c,
  vg as d,
  Dg as e,
  xg as g,
  C as j,
  q as r,
  Tg as u,
};
