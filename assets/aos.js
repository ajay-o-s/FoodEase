var lf = Object.defineProperty,
  uf = Object.defineProperties;
var ff = Object.getOwnPropertyDescriptors;
var gn = Object.getOwnPropertySymbols;
var Qo = Object.prototype.hasOwnProperty,
  ea = Object.prototype.propertyIsEnumerable;
var sr = (e, t) => ((t = Symbol[e]) ? t : Symbol.for("Symbol." + e)),
  hf = (e) => {
    throw TypeError(e);
  };
var Jo = (e, t, r) =>
    t in e
      ? lf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  I = (e, t) => {
    for (var r in t || (t = {})) Qo.call(t, r) && Jo(e, r, t[r]);
    if (gn) for (var r of gn(t)) ea.call(t, r) && Jo(e, r, t[r]);
    return e;
  },
  oe = (e, t) => uf(e, ff(t));
var Xe = (e, t) => {
  var r = {};
  for (var n in e) Qo.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && gn)
    for (var n of gn(e)) t.indexOf(n) < 0 && ea.call(e, n) && (r[n] = e[n]);
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
      (s[sr("asyncIterator")] = () => s),
      i("next"),
      i("throw"),
      i("return"),
      s
    );
  },
  Xi = (e) => {
    var t = e[sr("asyncIterator")],
      r = !1,
      n,
      i = {};
    return (
      t == null
        ? ((t = e[sr("iterator")]()), (n = (s) => (i[s] = (o) => t[s](o))))
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
                      l instanceof Object || hf("Object expected"), a(l);
                    }),
                    1,
                  ),
                }
              );
            }))),
      (i[sr("iterator")] = () => i),
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
  ta = (e, t, r) =>
    (t = e[sr("asyncIterator")])
      ? t.call(e)
      : ((e = e[sr("iterator")]()),
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
import { r as $, j as mt } from "./aos_vendor.js";
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
function df(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function pf(e) {
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
/**
 * @remix-run/router v1.23.0
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
const ra = "popstate";
function Sv(e) {
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
  return mf(t, r, null, e);
}
function xe(e, t) {
  if (e === !1 || e === null || typeof e == "undefined") throw new Error(t);
}
function xr(e, t) {
  if (!e) {
    typeof console != "undefined" && console.warn(t);
    try {
      throw new Error(t);
    } catch (r) {}
  }
}
function xf() {
  return Math.random().toString(36).substr(2, 8);
}
function na(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Yr(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    me(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? $t(t) : t,
      { state: r, key: (t && t.key) || n || xf() },
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
function $t(e) {
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
function mf(e, t, r, n) {
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
    let g = na(y, c),
      E = m.createHref(y);
    try {
      o.pushState(g, "", E);
    } catch (A) {
      if (A instanceof DOMException && A.name === "DataCloneError") throw A;
      i.location.assign(E);
    }
    s && l && l({ action: a, location: m.location, delta: 1 });
  }
  function d(x, b) {
    a = _e.Replace;
    let y = Yr(m.location, x, b);
    c = u();
    let g = na(y, c),
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
        i.addEventListener(ra, h),
        (l = x),
        () => {
          i.removeEventListener(ra, h), (l = null);
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
const yf = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function gf(e) {
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
        gf(i))
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
function ar(e, t, r) {
  return r === void 0 && (r = "/"), Fn(e, t, r, !1);
}
function Fn(e, t, r, n) {
  let i = typeof t == "string" ? $t(t) : t,
    s = _i(i.pathname || "/", r);
  if (s == null) return null;
  let o = Oc(e);
  Ef(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) {
    let c = Rf(s);
    a = _f(o[l], c, n);
  }
  return a;
}
function vf(e, t) {
  let { route: r, pathname: n, params: i } = e;
  return { id: r.id, pathname: n, params: i, data: t[r.id], handle: r.handle };
}
function Oc(e, t, r, n) {
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
      Oc(s.children, t, u, c)),
      !(s.path == null && !s.index) &&
        t.push({ path: c, score: Ff(c, s.index), routesMeta: u });
  };
  return (
    e.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let l of Mc(s.path)) i(s, o, l);
    }),
    t
  );
}
function Mc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    i = r.endsWith("?"),
    s = r.replace(/\?$/, "");
  if (n.length === 0) return i ? [s, ""] : [s];
  let o = Mc(n.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    i && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function Ef(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Sf(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex),
        ),
  );
}
const bf = /^:[\w-]+$/,
  Af = 3,
  Cf = 2,
  Bf = 1,
  Df = 10,
  wf = -2,
  ia = (e) => e === "*";
function Ff(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(ia) && (n += wf),
    t && (n += Cf),
    r
      .filter((i) => !ia(i))
      .reduce((i, s) => i + (bf.test(s) ? Af : s === "" ? Bf : Df), n)
  );
}
function Sf(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, i) => n === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function _f(e, t, r) {
  r === void 0 && (r = !1);
  let { routesMeta: n } = e,
    i = {},
    s = "/",
    o = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      c = a === n.length - 1,
      u = s === "/" ? t : t.slice(s.length) || "/",
      h = sa(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
        u,
      ),
      f = l.route;
    if (
      (!h &&
        c &&
        r &&
        !n[n.length - 1].route.index &&
        (h = sa(
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
        pathnameBase: Mf(qr([s, h.pathnameBase])),
        route: f,
      }),
      h.pathnameBase !== "/" && (s = qr([s, h.pathnameBase]));
  }
  return o;
}
function sa(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = Tf(e.path, e.caseSensitive, e.end),
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
function Tf(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    xr(
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
function Rf(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      xr(
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
function Pf(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: i = "",
  } = typeof e == "string" ? $t(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : kf(r, t)) : t,
    search: Vf(n),
    hash: Nf(i),
  };
}
function kf(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? r.length > 1 && r.pop() : i !== "." && r.push(i);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Yi(e, t, r, n) {
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
function Vc(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Lf(e, t) {
  let r = Vc(e);
  return t
    ? r.map((n, i) => (i === r.length - 1 ? n.pathname : n.pathnameBase))
    : r.map((n) => n.pathnameBase);
}
function Of(e, t, r, n) {
  n === void 0 && (n = !1);
  let i;
  typeof e == "string"
    ? (i = $t(e))
    : ((i = me({}, e)),
      xe(
        !i.pathname || !i.pathname.includes("?"),
        Yi("?", "pathname", "search", i),
      ),
      xe(
        !i.pathname || !i.pathname.includes("#"),
        Yi("#", "pathname", "hash", i),
      ),
      xe(!i.search || !i.search.includes("#"), Yi("#", "search", "hash", i)));
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
  let l = Pf(i, a),
    c = o && o !== "/" && o.endsWith("/"),
    u = (s || o === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (c || u) && (l.pathname += "/"), l;
}
const qr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Mf = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Vf = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Nf = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class bs {
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
function Ai(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Nc = ["post", "put", "patch", "delete"],
  If = new Set(Nc),
  Uf = ["get", ...Nc],
  Hf = new Set(Uf),
  jf = new Set([301, 302, 303, 307, 308]),
  zf = new Set([307, 308]),
  Zi = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  qf = {
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
  ro = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Wf = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Ic = "remix-router-transitions";
function _v(e) {
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
    let C = e.detectErrorBoundary;
    i = (F) => ({ hasErrorBoundary: C(F) });
  } else i = Wf;
  let s = {},
    o = bi(e.routes, i, void 0, s),
    a,
    l = e.basename || "/",
    c = e.dataStrategy || Gf,
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
    y = ar(o, e.history.location, l),
    g = !1,
    E = null;
  if (y == null && !u) {
    let C = Ie(404, { pathname: e.history.location.pathname }),
      { matches: F, route: _ } = ma(o);
    (y = F), (E = { [_.id]: C });
  }
  y &&
    !e.hydrationData &&
    er(y, o, e.history.location.pathname).active &&
    (y = null);
  let A;
  if (y)
    if (y.some((C) => C.route.lazy)) A = !1;
    else if (!y.some((C) => C.route.loader)) A = !0;
    else if (h.v7_partialHydration) {
      let C = e.hydrationData ? e.hydrationData.loaderData : null,
        F = e.hydrationData ? e.hydrationData.errors : null;
      if (F) {
        let _ = y.findIndex((N) => F[N.route.id] !== void 0);
        A = y.slice(0, _ + 1).every((N) => !Cs(N.route, C, F));
      } else A = y.every((_) => !Cs(_.route, C, F));
    } else A = e.hydrationData != null;
  else if (((A = !1), (y = []), h.v7_partialHydration)) {
    let C = er(null, o, e.history.location.pathname);
    C.active && C.matches && ((g = !0), (y = C.matches));
  }
  let D,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: y,
      initialized: A,
      navigation: Zi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || E,
      fetchers: new Map(),
      blockers: new Map(),
    },
    w = _e.Pop,
    P = !1,
    B,
    S = !1,
    k = new Map(),
    L = null,
    H = !1,
    q = !1,
    G = [],
    Z = new Set(),
    j = new Map(),
    re = 0,
    ee = -1,
    R = new Map(),
    O = new Set(),
    V = new Map(),
    M = new Map(),
    se = new Set(),
    le = new Map(),
    ve = new Map(),
    te;
  function _t() {
    if (
      ((f = e.history.listen((C) => {
        let { action: F, location: _, delta: N } = C;
        if (te) {
          te(), (te = void 0);
          return;
        }
        xr(
          ve.size === 0 || N != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let U = Tr({
          currentLocation: v.location,
          nextLocation: _,
          historyAction: F,
        });
        if (U && N != null) {
          let Y = new Promise((Q) => {
            te = Q;
          });
          e.history.go(N * -1),
            Jt(U, {
              state: "blocked",
              location: _,
              proceed() {
                Jt(U, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: _,
                }),
                  Y.then(() => e.history.go(N));
              },
              reset() {
                let Q = new Map(v.blockers);
                Q.set(U, Mr), Ce({ blockers: Q });
              },
            });
          return;
        }
        return ze(F, _);
      })),
      r)
    ) {
      lh(t, k);
      let C = () => uh(t, k);
      t.addEventListener("pagehide", C),
        (L = () => t.removeEventListener("pagehide", C));
    }
    return v.initialized || ze(_e.Pop, v.location, { initialHydration: !0 }), D;
  }
  function vt() {
    f && f(),
      L && L(),
      d.clear(),
      B && B.abort(),
      v.fetchers.forEach((C, F) => et(F)),
      v.blockers.forEach((C, F) => _r(F));
  }
  function Dr(C) {
    return d.add(C), () => d.delete(C);
  }
  function Ce(C, F) {
    F === void 0 && (F = {}), (v = me({}, v, C));
    let _ = [],
      N = [];
    h.v7_fetcherPersist &&
      v.fetchers.forEach((U, Y) => {
        U.state === "idle" && (se.has(Y) ? N.push(Y) : _.push(Y));
      }),
      se.forEach((U) => {
        !v.fetchers.has(U) && !j.has(U) && N.push(U);
      }),
      [...d].forEach((U) =>
        U(v, {
          deletedFetchers: N,
          viewTransitionOpts: F.viewTransitionOpts,
          flushSync: F.flushSync === !0,
        }),
      ),
      h.v7_fetcherPersist
        ? (_.forEach((U) => v.fetchers.delete(U)), N.forEach((U) => et(U)))
        : N.forEach((U) => se.delete(U));
  }
  function Te(C, F, _) {
    var N, U;
    let { flushSync: Y } = _ === void 0 ? {} : _,
      Q =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        rt(v.navigation.formMethod) &&
        v.navigation.state === "loading" &&
        ((N = C.state) == null ? void 0 : N._isRedirect) !== !0,
      W;
    F.actionData
      ? Object.keys(F.actionData).length > 0
        ? (W = F.actionData)
        : (W = null)
      : Q
        ? (W = v.actionData)
        : (W = null);
    let K = F.loaderData
        ? pa(v.loaderData, F.loaderData, F.matches || [], F.errors)
        : v.loaderData,
      z = v.blockers;
    z.size > 0 && ((z = new Map(z)), z.forEach((ue, Pe) => z.set(Pe, Mr)));
    let X =
      P === !0 ||
      (v.navigation.formMethod != null &&
        rt(v.navigation.formMethod) &&
        ((U = C.state) == null ? void 0 : U._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      H ||
        w === _e.Pop ||
        (w === _e.Push
          ? e.history.push(C, C.state)
          : w === _e.Replace && e.history.replace(C, C.state));
    let ie;
    if (w === _e.Pop) {
      let ue = k.get(v.location.pathname);
      ue && ue.has(C.pathname)
        ? (ie = { currentLocation: v.location, nextLocation: C })
        : k.has(C.pathname) &&
          (ie = { currentLocation: C, nextLocation: v.location });
    } else if (S) {
      let ue = k.get(v.location.pathname);
      ue
        ? ue.add(C.pathname)
        : ((ue = new Set([C.pathname])), k.set(v.location.pathname, ue)),
        (ie = { currentLocation: v.location, nextLocation: C });
    }
    Ce(
      me({}, F, {
        actionData: W,
        loaderData: K,
        historyAction: w,
        location: C,
        initialized: !0,
        navigation: Zi,
        revalidation: "idle",
        restoreScrollPosition: Pr(C, F.matches || v.matches),
        preventScrollReset: X,
        blockers: z,
      }),
      { viewTransitionOpts: ie, flushSync: Y === !0 },
    ),
      (w = _e.Pop),
      (P = !1),
      (S = !1),
      (H = !1),
      (q = !1),
      (G = []);
  }
  async function Le(C, F) {
    if (typeof C == "number") {
      e.history.go(C);
      return;
    }
    let _ = As(
        v.location,
        v.matches,
        l,
        h.v7_prependBasename,
        C,
        h.v7_relativeSplatPath,
        F == null ? void 0 : F.fromRouteId,
        F == null ? void 0 : F.relative,
      ),
      {
        path: N,
        submission: U,
        error: Y,
      } = oa(h.v7_normalizeFormMethod, !1, _, F),
      Q = v.location,
      W = Yr(v.location, N, F && F.state);
    W = me({}, W, e.history.encodeLocation(W));
    let K = F && F.replace != null ? F.replace : void 0,
      z = _e.Push;
    K === !0
      ? (z = _e.Replace)
      : K === !1 ||
        (U != null &&
          rt(U.formMethod) &&
          U.formAction === v.location.pathname + v.location.search &&
          (z = _e.Replace));
    let X =
        F && "preventScrollReset" in F ? F.preventScrollReset === !0 : void 0,
      ie = (F && F.flushSync) === !0,
      ue = Tr({ currentLocation: Q, nextLocation: W, historyAction: z });
    if (ue) {
      Jt(ue, {
        state: "blocked",
        location: W,
        proceed() {
          Jt(ue, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: W,
          }),
            Le(C, F);
        },
        reset() {
          let Pe = new Map(v.blockers);
          Pe.set(ue, Mr), Ce({ blockers: Pe });
        },
      });
      return;
    }
    return await ze(z, W, {
      submission: U,
      pendingError: Y,
      preventScrollReset: X,
      replace: F && F.replace,
      enableViewTransition: F && F.viewTransition,
      flushSync: ie,
    });
  }
  function Gt() {
    if (
      (pt(),
      Ce({ revalidation: "loading" }),
      v.navigation.state !== "submitting")
    ) {
      if (v.navigation.state === "idle") {
        ze(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      ze(w || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
        enableViewTransition: S === !0,
      });
    }
  }
  async function ze(C, F, _) {
    B && B.abort(),
      (B = null),
      (w = C),
      (H = (_ && _.startUninterruptedRevalidation) === !0),
      qi(v.location, v.matches),
      (P = (_ && _.preventScrollReset) === !0),
      (S = (_ && _.enableViewTransition) === !0);
    let N = a || o,
      U = _ && _.overrideNavigation,
      Y =
        _ != null &&
        _.initialHydration &&
        v.matches &&
        v.matches.length > 0 &&
        !g
          ? v.matches
          : ar(N, F, l),
      Q = (_ && _.flushSync) === !0;
    if (
      Y &&
      v.initialized &&
      !q &&
      th(v.location, F) &&
      !(_ && _.submission && rt(_.submission.formMethod))
    ) {
      Te(F, { matches: Y }, { flushSync: Q });
      return;
    }
    let W = er(Y, N, F.pathname);
    if ((W.active && W.matches && (Y = W.matches), !Y)) {
      let { error: pe, notFoundMatches: he, route: Ee } = Rr(F.pathname);
      Te(
        F,
        { matches: he, loaderData: {}, errors: { [Ee.id]: pe } },
        { flushSync: Q },
      );
      return;
    }
    B = new AbortController();
    let K = or(e.history, F, B.signal, _ && _.submission),
      z;
    if (_ && _.pendingError)
      z = [Vt(Y).route.id, { type: de.error, error: _.pendingError }];
    else if (_ && _.submission && rt(_.submission.formMethod)) {
      let pe = await Yt(K, F, _.submission, Y, W.active, {
        replace: _.replace,
        flushSync: Q,
      });
      if (pe.shortCircuited) return;
      if (pe.pendingActionResult) {
        let [he, Ee] = pe.pendingActionResult;
        if (We(Ee) && Ai(Ee.error) && Ee.error.status === 404) {
          (B = null),
            Te(F, {
              matches: pe.matches,
              loaderData: {},
              errors: { [he]: Ee.error },
            });
          return;
        }
      }
      (Y = pe.matches || Y),
        (z = pe.pendingActionResult),
        (U = Ji(F, _.submission)),
        (Q = !1),
        (W.active = !1),
        (K = or(e.history, K.url, K.signal));
    }
    let {
      shortCircuited: X,
      matches: ie,
      loaderData: ue,
      errors: Pe,
    } = await Tt(
      K,
      F,
      Y,
      W.active,
      U,
      _ && _.submission,
      _ && _.fetcherSubmission,
      _ && _.replace,
      _ && _.initialHydration === !0,
      Q,
      z,
    );
    X ||
      ((B = null),
      Te(F, me({ matches: ie || Y }, xa(z), { loaderData: ue, errors: Pe })));
  }
  async function Yt(C, F, _, N, U, Y) {
    Y === void 0 && (Y = {}), pt();
    let Q = ah(F, _);
    if ((Ce({ navigation: Q }, { flushSync: Y.flushSync === !0 }), U)) {
      let z = await tr(N, F.pathname, C.signal);
      if (z.type === "aborted") return { shortCircuited: !0 };
      if (z.type === "error") {
        let X = Vt(z.partialMatches).route.id;
        return {
          matches: z.partialMatches,
          pendingActionResult: [X, { type: de.error, error: z.error }],
        };
      } else if (z.matches) N = z.matches;
      else {
        let { notFoundMatches: X, error: ie, route: ue } = Rr(F.pathname);
        return {
          matches: X,
          pendingActionResult: [ue.id, { type: de.error, error: ie }],
        };
      }
    }
    let W,
      K = Hr(N, F);
    if (!K.route.action && !K.route.lazy)
      W = {
        type: de.error,
        error: Ie(405, {
          method: C.method,
          pathname: F.pathname,
          routeId: K.route.id,
        }),
      };
    else if (
      ((W = (await Et("action", v, C, [K], N, null))[K.route.id]),
      C.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Nt(W)) {
      let z;
      return (
        Y && Y.replace != null
          ? (z = Y.replace)
          : (z =
              fa(W.response.headers.get("Location"), new URL(C.url), l) ===
              v.location.pathname + v.location.search),
        await $e(C, W, !0, { submission: _, replace: z }),
        { shortCircuited: !0 }
      );
    }
    if (Ct(W)) throw Ie(400, { type: "defer-action" });
    if (We(W)) {
      let z = Vt(N, K.route.id);
      return (
        (Y && Y.replace) !== !0 && (w = _e.Push),
        { matches: N, pendingActionResult: [z.route.id, W] }
      );
    }
    return { matches: N, pendingActionResult: [K.route.id, W] };
  }
  async function Tt(C, F, _, N, U, Y, Q, W, K, z, X) {
    let ie = U || Ji(F, Y),
      ue = Y || Q || ga(ie),
      Pe = !H && (!h.v7_partialHydration || !K);
    if (N) {
      if (Pe) {
        let be = Zt(X);
        Ce(me({ navigation: ie }, be !== void 0 ? { actionData: be } : {}), {
          flushSync: z,
        });
      }
      let fe = await tr(_, F.pathname, C.signal);
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
        let { error: be, notFoundMatches: nr, route: Or } = Rr(F.pathname);
        return { matches: nr, loaderData: {}, errors: { [Or.id]: be } };
      }
    }
    let pe = a || o,
      [he, Ee] = ca(
        e.history,
        v,
        _,
        ue,
        F,
        h.v7_partialHydration && K === !0,
        h.v7_skipActionErrorRevalidation,
        q,
        G,
        Z,
        se,
        V,
        O,
        pe,
        l,
        X,
      );
    if (
      (Qt(
        (fe) =>
          !(_ && _.some((be) => be.route.id === fe)) ||
          (he && he.some((be) => be.route.id === fe)),
      ),
      (ee = ++re),
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
              errors: X && We(X[1]) ? { [X[0]]: X[1].error } : null,
            },
            xa(X),
            fe ? { fetchers: new Map(v.fetchers) } : {},
          ),
          { flushSync: z },
        ),
        { shortCircuited: !0 }
      );
    }
    if (Pe) {
      let fe = {};
      if (!N) {
        fe.navigation = ie;
        let be = Zt(X);
        be !== void 0 && (fe.actionData = be);
      }
      Ee.length > 0 && (fe.fetchers = Rt(Ee)), Ce(fe, { flushSync: z });
    }
    Ee.forEach((fe) => {
      at(fe.key), fe.controller && j.set(fe.key, fe.controller);
    });
    let rr = () => Ee.forEach((fe) => at(fe.key));
    B && B.signal.addEventListener("abort", rr);
    let { loaderResults: kr, fetcherResults: xt } = await dt(v, _, he, Ee, C);
    if (C.signal.aborted) return { shortCircuited: !0 };
    B && B.signal.removeEventListener("abort", rr),
      Ee.forEach((fe) => j.delete(fe.key));
    let ct = vn(kr);
    if (ct)
      return await $e(C, ct.result, !0, { replace: W }), { shortCircuited: !0 };
    if (((ct = vn(xt)), ct))
      return (
        O.add(ct.key),
        await $e(C, ct.result, !0, { replace: W }),
        { shortCircuited: !0 }
      );
    let { loaderData: $i, errors: Lr } = da(v, _, kr, X, Ee, xt, le);
    le.forEach((fe, be) => {
      fe.subscribe((nr) => {
        (nr || fe.done) && le.delete(be);
      });
    }),
      h.v7_partialHydration && K && v.errors && (Lr = me({}, v.errors, Lr));
    let kt = Sr(),
      mn = dn(ee),
      yn = kt || mn || Ee.length > 0;
    return me(
      { matches: _, loaderData: $i, errors: Lr },
      yn ? { fetchers: new Map(v.fetchers) } : {},
    );
  }
  function Zt(C) {
    if (C && !We(C[1])) return { [C[0]]: C[1].data };
    if (v.actionData)
      return Object.keys(v.actionData).length === 0 ? null : v.actionData;
  }
  function Rt(C) {
    return (
      C.forEach((F) => {
        let _ = v.fetchers.get(F.key),
          N = Vr(void 0, _ ? _.data : void 0);
        v.fetchers.set(F.key, N);
      }),
      new Map(v.fetchers)
    );
  }
  function qe(C, F, _, N) {
    if (n)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    at(C);
    let U = (N && N.flushSync) === !0,
      Y = a || o,
      Q = As(
        v.location,
        v.matches,
        l,
        h.v7_prependBasename,
        _,
        h.v7_relativeSplatPath,
        F,
        N == null ? void 0 : N.relative,
      ),
      W = ar(Y, Q, l),
      K = er(W, Y, Q);
    if ((K.active && K.matches && (W = K.matches), !W)) {
      Ke(C, F, Ie(404, { pathname: Q }), { flushSync: U });
      return;
    }
    let {
      path: z,
      submission: X,
      error: ie,
    } = oa(h.v7_normalizeFormMethod, !0, Q, N);
    if (ie) {
      Ke(C, F, ie, { flushSync: U });
      return;
    }
    let ue = Hr(W, z),
      Pe = (N && N.preventScrollReset) === !0;
    if (X && rt(X.formMethod)) {
      Ne(C, F, z, ue, W, K.active, U, Pe, X);
      return;
    }
    V.set(C, { routeId: F, path: z }), st(C, F, z, ue, W, K.active, U, Pe, X);
  }
  async function Ne(C, F, _, N, U, Y, Q, W, K) {
    pt(), V.delete(C);
    function z(De) {
      if (!De.route.action && !De.route.lazy) {
        let ir = Ie(405, { method: K.formMethod, pathname: _, routeId: F });
        return Ke(C, F, ir, { flushSync: Q }), !0;
      }
      return !1;
    }
    if (!Y && z(N)) return;
    let X = v.fetchers.get(C);
    ot(C, ch(K, X), { flushSync: Q });
    let ie = new AbortController(),
      ue = or(e.history, _, ie.signal, K);
    if (Y) {
      let De = await tr(U, new URL(ue.url).pathname, ue.signal, C);
      if (De.type === "aborted") return;
      if (De.type === "error") {
        Ke(C, F, De.error, { flushSync: Q });
        return;
      } else if (De.matches) {
        if (((U = De.matches), (N = Hr(U, _)), z(N))) return;
      } else {
        Ke(C, F, Ie(404, { pathname: _ }), { flushSync: Q });
        return;
      }
    }
    j.set(C, ie);
    let Pe = re,
      he = (await Et("action", v, ue, [N], U, C))[N.route.id];
    if (ue.signal.aborted) {
      j.get(C) === ie && j.delete(C);
      return;
    }
    if (h.v7_fetcherPersist && se.has(C)) {
      if (Nt(he) || We(he)) {
        ot(C, bt(void 0));
        return;
      }
    } else {
      if (Nt(he))
        if ((j.delete(C), ee > Pe)) {
          ot(C, bt(void 0));
          return;
        } else
          return (
            O.add(C),
            ot(C, Vr(K)),
            $e(ue, he, !1, { fetcherSubmission: K, preventScrollReset: W })
          );
      if (We(he)) {
        Ke(C, F, he.error);
        return;
      }
    }
    if (Ct(he)) throw Ie(400, { type: "defer-action" });
    let Ee = v.navigation.location || v.location,
      rr = or(e.history, Ee, ie.signal),
      kr = a || o,
      xt =
        v.navigation.state !== "idle"
          ? ar(kr, v.navigation.location, l)
          : v.matches;
    xe(xt, "Didn't find any matches after fetcher action");
    let ct = ++re;
    R.set(C, ct);
    let $i = Vr(K, he.data);
    v.fetchers.set(C, $i);
    let [Lr, kt] = ca(
      e.history,
      v,
      xt,
      K,
      Ee,
      !1,
      h.v7_skipActionErrorRevalidation,
      q,
      G,
      Z,
      se,
      V,
      O,
      kr,
      l,
      [N.route.id, he],
    );
    kt
      .filter((De) => De.key !== C)
      .forEach((De) => {
        let ir = De.key,
          Zo = v.fetchers.get(ir),
          cf = Vr(void 0, Zo ? Zo.data : void 0);
        v.fetchers.set(ir, cf),
          at(ir),
          De.controller && j.set(ir, De.controller);
      }),
      Ce({ fetchers: new Map(v.fetchers) });
    let mn = () => kt.forEach((De) => at(De.key));
    ie.signal.addEventListener("abort", mn);
    let { loaderResults: yn, fetcherResults: fe } = await dt(v, xt, Lr, kt, rr);
    if (ie.signal.aborted) return;
    ie.signal.removeEventListener("abort", mn),
      R.delete(C),
      j.delete(C),
      kt.forEach((De) => j.delete(De.key));
    let be = vn(yn);
    if (be) return $e(rr, be.result, !1, { preventScrollReset: W });
    if (((be = vn(fe)), be))
      return O.add(be.key), $e(rr, be.result, !1, { preventScrollReset: W });
    let { loaderData: nr, errors: Or } = da(v, xt, yn, void 0, kt, fe, le);
    if (v.fetchers.has(C)) {
      let De = bt(he.data);
      v.fetchers.set(C, De);
    }
    dn(ct),
      v.navigation.state === "loading" && ct > ee
        ? (xe(w, "Expected pending action"),
          B && B.abort(),
          Te(v.navigation.location, {
            matches: xt,
            loaderData: nr,
            errors: Or,
            fetchers: new Map(v.fetchers),
          }))
        : (Ce({
            errors: Or,
            loaderData: pa(v.loaderData, nr, xt, Or),
            fetchers: new Map(v.fetchers),
          }),
          (q = !1));
  }
  async function st(C, F, _, N, U, Y, Q, W, K) {
    let z = v.fetchers.get(C);
    ot(C, Vr(K, z ? z.data : void 0), { flushSync: Q });
    let X = new AbortController(),
      ie = or(e.history, _, X.signal);
    if (Y) {
      let he = await tr(U, new URL(ie.url).pathname, ie.signal, C);
      if (he.type === "aborted") return;
      if (he.type === "error") {
        Ke(C, F, he.error, { flushSync: Q });
        return;
      } else if (he.matches) (U = he.matches), (N = Hr(U, _));
      else {
        Ke(C, F, Ie(404, { pathname: _ }), { flushSync: Q });
        return;
      }
    }
    j.set(C, X);
    let ue = re,
      pe = (await Et("loader", v, ie, [N], U, C))[N.route.id];
    if (
      (Ct(pe) && (pe = (await no(pe, ie.signal, !0)) || pe),
      j.get(C) === X && j.delete(C),
      !ie.signal.aborted)
    ) {
      if (se.has(C)) {
        ot(C, bt(void 0));
        return;
      }
      if (Nt(pe))
        if (ee > ue) {
          ot(C, bt(void 0));
          return;
        } else {
          O.add(C), await $e(ie, pe, !1, { preventScrollReset: W });
          return;
        }
      if (We(pe)) {
        Ke(C, F, pe.error);
        return;
      }
      xe(!Ct(pe), "Unhandled fetcher deferred data"), ot(C, bt(pe.data));
    }
  }
  async function $e(C, F, _, N) {
    let {
      submission: U,
      fetcherSubmission: Y,
      preventScrollReset: Q,
      replace: W,
    } = N === void 0 ? {} : N;
    F.response.headers.has("X-Remix-Revalidate") && (q = !0);
    let K = F.response.headers.get("Location");
    xe(K, "Expected a Location header on the redirect Response"),
      (K = fa(K, new URL(C.url), l));
    let z = Yr(v.location, K, { _isRedirect: !0 });
    if (r) {
      let he = !1;
      if (F.response.headers.has("X-Remix-Reload-Document")) he = !0;
      else if (ro.test(K)) {
        const Ee = e.history.createURL(K);
        he = Ee.origin !== t.location.origin || _i(Ee.pathname, l) == null;
      }
      if (he) {
        W ? t.location.replace(K) : t.location.assign(K);
        return;
      }
    }
    B = null;
    let X =
        W === !0 || F.response.headers.has("X-Remix-Replace")
          ? _e.Replace
          : _e.Push,
      { formMethod: ie, formAction: ue, formEncType: Pe } = v.navigation;
    !U && !Y && ie && ue && Pe && (U = ga(v.navigation));
    let pe = U || Y;
    if (zf.has(F.response.status) && pe && rt(pe.formMethod))
      await ze(X, z, {
        submission: me({}, pe, { formAction: K }),
        preventScrollReset: Q || P,
        enableViewTransition: _ ? S : void 0,
      });
    else {
      let he = Ji(z, U);
      await ze(X, z, {
        overrideNavigation: he,
        fetcherSubmission: Y,
        preventScrollReset: Q || P,
        enableViewTransition: _ ? S : void 0,
      });
    }
  }
  async function Et(C, F, _, N, U, Y) {
    let Q,
      W = {};
    try {
      Q = await Yf(c, C, F, _, N, U, Y, s, i);
    } catch (K) {
      return (
        N.forEach((z) => {
          W[z.route.id] = { type: de.error, error: K };
        }),
        W
      );
    }
    for (let [K, z] of Object.entries(Q))
      if (rh(z)) {
        let X = z.result;
        W[K] = {
          type: de.redirect,
          response: Qf(X, _, K, U, l, h.v7_relativeSplatPath),
        };
      } else W[K] = await Jf(z);
    return W;
  }
  async function dt(C, F, _, N, U) {
    let Y = C.matches,
      Q = Et("loader", C, U, _, F, null),
      W = Promise.all(
        N.map(async (X) => {
          if (X.matches && X.match && X.controller) {
            let ue = (
              await Et(
                "loader",
                C,
                or(e.history, X.path, X.controller.signal),
                [X.match],
                X.matches,
                X.key,
              )
            )[X.match.route.id];
            return { [X.key]: ue };
          } else
            return Promise.resolve({
              [X.key]: { type: de.error, error: Ie(404, { pathname: X.path }) },
            });
        }),
      ),
      K = await Q,
      z = (await W).reduce((X, ie) => Object.assign(X, ie), {});
    return (
      await Promise.all([sh(F, K, U.signal, Y, C.loaderData), oh(F, z, N)]),
      { loaderResults: K, fetcherResults: z }
    );
  }
  function pt() {
    (q = !0),
      G.push(...Qt()),
      V.forEach((C, F) => {
        j.has(F) && Z.add(F), at(F);
      });
  }
  function ot(C, F, _) {
    _ === void 0 && (_ = {}),
      v.fetchers.set(C, F),
      Ce(
        { fetchers: new Map(v.fetchers) },
        { flushSync: (_ && _.flushSync) === !0 },
      );
  }
  function Ke(C, F, _, N) {
    N === void 0 && (N = {});
    let U = Vt(v.matches, F);
    et(C),
      Ce(
        { errors: { [U.route.id]: _ }, fetchers: new Map(v.fetchers) },
        { flushSync: (N && N.flushSync) === !0 },
      );
  }
  function wr(C) {
    return (
      M.set(C, (M.get(C) || 0) + 1),
      se.has(C) && se.delete(C),
      v.fetchers.get(C) || qf
    );
  }
  function et(C) {
    let F = v.fetchers.get(C);
    j.has(C) && !(F && F.state === "loading" && R.has(C)) && at(C),
      V.delete(C),
      R.delete(C),
      O.delete(C),
      h.v7_fetcherPersist && se.delete(C),
      Z.delete(C),
      v.fetchers.delete(C);
  }
  function Pt(C) {
    let F = (M.get(C) || 0) - 1;
    F <= 0
      ? (M.delete(C), se.add(C), h.v7_fetcherPersist || et(C))
      : M.set(C, F),
      Ce({ fetchers: new Map(v.fetchers) });
  }
  function at(C) {
    let F = j.get(C);
    F && (F.abort(), j.delete(C));
  }
  function Fr(C) {
    for (let F of C) {
      let _ = wr(F),
        N = bt(_.data);
      v.fetchers.set(F, N);
    }
  }
  function Sr() {
    let C = [],
      F = !1;
    for (let _ of O) {
      let N = v.fetchers.get(_);
      xe(N, "Expected fetcher: " + _),
        N.state === "loading" && (O.delete(_), C.push(_), (F = !0));
    }
    return Fr(C), F;
  }
  function dn(C) {
    let F = [];
    for (let [_, N] of R)
      if (N < C) {
        let U = v.fetchers.get(_);
        xe(U, "Expected fetcher: " + _),
          U.state === "loading" && (at(_), R.delete(_), F.push(_));
      }
    return Fr(F), F.length > 0;
  }
  function ji(C, F) {
    let _ = v.blockers.get(C) || Mr;
    return ve.get(C) !== F && ve.set(C, F), _;
  }
  function _r(C) {
    v.blockers.delete(C), ve.delete(C);
  }
  function Jt(C, F) {
    let _ = v.blockers.get(C) || Mr;
    xe(
      (_.state === "unblocked" && F.state === "blocked") ||
        (_.state === "blocked" && F.state === "blocked") ||
        (_.state === "blocked" && F.state === "proceeding") ||
        (_.state === "blocked" && F.state === "unblocked") ||
        (_.state === "proceeding" && F.state === "unblocked"),
      "Invalid blocker state transition: " + _.state + " -> " + F.state,
    );
    let N = new Map(v.blockers);
    N.set(C, F), Ce({ blockers: N });
  }
  function Tr(C) {
    let { currentLocation: F, nextLocation: _, historyAction: N } = C;
    if (ve.size === 0) return;
    ve.size > 1 && xr(!1, "A router only supports one blocker at a time");
    let U = Array.from(ve.entries()),
      [Y, Q] = U[U.length - 1],
      W = v.blockers.get(Y);
    if (
      !(W && W.state === "proceeding") &&
      Q({ currentLocation: F, nextLocation: _, historyAction: N })
    )
      return Y;
  }
  function Rr(C) {
    let F = Ie(404, { pathname: C }),
      _ = a || o,
      { matches: N, route: U } = ma(_);
    return Qt(), { notFoundMatches: N, route: U, error: F };
  }
  function Qt(C) {
    let F = [];
    return (
      le.forEach((_, N) => {
        (!C || C(N)) && (_.cancel(), F.push(N), le.delete(N));
      }),
      F
    );
  }
  function zi(C, F, _) {
    if (((p = C), (x = F), (m = _ || null), !b && v.navigation === Zi)) {
      b = !0;
      let N = Pr(v.location, v.matches);
      N != null && Ce({ restoreScrollPosition: N });
    }
    return () => {
      (p = null), (x = null), (m = null);
    };
  }
  function pn(C, F) {
    return (
      (m &&
        m(
          C,
          F.map((N) => vf(N, v.loaderData)),
        )) ||
      C.key
    );
  }
  function qi(C, F) {
    if (p && x) {
      let _ = pn(C, F);
      p[_] = x();
    }
  }
  function Pr(C, F) {
    if (p) {
      let _ = pn(C, F),
        N = p[_];
      if (typeof N == "number") return N;
    }
    return null;
  }
  function er(C, F, _) {
    if (u)
      if (C) {
        if (Object.keys(C[0].params).length > 0)
          return { active: !0, matches: Fn(F, _, l, !0) };
      } else return { active: !0, matches: Fn(F, _, l, !0) || [] };
    return { active: !1, matches: null };
  }
  async function tr(C, F, _, N) {
    if (!u) return { type: "success", matches: C };
    let U = C;
    for (;;) {
      let Y = a == null,
        Q = a || o,
        W = s;
      try {
        await u({
          signal: _,
          path: F,
          matches: U,
          fetcherKey: N,
          patch: (X, ie) => {
            _.aborted || ua(X, ie, Q, W, i);
          },
        });
      } catch (X) {
        return { type: "error", error: X, partialMatches: U };
      } finally {
        Y && !_.aborted && (o = [...o]);
      }
      if (_.aborted) return { type: "aborted" };
      let K = ar(Q, F, l);
      if (K) return { type: "success", matches: K };
      let z = Fn(Q, F, l, !0);
      if (
        !z ||
        (U.length === z.length &&
          U.every((X, ie) => X.route.id === z[ie].route.id))
      )
        return { type: "success", matches: null };
      U = z;
    }
  }
  function xn(C) {
    (s = {}), (a = bi(C, i, void 0, s));
  }
  function Wi(C, F) {
    let _ = a == null;
    ua(C, F, a || o, s, i), _ && ((o = [...o]), Ce({}));
  }
  return (
    (D = {
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
      subscribe: Dr,
      enableScrollRestoration: zi,
      navigate: Le,
      fetch: qe,
      revalidate: Gt,
      createHref: (C) => e.history.createHref(C),
      encodeLocation: (C) => e.history.encodeLocation(C),
      getFetcher: wr,
      deleteFetcher: Pt,
      dispose: vt,
      getBlocker: ji,
      deleteBlocker: _r,
      patchRoutes: Wi,
      _internalFetchControllers: j,
      _internalActiveDeferreds: le,
      _internalSetRoutes: xn,
    }),
    D
  );
}
function $f(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function As(e, t, r, n, i, s, o, a) {
  let l, c;
  if (o) {
    l = [];
    for (let h of t)
      if ((l.push(h), h.route.id === o)) {
        c = h;
        break;
      }
  } else (l = t), (c = t[t.length - 1]);
  let u = Of(i || ".", Lf(l, s), _i(e.pathname, r) || e.pathname, a === "path");
  if (
    (i == null && ((u.search = e.search), (u.hash = e.hash)),
    (i == null || i === "" || i === ".") && c)
  ) {
    let h = io(u.search);
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
function oa(e, t, r, n) {
  if (!n || !$f(n)) return { path: r };
  if (n.formMethod && !ih(n.formMethod))
    return { path: r, error: Ie(405, { method: n.formMethod }) };
  let i = () => ({ path: r, error: Ie(400, { type: "invalid-body" }) }),
    s = n.formMethod || "get",
    o = e ? s.toUpperCase() : s.toLowerCase(),
    a = jc(r);
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
  if (n.formData) (l = Bs(n.formData)), (c = n.formData);
  else if (n.body instanceof FormData) (l = Bs(n.body)), (c = n.body);
  else if (n.body instanceof URLSearchParams) (l = n.body), (c = ha(l));
  else if (n.body == null) (l = new URLSearchParams()), (c = new FormData());
  else
    try {
      (l = new URLSearchParams(n.body)), (c = ha(l));
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
  let h = $t(r);
  return (
    t && h.search && io(h.search) && l.append("index", ""),
    (h.search = "?" + l),
    { path: nn(h), submission: u }
  );
}
function aa(e, t, r) {
  r === void 0 && (r = !1);
  let n = e.findIndex((i) => i.route.id === t);
  return n >= 0 ? e.slice(0, r ? n + 1 : n) : e;
}
function ca(e, t, r, n, i, s, o, a, l, c, u, h, f, d, p, m) {
  let x = m ? (We(m[1]) ? m[1].error : m[1].data) : void 0,
    b = e.createURL(t.location),
    y = e.createURL(i),
    g = r;
  s && t.errors
    ? (g = aa(r, Object.keys(t.errors)[0], !0))
    : m && We(m[1]) && (g = aa(r, m[0]));
  let E = m ? m[1].statusCode : void 0,
    A = o && E && E >= 400,
    D = g.filter((w, P) => {
      let { route: B } = w;
      if (B.lazy) return !0;
      if (B.loader == null) return !1;
      if (s) return Cs(B, t.loaderData, t.errors);
      if (Kf(t.loaderData, t.matches[P], w) || l.some((L) => L === w.route.id))
        return !0;
      let S = t.matches[P],
        k = w;
      return la(
        w,
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
            defaultShouldRevalidate: A
              ? !1
              : a ||
                b.pathname + b.search === y.pathname + y.search ||
                b.search !== y.search ||
                Uc(S, k),
          },
        ),
      );
    }),
    v = [];
  return (
    h.forEach((w, P) => {
      if (s || !r.some((H) => H.route.id === w.routeId) || u.has(P)) return;
      let B = ar(d, w.path, p);
      if (!B) {
        v.push({
          key: P,
          routeId: w.routeId,
          path: w.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let S = t.fetchers.get(P),
        k = Hr(B, w.path),
        L = !1;
      f.has(P)
        ? (L = !1)
        : c.has(P)
          ? (c.delete(P), (L = !0))
          : S && S.state !== "idle" && S.data === void 0
            ? (L = a)
            : (L = la(
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
                    defaultShouldRevalidate: A ? !1 : a,
                  },
                ),
              )),
        L &&
          v.push({
            key: P,
            routeId: w.routeId,
            path: w.path,
            matches: B,
            match: k,
            controller: new AbortController(),
          });
    }),
    [D, v]
  );
}
function Cs(e, t, r) {
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
function Kf(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    i = e[r.route.id] === void 0;
  return n || i;
}
function Uc(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r != null && r.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function la(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == "boolean") return r;
  }
  return t.defaultShouldRevalidate;
}
function ua(e, t, r, n, i) {
  var s;
  let o;
  if (e) {
    let c = n[e];
    xe(c, "No route found to patch children into: routeId = " + e),
      c.children || (c.children = []),
      (o = c.children);
  } else o = r;
  let a = t.filter((c) => !o.some((u) => Hc(c, u))),
    l = bi(
      a,
      i,
      [e || "_", "patch", String(((s = o) == null ? void 0 : s.length) || "0")],
      n,
    );
  o.push(...l);
}
function Hc(e, t) {
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
            return (i = t.children) == null ? void 0 : i.some((s) => Hc(r, s));
          })
      : !1;
}
async function Xf(e, t, r) {
  if (!e.lazy) return;
  let n = await e.lazy();
  if (!e.lazy) return;
  let i = r[e.id];
  xe(i, "No route found in manifest");
  let s = {};
  for (let o in n) {
    let l = i[o] !== void 0 && o !== "hasErrorBoundary";
    xr(
      !l,
      'Route "' +
        i.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.'),
    ),
      !l && !yf.has(o) && (s[o] = n[o]);
  }
  Object.assign(i, s), Object.assign(i, me({}, t(i), { lazy: void 0 }));
}
async function Gf(e) {
  let { matches: t } = e,
    r = t.filter((i) => i.shouldLoad);
  return (await Promise.all(r.map((i) => i.resolve()))).reduce(
    (i, s, o) => Object.assign(i, { [r[o].route.id]: s }),
    {},
  );
}
async function Yf(e, t, r, n, i, s, o, a, l, c) {
  let u = s.map((d) => (d.route.lazy ? Xf(d.route, l, a) : void 0)),
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
            ? Zf(t, n, d, m, y, c)
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
async function Zf(e, t, r, n, i, s) {
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
async function Jf(e) {
  let { result: t, type: r } = e;
  if (zc(t)) {
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
          error: new bs(t.status, t.statusText, h),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: de.data, data: h, statusCode: t.status, headers: t.headers };
  }
  if (r === de.error) {
    if (ya(t)) {
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
        error: new bs(
          ((n = t.init) == null ? void 0 : n.status) || 500,
          void 0,
          t.data,
        ),
        statusCode: Ai(t) ? t.status : void 0,
        headers:
          (i = t.init) != null && i.headers
            ? new Headers(t.init.headers)
            : void 0,
      };
    }
    return { type: de.error, error: t, statusCode: Ai(t) ? t.status : void 0 };
  }
  if (nh(t)) {
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
  if (ya(t)) {
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
function Qf(e, t, r, n, i, s) {
  let o = e.headers.get("Location");
  if (
    (xe(
      o,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !ro.test(o))
  ) {
    let a = n.slice(0, n.findIndex((l) => l.route.id === r) + 1);
    (o = As(new URL(t.url), a, i, !0, o, s)), e.headers.set("Location", o);
  }
  return e;
}
function fa(e, t, r) {
  if (ro.test(e)) {
    let n = e,
      i = n.startsWith("//") ? new URL(t.protocol + n) : new URL(n),
      s = _i(i.pathname, r) != null;
    if (i.origin === t.origin && s) return i.pathname + i.search + i.hash;
  }
  return e;
}
function or(e, t, r, n) {
  let i = e.createURL(jc(t)).toString(),
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
            ? (s.body = Bs(n.formData))
            : (s.body = n.formData);
  }
  return new Request(i, s);
}
function Bs(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    t.append(r, typeof n == "string" ? n : n.name);
  return t;
}
function ha(e) {
  let t = new FormData();
  for (let [r, n] of e.entries()) t.append(r, n);
  return t;
}
function eh(e, t, r, n, i) {
  let s = {},
    o = null,
    a,
    l = !1,
    c = {},
    u = r && We(r[1]) ? r[1].error : void 0;
  return (
    e.forEach((h) => {
      if (!(h.route.id in t)) return;
      let f = h.route.id,
        d = t[f];
      if (
        (xe(!Nt(d), "Cannot handle redirect results in processLoaderData"),
        We(d))
      ) {
        let p = d.error;
        u !== void 0 && ((p = u), (u = void 0)), (o = o || {});
        {
          let m = Vt(e, f);
          o[m.route.id] == null && (o[m.route.id] = p);
        }
        (s[f] = void 0),
          l || ((l = !0), (a = Ai(d.error) ? d.error.status : 500)),
          d.headers && (c[f] = d.headers);
      } else
        Ct(d)
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
function da(e, t, r, n, i, s, o) {
  let { loaderData: a, errors: l } = eh(t, r, n, o);
  return (
    i.forEach((c) => {
      let { key: u, match: h, controller: f } = c,
        d = s[u];
      if (
        (xe(d, "Did not find corresponding fetcher result"),
        !(f && f.signal.aborted))
      )
        if (We(d)) {
          let p = Vt(e.matches, h == null ? void 0 : h.route.id);
          (l && l[p.route.id]) || (l = me({}, l, { [p.route.id]: d.error })),
            e.fetchers.delete(u);
        } else if (Nt(d)) xe(!1, "Unhandled fetcher revalidation redirect");
        else if (Ct(d)) xe(!1, "Unhandled fetcher deferred data");
        else {
          let p = bt(d.data);
          e.fetchers.set(u, p);
        }
    }),
    { loaderData: a, errors: l }
  );
}
function pa(e, t, r, n) {
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
function xa(e) {
  return e
    ? We(e[1])
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
function ma(e) {
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
    new bs(e || 500, a, new Error(l), !0)
  );
}
function vn(e) {
  let t = Object.entries(e);
  for (let r = t.length - 1; r >= 0; r--) {
    let [n, i] = t[r];
    if (Nt(i)) return { key: n, result: i };
  }
}
function jc(e) {
  let t = typeof e == "string" ? $t(e) : e;
  return nn(me({}, t, { hash: "" }));
}
function th(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function rh(e) {
  return zc(e.result) && jf.has(e.result.status);
}
function Ct(e) {
  return e.type === de.deferred;
}
function We(e) {
  return e.type === de.error;
}
function Nt(e) {
  return (e && e.type) === de.redirect;
}
function ya(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function nh(e) {
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
function zc(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body != "undefined"
  );
}
function ih(e) {
  return Hf.has(e.toLowerCase());
}
function rt(e) {
  return If.has(e.toLowerCase());
}
async function sh(e, t, r, n, i) {
  let s = Object.entries(t);
  for (let o = 0; o < s.length; o++) {
    let [a, l] = s[o],
      c = e.find((f) => (f == null ? void 0 : f.route.id) === a);
    if (!c) continue;
    let u = n.find((f) => f.route.id === c.route.id),
      h = u != null && !Uc(u, c) && (i && i[c.route.id]) !== void 0;
    Ct(l) &&
      h &&
      (await no(l, r, !1).then((f) => {
        f && (t[a] = f);
      }));
  }
}
async function oh(e, t, r) {
  for (let n = 0; n < r.length; n++) {
    let { key: i, routeId: s, controller: o } = r[n],
      a = t[i];
    e.find((c) => (c == null ? void 0 : c.route.id) === s) &&
      Ct(a) &&
      (xe(
        o,
        "Expected an AbortController for revalidating fetcher deferred result",
      ),
      await no(a, o.signal, !0).then((c) => {
        c && (t[i] = c);
      }));
  }
}
async function no(e, t, r) {
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
function io(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Hr(e, t) {
  let r = typeof t == "string" ? $t(t).search : t.search;
  if (e[e.length - 1].route.index && io(r || "")) return e[e.length - 1];
  let n = Vc(e);
  return n[n.length - 1];
}
function ga(e) {
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
function Ji(e, t) {
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
function ah(e, t) {
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
function ch(e, t) {
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
function lh(e, t) {
  try {
    let r = e.sessionStorage.getItem(Ic);
    if (r) {
      let n = JSON.parse(r);
      for (let [i, s] of Object.entries(n || {}))
        s && Array.isArray(s) && t.set(i, new Set(s || []));
    }
  } catch (r) {}
}
function uh(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [n, i] of t) r[n] = [...i];
    try {
      e.sessionStorage.setItem(Ic, JSON.stringify(r));
    } catch (n) {
      xr(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          n +
          ").",
      );
    }
  }
}
var Sn = { exports: {} };
function fh(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
  );
}
var _n = { exports: {} };
const hh = {},
  dh = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: hh },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ph = pf(dh);
var xh = _n.exports,
  va;
function ce() {
  return (
    va ||
      ((va = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n();
        })(xh, function () {
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
                !s && typeof fh == "function")
              )
                try {
                  s = ph;
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
                      A = this.sigBytes,
                      D = y.sigBytes;
                    if ((this.clamp(), A % 4))
                      for (var v = 0; v < D; v++) {
                        var w = (E[v >>> 2] >>> (24 - (v % 4) * 8)) & 255;
                        g[(A + v) >>> 2] |= w << (24 - ((A + v) % 4) * 8);
                      }
                    else
                      for (var P = 0; P < D; P += 4)
                        g[(A + P) >>> 2] = E[P >>> 2];
                    return (this.sigBytes += D), this;
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
                      var g = y.words, E = y.sigBytes, A = [], D = 0;
                      D < E;
                      D++
                    ) {
                      var v = (g[D >>> 2] >>> (24 - (D % 4) * 8)) & 255;
                      A.push((v >>> 4).toString(16)),
                        A.push((v & 15).toString(16));
                    }
                    return A.join("");
                  },
                  parse: function (y) {
                    for (var g = y.length, E = [], A = 0; A < g; A += 2)
                      E[A >>> 3] |=
                        parseInt(y.substr(A, 2), 16) << (24 - (A % 8) * 4);
                    return new h.init(E, g / 2);
                  },
                }),
                p = (f.Latin1 = {
                  stringify: function (y) {
                    for (
                      var g = y.words, E = y.sigBytes, A = [], D = 0;
                      D < E;
                      D++
                    ) {
                      var v = (g[D >>> 2] >>> (24 - (D % 4) * 8)) & 255;
                      A.push(String.fromCharCode(v));
                    }
                    return A.join("");
                  },
                  parse: function (y) {
                    for (var g = y.length, E = [], A = 0; A < g; A++)
                      E[A >>> 2] |=
                        (y.charCodeAt(A) & 255) << (24 - (A % 4) * 8);
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
                      A = E.words,
                      D = E.sigBytes,
                      v = this.blockSize,
                      w = v * 4,
                      P = D / w;
                    y
                      ? (P = n.ceil(P))
                      : (P = n.max((P | 0) - this._minBufferSize, 0));
                    var B = P * v,
                      S = n.min(B * 4, D);
                    if (B) {
                      for (var k = 0; k < B; k += v) this._doProcessBlock(A, k);
                      (g = A.splice(0, B)), (E.sigBytes -= S);
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
  mh = Tn.exports,
  Ea;
function Ti() {
  return (
    Ea ||
      ((Ea = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(ce());
        })(mh, function (r) {
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
  yh = Rn.exports,
  ba;
function gh() {
  return (
    ba ||
      ((ba = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(ce());
        })(yh, function (r) {
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
  vh = Pn.exports,
  Aa;
function Eh() {
  return (
    Aa ||
      ((Aa = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(ce());
        })(vh, function (r) {
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
  bh = kn.exports,
  Ca;
function Kt() {
  return (
    Ca ||
      ((Ca = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(ce());
        })(bh, function (r) {
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
  Ah = Ln.exports,
  Ba;
function Ch() {
  return (
    Ba ||
      ((Ba = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(ce());
        })(Ah, function (r) {
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
  Bh = On.exports,
  Da;
function Xt() {
  return (
    Da ||
      ((Da = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(ce());
        })(Bh, function (r) {
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
                    A = m[x + 0],
                    D = m[x + 1],
                    v = m[x + 2],
                    w = m[x + 3],
                    P = m[x + 4],
                    B = m[x + 5],
                    S = m[x + 6],
                    k = m[x + 7],
                    L = m[x + 8],
                    H = m[x + 9],
                    q = m[x + 10],
                    G = m[x + 11],
                    Z = m[x + 12],
                    j = m[x + 13],
                    re = m[x + 14],
                    ee = m[x + 15],
                    R = E[0],
                    O = E[1],
                    V = E[2],
                    M = E[3];
                  (R = h(R, O, V, M, A, 7, c[0])),
                    (M = h(M, R, O, V, D, 12, c[1])),
                    (V = h(V, M, R, O, v, 17, c[2])),
                    (O = h(O, V, M, R, w, 22, c[3])),
                    (R = h(R, O, V, M, P, 7, c[4])),
                    (M = h(M, R, O, V, B, 12, c[5])),
                    (V = h(V, M, R, O, S, 17, c[6])),
                    (O = h(O, V, M, R, k, 22, c[7])),
                    (R = h(R, O, V, M, L, 7, c[8])),
                    (M = h(M, R, O, V, H, 12, c[9])),
                    (V = h(V, M, R, O, q, 17, c[10])),
                    (O = h(O, V, M, R, G, 22, c[11])),
                    (R = h(R, O, V, M, Z, 7, c[12])),
                    (M = h(M, R, O, V, j, 12, c[13])),
                    (V = h(V, M, R, O, re, 17, c[14])),
                    (O = h(O, V, M, R, ee, 22, c[15])),
                    (R = f(R, O, V, M, D, 5, c[16])),
                    (M = f(M, R, O, V, S, 9, c[17])),
                    (V = f(V, M, R, O, G, 14, c[18])),
                    (O = f(O, V, M, R, A, 20, c[19])),
                    (R = f(R, O, V, M, B, 5, c[20])),
                    (M = f(M, R, O, V, q, 9, c[21])),
                    (V = f(V, M, R, O, ee, 14, c[22])),
                    (O = f(O, V, M, R, P, 20, c[23])),
                    (R = f(R, O, V, M, H, 5, c[24])),
                    (M = f(M, R, O, V, re, 9, c[25])),
                    (V = f(V, M, R, O, w, 14, c[26])),
                    (O = f(O, V, M, R, L, 20, c[27])),
                    (R = f(R, O, V, M, j, 5, c[28])),
                    (M = f(M, R, O, V, v, 9, c[29])),
                    (V = f(V, M, R, O, k, 14, c[30])),
                    (O = f(O, V, M, R, Z, 20, c[31])),
                    (R = d(R, O, V, M, B, 4, c[32])),
                    (M = d(M, R, O, V, L, 11, c[33])),
                    (V = d(V, M, R, O, G, 16, c[34])),
                    (O = d(O, V, M, R, re, 23, c[35])),
                    (R = d(R, O, V, M, D, 4, c[36])),
                    (M = d(M, R, O, V, P, 11, c[37])),
                    (V = d(V, M, R, O, k, 16, c[38])),
                    (O = d(O, V, M, R, q, 23, c[39])),
                    (R = d(R, O, V, M, j, 4, c[40])),
                    (M = d(M, R, O, V, A, 11, c[41])),
                    (V = d(V, M, R, O, w, 16, c[42])),
                    (O = d(O, V, M, R, S, 23, c[43])),
                    (R = d(R, O, V, M, H, 4, c[44])),
                    (M = d(M, R, O, V, Z, 11, c[45])),
                    (V = d(V, M, R, O, ee, 16, c[46])),
                    (O = d(O, V, M, R, v, 23, c[47])),
                    (R = p(R, O, V, M, A, 6, c[48])),
                    (M = p(M, R, O, V, k, 10, c[49])),
                    (V = p(V, M, R, O, re, 15, c[50])),
                    (O = p(O, V, M, R, B, 21, c[51])),
                    (R = p(R, O, V, M, Z, 6, c[52])),
                    (M = p(M, R, O, V, w, 10, c[53])),
                    (V = p(V, M, R, O, q, 15, c[54])),
                    (O = p(O, V, M, R, D, 21, c[55])),
                    (R = p(R, O, V, M, L, 6, c[56])),
                    (M = p(M, R, O, V, ee, 10, c[57])),
                    (V = p(V, M, R, O, S, 15, c[58])),
                    (O = p(O, V, M, R, j, 21, c[59])),
                    (R = p(R, O, V, M, P, 6, c[60])),
                    (M = p(M, R, O, V, G, 10, c[61])),
                    (V = p(V, M, R, O, v, 15, c[62])),
                    (O = p(O, V, M, R, H, 21, c[63])),
                    (E[0] = (E[0] + R) | 0),
                    (E[1] = (E[1] + O) | 0),
                    (E[2] = (E[2] + V) | 0),
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
                  for (var A = this._hash, D = A.words, v = 0; v < 4; v++) {
                    var w = D[v];
                    D[v] =
                      (((w << 8) | (w >>> 24)) & 16711935) |
                      (((w << 24) | (w >>> 8)) & 4278255360);
                  }
                  return A;
                },
                clone: function () {
                  var m = a.clone.call(this);
                  return (m._hash = this._hash.clone()), m;
                },
              }));
              function h(m, x, b, y, g, E, A) {
                var D = m + ((x & b) | (~x & y)) + g + A;
                return ((D << E) | (D >>> (32 - E))) + x;
              }
              function f(m, x, b, y, g, E, A) {
                var D = m + ((x & y) | (b & ~y)) + g + A;
                return ((D << E) | (D >>> (32 - E))) + x;
              }
              function d(m, x, b, y, g, E, A) {
                var D = m + (x ^ b ^ y) + g + A;
                return ((D << E) | (D >>> (32 - E))) + x;
              }
              function p(m, x, b, y, g, E, A) {
                var D = m + (b ^ (x | ~y)) + g + A;
                return ((D << E) | (D >>> (32 - E))) + x;
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
  Dh = Mn.exports,
  wa;
function qc() {
  return (
    wa ||
      ((wa = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(ce());
        })(Dh, function (r) {
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
  wh = Vn.exports,
  Fa;
function so() {
  return (
    Fa ||
      ((Fa = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(ce());
        })(wh, function (r) {
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
                        A = m[5],
                        D = m[6],
                        v = m[7],
                        w = 0;
                      w < 64;
                      w++
                    ) {
                      if (w < 16) h[w] = d[p + w] | 0;
                      else {
                        var P = h[w - 15],
                          B =
                            ((P << 25) | (P >>> 7)) ^
                            ((P << 14) | (P >>> 18)) ^
                            (P >>> 3),
                          S = h[w - 2],
                          k =
                            ((S << 15) | (S >>> 17)) ^
                            ((S << 13) | (S >>> 19)) ^
                            (S >>> 10);
                        h[w] = B + h[w - 7] + k + h[w - 16];
                      }
                      var L = (E & A) ^ (~E & D),
                        H = (x & b) ^ (x & y) ^ (b & y),
                        q =
                          ((x << 30) | (x >>> 2)) ^
                          ((x << 19) | (x >>> 13)) ^
                          ((x << 10) | (x >>> 22)),
                        G =
                          ((E << 26) | (E >>> 6)) ^
                          ((E << 21) | (E >>> 11)) ^
                          ((E << 7) | (E >>> 25)),
                        Z = v + G + L + u[w] + h[w],
                        j = q + H;
                      (v = D),
                        (D = A),
                        (A = E),
                        (E = (g + Z) | 0),
                        (g = y),
                        (y = b),
                        (b = x),
                        (x = (Z + j) | 0);
                    }
                    (m[0] = (m[0] + x) | 0),
                      (m[1] = (m[1] + b) | 0),
                      (m[2] = (m[2] + y) | 0),
                      (m[3] = (m[3] + g) | 0),
                      (m[4] = (m[4] + E) | 0),
                      (m[5] = (m[5] + A) | 0),
                      (m[6] = (m[6] + D) | 0),
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
  Fh = Nn.exports,
  Sa;
function Sh() {
  return (
    Sa ||
      ((Sa = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), so());
        })(Fh, function (r) {
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
  _h = In.exports,
  _a;
function Wc() {
  return (
    _a ||
      ((_a = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Ti());
        })(_h, function (r) {
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
                      A = x[4],
                      D = x[5],
                      v = x[6],
                      w = x[7],
                      P = b.high,
                      B = b.low,
                      S = y.high,
                      k = y.low,
                      L = g.high,
                      H = g.low,
                      q = E.high,
                      G = E.low,
                      Z = A.high,
                      j = A.low,
                      re = D.high,
                      ee = D.low,
                      R = v.high,
                      O = v.low,
                      V = w.high,
                      M = w.low,
                      se = P,
                      le = B,
                      ve = S,
                      te = k,
                      _t = L,
                      vt = H,
                      Dr = q,
                      Ce = G,
                      Te = Z,
                      Le = j,
                      Gt = re,
                      ze = ee,
                      Yt = R,
                      Tt = O,
                      Zt = V,
                      Rt = M,
                      qe = 0;
                    qe < 80;
                    qe++
                  ) {
                    var Ne,
                      st,
                      $e = f[qe];
                    if (qe < 16)
                      (st = $e.high = p[m + qe * 2] | 0),
                        (Ne = $e.low = p[m + qe * 2 + 1] | 0);
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
                        wr = f[qe - 2],
                        et = wr.high,
                        Pt = wr.low,
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
                        ($e.high = st),
                        ($e.low = Ne);
                    }
                    var Rr = (Te & Gt) ^ (~Te & Yt),
                      Qt = (Le & ze) ^ (~Le & Tt),
                      zi = (se & ve) ^ (se & _t) ^ (ve & _t),
                      pn = (le & te) ^ (le & vt) ^ (te & vt),
                      qi =
                        ((se >>> 28) | (le << 4)) ^
                        ((se << 30) | (le >>> 2)) ^
                        ((se << 25) | (le >>> 7)),
                      Pr =
                        ((le >>> 28) | (se << 4)) ^
                        ((le << 30) | (se >>> 2)) ^
                        ((le << 25) | (se >>> 7)),
                      er =
                        ((Te >>> 14) | (Le << 18)) ^
                        ((Te >>> 18) | (Le << 14)) ^
                        ((Te << 23) | (Le >>> 9)),
                      tr =
                        ((Le >>> 14) | (Te << 18)) ^
                        ((Le >>> 18) | (Te << 14)) ^
                        ((Le << 23) | (Te >>> 9)),
                      xn = h[qe],
                      Wi = xn.high,
                      C = xn.low,
                      F = Rt + tr,
                      _ = Zt + er + (F >>> 0 < Rt >>> 0 ? 1 : 0),
                      F = F + Qt,
                      _ = _ + Rr + (F >>> 0 < Qt >>> 0 ? 1 : 0),
                      F = F + C,
                      _ = _ + Wi + (F >>> 0 < C >>> 0 ? 1 : 0),
                      F = F + Ne,
                      _ = _ + st + (F >>> 0 < Ne >>> 0 ? 1 : 0),
                      N = Pr + pn,
                      U = qi + zi + (N >>> 0 < Pr >>> 0 ? 1 : 0);
                    (Zt = Yt),
                      (Rt = Tt),
                      (Yt = Gt),
                      (Tt = ze),
                      (Gt = Te),
                      (ze = Le),
                      (Le = (Ce + F) | 0),
                      (Te = (Dr + _ + (Le >>> 0 < Ce >>> 0 ? 1 : 0)) | 0),
                      (Dr = _t),
                      (Ce = vt),
                      (_t = ve),
                      (vt = te),
                      (ve = se),
                      (te = le),
                      (le = (F + N) | 0),
                      (se = (_ + U + (le >>> 0 < F >>> 0 ? 1 : 0)) | 0);
                  }
                  (B = b.low = B + le),
                    (b.high = P + se + (B >>> 0 < le >>> 0 ? 1 : 0)),
                    (k = y.low = k + te),
                    (y.high = S + ve + (k >>> 0 < te >>> 0 ? 1 : 0)),
                    (H = g.low = H + vt),
                    (g.high = L + _t + (H >>> 0 < vt >>> 0 ? 1 : 0)),
                    (G = E.low = G + Ce),
                    (E.high = q + Dr + (G >>> 0 < Ce >>> 0 ? 1 : 0)),
                    (j = A.low = j + Le),
                    (A.high = Z + Te + (j >>> 0 < Le >>> 0 ? 1 : 0)),
                    (ee = D.low = ee + ze),
                    (D.high = re + Gt + (ee >>> 0 < ze >>> 0 ? 1 : 0)),
                    (O = v.low = O + Tt),
                    (v.high = R + Yt + (O >>> 0 < Tt >>> 0 ? 1 : 0)),
                    (M = w.low = M + Rt),
                    (w.high = V + Zt + (M >>> 0 < Rt >>> 0 ? 1 : 0));
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
  Th = Un.exports,
  Ta;
function Rh() {
  return (
    Ta ||
      ((Ta = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Ti(), Wc());
        })(Th, function (r) {
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
  Ph = Hn.exports,
  Ra;
function kh() {
  return (
    Ra ||
      ((Ra = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Ti());
        })(Ph, function (r) {
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
                for (var A = 1, D = 0; D < 24; D++) {
                  for (var v = 0, w = 0, P = 0; P < 7; P++) {
                    if (A & 1) {
                      var B = (1 << P) - 1;
                      B < 32 ? (w ^= 1 << B) : (v ^= 1 << (B - 32));
                    }
                    A & 128 ? (A = (A << 1) ^ 113) : (A <<= 1);
                  }
                  d[D] = c.create(v, w);
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
                    var A = x[b + 2 * E],
                      D = x[b + 2 * E + 1];
                    (A =
                      (((A << 8) | (A >>> 24)) & 16711935) |
                      (((A << 24) | (A >>> 8)) & 4278255360)),
                      (D =
                        (((D << 8) | (D >>> 24)) & 16711935) |
                        (((D << 24) | (D >>> 8)) & 4278255360));
                    var v = y[E];
                    (v.high ^= D), (v.low ^= A);
                  }
                  for (var w = 0; w < 24; w++) {
                    for (var P = 0; P < 5; P++) {
                      for (var B = 0, S = 0, k = 0; k < 5; k++) {
                        var v = y[P + 5 * k];
                        (B ^= v.high), (S ^= v.low);
                      }
                      var L = p[P];
                      (L.high = B), (L.low = S);
                    }
                    for (var P = 0; P < 5; P++)
                      for (
                        var H = p[(P + 4) % 5],
                          q = p[(P + 1) % 5],
                          G = q.high,
                          Z = q.low,
                          B = H.high ^ ((G << 1) | (Z >>> 31)),
                          S = H.low ^ ((Z << 1) | (G >>> 31)),
                          k = 0;
                        k < 5;
                        k++
                      ) {
                        var v = y[P + 5 * k];
                        (v.high ^= B), (v.low ^= S);
                      }
                    for (var j = 1; j < 25; j++) {
                      var B,
                        S,
                        v = y[j],
                        re = v.high,
                        ee = v.low,
                        R = h[j];
                      R < 32
                        ? ((B = (re << R) | (ee >>> (32 - R))),
                          (S = (ee << R) | (re >>> (32 - R))))
                        : ((B = (ee << (R - 32)) | (re >>> (64 - R))),
                          (S = (re << (R - 32)) | (ee >>> (64 - R))));
                      var O = p[f[j]];
                      (O.high = B), (O.low = S);
                    }
                    var V = p[0],
                      M = y[0];
                    (V.high = M.high), (V.low = M.low);
                    for (var P = 0; P < 5; P++)
                      for (var k = 0; k < 5; k++) {
                        var j = P + 5 * k,
                          v = y[j],
                          se = p[j],
                          le = p[((P + 1) % 5) + 5 * k],
                          ve = p[((P + 2) % 5) + 5 * k];
                        (v.high = se.high ^ (~le.high & ve.high)),
                          (v.low = se.low ^ (~le.low & ve.low));
                      }
                    var v = y[0],
                      te = d[w];
                    (v.high ^= te.high), (v.low ^= te.low);
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
                      A = this.cfg.outputLength / 8,
                      D = A / 8,
                      v = [],
                      w = 0;
                    w < D;
                    w++
                  ) {
                    var P = E[w],
                      B = P.high,
                      S = P.low;
                    (B =
                      (((B << 8) | (B >>> 24)) & 16711935) |
                      (((B << 24) | (B >>> 8)) & 4278255360)),
                      (S =
                        (((S << 8) | (S >>> 24)) & 16711935) |
                        (((S << 24) | (S >>> 8)) & 4278255360)),
                      v.push(S),
                      v.push(B);
                  }
                  return new o.init(v, A);
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
  Lh = jn.exports,
  Pa;
function Oh() {
  return (
    Pa ||
      ((Pa = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(ce());
        })(Lh, function (r) {
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
                  _doProcessBlock: function (D, v) {
                    for (var w = 0; w < 16; w++) {
                      var P = v + w,
                        B = D[P];
                      D[P] =
                        (((B << 8) | (B >>> 24)) & 16711935) |
                        (((B << 24) | (B >>> 8)) & 4278255360);
                    }
                    var S = this._hash.words,
                      k = d.words,
                      L = p.words,
                      H = c.words,
                      q = u.words,
                      G = h.words,
                      Z = f.words,
                      j,
                      re,
                      ee,
                      R,
                      O,
                      V,
                      M,
                      se,
                      le,
                      ve;
                    (V = j = S[0]),
                      (M = re = S[1]),
                      (se = ee = S[2]),
                      (le = R = S[3]),
                      (ve = O = S[4]);
                    for (var te, w = 0; w < 80; w += 1)
                      (te = (j + D[v + H[w]]) | 0),
                        w < 16
                          ? (te += x(re, ee, R) + k[0])
                          : w < 32
                            ? (te += b(re, ee, R) + k[1])
                            : w < 48
                              ? (te += y(re, ee, R) + k[2])
                              : w < 64
                                ? (te += g(re, ee, R) + k[3])
                                : (te += E(re, ee, R) + k[4]),
                        (te = te | 0),
                        (te = A(te, G[w])),
                        (te = (te + O) | 0),
                        (j = O),
                        (O = R),
                        (R = A(ee, 10)),
                        (ee = re),
                        (re = te),
                        (te = (V + D[v + q[w]]) | 0),
                        w < 16
                          ? (te += E(M, se, le) + L[0])
                          : w < 32
                            ? (te += g(M, se, le) + L[1])
                            : w < 48
                              ? (te += y(M, se, le) + L[2])
                              : w < 64
                                ? (te += b(M, se, le) + L[3])
                                : (te += x(M, se, le) + L[4]),
                        (te = te | 0),
                        (te = A(te, Z[w])),
                        (te = (te + ve) | 0),
                        (V = ve),
                        (ve = le),
                        (le = A(se, 10)),
                        (se = M),
                        (M = te);
                    (te = (S[1] + ee + le) | 0),
                      (S[1] = (S[2] + R + ve) | 0),
                      (S[2] = (S[3] + O + V) | 0),
                      (S[3] = (S[4] + j + M) | 0),
                      (S[4] = (S[0] + re + se) | 0),
                      (S[0] = te);
                  },
                  _doFinalize: function () {
                    var D = this._data,
                      v = D.words,
                      w = this._nDataBytes * 8,
                      P = D.sigBytes * 8;
                    (v[P >>> 5] |= 128 << (24 - (P % 32))),
                      (v[(((P + 64) >>> 9) << 4) + 14] =
                        (((w << 8) | (w >>> 24)) & 16711935) |
                        (((w << 24) | (w >>> 8)) & 4278255360)),
                      (D.sigBytes = (v.length + 1) * 4),
                      this._process();
                    for (var B = this._hash, S = B.words, k = 0; k < 5; k++) {
                      var L = S[k];
                      S[k] =
                        (((L << 8) | (L >>> 24)) & 16711935) |
                        (((L << 24) | (L >>> 8)) & 4278255360);
                    }
                    return B;
                  },
                  clone: function () {
                    var D = a.clone.call(this);
                    return (D._hash = this._hash.clone()), D;
                  },
                }));
              function x(D, v, w) {
                return D ^ v ^ w;
              }
              function b(D, v, w) {
                return (D & v) | (~D & w);
              }
              function y(D, v, w) {
                return (D | ~v) ^ w;
              }
              function g(D, v, w) {
                return (D & w) | (v & ~w);
              }
              function E(D, v, w) {
                return D ^ (v | ~w);
              }
              function A(D, v) {
                return (D << v) | (D >>> (32 - v));
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
  Mh = zn.exports,
  ka;
function oo() {
  return (
    ka ||
      ((ka = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n(ce());
        })(Mh, function (r) {
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
  Vh = qn.exports,
  La;
function Nh() {
  return (
    La ||
      ((La = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), so(), oo());
        })(Vh, function (r) {
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
                      var A = p.update(f).finalize(x);
                      p.reset();
                      for (
                        var D = A.words, v = D.length, w = A, P = 1;
                        P < E;
                        P++
                      ) {
                        (w = p.finalize(w)), p.reset();
                        for (var B = w.words, S = 0; S < v; S++) D[S] ^= B[S];
                      }
                      m.concat(A), y[0]++;
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
var Wn = { exports: {} },
  Ih = Wn.exports,
  Oa;
function Ft() {
  return (
    Oa ||
      ((Oa = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), qc(), oo());
        })(Ih, function (r) {
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
      })(Wn)),
    Wn.exports
  );
}
var $n = { exports: {} },
  Uh = $n.exports,
  Ma;
function Re() {
  return (
    Ma ||
      ((Ma = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Ft());
        })(Uh, function (r) {
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
                  createEncryptor: function (B, S) {
                    return this.create(this._ENC_XFORM_MODE, B, S);
                  },
                  createDecryptor: function (B, S) {
                    return this.create(this._DEC_XFORM_MODE, B, S);
                  },
                  init: function (B, S, k) {
                    (this.cfg = this.cfg.extend(k)),
                      (this._xformMode = B),
                      (this._key = S),
                      this.reset();
                  },
                  reset: function () {
                    l.reset.call(this), this._doReset();
                  },
                  process: function (B) {
                    return this._append(B), this._process();
                  },
                  finalize: function (B) {
                    B && this._append(B);
                    var S = this._doFinalize();
                    return S;
                  },
                  keySize: 128 / 32,
                  ivSize: 128 / 32,
                  _ENC_XFORM_MODE: 1,
                  _DEC_XFORM_MODE: 2,
                  _createHelper: (function () {
                    function B(S) {
                      return typeof S == "string" ? P : D;
                    }
                    return function (S) {
                      return {
                        encrypt: function (k, L, H) {
                          return B(L).encrypt(S, k, L, H);
                        },
                        decrypt: function (k, L, H) {
                          return B(L).decrypt(S, k, L, H);
                        },
                      };
                    };
                  })(),
                }));
              s.StreamCipher = d.extend({
                _doFinalize: function () {
                  var B = this._process(!0);
                  return B;
                },
                blockSize: 1,
              });
              var p = (i.mode = {}),
                m = (s.BlockCipherMode = o.extend({
                  createEncryptor: function (B, S) {
                    return this.Encryptor.create(B, S);
                  },
                  createDecryptor: function (B, S) {
                    return this.Decryptor.create(B, S);
                  },
                  init: function (B, S) {
                    (this._cipher = B), (this._iv = S);
                  },
                })),
                x = (p.CBC = (function () {
                  var B = m.extend();
                  (B.Encryptor = B.extend({
                    processBlock: function (k, L) {
                      var H = this._cipher,
                        q = H.blockSize;
                      S.call(this, k, L, q),
                        H.encryptBlock(k, L),
                        (this._prevBlock = k.slice(L, L + q));
                    },
                  })),
                    (B.Decryptor = B.extend({
                      processBlock: function (k, L) {
                        var H = this._cipher,
                          q = H.blockSize,
                          G = k.slice(L, L + q);
                        H.decryptBlock(k, L),
                          S.call(this, k, L, q),
                          (this._prevBlock = G);
                      },
                    }));
                  function S(k, L, H) {
                    var q,
                      G = this._iv;
                    G ? ((q = G), (this._iv = n)) : (q = this._prevBlock);
                    for (var Z = 0; Z < H; Z++) k[L + Z] ^= q[Z];
                  }
                  return B;
                })()),
                b = (i.pad = {}),
                y = (b.Pkcs7 = {
                  pad: function (B, S) {
                    for (
                      var k = S * 4,
                        L = k - (B.sigBytes % k),
                        H = (L << 24) | (L << 16) | (L << 8) | L,
                        q = [],
                        G = 0;
                      G < L;
                      G += 4
                    )
                      q.push(H);
                    var Z = a.create(q, L);
                    B.concat(Z);
                  },
                  unpad: function (B) {
                    var S = B.words[(B.sigBytes - 1) >>> 2] & 255;
                    B.sigBytes -= S;
                  },
                });
              s.BlockCipher = d.extend({
                cfg: d.cfg.extend({ mode: x, padding: y }),
                reset: function () {
                  var B;
                  d.reset.call(this);
                  var S = this.cfg,
                    k = S.iv,
                    L = S.mode;
                  this._xformMode == this._ENC_XFORM_MODE
                    ? (B = L.createEncryptor)
                    : ((B = L.createDecryptor), (this._minBufferSize = 1)),
                    this._mode && this._mode.__creator == B
                      ? this._mode.init(this, k && k.words)
                      : ((this._mode = B.call(L, this, k && k.words)),
                        (this._mode.__creator = B));
                },
                _doProcessBlock: function (B, S) {
                  this._mode.processBlock(B, S);
                },
                _doFinalize: function () {
                  var B,
                    S = this.cfg.padding;
                  return (
                    this._xformMode == this._ENC_XFORM_MODE
                      ? (S.pad(this._data, this.blockSize),
                        (B = this._process(!0)))
                      : ((B = this._process(!0)), S.unpad(B)),
                    B
                  );
                },
                blockSize: 128 / 32,
              });
              var g = (s.CipherParams = o.extend({
                  init: function (B) {
                    this.mixIn(B);
                  },
                  toString: function (B) {
                    return (B || this.formatter).stringify(this);
                  },
                })),
                E = (i.format = {}),
                A = (E.OpenSSL = {
                  stringify: function (B) {
                    var S,
                      k = B.ciphertext,
                      L = B.salt;
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
                  parse: function (B) {
                    var S,
                      k = u.parse(B),
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
                D = (s.SerializableCipher = o.extend({
                  cfg: o.extend({ format: A }),
                  encrypt: function (B, S, k, L) {
                    L = this.cfg.extend(L);
                    var H = B.createEncryptor(k, L),
                      q = H.finalize(S),
                      G = H.cfg;
                    return g.create({
                      ciphertext: q,
                      key: k,
                      iv: G.iv,
                      algorithm: B,
                      mode: G.mode,
                      padding: G.padding,
                      blockSize: B.blockSize,
                      formatter: L.format,
                    });
                  },
                  decrypt: function (B, S, k, L) {
                    (L = this.cfg.extend(L)), (S = this._parse(S, L.format));
                    var H = B.createDecryptor(k, L).finalize(S.ciphertext);
                    return H;
                  },
                  _parse: function (B, S) {
                    return typeof B == "string" ? S.parse(B, this) : B;
                  },
                })),
                v = (i.kdf = {}),
                w = (v.OpenSSL = {
                  execute: function (B, S, k, L, H) {
                    if ((L || (L = a.random(64 / 8)), H))
                      var q = f
                        .create({ keySize: S + k, hasher: H })
                        .compute(B, L);
                    else var q = f.create({ keySize: S + k }).compute(B, L);
                    var G = a.create(q.words.slice(S), k * 4);
                    return (
                      (q.sigBytes = S * 4), g.create({ key: q, iv: G, salt: L })
                    );
                  },
                }),
                P = (s.PasswordBasedCipher = D.extend({
                  cfg: D.cfg.extend({ kdf: w }),
                  encrypt: function (B, S, k, L) {
                    L = this.cfg.extend(L);
                    var H = L.kdf.execute(
                      k,
                      B.keySize,
                      B.ivSize,
                      L.salt,
                      L.hasher,
                    );
                    L.iv = H.iv;
                    var q = D.encrypt.call(this, B, S, H.key, L);
                    return q.mixIn(H), q;
                  },
                  decrypt: function (B, S, k, L) {
                    (L = this.cfg.extend(L)), (S = this._parse(S, L.format));
                    var H = L.kdf.execute(
                      k,
                      B.keySize,
                      B.ivSize,
                      S.salt,
                      L.hasher,
                    );
                    L.iv = H.iv;
                    var q = D.decrypt.call(this, B, S, H.key, L);
                    return q;
                  },
                }));
            })();
        });
      })($n)),
    $n.exports
  );
}
var Kn = { exports: {} },
  Hh = Kn.exports,
  Va;
function jh() {
  return (
    Va ||
      ((Va = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(Hh, function (r) {
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
  zh = Xn.exports,
  Na;
function qh() {
  return (
    Na ||
      ((Na = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(zh, function (r) {
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
  Wh = Gn.exports,
  Ia;
function $h() {
  return (
    Ia ||
      ((Ia = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(Wh, function (r) {
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
  Kh = Yn.exports,
  Ua;
function Xh() {
  return (
    Ua ||
      ((Ua = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(Kh, function (r) {
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
  Gh = Zn.exports,
  Ha;
function Yh() {
  return (
    Ha ||
      ((Ha = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(Gh, function (r) {
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
var Jn = { exports: {} },
  Zh = Jn.exports,
  ja;
function Jh() {
  return (
    ja ||
      ((ja = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(Zh, function (r) {
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
      })(Jn)),
    Jn.exports
  );
}
var Qn = { exports: {} },
  Qh = Qn.exports,
  za;
function ed() {
  return (
    za ||
      ((za = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(Qh, function (r) {
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
      })(Qn)),
    Qn.exports
  );
}
var ei = { exports: {} },
  td = ei.exports,
  qa;
function rd() {
  return (
    qa ||
      ((qa = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(td, function (r) {
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
  nd = ti.exports,
  Wa;
function id() {
  return (
    Wa ||
      ((Wa = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(nd, function (r) {
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
  sd = ri.exports,
  $a;
function od() {
  return (
    $a ||
      (($a = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(sd, function (r) {
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
  ad = ni.exports,
  Ka;
function cd() {
  return (
    Ka ||
      ((Ka = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Re());
        })(ad, function (r) {
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
  ld = ii.exports,
  Xa;
function ud() {
  return (
    Xa ||
      ((Xa = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Kt(), Xt(), Ft(), Re());
        })(ld, function (r) {
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
                for (var A = 0, D = 0, E = 0; E < 256; E++) {
                  var v = D ^ (D << 1) ^ (D << 2) ^ (D << 3) ^ (D << 4);
                  (v = (v >>> 8) ^ (v & 255) ^ 99), (a[A] = v), (l[v] = A);
                  var w = g[A],
                    P = g[w],
                    B = g[P],
                    S = (g[v] * 257) ^ (v * 16843008);
                  (c[A] = (S << 24) | (S >>> 8)),
                    (u[A] = (S << 16) | (S >>> 16)),
                    (h[A] = (S << 8) | (S >>> 24)),
                    (f[A] = S);
                  var S =
                    (B * 16843009) ^ (P * 65537) ^ (w * 257) ^ (A * 16843008);
                  (d[v] = (S << 24) | (S >>> 8)),
                    (p[v] = (S << 16) | (S >>> 16)),
                    (m[v] = (S << 8) | (S >>> 24)),
                    (x[v] = S),
                    A
                      ? ((A = w ^ g[g[g[B ^ w]]]), (D ^= g[g[D]]))
                      : (A = D = 1);
                }
              })();
              var b = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                y = (o.AES = s.extend({
                  _doReset: function () {
                    var g;
                    if (!(this._nRounds && this._keyPriorReset === this._key)) {
                      for (
                        var E = (this._keyPriorReset = this._key),
                          A = E.words,
                          D = E.sigBytes / 4,
                          v = (this._nRounds = D + 6),
                          w = (v + 1) * 4,
                          P = (this._keySchedule = []),
                          B = 0;
                        B < w;
                        B++
                      )
                        B < D
                          ? (P[B] = A[B])
                          : ((g = P[B - 1]),
                            B % D
                              ? D > 6 &&
                                B % D == 4 &&
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
                                (g ^= b[(B / D) | 0] << 24)),
                            (P[B] = P[B - D] ^ g));
                      for (
                        var S = (this._invKeySchedule = []), k = 0;
                        k < w;
                        k++
                      ) {
                        var B = w - k;
                        if (k % 4) var g = P[B];
                        else var g = P[B - 4];
                        k < 4 || B <= 4
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
                    var A = g[E + 1];
                    (g[E + 1] = g[E + 3]),
                      (g[E + 3] = A),
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
                    var A = g[E + 1];
                    (g[E + 1] = g[E + 3]), (g[E + 3] = A);
                  },
                  _doCryptBlock: function (g, E, A, D, v, w, P, B) {
                    for (
                      var S = this._nRounds,
                        k = g[E] ^ A[0],
                        L = g[E + 1] ^ A[1],
                        H = g[E + 2] ^ A[2],
                        q = g[E + 3] ^ A[3],
                        G = 4,
                        Z = 1;
                      Z < S;
                      Z++
                    ) {
                      var j =
                          D[k >>> 24] ^
                          v[(L >>> 16) & 255] ^
                          w[(H >>> 8) & 255] ^
                          P[q & 255] ^
                          A[G++],
                        re =
                          D[L >>> 24] ^
                          v[(H >>> 16) & 255] ^
                          w[(q >>> 8) & 255] ^
                          P[k & 255] ^
                          A[G++],
                        ee =
                          D[H >>> 24] ^
                          v[(q >>> 16) & 255] ^
                          w[(k >>> 8) & 255] ^
                          P[L & 255] ^
                          A[G++],
                        R =
                          D[q >>> 24] ^
                          v[(k >>> 16) & 255] ^
                          w[(L >>> 8) & 255] ^
                          P[H & 255] ^
                          A[G++];
                      (k = j), (L = re), (H = ee), (q = R);
                    }
                    var j =
                        ((B[k >>> 24] << 24) |
                          (B[(L >>> 16) & 255] << 16) |
                          (B[(H >>> 8) & 255] << 8) |
                          B[q & 255]) ^
                        A[G++],
                      re =
                        ((B[L >>> 24] << 24) |
                          (B[(H >>> 16) & 255] << 16) |
                          (B[(q >>> 8) & 255] << 8) |
                          B[k & 255]) ^
                        A[G++],
                      ee =
                        ((B[H >>> 24] << 24) |
                          (B[(q >>> 16) & 255] << 16) |
                          (B[(k >>> 8) & 255] << 8) |
                          B[L & 255]) ^
                        A[G++],
                      R =
                        ((B[q >>> 24] << 24) |
                          (B[(k >>> 16) & 255] << 16) |
                          (B[(L >>> 8) & 255] << 8) |
                          B[H & 255]) ^
                        A[G++];
                    (g[E] = j),
                      (g[E + 1] = re),
                      (g[E + 2] = ee),
                      (g[E + 3] = R);
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
  fd = si.exports,
  Ga;
function hd() {
  return (
    Ga ||
      ((Ga = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Kt(), Xt(), Ft(), Re());
        })(fd, function (r) {
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
                      var A = l[E] - 1;
                      g[E] = (y[A >>> 5] >>> (31 - (A % 32))) & 1;
                    }
                    for (var D = (this._subKeys = []), v = 0; v < 16; v++) {
                      for (var w = (D[v] = []), P = u[v], E = 0; E < 24; E++)
                        (w[(E / 6) | 0] |=
                          g[(c[E] - 1 + P) % 28] << (31 - (E % 6))),
                          (w[4 + ((E / 6) | 0)] |=
                            g[28 + ((c[E + 24] - 1 + P) % 28)] <<
                            (31 - (E % 6)));
                      w[0] = (w[0] << 1) | (w[0] >>> 31);
                      for (var E = 1; E < 7; E++)
                        w[E] = w[E] >>> ((E - 1) * 4 + 3);
                      w[7] = (w[7] << 5) | (w[7] >>> 27);
                    }
                    for (var B = (this._invSubKeys = []), E = 0; E < 16; E++)
                      B[E] = D[15 - E];
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
                        var A = g[E],
                          D = this._lBlock,
                          v = this._rBlock,
                          w = 0,
                          P = 0;
                        P < 8;
                        P++
                      )
                        w |= h[P][((v ^ A[P]) & f[P]) >>> 0];
                      (this._lBlock = v), (this._rBlock = D ^ w);
                    }
                    var B = this._lBlock;
                    (this._lBlock = this._rBlock),
                      (this._rBlock = B),
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
                    A = y.length < 6 ? y.slice(0, 2) : y.slice(4, 6);
                  (this._des1 = d.createEncryptor(s.create(g))),
                    (this._des2 = d.createEncryptor(s.create(E))),
                    (this._des3 = d.createEncryptor(s.create(A)));
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
  dd = oi.exports,
  Ya;
function pd() {
  return (
    Ya ||
      ((Ya = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Kt(), Xt(), Ft(), Re());
        })(dd, function (r) {
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
  xd = ai.exports,
  Za;
function md() {
  return (
    Za ||
      ((Za = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Kt(), Xt(), Ft(), Re());
        })(xd, function (r) {
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
                        A =
                          (((g << 8) | (g >>> 24)) & 16711935) |
                          (((g << 24) | (g >>> 8)) & 4278255360),
                        D = (E >>> 16) | (A & 4294901760),
                        v = (A << 16) | (E & 65535);
                      (x[0] ^= E),
                        (x[1] ^= D),
                        (x[2] ^= A),
                        (x[3] ^= v),
                        (x[4] ^= E),
                        (x[5] ^= D),
                        (x[6] ^= A),
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
  yd = ci.exports,
  Ja;
function gd() {
  return (
    Ja ||
      ((Ja = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Kt(), Xt(), Ft(), Re());
        })(yd, function (r) {
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
                        A =
                          (((g << 8) | (g >>> 24)) & 16711935) |
                          (((g << 24) | (g >>> 8)) & 4278255360),
                        D = (E >>> 16) | (A & 4294901760),
                        v = (A << 16) | (E & 65535);
                      (m[0] ^= E),
                        (m[1] ^= D),
                        (m[2] ^= A),
                        (m[3] ^= v),
                        (m[4] ^= E),
                        (m[5] ^= D),
                        (m[6] ^= A),
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
  vd = li.exports,
  Qa;
function Ed() {
  return (
    Qa ||
      ((Qa = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(ce(), Kt(), Xt(), Ft(), Re());
        })(vd, function (r) {
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
                  A = b & 255,
                  D = x.sbox[0][y] + x.sbox[1][g];
                return (D = D ^ x.sbox[2][E]), (D = D + x.sbox[3][A]), D;
              }
              function f(x, b, y) {
                let g = b,
                  E = y,
                  A;
                for (let D = 0; D < a; ++D)
                  (g = g ^ x.pbox[D]),
                    (E = h(x, g) ^ E),
                    (A = g),
                    (g = E),
                    (E = A);
                return (
                  (A = g),
                  (g = E),
                  (E = A),
                  (E = E ^ x.pbox[a]),
                  (g = g ^ x.pbox[a + 1]),
                  { left: g, right: E }
                );
              }
              function d(x, b, y) {
                let g = b,
                  E = y,
                  A;
                for (let D = a + 1; D > 1; --D)
                  (g = g ^ x.pbox[D]),
                    (E = h(x, g) ^ E),
                    (A = g),
                    (g = E),
                    (E = A);
                return (
                  (A = g),
                  (g = E),
                  (E = A),
                  (E = E ^ x.pbox[1]),
                  (g = g ^ x.pbox[0]),
                  { left: g, right: E }
                );
              }
              function p(x, b, y) {
                for (let v = 0; v < 4; v++) {
                  x.sbox[v] = [];
                  for (let w = 0; w < 256; w++) x.sbox[v][w] = c[v][w];
                }
                let g = 0;
                for (let v = 0; v < a + 2; v++)
                  (x.pbox[v] = l[v] ^ b[g]), g++, g >= y && (g = 0);
                let E = 0,
                  A = 0,
                  D = 0;
                for (let v = 0; v < a + 2; v += 2)
                  (D = f(x, E, A)),
                    (E = D.left),
                    (A = D.right),
                    (x.pbox[v] = E),
                    (x.pbox[v + 1] = A);
                for (let v = 0; v < 4; v++)
                  for (let w = 0; w < 256; w += 2)
                    (D = f(x, E, A)),
                      (E = D.left),
                      (A = D.right),
                      (x.sbox[v][w] = E),
                      (x.sbox[v][w + 1] = A);
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
var bd = Sn.exports,
  e0;
function Ad() {
  return (
    e0 ||
      ((e0 = 1),
      (function (e, t) {
        (function (r, n, i) {
          e.exports = n(
            ce(),
            Ti(),
            gh(),
            Eh(),
            Kt(),
            Ch(),
            Xt(),
            qc(),
            so(),
            Sh(),
            Wc(),
            Rh(),
            kh(),
            Oh(),
            oo(),
            Nh(),
            Ft(),
            Re(),
            jh(),
            qh(),
            $h(),
            Xh(),
            Yh(),
            Jh(),
            ed(),
            rd(),
            id(),
            od(),
            cd(),
            ud(),
            hd(),
            pd(),
            md(),
            gd(),
            Ed(),
          );
        })(bd, function (r) {
          return r;
        });
      })(Sn)),
    Sn.exports
  );
}
var Cd = Ad();
const Tv = df(Cd),
  ao = $.createContext({});
function co(e) {
  const t = $.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const lo = typeof window != "undefined",
  $c = lo ? $.useLayoutEffect : $.useEffect,
  Ri = $.createContext(null);
function uo(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function fo(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
const yt = (e, t, r) => (r > t ? t : r < e ? e : r);
let ho = () => {};
const gt = {},
  Kc = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Xc(e) {
  return typeof e == "object" && e !== null;
}
const Gc = (e) => /^0[^.\s]+$/u.test(e);
function po(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Qe = (e) => e,
  Bd = (e, t) => (r) => t(e(r)),
  sn = (...e) => e.reduce(Bd),
  Zr = (e, t, r) => {
    const n = t - e;
    return n === 0 ? 1 : (r - e) / n;
  };
class xo {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return uo(this.subscriptions, t), () => fo(this.subscriptions, t);
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
  Je = (e) => e / 1e3;
function Yc(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Zc = (e, t, r) =>
    (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  Dd = 1e-7,
  wd = 12;
function Fd(e, t, r, n, i) {
  let s,
    o,
    a = 0;
  do (o = t + (r - t) / 2), (s = Zc(o, n, i) - e), s > 0 ? (r = o) : (t = o);
  while (Math.abs(s) > Dd && ++a < wd);
  return o;
}
function on(e, t, r, n) {
  if (e === t && r === n) return Qe;
  const i = (s) => Fd(s, 0, 1, e, r);
  return (s) => (s === 0 || s === 1 ? s : Zc(i(s), t, n));
}
const Jc = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Qc = (e) => (t) => 1 - e(1 - t),
  el = on(0.33, 1.53, 0.69, 0.99),
  mo = Qc(el),
  tl = Jc(mo),
  rl = (e) =>
    (e *= 2) < 1 ? 0.5 * mo(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  yo = (e) => 1 - Math.sin(Math.acos(e)),
  nl = Qc(yo),
  il = Jc(yo),
  Sd = on(0.42, 0, 1, 1),
  _d = on(0, 0, 0.58, 1),
  sl = on(0.42, 0, 0.58, 1),
  Td = (e) => Array.isArray(e) && typeof e[0] != "number",
  ol = (e) => Array.isArray(e) && typeof e[0] == "number",
  Rd = {
    linear: Qe,
    easeIn: Sd,
    easeInOut: sl,
    easeOut: _d,
    circIn: yo,
    circInOut: il,
    circOut: nl,
    backIn: mo,
    backInOut: tl,
    backOut: el,
    anticipate: rl,
  },
  Pd = (e) => typeof e == "string",
  t0 = (e) => {
    if (ol(e)) {
      ho(e.length === 4);
      const [t, r, n, i] = e;
      return on(t, r, n, i);
    } else if (Pd(e)) return Rd[e];
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
function kd(e, t) {
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
const Ld = 40;
function al(e, t) {
  let r = !1,
    n = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (r = !0),
    o = En.reduce((g, E) => ((g[E] = kd(s)), g), {}),
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
          (i.delta = n ? 1e3 / 60 : Math.max(Math.min(g - i.timestamp, Ld), 1)),
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
      const A = o[E];
      return (g[E] = (D, v = !1, w = !1) => (r || x(), A.schedule(D, v, w))), g;
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
  cancel: Dt,
  state: ke,
  steps: Qi,
} = al(
  typeof requestAnimationFrame != "undefined" ? requestAnimationFrame : Qe,
  !0,
);
let ui;
function Od() {
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
      (ui = e), queueMicrotask(Od);
    },
  },
  cl = (e) => (t) => typeof t == "string" && t.startsWith(e),
  go = cl("--"),
  Md = cl("var(--"),
  vo = (e) => (Md(e) ? Vd.test(e.split("/*")[0].trim()) : !1),
  Vd =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  vr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Jr = oe(I({}, vr), { transform: (e) => yt(0, 1, e) }),
  bn = oe(I({}, vr), { default: 1 }),
  Wr = (e) => Math.round(e * 1e5) / 1e5,
  Eo = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Nd(e) {
  return e == null;
}
const Id =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  bo = (e, t) => (r) =>
    !!(
      (typeof r == "string" && Id.test(r) && r.startsWith(e)) ||
      (t && !Nd(r) && Object.prototype.hasOwnProperty.call(r, t))
    ),
  ll = (e, t, r) => (n) => {
    if (typeof n != "string") return n;
    const [i, s, o, a] = n.match(Eo);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [r]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Ud = (e) => yt(0, 255, e),
  es = oe(I({}, vr), { transform: (e) => Math.round(Ud(e)) }),
  It = {
    test: bo("rgb", "red"),
    parse: ll("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
      "rgba(" +
      es.transform(e) +
      ", " +
      es.transform(t) +
      ", " +
      es.transform(r) +
      ", " +
      Wr(Jr.transform(n)) +
      ")",
  };
function Hd(e) {
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
const Ds = { test: bo("#"), parse: Hd, transform: It.transform },
  an = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  At = an("deg"),
  ft = an("%"),
  J = an("px"),
  jd = an("vh"),
  zd = an("vw"),
  r0 = oe(I({}, ft), {
    parse: (e) => ft.parse(e) / 100,
    transform: (e) => ft.transform(e * 100),
  }),
  cr = {
    test: bo("hsl", "hue"),
    parse: ll("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      ft.transform(Wr(t)) +
      ", " +
      ft.transform(Wr(r)) +
      ", " +
      Wr(Jr.transform(n)) +
      ")",
  },
  we = {
    test: (e) => It.test(e) || Ds.test(e) || cr.test(e),
    parse: (e) =>
      It.test(e) ? It.parse(e) : cr.test(e) ? cr.parse(e) : Ds.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? It.transform(e)
          : cr.transform(e),
    getAnimatableNone: (e) => {
      const t = we.parse(e);
      return (t.alpha = 0), we.transform(t);
    },
  },
  qd =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Wd(e) {
  var t, r;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Eo)) == null ? void 0 : t.length) || 0) +
      (((r = e.match(qd)) == null ? void 0 : r.length) || 0) >
      0
  );
}
const ul = "number",
  fl = "color",
  $d = "var",
  Kd = "var(",
  n0 = "${}",
  Xd =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Qr(e) {
  const t = e.toString(),
    r = [],
    n = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      Xd,
      (l) => (
        we.test(l)
          ? (n.color.push(s), i.push(fl), r.push(we.parse(l)))
          : l.startsWith(Kd)
            ? (n.var.push(s), i.push($d), r.push(l))
            : (n.number.push(s), i.push(ul), r.push(parseFloat(l))),
        ++s,
        n0
      ),
    )
    .split(n0);
  return { values: r, split: a, indexes: n, types: i };
}
function hl(e) {
  return Qr(e).values;
}
function dl(e) {
  const { split: t, types: r } = Qr(e),
    n = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < n; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = r[o];
        a === ul
          ? (s += Wr(i[o]))
          : a === fl
            ? (s += we.transform(i[o]))
            : (s += i[o]);
      }
    return s;
  };
}
const Gd = (e) =>
  typeof e == "number" ? 0 : we.test(e) ? we.getAnimatableNone(e) : e;
function Yd(e) {
  const t = hl(e);
  return dl(e)(t.map(Gd));
}
const wt = {
  test: Wd,
  parse: hl,
  createTransformer: dl,
  getAnimatableNone: Yd,
};
function ts(e, t, r) {
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
function Zd({ hue: e, saturation: t, lightness: r, alpha: n }) {
  (e /= 360), (t /= 100), (r /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = r;
  else {
    const a = r < 0.5 ? r * (1 + t) : r + t - r * t,
      l = 2 * r - a;
    (i = ts(l, a, e + 1 / 3)), (s = ts(l, a, e)), (o = ts(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: n,
  };
}
function Ci(e, t) {
  return (r) => (r > 0 ? t : e);
}
const ge = (e, t, r) => e + (t - e) * r,
  rs = (e, t, r) => {
    const n = e * e,
      i = r * (t * t - n) + n;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Jd = [Ds, It, cr],
  Qd = (e) => Jd.find((t) => t.test(e));
function i0(e) {
  const t = Qd(e);
  if (!t) return !1;
  let r = t.parse(e);
  return t === cr && (r = Zd(r)), r;
}
const s0 = (e, t) => {
    const r = i0(e),
      n = i0(t);
    if (!r || !n) return Ci(e, t);
    const i = I({}, r);
    return (s) => (
      (i.red = rs(r.red, n.red, s)),
      (i.green = rs(r.green, n.green, s)),
      (i.blue = rs(r.blue, n.blue, s)),
      (i.alpha = ge(r.alpha, n.alpha, s)),
      It.transform(i)
    );
  },
  ws = new Set(["none", "hidden"]);
function ep(e, t) {
  return ws.has(e) ? (r) => (r <= 0 ? e : t) : (r) => (r >= 1 ? t : e);
}
function tp(e, t) {
  return (r) => ge(e, t, r);
}
function Ao(e) {
  return typeof e == "number"
    ? tp
    : typeof e == "string"
      ? vo(e)
        ? Ci
        : we.test(e)
          ? s0
          : ip
      : Array.isArray(e)
        ? pl
        : typeof e == "object"
          ? we.test(e)
            ? s0
            : rp
          : Ci;
}
function pl(e, t) {
  const r = [...e],
    n = r.length,
    i = e.map((s, o) => Ao(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < n; o++) r[o] = i[o](s);
    return r;
  };
}
function rp(e, t) {
  const r = I(I({}, e), t),
    n = {};
  for (const i in r)
    e[i] !== void 0 && t[i] !== void 0 && (n[i] = Ao(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in n) r[s] = n[s](i);
    return r;
  };
}
function np(e, t) {
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
const ip = (e, t) => {
  const r = wt.createTransformer(t),
    n = Qr(e),
    i = Qr(t);
  return n.indexes.var.length === i.indexes.var.length &&
    n.indexes.color.length === i.indexes.color.length &&
    n.indexes.number.length >= i.indexes.number.length
    ? (ws.has(e) && !i.values.length) || (ws.has(t) && !n.values.length)
      ? ep(e, t)
      : sn(pl(np(n, i), i.values), r)
    : Ci(e, t);
};
function xl(e, t, r) {
  return typeof e == "number" && typeof t == "number" && typeof r == "number"
    ? ge(e, t, r)
    : Ao(e)(e, t);
}
const sp = (e) => {
    const t = ({ timestamp: r }) => e(r);
    return {
      start: (r = !0) => ye.update(t, r),
      stop: () => Dt(t),
      now: () => (ke.isProcessing ? ke.timestamp : Ue.now()),
    };
  },
  ml = (e, t, r = 10) => {
    let n = "";
    const i = Math.max(Math.round(t / r), 2);
    for (let s = 0; s < i; s++)
      n += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  },
  Bi = 2e4;
function Co(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < Bi; ) (t += r), (n = e.next(t));
  return t >= Bi ? 1 / 0 : t;
}
function op(e, t = 100, r) {
  const n = r(oe(I({}, e), { keyframes: [0, t] })),
    i = Math.min(Co(n), Bi);
  return {
    type: "keyframes",
    ease: (s) => n.next(i * s).value / t,
    duration: Je(i),
  };
}
const ap = 5;
function yl(e, t, r) {
  const n = Math.max(t - ap, 0);
  return Yc(r - e(n), t - n);
}
const Ae = {
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
  ns = 0.001;
function cp({
  duration: e = Ae.duration,
  bounce: t = Ae.bounce,
  velocity: r = Ae.velocity,
  mass: n = Ae.mass,
}) {
  let i,
    s,
    o = 1 - t;
  (o = yt(Ae.minDamping, Ae.maxDamping, o)),
    (e = yt(Ae.minDuration, Ae.maxDuration, Je(e))),
    o < 1
      ? ((i = (c) => {
          const u = c * o,
            h = u * e,
            f = u - r,
            d = Fs(c, o),
            p = Math.exp(-h);
          return ns - (f / d) * p;
        }),
        (s = (c) => {
          const h = c * o * e,
            f = h * r + r,
            d = Math.pow(o, 2) * Math.pow(c, 2) * e,
            p = Math.exp(-h),
            m = Fs(Math.pow(c, 2), o);
          return ((-i(c) + ns > 0 ? -1 : 1) * ((f - d) * p)) / m;
        }))
      : ((i = (c) => {
          const u = Math.exp(-c * e),
            h = (c - r) * e + 1;
          return -ns + u * h;
        }),
        (s = (c) => {
          const u = Math.exp(-c * e),
            h = (r - c) * (e * e);
          return u * h;
        }));
  const a = 5 / e,
    l = up(i, s, a);
  if (((e = ut(e)), isNaN(l)))
    return { stiffness: Ae.stiffness, damping: Ae.damping, duration: e };
  {
    const c = Math.pow(l, 2) * n;
    return { stiffness: c, damping: o * 2 * Math.sqrt(n * c), duration: e };
  }
}
const lp = 12;
function up(e, t, r) {
  let n = r;
  for (let i = 1; i < lp; i++) n = n - e(n) / t(n);
  return n;
}
function Fs(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const fp = ["duration", "bounce"],
  hp = ["stiffness", "damping", "mass"];
function o0(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function dp(e) {
  let t = I(
    {
      velocity: Ae.velocity,
      stiffness: Ae.stiffness,
      damping: Ae.damping,
      mass: Ae.mass,
      isResolvedFromDuration: !1,
    },
    e,
  );
  if (!o0(e, hp) && o0(e, fp))
    if (e.visualDuration) {
      const r = e.visualDuration,
        n = (2 * Math.PI) / (r * 1.2),
        i = n * n,
        s = 2 * yt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = oe(I({}, t), { mass: Ae.mass, stiffness: i, damping: s });
    } else {
      const r = cp(e);
      (t = oe(I(I({}, t), r), { mass: Ae.mass })),
        (t.isResolvedFromDuration = !0);
    }
  return t;
}
function Di(e = Ae.visualDuration, t = Ae.bounce) {
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
    } = dp(oe(I({}, r), { velocity: -Je(r.velocity || 0) })),
    p = f || 0,
    m = c / (2 * Math.sqrt(l * u)),
    x = o - s,
    b = Je(Math.sqrt(l / u)),
    y = Math.abs(x) < 5;
  n || (n = y ? Ae.restSpeed.granular : Ae.restSpeed.default),
    i || (i = y ? Ae.restDelta.granular : Ae.restDelta.default);
  let g;
  if (m < 1) {
    const A = Fs(b, m);
    g = (D) => {
      const v = Math.exp(-m * b * D);
      return (
        o - v * (((p + m * b * x) / A) * Math.sin(A * D) + x * Math.cos(A * D))
      );
    };
  } else if (m === 1) g = (A) => o - Math.exp(-b * A) * (x + (p + b * x) * A);
  else {
    const A = b * Math.sqrt(m * m - 1);
    g = (D) => {
      const v = Math.exp(-m * b * D),
        w = Math.min(A * D, 300);
      return (
        o - (v * ((p + m * b * x) * Math.sinh(w) + A * x * Math.cosh(w))) / A
      );
    };
  }
  const E = {
    calculatedDuration: (d && h) || null,
    next: (A) => {
      const D = g(A);
      if (d) a.done = A >= h;
      else {
        let v = A === 0 ? p : 0;
        m < 1 && (v = A === 0 ? ut(p) : yl(g, A, D));
        const w = Math.abs(v) <= n,
          P = Math.abs(o - D) <= i;
        a.done = w && P;
      }
      return (a.value = a.done ? o : D), a;
    },
    toString: () => {
      const A = Math.min(Co(E), Bi),
        D = ml((v) => E.next(A * v).value, A, 30);
      return A + "ms " + D;
    },
    toTransition: () => {},
  };
  return E;
}
Di.applyToOptions = (e) => {
  const t = op(e, 100, Di);
  return (
    (e.ease = t.ease), (e.duration = ut(t.duration)), (e.type = "keyframes"), e
  );
};
function Ss({
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
    d = (w) => (a !== void 0 && w < a) || (l !== void 0 && w > l),
    p = (w) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - w) < Math.abs(l - w)
          ? a
          : l;
  let m = r * t;
  const x = h + m,
    b = o === void 0 ? x : o(x);
  b !== x && (m = b - h);
  const y = (w) => -m * Math.exp(-w / n),
    g = (w) => b + y(w),
    E = (w) => {
      const P = y(w),
        B = g(w);
      (f.done = Math.abs(P) <= c), (f.value = f.done ? b : B);
    };
  let A, D;
  const v = (w) => {
    d(f.value) &&
      ((A = w),
      (D = Di({
        keyframes: [f.value, p(f.value)],
        velocity: yl(g, w, f.value),
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
      next: (w) => {
        let P = !1;
        return (
          !D && A === void 0 && ((P = !0), E(w), v(w)),
          A !== void 0 && w >= A ? D.next(w - A) : (!P && E(w), f)
        );
      },
    }
  );
}
function pp(e, t, r) {
  const n = [],
    i = r || gt.mix || xl,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Qe : t;
      a = sn(l, a);
    }
    n.push(a);
  }
  return n;
}
function xp(e, t, { clamp: r = !0, ease: n, mixer: i } = {}) {
  const s = e.length;
  if ((ho(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = pp(t, n, i),
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
function mp(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const i = Zr(0, t, n);
    e.push(ge(r, 1, i));
  }
}
function yp(e) {
  const t = [0];
  return mp(t, e.length - 1), t;
}
function gp(e, t) {
  return e.map((r) => r * t);
}
function vp(e, t) {
  return e.map(() => t || sl).splice(0, e.length - 1);
}
function $r({
  duration: e = 300,
  keyframes: t,
  times: r,
  ease: n = "easeInOut",
}) {
  const i = Td(n) ? n.map(t0) : t0(n),
    s = { done: !1, value: t[0] },
    o = gp(r && r.length === t.length ? r : yp(t), e),
    a = xp(o, t, { ease: Array.isArray(i) ? i : vp(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
  };
}
const Ep = (e) => e !== null;
function Bo(e, { repeat: t, repeatType: r = "loop" }, n, i = 1) {
  const s = e.filter(Ep),
    a = i < 0 || (t && r !== "loop" && t % 2 === 1) ? 0 : s.length - 1;
  return !a || n === void 0 ? s[a] : n;
}
const bp = { decay: Ss, inertia: Ss, tween: $r, keyframes: $r, spring: Di };
function gl(e) {
  typeof e.type == "string" && (e.type = bp[e.type]);
}
class Do {
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
const Ap = (e) => e / 100;
class wo extends Do {
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
    gl(t);
    const {
      type: r = $r,
      repeat: n = 0,
      repeatDelay: i = 0,
      repeatType: s,
      velocity: o = 0,
    } = t;
    let { keyframes: a } = t;
    const l = r || $r;
    l !== $r &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = sn(Ap, xl(a[0], a[1]))), (a = [0, 100]));
    const c = l(oe(I({}, t), { keyframes: a }));
    s === "mirror" &&
      (this.mirroredGenerator = l(
        oe(I({}, t), { keyframes: [...a].reverse(), velocity: -o }),
      )),
      c.calculatedDuration === null && (c.calculatedDuration = Co(c));
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
      const w = Math.min(this.currentTime, i) / a;
      let P = Math.floor(w),
        B = w % 1;
      !B && w >= 1 && (B = 1),
        B === 1 && P--,
        (P = Math.min(P, h + 1)),
        !!(P % 2) &&
          (f === "reverse"
            ? ((B = 1 - B), d && (B -= d / a))
            : f === "mirror" && (E = o)),
        (g = yt(0, 1, B) * a);
    }
    const A = y ? { done: !1, value: u[0] } : E.next(g);
    s && (A.value = s(A.value));
    let { done: D } = A;
    !y &&
      l !== null &&
      (D =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const v =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && D));
    return (
      v && p !== Ss && (A.value = Bo(u, this.options, x, this.speed)),
      m && m(A.value),
      v && this.finish(),
      A
    );
  }
  then(t, r) {
    return this.finished.then(t, r);
  }
  get duration() {
    return Je(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + Je(t);
  }
  get time() {
    return Je(this.currentTime);
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
    (this.playbackSpeed = t), r && (this.time = Je(this.currentTime));
  }
  play() {
    var i, s;
    if (this.isStopped) return;
    const { driver: t = sp, startTime: r } = this.options;
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
function Cp(e) {
  var t;
  for (let r = 1; r < e.length; r++) (t = e[r]) != null || (e[r] = e[r - 1]);
}
const Ut = (e) => (e * 180) / Math.PI,
  _s = (e) => {
    const t = Ut(Math.atan2(e[1], e[0]));
    return Ts(t);
  },
  Bp = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: _s,
    rotateZ: _s,
    skewX: (e) => Ut(Math.atan(e[1])),
    skewY: (e) => Ut(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  Ts = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  a0 = _s,
  c0 = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  l0 = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  Dp = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: c0,
    scaleY: l0,
    scale: (e) => (c0(e) + l0(e)) / 2,
    rotateX: (e) => Ts(Ut(Math.atan2(e[6], e[5]))),
    rotateY: (e) => Ts(Ut(Math.atan2(-e[2], e[0]))),
    rotateZ: a0,
    rotate: a0,
    skewX: (e) => Ut(Math.atan(e[4])),
    skewY: (e) => Ut(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function Rs(e) {
  return e.includes("scale") ? 1 : 0;
}
function Ps(e, t) {
  if (!e || e === "none") return Rs(t);
  const r = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let n, i;
  if (r) (n = Dp), (i = r);
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (n = Bp), (i = a);
  }
  if (!i) return Rs(t);
  const s = n[t],
    o = i[1].split(",").map(Fp);
  return typeof s == "function" ? s(o) : o[s];
}
const wp = (e, t) => {
  const { transform: r = "none" } = getComputedStyle(e);
  return Ps(r, t);
};
function Fp(e) {
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
  u0 = (e) => e === vr || e === J,
  Sp = new Set(["x", "y", "z"]),
  _p = Er.filter((e) => !Sp.has(e));
function Tp(e) {
  const t = [];
  return (
    _p.forEach((r) => {
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
  x: (e, { transform: t }) => Ps(t, "x"),
  y: (e, { transform: t }) => Ps(t, "y"),
};
jt.translateX = jt.x;
jt.translateY = jt.y;
const zt = new Set();
let ks = !1,
  Ls = !1,
  Os = !1;
function vl() {
  if (Ls) {
    const e = Array.from(zt).filter((n) => n.needsMeasurement),
      t = new Set(e.map((n) => n.element)),
      r = new Map();
    t.forEach((n) => {
      const i = Tp(n);
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
  (Ls = !1), (ks = !1), zt.forEach((e) => e.complete(Os)), zt.clear();
}
function El() {
  zt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Ls = !0);
  });
}
function Rp() {
  (Os = !0), El(), vl(), (Os = !1);
}
class Fo {
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
          ks || ((ks = !0), ye.read(El), ye.resolveKeyframes(vl)))
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
    Cp(t);
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
const Pp = (e) => e.startsWith("--");
function kp(e, t, r) {
  Pp(t) ? e.style.setProperty(t, r) : (e.style[t] = r);
}
const Lp = po(() => window.ScrollTimeline !== void 0),
  Op = {};
function Mp(e, t) {
  const r = po(e);
  return () => {
    var n;
    return (n = Op[t]) != null ? n : r();
  };
}
const bl = Mp(() => {
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
  f0 = {
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
function Al(e, t) {
  if (e)
    return typeof e == "function"
      ? bl()
        ? ml(e, t)
        : "ease-out"
      : ol(e)
        ? jr(e)
        : Array.isArray(e)
          ? e.map((r) => Al(r, t) || f0.easeOut)
          : f0[e];
}
function Vp(
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
  const h = Al(a, i);
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
function Cl(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function Np(r) {
  var n = r,
    { type: e } = n,
    t = Xe(n, ["type"]);
  var i, s;
  return Cl(e) && bl()
    ? e.applyToOptions(t)
    : ((i = t.duration) != null || (t.duration = 300),
      (s = t.ease) != null || (t.ease = "easeOut"),
      t);
}
class Ip extends Do {
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
      ho(typeof t.type != "string");
    const c = Np(t);
    (this.animation = Vp(r, n, i, c, s)),
      c.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !s)) {
          const u = Bo(i, this.options, a, this.speed);
          this.updateMotionValue ? this.updateMotionValue(u) : kp(r, n, u),
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
    return Je(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + Je(t);
  }
  get time() {
    return Je(Number(this.animation.currentTime) || 0);
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
      t && Lp() ? ((this.animation.timeline = t), Qe) : r(this)
    );
  }
}
const Bl = { anticipate: rl, backInOut: tl, circInOut: il };
function Up(e) {
  return e in Bl;
}
function Hp(e) {
  typeof e.ease == "string" && Up(e.ease) && (e.ease = Bl[e.ease]);
}
const h0 = 10;
class jp extends Ip {
  constructor(t) {
    Hp(t),
      gl(t),
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
    const a = new wo(oe(I({}, o), { autoplay: !1 })),
      l = ut((u = this.finishedTime) != null ? u : this.time);
    r.setWithVelocity(a.sample(l - h0).value, a.sample(l).value, h0), a.stop();
  }
}
const d0 = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (wt.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function zp(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let r = 0; r < e.length; r++) if (e[r] !== t) return !0;
}
function qp(e, t, r, n) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = d0(i, t),
    a = d0(s, t);
  return !o || !a ? !1 : zp(e) || ((r === "spring" || Cl(r)) && n);
}
function Ms(e) {
  (e.duration = 0), (e.type = "keyframes");
}
const Wp = new Set(["opacity", "clipPath", "filter", "transform"]),
  $p = po(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Kp(e) {
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
    $p() &&
    r &&
    Wp.has(r) &&
    (r !== "transform" || !c) &&
    !l &&
    !n &&
    i !== "mirror" &&
    s !== 0 &&
    o !== "inertia"
  );
}
const Xp = 40;
class Gp extends Do {
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
    const p = I(
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
      m = (u == null ? void 0 : u.KeyframeResolver) || Fo;
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
      qp(t, s, o, a) ||
        ((gt.instantAnimations || !l) && (u == null || u(Bo(t, n, r))),
        (t[0] = t[t.length - 1]),
        Ms(n),
        (n.repeat = 0));
    const h = i
        ? this.resolvedAt
          ? this.resolvedAt - this.createdAt > Xp
            ? this.resolvedAt
            : this.createdAt
          : this.createdAt
        : void 0,
      f = oe(I({ startTime: h, finalKeyframe: r }, n), { keyframes: t }),
      d =
        !c && Kp(f)
          ? new jp(oe(I({}, f), { element: f.motionValue.owner.current }))
          : new wo(f);
    d.finished.then(() => this.notifyFinished()).catch(Qe),
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
        ((t = this.keyframeResolver) == null || t.resume(), Rp()),
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
const Yp = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Zp(e) {
  const t = Yp.exec(e);
  if (!t) return [,];
  const [, r, n, i] = t;
  return [`--${r != null ? r : n}`, i];
}
function Dl(e, t, r = 1) {
  const [n, i] = Zp(e);
  if (!n) return;
  const s = window.getComputedStyle(t).getPropertyValue(n);
  if (s) {
    const o = s.trim();
    return Kc(o) ? parseFloat(o) : o;
  }
  return vo(i) ? Dl(i, t, r + 1) : i;
}
function So(e, t) {
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
const wl = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Er,
  ]),
  Jp = { test: (e) => e === "auto", parse: (e) => e },
  Fl = (e) => (t) => t.test(e),
  Sl = [vr, J, ft, At, zd, jd, Jp],
  p0 = (e) => Sl.find(Fl(e));
function Qp(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || Gc(e)
      : !0;
}
const ex = new Set(["brightness", "contrast", "saturate", "opacity"]);
function tx(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [n] = r.match(Eo) || [];
  if (!n) return e;
  const i = r.replace(n, "");
  let s = ex.has(t) ? 1 : 0;
  return n !== r && (s *= 100), t + "(" + s + i + ")";
}
const rx = /\b([a-z-]*)\(.*?\)/gu,
  Vs = oe(I({}, wt), {
    getAnimatableNone: (e) => {
      const t = e.match(rx);
      return t ? t.map(tx).join(" ") : e;
    },
  }),
  x0 = oe(I({}, vr), { transform: Math.round }),
  nx = {
    rotate: At,
    rotateX: At,
    rotateY: At,
    rotateZ: At,
    scale: bn,
    scaleX: bn,
    scaleY: bn,
    scaleZ: bn,
    skew: At,
    skewX: At,
    skewY: At,
    distance: J,
    translateX: J,
    translateY: J,
    translateZ: J,
    x: J,
    y: J,
    z: J,
    perspective: J,
    transformPerspective: J,
    opacity: Jr,
    originX: r0,
    originY: r0,
    originZ: J,
  },
  _o = oe(
    I(
      {
        borderWidth: J,
        borderTopWidth: J,
        borderRightWidth: J,
        borderBottomWidth: J,
        borderLeftWidth: J,
        borderRadius: J,
        radius: J,
        borderTopLeftRadius: J,
        borderTopRightRadius: J,
        borderBottomRightRadius: J,
        borderBottomLeftRadius: J,
        width: J,
        maxWidth: J,
        height: J,
        maxHeight: J,
        top: J,
        right: J,
        bottom: J,
        left: J,
        padding: J,
        paddingTop: J,
        paddingRight: J,
        paddingBottom: J,
        paddingLeft: J,
        margin: J,
        marginTop: J,
        marginRight: J,
        marginBottom: J,
        marginLeft: J,
        backgroundPositionX: J,
        backgroundPositionY: J,
      },
      nx,
    ),
    { zIndex: x0, fillOpacity: Jr, strokeOpacity: Jr, numOctaves: x0 },
  ),
  ix = oe(I({}, _o), {
    color: we,
    backgroundColor: we,
    outlineColor: we,
    fill: we,
    stroke: we,
    borderColor: we,
    borderTopColor: we,
    borderRightColor: we,
    borderBottomColor: we,
    borderLeftColor: we,
    filter: Vs,
    WebkitFilter: Vs,
  }),
  _l = (e) => ix[e];
function Tl(e, t) {
  let r = _l(e);
  return (
    r !== Vs && (r = wt), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
  );
}
const sx = new Set(["auto", "none", "0"]);
function ox(e, t, r) {
  let n = 0,
    i;
  for (; n < e.length && !i; ) {
    const s = e[n];
    typeof s == "string" && !sx.has(s) && Qr(s).values.length && (i = e[n]),
      n++;
  }
  if (i && r) for (const s of t) e[s] = Tl(r, i);
}
class ax extends Fo {
  constructor(t, r, n, i, s) {
    super(t, r, n, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: r, name: n } = this;
    if (!r || !r.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && ((c = c.trim()), vo(c))) {
        const u = Dl(c, r.current);
        u !== void 0 && (t[l] = u),
          l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !wl.has(n) || t.length !== 2)) return;
    const [i, s] = t,
      o = p0(i),
      a = p0(s);
    if (o !== a)
      if (u0(o) && u0(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else jt[n] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: r } = this,
      n = [];
    for (let i = 0; i < t.length; i++) (t[i] === null || Qp(t[i])) && n.push(i);
    n.length && ox(t, n, r);
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
function cx(e, t, r) {
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
const Rl = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function Pl(e) {
  return Xc(e) && "offsetHeight" in e;
}
const m0 = 30,
  lx = (e) => !isNaN(parseFloat(e));
class ux {
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
        (this.canTrackVelocity = lx(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new xo());
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
      t - this.updatedAt > m0
    )
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, m0);
    return Yc(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
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
  return new ux(e, t);
}
const { schedule: To } = al(queueMicrotask, !1),
  tt = { x: !1, y: !1 };
function kl() {
  return tt.x || tt.y;
}
function fx(e) {
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
function Ll(e, t) {
  const r = cx(e),
    n = new AbortController(),
    i = oe(I({ passive: !0 }, t), { signal: n.signal });
  return [r, i, () => n.abort()];
}
function y0(e) {
  return !(e.pointerType === "touch" || kl());
}
function hx(e, t, r = {}) {
  const [n, i, s] = Ll(e, r),
    o = (a) => {
      if (!y0(a)) return;
      const { target: l } = a,
        c = t(l, a);
      if (typeof c != "function" || !l) return;
      const u = (h) => {
        y0(h) && (c(h), l.removeEventListener("pointerleave", u));
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
const Ol = (e, t) => (t ? (e === t ? !0 : Ol(e, t.parentElement)) : !1),
  Ro = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  dx = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function px(e) {
  return dx.has(e.tagName) || e.tabIndex !== -1;
}
const fi = new WeakSet();
function g0(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function is(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const xx = (e, t) => {
  const r = e.currentTarget;
  if (!r) return;
  const n = g0(() => {
    if (fi.has(r)) return;
    is(r, "down");
    const i = g0(() => {
        is(r, "up");
      }),
      s = () => is(r, "cancel");
    r.addEventListener("keyup", i, t), r.addEventListener("blur", s, t);
  });
  r.addEventListener("keydown", n, t),
    r.addEventListener("blur", () => r.removeEventListener("keydown", n), t);
};
function v0(e) {
  return Ro(e) && !kl();
}
function mx(e, t, r = {}) {
  const [n, i, s] = Ll(e, r),
    o = (a) => {
      const l = a.currentTarget;
      if (!v0(a)) return;
      fi.add(l);
      const c = t(l, a),
        u = (d, p) => {
          window.removeEventListener("pointerup", h),
            window.removeEventListener("pointercancel", f),
            fi.has(l) && fi.delete(l),
            v0(d) && typeof c == "function" && c(d, { success: p });
        },
        h = (d) => {
          u(
            d,
            l === window ||
              l === document ||
              r.useGlobalTarget ||
              Ol(l, d.target),
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
        Pl(a) &&
          (a.addEventListener("focus", (c) => xx(c, i)),
          !px(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
    }),
    s
  );
}
function Ml(e) {
  return Xc(e) && "ownerSVGElement" in e;
}
function yx(e) {
  return Ml(e) && e.tagName === "svg";
}
const Me = (e) => !!(e && e.getVelocity),
  gx = [...Sl, we, wt],
  vx = (e) => gx.find(Fl(e)),
  Po = $.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function E0(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Ex(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((i) => {
      const s = E0(i, t);
      return !r && typeof s == "function" && (r = !0), s;
    });
    if (r)
      return () => {
        for (let i = 0; i < n.length; i++) {
          const s = n[i];
          typeof s == "function" ? s() : E0(e[i], null);
        }
      };
  };
}
function bx(...e) {
  return $.useCallback(Ex(...e), e);
}
class Ax extends $.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const n = r.offsetParent,
        i = (Pl(n) && n.offsetWidth) || 0,
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
function Cx({ children: e, isPresent: t, anchorX: r, root: n }) {
  const i = $.useId(),
    s = $.useRef(null),
    o = $.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: a } = $.useContext(Po),
    l = bx(s, e == null ? void 0 : e.ref);
  return (
    $.useInsertionEffect(() => {
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
    mt.jsx(Ax, {
      isPresent: t,
      childRef: s,
      sizeRef: o,
      children: $.cloneElement(e, { ref: l }),
    })
  );
}
const Bx = ({
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
  const c = co(Dx),
    u = $.useId();
  let h = !0,
    f = $.useMemo(
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
    s && h && (f = I({}, f)),
    $.useMemo(() => {
      c.forEach((d, p) => c.set(p, !1));
    }, [r]),
    $.useEffect(() => {
      !r && !c.size && n && n();
    }, [r]),
    o === "popLayout" &&
      (e = mt.jsx(Cx, { isPresent: r, anchorX: a, root: l, children: e })),
    mt.jsx(Ri.Provider, { value: f, children: e })
  );
};
function Dx() {
  return new Map();
}
function Vl(e = !0) {
  const t = $.useContext(Ri);
  if (t === null) return [!0, null];
  const { isPresent: r, onExitComplete: n, register: i } = t,
    s = $.useId();
  $.useEffect(() => {
    if (e) return i(s);
  }, [e]);
  const o = $.useCallback(() => e && n && n(s), [s, n, e]);
  return !r && n ? [!1, o] : [!0];
}
const An = (e) => e.key || "";
function b0(e) {
  const t = [];
  return (
    $.Children.forEach(e, (r) => {
      $.isValidElement(r) && t.push(r);
    }),
    t
  );
}
const Rv = ({
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
    const [c, u] = Vl(o),
      h = $.useMemo(() => b0(e), [e]),
      f = o && !c ? [] : h.map(An),
      d = $.useRef(!0),
      p = $.useRef(h),
      m = co(() => new Map()),
      [x, b] = $.useState(h),
      [y, g] = $.useState(h);
    $c(() => {
      (d.current = !1), (p.current = h);
      for (let D = 0; D < y.length; D++) {
        const v = An(y[D]);
        f.includes(v) ? m.delete(v) : m.get(v) !== !0 && m.set(v, !1);
      }
    }, [y, f.length, f.join("-")]);
    const E = [];
    if (h !== x) {
      let D = [...h];
      for (let v = 0; v < y.length; v++) {
        const w = y[v],
          P = An(w);
        f.includes(P) || (D.splice(v, 0, w), E.push(w));
      }
      return s === "wait" && E.length && (D = E), g(b0(D)), b(h), null;
    }
    const { forceRender: A } = $.useContext(ao);
    return mt.jsx(mt.Fragment, {
      children: y.map((D) => {
        const v = An(D),
          w = o && !c ? !1 : h === y || f.includes(v),
          P = () => {
            if (m.has(v)) m.set(v, !0);
            else return;
            let B = !0;
            m.forEach((S) => {
              S || (B = !1);
            }),
              B &&
                (A == null || A(),
                g(p.current),
                o && (u == null || u()),
                n && n());
          };
        return mt.jsx(
          Bx,
          {
            isPresent: w,
            initial: !d.current || r ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: i,
            mode: s,
            root: l,
            onExitComplete: w ? void 0 : P,
            anchorX: a,
            children: D,
          },
          v,
        );
      }),
    });
  },
  Nl = $.createContext({ strict: !1 }),
  A0 = {
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
for (const e in A0) yr[e] = { isEnabled: (t) => A0[e].some((r) => !!t[r]) };
function wx(e) {
  for (const t in e) yr[t] = I(I({}, yr[t]), e[t]);
}
const Fx = new Set([
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
function wi(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    Fx.has(e)
  );
}
let Il = (e) => !wi(e);
function Sx(e) {
  typeof e == "function" && (Il = (t) => (t.startsWith("on") ? !wi(t) : e(t)));
}
try {
  Sx(require("@emotion/is-prop-valid").default);
} catch (e) {}
function _x(e, t, r) {
  const n = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Il(i) ||
        (r === !0 && wi(i)) ||
        (!t && !wi(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (n[i] = e[i]));
  return n;
}
const Pi = $.createContext({});
function ki(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function en(e) {
  return typeof e == "string" || Array.isArray(e);
}
const ko = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Lo = ["initial", ...ko];
function Li(e) {
  return ki(e.animate) || Lo.some((t) => en(e[t]));
}
function Ul(e) {
  return !!(Li(e) || e.variants);
}
function Tx(e, t) {
  if (Li(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || en(r) ? r : void 0,
      animate: en(n) ? n : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Rx(e) {
  const { initial: t, animate: r } = Tx(e, $.useContext(Pi));
  return $.useMemo(() => ({ initial: t, animate: r }), [C0(t), C0(r)]);
}
function C0(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const tn = {};
function Px(e) {
  for (const t in e) (tn[t] = e[t]), go(t) && (tn[t].isCSSVariable = !0);
}
function Hl(e, { layout: t, layoutId: r }) {
  return (
    br.has(e) ||
    e.startsWith("origin") ||
    ((t || r !== void 0) && (!!tn[e] || e === "opacity"))
  );
}
const kx = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Lx = Er.length;
function Ox(e, t, r) {
  let n = "",
    i = !0;
  for (let s = 0; s < Lx; s++) {
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
      const c = Rl(a, _o[o]);
      if (!l) {
        i = !1;
        const u = kx[o] || o;
        n += `${u}(${c}) `;
      }
      r && (t[o] = c);
    }
  }
  return (n = n.trim()), r ? (n = r(t, i ? "" : n)) : i && (n = "none"), n;
}
function Oo(e, t, r) {
  const { style: n, vars: i, transformOrigin: s } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const c = t[l];
    if (br.has(l)) {
      o = !0;
      continue;
    } else if (go(l)) {
      i[l] = c;
      continue;
    } else {
      const u = Rl(c, _o[l]);
      l.startsWith("origin") ? ((a = !0), (s[l] = u)) : (n[l] = u);
    }
  }
  if (
    (t.transform ||
      (o || r
        ? (n.transform = Ox(t, e.transform, r))
        : n.transform && (n.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = s;
    n.transformOrigin = `${l} ${c} ${u}`;
  }
}
const Mo = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function jl(e, t, r) {
  for (const n in t) !Me(t[n]) && !Hl(n, r) && (e[n] = t[n]);
}
function Mx({ transformTemplate: e }, t) {
  return $.useMemo(() => {
    const r = Mo();
    return Oo(r, t, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function Vx(e, t) {
  const r = e.style || {},
    n = {};
  return jl(n, r, e), Object.assign(n, Mx(e, t)), n;
}
function Nx(e, t) {
  const r = {},
    n = Vx(e, t);
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
const Ix = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Ux = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Hx(e, t, r = 1, n = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? Ix : Ux;
  e[s.offset] = J.transform(-n);
  const o = J.transform(t),
    a = J.transform(r);
  e[s.array] = `${o} ${a}`;
}
function zl(e, h, l, c, u) {
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
  if ((Oo(e, a, c), l)) {
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
    i !== void 0 && Hx(d, i, s, o, !1);
}
const ql = () => oe(I({}, Mo()), { attrs: {} }),
  Wl = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function jx(e, t, r, n) {
  const i = $.useMemo(() => {
    const s = ql();
    return (
      zl(s, t, Wl(n), e.transformTemplate, e.style),
      oe(I({}, s.attrs), { style: I({}, s.style) })
    );
  }, [t]);
  if (e.style) {
    const s = {};
    jl(s, e.style, e), (i.style = I(I({}, s), i.style));
  }
  return i;
}
const zx = [
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
function Vo(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(zx.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function qx(e, t, r, { latestValues: n }, i, s = !1) {
  const a = (Vo(e) ? jx : Nx)(t, n, i, e),
    l = _x(t, typeof e == "string", s),
    c = e !== $.Fragment ? oe(I(I({}, l), a), { ref: r }) : {},
    { children: u } = t,
    h = $.useMemo(() => (Me(u) ? u.get() : u), [u]);
  return $.createElement(e, oe(I({}, c), { children: h }));
}
function B0(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((r, n) => {
        (t[0][n] = r.get()), (t[1][n] = r.getVelocity());
      }),
    t
  );
}
function No(e, t, r, n) {
  if (typeof t == "function") {
    const [i, s] = B0(n);
    t = t(r !== void 0 ? r : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = B0(n);
    t = t(r !== void 0 ? r : e.custom, i, s);
  }
  return t;
}
function hi(e) {
  return Me(e) ? e.get() : e;
}
function Wx({ scrapeMotionValuesFromProps: e, createRenderState: t }, r, n, i) {
  return { latestValues: $x(r, n, i, e), renderState: t() };
}
function $x(e, t, r, n) {
  const i = {},
    s = n(e, {});
  for (const d in s) i[d] = hi(s[d]);
  let { initial: o, animate: a } = e;
  const l = Li(e),
    c = Ul(e);
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
      const m = No(e, d[p]);
      if (m) {
        const f = m,
          { transitionEnd: x, transition: b } = f,
          y = Xe(f, ["transitionEnd", "transition"]);
        for (const g in y) {
          let E = y[g];
          if (Array.isArray(E)) {
            const A = u ? E.length - 1 : 0;
            E = E[A];
          }
          E !== null && (i[g] = E);
        }
        for (const g in x) i[g] = x[g];
      }
    }
  }
  return i;
}
const $l = (e) => (t, r) => {
  const n = $.useContext(Pi),
    i = $.useContext(Ri),
    s = () => Wx(e, t, n, i);
  return r ? s() : co(s);
};
function Io(e, t, r) {
  var s;
  const { style: n } = e,
    i = {};
  for (const o in n)
    (Me(n[o]) ||
      (t.style && Me(t.style[o])) ||
      Hl(o, e) ||
      ((s = r == null ? void 0 : r.getValue(o)) == null
        ? void 0
        : s.liveStyle) !== void 0) &&
      (i[o] = n[o]);
  return i;
}
const Kx = $l({ scrapeMotionValuesFromProps: Io, createRenderState: Mo });
function Kl(e, t, r) {
  const n = Io(e, t, r);
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
const Xx = $l({ scrapeMotionValuesFromProps: Kl, createRenderState: ql }),
  Gx = Symbol.for("motionComponentSymbol");
function lr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Yx(e, t, r) {
  return $.useCallback(
    (n) => {
      n && e.onMount && e.onMount(n),
        t && (n ? t.mount(n) : t.unmount()),
        r && (typeof r == "function" ? r(n) : lr(r) && (r.current = n));
    },
    [t],
  );
}
const Uo = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Zx = "framerAppearId",
  Xl = "data-" + Uo(Zx),
  Gl = $.createContext({});
function Jx(e, t, r, n, i) {
  var m, x;
  const { visualElement: s } = $.useContext(Pi),
    o = $.useContext(Nl),
    a = $.useContext(Ri),
    l = $.useContext(Po).reducedMotion,
    c = $.useRef(null);
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
    h = $.useContext(Gl);
  u &&
    !u.projection &&
    i &&
    (u.type === "html" || u.type === "svg") &&
    Qx(c.current, r, i, h);
  const f = $.useRef(!1);
  $.useInsertionEffect(() => {
    u && f.current && u.update(r, a);
  });
  const d = r[Xl],
    p = $.useRef(
      !!d &&
        !((m = window.MotionHandoffIsComplete) != null && m.call(window, d)) &&
        ((x = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : x.call(window, d)),
    );
  return (
    $c(() => {
      u &&
        ((f.current = !0),
        (window.MotionIsMounted = !0),
        u.updateFeatures(),
        u.scheduleRenderMicrotask(),
        p.current && u.animationState && u.animationState.animateChanges());
    }),
    $.useEffect(() => {
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
function Qx(e, t, r, n) {
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
    t["data-framer-portal-id"] ? void 0 : Yl(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && lr(a)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: n,
      crossfade: u,
      layoutScroll: l,
      layoutRoot: c,
    });
}
function Yl(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Yl(e.parent);
}
function ss(e, { forwardMotionProps: t = !1 } = {}, r, n) {
  var a, l;
  r && wx(r);
  const i = Vo(e) ? Xx : Kx;
  function s(c, u) {
    let h;
    const f = oe(I(I({}, $.useContext(Po)), c), { layoutId: em(c) }),
      { isStatic: d } = f,
      p = Rx(c),
      m = i(c, d);
    if (!d && lo) {
      tm();
      const x = rm(f);
      (h = x.MeasureLayout),
        (p.visualElement = Jx(e, m, f, n, x.ProjectionNode));
    }
    return mt.jsxs(Pi.Provider, {
      value: p,
      children: [
        h && p.visualElement
          ? mt.jsx(h, I({ visualElement: p.visualElement }, f))
          : null,
        qx(e, c, Yx(m, p.visualElement, u), m, d, t),
      ],
    });
  }
  s.displayName = `motion.${typeof e == "string" ? e : `create(${(l = (a = e.displayName) != null ? a : e.name) != null ? l : ""})`}`;
  const o = $.forwardRef(s);
  return (o[Gx] = e), o;
}
function em({ layoutId: e }) {
  const t = $.useContext(ao).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function tm(e, t) {
  $.useContext(Nl).strict;
}
function rm(e) {
  const { drag: t, layout: r } = yr;
  if (!t && !r) return {};
  const n = I(I({}, t), r);
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (r != null && r.isEnabled(e))
        ? n.MeasureLayout
        : void 0,
    ProjectionNode: n.ProjectionNode,
  };
}
function nm(e, t) {
  if (typeof Proxy == "undefined") return ss;
  const r = new Map(),
    n = (s, o) => ss(s, o, e, t),
    i = (s, o) => n(s, o);
  return new Proxy(i, {
    get: (s, o) =>
      o === "create"
        ? n
        : (r.has(o) || r.set(o, ss(o, void 0, e, t)), r.get(o)),
  });
}
function Zl({ top: e, left: t, right: r, bottom: n }) {
  return { x: { min: t, max: r }, y: { min: e, max: n } };
}
function im({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function sm(e, t) {
  if (!t) return e;
  const r = t({ x: e.left, y: e.top }),
    n = t({ x: e.right, y: e.bottom });
  return { top: r.y, left: r.x, bottom: n.y, right: n.x };
}
function os(e) {
  return e === void 0 || e === 1;
}
function Ns({ scale: e, scaleX: t, scaleY: r }) {
  return !os(e) || !os(t) || !os(r);
}
function Mt(e) {
  return (
    Ns(e) ||
    Jl(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Jl(e) {
  return D0(e.x) || D0(e.y);
}
function D0(e) {
  return e && e !== "0%";
}
function Fi(e, t, r) {
  const n = e - r,
    i = t * n;
  return r + i;
}
function w0(e, t, r, n, i) {
  return i !== void 0 && (e = Fi(e, i, n)), Fi(e, r, n) + t;
}
function Is(e, t = 0, r = 1, n, i) {
  (e.min = w0(e.min, t, r, n, i)), (e.max = w0(e.max, t, r, n, i));
}
function Ql(e, { x: t, y: r }) {
  Is(e.x, t.translate, t.scale, t.originPoint),
    Is(e.y, r.translate, r.scale, r.originPoint);
}
const F0 = 0.999999999999,
  S0 = 1.0000000000001;
function om(e, t, r, n = !1) {
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
        fr(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Ql(e, o)),
      n && Mt(s.latestValues) && fr(e, s.latestValues));
  }
  t.x < S0 && t.x > F0 && (t.x = 1), t.y < S0 && t.y > F0 && (t.y = 1);
}
function ur(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function _0(e, t, r, n, i = 0.5) {
  const s = ge(e.min, e.max, i);
  Is(e, t, r, s, n);
}
function fr(e, t) {
  _0(e.x, t.x, t.scaleX, t.scale, t.originX),
    _0(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function eu(e, t) {
  return Zl(sm(e.getBoundingClientRect(), t));
}
function am(e, t, r) {
  const n = eu(e, r),
    { scroll: i } = t;
  return i && (ur(n.x, i.offset.x), ur(n.y, i.offset.y)), n;
}
const T0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  hr = () => ({ x: T0(), y: T0() }),
  R0 = () => ({ min: 0, max: 0 }),
  Be = () => ({ x: R0(), y: R0() }),
  Us = { current: null },
  tu = { current: !1 };
function cm() {
  if (((tu.current = !0), !!lo))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Us.current = e.matches);
      e.addEventListener("change", t), t();
    } else Us.current = !1;
}
const lm = new WeakMap();
function um(e, t, r) {
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
const P0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class fm {
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
      (this.KeyframeResolver = Fo),
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
      (this.baseTarget = I({}, l)),
      (this.initialValues = r.initial ? I({}, l) : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = r),
      (this.presenceContext = n),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = Li(r)),
      (this.isVariantNode = Ul(r)),
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
      lm.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, i) => this.bindToMotionValue(i, n)),
      tu.current || cm(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Us.current),
      (r = this.parent) == null || r.addChild(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(),
      Dt(this.notifyUpdate),
      Dt(this.render),
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
    for (let n = 0; n < P0.length; n++) {
      const i = P0[n];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = um(
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
        (typeof n == "string" && (Kc(n) || Gc(n))
          ? (n = parseFloat(n))
          : !vx(n) && wt.test(r) && (n = Tl(t, r)),
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
      const o = No(
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
    return this.events[t] || (this.events[t] = new xo()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
  scheduleRenderMicrotask() {
    To.render(this.render);
  }
}
class ru extends fm {
  constructor() {
    super(...arguments), (this.KeyframeResolver = ax);
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
function nu(e, { style: t, vars: r }, n, i) {
  const s = e.style;
  let o;
  for (o in t) s[o] = t[o];
  i == null || i.applyProjectionStyles(s, n);
  for (o in r) s.setProperty(o, r[o]);
}
function hm(e) {
  return window.getComputedStyle(e);
}
class dm extends ru {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = nu);
  }
  readValueFromInstance(t, r) {
    var n;
    if (br.has(r))
      return (n = this.projection) != null && n.isProjecting ? Rs(r) : wp(t, r);
    {
      const i = hm(t),
        s = (go(r) ? i.getPropertyValue(r) : i[r]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return eu(t, r);
  }
  build(t, r, n) {
    Oo(t, r, n.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r, n) {
    return Io(t, r, n);
  }
}
const iu = new Set([
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
function pm(e, t, r, n) {
  nu(e, t, void 0, n);
  for (const i in t.attrs) e.setAttribute(iu.has(i) ? i : Uo(i), t.attrs[i]);
}
class xm extends ru {
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
      const n = _l(r);
      return (n && n.default) || 0;
    }
    return (r = iu.has(r) ? r : Uo(r)), t.getAttribute(r);
  }
  scrapeMotionValuesFromProps(t, r, n) {
    return Kl(t, r, n);
  }
  build(t, r, n) {
    zl(t, r, this.isSVGTag, n.transformTemplate, n.style);
  }
  renderInstance(t, r, n, i) {
    pm(t, r, n, i);
  }
  mount(t) {
    (this.isSVGTag = Wl(t.tagName)), super.mount(t);
  }
}
const mm = (e, t) =>
  Vo(e) ? new xm(t) : new dm(t, { allowProjection: e !== $.Fragment });
function dr(e, t, r) {
  const n = e.getProps();
  return No(n, t, r !== void 0 ? r : n.custom, e);
}
const Hs = (e) => Array.isArray(e);
function ym(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, mr(r));
}
function gm(e) {
  return Hs(e) ? e[e.length - 1] || 0 : e;
}
function vm(e, t) {
  let o = dr(e, t) || {},
    { transitionEnd: n = {}, transition: i = {} } = o,
    s = Xe(o, ["transitionEnd", "transition"]);
  s = I(I({}, s), n);
  for (const a in s) {
    const l = gm(s[a]);
    ym(e, a, l);
  }
}
function Em(e) {
  return !!(Me(e) && e.add);
}
function js(e, t) {
  const r = e.getValue("willChange");
  if (Em(r)) return r.add(t);
  if (!r && gt.WillChange) {
    const n = new gt.WillChange("auto");
    e.addValue("willChange", n), n.add(t);
  }
}
function su(e) {
  return e.props[Xl];
}
const bm = (e) => e !== null;
function Am(e, { repeat: t, repeatType: r = "loop" }, n) {
  const i = e.filter(bm),
    s = t && r !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return i[s];
}
const Cm = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Bm = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Dm = { type: "keyframes", duration: 0.8 },
  wm = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Fm = (e, { keyframes: t }) =>
    t.length > 2
      ? Dm
      : br.has(e)
        ? e.startsWith("scale")
          ? Bm(t[1])
          : Cm
        : wm;
function Sm(h) {
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
const Ho =
  (e, t, r, n = {}, i, s) =>
  (o) => {
    const a = So(n, e) || {},
      l = a.delay || n.delay || 0;
    let { elapsed: c = 0 } = n;
    c = c - ut(l);
    const u = oe(
      I(
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
    Sm(a) || Object.assign(u, Fm(e, u)),
      u.duration && (u.duration = ut(u.duration)),
      u.repeatDelay && (u.repeatDelay = ut(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from);
    let h = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        (Ms(u), u.delay === 0 && (h = !0)),
      (gt.instantAnimations || gt.skipAnimations) &&
        ((h = !0), Ms(u), (u.delay = 0)),
      (u.allowFlatten = !a.type && !a.ease),
      h && !s && t.get() !== void 0)
    ) {
      const f = Am(u.keyframes, a);
      if (f !== void 0) {
        ye.update(() => {
          u.onUpdate(f), u.onComplete();
        });
        return;
      }
    }
    return a.isSync ? new wo(u) : new Gp(u);
  };
function _m({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return (t[r] = !1), n;
}
function ou(e, t, { delay: r = 0, transitionOverride: n, type: i } = {}) {
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
    if (p === void 0 || (c && _m(c, f))) continue;
    const m = I({ delay: r }, So(s || {}, f)),
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
      const g = su(e);
      if (g) {
        const E = window.MotionHandoffAnimation(g, f, ye);
        E !== null && ((m.startTime = E), (b = !0));
      }
    }
    js(e, f),
      d.start(
        Ho(f, d, p, e.shouldReduceMotion && wl.has(f) ? { type: !1 } : m, e, b),
      );
    const y = d.animation;
    y && l.push(y);
  }
  return (
    o &&
      Promise.all(l).then(() => {
        ye.update(() => {
          o && vm(e, o);
        });
      }),
    l
  );
}
function au(e, t, r, n = 0, i = 1) {
  const s = Array.from(e)
      .sort((c, u) => c.sortNodePosition(u))
      .indexOf(t),
    o = e.size,
    a = (o - 1) * n;
  return typeof r == "function" ? r(s, o) : i === 1 ? s * n : a - s * n;
}
function zs(e, t, r = {}) {
  var l;
  const n = dr(
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
  const s = n ? () => Promise.all(ou(e, n, r)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: h,
              staggerDirection: f,
            } = i;
            return Tm(e, t, c, u, h, f, r);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [c, u] = a === "beforeChildren" ? [s, o] : [o, s];
    return c().then(() => u());
  } else return Promise.all([s(), o(r.delay)]);
}
function Tm(e, t, r = 0, n = 0, i = 0, s = 1, o) {
  const a = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t),
      a.push(
        zs(
          l,
          t,
          oe(I({}, o), {
            delay:
              r +
              (typeof n == "function" ? 0 : n) +
              au(e.variantChildren, l, n, i, s),
          }),
        ).then(() => l.notify("AnimationComplete", t)),
      );
  return Promise.all(a);
}
function Rm(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const i = t.map((s) => zs(e, s, r));
    n = Promise.all(i);
  } else if (typeof t == "string") n = zs(e, t, r);
  else {
    const i = typeof t == "function" ? dr(e, t, r.custom) : t;
    n = Promise.all(ou(e, i, r));
  }
  return n.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function cu(e, t) {
  if (!Array.isArray(t)) return !1;
  const r = t.length;
  if (r !== e.length) return !1;
  for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
const Pm = Lo.length;
function lu(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const r = e.parent ? lu(e.parent) || {} : {};
    return e.props.initial !== void 0 && (r.initial = e.props.initial), r;
  }
  const t = {};
  for (let r = 0; r < Pm; r++) {
    const n = Lo[r],
      i = e.props[n];
    (en(i) || i === !1) && (t[n] = i);
  }
  return t;
}
const km = [...ko].reverse(),
  Lm = ko.length;
function Om(e) {
  return (t) =>
    Promise.all(t.map(({ animation: r, options: n }) => Rm(e, r, n)));
}
function Mm(e) {
  let t = Om(e),
    r = k0(),
    n = !0;
  const i = (l) => (c, u) => {
    var f;
    const h = dr(
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
      c = I(I(I({}, c), x), m);
    }
    return c;
  };
  function s(l) {
    t = l(e);
  }
  function o(l) {
    const { props: c } = e,
      u = lu(e.parent) || {},
      h = [],
      f = new Set();
    let d = {},
      p = 1 / 0;
    for (let x = 0; x < Lm; x++) {
      const b = km[x],
        y = r[b],
        g = c[b] !== void 0 ? c[b] : u[b],
        E = en(g),
        A = b === l ? y.isActive : null;
      A === !1 && (p = x);
      let D = g === u[b] && g !== c[b] && E;
      if (
        (D && n && e.manuallyAnimateOnMount && (D = !1),
        (y.protectedKeys = I({}, d)),
        (!y.isActive && A === null) ||
          (!g && !y.prevProp) ||
          ki(g) ||
          typeof g == "boolean")
      )
        continue;
      const v = Vm(y.prevProp, g);
      let w = v || (b === l && y.isActive && !D && E) || (x > p && E),
        P = !1;
      const B = Array.isArray(g) ? g : [g];
      let S = B.reduce(i(b), {});
      A === !1 && (S = {});
      const { prevResolvedValues: k = {} } = y,
        L = I(I({}, k), S),
        H = (Z) => {
          (w = !0),
            f.has(Z) && ((P = !0), f.delete(Z)),
            (y.needsAnimating[Z] = !0);
          const j = e.getValue(Z);
          j && (j.liveStyle = !1);
        };
      for (const Z in L) {
        const j = S[Z],
          re = k[Z];
        if (d.hasOwnProperty(Z)) continue;
        let ee = !1;
        Hs(j) && Hs(re) ? (ee = !cu(j, re)) : (ee = j !== re),
          ee
            ? j != null
              ? H(Z)
              : f.add(Z)
            : j !== void 0 && f.has(Z)
              ? H(Z)
              : (y.protectedKeys[Z] = !0);
      }
      (y.prevProp = g),
        (y.prevResolvedValues = S),
        y.isActive && (d = I(I({}, d), S)),
        n && e.blockInitialAnimation && (w = !1);
      const q = D && v;
      w &&
        (!q || P) &&
        h.push(
          ...B.map((Z) => {
            const j = { type: b };
            if (
              typeof Z == "string" &&
              n &&
              !q &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: re } = e,
                ee = dr(re, Z);
              if (re.enteringChildren && ee) {
                const { delayChildren: R } = ee.transition || {};
                j.delay = au(re.enteringChildren, e, R);
              }
            }
            return { animation: Z, options: j };
          }),
        );
    }
    if (f.size) {
      const x = {};
      if (typeof c.initial != "boolean") {
        const b = dr(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
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
      r = k0();
    },
  };
}
function Vm(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !cu(t, e) : !1;
}
function Ot(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function k0() {
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
class Nm extends St {
  constructor(t) {
    super(t), t.animationState || (t.animationState = Mm(t));
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
let Im = 0;
class Um extends St {
  constructor() {
    super(...arguments), (this.id = Im++);
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
const Hm = { animation: { Feature: Nm }, exit: { Feature: Um } };
function rn(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
function cn(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const jm = (e) => (t) => Ro(t) && e(t, cn(t));
function Kr(e, t, r, n) {
  return rn(e, t, jm(r), n);
}
const uu = 1e-4,
  zm = 1 - uu,
  qm = 1 + uu,
  fu = 0.01,
  Wm = 0 - fu,
  $m = 0 + fu;
function Ve(e) {
  return e.max - e.min;
}
function Km(e, t, r) {
  return Math.abs(e - t) <= r;
}
function L0(e, t, r, n = 0.5) {
  (e.origin = n),
    (e.originPoint = ge(t.min, t.max, e.origin)),
    (e.scale = Ve(r) / Ve(t)),
    (e.translate = ge(r.min, r.max, e.origin) - e.originPoint),
    ((e.scale >= zm && e.scale <= qm) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Wm && e.translate <= $m) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Xr(e, t, r, n) {
  L0(e.x, t.x, r.x, n ? n.originX : void 0),
    L0(e.y, t.y, r.y, n ? n.originY : void 0);
}
function O0(e, t, r) {
  (e.min = r.min + t.min), (e.max = e.min + Ve(t));
}
function Xm(e, t, r) {
  O0(e.x, t.x, r.x), O0(e.y, t.y, r.y);
}
function M0(e, t, r) {
  (e.min = t.min - r.min), (e.max = e.min + Ve(t));
}
function Gr(e, t, r) {
  M0(e.x, t.x, r.x), M0(e.y, t.y, r.y);
}
function Ye(e) {
  return [e("x"), e("y")];
}
const hu = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  V0 = (e, t) => Math.abs(e - t);
function Gm(e, t) {
  const r = V0(e.x, t.x),
    n = V0(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class du {
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
        const f = cs(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          p = Gm(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!d && !p) return;
        const { point: m } = f,
          { timestamp: x } = ke;
        this.history.push(oe(I({}, m), { timestamp: x }));
        const { onStart: b, onMove: y } = this.handlers;
        d ||
          (b && b(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          y && y(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = as(d, this.transformPagePoint)),
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
        const b = cs(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : as(d, this.transformPagePoint),
          this.history,
        );
        this.startEvent && p && p(f, b), m && m(f, b);
      }),
      !Ro(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = r),
      (this.transformPagePoint = n),
      (this.distanceThreshold = o),
      (this.contextWindow = i || window);
    const a = cn(t),
      l = as(a, this.transformPagePoint),
      { point: c } = l,
      { timestamp: u } = ke;
    this.history = [oe(I({}, c), { timestamp: u })];
    const { onSessionStart: h } = r;
    h && h(t, cs(l, this.history)),
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
    this.removeListeners && this.removeListeners(), Dt(this.updatePoint);
  }
}
function as(e, t) {
  return t ? { point: t(e.point) } : e;
}
function N0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function cs({ point: e }, t) {
  return {
    point: e,
    delta: N0(e, pu(t)),
    offset: N0(e, Ym(t)),
    velocity: Zm(t, 0.1),
  };
}
function Ym(e) {
  return e[0];
}
function pu(e) {
  return e[e.length - 1];
}
function Zm(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let r = e.length - 1,
    n = null;
  const i = pu(e);
  for (; r >= 0 && ((n = e[r]), !(i.timestamp - n.timestamp > ut(t))); ) r--;
  if (!n) return { x: 0, y: 0 };
  const s = Je(i.timestamp - n.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - n.x) / s, y: (i.y - n.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function Jm(e, { min: t, max: r }, n) {
  return (
    t !== void 0 && e < t
      ? (e = n ? ge(t, e, n.min) : Math.max(e, t))
      : r !== void 0 && e > r && (e = n ? ge(r, e, n.max) : Math.min(e, r)),
    e
  );
}
function I0(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
  };
}
function Qm(e, { top: t, left: r, bottom: n, right: i }) {
  return { x: I0(e.x, r, i), y: I0(e.y, t, n) };
}
function U0(e, t) {
  let r = t.min - e.min,
    n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function e1(e, t) {
  return { x: U0(e.x, t.x), y: U0(e.y, t.y) };
}
function t1(e, t) {
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
function r1(e, t) {
  const r = {};
  return (
    t.min !== void 0 && (r.min = t.min - e.min),
    t.max !== void 0 && (r.max = t.max - e.min),
    r
  );
}
const qs = 0.35;
function n1(e = qs) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = qs),
    { x: H0(e, "left", "right"), y: H0(e, "top", "bottom") }
  );
}
function H0(e, t, r) {
  return { min: j0(e, t), max: j0(e, r) };
}
function j0(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const i1 = new WeakMap();
class s1 {
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
          (this.openDragLock = fx(d)),
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
          js(this.visualElement, "transform");
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
          (this.currentDirection = o1(b)),
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
    this.panSession = new du(
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
        contextWindow: hu(this.visualElement),
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
    if (!n || !Cn(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + n[t];
    this.constraints &&
      this.constraints[t] &&
      (o = Jm(o, this.constraints[t], this.elastic[t])),
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
    t && lr(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && n
        ? (this.constraints = Qm(n.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = n1(r)),
      i !== this.constraints &&
        n &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ye((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = r1(n.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !lr(t)) return !1;
    const n = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = am(n, i.root, this.visualElement.getTransformPagePoint());
    let o = e1(i.layout.layoutBox, s);
    if (r) {
      const a = r(im(o));
      (this.hasMutatedConstraints = !!a), a && (o = Zl(a));
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
        if (!Cn(u, r, this.currentDirection)) return;
        let h = (l && l[u]) || {};
        o && (h = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          d = i ? 40 : 1e7,
          p = I(
            I(
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
      js(this.visualElement, t), n.start(Ho(t, n, 0, r, this.visualElement, !1))
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
      if (!Cn(r, n, this.currentDirection)) return;
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
    if (!lr(r) || !n || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Ye((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = t1({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      n.root && n.root.updateScroll(),
      n.updateLayout(),
      this.resolveConstraints(),
      Ye((o) => {
        if (!Cn(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: c } = this.constraints[o];
        a.set(ge(l, c, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    i1.set(this.visualElement, this);
    const t = this.visualElement.current,
      r = Kr(t, "pointerdown", (l) => {
        const { drag: c, dragListener: u = !0 } = this.getProps();
        c && u && this.start(l);
      }),
      n = () => {
        const { dragConstraints: l } = this.getProps();
        lr(l) && l.current && (this.constraints = this.resolveRefConstraints());
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
        dragElastic: o = qs,
        dragMomentum: a = !0,
      } = t;
    return oe(I({}, t), {
      drag: r,
      dragDirectionLock: n,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    });
  }
}
function Cn(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function o1(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? (r = "y") : Math.abs(e.x) > t && (r = "x"), r;
}
class a1 extends St {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Qe),
      (this.removeListeners = Qe),
      (this.controls = new s1(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Qe);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const z0 = (e) => (t, r) => {
  e && ye.postRender(() => e(t, r));
};
class c1 extends St {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Qe);
  }
  onPointerDown(t) {
    this.session = new du(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: hu(this.node),
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
      onSessionStart: z0(t),
      onStart: z0(r),
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
function q0(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Nr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (J.test(e)) e = parseFloat(e);
        else return e;
      const r = q0(e, t.target.x),
        n = q0(e, t.target.y);
      return `${r}% ${n}%`;
    },
  },
  l1 = {
    correct: (e, { treeScale: t, projectionDelta: r }) => {
      const n = e,
        i = wt.parse(e);
      if (i.length > 5) return n;
      const s = wt.createTransformer(e),
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
let ls = !1;
class u1 extends $.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: n,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    Px(f1),
      s &&
        (r.group && r.group.add(s),
        n && n.register && i && n.register(s),
        ls && s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions(
          oe(I({}, s.options), { onExitComplete: () => this.safeToRemove() }),
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
        (ls = !0),
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
      To.postRender(() => {
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
    (ls = !0),
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
function xu(e) {
  const [t, r] = Vl(),
    n = $.useContext(ao);
  return mt.jsx(
    u1,
    oe(I({}, e), {
      layoutGroup: n,
      switchLayoutGroup: $.useContext(Gl),
      isPresent: t,
      safeToRemove: r,
    }),
  );
}
const f1 = {
  borderRadius: oe(I({}, Nr), {
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
  boxShadow: l1,
};
function h1(e, t, r) {
  const n = Me(e) ? e : mr(e);
  return n.start(Ho("", n, t, r)), n.animation;
}
const d1 = (e, t) => e.depth - t.depth;
class p1 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    uo(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    fo(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(d1),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function x1(e, t) {
  const r = Ue.now(),
    n = ({ timestamp: i }) => {
      const s = i - r;
      s >= t && (Dt(n), e(s - t));
    };
  return ye.setup(n, !0), () => Dt(n);
}
const mu = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  m1 = mu.length,
  W0 = (e) => (typeof e == "string" ? parseFloat(e) : e),
  $0 = (e) => typeof e == "number" || J.test(e);
function y1(e, t, r, n, i, s) {
  var o, a, l, c;
  i
    ? ((e.opacity = ge(0, (o = r.opacity) != null ? o : 1, g1(n))),
      (e.opacityExit = ge((a = t.opacity) != null ? a : 1, 0, v1(n))))
    : s &&
      (e.opacity = ge(
        (l = t.opacity) != null ? l : 1,
        (c = r.opacity) != null ? c : 1,
        n,
      ));
  for (let u = 0; u < m1; u++) {
    const h = `border${mu[u]}Radius`;
    let f = K0(t, h),
      d = K0(r, h);
    if (f === void 0 && d === void 0) continue;
    f || (f = 0),
      d || (d = 0),
      f === 0 || d === 0 || $0(f) === $0(d)
        ? ((e[h] = Math.max(ge(W0(f), W0(d), n), 0)),
          (ft.test(d) || ft.test(f)) && (e[h] += "%"))
        : (e[h] = d);
  }
  (t.rotate || r.rotate) && (e.rotate = ge(t.rotate || 0, r.rotate || 0, n));
}
function K0(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const g1 = yu(0, 0.5, nl),
  v1 = yu(0.5, 0.95, Qe);
function yu(e, t, r) {
  return (n) => (n < e ? 0 : n > t ? 1 : r(Zr(e, t, n)));
}
function X0(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Ge(e, t) {
  X0(e.x, t.x), X0(e.y, t.y);
}
function G0(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Y0(e, t, r, n, i) {
  return (
    (e -= t), (e = Fi(e, 1 / r, n)), i !== void 0 && (e = Fi(e, 1 / i, n)), e
  );
}
function E1(e, t = 0, r = 1, n = 0.5, i, s = e, o = e) {
  if (
    (ft.test(t) &&
      ((t = parseFloat(t)), (t = ge(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = ge(s.min, s.max, n);
  e === s && (a -= t),
    (e.min = Y0(e.min, t, r, a, i)),
    (e.max = Y0(e.max, t, r, a, i));
}
function Z0(e, t, [r, n, i], s, o) {
  E1(e, t[r], t[n], t[i], t.scale, s, o);
}
const b1 = ["x", "scaleX", "originX"],
  A1 = ["y", "scaleY", "originY"];
function J0(e, t, r, n) {
  Z0(e.x, t, b1, r ? r.x : void 0, n ? n.x : void 0),
    Z0(e.y, t, A1, r ? r.y : void 0, n ? n.y : void 0);
}
function Q0(e) {
  return e.translate === 0 && e.scale === 1;
}
function gu(e) {
  return Q0(e.x) && Q0(e.y);
}
function ec(e, t) {
  return e.min === t.min && e.max === t.max;
}
function C1(e, t) {
  return ec(e.x, t.x) && ec(e.y, t.y);
}
function tc(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function vu(e, t) {
  return tc(e.x, t.x) && tc(e.y, t.y);
}
function rc(e) {
  return Ve(e.x) / Ve(e.y);
}
function nc(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class B1 {
  constructor() {
    this.members = [];
  }
  add(t) {
    uo(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (fo(this.members, t),
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
function D1(e, t, r) {
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
const us = ["", "X", "Y", "Z"],
  w1 = 1e3;
let F1 = 0;
function fs(e, t, r, n) {
  const { latestValues: i } = t;
  i[e] && ((r[e] = i[e]), t.setStaticValue(e, 0), n && (n[e] = 0));
}
function Eu(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const r = su(t);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(r, "transform", ye, !(i || s));
  }
  const { parent: n } = e;
  n && !n.hasCheckedOptimisedAppear && Eu(n);
}
function bu({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: r,
  checkIsScrollRoot: n,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = F1++),
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
            this.nodes.forEach(T1),
            this.nodes.forEach(L1),
            this.nodes.forEach(O1),
            this.nodes.forEach(R1);
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
      this.root === this && (this.nodes = new p1());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new xo()),
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
      (this.isSVG = Ml(o) && !yx(o)), (this.instance = o);
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
              (u = x1(f, 250)),
              di.hasAnimatedSinceResize &&
                ((di.hasAnimatedSinceResize = !1), this.nodes.forEach(oc)));
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
                  this.options.transition || c.getDefaultTransition() || U1,
                { onLayoutAnimationStart: m, onLayoutAnimationComplete: x } =
                  c.getProps(),
                b = !this.targetLayout || !vu(this.targetLayout, d),
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
                const g = oe(I({}, So(p, "layout")), {
                  onPlay: m,
                  onComplete: x,
                });
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((g.delay = 0), (g.type = !1)),
                  this.startAnimation(g),
                  this.setAnimationOrigin(u, y);
              } else
                h || oc(this),
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
        Dt(this.updateProjection);
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
        this.nodes && this.nodes.forEach(M1),
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
          Eu(this),
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ic);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(sc);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(k1),
            this.nodes.forEach(S1),
            this.nodes.forEach(_1))
          : this.nodes.forEach(sc),
        this.clearAllSnapshots();
      const a = Ue.now();
      (ke.delta = yt(0, 1e3 / 60, a - ke.timestamp)),
        (ke.timestamp = a),
        (ke.isProcessing = !0),
        Qi.update.process(ke),
        Qi.preRender.process(ke),
        Qi.render.process(ke),
        (ke.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), To.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(P1), this.sharedNodes.forEach(V1);
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
        a = this.projectionDelta && !gu(this.projectionDelta),
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
        H1(l),
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
          ((c = this.scroll) == null ? void 0 : c.wasRoot) || this.path.some(j1)
        )
      ) {
        const { scroll: u } = this.root;
        u && (ur(a.x, u.offset.x), ur(a.y, u.offset.y));
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
          (h.wasRoot && Ge(a, o), ur(a.x, h.offset.x), ur(a.y, h.offset.y));
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
          fr(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          Mt(u.latestValues) && fr(l, u.latestValues);
      }
      return Mt(this.latestValues) && fr(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = Be();
      Ge(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Mt(c.latestValues)) continue;
        Ns(c.latestValues) && c.updateSnapshot();
        const u = Be(),
          h = c.measurePageBox();
        Ge(u, h),
          J0(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Mt(this.latestValues) && J0(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = oe(I(I({}, this.options), o), {
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
              Xm(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Ge(this.target, this.layout.layoutBox),
                Ql(this.target, this.targetDelta))
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
          Ns(this.parent.latestValues) ||
          Jl(this.parent.latestValues)
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
      om(this.layoutCorrected, this.treeScale, this.path, a),
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
        : (G0(this.prevProjectionDelta.x, this.projectionDelta.x),
          G0(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Xr(this.projectionDelta, this.layoutCorrected, d, this.latestValues),
        (this.treeScale.x !== h ||
          this.treeScale.y !== f ||
          !nc(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !nc(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
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
      (this.prevProjectionDelta = hr()),
        (this.projectionDelta = hr()),
        (this.projectionDeltaWithTransform = hr());
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        u = I({}, this.latestValues),
        h = hr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = Be(),
        d = l ? l.source : void 0,
        p = this.layout ? this.layout.source : void 0,
        m = d !== p,
        x = this.getStack(),
        b = !x || x.members.length <= 1,
        y = !!(m && !b && this.options.crossfade === !0 && !this.path.some(I1));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (E) => {
        const A = E / 1e3;
        ac(h.x, o.x, A),
          ac(h.y, o.y, A),
          this.setTargetDelta(h),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Gr(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            N1(this.relativeTarget, this.relativeTargetOrigin, f, A),
            g && C1(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = Be()),
            Ge(g, this.relativeTarget)),
          m &&
            ((this.animationValues = u), y1(u, c, this.latestValues, A, y, b)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = A);
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
          (Dt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ye.update(() => {
          (di.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = mr(0)),
            (this.currentAnimation = h1(
              this.motionValue,
              [0, 1e3],
              oe(I({}, o), {
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
        (this.mixTargetDelta && this.mixTargetDelta(w1),
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
          Au(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || Be();
          const h = Ve(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + h);
          const f = Ve(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + f);
        }
        Ge(a, l),
          fr(a, u),
          Xr(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new B1()),
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
      l.z && fs("z", o, c, this.animationValues);
      for (let u = 0; u < us.length; u++)
        fs(`rotate${us[u]}`, o, c, this.animationValues),
          fs(`skew${us[u]}`, o, c, this.animationValues);
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
      let h = D1(this.projectionDeltaWithTransform, this.treeScale, u);
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
          const A = y.length;
          for (let D = 0; D < A; D++) o[y[D]] = E;
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
        this.root.nodes.forEach(ic),
        this.root.sharedNodes.clear();
    }
  };
}
function S1(e) {
  e.updateLayout();
}
function _1(e) {
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
      : Au(s, t.layoutBox, n) &&
        Ye((h) => {
          const f = o ? t.measuredBox[h] : t.layoutBox[h],
            d = Ve(n[h]);
          (f.max = f.min + d),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[h].max = e.relativeTarget[h].min + d));
        });
    const a = hr();
    Xr(a, n, t.layoutBox);
    const l = hr();
    o ? Xr(l, e.applyTransform(i, !0), t.measuredBox) : Xr(l, n, t.layoutBox);
    const c = !gu(a);
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
            vu(p, m) || (u = !0),
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
function T1(e) {
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
function R1(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function P1(e) {
  e.clearSnapshot();
}
function ic(e) {
  e.clearMeasurements();
}
function sc(e) {
  e.isLayoutDirty = !1;
}
function k1(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function oc(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function L1(e) {
  e.resolveTargetDelta();
}
function O1(e) {
  e.calcProjection();
}
function M1(e) {
  e.resetSkewAndRotation();
}
function V1(e) {
  e.removeLeadSnapshot();
}
function ac(e, t, r) {
  (e.translate = ge(t.translate, 0, r)),
    (e.scale = ge(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function cc(e, t, r, n) {
  (e.min = ge(t.min, r.min, n)), (e.max = ge(t.max, r.max, n));
}
function N1(e, t, r, n) {
  cc(e.x, t.x, r.x, n), cc(e.y, t.y, r.y, n);
}
function I1(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const U1 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  lc = (e) =>
    typeof navigator != "undefined" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  uc = lc("applewebkit/") && !lc("chrome/") ? Math.round : Qe;
function fc(e) {
  (e.min = uc(e.min)), (e.max = uc(e.max));
}
function H1(e) {
  fc(e.x), fc(e.y);
}
function Au(e, t, r) {
  return (
    e === "position" || (e === "preserve-aspect" && !Km(rc(t), rc(r), 0.2))
  );
}
function j1(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const z1 = bu({
    attachResizeListener: (e, t) => rn(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  hs = { current: void 0 },
  Cu = bu({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!hs.current) {
        const e = new z1({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (hs.current = e);
      }
      return hs.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  q1 = {
    pan: { Feature: c1 },
    drag: { Feature: a1, ProjectionNode: Cu, MeasureLayout: xu },
  };
function hc(e, t, r) {
  const { props: n } = e;
  e.animationState &&
    n.whileHover &&
    e.animationState.setActive("whileHover", r === "Start");
  const i = "onHover" + r,
    s = n[i];
  s && ye.postRender(() => s(t, cn(t)));
}
class W1 extends St {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = hx(
        t,
        (r, n) => (hc(this.node, n, "Start"), (i) => hc(this.node, i, "End")),
      ));
  }
  unmount() {}
}
class $1 extends St {
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
function dc(e, t, r) {
  const { props: n } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    n.whileTap &&
    e.animationState.setActive("whileTap", r === "Start");
  const i = "onTap" + (r === "End" ? "" : r),
    s = n[i];
  s && ye.postRender(() => s(t, cn(t)));
}
class K1 extends St {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = mx(
        t,
        (r, n) => (
          dc(this.node, n, "Start"),
          (i, { success: s }) => dc(this.node, i, s ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const Ws = new WeakMap(),
  ds = new WeakMap(),
  X1 = (e) => {
    const t = Ws.get(e.target);
    t && t(e);
  },
  G1 = (e) => {
    e.forEach(X1);
  };
function Y1(r) {
  var n = r,
    { root: e } = n,
    t = Xe(n, ["root"]);
  const i = e || document;
  ds.has(i) || ds.set(i, {});
  const s = ds.get(i),
    o = JSON.stringify(t);
  return s[o] || (s[o] = new IntersectionObserver(G1, I({ root: e }, t))), s[o];
}
function Z1(e, t, r) {
  const n = Y1(t);
  return (
    Ws.set(e, r),
    n.observe(e),
    () => {
      Ws.delete(e), n.unobserve(e);
    }
  );
}
const J1 = { some: 0, all: 1 };
class Q1 extends St {
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
        threshold: typeof i == "number" ? i : J1[i],
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
    return Z1(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver == "undefined") return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(ey(t, r)) && this.startObserver();
  }
  unmount() {}
}
function ey({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const ty = {
    inView: { Feature: Q1 },
    tap: { Feature: K1 },
    focus: { Feature: $1 },
    hover: { Feature: W1 },
  },
  ry = { layout: { ProjectionNode: Cu, MeasureLayout: xu } },
  ny = I(I(I(I({}, Hm), ty), q1), ry),
  kv = nm(ny, mm);
function Bu(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: iy } = Object.prototype,
  { getPrototypeOf: jo } = Object,
  { iterator: Oi, toStringTag: Du } = Symbol,
  Mi = ((e) => (t) => {
    const r = iy.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  it = (e) => ((e = e.toLowerCase()), (t) => Mi(t) === e),
  Vi = (e) => (t) => typeof t === e,
  { isArray: Ar } = Array,
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
const wu = it("ArrayBuffer");
function sy(e) {
  let t;
  return (
    typeof ArrayBuffer != "undefined" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && wu(e.buffer)),
    t
  );
}
const oy = Vi("string"),
  He = Vi("function"),
  Fu = Vi("number"),
  un = (e) => e !== null && typeof e == "object",
  ay = (e) => e === !0 || e === !1,
  pi = (e) => {
    if (Mi(e) !== "object") return !1;
    const t = jo(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Du in e) &&
      !(Oi in e)
    );
  },
  cy = (e) => {
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
  ly = it("Date"),
  uy = it("File"),
  fy = it("Blob"),
  hy = it("FileList"),
  dy = (e) => un(e) && He(e.pipe),
  py = (e) => {
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
  xy = it("URLSearchParams"),
  [my, yy, gy, vy] = ["ReadableStream", "Request", "Response", "Headers"].map(
    it,
  ),
  Ey = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function fn(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e == "undefined") return;
  let n, i;
  if ((typeof e != "object" && (e = [e]), Ar(e)))
    for (n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
  else {
    if (ln(e)) return;
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = s.length;
    let a;
    for (n = 0; n < o; n++) (a = s[n]), t.call(null, e[a], a, e);
  }
}
function Su(e, t) {
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
  _u = (e) => !gr(e) && e !== Ht;
function $s() {
  const { caseless: e, skipUndefined: t } = (_u(this) && this) || {},
    r = {},
    n = (i, s) => {
      const o = (e && Su(r, s)) || s;
      pi(r[o]) && pi(i)
        ? (r[o] = $s(r[o], i))
        : pi(i)
          ? (r[o] = $s({}, i))
          : Ar(i)
            ? (r[o] = i.slice())
            : (!t || !gr(i)) && (r[o] = i);
    };
  for (let i = 0, s = arguments.length; i < s; i++)
    arguments[i] && fn(arguments[i], n);
  return r;
}
const by = (e, t, r, { allOwnKeys: n } = {}) => (
    fn(
      t,
      (i, s) => {
        r && He(i) ? (e[s] = Bu(i, r)) : (e[s] = i);
      },
      { allOwnKeys: n },
    ),
    e
  ),
  Ay = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Cy = (e, t, r, n) => {
    (e.prototype = Object.create(t.prototype, n)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      r && Object.assign(e.prototype, r);
  },
  By = (e, t, r, n) => {
    let i, s, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
        (o = i[s]), (!n || n(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = r !== !1 && jo(e);
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t;
  },
  Dy = (e, t, r) => {
    (e = String(e)),
      (r === void 0 || r > e.length) && (r = e.length),
      (r -= t.length);
    const n = e.indexOf(t, r);
    return n !== -1 && n === r;
  },
  wy = (e) => {
    if (!e) return null;
    if (Ar(e)) return e;
    let t = e.length;
    if (!Fu(t)) return null;
    const r = new Array(t);
    for (; t-- > 0; ) r[t] = e[t];
    return r;
  },
  Fy = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array != "undefined" && jo(Uint8Array)),
  Sy = (e, t) => {
    const n = (e && e[Oi]).call(e);
    let i;
    for (; (i = n.next()) && !i.done; ) {
      const s = i.value;
      t.call(e, s[0], s[1]);
    }
  },
  _y = (e, t) => {
    let r;
    const n = [];
    for (; (r = e.exec(t)) !== null; ) n.push(r);
    return n;
  },
  Ty = it("HTMLFormElement"),
  Ry = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, n, i) {
      return n.toUpperCase() + i;
    }),
  pc = (
    ({ hasOwnProperty: e }) =>
    (t, r) =>
      e.call(t, r)
  )(Object.prototype),
  Py = it("RegExp"),
  Tu = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e),
      n = {};
    fn(r, (i, s) => {
      let o;
      (o = t(i, s, e)) !== !1 && (n[s] = o || i);
    }),
      Object.defineProperties(e, n);
  },
  ky = (e) => {
    Tu(e, (t, r) => {
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
  Ly = (e, t) => {
    const r = {},
      n = (i) => {
        i.forEach((s) => {
          r[s] = !0;
        });
      };
    return Ar(e) ? n(e) : n(String(e).split(t)), r;
  },
  Oy = () => {},
  My = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function Vy(e) {
  return !!(e && He(e.append) && e[Du] === "FormData" && e[Oi]);
}
const Ny = (e) => {
    const t = new Array(10),
      r = (n, i) => {
        if (un(n)) {
          if (t.indexOf(n) >= 0) return;
          if (ln(n)) return n;
          if (!("toJSON" in n)) {
            t[i] = n;
            const s = Ar(n) ? [] : {};
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
  Iy = it("AsyncFunction"),
  Uy = (e) => e && (un(e) || He(e)) && He(e.then) && He(e.catch),
  Ru = ((e, t) =>
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
  Hy =
    typeof queueMicrotask != "undefined"
      ? queueMicrotask.bind(Ht)
      : (typeof process != "undefined" && process.nextTick) || Ru,
  jy = (e) => e != null && He(e[Oi]),
  T = {
    isArray: Ar,
    isArrayBuffer: wu,
    isBuffer: ln,
    isFormData: py,
    isArrayBufferView: sy,
    isString: oy,
    isNumber: Fu,
    isBoolean: ay,
    isObject: un,
    isPlainObject: pi,
    isEmptyObject: cy,
    isReadableStream: my,
    isRequest: yy,
    isResponse: gy,
    isHeaders: vy,
    isUndefined: gr,
    isDate: ly,
    isFile: uy,
    isBlob: fy,
    isRegExp: Py,
    isFunction: He,
    isStream: dy,
    isURLSearchParams: xy,
    isTypedArray: Fy,
    isFileList: hy,
    forEach: fn,
    merge: $s,
    extend: by,
    trim: Ey,
    stripBOM: Ay,
    inherits: Cy,
    toFlatObject: By,
    kindOf: Mi,
    kindOfTest: it,
    endsWith: Dy,
    toArray: wy,
    forEachEntry: Sy,
    matchAll: _y,
    isHTMLForm: Ty,
    hasOwnProperty: pc,
    hasOwnProp: pc,
    reduceDescriptors: Tu,
    freezeMethods: ky,
    toObjectSet: Ly,
    toCamelCase: Ry,
    noop: Oy,
    toFiniteNumber: My,
    findKey: Su,
    global: Ht,
    isContextDefined: _u,
    isSpecCompliantForm: Vy,
    toJSONObject: Ny,
    isAsyncFn: Iy,
    isThenable: Uy,
    setImmediate: Ru,
    asap: Hy,
    isIterable: jy,
  };
function ne(e, t, r, n, i) {
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
T.inherits(ne, Error, {
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
const Pu = ne.prototype,
  ku = {};
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
  ku[e] = { value: e };
});
Object.defineProperties(ne, ku);
Object.defineProperty(Pu, "isAxiosError", { value: !0 });
ne.from = (e, t, r, n, i, s) => {
  const o = Object.create(Pu);
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
    ne.call(o, a, l, r, n, i),
    e &&
      o.cause == null &&
      Object.defineProperty(o, "cause", { value: e, configurable: !0 }),
    (o.name = (e && e.name) || "Error"),
    s && Object.assign(o, s),
    o
  );
};
const zy = null;
function Ks(e) {
  return T.isPlainObject(e) || T.isArray(e);
}
function Lu(e) {
  return T.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function xc(e, t, r) {
  return e
    ? e
        .concat(t)
        .map(function (i, s) {
          return (i = Lu(i)), !r && s ? "[" + i + "]" : i;
        })
        .join(r ? "." : "")
    : t;
}
function qy(e) {
  return T.isArray(e) && !e.some(Ks);
}
const Wy = T.toFlatObject(T, {}, null, function (t) {
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
      throw new ne("Blob is not supported. Use a Buffer instead.");
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
        (T.isArray(p) && qy(p)) ||
        ((T.isFileList(p) || T.endsWith(m, "[]")) && (b = T.toArray(p)))
      )
        return (
          (m = Lu(m)),
          b.forEach(function (g, E) {
            !(T.isUndefined(g) || g === null) &&
              t.append(
                o === !0 ? xc([m], E, s) : o === null ? m : m + "[]",
                c(g),
              );
          }),
          !1
        );
    }
    return Ks(p) ? !0 : (t.append(xc(x, m, s), c(p)), !1);
  }
  const h = [],
    f = Object.assign(Wy, {
      defaultVisitor: u,
      convertValue: c,
      isVisitable: Ks,
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
function mc(e) {
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
function zo(e, t) {
  (this._pairs = []), e && Ni(e, this, t);
}
const Ou = zo.prototype;
Ou.append = function (t, r) {
  this._pairs.push([t, r]);
};
Ou.toString = function (t) {
  const r = t
    ? function (n) {
        return t.call(this, n, mc);
      }
    : mc;
  return this._pairs
    .map(function (i) {
      return r(i[0]) + "=" + r(i[1]);
    }, "")
    .join("&");
};
function $y(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function Mu(e, t, r) {
  if (!t) return e;
  const n = (r && r.encode) || $y;
  T.isFunction(r) && (r = { serialize: r });
  const i = r && r.serialize;
  let s;
  if (
    (i
      ? (s = i(t, r))
      : (s = T.isURLSearchParams(t) ? t.toString() : new zo(t, r).toString(n)),
    s)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class yc {
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
const Vu = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Ky = typeof URLSearchParams != "undefined" ? URLSearchParams : zo,
  Xy = typeof FormData != "undefined" ? FormData : null,
  Gy = typeof Blob != "undefined" ? Blob : null,
  Yy = {
    isBrowser: !0,
    classes: { URLSearchParams: Ky, FormData: Xy, Blob: Gy },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  qo = typeof window != "undefined" && typeof document != "undefined",
  Xs = (typeof navigator == "object" && navigator) || void 0,
  Zy =
    qo &&
    (!Xs || ["ReactNative", "NativeScript", "NS"].indexOf(Xs.product) < 0),
  Jy =
    typeof WorkerGlobalScope != "undefined" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Qy = (qo && window.location.href) || "http://localhost",
  eg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: qo,
        hasStandardBrowserEnv: Zy,
        hasStandardBrowserWebWorkerEnv: Jy,
        navigator: Xs,
        origin: Qy,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Oe = I(I({}, eg), Yy);
function tg(e, t) {
  return Ni(
    e,
    new Oe.classes.URLSearchParams(),
    I(
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
function rg(e) {
  return T.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0],
  );
}
function ng(e) {
  const t = {},
    r = Object.keys(e);
  let n;
  const i = r.length;
  let s;
  for (n = 0; n < i; n++) (s = r[n]), (t[s] = e[s]);
  return t;
}
function Nu(e) {
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
          t(r, n, i[o], s) && T.isArray(i[o]) && (i[o] = ng(i[o])),
          !a)
    );
  }
  if (T.isFormData(e) && T.isFunction(e.entries)) {
    const r = {};
    return (
      T.forEachEntry(e, (n, i) => {
        t(rg(n), i, r, 0);
      }),
      r
    );
  }
  return null;
}
function ig(e, t, r) {
  if (T.isString(e))
    try {
      return (t || JSON.parse)(e), T.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError") throw n;
    }
  return (r || JSON.stringify)(e);
}
const hn = {
  transitional: Vu,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, r) {
      const n = r.getContentType() || "",
        i = n.indexOf("application/json") > -1,
        s = T.isObject(t);
      if ((s && T.isHTMLForm(t) && (t = new FormData(t)), T.isFormData(t)))
        return i ? JSON.stringify(Nu(t)) : t;
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
          return tg(t, this.formSerializer).toString();
        if ((a = T.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return Ni(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer,
          );
        }
      }
      return s || i ? (r.setContentType("application/json", !1), ig(t)) : t;
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
              ? ne.from(a, ne.ERR_BAD_RESPONSE, this, null, this.response)
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
const sg = T.toObjectSet([
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
  og = (e) => {
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
              !(!r || (t[r] && sg[r])) &&
                (r === "set-cookie"
                  ? t[r]
                    ? t[r].push(n)
                    : (t[r] = [n])
                  : (t[r] = t[r] ? t[r] + ", " + n : n));
          }),
      t
    );
  },
  gc = Symbol("internals");
function Ir(e) {
  return e && String(e).trim().toLowerCase();
}
function xi(e) {
  return e === !1 || e == null ? e : T.isArray(e) ? e.map(xi) : String(e);
}
function ag(e) {
  const t = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; (n = r.exec(e)); ) t[n[1]] = n[2];
  return t;
}
const cg = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ps(e, t, r, n, i) {
  if (T.isFunction(n)) return n.call(this, t, r);
  if ((i && (t = r), !!T.isString(t))) {
    if (T.isString(n)) return t.indexOf(n) !== -1;
    if (T.isRegExp(n)) return n.test(t);
  }
}
function lg(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function ug(e, t) {
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
    else if (T.isString(t) && (t = t.trim()) && !cg(t)) o(og(t), r);
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
        if (r === !0) return ag(i);
        if (T.isFunction(r)) return r.call(this, i, n);
        if (T.isRegExp(r)) return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (((t = Ir(t)), t)) {
      const n = T.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || ps(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function s(o) {
      if (((o = Ir(o)), o)) {
        const a = T.findKey(n, o);
        a && (!r || ps(n, n[a], a, r)) && (delete n[a], (i = !0));
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
      (!t || ps(this, this[s], s, t, !0)) && (delete this[s], (i = !0));
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
        const a = t ? lg(s) : String(s).trim();
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
    const n = (this[gc] = this[gc] = { accessors: {} }).accessors,
      i = this.prototype;
    function s(o) {
      const a = Ir(o);
      n[a] || (ug(i, o), (n[a] = !0));
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
function xs(e, t) {
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
function Iu(e) {
  return !!(e && e.__CANCEL__);
}
function Cr(e, t, r) {
  ne.call(this, e == null ? "canceled" : e, ne.ERR_CANCELED, t, r),
    (this.name = "CanceledError");
}
T.inherits(Cr, ne, { __CANCEL__: !0 });
function Uu(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status)
    ? e(r)
    : t(
        new ne(
          "Request failed with status code " + r.status,
          [ne.ERR_BAD_REQUEST, ne.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r,
        ),
      );
}
function fg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function hg(e, t) {
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
function dg(e, t) {
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
    const i = hg(50, 250);
    return dg((s) => {
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
  vc = (e, t) => {
    const r = e != null;
    return [(n) => t[0]({ lengthComputable: r, total: e, loaded: n }), t[1]];
  },
  Ec =
    (e) =>
    (...t) =>
      T.asap(() => e(...t)),
  pg = Oe.hasStandardBrowserEnv
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
  xg = Oe.hasStandardBrowserEnv
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
function mg(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function yg(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Hu(e, t, r) {
  let n = !mg(t);
  return e && (n || r == !1) ? yg(e, t) : t;
}
const bc = (e) => (e instanceof je ? I({}, e) : e);
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
    headers: (c, u, h) => i(bc(c), bc(u), h, !0),
  };
  return (
    T.forEach(Object.keys(I(I({}, e), t)), function (u) {
      const h = l[u] || i,
        f = h(e[u], t[u], u);
      (T.isUndefined(f) && h !== a) || (r[u] = f);
    }),
    r
  );
}
const ju = (e) => {
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
      (t.url = Mu(
        Hu(t.baseURL, t.url, t.allowAbsoluteUrls),
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
      (n && T.isFunction(n) && (n = n(t)), n || (n !== !1 && pg(t.url)))
    ) {
      const l = i && s && xg.read(s);
      l && o.set(i, l);
    }
    return t;
  },
  gg = typeof XMLHttpRequest != "undefined",
  vg =
    gg &&
    function (e) {
      return new Promise(function (r, n) {
        const i = ju(e);
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
            A = {
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
          Uu(
            function (v) {
              r(v), m();
            },
            function (v) {
              n(v), m();
            },
            A,
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
              (n(new ne("Request aborted", ne.ECONNABORTED, e, x)), (x = null));
          }),
          (x.onerror = function (E) {
            const A = E && E.message ? E.message : "Network Error",
              D = new ne(A, ne.ERR_NETWORK, e, x);
            (D.event = E || null), n(D), (x = null);
          }),
          (x.ontimeout = function () {
            let E = i.timeout
              ? "timeout of " + i.timeout + "ms exceeded"
              : "timeout exceeded";
            const A = i.transitional || Vu;
            i.timeoutErrorMessage && (E = i.timeoutErrorMessage),
              n(
                new ne(
                  E,
                  A.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
                  e,
                  x,
                ),
              ),
              (x = null);
          }),
          s === void 0 && o.setContentType(null),
          "setRequestHeader" in x &&
            T.forEach(o.toJSON(), function (E, A) {
              x.setRequestHeader(A, E);
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
                (n(!g || g.type ? new Cr(null, e, x) : g),
                x.abort(),
                (x = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(u),
            i.signal &&
              (i.signal.aborted ? u() : i.signal.addEventListener("abort", u)));
        const y = fg(i.url);
        if (y && Oe.protocols.indexOf(y) === -1) {
          n(new ne("Unsupported protocol " + y + ":", ne.ERR_BAD_REQUEST, e));
          return;
        }
        x.send(s || null);
      });
    },
  Eg = (e, t) => {
    const { length: r } = (e = e ? e.filter(Boolean) : []);
    if (t || r) {
      let n = new AbortController(),
        i;
      const s = function (c) {
        if (!i) {
          (i = !0), a();
          const u = c instanceof Error ? c : this.reason;
          n.abort(
            u instanceof ne ? u : new Cr(u instanceof Error ? u.message : u),
          );
        }
      };
      let o =
        t &&
        setTimeout(() => {
          (o = null), s(new ne(`timeout ${t} of ms exceeded`, ne.ETIMEDOUT));
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
  bg = function* (e, t) {
    let r = e.byteLength;
    if (r < t) {
      yield e;
      return;
    }
    let n = 0,
      i;
    for (; n < r; ) (i = n + t), yield e.slice(n, i), (n = i);
  },
  Ag = function (e, t) {
    return Ki(this, null, function* () {
      try {
        for (
          var r = ta(Cg(e)), n, i, s;
          (n = !(i = yield new Lt(r.next())).done);
          n = !1
        ) {
          const o = i.value;
          yield* Xi(bg(o, t));
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
  Cg = function (e) {
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
  Ac = (e, t, r, n) => {
    const i = Ag(e, t);
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
  Cc = 64 * 1024,
  { isFunction: Bn } = T,
  Bg = (({ Request: e, Response: t }) => ({ Request: e, Response: t }))(
    T.global,
  ),
  { ReadableStream: Bc, TextEncoder: Dc } = T.global,
  wc = (e, ...t) => {
    try {
      return !!e(...t);
    } catch (r) {
      return !1;
    }
  },
  Dg = (e) => {
    e = T.merge.call({ skipUndefined: !0 }, Bg, e);
    const { fetch: t, Request: r, Response: n } = e,
      i = t ? Bn(t) : typeof fetch == "function",
      s = Bn(r),
      o = Bn(n);
    if (!i) return !1;
    const a = i && Bn(Bc),
      l =
        i &&
        (typeof Dc == "function"
          ? (
              (p) => (m) =>
                p.encode(m)
            )(new Dc())
          : async (p) => new Uint8Array(await new r(p).arrayBuffer())),
      c =
        s &&
        a &&
        wc(() => {
          let p = !1;
          const m = new r(Oe.origin, {
            body: new Bc(),
            method: "POST",
            get duplex() {
              return (p = !0), "half";
            },
          }).headers.has("Content-Type");
          return p && !m;
        }),
      u = o && a && wc(() => T.isReadableStream(new n("").body)),
      h = { stream: u && ((p) => p.body) };
    i &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
        !h[p] &&
          (h[p] = (m, x) => {
            let b = m && m[p];
            if (b) return b.call(m);
            throw new ne(
              `Response type '${p}' is not supported`,
              ne.ERR_NOT_SUPPORT,
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
          onDownloadProgress: A,
          onUploadProgress: D,
          responseType: v,
          headers: w,
          withCredentials: P = "same-origin",
          fetchOptions: B,
        } = ju(p),
        S = t || fetch;
      v = v ? (v + "").toLowerCase() : "text";
      let k = Eg([y, g && g.toAbortSignal()], E),
        L = null;
      const H =
        k &&
        k.unsubscribe &&
        (() => {
          k.unsubscribe();
        });
      let q;
      try {
        if (
          D &&
          c &&
          x !== "get" &&
          x !== "head" &&
          (q = await d(w, b)) !== 0
        ) {
          let R = new r(m, { method: "POST", body: b, duplex: "half" }),
            O;
          if (
            (T.isFormData(b) &&
              (O = R.headers.get("content-type")) &&
              w.setContentType(O),
            R.body)
          ) {
            const [V, M] = vc(q, Si(Ec(D)));
            b = Ac(R.body, Cc, V, M);
          }
        }
        T.isString(P) || (P = P ? "include" : "omit");
        const G = s && "credentials" in r.prototype,
          Z = oe(I({}, B), {
            signal: k,
            method: x.toUpperCase(),
            headers: w.normalize().toJSON(),
            body: b,
            duplex: "half",
            credentials: G ? P : void 0,
          });
        L = s && new r(m, Z);
        let j = await (s ? S(L, B) : S(m, Z));
        const re = u && (v === "stream" || v === "response");
        if (u && (A || (re && H))) {
          const R = {};
          ["status", "statusText", "headers"].forEach((se) => {
            R[se] = j[se];
          });
          const O = T.toFiniteNumber(j.headers.get("content-length")),
            [V, M] = (A && vc(O, Si(Ec(A), !0))) || [];
          j = new n(
            Ac(j.body, Cc, V, () => {
              M && M(), H && H();
            }),
            R,
          );
        }
        v = v || "text";
        let ee = await h[T.findKey(h, v) || "text"](j, p);
        return (
          !re && H && H(),
          await new Promise((R, O) => {
            Uu(R, O, {
              data: ee,
              headers: je.from(j.headers),
              status: j.status,
              statusText: j.statusText,
              config: p,
              request: L,
            });
          })
        );
      } catch (G) {
        throw (
          (H && H(),
          G && G.name === "TypeError" && /Load failed|fetch/i.test(G.message)
            ? Object.assign(new ne("Network Error", ne.ERR_NETWORK, p, L), {
                cause: G.cause || G,
              })
            : ne.from(G, G && G.code, p, L))
        );
      }
    };
  },
  wg = new Map(),
  zu = (e) => {
    let t = (e && e.env) || {};
    const { fetch: r, Request: n, Response: i } = t,
      s = [n, i, r];
    let o = s.length,
      a = o,
      l,
      c,
      u = wg;
    for (; a--; )
      (l = s[a]),
        (c = u.get(l)),
        c === void 0 && u.set(l, (c = a ? new Map() : Dg(t))),
        (u = c);
    return c;
  };
zu();
const Wo = { http: zy, xhr: vg, fetch: { get: zu } };
T.forEach(Wo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch (r) {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Fc = (e) => `- ${e}`,
  Fg = (e) => T.isFunction(e) || e === null || e === !1;
function Sg(e, t) {
  e = T.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, i;
  const s = {};
  for (let o = 0; o < r; o++) {
    n = e[o];
    let a;
    if (
      ((i = n),
      !Fg(n) && ((i = Wo[(a = String(n)).toLowerCase()]), i === void 0))
    )
      throw new ne(`Unknown adapter '${a}'`);
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
          o.map(Fc).join(`
`)
        : " " + Fc(o[0])
      : "as no adapter specified";
    throw new ne(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT",
    );
  }
  return i;
}
const qu = { getAdapter: Sg, adapters: Wo };
function ms(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Cr(null, e);
}
function Sc(e) {
  return (
    ms(e),
    (e.headers = je.from(e.headers)),
    (e.data = xs.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    qu
      .getAdapter(
        e.adapter || hn.adapter,
        e,
      )(e)
      .then(
        function (n) {
          return (
            ms(e),
            (n.data = xs.call(e, e.transformResponse, n)),
            (n.headers = je.from(n.headers)),
            n
          );
        },
        function (n) {
          return (
            Iu(n) ||
              (ms(e),
              n &&
                n.response &&
                ((n.response.data = xs.call(
                  e,
                  e.transformResponse,
                  n.response,
                )),
                (n.response.headers = je.from(n.response.headers)))),
            Promise.reject(n)
          );
        },
      )
  );
}
const Wu = "1.13.0",
  Ii = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ii[e] = function (n) {
      return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const _c = {};
Ii.transitional = function (t, r, n) {
  function i(s, o) {
    return (
      "[Axios v" +
      Wu +
      "] Transitional option '" +
      s +
      "'" +
      o +
      (n ? ". " + n : "")
    );
  }
  return (s, o, a) => {
    if (t === !1)
      throw new ne(
        i(o, " has been removed" + (r ? " in " + r : "")),
        ne.ERR_DEPRECATED,
      );
    return (
      r &&
        !_c[o] &&
        ((_c[o] = !0),
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
function _g(e, t, r) {
  if (typeof e != "object")
    throw new ne("options must be an object", ne.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const s = n[i],
      o = t[s];
    if (o) {
      const a = e[s],
        l = a === void 0 || o(a, s, e);
      if (l !== !0)
        throw new ne("option " + s + " must be " + l, ne.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new ne("Unknown option " + s, ne.ERR_BAD_OPTION);
  }
}
const mi = { assertOptions: _g, validators: Ii },
  lt = mi.validators;
let qt = class {
  constructor(t) {
    (this.defaults = t || {}),
      (this.interceptors = { request: new yc(), response: new yc() });
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
      const p = [Sc.bind(this), void 0];
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
      u = Sc.call(this, d);
    } catch (p) {
      return Promise.reject(p);
    }
    for (h = 0, f = c.length; h < f; ) u = u.then(c[h++], c[h++]);
    return u;
  }
  getUri(t) {
    t = Wt(this.defaults, t);
    const r = Hu(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Mu(r, t.params, t.paramsSerializer);
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
let Tg = class $u {
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
        n.reason || ((n.reason = new Cr(s, o, a)), r(n.reason));
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
      token: new $u(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
};
function Rg(e) {
  return function (r) {
    return e.apply(null, r);
  };
}
function Pg(e) {
  return T.isObject(e) && e.isAxiosError === !0;
}
const Gs = {
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
Object.entries(Gs).forEach(([e, t]) => {
  Gs[t] = e;
});
function Ku(e) {
  const t = new qt(e),
    r = Bu(qt.prototype.request, t);
  return (
    T.extend(r, qt.prototype, t, { allOwnKeys: !0 }),
    T.extend(r, t, null, { allOwnKeys: !0 }),
    (r.create = function (i) {
      return Ku(Wt(e, i));
    }),
    r
  );
}
const Se = Ku(hn);
Se.Axios = qt;
Se.CanceledError = Cr;
Se.CancelToken = Tg;
Se.isCancel = Iu;
Se.VERSION = Wu;
Se.toFormData = Ni;
Se.AxiosError = ne;
Se.Cancel = Se.CanceledError;
Se.all = function (t) {
  return Promise.all(t);
};
Se.spread = Rg;
Se.isAxiosError = Pg;
Se.mergeConfig = Wt;
Se.AxiosHeaders = je;
Se.formToJSON = (e) => Nu(T.isHTMLForm(e) ? new FormData(e) : e);
Se.getAdapter = qu.getAdapter;
Se.HttpStatusCode = Gs;
Se.default = Se;
const {
    Axios: Mv,
    AxiosError: Vv,
    CanceledError: Nv,
    isCancel: Iv,
    CancelToken: Uv,
    VERSION: Hv,
    all: jv,
    Cancel: zv,
    isAxiosError: qv,
    spread: Wv,
    toFormData: $v,
    AxiosHeaders: Kv,
    HttpStatusCode: Xv,
    formToJSON: Gv,
    getAdapter: Yv,
    mergeConfig: Zv,
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
const Ys = { type: "error", data: "parser error" },
  Xu =
    typeof Blob == "function" ||
    (typeof Blob != "undefined" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  Gu = typeof ArrayBuffer == "function",
  Yu = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  $o = ({ type: e, data: t }, r, n) =>
    Xu && t instanceof Blob
      ? r
        ? n(t)
        : Tc(t, n)
      : Gu && (t instanceof ArrayBuffer || Yu(t))
        ? r
          ? n(t)
          : Tc(new Blob([t]), n)
        : n(ht[e] + (t || "")),
  Tc = (e, t) => {
    const r = new FileReader();
    return (
      (r.onload = function () {
        const n = r.result.split(",")[1];
        t("b" + (n || ""));
      }),
      r.readAsDataURL(e)
    );
  };
function Rc(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
      ? new Uint8Array(e)
      : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let ys;
function kg(e, t) {
  if (Xu && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Rc).then(t);
  if (Gu && (e.data instanceof ArrayBuffer || Yu(e.data))) return t(Rc(e.data));
  $o(e, !1, (r) => {
    ys || (ys = new TextEncoder()), t(ys.encode(r));
  });
}
const Pc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  zr = typeof Uint8Array == "undefined" ? [] : new Uint8Array(256);
for (let e = 0; e < Pc.length; e++) zr[Pc.charCodeAt(e)] = e;
const Lg = (e) => {
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
  Og = typeof ArrayBuffer == "function",
  Ko = (e, t) => {
    if (typeof e != "string") return { type: "message", data: Zu(e, t) };
    const r = e.charAt(0);
    return r === "b"
      ? { type: "message", data: Mg(e.substring(1), t) }
      : yi[r]
        ? e.length > 1
          ? { type: yi[r], data: e.substring(1) }
          : { type: yi[r] }
        : Ys;
  },
  Mg = (e, t) => {
    if (Og) {
      const r = Lg(e);
      return Zu(r, t);
    } else return { base64: !0, data: e };
  },
  Zu = (e, t) => {
    switch (t) {
      case "blob":
        return e instanceof Blob ? e : new Blob([e]);
      case "arraybuffer":
      default:
        return e instanceof ArrayBuffer ? e : e.buffer;
    }
  },
  Ju = "",
  Vg = (e, t) => {
    const r = e.length,
      n = new Array(r);
    let i = 0;
    e.forEach((s, o) => {
      $o(s, !1, (a) => {
        (n[o] = a), ++i === r && t(n.join(Ju));
      });
    });
  },
  Ng = (e, t) => {
    const r = e.split(Ju),
      n = [];
    for (let i = 0; i < r.length; i++) {
      const s = Ko(r[i], t);
      if ((n.push(s), s.type === "error")) break;
    }
    return n;
  };
function Ig() {
  return new TransformStream({
    transform(e, t) {
      kg(e, (r) => {
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
let gs;
function Dn(e) {
  return e.reduce((t, r) => t + r.length, 0);
}
function wn(e, t) {
  if (e[0].length === t) return e.shift();
  const r = new Uint8Array(t);
  let n = 0;
  for (let i = 0; i < t; i++)
    (r[i] = e[0][n++]), n === e[0].length && (e.shift(), (n = 0));
  return e.length && n < e[0].length && (e[0] = e[0].slice(n)), r;
}
function Ug(e, t) {
  gs || (gs = new TextDecoder());
  const r = [];
  let n = 0,
    i = -1,
    s = !1;
  return new TransformStream({
    transform(o, a) {
      for (r.push(o); ; ) {
        if (n === 0) {
          if (Dn(r) < 1) break;
          const l = wn(r, 1);
          (s = (l[0] & 128) === 128),
            (i = l[0] & 127),
            i < 126 ? (n = 3) : i === 126 ? (n = 1) : (n = 2);
        } else if (n === 1) {
          if (Dn(r) < 2) break;
          const l = wn(r, 2);
          (i = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0)),
            (n = 3);
        } else if (n === 2) {
          if (Dn(r) < 8) break;
          const l = wn(r, 8),
            c = new DataView(l.buffer, l.byteOffset, l.length),
            u = c.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            a.enqueue(Ys);
            break;
          }
          (i = u * Math.pow(2, 32) + c.getUint32(4)), (n = 3);
        } else {
          if (Dn(r) < i) break;
          const l = wn(r, i);
          a.enqueue(Ko(s ? l : gs.decode(l), t)), (n = 0);
        }
        if (i === 0 || i > e) {
          a.enqueue(Ys);
          break;
        }
      }
    },
  });
}
const Qu = 4;
function Fe(e) {
  if (e) return Hg(e);
}
function Hg(e) {
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
  jg = "arraybuffer";
function ef(e, ...t) {
  return t.reduce((r, n) => (e.hasOwnProperty(n) && (r[n] = e[n]), r), {});
}
const zg = Ze.setTimeout,
  qg = Ze.clearTimeout;
function Hi(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = zg.bind(Ze)), (e.clearTimeoutFn = qg.bind(Ze)))
    : ((e.setTimeoutFn = Ze.setTimeout.bind(Ze)),
      (e.clearTimeoutFn = Ze.clearTimeout.bind(Ze)));
}
const Wg = 1.33;
function $g(e) {
  return typeof e == "string"
    ? Kg(e)
    : Math.ceil((e.byteLength || e.size) * Wg);
}
function Kg(e) {
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
function tf() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function Xg(e) {
  let t = "";
  for (let r in e)
    e.hasOwnProperty(r) &&
      (t.length && (t += "&"),
      (t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r])));
  return t;
}
function Gg(e) {
  let t = {},
    r = e.split("&");
  for (let n = 0, i = r.length; n < i; n++) {
    let s = r[n].split("=");
    t[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return t;
}
class Yg extends Error {
  constructor(t, r, n) {
    super(t),
      (this.description = r),
      (this.context = n),
      (this.type = "TransportError");
  }
}
class Xo extends Fe {
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
    return super.emitReserved("error", new Yg(t, r, n)), this;
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
    const r = Ko(t, this.socket.binaryType);
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
    const r = Xg(t);
    return r.length ? "?" + r : "";
  }
}
class Zg extends Xo {
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
    Ng(t, this.socket.binaryType).forEach(r),
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
      Vg(t, (r) => {
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
        (r[this.opts.timestampParam] = tf()),
      !this.supportsBinary && !r.sid && (r.b64 = 1),
      this.createUri(t, r)
    );
  }
}
let rf = !1;
try {
  rf =
    typeof XMLHttpRequest != "undefined" &&
    "withCredentials" in new XMLHttpRequest();
} catch (e) {}
const Jg = rf;
function Qg() {}
class ev extends Zg {
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
let pr = class gi extends Fe {
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
    const r = ef(
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
      if (((this._xhr.onreadystatechange = Qg), t))
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
pr.requestsCount = 0;
pr.requests = {};
if (typeof document != "undefined") {
  if (typeof attachEvent == "function") attachEvent("onunload", kc);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Ze ? "pagehide" : "unload";
    addEventListener(e, kc, !1);
  }
}
function kc() {
  for (let e in pr.requests)
    pr.requests.hasOwnProperty(e) && pr.requests[e].abort();
}
const tv = (function () {
  const e = nf({ xdomain: !1 });
  return e && e.responseType !== null;
})();
class rv extends ev {
  constructor(t) {
    super(t);
    const r = t && t.forceBase64;
    this.supportsBinary = tv && !r;
  }
  request(t = {}) {
    return (
      Object.assign(t, { xd: this.xd }, this.opts), new pr(nf, this.uri(), t)
    );
  }
}
function nf(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest != "undefined" && (!t || Jg))
      return new XMLHttpRequest();
  } catch (r) {}
  if (!t)
    try {
      return new Ze[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (r) {}
}
const sf =
  typeof navigator != "undefined" &&
  typeof navigator.product == "string" &&
  navigator.product.toLowerCase() === "reactnative";
class nv extends Xo {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(),
      r = this.opts.protocols,
      n = sf
        ? {}
        : ef(
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
      $o(n, this.supportsBinary, (s) => {
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
      this.opts.timestampRequests && (r[this.opts.timestampParam] = tf()),
      this.supportsBinary || (r.b64 = 1),
      this.createUri(t, r)
    );
  }
}
const vs = Ze.WebSocket || Ze.MozWebSocket;
class iv extends nv {
  createSocket(t, r, n) {
    return sf ? new vs(t, r, n) : r ? new vs(t, r) : new vs(t);
  }
  doWrite(t, r) {
    this.ws.send(r);
  }
}
class sv extends Xo {
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
          const r = Ug(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            n = t.readable.pipeThrough(r).getReader(),
            i = Ig();
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
const ov = { websocket: iv, webtransport: sv, polling: rv },
  av =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  cv = [
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
function Zs(e) {
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
  let i = av.exec(e || ""),
    s = {},
    o = 14;
  for (; o--; ) s[cv[o]] = i[o] || "";
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
    (s.pathNames = lv(s, s.path)),
    (s.queryKey = uv(s, s.query)),
    s
  );
}
function lv(e, t) {
  const r = /\/{2,9}/g,
    n = t.replace(r, "/").split("/");
  return (
    (t.slice(0, 1) == "/" || t.length === 0) && n.splice(0, 1),
    t.slice(-1) == "/" && n.splice(n.length - 1, 1),
    n
  );
}
function uv(e, t) {
  const r = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (n, i, s) {
      i && (r[i] = s);
    }),
    r
  );
}
const Js =
    typeof addEventListener == "function" &&
    typeof removeEventListener == "function",
  vi = [];
Js &&
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
      (this.binaryType = jg),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      t && typeof t == "object" && ((r = t), (t = null)),
      t)
    ) {
      const n = Zs(t);
      (r.hostname = n.host),
        (r.secure = n.protocol === "https" || n.protocol === "wss"),
        (r.port = n.port),
        n.query && (r.query = n.query);
    } else r.host && (r.hostname = Zs(r.host).host);
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
        (this.opts.query = Gg(this.opts.query)),
      Js &&
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
    (r.EIO = Qu), (r.transport = t), this.id && (r.sid = this.id);
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
      if ((i && (r += $g(i)), n > 0 && r > this._maxPayload))
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
        Js &&
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
Bt.protocol = Qu;
class fv extends Bt {
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
let hv = class extends fv {
  constructor(t, r = {}) {
    const n = typeof t == "object" ? t : r;
    (!n.transports || (n.transports && typeof n.transports[0] == "string")) &&
      (n.transports = (n.transports || ["polling", "websocket", "webtransport"])
        .map((i) => ov[i])
        .filter((i) => !!i)),
      super(t, n);
  }
};
function dv(e, t = "", r) {
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
      (n = Zs(e))),
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
const pv = typeof ArrayBuffer == "function",
  xv = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  of = Object.prototype.toString,
  mv =
    typeof Blob == "function" ||
    (typeof Blob != "undefined" &&
      of.call(Blob) === "[object BlobConstructor]"),
  yv =
    typeof File == "function" ||
    (typeof File != "undefined" &&
      of.call(File) === "[object FileConstructor]");
function Go(e) {
  return (
    (pv && (e instanceof ArrayBuffer || xv(e))) ||
    (mv && e instanceof Blob) ||
    (yv && e instanceof File)
  );
}
function Ei(e, t) {
  if (!e || typeof e != "object") return !1;
  if (Array.isArray(e)) {
    for (let r = 0, n = e.length; r < n; r++) if (Ei(e[r])) return !0;
    return !1;
  }
  if (Go(e)) return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Ei(e.toJSON(), !0);
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && Ei(e[r])) return !0;
  return !1;
}
function gv(e) {
  const t = [],
    r = e.data,
    n = e;
  return (
    (n.data = Qs(r, t)), (n.attachments = t.length), { packet: n, buffers: t }
  );
}
function Qs(e, t) {
  if (!e) return e;
  if (Go(e)) {
    const r = { _placeholder: !0, num: t.length };
    return t.push(e), r;
  } else if (Array.isArray(e)) {
    const r = new Array(e.length);
    for (let n = 0; n < e.length; n++) r[n] = Qs(e[n], t);
    return r;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const r = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (r[n] = Qs(e[n], t));
    return r;
  }
  return e;
}
function vv(e, t) {
  return (e.data = eo(e.data, t)), delete e.attachments, e;
}
function eo(e, t) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let r = 0; r < e.length; r++) e[r] = eo(e[r], t);
  else if (typeof e == "object")
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (e[r] = eo(e[r], t));
  return e;
}
const Ev = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  bv = 5;
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
class Av {
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
    const r = gv(t),
      n = this.encodeAsString(r.packet),
      i = r.buffers;
    return i.unshift(n), i;
  }
}
function Lc(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Yo extends Fe {
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
          (this.reconstructor = new Cv(r)),
          r.attachments === 0 && super.emitReserved("decoded", r))
        : super.emitReserved("decoded", r);
    } else if (Go(t) || t.base64)
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
      if (Yo.isPayloadValid(n.type, s)) n.data = s;
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
        return Lc(r);
      case ae.DISCONNECT:
        return r === void 0;
      case ae.CONNECT_ERROR:
        return typeof r == "string" || Lc(r);
      case ae.EVENT:
      case ae.BINARY_EVENT:
        return (
          Array.isArray(r) &&
          (typeof r[0] == "number" ||
            (typeof r[0] == "string" && Ev.indexOf(r[0]) === -1))
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
class Cv {
  constructor(t) {
    (this.packet = t), (this.buffers = []), (this.reconPack = t);
  }
  takeBinaryData(t) {
    if (
      (this.buffers.push(t), this.buffers.length === this.reconPack.attachments)
    ) {
      const r = vv(this.reconPack, this.buffers);
      return this.finishedReconstruction(), r;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const Bv = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: Yo,
      Encoder: Av,
      get PacketType() {
        return ae;
      },
      protocol: bv,
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
const Dv = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class af extends Fe {
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
    if (Dv.hasOwnProperty(t))
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
class to extends Fe {
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
    const i = r.parser || Bv;
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
    this.engine = new hv(this.uri, this.opts);
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
        : ((n = new af(this, t, r)), (this.nsps[t] = n)),
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
function Es(e, t) {
  typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
  const r = dv(e, t.path || "/socket.io"),
    n = r.source,
    i = r.id,
    s = r.path,
    o = Ur[i] && s in Ur[i].nsps,
    a = t.forceNew || t["force new connection"] || t.multiplex === !1 || o;
  let l;
  return (
    a ? (l = new to(n, t)) : (Ur[i] || (Ur[i] = new to(n, t)), (l = Ur[i])),
    r.query && !t.query && (t.query = r.queryKey),
    l.socket(r.path, t)
  );
}
Object.assign(Es, { Manager: to, Socket: af, io: Es, connect: Es });
export {
  _e as A,
  Tv as C,
  bs as E,
  Ai as a,
  Lf as b,
  _v as c,
  Sv as d,
  Se as e,
  kv as f,
  df as g,
  Rv as h,
  xe as i,
  qr as j,
  Es as l,
  ar as m,
  $t as p,
  Of as r,
  _i as s,
};
