var pb = Object.defineProperty,
  mb = Object.defineProperties;
var xb = Object.getOwnPropertyDescriptors;
var Yl = Object.getOwnPropertySymbols;
var Sx = Object.prototype.hasOwnProperty,
  Cx = Object.prototype.propertyIsEnumerable;
var Yr = (n, i) => ((i = Symbol[n]) ? i : Symbol.for("Symbol." + n)),
  yb = (n) => {
    throw TypeError(n);
  };
var Ax = (n, i, a) =>
    i in n
      ? pb(n, i, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (n[i] = a),
  le = (n, i) => {
    for (var a in i || (i = {})) Sx.call(i, a) && Ax(n, a, i[a]);
    if (Yl) for (var a of Yl(i)) Cx.call(i, a) && Ax(n, a, i[a]);
    return n;
  },
  Ue = (n, i) => mb(n, xb(i));
var hn = (n, i) => {
  var a = {};
  for (var s in n) Sx.call(n, s) && i.indexOf(s) < 0 && (a[s] = n[s]);
  if (n != null && Yl)
    for (var s of Yl(n)) i.indexOf(s) < 0 && Cx.call(n, s) && (a[s] = n[s]);
  return a;
};
var $a = function (n, i) {
    (this[0] = n), (this[1] = i);
  },
  _f = (n, i, a) => {
    var s = (f, p, m, d) => {
        try {
          var x = a[f](p),
            y = (p = x.value) instanceof $a,
            v = x.done;
          Promise.resolve(y ? p[0] : p)
            .then((E) =>
              y
                ? s(
                    f === "return" ? f : "next",
                    p[1] ? { done: E.done, value: E.value } : E,
                    m,
                    d,
                  )
                : m({ value: E, done: v }),
            )
            .catch((E) => s("throw", E, m, d));
        } catch (E) {
          d(E);
        }
      },
      l = (f) => (c[f] = (p) => new Promise((m, d) => s(f, p, m, d))),
      c = {};
    return (
      (a = a.apply(n, i)),
      (c[Yr("asyncIterator")] = () => c),
      l("next"),
      l("throw"),
      l("return"),
      c
    );
  },
  Tf = (n) => {
    var i = n[Yr("asyncIterator")],
      a = !1,
      s,
      l = {};
    return (
      i == null
        ? ((i = n[Yr("iterator")]()), (s = (c) => (l[c] = (f) => i[c](f))))
        : ((i = i.call(n)),
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
                  value: new $a(
                    new Promise((p) => {
                      var m = i[c](f);
                      m instanceof Object || yb("Object expected"), p(m);
                    }),
                    1,
                  ),
                }
              );
            }))),
      (l[Yr("iterator")] = () => l),
      s("next"),
      "throw" in i
        ? s("throw")
        : (l.throw = (c) => {
            throw c;
          }),
      "return" in i && s("return"),
      l
    );
  },
  Dx = (n, i, a) =>
    (i = n[Yr("asyncIterator")])
      ? i.call(n)
      : ((n = n[Yr("iterator")]()),
        (i = {}),
        (a = (s, l) =>
          (l = n[s]) &&
          (i[s] = (c) =>
            new Promise(
              (f, p, m) => (
                (c = l.call(n, c)),
                (m = c.done),
                Promise.resolve(c.value).then(
                  (d) => f({ value: d, done: m }),
                  p,
                )
              ),
            ))),
        a("next"),
        a("return"),
        i);
function bg(n, i) {
  for (var a = 0; a < i.length; a++) {
    const s = i[a];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const l in s)
        if (l !== "default" && !(l in n)) {
          const c = Object.getOwnPropertyDescriptor(s, l);
          c &&
            Object.defineProperty(
              n,
              l,
              c.get ? c : { enumerable: !0, get: () => s[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
  );
}
var Rf =
  typeof globalThis != "undefined"
    ? globalThis
    : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
        ? global
        : typeof self != "undefined"
          ? self
          : {};
function ic(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
function vb(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var i = n.default;
  if (typeof i == "function") {
    var a = function s() {
      return this instanceof s
        ? Reflect.construct(i, arguments, this.constructor)
        : i.apply(this, arguments);
    };
    a.prototype = i.prototype;
  } else a = {};
  return (
    Object.defineProperty(a, "__esModule", { value: !0 }),
    Object.keys(n).forEach(function (s) {
      var l = Object.getOwnPropertyDescriptor(n, s);
      Object.defineProperty(
        a,
        s,
        l.get
          ? l
          : {
              enumerable: !0,
              get: function () {
                return n[s];
              },
            },
      );
    }),
    a
  );
}
var wf = { exports: {} },
  Is = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bx;
function gb() {
  if (Bx) return Is;
  Bx = 1;
  var n = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function a(s, l, c) {
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
      { $$typeof: n, type: s, key: f, ref: l !== void 0 ? l : null, props: c }
    );
  }
  return (Is.Fragment = i), (Is.jsx = a), (Is.jsxs = a), Is;
}
var _x;
function Eb() {
  return _x || ((_x = 1), (wf.exports = gb())), wf.exports;
}
var Xi = Eb(),
  Mf = { exports: {} },
  we = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tx;
function bb() {
  if (Tx) return we;
  Tx = 1;
  var n = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    d = Symbol.for("react.memo"),
    x = Symbol.for("react.lazy"),
    y = Symbol.for("react.activity"),
    v = Symbol.iterator;
  function E(T) {
    return T === null || typeof T != "object"
      ? null
      : ((T = (v && T[v]) || T["@@iterator"]),
        typeof T == "function" ? T : null);
  }
  var b = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    S = Object.assign,
    A = {};
  function w(T, N, P) {
    (this.props = T),
      (this.context = N),
      (this.refs = A),
      (this.updater = P || b);
  }
  (w.prototype.isReactComponent = {}),
    (w.prototype.setState = function (T, N) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, T, N, "setState");
    }),
    (w.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    });
  function C() {}
  C.prototype = w.prototype;
  function D(T, N, P) {
    (this.props = T),
      (this.context = N),
      (this.refs = A),
      (this.updater = P || b);
  }
  var R = (D.prototype = new C());
  (R.constructor = D), S(R, w.prototype), (R.isPureReactComponent = !0);
  var M = Array.isArray;
  function L() {}
  var _ = { H: null, A: null, T: null, S: null },
    O = Object.prototype.hasOwnProperty;
  function $(T, N, P) {
    var Y = P.ref;
    return {
      $$typeof: n,
      type: T,
      key: N,
      ref: Y !== void 0 ? Y : null,
      props: P,
    };
  }
  function z(T, N) {
    return $(T.type, N, T.props);
  }
  function j(T) {
    return typeof T == "object" && T !== null && T.$$typeof === n;
  }
  function Q(T) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      T.replace(/[=:]/g, function (P) {
        return N[P];
      })
    );
  }
  var ee = /\/+/g;
  function oe(T, N) {
    return typeof T == "object" && T !== null && T.key != null
      ? Q("" + T.key)
      : N.toString(36);
  }
  function de(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (
          (typeof T.status == "string"
            ? T.then(L, L)
            : ((T.status = "pending"),
              T.then(
                function (N) {
                  T.status === "pending" &&
                    ((T.status = "fulfilled"), (T.value = N));
                },
                function (N) {
                  T.status === "pending" &&
                    ((T.status = "rejected"), (T.reason = N));
                },
              )),
          T.status)
        ) {
          case "fulfilled":
            return T.value;
          case "rejected":
            throw T.reason;
        }
    }
    throw T;
  }
  function k(T, N, P, Y, ue) {
    var pe = typeof T;
    (pe === "undefined" || pe === "boolean") && (T = null);
    var Ce = !1;
    if (T === null) Ce = !0;
    else
      switch (pe) {
        case "bigint":
        case "string":
        case "number":
          Ce = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case n:
            case i:
              Ce = !0;
              break;
            case x:
              return (Ce = T._init), k(Ce(T._payload), N, P, Y, ue);
          }
      }
    if (Ce)
      return (
        (ue = ue(T)),
        (Ce = Y === "" ? "." + oe(T, 0) : Y),
        M(ue)
          ? ((P = ""),
            Ce != null && (P = Ce.replace(ee, "$&/") + "/"),
            k(ue, N, P, "", function (tn) {
              return tn;
            }))
          : ue != null &&
            (j(ue) &&
              (ue = z(
                ue,
                P +
                  (ue.key == null || (T && T.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(ee, "$&/") + "/") +
                  Ce,
              )),
            N.push(ue)),
        1
      );
    Ce = 0;
    var be = Y === "" ? "." : Y + ":";
    if (M(T))
      for (var Qe = 0; Qe < T.length; Qe++)
        (Y = T[Qe]), (pe = be + oe(Y, Qe)), (Ce += k(Y, N, P, pe, ue));
    else if (((Qe = E(T)), typeof Qe == "function"))
      for (T = Qe.call(T), Qe = 0; !(Y = T.next()).done; )
        (Y = Y.value), (pe = be + oe(Y, Qe++)), (Ce += k(Y, N, P, pe, ue));
    else if (pe === "object") {
      if (typeof T.then == "function") return k(de(T), N, P, Y, ue);
      throw (
        ((N = String(T)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(T).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return Ce;
  }
  function te(T, N, P) {
    if (T == null) return T;
    var Y = [],
      ue = 0;
    return (
      k(T, Y, "", "", function (pe) {
        return N.call(P, pe, ue++);
      }),
      Y
    );
  }
  function ie(T) {
    if (T._status === -1) {
      var N = T._result;
      (N = N()),
        N.then(
          function (P) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 1), (T._result = P));
          },
          function (P) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 2), (T._result = P));
          },
        ),
        T._status === -1 && ((T._status = 0), (T._result = N));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var me =
      typeof reportError == "function"
        ? reportError
        : function (T) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var N = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof T == "object" &&
                  T !== null &&
                  typeof T.message == "string"
                    ? String(T.message)
                    : String(T),
                error: T,
              });
              if (!window.dispatchEvent(N)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", T);
              return;
            }
            console.error(T);
          },
    xe = {
      map: te,
      forEach: function (T, N, P) {
        te(
          T,
          function () {
            N.apply(this, arguments);
          },
          P,
        );
      },
      count: function (T) {
        var N = 0;
        return (
          te(T, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (T) {
        return (
          te(T, function (N) {
            return N;
          }) || []
        );
      },
      only: function (T) {
        if (!j(T))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return T;
      },
    };
  return (
    (we.Activity = y),
    (we.Children = xe),
    (we.Component = w),
    (we.Fragment = a),
    (we.Profiler = l),
    (we.PureComponent = D),
    (we.StrictMode = s),
    (we.Suspense = m),
    (we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _),
    (we.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (T) {
        return _.H.useMemoCache(T);
      },
    }),
    (we.cache = function (T) {
      return function () {
        return T.apply(null, arguments);
      };
    }),
    (we.cacheSignal = function () {
      return null;
    }),
    (we.cloneElement = function (T, N, P) {
      if (T == null)
        throw Error(
          "The argument must be a React element, but you passed " + T + ".",
        );
      var Y = S({}, T.props),
        ue = T.key;
      if (N != null)
        for (pe in (N.key !== void 0 && (ue = "" + N.key), N))
          !O.call(N, pe) ||
            pe === "key" ||
            pe === "__self" ||
            pe === "__source" ||
            (pe === "ref" && N.ref === void 0) ||
            (Y[pe] = N[pe]);
      var pe = arguments.length - 2;
      if (pe === 1) Y.children = P;
      else if (1 < pe) {
        for (var Ce = Array(pe), be = 0; be < pe; be++)
          Ce[be] = arguments[be + 2];
        Y.children = Ce;
      }
      return $(T.type, ue, Y);
    }),
    (we.createContext = function (T) {
      return (
        (T = {
          $$typeof: f,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (T.Provider = T),
        (T.Consumer = { $$typeof: c, _context: T }),
        T
      );
    }),
    (we.createElement = function (T, N, P) {
      var Y,
        ue = {},
        pe = null;
      if (N != null)
        for (Y in (N.key !== void 0 && (pe = "" + N.key), N))
          O.call(N, Y) &&
            Y !== "key" &&
            Y !== "__self" &&
            Y !== "__source" &&
            (ue[Y] = N[Y]);
      var Ce = arguments.length - 2;
      if (Ce === 1) ue.children = P;
      else if (1 < Ce) {
        for (var be = Array(Ce), Qe = 0; Qe < Ce; Qe++)
          be[Qe] = arguments[Qe + 2];
        ue.children = be;
      }
      if (T && T.defaultProps)
        for (Y in ((Ce = T.defaultProps), Ce))
          ue[Y] === void 0 && (ue[Y] = Ce[Y]);
      return $(T, pe, ue);
    }),
    (we.createRef = function () {
      return { current: null };
    }),
    (we.forwardRef = function (T) {
      return { $$typeof: p, render: T };
    }),
    (we.isValidElement = j),
    (we.lazy = function (T) {
      return { $$typeof: x, _payload: { _status: -1, _result: T }, _init: ie };
    }),
    (we.memo = function (T, N) {
      return { $$typeof: d, type: T, compare: N === void 0 ? null : N };
    }),
    (we.startTransition = function (T) {
      var N = _.T,
        P = {};
      _.T = P;
      try {
        var Y = T(),
          ue = _.S;
        ue !== null && ue(P, Y),
          typeof Y == "object" &&
            Y !== null &&
            typeof Y.then == "function" &&
            Y.then(L, me);
      } catch (pe) {
        me(pe);
      } finally {
        N !== null && P.types !== null && (N.types = P.types), (_.T = N);
      }
    }),
    (we.unstable_useCacheRefresh = function () {
      return _.H.useCacheRefresh();
    }),
    (we.use = function (T) {
      return _.H.use(T);
    }),
    (we.useActionState = function (T, N, P) {
      return _.H.useActionState(T, N, P);
    }),
    (we.useCallback = function (T, N) {
      return _.H.useCallback(T, N);
    }),
    (we.useContext = function (T) {
      return _.H.useContext(T);
    }),
    (we.useDebugValue = function () {}),
    (we.useDeferredValue = function (T, N) {
      return _.H.useDeferredValue(T, N);
    }),
    (we.useEffect = function (T, N) {
      return _.H.useEffect(T, N);
    }),
    (we.useEffectEvent = function (T) {
      return _.H.useEffectEvent(T);
    }),
    (we.useId = function () {
      return _.H.useId();
    }),
    (we.useImperativeHandle = function (T, N, P) {
      return _.H.useImperativeHandle(T, N, P);
    }),
    (we.useInsertionEffect = function (T, N) {
      return _.H.useInsertionEffect(T, N);
    }),
    (we.useLayoutEffect = function (T, N) {
      return _.H.useLayoutEffect(T, N);
    }),
    (we.useMemo = function (T, N) {
      return _.H.useMemo(T, N);
    }),
    (we.useOptimistic = function (T, N) {
      return _.H.useOptimistic(T, N);
    }),
    (we.useReducer = function (T, N, P) {
      return _.H.useReducer(T, N, P);
    }),
    (we.useRef = function (T) {
      return _.H.useRef(T);
    }),
    (we.useState = function (T) {
      return _.H.useState(T);
    }),
    (we.useSyncExternalStore = function (T, N, P) {
      return _.H.useSyncExternalStore(T, N, P);
    }),
    (we.useTransition = function () {
      return _.H.useTransition();
    }),
    (we.version = "19.2.0"),
    we
  );
}
var Rx;
function jh() {
  return Rx || ((Rx = 1), (Mf.exports = bb())), Mf.exports;
}
var J = jh();
const Ab = ic(J),
  Sb = bg({ __proto__: null, default: Ab }, [J]);
var Of = { exports: {} },
  eo = {},
  Ff = { exports: {} },
  zf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wx;
function Cb() {
  return (
    wx ||
      ((wx = 1),
      (function (n) {
        function i(k, te) {
          var ie = k.length;
          k.push(te);
          e: for (; 0 < ie; ) {
            var me = (ie - 1) >>> 1,
              xe = k[me];
            if (0 < l(xe, te)) (k[me] = te), (k[ie] = xe), (ie = me);
            else break e;
          }
        }
        function a(k) {
          return k.length === 0 ? null : k[0];
        }
        function s(k) {
          if (k.length === 0) return null;
          var te = k[0],
            ie = k.pop();
          if (ie !== te) {
            k[0] = ie;
            e: for (var me = 0, xe = k.length, T = xe >>> 1; me < T; ) {
              var N = 2 * (me + 1) - 1,
                P = k[N],
                Y = N + 1,
                ue = k[Y];
              if (0 > l(P, ie))
                Y < xe && 0 > l(ue, P)
                  ? ((k[me] = ue), (k[Y] = ie), (me = Y))
                  : ((k[me] = P), (k[N] = ie), (me = N));
              else if (Y < xe && 0 > l(ue, ie))
                (k[me] = ue), (k[Y] = ie), (me = Y);
              else break e;
            }
          }
          return te;
        }
        function l(k, te) {
          var ie = k.sortIndex - te.sortIndex;
          return ie !== 0 ? ie : k.id - te.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var c = performance;
          n.unstable_now = function () {
            return c.now();
          };
        } else {
          var f = Date,
            p = f.now();
          n.unstable_now = function () {
            return f.now() - p;
          };
        }
        var m = [],
          d = [],
          x = 1,
          y = null,
          v = 3,
          E = !1,
          b = !1,
          S = !1,
          A = !1,
          w = typeof setTimeout == "function" ? setTimeout : null,
          C = typeof clearTimeout == "function" ? clearTimeout : null,
          D = typeof setImmediate != "undefined" ? setImmediate : null;
        function R(k) {
          for (var te = a(d); te !== null; ) {
            if (te.callback === null) s(d);
            else if (te.startTime <= k)
              s(d), (te.sortIndex = te.expirationTime), i(m, te);
            else break;
            te = a(d);
          }
        }
        function M(k) {
          if (((S = !1), R(k), !b))
            if (a(m) !== null) (b = !0), L || ((L = !0), Q());
            else {
              var te = a(d);
              te !== null && de(M, te.startTime - k);
            }
        }
        var L = !1,
          _ = -1,
          O = 5,
          $ = -1;
        function z() {
          return A ? !0 : !(n.unstable_now() - $ < O);
        }
        function j() {
          if (((A = !1), L)) {
            var k = n.unstable_now();
            $ = k;
            var te = !0;
            try {
              e: {
                (b = !1), S && ((S = !1), C(_), (_ = -1)), (E = !0);
                var ie = v;
                try {
                  t: {
                    for (
                      R(k), y = a(m);
                      y !== null && !(y.expirationTime > k && z());

                    ) {
                      var me = y.callback;
                      if (typeof me == "function") {
                        (y.callback = null), (v = y.priorityLevel);
                        var xe = me(y.expirationTime <= k);
                        if (((k = n.unstable_now()), typeof xe == "function")) {
                          (y.callback = xe), R(k), (te = !0);
                          break t;
                        }
                        y === a(m) && s(m), R(k);
                      } else s(m);
                      y = a(m);
                    }
                    if (y !== null) te = !0;
                    else {
                      var T = a(d);
                      T !== null && de(M, T.startTime - k), (te = !1);
                    }
                  }
                  break e;
                } finally {
                  (y = null), (v = ie), (E = !1);
                }
                te = void 0;
              }
            } finally {
              te ? Q() : (L = !1);
            }
          }
        }
        var Q;
        if (typeof D == "function")
          Q = function () {
            D(j);
          };
        else if (typeof MessageChannel != "undefined") {
          var ee = new MessageChannel(),
            oe = ee.port2;
          (ee.port1.onmessage = j),
            (Q = function () {
              oe.postMessage(null);
            });
        } else
          Q = function () {
            w(j, 0);
          };
        function de(k, te) {
          _ = w(function () {
            k(n.unstable_now());
          }, te);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (k) {
            k.callback = null;
          }),
          (n.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (O = 0 < k ? Math.floor(1e3 / k) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return v;
          }),
          (n.unstable_next = function (k) {
            switch (v) {
              case 1:
              case 2:
              case 3:
                var te = 3;
                break;
              default:
                te = v;
            }
            var ie = v;
            v = te;
            try {
              return k();
            } finally {
              v = ie;
            }
          }),
          (n.unstable_requestPaint = function () {
            A = !0;
          }),
          (n.unstable_runWithPriority = function (k, te) {
            switch (k) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                k = 3;
            }
            var ie = v;
            v = k;
            try {
              return te();
            } finally {
              v = ie;
            }
          }),
          (n.unstable_scheduleCallback = function (k, te, ie) {
            var me = n.unstable_now();
            switch (
              (typeof ie == "object" && ie !== null
                ? ((ie = ie.delay),
                  (ie = typeof ie == "number" && 0 < ie ? me + ie : me))
                : (ie = me),
              k)
            ) {
              case 1:
                var xe = -1;
                break;
              case 2:
                xe = 250;
                break;
              case 5:
                xe = 1073741823;
                break;
              case 4:
                xe = 1e4;
                break;
              default:
                xe = 5e3;
            }
            return (
              (xe = ie + xe),
              (k = {
                id: x++,
                callback: te,
                priorityLevel: k,
                startTime: ie,
                expirationTime: xe,
                sortIndex: -1,
              }),
              ie > me
                ? ((k.sortIndex = ie),
                  i(d, k),
                  a(m) === null &&
                    k === a(d) &&
                    (S ? (C(_), (_ = -1)) : (S = !0), de(M, ie - me)))
                : ((k.sortIndex = xe),
                  i(m, k),
                  b || E || ((b = !0), L || ((L = !0), Q()))),
              k
            );
          }),
          (n.unstable_shouldYield = z),
          (n.unstable_wrapCallback = function (k) {
            var te = v;
            return function () {
              var ie = v;
              v = te;
              try {
                return k.apply(this, arguments);
              } finally {
                v = ie;
              }
            };
          });
      })(zf)),
    zf
  );
}
var Mx;
function Db() {
  return Mx || ((Mx = 1), (Ff.exports = Cb())), Ff.exports;
}
var Nf = { exports: {} },
  Zt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ox;
function Bb() {
  if (Ox) return Zt;
  Ox = 1;
  var n = jh();
  function i(m) {
    var d = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      d += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        d += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return (
      "Minified React error #" +
      m +
      "; visit " +
      d +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function a() {}
  var s = {
      d: {
        f: a,
        r: function () {
          throw Error(i(522));
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
  function c(m, d, x) {
    var y =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: y == null ? null : "" + y,
      children: m,
      containerInfo: d,
      implementation: x,
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(m, d) {
    if (m === "font") return "";
    if (typeof d == "string") return d === "use-credentials" ? d : "";
  }
  return (
    (Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (Zt.createPortal = function (m, d) {
      var x =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!d || (d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11))
        throw Error(i(299));
      return c(m, d, null, x);
    }),
    (Zt.flushSync = function (m) {
      var d = f.T,
        x = s.p;
      try {
        if (((f.T = null), (s.p = 2), m)) return m();
      } finally {
        (f.T = d), (s.p = x), s.d.f();
      }
    }),
    (Zt.preconnect = function (m, d) {
      typeof m == "string" &&
        (d
          ? ((d = d.crossOrigin),
            (d =
              typeof d == "string"
                ? d === "use-credentials"
                  ? d
                  : ""
                : void 0))
          : (d = null),
        s.d.C(m, d));
    }),
    (Zt.prefetchDNS = function (m) {
      typeof m == "string" && s.d.D(m);
    }),
    (Zt.preinit = function (m, d) {
      if (typeof m == "string" && d && typeof d.as == "string") {
        var x = d.as,
          y = p(x, d.crossOrigin),
          v = typeof d.integrity == "string" ? d.integrity : void 0,
          E = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
        x === "style"
          ? s.d.S(m, typeof d.precedence == "string" ? d.precedence : void 0, {
              crossOrigin: y,
              integrity: v,
              fetchPriority: E,
            })
          : x === "script" &&
            s.d.X(m, {
              crossOrigin: y,
              integrity: v,
              fetchPriority: E,
              nonce: typeof d.nonce == "string" ? d.nonce : void 0,
            });
      }
    }),
    (Zt.preinitModule = function (m, d) {
      if (typeof m == "string")
        if (typeof d == "object" && d !== null) {
          if (d.as == null || d.as === "script") {
            var x = p(d.as, d.crossOrigin);
            s.d.M(m, {
              crossOrigin: x,
              integrity: typeof d.integrity == "string" ? d.integrity : void 0,
              nonce: typeof d.nonce == "string" ? d.nonce : void 0,
            });
          }
        } else d == null && s.d.M(m);
    }),
    (Zt.preload = function (m, d) {
      if (
        typeof m == "string" &&
        typeof d == "object" &&
        d !== null &&
        typeof d.as == "string"
      ) {
        var x = d.as,
          y = p(x, d.crossOrigin);
        s.d.L(m, x, {
          crossOrigin: y,
          integrity: typeof d.integrity == "string" ? d.integrity : void 0,
          nonce: typeof d.nonce == "string" ? d.nonce : void 0,
          type: typeof d.type == "string" ? d.type : void 0,
          fetchPriority:
            typeof d.fetchPriority == "string" ? d.fetchPriority : void 0,
          referrerPolicy:
            typeof d.referrerPolicy == "string" ? d.referrerPolicy : void 0,
          imageSrcSet:
            typeof d.imageSrcSet == "string" ? d.imageSrcSet : void 0,
          imageSizes: typeof d.imageSizes == "string" ? d.imageSizes : void 0,
          media: typeof d.media == "string" ? d.media : void 0,
        });
      }
    }),
    (Zt.preloadModule = function (m, d) {
      if (typeof m == "string")
        if (d) {
          var x = p(d.as, d.crossOrigin);
          s.d.m(m, {
            as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0,
            crossOrigin: x,
            integrity: typeof d.integrity == "string" ? d.integrity : void 0,
          });
        } else s.d.m(m);
    }),
    (Zt.requestFormReset = function (m) {
      s.d.r(m);
    }),
    (Zt.unstable_batchedUpdates = function (m, d) {
      return m(d);
    }),
    (Zt.useFormState = function (m, d, x) {
      return f.H.useFormState(m, d, x);
    }),
    (Zt.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (Zt.version = "19.2.0"),
    Zt
  );
}
var Fx;
function Ag() {
  if (Fx) return Nf.exports;
  Fx = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), (Nf.exports = Bb()), Nf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zx;
function _b() {
  if (zx) return eo;
  zx = 1;
  var n = Db(),
    i = jh(),
    a = Ag();
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++)
        t += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function c(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function f(e) {
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
  function p(e) {
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
  function m(e) {
    if (c(e) !== e) throw Error(s(188));
  }
  function d(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = c(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var r = e, o = t; ; ) {
      var u = r.return;
      if (u === null) break;
      var h = u.alternate;
      if (h === null) {
        if (((o = u.return), o !== null)) {
          r = o;
          continue;
        }
        break;
      }
      if (u.child === h.child) {
        for (h = u.child; h; ) {
          if (h === r) return m(u), e;
          if (h === o) return m(u), t;
          h = h.sibling;
        }
        throw Error(s(188));
      }
      if (r.return !== o.return) (r = u), (o = h);
      else {
        for (var g = !1, B = u.child; B; ) {
          if (B === r) {
            (g = !0), (r = u), (o = h);
            break;
          }
          if (B === o) {
            (g = !0), (o = u), (r = h);
            break;
          }
          B = B.sibling;
        }
        if (!g) {
          for (B = h.child; B; ) {
            if (B === r) {
              (g = !0), (r = h), (o = u);
              break;
            }
            if (B === o) {
              (g = !0), (o = h), (r = u);
              break;
            }
            B = B.sibling;
          }
          if (!g) throw Error(s(189));
        }
      }
      if (r.alternate !== o) throw Error(s(190));
    }
    if (r.tag !== 3) throw Error(s(188));
    return r.stateNode.current === r ? e : t;
  }
  function x(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = x(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign,
    v = Symbol.for("react.element"),
    E = Symbol.for("react.transitional.element"),
    b = Symbol.for("react.portal"),
    S = Symbol.for("react.fragment"),
    A = Symbol.for("react.strict_mode"),
    w = Symbol.for("react.profiler"),
    C = Symbol.for("react.consumer"),
    D = Symbol.for("react.context"),
    R = Symbol.for("react.forward_ref"),
    M = Symbol.for("react.suspense"),
    L = Symbol.for("react.suspense_list"),
    _ = Symbol.for("react.memo"),
    O = Symbol.for("react.lazy"),
    $ = Symbol.for("react.activity"),
    z = Symbol.for("react.memo_cache_sentinel"),
    j = Symbol.iterator;
  function Q(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (j && e[j]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ee = Symbol.for("react.client.reference");
  function oe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ee ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case S:
        return "Fragment";
      case w:
        return "Profiler";
      case A:
        return "StrictMode";
      case M:
        return "Suspense";
      case L:
        return "SuspenseList";
      case $:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case b:
          return "Portal";
        case D:
          return e.displayName || "Context";
        case C:
          return (e._context.displayName || "Context") + ".Consumer";
        case R:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case _:
          return (
            (t = e.displayName || null), t !== null ? t : oe(e.type) || "Memo"
          );
        case O:
          (t = e._payload), (e = e._init);
          try {
            return oe(e(t));
          } catch (r) {}
      }
    return null;
  }
  var de = Array.isArray,
    k = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    te = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ie = { pending: !1, data: null, method: null, action: null },
    me = [],
    xe = -1;
  function T(e) {
    return { current: e };
  }
  function N(e) {
    0 > xe || ((e.current = me[xe]), (me[xe] = null), xe--);
  }
  function P(e, t) {
    xe++, (me[xe] = e.current), (e.current = t);
  }
  var Y = T(null),
    ue = T(null),
    pe = T(null),
    Ce = T(null);
  function be(e, t) {
    switch ((P(pe, t), P(ue, e), P(Y, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Xm(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = Xm(t)), (e = Gm(t, e));
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
    N(Y), P(Y, e);
  }
  function Qe() {
    N(Y), N(ue), N(pe);
  }
  function tn(e) {
    e.memoizedState !== null && P(Ce, e);
    var t = Y.current,
      r = Gm(t, e.type);
    t !== r && (P(ue, e), P(Y, r));
  }
  function ri(e) {
    ue.current === e && (N(Y), N(ue)),
      Ce.current === e && (N(Ce), (Qs._currentValue = ie));
  }
  var st, Et;
  function ft(e) {
    if (st === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        (st = (t && t[1]) || ""),
          (Et =
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
      st +
      e +
      Et
    );
  }
  var si = !1;
  function Ht(e, t) {
    if (!e || si) return "";
    si = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var re = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(re.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(re, []);
                } catch (I) {
                  var Z = I;
                }
                Reflect.construct(e, [], re);
              } else {
                try {
                  re.call();
                } catch (I) {
                  Z = I;
                }
                e.call(re.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (I) {
                Z = I;
              }
              (re = e()) &&
                typeof re.catch == "function" &&
                re.catch(function () {});
            }
          } catch (I) {
            if (I && Z && typeof I.stack == "string") return [I.stack, Z.stack];
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
      var h = o.DetermineComponentFrameRoot(),
        g = h[0],
        B = h[1];
      if (g && B) {
        var F = g.split(`
`),
          G = B.split(`
`);
        for (
          u = o = 0;
          o < F.length && !F[o].includes("DetermineComponentFrameRoot");

        )
          o++;
        for (; u < G.length && !G[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (o === F.length || u === G.length)
          for (
            o = F.length - 1, u = G.length - 1;
            1 <= o && 0 <= u && F[o] !== G[u];

          )
            u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (F[o] !== G[u]) {
            if (o !== 1 || u !== 1)
              do
                if ((o--, u--, 0 > u || F[o] !== G[u])) {
                  var ne =
                    `
` + F[o].replace(" at new ", " at ");
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
      (si = !1), (Error.prepareStackTrace = r);
    }
    return (r = e ? e.displayName || e.name : "") ? ft(r) : "";
  }
  function Zi(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ft(e.type);
      case 16:
        return ft("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? ft("Suspense Fallback")
          : ft("Suspense");
      case 19:
        return ft("SuspenseList");
      case 0:
      case 15:
        return Ht(e.type, !1);
      case 11:
        return Ht(e.type.render, !1);
      case 1:
        return Ht(e.type, !0);
      case 31:
        return ft("Activity");
      default:
        return "";
    }
  }
  function oi(e) {
    try {
      var t = "",
        r = null;
      do (t += Zi(e, r)), (r = e), (e = e.return);
      while (e);
      return t;
    } catch (o) {
      return (
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack
      );
    }
  }
  var li = Object.prototype.hasOwnProperty,
    Kn = n.unstable_scheduleCallback,
    Vt = n.unstable_cancelCallback,
    Gt = n.unstable_shouldYield,
    _n = n.unstable_requestPaint,
    at = n.unstable_now,
    ui = n.unstable_getCurrentPriorityLevel,
    Tn = n.unstable_ImmediatePriority,
    Rn = n.unstable_UserBlockingPriority,
    Jt = n.unstable_NormalPriority,
    nn = n.unstable_LowPriority,
    Qi = n.unstable_IdlePriority,
    yn = n.log,
    Si = n.unstable_setDisableYieldValue,
    Kt = null,
    Ot = null;
  function an(e) {
    if (
      (typeof yn == "function" && Si(e),
      Ot && typeof Ot.setStrictMode == "function")
    )
      try {
        Ot.setStrictMode(Kt, e);
      } catch (t) {}
  }
  var Nt = Math.clz32 ? Math.clz32 : $i,
    cs = Math.log,
    Ma = Math.LN2;
  function $i(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((cs(e) / Ma) | 0)) | 0;
  }
  var ci = 256,
    fi = 262144,
    Zn = 4194304;
  function Qn(e) {
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
  function Ci(e, t, r) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var u = 0,
      h = e.suspendedLanes,
      g = e.pingedLanes;
    e = e.warmLanes;
    var B = o & 134217727;
    return (
      B !== 0
        ? ((o = B & ~h),
          o !== 0
            ? (u = Qn(o))
            : ((g &= B),
              g !== 0
                ? (u = Qn(g))
                : r || ((r = B & ~e), r !== 0 && (u = Qn(r)))))
        : ((B = o & ~h),
          B !== 0
            ? (u = Qn(B))
            : g !== 0
              ? (u = Qn(g))
              : r || ((r = o & ~e), r !== 0 && (u = Qn(r)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & h) === 0 &&
            ((h = u & -u),
            (r = t & -t),
            h >= r || (h === 32 && (r & 4194048) !== 0))
          ? t
          : u
    );
  }
  function Di(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Oa(e, t) {
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
  function Bi() {
    var e = Zn;
    return (Zn <<= 1), (Zn & 62914560) === 0 && (Zn = 4194304), e;
  }
  function hi(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function di(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function fs(e, t, r, o, u, h) {
    var g = e.pendingLanes;
    (e.pendingLanes = r),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= r),
      (e.entangledLanes &= r),
      (e.errorRecoveryDisabledLanes &= r),
      (e.shellSuspendCounter = 0);
    var B = e.entanglements,
      F = e.expirationTimes,
      G = e.hiddenUpdates;
    for (r = g & ~r; 0 < r; ) {
      var ne = 31 - Nt(r),
        re = 1 << ne;
      (B[ne] = 0), (F[ne] = -1);
      var Z = G[ne];
      if (Z !== null)
        for (G[ne] = null, ne = 0; ne < Z.length; ne++) {
          var I = Z[ne];
          I !== null && (I.lane &= -536870913);
        }
      r &= ~re;
    }
    o !== 0 && U(e, o, 0),
      h !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= h & ~(g & ~t));
  }
  function U(e, t, r) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var o = 31 - Nt(t);
    (e.entangledLanes |= t),
      (e.entanglements[o] = e.entanglements[o] | 1073741824 | (r & 261930));
  }
  function V(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var o = 31 - Nt(r),
        u = 1 << o;
      (u & t) | (e[o] & t) && (e[o] |= t), (r &= ~u);
    }
  }
  function K(e, t) {
    var r = t & -t;
    return (
      (r = (r & 42) !== 0 ? 1 : se(r)),
      (r & (e.suspendedLanes | t)) !== 0 ? 0 : r
    );
  }
  function se(e) {
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
  function ce(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Ae() {
    var e = te.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : mx(e.type));
  }
  function Be(e, t) {
    var r = te.p;
    try {
      return (te.p = e), t();
    } finally {
      te.p = r;
    }
  }
  var ye = Math.random().toString(36).slice(2),
    he = "__reactFiber$" + ye,
    fe = "__reactProps$" + ye,
    ge = "__reactContainer$" + ye,
    Te = "__reactEvents$" + ye,
    He = "__reactListeners$" + ye,
    Ft = "__reactHandles$" + ye,
    $e = "__reactResources$" + ye,
    ze = "__reactMarker$" + ye;
  function rt(e) {
    delete e[he], delete e[fe], delete e[Te], delete e[He], delete e[Ft];
  }
  function vn(e) {
    var t = e[he];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[ge] || r[he])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = Im(e); e !== null; ) {
            if ((r = e[he])) return r;
            e = Im(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function wn(e) {
    if ((e = e[he] || e[ge])) {
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
  function Wt(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function kt(e) {
    var t = e[$e];
    return (
      t ||
        (t = e[$e] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function xt(e) {
    e[ze] = !0;
  }
  var Ji = new Set(),
    pi = {};
  function Mn(e, t) {
    $n(e, t), $n(e + "Capture", t);
  }
  function $n(e, t) {
    for (pi[e] = t, e = 0; e < t.length; e++) Ji.add(t[e]);
  }
  var Xe = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    ot = {},
    _i = {};
  function Fa(e) {
    return li.call(_i, e)
      ? !0
      : li.call(ot, e)
        ? !1
        : Xe.test(e)
          ? (_i[e] = !0)
          : ((ot[e] = !0), !1);
  }
  function lt(e, t, r) {
    if (Fa(t))
      if (r === null) e.removeAttribute(t);
      else {
        switch (typeof r) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var o = t.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + r);
      }
  }
  function Jn(e, t, r) {
    if (r === null) e.removeAttribute(t);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + r);
    }
  }
  function On(e, t, r, o) {
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
      e.setAttributeNS(t, r, "" + o);
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
  function Ud(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function o8(e, t, r) {
    var o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof o != "undefined" &&
      typeof o.get == "function" &&
      typeof o.set == "function"
    ) {
      var u = o.get,
        h = o.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (g) {
            (r = "" + g), h.call(this, g);
          },
        }),
        Object.defineProperty(e, t, { enumerable: o.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (g) {
            r = "" + g;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function gc(e) {
    if (!e._valueTracker) {
      var t = Ud(e) ? "checked" : "value";
      e._valueTracker = o8(e, t, "" + e[t]);
    }
  }
  function Hd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      o = "";
    return (
      e && (o = Ud(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function zo(e) {
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
  var l8 = /[\n"\\]/g;
  function Fn(e) {
    return e.replace(l8, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ec(e, t, r, o, u, h, g, B) {
    (e.name = ""),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (e.type = g)
        : e.removeAttribute("type"),
      t != null
        ? g === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + rn(t))
          : e.value !== "" + rn(t) && (e.value = "" + rn(t))
        : (g !== "submit" && g !== "reset") || e.removeAttribute("value"),
      t != null
        ? bc(e, g, rn(t))
        : r != null
          ? bc(e, g, rn(r))
          : o != null && e.removeAttribute("value"),
      u == null && h != null && (e.defaultChecked = !!h),
      u != null &&
        (e.checked = u && typeof u != "function" && typeof u != "symbol"),
      B != null &&
      typeof B != "function" &&
      typeof B != "symbol" &&
      typeof B != "boolean"
        ? (e.name = "" + rn(B))
        : e.removeAttribute("name");
  }
  function Vd(e, t, r, o, u, h, g, B) {
    if (
      (h != null &&
        typeof h != "function" &&
        typeof h != "symbol" &&
        typeof h != "boolean" &&
        (e.type = h),
      t != null || r != null)
    ) {
      if (!((h !== "submit" && h !== "reset") || t != null)) {
        gc(e);
        return;
      }
      (r = r != null ? "" + rn(r) : ""),
        (t = t != null ? "" + rn(t) : r),
        B || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (o = o != null ? o : u),
      (o = typeof o != "function" && typeof o != "symbol" && !!o),
      (e.checked = B ? e.checked : !!o),
      (e.defaultChecked = !!o),
      g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (e.name = g),
      gc(e);
  }
  function bc(e, t, r) {
    (t === "number" && zo(e.ownerDocument) === e) ||
      e.defaultValue === "" + r ||
      (e.defaultValue = "" + r);
  }
  function fr(e, t, r, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < r.length; u++) t["$" + r[u]] = !0;
      for (r = 0; r < e.length; r++)
        (u = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== u && (e[r].selected = u),
          u && o && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + rn(r), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === r) {
          (e[u].selected = !0), o && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function kd(e, t, r) {
    if (
      t != null &&
      ((t = "" + rn(t)), t !== e.value && (e.value = t), r == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = r != null ? "" + rn(r) : "";
  }
  function jd(e, t, r, o) {
    if (t == null) {
      if (o != null) {
        if (r != null) throw Error(s(92));
        if (de(o)) {
          if (1 < o.length) throw Error(s(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), (t = r);
    }
    (r = rn(t)),
      (e.defaultValue = r),
      (o = e.textContent),
      o === r && o !== "" && o !== null && (e.value = o),
      gc(e);
  }
  function hr(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var u8 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function qd(e, t, r) {
    var o = t.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === ""
      ? o
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : o
        ? e.setProperty(t, r)
        : typeof r != "number" || r === 0 || u8.has(t)
          ? t === "float"
            ? (e.cssFloat = r)
            : (e[t] = ("" + r).trim())
          : (e[t] = r + "px");
  }
  function Pd(e, t, r) {
    if (t != null && typeof t != "object") throw Error(s(62));
    if (((e = e.style), r != null)) {
      for (var o in r)
        !r.hasOwnProperty(o) ||
          (t != null && t.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? e.setProperty(o, "")
            : o === "float"
              ? (e.cssFloat = "")
              : (e[o] = ""));
      for (var u in t)
        (o = t[u]), t.hasOwnProperty(u) && r[u] !== o && qd(e, u, o);
    } else for (var h in t) t.hasOwnProperty(h) && qd(e, h, t[h]);
  }
  function Ac(e) {
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
  var c8 = new Map([
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
    f8 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function No(e) {
    return f8.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Ti() {}
  var Sc = null;
  function Cc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var dr = null,
    pr = null;
  function Yd(e) {
    var t = wn(e);
    if (t && (e = t.stateNode)) {
      var r = e[fe] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Ec(
              e,
              r.value,
              r.defaultValue,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
            ),
            (t = r.name),
            r.type === "radio" && t != null)
          ) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                'input[name="' + Fn("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var o = r[t];
              if (o !== e && o.form === e.form) {
                var u = o[fe] || null;
                if (!u) throw Error(s(90));
                Ec(
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
            for (t = 0; t < r.length; t++)
              (o = r[t]), o.form === e.form && Hd(o);
          }
          break e;
        case "textarea":
          kd(e, r.value, r.defaultValue);
          break e;
        case "select":
          (t = r.value), t != null && fr(e, !!r.multiple, t, !1);
      }
    }
  }
  var Dc = !1;
  function Xd(e, t, r) {
    if (Dc) return e(t, r);
    Dc = !0;
    try {
      var o = e(t);
      return o;
    } finally {
      if (
        ((Dc = !1),
        (dr !== null || pr !== null) &&
          (Al(), dr && ((t = dr), (e = pr), (pr = dr = null), Yd(t), e)))
      )
        for (t = 0; t < e.length; t++) Yd(e[t]);
    }
  }
  function hs(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var o = r[fe] || null;
    if (o === null) return null;
    r = o[t];
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
    if (r && typeof r != "function") throw Error(s(231, t, typeof r));
    return r;
  }
  var Ri = !(
      typeof window == "undefined" ||
      typeof window.document == "undefined" ||
      typeof window.document.createElement == "undefined"
    ),
    Bc = !1;
  if (Ri)
    try {
      var ds = {};
      Object.defineProperty(ds, "passive", {
        get: function () {
          Bc = !0;
        },
      }),
        window.addEventListener("test", ds, ds),
        window.removeEventListener("test", ds, ds);
    } catch (e) {
      Bc = !1;
    }
  var Wi = null,
    _c = null,
    Lo = null;
  function Gd() {
    if (Lo) return Lo;
    var e,
      t = _c,
      r = t.length,
      o,
      u = "value" in Wi ? Wi.value : Wi.textContent,
      h = u.length;
    for (e = 0; e < r && t[e] === u[e]; e++);
    var g = r - e;
    for (o = 1; o <= g && t[r - o] === u[h - o]; o++);
    return (Lo = u.slice(e, 1 < o ? 1 - o : void 0));
  }
  function Uo(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ho() {
    return !0;
  }
  function Kd() {
    return !1;
  }
  function sn(e) {
    function t(r, o, u, h, g) {
      (this._reactName = r),
        (this._targetInst = u),
        (this.type = o),
        (this.nativeEvent = h),
        (this.target = g),
        (this.currentTarget = null);
      for (var B in e)
        e.hasOwnProperty(B) && ((r = e[B]), (this[B] = r ? r(h) : h[B]));
      return (
        (this.isDefaultPrevented = (
          h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1
        )
          ? Ho
          : Kd),
        (this.isPropagationStopped = Kd),
        this
      );
    }
    return (
      y(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = Ho));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = Ho));
        },
        persist: function () {},
        isPersistent: Ho,
      }),
      t
    );
  }
  var za = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Vo = sn(za),
    ps = y({}, za, { view: 0, detail: 0 }),
    h8 = sn(ps),
    Tc,
    Rc,
    ms,
    ko = y({}, ps, {
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
      getModifierState: Mc,
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
          : (e !== ms &&
              (ms && e.type === "mousemove"
                ? ((Tc = e.screenX - ms.screenX), (Rc = e.screenY - ms.screenY))
                : (Rc = Tc = 0),
              (ms = e)),
            Tc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Rc;
      },
    }),
    Zd = sn(ko),
    d8 = y({}, ko, { dataTransfer: 0 }),
    p8 = sn(d8),
    m8 = y({}, ps, { relatedTarget: 0 }),
    wc = sn(m8),
    x8 = y({}, za, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    y8 = sn(x8),
    v8 = y({}, za, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    g8 = sn(v8),
    E8 = y({}, za, { data: 0 }),
    Qd = sn(E8),
    b8 = {
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
    A8 = {
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
    S8 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function C8(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = S8[e])
        ? !!t[e]
        : !1;
  }
  function Mc() {
    return C8;
  }
  var D8 = y({}, ps, {
      key: function (e) {
        if (e.key) {
          var t = b8[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Uo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? A8[e.keyCode] || "Unidentified"
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
      getModifierState: Mc,
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
    B8 = sn(D8),
    _8 = y({}, ko, {
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
    $d = sn(_8),
    T8 = y({}, ps, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Mc,
    }),
    R8 = sn(T8),
    w8 = y({}, za, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    M8 = sn(w8),
    O8 = y({}, ko, {
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
    F8 = sn(O8),
    z8 = y({}, za, { newState: 0, oldState: 0 }),
    N8 = sn(z8),
    L8 = [9, 13, 27, 32],
    Oc = Ri && "CompositionEvent" in window,
    xs = null;
  Ri && "documentMode" in document && (xs = document.documentMode);
  var U8 = Ri && "TextEvent" in window && !xs,
    Jd = Ri && (!Oc || (xs && 8 < xs && 11 >= xs)),
    Wd = " ",
    Id = !1;
  function ep(e, t) {
    switch (e) {
      case "keyup":
        return L8.indexOf(t.keyCode) !== -1;
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
  function tp(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var mr = !1;
  function H8(e, t) {
    switch (e) {
      case "compositionend":
        return tp(t);
      case "keypress":
        return t.which !== 32 ? null : ((Id = !0), Wd);
      case "textInput":
        return (e = t.data), e === Wd && Id ? null : e;
      default:
        return null;
    }
  }
  function V8(e, t) {
    if (mr)
      return e === "compositionend" || (!Oc && ep(e, t))
        ? ((e = Gd()), (Lo = _c = Wi = null), (mr = !1), e)
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
        return Jd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var k8 = {
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
  function np(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!k8[e.type] : t === "textarea";
  }
  function ip(e, t, r, o) {
    dr ? (pr ? pr.push(o) : (pr = [o])) : (dr = o),
      (t = Rl(t, "onChange")),
      0 < t.length &&
        ((r = new Vo("onChange", "change", null, r, o)),
        e.push({ event: r, listeners: t }));
  }
  var ys = null,
    vs = null;
  function j8(e) {
    Vm(e, 0);
  }
  function jo(e) {
    var t = Wt(e);
    if (Hd(t)) return e;
  }
  function ap(e, t) {
    if (e === "change") return t;
  }
  var rp = !1;
  if (Ri) {
    var Fc;
    if (Ri) {
      var zc = "oninput" in document;
      if (!zc) {
        var sp = document.createElement("div");
        sp.setAttribute("oninput", "return;"),
          (zc = typeof sp.oninput == "function");
      }
      Fc = zc;
    } else Fc = !1;
    rp = Fc && (!document.documentMode || 9 < document.documentMode);
  }
  function op() {
    ys && (ys.detachEvent("onpropertychange", lp), (vs = ys = null));
  }
  function lp(e) {
    if (e.propertyName === "value" && jo(vs)) {
      var t = [];
      ip(t, vs, e, Cc(e)), Xd(j8, t);
    }
  }
  function q8(e, t, r) {
    e === "focusin"
      ? (op(), (ys = t), (vs = r), ys.attachEvent("onpropertychange", lp))
      : e === "focusout" && op();
  }
  function P8(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return jo(vs);
  }
  function Y8(e, t) {
    if (e === "click") return jo(t);
  }
  function X8(e, t) {
    if (e === "input" || e === "change") return jo(t);
  }
  function G8(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var gn = typeof Object.is == "function" ? Object.is : G8;
  function gs(e, t) {
    if (gn(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      o = Object.keys(t);
    if (r.length !== o.length) return !1;
    for (o = 0; o < r.length; o++) {
      var u = r[o];
      if (!li.call(t, u) || !gn(e[u], t[u])) return !1;
    }
    return !0;
  }
  function up(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function cp(e, t) {
    var r = up(e);
    e = 0;
    for (var o; r; ) {
      if (r.nodeType === 3) {
        if (((o = e + r.textContent.length), e <= t && o >= t))
          return { node: r, offset: t - e };
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
      r = up(r);
    }
  }
  function fp(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? fp(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function hp(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = zo(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch (o) {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = zo(e.document);
    }
    return t;
  }
  function Nc(e) {
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
  var K8 = Ri && "documentMode" in document && 11 >= document.documentMode,
    xr = null,
    Lc = null,
    Es = null,
    Uc = !1;
  function dp(e, t, r) {
    var o =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Uc ||
      xr == null ||
      xr !== zo(o) ||
      ((o = xr),
      "selectionStart" in o && Nc(o)
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
      (Es && gs(Es, o)) ||
        ((Es = o),
        (o = Rl(Lc, "onSelect")),
        0 < o.length &&
          ((t = new Vo("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: o }),
          (t.target = xr))));
  }
  function Na(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var yr = {
      animationend: Na("Animation", "AnimationEnd"),
      animationiteration: Na("Animation", "AnimationIteration"),
      animationstart: Na("Animation", "AnimationStart"),
      transitionrun: Na("Transition", "TransitionRun"),
      transitionstart: Na("Transition", "TransitionStart"),
      transitioncancel: Na("Transition", "TransitionCancel"),
      transitionend: Na("Transition", "TransitionEnd"),
    },
    Hc = {},
    pp = {};
  Ri &&
    ((pp = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete yr.animationend.animation,
      delete yr.animationiteration.animation,
      delete yr.animationstart.animation),
    "TransitionEvent" in window || delete yr.transitionend.transition);
  function La(e) {
    if (Hc[e]) return Hc[e];
    if (!yr[e]) return e;
    var t = yr[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in pp) return (Hc[e] = t[r]);
    return e;
  }
  var mp = La("animationend"),
    xp = La("animationiteration"),
    yp = La("animationstart"),
    Z8 = La("transitionrun"),
    Q8 = La("transitionstart"),
    $8 = La("transitioncancel"),
    vp = La("transitionend"),
    gp = new Map(),
    Vc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Vc.push("scrollEnd");
  function Wn(e, t) {
    gp.set(e, t), Mn(t, [e]);
  }
  var qo =
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
    zn = [],
    vr = 0,
    kc = 0;
  function Po() {
    for (var e = vr, t = (kc = vr = 0); t < e; ) {
      var r = zn[t];
      zn[t++] = null;
      var o = zn[t];
      zn[t++] = null;
      var u = zn[t];
      zn[t++] = null;
      var h = zn[t];
      if (((zn[t++] = null), o !== null && u !== null)) {
        var g = o.pending;
        g === null ? (u.next = u) : ((u.next = g.next), (g.next = u)),
          (o.pending = u);
      }
      h !== 0 && Ep(r, u, h);
    }
  }
  function Yo(e, t, r, o) {
    (zn[vr++] = e),
      (zn[vr++] = t),
      (zn[vr++] = r),
      (zn[vr++] = o),
      (kc |= o),
      (e.lanes |= o),
      (e = e.alternate),
      e !== null && (e.lanes |= o);
  }
  function jc(e, t, r, o) {
    return Yo(e, t, r, o), Xo(e);
  }
  function Ua(e, t) {
    return Yo(e, null, null, t), Xo(e);
  }
  function Ep(e, t, r) {
    e.lanes |= r;
    var o = e.alternate;
    o !== null && (o.lanes |= r);
    for (var u = !1, h = e.return; h !== null; )
      (h.childLanes |= r),
        (o = h.alternate),
        o !== null && (o.childLanes |= r),
        h.tag === 22 &&
          ((e = h.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = h),
        (h = h.return);
    return e.tag === 3
      ? ((h = e.stateNode),
        u &&
          t !== null &&
          ((u = 31 - Nt(r)),
          (e = h.hiddenUpdates),
          (o = e[u]),
          o === null ? (e[u] = [t]) : o.push(t),
          (t.lane = r | 536870912)),
        h)
      : null;
  }
  function Xo(e) {
    if (50 < qs) throw ((qs = 0), ($0 = null), Error(s(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var gr = {};
  function J8(e, t, r, o) {
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
      (this.pendingProps = t),
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
  function En(e, t, r, o) {
    return new J8(e, t, r, o);
  }
  function qc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function wi(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = En(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 65011712),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      (r.refCleanup = e.refCleanup),
      r
    );
  }
  function bp(e, t) {
    e.flags &= 65011714;
    var r = e.alternate;
    return (
      r === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
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
          (t = r.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Go(e, t, r, o, u, h) {
    var g = 0;
    if (((o = e), typeof e == "function")) qc(e) && (g = 1);
    else if (typeof e == "string")
      g = nb(e, r, Y.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case $:
          return (e = En(31, r, t, u)), (e.elementType = $), (e.lanes = h), e;
        case S:
          return Ha(r.children, u, h, t);
        case A:
          (g = 8), (u |= 24);
          break;
        case w:
          return (
            (e = En(12, r, t, u | 2)), (e.elementType = w), (e.lanes = h), e
          );
        case M:
          return (e = En(13, r, t, u)), (e.elementType = M), (e.lanes = h), e;
        case L:
          return (e = En(19, r, t, u)), (e.elementType = L), (e.lanes = h), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case D:
                g = 10;
                break e;
              case C:
                g = 9;
                break e;
              case R:
                g = 11;
                break e;
              case _:
                g = 14;
                break e;
              case O:
                (g = 16), (o = null);
                break e;
            }
          (g = 29),
            (r = Error(s(130, e === null ? "null" : typeof e, ""))),
            (o = null);
      }
    return (
      (t = En(g, r, t, u)), (t.elementType = e), (t.type = o), (t.lanes = h), t
    );
  }
  function Ha(e, t, r, o) {
    return (e = En(7, e, o, t)), (e.lanes = r), e;
  }
  function Pc(e, t, r) {
    return (e = En(6, e, null, t)), (e.lanes = r), e;
  }
  function Ap(e) {
    var t = En(18, null, null, 0);
    return (t.stateNode = e), t;
  }
  function Yc(e, t, r) {
    return (
      (t = En(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Sp = new WeakMap();
  function Nn(e, t) {
    if (typeof e == "object" && e !== null) {
      var r = Sp.get(e);
      return r !== void 0
        ? r
        : ((t = { value: e, source: t, stack: oi(t) }), Sp.set(e, t), t);
    }
    return { value: e, source: t, stack: oi(t) };
  }
  var Er = [],
    br = 0,
    Ko = null,
    bs = 0,
    Ln = [],
    Un = 0,
    Ii = null,
    mi = 1,
    xi = "";
  function Mi(e, t) {
    (Er[br++] = bs), (Er[br++] = Ko), (Ko = e), (bs = t);
  }
  function Cp(e, t, r) {
    (Ln[Un++] = mi), (Ln[Un++] = xi), (Ln[Un++] = Ii), (Ii = e);
    var o = mi;
    e = xi;
    var u = 32 - Nt(o) - 1;
    (o &= ~(1 << u)), (r += 1);
    var h = 32 - Nt(t) + u;
    if (30 < h) {
      var g = u - (u % 5);
      (h = (o & ((1 << g) - 1)).toString(32)),
        (o >>= g),
        (u -= g),
        (mi = (1 << (32 - Nt(t) + u)) | (r << u) | o),
        (xi = h + e);
    } else (mi = (1 << h) | (r << u) | o), (xi = e);
  }
  function Xc(e) {
    e.return !== null && (Mi(e, 1), Cp(e, 1, 0));
  }
  function Gc(e) {
    for (; e === Ko; )
      (Ko = Er[--br]), (Er[br] = null), (bs = Er[--br]), (Er[br] = null);
    for (; e === Ii; )
      (Ii = Ln[--Un]),
        (Ln[Un] = null),
        (xi = Ln[--Un]),
        (Ln[Un] = null),
        (mi = Ln[--Un]),
        (Ln[Un] = null);
  }
  function Dp(e, t) {
    (Ln[Un++] = mi),
      (Ln[Un++] = xi),
      (Ln[Un++] = Ii),
      (mi = t.id),
      (xi = t.overflow),
      (Ii = e);
  }
  var jt = null,
    ut = null,
    je = !1,
    ea = null,
    Hn = !1,
    Kc = Error(s(519));
  function ta(e) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (As(Nn(t, e)), Kc);
  }
  function Bp(e) {
    var t = e.stateNode,
      r = e.type,
      o = e.memoizedProps;
    switch (((t[he] = e), (t[fe] = o), r)) {
      case "dialog":
        Le("cancel", t), Le("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Le("load", t);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Ys.length; r++) Le(Ys[r], t);
        break;
      case "source":
        Le("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Le("error", t), Le("load", t);
        break;
      case "details":
        Le("toggle", t);
        break;
      case "input":
        Le("invalid", t),
          Vd(
            t,
            o.value,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name,
            !0,
          );
        break;
      case "select":
        Le("invalid", t);
        break;
      case "textarea":
        Le("invalid", t), jd(t, o.value, o.defaultValue, o.children);
    }
    (r = o.children),
      (typeof r != "string" && typeof r != "number" && typeof r != "bigint") ||
      t.textContent === "" + r ||
      o.suppressHydrationWarning === !0 ||
      Pm(t.textContent, r)
        ? (o.popover != null && (Le("beforetoggle", t), Le("toggle", t)),
          o.onScroll != null && Le("scroll", t),
          o.onScrollEnd != null && Le("scrollend", t),
          o.onClick != null && (t.onclick = Ti),
          (t = !0))
        : (t = !1),
      t || ta(e, !0);
  }
  function _p(e) {
    for (jt = e.return; jt; )
      switch (jt.tag) {
        case 5:
        case 31:
        case 13:
          Hn = !1;
          return;
        case 27:
        case 3:
          Hn = !0;
          return;
        default:
          jt = jt.return;
      }
  }
  function Ar(e) {
    if (e !== jt) return !1;
    if (!je) return _p(e), (je = !0), !1;
    var t = e.tag,
      r;
    if (
      ((r = t !== 3 && t !== 27) &&
        ((r = t === 5) &&
          ((r = e.type),
          (r =
            !(r !== "form" && r !== "button") || hf(e.type, e.memoizedProps))),
        (r = !r)),
      r && ut && ta(e),
      _p(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      ut = Wm(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      ut = Wm(e);
    } else
      t === 27
        ? ((t = ut), ma(e.type) ? ((e = yf), (yf = null), (ut = e)) : (ut = t))
        : (ut = jt ? kn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Va() {
    (ut = jt = null), (je = !1);
  }
  function Zc() {
    var e = ea;
    return (
      e !== null &&
        (cn === null ? (cn = e) : cn.push.apply(cn, e), (ea = null)),
      e
    );
  }
  function As(e) {
    ea === null ? (ea = [e]) : ea.push(e);
  }
  var Qc = T(null),
    ka = null,
    Oi = null;
  function na(e, t, r) {
    P(Qc, t._currentValue), (t._currentValue = r);
  }
  function Fi(e) {
    (e._currentValue = Qc.current), N(Qc);
  }
  function $c(e, t, r) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
          : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function Jc(e, t, r, o) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var h = u.dependencies;
      if (h !== null) {
        var g = u.child;
        h = h.firstContext;
        e: for (; h !== null; ) {
          var B = h;
          h = u;
          for (var F = 0; F < t.length; F++)
            if (B.context === t[F]) {
              (h.lanes |= r),
                (B = h.alternate),
                B !== null && (B.lanes |= r),
                $c(h.return, r, e),
                o || (g = null);
              break e;
            }
          h = B.next;
        }
      } else if (u.tag === 18) {
        if (((g = u.return), g === null)) throw Error(s(341));
        (g.lanes |= r),
          (h = g.alternate),
          h !== null && (h.lanes |= r),
          $c(g, r, e),
          (g = null);
      } else g = u.child;
      if (g !== null) g.return = u;
      else
        for (g = u; g !== null; ) {
          if (g === e) {
            g = null;
            break;
          }
          if (((u = g.sibling), u !== null)) {
            (u.return = g.return), (g = u);
            break;
          }
          g = g.return;
        }
      u = g;
    }
  }
  function Sr(e, t, r, o) {
    e = null;
    for (var u = t, h = !1; u !== null; ) {
      if (!h) {
        if ((u.flags & 524288) !== 0) h = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var g = u.alternate;
        if (g === null) throw Error(s(387));
        if (((g = g.memoizedProps), g !== null)) {
          var B = u.type;
          gn(u.pendingProps.value, g.value) ||
            (e !== null ? e.push(B) : (e = [B]));
        }
      } else if (u === Ce.current) {
        if (((g = u.alternate), g === null)) throw Error(s(387));
        g.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(Qs) : (e = [Qs]));
      }
      u = u.return;
    }
    e !== null && Jc(t, e, r, o), (t.flags |= 262144);
  }
  function Zo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!gn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function ja(e) {
    (ka = e),
      (Oi = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function qt(e) {
    return Tp(ka, e);
  }
  function Qo(e, t) {
    return ka === null && ja(e), Tp(e, t);
  }
  function Tp(e, t) {
    var r = t._currentValue;
    if (((t = { context: t, memoizedValue: r, next: null }), Oi === null)) {
      if (e === null) throw Error(s(308));
      (Oi = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else Oi = Oi.next = t;
    return r;
  }
  var W8 =
      typeof AbortController != "undefined"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (r, o) {
                  e.push(o);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (r) {
                  return r();
                });
            };
          },
    I8 = n.unstable_scheduleCallback,
    eE = n.unstable_NormalPriority,
    Ct = {
      $$typeof: D,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Wc() {
    return { controller: new W8(), data: new Map(), refCount: 0 };
  }
  function Ss(e) {
    e.refCount--,
      e.refCount === 0 &&
        I8(eE, function () {
          e.controller.abort();
        });
  }
  var Cs = null,
    Ic = 0,
    Cr = 0,
    Dr = null;
  function tE(e, t) {
    if (Cs === null) {
      var r = (Cs = []);
      (Ic = 0),
        (Cr = nf()),
        (Dr = {
          status: "pending",
          value: void 0,
          then: function (o) {
            r.push(o);
          },
        });
    }
    return Ic++, t.then(Rp, Rp), t;
  }
  function Rp() {
    if (--Ic === 0 && Cs !== null) {
      Dr !== null && (Dr.status = "fulfilled");
      var e = Cs;
      (Cs = null), (Cr = 0), (Dr = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function nE(e, t) {
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
          (o.status = "fulfilled"), (o.value = t);
          for (var u = 0; u < r.length; u++) (0, r[u])(t);
        },
        function (u) {
          for (o.status = "rejected", o.reason = u, u = 0; u < r.length; u++)
            (0, r[u])(void 0);
        },
      ),
      o
    );
  }
  var wp = k.S;
  k.S = function (e, t) {
    (dm = at()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        tE(e, t),
      wp !== null && wp(e, t);
  };
  var qa = T(null);
  function e0() {
    var e = qa.current;
    return e !== null ? e : it.pooledCache;
  }
  function $o(e, t) {
    t === null ? P(qa, qa.current) : P(qa, t.pool);
  }
  function Mp() {
    var e = e0();
    return e === null ? null : { parent: Ct._currentValue, pool: e };
  }
  var Br = Error(s(460)),
    t0 = Error(s(474)),
    Jo = Error(s(542)),
    Wo = { then: function () {} };
  function Op(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function Fp(e, t, r) {
    switch (
      ((r = e[r]),
      r === void 0 ? e.push(t) : r !== t && (t.then(Ti, Ti), (t = r)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Np(e), e);
      default:
        if (typeof t.status == "string") t.then(Ti, Ti);
        else {
          if (((e = it), e !== null && 100 < e.shellSuspendCounter))
            throw Error(s(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (o) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "fulfilled"), (u.value = o);
                }
              },
              function (o) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "rejected"), (u.reason = o);
                }
              },
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Np(e), e);
        }
        throw ((Ya = t), Br);
    }
  }
  function Pa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (r) {
      throw r !== null && typeof r == "object" && typeof r.then == "function"
        ? ((Ya = r), Br)
        : r;
    }
  }
  var Ya = null;
  function zp() {
    if (Ya === null) throw Error(s(459));
    var e = Ya;
    return (Ya = null), e;
  }
  function Np(e) {
    if (e === Br || e === Jo) throw Error(s(483));
  }
  var _r = null,
    Ds = 0;
  function Io(e) {
    var t = Ds;
    return (Ds += 1), _r === null && (_r = []), Fp(_r, e, t);
  }
  function Bs(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function el(e, t) {
    throw t.$$typeof === v
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          s(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Lp(e) {
    function t(q, H) {
      if (e) {
        var X = q.deletions;
        X === null ? ((q.deletions = [H]), (q.flags |= 16)) : X.push(H);
      }
    }
    function r(q, H) {
      if (!e) return null;
      for (; H !== null; ) t(q, H), (H = H.sibling);
      return null;
    }
    function o(q) {
      for (var H = new Map(); q !== null; )
        q.key !== null ? H.set(q.key, q) : H.set(q.index, q), (q = q.sibling);
      return H;
    }
    function u(q, H) {
      return (q = wi(q, H)), (q.index = 0), (q.sibling = null), q;
    }
    function h(q, H, X) {
      return (
        (q.index = X),
        e
          ? ((X = q.alternate),
            X !== null
              ? ((X = X.index), X < H ? ((q.flags |= 67108866), H) : X)
              : ((q.flags |= 67108866), H))
          : ((q.flags |= 1048576), H)
      );
    }
    function g(q) {
      return e && q.alternate === null && (q.flags |= 67108866), q;
    }
    function B(q, H, X, ae) {
      return H === null || H.tag !== 6
        ? ((H = Pc(X, q.mode, ae)), (H.return = q), H)
        : ((H = u(H, X)), (H.return = q), H);
    }
    function F(q, H, X, ae) {
      var Se = X.type;
      return Se === S
        ? ne(q, H, X.props.children, ae, X.key)
        : H !== null &&
            (H.elementType === Se ||
              (typeof Se == "object" &&
                Se !== null &&
                Se.$$typeof === O &&
                Pa(Se) === H.type))
          ? ((H = u(H, X.props)), Bs(H, X), (H.return = q), H)
          : ((H = Go(X.type, X.key, X.props, null, q.mode, ae)),
            Bs(H, X),
            (H.return = q),
            H);
    }
    function G(q, H, X, ae) {
      return H === null ||
        H.tag !== 4 ||
        H.stateNode.containerInfo !== X.containerInfo ||
        H.stateNode.implementation !== X.implementation
        ? ((H = Yc(X, q.mode, ae)), (H.return = q), H)
        : ((H = u(H, X.children || [])), (H.return = q), H);
    }
    function ne(q, H, X, ae, Se) {
      return H === null || H.tag !== 7
        ? ((H = Ha(X, q.mode, ae, Se)), (H.return = q), H)
        : ((H = u(H, X)), (H.return = q), H);
    }
    function re(q, H, X) {
      if (
        (typeof H == "string" && H !== "") ||
        typeof H == "number" ||
        typeof H == "bigint"
      )
        return (H = Pc("" + H, q.mode, X)), (H.return = q), H;
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case E:
            return (
              (X = Go(H.type, H.key, H.props, null, q.mode, X)),
              Bs(X, H),
              (X.return = q),
              X
            );
          case b:
            return (H = Yc(H, q.mode, X)), (H.return = q), H;
          case O:
            return (H = Pa(H)), re(q, H, X);
        }
        if (de(H) || Q(H))
          return (H = Ha(H, q.mode, X, null)), (H.return = q), H;
        if (typeof H.then == "function") return re(q, Io(H), X);
        if (H.$$typeof === D) return re(q, Qo(q, H), X);
        el(q, H);
      }
      return null;
    }
    function Z(q, H, X, ae) {
      var Se = H !== null ? H.key : null;
      if (
        (typeof X == "string" && X !== "") ||
        typeof X == "number" ||
        typeof X == "bigint"
      )
        return Se !== null ? null : B(q, H, "" + X, ae);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case E:
            return X.key === Se ? F(q, H, X, ae) : null;
          case b:
            return X.key === Se ? G(q, H, X, ae) : null;
          case O:
            return (X = Pa(X)), Z(q, H, X, ae);
        }
        if (de(X) || Q(X)) return Se !== null ? null : ne(q, H, X, ae, null);
        if (typeof X.then == "function") return Z(q, H, Io(X), ae);
        if (X.$$typeof === D) return Z(q, H, Qo(q, X), ae);
        el(q, X);
      }
      return null;
    }
    function I(q, H, X, ae, Se) {
      if (
        (typeof ae == "string" && ae !== "") ||
        typeof ae == "number" ||
        typeof ae == "bigint"
      )
        return (q = q.get(X) || null), B(H, q, "" + ae, Se);
      if (typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case E:
            return (
              (q = q.get(ae.key === null ? X : ae.key) || null), F(H, q, ae, Se)
            );
          case b:
            return (
              (q = q.get(ae.key === null ? X : ae.key) || null), G(H, q, ae, Se)
            );
          case O:
            return (ae = Pa(ae)), I(q, H, X, ae, Se);
        }
        if (de(ae) || Q(ae))
          return (q = q.get(X) || null), ne(H, q, ae, Se, null);
        if (typeof ae.then == "function") return I(q, H, X, Io(ae), Se);
        if (ae.$$typeof === D) return I(q, H, X, Qo(H, ae), Se);
        el(H, ae);
      }
      return null;
    }
    function ve(q, H, X, ae) {
      for (
        var Se = null, Ge = null, Ee = H, Fe = (H = 0), ke = null;
        Ee !== null && Fe < X.length;
        Fe++
      ) {
        Ee.index > Fe ? ((ke = Ee), (Ee = null)) : (ke = Ee.sibling);
        var Ke = Z(q, Ee, X[Fe], ae);
        if (Ke === null) {
          Ee === null && (Ee = ke);
          break;
        }
        e && Ee && Ke.alternate === null && t(q, Ee),
          (H = h(Ke, H, Fe)),
          Ge === null ? (Se = Ke) : (Ge.sibling = Ke),
          (Ge = Ke),
          (Ee = ke);
      }
      if (Fe === X.length) return r(q, Ee), je && Mi(q, Fe), Se;
      if (Ee === null) {
        for (; Fe < X.length; Fe++)
          (Ee = re(q, X[Fe], ae)),
            Ee !== null &&
              ((H = h(Ee, H, Fe)),
              Ge === null ? (Se = Ee) : (Ge.sibling = Ee),
              (Ge = Ee));
        return je && Mi(q, Fe), Se;
      }
      for (Ee = o(Ee); Fe < X.length; Fe++)
        (ke = I(Ee, q, Fe, X[Fe], ae)),
          ke !== null &&
            (e &&
              ke.alternate !== null &&
              Ee.delete(ke.key === null ? Fe : ke.key),
            (H = h(ke, H, Fe)),
            Ge === null ? (Se = ke) : (Ge.sibling = ke),
            (Ge = ke));
      return (
        e &&
          Ee.forEach(function (Ea) {
            return t(q, Ea);
          }),
        je && Mi(q, Fe),
        Se
      );
    }
    function De(q, H, X, ae) {
      if (X == null) throw Error(s(151));
      for (
        var Se = null,
          Ge = null,
          Ee = H,
          Fe = (H = 0),
          ke = null,
          Ke = X.next();
        Ee !== null && !Ke.done;
        Fe++, Ke = X.next()
      ) {
        Ee.index > Fe ? ((ke = Ee), (Ee = null)) : (ke = Ee.sibling);
        var Ea = Z(q, Ee, Ke.value, ae);
        if (Ea === null) {
          Ee === null && (Ee = ke);
          break;
        }
        e && Ee && Ea.alternate === null && t(q, Ee),
          (H = h(Ea, H, Fe)),
          Ge === null ? (Se = Ea) : (Ge.sibling = Ea),
          (Ge = Ea),
          (Ee = ke);
      }
      if (Ke.done) return r(q, Ee), je && Mi(q, Fe), Se;
      if (Ee === null) {
        for (; !Ke.done; Fe++, Ke = X.next())
          (Ke = re(q, Ke.value, ae)),
            Ke !== null &&
              ((H = h(Ke, H, Fe)),
              Ge === null ? (Se = Ke) : (Ge.sibling = Ke),
              (Ge = Ke));
        return je && Mi(q, Fe), Se;
      }
      for (Ee = o(Ee); !Ke.done; Fe++, Ke = X.next())
        (Ke = I(Ee, q, Fe, Ke.value, ae)),
          Ke !== null &&
            (e &&
              Ke.alternate !== null &&
              Ee.delete(Ke.key === null ? Fe : Ke.key),
            (H = h(Ke, H, Fe)),
            Ge === null ? (Se = Ke) : (Ge.sibling = Ke),
            (Ge = Ke));
      return (
        e &&
          Ee.forEach(function (db) {
            return t(q, db);
          }),
        je && Mi(q, Fe),
        Se
      );
    }
    function nt(q, H, X, ae) {
      if (
        (typeof X == "object" &&
          X !== null &&
          X.type === S &&
          X.key === null &&
          (X = X.props.children),
        typeof X == "object" && X !== null)
      ) {
        switch (X.$$typeof) {
          case E:
            e: {
              for (var Se = X.key; H !== null; ) {
                if (H.key === Se) {
                  if (((Se = X.type), Se === S)) {
                    if (H.tag === 7) {
                      r(q, H.sibling),
                        (ae = u(H, X.props.children)),
                        (ae.return = q),
                        (q = ae);
                      break e;
                    }
                  } else if (
                    H.elementType === Se ||
                    (typeof Se == "object" &&
                      Se !== null &&
                      Se.$$typeof === O &&
                      Pa(Se) === H.type)
                  ) {
                    r(q, H.sibling),
                      (ae = u(H, X.props)),
                      Bs(ae, X),
                      (ae.return = q),
                      (q = ae);
                    break e;
                  }
                  r(q, H);
                  break;
                } else t(q, H);
                H = H.sibling;
              }
              X.type === S
                ? ((ae = Ha(X.props.children, q.mode, ae, X.key)),
                  (ae.return = q),
                  (q = ae))
                : ((ae = Go(X.type, X.key, X.props, null, q.mode, ae)),
                  Bs(ae, X),
                  (ae.return = q),
                  (q = ae));
            }
            return g(q);
          case b:
            e: {
              for (Se = X.key; H !== null; ) {
                if (H.key === Se)
                  if (
                    H.tag === 4 &&
                    H.stateNode.containerInfo === X.containerInfo &&
                    H.stateNode.implementation === X.implementation
                  ) {
                    r(q, H.sibling),
                      (ae = u(H, X.children || [])),
                      (ae.return = q),
                      (q = ae);
                    break e;
                  } else {
                    r(q, H);
                    break;
                  }
                else t(q, H);
                H = H.sibling;
              }
              (ae = Yc(X, q.mode, ae)), (ae.return = q), (q = ae);
            }
            return g(q);
          case O:
            return (X = Pa(X)), nt(q, H, X, ae);
        }
        if (de(X)) return ve(q, H, X, ae);
        if (Q(X)) {
          if (((Se = Q(X)), typeof Se != "function")) throw Error(s(150));
          return (X = Se.call(X)), De(q, H, X, ae);
        }
        if (typeof X.then == "function") return nt(q, H, Io(X), ae);
        if (X.$$typeof === D) return nt(q, H, Qo(q, X), ae);
        el(q, X);
      }
      return (typeof X == "string" && X !== "") ||
        typeof X == "number" ||
        typeof X == "bigint"
        ? ((X = "" + X),
          H !== null && H.tag === 6
            ? (r(q, H.sibling), (ae = u(H, X)), (ae.return = q), (q = ae))
            : (r(q, H), (ae = Pc(X, q.mode, ae)), (ae.return = q), (q = ae)),
          g(q))
        : r(q, H);
    }
    return function (q, H, X, ae) {
      try {
        Ds = 0;
        var Se = nt(q, H, X, ae);
        return (_r = null), Se;
      } catch (Ee) {
        if (Ee === Br || Ee === Jo) throw Ee;
        var Ge = En(29, Ee, null, q.mode);
        return (Ge.lanes = ae), (Ge.return = q), Ge;
      } finally {
      }
    };
  }
  var Xa = Lp(!0),
    Up = Lp(!1),
    ia = !1;
  function n0(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function i0(e, t) {
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
  function aa(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ra(e, t, r) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (Ze & 2) !== 0)) {
      var u = o.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (o.pending = t),
        (t = Xo(e)),
        Ep(e, null, r),
        t
      );
    }
    return Yo(e, o, t, r), Xo(e);
  }
  function _s(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194048) !== 0))
    ) {
      var o = t.lanes;
      (o &= e.pendingLanes), (r |= o), (t.lanes = r), V(e, r);
    }
  }
  function a0(e, t) {
    var r = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), r === o)) {
      var u = null,
        h = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var g = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null,
          };
          h === null ? (u = h = g) : (h = h.next = g), (r = r.next);
        } while (r !== null);
        h === null ? (u = h = t) : (h = h.next = t);
      } else u = h = t;
      (r = {
        baseState: o.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: h,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  var r0 = !1;
  function Ts() {
    if (r0) {
      var e = Dr;
      if (e !== null) throw e;
    }
  }
  function Rs(e, t, r, o) {
    r0 = !1;
    var u = e.updateQueue;
    ia = !1;
    var h = u.firstBaseUpdate,
      g = u.lastBaseUpdate,
      B = u.shared.pending;
    if (B !== null) {
      u.shared.pending = null;
      var F = B,
        G = F.next;
      (F.next = null), g === null ? (h = G) : (g.next = G), (g = F);
      var ne = e.alternate;
      ne !== null &&
        ((ne = ne.updateQueue),
        (B = ne.lastBaseUpdate),
        B !== g &&
          (B === null ? (ne.firstBaseUpdate = G) : (B.next = G),
          (ne.lastBaseUpdate = F)));
    }
    if (h !== null) {
      var re = u.baseState;
      (g = 0), (ne = G = F = null), (B = h);
      do {
        var Z = B.lane & -536870913,
          I = Z !== B.lane;
        if (I ? (Ve & Z) === Z : (o & Z) === Z) {
          Z !== 0 && Z === Cr && (r0 = !0),
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
            var ve = e,
              De = B;
            Z = t;
            var nt = r;
            switch (De.tag) {
              case 1:
                if (((ve = De.payload), typeof ve == "function")) {
                  re = ve.call(nt, re, Z);
                  break e;
                }
                re = ve;
                break e;
              case 3:
                ve.flags = (ve.flags & -65537) | 128;
              case 0:
                if (
                  ((ve = De.payload),
                  (Z = typeof ve == "function" ? ve.call(nt, re, Z) : ve),
                  Z == null)
                )
                  break e;
                re = y({}, re, Z);
                break e;
              case 2:
                ia = !0;
            }
          }
          (Z = B.callback),
            Z !== null &&
              ((e.flags |= 64),
              I && (e.flags |= 8192),
              (I = u.callbacks),
              I === null ? (u.callbacks = [Z]) : I.push(Z));
        } else
          (I = {
            lane: Z,
            tag: B.tag,
            payload: B.payload,
            callback: B.callback,
            next: null,
          }),
            ne === null ? ((G = ne = I), (F = re)) : (ne = ne.next = I),
            (g |= Z);
        if (((B = B.next), B === null)) {
          if (((B = u.shared.pending), B === null)) break;
          (I = B),
            (B = I.next),
            (I.next = null),
            (u.lastBaseUpdate = I),
            (u.shared.pending = null);
        }
      } while (!0);
      ne === null && (F = re),
        (u.baseState = F),
        (u.firstBaseUpdate = G),
        (u.lastBaseUpdate = ne),
        h === null && (u.shared.lanes = 0),
        (ca |= g),
        (e.lanes = g),
        (e.memoizedState = re);
    }
  }
  function Hp(e, t) {
    if (typeof e != "function") throw Error(s(191, e));
    e.call(t);
  }
  function Vp(e, t) {
    var r = e.callbacks;
    if (r !== null)
      for (e.callbacks = null, e = 0; e < r.length; e++) Hp(r[e], t);
  }
  var Tr = T(null),
    tl = T(0);
  function kp(e, t) {
    (e = qi), P(tl, e), P(Tr, t), (qi = e | t.baseLanes);
  }
  function s0() {
    P(tl, qi), P(Tr, Tr.current);
  }
  function o0() {
    (qi = tl.current), N(Tr), N(tl);
  }
  var bn = T(null),
    Vn = null;
  function sa(e) {
    var t = e.alternate;
    P(bt, bt.current & 1),
      P(bn, e),
      Vn === null &&
        (t === null || Tr.current !== null || t.memoizedState !== null) &&
        (Vn = e);
  }
  function l0(e) {
    P(bt, bt.current), P(bn, e), Vn === null && (Vn = e);
  }
  function jp(e) {
    e.tag === 22
      ? (P(bt, bt.current), P(bn, e), Vn === null && (Vn = e))
      : oa();
  }
  function oa() {
    P(bt, bt.current), P(bn, bn.current);
  }
  function An(e) {
    N(bn), Vn === e && (Vn = null), N(bt);
  }
  var bt = T(0);
  function nl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && ((r = r.dehydrated), r === null || mf(r) || xf(r)))
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
  var zi = 0,
    Me = null,
    et = null,
    Dt = null,
    il = !1,
    Rr = !1,
    Ga = !1,
    al = 0,
    ws = 0,
    wr = null,
    iE = 0;
  function yt() {
    throw Error(s(321));
  }
  function u0(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!gn(e[r], t[r])) return !1;
    return !0;
  }
  function c0(e, t, r, o, u, h) {
    return (
      (zi = h),
      (Me = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (k.H = e === null || e.memoizedState === null ? C1 : D0),
      (Ga = !1),
      (h = r(o, u)),
      (Ga = !1),
      Rr && (h = Pp(t, r, o, u)),
      qp(e),
      h
    );
  }
  function qp(e) {
    k.H = Fs;
    var t = et !== null && et.next !== null;
    if (((zi = 0), (Dt = et = Me = null), (il = !1), (ws = 0), (wr = null), t))
      throw Error(s(300));
    e === null ||
      Bt ||
      ((e = e.dependencies), e !== null && Zo(e) && (Bt = !0));
  }
  function Pp(e, t, r, o) {
    Me = e;
    var u = 0;
    do {
      if ((Rr && (wr = null), (ws = 0), (Rr = !1), 25 <= u))
        throw Error(s(301));
      if (((u += 1), (Dt = et = null), e.updateQueue != null)) {
        var h = e.updateQueue;
        (h.lastEffect = null),
          (h.events = null),
          (h.stores = null),
          h.memoCache != null && (h.memoCache.index = 0);
      }
      (k.H = D1), (h = t(r, o));
    } while (Rr);
    return h;
  }
  function aE() {
    var e = k.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Ms(t) : t),
      (e = e.useState()[0]),
      (et !== null ? et.memoizedState : null) !== e && (Me.flags |= 1024),
      t
    );
  }
  function f0() {
    var e = al !== 0;
    return (al = 0), e;
  }
  function h0(e, t, r) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~r);
  }
  function d0(e) {
    if (il) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      il = !1;
    }
    (zi = 0), (Dt = et = Me = null), (Rr = !1), (ws = al = 0), (wr = null);
  }
  function It() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Dt === null ? (Me.memoizedState = Dt = e) : (Dt = Dt.next = e), Dt;
  }
  function At() {
    if (et === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = et.next;
    var t = Dt === null ? Me.memoizedState : Dt.next;
    if (t !== null) (Dt = t), (et = e);
    else {
      if (e === null)
        throw Me.alternate === null ? Error(s(467)) : Error(s(310));
      (et = e),
        (e = {
          memoizedState: et.memoizedState,
          baseState: et.baseState,
          baseQueue: et.baseQueue,
          queue: et.queue,
          next: null,
        }),
        Dt === null ? (Me.memoizedState = Dt = e) : (Dt = Dt.next = e);
    }
    return Dt;
  }
  function rl() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ms(e) {
    var t = ws;
    return (
      (ws += 1),
      wr === null && (wr = []),
      (e = Fp(wr, e, t)),
      (t = Me),
      (Dt === null ? t.memoizedState : Dt.next) === null &&
        ((t = t.alternate),
        (k.H = t === null || t.memoizedState === null ? C1 : D0)),
      e
    );
  }
  function sl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ms(e);
      if (e.$$typeof === D) return qt(e);
    }
    throw Error(s(438, String(e)));
  }
  function p0(e) {
    var t = null,
      r = Me.updateQueue;
    if ((r !== null && (t = r.memoCache), t == null)) {
      var o = Me.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (t = {
              data: o.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      r === null && ((r = rl()), (Me.updateQueue = r)),
      (r.memoCache = t),
      (r = t.data[t.index]),
      r === void 0)
    )
      for (r = t.data[t.index] = Array(e), o = 0; o < e; o++) r[o] = z;
    return t.index++, r;
  }
  function Ni(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ol(e) {
    var t = At();
    return m0(t, et, e);
  }
  function m0(e, t, r) {
    var o = e.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = r;
    var u = e.baseQueue,
      h = o.pending;
    if (h !== null) {
      if (u !== null) {
        var g = u.next;
        (u.next = h.next), (h.next = g);
      }
      (t.baseQueue = u = h), (o.pending = null);
    }
    if (((h = e.baseState), u === null)) e.memoizedState = h;
    else {
      t = u.next;
      var B = (g = null),
        F = null,
        G = t,
        ne = !1;
      do {
        var re = G.lane & -536870913;
        if (re !== G.lane ? (Ve & re) === re : (zi & re) === re) {
          var Z = G.revertLane;
          if (Z === 0)
            F !== null &&
              (F = F.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: G.action,
                  hasEagerState: G.hasEagerState,
                  eagerState: G.eagerState,
                  next: null,
                }),
              re === Cr && (ne = !0);
          else if ((zi & Z) === Z) {
            (G = G.next), Z === Cr && (ne = !0);
            continue;
          } else
            (re = {
              lane: 0,
              revertLane: G.revertLane,
              gesture: null,
              action: G.action,
              hasEagerState: G.hasEagerState,
              eagerState: G.eagerState,
              next: null,
            }),
              F === null ? ((B = F = re), (g = h)) : (F = F.next = re),
              (Me.lanes |= Z),
              (ca |= Z);
          (re = G.action),
            Ga && r(h, re),
            (h = G.hasEagerState ? G.eagerState : r(h, re));
        } else
          (Z = {
            lane: re,
            revertLane: G.revertLane,
            gesture: G.gesture,
            action: G.action,
            hasEagerState: G.hasEagerState,
            eagerState: G.eagerState,
            next: null,
          }),
            F === null ? ((B = F = Z), (g = h)) : (F = F.next = Z),
            (Me.lanes |= re),
            (ca |= re);
        G = G.next;
      } while (G !== null && G !== t);
      if (
        (F === null ? (g = h) : (F.next = B),
        !gn(h, e.memoizedState) && ((Bt = !0), ne && ((r = Dr), r !== null)))
      )
        throw r;
      (e.memoizedState = h),
        (e.baseState = g),
        (e.baseQueue = F),
        (o.lastRenderedState = h);
    }
    return u === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function x0(e) {
    var t = At(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var o = r.dispatch,
      u = r.pending,
      h = t.memoizedState;
    if (u !== null) {
      r.pending = null;
      var g = (u = u.next);
      do (h = e(h, g.action)), (g = g.next);
      while (g !== u);
      gn(h, t.memoizedState) || (Bt = !0),
        (t.memoizedState = h),
        t.baseQueue === null && (t.baseState = h),
        (r.lastRenderedState = h);
    }
    return [h, o];
  }
  function Yp(e, t, r) {
    var o = Me,
      u = At(),
      h = je;
    if (h) {
      if (r === void 0) throw Error(s(407));
      r = r();
    } else r = t();
    var g = !gn((et || u).memoizedState, r);
    if (
      (g && ((u.memoizedState = r), (Bt = !0)),
      (u = u.queue),
      g0(Kp.bind(null, o, u, e), [e]),
      u.getSnapshot !== t || g || (Dt !== null && Dt.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        Mr(9, { destroy: void 0 }, Gp.bind(null, o, u, r, t), null),
        it === null)
      )
        throw Error(s(349));
      h || (zi & 127) !== 0 || Xp(o, t, r);
    }
    return r;
  }
  function Xp(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Me.updateQueue),
      t === null
        ? ((t = rl()), (Me.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function Gp(e, t, r, o) {
    (t.value = r), (t.getSnapshot = o), Zp(t) && Qp(e);
  }
  function Kp(e, t, r) {
    return r(function () {
      Zp(t) && Qp(e);
    });
  }
  function Zp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !gn(e, r);
    } catch (o) {
      return !0;
    }
  }
  function Qp(e) {
    var t = Ua(e, 2);
    t !== null && fn(t, e, 2);
  }
  function y0(e) {
    var t = It();
    if (typeof e == "function") {
      var r = e;
      if (((e = r()), Ga)) {
        an(!0);
        try {
          r();
        } finally {
          an(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ni,
        lastRenderedState: e,
      }),
      t
    );
  }
  function $p(e, t, r, o) {
    return (e.baseState = r), m0(e, et, typeof o == "function" ? o : Ni);
  }
  function rE(e, t, r, o, u) {
    if (cl(e)) throw Error(s(485));
    if (((e = t.action), e !== null)) {
      var h = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (g) {
          h.listeners.push(g);
        },
      };
      k.T !== null ? r(!0) : (h.isTransition = !1),
        o(h),
        (r = t.pending),
        r === null
          ? ((h.next = t.pending = h), Jp(t, h))
          : ((h.next = r.next), (t.pending = r.next = h));
    }
  }
  function Jp(e, t) {
    var r = t.action,
      o = t.payload,
      u = e.state;
    if (t.isTransition) {
      var h = k.T,
        g = {};
      k.T = g;
      try {
        var B = r(u, o),
          F = k.S;
        F !== null && F(g, B), Wp(e, t, B);
      } catch (G) {
        v0(e, t, G);
      } finally {
        h !== null && g.types !== null && (h.types = g.types), (k.T = h);
      }
    } else
      try {
        (h = r(u, o)), Wp(e, t, h);
      } catch (G) {
        v0(e, t, G);
      }
  }
  function Wp(e, t, r) {
    r !== null && typeof r == "object" && typeof r.then == "function"
      ? r.then(
          function (o) {
            Ip(e, t, o);
          },
          function (o) {
            return v0(e, t, o);
          },
        )
      : Ip(e, t, r);
  }
  function Ip(e, t, r) {
    (t.status = "fulfilled"),
      (t.value = r),
      e1(t),
      (e.state = r),
      (t = e.pending),
      t !== null &&
        ((r = t.next),
        r === t ? (e.pending = null) : ((r = r.next), (t.next = r), Jp(e, r)));
  }
  function v0(e, t, r) {
    var o = e.pending;
    if (((e.pending = null), o !== null)) {
      o = o.next;
      do (t.status = "rejected"), (t.reason = r), e1(t), (t = t.next);
      while (t !== o);
    }
    e.action = null;
  }
  function e1(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function t1(e, t) {
    return t;
  }
  function n1(e, t) {
    if (je) {
      var r = it.formState;
      if (r !== null) {
        e: {
          var o = Me;
          if (je) {
            if (ut) {
              t: {
                for (var u = ut, h = Hn; u.nodeType !== 8; ) {
                  if (!h) {
                    u = null;
                    break t;
                  }
                  if (((u = kn(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (h = u.data), (u = h === "F!" || h === "F" ? u : null);
              }
              if (u) {
                (ut = kn(u.nextSibling)), (o = u.data === "F!");
                break e;
              }
            }
            ta(o);
          }
          o = !1;
        }
        o && (t = r[0]);
      }
    }
    return (
      (r = It()),
      (r.memoizedState = r.baseState = t),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t1,
        lastRenderedState: t,
      }),
      (r.queue = o),
      (r = b1.bind(null, Me, o)),
      (o.dispatch = r),
      (o = y0(!1)),
      (h = C0.bind(null, Me, !1, o.queue)),
      (o = It()),
      (u = { state: t, dispatch: null, action: e, pending: null }),
      (o.queue = u),
      (r = rE.bind(null, Me, u, h, r)),
      (u.dispatch = r),
      (o.memoizedState = e),
      [t, r, !1]
    );
  }
  function i1(e) {
    var t = At();
    return a1(t, et, e);
  }
  function a1(e, t, r) {
    if (
      ((t = m0(e, t, t1)[0]),
      (e = ol(Ni)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var o = Ms(t);
      } catch (g) {
        throw g === Br ? Jo : g;
      }
    else o = t;
    t = At();
    var u = t.queue,
      h = u.dispatch;
    return (
      r !== t.memoizedState &&
        ((Me.flags |= 2048),
        Mr(9, { destroy: void 0 }, sE.bind(null, u, r), null)),
      [o, h, e]
    );
  }
  function sE(e, t) {
    e.action = t;
  }
  function r1(e) {
    var t = At(),
      r = et;
    if (r !== null) return a1(t, r, e);
    At(), (t = t.memoizedState), (r = At());
    var o = r.queue.dispatch;
    return (r.memoizedState = e), [t, o, !1];
  }
  function Mr(e, t, r, o) {
    return (
      (e = { tag: e, create: r, deps: o, inst: t, next: null }),
      (t = Me.updateQueue),
      t === null && ((t = rl()), (Me.updateQueue = t)),
      (r = t.lastEffect),
      r === null
        ? (t.lastEffect = e.next = e)
        : ((o = r.next), (r.next = e), (e.next = o), (t.lastEffect = e)),
      e
    );
  }
  function s1() {
    return At().memoizedState;
  }
  function ll(e, t, r, o) {
    var u = It();
    (Me.flags |= e),
      (u.memoizedState = Mr(
        1 | t,
        { destroy: void 0 },
        r,
        o === void 0 ? null : o,
      ));
  }
  function ul(e, t, r, o) {
    var u = At();
    o = o === void 0 ? null : o;
    var h = u.memoizedState.inst;
    et !== null && o !== null && u0(o, et.memoizedState.deps)
      ? (u.memoizedState = Mr(t, h, r, o))
      : ((Me.flags |= e), (u.memoizedState = Mr(1 | t, h, r, o)));
  }
  function o1(e, t) {
    ll(8390656, 8, e, t);
  }
  function g0(e, t) {
    ul(2048, 8, e, t);
  }
  function oE(e) {
    Me.flags |= 4;
    var t = Me.updateQueue;
    if (t === null) (t = rl()), (Me.updateQueue = t), (t.events = [e]);
    else {
      var r = t.events;
      r === null ? (t.events = [e]) : r.push(e);
    }
  }
  function l1(e) {
    var t = At().memoizedState;
    return (
      oE({ ref: t, nextImpl: e }),
      function () {
        if ((Ze & 2) !== 0) throw Error(s(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function u1(e, t) {
    return ul(4, 2, e, t);
  }
  function c1(e, t) {
    return ul(4, 4, e, t);
  }
  function f1(e, t) {
    if (typeof t == "function") {
      e = e();
      var r = t(e);
      return function () {
        typeof r == "function" ? r() : t(null);
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
  function h1(e, t, r) {
    (r = r != null ? r.concat([e]) : null), ul(4, 4, f1.bind(null, t, e), r);
  }
  function E0() {}
  function d1(e, t) {
    var r = At();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return t !== null && u0(t, o[1]) ? o[0] : ((r.memoizedState = [e, t]), e);
  }
  function p1(e, t) {
    var r = At();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    if (t !== null && u0(t, o[1])) return o[0];
    if (((o = e()), Ga)) {
      an(!0);
      try {
        e();
      } finally {
        an(!1);
      }
    }
    return (r.memoizedState = [o, t]), o;
  }
  function b0(e, t, r) {
    return r === void 0 || ((zi & 1073741824) !== 0 && (Ve & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = r), (e = mm()), (Me.lanes |= e), (ca |= e), r);
  }
  function m1(e, t, r, o) {
    return gn(r, t)
      ? r
      : Tr.current !== null
        ? ((e = b0(e, r, o)), gn(e, t) || (Bt = !0), e)
        : (zi & 42) === 0 || ((zi & 1073741824) !== 0 && (Ve & 261930) === 0)
          ? ((Bt = !0), (e.memoizedState = r))
          : ((e = mm()), (Me.lanes |= e), (ca |= e), t);
  }
  function x1(e, t, r, o, u) {
    var h = te.p;
    te.p = h !== 0 && 8 > h ? h : 8;
    var g = k.T,
      B = {};
    (k.T = B), C0(e, !1, t, r);
    try {
      var F = u(),
        G = k.S;
      if (
        (G !== null && G(B, F),
        F !== null && typeof F == "object" && typeof F.then == "function")
      ) {
        var ne = nE(F, o);
        Os(e, t, ne, Dn(e));
      } else Os(e, t, o, Dn(e));
    } catch (re) {
      Os(e, t, { then: function () {}, status: "rejected", reason: re }, Dn());
    } finally {
      (te.p = h),
        g !== null && B.types !== null && (g.types = B.types),
        (k.T = g);
    }
  }
  function lE() {}
  function A0(e, t, r, o) {
    if (e.tag !== 5) throw Error(s(476));
    var u = y1(e).queue;
    x1(
      e,
      u,
      t,
      ie,
      r === null
        ? lE
        : function () {
            return v1(e), r(o);
          },
    );
  }
  function y1(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ie,
      baseState: ie,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ni,
        lastRenderedState: ie,
      },
      next: null,
    };
    var r = {};
    return (
      (t.next = {
        memoizedState: r,
        baseState: r,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ni,
          lastRenderedState: r,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function v1(e) {
    var t = y1(e);
    t.next === null && (t = e.alternate.memoizedState),
      Os(e, t.next.queue, {}, Dn());
  }
  function S0() {
    return qt(Qs);
  }
  function g1() {
    return At().memoizedState;
  }
  function E1() {
    return At().memoizedState;
  }
  function uE(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var r = Dn();
          e = aa(r);
          var o = ra(t, e, r);
          o !== null && (fn(o, t, r), _s(o, t, r)),
            (t = { cache: Wc() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function cE(e, t, r) {
    var o = Dn();
    (r = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      cl(e)
        ? A1(t, r)
        : ((r = jc(e, t, r, o)), r !== null && (fn(r, e, o), S1(r, t, o)));
  }
  function b1(e, t, r) {
    var o = Dn();
    Os(e, t, r, o);
  }
  function Os(e, t, r, o) {
    var u = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (cl(e)) A1(t, u);
    else {
      var h = e.alternate;
      if (
        e.lanes === 0 &&
        (h === null || h.lanes === 0) &&
        ((h = t.lastRenderedReducer), h !== null)
      )
        try {
          var g = t.lastRenderedState,
            B = h(g, r);
          if (((u.hasEagerState = !0), (u.eagerState = B), gn(B, g)))
            return Yo(e, t, u, 0), it === null && Po(), !1;
        } catch (F) {
        } finally {
        }
      if (((r = jc(e, t, u, o)), r !== null))
        return fn(r, e, o), S1(r, t, o), !0;
    }
    return !1;
  }
  function C0(e, t, r, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: nf(),
        gesture: null,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      cl(e))
    ) {
      if (t) throw Error(s(479));
    } else (t = jc(e, r, o, 2)), t !== null && fn(t, e, 2);
  }
  function cl(e) {
    var t = e.alternate;
    return e === Me || (t !== null && t === Me);
  }
  function A1(e, t) {
    Rr = il = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function S1(e, t, r) {
    if ((r & 4194048) !== 0) {
      var o = t.lanes;
      (o &= e.pendingLanes), (r |= o), (t.lanes = r), V(e, r);
    }
  }
  var Fs = {
    readContext: qt,
    use: sl,
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
    useHostTransitionStatus: yt,
    useFormState: yt,
    useActionState: yt,
    useOptimistic: yt,
    useMemoCache: yt,
    useCacheRefresh: yt,
  };
  Fs.useEffectEvent = yt;
  var C1 = {
      readContext: qt,
      use: sl,
      useCallback: function (e, t) {
        return (It().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: qt,
      useEffect: o1,
      useImperativeHandle: function (e, t, r) {
        (r = r != null ? r.concat([e]) : null),
          ll(4194308, 4, f1.bind(null, t, e), r);
      },
      useLayoutEffect: function (e, t) {
        return ll(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        ll(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = It();
        t = t === void 0 ? null : t;
        var o = e();
        if (Ga) {
          an(!0);
          try {
            e();
          } finally {
            an(!1);
          }
        }
        return (r.memoizedState = [o, t]), o;
      },
      useReducer: function (e, t, r) {
        var o = It();
        if (r !== void 0) {
          var u = r(t);
          if (Ga) {
            an(!0);
            try {
              r(t);
            } finally {
              an(!1);
            }
          }
        } else u = t;
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
          (e = e.dispatch = cE.bind(null, Me, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = It();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = y0(e);
        var t = e.queue,
          r = b1.bind(null, Me, t);
        return (t.dispatch = r), [e.memoizedState, r];
      },
      useDebugValue: E0,
      useDeferredValue: function (e, t) {
        var r = It();
        return b0(r, e, t);
      },
      useTransition: function () {
        var e = y0(!1);
        return (
          (e = x1.bind(null, Me, e.queue, !0, !1)),
          (It().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, r) {
        var o = Me,
          u = It();
        if (je) {
          if (r === void 0) throw Error(s(407));
          r = r();
        } else {
          if (((r = t()), it === null)) throw Error(s(349));
          (Ve & 127) !== 0 || Xp(o, t, r);
        }
        u.memoizedState = r;
        var h = { value: r, getSnapshot: t };
        return (
          (u.queue = h),
          o1(Kp.bind(null, o, h, e), [e]),
          (o.flags |= 2048),
          Mr(9, { destroy: void 0 }, Gp.bind(null, o, h, r, t), null),
          r
        );
      },
      useId: function () {
        var e = It(),
          t = it.identifierPrefix;
        if (je) {
          var r = xi,
            o = mi;
          (r = (o & ~(1 << (32 - Nt(o) - 1))).toString(32) + r),
            (t = "_" + t + "R_" + r),
            (r = al++),
            0 < r && (t += "H" + r.toString(32)),
            (t += "_");
        } else (r = iE++), (t = "_" + t + "r_" + r.toString(32) + "_");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: S0,
      useFormState: n1,
      useActionState: n1,
      useOptimistic: function (e) {
        var t = It();
        t.memoizedState = t.baseState = e;
        var r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = r),
          (t = C0.bind(null, Me, !0, r)),
          (r.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: p0,
      useCacheRefresh: function () {
        return (It().memoizedState = uE.bind(null, Me));
      },
      useEffectEvent: function (e) {
        var t = It(),
          r = { impl: e };
        return (
          (t.memoizedState = r),
          function () {
            if ((Ze & 2) !== 0) throw Error(s(440));
            return r.impl.apply(void 0, arguments);
          }
        );
      },
    },
    D0 = {
      readContext: qt,
      use: sl,
      useCallback: d1,
      useContext: qt,
      useEffect: g0,
      useImperativeHandle: h1,
      useInsertionEffect: u1,
      useLayoutEffect: c1,
      useMemo: p1,
      useReducer: ol,
      useRef: s1,
      useState: function () {
        return ol(Ni);
      },
      useDebugValue: E0,
      useDeferredValue: function (e, t) {
        var r = At();
        return m1(r, et.memoizedState, e, t);
      },
      useTransition: function () {
        var e = ol(Ni)[0],
          t = At().memoizedState;
        return [typeof e == "boolean" ? e : Ms(e), t];
      },
      useSyncExternalStore: Yp,
      useId: g1,
      useHostTransitionStatus: S0,
      useFormState: i1,
      useActionState: i1,
      useOptimistic: function (e, t) {
        var r = At();
        return $p(r, et, e, t);
      },
      useMemoCache: p0,
      useCacheRefresh: E1,
    };
  D0.useEffectEvent = l1;
  var D1 = {
    readContext: qt,
    use: sl,
    useCallback: d1,
    useContext: qt,
    useEffect: g0,
    useImperativeHandle: h1,
    useInsertionEffect: u1,
    useLayoutEffect: c1,
    useMemo: p1,
    useReducer: x0,
    useRef: s1,
    useState: function () {
      return x0(Ni);
    },
    useDebugValue: E0,
    useDeferredValue: function (e, t) {
      var r = At();
      return et === null ? b0(r, e, t) : m1(r, et.memoizedState, e, t);
    },
    useTransition: function () {
      var e = x0(Ni)[0],
        t = At().memoizedState;
      return [typeof e == "boolean" ? e : Ms(e), t];
    },
    useSyncExternalStore: Yp,
    useId: g1,
    useHostTransitionStatus: S0,
    useFormState: r1,
    useActionState: r1,
    useOptimistic: function (e, t) {
      var r = At();
      return et !== null
        ? $p(r, et, e, t)
        : ((r.baseState = e), [e, r.queue.dispatch]);
    },
    useMemoCache: p0,
    useCacheRefresh: E1,
  };
  D1.useEffectEvent = l1;
  function B0(e, t, r, o) {
    (t = e.memoizedState),
      (r = r(o, t)),
      (r = r == null ? t : y({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var _0 = {
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var o = Dn(),
        u = aa(o);
      (u.payload = t),
        r != null && (u.callback = r),
        (t = ra(e, u, o)),
        t !== null && (fn(t, e, o), _s(t, e, o));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var o = Dn(),
        u = aa(o);
      (u.tag = 1),
        (u.payload = t),
        r != null && (u.callback = r),
        (t = ra(e, u, o)),
        t !== null && (fn(t, e, o), _s(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Dn(),
        o = aa(r);
      (o.tag = 2),
        t != null && (o.callback = t),
        (t = ra(e, o, r)),
        t !== null && (fn(t, e, r), _s(t, e, r));
    },
  };
  function B1(e, t, r, o, u, h, g) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, h, g)
        : t.prototype && t.prototype.isPureReactComponent
          ? !gs(r, o) || !gs(u, h)
          : !0
    );
  }
  function _1(e, t, r, o) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(r, o),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, o),
      t.state !== e && _0.enqueueReplaceState(t, t.state, null);
  }
  function Ka(e, t) {
    var r = t;
    if ("ref" in t) {
      r = {};
      for (var o in t) o !== "ref" && (r[o] = t[o]);
    }
    if ((e = e.defaultProps)) {
      r === t && (r = y({}, r));
      for (var u in e) r[u] === void 0 && (r[u] = e[u]);
    }
    return r;
  }
  function T1(e) {
    qo(e);
  }
  function R1(e) {
    console.error(e);
  }
  function w1(e) {
    qo(e);
  }
  function fl(e, t) {
    try {
      var r = e.onUncaughtError;
      r(t.value, { componentStack: t.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function M1(e, t, r) {
    try {
      var o = e.onCaughtError;
      o(r.value, {
        componentStack: r.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function T0(e, t, r) {
    return (
      (r = aa(r)),
      (r.tag = 3),
      (r.payload = { element: null }),
      (r.callback = function () {
        fl(e, t);
      }),
      r
    );
  }
  function O1(e) {
    return (e = aa(e)), (e.tag = 3), e;
  }
  function F1(e, t, r, o) {
    var u = r.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var h = o.value;
      (e.payload = function () {
        return u(h);
      }),
        (e.callback = function () {
          M1(t, r, o);
        });
    }
    var g = r.stateNode;
    g !== null &&
      typeof g.componentDidCatch == "function" &&
      (e.callback = function () {
        M1(t, r, o),
          typeof u != "function" &&
            (fa === null ? (fa = new Set([this])) : fa.add(this));
        var B = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: B !== null ? B : "",
        });
      });
  }
  function fE(e, t, r, o, u) {
    if (
      ((r.flags |= 32768),
      o !== null && typeof o == "object" && typeof o.then == "function")
    ) {
      if (
        ((t = r.alternate),
        t !== null && Sr(t, r, u, !0),
        (r = bn.current),
        r !== null)
      ) {
        switch (r.tag) {
          case 31:
          case 13:
            return (
              Vn === null ? Sl() : r.alternate === null && vt === 0 && (vt = 3),
              (r.flags &= -257),
              (r.flags |= 65536),
              (r.lanes = u),
              o === Wo
                ? (r.flags |= 16384)
                : ((t = r.updateQueue),
                  t === null ? (r.updateQueue = new Set([o])) : t.add(o),
                  I0(e, o, u)),
              !1
            );
          case 22:
            return (
              (r.flags |= 65536),
              o === Wo
                ? (r.flags |= 16384)
                : ((t = r.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([o]),
                      }),
                      (r.updateQueue = t))
                    : ((r = t.retryQueue),
                      r === null ? (t.retryQueue = new Set([o])) : r.add(o)),
                  I0(e, o, u)),
              !1
            );
        }
        throw Error(s(435, r.tag));
      }
      return I0(e, o, u), Sl(), !1;
    }
    if (je)
      return (
        (t = bn.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            o !== Kc && ((e = Error(s(422), { cause: o })), As(Nn(e, r))))
          : (o !== Kc && ((t = Error(s(423), { cause: o })), As(Nn(t, r))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (o = Nn(o, r)),
            (u = T0(e.stateNode, o, u)),
            a0(e, u),
            vt !== 4 && (vt = 2)),
        !1
      );
    var h = Error(s(520), { cause: o });
    if (
      ((h = Nn(h, r)),
      js === null ? (js = [h]) : js.push(h),
      vt !== 4 && (vt = 2),
      t === null)
    )
      return !0;
    (o = Nn(o, r)), (r = t);
    do {
      switch (r.tag) {
        case 3:
          return (
            (r.flags |= 65536),
            (e = u & -u),
            (r.lanes |= e),
            (e = T0(r.stateNode, o, e)),
            a0(r, e),
            !1
          );
        case 1:
          if (
            ((t = r.type),
            (h = r.stateNode),
            (r.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (h !== null &&
                  typeof h.componentDidCatch == "function" &&
                  (fa === null || !fa.has(h)))))
          )
            return (
              (r.flags |= 65536),
              (u &= -u),
              (r.lanes |= u),
              (u = O1(u)),
              F1(u, e, r, o),
              a0(r, u),
              !1
            );
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var R0 = Error(s(461)),
    Bt = !1;
  function Pt(e, t, r, o) {
    t.child = e === null ? Up(t, null, r, o) : Xa(t, e.child, r, o);
  }
  function z1(e, t, r, o, u) {
    r = r.render;
    var h = t.ref;
    if ("ref" in o) {
      var g = {};
      for (var B in o) B !== "ref" && (g[B] = o[B]);
    } else g = o;
    return (
      ja(t),
      (o = c0(e, t, r, g, h, u)),
      (B = f0()),
      e !== null && !Bt
        ? (h0(e, t, u), Li(e, t, u))
        : (je && B && Xc(t), (t.flags |= 1), Pt(e, t, o, u), t.child)
    );
  }
  function N1(e, t, r, o, u) {
    if (e === null) {
      var h = r.type;
      return typeof h == "function" &&
        !qc(h) &&
        h.defaultProps === void 0 &&
        r.compare === null
        ? ((t.tag = 15), (t.type = h), L1(e, t, h, o, u))
        : ((e = Go(r.type, null, o, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((h = e.child), !U0(e, u))) {
      var g = h.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : gs), r(g, o) && e.ref === t.ref)
      )
        return Li(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = wi(h, o)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function L1(e, t, r, o, u) {
    if (e !== null) {
      var h = e.memoizedProps;
      if (gs(h, o) && e.ref === t.ref)
        if (((Bt = !1), (t.pendingProps = o = h), U0(e, u)))
          (e.flags & 131072) !== 0 && (Bt = !0);
        else return (t.lanes = e.lanes), Li(e, t, u);
    }
    return w0(e, t, r, o, u);
  }
  function U1(e, t, r, o) {
    var u = o.children,
      h = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      o.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((h = h !== null ? h.baseLanes | r : r), e !== null)) {
          for (o = t.child = e.child, u = 0; o !== null; )
            (u = u | o.lanes | o.childLanes), (o = o.sibling);
          o = u & ~h;
        } else (o = 0), (t.child = null);
        return H1(e, t, h, r, o);
      }
      if ((r & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && $o(t, h !== null ? h.cachePool : null),
          h !== null ? kp(t, h) : s0(),
          jp(t);
      else
        return (
          (o = t.lanes = 536870912),
          H1(e, t, h !== null ? h.baseLanes | r : r, r, o)
        );
    } else
      h !== null
        ? ($o(t, h.cachePool), kp(t, h), oa(), (t.memoizedState = null))
        : (e !== null && $o(t, null), s0(), oa());
    return Pt(e, t, u, r), t.child;
  }
  function zs(e, t) {
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
  function H1(e, t, r, o, u) {
    var h = e0();
    return (
      (h = h === null ? null : { parent: Ct._currentValue, pool: h }),
      (t.memoizedState = { baseLanes: r, cachePool: h }),
      e !== null && $o(t, null),
      s0(),
      jp(t),
      e !== null && Sr(e, t, o, !0),
      (t.childLanes = u),
      null
    );
  }
  function hl(e, t) {
    return (
      (t = pl({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function V1(e, t, r) {
    return (
      Xa(t, e.child, null, r),
      (e = hl(t, t.pendingProps)),
      (e.flags |= 2),
      An(t),
      (t.memoizedState = null),
      e
    );
  }
  function hE(e, t, r) {
    var o = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (je) {
        if (o.mode === "hidden")
          return (e = hl(t, o)), (t.lanes = 536870912), zs(null, e);
        if (
          (l0(t),
          (e = ut)
            ? ((e = Jm(e, Hn)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Ii !== null ? { id: mi, overflow: xi } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (r = Ap(e)),
                (r.return = t),
                (t.child = r),
                (jt = t),
                (ut = null)))
            : (e = null),
          e === null)
        )
          throw ta(t);
        return (t.lanes = 536870912), null;
      }
      return hl(t, o);
    }
    var h = e.memoizedState;
    if (h !== null) {
      var g = h.dehydrated;
      if ((l0(t), u))
        if (t.flags & 256) (t.flags &= -257), (t = V1(e, t, r));
        else if (t.memoizedState !== null)
          (t.child = e.child), (t.flags |= 128), (t = null);
        else throw Error(s(558));
      else if (
        (Bt || Sr(e, t, r, !1), (u = (r & e.childLanes) !== 0), Bt || u)
      ) {
        if (
          ((o = it),
          o !== null && ((g = K(o, r)), g !== 0 && g !== h.retryLane))
        )
          throw ((h.retryLane = g), Ua(e, g), fn(o, e, g), R0);
        Sl(), (t = V1(e, t, r));
      } else
        (e = h.treeContext),
          (ut = kn(g.nextSibling)),
          (jt = t),
          (je = !0),
          (ea = null),
          (Hn = !1),
          e !== null && Dp(t, e),
          (t = hl(t, o)),
          (t.flags |= 4096);
      return t;
    }
    return (
      (e = wi(e.child, { mode: o.mode, children: o.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function dl(e, t) {
    var r = t.ref;
    if (r === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof r != "function" && typeof r != "object") throw Error(s(284));
      (e === null || e.ref !== r) && (t.flags |= 4194816);
    }
  }
  function w0(e, t, r, o, u) {
    return (
      ja(t),
      (r = c0(e, t, r, o, void 0, u)),
      (o = f0()),
      e !== null && !Bt
        ? (h0(e, t, u), Li(e, t, u))
        : (je && o && Xc(t), (t.flags |= 1), Pt(e, t, r, u), t.child)
    );
  }
  function k1(e, t, r, o, u, h) {
    return (
      ja(t),
      (t.updateQueue = null),
      (r = Pp(t, o, r, u)),
      qp(e),
      (o = f0()),
      e !== null && !Bt
        ? (h0(e, t, h), Li(e, t, h))
        : (je && o && Xc(t), (t.flags |= 1), Pt(e, t, r, h), t.child)
    );
  }
  function j1(e, t, r, o, u) {
    if ((ja(t), t.stateNode === null)) {
      var h = gr,
        g = r.contextType;
      typeof g == "object" && g !== null && (h = qt(g)),
        (h = new r(o, h)),
        (t.memoizedState =
          h.state !== null && h.state !== void 0 ? h.state : null),
        (h.updater = _0),
        (t.stateNode = h),
        (h._reactInternals = t),
        (h = t.stateNode),
        (h.props = o),
        (h.state = t.memoizedState),
        (h.refs = {}),
        n0(t),
        (g = r.contextType),
        (h.context = typeof g == "object" && g !== null ? qt(g) : gr),
        (h.state = t.memoizedState),
        (g = r.getDerivedStateFromProps),
        typeof g == "function" && (B0(t, r, g, o), (h.state = t.memoizedState)),
        typeof r.getDerivedStateFromProps == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function" ||
          (typeof h.UNSAFE_componentWillMount != "function" &&
            typeof h.componentWillMount != "function") ||
          ((g = h.state),
          typeof h.componentWillMount == "function" && h.componentWillMount(),
          typeof h.UNSAFE_componentWillMount == "function" &&
            h.UNSAFE_componentWillMount(),
          g !== h.state && _0.enqueueReplaceState(h, h.state, null),
          Rs(t, o, h, u),
          Ts(),
          (h.state = t.memoizedState)),
        typeof h.componentDidMount == "function" && (t.flags |= 4194308),
        (o = !0);
    } else if (e === null) {
      h = t.stateNode;
      var B = t.memoizedProps,
        F = Ka(r, B);
      h.props = F;
      var G = h.context,
        ne = r.contextType;
      (g = gr), typeof ne == "object" && ne !== null && (g = qt(ne));
      var re = r.getDerivedStateFromProps;
      (ne =
        typeof re == "function" ||
        typeof h.getSnapshotBeforeUpdate == "function"),
        (B = t.pendingProps !== B),
        ne ||
          (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
            typeof h.componentWillReceiveProps != "function") ||
          ((B || G !== g) && _1(t, h, o, g)),
        (ia = !1);
      var Z = t.memoizedState;
      (h.state = Z),
        Rs(t, o, h, u),
        Ts(),
        (G = t.memoizedState),
        B || Z !== G || ia
          ? (typeof re == "function" &&
              (B0(t, r, re, o), (G = t.memoizedState)),
            (F = ia || B1(t, r, F, o, Z, G, g))
              ? (ne ||
                  (typeof h.UNSAFE_componentWillMount != "function" &&
                    typeof h.componentWillMount != "function") ||
                  (typeof h.componentWillMount == "function" &&
                    h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == "function" &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof h.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = o),
                (t.memoizedState = G)),
            (h.props = o),
            (h.state = G),
            (h.context = g),
            (o = F))
          : (typeof h.componentDidMount == "function" && (t.flags |= 4194308),
            (o = !1));
    } else {
      (h = t.stateNode),
        i0(e, t),
        (g = t.memoizedProps),
        (ne = Ka(r, g)),
        (h.props = ne),
        (re = t.pendingProps),
        (Z = h.context),
        (G = r.contextType),
        (F = gr),
        typeof G == "object" && G !== null && (F = qt(G)),
        (B = r.getDerivedStateFromProps),
        (G =
          typeof B == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function") ||
          (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
            typeof h.componentWillReceiveProps != "function") ||
          ((g !== re || Z !== F) && _1(t, h, o, F)),
        (ia = !1),
        (Z = t.memoizedState),
        (h.state = Z),
        Rs(t, o, h, u),
        Ts();
      var I = t.memoizedState;
      g !== re ||
      Z !== I ||
      ia ||
      (e !== null && e.dependencies !== null && Zo(e.dependencies))
        ? (typeof B == "function" && (B0(t, r, B, o), (I = t.memoizedState)),
          (ne =
            ia ||
            B1(t, r, ne, o, Z, I, F) ||
            (e !== null && e.dependencies !== null && Zo(e.dependencies)))
            ? (G ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" &&
                  h.componentWillUpdate(o, I, F),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(o, I, F)),
              typeof h.componentDidUpdate == "function" && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (g === e.memoizedProps && Z === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (g === e.memoizedProps && Z === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = I)),
          (h.props = o),
          (h.state = I),
          (h.context = F),
          (o = ne))
        : (typeof h.componentDidUpdate != "function" ||
            (g === e.memoizedProps && Z === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (g === e.memoizedProps && Z === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return (
      (h = o),
      dl(e, t),
      (o = (t.flags & 128) !== 0),
      h || o
        ? ((h = t.stateNode),
          (r =
            o && typeof r.getDerivedStateFromError != "function"
              ? null
              : h.render()),
          (t.flags |= 1),
          e !== null && o
            ? ((t.child = Xa(t, e.child, null, u)),
              (t.child = Xa(t, null, r, u)))
            : Pt(e, t, r, u),
          (t.memoizedState = h.state),
          (e = t.child))
        : (e = Li(e, t, u)),
      e
    );
  }
  function q1(e, t, r, o) {
    return Va(), (t.flags |= 256), Pt(e, t, r, o), t.child;
  }
  var M0 = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function O0(e) {
    return { baseLanes: e, cachePool: Mp() };
  }
  function F0(e, t, r) {
    return (e = e !== null ? e.childLanes & ~r : 0), t && (e |= Cn), e;
  }
  function P1(e, t, r) {
    var o = t.pendingProps,
      u = !1,
      h = (t.flags & 128) !== 0,
      g;
    if (
      ((g = h) ||
        (g =
          e !== null && e.memoizedState === null ? !1 : (bt.current & 2) !== 0),
      g && ((u = !0), (t.flags &= -129)),
      (g = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (je) {
        if (
          (u ? sa(t) : oa(),
          (e = ut)
            ? ((e = Jm(e, Hn)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Ii !== null ? { id: mi, overflow: xi } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (r = Ap(e)),
                (r.return = t),
                (t.child = r),
                (jt = t),
                (ut = null)))
            : (e = null),
          e === null)
        )
          throw ta(t);
        return xf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null;
      }
      var B = o.children;
      return (
        (o = o.fallback),
        u
          ? (oa(),
            (u = t.mode),
            (B = pl({ mode: "hidden", children: B }, u)),
            (o = Ha(o, u, r, null)),
            (B.return = t),
            (o.return = t),
            (B.sibling = o),
            (t.child = B),
            (o = t.child),
            (o.memoizedState = O0(r)),
            (o.childLanes = F0(e, g, r)),
            (t.memoizedState = M0),
            zs(null, o))
          : (sa(t), z0(t, B))
      );
    }
    var F = e.memoizedState;
    if (F !== null && ((B = F.dehydrated), B !== null)) {
      if (h)
        t.flags & 256
          ? (sa(t), (t.flags &= -257), (t = N0(e, t, r)))
          : t.memoizedState !== null
            ? (oa(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (oa(),
              (B = o.fallback),
              (u = t.mode),
              (o = pl({ mode: "visible", children: o.children }, u)),
              (B = Ha(B, u, r, null)),
              (B.flags |= 2),
              (o.return = t),
              (B.return = t),
              (o.sibling = B),
              (t.child = o),
              Xa(t, e.child, null, r),
              (o = t.child),
              (o.memoizedState = O0(r)),
              (o.childLanes = F0(e, g, r)),
              (t.memoizedState = M0),
              (t = zs(null, o)));
      else if ((sa(t), xf(B))) {
        if (((g = B.nextSibling && B.nextSibling.dataset), g)) var G = g.dgst;
        (g = G),
          (o = Error(s(419))),
          (o.stack = ""),
          (o.digest = g),
          As({ value: o, source: null, stack: null }),
          (t = N0(e, t, r));
      } else if (
        (Bt || Sr(e, t, r, !1), (g = (r & e.childLanes) !== 0), Bt || g)
      ) {
        if (
          ((g = it),
          g !== null && ((o = K(g, r)), o !== 0 && o !== F.retryLane))
        )
          throw ((F.retryLane = o), Ua(e, o), fn(g, e, o), R0);
        mf(B) || Sl(), (t = N0(e, t, r));
      } else
        mf(B)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = F.treeContext),
            (ut = kn(B.nextSibling)),
            (jt = t),
            (je = !0),
            (ea = null),
            (Hn = !1),
            e !== null && Dp(t, e),
            (t = z0(t, o.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (oa(),
        (B = o.fallback),
        (u = t.mode),
        (F = e.child),
        (G = F.sibling),
        (o = wi(F, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = F.subtreeFlags & 65011712),
        G !== null ? (B = wi(G, B)) : ((B = Ha(B, u, r, null)), (B.flags |= 2)),
        (B.return = t),
        (o.return = t),
        (o.sibling = B),
        (t.child = o),
        zs(null, o),
        (o = t.child),
        (B = e.child.memoizedState),
        B === null
          ? (B = O0(r))
          : ((u = B.cachePool),
            u !== null
              ? ((F = Ct._currentValue),
                (u = u.parent !== F ? { parent: F, pool: F } : u))
              : (u = Mp()),
            (B = { baseLanes: B.baseLanes | r, cachePool: u })),
        (o.memoizedState = B),
        (o.childLanes = F0(e, g, r)),
        (t.memoizedState = M0),
        zs(e.child, o))
      : (sa(t),
        (r = e.child),
        (e = r.sibling),
        (r = wi(r, { mode: "visible", children: o.children })),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
          ((g = t.deletions),
          g === null ? ((t.deletions = [e]), (t.flags |= 16)) : g.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r);
  }
  function z0(e, t) {
    return (
      (t = pl({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function pl(e, t) {
    return (e = En(22, e, null, t)), (e.lanes = 0), e;
  }
  function N0(e, t, r) {
    return (
      Xa(t, e.child, null, r),
      (e = z0(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Y1(e, t, r) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), $c(e.return, t, r);
  }
  function L0(e, t, r, o, u, h) {
    var g = e.memoizedState;
    g === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: r,
          tailMode: u,
          treeForkCount: h,
        })
      : ((g.isBackwards = t),
        (g.rendering = null),
        (g.renderingStartTime = 0),
        (g.last = o),
        (g.tail = r),
        (g.tailMode = u),
        (g.treeForkCount = h));
  }
  function X1(e, t, r) {
    var o = t.pendingProps,
      u = o.revealOrder,
      h = o.tail;
    o = o.children;
    var g = bt.current,
      B = (g & 2) !== 0;
    if (
      (B ? ((g = (g & 1) | 2), (t.flags |= 128)) : (g &= 1),
      P(bt, g),
      Pt(e, t, o, r),
      (o = je ? bs : 0),
      !B && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Y1(e, r, t);
        else if (e.tag === 19) Y1(e, r, t);
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
    switch (u) {
      case "forwards":
        for (r = t.child, u = null; r !== null; )
          (e = r.alternate),
            e !== null && nl(e) === null && (u = r),
            (r = r.sibling);
        (r = u),
          r === null
            ? ((u = t.child), (t.child = null))
            : ((u = r.sibling), (r.sibling = null)),
          L0(t, !1, u, r, h, o);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (r = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && nl(e) === null)) {
            t.child = u;
            break;
          }
          (e = u.sibling), (u.sibling = r), (r = u), (u = e);
        }
        L0(t, !0, r, null, h, o);
        break;
      case "together":
        L0(t, !1, null, null, void 0, o);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Li(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (ca |= t.lanes),
      (r & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Sr(e, t, r, !1), (r & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, r = wi(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = wi(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function U0(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Zo(e)));
  }
  function dE(e, t, r) {
    switch (t.tag) {
      case 3:
        be(t, t.stateNode.containerInfo),
          na(t, Ct, e.memoizedState.cache),
          Va();
        break;
      case 27:
      case 5:
        tn(t);
        break;
      case 4:
        be(t, t.stateNode.containerInfo);
        break;
      case 10:
        na(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return (t.flags |= 128), l0(t), null;
        break;
      case 13:
        var o = t.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (sa(t), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? P1(e, t, r)
              : (sa(t), (e = Li(e, t, r)), e !== null ? e.sibling : null);
        sa(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((o = (r & t.childLanes) !== 0),
          o || (Sr(e, t, r, !1), (o = (r & t.childLanes) !== 0)),
          u)
        ) {
          if (o) return X1(e, t, r);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          P(bt, bt.current),
          o)
        )
          break;
        return null;
      case 22:
        return (t.lanes = 0), U1(e, t, r, t.pendingProps);
      case 24:
        na(t, Ct, e.memoizedState.cache);
    }
    return Li(e, t, r);
  }
  function G1(e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Bt = !0;
      else {
        if (!U0(e, r) && (t.flags & 128) === 0) return (Bt = !1), dE(e, t, r);
        Bt = (e.flags & 131072) !== 0;
      }
    else (Bt = !1), je && (t.flags & 1048576) !== 0 && Cp(t, bs, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var o = t.pendingProps;
          if (((e = Pa(t.elementType)), (t.type = e), typeof e == "function"))
            qc(e)
              ? ((o = Ka(e, o)), (t.tag = 1), (t = j1(null, t, e, o, r)))
              : ((t.tag = 0), (t = w0(null, t, e, o, r)));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === R) {
                (t.tag = 11), (t = z1(null, t, e, o, r));
                break e;
              } else if (u === _) {
                (t.tag = 14), (t = N1(null, t, e, o, r));
                break e;
              }
            }
            throw ((t = oe(e) || e), Error(s(306, t, "")));
          }
        }
        return t;
      case 0:
        return w0(e, t, t.type, t.pendingProps, r);
      case 1:
        return (o = t.type), (u = Ka(o, t.pendingProps)), j1(e, t, o, u, r);
      case 3:
        e: {
          if ((be(t, t.stateNode.containerInfo), e === null))
            throw Error(s(387));
          o = t.pendingProps;
          var h = t.memoizedState;
          (u = h.element), i0(e, t), Rs(t, o, null, r);
          var g = t.memoizedState;
          if (
            ((o = g.cache),
            na(t, Ct, o),
            o !== h.cache && Jc(t, [Ct], r, !0),
            Ts(),
            (o = g.element),
            h.isDehydrated)
          )
            if (
              ((h = { element: o, isDehydrated: !1, cache: g.cache }),
              (t.updateQueue.baseState = h),
              (t.memoizedState = h),
              t.flags & 256)
            ) {
              t = q1(e, t, o, r);
              break e;
            } else if (o !== u) {
              (u = Nn(Error(s(424)), t)), As(u), (t = q1(e, t, o, r));
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
                ut = kn(e.firstChild),
                  jt = t,
                  je = !0,
                  ea = null,
                  Hn = !0,
                  r = Up(t, null, o, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
            }
          else {
            if ((Va(), o === u)) {
              t = Li(e, t, r);
              break e;
            }
            Pt(e, t, o, r);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          dl(e, t),
          e === null
            ? (r = ix(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = r)
              : je ||
                ((r = t.type),
                (e = t.pendingProps),
                (o = wl(pe.current).createElement(r)),
                (o[he] = t),
                (o[fe] = e),
                Yt(o, r, e),
                xt(o),
                (t.stateNode = o))
            : (t.memoizedState = ix(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          tn(t),
          e === null &&
            je &&
            ((o = t.stateNode = ex(t.type, t.pendingProps, pe.current)),
            (jt = t),
            (Hn = !0),
            (u = ut),
            ma(t.type) ? ((yf = u), (ut = kn(o.firstChild))) : (ut = u)),
          Pt(e, t, t.pendingProps.children, r),
          dl(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            je &&
            ((u = o = ut) &&
              ((o = PE(o, t.type, t.pendingProps, Hn)),
              o !== null
                ? ((t.stateNode = o),
                  (jt = t),
                  (ut = kn(o.firstChild)),
                  (Hn = !1),
                  (u = !0))
                : (u = !1)),
            u || ta(t)),
          tn(t),
          (u = t.type),
          (h = t.pendingProps),
          (g = e !== null ? e.memoizedProps : null),
          (o = h.children),
          hf(u, h) ? (o = null) : g !== null && hf(u, g) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = c0(e, t, aE, null, null, r)), (Qs._currentValue = u)),
          dl(e, t),
          Pt(e, t, o, r),
          t.child
        );
      case 6:
        return (
          e === null &&
            je &&
            ((e = r = ut) &&
              ((r = YE(r, t.pendingProps, Hn)),
              r !== null
                ? ((t.stateNode = r), (jt = t), (ut = null), (e = !0))
                : (e = !1)),
            e || ta(t)),
          null
        );
      case 13:
        return P1(e, t, r);
      case 4:
        return (
          be(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = Xa(t, null, o, r)) : Pt(e, t, o, r),
          t.child
        );
      case 11:
        return z1(e, t, t.type, t.pendingProps, r);
      case 7:
        return Pt(e, t, t.pendingProps, r), t.child;
      case 8:
        return Pt(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return Pt(e, t, t.pendingProps.children, r), t.child;
      case 10:
        return (
          (o = t.pendingProps),
          na(t, t.type, o.value),
          Pt(e, t, o.children, r),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (o = t.pendingProps.children),
          ja(t),
          (u = qt(u)),
          (o = o(u)),
          (t.flags |= 1),
          Pt(e, t, o, r),
          t.child
        );
      case 14:
        return N1(e, t, t.type, t.pendingProps, r);
      case 15:
        return L1(e, t, t.type, t.pendingProps, r);
      case 19:
        return X1(e, t, r);
      case 31:
        return hE(e, t, r);
      case 22:
        return U1(e, t, r, t.pendingProps);
      case 24:
        return (
          ja(t),
          (o = qt(Ct)),
          e === null
            ? ((u = e0()),
              u === null &&
                ((u = it),
                (h = Wc()),
                (u.pooledCache = h),
                h.refCount++,
                h !== null && (u.pooledCacheLanes |= r),
                (u = h)),
              (t.memoizedState = { parent: o, cache: u }),
              n0(t),
              na(t, Ct, u))
            : ((e.lanes & r) !== 0 && (i0(e, t), Rs(t, null, null, r), Ts()),
              (u = e.memoizedState),
              (h = t.memoizedState),
              u.parent !== o
                ? ((u = { parent: o, cache: o }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  na(t, Ct, o))
                : ((o = h.cache),
                  na(t, Ct, o),
                  o !== u.cache && Jc(t, [Ct], r, !0))),
          Pt(e, t, t.pendingProps.children, r),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function Ui(e) {
    e.flags |= 4;
  }
  function H0(e, t, r, o, u) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (u & 335544128) === u))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (gm()) e.flags |= 8192;
        else throw ((Ya = Wo), t0);
    } else e.flags &= -16777217;
  }
  function K1(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !lx(t)))
      if (gm()) e.flags |= 8192;
      else throw ((Ya = Wo), t0);
  }
  function ml(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Bi() : 536870912), (e.lanes |= t), (Nr |= t));
  }
  function Ns(e, t) {
    if (!je)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), (r = r.sibling);
          o === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function ct(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      o = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (r |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags & 65011712),
          (o |= u.flags & 65011712),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (r |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags),
          (o |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= o), (e.childLanes = r), t;
  }
  function pE(e, t, r) {
    var o = t.pendingProps;
    switch ((Gc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ct(t), null;
      case 1:
        return ct(t), null;
      case 3:
        return (
          (r = t.stateNode),
          (o = null),
          e !== null && (o = e.memoizedState.cache),
          t.memoizedState.cache !== o && (t.flags |= 2048),
          Fi(Ct),
          Qe(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ar(t)
              ? Ui(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Zc())),
          ct(t),
          null
        );
      case 26:
        var u = t.type,
          h = t.memoizedState;
        return (
          e === null
            ? (Ui(t),
              h !== null ? (ct(t), K1(t, h)) : (ct(t), H0(t, u, null, o, r)))
            : h
              ? h !== e.memoizedState
                ? (Ui(t), ct(t), K1(t, h))
                : (ct(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== o && Ui(t),
                ct(t),
                H0(t, u, e, o, r)),
          null
        );
      case 27:
        if (
          (ri(t),
          (r = pe.current),
          (u = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== o && Ui(t);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return ct(t), null;
          }
          (e = Y.current),
            Ar(t) ? Bp(t) : ((e = ex(u, o, r)), (t.stateNode = e), Ui(t));
        }
        return ct(t), null;
      case 5:
        if ((ri(t), (u = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== o && Ui(t);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return ct(t), null;
          }
          if (((h = Y.current), Ar(t))) Bp(t);
          else {
            var g = wl(pe.current);
            switch (h) {
              case 1:
                h = g.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                h = g.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    h = g.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    h = g.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u,
                    );
                    break;
                  case "script":
                    (h = g.createElement("div")),
                      (h.innerHTML = "<script><\/script>"),
                      (h = h.removeChild(h.firstChild));
                    break;
                  case "select":
                    (h =
                      typeof o.is == "string"
                        ? g.createElement("select", { is: o.is })
                        : g.createElement("select")),
                      o.multiple
                        ? (h.multiple = !0)
                        : o.size && (h.size = o.size);
                    break;
                  default:
                    h =
                      typeof o.is == "string"
                        ? g.createElement(u, { is: o.is })
                        : g.createElement(u);
                }
            }
            (h[he] = t), (h[fe] = o);
            e: for (g = t.child; g !== null; ) {
              if (g.tag === 5 || g.tag === 6) h.appendChild(g.stateNode);
              else if (g.tag !== 4 && g.tag !== 27 && g.child !== null) {
                (g.child.return = g), (g = g.child);
                continue;
              }
              if (g === t) break e;
              for (; g.sibling === null; ) {
                if (g.return === null || g.return === t) break e;
                g = g.return;
              }
              (g.sibling.return = g.return), (g = g.sibling);
            }
            t.stateNode = h;
            e: switch ((Yt(h, u, o), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break e;
              case "img":
                o = !0;
                break e;
              default:
                o = !1;
            }
            o && Ui(t);
          }
        }
        return (
          ct(t),
          H0(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, r),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== o && Ui(t);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(s(166));
          if (((e = pe.current), Ar(t))) {
            if (
              ((e = t.stateNode),
              (r = t.memoizedProps),
              (o = null),
              (u = jt),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  o = u.memoizedProps;
              }
            (e[he] = t),
              (e = !!(
                e.nodeValue === r ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                Pm(e.nodeValue, r)
              )),
              e || ta(t, !0);
          } else (e = wl(e).createTextNode(o)), (e[he] = t), (t.stateNode = e);
        }
        return ct(t), null;
      case 31:
        if (((r = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((o = Ar(t)), r !== null)) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(s(557));
              e[he] = t;
            } else
              Va(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            ct(t), (e = !1);
          } else
            (r = Zc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = r),
              (e = !0);
          if (!e) return t.flags & 256 ? (An(t), t) : (An(t), null);
          if ((t.flags & 128) !== 0) throw Error(s(558));
        }
        return ct(t), null;
      case 13:
        if (
          ((o = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = Ar(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(s(317));
              u[he] = t;
            } else
              Va(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            ct(t), (u = !1);
          } else
            (u = Zc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return t.flags & 256 ? (An(t), t) : (An(t), null);
        }
        return (
          An(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = r), t)
            : ((r = o !== null),
              (e = e !== null && e.memoizedState !== null),
              r &&
                ((o = t.child),
                (u = null),
                o.alternate !== null &&
                  o.alternate.memoizedState !== null &&
                  o.alternate.memoizedState.cachePool !== null &&
                  (u = o.alternate.memoizedState.cachePool.pool),
                (h = null),
                o.memoizedState !== null &&
                  o.memoizedState.cachePool !== null &&
                  (h = o.memoizedState.cachePool.pool),
                h !== u && (o.flags |= 2048)),
              r !== e && r && (t.child.flags |= 8192),
              ml(t, t.updateQueue),
              ct(t),
              null)
        );
      case 4:
        return Qe(), e === null && of(t.stateNode.containerInfo), ct(t), null;
      case 10:
        return Fi(t.type), ct(t), null;
      case 19:
        if ((N(bt), (o = t.memoizedState), o === null)) return ct(t), null;
        if (((u = (t.flags & 128) !== 0), (h = o.rendering), h === null))
          if (u) Ns(o, !1);
          else {
            if (vt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((h = nl(e)), h !== null)) {
                  for (
                    t.flags |= 128,
                      Ns(o, !1),
                      e = h.updateQueue,
                      t.updateQueue = e,
                      ml(t, e),
                      t.subtreeFlags = 0,
                      e = r,
                      r = t.child;
                    r !== null;

                  )
                    bp(r, e), (r = r.sibling);
                  return (
                    P(bt, (bt.current & 1) | 2),
                    je && Mi(t, o.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            o.tail !== null &&
              at() > El &&
              ((t.flags |= 128), (u = !0), Ns(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((e = nl(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                ml(t, e),
                Ns(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !h.alternate &&
                  !je)
              )
                return ct(t), null;
            } else
              2 * at() - o.renderingStartTime > El &&
                r !== 536870912 &&
                ((t.flags |= 128), (u = !0), Ns(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((h.sibling = t.child), (t.child = h))
            : ((e = o.last),
              e !== null ? (e.sibling = h) : (t.child = h),
              (o.last = h));
        }
        return o.tail !== null
          ? ((e = o.tail),
            (o.rendering = e),
            (o.tail = e.sibling),
            (o.renderingStartTime = at()),
            (e.sibling = null),
            (r = bt.current),
            P(bt, u ? (r & 1) | 2 : r & 1),
            je && Mi(t, o.treeForkCount),
            e)
          : (ct(t), null);
      case 22:
      case 23:
        return (
          An(t),
          o0(),
          (o = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== o && (t.flags |= 8192)
            : o && (t.flags |= 8192),
          o
            ? (r & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (ct(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ct(t),
          (r = t.updateQueue),
          r !== null && ml(t, r.retryQueue),
          (r = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (r = e.memoizedState.cachePool.pool),
          (o = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (o = t.memoizedState.cachePool.pool),
          o !== r && (t.flags |= 2048),
          e !== null && N(qa),
          null
        );
      case 24:
        return (
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          t.memoizedState.cache !== r && (t.flags |= 2048),
          Fi(Ct),
          ct(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function mE(e, t) {
    switch ((Gc(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Fi(Ct),
          Qe(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return ri(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ((An(t), t.alternate === null)) throw Error(s(340));
          Va();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (An(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          Va();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return N(bt), null;
      case 4:
        return Qe(), null;
      case 10:
        return Fi(t.type), null;
      case 22:
      case 23:
        return (
          An(t),
          o0(),
          e !== null && N(qa),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return Fi(Ct), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Z1(e, t) {
    switch ((Gc(t), t.tag)) {
      case 3:
        Fi(Ct), Qe();
        break;
      case 26:
      case 27:
      case 5:
        ri(t);
        break;
      case 4:
        Qe();
        break;
      case 31:
        t.memoizedState !== null && An(t);
        break;
      case 13:
        An(t);
        break;
      case 19:
        N(bt);
        break;
      case 10:
        Fi(t.type);
        break;
      case 22:
      case 23:
        An(t), o0(), e !== null && N(qa);
        break;
      case 24:
        Fi(Ct);
    }
  }
  function Ls(e, t) {
    try {
      var r = t.updateQueue,
        o = r !== null ? r.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        r = u;
        do {
          if ((r.tag & e) === e) {
            o = void 0;
            var h = r.create,
              g = r.inst;
            (o = h()), (g.destroy = o);
          }
          r = r.next;
        } while (r !== u);
      }
    } catch (B) {
      We(t, t.return, B);
    }
  }
  function la(e, t, r) {
    try {
      var o = t.updateQueue,
        u = o !== null ? o.lastEffect : null;
      if (u !== null) {
        var h = u.next;
        o = h;
        do {
          if ((o.tag & e) === e) {
            var g = o.inst,
              B = g.destroy;
            if (B !== void 0) {
              (g.destroy = void 0), (u = t);
              var F = r,
                G = B;
              try {
                G();
              } catch (ne) {
                We(u, F, ne);
              }
            }
          }
          o = o.next;
        } while (o !== h);
      }
    } catch (ne) {
      We(t, t.return, ne);
    }
  }
  function Q1(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var r = e.stateNode;
      try {
        Vp(t, r);
      } catch (o) {
        We(e, e.return, o);
      }
    }
  }
  function $1(e, t, r) {
    (r.props = Ka(e.type, e.memoizedProps)), (r.state = e.memoizedState);
    try {
      r.componentWillUnmount();
    } catch (o) {
      We(e, t, o);
    }
  }
  function Us(e, t) {
    try {
      var r = e.ref;
      if (r !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof r == "function" ? (e.refCleanup = r(o)) : (r.current = o);
      }
    } catch (u) {
      We(e, t, u);
    }
  }
  function yi(e, t) {
    var r = e.ref,
      o = e.refCleanup;
    if (r !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (u) {
          We(e, t, u);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof r == "function")
        try {
          r(null);
        } catch (u) {
          We(e, t, u);
        }
      else r.current = null;
  }
  function J1(e) {
    var t = e.type,
      r = e.memoizedProps,
      o = e.stateNode;
    try {
      e: switch (t) {
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
      We(e, e.return, u);
    }
  }
  function V0(e, t, r) {
    try {
      var o = e.stateNode;
      UE(o, e.type, r, t), (o[fe] = t);
    } catch (u) {
      We(e, e.return, u);
    }
  }
  function W1(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && ma(e.type)) ||
      e.tag === 4
    );
  }
  function k0(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || W1(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && ma(e.type)) ||
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
  function j0(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode),
        t
          ? (r.nodeType === 9
              ? r.body
              : r.nodeName === "HTML"
                ? r.ownerDocument.body
                : r
            ).insertBefore(e, t)
          : ((t =
              r.nodeType === 9
                ? r.body
                : r.nodeName === "HTML"
                  ? r.ownerDocument.body
                  : r),
            t.appendChild(e),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = Ti));
    else if (
      o !== 4 &&
      (o === 27 && ma(e.type) && ((r = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (j0(e, t, r), e = e.sibling; e !== null; )
        j0(e, t, r), (e = e.sibling);
  }
  function xl(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (
      o !== 4 &&
      (o === 27 && ma(e.type) && (r = e.stateNode), (e = e.child), e !== null)
    )
      for (xl(e, t, r), e = e.sibling; e !== null; )
        xl(e, t, r), (e = e.sibling);
  }
  function I1(e) {
    var t = e.stateNode,
      r = e.memoizedProps;
    try {
      for (var o = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Yt(t, o, r), (t[he] = e), (t[fe] = r);
    } catch (h) {
      We(e, e.return, h);
    }
  }
  var Hi = !1,
    _t = !1,
    q0 = !1,
    em = typeof WeakSet == "function" ? WeakSet : Set,
    Lt = null;
  function xE(e, t) {
    if (((e = e.containerInfo), (cf = Ul), (e = hp(e)), Nc(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var o = r.getSelection && r.getSelection();
          if (o && o.rangeCount !== 0) {
            r = o.anchorNode;
            var u = o.anchorOffset,
              h = o.focusNode;
            o = o.focusOffset;
            try {
              r.nodeType, h.nodeType;
            } catch (De) {
              r = null;
              break e;
            }
            var g = 0,
              B = -1,
              F = -1,
              G = 0,
              ne = 0,
              re = e,
              Z = null;
            t: for (;;) {
              for (
                var I;
                re !== r || (u !== 0 && re.nodeType !== 3) || (B = g + u),
                  re !== h || (o !== 0 && re.nodeType !== 3) || (F = g + o),
                  re.nodeType === 3 && (g += re.nodeValue.length),
                  (I = re.firstChild) !== null;

              )
                (Z = re), (re = I);
              for (;;) {
                if (re === e) break t;
                if (
                  (Z === r && ++G === u && (B = g),
                  Z === h && ++ne === o && (F = g),
                  (I = re.nextSibling) !== null)
                )
                  break;
                (re = Z), (Z = re.parentNode);
              }
              re = I;
            }
            r = B === -1 || F === -1 ? null : { start: B, end: F };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      ff = { focusedElem: e, selectionRange: r }, Ul = !1, Lt = t;
      Lt !== null;

    )
      if (
        ((t = Lt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (Lt = e);
      else
        for (; Lt !== null; ) {
          switch (((t = Lt), (h = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (r = 0; r < e.length; r++)
                  (u = e[r]), (u.ref.impl = u.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && h !== null) {
                (e = void 0),
                  (r = t),
                  (u = h.memoizedProps),
                  (h = h.memoizedState),
                  (o = r.stateNode);
                try {
                  var ve = Ka(r.type, u);
                  (e = o.getSnapshotBeforeUpdate(ve, h)),
                    (o.__reactInternalSnapshotBeforeUpdate = e);
                } catch (De) {
                  We(r, r.return, De);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (r = e.nodeType), r === 9)
                )
                  pf(e);
                else if (r === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      pf(e);
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
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Lt = e);
            break;
          }
          Lt = t.return;
        }
  }
  function tm(e, t, r) {
    var o = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        ki(e, r), o & 4 && Ls(5, r);
        break;
      case 1:
        if ((ki(e, r), o & 4))
          if (((e = r.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (g) {
              We(r, r.return, g);
            }
          else {
            var u = Ka(r.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (g) {
              We(r, r.return, g);
            }
          }
        o & 64 && Q1(r), o & 512 && Us(r, r.return);
        break;
      case 3:
        if ((ki(e, r), o & 64 && ((e = r.updateQueue), e !== null))) {
          if (((t = null), r.child !== null))
            switch (r.child.tag) {
              case 27:
              case 5:
                t = r.child.stateNode;
                break;
              case 1:
                t = r.child.stateNode;
            }
          try {
            Vp(e, t);
          } catch (g) {
            We(r, r.return, g);
          }
        }
        break;
      case 27:
        t === null && o & 4 && I1(r);
      case 26:
      case 5:
        ki(e, r), t === null && o & 4 && J1(r), o & 512 && Us(r, r.return);
        break;
      case 12:
        ki(e, r);
        break;
      case 31:
        ki(e, r), o & 4 && am(e, r);
        break;
      case 13:
        ki(e, r),
          o & 4 && rm(e, r),
          o & 64 &&
            ((e = r.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((r = DE.bind(null, r)), XE(e, r))));
        break;
      case 22:
        if (((o = r.memoizedState !== null || Hi), !o)) {
          (t = (t !== null && t.memoizedState !== null) || _t), (u = Hi);
          var h = _t;
          (Hi = o),
            (_t = t) && !h ? ji(e, r, (r.subtreeFlags & 8772) !== 0) : ki(e, r),
            (Hi = u),
            (_t = h);
        }
        break;
      case 30:
        break;
      default:
        ki(e, r);
    }
  }
  function nm(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), nm(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && rt(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var ht = null,
    on = !1;
  function Vi(e, t, r) {
    for (r = r.child; r !== null; ) im(e, t, r), (r = r.sibling);
  }
  function im(e, t, r) {
    if (Ot && typeof Ot.onCommitFiberUnmount == "function")
      try {
        Ot.onCommitFiberUnmount(Kt, r);
      } catch (h) {}
    switch (r.tag) {
      case 26:
        _t || yi(r, t),
          Vi(e, t, r),
          r.memoizedState
            ? r.memoizedState.count--
            : r.stateNode && ((r = r.stateNode), r.parentNode.removeChild(r));
        break;
      case 27:
        _t || yi(r, t);
        var o = ht,
          u = on;
        ma(r.type) && ((ht = r.stateNode), (on = !1)),
          Vi(e, t, r),
          Gs(r.stateNode),
          (ht = o),
          (on = u);
        break;
      case 5:
        _t || yi(r, t);
      case 6:
        if (
          ((o = ht),
          (u = on),
          (ht = null),
          Vi(e, t, r),
          (ht = o),
          (on = u),
          ht !== null)
        )
          if (on)
            try {
              (ht.nodeType === 9
                ? ht.body
                : ht.nodeName === "HTML"
                  ? ht.ownerDocument.body
                  : ht
              ).removeChild(r.stateNode);
            } catch (h) {
              We(r, t, h);
            }
          else
            try {
              ht.removeChild(r.stateNode);
            } catch (h) {
              We(r, t, h);
            }
        break;
      case 18:
        ht !== null &&
          (on
            ? ((e = ht),
              Qm(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                r.stateNode,
              ),
              Pr(e))
            : Qm(ht, r.stateNode));
        break;
      case 4:
        (o = ht),
          (u = on),
          (ht = r.stateNode.containerInfo),
          (on = !0),
          Vi(e, t, r),
          (ht = o),
          (on = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        la(2, r, t), _t || la(4, r, t), Vi(e, t, r);
        break;
      case 1:
        _t ||
          (yi(r, t),
          (o = r.stateNode),
          typeof o.componentWillUnmount == "function" && $1(r, t, o)),
          Vi(e, t, r);
        break;
      case 21:
        Vi(e, t, r);
        break;
      case 22:
        (_t = (o = _t) || r.memoizedState !== null), Vi(e, t, r), (_t = o);
        break;
      default:
        Vi(e, t, r);
    }
  }
  function am(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Pr(e);
      } catch (r) {
        We(t, t.return, r);
      }
    }
  }
  function rm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Pr(e);
      } catch (r) {
        We(t, t.return, r);
      }
  }
  function yE(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new em()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new em()),
          t
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function yl(e, t) {
    var r = yE(e);
    t.forEach(function (o) {
      if (!r.has(o)) {
        r.add(o);
        var u = BE.bind(null, e, o);
        o.then(u, u);
      }
    });
  }
  function ln(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var o = 0; o < r.length; o++) {
        var u = r[o],
          h = e,
          g = t,
          B = g;
        e: for (; B !== null; ) {
          switch (B.tag) {
            case 27:
              if (ma(B.type)) {
                (ht = B.stateNode), (on = !1);
                break e;
              }
              break;
            case 5:
              (ht = B.stateNode), (on = !1);
              break e;
            case 3:
            case 4:
              (ht = B.stateNode.containerInfo), (on = !0);
              break e;
          }
          B = B.return;
        }
        if (ht === null) throw Error(s(160));
        im(h, g, u),
          (ht = null),
          (on = !1),
          (h = u.alternate),
          h !== null && (h.return = null),
          (u.return = null);
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) sm(t, e), (t = t.sibling);
  }
  var In = null;
  function sm(e, t) {
    var r = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ln(t, e),
          un(e),
          o & 4 && (la(3, e, e.return), Ls(3, e), la(5, e, e.return));
        break;
      case 1:
        ln(t, e),
          un(e),
          o & 512 && (_t || r === null || yi(r, r.return)),
          o & 64 &&
            Hi &&
            ((e = e.updateQueue),
            e !== null &&
              ((o = e.callbacks),
              o !== null &&
                ((r = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = r === null ? o : r.concat(o)))));
        break;
      case 26:
        var u = In;
        if (
          (ln(t, e),
          un(e),
          o & 512 && (_t || r === null || yi(r, r.return)),
          o & 4)
        ) {
          var h = r !== null ? r.memoizedState : null;
          if (((o = e.memoizedState), r === null))
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  (o = e.type),
                    (r = e.memoizedProps),
                    (u = u.ownerDocument || u);
                  t: switch (o) {
                    case "title":
                      (h = u.getElementsByTagName("title")[0]),
                        (!h ||
                          h[ze] ||
                          h[he] ||
                          h.namespaceURI === "http://www.w3.org/2000/svg" ||
                          h.hasAttribute("itemprop")) &&
                          ((h = u.createElement(o)),
                          u.head.insertBefore(
                            h,
                            u.querySelector("head > title"),
                          )),
                        Yt(h, o, r),
                        (h[he] = e),
                        xt(h),
                        (o = h);
                      break e;
                    case "link":
                      var g = sx("link", "href", u).get(o + (r.href || ""));
                      if (g) {
                        for (var B = 0; B < g.length; B++)
                          if (
                            ((h = g[B]),
                            h.getAttribute("href") ===
                              (r.href == null || r.href === ""
                                ? null
                                : r.href) &&
                              h.getAttribute("rel") ===
                                (r.rel == null ? null : r.rel) &&
                              h.getAttribute("title") ===
                                (r.title == null ? null : r.title) &&
                              h.getAttribute("crossorigin") ===
                                (r.crossOrigin == null ? null : r.crossOrigin))
                          ) {
                            g.splice(B, 1);
                            break t;
                          }
                      }
                      (h = u.createElement(o)),
                        Yt(h, o, r),
                        u.head.appendChild(h);
                      break;
                    case "meta":
                      if (
                        (g = sx("meta", "content", u).get(
                          o + (r.content || ""),
                        ))
                      ) {
                        for (B = 0; B < g.length; B++)
                          if (
                            ((h = g[B]),
                            h.getAttribute("content") ===
                              (r.content == null ? null : "" + r.content) &&
                              h.getAttribute("name") ===
                                (r.name == null ? null : r.name) &&
                              h.getAttribute("property") ===
                                (r.property == null ? null : r.property) &&
                              h.getAttribute("http-equiv") ===
                                (r.httpEquiv == null ? null : r.httpEquiv) &&
                              h.getAttribute("charset") ===
                                (r.charSet == null ? null : r.charSet))
                          ) {
                            g.splice(B, 1);
                            break t;
                          }
                      }
                      (h = u.createElement(o)),
                        Yt(h, o, r),
                        u.head.appendChild(h);
                      break;
                    default:
                      throw Error(s(468, o));
                  }
                  (h[he] = e), xt(h), (o = h);
                }
                e.stateNode = o;
              } else ox(u, e.type, e.stateNode);
            else e.stateNode = rx(u, o, e.memoizedProps);
          else
            h !== o
              ? (h === null
                  ? r.stateNode !== null &&
                    ((r = r.stateNode), r.parentNode.removeChild(r))
                  : h.count--,
                o === null
                  ? ox(u, e.type, e.stateNode)
                  : rx(u, o, e.memoizedProps))
              : o === null &&
                e.stateNode !== null &&
                V0(e, e.memoizedProps, r.memoizedProps);
        }
        break;
      case 27:
        ln(t, e),
          un(e),
          o & 512 && (_t || r === null || yi(r, r.return)),
          r !== null && o & 4 && V0(e, e.memoizedProps, r.memoizedProps);
        break;
      case 5:
        if (
          (ln(t, e),
          un(e),
          o & 512 && (_t || r === null || yi(r, r.return)),
          e.flags & 32)
        ) {
          u = e.stateNode;
          try {
            hr(u, "");
          } catch (ve) {
            We(e, e.return, ve);
          }
        }
        o & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), V0(e, u, r !== null ? r.memoizedProps : u)),
          o & 1024 && (q0 = !0);
        break;
      case 6:
        if ((ln(t, e), un(e), o & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (o = e.memoizedProps), (r = e.stateNode);
          try {
            r.nodeValue = o;
          } catch (ve) {
            We(e, e.return, ve);
          }
        }
        break;
      case 3:
        if (
          ((Fl = null),
          (u = In),
          (In = Ml(t.containerInfo)),
          ln(t, e),
          (In = u),
          un(e),
          o & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Pr(t.containerInfo);
          } catch (ve) {
            We(e, e.return, ve);
          }
        q0 && ((q0 = !1), om(e));
        break;
      case 4:
        (o = In),
          (In = Ml(e.stateNode.containerInfo)),
          ln(t, e),
          un(e),
          (In = o);
        break;
      case 12:
        ln(t, e), un(e);
        break;
      case 31:
        ln(t, e),
          un(e),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), yl(e, o)));
        break;
      case 13:
        ln(t, e),
          un(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (r !== null && r.memoizedState !== null) &&
            (gl = at()),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), yl(e, o)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var F = r !== null && r.memoizedState !== null,
          G = Hi,
          ne = _t;
        if (
          ((Hi = G || u),
          (_t = ne || F),
          ln(t, e),
          (_t = ne),
          (Hi = G),
          un(e),
          o & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (r === null || F || Hi || _t || Za(e)),
              r = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (r === null) {
                F = r = t;
                try {
                  if (((h = F.stateNode), u))
                    (g = h.style),
                      typeof g.setProperty == "function"
                        ? g.setProperty("display", "none", "important")
                        : (g.display = "none");
                  else {
                    B = F.stateNode;
                    var re = F.memoizedProps.style,
                      Z =
                        re != null && re.hasOwnProperty("display")
                          ? re.display
                          : null;
                    B.style.display =
                      Z == null || typeof Z == "boolean" ? "" : ("" + Z).trim();
                  }
                } catch (ve) {
                  We(F, F.return, ve);
                }
              }
            } else if (t.tag === 6) {
              if (r === null) {
                F = t;
                try {
                  F.stateNode.nodeValue = u ? "" : F.memoizedProps;
                } catch (ve) {
                  We(F, F.return, ve);
                }
              }
            } else if (t.tag === 18) {
              if (r === null) {
                F = t;
                try {
                  var I = F.stateNode;
                  u ? $m(I, !0) : $m(F.stateNode, !1);
                } catch (ve) {
                  We(F, F.return, ve);
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
              r === t && (r = null), (t = t.return);
            }
            r === t && (r = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        o & 4 &&
          ((o = e.updateQueue),
          o !== null &&
            ((r = o.retryQueue),
            r !== null && ((o.retryQueue = null), yl(e, r))));
        break;
      case 19:
        ln(t, e),
          un(e),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), yl(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ln(t, e), un(e);
    }
  }
  function un(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var r, o = e.return; o !== null; ) {
          if (W1(o)) {
            r = o;
            break;
          }
          o = o.return;
        }
        if (r == null) throw Error(s(160));
        switch (r.tag) {
          case 27:
            var u = r.stateNode,
              h = k0(e);
            xl(e, h, u);
            break;
          case 5:
            var g = r.stateNode;
            r.flags & 32 && (hr(g, ""), (r.flags &= -33));
            var B = k0(e);
            xl(e, B, g);
            break;
          case 3:
          case 4:
            var F = r.stateNode.containerInfo,
              G = k0(e);
            j0(e, G, F);
            break;
          default:
            throw Error(s(161));
        }
      } catch (ne) {
        We(e, e.return, ne);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function om(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        om(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function ki(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) tm(e, t.alternate, t), (t = t.sibling);
  }
  function Za(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          la(4, t, t.return), Za(t);
          break;
        case 1:
          yi(t, t.return);
          var r = t.stateNode;
          typeof r.componentWillUnmount == "function" && $1(t, t.return, r),
            Za(t);
          break;
        case 27:
          Gs(t.stateNode);
        case 26:
        case 5:
          yi(t, t.return), Za(t);
          break;
        case 22:
          t.memoizedState === null && Za(t);
          break;
        case 30:
          Za(t);
          break;
        default:
          Za(t);
      }
      e = e.sibling;
    }
  }
  function ji(e, t, r) {
    for (r = r && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var o = t.alternate,
        u = e,
        h = t,
        g = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          ji(u, h, r), Ls(4, h);
          break;
        case 1:
          if (
            (ji(u, h, r),
            (o = h),
            (u = o.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (G) {
              We(o, o.return, G);
            }
          if (((o = h), (u = o.updateQueue), u !== null)) {
            var B = o.stateNode;
            try {
              var F = u.shared.hiddenCallbacks;
              if (F !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < F.length; u++)
                  Hp(F[u], B);
            } catch (G) {
              We(o, o.return, G);
            }
          }
          r && g & 64 && Q1(h), Us(h, h.return);
          break;
        case 27:
          I1(h);
        case 26:
        case 5:
          ji(u, h, r), r && o === null && g & 4 && J1(h), Us(h, h.return);
          break;
        case 12:
          ji(u, h, r);
          break;
        case 31:
          ji(u, h, r), r && g & 4 && am(u, h);
          break;
        case 13:
          ji(u, h, r), r && g & 4 && rm(u, h);
          break;
        case 22:
          h.memoizedState === null && ji(u, h, r), Us(h, h.return);
          break;
        case 30:
          break;
        default:
          ji(u, h, r);
      }
      t = t.sibling;
    }
  }
  function P0(e, t) {
    var r = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (r = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== r && (e != null && e.refCount++, r != null && Ss(r));
  }
  function Y0(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Ss(e));
  }
  function ei(e, t, r, o) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) lm(e, t, r, o), (t = t.sibling);
  }
  function lm(e, t, r, o) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ei(e, t, r, o), u & 2048 && Ls(9, t);
        break;
      case 1:
        ei(e, t, r, o);
        break;
      case 3:
        ei(e, t, r, o),
          u & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Ss(e)));
        break;
      case 12:
        if (u & 2048) {
          ei(e, t, r, o), (e = t.stateNode);
          try {
            var h = t.memoizedProps,
              g = h.id,
              B = h.onPostCommit;
            typeof B == "function" &&
              B(
                g,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (F) {
            We(t, t.return, F);
          }
        } else ei(e, t, r, o);
        break;
      case 31:
        ei(e, t, r, o);
        break;
      case 13:
        ei(e, t, r, o);
        break;
      case 23:
        break;
      case 22:
        (h = t.stateNode),
          (g = t.alternate),
          t.memoizedState !== null
            ? h._visibility & 2
              ? ei(e, t, r, o)
              : Hs(e, t)
            : h._visibility & 2
              ? ei(e, t, r, o)
              : ((h._visibility |= 2),
                Or(e, t, r, o, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && P0(g, t);
        break;
      case 24:
        ei(e, t, r, o), u & 2048 && Y0(t.alternate, t);
        break;
      default:
        ei(e, t, r, o);
    }
  }
  function Or(e, t, r, o, u) {
    for (
      u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var h = e,
        g = t,
        B = r,
        F = o,
        G = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          Or(h, g, B, F, u), Ls(8, g);
          break;
        case 23:
          break;
        case 22:
          var ne = g.stateNode;
          g.memoizedState !== null
            ? ne._visibility & 2
              ? Or(h, g, B, F, u)
              : Hs(h, g)
            : ((ne._visibility |= 2), Or(h, g, B, F, u)),
            u && G & 2048 && P0(g.alternate, g);
          break;
        case 24:
          Or(h, g, B, F, u), u && G & 2048 && Y0(g.alternate, g);
          break;
        default:
          Or(h, g, B, F, u);
      }
      t = t.sibling;
    }
  }
  function Hs(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var r = e,
          o = t,
          u = o.flags;
        switch (o.tag) {
          case 22:
            Hs(r, o), u & 2048 && P0(o.alternate, o);
            break;
          case 24:
            Hs(r, o), u & 2048 && Y0(o.alternate, o);
            break;
          default:
            Hs(r, o);
        }
        t = t.sibling;
      }
  }
  var Vs = 8192;
  function Fr(e, t, r) {
    if (e.subtreeFlags & Vs)
      for (e = e.child; e !== null; ) um(e, t, r), (e = e.sibling);
  }
  function um(e, t, r) {
    switch (e.tag) {
      case 26:
        Fr(e, t, r),
          e.flags & Vs &&
            e.memoizedState !== null &&
            ib(r, In, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Fr(e, t, r);
        break;
      case 3:
      case 4:
        var o = In;
        (In = Ml(e.stateNode.containerInfo)), Fr(e, t, r), (In = o);
        break;
      case 22:
        e.memoizedState === null &&
          ((o = e.alternate),
          o !== null && o.memoizedState !== null
            ? ((o = Vs), (Vs = 16777216), Fr(e, t, r), (Vs = o))
            : Fr(e, t, r));
        break;
      default:
        Fr(e, t, r);
    }
  }
  function cm(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function ks(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          (Lt = o), hm(o, e);
        }
      cm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) fm(e), (e = e.sibling);
  }
  function fm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ks(e), e.flags & 2048 && la(9, e, e.return);
        break;
      case 3:
        ks(e);
        break;
      case 12:
        ks(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), vl(e))
          : ks(e);
        break;
      default:
        ks(e);
    }
  }
  function vl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          (Lt = o), hm(o, e);
        }
      cm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          la(8, t, t.return), vl(t);
          break;
        case 22:
          (r = t.stateNode),
            r._visibility & 2 && ((r._visibility &= -3), vl(t));
          break;
        default:
          vl(t);
      }
      e = e.sibling;
    }
  }
  function hm(e, t) {
    for (; Lt !== null; ) {
      var r = Lt;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          la(8, r, t);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var o = r.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Ss(r.memoizedState.cache);
      }
      if (((o = r.child), o !== null)) (o.return = r), (Lt = o);
      else
        e: for (r = e; Lt !== null; ) {
          o = Lt;
          var u = o.sibling,
            h = o.return;
          if ((nm(o), o === r)) {
            Lt = null;
            break e;
          }
          if (u !== null) {
            (u.return = h), (Lt = u);
            break e;
          }
          Lt = h;
        }
    }
  }
  var vE = {
      getCacheForType: function (e) {
        var t = qt(Ct),
          r = t.data.get(e);
        return r === void 0 && ((r = e()), t.data.set(e, r)), r;
      },
      cacheSignal: function () {
        return qt(Ct).controller.signal;
      },
    },
    gE = typeof WeakMap == "function" ? WeakMap : Map,
    Ze = 0,
    it = null,
    Ne = null,
    Ve = 0,
    Je = 0,
    Sn = null,
    ua = !1,
    zr = !1,
    X0 = !1,
    qi = 0,
    vt = 0,
    ca = 0,
    Qa = 0,
    G0 = 0,
    Cn = 0,
    Nr = 0,
    js = null,
    cn = null,
    K0 = !1,
    gl = 0,
    dm = 0,
    El = 1 / 0,
    bl = null,
    fa = null,
    zt = 0,
    ha = null,
    Lr = null,
    Pi = 0,
    Z0 = 0,
    Q0 = null,
    pm = null,
    qs = 0,
    $0 = null;
  function Dn() {
    return (Ze & 2) !== 0 && Ve !== 0 ? Ve & -Ve : k.T !== null ? nf() : Ae();
  }
  function mm() {
    if (Cn === 0)
      if ((Ve & 536870912) === 0 || je) {
        var e = fi;
        (fi <<= 1), (fi & 3932160) === 0 && (fi = 262144), (Cn = e);
      } else Cn = 536870912;
    return (e = bn.current), e !== null && (e.flags |= 32), Cn;
  }
  function fn(e, t, r) {
    ((e === it && (Je === 2 || Je === 9)) || e.cancelPendingCommit !== null) &&
      (Ur(e, 0), da(e, Ve, Cn, !1)),
      di(e, r),
      ((Ze & 2) === 0 || e !== it) &&
        (e === it &&
          ((Ze & 2) === 0 && (Qa |= r), vt === 4 && da(e, Ve, Cn, !1)),
        vi(e));
  }
  function xm(e, t, r) {
    if ((Ze & 6) !== 0) throw Error(s(327));
    var o = (!r && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Di(e, t),
      u = o ? AE(e, t) : W0(e, t, !0),
      h = o;
    do {
      if (u === 0) {
        zr && !o && da(e, t, 0, !1);
        break;
      } else {
        if (((r = e.current.alternate), h && !EE(r))) {
          (u = W0(e, t, !1)), (h = !1);
          continue;
        }
        if (u === 2) {
          if (((h = t), e.errorRecoveryDisabledLanes & h)) var g = 0;
          else
            (g = e.pendingLanes & -536870913),
              (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0);
          if (g !== 0) {
            t = g;
            e: {
              var B = e;
              u = js;
              var F = B.current.memoizedState.isDehydrated;
              if ((F && (Ur(B, g).flags |= 256), (g = W0(B, g, !1)), g !== 2)) {
                if (X0 && !F) {
                  (B.errorRecoveryDisabledLanes |= h), (Qa |= h), (u = 4);
                  break e;
                }
                (h = cn),
                  (cn = u),
                  h !== null && (cn === null ? (cn = h) : cn.push.apply(cn, h));
              }
              u = g;
            }
            if (((h = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Ur(e, 0), da(e, t, 0, !0);
          break;
        }
        e: {
          switch (((o = e), (h = u), h)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              da(o, t, Cn, !ua);
              break e;
            case 2:
              cn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && ((u = gl + 300 - at()), 10 < u)) {
            if ((da(o, t, Cn, !ua), Ci(o, 0, !0) !== 0)) break e;
            (Pi = t),
              (o.timeoutHandle = Km(
                ym.bind(
                  null,
                  o,
                  r,
                  cn,
                  bl,
                  K0,
                  t,
                  Cn,
                  Qa,
                  Nr,
                  ua,
                  h,
                  "Throttled",
                  -0,
                  0,
                ),
                u,
              ));
            break e;
          }
          ym(o, r, cn, bl, K0, t, Cn, Qa, Nr, ua, h, null, -0, 0);
        }
      }
      break;
    } while (!0);
    vi(e);
  }
  function ym(e, t, r, o, u, h, g, B, F, G, ne, re, Z, I) {
    if (
      ((e.timeoutHandle = -1),
      (re = t.subtreeFlags),
      re & 8192 || (re & 16785408) === 16785408)
    ) {
      (re = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ti,
      }),
        um(t, h, re);
      var ve =
        (h & 62914560) === h ? gl - at() : (h & 4194048) === h ? dm - at() : 0;
      if (((ve = ab(re, ve)), ve !== null)) {
        (Pi = h),
          (e.cancelPendingCommit = ve(
            Dm.bind(null, e, t, h, r, o, u, g, B, F, ne, re, null, Z, I),
          )),
          da(e, h, g, !G);
        return;
      }
    }
    Dm(e, t, h, r, o, u, g, B, F);
  }
  function EE(e) {
    for (var t = e; ; ) {
      var r = t.tag;
      if (
        (r === 0 || r === 11 || r === 15) &&
        t.flags & 16384 &&
        ((r = t.updateQueue), r !== null && ((r = r.stores), r !== null))
      )
        for (var o = 0; o < r.length; o++) {
          var u = r[o],
            h = u.getSnapshot;
          u = u.value;
          try {
            if (!gn(h(), u)) return !1;
          } catch (g) {
            return !1;
          }
        }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
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
  function da(e, t, r, o) {
    (t &= ~G0),
      (t &= ~Qa),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      o && (e.warmLanes |= t),
      (o = e.expirationTimes);
    for (var u = t; 0 < u; ) {
      var h = 31 - Nt(u),
        g = 1 << h;
      (o[h] = -1), (u &= ~g);
    }
    r !== 0 && U(e, r, t);
  }
  function Al() {
    return (Ze & 6) === 0 ? (Ps(0), !1) : !0;
  }
  function J0() {
    if (Ne !== null) {
      if (Je === 0) var e = Ne.return;
      else (e = Ne), (Oi = ka = null), d0(e), (_r = null), (Ds = 0), (e = Ne);
      for (; e !== null; ) Z1(e.alternate, e), (e = e.return);
      Ne = null;
    }
  }
  function Ur(e, t) {
    var r = e.timeoutHandle;
    r !== -1 && ((e.timeoutHandle = -1), kE(r)),
      (r = e.cancelPendingCommit),
      r !== null && ((e.cancelPendingCommit = null), r()),
      (Pi = 0),
      J0(),
      (it = e),
      (Ne = r = wi(e.current, null)),
      (Ve = t),
      (Je = 0),
      (Sn = null),
      (ua = !1),
      (zr = Di(e, t)),
      (X0 = !1),
      (Nr = Cn = G0 = Qa = ca = vt = 0),
      (cn = js = null),
      (K0 = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= t; 0 < o; ) {
        var u = 31 - Nt(o),
          h = 1 << u;
        (t |= e[u]), (o &= ~h);
      }
    return (qi = t), Po(), r;
  }
  function vm(e, t) {
    (Me = null),
      (k.H = Fs),
      t === Br || t === Jo
        ? ((t = zp()), (Je = 3))
        : t === t0
          ? ((t = zp()), (Je = 4))
          : (Je =
              t === R0
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (Sn = t),
      Ne === null && ((vt = 1), fl(e, Nn(t, e.current)));
  }
  function gm() {
    var e = bn.current;
    return e === null
      ? !0
      : (Ve & 4194048) === Ve
        ? Vn === null
        : (Ve & 62914560) === Ve || (Ve & 536870912) !== 0
          ? e === Vn
          : !1;
  }
  function Em() {
    var e = k.H;
    return (k.H = Fs), e === null ? Fs : e;
  }
  function bm() {
    var e = k.A;
    return (k.A = vE), e;
  }
  function Sl() {
    (vt = 4),
      ua || ((Ve & 4194048) !== Ve && bn.current !== null) || (zr = !0),
      ((ca & 134217727) === 0 && (Qa & 134217727) === 0) ||
        it === null ||
        da(it, Ve, Cn, !1);
  }
  function W0(e, t, r) {
    var o = Ze;
    Ze |= 2;
    var u = Em(),
      h = bm();
    (it !== e || Ve !== t) && ((bl = null), Ur(e, t)), (t = !1);
    var g = vt;
    e: do
      try {
        if (Je !== 0 && Ne !== null) {
          var B = Ne,
            F = Sn;
          switch (Je) {
            case 8:
              J0(), (g = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              bn.current === null && (t = !0);
              var G = Je;
              if (((Je = 0), (Sn = null), Hr(e, B, F, G), r && zr)) {
                g = 0;
                break e;
              }
              break;
            default:
              (G = Je), (Je = 0), (Sn = null), Hr(e, B, F, G);
          }
        }
        bE(), (g = vt);
        break;
      } catch (ne) {
        vm(e, ne);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Oi = ka = null),
      (Ze = o),
      (k.H = u),
      (k.A = h),
      Ne === null && ((it = null), (Ve = 0), Po()),
      g
    );
  }
  function bE() {
    for (; Ne !== null; ) Am(Ne);
  }
  function AE(e, t) {
    var r = Ze;
    Ze |= 2;
    var o = Em(),
      u = bm();
    it !== e || Ve !== t
      ? ((bl = null), (El = at() + 500), Ur(e, t))
      : (zr = Di(e, t));
    e: do
      try {
        if (Je !== 0 && Ne !== null) {
          t = Ne;
          var h = Sn;
          t: switch (Je) {
            case 1:
              (Je = 0), (Sn = null), Hr(e, t, h, 1);
              break;
            case 2:
            case 9:
              if (Op(h)) {
                (Je = 0), (Sn = null), Sm(t);
                break;
              }
              (t = function () {
                (Je !== 2 && Je !== 9) || it !== e || (Je = 7), vi(e);
              }),
                h.then(t, t);
              break e;
            case 3:
              Je = 7;
              break e;
            case 4:
              Je = 5;
              break e;
            case 7:
              Op(h)
                ? ((Je = 0), (Sn = null), Sm(t))
                : ((Je = 0), (Sn = null), Hr(e, t, h, 7));
              break;
            case 5:
              var g = null;
              switch (Ne.tag) {
                case 26:
                  g = Ne.memoizedState;
                case 5:
                case 27:
                  var B = Ne;
                  if (g ? lx(g) : B.stateNode.complete) {
                    (Je = 0), (Sn = null);
                    var F = B.sibling;
                    if (F !== null) Ne = F;
                    else {
                      var G = B.return;
                      G !== null ? ((Ne = G), Cl(G)) : (Ne = null);
                    }
                    break t;
                  }
              }
              (Je = 0), (Sn = null), Hr(e, t, h, 5);
              break;
            case 6:
              (Je = 0), (Sn = null), Hr(e, t, h, 6);
              break;
            case 8:
              J0(), (vt = 6);
              break e;
            default:
              throw Error(s(462));
          }
        }
        SE();
        break;
      } catch (ne) {
        vm(e, ne);
      }
    while (!0);
    return (
      (Oi = ka = null),
      (k.H = o),
      (k.A = u),
      (Ze = r),
      Ne !== null ? 0 : ((it = null), (Ve = 0), Po(), vt)
    );
  }
  function SE() {
    for (; Ne !== null && !Gt(); ) Am(Ne);
  }
  function Am(e) {
    var t = G1(e.alternate, e, qi);
    (e.memoizedProps = e.pendingProps), t === null ? Cl(e) : (Ne = t);
  }
  function Sm(e) {
    var t = e,
      r = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = k1(r, t, t.pendingProps, t.type, void 0, Ve);
        break;
      case 11:
        t = k1(r, t, t.pendingProps, t.type.render, t.ref, Ve);
        break;
      case 5:
        d0(t);
      default:
        Z1(r, t), (t = Ne = bp(t, qi)), (t = G1(r, t, qi));
    }
    (e.memoizedProps = e.pendingProps), t === null ? Cl(e) : (Ne = t);
  }
  function Hr(e, t, r, o) {
    (Oi = ka = null), d0(t), (_r = null), (Ds = 0);
    var u = t.return;
    try {
      if (fE(e, u, t, r, Ve)) {
        (vt = 1), fl(e, Nn(r, e.current)), (Ne = null);
        return;
      }
    } catch (h) {
      if (u !== null) throw ((Ne = u), h);
      (vt = 1), fl(e, Nn(r, e.current)), (Ne = null);
      return;
    }
    t.flags & 32768
      ? (je || o === 1
          ? (e = !0)
          : zr || (Ve & 536870912) !== 0
            ? (e = !1)
            : ((ua = e = !0),
              (o === 2 || o === 9 || o === 3 || o === 6) &&
                ((o = bn.current),
                o !== null && o.tag === 13 && (o.flags |= 16384))),
        Cm(t, e))
      : Cl(t);
  }
  function Cl(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Cm(t, ua);
        return;
      }
      e = t.return;
      var r = pE(t.alternate, t, qi);
      if (r !== null) {
        Ne = r;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ne = t;
        return;
      }
      Ne = t = e;
    } while (t !== null);
    vt === 0 && (vt = 5);
  }
  function Cm(e, t) {
    do {
      var r = mE(e.alternate, e);
      if (r !== null) {
        (r.flags &= 32767), (Ne = r);
        return;
      }
      if (
        ((r = e.return),
        r !== null &&
          ((r.flags |= 32768), (r.subtreeFlags = 0), (r.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Ne = e;
        return;
      }
      Ne = e = r;
    } while (e !== null);
    (vt = 6), (Ne = null);
  }
  function Dm(e, t, r, o, u, h, g, B, F) {
    e.cancelPendingCommit = null;
    do Dl();
    while (zt !== 0);
    if ((Ze & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (
        ((h = t.lanes | t.childLanes),
        (h |= kc),
        fs(e, r, h, g, B, F),
        e === it && ((Ne = it = null), (Ve = 0)),
        (Lr = t),
        (ha = e),
        (Pi = r),
        (Z0 = h),
        (Q0 = u),
        (pm = o),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            _E(Jt, function () {
              return wm(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (o = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || o)
      ) {
        (o = k.T), (k.T = null), (u = te.p), (te.p = 2), (g = Ze), (Ze |= 4);
        try {
          xE(e, t, r);
        } finally {
          (Ze = g), (te.p = u), (k.T = o);
        }
      }
      (zt = 1), Bm(), _m(), Tm();
    }
  }
  function Bm() {
    if (zt === 1) {
      zt = 0;
      var e = ha,
        t = Lr,
        r = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || r) {
        (r = k.T), (k.T = null);
        var o = te.p;
        te.p = 2;
        var u = Ze;
        Ze |= 4;
        try {
          sm(t, e);
          var h = ff,
            g = hp(e.containerInfo),
            B = h.focusedElem,
            F = h.selectionRange;
          if (
            g !== B &&
            B &&
            B.ownerDocument &&
            fp(B.ownerDocument.documentElement, B)
          ) {
            if (F !== null && Nc(B)) {
              var G = F.start,
                ne = F.end;
              if ((ne === void 0 && (ne = G), "selectionStart" in B))
                (B.selectionStart = G),
                  (B.selectionEnd = Math.min(ne, B.value.length));
              else {
                var re = B.ownerDocument || document,
                  Z = (re && re.defaultView) || window;
                if (Z.getSelection) {
                  var I = Z.getSelection(),
                    ve = B.textContent.length,
                    De = Math.min(F.start, ve),
                    nt = F.end === void 0 ? De : Math.min(F.end, ve);
                  !I.extend && De > nt && ((g = nt), (nt = De), (De = g));
                  var q = cp(B, De),
                    H = cp(B, nt);
                  if (
                    q &&
                    H &&
                    (I.rangeCount !== 1 ||
                      I.anchorNode !== q.node ||
                      I.anchorOffset !== q.offset ||
                      I.focusNode !== H.node ||
                      I.focusOffset !== H.offset)
                  ) {
                    var X = re.createRange();
                    X.setStart(q.node, q.offset),
                      I.removeAllRanges(),
                      De > nt
                        ? (I.addRange(X), I.extend(H.node, H.offset))
                        : (X.setEnd(H.node, H.offset), I.addRange(X));
                  }
                }
              }
            }
            for (re = [], I = B; (I = I.parentNode); )
              I.nodeType === 1 &&
                re.push({ element: I, left: I.scrollLeft, top: I.scrollTop });
            for (
              typeof B.focus == "function" && B.focus(), B = 0;
              B < re.length;
              B++
            ) {
              var ae = re[B];
              (ae.element.scrollLeft = ae.left),
                (ae.element.scrollTop = ae.top);
            }
          }
          (Ul = !!cf), (ff = cf = null);
        } finally {
          (Ze = u), (te.p = o), (k.T = r);
        }
      }
      (e.current = t), (zt = 2);
    }
  }
  function _m() {
    if (zt === 2) {
      zt = 0;
      var e = ha,
        t = Lr,
        r = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || r) {
        (r = k.T), (k.T = null);
        var o = te.p;
        te.p = 2;
        var u = Ze;
        Ze |= 4;
        try {
          tm(e, t.alternate, t);
        } finally {
          (Ze = u), (te.p = o), (k.T = r);
        }
      }
      zt = 3;
    }
  }
  function Tm() {
    if (zt === 4 || zt === 3) {
      (zt = 0), _n();
      var e = ha,
        t = Lr,
        r = Pi,
        o = pm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (zt = 5)
        : ((zt = 0), (Lr = ha = null), Rm(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (
        (u === 0 && (fa = null),
        ce(r),
        (t = t.stateNode),
        Ot && typeof Ot.onCommitFiberRoot == "function")
      )
        try {
          Ot.onCommitFiberRoot(Kt, t, void 0, (t.current.flags & 128) === 128);
        } catch (F) {}
      if (o !== null) {
        (t = k.T), (u = te.p), (te.p = 2), (k.T = null);
        try {
          for (var h = e.onRecoverableError, g = 0; g < o.length; g++) {
            var B = o[g];
            h(B.value, { componentStack: B.stack });
          }
        } finally {
          (k.T = t), (te.p = u);
        }
      }
      (Pi & 3) !== 0 && Dl(),
        vi(e),
        (u = e.pendingLanes),
        (r & 261930) !== 0 && (u & 42) !== 0
          ? e === $0
            ? qs++
            : ((qs = 0), ($0 = e))
          : (qs = 0),
        Ps(0);
    }
  }
  function Rm(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ss(t)));
  }
  function Dl() {
    return Bm(), _m(), Tm(), wm();
  }
  function wm() {
    if (zt !== 5) return !1;
    var e = ha,
      t = Z0;
    Z0 = 0;
    var r = ce(Pi),
      o = k.T,
      u = te.p;
    try {
      (te.p = 32 > r ? 32 : r), (k.T = null), (r = Q0), (Q0 = null);
      var h = ha,
        g = Pi;
      if (((zt = 0), (Lr = ha = null), (Pi = 0), (Ze & 6) !== 0))
        throw Error(s(331));
      var B = Ze;
      if (
        ((Ze |= 4),
        fm(h.current),
        lm(h, h.current, g, r),
        (Ze = B),
        Ps(0, !1),
        Ot && typeof Ot.onPostCommitFiberRoot == "function")
      )
        try {
          Ot.onPostCommitFiberRoot(Kt, h);
        } catch (F) {}
      return !0;
    } finally {
      (te.p = u), (k.T = o), Rm(e, t);
    }
  }
  function Mm(e, t, r) {
    (t = Nn(r, t)),
      (t = T0(e.stateNode, t, 2)),
      (e = ra(e, t, 2)),
      e !== null && (di(e, 2), vi(e));
  }
  function We(e, t, r) {
    if (e.tag === 3) Mm(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Mm(t, e, r);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (fa === null || !fa.has(o)))
          ) {
            (e = Nn(r, e)),
              (r = O1(2)),
              (o = ra(t, r, 2)),
              o !== null && (F1(r, o, t, e), di(o, 2), vi(o));
            break;
          }
        }
        t = t.return;
      }
  }
  function I0(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new gE();
      var u = new Set();
      o.set(t, u);
    } else (u = o.get(t)), u === void 0 && ((u = new Set()), o.set(t, u));
    u.has(r) ||
      ((X0 = !0), u.add(r), (e = CE.bind(null, e, t, r)), t.then(e, e));
  }
  function CE(e, t, r) {
    var o = e.pingCache;
    o !== null && o.delete(t),
      (e.pingedLanes |= e.suspendedLanes & r),
      (e.warmLanes &= ~r),
      it === e &&
        (Ve & r) === r &&
        (vt === 4 || (vt === 3 && (Ve & 62914560) === Ve && 300 > at() - gl)
          ? (Ze & 2) === 0 && Ur(e, 0)
          : (G0 |= r),
        Nr === Ve && (Nr = 0)),
      vi(e);
  }
  function Om(e, t) {
    t === 0 && (t = Bi()), (e = Ua(e, t)), e !== null && (di(e, t), vi(e));
  }
  function DE(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), Om(e, r);
  }
  function BE(e, t) {
    var r = 0;
    switch (e.tag) {
      case 31:
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
    o !== null && o.delete(t), Om(e, r);
  }
  function _E(e, t) {
    return Kn(e, t);
  }
  var Bl = null,
    Vr = null,
    ef = !1,
    _l = !1,
    tf = !1,
    pa = 0;
  function vi(e) {
    e !== Vr &&
      e.next === null &&
      (Vr === null ? (Bl = Vr = e) : (Vr = Vr.next = e)),
      (_l = !0),
      ef || ((ef = !0), RE());
  }
  function Ps(e, t) {
    if (!tf && _l) {
      tf = !0;
      do
        for (var r = !1, o = Bl; o !== null; ) {
          if (e !== 0) {
            var u = o.pendingLanes;
            if (u === 0) var h = 0;
            else {
              var g = o.suspendedLanes,
                B = o.pingedLanes;
              (h = (1 << (31 - Nt(42 | e) + 1)) - 1),
                (h &= u & ~(g & ~B)),
                (h = h & 201326741 ? (h & 201326741) | 1 : h ? h | 2 : 0);
            }
            h !== 0 && ((r = !0), Lm(o, h));
          } else
            (h = Ve),
              (h = Ci(
                o,
                o === it ? h : 0,
                o.cancelPendingCommit !== null || o.timeoutHandle !== -1,
              )),
              (h & 3) === 0 || Di(o, h) || ((r = !0), Lm(o, h));
          o = o.next;
        }
      while (r);
      tf = !1;
    }
  }
  function TE() {
    Fm();
  }
  function Fm() {
    _l = ef = !1;
    var e = 0;
    pa !== 0 && VE() && (e = pa);
    for (var t = at(), r = null, o = Bl; o !== null; ) {
      var u = o.next,
        h = zm(o, t);
      h === 0
        ? ((o.next = null),
          r === null ? (Bl = u) : (r.next = u),
          u === null && (Vr = r))
        : ((r = o), (e !== 0 || (h & 3) !== 0) && (_l = !0)),
        (o = u);
    }
    (zt !== 0 && zt !== 5) || Ps(e), pa !== 0 && (pa = 0);
  }
  function zm(e, t) {
    for (
      var r = e.suspendedLanes,
        o = e.pingedLanes,
        u = e.expirationTimes,
        h = e.pendingLanes & -62914561;
      0 < h;

    ) {
      var g = 31 - Nt(h),
        B = 1 << g,
        F = u[g];
      F === -1
        ? ((B & r) === 0 || (B & o) !== 0) && (u[g] = Oa(B, t))
        : F <= t && (e.expiredLanes |= B),
        (h &= ~B);
    }
    if (
      ((t = it),
      (r = Ve),
      (r = Ci(
        e,
        e === t ? r : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (o = e.callbackNode),
      r === 0 ||
        (e === t && (Je === 2 || Je === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        o !== null && o !== null && Vt(o),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((r & 3) === 0 || Di(e, r)) {
      if (((t = r & -r), t === e.callbackPriority)) return t;
      switch ((o !== null && Vt(o), ce(r))) {
        case 2:
        case 8:
          r = Rn;
          break;
        case 32:
          r = Jt;
          break;
        case 268435456:
          r = Qi;
          break;
        default:
          r = Jt;
      }
      return (
        (o = Nm.bind(null, e)),
        (r = Kn(r, o)),
        (e.callbackPriority = t),
        (e.callbackNode = r),
        t
      );
    }
    return (
      o !== null && o !== null && Vt(o),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Nm(e, t) {
    if (zt !== 0 && zt !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var r = e.callbackNode;
    if (Dl() && e.callbackNode !== r) return null;
    var o = Ve;
    return (
      (o = Ci(
        e,
        e === it ? o : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      o === 0
        ? null
        : (xm(e, o, t),
          zm(e, at()),
          e.callbackNode != null && e.callbackNode === r
            ? Nm.bind(null, e)
            : null)
    );
  }
  function Lm(e, t) {
    if (Dl()) return null;
    xm(e, t, !0);
  }
  function RE() {
    jE(function () {
      (Ze & 6) !== 0 ? Kn(Tn, TE) : Fm();
    });
  }
  function nf() {
    if (pa === 0) {
      var e = Cr;
      e === 0 && ((e = ci), (ci <<= 1), (ci & 261888) === 0 && (ci = 256)),
        (pa = e);
    }
    return pa;
  }
  function Um(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : No("" + e);
  }
  function Hm(e, t) {
    var r = t.ownerDocument.createElement("input");
    return (
      (r.name = t.name),
      (r.value = t.value),
      e.id && r.setAttribute("form", e.id),
      t.parentNode.insertBefore(r, t),
      (e = new FormData(e)),
      r.parentNode.removeChild(r),
      e
    );
  }
  function wE(e, t, r, o, u) {
    if (t === "submit" && r && r.stateNode === u) {
      var h = Um((u[fe] || null).action),
        g = o.submitter;
      g &&
        ((t = (t = g[fe] || null)
          ? Um(t.formAction)
          : g.getAttribute("formAction")),
        t !== null && ((h = t), (g = null)));
      var B = new Vo("action", "action", null, o, u);
      e.push({
        event: B,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (pa !== 0) {
                  var F = g ? Hm(u, g) : new FormData(u);
                  A0(
                    r,
                    { pending: !0, data: F, method: u.method, action: h },
                    null,
                    F,
                  );
                }
              } else
                typeof h == "function" &&
                  (B.preventDefault(),
                  (F = g ? Hm(u, g) : new FormData(u)),
                  A0(
                    r,
                    { pending: !0, data: F, method: u.method, action: h },
                    h,
                    F,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var af = 0; af < Vc.length; af++) {
    var rf = Vc[af],
      ME = rf.toLowerCase(),
      OE = rf[0].toUpperCase() + rf.slice(1);
    Wn(ME, "on" + OE);
  }
  Wn(mp, "onAnimationEnd"),
    Wn(xp, "onAnimationIteration"),
    Wn(yp, "onAnimationStart"),
    Wn("dblclick", "onDoubleClick"),
    Wn("focusin", "onFocus"),
    Wn("focusout", "onBlur"),
    Wn(Z8, "onTransitionRun"),
    Wn(Q8, "onTransitionStart"),
    Wn($8, "onTransitionCancel"),
    Wn(vp, "onTransitionEnd"),
    $n("onMouseEnter", ["mouseout", "mouseover"]),
    $n("onMouseLeave", ["mouseout", "mouseover"]),
    $n("onPointerEnter", ["pointerout", "pointerover"]),
    $n("onPointerLeave", ["pointerout", "pointerover"]),
    Mn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Mn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Mn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Mn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Mn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var Ys =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    FE = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ys),
    );
  function Vm(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var o = e[r],
        u = o.event;
      o = o.listeners;
      e: {
        var h = void 0;
        if (t)
          for (var g = o.length - 1; 0 <= g; g--) {
            var B = o[g],
              F = B.instance,
              G = B.currentTarget;
            if (((B = B.listener), F !== h && u.isPropagationStopped()))
              break e;
            (h = B), (u.currentTarget = G);
            try {
              h(u);
            } catch (ne) {
              qo(ne);
            }
            (u.currentTarget = null), (h = F);
          }
        else
          for (g = 0; g < o.length; g++) {
            if (
              ((B = o[g]),
              (F = B.instance),
              (G = B.currentTarget),
              (B = B.listener),
              F !== h && u.isPropagationStopped())
            )
              break e;
            (h = B), (u.currentTarget = G);
            try {
              h(u);
            } catch (ne) {
              qo(ne);
            }
            (u.currentTarget = null), (h = F);
          }
      }
    }
  }
  function Le(e, t) {
    var r = t[Te];
    r === void 0 && (r = t[Te] = new Set());
    var o = e + "__bubble";
    r.has(o) || (km(t, e, 2, !1), r.add(o));
  }
  function sf(e, t, r) {
    var o = 0;
    t && (o |= 4), km(r, e, o, t);
  }
  var Tl = "_reactListening" + Math.random().toString(36).slice(2);
  function of(e) {
    if (!e[Tl]) {
      (e[Tl] = !0),
        Ji.forEach(function (r) {
          r !== "selectionchange" && (FE.has(r) || sf(r, !1, e), sf(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Tl] || ((t[Tl] = !0), sf("selectionchange", !1, t));
    }
  }
  function km(e, t, r, o) {
    switch (mx(t)) {
      case 2:
        var u = ob;
        break;
      case 8:
        u = lb;
        break;
      default:
        u = Af;
    }
    (r = u.bind(null, t, r, e)),
      (u = void 0),
      !Bc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      o
        ? u !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: u })
          : e.addEventListener(t, r, !0)
        : u !== void 0
          ? e.addEventListener(t, r, { passive: u })
          : e.addEventListener(t, r, !1);
  }
  function lf(e, t, r, o, u) {
    var h = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var g = o.tag;
        if (g === 3 || g === 4) {
          var B = o.stateNode.containerInfo;
          if (B === u) break;
          if (g === 4)
            for (g = o.return; g !== null; ) {
              var F = g.tag;
              if ((F === 3 || F === 4) && g.stateNode.containerInfo === u)
                return;
              g = g.return;
            }
          for (; B !== null; ) {
            if (((g = vn(B)), g === null)) return;
            if (((F = g.tag), F === 5 || F === 6 || F === 26 || F === 27)) {
              o = h = g;
              continue e;
            }
            B = B.parentNode;
          }
        }
        o = o.return;
      }
    Xd(function () {
      var G = h,
        ne = Cc(r),
        re = [];
      e: {
        var Z = gp.get(e);
        if (Z !== void 0) {
          var I = Vo,
            ve = e;
          switch (e) {
            case "keypress":
              if (Uo(r) === 0) break e;
            case "keydown":
            case "keyup":
              I = B8;
              break;
            case "focusin":
              (ve = "focus"), (I = wc);
              break;
            case "focusout":
              (ve = "blur"), (I = wc);
              break;
            case "beforeblur":
            case "afterblur":
              I = wc;
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
              I = Zd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              I = p8;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              I = R8;
              break;
            case mp:
            case xp:
            case yp:
              I = y8;
              break;
            case vp:
              I = M8;
              break;
            case "scroll":
            case "scrollend":
              I = h8;
              break;
            case "wheel":
              I = F8;
              break;
            case "copy":
            case "cut":
            case "paste":
              I = g8;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              I = $d;
              break;
            case "toggle":
            case "beforetoggle":
              I = N8;
          }
          var De = (t & 4) !== 0,
            nt = !De && (e === "scroll" || e === "scrollend"),
            q = De ? (Z !== null ? Z + "Capture" : null) : Z;
          De = [];
          for (var H = G, X; H !== null; ) {
            var ae = H;
            if (
              ((X = ae.stateNode),
              (ae = ae.tag),
              (ae !== 5 && ae !== 26 && ae !== 27) ||
                X === null ||
                q === null ||
                ((ae = hs(H, q)), ae != null && De.push(Xs(H, ae, X))),
              nt)
            )
              break;
            H = H.return;
          }
          0 < De.length &&
            ((Z = new I(Z, ve, null, r, ne)),
            re.push({ event: Z, listeners: De }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((Z = e === "mouseover" || e === "pointerover"),
            (I = e === "mouseout" || e === "pointerout"),
            Z &&
              r !== Sc &&
              (ve = r.relatedTarget || r.fromElement) &&
              (vn(ve) || ve[ge]))
          )
            break e;
          if (
            (I || Z) &&
            ((Z =
              ne.window === ne
                ? ne
                : (Z = ne.ownerDocument)
                  ? Z.defaultView || Z.parentWindow
                  : window),
            I
              ? ((ve = r.relatedTarget || r.toElement),
                (I = G),
                (ve = ve ? vn(ve) : null),
                ve !== null &&
                  ((nt = c(ve)),
                  (De = ve.tag),
                  ve !== nt || (De !== 5 && De !== 27 && De !== 6)) &&
                  (ve = null))
              : ((I = null), (ve = G)),
            I !== ve)
          ) {
            if (
              ((De = Zd),
              (ae = "onMouseLeave"),
              (q = "onMouseEnter"),
              (H = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((De = $d),
                (ae = "onPointerLeave"),
                (q = "onPointerEnter"),
                (H = "pointer")),
              (nt = I == null ? Z : Wt(I)),
              (X = ve == null ? Z : Wt(ve)),
              (Z = new De(ae, H + "leave", I, r, ne)),
              (Z.target = nt),
              (Z.relatedTarget = X),
              (ae = null),
              vn(ne) === G &&
                ((De = new De(q, H + "enter", ve, r, ne)),
                (De.target = X),
                (De.relatedTarget = nt),
                (ae = De)),
              (nt = ae),
              I && ve)
            )
              t: {
                for (De = zE, q = I, H = ve, X = 0, ae = q; ae; ae = De(ae))
                  X++;
                ae = 0;
                for (var Se = H; Se; Se = De(Se)) ae++;
                for (; 0 < X - ae; ) (q = De(q)), X--;
                for (; 0 < ae - X; ) (H = De(H)), ae--;
                for (; X--; ) {
                  if (q === H || (H !== null && q === H.alternate)) {
                    De = q;
                    break t;
                  }
                  (q = De(q)), (H = De(H));
                }
                De = null;
              }
            else De = null;
            I !== null && jm(re, Z, I, De, !1),
              ve !== null && nt !== null && jm(re, nt, ve, De, !0);
          }
        }
        e: {
          if (
            ((Z = G ? Wt(G) : window),
            (I = Z.nodeName && Z.nodeName.toLowerCase()),
            I === "select" || (I === "input" && Z.type === "file"))
          )
            var Ge = ap;
          else if (np(Z))
            if (rp) Ge = X8;
            else {
              Ge = P8;
              var Ee = q8;
            }
          else
            (I = Z.nodeName),
              !I ||
              I.toLowerCase() !== "input" ||
              (Z.type !== "checkbox" && Z.type !== "radio")
                ? G && Ac(G.elementType) && (Ge = ap)
                : (Ge = Y8);
          if (Ge && (Ge = Ge(e, G))) {
            ip(re, Ge, r, ne);
            break e;
          }
          Ee && Ee(e, Z, G),
            e === "focusout" &&
              G &&
              Z.type === "number" &&
              G.memoizedProps.value != null &&
              bc(Z, "number", Z.value);
        }
        switch (((Ee = G ? Wt(G) : window), e)) {
          case "focusin":
            (np(Ee) || Ee.contentEditable === "true") &&
              ((xr = Ee), (Lc = G), (Es = null));
            break;
          case "focusout":
            Es = Lc = xr = null;
            break;
          case "mousedown":
            Uc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Uc = !1), dp(re, r, ne);
            break;
          case "selectionchange":
            if (K8) break;
          case "keydown":
          case "keyup":
            dp(re, r, ne);
        }
        var Fe;
        if (Oc)
          e: {
            switch (e) {
              case "compositionstart":
                var ke = "onCompositionStart";
                break e;
              case "compositionend":
                ke = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ke = "onCompositionUpdate";
                break e;
            }
            ke = void 0;
          }
        else
          mr
            ? ep(e, r) && (ke = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (ke = "onCompositionStart");
        ke &&
          (Jd &&
            r.locale !== "ko" &&
            (mr || ke !== "onCompositionStart"
              ? ke === "onCompositionEnd" && mr && (Fe = Gd())
              : ((Wi = ne),
                (_c = "value" in Wi ? Wi.value : Wi.textContent),
                (mr = !0))),
          (Ee = Rl(G, ke)),
          0 < Ee.length &&
            ((ke = new Qd(ke, e, null, r, ne)),
            re.push({ event: ke, listeners: Ee }),
            Fe
              ? (ke.data = Fe)
              : ((Fe = tp(r)), Fe !== null && (ke.data = Fe)))),
          (Fe = U8 ? H8(e, r) : V8(e, r)) &&
            ((ke = Rl(G, "onBeforeInput")),
            0 < ke.length &&
              ((Ee = new Qd("onBeforeInput", "beforeinput", null, r, ne)),
              re.push({ event: Ee, listeners: ke }),
              (Ee.data = Fe))),
          wE(re, e, G, r, ne);
      }
      Vm(re, t);
    });
  }
  function Xs(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Rl(e, t) {
    for (var r = t + "Capture", o = []; e !== null; ) {
      var u = e,
        h = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          h === null ||
          ((u = hs(e, r)),
          u != null && o.unshift(Xs(e, u, h)),
          (u = hs(e, t)),
          u != null && o.push(Xs(e, u, h))),
        e.tag === 3)
      )
        return o;
      e = e.return;
    }
    return [];
  }
  function zE(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function jm(e, t, r, o, u) {
    for (var h = t._reactName, g = []; r !== null && r !== o; ) {
      var B = r,
        F = B.alternate,
        G = B.stateNode;
      if (((B = B.tag), F !== null && F === o)) break;
      (B !== 5 && B !== 26 && B !== 27) ||
        G === null ||
        ((F = G),
        u
          ? ((G = hs(r, h)), G != null && g.unshift(Xs(r, G, F)))
          : u || ((G = hs(r, h)), G != null && g.push(Xs(r, G, F)))),
        (r = r.return);
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var NE = /\r\n?/g,
    LE = /\u0000|\uFFFD/g;
  function qm(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        NE,
        `
`,
      )
      .replace(LE, "");
  }
  function Pm(e, t) {
    return (t = qm(t)), qm(e) === t;
  }
  function tt(e, t, r, o, u, h) {
    switch (r) {
      case "children":
        typeof o == "string"
          ? t === "body" || (t === "textarea" && o === "") || hr(e, o)
          : (typeof o == "number" || typeof o == "bigint") &&
            t !== "body" &&
            hr(e, "" + o);
        break;
      case "className":
        Jn(e, "class", o);
        break;
      case "tabIndex":
        Jn(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Jn(e, r, o);
        break;
      case "style":
        Pd(e, o, h);
        break;
      case "data":
        if (t !== "object") {
          Jn(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (t !== "a" || r !== "href")) {
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
        (o = No("" + o)), e.setAttribute(r, o);
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
          typeof h == "function" &&
            (r === "formAction"
              ? (t !== "input" && tt(e, t, "name", u.name, u, null),
                tt(e, t, "formEncType", u.formEncType, u, null),
                tt(e, t, "formMethod", u.formMethod, u, null),
                tt(e, t, "formTarget", u.formTarget, u, null))
              : (tt(e, t, "encType", u.encType, u, null),
                tt(e, t, "method", u.method, u, null),
                tt(e, t, "target", u.target, u, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(r);
          break;
        }
        (o = No("" + o)), e.setAttribute(r, o);
        break;
      case "onClick":
        o != null && (e.onclick = Ti);
        break;
      case "onScroll":
        o != null && Le("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Le("scrollend", e);
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
        (r = No("" + o)),
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
        Le("beforetoggle", e), Le("toggle", e), lt(e, "popover", o);
        break;
      case "xlinkActuate":
        On(e, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        On(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        On(e, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        On(e, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        On(e, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        On(e, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        On(e, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        On(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        On(e, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        lt(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < r.length) ||
          (r[0] !== "o" && r[0] !== "O") ||
          (r[1] !== "n" && r[1] !== "N")) &&
          ((r = c8.get(r) || r), lt(e, r, o));
    }
  }
  function uf(e, t, r, o, u, h) {
    switch (r) {
      case "style":
        Pd(e, o, h);
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
          ? hr(e, o)
          : (typeof o == "number" || typeof o == "bigint") && hr(e, "" + o);
        break;
      case "onScroll":
        o != null && Le("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Le("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = Ti);
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
        if (!pi.hasOwnProperty(r))
          e: {
            if (
              r[0] === "o" &&
              r[1] === "n" &&
              ((u = r.endsWith("Capture")),
              (t = r.slice(2, u ? r.length - 7 : void 0)),
              (h = e[fe] || null),
              (h = h != null ? h[r] : null),
              typeof h == "function" && e.removeEventListener(t, h, u),
              typeof o == "function")
            ) {
              typeof h != "function" &&
                h !== null &&
                (r in e
                  ? (e[r] = null)
                  : e.hasAttribute(r) && e.removeAttribute(r)),
                e.addEventListener(t, o, u);
              break e;
            }
            r in e
              ? (e[r] = o)
              : o === !0
                ? e.setAttribute(r, "")
                : lt(e, r, o);
          }
    }
  }
  function Yt(e, t, r) {
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
        Le("error", e), Le("load", e);
        var o = !1,
          u = !1,
          h;
        for (h in r)
          if (r.hasOwnProperty(h)) {
            var g = r[h];
            if (g != null)
              switch (h) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  tt(e, t, h, g, r, null);
              }
          }
        u && tt(e, t, "srcSet", r.srcSet, r, null),
          o && tt(e, t, "src", r.src, r, null);
        return;
      case "input":
        Le("invalid", e);
        var B = (h = g = u = null),
          F = null,
          G = null;
        for (o in r)
          if (r.hasOwnProperty(o)) {
            var ne = r[o];
            if (ne != null)
              switch (o) {
                case "name":
                  u = ne;
                  break;
                case "type":
                  g = ne;
                  break;
                case "checked":
                  F = ne;
                  break;
                case "defaultChecked":
                  G = ne;
                  break;
                case "value":
                  h = ne;
                  break;
                case "defaultValue":
                  B = ne;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (ne != null) throw Error(s(137, t));
                  break;
                default:
                  tt(e, t, o, ne, r, null);
              }
          }
        Vd(e, h, B, F, G, g, u, !1);
        return;
      case "select":
        Le("invalid", e), (o = g = h = null);
        for (u in r)
          if (r.hasOwnProperty(u) && ((B = r[u]), B != null))
            switch (u) {
              case "value":
                h = B;
                break;
              case "defaultValue":
                g = B;
                break;
              case "multiple":
                o = B;
              default:
                tt(e, t, u, B, r, null);
            }
        (t = h),
          (r = g),
          (e.multiple = !!o),
          t != null ? fr(e, !!o, t, !1) : r != null && fr(e, !!o, r, !0);
        return;
      case "textarea":
        Le("invalid", e), (h = u = o = null);
        for (g in r)
          if (r.hasOwnProperty(g) && ((B = r[g]), B != null))
            switch (g) {
              case "value":
                o = B;
                break;
              case "defaultValue":
                u = B;
                break;
              case "children":
                h = B;
                break;
              case "dangerouslySetInnerHTML":
                if (B != null) throw Error(s(91));
                break;
              default:
                tt(e, t, g, B, r, null);
            }
        jd(e, o, u, h);
        return;
      case "option":
        for (F in r)
          if (r.hasOwnProperty(F) && ((o = r[F]), o != null))
            switch (F) {
              case "selected":
                e.selected =
                  o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                tt(e, t, F, o, r, null);
            }
        return;
      case "dialog":
        Le("beforetoggle", e), Le("toggle", e), Le("cancel", e), Le("close", e);
        break;
      case "iframe":
      case "object":
        Le("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Ys.length; o++) Le(Ys[o], e);
        break;
      case "image":
        Le("error", e), Le("load", e);
        break;
      case "details":
        Le("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Le("error", e), Le("load", e);
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
        for (G in r)
          if (r.hasOwnProperty(G) && ((o = r[G]), o != null))
            switch (G) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                tt(e, t, G, o, r, null);
            }
        return;
      default:
        if (Ac(t)) {
          for (ne in r)
            r.hasOwnProperty(ne) &&
              ((o = r[ne]), o !== void 0 && uf(e, t, ne, o, r, void 0));
          return;
        }
    }
    for (B in r)
      r.hasOwnProperty(B) && ((o = r[B]), o != null && tt(e, t, B, o, r, null));
  }
  function UE(e, t, r, o) {
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
        var u = null,
          h = null,
          g = null,
          B = null,
          F = null,
          G = null,
          ne = null;
        for (I in r) {
          var re = r[I];
          if (r.hasOwnProperty(I) && re != null)
            switch (I) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                F = re;
              default:
                o.hasOwnProperty(I) || tt(e, t, I, null, o, re);
            }
        }
        for (var Z in o) {
          var I = o[Z];
          if (((re = r[Z]), o.hasOwnProperty(Z) && (I != null || re != null)))
            switch (Z) {
              case "type":
                h = I;
                break;
              case "name":
                u = I;
                break;
              case "checked":
                G = I;
                break;
              case "defaultChecked":
                ne = I;
                break;
              case "value":
                g = I;
                break;
              case "defaultValue":
                B = I;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (I != null) throw Error(s(137, t));
                break;
              default:
                I !== re && tt(e, t, Z, I, o, re);
            }
        }
        Ec(e, g, B, F, G, ne, h, u);
        return;
      case "select":
        I = g = B = Z = null;
        for (h in r)
          if (((F = r[h]), r.hasOwnProperty(h) && F != null))
            switch (h) {
              case "value":
                break;
              case "multiple":
                I = F;
              default:
                o.hasOwnProperty(h) || tt(e, t, h, null, o, F);
            }
        for (u in o)
          if (
            ((h = o[u]),
            (F = r[u]),
            o.hasOwnProperty(u) && (h != null || F != null))
          )
            switch (u) {
              case "value":
                Z = h;
                break;
              case "defaultValue":
                B = h;
                break;
              case "multiple":
                g = h;
              default:
                h !== F && tt(e, t, u, h, o, F);
            }
        (t = B),
          (r = g),
          (o = I),
          Z != null
            ? fr(e, !!r, Z, !1)
            : !!o != !!r &&
              (t != null ? fr(e, !!r, t, !0) : fr(e, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        I = Z = null;
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
                tt(e, t, B, null, o, u);
            }
        for (g in o)
          if (
            ((u = o[g]),
            (h = r[g]),
            o.hasOwnProperty(g) && (u != null || h != null))
          )
            switch (g) {
              case "value":
                Z = u;
                break;
              case "defaultValue":
                I = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(s(91));
                break;
              default:
                u !== h && tt(e, t, g, u, o, h);
            }
        kd(e, Z, I);
        return;
      case "option":
        for (var ve in r)
          if (
            ((Z = r[ve]),
            r.hasOwnProperty(ve) && Z != null && !o.hasOwnProperty(ve))
          )
            switch (ve) {
              case "selected":
                e.selected = !1;
                break;
              default:
                tt(e, t, ve, null, o, Z);
            }
        for (F in o)
          if (
            ((Z = o[F]),
            (I = r[F]),
            o.hasOwnProperty(F) && Z !== I && (Z != null || I != null))
          )
            switch (F) {
              case "selected":
                e.selected =
                  Z && typeof Z != "function" && typeof Z != "symbol";
                break;
              default:
                tt(e, t, F, Z, o, I);
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
        for (var De in r)
          (Z = r[De]),
            r.hasOwnProperty(De) &&
              Z != null &&
              !o.hasOwnProperty(De) &&
              tt(e, t, De, null, o, Z);
        for (G in o)
          if (
            ((Z = o[G]),
            (I = r[G]),
            o.hasOwnProperty(G) && Z !== I && (Z != null || I != null))
          )
            switch (G) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null) throw Error(s(137, t));
                break;
              default:
                tt(e, t, G, Z, o, I);
            }
        return;
      default:
        if (Ac(t)) {
          for (var nt in r)
            (Z = r[nt]),
              r.hasOwnProperty(nt) &&
                Z !== void 0 &&
                !o.hasOwnProperty(nt) &&
                uf(e, t, nt, void 0, o, Z);
          for (ne in o)
            (Z = o[ne]),
              (I = r[ne]),
              !o.hasOwnProperty(ne) ||
                Z === I ||
                (Z === void 0 && I === void 0) ||
                uf(e, t, ne, Z, o, I);
          return;
        }
    }
    for (var q in r)
      (Z = r[q]),
        r.hasOwnProperty(q) &&
          Z != null &&
          !o.hasOwnProperty(q) &&
          tt(e, t, q, null, o, Z);
    for (re in o)
      (Z = o[re]),
        (I = r[re]),
        !o.hasOwnProperty(re) ||
          Z === I ||
          (Z == null && I == null) ||
          tt(e, t, re, Z, o, I);
  }
  function Ym(e) {
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
  function HE() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, r = performance.getEntriesByType("resource"), o = 0;
        o < r.length;
        o++
      ) {
        var u = r[o],
          h = u.transferSize,
          g = u.initiatorType,
          B = u.duration;
        if (h && B && Ym(g)) {
          for (g = 0, B = u.responseEnd, o += 1; o < r.length; o++) {
            var F = r[o],
              G = F.startTime;
            if (G > B) break;
            var ne = F.transferSize,
              re = F.initiatorType;
            ne &&
              Ym(re) &&
              ((F = F.responseEnd),
              (g += ne * (F < B ? 1 : (B - G) / (F - G))));
          }
          if ((--o, (t += (8 * (h + g)) / (u.duration / 1e3)), e++, 10 < e))
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
  var cf = null,
    ff = null;
  function wl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Xm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Gm(e, t) {
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
  function hf(e, t) {
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
  var df = null;
  function VE() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === df
        ? !1
        : ((df = e), !0)
      : ((df = null), !1);
  }
  var Km = typeof setTimeout == "function" ? setTimeout : void 0,
    kE = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Zm = typeof Promise == "function" ? Promise : void 0,
    jE =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Zm != "undefined"
          ? function (e) {
              return Zm.resolve(null).then(e).catch(qE);
            }
          : Km;
  function qE(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ma(e) {
    return e === "head";
  }
  function Qm(e, t) {
    var r = t,
      o = 0;
    do {
      var u = r.nextSibling;
      if ((e.removeChild(r), u && u.nodeType === 8))
        if (((r = u.data), r === "/$" || r === "/&")) {
          if (o === 0) {
            e.removeChild(u), Pr(t);
            return;
          }
          o--;
        } else if (
          r === "$" ||
          r === "$?" ||
          r === "$~" ||
          r === "$!" ||
          r === "&"
        )
          o++;
        else if (r === "html") Gs(e.ownerDocument.documentElement);
        else if (r === "head") {
          (r = e.ownerDocument.head), Gs(r);
          for (var h = r.firstChild; h; ) {
            var g = h.nextSibling,
              B = h.nodeName;
            h[ze] ||
              B === "SCRIPT" ||
              B === "STYLE" ||
              (B === "LINK" && h.rel.toLowerCase() === "stylesheet") ||
              r.removeChild(h),
              (h = g);
          }
        } else r === "body" && Gs(e.ownerDocument.body);
      r = u;
    } while (r);
    Pr(t);
  }
  function $m(e, t) {
    var r = e;
    e = 0;
    do {
      var o = r.nextSibling;
      if (
        (r.nodeType === 1
          ? t
            ? ((r._stashedDisplay = r.style.display),
              (r.style.display = "none"))
            : ((r.style.display = r._stashedDisplay || ""),
              r.getAttribute("style") === "" && r.removeAttribute("style"))
          : r.nodeType === 3 &&
            (t
              ? ((r._stashedText = r.nodeValue), (r.nodeValue = ""))
              : (r.nodeValue = r._stashedText || "")),
        o && o.nodeType === 8)
      )
        if (((r = o.data), r === "/$")) {
          if (e === 0) break;
          e--;
        } else (r !== "$" && r !== "$?" && r !== "$~" && r !== "$!") || e++;
      r = o;
    } while (r);
  }
  function pf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var r = t;
      switch (((t = t.nextSibling), r.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          pf(r), rt(r);
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
  function PE(e, t, r, o) {
    for (; e.nodeType === 1; ) {
      var u = r;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (o) {
        if (!e[ze])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((h = e.getAttribute("rel")),
                h === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                h !== u.rel ||
                e.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
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
                ((h = e.getAttribute("src")),
                (h !== (u.src == null ? null : u.src) ||
                  e.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  e.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  h &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var h = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === h) return e;
      } else return e;
      if (((e = kn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function YE(e, t, r) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !r) ||
        ((e = kn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Jm(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = kn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function mf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function xf(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function XE(e, t) {
    var r = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || r.readyState !== "loading") t();
    else {
      var o = function () {
        t(), r.removeEventListener("DOMContentLoaded", o);
      };
      r.addEventListener("DOMContentLoaded", o), (e._reactRetry = o);
    }
  }
  function kn(e) {
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
  var yf = null;
  function Wm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "/$" || r === "/&") {
          if (t === 0) return kn(e.nextSibling);
          t--;
        } else
          (r !== "$" && r !== "$!" && r !== "$?" && r !== "$~" && r !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Im(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?" || r === "$~" || r === "&") {
          if (t === 0) return e;
          t--;
        } else (r !== "/$" && r !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function ex(e, t, r) {
    switch (((t = wl(r)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(s(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(s(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function Gs(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    rt(e);
  }
  var jn = new Map(),
    tx = new Set();
  function Ml(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Yi = te.d;
  te.d = { f: GE, r: KE, D: ZE, C: QE, L: $E, m: JE, X: IE, S: WE, M: eb };
  function GE() {
    var e = Yi.f(),
      t = Al();
    return e || t;
  }
  function KE(e) {
    var t = wn(e);
    t !== null && t.tag === 5 && t.type === "form" ? v1(t) : Yi.r(e);
  }
  var kr = typeof document == "undefined" ? null : document;
  function nx(e, t, r) {
    var o = kr;
    if (o && typeof t == "string" && t) {
      var u = Fn(t);
      (u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof r == "string" && (u += '[crossorigin="' + r + '"]'),
        tx.has(u) ||
          (tx.add(u),
          (e = { rel: e, crossOrigin: r, href: t }),
          o.querySelector(u) === null &&
            ((t = o.createElement("link")),
            Yt(t, "link", e),
            xt(t),
            o.head.appendChild(t)));
    }
  }
  function ZE(e) {
    Yi.D(e), nx("dns-prefetch", e, null);
  }
  function QE(e, t) {
    Yi.C(e, t), nx("preconnect", e, t);
  }
  function $E(e, t, r) {
    Yi.L(e, t, r);
    var o = kr;
    if (o && e && t) {
      var u = 'link[rel="preload"][as="' + Fn(t) + '"]';
      t === "image" && r && r.imageSrcSet
        ? ((u += '[imagesrcset="' + Fn(r.imageSrcSet) + '"]'),
          typeof r.imageSizes == "string" &&
            (u += '[imagesizes="' + Fn(r.imageSizes) + '"]'))
        : (u += '[href="' + Fn(e) + '"]');
      var h = u;
      switch (t) {
        case "style":
          h = jr(e);
          break;
        case "script":
          h = qr(e);
      }
      jn.has(h) ||
        ((e = y(
          {
            rel: "preload",
            href: t === "image" && r && r.imageSrcSet ? void 0 : e,
            as: t,
          },
          r,
        )),
        jn.set(h, e),
        o.querySelector(u) !== null ||
          (t === "style" && o.querySelector(Ks(h))) ||
          (t === "script" && o.querySelector(Zs(h))) ||
          ((t = o.createElement("link")),
          Yt(t, "link", e),
          xt(t),
          o.head.appendChild(t)));
    }
  }
  function JE(e, t) {
    Yi.m(e, t);
    var r = kr;
    if (r && e) {
      var o = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + Fn(o) + '"][href="' + Fn(e) + '"]',
        h = u;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          h = qr(e);
      }
      if (
        !jn.has(h) &&
        ((e = y({ rel: "modulepreload", href: e }, t)),
        jn.set(h, e),
        r.querySelector(u) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(Zs(h))) return;
        }
        (o = r.createElement("link")),
          Yt(o, "link", e),
          xt(o),
          r.head.appendChild(o);
      }
    }
  }
  function WE(e, t, r) {
    Yi.S(e, t, r);
    var o = kr;
    if (o && e) {
      var u = kt(o).hoistableStyles,
        h = jr(e);
      t = t || "default";
      var g = u.get(h);
      if (!g) {
        var B = { loading: 0, preload: null };
        if ((g = o.querySelector(Ks(h)))) B.loading = 5;
        else {
          (e = y({ rel: "stylesheet", href: e, "data-precedence": t }, r)),
            (r = jn.get(h)) && vf(e, r);
          var F = (g = o.createElement("link"));
          xt(F),
            Yt(F, "link", e),
            (F._p = new Promise(function (G, ne) {
              (F.onload = G), (F.onerror = ne);
            })),
            F.addEventListener("load", function () {
              B.loading |= 1;
            }),
            F.addEventListener("error", function () {
              B.loading |= 2;
            }),
            (B.loading |= 4),
            Ol(g, t, o);
        }
        (g = { type: "stylesheet", instance: g, count: 1, state: B }),
          u.set(h, g);
      }
    }
  }
  function IE(e, t) {
    Yi.X(e, t);
    var r = kr;
    if (r && e) {
      var o = kt(r).hoistableScripts,
        u = qr(e),
        h = o.get(u);
      h ||
        ((h = r.querySelector(Zs(u))),
        h ||
          ((e = y({ src: e, async: !0 }, t)),
          (t = jn.get(u)) && gf(e, t),
          (h = r.createElement("script")),
          xt(h),
          Yt(h, "link", e),
          r.head.appendChild(h)),
        (h = { type: "script", instance: h, count: 1, state: null }),
        o.set(u, h));
    }
  }
  function eb(e, t) {
    Yi.M(e, t);
    var r = kr;
    if (r && e) {
      var o = kt(r).hoistableScripts,
        u = qr(e),
        h = o.get(u);
      h ||
        ((h = r.querySelector(Zs(u))),
        h ||
          ((e = y({ src: e, async: !0, type: "module" }, t)),
          (t = jn.get(u)) && gf(e, t),
          (h = r.createElement("script")),
          xt(h),
          Yt(h, "link", e),
          r.head.appendChild(h)),
        (h = { type: "script", instance: h, count: 1, state: null }),
        o.set(u, h));
    }
  }
  function ix(e, t, r, o) {
    var u = (u = pe.current) ? Ml(u) : null;
    if (!u) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string"
          ? ((t = jr(r.href)),
            (r = kt(u).hoistableStyles),
            (o = r.get(t)),
            o ||
              ((o = { type: "style", instance: null, count: 0, state: null }),
              r.set(t, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          r.rel === "stylesheet" &&
          typeof r.href == "string" &&
          typeof r.precedence == "string"
        ) {
          e = jr(r.href);
          var h = kt(u).hoistableStyles,
            g = h.get(e);
          if (
            (g ||
              ((u = u.ownerDocument || u),
              (g = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              h.set(e, g),
              (h = u.querySelector(Ks(e))) &&
                !h._p &&
                ((g.instance = h), (g.state.loading = 5)),
              jn.has(e) ||
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
                jn.set(e, r),
                h || tb(u, e, r, g.state))),
            t && o === null)
          )
            throw Error(s(528, ""));
          return g;
        }
        if (t && o !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (t = r.async),
          (r = r.src),
          typeof r == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = qr(r)),
              (r = kt(u).hoistableScripts),
              (o = r.get(t)),
              o ||
                ((o = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                r.set(t, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function jr(e) {
    return 'href="' + Fn(e) + '"';
  }
  function Ks(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function ax(e) {
    return y({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function tb(e, t, r, o) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (o.loading = 1)
      : ((t = e.createElement("link")),
        (o.preload = t),
        t.addEventListener("load", function () {
          return (o.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (o.loading |= 2);
        }),
        Yt(t, "link", r),
        xt(t),
        e.head.appendChild(t));
  }
  function qr(e) {
    return '[src="' + Fn(e) + '"]';
  }
  function Zs(e) {
    return "script[async]" + e;
  }
  function rx(e, t, r) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var o = e.querySelector('style[data-href~="' + Fn(r.href) + '"]');
          if (o) return (t.instance = o), xt(o), o;
          var u = y({}, r, {
            "data-href": r.href,
            "data-precedence": r.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (e.ownerDocument || e).createElement("style")),
            xt(o),
            Yt(o, "style", u),
            Ol(o, r.precedence, e),
            (t.instance = o)
          );
        case "stylesheet":
          u = jr(r.href);
          var h = e.querySelector(Ks(u));
          if (h) return (t.state.loading |= 4), (t.instance = h), xt(h), h;
          (o = ax(r)),
            (u = jn.get(u)) && vf(o, u),
            (h = (e.ownerDocument || e).createElement("link")),
            xt(h);
          var g = h;
          return (
            (g._p = new Promise(function (B, F) {
              (g.onload = B), (g.onerror = F);
            })),
            Yt(h, "link", o),
            (t.state.loading |= 4),
            Ol(h, r.precedence, e),
            (t.instance = h)
          );
        case "script":
          return (
            (h = qr(r.src)),
            (u = e.querySelector(Zs(h)))
              ? ((t.instance = u), xt(u), u)
              : ((o = r),
                (u = jn.get(h)) && ((o = y({}, r)), gf(o, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement("script")),
                xt(u),
                Yt(u, "link", o),
                e.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((o = t.instance), (t.state.loading |= 4), Ol(o, r.precedence, e));
    return t.instance;
  }
  function Ol(e, t, r) {
    for (
      var o = r.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = o.length ? o[o.length - 1] : null,
        h = u,
        g = 0;
      g < o.length;
      g++
    ) {
      var B = o[g];
      if (B.dataset.precedence === t) h = B;
      else if (h !== u) break;
    }
    h
      ? h.parentNode.insertBefore(e, h.nextSibling)
      : ((t = r.nodeType === 9 ? r.head : r), t.insertBefore(e, t.firstChild));
  }
  function vf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function gf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Fl = null;
  function sx(e, t, r) {
    if (Fl === null) {
      var o = new Map(),
        u = (Fl = new Map());
      u.set(r, o);
    } else (u = Fl), (o = u.get(r)), o || ((o = new Map()), u.set(r, o));
    if (o.has(e)) return o;
    for (
      o.set(e, null), r = r.getElementsByTagName(e), u = 0;
      u < r.length;
      u++
    ) {
      var h = r[u];
      if (
        !(
          h[ze] ||
          h[he] ||
          (e === "link" && h.getAttribute("rel") === "stylesheet")
        ) &&
        h.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var g = h.getAttribute(t) || "";
        g = e + g;
        var B = o.get(g);
        B ? B.push(h) : o.set(g, [h]);
      }
    }
    return o;
  }
  function ox(e, t, r) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        r,
        t === "title" ? e.querySelector("head > title") : null,
      );
  }
  function nb(e, t, r) {
    if (r === 1 || t.itemProp != null) return !1;
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
  function lx(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function ib(e, t, r, o) {
    if (
      r.type === "stylesheet" &&
      (typeof o.media != "string" || matchMedia(o.media).matches !== !1) &&
      (r.state.loading & 4) === 0
    ) {
      if (r.instance === null) {
        var u = jr(o.href),
          h = t.querySelector(Ks(u));
        if (h) {
          (t = h._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = zl.bind(e)), t.then(e, e)),
            (r.state.loading |= 4),
            (r.instance = h),
            xt(h);
          return;
        }
        (h = t.ownerDocument || t),
          (o = ax(o)),
          (u = jn.get(u)) && vf(o, u),
          (h = h.createElement("link")),
          xt(h);
        var g = h;
        (g._p = new Promise(function (B, F) {
          (g.onload = B), (g.onerror = F);
        })),
          Yt(h, "link", o),
          (r.instance = h);
      }
      e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(r, t),
        (t = r.state.preload) &&
          (r.state.loading & 3) === 0 &&
          (e.count++,
          (r = zl.bind(e)),
          t.addEventListener("load", r),
          t.addEventListener("error", r));
    }
  }
  var Ef = 0;
  function ab(e, t) {
    return (
      e.stylesheets && e.count === 0 && Ll(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (r) {
            var o = setTimeout(function () {
              if ((e.stylesheets && Ll(e, e.stylesheets), e.unsuspend)) {
                var h = e.unsuspend;
                (e.unsuspend = null), h();
              }
            }, 6e4 + t);
            0 < e.imgBytes && Ef === 0 && (Ef = 62500 * HE());
            var u = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Ll(e, e.stylesheets), e.unsuspend))
                ) {
                  var h = e.unsuspend;
                  (e.unsuspend = null), h();
                }
              },
              (e.imgBytes > Ef ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = r),
              function () {
                (e.unsuspend = null), clearTimeout(o), clearTimeout(u);
              }
            );
          }
        : null
    );
  }
  function zl() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Ll(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Nl = null;
  function Ll(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Nl = new Map()),
        t.forEach(rb, e),
        (Nl = null),
        zl.call(e));
  }
  function rb(e, t) {
    if (!(t.state.loading & 4)) {
      var r = Nl.get(e);
      if (r) var o = r.get(null);
      else {
        (r = new Map()), Nl.set(e, r);
        for (
          var u = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            h = 0;
          h < u.length;
          h++
        ) {
          var g = u[h];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") &&
            (r.set(g.dataset.precedence, g), (o = g));
        }
        o && r.set(null, o);
      }
      (u = t.instance),
        (g = u.getAttribute("data-precedence")),
        (h = r.get(g) || o),
        h === o && r.set(null, u),
        r.set(g, u),
        this.count++,
        (o = zl.bind(this)),
        u.addEventListener("load", o),
        u.addEventListener("error", o),
        h
          ? h.parentNode.insertBefore(u, h.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(u, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Qs = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: ie,
    _currentValue2: ie,
    _threadCount: 0,
  };
  function sb(e, t, r, o, u, h, g, B, F) {
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
      (this.expirationTimes = hi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = hi(0)),
      (this.hiddenUpdates = hi(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = u),
      (this.onCaughtError = h),
      (this.onRecoverableError = g),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = F),
      (this.incompleteTransitions = new Map());
  }
  function ux(e, t, r, o, u, h, g, B, F, G, ne, re) {
    return (
      (e = new sb(e, t, r, g, F, G, ne, re, B)),
      (t = 1),
      h === !0 && (t |= 24),
      (h = En(3, null, null, t)),
      (e.current = h),
      (h.stateNode = e),
      (t = Wc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (h.memoizedState = { element: o, isDehydrated: r, cache: t }),
      n0(h),
      e
    );
  }
  function cx(e) {
    return e ? ((e = gr), e) : gr;
  }
  function fx(e, t, r, o, u, h) {
    (u = cx(u)),
      o.context === null ? (o.context = u) : (o.pendingContext = u),
      (o = aa(t)),
      (o.payload = { element: r }),
      (h = h === void 0 ? null : h),
      h !== null && (o.callback = h),
      (r = ra(e, o, t)),
      r !== null && (fn(r, e, t), _s(r, e, t));
  }
  function hx(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function bf(e, t) {
    hx(e, t), (e = e.alternate) && hx(e, t);
  }
  function dx(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ua(e, 67108864);
      t !== null && fn(t, e, 67108864), bf(e, 67108864);
    }
  }
  function px(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Dn();
      t = se(t);
      var r = Ua(e, t);
      r !== null && fn(r, e, t), bf(e, t);
    }
  }
  var Ul = !0;
  function ob(e, t, r, o) {
    var u = k.T;
    k.T = null;
    var h = te.p;
    try {
      (te.p = 2), Af(e, t, r, o);
    } finally {
      (te.p = h), (k.T = u);
    }
  }
  function lb(e, t, r, o) {
    var u = k.T;
    k.T = null;
    var h = te.p;
    try {
      (te.p = 8), Af(e, t, r, o);
    } finally {
      (te.p = h), (k.T = u);
    }
  }
  function Af(e, t, r, o) {
    if (Ul) {
      var u = Sf(o);
      if (u === null) lf(e, t, o, Hl, r), xx(e, o);
      else if (cb(u, e, t, r, o)) o.stopPropagation();
      else if ((xx(e, o), t & 4 && -1 < ub.indexOf(e))) {
        for (; u !== null; ) {
          var h = wn(u);
          if (h !== null)
            switch (h.tag) {
              case 3:
                if (((h = h.stateNode), h.current.memoizedState.isDehydrated)) {
                  var g = Qn(h.pendingLanes);
                  if (g !== 0) {
                    var B = h;
                    for (B.pendingLanes |= 2, B.entangledLanes |= 2; g; ) {
                      var F = 1 << (31 - Nt(g));
                      (B.entanglements[1] |= F), (g &= ~F);
                    }
                    vi(h), (Ze & 6) === 0 && ((El = at() + 500), Ps(0));
                  }
                }
                break;
              case 31:
              case 13:
                (B = Ua(h, 2)), B !== null && fn(B, h, 2), Al(), bf(h, 2);
            }
          if (((h = Sf(o)), h === null && lf(e, t, o, Hl, r), h === u)) break;
          u = h;
        }
        u !== null && o.stopPropagation();
      } else lf(e, t, o, null, r);
    }
  }
  function Sf(e) {
    return (e = Cc(e)), Cf(e);
  }
  var Hl = null;
  function Cf(e) {
    if (((Hl = null), (e = vn(e)), e !== null)) {
      var t = c(e);
      if (t === null) e = null;
      else {
        var r = t.tag;
        if (r === 13) {
          if (((e = f(t)), e !== null)) return e;
          e = null;
        } else if (r === 31) {
          if (((e = p(t)), e !== null)) return e;
          e = null;
        } else if (r === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Hl = e), null;
  }
  function mx(e) {
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
        switch (ui()) {
          case Tn:
            return 2;
          case Rn:
            return 8;
          case Jt:
          case nn:
            return 32;
          case Qi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Df = !1,
    xa = null,
    ya = null,
    va = null,
    $s = new Map(),
    Js = new Map(),
    ga = [],
    ub =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function xx(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        xa = null;
        break;
      case "dragenter":
      case "dragleave":
        ya = null;
        break;
      case "mouseover":
      case "mouseout":
        va = null;
        break;
      case "pointerover":
      case "pointerout":
        $s.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Js.delete(t.pointerId);
    }
  }
  function Ws(e, t, r, o, u, h) {
    return e === null || e.nativeEvent !== h
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: o,
          nativeEvent: h,
          targetContainers: [u],
        }),
        t !== null && ((t = wn(t)), t !== null && dx(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function cb(e, t, r, o, u) {
    switch (t) {
      case "focusin":
        return (xa = Ws(xa, e, t, r, o, u)), !0;
      case "dragenter":
        return (ya = Ws(ya, e, t, r, o, u)), !0;
      case "mouseover":
        return (va = Ws(va, e, t, r, o, u)), !0;
      case "pointerover":
        var h = u.pointerId;
        return $s.set(h, Ws($s.get(h) || null, e, t, r, o, u)), !0;
      case "gotpointercapture":
        return (
          (h = u.pointerId), Js.set(h, Ws(Js.get(h) || null, e, t, r, o, u)), !0
        );
    }
    return !1;
  }
  function yx(e) {
    var t = vn(e.target);
    if (t !== null) {
      var r = c(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = f(r)), t !== null)) {
            (e.blockedOn = t),
              Be(e.priority, function () {
                px(r);
              });
            return;
          }
        } else if (t === 31) {
          if (((t = p(r)), t !== null)) {
            (e.blockedOn = t),
              Be(e.priority, function () {
                px(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Vl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Sf(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        (Sc = o), r.target.dispatchEvent(o), (Sc = null);
      } else return (t = wn(r)), t !== null && dx(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function vx(e, t, r) {
    Vl(e) && r.delete(t);
  }
  function fb() {
    (Df = !1),
      xa !== null && Vl(xa) && (xa = null),
      ya !== null && Vl(ya) && (ya = null),
      va !== null && Vl(va) && (va = null),
      $s.forEach(vx),
      Js.forEach(vx);
  }
  function kl(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Df ||
        ((Df = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, fb)));
  }
  var jl = null;
  function gx(e) {
    jl !== e &&
      ((jl = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        jl === e && (jl = null);
        for (var t = 0; t < e.length; t += 3) {
          var r = e[t],
            o = e[t + 1],
            u = e[t + 2];
          if (typeof o != "function") {
            if (Cf(o || r) === null) continue;
            break;
          }
          var h = wn(r);
          h !== null &&
            (e.splice(t, 3),
            (t -= 3),
            A0(h, { pending: !0, data: u, method: r.method, action: o }, o, u));
        }
      }));
  }
  function Pr(e) {
    function t(F) {
      return kl(F, e);
    }
    xa !== null && kl(xa, e),
      ya !== null && kl(ya, e),
      va !== null && kl(va, e),
      $s.forEach(t),
      Js.forEach(t);
    for (var r = 0; r < ga.length; r++) {
      var o = ga[r];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < ga.length && ((r = ga[0]), r.blockedOn === null); )
      yx(r), r.blockedOn === null && ga.shift();
    if (((r = (e.ownerDocument || e).$$reactFormReplay), r != null))
      for (o = 0; o < r.length; o += 3) {
        var u = r[o],
          h = r[o + 1],
          g = u[fe] || null;
        if (typeof h == "function") g || gx(r);
        else if (g) {
          var B = null;
          if (h && h.hasAttribute("formAction")) {
            if (((u = h), (g = h[fe] || null))) B = g.formAction;
            else if (Cf(u) !== null) continue;
          } else B = g.action;
          typeof B == "function" ? (r[o + 1] = B) : (r.splice(o, 3), (o -= 3)),
            gx(r);
        }
      }
  }
  function Ex() {
    function e(h) {
      h.canIntercept &&
        h.info === "react-transition" &&
        h.intercept({
          handler: function () {
            return new Promise(function (g) {
              return (u = g);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      u !== null && (u(), (u = null)), o || setTimeout(r, 20);
    }
    function r() {
      if (!o && !navigation.transition) {
        var h = navigation.currentEntry;
        h &&
          h.url != null &&
          navigation.navigate(h.url, {
            state: h.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var o = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(r, 100),
        function () {
          (o = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null));
        }
      );
    }
  }
  function Bf(e) {
    this._internalRoot = e;
  }
  (ql.prototype.render = Bf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var r = t.current,
        o = Dn();
      fx(r, o, e, t, null, null);
    }),
    (ql.prototype.unmount = Bf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          fx(e.current, 2, null, e, null, null), Al(), (t[ge] = null);
        }
      });
  function ql(e) {
    this._internalRoot = e;
  }
  ql.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ae();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < ga.length && t !== 0 && t < ga[r].priority; r++);
      ga.splice(r, 0, e), r === 0 && yx(e);
    }
  };
  var bx = i.version;
  if (bx !== "19.2.0") throw Error(s(527, bx, "19.2.0"));
  te.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(s(188))
        : ((e = Object.keys(e).join(",")), Error(s(268, e)));
    return (
      (e = d(t)),
      (e = e !== null ? x(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var hb = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: k,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pl.isDisabled && Pl.supportsFiber)
      try {
        (Kt = Pl.inject(hb)), (Ot = Pl);
      } catch (e) {}
  }
  return (
    (eo.createRoot = function (e, t) {
      if (!l(e)) throw Error(s(299));
      var r = !1,
        o = "",
        u = T1,
        h = R1,
        g = w1;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (h = t.onCaughtError),
          t.onRecoverableError !== void 0 && (g = t.onRecoverableError)),
        (t = ux(e, 1, !1, null, null, r, o, null, u, h, g, Ex)),
        (e[ge] = t.current),
        of(e),
        new Bf(t)
      );
    }),
    (eo.hydrateRoot = function (e, t, r) {
      if (!l(e)) throw Error(s(299));
      var o = !1,
        u = "",
        h = T1,
        g = R1,
        B = w1,
        F = null;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (o = !0),
          r.identifierPrefix !== void 0 && (u = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (h = r.onUncaughtError),
          r.onCaughtError !== void 0 && (g = r.onCaughtError),
          r.onRecoverableError !== void 0 && (B = r.onRecoverableError),
          r.formState !== void 0 && (F = r.formState)),
        (t = ux(e, 1, !0, t, r != null ? r : null, o, u, F, h, g, B, Ex)),
        (t.context = cx(null)),
        (r = t.current),
        (o = Dn()),
        (o = se(o)),
        (u = aa(o)),
        (u.callback = null),
        ra(r, u, o),
        (r = o),
        (t.current.lanes = r),
        di(t, r),
        vi(t),
        (e[ge] = t.current),
        of(e),
        new ql(t)
      );
    }),
    (eo.version = "19.2.0"),
    eo
  );
}
var Nx;
function Tb() {
  if (Nx) return Of.exports;
  Nx = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), (Of.exports = _b()), Of.exports;
}
var Rb = Tb();
const h7 = ic(Rb);
var Sg = Ag();
const wb = ic(Sg),
  Mb = bg({ __proto__: null, default: wb }, [Sg]);
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function dt() {
  return (
    (dt = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var i = 1; i < arguments.length; i++) {
            var a = arguments[i];
            for (var s in a)
              Object.prototype.hasOwnProperty.call(a, s) && (n[s] = a[s]);
          }
          return n;
        }),
    dt.apply(this, arguments)
  );
}
var Tt;
(function (n) {
  (n.Pop = "POP"), (n.Push = "PUSH"), (n.Replace = "REPLACE");
})(Tt || (Tt = {}));
const Lx = "popstate";
function Ob(n) {
  n === void 0 && (n = {});
  function i(s, l) {
    let { pathname: c, search: f, hash: p } = s.location;
    return xo(
      "",
      { pathname: c, search: f, hash: p },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
    );
  }
  function a(s, l) {
    return typeof l == "string" ? l : Co(l);
  }
  return zb(i, a, null, n);
}
function Pe(n, i) {
  if (n === !1 || n === null || typeof n == "undefined") throw new Error(i);
}
function Ir(n, i) {
  if (!n) {
    typeof console != "undefined" && console.warn(i);
    try {
      throw new Error(i);
    } catch (a) {}
  }
}
function Fb() {
  return Math.random().toString(36).substr(2, 8);
}
function Ux(n, i) {
  return { usr: n.state, key: n.key, idx: i };
}
function xo(n, i, a, s) {
  return (
    a === void 0 && (a = null),
    dt(
      { pathname: typeof n == "string" ? n : n.pathname, search: "", hash: "" },
      typeof i == "string" ? Ta(i) : i,
      { state: a, key: (i && i.key) || s || Fb() },
    )
  );
}
function Co(n) {
  let { pathname: i = "/", search: a = "", hash: s = "" } = n;
  return (
    a && a !== "?" && (i += a.charAt(0) === "?" ? a : "?" + a),
    s && s !== "#" && (i += s.charAt(0) === "#" ? s : "#" + s),
    i
  );
}
function Ta(n) {
  let i = {};
  if (n) {
    let a = n.indexOf("#");
    a >= 0 && ((i.hash = n.substr(a)), (n = n.substr(0, a)));
    let s = n.indexOf("?");
    s >= 0 && ((i.search = n.substr(s)), (n = n.substr(0, s))),
      n && (i.pathname = n);
  }
  return i;
}
function zb(n, i, a, s) {
  s === void 0 && (s = {});
  let { window: l = document.defaultView, v5Compat: c = !1 } = s,
    f = l.history,
    p = Tt.Pop,
    m = null,
    d = x();
  d == null && ((d = 0), f.replaceState(dt({}, f.state, { idx: d }), ""));
  function x() {
    return (f.state || { idx: null }).idx;
  }
  function y() {
    p = Tt.Pop;
    let A = x(),
      w = A == null ? null : A - d;
    (d = A), m && m({ action: p, location: S.location, delta: w });
  }
  function v(A, w) {
    p = Tt.Push;
    let C = xo(S.location, A, w);
    d = x() + 1;
    let D = Ux(C, d),
      R = S.createHref(C);
    try {
      f.pushState(D, "", R);
    } catch (M) {
      if (M instanceof DOMException && M.name === "DataCloneError") throw M;
      l.location.assign(R);
    }
    c && m && m({ action: p, location: S.location, delta: 1 });
  }
  function E(A, w) {
    p = Tt.Replace;
    let C = xo(S.location, A, w);
    d = x();
    let D = Ux(C, d),
      R = S.createHref(C);
    f.replaceState(D, "", R),
      c && m && m({ action: p, location: S.location, delta: 0 });
  }
  function b(A) {
    let w = l.location.origin !== "null" ? l.location.origin : l.location.href,
      C = typeof A == "string" ? A : Co(A);
    return (
      (C = C.replace(/ $/, "%20")),
      Pe(
        w,
        "No window.location.(origin|href) available to create URL for href: " +
          C,
      ),
      new URL(C, w)
    );
  }
  let S = {
    get action() {
      return p;
    },
    get location() {
      return n(l, f);
    },
    listen(A) {
      if (m) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Lx, y),
        (m = A),
        () => {
          l.removeEventListener(Lx, y), (m = null);
        }
      );
    },
    createHref(A) {
      return i(l, A);
    },
    createURL: b,
    encodeLocation(A) {
      let w = b(A);
      return { pathname: w.pathname, search: w.search, hash: w.hash };
    },
    push: v,
    replace: E,
    go(A) {
      return f.go(A);
    },
  };
  return S;
}
var Ie;
(function (n) {
  (n.data = "data"),
    (n.deferred = "deferred"),
    (n.redirect = "redirect"),
    (n.error = "error");
})(Ie || (Ie = {}));
const Nb = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Lb(n) {
  return n.index === !0;
}
function Ku(n, i, a, s) {
  return (
    a === void 0 && (a = []),
    s === void 0 && (s = {}),
    n.map((l, c) => {
      let f = [...a, String(c)],
        p = typeof l.id == "string" ? l.id : f.join("-");
      if (
        (Pe(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route",
        ),
        Pe(
          !s[p],
          'Found a route id collision on id "' +
            p +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        Lb(l))
      ) {
        let m = dt({}, l, i(l), { id: p });
        return (s[p] = m), m;
      } else {
        let m = dt({}, l, i(l), { id: p, children: void 0 });
        return (
          (s[p] = m), l.children && (m.children = Ku(l.children, i, f, s)), m
        );
      }
    })
  );
}
function Ia(n, i, a) {
  return a === void 0 && (a = "/"), Il(n, i, a, !1);
}
function Il(n, i, a, s) {
  let l = typeof i == "string" ? Ta(i) : i,
    c = Do(l.pathname || "/", a);
  if (c == null) return null;
  let f = Cg(n);
  Hb(f);
  let p = null;
  for (let m = 0; p == null && m < f.length; ++m) {
    let d = Qb(c);
    p = Kb(f[m], d, s);
  }
  return p;
}
function Ub(n, i) {
  let { route: a, pathname: s, params: l } = n;
  return { id: a.id, pathname: s, params: l, data: i[a.id], handle: a.handle };
}
function Cg(n, i, a, s) {
  i === void 0 && (i = []), a === void 0 && (a = []), s === void 0 && (s = "");
  let l = (c, f, p) => {
    let m = {
      relativePath: p === void 0 ? c.path || "" : p,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: f,
      route: c,
    };
    m.relativePath.startsWith("/") &&
      (Pe(
        m.relativePath.startsWith(s),
        'Absolute route path "' +
          m.relativePath +
          '" nested under path ' +
          ('"' + s + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (m.relativePath = m.relativePath.slice(s.length)));
    let d = Ca([s, m.relativePath]),
      x = a.concat(m);
    c.children &&
      c.children.length > 0 &&
      (Pe(
        c.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + d + '".'),
      ),
      Cg(c.children, i, x, d)),
      !(c.path == null && !c.index) &&
        i.push({ path: d, score: Xb(d, c.index), routesMeta: x });
  };
  return (
    n.forEach((c, f) => {
      var p;
      if (c.path === "" || !((p = c.path) != null && p.includes("?"))) l(c, f);
      else for (let m of Dg(c.path)) l(c, f, m);
    }),
    i
  );
}
function Dg(n) {
  let i = n.split("/");
  if (i.length === 0) return [];
  let [a, ...s] = i,
    l = a.endsWith("?"),
    c = a.replace(/\?$/, "");
  if (s.length === 0) return l ? [c, ""] : [c];
  let f = Dg(s.join("/")),
    p = [];
  return (
    p.push(...f.map((m) => (m === "" ? c : [c, m].join("/")))),
    l && p.push(...f),
    p.map((m) => (n.startsWith("/") && m === "" ? "/" : m))
  );
}
function Hb(n) {
  n.sort((i, a) =>
    i.score !== a.score
      ? a.score - i.score
      : Gb(
          i.routesMeta.map((s) => s.childrenIndex),
          a.routesMeta.map((s) => s.childrenIndex),
        ),
  );
}
const Vb = /^:[\w-]+$/,
  kb = 3,
  jb = 2,
  qb = 1,
  Pb = 10,
  Yb = -2,
  Hx = (n) => n === "*";
function Xb(n, i) {
  let a = n.split("/"),
    s = a.length;
  return (
    a.some(Hx) && (s += Yb),
    i && (s += jb),
    a
      .filter((l) => !Hx(l))
      .reduce((l, c) => l + (Vb.test(c) ? kb : c === "" ? qb : Pb), s)
  );
}
function Gb(n, i) {
  return n.length === i.length && n.slice(0, -1).every((s, l) => s === i[l])
    ? n[n.length - 1] - i[i.length - 1]
    : 0;
}
function Kb(n, i, a) {
  a === void 0 && (a = !1);
  let { routesMeta: s } = n,
    l = {},
    c = "/",
    f = [];
  for (let p = 0; p < s.length; ++p) {
    let m = s[p],
      d = p === s.length - 1,
      x = c === "/" ? i : i.slice(c.length) || "/",
      y = Vx(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: d },
        x,
      ),
      v = m.route;
    if (
      (!y &&
        d &&
        a &&
        !s[s.length - 1].route.index &&
        (y = Vx(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          x,
        )),
      !y)
    )
      return null;
    Object.assign(l, y.params),
      f.push({
        params: l,
        pathname: Ca([c, y.pathname]),
        pathnameBase: Wb(Ca([c, y.pathnameBase])),
        route: v,
      }),
      y.pathnameBase !== "/" && (c = Ca([c, y.pathnameBase]));
  }
  return f;
}
function Vx(n, i) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [a, s] = Zb(n.path, n.caseSensitive, n.end),
    l = i.match(a);
  if (!l) return null;
  let c = l[0],
    f = c.replace(/(.)\/+$/, "$1"),
    p = l.slice(1);
  return {
    params: s.reduce((d, x, y) => {
      let { paramName: v, isOptional: E } = x;
      if (v === "*") {
        let S = p[y] || "";
        f = c.slice(0, c.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const b = p[y];
      return (
        E && !b ? (d[v] = void 0) : (d[v] = (b || "").replace(/%2F/g, "/")), d
      );
    }, {}),
    pathname: c,
    pathnameBase: f,
    pattern: n,
  };
}
function Zb(n, i, a) {
  i === void 0 && (i = !1),
    a === void 0 && (a = !0),
    Ir(
      n === "*" || !n.endsWith("*") || n.endsWith("/*"),
      'Route path "' +
        n +
        '" will be treated as if it were ' +
        ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + n.replace(/\*$/, "/*") + '".'),
    );
  let s = [],
    l =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (f, p, m) => (
            s.push({ paramName: p, isOptional: m != null }),
            m ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    n.endsWith("*")
      ? (s.push({ paramName: "*" }),
        (l += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
        ? (l += "\\/*$")
        : n !== "" && n !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, i ? void 0 : "i"), s]
  );
}
function Qb(n) {
  try {
    return n
      .split("/")
      .map((i) => decodeURIComponent(i).replace(/\//g, "%2F"))
      .join("/");
  } catch (i) {
    return (
      Ir(
        !1,
        'The URL path "' +
          n +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + i + ")."),
      ),
      n
    );
  }
}
function Do(n, i) {
  if (i === "/") return n;
  if (!n.toLowerCase().startsWith(i.toLowerCase())) return null;
  let a = i.endsWith("/") ? i.length - 1 : i.length,
    s = n.charAt(a);
  return s && s !== "/" ? null : n.slice(a) || "/";
}
function $b(n, i) {
  i === void 0 && (i = "/");
  let {
    pathname: a,
    search: s = "",
    hash: l = "",
  } = typeof n == "string" ? Ta(n) : n;
  return {
    pathname: a ? (a.startsWith("/") ? a : Jb(a, i)) : i,
    search: Ib(s),
    hash: e3(l),
  };
}
function Jb(n, i) {
  let a = i.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((l) => {
      l === ".." ? a.length > 1 && a.pop() : l !== "." && a.push(l);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function Lf(n, i, a, s) {
  return (
    "Cannot include a '" +
    n +
    "' character in a manually specified " +
    ("`to." +
      i +
      "` field [" +
      JSON.stringify(s) +
      "].  Please separate it out to the ") +
    ("`to." + a + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Bg(n) {
  return n.filter(
    (i, a) => a === 0 || (i.route.path && i.route.path.length > 0),
  );
}
function _g(n, i) {
  let a = Bg(n);
  return i
    ? a.map((s, l) => (l === a.length - 1 ? s.pathname : s.pathnameBase))
    : a.map((s) => s.pathnameBase);
}
function Tg(n, i, a, s) {
  s === void 0 && (s = !1);
  let l;
  typeof n == "string"
    ? (l = Ta(n))
    : ((l = dt({}, n)),
      Pe(
        !l.pathname || !l.pathname.includes("?"),
        Lf("?", "pathname", "search", l),
      ),
      Pe(
        !l.pathname || !l.pathname.includes("#"),
        Lf("#", "pathname", "hash", l),
      ),
      Pe(!l.search || !l.search.includes("#"), Lf("#", "search", "hash", l)));
  let c = n === "" || l.pathname === "",
    f = c ? "/" : l.pathname,
    p;
  if (f == null) p = a;
  else {
    let y = i.length - 1;
    if (!s && f.startsWith("..")) {
      let v = f.split("/");
      for (; v[0] === ".."; ) v.shift(), (y -= 1);
      l.pathname = v.join("/");
    }
    p = y >= 0 ? i[y] : "/";
  }
  let m = $b(l, p),
    d = f && f !== "/" && f.endsWith("/"),
    x = (c || f === ".") && a.endsWith("/");
  return !m.pathname.endsWith("/") && (d || x) && (m.pathname += "/"), m;
}
const Ca = (n) => n.join("/").replace(/\/\/+/g, "/"),
  Wb = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Ib = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  e3 = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n);
class Zu {
  constructor(i, a, s, l) {
    l === void 0 && (l = !1),
      (this.status = i),
      (this.statusText = a || ""),
      (this.internal = l),
      s instanceof Error
        ? ((this.data = s.toString()), (this.error = s))
        : (this.data = s);
  }
}
function yo(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
const Rg = ["post", "put", "patch", "delete"],
  t3 = new Set(Rg),
  n3 = ["get", ...Rg],
  i3 = new Set(n3),
  a3 = new Set([301, 302, 303, 307, 308]),
  r3 = new Set([307, 308]),
  Uf = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  s3 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  to = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  qh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  o3 = (n) => ({ hasErrorBoundary: !!n.hasErrorBoundary }),
  wg = "remix-router-transitions";
function l3(n) {
  const i = n.window
      ? n.window
      : typeof window != "undefined"
        ? window
        : void 0,
    a =
      typeof i != "undefined" &&
      typeof i.document != "undefined" &&
      typeof i.document.createElement != "undefined",
    s = !a;
  Pe(
    n.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let l;
  if (n.mapRouteProperties) l = n.mapRouteProperties;
  else if (n.detectErrorBoundary) {
    let U = n.detectErrorBoundary;
    l = (V) => ({ hasErrorBoundary: U(V) });
  } else l = o3;
  let c = {},
    f = Ku(n.routes, l, void 0, c),
    p,
    m = n.basename || "/",
    d = n.dataStrategy || h3,
    x = n.patchRoutesOnNavigation,
    y = dt(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      n.future,
    ),
    v = null,
    E = new Set(),
    b = null,
    S = null,
    A = null,
    w = n.hydrationData != null,
    C = Ia(f, n.history.location, m),
    D = !1,
    R = null;
  if (C == null && !x) {
    let U = dn(404, { pathname: n.history.location.pathname }),
      { matches: V, route: K } = $x(f);
    (C = V), (R = { [K.id]: U });
  }
  C &&
    !n.hydrationData &&
    Bi(C, f, n.history.location.pathname).active &&
    (C = null);
  let M;
  if (C)
    if (C.some((U) => U.route.lazy)) M = !1;
    else if (!C.some((U) => U.route.loader)) M = !0;
    else if (y.v7_partialHydration) {
      let U = n.hydrationData ? n.hydrationData.loaderData : null,
        V = n.hydrationData ? n.hydrationData.errors : null;
      if (V) {
        let K = C.findIndex((se) => V[se.route.id] !== void 0);
        M = C.slice(0, K + 1).every((se) => !lh(se.route, U, V));
      } else M = C.every((K) => !lh(K.route, U, V));
    } else M = n.hydrationData != null;
  else if (((M = !1), (C = []), y.v7_partialHydration)) {
    let U = Bi(null, f, n.history.location.pathname);
    U.active && U.matches && ((D = !0), (C = U.matches));
  }
  let L,
    _ = {
      historyAction: n.history.action,
      location: n.history.location,
      matches: C,
      initialized: M,
      navigation: Uf,
      restoreScrollPosition: n.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (n.hydrationData && n.hydrationData.loaderData) || {},
      actionData: (n.hydrationData && n.hydrationData.actionData) || null,
      errors: (n.hydrationData && n.hydrationData.errors) || R,
      fetchers: new Map(),
      blockers: new Map(),
    },
    O = Tt.Pop,
    $ = !1,
    z,
    j = !1,
    Q = new Map(),
    ee = null,
    oe = !1,
    de = !1,
    k = [],
    te = new Set(),
    ie = new Map(),
    me = 0,
    xe = -1,
    T = new Map(),
    N = new Set(),
    P = new Map(),
    Y = new Map(),
    ue = new Set(),
    pe = new Map(),
    Ce = new Map(),
    be;
  function Qe() {
    if (
      ((v = n.history.listen((U) => {
        let { action: V, location: K, delta: se } = U;
        if (be) {
          be(), (be = void 0);
          return;
        }
        Ir(
          Ce.size === 0 || se != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let ce = ci({
          currentLocation: _.location,
          nextLocation: K,
          historyAction: V,
        });
        if (ce && se != null) {
          let Ae = new Promise((Be) => {
            be = Be;
          });
          n.history.go(se * -1),
            $i(ce, {
              state: "blocked",
              location: K,
              proceed() {
                $i(ce, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: K,
                }),
                  Ae.then(() => n.history.go(se));
              },
              reset() {
                let Be = new Map(_.blockers);
                Be.set(ce, to), st({ blockers: Be });
              },
            });
          return;
        }
        return Ht(V, K);
      })),
      a)
    ) {
      B3(i, Q);
      let U = () => _3(i, Q);
      i.addEventListener("pagehide", U),
        (ee = () => i.removeEventListener("pagehide", U));
    }
    return _.initialized || Ht(Tt.Pop, _.location, { initialHydration: !0 }), L;
  }
  function tn() {
    v && v(),
      ee && ee(),
      E.clear(),
      z && z.abort(),
      _.fetchers.forEach((U, V) => yn(V)),
      _.blockers.forEach((U, V) => Ma(V));
  }
  function ri(U) {
    return E.add(U), () => E.delete(U);
  }
  function st(U, V) {
    V === void 0 && (V = {}), (_ = dt({}, _, U));
    let K = [],
      se = [];
    y.v7_fetcherPersist &&
      _.fetchers.forEach((ce, Ae) => {
        ce.state === "idle" && (ue.has(Ae) ? se.push(Ae) : K.push(Ae));
      }),
      ue.forEach((ce) => {
        !_.fetchers.has(ce) && !ie.has(ce) && se.push(ce);
      }),
      [...E].forEach((ce) =>
        ce(_, {
          deletedFetchers: se,
          viewTransitionOpts: V.viewTransitionOpts,
          flushSync: V.flushSync === !0,
        }),
      ),
      y.v7_fetcherPersist
        ? (K.forEach((ce) => _.fetchers.delete(ce)), se.forEach((ce) => yn(ce)))
        : se.forEach((ce) => ue.delete(ce));
  }
  function Et(U, V, K) {
    var se, ce;
    let { flushSync: Ae } = K === void 0 ? {} : K,
      Be =
        _.actionData != null &&
        _.navigation.formMethod != null &&
        ni(_.navigation.formMethod) &&
        _.navigation.state === "loading" &&
        ((se = U.state) == null ? void 0 : se._isRedirect) !== !0,
      ye;
    V.actionData
      ? Object.keys(V.actionData).length > 0
        ? (ye = V.actionData)
        : (ye = null)
      : Be
        ? (ye = _.actionData)
        : (ye = null);
    let he = V.loaderData
        ? Zx(_.loaderData, V.loaderData, V.matches || [], V.errors)
        : _.loaderData,
      fe = _.blockers;
    fe.size > 0 && ((fe = new Map(fe)), fe.forEach((He, Ft) => fe.set(Ft, to)));
    let ge =
      $ === !0 ||
      (_.navigation.formMethod != null &&
        ni(_.navigation.formMethod) &&
        ((ce = U.state) == null ? void 0 : ce._isRedirect) !== !0);
    p && ((f = p), (p = void 0)),
      oe ||
        O === Tt.Pop ||
        (O === Tt.Push
          ? n.history.push(U, U.state)
          : O === Tt.Replace && n.history.replace(U, U.state));
    let Te;
    if (O === Tt.Pop) {
      let He = Q.get(_.location.pathname);
      He && He.has(U.pathname)
        ? (Te = { currentLocation: _.location, nextLocation: U })
        : Q.has(U.pathname) &&
          (Te = { currentLocation: U, nextLocation: _.location });
    } else if (j) {
      let He = Q.get(_.location.pathname);
      He
        ? He.add(U.pathname)
        : ((He = new Set([U.pathname])), Q.set(_.location.pathname, He)),
        (Te = { currentLocation: _.location, nextLocation: U });
    }
    st(
      dt({}, V, {
        actionData: ye,
        loaderData: he,
        historyAction: O,
        location: U,
        initialized: !0,
        navigation: Uf,
        revalidation: "idle",
        restoreScrollPosition: Oa(U, V.matches || _.matches),
        preventScrollReset: ge,
        blockers: fe,
      }),
      { viewTransitionOpts: Te, flushSync: Ae === !0 },
    ),
      (O = Tt.Pop),
      ($ = !1),
      (j = !1),
      (oe = !1),
      (de = !1),
      (k = []);
  }
  async function ft(U, V) {
    if (typeof U == "number") {
      n.history.go(U);
      return;
    }
    let K = oh(
        _.location,
        _.matches,
        m,
        y.v7_prependBasename,
        U,
        y.v7_relativeSplatPath,
        V == null ? void 0 : V.fromRouteId,
        V == null ? void 0 : V.relative,
      ),
      {
        path: se,
        submission: ce,
        error: Ae,
      } = kx(y.v7_normalizeFormMethod, !1, K, V),
      Be = _.location,
      ye = xo(_.location, se, V && V.state);
    ye = dt({}, ye, n.history.encodeLocation(ye));
    let he = V && V.replace != null ? V.replace : void 0,
      fe = Tt.Push;
    he === !0
      ? (fe = Tt.Replace)
      : he === !1 ||
        (ce != null &&
          ni(ce.formMethod) &&
          ce.formAction === _.location.pathname + _.location.search &&
          (fe = Tt.Replace));
    let ge =
        V && "preventScrollReset" in V ? V.preventScrollReset === !0 : void 0,
      Te = (V && V.flushSync) === !0,
      He = ci({ currentLocation: Be, nextLocation: ye, historyAction: fe });
    if (He) {
      $i(He, {
        state: "blocked",
        location: ye,
        proceed() {
          $i(He, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: ye,
          }),
            ft(U, V);
        },
        reset() {
          let Ft = new Map(_.blockers);
          Ft.set(He, to), st({ blockers: Ft });
        },
      });
      return;
    }
    return await Ht(fe, ye, {
      submission: ce,
      pendingError: Ae,
      preventScrollReset: ge,
      replace: V && V.replace,
      enableViewTransition: V && V.viewTransition,
      flushSync: Te,
    });
  }
  function si() {
    if (
      (Rn(),
      st({ revalidation: "loading" }),
      _.navigation.state !== "submitting")
    ) {
      if (_.navigation.state === "idle") {
        Ht(_.historyAction, _.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Ht(O || _.historyAction, _.navigation.location, {
        overrideNavigation: _.navigation,
        enableViewTransition: j === !0,
      });
    }
  }
  async function Ht(U, V, K) {
    z && z.abort(),
      (z = null),
      (O = U),
      (oe = (K && K.startUninterruptedRevalidation) === !0),
      Di(_.location, _.matches),
      ($ = (K && K.preventScrollReset) === !0),
      (j = (K && K.enableViewTransition) === !0);
    let se = p || f,
      ce = K && K.overrideNavigation,
      Ae =
        K != null &&
        K.initialHydration &&
        _.matches &&
        _.matches.length > 0 &&
        !D
          ? _.matches
          : Ia(se, V, m),
      Be = (K && K.flushSync) === !0;
    if (
      Ae &&
      _.initialized &&
      !de &&
      v3(_.location, V) &&
      !(K && K.submission && ni(K.submission.formMethod))
    ) {
      Et(V, { matches: Ae }, { flushSync: Be });
      return;
    }
    let ye = Bi(Ae, se, V.pathname);
    if ((ye.active && ye.matches && (Ae = ye.matches), !Ae)) {
      let { error: $e, notFoundMatches: ze, route: rt } = fi(V.pathname);
      Et(
        V,
        { matches: ze, loaderData: {}, errors: { [rt.id]: $e } },
        { flushSync: Be },
      );
      return;
    }
    z = new AbortController();
    let he = Xr(n.history, V, z.signal, K && K.submission),
      fe;
    if (K && K.pendingError)
      fe = [er(Ae).route.id, { type: Ie.error, error: K.pendingError }];
    else if (K && K.submission && ni(K.submission.formMethod)) {
      let $e = await Zi(he, V, K.submission, Ae, ye.active, {
        replace: K.replace,
        flushSync: Be,
      });
      if ($e.shortCircuited) return;
      if ($e.pendingActionResult) {
        let [ze, rt] = $e.pendingActionResult;
        if (Bn(rt) && yo(rt.error) && rt.error.status === 404) {
          (z = null),
            Et(V, {
              matches: $e.matches,
              loaderData: {},
              errors: { [ze]: rt.error },
            });
          return;
        }
      }
      (Ae = $e.matches || Ae),
        (fe = $e.pendingActionResult),
        (ce = Hf(V, K.submission)),
        (Be = !1),
        (ye.active = !1),
        (he = Xr(n.history, he.url, he.signal));
    }
    let {
      shortCircuited: ge,
      matches: Te,
      loaderData: He,
      errors: Ft,
    } = await oi(
      he,
      V,
      Ae,
      ye.active,
      ce,
      K && K.submission,
      K && K.fetcherSubmission,
      K && K.replace,
      K && K.initialHydration === !0,
      Be,
      fe,
    );
    ge ||
      ((z = null),
      Et(V, dt({ matches: Te || Ae }, Qx(fe), { loaderData: He, errors: Ft })));
  }
  async function Zi(U, V, K, se, ce, Ae) {
    Ae === void 0 && (Ae = {}), Rn();
    let Be = C3(V, K);
    if ((st({ navigation: Be }, { flushSync: Ae.flushSync === !0 }), ce)) {
      let fe = await hi(se, V.pathname, U.signal);
      if (fe.type === "aborted") return { shortCircuited: !0 };
      if (fe.type === "error") {
        let ge = er(fe.partialMatches).route.id;
        return {
          matches: fe.partialMatches,
          pendingActionResult: [ge, { type: Ie.error, error: fe.error }],
        };
      } else if (fe.matches) se = fe.matches;
      else {
        let { notFoundMatches: ge, error: Te, route: He } = fi(V.pathname);
        return {
          matches: ge,
          pendingActionResult: [He.id, { type: Ie.error, error: Te }],
        };
      }
    }
    let ye,
      he = oo(se, V);
    if (!he.route.action && !he.route.lazy)
      ye = {
        type: Ie.error,
        error: dn(405, {
          method: U.method,
          pathname: V.pathname,
          routeId: he.route.id,
        }),
      };
    else if (
      ((ye = (await ui("action", _, U, [he], se, null))[he.route.id]),
      U.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (tr(ye)) {
      let fe;
      return (
        Ae && Ae.replace != null
          ? (fe = Ae.replace)
          : (fe =
              Xx(ye.response.headers.get("Location"), new URL(U.url), m) ===
              _.location.pathname + _.location.search),
        await at(U, ye, !0, { submission: K, replace: fe }),
        { shortCircuited: !0 }
      );
    }
    if (Sa(ye)) throw dn(400, { type: "defer-action" });
    if (Bn(ye)) {
      let fe = er(se, he.route.id);
      return (
        (Ae && Ae.replace) !== !0 && (O = Tt.Push),
        { matches: se, pendingActionResult: [fe.route.id, ye] }
      );
    }
    return { matches: se, pendingActionResult: [he.route.id, ye] };
  }
  async function oi(U, V, K, se, ce, Ae, Be, ye, he, fe, ge) {
    let Te = ce || Hf(V, Ae),
      He = Ae || Be || Wx(Te),
      Ft = !oe && (!y.v7_partialHydration || !he);
    if (se) {
      if (Ft) {
        let ot = li(ge);
        st(dt({ navigation: Te }, ot !== void 0 ? { actionData: ot } : {}), {
          flushSync: fe,
        });
      }
      let Xe = await hi(K, V.pathname, U.signal);
      if (Xe.type === "aborted") return { shortCircuited: !0 };
      if (Xe.type === "error") {
        let ot = er(Xe.partialMatches).route.id;
        return {
          matches: Xe.partialMatches,
          loaderData: {},
          errors: { [ot]: Xe.error },
        };
      } else if (Xe.matches) K = Xe.matches;
      else {
        let { error: ot, notFoundMatches: _i, route: Fa } = fi(V.pathname);
        return { matches: _i, loaderData: {}, errors: { [Fa.id]: ot } };
      }
    }
    let $e = p || f,
      [ze, rt] = qx(
        n.history,
        _,
        K,
        He,
        V,
        y.v7_partialHydration && he === !0,
        y.v7_skipActionErrorRevalidation,
        de,
        k,
        te,
        ue,
        P,
        N,
        $e,
        m,
        ge,
      );
    if (
      (Zn(
        (Xe) =>
          !(K && K.some((ot) => ot.route.id === Xe)) ||
          (ze && ze.some((ot) => ot.route.id === Xe)),
      ),
      (xe = ++me),
      ze.length === 0 && rt.length === 0)
    ) {
      let Xe = an();
      return (
        Et(
          V,
          dt(
            {
              matches: K,
              loaderData: {},
              errors: ge && Bn(ge[1]) ? { [ge[0]]: ge[1].error } : null,
            },
            Qx(ge),
            Xe ? { fetchers: new Map(_.fetchers) } : {},
          ),
          { flushSync: fe },
        ),
        { shortCircuited: !0 }
      );
    }
    if (Ft) {
      let Xe = {};
      if (!se) {
        Xe.navigation = Te;
        let ot = li(ge);
        ot !== void 0 && (Xe.actionData = ot);
      }
      rt.length > 0 && (Xe.fetchers = Kn(rt)), st(Xe, { flushSync: fe });
    }
    rt.forEach((Xe) => {
      Kt(Xe.key), Xe.controller && ie.set(Xe.key, Xe.controller);
    });
    let vn = () => rt.forEach((Xe) => Kt(Xe.key));
    z && z.signal.addEventListener("abort", vn);
    let { loaderResults: wn, fetcherResults: Wt } = await Tn(_, K, ze, rt, U);
    if (U.signal.aborted) return { shortCircuited: !0 };
    z && z.signal.removeEventListener("abort", vn),
      rt.forEach((Xe) => ie.delete(Xe.key));
    let kt = Xl(wn);
    if (kt)
      return (
        await at(U, kt.result, !0, { replace: ye }), { shortCircuited: !0 }
      );
    if (((kt = Xl(Wt)), kt))
      return (
        N.add(kt.key),
        await at(U, kt.result, !0, { replace: ye }),
        { shortCircuited: !0 }
      );
    let { loaderData: xt, errors: Ji } = Kx(_, K, wn, ge, rt, Wt, pe);
    pe.forEach((Xe, ot) => {
      Xe.subscribe((_i) => {
        (_i || Xe.done) && pe.delete(ot);
      });
    }),
      y.v7_partialHydration && he && _.errors && (Ji = dt({}, _.errors, Ji));
    let pi = an(),
      Mn = Nt(xe),
      $n = pi || Mn || rt.length > 0;
    return dt(
      { matches: K, loaderData: xt, errors: Ji },
      $n ? { fetchers: new Map(_.fetchers) } : {},
    );
  }
  function li(U) {
    if (U && !Bn(U[1])) return { [U[0]]: U[1].data };
    if (_.actionData)
      return Object.keys(_.actionData).length === 0 ? null : _.actionData;
  }
  function Kn(U) {
    return (
      U.forEach((V) => {
        let K = _.fetchers.get(V.key),
          se = no(void 0, K ? K.data : void 0);
        _.fetchers.set(V.key, se);
      }),
      new Map(_.fetchers)
    );
  }
  function Vt(U, V, K, se) {
    if (s)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    Kt(U);
    let ce = (se && se.flushSync) === !0,
      Ae = p || f,
      Be = oh(
        _.location,
        _.matches,
        m,
        y.v7_prependBasename,
        K,
        y.v7_relativeSplatPath,
        V,
        se == null ? void 0 : se.relative,
      ),
      ye = Ia(Ae, Be, m),
      he = Bi(ye, Ae, Be);
    if ((he.active && he.matches && (ye = he.matches), !ye)) {
      nn(U, V, dn(404, { pathname: Be }), { flushSync: ce });
      return;
    }
    let {
      path: fe,
      submission: ge,
      error: Te,
    } = kx(y.v7_normalizeFormMethod, !0, Be, se);
    if (Te) {
      nn(U, V, Te, { flushSync: ce });
      return;
    }
    let He = oo(ye, fe),
      Ft = (se && se.preventScrollReset) === !0;
    if (ge && ni(ge.formMethod)) {
      Gt(U, V, fe, He, ye, he.active, ce, Ft, ge);
      return;
    }
    P.set(U, { routeId: V, path: fe }),
      _n(U, V, fe, He, ye, he.active, ce, Ft, ge);
  }
  async function Gt(U, V, K, se, ce, Ae, Be, ye, he) {
    Rn(), P.delete(U);
    function fe(lt) {
      if (!lt.route.action && !lt.route.lazy) {
        let Jn = dn(405, { method: he.formMethod, pathname: K, routeId: V });
        return nn(U, V, Jn, { flushSync: Be }), !0;
      }
      return !1;
    }
    if (!Ae && fe(se)) return;
    let ge = _.fetchers.get(U);
    Jt(U, D3(he, ge), { flushSync: Be });
    let Te = new AbortController(),
      He = Xr(n.history, K, Te.signal, he);
    if (Ae) {
      let lt = await hi(ce, new URL(He.url).pathname, He.signal, U);
      if (lt.type === "aborted") return;
      if (lt.type === "error") {
        nn(U, V, lt.error, { flushSync: Be });
        return;
      } else if (lt.matches) {
        if (((ce = lt.matches), (se = oo(ce, K)), fe(se))) return;
      } else {
        nn(U, V, dn(404, { pathname: K }), { flushSync: Be });
        return;
      }
    }
    ie.set(U, Te);
    let Ft = me,
      ze = (await ui("action", _, He, [se], ce, U))[se.route.id];
    if (He.signal.aborted) {
      ie.get(U) === Te && ie.delete(U);
      return;
    }
    if (y.v7_fetcherPersist && ue.has(U)) {
      if (tr(ze) || Bn(ze)) {
        Jt(U, ba(void 0));
        return;
      }
    } else {
      if (tr(ze))
        if ((ie.delete(U), xe > Ft)) {
          Jt(U, ba(void 0));
          return;
        } else
          return (
            N.add(U),
            Jt(U, no(he)),
            at(He, ze, !1, { fetcherSubmission: he, preventScrollReset: ye })
          );
      if (Bn(ze)) {
        nn(U, V, ze.error);
        return;
      }
    }
    if (Sa(ze)) throw dn(400, { type: "defer-action" });
    let rt = _.navigation.location || _.location,
      vn = Xr(n.history, rt, Te.signal),
      wn = p || f,
      Wt =
        _.navigation.state !== "idle"
          ? Ia(wn, _.navigation.location, m)
          : _.matches;
    Pe(Wt, "Didn't find any matches after fetcher action");
    let kt = ++me;
    T.set(U, kt);
    let xt = no(he, ze.data);
    _.fetchers.set(U, xt);
    let [Ji, pi] = qx(
      n.history,
      _,
      Wt,
      he,
      rt,
      !1,
      y.v7_skipActionErrorRevalidation,
      de,
      k,
      te,
      ue,
      P,
      N,
      wn,
      m,
      [se.route.id, ze],
    );
    pi
      .filter((lt) => lt.key !== U)
      .forEach((lt) => {
        let Jn = lt.key,
          On = _.fetchers.get(Jn),
          rn = no(void 0, On ? On.data : void 0);
        _.fetchers.set(Jn, rn),
          Kt(Jn),
          lt.controller && ie.set(Jn, lt.controller);
      }),
      st({ fetchers: new Map(_.fetchers) });
    let Mn = () => pi.forEach((lt) => Kt(lt.key));
    Te.signal.addEventListener("abort", Mn);
    let { loaderResults: $n, fetcherResults: Xe } = await Tn(_, Wt, Ji, pi, vn);
    if (Te.signal.aborted) return;
    Te.signal.removeEventListener("abort", Mn),
      T.delete(U),
      ie.delete(U),
      pi.forEach((lt) => ie.delete(lt.key));
    let ot = Xl($n);
    if (ot) return at(vn, ot.result, !1, { preventScrollReset: ye });
    if (((ot = Xl(Xe)), ot))
      return N.add(ot.key), at(vn, ot.result, !1, { preventScrollReset: ye });
    let { loaderData: _i, errors: Fa } = Kx(_, Wt, $n, void 0, pi, Xe, pe);
    if (_.fetchers.has(U)) {
      let lt = ba(ze.data);
      _.fetchers.set(U, lt);
    }
    Nt(kt),
      _.navigation.state === "loading" && kt > xe
        ? (Pe(O, "Expected pending action"),
          z && z.abort(),
          Et(_.navigation.location, {
            matches: Wt,
            loaderData: _i,
            errors: Fa,
            fetchers: new Map(_.fetchers),
          }))
        : (st({
            errors: Fa,
            loaderData: Zx(_.loaderData, _i, Wt, Fa),
            fetchers: new Map(_.fetchers),
          }),
          (de = !1));
  }
  async function _n(U, V, K, se, ce, Ae, Be, ye, he) {
    let fe = _.fetchers.get(U);
    Jt(U, no(he, fe ? fe.data : void 0), { flushSync: Be });
    let ge = new AbortController(),
      Te = Xr(n.history, K, ge.signal);
    if (Ae) {
      let ze = await hi(ce, new URL(Te.url).pathname, Te.signal, U);
      if (ze.type === "aborted") return;
      if (ze.type === "error") {
        nn(U, V, ze.error, { flushSync: Be });
        return;
      } else if (ze.matches) (ce = ze.matches), (se = oo(ce, K));
      else {
        nn(U, V, dn(404, { pathname: K }), { flushSync: Be });
        return;
      }
    }
    ie.set(U, ge);
    let He = me,
      $e = (await ui("loader", _, Te, [se], ce, U))[se.route.id];
    if (
      (Sa($e) && ($e = (await Ph($e, Te.signal, !0)) || $e),
      ie.get(U) === ge && ie.delete(U),
      !Te.signal.aborted)
    ) {
      if (ue.has(U)) {
        Jt(U, ba(void 0));
        return;
      }
      if (tr($e))
        if (xe > He) {
          Jt(U, ba(void 0));
          return;
        } else {
          N.add(U), await at(Te, $e, !1, { preventScrollReset: ye });
          return;
        }
      if (Bn($e)) {
        nn(U, V, $e.error);
        return;
      }
      Pe(!Sa($e), "Unhandled fetcher deferred data"), Jt(U, ba($e.data));
    }
  }
  async function at(U, V, K, se) {
    let {
      submission: ce,
      fetcherSubmission: Ae,
      preventScrollReset: Be,
      replace: ye,
    } = se === void 0 ? {} : se;
    V.response.headers.has("X-Remix-Revalidate") && (de = !0);
    let he = V.response.headers.get("Location");
    Pe(he, "Expected a Location header on the redirect Response"),
      (he = Xx(he, new URL(U.url), m));
    let fe = xo(_.location, he, { _isRedirect: !0 });
    if (a) {
      let ze = !1;
      if (V.response.headers.has("X-Remix-Reload-Document")) ze = !0;
      else if (qh.test(he)) {
        const rt = n.history.createURL(he);
        ze = rt.origin !== i.location.origin || Do(rt.pathname, m) == null;
      }
      if (ze) {
        ye ? i.location.replace(he) : i.location.assign(he);
        return;
      }
    }
    z = null;
    let ge =
        ye === !0 || V.response.headers.has("X-Remix-Replace")
          ? Tt.Replace
          : Tt.Push,
      { formMethod: Te, formAction: He, formEncType: Ft } = _.navigation;
    !ce && !Ae && Te && He && Ft && (ce = Wx(_.navigation));
    let $e = ce || Ae;
    if (r3.has(V.response.status) && $e && ni($e.formMethod))
      await Ht(ge, fe, {
        submission: dt({}, $e, { formAction: he }),
        preventScrollReset: Be || $,
        enableViewTransition: K ? j : void 0,
      });
    else {
      let ze = Hf(fe, ce);
      await Ht(ge, fe, {
        overrideNavigation: ze,
        fetcherSubmission: Ae,
        preventScrollReset: Be || $,
        enableViewTransition: K ? j : void 0,
      });
    }
  }
  async function ui(U, V, K, se, ce, Ae) {
    let Be,
      ye = {};
    try {
      Be = await d3(d, U, V, K, se, ce, Ae, c, l);
    } catch (he) {
      return (
        se.forEach((fe) => {
          ye[fe.route.id] = { type: Ie.error, error: he };
        }),
        ye
      );
    }
    for (let [he, fe] of Object.entries(Be))
      if (g3(fe)) {
        let ge = fe.result;
        ye[he] = {
          type: Ie.redirect,
          response: x3(ge, K, he, ce, m, y.v7_relativeSplatPath),
        };
      } else ye[he] = await m3(fe);
    return ye;
  }
  async function Tn(U, V, K, se, ce) {
    let Ae = U.matches,
      Be = ui("loader", U, ce, K, V, null),
      ye = Promise.all(
        se.map(async (ge) => {
          if (ge.matches && ge.match && ge.controller) {
            let He = (
              await ui(
                "loader",
                U,
                Xr(n.history, ge.path, ge.controller.signal),
                [ge.match],
                ge.matches,
                ge.key,
              )
            )[ge.match.route.id];
            return { [ge.key]: He };
          } else
            return Promise.resolve({
              [ge.key]: {
                type: Ie.error,
                error: dn(404, { pathname: ge.path }),
              },
            });
        }),
      ),
      he = await Be,
      fe = (await ye).reduce((ge, Te) => Object.assign(ge, Te), {});
    return (
      await Promise.all([
        A3(V, he, ce.signal, Ae, U.loaderData),
        S3(V, fe, se),
      ]),
      { loaderResults: he, fetcherResults: fe }
    );
  }
  function Rn() {
    (de = !0),
      k.push(...Zn()),
      P.forEach((U, V) => {
        ie.has(V) && te.add(V), Kt(V);
      });
  }
  function Jt(U, V, K) {
    K === void 0 && (K = {}),
      _.fetchers.set(U, V),
      st(
        { fetchers: new Map(_.fetchers) },
        { flushSync: (K && K.flushSync) === !0 },
      );
  }
  function nn(U, V, K, se) {
    se === void 0 && (se = {});
    let ce = er(_.matches, V);
    yn(U),
      st(
        { errors: { [ce.route.id]: K }, fetchers: new Map(_.fetchers) },
        { flushSync: (se && se.flushSync) === !0 },
      );
  }
  function Qi(U) {
    return (
      Y.set(U, (Y.get(U) || 0) + 1),
      ue.has(U) && ue.delete(U),
      _.fetchers.get(U) || s3
    );
  }
  function yn(U) {
    let V = _.fetchers.get(U);
    ie.has(U) && !(V && V.state === "loading" && T.has(U)) && Kt(U),
      P.delete(U),
      T.delete(U),
      N.delete(U),
      y.v7_fetcherPersist && ue.delete(U),
      te.delete(U),
      _.fetchers.delete(U);
  }
  function Si(U) {
    let V = (Y.get(U) || 0) - 1;
    V <= 0
      ? (Y.delete(U), ue.add(U), y.v7_fetcherPersist || yn(U))
      : Y.set(U, V),
      st({ fetchers: new Map(_.fetchers) });
  }
  function Kt(U) {
    let V = ie.get(U);
    V && (V.abort(), ie.delete(U));
  }
  function Ot(U) {
    for (let V of U) {
      let K = Qi(V),
        se = ba(K.data);
      _.fetchers.set(V, se);
    }
  }
  function an() {
    let U = [],
      V = !1;
    for (let K of N) {
      let se = _.fetchers.get(K);
      Pe(se, "Expected fetcher: " + K),
        se.state === "loading" && (N.delete(K), U.push(K), (V = !0));
    }
    return Ot(U), V;
  }
  function Nt(U) {
    let V = [];
    for (let [K, se] of T)
      if (se < U) {
        let ce = _.fetchers.get(K);
        Pe(ce, "Expected fetcher: " + K),
          ce.state === "loading" && (Kt(K), T.delete(K), V.push(K));
      }
    return Ot(V), V.length > 0;
  }
  function cs(U, V) {
    let K = _.blockers.get(U) || to;
    return Ce.get(U) !== V && Ce.set(U, V), K;
  }
  function Ma(U) {
    _.blockers.delete(U), Ce.delete(U);
  }
  function $i(U, V) {
    let K = _.blockers.get(U) || to;
    Pe(
      (K.state === "unblocked" && V.state === "blocked") ||
        (K.state === "blocked" && V.state === "blocked") ||
        (K.state === "blocked" && V.state === "proceeding") ||
        (K.state === "blocked" && V.state === "unblocked") ||
        (K.state === "proceeding" && V.state === "unblocked"),
      "Invalid blocker state transition: " + K.state + " -> " + V.state,
    );
    let se = new Map(_.blockers);
    se.set(U, V), st({ blockers: se });
  }
  function ci(U) {
    let { currentLocation: V, nextLocation: K, historyAction: se } = U;
    if (Ce.size === 0) return;
    Ce.size > 1 && Ir(!1, "A router only supports one blocker at a time");
    let ce = Array.from(Ce.entries()),
      [Ae, Be] = ce[ce.length - 1],
      ye = _.blockers.get(Ae);
    if (
      !(ye && ye.state === "proceeding") &&
      Be({ currentLocation: V, nextLocation: K, historyAction: se })
    )
      return Ae;
  }
  function fi(U) {
    let V = dn(404, { pathname: U }),
      K = p || f,
      { matches: se, route: ce } = $x(K);
    return Zn(), { notFoundMatches: se, route: ce, error: V };
  }
  function Zn(U) {
    let V = [];
    return (
      pe.forEach((K, se) => {
        (!U || U(se)) && (K.cancel(), V.push(se), pe.delete(se));
      }),
      V
    );
  }
  function Qn(U, V, K) {
    if (((b = U), (A = V), (S = K || null), !w && _.navigation === Uf)) {
      w = !0;
      let se = Oa(_.location, _.matches);
      se != null && st({ restoreScrollPosition: se });
    }
    return () => {
      (b = null), (A = null), (S = null);
    };
  }
  function Ci(U, V) {
    return (
      (S &&
        S(
          U,
          V.map((se) => Ub(se, _.loaderData)),
        )) ||
      U.key
    );
  }
  function Di(U, V) {
    if (b && A) {
      let K = Ci(U, V);
      b[K] = A();
    }
  }
  function Oa(U, V) {
    if (b) {
      let K = Ci(U, V),
        se = b[K];
      if (typeof se == "number") return se;
    }
    return null;
  }
  function Bi(U, V, K) {
    if (x)
      if (U) {
        if (Object.keys(U[0].params).length > 0)
          return { active: !0, matches: Il(V, K, m, !0) };
      } else return { active: !0, matches: Il(V, K, m, !0) || [] };
    return { active: !1, matches: null };
  }
  async function hi(U, V, K, se) {
    if (!x) return { type: "success", matches: U };
    let ce = U;
    for (;;) {
      let Ae = p == null,
        Be = p || f,
        ye = c;
      try {
        await x({
          signal: K,
          path: V,
          matches: ce,
          fetcherKey: se,
          patch: (ge, Te) => {
            K.aborted || Yx(ge, Te, Be, ye, l);
          },
        });
      } catch (ge) {
        return { type: "error", error: ge, partialMatches: ce };
      } finally {
        Ae && !K.aborted && (f = [...f]);
      }
      if (K.aborted) return { type: "aborted" };
      let he = Ia(Be, V, m);
      if (he) return { type: "success", matches: he };
      let fe = Il(Be, V, m, !0);
      if (
        !fe ||
        (ce.length === fe.length &&
          ce.every((ge, Te) => ge.route.id === fe[Te].route.id))
      )
        return { type: "success", matches: null };
      ce = fe;
    }
  }
  function di(U) {
    (c = {}), (p = Ku(U, l, void 0, c));
  }
  function fs(U, V) {
    let K = p == null;
    Yx(U, V, p || f, c, l), K && ((f = [...f]), st({}));
  }
  return (
    (L = {
      get basename() {
        return m;
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
        return i;
      },
      initialize: Qe,
      subscribe: ri,
      enableScrollRestoration: Qn,
      navigate: ft,
      fetch: Vt,
      revalidate: si,
      createHref: (U) => n.history.createHref(U),
      encodeLocation: (U) => n.history.encodeLocation(U),
      getFetcher: Qi,
      deleteFetcher: Si,
      dispose: tn,
      getBlocker: cs,
      deleteBlocker: Ma,
      patchRoutes: fs,
      _internalFetchControllers: ie,
      _internalActiveDeferreds: pe,
      _internalSetRoutes: di,
    }),
    L
  );
}
function u3(n) {
  return (
    n != null &&
    (("formData" in n && n.formData != null) ||
      ("body" in n && n.body !== void 0))
  );
}
function oh(n, i, a, s, l, c, f, p) {
  let m, d;
  if (f) {
    m = [];
    for (let y of i)
      if ((m.push(y), y.route.id === f)) {
        d = y;
        break;
      }
  } else (m = i), (d = i[i.length - 1]);
  let x = Tg(l || ".", _g(m, c), Do(n.pathname, a) || n.pathname, p === "path");
  if (
    (l == null && ((x.search = n.search), (x.hash = n.hash)),
    (l == null || l === "" || l === ".") && d)
  ) {
    let y = Yh(x.search);
    if (d.route.index && !y)
      x.search = x.search ? x.search.replace(/^\?/, "?index&") : "?index";
    else if (!d.route.index && y) {
      let v = new URLSearchParams(x.search),
        E = v.getAll("index");
      v.delete("index"),
        E.filter((S) => S).forEach((S) => v.append("index", S));
      let b = v.toString();
      x.search = b ? "?" + b : "";
    }
  }
  return (
    s &&
      a !== "/" &&
      (x.pathname = x.pathname === "/" ? a : Ca([a, x.pathname])),
    Co(x)
  );
}
function kx(n, i, a, s) {
  if (!s || !u3(s)) return { path: a };
  if (s.formMethod && !b3(s.formMethod))
    return { path: a, error: dn(405, { method: s.formMethod }) };
  let l = () => ({ path: a, error: dn(400, { type: "invalid-body" }) }),
    c = s.formMethod || "get",
    f = n ? c.toUpperCase() : c.toLowerCase(),
    p = Fg(a);
  if (s.body !== void 0) {
    if (s.formEncType === "text/plain") {
      if (!ni(f)) return l();
      let v =
        typeof s.body == "string"
          ? s.body
          : s.body instanceof FormData || s.body instanceof URLSearchParams
            ? Array.from(s.body.entries()).reduce((E, b) => {
                let [S, A] = b;
                return (
                  "" +
                  E +
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
          formAction: p,
          formEncType: s.formEncType,
          formData: void 0,
          json: void 0,
          text: v,
        },
      };
    } else if (s.formEncType === "application/json") {
      if (!ni(f)) return l();
      try {
        let v = typeof s.body == "string" ? JSON.parse(s.body) : s.body;
        return {
          path: a,
          submission: {
            formMethod: f,
            formAction: p,
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
  Pe(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let m, d;
  if (s.formData) (m = uh(s.formData)), (d = s.formData);
  else if (s.body instanceof FormData) (m = uh(s.body)), (d = s.body);
  else if (s.body instanceof URLSearchParams) (m = s.body), (d = Gx(m));
  else if (s.body == null) (m = new URLSearchParams()), (d = new FormData());
  else
    try {
      (m = new URLSearchParams(s.body)), (d = Gx(m));
    } catch (v) {
      return l();
    }
  let x = {
    formMethod: f,
    formAction: p,
    formEncType: (s && s.formEncType) || "application/x-www-form-urlencoded",
    formData: d,
    json: void 0,
    text: void 0,
  };
  if (ni(x.formMethod)) return { path: a, submission: x };
  let y = Ta(a);
  return (
    i && y.search && Yh(y.search) && m.append("index", ""),
    (y.search = "?" + m),
    { path: Co(y), submission: x }
  );
}
function jx(n, i, a) {
  a === void 0 && (a = !1);
  let s = n.findIndex((l) => l.route.id === i);
  return s >= 0 ? n.slice(0, a ? s + 1 : s) : n;
}
function qx(n, i, a, s, l, c, f, p, m, d, x, y, v, E, b, S) {
  let A = S ? (Bn(S[1]) ? S[1].error : S[1].data) : void 0,
    w = n.createURL(i.location),
    C = n.createURL(l),
    D = a;
  c && i.errors
    ? (D = jx(a, Object.keys(i.errors)[0], !0))
    : S && Bn(S[1]) && (D = jx(a, S[0]));
  let R = S ? S[1].statusCode : void 0,
    M = f && R && R >= 400,
    L = D.filter((O, $) => {
      let { route: z } = O;
      if (z.lazy) return !0;
      if (z.loader == null) return !1;
      if (c) return lh(z, i.loaderData, i.errors);
      if (
        c3(i.loaderData, i.matches[$], O) ||
        m.some((ee) => ee === O.route.id)
      )
        return !0;
      let j = i.matches[$],
        Q = O;
      return Px(
        O,
        dt(
          {
            currentUrl: w,
            currentParams: j.params,
            nextUrl: C,
            nextParams: Q.params,
          },
          s,
          {
            actionResult: A,
            actionStatus: R,
            defaultShouldRevalidate: M
              ? !1
              : p ||
                w.pathname + w.search === C.pathname + C.search ||
                w.search !== C.search ||
                Mg(j, Q),
          },
        ),
      );
    }),
    _ = [];
  return (
    y.forEach((O, $) => {
      if (c || !a.some((oe) => oe.route.id === O.routeId) || x.has($)) return;
      let z = Ia(E, O.path, b);
      if (!z) {
        _.push({
          key: $,
          routeId: O.routeId,
          path: O.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let j = i.fetchers.get($),
        Q = oo(z, O.path),
        ee = !1;
      v.has($)
        ? (ee = !1)
        : d.has($)
          ? (d.delete($), (ee = !0))
          : j && j.state !== "idle" && j.data === void 0
            ? (ee = p)
            : (ee = Px(
                Q,
                dt(
                  {
                    currentUrl: w,
                    currentParams: i.matches[i.matches.length - 1].params,
                    nextUrl: C,
                    nextParams: a[a.length - 1].params,
                  },
                  s,
                  {
                    actionResult: A,
                    actionStatus: R,
                    defaultShouldRevalidate: M ? !1 : p,
                  },
                ),
              )),
        ee &&
          _.push({
            key: $,
            routeId: O.routeId,
            path: O.path,
            matches: z,
            match: Q,
            controller: new AbortController(),
          });
    }),
    [L, _]
  );
}
function lh(n, i, a) {
  if (n.lazy) return !0;
  if (!n.loader) return !1;
  let s = i != null && i[n.id] !== void 0,
    l = a != null && a[n.id] !== void 0;
  return !s && l
    ? !1
    : typeof n.loader == "function" && n.loader.hydrate === !0
      ? !0
      : !s && !l;
}
function c3(n, i, a) {
  let s = !i || a.route.id !== i.route.id,
    l = n[a.route.id] === void 0;
  return s || l;
}
function Mg(n, i) {
  let a = n.route.path;
  return (
    n.pathname !== i.pathname ||
    (a != null && a.endsWith("*") && n.params["*"] !== i.params["*"])
  );
}
function Px(n, i) {
  if (n.route.shouldRevalidate) {
    let a = n.route.shouldRevalidate(i);
    if (typeof a == "boolean") return a;
  }
  return i.defaultShouldRevalidate;
}
function Yx(n, i, a, s, l) {
  var c;
  let f;
  if (n) {
    let d = s[n];
    Pe(d, "No route found to patch children into: routeId = " + n),
      d.children || (d.children = []),
      (f = d.children);
  } else f = a;
  let p = i.filter((d) => !f.some((x) => Og(d, x))),
    m = Ku(
      p,
      l,
      [n || "_", "patch", String(((c = f) == null ? void 0 : c.length) || "0")],
      s,
    );
  f.push(...m);
}
function Og(n, i) {
  return "id" in n && "id" in i && n.id === i.id
    ? !0
    : n.index === i.index &&
        n.path === i.path &&
        n.caseSensitive === i.caseSensitive
      ? (!n.children || n.children.length === 0) &&
        (!i.children || i.children.length === 0)
        ? !0
        : n.children.every((a, s) => {
            var l;
            return (l = i.children) == null ? void 0 : l.some((c) => Og(a, c));
          })
      : !1;
}
async function f3(n, i, a) {
  if (!n.lazy) return;
  let s = await n.lazy();
  if (!n.lazy) return;
  let l = a[n.id];
  Pe(l, "No route found in manifest");
  let c = {};
  for (let f in s) {
    let m = l[f] !== void 0 && f !== "hasErrorBoundary";
    Ir(
      !m,
      'Route "' +
        l.id +
        '" has a static property "' +
        f +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + f + '" will be ignored.'),
    ),
      !m && !Nb.has(f) && (c[f] = s[f]);
  }
  Object.assign(l, c), Object.assign(l, dt({}, i(l), { lazy: void 0 }));
}
async function h3(n) {
  let { matches: i } = n,
    a = i.filter((l) => l.shouldLoad);
  return (await Promise.all(a.map((l) => l.resolve()))).reduce(
    (l, c, f) => Object.assign(l, { [a[f].route.id]: c }),
    {},
  );
}
async function d3(n, i, a, s, l, c, f, p, m, d) {
  let x = c.map((E) => (E.route.lazy ? f3(E.route, m, p) : void 0)),
    y = c.map((E, b) => {
      let S = x[b],
        A = l.some((C) => C.route.id === E.route.id);
      return dt({}, E, {
        shouldLoad: A,
        resolve: async (C) => (
          C &&
            s.method === "GET" &&
            (E.route.lazy || E.route.loader) &&
            (A = !0),
          A
            ? p3(i, s, E, S, C, d)
            : Promise.resolve({ type: Ie.data, result: void 0 })
        ),
      });
    }),
    v = await n({
      matches: y,
      request: s,
      params: c[0].params,
      fetcherKey: f,
      context: d,
    });
  try {
    await Promise.all(x);
  } catch (E) {}
  return v;
}
async function p3(n, i, a, s, l, c) {
  let f,
    p,
    m = (d) => {
      let x,
        y = new Promise((b, S) => (x = S));
      (p = () => x()), i.signal.addEventListener("abort", p);
      let v = (b) =>
          typeof d != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + n + '" [routeId: ' + a.route.id + "]"),
                ),
              )
            : d(
                { request: i, params: a.params, context: c },
                ...(b !== void 0 ? [b] : []),
              ),
        E = (async () => {
          try {
            return { type: "data", result: await (l ? l((S) => v(S)) : v()) };
          } catch (b) {
            return { type: "error", result: b };
          }
        })();
      return Promise.race([E, y]);
    };
  try {
    let d = a.route[n];
    if (s)
      if (d) {
        let x,
          [y] = await Promise.all([
            m(d).catch((v) => {
              x = v;
            }),
            s,
          ]);
        if (x !== void 0) throw x;
        f = y;
      } else if ((await s, (d = a.route[n]), d)) f = await m(d);
      else if (n === "action") {
        let x = new URL(i.url),
          y = x.pathname + x.search;
        throw dn(405, { method: i.method, pathname: y, routeId: a.route.id });
      } else return { type: Ie.data, result: void 0 };
    else if (d) f = await m(d);
    else {
      let x = new URL(i.url),
        y = x.pathname + x.search;
      throw dn(404, { pathname: y });
    }
    Pe(
      f.result !== void 0,
      "You defined " +
        (n === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          a.route.id +
          "\" but didn't return anything from your `" +
          n +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (d) {
    return { type: Ie.error, result: d };
  } finally {
    p && i.signal.removeEventListener("abort", p);
  }
  return f;
}
async function m3(n) {
  let { result: i, type: a } = n;
  if (zg(i)) {
    let y;
    try {
      let v = i.headers.get("Content-Type");
      v && /\bapplication\/json\b/.test(v)
        ? i.body == null
          ? (y = null)
          : (y = await i.json())
        : (y = await i.text());
    } catch (v) {
      return { type: Ie.error, error: v };
    }
    return a === Ie.error
      ? {
          type: Ie.error,
          error: new Zu(i.status, i.statusText, y),
          statusCode: i.status,
          headers: i.headers,
        }
      : { type: Ie.data, data: y, statusCode: i.status, headers: i.headers };
  }
  if (a === Ie.error) {
    if (Jx(i)) {
      var s, l;
      if (i.data instanceof Error) {
        var c, f;
        return {
          type: Ie.error,
          error: i.data,
          statusCode: (c = i.init) == null ? void 0 : c.status,
          headers:
            (f = i.init) != null && f.headers
              ? new Headers(i.init.headers)
              : void 0,
        };
      }
      return {
        type: Ie.error,
        error: new Zu(
          ((s = i.init) == null ? void 0 : s.status) || 500,
          void 0,
          i.data,
        ),
        statusCode: yo(i) ? i.status : void 0,
        headers:
          (l = i.init) != null && l.headers
            ? new Headers(i.init.headers)
            : void 0,
      };
    }
    return { type: Ie.error, error: i, statusCode: yo(i) ? i.status : void 0 };
  }
  if (E3(i)) {
    var p, m;
    return {
      type: Ie.deferred,
      deferredData: i,
      statusCode: (p = i.init) == null ? void 0 : p.status,
      headers:
        ((m = i.init) == null ? void 0 : m.headers) &&
        new Headers(i.init.headers),
    };
  }
  if (Jx(i)) {
    var d, x;
    return {
      type: Ie.data,
      data: i.data,
      statusCode: (d = i.init) == null ? void 0 : d.status,
      headers:
        (x = i.init) != null && x.headers
          ? new Headers(i.init.headers)
          : void 0,
    };
  }
  return { type: Ie.data, data: i };
}
function x3(n, i, a, s, l, c) {
  let f = n.headers.get("Location");
  if (
    (Pe(
      f,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !qh.test(f))
  ) {
    let p = s.slice(0, s.findIndex((m) => m.route.id === a) + 1);
    (f = oh(new URL(i.url), p, l, !0, f, c)), n.headers.set("Location", f);
  }
  return n;
}
function Xx(n, i, a) {
  if (qh.test(n)) {
    let s = n,
      l = s.startsWith("//") ? new URL(i.protocol + s) : new URL(s),
      c = Do(l.pathname, a) != null;
    if (l.origin === i.origin && c) return l.pathname + l.search + l.hash;
  }
  return n;
}
function Xr(n, i, a, s) {
  let l = n.createURL(Fg(i)).toString(),
    c = { signal: a };
  if (s && ni(s.formMethod)) {
    let { formMethod: f, formEncType: p } = s;
    (c.method = f.toUpperCase()),
      p === "application/json"
        ? ((c.headers = new Headers({ "Content-Type": p })),
          (c.body = JSON.stringify(s.json)))
        : p === "text/plain"
          ? (c.body = s.text)
          : p === "application/x-www-form-urlencoded" && s.formData
            ? (c.body = uh(s.formData))
            : (c.body = s.formData);
  }
  return new Request(l, c);
}
function uh(n) {
  let i = new URLSearchParams();
  for (let [a, s] of n.entries())
    i.append(a, typeof s == "string" ? s : s.name);
  return i;
}
function Gx(n) {
  let i = new FormData();
  for (let [a, s] of n.entries()) i.append(a, s);
  return i;
}
function y3(n, i, a, s, l) {
  let c = {},
    f = null,
    p,
    m = !1,
    d = {},
    x = a && Bn(a[1]) ? a[1].error : void 0;
  return (
    n.forEach((y) => {
      if (!(y.route.id in i)) return;
      let v = y.route.id,
        E = i[v];
      if (
        (Pe(!tr(E), "Cannot handle redirect results in processLoaderData"),
        Bn(E))
      ) {
        let b = E.error;
        x !== void 0 && ((b = x), (x = void 0)), (f = f || {});
        {
          let S = er(n, v);
          f[S.route.id] == null && (f[S.route.id] = b);
        }
        (c[v] = void 0),
          m || ((m = !0), (p = yo(E.error) ? E.error.status : 500)),
          E.headers && (d[v] = E.headers);
      } else
        Sa(E)
          ? (s.set(v, E.deferredData),
            (c[v] = E.deferredData.data),
            E.statusCode != null &&
              E.statusCode !== 200 &&
              !m &&
              (p = E.statusCode),
            E.headers && (d[v] = E.headers))
          : ((c[v] = E.data),
            E.statusCode && E.statusCode !== 200 && !m && (p = E.statusCode),
            E.headers && (d[v] = E.headers));
    }),
    x !== void 0 && a && ((f = { [a[0]]: x }), (c[a[0]] = void 0)),
    { loaderData: c, errors: f, statusCode: p || 200, loaderHeaders: d }
  );
}
function Kx(n, i, a, s, l, c, f) {
  let { loaderData: p, errors: m } = y3(i, a, s, f);
  return (
    l.forEach((d) => {
      let { key: x, match: y, controller: v } = d,
        E = c[x];
      if (
        (Pe(E, "Did not find corresponding fetcher result"),
        !(v && v.signal.aborted))
      )
        if (Bn(E)) {
          let b = er(n.matches, y == null ? void 0 : y.route.id);
          (m && m[b.route.id]) || (m = dt({}, m, { [b.route.id]: E.error })),
            n.fetchers.delete(x);
        } else if (tr(E)) Pe(!1, "Unhandled fetcher revalidation redirect");
        else if (Sa(E)) Pe(!1, "Unhandled fetcher deferred data");
        else {
          let b = ba(E.data);
          n.fetchers.set(x, b);
        }
    }),
    { loaderData: p, errors: m }
  );
}
function Zx(n, i, a, s) {
  let l = dt({}, i);
  for (let c of a) {
    let f = c.route.id;
    if (
      (i.hasOwnProperty(f)
        ? i[f] !== void 0 && (l[f] = i[f])
        : n[f] !== void 0 && c.route.loader && (l[f] = n[f]),
      s && s.hasOwnProperty(f))
    )
      break;
  }
  return l;
}
function Qx(n) {
  return n
    ? Bn(n[1])
      ? { actionData: {} }
      : { actionData: { [n[0]]: n[1].data } }
    : {};
}
function er(n, i) {
  return (
    (i ? n.slice(0, n.findIndex((s) => s.route.id === i) + 1) : [...n])
      .reverse()
      .find((s) => s.route.hasErrorBoundary === !0) || n[0]
  );
}
function $x(n) {
  let i =
    n.length === 1
      ? n[0]
      : n.find((a) => a.index || !a.path || a.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: i }],
    route: i,
  };
}
function dn(n, i) {
  let {
      pathname: a,
      routeId: s,
      method: l,
      type: c,
      message: f,
    } = i === void 0 ? {} : i,
    p = "Unknown Server Error",
    m = "Unknown @remix-run/router error";
  return (
    n === 400
      ? ((p = "Bad Request"),
        l && a && s
          ? (m =
              "You made a " +
              l +
              ' request to "' +
              a +
              '" but ' +
              ('did not provide a `loader` for route "' + s + '", ') +
              "so there is no way to handle the request.")
          : c === "defer-action"
            ? (m = "defer() is not supported in actions")
            : c === "invalid-body" && (m = "Unable to encode submission body"))
      : n === 403
        ? ((p = "Forbidden"),
          (m = 'Route "' + s + '" does not match URL "' + a + '"'))
        : n === 404
          ? ((p = "Not Found"), (m = 'No route matches URL "' + a + '"'))
          : n === 405 &&
            ((p = "Method Not Allowed"),
            l && a && s
              ? (m =
                  "You made a " +
                  l.toUpperCase() +
                  ' request to "' +
                  a +
                  '" but ' +
                  ('did not provide an `action` for route "' + s + '", ') +
                  "so there is no way to handle the request.")
              : l && (m = 'Invalid request method "' + l.toUpperCase() + '"')),
    new Zu(n || 500, p, new Error(m), !0)
  );
}
function Xl(n) {
  let i = Object.entries(n);
  for (let a = i.length - 1; a >= 0; a--) {
    let [s, l] = i[a];
    if (tr(l)) return { key: s, result: l };
  }
}
function Fg(n) {
  let i = typeof n == "string" ? Ta(n) : n;
  return Co(dt({}, i, { hash: "" }));
}
function v3(n, i) {
  return n.pathname !== i.pathname || n.search !== i.search
    ? !1
    : n.hash === ""
      ? i.hash !== ""
      : n.hash === i.hash
        ? !0
        : i.hash !== "";
}
function g3(n) {
  return zg(n.result) && a3.has(n.result.status);
}
function Sa(n) {
  return n.type === Ie.deferred;
}
function Bn(n) {
  return n.type === Ie.error;
}
function tr(n) {
  return (n && n.type) === Ie.redirect;
}
function Jx(n) {
  return (
    typeof n == "object" &&
    n != null &&
    "type" in n &&
    "data" in n &&
    "init" in n &&
    n.type === "DataWithResponseInit"
  );
}
function E3(n) {
  let i = n;
  return (
    i &&
    typeof i == "object" &&
    typeof i.data == "object" &&
    typeof i.subscribe == "function" &&
    typeof i.cancel == "function" &&
    typeof i.resolveData == "function"
  );
}
function zg(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.headers == "object" &&
    typeof n.body != "undefined"
  );
}
function b3(n) {
  return i3.has(n.toLowerCase());
}
function ni(n) {
  return t3.has(n.toLowerCase());
}
async function A3(n, i, a, s, l) {
  let c = Object.entries(i);
  for (let f = 0; f < c.length; f++) {
    let [p, m] = c[f],
      d = n.find((v) => (v == null ? void 0 : v.route.id) === p);
    if (!d) continue;
    let x = s.find((v) => v.route.id === d.route.id),
      y = x != null && !Mg(x, d) && (l && l[d.route.id]) !== void 0;
    Sa(m) &&
      y &&
      (await Ph(m, a, !1).then((v) => {
        v && (i[p] = v);
      }));
  }
}
async function S3(n, i, a) {
  for (let s = 0; s < a.length; s++) {
    let { key: l, routeId: c, controller: f } = a[s],
      p = i[l];
    n.find((d) => (d == null ? void 0 : d.route.id) === c) &&
      Sa(p) &&
      (Pe(
        f,
        "Expected an AbortController for revalidating fetcher deferred result",
      ),
      await Ph(p, f.signal, !0).then((d) => {
        d && (i[l] = d);
      }));
  }
}
async function Ph(n, i, a) {
  if ((a === void 0 && (a = !1), !(await n.deferredData.resolveData(i)))) {
    if (a)
      try {
        return { type: Ie.data, data: n.deferredData.unwrappedData };
      } catch (l) {
        return { type: Ie.error, error: l };
      }
    return { type: Ie.data, data: n.deferredData.data };
  }
}
function Yh(n) {
  return new URLSearchParams(n).getAll("index").some((i) => i === "");
}
function oo(n, i) {
  let a = typeof i == "string" ? Ta(i).search : i.search;
  if (n[n.length - 1].route.index && Yh(a || "")) return n[n.length - 1];
  let s = Bg(n);
  return s[s.length - 1];
}
function Wx(n) {
  let {
    formMethod: i,
    formAction: a,
    formEncType: s,
    text: l,
    formData: c,
    json: f,
  } = n;
  if (!(!i || !a || !s)) {
    if (l != null)
      return {
        formMethod: i,
        formAction: a,
        formEncType: s,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (c != null)
      return {
        formMethod: i,
        formAction: a,
        formEncType: s,
        formData: c,
        json: void 0,
        text: void 0,
      };
    if (f !== void 0)
      return {
        formMethod: i,
        formAction: a,
        formEncType: s,
        formData: void 0,
        json: f,
        text: void 0,
      };
  }
}
function Hf(n, i) {
  return i
    ? {
        state: "loading",
        location: n,
        formMethod: i.formMethod,
        formAction: i.formAction,
        formEncType: i.formEncType,
        formData: i.formData,
        json: i.json,
        text: i.text,
      }
    : {
        state: "loading",
        location: n,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function C3(n, i) {
  return {
    state: "submitting",
    location: n,
    formMethod: i.formMethod,
    formAction: i.formAction,
    formEncType: i.formEncType,
    formData: i.formData,
    json: i.json,
    text: i.text,
  };
}
function no(n, i) {
  return n
    ? {
        state: "loading",
        formMethod: n.formMethod,
        formAction: n.formAction,
        formEncType: n.formEncType,
        formData: n.formData,
        json: n.json,
        text: n.text,
        data: i,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: i,
      };
}
function D3(n, i) {
  return {
    state: "submitting",
    formMethod: n.formMethod,
    formAction: n.formAction,
    formEncType: n.formEncType,
    formData: n.formData,
    json: n.json,
    text: n.text,
    data: i ? i.data : void 0,
  };
}
function ba(n) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: n,
  };
}
function B3(n, i) {
  try {
    let a = n.sessionStorage.getItem(wg);
    if (a) {
      let s = JSON.parse(a);
      for (let [l, c] of Object.entries(s || {}))
        c && Array.isArray(c) && i.set(l, new Set(c || []));
    }
  } catch (a) {}
}
function _3(n, i) {
  if (i.size > 0) {
    let a = {};
    for (let [s, l] of i) a[s] = [...l];
    try {
      n.sessionStorage.setItem(wg, JSON.stringify(a));
    } catch (s) {
      Ir(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          s +
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
 */ function Qu() {
  return (
    (Qu = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var i = 1; i < arguments.length; i++) {
            var a = arguments[i];
            for (var s in a)
              Object.prototype.hasOwnProperty.call(a, s) && (n[s] = a[s]);
          }
          return n;
        }),
    Qu.apply(this, arguments)
  );
}
const ac = J.createContext(null),
  Ng = J.createContext(null),
  rc = J.createContext(null),
  Xh = J.createContext(null),
  is = J.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Lg = J.createContext(null);
function sc() {
  return J.useContext(Xh) != null;
}
function Ug() {
  return sc() || Pe(!1), J.useContext(Xh).location;
}
function Hg(n) {
  J.useContext(rc).static || J.useLayoutEffect(n);
}
function d7() {
  let { isDataRoute: n } = J.useContext(is);
  return n ? H3() : T3();
}
function T3() {
  sc() || Pe(!1);
  let n = J.useContext(ac),
    { basename: i, future: a, navigator: s } = J.useContext(rc),
    { matches: l } = J.useContext(is),
    { pathname: c } = Ug(),
    f = JSON.stringify(_g(l, a.v7_relativeSplatPath)),
    p = J.useRef(!1);
  return (
    Hg(() => {
      p.current = !0;
    }),
    J.useCallback(
      function (d, x) {
        if ((x === void 0 && (x = {}), !p.current)) return;
        if (typeof d == "number") {
          s.go(d);
          return;
        }
        let y = Tg(d, JSON.parse(f), c, x.relative === "path");
        n == null &&
          i !== "/" &&
          (y.pathname = y.pathname === "/" ? i : Ca([i, y.pathname])),
          (x.replace ? s.replace : s.push)(y, x.state, x);
      },
      [i, s, f, c, n],
    )
  );
}
function p7(n, i) {
  return Vg(n);
}
function Vg(n, i, a, s) {
  sc() || Pe(!1);
  let { navigator: l } = J.useContext(rc),
    { matches: c } = J.useContext(is),
    f = c[c.length - 1],
    p = f ? f.params : {};
  f && f.pathname;
  let m = f ? f.pathnameBase : "/";
  f && f.route;
  let d = Ug(),
    x;
  x = d;
  let y = x.pathname || "/",
    v = y;
  if (m !== "/") {
    let S = m.replace(/^\//, "").split("/");
    v = "/" + y.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let E = Ia(n, { pathname: v });
  return F3(
    E &&
      E.map((S) =>
        Object.assign({}, S, {
          params: Object.assign({}, p, S.params),
          pathname: Ca([
            m,
            l.encodeLocation
              ? l.encodeLocation(S.pathname).pathname
              : S.pathname,
          ]),
          pathnameBase:
            S.pathnameBase === "/"
              ? m
              : Ca([
                  m,
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
function R3() {
  let n = U3(),
    i = yo(n)
      ? n.status + " " + n.statusText
      : n instanceof Error
        ? n.message
        : JSON.stringify(n),
    a = n instanceof Error ? n.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return J.createElement(
    J.Fragment,
    null,
    J.createElement("h2", null, "Unexpected Application Error!"),
    J.createElement("h3", { style: { fontStyle: "italic" } }, i),
    a ? J.createElement("pre", { style: l }, a) : null,
    null,
  );
}
const w3 = J.createElement(R3, null);
class M3 extends J.Component {
  constructor(i) {
    super(i),
      (this.state = {
        location: i.location,
        revalidation: i.revalidation,
        error: i.error,
      });
  }
  static getDerivedStateFromError(i) {
    return { error: i };
  }
  static getDerivedStateFromProps(i, a) {
    return a.location !== i.location ||
      (a.revalidation !== "idle" && i.revalidation === "idle")
      ? { error: i.error, location: i.location, revalidation: i.revalidation }
      : {
          error: i.error !== void 0 ? i.error : a.error,
          location: a.location,
          revalidation: i.revalidation || a.revalidation,
        };
  }
  componentDidCatch(i, a) {
    console.error(
      "React Router caught the following error during render",
      i,
      a,
    );
  }
  render() {
    return this.state.error !== void 0
      ? J.createElement(
          is.Provider,
          { value: this.props.routeContext },
          J.createElement(Lg.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function O3(n) {
  let { routeContext: i, match: a, children: s } = n,
    l = J.useContext(ac);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (a.route.errorElement || a.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = a.route.id),
    J.createElement(is.Provider, { value: i }, s)
  );
}
function F3(n, i, a, s) {
  var l;
  if (
    (i === void 0 && (i = []),
    a === void 0 && (a = null),
    s === void 0 && (s = null),
    n == null)
  ) {
    var c;
    if (!a) return null;
    if (a.errors) n = a.matches;
    else if (
      (c = s) != null &&
      c.v7_partialHydration &&
      i.length === 0 &&
      !a.initialized &&
      a.matches.length > 0
    )
      n = a.matches;
    else return null;
  }
  let f = n,
    p = (l = a) == null ? void 0 : l.errors;
  if (p != null) {
    let x = f.findIndex(
      (y) => y.route.id && (p == null ? void 0 : p[y.route.id]) !== void 0,
    );
    x >= 0 || Pe(!1), (f = f.slice(0, Math.min(f.length, x + 1)));
  }
  let m = !1,
    d = -1;
  if (a && s && s.v7_partialHydration)
    for (let x = 0; x < f.length; x++) {
      let y = f[x];
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (d = x),
        y.route.id)
      ) {
        let { loaderData: v, errors: E } = a,
          b =
            y.route.loader &&
            v[y.route.id] === void 0 &&
            (!E || E[y.route.id] === void 0);
        if (y.route.lazy || b) {
          (m = !0), d >= 0 ? (f = f.slice(0, d + 1)) : (f = [f[0]]);
          break;
        }
      }
    }
  return f.reduceRight((x, y, v) => {
    let E,
      b = !1,
      S = null,
      A = null;
    a &&
      ((E = p && y.route.id ? p[y.route.id] : void 0),
      (S = y.route.errorElement || w3),
      m &&
        (d < 0 && v === 0
          ? (V3("route-fallback"), (b = !0), (A = null))
          : d === v &&
            ((b = !0), (A = y.route.hydrateFallbackElement || null))));
    let w = i.concat(f.slice(0, v + 1)),
      C = () => {
        let D;
        return (
          E
            ? (D = S)
            : b
              ? (D = A)
              : y.route.Component
                ? (D = J.createElement(y.route.Component, null))
                : y.route.element
                  ? (D = y.route.element)
                  : (D = x),
          J.createElement(O3, {
            match: y,
            routeContext: { outlet: x, matches: w, isDataRoute: a != null },
            children: D,
          })
        );
      };
    return a && (y.route.ErrorBoundary || y.route.errorElement || v === 0)
      ? J.createElement(M3, {
          location: a.location,
          revalidation: a.revalidation,
          component: S,
          error: E,
          children: C(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
        })
      : C();
  }, null);
}
var kg = (function (n) {
    return (
      (n.UseBlocker = "useBlocker"),
      (n.UseRevalidator = "useRevalidator"),
      (n.UseNavigateStable = "useNavigate"),
      n
    );
  })(kg || {}),
  jg = (function (n) {
    return (
      (n.UseBlocker = "useBlocker"),
      (n.UseLoaderData = "useLoaderData"),
      (n.UseActionData = "useActionData"),
      (n.UseRouteError = "useRouteError"),
      (n.UseNavigation = "useNavigation"),
      (n.UseRouteLoaderData = "useRouteLoaderData"),
      (n.UseMatches = "useMatches"),
      (n.UseRevalidator = "useRevalidator"),
      (n.UseNavigateStable = "useNavigate"),
      (n.UseRouteId = "useRouteId"),
      n
    );
  })(jg || {});
function z3(n) {
  let i = J.useContext(ac);
  return i || Pe(!1), i;
}
function N3(n) {
  let i = J.useContext(Ng);
  return i || Pe(!1), i;
}
function L3(n) {
  let i = J.useContext(is);
  return i || Pe(!1), i;
}
function qg(n) {
  let i = L3(),
    a = i.matches[i.matches.length - 1];
  return a.route.id || Pe(!1), a.route.id;
}
function U3() {
  var n;
  let i = J.useContext(Lg),
    a = N3(jg.UseRouteError),
    s = qg();
  return i !== void 0 ? i : (n = a.errors) == null ? void 0 : n[s];
}
function H3() {
  let { router: n } = z3(kg.UseNavigateStable),
    i = qg(),
    a = J.useRef(!1);
  return (
    Hg(() => {
      a.current = !0;
    }),
    J.useCallback(
      function (l, c) {
        c === void 0 && (c = {}),
          a.current &&
            (typeof l == "number"
              ? n.navigate(l)
              : n.navigate(l, Qu({ fromRouteId: i }, c)));
      },
      [n, i],
    )
  );
}
const Ix = {};
function V3(n, i, a) {
  Ix[n] || (Ix[n] = !0);
}
function k3(n, i) {
  n == null || n.v7_startTransition,
    (n == null ? void 0 : n.v7_relativeSplatPath) === void 0 &&
      (!i || i.v7_relativeSplatPath),
    i &&
      (i.v7_fetcherPersist,
      i.v7_normalizeFormMethod,
      i.v7_partialHydration,
      i.v7_skipActionErrorRevalidation);
}
function j3(n) {
  let {
    basename: i = "/",
    children: a = null,
    location: s,
    navigationType: l = Tt.Pop,
    navigator: c,
    static: f = !1,
    future: p,
  } = n;
  sc() && Pe(!1);
  let m = i.replace(/^\/*/, "/"),
    d = J.useMemo(
      () => ({
        basename: m,
        navigator: c,
        static: f,
        future: Qu({ v7_relativeSplatPath: !1 }, p),
      }),
      [m, p, c, f],
    );
  typeof s == "string" && (s = Ta(s));
  let {
      pathname: x = "/",
      search: y = "",
      hash: v = "",
      state: E = null,
      key: b = "default",
    } = s,
    S = J.useMemo(() => {
      let A = Do(x, m);
      return A == null
        ? null
        : {
            location: { pathname: A, search: y, hash: v, state: E, key: b },
            navigationType: l,
          };
    }, [m, x, y, v, E, b, l]);
  return S == null
    ? null
    : J.createElement(
        rc.Provider,
        { value: d },
        J.createElement(Xh.Provider, { children: a, value: S }),
      );
}
new Promise(() => {});
function q3(n) {
  let i = {
    hasErrorBoundary: n.ErrorBoundary != null || n.errorElement != null,
  };
  return (
    n.Component &&
      Object.assign(i, {
        element: J.createElement(n.Component),
        Component: void 0,
      }),
    n.HydrateFallback &&
      Object.assign(i, {
        hydrateFallbackElement: J.createElement(n.HydrateFallback),
        HydrateFallback: void 0,
      }),
    n.ErrorBoundary &&
      Object.assign(i, {
        errorElement: J.createElement(n.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    i
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
 */ function $u() {
  return (
    ($u = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var i = 1; i < arguments.length; i++) {
            var a = arguments[i];
            for (var s in a)
              Object.prototype.hasOwnProperty.call(a, s) && (n[s] = a[s]);
          }
          return n;
        }),
    $u.apply(this, arguments)
  );
}
const P3 = "6";
try {
  window.__reactRouterVersion = P3;
} catch (n) {}
function m7(n, i) {
  return l3({
    basename: i == null ? void 0 : i.basename,
    future: $u({}, i == null ? void 0 : i.future, { v7_prependBasename: !0 }),
    history: Ob({ window: i == null ? void 0 : i.window }),
    hydrationData: (i == null ? void 0 : i.hydrationData) || Y3(),
    routes: n,
    mapRouteProperties: q3,
    dataStrategy: i == null ? void 0 : i.dataStrategy,
    patchRoutesOnNavigation: i == null ? void 0 : i.patchRoutesOnNavigation,
    window: i == null ? void 0 : i.window,
  }).initialize();
}
function Y3() {
  var n;
  let i = (n = window) == null ? void 0 : n.__staticRouterHydrationData;
  return i && i.errors && (i = $u({}, i, { errors: X3(i.errors) })), i;
}
function X3(n) {
  if (!n) return null;
  let i = Object.entries(n),
    a = {};
  for (let [s, l] of i)
    if (l && l.__type === "RouteErrorResponse")
      a[s] = new Zu(l.status, l.statusText, l.data, l.internal === !0);
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
const G3 = J.createContext({ isTransitioning: !1 }),
  K3 = J.createContext(new Map()),
  Z3 = "startTransition",
  ey = Sb[Z3],
  Q3 = "flushSync",
  ty = Mb[Q3];
function $3(n) {
  ey ? ey(n) : n();
}
function io(n) {
  ty ? ty(n) : n();
}
class J3 {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((i, a) => {
        (this.resolve = (s) => {
          this.status === "pending" && ((this.status = "resolved"), i(s));
        }),
          (this.reject = (s) => {
            this.status === "pending" && ((this.status = "rejected"), a(s));
          });
      }));
  }
}
function x7(n) {
  let { fallbackElement: i, router: a, future: s } = n,
    [l, c] = J.useState(a.state),
    [f, p] = J.useState(),
    [m, d] = J.useState({ isTransitioning: !1 }),
    [x, y] = J.useState(),
    [v, E] = J.useState(),
    [b, S] = J.useState(),
    A = J.useRef(new Map()),
    { v7_startTransition: w } = s || {},
    C = J.useCallback(
      (O) => {
        w ? $3(O) : O();
      },
      [w],
    ),
    D = J.useCallback(
      (O, $) => {
        let { deletedFetchers: z, flushSync: j, viewTransitionOpts: Q } = $;
        O.fetchers.forEach((oe, de) => {
          oe.data !== void 0 && A.current.set(de, oe.data);
        }),
          z.forEach((oe) => A.current.delete(oe));
        let ee =
          a.window == null ||
          a.window.document == null ||
          typeof a.window.document.startViewTransition != "function";
        if (!Q || ee) {
          j ? io(() => c(O)) : C(() => c(O));
          return;
        }
        if (j) {
          io(() => {
            v && (x && x.resolve(), v.skipTransition()),
              d({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Q.currentLocation,
                nextLocation: Q.nextLocation,
              });
          });
          let oe = a.window.document.startViewTransition(() => {
            io(() => c(O));
          });
          oe.finished.finally(() => {
            io(() => {
              y(void 0), E(void 0), p(void 0), d({ isTransitioning: !1 });
            });
          }),
            io(() => E(oe));
          return;
        }
        v
          ? (x && x.resolve(),
            v.skipTransition(),
            S({
              state: O,
              currentLocation: Q.currentLocation,
              nextLocation: Q.nextLocation,
            }))
          : (p(O),
            d({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Q.currentLocation,
              nextLocation: Q.nextLocation,
            }));
      },
      [a.window, v, x, A, C],
    );
  J.useLayoutEffect(() => a.subscribe(D), [a, D]),
    J.useEffect(() => {
      m.isTransitioning && !m.flushSync && y(new J3());
    }, [m]),
    J.useEffect(() => {
      if (x && f && a.window) {
        let O = f,
          $ = x.promise,
          z = a.window.document.startViewTransition(async () => {
            C(() => c(O)), await $;
          });
        z.finished.finally(() => {
          y(void 0), E(void 0), p(void 0), d({ isTransitioning: !1 });
        }),
          E(z);
      }
    }, [C, f, x, a.window]),
    J.useEffect(() => {
      x && f && l.location.key === f.location.key && x.resolve();
    }, [x, v, l.location, f]),
    J.useEffect(() => {
      !m.isTransitioning &&
        b &&
        (p(b.state),
        d({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: b.currentLocation,
          nextLocation: b.nextLocation,
        }),
        S(void 0));
    }, [m.isTransitioning, b]),
    J.useEffect(() => {}, []);
  let R = J.useMemo(
      () => ({
        createHref: a.createHref,
        encodeLocation: a.encodeLocation,
        go: (O) => a.navigate(O),
        push: (O, $, z) =>
          a.navigate(O, {
            state: $,
            preventScrollReset: z == null ? void 0 : z.preventScrollReset,
          }),
        replace: (O, $, z) =>
          a.navigate(O, {
            replace: !0,
            state: $,
            preventScrollReset: z == null ? void 0 : z.preventScrollReset,
          }),
      }),
      [a],
    ),
    M = a.basename || "/",
    L = J.useMemo(
      () => ({ router: a, navigator: R, static: !1, basename: M }),
      [a, R, M],
    ),
    _ = J.useMemo(
      () => ({ v7_relativeSplatPath: a.future.v7_relativeSplatPath }),
      [a.future.v7_relativeSplatPath],
    );
  return (
    J.useEffect(() => k3(s, a.future), [s, a.future]),
    J.createElement(
      J.Fragment,
      null,
      J.createElement(
        ac.Provider,
        { value: L },
        J.createElement(
          Ng.Provider,
          { value: l },
          J.createElement(
            K3.Provider,
            { value: A.current },
            J.createElement(
              G3.Provider,
              { value: m },
              J.createElement(
                j3,
                {
                  basename: M,
                  location: l.location,
                  navigationType: l.historyAction,
                  navigator: R,
                  future: _,
                },
                l.initialized || a.future.v7_partialHydration
                  ? J.createElement(W3, {
                      routes: a.routes,
                      future: a.future,
                      state: l,
                    })
                  : i,
              ),
            ),
          ),
        ),
      ),
      null,
    )
  );
}
const W3 = J.memo(I3);
function I3(n) {
  let { routes: i, future: a, state: s } = n;
  return Vg(i, void 0, s, a);
}
var ny;
(function (n) {
  (n.UseScrollRestoration = "useScrollRestoration"),
    (n.UseSubmit = "useSubmit"),
    (n.UseSubmitFetcher = "useSubmitFetcher"),
    (n.UseFetcher = "useFetcher"),
    (n.useViewTransitionState = "useViewTransitionState");
})(ny || (ny = {}));
var iy;
(function (n) {
  (n.UseFetcher = "useFetcher"),
    (n.UseFetchers = "useFetchers"),
    (n.UseScrollRestoration = "useScrollRestoration");
})(iy || (iy = {}));
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eA = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  tA = (n) =>
    n.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, a, s) =>
      s ? s.toUpperCase() : a.toLowerCase(),
    ),
  ay = (n) => {
    const i = tA(n);
    return i.charAt(0).toUpperCase() + i.slice(1);
  },
  Pg = (...n) =>
    n
      .filter((i, a, s) => !!i && i.trim() !== "" && s.indexOf(i) === a)
      .join(" ")
      .trim(),
  nA = (n) => {
    for (const i in n)
      if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
  };
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var iA = {
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
 */ const aA = J.forwardRef((d, m) => {
  var x = d,
    {
      color: n = "currentColor",
      size: i = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: s,
      className: l = "",
      children: c,
      iconNode: f,
    } = x,
    p = hn(x, [
      "color",
      "size",
      "strokeWidth",
      "absoluteStrokeWidth",
      "className",
      "children",
      "iconNode",
    ]);
  return J.createElement(
    "svg",
    le(
      le(
        Ue(le({ ref: m }, iA), {
          width: i,
          height: i,
          stroke: n,
          strokeWidth: s ? (Number(a) * 24) / Number(i) : a,
          className: Pg("lucide", l),
        }),
        !c && !nA(p) && { "aria-hidden": "true" },
      ),
      p,
    ),
    [
      ...f.map(([y, v]) => J.createElement(y, v)),
      ...(Array.isArray(c) ? c : [c]),
    ],
  );
});
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Re = (n, i) => {
  const a = J.forwardRef((f, c) => {
    var p = f,
      { className: s } = p,
      l = hn(p, ["className"]);
    return J.createElement(
      aA,
      le(
        {
          ref: c,
          iconNode: i,
          className: Pg(`lucide-${eA(ay(n))}`, `lucide-${n}`, s),
        },
        l,
      ),
    );
  });
  return (a.displayName = ay(n)), a;
};
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rA = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse",
      },
    ],
  ],
  y7 = Re("activity", rA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sA = [
    ["path", { d: "M12 6.528V3a1 1 0 0 1 1-1h0", key: "11qiee" }],
    [
      "path",
      {
        d: "M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21",
        key: "110c12",
      },
    ],
  ],
  v7 = Re("apple", sA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oA = [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
  ],
  g7 = Re("arrow-left", oA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lA = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  E7 = Re("arrow-right", lA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uA = [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ],
  b7 = Re("book-open", uA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cA = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  A7 = Re("calendar", cA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fA = [
    [
      "path",
      {
        d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",
        key: "1qvrer",
      },
    ],
    ["path", { d: "M6 17h12", key: "1jwigz" }],
  ],
  S7 = Re("chef-hat", fA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hA = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  C7 = Re("chevron-down", hA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dA = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  D7 = Re("chevron-left", dA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pA = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  B7 = Re("chevron-right", pA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mA = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  _7 = Re("circle-alert", mA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xA = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  T7 = Re("circle-check-big", xA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yA = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  R7 = Re("circle-check", yA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vA = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
    ["path", { d: "m9 9 6 6", key: "z0biqf" }],
  ],
  w7 = Re("circle-x", vA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gA = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  M7 = Re("clock", gA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const EA = [
    [
      "path",
      {
        d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
        key: "1vdc57",
      },
    ],
    ["path", { d: "M5 21h14", key: "11awu3" }],
  ],
  O7 = Re("crown", EA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bA = [
    ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
    [
      "path",
      { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
    ],
  ],
  F7 = Re("dollar-sign", bA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const AA = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ],
  z7 = Re("download", AA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const SA = [
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
  N7 = Re("file-text", SA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const CA = [
    [
      "path",
      {
        d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
        key: "96xj49",
      },
    ],
  ],
  L7 = Re("flame", CA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const DA = [
    [
      "path",
      {
        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        key: "mvr1a0",
      },
    ],
  ],
  U7 = Re("heart", DA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const BA = [
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
  H7 = Re("house", BA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _A = [
    ["path", { d: "M16 10h2", key: "8sgtl7" }],
    ["path", { d: "M16 14h2", key: "epxaof" }],
    ["path", { d: "M6.17 15a3 3 0 0 1 5.66 0", key: "n6f512" }],
    ["circle", { cx: "9", cy: "11", r: "2", key: "yxgjnd" }],
    [
      "rect",
      { x: "2", y: "5", width: "20", height: "14", rx: "2", key: "qneu4z" },
    ],
  ],
  V7 = Re("id-card", _A);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const TA = [
    ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
    ["path", { d: "M21 12H9", key: "dn1m92" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ],
  k7 = Re("log-out", TA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const RA = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  j7 = Re("mail", RA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wA = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  q7 = Re("phone", wA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const MA = [
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
  P7 = Re("pizza", MA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const OA = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  Y7 = Re("plus", OA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const FA = [
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
  X7 = Re("refresh-cw", FA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zA = [
    [
      "path",
      { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
    ],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ],
  G7 = Re("rotate-ccw", zA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const NA = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  K7 = Re("search", NA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const LA = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  Z7 = Re("send", LA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const UA = [
    [
      "path",
      {
        d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
        key: "1i5ecw",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  Q7 = Re("settings", UA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const HA = [
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
  $7 = Re("smartphone", HA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const VA = [
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
  J7 = Re("sparkles", VA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kA = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  W7 = Re("star", kA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jA = [
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
  I7 = Re("triangle-alert", jA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qA = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  e9 = Re("user", qA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const PA = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  t9 = Re("users", PA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const YA = [
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
  n9 = Re("utensils-crossed", YA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const XA = [
    ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
    ["path", { d: "M7 2v20", key: "1473qp" }],
    [
      "path",
      { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" },
    ],
  ],
  i9 = Re("utensils", XA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const GA = [
    ["path", { d: "M12 20h.01", key: "zekei9" }],
    ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
    ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
    ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
    ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
    ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ],
  a9 = Re("wifi-off", GA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const KA = [
    ["path", { d: "M12 20h.01", key: "zekei9" }],
    ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
    ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
    ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ],
  r9 = Re("wifi", KA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ZA = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  s9 = Re("x", ZA);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const QA = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  o9 = Re("zap", QA);
var eu = { exports: {} };
function $A(n) {
  throw new Error(
    'Could not dynamically require "' +
      n +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
  );
}
var tu = { exports: {} };
const JA = {},
  WA = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: JA },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  IA = vb(WA);
var e5 = tu.exports,
  ry;
function Ye() {
  return (
    ry ||
      ((ry = 1),
      (function (n, i) {
        (function (a, s) {
          n.exports = s();
        })(e5, function () {
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
                !c && typeof Rf != "undefined" && Rf.crypto && (c = Rf.crypto),
                !c && typeof $A == "function")
              )
                try {
                  c = IA;
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
                      var R;
                      return (
                        (C.prototype = D),
                        (R = new C()),
                        (C.prototype = null),
                        R
                      );
                    };
                  })(),
                m = {},
                d = (m.lib = {}),
                x = (d.Base = (function () {
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
                y = (d.WordArray = x.extend({
                  init: function (C, D) {
                    (C = this.words = C || []),
                      D != l
                        ? (this.sigBytes = D)
                        : (this.sigBytes = C.length * 4);
                  },
                  toString: function (C) {
                    return (C || E).stringify(this);
                  },
                  concat: function (C) {
                    var D = this.words,
                      R = C.words,
                      M = this.sigBytes,
                      L = C.sigBytes;
                    if ((this.clamp(), M % 4))
                      for (var _ = 0; _ < L; _++) {
                        var O = (R[_ >>> 2] >>> (24 - (_ % 4) * 8)) & 255;
                        D[(M + _) >>> 2] |= O << (24 - ((M + _) % 4) * 8);
                      }
                    else
                      for (var $ = 0; $ < L; $ += 4)
                        D[(M + $) >>> 2] = R[$ >>> 2];
                    return (this.sigBytes += L), this;
                  },
                  clamp: function () {
                    var C = this.words,
                      D = this.sigBytes;
                    (C[D >>> 2] &= 4294967295 << (32 - (D % 4) * 8)),
                      (C.length = s.ceil(D / 4));
                  },
                  clone: function () {
                    var C = x.clone.call(this);
                    return (C.words = this.words.slice(0)), C;
                  },
                  random: function (C) {
                    for (var D = [], R = 0; R < C; R += 4) D.push(f());
                    return new y.init(D, C);
                  },
                })),
                v = (m.enc = {}),
                E = (v.Hex = {
                  stringify: function (C) {
                    for (
                      var D = C.words, R = C.sigBytes, M = [], L = 0;
                      L < R;
                      L++
                    ) {
                      var _ = (D[L >>> 2] >>> (24 - (L % 4) * 8)) & 255;
                      M.push((_ >>> 4).toString(16)),
                        M.push((_ & 15).toString(16));
                    }
                    return M.join("");
                  },
                  parse: function (C) {
                    for (var D = C.length, R = [], M = 0; M < D; M += 2)
                      R[M >>> 3] |=
                        parseInt(C.substr(M, 2), 16) << (24 - (M % 8) * 4);
                    return new y.init(R, D / 2);
                  },
                }),
                b = (v.Latin1 = {
                  stringify: function (C) {
                    for (
                      var D = C.words, R = C.sigBytes, M = [], L = 0;
                      L < R;
                      L++
                    ) {
                      var _ = (D[L >>> 2] >>> (24 - (L % 4) * 8)) & 255;
                      M.push(String.fromCharCode(_));
                    }
                    return M.join("");
                  },
                  parse: function (C) {
                    for (var D = C.length, R = [], M = 0; M < D; M++)
                      R[M >>> 2] |=
                        (C.charCodeAt(M) & 255) << (24 - (M % 4) * 8);
                    return new y.init(R, D);
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
                A = (d.BufferedBlockAlgorithm = x.extend({
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
                      R = this._data,
                      M = R.words,
                      L = R.sigBytes,
                      _ = this.blockSize,
                      O = _ * 4,
                      $ = L / O;
                    C
                      ? ($ = s.ceil($))
                      : ($ = s.max(($ | 0) - this._minBufferSize, 0));
                    var z = $ * _,
                      j = s.min(z * 4, L);
                    if (z) {
                      for (var Q = 0; Q < z; Q += _) this._doProcessBlock(M, Q);
                      (D = M.splice(0, z)), (R.sigBytes -= j);
                    }
                    return new y.init(D, j);
                  },
                  clone: function () {
                    var C = x.clone.call(this);
                    return (C._data = this._data.clone()), C;
                  },
                  _minBufferSize: 0,
                }));
              d.Hasher = A.extend({
                cfg: x.extend(),
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
                  return function (D, R) {
                    return new C.init(R).finalize(D);
                  };
                },
                _createHmacHelper: function (C) {
                  return function (D, R) {
                    return new w.HMAC.init(C, R).finalize(D);
                  };
                },
              });
              var w = (m.algo = {});
              return m;
            })(Math);
          return a;
        });
      })(tu)),
    tu.exports
  );
}
var nu = { exports: {} },
  t5 = nu.exports,
  sy;
function oc() {
  return (
    sy ||
      ((sy = 1),
      (function (n, i) {
        (function (a, s) {
          n.exports = s(Ye());
        })(t5, function (a) {
          return (
            (function (s) {
              var l = a,
                c = l.lib,
                f = c.Base,
                p = c.WordArray,
                m = (l.x64 = {});
              (m.Word = f.extend({
                init: function (d, x) {
                  (this.high = d), (this.low = x);
                },
              })),
                (m.WordArray = f.extend({
                  init: function (d, x) {
                    (d = this.words = d || []),
                      x != s
                        ? (this.sigBytes = x)
                        : (this.sigBytes = d.length * 8);
                  },
                  toX32: function () {
                    for (
                      var d = this.words, x = d.length, y = [], v = 0;
                      v < x;
                      v++
                    ) {
                      var E = d[v];
                      y.push(E.high), y.push(E.low);
                    }
                    return p.create(y, this.sigBytes);
                  },
                  clone: function () {
                    for (
                      var d = f.clone.call(this),
                        x = (d.words = this.words.slice(0)),
                        y = x.length,
                        v = 0;
                      v < y;
                      v++
                    )
                      x[v] = x[v].clone();
                    return d;
                  },
                }));
            })(),
            a
          );
        });
      })(nu)),
    nu.exports
  );
}
var iu = { exports: {} },
  n5 = iu.exports,
  oy;
function i5() {
  return (
    oy ||
      ((oy = 1),
      (function (n, i) {
        (function (a, s) {
          n.exports = s(Ye());
        })(n5, function (a) {
          return (
            (function () {
              if (typeof ArrayBuffer == "function") {
                var s = a,
                  l = s.lib,
                  c = l.WordArray,
                  f = c.init,
                  p = (c.init = function (m) {
                    if (
                      (m instanceof ArrayBuffer && (m = new Uint8Array(m)),
                      (m instanceof Int8Array ||
                        (typeof Uint8ClampedArray != "undefined" &&
                          m instanceof Uint8ClampedArray) ||
                        m instanceof Int16Array ||
                        m instanceof Uint16Array ||
                        m instanceof Int32Array ||
                        m instanceof Uint32Array ||
                        m instanceof Float32Array ||
                        m instanceof Float64Array) &&
                        (m = new Uint8Array(
                          m.buffer,
                          m.byteOffset,
                          m.byteLength,
                        )),
                      m instanceof Uint8Array)
                    ) {
                      for (var d = m.byteLength, x = [], y = 0; y < d; y++)
                        x[y >>> 2] |= m[y] << (24 - (y % 4) * 8);
                      f.call(this, x, d);
                    } else f.apply(this, arguments);
                  });
                p.prototype = c;
              }
            })(),
            a.lib.WordArray
          );
        });
      })(iu)),
    iu.exports
  );
}
var au = { exports: {} },
  a5 = au.exports,
  ly;
function r5() {
  return (
    ly ||
      ((ly = 1),
      (function (n, i) {
        (function (a, s) {
          n.exports = s(Ye());
        })(a5, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.WordArray,
                f = s.enc;
              (f.Utf16 = f.Utf16BE =
                {
                  stringify: function (m) {
                    for (
                      var d = m.words, x = m.sigBytes, y = [], v = 0;
                      v < x;
                      v += 2
                    ) {
                      var E = (d[v >>> 2] >>> (16 - (v % 4) * 8)) & 65535;
                      y.push(String.fromCharCode(E));
                    }
                    return y.join("");
                  },
                  parse: function (m) {
                    for (var d = m.length, x = [], y = 0; y < d; y++)
                      x[y >>> 1] |= m.charCodeAt(y) << (16 - (y % 2) * 16);
                    return c.create(x, d * 2);
                  },
                }),
                (f.Utf16LE = {
                  stringify: function (m) {
                    for (
                      var d = m.words, x = m.sigBytes, y = [], v = 0;
                      v < x;
                      v += 2
                    ) {
                      var E = p((d[v >>> 2] >>> (16 - (v % 4) * 8)) & 65535);
                      y.push(String.fromCharCode(E));
                    }
                    return y.join("");
                  },
                  parse: function (m) {
                    for (var d = m.length, x = [], y = 0; y < d; y++)
                      x[y >>> 1] |= p(m.charCodeAt(y) << (16 - (y % 2) * 16));
                    return c.create(x, d * 2);
                  },
                });
              function p(m) {
                return ((m << 8) & 4278255360) | ((m >>> 8) & 16711935);
              }
            })(),
            a.enc.Utf16
          );
        });
      })(au)),
    au.exports
  );
}
var ru = { exports: {} },
  s5 = ru.exports,
  uy;
function ur() {
  return (
    uy ||
      ((uy = 1),
      (function (n, i) {
        (function (a, s) {
          n.exports = s(Ye());
        })(s5, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.WordArray,
                f = s.enc;
              f.Base64 = {
                stringify: function (m) {
                  var d = m.words,
                    x = m.sigBytes,
                    y = this._map;
                  m.clamp();
                  for (var v = [], E = 0; E < x; E += 3)
                    for (
                      var b = (d[E >>> 2] >>> (24 - (E % 4) * 8)) & 255,
                        S =
                          (d[(E + 1) >>> 2] >>> (24 - ((E + 1) % 4) * 8)) & 255,
                        A =
                          (d[(E + 2) >>> 2] >>> (24 - ((E + 2) % 4) * 8)) & 255,
                        w = (b << 16) | (S << 8) | A,
                        C = 0;
                      C < 4 && E + C * 0.75 < x;
                      C++
                    )
                      v.push(y.charAt((w >>> (6 * (3 - C))) & 63));
                  var D = y.charAt(64);
                  if (D) for (; v.length % 4; ) v.push(D);
                  return v.join("");
                },
                parse: function (m) {
                  var d = m.length,
                    x = this._map,
                    y = this._reverseMap;
                  if (!y) {
                    y = this._reverseMap = [];
                    for (var v = 0; v < x.length; v++) y[x.charCodeAt(v)] = v;
                  }
                  var E = x.charAt(64);
                  if (E) {
                    var b = m.indexOf(E);
                    b !== -1 && (d = b);
                  }
                  return p(m, d, y);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              };
              function p(m, d, x) {
                for (var y = [], v = 0, E = 0; E < d; E++)
                  if (E % 4) {
                    var b = x[m.charCodeAt(E - 1)] << ((E % 4) * 2),
                      S = x[m.charCodeAt(E)] >>> (6 - (E % 4) * 2),
                      A = b | S;
                    (y[v >>> 2] |= A << (24 - (v % 4) * 8)), v++;
                  }
                return c.create(y, v);
              }
            })(),
            a.enc.Base64
          );
        });
      })(ru)),
    ru.exports
  );
}
var su = { exports: {} },
  o5 = su.exports,
  cy;
function l5() {
  return (
    cy ||
      ((cy = 1),
      (function (n, i) {
        (function (a, s) {
          n.exports = s(Ye());
        })(o5, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.WordArray,
                f = s.enc;
              f.Base64url = {
                stringify: function (m, d) {
                  d === void 0 && (d = !0);
                  var x = m.words,
                    y = m.sigBytes,
                    v = d ? this._safe_map : this._map;
                  m.clamp();
                  for (var E = [], b = 0; b < y; b += 3)
                    for (
                      var S = (x[b >>> 2] >>> (24 - (b % 4) * 8)) & 255,
                        A =
                          (x[(b + 1) >>> 2] >>> (24 - ((b + 1) % 4) * 8)) & 255,
                        w =
                          (x[(b + 2) >>> 2] >>> (24 - ((b + 2) % 4) * 8)) & 255,
                        C = (S << 16) | (A << 8) | w,
                        D = 0;
                      D < 4 && b + D * 0.75 < y;
                      D++
                    )
                      E.push(v.charAt((C >>> (6 * (3 - D))) & 63));
                  var R = v.charAt(64);
                  if (R) for (; E.length % 4; ) E.push(R);
                  return E.join("");
                },
                parse: function (m, d) {
                  d === void 0 && (d = !0);
                  var x = m.length,
                    y = d ? this._safe_map : this._map,
                    v = this._reverseMap;
                  if (!v) {
                    v = this._reverseMap = [];
                    for (var E = 0; E < y.length; E++) v[y.charCodeAt(E)] = E;
                  }
                  var b = y.charAt(64);
                  if (b) {
                    var S = m.indexOf(b);
                    S !== -1 && (x = S);
                  }
                  return p(m, x, v);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                _safe_map:
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
              };
              function p(m, d, x) {
                for (var y = [], v = 0, E = 0; E < d; E++)
                  if (E % 4) {
                    var b = x[m.charCodeAt(E - 1)] << ((E % 4) * 2),
                      S = x[m.charCodeAt(E)] >>> (6 - (E % 4) * 2),
                      A = b | S;
                    (y[v >>> 2] |= A << (24 - (v % 4) * 8)), v++;
                  }
                return c.create(y, v);
              }
            })(),
            a.enc.Base64url
          );
        });
      })(su)),
    su.exports
  );
}
var ou = { exports: {} },
  u5 = ou.exports,
  fy;
function cr() {
  return (
    fy ||
      ((fy = 1),
      (function (n, i) {
        (function (a, s) {
          n.exports = s(Ye());
        })(u5, function (a) {
          return (
            (function (s) {
              var l = a,
                c = l.lib,
                f = c.WordArray,
                p = c.Hasher,
                m = l.algo,
                d = [];
              (function () {
                for (var S = 0; S < 64; S++)
                  d[S] = (s.abs(s.sin(S + 1)) * 4294967296) | 0;
              })();
              var x = (m.MD5 = p.extend({
                _doReset: function () {
                  this._hash = new f.init([
                    1732584193, 4023233417, 2562383102, 271733878,
                  ]);
                },
                _doProcessBlock: function (S, A) {
                  for (var w = 0; w < 16; w++) {
                    var C = A + w,
                      D = S[C];
                    S[C] =
                      (((D << 8) | (D >>> 24)) & 16711935) |
                      (((D << 24) | (D >>> 8)) & 4278255360);
                  }
                  var R = this._hash.words,
                    M = S[A + 0],
                    L = S[A + 1],
                    _ = S[A + 2],
                    O = S[A + 3],
                    $ = S[A + 4],
                    z = S[A + 5],
                    j = S[A + 6],
                    Q = S[A + 7],
                    ee = S[A + 8],
                    oe = S[A + 9],
                    de = S[A + 10],
                    k = S[A + 11],
                    te = S[A + 12],
                    ie = S[A + 13],
                    me = S[A + 14],
                    xe = S[A + 15],
                    T = R[0],
                    N = R[1],
                    P = R[2],
                    Y = R[3];
                  (T = y(T, N, P, Y, M, 7, d[0])),
                    (Y = y(Y, T, N, P, L, 12, d[1])),
                    (P = y(P, Y, T, N, _, 17, d[2])),
                    (N = y(N, P, Y, T, O, 22, d[3])),
                    (T = y(T, N, P, Y, $, 7, d[4])),
                    (Y = y(Y, T, N, P, z, 12, d[5])),
                    (P = y(P, Y, T, N, j, 17, d[6])),
                    (N = y(N, P, Y, T, Q, 22, d[7])),
                    (T = y(T, N, P, Y, ee, 7, d[8])),
                    (Y = y(Y, T, N, P, oe, 12, d[9])),
                    (P = y(P, Y, T, N, de, 17, d[10])),
                    (N = y(N, P, Y, T, k, 22, d[11])),
                    (T = y(T, N, P, Y, te, 7, d[12])),
                    (Y = y(Y, T, N, P, ie, 12, d[13])),
                    (P = y(P, Y, T, N, me, 17, d[14])),
                    (N = y(N, P, Y, T, xe, 22, d[15])),
                    (T = v(T, N, P, Y, L, 5, d[16])),
                    (Y = v(Y, T, N, P, j, 9, d[17])),
                    (P = v(P, Y, T, N, k, 14, d[18])),
                    (N = v(N, P, Y, T, M, 20, d[19])),
                    (T = v(T, N, P, Y, z, 5, d[20])),
                    (Y = v(Y, T, N, P, de, 9, d[21])),
                    (P = v(P, Y, T, N, xe, 14, d[22])),
                    (N = v(N, P, Y, T, $, 20, d[23])),
                    (T = v(T, N, P, Y, oe, 5, d[24])),
                    (Y = v(Y, T, N, P, me, 9, d[25])),
                    (P = v(P, Y, T, N, O, 14, d[26])),
                    (N = v(N, P, Y, T, ee, 20, d[27])),
                    (T = v(T, N, P, Y, ie, 5, d[28])),
                    (Y = v(Y, T, N, P, _, 9, d[29])),
                    (P = v(P, Y, T, N, Q, 14, d[30])),
                    (N = v(N, P, Y, T, te, 20, d[31])),
                    (T = E(T, N, P, Y, z, 4, d[32])),
                    (Y = E(Y, T, N, P, ee, 11, d[33])),
                    (P = E(P, Y, T, N, k, 16, d[34])),
                    (N = E(N, P, Y, T, me, 23, d[35])),
                    (T = E(T, N, P, Y, L, 4, d[36])),
                    (Y = E(Y, T, N, P, $, 11, d[37])),
                    (P = E(P, Y, T, N, Q, 16, d[38])),
                    (N = E(N, P, Y, T, de, 23, d[39])),
                    (T = E(T, N, P, Y, ie, 4, d[40])),
                    (Y = E(Y, T, N, P, M, 11, d[41])),
                    (P = E(P, Y, T, N, O, 16, d[42])),
                    (N = E(N, P, Y, T, j, 23, d[43])),
                    (T = E(T, N, P, Y, oe, 4, d[44])),
                    (Y = E(Y, T, N, P, te, 11, d[45])),
                    (P = E(P, Y, T, N, xe, 16, d[46])),
                    (N = E(N, P, Y, T, _, 23, d[47])),
                    (T = b(T, N, P, Y, M, 6, d[48])),
                    (Y = b(Y, T, N, P, Q, 10, d[49])),
                    (P = b(P, Y, T, N, me, 15, d[50])),
                    (N = b(N, P, Y, T, z, 21, d[51])),
                    (T = b(T, N, P, Y, te, 6, d[52])),
                    (Y = b(Y, T, N, P, O, 10, d[53])),
                    (P = b(P, Y, T, N, de, 15, d[54])),
                    (N = b(N, P, Y, T, L, 21, d[55])),
                    (T = b(T, N, P, Y, ee, 6, d[56])),
                    (Y = b(Y, T, N, P, xe, 10, d[57])),
                    (P = b(P, Y, T, N, j, 15, d[58])),
                    (N = b(N, P, Y, T, ie, 21, d[59])),
                    (T = b(T, N, P, Y, $, 6, d[60])),
                    (Y = b(Y, T, N, P, k, 10, d[61])),
                    (P = b(P, Y, T, N, _, 15, d[62])),
                    (N = b(N, P, Y, T, oe, 21, d[63])),
                    (R[0] = (R[0] + T) | 0),
                    (R[1] = (R[1] + N) | 0),
                    (R[2] = (R[2] + P) | 0),
                    (R[3] = (R[3] + Y) | 0);
                },
                _doFinalize: function () {
                  var S = this._data,
                    A = S.words,
                    w = this._nDataBytes * 8,
                    C = S.sigBytes * 8;
                  A[C >>> 5] |= 128 << (24 - (C % 32));
                  var D = s.floor(w / 4294967296),
                    R = w;
                  (A[(((C + 64) >>> 9) << 4) + 15] =
                    (((D << 8) | (D >>> 24)) & 16711935) |
                    (((D << 24) | (D >>> 8)) & 4278255360)),
                    (A[(((C + 64) >>> 9) << 4) + 14] =
                      (((R << 8) | (R >>> 24)) & 16711935) |
                      (((R << 24) | (R >>> 8)) & 4278255360)),
                    (S.sigBytes = (A.length + 1) * 4),
                    this._process();
                  for (var M = this._hash, L = M.words, _ = 0; _ < 4; _++) {
                    var O = L[_];
                    L[_] =
                      (((O << 8) | (O >>> 24)) & 16711935) |
                      (((O << 24) | (O >>> 8)) & 4278255360);
                  }
                  return M;
                },
                clone: function () {
                  var S = p.clone.call(this);
                  return (S._hash = this._hash.clone()), S;
                },
              }));
              function y(S, A, w, C, D, R, M) {
                var L = S + ((A & w) | (~A & C)) + D + M;
                return ((L << R) | (L >>> (32 - R))) + A;
              }
              function v(S, A, w, C, D, R, M) {
                var L = S + ((A & C) | (w & ~C)) + D + M;
                return ((L << R) | (L >>> (32 - R))) + A;
              }
              function E(S, A, w, C, D, R, M) {
                var L = S + (A ^ w ^ C) + D + M;
                return ((L << R) | (L >>> (32 - R))) + A;
              }
              function b(S, A, w, C, D, R, M) {
                var L = S + (w ^ (A | ~C)) + D + M;
                return ((L << R) | (L >>> (32 - R))) + A;
              }
              (l.MD5 = p._createHelper(x)),
                (l.HmacMD5 = p._createHmacHelper(x));
            })(Math),
            a.MD5
          );
        });
      })(ou)),
    ou.exports
  );
}
var lu = { exports: {} },
  c5 = lu.exports,
  hy;
function Yg() {
  return (
    hy ||
      ((hy = 1),
      (function (n, i) {
        (function (a, s) {
          n.exports = s(Ye());
        })(c5, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.WordArray,
                f = l.Hasher,
                p = s.algo,
                m = [],
                d = (p.SHA1 = f.extend({
                  _doReset: function () {
                    this._hash = new c.init([
                      1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                    ]);
                  },
                  _doProcessBlock: function (x, y) {
                    for (
                      var v = this._hash.words,
                        E = v[0],
                        b = v[1],
                        S = v[2],
                        A = v[3],
                        w = v[4],
                        C = 0;
                      C < 80;
                      C++
                    ) {
                      if (C < 16) m[C] = x[y + C] | 0;
                      else {
                        var D = m[C - 3] ^ m[C - 8] ^ m[C - 14] ^ m[C - 16];
                        m[C] = (D << 1) | (D >>> 31);
                      }
                      var R = ((E << 5) | (E >>> 27)) + w + m[C];
                      C < 20
                        ? (R += ((b & S) | (~b & A)) + 1518500249)
                        : C < 40
                          ? (R += (b ^ S ^ A) + 1859775393)
                          : C < 60
                            ? (R += ((b & S) | (b & A) | (S & A)) - 1894007588)
                            : (R += (b ^ S ^ A) - 899497514),
                        (w = A),
                        (A = S),
                        (S = (b << 30) | (b >>> 2)),
                        (b = E),
                        (E = R);
                    }
                    (v[0] = (v[0] + E) | 0),
                      (v[1] = (v[1] + b) | 0),
                      (v[2] = (v[2] + S) | 0),
                      (v[3] = (v[3] + A) | 0),
                      (v[4] = (v[4] + w) | 0);
                  },
                  _doFinalize: function () {
                    var x = this._data,
                      y = x.words,
                      v = this._nDataBytes * 8,
                      E = x.sigBytes * 8;
                    return (
                      (y[E >>> 5] |= 128 << (24 - (E % 32))),
                      (y[(((E + 64) >>> 9) << 4) + 14] = Math.floor(
                        v / 4294967296,
                      )),
                      (y[(((E + 64) >>> 9) << 4) + 15] = v),
                      (x.sigBytes = y.length * 4),
                      this._process(),
                      this._hash
                    );
                  },
                  clone: function () {
                    var x = f.clone.call(this);
                    return (x._hash = this._hash.clone()), x;
                  },
                }));
              (s.SHA1 = f._createHelper(d)),
                (s.HmacSHA1 = f._createHmacHelper(d));
            })(),
            a.SHA1
          );
        });
      })(lu)),
    lu.exports
  );
}
var uu = { exports: {} },
  f5 = uu.exports,
  dy;
function Gh() {
  return (
    dy ||
      ((dy = 1),
      (function (n, i) {
        (function (a, s) {
          n.exports = s(Ye());
        })(f5, function (a) {
          return (
            (function (s) {
              var l = a,
                c = l.lib,
                f = c.WordArray,
                p = c.Hasher,
                m = l.algo,
                d = [],
                x = [];
              (function () {
                function E(w) {
                  for (var C = s.sqrt(w), D = 2; D <= C; D++)
                    if (!(w % D)) return !1;
                  return !0;
                }
                function b(w) {
                  return ((w - (w | 0)) * 4294967296) | 0;
                }
                for (var S = 2, A = 0; A < 64; )
                  E(S) &&
                    (A < 8 && (d[A] = b(s.pow(S, 1 / 2))),
                    (x[A] = b(s.pow(S, 1 / 3))),
                    A++),
                    S++;
              })();
              var y = [],
                v = (m.SHA256 = p.extend({
                  _doReset: function () {
                    this._hash = new f.init(d.slice(0));
                  },
                  _doProcessBlock: function (E, b) {
                    for (
                      var S = this._hash.words,
                        A = S[0],
                        w = S[1],
                        C = S[2],
                        D = S[3],
                        R = S[4],
                        M = S[5],
                        L = S[6],
                        _ = S[7],
                        O = 0;
                      O < 64;
                      O++
                    ) {
                      if (O < 16) y[O] = E[b + O] | 0;
                      else {
                        var $ = y[O - 15],
                          z =
                            (($ << 25) | ($ >>> 7)) ^
                            (($ << 14) | ($ >>> 18)) ^
                            ($ >>> 3),
                          j = y[O - 2],
                          Q =
                            ((j << 15) | (j >>> 17)) ^
                            ((j << 13) | (j >>> 19)) ^
                            (j >>> 10);
                        y[O] = z + y[O - 7] + Q + y[O - 16];
                      }
                      var ee = (R & M) ^ (~R & L),
                        oe = (A & w) ^ (A & C) ^ (w & C),
                        de =
                          ((A << 30) | (A >>> 2)) ^
                          ((A << 19) | (A >>> 13)) ^
                          ((A << 10) | (A >>> 22)),
                        k =
                          ((R << 26) | (R >>> 6)) ^
                          ((R << 21) | (R >>> 11)) ^
                          ((R << 7) | (R >>> 25)),
                        te = _ + k + ee + x[O] + y[O],
                        ie = de + oe;
                      (_ = L),
                        (L = M),
                        (M = R),
                        (R = (D + te) | 0),
                        (D = C),
                        (C = w),
                        (w = A),
                        (A = (te + ie) | 0);
                    }
                    (S[0] = (S[0] + A) | 0),
                      (S[1] = (S[1] + w) | 0),
                      (S[2] = (S[2] + C) | 0),
                      (S[3] = (S[3] + D) | 0),
                      (S[4] = (S[4] + R) | 0),
                      (S[5] = (S[5] + M) | 0),
                      (S[6] = (S[6] + L) | 0),
                      (S[7] = (S[7] + _) | 0);
                  },
                  _doFinalize: function () {
                    var E = this._data,
                      b = E.words,
                      S = this._nDataBytes * 8,
                      A = E.sigBytes * 8;
                    return (
                      (b[A >>> 5] |= 128 << (24 - (A % 32))),
                      (b[(((A + 64) >>> 9) << 4) + 14] = s.floor(
                        S / 4294967296,
                      )),
                      (b[(((A + 64) >>> 9) << 4) + 15] = S),
                      (E.sigBytes = b.length * 4),
                      this._process(),
                      this._hash
                    );
                  },
                  clone: function () {
                    var E = p.clone.call(this);
                    return (E._hash = this._hash.clone()), E;
                  },
                }));
              (l.SHA256 = p._createHelper(v)),
                (l.HmacSHA256 = p._createHmacHelper(v));
            })(Math),
            a.SHA256
          );
        });
      })(uu)),
    uu.exports
  );
}
var cu = { exports: {} },
  h5 = cu.exports,
  py;
function d5() {
  return (
    py ||
      ((py = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), Gh());
        })(h5, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.WordArray,
                f = s.algo,
                p = f.SHA256,
                m = (f.SHA224 = p.extend({
                  _doReset: function () {
                    this._hash = new c.init([
                      3238371032, 914150663, 812702999, 4144912697, 4290775857,
                      1750603025, 1694076839, 3204075428,
                    ]);
                  },
                  _doFinalize: function () {
                    var d = p._doFinalize.call(this);
                    return (d.sigBytes -= 4), d;
                  },
                }));
              (s.SHA224 = p._createHelper(m)),
                (s.HmacSHA224 = p._createHmacHelper(m));
            })(),
            a.SHA224
          );
        });
      })(cu)),
    cu.exports
  );
}
var fu = { exports: {} },
  p5 = fu.exports,
  my;
function Xg() {
  return (
    my ||
      ((my = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), oc());
        })(p5, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.Hasher,
                f = s.x64,
                p = f.Word,
                m = f.WordArray,
                d = s.algo;
              function x() {
                return p.create.apply(p, arguments);
              }
              var y = [
                  x(1116352408, 3609767458),
                  x(1899447441, 602891725),
                  x(3049323471, 3964484399),
                  x(3921009573, 2173295548),
                  x(961987163, 4081628472),
                  x(1508970993, 3053834265),
                  x(2453635748, 2937671579),
                  x(2870763221, 3664609560),
                  x(3624381080, 2734883394),
                  x(310598401, 1164996542),
                  x(607225278, 1323610764),
                  x(1426881987, 3590304994),
                  x(1925078388, 4068182383),
                  x(2162078206, 991336113),
                  x(2614888103, 633803317),
                  x(3248222580, 3479774868),
                  x(3835390401, 2666613458),
                  x(4022224774, 944711139),
                  x(264347078, 2341262773),
                  x(604807628, 2007800933),
                  x(770255983, 1495990901),
                  x(1249150122, 1856431235),
                  x(1555081692, 3175218132),
                  x(1996064986, 2198950837),
                  x(2554220882, 3999719339),
                  x(2821834349, 766784016),
                  x(2952996808, 2566594879),
                  x(3210313671, 3203337956),
                  x(3336571891, 1034457026),
                  x(3584528711, 2466948901),
                  x(113926993, 3758326383),
                  x(338241895, 168717936),
                  x(666307205, 1188179964),
                  x(773529912, 1546045734),
                  x(1294757372, 1522805485),
                  x(1396182291, 2643833823),
                  x(1695183700, 2343527390),
                  x(1986661051, 1014477480),
                  x(2177026350, 1206759142),
                  x(2456956037, 344077627),
                  x(2730485921, 1290863460),
                  x(2820302411, 3158454273),
                  x(3259730800, 3505952657),
                  x(3345764771, 106217008),
                  x(3516065817, 3606008344),
                  x(3600352804, 1432725776),
                  x(4094571909, 1467031594),
                  x(275423344, 851169720),
                  x(430227734, 3100823752),
                  x(506948616, 1363258195),
                  x(659060556, 3750685593),
                  x(883997877, 3785050280),
                  x(958139571, 3318307427),
                  x(1322822218, 3812723403),
                  x(1537002063, 2003034995),
                  x(1747873779, 3602036899),
                  x(1955562222, 1575990012),
                  x(2024104815, 1125592928),
                  x(2227730452, 2716904306),
                  x(2361852424, 442776044),
                  x(2428436474, 593698344),
                  x(2756734187, 3733110249),
                  x(3204031479, 2999351573),
                  x(3329325298, 3815920427),
                  x(3391569614, 3928383900),
                  x(3515267271, 566280711),
                  x(3940187606, 3454069534),
                  x(4118630271, 4000239992),
                  x(116418474, 1914138554),
                  x(174292421, 2731055270),
                  x(289380356, 3203993006),
                  x(460393269, 320620315),
                  x(685471733, 587496836),
                  x(852142971, 1086792851),
                  x(1017036298, 365543100),
                  x(1126000580, 2618297676),
                  x(1288033470, 3409855158),
                  x(1501505948, 4234509866),
                  x(1607167915, 987167468),
                  x(1816402316, 1246189591),
                ],
                v = [];
              (function () {
                for (var b = 0; b < 80; b++) v[b] = x();
              })();
              var E = (d.SHA512 = c.extend({
                _doReset: function () {
                  this._hash = new m.init([
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
                      w = A[0],
                      C = A[1],
                      D = A[2],
                      R = A[3],
                      M = A[4],
                      L = A[5],
                      _ = A[6],
                      O = A[7],
                      $ = w.high,
                      z = w.low,
                      j = C.high,
                      Q = C.low,
                      ee = D.high,
                      oe = D.low,
                      de = R.high,
                      k = R.low,
                      te = M.high,
                      ie = M.low,
                      me = L.high,
                      xe = L.low,
                      T = _.high,
                      N = _.low,
                      P = O.high,
                      Y = O.low,
                      ue = $,
                      pe = z,
                      Ce = j,
                      be = Q,
                      Qe = ee,
                      tn = oe,
                      ri = de,
                      st = k,
                      Et = te,
                      ft = ie,
                      si = me,
                      Ht = xe,
                      Zi = T,
                      oi = N,
                      li = P,
                      Kn = Y,
                      Vt = 0;
                    Vt < 80;
                    Vt++
                  ) {
                    var Gt,
                      _n,
                      at = v[Vt];
                    if (Vt < 16)
                      (_n = at.high = b[S + Vt * 2] | 0),
                        (Gt = at.low = b[S + Vt * 2 + 1] | 0);
                    else {
                      var ui = v[Vt - 15],
                        Tn = ui.high,
                        Rn = ui.low,
                        Jt =
                          ((Tn >>> 1) | (Rn << 31)) ^
                          ((Tn >>> 8) | (Rn << 24)) ^
                          (Tn >>> 7),
                        nn =
                          ((Rn >>> 1) | (Tn << 31)) ^
                          ((Rn >>> 8) | (Tn << 24)) ^
                          ((Rn >>> 7) | (Tn << 25)),
                        Qi = v[Vt - 2],
                        yn = Qi.high,
                        Si = Qi.low,
                        Kt =
                          ((yn >>> 19) | (Si << 13)) ^
                          ((yn << 3) | (Si >>> 29)) ^
                          (yn >>> 6),
                        Ot =
                          ((Si >>> 19) | (yn << 13)) ^
                          ((Si << 3) | (yn >>> 29)) ^
                          ((Si >>> 6) | (yn << 26)),
                        an = v[Vt - 7],
                        Nt = an.high,
                        cs = an.low,
                        Ma = v[Vt - 16],
                        $i = Ma.high,
                        ci = Ma.low;
                      (Gt = nn + cs),
                        (_n = Jt + Nt + (Gt >>> 0 < nn >>> 0 ? 1 : 0)),
                        (Gt = Gt + Ot),
                        (_n = _n + Kt + (Gt >>> 0 < Ot >>> 0 ? 1 : 0)),
                        (Gt = Gt + ci),
                        (_n = _n + $i + (Gt >>> 0 < ci >>> 0 ? 1 : 0)),
                        (at.high = _n),
                        (at.low = Gt);
                    }
                    var fi = (Et & si) ^ (~Et & Zi),
                      Zn = (ft & Ht) ^ (~ft & oi),
                      Qn = (ue & Ce) ^ (ue & Qe) ^ (Ce & Qe),
                      Ci = (pe & be) ^ (pe & tn) ^ (be & tn),
                      Di =
                        ((ue >>> 28) | (pe << 4)) ^
                        ((ue << 30) | (pe >>> 2)) ^
                        ((ue << 25) | (pe >>> 7)),
                      Oa =
                        ((pe >>> 28) | (ue << 4)) ^
                        ((pe << 30) | (ue >>> 2)) ^
                        ((pe << 25) | (ue >>> 7)),
                      Bi =
                        ((Et >>> 14) | (ft << 18)) ^
                        ((Et >>> 18) | (ft << 14)) ^
                        ((Et << 23) | (ft >>> 9)),
                      hi =
                        ((ft >>> 14) | (Et << 18)) ^
                        ((ft >>> 18) | (Et << 14)) ^
                        ((ft << 23) | (Et >>> 9)),
                      di = y[Vt],
                      fs = di.high,
                      U = di.low,
                      V = Kn + hi,
                      K = li + Bi + (V >>> 0 < Kn >>> 0 ? 1 : 0),
                      V = V + Zn,
                      K = K + fi + (V >>> 0 < Zn >>> 0 ? 1 : 0),
                      V = V + U,
                      K = K + fs + (V >>> 0 < U >>> 0 ? 1 : 0),
                      V = V + Gt,
                      K = K + _n + (V >>> 0 < Gt >>> 0 ? 1 : 0),
                      se = Oa + Ci,
                      ce = Di + Qn + (se >>> 0 < Oa >>> 0 ? 1 : 0);
                    (li = Zi),
                      (Kn = oi),
                      (Zi = si),
                      (oi = Ht),
                      (si = Et),
                      (Ht = ft),
                      (ft = (st + V) | 0),
                      (Et = (ri + K + (ft >>> 0 < st >>> 0 ? 1 : 0)) | 0),
                      (ri = Qe),
                      (st = tn),
                      (Qe = Ce),
                      (tn = be),
                      (Ce = ue),
                      (be = pe),
                      (pe = (V + se) | 0),
                      (ue = (K + ce + (pe >>> 0 < V >>> 0 ? 1 : 0)) | 0);
                  }
                  (z = w.low = z + pe),
                    (w.high = $ + ue + (z >>> 0 < pe >>> 0 ? 1 : 0)),
                    (Q = C.low = Q + be),
                    (C.high = j + Ce + (Q >>> 0 < be >>> 0 ? 1 : 0)),
                    (oe = D.low = oe + tn),
                    (D.high = ee + Qe + (oe >>> 0 < tn >>> 0 ? 1 : 0)),
                    (k = R.low = k + st),
                    (R.high = de + ri + (k >>> 0 < st >>> 0 ? 1 : 0)),
                    (ie = M.low = ie + ft),
                    (M.high = te + Et + (ie >>> 0 < ft >>> 0 ? 1 : 0)),
                    (xe = L.low = xe + Ht),
                    (L.high = me + si + (xe >>> 0 < Ht >>> 0 ? 1 : 0)),
                    (N = _.low = N + oi),
                    (_.high = T + Zi + (N >>> 0 < oi >>> 0 ? 1 : 0)),
                    (Y = O.low = Y + Kn),
                    (O.high = P + li + (Y >>> 0 < Kn >>> 0 ? 1 : 0));
                },
                _doFinalize: function () {
                  var b = this._data,
                    S = b.words,
                    A = this._nDataBytes * 8,
                    w = b.sigBytes * 8;
                  (S[w >>> 5] |= 128 << (24 - (w % 32))),
                    (S[(((w + 128) >>> 10) << 5) + 30] = Math.floor(
                      A / 4294967296,
                    )),
                    (S[(((w + 128) >>> 10) << 5) + 31] = A),
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
              (s.SHA512 = c._createHelper(E)),
                (s.HmacSHA512 = c._createHmacHelper(E));
            })(),
            a.SHA512
          );
        });
      })(fu)),
    fu.exports
  );
}
var hu = { exports: {} },
  m5 = hu.exports,
  xy;
function x5() {
  return (
    xy ||
      ((xy = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), oc(), Xg());
        })(m5, function (a) {
          return (
            (function () {
              var s = a,
                l = s.x64,
                c = l.Word,
                f = l.WordArray,
                p = s.algo,
                m = p.SHA512,
                d = (p.SHA384 = m.extend({
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
                    var x = m._doFinalize.call(this);
                    return (x.sigBytes -= 16), x;
                  },
                }));
              (s.SHA384 = m._createHelper(d)),
                (s.HmacSHA384 = m._createHmacHelper(d));
            })(),
            a.SHA384
          );
        });
      })(hu)),
    hu.exports
  );
}
var du = { exports: {} },
  y5 = du.exports,
  yy;
function v5() {
  return (
    yy ||
      ((yy = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), oc());
        })(y5, function (a) {
          return (
            (function (s) {
              var l = a,
                c = l.lib,
                f = c.WordArray,
                p = c.Hasher,
                m = l.x64,
                d = m.Word,
                x = l.algo,
                y = [],
                v = [],
                E = [];
              (function () {
                for (var A = 1, w = 0, C = 0; C < 24; C++) {
                  y[A + 5 * w] = (((C + 1) * (C + 2)) / 2) % 64;
                  var D = w % 5,
                    R = (2 * A + 3 * w) % 5;
                  (A = D), (w = R);
                }
                for (var A = 0; A < 5; A++)
                  for (var w = 0; w < 5; w++)
                    v[A + 5 * w] = w + ((2 * A + 3 * w) % 5) * 5;
                for (var M = 1, L = 0; L < 24; L++) {
                  for (var _ = 0, O = 0, $ = 0; $ < 7; $++) {
                    if (M & 1) {
                      var z = (1 << $) - 1;
                      z < 32 ? (O ^= 1 << z) : (_ ^= 1 << (z - 32));
                    }
                    M & 128 ? (M = (M << 1) ^ 113) : (M <<= 1);
                  }
                  E[L] = d.create(_, O);
                }
              })();
              var b = [];
              (function () {
                for (var A = 0; A < 25; A++) b[A] = d.create();
              })();
              var S = (x.SHA3 = p.extend({
                cfg: p.cfg.extend({ outputLength: 512 }),
                _doReset: function () {
                  for (var A = (this._state = []), w = 0; w < 25; w++)
                    A[w] = new d.init();
                  this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
                },
                _doProcessBlock: function (A, w) {
                  for (
                    var C = this._state, D = this.blockSize / 2, R = 0;
                    R < D;
                    R++
                  ) {
                    var M = A[w + 2 * R],
                      L = A[w + 2 * R + 1];
                    (M =
                      (((M << 8) | (M >>> 24)) & 16711935) |
                      (((M << 24) | (M >>> 8)) & 4278255360)),
                      (L =
                        (((L << 8) | (L >>> 24)) & 16711935) |
                        (((L << 24) | (L >>> 8)) & 4278255360));
                    var _ = C[R];
                    (_.high ^= L), (_.low ^= M);
                  }
                  for (var O = 0; O < 24; O++) {
                    for (var $ = 0; $ < 5; $++) {
                      for (var z = 0, j = 0, Q = 0; Q < 5; Q++) {
                        var _ = C[$ + 5 * Q];
                        (z ^= _.high), (j ^= _.low);
                      }
                      var ee = b[$];
                      (ee.high = z), (ee.low = j);
                    }
                    for (var $ = 0; $ < 5; $++)
                      for (
                        var oe = b[($ + 4) % 5],
                          de = b[($ + 1) % 5],
                          k = de.high,
                          te = de.low,
                          z = oe.high ^ ((k << 1) | (te >>> 31)),
                          j = oe.low ^ ((te << 1) | (k >>> 31)),
                          Q = 0;
                        Q < 5;
                        Q++
                      ) {
                        var _ = C[$ + 5 * Q];
                        (_.high ^= z), (_.low ^= j);
                      }
                    for (var ie = 1; ie < 25; ie++) {
                      var z,
                        j,
                        _ = C[ie],
                        me = _.high,
                        xe = _.low,
                        T = y[ie];
                      T < 32
                        ? ((z = (me << T) | (xe >>> (32 - T))),
                          (j = (xe << T) | (me >>> (32 - T))))
                        : ((z = (xe << (T - 32)) | (me >>> (64 - T))),
                          (j = (me << (T - 32)) | (xe >>> (64 - T))));
                      var N = b[v[ie]];
                      (N.high = z), (N.low = j);
                    }
                    var P = b[0],
                      Y = C[0];
                    (P.high = Y.high), (P.low = Y.low);
                    for (var $ = 0; $ < 5; $++)
                      for (var Q = 0; Q < 5; Q++) {
                        var ie = $ + 5 * Q,
                          _ = C[ie],
                          ue = b[ie],
                          pe = b[(($ + 1) % 5) + 5 * Q],
                          Ce = b[(($ + 2) % 5) + 5 * Q];
                        (_.high = ue.high ^ (~pe.high & Ce.high)),
                          (_.low = ue.low ^ (~pe.low & Ce.low));
                      }
                    var _ = C[0],
                      be = E[O];
                    (_.high ^= be.high), (_.low ^= be.low);
                  }
                },
                _doFinalize: function () {
                  var A = this._data,
                    w = A.words;
                  this._nDataBytes * 8;
                  var C = A.sigBytes * 8,
                    D = this.blockSize * 32;
                  (w[C >>> 5] |= 1 << (24 - (C % 32))),
                    (w[((s.ceil((C + 1) / D) * D) >>> 5) - 1] |= 128),
                    (A.sigBytes = w.length * 4),
                    this._process();
                  for (
                    var R = this._state,
                      M = this.cfg.outputLength / 8,
                      L = M / 8,
                      _ = [],
                      O = 0;
                    O < L;
                    O++
                  ) {
                    var $ = R[O],
                      z = $.high,
                      j = $.low;
                    (z =
                      (((z << 8) | (z >>> 24)) & 16711935) |
                      (((z << 24) | (z >>> 8)) & 4278255360)),
                      (j =
                        (((j << 8) | (j >>> 24)) & 16711935) |
                        (((j << 24) | (j >>> 8)) & 4278255360)),
                      _.push(j),
                      _.push(z);
                  }
                  return new f.init(_, M);
                },
                clone: function () {
                  for (
                    var A = p.clone.call(this),
                      w = (A._state = this._state.slice(0)),
                      C = 0;
                    C < 25;
                    C++
                  )
                    w[C] = w[C].clone();
                  return A;
                },
              }));
              (l.SHA3 = p._createHelper(S)),
                (l.HmacSHA3 = p._createHmacHelper(S));
            })(Math),
            a.SHA3
          );
        });
      })(du)),
    du.exports
  );
}
var pu = { exports: {} },
  g5 = pu.exports,
  vy;
function E5() {
  return (
    vy ||
      ((vy = 1),
      (function (n, i) {
        (function (a, s) {
          n.exports = s(Ye());
        })(g5, function (a) {
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
                p = c.Hasher,
                m = l.algo,
                d = f.create([
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4,
                  13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4,
                  9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8,
                  12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10,
                  14, 1, 3, 8, 11, 6, 15, 13,
                ]),
                x = f.create([
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
                E = f.create([
                  0, 1518500249, 1859775393, 2400959708, 2840853838,
                ]),
                b = f.create([
                  1352829926, 1548603684, 1836072691, 2053994217, 0,
                ]),
                S = (m.RIPEMD160 = p.extend({
                  _doReset: function () {
                    this._hash = f.create([
                      1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                    ]);
                  },
                  _doProcessBlock: function (L, _) {
                    for (var O = 0; O < 16; O++) {
                      var $ = _ + O,
                        z = L[$];
                      L[$] =
                        (((z << 8) | (z >>> 24)) & 16711935) |
                        (((z << 24) | (z >>> 8)) & 4278255360);
                    }
                    var j = this._hash.words,
                      Q = E.words,
                      ee = b.words,
                      oe = d.words,
                      de = x.words,
                      k = y.words,
                      te = v.words,
                      ie,
                      me,
                      xe,
                      T,
                      N,
                      P,
                      Y,
                      ue,
                      pe,
                      Ce;
                    (P = ie = j[0]),
                      (Y = me = j[1]),
                      (ue = xe = j[2]),
                      (pe = T = j[3]),
                      (Ce = N = j[4]);
                    for (var be, O = 0; O < 80; O += 1)
                      (be = (ie + L[_ + oe[O]]) | 0),
                        O < 16
                          ? (be += A(me, xe, T) + Q[0])
                          : O < 32
                            ? (be += w(me, xe, T) + Q[1])
                            : O < 48
                              ? (be += C(me, xe, T) + Q[2])
                              : O < 64
                                ? (be += D(me, xe, T) + Q[3])
                                : (be += R(me, xe, T) + Q[4]),
                        (be = be | 0),
                        (be = M(be, k[O])),
                        (be = (be + N) | 0),
                        (ie = N),
                        (N = T),
                        (T = M(xe, 10)),
                        (xe = me),
                        (me = be),
                        (be = (P + L[_ + de[O]]) | 0),
                        O < 16
                          ? (be += R(Y, ue, pe) + ee[0])
                          : O < 32
                            ? (be += D(Y, ue, pe) + ee[1])
                            : O < 48
                              ? (be += C(Y, ue, pe) + ee[2])
                              : O < 64
                                ? (be += w(Y, ue, pe) + ee[3])
                                : (be += A(Y, ue, pe) + ee[4]),
                        (be = be | 0),
                        (be = M(be, te[O])),
                        (be = (be + Ce) | 0),
                        (P = Ce),
                        (Ce = pe),
                        (pe = M(ue, 10)),
                        (ue = Y),
                        (Y = be);
                    (be = (j[1] + xe + pe) | 0),
                      (j[1] = (j[2] + T + Ce) | 0),
                      (j[2] = (j[3] + N + P) | 0),
                      (j[3] = (j[4] + ie + Y) | 0),
                      (j[4] = (j[0] + me + ue) | 0),
                      (j[0] = be);
                  },
                  _doFinalize: function () {
                    var L = this._data,
                      _ = L.words,
                      O = this._nDataBytes * 8,
                      $ = L.sigBytes * 8;
                    (_[$ >>> 5] |= 128 << (24 - ($ % 32))),
                      (_[((($ + 64) >>> 9) << 4) + 14] =
                        (((O << 8) | (O >>> 24)) & 16711935) |
                        (((O << 24) | (O >>> 8)) & 4278255360)),
                      (L.sigBytes = (_.length + 1) * 4),
                      this._process();
                    for (var z = this._hash, j = z.words, Q = 0; Q < 5; Q++) {
                      var ee = j[Q];
                      j[Q] =
                        (((ee << 8) | (ee >>> 24)) & 16711935) |
                        (((ee << 24) | (ee >>> 8)) & 4278255360);
                    }
                    return z;
                  },
                  clone: function () {
                    var L = p.clone.call(this);
                    return (L._hash = this._hash.clone()), L;
                  },
                }));
              function A(L, _, O) {
                return L ^ _ ^ O;
              }
              function w(L, _, O) {
                return (L & _) | (~L & O);
              }
              function C(L, _, O) {
                return (L | ~_) ^ O;
              }
              function D(L, _, O) {
                return (L & O) | (_ & ~O);
              }
              function R(L, _, O) {
                return L ^ (_ | ~O);
              }
              function M(L, _) {
                return (L << _) | (L >>> (32 - _));
              }
              (l.RIPEMD160 = p._createHelper(S)),
                (l.HmacRIPEMD160 = p._createHmacHelper(S));
            })(),
            a.RIPEMD160
          );
        });
      })(pu)),
    pu.exports
  );
}
var mu = { exports: {} },
  b5 = mu.exports,
  gy;
function Kh() {
  return (
    gy ||
      ((gy = 1),
      (function (n, i) {
        (function (a, s) {
          n.exports = s(Ye());
        })(b5, function (a) {
          (function () {
            var s = a,
              l = s.lib,
              c = l.Base,
              f = s.enc,
              p = f.Utf8,
              m = s.algo;
            m.HMAC = c.extend({
              init: function (d, x) {
                (d = this._hasher = new d.init()),
                  typeof x == "string" && (x = p.parse(x));
                var y = d.blockSize,
                  v = y * 4;
                x.sigBytes > v && (x = d.finalize(x)), x.clamp();
                for (
                  var E = (this._oKey = x.clone()),
                    b = (this._iKey = x.clone()),
                    S = E.words,
                    A = b.words,
                    w = 0;
                  w < y;
                  w++
                )
                  (S[w] ^= 1549556828), (A[w] ^= 909522486);
                (E.sigBytes = b.sigBytes = v), this.reset();
              },
              reset: function () {
                var d = this._hasher;
                d.reset(), d.update(this._iKey);
              },
              update: function (d) {
                return this._hasher.update(d), this;
              },
              finalize: function (d) {
                var x = this._hasher,
                  y = x.finalize(d);
                x.reset();
                var v = x.finalize(this._oKey.clone().concat(y));
                return v;
              },
            });
          })();
        });
      })(mu)),
    mu.exports
  );
}
var xu = { exports: {} },
  A5 = xu.exports,
  Ey;
function S5() {
  return (
    Ey ||
      ((Ey = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), Gh(), Kh());
        })(A5, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.Base,
                f = l.WordArray,
                p = s.algo,
                m = p.SHA256,
                d = p.HMAC,
                x = (p.PBKDF2 = c.extend({
                  cfg: c.extend({
                    keySize: 128 / 32,
                    hasher: m,
                    iterations: 25e4,
                  }),
                  init: function (y) {
                    this.cfg = this.cfg.extend(y);
                  },
                  compute: function (y, v) {
                    for (
                      var E = this.cfg,
                        b = d.create(E.hasher, y),
                        S = f.create(),
                        A = f.create([1]),
                        w = S.words,
                        C = A.words,
                        D = E.keySize,
                        R = E.iterations;
                      w.length < D;

                    ) {
                      var M = b.update(v).finalize(A);
                      b.reset();
                      for (
                        var L = M.words, _ = L.length, O = M, $ = 1;
                        $ < R;
                        $++
                      ) {
                        (O = b.finalize(O)), b.reset();
                        for (var z = O.words, j = 0; j < _; j++) L[j] ^= z[j];
                      }
                      S.concat(M), C[0]++;
                    }
                    return (S.sigBytes = D * 4), S;
                  },
                }));
              s.PBKDF2 = function (y, v, E) {
                return x.create(E).compute(y, v);
              };
            })(),
            a.PBKDF2
          );
        });
      })(xu)),
    xu.exports
  );
}
var yu = { exports: {} },
  C5 = yu.exports,
  by;
function Ra() {
  return (
    by ||
      ((by = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), Yg(), Kh());
        })(C5, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.Base,
                f = l.WordArray,
                p = s.algo,
                m = p.MD5,
                d = (p.EvpKDF = c.extend({
                  cfg: c.extend({
                    keySize: 128 / 32,
                    hasher: m,
                    iterations: 1,
                  }),
                  init: function (x) {
                    this.cfg = this.cfg.extend(x);
                  },
                  compute: function (x, y) {
                    for (
                      var v,
                        E = this.cfg,
                        b = E.hasher.create(),
                        S = f.create(),
                        A = S.words,
                        w = E.keySize,
                        C = E.iterations;
                      A.length < w;

                    ) {
                      v && b.update(v),
                        (v = b.update(x).finalize(y)),
                        b.reset();
                      for (var D = 1; D < C; D++)
                        (v = b.finalize(v)), b.reset();
                      S.concat(v);
                    }
                    return (S.sigBytes = w * 4), S;
                  },
                }));
              s.EvpKDF = function (x, y, v) {
                return d.create(v).compute(x, y);
              };
            })(),
            a.EvpKDF
          );
        });
      })(yu)),
    yu.exports
  );
}
var vu = { exports: {} },
  D5 = vu.exports,
  Ay;
function Ut() {
  return (
    Ay ||
      ((Ay = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), Ra());
        })(D5, function (a) {
          a.lib.Cipher ||
            (function (s) {
              var l = a,
                c = l.lib,
                f = c.Base,
                p = c.WordArray,
                m = c.BufferedBlockAlgorithm,
                d = l.enc;
              d.Utf8;
              var x = d.Base64,
                y = l.algo,
                v = y.EvpKDF,
                E = (c.Cipher = m.extend({
                  cfg: f.extend(),
                  createEncryptor: function (z, j) {
                    return this.create(this._ENC_XFORM_MODE, z, j);
                  },
                  createDecryptor: function (z, j) {
                    return this.create(this._DEC_XFORM_MODE, z, j);
                  },
                  init: function (z, j, Q) {
                    (this.cfg = this.cfg.extend(Q)),
                      (this._xformMode = z),
                      (this._key = j),
                      this.reset();
                  },
                  reset: function () {
                    m.reset.call(this), this._doReset();
                  },
                  process: function (z) {
                    return this._append(z), this._process();
                  },
                  finalize: function (z) {
                    z && this._append(z);
                    var j = this._doFinalize();
                    return j;
                  },
                  keySize: 128 / 32,
                  ivSize: 128 / 32,
                  _ENC_XFORM_MODE: 1,
                  _DEC_XFORM_MODE: 2,
                  _createHelper: (function () {
                    function z(j) {
                      return typeof j == "string" ? $ : L;
                    }
                    return function (j) {
                      return {
                        encrypt: function (Q, ee, oe) {
                          return z(ee).encrypt(j, Q, ee, oe);
                        },
                        decrypt: function (Q, ee, oe) {
                          return z(ee).decrypt(j, Q, ee, oe);
                        },
                      };
                    };
                  })(),
                }));
              c.StreamCipher = E.extend({
                _doFinalize: function () {
                  var z = this._process(!0);
                  return z;
                },
                blockSize: 1,
              });
              var b = (l.mode = {}),
                S = (c.BlockCipherMode = f.extend({
                  createEncryptor: function (z, j) {
                    return this.Encryptor.create(z, j);
                  },
                  createDecryptor: function (z, j) {
                    return this.Decryptor.create(z, j);
                  },
                  init: function (z, j) {
                    (this._cipher = z), (this._iv = j);
                  },
                })),
                A = (b.CBC = (function () {
                  var z = S.extend();
                  (z.Encryptor = z.extend({
                    processBlock: function (Q, ee) {
                      var oe = this._cipher,
                        de = oe.blockSize;
                      j.call(this, Q, ee, de),
                        oe.encryptBlock(Q, ee),
                        (this._prevBlock = Q.slice(ee, ee + de));
                    },
                  })),
                    (z.Decryptor = z.extend({
                      processBlock: function (Q, ee) {
                        var oe = this._cipher,
                          de = oe.blockSize,
                          k = Q.slice(ee, ee + de);
                        oe.decryptBlock(Q, ee),
                          j.call(this, Q, ee, de),
                          (this._prevBlock = k);
                      },
                    }));
                  function j(Q, ee, oe) {
                    var de,
                      k = this._iv;
                    k ? ((de = k), (this._iv = s)) : (de = this._prevBlock);
                    for (var te = 0; te < oe; te++) Q[ee + te] ^= de[te];
                  }
                  return z;
                })()),
                w = (l.pad = {}),
                C = (w.Pkcs7 = {
                  pad: function (z, j) {
                    for (
                      var Q = j * 4,
                        ee = Q - (z.sigBytes % Q),
                        oe = (ee << 24) | (ee << 16) | (ee << 8) | ee,
                        de = [],
                        k = 0;
                      k < ee;
                      k += 4
                    )
                      de.push(oe);
                    var te = p.create(de, ee);
                    z.concat(te);
                  },
                  unpad: function (z) {
                    var j = z.words[(z.sigBytes - 1) >>> 2] & 255;
                    z.sigBytes -= j;
                  },
                });
              c.BlockCipher = E.extend({
                cfg: E.cfg.extend({ mode: A, padding: C }),
                reset: function () {
                  var z;
                  E.reset.call(this);
                  var j = this.cfg,
                    Q = j.iv,
                    ee = j.mode;
                  this._xformMode == this._ENC_XFORM_MODE
                    ? (z = ee.createEncryptor)
                    : ((z = ee.createDecryptor), (this._minBufferSize = 1)),
                    this._mode && this._mode.__creator == z
                      ? this._mode.init(this, Q && Q.words)
                      : ((this._mode = z.call(ee, this, Q && Q.words)),
                        (this._mode.__creator = z));
                },
                _doProcessBlock: function (z, j) {
                  this._mode.processBlock(z, j);
                },
                _doFinalize: function () {
                  var z,
                    j = this.cfg.padding;
                  return (
                    this._xformMode == this._ENC_XFORM_MODE
                      ? (j.pad(this._data, this.blockSize),
                        (z = this._process(!0)))
                      : ((z = this._process(!0)), j.unpad(z)),
                    z
                  );
                },
                blockSize: 128 / 32,
              });
              var D = (c.CipherParams = f.extend({
                  init: function (z) {
                    this.mixIn(z);
                  },
                  toString: function (z) {
                    return (z || this.formatter).stringify(this);
                  },
                })),
                R = (l.format = {}),
                M = (R.OpenSSL = {
                  stringify: function (z) {
                    var j,
                      Q = z.ciphertext,
                      ee = z.salt;
                    return (
                      ee
                        ? (j = p
                            .create([1398893684, 1701076831])
                            .concat(ee)
                            .concat(Q))
                        : (j = Q),
                      j.toString(x)
                    );
                  },
                  parse: function (z) {
                    var j,
                      Q = x.parse(z),
                      ee = Q.words;
                    return (
                      ee[0] == 1398893684 &&
                        ee[1] == 1701076831 &&
                        ((j = p.create(ee.slice(2, 4))),
                        ee.splice(0, 4),
                        (Q.sigBytes -= 16)),
                      D.create({ ciphertext: Q, salt: j })
                    );
                  },
                }),
                L = (c.SerializableCipher = f.extend({
                  cfg: f.extend({ format: M }),
                  encrypt: function (z, j, Q, ee) {
                    ee = this.cfg.extend(ee);
                    var oe = z.createEncryptor(Q, ee),
                      de = oe.finalize(j),
                      k = oe.cfg;
                    return D.create({
                      ciphertext: de,
                      key: Q,
                      iv: k.iv,
                      algorithm: z,
                      mode: k.mode,
                      padding: k.padding,
                      blockSize: z.blockSize,
                      formatter: ee.format,
                    });
                  },
                  decrypt: function (z, j, Q, ee) {
                    (ee = this.cfg.extend(ee)), (j = this._parse(j, ee.format));
                    var oe = z.createDecryptor(Q, ee).finalize(j.ciphertext);
                    return oe;
                  },
                  _parse: function (z, j) {
                    return typeof z == "string" ? j.parse(z, this) : z;
                  },
                })),
                _ = (l.kdf = {}),
                O = (_.OpenSSL = {
                  execute: function (z, j, Q, ee, oe) {
                    if ((ee || (ee = p.random(64 / 8)), oe))
                      var de = v
                        .create({ keySize: j + Q, hasher: oe })
                        .compute(z, ee);
                    else var de = v.create({ keySize: j + Q }).compute(z, ee);
                    var k = p.create(de.words.slice(j), Q * 4);
                    return (
                      (de.sigBytes = j * 4),
                      D.create({ key: de, iv: k, salt: ee })
                    );
                  },
                }),
                $ = (c.PasswordBasedCipher = L.extend({
                  cfg: L.cfg.extend({ kdf: O }),
                  encrypt: function (z, j, Q, ee) {
                    ee = this.cfg.extend(ee);
                    var oe = ee.kdf.execute(
                      Q,
                      z.keySize,
                      z.ivSize,
                      ee.salt,
                      ee.hasher,
                    );
                    ee.iv = oe.iv;
                    var de = L.encrypt.call(this, z, j, oe.key, ee);
                    return de.mixIn(oe), de;
                  },
                  decrypt: function (z, j, Q, ee) {
                    (ee = this.cfg.extend(ee)), (j = this._parse(j, ee.format));
                    var oe = ee.kdf.execute(
                      Q,
                      z.keySize,
                      z.ivSize,
                      j.salt,
                      ee.hasher,
                    );
                    ee.iv = oe.iv;
                    var de = L.decrypt.call(this, z, j, oe.key, ee);
                    return de;
                  },
                }));
            })();
        });
      })(vu)),
    vu.exports
  );
}
var gu = { exports: {} },
  B5 = gu.exports,
  Sy;
function _5() {
  return (
    Sy ||
      ((Sy = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), Ut());
        })(B5, function (a) {
          return (
            (a.mode.CFB = (function () {
              var s = a.lib.BlockCipherMode.extend();
              (s.Encryptor = s.extend({
                processBlock: function (c, f) {
                  var p = this._cipher,
                    m = p.blockSize;
                  l.call(this, c, f, m, p),
                    (this._prevBlock = c.slice(f, f + m));
                },
              })),
                (s.Decryptor = s.extend({
                  processBlock: function (c, f) {
                    var p = this._cipher,
                      m = p.blockSize,
                      d = c.slice(f, f + m);
                    l.call(this, c, f, m, p), (this._prevBlock = d);
                  },
                }));
              function l(c, f, p, m) {
                var d,
                  x = this._iv;
                x
                  ? ((d = x.slice(0)), (this._iv = void 0))
                  : (d = this._prevBlock),
                  m.encryptBlock(d, 0);
                for (var y = 0; y < p; y++) c[f + y] ^= d[y];
              }
              return s;
            })()),
            a.mode.CFB
          );
        });
      })(gu)),
    gu.exports
  );
}
var Eu = { exports: {} },
  T5 = Eu.exports,
  Cy;
function R5() {
  return (
    Cy ||
      ((Cy = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), Ut());
        })(T5, function (a) {
          return (
            (a.mode.CTR = (function () {
              var s = a.lib.BlockCipherMode.extend(),
                l = (s.Encryptor = s.extend({
                  processBlock: function (c, f) {
                    var p = this._cipher,
                      m = p.blockSize,
                      d = this._iv,
                      x = this._counter;
                    d &&
                      ((x = this._counter = d.slice(0)), (this._iv = void 0));
                    var y = x.slice(0);
                    p.encryptBlock(y, 0), (x[m - 1] = (x[m - 1] + 1) | 0);
                    for (var v = 0; v < m; v++) c[f + v] ^= y[v];
                  },
                }));
              return (s.Decryptor = l), s;
            })()),
            a.mode.CTR
          );
        });
      })(Eu)),
    Eu.exports
  );
}
var bu = { exports: {} },
  w5 = bu.exports,
  Dy;
function M5() {
  return (
    Dy ||
      ((Dy = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), Ut());
        })(w5, function (a) {
          /** @preserve
           * Counter block mode compatible with  Dr Brian Gladman fileenc.c
           * derived from CryptoJS.mode.CTR
           * Jan Hruby jhruby.web@gmail.com
           */ return (
            (a.mode.CTRGladman = (function () {
              var s = a.lib.BlockCipherMode.extend();
              function l(p) {
                if (((p >> 24) & 255) === 255) {
                  var m = (p >> 16) & 255,
                    d = (p >> 8) & 255,
                    x = p & 255;
                  m === 255
                    ? ((m = 0),
                      d === 255 ? ((d = 0), x === 255 ? (x = 0) : ++x) : ++d)
                    : ++m,
                    (p = 0),
                    (p += m << 16),
                    (p += d << 8),
                    (p += x);
                } else p += 1 << 24;
                return p;
              }
              function c(p) {
                return (p[0] = l(p[0])) === 0 && (p[1] = l(p[1])), p;
              }
              var f = (s.Encryptor = s.extend({
                processBlock: function (p, m) {
                  var d = this._cipher,
                    x = d.blockSize,
                    y = this._iv,
                    v = this._counter;
                  y && ((v = this._counter = y.slice(0)), (this._iv = void 0)),
                    c(v);
                  var E = v.slice(0);
                  d.encryptBlock(E, 0);
                  for (var b = 0; b < x; b++) p[m + b] ^= E[b];
                },
              }));
              return (s.Decryptor = f), s;
            })()),
            a.mode.CTRGladman
          );
        });
      })(bu)),
    bu.exports
  );
}
var Au = { exports: {} },
  O5 = Au.exports,
  By;
function F5() {
  return (
    By ||
      ((By = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), Ut());
        })(O5, function (a) {
          return (
            (a.mode.OFB = (function () {
              var s = a.lib.BlockCipherMode.extend(),
                l = (s.Encryptor = s.extend({
                  processBlock: function (c, f) {
                    var p = this._cipher,
                      m = p.blockSize,
                      d = this._iv,
                      x = this._keystream;
                    d &&
                      ((x = this._keystream = d.slice(0)), (this._iv = void 0)),
                      p.encryptBlock(x, 0);
                    for (var y = 0; y < m; y++) c[f + y] ^= x[y];
                  },
                }));
              return (s.Decryptor = l), s;
            })()),
            a.mode.OFB
          );
        });
      })(Au)),
    Au.exports
  );
}
var Su = { exports: {} },
  z5 = Su.exports,
  _y;
function N5() {
  return (
    _y ||
      ((_y = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), Ut());
        })(z5, function (a) {
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
      })(Su)),
    Su.exports
  );
}
var Cu = { exports: {} },
  L5 = Cu.exports,
  Ty;
function U5() {
  return (
    Ty ||
      ((Ty = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), Ut());
        })(L5, function (a) {
          return (
            (a.pad.AnsiX923 = {
              pad: function (s, l) {
                var c = s.sigBytes,
                  f = l * 4,
                  p = f - (c % f),
                  m = c + p - 1;
                s.clamp(),
                  (s.words[m >>> 2] |= p << (24 - (m % 4) * 8)),
                  (s.sigBytes += p);
              },
              unpad: function (s) {
                var l = s.words[(s.sigBytes - 1) >>> 2] & 255;
                s.sigBytes -= l;
              },
            }),
            a.pad.Ansix923
          );
        });
      })(Cu)),
    Cu.exports
  );
}
var Du = { exports: {} },
  H5 = Du.exports,
  Ry;
function V5() {
  return (
    Ry ||
      ((Ry = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), Ut());
        })(H5, function (a) {
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
      })(Du)),
    Du.exports
  );
}
var Bu = { exports: {} },
  k5 = Bu.exports,
  wy;
function j5() {
  return (
    wy ||
      ((wy = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), Ut());
        })(k5, function (a) {
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
      })(Bu)),
    Bu.exports
  );
}
var _u = { exports: {} },
  q5 = _u.exports,
  My;
function P5() {
  return (
    My ||
      ((My = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), Ut());
        })(q5, function (a) {
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
      })(_u)),
    _u.exports
  );
}
var Tu = { exports: {} },
  Y5 = Tu.exports,
  Oy;
function X5() {
  return (
    Oy ||
      ((Oy = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), Ut());
        })(Y5, function (a) {
          return (
            (a.pad.NoPadding = { pad: function () {}, unpad: function () {} }),
            a.pad.NoPadding
          );
        });
      })(Tu)),
    Tu.exports
  );
}
var Ru = { exports: {} },
  G5 = Ru.exports,
  Fy;
function K5() {
  return (
    Fy ||
      ((Fy = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), Ut());
        })(G5, function (a) {
          return (
            (function (s) {
              var l = a,
                c = l.lib,
                f = c.CipherParams,
                p = l.enc,
                m = p.Hex,
                d = l.format;
              d.Hex = {
                stringify: function (x) {
                  return x.ciphertext.toString(m);
                },
                parse: function (x) {
                  var y = m.parse(x);
                  return f.create({ ciphertext: y });
                },
              };
            })(),
            a.format.Hex
          );
        });
      })(Ru)),
    Ru.exports
  );
}
var wu = { exports: {} },
  Z5 = wu.exports,
  zy;
function Q5() {
  return (
    zy ||
      ((zy = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), ur(), cr(), Ra(), Ut());
        })(Z5, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.BlockCipher,
                f = s.algo,
                p = [],
                m = [],
                d = [],
                x = [],
                y = [],
                v = [],
                E = [],
                b = [],
                S = [],
                A = [];
              (function () {
                for (var D = [], R = 0; R < 256; R++)
                  R < 128 ? (D[R] = R << 1) : (D[R] = (R << 1) ^ 283);
                for (var M = 0, L = 0, R = 0; R < 256; R++) {
                  var _ = L ^ (L << 1) ^ (L << 2) ^ (L << 3) ^ (L << 4);
                  (_ = (_ >>> 8) ^ (_ & 255) ^ 99), (p[M] = _), (m[_] = M);
                  var O = D[M],
                    $ = D[O],
                    z = D[$],
                    j = (D[_] * 257) ^ (_ * 16843008);
                  (d[M] = (j << 24) | (j >>> 8)),
                    (x[M] = (j << 16) | (j >>> 16)),
                    (y[M] = (j << 8) | (j >>> 24)),
                    (v[M] = j);
                  var j =
                    (z * 16843009) ^ ($ * 65537) ^ (O * 257) ^ (M * 16843008);
                  (E[_] = (j << 24) | (j >>> 8)),
                    (b[_] = (j << 16) | (j >>> 16)),
                    (S[_] = (j << 8) | (j >>> 24)),
                    (A[_] = j),
                    M
                      ? ((M = O ^ D[D[D[z ^ O]]]), (L ^= D[D[L]]))
                      : (M = L = 1);
                }
              })();
              var w = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                C = (f.AES = c.extend({
                  _doReset: function () {
                    var D;
                    if (!(this._nRounds && this._keyPriorReset === this._key)) {
                      for (
                        var R = (this._keyPriorReset = this._key),
                          M = R.words,
                          L = R.sigBytes / 4,
                          _ = (this._nRounds = L + 6),
                          O = (_ + 1) * 4,
                          $ = (this._keySchedule = []),
                          z = 0;
                        z < O;
                        z++
                      )
                        z < L
                          ? ($[z] = M[z])
                          : ((D = $[z - 1]),
                            z % L
                              ? L > 6 &&
                                z % L == 4 &&
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
                                (D ^= w[(z / L) | 0] << 24)),
                            ($[z] = $[z - L] ^ D));
                      for (
                        var j = (this._invKeySchedule = []), Q = 0;
                        Q < O;
                        Q++
                      ) {
                        var z = O - Q;
                        if (Q % 4) var D = $[z];
                        else var D = $[z - 4];
                        Q < 4 || z <= 4
                          ? (j[Q] = D)
                          : (j[Q] =
                              E[p[D >>> 24]] ^
                              b[p[(D >>> 16) & 255]] ^
                              S[p[(D >>> 8) & 255]] ^
                              A[p[D & 255]]);
                      }
                    }
                  },
                  encryptBlock: function (D, R) {
                    this._doCryptBlock(D, R, this._keySchedule, d, x, y, v, p);
                  },
                  decryptBlock: function (D, R) {
                    var M = D[R + 1];
                    (D[R + 1] = D[R + 3]),
                      (D[R + 3] = M),
                      this._doCryptBlock(
                        D,
                        R,
                        this._invKeySchedule,
                        E,
                        b,
                        S,
                        A,
                        m,
                      );
                    var M = D[R + 1];
                    (D[R + 1] = D[R + 3]), (D[R + 3] = M);
                  },
                  _doCryptBlock: function (D, R, M, L, _, O, $, z) {
                    for (
                      var j = this._nRounds,
                        Q = D[R] ^ M[0],
                        ee = D[R + 1] ^ M[1],
                        oe = D[R + 2] ^ M[2],
                        de = D[R + 3] ^ M[3],
                        k = 4,
                        te = 1;
                      te < j;
                      te++
                    ) {
                      var ie =
                          L[Q >>> 24] ^
                          _[(ee >>> 16) & 255] ^
                          O[(oe >>> 8) & 255] ^
                          $[de & 255] ^
                          M[k++],
                        me =
                          L[ee >>> 24] ^
                          _[(oe >>> 16) & 255] ^
                          O[(de >>> 8) & 255] ^
                          $[Q & 255] ^
                          M[k++],
                        xe =
                          L[oe >>> 24] ^
                          _[(de >>> 16) & 255] ^
                          O[(Q >>> 8) & 255] ^
                          $[ee & 255] ^
                          M[k++],
                        T =
                          L[de >>> 24] ^
                          _[(Q >>> 16) & 255] ^
                          O[(ee >>> 8) & 255] ^
                          $[oe & 255] ^
                          M[k++];
                      (Q = ie), (ee = me), (oe = xe), (de = T);
                    }
                    var ie =
                        ((z[Q >>> 24] << 24) |
                          (z[(ee >>> 16) & 255] << 16) |
                          (z[(oe >>> 8) & 255] << 8) |
                          z[de & 255]) ^
                        M[k++],
                      me =
                        ((z[ee >>> 24] << 24) |
                          (z[(oe >>> 16) & 255] << 16) |
                          (z[(de >>> 8) & 255] << 8) |
                          z[Q & 255]) ^
                        M[k++],
                      xe =
                        ((z[oe >>> 24] << 24) |
                          (z[(de >>> 16) & 255] << 16) |
                          (z[(Q >>> 8) & 255] << 8) |
                          z[ee & 255]) ^
                        M[k++],
                      T =
                        ((z[de >>> 24] << 24) |
                          (z[(Q >>> 16) & 255] << 16) |
                          (z[(ee >>> 8) & 255] << 8) |
                          z[oe & 255]) ^
                        M[k++];
                    (D[R] = ie),
                      (D[R + 1] = me),
                      (D[R + 2] = xe),
                      (D[R + 3] = T);
                  },
                  keySize: 256 / 32,
                }));
              s.AES = c._createHelper(C);
            })(),
            a.AES
          );
        });
      })(wu)),
    wu.exports
  );
}
var Mu = { exports: {} },
  $5 = Mu.exports,
  Ny;
function J5() {
  return (
    Ny ||
      ((Ny = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), ur(), cr(), Ra(), Ut());
        })($5, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.WordArray,
                f = l.BlockCipher,
                p = s.algo,
                m = [
                  57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2,
                  59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39,
                  31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37,
                  29, 21, 13, 5, 28, 20, 12, 4,
                ],
                d = [
                  14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26,
                  8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51,
                  45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32,
                ],
                x = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
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
                E = (p.DES = f.extend({
                  _doReset: function () {
                    for (
                      var w = this._key, C = w.words, D = [], R = 0;
                      R < 56;
                      R++
                    ) {
                      var M = m[R] - 1;
                      D[R] = (C[M >>> 5] >>> (31 - (M % 32))) & 1;
                    }
                    for (var L = (this._subKeys = []), _ = 0; _ < 16; _++) {
                      for (var O = (L[_] = []), $ = x[_], R = 0; R < 24; R++)
                        (O[(R / 6) | 0] |=
                          D[(d[R] - 1 + $) % 28] << (31 - (R % 6))),
                          (O[4 + ((R / 6) | 0)] |=
                            D[28 + ((d[R + 24] - 1 + $) % 28)] <<
                            (31 - (R % 6)));
                      O[0] = (O[0] << 1) | (O[0] >>> 31);
                      for (var R = 1; R < 7; R++)
                        O[R] = O[R] >>> ((R - 1) * 4 + 3);
                      O[7] = (O[7] << 5) | (O[7] >>> 27);
                    }
                    for (var z = (this._invSubKeys = []), R = 0; R < 16; R++)
                      z[R] = L[15 - R];
                  },
                  encryptBlock: function (w, C) {
                    this._doCryptBlock(w, C, this._subKeys);
                  },
                  decryptBlock: function (w, C) {
                    this._doCryptBlock(w, C, this._invSubKeys);
                  },
                  _doCryptBlock: function (w, C, D) {
                    (this._lBlock = w[C]),
                      (this._rBlock = w[C + 1]),
                      b.call(this, 4, 252645135),
                      b.call(this, 16, 65535),
                      S.call(this, 2, 858993459),
                      S.call(this, 8, 16711935),
                      b.call(this, 1, 1431655765);
                    for (var R = 0; R < 16; R++) {
                      for (
                        var M = D[R],
                          L = this._lBlock,
                          _ = this._rBlock,
                          O = 0,
                          $ = 0;
                        $ < 8;
                        $++
                      )
                        O |= y[$][((_ ^ M[$]) & v[$]) >>> 0];
                      (this._lBlock = _), (this._rBlock = L ^ O);
                    }
                    var z = this._lBlock;
                    (this._lBlock = this._rBlock),
                      (this._rBlock = z),
                      b.call(this, 1, 1431655765),
                      S.call(this, 8, 16711935),
                      S.call(this, 2, 858993459),
                      b.call(this, 16, 65535),
                      b.call(this, 4, 252645135),
                      (w[C] = this._lBlock),
                      (w[C + 1] = this._rBlock);
                  },
                  keySize: 64 / 32,
                  ivSize: 64 / 32,
                  blockSize: 64 / 32,
                }));
              function b(w, C) {
                var D = ((this._lBlock >>> w) ^ this._rBlock) & C;
                (this._rBlock ^= D), (this._lBlock ^= D << w);
              }
              function S(w, C) {
                var D = ((this._rBlock >>> w) ^ this._lBlock) & C;
                (this._lBlock ^= D), (this._rBlock ^= D << w);
              }
              s.DES = f._createHelper(E);
              var A = (p.TripleDES = f.extend({
                _doReset: function () {
                  var w = this._key,
                    C = w.words;
                  if (C.length !== 2 && C.length !== 4 && C.length < 6)
                    throw new Error(
                      "Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.",
                    );
                  var D = C.slice(0, 2),
                    R = C.length < 4 ? C.slice(0, 2) : C.slice(2, 4),
                    M = C.length < 6 ? C.slice(0, 2) : C.slice(4, 6);
                  (this._des1 = E.createEncryptor(c.create(D))),
                    (this._des2 = E.createEncryptor(c.create(R))),
                    (this._des3 = E.createEncryptor(c.create(M)));
                },
                encryptBlock: function (w, C) {
                  this._des1.encryptBlock(w, C),
                    this._des2.decryptBlock(w, C),
                    this._des3.encryptBlock(w, C);
                },
                decryptBlock: function (w, C) {
                  this._des3.decryptBlock(w, C),
                    this._des2.encryptBlock(w, C),
                    this._des1.decryptBlock(w, C);
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
      })(Mu)),
    Mu.exports
  );
}
var Ou = { exports: {} },
  W5 = Ou.exports,
  Ly;
function I5() {
  return (
    Ly ||
      ((Ly = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), ur(), cr(), Ra(), Ut());
        })(W5, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.StreamCipher,
                f = s.algo,
                p = (f.RC4 = c.extend({
                  _doReset: function () {
                    for (
                      var x = this._key,
                        y = x.words,
                        v = x.sigBytes,
                        E = (this._S = []),
                        b = 0;
                      b < 256;
                      b++
                    )
                      E[b] = b;
                    for (var b = 0, S = 0; b < 256; b++) {
                      var A = b % v,
                        w = (y[A >>> 2] >>> (24 - (A % 4) * 8)) & 255;
                      S = (S + E[b] + w) % 256;
                      var C = E[b];
                      (E[b] = E[S]), (E[S] = C);
                    }
                    this._i = this._j = 0;
                  },
                  _doProcessBlock: function (x, y) {
                    x[y] ^= m.call(this);
                  },
                  keySize: 256 / 32,
                  ivSize: 0,
                }));
              function m() {
                for (
                  var x = this._S, y = this._i, v = this._j, E = 0, b = 0;
                  b < 4;
                  b++
                ) {
                  (y = (y + 1) % 256), (v = (v + x[y]) % 256);
                  var S = x[y];
                  (x[y] = x[v]),
                    (x[v] = S),
                    (E |= x[(x[y] + x[v]) % 256] << (24 - b * 8));
                }
                return (this._i = y), (this._j = v), E;
              }
              s.RC4 = c._createHelper(p);
              var d = (f.RC4Drop = p.extend({
                cfg: p.cfg.extend({ drop: 192 }),
                _doReset: function () {
                  p._doReset.call(this);
                  for (var x = this.cfg.drop; x > 0; x--) m.call(this);
                },
              }));
              s.RC4Drop = c._createHelper(d);
            })(),
            a.RC4
          );
        });
      })(Ou)),
    Ou.exports
  );
}
var Fu = { exports: {} },
  e6 = Fu.exports,
  Uy;
function t6() {
  return (
    Uy ||
      ((Uy = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), ur(), cr(), Ra(), Ut());
        })(e6, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.StreamCipher,
                f = s.algo,
                p = [],
                m = [],
                d = [],
                x = (f.Rabbit = c.extend({
                  _doReset: function () {
                    for (
                      var v = this._key.words, E = this.cfg.iv, b = 0;
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
                    if (E) {
                      var w = E.words,
                        C = w[0],
                        D = w[1],
                        R =
                          (((C << 8) | (C >>> 24)) & 16711935) |
                          (((C << 24) | (C >>> 8)) & 4278255360),
                        M =
                          (((D << 8) | (D >>> 24)) & 16711935) |
                          (((D << 24) | (D >>> 8)) & 4278255360),
                        L = (R >>> 16) | (M & 4294901760),
                        _ = (M << 16) | (R & 65535);
                      (A[0] ^= R),
                        (A[1] ^= L),
                        (A[2] ^= M),
                        (A[3] ^= _),
                        (A[4] ^= R),
                        (A[5] ^= L),
                        (A[6] ^= M),
                        (A[7] ^= _);
                      for (var b = 0; b < 4; b++) y.call(this);
                    }
                  },
                  _doProcessBlock: function (v, E) {
                    var b = this._X;
                    y.call(this),
                      (p[0] = b[0] ^ (b[5] >>> 16) ^ (b[3] << 16)),
                      (p[1] = b[2] ^ (b[7] >>> 16) ^ (b[5] << 16)),
                      (p[2] = b[4] ^ (b[1] >>> 16) ^ (b[7] << 16)),
                      (p[3] = b[6] ^ (b[3] >>> 16) ^ (b[1] << 16));
                    for (var S = 0; S < 4; S++)
                      (p[S] =
                        (((p[S] << 8) | (p[S] >>> 24)) & 16711935) |
                        (((p[S] << 24) | (p[S] >>> 8)) & 4278255360)),
                        (v[E + S] ^= p[S]);
                  },
                  blockSize: 128 / 32,
                  ivSize: 64 / 32,
                }));
              function y() {
                for (var v = this._X, E = this._C, b = 0; b < 8; b++)
                  m[b] = E[b];
                (E[0] = (E[0] + 1295307597 + this._b) | 0),
                  (E[1] =
                    (E[1] + 3545052371 + (E[0] >>> 0 < m[0] >>> 0 ? 1 : 0)) |
                    0),
                  (E[2] =
                    (E[2] + 886263092 + (E[1] >>> 0 < m[1] >>> 0 ? 1 : 0)) | 0),
                  (E[3] =
                    (E[3] + 1295307597 + (E[2] >>> 0 < m[2] >>> 0 ? 1 : 0)) |
                    0),
                  (E[4] =
                    (E[4] + 3545052371 + (E[3] >>> 0 < m[3] >>> 0 ? 1 : 0)) |
                    0),
                  (E[5] =
                    (E[5] + 886263092 + (E[4] >>> 0 < m[4] >>> 0 ? 1 : 0)) | 0),
                  (E[6] =
                    (E[6] + 1295307597 + (E[5] >>> 0 < m[5] >>> 0 ? 1 : 0)) |
                    0),
                  (E[7] =
                    (E[7] + 3545052371 + (E[6] >>> 0 < m[6] >>> 0 ? 1 : 0)) |
                    0),
                  (this._b = E[7] >>> 0 < m[7] >>> 0 ? 1 : 0);
                for (var b = 0; b < 8; b++) {
                  var S = v[b] + E[b],
                    A = S & 65535,
                    w = S >>> 16,
                    C = ((((A * A) >>> 17) + A * w) >>> 15) + w * w,
                    D = (((S & 4294901760) * S) | 0) + (((S & 65535) * S) | 0);
                  d[b] = C ^ D;
                }
                (v[0] =
                  (d[0] +
                    ((d[7] << 16) | (d[7] >>> 16)) +
                    ((d[6] << 16) | (d[6] >>> 16))) |
                  0),
                  (v[1] = (d[1] + ((d[0] << 8) | (d[0] >>> 24)) + d[7]) | 0),
                  (v[2] =
                    (d[2] +
                      ((d[1] << 16) | (d[1] >>> 16)) +
                      ((d[0] << 16) | (d[0] >>> 16))) |
                    0),
                  (v[3] = (d[3] + ((d[2] << 8) | (d[2] >>> 24)) + d[1]) | 0),
                  (v[4] =
                    (d[4] +
                      ((d[3] << 16) | (d[3] >>> 16)) +
                      ((d[2] << 16) | (d[2] >>> 16))) |
                    0),
                  (v[5] = (d[5] + ((d[4] << 8) | (d[4] >>> 24)) + d[3]) | 0),
                  (v[6] =
                    (d[6] +
                      ((d[5] << 16) | (d[5] >>> 16)) +
                      ((d[4] << 16) | (d[4] >>> 16))) |
                    0),
                  (v[7] = (d[7] + ((d[6] << 8) | (d[6] >>> 24)) + d[5]) | 0);
              }
              s.Rabbit = c._createHelper(x);
            })(),
            a.Rabbit
          );
        });
      })(Fu)),
    Fu.exports
  );
}
var zu = { exports: {} },
  n6 = zu.exports,
  Hy;
function i6() {
  return (
    Hy ||
      ((Hy = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), ur(), cr(), Ra(), Ut());
        })(n6, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.StreamCipher,
                f = s.algo,
                p = [],
                m = [],
                d = [],
                x = (f.RabbitLegacy = c.extend({
                  _doReset: function () {
                    var v = this._key.words,
                      E = this.cfg.iv,
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
                    if (E) {
                      var w = E.words,
                        C = w[0],
                        D = w[1],
                        R =
                          (((C << 8) | (C >>> 24)) & 16711935) |
                          (((C << 24) | (C >>> 8)) & 4278255360),
                        M =
                          (((D << 8) | (D >>> 24)) & 16711935) |
                          (((D << 24) | (D >>> 8)) & 4278255360),
                        L = (R >>> 16) | (M & 4294901760),
                        _ = (M << 16) | (R & 65535);
                      (S[0] ^= R),
                        (S[1] ^= L),
                        (S[2] ^= M),
                        (S[3] ^= _),
                        (S[4] ^= R),
                        (S[5] ^= L),
                        (S[6] ^= M),
                        (S[7] ^= _);
                      for (var A = 0; A < 4; A++) y.call(this);
                    }
                  },
                  _doProcessBlock: function (v, E) {
                    var b = this._X;
                    y.call(this),
                      (p[0] = b[0] ^ (b[5] >>> 16) ^ (b[3] << 16)),
                      (p[1] = b[2] ^ (b[7] >>> 16) ^ (b[5] << 16)),
                      (p[2] = b[4] ^ (b[1] >>> 16) ^ (b[7] << 16)),
                      (p[3] = b[6] ^ (b[3] >>> 16) ^ (b[1] << 16));
                    for (var S = 0; S < 4; S++)
                      (p[S] =
                        (((p[S] << 8) | (p[S] >>> 24)) & 16711935) |
                        (((p[S] << 24) | (p[S] >>> 8)) & 4278255360)),
                        (v[E + S] ^= p[S]);
                  },
                  blockSize: 128 / 32,
                  ivSize: 64 / 32,
                }));
              function y() {
                for (var v = this._X, E = this._C, b = 0; b < 8; b++)
                  m[b] = E[b];
                (E[0] = (E[0] + 1295307597 + this._b) | 0),
                  (E[1] =
                    (E[1] + 3545052371 + (E[0] >>> 0 < m[0] >>> 0 ? 1 : 0)) |
                    0),
                  (E[2] =
                    (E[2] + 886263092 + (E[1] >>> 0 < m[1] >>> 0 ? 1 : 0)) | 0),
                  (E[3] =
                    (E[3] + 1295307597 + (E[2] >>> 0 < m[2] >>> 0 ? 1 : 0)) |
                    0),
                  (E[4] =
                    (E[4] + 3545052371 + (E[3] >>> 0 < m[3] >>> 0 ? 1 : 0)) |
                    0),
                  (E[5] =
                    (E[5] + 886263092 + (E[4] >>> 0 < m[4] >>> 0 ? 1 : 0)) | 0),
                  (E[6] =
                    (E[6] + 1295307597 + (E[5] >>> 0 < m[5] >>> 0 ? 1 : 0)) |
                    0),
                  (E[7] =
                    (E[7] + 3545052371 + (E[6] >>> 0 < m[6] >>> 0 ? 1 : 0)) |
                    0),
                  (this._b = E[7] >>> 0 < m[7] >>> 0 ? 1 : 0);
                for (var b = 0; b < 8; b++) {
                  var S = v[b] + E[b],
                    A = S & 65535,
                    w = S >>> 16,
                    C = ((((A * A) >>> 17) + A * w) >>> 15) + w * w,
                    D = (((S & 4294901760) * S) | 0) + (((S & 65535) * S) | 0);
                  d[b] = C ^ D;
                }
                (v[0] =
                  (d[0] +
                    ((d[7] << 16) | (d[7] >>> 16)) +
                    ((d[6] << 16) | (d[6] >>> 16))) |
                  0),
                  (v[1] = (d[1] + ((d[0] << 8) | (d[0] >>> 24)) + d[7]) | 0),
                  (v[2] =
                    (d[2] +
                      ((d[1] << 16) | (d[1] >>> 16)) +
                      ((d[0] << 16) | (d[0] >>> 16))) |
                    0),
                  (v[3] = (d[3] + ((d[2] << 8) | (d[2] >>> 24)) + d[1]) | 0),
                  (v[4] =
                    (d[4] +
                      ((d[3] << 16) | (d[3] >>> 16)) +
                      ((d[2] << 16) | (d[2] >>> 16))) |
                    0),
                  (v[5] = (d[5] + ((d[4] << 8) | (d[4] >>> 24)) + d[3]) | 0),
                  (v[6] =
                    (d[6] +
                      ((d[5] << 16) | (d[5] >>> 16)) +
                      ((d[4] << 16) | (d[4] >>> 16))) |
                    0),
                  (v[7] = (d[7] + ((d[6] << 8) | (d[6] >>> 24)) + d[5]) | 0);
              }
              s.RabbitLegacy = c._createHelper(x);
            })(),
            a.RabbitLegacy
          );
        });
      })(zu)),
    zu.exports
  );
}
var Nu = { exports: {} },
  a6 = Nu.exports,
  Vy;
function r6() {
  return (
    Vy ||
      ((Vy = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(Ye(), ur(), cr(), Ra(), Ut());
        })(a6, function (a) {
          return (
            (function () {
              var s = a,
                l = s.lib,
                c = l.BlockCipher,
                f = s.algo;
              const p = 16,
                m = [
                  608135816, 2242054355, 320440878, 57701188, 2752067618,
                  698298832, 137296536, 3964562569, 1160258022, 953160567,
                  3193202383, 887688300, 3232508343, 3380367581, 1065670069,
                  3041331479, 2450970073, 2306472731,
                ],
                d = [
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
              var x = { pbox: [], sbox: [] };
              function y(A, w) {
                let C = (w >> 24) & 255,
                  D = (w >> 16) & 255,
                  R = (w >> 8) & 255,
                  M = w & 255,
                  L = A.sbox[0][C] + A.sbox[1][D];
                return (L = L ^ A.sbox[2][R]), (L = L + A.sbox[3][M]), L;
              }
              function v(A, w, C) {
                let D = w,
                  R = C,
                  M;
                for (let L = 0; L < p; ++L)
                  (D = D ^ A.pbox[L]),
                    (R = y(A, D) ^ R),
                    (M = D),
                    (D = R),
                    (R = M);
                return (
                  (M = D),
                  (D = R),
                  (R = M),
                  (R = R ^ A.pbox[p]),
                  (D = D ^ A.pbox[p + 1]),
                  { left: D, right: R }
                );
              }
              function E(A, w, C) {
                let D = w,
                  R = C,
                  M;
                for (let L = p + 1; L > 1; --L)
                  (D = D ^ A.pbox[L]),
                    (R = y(A, D) ^ R),
                    (M = D),
                    (D = R),
                    (R = M);
                return (
                  (M = D),
                  (D = R),
                  (R = M),
                  (R = R ^ A.pbox[1]),
                  (D = D ^ A.pbox[0]),
                  { left: D, right: R }
                );
              }
              function b(A, w, C) {
                for (let _ = 0; _ < 4; _++) {
                  A.sbox[_] = [];
                  for (let O = 0; O < 256; O++) A.sbox[_][O] = d[_][O];
                }
                let D = 0;
                for (let _ = 0; _ < p + 2; _++)
                  (A.pbox[_] = m[_] ^ w[D]), D++, D >= C && (D = 0);
                let R = 0,
                  M = 0,
                  L = 0;
                for (let _ = 0; _ < p + 2; _ += 2)
                  (L = v(A, R, M)),
                    (R = L.left),
                    (M = L.right),
                    (A.pbox[_] = R),
                    (A.pbox[_ + 1] = M);
                for (let _ = 0; _ < 4; _++)
                  for (let O = 0; O < 256; O += 2)
                    (L = v(A, R, M)),
                      (R = L.left),
                      (M = L.right),
                      (A.sbox[_][O] = R),
                      (A.sbox[_][O + 1] = M);
                return !0;
              }
              var S = (f.Blowfish = c.extend({
                _doReset: function () {
                  if (this._keyPriorReset !== this._key) {
                    var A = (this._keyPriorReset = this._key),
                      w = A.words,
                      C = A.sigBytes / 4;
                    b(x, w, C);
                  }
                },
                encryptBlock: function (A, w) {
                  var C = v(x, A[w], A[w + 1]);
                  (A[w] = C.left), (A[w + 1] = C.right);
                },
                decryptBlock: function (A, w) {
                  var C = E(x, A[w], A[w + 1]);
                  (A[w] = C.left), (A[w + 1] = C.right);
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
      })(Nu)),
    Nu.exports
  );
}
var s6 = eu.exports,
  ky;
function o6() {
  return (
    ky ||
      ((ky = 1),
      (function (n, i) {
        (function (a, s, l) {
          n.exports = s(
            Ye(),
            oc(),
            i5(),
            r5(),
            ur(),
            l5(),
            cr(),
            Yg(),
            Gh(),
            d5(),
            Xg(),
            x5(),
            v5(),
            E5(),
            Kh(),
            S5(),
            Ra(),
            Ut(),
            _5(),
            R5(),
            M5(),
            F5(),
            N5(),
            U5(),
            V5(),
            j5(),
            P5(),
            X5(),
            K5(),
            Q5(),
            J5(),
            I5(),
            t6(),
            i6(),
            r6(),
          );
        })(s6, function (a) {
          return a;
        });
      })(eu)),
    eu.exports
  );
}
var l6 = o6();
const l9 = ic(l6),
  Zh = J.createContext({});
function Qh(n) {
  const i = J.useRef(null);
  return i.current === null && (i.current = n()), i.current;
}
const $h = typeof window != "undefined",
  Gg = $h ? J.useLayoutEffect : J.useEffect,
  lc = J.createContext(null);
function Jh(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function Wh(n, i) {
  const a = n.indexOf(i);
  a > -1 && n.splice(a, 1);
}
const Gi = (n, i, a) => (a > i ? i : a < n ? n : a);
let Ih = () => {};
const Ki = {},
  Kg = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function Zg(n) {
  return typeof n == "object" && n !== null;
}
const Qg = (n) => /^0[^.\s]+$/u.test(n);
function ed(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const Gn = (n) => n,
  u6 = (n, i) => (a) => i(n(a)),
  Bo = (...n) => n.reduce(u6),
  vo = (n, i, a) => {
    const s = i - n;
    return s === 0 ? 1 : (a - n) / s;
  };
class td {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return Jh(this.subscriptions, i), () => Wh(this.subscriptions, i);
  }
  notify(i, a, s) {
    const l = this.subscriptions.length;
    if (l)
      if (l === 1) this.subscriptions[0](i, a, s);
      else
        for (let c = 0; c < l; c++) {
          const f = this.subscriptions[c];
          f && f(i, a, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ei = (n) => n * 1e3,
  Xn = (n) => n / 1e3;
function $g(n, i) {
  return i ? n * (1e3 / i) : 0;
}
const Jg = (n, i, a) =>
    (((1 - 3 * a + 3 * i) * n + (3 * a - 6 * i)) * n + 3 * i) * n,
  c6 = 1e-7,
  f6 = 12;
function h6(n, i, a, s, l) {
  let c,
    f,
    p = 0;
  do (f = i + (a - i) / 2), (c = Jg(f, s, l) - n), c > 0 ? (a = f) : (i = f);
  while (Math.abs(c) > c6 && ++p < f6);
  return f;
}
function _o(n, i, a, s) {
  if (n === i && a === s) return Gn;
  const l = (c) => h6(c, 0, 1, n, a);
  return (c) => (c === 0 || c === 1 ? c : Jg(l(c), i, s));
}
const Wg = (n) => (i) => (i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2),
  Ig = (n) => (i) => 1 - n(1 - i),
  e2 = _o(0.33, 1.53, 0.69, 0.99),
  nd = Ig(e2),
  t2 = Wg(nd),
  n2 = (n) =>
    (n *= 2) < 1 ? 0.5 * nd(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))),
  id = (n) => 1 - Math.sin(Math.acos(n)),
  i2 = Ig(id),
  a2 = Wg(id),
  d6 = _o(0.42, 0, 1, 1),
  p6 = _o(0, 0, 0.58, 1),
  r2 = _o(0.42, 0, 0.58, 1),
  m6 = (n) => Array.isArray(n) && typeof n[0] != "number",
  s2 = (n) => Array.isArray(n) && typeof n[0] == "number",
  x6 = {
    linear: Gn,
    easeIn: d6,
    easeInOut: r2,
    easeOut: p6,
    circIn: id,
    circInOut: a2,
    circOut: i2,
    backIn: nd,
    backInOut: t2,
    backOut: e2,
    anticipate: n2,
  },
  y6 = (n) => typeof n == "string",
  jy = (n) => {
    if (s2(n)) {
      Ih(n.length === 4);
      const [i, a, s, l] = n;
      return _o(i, a, s, l);
    } else if (y6(n)) return x6[n];
    return n;
  },
  Gl = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function v6(n, i) {
  let a = new Set(),
    s = new Set(),
    l = !1,
    c = !1;
  const f = new WeakSet();
  let p = { delta: 0, timestamp: 0, isProcessing: !1 };
  function m(x) {
    f.has(x) && (d.schedule(x), n()), x(p);
  }
  const d = {
    schedule: (x, y = !1, v = !1) => {
      const b = v && l ? a : s;
      return y && f.add(x), b.has(x) || b.add(x), x;
    },
    cancel: (x) => {
      s.delete(x), f.delete(x);
    },
    process: (x) => {
      if (((p = x), l)) {
        c = !0;
        return;
      }
      (l = !0),
        ([a, s] = [s, a]),
        a.forEach(m),
        a.clear(),
        (l = !1),
        c && ((c = !1), d.process(x));
    },
  };
  return d;
}
const g6 = 40;
function o2(n, i) {
  let a = !1,
    s = !0;
  const l = { delta: 0, timestamp: 0, isProcessing: !1 },
    c = () => (a = !0),
    f = Gl.reduce((D, R) => ((D[R] = v6(c)), D), {}),
    {
      setup: p,
      read: m,
      resolveKeyframes: d,
      preUpdate: x,
      update: y,
      preRender: v,
      render: E,
      postRender: b,
    } = f,
    S = () => {
      const D = Ki.useManualTiming ? l.timestamp : performance.now();
      (a = !1),
        Ki.useManualTiming ||
          (l.delta = s ? 1e3 / 60 : Math.max(Math.min(D - l.timestamp, g6), 1)),
        (l.timestamp = D),
        (l.isProcessing = !0),
        p.process(l),
        m.process(l),
        d.process(l),
        x.process(l),
        y.process(l),
        v.process(l),
        E.process(l),
        b.process(l),
        (l.isProcessing = !1),
        a && i && ((s = !1), n(S));
    },
    A = () => {
      (a = !0), (s = !0), l.isProcessing || n(S);
    };
  return {
    schedule: Gl.reduce((D, R) => {
      const M = f[R];
      return (D[R] = (L, _ = !1, O = !1) => (a || A(), M.schedule(L, _, O))), D;
    }, {}),
    cancel: (D) => {
      for (let R = 0; R < Gl.length; R++) f[Gl[R]].cancel(D);
    },
    state: l,
    steps: f,
  };
}
const {
  schedule: pt,
  cancel: Ba,
  state: Xt,
  steps: Vf,
} = o2(
  typeof requestAnimationFrame != "undefined" ? requestAnimationFrame : Gn,
  !0,
);
let Lu;
function E6() {
  Lu = void 0;
}
const pn = {
    now: () => (
      Lu === void 0 &&
        pn.set(
          Xt.isProcessing || Ki.useManualTiming
            ? Xt.timestamp
            : performance.now(),
        ),
      Lu
    ),
    set: (n) => {
      (Lu = n), queueMicrotask(E6);
    },
  },
  l2 = (n) => (i) => typeof i == "string" && i.startsWith(n),
  ad = l2("--"),
  b6 = l2("var(--"),
  rd = (n) => (b6(n) ? A6.test(n.split("/*")[0].trim()) : !1),
  A6 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  as = {
    test: (n) => typeof n == "number",
    parse: parseFloat,
    transform: (n) => n,
  },
  go = Ue(le({}, as), { transform: (n) => Gi(0, 1, n) }),
  Kl = Ue(le({}, as), { default: 1 }),
  co = (n) => Math.round(n * 1e5) / 1e5,
  sd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function S6(n) {
  return n == null;
}
const C6 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  od = (n, i) => (a) =>
    !!(
      (typeof a == "string" && C6.test(a) && a.startsWith(n)) ||
      (i && !S6(a) && Object.prototype.hasOwnProperty.call(a, i))
    ),
  u2 = (n, i, a) => (s) => {
    if (typeof s != "string") return s;
    const [l, c, f, p] = s.match(sd);
    return {
      [n]: parseFloat(l),
      [i]: parseFloat(c),
      [a]: parseFloat(f),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  D6 = (n) => Gi(0, 255, n),
  kf = Ue(le({}, as), { transform: (n) => Math.round(D6(n)) }),
  nr = {
    test: od("rgb", "red"),
    parse: u2("red", "green", "blue"),
    transform: ({ red: n, green: i, blue: a, alpha: s = 1 }) =>
      "rgba(" +
      kf.transform(n) +
      ", " +
      kf.transform(i) +
      ", " +
      kf.transform(a) +
      ", " +
      co(go.transform(s)) +
      ")",
  };
function B6(n) {
  let i = "",
    a = "",
    s = "",
    l = "";
  return (
    n.length > 5
      ? ((i = n.substring(1, 3)),
        (a = n.substring(3, 5)),
        (s = n.substring(5, 7)),
        (l = n.substring(7, 9)))
      : ((i = n.substring(1, 2)),
        (a = n.substring(2, 3)),
        (s = n.substring(3, 4)),
        (l = n.substring(4, 5)),
        (i += i),
        (a += a),
        (s += s),
        (l += l)),
    {
      red: parseInt(i, 16),
      green: parseInt(a, 16),
      blue: parseInt(s, 16),
      alpha: l ? parseInt(l, 16) / 255 : 1,
    }
  );
}
const ch = { test: od("#"), parse: B6, transform: nr.transform },
  To = (n) => ({
    test: (i) =>
      typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${n}`,
  }),
  Aa = To("deg"),
  bi = To("%"),
  _e = To("px"),
  _6 = To("vh"),
  T6 = To("vw"),
  qy = Ue(le({}, bi), {
    parse: (n) => bi.parse(n) / 100,
    transform: (n) => bi.transform(n * 100),
  }),
  Gr = {
    test: od("hsl", "hue"),
    parse: u2("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: i, lightness: a, alpha: s = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      bi.transform(co(i)) +
      ", " +
      bi.transform(co(a)) +
      ", " +
      co(go.transform(s)) +
      ")",
  },
  Rt = {
    test: (n) => nr.test(n) || ch.test(n) || Gr.test(n),
    parse: (n) =>
      nr.test(n) ? nr.parse(n) : Gr.test(n) ? Gr.parse(n) : ch.parse(n),
    transform: (n) =>
      typeof n == "string"
        ? n
        : n.hasOwnProperty("red")
          ? nr.transform(n)
          : Gr.transform(n),
    getAnimatableNone: (n) => {
      const i = Rt.parse(n);
      return (i.alpha = 0), Rt.transform(i);
    },
  },
  R6 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function w6(n) {
  var i, a;
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (((i = n.match(sd)) == null ? void 0 : i.length) || 0) +
      (((a = n.match(R6)) == null ? void 0 : a.length) || 0) >
      0
  );
}
const c2 = "number",
  f2 = "color",
  M6 = "var",
  O6 = "var(",
  Py = "${}",
  F6 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Eo(n) {
  const i = n.toString(),
    a = [],
    s = { color: [], number: [], var: [] },
    l = [];
  let c = 0;
  const p = i
    .replace(
      F6,
      (m) => (
        Rt.test(m)
          ? (s.color.push(c), l.push(f2), a.push(Rt.parse(m)))
          : m.startsWith(O6)
            ? (s.var.push(c), l.push(M6), a.push(m))
            : (s.number.push(c), l.push(c2), a.push(parseFloat(m))),
        ++c,
        Py
      ),
    )
    .split(Py);
  return { values: a, split: p, indexes: s, types: l };
}
function h2(n) {
  return Eo(n).values;
}
function d2(n) {
  const { split: i, types: a } = Eo(n),
    s = i.length;
  return (l) => {
    let c = "";
    for (let f = 0; f < s; f++)
      if (((c += i[f]), l[f] !== void 0)) {
        const p = a[f];
        p === c2
          ? (c += co(l[f]))
          : p === f2
            ? (c += Rt.transform(l[f]))
            : (c += l[f]);
      }
    return c;
  };
}
const z6 = (n) =>
  typeof n == "number" ? 0 : Rt.test(n) ? Rt.getAnimatableNone(n) : n;
function N6(n) {
  const i = h2(n);
  return d2(n)(i.map(z6));
}
const _a = {
  test: w6,
  parse: h2,
  createTransformer: d2,
  getAnimatableNone: N6,
};
function jf(n, i, a) {
  return (
    a < 0 && (a += 1),
    a > 1 && (a -= 1),
    a < 1 / 6
      ? n + (i - n) * 6 * a
      : a < 1 / 2
        ? i
        : a < 2 / 3
          ? n + (i - n) * (2 / 3 - a) * 6
          : n
  );
}
function L6({ hue: n, saturation: i, lightness: a, alpha: s }) {
  (n /= 360), (i /= 100), (a /= 100);
  let l = 0,
    c = 0,
    f = 0;
  if (!i) l = c = f = a;
  else {
    const p = a < 0.5 ? a * (1 + i) : a + i - a * i,
      m = 2 * a - p;
    (l = jf(m, p, n + 1 / 3)), (c = jf(m, p, n)), (f = jf(m, p, n - 1 / 3));
  }
  return {
    red: Math.round(l * 255),
    green: Math.round(c * 255),
    blue: Math.round(f * 255),
    alpha: s,
  };
}
function Ju(n, i) {
  return (a) => (a > 0 ? i : n);
}
const mt = (n, i, a) => n + (i - n) * a,
  qf = (n, i, a) => {
    const s = n * n,
      l = a * (i * i - s) + s;
    return l < 0 ? 0 : Math.sqrt(l);
  },
  U6 = [ch, nr, Gr],
  H6 = (n) => U6.find((i) => i.test(n));
function Yy(n) {
  const i = H6(n);
  if (!i) return !1;
  let a = i.parse(n);
  return i === Gr && (a = L6(a)), a;
}
const Xy = (n, i) => {
    const a = Yy(n),
      s = Yy(i);
    if (!a || !s) return Ju(n, i);
    const l = le({}, a);
    return (c) => (
      (l.red = qf(a.red, s.red, c)),
      (l.green = qf(a.green, s.green, c)),
      (l.blue = qf(a.blue, s.blue, c)),
      (l.alpha = mt(a.alpha, s.alpha, c)),
      nr.transform(l)
    );
  },
  fh = new Set(["none", "hidden"]);
function V6(n, i) {
  return fh.has(n) ? (a) => (a <= 0 ? n : i) : (a) => (a >= 1 ? i : n);
}
function k6(n, i) {
  return (a) => mt(n, i, a);
}
function ld(n) {
  return typeof n == "number"
    ? k6
    : typeof n == "string"
      ? rd(n)
        ? Ju
        : Rt.test(n)
          ? Xy
          : P6
      : Array.isArray(n)
        ? p2
        : typeof n == "object"
          ? Rt.test(n)
            ? Xy
            : j6
          : Ju;
}
function p2(n, i) {
  const a = [...n],
    s = a.length,
    l = n.map((c, f) => ld(c)(c, i[f]));
  return (c) => {
    for (let f = 0; f < s; f++) a[f] = l[f](c);
    return a;
  };
}
function j6(n, i) {
  const a = le(le({}, n), i),
    s = {};
  for (const l in a)
    n[l] !== void 0 && i[l] !== void 0 && (s[l] = ld(n[l])(n[l], i[l]));
  return (l) => {
    for (const c in s) a[c] = s[c](l);
    return a;
  };
}
function q6(n, i) {
  var l;
  const a = [],
    s = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < i.values.length; c++) {
    const f = i.types[c],
      p = n.indexes[f][s[f]],
      m = (l = n.values[p]) != null ? l : 0;
    (a[c] = m), s[f]++;
  }
  return a;
}
const P6 = (n, i) => {
  const a = _a.createTransformer(i),
    s = Eo(n),
    l = Eo(i);
  return s.indexes.var.length === l.indexes.var.length &&
    s.indexes.color.length === l.indexes.color.length &&
    s.indexes.number.length >= l.indexes.number.length
    ? (fh.has(n) && !l.values.length) || (fh.has(i) && !s.values.length)
      ? V6(n, i)
      : Bo(p2(q6(s, l), l.values), a)
    : Ju(n, i);
};
function m2(n, i, a) {
  return typeof n == "number" && typeof i == "number" && typeof a == "number"
    ? mt(n, i, a)
    : ld(n)(n, i);
}
const Y6 = (n) => {
    const i = ({ timestamp: a }) => n(a);
    return {
      start: (a = !0) => pt.update(i, a),
      stop: () => Ba(i),
      now: () => (Xt.isProcessing ? Xt.timestamp : pn.now()),
    };
  },
  x2 = (n, i, a = 10) => {
    let s = "";
    const l = Math.max(Math.round(i / a), 2);
    for (let c = 0; c < l; c++)
      s += Math.round(n(c / (l - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${s.substring(0, s.length - 2)})`;
  },
  Wu = 2e4;
function ud(n) {
  let i = 0;
  const a = 50;
  let s = n.next(i);
  for (; !s.done && i < Wu; ) (i += a), (s = n.next(i));
  return i >= Wu ? 1 / 0 : i;
}
function X6(n, i = 100, a) {
  const s = a(Ue(le({}, n), { keyframes: [0, i] })),
    l = Math.min(ud(s), Wu);
  return {
    type: "keyframes",
    ease: (c) => s.next(l * c).value / i,
    duration: Xn(l),
  };
}
const G6 = 5;
function y2(n, i, a) {
  const s = Math.max(i - G6, 0);
  return $g(a - n(s), i - s);
}
const gt = {
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
  Pf = 0.001;
function K6({
  duration: n = gt.duration,
  bounce: i = gt.bounce,
  velocity: a = gt.velocity,
  mass: s = gt.mass,
}) {
  let l,
    c,
    f = 1 - i;
  (f = Gi(gt.minDamping, gt.maxDamping, f)),
    (n = Gi(gt.minDuration, gt.maxDuration, Xn(n))),
    f < 1
      ? ((l = (d) => {
          const x = d * f,
            y = x * n,
            v = x - a,
            E = hh(d, f),
            b = Math.exp(-y);
          return Pf - (v / E) * b;
        }),
        (c = (d) => {
          const y = d * f * n,
            v = y * a + a,
            E = Math.pow(f, 2) * Math.pow(d, 2) * n,
            b = Math.exp(-y),
            S = hh(Math.pow(d, 2), f);
          return ((-l(d) + Pf > 0 ? -1 : 1) * ((v - E) * b)) / S;
        }))
      : ((l = (d) => {
          const x = Math.exp(-d * n),
            y = (d - a) * n + 1;
          return -Pf + x * y;
        }),
        (c = (d) => {
          const x = Math.exp(-d * n),
            y = (a - d) * (n * n);
          return x * y;
        }));
  const p = 5 / n,
    m = Q6(l, c, p);
  if (((n = Ei(n)), isNaN(m)))
    return { stiffness: gt.stiffness, damping: gt.damping, duration: n };
  {
    const d = Math.pow(m, 2) * s;
    return { stiffness: d, damping: f * 2 * Math.sqrt(s * d), duration: n };
  }
}
const Z6 = 12;
function Q6(n, i, a) {
  let s = a;
  for (let l = 1; l < Z6; l++) s = s - n(s) / i(s);
  return s;
}
function hh(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const $6 = ["duration", "bounce"],
  J6 = ["stiffness", "damping", "mass"];
function Gy(n, i) {
  return i.some((a) => n[a] !== void 0);
}
function W6(n) {
  let i = le(
    {
      velocity: gt.velocity,
      stiffness: gt.stiffness,
      damping: gt.damping,
      mass: gt.mass,
      isResolvedFromDuration: !1,
    },
    n,
  );
  if (!Gy(n, J6) && Gy(n, $6))
    if (n.visualDuration) {
      const a = n.visualDuration,
        s = (2 * Math.PI) / (a * 1.2),
        l = s * s,
        c = 2 * Gi(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(l);
      i = Ue(le({}, i), { mass: gt.mass, stiffness: l, damping: c });
    } else {
      const a = K6(n);
      (i = Ue(le(le({}, i), a), { mass: gt.mass })),
        (i.isResolvedFromDuration = !0);
    }
  return i;
}
function Iu(n = gt.visualDuration, i = gt.bounce) {
  const a =
    typeof n != "object"
      ? { visualDuration: n, keyframes: [0, 1], bounce: i }
      : n;
  let { restSpeed: s, restDelta: l } = a;
  const c = a.keyframes[0],
    f = a.keyframes[a.keyframes.length - 1],
    p = { done: !1, value: c },
    {
      stiffness: m,
      damping: d,
      mass: x,
      duration: y,
      velocity: v,
      isResolvedFromDuration: E,
    } = W6(Ue(le({}, a), { velocity: -Xn(a.velocity || 0) })),
    b = v || 0,
    S = d / (2 * Math.sqrt(m * x)),
    A = f - c,
    w = Xn(Math.sqrt(m / x)),
    C = Math.abs(A) < 5;
  s || (s = C ? gt.restSpeed.granular : gt.restSpeed.default),
    l || (l = C ? gt.restDelta.granular : gt.restDelta.default);
  let D;
  if (S < 1) {
    const M = hh(w, S);
    D = (L) => {
      const _ = Math.exp(-S * w * L);
      return (
        f - _ * (((b + S * w * A) / M) * Math.sin(M * L) + A * Math.cos(M * L))
      );
    };
  } else if (S === 1) D = (M) => f - Math.exp(-w * M) * (A + (b + w * A) * M);
  else {
    const M = w * Math.sqrt(S * S - 1);
    D = (L) => {
      const _ = Math.exp(-S * w * L),
        O = Math.min(M * L, 300);
      return (
        f - (_ * ((b + S * w * A) * Math.sinh(O) + M * A * Math.cosh(O))) / M
      );
    };
  }
  const R = {
    calculatedDuration: (E && y) || null,
    next: (M) => {
      const L = D(M);
      if (E) p.done = M >= y;
      else {
        let _ = M === 0 ? b : 0;
        S < 1 && (_ = M === 0 ? Ei(b) : y2(D, M, L));
        const O = Math.abs(_) <= s,
          $ = Math.abs(f - L) <= l;
        p.done = O && $;
      }
      return (p.value = p.done ? f : L), p;
    },
    toString: () => {
      const M = Math.min(ud(R), Wu),
        L = x2((_) => R.next(M * _).value, M, 30);
      return M + "ms " + L;
    },
    toTransition: () => {},
  };
  return R;
}
Iu.applyToOptions = (n) => {
  const i = X6(n, 100, Iu);
  return (
    (n.ease = i.ease), (n.duration = Ei(i.duration)), (n.type = "keyframes"), n
  );
};
function dh({
  keyframes: n,
  velocity: i = 0,
  power: a = 0.8,
  timeConstant: s = 325,
  bounceDamping: l = 10,
  bounceStiffness: c = 500,
  modifyTarget: f,
  min: p,
  max: m,
  restDelta: d = 0.5,
  restSpeed: x,
}) {
  const y = n[0],
    v = { done: !1, value: y },
    E = (O) => (p !== void 0 && O < p) || (m !== void 0 && O > m),
    b = (O) =>
      p === void 0
        ? m
        : m === void 0 || Math.abs(p - O) < Math.abs(m - O)
          ? p
          : m;
  let S = a * i;
  const A = y + S,
    w = f === void 0 ? A : f(A);
  w !== A && (S = w - y);
  const C = (O) => -S * Math.exp(-O / s),
    D = (O) => w + C(O),
    R = (O) => {
      const $ = C(O),
        z = D(O);
      (v.done = Math.abs($) <= d), (v.value = v.done ? w : z);
    };
  let M, L;
  const _ = (O) => {
    E(v.value) &&
      ((M = O),
      (L = Iu({
        keyframes: [v.value, b(v.value)],
        velocity: y2(D, O, v.value),
        damping: l,
        stiffness: c,
        restDelta: d,
        restSpeed: x,
      })));
  };
  return (
    _(0),
    {
      calculatedDuration: null,
      next: (O) => {
        let $ = !1;
        return (
          !L && M === void 0 && (($ = !0), R(O), _(O)),
          M !== void 0 && O >= M ? L.next(O - M) : (!$ && R(O), v)
        );
      },
    }
  );
}
function I6(n, i, a) {
  const s = [],
    l = a || Ki.mix || m2,
    c = n.length - 1;
  for (let f = 0; f < c; f++) {
    let p = l(n[f], n[f + 1]);
    if (i) {
      const m = Array.isArray(i) ? i[f] || Gn : i;
      p = Bo(m, p);
    }
    s.push(p);
  }
  return s;
}
function eS(n, i, { clamp: a = !0, ease: s, mixer: l } = {}) {
  const c = n.length;
  if ((Ih(c === i.length), c === 1)) return () => i[0];
  if (c === 2 && i[0] === i[1]) return () => i[1];
  const f = n[0] === n[1];
  n[0] > n[c - 1] && ((n = [...n].reverse()), (i = [...i].reverse()));
  const p = I6(i, s, l),
    m = p.length,
    d = (x) => {
      if (f && x < n[0]) return i[0];
      let y = 0;
      if (m > 1) for (; y < n.length - 2 && !(x < n[y + 1]); y++);
      const v = vo(n[y], n[y + 1], x);
      return p[y](v);
    };
  return a ? (x) => d(Gi(n[0], n[c - 1], x)) : d;
}
function tS(n, i) {
  const a = n[n.length - 1];
  for (let s = 1; s <= i; s++) {
    const l = vo(0, i, s);
    n.push(mt(a, 1, l));
  }
}
function nS(n) {
  const i = [0];
  return tS(i, n.length - 1), i;
}
function iS(n, i) {
  return n.map((a) => a * i);
}
function aS(n, i) {
  return n.map(() => i || r2).splice(0, n.length - 1);
}
function fo({
  duration: n = 300,
  keyframes: i,
  times: a,
  ease: s = "easeInOut",
}) {
  const l = m6(s) ? s.map(jy) : jy(s),
    c = { done: !1, value: i[0] },
    f = iS(a && a.length === i.length ? a : nS(i), n),
    p = eS(f, i, { ease: Array.isArray(l) ? l : aS(i, l) });
  return {
    calculatedDuration: n,
    next: (m) => ((c.value = p(m)), (c.done = m >= n), c),
  };
}
const rS = (n) => n !== null;
function cd(n, { repeat: i, repeatType: a = "loop" }, s, l = 1) {
  const c = n.filter(rS),
    p = l < 0 || (i && a !== "loop" && i % 2 === 1) ? 0 : c.length - 1;
  return !p || s === void 0 ? c[p] : s;
}
const sS = { decay: dh, inertia: dh, tween: fo, keyframes: fo, spring: Iu };
function v2(n) {
  typeof n.type == "string" && (n.type = sS[n.type]);
}
class fd {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((i) => {
      this.resolve = i;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(i, a) {
    return this.finished.then(i, a);
  }
}
const oS = (n) => n / 100;
class hd extends fd {
  constructor(i) {
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
        a && a.updatedAt !== pn.now() && this.tick(pn.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (l = (s = this.options).onStop) == null || l.call(s));
      }),
      (this.options = i),
      this.initAnimation(),
      this.play(),
      i.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: i } = this;
    v2(i);
    const {
      type: a = fo,
      repeat: s = 0,
      repeatDelay: l = 0,
      repeatType: c,
      velocity: f = 0,
    } = i;
    let { keyframes: p } = i;
    const m = a || fo;
    m !== fo &&
      typeof p[0] != "number" &&
      ((this.mixKeyframes = Bo(oS, m2(p[0], p[1]))), (p = [0, 100]));
    const d = m(Ue(le({}, i), { keyframes: p }));
    c === "mirror" &&
      (this.mirroredGenerator = m(
        Ue(le({}, i), { keyframes: [...p].reverse(), velocity: -f }),
      )),
      d.calculatedDuration === null && (d.calculatedDuration = ud(d));
    const { calculatedDuration: x } = d;
    (this.calculatedDuration = x),
      (this.resolvedDuration = x + l),
      (this.totalDuration = this.resolvedDuration * (s + 1) - l),
      (this.generator = d);
  }
  updateTime(i) {
    const a = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = a);
  }
  tick(i, a = !1) {
    const {
      generator: s,
      totalDuration: l,
      mixKeyframes: c,
      mirroredGenerator: f,
      resolvedDuration: p,
      calculatedDuration: m,
    } = this;
    if (this.startTime === null) return s.next(0);
    const {
      delay: d = 0,
      keyframes: x,
      repeat: y,
      repeatType: v,
      repeatDelay: E,
      type: b,
      onUpdate: S,
      finalKeyframe: A,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 &&
        (this.startTime = Math.min(i - l / this.speed, this.startTime)),
      a ? (this.currentTime = i) : this.updateTime(i);
    const w = this.currentTime - d * (this.playbackSpeed >= 0 ? 1 : -1),
      C = this.playbackSpeed >= 0 ? w < 0 : w > l;
    (this.currentTime = Math.max(w, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = l);
    let D = this.currentTime,
      R = s;
    if (y) {
      const O = Math.min(this.currentTime, l) / p;
      let $ = Math.floor(O),
        z = O % 1;
      !z && O >= 1 && (z = 1),
        z === 1 && $--,
        ($ = Math.min($, y + 1)),
        !!($ % 2) &&
          (v === "reverse"
            ? ((z = 1 - z), E && (z -= E / p))
            : v === "mirror" && (R = f)),
        (D = Gi(0, 1, z) * p);
    }
    const M = C ? { done: !1, value: x[0] } : R.next(D);
    c && (M.value = c(M.value));
    let { done: L } = M;
    !C &&
      m !== null &&
      (L =
        this.playbackSpeed >= 0
          ? this.currentTime >= l
          : this.currentTime <= 0);
    const _ =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && L));
    return (
      _ && b !== dh && (M.value = cd(x, this.options, A, this.speed)),
      S && S(M.value),
      _ && this.finish(),
      M
    );
  }
  then(i, a) {
    return this.finished.then(i, a);
  }
  get duration() {
    return Xn(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + Xn(i);
  }
  get time() {
    return Xn(this.currentTime);
  }
  set time(i) {
    var a;
    (i = Ei(i)),
      (this.currentTime = i),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = i)
        : this.driver &&
          (this.startTime = this.driver.now() - i / this.playbackSpeed),
      (a = this.driver) == null || a.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    this.updateTime(pn.now());
    const a = this.playbackSpeed !== i;
    (this.playbackSpeed = i), a && (this.time = Xn(this.currentTime));
  }
  play() {
    var l, c;
    if (this.isStopped) return;
    const { driver: i = Y6, startTime: a } = this.options;
    this.driver || (this.driver = i((f) => this.tick(f))),
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
      this.updateTime(pn.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var i, a;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (a = (i = this.options).onComplete) == null || a.call(i);
  }
  cancel() {
    var i, a;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (a = (i = this.options).onCancel) == null || a.call(i);
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(i) {
    return (this.startTime = 0), this.tick(i, !0);
  }
  attachTimeline(i) {
    var a;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (a = this.driver) == null || a.stop(),
      i.observe(this)
    );
  }
}
function lS(n) {
  var i;
  for (let a = 1; a < n.length; a++) (i = n[a]) != null || (n[a] = n[a - 1]);
}
const ir = (n) => (n * 180) / Math.PI,
  ph = (n) => {
    const i = ir(Math.atan2(n[1], n[0]));
    return mh(i);
  },
  uS = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: ph,
    rotateZ: ph,
    skewX: (n) => ir(Math.atan(n[1])),
    skewY: (n) => ir(Math.atan(n[2])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2,
  },
  mh = (n) => ((n = n % 360), n < 0 && (n += 360), n),
  Ky = ph,
  Zy = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
  Qy = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]),
  cS = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Zy,
    scaleY: Qy,
    scale: (n) => (Zy(n) + Qy(n)) / 2,
    rotateX: (n) => mh(ir(Math.atan2(n[6], n[5]))),
    rotateY: (n) => mh(ir(Math.atan2(-n[2], n[0]))),
    rotateZ: Ky,
    rotate: Ky,
    skewX: (n) => ir(Math.atan(n[4])),
    skewY: (n) => ir(Math.atan(n[1])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2,
  };
function xh(n) {
  return n.includes("scale") ? 1 : 0;
}
function yh(n, i) {
  if (!n || n === "none") return xh(i);
  const a = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, l;
  if (a) (s = cS), (l = a);
  else {
    const p = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (s = uS), (l = p);
  }
  if (!l) return xh(i);
  const c = s[i],
    f = l[1].split(",").map(hS);
  return typeof c == "function" ? c(f) : f[c];
}
const fS = (n, i) => {
  const { transform: a = "none" } = getComputedStyle(n);
  return yh(a, i);
};
function hS(n) {
  return parseFloat(n.trim());
}
const rs = [
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
  ss = new Set(rs),
  $y = (n) => n === as || n === _e,
  dS = new Set(["x", "y", "z"]),
  pS = rs.filter((n) => !dS.has(n));
function mS(n) {
  const i = [];
  return (
    pS.forEach((a) => {
      const s = n.getValue(a);
      s !== void 0 &&
        (i.push([a, s.get()]), s.set(a.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const rr = {
  width: ({ x: n }, { paddingLeft: i = "0", paddingRight: a = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(a),
  height: ({ y: n }, { paddingTop: i = "0", paddingBottom: a = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(a),
  top: (n, { top: i }) => parseFloat(i),
  left: (n, { left: i }) => parseFloat(i),
  bottom: ({ y: n }, { top: i }) => parseFloat(i) + (n.max - n.min),
  right: ({ x: n }, { left: i }) => parseFloat(i) + (n.max - n.min),
  x: (n, { transform: i }) => yh(i, "x"),
  y: (n, { transform: i }) => yh(i, "y"),
};
rr.translateX = rr.x;
rr.translateY = rr.y;
const sr = new Set();
let vh = !1,
  gh = !1,
  Eh = !1;
function g2() {
  if (gh) {
    const n = Array.from(sr).filter((s) => s.needsMeasurement),
      i = new Set(n.map((s) => s.element)),
      a = new Map();
    i.forEach((s) => {
      const l = mS(s);
      l.length && (a.set(s, l), s.render());
    }),
      n.forEach((s) => s.measureInitialState()),
      i.forEach((s) => {
        s.render();
        const l = a.get(s);
        l &&
          l.forEach(([c, f]) => {
            var p;
            (p = s.getValue(c)) == null || p.set(f);
          });
      }),
      n.forEach((s) => s.measureEndState()),
      n.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      });
  }
  (gh = !1), (vh = !1), sr.forEach((n) => n.complete(Eh)), sr.clear();
}
function E2() {
  sr.forEach((n) => {
    n.readKeyframes(), n.needsMeasurement && (gh = !0);
  });
}
function xS() {
  (Eh = !0), E2(), g2(), (Eh = !1);
}
class dd {
  constructor(i, a, s, l, c, f = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...i]),
      (this.onComplete = a),
      (this.name = s),
      (this.motionValue = l),
      (this.element = c),
      (this.isAsync = f);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (sr.add(this),
          vh || ((vh = !0), pt.read(E2), pt.resolveKeyframes(g2)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: i,
      name: a,
      element: s,
      motionValue: l,
    } = this;
    if (i[0] === null) {
      const c = l == null ? void 0 : l.get(),
        f = i[i.length - 1];
      if (c !== void 0) i[0] = c;
      else if (s && a) {
        const p = s.readValue(a, f);
        p != null && (i[0] = p);
      }
      i[0] === void 0 && (i[0] = f), l && c === void 0 && l.set(i[0]);
    }
    lS(i);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(i = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
      sr.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (sr.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const yS = (n) => n.startsWith("--");
function vS(n, i, a) {
  yS(i) ? n.style.setProperty(i, a) : (n.style[i] = a);
}
const gS = ed(() => window.ScrollTimeline !== void 0),
  ES = {};
function bS(n, i) {
  const a = ed(n);
  return () => {
    var s;
    return (s = ES[i]) != null ? s : a();
  };
}
const b2 = bS(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch (n) {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  lo = ([n, i, a, s]) => `cubic-bezier(${n}, ${i}, ${a}, ${s})`,
  Jy = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: lo([0, 0.65, 0.55, 1]),
    circOut: lo([0.55, 0, 1, 0.45]),
    backIn: lo([0.31, 0.01, 0.66, -0.59]),
    backOut: lo([0.33, 1.53, 0.69, 0.99]),
  };
function A2(n, i) {
  if (n)
    return typeof n == "function"
      ? b2()
        ? x2(n, i)
        : "ease-out"
      : s2(n)
        ? lo(n)
        : Array.isArray(n)
          ? n.map((a) => A2(a, i) || Jy.easeOut)
          : Jy[n];
}
function AS(
  n,
  i,
  a,
  {
    delay: s = 0,
    duration: l = 300,
    repeat: c = 0,
    repeatType: f = "loop",
    ease: p = "easeOut",
    times: m,
  } = {},
  d = void 0,
) {
  const x = { [i]: a };
  m && (x.offset = m);
  const y = A2(p, l);
  Array.isArray(y) && (x.easing = y);
  const v = {
    delay: s,
    duration: l,
    easing: Array.isArray(y) ? "linear" : y,
    fill: "both",
    iterations: c + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return d && (v.pseudoElement = d), n.animate(x, v);
}
function S2(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function SS(a) {
  var s = a,
    { type: n } = s,
    i = hn(s, ["type"]);
  var l, c;
  return S2(n) && b2()
    ? n.applyToOptions(i)
    : ((l = i.duration) != null || (i.duration = 300),
      (c = i.ease) != null || (i.ease = "easeOut"),
      i);
}
class CS extends fd {
  constructor(i) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !i))
      return;
    const {
      element: a,
      name: s,
      keyframes: l,
      pseudoElement: c,
      allowFlatten: f = !1,
      finalKeyframe: p,
      onComplete: m,
    } = i;
    (this.isPseudoElement = !!c),
      (this.allowFlatten = f),
      (this.options = i),
      Ih(typeof i.type != "string");
    const d = SS(i);
    (this.animation = AS(a, s, l, d, c)),
      d.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !c)) {
          const x = cd(l, this.options, p, this.speed);
          this.updateMotionValue ? this.updateMotionValue(x) : vS(a, s, x),
            this.animation.cancel();
        }
        m == null || m(), this.notifyFinished();
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
    var i, a;
    (a = (i = this.animation).finish) == null || a.call(i);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch (i) {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: i } = this;
    i === "idle" ||
      i === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var i, a;
    this.isPseudoElement ||
      (a = (i = this.animation).commitStyles) == null ||
      a.call(i);
  }
  get duration() {
    var a, s;
    const i =
      ((s =
        (a = this.animation.effect) == null ? void 0 : a.getComputedTiming) ==
      null
        ? void 0
        : s.call(a).duration) || 0;
    return Xn(Number(i));
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + Xn(i);
  }
  get time() {
    return Xn(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    (this.finishedTime = null), (this.animation.currentTime = Ei(i));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(i) {
    i < 0 && (this.finishedTime = null), (this.animation.playbackRate = i);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(i) {
    this.animation.startTime = i;
  }
  attachTimeline({ timeline: i, observe: a }) {
    var s;
    return (
      this.allowFlatten &&
        ((s = this.animation.effect) == null ||
          s.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      i && gS() ? ((this.animation.timeline = i), Gn) : a(this)
    );
  }
}
const C2 = { anticipate: n2, backInOut: t2, circInOut: a2 };
function DS(n) {
  return n in C2;
}
function BS(n) {
  typeof n.ease == "string" && DS(n.ease) && (n.ease = C2[n.ease]);
}
const Wy = 10;
class _S extends CS {
  constructor(i) {
    BS(i),
      v2(i),
      super(i),
      i.startTime && (this.startTime = i.startTime),
      (this.options = i);
  }
  updateMotionValue(i) {
    var x;
    const d = this.options,
      { motionValue: a, onUpdate: s, onComplete: l, element: c } = d,
      f = hn(d, ["motionValue", "onUpdate", "onComplete", "element"]);
    if (!a) return;
    if (i !== void 0) {
      a.set(i);
      return;
    }
    const p = new hd(Ue(le({}, f), { autoplay: !1 })),
      m = Ei((x = this.finishedTime) != null ? x : this.time);
    a.setWithVelocity(p.sample(m - Wy).value, p.sample(m).value, Wy), p.stop();
  }
}
const Iy = (n, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" &&
          (_a.test(n) || n === "0") &&
          !n.startsWith("url("))
      );
function TS(n) {
  const i = n[0];
  if (n.length === 1) return !0;
  for (let a = 0; a < n.length; a++) if (n[a] !== i) return !0;
}
function RS(n, i, a, s) {
  const l = n[0];
  if (l === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const c = n[n.length - 1],
    f = Iy(l, i),
    p = Iy(c, i);
  return !f || !p ? !1 : TS(n) || ((a === "spring" || S2(a)) && s);
}
function bh(n) {
  (n.duration = 0), (n.type = "keyframes");
}
const wS = new Set(["opacity", "clipPath", "filter", "transform"]),
  MS = ed(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function OS(n) {
  var x;
  const {
    motionValue: i,
    name: a,
    repeatDelay: s,
    repeatType: l,
    damping: c,
    type: f,
  } = n;
  if (
    !(
      ((x = i == null ? void 0 : i.owner) == null
        ? void 0
        : x.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: m, transformTemplate: d } = i.owner.getProps();
  return (
    MS() &&
    a &&
    wS.has(a) &&
    (a !== "transform" || !d) &&
    !m &&
    !s &&
    l !== "mirror" &&
    c !== 0 &&
    f !== "inertia"
  );
}
const FS = 40;
class zS extends fd {
  constructor(v) {
    var E = v,
      {
        autoplay: i = !0,
        delay: a = 0,
        type: s = "keyframes",
        repeat: l = 0,
        repeatDelay: c = 0,
        repeatType: f = "loop",
        keyframes: p,
        name: m,
        motionValue: d,
        element: x,
      } = E,
      y = hn(E, [
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
        var w, C;
        this._animation &&
          (this._animation.stop(),
          (w = this.stopTimeline) == null || w.call(this)),
          (C = this.keyframeResolver) == null || C.cancel();
      }),
      (this.createdAt = pn.now());
    const b = le(
        {
          autoplay: i,
          delay: a,
          type: s,
          repeat: l,
          repeatDelay: c,
          repeatType: f,
          name: m,
          motionValue: d,
          element: x,
        },
        y,
      ),
      S = (x == null ? void 0 : x.KeyframeResolver) || dd;
    (this.keyframeResolver = new S(
      p,
      (w, C, D) => this.onKeyframesResolved(w, C, b, !D),
      m,
      d,
      x,
    )),
      (A = this.keyframeResolver) == null || A.scheduleResolve();
  }
  onKeyframesResolved(i, a, s, l) {
    this.keyframeResolver = void 0;
    const {
      name: c,
      type: f,
      velocity: p,
      delay: m,
      isHandoff: d,
      onUpdate: x,
    } = s;
    (this.resolvedAt = pn.now()),
      RS(i, c, f, p) ||
        ((Ki.instantAnimations || !m) && (x == null || x(cd(i, s, a))),
        (i[0] = i[i.length - 1]),
        bh(s),
        (s.repeat = 0));
    const y = l
        ? this.resolvedAt
          ? this.resolvedAt - this.createdAt > FS
            ? this.resolvedAt
            : this.createdAt
          : this.createdAt
        : void 0,
      v = Ue(le({ startTime: y, finalKeyframe: a }, s), { keyframes: i }),
      E =
        !d && OS(v)
          ? new _S(Ue(le({}, v), { element: v.motionValue.owner.current }))
          : new hd(v);
    E.finished.then(() => this.notifyFinished()).catch(Gn),
      this.pendingTimeline &&
        ((this.stopTimeline = E.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = E);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(i, a) {
    return this.finished.finally(i).then(() => {});
  }
  get animation() {
    var i;
    return (
      this._animation ||
        ((i = this.keyframeResolver) == null || i.resume(), xS()),
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
  set time(i) {
    this.animation.time = i;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(i) {
    this.animation.speed = i;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(i) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(i))
        : (this.pendingTimeline = i),
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
    var i;
    this._animation && this.animation.cancel(),
      (i = this.keyframeResolver) == null || i.cancel();
  }
}
const NS = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function LS(n) {
  const i = NS.exec(n);
  if (!i) return [,];
  const [, a, s, l] = i;
  return [`--${a != null ? a : s}`, l];
}
function D2(n, i, a = 1) {
  const [s, l] = LS(n);
  if (!s) return;
  const c = window.getComputedStyle(i).getPropertyValue(s);
  if (c) {
    const f = c.trim();
    return Kg(f) ? parseFloat(f) : f;
  }
  return rd(l) ? D2(l, i, a + 1) : l;
}
function pd(n, i) {
  var a, s;
  return (s =
    (a = n == null ? void 0 : n[i]) != null
      ? a
      : n == null
        ? void 0
        : n.default) != null
    ? s
    : n;
}
const B2 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...rs,
  ]),
  US = { test: (n) => n === "auto", parse: (n) => n },
  _2 = (n) => (i) => i.test(n),
  T2 = [as, _e, bi, Aa, T6, _6, US],
  ev = (n) => T2.find(_2(n));
function HS(n) {
  return typeof n == "number"
    ? n === 0
    : n !== null
      ? n === "none" || n === "0" || Qg(n)
      : !0;
}
const VS = new Set(["brightness", "contrast", "saturate", "opacity"]);
function kS(n) {
  const [i, a] = n.slice(0, -1).split("(");
  if (i === "drop-shadow") return n;
  const [s] = a.match(sd) || [];
  if (!s) return n;
  const l = a.replace(s, "");
  let c = VS.has(i) ? 1 : 0;
  return s !== a && (c *= 100), i + "(" + c + l + ")";
}
const jS = /\b([a-z-]*)\(.*?\)/gu,
  Ah = Ue(le({}, _a), {
    getAnimatableNone: (n) => {
      const i = n.match(jS);
      return i ? i.map(kS).join(" ") : n;
    },
  }),
  tv = Ue(le({}, as), { transform: Math.round }),
  qS = {
    rotate: Aa,
    rotateX: Aa,
    rotateY: Aa,
    rotateZ: Aa,
    scale: Kl,
    scaleX: Kl,
    scaleY: Kl,
    scaleZ: Kl,
    skew: Aa,
    skewX: Aa,
    skewY: Aa,
    distance: _e,
    translateX: _e,
    translateY: _e,
    translateZ: _e,
    x: _e,
    y: _e,
    z: _e,
    perspective: _e,
    transformPerspective: _e,
    opacity: go,
    originX: qy,
    originY: qy,
    originZ: _e,
  },
  md = Ue(
    le(
      {
        borderWidth: _e,
        borderTopWidth: _e,
        borderRightWidth: _e,
        borderBottomWidth: _e,
        borderLeftWidth: _e,
        borderRadius: _e,
        radius: _e,
        borderTopLeftRadius: _e,
        borderTopRightRadius: _e,
        borderBottomRightRadius: _e,
        borderBottomLeftRadius: _e,
        width: _e,
        maxWidth: _e,
        height: _e,
        maxHeight: _e,
        top: _e,
        right: _e,
        bottom: _e,
        left: _e,
        padding: _e,
        paddingTop: _e,
        paddingRight: _e,
        paddingBottom: _e,
        paddingLeft: _e,
        margin: _e,
        marginTop: _e,
        marginRight: _e,
        marginBottom: _e,
        marginLeft: _e,
        backgroundPositionX: _e,
        backgroundPositionY: _e,
      },
      qS,
    ),
    { zIndex: tv, fillOpacity: go, strokeOpacity: go, numOctaves: tv },
  ),
  PS = Ue(le({}, md), {
    color: Rt,
    backgroundColor: Rt,
    outlineColor: Rt,
    fill: Rt,
    stroke: Rt,
    borderColor: Rt,
    borderTopColor: Rt,
    borderRightColor: Rt,
    borderBottomColor: Rt,
    borderLeftColor: Rt,
    filter: Ah,
    WebkitFilter: Ah,
  }),
  R2 = (n) => PS[n];
function w2(n, i) {
  let a = R2(n);
  return (
    a !== Ah && (a = _a), a.getAnimatableNone ? a.getAnimatableNone(i) : void 0
  );
}
const YS = new Set(["auto", "none", "0"]);
function XS(n, i, a) {
  let s = 0,
    l;
  for (; s < n.length && !l; ) {
    const c = n[s];
    typeof c == "string" && !YS.has(c) && Eo(c).values.length && (l = n[s]),
      s++;
  }
  if (l && a) for (const c of i) n[c] = w2(a, l);
}
class GS extends dd {
  constructor(i, a, s, l, c) {
    super(i, a, s, l, c, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: a, name: s } = this;
    if (!a || !a.current) return;
    super.readKeyframes();
    for (let m = 0; m < i.length; m++) {
      let d = i[m];
      if (typeof d == "string" && ((d = d.trim()), rd(d))) {
        const x = D2(d, a.current);
        x !== void 0 && (i[m] = x),
          m === i.length - 1 && (this.finalKeyframe = d);
      }
    }
    if ((this.resolveNoneKeyframes(), !B2.has(s) || i.length !== 2)) return;
    const [l, c] = i,
      f = ev(l),
      p = ev(c);
    if (f !== p)
      if ($y(f) && $y(p))
        for (let m = 0; m < i.length; m++) {
          const d = i[m];
          typeof d == "string" && (i[m] = parseFloat(d));
        }
      else rr[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: a } = this,
      s = [];
    for (let l = 0; l < i.length; l++) (i[l] === null || HS(i[l])) && s.push(l);
    s.length && XS(i, s, a);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: a, name: s } = this;
    if (!i || !i.current) return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = rr[s](
        i.measureViewportBox(),
        window.getComputedStyle(i.current),
      )),
      (a[0] = this.measuredOrigin);
    const l = a[a.length - 1];
    l !== void 0 && i.getValue(s, l).jump(l, !1);
  }
  measureEndState() {
    var p;
    const { element: i, name: a, unresolvedKeyframes: s } = this;
    if (!i || !i.current) return;
    const l = i.getValue(a);
    l && l.jump(this.measuredOrigin, !1);
    const c = s.length - 1,
      f = s[c];
    (s[c] = rr[a](i.measureViewportBox(), window.getComputedStyle(i.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      (p = this.removedTransforms) != null &&
        p.length &&
        this.removedTransforms.forEach(([m, d]) => {
          i.getValue(m).set(d);
        }),
      this.resolveNoneKeyframes();
  }
}
function KS(n, i, a) {
  var s;
  if (n instanceof EventTarget) return [n];
  if (typeof n == "string") {
    let l = document;
    const c =
      (s = a == null ? void 0 : a[n]) != null ? s : l.querySelectorAll(n);
    return c ? Array.from(c) : [];
  }
  return Array.from(n);
}
const M2 = (n, i) => (i && typeof n == "number" ? i.transform(n) : n);
function O2(n) {
  return Zg(n) && "offsetHeight" in n;
}
const nv = 30,
  ZS = (n) => !isNaN(parseFloat(n));
class QS {
  constructor(i, a = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s) => {
        var c;
        const l = pn.now();
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
      this.setCurrent(i),
      (this.owner = a.owner);
  }
  setCurrent(i) {
    (this.current = i),
      (this.updatedAt = pn.now()),
      this.canTrackVelocity === null &&
        i !== void 0 &&
        (this.canTrackVelocity = ZS(this.current));
  }
  setPrevFrameValue(i = this.current) {
    (this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, a) {
    this.events[i] || (this.events[i] = new td());
    const s = this.events[i].add(a);
    return i === "change"
      ? () => {
          s(),
            pt.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : s;
  }
  clearListeners() {
    for (const i in this.events) this.events[i].clear();
  }
  attach(i, a) {
    (this.passiveEffect = i), (this.stopPassiveEffect = a);
  }
  set(i) {
    this.passiveEffect
      ? this.passiveEffect(i, this.updateAndNotify)
      : this.updateAndNotify(i);
  }
  setWithVelocity(i, a, s) {
    this.set(a),
      (this.prev = void 0),
      (this.prevFrameValue = i),
      (this.prevUpdatedAt = this.updatedAt - s);
  }
  jump(i, a = !0) {
    this.updateAndNotify(i),
      (this.prev = i),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      a && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var i;
    (i = this.events.change) == null || i.notify(this.current);
  }
  addDependent(i) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(i);
  }
  removeDependent(i) {
    this.dependents && this.dependents.delete(i);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const i = pn.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      i - this.updatedAt > nv
    )
      return 0;
    const a = Math.min(this.updatedAt - this.prevUpdatedAt, nv);
    return $g(parseFloat(this.current) - parseFloat(this.prevFrameValue), a);
  }
  start(i) {
    return (
      this.stop(),
      new Promise((a) => {
        (this.hasAnimated = !0),
          (this.animation = i(a)),
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
    var i, a;
    (i = this.dependents) == null || i.clear(),
      (a = this.events.destroy) == null || a.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function es(n, i) {
  return new QS(n, i);
}
const { schedule: xd } = o2(queueMicrotask, !1),
  ti = { x: !1, y: !1 };
function F2() {
  return ti.x || ti.y;
}
function $S(n) {
  return n === "x" || n === "y"
    ? ti[n]
      ? null
      : ((ti[n] = !0),
        () => {
          ti[n] = !1;
        })
    : ti.x || ti.y
      ? null
      : ((ti.x = ti.y = !0),
        () => {
          ti.x = ti.y = !1;
        });
}
function z2(n, i) {
  const a = KS(n),
    s = new AbortController(),
    l = Ue(le({ passive: !0 }, i), { signal: s.signal });
  return [a, l, () => s.abort()];
}
function iv(n) {
  return !(n.pointerType === "touch" || F2());
}
function JS(n, i, a = {}) {
  const [s, l, c] = z2(n, a),
    f = (p) => {
      if (!iv(p)) return;
      const { target: m } = p,
        d = i(m, p);
      if (typeof d != "function" || !m) return;
      const x = (y) => {
        iv(y) && (d(y), m.removeEventListener("pointerleave", x));
      };
      m.addEventListener("pointerleave", x, l);
    };
  return (
    s.forEach((p) => {
      p.addEventListener("pointerenter", f, l);
    }),
    c
  );
}
const N2 = (n, i) => (i ? (n === i ? !0 : N2(n, i.parentElement)) : !1),
  yd = (n) =>
    n.pointerType === "mouse"
      ? typeof n.button != "number" || n.button <= 0
      : n.isPrimary !== !1,
  WS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function IS(n) {
  return WS.has(n.tagName) || n.tabIndex !== -1;
}
const Uu = new WeakSet();
function av(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function Yf(n, i) {
  n.dispatchEvent(
    new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }),
  );
}
const eC = (n, i) => {
  const a = n.currentTarget;
  if (!a) return;
  const s = av(() => {
    if (Uu.has(a)) return;
    Yf(a, "down");
    const l = av(() => {
        Yf(a, "up");
      }),
      c = () => Yf(a, "cancel");
    a.addEventListener("keyup", l, i), a.addEventListener("blur", c, i);
  });
  a.addEventListener("keydown", s, i),
    a.addEventListener("blur", () => a.removeEventListener("keydown", s), i);
};
function rv(n) {
  return yd(n) && !F2();
}
function tC(n, i, a = {}) {
  const [s, l, c] = z2(n, a),
    f = (p) => {
      const m = p.currentTarget;
      if (!rv(p)) return;
      Uu.add(m);
      const d = i(m, p),
        x = (E, b) => {
          window.removeEventListener("pointerup", y),
            window.removeEventListener("pointercancel", v),
            Uu.has(m) && Uu.delete(m),
            rv(E) && typeof d == "function" && d(E, { success: b });
        },
        y = (E) => {
          x(
            E,
            m === window ||
              m === document ||
              a.useGlobalTarget ||
              N2(m, E.target),
          );
        },
        v = (E) => {
          x(E, !1);
        };
      window.addEventListener("pointerup", y, l),
        window.addEventListener("pointercancel", v, l);
    };
  return (
    s.forEach((p) => {
      (a.useGlobalTarget ? window : p).addEventListener("pointerdown", f, l),
        O2(p) &&
          (p.addEventListener("focus", (d) => eC(d, l)),
          !IS(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0));
    }),
    c
  );
}
function L2(n) {
  return Zg(n) && "ownerSVGElement" in n;
}
function nC(n) {
  return L2(n) && n.tagName === "svg";
}
const $t = (n) => !!(n && n.getVelocity),
  iC = [...T2, Rt, _a],
  aC = (n) => iC.find(_2(n)),
  vd = J.createContext({
    transformPagePoint: (n) => n,
    isStatic: !1,
    reducedMotion: "never",
  });
function sv(n, i) {
  if (typeof n == "function") return n(i);
  n != null && (n.current = i);
}
function rC(...n) {
  return (i) => {
    let a = !1;
    const s = n.map((l) => {
      const c = sv(l, i);
      return !a && typeof c == "function" && (a = !0), c;
    });
    if (a)
      return () => {
        for (let l = 0; l < s.length; l++) {
          const c = s[l];
          typeof c == "function" ? c() : sv(n[l], null);
        }
      };
  };
}
function sC(...n) {
  return J.useCallback(rC(...n), n);
}
class oC extends J.Component {
  getSnapshotBeforeUpdate(i) {
    const a = this.props.childRef.current;
    if (a && i.isPresent && !this.props.isPresent) {
      const s = a.offsetParent,
        l = (O2(s) && s.offsetWidth) || 0,
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
function lC({ children: n, isPresent: i, anchorX: a, root: s }) {
  const l = J.useId(),
    c = J.useRef(null),
    f = J.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: p } = J.useContext(vd),
    m = sC(c, n == null ? void 0 : n.ref);
  return (
    J.useInsertionEffect(() => {
      const { width: d, height: x, top: y, left: v, right: E } = f.current;
      if (i || !c.current || !d || !x) return;
      const b = a === "left" ? `left: ${v}` : `right: ${E}`;
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
            width: ${d}px !important;
            height: ${x}px !important;
            ${b}px !important;
            top: ${y}px !important;
          }
        `),
        () => {
          A.contains(S) && A.removeChild(S);
        }
      );
    }, [i]),
    Xi.jsx(oC, {
      isPresent: i,
      childRef: c,
      sizeRef: f,
      children: J.cloneElement(n, { ref: m }),
    })
  );
}
const uC = ({
  children: n,
  initial: i,
  isPresent: a,
  onExitComplete: s,
  custom: l,
  presenceAffectsLayout: c,
  mode: f,
  anchorX: p,
  root: m,
}) => {
  const d = Qh(cC),
    x = J.useId();
  let y = !0,
    v = J.useMemo(
      () => (
        (y = !1),
        {
          id: x,
          initial: i,
          isPresent: a,
          custom: l,
          onExitComplete: (E) => {
            d.set(E, !0);
            for (const b of d.values()) if (!b) return;
            s && s();
          },
          register: (E) => (d.set(E, !1), () => d.delete(E)),
        }
      ),
      [a, d, s],
    );
  return (
    c && y && (v = le({}, v)),
    J.useMemo(() => {
      d.forEach((E, b) => d.set(b, !1));
    }, [a]),
    J.useEffect(() => {
      !a && !d.size && s && s();
    }, [a]),
    f === "popLayout" &&
      (n = Xi.jsx(lC, { isPresent: a, anchorX: p, root: m, children: n })),
    Xi.jsx(lc.Provider, { value: v, children: n })
  );
};
function cC() {
  return new Map();
}
function U2(n = !0) {
  const i = J.useContext(lc);
  if (i === null) return [!0, null];
  const { isPresent: a, onExitComplete: s, register: l } = i,
    c = J.useId();
  J.useEffect(() => {
    if (n) return l(c);
  }, [n]);
  const f = J.useCallback(() => n && s && s(c), [c, s, n]);
  return !a && s ? [!1, f] : [!0];
}
const Zl = (n) => n.key || "";
function ov(n) {
  const i = [];
  return (
    J.Children.forEach(n, (a) => {
      J.isValidElement(a) && i.push(a);
    }),
    i
  );
}
const u9 = ({
    children: n,
    custom: i,
    initial: a = !0,
    onExitComplete: s,
    presenceAffectsLayout: l = !0,
    mode: c = "sync",
    propagate: f = !1,
    anchorX: p = "left",
    root: m,
  }) => {
    const [d, x] = U2(f),
      y = J.useMemo(() => ov(n), [n]),
      v = f && !d ? [] : y.map(Zl),
      E = J.useRef(!0),
      b = J.useRef(y),
      S = Qh(() => new Map()),
      [A, w] = J.useState(y),
      [C, D] = J.useState(y);
    Gg(() => {
      (E.current = !1), (b.current = y);
      for (let L = 0; L < C.length; L++) {
        const _ = Zl(C[L]);
        v.includes(_) ? S.delete(_) : S.get(_) !== !0 && S.set(_, !1);
      }
    }, [C, v.length, v.join("-")]);
    const R = [];
    if (y !== A) {
      let L = [...y];
      for (let _ = 0; _ < C.length; _++) {
        const O = C[_],
          $ = Zl(O);
        v.includes($) || (L.splice(_, 0, O), R.push(O));
      }
      return c === "wait" && R.length && (L = R), D(ov(L)), w(y), null;
    }
    const { forceRender: M } = J.useContext(Zh);
    return Xi.jsx(Xi.Fragment, {
      children: C.map((L) => {
        const _ = Zl(L),
          O = f && !d ? !1 : y === C || v.includes(_),
          $ = () => {
            if (S.has(_)) S.set(_, !0);
            else return;
            let z = !0;
            S.forEach((j) => {
              j || (z = !1);
            }),
              z &&
                (M == null || M(),
                D(b.current),
                f && (x == null || x()),
                s && s());
          };
        return Xi.jsx(
          uC,
          {
            isPresent: O,
            initial: !E.current || a ? void 0 : !1,
            custom: i,
            presenceAffectsLayout: l,
            mode: c,
            root: m,
            onExitComplete: O ? void 0 : $,
            anchorX: p,
            children: L,
          },
          _,
        );
      }),
    });
  },
  H2 = J.createContext({ strict: !1 }),
  lv = {
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
  ts = {};
for (const n in lv) ts[n] = { isEnabled: (i) => lv[n].some((a) => !!i[a]) };
function fC(n) {
  for (const i in n) ts[i] = le(le({}, ts[i]), n[i]);
}
const hC = new Set([
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
function ec(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    hC.has(n)
  );
}
let V2 = (n) => !ec(n);
function dC(n) {
  typeof n == "function" && (V2 = (i) => (i.startsWith("on") ? !ec(i) : n(i)));
}
try {
  dC(require("@emotion/is-prop-valid").default);
} catch (n) {}
function pC(n, i, a) {
  const s = {};
  for (const l in n)
    (l === "values" && typeof n.values == "object") ||
      ((V2(l) ||
        (a === !0 && ec(l)) ||
        (!i && !ec(l)) ||
        (n.draggable && l.startsWith("onDrag"))) &&
        (s[l] = n[l]));
  return s;
}
const uc = J.createContext({});
function cc(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function bo(n) {
  return typeof n == "string" || Array.isArray(n);
}
const gd = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Ed = ["initial", ...gd];
function fc(n) {
  return cc(n.animate) || Ed.some((i) => bo(n[i]));
}
function k2(n) {
  return !!(fc(n) || n.variants);
}
function mC(n, i) {
  if (fc(n)) {
    const { initial: a, animate: s } = n;
    return {
      initial: a === !1 || bo(a) ? a : void 0,
      animate: bo(s) ? s : void 0,
    };
  }
  return n.inherit !== !1 ? i : {};
}
function xC(n) {
  const { initial: i, animate: a } = mC(n, J.useContext(uc));
  return J.useMemo(() => ({ initial: i, animate: a }), [uv(i), uv(a)]);
}
function uv(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const Ao = {};
function yC(n) {
  for (const i in n) (Ao[i] = n[i]), ad(i) && (Ao[i].isCSSVariable = !0);
}
function j2(n, { layout: i, layoutId: a }) {
  return (
    ss.has(n) ||
    n.startsWith("origin") ||
    ((i || a !== void 0) && (!!Ao[n] || n === "opacity"))
  );
}
const vC = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  gC = rs.length;
function EC(n, i, a) {
  let s = "",
    l = !0;
  for (let c = 0; c < gC; c++) {
    const f = rs[c],
      p = n[f];
    if (p === void 0) continue;
    let m = !0;
    if (
      (typeof p == "number"
        ? (m = p === (f.startsWith("scale") ? 1 : 0))
        : (m = parseFloat(p) === 0),
      !m || a)
    ) {
      const d = M2(p, md[f]);
      if (!m) {
        l = !1;
        const x = vC[f] || f;
        s += `${x}(${d}) `;
      }
      a && (i[f] = d);
    }
  }
  return (s = s.trim()), a ? (s = a(i, l ? "" : s)) : l && (s = "none"), s;
}
function bd(n, i, a) {
  const { style: s, vars: l, transformOrigin: c } = n;
  let f = !1,
    p = !1;
  for (const m in i) {
    const d = i[m];
    if (ss.has(m)) {
      f = !0;
      continue;
    } else if (ad(m)) {
      l[m] = d;
      continue;
    } else {
      const x = M2(d, md[m]);
      m.startsWith("origin") ? ((p = !0), (c[m] = x)) : (s[m] = x);
    }
  }
  if (
    (i.transform ||
      (f || a
        ? (s.transform = EC(i, n.transform, a))
        : s.transform && (s.transform = "none")),
    p)
  ) {
    const { originX: m = "50%", originY: d = "50%", originZ: x = 0 } = c;
    s.transformOrigin = `${m} ${d} ${x}`;
  }
}
const Ad = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function q2(n, i, a) {
  for (const s in i) !$t(i[s]) && !j2(s, a) && (n[s] = i[s]);
}
function bC({ transformTemplate: n }, i) {
  return J.useMemo(() => {
    const a = Ad();
    return bd(a, i, n), Object.assign({}, a.vars, a.style);
  }, [i]);
}
function AC(n, i) {
  const a = n.style || {},
    s = {};
  return q2(s, a, n), Object.assign(s, bC(n, i)), s;
}
function SC(n, i) {
  const a = {},
    s = AC(n, i);
  return (
    n.drag &&
      n.dragListener !== !1 &&
      ((a.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction =
        n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`)),
    n.tabIndex === void 0 &&
      (n.onTap || n.onTapStart || n.whileTap) &&
      (a.tabIndex = 0),
    (a.style = s),
    a
  );
}
const CC = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  DC = { offset: "strokeDashoffset", array: "strokeDasharray" };
function BC(n, i, a = 1, s = 0, l = !0) {
  n.pathLength = 1;
  const c = l ? CC : DC;
  n[c.offset] = _e.transform(-s);
  const f = _e.transform(i),
    p = _e.transform(a);
  n[c.array] = `${f} ${p}`;
}
function P2(n, y, m, d, x) {
  var v = y,
    {
      attrX: i,
      attrY: a,
      attrScale: s,
      pathLength: l,
      pathSpacing: c = 1,
      pathOffset: f = 0,
    } = v,
    p = hn(v, [
      "attrX",
      "attrY",
      "attrScale",
      "pathLength",
      "pathSpacing",
      "pathOffset",
    ]);
  var S, A;
  if ((bd(n, p, d), m)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  (n.attrs = n.style), (n.style = {});
  const { attrs: E, style: b } = n;
  E.transform && ((b.transform = E.transform), delete E.transform),
    (b.transform || E.transformOrigin) &&
      ((b.transformOrigin = (S = E.transformOrigin) != null ? S : "50% 50%"),
      delete E.transformOrigin),
    b.transform &&
      ((b.transformBox =
        (A = x == null ? void 0 : x.transformBox) != null ? A : "fill-box"),
      delete E.transformBox),
    i !== void 0 && (E.x = i),
    a !== void 0 && (E.y = a),
    s !== void 0 && (E.scale = s),
    l !== void 0 && BC(E, l, c, f, !1);
}
const Y2 = () => Ue(le({}, Ad()), { attrs: {} }),
  X2 = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function _C(n, i, a, s) {
  const l = J.useMemo(() => {
    const c = Y2();
    return (
      P2(c, i, X2(s), n.transformTemplate, n.style),
      Ue(le({}, c.attrs), { style: le({}, c.style) })
    );
  }, [i]);
  if (n.style) {
    const c = {};
    q2(c, n.style, n), (l.style = le(le({}, c), l.style));
  }
  return l;
}
const TC = [
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
function Sd(n) {
  return typeof n != "string" || n.includes("-")
    ? !1
    : !!(TC.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function RC(n, i, a, { latestValues: s }, l, c = !1) {
  const p = (Sd(n) ? _C : SC)(i, s, l, n),
    m = pC(i, typeof n == "string", c),
    d = n !== J.Fragment ? Ue(le(le({}, m), p), { ref: a }) : {},
    { children: x } = i,
    y = J.useMemo(() => ($t(x) ? x.get() : x), [x]);
  return J.createElement(n, Ue(le({}, d), { children: y }));
}
function cv(n) {
  const i = [{}, {}];
  return (
    n == null ||
      n.values.forEach((a, s) => {
        (i[0][s] = a.get()), (i[1][s] = a.getVelocity());
      }),
    i
  );
}
function Cd(n, i, a, s) {
  if (typeof i == "function") {
    const [l, c] = cv(s);
    i = i(a !== void 0 ? a : n.custom, l, c);
  }
  if (
    (typeof i == "string" && (i = n.variants && n.variants[i]),
    typeof i == "function")
  ) {
    const [l, c] = cv(s);
    i = i(a !== void 0 ? a : n.custom, l, c);
  }
  return i;
}
function Hu(n) {
  return $t(n) ? n.get() : n;
}
function wC({ scrapeMotionValuesFromProps: n, createRenderState: i }, a, s, l) {
  return { latestValues: MC(a, s, l, n), renderState: i() };
}
function MC(n, i, a, s) {
  const l = {},
    c = s(n, {});
  for (const E in c) l[E] = Hu(c[E]);
  let { initial: f, animate: p } = n;
  const m = fc(n),
    d = k2(n);
  i &&
    d &&
    !m &&
    n.inherit !== !1 &&
    (f === void 0 && (f = i.initial), p === void 0 && (p = i.animate));
  let x = a ? a.initial === !1 : !1;
  x = x || f === !1;
  const y = x ? p : f;
  if (y && typeof y != "boolean" && !cc(y)) {
    const E = Array.isArray(y) ? y : [y];
    for (let b = 0; b < E.length; b++) {
      const S = Cd(n, E[b]);
      if (S) {
        const v = S,
          { transitionEnd: A, transition: w } = v,
          C = hn(v, ["transitionEnd", "transition"]);
        for (const D in C) {
          let R = C[D];
          if (Array.isArray(R)) {
            const M = x ? R.length - 1 : 0;
            R = R[M];
          }
          R !== null && (l[D] = R);
        }
        for (const D in A) l[D] = A[D];
      }
    }
  }
  return l;
}
const G2 = (n) => (i, a) => {
  const s = J.useContext(uc),
    l = J.useContext(lc),
    c = () => wC(n, i, s, l);
  return a ? c() : Qh(c);
};
function Dd(n, i, a) {
  var c;
  const { style: s } = n,
    l = {};
  for (const f in s)
    ($t(s[f]) ||
      (i.style && $t(i.style[f])) ||
      j2(f, n) ||
      ((c = a == null ? void 0 : a.getValue(f)) == null
        ? void 0
        : c.liveStyle) !== void 0) &&
      (l[f] = s[f]);
  return l;
}
const OC = G2({ scrapeMotionValuesFromProps: Dd, createRenderState: Ad });
function K2(n, i, a) {
  const s = Dd(n, i, a);
  for (const l in n)
    if ($t(n[l]) || $t(i[l])) {
      const c =
        rs.indexOf(l) !== -1
          ? "attr" + l.charAt(0).toUpperCase() + l.substring(1)
          : l;
      s[c] = n[l];
    }
  return s;
}
const FC = G2({ scrapeMotionValuesFromProps: K2, createRenderState: Y2 }),
  zC = Symbol.for("motionComponentSymbol");
function Kr(n) {
  return (
    n &&
    typeof n == "object" &&
    Object.prototype.hasOwnProperty.call(n, "current")
  );
}
function NC(n, i, a) {
  return J.useCallback(
    (s) => {
      s && n.onMount && n.onMount(s),
        i && (s ? i.mount(s) : i.unmount()),
        a && (typeof a == "function" ? a(s) : Kr(a) && (a.current = s));
    },
    [i],
  );
}
const Bd = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  LC = "framerAppearId",
  Z2 = "data-" + Bd(LC),
  Q2 = J.createContext({});
function UC(n, i, a, s, l) {
  var S, A;
  const { visualElement: c } = J.useContext(uc),
    f = J.useContext(H2),
    p = J.useContext(lc),
    m = J.useContext(vd).reducedMotion,
    d = J.useRef(null);
  (s = s || f.renderer),
    !d.current &&
      s &&
      (d.current = s(n, {
        visualState: i,
        parent: c,
        props: a,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: m,
      }));
  const x = d.current,
    y = J.useContext(Q2);
  x &&
    !x.projection &&
    l &&
    (x.type === "html" || x.type === "svg") &&
    HC(d.current, a, l, y);
  const v = J.useRef(!1);
  J.useInsertionEffect(() => {
    x && v.current && x.update(a, p);
  });
  const E = a[Z2],
    b = J.useRef(
      !!E &&
        !((S = window.MotionHandoffIsComplete) != null && S.call(window, E)) &&
        ((A = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : A.call(window, E)),
    );
  return (
    Gg(() => {
      x &&
        ((v.current = !0),
        (window.MotionIsMounted = !0),
        x.updateFeatures(),
        x.scheduleRenderMicrotask(),
        b.current && x.animationState && x.animationState.animateChanges());
    }),
    J.useEffect(() => {
      x &&
        (!b.current && x.animationState && x.animationState.animateChanges(),
        b.current &&
          (queueMicrotask(() => {
            var w;
            (w = window.MotionHandoffMarkAsComplete) == null ||
              w.call(window, E);
          }),
          (b.current = !1)),
        (x.enteringChildren = void 0));
    }),
    x
  );
}
function HC(n, i, a, s) {
  const {
    layoutId: l,
    layout: c,
    drag: f,
    dragConstraints: p,
    layoutScroll: m,
    layoutRoot: d,
    layoutCrossfade: x,
  } = i;
  (n.projection = new a(
    n.latestValues,
    i["data-framer-portal-id"] ? void 0 : $2(n.parent),
  )),
    n.projection.setOptions({
      layoutId: l,
      layout: c,
      alwaysMeasureLayout: !!f || (p && Kr(p)),
      visualElement: n,
      animationType: typeof c == "string" ? c : "both",
      initialPromotionConfig: s,
      crossfade: x,
      layoutScroll: m,
      layoutRoot: d,
    });
}
function $2(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : $2(n.parent);
}
function Xf(n, { forwardMotionProps: i = !1 } = {}, a, s) {
  var p, m;
  a && fC(a);
  const l = Sd(n) ? FC : OC;
  function c(d, x) {
    let y;
    const v = Ue(le(le({}, J.useContext(vd)), d), { layoutId: VC(d) }),
      { isStatic: E } = v,
      b = xC(d),
      S = l(d, E);
    if (!E && $h) {
      kC();
      const A = jC(v);
      (y = A.MeasureLayout),
        (b.visualElement = UC(n, S, v, s, A.ProjectionNode));
    }
    return Xi.jsxs(uc.Provider, {
      value: b,
      children: [
        y && b.visualElement
          ? Xi.jsx(y, le({ visualElement: b.visualElement }, v))
          : null,
        RC(n, d, NC(S, b.visualElement, x), S, E, i),
      ],
    });
  }
  c.displayName = `motion.${typeof n == "string" ? n : `create(${(m = (p = n.displayName) != null ? p : n.name) != null ? m : ""})`}`;
  const f = J.forwardRef(c);
  return (f[zC] = n), f;
}
function VC({ layoutId: n }) {
  const i = J.useContext(Zh).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function kC(n, i) {
  J.useContext(H2).strict;
}
function jC(n) {
  const { drag: i, layout: a } = ts;
  if (!i && !a) return {};
  const s = le(le({}, i), a);
  return {
    MeasureLayout:
      (i != null && i.isEnabled(n)) || (a != null && a.isEnabled(n))
        ? s.MeasureLayout
        : void 0,
    ProjectionNode: s.ProjectionNode,
  };
}
function qC(n, i) {
  if (typeof Proxy == "undefined") return Xf;
  const a = new Map(),
    s = (c, f) => Xf(c, f, n, i),
    l = (c, f) => s(c, f);
  return new Proxy(l, {
    get: (c, f) =>
      f === "create"
        ? s
        : (a.has(f) || a.set(f, Xf(f, void 0, n, i)), a.get(f)),
  });
}
function J2({ top: n, left: i, right: a, bottom: s }) {
  return { x: { min: i, max: a }, y: { min: n, max: s } };
}
function PC({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function YC(n, i) {
  if (!i) return n;
  const a = i({ x: n.left, y: n.top }),
    s = i({ x: n.right, y: n.bottom });
  return { top: a.y, left: a.x, bottom: s.y, right: s.x };
}
function Gf(n) {
  return n === void 0 || n === 1;
}
function Sh({ scale: n, scaleX: i, scaleY: a }) {
  return !Gf(n) || !Gf(i) || !Gf(a);
}
function Wa(n) {
  return (
    Sh(n) ||
    W2(n) ||
    n.z ||
    n.rotate ||
    n.rotateX ||
    n.rotateY ||
    n.skewX ||
    n.skewY
  );
}
function W2(n) {
  return fv(n.x) || fv(n.y);
}
function fv(n) {
  return n && n !== "0%";
}
function tc(n, i, a) {
  const s = n - a,
    l = i * s;
  return a + l;
}
function hv(n, i, a, s, l) {
  return l !== void 0 && (n = tc(n, l, s)), tc(n, a, s) + i;
}
function Ch(n, i = 0, a = 1, s, l) {
  (n.min = hv(n.min, i, a, s, l)), (n.max = hv(n.max, i, a, s, l));
}
function I2(n, { x: i, y: a }) {
  Ch(n.x, i.translate, i.scale, i.originPoint),
    Ch(n.y, a.translate, a.scale, a.originPoint);
}
const dv = 0.999999999999,
  pv = 1.0000000000001;
function XC(n, i, a, s = !1) {
  const l = a.length;
  if (!l) return;
  i.x = i.y = 1;
  let c, f;
  for (let p = 0; p < l; p++) {
    (c = a[p]), (f = c.projectionDelta);
    const { visualElement: m } = c.options;
    (m && m.props.style && m.props.style.display === "contents") ||
      (s &&
        c.options.layoutScroll &&
        c.scroll &&
        c !== c.root &&
        Qr(n, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), I2(n, f)),
      s && Wa(c.latestValues) && Qr(n, c.latestValues));
  }
  i.x < pv && i.x > dv && (i.x = 1), i.y < pv && i.y > dv && (i.y = 1);
}
function Zr(n, i) {
  (n.min = n.min + i), (n.max = n.max + i);
}
function mv(n, i, a, s, l = 0.5) {
  const c = mt(n.min, n.max, l);
  Ch(n, i, a, c, s);
}
function Qr(n, i) {
  mv(n.x, i.x, i.scaleX, i.scale, i.originX),
    mv(n.y, i.y, i.scaleY, i.scale, i.originY);
}
function e4(n, i) {
  return J2(YC(n.getBoundingClientRect(), i));
}
function GC(n, i, a) {
  const s = e4(n, a),
    { scroll: l } = i;
  return l && (Zr(s.x, l.offset.x), Zr(s.y, l.offset.y)), s;
}
const xv = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  $r = () => ({ x: xv(), y: xv() }),
  yv = () => ({ min: 0, max: 0 }),
  St = () => ({ x: yv(), y: yv() }),
  Dh = { current: null },
  t4 = { current: !1 };
function KC() {
  if (((t4.current = !0), !!$h))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (Dh.current = n.matches);
      n.addEventListener("change", i), i();
    } else Dh.current = !1;
}
const ZC = new WeakMap();
function QC(n, i, a) {
  for (const s in i) {
    const l = i[s],
      c = a[s];
    if ($t(l)) n.addValue(s, l);
    else if ($t(c)) n.addValue(s, es(l, { owner: n }));
    else if (c !== l)
      if (n.hasValue(s)) {
        const f = n.getValue(s);
        f.liveStyle === !0 ? f.jump(l) : f.hasAnimated || f.set(l);
      } else {
        const f = n.getStaticValue(s);
        n.addValue(s, es(f !== void 0 ? f : l, { owner: n }));
      }
  }
  for (const s in a) i[s] === void 0 && n.removeValue(s);
  return i;
}
const vv = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class $C {
  scrapeMotionValuesFromProps(i, a, s) {
    return {};
  }
  constructor(
    {
      parent: i,
      props: a,
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
      (this.KeyframeResolver = dd),
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
        const E = pn.now();
        this.renderScheduledAt < E &&
          ((this.renderScheduledAt = E), pt.render(this.render, !1, !0));
      });
    const { latestValues: m, renderState: d } = f;
    (this.latestValues = m),
      (this.baseTarget = le({}, m)),
      (this.initialValues = a.initial ? le({}, m) : {}),
      (this.renderState = d),
      (this.parent = i),
      (this.props = a),
      (this.presenceContext = s),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = l),
      (this.options = p),
      (this.blockInitialAnimation = !!c),
      (this.isControllingVariants = fc(a)),
      (this.isVariantNode = k2(a)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current));
    const v = this.scrapeMotionValuesFromProps(a, {}, this),
      { willChange: x } = v,
      y = hn(v, ["willChange"]);
    for (const E in y) {
      const b = y[E];
      m[E] !== void 0 && $t(b) && b.set(m[E]);
    }
  }
  mount(i) {
    var a;
    (this.current = i),
      ZC.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, l) => this.bindToMotionValue(l, s)),
      t4.current || KC(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Dh.current),
      (a = this.parent) == null || a.addChild(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var i;
    this.projection && this.projection.unmount(),
      Ba(this.notifyUpdate),
      Ba(this.render),
      this.valueSubscriptions.forEach((a) => a()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (i = this.parent) == null || i.removeChild(this);
    for (const a in this.events) this.events[a].clear();
    for (const a in this.features) {
      const s = this.features[a];
      s && (s.unmount(), (s.isMounted = !1));
    }
    this.current = null;
  }
  addChild(i) {
    var a;
    this.children.add(i),
      (a = this.enteringChildren) != null ||
        (this.enteringChildren = new Set()),
      this.enteringChildren.add(i);
  }
  removeChild(i) {
    this.children.delete(i),
      this.enteringChildren && this.enteringChildren.delete(i);
  }
  bindToMotionValue(i, a) {
    this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
    const s = ss.has(i);
    s && this.onBindTransform && this.onBindTransform();
    const l = a.on("change", (f) => {
      (this.latestValues[i] = f),
        this.props.onUpdate && pt.preRender(this.notifyUpdate),
        s && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let c;
    window.MotionCheckAppearSync &&
      (c = window.MotionCheckAppearSync(this, i, a)),
      this.valueSubscriptions.set(i, () => {
        l(), c && c(), a.owner && a.stop();
      });
  }
  sortNodePosition(i) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== i.type
      ? 0
      : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in ts) {
      const a = ts[i];
      if (!a) continue;
      const { isEnabled: s, Feature: l } = a;
      if (
        (!this.features[i] &&
          l &&
          s(this.props) &&
          (this.features[i] = new l(this)),
        this.features[i])
      ) {
        const c = this.features[i];
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
      : St();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, a) {
    this.latestValues[i] = a;
  }
  update(i, a) {
    (i.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = i),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = a);
    for (let s = 0; s < vv.length; s++) {
      const l = vv[s];
      this.propEventSubscriptions[l] &&
        (this.propEventSubscriptions[l](),
        delete this.propEventSubscriptions[l]);
      const c = "on" + l,
        f = i[c];
      f && (this.propEventSubscriptions[l] = this.on(l, f));
    }
    (this.prevMotionValues = QC(
      this,
      this.scrapeMotionValuesFromProps(i, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
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
  addVariantChild(i) {
    const a = this.getClosestVariantNode();
    if (a)
      return (
        a.variantChildren && a.variantChildren.add(i),
        () => a.variantChildren.delete(i)
      );
  }
  addValue(i, a) {
    const s = this.values.get(i);
    a !== s &&
      (s && this.removeValue(i),
      this.bindToMotionValue(i, a),
      this.values.set(i, a),
      (this.latestValues[i] = a.get()));
  }
  removeValue(i) {
    this.values.delete(i);
    const a = this.valueSubscriptions.get(i);
    a && (a(), this.valueSubscriptions.delete(i)),
      delete this.latestValues[i],
      this.removeValueFromRenderState(i, this.renderState);
  }
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, a) {
    if (this.props.values && this.props.values[i]) return this.props.values[i];
    let s = this.values.get(i);
    return (
      s === void 0 &&
        a !== void 0 &&
        ((s = es(a === null ? void 0 : a, { owner: this })),
        this.addValue(i, s)),
      s
    );
  }
  readValue(i, a) {
    var l;
    let s =
      this.latestValues[i] !== void 0 || !this.current
        ? this.latestValues[i]
        : (l = this.getBaseTargetFromProps(this.props, i)) != null
          ? l
          : this.readValueFromInstance(this.current, i, this.options);
    return (
      s != null &&
        (typeof s == "string" && (Kg(s) || Qg(s))
          ? (s = parseFloat(s))
          : !aC(s) && _a.test(a) && (s = w2(i, a)),
        this.setBaseTarget(i, $t(s) ? s.get() : s)),
      $t(s) ? s.get() : s
    );
  }
  setBaseTarget(i, a) {
    this.baseTarget[i] = a;
  }
  getBaseTarget(i) {
    var c;
    const { initial: a } = this.props;
    let s;
    if (typeof a == "string" || typeof a == "object") {
      const f = Cd(
        this.props,
        a,
        (c = this.presenceContext) == null ? void 0 : c.custom,
      );
      f && (s = f[i]);
    }
    if (a && s !== void 0) return s;
    const l = this.getBaseTargetFromProps(this.props, i);
    return l !== void 0 && !$t(l)
      ? l
      : this.initialValues[i] !== void 0 && s === void 0
        ? void 0
        : this.baseTarget[i];
  }
  on(i, a) {
    return this.events[i] || (this.events[i] = new td()), this.events[i].add(a);
  }
  notify(i, ...a) {
    this.events[i] && this.events[i].notify(...a);
  }
  scheduleRenderMicrotask() {
    xd.render(this.render);
  }
}
class n4 extends $C {
  constructor() {
    super(...arguments), (this.KeyframeResolver = GS);
  }
  sortInstanceNodePosition(i, a) {
    return i.compareDocumentPosition(a) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, a) {
    return i.style ? i.style[a] : void 0;
  }
  removeValueFromRenderState(i, { vars: a, style: s }) {
    delete a[i], delete s[i];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    $t(i) &&
      (this.childSubscription = i.on("change", (a) => {
        this.current && (this.current.textContent = `${a}`);
      }));
  }
}
function i4(n, { style: i, vars: a }, s, l) {
  const c = n.style;
  let f;
  for (f in i) c[f] = i[f];
  l == null || l.applyProjectionStyles(c, s);
  for (f in a) c.setProperty(f, a[f]);
}
function JC(n) {
  return window.getComputedStyle(n);
}
class WC extends n4 {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = i4);
  }
  readValueFromInstance(i, a) {
    var s;
    if (ss.has(a))
      return (s = this.projection) != null && s.isProjecting ? xh(a) : fS(i, a);
    {
      const l = JC(i),
        c = (ad(a) ? l.getPropertyValue(a) : l[a]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: a }) {
    return e4(i, a);
  }
  build(i, a, s) {
    bd(i, a, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, a, s) {
    return Dd(i, a, s);
  }
}
const a4 = new Set([
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
function IC(n, i, a, s) {
  i4(n, i, void 0, s);
  for (const l in i.attrs) n.setAttribute(a4.has(l) ? l : Bd(l), i.attrs[l]);
}
class eD extends n4 {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = St);
  }
  getBaseTargetFromProps(i, a) {
    return i[a];
  }
  readValueFromInstance(i, a) {
    if (ss.has(a)) {
      const s = R2(a);
      return (s && s.default) || 0;
    }
    return (a = a4.has(a) ? a : Bd(a)), i.getAttribute(a);
  }
  scrapeMotionValuesFromProps(i, a, s) {
    return K2(i, a, s);
  }
  build(i, a, s) {
    P2(i, a, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(i, a, s, l) {
    IC(i, a, s, l);
  }
  mount(i) {
    (this.isSVGTag = X2(i.tagName)), super.mount(i);
  }
}
const tD = (n, i) =>
  Sd(n) ? new eD(i) : new WC(i, { allowProjection: n !== J.Fragment });
function Jr(n, i, a) {
  const s = n.getProps();
  return Cd(s, i, a !== void 0 ? a : s.custom, n);
}
const Bh = (n) => Array.isArray(n);
function nD(n, i, a) {
  n.hasValue(i) ? n.getValue(i).set(a) : n.addValue(i, es(a));
}
function iD(n) {
  return Bh(n) ? n[n.length - 1] || 0 : n;
}
function aD(n, i) {
  let f = Jr(n, i) || {},
    { transitionEnd: s = {}, transition: l = {} } = f,
    c = hn(f, ["transitionEnd", "transition"]);
  c = le(le({}, c), s);
  for (const p in c) {
    const m = iD(c[p]);
    nD(n, p, m);
  }
}
function rD(n) {
  return !!($t(n) && n.add);
}
function _h(n, i) {
  const a = n.getValue("willChange");
  if (rD(a)) return a.add(i);
  if (!a && Ki.WillChange) {
    const s = new Ki.WillChange("auto");
    n.addValue("willChange", s), s.add(i);
  }
}
function r4(n) {
  return n.props[Z2];
}
const sD = (n) => n !== null;
function oD(n, { repeat: i, repeatType: a = "loop" }, s) {
  const l = n.filter(sD),
    c = i && a !== "loop" && i % 2 === 1 ? 0 : l.length - 1;
  return l[c];
}
const lD = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  uD = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  cD = { type: "keyframes", duration: 0.8 },
  fD = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  hD = (n, { keyframes: i }) =>
    i.length > 2
      ? cD
      : ss.has(n)
        ? n.startsWith("scale")
          ? uD(i[1])
          : lD
        : fD;
function dD(y) {
  var v = y,
    {
      when: n,
      delay: i,
      delayChildren: a,
      staggerChildren: s,
      staggerDirection: l,
      repeat: c,
      repeatType: f,
      repeatDelay: p,
      from: m,
      elapsed: d,
    } = v,
    x = hn(v, [
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
  return !!Object.keys(x).length;
}
const _d =
  (n, i, a, s = {}, l, c) =>
  (f) => {
    const p = pd(s, n) || {},
      m = p.delay || s.delay || 0;
    let { elapsed: d = 0 } = s;
    d = d - Ei(m);
    const x = Ue(
      le(
        {
          keyframes: Array.isArray(a) ? a : [null, a],
          ease: "easeOut",
          velocity: i.getVelocity(),
        },
        p,
      ),
      {
        delay: -d,
        onUpdate: (v) => {
          i.set(v), p.onUpdate && p.onUpdate(v);
        },
        onComplete: () => {
          f(), p.onComplete && p.onComplete();
        },
        name: n,
        motionValue: i,
        element: c ? void 0 : l,
      },
    );
    dD(p) || Object.assign(x, hD(n, x)),
      x.duration && (x.duration = Ei(x.duration)),
      x.repeatDelay && (x.repeatDelay = Ei(x.repeatDelay)),
      x.from !== void 0 && (x.keyframes[0] = x.from);
    let y = !1;
    if (
      ((x.type === !1 || (x.duration === 0 && !x.repeatDelay)) &&
        (bh(x), x.delay === 0 && (y = !0)),
      (Ki.instantAnimations || Ki.skipAnimations) &&
        ((y = !0), bh(x), (x.delay = 0)),
      (x.allowFlatten = !p.type && !p.ease),
      y && !c && i.get() !== void 0)
    ) {
      const v = oD(x.keyframes, p);
      if (v !== void 0) {
        pt.update(() => {
          x.onUpdate(v), x.onComplete();
        });
        return;
      }
    }
    return p.isSync ? new hd(x) : new zS(x);
  };
function pD({ protectedKeys: n, needsAnimating: i }, a) {
  const s = n.hasOwnProperty(a) && i[a] !== !0;
  return (i[a] = !1), s;
}
function s4(n, i, { delay: a = 0, transitionOverride: s, type: l } = {}) {
  var y;
  let x = i,
    { transition: c = n.getDefaultTransition(), transitionEnd: f } = x,
    p = hn(x, ["transition", "transitionEnd"]);
  s && (c = s);
  const m = [],
    d = l && n.animationState && n.animationState.getState()[l];
  for (const v in p) {
    const E = n.getValue(v, (y = n.latestValues[v]) != null ? y : null),
      b = p[v];
    if (b === void 0 || (d && pD(d, v))) continue;
    const S = le({ delay: a }, pd(c || {}, v)),
      A = E.get();
    if (
      A !== void 0 &&
      !E.isAnimating &&
      !Array.isArray(b) &&
      b === A &&
      !S.velocity
    )
      continue;
    let w = !1;
    if (window.MotionHandoffAnimation) {
      const D = r4(n);
      if (D) {
        const R = window.MotionHandoffAnimation(D, v, pt);
        R !== null && ((S.startTime = R), (w = !0));
      }
    }
    _h(n, v),
      E.start(
        _d(v, E, b, n.shouldReduceMotion && B2.has(v) ? { type: !1 } : S, n, w),
      );
    const C = E.animation;
    C && m.push(C);
  }
  return (
    f &&
      Promise.all(m).then(() => {
        pt.update(() => {
          f && aD(n, f);
        });
      }),
    m
  );
}
function o4(n, i, a, s = 0, l = 1) {
  const c = Array.from(n)
      .sort((d, x) => d.sortNodePosition(x))
      .indexOf(i),
    f = n.size,
    p = (f - 1) * s;
  return typeof a == "function" ? a(c, f) : l === 1 ? c * s : p - c * s;
}
function Th(n, i, a = {}) {
  var m;
  const s = Jr(
    n,
    i,
    a.type === "exit"
      ? (m = n.presenceContext) == null
        ? void 0
        : m.custom
      : void 0,
  );
  let { transition: l = n.getDefaultTransition() || {} } = s || {};
  a.transitionOverride && (l = a.transitionOverride);
  const c = s ? () => Promise.all(s4(n, s, a)) : () => Promise.resolve(),
    f =
      n.variantChildren && n.variantChildren.size
        ? (d = 0) => {
            const {
              delayChildren: x = 0,
              staggerChildren: y,
              staggerDirection: v,
            } = l;
            return mD(n, i, d, x, y, v, a);
          }
        : () => Promise.resolve(),
    { when: p } = l;
  if (p) {
    const [d, x] = p === "beforeChildren" ? [c, f] : [f, c];
    return d().then(() => x());
  } else return Promise.all([c(), f(a.delay)]);
}
function mD(n, i, a = 0, s = 0, l = 0, c = 1, f) {
  const p = [];
  for (const m of n.variantChildren)
    m.notify("AnimationStart", i),
      p.push(
        Th(
          m,
          i,
          Ue(le({}, f), {
            delay:
              a +
              (typeof s == "function" ? 0 : s) +
              o4(n.variantChildren, m, s, l, c),
          }),
        ).then(() => m.notify("AnimationComplete", i)),
      );
  return Promise.all(p);
}
function xD(n, i, a = {}) {
  n.notify("AnimationStart", i);
  let s;
  if (Array.isArray(i)) {
    const l = i.map((c) => Th(n, c, a));
    s = Promise.all(l);
  } else if (typeof i == "string") s = Th(n, i, a);
  else {
    const l = typeof i == "function" ? Jr(n, i, a.custom) : i;
    s = Promise.all(s4(n, l, a));
  }
  return s.then(() => {
    n.notify("AnimationComplete", i);
  });
}
function l4(n, i) {
  if (!Array.isArray(i)) return !1;
  const a = i.length;
  if (a !== n.length) return !1;
  for (let s = 0; s < a; s++) if (i[s] !== n[s]) return !1;
  return !0;
}
const yD = Ed.length;
function u4(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const a = n.parent ? u4(n.parent) || {} : {};
    return n.props.initial !== void 0 && (a.initial = n.props.initial), a;
  }
  const i = {};
  for (let a = 0; a < yD; a++) {
    const s = Ed[a],
      l = n.props[s];
    (bo(l) || l === !1) && (i[s] = l);
  }
  return i;
}
const vD = [...gd].reverse(),
  gD = gd.length;
function ED(n) {
  return (i) =>
    Promise.all(i.map(({ animation: a, options: s }) => xD(n, a, s)));
}
function bD(n) {
  let i = ED(n),
    a = gv(),
    s = !0;
  const l = (m) => (d, x) => {
    var v;
    const y = Jr(
      n,
      x,
      m === "exit"
        ? (v = n.presenceContext) == null
          ? void 0
          : v.custom
        : void 0,
    );
    if (y) {
      const E = y,
        { transition: b, transitionEnd: S } = E,
        A = hn(E, ["transition", "transitionEnd"]);
      d = le(le(le({}, d), A), S);
    }
    return d;
  };
  function c(m) {
    i = m(n);
  }
  function f(m) {
    const { props: d } = n,
      x = u4(n.parent) || {},
      y = [],
      v = new Set();
    let E = {},
      b = 1 / 0;
    for (let A = 0; A < gD; A++) {
      const w = vD[A],
        C = a[w],
        D = d[w] !== void 0 ? d[w] : x[w],
        R = bo(D),
        M = w === m ? C.isActive : null;
      M === !1 && (b = A);
      let L = D === x[w] && D !== d[w] && R;
      if (
        (L && s && n.manuallyAnimateOnMount && (L = !1),
        (C.protectedKeys = le({}, E)),
        (!C.isActive && M === null) ||
          (!D && !C.prevProp) ||
          cc(D) ||
          typeof D == "boolean")
      )
        continue;
      const _ = AD(C.prevProp, D);
      let O = _ || (w === m && C.isActive && !L && R) || (A > b && R),
        $ = !1;
      const z = Array.isArray(D) ? D : [D];
      let j = z.reduce(l(w), {});
      M === !1 && (j = {});
      const { prevResolvedValues: Q = {} } = C,
        ee = le(le({}, Q), j),
        oe = (te) => {
          (O = !0),
            v.has(te) && (($ = !0), v.delete(te)),
            (C.needsAnimating[te] = !0);
          const ie = n.getValue(te);
          ie && (ie.liveStyle = !1);
        };
      for (const te in ee) {
        const ie = j[te],
          me = Q[te];
        if (E.hasOwnProperty(te)) continue;
        let xe = !1;
        Bh(ie) && Bh(me) ? (xe = !l4(ie, me)) : (xe = ie !== me),
          xe
            ? ie != null
              ? oe(te)
              : v.add(te)
            : ie !== void 0 && v.has(te)
              ? oe(te)
              : (C.protectedKeys[te] = !0);
      }
      (C.prevProp = D),
        (C.prevResolvedValues = j),
        C.isActive && (E = le(le({}, E), j)),
        s && n.blockInitialAnimation && (O = !1);
      const de = L && _;
      O &&
        (!de || $) &&
        y.push(
          ...z.map((te) => {
            const ie = { type: w };
            if (
              typeof te == "string" &&
              s &&
              !de &&
              n.manuallyAnimateOnMount &&
              n.parent
            ) {
              const { parent: me } = n,
                xe = Jr(me, te);
              if (me.enteringChildren && xe) {
                const { delayChildren: T } = xe.transition || {};
                ie.delay = o4(me.enteringChildren, n, T);
              }
            }
            return { animation: te, options: ie };
          }),
        );
    }
    if (v.size) {
      const A = {};
      if (typeof d.initial != "boolean") {
        const w = Jr(n, Array.isArray(d.initial) ? d.initial[0] : d.initial);
        w && w.transition && (A.transition = w.transition);
      }
      v.forEach((w) => {
        const C = n.getBaseTarget(w),
          D = n.getValue(w);
        D && (D.liveStyle = !0), (A[w] = C != null ? C : null);
      }),
        y.push({ animation: A });
    }
    let S = !!y.length;
    return (
      s &&
        (d.initial === !1 || d.initial === d.animate) &&
        !n.manuallyAnimateOnMount &&
        (S = !1),
      (s = !1),
      S ? i(y) : Promise.resolve()
    );
  }
  function p(m, d) {
    var y;
    if (a[m].isActive === d) return Promise.resolve();
    (y = n.variantChildren) == null ||
      y.forEach((v) => {
        var E;
        return (E = v.animationState) == null ? void 0 : E.setActive(m, d);
      }),
      (a[m].isActive = d);
    const x = f(m);
    for (const v in a) a[v].protectedKeys = {};
    return x;
  }
  return {
    animateChanges: f,
    setActive: p,
    setAnimateFunction: c,
    getState: () => a,
    reset: () => {
      a = gv();
    },
  };
}
function AD(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !l4(i, n) : !1;
}
function Ja(n = !1) {
  return {
    isActive: n,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function gv() {
  return {
    animate: Ja(!0),
    whileInView: Ja(),
    whileHover: Ja(),
    whileTap: Ja(),
    whileDrag: Ja(),
    whileFocus: Ja(),
    exit: Ja(),
  };
}
class wa {
  constructor(i) {
    (this.isMounted = !1), (this.node = i);
  }
  update() {}
}
class SD extends wa {
  constructor(i) {
    super(i), i.animationState || (i.animationState = bD(i));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    cc(i) && (this.unmountControls = i.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(),
      { animate: a } = this.node.prevProps || {};
    i !== a && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var i;
    this.node.animationState.reset(),
      (i = this.unmountControls) == null || i.call(this);
  }
}
let CD = 0;
class DD extends wa {
  constructor() {
    super(...arguments), (this.id = CD++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: i, onExitComplete: a } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === s) return;
    const l = this.node.animationState.setActive("exit", !i);
    a &&
      !i &&
      l.then(() => {
        a(this.id);
      });
  }
  mount() {
    const { register: i, onExitComplete: a } = this.node.presenceContext || {};
    a && a(this.id), i && (this.unmount = i(this.id));
  }
  unmount() {}
}
const BD = { animation: { Feature: SD }, exit: { Feature: DD } };
function So(n, i, a, s = { passive: !0 }) {
  return n.addEventListener(i, a, s), () => n.removeEventListener(i, a);
}
function Ro(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const _D = (n) => (i) => yd(i) && n(i, Ro(i));
function ho(n, i, a, s) {
  return So(n, i, _D(a), s);
}
const c4 = 1e-4,
  TD = 1 - c4,
  RD = 1 + c4,
  f4 = 0.01,
  wD = 0 - f4,
  MD = 0 + f4;
function en(n) {
  return n.max - n.min;
}
function OD(n, i, a) {
  return Math.abs(n - i) <= a;
}
function Ev(n, i, a, s = 0.5) {
  (n.origin = s),
    (n.originPoint = mt(i.min, i.max, n.origin)),
    (n.scale = en(a) / en(i)),
    (n.translate = mt(a.min, a.max, n.origin) - n.originPoint),
    ((n.scale >= TD && n.scale <= RD) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= wD && n.translate <= MD) || isNaN(n.translate)) &&
      (n.translate = 0);
}
function po(n, i, a, s) {
  Ev(n.x, i.x, a.x, s ? s.originX : void 0),
    Ev(n.y, i.y, a.y, s ? s.originY : void 0);
}
function bv(n, i, a) {
  (n.min = a.min + i.min), (n.max = n.min + en(i));
}
function FD(n, i, a) {
  bv(n.x, i.x, a.x), bv(n.y, i.y, a.y);
}
function Av(n, i, a) {
  (n.min = i.min - a.min), (n.max = n.min + en(i));
}
function mo(n, i, a) {
  Av(n.x, i.x, a.x), Av(n.y, i.y, a.y);
}
function Pn(n) {
  return [n("x"), n("y")];
}
const h4 = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  Sv = (n, i) => Math.abs(n - i);
function zD(n, i) {
  const a = Sv(n.x, i.x),
    s = Sv(n.y, i.y);
  return Math.sqrt(a ** 2 + s ** 2);
}
class d4 {
  constructor(
    i,
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
        const v = Zf(this.lastMoveEventInfo, this.history),
          E = this.startEvent !== null,
          b = zD(v.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!E && !b) return;
        const { point: S } = v,
          { timestamp: A } = Xt;
        this.history.push(Ue(le({}, S), { timestamp: A }));
        const { onStart: w, onMove: C } = this.handlers;
        E ||
          (w && w(this.lastMoveEvent, v),
          (this.startEvent = this.lastMoveEvent)),
          C && C(this.lastMoveEvent, v);
      }),
      (this.handlePointerMove = (v, E) => {
        (this.lastMoveEvent = v),
          (this.lastMoveEventInfo = Kf(E, this.transformPagePoint)),
          pt.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (v, E) => {
        this.end();
        const { onEnd: b, onSessionEnd: S, resumeAnimation: A } = this.handlers;
        if (
          (this.dragSnapToOrigin && A && A(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const w = Zf(
          v.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Kf(E, this.transformPagePoint),
          this.history,
        );
        this.startEvent && b && b(v, w), S && S(v, w);
      }),
      !yd(i))
    )
      return;
    (this.dragSnapToOrigin = c),
      (this.handlers = a),
      (this.transformPagePoint = s),
      (this.distanceThreshold = f),
      (this.contextWindow = l || window);
    const p = Ro(i),
      m = Kf(p, this.transformPagePoint),
      { point: d } = m,
      { timestamp: x } = Xt;
    this.history = [Ue(le({}, d), { timestamp: x })];
    const { onSessionStart: y } = a;
    y && y(i, Zf(m, this.history)),
      (this.removeListeners = Bo(
        ho(this.contextWindow, "pointermove", this.handlePointerMove),
        ho(this.contextWindow, "pointerup", this.handlePointerUp),
        ho(this.contextWindow, "pointercancel", this.handlePointerUp),
      ));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ba(this.updatePoint);
  }
}
function Kf(n, i) {
  return i ? { point: i(n.point) } : n;
}
function Cv(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function Zf({ point: n }, i) {
  return {
    point: n,
    delta: Cv(n, p4(i)),
    offset: Cv(n, ND(i)),
    velocity: LD(i, 0.1),
  };
}
function ND(n) {
  return n[0];
}
function p4(n) {
  return n[n.length - 1];
}
function LD(n, i) {
  if (n.length < 2) return { x: 0, y: 0 };
  let a = n.length - 1,
    s = null;
  const l = p4(n);
  for (; a >= 0 && ((s = n[a]), !(l.timestamp - s.timestamp > Ei(i))); ) a--;
  if (!s) return { x: 0, y: 0 };
  const c = Xn(l.timestamp - s.timestamp);
  if (c === 0) return { x: 0, y: 0 };
  const f = { x: (l.x - s.x) / c, y: (l.y - s.y) / c };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function UD(n, { min: i, max: a }, s) {
  return (
    i !== void 0 && n < i
      ? (n = s ? mt(i, n, s.min) : Math.max(n, i))
      : a !== void 0 && n > a && (n = s ? mt(a, n, s.max) : Math.min(n, a)),
    n
  );
}
function Dv(n, i, a) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: a !== void 0 ? n.max + a - (n.max - n.min) : void 0,
  };
}
function HD(n, { top: i, left: a, bottom: s, right: l }) {
  return { x: Dv(n.x, a, l), y: Dv(n.y, i, s) };
}
function Bv(n, i) {
  let a = i.min - n.min,
    s = i.max - n.max;
  return i.max - i.min < n.max - n.min && ([a, s] = [s, a]), { min: a, max: s };
}
function VD(n, i) {
  return { x: Bv(n.x, i.x), y: Bv(n.y, i.y) };
}
function kD(n, i) {
  let a = 0.5;
  const s = en(n),
    l = en(i);
  return (
    l > s
      ? (a = vo(i.min, i.max - s, n.min))
      : s > l && (a = vo(n.min, n.max - l, i.min)),
    Gi(0, 1, a)
  );
}
function jD(n, i) {
  const a = {};
  return (
    i.min !== void 0 && (a.min = i.min - n.min),
    i.max !== void 0 && (a.max = i.max - n.min),
    a
  );
}
const Rh = 0.35;
function qD(n = Rh) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Rh),
    { x: _v(n, "left", "right"), y: _v(n, "top", "bottom") }
  );
}
function _v(n, i, a) {
  return { min: Tv(n, i), max: Tv(n, a) };
}
function Tv(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const PD = new WeakMap();
class YD {
  constructor(i) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = St()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = i);
  }
  start(i, { snapToCursor: a = !1, distanceThreshold: s } = {}) {
    const { presenceContext: l } = this.visualElement;
    if (l && l.isPresent === !1) return;
    const c = (y) => {
        const { dragSnapToOrigin: v } = this.getProps();
        v ? this.pauseAnimation() : this.stopAnimation(),
          a && this.snapToCursor(Ro(y).point);
      },
      f = (y, v) => {
        const { drag: E, dragPropagation: b, onDragStart: S } = this.getProps();
        if (
          E &&
          !b &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = $S(E)),
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
          Pn((w) => {
            let C = this.getAxisMotionValue(w).get() || 0;
            if (bi.test(C)) {
              const { projection: D } = this.visualElement;
              if (D && D.layout) {
                const R = D.layout.layoutBox[w];
                R && (C = en(R) * (parseFloat(C) / 100));
              }
            }
            this.originPoint[w] = C;
          }),
          S && pt.postRender(() => S(y, v)),
          _h(this.visualElement, "transform");
        const { animationState: A } = this.visualElement;
        A && A.setActive("whileDrag", !0);
      },
      p = (y, v) => {
        (this.latestPointerEvent = y), (this.latestPanInfo = v);
        const {
          dragPropagation: E,
          dragDirectionLock: b,
          onDirectionLock: S,
          onDrag: A,
        } = this.getProps();
        if (!E && !this.openDragLock) return;
        const { offset: w } = v;
        if (b && this.currentDirection === null) {
          (this.currentDirection = XD(w)),
            this.currentDirection !== null && S && S(this.currentDirection);
          return;
        }
        this.updateAxis("x", v.point, w),
          this.updateAxis("y", v.point, w),
          this.visualElement.render(),
          A && A(y, v);
      },
      m = (y, v) => {
        (this.latestPointerEvent = y),
          (this.latestPanInfo = v),
          this.stop(y, v),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      d = () =>
        Pn((y) => {
          var v;
          return (
            this.getAnimationState(y) === "paused" &&
            ((v = this.getAxisMotionValue(y).animation) == null
              ? void 0
              : v.play())
          );
        }),
      { dragSnapToOrigin: x } = this.getProps();
    this.panSession = new d4(
      i,
      {
        onSessionStart: c,
        onStart: f,
        onMove: p,
        onSessionEnd: m,
        resumeAnimation: d,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: x,
        distanceThreshold: s,
        contextWindow: h4(this.visualElement),
      },
    );
  }
  stop(i, a) {
    const s = i || this.latestPointerEvent,
      l = a || this.latestPanInfo,
      c = this.isDragging;
    if ((this.cancel(), !c || !l || !s)) return;
    const { velocity: f } = l;
    this.startAnimation(f);
    const { onDragEnd: p } = this.getProps();
    p && pt.postRender(() => p(s, l));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: a } = this.visualElement;
    i && (i.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: s } = this.getProps();
    !s &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      a && a.setActive("whileDrag", !1);
  }
  updateAxis(i, a, s) {
    const { drag: l } = this.getProps();
    if (!s || !Ql(i, l, this.currentDirection)) return;
    const c = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + s[i];
    this.constraints &&
      this.constraints[i] &&
      (f = UD(f, this.constraints[i], this.elastic[i])),
      c.set(f);
  }
  resolveConstraints() {
    var c;
    const { dragConstraints: i, dragElastic: a } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (c = this.visualElement.projection) == null
            ? void 0
            : c.layout,
      l = this.constraints;
    i && Kr(i)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : i && s
        ? (this.constraints = HD(s.layoutBox, i))
        : (this.constraints = !1),
      (this.elastic = qD(a)),
      l !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Pn((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = jD(s.layoutBox[f], this.constraints[f]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: a } = this.getProps();
    if (!i || !Kr(i)) return !1;
    const s = i.current,
      { projection: l } = this.visualElement;
    if (!l || !l.layout) return !1;
    const c = GC(s, l.root, this.visualElement.getTransformPagePoint());
    let f = VD(l.layout.layoutBox, c);
    if (a) {
      const p = a(PC(f));
      (this.hasMutatedConstraints = !!p), p && (f = J2(p));
    }
    return f;
  }
  startAnimation(i) {
    const {
        drag: a,
        dragMomentum: s,
        dragElastic: l,
        dragTransition: c,
        dragSnapToOrigin: f,
        onDragTransitionEnd: p,
      } = this.getProps(),
      m = this.constraints || {},
      d = Pn((x) => {
        if (!Ql(x, a, this.currentDirection)) return;
        let y = (m && m[x]) || {};
        f && (y = { min: 0, max: 0 });
        const v = l ? 200 : 1e6,
          E = l ? 40 : 1e7,
          b = le(
            le(
              {
                type: "inertia",
                velocity: s ? i[x] : 0,
                bounceStiffness: v,
                bounceDamping: E,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
              },
              c,
            ),
            y,
          );
        return this.startAxisValueAnimation(x, b);
      });
    return Promise.all(d).then(p);
  }
  startAxisValueAnimation(i, a) {
    const s = this.getAxisMotionValue(i);
    return (
      _h(this.visualElement, i), s.start(_d(i, s, 0, a, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Pn((i) => this.getAxisMotionValue(i).stop());
  }
  pauseAnimation() {
    Pn((i) => {
      var a;
      return (a = this.getAxisMotionValue(i).animation) == null
        ? void 0
        : a.pause();
    });
  }
  getAnimationState(i) {
    var a;
    return (a = this.getAxisMotionValue(i).animation) == null
      ? void 0
      : a.state;
  }
  getAxisMotionValue(i) {
    const a = `_drag${i.toUpperCase()}`,
      s = this.visualElement.getProps(),
      l = s[a];
    return (
      l ||
      this.visualElement.getValue(i, (s.initial ? s.initial[i] : void 0) || 0)
    );
  }
  snapToCursor(i) {
    Pn((a) => {
      const { drag: s } = this.getProps();
      if (!Ql(a, s, this.currentDirection)) return;
      const { projection: l } = this.visualElement,
        c = this.getAxisMotionValue(a);
      if (l && l.layout) {
        const { min: f, max: p } = l.layout.layoutBox[a];
        c.set(i[a] - mt(f, p, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: i, dragConstraints: a } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!Kr(a) || !s || !this.constraints) return;
    this.stopAnimation();
    const l = { x: 0, y: 0 };
    Pn((f) => {
      const p = this.getAxisMotionValue(f);
      if (p && this.constraints !== !1) {
        const m = p.get();
        l[f] = kD({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: c } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = c ? c({}, "") : "none"),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      this.resolveConstraints(),
      Pn((f) => {
        if (!Ql(f, i, null)) return;
        const p = this.getAxisMotionValue(f),
          { min: m, max: d } = this.constraints[f];
        p.set(mt(m, d, l[f]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    PD.set(this.visualElement, this);
    const i = this.visualElement.current,
      a = ho(i, "pointerdown", (m) => {
        const { drag: d, dragListener: x = !0 } = this.getProps();
        d && x && this.start(m);
      }),
      s = () => {
        const { dragConstraints: m } = this.getProps();
        Kr(m) && m.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: l } = this.visualElement,
      c = l.addEventListener("measure", s);
    l && !l.layout && (l.root && l.root.updateScroll(), l.updateLayout()),
      pt.read(s);
    const f = So(window, "resize", () => this.scalePositionWithinConstraints()),
      p = l.addEventListener(
        "didUpdate",
        ({ delta: m, hasLayoutChanged: d }) => {
          this.isDragging &&
            d &&
            (Pn((x) => {
              const y = this.getAxisMotionValue(x);
              y &&
                ((this.originPoint[x] += m[x].translate),
                y.set(y.get() + m[x].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      f(), a(), c(), p && p();
    };
  }
  getProps() {
    const i = this.visualElement.getProps(),
      {
        drag: a = !1,
        dragDirectionLock: s = !1,
        dragPropagation: l = !1,
        dragConstraints: c = !1,
        dragElastic: f = Rh,
        dragMomentum: p = !0,
      } = i;
    return Ue(le({}, i), {
      drag: a,
      dragDirectionLock: s,
      dragPropagation: l,
      dragConstraints: c,
      dragElastic: f,
      dragMomentum: p,
    });
  }
}
function Ql(n, i, a) {
  return (i === !0 || i === n) && (a === null || a === n);
}
function XD(n, i = 10) {
  let a = null;
  return Math.abs(n.y) > i ? (a = "y") : Math.abs(n.x) > i && (a = "x"), a;
}
class GD extends wa {
  constructor(i) {
    super(i),
      (this.removeGroupControls = Gn),
      (this.removeListeners = Gn),
      (this.controls = new YD(i));
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    i && (this.removeGroupControls = i.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Gn);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Rv = (n) => (i, a) => {
  n && pt.postRender(() => n(i, a));
};
class KD extends wa {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Gn);
  }
  onPointerDown(i) {
    this.session = new d4(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: h4(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: i,
      onPanStart: a,
      onPan: s,
      onPanEnd: l,
    } = this.node.getProps();
    return {
      onSessionStart: Rv(i),
      onStart: Rv(a),
      onMove: s,
      onEnd: (c, f) => {
        delete this.session, l && pt.postRender(() => l(c, f));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ho(this.node.current, "pointerdown", (i) =>
      this.onPointerDown(i),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Vu = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function wv(n, i) {
  return i.max === i.min ? 0 : (n / (i.max - i.min)) * 100;
}
const ao = {
    correct: (n, i) => {
      if (!i.target) return n;
      if (typeof n == "string")
        if (_e.test(n)) n = parseFloat(n);
        else return n;
      const a = wv(n, i.target.x),
        s = wv(n, i.target.y);
      return `${a}% ${s}%`;
    },
  },
  ZD = {
    correct: (n, { treeScale: i, projectionDelta: a }) => {
      const s = n,
        l = _a.parse(n);
      if (l.length > 5) return s;
      const c = _a.createTransformer(n),
        f = typeof l[0] != "number" ? 1 : 0,
        p = a.x.scale * i.x,
        m = a.y.scale * i.y;
      (l[0 + f] /= p), (l[1 + f] /= m);
      const d = mt(p, m, 0.5);
      return (
        typeof l[2 + f] == "number" && (l[2 + f] /= d),
        typeof l[3 + f] == "number" && (l[3 + f] /= d),
        c(l)
      );
    },
  };
let Qf = !1;
class QD extends J.Component {
  componentDidMount() {
    const {
        visualElement: i,
        layoutGroup: a,
        switchLayoutGroup: s,
        layoutId: l,
      } = this.props,
      { projection: c } = i;
    yC($D),
      c &&
        (a.group && a.group.add(c),
        s && s.register && l && s.register(c),
        Qf && c.root.didUpdate(),
        c.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        c.setOptions(
          Ue(le({}, c.options), { onExitComplete: () => this.safeToRemove() }),
        )),
      (Vu.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(i) {
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
        (Qf = !0),
        l || i.layoutDependency !== a || a === void 0 || i.isPresent !== c
          ? f.willUpdate()
          : this.safeToRemove(),
        i.isPresent !== c &&
          (c
            ? f.promote()
            : f.relegate() ||
              pt.postRender(() => {
                const p = f.getStack();
                (!p || !p.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: i } = this.props.visualElement;
    i &&
      (i.root.didUpdate(),
      xd.postRender(() => {
        !i.currentAnimation && i.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: i,
        layoutGroup: a,
        switchLayoutGroup: s,
      } = this.props,
      { projection: l } = i;
    (Qf = !0),
      l &&
        (l.scheduleCheckAfterUnmount(),
        a && a.group && a.group.remove(l),
        s && s.deregister && s.deregister(l));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function m4(n) {
  const [i, a] = U2(),
    s = J.useContext(Zh);
  return Xi.jsx(
    QD,
    Ue(le({}, n), {
      layoutGroup: s,
      switchLayoutGroup: J.useContext(Q2),
      isPresent: i,
      safeToRemove: a,
    }),
  );
}
const $D = {
  borderRadius: Ue(le({}, ao), {
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  }),
  borderTopLeftRadius: ao,
  borderTopRightRadius: ao,
  borderBottomLeftRadius: ao,
  borderBottomRightRadius: ao,
  boxShadow: ZD,
};
function JD(n, i, a) {
  const s = $t(n) ? n : es(n);
  return s.start(_d("", s, i, a)), s.animation;
}
const WD = (n, i) => n.depth - i.depth;
class ID {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(i) {
    Jh(this.children, i), (this.isDirty = !0);
  }
  remove(i) {
    Wh(this.children, i), (this.isDirty = !0);
  }
  forEach(i) {
    this.isDirty && this.children.sort(WD),
      (this.isDirty = !1),
      this.children.forEach(i);
  }
}
function eB(n, i) {
  const a = pn.now(),
    s = ({ timestamp: l }) => {
      const c = l - a;
      c >= i && (Ba(s), n(c - i));
    };
  return pt.setup(s, !0), () => Ba(s);
}
const x4 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  tB = x4.length,
  Mv = (n) => (typeof n == "string" ? parseFloat(n) : n),
  Ov = (n) => typeof n == "number" || _e.test(n);
function nB(n, i, a, s, l, c) {
  var f, p, m, d;
  l
    ? ((n.opacity = mt(0, (f = a.opacity) != null ? f : 1, iB(s))),
      (n.opacityExit = mt((p = i.opacity) != null ? p : 1, 0, aB(s))))
    : c &&
      (n.opacity = mt(
        (m = i.opacity) != null ? m : 1,
        (d = a.opacity) != null ? d : 1,
        s,
      ));
  for (let x = 0; x < tB; x++) {
    const y = `border${x4[x]}Radius`;
    let v = Fv(i, y),
      E = Fv(a, y);
    if (v === void 0 && E === void 0) continue;
    v || (v = 0),
      E || (E = 0),
      v === 0 || E === 0 || Ov(v) === Ov(E)
        ? ((n[y] = Math.max(mt(Mv(v), Mv(E), s), 0)),
          (bi.test(E) || bi.test(v)) && (n[y] += "%"))
        : (n[y] = E);
  }
  (i.rotate || a.rotate) && (n.rotate = mt(i.rotate || 0, a.rotate || 0, s));
}
function Fv(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const iB = y4(0, 0.5, i2),
  aB = y4(0.5, 0.95, Gn);
function y4(n, i, a) {
  return (s) => (s < n ? 0 : s > i ? 1 : a(vo(n, i, s)));
}
function zv(n, i) {
  (n.min = i.min), (n.max = i.max);
}
function qn(n, i) {
  zv(n.x, i.x), zv(n.y, i.y);
}
function Nv(n, i) {
  (n.translate = i.translate),
    (n.scale = i.scale),
    (n.originPoint = i.originPoint),
    (n.origin = i.origin);
}
function Lv(n, i, a, s, l) {
  return (
    (n -= i), (n = tc(n, 1 / a, s)), l !== void 0 && (n = tc(n, 1 / l, s)), n
  );
}
function rB(n, i = 0, a = 1, s = 0.5, l, c = n, f = n) {
  if (
    (bi.test(i) &&
      ((i = parseFloat(i)), (i = mt(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let p = mt(c.min, c.max, s);
  n === c && (p -= i),
    (n.min = Lv(n.min, i, a, p, l)),
    (n.max = Lv(n.max, i, a, p, l));
}
function Uv(n, i, [a, s, l], c, f) {
  rB(n, i[a], i[s], i[l], i.scale, c, f);
}
const sB = ["x", "scaleX", "originX"],
  oB = ["y", "scaleY", "originY"];
function Hv(n, i, a, s) {
  Uv(n.x, i, sB, a ? a.x : void 0, s ? s.x : void 0),
    Uv(n.y, i, oB, a ? a.y : void 0, s ? s.y : void 0);
}
function Vv(n) {
  return n.translate === 0 && n.scale === 1;
}
function v4(n) {
  return Vv(n.x) && Vv(n.y);
}
function kv(n, i) {
  return n.min === i.min && n.max === i.max;
}
function lB(n, i) {
  return kv(n.x, i.x) && kv(n.y, i.y);
}
function jv(n, i) {
  return (
    Math.round(n.min) === Math.round(i.min) &&
    Math.round(n.max) === Math.round(i.max)
  );
}
function g4(n, i) {
  return jv(n.x, i.x) && jv(n.y, i.y);
}
function qv(n) {
  return en(n.x) / en(n.y);
}
function Pv(n, i) {
  return (
    n.translate === i.translate &&
    n.scale === i.scale &&
    n.originPoint === i.originPoint
  );
}
class uB {
  constructor() {
    this.members = [];
  }
  add(i) {
    Jh(this.members, i), i.scheduleRender();
  }
  remove(i) {
    if (
      (Wh(this.members, i),
      i === this.prevLead && (this.prevLead = void 0),
      i === this.lead)
    ) {
      const a = this.members[this.members.length - 1];
      a && this.promote(a);
    }
  }
  relegate(i) {
    const a = this.members.findIndex((l) => i === l);
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
  promote(i, a) {
    const s = this.lead;
    if (i !== s && ((this.prevLead = s), (this.lead = i), i.show(), s)) {
      s.instance && s.scheduleRender(),
        i.scheduleRender(),
        (i.resumeFrom = s),
        a && (i.resumeFrom.preserveOpacity = !0),
        s.snapshot &&
          ((i.snapshot = s.snapshot),
          (i.snapshot.latestValues = s.animationValues || s.latestValues)),
        i.root && i.root.isUpdating && (i.isLayoutDirty = !0);
      const { crossfade: l } = i.options;
      l === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      const { options: a, resumingFrom: s } = i;
      a.onExitComplete && a.onExitComplete(),
        s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((i) => {
      i.instance && i.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function cB(n, i, a) {
  let s = "";
  const l = n.x.translate / i.x,
    c = n.y.translate / i.y,
    f = (a == null ? void 0 : a.z) || 0;
  if (
    ((l || c || f) && (s = `translate3d(${l}px, ${c}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (s += `scale(${1 / i.x}, ${1 / i.y}) `),
    a)
  ) {
    const {
      transformPerspective: d,
      rotate: x,
      rotateX: y,
      rotateY: v,
      skewX: E,
      skewY: b,
    } = a;
    d && (s = `perspective(${d}px) ${s}`),
      x && (s += `rotate(${x}deg) `),
      y && (s += `rotateX(${y}deg) `),
      v && (s += `rotateY(${v}deg) `),
      E && (s += `skewX(${E}deg) `),
      b && (s += `skewY(${b}deg) `);
  }
  const p = n.x.scale * i.x,
    m = n.y.scale * i.y;
  return (p !== 1 || m !== 1) && (s += `scale(${p}, ${m})`), s || "none";
}
const $f = ["", "X", "Y", "Z"],
  fB = 1e3;
let hB = 0;
function Jf(n, i, a, s) {
  const { latestValues: l } = i;
  l[n] && ((a[n] = l[n]), i.setStaticValue(n, 0), s && (s[n] = 0));
}
function E4(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: i } = n.options;
  if (!i) return;
  const a = r4(i);
  if (window.MotionHasOptimisedAnimation(a, "transform")) {
    const { layout: l, layoutId: c } = n.options;
    window.MotionCancelOptimisedAnimation(a, "transform", pt, !(l || c));
  }
  const { parent: s } = n;
  s && !s.hasCheckedOptimisedAppear && E4(s);
}
function b4({
  attachResizeListener: n,
  defaultParent: i,
  measureScroll: a,
  checkIsScrollRoot: s,
  resetTransform: l,
}) {
  return class {
    constructor(f = {}, p = i == null ? void 0 : i()) {
      (this.id = hB++),
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
            this.nodes.forEach(mB),
            this.nodes.forEach(gB),
            this.nodes.forEach(EB),
            this.nodes.forEach(xB);
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
      for (let m = 0; m < this.path.length; m++)
        this.path[m].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ID());
    }
    addEventListener(f, p) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new td()),
        this.eventHandlers.get(f).add(p)
      );
    }
    notifyListeners(f, ...p) {
      const m = this.eventHandlers.get(f);
      m && m.notify(...p);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      (this.isSVG = L2(f) && !nC(f)), (this.instance = f);
      const { layoutId: p, layout: m, visualElement: d } = this.options;
      if (
        (d && !d.current && d.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (m || p) && (this.isLayoutDirty = !0),
        n)
      ) {
        let x,
          y = 0;
        const v = () => (this.root.updateBlockedByResize = !1);
        pt.read(() => {
          y = window.innerWidth;
        }),
          n(f, () => {
            const E = window.innerWidth;
            E !== y &&
              ((y = E),
              (this.root.updateBlockedByResize = !0),
              x && x(),
              (x = eB(v, 250)),
              Vu.hasAnimatedSinceResize &&
                ((Vu.hasAnimatedSinceResize = !1), this.nodes.forEach(Gv)));
          });
      }
      p && this.root.registerSharedNode(p, this),
        this.options.animate !== !1 &&
          d &&
          (p || m) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: x,
              hasLayoutChanged: y,
              hasRelativeLayoutChanged: v,
              layout: E,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const b =
                  this.options.transition || d.getDefaultTransition() || DB,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: A } =
                  d.getProps(),
                w = !this.targetLayout || !g4(this.targetLayout, E),
                C = !y && v;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                C ||
                (y && (w || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const D = Ue(le({}, pd(b, "layout")), {
                  onPlay: S,
                  onComplete: A,
                });
                (d.shouldReduceMotion || this.options.layoutRoot) &&
                  ((D.delay = 0), (D.type = !1)),
                  this.startAnimation(D),
                  this.setAnimationOrigin(x, C);
              } else
                y || Gv(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = E;
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
        Ba(this.updateProjection);
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
        this.nodes && this.nodes.forEach(bB),
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
          E4(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let x = 0; x < this.path.length; x++) {
        const y = this.path[x];
        (y.shouldResetTransform = !0),
          y.updateScroll("snapshot"),
          y.options.layoutRoot && y.willUpdate(!1);
      }
      const { layoutId: p, layout: m } = this.options;
      if (p === void 0 && !m) return;
      const d = this.getTransformTemplate();
      (this.prevTransformTemplateValue = d ? d(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Yv);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Xv);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(vB),
            this.nodes.forEach(dB),
            this.nodes.forEach(pB))
          : this.nodes.forEach(Xv),
        this.clearAllSnapshots();
      const p = pn.now();
      (Xt.delta = Gi(0, 1e3 / 60, p - Xt.timestamp)),
        (Xt.timestamp = p),
        (Xt.isProcessing = !0),
        Vf.update.process(Xt),
        Vf.preRender.process(Xt),
        Vf.render.process(Xt),
        (Xt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), xd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(yB), this.sharedNodes.forEach(AB);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        pt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      pt.postRender(() => {
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
        for (let m = 0; m < this.path.length; m++) this.path[m].updateScroll();
      const f = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = St()),
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
        const m = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: m,
          offset: a(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : m,
        };
      }
    }
    resetTransform() {
      if (!l) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        p = this.projectionDelta && !v4(this.projectionDelta),
        m = this.getTransformTemplate(),
        d = m ? m(this.latestValues, "") : void 0,
        x = d !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (p || Wa(this.latestValues) || x) &&
        (l(this.instance, d),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const p = this.measurePageBox();
      let m = this.removeElementScroll(p);
      return (
        f && (m = this.removeTransform(m)),
        BB(m),
        {
          animationId: this.root.animationId,
          measuredBox: p,
          layoutBox: m,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var d;
      const { visualElement: f } = this.options;
      if (!f) return St();
      const p = f.measureViewportBox();
      if (
        !(
          ((d = this.scroll) == null ? void 0 : d.wasRoot) || this.path.some(_B)
        )
      ) {
        const { scroll: x } = this.root;
        x && (Zr(p.x, x.offset.x), Zr(p.y, x.offset.y));
      }
      return p;
    }
    removeElementScroll(f) {
      var m;
      const p = St();
      if ((qn(p, f), (m = this.scroll) != null && m.wasRoot)) return p;
      for (let d = 0; d < this.path.length; d++) {
        const x = this.path[d],
          { scroll: y, options: v } = x;
        x !== this.root &&
          y &&
          v.layoutScroll &&
          (y.wasRoot && qn(p, f), Zr(p.x, y.offset.x), Zr(p.y, y.offset.y));
      }
      return p;
    }
    applyTransform(f, p = !1) {
      const m = St();
      qn(m, f);
      for (let d = 0; d < this.path.length; d++) {
        const x = this.path[d];
        !p &&
          x.options.layoutScroll &&
          x.scroll &&
          x !== x.root &&
          Qr(m, { x: -x.scroll.offset.x, y: -x.scroll.offset.y }),
          Wa(x.latestValues) && Qr(m, x.latestValues);
      }
      return Wa(this.latestValues) && Qr(m, this.latestValues), m;
    }
    removeTransform(f) {
      const p = St();
      qn(p, f);
      for (let m = 0; m < this.path.length; m++) {
        const d = this.path[m];
        if (!d.instance || !Wa(d.latestValues)) continue;
        Sh(d.latestValues) && d.updateSnapshot();
        const x = St(),
          y = d.measurePageBox();
        qn(x, y),
          Hv(p, d.latestValues, d.snapshot ? d.snapshot.layoutBox : void 0, x);
      }
      return Wa(this.latestValues) && Hv(p, this.latestValues), p;
    }
    setTargetDelta(f) {
      (this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(f) {
      this.options = Ue(le(le({}, this.options), f), {
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
        this.relativeParent.resolvedRelativeTargetAt !== Xt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var v;
      const p = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
      const m = !!this.resumingFrom || this !== p;
      if (
        !(
          f ||
          (m && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((v = this.parent) != null && v.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: x, layoutId: y } = this.options;
      if (!(!this.layout || !(x || y))) {
        if (
          ((this.resolvedRelativeTargetAt = Xt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const E = this.getClosestProjectingParent();
          E && E.layout && this.animationProgress !== 1
            ? ((this.relativeParent = E),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = St()),
              (this.relativeTargetOrigin = St()),
              mo(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                E.layout.layoutBox,
              ),
              qn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = St()), (this.targetWithTransforms = St())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              FD(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : qn(this.target, this.layout.layoutBox),
                I2(this.target, this.targetDelta))
              : qn(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const E = this.getClosestProjectingParent();
          E &&
          !!E.resumingFrom == !!this.resumingFrom &&
          !E.options.layoutScroll &&
          E.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = E),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = St()),
              (this.relativeTargetOrigin = St()),
              mo(this.relativeTargetOrigin, this.target, E.target),
              qn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Sh(this.parent.latestValues) ||
          W2(this.parent.latestValues)
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
      let m = !0;
      if (
        ((this.isProjectionDirty ||
          ((b = this.parent) != null && b.isProjectionDirty)) &&
          (m = !1),
        p &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (m = !1),
        this.resolvedRelativeTargetAt === Xt.timestamp && (m = !1),
        m)
      )
        return;
      const { layout: d, layoutId: x } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(d || x))
      )
        return;
      qn(this.layoutCorrected, this.layout.layoutBox);
      const y = this.treeScale.x,
        v = this.treeScale.y;
      XC(this.layoutCorrected, this.treeScale, this.path, p),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = St()));
      const { target: E } = f;
      if (!E) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Nv(this.prevProjectionDelta.x, this.projectionDelta.x),
          Nv(this.prevProjectionDelta.y, this.projectionDelta.y)),
        po(this.projectionDelta, this.layoutCorrected, E, this.latestValues),
        (this.treeScale.x !== y ||
          this.treeScale.y !== v ||
          !Pv(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Pv(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", E));
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
        const m = this.getStack();
        m && m.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = $r()),
        (this.projectionDelta = $r()),
        (this.projectionDeltaWithTransform = $r());
    }
    setAnimationOrigin(f, p = !1) {
      const m = this.snapshot,
        d = m ? m.latestValues : {},
        x = le({}, this.latestValues),
        y = $r();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p);
      const v = St(),
        E = m ? m.source : void 0,
        b = this.layout ? this.layout.source : void 0,
        S = E !== b,
        A = this.getStack(),
        w = !A || A.members.length <= 1,
        C = !!(S && !w && this.options.crossfade === !0 && !this.path.some(CB));
      this.animationProgress = 0;
      let D;
      (this.mixTargetDelta = (R) => {
        const M = R / 1e3;
        Kv(y.x, f.x, M),
          Kv(y.y, f.y, M),
          this.setTargetDelta(y),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (mo(v, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            SB(this.relativeTarget, this.relativeTargetOrigin, v, M),
            D && lB(this.relativeTarget, D) && (this.isProjectionDirty = !1),
            D || (D = St()),
            qn(D, this.relativeTarget)),
          S &&
            ((this.animationValues = x), nB(x, d, this.latestValues, M, C, w)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = M);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      var p, m, d;
      this.notifyListeners("animationStart"),
        (p = this.currentAnimation) == null || p.stop(),
        (d = (m = this.resumingFrom) == null ? void 0 : m.currentAnimation) ==
          null || d.stop(),
        this.pendingAnimation &&
          (Ba(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = pt.update(() => {
          (Vu.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = es(0)),
            (this.currentAnimation = JD(
              this.motionValue,
              [0, 1e3],
              Ue(le({}, f), {
                velocity: 0,
                isSync: !0,
                onUpdate: (x) => {
                  this.mixTargetDelta(x), f.onUpdate && f.onUpdate(x);
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
        (this.mixTargetDelta && this.mixTargetDelta(fB),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: p,
        target: m,
        layout: d,
        latestValues: x,
      } = f;
      if (!(!p || !m || !d)) {
        if (
          this !== f &&
          this.layout &&
          d &&
          A4(this.options.animationType, this.layout.layoutBox, d.layoutBox)
        ) {
          m = this.target || St();
          const y = en(this.layout.layoutBox.x);
          (m.x.min = f.target.x.min), (m.x.max = m.x.min + y);
          const v = en(this.layout.layoutBox.y);
          (m.y.min = f.target.y.min), (m.y.max = m.y.min + v);
        }
        qn(p, m),
          Qr(p, x),
          po(this.projectionDeltaWithTransform, this.layoutCorrected, p, x);
      }
    }
    registerSharedNode(f, p) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new uB()),
        this.sharedNodes.get(f).add(p);
      const d = p.options.initialPromotionConfig;
      p.promote({
        transition: d ? d.transition : void 0,
        preserveFollowOpacity:
          d && d.shouldPreserveFollowOpacity
            ? d.shouldPreserveFollowOpacity(p)
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
    promote({ needsReset: f, transition: p, preserveFollowOpacity: m } = {}) {
      const d = this.getStack();
      d && d.promote(this, m),
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
      const { latestValues: m } = f;
      if (
        ((m.z ||
          m.rotate ||
          m.rotateX ||
          m.rotateY ||
          m.rotateZ ||
          m.skewX ||
          m.skewY) &&
          (p = !0),
        !p)
      )
        return;
      const d = {};
      m.z && Jf("z", f, d, this.animationValues);
      for (let x = 0; x < $f.length; x++)
        Jf(`rotate${$f[x]}`, f, d, this.animationValues),
          Jf(`skew${$f[x]}`, f, d, this.animationValues);
      f.render();
      for (const x in d)
        f.setStaticValue(x, d[x]),
          this.animationValues && (this.animationValues[x] = d[x]);
      f.scheduleRender();
    }
    applyProjectionStyles(f, p) {
      var b, S;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const m = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (f.visibility = ""),
          (f.opacity = ""),
          (f.pointerEvents = Hu(p == null ? void 0 : p.pointerEvents) || ""),
          (f.transform = m ? m(this.latestValues, "") : "none");
        return;
      }
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        this.options.layoutId &&
          ((f.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (f.pointerEvents = Hu(p == null ? void 0 : p.pointerEvents) || "")),
          this.hasProjected &&
            !Wa(this.latestValues) &&
            ((f.transform = m ? m({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      f.visibility = "";
      const x = d.animationValues || d.latestValues;
      this.applyTransformsToTarget();
      let y = cB(this.projectionDeltaWithTransform, this.treeScale, x);
      m && (y = m(x, y)), (f.transform = y);
      const { x: v, y: E } = this.projectionDelta;
      (f.transformOrigin = `${v.origin * 100}% ${E.origin * 100}% 0`),
        d.animationValues
          ? (f.opacity =
              d === this
                ? (S =
                    (b = x.opacity) != null ? b : this.latestValues.opacity) !=
                  null
                  ? S
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : x.opacityExit)
          : (f.opacity =
              d === this
                ? x.opacity !== void 0
                  ? x.opacity
                  : ""
                : x.opacityExit !== void 0
                  ? x.opacityExit
                  : 0);
      for (const A in Ao) {
        if (x[A] === void 0) continue;
        const { correct: w, applyTo: C, isCSSVariable: D } = Ao[A],
          R = y === "none" ? x[A] : w(x[A], d);
        if (C) {
          const M = C.length;
          for (let L = 0; L < M; L++) f[C[L]] = R;
        } else
          D ? (this.options.visualElement.renderState.vars[A] = R) : (f[A] = R);
      }
      this.options.layoutId &&
        (f.pointerEvents =
          d === this ? Hu(p == null ? void 0 : p.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((f) => {
        var p;
        return (p = f.currentAnimation) == null ? void 0 : p.stop();
      }),
        this.root.nodes.forEach(Yv),
        this.root.sharedNodes.clear();
    }
  };
}
function dB(n) {
  n.updateLayout();
}
function pB(n) {
  var a;
  const i = ((a = n.resumeFrom) == null ? void 0 : a.snapshot) || n.snapshot;
  if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: l } = n.layout,
      { animationType: c } = n.options,
      f = i.source !== n.layout.source;
    c === "size"
      ? Pn((y) => {
          const v = f ? i.measuredBox[y] : i.layoutBox[y],
            E = en(v);
          (v.min = s[y].min), (v.max = v.min + E);
        })
      : A4(c, i.layoutBox, s) &&
        Pn((y) => {
          const v = f ? i.measuredBox[y] : i.layoutBox[y],
            E = en(s[y]);
          (v.max = v.min + E),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[y].max = n.relativeTarget[y].min + E));
        });
    const p = $r();
    po(p, s, i.layoutBox);
    const m = $r();
    f ? po(m, n.applyTransform(l, !0), i.measuredBox) : po(m, s, i.layoutBox);
    const d = !v4(p);
    let x = !1;
    if (!n.resumeFrom) {
      const y = n.getClosestProjectingParent();
      if (y && !y.resumeFrom) {
        const { snapshot: v, layout: E } = y;
        if (v && E) {
          const b = St();
          mo(b, i.layoutBox, v.layoutBox);
          const S = St();
          mo(S, s, E.layoutBox),
            g4(b, S) || (x = !0),
            y.options.layoutRoot &&
              ((n.relativeTarget = S),
              (n.relativeTargetOrigin = b),
              (n.relativeParent = y));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: s,
      snapshot: i,
      delta: m,
      layoutDelta: p,
      hasLayoutChanged: d,
      hasRelativeLayoutChanged: x,
    });
  } else if (n.isLead()) {
    const { onExitComplete: s } = n.options;
    s && s();
  }
  n.options.transition = void 0;
}
function mB(n) {
  n.parent &&
    (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
    n.isSharedProjectionDirty ||
      (n.isSharedProjectionDirty = !!(
        n.isProjectionDirty ||
        n.parent.isProjectionDirty ||
        n.parent.isSharedProjectionDirty
      )),
    n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function xB(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function yB(n) {
  n.clearSnapshot();
}
function Yv(n) {
  n.clearMeasurements();
}
function Xv(n) {
  n.isLayoutDirty = !1;
}
function vB(n) {
  const { visualElement: i } = n.options;
  i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    n.resetTransform();
}
function Gv(n) {
  n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0);
}
function gB(n) {
  n.resolveTargetDelta();
}
function EB(n) {
  n.calcProjection();
}
function bB(n) {
  n.resetSkewAndRotation();
}
function AB(n) {
  n.removeLeadSnapshot();
}
function Kv(n, i, a) {
  (n.translate = mt(i.translate, 0, a)),
    (n.scale = mt(i.scale, 1, a)),
    (n.origin = i.origin),
    (n.originPoint = i.originPoint);
}
function Zv(n, i, a, s) {
  (n.min = mt(i.min, a.min, s)), (n.max = mt(i.max, a.max, s));
}
function SB(n, i, a, s) {
  Zv(n.x, i.x, a.x, s), Zv(n.y, i.y, a.y, s);
}
function CB(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const DB = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Qv = (n) =>
    typeof navigator != "undefined" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(n),
  $v = Qv("applewebkit/") && !Qv("chrome/") ? Math.round : Gn;
function Jv(n) {
  (n.min = $v(n.min)), (n.max = $v(n.max));
}
function BB(n) {
  Jv(n.x), Jv(n.y);
}
function A4(n, i, a) {
  return (
    n === "position" || (n === "preserve-aspect" && !OD(qv(i), qv(a), 0.2))
  );
}
function _B(n) {
  var i;
  return n !== n.root && ((i = n.scroll) == null ? void 0 : i.wasRoot);
}
const TB = b4({
    attachResizeListener: (n, i) => So(n, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Wf = { current: void 0 },
  S4 = b4({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!Wf.current) {
        const n = new TB({});
        n.mount(window), n.setOptions({ layoutScroll: !0 }), (Wf.current = n);
      }
      return Wf.current;
    },
    resetTransform: (n, i) => {
      n.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  RB = {
    pan: { Feature: KD },
    drag: { Feature: GD, ProjectionNode: S4, MeasureLayout: m4 },
  };
function Wv(n, i, a) {
  const { props: s } = n;
  n.animationState &&
    s.whileHover &&
    n.animationState.setActive("whileHover", a === "Start");
  const l = "onHover" + a,
    c = s[l];
  c && pt.postRender(() => c(i, Ro(i)));
}
class wB extends wa {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = JS(
        i,
        (a, s) => (Wv(this.node, s, "Start"), (l) => Wv(this.node, l, "End")),
      ));
  }
  unmount() {}
}
class MB extends wa {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch (a) {
      i = !0;
    }
    !i ||
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
    this.unmount = Bo(
      So(this.node.current, "focus", () => this.onFocus()),
      So(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Iv(n, i, a) {
  const { props: s } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
  n.animationState &&
    s.whileTap &&
    n.animationState.setActive("whileTap", a === "Start");
  const l = "onTap" + (a === "End" ? "" : a),
    c = s[l];
  c && pt.postRender(() => c(i, Ro(i)));
}
class OB extends wa {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = tC(
        i,
        (a, s) => (
          Iv(this.node, s, "Start"),
          (l, { success: c }) => Iv(this.node, l, c ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const wh = new WeakMap(),
  If = new WeakMap(),
  FB = (n) => {
    const i = wh.get(n.target);
    i && i(n);
  },
  zB = (n) => {
    n.forEach(FB);
  };
function NB(a) {
  var s = a,
    { root: n } = s,
    i = hn(s, ["root"]);
  const l = n || document;
  If.has(l) || If.set(l, {});
  const c = If.get(l),
    f = JSON.stringify(i);
  return (
    c[f] || (c[f] = new IntersectionObserver(zB, le({ root: n }, i))), c[f]
  );
}
function LB(n, i, a) {
  const s = NB(i);
  return (
    wh.set(n, a),
    s.observe(n),
    () => {
      wh.delete(n), s.unobserve(n);
    }
  );
}
const UB = { some: 0, all: 1 };
class HB extends wa {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(),
      { root: a, margin: s, amount: l = "some", once: c } = i,
      f = {
        root: a ? a.current : void 0,
        rootMargin: s,
        threshold: typeof l == "number" ? l : UB[l],
      },
      p = (m) => {
        const { isIntersecting: d } = m;
        if (
          this.isInView === d ||
          ((this.isInView = d), c && !d && this.hasEnteredView)
        )
          return;
        d && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", d);
        const { onViewportEnter: x, onViewportLeave: y } = this.node.getProps(),
          v = d ? x : y;
        v && v(m);
      };
    return LB(this.node.current, f, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver == "undefined") return;
    const { props: i, prevProps: a } = this.node;
    ["amount", "margin", "root"].some(VB(i, a)) && this.startObserver();
  }
  unmount() {}
}
function VB({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (a) => n[a] !== i[a];
}
const kB = {
    inView: { Feature: HB },
    tap: { Feature: OB },
    focus: { Feature: MB },
    hover: { Feature: wB },
  },
  jB = { layout: { ProjectionNode: S4, MeasureLayout: m4 } },
  qB = le(le(le(le({}, BD), kB), RB), jB),
  f9 = qC(qB, tD);
function C4(n, i) {
  return function () {
    return n.apply(i, arguments);
  };
}
const { toString: PB } = Object.prototype,
  { getPrototypeOf: Td } = Object,
  { iterator: hc, toStringTag: D4 } = Symbol,
  dc = ((n) => (i) => {
    const a = PB.call(i);
    return n[a] || (n[a] = a.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ai = (n) => ((n = n.toLowerCase()), (i) => dc(i) === n),
  pc = (n) => (i) => typeof i === n,
  { isArray: os } = Array,
  ns = pc("undefined");
function wo(n) {
  return (
    n !== null &&
    !ns(n) &&
    n.constructor !== null &&
    !ns(n.constructor) &&
    mn(n.constructor.isBuffer) &&
    n.constructor.isBuffer(n)
  );
}
const B4 = ai("ArrayBuffer");
function YB(n) {
  let i;
  return (
    typeof ArrayBuffer != "undefined" && ArrayBuffer.isView
      ? (i = ArrayBuffer.isView(n))
      : (i = n && n.buffer && B4(n.buffer)),
    i
  );
}
const XB = pc("string"),
  mn = pc("function"),
  _4 = pc("number"),
  Mo = (n) => n !== null && typeof n == "object",
  GB = (n) => n === !0 || n === !1,
  ku = (n) => {
    if (dc(n) !== "object") return !1;
    const i = Td(n);
    return (
      (i === null ||
        i === Object.prototype ||
        Object.getPrototypeOf(i) === null) &&
      !(D4 in n) &&
      !(hc in n)
    );
  },
  KB = (n) => {
    if (!Mo(n) || wo(n)) return !1;
    try {
      return (
        Object.keys(n).length === 0 &&
        Object.getPrototypeOf(n) === Object.prototype
      );
    } catch (i) {
      return !1;
    }
  },
  ZB = ai("Date"),
  QB = ai("File"),
  $B = ai("Blob"),
  JB = ai("FileList"),
  WB = (n) => Mo(n) && mn(n.pipe),
  IB = (n) => {
    let i;
    return (
      n &&
      ((typeof FormData == "function" && n instanceof FormData) ||
        (mn(n.append) &&
          ((i = dc(n)) === "formdata" ||
            (i === "object" &&
              mn(n.toString) &&
              n.toString() === "[object FormData]"))))
    );
  },
  e_ = ai("URLSearchParams"),
  [t_, n_, i_, a_] = ["ReadableStream", "Request", "Response", "Headers"].map(
    ai,
  ),
  r_ = (n) =>
    n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Oo(n, i, { allOwnKeys: a = !1 } = {}) {
  if (n === null || typeof n == "undefined") return;
  let s, l;
  if ((typeof n != "object" && (n = [n]), os(n)))
    for (s = 0, l = n.length; s < l; s++) i.call(null, n[s], s, n);
  else {
    if (wo(n)) return;
    const c = a ? Object.getOwnPropertyNames(n) : Object.keys(n),
      f = c.length;
    let p;
    for (s = 0; s < f; s++) (p = c[s]), i.call(null, n[p], p, n);
  }
}
function T4(n, i) {
  if (wo(n)) return null;
  i = i.toLowerCase();
  const a = Object.keys(n);
  let s = a.length,
    l;
  for (; s-- > 0; ) if (((l = a[s]), i === l.toLowerCase())) return l;
  return null;
}
const ar =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
        ? self
        : typeof window != "undefined"
          ? window
          : global,
  R4 = (n) => !ns(n) && n !== ar;
function Mh() {
  const { caseless: n, skipUndefined: i } = (R4(this) && this) || {},
    a = {},
    s = (l, c) => {
      const f = (n && T4(a, c)) || c;
      ku(a[f]) && ku(l)
        ? (a[f] = Mh(a[f], l))
        : ku(l)
          ? (a[f] = Mh({}, l))
          : os(l)
            ? (a[f] = l.slice())
            : (!i || !ns(l)) && (a[f] = l);
    };
  for (let l = 0, c = arguments.length; l < c; l++)
    arguments[l] && Oo(arguments[l], s);
  return a;
}
const s_ = (n, i, a, { allOwnKeys: s } = {}) => (
    Oo(
      i,
      (l, c) => {
        a && mn(l) ? (n[c] = C4(l, a)) : (n[c] = l);
      },
      { allOwnKeys: s },
    ),
    n
  ),
  o_ = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
  l_ = (n, i, a, s) => {
    (n.prototype = Object.create(i.prototype, s)),
      (n.prototype.constructor = n),
      Object.defineProperty(n, "super", { value: i.prototype }),
      a && Object.assign(n.prototype, a);
  },
  u_ = (n, i, a, s) => {
    let l, c, f;
    const p = {};
    if (((i = i || {}), n == null)) return i;
    do {
      for (l = Object.getOwnPropertyNames(n), c = l.length; c-- > 0; )
        (f = l[c]), (!s || s(f, n, i)) && !p[f] && ((i[f] = n[f]), (p[f] = !0));
      n = a !== !1 && Td(n);
    } while (n && (!a || a(n, i)) && n !== Object.prototype);
    return i;
  },
  c_ = (n, i, a) => {
    (n = String(n)),
      (a === void 0 || a > n.length) && (a = n.length),
      (a -= i.length);
    const s = n.indexOf(i, a);
    return s !== -1 && s === a;
  },
  f_ = (n) => {
    if (!n) return null;
    if (os(n)) return n;
    let i = n.length;
    if (!_4(i)) return null;
    const a = new Array(i);
    for (; i-- > 0; ) a[i] = n[i];
    return a;
  },
  h_ = (
    (n) => (i) =>
      n && i instanceof n
  )(typeof Uint8Array != "undefined" && Td(Uint8Array)),
  d_ = (n, i) => {
    const s = (n && n[hc]).call(n);
    let l;
    for (; (l = s.next()) && !l.done; ) {
      const c = l.value;
      i.call(n, c[0], c[1]);
    }
  },
  p_ = (n, i) => {
    let a;
    const s = [];
    for (; (a = n.exec(i)) !== null; ) s.push(a);
    return s;
  },
  m_ = ai("HTMLFormElement"),
  x_ = (n) =>
    n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (a, s, l) {
      return s.toUpperCase() + l;
    }),
  eg = (
    ({ hasOwnProperty: n }) =>
    (i, a) =>
      n.call(i, a)
  )(Object.prototype),
  y_ = ai("RegExp"),
  w4 = (n, i) => {
    const a = Object.getOwnPropertyDescriptors(n),
      s = {};
    Oo(a, (l, c) => {
      let f;
      (f = i(l, c, n)) !== !1 && (s[c] = f || l);
    }),
      Object.defineProperties(n, s);
  },
  v_ = (n) => {
    w4(n, (i, a) => {
      if (mn(n) && ["arguments", "caller", "callee"].indexOf(a) !== -1)
        return !1;
      const s = n[a];
      if (mn(s)) {
        if (((i.enumerable = !1), "writable" in i)) {
          i.writable = !1;
          return;
        }
        i.set ||
          (i.set = () => {
            throw Error("Can not rewrite read-only method '" + a + "'");
          });
      }
    });
  },
  g_ = (n, i) => {
    const a = {},
      s = (l) => {
        l.forEach((c) => {
          a[c] = !0;
        });
      };
    return os(n) ? s(n) : s(String(n).split(i)), a;
  },
  E_ = () => {},
  b_ = (n, i) => (n != null && Number.isFinite((n = +n)) ? n : i);
function A_(n) {
  return !!(n && mn(n.append) && n[D4] === "FormData" && n[hc]);
}
const S_ = (n) => {
    const i = new Array(10),
      a = (s, l) => {
        if (Mo(s)) {
          if (i.indexOf(s) >= 0) return;
          if (wo(s)) return s;
          if (!("toJSON" in s)) {
            i[l] = s;
            const c = os(s) ? [] : {};
            return (
              Oo(s, (f, p) => {
                const m = a(f, l + 1);
                !ns(m) && (c[p] = m);
              }),
              (i[l] = void 0),
              c
            );
          }
        }
        return s;
      };
    return a(n, 0);
  },
  C_ = ai("AsyncFunction"),
  D_ = (n) => n && (Mo(n) || mn(n)) && mn(n.then) && mn(n.catch),
  M4 = ((n, i) =>
    n
      ? setImmediate
      : i
        ? ((a, s) => (
            ar.addEventListener(
              "message",
              ({ source: l, data: c }) => {
                l === ar && c === a && s.length && s.shift()();
              },
              !1,
            ),
            (l) => {
              s.push(l), ar.postMessage(a, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (a) => setTimeout(a))(
    typeof setImmediate == "function",
    mn(ar.postMessage),
  ),
  B_ =
    typeof queueMicrotask != "undefined"
      ? queueMicrotask.bind(ar)
      : (typeof process != "undefined" && process.nextTick) || M4,
  __ = (n) => n != null && mn(n[hc]),
  W = {
    isArray: os,
    isArrayBuffer: B4,
    isBuffer: wo,
    isFormData: IB,
    isArrayBufferView: YB,
    isString: XB,
    isNumber: _4,
    isBoolean: GB,
    isObject: Mo,
    isPlainObject: ku,
    isEmptyObject: KB,
    isReadableStream: t_,
    isRequest: n_,
    isResponse: i_,
    isHeaders: a_,
    isUndefined: ns,
    isDate: ZB,
    isFile: QB,
    isBlob: $B,
    isRegExp: y_,
    isFunction: mn,
    isStream: WB,
    isURLSearchParams: e_,
    isTypedArray: h_,
    isFileList: JB,
    forEach: Oo,
    merge: Mh,
    extend: s_,
    trim: r_,
    stripBOM: o_,
    inherits: l_,
    toFlatObject: u_,
    kindOf: dc,
    kindOfTest: ai,
    endsWith: c_,
    toArray: f_,
    forEachEntry: d_,
    matchAll: p_,
    isHTMLForm: m_,
    hasOwnProperty: eg,
    hasOwnProp: eg,
    reduceDescriptors: w4,
    freezeMethods: v_,
    toObjectSet: g_,
    toCamelCase: x_,
    noop: E_,
    toFiniteNumber: b_,
    findKey: T4,
    global: ar,
    isContextDefined: R4,
    isSpecCompliantForm: A_,
    toJSONObject: S_,
    isAsyncFn: C_,
    isThenable: D_,
    setImmediate: M4,
    asap: B_,
    isIterable: __,
  };
function Oe(n, i, a, s, l) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = n),
    (this.name = "AxiosError"),
    i && (this.code = i),
    a && (this.config = a),
    s && (this.request = s),
    l && ((this.response = l), (this.status = l.status ? l.status : null));
}
W.inherits(Oe, Error, {
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
const O4 = Oe.prototype,
  F4 = {};
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
].forEach((n) => {
  F4[n] = { value: n };
});
Object.defineProperties(Oe, F4);
Object.defineProperty(O4, "isAxiosError", { value: !0 });
Oe.from = (n, i, a, s, l, c) => {
  const f = Object.create(O4);
  W.toFlatObject(
    n,
    f,
    function (x) {
      return x !== Error.prototype;
    },
    (d) => d !== "isAxiosError",
  );
  const p = n && n.message ? n.message : "Error",
    m = i == null && n ? n.code : i;
  return (
    Oe.call(f, p, m, a, s, l),
    n &&
      f.cause == null &&
      Object.defineProperty(f, "cause", { value: n, configurable: !0 }),
    (f.name = (n && n.name) || "Error"),
    c && Object.assign(f, c),
    f
  );
};
const T_ = null;
function Oh(n) {
  return W.isPlainObject(n) || W.isArray(n);
}
function z4(n) {
  return W.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function tg(n, i, a) {
  return n
    ? n
        .concat(i)
        .map(function (l, c) {
          return (l = z4(l)), !a && c ? "[" + l + "]" : l;
        })
        .join(a ? "." : "")
    : i;
}
function R_(n) {
  return W.isArray(n) && !n.some(Oh);
}
const w_ = W.toFlatObject(W, {}, null, function (i) {
  return /^is[A-Z]/.test(i);
});
function mc(n, i, a) {
  if (!W.isObject(n)) throw new TypeError("target must be an object");
  (i = i || new FormData()),
    (a = W.toFlatObject(
      a,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (S, A) {
        return !W.isUndefined(A[S]);
      },
    ));
  const s = a.metaTokens,
    l = a.visitor || x,
    c = a.dots,
    f = a.indexes,
    m =
      (a.Blob || (typeof Blob != "undefined" && Blob)) &&
      W.isSpecCompliantForm(i);
  if (!W.isFunction(l)) throw new TypeError("visitor must be a function");
  function d(b) {
    if (b === null) return "";
    if (W.isDate(b)) return b.toISOString();
    if (W.isBoolean(b)) return b.toString();
    if (!m && W.isBlob(b))
      throw new Oe("Blob is not supported. Use a Buffer instead.");
    return W.isArrayBuffer(b) || W.isTypedArray(b)
      ? m && typeof Blob == "function"
        ? new Blob([b])
        : Buffer.from(b)
      : b;
  }
  function x(b, S, A) {
    let w = b;
    if (b && !A && typeof b == "object") {
      if (W.endsWith(S, "{}"))
        (S = s ? S : S.slice(0, -2)), (b = JSON.stringify(b));
      else if (
        (W.isArray(b) && R_(b)) ||
        ((W.isFileList(b) || W.endsWith(S, "[]")) && (w = W.toArray(b)))
      )
        return (
          (S = z4(S)),
          w.forEach(function (D, R) {
            !(W.isUndefined(D) || D === null) &&
              i.append(
                f === !0 ? tg([S], R, c) : f === null ? S : S + "[]",
                d(D),
              );
          }),
          !1
        );
    }
    return Oh(b) ? !0 : (i.append(tg(A, S, c), d(b)), !1);
  }
  const y = [],
    v = Object.assign(w_, {
      defaultVisitor: x,
      convertValue: d,
      isVisitable: Oh,
    });
  function E(b, S) {
    if (!W.isUndefined(b)) {
      if (y.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      y.push(b),
        W.forEach(b, function (w, C) {
          (!(W.isUndefined(w) || w === null) &&
            l.call(i, w, W.isString(C) ? C.trim() : C, S, v)) === !0 &&
            E(w, S ? S.concat(C) : [C]);
        }),
        y.pop();
    }
  }
  if (!W.isObject(n)) throw new TypeError("data must be an object");
  return E(n), i;
}
function ng(n) {
  const i = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function (s) {
    return i[s];
  });
}
function Rd(n, i) {
  (this._pairs = []), n && mc(n, this, i);
}
const N4 = Rd.prototype;
N4.append = function (i, a) {
  this._pairs.push([i, a]);
};
N4.toString = function (i) {
  const a = i
    ? function (s) {
        return i.call(this, s, ng);
      }
    : ng;
  return this._pairs
    .map(function (l) {
      return a(l[0]) + "=" + a(l[1]);
    }, "")
    .join("&");
};
function M_(n) {
  return encodeURIComponent(n)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function L4(n, i, a) {
  if (!i) return n;
  const s = (a && a.encode) || M_;
  W.isFunction(a) && (a = { serialize: a });
  const l = a && a.serialize;
  let c;
  if (
    (l
      ? (c = l(i, a))
      : (c = W.isURLSearchParams(i) ? i.toString() : new Rd(i, a).toString(s)),
    c)
  ) {
    const f = n.indexOf("#");
    f !== -1 && (n = n.slice(0, f)),
      (n += (n.indexOf("?") === -1 ? "?" : "&") + c);
  }
  return n;
}
class ig {
  constructor() {
    this.handlers = [];
  }
  use(i, a, s) {
    return (
      this.handlers.push({
        fulfilled: i,
        rejected: a,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(i) {
    this.handlers[i] && (this.handlers[i] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(i) {
    W.forEach(this.handlers, function (s) {
      s !== null && i(s);
    });
  }
}
const U4 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  O_ = typeof URLSearchParams != "undefined" ? URLSearchParams : Rd,
  F_ = typeof FormData != "undefined" ? FormData : null,
  z_ = typeof Blob != "undefined" ? Blob : null,
  N_ = {
    isBrowser: !0,
    classes: { URLSearchParams: O_, FormData: F_, Blob: z_ },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  wd = typeof window != "undefined" && typeof document != "undefined",
  Fh = (typeof navigator == "object" && navigator) || void 0,
  L_ =
    wd &&
    (!Fh || ["ReactNative", "NativeScript", "NS"].indexOf(Fh.product) < 0),
  U_ =
    typeof WorkerGlobalScope != "undefined" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  H_ = (wd && window.location.href) || "http://localhost",
  V_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: wd,
        hasStandardBrowserEnv: L_,
        hasStandardBrowserWebWorkerEnv: U_,
        navigator: Fh,
        origin: H_,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Qt = le(le({}, V_), N_);
function k_(n, i) {
  return mc(
    n,
    new Qt.classes.URLSearchParams(),
    le(
      {
        visitor: function (a, s, l, c) {
          return Qt.isNode && W.isBuffer(a)
            ? (this.append(s, a.toString("base64")), !1)
            : c.defaultVisitor.apply(this, arguments);
        },
      },
      i,
    ),
  );
}
function j_(n) {
  return W.matchAll(/\w+|\[(\w*)]/g, n).map((i) =>
    i[0] === "[]" ? "" : i[1] || i[0],
  );
}
function q_(n) {
  const i = {},
    a = Object.keys(n);
  let s;
  const l = a.length;
  let c;
  for (s = 0; s < l; s++) (c = a[s]), (i[c] = n[c]);
  return i;
}
function H4(n) {
  function i(a, s, l, c) {
    let f = a[c++];
    if (f === "__proto__") return !0;
    const p = Number.isFinite(+f),
      m = c >= a.length;
    return (
      (f = !f && W.isArray(l) ? l.length : f),
      m
        ? (W.hasOwnProp(l, f) ? (l[f] = [l[f], s]) : (l[f] = s), !p)
        : ((!l[f] || !W.isObject(l[f])) && (l[f] = []),
          i(a, s, l[f], c) && W.isArray(l[f]) && (l[f] = q_(l[f])),
          !p)
    );
  }
  if (W.isFormData(n) && W.isFunction(n.entries)) {
    const a = {};
    return (
      W.forEachEntry(n, (s, l) => {
        i(j_(s), l, a, 0);
      }),
      a
    );
  }
  return null;
}
function P_(n, i, a) {
  if (W.isString(n))
    try {
      return (i || JSON.parse)(n), W.trim(n);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (a || JSON.stringify)(n);
}
const Fo = {
  transitional: U4,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (i, a) {
      const s = a.getContentType() || "",
        l = s.indexOf("application/json") > -1,
        c = W.isObject(i);
      if ((c && W.isHTMLForm(i) && (i = new FormData(i)), W.isFormData(i)))
        return l ? JSON.stringify(H4(i)) : i;
      if (
        W.isArrayBuffer(i) ||
        W.isBuffer(i) ||
        W.isStream(i) ||
        W.isFile(i) ||
        W.isBlob(i) ||
        W.isReadableStream(i)
      )
        return i;
      if (W.isArrayBufferView(i)) return i.buffer;
      if (W.isURLSearchParams(i))
        return (
          a.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          i.toString()
        );
      let p;
      if (c) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return k_(i, this.formSerializer).toString();
        if ((p = W.isFileList(i)) || s.indexOf("multipart/form-data") > -1) {
          const m = this.env && this.env.FormData;
          return mc(
            p ? { "files[]": i } : i,
            m && new m(),
            this.formSerializer,
          );
        }
      }
      return c || l ? (a.setContentType("application/json", !1), P_(i)) : i;
    },
  ],
  transformResponse: [
    function (i) {
      const a = this.transitional || Fo.transitional,
        s = a && a.forcedJSONParsing,
        l = this.responseType === "json";
      if (W.isResponse(i) || W.isReadableStream(i)) return i;
      if (i && W.isString(i) && ((s && !this.responseType) || l)) {
        const f = !(a && a.silentJSONParsing) && l;
        try {
          return JSON.parse(i, this.parseReviver);
        } catch (p) {
          if (f)
            throw p.name === "SyntaxError"
              ? Oe.from(p, Oe.ERR_BAD_RESPONSE, this, null, this.response)
              : p;
        }
      }
      return i;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Qt.classes.FormData, Blob: Qt.classes.Blob },
  validateStatus: function (i) {
    return i >= 200 && i < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
W.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  Fo.headers[n] = {};
});
const Y_ = W.toObjectSet([
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
  X_ = (n) => {
    const i = {};
    let a, s, l;
    return (
      n &&
        n
          .split(
            `
`,
          )
          .forEach(function (f) {
            (l = f.indexOf(":")),
              (a = f.substring(0, l).trim().toLowerCase()),
              (s = f.substring(l + 1).trim()),
              !(!a || (i[a] && Y_[a])) &&
                (a === "set-cookie"
                  ? i[a]
                    ? i[a].push(s)
                    : (i[a] = [s])
                  : (i[a] = i[a] ? i[a] + ", " + s : s));
          }),
      i
    );
  },
  ag = Symbol("internals");
function ro(n) {
  return n && String(n).trim().toLowerCase();
}
function ju(n) {
  return n === !1 || n == null ? n : W.isArray(n) ? n.map(ju) : String(n);
}
function G_(n) {
  const i = Object.create(null),
    a = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = a.exec(n)); ) i[s[1]] = s[2];
  return i;
}
const K_ = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function eh(n, i, a, s, l) {
  if (W.isFunction(s)) return s.call(this, i, a);
  if ((l && (i = a), !!W.isString(i))) {
    if (W.isString(s)) return i.indexOf(s) !== -1;
    if (W.isRegExp(s)) return s.test(i);
  }
}
function Z_(n) {
  return n
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (i, a, s) => a.toUpperCase() + s);
}
function Q_(n, i) {
  const a = W.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(n, s + a, {
      value: function (l, c, f) {
        return this[s].call(this, i, l, c, f);
      },
      configurable: !0,
    });
  });
}
let xn = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, a, s) {
    const l = this;
    function c(p, m, d) {
      const x = ro(m);
      if (!x) throw new Error("header name must be a non-empty string");
      const y = W.findKey(l, x);
      (!y || l[y] === void 0 || d === !0 || (d === void 0 && l[y] !== !1)) &&
        (l[y || m] = ju(p));
    }
    const f = (p, m) => W.forEach(p, (d, x) => c(d, x, m));
    if (W.isPlainObject(i) || i instanceof this.constructor) f(i, a);
    else if (W.isString(i) && (i = i.trim()) && !K_(i)) f(X_(i), a);
    else if (W.isObject(i) && W.isIterable(i)) {
      let p = {},
        m,
        d;
      for (const x of i) {
        if (!W.isArray(x))
          throw TypeError("Object iterator must return a key-value pair");
        p[(d = x[0])] = (m = p[d])
          ? W.isArray(m)
            ? [...m, x[1]]
            : [m, x[1]]
          : x[1];
      }
      f(p, a);
    } else i != null && c(a, i, s);
    return this;
  }
  get(i, a) {
    if (((i = ro(i)), i)) {
      const s = W.findKey(this, i);
      if (s) {
        const l = this[s];
        if (!a) return l;
        if (a === !0) return G_(l);
        if (W.isFunction(a)) return a.call(this, l, s);
        if (W.isRegExp(a)) return a.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, a) {
    if (((i = ro(i)), i)) {
      const s = W.findKey(this, i);
      return !!(s && this[s] !== void 0 && (!a || eh(this, this[s], s, a)));
    }
    return !1;
  }
  delete(i, a) {
    const s = this;
    let l = !1;
    function c(f) {
      if (((f = ro(f)), f)) {
        const p = W.findKey(s, f);
        p && (!a || eh(s, s[p], p, a)) && (delete s[p], (l = !0));
      }
    }
    return W.isArray(i) ? i.forEach(c) : c(i), l;
  }
  clear(i) {
    const a = Object.keys(this);
    let s = a.length,
      l = !1;
    for (; s--; ) {
      const c = a[s];
      (!i || eh(this, this[c], c, i, !0)) && (delete this[c], (l = !0));
    }
    return l;
  }
  normalize(i) {
    const a = this,
      s = {};
    return (
      W.forEach(this, (l, c) => {
        const f = W.findKey(s, c);
        if (f) {
          (a[f] = ju(l)), delete a[c];
          return;
        }
        const p = i ? Z_(c) : String(c).trim();
        p !== c && delete a[c], (a[p] = ju(l)), (s[p] = !0);
      }),
      this
    );
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const a = Object.create(null);
    return (
      W.forEach(this, (s, l) => {
        s != null && s !== !1 && (a[l] = i && W.isArray(s) ? s.join(", ") : s);
      }),
      a
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([i, a]) => i + ": " + a).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(i) {
    return i instanceof this ? i : new this(i);
  }
  static concat(i, ...a) {
    const s = new this(i);
    return a.forEach((l) => s.set(l)), s;
  }
  static accessor(i) {
    const s = (this[ag] = this[ag] = { accessors: {} }).accessors,
      l = this.prototype;
    function c(f) {
      const p = ro(f);
      s[p] || (Q_(l, f), (s[p] = !0));
    }
    return W.isArray(i) ? i.forEach(c) : c(i), this;
  }
};
xn.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
W.reduceDescriptors(xn.prototype, ({ value: n }, i) => {
  let a = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => n,
    set(s) {
      this[a] = s;
    },
  };
});
W.freezeMethods(xn);
function th(n, i) {
  const a = this || Fo,
    s = i || a,
    l = xn.from(s.headers);
  let c = s.data;
  return (
    W.forEach(n, function (p) {
      c = p.call(a, c, l.normalize(), i ? i.status : void 0);
    }),
    l.normalize(),
    c
  );
}
function V4(n) {
  return !!(n && n.__CANCEL__);
}
function ls(n, i, a) {
  Oe.call(this, n == null ? "canceled" : n, Oe.ERR_CANCELED, i, a),
    (this.name = "CanceledError");
}
W.inherits(ls, Oe, { __CANCEL__: !0 });
function k4(n, i, a) {
  const s = a.config.validateStatus;
  !a.status || !s || s(a.status)
    ? n(a)
    : i(
        new Oe(
          "Request failed with status code " + a.status,
          [Oe.ERR_BAD_REQUEST, Oe.ERR_BAD_RESPONSE][
            Math.floor(a.status / 100) - 4
          ],
          a.config,
          a.request,
          a,
        ),
      );
}
function $_(n) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return (i && i[1]) || "";
}
function J_(n, i) {
  n = n || 10;
  const a = new Array(n),
    s = new Array(n);
  let l = 0,
    c = 0,
    f;
  return (
    (i = i !== void 0 ? i : 1e3),
    function (m) {
      const d = Date.now(),
        x = s[c];
      f || (f = d), (a[l] = m), (s[l] = d);
      let y = c,
        v = 0;
      for (; y !== l; ) (v += a[y++]), (y = y % n);
      if (((l = (l + 1) % n), l === c && (c = (c + 1) % n), d - f < i)) return;
      const E = x && d - x;
      return E ? Math.round((v * 1e3) / E) : void 0;
    }
  );
}
function W_(n, i) {
  let a = 0,
    s = 1e3 / i,
    l,
    c;
  const f = (d, x = Date.now()) => {
    (a = x), (l = null), c && (clearTimeout(c), (c = null)), n(...d);
  };
  return [
    (...d) => {
      const x = Date.now(),
        y = x - a;
      y >= s
        ? f(d, x)
        : ((l = d),
          c ||
            (c = setTimeout(() => {
              (c = null), f(l);
            }, s - y)));
    },
    () => l && f(l),
  ];
}
const nc = (n, i, a = 3) => {
    let s = 0;
    const l = J_(50, 250);
    return W_((c) => {
      const f = c.loaded,
        p = c.lengthComputable ? c.total : void 0,
        m = f - s,
        d = l(m),
        x = f <= p;
      s = f;
      const y = {
        loaded: f,
        total: p,
        progress: p ? f / p : void 0,
        bytes: m,
        rate: d || void 0,
        estimated: d && p && x ? (p - f) / d : void 0,
        event: c,
        lengthComputable: p != null,
        [i ? "download" : "upload"]: !0,
      };
      n(y);
    }, a);
  },
  rg = (n, i) => {
    const a = n != null;
    return [(s) => i[0]({ lengthComputable: a, total: n, loaded: s }), i[1]];
  },
  sg =
    (n) =>
    (...i) =>
      W.asap(() => n(...i)),
  I_ = Qt.hasStandardBrowserEnv
    ? ((n, i) => (a) => (
        (a = new URL(a, Qt.origin)),
        n.protocol === a.protocol &&
          n.host === a.host &&
          (i || n.port === a.port)
      ))(
        new URL(Qt.origin),
        Qt.navigator && /(msie|trident)/i.test(Qt.navigator.userAgent),
      )
    : () => !0,
  eT = Qt.hasStandardBrowserEnv
    ? {
        write(n, i, a, s, l, c, f) {
          if (typeof document == "undefined") return;
          const p = [`${n}=${encodeURIComponent(i)}`];
          W.isNumber(a) && p.push(`expires=${new Date(a).toUTCString()}`),
            W.isString(s) && p.push(`path=${s}`),
            W.isString(l) && p.push(`domain=${l}`),
            c === !0 && p.push("secure"),
            W.isString(f) && p.push(`SameSite=${f}`),
            (document.cookie = p.join("; "));
        },
        read(n) {
          if (typeof document == "undefined") return null;
          const i = document.cookie.match(
            new RegExp("(?:^|; )" + n + "=([^;]*)"),
          );
          return i ? decodeURIComponent(i[1]) : null;
        },
        remove(n) {
          this.write(n, "", Date.now() - 864e5, "/");
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function tT(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function nT(n, i) {
  return i ? n.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : n;
}
function j4(n, i, a) {
  let s = !tT(i);
  return n && (s || a == !1) ? nT(n, i) : i;
}
const og = (n) => (n instanceof xn ? le({}, n) : n);
function lr(n, i) {
  i = i || {};
  const a = {};
  function s(d, x, y, v) {
    return W.isPlainObject(d) && W.isPlainObject(x)
      ? W.merge.call({ caseless: v }, d, x)
      : W.isPlainObject(x)
        ? W.merge({}, x)
        : W.isArray(x)
          ? x.slice()
          : x;
  }
  function l(d, x, y, v) {
    if (W.isUndefined(x)) {
      if (!W.isUndefined(d)) return s(void 0, d, y, v);
    } else return s(d, x, y, v);
  }
  function c(d, x) {
    if (!W.isUndefined(x)) return s(void 0, x);
  }
  function f(d, x) {
    if (W.isUndefined(x)) {
      if (!W.isUndefined(d)) return s(void 0, d);
    } else return s(void 0, x);
  }
  function p(d, x, y) {
    if (y in i) return s(d, x);
    if (y in n) return s(void 0, d);
  }
  const m = {
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
    headers: (d, x, y) => l(og(d), og(x), y, !0),
  };
  return (
    W.forEach(Object.keys(le(le({}, n), i)), function (x) {
      const y = m[x] || l,
        v = y(n[x], i[x], x);
      (W.isUndefined(v) && y !== p) || (a[x] = v);
    }),
    a
  );
}
const q4 = (n) => {
    const i = lr({}, n);
    let {
      data: a,
      withXSRFToken: s,
      xsrfHeaderName: l,
      xsrfCookieName: c,
      headers: f,
      auth: p,
    } = i;
    if (
      ((i.headers = f = xn.from(f)),
      (i.url = L4(
        j4(i.baseURL, i.url, i.allowAbsoluteUrls),
        n.params,
        n.paramsSerializer,
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
      W.isFormData(a))
    ) {
      if (Qt.hasStandardBrowserEnv || Qt.hasStandardBrowserWebWorkerEnv)
        f.setContentType(void 0);
      else if (W.isFunction(a.getHeaders)) {
        const m = a.getHeaders(),
          d = ["content-type", "content-length"];
        Object.entries(m).forEach(([x, y]) => {
          d.includes(x.toLowerCase()) && f.set(x, y);
        });
      }
    }
    if (
      Qt.hasStandardBrowserEnv &&
      (s && W.isFunction(s) && (s = s(i)), s || (s !== !1 && I_(i.url)))
    ) {
      const m = l && c && eT.read(c);
      m && f.set(l, m);
    }
    return i;
  },
  iT = typeof XMLHttpRequest != "undefined",
  aT =
    iT &&
    function (n) {
      return new Promise(function (a, s) {
        const l = q4(n);
        let c = l.data;
        const f = xn.from(l.headers).normalize();
        let { responseType: p, onUploadProgress: m, onDownloadProgress: d } = l,
          x,
          y,
          v,
          E,
          b;
        function S() {
          E && E(),
            b && b(),
            l.cancelToken && l.cancelToken.unsubscribe(x),
            l.signal && l.signal.removeEventListener("abort", x);
        }
        let A = new XMLHttpRequest();
        A.open(l.method.toUpperCase(), l.url, !0), (A.timeout = l.timeout);
        function w() {
          if (!A) return;
          const D = xn.from(
              "getAllResponseHeaders" in A && A.getAllResponseHeaders(),
            ),
            M = {
              data:
                !p || p === "text" || p === "json"
                  ? A.responseText
                  : A.response,
              status: A.status,
              statusText: A.statusText,
              headers: D,
              config: n,
              request: A,
            };
          k4(
            function (_) {
              a(_), S();
            },
            function (_) {
              s(_), S();
            },
            M,
          ),
            (A = null);
        }
        "onloadend" in A
          ? (A.onloadend = w)
          : (A.onreadystatechange = function () {
              !A ||
                A.readyState !== 4 ||
                (A.status === 0 &&
                  !(A.responseURL && A.responseURL.indexOf("file:") === 0)) ||
                setTimeout(w);
            }),
          (A.onabort = function () {
            A &&
              (s(new Oe("Request aborted", Oe.ECONNABORTED, n, A)), (A = null));
          }),
          (A.onerror = function (R) {
            const M = R && R.message ? R.message : "Network Error",
              L = new Oe(M, Oe.ERR_NETWORK, n, A);
            (L.event = R || null), s(L), (A = null);
          }),
          (A.ontimeout = function () {
            let R = l.timeout
              ? "timeout of " + l.timeout + "ms exceeded"
              : "timeout exceeded";
            const M = l.transitional || U4;
            l.timeoutErrorMessage && (R = l.timeoutErrorMessage),
              s(
                new Oe(
                  R,
                  M.clarifyTimeoutError ? Oe.ETIMEDOUT : Oe.ECONNABORTED,
                  n,
                  A,
                ),
              ),
              (A = null);
          }),
          c === void 0 && f.setContentType(null),
          "setRequestHeader" in A &&
            W.forEach(f.toJSON(), function (R, M) {
              A.setRequestHeader(M, R);
            }),
          W.isUndefined(l.withCredentials) ||
            (A.withCredentials = !!l.withCredentials),
          p && p !== "json" && (A.responseType = l.responseType),
          d && (([v, b] = nc(d, !0)), A.addEventListener("progress", v)),
          m &&
            A.upload &&
            (([y, E] = nc(m)),
            A.upload.addEventListener("progress", y),
            A.upload.addEventListener("loadend", E)),
          (l.cancelToken || l.signal) &&
            ((x = (D) => {
              A &&
                (s(!D || D.type ? new ls(null, n, A) : D),
                A.abort(),
                (A = null));
            }),
            l.cancelToken && l.cancelToken.subscribe(x),
            l.signal &&
              (l.signal.aborted ? x() : l.signal.addEventListener("abort", x)));
        const C = $_(l.url);
        if (C && Qt.protocols.indexOf(C) === -1) {
          s(new Oe("Unsupported protocol " + C + ":", Oe.ERR_BAD_REQUEST, n));
          return;
        }
        A.send(c || null);
      });
    },
  rT = (n, i) => {
    const { length: a } = (n = n ? n.filter(Boolean) : []);
    if (i || a) {
      let s = new AbortController(),
        l;
      const c = function (d) {
        if (!l) {
          (l = !0), p();
          const x = d instanceof Error ? d : this.reason;
          s.abort(
            x instanceof Oe ? x : new ls(x instanceof Error ? x.message : x),
          );
        }
      };
      let f =
        i &&
        setTimeout(() => {
          (f = null), c(new Oe(`timeout ${i} of ms exceeded`, Oe.ETIMEDOUT));
        }, i);
      const p = () => {
        n &&
          (f && clearTimeout(f),
          (f = null),
          n.forEach((d) => {
            d.unsubscribe
              ? d.unsubscribe(c)
              : d.removeEventListener("abort", c);
          }),
          (n = null));
      };
      n.forEach((d) => d.addEventListener("abort", c));
      const { signal: m } = s;
      return (m.unsubscribe = () => W.asap(p)), m;
    }
  },
  sT = function* (n, i) {
    let a = n.byteLength;
    if (a < i) {
      yield n;
      return;
    }
    let s = 0,
      l;
    for (; s < a; ) (l = s + i), yield n.slice(s, l), (s = l);
  },
  oT = function (n, i) {
    return _f(this, null, function* () {
      try {
        for (
          var a = Dx(lT(n)), s, l, c;
          (s = !(l = yield new $a(a.next())).done);
          s = !1
        ) {
          const f = l.value;
          yield* Tf(sT(f, i));
        }
      } catch (l) {
        c = [l];
      } finally {
        try {
          s && (l = a.return) && (yield new $a(l.call(a)));
        } finally {
          if (c) throw c[0];
        }
      }
    });
  },
  lT = function (n) {
    return _f(this, null, function* () {
      if (n[Symbol.asyncIterator]) {
        yield* Tf(n);
        return;
      }
      const i = n.getReader();
      try {
        for (;;) {
          const { done: a, value: s } = yield new $a(i.read());
          if (a) break;
          yield s;
        }
      } finally {
        yield new $a(i.cancel());
      }
    });
  },
  lg = (n, i, a, s) => {
    const l = oT(n, i);
    let c = 0,
      f,
      p = (m) => {
        f || ((f = !0), s && s(m));
      };
    return new ReadableStream(
      {
        async pull(m) {
          try {
            const { done: d, value: x } = await l.next();
            if (d) {
              p(), m.close();
              return;
            }
            let y = x.byteLength;
            if (a) {
              let v = (c += y);
              a(v);
            }
            m.enqueue(new Uint8Array(x));
          } catch (d) {
            throw (p(d), d);
          }
        },
        cancel(m) {
          return p(m), l.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  ug = 64 * 1024,
  { isFunction: $l } = W,
  uT = (({ Request: n, Response: i }) => ({ Request: n, Response: i }))(
    W.global,
  ),
  { ReadableStream: cg, TextEncoder: fg } = W.global,
  hg = (n, ...i) => {
    try {
      return !!n(...i);
    } catch (a) {
      return !1;
    }
  },
  cT = (n) => {
    n = W.merge.call({ skipUndefined: !0 }, uT, n);
    const { fetch: i, Request: a, Response: s } = n,
      l = i ? $l(i) : typeof fetch == "function",
      c = $l(a),
      f = $l(s);
    if (!l) return !1;
    const p = l && $l(cg),
      m =
        l &&
        (typeof fg == "function"
          ? (
              (b) => (S) =>
                b.encode(S)
            )(new fg())
          : async (b) => new Uint8Array(await new a(b).arrayBuffer())),
      d =
        c &&
        p &&
        hg(() => {
          let b = !1;
          const S = new a(Qt.origin, {
            body: new cg(),
            method: "POST",
            get duplex() {
              return (b = !0), "half";
            },
          }).headers.has("Content-Type");
          return b && !S;
        }),
      x = f && p && hg(() => W.isReadableStream(new s("").body)),
      y = { stream: x && ((b) => b.body) };
    l &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((b) => {
        !y[b] &&
          (y[b] = (S, A) => {
            let w = S && S[b];
            if (w) return w.call(S);
            throw new Oe(
              `Response type '${b}' is not supported`,
              Oe.ERR_NOT_SUPPORT,
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
          return (await m(b)).byteLength;
      },
      E = async (b, S) => {
        const A = W.toFiniteNumber(b.getContentLength());
        return A == null ? v(S) : A;
      };
    return async (b) => {
      let {
          url: S,
          method: A,
          data: w,
          signal: C,
          cancelToken: D,
          timeout: R,
          onDownloadProgress: M,
          onUploadProgress: L,
          responseType: _,
          headers: O,
          withCredentials: $ = "same-origin",
          fetchOptions: z,
        } = q4(b),
        j = i || fetch;
      _ = _ ? (_ + "").toLowerCase() : "text";
      let Q = rT([C, D && D.toAbortSignal()], R),
        ee = null;
      const oe =
        Q &&
        Q.unsubscribe &&
        (() => {
          Q.unsubscribe();
        });
      let de;
      try {
        if (
          L &&
          d &&
          A !== "get" &&
          A !== "head" &&
          (de = await E(O, w)) !== 0
        ) {
          let T = new a(S, { method: "POST", body: w, duplex: "half" }),
            N;
          if (
            (W.isFormData(w) &&
              (N = T.headers.get("content-type")) &&
              O.setContentType(N),
            T.body)
          ) {
            const [P, Y] = rg(de, nc(sg(L)));
            w = lg(T.body, ug, P, Y);
          }
        }
        W.isString($) || ($ = $ ? "include" : "omit");
        const k = c && "credentials" in a.prototype,
          te = Ue(le({}, z), {
            signal: Q,
            method: A.toUpperCase(),
            headers: O.normalize().toJSON(),
            body: w,
            duplex: "half",
            credentials: k ? $ : void 0,
          });
        ee = c && new a(S, te);
        let ie = await (c ? j(ee, z) : j(S, te));
        const me = x && (_ === "stream" || _ === "response");
        if (x && (M || (me && oe))) {
          const T = {};
          ["status", "statusText", "headers"].forEach((ue) => {
            T[ue] = ie[ue];
          });
          const N = W.toFiniteNumber(ie.headers.get("content-length")),
            [P, Y] = (M && rg(N, nc(sg(M), !0))) || [];
          ie = new s(
            lg(ie.body, ug, P, () => {
              Y && Y(), oe && oe();
            }),
            T,
          );
        }
        _ = _ || "text";
        let xe = await y[W.findKey(y, _) || "text"](ie, b);
        return (
          !me && oe && oe(),
          await new Promise((T, N) => {
            k4(T, N, {
              data: xe,
              headers: xn.from(ie.headers),
              status: ie.status,
              statusText: ie.statusText,
              config: b,
              request: ee,
            });
          })
        );
      } catch (k) {
        throw (
          (oe && oe(),
          k && k.name === "TypeError" && /Load failed|fetch/i.test(k.message)
            ? Object.assign(new Oe("Network Error", Oe.ERR_NETWORK, b, ee), {
                cause: k.cause || k,
              })
            : Oe.from(k, k && k.code, b, ee))
        );
      }
    };
  },
  fT = new Map(),
  P4 = (n) => {
    let i = (n && n.env) || {};
    const { fetch: a, Request: s, Response: l } = i,
      c = [s, l, a];
    let f = c.length,
      p = f,
      m,
      d,
      x = fT;
    for (; p--; )
      (m = c[p]),
        (d = x.get(m)),
        d === void 0 && x.set(m, (d = p ? new Map() : cT(i))),
        (x = d);
    return d;
  };
P4();
const Md = { http: T_, xhr: aT, fetch: { get: P4 } };
W.forEach(Md, (n, i) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: i });
    } catch (a) {}
    Object.defineProperty(n, "adapterName", { value: i });
  }
});
const dg = (n) => `- ${n}`,
  hT = (n) => W.isFunction(n) || n === null || n === !1;
function dT(n, i) {
  n = W.isArray(n) ? n : [n];
  const { length: a } = n;
  let s, l;
  const c = {};
  for (let f = 0; f < a; f++) {
    s = n[f];
    let p;
    if (
      ((l = s),
      !hT(s) && ((l = Md[(p = String(s)).toLowerCase()]), l === void 0))
    )
      throw new Oe(`Unknown adapter '${p}'`);
    if (l && (W.isFunction(l) || (l = l.get(i)))) break;
    c[p || "#" + f] = l;
  }
  if (!l) {
    const f = Object.entries(c).map(
      ([m, d]) =>
        `adapter ${m} ` +
        (d === !1
          ? "is not supported by the environment"
          : "is not available in the build"),
    );
    let p = a
      ? f.length > 1
        ? `since :
` +
          f.map(dg).join(`
`)
        : " " + dg(f[0])
      : "as no adapter specified";
    throw new Oe(
      "There is no suitable adapter to dispatch the request " + p,
      "ERR_NOT_SUPPORT",
    );
  }
  return l;
}
const Y4 = { getAdapter: dT, adapters: Md };
function nh(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new ls(null, n);
}
function pg(n) {
  return (
    nh(n),
    (n.headers = xn.from(n.headers)),
    (n.data = th.call(n, n.transformRequest)),
    ["post", "put", "patch"].indexOf(n.method) !== -1 &&
      n.headers.setContentType("application/x-www-form-urlencoded", !1),
    Y4.getAdapter(
      n.adapter || Fo.adapter,
      n,
    )(n).then(
      function (s) {
        return (
          nh(n),
          (s.data = th.call(n, n.transformResponse, s)),
          (s.headers = xn.from(s.headers)),
          s
        );
      },
      function (s) {
        return (
          V4(s) ||
            (nh(n),
            s &&
              s.response &&
              ((s.response.data = th.call(n, n.transformResponse, s.response)),
              (s.response.headers = xn.from(s.response.headers)))),
          Promise.reject(s)
        );
      },
    )
  );
}
const X4 = "1.13.0",
  xc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (n, i) => {
    xc[n] = function (s) {
      return typeof s === n || "a" + (i < 1 ? "n " : " ") + n;
    };
  },
);
const mg = {};
xc.transitional = function (i, a, s) {
  function l(c, f) {
    return (
      "[Axios v" +
      X4 +
      "] Transitional option '" +
      c +
      "'" +
      f +
      (s ? ". " + s : "")
    );
  }
  return (c, f, p) => {
    if (i === !1)
      throw new Oe(
        l(f, " has been removed" + (a ? " in " + a : "")),
        Oe.ERR_DEPRECATED,
      );
    return (
      a &&
        !mg[f] &&
        ((mg[f] = !0),
        console.warn(
          l(
            f,
            " has been deprecated since v" +
              a +
              " and will be removed in the near future",
          ),
        )),
      i ? i(c, f, p) : !0
    );
  };
};
xc.spelling = function (i) {
  return (a, s) => (console.warn(`${s} is likely a misspelling of ${i}`), !0);
};
function pT(n, i, a) {
  if (typeof n != "object")
    throw new Oe("options must be an object", Oe.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(n);
  let l = s.length;
  for (; l-- > 0; ) {
    const c = s[l],
      f = i[c];
    if (f) {
      const p = n[c],
        m = p === void 0 || f(p, c, n);
      if (m !== !0)
        throw new Oe("option " + c + " must be " + m, Oe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (a !== !0) throw new Oe("Unknown option " + c, Oe.ERR_BAD_OPTION);
  }
}
const qu = { assertOptions: pT, validators: xc },
  gi = qu.validators;
let or = class {
  constructor(i) {
    (this.defaults = i || {}),
      (this.interceptors = { request: new ig(), response: new ig() });
  }
  async request(i, a) {
    try {
      return await this._request(i, a);
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
  _request(i, a) {
    typeof i == "string" ? ((a = a || {}), (a.url = i)) : (a = i || {}),
      (a = lr(this.defaults, a));
    const { transitional: s, paramsSerializer: l, headers: c } = a;
    s !== void 0 &&
      qu.assertOptions(
        s,
        {
          silentJSONParsing: gi.transitional(gi.boolean),
          forcedJSONParsing: gi.transitional(gi.boolean),
          clarifyTimeoutError: gi.transitional(gi.boolean),
        },
        !1,
      ),
      l != null &&
        (W.isFunction(l)
          ? (a.paramsSerializer = { serialize: l })
          : qu.assertOptions(
              l,
              { encode: gi.function, serialize: gi.function },
              !0,
            )),
      a.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (a.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (a.allowAbsoluteUrls = !0)),
      qu.assertOptions(
        a,
        {
          baseUrl: gi.spelling("baseURL"),
          withXsrfToken: gi.spelling("withXSRFToken"),
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
      (a.headers = xn.concat(f, c));
    const p = [];
    let m = !0;
    this.interceptors.request.forEach(function (S) {
      (typeof S.runWhen == "function" && S.runWhen(a) === !1) ||
        ((m = m && S.synchronous), p.unshift(S.fulfilled, S.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function (S) {
      d.push(S.fulfilled, S.rejected);
    });
    let x,
      y = 0,
      v;
    if (!m) {
      const b = [pg.bind(this), void 0];
      for (
        b.unshift(...p), b.push(...d), v = b.length, x = Promise.resolve(a);
        y < v;

      )
        x = x.then(b[y++], b[y++]);
      return x;
    }
    v = p.length;
    let E = a;
    for (; y < v; ) {
      const b = p[y++],
        S = p[y++];
      try {
        E = b(E);
      } catch (A) {
        S.call(this, A);
        break;
      }
    }
    try {
      x = pg.call(this, E);
    } catch (b) {
      return Promise.reject(b);
    }
    for (y = 0, v = d.length; y < v; ) x = x.then(d[y++], d[y++]);
    return x;
  }
  getUri(i) {
    i = lr(this.defaults, i);
    const a = j4(i.baseURL, i.url, i.allowAbsoluteUrls);
    return L4(a, i.params, i.paramsSerializer);
  }
};
W.forEach(["delete", "get", "head", "options"], function (i) {
  or.prototype[i] = function (a, s) {
    return this.request(
      lr(s || {}, { method: i, url: a, data: (s || {}).data }),
    );
  };
});
W.forEach(["post", "put", "patch"], function (i) {
  function a(s) {
    return function (c, f, p) {
      return this.request(
        lr(p || {}, {
          method: i,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: c,
          data: f,
        }),
      );
    };
  }
  (or.prototype[i] = a()), (or.prototype[i + "Form"] = a(!0));
});
let mT = class G4 {
  constructor(i) {
    if (typeof i != "function")
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
      i(function (c, f, p) {
        s.reason || ((s.reason = new ls(c, f, p)), a(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : (this._listeners = [i]);
  }
  unsubscribe(i) {
    if (!this._listeners) return;
    const a = this._listeners.indexOf(i);
    a !== -1 && this._listeners.splice(a, 1);
  }
  toAbortSignal() {
    const i = new AbortController(),
      a = (s) => {
        i.abort(s);
      };
    return (
      this.subscribe(a),
      (i.signal.unsubscribe = () => this.unsubscribe(a)),
      i.signal
    );
  }
  static source() {
    let i;
    return {
      token: new G4(function (l) {
        i = l;
      }),
      cancel: i,
    };
  }
};
function xT(n) {
  return function (a) {
    return n.apply(null, a);
  };
}
function yT(n) {
  return W.isObject(n) && n.isAxiosError === !0;
}
const zh = {
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
Object.entries(zh).forEach(([n, i]) => {
  zh[i] = n;
});
function K4(n) {
  const i = new or(n),
    a = C4(or.prototype.request, i);
  return (
    W.extend(a, or.prototype, i, { allOwnKeys: !0 }),
    W.extend(a, i, null, { allOwnKeys: !0 }),
    (a.create = function (l) {
      return K4(lr(n, l));
    }),
    a
  );
}
const Mt = K4(Fo);
Mt.Axios = or;
Mt.CanceledError = ls;
Mt.CancelToken = mT;
Mt.isCancel = V4;
Mt.VERSION = X4;
Mt.toFormData = mc;
Mt.AxiosError = Oe;
Mt.Cancel = Mt.CanceledError;
Mt.all = function (i) {
  return Promise.all(i);
};
Mt.spread = xT;
Mt.isAxiosError = yT;
Mt.mergeConfig = lr;
Mt.AxiosHeaders = xn;
Mt.formToJSON = (n) => H4(W.isHTMLForm(n) ? new FormData(n) : n);
Mt.getAdapter = Y4.getAdapter;
Mt.HttpStatusCode = zh;
Mt.default = Mt;
const {
    Axios: p9,
    AxiosError: m9,
    CanceledError: x9,
    isCancel: y9,
    CancelToken: v9,
    VERSION: g9,
    all: E9,
    Cancel: b9,
    isAxiosError: A9,
    spread: S9,
    toFormData: C9,
    AxiosHeaders: D9,
    HttpStatusCode: B9,
    formToJSON: _9,
    getAdapter: T9,
    mergeConfig: R9,
  } = Mt,
  Ai = Object.create(null);
Ai.open = "0";
Ai.close = "1";
Ai.ping = "2";
Ai.pong = "3";
Ai.message = "4";
Ai.upgrade = "5";
Ai.noop = "6";
const Pu = Object.create(null);
Object.keys(Ai).forEach((n) => {
  Pu[Ai[n]] = n;
});
const Nh = { type: "error", data: "parser error" },
  Z4 =
    typeof Blob == "function" ||
    (typeof Blob != "undefined" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  Q4 = typeof ArrayBuffer == "function",
  $4 = (n) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(n)
      : n && n.buffer instanceof ArrayBuffer,
  Od = ({ type: n, data: i }, a, s) =>
    Z4 && i instanceof Blob
      ? a
        ? s(i)
        : xg(i, s)
      : Q4 && (i instanceof ArrayBuffer || $4(i))
        ? a
          ? s(i)
          : xg(new Blob([i]), s)
        : s(Ai[n] + (i || "")),
  xg = (n, i) => {
    const a = new FileReader();
    return (
      (a.onload = function () {
        const s = a.result.split(",")[1];
        i("b" + (s || ""));
      }),
      a.readAsDataURL(n)
    );
  };
function yg(n) {
  return n instanceof Uint8Array
    ? n
    : n instanceof ArrayBuffer
      ? new Uint8Array(n)
      : new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
}
let ih;
function vT(n, i) {
  if (Z4 && n.data instanceof Blob)
    return n.data.arrayBuffer().then(yg).then(i);
  if (Q4 && (n.data instanceof ArrayBuffer || $4(n.data))) return i(yg(n.data));
  Od(n, !1, (a) => {
    ih || (ih = new TextEncoder()), i(ih.encode(a));
  });
}
const vg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  uo = typeof Uint8Array == "undefined" ? [] : new Uint8Array(256);
for (let n = 0; n < vg.length; n++) uo[vg.charCodeAt(n)] = n;
const gT = (n) => {
    let i = n.length * 0.75,
      a = n.length,
      s,
      l = 0,
      c,
      f,
      p,
      m;
    n[n.length - 1] === "=" && (i--, n[n.length - 2] === "=" && i--);
    const d = new ArrayBuffer(i),
      x = new Uint8Array(d);
    for (s = 0; s < a; s += 4)
      (c = uo[n.charCodeAt(s)]),
        (f = uo[n.charCodeAt(s + 1)]),
        (p = uo[n.charCodeAt(s + 2)]),
        (m = uo[n.charCodeAt(s + 3)]),
        (x[l++] = (c << 2) | (f >> 4)),
        (x[l++] = ((f & 15) << 4) | (p >> 2)),
        (x[l++] = ((p & 3) << 6) | (m & 63));
    return d;
  },
  ET = typeof ArrayBuffer == "function",
  Fd = (n, i) => {
    if (typeof n != "string") return { type: "message", data: J4(n, i) };
    const a = n.charAt(0);
    return a === "b"
      ? { type: "message", data: bT(n.substring(1), i) }
      : Pu[a]
        ? n.length > 1
          ? { type: Pu[a], data: n.substring(1) }
          : { type: Pu[a] }
        : Nh;
  },
  bT = (n, i) => {
    if (ET) {
      const a = gT(n);
      return J4(a, i);
    } else return { base64: !0, data: n };
  },
  J4 = (n, i) => {
    switch (i) {
      case "blob":
        return n instanceof Blob ? n : new Blob([n]);
      case "arraybuffer":
      default:
        return n instanceof ArrayBuffer ? n : n.buffer;
    }
  },
  W4 = "",
  AT = (n, i) => {
    const a = n.length,
      s = new Array(a);
    let l = 0;
    n.forEach((c, f) => {
      Od(c, !1, (p) => {
        (s[f] = p), ++l === a && i(s.join(W4));
      });
    });
  },
  ST = (n, i) => {
    const a = n.split(W4),
      s = [];
    for (let l = 0; l < a.length; l++) {
      const c = Fd(a[l], i);
      if ((s.push(c), c.type === "error")) break;
    }
    return s;
  };
function CT() {
  return new TransformStream({
    transform(n, i) {
      vT(n, (a) => {
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
        n.data && typeof n.data != "string" && (l[0] |= 128),
          i.enqueue(l),
          i.enqueue(a);
      });
    },
  });
}
let ah;
function Jl(n) {
  return n.reduce((i, a) => i + a.length, 0);
}
function Wl(n, i) {
  if (n[0].length === i) return n.shift();
  const a = new Uint8Array(i);
  let s = 0;
  for (let l = 0; l < i; l++)
    (a[l] = n[0][s++]), s === n[0].length && (n.shift(), (s = 0));
  return n.length && s < n[0].length && (n[0] = n[0].slice(s)), a;
}
function DT(n, i) {
  ah || (ah = new TextDecoder());
  const a = [];
  let s = 0,
    l = -1,
    c = !1;
  return new TransformStream({
    transform(f, p) {
      for (a.push(f); ; ) {
        if (s === 0) {
          if (Jl(a) < 1) break;
          const m = Wl(a, 1);
          (c = (m[0] & 128) === 128),
            (l = m[0] & 127),
            l < 126 ? (s = 3) : l === 126 ? (s = 1) : (s = 2);
        } else if (s === 1) {
          if (Jl(a) < 2) break;
          const m = Wl(a, 2);
          (l = new DataView(m.buffer, m.byteOffset, m.length).getUint16(0)),
            (s = 3);
        } else if (s === 2) {
          if (Jl(a) < 8) break;
          const m = Wl(a, 8),
            d = new DataView(m.buffer, m.byteOffset, m.length),
            x = d.getUint32(0);
          if (x > Math.pow(2, 21) - 1) {
            p.enqueue(Nh);
            break;
          }
          (l = x * Math.pow(2, 32) + d.getUint32(4)), (s = 3);
        } else {
          if (Jl(a) < l) break;
          const m = Wl(a, l);
          p.enqueue(Fd(c ? m : ah.decode(m), i)), (s = 0);
        }
        if (l === 0 || l > n) {
          p.enqueue(Nh);
          break;
        }
      }
    },
  });
}
const I4 = 4;
function wt(n) {
  if (n) return BT(n);
}
function BT(n) {
  for (var i in wt.prototype) n[i] = wt.prototype[i];
  return n;
}
wt.prototype.on = wt.prototype.addEventListener = function (n, i) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + n] = this._callbacks["$" + n] || []).push(i),
    this
  );
};
wt.prototype.once = function (n, i) {
  function a() {
    this.off(n, a), i.apply(this, arguments);
  }
  return (a.fn = i), this.on(n, a), this;
};
wt.prototype.off =
  wt.prototype.removeListener =
  wt.prototype.removeAllListeners =
  wt.prototype.removeEventListener =
    function (n, i) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var a = this._callbacks["$" + n];
      if (!a) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + n], this;
      for (var s, l = 0; l < a.length; l++)
        if (((s = a[l]), s === i || s.fn === i)) {
          a.splice(l, 1);
          break;
        }
      return a.length === 0 && delete this._callbacks["$" + n], this;
    };
wt.prototype.emit = function (n) {
  this._callbacks = this._callbacks || {};
  for (
    var i = new Array(arguments.length - 1),
      a = this._callbacks["$" + n],
      s = 1;
    s < arguments.length;
    s++
  )
    i[s - 1] = arguments[s];
  if (a) {
    a = a.slice(0);
    for (var s = 0, l = a.length; s < l; ++s) a[s].apply(this, i);
  }
  return this;
};
wt.prototype.emitReserved = wt.prototype.emit;
wt.prototype.listeners = function (n) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks["$" + n] || []
  );
};
wt.prototype.hasListeners = function (n) {
  return !!this.listeners(n).length;
};
const yc =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (i) => Promise.resolve().then(i)
      : (i, a) => a(i, 0),
  Yn =
    typeof self != "undefined"
      ? self
      : typeof window != "undefined"
        ? window
        : Function("return this")(),
  _T = "arraybuffer";
function e8(n, ...i) {
  return i.reduce((a, s) => (n.hasOwnProperty(s) && (a[s] = n[s]), a), {});
}
const TT = Yn.setTimeout,
  RT = Yn.clearTimeout;
function vc(n, i) {
  i.useNativeTimers
    ? ((n.setTimeoutFn = TT.bind(Yn)), (n.clearTimeoutFn = RT.bind(Yn)))
    : ((n.setTimeoutFn = Yn.setTimeout.bind(Yn)),
      (n.clearTimeoutFn = Yn.clearTimeout.bind(Yn)));
}
const wT = 1.33;
function MT(n) {
  return typeof n == "string"
    ? OT(n)
    : Math.ceil((n.byteLength || n.size) * wT);
}
function OT(n) {
  let i = 0,
    a = 0;
  for (let s = 0, l = n.length; s < l; s++)
    (i = n.charCodeAt(s)),
      i < 128
        ? (a += 1)
        : i < 2048
          ? (a += 2)
          : i < 55296 || i >= 57344
            ? (a += 3)
            : (s++, (a += 4));
  return a;
}
function t8() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function FT(n) {
  let i = "";
  for (let a in n)
    n.hasOwnProperty(a) &&
      (i.length && (i += "&"),
      (i += encodeURIComponent(a) + "=" + encodeURIComponent(n[a])));
  return i;
}
function zT(n) {
  let i = {},
    a = n.split("&");
  for (let s = 0, l = a.length; s < l; s++) {
    let c = a[s].split("=");
    i[decodeURIComponent(c[0])] = decodeURIComponent(c[1]);
  }
  return i;
}
class NT extends Error {
  constructor(i, a, s) {
    super(i),
      (this.description = a),
      (this.context = s),
      (this.type = "TransportError");
  }
}
class zd extends wt {
  constructor(i) {
    super(),
      (this.writable = !1),
      vc(this, i),
      (this.opts = i),
      (this.query = i.query),
      (this.socket = i.socket),
      (this.supportsBinary = !i.forceBase64);
  }
  onError(i, a, s) {
    return super.emitReserved("error", new NT(i, a, s)), this;
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
  send(i) {
    this.readyState === "open" && this.write(i);
  }
  onOpen() {
    (this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open");
  }
  onData(i) {
    const a = Fd(i, this.socket.binaryType);
    this.onPacket(a);
  }
  onPacket(i) {
    super.emitReserved("packet", i);
  }
  onClose(i) {
    (this.readyState = "closed"), super.emitReserved("close", i);
  }
  pause(i) {}
  createUri(i, a = {}) {
    return (
      i +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(a)
    );
  }
  _hostname() {
    const i = this.opts.hostname;
    return i.indexOf(":") === -1 ? i : "[" + i + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(i) {
    const a = FT(i);
    return a.length ? "?" + a : "";
  }
}
class LT extends zd {
  constructor() {
    super(...arguments), (this._polling = !1);
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this._poll();
  }
  pause(i) {
    this.readyState = "pausing";
    const a = () => {
      (this.readyState = "paused"), i();
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
  onData(i) {
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
    ST(i, this.socket.binaryType).forEach(a),
      this.readyState !== "closed" &&
        ((this._polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll());
  }
  doClose() {
    const i = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? i() : this.once("open", i);
  }
  write(i) {
    (this.writable = !1),
      AT(i, (a) => {
        this.doWrite(a, () => {
          (this.writable = !0), this.emitReserved("drain");
        });
      });
  }
  uri() {
    const i = this.opts.secure ? "https" : "http",
      a = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (a[this.opts.timestampParam] = t8()),
      !this.supportsBinary && !a.sid && (a.b64 = 1),
      this.createUri(i, a)
    );
  }
}
let n8 = !1;
try {
  n8 =
    typeof XMLHttpRequest != "undefined" &&
    "withCredentials" in new XMLHttpRequest();
} catch (n) {}
const UT = n8;
function HT() {}
class VT extends LT {
  constructor(i) {
    if ((super(i), typeof location != "undefined")) {
      const a = location.protocol === "https:";
      let s = location.port;
      s || (s = a ? "443" : "80"),
        (this.xd =
          (typeof location != "undefined" &&
            i.hostname !== location.hostname) ||
          s !== i.port);
    }
  }
  doWrite(i, a) {
    const s = this.request({ method: "POST", data: i });
    s.on("success", a),
      s.on("error", (l, c) => {
        this.onError("xhr post error", l, c);
      });
  }
  doPoll() {
    const i = this.request();
    i.on("data", this.onData.bind(this)),
      i.on("error", (a, s) => {
        this.onError("xhr poll error", a, s);
      }),
      (this.pollXhr = i);
  }
}
let Wr = class Yu extends wt {
  constructor(i, a, s) {
    super(),
      (this.createRequest = i),
      vc(this, s),
      (this._opts = s),
      (this._method = s.method || "GET"),
      (this._uri = a),
      (this._data = s.data !== void 0 ? s.data : null),
      this._create();
  }
  _create() {
    var i;
    const a = e8(
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
      (i = this._opts.cookieJar) === null || i === void 0 || i.addCookies(s),
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
      ((this._index = Yu.requestsCount++), (Yu.requests[this._index] = this));
  }
  _onError(i) {
    this.emitReserved("error", i, this._xhr), this._cleanup(!0);
  }
  _cleanup(i) {
    if (!(typeof this._xhr == "undefined" || this._xhr === null)) {
      if (((this._xhr.onreadystatechange = HT), i))
        try {
          this._xhr.abort();
        } catch (a) {}
      typeof document != "undefined" && delete Yu.requests[this._index],
        (this._xhr = null);
    }
  }
  _onLoad() {
    const i = this._xhr.responseText;
    i !== null &&
      (this.emitReserved("data", i),
      this.emitReserved("success"),
      this._cleanup());
  }
  abort() {
    this._cleanup();
  }
};
Wr.requestsCount = 0;
Wr.requests = {};
if (typeof document != "undefined") {
  if (typeof attachEvent == "function") attachEvent("onunload", gg);
  else if (typeof addEventListener == "function") {
    const n = "onpagehide" in Yn ? "pagehide" : "unload";
    addEventListener(n, gg, !1);
  }
}
function gg() {
  for (let n in Wr.requests)
    Wr.requests.hasOwnProperty(n) && Wr.requests[n].abort();
}
const kT = (function () {
  const n = i8({ xdomain: !1 });
  return n && n.responseType !== null;
})();
class jT extends VT {
  constructor(i) {
    super(i);
    const a = i && i.forceBase64;
    this.supportsBinary = kT && !a;
  }
  request(i = {}) {
    return (
      Object.assign(i, { xd: this.xd }, this.opts), new Wr(i8, this.uri(), i)
    );
  }
}
function i8(n) {
  const i = n.xdomain;
  try {
    if (typeof XMLHttpRequest != "undefined" && (!i || UT))
      return new XMLHttpRequest();
  } catch (a) {}
  if (!i)
    try {
      return new Yn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (a) {}
}
const a8 =
  typeof navigator != "undefined" &&
  typeof navigator.product == "string" &&
  navigator.product.toLowerCase() === "reactnative";
class qT extends zd {
  get name() {
    return "websocket";
  }
  doOpen() {
    const i = this.uri(),
      a = this.opts.protocols,
      s = a8
        ? {}
        : e8(
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
      this.ws = this.createSocket(i, a, s);
    } catch (l) {
      return this.emitReserved("error", l);
    }
    (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (i) =>
        this.onClose({
          description: "websocket connection closed",
          context: i,
        })),
      (this.ws.onmessage = (i) => this.onData(i.data)),
      (this.ws.onerror = (i) => this.onError("websocket error", i));
  }
  write(i) {
    this.writable = !1;
    for (let a = 0; a < i.length; a++) {
      const s = i[a],
        l = a === i.length - 1;
      Od(s, this.supportsBinary, (c) => {
        try {
          this.doWrite(s, c);
        } catch (f) {}
        l &&
          yc(() => {
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
    const i = this.opts.secure ? "wss" : "ws",
      a = this.query || {};
    return (
      this.opts.timestampRequests && (a[this.opts.timestampParam] = t8()),
      this.supportsBinary || (a.b64 = 1),
      this.createUri(i, a)
    );
  }
}
const rh = Yn.WebSocket || Yn.MozWebSocket;
class PT extends qT {
  createSocket(i, a, s) {
    return a8 ? new rh(i, a, s) : a ? new rh(i, a) : new rh(i);
  }
  doWrite(i, a) {
    this.ws.send(a);
  }
}
class YT extends zd {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name],
      );
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this._transport.closed
      .then(() => {
        this.onClose();
      })
      .catch((i) => {
        this.onError("webtransport error", i);
      }),
      this._transport.ready.then(() => {
        this._transport.createBidirectionalStream().then((i) => {
          const a = DT(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            s = i.readable.pipeThrough(a).getReader(),
            l = CT();
          l.readable.pipeTo(i.writable),
            (this._writer = l.writable.getWriter());
          const c = () => {
            s.read()
              .then(({ done: p, value: m }) => {
                p || (this.onPacket(m), c());
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
  write(i) {
    this.writable = !1;
    for (let a = 0; a < i.length; a++) {
      const s = i[a],
        l = a === i.length - 1;
      this._writer.write(s).then(() => {
        l &&
          yc(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var i;
    (i = this._transport) === null || i === void 0 || i.close();
  }
}
const XT = { websocket: PT, webtransport: YT, polling: jT },
  GT =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  KT = [
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
function Lh(n) {
  if (n.length > 8e3) throw "URI too long";
  const i = n,
    a = n.indexOf("["),
    s = n.indexOf("]");
  a != -1 &&
    s != -1 &&
    (n =
      n.substring(0, a) +
      n.substring(a, s).replace(/:/g, ";") +
      n.substring(s, n.length));
  let l = GT.exec(n || ""),
    c = {},
    f = 14;
  for (; f--; ) c[KT[f]] = l[f] || "";
  return (
    a != -1 &&
      s != -1 &&
      ((c.source = i),
      (c.host = c.host.substring(1, c.host.length - 1).replace(/;/g, ":")),
      (c.authority = c.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (c.ipv6uri = !0)),
    (c.pathNames = ZT(c, c.path)),
    (c.queryKey = QT(c, c.query)),
    c
  );
}
function ZT(n, i) {
  const a = /\/{2,9}/g,
    s = i.replace(a, "/").split("/");
  return (
    (i.slice(0, 1) == "/" || i.length === 0) && s.splice(0, 1),
    i.slice(-1) == "/" && s.splice(s.length - 1, 1),
    s
  );
}
function QT(n, i) {
  const a = {};
  return (
    i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (s, l, c) {
      l && (a[l] = c);
    }),
    a
  );
}
const Uh =
    typeof addEventListener == "function" &&
    typeof removeEventListener == "function",
  Xu = [];
Uh &&
  addEventListener(
    "offline",
    () => {
      Xu.forEach((n) => n());
    },
    !1,
  );
class Da extends wt {
  constructor(i, a) {
    if (
      (super(),
      (this.binaryType = _T),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      i && typeof i == "object" && ((a = i), (i = null)),
      i)
    ) {
      const s = Lh(i);
      (a.hostname = s.host),
        (a.secure = s.protocol === "https" || s.protocol === "wss"),
        (a.port = s.port),
        s.query && (a.query = s.query);
    } else a.host && (a.hostname = Lh(a.host).host);
    vc(this, a),
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
        (this.opts.query = zT(this.opts.query)),
      Uh &&
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
          Xu.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open();
  }
  createTransport(i) {
    const a = Object.assign({}, this.opts.query);
    (a.EIO = I4), (a.transport = i), this.id && (a.sid = this.id);
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
      this.opts.transportOptions[i],
    );
    return new this._transportsByName[i](s);
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const i =
      this.opts.rememberUpgrade &&
      Da.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
        ? "websocket"
        : this.transports[0];
    this.readyState = "opening";
    const a = this.createTransport(i);
    a.open(), this.setTransport(a);
  }
  setTransport(i) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = i),
      i
        .on("drain", this._onDrain.bind(this))
        .on("packet", this._onPacket.bind(this))
        .on("error", this._onError.bind(this))
        .on("close", (a) => this._onClose("transport close", a));
  }
  onOpen() {
    (this.readyState = "open"),
      (Da.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush();
  }
  _onPacket(i) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", i), this.emitReserved("heartbeat"), i.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(i.data));
          break;
        case "ping":
          this._sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong"),
            this._resetPingTimeout();
          break;
        case "error":
          const a = new Error("server error");
          (a.code = i.data), this._onError(a);
          break;
        case "message":
          this.emitReserved("data", i.data),
            this.emitReserved("message", i.data);
          break;
      }
  }
  onHandshake(i) {
    this.emitReserved("handshake", i),
      (this.id = i.sid),
      (this.transport.query.sid = i.sid),
      (this._pingInterval = i.pingInterval),
      (this._pingTimeout = i.pingTimeout),
      (this._maxPayload = i.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this._resetPingTimeout();
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const i = this._pingInterval + this._pingTimeout;
    (this._pingTimeoutTime = Date.now() + i),
      (this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose("ping timeout");
      }, i)),
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
      const i = this._getWritablePackets();
      this.transport.send(i),
        (this._prevBufferLen = i.length),
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
      if ((l && (a += MT(l)), s > 0 && a > this._maxPayload))
        return this.writeBuffer.slice(0, s);
      a += 2;
    }
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return !0;
    const i = Date.now() > this._pingTimeoutTime;
    return (
      i &&
        ((this._pingTimeoutTime = 0),
        yc(() => {
          this._onClose("ping timeout");
        }, this.setTimeoutFn)),
      i
    );
  }
  write(i, a, s) {
    return this._sendPacket("message", i, a, s), this;
  }
  send(i, a, s) {
    return this._sendPacket("message", i, a, s), this;
  }
  _sendPacket(i, a, s, l) {
    if (
      (typeof a == "function" && ((l = a), (a = void 0)),
      typeof s == "function" && ((l = s), (s = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (s = s || {}), (s.compress = s.compress !== !1);
    const c = { type: i, data: a, options: s };
    this.emitReserved("packetCreate", c),
      this.writeBuffer.push(c),
      l && this.once("flush", l),
      this.flush();
  }
  close() {
    const i = () => {
        this._onClose("forced close"), this.transport.close();
      },
      a = () => {
        this.off("upgrade", a), this.off("upgradeError", a), i();
      },
      s = () => {
        this.once("upgrade", a), this.once("upgradeError", a);
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? s() : i();
            })
          : this.upgrading
            ? s()
            : i()),
      this
    );
  }
  _onError(i) {
    if (
      ((Da.priorWebsocketSuccess = !1),
      this.opts.tryAllTransports &&
        this.transports.length > 1 &&
        this.readyState === "opening")
    )
      return this.transports.shift(), this._open();
    this.emitReserved("error", i), this._onClose("transport error", i);
  }
  _onClose(i, a) {
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
        Uh &&
          (this._beforeunloadEventListener &&
            removeEventListener(
              "beforeunload",
              this._beforeunloadEventListener,
              !1,
            ),
          this._offlineEventListener))
      ) {
        const s = Xu.indexOf(this._offlineEventListener);
        s !== -1 && Xu.splice(s, 1);
      }
      (this.readyState = "closed"),
        (this.id = null),
        this.emitReserved("close", i, a),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0);
    }
  }
}
Da.protocol = I4;
class $T extends Da {
  constructor() {
    super(...arguments), (this._upgrades = []);
  }
  onOpen() {
    if ((super.onOpen(), this.readyState === "open" && this.opts.upgrade))
      for (let i = 0; i < this._upgrades.length; i++)
        this._probe(this._upgrades[i]);
  }
  _probe(i) {
    let a = this.createTransport(i),
      s = !1;
    Da.priorWebsocketSuccess = !1;
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
              (Da.priorWebsocketSuccess = a.name === "websocket"),
                this.transport.pause(() => {
                  s ||
                    (this.readyState !== "closed" &&
                      (x(),
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
      s || ((s = !0), x(), a.close(), (a = null));
    }
    const f = (y) => {
      const v = new Error("probe error: " + y);
      (v.transport = a.name), c(), this.emitReserved("upgradeError", v);
    };
    function p() {
      f("transport closed");
    }
    function m() {
      f("socket closed");
    }
    function d(y) {
      a && y.name !== a.name && c();
    }
    const x = () => {
      a.removeListener("open", l),
        a.removeListener("error", f),
        a.removeListener("close", p),
        this.off("close", m),
        this.off("upgrading", d);
    };
    a.once("open", l),
      a.once("error", f),
      a.once("close", p),
      this.once("close", m),
      this.once("upgrading", d),
      this._upgrades.indexOf("webtransport") !== -1 && i !== "webtransport"
        ? this.setTimeoutFn(() => {
            s || a.open();
          }, 200)
        : a.open();
  }
  onHandshake(i) {
    (this._upgrades = this._filterUpgrades(i.upgrades)), super.onHandshake(i);
  }
  _filterUpgrades(i) {
    const a = [];
    for (let s = 0; s < i.length; s++)
      ~this.transports.indexOf(i[s]) && a.push(i[s]);
    return a;
  }
}
let JT = class extends $T {
  constructor(i, a = {}) {
    const s = typeof i == "object" ? i : a;
    (!s.transports || (s.transports && typeof s.transports[0] == "string")) &&
      (s.transports = (s.transports || ["polling", "websocket", "webtransport"])
        .map((l) => XT[l])
        .filter((l) => !!l)),
      super(i, s);
  }
};
function WT(n, i = "", a) {
  let s = n;
  (a = a || (typeof location != "undefined" && location)),
    n == null && (n = a.protocol + "//" + a.host),
    typeof n == "string" &&
      (n.charAt(0) === "/" &&
        (n.charAt(1) === "/" ? (n = a.protocol + n) : (n = a.host + n)),
      /^(https?|wss?):\/\//.test(n) ||
        (typeof a != "undefined"
          ? (n = a.protocol + "//" + n)
          : (n = "https://" + n)),
      (s = Lh(n))),
    s.port ||
      (/^(http|ws)$/.test(s.protocol)
        ? (s.port = "80")
        : /^(http|ws)s$/.test(s.protocol) && (s.port = "443")),
    (s.path = s.path || "/");
  const c = s.host.indexOf(":") !== -1 ? "[" + s.host + "]" : s.host;
  return (
    (s.id = s.protocol + "://" + c + ":" + s.port + i),
    (s.href =
      s.protocol + "://" + c + (a && a.port === s.port ? "" : ":" + s.port)),
    s
  );
}
const IT = typeof ArrayBuffer == "function",
  e7 = (n) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(n)
      : n.buffer instanceof ArrayBuffer,
  r8 = Object.prototype.toString,
  t7 =
    typeof Blob == "function" ||
    (typeof Blob != "undefined" &&
      r8.call(Blob) === "[object BlobConstructor]"),
  n7 =
    typeof File == "function" ||
    (typeof File != "undefined" &&
      r8.call(File) === "[object FileConstructor]");
function Nd(n) {
  return (
    (IT && (n instanceof ArrayBuffer || e7(n))) ||
    (t7 && n instanceof Blob) ||
    (n7 && n instanceof File)
  );
}
function Gu(n, i) {
  if (!n || typeof n != "object") return !1;
  if (Array.isArray(n)) {
    for (let a = 0, s = n.length; a < s; a++) if (Gu(n[a])) return !0;
    return !1;
  }
  if (Nd(n)) return !0;
  if (n.toJSON && typeof n.toJSON == "function" && arguments.length === 1)
    return Gu(n.toJSON(), !0);
  for (const a in n)
    if (Object.prototype.hasOwnProperty.call(n, a) && Gu(n[a])) return !0;
  return !1;
}
function i7(n) {
  const i = [],
    a = n.data,
    s = n;
  return (
    (s.data = Hh(a, i)), (s.attachments = i.length), { packet: s, buffers: i }
  );
}
function Hh(n, i) {
  if (!n) return n;
  if (Nd(n)) {
    const a = { _placeholder: !0, num: i.length };
    return i.push(n), a;
  } else if (Array.isArray(n)) {
    const a = new Array(n.length);
    for (let s = 0; s < n.length; s++) a[s] = Hh(n[s], i);
    return a;
  } else if (typeof n == "object" && !(n instanceof Date)) {
    const a = {};
    for (const s in n)
      Object.prototype.hasOwnProperty.call(n, s) && (a[s] = Hh(n[s], i));
    return a;
  }
  return n;
}
function a7(n, i) {
  return (n.data = Vh(n.data, i)), delete n.attachments, n;
}
function Vh(n, i) {
  if (!n) return n;
  if (n && n._placeholder === !0) {
    if (typeof n.num == "number" && n.num >= 0 && n.num < i.length)
      return i[n.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(n))
    for (let a = 0; a < n.length; a++) n[a] = Vh(n[a], i);
  else if (typeof n == "object")
    for (const a in n)
      Object.prototype.hasOwnProperty.call(n, a) && (n[a] = Vh(n[a], i));
  return n;
}
const r7 = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  s7 = 5;
var qe;
(function (n) {
  (n[(n.CONNECT = 0)] = "CONNECT"),
    (n[(n.DISCONNECT = 1)] = "DISCONNECT"),
    (n[(n.EVENT = 2)] = "EVENT"),
    (n[(n.ACK = 3)] = "ACK"),
    (n[(n.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (n[(n.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (n[(n.BINARY_ACK = 6)] = "BINARY_ACK");
})(qe || (qe = {}));
class o7 {
  constructor(i) {
    this.replacer = i;
  }
  encode(i) {
    return (i.type === qe.EVENT || i.type === qe.ACK) && Gu(i)
      ? this.encodeAsBinary({
          type: i.type === qe.EVENT ? qe.BINARY_EVENT : qe.BINARY_ACK,
          nsp: i.nsp,
          data: i.data,
          id: i.id,
        })
      : [this.encodeAsString(i)];
  }
  encodeAsString(i) {
    let a = "" + i.type;
    return (
      (i.type === qe.BINARY_EVENT || i.type === qe.BINARY_ACK) &&
        (a += i.attachments + "-"),
      i.nsp && i.nsp !== "/" && (a += i.nsp + ","),
      i.id != null && (a += i.id),
      i.data != null && (a += JSON.stringify(i.data, this.replacer)),
      a
    );
  }
  encodeAsBinary(i) {
    const a = i7(i),
      s = this.encodeAsString(a.packet),
      l = a.buffers;
    return l.unshift(s), l;
  }
}
function Eg(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
class Ld extends wt {
  constructor(i) {
    super(), (this.reviver = i);
  }
  add(i) {
    let a;
    if (typeof i == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      a = this.decodeString(i);
      const s = a.type === qe.BINARY_EVENT;
      s || a.type === qe.BINARY_ACK
        ? ((a.type = s ? qe.EVENT : qe.ACK),
          (this.reconstructor = new l7(a)),
          a.attachments === 0 && super.emitReserved("decoded", a))
        : super.emitReserved("decoded", a);
    } else if (Nd(i) || i.base64)
      if (this.reconstructor)
        (a = this.reconstructor.takeBinaryData(i)),
          a && ((this.reconstructor = null), super.emitReserved("decoded", a));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + i);
  }
  decodeString(i) {
    let a = 0;
    const s = { type: Number(i.charAt(0)) };
    if (qe[s.type] === void 0) throw new Error("unknown packet type " + s.type);
    if (s.type === qe.BINARY_EVENT || s.type === qe.BINARY_ACK) {
      const c = a + 1;
      for (; i.charAt(++a) !== "-" && a != i.length; );
      const f = i.substring(c, a);
      if (f != Number(f) || i.charAt(a) !== "-")
        throw new Error("Illegal attachments");
      s.attachments = Number(f);
    }
    if (i.charAt(a + 1) === "/") {
      const c = a + 1;
      for (; ++a && !(i.charAt(a) === "," || a === i.length); );
      s.nsp = i.substring(c, a);
    } else s.nsp = "/";
    const l = i.charAt(a + 1);
    if (l !== "" && Number(l) == l) {
      const c = a + 1;
      for (; ++a; ) {
        const f = i.charAt(a);
        if (f == null || Number(f) != f) {
          --a;
          break;
        }
        if (a === i.length) break;
      }
      s.id = Number(i.substring(c, a + 1));
    }
    if (i.charAt(++a)) {
      const c = this.tryParse(i.substr(a));
      if (Ld.isPayloadValid(s.type, c)) s.data = c;
      else throw new Error("invalid payload");
    }
    return s;
  }
  tryParse(i) {
    try {
      return JSON.parse(i, this.reviver);
    } catch (a) {
      return !1;
    }
  }
  static isPayloadValid(i, a) {
    switch (i) {
      case qe.CONNECT:
        return Eg(a);
      case qe.DISCONNECT:
        return a === void 0;
      case qe.CONNECT_ERROR:
        return typeof a == "string" || Eg(a);
      case qe.EVENT:
      case qe.BINARY_EVENT:
        return (
          Array.isArray(a) &&
          (typeof a[0] == "number" ||
            (typeof a[0] == "string" && r7.indexOf(a[0]) === -1))
        );
      case qe.ACK:
      case qe.BINARY_ACK:
        return Array.isArray(a);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class l7 {
  constructor(i) {
    (this.packet = i), (this.buffers = []), (this.reconPack = i);
  }
  takeBinaryData(i) {
    if (
      (this.buffers.push(i), this.buffers.length === this.reconPack.attachments)
    ) {
      const a = a7(this.reconPack, this.buffers);
      return this.finishedReconstruction(), a;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const u7 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: Ld,
      Encoder: o7,
      get PacketType() {
        return qe;
      },
      protocol: s7,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function ii(n, i, a) {
  return (
    n.on(i, a),
    function () {
      n.off(i, a);
    }
  );
}
const c7 = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class s8 extends wt {
  constructor(i, a, s) {
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
      (this.io = i),
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
    const i = this.io;
    this.subs = [
      ii(i, "open", this.onopen.bind(this)),
      ii(i, "packet", this.onpacket.bind(this)),
      ii(i, "error", this.onerror.bind(this)),
      ii(i, "close", this.onclose.bind(this)),
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
  send(...i) {
    return i.unshift("message"), this.emit.apply(this, i), this;
  }
  emit(i, ...a) {
    var s, l, c;
    if (c7.hasOwnProperty(i))
      throw new Error('"' + i.toString() + '" is a reserved event name');
    if (
      (a.unshift(i),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(a), this;
    const f = { type: qe.EVENT, data: a };
    if (
      ((f.options = {}),
      (f.options.compress = this.flags.compress !== !1),
      typeof a[a.length - 1] == "function")
    ) {
      const x = this.ids++,
        y = a.pop();
      this._registerAckCallback(x, y), (f.id = x);
    }
    const p =
        (l =
          (s = this.io.engine) === null || s === void 0
            ? void 0
            : s.transport) === null || l === void 0
          ? void 0
          : l.writable,
      m =
        this.connected &&
        !(
          !((c = this.io.engine) === null || c === void 0) &&
          c._hasPingExpired()
        );
    return (
      (this.flags.volatile && !p) ||
        (m
          ? (this.notifyOutgoingListeners(f), this.packet(f))
          : this.sendBuffer.push(f)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(i, a) {
    var s;
    const l =
      (s = this.flags.timeout) !== null && s !== void 0
        ? s
        : this._opts.ackTimeout;
    if (l === void 0) {
      this.acks[i] = a;
      return;
    }
    const c = this.io.setTimeoutFn(() => {
        delete this.acks[i];
        for (let p = 0; p < this.sendBuffer.length; p++)
          this.sendBuffer[p].id === i && this.sendBuffer.splice(p, 1);
        a.call(this, new Error("operation has timed out"));
      }, l),
      f = (...p) => {
        this.io.clearTimeoutFn(c), a.apply(this, p);
      };
    (f.withError = !0), (this.acks[i] = f);
  }
  emitWithAck(i, ...a) {
    return new Promise((s, l) => {
      const c = (f, p) => (f ? l(f) : s(p));
      (c.withError = !0), a.push(c), this.emit(i, ...a);
    });
  }
  _addToQueue(i) {
    let a;
    typeof i[i.length - 1] == "function" && (a = i.pop());
    const s = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: i,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    i.push((l, ...c) =>
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
  _drainQueue(i = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const a = this._queue[0];
    (a.pending && !i) ||
      ((a.pending = !0),
      a.tryCount++,
      (this.flags = a.flags),
      this.emit.apply(this, a.args));
  }
  packet(i) {
    (i.nsp = this.nsp), this.io._packet(i);
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((i) => {
          this._sendConnectPacket(i);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(i) {
    this.packet({
      type: qe.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, i)
        : i,
    });
  }
  onerror(i) {
    this.connected || this.emitReserved("connect_error", i);
  }
  onclose(i, a) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", i, a),
      this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((i) => {
      if (!this.sendBuffer.some((s) => String(s.id) === i)) {
        const s = this.acks[i];
        delete this.acks[i],
          s.withError &&
            s.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  onpacket(i) {
    if (i.nsp === this.nsp)
      switch (i.type) {
        case qe.CONNECT:
          i.data && i.data.sid
            ? this.onconnect(i.data.sid, i.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)",
                ),
              );
          break;
        case qe.EVENT:
        case qe.BINARY_EVENT:
          this.onevent(i);
          break;
        case qe.ACK:
        case qe.BINARY_ACK:
          this.onack(i);
          break;
        case qe.DISCONNECT:
          this.ondisconnect();
          break;
        case qe.CONNECT_ERROR:
          this.destroy();
          const s = new Error(i.data.message);
          (s.data = i.data.data), this.emitReserved("connect_error", s);
          break;
      }
  }
  onevent(i) {
    const a = i.data || [];
    i.id != null && a.push(this.ack(i.id)),
      this.connected
        ? this.emitEvent(a)
        : this.receiveBuffer.push(Object.freeze(a));
  }
  emitEvent(i) {
    if (this._anyListeners && this._anyListeners.length) {
      const a = this._anyListeners.slice();
      for (const s of a) s.apply(this, i);
    }
    super.emit.apply(this, i),
      this._pid &&
        i.length &&
        typeof i[i.length - 1] == "string" &&
        (this._lastOffset = i[i.length - 1]);
  }
  ack(i) {
    const a = this;
    let s = !1;
    return function (...l) {
      s || ((s = !0), a.packet({ type: qe.ACK, id: i, data: l }));
    };
  }
  onack(i) {
    const a = this.acks[i.id];
    typeof a == "function" &&
      (delete this.acks[i.id],
      a.withError && i.data.unshift(null),
      a.apply(this, i.data));
  }
  onconnect(i, a) {
    (this.id = i),
      (this.recovered = a && this._pid === a),
      (this._pid = a),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved("connect"),
      this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((i) => this.emitEvent(i)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((i) => {
        this.notifyOutgoingListeners(i), this.packet(i);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((i) => i()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: qe.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(i) {
    return (this.flags.compress = i), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(i) {
    return (this.flags.timeout = i), this;
  }
  onAny(i) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(i),
      this
    );
  }
  prependAny(i) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(i),
      this
    );
  }
  offAny(i) {
    if (!this._anyListeners) return this;
    if (i) {
      const a = this._anyListeners;
      for (let s = 0; s < a.length; s++)
        if (i === a[s]) return a.splice(s, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(i) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(i),
      this
    );
  }
  prependAnyOutgoing(i) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(i),
      this
    );
  }
  offAnyOutgoing(i) {
    if (!this._anyOutgoingListeners) return this;
    if (i) {
      const a = this._anyOutgoingListeners;
      for (let s = 0; s < a.length; s++)
        if (i === a[s]) return a.splice(s, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(i) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const a = this._anyOutgoingListeners.slice();
      for (const s of a) s.apply(this, i.data);
    }
  }
}
function us(n) {
  (n = n || {}),
    (this.ms = n.min || 100),
    (this.max = n.max || 1e4),
    (this.factor = n.factor || 2),
    (this.jitter = n.jitter > 0 && n.jitter <= 1 ? n.jitter : 0),
    (this.attempts = 0);
}
us.prototype.duration = function () {
  var n = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var i = Math.random(),
      a = Math.floor(i * this.jitter * n);
    n = (Math.floor(i * 10) & 1) == 0 ? n - a : n + a;
  }
  return Math.min(n, this.max) | 0;
};
us.prototype.reset = function () {
  this.attempts = 0;
};
us.prototype.setMin = function (n) {
  this.ms = n;
};
us.prototype.setMax = function (n) {
  this.max = n;
};
us.prototype.setJitter = function (n) {
  this.jitter = n;
};
class kh extends wt {
  constructor(i, a) {
    var s;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      i && typeof i == "object" && ((a = i), (i = void 0)),
      (a = a || {}),
      (a.path = a.path || "/socket.io"),
      (this.opts = a),
      vc(this, a),
      this.reconnection(a.reconnection !== !1),
      this.reconnectionAttempts(a.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(a.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(a.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (s = a.randomizationFactor) !== null && s !== void 0 ? s : 0.5,
      ),
      (this.backoff = new us({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(a.timeout == null ? 2e4 : a.timeout),
      (this._readyState = "closed"),
      (this.uri = i);
    const l = a.parser || u7;
    (this.encoder = new l.Encoder()),
      (this.decoder = new l.Decoder()),
      (this._autoConnect = a.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(i) {
    return arguments.length
      ? ((this._reconnection = !!i), i || (this.skipReconnect = !0), this)
      : this._reconnection;
  }
  reconnectionAttempts(i) {
    return i === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = i), this);
  }
  reconnectionDelay(i) {
    var a;
    return i === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = i),
        (a = this.backoff) === null || a === void 0 || a.setMin(i),
        this);
  }
  randomizationFactor(i) {
    var a;
    return i === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = i),
        (a = this.backoff) === null || a === void 0 || a.setJitter(i),
        this);
  }
  reconnectionDelayMax(i) {
    var a;
    return i === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = i),
        (a = this.backoff) === null || a === void 0 || a.setMax(i),
        this);
  }
  timeout(i) {
    return arguments.length ? ((this._timeout = i), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(i) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new JT(this.uri, this.opts);
    const a = this.engine,
      s = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const l = ii(a, "open", function () {
        s.onopen(), i && i();
      }),
      c = (p) => {
        this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", p),
          i ? i(p) : this.maybeReconnectOnOpen();
      },
      f = ii(a, "error", c);
    if (this._timeout !== !1) {
      const p = this._timeout,
        m = this.setTimeoutFn(() => {
          l(), c(new Error("timeout")), a.close();
        }, p);
      this.opts.autoUnref && m.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(m);
        });
    }
    return this.subs.push(l), this.subs.push(f), this;
  }
  connect(i) {
    return this.open(i);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const i = this.engine;
    this.subs.push(
      ii(i, "ping", this.onping.bind(this)),
      ii(i, "data", this.ondata.bind(this)),
      ii(i, "error", this.onerror.bind(this)),
      ii(i, "close", this.onclose.bind(this)),
      ii(this.decoder, "decoded", this.ondecoded.bind(this)),
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(i) {
    try {
      this.decoder.add(i);
    } catch (a) {
      this.onclose("parse error", a);
    }
  }
  ondecoded(i) {
    yc(() => {
      this.emitReserved("packet", i);
    }, this.setTimeoutFn);
  }
  onerror(i) {
    this.emitReserved("error", i);
  }
  socket(i, a) {
    let s = this.nsps[i];
    return (
      s
        ? this._autoConnect && !s.active && s.connect()
        : ((s = new s8(this, i, a)), (this.nsps[i] = s)),
      s
    );
  }
  _destroy(i) {
    const a = Object.keys(this.nsps);
    for (const s of a) if (this.nsps[s].active) return;
    this._close();
  }
  _packet(i) {
    const a = this.encoder.encode(i);
    for (let s = 0; s < a.length; s++) this.engine.write(a[s], i.options);
  }
  cleanup() {
    this.subs.forEach((i) => i()),
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
  onclose(i, a) {
    var s;
    this.cleanup(),
      (s = this.engine) === null || s === void 0 || s.close(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", i, a),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const i = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1);
    else {
      const a = this.backoff.duration();
      this._reconnecting = !0;
      const s = this.setTimeoutFn(() => {
        i.skipReconnect ||
          (this.emitReserved("reconnect_attempt", i.backoff.attempts),
          !i.skipReconnect &&
            i.open((l) => {
              l
                ? ((i._reconnecting = !1),
                  i.reconnect(),
                  this.emitReserved("reconnect_error", l))
                : i.onreconnect();
            }));
      }, a);
      this.opts.autoUnref && s.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(s);
        });
    }
  }
  onreconnect() {
    const i = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", i);
  }
}
const so = {};
function sh(n, i) {
  typeof n == "object" && ((i = n), (n = void 0)), (i = i || {});
  const a = WT(n, i.path || "/socket.io"),
    s = a.source,
    l = a.id,
    c = a.path,
    f = so[l] && c in so[l].nsps,
    p = i.forceNew || i["force new connection"] || i.multiplex === !1 || f;
  let m;
  return (
    p ? (m = new kh(s, i)) : (so[l] || (so[l] = new kh(s, i)), (m = so[l])),
    a.query && !i.query && (i.query = a.queryKey),
    m.socket(a.path, i)
  );
}
Object.assign(sh, { Manager: kh, Socket: s8, io: sh, connect: sh });
export {
  sh as $,
  u9 as A,
  b7 as B,
  S7 as C,
  F7 as D,
  T7 as E,
  L7 as F,
  E7 as G,
  U7 as H,
  V7 as I,
  W7 as J,
  O7 as K,
  k7 as L,
  j7 as M,
  Z7 as N,
  R7 as O,
  P7 as P,
  w7 as Q,
  h7 as R,
  J7 as S,
  D7 as T,
  i9 as U,
  B7 as V,
  z7 as W,
  s9 as X,
  G7 as Y,
  o9 as Z,
  p7 as _,
  Ab as a,
  C7 as a0,
  a9 as a1,
  I7 as a2,
  r9 as a3,
  x7 as b,
  m7 as c,
  l9 as d,
  Mt as e,
  n9 as f,
  A7 as g,
  N7 as h,
  Q7 as i,
  Xi as j,
  t9 as k,
  g7 as l,
  f9 as m,
  H7 as n,
  K7 as o,
  Y7 as p,
  X7 as q,
  J as r,
  _7 as s,
  y7 as t,
  d7 as u,
  $7 as v,
  M7 as w,
  e9 as x,
  q7 as y,
  v7 as z,
};
