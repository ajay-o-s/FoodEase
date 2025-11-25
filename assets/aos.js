var pf = Object.defineProperty,
  xf = Object.defineProperties;
var mf = Object.getOwnPropertyDescriptors;
var gn = Object.getOwnPropertySymbols;
var ta = Object.prototype.hasOwnProperty,
  ra = Object.prototype.propertyIsEnumerable;
var or = (e, t) => ((t = Symbol[e]) ? t : Symbol.for("Symbol." + e)),
  yf = (e) => {
    throw TypeError(e);
  };
var ea = (e, t, r) =>
    t in e
      ? pf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  j = (e, t) => {
    for (var r in t || (t = {})) ta.call(t, r) && ea(e, r, t[r]);
    if (gn) for (var r of gn(t)) ra.call(t, r) && ea(e, r, t[r]);
    return e;
  },
  oe = (e, t) => xf(e, mf(t));
var Xe = (e, t) => {
  var r = {};
  for (var n in e) ta.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && gn)
    for (var n of gn(e)) t.indexOf(n) < 0 && ra.call(e, n) && (r[n] = e[n]);
  return r;
};
var Lt = function (e, t) {
    (this[0] = e), (this[1] = t);
  },
  Ki = (e, t, r) => {
    var n = (o, a, l, c) => {
        try {
          var u = r[o](a),
            h = (a = u.value) instanceof Lt,
            f = u.done;
          Promise.resolve(h ? a[0] : a)
            .then((d) =>
              h
                ? n(
                    o === "return" ? o : "next",
                    a[1] ? { done: d.done, value: d.value } : d,
                    l,
                    c,
                  )
                : l({ value: d, done: f }),
            )
            .catch((d) => n("throw", d, l, c));
        } catch (d) {
          c(d);
        }
      },
      i = (o) => (s[o] = (a) => new Promise((l, c) => n(o, a, l, c))),
      s = {};
    return (
      (r = r.apply(e, t)),
      (s[or("asyncIterator")] = () => s),
      i("next"),
      i("throw"),
      i("return"),
      s
    );
  },
  Xi = (e) => {
    var t = e[or("asyncIterator")],
      r = !1,
      n,
      i = {};
    return (
      t == null
        ? ((t = e[or("iterator")]()), (n = (s) => (i[s] = (o) => t[s](o))))
        : ((t = t.call(e)),
          (n = (s) =>
            (i[s] = (o) => {
              if (r) {
                if (((r = !1), s === "throw")) throw o;
                return o;
              }
              return (
                (r = !0),
                {
                  done: !1,
                  value: new Lt(
                    new Promise((a) => {
                      var l = t[s](o);
                      l instanceof Object || yf("Object expected"), a(l);
                    }),
                    1,
                  ),
                }
              );
            }))),
      (i[or("iterator")] = () => i),
      n("next"),
      "throw" in t
        ? n("throw")
        : (i.throw = (s) => {
            throw s;
          }),
      "return" in t && n("return"),
      i
    );
  },
  na = (e, t, r) =>
    (t = e[or("asyncIterator")])
      ? t.call(e)
      : ((e = e[or("iterator")]()),
        (t = {}),
        (r = (n, i) =>
          (i = e[n]) &&
          (t[n] = (s) =>
            new Promise(
              (o, a, l) => (
                (s = i.call(e, s)),
                (l = s.done),
                Promise.resolve(s.value).then(
                  (c) => o({ value: c, done: l }),
                  a,
                )
              ),
            ))),
        r("next"),
        r("return"),
        t);
import { r as Y, j as mt } from "./aos_vendor.js";
var Gi =
  typeof globalThis != "undefined"
    ? globalThis
    : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
        ? global
        : typeof self != "undefined"
          ? self
          : {};
function gf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function vf(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return (
    Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (n) {
      var i = Object.getOwnPropertyDescriptor(e, n);
      Object.defineProperty(
        r,
        n,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            },
      );
    }),
    r
  );
}
var Yi = { exports: {} },
  Zi = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ia;
function Ef() {
  return (
    ia ||
      ((ia = 1),
      (function (e) {
        function t(O, H) {
          var N = O.length;
          O.push(H);
          e: for (; 0 < N; ) {
            var W = (N - 1) >>> 1,
              X = O[W];
            if (0 < i(X, H)) (O[W] = H), (O[N] = X), (N = W);
            else break e;
          }
        }
        function r(O) {
          return O.length === 0 ? null : O[0];
        }
        function n(O) {
          if (O.length === 0) return null;
          var H = O[0],
            N = O.pop();
          if (N !== H) {
            O[0] = N;
            e: for (var W = 0, X = O.length, R = X >>> 1; W < R; ) {
              var V = 2 * (W + 1) - 1,
                I = O[V],
                M = V + 1,
                re = O[M];
              if (0 > i(I, N))
                M < X && 0 > i(re, I)
                  ? ((O[W] = re), (O[M] = N), (W = M))
                  : ((O[W] = I), (O[V] = N), (W = V));
              else if (M < X && 0 > i(re, N)) (O[W] = re), (O[M] = N), (W = M);
              else break e;
            }
          }
          return H;
        }
        function i(O, H) {
          var N = O.sortIndex - H.sortIndex;
          return N !== 0 ? N : O.id - H.id;
        }
        if (
          ((e.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var s = performance;
          e.unstable_now = function () {
            return s.now();
          };
        } else {
          var o = Date,
            a = o.now();
          e.unstable_now = function () {
            return o.now() - a;
          };
        }
        var l = [],
          c = [],
          u = 1,
          h = null,
          f = 3,
          d = !1,
          p = !1,
          m = !1,
          x = typeof setTimeout == "function" ? setTimeout : null,
          b = typeof clearTimeout == "function" ? clearTimeout : null,
          y = typeof setImmediate != "undefined" ? setImmediate : null;
        function g(O) {
          for (var H = r(c); H !== null; ) {
            if (H.callback === null) n(c);
            else if (H.startTime <= O)
              n(c), (H.sortIndex = H.expirationTime), t(l, H);
            else break;
            H = r(c);
          }
        }
        function E(O) {
          if (((m = !1), g(O), !p))
            if (r(l) !== null) (p = !0), z();
            else {
              var H = r(c);
              H !== null && $(E, H.startTime - O);
            }
        }
        var C = !1,
          B = -1,
          v = 5,
          D = -1;
        function P() {
          return !(e.unstable_now() - D < v);
        }
        function A() {
          if (C) {
            var O = e.unstable_now();
            D = O;
            var H = !0;
            try {
              e: {
                (p = !1), m && ((m = !1), b(B), (B = -1)), (d = !0);
                var N = f;
                try {
                  t: {
                    for (
                      g(O), h = r(l);
                      h !== null && !(h.expirationTime > O && P());

                    ) {
                      var W = h.callback;
                      if (typeof W == "function") {
                        (h.callback = null), (f = h.priorityLevel);
                        var X = W(h.expirationTime <= O);
                        if (((O = e.unstable_now()), typeof X == "function")) {
                          (h.callback = X), g(O), (H = !0);
                          break t;
                        }
                        h === r(l) && n(l), g(O);
                      } else n(l);
                      h = r(l);
                    }
                    if (h !== null) H = !0;
                    else {
                      var R = r(c);
                      R !== null && $(E, R.startTime - O), (H = !1);
                    }
                  }
                  break e;
                } finally {
                  (h = null), (f = N), (d = !1);
                }
                H = void 0;
              }
            } finally {
              H ? S() : (C = !1);
            }
          }
        }
        var S;
        if (typeof y == "function")
          S = function () {
            y(A);
          };
        else if (typeof MessageChannel != "undefined") {
          var k = new MessageChannel(),
            L = k.port2;
          (k.port1.onmessage = A),
            (S = function () {
              L.postMessage(null);
            });
        } else
          S = function () {
            x(A, 0);
          };
        function z() {
          C || ((C = !0), S());
        }
        function $(O, H) {
          B = x(function () {
            O(e.unstable_now());
          }, H);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            p || d || ((p = !0), z());
          }),
          (e.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (v = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return f;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return r(l);
          }),
          (e.unstable_next = function (O) {
            switch (f) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = f;
            }
            var N = f;
            f = H;
            try {
              return O();
            } finally {
              f = N;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (O, H) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var N = f;
            f = O;
            try {
              return H();
            } finally {
              f = N;
            }
          }),
          (e.unstable_scheduleCallback = function (O, H, N) {
            var W = e.unstable_now();
            switch (
              (typeof N == "object" && N !== null
                ? ((N = N.delay),
                  (N = typeof N == "number" && 0 < N ? W + N : W))
                : (N = W),
              O)
            ) {
              case 1:
                var X = -1;
                break;
              case 2:
                X = 250;
                break;
              case 5:
                X = 1073741823;
                break;
              case 4:
                X = 1e4;
                break;
              default:
                X = 5e3;
            }
            return (
              (X = N + X),
              (O = {
                id: u++,
                callback: H,
                priorityLevel: O,
                startTime: N,
                expirationTime: X,
                sortIndex: -1,
              }),
              N > W
                ? ((O.sortIndex = N),
                  t(c, O),
                  r(l) === null &&
                    O === r(c) &&
                    (m ? (b(B), (B = -1)) : (m = !0), $(E, N - W)))
                : ((O.sortIndex = X), t(l, O), p || d || ((p = !0), z())),
              O
            );
          }),
          (e.unstable_shouldYield = P),
          (e.unstable_wrapCallback = function (O) {
            var H = f;
            return function () {
              var N = f;
              f = H;
              try {
                return O.apply(this, arguments);
              } finally {
                f = N;
              }
            };
          });
      })(Zi)),
    Zi
  );
}
var sa;
function Ov() {
  return sa || ((sa = 1), (Yi.exports = Ef())), Yi.exports;
}
/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function me() {
  return (
    (me = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    me.apply(this, arguments)
  );
}
var _e;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(_e || (_e = {}));
const oa = "popstate";
function Mv(e) {
  e === void 0 && (e = {});
  function t(n, i) {
    let { pathname: s, search: o, hash: a } = n.location;
    return Yr(
      "",
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default",
    );
  }
  function r(n, i) {
    return typeof i == "string" ? i : nn(i);
  }
  return Cf(t, r, null, e);
}
function xe(e, t) {
  if (e === !1 || e === null || typeof e == "undefined") throw new Error(t);
}
function $t(e, t) {
  if (!e) {
    typeof console != "undefined" && console.warn(t);
    try {
      throw new Error(t);
    } catch (r) {}
  }
}
function bf() {
  return Math.random().toString(36).substr(2, 8);
}
function aa(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Yr(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    me(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Kt(t) : t,
      { state: r, key: (t && t.key) || n || bf() },
    )
  );
}
function nn(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
  );
}
function Kt(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function Cf(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = n,
    o = i.history,
    a = _e.Pop,
    l = null,
    c = u();
  c == null && ((c = 0), o.replaceState(me({}, o.state, { idx: c }), ""));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    a = _e.Pop;
    let x = u(),
      b = x == null ? null : x - c;
    (c = x), l && l({ action: a, location: m.location, delta: b });
  }
  function f(x, b) {
    a = _e.Push;
    let y = Yr(m.location, x, b);
    c = u() + 1;
    let g = aa(y, c),
      E = m.createHref(y);
    try {
      o.pushState(g, "", E);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      i.location.assign(E);
    }
    s && l && l({ action: a, location: m.location, delta: 1 });
  }
  function d(x, b) {
    a = _e.Replace;
    let y = Yr(m.location, x, b);
    c = u();
    let g = aa(y, c),
      E = m.createHref(y);
    o.replaceState(g, "", E),
      s && l && l({ action: a, location: m.location, delta: 0 });
  }
  function p(x) {
    let b = i.location.origin !== "null" ? i.location.origin : i.location.href,
      y = typeof x == "string" ? x : nn(x);
    return (
      (y = y.replace(/ $/, "%20")),
      xe(
        b,
        "No window.location.(origin|href) available to create URL for href: " +
          y,
      ),
      new URL(y, b)
    );
  }
  let m = {
    get action() {
      return a;
    },
    get location() {
      return e(i, o);
    },
    listen(x) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(oa, h),
        (l = x),
        () => {
          i.removeEventListener(oa, h), (l = null);
        }
      );
    },
    createHref(x) {
      return t(i, x);
    },
    createURL: p,
    encodeLocation(x) {
      let b = p(x);
      return { pathname: b.pathname, search: b.search, hash: b.hash };
    },
    push: f,
    replace: d,
    go(x) {
      return o.go(x);
    },
  };
  return m;
}
var de;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(de || (de = {}));
const Af = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Bf(e) {
  return e.index === !0;
}
function bi(e, t, r, n) {
  return (
    r === void 0 && (r = []),
    n === void 0 && (n = {}),
    e.map((i, s) => {
      let o = [...r, String(s)],
        a = typeof i.id == "string" ? i.id : o.join("-");
      if (
        (xe(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route",
        ),
        xe(
          !n[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        Bf(i))
      ) {
        let l = me({}, i, t(i), { id: a });
        return (n[a] = l), l;
      } else {
        let l = me({}, i, t(i), { id: a, children: void 0 });
        return (
          (n[a] = l), i.children && (l.children = bi(i.children, t, o, n)), l
        );
      }
    })
  );
}
function cr(e, t, r) {
  return r === void 0 && (r = "/"), Fn(e, t, r, !1);
}
function Fn(e, t, r, n) {
  let i = typeof t == "string" ? Kt(t) : t,
    s = _i(i.pathname || "/", r);
  if (s == null) return null;
  let o = Uc(e);
  Df(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) {
    let c = Vf(s);
    a = Of(o[l], c, n);
  }
  return a;
}
function wf(e, t) {
  let { route: r, pathname: n, params: i } = e;
  return { id: r.id, pathname: n, params: i, data: t[r.id], handle: r.handle };
}
function Uc(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (xe(
        l.relativePath.startsWith(n),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(n.length)));
    let c = qr([n, l.relativePath]),
      u = r.concat(l);
    s.children &&
      s.children.length > 0 &&
      (xe(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".'),
      ),
      Uc(s.children, t, u, c)),
      !(s.path == null && !s.index) &&
        t.push({ path: c, score: kf(c, s.index), routesMeta: u });
  };
  return (
    e.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let l of Hc(s.path)) i(s, o, l);
    }),
    t
  );
}
function Hc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    i = r.endsWith("?"),
    s = r.replace(/\?$/, "");
  if (n.length === 0) return i ? [s, ""] : [s];
  let o = Hc(n.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    i && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function Df(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Lf(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex),
        ),
  );
}
const Ff = /^:[\w-]+$/,
  Sf = 3,
  _f = 2,
  Tf = 1,
  Rf = 10,
  Pf = -2,
  ca = (e) => e === "*";
function kf(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(ca) && (n += Pf),
    t && (n += _f),
    r
      .filter((i) => !ca(i))
      .reduce((i, s) => i + (Ff.test(s) ? Sf : s === "" ? Tf : Rf), n)
  );
}
function Lf(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, i) => n === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Of(e, t, r) {
  r === void 0 && (r = !1);
  let { routesMeta: n } = e,
    i = {},
    s = "/",
    o = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      c = a === n.length - 1,
      u = s === "/" ? t : t.slice(s.length) || "/",
      h = la(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
        u,
      ),
      f = l.route;
    if (
      (!h &&
        c &&
        r &&
        !n[n.length - 1].route.index &&
        (h = la(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          u,
        )),
      !h)
    )
      return null;
    Object.assign(i, h.params),
      o.push({
        params: i,
        pathname: qr([s, h.pathname]),
        pathnameBase: zf(qr([s, h.pathnameBase])),
        route: f,
      }),
      h.pathnameBase !== "/" && (s = qr([s, h.pathnameBase]));
  }
  return o;
}
function la(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = Mf(e.path, e.caseSensitive, e.end),
    i = t.match(r);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: n.reduce((c, u, h) => {
      let { paramName: f, isOptional: d } = u;
      if (f === "*") {
        let m = a[h] || "";
        o = s.slice(0, s.length - m.length).replace(/(.)\/+$/, "$1");
      }
      const p = a[h];
      return (
        d && !p ? (c[f] = void 0) : (c[f] = (p || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function Mf(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    $t(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let n = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            n.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (n.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
        ? (i += "\\/*$")
        : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), n]
  );
}
function Vf(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      $t(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function _i(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
const Nf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  If = (e) => Nf.test(e);
function Uf(e, t) {
  t === void 0 && (t = "/");
  let {
      pathname: r,
      search: n = "",
      hash: i = "",
    } = typeof e == "string" ? Kt(e) : e,
    s;
  if (r)
    if (If(r)) s = r;
    else {
      if (r.includes("//")) {
        let o = r;
        (r = r.replace(/\/\/+/g, "/")),
          $t(
            !1,
            "Pathnames cannot have embedded double slashes - normalizing " +
              (o + " -> " + r),
          );
      }
      r.startsWith("/") ? (s = ua(r.substring(1), "/")) : (s = ua(r, t));
    }
  else s = t;
  return { pathname: s, search: qf(n), hash: $f(i) };
}
function ua(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? r.length > 1 && r.pop() : i !== "." && r.push(i);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Qi(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(n) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function jc(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Hf(e, t) {
  let r = jc(e);
  return t
    ? r.map((n, i) => (i === r.length - 1 ? n.pathname : n.pathnameBase))
    : r.map((n) => n.pathnameBase);
}
function jf(e, t, r, n) {
  n === void 0 && (n = !1);
  let i;
  typeof e == "string"
    ? (i = Kt(e))
    : ((i = me({}, e)),
      xe(
        !i.pathname || !i.pathname.includes("?"),
        Qi("?", "pathname", "search", i),
      ),
      xe(
        !i.pathname || !i.pathname.includes("#"),
        Qi("#", "pathname", "hash", i),
      ),
      xe(!i.search || !i.search.includes("#"), Qi("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    a;
  if (o == null) a = r;
  else {
    let h = t.length - 1;
    if (!n && o.startsWith("..")) {
      let f = o.split("/");
      for (; f[0] === ".."; ) f.shift(), (h -= 1);
      i.pathname = f.join("/");
    }
    a = h >= 0 ? t[h] : "/";
  }
  let l = Uf(i, a),
    c = o && o !== "/" && o.endsWith("/"),
    u = (s || o === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (c || u) && (l.pathname += "/"), l;
}
const qr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  zf = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  qf = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  $f = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class As {
  constructor(t, r, n, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = r || ""),
      (this.internal = i),
      n instanceof Error
        ? ((this.data = n.toString()), (this.error = n))
        : (this.data = n);
  }
}
function Ci(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const zc = ["post", "put", "patch", "delete"],
  Wf = new Set(zc),
  Kf = ["get", ...zc],
  Xf = new Set(Kf),
  Gf = new Set([301, 302, 303, 307, 308]),
  Yf = new Set([307, 308]),
  Ji = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Zf = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Mr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  io = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Qf = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  qc = "remix-router-transitions";
function Vv(e) {
  const t = e.window
      ? e.window
      : typeof window != "undefined"
        ? window
        : void 0,
    r =
      typeof t != "undefined" &&
      typeof t.document != "undefined" &&
      typeof t.document.createElement != "undefined",
    n = !r;
  xe(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let w = e.detectErrorBoundary;
    i = (F) => ({ hasErrorBoundary: w(F) });
  } else i = Qf;
  let s = {},
    o = bi(e.routes, i, void 0, s),
    a,
    l = e.basename || "/",
    c = e.dataStrategy || rh,
    u = e.patchRoutesOnNavigation,
    h = me(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future,
    ),
    f = null,
    d = new Set(),
    p = null,
    m = null,
    x = null,
    b = e.hydrationData != null,
    y = cr(o, e.history.location, l),
    g = !1,
    E = null;
  if (y == null && !u) {
    let w = Ie(404, { pathname: e.history.location.pathname }),
      { matches: F, route: _ } = ba(o);
    (y = F), (E = { [_.id]: w });
  }
  y &&
    !e.hydrationData &&
    tr(y, o, e.history.location.pathname).active &&
    (y = null);
  let C;
  if (y)
    if (y.some((w) => w.route.lazy)) C = !1;
    else if (!y.some((w) => w.route.loader)) C = !0;
    else if (h.v7_partialHydration) {
      let w = e.hydrationData ? e.hydrationData.loaderData : null,
        F = e.hydrationData ? e.hydrationData.errors : null;
      if (F) {
        let _ = y.findIndex((U) => F[U.route.id] !== void 0);
        C = y.slice(0, _ + 1).every((U) => !ws(U.route, w, F));
      } else C = y.every((_) => !ws(_.route, w, F));
    } else C = e.hydrationData != null;
  else if (((C = !1), (y = []), h.v7_partialHydration)) {
    let w = tr(null, o, e.history.location.pathname);
    w.active && w.matches && ((g = !0), (y = w.matches));
  }
  let B,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: y,
      initialized: C,
      navigation: Ji,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || E,
      fetchers: new Map(),
      blockers: new Map(),
    },
    D = _e.Pop,
    P = !1,
    A,
    S = !1,
    k = new Map(),
    L = null,
    z = !1,
    $ = !1,
    O = [],
    H = new Set(),
    N = new Map(),
    W = 0,
    X = -1,
    R = new Map(),
    V = new Set(),
    I = new Map(),
    M = new Map(),
    re = new Set(),
    le = new Map(),
    ve = new Map(),
    ne;
  function _t() {
    if (
      ((f = e.history.listen((w) => {
        let { action: F, location: _, delta: U } = w;
        if (ne) {
          ne(), (ne = void 0);
          return;
        }
        $t(
          ve.size === 0 || U != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let q = Tr({
          currentLocation: v.location,
          nextLocation: _,
          historyAction: F,
        });
        if (q && U != null) {
          let J = new Promise((te) => {
            ne = te;
          });
          e.history.go(U * -1),
            Jt(q, {
              state: "blocked",
              location: _,
              proceed() {
                Jt(q, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: _,
                }),
                  J.then(() => e.history.go(U));
              },
              reset() {
                let te = new Map(v.blockers);
                te.set(q, Mr), Ae({ blockers: te });
              },
            });
          return;
        }
        return ze(F, _);
      })),
      r)
    ) {
      mh(t, k);
      let w = () => yh(t, k);
      t.addEventListener("pagehide", w),
        (L = () => t.removeEventListener("pagehide", w));
    }
    return v.initialized || ze(_e.Pop, v.location, { initialHydration: !0 }), B;
  }
  function vt() {
    f && f(),
      L && L(),
      d.clear(),
      A && A.abort(),
      v.fetchers.forEach((w, F) => et(F)),
      v.blockers.forEach((w, F) => _r(F));
  }
  function wr(w) {
    return d.add(w), () => d.delete(w);
  }
  function Ae(w, F) {
    F === void 0 && (F = {}), (v = me({}, v, w));
    let _ = [],
      U = [];
    h.v7_fetcherPersist &&
      v.fetchers.forEach((q, J) => {
        q.state === "idle" && (re.has(J) ? U.push(J) : _.push(J));
      }),
      re.forEach((q) => {
        !v.fetchers.has(q) && !N.has(q) && U.push(q);
      }),
      [...d].forEach((q) =>
        q(v, {
          deletedFetchers: U,
          viewTransitionOpts: F.viewTransitionOpts,
          flushSync: F.flushSync === !0,
        }),
      ),
      h.v7_fetcherPersist
        ? (_.forEach((q) => v.fetchers.delete(q)), U.forEach((q) => et(q)))
        : U.forEach((q) => re.delete(q));
  }
  function Te(w, F, _) {
    var U, q;
    let { flushSync: J } = _ === void 0 ? {} : _,
      te =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        rt(v.navigation.formMethod) &&
        v.navigation.state === "loading" &&
        ((U = w.state) == null ? void 0 : U._isRedirect) !== !0,
      G;
    F.actionData
      ? Object.keys(F.actionData).length > 0
        ? (G = F.actionData)
        : (G = null)
      : te
        ? (G = v.actionData)
        : (G = null);
    let Z = F.loaderData
        ? va(v.loaderData, F.loaderData, F.matches || [], F.errors)
        : v.loaderData,
      K = v.blockers;
    K.size > 0 && ((K = new Map(K)), K.forEach((ue, Pe) => K.set(Pe, Mr)));
    let Q =
      P === !0 ||
      (v.navigation.formMethod != null &&
        rt(v.navigation.formMethod) &&
        ((q = w.state) == null ? void 0 : q._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      z ||
        D === _e.Pop ||
        (D === _e.Push
          ? e.history.push(w, w.state)
          : D === _e.Replace && e.history.replace(w, w.state));
    let se;
    if (D === _e.Pop) {
      let ue = k.get(v.location.pathname);
      ue && ue.has(w.pathname)
        ? (se = { currentLocation: v.location, nextLocation: w })
        : k.has(w.pathname) &&
          (se = { currentLocation: w, nextLocation: v.location });
    } else if (S) {
      let ue = k.get(v.location.pathname);
      ue
        ? ue.add(w.pathname)
        : ((ue = new Set([w.pathname])), k.set(v.location.pathname, ue)),
        (se = { currentLocation: v.location, nextLocation: w });
    }
    Ae(
      me({}, F, {
        actionData: G,
        loaderData: Z,
        historyAction: D,
        location: w,
        initialized: !0,
        navigation: Ji,
        revalidation: "idle",
        restoreScrollPosition: Pr(w, F.matches || v.matches),
        preventScrollReset: Q,
        blockers: K,
      }),
      { viewTransitionOpts: se, flushSync: J === !0 },
    ),
      (D = _e.Pop),
      (P = !1),
      (S = !1),
      (z = !1),
      ($ = !1),
      (O = []);
  }
  async function Le(w, F) {
    if (typeof w == "number") {
      e.history.go(w);
      return;
    }
    let _ = Bs(
        v.location,
        v.matches,
        l,
        h.v7_prependBasename,
        w,
        h.v7_relativeSplatPath,
        F == null ? void 0 : F.fromRouteId,
        F == null ? void 0 : F.relative,
      ),
      {
        path: U,
        submission: q,
        error: J,
      } = fa(h.v7_normalizeFormMethod, !1, _, F),
      te = v.location,
      G = Yr(v.location, U, F && F.state);
    G = me({}, G, e.history.encodeLocation(G));
    let Z = F && F.replace != null ? F.replace : void 0,
      K = _e.Push;
    Z === !0
      ? (K = _e.Replace)
      : Z === !1 ||
        (q != null &&
          rt(q.formMethod) &&
          q.formAction === v.location.pathname + v.location.search &&
          (K = _e.Replace));
    let Q =
        F && "preventScrollReset" in F ? F.preventScrollReset === !0 : void 0,
      se = (F && F.flushSync) === !0,
      ue = Tr({ currentLocation: te, nextLocation: G, historyAction: K });
    if (ue) {
      Jt(ue, {
        state: "blocked",
        location: G,
        proceed() {
          Jt(ue, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: G,
          }),
            Le(w, F);
        },
        reset() {
          let Pe = new Map(v.blockers);
          Pe.set(ue, Mr), Ae({ blockers: Pe });
        },
      });
      return;
    }
    return await ze(K, G, {
      submission: q,
      pendingError: J,
      preventScrollReset: Q,
      replace: F && F.replace,
      enableViewTransition: F && F.viewTransition,
      flushSync: se,
    });
  }
  function Yt() {
    if (
      (pt(),
      Ae({ revalidation: "loading" }),
      v.navigation.state !== "submitting")
    ) {
      if (v.navigation.state === "idle") {
        ze(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      ze(D || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
        enableViewTransition: S === !0,
      });
    }
  }
  async function ze(w, F, _) {
    A && A.abort(),
      (A = null),
      (D = w),
      (z = (_ && _.startUninterruptedRevalidation) === !0),
      qi(v.location, v.matches),
      (P = (_ && _.preventScrollReset) === !0),
      (S = (_ && _.enableViewTransition) === !0);
    let U = a || o,
      q = _ && _.overrideNavigation,
      J =
        _ != null &&
        _.initialHydration &&
        v.matches &&
        v.matches.length > 0 &&
        !g
          ? v.matches
          : cr(U, F, l),
      te = (_ && _.flushSync) === !0;
    if (
      J &&
      v.initialized &&
      !$ &&
      ch(v.location, F) &&
      !(_ && _.submission && rt(_.submission.formMethod))
    ) {
      Te(F, { matches: J }, { flushSync: te });
      return;
    }
    let G = tr(J, U, F.pathname);
    if ((G.active && G.matches && (J = G.matches), !J)) {
      let { error: pe, notFoundMatches: he, route: Ee } = Rr(F.pathname);
      Te(
        F,
        { matches: he, loaderData: {}, errors: { [Ee.id]: pe } },
        { flushSync: te },
      );
      return;
    }
    A = new AbortController();
    let Z = ar(e.history, F, A.signal, _ && _.submission),
      K;
    if (_ && _.pendingError)
      K = [Vt(J).route.id, { type: de.error, error: _.pendingError }];
    else if (_ && _.submission && rt(_.submission.formMethod)) {
      let pe = await Zt(Z, F, _.submission, J, G.active, {
        replace: _.replace,
        flushSync: te,
      });
      if (pe.shortCircuited) return;
      if (pe.pendingActionResult) {
        let [he, Ee] = pe.pendingActionResult;
        if ($e(Ee) && Ci(Ee.error) && Ee.error.status === 404) {
          (A = null),
            Te(F, {
              matches: pe.matches,
              loaderData: {},
              errors: { [he]: Ee.error },
            });
          return;
        }
      }
      (J = pe.matches || J),
        (K = pe.pendingActionResult),
        (q = es(F, _.submission)),
        (te = !1),
        (G.active = !1),
        (Z = ar(e.history, Z.url, Z.signal));
    }
    let {
      shortCircuited: Q,
      matches: se,
      loaderData: ue,
      errors: Pe,
    } = await Tt(
      Z,
      F,
      J,
      G.active,
      q,
      _ && _.submission,
      _ && _.fetcherSubmission,
      _ && _.replace,
      _ && _.initialHydration === !0,
      te,
      K,
    );
    Q ||
      ((A = null),
      Te(F, me({ matches: se || J }, Ea(K), { loaderData: ue, errors: Pe })));
  }
  async function Zt(w, F, _, U, q, J) {
    J === void 0 && (J = {}), pt();
    let te = ph(F, _);
    if ((Ae({ navigation: te }, { flushSync: J.flushSync === !0 }), q)) {
      let K = await rr(U, F.pathname, w.signal);
      if (K.type === "aborted") return { shortCircuited: !0 };
      if (K.type === "error") {
        let Q = Vt(K.partialMatches).route.id;
        return {
          matches: K.partialMatches,
          pendingActionResult: [Q, { type: de.error, error: K.error }],
        };
      } else if (K.matches) U = K.matches;
      else {
        let { notFoundMatches: Q, error: se, route: ue } = Rr(F.pathname);
        return {
          matches: Q,
          pendingActionResult: [ue.id, { type: de.error, error: se }],
        };
      }
    }
    let G,
      Z = Hr(U, F);
    if (!Z.route.action && !Z.route.lazy)
      G = {
        type: de.error,
        error: Ie(405, {
          method: w.method,
          pathname: F.pathname,
          routeId: Z.route.id,
        }),
      };
    else if (
      ((G = (await Et("action", v, w, [Z], U, null))[Z.route.id]),
      w.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Nt(G)) {
      let K;
      return (
        J && J.replace != null
          ? (K = J.replace)
          : (K =
              ma(G.response.headers.get("Location"), new URL(w.url), l) ===
              v.location.pathname + v.location.search),
        await We(w, G, !0, { submission: _, replace: K }),
        { shortCircuited: !0 }
      );
    }
    if (At(G)) throw Ie(400, { type: "defer-action" });
    if ($e(G)) {
      let K = Vt(U, Z.route.id);
      return (
        (J && J.replace) !== !0 && (D = _e.Push),
        { matches: U, pendingActionResult: [K.route.id, G] }
      );
    }
    return { matches: U, pendingActionResult: [Z.route.id, G] };
  }
  async function Tt(w, F, _, U, q, J, te, G, Z, K, Q) {
    let se = q || es(F, J),
      ue = J || te || Aa(se),
      Pe = !z && (!h.v7_partialHydration || !Z);
    if (U) {
      if (Pe) {
        let be = Qt(Q);
        Ae(me({ navigation: se }, be !== void 0 ? { actionData: be } : {}), {
          flushSync: K,
        });
      }
      let fe = await rr(_, F.pathname, w.signal);
      if (fe.type === "aborted") return { shortCircuited: !0 };
      if (fe.type === "error") {
        let be = Vt(fe.partialMatches).route.id;
        return {
          matches: fe.partialMatches,
          loaderData: {},
          errors: { [be]: fe.error },
        };
      } else if (fe.matches) _ = fe.matches;
      else {
        let { error: be, notFoundMatches: ir, route: Or } = Rr(F.pathname);
        return { matches: ir, loaderData: {}, errors: { [Or.id]: be } };
      }
    }
    let pe = a || o,
      [he, Ee] = da(
        e.history,
        v,
        _,
        ue,
        F,
        h.v7_partialHydration && Z === !0,
        h.v7_skipActionErrorRevalidation,
        $,
        O,
        H,
        re,
        I,
        V,
        pe,
        l,
        Q,
      );
    if (
      (er(
        (fe) =>
          !(_ && _.some((be) => be.route.id === fe)) ||
          (he && he.some((be) => be.route.id === fe)),
      ),
      (X = ++W),
      he.length === 0 && Ee.length === 0)
    ) {
      let fe = Sr();
      return (
        Te(
          F,
          me(
            {
              matches: _,
              loaderData: {},
              errors: Q && $e(Q[1]) ? { [Q[0]]: Q[1].error } : null,
            },
            Ea(Q),
            fe ? { fetchers: new Map(v.fetchers) } : {},
          ),
          { flushSync: K },
        ),
        { shortCircuited: !0 }
      );
    }
    if (Pe) {
      let fe = {};
      if (!U) {
        fe.navigation = se;
        let be = Qt(Q);
        be !== void 0 && (fe.actionData = be);
      }
      Ee.length > 0 && (fe.fetchers = Rt(Ee)), Ae(fe, { flushSync: K });
    }
    Ee.forEach((fe) => {
      at(fe.key), fe.controller && N.set(fe.key, fe.controller);
    });
    let nr = () => Ee.forEach((fe) => at(fe.key));
    A && A.signal.addEventListener("abort", nr);
    let { loaderResults: kr, fetcherResults: xt } = await dt(v, _, he, Ee, w);
    if (w.signal.aborted) return { shortCircuited: !0 };
    A && A.signal.removeEventListener("abort", nr),
      Ee.forEach((fe) => N.delete(fe.key));
    let ct = vn(kr);
    if (ct)
      return await We(w, ct.result, !0, { replace: G }), { shortCircuited: !0 };
    if (((ct = vn(xt)), ct))
      return (
        V.add(ct.key),
        await We(w, ct.result, !0, { replace: G }),
        { shortCircuited: !0 }
      );
    let { loaderData: Wi, errors: Lr } = ga(v, _, kr, Q, Ee, xt, le);
    le.forEach((fe, be) => {
      fe.subscribe((ir) => {
        (ir || fe.done) && le.delete(be);
      });
    }),
      h.v7_partialHydration && Z && v.errors && (Lr = me({}, v.errors, Lr));
    let kt = Sr(),
      mn = dn(X),
      yn = kt || mn || Ee.length > 0;
    return me(
      { matches: _, loaderData: Wi, errors: Lr },
      yn ? { fetchers: new Map(v.fetchers) } : {},
    );
  }
  function Qt(w) {
    if (w && !$e(w[1])) return { [w[0]]: w[1].data };
    if (v.actionData)
      return Object.keys(v.actionData).length === 0 ? null : v.actionData;
  }
  function Rt(w) {
    return (
      w.forEach((F) => {
        let _ = v.fetchers.get(F.key),
          U = Vr(void 0, _ ? _.data : void 0);
        v.fetchers.set(F.key, U);
      }),
      new Map(v.fetchers)
    );
  }
  function qe(w, F, _, U) {
    if (n)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    at(w);
    let q = (U && U.flushSync) === !0,
      J = a || o,
      te = Bs(
        v.location,
        v.matches,
        l,
        h.v7_prependBasename,
        _,
        h.v7_relativeSplatPath,
        F,
        U == null ? void 0 : U.relative,
      ),
      G = cr(J, te, l),
      Z = tr(G, J, te);
    if ((Z.active && Z.matches && (G = Z.matches), !G)) {
      Ke(w, F, Ie(404, { pathname: te }), { flushSync: q });
      return;
    }
    let {
      path: K,
      submission: Q,
      error: se,
    } = fa(h.v7_normalizeFormMethod, !0, te, U);
    if (se) {
      Ke(w, F, se, { flushSync: q });
      return;
    }
    let ue = Hr(G, K),
      Pe = (U && U.preventScrollReset) === !0;
    if (Q && rt(Q.formMethod)) {
      Ne(w, F, K, ue, G, Z.active, q, Pe, Q);
      return;
    }
    I.set(w, { routeId: F, path: K }), st(w, F, K, ue, G, Z.active, q, Pe, Q);
  }
  async function Ne(w, F, _, U, q, J, te, G, Z) {
    pt(), I.delete(w);
    function K(we) {
      if (!we.route.action && !we.route.lazy) {
        let sr = Ie(405, { method: Z.formMethod, pathname: _, routeId: F });
        return Ke(w, F, sr, { flushSync: te }), !0;
      }
      return !1;
    }
    if (!J && K(U)) return;
    let Q = v.fetchers.get(w);
    ot(w, xh(Z, Q), { flushSync: te });
    let se = new AbortController(),
      ue = ar(e.history, _, se.signal, Z);
    if (J) {
      let we = await rr(q, new URL(ue.url).pathname, ue.signal, w);
      if (we.type === "aborted") return;
      if (we.type === "error") {
        Ke(w, F, we.error, { flushSync: te });
        return;
      } else if (we.matches) {
        if (((q = we.matches), (U = Hr(q, _)), K(U))) return;
      } else {
        Ke(w, F, Ie(404, { pathname: _ }), { flushSync: te });
        return;
      }
    }
    N.set(w, se);
    let Pe = W,
      he = (await Et("action", v, ue, [U], q, w))[U.route.id];
    if (ue.signal.aborted) {
      N.get(w) === se && N.delete(w);
      return;
    }
    if (h.v7_fetcherPersist && re.has(w)) {
      if (Nt(he) || $e(he)) {
        ot(w, bt(void 0));
        return;
      }
    } else {
      if (Nt(he))
        if ((N.delete(w), X > Pe)) {
          ot(w, bt(void 0));
          return;
        } else
          return (
            V.add(w),
            ot(w, Vr(Z)),
            We(ue, he, !1, { fetcherSubmission: Z, preventScrollReset: G })
          );
      if ($e(he)) {
        Ke(w, F, he.error);
        return;
      }
    }
    if (At(he)) throw Ie(400, { type: "defer-action" });
    let Ee = v.navigation.location || v.location,
      nr = ar(e.history, Ee, se.signal),
      kr = a || o,
      xt =
        v.navigation.state !== "idle"
          ? cr(kr, v.navigation.location, l)
          : v.matches;
    xe(xt, "Didn't find any matches after fetcher action");
    let ct = ++W;
    R.set(w, ct);
    let Wi = Vr(Z, he.data);
    v.fetchers.set(w, Wi);
    let [Lr, kt] = da(
      e.history,
      v,
      xt,
      Z,
      Ee,
      !1,
      h.v7_skipActionErrorRevalidation,
      $,
      O,
      H,
      re,
      I,
      V,
      kr,
      l,
      [U.route.id, he],
    );
    kt
      .filter((we) => we.key !== w)
      .forEach((we) => {
        let sr = we.key,
          Jo = v.fetchers.get(sr),
          df = Vr(void 0, Jo ? Jo.data : void 0);
        v.fetchers.set(sr, df),
          at(sr),
          we.controller && N.set(sr, we.controller);
      }),
      Ae({ fetchers: new Map(v.fetchers) });
    let mn = () => kt.forEach((we) => at(we.key));
    se.signal.addEventListener("abort", mn);
    let { loaderResults: yn, fetcherResults: fe } = await dt(v, xt, Lr, kt, nr);
    if (se.signal.aborted) return;
    se.signal.removeEventListener("abort", mn),
      R.delete(w),
      N.delete(w),
      kt.forEach((we) => N.delete(we.key));
    let be = vn(yn);
    if (be) return We(nr, be.result, !1, { preventScrollReset: G });
    if (((be = vn(fe)), be))
      return V.add(be.key), We(nr, be.result, !1, { preventScrollReset: G });
    let { loaderData: ir, errors: Or } = ga(v, xt, yn, void 0, kt, fe, le);
    if (v.fetchers.has(w)) {
      let we = bt(he.data);
      v.fetchers.set(w, we);
    }
    dn(ct),
      v.navigation.state === "loading" && ct > X
        ? (xe(D, "Expected pending action"),
          A && A.abort(),
          Te(v.navigation.location, {
            matches: xt,
            loaderData: ir,
            errors: Or,
            fetchers: new Map(v.fetchers),
          }))
        : (Ae({
            errors: Or,
            loaderData: va(v.loaderData, ir, xt, Or),
            fetchers: new Map(v.fetchers),
          }),
          ($ = !1));
  }
  async function st(w, F, _, U, q, J, te, G, Z) {
    let K = v.fetchers.get(w);
    ot(w, Vr(Z, K ? K.data : void 0), { flushSync: te });
    let Q = new AbortController(),
      se = ar(e.history, _, Q.signal);
    if (J) {
      let he = await rr(q, new URL(se.url).pathname, se.signal, w);
      if (he.type === "aborted") return;
      if (he.type === "error") {
        Ke(w, F, he.error, { flushSync: te });
        return;
      } else if (he.matches) (q = he.matches), (U = Hr(q, _));
      else {
        Ke(w, F, Ie(404, { pathname: _ }), { flushSync: te });
        return;
      }
    }
    N.set(w, Q);
    let ue = W,
      pe = (await Et("loader", v, se, [U], q, w))[U.route.id];
    if (
      (At(pe) && (pe = (await so(pe, se.signal, !0)) || pe),
      N.get(w) === Q && N.delete(w),
      !se.signal.aborted)
    ) {
      if (re.has(w)) {
        ot(w, bt(void 0));
        return;
      }
      if (Nt(pe))
        if (X > ue) {
          ot(w, bt(void 0));
          return;
        } else {
          V.add(w), await We(se, pe, !1, { preventScrollReset: G });
          return;
        }
      if ($e(pe)) {
        Ke(w, F, pe.error);
        return;
      }
      xe(!At(pe), "Unhandled fetcher deferred data"), ot(w, bt(pe.data));
    }
  }
  async function We(w, F, _, U) {
    let {
      submission: q,
      fetcherSubmission: J,
      preventScrollReset: te,
      replace: G,
    } = U === void 0 ? {} : U;
    F.response.headers.has("X-Remix-Revalidate") && ($ = !0);
    let Z = F.response.headers.get("Location");
    xe(Z, "Expected a Location header on the redirect Response"),
      (Z = ma(Z, new URL(w.url), l));
    let K = Yr(v.location, Z, { _isRedirect: !0 });
    if (r) {
      let he = !1;
      if (F.response.headers.has("X-Remix-Reload-Document")) he = !0;
      else if (io.test(Z)) {
        const Ee = e.history.createURL(Z);
        he = Ee.origin !== t.location.origin || _i(Ee.pathname, l) == null;
      }
      if (he) {
        G ? t.location.replace(Z) : t.location.assign(Z);
        return;
      }
    }
    A = null;
    let Q =
        G === !0 || F.response.headers.has("X-Remix-Replace")
          ? _e.Replace
          : _e.Push,
      { formMethod: se, formAction: ue, formEncType: Pe } = v.navigation;
    !q && !J && se && ue && Pe && (q = Aa(v.navigation));
    let pe = q || J;
    if (Yf.has(F.response.status) && pe && rt(pe.formMethod))
      await ze(Q, K, {
        submission: me({}, pe, { formAction: Z }),
        preventScrollReset: te || P,
        enableViewTransition: _ ? S : void 0,
      });
    else {
      let he = es(K, q);
      await ze(Q, K, {
        overrideNavigation: he,
        fetcherSubmission: J,
        preventScrollReset: te || P,
        enableViewTransition: _ ? S : void 0,
      });
    }
  }
  async function Et(w, F, _, U, q, J) {
    let te,
      G = {};
    try {
      te = await nh(c, w, F, _, U, q, J, s, i);
    } catch (Z) {
      return (
        U.forEach((K) => {
          G[K.route.id] = { type: de.error, error: Z };
        }),
        G
      );
    }
    for (let [Z, K] of Object.entries(te))
      if (lh(K)) {
        let Q = K.result;
        G[Z] = {
          type: de.redirect,
          response: oh(Q, _, Z, q, l, h.v7_relativeSplatPath),
        };
      } else G[Z] = await sh(K);
    return G;
  }
  async function dt(w, F, _, U, q) {
    let J = w.matches,
      te = Et("loader", w, q, _, F, null),
      G = Promise.all(
        U.map(async (Q) => {
          if (Q.matches && Q.match && Q.controller) {
            let ue = (
              await Et(
                "loader",
                w,
                ar(e.history, Q.path, Q.controller.signal),
                [Q.match],
                Q.matches,
                Q.key,
              )
            )[Q.match.route.id];
            return { [Q.key]: ue };
          } else
            return Promise.resolve({
              [Q.key]: { type: de.error, error: Ie(404, { pathname: Q.path }) },
            });
        }),
      ),
      Z = await te,
      K = (await G).reduce((Q, se) => Object.assign(Q, se), {});
    return (
      await Promise.all([hh(F, Z, q.signal, J, w.loaderData), dh(F, K, U)]),
      { loaderResults: Z, fetcherResults: K }
    );
  }
  function pt() {
    ($ = !0),
      O.push(...er()),
      I.forEach((w, F) => {
        N.has(F) && H.add(F), at(F);
      });
  }
  function ot(w, F, _) {
    _ === void 0 && (_ = {}),
      v.fetchers.set(w, F),
      Ae(
        { fetchers: new Map(v.fetchers) },
        { flushSync: (_ && _.flushSync) === !0 },
      );
  }
  function Ke(w, F, _, U) {
    U === void 0 && (U = {});
    let q = Vt(v.matches, F);
    et(w),
      Ae(
        { errors: { [q.route.id]: _ }, fetchers: new Map(v.fetchers) },
        { flushSync: (U && U.flushSync) === !0 },
      );
  }
  function Dr(w) {
    return (
      M.set(w, (M.get(w) || 0) + 1),
      re.has(w) && re.delete(w),
      v.fetchers.get(w) || Zf
    );
  }
  function et(w) {
    let F = v.fetchers.get(w);
    N.has(w) && !(F && F.state === "loading" && R.has(w)) && at(w),
      I.delete(w),
      R.delete(w),
      V.delete(w),
      h.v7_fetcherPersist && re.delete(w),
      H.delete(w),
      v.fetchers.delete(w);
  }
  function Pt(w) {
    let F = (M.get(w) || 0) - 1;
    F <= 0
      ? (M.delete(w), re.add(w), h.v7_fetcherPersist || et(w))
      : M.set(w, F),
      Ae({ fetchers: new Map(v.fetchers) });
  }
  function at(w) {
    let F = N.get(w);
    F && (F.abort(), N.delete(w));
  }
  function Fr(w) {
    for (let F of w) {
      let _ = Dr(F),
        U = bt(_.data);
      v.fetchers.set(F, U);
    }
  }
  function Sr() {
    let w = [],
      F = !1;
    for (let _ of V) {
      let U = v.fetchers.get(_);
      xe(U, "Expected fetcher: " + _),
        U.state === "loading" && (V.delete(_), w.push(_), (F = !0));
    }
    return Fr(w), F;
  }
  function dn(w) {
    let F = [];
    for (let [_, U] of R)
      if (U < w) {
        let q = v.fetchers.get(_);
        xe(q, "Expected fetcher: " + _),
          q.state === "loading" && (at(_), R.delete(_), F.push(_));
      }
    return Fr(F), F.length > 0;
  }
  function ji(w, F) {
    let _ = v.blockers.get(w) || Mr;
    return ve.get(w) !== F && ve.set(w, F), _;
  }
  function _r(w) {
    v.blockers.delete(w), ve.delete(w);
  }
  function Jt(w, F) {
    let _ = v.blockers.get(w) || Mr;
    xe(
      (_.state === "unblocked" && F.state === "blocked") ||
        (_.state === "blocked" && F.state === "blocked") ||
        (_.state === "blocked" && F.state === "proceeding") ||
        (_.state === "blocked" && F.state === "unblocked") ||
        (_.state === "proceeding" && F.state === "unblocked"),
      "Invalid blocker state transition: " + _.state + " -> " + F.state,
    );
    let U = new Map(v.blockers);
    U.set(w, F), Ae({ blockers: U });
  }
  function Tr(w) {
    let { currentLocation: F, nextLocation: _, historyAction: U } = w;
    if (ve.size === 0) return;
    ve.size > 1 && $t(!1, "A router only supports one blocker at a time");
    let q = Array.from(ve.entries()),
      [J, te] = q[q.length - 1],
      G = v.blockers.get(J);
    if (
      !(G && G.state === "proceeding") &&
      te({ currentLocation: F, nextLocation: _, historyAction: U })
    )
      return J;
  }
  function Rr(w) {
    let F = Ie(404, { pathname: w }),
      _ = a || o,
      { matches: U, route: q } = ba(_);
    return er(), { notFoundMatches: U, route: q, error: F };
  }
  function er(w) {
    let F = [];
    return (
      le.forEach((_, U) => {
        (!w || w(U)) && (_.cancel(), F.push(U), le.delete(U));
      }),
      F
    );
  }
  function zi(w, F, _) {
    if (((p = w), (x = F), (m = _ || null), !b && v.navigation === Ji)) {
      b = !0;
      let U = Pr(v.location, v.matches);
      U != null && Ae({ restoreScrollPosition: U });
    }
    return () => {
      (p = null), (x = null), (m = null);
    };
  }
  function pn(w, F) {
    return (
      (m &&
        m(
          w,
          F.map((U) => wf(U, v.loaderData)),
        )) ||
      w.key
    );
  }
  function qi(w, F) {
    if (p && x) {
      let _ = pn(w, F);
      p[_] = x();
    }
  }
  function Pr(w, F) {
    if (p) {
      let _ = pn(w, F),
        U = p[_];
      if (typeof U == "number") return U;
    }
    return null;
  }
  function tr(w, F, _) {
    if (u)
      if (w) {
        if (Object.keys(w[0].params).length > 0)
          return { active: !0, matches: Fn(F, _, l, !0) };
      } else return { active: !0, matches: Fn(F, _, l, !0) || [] };
    return { active: !1, matches: null };
  }
  async function rr(w, F, _, U) {
    if (!u) return { type: "success", matches: w };
    let q = w;
    for (;;) {
      let J = a == null,
        te = a || o,
        G = s;
      try {
        await u({
          signal: _,
          path: F,
          matches: q,
          fetcherKey: U,
          patch: (Q, se) => {
            _.aborted || xa(Q, se, te, G, i);
          },
        });
      } catch (Q) {
        return { type: "error", error: Q, partialMatches: q };
      } finally {
        J && !_.aborted && (o = [...o]);
      }
      if (_.aborted) return { type: "aborted" };
      let Z = cr(te, F, l);
      if (Z) return { type: "success", matches: Z };
      let K = Fn(te, F, l, !0);
      if (
        !K ||
        (q.length === K.length &&
          q.every((Q, se) => Q.route.id === K[se].route.id))
      )
        return { type: "success", matches: null };
      q = K;
    }
  }
  function xn(w) {
    (s = {}), (a = bi(w, i, void 0, s));
  }
  function $i(w, F) {
    let _ = a == null;
    xa(w, F, a || o, s, i), _ && ((o = [...o]), Ae({}));
  }
  return (
    (B = {
      get basename() {
        return l;
      },
      get future() {
        return h;
      },
      get state() {
        return v;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: _t,
      subscribe: wr,
      enableScrollRestoration: zi,
      navigate: Le,
      fetch: qe,
      revalidate: Yt,
      createHref: (w) => e.history.createHref(w),
      encodeLocation: (w) => e.history.encodeLocation(w),
      getFetcher: Dr,
      deleteFetcher: Pt,
      dispose: vt,
      getBlocker: ji,
      deleteBlocker: _r,
      patchRoutes: $i,
      _internalFetchControllers: N,
      _internalActiveDeferreds: le,
      _internalSetRoutes: xn,
    }),
    B
  );
}
function Jf(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Bs(e, t, r, n, i, s, o, a) {
  let l, c;
  if (o) {
    l = [];
    for (let h of t)
      if ((l.push(h), h.route.id === o)) {
        c = h;
        break;
      }
  } else (l = t), (c = t[t.length - 1]);
  let u = jf(i || ".", Hf(l, s), _i(e.pathname, r) || e.pathname, a === "path");
  if (
    (i == null && ((u.search = e.search), (u.hash = e.hash)),
    (i == null || i === "" || i === ".") && c)
  ) {
    let h = oo(u.search);
    if (c.route.index && !h)
      u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index";
    else if (!c.route.index && h) {
      let f = new URLSearchParams(u.search),
        d = f.getAll("index");
      f.delete("index"),
        d.filter((m) => m).forEach((m) => f.append("index", m));
      let p = f.toString();
      u.search = p ? "?" + p : "";
    }
  }
  return (
    n &&
      r !== "/" &&
      (u.pathname = u.pathname === "/" ? r : qr([r, u.pathname])),
    nn(u)
  );
}
function fa(e, t, r, n) {
  if (!n || !Jf(n)) return { path: r };
  if (n.formMethod && !fh(n.formMethod))
    return { path: r, error: Ie(405, { method: n.formMethod }) };
  let i = () => ({ path: r, error: Ie(400, { type: "invalid-body" }) }),
    s = n.formMethod || "get",
    o = e ? s.toUpperCase() : s.toLowerCase(),
    a = Kc(r);
  if (n.body !== void 0) {
    if (n.formEncType === "text/plain") {
      if (!rt(o)) return i();
      let f =
        typeof n.body == "string"
          ? n.body
          : n.body instanceof FormData || n.body instanceof URLSearchParams
            ? Array.from(n.body.entries()).reduce((d, p) => {
                let [m, x] = p;
                return (
                  "" +
                  d +
                  m +
                  "=" +
                  x +
                  `
`
                );
              }, "")
            : String(n.body);
      return {
        path: r,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: f,
        },
      };
    } else if (n.formEncType === "application/json") {
      if (!rt(o)) return i();
      try {
        let f = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
        return {
          path: r,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: n.formEncType,
            formData: void 0,
            json: f,
            text: void 0,
          },
        };
      } catch (f) {
        return i();
      }
    }
  }
  xe(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let l, c;
  if (n.formData) (l = Ds(n.formData)), (c = n.formData);
  else if (n.body instanceof FormData) (l = Ds(n.body)), (c = n.body);
  else if (n.body instanceof URLSearchParams) (l = n.body), (c = ya(l));
  else if (n.body == null) (l = new URLSearchParams()), (c = new FormData());
  else
    try {
      (l = new URLSearchParams(n.body)), (c = ya(l));
    } catch (f) {
      return i();
    }
  let u = {
    formMethod: o,
    formAction: a,
    formEncType: (n && n.formEncType) || "application/x-www-form-urlencoded",
    formData: c,
    json: void 0,
    text: void 0,
  };
  if (rt(u.formMethod)) return { path: r, submission: u };
  let h = Kt(r);
  return (
    t && h.search && oo(h.search) && l.append("index", ""),
    (h.search = "?" + l),
    { path: nn(h), submission: u }
  );
}
function ha(e, t, r) {
  r === void 0 && (r = !1);
  let n = e.findIndex((i) => i.route.id === t);
  return n >= 0 ? e.slice(0, r ? n + 1 : n) : e;
}
function da(e, t, r, n, i, s, o, a, l, c, u, h, f, d, p, m) {
  let x = m ? ($e(m[1]) ? m[1].error : m[1].data) : void 0,
    b = e.createURL(t.location),
    y = e.createURL(i),
    g = r;
  s && t.errors
    ? (g = ha(r, Object.keys(t.errors)[0], !0))
    : m && $e(m[1]) && (g = ha(r, m[0]));
  let E = m ? m[1].statusCode : void 0,
    C = o && E && E >= 400,
    B = g.filter((D, P) => {
      let { route: A } = D;
      if (A.lazy) return !0;
      if (A.loader == null) return !1;
      if (s) return ws(A, t.loaderData, t.errors);
      if (eh(t.loaderData, t.matches[P], D) || l.some((L) => L === D.route.id))
        return !0;
      let S = t.matches[P],
        k = D;
      return pa(
        D,
        me(
          {
            currentUrl: b,
            currentParams: S.params,
            nextUrl: y,
            nextParams: k.params,
          },
          n,
          {
            actionResult: x,
            actionStatus: E,
            defaultShouldRevalidate: C
              ? !1
              : a ||
                b.pathname + b.search === y.pathname + y.search ||
                b.search !== y.search ||
                $c(S, k),
          },
        ),
      );
    }),
    v = [];
  return (
    h.forEach((D, P) => {
      if (s || !r.some((z) => z.route.id === D.routeId) || u.has(P)) return;
      let A = cr(d, D.path, p);
      if (!A) {
        v.push({
          key: P,
          routeId: D.routeId,
          path: D.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let S = t.fetchers.get(P),
        k = Hr(A, D.path),
        L = !1;
      f.has(P)
        ? (L = !1)
        : c.has(P)
          ? (c.delete(P), (L = !0))
          : S && S.state !== "idle" && S.data === void 0
            ? (L = a)
            : (L = pa(
                k,
                me(
                  {
                    currentUrl: b,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: y,
                    nextParams: r[r.length - 1].params,
                  },
                  n,
                  {
                    actionResult: x,
                    actionStatus: E,
                    defaultShouldRevalidate: C ? !1 : a,
                  },
                ),
              )),
        L &&
          v.push({
            key: P,
            routeId: D.routeId,
            path: D.path,
            matches: A,
            match: k,
            controller: new AbortController(),
          });
    }),
    [B, v]
  );
}
function ws(e, t, r) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let n = t != null && t[e.id] !== void 0,
    i = r != null && r[e.id] !== void 0;
  return !n && i
    ? !1
    : typeof e.loader == "function" && e.loader.hydrate === !0
      ? !0
      : !n && !i;
}
function eh(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    i = e[r.route.id] === void 0;
  return n || i;
}
function $c(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r != null && r.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function pa(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == "boolean") return r;
  }
  return t.defaultShouldRevalidate;
}
function xa(e, t, r, n, i) {
  var s;
  let o;
  if (e) {
    let c = n[e];
    xe(c, "No route found to patch children into: routeId = " + e),
      c.children || (c.children = []),
      (o = c.children);
  } else o = r;
  let a = t.filter((c) => !o.some((u) => Wc(c, u))),
    l = bi(
      a,
      i,
      [e || "_", "patch", String(((s = o) == null ? void 0 : s.length) || "0")],
      n,
    );
  o.push(...l);
}
function Wc(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index &&
        e.path === t.path &&
        e.caseSensitive === t.caseSensitive
      ? (!e.children || e.children.length === 0) &&
        (!t.children || t.children.length === 0)
        ? !0
        : e.children.every((r, n) => {
            var i;
            return (i = t.children) == null ? void 0 : i.some((s) => Wc(r, s));
          })
      : !1;
}
async function th(e, t, r) {
  if (!e.lazy) return;
  let n = await e.lazy();
  if (!e.lazy) return;
  let i = r[e.id];
  xe(i, "No route found in manifest");
  let s = {};
  for (let o in n) {
    let l = i[o] !== void 0 && o !== "hasErrorBoundary";
    $t(
      !l,
      'Route "' +
        i.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.'),
    ),
      !l && !Af.has(o) && (s[o] = n[o]);
  }
  Object.assign(i, s), Object.assign(i, me({}, t(i), { lazy: void 0 }));
}
async function rh(e) {
  let { matches: t } = e,
    r = t.filter((i) => i.shouldLoad);
  return (await Promise.all(r.map((i) => i.resolve()))).reduce(
    (i, s, o) => Object.assign(i, { [r[o].route.id]: s }),
    {},
  );
}
async function nh(e, t, r, n, i, s, o, a, l, c) {
  let u = s.map((d) => (d.route.lazy ? th(d.route, l, a) : void 0)),
    h = s.map((d, p) => {
      let m = u[p],
        x = i.some((y) => y.route.id === d.route.id);
      return me({}, d, {
        shouldLoad: x,
        resolve: async (y) => (
          y &&
            n.method === "GET" &&
            (d.route.lazy || d.route.loader) &&
            (x = !0),
          x
            ? ih(t, n, d, m, y, c)
            : Promise.resolve({ type: de.data, result: void 0 })
        ),
      });
    }),
    f = await e({
      matches: h,
      request: n,
      params: s[0].params,
      fetcherKey: o,
      context: c,
    });
  try {
    await Promise.all(u);
  } catch (d) {}
  return f;
}
async function ih(e, t, r, n, i, s) {
  let o,
    a,
    l = (c) => {
      let u,
        h = new Promise((p, m) => (u = m));
      (a = () => u()), t.signal.addEventListener("abort", a);
      let f = (p) =>
          typeof c != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + r.route.id + "]"),
                ),
              )
            : c(
                { request: t, params: r.params, context: s },
                ...(p !== void 0 ? [p] : []),
              ),
        d = (async () => {
          try {
            return { type: "data", result: await (i ? i((m) => f(m)) : f()) };
          } catch (p) {
            return { type: "error", result: p };
          }
        })();
      return Promise.race([d, h]);
    };
  try {
    let c = r.route[e];
    if (n)
      if (c) {
        let u,
          [h] = await Promise.all([
            l(c).catch((f) => {
              u = f;
            }),
            n,
          ]);
        if (u !== void 0) throw u;
        o = h;
      } else if ((await n, (c = r.route[e]), c)) o = await l(c);
      else if (e === "action") {
        let u = new URL(t.url),
          h = u.pathname + u.search;
        throw Ie(405, { method: t.method, pathname: h, routeId: r.route.id });
      } else return { type: de.data, result: void 0 };
    else if (c) o = await l(c);
    else {
      let u = new URL(t.url),
        h = u.pathname + u.search;
      throw Ie(404, { pathname: h });
    }
    xe(
      o.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          r.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (c) {
    return { type: de.error, result: c };
  } finally {
    a && t.signal.removeEventListener("abort", a);
  }
  return o;
}
async function sh(e) {
  let { result: t, type: r } = e;
  if (Xc(t)) {
    let h;
    try {
      let f = t.headers.get("Content-Type");
      f && /\bapplication\/json\b/.test(f)
        ? t.body == null
          ? (h = null)
          : (h = await t.json())
        : (h = await t.text());
    } catch (f) {
      return { type: de.error, error: f };
    }
    return r === de.error
      ? {
          type: de.error,
          error: new As(t.status, t.statusText, h),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: de.data, data: h, statusCode: t.status, headers: t.headers };
  }
  if (r === de.error) {
    if (Ca(t)) {
      var n, i;
      if (t.data instanceof Error) {
        var s, o;
        return {
          type: de.error,
          error: t.data,
          statusCode: (s = t.init) == null ? void 0 : s.status,
          headers:
            (o = t.init) != null && o.headers
              ? new Headers(t.init.headers)
              : void 0,
        };
      }
      return {
        type: de.error,
        error: new As(
          ((n = t.init) == null ? void 0 : n.status) || 500,
          void 0,
          t.data,
        ),
        statusCode: Ci(t) ? t.status : void 0,
        headers:
          (i = t.init) != null && i.headers
            ? new Headers(t.init.headers)
            : void 0,
      };
    }
    return { type: de.error, error: t, statusCode: Ci(t) ? t.status : void 0 };
  }
  if (uh(t)) {
    var a, l;
    return {
      type: de.deferred,
      deferredData: t,
      statusCode: (a = t.init) == null ? void 0 : a.status,
      headers:
        ((l = t.init) == null ? void 0 : l.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (Ca(t)) {
    var c, u;
    return {
      type: de.data,
      data: t.data,
      statusCode: (c = t.init) == null ? void 0 : c.status,
      headers:
        (u = t.init) != null && u.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: de.data, data: t };
}
function oh(e, t, r, n, i, s) {
  let o = e.headers.get("Location");
  if (
    (xe(
      o,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !io.test(o))
  ) {
    let a = n.slice(0, n.findIndex((l) => l.route.id === r) + 1);
    (o = Bs(new URL(t.url), a, i, !0, o, s)), e.headers.set("Location", o);
  }
  return e;
}
function ma(e, t, r) {
  if (io.test(e)) {
    let n = e,
      i = n.startsWith("//") ? new URL(t.protocol + n) : new URL(n),
      s = _i(i.pathname, r) != null;
    if (i.origin === t.origin && s) return i.pathname + i.search + i.hash;
  }
  return e;
}
function ar(e, t, r, n) {
  let i = e.createURL(Kc(t)).toString(),
    s = { signal: r };
  if (n && rt(n.formMethod)) {
    let { formMethod: o, formEncType: a } = n;
    (s.method = o.toUpperCase()),
      a === "application/json"
        ? ((s.headers = new Headers({ "Content-Type": a })),
          (s.body = JSON.stringify(n.json)))
        : a === "text/plain"
          ? (s.body = n.text)
          : a === "application/x-www-form-urlencoded" && n.formData
            ? (s.body = Ds(n.formData))
            : (s.body = n.formData);
  }
  return new Request(i, s);
}
function Ds(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    t.append(r, typeof n == "string" ? n : n.name);
  return t;
}
function ya(e) {
  let t = new FormData();
  for (let [r, n] of e.entries()) t.append(r, n);
  return t;
}
function ah(e, t, r, n, i) {
  let s = {},
    o = null,
    a,
    l = !1,
    c = {},
    u = r && $e(r[1]) ? r[1].error : void 0;
  return (
    e.forEach((h) => {
      if (!(h.route.id in t)) return;
      let f = h.route.id,
        d = t[f];
      if (
        (xe(!Nt(d), "Cannot handle redirect results in processLoaderData"),
        $e(d))
      ) {
        let p = d.error;
        u !== void 0 && ((p = u), (u = void 0)), (o = o || {});
        {
          let m = Vt(e, f);
          o[m.route.id] == null && (o[m.route.id] = p);
        }
        (s[f] = void 0),
          l || ((l = !0), (a = Ci(d.error) ? d.error.status : 500)),
          d.headers && (c[f] = d.headers);
      } else
        At(d)
          ? (n.set(f, d.deferredData),
            (s[f] = d.deferredData.data),
            d.statusCode != null &&
              d.statusCode !== 200 &&
              !l &&
              (a = d.statusCode),
            d.headers && (c[f] = d.headers))
          : ((s[f] = d.data),
            d.statusCode && d.statusCode !== 200 && !l && (a = d.statusCode),
            d.headers && (c[f] = d.headers));
    }),
    u !== void 0 && r && ((o = { [r[0]]: u }), (s[r[0]] = void 0)),
    { loaderData: s, errors: o, statusCode: a || 200, loaderHeaders: c }
  );
}
function ga(e, t, r, n, i, s, o) {
  let { loaderData: a, errors: l } = ah(t, r, n, o);
  return (
    i.forEach((c) => {
      let { key: u, match: h, controller: f } = c,
        d = s[u];
      if (
        (xe(d, "Did not find corresponding fetcher result"),
        !(f && f.signal.aborted))
      )
        if ($e(d)) {
          let p = Vt(e.matches, h == null ? void 0 : h.route.id);
          (l && l[p.route.id]) || (l = me({}, l, { [p.route.id]: d.error })),
            e.fetchers.delete(u);
        } else if (Nt(d)) xe(!1, "Unhandled fetcher revalidation redirect");
        else if (At(d)) xe(!1, "Unhandled fetcher deferred data");
        else {
          let p = bt(d.data);
          e.fetchers.set(u, p);
        }
    }),
    { loaderData: a, errors: l }
  );
}
function va(e, t, r, n) {
  let i = me({}, t);
  for (let s of r) {
    let o = s.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (i[o] = t[o])
        : e[o] !== void 0 && s.route.loader && (i[o] = e[o]),
      n && n.hasOwnProperty(o))
    )
      break;
  }
  return i;
}
function Ea(e) {
  return e
    ? $e(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Vt(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function ba(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((r) => r.index || !r.path || r.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Ie(e, t) {
  let {
      pathname: r,
      routeId: n,
      method: i,
      type: s,
      message: o,
    } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    l = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        i && r && n
          ? (l =
              "You made a " +
              i +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide a `loader` for route "' + n + '", ') +
              "so there is no way to handle the request.")
          : s === "defer-action"
            ? (l = "defer() is not supported in actions")
            : s === "invalid-body" && (l = "Unable to encode submission body"))
      : e === 403
        ? ((a = "Forbidden"),
          (l = 'Route "' + n + '" does not match URL "' + r + '"'))
        : e === 404
          ? ((a = "Not Found"), (l = 'No route matches URL "' + r + '"'))
          : e === 405 &&
            ((a = "Method Not Allowed"),
            i && r && n
              ? (l =
                  "You made a " +
                  i.toUpperCase() +
                  ' request to "' +
                  r +
                  '" but ' +
                  ('did not provide an `action` for route "' + n + '", ') +
                  "so there is no way to handle the request.")
              : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')),
    new As(e || 500, a, new Error(l), !0)
  );
}
function vn(e) {
  let t = Object.entries(e);
  for (let r = t.length - 1; r >= 0; r--) {
    let [n, i] = t[r];
    if (Nt(i)) return { key: n, result: i };
  }
}
function Kc(e) {
  let t = typeof e == "string" ? Kt(e) : e;
  return nn(me({}, t, { hash: "" }));
}
function ch(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function lh(e) {
  return Xc(e.result) && Gf.has(e.result.status);
}
function At(e) {
  return e.type === de.deferred;
}
function $e(e) {
  return e.type === de.error;
}
function Nt(e) {
  return (e && e.type) === de.redirect;
}
function Ca(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function uh(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Xc(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body != "undefined"
  );
}
function fh(e) {
  return Xf.has(e.toLowerCase());
}
function rt(e) {
  return Wf.has(e.toLowerCase());
}
async function hh(e, t, r, n, i) {
  let s = Object.entries(t);
  for (let o = 0; o < s.length; o++) {
    let [a, l] = s[o],
      c = e.find((f) => (f == null ? void 0 : f.route.id) === a);
    if (!c) continue;
    let u = n.find((f) => f.route.id === c.route.id),
      h = u != null && !$c(u, c) && (i && i[c.route.id]) !== void 0;
    At(l) &&
      h &&
      (await so(l, r, !1).then((f) => {
        f && (t[a] = f);
      }));
  }
}
async function dh(e, t, r) {
  for (let n = 0; n < r.length; n++) {
    let { key: i, routeId: s, controller: o } = r[n],
      a = t[i];
    e.find((c) => (c == null ? void 0 : c.route.id) === s) &&
      At(a) &&
      (xe(
        o,
        "Expected an AbortController for revalidating fetcher deferred result",
      ),
      await so(a, o.signal, !0).then((c) => {
        c && (t[i] = c);
      }));
  }
}
async function so(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: de.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: de.error, error: i };
      }
    return { type: de.data, data: e.deferredData.data };
  }
}
function oo(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Hr(e, t) {
  let r = typeof t == "string" ? Kt(t).search : t.search;
  if (e[e.length - 1].route.index && oo(r || "")) return e[e.length - 1];
  let n = jc(e);
  return n[n.length - 1];
}
function Aa(e) {
  let {
    formMethod: t,
    formAction: r,
    formEncType: n,
    text: i,
    formData: s,
    json: o,
  } = e;
  if (!(!t || !r || !n)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (s != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: s,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function es(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function ph(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Vr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function xh(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function bt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function mh(e, t) {
  try {
    let r = e.sessionStorage.getItem(qc);
    if (r) {
      let n = JSON.parse(r);
      for (let [i, s] of Object.entries(n || {}))
        s && Array.isArray(s) && t.set(i, new Set(s || []));
    }
  } catch (r) {}
}
function yh(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [n, i] of t) r[n] = [...i];
    try {
      e.sessionStorage.setItem(qc, JSON.stringify(r));
    } catch (n) {
      $t(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          n +
          ").",
      );
    }
  }
}
var Sn = { exports: {} };
function gh(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
  );
}
var _n = { exports: {} };
const vh = {},
  Eh = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: vh },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  bh = vf(Eh);
var Ch = _n.exports,
  Ba;
function ce() {
  return (
    Ba ||
      ((Ba = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n();
        })(Ch, function () {
          var r =
            r ||
            (function (n, i) {
              var s;
              if (
                (typeof window != "undefined" &&
                  window.crypto &&
                  (s = window.crypto),
                typeof self != "undefined" && self.crypto && (s = self.crypto),
                typeof globalThis != "undefined" &&
                  globalThis.crypto &&
                  (s = globalThis.crypto),
                !s &&
                  typeof window != "undefined" &&
                  window.msCrypto &&
                  (s = window.msCrypto),
                !s && typeof Gi != "undefined" && Gi.crypto && (s = Gi.crypto),
                !s && typeof gh == "function")
              )
                try {
                  s = bh;
                } catch (y) {}
              var o = function () {
                  if (s) {
                    if (typeof s.getRandomValues == "function")
                      try {
                        return s.getRandomValues(new Uint32Array(1))[0];
                      } catch (y) {}
                    if (typeof s.randomBytes == "function")
                      try {
                        return s.randomBytes(4).readInt32LE();
                      } catch (y) {}
                  }
                  throw new Error(
                    "Native crypto module could not be used to get secure random number.",
                  );
                },
                a =
                  Object.create ||
                  (function () {
                    function y() {}
                    return function (g) {
                      var E;
                      return (
                        (y.prototype = g),
                        (E = new y()),
                        (y.prototype = null),
                        E
                      );
                    };
                  })(),
                l = {},
                c = (l.lib = {}),
                u = (c.Base = (function () {
                  return {
                    extend: function (y) {
                      var g = a(this);
                      return (
                        y && g.mixIn(y),
                        (!g.hasOwnProperty("init") || this.init === g.init) &&
                          (g.init = function () {
                            g.$super.init.apply(this, arguments);
                          }),
                        (g.init.prototype = g),
                        (g.$super = this),
                        g
                      );
                    },
                    create: function () {
                      var y = this.extend();
                      return y.init.apply(y, arguments), y;
                    },
                    init: function () {},
                    mixIn: function (y) {
                      for (var g in y) y.hasOwnProperty(g) && (this[g] = y[g]);
                      y.hasOwnProperty("toString") &&
                        (this.toString = y.toString);
                    },
                    clone: function () {
                      return this.init.prototype.extend(this);
                    },
                  };
                })()),
                h = (c.WordArray = u.extend({
                  init: function (y, g) {
                    (y = this.words = y || []),
                      g != i
                        ? (this.sigBytes = g)
                        : (this.sigBytes = y.length * 4);
                  },
                  toString: function (y) {
                    return (y || d).stringify(this);
                  },
                  concat: function (y) {
                    var g = this.words,
                      E = y.words,
                      C = this.sigBytes,
                      B = y.sigBytes;
                    if ((this.clamp(), C % 4))
                      for (var v = 0; v < B; v++) {
                        var D = (E[v >>> 2] >>> (24 - (v % 4) * 8)) & 255;
                        g[(C + v) >>> 2] |= D << (24 - ((C + v) % 4) * 8);
                      }
                    else
                      for (var P = 0; P < B; P += 4)
                        g[(C + P) >>> 2] = E[P >>> 2];
                    return (this.sigBytes += B), this;
                  },
                  clamp: function () {
                    var y = this.words,
                      g = this.sigBytes;
                    (y[g >>> 2] &= 4294967295 << (32 - (g % 4) * 8)),
                      (y.length = n.ceil(g / 4));
                  },
                  clone: function () {
                    var y = u.clone.call(this);
                    return (y.words = this.words.slice(0)), y;
                  },
                  random: function (y) {
                    for (var g = [], E = 0; E < y; E += 4) g.push(o());
                    return new h.init(g, y);
                  },
                })),
                f = (l.enc = {}),
                d = (f.Hex = {
                  stringify: function (y) {
                    for (
                      var g = y.words, E = y.sigBytes, C = [], B = 0;
                      B < E;
                      B++
                    ) {
                      var v = (g[B >>> 2] >>> (24 - (B % 4) * 8)) & 255;
                      C.push((v >>> 4).toString(16)),
                        C.push((v & 15).toString(16));
                    }
                    return C.join("");
                  },
                  parse: function (y) {
                    for (var g = y.length, E = [], C = 0; C < g; C += 2)
                      E[C >>> 3] |=
                        parseInt(y.substr(C, 2), 16) << (24 - (C % 8) * 4);
                    return new h.init(E, g / 2);
                  },
                }),
                p = (f.Latin1 = {
                  stringify: function (y) {
                    for (
                      var g = y.words, E = y.sigBytes, C = [], B = 0;
                      B < E;
                      B++
                    ) {
                      var v = (g[B >>> 2] >>> (24 - (B % 4) * 8)) & 255;
                      C.push(String.fromCharCode(v));
                    }
                    return C.join("");
                  },
                  parse: function (y) {
                    for (var g = y.length, E = [], C = 0; C < g; C++)
                      E[C >>> 2] |=
                        (y.charCodeAt(C) & 255) << (24 - (C % 4) * 8);
                    return new h.init(E, g);
                  },
                }),
                m = (f.Utf8 = {
                  stringify: function (y) {
                    try {
                      return decodeURIComponent(escape(p.stringify(y)));
                    } catch (g) {
                      throw new Error("Malformed UTF-8 data");
                    }
                  },
                  parse: function (y) {
                    return p.parse(unescape(encodeURIComponent(y)));
                  },
                }),
                x = (c.BufferedBlockAlgorithm = u.extend({
                  reset: function () {
                    (this._data = new h.init()), (this._nDataBytes = 0);
                  },
                  _append: function (y) {
                    typeof y == "string" && (y = m.parse(y)),
                      this._data.concat(y),
                      (this._nDataBytes += y.sigBytes);
                  },
                  _process: function (y) {
                    var g,
                      E = this._data,
                      C = E.words,
                      B = E.sigBytes,
                      v = this.blockSize,
                      D = v * 4,
                      P = B / D;
                    y
                      ? (P = n.ceil(P))
                      : (P = n.max((P | 0) - this._minBufferSize, 0));
                    var A = P * v,
                      S = n.min(A * 4, B);
                    if (A) {
                      for (var k = 0; k < A; k += v) this._doProcessBlock(C, k);
                      (g = C.splice(0, A)), (E.sigBytes -= S);
                    }
                    return new h.init(g, S);
                  },
                  clone: function () {
                    var y = u.clone.call(this);
                    return (y._data = this._data.clone()), y;
                  },
                  _minBufferSize: 0,
                }));
              c.Hasher = x.extend({
                cfg: u.extend(),
                init: function (y) {
                  (this.cfg = this.cfg.extend(y)), this.reset();
                },
                reset: function () {
                  x.reset.call(this), this._doReset();
                },
                update: function (y) {
                  return this._append(y), this._process(), this;
                },
                finalize: function (y) {
                  y && this._append(y);
                  var g = this._doFinalize();
                  return g;
                },
                blockSize: 16,
                _createHelper: function (y) {
                  return function (g, E) {
                    return new y.init(E).finalize(g);
                  };
                },
                _createHmacHelper: function (y) {
                  return function (g, E) {
                    return new b.HMAC.init(y, E).finalize(g);
                  };
                },
              });
              var b = (l.algo = {});
              return l;
            })(Math);
          return r;
        });
      })(_n)),
    _n.exports
  );
}
var Tn = { exports: {} },
  Ah = Tn.exports,
  wa;
function Ti() {
  return (
    wa ||
      ((wa = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(ce());
        })(Ah, function (r) {
          return (
            (function (n) {
              var i = r,
                s = i.lib,
                o = s.Base,
                a = s.WordArray,
                l = (i.x64 = {});
              (l.Word = o.extend({
                init: function (c, u) {
                  (this.high = c), (this.low = u);
                },
              })),
                (l.WordArray = o.extend({
                  init: function (c, u) {
                    (c = this.words = c || []),
                      u != n
                        ? (this.sigBytes = u)
                        : (this.sigBytes = c.length * 8);
                  },
                  toX32: function () {
                    for (
                      var c = this.words, u = c.length, h = [], f = 0;
                      f < u;
                      f++
                    ) {
                      var d = c[f];
                      h.push(d.high), h.push(d.low);
                    }
                    return a.create(h, this.sigBytes);
                  },
                  clone: function () {
                    for (
                      var c = o.clone.call(this),
                        u = (c.words = this.words.slice(0)),
                        h = u.length,
                        f = 0;
                      f < h;
                      f++
                    )
                      u[f] = u[f].clone();
                    return c;
                  },
                }));
            })(),
            r
          );
        });
      })(Tn)),
    Tn.exports
  );
}
var Rn = { exports: {} },
  Bh = Rn.exports,
  Da;
function wh() {
  return (
    Da ||
      ((Da = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(ce());
        })(Bh, function (r) {
          return (
            (function () {
              if (typeof ArrayBuffer == "function") {
                var n = r,
                  i = n.lib,
                  s = i.WordArray,
                  o = s.init,
                  a = (s.init = function (l) {
                    if (
                      (l instanceof ArrayBuffer && (l = new Uint8Array(l)),
                      (l instanceof Int8Array ||
                        (typeof Uint8ClampedArray != "undefined" &&
                          l instanceof Uint8ClampedArray) ||
                        l instanceof Int16Array ||
                        l instanceof Uint16Array ||
                        l instanceof Int32Array ||
                        l instanceof Uint32Array ||
                        l instanceof Float32Array ||
                        l instanceof Float64Array) &&
                        (l = new Uint8Array(
                          l.buffer,
                          l.byteOffset,
                          l.byteLength,
                        )),
                      l instanceof Uint8Array)
                    ) {
                      for (var c = l.byteLength, u = [], h = 0; h < c; h++)
                        u[h >>> 2] |= l[h] << (24 - (h % 4) * 8);
                      o.call(this, u, c);
                    } else o.apply(this, arguments);
                  });
                a.prototype = s;
              }
            })(),
            r.lib.WordArray
          );
        });
      })(Rn)),
    Rn.exports
  );
}
var Pn = { exports: {} },
  Dh = Pn.exports,
  Fa;
function Fh() {
  return (
    Fa ||
      ((Fa = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(ce());
        })(Dh, function (r) {
          return (
            (function () {
              var n = r,
                i = n.lib,
                s = i.WordArray,
                o = n.enc;
              (o.Utf16 = o.Utf16BE =
                {
                  stringify: function (l) {
                    for (
                      var c = l.words, u = l.sigBytes, h = [], f = 0;
                      f < u;
                      f += 2
                    ) {
                      var d = (c[f >>> 2] >>> (16 - (f % 4) * 8)) & 65535;
                      h.push(String.fromCharCode(d));
                    }
                    return h.join("");
                  },
                  parse: function (l) {
                    for (var c = l.length, u = [], h = 0; h < c; h++)
                      u[h >>> 1] |= l.charCodeAt(h) << (16 - (h % 2) * 16);
                    return s.create(u, c * 2);
                  },
                }),
                (o.Utf16LE = {
                  stringify: function (l) {
                    for (
                      var c = l.words, u = l.sigBytes, h = [], f = 0;
                      f < u;
                      f += 2
                    ) {
                      var d = a((c[f >>> 2] >>> (16 - (f % 4) * 8)) & 65535);
                      h.push(String.fromCharCode(d));
                    }
                    return h.join("");
                  },
                  parse: function (l) {
                    for (var c = l.length, u = [], h = 0; h < c; h++)
                      u[h >>> 1] |= a(l.charCodeAt(h) << (16 - (h % 2) * 16));
                    return s.create(u, c * 2);
                  },
                });
              function a(l) {
                return ((l << 8) & 4278255360) | ((l >>> 8) & 16711935);
              }
            })(),
            r.enc.Utf16
          );
        });
      })(Pn)),
    Pn.exports
  );
}
var kn = { exports: {} },
  Sh = kn.exports,
  Sa;
function Xt() {
  return (
    Sa ||
      ((Sa = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(ce());
        })(Sh, function (r) {
          return (
            (function () {
              var n = r,
                i = n.lib,
                s = i.WordArray,
                o = n.enc;
              o.Base64 = {
                stringify: function (l) {
                  var c = l.words,
                    u = l.sigBytes,
                    h = this._map;
                  l.clamp();
                  for (var f = [], d = 0; d < u; d += 3)
                    for (
                      var p = (c[d >>> 2] >>> (24 - (d % 4) * 8)) & 255,
                        m =
                          (c[(d + 1) >>> 2] >>> (24 - ((d + 1) % 4) * 8)) & 255,
                        x =
                          (c[(d + 2) >>> 2] >>> (24 - ((d + 2) % 4) * 8)) & 255,
                        b = (p << 16) | (m << 8) | x,
                        y = 0;
                      y < 4 && d + y * 0.75 < u;
                      y++
                    )
                      f.push(h.charAt((b >>> (6 * (3 - y))) & 63));
                  var g = h.charAt(64);
                  if (g) for (; f.length % 4; ) f.push(g);
                  return f.join("");
                },
                parse: function (l) {
                  var c = l.length,
                    u = this._map,
                    h = this._reverseMap;
                  if (!h) {
                    h = this._reverseMap = [];
                    for (var f = 0; f < u.length; f++) h[u.charCodeAt(f)] = f;
                  }
                  var d = u.charAt(64);
                  if (d) {
                    var p = l.indexOf(d);
                    p !== -1 && (c = p);
                  }
                  return a(l, c, h);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              };
              function a(l, c, u) {
                for (var h = [], f = 0, d = 0; d < c; d++)
                  if (d % 4) {
                    var p = u[l.charCodeAt(d - 1)] << ((d % 4) * 2),
                      m = u[l.charCodeAt(d)] >>> (6 - (d % 4) * 2),
                      x = p | m;
                    (h[f >>> 2] |= x << (24 - (f % 4) * 8)), f++;
                  }
                return s.create(h, f);
              }
            })(),
            r.enc.Base64
          );
        });
      })(kn)),
    kn.exports
  );
}
var Ln = { exports: {} },
  _h = Ln.exports,
  _a;
function Th() {
  return (
    _a ||
      ((_a = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(ce());
        })(_h, function (r) {
          return (
            (function () {
              var n = r,
                i = n.lib,
                s = i.WordArray,
                o = n.enc;
              o.Base64url = {
                stringify: function (l, c) {
                  c === void 0 && (c = !0);
                  var u = l.words,
                    h = l.sigBytes,
                    f = c ? this._safe_map : this._map;
                  l.clamp();
                  for (var d = [], p = 0; p < h; p += 3)
                    for (
                      var m = (u[p >>> 2] >>> (24 - (p % 4) * 8)) & 255,
                        x =
                          (u[(p + 1) >>> 2] >>> (24 - ((p + 1) % 4) * 8)) & 255,
                        b =
                          (u[(p + 2) >>> 2] >>> (24 - ((p + 2) % 4) * 8)) & 255,
                        y = (m << 16) | (x << 8) | b,
                        g = 0;
                      g < 4 && p + g * 0.75 < h;
                      g++
                    )
                      d.push(f.charAt((y >>> (6 * (3 - g))) & 63));
                  var E = f.charAt(64);
                  if (E) for (; d.length % 4; ) d.push(E);
                  return d.join("");
                },
                parse: function (l, c) {
                  c === void 0 && (c = !0);
                  var u = l.length,
                    h = c ? this._safe_map : this._map,
                    f = this._reverseMap;
                  if (!f) {
                    f = this._reverseMap = [];
                    for (var d = 0; d < h.length; d++) f[h.charCodeAt(d)] = d;
                  }
                  var p = h.charAt(64);
                  if (p) {
                    var m = l.indexOf(p);
                    m !== -1 && (u = m);
                  }
                  return a(l, u, f);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                _safe_map:
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
              };
              function a(l, c, u) {
                for (var h = [], f = 0, d = 0; d < c; d++)
                  if (d % 4) {
                    var p = u[l.charCodeAt(d - 1)] << ((d % 4) * 2),
                      m = u[l.charCodeAt(d)] >>> (6 - (d % 4) * 2),
                      x = p | m;
                    (h[f >>> 2] |= x << (24 - (f % 4) * 8)), f++;
                  }
                return s.create(h, f);
              }
            })(),
            r.enc.Base64url
          );
        });
      })(Ln)),
    Ln.exports
  );
}
var On = { exports: {} },
  Rh = On.exports,
  Ta;
function Gt() {
  return (
    Ta ||
      ((Ta = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(ce());
        })(Rh, function (r) {
          return (
            (function (n) {
              var i = r,
                s = i.lib,
                o = s.WordArray,
                a = s.Hasher,
                l = i.algo,
                c = [];
              (function () {
                for (var m = 0; m < 64; m++)
                  c[m] = (n.abs(n.sin(m + 1)) * 4294967296) | 0;
              })();
              var u = (l.MD5 = a.extend({
                _doReset: function () {
                  this._hash = new o.init([
                    1732584193, 4023233417, 2562383102, 271733878,
                  ]);
                },
                _doProcessBlock: function (m, x) {
                  for (var b = 0; b < 16; b++) {
                    var y = x + b,
                      g = m[y];
                    m[y] =
                      (((g << 8) | (g >>> 24)) & 16711935) |
                      (((g << 24) | (g >>> 8)) & 4278255360);
                  }
                  var E = this._hash.words,
                    C = m[x + 0],
                    B = m[x + 1],
                    v = m[x + 2],
                    D = m[x + 3],
                    P = m[x + 4],
                    A = m[x + 5],
                    S = m[x + 6],
                    k = m[x + 7],
                    L = m[x + 8],
                    z = m[x + 9],
                    $ = m[x + 10],
                    O = m[x + 11],
                    H = m[x + 12],
                    N = m[x + 13],
                    W = m[x + 14],
                    X = m[x + 15],
                    R = E[0],
                    V = E[1],
                    I = E[2],
                    M = E[3];
                  (R = h(R, V, I, M, C, 7, c[0])),
                    (M = h(M, R, V, I, B, 12, c[1])),
                    (I = h(I, M, R, V, v, 17, c[2])),
                    (V = h(V, I, M, R, D, 22, c[3])),
                    (R = h(R, V, I, M, P, 7, c[4])),
                    (M = h(M, R, V, I, A, 12, c[5])),
                    (I = h(I, M, R, V, S, 17, c[6])),
                    (V = h(V, I, M, R, k, 22, c[7])),
                    (R = h(R, V, I, M, L, 7, c[8])),
                    (M = h(M, R, V, I, z, 12, c[9])),
                    (I = h(I, M, R, V, $, 17, c[10])),
                    (V = h(V, I, M, R, O, 22, c[11])),
                    (R = h(R, V, I, M, H, 7, c[12])),
                    (M = h(M, R, V, I, N, 12, c[13])),
                    (I = h(I, M, R, V, W, 17, c[14])),
                    (V = h(V, I, M, R, X, 22, c[15])),
                    (R = f(R, V, I, M, B, 5, c[16])),
                    (M = f(M, R, V, I, S, 9, c[17])),
                    (I = f(I, M, R, V, O, 14, c[18])),
                    (V = f(V, I, M, R, C, 20, c[19])),
                    (R = f(R, V, I, M, A, 5, c[20])),
                    (M = f(M, R, V, I, $, 9, c[21])),
                    (I = f(I, M, R, V, X, 14, c[22])),
                    (V = f(V, I, M, R, P, 20, c[23])),
                    (R = f(R, V, I, M, z, 5, c[24])),
                    (M = f(M, R, V, I, W, 9, c[25])),
                    (I = f(I, M, R, V, D, 14, c[26])),
                    (V = f(V, I, M, R, L, 20, c[27])),
                    (R = f(R, V, I, M, N, 5, c[28])),
                    (M = f(M, R, V, I, v, 9, c[29])),
                    (I = f(I, M, R, V, k, 14, c[30])),
                    (V = f(V, I, M, R, H, 20, c[31])),
                    (R = d(R, V, I, M, A, 4, c[32])),
                    (M = d(M, R, V, I, L, 11, c[33])),
                    (I = d(I, M, R, V, O, 16, c[34])),
                    (V = d(V, I, M, R, W, 23, c[35])),
                    (R = d(R, V, I, M, B, 4, c[36])),
                    (M = d(M, R, V, I, P, 11, c[37])),
                    (I = d(I, M, R, V, k, 16, c[38])),
                    (V = d(V, I, M, R, $, 23, c[39])),
                    (R = d(R, V, I, M, N, 4, c[40])),
                    (M = d(M, R, V, I, C, 11, c[41])),
                    (I = d(I, M, R, V, D, 16, c[42])),
                    (V = d(V, I, M, R, S, 23, c[43])),
                    (R = d(R, V, I, M, z, 4, c[44])),
                    (M = d(M, R, V, I, H, 11, c[45])),
                    (I = d(I, M, R, V, X, 16, c[46])),
                    (V = d(V, I, M, R, v, 23, c[47])),
                    (R = p(R, V, I, M, C, 6, c[48])),
                    (M = p(M, R, V, I, k, 10, c[49])),
                    (I = p(I, M, R, V, W, 15, c[50])),
                    (V = p(V, I, M, R, A, 21, c[51])),
                    (R = p(R, V, I, M, H, 6, c[52])),
                    (M = p(M, R, V, I, D, 10, c[53])),
                    (I = p(I, M, R, V, $, 15, c[54])),
                    (V = p(V, I, M, R, B, 21, c[55])),
                    (R = p(R, V, I, M, L, 6, c[56])),
                    (M = p(M, R, V, I, X, 10, c[57])),
                    (I = p(I, M, R, V, S, 15, c[58])),
                    (V = p(V, I, M, R, N, 21, c[59])),
                    (R = p(R, V, I, M, P, 6, c[60])),
                    (M = p(M, R, V, I, O, 10, c[61])),
                    (I = p(I, M, R, V, v, 15, c[62])),
                    (V = p(V, I, M, R, z, 21, c[63])),
                    (E[0] = (E[0] + R) | 0),
                    (E[1] = (E[1] + V) | 0),
                    (E[2] = (E[2] + I) | 0),
                    (E[3] = (E[3] + M) | 0);
                },
                _doFinalize: function () {
                  var m = this._data,
                    x = m.words,
                    b = this._nDataBytes * 8,
                    y = m.sigBytes * 8;
                  x[y >>> 5] |= 128 << (24 - (y % 32));
                  var g = n.floor(b / 4294967296),
                    E = b;
                  (x[(((y + 64) >>> 9) << 4) + 15] =
                    (((g << 8) | (g >>> 24)) & 16711935) |
                    (((g << 24) | (g >>> 8)) & 4278255360)),
                    (x[(((y + 64) >>> 9) << 4) + 14] =
                      (((E << 8) | (E >>> 24)) & 16711935) |
                      (((E << 24) | (E >>> 8)) & 4278255360)),
                    (m.sigBytes = (x.length + 1) * 4),
                    this._process();
                  for (var C = this._hash, B = C.words, v = 0; v < 4; v++) {
                    var D = B[v];
                    B[v] =
                      (((D << 8) | (D >>> 24)) & 16711935) |
                      (((D << 24) | (D >>> 8)) & 4278255360);
                  }
                  return C;
                },
                clone: function () {
                  var m = a.clone.call(this);
                  return (m._hash = this._hash.clone()), m;
                },
              }));
              function h(m, x, b, y, g, E, C) {
                var B = m + ((x & b) | (~x & y)) + g + C;
                return ((B << E) | (B >>> (32 - E))) + x;
              }
              function f(m, x, b, y, g, E, C) {
                var B = m + ((x & y) | (b & ~y)) + g + C;
                return ((B << E) | (B >>> (32 - E))) + x;
              }
              function d(m, x, b, y, g, E, C) {
                var B = m + (x ^ b ^ y) + g + C;
                return ((B << E) | (B >>> (32 - E))) + x;
              }
              function p(m, x, b, y, g, E, C) {
                var B = m + (b ^ (x | ~y)) + g + C;
                return ((B << E) | (B >>> (32 - E))) + x;
              }
              (i.MD5 = a._createHelper(u)),
                (i.HmacMD5 = a._createHmacHelper(u));
            })(Math),
            r.MD5
          );
        });
      })(On)),
    On.exports
  );
}
var Mn = { exports: {} },
  Ph = Mn.exports,
  Ra;
function Gc() {
  return (
    Ra ||
      ((Ra = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(ce());
        })(Ph, function (r) {
          return (
            (function () {
              var n = r,
                i = n.lib,
                s = i.WordArray,
                o = i.Hasher,
                a = n.algo,
                l = [],
                c = (a.SHA1 = o.extend({
                  _doReset: function () {
                    this._hash = new s.init([
                      1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                    ]);
                  },
                  _doProcessBlock: function (u, h) {
                    for (
                      var f = this._hash.words,
                        d = f[0],
                        p = f[1],
                        m = f[2],
                        x = f[3],
                        b = f[4],
                        y = 0;
                      y < 80;
                      y++
                    ) {
                      if (y < 16) l[y] = u[h + y] | 0;
                      else {
                        var g = l[y - 3] ^ l[y - 8] ^ l[y - 14] ^ l[y - 16];
                        l[y] = (g << 1) | (g >>> 31);
                      }
                      var E = ((d << 5) | (d >>> 27)) + b + l[y];
                      y < 20
                        ? (E += ((p & m) | (~p & x)) + 1518500249)
                        : y < 40
                          ? (E += (p ^ m ^ x) + 1859775393)
                          : y < 60
                            ? (E += ((p & m) | (p & x) | (m & x)) - 1894007588)
                            : (E += (p ^ m ^ x) - 899497514),
                        (b = x),
                        (x = m),
                        (m = (p << 30) | (p >>> 2)),
                        (p = d),
                        (d = E);
                    }
                    (f[0] = (f[0] + d) | 0),
                      (f[1] = (f[1] + p) | 0),
                      (f[2] = (f[2] + m) | 0),
                      (f[3] = (f[3] + x) | 0),
                      (f[4] = (f[4] + b) | 0);
                  },
                  _doFinalize: function () {
                    var u = this._data,
                      h = u.words,
                      f = this._nDataBytes * 8,
                      d = u.sigBytes * 8;
                    return (
                      (h[d >>> 5] |= 128 << (24 - (d % 32))),
                      (h[(((d + 64) >>> 9) << 4) + 14] = Math.floor(
                        f / 4294967296,
                      )),
                      (h[(((d + 64) >>> 9) << 4) + 15] = f),
                      (u.sigBytes = h.length * 4),
                      this._process(),
                      this._hash
                    );
                  },
                  clone: function () {
                    var u = o.clone.call(this);
                    return (u._hash = this._hash.clone()), u;
                  },
                }));
              (n.SHA1 = o._createHelper(c)),
                (n.HmacSHA1 = o._createHmacHelper(c));
            })(),
            r.SHA1
          );
        });
      })(Mn)),
    Mn.exports
  );
}
var Vn = { exports: {} },
  kh = Vn.exports,
  Pa;
function ao() {
  return (
    Pa ||
      ((Pa = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(ce());
        })(kh, function (r) {
          return (
            (function (n) {
              var i = r,
                s = i.lib,
                o = s.WordArray,
                a = s.Hasher,
                l = i.algo,
                c = [],
                u = [];
              (function () {
                function d(b) {
                  for (var y = n.sqrt(b), g = 2; g <= y; g++)
                    if (!(b % g)) return !1;
                  return !0;
                }
                function p(b) {
                  return ((b - (b | 0)) * 4294967296) | 0;
                }
                for (var m = 2, x = 0; x < 64; )
                  d(m) &&
                    (x < 8 && (c[x] = p(n.pow(m, 1 / 2))),
                    (u[x] = p(n.pow(m, 1 / 3))),
                    x++),
                    m++;
              })();
              var h = [],
                f = (l.SHA256 = a.extend({
                  _doReset: function () {
                    this._hash = new o.init(c.slice(0));
                  },
                  _doProcessBlock: function (d, p) {
                    for (
                      var m = this._hash.words,
                        x = m[0],
                        b = m[1],
                        y = m[2],
                        g = m[3],
                        E = m[4],
                        C = m[5],
                        B = m[6],
                        v = m[7],
                        D = 0;
                      D < 64;
                      D++
                    ) {
                      if (D < 16) h[D] = d[p + D] | 0;
                      else {
                        var P = h[D - 15],
                          A =
                            ((P << 25) | (P >>> 7)) ^
                            ((P << 14) | (P >>> 18)) ^
                            (P >>> 3),
                          S = h[D - 2],
                          k =
                            ((S << 15) | (S >>> 17)) ^
                            ((S << 13) | (S >>> 19)) ^
                            (S >>> 10);
                        h[D] = A + h[D - 7] + k + h[D - 16];
                      }
                      var L = (E & C) ^ (~E & B),
                        z = (x & b) ^ (x & y) ^ (b & y),
                        $ =
                          ((x << 30) | (x >>> 2)) ^
                          ((x << 19) | (x >>> 13)) ^
                          ((x << 10) | (x >>> 22)),
                        O =
                          ((E << 26) | (E >>> 6)) ^
                          ((E << 21) | (E >>> 11)) ^
                          ((E << 7) | (E >>> 25)),
                        H = v + O + L + u[D] + h[D],
                        N = $ + z;
                      (v = B),
                        (B = C),
                        (C = E),
                        (E = (g + H) | 0),
                        (g = y),
                        (y = b),
                        (b = x),
                        (x = (H + N) | 0);
                    }
                    (m[0] = (m[0] + x) | 0),
                      (m[1] = (m[1] + b) | 0),
                      (m[2] = (m[2] + y) | 0),
                      (m[3] = (m[3] + g) | 0),
                      (m[4] = (m[4] + E) | 0),
                      (m[5] = (m[5] + C) | 0),
                      (m[6] = (m[6] + B) | 0),
                      (m[7] = (m[7] + v) | 0);
                  },
                  _doFinalize: function () {
                    var d = this._data,
                      p = d.words,
                      m = this._nDataBytes * 8,
                      x = d.sigBytes * 8;
                    return (
                      (p[x >>> 5] |= 128 << (24 - (x % 32))),
                      (p[(((x + 64) >>> 9) << 4) + 14] = n.floor(
                        m / 4294967296,
                      )),
                      (p[(((x + 64) >>> 9) << 4) + 15] = m),
                      (d.sigBytes = p.length * 4),
                      this._process(),
                      this._hash
                    );
                  },
                  clone: function () {
                    var d = a.clone.call(this);
                    return (d._hash = this._hash.clone()), d;
                  },
                }));
              (i.SHA256 = a._createHelper(f)),
                (i.HmacSHA256 = a._createHmacHelper(f));
            })(Math),
            r.SHA256
          );
        });
      })(Vn)),
    Vn.exports
  );
}
var Nn = { exports: {} },
  Lh = Nn.exports,
  ka;
function Oh() {
  return (
    ka ||
      ((ka = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), ao());
        })(Lh, function (r) {
          return (
            (function () {
              var n = r,
                i = n.lib,
                s = i.WordArray,
                o = n.algo,
                a = o.SHA256,
                l = (o.SHA224 = a.extend({
                  _doReset: function () {
                    this._hash = new s.init([
                      3238371032, 914150663, 812702999, 4144912697, 4290775857,
                      1750603025, 1694076839, 3204075428,
                    ]);
                  },
                  _doFinalize: function () {
                    var c = a._doFinalize.call(this);
                    return (c.sigBytes -= 4), c;
                  },
                }));
              (n.SHA224 = a._createHelper(l)),
                (n.HmacSHA224 = a._createHmacHelper(l));
            })(),
            r.SHA224
          );
        });
      })(Nn)),
    Nn.exports
  );
}
var In = { exports: {} },
  Mh = In.exports,
  La;
function Yc() {
  return (
    La ||
      ((La = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Ti());
        })(Mh, function (r) {
          return (
            (function () {
              var n = r,
                i = n.lib,
                s = i.Hasher,
                o = n.x64,
                a = o.Word,
                l = o.WordArray,
                c = n.algo;
              function u() {
                return a.create.apply(a, arguments);
              }
              var h = [
                  u(1116352408, 3609767458),
                  u(1899447441, 602891725),
                  u(3049323471, 3964484399),
                  u(3921009573, 2173295548),
                  u(961987163, 4081628472),
                  u(1508970993, 3053834265),
                  u(2453635748, 2937671579),
                  u(2870763221, 3664609560),
                  u(3624381080, 2734883394),
                  u(310598401, 1164996542),
                  u(607225278, 1323610764),
                  u(1426881987, 3590304994),
                  u(1925078388, 4068182383),
                  u(2162078206, 991336113),
                  u(2614888103, 633803317),
                  u(3248222580, 3479774868),
                  u(3835390401, 2666613458),
                  u(4022224774, 944711139),
                  u(264347078, 2341262773),
                  u(604807628, 2007800933),
                  u(770255983, 1495990901),
                  u(1249150122, 1856431235),
                  u(1555081692, 3175218132),
                  u(1996064986, 2198950837),
                  u(2554220882, 3999719339),
                  u(2821834349, 766784016),
                  u(2952996808, 2566594879),
                  u(3210313671, 3203337956),
                  u(3336571891, 1034457026),
                  u(3584528711, 2466948901),
                  u(113926993, 3758326383),
                  u(338241895, 168717936),
                  u(666307205, 1188179964),
                  u(773529912, 1546045734),
                  u(1294757372, 1522805485),
                  u(1396182291, 2643833823),
                  u(1695183700, 2343527390),
                  u(1986661051, 1014477480),
                  u(2177026350, 1206759142),
                  u(2456956037, 344077627),
                  u(2730485921, 1290863460),
                  u(2820302411, 3158454273),
                  u(3259730800, 3505952657),
                  u(3345764771, 106217008),
                  u(3516065817, 3606008344),
                  u(3600352804, 1432725776),
                  u(4094571909, 1467031594),
                  u(275423344, 851169720),
                  u(430227734, 3100823752),
                  u(506948616, 1363258195),
                  u(659060556, 3750685593),
                  u(883997877, 3785050280),
                  u(958139571, 3318307427),
                  u(1322822218, 3812723403),
                  u(1537002063, 2003034995),
                  u(1747873779, 3602036899),
                  u(1955562222, 1575990012),
                  u(2024104815, 1125592928),
                  u(2227730452, 2716904306),
                  u(2361852424, 442776044),
                  u(2428436474, 593698344),
                  u(2756734187, 3733110249),
                  u(3204031479, 2999351573),
                  u(3329325298, 3815920427),
                  u(3391569614, 3928383900),
                  u(3515267271, 566280711),
                  u(3940187606, 3454069534),
                  u(4118630271, 4000239992),
                  u(116418474, 1914138554),
                  u(174292421, 2731055270),
                  u(289380356, 3203993006),
                  u(460393269, 320620315),
                  u(685471733, 587496836),
                  u(852142971, 1086792851),
                  u(1017036298, 365543100),
                  u(1126000580, 2618297676),
                  u(1288033470, 3409855158),
                  u(1501505948, 4234509866),
                  u(1607167915, 987167468),
                  u(1816402316, 1246189591),
                ],
                f = [];
              (function () {
                for (var p = 0; p < 80; p++) f[p] = u();
              })();
              var d = (c.SHA512 = s.extend({
                _doReset: function () {
                  this._hash = new l.init([
                    new a.init(1779033703, 4089235720),
                    new a.init(3144134277, 2227873595),
                    new a.init(1013904242, 4271175723),
                    new a.init(2773480762, 1595750129),
                    new a.init(1359893119, 2917565137),
                    new a.init(2600822924, 725511199),
                    new a.init(528734635, 4215389547),
                    new a.init(1541459225, 327033209),
                  ]);
                },
                _doProcessBlock: function (p, m) {
                  for (
                    var x = this._hash.words,
                      b = x[0],
                      y = x[1],
                      g = x[2],
                      E = x[3],
                      C = x[4],
                      B = x[5],
                      v = x[6],
                      D = x[7],
                      P = b.high,
                      A = b.low,
                      S = y.high,
                      k = y.low,
                      L = g.high,
                      z = g.low,
                      $ = E.high,
                      O = E.low,
                      H = C.high,
                      N = C.low,
                      W = B.high,
                      X = B.low,
                      R = v.high,
                      V = v.low,
                      I = D.high,
                      M = D.low,
                      re = P,
                      le = A,
                      ve = S,
                      ne = k,
                      _t = L,
                      vt = z,
                      wr = $,
                      Ae = O,
                      Te = H,
                      Le = N,
                      Yt = W,
                      ze = X,
                      Zt = R,
                      Tt = V,
                      Qt = I,
                      Rt = M,
                      qe = 0;
                    qe < 80;
                    qe++
                  ) {
                    var Ne,
                      st,
                      We = f[qe];
                    if (qe < 16)
                      (st = We.high = p[m + qe * 2] | 0),
                        (Ne = We.low = p[m + qe * 2 + 1] | 0);
                    else {
                      var Et = f[qe - 15],
                        dt = Et.high,
                        pt = Et.low,
                        ot =
                          ((dt >>> 1) | (pt << 31)) ^
                          ((dt >>> 8) | (pt << 24)) ^
                          (dt >>> 7),
                        Ke =
                          ((pt >>> 1) | (dt << 31)) ^
                          ((pt >>> 8) | (dt << 24)) ^
                          ((pt >>> 7) | (dt << 25)),
                        Dr = f[qe - 2],
                        et = Dr.high,
                        Pt = Dr.low,
                        at =
                          ((et >>> 19) | (Pt << 13)) ^
                          ((et << 3) | (Pt >>> 29)) ^
                          (et >>> 6),
                        Fr =
                          ((Pt >>> 19) | (et << 13)) ^
                          ((Pt << 3) | (et >>> 29)) ^
                          ((Pt >>> 6) | (et << 26)),
                        Sr = f[qe - 7],
                        dn = Sr.high,
                        ji = Sr.low,
                        _r = f[qe - 16],
                        Jt = _r.high,
                        Tr = _r.low;
                      (Ne = Ke + ji),
                        (st = ot + dn + (Ne >>> 0 < Ke >>> 0 ? 1 : 0)),
                        (Ne = Ne + Fr),
                        (st = st + at + (Ne >>> 0 < Fr >>> 0 ? 1 : 0)),
                        (Ne = Ne + Tr),
                        (st = st + Jt + (Ne >>> 0 < Tr >>> 0 ? 1 : 0)),
                        (We.high = st),
                        (We.low = Ne);
                    }
                    var Rr = (Te & Yt) ^ (~Te & Zt),
                      er = (Le & ze) ^ (~Le & Tt),
                      zi = (re & ve) ^ (re & _t) ^ (ve & _t),
                      pn = (le & ne) ^ (le & vt) ^ (ne & vt),
                      qi =
                        ((re >>> 28) | (le << 4)) ^
                        ((re << 30) | (le >>> 2)) ^
                        ((re << 25) | (le >>> 7)),
                      Pr =
                        ((le >>> 28) | (re << 4)) ^
                        ((le << 30) | (re >>> 2)) ^
                        ((le << 25) | (re >>> 7)),
                      tr =
                        ((Te >>> 14) | (Le << 18)) ^
                        ((Te >>> 18) | (Le << 14)) ^
                        ((Te << 23) | (Le >>> 9)),
                      rr =
                        ((Le >>> 14) | (Te << 18)) ^
                        ((Le >>> 18) | (Te << 14)) ^
                        ((Le << 23) | (Te >>> 9)),
                      xn = h[qe],
                      $i = xn.high,
                      w = xn.low,
                      F = Rt + rr,
                      _ = Qt + tr + (F >>> 0 < Rt >>> 0 ? 1 : 0),
                      F = F + er,
                      _ = _ + Rr + (F >>> 0 < er >>> 0 ? 1 : 0),
                      F = F + w,
                      _ = _ + $i + (F >>> 0 < w >>> 0 ? 1 : 0),
                      F = F + Ne,
                      _ = _ + st + (F >>> 0 < Ne >>> 0 ? 1 : 0),
                      U = Pr + pn,
                      q = qi + zi + (U >>> 0 < Pr >>> 0 ? 1 : 0);
                    (Qt = Zt),
                      (Rt = Tt),
                      (Zt = Yt),
                      (Tt = ze),
                      (Yt = Te),
                      (ze = Le),
                      (Le = (Ae + F) | 0),
                      (Te = (wr + _ + (Le >>> 0 < Ae >>> 0 ? 1 : 0)) | 0),
                      (wr = _t),
                      (Ae = vt),
                      (_t = ve),
                      (vt = ne),
                      (ve = re),
                      (ne = le),
                      (le = (F + U) | 0),
                      (re = (_ + q + (le >>> 0 < F >>> 0 ? 1 : 0)) | 0);
                  }
                  (A = b.low = A + le),
                    (b.high = P + re + (A >>> 0 < le >>> 0 ? 1 : 0)),
                    (k = y.low = k + ne),
                    (y.high = S + ve + (k >>> 0 < ne >>> 0 ? 1 : 0)),
                    (z = g.low = z + vt),
                    (g.high = L + _t + (z >>> 0 < vt >>> 0 ? 1 : 0)),
                    (O = E.low = O + Ae),
                    (E.high = $ + wr + (O >>> 0 < Ae >>> 0 ? 1 : 0)),
                    (N = C.low = N + Le),
                    (C.high = H + Te + (N >>> 0 < Le >>> 0 ? 1 : 0)),
                    (X = B.low = X + ze),
                    (B.high = W + Yt + (X >>> 0 < ze >>> 0 ? 1 : 0)),
                    (V = v.low = V + Tt),
                    (v.high = R + Zt + (V >>> 0 < Tt >>> 0 ? 1 : 0)),
                    (M = D.low = M + Rt),
                    (D.high = I + Qt + (M >>> 0 < Rt >>> 0 ? 1 : 0));
                },
                _doFinalize: function () {
                  var p = this._data,
                    m = p.words,
                    x = this._nDataBytes * 8,
                    b = p.sigBytes * 8;
                  (m[b >>> 5] |= 128 << (24 - (b % 32))),
                    (m[(((b + 128) >>> 10) << 5) + 30] = Math.floor(
                      x / 4294967296,
                    )),
                    (m[(((b + 128) >>> 10) << 5) + 31] = x),
                    (p.sigBytes = m.length * 4),
                    this._process();
                  var y = this._hash.toX32();
                  return y;
                },
                clone: function () {
                  var p = s.clone.call(this);
                  return (p._hash = this._hash.clone()), p;
                },
                blockSize: 1024 / 32,
              }));
              (n.SHA512 = s._createHelper(d)),
                (n.HmacSHA512 = s._createHmacHelper(d));
            })(),
            r.SHA512
          );
        });
      })(In)),
    In.exports
  );
}
var Un = { exports: {} },
  Vh = Un.exports,
  Oa;
function Nh() {
  return (
    Oa ||
      ((Oa = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Ti(), Yc());
        })(Vh, function (r) {
          return (
            (function () {
              var n = r,
                i = n.x64,
                s = i.Word,
                o = i.WordArray,
                a = n.algo,
                l = a.SHA512,
                c = (a.SHA384 = l.extend({
                  _doReset: function () {
                    this._hash = new o.init([
                      new s.init(3418070365, 3238371032),
                      new s.init(1654270250, 914150663),
                      new s.init(2438529370, 812702999),
                      new s.init(355462360, 4144912697),
                      new s.init(1731405415, 4290775857),
                      new s.init(2394180231, 1750603025),
                      new s.init(3675008525, 1694076839),
                      new s.init(1203062813, 3204075428),
                    ]);
                  },
                  _doFinalize: function () {
                    var u = l._doFinalize.call(this);
                    return (u.sigBytes -= 16), u;
                  },
                }));
              (n.SHA384 = l._createHelper(c)),
                (n.HmacSHA384 = l._createHmacHelper(c));
            })(),
            r.SHA384
          );
        });
      })(Un)),
    Un.exports
  );
}
var Hn = { exports: {} },
  Ih = Hn.exports,
  Ma;
function Uh() {
  return (
    Ma ||
      ((Ma = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Ti());
        })(Ih, function (r) {
          return (
            (function (n) {
              var i = r,
                s = i.lib,
                o = s.WordArray,
                a = s.Hasher,
                l = i.x64,
                c = l.Word,
                u = i.algo,
                h = [],
                f = [],
                d = [];
              (function () {
                for (var x = 1, b = 0, y = 0; y < 24; y++) {
                  h[x + 5 * b] = (((y + 1) * (y + 2)) / 2) % 64;
                  var g = b % 5,
                    E = (2 * x + 3 * b) % 5;
                  (x = g), (b = E);
                }
                for (var x = 0; x < 5; x++)
                  for (var b = 0; b < 5; b++)
                    f[x + 5 * b] = b + ((2 * x + 3 * b) % 5) * 5;
                for (var C = 1, B = 0; B < 24; B++) {
                  for (var v = 0, D = 0, P = 0; P < 7; P++) {
                    if (C & 1) {
                      var A = (1 << P) - 1;
                      A < 32 ? (D ^= 1 << A) : (v ^= 1 << (A - 32));
                    }
                    C & 128 ? (C = (C << 1) ^ 113) : (C <<= 1);
                  }
                  d[B] = c.create(v, D);
                }
              })();
              var p = [];
              (function () {
                for (var x = 0; x < 25; x++) p[x] = c.create();
              })();
              var m = (u.SHA3 = a.extend({
                cfg: a.cfg.extend({ outputLength: 512 }),
                _doReset: function () {
                  for (var x = (this._state = []), b = 0; b < 25; b++)
                    x[b] = new c.init();
                  this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
                },
                _doProcessBlock: function (x, b) {
                  for (
                    var y = this._state, g = this.blockSize / 2, E = 0;
                    E < g;
                    E++
                  ) {
                    var C = x[b + 2 * E],
                      B = x[b + 2 * E + 1];
                    (C =
                      (((C << 8) | (C >>> 24)) & 16711935) |
                      (((C << 24) | (C >>> 8)) & 4278255360)),
                      (B =
                        (((B << 8) | (B >>> 24)) & 16711935) |
                        (((B << 24) | (B >>> 8)) & 4278255360));
                    var v = y[E];
                    (v.high ^= B), (v.low ^= C);
                  }
                  for (var D = 0; D < 24; D++) {
                    for (var P = 0; P < 5; P++) {
                      for (var A = 0, S = 0, k = 0; k < 5; k++) {
                        var v = y[P + 5 * k];
                        (A ^= v.high), (S ^= v.low);
                      }
                      var L = p[P];
                      (L.high = A), (L.low = S);
                    }
                    for (var P = 0; P < 5; P++)
                      for (
                        var z = p[(P + 4) % 5],
                          $ = p[(P + 1) % 5],
                          O = $.high,
                          H = $.low,
                          A = z.high ^ ((O << 1) | (H >>> 31)),
                          S = z.low ^ ((H << 1) | (O >>> 31)),
                          k = 0;
                        k < 5;
                        k++
                      ) {
                        var v = y[P + 5 * k];
                        (v.high ^= A), (v.low ^= S);
                      }
                    for (var N = 1; N < 25; N++) {
                      var A,
                        S,
                        v = y[N],
                        W = v.high,
                        X = v.low,
                        R = h[N];
                      R < 32
                        ? ((A = (W << R) | (X >>> (32 - R))),
                          (S = (X << R) | (W >>> (32 - R))))
                        : ((A = (X << (R - 32)) | (W >>> (64 - R))),
                          (S = (W << (R - 32)) | (X >>> (64 - R))));
                      var V = p[f[N]];
                      (V.high = A), (V.low = S);
                    }
                    var I = p[0],
                      M = y[0];
                    (I.high = M.high), (I.low = M.low);
                    for (var P = 0; P < 5; P++)
                      for (var k = 0; k < 5; k++) {
                        var N = P + 5 * k,
                          v = y[N],
                          re = p[N],
                          le = p[((P + 1) % 5) + 5 * k],
                          ve = p[((P + 2) % 5) + 5 * k];
                        (v.high = re.high ^ (~le.high & ve.high)),
                          (v.low = re.low ^ (~le.low & ve.low));
                      }
                    var v = y[0],
                      ne = d[D];
                    (v.high ^= ne.high), (v.low ^= ne.low);
                  }
                },
                _doFinalize: function () {
                  var x = this._data,
                    b = x.words;
                  this._nDataBytes * 8;
                  var y = x.sigBytes * 8,
                    g = this.blockSize * 32;
                  (b[y >>> 5] |= 1 << (24 - (y % 32))),
                    (b[((n.ceil((y + 1) / g) * g) >>> 5) - 1] |= 128),
                    (x.sigBytes = b.length * 4),
                    this._process();
                  for (
                    var E = this._state,
                      C = this.cfg.outputLength / 8,
                      B = C / 8,
                      v = [],
                      D = 0;
                    D < B;
                    D++
                  ) {
                    var P = E[D],
                      A = P.high,
                      S = P.low;
                    (A =
                      (((A << 8) | (A >>> 24)) & 16711935) |
                      (((A << 24) | (A >>> 8)) & 4278255360)),
                      (S =
                        (((S << 8) | (S >>> 24)) & 16711935) |
                        (((S << 24) | (S >>> 8)) & 4278255360)),
                      v.push(S),
                      v.push(A);
                  }
                  return new o.init(v, C);
                },
                clone: function () {
                  for (
                    var x = a.clone.call(this),
                      b = (x._state = this._state.slice(0)),
                      y = 0;
                    y < 25;
                    y++
                  )
                    b[y] = b[y].clone();
                  return x;
                },
              }));
              (i.SHA3 = a._createHelper(m)),
                (i.HmacSHA3 = a._createHmacHelper(m));
            })(Math),
            r.SHA3
          );
        });
      })(Hn)),
    Hn.exports
  );
}
var jn = { exports: {} },
  Hh = jn.exports,
  Va;
function jh() {
  return (
    Va ||
      ((Va = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(ce());
        })(Hh, function (r) {
          /** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/ return (
            (function (n) {
              var i = r,
                s = i.lib,
                o = s.WordArray,
                a = s.Hasher,
                l = i.algo,
                c = o.create([
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4,
                  13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4,
                  9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8,
                  12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10,
                  14, 1, 3, 8, 11, 6, 15, 13,
                ]),
                u = o.create([
                  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11,
                  3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7,
                  14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15,
                  0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6,
                  2, 13, 14, 0, 3, 9, 11,
                ]),
                h = o.create([
                  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6,
                  8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6,
                  7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15,
                  14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8,
                  13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
                ]),
                f = o.create([
                  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13,
                  15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11,
                  8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14,
                  14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14,
                  6, 8, 13, 6, 5, 15, 13, 11, 11,
                ]),
                d = o.create([
                  0, 1518500249, 1859775393, 2400959708, 2840853838,
                ]),
                p = o.create([
                  1352829926, 1548603684, 1836072691, 2053994217, 0,
                ]),
                m = (l.RIPEMD160 = a.extend({
                  _doReset: function () {
                    this._hash = o.create([
                      1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                    ]);
                  },
                  _doProcessBlock: function (B, v) {
                    for (var D = 0; D < 16; D++) {
                      var P = v + D,
                        A = B[P];
                      B[P] =
                        (((A << 8) | (A >>> 24)) & 16711935) |
                        (((A << 24) | (A >>> 8)) & 4278255360);
                    }
                    var S = this._hash.words,
                      k = d.words,
                      L = p.words,
                      z = c.words,
                      $ = u.words,
                      O = h.words,
                      H = f.words,
                      N,
                      W,
                      X,
                      R,
                      V,
                      I,
                      M,
                      re,
                      le,
                      ve;
                    (I = N = S[0]),
                      (M = W = S[1]),
                      (re = X = S[2]),
                      (le = R = S[3]),
                      (ve = V = S[4]);
                    for (var ne, D = 0; D < 80; D += 1)
                      (ne = (N + B[v + z[D]]) | 0),
                        D < 16
                          ? (ne += x(W, X, R) + k[0])
                          : D < 32
                            ? (ne += b(W, X, R) + k[1])
                            : D < 48
                              ? (ne += y(W, X, R) + k[2])
                              : D < 64
                                ? (ne += g(W, X, R) + k[3])
                                : (ne += E(W, X, R) + k[4]),
                        (ne = ne | 0),
                        (ne = C(ne, O[D])),
                        (ne = (ne + V) | 0),
                        (N = V),
                        (V = R),
                        (R = C(X, 10)),
                        (X = W),
                        (W = ne),
                        (ne = (I + B[v + $[D]]) | 0),
                        D < 16
                          ? (ne += E(M, re, le) + L[0])
                          : D < 32
                            ? (ne += g(M, re, le) + L[1])
                            : D < 48
                              ? (ne += y(M, re, le) + L[2])
                              : D < 64
                                ? (ne += b(M, re, le) + L[3])
                                : (ne += x(M, re, le) + L[4]),
                        (ne = ne | 0),
                        (ne = C(ne, H[D])),
                        (ne = (ne + ve) | 0),
                        (I = ve),
                        (ve = le),
                        (le = C(re, 10)),
                        (re = M),
                        (M = ne);
                    (ne = (S[1] + X + le) | 0),
                      (S[1] = (S[2] + R + ve) | 0),
                      (S[2] = (S[3] + V + I) | 0),
                      (S[3] = (S[4] + N + M) | 0),
                      (S[4] = (S[0] + W + re) | 0),
                      (S[0] = ne);
                  },
                  _doFinalize: function () {
                    var B = this._data,
                      v = B.words,
                      D = this._nDataBytes * 8,
                      P = B.sigBytes * 8;
                    (v[P >>> 5] |= 128 << (24 - (P % 32))),
                      (v[(((P + 64) >>> 9) << 4) + 14] =
                        (((D << 8) | (D >>> 24)) & 16711935) |
                        (((D << 24) | (D >>> 8)) & 4278255360)),
                      (B.sigBytes = (v.length + 1) * 4),
                      this._process();
                    for (var A = this._hash, S = A.words, k = 0; k < 5; k++) {
                      var L = S[k];
                      S[k] =
                        (((L << 8) | (L >>> 24)) & 16711935) |
                        (((L << 24) | (L >>> 8)) & 4278255360);
                    }
                    return A;
                  },
                  clone: function () {
                    var B = a.clone.call(this);
                    return (B._hash = this._hash.clone()), B;
                  },
                }));
              function x(B, v, D) {
                return B ^ v ^ D;
              }
              function b(B, v, D) {
                return (B & v) | (~B & D);
              }
              function y(B, v, D) {
                return (B | ~v) ^ D;
              }
              function g(B, v, D) {
                return (B & D) | (v & ~D);
              }
              function E(B, v, D) {
                return B ^ (v | ~D);
              }
              function C(B, v) {
                return (B << v) | (B >>> (32 - v));
              }
              (i.RIPEMD160 = a._createHelper(m)),
                (i.HmacRIPEMD160 = a._createHmacHelper(m));
            })(),
            r.RIPEMD160
          );
        });
      })(jn)),
    jn.exports
  );
}
var zn = { exports: {} },
  zh = zn.exports,
  Na;
function co() {
  return (
    Na ||
      ((Na = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(ce());
        })(zh, function (r) {
          (function () {
            var n = r,
              i = n.lib,
              s = i.Base,
              o = n.enc,
              a = o.Utf8,
              l = n.algo;
            l.HMAC = s.extend({
              init: function (c, u) {
                (c = this._hasher = new c.init()),
                  typeof u == "string" && (u = a.parse(u));
                var h = c.blockSize,
                  f = h * 4;
                u.sigBytes > f && (u = c.finalize(u)), u.clamp();
                for (
                  var d = (this._oKey = u.clone()),
                    p = (this._iKey = u.clone()),
                    m = d.words,
                    x = p.words,
                    b = 0;
                  b < h;
                  b++
                )
                  (m[b] ^= 1549556828), (x[b] ^= 909522486);
                (d.sigBytes = p.sigBytes = f), this.reset();
              },
              reset: function () {
                var c = this._hasher;
                c.reset(), c.update(this._iKey);
              },
              update: function (c) {
                return this._hasher.update(c), this;
              },
              finalize: function (c) {
                var u = this._hasher,
                  h = u.finalize(c);
                u.reset();
                var f = u.finalize(this._oKey.clone().concat(h));
                return f;
              },
            });
          })();
        });
      })(zn)),
    zn.exports
  );
}
var qn = { exports: {} },
  qh = qn.exports,
  Ia;
function $h() {
  return (
    Ia ||
      ((Ia = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), ao(), co());
        })(qh, function (r) {
          return (
            (function () {
              var n = r,
                i = n.lib,
                s = i.Base,
                o = i.WordArray,
                a = n.algo,
                l = a.SHA256,
                c = a.HMAC,
                u = (a.PBKDF2 = s.extend({
                  cfg: s.extend({
                    keySize: 128 / 32,
                    hasher: l,
                    iterations: 25e4,
                  }),
                  init: function (h) {
                    this.cfg = this.cfg.extend(h);
                  },
                  compute: function (h, f) {
                    for (
                      var d = this.cfg,
                        p = c.create(d.hasher, h),
                        m = o.create(),
                        x = o.create([1]),
                        b = m.words,
                        y = x.words,
                        g = d.keySize,
                        E = d.iterations;
                      b.length < g;

                    ) {
                      var C = p.update(f).finalize(x);
                      p.reset();
                      for (
                        var B = C.words, v = B.length, D = C, P = 1;
                        P < E;
                        P++
                      ) {
                        (D = p.finalize(D)), p.reset();
                        for (var A = D.words, S = 0; S < v; S++) B[S] ^= A[S];
                      }
                      m.concat(C), y[0]++;
                    }
                    return (m.sigBytes = g * 4), m;
                  },
                }));
              n.PBKDF2 = function (h, f, d) {
                return u.create(d).compute(h, f);
              };
            })(),
            r.PBKDF2
          );
        });
      })(qn)),
    qn.exports
  );
}
var $n = { exports: {} },
  Wh = $n.exports,
  Ua;
function Ft() {
  return (
    Ua ||
      ((Ua = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Gc(), co());
        })(Wh, function (r) {
          return (
            (function () {
              var n = r,
                i = n.lib,
                s = i.Base,
                o = i.WordArray,
                a = n.algo,
                l = a.MD5,
                c = (a.EvpKDF = s.extend({
                  cfg: s.extend({
                    keySize: 128 / 32,
                    hasher: l,
                    iterations: 1,
                  }),
                  init: function (u) {
                    this.cfg = this.cfg.extend(u);
                  },
                  compute: function (u, h) {
                    for (
                      var f,
                        d = this.cfg,
                        p = d.hasher.create(),
                        m = o.create(),
                        x = m.words,
                        b = d.keySize,
                        y = d.iterations;
                      x.length < b;

                    ) {
                      f && p.update(f),
                        (f = p.update(u).finalize(h)),
                        p.reset();
                      for (var g = 1; g < y; g++)
                        (f = p.finalize(f)), p.reset();
                      m.concat(f);
                    }
                    return (m.sigBytes = b * 4), m;
                  },
                }));
              n.EvpKDF = function (u, h, f) {
                return c.create(f).compute(u, h);
              };
            })(),
            r.EvpKDF
          );
        });
      })($n)),
    $n.exports
  );
}
var Wn = { exports: {} },
  Kh = Wn.exports,
  Ha;
function Re() {
  return (
    Ha ||
      ((Ha = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Ft());
        })(Kh, function (r) {
          r.lib.Cipher ||
            (function (n) {
              var i = r,
                s = i.lib,
                o = s.Base,
                a = s.WordArray,
                l = s.BufferedBlockAlgorithm,
                c = i.enc;
              c.Utf8;
              var u = c.Base64,
                h = i.algo,
                f = h.EvpKDF,
                d = (s.Cipher = l.extend({
                  cfg: o.extend(),
                  createEncryptor: function (A, S) {
                    return this.create(this._ENC_XFORM_MODE, A, S);
                  },
                  createDecryptor: function (A, S) {
                    return this.create(this._DEC_XFORM_MODE, A, S);
                  },
                  init: function (A, S, k) {
                    (this.cfg = this.cfg.extend(k)),
                      (this._xformMode = A),
                      (this._key = S),
                      this.reset();
                  },
                  reset: function () {
                    l.reset.call(this), this._doReset();
                  },
                  process: function (A) {
                    return this._append(A), this._process();
                  },
                  finalize: function (A) {
                    A && this._append(A);
                    var S = this._doFinalize();
                    return S;
                  },
                  keySize: 128 / 32,
                  ivSize: 128 / 32,
                  _ENC_XFORM_MODE: 1,
                  _DEC_XFORM_MODE: 2,
                  _createHelper: (function () {
                    function A(S) {
                      return typeof S == "string" ? P : B;
                    }
                    return function (S) {
                      return {
                        encrypt: function (k, L, z) {
                          return A(L).encrypt(S, k, L, z);
                        },
                        decrypt: function (k, L, z) {
                          return A(L).decrypt(S, k, L, z);
                        },
                      };
                    };
                  })(),
                }));
              s.StreamCipher = d.extend({
                _doFinalize: function () {
                  var A = this._process(!0);
                  return A;
                },
                blockSize: 1,
              });
              var p = (i.mode = {}),
                m = (s.BlockCipherMode = o.extend({
                  createEncryptor: function (A, S) {
                    return this.Encryptor.create(A, S);
                  },
                  createDecryptor: function (A, S) {
                    return this.Decryptor.create(A, S);
                  },
                  init: function (A, S) {
                    (this._cipher = A), (this._iv = S);
                  },
                })),
                x = (p.CBC = (function () {
                  var A = m.extend();
                  (A.Encryptor = A.extend({
                    processBlock: function (k, L) {
                      var z = this._cipher,
                        $ = z.blockSize;
                      S.call(this, k, L, $),
                        z.encryptBlock(k, L),
                        (this._prevBlock = k.slice(L, L + $));
                    },
                  })),
                    (A.Decryptor = A.extend({
                      processBlock: function (k, L) {
                        var z = this._cipher,
                          $ = z.blockSize,
                          O = k.slice(L, L + $);
                        z.decryptBlock(k, L),
                          S.call(this, k, L, $),
                          (this._prevBlock = O);
                      },
                    }));
                  function S(k, L, z) {
                    var $,
                      O = this._iv;
                    O ? (($ = O), (this._iv = n)) : ($ = this._prevBlock);
                    for (var H = 0; H < z; H++) k[L + H] ^= $[H];
                  }
                  return A;
                })()),
                b = (i.pad = {}),
                y = (b.Pkcs7 = {
                  pad: function (A, S) {
                    for (
                      var k = S * 4,
                        L = k - (A.sigBytes % k),
                        z = (L << 24) | (L << 16) | (L << 8) | L,
                        $ = [],
                        O = 0;
                      O < L;
                      O += 4
                    )
                      $.push(z);
                    var H = a.create($, L);
                    A.concat(H);
                  },
                  unpad: function (A) {
                    var S = A.words[(A.sigBytes - 1) >>> 2] & 255;
                    A.sigBytes -= S;
                  },
                });
              s.BlockCipher = d.extend({
                cfg: d.cfg.extend({ mode: x, padding: y }),
                reset: function () {
                  var A;
                  d.reset.call(this);
                  var S = this.cfg,
                    k = S.iv,
                    L = S.mode;
                  this._xformMode == this._ENC_XFORM_MODE
                    ? (A = L.createEncryptor)
                    : ((A = L.createDecryptor), (this._minBufferSize = 1)),
                    this._mode && this._mode.__creator == A
                      ? this._mode.init(this, k && k.words)
                      : ((this._mode = A.call(L, this, k && k.words)),
                        (this._mode.__creator = A));
                },
                _doProcessBlock: function (A, S) {
                  this._mode.processBlock(A, S);
                },
                _doFinalize: function () {
                  var A,
                    S = this.cfg.padding;
                  return (
                    this._xformMode == this._ENC_XFORM_MODE
                      ? (S.pad(this._data, this.blockSize),
                        (A = this._process(!0)))
                      : ((A = this._process(!0)), S.unpad(A)),
                    A
                  );
                },
                blockSize: 128 / 32,
              });
              var g = (s.CipherParams = o.extend({
                  init: function (A) {
                    this.mixIn(A);
                  },
                  toString: function (A) {
                    return (A || this.formatter).stringify(this);
                  },
                })),
                E = (i.format = {}),
                C = (E.OpenSSL = {
                  stringify: function (A) {
                    var S,
                      k = A.ciphertext,
                      L = A.salt;
                    return (
                      L
                        ? (S = a
                            .create([1398893684, 1701076831])
                            .concat(L)
                            .concat(k))
                        : (S = k),
                      S.toString(u)
                    );
                  },
                  parse: function (A) {
                    var S,
                      k = u.parse(A),
                      L = k.words;
                    return (
                      L[0] == 1398893684 &&
                        L[1] == 1701076831 &&
                        ((S = a.create(L.slice(2, 4))),
                        L.splice(0, 4),
                        (k.sigBytes -= 16)),
                      g.create({ ciphertext: k, salt: S })
                    );
                  },
                }),
                B = (s.SerializableCipher = o.extend({
                  cfg: o.extend({ format: C }),
                  encrypt: function (A, S, k, L) {
                    L = this.cfg.extend(L);
                    var z = A.createEncryptor(k, L),
                      $ = z.finalize(S),
                      O = z.cfg;
                    return g.create({
                      ciphertext: $,
                      key: k,
                      iv: O.iv,
                      algorithm: A,
                      mode: O.mode,
                      padding: O.padding,
                      blockSize: A.blockSize,
                      formatter: L.format,
                    });
                  },
                  decrypt: function (A, S, k, L) {
                    (L = this.cfg.extend(L)), (S = this._parse(S, L.format));
                    var z = A.createDecryptor(k, L).finalize(S.ciphertext);
                    return z;
                  },
                  _parse: function (A, S) {
                    return typeof A == "string" ? S.parse(A, this) : A;
                  },
                })),
                v = (i.kdf = {}),
                D = (v.OpenSSL = {
                  execute: function (A, S, k, L, z) {
                    if ((L || (L = a.random(64 / 8)), z))
                      var $ = f
                        .create({ keySize: S + k, hasher: z })
                        .compute(A, L);
                    else var $ = f.create({ keySize: S + k }).compute(A, L);
                    var O = a.create($.words.slice(S), k * 4);
                    return (
                      ($.sigBytes = S * 4), g.create({ key: $, iv: O, salt: L })
                    );
                  },
                }),
                P = (s.PasswordBasedCipher = B.extend({
                  cfg: B.cfg.extend({ kdf: D }),
                  encrypt: function (A, S, k, L) {
                    L = this.cfg.extend(L);
                    var z = L.kdf.execute(
                      k,
                      A.keySize,
                      A.ivSize,
                      L.salt,
                      L.hasher,
                    );
                    L.iv = z.iv;
                    var $ = B.encrypt.call(this, A, S, z.key, L);
                    return $.mixIn(z), $;
                  },
                  decrypt: function (A, S, k, L) {
                    (L = this.cfg.extend(L)), (S = this._parse(S, L.format));
                    var z = L.kdf.execute(
                      k,
                      A.keySize,
                      A.ivSize,
                      S.salt,
                      L.hasher,
                    );
                    L.iv = z.iv;
                    var $ = B.decrypt.call(this, A, S, z.key, L);
                    return $;
                  },
                }));
            })();
        });
      })(Wn)),
    Wn.exports
  );
}
var Kn = { exports: {} },
  Xh = Kn.exports,
  ja;
function Gh() {
  return (
    ja ||
      ((ja = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(Xh, function (r) {
          return (
            (r.mode.CFB = (function () {
              var n = r.lib.BlockCipherMode.extend();
              (n.Encryptor = n.extend({
                processBlock: function (s, o) {
                  var a = this._cipher,
                    l = a.blockSize;
                  i.call(this, s, o, l, a),
                    (this._prevBlock = s.slice(o, o + l));
                },
              })),
                (n.Decryptor = n.extend({
                  processBlock: function (s, o) {
                    var a = this._cipher,
                      l = a.blockSize,
                      c = s.slice(o, o + l);
                    i.call(this, s, o, l, a), (this._prevBlock = c);
                  },
                }));
              function i(s, o, a, l) {
                var c,
                  u = this._iv;
                u
                  ? ((c = u.slice(0)), (this._iv = void 0))
                  : (c = this._prevBlock),
                  l.encryptBlock(c, 0);
                for (var h = 0; h < a; h++) s[o + h] ^= c[h];
              }
              return n;
            })()),
            r.mode.CFB
          );
        });
      })(Kn)),
    Kn.exports
  );
}
var Xn = { exports: {} },
  Yh = Xn.exports,
  za;
function Zh() {
  return (
    za ||
      ((za = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(Yh, function (r) {
          return (
            (r.mode.CTR = (function () {
              var n = r.lib.BlockCipherMode.extend(),
                i = (n.Encryptor = n.extend({
                  processBlock: function (s, o) {
                    var a = this._cipher,
                      l = a.blockSize,
                      c = this._iv,
                      u = this._counter;
                    c &&
                      ((u = this._counter = c.slice(0)), (this._iv = void 0));
                    var h = u.slice(0);
                    a.encryptBlock(h, 0), (u[l - 1] = (u[l - 1] + 1) | 0);
                    for (var f = 0; f < l; f++) s[o + f] ^= h[f];
                  },
                }));
              return (n.Decryptor = i), n;
            })()),
            r.mode.CTR
          );
        });
      })(Xn)),
    Xn.exports
  );
}
var Gn = { exports: {} },
  Qh = Gn.exports,
  qa;
function Jh() {
  return (
    qa ||
      ((qa = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(Qh, function (r) {
          /** @preserve
           * Counter block mode compatible with  Dr Brian Gladman fileenc.c
           * derived from CryptoJS.mode.CTR
           * Jan Hruby jhruby.web@gmail.com
           */ return (
            (r.mode.CTRGladman = (function () {
              var n = r.lib.BlockCipherMode.extend();
              function i(a) {
                if (((a >> 24) & 255) === 255) {
                  var l = (a >> 16) & 255,
                    c = (a >> 8) & 255,
                    u = a & 255;
                  l === 255
                    ? ((l = 0),
                      c === 255 ? ((c = 0), u === 255 ? (u = 0) : ++u) : ++c)
                    : ++l,
                    (a = 0),
                    (a += l << 16),
                    (a += c << 8),
                    (a += u);
                } else a += 1 << 24;
                return a;
              }
              function s(a) {
                return (a[0] = i(a[0])) === 0 && (a[1] = i(a[1])), a;
              }
              var o = (n.Encryptor = n.extend({
                processBlock: function (a, l) {
                  var c = this._cipher,
                    u = c.blockSize,
                    h = this._iv,
                    f = this._counter;
                  h && ((f = this._counter = h.slice(0)), (this._iv = void 0)),
                    s(f);
                  var d = f.slice(0);
                  c.encryptBlock(d, 0);
                  for (var p = 0; p < u; p++) a[l + p] ^= d[p];
                },
              }));
              return (n.Decryptor = o), n;
            })()),
            r.mode.CTRGladman
          );
        });
      })(Gn)),
    Gn.exports
  );
}
var Yn = { exports: {} },
  ed = Yn.exports,
  $a;
function td() {
  return (
    $a ||
      (($a = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(ed, function (r) {
          return (
            (r.mode.OFB = (function () {
              var n = r.lib.BlockCipherMode.extend(),
                i = (n.Encryptor = n.extend({
                  processBlock: function (s, o) {
                    var a = this._cipher,
                      l = a.blockSize,
                      c = this._iv,
                      u = this._keystream;
                    c &&
                      ((u = this._keystream = c.slice(0)), (this._iv = void 0)),
                      a.encryptBlock(u, 0);
                    for (var h = 0; h < l; h++) s[o + h] ^= u[h];
                  },
                }));
              return (n.Decryptor = i), n;
            })()),
            r.mode.OFB
          );
        });
      })(Yn)),
    Yn.exports
  );
}
var Zn = { exports: {} },
  rd = Zn.exports,
  Wa;
function nd() {
  return (
    Wa ||
      ((Wa = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(rd, function (r) {
          return (
            (r.mode.ECB = (function () {
              var n = r.lib.BlockCipherMode.extend();
              return (
                (n.Encryptor = n.extend({
                  processBlock: function (i, s) {
                    this._cipher.encryptBlock(i, s);
                  },
                })),
                (n.Decryptor = n.extend({
                  processBlock: function (i, s) {
                    this._cipher.decryptBlock(i, s);
                  },
                })),
                n
              );
            })()),
            r.mode.ECB
          );
        });
      })(Zn)),
    Zn.exports
  );
}
var Qn = { exports: {} },
  id = Qn.exports,
  Ka;
function sd() {
  return (
    Ka ||
      ((Ka = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(id, function (r) {
          return (
            (r.pad.AnsiX923 = {
              pad: function (n, i) {
                var s = n.sigBytes,
                  o = i * 4,
                  a = o - (s % o),
                  l = s + a - 1;
                n.clamp(),
                  (n.words[l >>> 2] |= a << (24 - (l % 4) * 8)),
                  (n.sigBytes += a);
              },
              unpad: function (n) {
                var i = n.words[(n.sigBytes - 1) >>> 2] & 255;
                n.sigBytes -= i;
              },
            }),
            r.pad.Ansix923
          );
        });
      })(Qn)),
    Qn.exports
  );
}
var Jn = { exports: {} },
  od = Jn.exports,
  Xa;
function ad() {
  return (
    Xa ||
      ((Xa = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(od, function (r) {
          return (
            (r.pad.Iso10126 = {
              pad: function (n, i) {
                var s = i * 4,
                  o = s - (n.sigBytes % s);
                n.concat(r.lib.WordArray.random(o - 1)).concat(
                  r.lib.WordArray.create([o << 24], 1),
                );
              },
              unpad: function (n) {
                var i = n.words[(n.sigBytes - 1) >>> 2] & 255;
                n.sigBytes -= i;
              },
            }),
            r.pad.Iso10126
          );
        });
      })(Jn)),
    Jn.exports
  );
}
var ei = { exports: {} },
  cd = ei.exports,
  Ga;
function ld() {
  return (
    Ga ||
      ((Ga = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(cd, function (r) {
          return (
            (r.pad.Iso97971 = {
              pad: function (n, i) {
                n.concat(r.lib.WordArray.create([2147483648], 1)),
                  r.pad.ZeroPadding.pad(n, i);
              },
              unpad: function (n) {
                r.pad.ZeroPadding.unpad(n), n.sigBytes--;
              },
            }),
            r.pad.Iso97971
          );
        });
      })(ei)),
    ei.exports
  );
}
var ti = { exports: {} },
  ud = ti.exports,
  Ya;
function fd() {
  return (
    Ya ||
      ((Ya = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(ud, function (r) {
          return (
            (r.pad.ZeroPadding = {
              pad: function (n, i) {
                var s = i * 4;
                n.clamp(), (n.sigBytes += s - (n.sigBytes % s || s));
              },
              unpad: function (n) {
                for (
                  var i = n.words, s = n.sigBytes - 1, s = n.sigBytes - 1;
                  s >= 0;
                  s--
                )
                  if ((i[s >>> 2] >>> (24 - (s % 4) * 8)) & 255) {
                    n.sigBytes = s + 1;
                    break;
                  }
              },
            }),
            r.pad.ZeroPadding
          );
        });
      })(ti)),
    ti.exports
  );
}
var ri = { exports: {} },
  hd = ri.exports,
  Za;
function dd() {
  return (
    Za ||
      ((Za = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(hd, function (r) {
          return (
            (r.pad.NoPadding = { pad: function () {}, unpad: function () {} }),
            r.pad.NoPadding
          );
        });
      })(ri)),
    ri.exports
  );
}
var ni = { exports: {} },
  pd = ni.exports,
  Qa;
function xd() {
  return (
    Qa ||
      ((Qa = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(pd, function (r) {
          return (
            (function (n) {
              var i = r,
                s = i.lib,
                o = s.CipherParams,
                a = i.enc,
                l = a.Hex,
                c = i.format;
              c.Hex = {
                stringify: function (u) {
                  return u.ciphertext.toString(l);
                },
                parse: function (u) {
                  var h = l.parse(u);
                  return o.create({ ciphertext: h });
                },
              };
            })(),
            r.format.Hex
          );
        });
      })(ni)),
    ni.exports
  );
}
var ii = { exports: {} },
  md = ii.exports,
  Ja;
function yd() {
  return (
    Ja ||
      ((Ja = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Xt(), Gt(), Ft(), Re());
        })(md, function (r) {
          return (
            (function () {
              var n = r,
                i = n.lib,
                s = i.BlockCipher,
                o = n.algo,
                a = [],
                l = [],
                c = [],
                u = [],
                h = [],
                f = [],
                d = [],
                p = [],
                m = [],
                x = [];
              (function () {
                for (var g = [], E = 0; E < 256; E++)
                  E < 128 ? (g[E] = E << 1) : (g[E] = (E << 1) ^ 283);
                for (var C = 0, B = 0, E = 0; E < 256; E++) {
                  var v = B ^ (B << 1) ^ (B << 2) ^ (B << 3) ^ (B << 4);
                  (v = (v >>> 8) ^ (v & 255) ^ 99), (a[C] = v), (l[v] = C);
                  var D = g[C],
                    P = g[D],
                    A = g[P],
                    S = (g[v] * 257) ^ (v * 16843008);
                  (c[C] = (S << 24) | (S >>> 8)),
                    (u[C] = (S << 16) | (S >>> 16)),
                    (h[C] = (S << 8) | (S >>> 24)),
                    (f[C] = S);
                  var S =
                    (A * 16843009) ^ (P * 65537) ^ (D * 257) ^ (C * 16843008);
                  (d[v] = (S << 24) | (S >>> 8)),
                    (p[v] = (S << 16) | (S >>> 16)),
                    (m[v] = (S << 8) | (S >>> 24)),
                    (x[v] = S),
                    C
                      ? ((C = D ^ g[g[g[A ^ D]]]), (B ^= g[g[B]]))
                      : (C = B = 1);
                }
              })();
              var b = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                y = (o.AES = s.extend({
                  _doReset: function () {
                    var g;
                    if (!(this._nRounds && this._keyPriorReset === this._key)) {
                      for (
                        var E = (this._keyPriorReset = this._key),
                          C = E.words,
                          B = E.sigBytes / 4,
                          v = (this._nRounds = B + 6),
                          D = (v + 1) * 4,
                          P = (this._keySchedule = []),
                          A = 0;
                        A < D;
                        A++
                      )
                        A < B
                          ? (P[A] = C[A])
                          : ((g = P[A - 1]),
                            A % B
                              ? B > 6 &&
                                A % B == 4 &&
                                (g =
                                  (a[g >>> 24] << 24) |
                                  (a[(g >>> 16) & 255] << 16) |
                                  (a[(g >>> 8) & 255] << 8) |
                                  a[g & 255])
                              : ((g = (g << 8) | (g >>> 24)),
                                (g =
                                  (a[g >>> 24] << 24) |
                                  (a[(g >>> 16) & 255] << 16) |
                                  (a[(g >>> 8) & 255] << 8) |
                                  a[g & 255]),
                                (g ^= b[(A / B) | 0] << 24)),
                            (P[A] = P[A - B] ^ g));
                      for (
                        var S = (this._invKeySchedule = []), k = 0;
                        k < D;
                        k++
                      ) {
                        var A = D - k;
                        if (k % 4) var g = P[A];
                        else var g = P[A - 4];
                        k < 4 || A <= 4
                          ? (S[k] = g)
                          : (S[k] =
                              d[a[g >>> 24]] ^
                              p[a[(g >>> 16) & 255]] ^
                              m[a[(g >>> 8) & 255]] ^
                              x[a[g & 255]]);
                      }
                    }
                  },
                  encryptBlock: function (g, E) {
                    this._doCryptBlock(g, E, this._keySchedule, c, u, h, f, a);
                  },
                  decryptBlock: function (g, E) {
                    var C = g[E + 1];
                    (g[E + 1] = g[E + 3]),
                      (g[E + 3] = C),
                      this._doCryptBlock(
                        g,
                        E,
                        this._invKeySchedule,
                        d,
                        p,
                        m,
                        x,
                        l,
                      );
                    var C = g[E + 1];
                    (g[E + 1] = g[E + 3]), (g[E + 3] = C);
                  },
                  _doCryptBlock: function (g, E, C, B, v, D, P, A) {
                    for (
                      var S = this._nRounds,
                        k = g[E] ^ C[0],
                        L = g[E + 1] ^ C[1],
                        z = g[E + 2] ^ C[2],
                        $ = g[E + 3] ^ C[3],
                        O = 4,
                        H = 1;
                      H < S;
                      H++
                    ) {
                      var N =
                          B[k >>> 24] ^
                          v[(L >>> 16) & 255] ^
                          D[(z >>> 8) & 255] ^
                          P[$ & 255] ^
                          C[O++],
                        W =
                          B[L >>> 24] ^
                          v[(z >>> 16) & 255] ^
                          D[($ >>> 8) & 255] ^
                          P[k & 255] ^
                          C[O++],
                        X =
                          B[z >>> 24] ^
                          v[($ >>> 16) & 255] ^
                          D[(k >>> 8) & 255] ^
                          P[L & 255] ^
                          C[O++],
                        R =
                          B[$ >>> 24] ^
                          v[(k >>> 16) & 255] ^
                          D[(L >>> 8) & 255] ^
                          P[z & 255] ^
                          C[O++];
                      (k = N), (L = W), (z = X), ($ = R);
                    }
                    var N =
                        ((A[k >>> 24] << 24) |
                          (A[(L >>> 16) & 255] << 16) |
                          (A[(z >>> 8) & 255] << 8) |
                          A[$ & 255]) ^
                        C[O++],
                      W =
                        ((A[L >>> 24] << 24) |
                          (A[(z >>> 16) & 255] << 16) |
                          (A[($ >>> 8) & 255] << 8) |
                          A[k & 255]) ^
                        C[O++],
                      X =
                        ((A[z >>> 24] << 24) |
                          (A[($ >>> 16) & 255] << 16) |
                          (A[(k >>> 8) & 255] << 8) |
                          A[L & 255]) ^
                        C[O++],
                      R =
                        ((A[$ >>> 24] << 24) |
                          (A[(k >>> 16) & 255] << 16) |
                          (A[(L >>> 8) & 255] << 8) |
                          A[z & 255]) ^
                        C[O++];
                    (g[E] = N), (g[E + 1] = W), (g[E + 2] = X), (g[E + 3] = R);
                  },
                  keySize: 256 / 32,
                }));
              n.AES = s._createHelper(y);
            })(),
            r.AES
          );
        });
      })(ii)),
    ii.exports
  );
}
var si = { exports: {} },
  gd = si.exports,
  e0;
function vd() {
  return (
    e0 ||
      ((e0 = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Xt(), Gt(), Ft(), Re());
        })(gd, function (r) {
          return (
            (function () {
              var n = r,
                i = n.lib,
                s = i.WordArray,
                o = i.BlockCipher,
                a = n.algo,
                l = [
                  57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2,
                  59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39,
                  31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37,
                  29, 21, 13, 5, 28, 20, 12, 4,
                ],
                c = [
                  14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26,
                  8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51,
                  45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32,
                ],
                u = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
                h = [
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
                f = [
                  4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504,
                  2147483679,
                ],
                d = (a.DES = o.extend({
                  _doReset: function () {
                    for (
                      var b = this._key, y = b.words, g = [], E = 0;
                      E < 56;
                      E++
                    ) {
                      var C = l[E] - 1;
                      g[E] = (y[C >>> 5] >>> (31 - (C % 32))) & 1;
                    }
                    for (var B = (this._subKeys = []), v = 0; v < 16; v++) {
                      for (var D = (B[v] = []), P = u[v], E = 0; E < 24; E++)
                        (D[(E / 6) | 0] |=
                          g[(c[E] - 1 + P) % 28] << (31 - (E % 6))),
                          (D[4 + ((E / 6) | 0)] |=
                            g[28 + ((c[E + 24] - 1 + P) % 28)] <<
                            (31 - (E % 6)));
                      D[0] = (D[0] << 1) | (D[0] >>> 31);
                      for (var E = 1; E < 7; E++)
                        D[E] = D[E] >>> ((E - 1) * 4 + 3);
                      D[7] = (D[7] << 5) | (D[7] >>> 27);
                    }
                    for (var A = (this._invSubKeys = []), E = 0; E < 16; E++)
                      A[E] = B[15 - E];
                  },
                  encryptBlock: function (b, y) {
                    this._doCryptBlock(b, y, this._subKeys);
                  },
                  decryptBlock: function (b, y) {
                    this._doCryptBlock(b, y, this._invSubKeys);
                  },
                  _doCryptBlock: function (b, y, g) {
                    (this._lBlock = b[y]),
                      (this._rBlock = b[y + 1]),
                      p.call(this, 4, 252645135),
                      p.call(this, 16, 65535),
                      m.call(this, 2, 858993459),
                      m.call(this, 8, 16711935),
                      p.call(this, 1, 1431655765);
                    for (var E = 0; E < 16; E++) {
                      for (
                        var C = g[E],
                          B = this._lBlock,
                          v = this._rBlock,
                          D = 0,
                          P = 0;
                        P < 8;
                        P++
                      )
                        D |= h[P][((v ^ C[P]) & f[P]) >>> 0];
                      (this._lBlock = v), (this._rBlock = B ^ D);
                    }
                    var A = this._lBlock;
                    (this._lBlock = this._rBlock),
                      (this._rBlock = A),
                      p.call(this, 1, 1431655765),
                      m.call(this, 8, 16711935),
                      m.call(this, 2, 858993459),
                      p.call(this, 16, 65535),
                      p.call(this, 4, 252645135),
                      (b[y] = this._lBlock),
                      (b[y + 1] = this._rBlock);
                  },
                  keySize: 64 / 32,
                  ivSize: 64 / 32,
                  blockSize: 64 / 32,
                }));
              function p(b, y) {
                var g = ((this._lBlock >>> b) ^ this._rBlock) & y;
                (this._rBlock ^= g), (this._lBlock ^= g << b);
              }
              function m(b, y) {
                var g = ((this._rBlock >>> b) ^ this._lBlock) & y;
                (this._lBlock ^= g), (this._rBlock ^= g << b);
              }
              n.DES = o._createHelper(d);
              var x = (a.TripleDES = o.extend({
                _doReset: function () {
                  var b = this._key,
                    y = b.words;
                  if (y.length !== 2 && y.length !== 4 && y.length < 6)
                    throw new Error(
                      "Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.",
                    );
                  var g = y.slice(0, 2),
                    E = y.length < 4 ? y.slice(0, 2) : y.slice(2, 4),
                    C = y.length < 6 ? y.slice(0, 2) : y.slice(4, 6);
                  (this._des1 = d.createEncryptor(s.create(g))),
                    (this._des2 = d.createEncryptor(s.create(E))),
                    (this._des3 = d.createEncryptor(s.create(C)));
                },
                encryptBlock: function (b, y) {
                  this._des1.encryptBlock(b, y),
                    this._des2.decryptBlock(b, y),
                    this._des3.encryptBlock(b, y);
                },
                decryptBlock: function (b, y) {
                  this._des3.decryptBlock(b, y),
                    this._des2.encryptBlock(b, y),
                    this._des1.decryptBlock(b, y);
                },
                keySize: 192 / 32,
                ivSize: 64 / 32,
                blockSize: 64 / 32,
              }));
              n.TripleDES = o._createHelper(x);
            })(),
            r.TripleDES
          );
        });
      })(si)),
    si.exports
  );
}
var oi = { exports: {} },
  Ed = oi.exports,
  t0;
function bd() {
  return (
    t0 ||
      ((t0 = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Xt(), Gt(), Ft(), Re());
        })(Ed, function (r) {
          return (
            (function () {
              var n = r,
                i = n.lib,
                s = i.StreamCipher,
                o = n.algo,
                a = (o.RC4 = s.extend({
                  _doReset: function () {
                    for (
                      var u = this._key,
                        h = u.words,
                        f = u.sigBytes,
                        d = (this._S = []),
                        p = 0;
                      p < 256;
                      p++
                    )
                      d[p] = p;
                    for (var p = 0, m = 0; p < 256; p++) {
                      var x = p % f,
                        b = (h[x >>> 2] >>> (24 - (x % 4) * 8)) & 255;
                      m = (m + d[p] + b) % 256;
                      var y = d[p];
                      (d[p] = d[m]), (d[m] = y);
                    }
                    this._i = this._j = 0;
                  },
                  _doProcessBlock: function (u, h) {
                    u[h] ^= l.call(this);
                  },
                  keySize: 256 / 32,
                  ivSize: 0,
                }));
              function l() {
                for (
                  var u = this._S, h = this._i, f = this._j, d = 0, p = 0;
                  p < 4;
                  p++
                ) {
                  (h = (h + 1) % 256), (f = (f + u[h]) % 256);
                  var m = u[h];
                  (u[h] = u[f]),
                    (u[f] = m),
                    (d |= u[(u[h] + u[f]) % 256] << (24 - p * 8));
                }
                return (this._i = h), (this._j = f), d;
              }
              n.RC4 = s._createHelper(a);
              var c = (o.RC4Drop = a.extend({
                cfg: a.cfg.extend({ drop: 192 }),
                _doReset: function () {
                  a._doReset.call(this);
                  for (var u = this.cfg.drop; u > 0; u--) l.call(this);
                },
              }));
              n.RC4Drop = s._createHelper(c);
            })(),
            r.RC4
          );
        });
      })(oi)),
    oi.exports
  );
}
var ai = { exports: {} },
  Cd = ai.exports,
  r0;
function Ad() {
  return (
    r0 ||
      ((r0 = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Xt(), Gt(), Ft(), Re());
        })(Cd, function (r) {
          return (
            (function () {
              var n = r,
                i = n.lib,
                s = i.StreamCipher,
                o = n.algo,
                a = [],
                l = [],
                c = [],
                u = (o.Rabbit = s.extend({
                  _doReset: function () {
                    for (
                      var f = this._key.words, d = this.cfg.iv, p = 0;
                      p < 4;
                      p++
                    )
                      f[p] =
                        (((f[p] << 8) | (f[p] >>> 24)) & 16711935) |
                        (((f[p] << 24) | (f[p] >>> 8)) & 4278255360);
                    var m = (this._X = [
                        f[0],
                        (f[3] << 16) | (f[2] >>> 16),
                        f[1],
                        (f[0] << 16) | (f[3] >>> 16),
                        f[2],
                        (f[1] << 16) | (f[0] >>> 16),
                        f[3],
                        (f[2] << 16) | (f[1] >>> 16),
                      ]),
                      x = (this._C = [
                        (f[2] << 16) | (f[2] >>> 16),
                        (f[0] & 4294901760) | (f[1] & 65535),
                        (f[3] << 16) | (f[3] >>> 16),
                        (f[1] & 4294901760) | (f[2] & 65535),
                        (f[0] << 16) | (f[0] >>> 16),
                        (f[2] & 4294901760) | (f[3] & 65535),
                        (f[1] << 16) | (f[1] >>> 16),
                        (f[3] & 4294901760) | (f[0] & 65535),
                      ]);
                    this._b = 0;
                    for (var p = 0; p < 4; p++) h.call(this);
                    for (var p = 0; p < 8; p++) x[p] ^= m[(p + 4) & 7];
                    if (d) {
                      var b = d.words,
                        y = b[0],
                        g = b[1],
                        E =
                          (((y << 8) | (y >>> 24)) & 16711935) |
                          (((y << 24) | (y >>> 8)) & 4278255360),
                        C =
                          (((g << 8) | (g >>> 24)) & 16711935) |
                          (((g << 24) | (g >>> 8)) & 4278255360),
                        B = (E >>> 16) | (C & 4294901760),
                        v = (C << 16) | (E & 65535);
                      (x[0] ^= E),
                        (x[1] ^= B),
                        (x[2] ^= C),
                        (x[3] ^= v),
                        (x[4] ^= E),
                        (x[5] ^= B),
                        (x[6] ^= C),
                        (x[7] ^= v);
                      for (var p = 0; p < 4; p++) h.call(this);
                    }
                  },
                  _doProcessBlock: function (f, d) {
                    var p = this._X;
                    h.call(this),
                      (a[0] = p[0] ^ (p[5] >>> 16) ^ (p[3] << 16)),
                      (a[1] = p[2] ^ (p[7] >>> 16) ^ (p[5] << 16)),
                      (a[2] = p[4] ^ (p[1] >>> 16) ^ (p[7] << 16)),
                      (a[3] = p[6] ^ (p[3] >>> 16) ^ (p[1] << 16));
                    for (var m = 0; m < 4; m++)
                      (a[m] =
                        (((a[m] << 8) | (a[m] >>> 24)) & 16711935) |
                        (((a[m] << 24) | (a[m] >>> 8)) & 4278255360)),
                        (f[d + m] ^= a[m]);
                  },
                  blockSize: 128 / 32,
                  ivSize: 64 / 32,
                }));
              function h() {
                for (var f = this._X, d = this._C, p = 0; p < 8; p++)
                  l[p] = d[p];
                (d[0] = (d[0] + 1295307597 + this._b) | 0),
                  (d[1] =
                    (d[1] + 3545052371 + (d[0] >>> 0 < l[0] >>> 0 ? 1 : 0)) |
                    0),
                  (d[2] =
                    (d[2] + 886263092 + (d[1] >>> 0 < l[1] >>> 0 ? 1 : 0)) | 0),
                  (d[3] =
                    (d[3] + 1295307597 + (d[2] >>> 0 < l[2] >>> 0 ? 1 : 0)) |
                    0),
                  (d[4] =
                    (d[4] + 3545052371 + (d[3] >>> 0 < l[3] >>> 0 ? 1 : 0)) |
                    0),
                  (d[5] =
                    (d[5] + 886263092 + (d[4] >>> 0 < l[4] >>> 0 ? 1 : 0)) | 0),
                  (d[6] =
                    (d[6] + 1295307597 + (d[5] >>> 0 < l[5] >>> 0 ? 1 : 0)) |
                    0),
                  (d[7] =
                    (d[7] + 3545052371 + (d[6] >>> 0 < l[6] >>> 0 ? 1 : 0)) |
                    0),
                  (this._b = d[7] >>> 0 < l[7] >>> 0 ? 1 : 0);
                for (var p = 0; p < 8; p++) {
                  var m = f[p] + d[p],
                    x = m & 65535,
                    b = m >>> 16,
                    y = ((((x * x) >>> 17) + x * b) >>> 15) + b * b,
                    g = (((m & 4294901760) * m) | 0) + (((m & 65535) * m) | 0);
                  c[p] = y ^ g;
                }
                (f[0] =
                  (c[0] +
                    ((c[7] << 16) | (c[7] >>> 16)) +
                    ((c[6] << 16) | (c[6] >>> 16))) |
                  0),
                  (f[1] = (c[1] + ((c[0] << 8) | (c[0] >>> 24)) + c[7]) | 0),
                  (f[2] =
                    (c[2] +
                      ((c[1] << 16) | (c[1] >>> 16)) +
                      ((c[0] << 16) | (c[0] >>> 16))) |
                    0),
                  (f[3] = (c[3] + ((c[2] << 8) | (c[2] >>> 24)) + c[1]) | 0),
                  (f[4] =
                    (c[4] +
                      ((c[3] << 16) | (c[3] >>> 16)) +
                      ((c[2] << 16) | (c[2] >>> 16))) |
                    0),
                  (f[5] = (c[5] + ((c[4] << 8) | (c[4] >>> 24)) + c[3]) | 0),
                  (f[6] =
                    (c[6] +
                      ((c[5] << 16) | (c[5] >>> 16)) +
                      ((c[4] << 16) | (c[4] >>> 16))) |
                    0),
                  (f[7] = (c[7] + ((c[6] << 8) | (c[6] >>> 24)) + c[5]) | 0);
              }
              n.Rabbit = s._createHelper(u);
            })(),
            r.Rabbit
          );
        });
      })(ai)),
    ai.exports
  );
}
var ci = { exports: {} },
  Bd = ci.exports,
  n0;
function wd() {
  return (
    n0 ||
      ((n0 = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Xt(), Gt(), Ft(), Re());
        })(Bd, function (r) {
          return (
            (function () {
              var n = r,
                i = n.lib,
                s = i.StreamCipher,
                o = n.algo,
                a = [],
                l = [],
                c = [],
                u = (o.RabbitLegacy = s.extend({
                  _doReset: function () {
                    var f = this._key.words,
                      d = this.cfg.iv,
                      p = (this._X = [
                        f[0],
                        (f[3] << 16) | (f[2] >>> 16),
                        f[1],
                        (f[0] << 16) | (f[3] >>> 16),
                        f[2],
                        (f[1] << 16) | (f[0] >>> 16),
                        f[3],
                        (f[2] << 16) | (f[1] >>> 16),
                      ]),
                      m = (this._C = [
                        (f[2] << 16) | (f[2] >>> 16),
                        (f[0] & 4294901760) | (f[1] & 65535),
                        (f[3] << 16) | (f[3] >>> 16),
                        (f[1] & 4294901760) | (f[2] & 65535),
                        (f[0] << 16) | (f[0] >>> 16),
                        (f[2] & 4294901760) | (f[3] & 65535),
                        (f[1] << 16) | (f[1] >>> 16),
                        (f[3] & 4294901760) | (f[0] & 65535),
                      ]);
                    this._b = 0;
                    for (var x = 0; x < 4; x++) h.call(this);
                    for (var x = 0; x < 8; x++) m[x] ^= p[(x + 4) & 7];
                    if (d) {
                      var b = d.words,
                        y = b[0],
                        g = b[1],
                        E =
                          (((y << 8) | (y >>> 24)) & 16711935) |
                          (((y << 24) | (y >>> 8)) & 4278255360),
                        C =
                          (((g << 8) | (g >>> 24)) & 16711935) |
                          (((g << 24) | (g >>> 8)) & 4278255360),
                        B = (E >>> 16) | (C & 4294901760),
                        v = (C << 16) | (E & 65535);
                      (m[0] ^= E),
                        (m[1] ^= B),
                        (m[2] ^= C),
                        (m[3] ^= v),
                        (m[4] ^= E),
                        (m[5] ^= B),
                        (m[6] ^= C),
                        (m[7] ^= v);
                      for (var x = 0; x < 4; x++) h.call(this);
                    }
                  },
                  _doProcessBlock: function (f, d) {
                    var p = this._X;
                    h.call(this),
                      (a[0] = p[0] ^ (p[5] >>> 16) ^ (p[3] << 16)),
                      (a[1] = p[2] ^ (p[7] >>> 16) ^ (p[5] << 16)),
                      (a[2] = p[4] ^ (p[1] >>> 16) ^ (p[7] << 16)),
                      (a[3] = p[6] ^ (p[3] >>> 16) ^ (p[1] << 16));
                    for (var m = 0; m < 4; m++)
                      (a[m] =
                        (((a[m] << 8) | (a[m] >>> 24)) & 16711935) |
                        (((a[m] << 24) | (a[m] >>> 8)) & 4278255360)),
                        (f[d + m] ^= a[m]);
                  },
                  blockSize: 128 / 32,
                  ivSize: 64 / 32,
                }));
              function h() {
                for (var f = this._X, d = this._C, p = 0; p < 8; p++)
                  l[p] = d[p];
                (d[0] = (d[0] + 1295307597 + this._b) | 0),
                  (d[1] =
                    (d[1] + 3545052371 + (d[0] >>> 0 < l[0] >>> 0 ? 1 : 0)) |
                    0),
                  (d[2] =
                    (d[2] + 886263092 + (d[1] >>> 0 < l[1] >>> 0 ? 1 : 0)) | 0),
                  (d[3] =
                    (d[3] + 1295307597 + (d[2] >>> 0 < l[2] >>> 0 ? 1 : 0)) |
                    0),
                  (d[4] =
                    (d[4] + 3545052371 + (d[3] >>> 0 < l[3] >>> 0 ? 1 : 0)) |
                    0),
                  (d[5] =
                    (d[5] + 886263092 + (d[4] >>> 0 < l[4] >>> 0 ? 1 : 0)) | 0),
                  (d[6] =
                    (d[6] + 1295307597 + (d[5] >>> 0 < l[5] >>> 0 ? 1 : 0)) |
                    0),
                  (d[7] =
                    (d[7] + 3545052371 + (d[6] >>> 0 < l[6] >>> 0 ? 1 : 0)) |
                    0),
                  (this._b = d[7] >>> 0 < l[7] >>> 0 ? 1 : 0);
                for (var p = 0; p < 8; p++) {
                  var m = f[p] + d[p],
                    x = m & 65535,
                    b = m >>> 16,
                    y = ((((x * x) >>> 17) + x * b) >>> 15) + b * b,
                    g = (((m & 4294901760) * m) | 0) + (((m & 65535) * m) | 0);
                  c[p] = y ^ g;
                }
                (f[0] =
                  (c[0] +
                    ((c[7] << 16) | (c[7] >>> 16)) +
                    ((c[6] << 16) | (c[6] >>> 16))) |
                  0),
                  (f[1] = (c[1] + ((c[0] << 8) | (c[0] >>> 24)) + c[7]) | 0),
                  (f[2] =
                    (c[2] +
                      ((c[1] << 16) | (c[1] >>> 16)) +
                      ((c[0] << 16) | (c[0] >>> 16))) |
                    0),
                  (f[3] = (c[3] + ((c[2] << 8) | (c[2] >>> 24)) + c[1]) | 0),
                  (f[4] =
                    (c[4] +
                      ((c[3] << 16) | (c[3] >>> 16)) +
                      ((c[2] << 16) | (c[2] >>> 16))) |
                    0),
                  (f[5] = (c[5] + ((c[4] << 8) | (c[4] >>> 24)) + c[3]) | 0),
                  (f[6] =
                    (c[6] +
                      ((c[5] << 16) | (c[5] >>> 16)) +
                      ((c[4] << 16) | (c[4] >>> 16))) |
                    0),
                  (f[7] = (c[7] + ((c[6] << 8) | (c[6] >>> 24)) + c[5]) | 0);
              }
              n.RabbitLegacy = s._createHelper(u);
            })(),
            r.RabbitLegacy
          );
        });
      })(ci)),
    ci.exports
  );
}
var li = { exports: {} },
  Dd = li.exports,
  i0;
function Fd() {
  return (
    i0 ||
      ((i0 = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Xt(), Gt(), Ft(), Re());
        })(Dd, function (r) {
          return (
            (function () {
              var n = r,
                i = n.lib,
                s = i.BlockCipher,
                o = n.algo;
              const a = 16,
                l = [
                  608135816, 2242054355, 320440878, 57701188, 2752067618,
                  698298832, 137296536, 3964562569, 1160258022, 953160567,
                  3193202383, 887688300, 3232508343, 3380367581, 1065670069,
                  3041331479, 2450970073, 2306472731,
                ],
                c = [
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
              var u = { pbox: [], sbox: [] };
              function h(x, b) {
                let y = (b >> 24) & 255,
                  g = (b >> 16) & 255,
                  E = (b >> 8) & 255,
                  C = b & 255,
                  B = x.sbox[0][y] + x.sbox[1][g];
                return (B = B ^ x.sbox[2][E]), (B = B + x.sbox[3][C]), B;
              }
              function f(x, b, y) {
                let g = b,
                  E = y,
                  C;
                for (let B = 0; B < a; ++B)
                  (g = g ^ x.pbox[B]),
                    (E = h(x, g) ^ E),
                    (C = g),
                    (g = E),
                    (E = C);
                return (
                  (C = g),
                  (g = E),
                  (E = C),
                  (E = E ^ x.pbox[a]),
                  (g = g ^ x.pbox[a + 1]),
                  { left: g, right: E }
                );
              }
              function d(x, b, y) {
                let g = b,
                  E = y,
                  C;
                for (let B = a + 1; B > 1; --B)
                  (g = g ^ x.pbox[B]),
                    (E = h(x, g) ^ E),
                    (C = g),
                    (g = E),
                    (E = C);
                return (
                  (C = g),
                  (g = E),
                  (E = C),
                  (E = E ^ x.pbox[1]),
                  (g = g ^ x.pbox[0]),
                  { left: g, right: E }
                );
              }
              function p(x, b, y) {
                for (let v = 0; v < 4; v++) {
                  x.sbox[v] = [];
                  for (let D = 0; D < 256; D++) x.sbox[v][D] = c[v][D];
                }
                let g = 0;
                for (let v = 0; v < a + 2; v++)
                  (x.pbox[v] = l[v] ^ b[g]), g++, g >= y && (g = 0);
                let E = 0,
                  C = 0,
                  B = 0;
                for (let v = 0; v < a + 2; v += 2)
                  (B = f(x, E, C)),
                    (E = B.left),
                    (C = B.right),
                    (x.pbox[v] = E),
                    (x.pbox[v + 1] = C);
                for (let v = 0; v < 4; v++)
                  for (let D = 0; D < 256; D += 2)
                    (B = f(x, E, C)),
                      (E = B.left),
                      (C = B.right),
                      (x.sbox[v][D] = E),
                      (x.sbox[v][D + 1] = C);
                return !0;
              }
              var m = (o.Blowfish = s.extend({
                _doReset: function () {
                  if (this._keyPriorReset !== this._key) {
                    var x = (this._keyPriorReset = this._key),
                      b = x.words,
                      y = x.sigBytes / 4;
                    p(u, b, y);
                  }
                },
                encryptBlock: function (x, b) {
                  var y = f(u, x[b], x[b + 1]);
                  (x[b] = y.left), (x[b + 1] = y.right);
                },
                decryptBlock: function (x, b) {
                  var y = d(u, x[b], x[b + 1]);
                  (x[b] = y.left), (x[b + 1] = y.right);
                },
                blockSize: 64 / 32,
                keySize: 128 / 32,
                ivSize: 64 / 32,
              }));
              n.Blowfish = s._createHelper(m);
            })(),
            r.Blowfish
          );
        });
      })(li)),
    li.exports
  );
}
var Sd = Sn.exports,
  s0;
function _d() {
  return (
    s0 ||
      ((s0 = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(
            ce(),
            Ti(),
            wh(),
            Fh(),
            Xt(),
            Th(),
            Gt(),
            Gc(),
            ao(),
            Oh(),
            Yc(),
            Nh(),
            Uh(),
            jh(),
            co(),
            $h(),
            Ft(),
            Re(),
            Gh(),
            Zh(),
            Jh(),
            td(),
            nd(),
            sd(),
            ad(),
            ld(),
            fd(),
            dd(),
            xd(),
            yd(),
            vd(),
            bd(),
            Ad(),
            wd(),
            Fd(),
          );
        })(Sd, function (r) {
          return r;
        });
      })(Sn)),
    Sn.exports
  );
}
var Td = _d();
const Nv = gf(Td),
  lo = Y.createContext({});
function uo(e) {
  const t = Y.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const fo = typeof window != "undefined",
  Zc = fo ? Y.useLayoutEffect : Y.useEffect,
  Ri = Y.createContext(null);
function ho(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function po(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
const yt = (e, t, r) => (r > t ? t : r < e ? e : r);
let xo = () => {};
const gt = {},
  Qc = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Jc(e) {
  return typeof e == "object" && e !== null;
}
const el = (e) => /^0[^.\s]+$/u.test(e);
function mo(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Je = (e) => e,
  Rd = (e, t) => (r) => t(e(r)),
  sn = (...e) => e.reduce(Rd),
  Zr = (e, t, r) => {
    const n = t - e;
    return n === 0 ? 1 : (r - e) / n;
  };
class yo {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ho(this.subscriptions, t), () => po(this.subscriptions, t);
  }
  notify(t, r, n) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, r, n);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, r, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ut = (e) => e * 1e3,
  Qe = (e) => e / 1e3;
function tl(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const rl = (e, t, r) =>
    (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  Pd = 1e-7,
  kd = 12;
function Ld(e, t, r, n, i) {
  let s,
    o,
    a = 0;
  do (o = t + (r - t) / 2), (s = rl(o, n, i) - e), s > 0 ? (r = o) : (t = o);
  while (Math.abs(s) > Pd && ++a < kd);
  return o;
}
function on(e, t, r, n) {
  if (e === t && r === n) return Je;
  const i = (s) => Ld(s, 0, 1, e, r);
  return (s) => (s === 0 || s === 1 ? s : rl(i(s), t, n));
}
const nl = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  il = (e) => (t) => 1 - e(1 - t),
  sl = on(0.33, 1.53, 0.69, 0.99),
  go = il(sl),
  ol = nl(go),
  al = (e) =>
    (e *= 2) < 1 ? 0.5 * go(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  vo = (e) => 1 - Math.sin(Math.acos(e)),
  cl = il(vo),
  ll = nl(vo),
  Od = on(0.42, 0, 1, 1),
  Md = on(0, 0, 0.58, 1),
  ul = on(0.42, 0, 0.58, 1),
  Vd = (e) => Array.isArray(e) && typeof e[0] != "number",
  fl = (e) => Array.isArray(e) && typeof e[0] == "number",
  Nd = {
    linear: Je,
    easeIn: Od,
    easeInOut: ul,
    easeOut: Md,
    circIn: vo,
    circInOut: ll,
    circOut: cl,
    backIn: go,
    backInOut: ol,
    backOut: sl,
    anticipate: al,
  },
  Id = (e) => typeof e == "string",
  o0 = (e) => {
    if (fl(e)) {
      xo(e.length === 4);
      const [t, r, n, i] = e;
      return on(t, r, n, i);
    } else if (Id(e)) return Nd[e];
    return e;
  },
  En = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function Ud(e, t) {
  let r = new Set(),
    n = new Set(),
    i = !1,
    s = !1;
  const o = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(u) {
    o.has(u) && (c.schedule(u), e()), u(a);
  }
  const c = {
    schedule: (u, h = !1, f = !1) => {
      const p = f && i ? r : n;
      return h && o.add(u), p.has(u) || p.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), o.delete(u);
    },
    process: (u) => {
      if (((a = u), i)) {
        s = !0;
        return;
      }
      (i = !0),
        ([r, n] = [n, r]),
        r.forEach(l),
        r.clear(),
        (i = !1),
        s && ((s = !1), c.process(u));
    },
  };
  return c;
}
const Hd = 40;
function hl(e, t) {
  let r = !1,
    n = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (r = !0),
    o = En.reduce((g, E) => ((g[E] = Ud(s)), g), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: c,
      preUpdate: u,
      update: h,
      preRender: f,
      render: d,
      postRender: p,
    } = o,
    m = () => {
      const g = gt.useManualTiming ? i.timestamp : performance.now();
      (r = !1),
        gt.useManualTiming ||
          (i.delta = n ? 1e3 / 60 : Math.max(Math.min(g - i.timestamp, Hd), 1)),
        (i.timestamp = g),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        c.process(i),
        u.process(i),
        h.process(i),
        f.process(i),
        d.process(i),
        p.process(i),
        (i.isProcessing = !1),
        r && t && ((n = !1), e(m));
    },
    x = () => {
      (r = !0), (n = !0), i.isProcessing || e(m);
    };
  return {
    schedule: En.reduce((g, E) => {
      const C = o[E];
      return (g[E] = (B, v = !1, D = !1) => (r || x(), C.schedule(B, v, D))), g;
    }, {}),
    cancel: (g) => {
      for (let E = 0; E < En.length; E++) o[En[E]].cancel(g);
    },
    state: i,
    steps: o,
  };
}
const {
  schedule: ye,
  cancel: wt,
  state: ke,
  steps: ts,
} = hl(
  typeof requestAnimationFrame != "undefined" ? requestAnimationFrame : Je,
  !0,
);
let ui;
function jd() {
  ui = void 0;
}
const Ue = {
    now: () => (
      ui === void 0 &&
        Ue.set(
          ke.isProcessing || gt.useManualTiming
            ? ke.timestamp
            : performance.now(),
        ),
      ui
    ),
    set: (e) => {
      (ui = e), queueMicrotask(jd);
    },
  },
  dl = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Eo = dl("--"),
  zd = dl("var(--"),
  bo = (e) => (zd(e) ? qd.test(e.split("/*")[0].trim()) : !1),
  qd =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  vr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Qr = oe(j({}, vr), { transform: (e) => yt(0, 1, e) }),
  bn = oe(j({}, vr), { default: 1 }),
  $r = (e) => Math.round(e * 1e5) / 1e5,
  Co = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function $d(e) {
  return e == null;
}
const Wd =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Ao = (e, t) => (r) =>
    !!(
      (typeof r == "string" && Wd.test(r) && r.startsWith(e)) ||
      (t && !$d(r) && Object.prototype.hasOwnProperty.call(r, t))
    ),
  pl = (e, t, r) => (n) => {
    if (typeof n != "string") return n;
    const [i, s, o, a] = n.match(Co);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [r]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Kd = (e) => yt(0, 255, e),
  rs = oe(j({}, vr), { transform: (e) => Math.round(Kd(e)) }),
  It = {
    test: Ao("rgb", "red"),
    parse: pl("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
      "rgba(" +
      rs.transform(e) +
      ", " +
      rs.transform(t) +
      ", " +
      rs.transform(r) +
      ", " +
      $r(Qr.transform(n)) +
      ")",
  };
function Xd(e) {
  let t = "",
    r = "",
    n = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (r = e.substring(3, 5)),
        (n = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (r = e.substring(2, 3)),
        (n = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (r += r),
        (n += n),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(r, 16),
      blue: parseInt(n, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Fs = { test: Ao("#"), parse: Xd, transform: It.transform },
  an = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Ct = an("deg"),
  ft = an("%"),
  ee = an("px"),
  Gd = an("vh"),
  Yd = an("vw"),
  a0 = oe(j({}, ft), {
    parse: (e) => ft.parse(e) / 100,
    transform: (e) => ft.transform(e * 100),
  }),
  lr = {
    test: Ao("hsl", "hue"),
    parse: pl("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      ft.transform($r(t)) +
      ", " +
      ft.transform($r(r)) +
      ", " +
      $r(Qr.transform(n)) +
      ")",
  },
  De = {
    test: (e) => It.test(e) || Fs.test(e) || lr.test(e),
    parse: (e) =>
      It.test(e) ? It.parse(e) : lr.test(e) ? lr.parse(e) : Fs.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? It.transform(e)
          : lr.transform(e),
    getAnimatableNone: (e) => {
      const t = De.parse(e);
      return (t.alpha = 0), De.transform(t);
    },
  },
  Zd =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Qd(e) {
  var t, r;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Co)) == null ? void 0 : t.length) || 0) +
      (((r = e.match(Zd)) == null ? void 0 : r.length) || 0) >
      0
  );
}
const xl = "number",
  ml = "color",
  Jd = "var",
  ep = "var(",
  c0 = "${}",
  tp =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Jr(e) {
  const t = e.toString(),
    r = [],
    n = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      tp,
      (l) => (
        De.test(l)
          ? (n.color.push(s), i.push(ml), r.push(De.parse(l)))
          : l.startsWith(ep)
            ? (n.var.push(s), i.push(Jd), r.push(l))
            : (n.number.push(s), i.push(xl), r.push(parseFloat(l))),
        ++s,
        c0
      ),
    )
    .split(c0);
  return { values: r, split: a, indexes: n, types: i };
}
function yl(e) {
  return Jr(e).values;
}
function gl(e) {
  const { split: t, types: r } = Jr(e),
    n = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < n; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = r[o];
        a === xl
          ? (s += $r(i[o]))
          : a === ml
            ? (s += De.transform(i[o]))
            : (s += i[o]);
      }
    return s;
  };
}
const rp = (e) =>
  typeof e == "number" ? 0 : De.test(e) ? De.getAnimatableNone(e) : e;
function np(e) {
  const t = yl(e);
  return gl(e)(t.map(rp));
}
const Dt = {
  test: Qd,
  parse: yl,
  createTransformer: gl,
  getAnimatableNone: np,
};
function ns(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? e + (t - e) * 6 * r
      : r < 1 / 2
        ? t
        : r < 2 / 3
          ? e + (t - e) * (2 / 3 - r) * 6
          : e
  );
}
function ip({ hue: e, saturation: t, lightness: r, alpha: n }) {
  (e /= 360), (t /= 100), (r /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = r;
  else {
    const a = r < 0.5 ? r * (1 + t) : r + t - r * t,
      l = 2 * r - a;
    (i = ns(l, a, e + 1 / 3)), (s = ns(l, a, e)), (o = ns(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: n,
  };
}
function Ai(e, t) {
  return (r) => (r > 0 ? t : e);
}
const ge = (e, t, r) => e + (t - e) * r,
  is = (e, t, r) => {
    const n = e * e,
      i = r * (t * t - n) + n;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  sp = [Fs, It, lr],
  op = (e) => sp.find((t) => t.test(e));
function l0(e) {
  const t = op(e);
  if (!t) return !1;
  let r = t.parse(e);
  return t === lr && (r = ip(r)), r;
}
const u0 = (e, t) => {
    const r = l0(e),
      n = l0(t);
    if (!r || !n) return Ai(e, t);
    const i = j({}, r);
    return (s) => (
      (i.red = is(r.red, n.red, s)),
      (i.green = is(r.green, n.green, s)),
      (i.blue = is(r.blue, n.blue, s)),
      (i.alpha = ge(r.alpha, n.alpha, s)),
      It.transform(i)
    );
  },
  Ss = new Set(["none", "hidden"]);
function ap(e, t) {
  return Ss.has(e) ? (r) => (r <= 0 ? e : t) : (r) => (r >= 1 ? t : e);
}
function cp(e, t) {
  return (r) => ge(e, t, r);
}
function Bo(e) {
  return typeof e == "number"
    ? cp
    : typeof e == "string"
      ? bo(e)
        ? Ai
        : De.test(e)
          ? u0
          : fp
      : Array.isArray(e)
        ? vl
        : typeof e == "object"
          ? De.test(e)
            ? u0
            : lp
          : Ai;
}
function vl(e, t) {
  const r = [...e],
    n = r.length,
    i = e.map((s, o) => Bo(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < n; o++) r[o] = i[o](s);
    return r;
  };
}
function lp(e, t) {
  const r = j(j({}, e), t),
    n = {};
  for (const i in r)
    e[i] !== void 0 && t[i] !== void 0 && (n[i] = Bo(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in n) r[s] = n[s](i);
    return r;
  };
}
function up(e, t) {
  var i;
  const r = [],
    n = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      a = e.indexes[o][n[o]],
      l = (i = e.values[a]) != null ? i : 0;
    (r[s] = l), n[o]++;
  }
  return r;
}
const fp = (e, t) => {
  const r = Dt.createTransformer(t),
    n = Jr(e),
    i = Jr(t);
  return n.indexes.var.length === i.indexes.var.length &&
    n.indexes.color.length === i.indexes.color.length &&
    n.indexes.number.length >= i.indexes.number.length
    ? (Ss.has(e) && !i.values.length) || (Ss.has(t) && !n.values.length)
      ? ap(e, t)
      : sn(vl(up(n, i), i.values), r)
    : Ai(e, t);
};
function El(e, t, r) {
  return typeof e == "number" && typeof t == "number" && typeof r == "number"
    ? ge(e, t, r)
    : Bo(e)(e, t);
}
const hp = (e) => {
    const t = ({ timestamp: r }) => e(r);
    return {
      start: (r = !0) => ye.update(t, r),
      stop: () => wt(t),
      now: () => (ke.isProcessing ? ke.timestamp : Ue.now()),
    };
  },
  bl = (e, t, r = 10) => {
    let n = "";
    const i = Math.max(Math.round(t / r), 2);
    for (let s = 0; s < i; s++)
      n += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  },
  Bi = 2e4;
function wo(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < Bi; ) (t += r), (n = e.next(t));
  return t >= Bi ? 1 / 0 : t;
}
function dp(e, t = 100, r) {
  const n = r(oe(j({}, e), { keyframes: [0, t] })),
    i = Math.min(wo(n), Bi);
  return {
    type: "keyframes",
    ease: (s) => n.next(i * s).value / t,
    duration: Qe(i),
  };
}
const pp = 5;
function Cl(e, t, r) {
  const n = Math.max(t - pp, 0);
  return tl(r - e(n), t - n);
}
const Ce = {
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
  ss = 0.001;
function xp({
  duration: e = Ce.duration,
  bounce: t = Ce.bounce,
  velocity: r = Ce.velocity,
  mass: n = Ce.mass,
}) {
  let i,
    s,
    o = 1 - t;
  (o = yt(Ce.minDamping, Ce.maxDamping, o)),
    (e = yt(Ce.minDuration, Ce.maxDuration, Qe(e))),
    o < 1
      ? ((i = (c) => {
          const u = c * o,
            h = u * e,
            f = u - r,
            d = _s(c, o),
            p = Math.exp(-h);
          return ss - (f / d) * p;
        }),
        (s = (c) => {
          const h = c * o * e,
            f = h * r + r,
            d = Math.pow(o, 2) * Math.pow(c, 2) * e,
            p = Math.exp(-h),
            m = _s(Math.pow(c, 2), o);
          return ((-i(c) + ss > 0 ? -1 : 1) * ((f - d) * p)) / m;
        }))
      : ((i = (c) => {
          const u = Math.exp(-c * e),
            h = (c - r) * e + 1;
          return -ss + u * h;
        }),
        (s = (c) => {
          const u = Math.exp(-c * e),
            h = (r - c) * (e * e);
          return u * h;
        }));
  const a = 5 / e,
    l = yp(i, s, a);
  if (((e = ut(e)), isNaN(l)))
    return { stiffness: Ce.stiffness, damping: Ce.damping, duration: e };
  {
    const c = Math.pow(l, 2) * n;
    return { stiffness: c, damping: o * 2 * Math.sqrt(n * c), duration: e };
  }
}
const mp = 12;
function yp(e, t, r) {
  let n = r;
  for (let i = 1; i < mp; i++) n = n - e(n) / t(n);
  return n;
}
function _s(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const gp = ["duration", "bounce"],
  vp = ["stiffness", "damping", "mass"];
function f0(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function Ep(e) {
  let t = j(
    {
      velocity: Ce.velocity,
      stiffness: Ce.stiffness,
      damping: Ce.damping,
      mass: Ce.mass,
      isResolvedFromDuration: !1,
    },
    e,
  );
  if (!f0(e, vp) && f0(e, gp))
    if (e.visualDuration) {
      const r = e.visualDuration,
        n = (2 * Math.PI) / (r * 1.2),
        i = n * n,
        s = 2 * yt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = oe(j({}, t), { mass: Ce.mass, stiffness: i, damping: s });
    } else {
      const r = xp(e);
      (t = oe(j(j({}, t), r), { mass: Ce.mass })),
        (t.isResolvedFromDuration = !0);
    }
  return t;
}
function wi(e = Ce.visualDuration, t = Ce.bounce) {
  const r =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: n, restDelta: i } = r;
  const s = r.keyframes[0],
    o = r.keyframes[r.keyframes.length - 1],
    a = { done: !1, value: s },
    {
      stiffness: l,
      damping: c,
      mass: u,
      duration: h,
      velocity: f,
      isResolvedFromDuration: d,
    } = Ep(oe(j({}, r), { velocity: -Qe(r.velocity || 0) })),
    p = f || 0,
    m = c / (2 * Math.sqrt(l * u)),
    x = o - s,
    b = Qe(Math.sqrt(l / u)),
    y = Math.abs(x) < 5;
  n || (n = y ? Ce.restSpeed.granular : Ce.restSpeed.default),
    i || (i = y ? Ce.restDelta.granular : Ce.restDelta.default);
  let g;
  if (m < 1) {
    const C = _s(b, m);
    g = (B) => {
      const v = Math.exp(-m * b * B);
      return (
        o - v * (((p + m * b * x) / C) * Math.sin(C * B) + x * Math.cos(C * B))
      );
    };
  } else if (m === 1) g = (C) => o - Math.exp(-b * C) * (x + (p + b * x) * C);
  else {
    const C = b * Math.sqrt(m * m - 1);
    g = (B) => {
      const v = Math.exp(-m * b * B),
        D = Math.min(C * B, 300);
      return (
        o - (v * ((p + m * b * x) * Math.sinh(D) + C * x * Math.cosh(D))) / C
      );
    };
  }
  const E = {
    calculatedDuration: (d && h) || null,
    next: (C) => {
      const B = g(C);
      if (d) a.done = C >= h;
      else {
        let v = C === 0 ? p : 0;
        m < 1 && (v = C === 0 ? ut(p) : Cl(g, C, B));
        const D = Math.abs(v) <= n,
          P = Math.abs(o - B) <= i;
        a.done = D && P;
      }
      return (a.value = a.done ? o : B), a;
    },
    toString: () => {
      const C = Math.min(wo(E), Bi),
        B = bl((v) => E.next(C * v).value, C, 30);
      return C + "ms " + B;
    },
    toTransition: () => {},
  };
  return E;
}
wi.applyToOptions = (e) => {
  const t = dp(e, 100, wi);
  return (
    (e.ease = t.ease), (e.duration = ut(t.duration)), (e.type = "keyframes"), e
  );
};
function Ts({
  keyframes: e,
  velocity: t = 0,
  power: r = 0.8,
  timeConstant: n = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  const h = e[0],
    f = { done: !1, value: h },
    d = (D) => (a !== void 0 && D < a) || (l !== void 0 && D > l),
    p = (D) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - D) < Math.abs(l - D)
          ? a
          : l;
  let m = r * t;
  const x = h + m,
    b = o === void 0 ? x : o(x);
  b !== x && (m = b - h);
  const y = (D) => -m * Math.exp(-D / n),
    g = (D) => b + y(D),
    E = (D) => {
      const P = y(D),
        A = g(D);
      (f.done = Math.abs(P) <= c), (f.value = f.done ? b : A);
    };
  let C, B;
  const v = (D) => {
    d(f.value) &&
      ((C = D),
      (B = wi({
        keyframes: [f.value, p(f.value)],
        velocity: Cl(g, D, f.value),
        damping: i,
        stiffness: s,
        restDelta: c,
        restSpeed: u,
      })));
  };
  return (
    v(0),
    {
      calculatedDuration: null,
      next: (D) => {
        let P = !1;
        return (
          !B && C === void 0 && ((P = !0), E(D), v(D)),
          C !== void 0 && D >= C ? B.next(D - C) : (!P && E(D), f)
        );
      },
    }
  );
}
function bp(e, t, r) {
  const n = [],
    i = r || gt.mix || El,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Je : t;
      a = sn(l, a);
    }
    n.push(a);
  }
  return n;
}
function Cp(e, t, { clamp: r = !0, ease: n, mixer: i } = {}) {
  const s = e.length;
  if ((xo(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = bp(t, n, i),
    l = a.length,
    c = (u) => {
      if (o && u < e[0]) return t[0];
      let h = 0;
      if (l > 1) for (; h < e.length - 2 && !(u < e[h + 1]); h++);
      const f = Zr(e[h], e[h + 1], u);
      return a[h](f);
    };
  return r ? (u) => c(yt(e[0], e[s - 1], u)) : c;
}
function Ap(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const i = Zr(0, t, n);
    e.push(ge(r, 1, i));
  }
}
function Bp(e) {
  const t = [0];
  return Ap(t, e.length - 1), t;
}
function wp(e, t) {
  return e.map((r) => r * t);
}
function Dp(e, t) {
  return e.map(() => t || ul).splice(0, e.length - 1);
}
function Wr({
  duration: e = 300,
  keyframes: t,
  times: r,
  ease: n = "easeInOut",
}) {
  const i = Vd(n) ? n.map(o0) : o0(n),
    s = { done: !1, value: t[0] },
    o = wp(r && r.length === t.length ? r : Bp(t), e),
    a = Cp(o, t, { ease: Array.isArray(i) ? i : Dp(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
  };
}
const Fp = (e) => e !== null;
function Do(e, { repeat: t, repeatType: r = "loop" }, n, i = 1) {
  const s = e.filter(Fp),
    a = i < 0 || (t && r !== "loop" && t % 2 === 1) ? 0 : s.length - 1;
  return !a || n === void 0 ? s[a] : n;
}
const Sp = { decay: Ts, inertia: Ts, tween: Wr, keyframes: Wr, spring: wi };
function Al(e) {
  typeof e.type == "string" && (e.type = Sp[e.type]);
}
class Fo {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, r) {
    return this.finished.then(t, r);
  }
}
const _p = (e) => e / 100;
class So extends Fo {
  constructor(t) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var n, i;
        const { motionValue: r } = this.options;
        r && r.updatedAt !== Ue.now() && this.tick(Ue.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (i = (n = this.options).onStop) == null || i.call(n));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Al(t);
    const {
      type: r = Wr,
      repeat: n = 0,
      repeatDelay: i = 0,
      repeatType: s,
      velocity: o = 0,
    } = t;
    let { keyframes: a } = t;
    const l = r || Wr;
    l !== Wr &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = sn(_p, El(a[0], a[1]))), (a = [0, 100]));
    const c = l(oe(j({}, t), { keyframes: a }));
    s === "mirror" &&
      (this.mirroredGenerator = l(
        oe(j({}, t), { keyframes: [...a].reverse(), velocity: -o }),
      )),
      c.calculatedDuration === null && (c.calculatedDuration = wo(c));
    const { calculatedDuration: u } = c;
    (this.calculatedDuration = u),
      (this.resolvedDuration = u + i),
      (this.totalDuration = this.resolvedDuration * (n + 1) - i),
      (this.generator = c);
  }
  updateTime(t) {
    const r = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = r);
  }
  tick(t, r = !1) {
    const {
      generator: n,
      totalDuration: i,
      mixKeyframes: s,
      mirroredGenerator: o,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return n.next(0);
    const {
      delay: c = 0,
      keyframes: u,
      repeat: h,
      repeatType: f,
      repeatDelay: d,
      type: p,
      onUpdate: m,
      finalKeyframe: x,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - i / this.speed, this.startTime)),
      r ? (this.currentTime = t) : this.updateTime(t);
    const b = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
      y = this.playbackSpeed >= 0 ? b < 0 : b > i;
    (this.currentTime = Math.max(b, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = i);
    let g = this.currentTime,
      E = n;
    if (h) {
      const D = Math.min(this.currentTime, i) / a;
      let P = Math.floor(D),
        A = D % 1;
      !A && D >= 1 && (A = 1),
        A === 1 && P--,
        (P = Math.min(P, h + 1)),
        !!(P % 2) &&
          (f === "reverse"
            ? ((A = 1 - A), d && (A -= d / a))
            : f === "mirror" && (E = o)),
        (g = yt(0, 1, A) * a);
    }
    const C = y ? { done: !1, value: u[0] } : E.next(g);
    s && (C.value = s(C.value));
    let { done: B } = C;
    !y &&
      l !== null &&
      (B =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const v =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && B));
    return (
      v && p !== Ts && (C.value = Do(u, this.options, x, this.speed)),
      m && m(C.value),
      v && this.finish(),
      C
    );
  }
  then(t, r) {
    return this.finished.then(t, r);
  }
  get duration() {
    return Qe(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + Qe(t);
  }
  get time() {
    return Qe(this.currentTime);
  }
  set time(t) {
    var r;
    (t = ut(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      (r = this.driver) == null || r.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(Ue.now());
    const r = this.playbackSpeed !== t;
    (this.playbackSpeed = t), r && (this.time = Qe(this.currentTime));
  }
  play() {
    var i, s;
    if (this.isStopped) return;
    const { driver: t = hp, startTime: r } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))),
      (s = (i = this.options).onPlay) == null || s.call(i);
    const n = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = n))
      : this.holdTime !== null
        ? (this.startTime = n - this.holdTime)
        : this.startTime || (this.startTime = r != null ? r : n),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(Ue.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var t, r;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (r = (t = this.options).onComplete) == null || r.call(t);
  }
  cancel() {
    var t, r;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (r = (t = this.options).onCancel) == null || r.call(t);
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
  attachTimeline(t) {
    var r;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (r = this.driver) == null || r.stop(),
      t.observe(this)
    );
  }
}
function Tp(e) {
  var t;
  for (let r = 1; r < e.length; r++) (t = e[r]) != null || (e[r] = e[r - 1]);
}
const Ut = (e) => (e * 180) / Math.PI,
  Rs = (e) => {
    const t = Ut(Math.atan2(e[1], e[0]));
    return Ps(t);
  },
  Rp = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Rs,
    rotateZ: Rs,
    skewX: (e) => Ut(Math.atan(e[1])),
    skewY: (e) => Ut(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  Ps = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  h0 = Rs,
  d0 = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  p0 = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  Pp = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: d0,
    scaleY: p0,
    scale: (e) => (d0(e) + p0(e)) / 2,
    rotateX: (e) => Ps(Ut(Math.atan2(e[6], e[5]))),
    rotateY: (e) => Ps(Ut(Math.atan2(-e[2], e[0]))),
    rotateZ: h0,
    rotate: h0,
    skewX: (e) => Ut(Math.atan(e[4])),
    skewY: (e) => Ut(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function ks(e) {
  return e.includes("scale") ? 1 : 0;
}
function Ls(e, t) {
  if (!e || e === "none") return ks(t);
  const r = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let n, i;
  if (r) (n = Pp), (i = r);
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (n = Rp), (i = a);
  }
  if (!i) return ks(t);
  const s = n[t],
    o = i[1].split(",").map(Lp);
  return typeof s == "function" ? s(o) : o[s];
}
const kp = (e, t) => {
  const { transform: r = "none" } = getComputedStyle(e);
  return Ls(r, t);
};
function Lp(e) {
  return parseFloat(e.trim());
}
const Er = [
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
  br = new Set(Er),
  x0 = (e) => e === vr || e === ee,
  Op = new Set(["x", "y", "z"]),
  Mp = Er.filter((e) => !Op.has(e));
function Vp(e) {
  const t = [];
  return (
    Mp.forEach((r) => {
      const n = e.getValue(r);
      n !== void 0 &&
        (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const jt = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => Ls(t, "x"),
  y: (e, { transform: t }) => Ls(t, "y"),
};
jt.translateX = jt.x;
jt.translateY = jt.y;
const zt = new Set();
let Os = !1,
  Ms = !1,
  Vs = !1;
function Bl() {
  if (Ms) {
    const e = Array.from(zt).filter((n) => n.needsMeasurement),
      t = new Set(e.map((n) => n.element)),
      r = new Map();
    t.forEach((n) => {
      const i = Vp(n);
      i.length && (r.set(n, i), n.render());
    }),
      e.forEach((n) => n.measureInitialState()),
      t.forEach((n) => {
        n.render();
        const i = r.get(n);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = n.getValue(s)) == null || a.set(o);
          });
      }),
      e.forEach((n) => n.measureEndState()),
      e.forEach((n) => {
        n.suspendedScrollY !== void 0 && window.scrollTo(0, n.suspendedScrollY);
      });
  }
  (Ms = !1), (Os = !1), zt.forEach((e) => e.complete(Vs)), zt.clear();
}
function wl() {
  zt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Ms = !0);
  });
}
function Np() {
  (Vs = !0), wl(), Bl(), (Vs = !1);
}
class _o {
  constructor(t, r, n, i, s, o = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = r),
      (this.name = n),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (zt.add(this),
          Os || ((Os = !0), ye.read(wl), ye.resolveKeyframes(Bl)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: r,
      element: n,
      motionValue: i,
    } = this;
    if (t[0] === null) {
      const s = i == null ? void 0 : i.get(),
        o = t[t.length - 1];
      if (s !== void 0) t[0] = s;
      else if (n && r) {
        const a = n.readValue(r, o);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = o), i && s === void 0 && i.set(t[0]);
    }
    Tp(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      zt.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (zt.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Ip = (e) => e.startsWith("--");
function Up(e, t, r) {
  Ip(t) ? e.style.setProperty(t, r) : (e.style[t] = r);
}
const Hp = mo(() => window.ScrollTimeline !== void 0),
  jp = {};
function zp(e, t) {
  const r = mo(e);
  return () => {
    var n;
    return (n = jp[t]) != null ? n : r();
  };
}
const Dl = zp(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch (e) {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  jr = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
  m0 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: jr([0, 0.65, 0.55, 1]),
    circOut: jr([0.55, 0, 1, 0.45]),
    backIn: jr([0.31, 0.01, 0.66, -0.59]),
    backOut: jr([0.33, 1.53, 0.69, 0.99]),
  };
function Fl(e, t) {
  if (e)
    return typeof e == "function"
      ? Dl()
        ? bl(e, t)
        : "ease-out"
      : fl(e)
        ? jr(e)
        : Array.isArray(e)
          ? e.map((r) => Fl(r, t) || m0.easeOut)
          : m0[e];
}
function qp(
  e,
  t,
  r,
  {
    delay: n = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  c = void 0,
) {
  const u = { [t]: r };
  l && (u.offset = l);
  const h = Fl(a, i);
  Array.isArray(h) && (u.easing = h);
  const f = {
    delay: n,
    duration: i,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: s + 1,
    direction: o === "reverse" ? "alternate" : "normal",
  };
  return c && (f.pseudoElement = c), e.animate(u, f);
}
function Sl(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function $p(r) {
  var n = r,
    { type: e } = n,
    t = Xe(n, ["type"]);
  var i, s;
  return Sl(e) && Dl()
    ? e.applyToOptions(t)
    : ((i = t.duration) != null || (t.duration = 300),
      (s = t.ease) != null || (t.ease = "easeOut"),
      t);
}
class Wp extends Fo {
  constructor(t) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
      return;
    const {
      element: r,
      name: n,
      keyframes: i,
      pseudoElement: s,
      allowFlatten: o = !1,
      finalKeyframe: a,
      onComplete: l,
    } = t;
    (this.isPseudoElement = !!s),
      (this.allowFlatten = o),
      (this.options = t),
      xo(typeof t.type != "string");
    const c = $p(t);
    (this.animation = qp(r, n, i, c, s)),
      c.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !s)) {
          const u = Do(i, this.options, a, this.speed);
          this.updateMotionValue ? this.updateMotionValue(u) : Up(r, n, u),
            this.animation.cancel();
        }
        l == null || l(), this.notifyFinished();
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
    var t, r;
    (r = (t = this.animation).finish) == null || r.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch (t) {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var t, r;
    this.isPseudoElement ||
      (r = (t = this.animation).commitStyles) == null ||
      r.call(t);
  }
  get duration() {
    var r, n;
    const t =
      ((n =
        (r = this.animation.effect) == null ? void 0 : r.getComputedTiming) ==
      null
        ? void 0
        : n.call(r).duration) || 0;
    return Qe(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + Qe(t);
  }
  get time() {
    return Qe(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    (this.finishedTime = null), (this.animation.currentTime = ut(t));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: r }) {
    var n;
    return (
      this.allowFlatten &&
        ((n = this.animation.effect) == null ||
          n.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && Hp() ? ((this.animation.timeline = t), Je) : r(this)
    );
  }
}
const _l = { anticipate: al, backInOut: ol, circInOut: ll };
function Kp(e) {
  return e in _l;
}
function Xp(e) {
  typeof e.ease == "string" && Kp(e.ease) && (e.ease = _l[e.ease]);
}
const y0 = 10;
class Gp extends Wp {
  constructor(t) {
    Xp(t),
      Al(t),
      super(t),
      t.startTime && (this.startTime = t.startTime),
      (this.options = t);
  }
  updateMotionValue(t) {
    var u;
    const c = this.options,
      { motionValue: r, onUpdate: n, onComplete: i, element: s } = c,
      o = Xe(c, ["motionValue", "onUpdate", "onComplete", "element"]);
    if (!r) return;
    if (t !== void 0) {
      r.set(t);
      return;
    }
    const a = new So(oe(j({}, o), { autoplay: !1 })),
      l = ut((u = this.finishedTime) != null ? u : this.time);
    r.setWithVelocity(a.sample(l - y0).value, a.sample(l).value, y0), a.stop();
  }
}
const g0 = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Dt.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function Yp(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let r = 0; r < e.length; r++) if (e[r] !== t) return !0;
}
function Zp(e, t, r, n) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = g0(i, t),
    a = g0(s, t);
  return !o || !a ? !1 : Yp(e) || ((r === "spring" || Sl(r)) && n);
}
function Ns(e) {
  (e.duration = 0), (e.type = "keyframes");
}
const Qp = new Set(["opacity", "clipPath", "filter", "transform"]),
  Jp = mo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function ex(e) {
  var u;
  const {
    motionValue: t,
    name: r,
    repeatDelay: n,
    repeatType: i,
    damping: s,
    type: o,
  } = e;
  if (
    !(
      ((u = t == null ? void 0 : t.owner) == null
        ? void 0
        : u.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: l, transformTemplate: c } = t.owner.getProps();
  return (
    Jp() &&
    r &&
    Qp.has(r) &&
    (r !== "transform" || !c) &&
    !l &&
    !n &&
    i !== "mirror" &&
    s !== 0 &&
    o !== "inertia"
  );
}
const tx = 40;
class rx extends Fo {
  constructor(f) {
    var d = f,
      {
        autoplay: t = !0,
        delay: r = 0,
        type: n = "keyframes",
        repeat: i = 0,
        repeatDelay: s = 0,
        repeatType: o = "loop",
        keyframes: a,
        name: l,
        motionValue: c,
        element: u,
      } = d,
      h = Xe(d, [
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
    var x;
    super(),
      (this.stop = () => {
        var b, y;
        this._animation &&
          (this._animation.stop(),
          (b = this.stopTimeline) == null || b.call(this)),
          (y = this.keyframeResolver) == null || y.cancel();
      }),
      (this.createdAt = Ue.now());
    const p = j(
        {
          autoplay: t,
          delay: r,
          type: n,
          repeat: i,
          repeatDelay: s,
          repeatType: o,
          name: l,
          motionValue: c,
          element: u,
        },
        h,
      ),
      m = (u == null ? void 0 : u.KeyframeResolver) || _o;
    (this.keyframeResolver = new m(
      a,
      (b, y, g) => this.onKeyframesResolved(b, y, p, !g),
      l,
      c,
      u,
    )),
      (x = this.keyframeResolver) == null || x.scheduleResolve();
  }
  onKeyframesResolved(t, r, n, i) {
    this.keyframeResolver = void 0;
    const {
      name: s,
      type: o,
      velocity: a,
      delay: l,
      isHandoff: c,
      onUpdate: u,
    } = n;
    (this.resolvedAt = Ue.now()),
      Zp(t, s, o, a) ||
        ((gt.instantAnimations || !l) && (u == null || u(Do(t, n, r))),
        (t[0] = t[t.length - 1]),
        Ns(n),
        (n.repeat = 0));
    const h = i
        ? this.resolvedAt
          ? this.resolvedAt - this.createdAt > tx
            ? this.resolvedAt
            : this.createdAt
          : this.createdAt
        : void 0,
      f = oe(j({ startTime: h, finalKeyframe: r }, n), { keyframes: t }),
      d =
        !c && ex(f)
          ? new Gp(oe(j({}, f), { element: f.motionValue.owner.current }))
          : new So(f);
    d.finished.then(() => this.notifyFinished()).catch(Je),
      this.pendingTimeline &&
        ((this.stopTimeline = d.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = d);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, r) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), Np()),
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
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
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
    var t;
    this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel();
  }
}
const nx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function ix(e) {
  const t = nx.exec(e);
  if (!t) return [,];
  const [, r, n, i] = t;
  return [`--${r != null ? r : n}`, i];
}
function Tl(e, t, r = 1) {
  const [n, i] = ix(e);
  if (!n) return;
  const s = window.getComputedStyle(t).getPropertyValue(n);
  if (s) {
    const o = s.trim();
    return Qc(o) ? parseFloat(o) : o;
  }
  return bo(i) ? Tl(i, t, r + 1) : i;
}
function To(e, t) {
  var r, n;
  return (n =
    (r = e == null ? void 0 : e[t]) != null
      ? r
      : e == null
        ? void 0
        : e.default) != null
    ? n
    : e;
}
const Rl = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Er,
  ]),
  sx = { test: (e) => e === "auto", parse: (e) => e },
  Pl = (e) => (t) => t.test(e),
  kl = [vr, ee, ft, Ct, Yd, Gd, sx],
  v0 = (e) => kl.find(Pl(e));
function ox(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || el(e)
      : !0;
}
const ax = new Set(["brightness", "contrast", "saturate", "opacity"]);
function cx(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [n] = r.match(Co) || [];
  if (!n) return e;
  const i = r.replace(n, "");
  let s = ax.has(t) ? 1 : 0;
  return n !== r && (s *= 100), t + "(" + s + i + ")";
}
const lx = /\b([a-z-]*)\(.*?\)/gu,
  Is = oe(j({}, Dt), {
    getAnimatableNone: (e) => {
      const t = e.match(lx);
      return t ? t.map(cx).join(" ") : e;
    },
  }),
  E0 = oe(j({}, vr), { transform: Math.round }),
  ux = {
    rotate: Ct,
    rotateX: Ct,
    rotateY: Ct,
    rotateZ: Ct,
    scale: bn,
    scaleX: bn,
    scaleY: bn,
    scaleZ: bn,
    skew: Ct,
    skewX: Ct,
    skewY: Ct,
    distance: ee,
    translateX: ee,
    translateY: ee,
    translateZ: ee,
    x: ee,
    y: ee,
    z: ee,
    perspective: ee,
    transformPerspective: ee,
    opacity: Qr,
    originX: a0,
    originY: a0,
    originZ: ee,
  },
  Ro = oe(
    j(
      {
        borderWidth: ee,
        borderTopWidth: ee,
        borderRightWidth: ee,
        borderBottomWidth: ee,
        borderLeftWidth: ee,
        borderRadius: ee,
        radius: ee,
        borderTopLeftRadius: ee,
        borderTopRightRadius: ee,
        borderBottomRightRadius: ee,
        borderBottomLeftRadius: ee,
        width: ee,
        maxWidth: ee,
        height: ee,
        maxHeight: ee,
        top: ee,
        right: ee,
        bottom: ee,
        left: ee,
        padding: ee,
        paddingTop: ee,
        paddingRight: ee,
        paddingBottom: ee,
        paddingLeft: ee,
        margin: ee,
        marginTop: ee,
        marginRight: ee,
        marginBottom: ee,
        marginLeft: ee,
        backgroundPositionX: ee,
        backgroundPositionY: ee,
      },
      ux,
    ),
    { zIndex: E0, fillOpacity: Qr, strokeOpacity: Qr, numOctaves: E0 },
  ),
  fx = oe(j({}, Ro), {
    color: De,
    backgroundColor: De,
    outlineColor: De,
    fill: De,
    stroke: De,
    borderColor: De,
    borderTopColor: De,
    borderRightColor: De,
    borderBottomColor: De,
    borderLeftColor: De,
    filter: Is,
    WebkitFilter: Is,
  }),
  Ll = (e) => fx[e];
function Ol(e, t) {
  let r = Ll(e);
  return (
    r !== Is && (r = Dt), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
  );
}
const hx = new Set(["auto", "none", "0"]);
function dx(e, t, r) {
  let n = 0,
    i;
  for (; n < e.length && !i; ) {
    const s = e[n];
    typeof s == "string" && !hx.has(s) && Jr(s).values.length && (i = e[n]),
      n++;
  }
  if (i && r) for (const s of t) e[s] = Ol(r, i);
}
class px extends _o {
  constructor(t, r, n, i, s) {
    super(t, r, n, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: r, name: n } = this;
    if (!r || !r.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && ((c = c.trim()), bo(c))) {
        const u = Tl(c, r.current);
        u !== void 0 && (t[l] = u),
          l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !Rl.has(n) || t.length !== 2)) return;
    const [i, s] = t,
      o = v0(i),
      a = v0(s);
    if (o !== a)
      if (x0(o) && x0(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else jt[n] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: r } = this,
      n = [];
    for (let i = 0; i < t.length; i++) (t[i] === null || ox(t[i])) && n.push(i);
    n.length && dx(t, n, r);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: r, name: n } = this;
    if (!t || !t.current) return;
    n === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = jt[n](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (r[0] = this.measuredOrigin);
    const i = r[r.length - 1];
    i !== void 0 && t.getValue(n, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: r, unresolvedKeyframes: n } = this;
    if (!t || !t.current) return;
    const i = t.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const s = n.length - 1,
      o = n[s];
    (n[s] = jt[r](t.measureViewportBox(), window.getComputedStyle(t.current))),
      o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, c]) => {
          t.getValue(l).set(c);
        }),
      this.resolveNoneKeyframes();
  }
}
function xx(e, t, r) {
  var n;
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    let i = document;
    const s =
      (n = r == null ? void 0 : r[e]) != null ? n : i.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
const Ml = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function Vl(e) {
  return Jc(e) && "offsetHeight" in e;
}
const b0 = 30,
  mx = (e) => !isNaN(parseFloat(e));
class yx {
  constructor(t, r = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (n) => {
        var s;
        const i = Ue.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(n),
          this.current !== this.prev &&
            ((s = this.events.change) == null || s.notify(this.current),
            this.dependents))
        )
          for (const o of this.dependents) o.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = r.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Ue.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = mx(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new yo());
    const n = this.events[t].add(r);
    return t === "change"
      ? () => {
          n(),
            ye.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : n;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, r) {
    (this.passiveEffect = t), (this.stopPassiveEffect = r);
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, r, n) {
    this.set(r),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - n);
  }
  jump(t, r = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      r && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Ue.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > b0
    )
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, b0);
    return tl(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((r) => {
        (this.hasAnimated = !0),
          (this.animation = t(r)),
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
    var t, r;
    (t = this.dependents) == null || t.clear(),
      (r = this.events.destroy) == null || r.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function mr(e, t) {
  return new yx(e, t);
}
const { schedule: Po } = hl(queueMicrotask, !1),
  tt = { x: !1, y: !1 };
function Nl() {
  return tt.x || tt.y;
}
function gx(e) {
  return e === "x" || e === "y"
    ? tt[e]
      ? null
      : ((tt[e] = !0),
        () => {
          tt[e] = !1;
        })
    : tt.x || tt.y
      ? null
      : ((tt.x = tt.y = !0),
        () => {
          tt.x = tt.y = !1;
        });
}
function Il(e, t) {
  const r = xx(e),
    n = new AbortController(),
    i = oe(j({ passive: !0 }, t), { signal: n.signal });
  return [r, i, () => n.abort()];
}
function C0(e) {
  return !(e.pointerType === "touch" || Nl());
}
function vx(e, t, r = {}) {
  const [n, i, s] = Il(e, r),
    o = (a) => {
      if (!C0(a)) return;
      const { target: l } = a,
        c = t(l, a);
      if (typeof c != "function" || !l) return;
      const u = (h) => {
        C0(h) && (c(h), l.removeEventListener("pointerleave", u));
      };
      l.addEventListener("pointerleave", u, i);
    };
  return (
    n.forEach((a) => {
      a.addEventListener("pointerenter", o, i);
    }),
    s
  );
}
const Ul = (e, t) => (t ? (e === t ? !0 : Ul(e, t.parentElement)) : !1),
  ko = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  Ex = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function bx(e) {
  return Ex.has(e.tagName) || e.tabIndex !== -1;
}
const fi = new WeakSet();
function A0(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function os(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const Cx = (e, t) => {
  const r = e.currentTarget;
  if (!r) return;
  const n = A0(() => {
    if (fi.has(r)) return;
    os(r, "down");
    const i = A0(() => {
        os(r, "up");
      }),
      s = () => os(r, "cancel");
    r.addEventListener("keyup", i, t), r.addEventListener("blur", s, t);
  });
  r.addEventListener("keydown", n, t),
    r.addEventListener("blur", () => r.removeEventListener("keydown", n), t);
};
function B0(e) {
  return ko(e) && !Nl();
}
function Ax(e, t, r = {}) {
  const [n, i, s] = Il(e, r),
    o = (a) => {
      const l = a.currentTarget;
      if (!B0(a)) return;
      fi.add(l);
      const c = t(l, a),
        u = (d, p) => {
          window.removeEventListener("pointerup", h),
            window.removeEventListener("pointercancel", f),
            fi.has(l) && fi.delete(l),
            B0(d) && typeof c == "function" && c(d, { success: p });
        },
        h = (d) => {
          u(
            d,
            l === window ||
              l === document ||
              r.useGlobalTarget ||
              Ul(l, d.target),
          );
        },
        f = (d) => {
          u(d, !1);
        };
      window.addEventListener("pointerup", h, i),
        window.addEventListener("pointercancel", f, i);
    };
  return (
    n.forEach((a) => {
      (r.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        Vl(a) &&
          (a.addEventListener("focus", (c) => Cx(c, i)),
          !bx(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
    }),
    s
  );
}
function Hl(e) {
  return Jc(e) && "ownerSVGElement" in e;
}
function Bx(e) {
  return Hl(e) && e.tagName === "svg";
}
const Me = (e) => !!(e && e.getVelocity),
  wx = [...kl, De, Dt],
  Dx = (e) => wx.find(Pl(e)),
  Lo = Y.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function w0(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Fx(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((i) => {
      const s = w0(i, t);
      return !r && typeof s == "function" && (r = !0), s;
    });
    if (r)
      return () => {
        for (let i = 0; i < n.length; i++) {
          const s = n[i];
          typeof s == "function" ? s() : w0(e[i], null);
        }
      };
  };
}
function Sx(...e) {
  return Y.useCallback(Fx(...e), e);
}
class _x extends Y.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const n = r.offsetParent,
        i = (Vl(n) && n.offsetWidth) || 0,
        s = this.props.sizeRef.current;
      (s.height = r.offsetHeight || 0),
        (s.width = r.offsetWidth || 0),
        (s.top = r.offsetTop),
        (s.left = r.offsetLeft),
        (s.right = i - s.width - s.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Tx({ children: e, isPresent: t, anchorX: r, root: n }) {
  const i = Y.useId(),
    s = Y.useRef(null),
    o = Y.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: a } = Y.useContext(Lo),
    l = Sx(s, e == null ? void 0 : e.ref);
  return (
    Y.useInsertionEffect(() => {
      const { width: c, height: u, top: h, left: f, right: d } = o.current;
      if (t || !s.current || !c || !u) return;
      const p = r === "left" ? `left: ${f}` : `right: ${d}`;
      s.current.dataset.motionPopId = i;
      const m = document.createElement("style");
      a && (m.nonce = a);
      const x = n != null ? n : document.head;
      return (
        x.appendChild(m),
        m.sheet &&
          m.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${p}px !important;
            top: ${h}px !important;
          }
        `),
        () => {
          x.contains(m) && x.removeChild(m);
        }
      );
    }, [t]),
    mt.jsx(_x, {
      isPresent: t,
      childRef: s,
      sizeRef: o,
      children: Y.cloneElement(e, { ref: l }),
    })
  );
}
const Rx = ({
  children: e,
  initial: t,
  isPresent: r,
  onExitComplete: n,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
  anchorX: a,
  root: l,
}) => {
  const c = uo(Px),
    u = Y.useId();
  let h = !0,
    f = Y.useMemo(
      () => (
        (h = !1),
        {
          id: u,
          initial: t,
          isPresent: r,
          custom: i,
          onExitComplete: (d) => {
            c.set(d, !0);
            for (const p of c.values()) if (!p) return;
            n && n();
          },
          register: (d) => (c.set(d, !1), () => c.delete(d)),
        }
      ),
      [r, c, n],
    );
  return (
    s && h && (f = j({}, f)),
    Y.useMemo(() => {
      c.forEach((d, p) => c.set(p, !1));
    }, [r]),
    Y.useEffect(() => {
      !r && !c.size && n && n();
    }, [r]),
    o === "popLayout" &&
      (e = mt.jsx(Tx, { isPresent: r, anchorX: a, root: l, children: e })),
    mt.jsx(Ri.Provider, { value: f, children: e })
  );
};
function Px() {
  return new Map();
}
function jl(e = !0) {
  const t = Y.useContext(Ri);
  if (t === null) return [!0, null];
  const { isPresent: r, onExitComplete: n, register: i } = t,
    s = Y.useId();
  Y.useEffect(() => {
    if (e) return i(s);
  }, [e]);
  const o = Y.useCallback(() => e && n && n(s), [s, n, e]);
  return !r && n ? [!1, o] : [!0];
}
const Cn = (e) => e.key || "";
function D0(e) {
  const t = [];
  return (
    Y.Children.forEach(e, (r) => {
      Y.isValidElement(r) && t.push(r);
    }),
    t
  );
}
const Iv = ({
    children: e,
    custom: t,
    initial: r = !0,
    onExitComplete: n,
    presenceAffectsLayout: i = !0,
    mode: s = "sync",
    propagate: o = !1,
    anchorX: a = "left",
    root: l,
  }) => {
    const [c, u] = jl(o),
      h = Y.useMemo(() => D0(e), [e]),
      f = o && !c ? [] : h.map(Cn),
      d = Y.useRef(!0),
      p = Y.useRef(h),
      m = uo(() => new Map()),
      [x, b] = Y.useState(h),
      [y, g] = Y.useState(h);
    Zc(() => {
      (d.current = !1), (p.current = h);
      for (let B = 0; B < y.length; B++) {
        const v = Cn(y[B]);
        f.includes(v) ? m.delete(v) : m.get(v) !== !0 && m.set(v, !1);
      }
    }, [y, f.length, f.join("-")]);
    const E = [];
    if (h !== x) {
      let B = [...h];
      for (let v = 0; v < y.length; v++) {
        const D = y[v],
          P = Cn(D);
        f.includes(P) || (B.splice(v, 0, D), E.push(D));
      }
      return s === "wait" && E.length && (B = E), g(D0(B)), b(h), null;
    }
    const { forceRender: C } = Y.useContext(lo);
    return mt.jsx(mt.Fragment, {
      children: y.map((B) => {
        const v = Cn(B),
          D = o && !c ? !1 : h === y || f.includes(v),
          P = () => {
            if (m.has(v)) m.set(v, !0);
            else return;
            let A = !0;
            m.forEach((S) => {
              S || (A = !1);
            }),
              A &&
                (C == null || C(),
                g(p.current),
                o && (u == null || u()),
                n && n());
          };
        return mt.jsx(
          Rx,
          {
            isPresent: D,
            initial: !d.current || r ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: i,
            mode: s,
            root: l,
            onExitComplete: D ? void 0 : P,
            anchorX: a,
            children: B,
          },
          v,
        );
      }),
    });
  },
  zl = Y.createContext({ strict: !1 }),
  F0 = {
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
  yr = {};
for (const e in F0) yr[e] = { isEnabled: (t) => F0[e].some((r) => !!t[r]) };
function kx(e) {
  for (const t in e) yr[t] = j(j({}, yr[t]), e[t]);
}
const Lx = new Set([
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
function Di(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    Lx.has(e)
  );
}
let ql = (e) => !Di(e);
function Ox(e) {
  typeof e == "function" && (ql = (t) => (t.startsWith("on") ? !Di(t) : e(t)));
}
try {
  Ox(require("@emotion/is-prop-valid").default);
} catch (e) {}
function Mx(e, t, r) {
  const n = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((ql(i) ||
        (r === !0 && Di(i)) ||
        (!t && !Di(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (n[i] = e[i]));
  return n;
}
const Pi = Y.createContext({});
function ki(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function en(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Oo = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Mo = ["initial", ...Oo];
function Li(e) {
  return ki(e.animate) || Mo.some((t) => en(e[t]));
}
function $l(e) {
  return !!(Li(e) || e.variants);
}
function Vx(e, t) {
  if (Li(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || en(r) ? r : void 0,
      animate: en(n) ? n : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Nx(e) {
  const { initial: t, animate: r } = Vx(e, Y.useContext(Pi));
  return Y.useMemo(() => ({ initial: t, animate: r }), [S0(t), S0(r)]);
}
function S0(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const tn = {};
function Ix(e) {
  for (const t in e) (tn[t] = e[t]), Eo(t) && (tn[t].isCSSVariable = !0);
}
function Wl(e, { layout: t, layoutId: r }) {
  return (
    br.has(e) ||
    e.startsWith("origin") ||
    ((t || r !== void 0) && (!!tn[e] || e === "opacity"))
  );
}
const Ux = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Hx = Er.length;
function jx(e, t, r) {
  let n = "",
    i = !0;
  for (let s = 0; s < Hx; s++) {
    const o = Er[s],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || r)
    ) {
      const c = Ml(a, Ro[o]);
      if (!l) {
        i = !1;
        const u = Ux[o] || o;
        n += `${u}(${c}) `;
      }
      r && (t[o] = c);
    }
  }
  return (n = n.trim()), r ? (n = r(t, i ? "" : n)) : i && (n = "none"), n;
}
function Vo(e, t, r) {
  const { style: n, vars: i, transformOrigin: s } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const c = t[l];
    if (br.has(l)) {
      o = !0;
      continue;
    } else if (Eo(l)) {
      i[l] = c;
      continue;
    } else {
      const u = Ml(c, Ro[l]);
      l.startsWith("origin") ? ((a = !0), (s[l] = u)) : (n[l] = u);
    }
  }
  if (
    (t.transform ||
      (o || r
        ? (n.transform = jx(t, e.transform, r))
        : n.transform && (n.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = s;
    n.transformOrigin = `${l} ${c} ${u}`;
  }
}
const No = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Kl(e, t, r) {
  for (const n in t) !Me(t[n]) && !Wl(n, r) && (e[n] = t[n]);
}
function zx({ transformTemplate: e }, t) {
  return Y.useMemo(() => {
    const r = No();
    return Vo(r, t, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function qx(e, t) {
  const r = e.style || {},
    n = {};
  return Kl(n, r, e), Object.assign(n, zx(e, t)), n;
}
function $x(e, t) {
  const r = {},
    n = qx(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none"),
      (n.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = n),
    r
  );
}
const Wx = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Kx = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Xx(e, t, r = 1, n = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? Wx : Kx;
  e[s.offset] = ee.transform(-n);
  const o = ee.transform(t),
    a = ee.transform(r);
  e[s.array] = `${o} ${a}`;
}
function Xl(e, h, l, c, u) {
  var f = h,
    {
      attrX: t,
      attrY: r,
      attrScale: n,
      pathLength: i,
      pathSpacing: s = 1,
      pathOffset: o = 0,
    } = f,
    a = Xe(f, [
      "attrX",
      "attrY",
      "attrScale",
      "pathLength",
      "pathSpacing",
      "pathOffset",
    ]);
  var m, x;
  if ((Vo(e, a, c), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: p } = e;
  d.transform && ((p.transform = d.transform), delete d.transform),
    (p.transform || d.transformOrigin) &&
      ((p.transformOrigin = (m = d.transformOrigin) != null ? m : "50% 50%"),
      delete d.transformOrigin),
    p.transform &&
      ((p.transformBox =
        (x = u == null ? void 0 : u.transformBox) != null ? x : "fill-box"),
      delete d.transformBox),
    t !== void 0 && (d.x = t),
    r !== void 0 && (d.y = r),
    n !== void 0 && (d.scale = n),
    i !== void 0 && Xx(d, i, s, o, !1);
}
const Gl = () => oe(j({}, No()), { attrs: {} }),
  Yl = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Gx(e, t, r, n) {
  const i = Y.useMemo(() => {
    const s = Gl();
    return (
      Xl(s, t, Yl(n), e.transformTemplate, e.style),
      oe(j({}, s.attrs), { style: j({}, s.style) })
    );
  }, [t]);
  if (e.style) {
    const s = {};
    Kl(s, e.style, e), (i.style = j(j({}, s), i.style));
  }
  return i;
}
const Yx = [
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
function Io(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Yx.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Zx(e, t, r, { latestValues: n }, i, s = !1) {
  const a = (Io(e) ? Gx : $x)(t, n, i, e),
    l = Mx(t, typeof e == "string", s),
    c = e !== Y.Fragment ? oe(j(j({}, l), a), { ref: r }) : {},
    { children: u } = t,
    h = Y.useMemo(() => (Me(u) ? u.get() : u), [u]);
  return Y.createElement(e, oe(j({}, c), { children: h }));
}
function _0(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((r, n) => {
        (t[0][n] = r.get()), (t[1][n] = r.getVelocity());
      }),
    t
  );
}
function Uo(e, t, r, n) {
  if (typeof t == "function") {
    const [i, s] = _0(n);
    t = t(r !== void 0 ? r : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = _0(n);
    t = t(r !== void 0 ? r : e.custom, i, s);
  }
  return t;
}
function hi(e) {
  return Me(e) ? e.get() : e;
}
function Qx({ scrapeMotionValuesFromProps: e, createRenderState: t }, r, n, i) {
  return { latestValues: Jx(r, n, i, e), renderState: t() };
}
function Jx(e, t, r, n) {
  const i = {},
    s = n(e, {});
  for (const d in s) i[d] = hi(s[d]);
  let { initial: o, animate: a } = e;
  const l = Li(e),
    c = $l(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let u = r ? r.initial === !1 : !1;
  u = u || o === !1;
  const h = u ? a : o;
  if (h && typeof h != "boolean" && !ki(h)) {
    const d = Array.isArray(h) ? h : [h];
    for (let p = 0; p < d.length; p++) {
      const m = Uo(e, d[p]);
      if (m) {
        const f = m,
          { transitionEnd: x, transition: b } = f,
          y = Xe(f, ["transitionEnd", "transition"]);
        for (const g in y) {
          let E = y[g];
          if (Array.isArray(E)) {
            const C = u ? E.length - 1 : 0;
            E = E[C];
          }
          E !== null && (i[g] = E);
        }
        for (const g in x) i[g] = x[g];
      }
    }
  }
  return i;
}
const Zl = (e) => (t, r) => {
  const n = Y.useContext(Pi),
    i = Y.useContext(Ri),
    s = () => Qx(e, t, n, i);
  return r ? s() : uo(s);
};
function Ho(e, t, r) {
  var s;
  const { style: n } = e,
    i = {};
  for (const o in n)
    (Me(n[o]) ||
      (t.style && Me(t.style[o])) ||
      Wl(o, e) ||
      ((s = r == null ? void 0 : r.getValue(o)) == null
        ? void 0
        : s.liveStyle) !== void 0) &&
      (i[o] = n[o]);
  return i;
}
const em = Zl({ scrapeMotionValuesFromProps: Ho, createRenderState: No });
function Ql(e, t, r) {
  const n = Ho(e, t, r);
  for (const i in e)
    if (Me(e[i]) || Me(t[i])) {
      const s =
        Er.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      n[s] = e[i];
    }
  return n;
}
const tm = Zl({ scrapeMotionValuesFromProps: Ql, createRenderState: Gl }),
  rm = Symbol.for("motionComponentSymbol");
function ur(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function nm(e, t, r) {
  return Y.useCallback(
    (n) => {
      n && e.onMount && e.onMount(n),
        t && (n ? t.mount(n) : t.unmount()),
        r && (typeof r == "function" ? r(n) : ur(r) && (r.current = n));
    },
    [t],
  );
}
const jo = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  im = "framerAppearId",
  Jl = "data-" + jo(im),
  eu = Y.createContext({});
function sm(e, t, r, n, i) {
  var m, x;
  const { visualElement: s } = Y.useContext(Pi),
    o = Y.useContext(zl),
    a = Y.useContext(Ri),
    l = Y.useContext(Lo).reducedMotion,
    c = Y.useRef(null);
  (n = n || o.renderer),
    !c.current &&
      n &&
      (c.current = n(e, {
        visualState: t,
        parent: s,
        props: r,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const u = c.current,
    h = Y.useContext(eu);
  u &&
    !u.projection &&
    i &&
    (u.type === "html" || u.type === "svg") &&
    om(c.current, r, i, h);
  const f = Y.useRef(!1);
  Y.useInsertionEffect(() => {
    u && f.current && u.update(r, a);
  });
  const d = r[Jl],
    p = Y.useRef(
      !!d &&
        !((m = window.MotionHandoffIsComplete) != null && m.call(window, d)) &&
        ((x = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : x.call(window, d)),
    );
  return (
    Zc(() => {
      u &&
        ((f.current = !0),
        (window.MotionIsMounted = !0),
        u.updateFeatures(),
        u.scheduleRenderMicrotask(),
        p.current && u.animationState && u.animationState.animateChanges());
    }),
    Y.useEffect(() => {
      u &&
        (!p.current && u.animationState && u.animationState.animateChanges(),
        p.current &&
          (queueMicrotask(() => {
            var b;
            (b = window.MotionHandoffMarkAsComplete) == null ||
              b.call(window, d);
          }),
          (p.current = !1)),
        (u.enteringChildren = void 0));
    }),
    u
  );
}
function om(e, t, r, n) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
    layoutCrossfade: u,
  } = t;
  (e.projection = new r(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : tu(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && ur(a)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: n,
      crossfade: u,
      layoutScroll: l,
      layoutRoot: c,
    });
}
function tu(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : tu(e.parent);
}
function as(e, { forwardMotionProps: t = !1 } = {}, r, n) {
  var a, l;
  r && kx(r);
  const i = Io(e) ? tm : em;
  function s(c, u) {
    let h;
    const f = oe(j(j({}, Y.useContext(Lo)), c), { layoutId: am(c) }),
      { isStatic: d } = f,
      p = Nx(c),
      m = i(c, d);
    if (!d && fo) {
      cm();
      const x = lm(f);
      (h = x.MeasureLayout),
        (p.visualElement = sm(e, m, f, n, x.ProjectionNode));
    }
    return mt.jsxs(Pi.Provider, {
      value: p,
      children: [
        h && p.visualElement
          ? mt.jsx(h, j({ visualElement: p.visualElement }, f))
          : null,
        Zx(e, c, nm(m, p.visualElement, u), m, d, t),
      ],
    });
  }
  s.displayName = `motion.${typeof e == "string" ? e : `create(${(l = (a = e.displayName) != null ? a : e.name) != null ? l : ""})`}`;
  const o = Y.forwardRef(s);
  return (o[rm] = e), o;
}
function am({ layoutId: e }) {
  const t = Y.useContext(lo).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function cm(e, t) {
  Y.useContext(zl).strict;
}
function lm(e) {
  const { drag: t, layout: r } = yr;
  if (!t && !r) return {};
  const n = j(j({}, t), r);
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (r != null && r.isEnabled(e))
        ? n.MeasureLayout
        : void 0,
    ProjectionNode: n.ProjectionNode,
  };
}
function um(e, t) {
  if (typeof Proxy == "undefined") return as;
  const r = new Map(),
    n = (s, o) => as(s, o, e, t),
    i = (s, o) => n(s, o);
  return new Proxy(i, {
    get: (s, o) =>
      o === "create"
        ? n
        : (r.has(o) || r.set(o, as(o, void 0, e, t)), r.get(o)),
  });
}
function ru({ top: e, left: t, right: r, bottom: n }) {
  return { x: { min: t, max: r }, y: { min: e, max: n } };
}
function fm({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function hm(e, t) {
  if (!t) return e;
  const r = t({ x: e.left, y: e.top }),
    n = t({ x: e.right, y: e.bottom });
  return { top: r.y, left: r.x, bottom: n.y, right: n.x };
}
function cs(e) {
  return e === void 0 || e === 1;
}
function Us({ scale: e, scaleX: t, scaleY: r }) {
  return !cs(e) || !cs(t) || !cs(r);
}
function Mt(e) {
  return (
    Us(e) ||
    nu(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function nu(e) {
  return T0(e.x) || T0(e.y);
}
function T0(e) {
  return e && e !== "0%";
}
function Fi(e, t, r) {
  const n = e - r,
    i = t * n;
  return r + i;
}
function R0(e, t, r, n, i) {
  return i !== void 0 && (e = Fi(e, i, n)), Fi(e, r, n) + t;
}
function Hs(e, t = 0, r = 1, n, i) {
  (e.min = R0(e.min, t, r, n, i)), (e.max = R0(e.max, t, r, n, i));
}
function iu(e, { x: t, y: r }) {
  Hs(e.x, t.translate, t.scale, t.originPoint),
    Hs(e.y, r.translate, r.scale, r.originPoint);
}
const P0 = 0.999999999999,
  k0 = 1.0000000000001;
function dm(e, t, r, n = !1) {
  const i = r.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    (s = r[a]), (o = s.projectionDelta);
    const { visualElement: l } = s.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (n &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        hr(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), iu(e, o)),
      n && Mt(s.latestValues) && hr(e, s.latestValues));
  }
  t.x < k0 && t.x > P0 && (t.x = 1), t.y < k0 && t.y > P0 && (t.y = 1);
}
function fr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function L0(e, t, r, n, i = 0.5) {
  const s = ge(e.min, e.max, i);
  Hs(e, t, r, s, n);
}
function hr(e, t) {
  L0(e.x, t.x, t.scaleX, t.scale, t.originX),
    L0(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function su(e, t) {
  return ru(hm(e.getBoundingClientRect(), t));
}
function pm(e, t, r) {
  const n = su(e, r),
    { scroll: i } = t;
  return i && (fr(n.x, i.offset.x), fr(n.y, i.offset.y)), n;
}
const O0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  dr = () => ({ x: O0(), y: O0() }),
  M0 = () => ({ min: 0, max: 0 }),
  Be = () => ({ x: M0(), y: M0() }),
  js = { current: null },
  ou = { current: !1 };
function xm() {
  if (((ou.current = !0), !!fo))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (js.current = e.matches);
      e.addEventListener("change", t), t();
    } else js.current = !1;
}
const mm = new WeakMap();
function ym(e, t, r) {
  for (const n in t) {
    const i = t[n],
      s = r[n];
    if (Me(i)) e.addValue(n, i);
    else if (Me(s)) e.addValue(n, mr(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(n)) {
        const o = e.getValue(n);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(n);
        e.addValue(n, mr(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const n in r) t[n] === void 0 && e.removeValue(n);
  return t;
}
const V0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class gm {
  scrapeMotionValuesFromProps(t, r, n) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: r,
      presenceContext: n,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    a = {},
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = _o),
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
        const d = Ue.now();
        this.renderScheduledAt < d &&
          ((this.renderScheduledAt = d), ye.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: c } = o;
    (this.latestValues = l),
      (this.baseTarget = j({}, l)),
      (this.initialValues = r.initial ? j({}, l) : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = r),
      (this.presenceContext = n),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = Li(r)),
      (this.isVariantNode = $l(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const f = this.scrapeMotionValuesFromProps(r, {}, this),
      { willChange: u } = f,
      h = Xe(f, ["willChange"]);
    for (const d in h) {
      const p = h[d];
      l[d] !== void 0 && Me(p) && p.set(l[d]);
    }
  }
  mount(t) {
    var r;
    (this.current = t),
      mm.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, i) => this.bindToMotionValue(i, n)),
      ou.current || xm(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : js.current),
      (r = this.parent) == null || r.addChild(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(),
      wt(this.notifyUpdate),
      wt(this.render),
      this.valueSubscriptions.forEach((r) => r()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this);
    for (const r in this.events) this.events[r].clear();
    for (const r in this.features) {
      const n = this.features[r];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    var r;
    this.children.add(t),
      (r = this.enteringChildren) != null ||
        (this.enteringChildren = new Set()),
      this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, r) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const n = br.has(t);
    n && this.onBindTransform && this.onBindTransform();
    const i = r.on("change", (o) => {
      (this.latestValues[t] = o),
        this.props.onUpdate && ye.preRender(this.notifyUpdate),
        n && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let s;
    window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, r)),
      this.valueSubscriptions.set(t, () => {
        i(), s && s(), r.owner && r.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in yr) {
      const r = yr[t];
      if (!r) continue;
      const { isEnabled: n, Feature: i } = r;
      if (
        (!this.features[t] &&
          i &&
          n(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Be();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  update(t, r) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = r);
    for (let n = 0; n < V0.length; n++) {
      const i = V0[n];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = ym(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
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
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return (
        r.variantChildren && r.variantChildren.add(t),
        () => r.variantChildren.delete(t)
      );
  }
  addValue(t, r) {
    const n = this.values.get(t);
    r !== n &&
      (n && this.removeValue(t),
      this.bindToMotionValue(t, r),
      this.values.set(t, r),
      (this.latestValues[t] = r.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    r && (r(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let n = this.values.get(t);
    return (
      n === void 0 &&
        r !== void 0 &&
        ((n = mr(r === null ? void 0 : r, { owner: this })),
        this.addValue(t, n)),
      n
    );
  }
  readValue(t, r) {
    var i;
    let n =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (i = this.getBaseTargetFromProps(this.props, t)) != null
          ? i
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      n != null &&
        (typeof n == "string" && (Qc(n) || el(n))
          ? (n = parseFloat(n))
          : !Dx(n) && Dt.test(r) && (n = Ol(t, r)),
        this.setBaseTarget(t, Me(n) ? n.get() : n)),
      Me(n) ? n.get() : n
    );
  }
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  getBaseTarget(t) {
    var s;
    const { initial: r } = this.props;
    let n;
    if (typeof r == "string" || typeof r == "object") {
      const o = Uo(
        this.props,
        r,
        (s = this.presenceContext) == null ? void 0 : s.custom,
      );
      o && (n = o[t]);
    }
    if (r && n !== void 0) return n;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Me(i)
      ? i
      : this.initialValues[t] !== void 0 && n === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new yo()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
  scheduleRenderMicrotask() {
    Po.render(this.render);
  }
}
class au extends gm {
  constructor() {
    super(...arguments), (this.KeyframeResolver = px);
  }
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Me(t) &&
      (this.childSubscription = t.on("change", (r) => {
        this.current && (this.current.textContent = `${r}`);
      }));
  }
}
function cu(e, { style: t, vars: r }, n, i) {
  const s = e.style;
  let o;
  for (o in t) s[o] = t[o];
  i == null || i.applyProjectionStyles(s, n);
  for (o in r) s.setProperty(o, r[o]);
}
function vm(e) {
  return window.getComputedStyle(e);
}
class Em extends au {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = cu);
  }
  readValueFromInstance(t, r) {
    var n;
    if (br.has(r))
      return (n = this.projection) != null && n.isProjecting ? ks(r) : kp(t, r);
    {
      const i = vm(t),
        s = (Eo(r) ? i.getPropertyValue(r) : i[r]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return su(t, r);
  }
  build(t, r, n) {
    Vo(t, r, n.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r, n) {
    return Ho(t, r, n);
  }
}
const lu = new Set([
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
function bm(e, t, r, n) {
  cu(e, t, void 0, n);
  for (const i in t.attrs) e.setAttribute(lu.has(i) ? i : jo(i), t.attrs[i]);
}
class Cm extends au {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Be);
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (br.has(r)) {
      const n = Ll(r);
      return (n && n.default) || 0;
    }
    return (r = lu.has(r) ? r : jo(r)), t.getAttribute(r);
  }
  scrapeMotionValuesFromProps(t, r, n) {
    return Ql(t, r, n);
  }
  build(t, r, n) {
    Xl(t, r, this.isSVGTag, n.transformTemplate, n.style);
  }
  renderInstance(t, r, n, i) {
    bm(t, r, n, i);
  }
  mount(t) {
    (this.isSVGTag = Yl(t.tagName)), super.mount(t);
  }
}
const Am = (e, t) =>
  Io(e) ? new Cm(t) : new Em(t, { allowProjection: e !== Y.Fragment });
function pr(e, t, r) {
  const n = e.getProps();
  return Uo(n, t, r !== void 0 ? r : n.custom, e);
}
const zs = (e) => Array.isArray(e);
function Bm(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, mr(r));
}
function wm(e) {
  return zs(e) ? e[e.length - 1] || 0 : e;
}
function Dm(e, t) {
  let o = pr(e, t) || {},
    { transitionEnd: n = {}, transition: i = {} } = o,
    s = Xe(o, ["transitionEnd", "transition"]);
  s = j(j({}, s), n);
  for (const a in s) {
    const l = wm(s[a]);
    Bm(e, a, l);
  }
}
function Fm(e) {
  return !!(Me(e) && e.add);
}
function qs(e, t) {
  const r = e.getValue("willChange");
  if (Fm(r)) return r.add(t);
  if (!r && gt.WillChange) {
    const n = new gt.WillChange("auto");
    e.addValue("willChange", n), n.add(t);
  }
}
function uu(e) {
  return e.props[Jl];
}
const Sm = (e) => e !== null;
function _m(e, { repeat: t, repeatType: r = "loop" }, n) {
  const i = e.filter(Sm),
    s = t && r !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return i[s];
}
const Tm = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Rm = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Pm = { type: "keyframes", duration: 0.8 },
  km = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Lm = (e, { keyframes: t }) =>
    t.length > 2
      ? Pm
      : br.has(e)
        ? e.startsWith("scale")
          ? Rm(t[1])
          : Tm
        : km;
function Om(h) {
  var f = h,
    {
      when: e,
      delay: t,
      delayChildren: r,
      staggerChildren: n,
      staggerDirection: i,
      repeat: s,
      repeatType: o,
      repeatDelay: a,
      from: l,
      elapsed: c,
    } = f,
    u = Xe(f, [
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
  return !!Object.keys(u).length;
}
const zo =
  (e, t, r, n = {}, i, s) =>
  (o) => {
    const a = To(n, e) || {},
      l = a.delay || n.delay || 0;
    let { elapsed: c = 0 } = n;
    c = c - ut(l);
    const u = oe(
      j(
        {
          keyframes: Array.isArray(r) ? r : [null, r],
          ease: "easeOut",
          velocity: t.getVelocity(),
        },
        a,
      ),
      {
        delay: -c,
        onUpdate: (f) => {
          t.set(f), a.onUpdate && a.onUpdate(f);
        },
        onComplete: () => {
          o(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: s ? void 0 : i,
      },
    );
    Om(a) || Object.assign(u, Lm(e, u)),
      u.duration && (u.duration = ut(u.duration)),
      u.repeatDelay && (u.repeatDelay = ut(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from);
    let h = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        (Ns(u), u.delay === 0 && (h = !0)),
      (gt.instantAnimations || gt.skipAnimations) &&
        ((h = !0), Ns(u), (u.delay = 0)),
      (u.allowFlatten = !a.type && !a.ease),
      h && !s && t.get() !== void 0)
    ) {
      const f = _m(u.keyframes, a);
      if (f !== void 0) {
        ye.update(() => {
          u.onUpdate(f), u.onComplete();
        });
        return;
      }
    }
    return a.isSync ? new So(u) : new rx(u);
  };
function Mm({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return (t[r] = !1), n;
}
function fu(e, t, { delay: r = 0, transitionOverride: n, type: i } = {}) {
  var h;
  let u = t,
    { transition: s = e.getDefaultTransition(), transitionEnd: o } = u,
    a = Xe(u, ["transition", "transitionEnd"]);
  n && (s = n);
  const l = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const d = e.getValue(f, (h = e.latestValues[f]) != null ? h : null),
      p = a[f];
    if (p === void 0 || (c && Mm(c, f))) continue;
    const m = j({ delay: r }, To(s || {}, f)),
      x = d.get();
    if (
      x !== void 0 &&
      !d.isAnimating &&
      !Array.isArray(p) &&
      p === x &&
      !m.velocity
    )
      continue;
    let b = !1;
    if (window.MotionHandoffAnimation) {
      const g = uu(e);
      if (g) {
        const E = window.MotionHandoffAnimation(g, f, ye);
        E !== null && ((m.startTime = E), (b = !0));
      }
    }
    qs(e, f),
      d.start(
        zo(f, d, p, e.shouldReduceMotion && Rl.has(f) ? { type: !1 } : m, e, b),
      );
    const y = d.animation;
    y && l.push(y);
  }
  return (
    o &&
      Promise.all(l).then(() => {
        ye.update(() => {
          o && Dm(e, o);
        });
      }),
    l
  );
}
function hu(e, t, r, n = 0, i = 1) {
  const s = Array.from(e)
      .sort((c, u) => c.sortNodePosition(u))
      .indexOf(t),
    o = e.size,
    a = (o - 1) * n;
  return typeof r == "function" ? r(s, o) : i === 1 ? s * n : a - s * n;
}
function $s(e, t, r = {}) {
  var l;
  const n = pr(
    e,
    t,
    r.type === "exit"
      ? (l = e.presenceContext) == null
        ? void 0
        : l.custom
      : void 0,
  );
  let { transition: i = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (i = r.transitionOverride);
  const s = n ? () => Promise.all(fu(e, n, r)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: h,
              staggerDirection: f,
            } = i;
            return Vm(e, t, c, u, h, f, r);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [c, u] = a === "beforeChildren" ? [s, o] : [o, s];
    return c().then(() => u());
  } else return Promise.all([s(), o(r.delay)]);
}
function Vm(e, t, r = 0, n = 0, i = 0, s = 1, o) {
  const a = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t),
      a.push(
        $s(
          l,
          t,
          oe(j({}, o), {
            delay:
              r +
              (typeof n == "function" ? 0 : n) +
              hu(e.variantChildren, l, n, i, s),
          }),
        ).then(() => l.notify("AnimationComplete", t)),
      );
  return Promise.all(a);
}
function Nm(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const i = t.map((s) => $s(e, s, r));
    n = Promise.all(i);
  } else if (typeof t == "string") n = $s(e, t, r);
  else {
    const i = typeof t == "function" ? pr(e, t, r.custom) : t;
    n = Promise.all(fu(e, i, r));
  }
  return n.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function du(e, t) {
  if (!Array.isArray(t)) return !1;
  const r = t.length;
  if (r !== e.length) return !1;
  for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
const Im = Mo.length;
function pu(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const r = e.parent ? pu(e.parent) || {} : {};
    return e.props.initial !== void 0 && (r.initial = e.props.initial), r;
  }
  const t = {};
  for (let r = 0; r < Im; r++) {
    const n = Mo[r],
      i = e.props[n];
    (en(i) || i === !1) && (t[n] = i);
  }
  return t;
}
const Um = [...Oo].reverse(),
  Hm = Oo.length;
function jm(e) {
  return (t) =>
    Promise.all(t.map(({ animation: r, options: n }) => Nm(e, r, n)));
}
function zm(e) {
  let t = jm(e),
    r = N0(),
    n = !0;
  const i = (l) => (c, u) => {
    var f;
    const h = pr(
      e,
      u,
      l === "exit"
        ? (f = e.presenceContext) == null
          ? void 0
          : f.custom
        : void 0,
    );
    if (h) {
      const d = h,
        { transition: p, transitionEnd: m } = d,
        x = Xe(d, ["transition", "transitionEnd"]);
      c = j(j(j({}, c), x), m);
    }
    return c;
  };
  function s(l) {
    t = l(e);
  }
  function o(l) {
    const { props: c } = e,
      u = pu(e.parent) || {},
      h = [],
      f = new Set();
    let d = {},
      p = 1 / 0;
    for (let x = 0; x < Hm; x++) {
      const b = Um[x],
        y = r[b],
        g = c[b] !== void 0 ? c[b] : u[b],
        E = en(g),
        C = b === l ? y.isActive : null;
      C === !1 && (p = x);
      let B = g === u[b] && g !== c[b] && E;
      if (
        (B && n && e.manuallyAnimateOnMount && (B = !1),
        (y.protectedKeys = j({}, d)),
        (!y.isActive && C === null) ||
          (!g && !y.prevProp) ||
          ki(g) ||
          typeof g == "boolean")
      )
        continue;
      const v = qm(y.prevProp, g);
      let D = v || (b === l && y.isActive && !B && E) || (x > p && E),
        P = !1;
      const A = Array.isArray(g) ? g : [g];
      let S = A.reduce(i(b), {});
      C === !1 && (S = {});
      const { prevResolvedValues: k = {} } = y,
        L = j(j({}, k), S),
        z = (H) => {
          (D = !0),
            f.has(H) && ((P = !0), f.delete(H)),
            (y.needsAnimating[H] = !0);
          const N = e.getValue(H);
          N && (N.liveStyle = !1);
        };
      for (const H in L) {
        const N = S[H],
          W = k[H];
        if (d.hasOwnProperty(H)) continue;
        let X = !1;
        zs(N) && zs(W) ? (X = !du(N, W)) : (X = N !== W),
          X
            ? N != null
              ? z(H)
              : f.add(H)
            : N !== void 0 && f.has(H)
              ? z(H)
              : (y.protectedKeys[H] = !0);
      }
      (y.prevProp = g),
        (y.prevResolvedValues = S),
        y.isActive && (d = j(j({}, d), S)),
        n && e.blockInitialAnimation && (D = !1);
      const $ = B && v;
      D &&
        (!$ || P) &&
        h.push(
          ...A.map((H) => {
            const N = { type: b };
            if (
              typeof H == "string" &&
              n &&
              !$ &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: W } = e,
                X = pr(W, H);
              if (W.enteringChildren && X) {
                const { delayChildren: R } = X.transition || {};
                N.delay = hu(W.enteringChildren, e, R);
              }
            }
            return { animation: H, options: N };
          }),
        );
    }
    if (f.size) {
      const x = {};
      if (typeof c.initial != "boolean") {
        const b = pr(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        b && b.transition && (x.transition = b.transition);
      }
      f.forEach((b) => {
        const y = e.getBaseTarget(b),
          g = e.getValue(b);
        g && (g.liveStyle = !0), (x[b] = y != null ? y : null);
      }),
        h.push({ animation: x });
    }
    let m = !!h.length;
    return (
      n &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (m = !1),
      (n = !1),
      m ? t(h) : Promise.resolve()
    );
  }
  function a(l, c) {
    var h;
    if (r[l].isActive === c) return Promise.resolve();
    (h = e.variantChildren) == null ||
      h.forEach((f) => {
        var d;
        return (d = f.animationState) == null ? void 0 : d.setActive(l, c);
      }),
      (r[l].isActive = c);
    const u = o(l);
    for (const f in r) r[f].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => r,
    reset: () => {
      r = N0();
    },
  };
}
function qm(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !du(t, e) : !1;
}
function Ot(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function N0() {
  return {
    animate: Ot(!0),
    whileInView: Ot(),
    whileHover: Ot(),
    whileTap: Ot(),
    whileDrag: Ot(),
    whileFocus: Ot(),
    exit: Ot(),
  };
}
class St {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class $m extends St {
  constructor(t) {
    super(t), t.animationState || (t.animationState = zm(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    ki(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this);
  }
}
let Wm = 0;
class Km extends St {
  constructor() {
    super(...arguments), (this.id = Wm++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: r } = this.node.presenceContext,
      { isPresent: n } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === n) return;
    const i = this.node.animationState.setActive("exit", !t);
    r &&
      !t &&
      i.then(() => {
        r(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: r } = this.node.presenceContext || {};
    r && r(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const Xm = { animation: { Feature: $m }, exit: { Feature: Km } };
function rn(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
function cn(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const Gm = (e) => (t) => ko(t) && e(t, cn(t));
function Kr(e, t, r, n) {
  return rn(e, t, Gm(r), n);
}
const xu = 1e-4,
  Ym = 1 - xu,
  Zm = 1 + xu,
  mu = 0.01,
  Qm = 0 - mu,
  Jm = 0 + mu;
function Ve(e) {
  return e.max - e.min;
}
function e1(e, t, r) {
  return Math.abs(e - t) <= r;
}
function I0(e, t, r, n = 0.5) {
  (e.origin = n),
    (e.originPoint = ge(t.min, t.max, e.origin)),
    (e.scale = Ve(r) / Ve(t)),
    (e.translate = ge(r.min, r.max, e.origin) - e.originPoint),
    ((e.scale >= Ym && e.scale <= Zm) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Qm && e.translate <= Jm) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Xr(e, t, r, n) {
  I0(e.x, t.x, r.x, n ? n.originX : void 0),
    I0(e.y, t.y, r.y, n ? n.originY : void 0);
}
function U0(e, t, r) {
  (e.min = r.min + t.min), (e.max = e.min + Ve(t));
}
function t1(e, t, r) {
  U0(e.x, t.x, r.x), U0(e.y, t.y, r.y);
}
function H0(e, t, r) {
  (e.min = t.min - r.min), (e.max = e.min + Ve(t));
}
function Gr(e, t, r) {
  H0(e.x, t.x, r.x), H0(e.y, t.y, r.y);
}
function Ye(e) {
  return [e("x"), e("y")];
}
const yu = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  j0 = (e, t) => Math.abs(e - t);
function r1(e, t) {
  const r = j0(e.x, t.x),
    n = j0(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class gu {
  constructor(
    t,
    r,
    {
      transformPagePoint: n,
      contextWindow: i = window,
      dragSnapToOrigin: s = !1,
      distanceThreshold: o = 3,
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
        const f = us(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          p = r1(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!d && !p) return;
        const { point: m } = f,
          { timestamp: x } = ke;
        this.history.push(oe(j({}, m), { timestamp: x }));
        const { onStart: b, onMove: y } = this.handlers;
        d ||
          (b && b(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          y && y(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = ls(d, this.transformPagePoint)),
          ye.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: p, onSessionEnd: m, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const b = us(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : ls(d, this.transformPagePoint),
          this.history,
        );
        this.startEvent && p && p(f, b), m && m(f, b);
      }),
      !ko(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = r),
      (this.transformPagePoint = n),
      (this.distanceThreshold = o),
      (this.contextWindow = i || window);
    const a = cn(t),
      l = ls(a, this.transformPagePoint),
      { point: c } = l,
      { timestamp: u } = ke;
    this.history = [oe(j({}, c), { timestamp: u })];
    const { onSessionStart: h } = r;
    h && h(t, us(l, this.history)),
      (this.removeListeners = sn(
        Kr(this.contextWindow, "pointermove", this.handlePointerMove),
        Kr(this.contextWindow, "pointerup", this.handlePointerUp),
        Kr(this.contextWindow, "pointercancel", this.handlePointerUp),
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), wt(this.updatePoint);
  }
}
function ls(e, t) {
  return t ? { point: t(e.point) } : e;
}
function z0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function us({ point: e }, t) {
  return {
    point: e,
    delta: z0(e, vu(t)),
    offset: z0(e, n1(t)),
    velocity: i1(t, 0.1),
  };
}
function n1(e) {
  return e[0];
}
function vu(e) {
  return e[e.length - 1];
}
function i1(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let r = e.length - 1,
    n = null;
  const i = vu(e);
  for (; r >= 0 && ((n = e[r]), !(i.timestamp - n.timestamp > ut(t))); ) r--;
  if (!n) return { x: 0, y: 0 };
  const s = Qe(i.timestamp - n.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - n.x) / s, y: (i.y - n.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function s1(e, { min: t, max: r }, n) {
  return (
    t !== void 0 && e < t
      ? (e = n ? ge(t, e, n.min) : Math.max(e, t))
      : r !== void 0 && e > r && (e = n ? ge(r, e, n.max) : Math.min(e, r)),
    e
  );
}
function q0(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
  };
}
function o1(e, { top: t, left: r, bottom: n, right: i }) {
  return { x: q0(e.x, r, i), y: q0(e.y, t, n) };
}
function $0(e, t) {
  let r = t.min - e.min,
    n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function a1(e, t) {
  return { x: $0(e.x, t.x), y: $0(e.y, t.y) };
}
function c1(e, t) {
  let r = 0.5;
  const n = Ve(e),
    i = Ve(t);
  return (
    i > n
      ? (r = Zr(t.min, t.max - n, e.min))
      : n > i && (r = Zr(e.min, e.max - i, t.min)),
    yt(0, 1, r)
  );
}
function l1(e, t) {
  const r = {};
  return (
    t.min !== void 0 && (r.min = t.min - e.min),
    t.max !== void 0 && (r.max = t.max - e.min),
    r
  );
}
const Ws = 0.35;
function u1(e = Ws) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Ws),
    { x: W0(e, "left", "right"), y: W0(e, "top", "bottom") }
  );
}
function W0(e, t, r) {
  return { min: K0(e, t), max: K0(e, r) };
}
function K0(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const f1 = new WeakMap();
class h1 {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Be()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: r = !1, distanceThreshold: n } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const s = (h) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          r && this.snapToCursor(cn(h).point);
      },
      o = (h, f) => {
        const { drag: d, dragPropagation: p, onDragStart: m } = this.getProps();
        if (
          d &&
          !p &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = gx(d)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = h),
          (this.latestPanInfo = f),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ye((b) => {
            let y = this.getAxisMotionValue(b).get() || 0;
            if (ft.test(y)) {
              const { projection: g } = this.visualElement;
              if (g && g.layout) {
                const E = g.layout.layoutBox[b];
                E && (y = Ve(E) * (parseFloat(y) / 100));
              }
            }
            this.originPoint[b] = y;
          }),
          m && ye.postRender(() => m(h, f)),
          qs(this.visualElement, "transform");
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      a = (h, f) => {
        (this.latestPointerEvent = h), (this.latestPanInfo = f);
        const {
          dragPropagation: d,
          dragDirectionLock: p,
          onDirectionLock: m,
          onDrag: x,
        } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: b } = f;
        if (p && this.currentDirection === null) {
          (this.currentDirection = d1(b)),
            this.currentDirection !== null && m && m(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, b),
          this.updateAxis("y", f.point, b),
          this.visualElement.render(),
          x && x(h, f);
      },
      l = (h, f) => {
        (this.latestPointerEvent = h),
          (this.latestPanInfo = f),
          this.stop(h, f),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      c = () =>
        Ye((h) => {
          var f;
          return (
            this.getAnimationState(h) === "paused" &&
            ((f = this.getAxisMotionValue(h).animation) == null
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new gu(
      t,
      {
        onSessionStart: s,
        onStart: o,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: c,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        distanceThreshold: n,
        contextWindow: yu(this.visualElement),
      },
    );
  }
  stop(t, r) {
    const n = t || this.latestPointerEvent,
      i = r || this.latestPanInfo,
      s = this.isDragging;
    if ((this.cancel(), !s || !i || !n)) return;
    const { velocity: o } = i;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && ye.postRender(() => a(n, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: n } = this.getProps();
    !n &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      r && r.setActive("whileDrag", !1);
  }
  updateAxis(t, r, n) {
    const { drag: i } = this.getProps();
    if (!n || !An(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + n[t];
    this.constraints &&
      this.constraints[t] &&
      (o = s1(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var s;
    const { dragConstraints: t, dragElastic: r } = this.getProps(),
      n =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (s = this.visualElement.projection) == null
            ? void 0
            : s.layout,
      i = this.constraints;
    t && ur(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && n
        ? (this.constraints = o1(n.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = u1(r)),
      i !== this.constraints &&
        n &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ye((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = l1(n.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !ur(t)) return !1;
    const n = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = pm(n, i.root, this.visualElement.getTransformPagePoint());
    let o = a1(i.layout.layoutBox, s);
    if (r) {
      const a = r(fm(o));
      (this.hasMutatedConstraints = !!a), a && (o = ru(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: r,
        dragMomentum: n,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      c = Ye((u) => {
        if (!An(u, r, this.currentDirection)) return;
        let h = (l && l[u]) || {};
        o && (h = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          d = i ? 40 : 1e7,
          p = j(
            j(
              {
                type: "inertia",
                velocity: n ? t[u] : 0,
                bounceStiffness: f,
                bounceDamping: d,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
              },
              s,
            ),
            h,
          );
        return this.startAxisValueAnimation(u, p);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return (
      qs(this.visualElement, t), n.start(zo(t, n, 0, r, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Ye((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Ye((t) => {
      var r;
      return (r = this.getAxisMotionValue(t).animation) == null
        ? void 0
        : r.pause();
    });
  }
  getAnimationState(t) {
    var r;
    return (r = this.getAxisMotionValue(t).animation) == null
      ? void 0
      : r.state;
  }
  getAxisMotionValue(t) {
    const r = `_drag${t.toUpperCase()}`,
      n = this.visualElement.getProps(),
      i = n[r];
    return (
      i ||
      this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Ye((r) => {
      const { drag: n } = this.getProps();
      if (!An(r, n, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(r);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[r];
        s.set(t[r] - ge(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: r } = this.getProps(),
      { projection: n } = this.visualElement;
    if (!ur(r) || !n || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Ye((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = c1({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      n.root && n.root.updateScroll(),
      n.updateLayout(),
      this.resolveConstraints(),
      Ye((o) => {
        if (!An(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: c } = this.constraints[o];
        a.set(ge(l, c, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    f1.set(this.visualElement, this);
    const t = this.visualElement.current,
      r = Kr(t, "pointerdown", (l) => {
        const { drag: c, dragListener: u = !0 } = this.getProps();
        c && u && this.start(l);
      }),
      n = () => {
        const { dragConstraints: l } = this.getProps();
        ur(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", n);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      ye.read(n);
    const o = rn(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (Ye((u) => {
              const h = this.getAxisMotionValue(u);
              h &&
                ((this.originPoint[u] += l[u].translate),
                h.set(h.get() + l[u].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      o(), r(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: r = !1,
        dragDirectionLock: n = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = Ws,
        dragMomentum: a = !0,
      } = t;
    return oe(j({}, t), {
      drag: r,
      dragDirectionLock: n,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    });
  }
}
function An(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function d1(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? (r = "y") : Math.abs(e.x) > t && (r = "x"), r;
}
class p1 extends St {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Je),
      (this.removeListeners = Je),
      (this.controls = new h1(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Je);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const X0 = (e) => (t, r) => {
  e && ye.postRender(() => e(t, r));
};
class x1 extends St {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Je);
  }
  onPointerDown(t) {
    this.session = new gu(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: yu(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: r,
      onPan: n,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: X0(t),
      onStart: X0(r),
      onMove: n,
      onEnd: (s, o) => {
        delete this.session, i && ye.postRender(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Kr(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const di = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function G0(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Nr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (ee.test(e)) e = parseFloat(e);
        else return e;
      const r = G0(e, t.target.x),
        n = G0(e, t.target.y);
      return `${r}% ${n}%`;
    },
  },
  m1 = {
    correct: (e, { treeScale: t, projectionDelta: r }) => {
      const n = e,
        i = Dt.parse(e);
      if (i.length > 5) return n;
      const s = Dt.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = r.x.scale * t.x,
        l = r.y.scale * t.y;
      (i[0 + o] /= a), (i[1 + o] /= l);
      const c = ge(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= c),
        typeof i[3 + o] == "number" && (i[3 + o] /= c),
        s(i)
      );
    },
  };
let fs = !1;
class y1 extends Y.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: n,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    Ix(g1),
      s &&
        (r.group && r.group.add(s),
        n && n.register && i && n.register(s),
        fs && s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions(
          oe(j({}, s.options), { onExitComplete: () => this.safeToRemove() }),
        )),
      (di.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: r,
        visualElement: n,
        drag: i,
        isPresent: s,
      } = this.props,
      { projection: o } = n;
    return (
      o &&
        ((o.isPresent = s),
        (fs = !0),
        i || t.layoutDependency !== r || r === void 0 || t.isPresent !== s
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              ye.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Po.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: n,
      } = this.props,
      { projection: i } = t;
    (fs = !0),
      i &&
        (i.scheduleCheckAfterUnmount(),
        r && r.group && r.group.remove(i),
        n && n.deregister && n.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Eu(e) {
  const [t, r] = jl(),
    n = Y.useContext(lo);
  return mt.jsx(
    y1,
    oe(j({}, e), {
      layoutGroup: n,
      switchLayoutGroup: Y.useContext(eu),
      isPresent: t,
      safeToRemove: r,
    }),
  );
}
const g1 = {
  borderRadius: oe(j({}, Nr), {
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  }),
  borderTopLeftRadius: Nr,
  borderTopRightRadius: Nr,
  borderBottomLeftRadius: Nr,
  borderBottomRightRadius: Nr,
  boxShadow: m1,
};
function v1(e, t, r) {
  const n = Me(e) ? e : mr(e);
  return n.start(zo("", n, t, r)), n.animation;
}
const E1 = (e, t) => e.depth - t.depth;
class b1 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    ho(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    po(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(E1),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function C1(e, t) {
  const r = Ue.now(),
    n = ({ timestamp: i }) => {
      const s = i - r;
      s >= t && (wt(n), e(s - t));
    };
  return ye.setup(n, !0), () => wt(n);
}
const bu = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  A1 = bu.length,
  Y0 = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Z0 = (e) => typeof e == "number" || ee.test(e);
function B1(e, t, r, n, i, s) {
  var o, a, l, c;
  i
    ? ((e.opacity = ge(0, (o = r.opacity) != null ? o : 1, w1(n))),
      (e.opacityExit = ge((a = t.opacity) != null ? a : 1, 0, D1(n))))
    : s &&
      (e.opacity = ge(
        (l = t.opacity) != null ? l : 1,
        (c = r.opacity) != null ? c : 1,
        n,
      ));
  for (let u = 0; u < A1; u++) {
    const h = `border${bu[u]}Radius`;
    let f = Q0(t, h),
      d = Q0(r, h);
    if (f === void 0 && d === void 0) continue;
    f || (f = 0),
      d || (d = 0),
      f === 0 || d === 0 || Z0(f) === Z0(d)
        ? ((e[h] = Math.max(ge(Y0(f), Y0(d), n), 0)),
          (ft.test(d) || ft.test(f)) && (e[h] += "%"))
        : (e[h] = d);
  }
  (t.rotate || r.rotate) && (e.rotate = ge(t.rotate || 0, r.rotate || 0, n));
}
function Q0(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const w1 = Cu(0, 0.5, cl),
  D1 = Cu(0.5, 0.95, Je);
function Cu(e, t, r) {
  return (n) => (n < e ? 0 : n > t ? 1 : r(Zr(e, t, n)));
}
function J0(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Ge(e, t) {
  J0(e.x, t.x), J0(e.y, t.y);
}
function ec(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function tc(e, t, r, n, i) {
  return (
    (e -= t), (e = Fi(e, 1 / r, n)), i !== void 0 && (e = Fi(e, 1 / i, n)), e
  );
}
function F1(e, t = 0, r = 1, n = 0.5, i, s = e, o = e) {
  if (
    (ft.test(t) &&
      ((t = parseFloat(t)), (t = ge(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = ge(s.min, s.max, n);
  e === s && (a -= t),
    (e.min = tc(e.min, t, r, a, i)),
    (e.max = tc(e.max, t, r, a, i));
}
function rc(e, t, [r, n, i], s, o) {
  F1(e, t[r], t[n], t[i], t.scale, s, o);
}
const S1 = ["x", "scaleX", "originX"],
  _1 = ["y", "scaleY", "originY"];
function nc(e, t, r, n) {
  rc(e.x, t, S1, r ? r.x : void 0, n ? n.x : void 0),
    rc(e.y, t, _1, r ? r.y : void 0, n ? n.y : void 0);
}
function ic(e) {
  return e.translate === 0 && e.scale === 1;
}
function Au(e) {
  return ic(e.x) && ic(e.y);
}
function sc(e, t) {
  return e.min === t.min && e.max === t.max;
}
function T1(e, t) {
  return sc(e.x, t.x) && sc(e.y, t.y);
}
function oc(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Bu(e, t) {
  return oc(e.x, t.x) && oc(e.y, t.y);
}
function ac(e) {
  return Ve(e.x) / Ve(e.y);
}
function cc(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class R1 {
  constructor() {
    this.members = [];
  }
  add(t) {
    ho(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (po(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((i) => t === i);
    if (r === 0) return !1;
    let n;
    for (let i = r; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        n = s;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(t, r) {
    const n = this.lead;
    if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
      n.instance && n.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = n),
        r && (t.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((t.snapshot = n.snapshot),
          (t.snapshot.latestValues = n.animationValues || n.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: n } = t;
      r.onExitComplete && r.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function P1(e, t, r) {
  let n = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (r == null ? void 0 : r.z) || 0;
  if (
    ((i || s || o) && (n = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
    r)
  ) {
    const {
      transformPerspective: c,
      rotate: u,
      rotateX: h,
      rotateY: f,
      skewX: d,
      skewY: p,
    } = r;
    c && (n = `perspective(${c}px) ${n}`),
      u && (n += `rotate(${u}deg) `),
      h && (n += `rotateX(${h}deg) `),
      f && (n += `rotateY(${f}deg) `),
      d && (n += `skewX(${d}deg) `),
      p && (n += `skewY(${p}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (n += `scale(${a}, ${l})`), n || "none";
}
const hs = ["", "X", "Y", "Z"],
  k1 = 1e3;
let L1 = 0;
function ds(e, t, r, n) {
  const { latestValues: i } = t;
  i[e] && ((r[e] = i[e]), t.setStaticValue(e, 0), n && (n[e] = 0));
}
function wu(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const r = uu(t);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(r, "transform", ye, !(i || s));
  }
  const { parent: n } = e;
  n && !n.hasCheckedOptimisedAppear && wu(n);
}
function Du({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: r,
  checkIsScrollRoot: n,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = L1++),
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
            this.nodes.forEach(V1),
            this.nodes.forEach(H1),
            this.nodes.forEach(j1),
            this.nodes.forEach(N1);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new b1());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new yo()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o) {
      if (this.instance) return;
      (this.isSVG = Hl(o) && !Bx(o)), (this.instance = o);
      const { layoutId: a, layout: l, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let u,
          h = 0;
        const f = () => (this.root.updateBlockedByResize = !1);
        ye.read(() => {
          h = window.innerWidth;
        }),
          e(o, () => {
            const d = window.innerWidth;
            d !== h &&
              ((h = d),
              (this.root.updateBlockedByResize = !0),
              u && u(),
              (u = C1(f, 250)),
              di.hasAnimatedSinceResize &&
                ((di.hasAnimatedSinceResize = !1), this.nodes.forEach(fc)));
          });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: u,
              hasLayoutChanged: h,
              hasRelativeLayoutChanged: f,
              layout: d,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const p =
                  this.options.transition || c.getDefaultTransition() || K1,
                { onLayoutAnimationStart: m, onLayoutAnimationComplete: x } =
                  c.getProps(),
                b = !this.targetLayout || !Bu(this.targetLayout, d),
                y = !h && f;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                y ||
                (h && (b || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const g = oe(j({}, To(p, "layout")), {
                  onPlay: m,
                  onComplete: x,
                });
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((g.delay = 0), (g.type = !1)),
                  this.startAnimation(g),
                  this.setAnimationOrigin(u, y);
              } else
                h || fc(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = d;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        wt(this.updateProjection);
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
        this.nodes && this.nodes.forEach(z1),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          wu(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u];
        (h.shouldResetTransform = !0),
          h.updateScroll("snapshot"),
          h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(lc);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(uc);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(U1),
            this.nodes.forEach(O1),
            this.nodes.forEach(M1))
          : this.nodes.forEach(uc),
        this.clearAllSnapshots();
      const a = Ue.now();
      (ke.delta = yt(0, 1e3 / 60, a - ke.timestamp)),
        (ke.timestamp = a),
        (ke.isProcessing = !0),
        ts.update.process(ke),
        ts.preRender.process(ke),
        ts.render.process(ke),
        (ke.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Po.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(I1), this.sharedNodes.forEach(q1);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ye.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ye.postRender(() => {
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
          !Ve(this.snapshot.measuredBox.x) &&
          !Ve(this.snapshot.measuredBox.y) &&
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
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Be()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a && this.instance)
      ) {
        const l = n(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Au(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      o &&
        this.instance &&
        (a || Mt(this.latestValues) || u) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        X1(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var c;
      const { visualElement: o } = this.options;
      if (!o) return Be();
      const a = o.measureViewportBox();
      if (
        !(
          ((c = this.scroll) == null ? void 0 : c.wasRoot) || this.path.some(G1)
        )
      ) {
        const { scroll: u } = this.root;
        u && (fr(a.x, u.offset.x), fr(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = Be();
      if ((Ge(a, o), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c],
          { scroll: h, options: f } = u;
        u !== this.root &&
          h &&
          f.layoutScroll &&
          (h.wasRoot && Ge(a, o), fr(a.x, h.offset.x), fr(a.y, h.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = Be();
      Ge(l, o);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          hr(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          Mt(u.latestValues) && hr(l, u.latestValues);
      }
      return Mt(this.latestValues) && hr(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = Be();
      Ge(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Mt(c.latestValues)) continue;
        Us(c.latestValues) && c.updateSnapshot();
        const u = Be(),
          h = c.measurePageBox();
        Ge(u, h),
          nc(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Mt(this.latestValues) && nc(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = oe(j(j({}, this.options), o), {
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
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
        this.relativeParent.resolvedRelativeTargetAt !== ke.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var f;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          o ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((f = this.parent) != null && f.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: u, layoutId: h } = this.options;
      if (!(!this.layout || !(u || h))) {
        if (
          ((this.resolvedRelativeTargetAt = ke.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const d = this.getClosestProjectingParent();
          d && d.layout && this.animationProgress !== 1
            ? ((this.relativeParent = d),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Be()),
              (this.relativeTargetOrigin = Be()),
              Gr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                d.layout.layoutBox,
              ),
              Ge(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Be()), (this.targetWithTransforms = Be())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              t1(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Ge(this.target, this.layout.layoutBox),
                iu(this.target, this.targetDelta))
              : Ge(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const d = this.getClosestProjectingParent();
          d &&
          !!d.resumingFrom == !!this.resumingFrom &&
          !d.options.layoutScroll &&
          d.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = d),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Be()),
              (this.relativeTargetOrigin = Be()),
              Gr(this.relativeTargetOrigin, this.target, d.target),
              Ge(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Us(this.parent.latestValues) ||
          nu(this.parent.latestValues)
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
      var p;
      const o = this.getLead(),
        a = !!this.resumingFrom || this !== o;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((p = this.parent) != null && p.isProjectionDirty)) &&
          (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === ke.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: c, layoutId: u } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || u))
      )
        return;
      Ge(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        f = this.treeScale.y;
      dm(this.layoutCorrected, this.treeScale, this.path, a),
        o.layout &&
          !o.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((o.target = o.layout.layoutBox), (o.targetWithTransforms = Be()));
      const { target: d } = o;
      if (!d) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (ec(this.prevProjectionDelta.x, this.projectionDelta.x),
          ec(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Xr(this.projectionDelta, this.layoutCorrected, d, this.latestValues),
        (this.treeScale.x !== h ||
          this.treeScale.y !== f ||
          !cc(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !cc(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", d));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), o)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = dr()),
        (this.projectionDelta = dr()),
        (this.projectionDeltaWithTransform = dr());
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        u = j({}, this.latestValues),
        h = dr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = Be(),
        d = l ? l.source : void 0,
        p = this.layout ? this.layout.source : void 0,
        m = d !== p,
        x = this.getStack(),
        b = !x || x.members.length <= 1,
        y = !!(m && !b && this.options.crossfade === !0 && !this.path.some(W1));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (E) => {
        const C = E / 1e3;
        hc(h.x, o.x, C),
          hc(h.y, o.y, C),
          this.setTargetDelta(h),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Gr(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            $1(this.relativeTarget, this.relativeTargetOrigin, f, C),
            g && T1(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = Be()),
            Ge(g, this.relativeTarget)),
          m &&
            ((this.animationValues = u), B1(u, c, this.latestValues, C, y, b)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      var a, l, c;
      this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(),
        (c = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || c.stop(),
        this.pendingAnimation &&
          (wt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ye.update(() => {
          (di.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = mr(0)),
            (this.currentAnimation = v1(
              this.motionValue,
              [0, 1e3],
              oe(j({}, o), {
                velocity: 0,
                isSync: !0,
                onUpdate: (u) => {
                  this.mixTargetDelta(u), o.onUpdate && o.onUpdate(u);
                },
                onStop: () => {},
                onComplete: () => {
                  o.onComplete && o.onComplete(), this.completeAnimation();
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
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(k1),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: u,
      } = o;
      if (!(!a || !l || !c)) {
        if (
          this !== o &&
          this.layout &&
          c &&
          Fu(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || Be();
          const h = Ve(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + h);
          const f = Ve(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + f);
        }
        Ge(a, l),
          hr(a, u),
          Xr(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new R1()),
        this.sharedNodes.get(o).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: o } = this.options;
      return o
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: o } = this.options;
      return o ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const c = {};
      l.z && ds("z", o, c, this.animationValues);
      for (let u = 0; u < hs.length; u++)
        ds(`rotate${hs[u]}`, o, c, this.animationValues),
          ds(`skew${hs[u]}`, o, c, this.animationValues);
      o.render();
      for (const u in c)
        o.setStaticValue(u, c[u]),
          this.animationValues && (this.animationValues[u] = c[u]);
      o.scheduleRender();
    }
    applyProjectionStyles(o, a) {
      var p, m;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (o.visibility = ""),
          (o.opacity = ""),
          (o.pointerEvents = hi(a == null ? void 0 : a.pointerEvents) || ""),
          (o.transform = l ? l(this.latestValues, "") : "none");
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        this.options.layoutId &&
          ((o.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (o.pointerEvents = hi(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !Mt(this.latestValues) &&
            ((o.transform = l ? l({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      o.visibility = "";
      const u = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let h = P1(this.projectionDeltaWithTransform, this.treeScale, u);
      l && (h = l(u, h)), (o.transform = h);
      const { x: f, y: d } = this.projectionDelta;
      (o.transformOrigin = `${f.origin * 100}% ${d.origin * 100}% 0`),
        c.animationValues
          ? (o.opacity =
              c === this
                ? (m =
                    (p = u.opacity) != null ? p : this.latestValues.opacity) !=
                  null
                  ? m
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : u.opacityExit)
          : (o.opacity =
              c === this
                ? u.opacity !== void 0
                  ? u.opacity
                  : ""
                : u.opacityExit !== void 0
                  ? u.opacityExit
                  : 0);
      for (const x in tn) {
        if (u[x] === void 0) continue;
        const { correct: b, applyTo: y, isCSSVariable: g } = tn[x],
          E = h === "none" ? u[x] : b(u[x], c);
        if (y) {
          const C = y.length;
          for (let B = 0; B < C; B++) o[y[B]] = E;
        } else
          g ? (this.options.visualElement.renderState.vars[x] = E) : (o[x] = E);
      }
      this.options.layoutId &&
        (o.pointerEvents =
          c === this ? hi(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(lc),
        this.root.sharedNodes.clear();
    }
  };
}
function O1(e) {
  e.updateLayout();
}
function M1(e) {
  var r;
  const t = ((r = e.resumeFrom) == null ? void 0 : r.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = t.source !== e.layout.source;
    s === "size"
      ? Ye((h) => {
          const f = o ? t.measuredBox[h] : t.layoutBox[h],
            d = Ve(f);
          (f.min = n[h].min), (f.max = f.min + d);
        })
      : Fu(s, t.layoutBox, n) &&
        Ye((h) => {
          const f = o ? t.measuredBox[h] : t.layoutBox[h],
            d = Ve(n[h]);
          (f.max = f.min + d),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[h].max = e.relativeTarget[h].min + d));
        });
    const a = dr();
    Xr(a, n, t.layoutBox);
    const l = dr();
    o ? Xr(l, e.applyTransform(i, !0), t.measuredBox) : Xr(l, n, t.layoutBox);
    const c = !Au(a);
    let u = !1;
    if (!e.resumeFrom) {
      const h = e.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: f, layout: d } = h;
        if (f && d) {
          const p = Be();
          Gr(p, t.layoutBox, f.layoutBox);
          const m = Be();
          Gr(m, n, d.layoutBox),
            Bu(p, m) || (u = !0),
            h.options.layoutRoot &&
              ((e.relativeTarget = m),
              (e.relativeTargetOrigin = p),
              (e.relativeParent = h));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: u,
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function V1(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function N1(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function I1(e) {
  e.clearSnapshot();
}
function lc(e) {
  e.clearMeasurements();
}
function uc(e) {
  e.isLayoutDirty = !1;
}
function U1(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function fc(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function H1(e) {
  e.resolveTargetDelta();
}
function j1(e) {
  e.calcProjection();
}
function z1(e) {
  e.resetSkewAndRotation();
}
function q1(e) {
  e.removeLeadSnapshot();
}
function hc(e, t, r) {
  (e.translate = ge(t.translate, 0, r)),
    (e.scale = ge(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function dc(e, t, r, n) {
  (e.min = ge(t.min, r.min, n)), (e.max = ge(t.max, r.max, n));
}
function $1(e, t, r, n) {
  dc(e.x, t.x, r.x, n), dc(e.y, t.y, r.y, n);
}
function W1(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const K1 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  pc = (e) =>
    typeof navigator != "undefined" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  xc = pc("applewebkit/") && !pc("chrome/") ? Math.round : Je;
function mc(e) {
  (e.min = xc(e.min)), (e.max = xc(e.max));
}
function X1(e) {
  mc(e.x), mc(e.y);
}
function Fu(e, t, r) {
  return (
    e === "position" || (e === "preserve-aspect" && !e1(ac(t), ac(r), 0.2))
  );
}
function G1(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const Y1 = Du({
    attachResizeListener: (e, t) => rn(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  ps = { current: void 0 },
  Su = Du({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!ps.current) {
        const e = new Y1({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (ps.current = e);
      }
      return ps.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Z1 = {
    pan: { Feature: x1 },
    drag: { Feature: p1, ProjectionNode: Su, MeasureLayout: Eu },
  };
function yc(e, t, r) {
  const { props: n } = e;
  e.animationState &&
    n.whileHover &&
    e.animationState.setActive("whileHover", r === "Start");
  const i = "onHover" + r,
    s = n[i];
  s && ye.postRender(() => s(t, cn(t)));
}
class Q1 extends St {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = vx(
        t,
        (r, n) => (yc(this.node, n, "Start"), (i) => yc(this.node, i, "End")),
      ));
  }
  unmount() {}
}
class J1 extends St {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch (r) {
      t = !0;
    }
    !t ||
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
    this.unmount = sn(
      rn(this.node.current, "focus", () => this.onFocus()),
      rn(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function gc(e, t, r) {
  const { props: n } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    n.whileTap &&
    e.animationState.setActive("whileTap", r === "Start");
  const i = "onTap" + (r === "End" ? "" : r),
    s = n[i];
  s && ye.postRender(() => s(t, cn(t)));
}
class ey extends St {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = Ax(
        t,
        (r, n) => (
          gc(this.node, n, "Start"),
          (i, { success: s }) => gc(this.node, i, s ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const Ks = new WeakMap(),
  xs = new WeakMap(),
  ty = (e) => {
    const t = Ks.get(e.target);
    t && t(e);
  },
  ry = (e) => {
    e.forEach(ty);
  };
function ny(r) {
  var n = r,
    { root: e } = n,
    t = Xe(n, ["root"]);
  const i = e || document;
  xs.has(i) || xs.set(i, {});
  const s = xs.get(i),
    o = JSON.stringify(t);
  return s[o] || (s[o] = new IntersectionObserver(ry, j({ root: e }, t))), s[o];
}
function iy(e, t, r) {
  const n = ny(t);
  return (
    Ks.set(e, r),
    n.observe(e),
    () => {
      Ks.delete(e), n.unobserve(e);
    }
  );
}
const sy = { some: 0, all: 1 };
class oy extends St {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: r, margin: n, amount: i = "some", once: s } = t,
      o = {
        root: r ? r.current : void 0,
        rootMargin: n,
        threshold: typeof i == "number" ? i : sy[i],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (
          this.isInView === c ||
          ((this.isInView = c), s && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(),
          f = c ? u : h;
        f && f(l);
      };
    return iy(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver == "undefined") return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(ay(t, r)) && this.startObserver();
  }
  unmount() {}
}
function ay({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const cy = {
    inView: { Feature: oy },
    tap: { Feature: ey },
    focus: { Feature: J1 },
    hover: { Feature: Q1 },
  },
  ly = { layout: { ProjectionNode: Su, MeasureLayout: Eu } },
  uy = j(j(j(j({}, Xm), cy), Z1), ly),
  Hv = um(uy, Am);
function _u(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: fy } = Object.prototype,
  { getPrototypeOf: qo } = Object,
  { iterator: Oi, toStringTag: Tu } = Symbol,
  Mi = ((e) => (t) => {
    const r = fy.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  it = (e) => ((e = e.toLowerCase()), (t) => Mi(t) === e),
  Vi = (e) => (t) => typeof t === e,
  { isArray: Cr } = Array,
  gr = Vi("undefined");
function ln(e) {
  return (
    e !== null &&
    !gr(e) &&
    e.constructor !== null &&
    !gr(e.constructor) &&
    He(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Ru = it("ArrayBuffer");
function hy(e) {
  let t;
  return (
    typeof ArrayBuffer != "undefined" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Ru(e.buffer)),
    t
  );
}
const dy = Vi("string"),
  He = Vi("function"),
  Pu = Vi("number"),
  un = (e) => e !== null && typeof e == "object",
  py = (e) => e === !0 || e === !1,
  pi = (e) => {
    if (Mi(e) !== "object") return !1;
    const t = qo(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Tu in e) &&
      !(Oi in e)
    );
  },
  xy = (e) => {
    if (!un(e) || ln(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch (t) {
      return !1;
    }
  },
  my = it("Date"),
  yy = it("File"),
  gy = it("Blob"),
  vy = it("FileList"),
  Ey = (e) => un(e) && He(e.pipe),
  by = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (He(e.append) &&
          ((t = Mi(e)) === "formdata" ||
            (t === "object" &&
              He(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Cy = it("URLSearchParams"),
  [Ay, By, wy, Dy] = ["ReadableStream", "Request", "Response", "Headers"].map(
    it,
  ),
  Fy = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function fn(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e == "undefined") return;
  let n, i;
  if ((typeof e != "object" && (e = [e]), Cr(e)))
    for (n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
  else {
    if (ln(e)) return;
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = s.length;
    let a;
    for (n = 0; n < o; n++) (a = s[n]), t.call(null, e[a], a, e);
  }
}
function ku(e, t) {
  if (ln(e)) return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length,
    i;
  for (; n-- > 0; ) if (((i = r[n]), t === i.toLowerCase())) return i;
  return null;
}
const Ht =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
        ? self
        : typeof window != "undefined"
          ? window
          : global,
  Lu = (e) => !gr(e) && e !== Ht;
function Xs() {
  const { caseless: e, skipUndefined: t } = (Lu(this) && this) || {},
    r = {},
    n = (i, s) => {
      const o = (e && ku(r, s)) || s;
      pi(r[o]) && pi(i)
        ? (r[o] = Xs(r[o], i))
        : pi(i)
          ? (r[o] = Xs({}, i))
          : Cr(i)
            ? (r[o] = i.slice())
            : (!t || !gr(i)) && (r[o] = i);
    };
  for (let i = 0, s = arguments.length; i < s; i++)
    arguments[i] && fn(arguments[i], n);
  return r;
}
const Sy = (e, t, r, { allOwnKeys: n } = {}) => (
    fn(
      t,
      (i, s) => {
        r && He(i) ? (e[s] = _u(i, r)) : (e[s] = i);
      },
      { allOwnKeys: n },
    ),
    e
  ),
  _y = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Ty = (e, t, r, n) => {
    (e.prototype = Object.create(t.prototype, n)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      r && Object.assign(e.prototype, r);
  },
  Ry = (e, t, r, n) => {
    let i, s, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
        (o = i[s]), (!n || n(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = r !== !1 && qo(e);
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t;
  },
  Py = (e, t, r) => {
    (e = String(e)),
      (r === void 0 || r > e.length) && (r = e.length),
      (r -= t.length);
    const n = e.indexOf(t, r);
    return n !== -1 && n === r;
  },
  ky = (e) => {
    if (!e) return null;
    if (Cr(e)) return e;
    let t = e.length;
    if (!Pu(t)) return null;
    const r = new Array(t);
    for (; t-- > 0; ) r[t] = e[t];
    return r;
  },
  Ly = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array != "undefined" && qo(Uint8Array)),
  Oy = (e, t) => {
    const n = (e && e[Oi]).call(e);
    let i;
    for (; (i = n.next()) && !i.done; ) {
      const s = i.value;
      t.call(e, s[0], s[1]);
    }
  },
  My = (e, t) => {
    let r;
    const n = [];
    for (; (r = e.exec(t)) !== null; ) n.push(r);
    return n;
  },
  Vy = it("HTMLFormElement"),
  Ny = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, n, i) {
      return n.toUpperCase() + i;
    }),
  vc = (
    ({ hasOwnProperty: e }) =>
    (t, r) =>
      e.call(t, r)
  )(Object.prototype),
  Iy = it("RegExp"),
  Ou = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e),
      n = {};
    fn(r, (i, s) => {
      let o;
      (o = t(i, s, e)) !== !1 && (n[s] = o || i);
    }),
      Object.defineProperties(e, n);
  },
  Uy = (e) => {
    Ou(e, (t, r) => {
      if (He(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
        return !1;
      const n = e[r];
      if (He(n)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  Hy = (e, t) => {
    const r = {},
      n = (i) => {
        i.forEach((s) => {
          r[s] = !0;
        });
      };
    return Cr(e) ? n(e) : n(String(e).split(t)), r;
  },
  jy = () => {},
  zy = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function qy(e) {
  return !!(e && He(e.append) && e[Tu] === "FormData" && e[Oi]);
}
const $y = (e) => {
    const t = new Array(10),
      r = (n, i) => {
        if (un(n)) {
          if (t.indexOf(n) >= 0) return;
          if (ln(n)) return n;
          if (!("toJSON" in n)) {
            t[i] = n;
            const s = Cr(n) ? [] : {};
            return (
              fn(n, (o, a) => {
                const l = r(o, i + 1);
                !gr(l) && (s[a] = l);
              }),
              (t[i] = void 0),
              s
            );
          }
        }
        return n;
      };
    return r(e, 0);
  },
  Wy = it("AsyncFunction"),
  Ky = (e) => e && (un(e) || He(e)) && He(e.then) && He(e.catch),
  Mu = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((r, n) => (
            Ht.addEventListener(
              "message",
              ({ source: i, data: s }) => {
                i === Ht && s === r && n.length && n.shift()();
              },
              !1,
            ),
            (i) => {
              n.push(i), Ht.postMessage(r, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (r) => setTimeout(r))(
    typeof setImmediate == "function",
    He(Ht.postMessage),
  ),
  Xy =
    typeof queueMicrotask != "undefined"
      ? queueMicrotask.bind(Ht)
      : (typeof process != "undefined" && process.nextTick) || Mu,
  Gy = (e) => e != null && He(e[Oi]),
  T = {
    isArray: Cr,
    isArrayBuffer: Ru,
    isBuffer: ln,
    isFormData: by,
    isArrayBufferView: hy,
    isString: dy,
    isNumber: Pu,
    isBoolean: py,
    isObject: un,
    isPlainObject: pi,
    isEmptyObject: xy,
    isReadableStream: Ay,
    isRequest: By,
    isResponse: wy,
    isHeaders: Dy,
    isUndefined: gr,
    isDate: my,
    isFile: yy,
    isBlob: gy,
    isRegExp: Iy,
    isFunction: He,
    isStream: Ey,
    isURLSearchParams: Cy,
    isTypedArray: Ly,
    isFileList: vy,
    forEach: fn,
    merge: Xs,
    extend: Sy,
    trim: Fy,
    stripBOM: _y,
    inherits: Ty,
    toFlatObject: Ry,
    kindOf: Mi,
    kindOfTest: it,
    endsWith: Py,
    toArray: ky,
    forEachEntry: Oy,
    matchAll: My,
    isHTMLForm: Vy,
    hasOwnProperty: vc,
    hasOwnProp: vc,
    reduceDescriptors: Ou,
    freezeMethods: Uy,
    toObjectSet: Hy,
    toCamelCase: Ny,
    noop: jy,
    toFiniteNumber: zy,
    findKey: ku,
    global: Ht,
    isContextDefined: Lu,
    isSpecCompliantForm: qy,
    toJSONObject: $y,
    isAsyncFn: Wy,
    isThenable: Ky,
    setImmediate: Mu,
    asap: Xy,
    isIterable: Gy,
  };
function ie(e, t, r, n, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    r && (this.config = r),
    n && (this.request = n),
    i && ((this.response = i), (this.status = i.status ? i.status : null));
}
T.inherits(ie, Error, {
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
      config: T.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Vu = ie.prototype,
  Nu = {};
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
].forEach((e) => {
  Nu[e] = { value: e };
});
Object.defineProperties(ie, Nu);
Object.defineProperty(Vu, "isAxiosError", { value: !0 });
ie.from = (e, t, r, n, i, s) => {
  const o = Object.create(Vu);
  T.toFlatObject(
    e,
    o,
    function (u) {
      return u !== Error.prototype;
    },
    (c) => c !== "isAxiosError",
  );
  const a = e && e.message ? e.message : "Error",
    l = t == null && e ? e.code : t;
  return (
    ie.call(o, a, l, r, n, i),
    e &&
      o.cause == null &&
      Object.defineProperty(o, "cause", { value: e, configurable: !0 }),
    (o.name = (e && e.name) || "Error"),
    s && Object.assign(o, s),
    o
  );
};
const Yy = null;
function Gs(e) {
  return T.isPlainObject(e) || T.isArray(e);
}
function Iu(e) {
  return T.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ec(e, t, r) {
  return e
    ? e
        .concat(t)
        .map(function (i, s) {
          return (i = Iu(i)), !r && s ? "[" + i + "]" : i;
        })
        .join(r ? "." : "")
    : t;
}
function Zy(e) {
  return T.isArray(e) && !e.some(Gs);
}
const Qy = T.toFlatObject(T, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ni(e, t, r) {
  if (!T.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (r = T.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (m, x) {
        return !T.isUndefined(x[m]);
      },
    ));
  const n = r.metaTokens,
    i = r.visitor || u,
    s = r.dots,
    o = r.indexes,
    l =
      (r.Blob || (typeof Blob != "undefined" && Blob)) &&
      T.isSpecCompliantForm(t);
  if (!T.isFunction(i)) throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null) return "";
    if (T.isDate(p)) return p.toISOString();
    if (T.isBoolean(p)) return p.toString();
    if (!l && T.isBlob(p))
      throw new ie("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(p) || T.isTypedArray(p)
      ? l && typeof Blob == "function"
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function u(p, m, x) {
    let b = p;
    if (p && !x && typeof p == "object") {
      if (T.endsWith(m, "{}"))
        (m = n ? m : m.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (T.isArray(p) && Zy(p)) ||
        ((T.isFileList(p) || T.endsWith(m, "[]")) && (b = T.toArray(p)))
      )
        return (
          (m = Iu(m)),
          b.forEach(function (g, E) {
            !(T.isUndefined(g) || g === null) &&
              t.append(
                o === !0 ? Ec([m], E, s) : o === null ? m : m + "[]",
                c(g),
              );
          }),
          !1
        );
    }
    return Gs(p) ? !0 : (t.append(Ec(x, m, s), c(p)), !1);
  }
  const h = [],
    f = Object.assign(Qy, {
      defaultVisitor: u,
      convertValue: c,
      isVisitable: Gs,
    });
  function d(p, m) {
    if (!T.isUndefined(p)) {
      if (h.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      h.push(p),
        T.forEach(p, function (b, y) {
          (!(T.isUndefined(b) || b === null) &&
            i.call(t, b, T.isString(y) ? y.trim() : y, m, f)) === !0 &&
            d(b, m ? m.concat(y) : [y]);
        }),
        h.pop();
    }
  }
  if (!T.isObject(e)) throw new TypeError("data must be an object");
  return d(e), t;
}
function bc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
    return t[n];
  });
}
function $o(e, t) {
  (this._pairs = []), e && Ni(e, this, t);
}
const Uu = $o.prototype;
Uu.append = function (t, r) {
  this._pairs.push([t, r]);
};
Uu.toString = function (t) {
  const r = t
    ? function (n) {
        return t.call(this, n, bc);
      }
    : bc;
  return this._pairs
    .map(function (i) {
      return r(i[0]) + "=" + r(i[1]);
    }, "")
    .join("&");
};
function Jy(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function Hu(e, t, r) {
  if (!t) return e;
  const n = (r && r.encode) || Jy;
  T.isFunction(r) && (r = { serialize: r });
  const i = r && r.serialize;
  let s;
  if (
    (i
      ? (s = i(t, r))
      : (s = T.isURLSearchParams(t) ? t.toString() : new $o(t, r).toString(n)),
    s)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class Cc {
  constructor() {
    this.handlers = [];
  }
  use(t, r, n) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: r,
        synchronous: n ? n.synchronous : !1,
        runWhen: n ? n.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    T.forEach(this.handlers, function (n) {
      n !== null && t(n);
    });
  }
}
const ju = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  eg = typeof URLSearchParams != "undefined" ? URLSearchParams : $o,
  tg = typeof FormData != "undefined" ? FormData : null,
  rg = typeof Blob != "undefined" ? Blob : null,
  ng = {
    isBrowser: !0,
    classes: { URLSearchParams: eg, FormData: tg, Blob: rg },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Wo = typeof window != "undefined" && typeof document != "undefined",
  Ys = (typeof navigator == "object" && navigator) || void 0,
  ig =
    Wo &&
    (!Ys || ["ReactNative", "NativeScript", "NS"].indexOf(Ys.product) < 0),
  sg =
    typeof WorkerGlobalScope != "undefined" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  og = (Wo && window.location.href) || "http://localhost",
  ag = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Wo,
        hasStandardBrowserEnv: ig,
        hasStandardBrowserWebWorkerEnv: sg,
        navigator: Ys,
        origin: og,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Oe = j(j({}, ag), ng);
function cg(e, t) {
  return Ni(
    e,
    new Oe.classes.URLSearchParams(),
    j(
      {
        visitor: function (r, n, i, s) {
          return Oe.isNode && T.isBuffer(r)
            ? (this.append(n, r.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function lg(e) {
  return T.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0],
  );
}
function ug(e) {
  const t = {},
    r = Object.keys(e);
  let n;
  const i = r.length;
  let s;
  for (n = 0; n < i; n++) (s = r[n]), (t[s] = e[s]);
  return t;
}
function zu(e) {
  function t(r, n, i, s) {
    let o = r[s++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o),
      l = s >= r.length;
    return (
      (o = !o && T.isArray(i) ? i.length : o),
      l
        ? (T.hasOwnProp(i, o) ? (i[o] = [i[o], n]) : (i[o] = n), !a)
        : ((!i[o] || !T.isObject(i[o])) && (i[o] = []),
          t(r, n, i[o], s) && T.isArray(i[o]) && (i[o] = ug(i[o])),
          !a)
    );
  }
  if (T.isFormData(e) && T.isFunction(e.entries)) {
    const r = {};
    return (
      T.forEachEntry(e, (n, i) => {
        t(lg(n), i, r, 0);
      }),
      r
    );
  }
  return null;
}
function fg(e, t, r) {
  if (T.isString(e))
    try {
      return (t || JSON.parse)(e), T.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError") throw n;
    }
  return (r || JSON.stringify)(e);
}
const hn = {
  transitional: ju,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, r) {
      const n = r.getContentType() || "",
        i = n.indexOf("application/json") > -1,
        s = T.isObject(t);
      if ((s && T.isHTMLForm(t) && (t = new FormData(t)), T.isFormData(t)))
        return i ? JSON.stringify(zu(t)) : t;
      if (
        T.isArrayBuffer(t) ||
        T.isBuffer(t) ||
        T.isStream(t) ||
        T.isFile(t) ||
        T.isBlob(t) ||
        T.isReadableStream(t)
      )
        return t;
      if (T.isArrayBufferView(t)) return t.buffer;
      if (T.isURLSearchParams(t))
        return (
          r.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let a;
      if (s) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1)
          return cg(t, this.formSerializer).toString();
        if ((a = T.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return Ni(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer,
          );
        }
      }
      return s || i ? (r.setContentType("application/json", !1), fg(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const r = this.transitional || hn.transitional,
        n = r && r.forcedJSONParsing,
        i = this.responseType === "json";
      if (T.isResponse(t) || T.isReadableStream(t)) return t;
      if (t && T.isString(t) && ((n && !this.responseType) || i)) {
        const o = !(r && r.silentJSONParsing) && i;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? ie.from(a, ie.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Oe.classes.FormData, Blob: Oe.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
T.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  hn.headers[e] = {};
});
const hg = T.toObjectSet([
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
  dg = (e) => {
    const t = {};
    let r, n, i;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (o) {
            (i = o.indexOf(":")),
              (r = o.substring(0, i).trim().toLowerCase()),
              (n = o.substring(i + 1).trim()),
              !(!r || (t[r] && hg[r])) &&
                (r === "set-cookie"
                  ? t[r]
                    ? t[r].push(n)
                    : (t[r] = [n])
                  : (t[r] = t[r] ? t[r] + ", " + n : n));
          }),
      t
    );
  },
  Ac = Symbol("internals");
function Ir(e) {
  return e && String(e).trim().toLowerCase();
}
function xi(e) {
  return e === !1 || e == null ? e : T.isArray(e) ? e.map(xi) : String(e);
}
function pg(e) {
  const t = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; (n = r.exec(e)); ) t[n[1]] = n[2];
  return t;
}
const xg = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ms(e, t, r, n, i) {
  if (T.isFunction(n)) return n.call(this, t, r);
  if ((i && (t = r), !!T.isString(t))) {
    if (T.isString(n)) return t.indexOf(n) !== -1;
    if (T.isRegExp(n)) return n.test(t);
  }
}
function mg(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function yg(e, t) {
  const r = T.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function (i, s, o) {
        return this[n].call(this, t, i, s, o);
      },
      configurable: !0,
    });
  });
}
let je = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function s(a, l, c) {
      const u = Ir(l);
      if (!u) throw new Error("header name must be a non-empty string");
      const h = T.findKey(i, u);
      (!h || i[h] === void 0 || c === !0 || (c === void 0 && i[h] !== !1)) &&
        (i[h || l] = xi(a));
    }
    const o = (a, l) => T.forEach(a, (c, u) => s(c, u, l));
    if (T.isPlainObject(t) || t instanceof this.constructor) o(t, r);
    else if (T.isString(t) && (t = t.trim()) && !xg(t)) o(dg(t), r);
    else if (T.isObject(t) && T.isIterable(t)) {
      let a = {},
        l,
        c;
      for (const u of t) {
        if (!T.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[(c = u[0])] = (l = a[c])
          ? T.isArray(l)
            ? [...l, u[1]]
            : [l, u[1]]
          : u[1];
      }
      o(a, r);
    } else t != null && s(r, t, n);
    return this;
  }
  get(t, r) {
    if (((t = Ir(t)), t)) {
      const n = T.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r) return i;
        if (r === !0) return pg(i);
        if (T.isFunction(r)) return r.call(this, i, n);
        if (T.isRegExp(r)) return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (((t = Ir(t)), t)) {
      const n = T.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || ms(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function s(o) {
      if (((o = Ir(o)), o)) {
        const a = T.findKey(n, o);
        a && (!r || ms(n, n[a], a, r)) && (delete n[a], (i = !0));
      }
    }
    return T.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length,
      i = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || ms(this, this[s], s, t, !0)) && (delete this[s], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const r = this,
      n = {};
    return (
      T.forEach(this, (i, s) => {
        const o = T.findKey(n, s);
        if (o) {
          (r[o] = xi(i)), delete r[s];
          return;
        }
        const a = t ? mg(s) : String(s).trim();
        a !== s && delete r[s], (r[a] = xi(i)), (n[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = Object.create(null);
    return (
      T.forEach(this, (n, i) => {
        n != null && n !== !1 && (r[i] = t && T.isArray(n) ? n.join(", ") : n);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(t) {
    const n = (this[Ac] = this[Ac] = { accessors: {} }).accessors,
      i = this.prototype;
    function s(o) {
      const a = Ir(o);
      n[a] || (yg(i, o), (n[a] = !0));
    }
    return T.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
je.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
T.reduceDescriptors(je.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    },
  };
});
T.freezeMethods(je);
function ys(e, t) {
  const r = this || hn,
    n = t || r,
    i = je.from(n.headers);
  let s = n.data;
  return (
    T.forEach(e, function (a) {
      s = a.call(r, s, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    s
  );
}
function qu(e) {
  return !!(e && e.__CANCEL__);
}
function Ar(e, t, r) {
  ie.call(this, e == null ? "canceled" : e, ie.ERR_CANCELED, t, r),
    (this.name = "CanceledError");
}
T.inherits(Ar, ie, { __CANCEL__: !0 });
function $u(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status)
    ? e(r)
    : t(
        new ie(
          "Request failed with status code " + r.status,
          [ie.ERR_BAD_REQUEST, ie.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r,
        ),
      );
}
function gg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function vg(e, t) {
  e = e || 10;
  const r = new Array(e),
    n = new Array(e);
  let i = 0,
    s = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const c = Date.now(),
        u = n[s];
      o || (o = c), (r[i] = l), (n[i] = c);
      let h = s,
        f = 0;
      for (; h !== i; ) (f += r[h++]), (h = h % e);
      if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), c - o < t)) return;
      const d = u && c - u;
      return d ? Math.round((f * 1e3) / d) : void 0;
    }
  );
}
function Eg(e, t) {
  let r = 0,
    n = 1e3 / t,
    i,
    s;
  const o = (c, u = Date.now()) => {
    (r = u), (i = null), s && (clearTimeout(s), (s = null)), e(...c);
  };
  return [
    (...c) => {
      const u = Date.now(),
        h = u - r;
      h >= n
        ? o(c, u)
        : ((i = c),
          s ||
            (s = setTimeout(() => {
              (s = null), o(i);
            }, n - h)));
    },
    () => i && o(i),
  ];
}
const Si = (e, t, r = 3) => {
    let n = 0;
    const i = vg(50, 250);
    return Eg((s) => {
      const o = s.loaded,
        a = s.lengthComputable ? s.total : void 0,
        l = o - n,
        c = i(l),
        u = o <= a;
      n = o;
      const h = {
        loaded: o,
        total: a,
        progress: a ? o / a : void 0,
        bytes: l,
        rate: c || void 0,
        estimated: c && a && u ? (a - o) / c : void 0,
        event: s,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(h);
    }, r);
  },
  Bc = (e, t) => {
    const r = e != null;
    return [(n) => t[0]({ lengthComputable: r, total: e, loaded: n }), t[1]];
  },
  wc =
    (e) =>
    (...t) =>
      T.asap(() => e(...t)),
  bg = Oe.hasStandardBrowserEnv
    ? ((e, t) => (r) => (
        (r = new URL(r, Oe.origin)),
        e.protocol === r.protocol &&
          e.host === r.host &&
          (t || e.port === r.port)
      ))(
        new URL(Oe.origin),
        Oe.navigator && /(msie|trident)/i.test(Oe.navigator.userAgent),
      )
    : () => !0,
  Cg = Oe.hasStandardBrowserEnv
    ? {
        write(e, t, r, n, i, s, o) {
          if (typeof document == "undefined") return;
          const a = [`${e}=${encodeURIComponent(t)}`];
          T.isNumber(r) && a.push(`expires=${new Date(r).toUTCString()}`),
            T.isString(n) && a.push(`path=${n}`),
            T.isString(i) && a.push(`domain=${i}`),
            s === !0 && a.push("secure"),
            T.isString(o) && a.push(`SameSite=${o}`),
            (document.cookie = a.join("; "));
        },
        read(e) {
          if (typeof document == "undefined") return null;
          const t = document.cookie.match(
            new RegExp("(?:^|; )" + e + "=([^;]*)"),
          );
          return t ? decodeURIComponent(t[1]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5, "/");
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Ag(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Bg(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Wu(e, t, r) {
  let n = !Ag(t);
  return e && (n || r == !1) ? Bg(e, t) : t;
}
const Dc = (e) => (e instanceof je ? j({}, e) : e);
function Wt(e, t) {
  t = t || {};
  const r = {};
  function n(c, u, h, f) {
    return T.isPlainObject(c) && T.isPlainObject(u)
      ? T.merge.call({ caseless: f }, c, u)
      : T.isPlainObject(u)
        ? T.merge({}, u)
        : T.isArray(u)
          ? u.slice()
          : u;
  }
  function i(c, u, h, f) {
    if (T.isUndefined(u)) {
      if (!T.isUndefined(c)) return n(void 0, c, h, f);
    } else return n(c, u, h, f);
  }
  function s(c, u) {
    if (!T.isUndefined(u)) return n(void 0, u);
  }
  function o(c, u) {
    if (T.isUndefined(u)) {
      if (!T.isUndefined(c)) return n(void 0, c);
    } else return n(void 0, u);
  }
  function a(c, u, h) {
    if (h in t) return n(c, u);
    if (h in e) return n(void 0, c);
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (c, u, h) => i(Dc(c), Dc(u), h, !0),
  };
  return (
    T.forEach(Object.keys(j(j({}, e), t)), function (u) {
      const h = l[u] || i,
        f = h(e[u], t[u], u);
      (T.isUndefined(f) && h !== a) || (r[u] = f);
    }),
    r
  );
}
const Ku = (e) => {
    const t = Wt({}, e);
    let {
      data: r,
      withXSRFToken: n,
      xsrfHeaderName: i,
      xsrfCookieName: s,
      headers: o,
      auth: a,
    } = t;
    if (
      ((t.headers = o = je.from(o)),
      (t.url = Hu(
        Wu(t.baseURL, t.url, t.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer,
      )),
      a &&
        o.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : ""),
            ),
        ),
      T.isFormData(r))
    ) {
      if (Oe.hasStandardBrowserEnv || Oe.hasStandardBrowserWebWorkerEnv)
        o.setContentType(void 0);
      else if (T.isFunction(r.getHeaders)) {
        const l = r.getHeaders(),
          c = ["content-type", "content-length"];
        Object.entries(l).forEach(([u, h]) => {
          c.includes(u.toLowerCase()) && o.set(u, h);
        });
      }
    }
    if (
      Oe.hasStandardBrowserEnv &&
      (n && T.isFunction(n) && (n = n(t)), n || (n !== !1 && bg(t.url)))
    ) {
      const l = i && s && Cg.read(s);
      l && o.set(i, l);
    }
    return t;
  },
  wg = typeof XMLHttpRequest != "undefined",
  Dg =
    wg &&
    function (e) {
      return new Promise(function (r, n) {
        const i = Ku(e);
        let s = i.data;
        const o = je.from(i.headers).normalize();
        let { responseType: a, onUploadProgress: l, onDownloadProgress: c } = i,
          u,
          h,
          f,
          d,
          p;
        function m() {
          d && d(),
            p && p(),
            i.cancelToken && i.cancelToken.unsubscribe(u),
            i.signal && i.signal.removeEventListener("abort", u);
        }
        let x = new XMLHttpRequest();
        x.open(i.method.toUpperCase(), i.url, !0), (x.timeout = i.timeout);
        function b() {
          if (!x) return;
          const g = je.from(
              "getAllResponseHeaders" in x && x.getAllResponseHeaders(),
            ),
            C = {
              data:
                !a || a === "text" || a === "json"
                  ? x.responseText
                  : x.response,
              status: x.status,
              statusText: x.statusText,
              headers: g,
              config: e,
              request: x,
            };
          $u(
            function (v) {
              r(v), m();
            },
            function (v) {
              n(v), m();
            },
            C,
          ),
            (x = null);
        }
        "onloadend" in x
          ? (x.onloadend = b)
          : (x.onreadystatechange = function () {
              !x ||
                x.readyState !== 4 ||
                (x.status === 0 &&
                  !(x.responseURL && x.responseURL.indexOf("file:") === 0)) ||
                setTimeout(b);
            }),
          (x.onabort = function () {
            x &&
              (n(new ie("Request aborted", ie.ECONNABORTED, e, x)), (x = null));
          }),
          (x.onerror = function (E) {
            const C = E && E.message ? E.message : "Network Error",
              B = new ie(C, ie.ERR_NETWORK, e, x);
            (B.event = E || null), n(B), (x = null);
          }),
          (x.ontimeout = function () {
            let E = i.timeout
              ? "timeout of " + i.timeout + "ms exceeded"
              : "timeout exceeded";
            const C = i.transitional || ju;
            i.timeoutErrorMessage && (E = i.timeoutErrorMessage),
              n(
                new ie(
                  E,
                  C.clarifyTimeoutError ? ie.ETIMEDOUT : ie.ECONNABORTED,
                  e,
                  x,
                ),
              ),
              (x = null);
          }),
          s === void 0 && o.setContentType(null),
          "setRequestHeader" in x &&
            T.forEach(o.toJSON(), function (E, C) {
              x.setRequestHeader(C, E);
            }),
          T.isUndefined(i.withCredentials) ||
            (x.withCredentials = !!i.withCredentials),
          a && a !== "json" && (x.responseType = i.responseType),
          c && (([f, p] = Si(c, !0)), x.addEventListener("progress", f)),
          l &&
            x.upload &&
            (([h, d] = Si(l)),
            x.upload.addEventListener("progress", h),
            x.upload.addEventListener("loadend", d)),
          (i.cancelToken || i.signal) &&
            ((u = (g) => {
              x &&
                (n(!g || g.type ? new Ar(null, e, x) : g),
                x.abort(),
                (x = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(u),
            i.signal &&
              (i.signal.aborted ? u() : i.signal.addEventListener("abort", u)));
        const y = gg(i.url);
        if (y && Oe.protocols.indexOf(y) === -1) {
          n(new ie("Unsupported protocol " + y + ":", ie.ERR_BAD_REQUEST, e));
          return;
        }
        x.send(s || null);
      });
    },
  Fg = (e, t) => {
    const { length: r } = (e = e ? e.filter(Boolean) : []);
    if (t || r) {
      let n = new AbortController(),
        i;
      const s = function (c) {
        if (!i) {
          (i = !0), a();
          const u = c instanceof Error ? c : this.reason;
          n.abort(
            u instanceof ie ? u : new Ar(u instanceof Error ? u.message : u),
          );
        }
      };
      let o =
        t &&
        setTimeout(() => {
          (o = null), s(new ie(`timeout ${t} of ms exceeded`, ie.ETIMEDOUT));
        }, t);
      const a = () => {
        e &&
          (o && clearTimeout(o),
          (o = null),
          e.forEach((c) => {
            c.unsubscribe
              ? c.unsubscribe(s)
              : c.removeEventListener("abort", s);
          }),
          (e = null));
      };
      e.forEach((c) => c.addEventListener("abort", s));
      const { signal: l } = n;
      return (l.unsubscribe = () => T.asap(a)), l;
    }
  },
  Sg = function* (e, t) {
    let r = e.byteLength;
    if (r < t) {
      yield e;
      return;
    }
    let n = 0,
      i;
    for (; n < r; ) (i = n + t), yield e.slice(n, i), (n = i);
  },
  _g = function (e, t) {
    return Ki(this, null, function* () {
      try {
        for (
          var r = na(Tg(e)), n, i, s;
          (n = !(i = yield new Lt(r.next())).done);
          n = !1
        ) {
          const o = i.value;
          yield* Xi(Sg(o, t));
        }
      } catch (i) {
        s = [i];
      } finally {
        try {
          n && (i = r.return) && (yield new Lt(i.call(r)));
        } finally {
          if (s) throw s[0];
        }
      }
    });
  },
  Tg = function (e) {
    return Ki(this, null, function* () {
      if (e[Symbol.asyncIterator]) {
        yield* Xi(e);
        return;
      }
      const t = e.getReader();
      try {
        for (;;) {
          const { done: r, value: n } = yield new Lt(t.read());
          if (r) break;
          yield n;
        }
      } finally {
        yield new Lt(t.cancel());
      }
    });
  },
  Fc = (e, t, r, n) => {
    const i = _g(e, t);
    let s = 0,
      o,
      a = (l) => {
        o || ((o = !0), n && n(l));
      };
    return new ReadableStream(
      {
        async pull(l) {
          try {
            const { done: c, value: u } = await i.next();
            if (c) {
              a(), l.close();
              return;
            }
            let h = u.byteLength;
            if (r) {
              let f = (s += h);
              r(f);
            }
            l.enqueue(new Uint8Array(u));
          } catch (c) {
            throw (a(c), c);
          }
        },
        cancel(l) {
          return a(l), i.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  Sc = 64 * 1024,
  { isFunction: Bn } = T,
  Rg = (({ Request: e, Response: t }) => ({ Request: e, Response: t }))(
    T.global,
  ),
  { ReadableStream: _c, TextEncoder: Tc } = T.global,
  Rc = (e, ...t) => {
    try {
      return !!e(...t);
    } catch (r) {
      return !1;
    }
  },
  Pg = (e) => {
    e = T.merge.call({ skipUndefined: !0 }, Rg, e);
    const { fetch: t, Request: r, Response: n } = e,
      i = t ? Bn(t) : typeof fetch == "function",
      s = Bn(r),
      o = Bn(n);
    if (!i) return !1;
    const a = i && Bn(_c),
      l =
        i &&
        (typeof Tc == "function"
          ? (
              (p) => (m) =>
                p.encode(m)
            )(new Tc())
          : async (p) => new Uint8Array(await new r(p).arrayBuffer())),
      c =
        s &&
        a &&
        Rc(() => {
          let p = !1;
          const m = new r(Oe.origin, {
            body: new _c(),
            method: "POST",
            get duplex() {
              return (p = !0), "half";
            },
          }).headers.has("Content-Type");
          return p && !m;
        }),
      u = o && a && Rc(() => T.isReadableStream(new n("").body)),
      h = { stream: u && ((p) => p.body) };
    i &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
        !h[p] &&
          (h[p] = (m, x) => {
            let b = m && m[p];
            if (b) return b.call(m);
            throw new ie(
              `Response type '${p}' is not supported`,
              ie.ERR_NOT_SUPPORT,
              x,
            );
          });
      });
    const f = async (p) => {
        if (p == null) return 0;
        if (T.isBlob(p)) return p.size;
        if (T.isSpecCompliantForm(p))
          return (
            await new r(Oe.origin, { method: "POST", body: p }).arrayBuffer()
          ).byteLength;
        if (T.isArrayBufferView(p) || T.isArrayBuffer(p)) return p.byteLength;
        if ((T.isURLSearchParams(p) && (p = p + ""), T.isString(p)))
          return (await l(p)).byteLength;
      },
      d = async (p, m) => {
        const x = T.toFiniteNumber(p.getContentLength());
        return x == null ? f(m) : x;
      };
    return async (p) => {
      let {
          url: m,
          method: x,
          data: b,
          signal: y,
          cancelToken: g,
          timeout: E,
          onDownloadProgress: C,
          onUploadProgress: B,
          responseType: v,
          headers: D,
          withCredentials: P = "same-origin",
          fetchOptions: A,
        } = Ku(p),
        S = t || fetch;
      v = v ? (v + "").toLowerCase() : "text";
      let k = Fg([y, g && g.toAbortSignal()], E),
        L = null;
      const z =
        k &&
        k.unsubscribe &&
        (() => {
          k.unsubscribe();
        });
      let $;
      try {
        if (
          B &&
          c &&
          x !== "get" &&
          x !== "head" &&
          ($ = await d(D, b)) !== 0
        ) {
          let R = new r(m, { method: "POST", body: b, duplex: "half" }),
            V;
          if (
            (T.isFormData(b) &&
              (V = R.headers.get("content-type")) &&
              D.setContentType(V),
            R.body)
          ) {
            const [I, M] = Bc($, Si(wc(B)));
            b = Fc(R.body, Sc, I, M);
          }
        }
        T.isString(P) || (P = P ? "include" : "omit");
        const O = s && "credentials" in r.prototype,
          H = oe(j({}, A), {
            signal: k,
            method: x.toUpperCase(),
            headers: D.normalize().toJSON(),
            body: b,
            duplex: "half",
            credentials: O ? P : void 0,
          });
        L = s && new r(m, H);
        let N = await (s ? S(L, A) : S(m, H));
        const W = u && (v === "stream" || v === "response");
        if (u && (C || (W && z))) {
          const R = {};
          ["status", "statusText", "headers"].forEach((re) => {
            R[re] = N[re];
          });
          const V = T.toFiniteNumber(N.headers.get("content-length")),
            [I, M] = (C && Bc(V, Si(wc(C), !0))) || [];
          N = new n(
            Fc(N.body, Sc, I, () => {
              M && M(), z && z();
            }),
            R,
          );
        }
        v = v || "text";
        let X = await h[T.findKey(h, v) || "text"](N, p);
        return (
          !W && z && z(),
          await new Promise((R, V) => {
            $u(R, V, {
              data: X,
              headers: je.from(N.headers),
              status: N.status,
              statusText: N.statusText,
              config: p,
              request: L,
            });
          })
        );
      } catch (O) {
        throw (
          (z && z(),
          O && O.name === "TypeError" && /Load failed|fetch/i.test(O.message)
            ? Object.assign(new ie("Network Error", ie.ERR_NETWORK, p, L), {
                cause: O.cause || O,
              })
            : ie.from(O, O && O.code, p, L))
        );
      }
    };
  },
  kg = new Map(),
  Xu = (e) => {
    let t = (e && e.env) || {};
    const { fetch: r, Request: n, Response: i } = t,
      s = [n, i, r];
    let o = s.length,
      a = o,
      l,
      c,
      u = kg;
    for (; a--; )
      (l = s[a]),
        (c = u.get(l)),
        c === void 0 && u.set(l, (c = a ? new Map() : Pg(t))),
        (u = c);
    return c;
  };
Xu();
const Ko = { http: Yy, xhr: Dg, fetch: { get: Xu } };
T.forEach(Ko, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch (r) {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Pc = (e) => `- ${e}`,
  Lg = (e) => T.isFunction(e) || e === null || e === !1;
function Og(e, t) {
  e = T.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, i;
  const s = {};
  for (let o = 0; o < r; o++) {
    n = e[o];
    let a;
    if (
      ((i = n),
      !Lg(n) && ((i = Ko[(a = String(n)).toLowerCase()]), i === void 0))
    )
      throw new ie(`Unknown adapter '${a}'`);
    if (i && (T.isFunction(i) || (i = i.get(t)))) break;
    s[a || "#" + o] = i;
  }
  if (!i) {
    const o = Object.entries(s).map(
      ([l, c]) =>
        `adapter ${l} ` +
        (c === !1
          ? "is not supported by the environment"
          : "is not available in the build"),
    );
    let a = r
      ? o.length > 1
        ? `since :
` +
          o.map(Pc).join(`
`)
        : " " + Pc(o[0])
      : "as no adapter specified";
    throw new ie(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT",
    );
  }
  return i;
}
const Gu = { getAdapter: Og, adapters: Ko };
function gs(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Ar(null, e);
}
function kc(e) {
  return (
    gs(e),
    (e.headers = je.from(e.headers)),
    (e.data = ys.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Gu.getAdapter(
      e.adapter || hn.adapter,
      e,
    )(e).then(
      function (n) {
        return (
          gs(e),
          (n.data = ys.call(e, e.transformResponse, n)),
          (n.headers = je.from(n.headers)),
          n
        );
      },
      function (n) {
        return (
          qu(n) ||
            (gs(e),
            n &&
              n.response &&
              ((n.response.data = ys.call(e, e.transformResponse, n.response)),
              (n.response.headers = je.from(n.response.headers)))),
          Promise.reject(n)
        );
      },
    )
  );
}
const Yu = "1.13.2",
  Ii = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ii[e] = function (n) {
      return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const Lc = {};
Ii.transitional = function (t, r, n) {
  function i(s, o) {
    return (
      "[Axios v" +
      Yu +
      "] Transitional option '" +
      s +
      "'" +
      o +
      (n ? ". " + n : "")
    );
  }
  return (s, o, a) => {
    if (t === !1)
      throw new ie(
        i(o, " has been removed" + (r ? " in " + r : "")),
        ie.ERR_DEPRECATED,
      );
    return (
      r &&
        !Lc[o] &&
        ((Lc[o] = !0),
        console.warn(
          i(
            o,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future",
          ),
        )),
      t ? t(s, o, a) : !0
    );
  };
};
Ii.spelling = function (t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Mg(e, t, r) {
  if (typeof e != "object")
    throw new ie("options must be an object", ie.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const s = n[i],
      o = t[s];
    if (o) {
      const a = e[s],
        l = a === void 0 || o(a, s, e);
      if (l !== !0)
        throw new ie("option " + s + " must be " + l, ie.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new ie("Unknown option " + s, ie.ERR_BAD_OPTION);
  }
}
const mi = { assertOptions: Mg, validators: Ii },
  lt = mi.validators;
let qt = class {
  constructor(t) {
    (this.defaults = t || {}),
      (this.interceptors = { request: new Cc(), response: new Cc() });
  }
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let i = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(i)
          : (i = new Error());
        const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack
            ? s &&
              !String(n.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
              (n.stack +=
                `
` + s)
            : (n.stack = s);
        } catch (o) {}
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? ((r = r || {}), (r.url = t)) : (r = t || {}),
      (r = Wt(this.defaults, r));
    const { transitional: n, paramsSerializer: i, headers: s } = r;
    n !== void 0 &&
      mi.assertOptions(
        n,
        {
          silentJSONParsing: lt.transitional(lt.boolean),
          forcedJSONParsing: lt.transitional(lt.boolean),
          clarifyTimeoutError: lt.transitional(lt.boolean),
        },
        !1,
      ),
      i != null &&
        (T.isFunction(i)
          ? (r.paramsSerializer = { serialize: i })
          : mi.assertOptions(
              i,
              { encode: lt.function, serialize: lt.function },
              !0,
            )),
      r.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (r.allowAbsoluteUrls = !0)),
      mi.assertOptions(
        r,
        {
          baseUrl: lt.spelling("baseURL"),
          withXsrfToken: lt.spelling("withXSRFToken"),
        },
        !0,
      ),
      (r.method = (r.method || this.defaults.method || "get").toLowerCase());
    let o = s && T.merge(s.common, s[r.method]);
    s &&
      T.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (p) => {
          delete s[p];
        },
      ),
      (r.headers = je.concat(o, s));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (m) {
      (typeof m.runWhen == "function" && m.runWhen(r) === !1) ||
        ((l = l && m.synchronous), a.unshift(m.fulfilled, m.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (m) {
      c.push(m.fulfilled, m.rejected);
    });
    let u,
      h = 0,
      f;
    if (!l) {
      const p = [kc.bind(this), void 0];
      for (
        p.unshift(...a), p.push(...c), f = p.length, u = Promise.resolve(r);
        h < f;

      )
        u = u.then(p[h++], p[h++]);
      return u;
    }
    f = a.length;
    let d = r;
    for (; h < f; ) {
      const p = a[h++],
        m = a[h++];
      try {
        d = p(d);
      } catch (x) {
        m.call(this, x);
        break;
      }
    }
    try {
      u = kc.call(this, d);
    } catch (p) {
      return Promise.reject(p);
    }
    for (h = 0, f = c.length; h < f; ) u = u.then(c[h++], c[h++]);
    return u;
  }
  getUri(t) {
    t = Wt(this.defaults, t);
    const r = Wu(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Hu(r, t.params, t.paramsSerializer);
  }
};
T.forEach(["delete", "get", "head", "options"], function (t) {
  qt.prototype[t] = function (r, n) {
    return this.request(
      Wt(n || {}, { method: t, url: r, data: (n || {}).data }),
    );
  };
});
T.forEach(["post", "put", "patch"], function (t) {
  function r(n) {
    return function (s, o, a) {
      return this.request(
        Wt(a || {}, {
          method: t,
          headers: n ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: o,
        }),
      );
    };
  }
  (qt.prototype[t] = r()), (qt.prototype[t + "Form"] = r(!0));
});
let Vg = class Zu {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function (s) {
      r = s;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners) return;
      let s = n._listeners.length;
      for (; s-- > 0; ) n._listeners[s](i);
      n._listeners = null;
    }),
      (this.promise.then = (i) => {
        let s;
        const o = new Promise((a) => {
          n.subscribe(a), (s = a);
        }).then(i);
        return (
          (o.cancel = function () {
            n.unsubscribe(s);
          }),
          o
        );
      }),
      t(function (s, o, a) {
        n.reason || ((n.reason = new Ar(s, o, a)), r(n.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      r = (n) => {
        t.abort(n);
      };
    return (
      this.subscribe(r),
      (t.signal.unsubscribe = () => this.unsubscribe(r)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Zu(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
};
function Ng(e) {
  return function (r) {
    return e.apply(null, r);
  };
}
function Ig(e) {
  return T.isObject(e) && e.isAxiosError === !0;
}
const Zs = {
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
Object.entries(Zs).forEach(([e, t]) => {
  Zs[t] = e;
});
function Qu(e) {
  const t = new qt(e),
    r = _u(qt.prototype.request, t);
  return (
    T.extend(r, qt.prototype, t, { allOwnKeys: !0 }),
    T.extend(r, t, null, { allOwnKeys: !0 }),
    (r.create = function (i) {
      return Qu(Wt(e, i));
    }),
    r
  );
}
const Se = Qu(hn);
Se.Axios = qt;
Se.CanceledError = Ar;
Se.CancelToken = Vg;
Se.isCancel = qu;
Se.VERSION = Yu;
Se.toFormData = Ni;
Se.AxiosError = ie;
Se.Cancel = Se.CanceledError;
Se.all = function (t) {
  return Promise.all(t);
};
Se.spread = Ng;
Se.isAxiosError = Ig;
Se.mergeConfig = Wt;
Se.AxiosHeaders = je;
Se.formToJSON = (e) => zu(T.isHTMLForm(e) ? new FormData(e) : e);
Se.getAdapter = Gu.getAdapter;
Se.HttpStatusCode = Zs;
Se.default = Se;
const {
    Axios: qv,
    AxiosError: $v,
    CanceledError: Wv,
    isCancel: Kv,
    CancelToken: Xv,
    VERSION: Gv,
    all: Yv,
    Cancel: Zv,
    isAxiosError: Qv,
    spread: Jv,
    toFormData: e2,
    AxiosHeaders: t2,
    HttpStatusCode: r2,
    formToJSON: n2,
    getAdapter: i2,
    mergeConfig: s2,
  } = Se,
  ht = Object.create(null);
ht.open = "0";
ht.close = "1";
ht.ping = "2";
ht.pong = "3";
ht.message = "4";
ht.upgrade = "5";
ht.noop = "6";
const yi = Object.create(null);
Object.keys(ht).forEach((e) => {
  yi[ht[e]] = e;
});
const Qs = { type: "error", data: "parser error" },
  Ju =
    typeof Blob == "function" ||
    (typeof Blob != "undefined" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  ef = typeof ArrayBuffer == "function",
  tf = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  Xo = ({ type: e, data: t }, r, n) =>
    Ju && t instanceof Blob
      ? r
        ? n(t)
        : Oc(t, n)
      : ef && (t instanceof ArrayBuffer || tf(t))
        ? r
          ? n(t)
          : Oc(new Blob([t]), n)
        : n(ht[e] + (t || "")),
  Oc = (e, t) => {
    const r = new FileReader();
    return (
      (r.onload = function () {
        const n = r.result.split(",")[1];
        t("b" + (n || ""));
      }),
      r.readAsDataURL(e)
    );
  };
function Mc(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
      ? new Uint8Array(e)
      : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let vs;
function Ug(e, t) {
  if (Ju && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Mc).then(t);
  if (ef && (e.data instanceof ArrayBuffer || tf(e.data))) return t(Mc(e.data));
  Xo(e, !1, (r) => {
    vs || (vs = new TextEncoder()), t(vs.encode(r));
  });
}
const Vc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  zr = typeof Uint8Array == "undefined" ? [] : new Uint8Array(256);
for (let e = 0; e < Vc.length; e++) zr[Vc.charCodeAt(e)] = e;
const Hg = (e) => {
    let t = e.length * 0.75,
      r = e.length,
      n,
      i = 0,
      s,
      o,
      a,
      l;
    e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
    const c = new ArrayBuffer(t),
      u = new Uint8Array(c);
    for (n = 0; n < r; n += 4)
      (s = zr[e.charCodeAt(n)]),
        (o = zr[e.charCodeAt(n + 1)]),
        (a = zr[e.charCodeAt(n + 2)]),
        (l = zr[e.charCodeAt(n + 3)]),
        (u[i++] = (s << 2) | (o >> 4)),
        (u[i++] = ((o & 15) << 4) | (a >> 2)),
        (u[i++] = ((a & 3) << 6) | (l & 63));
    return c;
  },
  jg = typeof ArrayBuffer == "function",
  Go = (e, t) => {
    if (typeof e != "string") return { type: "message", data: rf(e, t) };
    const r = e.charAt(0);
    return r === "b"
      ? { type: "message", data: zg(e.substring(1), t) }
      : yi[r]
        ? e.length > 1
          ? { type: yi[r], data: e.substring(1) }
          : { type: yi[r] }
        : Qs;
  },
  zg = (e, t) => {
    if (jg) {
      const r = Hg(e);
      return rf(r, t);
    } else return { base64: !0, data: e };
  },
  rf = (e, t) => {
    switch (t) {
      case "blob":
        return e instanceof Blob ? e : new Blob([e]);
      case "arraybuffer":
      default:
        return e instanceof ArrayBuffer ? e : e.buffer;
    }
  },
  nf = "",
  qg = (e, t) => {
    const r = e.length,
      n = new Array(r);
    let i = 0;
    e.forEach((s, o) => {
      Xo(s, !1, (a) => {
        (n[o] = a), ++i === r && t(n.join(nf));
      });
    });
  },
  $g = (e, t) => {
    const r = e.split(nf),
      n = [];
    for (let i = 0; i < r.length; i++) {
      const s = Go(r[i], t);
      if ((n.push(s), s.type === "error")) break;
    }
    return n;
  };
function Wg() {
  return new TransformStream({
    transform(e, t) {
      Ug(e, (r) => {
        const n = r.length;
        let i;
        if (n < 126)
          (i = new Uint8Array(1)), new DataView(i.buffer).setUint8(0, n);
        else if (n < 65536) {
          i = new Uint8Array(3);
          const s = new DataView(i.buffer);
          s.setUint8(0, 126), s.setUint16(1, n);
        } else {
          i = new Uint8Array(9);
          const s = new DataView(i.buffer);
          s.setUint8(0, 127), s.setBigUint64(1, BigInt(n));
        }
        e.data && typeof e.data != "string" && (i[0] |= 128),
          t.enqueue(i),
          t.enqueue(r);
      });
    },
  });
}
let Es;
function wn(e) {
  return e.reduce((t, r) => t + r.length, 0);
}
function Dn(e, t) {
  if (e[0].length === t) return e.shift();
  const r = new Uint8Array(t);
  let n = 0;
  for (let i = 0; i < t; i++)
    (r[i] = e[0][n++]), n === e[0].length && (e.shift(), (n = 0));
  return e.length && n < e[0].length && (e[0] = e[0].slice(n)), r;
}
function Kg(e, t) {
  Es || (Es = new TextDecoder());
  const r = [];
  let n = 0,
    i = -1,
    s = !1;
  return new TransformStream({
    transform(o, a) {
      for (r.push(o); ; ) {
        if (n === 0) {
          if (wn(r) < 1) break;
          const l = Dn(r, 1);
          (s = (l[0] & 128) === 128),
            (i = l[0] & 127),
            i < 126 ? (n = 3) : i === 126 ? (n = 1) : (n = 2);
        } else if (n === 1) {
          if (wn(r) < 2) break;
          const l = Dn(r, 2);
          (i = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0)),
            (n = 3);
        } else if (n === 2) {
          if (wn(r) < 8) break;
          const l = Dn(r, 8),
            c = new DataView(l.buffer, l.byteOffset, l.length),
            u = c.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            a.enqueue(Qs);
            break;
          }
          (i = u * Math.pow(2, 32) + c.getUint32(4)), (n = 3);
        } else {
          if (wn(r) < i) break;
          const l = Dn(r, i);
          a.enqueue(Go(s ? l : Es.decode(l), t)), (n = 0);
        }
        if (i === 0 || i > e) {
          a.enqueue(Qs);
          break;
        }
      }
    },
  });
}
const sf = 4;
function Fe(e) {
  if (e) return Xg(e);
}
function Xg(e) {
  for (var t in Fe.prototype) e[t] = Fe.prototype[t];
  return e;
}
Fe.prototype.on = Fe.prototype.addEventListener = function (e, t) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
    this
  );
};
Fe.prototype.once = function (e, t) {
  function r() {
    this.off(e, r), t.apply(this, arguments);
  }
  return (r.fn = t), this.on(e, r), this;
};
Fe.prototype.off =
  Fe.prototype.removeListener =
  Fe.prototype.removeAllListeners =
  Fe.prototype.removeEventListener =
    function (e, t) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var r = this._callbacks["$" + e];
      if (!r) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + e], this;
      for (var n, i = 0; i < r.length; i++)
        if (((n = r[i]), n === t || n.fn === t)) {
          r.splice(i, 1);
          break;
        }
      return r.length === 0 && delete this._callbacks["$" + e], this;
    };
Fe.prototype.emit = function (e) {
  this._callbacks = this._callbacks || {};
  for (
    var t = new Array(arguments.length - 1),
      r = this._callbacks["$" + e],
      n = 1;
    n < arguments.length;
    n++
  )
    t[n - 1] = arguments[n];
  if (r) {
    r = r.slice(0);
    for (var n = 0, i = r.length; n < i; ++n) r[n].apply(this, t);
  }
  return this;
};
Fe.prototype.emitReserved = Fe.prototype.emit;
Fe.prototype.listeners = function (e) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks["$" + e] || []
  );
};
Fe.prototype.hasListeners = function (e) {
  return !!this.listeners(e).length;
};
const Ui =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (t) => Promise.resolve().then(t)
      : (t, r) => r(t, 0),
  Ze =
    typeof self != "undefined"
      ? self
      : typeof window != "undefined"
        ? window
        : Function("return this")(),
  Gg = "arraybuffer";
function of(e, ...t) {
  return t.reduce((r, n) => (e.hasOwnProperty(n) && (r[n] = e[n]), r), {});
}
const Yg = Ze.setTimeout,
  Zg = Ze.clearTimeout;
function Hi(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = Yg.bind(Ze)), (e.clearTimeoutFn = Zg.bind(Ze)))
    : ((e.setTimeoutFn = Ze.setTimeout.bind(Ze)),
      (e.clearTimeoutFn = Ze.clearTimeout.bind(Ze)));
}
const Qg = 1.33;
function Jg(e) {
  return typeof e == "string"
    ? ev(e)
    : Math.ceil((e.byteLength || e.size) * Qg);
}
function ev(e) {
  let t = 0,
    r = 0;
  for (let n = 0, i = e.length; n < i; n++)
    (t = e.charCodeAt(n)),
      t < 128
        ? (r += 1)
        : t < 2048
          ? (r += 2)
          : t < 55296 || t >= 57344
            ? (r += 3)
            : (n++, (r += 4));
  return r;
}
function af() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function tv(e) {
  let t = "";
  for (let r in e)
    e.hasOwnProperty(r) &&
      (t.length && (t += "&"),
      (t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r])));
  return t;
}
function rv(e) {
  let t = {},
    r = e.split("&");
  for (let n = 0, i = r.length; n < i; n++) {
    let s = r[n].split("=");
    t[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return t;
}
class nv extends Error {
  constructor(t, r, n) {
    super(t),
      (this.description = r),
      (this.context = n),
      (this.type = "TransportError");
  }
}
class Yo extends Fe {
  constructor(t) {
    super(),
      (this.writable = !1),
      Hi(this, t),
      (this.opts = t),
      (this.query = t.query),
      (this.socket = t.socket),
      (this.supportsBinary = !t.forceBase64);
  }
  onError(t, r, n) {
    return super.emitReserved("error", new nv(t, r, n)), this;
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
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  onOpen() {
    (this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open");
  }
  onData(t) {
    const r = Go(t, this.socket.binaryType);
    this.onPacket(r);
  }
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  onClose(t) {
    (this.readyState = "closed"), super.emitReserved("close", t);
  }
  pause(t) {}
  createUri(t, r = {}) {
    return (
      t +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(r)
    );
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(t) {
    const r = tv(t);
    return r.length ? "?" + r : "";
  }
}
class iv extends Yo {
  constructor() {
    super(...arguments), (this._polling = !1);
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this._poll();
  }
  pause(t) {
    this.readyState = "pausing";
    const r = () => {
      (this.readyState = "paused"), t();
    };
    if (this._polling || !this.writable) {
      let n = 0;
      this._polling &&
        (n++,
        this.once("pollComplete", function () {
          --n || r();
        })),
        this.writable ||
          (n++,
          this.once("drain", function () {
            --n || r();
          }));
    } else r();
  }
  _poll() {
    (this._polling = !0), this.doPoll(), this.emitReserved("poll");
  }
  onData(t) {
    const r = (n) => {
      if (
        (this.readyState === "opening" && n.type === "open" && this.onOpen(),
        n.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }), !1
        );
      this.onPacket(n);
    };
    $g(t, this.socket.binaryType).forEach(r),
      this.readyState !== "closed" &&
        ((this._polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll());
  }
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  write(t) {
    (this.writable = !1),
      qg(t, (r) => {
        this.doWrite(r, () => {
          (this.writable = !0), this.emitReserved("drain");
        });
      });
  }
  uri() {
    const t = this.opts.secure ? "https" : "http",
      r = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (r[this.opts.timestampParam] = af()),
      !this.supportsBinary && !r.sid && (r.b64 = 1),
      this.createUri(t, r)
    );
  }
}
let cf = !1;
try {
  cf =
    typeof XMLHttpRequest != "undefined" &&
    "withCredentials" in new XMLHttpRequest();
} catch (e) {}
const sv = cf;
function ov() {}
class av extends iv {
  constructor(t) {
    if ((super(t), typeof location != "undefined")) {
      const r = location.protocol === "https:";
      let n = location.port;
      n || (n = r ? "443" : "80"),
        (this.xd =
          (typeof location != "undefined" &&
            t.hostname !== location.hostname) ||
          n !== t.port);
    }
  }
  doWrite(t, r) {
    const n = this.request({ method: "POST", data: t });
    n.on("success", r),
      n.on("error", (i, s) => {
        this.onError("xhr post error", i, s);
      });
  }
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)),
      t.on("error", (r, n) => {
        this.onError("xhr poll error", r, n);
      }),
      (this.pollXhr = t);
  }
}
let xr = class gi extends Fe {
  constructor(t, r, n) {
    super(),
      (this.createRequest = t),
      Hi(this, n),
      (this._opts = n),
      (this._method = n.method || "GET"),
      (this._uri = r),
      (this._data = n.data !== void 0 ? n.data : null),
      this._create();
  }
  _create() {
    var t;
    const r = of(
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
    const n = (this._xhr = this.createRequest(r));
    try {
      n.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
          for (let i in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(i) &&
              n.setRequestHeader(i, this._opts.extraHeaders[i]);
        }
      } catch (i) {}
      if (this._method === "POST")
        try {
          n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (i) {}
      try {
        n.setRequestHeader("Accept", "*/*");
      } catch (i) {}
      (t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(n),
        "withCredentials" in n &&
          (n.withCredentials = this._opts.withCredentials),
        this._opts.requestTimeout && (n.timeout = this._opts.requestTimeout),
        (n.onreadystatechange = () => {
          var i;
          n.readyState === 3 &&
            ((i = this._opts.cookieJar) === null ||
              i === void 0 ||
              i.parseCookies(n.getResponseHeader("set-cookie"))),
            n.readyState === 4 &&
              (n.status === 200 || n.status === 1223
                ? this._onLoad()
                : this.setTimeoutFn(() => {
                    this._onError(typeof n.status == "number" ? n.status : 0);
                  }, 0));
        }),
        n.send(this._data);
    } catch (i) {
      this.setTimeoutFn(() => {
        this._onError(i);
      }, 0);
      return;
    }
    typeof document != "undefined" &&
      ((this._index = gi.requestsCount++), (gi.requests[this._index] = this));
  }
  _onError(t) {
    this.emitReserved("error", t, this._xhr), this._cleanup(!0);
  }
  _cleanup(t) {
    if (!(typeof this._xhr == "undefined" || this._xhr === null)) {
      if (((this._xhr.onreadystatechange = ov), t))
        try {
          this._xhr.abort();
        } catch (r) {}
      typeof document != "undefined" && delete gi.requests[this._index],
        (this._xhr = null);
    }
  }
  _onLoad() {
    const t = this._xhr.responseText;
    t !== null &&
      (this.emitReserved("data", t),
      this.emitReserved("success"),
      this._cleanup());
  }
  abort() {
    this._cleanup();
  }
};
xr.requestsCount = 0;
xr.requests = {};
if (typeof document != "undefined") {
  if (typeof attachEvent == "function") attachEvent("onunload", Nc);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Ze ? "pagehide" : "unload";
    addEventListener(e, Nc, !1);
  }
}
function Nc() {
  for (let e in xr.requests)
    xr.requests.hasOwnProperty(e) && xr.requests[e].abort();
}
const cv = (function () {
  const e = lf({ xdomain: !1 });
  return e && e.responseType !== null;
})();
class lv extends av {
  constructor(t) {
    super(t);
    const r = t && t.forceBase64;
    this.supportsBinary = cv && !r;
  }
  request(t = {}) {
    return (
      Object.assign(t, { xd: this.xd }, this.opts), new xr(lf, this.uri(), t)
    );
  }
}
function lf(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest != "undefined" && (!t || sv))
      return new XMLHttpRequest();
  } catch (r) {}
  if (!t)
    try {
      return new Ze[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (r) {}
}
const uf =
  typeof navigator != "undefined" &&
  typeof navigator.product == "string" &&
  navigator.product.toLowerCase() === "reactnative";
class uv extends Yo {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(),
      r = this.opts.protocols,
      n = uf
        ? {}
        : of(
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
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t, r, n);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (t) =>
        this.onClose({
          description: "websocket connection closed",
          context: t,
        })),
      (this.ws.onmessage = (t) => this.onData(t.data)),
      (this.ws.onerror = (t) => this.onError("websocket error", t));
  }
  write(t) {
    this.writable = !1;
    for (let r = 0; r < t.length; r++) {
      const n = t[r],
        i = r === t.length - 1;
      Xo(n, this.supportsBinary, (s) => {
        try {
          this.doWrite(n, s);
        } catch (o) {}
        i &&
          Ui(() => {
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
    const t = this.opts.secure ? "wss" : "ws",
      r = this.query || {};
    return (
      this.opts.timestampRequests && (r[this.opts.timestampParam] = af()),
      this.supportsBinary || (r.b64 = 1),
      this.createUri(t, r)
    );
  }
}
const bs = Ze.WebSocket || Ze.MozWebSocket;
class fv extends uv {
  createSocket(t, r, n) {
    return uf ? new bs(t, r, n) : r ? new bs(t, r) : new bs(t);
  }
  doWrite(t, r) {
    this.ws.send(r);
  }
}
class hv extends Yo {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name],
      );
    } catch (t) {
      return this.emitReserved("error", t);
    }
    this._transport.closed
      .then(() => {
        this.onClose();
      })
      .catch((t) => {
        this.onError("webtransport error", t);
      }),
      this._transport.ready.then(() => {
        this._transport.createBidirectionalStream().then((t) => {
          const r = Kg(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            n = t.readable.pipeThrough(r).getReader(),
            i = Wg();
          i.readable.pipeTo(t.writable),
            (this._writer = i.writable.getWriter());
          const s = () => {
            n.read()
              .then(({ done: a, value: l }) => {
                a || (this.onPacket(l), s());
              })
              .catch((a) => {});
          };
          s();
          const o = { type: "open" };
          this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`),
            this._writer.write(o).then(() => this.onOpen());
        });
      });
  }
  write(t) {
    this.writable = !1;
    for (let r = 0; r < t.length; r++) {
      const n = t[r],
        i = r === t.length - 1;
      this._writer.write(n).then(() => {
        i &&
          Ui(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this._transport) === null || t === void 0 || t.close();
  }
}
const dv = { websocket: fv, webtransport: hv, polling: lv },
  pv =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  xv = [
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
function Js(e) {
  if (e.length > 8e3) throw "URI too long";
  const t = e,
    r = e.indexOf("["),
    n = e.indexOf("]");
  r != -1 &&
    n != -1 &&
    (e =
      e.substring(0, r) +
      e.substring(r, n).replace(/:/g, ";") +
      e.substring(n, e.length));
  let i = pv.exec(e || ""),
    s = {},
    o = 14;
  for (; o--; ) s[xv[o]] = i[o] || "";
  return (
    r != -1 &&
      n != -1 &&
      ((s.source = t),
      (s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":")),
      (s.authority = s.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (s.ipv6uri = !0)),
    (s.pathNames = mv(s, s.path)),
    (s.queryKey = yv(s, s.query)),
    s
  );
}
function mv(e, t) {
  const r = /\/{2,9}/g,
    n = t.replace(r, "/").split("/");
  return (
    (t.slice(0, 1) == "/" || t.length === 0) && n.splice(0, 1),
    t.slice(-1) == "/" && n.splice(n.length - 1, 1),
    n
  );
}
function yv(e, t) {
  const r = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (n, i, s) {
      i && (r[i] = s);
    }),
    r
  );
}
const eo =
    typeof addEventListener == "function" &&
    typeof removeEventListener == "function",
  vi = [];
eo &&
  addEventListener(
    "offline",
    () => {
      vi.forEach((e) => e());
    },
    !1,
  );
class Bt extends Fe {
  constructor(t, r) {
    if (
      (super(),
      (this.binaryType = Gg),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      t && typeof t == "object" && ((r = t), (t = null)),
      t)
    ) {
      const n = Js(t);
      (r.hostname = n.host),
        (r.secure = n.protocol === "https" || n.protocol === "wss"),
        (r.port = n.port),
        n.query && (r.query = n.query);
    } else r.host && (r.hostname = Js(r.host).host);
    Hi(this, r),
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
      r.transports.forEach((n) => {
        const i = n.prototype.name;
        this.transports.push(i), (this._transportsByName[i] = n);
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
        (this.opts.query = rv(this.opts.query)),
      eo &&
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
          vi.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open();
  }
  createTransport(t) {
    const r = Object.assign({}, this.opts.query);
    (r.EIO = sf), (r.transport = t), this.id && (r.sid = this.id);
    const n = Object.assign(
      {},
      this.opts,
      {
        query: r,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[t],
    );
    return new this._transportsByName[t](n);
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const t =
      this.opts.rememberUpgrade &&
      Bt.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
        ? "websocket"
        : this.transports[0];
    this.readyState = "opening";
    const r = this.createTransport(t);
    r.open(), this.setTransport(r);
  }
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = t),
      t
        .on("drain", this._onDrain.bind(this))
        .on("packet", this._onPacket.bind(this))
        .on("error", this._onError.bind(this))
        .on("close", (r) => this._onClose("transport close", r));
  }
  onOpen() {
    (this.readyState = "open"),
      (Bt.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush();
  }
  _onPacket(t) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this._sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong"),
            this._resetPingTimeout();
          break;
        case "error":
          const r = new Error("server error");
          (r.code = t.data), this._onError(r);
          break;
        case "message":
          this.emitReserved("data", t.data),
            this.emitReserved("message", t.data);
          break;
      }
  }
  onHandshake(t) {
    this.emitReserved("handshake", t),
      (this.id = t.sid),
      (this.transport.query.sid = t.sid),
      (this._pingInterval = t.pingInterval),
      (this._pingTimeout = t.pingTimeout),
      (this._maxPayload = t.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this._resetPingTimeout();
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const t = this._pingInterval + this._pingTimeout;
    (this._pingTimeoutTime = Date.now() + t),
      (this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose("ping timeout");
      }, t)),
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
      const t = this._getWritablePackets();
      this.transport.send(t),
        (this._prevBufferLen = t.length),
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
    for (let n = 0; n < this.writeBuffer.length; n++) {
      const i = this.writeBuffer[n].data;
      if ((i && (r += Jg(i)), n > 0 && r > this._maxPayload))
        return this.writeBuffer.slice(0, n);
      r += 2;
    }
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return !0;
    const t = Date.now() > this._pingTimeoutTime;
    return (
      t &&
        ((this._pingTimeoutTime = 0),
        Ui(() => {
          this._onClose("ping timeout");
        }, this.setTimeoutFn)),
      t
    );
  }
  write(t, r, n) {
    return this._sendPacket("message", t, r, n), this;
  }
  send(t, r, n) {
    return this._sendPacket("message", t, r, n), this;
  }
  _sendPacket(t, r, n, i) {
    if (
      (typeof r == "function" && ((i = r), (r = void 0)),
      typeof n == "function" && ((i = n), (n = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (n = n || {}), (n.compress = n.compress !== !1);
    const s = { type: t, data: r, options: n };
    this.emitReserved("packetCreate", s),
      this.writeBuffer.push(s),
      i && this.once("flush", i),
      this.flush();
  }
  close() {
    const t = () => {
        this._onClose("forced close"), this.transport.close();
      },
      r = () => {
        this.off("upgrade", r), this.off("upgradeError", r), t();
      },
      n = () => {
        this.once("upgrade", r), this.once("upgradeError", r);
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? n() : t();
            })
          : this.upgrading
            ? n()
            : t()),
      this
    );
  }
  _onError(t) {
    if (
      ((Bt.priorWebsocketSuccess = !1),
      this.opts.tryAllTransports &&
        this.transports.length > 1 &&
        this.readyState === "opening")
    )
      return this.transports.shift(), this._open();
    this.emitReserved("error", t), this._onClose("transport error", t);
  }
  _onClose(t, r) {
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
        eo &&
          (this._beforeunloadEventListener &&
            removeEventListener(
              "beforeunload",
              this._beforeunloadEventListener,
              !1,
            ),
          this._offlineEventListener))
      ) {
        const n = vi.indexOf(this._offlineEventListener);
        n !== -1 && vi.splice(n, 1);
      }
      (this.readyState = "closed"),
        (this.id = null),
        this.emitReserved("close", t, r),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0);
    }
  }
}
Bt.protocol = sf;
class gv extends Bt {
  constructor() {
    super(...arguments), (this._upgrades = []);
  }
  onOpen() {
    if ((super.onOpen(), this.readyState === "open" && this.opts.upgrade))
      for (let t = 0; t < this._upgrades.length; t++)
        this._probe(this._upgrades[t]);
  }
  _probe(t) {
    let r = this.createTransport(t),
      n = !1;
    Bt.priorWebsocketSuccess = !1;
    const i = () => {
      n ||
        (r.send([{ type: "ping", data: "probe" }]),
        r.once("packet", (h) => {
          if (!n)
            if (h.type === "pong" && h.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", r), !r)
              )
                return;
              (Bt.priorWebsocketSuccess = r.name === "websocket"),
                this.transport.pause(() => {
                  n ||
                    (this.readyState !== "closed" &&
                      (u(),
                      this.setTransport(r),
                      r.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", r),
                      (r = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const f = new Error("probe error");
              (f.transport = r.name), this.emitReserved("upgradeError", f);
            }
        }));
    };
    function s() {
      n || ((n = !0), u(), r.close(), (r = null));
    }
    const o = (h) => {
      const f = new Error("probe error: " + h);
      (f.transport = r.name), s(), this.emitReserved("upgradeError", f);
    };
    function a() {
      o("transport closed");
    }
    function l() {
      o("socket closed");
    }
    function c(h) {
      r && h.name !== r.name && s();
    }
    const u = () => {
      r.removeListener("open", i),
        r.removeListener("error", o),
        r.removeListener("close", a),
        this.off("close", l),
        this.off("upgrading", c);
    };
    r.once("open", i),
      r.once("error", o),
      r.once("close", a),
      this.once("close", l),
      this.once("upgrading", c),
      this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport"
        ? this.setTimeoutFn(() => {
            n || r.open();
          }, 200)
        : r.open();
  }
  onHandshake(t) {
    (this._upgrades = this._filterUpgrades(t.upgrades)), super.onHandshake(t);
  }
  _filterUpgrades(t) {
    const r = [];
    for (let n = 0; n < t.length; n++)
      ~this.transports.indexOf(t[n]) && r.push(t[n]);
    return r;
  }
}
let vv = class extends gv {
  constructor(t, r = {}) {
    const n = typeof t == "object" ? t : r;
    (!n.transports || (n.transports && typeof n.transports[0] == "string")) &&
      (n.transports = (n.transports || ["polling", "websocket", "webtransport"])
        .map((i) => dv[i])
        .filter((i) => !!i)),
      super(t, n);
  }
};
function Ev(e, t = "", r) {
  let n = e;
  (r = r || (typeof location != "undefined" && location)),
    e == null && (e = r.protocol + "//" + r.host),
    typeof e == "string" &&
      (e.charAt(0) === "/" &&
        (e.charAt(1) === "/" ? (e = r.protocol + e) : (e = r.host + e)),
      /^(https?|wss?):\/\//.test(e) ||
        (typeof r != "undefined"
          ? (e = r.protocol + "//" + e)
          : (e = "https://" + e)),
      (n = Js(e))),
    n.port ||
      (/^(http|ws)$/.test(n.protocol)
        ? (n.port = "80")
        : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")),
    (n.path = n.path || "/");
  const s = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return (
    (n.id = n.protocol + "://" + s + ":" + n.port + t),
    (n.href =
      n.protocol + "://" + s + (r && r.port === n.port ? "" : ":" + n.port)),
    n
  );
}
const bv = typeof ArrayBuffer == "function",
  Cv = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  ff = Object.prototype.toString,
  Av =
    typeof Blob == "function" ||
    (typeof Blob != "undefined" &&
      ff.call(Blob) === "[object BlobConstructor]"),
  Bv =
    typeof File == "function" ||
    (typeof File != "undefined" &&
      ff.call(File) === "[object FileConstructor]");
function Zo(e) {
  return (
    (bv && (e instanceof ArrayBuffer || Cv(e))) ||
    (Av && e instanceof Blob) ||
    (Bv && e instanceof File)
  );
}
function Ei(e, t) {
  if (!e || typeof e != "object") return !1;
  if (Array.isArray(e)) {
    for (let r = 0, n = e.length; r < n; r++) if (Ei(e[r])) return !0;
    return !1;
  }
  if (Zo(e)) return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Ei(e.toJSON(), !0);
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && Ei(e[r])) return !0;
  return !1;
}
function wv(e) {
  const t = [],
    r = e.data,
    n = e;
  return (
    (n.data = to(r, t)), (n.attachments = t.length), { packet: n, buffers: t }
  );
}
function to(e, t) {
  if (!e) return e;
  if (Zo(e)) {
    const r = { _placeholder: !0, num: t.length };
    return t.push(e), r;
  } else if (Array.isArray(e)) {
    const r = new Array(e.length);
    for (let n = 0; n < e.length; n++) r[n] = to(e[n], t);
    return r;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const r = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (r[n] = to(e[n], t));
    return r;
  }
  return e;
}
function Dv(e, t) {
  return (e.data = ro(e.data, t)), delete e.attachments, e;
}
function ro(e, t) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let r = 0; r < e.length; r++) e[r] = ro(e[r], t);
  else if (typeof e == "object")
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (e[r] = ro(e[r], t));
  return e;
}
const Fv = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  Sv = 5;
var ae;
(function (e) {
  (e[(e.CONNECT = 0)] = "CONNECT"),
    (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
    (e[(e.EVENT = 2)] = "EVENT"),
    (e[(e.ACK = 3)] = "ACK"),
    (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
})(ae || (ae = {}));
class _v {
  constructor(t) {
    this.replacer = t;
  }
  encode(t) {
    return (t.type === ae.EVENT || t.type === ae.ACK) && Ei(t)
      ? this.encodeAsBinary({
          type: t.type === ae.EVENT ? ae.BINARY_EVENT : ae.BINARY_ACK,
          nsp: t.nsp,
          data: t.data,
          id: t.id,
        })
      : [this.encodeAsString(t)];
  }
  encodeAsString(t) {
    let r = "" + t.type;
    return (
      (t.type === ae.BINARY_EVENT || t.type === ae.BINARY_ACK) &&
        (r += t.attachments + "-"),
      t.nsp && t.nsp !== "/" && (r += t.nsp + ","),
      t.id != null && (r += t.id),
      t.data != null && (r += JSON.stringify(t.data, this.replacer)),
      r
    );
  }
  encodeAsBinary(t) {
    const r = wv(t),
      n = this.encodeAsString(r.packet),
      i = r.buffers;
    return i.unshift(n), i;
  }
}
function Ic(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Qo extends Fe {
  constructor(t) {
    super(), (this.reviver = t);
  }
  add(t) {
    let r;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      r = this.decodeString(t);
      const n = r.type === ae.BINARY_EVENT;
      n || r.type === ae.BINARY_ACK
        ? ((r.type = n ? ae.EVENT : ae.ACK),
          (this.reconstructor = new Tv(r)),
          r.attachments === 0 && super.emitReserved("decoded", r))
        : super.emitReserved("decoded", r);
    } else if (Zo(t) || t.base64)
      if (this.reconstructor)
        (r = this.reconstructor.takeBinaryData(t)),
          r && ((this.reconstructor = null), super.emitReserved("decoded", r));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + t);
  }
  decodeString(t) {
    let r = 0;
    const n = { type: Number(t.charAt(0)) };
    if (ae[n.type] === void 0) throw new Error("unknown packet type " + n.type);
    if (n.type === ae.BINARY_EVENT || n.type === ae.BINARY_ACK) {
      const s = r + 1;
      for (; t.charAt(++r) !== "-" && r != t.length; );
      const o = t.substring(s, r);
      if (o != Number(o) || t.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(o);
    }
    if (t.charAt(r + 1) === "/") {
      const s = r + 1;
      for (; ++r && !(t.charAt(r) === "," || r === t.length); );
      n.nsp = t.substring(s, r);
    } else n.nsp = "/";
    const i = t.charAt(r + 1);
    if (i !== "" && Number(i) == i) {
      const s = r + 1;
      for (; ++r; ) {
        const o = t.charAt(r);
        if (o == null || Number(o) != o) {
          --r;
          break;
        }
        if (r === t.length) break;
      }
      n.id = Number(t.substring(s, r + 1));
    }
    if (t.charAt(++r)) {
      const s = this.tryParse(t.substr(r));
      if (Qo.isPayloadValid(n.type, s)) n.data = s;
      else throw new Error("invalid payload");
    }
    return n;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch (r) {
      return !1;
    }
  }
  static isPayloadValid(t, r) {
    switch (t) {
      case ae.CONNECT:
        return Ic(r);
      case ae.DISCONNECT:
        return r === void 0;
      case ae.CONNECT_ERROR:
        return typeof r == "string" || Ic(r);
      case ae.EVENT:
      case ae.BINARY_EVENT:
        return (
          Array.isArray(r) &&
          (typeof r[0] == "number" ||
            (typeof r[0] == "string" && Fv.indexOf(r[0]) === -1))
        );
      case ae.ACK:
      case ae.BINARY_ACK:
        return Array.isArray(r);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class Tv {
  constructor(t) {
    (this.packet = t), (this.buffers = []), (this.reconPack = t);
  }
  takeBinaryData(t) {
    if (
      (this.buffers.push(t), this.buffers.length === this.reconPack.attachments)
    ) {
      const r = Dv(this.reconPack, this.buffers);
      return this.finishedReconstruction(), r;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const Rv = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: Qo,
      Encoder: _v,
      get PacketType() {
        return ae;
      },
      protocol: Sv,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function nt(e, t, r) {
  return (
    e.on(t, r),
    function () {
      e.off(t, r);
    }
  );
}
const Pv = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class hf extends Fe {
  constructor(t, r, n) {
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
      (this.io = t),
      (this.nsp = r),
      n && n.auth && (this.auth = n.auth),
      (this._opts = Object.assign({}, n)),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const t = this.io;
    this.subs = [
      nt(t, "open", this.onopen.bind(this)),
      nt(t, "packet", this.onpacket.bind(this)),
      nt(t, "error", this.onerror.bind(this)),
      nt(t, "close", this.onclose.bind(this)),
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
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  emit(t, ...r) {
    var n, i, s;
    if (Pv.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (
      (r.unshift(t),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(r), this;
    const o = { type: ae.EVENT, data: r };
    if (
      ((o.options = {}),
      (o.options.compress = this.flags.compress !== !1),
      typeof r[r.length - 1] == "function")
    ) {
      const u = this.ids++,
        h = r.pop();
      this._registerAckCallback(u, h), (o.id = u);
    }
    const a =
        (i =
          (n = this.io.engine) === null || n === void 0
            ? void 0
            : n.transport) === null || i === void 0
          ? void 0
          : i.writable,
      l =
        this.connected &&
        !(
          !((s = this.io.engine) === null || s === void 0) &&
          s._hasPingExpired()
        );
    return (
      (this.flags.volatile && !a) ||
        (l
          ? (this.notifyOutgoingListeners(o), this.packet(o))
          : this.sendBuffer.push(o)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(t, r) {
    var n;
    const i =
      (n = this.flags.timeout) !== null && n !== void 0
        ? n
        : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[t] = r;
      return;
    }
    const s = this.io.setTimeoutFn(() => {
        delete this.acks[t];
        for (let a = 0; a < this.sendBuffer.length; a++)
          this.sendBuffer[a].id === t && this.sendBuffer.splice(a, 1);
        r.call(this, new Error("operation has timed out"));
      }, i),
      o = (...a) => {
        this.io.clearTimeoutFn(s), r.apply(this, a);
      };
    (o.withError = !0), (this.acks[t] = o);
  }
  emitWithAck(t, ...r) {
    return new Promise((n, i) => {
      const s = (o, a) => (o ? i(o) : n(a));
      (s.withError = !0), r.push(s), this.emit(t, ...r);
    });
  }
  _addToQueue(t) {
    let r;
    typeof t[t.length - 1] == "function" && (r = t.pop());
    const n = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    t.push((i, ...s) =>
      n !== this._queue[0]
        ? void 0
        : (i !== null
            ? n.tryCount > this._opts.retries &&
              (this._queue.shift(), r && r(i))
            : (this._queue.shift(), r && r(null, ...s)),
          (n.pending = !1),
          this._drainQueue()),
    ),
      this._queue.push(n),
      this._drainQueue();
  }
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const r = this._queue[0];
    (r.pending && !t) ||
      ((r.pending = !0),
      r.tryCount++,
      (this.flags = r.flags),
      this.emit.apply(this, r.args));
  }
  packet(t) {
    (t.nsp = this.nsp), this.io._packet(t);
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((t) => {
          this._sendConnectPacket(t);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(t) {
    this.packet({
      type: ae.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
        : t,
    });
  }
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  onclose(t, r) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", t, r),
      this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((n) => String(n.id) === t)) {
        const n = this.acks[t];
        delete this.acks[t],
          n.withError &&
            n.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case ae.CONNECT:
          t.data && t.data.sid
            ? this.onconnect(t.data.sid, t.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)",
                ),
              );
          break;
        case ae.EVENT:
        case ae.BINARY_EVENT:
          this.onevent(t);
          break;
        case ae.ACK:
        case ae.BINARY_ACK:
          this.onack(t);
          break;
        case ae.DISCONNECT:
          this.ondisconnect();
          break;
        case ae.CONNECT_ERROR:
          this.destroy();
          const n = new Error(t.data.message);
          (n.data = t.data.data), this.emitReserved("connect_error", n);
          break;
      }
  }
  onevent(t) {
    const r = t.data || [];
    t.id != null && r.push(this.ack(t.id)),
      this.connected
        ? this.emitEvent(r)
        : this.receiveBuffer.push(Object.freeze(r));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const r = this._anyListeners.slice();
      for (const n of r) n.apply(this, t);
    }
    super.emit.apply(this, t),
      this._pid &&
        t.length &&
        typeof t[t.length - 1] == "string" &&
        (this._lastOffset = t[t.length - 1]);
  }
  ack(t) {
    const r = this;
    let n = !1;
    return function (...i) {
      n || ((n = !0), r.packet({ type: ae.ACK, id: t, data: i }));
    };
  }
  onack(t) {
    const r = this.acks[t.id];
    typeof r == "function" &&
      (delete this.acks[t.id],
      r.withError && t.data.unshift(null),
      r.apply(this, t.data));
  }
  onconnect(t, r) {
    (this.id = t),
      (this.recovered = r && this._pid === r),
      (this._pid = r),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved("connect"),
      this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((t) => {
        this.notifyOutgoingListeners(t), this.packet(t);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: ae.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(t) {
    return (this.flags.compress = t), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(t) {
    return (this.flags.timeout = t), this;
  }
  onAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(t),
      this
    );
  }
  prependAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(t),
      this
    );
  }
  offAny(t) {
    if (!this._anyListeners) return this;
    if (t) {
      const r = this._anyListeners;
      for (let n = 0; n < r.length; n++)
        if (t === r[n]) return r.splice(n, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(t),
      this
    );
  }
  prependAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(t),
      this
    );
  }
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners) return this;
    if (t) {
      const r = this._anyOutgoingListeners;
      for (let n = 0; n < r.length; n++)
        if (t === r[n]) return r.splice(n, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const r = this._anyOutgoingListeners.slice();
      for (const n of r) n.apply(this, t.data);
    }
  }
}
function Br(e) {
  (e = e || {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0);
}
Br.prototype.duration = function () {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(),
      r = Math.floor(t * this.jitter * e);
    e = (Math.floor(t * 10) & 1) == 0 ? e - r : e + r;
  }
  return Math.min(e, this.max) | 0;
};
Br.prototype.reset = function () {
  this.attempts = 0;
};
Br.prototype.setMin = function (e) {
  this.ms = e;
};
Br.prototype.setMax = function (e) {
  this.max = e;
};
Br.prototype.setJitter = function (e) {
  this.jitter = e;
};
class no extends Fe {
  constructor(t, r) {
    var n;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      t && typeof t == "object" && ((r = t), (t = void 0)),
      (r = r || {}),
      (r.path = r.path || "/socket.io"),
      (this.opts = r),
      Hi(this, r),
      this.reconnection(r.reconnection !== !1),
      this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(r.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5,
      ),
      (this.backoff = new Br({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(r.timeout == null ? 2e4 : r.timeout),
      (this._readyState = "closed"),
      (this.uri = t);
    const i = r.parser || Rv;
    (this.encoder = new i.Encoder()),
      (this.decoder = new i.Decoder()),
      (this._autoConnect = r.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length
      ? ((this._reconnection = !!t), t || (this.skipReconnect = !0), this)
      : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = t), this);
  }
  reconnectionDelay(t) {
    var r;
    return t === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = t),
        (r = this.backoff) === null || r === void 0 || r.setMin(t),
        this);
  }
  randomizationFactor(t) {
    var r;
    return t === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = t),
        (r = this.backoff) === null || r === void 0 || r.setJitter(t),
        this);
  }
  reconnectionDelayMax(t) {
    var r;
    return t === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = t),
        (r = this.backoff) === null || r === void 0 || r.setMax(t),
        this);
  }
  timeout(t) {
    return arguments.length ? ((this._timeout = t), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(t) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new vv(this.uri, this.opts);
    const r = this.engine,
      n = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const i = nt(r, "open", function () {
        n.onopen(), t && t();
      }),
      s = (a) => {
        this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", a),
          t ? t(a) : this.maybeReconnectOnOpen();
      },
      o = nt(r, "error", s);
    if (this._timeout !== !1) {
      const a = this._timeout,
        l = this.setTimeoutFn(() => {
          i(), s(new Error("timeout")), r.close();
        }, a);
      this.opts.autoUnref && l.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(l);
        });
    }
    return this.subs.push(i), this.subs.push(o), this;
  }
  connect(t) {
    return this.open(t);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      nt(t, "ping", this.onping.bind(this)),
      nt(t, "data", this.ondata.bind(this)),
      nt(t, "error", this.onerror.bind(this)),
      nt(t, "close", this.onclose.bind(this)),
      nt(this.decoder, "decoded", this.ondecoded.bind(this)),
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (r) {
      this.onclose("parse error", r);
    }
  }
  ondecoded(t) {
    Ui(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  onerror(t) {
    this.emitReserved("error", t);
  }
  socket(t, r) {
    let n = this.nsps[t];
    return (
      n
        ? this._autoConnect && !n.active && n.connect()
        : ((n = new hf(this, t, r)), (this.nsps[t] = n)),
      n
    );
  }
  _destroy(t) {
    const r = Object.keys(this.nsps);
    for (const n of r) if (this.nsps[n].active) return;
    this._close();
  }
  _packet(t) {
    const r = this.encoder.encode(t);
    for (let n = 0; n < r.length; n++) this.engine.write(r[n], t.options);
  }
  cleanup() {
    this.subs.forEach((t) => t()),
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
  onclose(t, r) {
    var n;
    this.cleanup(),
      (n = this.engine) === null || n === void 0 || n.close(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", t, r),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1);
    else {
      const r = this.backoff.duration();
      this._reconnecting = !0;
      const n = this.setTimeoutFn(() => {
        t.skipReconnect ||
          (this.emitReserved("reconnect_attempt", t.backoff.attempts),
          !t.skipReconnect &&
            t.open((i) => {
              i
                ? ((t._reconnecting = !1),
                  t.reconnect(),
                  this.emitReserved("reconnect_error", i))
                : t.onreconnect();
            }));
      }, r);
      this.opts.autoUnref && n.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(n);
        });
    }
  }
  onreconnect() {
    const t = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", t);
  }
}
const Ur = {};
function Cs(e, t) {
  typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
  const r = Ev(e, t.path || "/socket.io"),
    n = r.source,
    i = r.id,
    s = r.path,
    o = Ur[i] && s in Ur[i].nsps,
    a = t.forceNew || t["force new connection"] || t.multiplex === !1 || o;
  let l;
  return (
    a ? (l = new no(n, t)) : (Ur[i] || (Ur[i] = new no(n, t)), (l = Ur[i])),
    r.query && !t.query && (t.query = r.queryKey),
    l.socket(r.path, t)
  );
}
Object.assign(Cs, { Manager: no, Socket: hf, io: Cs, connect: Cs });
export {
  _e as A,
  Nv as C,
  As as E,
  Ci as a,
  Hf as b,
  jf as c,
  Vv as d,
  Mv as e,
  Se as f,
  gf as g,
  Hv as h,
  xe as i,
  qr as j,
  Iv as k,
  Cs as l,
  cr as m,
  Kt as p,
  Ov as r,
  _i as s,
};
