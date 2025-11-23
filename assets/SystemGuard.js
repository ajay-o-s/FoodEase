var Sd = Object.defineProperty,
  _d = Object.defineProperties;
var Fd = Object.getOwnPropertyDescriptors;
var Ar = Object.getOwnPropertySymbols;
var ga = Object.prototype.hasOwnProperty,
  ba = Object.prototype.propertyIsEnumerable;
var yt = (e, t) => ((t = Symbol[e]) ? t : Symbol.for("Symbol." + e)),
  Td = (e) => {
    throw TypeError(e);
  };
var pa = (e, t, r) =>
    t in e
      ? Sd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  O = (e, t) => {
    for (var r in t || (t = {})) ga.call(t, r) && pa(e, r, t[r]);
    if (Ar) for (var r of Ar(t)) ba.call(t, r) && pa(e, r, t[r]);
    return e;
  },
  G = (e, t) => _d(e, Fd(t));
var _e = (e, t) => {
  var r = {};
  for (var s in e) ga.call(e, s) && t.indexOf(s) < 0 && (r[s] = e[s]);
  if (e != null && Ar)
    for (var s of Ar(e)) t.indexOf(s) < 0 && ba.call(e, s) && (r[s] = e[s]);
  return r;
};
var ot = function (e, t) {
    (this[0] = e), (this[1] = t);
  },
  Qs = (e, t, r) => {
    var s = (i, l, d, c) => {
        try {
          var u = r[i](l),
            f = (l = u.value) instanceof ot,
            h = u.done;
          Promise.resolve(f ? l[0] : l)
            .then((x) =>
              f
                ? s(
                    i === "return" ? i : "next",
                    l[1] ? { done: x.done, value: x.value } : x,
                    d,
                    c,
                  )
                : d({ value: x, done: h }),
            )
            .catch((x) => s("throw", x, d, c));
        } catch (x) {
          c(x);
        }
      },
      n = (i) => (a[i] = (l) => new Promise((d, c) => s(i, l, d, c))),
      a = {};
    return (
      (r = r.apply(e, t)),
      (a[yt("asyncIterator")] = () => a),
      n("next"),
      n("throw"),
      n("return"),
      a
    );
  },
  Js = (e) => {
    var t = e[yt("asyncIterator")],
      r = !1,
      s,
      n = {};
    return (
      t == null
        ? ((t = e[yt("iterator")]()), (s = (a) => (n[a] = (i) => t[a](i))))
        : ((t = t.call(e)),
          (s = (a) =>
            (n[a] = (i) => {
              if (r) {
                if (((r = !1), a === "throw")) throw i;
                return i;
              }
              return (
                (r = !0),
                {
                  done: !1,
                  value: new ot(
                    new Promise((l) => {
                      var d = t[a](i);
                      d instanceof Object || Td("Object expected"), l(d);
                    }),
                    1,
                  ),
                }
              );
            }))),
      (n[yt("iterator")] = () => n),
      s("next"),
      "throw" in t
        ? s("throw")
        : (n.throw = (a) => {
            throw a;
          }),
      "return" in t && s("return"),
      n
    );
  },
  va = (e, t, r) =>
    (t = e[yt("asyncIterator")])
      ? t.call(e)
      : ((e = e[yt("iterator")]()),
        (t = {}),
        (r = (s, n) =>
          (n = e[s]) &&
          (t[s] = (a) =>
            new Promise(
              (i, l, d) => (
                (a = n.call(e, a)),
                (d = a.done),
                Promise.resolve(a.value).then(
                  (c) => i({ value: c, done: d }),
                  l,
                )
              ),
            ))),
        r("next"),
        r("return"),
        t);
import {
  c as J,
  g as Rd,
  a as en,
  b as Pd,
  r as _,
  j as o,
  U as Md,
  u as Ld,
  C as Od,
  d as Id,
  S as q0,
  e as Vd,
  F as $d,
} from "./index.js";
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ud = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse",
      },
    ],
  ],
  tn = J("activity", Ud);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zd = [
    ["path", { d: "M12 6.528V3a1 1 0 0 1 1-1h0", key: "11qiee" }],
    [
      "path",
      {
        d: "M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21",
        key: "110c12",
      },
    ],
  ],
  ya = J("apple", zd);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hd = [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
  ],
  ho = J("arrow-left", Hd);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qd = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  W0 = J("arrow-right", qd);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wd = [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ],
  Kd = J("book-open", Wd);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yd = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  K0 = J("calendar", Yd);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xd = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  Gd = J("chevron-down", Xd);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zd = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  Bt = J("chevron-left", Zd);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qd = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  Y0 = J("chevron-right", Qd);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jd = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  At = J("circle-alert", Jd);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eu = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  X0 = J("circle-check-big", eu);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tu = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  wa = J("circle-check", tu);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ru = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
    ["path", { d: "m9 9 6 6", key: "z0biqf" }],
  ],
  Ca = J("circle-x", ru);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const su = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  Jt = J("clock", su);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nu = [
    [
      "path",
      {
        d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
        key: "1vdc57",
      },
    ],
    ["path", { d: "M5 21h14", key: "11awu3" }],
  ],
  ou = J("crown", nu);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const au = [
    ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
    [
      "path",
      { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
    ],
  ],
  Tr = J("dollar-sign", au);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iu = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ],
  _n = J("download", iu);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lu = [
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
  cu = J("file-text", lu);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const du = [
    [
      "path",
      {
        d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
        key: "96xj49",
      },
    ],
  ],
  uu = J("flame", du);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hu = [
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
  fu = J("house", hu);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xu = [
    ["path", { d: "M16 10h2", key: "8sgtl7" }],
    ["path", { d: "M16 14h2", key: "epxaof" }],
    ["path", { d: "M6.17 15a3 3 0 0 1 5.66 0", key: "n6f512" }],
    ["circle", { cx: "9", cy: "11", r: "2", key: "yxgjnd" }],
    [
      "rect",
      { x: "2", y: "5", width: "20", height: "14", rx: "2", key: "qneu4z" },
    ],
  ],
  rn = J("id-card", xu);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mu = [
    ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
    ["path", { d: "M21 12H9", key: "dn1m92" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ],
  pu = J("log-out", mu);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gu = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  bu = J("mail", gu);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vu = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  yu = J("phone", vu);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wu = [
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
  Cu = J("pizza", wu);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Au = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  Eu = J("plus", Au);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nu = [
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
  Bs = J("refresh-cw", Nu);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ku = [
    [
      "path",
      { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
    ],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ],
  ju = J("rotate-ccw", ku);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Du = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  Rr = J("search", Du);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bu = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  Su = J("send", Bu);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _u = [
    [
      "path",
      {
        d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
        key: "1i5ecw",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  Fu = J("settings", _u);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tu = [
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
  qt = J("smartphone", Tu);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ru = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  Pu = J("star", Ru);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mu = [
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
  Lu = J("triangle-alert", Mu);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ou = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  Fn = J("user", Ou);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Iu = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  Vu = J("users", Iu);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $u = [
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
  Uu = J("utensils-crossed", $u);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zu = [
    ["path", { d: "M12 20h.01", key: "zekei9" }],
    ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
    ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
    ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
    ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
    ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ],
  Aa = J("wifi-off", zu);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hu = [
    ["path", { d: "M12 20h.01", key: "zekei9" }],
    ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
    ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
    ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ],
  qu = J("wifi", Hu);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wu = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Ls = J("x", Wu);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ku = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  or = J("zap", Ku);
var Pr = { exports: {} };
function Yu(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
  );
}
var Mr = { exports: {} };
const Xu = {},
  Gu = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Xu },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Zu = Rd(Gu);
var Qu = Mr.exports,
  Ea;
function te() {
  return (
    Ea ||
      ((Ea = 1),
      (function (e, t) {
        (function (r, s) {
          e.exports = s();
        })(Qu, function () {
          var r =
            r ||
            (function (s, n) {
              var a;
              if (
                (typeof window != "undefined" &&
                  window.crypto &&
                  (a = window.crypto),
                typeof self != "undefined" && self.crypto && (a = self.crypto),
                typeof globalThis != "undefined" &&
                  globalThis.crypto &&
                  (a = globalThis.crypto),
                !a &&
                  typeof window != "undefined" &&
                  window.msCrypto &&
                  (a = window.msCrypto),
                !a && typeof en != "undefined" && en.crypto && (a = en.crypto),
                !a && typeof Yu == "function")
              )
                try {
                  a = Zu;
                } catch (b) {}
              var i = function () {
                  if (a) {
                    if (typeof a.getRandomValues == "function")
                      try {
                        return a.getRandomValues(new Uint32Array(1))[0];
                      } catch (b) {}
                    if (typeof a.randomBytes == "function")
                      try {
                        return a.randomBytes(4).readInt32LE();
                      } catch (b) {}
                  }
                  throw new Error(
                    "Native crypto module could not be used to get secure random number.",
                  );
                },
                l =
                  Object.create ||
                  (function () {
                    function b() {}
                    return function (v) {
                      var y;
                      return (
                        (b.prototype = v),
                        (y = new b()),
                        (b.prototype = null),
                        y
                      );
                    };
                  })(),
                d = {},
                c = (d.lib = {}),
                u = (c.Base = (function () {
                  return {
                    extend: function (b) {
                      var v = l(this);
                      return (
                        b && v.mixIn(b),
                        (!v.hasOwnProperty("init") || this.init === v.init) &&
                          (v.init = function () {
                            v.$super.init.apply(this, arguments);
                          }),
                        (v.init.prototype = v),
                        (v.$super = this),
                        v
                      );
                    },
                    create: function () {
                      var b = this.extend();
                      return b.init.apply(b, arguments), b;
                    },
                    init: function () {},
                    mixIn: function (b) {
                      for (var v in b) b.hasOwnProperty(v) && (this[v] = b[v]);
                      b.hasOwnProperty("toString") &&
                        (this.toString = b.toString);
                    },
                    clone: function () {
                      return this.init.prototype.extend(this);
                    },
                  };
                })()),
                f = (c.WordArray = u.extend({
                  init: function (b, v) {
                    (b = this.words = b || []),
                      v != n
                        ? (this.sigBytes = v)
                        : (this.sigBytes = b.length * 4);
                  },
                  toString: function (b) {
                    return (b || x).stringify(this);
                  },
                  concat: function (b) {
                    var v = this.words,
                      y = b.words,
                      C = this.sigBytes,
                      E = b.sigBytes;
                    if ((this.clamp(), C % 4))
                      for (var N = 0; N < E; N++) {
                        var j = (y[N >>> 2] >>> (24 - (N % 4) * 8)) & 255;
                        v[(C + N) >>> 2] |= j << (24 - ((C + N) % 4) * 8);
                      }
                    else
                      for (var S = 0; S < E; S += 4)
                        v[(C + S) >>> 2] = y[S >>> 2];
                    return (this.sigBytes += E), this;
                  },
                  clamp: function () {
                    var b = this.words,
                      v = this.sigBytes;
                    (b[v >>> 2] &= 4294967295 << (32 - (v % 4) * 8)),
                      (b.length = s.ceil(v / 4));
                  },
                  clone: function () {
                    var b = u.clone.call(this);
                    return (b.words = this.words.slice(0)), b;
                  },
                  random: function (b) {
                    for (var v = [], y = 0; y < b; y += 4) v.push(i());
                    return new f.init(v, b);
                  },
                })),
                h = (d.enc = {}),
                x = (h.Hex = {
                  stringify: function (b) {
                    for (
                      var v = b.words, y = b.sigBytes, C = [], E = 0;
                      E < y;
                      E++
                    ) {
                      var N = (v[E >>> 2] >>> (24 - (E % 4) * 8)) & 255;
                      C.push((N >>> 4).toString(16)),
                        C.push((N & 15).toString(16));
                    }
                    return C.join("");
                  },
                  parse: function (b) {
                    for (var v = b.length, y = [], C = 0; C < v; C += 2)
                      y[C >>> 3] |=
                        parseInt(b.substr(C, 2), 16) << (24 - (C % 8) * 4);
                    return new f.init(y, v / 2);
                  },
                }),
                m = (h.Latin1 = {
                  stringify: function (b) {
                    for (
                      var v = b.words, y = b.sigBytes, C = [], E = 0;
                      E < y;
                      E++
                    ) {
                      var N = (v[E >>> 2] >>> (24 - (E % 4) * 8)) & 255;
                      C.push(String.fromCharCode(N));
                    }
                    return C.join("");
                  },
                  parse: function (b) {
                    for (var v = b.length, y = [], C = 0; C < v; C++)
                      y[C >>> 2] |=
                        (b.charCodeAt(C) & 255) << (24 - (C % 4) * 8);
                    return new f.init(y, v);
                  },
                }),
                g = (h.Utf8 = {
                  stringify: function (b) {
                    try {
                      return decodeURIComponent(escape(m.stringify(b)));
                    } catch (v) {
                      throw new Error("Malformed UTF-8 data");
                    }
                  },
                  parse: function (b) {
                    return m.parse(unescape(encodeURIComponent(b)));
                  },
                }),
                p = (c.BufferedBlockAlgorithm = u.extend({
                  reset: function () {
                    (this._data = new f.init()), (this._nDataBytes = 0);
                  },
                  _append: function (b) {
                    typeof b == "string" && (b = g.parse(b)),
                      this._data.concat(b),
                      (this._nDataBytes += b.sigBytes);
                  },
                  _process: function (b) {
                    var v,
                      y = this._data,
                      C = y.words,
                      E = y.sigBytes,
                      N = this.blockSize,
                      j = N * 4,
                      S = E / j;
                    b
                      ? (S = s.ceil(S))
                      : (S = s.max((S | 0) - this._minBufferSize, 0));
                    var A = S * N,
                      B = s.min(A * 4, E);
                    if (A) {
                      for (var k = 0; k < A; k += N) this._doProcessBlock(C, k);
                      (v = C.splice(0, A)), (y.sigBytes -= B);
                    }
                    return new f.init(v, B);
                  },
                  clone: function () {
                    var b = u.clone.call(this);
                    return (b._data = this._data.clone()), b;
                  },
                  _minBufferSize: 0,
                }));
              c.Hasher = p.extend({
                cfg: u.extend(),
                init: function (b) {
                  (this.cfg = this.cfg.extend(b)), this.reset();
                },
                reset: function () {
                  p.reset.call(this), this._doReset();
                },
                update: function (b) {
                  return this._append(b), this._process(), this;
                },
                finalize: function (b) {
                  b && this._append(b);
                  var v = this._doFinalize();
                  return v;
                },
                blockSize: 16,
                _createHelper: function (b) {
                  return function (v, y) {
                    return new b.init(y).finalize(v);
                  };
                },
                _createHmacHelper: function (b) {
                  return function (v, y) {
                    return new w.HMAC.init(b, y).finalize(v);
                  };
                },
              });
              var w = (d.algo = {});
              return d;
            })(Math);
          return r;
        });
      })(Mr)),
    Mr.exports
  );
}
var Lr = { exports: {} },
  Ju = Lr.exports,
  Na;
function Os() {
  return (
    Na ||
      ((Na = 1),
      (function (e, t) {
        (function (r, s) {
          e.exports = s(te());
        })(Ju, function (r) {
          return (
            (function (s) {
              var n = r,
                a = n.lib,
                i = a.Base,
                l = a.WordArray,
                d = (n.x64 = {});
              (d.Word = i.extend({
                init: function (c, u) {
                  (this.high = c), (this.low = u);
                },
              })),
                (d.WordArray = i.extend({
                  init: function (c, u) {
                    (c = this.words = c || []),
                      u != s
                        ? (this.sigBytes = u)
                        : (this.sigBytes = c.length * 8);
                  },
                  toX32: function () {
                    for (
                      var c = this.words, u = c.length, f = [], h = 0;
                      h < u;
                      h++
                    ) {
                      var x = c[h];
                      f.push(x.high), f.push(x.low);
                    }
                    return l.create(f, this.sigBytes);
                  },
                  clone: function () {
                    for (
                      var c = i.clone.call(this),
                        u = (c.words = this.words.slice(0)),
                        f = u.length,
                        h = 0;
                      h < f;
                      h++
                    )
                      u[h] = u[h].clone();
                    return c;
                  },
                }));
            })(),
            r
          );
        });
      })(Lr)),
    Lr.exports
  );
}
var Or = { exports: {} },
  eh = Or.exports,
  ka;
function th() {
  return (
    ka ||
      ((ka = 1),
      (function (e, t) {
        (function (r, s) {
          e.exports = s(te());
        })(eh, function (r) {
          return (
            (function () {
              if (typeof ArrayBuffer == "function") {
                var s = r,
                  n = s.lib,
                  a = n.WordArray,
                  i = a.init,
                  l = (a.init = function (d) {
                    if (
                      (d instanceof ArrayBuffer && (d = new Uint8Array(d)),
                      (d instanceof Int8Array ||
                        (typeof Uint8ClampedArray != "undefined" &&
                          d instanceof Uint8ClampedArray) ||
                        d instanceof Int16Array ||
                        d instanceof Uint16Array ||
                        d instanceof Int32Array ||
                        d instanceof Uint32Array ||
                        d instanceof Float32Array ||
                        d instanceof Float64Array) &&
                        (d = new Uint8Array(
                          d.buffer,
                          d.byteOffset,
                          d.byteLength,
                        )),
                      d instanceof Uint8Array)
                    ) {
                      for (var c = d.byteLength, u = [], f = 0; f < c; f++)
                        u[f >>> 2] |= d[f] << (24 - (f % 4) * 8);
                      i.call(this, u, c);
                    } else i.apply(this, arguments);
                  });
                l.prototype = a;
              }
            })(),
            r.lib.WordArray
          );
        });
      })(Or)),
    Or.exports
  );
}
var Ir = { exports: {} },
  rh = Ir.exports,
  ja;
function sh() {
  return (
    ja ||
      ((ja = 1),
      (function (e, t) {
        (function (r, s) {
          e.exports = s(te());
        })(rh, function (r) {
          return (
            (function () {
              var s = r,
                n = s.lib,
                a = n.WordArray,
                i = s.enc;
              (i.Utf16 = i.Utf16BE =
                {
                  stringify: function (d) {
                    for (
                      var c = d.words, u = d.sigBytes, f = [], h = 0;
                      h < u;
                      h += 2
                    ) {
                      var x = (c[h >>> 2] >>> (16 - (h % 4) * 8)) & 65535;
                      f.push(String.fromCharCode(x));
                    }
                    return f.join("");
                  },
                  parse: function (d) {
                    for (var c = d.length, u = [], f = 0; f < c; f++)
                      u[f >>> 1] |= d.charCodeAt(f) << (16 - (f % 2) * 16);
                    return a.create(u, c * 2);
                  },
                }),
                (i.Utf16LE = {
                  stringify: function (d) {
                    for (
                      var c = d.words, u = d.sigBytes, f = [], h = 0;
                      h < u;
                      h += 2
                    ) {
                      var x = l((c[h >>> 2] >>> (16 - (h % 4) * 8)) & 65535);
                      f.push(String.fromCharCode(x));
                    }
                    return f.join("");
                  },
                  parse: function (d) {
                    for (var c = d.length, u = [], f = 0; f < c; f++)
                      u[f >>> 1] |= l(d.charCodeAt(f) << (16 - (f % 2) * 16));
                    return a.create(u, c * 2);
                  },
                });
              function l(d) {
                return ((d << 8) & 4278255360) | ((d >>> 8) & 16711935);
              }
            })(),
            r.enc.Utf16
          );
        });
      })(Ir)),
    Ir.exports
  );
}
var Vr = { exports: {} },
  nh = Vr.exports,
  Da;
function mt() {
  return (
    Da ||
      ((Da = 1),
      (function (e, t) {
        (function (r, s) {
          e.exports = s(te());
        })(nh, function (r) {
          return (
            (function () {
              var s = r,
                n = s.lib,
                a = n.WordArray,
                i = s.enc;
              i.Base64 = {
                stringify: function (d) {
                  var c = d.words,
                    u = d.sigBytes,
                    f = this._map;
                  d.clamp();
                  for (var h = [], x = 0; x < u; x += 3)
                    for (
                      var m = (c[x >>> 2] >>> (24 - (x % 4) * 8)) & 255,
                        g =
                          (c[(x + 1) >>> 2] >>> (24 - ((x + 1) % 4) * 8)) & 255,
                        p =
                          (c[(x + 2) >>> 2] >>> (24 - ((x + 2) % 4) * 8)) & 255,
                        w = (m << 16) | (g << 8) | p,
                        b = 0;
                      b < 4 && x + b * 0.75 < u;
                      b++
                    )
                      h.push(f.charAt((w >>> (6 * (3 - b))) & 63));
                  var v = f.charAt(64);
                  if (v) for (; h.length % 4; ) h.push(v);
                  return h.join("");
                },
                parse: function (d) {
                  var c = d.length,
                    u = this._map,
                    f = this._reverseMap;
                  if (!f) {
                    f = this._reverseMap = [];
                    for (var h = 0; h < u.length; h++) f[u.charCodeAt(h)] = h;
                  }
                  var x = u.charAt(64);
                  if (x) {
                    var m = d.indexOf(x);
                    m !== -1 && (c = m);
                  }
                  return l(d, c, f);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              };
              function l(d, c, u) {
                for (var f = [], h = 0, x = 0; x < c; x++)
                  if (x % 4) {
                    var m = u[d.charCodeAt(x - 1)] << ((x % 4) * 2),
                      g = u[d.charCodeAt(x)] >>> (6 - (x % 4) * 2),
                      p = m | g;
                    (f[h >>> 2] |= p << (24 - (h % 4) * 8)), h++;
                  }
                return a.create(f, h);
              }
            })(),
            r.enc.Base64
          );
        });
      })(Vr)),
    Vr.exports
  );
}
var $r = { exports: {} },
  oh = $r.exports,
  Ba;
function ah() {
  return (
    Ba ||
      ((Ba = 1),
      (function (e, t) {
        (function (r, s) {
          e.exports = s(te());
        })(oh, function (r) {
          return (
            (function () {
              var s = r,
                n = s.lib,
                a = n.WordArray,
                i = s.enc;
              i.Base64url = {
                stringify: function (d, c) {
                  c === void 0 && (c = !0);
                  var u = d.words,
                    f = d.sigBytes,
                    h = c ? this._safe_map : this._map;
                  d.clamp();
                  for (var x = [], m = 0; m < f; m += 3)
                    for (
                      var g = (u[m >>> 2] >>> (24 - (m % 4) * 8)) & 255,
                        p =
                          (u[(m + 1) >>> 2] >>> (24 - ((m + 1) % 4) * 8)) & 255,
                        w =
                          (u[(m + 2) >>> 2] >>> (24 - ((m + 2) % 4) * 8)) & 255,
                        b = (g << 16) | (p << 8) | w,
                        v = 0;
                      v < 4 && m + v * 0.75 < f;
                      v++
                    )
                      x.push(h.charAt((b >>> (6 * (3 - v))) & 63));
                  var y = h.charAt(64);
                  if (y) for (; x.length % 4; ) x.push(y);
                  return x.join("");
                },
                parse: function (d, c) {
                  c === void 0 && (c = !0);
                  var u = d.length,
                    f = c ? this._safe_map : this._map,
                    h = this._reverseMap;
                  if (!h) {
                    h = this._reverseMap = [];
                    for (var x = 0; x < f.length; x++) h[f.charCodeAt(x)] = x;
                  }
                  var m = f.charAt(64);
                  if (m) {
                    var g = d.indexOf(m);
                    g !== -1 && (u = g);
                  }
                  return l(d, u, h);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                _safe_map:
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
              };
              function l(d, c, u) {
                for (var f = [], h = 0, x = 0; x < c; x++)
                  if (x % 4) {
                    var m = u[d.charCodeAt(x - 1)] << ((x % 4) * 2),
                      g = u[d.charCodeAt(x)] >>> (6 - (x % 4) * 2),
                      p = m | g;
                    (f[h >>> 2] |= p << (24 - (h % 4) * 8)), h++;
                  }
                return a.create(f, h);
              }
            })(),
            r.enc.Base64url
          );
        });
      })($r)),
    $r.exports
  );
}
var Ur = { exports: {} },
  ih = Ur.exports,
  Sa;
function pt() {
  return (
    Sa ||
      ((Sa = 1),
      (function (e, t) {
        (function (r, s) {
          e.exports = s(te());
        })(ih, function (r) {
          return (
            (function (s) {
              var n = r,
                a = n.lib,
                i = a.WordArray,
                l = a.Hasher,
                d = n.algo,
                c = [];
              (function () {
                for (var g = 0; g < 64; g++)
                  c[g] = (s.abs(s.sin(g + 1)) * 4294967296) | 0;
              })();
              var u = (d.MD5 = l.extend({
                _doReset: function () {
                  this._hash = new i.init([
                    1732584193, 4023233417, 2562383102, 271733878,
                  ]);
                },
                _doProcessBlock: function (g, p) {
                  for (var w = 0; w < 16; w++) {
                    var b = p + w,
                      v = g[b];
                    g[b] =
                      (((v << 8) | (v >>> 24)) & 16711935) |
                      (((v << 24) | (v >>> 8)) & 4278255360);
                  }
                  var y = this._hash.words,
                    C = g[p + 0],
                    E = g[p + 1],
                    N = g[p + 2],
                    j = g[p + 3],
                    S = g[p + 4],
                    A = g[p + 5],
                    B = g[p + 6],
                    k = g[p + 7],
                    T = g[p + 8],
                    I = g[p + 9],
                    $ = g[p + 10],
                    H = g[p + 11],
                    W = g[p + 12],
                    q = g[p + 13],
                    Z = g[p + 14],
                    K = g[p + 15],
                    R = y[0],
                    M = y[1],
                    L = y[2],
                    D = y[3];
                  (R = f(R, M, L, D, C, 7, c[0])),
                    (D = f(D, R, M, L, E, 12, c[1])),
                    (L = f(L, D, R, M, N, 17, c[2])),
                    (M = f(M, L, D, R, j, 22, c[3])),
                    (R = f(R, M, L, D, S, 7, c[4])),
                    (D = f(D, R, M, L, A, 12, c[5])),
                    (L = f(L, D, R, M, B, 17, c[6])),
                    (M = f(M, L, D, R, k, 22, c[7])),
                    (R = f(R, M, L, D, T, 7, c[8])),
                    (D = f(D, R, M, L, I, 12, c[9])),
                    (L = f(L, D, R, M, $, 17, c[10])),
                    (M = f(M, L, D, R, H, 22, c[11])),
                    (R = f(R, M, L, D, W, 7, c[12])),
                    (D = f(D, R, M, L, q, 12, c[13])),
                    (L = f(L, D, R, M, Z, 17, c[14])),
                    (M = f(M, L, D, R, K, 22, c[15])),
                    (R = h(R, M, L, D, E, 5, c[16])),
                    (D = h(D, R, M, L, B, 9, c[17])),
                    (L = h(L, D, R, M, H, 14, c[18])),
                    (M = h(M, L, D, R, C, 20, c[19])),
                    (R = h(R, M, L, D, A, 5, c[20])),
                    (D = h(D, R, M, L, $, 9, c[21])),
                    (L = h(L, D, R, M, K, 14, c[22])),
                    (M = h(M, L, D, R, S, 20, c[23])),
                    (R = h(R, M, L, D, I, 5, c[24])),
                    (D = h(D, R, M, L, Z, 9, c[25])),
                    (L = h(L, D, R, M, j, 14, c[26])),
                    (M = h(M, L, D, R, T, 20, c[27])),
                    (R = h(R, M, L, D, q, 5, c[28])),
                    (D = h(D, R, M, L, N, 9, c[29])),
                    (L = h(L, D, R, M, k, 14, c[30])),
                    (M = h(M, L, D, R, W, 20, c[31])),
                    (R = x(R, M, L, D, A, 4, c[32])),
                    (D = x(D, R, M, L, T, 11, c[33])),
                    (L = x(L, D, R, M, H, 16, c[34])),
                    (M = x(M, L, D, R, Z, 23, c[35])),
                    (R = x(R, M, L, D, E, 4, c[36])),
                    (D = x(D, R, M, L, S, 11, c[37])),
                    (L = x(L, D, R, M, k, 16, c[38])),
                    (M = x(M, L, D, R, $, 23, c[39])),
                    (R = x(R, M, L, D, q, 4, c[40])),
                    (D = x(D, R, M, L, C, 11, c[41])),
                    (L = x(L, D, R, M, j, 16, c[42])),
                    (M = x(M, L, D, R, B, 23, c[43])),
                    (R = x(R, M, L, D, I, 4, c[44])),
                    (D = x(D, R, M, L, W, 11, c[45])),
                    (L = x(L, D, R, M, K, 16, c[46])),
                    (M = x(M, L, D, R, N, 23, c[47])),
                    (R = m(R, M, L, D, C, 6, c[48])),
                    (D = m(D, R, M, L, k, 10, c[49])),
                    (L = m(L, D, R, M, Z, 15, c[50])),
                    (M = m(M, L, D, R, A, 21, c[51])),
                    (R = m(R, M, L, D, W, 6, c[52])),
                    (D = m(D, R, M, L, j, 10, c[53])),
                    (L = m(L, D, R, M, $, 15, c[54])),
                    (M = m(M, L, D, R, E, 21, c[55])),
                    (R = m(R, M, L, D, T, 6, c[56])),
                    (D = m(D, R, M, L, K, 10, c[57])),
                    (L = m(L, D, R, M, B, 15, c[58])),
                    (M = m(M, L, D, R, q, 21, c[59])),
                    (R = m(R, M, L, D, S, 6, c[60])),
                    (D = m(D, R, M, L, H, 10, c[61])),
                    (L = m(L, D, R, M, N, 15, c[62])),
                    (M = m(M, L, D, R, I, 21, c[63])),
                    (y[0] = (y[0] + R) | 0),
                    (y[1] = (y[1] + M) | 0),
                    (y[2] = (y[2] + L) | 0),
                    (y[3] = (y[3] + D) | 0);
                },
                _doFinalize: function () {
                  var g = this._data,
                    p = g.words,
                    w = this._nDataBytes * 8,
                    b = g.sigBytes * 8;
                  p[b >>> 5] |= 128 << (24 - (b % 32));
                  var v = s.floor(w / 4294967296),
                    y = w;
                  (p[(((b + 64) >>> 9) << 4) + 15] =
                    (((v << 8) | (v >>> 24)) & 16711935) |
                    (((v << 24) | (v >>> 8)) & 4278255360)),
                    (p[(((b + 64) >>> 9) << 4) + 14] =
                      (((y << 8) | (y >>> 24)) & 16711935) |
                      (((y << 24) | (y >>> 8)) & 4278255360)),
                    (g.sigBytes = (p.length + 1) * 4),
                    this._process();
                  for (var C = this._hash, E = C.words, N = 0; N < 4; N++) {
                    var j = E[N];
                    E[N] =
                      (((j << 8) | (j >>> 24)) & 16711935) |
                      (((j << 24) | (j >>> 8)) & 4278255360);
                  }
                  return C;
                },
                clone: function () {
                  var g = l.clone.call(this);
                  return (g._hash = this._hash.clone()), g;
                },
              }));
              function f(g, p, w, b, v, y, C) {
                var E = g + ((p & w) | (~p & b)) + v + C;
                return ((E << y) | (E >>> (32 - y))) + p;
              }
              function h(g, p, w, b, v, y, C) {
                var E = g + ((p & b) | (w & ~b)) + v + C;
                return ((E << y) | (E >>> (32 - y))) + p;
              }
              function x(g, p, w, b, v, y, C) {
                var E = g + (p ^ w ^ b) + v + C;
                return ((E << y) | (E >>> (32 - y))) + p;
              }
              function m(g, p, w, b, v, y, C) {
                var E = g + (w ^ (p | ~b)) + v + C;
                return ((E << y) | (E >>> (32 - y))) + p;
              }
              (n.MD5 = l._createHelper(u)),
                (n.HmacMD5 = l._createHmacHelper(u));
            })(Math),
            r.MD5
          );
        });
      })(Ur)),
    Ur.exports
  );
}
var zr = { exports: {} },
  lh = zr.exports,
  _a;
function G0() {
  return (
    _a ||
      ((_a = 1),
      (function (e, t) {
        (function (r, s) {
          e.exports = s(te());
        })(lh, function (r) {
          return (
            (function () {
              var s = r,
                n = s.lib,
                a = n.WordArray,
                i = n.Hasher,
                l = s.algo,
                d = [],
                c = (l.SHA1 = i.extend({
                  _doReset: function () {
                    this._hash = new a.init([
                      1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                    ]);
                  },
                  _doProcessBlock: function (u, f) {
                    for (
                      var h = this._hash.words,
                        x = h[0],
                        m = h[1],
                        g = h[2],
                        p = h[3],
                        w = h[4],
                        b = 0;
                      b < 80;
                      b++
                    ) {
                      if (b < 16) d[b] = u[f + b] | 0;
                      else {
                        var v = d[b - 3] ^ d[b - 8] ^ d[b - 14] ^ d[b - 16];
                        d[b] = (v << 1) | (v >>> 31);
                      }
                      var y = ((x << 5) | (x >>> 27)) + w + d[b];
                      b < 20
                        ? (y += ((m & g) | (~m & p)) + 1518500249)
                        : b < 40
                          ? (y += (m ^ g ^ p) + 1859775393)
                          : b < 60
                            ? (y += ((m & g) | (m & p) | (g & p)) - 1894007588)
                            : (y += (m ^ g ^ p) - 899497514),
                        (w = p),
                        (p = g),
                        (g = (m << 30) | (m >>> 2)),
                        (m = x),
                        (x = y);
                    }
                    (h[0] = (h[0] + x) | 0),
                      (h[1] = (h[1] + m) | 0),
                      (h[2] = (h[2] + g) | 0),
                      (h[3] = (h[3] + p) | 0),
                      (h[4] = (h[4] + w) | 0);
                  },
                  _doFinalize: function () {
                    var u = this._data,
                      f = u.words,
                      h = this._nDataBytes * 8,
                      x = u.sigBytes * 8;
                    return (
                      (f[x >>> 5] |= 128 << (24 - (x % 32))),
                      (f[(((x + 64) >>> 9) << 4) + 14] = Math.floor(
                        h / 4294967296,
                      )),
                      (f[(((x + 64) >>> 9) << 4) + 15] = h),
                      (u.sigBytes = f.length * 4),
                      this._process(),
                      this._hash
                    );
                  },
                  clone: function () {
                    var u = i.clone.call(this);
                    return (u._hash = this._hash.clone()), u;
                  },
                }));
              (s.SHA1 = i._createHelper(c)),
                (s.HmacSHA1 = i._createHmacHelper(c));
            })(),
            r.SHA1
          );
        });
      })(zr)),
    zr.exports
  );
}
var Hr = { exports: {} },
  ch = Hr.exports,
  Fa;
function fo() {
  return (
    Fa ||
      ((Fa = 1),
      (function (e, t) {
        (function (r, s) {
          e.exports = s(te());
        })(ch, function (r) {
          return (
            (function (s) {
              var n = r,
                a = n.lib,
                i = a.WordArray,
                l = a.Hasher,
                d = n.algo,
                c = [],
                u = [];
              (function () {
                function x(w) {
                  for (var b = s.sqrt(w), v = 2; v <= b; v++)
                    if (!(w % v)) return !1;
                  return !0;
                }
                function m(w) {
                  return ((w - (w | 0)) * 4294967296) | 0;
                }
                for (var g = 2, p = 0; p < 64; )
                  x(g) &&
                    (p < 8 && (c[p] = m(s.pow(g, 1 / 2))),
                    (u[p] = m(s.pow(g, 1 / 3))),
                    p++),
                    g++;
              })();
              var f = [],
                h = (d.SHA256 = l.extend({
                  _doReset: function () {
                    this._hash = new i.init(c.slice(0));
                  },
                  _doProcessBlock: function (x, m) {
                    for (
                      var g = this._hash.words,
                        p = g[0],
                        w = g[1],
                        b = g[2],
                        v = g[3],
                        y = g[4],
                        C = g[5],
                        E = g[6],
                        N = g[7],
                        j = 0;
                      j < 64;
                      j++
                    ) {
                      if (j < 16) f[j] = x[m + j] | 0;
                      else {
                        var S = f[j - 15],
                          A =
                            ((S << 25) | (S >>> 7)) ^
                            ((S << 14) | (S >>> 18)) ^
                            (S >>> 3),
                          B = f[j - 2],
                          k =
                            ((B << 15) | (B >>> 17)) ^
                            ((B << 13) | (B >>> 19)) ^
                            (B >>> 10);
                        f[j] = A + f[j - 7] + k + f[j - 16];
                      }
                      var T = (y & C) ^ (~y & E),
                        I = (p & w) ^ (p & b) ^ (w & b),
                        $ =
                          ((p << 30) | (p >>> 2)) ^
                          ((p << 19) | (p >>> 13)) ^
                          ((p << 10) | (p >>> 22)),
                        H =
                          ((y << 26) | (y >>> 6)) ^
                          ((y << 21) | (y >>> 11)) ^
                          ((y << 7) | (y >>> 25)),
                        W = N + H + T + u[j] + f[j],
                        q = $ + I;
                      (N = E),
                        (E = C),
                        (C = y),
                        (y = (v + W) | 0),
                        (v = b),
                        (b = w),
                        (w = p),
                        (p = (W + q) | 0);
                    }
                    (g[0] = (g[0] + p) | 0),
                      (g[1] = (g[1] + w) | 0),
                      (g[2] = (g[2] + b) | 0),
                      (g[3] = (g[3] + v) | 0),
                      (g[4] = (g[4] + y) | 0),
                      (g[5] = (g[5] + C) | 0),
                      (g[6] = (g[6] + E) | 0),
                      (g[7] = (g[7] + N) | 0);
                  },
                  _doFinalize: function () {
                    var x = this._data,
                      m = x.words,
                      g = this._nDataBytes * 8,
                      p = x.sigBytes * 8;
                    return (
                      (m[p >>> 5] |= 128 << (24 - (p % 32))),
                      (m[(((p + 64) >>> 9) << 4) + 14] = s.floor(
                        g / 4294967296,
                      )),
                      (m[(((p + 64) >>> 9) << 4) + 15] = g),
                      (x.sigBytes = m.length * 4),
                      this._process(),
                      this._hash
                    );
                  },
                  clone: function () {
                    var x = l.clone.call(this);
                    return (x._hash = this._hash.clone()), x;
                  },
                }));
              (n.SHA256 = l._createHelper(h)),
                (n.HmacSHA256 = l._createHmacHelper(h));
            })(Math),
            r.SHA256
          );
        });
      })(Hr)),
    Hr.exports
  );
}
var qr = { exports: {} },
  dh = qr.exports,
  Ta;
function uh() {
  return (
    Ta ||
      ((Ta = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), fo());
        })(dh, function (r) {
          return (
            (function () {
              var s = r,
                n = s.lib,
                a = n.WordArray,
                i = s.algo,
                l = i.SHA256,
                d = (i.SHA224 = l.extend({
                  _doReset: function () {
                    this._hash = new a.init([
                      3238371032, 914150663, 812702999, 4144912697, 4290775857,
                      1750603025, 1694076839, 3204075428,
                    ]);
                  },
                  _doFinalize: function () {
                    var c = l._doFinalize.call(this);
                    return (c.sigBytes -= 4), c;
                  },
                }));
              (s.SHA224 = l._createHelper(d)),
                (s.HmacSHA224 = l._createHmacHelper(d));
            })(),
            r.SHA224
          );
        });
      })(qr)),
    qr.exports
  );
}
var Wr = { exports: {} },
  hh = Wr.exports,
  Ra;
function Z0() {
  return (
    Ra ||
      ((Ra = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), Os());
        })(hh, function (r) {
          return (
            (function () {
              var s = r,
                n = s.lib,
                a = n.Hasher,
                i = s.x64,
                l = i.Word,
                d = i.WordArray,
                c = s.algo;
              function u() {
                return l.create.apply(l, arguments);
              }
              var f = [
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
                h = [];
              (function () {
                for (var m = 0; m < 80; m++) h[m] = u();
              })();
              var x = (c.SHA512 = a.extend({
                _doReset: function () {
                  this._hash = new d.init([
                    new l.init(1779033703, 4089235720),
                    new l.init(3144134277, 2227873595),
                    new l.init(1013904242, 4271175723),
                    new l.init(2773480762, 1595750129),
                    new l.init(1359893119, 2917565137),
                    new l.init(2600822924, 725511199),
                    new l.init(528734635, 4215389547),
                    new l.init(1541459225, 327033209),
                  ]);
                },
                _doProcessBlock: function (m, g) {
                  for (
                    var p = this._hash.words,
                      w = p[0],
                      b = p[1],
                      v = p[2],
                      y = p[3],
                      C = p[4],
                      E = p[5],
                      N = p[6],
                      j = p[7],
                      S = w.high,
                      A = w.low,
                      B = b.high,
                      k = b.low,
                      T = v.high,
                      I = v.low,
                      $ = y.high,
                      H = y.low,
                      W = C.high,
                      q = C.low,
                      Z = E.high,
                      K = E.low,
                      R = N.high,
                      M = N.low,
                      L = j.high,
                      D = j.low,
                      z = S,
                      P = A,
                      Y = B,
                      U = k,
                      re = T,
                      ne = I,
                      V = $,
                      he = H,
                      le = W,
                      pe = q,
                      gt = Z,
                      Be = K,
                      wr = R,
                      $t = M,
                      Zs = L,
                      Ut = D,
                      Oe = 0;
                    Oe < 80;
                    Oe++
                  ) {
                    var Se,
                      Ze,
                      Cr = h[Oe];
                    if (Oe < 16)
                      (Ze = Cr.high = m[g + Oe * 2] | 0),
                        (Se = Cr.low = m[g + Oe * 2 + 1] | 0);
                    else {
                      var na = h[Oe - 15],
                        bt = na.high,
                        zt = na.low,
                        gd =
                          ((bt >>> 1) | (zt << 31)) ^
                          ((bt >>> 8) | (zt << 24)) ^
                          (bt >>> 7),
                        oa =
                          ((zt >>> 1) | (bt << 31)) ^
                          ((zt >>> 8) | (bt << 24)) ^
                          ((zt >>> 7) | (bt << 25)),
                        aa = h[Oe - 2],
                        vt = aa.high,
                        Ht = aa.low,
                        bd =
                          ((vt >>> 19) | (Ht << 13)) ^
                          ((vt << 3) | (Ht >>> 29)) ^
                          (vt >>> 6),
                        ia =
                          ((Ht >>> 19) | (vt << 13)) ^
                          ((Ht << 3) | (vt >>> 29)) ^
                          ((Ht >>> 6) | (vt << 26)),
                        la = h[Oe - 7],
                        vd = la.high,
                        yd = la.low,
                        ca = h[Oe - 16],
                        wd = ca.high,
                        da = ca.low;
                      (Se = oa + yd),
                        (Ze = gd + vd + (Se >>> 0 < oa >>> 0 ? 1 : 0)),
                        (Se = Se + ia),
                        (Ze = Ze + bd + (Se >>> 0 < ia >>> 0 ? 1 : 0)),
                        (Se = Se + da),
                        (Ze = Ze + wd + (Se >>> 0 < da >>> 0 ? 1 : 0)),
                        (Cr.high = Ze),
                        (Cr.low = Se);
                    }
                    var Cd = (le & gt) ^ (~le & wr),
                      ua = (pe & Be) ^ (~pe & $t),
                      Ad = (z & Y) ^ (z & re) ^ (Y & re),
                      Ed = (P & U) ^ (P & ne) ^ (U & ne),
                      Nd =
                        ((z >>> 28) | (P << 4)) ^
                        ((z << 30) | (P >>> 2)) ^
                        ((z << 25) | (P >>> 7)),
                      ha =
                        ((P >>> 28) | (z << 4)) ^
                        ((P << 30) | (z >>> 2)) ^
                        ((P << 25) | (z >>> 7)),
                      kd =
                        ((le >>> 14) | (pe << 18)) ^
                        ((le >>> 18) | (pe << 14)) ^
                        ((le << 23) | (pe >>> 9)),
                      jd =
                        ((pe >>> 14) | (le << 18)) ^
                        ((pe >>> 18) | (le << 14)) ^
                        ((pe << 23) | (le >>> 9)),
                      fa = f[Oe],
                      Dd = fa.high,
                      xa = fa.low,
                      De = Ut + jd,
                      Qe = Zs + kd + (De >>> 0 < Ut >>> 0 ? 1 : 0),
                      De = De + ua,
                      Qe = Qe + Cd + (De >>> 0 < ua >>> 0 ? 1 : 0),
                      De = De + xa,
                      Qe = Qe + Dd + (De >>> 0 < xa >>> 0 ? 1 : 0),
                      De = De + Se,
                      Qe = Qe + Ze + (De >>> 0 < Se >>> 0 ? 1 : 0),
                      ma = ha + Ed,
                      Bd = Nd + Ad + (ma >>> 0 < ha >>> 0 ? 1 : 0);
                    (Zs = wr),
                      (Ut = $t),
                      (wr = gt),
                      ($t = Be),
                      (gt = le),
                      (Be = pe),
                      (pe = (he + De) | 0),
                      (le = (V + Qe + (pe >>> 0 < he >>> 0 ? 1 : 0)) | 0),
                      (V = re),
                      (he = ne),
                      (re = Y),
                      (ne = U),
                      (Y = z),
                      (U = P),
                      (P = (De + ma) | 0),
                      (z = (Qe + Bd + (P >>> 0 < De >>> 0 ? 1 : 0)) | 0);
                  }
                  (A = w.low = A + P),
                    (w.high = S + z + (A >>> 0 < P >>> 0 ? 1 : 0)),
                    (k = b.low = k + U),
                    (b.high = B + Y + (k >>> 0 < U >>> 0 ? 1 : 0)),
                    (I = v.low = I + ne),
                    (v.high = T + re + (I >>> 0 < ne >>> 0 ? 1 : 0)),
                    (H = y.low = H + he),
                    (y.high = $ + V + (H >>> 0 < he >>> 0 ? 1 : 0)),
                    (q = C.low = q + pe),
                    (C.high = W + le + (q >>> 0 < pe >>> 0 ? 1 : 0)),
                    (K = E.low = K + Be),
                    (E.high = Z + gt + (K >>> 0 < Be >>> 0 ? 1 : 0)),
                    (M = N.low = M + $t),
                    (N.high = R + wr + (M >>> 0 < $t >>> 0 ? 1 : 0)),
                    (D = j.low = D + Ut),
                    (j.high = L + Zs + (D >>> 0 < Ut >>> 0 ? 1 : 0));
                },
                _doFinalize: function () {
                  var m = this._data,
                    g = m.words,
                    p = this._nDataBytes * 8,
                    w = m.sigBytes * 8;
                  (g[w >>> 5] |= 128 << (24 - (w % 32))),
                    (g[(((w + 128) >>> 10) << 5) + 30] = Math.floor(
                      p / 4294967296,
                    )),
                    (g[(((w + 128) >>> 10) << 5) + 31] = p),
                    (m.sigBytes = g.length * 4),
                    this._process();
                  var b = this._hash.toX32();
                  return b;
                },
                clone: function () {
                  var m = a.clone.call(this);
                  return (m._hash = this._hash.clone()), m;
                },
                blockSize: 1024 / 32,
              }));
              (s.SHA512 = a._createHelper(x)),
                (s.HmacSHA512 = a._createHmacHelper(x));
            })(),
            r.SHA512
          );
        });
      })(Wr)),
    Wr.exports
  );
}
var Kr = { exports: {} },
  fh = Kr.exports,
  Pa;
function xh() {
  return (
    Pa ||
      ((Pa = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), Os(), Z0());
        })(fh, function (r) {
          return (
            (function () {
              var s = r,
                n = s.x64,
                a = n.Word,
                i = n.WordArray,
                l = s.algo,
                d = l.SHA512,
                c = (l.SHA384 = d.extend({
                  _doReset: function () {
                    this._hash = new i.init([
                      new a.init(3418070365, 3238371032),
                      new a.init(1654270250, 914150663),
                      new a.init(2438529370, 812702999),
                      new a.init(355462360, 4144912697),
                      new a.init(1731405415, 4290775857),
                      new a.init(2394180231, 1750603025),
                      new a.init(3675008525, 1694076839),
                      new a.init(1203062813, 3204075428),
                    ]);
                  },
                  _doFinalize: function () {
                    var u = d._doFinalize.call(this);
                    return (u.sigBytes -= 16), u;
                  },
                }));
              (s.SHA384 = d._createHelper(c)),
                (s.HmacSHA384 = d._createHmacHelper(c));
            })(),
            r.SHA384
          );
        });
      })(Kr)),
    Kr.exports
  );
}
var Yr = { exports: {} },
  mh = Yr.exports,
  Ma;
function ph() {
  return (
    Ma ||
      ((Ma = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), Os());
        })(mh, function (r) {
          return (
            (function (s) {
              var n = r,
                a = n.lib,
                i = a.WordArray,
                l = a.Hasher,
                d = n.x64,
                c = d.Word,
                u = n.algo,
                f = [],
                h = [],
                x = [];
              (function () {
                for (var p = 1, w = 0, b = 0; b < 24; b++) {
                  f[p + 5 * w] = (((b + 1) * (b + 2)) / 2) % 64;
                  var v = w % 5,
                    y = (2 * p + 3 * w) % 5;
                  (p = v), (w = y);
                }
                for (var p = 0; p < 5; p++)
                  for (var w = 0; w < 5; w++)
                    h[p + 5 * w] = w + ((2 * p + 3 * w) % 5) * 5;
                for (var C = 1, E = 0; E < 24; E++) {
                  for (var N = 0, j = 0, S = 0; S < 7; S++) {
                    if (C & 1) {
                      var A = (1 << S) - 1;
                      A < 32 ? (j ^= 1 << A) : (N ^= 1 << (A - 32));
                    }
                    C & 128 ? (C = (C << 1) ^ 113) : (C <<= 1);
                  }
                  x[E] = c.create(N, j);
                }
              })();
              var m = [];
              (function () {
                for (var p = 0; p < 25; p++) m[p] = c.create();
              })();
              var g = (u.SHA3 = l.extend({
                cfg: l.cfg.extend({ outputLength: 512 }),
                _doReset: function () {
                  for (var p = (this._state = []), w = 0; w < 25; w++)
                    p[w] = new c.init();
                  this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
                },
                _doProcessBlock: function (p, w) {
                  for (
                    var b = this._state, v = this.blockSize / 2, y = 0;
                    y < v;
                    y++
                  ) {
                    var C = p[w + 2 * y],
                      E = p[w + 2 * y + 1];
                    (C =
                      (((C << 8) | (C >>> 24)) & 16711935) |
                      (((C << 24) | (C >>> 8)) & 4278255360)),
                      (E =
                        (((E << 8) | (E >>> 24)) & 16711935) |
                        (((E << 24) | (E >>> 8)) & 4278255360));
                    var N = b[y];
                    (N.high ^= E), (N.low ^= C);
                  }
                  for (var j = 0; j < 24; j++) {
                    for (var S = 0; S < 5; S++) {
                      for (var A = 0, B = 0, k = 0; k < 5; k++) {
                        var N = b[S + 5 * k];
                        (A ^= N.high), (B ^= N.low);
                      }
                      var T = m[S];
                      (T.high = A), (T.low = B);
                    }
                    for (var S = 0; S < 5; S++)
                      for (
                        var I = m[(S + 4) % 5],
                          $ = m[(S + 1) % 5],
                          H = $.high,
                          W = $.low,
                          A = I.high ^ ((H << 1) | (W >>> 31)),
                          B = I.low ^ ((W << 1) | (H >>> 31)),
                          k = 0;
                        k < 5;
                        k++
                      ) {
                        var N = b[S + 5 * k];
                        (N.high ^= A), (N.low ^= B);
                      }
                    for (var q = 1; q < 25; q++) {
                      var A,
                        B,
                        N = b[q],
                        Z = N.high,
                        K = N.low,
                        R = f[q];
                      R < 32
                        ? ((A = (Z << R) | (K >>> (32 - R))),
                          (B = (K << R) | (Z >>> (32 - R))))
                        : ((A = (K << (R - 32)) | (Z >>> (64 - R))),
                          (B = (Z << (R - 32)) | (K >>> (64 - R))));
                      var M = m[h[q]];
                      (M.high = A), (M.low = B);
                    }
                    var L = m[0],
                      D = b[0];
                    (L.high = D.high), (L.low = D.low);
                    for (var S = 0; S < 5; S++)
                      for (var k = 0; k < 5; k++) {
                        var q = S + 5 * k,
                          N = b[q],
                          z = m[q],
                          P = m[((S + 1) % 5) + 5 * k],
                          Y = m[((S + 2) % 5) + 5 * k];
                        (N.high = z.high ^ (~P.high & Y.high)),
                          (N.low = z.low ^ (~P.low & Y.low));
                      }
                    var N = b[0],
                      U = x[j];
                    (N.high ^= U.high), (N.low ^= U.low);
                  }
                },
                _doFinalize: function () {
                  var p = this._data,
                    w = p.words;
                  this._nDataBytes * 8;
                  var b = p.sigBytes * 8,
                    v = this.blockSize * 32;
                  (w[b >>> 5] |= 1 << (24 - (b % 32))),
                    (w[((s.ceil((b + 1) / v) * v) >>> 5) - 1] |= 128),
                    (p.sigBytes = w.length * 4),
                    this._process();
                  for (
                    var y = this._state,
                      C = this.cfg.outputLength / 8,
                      E = C / 8,
                      N = [],
                      j = 0;
                    j < E;
                    j++
                  ) {
                    var S = y[j],
                      A = S.high,
                      B = S.low;
                    (A =
                      (((A << 8) | (A >>> 24)) & 16711935) |
                      (((A << 24) | (A >>> 8)) & 4278255360)),
                      (B =
                        (((B << 8) | (B >>> 24)) & 16711935) |
                        (((B << 24) | (B >>> 8)) & 4278255360)),
                      N.push(B),
                      N.push(A);
                  }
                  return new i.init(N, C);
                },
                clone: function () {
                  for (
                    var p = l.clone.call(this),
                      w = (p._state = this._state.slice(0)),
                      b = 0;
                    b < 25;
                    b++
                  )
                    w[b] = w[b].clone();
                  return p;
                },
              }));
              (n.SHA3 = l._createHelper(g)),
                (n.HmacSHA3 = l._createHmacHelper(g));
            })(Math),
            r.SHA3
          );
        });
      })(Yr)),
    Yr.exports
  );
}
var Xr = { exports: {} },
  gh = Xr.exports,
  La;
function bh() {
  return (
    La ||
      ((La = 1),
      (function (e, t) {
        (function (r, s) {
          e.exports = s(te());
        })(gh, function (r) {
          /** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/ return (
            (function (s) {
              var n = r,
                a = n.lib,
                i = a.WordArray,
                l = a.Hasher,
                d = n.algo,
                c = i.create([
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4,
                  13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4,
                  9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8,
                  12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10,
                  14, 1, 3, 8, 11, 6, 15, 13,
                ]),
                u = i.create([
                  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11,
                  3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7,
                  14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15,
                  0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6,
                  2, 13, 14, 0, 3, 9, 11,
                ]),
                f = i.create([
                  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6,
                  8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6,
                  7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15,
                  14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8,
                  13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
                ]),
                h = i.create([
                  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13,
                  15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11,
                  8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14,
                  14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14,
                  6, 8, 13, 6, 5, 15, 13, 11, 11,
                ]),
                x = i.create([
                  0, 1518500249, 1859775393, 2400959708, 2840853838,
                ]),
                m = i.create([
                  1352829926, 1548603684, 1836072691, 2053994217, 0,
                ]),
                g = (d.RIPEMD160 = l.extend({
                  _doReset: function () {
                    this._hash = i.create([
                      1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                    ]);
                  },
                  _doProcessBlock: function (E, N) {
                    for (var j = 0; j < 16; j++) {
                      var S = N + j,
                        A = E[S];
                      E[S] =
                        (((A << 8) | (A >>> 24)) & 16711935) |
                        (((A << 24) | (A >>> 8)) & 4278255360);
                    }
                    var B = this._hash.words,
                      k = x.words,
                      T = m.words,
                      I = c.words,
                      $ = u.words,
                      H = f.words,
                      W = h.words,
                      q,
                      Z,
                      K,
                      R,
                      M,
                      L,
                      D,
                      z,
                      P,
                      Y;
                    (L = q = B[0]),
                      (D = Z = B[1]),
                      (z = K = B[2]),
                      (P = R = B[3]),
                      (Y = M = B[4]);
                    for (var U, j = 0; j < 80; j += 1)
                      (U = (q + E[N + I[j]]) | 0),
                        j < 16
                          ? (U += p(Z, K, R) + k[0])
                          : j < 32
                            ? (U += w(Z, K, R) + k[1])
                            : j < 48
                              ? (U += b(Z, K, R) + k[2])
                              : j < 64
                                ? (U += v(Z, K, R) + k[3])
                                : (U += y(Z, K, R) + k[4]),
                        (U = U | 0),
                        (U = C(U, H[j])),
                        (U = (U + M) | 0),
                        (q = M),
                        (M = R),
                        (R = C(K, 10)),
                        (K = Z),
                        (Z = U),
                        (U = (L + E[N + $[j]]) | 0),
                        j < 16
                          ? (U += y(D, z, P) + T[0])
                          : j < 32
                            ? (U += v(D, z, P) + T[1])
                            : j < 48
                              ? (U += b(D, z, P) + T[2])
                              : j < 64
                                ? (U += w(D, z, P) + T[3])
                                : (U += p(D, z, P) + T[4]),
                        (U = U | 0),
                        (U = C(U, W[j])),
                        (U = (U + Y) | 0),
                        (L = Y),
                        (Y = P),
                        (P = C(z, 10)),
                        (z = D),
                        (D = U);
                    (U = (B[1] + K + P) | 0),
                      (B[1] = (B[2] + R + Y) | 0),
                      (B[2] = (B[3] + M + L) | 0),
                      (B[3] = (B[4] + q + D) | 0),
                      (B[4] = (B[0] + Z + z) | 0),
                      (B[0] = U);
                  },
                  _doFinalize: function () {
                    var E = this._data,
                      N = E.words,
                      j = this._nDataBytes * 8,
                      S = E.sigBytes * 8;
                    (N[S >>> 5] |= 128 << (24 - (S % 32))),
                      (N[(((S + 64) >>> 9) << 4) + 14] =
                        (((j << 8) | (j >>> 24)) & 16711935) |
                        (((j << 24) | (j >>> 8)) & 4278255360)),
                      (E.sigBytes = (N.length + 1) * 4),
                      this._process();
                    for (var A = this._hash, B = A.words, k = 0; k < 5; k++) {
                      var T = B[k];
                      B[k] =
                        (((T << 8) | (T >>> 24)) & 16711935) |
                        (((T << 24) | (T >>> 8)) & 4278255360);
                    }
                    return A;
                  },
                  clone: function () {
                    var E = l.clone.call(this);
                    return (E._hash = this._hash.clone()), E;
                  },
                }));
              function p(E, N, j) {
                return E ^ N ^ j;
              }
              function w(E, N, j) {
                return (E & N) | (~E & j);
              }
              function b(E, N, j) {
                return (E | ~N) ^ j;
              }
              function v(E, N, j) {
                return (E & j) | (N & ~j);
              }
              function y(E, N, j) {
                return E ^ (N | ~j);
              }
              function C(E, N) {
                return (E << N) | (E >>> (32 - N));
              }
              (n.RIPEMD160 = l._createHelper(g)),
                (n.HmacRIPEMD160 = l._createHmacHelper(g));
            })(),
            r.RIPEMD160
          );
        });
      })(Xr)),
    Xr.exports
  );
}
var Gr = { exports: {} },
  vh = Gr.exports,
  Oa;
function xo() {
  return (
    Oa ||
      ((Oa = 1),
      (function (e, t) {
        (function (r, s) {
          e.exports = s(te());
        })(vh, function (r) {
          (function () {
            var s = r,
              n = s.lib,
              a = n.Base,
              i = s.enc,
              l = i.Utf8,
              d = s.algo;
            d.HMAC = a.extend({
              init: function (c, u) {
                (c = this._hasher = new c.init()),
                  typeof u == "string" && (u = l.parse(u));
                var f = c.blockSize,
                  h = f * 4;
                u.sigBytes > h && (u = c.finalize(u)), u.clamp();
                for (
                  var x = (this._oKey = u.clone()),
                    m = (this._iKey = u.clone()),
                    g = x.words,
                    p = m.words,
                    w = 0;
                  w < f;
                  w++
                )
                  (g[w] ^= 1549556828), (p[w] ^= 909522486);
                (x.sigBytes = m.sigBytes = h), this.reset();
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
                  f = u.finalize(c);
                u.reset();
                var h = u.finalize(this._oKey.clone().concat(f));
                return h;
              },
            });
          })();
        });
      })(Gr)),
    Gr.exports
  );
}
var Zr = { exports: {} },
  yh = Zr.exports,
  Ia;
function wh() {
  return (
    Ia ||
      ((Ia = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), fo(), xo());
        })(yh, function (r) {
          return (
            (function () {
              var s = r,
                n = s.lib,
                a = n.Base,
                i = n.WordArray,
                l = s.algo,
                d = l.SHA256,
                c = l.HMAC,
                u = (l.PBKDF2 = a.extend({
                  cfg: a.extend({
                    keySize: 128 / 32,
                    hasher: d,
                    iterations: 25e4,
                  }),
                  init: function (f) {
                    this.cfg = this.cfg.extend(f);
                  },
                  compute: function (f, h) {
                    for (
                      var x = this.cfg,
                        m = c.create(x.hasher, f),
                        g = i.create(),
                        p = i.create([1]),
                        w = g.words,
                        b = p.words,
                        v = x.keySize,
                        y = x.iterations;
                      w.length < v;

                    ) {
                      var C = m.update(h).finalize(p);
                      m.reset();
                      for (
                        var E = C.words, N = E.length, j = C, S = 1;
                        S < y;
                        S++
                      ) {
                        (j = m.finalize(j)), m.reset();
                        for (var A = j.words, B = 0; B < N; B++) E[B] ^= A[B];
                      }
                      g.concat(C), b[0]++;
                    }
                    return (g.sigBytes = v * 4), g;
                  },
                }));
              s.PBKDF2 = function (f, h, x) {
                return u.create(x).compute(f, h);
              };
            })(),
            r.PBKDF2
          );
        });
      })(Zr)),
    Zr.exports
  );
}
var Qr = { exports: {} },
  Ch = Qr.exports,
  Va;
function st() {
  return (
    Va ||
      ((Va = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), G0(), xo());
        })(Ch, function (r) {
          return (
            (function () {
              var s = r,
                n = s.lib,
                a = n.Base,
                i = n.WordArray,
                l = s.algo,
                d = l.MD5,
                c = (l.EvpKDF = a.extend({
                  cfg: a.extend({
                    keySize: 128 / 32,
                    hasher: d,
                    iterations: 1,
                  }),
                  init: function (u) {
                    this.cfg = this.cfg.extend(u);
                  },
                  compute: function (u, f) {
                    for (
                      var h,
                        x = this.cfg,
                        m = x.hasher.create(),
                        g = i.create(),
                        p = g.words,
                        w = x.keySize,
                        b = x.iterations;
                      p.length < w;

                    ) {
                      h && m.update(h),
                        (h = m.update(u).finalize(f)),
                        m.reset();
                      for (var v = 1; v < b; v++)
                        (h = m.finalize(h)), m.reset();
                      g.concat(h);
                    }
                    return (g.sigBytes = w * 4), g;
                  },
                }));
              s.EvpKDF = function (u, f, h) {
                return c.create(h).compute(u, f);
              };
            })(),
            r.EvpKDF
          );
        });
      })(Qr)),
    Qr.exports
  );
}
var Jr = { exports: {} },
  Ah = Jr.exports,
  $a;
function me() {
  return (
    $a ||
      (($a = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), st());
        })(Ah, function (r) {
          r.lib.Cipher ||
            (function (s) {
              var n = r,
                a = n.lib,
                i = a.Base,
                l = a.WordArray,
                d = a.BufferedBlockAlgorithm,
                c = n.enc;
              c.Utf8;
              var u = c.Base64,
                f = n.algo,
                h = f.EvpKDF,
                x = (a.Cipher = d.extend({
                  cfg: i.extend(),
                  createEncryptor: function (A, B) {
                    return this.create(this._ENC_XFORM_MODE, A, B);
                  },
                  createDecryptor: function (A, B) {
                    return this.create(this._DEC_XFORM_MODE, A, B);
                  },
                  init: function (A, B, k) {
                    (this.cfg = this.cfg.extend(k)),
                      (this._xformMode = A),
                      (this._key = B),
                      this.reset();
                  },
                  reset: function () {
                    d.reset.call(this), this._doReset();
                  },
                  process: function (A) {
                    return this._append(A), this._process();
                  },
                  finalize: function (A) {
                    A && this._append(A);
                    var B = this._doFinalize();
                    return B;
                  },
                  keySize: 128 / 32,
                  ivSize: 128 / 32,
                  _ENC_XFORM_MODE: 1,
                  _DEC_XFORM_MODE: 2,
                  _createHelper: (function () {
                    function A(B) {
                      return typeof B == "string" ? S : E;
                    }
                    return function (B) {
                      return {
                        encrypt: function (k, T, I) {
                          return A(T).encrypt(B, k, T, I);
                        },
                        decrypt: function (k, T, I) {
                          return A(T).decrypt(B, k, T, I);
                        },
                      };
                    };
                  })(),
                }));
              a.StreamCipher = x.extend({
                _doFinalize: function () {
                  var A = this._process(!0);
                  return A;
                },
                blockSize: 1,
              });
              var m = (n.mode = {}),
                g = (a.BlockCipherMode = i.extend({
                  createEncryptor: function (A, B) {
                    return this.Encryptor.create(A, B);
                  },
                  createDecryptor: function (A, B) {
                    return this.Decryptor.create(A, B);
                  },
                  init: function (A, B) {
                    (this._cipher = A), (this._iv = B);
                  },
                })),
                p = (m.CBC = (function () {
                  var A = g.extend();
                  (A.Encryptor = A.extend({
                    processBlock: function (k, T) {
                      var I = this._cipher,
                        $ = I.blockSize;
                      B.call(this, k, T, $),
                        I.encryptBlock(k, T),
                        (this._prevBlock = k.slice(T, T + $));
                    },
                  })),
                    (A.Decryptor = A.extend({
                      processBlock: function (k, T) {
                        var I = this._cipher,
                          $ = I.blockSize,
                          H = k.slice(T, T + $);
                        I.decryptBlock(k, T),
                          B.call(this, k, T, $),
                          (this._prevBlock = H);
                      },
                    }));
                  function B(k, T, I) {
                    var $,
                      H = this._iv;
                    H ? (($ = H), (this._iv = s)) : ($ = this._prevBlock);
                    for (var W = 0; W < I; W++) k[T + W] ^= $[W];
                  }
                  return A;
                })()),
                w = (n.pad = {}),
                b = (w.Pkcs7 = {
                  pad: function (A, B) {
                    for (
                      var k = B * 4,
                        T = k - (A.sigBytes % k),
                        I = (T << 24) | (T << 16) | (T << 8) | T,
                        $ = [],
                        H = 0;
                      H < T;
                      H += 4
                    )
                      $.push(I);
                    var W = l.create($, T);
                    A.concat(W);
                  },
                  unpad: function (A) {
                    var B = A.words[(A.sigBytes - 1) >>> 2] & 255;
                    A.sigBytes -= B;
                  },
                });
              a.BlockCipher = x.extend({
                cfg: x.cfg.extend({ mode: p, padding: b }),
                reset: function () {
                  var A;
                  x.reset.call(this);
                  var B = this.cfg,
                    k = B.iv,
                    T = B.mode;
                  this._xformMode == this._ENC_XFORM_MODE
                    ? (A = T.createEncryptor)
                    : ((A = T.createDecryptor), (this._minBufferSize = 1)),
                    this._mode && this._mode.__creator == A
                      ? this._mode.init(this, k && k.words)
                      : ((this._mode = A.call(T, this, k && k.words)),
                        (this._mode.__creator = A));
                },
                _doProcessBlock: function (A, B) {
                  this._mode.processBlock(A, B);
                },
                _doFinalize: function () {
                  var A,
                    B = this.cfg.padding;
                  return (
                    this._xformMode == this._ENC_XFORM_MODE
                      ? (B.pad(this._data, this.blockSize),
                        (A = this._process(!0)))
                      : ((A = this._process(!0)), B.unpad(A)),
                    A
                  );
                },
                blockSize: 128 / 32,
              });
              var v = (a.CipherParams = i.extend({
                  init: function (A) {
                    this.mixIn(A);
                  },
                  toString: function (A) {
                    return (A || this.formatter).stringify(this);
                  },
                })),
                y = (n.format = {}),
                C = (y.OpenSSL = {
                  stringify: function (A) {
                    var B,
                      k = A.ciphertext,
                      T = A.salt;
                    return (
                      T
                        ? (B = l
                            .create([1398893684, 1701076831])
                            .concat(T)
                            .concat(k))
                        : (B = k),
                      B.toString(u)
                    );
                  },
                  parse: function (A) {
                    var B,
                      k = u.parse(A),
                      T = k.words;
                    return (
                      T[0] == 1398893684 &&
                        T[1] == 1701076831 &&
                        ((B = l.create(T.slice(2, 4))),
                        T.splice(0, 4),
                        (k.sigBytes -= 16)),
                      v.create({ ciphertext: k, salt: B })
                    );
                  },
                }),
                E = (a.SerializableCipher = i.extend({
                  cfg: i.extend({ format: C }),
                  encrypt: function (A, B, k, T) {
                    T = this.cfg.extend(T);
                    var I = A.createEncryptor(k, T),
                      $ = I.finalize(B),
                      H = I.cfg;
                    return v.create({
                      ciphertext: $,
                      key: k,
                      iv: H.iv,
                      algorithm: A,
                      mode: H.mode,
                      padding: H.padding,
                      blockSize: A.blockSize,
                      formatter: T.format,
                    });
                  },
                  decrypt: function (A, B, k, T) {
                    (T = this.cfg.extend(T)), (B = this._parse(B, T.format));
                    var I = A.createDecryptor(k, T).finalize(B.ciphertext);
                    return I;
                  },
                  _parse: function (A, B) {
                    return typeof A == "string" ? B.parse(A, this) : A;
                  },
                })),
                N = (n.kdf = {}),
                j = (N.OpenSSL = {
                  execute: function (A, B, k, T, I) {
                    if ((T || (T = l.random(64 / 8)), I))
                      var $ = h
                        .create({ keySize: B + k, hasher: I })
                        .compute(A, T);
                    else var $ = h.create({ keySize: B + k }).compute(A, T);
                    var H = l.create($.words.slice(B), k * 4);
                    return (
                      ($.sigBytes = B * 4), v.create({ key: $, iv: H, salt: T })
                    );
                  },
                }),
                S = (a.PasswordBasedCipher = E.extend({
                  cfg: E.cfg.extend({ kdf: j }),
                  encrypt: function (A, B, k, T) {
                    T = this.cfg.extend(T);
                    var I = T.kdf.execute(
                      k,
                      A.keySize,
                      A.ivSize,
                      T.salt,
                      T.hasher,
                    );
                    T.iv = I.iv;
                    var $ = E.encrypt.call(this, A, B, I.key, T);
                    return $.mixIn(I), $;
                  },
                  decrypt: function (A, B, k, T) {
                    (T = this.cfg.extend(T)), (B = this._parse(B, T.format));
                    var I = T.kdf.execute(
                      k,
                      A.keySize,
                      A.ivSize,
                      B.salt,
                      T.hasher,
                    );
                    T.iv = I.iv;
                    var $ = E.decrypt.call(this, A, B, I.key, T);
                    return $;
                  },
                }));
            })();
        });
      })(Jr)),
    Jr.exports
  );
}
var es = { exports: {} },
  Eh = es.exports,
  Ua;
function Nh() {
  return (
    Ua ||
      ((Ua = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), me());
        })(Eh, function (r) {
          return (
            (r.mode.CFB = (function () {
              var s = r.lib.BlockCipherMode.extend();
              (s.Encryptor = s.extend({
                processBlock: function (a, i) {
                  var l = this._cipher,
                    d = l.blockSize;
                  n.call(this, a, i, d, l),
                    (this._prevBlock = a.slice(i, i + d));
                },
              })),
                (s.Decryptor = s.extend({
                  processBlock: function (a, i) {
                    var l = this._cipher,
                      d = l.blockSize,
                      c = a.slice(i, i + d);
                    n.call(this, a, i, d, l), (this._prevBlock = c);
                  },
                }));
              function n(a, i, l, d) {
                var c,
                  u = this._iv;
                u
                  ? ((c = u.slice(0)), (this._iv = void 0))
                  : (c = this._prevBlock),
                  d.encryptBlock(c, 0);
                for (var f = 0; f < l; f++) a[i + f] ^= c[f];
              }
              return s;
            })()),
            r.mode.CFB
          );
        });
      })(es)),
    es.exports
  );
}
var ts = { exports: {} },
  kh = ts.exports,
  za;
function jh() {
  return (
    za ||
      ((za = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), me());
        })(kh, function (r) {
          return (
            (r.mode.CTR = (function () {
              var s = r.lib.BlockCipherMode.extend(),
                n = (s.Encryptor = s.extend({
                  processBlock: function (a, i) {
                    var l = this._cipher,
                      d = l.blockSize,
                      c = this._iv,
                      u = this._counter;
                    c &&
                      ((u = this._counter = c.slice(0)), (this._iv = void 0));
                    var f = u.slice(0);
                    l.encryptBlock(f, 0), (u[d - 1] = (u[d - 1] + 1) | 0);
                    for (var h = 0; h < d; h++) a[i + h] ^= f[h];
                  },
                }));
              return (s.Decryptor = n), s;
            })()),
            r.mode.CTR
          );
        });
      })(ts)),
    ts.exports
  );
}
var rs = { exports: {} },
  Dh = rs.exports,
  Ha;
function Bh() {
  return (
    Ha ||
      ((Ha = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), me());
        })(Dh, function (r) {
          /** @preserve
           * Counter block mode compatible with  Dr Brian Gladman fileenc.c
           * derived from CryptoJS.mode.CTR
           * Jan Hruby jhruby.web@gmail.com
           */ return (
            (r.mode.CTRGladman = (function () {
              var s = r.lib.BlockCipherMode.extend();
              function n(l) {
                if (((l >> 24) & 255) === 255) {
                  var d = (l >> 16) & 255,
                    c = (l >> 8) & 255,
                    u = l & 255;
                  d === 255
                    ? ((d = 0),
                      c === 255 ? ((c = 0), u === 255 ? (u = 0) : ++u) : ++c)
                    : ++d,
                    (l = 0),
                    (l += d << 16),
                    (l += c << 8),
                    (l += u);
                } else l += 1 << 24;
                return l;
              }
              function a(l) {
                return (l[0] = n(l[0])) === 0 && (l[1] = n(l[1])), l;
              }
              var i = (s.Encryptor = s.extend({
                processBlock: function (l, d) {
                  var c = this._cipher,
                    u = c.blockSize,
                    f = this._iv,
                    h = this._counter;
                  f && ((h = this._counter = f.slice(0)), (this._iv = void 0)),
                    a(h);
                  var x = h.slice(0);
                  c.encryptBlock(x, 0);
                  for (var m = 0; m < u; m++) l[d + m] ^= x[m];
                },
              }));
              return (s.Decryptor = i), s;
            })()),
            r.mode.CTRGladman
          );
        });
      })(rs)),
    rs.exports
  );
}
var ss = { exports: {} },
  Sh = ss.exports,
  qa;
function _h() {
  return (
    qa ||
      ((qa = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), me());
        })(Sh, function (r) {
          return (
            (r.mode.OFB = (function () {
              var s = r.lib.BlockCipherMode.extend(),
                n = (s.Encryptor = s.extend({
                  processBlock: function (a, i) {
                    var l = this._cipher,
                      d = l.blockSize,
                      c = this._iv,
                      u = this._keystream;
                    c &&
                      ((u = this._keystream = c.slice(0)), (this._iv = void 0)),
                      l.encryptBlock(u, 0);
                    for (var f = 0; f < d; f++) a[i + f] ^= u[f];
                  },
                }));
              return (s.Decryptor = n), s;
            })()),
            r.mode.OFB
          );
        });
      })(ss)),
    ss.exports
  );
}
var ns = { exports: {} },
  Fh = ns.exports,
  Wa;
function Th() {
  return (
    Wa ||
      ((Wa = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), me());
        })(Fh, function (r) {
          return (
            (r.mode.ECB = (function () {
              var s = r.lib.BlockCipherMode.extend();
              return (
                (s.Encryptor = s.extend({
                  processBlock: function (n, a) {
                    this._cipher.encryptBlock(n, a);
                  },
                })),
                (s.Decryptor = s.extend({
                  processBlock: function (n, a) {
                    this._cipher.decryptBlock(n, a);
                  },
                })),
                s
              );
            })()),
            r.mode.ECB
          );
        });
      })(ns)),
    ns.exports
  );
}
var os = { exports: {} },
  Rh = os.exports,
  Ka;
function Ph() {
  return (
    Ka ||
      ((Ka = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), me());
        })(Rh, function (r) {
          return (
            (r.pad.AnsiX923 = {
              pad: function (s, n) {
                var a = s.sigBytes,
                  i = n * 4,
                  l = i - (a % i),
                  d = a + l - 1;
                s.clamp(),
                  (s.words[d >>> 2] |= l << (24 - (d % 4) * 8)),
                  (s.sigBytes += l);
              },
              unpad: function (s) {
                var n = s.words[(s.sigBytes - 1) >>> 2] & 255;
                s.sigBytes -= n;
              },
            }),
            r.pad.Ansix923
          );
        });
      })(os)),
    os.exports
  );
}
var as = { exports: {} },
  Mh = as.exports,
  Ya;
function Lh() {
  return (
    Ya ||
      ((Ya = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), me());
        })(Mh, function (r) {
          return (
            (r.pad.Iso10126 = {
              pad: function (s, n) {
                var a = n * 4,
                  i = a - (s.sigBytes % a);
                s.concat(r.lib.WordArray.random(i - 1)).concat(
                  r.lib.WordArray.create([i << 24], 1),
                );
              },
              unpad: function (s) {
                var n = s.words[(s.sigBytes - 1) >>> 2] & 255;
                s.sigBytes -= n;
              },
            }),
            r.pad.Iso10126
          );
        });
      })(as)),
    as.exports
  );
}
var is = { exports: {} },
  Oh = is.exports,
  Xa;
function Ih() {
  return (
    Xa ||
      ((Xa = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), me());
        })(Oh, function (r) {
          return (
            (r.pad.Iso97971 = {
              pad: function (s, n) {
                s.concat(r.lib.WordArray.create([2147483648], 1)),
                  r.pad.ZeroPadding.pad(s, n);
              },
              unpad: function (s) {
                r.pad.ZeroPadding.unpad(s), s.sigBytes--;
              },
            }),
            r.pad.Iso97971
          );
        });
      })(is)),
    is.exports
  );
}
var ls = { exports: {} },
  Vh = ls.exports,
  Ga;
function $h() {
  return (
    Ga ||
      ((Ga = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), me());
        })(Vh, function (r) {
          return (
            (r.pad.ZeroPadding = {
              pad: function (s, n) {
                var a = n * 4;
                s.clamp(), (s.sigBytes += a - (s.sigBytes % a || a));
              },
              unpad: function (s) {
                for (
                  var n = s.words, a = s.sigBytes - 1, a = s.sigBytes - 1;
                  a >= 0;
                  a--
                )
                  if ((n[a >>> 2] >>> (24 - (a % 4) * 8)) & 255) {
                    s.sigBytes = a + 1;
                    break;
                  }
              },
            }),
            r.pad.ZeroPadding
          );
        });
      })(ls)),
    ls.exports
  );
}
var cs = { exports: {} },
  Uh = cs.exports,
  Za;
function zh() {
  return (
    Za ||
      ((Za = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), me());
        })(Uh, function (r) {
          return (
            (r.pad.NoPadding = { pad: function () {}, unpad: function () {} }),
            r.pad.NoPadding
          );
        });
      })(cs)),
    cs.exports
  );
}
var ds = { exports: {} },
  Hh = ds.exports,
  Qa;
function qh() {
  return (
    Qa ||
      ((Qa = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), me());
        })(Hh, function (r) {
          return (
            (function (s) {
              var n = r,
                a = n.lib,
                i = a.CipherParams,
                l = n.enc,
                d = l.Hex,
                c = n.format;
              c.Hex = {
                stringify: function (u) {
                  return u.ciphertext.toString(d);
                },
                parse: function (u) {
                  var f = d.parse(u);
                  return i.create({ ciphertext: f });
                },
              };
            })(),
            r.format.Hex
          );
        });
      })(ds)),
    ds.exports
  );
}
var us = { exports: {} },
  Wh = us.exports,
  Ja;
function Kh() {
  return (
    Ja ||
      ((Ja = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), mt(), pt(), st(), me());
        })(Wh, function (r) {
          return (
            (function () {
              var s = r,
                n = s.lib,
                a = n.BlockCipher,
                i = s.algo,
                l = [],
                d = [],
                c = [],
                u = [],
                f = [],
                h = [],
                x = [],
                m = [],
                g = [],
                p = [];
              (function () {
                for (var v = [], y = 0; y < 256; y++)
                  y < 128 ? (v[y] = y << 1) : (v[y] = (y << 1) ^ 283);
                for (var C = 0, E = 0, y = 0; y < 256; y++) {
                  var N = E ^ (E << 1) ^ (E << 2) ^ (E << 3) ^ (E << 4);
                  (N = (N >>> 8) ^ (N & 255) ^ 99), (l[C] = N), (d[N] = C);
                  var j = v[C],
                    S = v[j],
                    A = v[S],
                    B = (v[N] * 257) ^ (N * 16843008);
                  (c[C] = (B << 24) | (B >>> 8)),
                    (u[C] = (B << 16) | (B >>> 16)),
                    (f[C] = (B << 8) | (B >>> 24)),
                    (h[C] = B);
                  var B =
                    (A * 16843009) ^ (S * 65537) ^ (j * 257) ^ (C * 16843008);
                  (x[N] = (B << 24) | (B >>> 8)),
                    (m[N] = (B << 16) | (B >>> 16)),
                    (g[N] = (B << 8) | (B >>> 24)),
                    (p[N] = B),
                    C
                      ? ((C = j ^ v[v[v[A ^ j]]]), (E ^= v[v[E]]))
                      : (C = E = 1);
                }
              })();
              var w = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                b = (i.AES = a.extend({
                  _doReset: function () {
                    var v;
                    if (!(this._nRounds && this._keyPriorReset === this._key)) {
                      for (
                        var y = (this._keyPriorReset = this._key),
                          C = y.words,
                          E = y.sigBytes / 4,
                          N = (this._nRounds = E + 6),
                          j = (N + 1) * 4,
                          S = (this._keySchedule = []),
                          A = 0;
                        A < j;
                        A++
                      )
                        A < E
                          ? (S[A] = C[A])
                          : ((v = S[A - 1]),
                            A % E
                              ? E > 6 &&
                                A % E == 4 &&
                                (v =
                                  (l[v >>> 24] << 24) |
                                  (l[(v >>> 16) & 255] << 16) |
                                  (l[(v >>> 8) & 255] << 8) |
                                  l[v & 255])
                              : ((v = (v << 8) | (v >>> 24)),
                                (v =
                                  (l[v >>> 24] << 24) |
                                  (l[(v >>> 16) & 255] << 16) |
                                  (l[(v >>> 8) & 255] << 8) |
                                  l[v & 255]),
                                (v ^= w[(A / E) | 0] << 24)),
                            (S[A] = S[A - E] ^ v));
                      for (
                        var B = (this._invKeySchedule = []), k = 0;
                        k < j;
                        k++
                      ) {
                        var A = j - k;
                        if (k % 4) var v = S[A];
                        else var v = S[A - 4];
                        k < 4 || A <= 4
                          ? (B[k] = v)
                          : (B[k] =
                              x[l[v >>> 24]] ^
                              m[l[(v >>> 16) & 255]] ^
                              g[l[(v >>> 8) & 255]] ^
                              p[l[v & 255]]);
                      }
                    }
                  },
                  encryptBlock: function (v, y) {
                    this._doCryptBlock(v, y, this._keySchedule, c, u, f, h, l);
                  },
                  decryptBlock: function (v, y) {
                    var C = v[y + 1];
                    (v[y + 1] = v[y + 3]),
                      (v[y + 3] = C),
                      this._doCryptBlock(
                        v,
                        y,
                        this._invKeySchedule,
                        x,
                        m,
                        g,
                        p,
                        d,
                      );
                    var C = v[y + 1];
                    (v[y + 1] = v[y + 3]), (v[y + 3] = C);
                  },
                  _doCryptBlock: function (v, y, C, E, N, j, S, A) {
                    for (
                      var B = this._nRounds,
                        k = v[y] ^ C[0],
                        T = v[y + 1] ^ C[1],
                        I = v[y + 2] ^ C[2],
                        $ = v[y + 3] ^ C[3],
                        H = 4,
                        W = 1;
                      W < B;
                      W++
                    ) {
                      var q =
                          E[k >>> 24] ^
                          N[(T >>> 16) & 255] ^
                          j[(I >>> 8) & 255] ^
                          S[$ & 255] ^
                          C[H++],
                        Z =
                          E[T >>> 24] ^
                          N[(I >>> 16) & 255] ^
                          j[($ >>> 8) & 255] ^
                          S[k & 255] ^
                          C[H++],
                        K =
                          E[I >>> 24] ^
                          N[($ >>> 16) & 255] ^
                          j[(k >>> 8) & 255] ^
                          S[T & 255] ^
                          C[H++],
                        R =
                          E[$ >>> 24] ^
                          N[(k >>> 16) & 255] ^
                          j[(T >>> 8) & 255] ^
                          S[I & 255] ^
                          C[H++];
                      (k = q), (T = Z), (I = K), ($ = R);
                    }
                    var q =
                        ((A[k >>> 24] << 24) |
                          (A[(T >>> 16) & 255] << 16) |
                          (A[(I >>> 8) & 255] << 8) |
                          A[$ & 255]) ^
                        C[H++],
                      Z =
                        ((A[T >>> 24] << 24) |
                          (A[(I >>> 16) & 255] << 16) |
                          (A[($ >>> 8) & 255] << 8) |
                          A[k & 255]) ^
                        C[H++],
                      K =
                        ((A[I >>> 24] << 24) |
                          (A[($ >>> 16) & 255] << 16) |
                          (A[(k >>> 8) & 255] << 8) |
                          A[T & 255]) ^
                        C[H++],
                      R =
                        ((A[$ >>> 24] << 24) |
                          (A[(k >>> 16) & 255] << 16) |
                          (A[(T >>> 8) & 255] << 8) |
                          A[I & 255]) ^
                        C[H++];
                    (v[y] = q), (v[y + 1] = Z), (v[y + 2] = K), (v[y + 3] = R);
                  },
                  keySize: 256 / 32,
                }));
              s.AES = a._createHelper(b);
            })(),
            r.AES
          );
        });
      })(us)),
    us.exports
  );
}
var hs = { exports: {} },
  Yh = hs.exports,
  ei;
function Xh() {
  return (
    ei ||
      ((ei = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), mt(), pt(), st(), me());
        })(Yh, function (r) {
          return (
            (function () {
              var s = r,
                n = s.lib,
                a = n.WordArray,
                i = n.BlockCipher,
                l = s.algo,
                d = [
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
                f = [
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
                h = [
                  4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504,
                  2147483679,
                ],
                x = (l.DES = i.extend({
                  _doReset: function () {
                    for (
                      var w = this._key, b = w.words, v = [], y = 0;
                      y < 56;
                      y++
                    ) {
                      var C = d[y] - 1;
                      v[y] = (b[C >>> 5] >>> (31 - (C % 32))) & 1;
                    }
                    for (var E = (this._subKeys = []), N = 0; N < 16; N++) {
                      for (var j = (E[N] = []), S = u[N], y = 0; y < 24; y++)
                        (j[(y / 6) | 0] |=
                          v[(c[y] - 1 + S) % 28] << (31 - (y % 6))),
                          (j[4 + ((y / 6) | 0)] |=
                            v[28 + ((c[y + 24] - 1 + S) % 28)] <<
                            (31 - (y % 6)));
                      j[0] = (j[0] << 1) | (j[0] >>> 31);
                      for (var y = 1; y < 7; y++)
                        j[y] = j[y] >>> ((y - 1) * 4 + 3);
                      j[7] = (j[7] << 5) | (j[7] >>> 27);
                    }
                    for (var A = (this._invSubKeys = []), y = 0; y < 16; y++)
                      A[y] = E[15 - y];
                  },
                  encryptBlock: function (w, b) {
                    this._doCryptBlock(w, b, this._subKeys);
                  },
                  decryptBlock: function (w, b) {
                    this._doCryptBlock(w, b, this._invSubKeys);
                  },
                  _doCryptBlock: function (w, b, v) {
                    (this._lBlock = w[b]),
                      (this._rBlock = w[b + 1]),
                      m.call(this, 4, 252645135),
                      m.call(this, 16, 65535),
                      g.call(this, 2, 858993459),
                      g.call(this, 8, 16711935),
                      m.call(this, 1, 1431655765);
                    for (var y = 0; y < 16; y++) {
                      for (
                        var C = v[y],
                          E = this._lBlock,
                          N = this._rBlock,
                          j = 0,
                          S = 0;
                        S < 8;
                        S++
                      )
                        j |= f[S][((N ^ C[S]) & h[S]) >>> 0];
                      (this._lBlock = N), (this._rBlock = E ^ j);
                    }
                    var A = this._lBlock;
                    (this._lBlock = this._rBlock),
                      (this._rBlock = A),
                      m.call(this, 1, 1431655765),
                      g.call(this, 8, 16711935),
                      g.call(this, 2, 858993459),
                      m.call(this, 16, 65535),
                      m.call(this, 4, 252645135),
                      (w[b] = this._lBlock),
                      (w[b + 1] = this._rBlock);
                  },
                  keySize: 64 / 32,
                  ivSize: 64 / 32,
                  blockSize: 64 / 32,
                }));
              function m(w, b) {
                var v = ((this._lBlock >>> w) ^ this._rBlock) & b;
                (this._rBlock ^= v), (this._lBlock ^= v << w);
              }
              function g(w, b) {
                var v = ((this._rBlock >>> w) ^ this._lBlock) & b;
                (this._lBlock ^= v), (this._rBlock ^= v << w);
              }
              s.DES = i._createHelper(x);
              var p = (l.TripleDES = i.extend({
                _doReset: function () {
                  var w = this._key,
                    b = w.words;
                  if (b.length !== 2 && b.length !== 4 && b.length < 6)
                    throw new Error(
                      "Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.",
                    );
                  var v = b.slice(0, 2),
                    y = b.length < 4 ? b.slice(0, 2) : b.slice(2, 4),
                    C = b.length < 6 ? b.slice(0, 2) : b.slice(4, 6);
                  (this._des1 = x.createEncryptor(a.create(v))),
                    (this._des2 = x.createEncryptor(a.create(y))),
                    (this._des3 = x.createEncryptor(a.create(C)));
                },
                encryptBlock: function (w, b) {
                  this._des1.encryptBlock(w, b),
                    this._des2.decryptBlock(w, b),
                    this._des3.encryptBlock(w, b);
                },
                decryptBlock: function (w, b) {
                  this._des3.decryptBlock(w, b),
                    this._des2.encryptBlock(w, b),
                    this._des1.decryptBlock(w, b);
                },
                keySize: 192 / 32,
                ivSize: 64 / 32,
                blockSize: 64 / 32,
              }));
              s.TripleDES = i._createHelper(p);
            })(),
            r.TripleDES
          );
        });
      })(hs)),
    hs.exports
  );
}
var fs = { exports: {} },
  Gh = fs.exports,
  ti;
function Zh() {
  return (
    ti ||
      ((ti = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), mt(), pt(), st(), me());
        })(Gh, function (r) {
          return (
            (function () {
              var s = r,
                n = s.lib,
                a = n.StreamCipher,
                i = s.algo,
                l = (i.RC4 = a.extend({
                  _doReset: function () {
                    for (
                      var u = this._key,
                        f = u.words,
                        h = u.sigBytes,
                        x = (this._S = []),
                        m = 0;
                      m < 256;
                      m++
                    )
                      x[m] = m;
                    for (var m = 0, g = 0; m < 256; m++) {
                      var p = m % h,
                        w = (f[p >>> 2] >>> (24 - (p % 4) * 8)) & 255;
                      g = (g + x[m] + w) % 256;
                      var b = x[m];
                      (x[m] = x[g]), (x[g] = b);
                    }
                    this._i = this._j = 0;
                  },
                  _doProcessBlock: function (u, f) {
                    u[f] ^= d.call(this);
                  },
                  keySize: 256 / 32,
                  ivSize: 0,
                }));
              function d() {
                for (
                  var u = this._S, f = this._i, h = this._j, x = 0, m = 0;
                  m < 4;
                  m++
                ) {
                  (f = (f + 1) % 256), (h = (h + u[f]) % 256);
                  var g = u[f];
                  (u[f] = u[h]),
                    (u[h] = g),
                    (x |= u[(u[f] + u[h]) % 256] << (24 - m * 8));
                }
                return (this._i = f), (this._j = h), x;
              }
              s.RC4 = a._createHelper(l);
              var c = (i.RC4Drop = l.extend({
                cfg: l.cfg.extend({ drop: 192 }),
                _doReset: function () {
                  l._doReset.call(this);
                  for (var u = this.cfg.drop; u > 0; u--) d.call(this);
                },
              }));
              s.RC4Drop = a._createHelper(c);
            })(),
            r.RC4
          );
        });
      })(fs)),
    fs.exports
  );
}
var xs = { exports: {} },
  Qh = xs.exports,
  ri;
function Jh() {
  return (
    ri ||
      ((ri = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), mt(), pt(), st(), me());
        })(Qh, function (r) {
          return (
            (function () {
              var s = r,
                n = s.lib,
                a = n.StreamCipher,
                i = s.algo,
                l = [],
                d = [],
                c = [],
                u = (i.Rabbit = a.extend({
                  _doReset: function () {
                    for (
                      var h = this._key.words, x = this.cfg.iv, m = 0;
                      m < 4;
                      m++
                    )
                      h[m] =
                        (((h[m] << 8) | (h[m] >>> 24)) & 16711935) |
                        (((h[m] << 24) | (h[m] >>> 8)) & 4278255360);
                    var g = (this._X = [
                        h[0],
                        (h[3] << 16) | (h[2] >>> 16),
                        h[1],
                        (h[0] << 16) | (h[3] >>> 16),
                        h[2],
                        (h[1] << 16) | (h[0] >>> 16),
                        h[3],
                        (h[2] << 16) | (h[1] >>> 16),
                      ]),
                      p = (this._C = [
                        (h[2] << 16) | (h[2] >>> 16),
                        (h[0] & 4294901760) | (h[1] & 65535),
                        (h[3] << 16) | (h[3] >>> 16),
                        (h[1] & 4294901760) | (h[2] & 65535),
                        (h[0] << 16) | (h[0] >>> 16),
                        (h[2] & 4294901760) | (h[3] & 65535),
                        (h[1] << 16) | (h[1] >>> 16),
                        (h[3] & 4294901760) | (h[0] & 65535),
                      ]);
                    this._b = 0;
                    for (var m = 0; m < 4; m++) f.call(this);
                    for (var m = 0; m < 8; m++) p[m] ^= g[(m + 4) & 7];
                    if (x) {
                      var w = x.words,
                        b = w[0],
                        v = w[1],
                        y =
                          (((b << 8) | (b >>> 24)) & 16711935) |
                          (((b << 24) | (b >>> 8)) & 4278255360),
                        C =
                          (((v << 8) | (v >>> 24)) & 16711935) |
                          (((v << 24) | (v >>> 8)) & 4278255360),
                        E = (y >>> 16) | (C & 4294901760),
                        N = (C << 16) | (y & 65535);
                      (p[0] ^= y),
                        (p[1] ^= E),
                        (p[2] ^= C),
                        (p[3] ^= N),
                        (p[4] ^= y),
                        (p[5] ^= E),
                        (p[6] ^= C),
                        (p[7] ^= N);
                      for (var m = 0; m < 4; m++) f.call(this);
                    }
                  },
                  _doProcessBlock: function (h, x) {
                    var m = this._X;
                    f.call(this),
                      (l[0] = m[0] ^ (m[5] >>> 16) ^ (m[3] << 16)),
                      (l[1] = m[2] ^ (m[7] >>> 16) ^ (m[5] << 16)),
                      (l[2] = m[4] ^ (m[1] >>> 16) ^ (m[7] << 16)),
                      (l[3] = m[6] ^ (m[3] >>> 16) ^ (m[1] << 16));
                    for (var g = 0; g < 4; g++)
                      (l[g] =
                        (((l[g] << 8) | (l[g] >>> 24)) & 16711935) |
                        (((l[g] << 24) | (l[g] >>> 8)) & 4278255360)),
                        (h[x + g] ^= l[g]);
                  },
                  blockSize: 128 / 32,
                  ivSize: 64 / 32,
                }));
              function f() {
                for (var h = this._X, x = this._C, m = 0; m < 8; m++)
                  d[m] = x[m];
                (x[0] = (x[0] + 1295307597 + this._b) | 0),
                  (x[1] =
                    (x[1] + 3545052371 + (x[0] >>> 0 < d[0] >>> 0 ? 1 : 0)) |
                    0),
                  (x[2] =
                    (x[2] + 886263092 + (x[1] >>> 0 < d[1] >>> 0 ? 1 : 0)) | 0),
                  (x[3] =
                    (x[3] + 1295307597 + (x[2] >>> 0 < d[2] >>> 0 ? 1 : 0)) |
                    0),
                  (x[4] =
                    (x[4] + 3545052371 + (x[3] >>> 0 < d[3] >>> 0 ? 1 : 0)) |
                    0),
                  (x[5] =
                    (x[5] + 886263092 + (x[4] >>> 0 < d[4] >>> 0 ? 1 : 0)) | 0),
                  (x[6] =
                    (x[6] + 1295307597 + (x[5] >>> 0 < d[5] >>> 0 ? 1 : 0)) |
                    0),
                  (x[7] =
                    (x[7] + 3545052371 + (x[6] >>> 0 < d[6] >>> 0 ? 1 : 0)) |
                    0),
                  (this._b = x[7] >>> 0 < d[7] >>> 0 ? 1 : 0);
                for (var m = 0; m < 8; m++) {
                  var g = h[m] + x[m],
                    p = g & 65535,
                    w = g >>> 16,
                    b = ((((p * p) >>> 17) + p * w) >>> 15) + w * w,
                    v = (((g & 4294901760) * g) | 0) + (((g & 65535) * g) | 0);
                  c[m] = b ^ v;
                }
                (h[0] =
                  (c[0] +
                    ((c[7] << 16) | (c[7] >>> 16)) +
                    ((c[6] << 16) | (c[6] >>> 16))) |
                  0),
                  (h[1] = (c[1] + ((c[0] << 8) | (c[0] >>> 24)) + c[7]) | 0),
                  (h[2] =
                    (c[2] +
                      ((c[1] << 16) | (c[1] >>> 16)) +
                      ((c[0] << 16) | (c[0] >>> 16))) |
                    0),
                  (h[3] = (c[3] + ((c[2] << 8) | (c[2] >>> 24)) + c[1]) | 0),
                  (h[4] =
                    (c[4] +
                      ((c[3] << 16) | (c[3] >>> 16)) +
                      ((c[2] << 16) | (c[2] >>> 16))) |
                    0),
                  (h[5] = (c[5] + ((c[4] << 8) | (c[4] >>> 24)) + c[3]) | 0),
                  (h[6] =
                    (c[6] +
                      ((c[5] << 16) | (c[5] >>> 16)) +
                      ((c[4] << 16) | (c[4] >>> 16))) |
                    0),
                  (h[7] = (c[7] + ((c[6] << 8) | (c[6] >>> 24)) + c[5]) | 0);
              }
              s.Rabbit = a._createHelper(u);
            })(),
            r.Rabbit
          );
        });
      })(xs)),
    xs.exports
  );
}
var ms = { exports: {} },
  ef = ms.exports,
  si;
function tf() {
  return (
    si ||
      ((si = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), mt(), pt(), st(), me());
        })(ef, function (r) {
          return (
            (function () {
              var s = r,
                n = s.lib,
                a = n.StreamCipher,
                i = s.algo,
                l = [],
                d = [],
                c = [],
                u = (i.RabbitLegacy = a.extend({
                  _doReset: function () {
                    var h = this._key.words,
                      x = this.cfg.iv,
                      m = (this._X = [
                        h[0],
                        (h[3] << 16) | (h[2] >>> 16),
                        h[1],
                        (h[0] << 16) | (h[3] >>> 16),
                        h[2],
                        (h[1] << 16) | (h[0] >>> 16),
                        h[3],
                        (h[2] << 16) | (h[1] >>> 16),
                      ]),
                      g = (this._C = [
                        (h[2] << 16) | (h[2] >>> 16),
                        (h[0] & 4294901760) | (h[1] & 65535),
                        (h[3] << 16) | (h[3] >>> 16),
                        (h[1] & 4294901760) | (h[2] & 65535),
                        (h[0] << 16) | (h[0] >>> 16),
                        (h[2] & 4294901760) | (h[3] & 65535),
                        (h[1] << 16) | (h[1] >>> 16),
                        (h[3] & 4294901760) | (h[0] & 65535),
                      ]);
                    this._b = 0;
                    for (var p = 0; p < 4; p++) f.call(this);
                    for (var p = 0; p < 8; p++) g[p] ^= m[(p + 4) & 7];
                    if (x) {
                      var w = x.words,
                        b = w[0],
                        v = w[1],
                        y =
                          (((b << 8) | (b >>> 24)) & 16711935) |
                          (((b << 24) | (b >>> 8)) & 4278255360),
                        C =
                          (((v << 8) | (v >>> 24)) & 16711935) |
                          (((v << 24) | (v >>> 8)) & 4278255360),
                        E = (y >>> 16) | (C & 4294901760),
                        N = (C << 16) | (y & 65535);
                      (g[0] ^= y),
                        (g[1] ^= E),
                        (g[2] ^= C),
                        (g[3] ^= N),
                        (g[4] ^= y),
                        (g[5] ^= E),
                        (g[6] ^= C),
                        (g[7] ^= N);
                      for (var p = 0; p < 4; p++) f.call(this);
                    }
                  },
                  _doProcessBlock: function (h, x) {
                    var m = this._X;
                    f.call(this),
                      (l[0] = m[0] ^ (m[5] >>> 16) ^ (m[3] << 16)),
                      (l[1] = m[2] ^ (m[7] >>> 16) ^ (m[5] << 16)),
                      (l[2] = m[4] ^ (m[1] >>> 16) ^ (m[7] << 16)),
                      (l[3] = m[6] ^ (m[3] >>> 16) ^ (m[1] << 16));
                    for (var g = 0; g < 4; g++)
                      (l[g] =
                        (((l[g] << 8) | (l[g] >>> 24)) & 16711935) |
                        (((l[g] << 24) | (l[g] >>> 8)) & 4278255360)),
                        (h[x + g] ^= l[g]);
                  },
                  blockSize: 128 / 32,
                  ivSize: 64 / 32,
                }));
              function f() {
                for (var h = this._X, x = this._C, m = 0; m < 8; m++)
                  d[m] = x[m];
                (x[0] = (x[0] + 1295307597 + this._b) | 0),
                  (x[1] =
                    (x[1] + 3545052371 + (x[0] >>> 0 < d[0] >>> 0 ? 1 : 0)) |
                    0),
                  (x[2] =
                    (x[2] + 886263092 + (x[1] >>> 0 < d[1] >>> 0 ? 1 : 0)) | 0),
                  (x[3] =
                    (x[3] + 1295307597 + (x[2] >>> 0 < d[2] >>> 0 ? 1 : 0)) |
                    0),
                  (x[4] =
                    (x[4] + 3545052371 + (x[3] >>> 0 < d[3] >>> 0 ? 1 : 0)) |
                    0),
                  (x[5] =
                    (x[5] + 886263092 + (x[4] >>> 0 < d[4] >>> 0 ? 1 : 0)) | 0),
                  (x[6] =
                    (x[6] + 1295307597 + (x[5] >>> 0 < d[5] >>> 0 ? 1 : 0)) |
                    0),
                  (x[7] =
                    (x[7] + 3545052371 + (x[6] >>> 0 < d[6] >>> 0 ? 1 : 0)) |
                    0),
                  (this._b = x[7] >>> 0 < d[7] >>> 0 ? 1 : 0);
                for (var m = 0; m < 8; m++) {
                  var g = h[m] + x[m],
                    p = g & 65535,
                    w = g >>> 16,
                    b = ((((p * p) >>> 17) + p * w) >>> 15) + w * w,
                    v = (((g & 4294901760) * g) | 0) + (((g & 65535) * g) | 0);
                  c[m] = b ^ v;
                }
                (h[0] =
                  (c[0] +
                    ((c[7] << 16) | (c[7] >>> 16)) +
                    ((c[6] << 16) | (c[6] >>> 16))) |
                  0),
                  (h[1] = (c[1] + ((c[0] << 8) | (c[0] >>> 24)) + c[7]) | 0),
                  (h[2] =
                    (c[2] +
                      ((c[1] << 16) | (c[1] >>> 16)) +
                      ((c[0] << 16) | (c[0] >>> 16))) |
                    0),
                  (h[3] = (c[3] + ((c[2] << 8) | (c[2] >>> 24)) + c[1]) | 0),
                  (h[4] =
                    (c[4] +
                      ((c[3] << 16) | (c[3] >>> 16)) +
                      ((c[2] << 16) | (c[2] >>> 16))) |
                    0),
                  (h[5] = (c[5] + ((c[4] << 8) | (c[4] >>> 24)) + c[3]) | 0),
                  (h[6] =
                    (c[6] +
                      ((c[5] << 16) | (c[5] >>> 16)) +
                      ((c[4] << 16) | (c[4] >>> 16))) |
                    0),
                  (h[7] = (c[7] + ((c[6] << 8) | (c[6] >>> 24)) + c[5]) | 0);
              }
              s.RabbitLegacy = a._createHelper(u);
            })(),
            r.RabbitLegacy
          );
        });
      })(ms)),
    ms.exports
  );
}
var ps = { exports: {} },
  rf = ps.exports,
  ni;
function sf() {
  return (
    ni ||
      ((ni = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(te(), mt(), pt(), st(), me());
        })(rf, function (r) {
          return (
            (function () {
              var s = r,
                n = s.lib,
                a = n.BlockCipher,
                i = s.algo;
              const l = 16,
                d = [
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
              function f(p, w) {
                let b = (w >> 24) & 255,
                  v = (w >> 16) & 255,
                  y = (w >> 8) & 255,
                  C = w & 255,
                  E = p.sbox[0][b] + p.sbox[1][v];
                return (E = E ^ p.sbox[2][y]), (E = E + p.sbox[3][C]), E;
              }
              function h(p, w, b) {
                let v = w,
                  y = b,
                  C;
                for (let E = 0; E < l; ++E)
                  (v = v ^ p.pbox[E]),
                    (y = f(p, v) ^ y),
                    (C = v),
                    (v = y),
                    (y = C);
                return (
                  (C = v),
                  (v = y),
                  (y = C),
                  (y = y ^ p.pbox[l]),
                  (v = v ^ p.pbox[l + 1]),
                  { left: v, right: y }
                );
              }
              function x(p, w, b) {
                let v = w,
                  y = b,
                  C;
                for (let E = l + 1; E > 1; --E)
                  (v = v ^ p.pbox[E]),
                    (y = f(p, v) ^ y),
                    (C = v),
                    (v = y),
                    (y = C);
                return (
                  (C = v),
                  (v = y),
                  (y = C),
                  (y = y ^ p.pbox[1]),
                  (v = v ^ p.pbox[0]),
                  { left: v, right: y }
                );
              }
              function m(p, w, b) {
                for (let N = 0; N < 4; N++) {
                  p.sbox[N] = [];
                  for (let j = 0; j < 256; j++) p.sbox[N][j] = c[N][j];
                }
                let v = 0;
                for (let N = 0; N < l + 2; N++)
                  (p.pbox[N] = d[N] ^ w[v]), v++, v >= b && (v = 0);
                let y = 0,
                  C = 0,
                  E = 0;
                for (let N = 0; N < l + 2; N += 2)
                  (E = h(p, y, C)),
                    (y = E.left),
                    (C = E.right),
                    (p.pbox[N] = y),
                    (p.pbox[N + 1] = C);
                for (let N = 0; N < 4; N++)
                  for (let j = 0; j < 256; j += 2)
                    (E = h(p, y, C)),
                      (y = E.left),
                      (C = E.right),
                      (p.sbox[N][j] = y),
                      (p.sbox[N][j + 1] = C);
                return !0;
              }
              var g = (i.Blowfish = a.extend({
                _doReset: function () {
                  if (this._keyPriorReset !== this._key) {
                    var p = (this._keyPriorReset = this._key),
                      w = p.words,
                      b = p.sigBytes / 4;
                    m(u, w, b);
                  }
                },
                encryptBlock: function (p, w) {
                  var b = h(u, p[w], p[w + 1]);
                  (p[w] = b.left), (p[w + 1] = b.right);
                },
                decryptBlock: function (p, w) {
                  var b = x(u, p[w], p[w + 1]);
                  (p[w] = b.left), (p[w + 1] = b.right);
                },
                blockSize: 64 / 32,
                keySize: 128 / 32,
                ivSize: 64 / 32,
              }));
              s.Blowfish = a._createHelper(g);
            })(),
            r.Blowfish
          );
        });
      })(ps)),
    ps.exports
  );
}
var nf = Pr.exports,
  oi;
function of() {
  return (
    oi ||
      ((oi = 1),
      (function (e, t) {
        (function (r, s, n) {
          e.exports = s(
            te(),
            Os(),
            th(),
            sh(),
            mt(),
            ah(),
            pt(),
            G0(),
            fo(),
            uh(),
            Z0(),
            xh(),
            ph(),
            bh(),
            xo(),
            wh(),
            st(),
            me(),
            Nh(),
            jh(),
            Bh(),
            _h(),
            Th(),
            Ph(),
            Lh(),
            Ih(),
            $h(),
            zh(),
            qh(),
            Kh(),
            Xh(),
            Zh(),
            Jh(),
            tf(),
            sf(),
          );
        })(nf, function (r) {
          return r;
        });
      })(Pr)),
    Pr.exports
  );
}
var af = of();
const sn = Pd(af),
  nn = (e) => `${btoa(`${e}`).replace(/=/g, "")}`,
  ai = "super-secret-key-ajayos",
  Te = {
    get(e, t = null) {
      try {
        const r = localStorage.getItem(nn(e));
        if (!r) return t;
        const n = sn.AES.decrypt(r, ai).toString(sn.enc.Utf8);
        if (!n) return t;
        try {
          const a = JSON.parse(n);
          return a && a.__type === "string" ? a.value : a;
        } catch (a) {
          return n;
        }
      } catch (r) {
        return t;
      }
    },
    set(e, t) {
      try {
        let r;
        typeof t == "string"
          ? (r = JSON.stringify({ __type: "string", value: t }))
          : (r = JSON.stringify(t));
        const s = sn.AES.encrypt(r, ai).toString();
        localStorage.setItem(nn(e), s);
      } catch (r) {
        console.error("Storage set error:", r);
      }
    },
    remove(e) {
      localStorage.removeItem(nn(e));
    },
    firstLoad() {
      return this.get("seen", !1) ? !1 : (this.set("seen", !0), !0);
    },
  },
  mo = _.createContext({});
function po(e) {
  const t = _.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const go = typeof window != "undefined",
  Q0 = go ? _.useLayoutEffect : _.useEffect,
  Is = _.createContext(null);
function bo(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function vo(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
const Xe = (e, t, r) => (r > t ? t : r < e ? e : r);
let yo = () => {};
const Ge = {},
  J0 = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function el(e) {
  return typeof e == "object" && e !== null;
}
const tl = (e) => /^0[^.\s]+$/u.test(e);
function wo(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Le = (e) => e,
  lf = (e, t) => (r) => t(e(r)),
  fr = (...e) => e.reduce(lf),
  ar = (e, t, r) => {
    const s = t - e;
    return s === 0 ? 1 : (r - e) / s;
  };
class Co {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return bo(this.subscriptions, t), () => vo(this.subscriptions, t);
  }
  notify(t, r, s) {
    const n = this.subscriptions.length;
    if (n)
      if (n === 1) this.subscriptions[0](t, r, s);
      else
        for (let a = 0; a < n; a++) {
          const i = this.subscriptions[a];
          i && i(t, r, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const He = (e) => e * 1e3,
  Me = (e) => e / 1e3;
function rl(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const sl = (e, t, r) =>
    (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  cf = 1e-7,
  df = 12;
function uf(e, t, r, s, n) {
  let a,
    i,
    l = 0;
  do (i = t + (r - t) / 2), (a = sl(i, s, n) - e), a > 0 ? (r = i) : (t = i);
  while (Math.abs(a) > cf && ++l < df);
  return i;
}
function xr(e, t, r, s) {
  if (e === t && r === s) return Le;
  const n = (a) => uf(a, 0, 1, e, r);
  return (a) => (a === 0 || a === 1 ? a : sl(n(a), t, s));
}
const nl = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  ol = (e) => (t) => 1 - e(1 - t),
  al = xr(0.33, 1.53, 0.69, 0.99),
  Ao = ol(al),
  il = nl(Ao),
  ll = (e) =>
    (e *= 2) < 1 ? 0.5 * Ao(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Eo = (e) => 1 - Math.sin(Math.acos(e)),
  cl = ol(Eo),
  dl = nl(Eo),
  hf = xr(0.42, 0, 1, 1),
  ff = xr(0, 0, 0.58, 1),
  ul = xr(0.42, 0, 0.58, 1),
  xf = (e) => Array.isArray(e) && typeof e[0] != "number",
  hl = (e) => Array.isArray(e) && typeof e[0] == "number",
  mf = {
    linear: Le,
    easeIn: hf,
    easeInOut: ul,
    easeOut: ff,
    circIn: Eo,
    circInOut: dl,
    circOut: cl,
    backIn: Ao,
    backInOut: il,
    backOut: al,
    anticipate: ll,
  },
  pf = (e) => typeof e == "string",
  ii = (e) => {
    if (hl(e)) {
      yo(e.length === 4);
      const [t, r, s, n] = e;
      return xr(t, r, s, n);
    } else if (pf(e)) return mf[e];
    return e;
  },
  Er = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function gf(e, t) {
  let r = new Set(),
    s = new Set(),
    n = !1,
    a = !1;
  const i = new WeakSet();
  let l = { delta: 0, timestamp: 0, isProcessing: !1 };
  function d(u) {
    i.has(u) && (c.schedule(u), e()), u(l);
  }
  const c = {
    schedule: (u, f = !1, h = !1) => {
      const m = h && n ? r : s;
      return f && i.add(u), m.has(u) || m.add(u), u;
    },
    cancel: (u) => {
      s.delete(u), i.delete(u);
    },
    process: (u) => {
      if (((l = u), n)) {
        a = !0;
        return;
      }
      (n = !0),
        ([r, s] = [s, r]),
        r.forEach(d),
        r.clear(),
        (n = !1),
        a && ((a = !1), c.process(u));
    },
  };
  return c;
}
const bf = 40;
function fl(e, t) {
  let r = !1,
    s = !0;
  const n = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = () => (r = !0),
    i = Er.reduce((v, y) => ((v[y] = gf(a)), v), {}),
    {
      setup: l,
      read: d,
      resolveKeyframes: c,
      preUpdate: u,
      update: f,
      preRender: h,
      render: x,
      postRender: m,
    } = i,
    g = () => {
      const v = Ge.useManualTiming ? n.timestamp : performance.now();
      (r = !1),
        Ge.useManualTiming ||
          (n.delta = s ? 1e3 / 60 : Math.max(Math.min(v - n.timestamp, bf), 1)),
        (n.timestamp = v),
        (n.isProcessing = !0),
        l.process(n),
        d.process(n),
        c.process(n),
        u.process(n),
        f.process(n),
        h.process(n),
        x.process(n),
        m.process(n),
        (n.isProcessing = !1),
        r && t && ((s = !1), e(g));
    },
    p = () => {
      (r = !0), (s = !0), n.isProcessing || e(g);
    };
  return {
    schedule: Er.reduce((v, y) => {
      const C = i[y];
      return (v[y] = (E, N = !1, j = !1) => (r || p(), C.schedule(E, N, j))), v;
    }, {}),
    cancel: (v) => {
      for (let y = 0; y < Er.length; y++) i[Er[y]].cancel(v);
    },
    state: n,
    steps: i,
  };
}
const {
  schedule: ae,
  cancel: tt,
  state: be,
  steps: on,
} = fl(
  typeof requestAnimationFrame != "undefined" ? requestAnimationFrame : Le,
  !0,
);
let gs;
function vf() {
  gs = void 0;
}
const Ne = {
    now: () => (
      gs === void 0 &&
        Ne.set(
          be.isProcessing || Ge.useManualTiming
            ? be.timestamp
            : performance.now(),
        ),
      gs
    ),
    set: (e) => {
      (gs = e), queueMicrotask(vf);
    },
  },
  xl = (e) => (t) => typeof t == "string" && t.startsWith(e),
  No = xl("--"),
  yf = xl("var(--"),
  ko = (e) => (yf(e) ? wf.test(e.split("/*")[0].trim()) : !1),
  wf =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Rt = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ir = G(O({}, Rt), { transform: (e) => Xe(0, 1, e) }),
  Nr = G(O({}, Rt), { default: 1 }),
  er = (e) => Math.round(e * 1e5) / 1e5,
  jo = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Cf(e) {
  return e == null;
}
const Af =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Do = (e, t) => (r) =>
    !!(
      (typeof r == "string" && Af.test(r) && r.startsWith(e)) ||
      (t && !Cf(r) && Object.prototype.hasOwnProperty.call(r, t))
    ),
  ml = (e, t, r) => (s) => {
    if (typeof s != "string") return s;
    const [n, a, i, l] = s.match(jo);
    return {
      [e]: parseFloat(n),
      [t]: parseFloat(a),
      [r]: parseFloat(i),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  Ef = (e) => Xe(0, 255, e),
  an = G(O({}, Rt), { transform: (e) => Math.round(Ef(e)) }),
  lt = {
    test: Do("rgb", "red"),
    parse: ml("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: r, alpha: s = 1 }) =>
      "rgba(" +
      an.transform(e) +
      ", " +
      an.transform(t) +
      ", " +
      an.transform(r) +
      ", " +
      er(ir.transform(s)) +
      ")",
  };
function Nf(e) {
  let t = "",
    r = "",
    s = "",
    n = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (r = e.substring(3, 5)),
        (s = e.substring(5, 7)),
        (n = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (r = e.substring(2, 3)),
        (s = e.substring(3, 4)),
        (n = e.substring(4, 5)),
        (t += t),
        (r += r),
        (s += s),
        (n += n)),
    {
      red: parseInt(t, 16),
      green: parseInt(r, 16),
      blue: parseInt(s, 16),
      alpha: n ? parseInt(n, 16) / 255 : 1,
    }
  );
}
const Tn = { test: Do("#"), parse: Nf, transform: lt.transform },
  mr = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Je = mr("deg"),
  qe = mr("%"),
  X = mr("px"),
  kf = mr("vh"),
  jf = mr("vw"),
  li = G(O({}, qe), {
    parse: (e) => qe.parse(e) / 100,
    transform: (e) => qe.transform(e * 100),
  }),
  Et = {
    test: Do("hsl", "hue"),
    parse: ml("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: r, alpha: s = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      qe.transform(er(t)) +
      ", " +
      qe.transform(er(r)) +
      ", " +
      er(ir.transform(s)) +
      ")",
  },
  fe = {
    test: (e) => lt.test(e) || Tn.test(e) || Et.test(e),
    parse: (e) =>
      lt.test(e) ? lt.parse(e) : Et.test(e) ? Et.parse(e) : Tn.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? lt.transform(e)
          : Et.transform(e),
    getAnimatableNone: (e) => {
      const t = fe.parse(e);
      return (t.alpha = 0), fe.transform(t);
    },
  },
  Df =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Bf(e) {
  var t, r;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(jo)) == null ? void 0 : t.length) || 0) +
      (((r = e.match(Df)) == null ? void 0 : r.length) || 0) >
      0
  );
}
const pl = "number",
  gl = "color",
  Sf = "var",
  _f = "var(",
  ci = "${}",
  Ff =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function lr(e) {
  const t = e.toString(),
    r = [],
    s = { color: [], number: [], var: [] },
    n = [];
  let a = 0;
  const l = t
    .replace(
      Ff,
      (d) => (
        fe.test(d)
          ? (s.color.push(a), n.push(gl), r.push(fe.parse(d)))
          : d.startsWith(_f)
            ? (s.var.push(a), n.push(Sf), r.push(d))
            : (s.number.push(a), n.push(pl), r.push(parseFloat(d))),
        ++a,
        ci
      ),
    )
    .split(ci);
  return { values: r, split: l, indexes: s, types: n };
}
function bl(e) {
  return lr(e).values;
}
function vl(e) {
  const { split: t, types: r } = lr(e),
    s = t.length;
  return (n) => {
    let a = "";
    for (let i = 0; i < s; i++)
      if (((a += t[i]), n[i] !== void 0)) {
        const l = r[i];
        l === pl
          ? (a += er(n[i]))
          : l === gl
            ? (a += fe.transform(n[i]))
            : (a += n[i]);
      }
    return a;
  };
}
const Tf = (e) =>
  typeof e == "number" ? 0 : fe.test(e) ? fe.getAnimatableNone(e) : e;
function Rf(e) {
  const t = bl(e);
  return vl(e)(t.map(Tf));
}
const rt = {
  test: Bf,
  parse: bl,
  createTransformer: vl,
  getAnimatableNone: Rf,
};
function ln(e, t, r) {
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
function Pf({ hue: e, saturation: t, lightness: r, alpha: s }) {
  (e /= 360), (t /= 100), (r /= 100);
  let n = 0,
    a = 0,
    i = 0;
  if (!t) n = a = i = r;
  else {
    const l = r < 0.5 ? r * (1 + t) : r + t - r * t,
      d = 2 * r - l;
    (n = ln(d, l, e + 1 / 3)), (a = ln(d, l, e)), (i = ln(d, l, e - 1 / 3));
  }
  return {
    red: Math.round(n * 255),
    green: Math.round(a * 255),
    blue: Math.round(i * 255),
    alpha: s,
  };
}
function Ss(e, t) {
  return (r) => (r > 0 ? t : e);
}
const ie = (e, t, r) => e + (t - e) * r,
  cn = (e, t, r) => {
    const s = e * e,
      n = r * (t * t - s) + s;
    return n < 0 ? 0 : Math.sqrt(n);
  },
  Mf = [Tn, lt, Et],
  Lf = (e) => Mf.find((t) => t.test(e));
function di(e) {
  const t = Lf(e);
  if (!t) return !1;
  let r = t.parse(e);
  return t === Et && (r = Pf(r)), r;
}
const ui = (e, t) => {
    const r = di(e),
      s = di(t);
    if (!r || !s) return Ss(e, t);
    const n = O({}, r);
    return (a) => (
      (n.red = cn(r.red, s.red, a)),
      (n.green = cn(r.green, s.green, a)),
      (n.blue = cn(r.blue, s.blue, a)),
      (n.alpha = ie(r.alpha, s.alpha, a)),
      lt.transform(n)
    );
  },
  Rn = new Set(["none", "hidden"]);
function Of(e, t) {
  return Rn.has(e) ? (r) => (r <= 0 ? e : t) : (r) => (r >= 1 ? t : e);
}
function If(e, t) {
  return (r) => ie(e, t, r);
}
function Bo(e) {
  return typeof e == "number"
    ? If
    : typeof e == "string"
      ? ko(e)
        ? Ss
        : fe.test(e)
          ? ui
          : Uf
      : Array.isArray(e)
        ? yl
        : typeof e == "object"
          ? fe.test(e)
            ? ui
            : Vf
          : Ss;
}
function yl(e, t) {
  const r = [...e],
    s = r.length,
    n = e.map((a, i) => Bo(a)(a, t[i]));
  return (a) => {
    for (let i = 0; i < s; i++) r[i] = n[i](a);
    return r;
  };
}
function Vf(e, t) {
  const r = O(O({}, e), t),
    s = {};
  for (const n in r)
    e[n] !== void 0 && t[n] !== void 0 && (s[n] = Bo(e[n])(e[n], t[n]));
  return (n) => {
    for (const a in s) r[a] = s[a](n);
    return r;
  };
}
function $f(e, t) {
  var n;
  const r = [],
    s = { color: 0, var: 0, number: 0 };
  for (let a = 0; a < t.values.length; a++) {
    const i = t.types[a],
      l = e.indexes[i][s[i]],
      d = (n = e.values[l]) != null ? n : 0;
    (r[a] = d), s[i]++;
  }
  return r;
}
const Uf = (e, t) => {
  const r = rt.createTransformer(t),
    s = lr(e),
    n = lr(t);
  return s.indexes.var.length === n.indexes.var.length &&
    s.indexes.color.length === n.indexes.color.length &&
    s.indexes.number.length >= n.indexes.number.length
    ? (Rn.has(e) && !n.values.length) || (Rn.has(t) && !s.values.length)
      ? Of(e, t)
      : fr(yl($f(s, n), n.values), r)
    : Ss(e, t);
};
function wl(e, t, r) {
  return typeof e == "number" && typeof t == "number" && typeof r == "number"
    ? ie(e, t, r)
    : Bo(e)(e, t);
}
const zf = (e) => {
    const t = ({ timestamp: r }) => e(r);
    return {
      start: (r = !0) => ae.update(t, r),
      stop: () => tt(t),
      now: () => (be.isProcessing ? be.timestamp : Ne.now()),
    };
  },
  Cl = (e, t, r = 10) => {
    let s = "";
    const n = Math.max(Math.round(t / r), 2);
    for (let a = 0; a < n; a++)
      s += Math.round(e(a / (n - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${s.substring(0, s.length - 2)})`;
  },
  _s = 2e4;
function So(e) {
  let t = 0;
  const r = 50;
  let s = e.next(t);
  for (; !s.done && t < _s; ) (t += r), (s = e.next(t));
  return t >= _s ? 1 / 0 : t;
}
function Hf(e, t = 100, r) {
  const s = r(G(O({}, e), { keyframes: [0, t] })),
    n = Math.min(So(s), _s);
  return {
    type: "keyframes",
    ease: (a) => s.next(n * a).value / t,
    duration: Me(n),
  };
}
const qf = 5;
function Al(e, t, r) {
  const s = Math.max(t - qf, 0);
  return rl(r - e(s), t - s);
}
const ce = {
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
  dn = 0.001;
function Wf({
  duration: e = ce.duration,
  bounce: t = ce.bounce,
  velocity: r = ce.velocity,
  mass: s = ce.mass,
}) {
  let n,
    a,
    i = 1 - t;
  (i = Xe(ce.minDamping, ce.maxDamping, i)),
    (e = Xe(ce.minDuration, ce.maxDuration, Me(e))),
    i < 1
      ? ((n = (c) => {
          const u = c * i,
            f = u * e,
            h = u - r,
            x = Pn(c, i),
            m = Math.exp(-f);
          return dn - (h / x) * m;
        }),
        (a = (c) => {
          const f = c * i * e,
            h = f * r + r,
            x = Math.pow(i, 2) * Math.pow(c, 2) * e,
            m = Math.exp(-f),
            g = Pn(Math.pow(c, 2), i);
          return ((-n(c) + dn > 0 ? -1 : 1) * ((h - x) * m)) / g;
        }))
      : ((n = (c) => {
          const u = Math.exp(-c * e),
            f = (c - r) * e + 1;
          return -dn + u * f;
        }),
        (a = (c) => {
          const u = Math.exp(-c * e),
            f = (r - c) * (e * e);
          return u * f;
        }));
  const l = 5 / e,
    d = Yf(n, a, l);
  if (((e = He(e)), isNaN(d)))
    return { stiffness: ce.stiffness, damping: ce.damping, duration: e };
  {
    const c = Math.pow(d, 2) * s;
    return { stiffness: c, damping: i * 2 * Math.sqrt(s * c), duration: e };
  }
}
const Kf = 12;
function Yf(e, t, r) {
  let s = r;
  for (let n = 1; n < Kf; n++) s = s - e(s) / t(s);
  return s;
}
function Pn(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Xf = ["duration", "bounce"],
  Gf = ["stiffness", "damping", "mass"];
function hi(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function Zf(e) {
  let t = O(
    {
      velocity: ce.velocity,
      stiffness: ce.stiffness,
      damping: ce.damping,
      mass: ce.mass,
      isResolvedFromDuration: !1,
    },
    e,
  );
  if (!hi(e, Gf) && hi(e, Xf))
    if (e.visualDuration) {
      const r = e.visualDuration,
        s = (2 * Math.PI) / (r * 1.2),
        n = s * s,
        a = 2 * Xe(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(n);
      t = G(O({}, t), { mass: ce.mass, stiffness: n, damping: a });
    } else {
      const r = Wf(e);
      (t = G(O(O({}, t), r), { mass: ce.mass })),
        (t.isResolvedFromDuration = !0);
    }
  return t;
}
function Fs(e = ce.visualDuration, t = ce.bounce) {
  const r =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: s, restDelta: n } = r;
  const a = r.keyframes[0],
    i = r.keyframes[r.keyframes.length - 1],
    l = { done: !1, value: a },
    {
      stiffness: d,
      damping: c,
      mass: u,
      duration: f,
      velocity: h,
      isResolvedFromDuration: x,
    } = Zf(G(O({}, r), { velocity: -Me(r.velocity || 0) })),
    m = h || 0,
    g = c / (2 * Math.sqrt(d * u)),
    p = i - a,
    w = Me(Math.sqrt(d / u)),
    b = Math.abs(p) < 5;
  s || (s = b ? ce.restSpeed.granular : ce.restSpeed.default),
    n || (n = b ? ce.restDelta.granular : ce.restDelta.default);
  let v;
  if (g < 1) {
    const C = Pn(w, g);
    v = (E) => {
      const N = Math.exp(-g * w * E);
      return (
        i - N * (((m + g * w * p) / C) * Math.sin(C * E) + p * Math.cos(C * E))
      );
    };
  } else if (g === 1) v = (C) => i - Math.exp(-w * C) * (p + (m + w * p) * C);
  else {
    const C = w * Math.sqrt(g * g - 1);
    v = (E) => {
      const N = Math.exp(-g * w * E),
        j = Math.min(C * E, 300);
      return (
        i - (N * ((m + g * w * p) * Math.sinh(j) + C * p * Math.cosh(j))) / C
      );
    };
  }
  const y = {
    calculatedDuration: (x && f) || null,
    next: (C) => {
      const E = v(C);
      if (x) l.done = C >= f;
      else {
        let N = C === 0 ? m : 0;
        g < 1 && (N = C === 0 ? He(m) : Al(v, C, E));
        const j = Math.abs(N) <= s,
          S = Math.abs(i - E) <= n;
        l.done = j && S;
      }
      return (l.value = l.done ? i : E), l;
    },
    toString: () => {
      const C = Math.min(So(y), _s),
        E = Cl((N) => y.next(C * N).value, C, 30);
      return C + "ms " + E;
    },
    toTransition: () => {},
  };
  return y;
}
Fs.applyToOptions = (e) => {
  const t = Hf(e, 100, Fs);
  return (
    (e.ease = t.ease), (e.duration = He(t.duration)), (e.type = "keyframes"), e
  );
};
function Mn({
  keyframes: e,
  velocity: t = 0,
  power: r = 0.8,
  timeConstant: s = 325,
  bounceDamping: n = 10,
  bounceStiffness: a = 500,
  modifyTarget: i,
  min: l,
  max: d,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  const f = e[0],
    h = { done: !1, value: f },
    x = (j) => (l !== void 0 && j < l) || (d !== void 0 && j > d),
    m = (j) =>
      l === void 0
        ? d
        : d === void 0 || Math.abs(l - j) < Math.abs(d - j)
          ? l
          : d;
  let g = r * t;
  const p = f + g,
    w = i === void 0 ? p : i(p);
  w !== p && (g = w - f);
  const b = (j) => -g * Math.exp(-j / s),
    v = (j) => w + b(j),
    y = (j) => {
      const S = b(j),
        A = v(j);
      (h.done = Math.abs(S) <= c), (h.value = h.done ? w : A);
    };
  let C, E;
  const N = (j) => {
    x(h.value) &&
      ((C = j),
      (E = Fs({
        keyframes: [h.value, m(h.value)],
        velocity: Al(v, j, h.value),
        damping: n,
        stiffness: a,
        restDelta: c,
        restSpeed: u,
      })));
  };
  return (
    N(0),
    {
      calculatedDuration: null,
      next: (j) => {
        let S = !1;
        return (
          !E && C === void 0 && ((S = !0), y(j), N(j)),
          C !== void 0 && j >= C ? E.next(j - C) : (!S && y(j), h)
        );
      },
    }
  );
}
function Qf(e, t, r) {
  const s = [],
    n = r || Ge.mix || wl,
    a = e.length - 1;
  for (let i = 0; i < a; i++) {
    let l = n(e[i], e[i + 1]);
    if (t) {
      const d = Array.isArray(t) ? t[i] || Le : t;
      l = fr(d, l);
    }
    s.push(l);
  }
  return s;
}
function Jf(e, t, { clamp: r = !0, ease: s, mixer: n } = {}) {
  const a = e.length;
  if ((yo(a === t.length), a === 1)) return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  const i = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const l = Qf(t, s, n),
    d = l.length,
    c = (u) => {
      if (i && u < e[0]) return t[0];
      let f = 0;
      if (d > 1) for (; f < e.length - 2 && !(u < e[f + 1]); f++);
      const h = ar(e[f], e[f + 1], u);
      return l[f](h);
    };
  return r ? (u) => c(Xe(e[0], e[a - 1], u)) : c;
}
function ex(e, t) {
  const r = e[e.length - 1];
  for (let s = 1; s <= t; s++) {
    const n = ar(0, t, s);
    e.push(ie(r, 1, n));
  }
}
function tx(e) {
  const t = [0];
  return ex(t, e.length - 1), t;
}
function rx(e, t) {
  return e.map((r) => r * t);
}
function sx(e, t) {
  return e.map(() => t || ul).splice(0, e.length - 1);
}
function tr({
  duration: e = 300,
  keyframes: t,
  times: r,
  ease: s = "easeInOut",
}) {
  const n = xf(s) ? s.map(ii) : ii(s),
    a = { done: !1, value: t[0] },
    i = rx(r && r.length === t.length ? r : tx(t), e),
    l = Jf(i, t, { ease: Array.isArray(n) ? n : sx(t, n) });
  return {
    calculatedDuration: e,
    next: (d) => ((a.value = l(d)), (a.done = d >= e), a),
  };
}
const nx = (e) => e !== null;
function _o(e, { repeat: t, repeatType: r = "loop" }, s, n = 1) {
  const a = e.filter(nx),
    l = n < 0 || (t && r !== "loop" && t % 2 === 1) ? 0 : a.length - 1;
  return !l || s === void 0 ? a[l] : s;
}
const ox = { decay: Mn, inertia: Mn, tween: tr, keyframes: tr, spring: Fs };
function El(e) {
  typeof e.type == "string" && (e.type = ox[e.type]);
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
const ax = (e) => e / 100;
class To extends Fo {
  constructor(t) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var s, n;
        const { motionValue: r } = this.options;
        r && r.updatedAt !== Ne.now() && this.tick(Ne.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (n = (s = this.options).onStop) == null || n.call(s));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    El(t);
    const {
      type: r = tr,
      repeat: s = 0,
      repeatDelay: n = 0,
      repeatType: a,
      velocity: i = 0,
    } = t;
    let { keyframes: l } = t;
    const d = r || tr;
    d !== tr &&
      typeof l[0] != "number" &&
      ((this.mixKeyframes = fr(ax, wl(l[0], l[1]))), (l = [0, 100]));
    const c = d(G(O({}, t), { keyframes: l }));
    a === "mirror" &&
      (this.mirroredGenerator = d(
        G(O({}, t), { keyframes: [...l].reverse(), velocity: -i }),
      )),
      c.calculatedDuration === null && (c.calculatedDuration = So(c));
    const { calculatedDuration: u } = c;
    (this.calculatedDuration = u),
      (this.resolvedDuration = u + n),
      (this.totalDuration = this.resolvedDuration * (s + 1) - n),
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
      generator: s,
      totalDuration: n,
      mixKeyframes: a,
      mirroredGenerator: i,
      resolvedDuration: l,
      calculatedDuration: d,
    } = this;
    if (this.startTime === null) return s.next(0);
    const {
      delay: c = 0,
      keyframes: u,
      repeat: f,
      repeatType: h,
      repeatDelay: x,
      type: m,
      onUpdate: g,
      finalKeyframe: p,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - n / this.speed, this.startTime)),
      r ? (this.currentTime = t) : this.updateTime(t);
    const w = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
      b = this.playbackSpeed >= 0 ? w < 0 : w > n;
    (this.currentTime = Math.max(w, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = n);
    let v = this.currentTime,
      y = s;
    if (f) {
      const j = Math.min(this.currentTime, n) / l;
      let S = Math.floor(j),
        A = j % 1;
      !A && j >= 1 && (A = 1),
        A === 1 && S--,
        (S = Math.min(S, f + 1)),
        !!(S % 2) &&
          (h === "reverse"
            ? ((A = 1 - A), x && (A -= x / l))
            : h === "mirror" && (y = i)),
        (v = Xe(0, 1, A) * l);
    }
    const C = b ? { done: !1, value: u[0] } : y.next(v);
    a && (C.value = a(C.value));
    let { done: E } = C;
    !b &&
      d !== null &&
      (E =
        this.playbackSpeed >= 0
          ? this.currentTime >= n
          : this.currentTime <= 0);
    const N =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && E));
    return (
      N && m !== Mn && (C.value = _o(u, this.options, p, this.speed)),
      g && g(C.value),
      N && this.finish(),
      C
    );
  }
  then(t, r) {
    return this.finished.then(t, r);
  }
  get duration() {
    return Me(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + Me(t);
  }
  get time() {
    return Me(this.currentTime);
  }
  set time(t) {
    var r;
    (t = He(t)),
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
    this.updateTime(Ne.now());
    const r = this.playbackSpeed !== t;
    (this.playbackSpeed = t), r && (this.time = Me(this.currentTime));
  }
  play() {
    var n, a;
    if (this.isStopped) return;
    const { driver: t = zf, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))),
      (a = (n = this.options).onPlay) == null || a.call(n);
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
      this.updateTime(Ne.now()),
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
function ix(e) {
  var t;
  for (let r = 1; r < e.length; r++) (t = e[r]) != null || (e[r] = e[r - 1]);
}
const ct = (e) => (e * 180) / Math.PI,
  Ln = (e) => {
    const t = ct(Math.atan2(e[1], e[0]));
    return On(t);
  },
  lx = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Ln,
    rotateZ: Ln,
    skewX: (e) => ct(Math.atan(e[1])),
    skewY: (e) => ct(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  On = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  fi = Ln,
  xi = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  mi = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  cx = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: xi,
    scaleY: mi,
    scale: (e) => (xi(e) + mi(e)) / 2,
    rotateX: (e) => On(ct(Math.atan2(e[6], e[5]))),
    rotateY: (e) => On(ct(Math.atan2(-e[2], e[0]))),
    rotateZ: fi,
    rotate: fi,
    skewX: (e) => ct(Math.atan(e[4])),
    skewY: (e) => ct(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function In(e) {
  return e.includes("scale") ? 1 : 0;
}
function Vn(e, t) {
  if (!e || e === "none") return In(t);
  const r = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, n;
  if (r) (s = cx), (n = r);
  else {
    const l = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (s = lx), (n = l);
  }
  if (!n) return In(t);
  const a = s[t],
    i = n[1].split(",").map(ux);
  return typeof a == "function" ? a(i) : i[a];
}
const dx = (e, t) => {
  const { transform: r = "none" } = getComputedStyle(e);
  return Vn(r, t);
};
function ux(e) {
  return parseFloat(e.trim());
}
const Pt = [
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
  Mt = new Set(Pt),
  pi = (e) => e === Rt || e === X,
  hx = new Set(["x", "y", "z"]),
  fx = Pt.filter((e) => !hx.has(e));
function xx(e) {
  const t = [];
  return (
    fx.forEach((r) => {
      const s = e.getValue(r);
      s !== void 0 &&
        (t.push([r, s.get()]), s.set(r.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const ut = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => Vn(t, "x"),
  y: (e, { transform: t }) => Vn(t, "y"),
};
ut.translateX = ut.x;
ut.translateY = ut.y;
const ht = new Set();
let $n = !1,
  Un = !1,
  zn = !1;
function Nl() {
  if (Un) {
    const e = Array.from(ht).filter((s) => s.needsMeasurement),
      t = new Set(e.map((s) => s.element)),
      r = new Map();
    t.forEach((s) => {
      const n = xx(s);
      n.length && (r.set(s, n), s.render());
    }),
      e.forEach((s) => s.measureInitialState()),
      t.forEach((s) => {
        s.render();
        const n = r.get(s);
        n &&
          n.forEach(([a, i]) => {
            var l;
            (l = s.getValue(a)) == null || l.set(i);
          });
      }),
      e.forEach((s) => s.measureEndState()),
      e.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      });
  }
  (Un = !1), ($n = !1), ht.forEach((e) => e.complete(zn)), ht.clear();
}
function kl() {
  ht.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Un = !0);
  });
}
function mx() {
  (zn = !0), kl(), Nl(), (zn = !1);
}
class Ro {
  constructor(t, r, s, n, a, i = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = r),
      (this.name = s),
      (this.motionValue = n),
      (this.element = a),
      (this.isAsync = i);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (ht.add(this),
          $n || (($n = !0), ae.read(kl), ae.resolveKeyframes(Nl)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: r,
      element: s,
      motionValue: n,
    } = this;
    if (t[0] === null) {
      const a = n == null ? void 0 : n.get(),
        i = t[t.length - 1];
      if (a !== void 0) t[0] = a;
      else if (s && r) {
        const l = s.readValue(r, i);
        l != null && (t[0] = l);
      }
      t[0] === void 0 && (t[0] = i), n && a === void 0 && n.set(t[0]);
    }
    ix(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      ht.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (ht.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const px = (e) => e.startsWith("--");
function gx(e, t, r) {
  px(t) ? e.style.setProperty(t, r) : (e.style[t] = r);
}
const bx = wo(() => window.ScrollTimeline !== void 0),
  vx = {};
function yx(e, t) {
  const r = wo(e);
  return () => {
    var s;
    return (s = vx[t]) != null ? s : r();
  };
}
const jl = yx(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch (e) {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Zt = ([e, t, r, s]) => `cubic-bezier(${e}, ${t}, ${r}, ${s})`,
  gi = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Zt([0, 0.65, 0.55, 1]),
    circOut: Zt([0.55, 0, 1, 0.45]),
    backIn: Zt([0.31, 0.01, 0.66, -0.59]),
    backOut: Zt([0.33, 1.53, 0.69, 0.99]),
  };
function Dl(e, t) {
  if (e)
    return typeof e == "function"
      ? jl()
        ? Cl(e, t)
        : "ease-out"
      : hl(e)
        ? Zt(e)
        : Array.isArray(e)
          ? e.map((r) => Dl(r, t) || gi.easeOut)
          : gi[e];
}
function wx(
  e,
  t,
  r,
  {
    delay: s = 0,
    duration: n = 300,
    repeat: a = 0,
    repeatType: i = "loop",
    ease: l = "easeOut",
    times: d,
  } = {},
  c = void 0,
) {
  const u = { [t]: r };
  d && (u.offset = d);
  const f = Dl(l, n);
  Array.isArray(f) && (u.easing = f);
  const h = {
    delay: s,
    duration: n,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: a + 1,
    direction: i === "reverse" ? "alternate" : "normal",
  };
  return c && (h.pseudoElement = c), e.animate(u, h);
}
function Bl(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function Cx(r) {
  var s = r,
    { type: e } = s,
    t = _e(s, ["type"]);
  var n, a;
  return Bl(e) && jl()
    ? e.applyToOptions(t)
    : ((n = t.duration) != null || (t.duration = 300),
      (a = t.ease) != null || (t.ease = "easeOut"),
      t);
}
class Ax extends Fo {
  constructor(t) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
      return;
    const {
      element: r,
      name: s,
      keyframes: n,
      pseudoElement: a,
      allowFlatten: i = !1,
      finalKeyframe: l,
      onComplete: d,
    } = t;
    (this.isPseudoElement = !!a),
      (this.allowFlatten = i),
      (this.options = t),
      yo(typeof t.type != "string");
    const c = Cx(t);
    (this.animation = wx(r, s, n, c, a)),
      c.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !a)) {
          const u = _o(n, this.options, l, this.speed);
          this.updateMotionValue ? this.updateMotionValue(u) : gx(r, s, u),
            this.animation.cancel();
        }
        d == null || d(), this.notifyFinished();
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
    var r, s;
    const t =
      ((s =
        (r = this.animation.effect) == null ? void 0 : r.getComputedTiming) ==
      null
        ? void 0
        : s.call(r).duration) || 0;
    return Me(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + Me(t);
  }
  get time() {
    return Me(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    (this.finishedTime = null), (this.animation.currentTime = He(t));
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
    var s;
    return (
      this.allowFlatten &&
        ((s = this.animation.effect) == null ||
          s.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && bx() ? ((this.animation.timeline = t), Le) : r(this)
    );
  }
}
const Sl = { anticipate: ll, backInOut: il, circInOut: dl };
function Ex(e) {
  return e in Sl;
}
function Nx(e) {
  typeof e.ease == "string" && Ex(e.ease) && (e.ease = Sl[e.ease]);
}
const bi = 10;
class kx extends Ax {
  constructor(t) {
    Nx(t),
      El(t),
      super(t),
      t.startTime && (this.startTime = t.startTime),
      (this.options = t);
  }
  updateMotionValue(t) {
    var u;
    const c = this.options,
      { motionValue: r, onUpdate: s, onComplete: n, element: a } = c,
      i = _e(c, ["motionValue", "onUpdate", "onComplete", "element"]);
    if (!r) return;
    if (t !== void 0) {
      r.set(t);
      return;
    }
    const l = new To(G(O({}, i), { autoplay: !1 })),
      d = He((u = this.finishedTime) != null ? u : this.time);
    r.setWithVelocity(l.sample(d - bi).value, l.sample(d).value, bi), l.stop();
  }
}
const vi = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (rt.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function jx(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let r = 0; r < e.length; r++) if (e[r] !== t) return !0;
}
function Dx(e, t, r, s) {
  const n = e[0];
  if (n === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const a = e[e.length - 1],
    i = vi(n, t),
    l = vi(a, t);
  return !i || !l ? !1 : jx(e) || ((r === "spring" || Bl(r)) && s);
}
function Hn(e) {
  (e.duration = 0), (e.type = "keyframes");
}
const Bx = new Set(["opacity", "clipPath", "filter", "transform"]),
  Sx = wo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function _x(e) {
  var u;
  const {
    motionValue: t,
    name: r,
    repeatDelay: s,
    repeatType: n,
    damping: a,
    type: i,
  } = e;
  if (
    !(
      ((u = t == null ? void 0 : t.owner) == null
        ? void 0
        : u.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: d, transformTemplate: c } = t.owner.getProps();
  return (
    Sx() &&
    r &&
    Bx.has(r) &&
    (r !== "transform" || !c) &&
    !d &&
    !s &&
    n !== "mirror" &&
    a !== 0 &&
    i !== "inertia"
  );
}
const Fx = 40;
class Tx extends Fo {
  constructor(h) {
    var x = h,
      {
        autoplay: t = !0,
        delay: r = 0,
        type: s = "keyframes",
        repeat: n = 0,
        repeatDelay: a = 0,
        repeatType: i = "loop",
        keyframes: l,
        name: d,
        motionValue: c,
        element: u,
      } = x,
      f = _e(x, [
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
    var p;
    super(),
      (this.stop = () => {
        var w, b;
        this._animation &&
          (this._animation.stop(),
          (w = this.stopTimeline) == null || w.call(this)),
          (b = this.keyframeResolver) == null || b.cancel();
      }),
      (this.createdAt = Ne.now());
    const m = O(
        {
          autoplay: t,
          delay: r,
          type: s,
          repeat: n,
          repeatDelay: a,
          repeatType: i,
          name: d,
          motionValue: c,
          element: u,
        },
        f,
      ),
      g = (u == null ? void 0 : u.KeyframeResolver) || Ro;
    (this.keyframeResolver = new g(
      l,
      (w, b, v) => this.onKeyframesResolved(w, b, m, !v),
      d,
      c,
      u,
    )),
      (p = this.keyframeResolver) == null || p.scheduleResolve();
  }
  onKeyframesResolved(t, r, s, n) {
    this.keyframeResolver = void 0;
    const {
      name: a,
      type: i,
      velocity: l,
      delay: d,
      isHandoff: c,
      onUpdate: u,
    } = s;
    (this.resolvedAt = Ne.now()),
      Dx(t, a, i, l) ||
        ((Ge.instantAnimations || !d) && (u == null || u(_o(t, s, r))),
        (t[0] = t[t.length - 1]),
        Hn(s),
        (s.repeat = 0));
    const f = n
        ? this.resolvedAt
          ? this.resolvedAt - this.createdAt > Fx
            ? this.resolvedAt
            : this.createdAt
          : this.createdAt
        : void 0,
      h = G(O({ startTime: f, finalKeyframe: r }, s), { keyframes: t }),
      x =
        !c && _x(h)
          ? new kx(G(O({}, h), { element: h.motionValue.owner.current }))
          : new To(h);
    x.finished.then(() => this.notifyFinished()).catch(Le),
      this.pendingTimeline &&
        ((this.stopTimeline = x.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = x);
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
        ((t = this.keyframeResolver) == null || t.resume(), mx()),
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
const Rx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Px(e) {
  const t = Rx.exec(e);
  if (!t) return [,];
  const [, r, s, n] = t;
  return [`--${r != null ? r : s}`, n];
}
function _l(e, t, r = 1) {
  const [s, n] = Px(e);
  if (!s) return;
  const a = window.getComputedStyle(t).getPropertyValue(s);
  if (a) {
    const i = a.trim();
    return J0(i) ? parseFloat(i) : i;
  }
  return ko(n) ? _l(n, t, r + 1) : n;
}
function Po(e, t) {
  var r, s;
  return (s =
    (r = e == null ? void 0 : e[t]) != null
      ? r
      : e == null
        ? void 0
        : e.default) != null
    ? s
    : e;
}
const Fl = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Pt,
  ]),
  Mx = { test: (e) => e === "auto", parse: (e) => e },
  Tl = (e) => (t) => t.test(e),
  Rl = [Rt, X, qe, Je, jf, kf, Mx],
  yi = (e) => Rl.find(Tl(e));
function Lx(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || tl(e)
      : !0;
}
const Ox = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Ix(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [s] = r.match(jo) || [];
  if (!s) return e;
  const n = r.replace(s, "");
  let a = Ox.has(t) ? 1 : 0;
  return s !== r && (a *= 100), t + "(" + a + n + ")";
}
const Vx = /\b([a-z-]*)\(.*?\)/gu,
  qn = G(O({}, rt), {
    getAnimatableNone: (e) => {
      const t = e.match(Vx);
      return t ? t.map(Ix).join(" ") : e;
    },
  }),
  wi = G(O({}, Rt), { transform: Math.round }),
  $x = {
    rotate: Je,
    rotateX: Je,
    rotateY: Je,
    rotateZ: Je,
    scale: Nr,
    scaleX: Nr,
    scaleY: Nr,
    scaleZ: Nr,
    skew: Je,
    skewX: Je,
    skewY: Je,
    distance: X,
    translateX: X,
    translateY: X,
    translateZ: X,
    x: X,
    y: X,
    z: X,
    perspective: X,
    transformPerspective: X,
    opacity: ir,
    originX: li,
    originY: li,
    originZ: X,
  },
  Mo = G(
    O(
      {
        borderWidth: X,
        borderTopWidth: X,
        borderRightWidth: X,
        borderBottomWidth: X,
        borderLeftWidth: X,
        borderRadius: X,
        radius: X,
        borderTopLeftRadius: X,
        borderTopRightRadius: X,
        borderBottomRightRadius: X,
        borderBottomLeftRadius: X,
        width: X,
        maxWidth: X,
        height: X,
        maxHeight: X,
        top: X,
        right: X,
        bottom: X,
        left: X,
        padding: X,
        paddingTop: X,
        paddingRight: X,
        paddingBottom: X,
        paddingLeft: X,
        margin: X,
        marginTop: X,
        marginRight: X,
        marginBottom: X,
        marginLeft: X,
        backgroundPositionX: X,
        backgroundPositionY: X,
      },
      $x,
    ),
    { zIndex: wi, fillOpacity: ir, strokeOpacity: ir, numOctaves: wi },
  ),
  Ux = G(O({}, Mo), {
    color: fe,
    backgroundColor: fe,
    outlineColor: fe,
    fill: fe,
    stroke: fe,
    borderColor: fe,
    borderTopColor: fe,
    borderRightColor: fe,
    borderBottomColor: fe,
    borderLeftColor: fe,
    filter: qn,
    WebkitFilter: qn,
  }),
  Pl = (e) => Ux[e];
function Ml(e, t) {
  let r = Pl(e);
  return (
    r !== qn && (r = rt), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
  );
}
const zx = new Set(["auto", "none", "0"]);
function Hx(e, t, r) {
  let s = 0,
    n;
  for (; s < e.length && !n; ) {
    const a = e[s];
    typeof a == "string" && !zx.has(a) && lr(a).values.length && (n = e[s]),
      s++;
  }
  if (n && r) for (const a of t) e[a] = Ml(r, n);
}
class qx extends Ro {
  constructor(t, r, s, n, a) {
    super(t, r, s, n, a, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: r, name: s } = this;
    if (!r || !r.current) return;
    super.readKeyframes();
    for (let d = 0; d < t.length; d++) {
      let c = t[d];
      if (typeof c == "string" && ((c = c.trim()), ko(c))) {
        const u = _l(c, r.current);
        u !== void 0 && (t[d] = u),
          d === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !Fl.has(s) || t.length !== 2)) return;
    const [n, a] = t,
      i = yi(n),
      l = yi(a);
    if (i !== l)
      if (pi(i) && pi(l))
        for (let d = 0; d < t.length; d++) {
          const c = t[d];
          typeof c == "string" && (t[d] = parseFloat(c));
        }
      else ut[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: r } = this,
      s = [];
    for (let n = 0; n < t.length; n++) (t[n] === null || Lx(t[n])) && s.push(n);
    s.length && Hx(t, s, r);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: r, name: s } = this;
    if (!t || !t.current) return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ut[s](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (r[0] = this.measuredOrigin);
    const n = r[r.length - 1];
    n !== void 0 && t.getValue(s, n).jump(n, !1);
  }
  measureEndState() {
    var l;
    const { element: t, name: r, unresolvedKeyframes: s } = this;
    if (!t || !t.current) return;
    const n = t.getValue(r);
    n && n.jump(this.measuredOrigin, !1);
    const a = s.length - 1,
      i = s[a];
    (s[a] = ut[r](t.measureViewportBox(), window.getComputedStyle(t.current))),
      i !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = i),
      (l = this.removedTransforms) != null &&
        l.length &&
        this.removedTransforms.forEach(([d, c]) => {
          t.getValue(d).set(c);
        }),
      this.resolveNoneKeyframes();
  }
}
function Wx(e, t, r) {
  var s;
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    let n = document;
    const a =
      (s = r == null ? void 0 : r[e]) != null ? s : n.querySelectorAll(e);
    return a ? Array.from(a) : [];
  }
  return Array.from(e);
}
const Ll = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function Ol(e) {
  return el(e) && "offsetHeight" in e;
}
const Ci = 30,
  Kx = (e) => !isNaN(parseFloat(e));
class Yx {
  constructor(t, r = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s) => {
        var a;
        const n = Ne.now();
        if (
          (this.updatedAt !== n && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(s),
          this.current !== this.prev &&
            ((a = this.events.change) == null || a.notify(this.current),
            this.dependents))
        )
          for (const i of this.dependents) i.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = r.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Ne.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = Kx(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new Co());
    const s = this.events[t].add(r);
    return t === "change"
      ? () => {
          s(),
            ae.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : s;
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
  setWithVelocity(t, r, s) {
    this.set(r),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - s);
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
    const t = Ne.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Ci
    )
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, Ci);
    return rl(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
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
function _t(e, t) {
  return new Yx(e, t);
}
const { schedule: Lo } = fl(queueMicrotask, !1),
  Ie = { x: !1, y: !1 };
function Il() {
  return Ie.x || Ie.y;
}
function Xx(e) {
  return e === "x" || e === "y"
    ? Ie[e]
      ? null
      : ((Ie[e] = !0),
        () => {
          Ie[e] = !1;
        })
    : Ie.x || Ie.y
      ? null
      : ((Ie.x = Ie.y = !0),
        () => {
          Ie.x = Ie.y = !1;
        });
}
function Vl(e, t) {
  const r = Wx(e),
    s = new AbortController(),
    n = G(O({ passive: !0 }, t), { signal: s.signal });
  return [r, n, () => s.abort()];
}
function Ai(e) {
  return !(e.pointerType === "touch" || Il());
}
function Gx(e, t, r = {}) {
  const [s, n, a] = Vl(e, r),
    i = (l) => {
      if (!Ai(l)) return;
      const { target: d } = l,
        c = t(d, l);
      if (typeof c != "function" || !d) return;
      const u = (f) => {
        Ai(f) && (c(f), d.removeEventListener("pointerleave", u));
      };
      d.addEventListener("pointerleave", u, n);
    };
  return (
    s.forEach((l) => {
      l.addEventListener("pointerenter", i, n);
    }),
    a
  );
}
const $l = (e, t) => (t ? (e === t ? !0 : $l(e, t.parentElement)) : !1),
  Oo = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  Zx = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Qx(e) {
  return Zx.has(e.tagName) || e.tabIndex !== -1;
}
const bs = new WeakSet();
function Ei(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function un(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const Jx = (e, t) => {
  const r = e.currentTarget;
  if (!r) return;
  const s = Ei(() => {
    if (bs.has(r)) return;
    un(r, "down");
    const n = Ei(() => {
        un(r, "up");
      }),
      a = () => un(r, "cancel");
    r.addEventListener("keyup", n, t), r.addEventListener("blur", a, t);
  });
  r.addEventListener("keydown", s, t),
    r.addEventListener("blur", () => r.removeEventListener("keydown", s), t);
};
function Ni(e) {
  return Oo(e) && !Il();
}
function em(e, t, r = {}) {
  const [s, n, a] = Vl(e, r),
    i = (l) => {
      const d = l.currentTarget;
      if (!Ni(l)) return;
      bs.add(d);
      const c = t(d, l),
        u = (x, m) => {
          window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", h),
            bs.has(d) && bs.delete(d),
            Ni(x) && typeof c == "function" && c(x, { success: m });
        },
        f = (x) => {
          u(
            x,
            d === window ||
              d === document ||
              r.useGlobalTarget ||
              $l(d, x.target),
          );
        },
        h = (x) => {
          u(x, !1);
        };
      window.addEventListener("pointerup", f, n),
        window.addEventListener("pointercancel", h, n);
    };
  return (
    s.forEach((l) => {
      (r.useGlobalTarget ? window : l).addEventListener("pointerdown", i, n),
        Ol(l) &&
          (l.addEventListener("focus", (c) => Jx(c, n)),
          !Qx(l) && !l.hasAttribute("tabindex") && (l.tabIndex = 0));
    }),
    a
  );
}
function Ul(e) {
  return el(e) && "ownerSVGElement" in e;
}
function tm(e) {
  return Ul(e) && e.tagName === "svg";
}
const Ce = (e) => !!(e && e.getVelocity),
  rm = [...Rl, fe, rt],
  sm = (e) => rm.find(Tl(e)),
  Io = _.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function ki(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function nm(...e) {
  return (t) => {
    let r = !1;
    const s = e.map((n) => {
      const a = ki(n, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let n = 0; n < s.length; n++) {
          const a = s[n];
          typeof a == "function" ? a() : ki(e[n], null);
        }
      };
  };
}
function om(...e) {
  return _.useCallback(nm(...e), e);
}
class am extends _.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const s = r.offsetParent,
        n = (Ol(s) && s.offsetWidth) || 0,
        a = this.props.sizeRef.current;
      (a.height = r.offsetHeight || 0),
        (a.width = r.offsetWidth || 0),
        (a.top = r.offsetTop),
        (a.left = r.offsetLeft),
        (a.right = n - a.width - a.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function im({ children: e, isPresent: t, anchorX: r, root: s }) {
  const n = _.useId(),
    a = _.useRef(null),
    i = _.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: l } = _.useContext(Io),
    d = om(a, e == null ? void 0 : e.ref);
  return (
    _.useInsertionEffect(() => {
      const { width: c, height: u, top: f, left: h, right: x } = i.current;
      if (t || !a.current || !c || !u) return;
      const m = r === "left" ? `left: ${h}` : `right: ${x}`;
      a.current.dataset.motionPopId = n;
      const g = document.createElement("style");
      l && (g.nonce = l);
      const p = s != null ? s : document.head;
      return (
        p.appendChild(g),
        g.sheet &&
          g.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${m}px !important;
            top: ${f}px !important;
          }
        `),
        () => {
          p.contains(g) && p.removeChild(g);
        }
      );
    }, [t]),
    o.jsx(am, {
      isPresent: t,
      childRef: a,
      sizeRef: i,
      children: _.cloneElement(e, { ref: d }),
    })
  );
}
const lm = ({
  children: e,
  initial: t,
  isPresent: r,
  onExitComplete: s,
  custom: n,
  presenceAffectsLayout: a,
  mode: i,
  anchorX: l,
  root: d,
}) => {
  const c = po(cm),
    u = _.useId();
  let f = !0,
    h = _.useMemo(
      () => (
        (f = !1),
        {
          id: u,
          initial: t,
          isPresent: r,
          custom: n,
          onExitComplete: (x) => {
            c.set(x, !0);
            for (const m of c.values()) if (!m) return;
            s && s();
          },
          register: (x) => (c.set(x, !1), () => c.delete(x)),
        }
      ),
      [r, c, s],
    );
  return (
    a && f && (h = O({}, h)),
    _.useMemo(() => {
      c.forEach((x, m) => c.set(m, !1));
    }, [r]),
    _.useEffect(() => {
      !r && !c.size && s && s();
    }, [r]),
    i === "popLayout" &&
      (e = o.jsx(im, { isPresent: r, anchorX: l, root: d, children: e })),
    o.jsx(Is.Provider, { value: h, children: e })
  );
};
function cm() {
  return new Map();
}
function zl(e = !0) {
  const t = _.useContext(Is);
  if (t === null) return [!0, null];
  const { isPresent: r, onExitComplete: s, register: n } = t,
    a = _.useId();
  _.useEffect(() => {
    if (e) return n(a);
  }, [e]);
  const i = _.useCallback(() => e && s && s(a), [a, s, e]);
  return !r && s ? [!1, i] : [!0];
}
const kr = (e) => e.key || "";
function ji(e) {
  const t = [];
  return (
    _.Children.forEach(e, (r) => {
      _.isValidElement(r) && t.push(r);
    }),
    t
  );
}
const dm = ({
    children: e,
    custom: t,
    initial: r = !0,
    onExitComplete: s,
    presenceAffectsLayout: n = !0,
    mode: a = "sync",
    propagate: i = !1,
    anchorX: l = "left",
    root: d,
  }) => {
    const [c, u] = zl(i),
      f = _.useMemo(() => ji(e), [e]),
      h = i && !c ? [] : f.map(kr),
      x = _.useRef(!0),
      m = _.useRef(f),
      g = po(() => new Map()),
      [p, w] = _.useState(f),
      [b, v] = _.useState(f);
    Q0(() => {
      (x.current = !1), (m.current = f);
      for (let E = 0; E < b.length; E++) {
        const N = kr(b[E]);
        h.includes(N) ? g.delete(N) : g.get(N) !== !0 && g.set(N, !1);
      }
    }, [b, h.length, h.join("-")]);
    const y = [];
    if (f !== p) {
      let E = [...f];
      for (let N = 0; N < b.length; N++) {
        const j = b[N],
          S = kr(j);
        h.includes(S) || (E.splice(N, 0, j), y.push(j));
      }
      return a === "wait" && y.length && (E = y), v(ji(E)), w(f), null;
    }
    const { forceRender: C } = _.useContext(mo);
    return o.jsx(o.Fragment, {
      children: b.map((E) => {
        const N = kr(E),
          j = i && !c ? !1 : f === b || h.includes(N),
          S = () => {
            if (g.has(N)) g.set(N, !0);
            else return;
            let A = !0;
            g.forEach((B) => {
              B || (A = !1);
            }),
              A &&
                (C == null || C(),
                v(m.current),
                i && (u == null || u()),
                s && s());
          };
        return o.jsx(
          lm,
          {
            isPresent: j,
            initial: !x.current || r ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: n,
            mode: a,
            root: d,
            onExitComplete: j ? void 0 : S,
            anchorX: l,
            children: E,
          },
          N,
        );
      }),
    });
  },
  Hl = _.createContext({ strict: !1 }),
  Di = {
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
  Ft = {};
for (const e in Di) Ft[e] = { isEnabled: (t) => Di[e].some((r) => !!t[r]) };
function um(e) {
  for (const t in e) Ft[t] = O(O({}, Ft[t]), e[t]);
}
const hm = new Set([
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
function Ts(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    hm.has(e)
  );
}
let ql = (e) => !Ts(e);
function fm(e) {
  typeof e == "function" && (ql = (t) => (t.startsWith("on") ? !Ts(t) : e(t)));
}
try {
  fm(require("@emotion/is-prop-valid").default);
} catch (e) {}
function xm(e, t, r) {
  const s = {};
  for (const n in e)
    (n === "values" && typeof e.values == "object") ||
      ((ql(n) ||
        (r === !0 && Ts(n)) ||
        (!t && !Ts(n)) ||
        (e.draggable && n.startsWith("onDrag"))) &&
        (s[n] = e[n]));
  return s;
}
const Vs = _.createContext({});
function $s(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function cr(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Vo = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  $o = ["initial", ...Vo];
function Us(e) {
  return $s(e.animate) || $o.some((t) => cr(e[t]));
}
function Wl(e) {
  return !!(Us(e) || e.variants);
}
function mm(e, t) {
  if (Us(e)) {
    const { initial: r, animate: s } = e;
    return {
      initial: r === !1 || cr(r) ? r : void 0,
      animate: cr(s) ? s : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function pm(e) {
  const { initial: t, animate: r } = mm(e, _.useContext(Vs));
  return _.useMemo(() => ({ initial: t, animate: r }), [Bi(t), Bi(r)]);
}
function Bi(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const dr = {};
function gm(e) {
  for (const t in e) (dr[t] = e[t]), No(t) && (dr[t].isCSSVariable = !0);
}
function Kl(e, { layout: t, layoutId: r }) {
  return (
    Mt.has(e) ||
    e.startsWith("origin") ||
    ((t || r !== void 0) && (!!dr[e] || e === "opacity"))
  );
}
const bm = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  vm = Pt.length;
function ym(e, t, r) {
  let s = "",
    n = !0;
  for (let a = 0; a < vm; a++) {
    const i = Pt[a],
      l = e[i];
    if (l === void 0) continue;
    let d = !0;
    if (
      (typeof l == "number"
        ? (d = l === (i.startsWith("scale") ? 1 : 0))
        : (d = parseFloat(l) === 0),
      !d || r)
    ) {
      const c = Ll(l, Mo[i]);
      if (!d) {
        n = !1;
        const u = bm[i] || i;
        s += `${u}(${c}) `;
      }
      r && (t[i] = c);
    }
  }
  return (s = s.trim()), r ? (s = r(t, n ? "" : s)) : n && (s = "none"), s;
}
function Uo(e, t, r) {
  const { style: s, vars: n, transformOrigin: a } = e;
  let i = !1,
    l = !1;
  for (const d in t) {
    const c = t[d];
    if (Mt.has(d)) {
      i = !0;
      continue;
    } else if (No(d)) {
      n[d] = c;
      continue;
    } else {
      const u = Ll(c, Mo[d]);
      d.startsWith("origin") ? ((l = !0), (a[d] = u)) : (s[d] = u);
    }
  }
  if (
    (t.transform ||
      (i || r
        ? (s.transform = ym(t, e.transform, r))
        : s.transform && (s.transform = "none")),
    l)
  ) {
    const { originX: d = "50%", originY: c = "50%", originZ: u = 0 } = a;
    s.transformOrigin = `${d} ${c} ${u}`;
  }
}
const zo = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Yl(e, t, r) {
  for (const s in t) !Ce(t[s]) && !Kl(s, r) && (e[s] = t[s]);
}
function wm({ transformTemplate: e }, t) {
  return _.useMemo(() => {
    const r = zo();
    return Uo(r, t, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function Cm(e, t) {
  const r = e.style || {},
    s = {};
  return Yl(s, r, e), Object.assign(s, wm(e, t)), s;
}
function Am(e, t) {
  const r = {},
    s = Cm(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = s),
    r
  );
}
const Em = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Nm = { offset: "strokeDashoffset", array: "strokeDasharray" };
function km(e, t, r = 1, s = 0, n = !0) {
  e.pathLength = 1;
  const a = n ? Em : Nm;
  e[a.offset] = X.transform(-s);
  const i = X.transform(t),
    l = X.transform(r);
  e[a.array] = `${i} ${l}`;
}
function Xl(e, f, d, c, u) {
  var h = f,
    {
      attrX: t,
      attrY: r,
      attrScale: s,
      pathLength: n,
      pathSpacing: a = 1,
      pathOffset: i = 0,
    } = h,
    l = _e(h, [
      "attrX",
      "attrY",
      "attrScale",
      "pathLength",
      "pathSpacing",
      "pathOffset",
    ]);
  var g, p;
  if ((Uo(e, l, c), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: x, style: m } = e;
  x.transform && ((m.transform = x.transform), delete x.transform),
    (m.transform || x.transformOrigin) &&
      ((m.transformOrigin = (g = x.transformOrigin) != null ? g : "50% 50%"),
      delete x.transformOrigin),
    m.transform &&
      ((m.transformBox =
        (p = u == null ? void 0 : u.transformBox) != null ? p : "fill-box"),
      delete x.transformBox),
    t !== void 0 && (x.x = t),
    r !== void 0 && (x.y = r),
    s !== void 0 && (x.scale = s),
    n !== void 0 && km(x, n, a, i, !1);
}
const Gl = () => G(O({}, zo()), { attrs: {} }),
  Zl = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function jm(e, t, r, s) {
  const n = _.useMemo(() => {
    const a = Gl();
    return (
      Xl(a, t, Zl(s), e.transformTemplate, e.style),
      G(O({}, a.attrs), { style: O({}, a.style) })
    );
  }, [t]);
  if (e.style) {
    const a = {};
    Yl(a, e.style, e), (n.style = O(O({}, a), n.style));
  }
  return n;
}
const Dm = [
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
function Ho(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Dm.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Bm(e, t, r, { latestValues: s }, n, a = !1) {
  const l = (Ho(e) ? jm : Am)(t, s, n, e),
    d = xm(t, typeof e == "string", a),
    c = e !== _.Fragment ? G(O(O({}, d), l), { ref: r }) : {},
    { children: u } = t,
    f = _.useMemo(() => (Ce(u) ? u.get() : u), [u]);
  return _.createElement(e, G(O({}, c), { children: f }));
}
function Si(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((r, s) => {
        (t[0][s] = r.get()), (t[1][s] = r.getVelocity());
      }),
    t
  );
}
function qo(e, t, r, s) {
  if (typeof t == "function") {
    const [n, a] = Si(s);
    t = t(r !== void 0 ? r : e.custom, n, a);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [n, a] = Si(s);
    t = t(r !== void 0 ? r : e.custom, n, a);
  }
  return t;
}
function vs(e) {
  return Ce(e) ? e.get() : e;
}
function Sm({ scrapeMotionValuesFromProps: e, createRenderState: t }, r, s, n) {
  return { latestValues: _m(r, s, n, e), renderState: t() };
}
function _m(e, t, r, s) {
  const n = {},
    a = s(e, {});
  for (const x in a) n[x] = vs(a[x]);
  let { initial: i, animate: l } = e;
  const d = Us(e),
    c = Wl(e);
  t &&
    c &&
    !d &&
    e.inherit !== !1 &&
    (i === void 0 && (i = t.initial), l === void 0 && (l = t.animate));
  let u = r ? r.initial === !1 : !1;
  u = u || i === !1;
  const f = u ? l : i;
  if (f && typeof f != "boolean" && !$s(f)) {
    const x = Array.isArray(f) ? f : [f];
    for (let m = 0; m < x.length; m++) {
      const g = qo(e, x[m]);
      if (g) {
        const h = g,
          { transitionEnd: p, transition: w } = h,
          b = _e(h, ["transitionEnd", "transition"]);
        for (const v in b) {
          let y = b[v];
          if (Array.isArray(y)) {
            const C = u ? y.length - 1 : 0;
            y = y[C];
          }
          y !== null && (n[v] = y);
        }
        for (const v in p) n[v] = p[v];
      }
    }
  }
  return n;
}
const Ql = (e) => (t, r) => {
  const s = _.useContext(Vs),
    n = _.useContext(Is),
    a = () => Sm(e, t, s, n);
  return r ? a() : po(a);
};
function Wo(e, t, r) {
  var a;
  const { style: s } = e,
    n = {};
  for (const i in s)
    (Ce(s[i]) ||
      (t.style && Ce(t.style[i])) ||
      Kl(i, e) ||
      ((a = r == null ? void 0 : r.getValue(i)) == null
        ? void 0
        : a.liveStyle) !== void 0) &&
      (n[i] = s[i]);
  return n;
}
const Fm = Ql({ scrapeMotionValuesFromProps: Wo, createRenderState: zo });
function Jl(e, t, r) {
  const s = Wo(e, t, r);
  for (const n in e)
    if (Ce(e[n]) || Ce(t[n])) {
      const a =
        Pt.indexOf(n) !== -1
          ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
          : n;
      s[a] = e[n];
    }
  return s;
}
const Tm = Ql({ scrapeMotionValuesFromProps: Jl, createRenderState: Gl }),
  Rm = Symbol.for("motionComponentSymbol");
function Nt(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Pm(e, t, r) {
  return _.useCallback(
    (s) => {
      s && e.onMount && e.onMount(s),
        t && (s ? t.mount(s) : t.unmount()),
        r && (typeof r == "function" ? r(s) : Nt(r) && (r.current = s));
    },
    [t],
  );
}
const Ko = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Mm = "framerAppearId",
  ec = "data-" + Ko(Mm),
  tc = _.createContext({});
function Lm(e, t, r, s, n) {
  var g, p;
  const { visualElement: a } = _.useContext(Vs),
    i = _.useContext(Hl),
    l = _.useContext(Is),
    d = _.useContext(Io).reducedMotion,
    c = _.useRef(null);
  (s = s || i.renderer),
    !c.current &&
      s &&
      (c.current = s(e, {
        visualState: t,
        parent: a,
        props: r,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: d,
      }));
  const u = c.current,
    f = _.useContext(tc);
  u &&
    !u.projection &&
    n &&
    (u.type === "html" || u.type === "svg") &&
    Om(c.current, r, n, f);
  const h = _.useRef(!1);
  _.useInsertionEffect(() => {
    u && h.current && u.update(r, l);
  });
  const x = r[ec],
    m = _.useRef(
      !!x &&
        !((g = window.MotionHandoffIsComplete) != null && g.call(window, x)) &&
        ((p = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : p.call(window, x)),
    );
  return (
    Q0(() => {
      u &&
        ((h.current = !0),
        (window.MotionIsMounted = !0),
        u.updateFeatures(),
        u.scheduleRenderMicrotask(),
        m.current && u.animationState && u.animationState.animateChanges());
    }),
    _.useEffect(() => {
      u &&
        (!m.current && u.animationState && u.animationState.animateChanges(),
        m.current &&
          (queueMicrotask(() => {
            var w;
            (w = window.MotionHandoffMarkAsComplete) == null ||
              w.call(window, x);
          }),
          (m.current = !1)),
        (u.enteringChildren = void 0));
    }),
    u
  );
}
function Om(e, t, r, s) {
  const {
    layoutId: n,
    layout: a,
    drag: i,
    dragConstraints: l,
    layoutScroll: d,
    layoutRoot: c,
    layoutCrossfade: u,
  } = t;
  (e.projection = new r(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : rc(e.parent),
  )),
    e.projection.setOptions({
      layoutId: n,
      layout: a,
      alwaysMeasureLayout: !!i || (l && Nt(l)),
      visualElement: e,
      animationType: typeof a == "string" ? a : "both",
      initialPromotionConfig: s,
      crossfade: u,
      layoutScroll: d,
      layoutRoot: c,
    });
}
function rc(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : rc(e.parent);
}
function hn(e, { forwardMotionProps: t = !1 } = {}, r, s) {
  var l, d;
  r && um(r);
  const n = Ho(e) ? Tm : Fm;
  function a(c, u) {
    let f;
    const h = G(O(O({}, _.useContext(Io)), c), { layoutId: Im(c) }),
      { isStatic: x } = h,
      m = pm(c),
      g = n(c, x);
    if (!x && go) {
      Vm();
      const p = $m(h);
      (f = p.MeasureLayout),
        (m.visualElement = Lm(e, g, h, s, p.ProjectionNode));
    }
    return o.jsxs(Vs.Provider, {
      value: m,
      children: [
        f && m.visualElement
          ? o.jsx(f, O({ visualElement: m.visualElement }, h))
          : null,
        Bm(e, c, Pm(g, m.visualElement, u), g, x, t),
      ],
    });
  }
  a.displayName = `motion.${typeof e == "string" ? e : `create(${(d = (l = e.displayName) != null ? l : e.name) != null ? d : ""})`}`;
  const i = _.forwardRef(a);
  return (i[Rm] = e), i;
}
function Im({ layoutId: e }) {
  const t = _.useContext(mo).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Vm(e, t) {
  _.useContext(Hl).strict;
}
function $m(e) {
  const { drag: t, layout: r } = Ft;
  if (!t && !r) return {};
  const s = O(O({}, t), r);
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (r != null && r.isEnabled(e))
        ? s.MeasureLayout
        : void 0,
    ProjectionNode: s.ProjectionNode,
  };
}
function Um(e, t) {
  if (typeof Proxy == "undefined") return hn;
  const r = new Map(),
    s = (a, i) => hn(a, i, e, t),
    n = (a, i) => s(a, i);
  return new Proxy(n, {
    get: (a, i) =>
      i === "create"
        ? s
        : (r.has(i) || r.set(i, hn(i, void 0, e, t)), r.get(i)),
  });
}
function sc({ top: e, left: t, right: r, bottom: s }) {
  return { x: { min: t, max: r }, y: { min: e, max: s } };
}
function zm({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Hm(e, t) {
  if (!t) return e;
  const r = t({ x: e.left, y: e.top }),
    s = t({ x: e.right, y: e.bottom });
  return { top: r.y, left: r.x, bottom: s.y, right: s.x };
}
function fn(e) {
  return e === void 0 || e === 1;
}
function Wn({ scale: e, scaleX: t, scaleY: r }) {
  return !fn(e) || !fn(t) || !fn(r);
}
function it(e) {
  return (
    Wn(e) ||
    nc(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function nc(e) {
  return _i(e.x) || _i(e.y);
}
function _i(e) {
  return e && e !== "0%";
}
function Rs(e, t, r) {
  const s = e - r,
    n = t * s;
  return r + n;
}
function Fi(e, t, r, s, n) {
  return n !== void 0 && (e = Rs(e, n, s)), Rs(e, r, s) + t;
}
function Kn(e, t = 0, r = 1, s, n) {
  (e.min = Fi(e.min, t, r, s, n)), (e.max = Fi(e.max, t, r, s, n));
}
function oc(e, { x: t, y: r }) {
  Kn(e.x, t.translate, t.scale, t.originPoint),
    Kn(e.y, r.translate, r.scale, r.originPoint);
}
const Ti = 0.999999999999,
  Ri = 1.0000000000001;
function qm(e, t, r, s = !1) {
  const n = r.length;
  if (!n) return;
  t.x = t.y = 1;
  let a, i;
  for (let l = 0; l < n; l++) {
    (a = r[l]), (i = a.projectionDelta);
    const { visualElement: d } = a.options;
    (d && d.props.style && d.props.style.display === "contents") ||
      (s &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        jt(e, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
      i && ((t.x *= i.x.scale), (t.y *= i.y.scale), oc(e, i)),
      s && it(a.latestValues) && jt(e, a.latestValues));
  }
  t.x < Ri && t.x > Ti && (t.x = 1), t.y < Ri && t.y > Ti && (t.y = 1);
}
function kt(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Pi(e, t, r, s, n = 0.5) {
  const a = ie(e.min, e.max, n);
  Kn(e, t, r, a, s);
}
function jt(e, t) {
  Pi(e.x, t.x, t.scaleX, t.scale, t.originX),
    Pi(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function ac(e, t) {
  return sc(Hm(e.getBoundingClientRect(), t));
}
function Wm(e, t, r) {
  const s = ac(e, r),
    { scroll: n } = t;
  return n && (kt(s.x, n.offset.x), kt(s.y, n.offset.y)), s;
}
const Mi = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Dt = () => ({ x: Mi(), y: Mi() }),
  Li = () => ({ min: 0, max: 0 }),
  de = () => ({ x: Li(), y: Li() }),
  Yn = { current: null },
  ic = { current: !1 };
function Km() {
  if (((ic.current = !0), !!go))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Yn.current = e.matches);
      e.addEventListener("change", t), t();
    } else Yn.current = !1;
}
const Ym = new WeakMap();
function Xm(e, t, r) {
  for (const s in t) {
    const n = t[s],
      a = r[s];
    if (Ce(n)) e.addValue(s, n);
    else if (Ce(a)) e.addValue(s, _t(n, { owner: e }));
    else if (a !== n)
      if (e.hasValue(s)) {
        const i = e.getValue(s);
        i.liveStyle === !0 ? i.jump(n) : i.hasAnimated || i.set(n);
      } else {
        const i = e.getStaticValue(s);
        e.addValue(s, _t(i !== void 0 ? i : n, { owner: e }));
      }
  }
  for (const s in r) t[s] === void 0 && e.removeValue(s);
  return t;
}
const Oi = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class Gm {
  scrapeMotionValuesFromProps(t, r, s) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: r,
      presenceContext: s,
      reducedMotionConfig: n,
      blockInitialAnimation: a,
      visualState: i,
    },
    l = {},
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Ro),
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
        const x = Ne.now();
        this.renderScheduledAt < x &&
          ((this.renderScheduledAt = x), ae.render(this.render, !1, !0));
      });
    const { latestValues: d, renderState: c } = i;
    (this.latestValues = d),
      (this.baseTarget = O({}, d)),
      (this.initialValues = r.initial ? O({}, d) : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = r),
      (this.presenceContext = s),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = n),
      (this.options = l),
      (this.blockInitialAnimation = !!a),
      (this.isControllingVariants = Us(r)),
      (this.isVariantNode = Wl(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const h = this.scrapeMotionValuesFromProps(r, {}, this),
      { willChange: u } = h,
      f = _e(h, ["willChange"]);
    for (const x in f) {
      const m = f[x];
      d[x] !== void 0 && Ce(m) && m.set(d[x]);
    }
  }
  mount(t) {
    var r;
    (this.current = t),
      Ym.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, n) => this.bindToMotionValue(n, s)),
      ic.current || Km(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Yn.current),
      (r = this.parent) == null || r.addChild(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(),
      tt(this.notifyUpdate),
      tt(this.render),
      this.valueSubscriptions.forEach((r) => r()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this);
    for (const r in this.events) this.events[r].clear();
    for (const r in this.features) {
      const s = this.features[r];
      s && (s.unmount(), (s.isMounted = !1));
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
    const s = Mt.has(t);
    s && this.onBindTransform && this.onBindTransform();
    const n = r.on("change", (i) => {
      (this.latestValues[t] = i),
        this.props.onUpdate && ae.preRender(this.notifyUpdate),
        s && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let a;
    window.MotionCheckAppearSync &&
      (a = window.MotionCheckAppearSync(this, t, r)),
      this.valueSubscriptions.set(t, () => {
        n(), a && a(), r.owner && r.stop();
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
    for (t in Ft) {
      const r = Ft[t];
      if (!r) continue;
      const { isEnabled: s, Feature: n } = r;
      if (
        (!this.features[t] &&
          n &&
          s(this.props) &&
          (this.features[t] = new n(this)),
        this.features[t])
      ) {
        const a = this.features[t];
        a.isMounted ? a.update() : (a.mount(), (a.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : de();
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
    for (let s = 0; s < Oi.length; s++) {
      const n = Oi[s];
      this.propEventSubscriptions[n] &&
        (this.propEventSubscriptions[n](),
        delete this.propEventSubscriptions[n]);
      const a = "on" + n,
        i = t[a];
      i && (this.propEventSubscriptions[n] = this.on(n, i));
    }
    (this.prevMotionValues = Xm(
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
    const s = this.values.get(t);
    r !== s &&
      (s && this.removeValue(t),
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
    let s = this.values.get(t);
    return (
      s === void 0 &&
        r !== void 0 &&
        ((s = _t(r === null ? void 0 : r, { owner: this })),
        this.addValue(t, s)),
      s
    );
  }
  readValue(t, r) {
    var n;
    let s =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (n = this.getBaseTargetFromProps(this.props, t)) != null
          ? n
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      s != null &&
        (typeof s == "string" && (J0(s) || tl(s))
          ? (s = parseFloat(s))
          : !sm(s) && rt.test(r) && (s = Ml(t, r)),
        this.setBaseTarget(t, Ce(s) ? s.get() : s)),
      Ce(s) ? s.get() : s
    );
  }
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  getBaseTarget(t) {
    var a;
    const { initial: r } = this.props;
    let s;
    if (typeof r == "string" || typeof r == "object") {
      const i = qo(
        this.props,
        r,
        (a = this.presenceContext) == null ? void 0 : a.custom,
      );
      i && (s = i[t]);
    }
    if (r && s !== void 0) return s;
    const n = this.getBaseTargetFromProps(this.props, t);
    return n !== void 0 && !Ce(n)
      ? n
      : this.initialValues[t] !== void 0 && s === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Co()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
  scheduleRenderMicrotask() {
    Lo.render(this.render);
  }
}
class lc extends Gm {
  constructor() {
    super(...arguments), (this.KeyframeResolver = qx);
  }
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: s }) {
    delete r[t], delete s[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ce(t) &&
      (this.childSubscription = t.on("change", (r) => {
        this.current && (this.current.textContent = `${r}`);
      }));
  }
}
function cc(e, { style: t, vars: r }, s, n) {
  const a = e.style;
  let i;
  for (i in t) a[i] = t[i];
  n == null || n.applyProjectionStyles(a, s);
  for (i in r) a.setProperty(i, r[i]);
}
function Zm(e) {
  return window.getComputedStyle(e);
}
class Qm extends lc {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = cc);
  }
  readValueFromInstance(t, r) {
    var s;
    if (Mt.has(r))
      return (s = this.projection) != null && s.isProjecting ? In(r) : dx(t, r);
    {
      const n = Zm(t),
        a = (No(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof a == "string" ? a.trim() : a;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return ac(t, r);
  }
  build(t, r, s) {
    Uo(t, r, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r, s) {
    return Wo(t, r, s);
  }
}
const dc = new Set([
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
function Jm(e, t, r, s) {
  cc(e, t, void 0, s);
  for (const n in t.attrs) e.setAttribute(dc.has(n) ? n : Ko(n), t.attrs[n]);
}
class ep extends lc {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = de);
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Mt.has(r)) {
      const s = Pl(r);
      return (s && s.default) || 0;
    }
    return (r = dc.has(r) ? r : Ko(r)), t.getAttribute(r);
  }
  scrapeMotionValuesFromProps(t, r, s) {
    return Jl(t, r, s);
  }
  build(t, r, s) {
    Xl(t, r, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(t, r, s, n) {
    Jm(t, r, s, n);
  }
  mount(t) {
    (this.isSVGTag = Zl(t.tagName)), super.mount(t);
  }
}
const tp = (e, t) =>
  Ho(e) ? new ep(t) : new Qm(t, { allowProjection: e !== _.Fragment });
function St(e, t, r) {
  const s = e.getProps();
  return qo(s, t, r !== void 0 ? r : s.custom, e);
}
const Xn = (e) => Array.isArray(e);
function rp(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, _t(r));
}
function sp(e) {
  return Xn(e) ? e[e.length - 1] || 0 : e;
}
function np(e, t) {
  let i = St(e, t) || {},
    { transitionEnd: s = {}, transition: n = {} } = i,
    a = _e(i, ["transitionEnd", "transition"]);
  a = O(O({}, a), s);
  for (const l in a) {
    const d = sp(a[l]);
    rp(e, l, d);
  }
}
function op(e) {
  return !!(Ce(e) && e.add);
}
function Gn(e, t) {
  const r = e.getValue("willChange");
  if (op(r)) return r.add(t);
  if (!r && Ge.WillChange) {
    const s = new Ge.WillChange("auto");
    e.addValue("willChange", s), s.add(t);
  }
}
function uc(e) {
  return e.props[ec];
}
const ap = (e) => e !== null;
function ip(e, { repeat: t, repeatType: r = "loop" }, s) {
  const n = e.filter(ap),
    a = t && r !== "loop" && t % 2 === 1 ? 0 : n.length - 1;
  return n[a];
}
const lp = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  cp = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  dp = { type: "keyframes", duration: 0.8 },
  up = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  hp = (e, { keyframes: t }) =>
    t.length > 2
      ? dp
      : Mt.has(e)
        ? e.startsWith("scale")
          ? cp(t[1])
          : lp
        : up;
function fp(f) {
  var h = f,
    {
      when: e,
      delay: t,
      delayChildren: r,
      staggerChildren: s,
      staggerDirection: n,
      repeat: a,
      repeatType: i,
      repeatDelay: l,
      from: d,
      elapsed: c,
    } = h,
    u = _e(h, [
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
const Yo =
  (e, t, r, s = {}, n, a) =>
  (i) => {
    const l = Po(s, e) || {},
      d = l.delay || s.delay || 0;
    let { elapsed: c = 0 } = s;
    c = c - He(d);
    const u = G(
      O(
        {
          keyframes: Array.isArray(r) ? r : [null, r],
          ease: "easeOut",
          velocity: t.getVelocity(),
        },
        l,
      ),
      {
        delay: -c,
        onUpdate: (h) => {
          t.set(h), l.onUpdate && l.onUpdate(h);
        },
        onComplete: () => {
          i(), l.onComplete && l.onComplete();
        },
        name: e,
        motionValue: t,
        element: a ? void 0 : n,
      },
    );
    fp(l) || Object.assign(u, hp(e, u)),
      u.duration && (u.duration = He(u.duration)),
      u.repeatDelay && (u.repeatDelay = He(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from);
    let f = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        (Hn(u), u.delay === 0 && (f = !0)),
      (Ge.instantAnimations || Ge.skipAnimations) &&
        ((f = !0), Hn(u), (u.delay = 0)),
      (u.allowFlatten = !l.type && !l.ease),
      f && !a && t.get() !== void 0)
    ) {
      const h = ip(u.keyframes, l);
      if (h !== void 0) {
        ae.update(() => {
          u.onUpdate(h), u.onComplete();
        });
        return;
      }
    }
    return l.isSync ? new To(u) : new Tx(u);
  };
function xp({ protectedKeys: e, needsAnimating: t }, r) {
  const s = e.hasOwnProperty(r) && t[r] !== !0;
  return (t[r] = !1), s;
}
function hc(e, t, { delay: r = 0, transitionOverride: s, type: n } = {}) {
  var f;
  let u = t,
    { transition: a = e.getDefaultTransition(), transitionEnd: i } = u,
    l = _e(u, ["transition", "transitionEnd"]);
  s && (a = s);
  const d = [],
    c = n && e.animationState && e.animationState.getState()[n];
  for (const h in l) {
    const x = e.getValue(h, (f = e.latestValues[h]) != null ? f : null),
      m = l[h];
    if (m === void 0 || (c && xp(c, h))) continue;
    const g = O({ delay: r }, Po(a || {}, h)),
      p = x.get();
    if (
      p !== void 0 &&
      !x.isAnimating &&
      !Array.isArray(m) &&
      m === p &&
      !g.velocity
    )
      continue;
    let w = !1;
    if (window.MotionHandoffAnimation) {
      const v = uc(e);
      if (v) {
        const y = window.MotionHandoffAnimation(v, h, ae);
        y !== null && ((g.startTime = y), (w = !0));
      }
    }
    Gn(e, h),
      x.start(
        Yo(h, x, m, e.shouldReduceMotion && Fl.has(h) ? { type: !1 } : g, e, w),
      );
    const b = x.animation;
    b && d.push(b);
  }
  return (
    i &&
      Promise.all(d).then(() => {
        ae.update(() => {
          i && np(e, i);
        });
      }),
    d
  );
}
function fc(e, t, r, s = 0, n = 1) {
  const a = Array.from(e)
      .sort((c, u) => c.sortNodePosition(u))
      .indexOf(t),
    i = e.size,
    l = (i - 1) * s;
  return typeof r == "function" ? r(a, i) : n === 1 ? a * s : l - a * s;
}
function Zn(e, t, r = {}) {
  var d;
  const s = St(
    e,
    t,
    r.type === "exit"
      ? (d = e.presenceContext) == null
        ? void 0
        : d.custom
      : void 0,
  );
  let { transition: n = e.getDefaultTransition() || {} } = s || {};
  r.transitionOverride && (n = r.transitionOverride);
  const a = s ? () => Promise.all(hc(e, s, r)) : () => Promise.resolve(),
    i =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: f,
              staggerDirection: h,
            } = n;
            return mp(e, t, c, u, f, h, r);
          }
        : () => Promise.resolve(),
    { when: l } = n;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [a, i] : [i, a];
    return c().then(() => u());
  } else return Promise.all([a(), i(r.delay)]);
}
function mp(e, t, r = 0, s = 0, n = 0, a = 1, i) {
  const l = [];
  for (const d of e.variantChildren)
    d.notify("AnimationStart", t),
      l.push(
        Zn(
          d,
          t,
          G(O({}, i), {
            delay:
              r +
              (typeof s == "function" ? 0 : s) +
              fc(e.variantChildren, d, s, n, a),
          }),
        ).then(() => d.notify("AnimationComplete", t)),
      );
  return Promise.all(l);
}
function pp(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let s;
  if (Array.isArray(t)) {
    const n = t.map((a) => Zn(e, a, r));
    s = Promise.all(n);
  } else if (typeof t == "string") s = Zn(e, t, r);
  else {
    const n = typeof t == "function" ? St(e, t, r.custom) : t;
    s = Promise.all(hc(e, n, r));
  }
  return s.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function xc(e, t) {
  if (!Array.isArray(t)) return !1;
  const r = t.length;
  if (r !== e.length) return !1;
  for (let s = 0; s < r; s++) if (t[s] !== e[s]) return !1;
  return !0;
}
const gp = $o.length;
function mc(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const r = e.parent ? mc(e.parent) || {} : {};
    return e.props.initial !== void 0 && (r.initial = e.props.initial), r;
  }
  const t = {};
  for (let r = 0; r < gp; r++) {
    const s = $o[r],
      n = e.props[s];
    (cr(n) || n === !1) && (t[s] = n);
  }
  return t;
}
const bp = [...Vo].reverse(),
  vp = Vo.length;
function yp(e) {
  return (t) =>
    Promise.all(t.map(({ animation: r, options: s }) => pp(e, r, s)));
}
function wp(e) {
  let t = yp(e),
    r = Ii(),
    s = !0;
  const n = (d) => (c, u) => {
    var h;
    const f = St(
      e,
      u,
      d === "exit"
        ? (h = e.presenceContext) == null
          ? void 0
          : h.custom
        : void 0,
    );
    if (f) {
      const x = f,
        { transition: m, transitionEnd: g } = x,
        p = _e(x, ["transition", "transitionEnd"]);
      c = O(O(O({}, c), p), g);
    }
    return c;
  };
  function a(d) {
    t = d(e);
  }
  function i(d) {
    const { props: c } = e,
      u = mc(e.parent) || {},
      f = [],
      h = new Set();
    let x = {},
      m = 1 / 0;
    for (let p = 0; p < vp; p++) {
      const w = bp[p],
        b = r[w],
        v = c[w] !== void 0 ? c[w] : u[w],
        y = cr(v),
        C = w === d ? b.isActive : null;
      C === !1 && (m = p);
      let E = v === u[w] && v !== c[w] && y;
      if (
        (E && s && e.manuallyAnimateOnMount && (E = !1),
        (b.protectedKeys = O({}, x)),
        (!b.isActive && C === null) ||
          (!v && !b.prevProp) ||
          $s(v) ||
          typeof v == "boolean")
      )
        continue;
      const N = Cp(b.prevProp, v);
      let j = N || (w === d && b.isActive && !E && y) || (p > m && y),
        S = !1;
      const A = Array.isArray(v) ? v : [v];
      let B = A.reduce(n(w), {});
      C === !1 && (B = {});
      const { prevResolvedValues: k = {} } = b,
        T = O(O({}, k), B),
        I = (W) => {
          (j = !0),
            h.has(W) && ((S = !0), h.delete(W)),
            (b.needsAnimating[W] = !0);
          const q = e.getValue(W);
          q && (q.liveStyle = !1);
        };
      for (const W in T) {
        const q = B[W],
          Z = k[W];
        if (x.hasOwnProperty(W)) continue;
        let K = !1;
        Xn(q) && Xn(Z) ? (K = !xc(q, Z)) : (K = q !== Z),
          K
            ? q != null
              ? I(W)
              : h.add(W)
            : q !== void 0 && h.has(W)
              ? I(W)
              : (b.protectedKeys[W] = !0);
      }
      (b.prevProp = v),
        (b.prevResolvedValues = B),
        b.isActive && (x = O(O({}, x), B)),
        s && e.blockInitialAnimation && (j = !1);
      const $ = E && N;
      j &&
        (!$ || S) &&
        f.push(
          ...A.map((W) => {
            const q = { type: w };
            if (
              typeof W == "string" &&
              s &&
              !$ &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: Z } = e,
                K = St(Z, W);
              if (Z.enteringChildren && K) {
                const { delayChildren: R } = K.transition || {};
                q.delay = fc(Z.enteringChildren, e, R);
              }
            }
            return { animation: W, options: q };
          }),
        );
    }
    if (h.size) {
      const p = {};
      if (typeof c.initial != "boolean") {
        const w = St(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        w && w.transition && (p.transition = w.transition);
      }
      h.forEach((w) => {
        const b = e.getBaseTarget(w),
          v = e.getValue(w);
        v && (v.liveStyle = !0), (p[w] = b != null ? b : null);
      }),
        f.push({ animation: p });
    }
    let g = !!f.length;
    return (
      s &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (g = !1),
      (s = !1),
      g ? t(f) : Promise.resolve()
    );
  }
  function l(d, c) {
    var f;
    if (r[d].isActive === c) return Promise.resolve();
    (f = e.variantChildren) == null ||
      f.forEach((h) => {
        var x;
        return (x = h.animationState) == null ? void 0 : x.setActive(d, c);
      }),
      (r[d].isActive = c);
    const u = i(d);
    for (const h in r) r[h].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: i,
    setActive: l,
    setAnimateFunction: a,
    getState: () => r,
    reset: () => {
      r = Ii();
    },
  };
}
function Cp(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !xc(t, e) : !1;
}
function at(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Ii() {
  return {
    animate: at(!0),
    whileInView: at(),
    whileHover: at(),
    whileTap: at(),
    whileDrag: at(),
    whileFocus: at(),
    exit: at(),
  };
}
class nt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class Ap extends nt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = wp(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    $s(t) && (this.unmountControls = t.subscribe(this.node));
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
let Ep = 0;
class Np extends nt {
  constructor() {
    super(...arguments), (this.id = Ep++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: r } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === s) return;
    const n = this.node.animationState.setActive("exit", !t);
    r &&
      !t &&
      n.then(() => {
        r(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: r } = this.node.presenceContext || {};
    r && r(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const kp = { animation: { Feature: Ap }, exit: { Feature: Np } };
function ur(e, t, r, s = { passive: !0 }) {
  return e.addEventListener(t, r, s), () => e.removeEventListener(t, r);
}
function pr(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const jp = (e) => (t) => Oo(t) && e(t, pr(t));
function rr(e, t, r, s) {
  return ur(e, t, jp(r), s);
}
const pc = 1e-4,
  Dp = 1 - pc,
  Bp = 1 + pc,
  gc = 0.01,
  Sp = 0 - gc,
  _p = 0 + gc;
function Ae(e) {
  return e.max - e.min;
}
function Fp(e, t, r) {
  return Math.abs(e - t) <= r;
}
function Vi(e, t, r, s = 0.5) {
  (e.origin = s),
    (e.originPoint = ie(t.min, t.max, e.origin)),
    (e.scale = Ae(r) / Ae(t)),
    (e.translate = ie(r.min, r.max, e.origin) - e.originPoint),
    ((e.scale >= Dp && e.scale <= Bp) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Sp && e.translate <= _p) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function sr(e, t, r, s) {
  Vi(e.x, t.x, r.x, s ? s.originX : void 0),
    Vi(e.y, t.y, r.y, s ? s.originY : void 0);
}
function $i(e, t, r) {
  (e.min = r.min + t.min), (e.max = e.min + Ae(t));
}
function Tp(e, t, r) {
  $i(e.x, t.x, r.x), $i(e.y, t.y, r.y);
}
function Ui(e, t, r) {
  (e.min = t.min - r.min), (e.max = e.min + Ae(t));
}
function nr(e, t, r) {
  Ui(e.x, t.x, r.x), Ui(e.y, t.y, r.y);
}
function Re(e) {
  return [e("x"), e("y")];
}
const bc = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  zi = (e, t) => Math.abs(e - t);
function Rp(e, t) {
  const r = zi(e.x, t.x),
    s = zi(e.y, t.y);
  return Math.sqrt(r ** 2 + s ** 2);
}
class vc {
  constructor(
    t,
    r,
    {
      transformPagePoint: s,
      contextWindow: n = window,
      dragSnapToOrigin: a = !1,
      distanceThreshold: i = 3,
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
        const h = mn(this.lastMoveEventInfo, this.history),
          x = this.startEvent !== null,
          m = Rp(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!x && !m) return;
        const { point: g } = h,
          { timestamp: p } = be;
        this.history.push(G(O({}, g), { timestamp: p }));
        const { onStart: w, onMove: b } = this.handlers;
        x ||
          (w && w(this.lastMoveEvent, h),
          (this.startEvent = this.lastMoveEvent)),
          b && b(this.lastMoveEvent, h);
      }),
      (this.handlePointerMove = (h, x) => {
        (this.lastMoveEvent = h),
          (this.lastMoveEventInfo = xn(x, this.transformPagePoint)),
          ae.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (h, x) => {
        this.end();
        const { onEnd: m, onSessionEnd: g, resumeAnimation: p } = this.handlers;
        if (
          (this.dragSnapToOrigin && p && p(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const w = mn(
          h.type === "pointercancel"
            ? this.lastMoveEventInfo
            : xn(x, this.transformPagePoint),
          this.history,
        );
        this.startEvent && m && m(h, w), g && g(h, w);
      }),
      !Oo(t))
    )
      return;
    (this.dragSnapToOrigin = a),
      (this.handlers = r),
      (this.transformPagePoint = s),
      (this.distanceThreshold = i),
      (this.contextWindow = n || window);
    const l = pr(t),
      d = xn(l, this.transformPagePoint),
      { point: c } = d,
      { timestamp: u } = be;
    this.history = [G(O({}, c), { timestamp: u })];
    const { onSessionStart: f } = r;
    f && f(t, mn(d, this.history)),
      (this.removeListeners = fr(
        rr(this.contextWindow, "pointermove", this.handlePointerMove),
        rr(this.contextWindow, "pointerup", this.handlePointerUp),
        rr(this.contextWindow, "pointercancel", this.handlePointerUp),
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), tt(this.updatePoint);
  }
}
function xn(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Hi(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function mn({ point: e }, t) {
  return {
    point: e,
    delta: Hi(e, yc(t)),
    offset: Hi(e, Pp(t)),
    velocity: Mp(t, 0.1),
  };
}
function Pp(e) {
  return e[0];
}
function yc(e) {
  return e[e.length - 1];
}
function Mp(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let r = e.length - 1,
    s = null;
  const n = yc(e);
  for (; r >= 0 && ((s = e[r]), !(n.timestamp - s.timestamp > He(t))); ) r--;
  if (!s) return { x: 0, y: 0 };
  const a = Me(n.timestamp - s.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  const i = { x: (n.x - s.x) / a, y: (n.y - s.y) / a };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function Lp(e, { min: t, max: r }, s) {
  return (
    t !== void 0 && e < t
      ? (e = s ? ie(t, e, s.min) : Math.max(e, t))
      : r !== void 0 && e > r && (e = s ? ie(r, e, s.max) : Math.min(e, r)),
    e
  );
}
function qi(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
  };
}
function Op(e, { top: t, left: r, bottom: s, right: n }) {
  return { x: qi(e.x, r, n), y: qi(e.y, t, s) };
}
function Wi(e, t) {
  let r = t.min - e.min,
    s = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, s] = [s, r]), { min: r, max: s };
}
function Ip(e, t) {
  return { x: Wi(e.x, t.x), y: Wi(e.y, t.y) };
}
function Vp(e, t) {
  let r = 0.5;
  const s = Ae(e),
    n = Ae(t);
  return (
    n > s
      ? (r = ar(t.min, t.max - s, e.min))
      : s > n && (r = ar(e.min, e.max - n, t.min)),
    Xe(0, 1, r)
  );
}
function $p(e, t) {
  const r = {};
  return (
    t.min !== void 0 && (r.min = t.min - e.min),
    t.max !== void 0 && (r.max = t.max - e.min),
    r
  );
}
const Qn = 0.35;
function Up(e = Qn) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Qn),
    { x: Ki(e, "left", "right"), y: Ki(e, "top", "bottom") }
  );
}
function Ki(e, t, r) {
  return { min: Yi(e, t), max: Yi(e, r) };
}
function Yi(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const zp = new WeakMap();
class Hp {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = de()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: r = !1, distanceThreshold: s } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1) return;
    const a = (f) => {
        const { dragSnapToOrigin: h } = this.getProps();
        h ? this.pauseAnimation() : this.stopAnimation(),
          r && this.snapToCursor(pr(f).point);
      },
      i = (f, h) => {
        const { drag: x, dragPropagation: m, onDragStart: g } = this.getProps();
        if (
          x &&
          !m &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = Xx(x)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = f),
          (this.latestPanInfo = h),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Re((w) => {
            let b = this.getAxisMotionValue(w).get() || 0;
            if (qe.test(b)) {
              const { projection: v } = this.visualElement;
              if (v && v.layout) {
                const y = v.layout.layoutBox[w];
                y && (b = Ae(y) * (parseFloat(b) / 100));
              }
            }
            this.originPoint[w] = b;
          }),
          g && ae.postRender(() => g(f, h)),
          Gn(this.visualElement, "transform");
        const { animationState: p } = this.visualElement;
        p && p.setActive("whileDrag", !0);
      },
      l = (f, h) => {
        (this.latestPointerEvent = f), (this.latestPanInfo = h);
        const {
          dragPropagation: x,
          dragDirectionLock: m,
          onDirectionLock: g,
          onDrag: p,
        } = this.getProps();
        if (!x && !this.openDragLock) return;
        const { offset: w } = h;
        if (m && this.currentDirection === null) {
          (this.currentDirection = qp(w)),
            this.currentDirection !== null && g && g(this.currentDirection);
          return;
        }
        this.updateAxis("x", h.point, w),
          this.updateAxis("y", h.point, w),
          this.visualElement.render(),
          p && p(f, h);
      },
      d = (f, h) => {
        (this.latestPointerEvent = f),
          (this.latestPanInfo = h),
          this.stop(f, h),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      c = () =>
        Re((f) => {
          var h;
          return (
            this.getAnimationState(f) === "paused" &&
            ((h = this.getAxisMotionValue(f).animation) == null
              ? void 0
              : h.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new vc(
      t,
      {
        onSessionStart: a,
        onStart: i,
        onMove: l,
        onSessionEnd: d,
        resumeAnimation: c,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        distanceThreshold: s,
        contextWindow: bc(this.visualElement),
      },
    );
  }
  stop(t, r) {
    const s = t || this.latestPointerEvent,
      n = r || this.latestPanInfo,
      a = this.isDragging;
    if ((this.cancel(), !a || !n || !s)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: l } = this.getProps();
    l && ae.postRender(() => l(s, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: s } = this.getProps();
    !s &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      r && r.setActive("whileDrag", !1);
  }
  updateAxis(t, r, s) {
    const { drag: n } = this.getProps();
    if (!s || !jr(t, n, this.currentDirection)) return;
    const a = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + s[t];
    this.constraints &&
      this.constraints[t] &&
      (i = Lp(i, this.constraints[t], this.elastic[t])),
      a.set(i);
  }
  resolveConstraints() {
    var a;
    const { dragConstraints: t, dragElastic: r } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (a = this.visualElement.projection) == null
            ? void 0
            : a.layout,
      n = this.constraints;
    t && Nt(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && s
        ? (this.constraints = Op(s.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = Up(r)),
      n !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Re((i) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(i) &&
            (this.constraints[i] = $p(s.layoutBox[i], this.constraints[i]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !Nt(t)) return !1;
    const s = t.current,
      { projection: n } = this.visualElement;
    if (!n || !n.layout) return !1;
    const a = Wm(s, n.root, this.visualElement.getTransformPagePoint());
    let i = Ip(n.layout.layoutBox, a);
    if (r) {
      const l = r(zm(i));
      (this.hasMutatedConstraints = !!l), l && (i = sc(l));
    }
    return i;
  }
  startAnimation(t) {
    const {
        drag: r,
        dragMomentum: s,
        dragElastic: n,
        dragTransition: a,
        dragSnapToOrigin: i,
        onDragTransitionEnd: l,
      } = this.getProps(),
      d = this.constraints || {},
      c = Re((u) => {
        if (!jr(u, r, this.currentDirection)) return;
        let f = (d && d[u]) || {};
        i && (f = { min: 0, max: 0 });
        const h = n ? 200 : 1e6,
          x = n ? 40 : 1e7,
          m = O(
            O(
              {
                type: "inertia",
                velocity: s ? t[u] : 0,
                bounceStiffness: h,
                bounceDamping: x,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
              },
              a,
            ),
            f,
          );
        return this.startAxisValueAnimation(u, m);
      });
    return Promise.all(c).then(l);
  }
  startAxisValueAnimation(t, r) {
    const s = this.getAxisMotionValue(t);
    return (
      Gn(this.visualElement, t), s.start(Yo(t, s, 0, r, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Re((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Re((t) => {
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
      s = this.visualElement.getProps(),
      n = s[r];
    return (
      n ||
      this.visualElement.getValue(t, (s.initial ? s.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Re((r) => {
      const { drag: s } = this.getProps();
      if (!jr(r, s, this.currentDirection)) return;
      const { projection: n } = this.visualElement,
        a = this.getAxisMotionValue(r);
      if (n && n.layout) {
        const { min: i, max: l } = n.layout.layoutBox[r];
        a.set(t[r] - ie(i, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: r } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!Nt(r) || !s || !this.constraints) return;
    this.stopAnimation();
    const n = { x: 0, y: 0 };
    Re((i) => {
      const l = this.getAxisMotionValue(i);
      if (l && this.constraints !== !1) {
        const d = l.get();
        n[i] = Vp({ min: d, max: d }, this.constraints[i]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = a ? a({}, "") : "none"),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      this.resolveConstraints(),
      Re((i) => {
        if (!jr(i, t, null)) return;
        const l = this.getAxisMotionValue(i),
          { min: d, max: c } = this.constraints[i];
        l.set(ie(d, c, n[i]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    zp.set(this.visualElement, this);
    const t = this.visualElement.current,
      r = rr(t, "pointerdown", (d) => {
        const { drag: c, dragListener: u = !0 } = this.getProps();
        c && u && this.start(d);
      }),
      s = () => {
        const { dragConstraints: d } = this.getProps();
        Nt(d) && d.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: n } = this.visualElement,
      a = n.addEventListener("measure", s);
    n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
      ae.read(s);
    const i = ur(window, "resize", () => this.scalePositionWithinConstraints()),
      l = n.addEventListener(
        "didUpdate",
        ({ delta: d, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (Re((u) => {
              const f = this.getAxisMotionValue(u);
              f &&
                ((this.originPoint[u] += d[u].translate),
                f.set(f.get() + d[u].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      i(), r(), a(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: r = !1,
        dragDirectionLock: s = !1,
        dragPropagation: n = !1,
        dragConstraints: a = !1,
        dragElastic: i = Qn,
        dragMomentum: l = !0,
      } = t;
    return G(O({}, t), {
      drag: r,
      dragDirectionLock: s,
      dragPropagation: n,
      dragConstraints: a,
      dragElastic: i,
      dragMomentum: l,
    });
  }
}
function jr(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function qp(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? (r = "y") : Math.abs(e.x) > t && (r = "x"), r;
}
class Wp extends nt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Le),
      (this.removeListeners = Le),
      (this.controls = new Hp(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Le);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Xi = (e) => (t, r) => {
  e && ae.postRender(() => e(t, r));
};
class Kp extends nt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Le);
  }
  onPointerDown(t) {
    this.session = new vc(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: bc(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: r,
      onPan: s,
      onPanEnd: n,
    } = this.node.getProps();
    return {
      onSessionStart: Xi(t),
      onStart: Xi(r),
      onMove: s,
      onEnd: (a, i) => {
        delete this.session, n && ae.postRender(() => n(a, i));
      },
    };
  }
  mount() {
    this.removePointerDownListener = rr(this.node.current, "pointerdown", (t) =>
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
const ys = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Gi(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Wt = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (X.test(e)) e = parseFloat(e);
        else return e;
      const r = Gi(e, t.target.x),
        s = Gi(e, t.target.y);
      return `${r}% ${s}%`;
    },
  },
  Yp = {
    correct: (e, { treeScale: t, projectionDelta: r }) => {
      const s = e,
        n = rt.parse(e);
      if (n.length > 5) return s;
      const a = rt.createTransformer(e),
        i = typeof n[0] != "number" ? 1 : 0,
        l = r.x.scale * t.x,
        d = r.y.scale * t.y;
      (n[0 + i] /= l), (n[1 + i] /= d);
      const c = ie(l, d, 0.5);
      return (
        typeof n[2 + i] == "number" && (n[2 + i] /= c),
        typeof n[3 + i] == "number" && (n[3 + i] /= c),
        a(n)
      );
    },
  };
let pn = !1;
class Xp extends _.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: s,
        layoutId: n,
      } = this.props,
      { projection: a } = t;
    gm(Gp),
      a &&
        (r.group && r.group.add(a),
        s && s.register && n && s.register(a),
        pn && a.root.didUpdate(),
        a.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        a.setOptions(
          G(O({}, a.options), { onExitComplete: () => this.safeToRemove() }),
        )),
      (ys.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: r,
        visualElement: s,
        drag: n,
        isPresent: a,
      } = this.props,
      { projection: i } = s;
    return (
      i &&
        ((i.isPresent = a),
        (pn = !0),
        n || t.layoutDependency !== r || r === void 0 || t.isPresent !== a
          ? i.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== a &&
          (a
            ? i.promote()
            : i.relegate() ||
              ae.postRender(() => {
                const l = i.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Lo.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: s,
      } = this.props,
      { projection: n } = t;
    (pn = !0),
      n &&
        (n.scheduleCheckAfterUnmount(),
        r && r.group && r.group.remove(n),
        s && s.deregister && s.deregister(n));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function wc(e) {
  const [t, r] = zl(),
    s = _.useContext(mo);
  return o.jsx(
    Xp,
    G(O({}, e), {
      layoutGroup: s,
      switchLayoutGroup: _.useContext(tc),
      isPresent: t,
      safeToRemove: r,
    }),
  );
}
const Gp = {
  borderRadius: G(O({}, Wt), {
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  }),
  borderTopLeftRadius: Wt,
  borderTopRightRadius: Wt,
  borderBottomLeftRadius: Wt,
  borderBottomRightRadius: Wt,
  boxShadow: Yp,
};
function Zp(e, t, r) {
  const s = Ce(e) ? e : _t(e);
  return s.start(Yo("", s, t, r)), s.animation;
}
const Qp = (e, t) => e.depth - t.depth;
class Jp {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    bo(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    vo(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(Qp),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function eg(e, t) {
  const r = Ne.now(),
    s = ({ timestamp: n }) => {
      const a = n - r;
      a >= t && (tt(s), e(a - t));
    };
  return ae.setup(s, !0), () => tt(s);
}
const Cc = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  tg = Cc.length,
  Zi = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Qi = (e) => typeof e == "number" || X.test(e);
function rg(e, t, r, s, n, a) {
  var i, l, d, c;
  n
    ? ((e.opacity = ie(0, (i = r.opacity) != null ? i : 1, sg(s))),
      (e.opacityExit = ie((l = t.opacity) != null ? l : 1, 0, ng(s))))
    : a &&
      (e.opacity = ie(
        (d = t.opacity) != null ? d : 1,
        (c = r.opacity) != null ? c : 1,
        s,
      ));
  for (let u = 0; u < tg; u++) {
    const f = `border${Cc[u]}Radius`;
    let h = Ji(t, f),
      x = Ji(r, f);
    if (h === void 0 && x === void 0) continue;
    h || (h = 0),
      x || (x = 0),
      h === 0 || x === 0 || Qi(h) === Qi(x)
        ? ((e[f] = Math.max(ie(Zi(h), Zi(x), s), 0)),
          (qe.test(x) || qe.test(h)) && (e[f] += "%"))
        : (e[f] = x);
  }
  (t.rotate || r.rotate) && (e.rotate = ie(t.rotate || 0, r.rotate || 0, s));
}
function Ji(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const sg = Ac(0, 0.5, cl),
  ng = Ac(0.5, 0.95, Le);
function Ac(e, t, r) {
  return (s) => (s < e ? 0 : s > t ? 1 : r(ar(e, t, s)));
}
function e0(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Fe(e, t) {
  e0(e.x, t.x), e0(e.y, t.y);
}
function t0(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function r0(e, t, r, s, n) {
  return (
    (e -= t), (e = Rs(e, 1 / r, s)), n !== void 0 && (e = Rs(e, 1 / n, s)), e
  );
}
function og(e, t = 0, r = 1, s = 0.5, n, a = e, i = e) {
  if (
    (qe.test(t) &&
      ((t = parseFloat(t)), (t = ie(i.min, i.max, t / 100) - i.min)),
    typeof t != "number")
  )
    return;
  let l = ie(a.min, a.max, s);
  e === a && (l -= t),
    (e.min = r0(e.min, t, r, l, n)),
    (e.max = r0(e.max, t, r, l, n));
}
function s0(e, t, [r, s, n], a, i) {
  og(e, t[r], t[s], t[n], t.scale, a, i);
}
const ag = ["x", "scaleX", "originX"],
  ig = ["y", "scaleY", "originY"];
function n0(e, t, r, s) {
  s0(e.x, t, ag, r ? r.x : void 0, s ? s.x : void 0),
    s0(e.y, t, ig, r ? r.y : void 0, s ? s.y : void 0);
}
function o0(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ec(e) {
  return o0(e.x) && o0(e.y);
}
function a0(e, t) {
  return e.min === t.min && e.max === t.max;
}
function lg(e, t) {
  return a0(e.x, t.x) && a0(e.y, t.y);
}
function i0(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Nc(e, t) {
  return i0(e.x, t.x) && i0(e.y, t.y);
}
function l0(e) {
  return Ae(e.x) / Ae(e.y);
}
function c0(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class cg {
  constructor() {
    this.members = [];
  }
  add(t) {
    bo(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (vo(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((n) => t === n);
    if (r === 0) return !1;
    let s;
    for (let n = r; n >= 0; n--) {
      const a = this.members[n];
      if (a.isPresent !== !1) {
        s = a;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(t, r) {
    const s = this.lead;
    if (t !== s && ((this.prevLead = s), (this.lead = t), t.show(), s)) {
      s.instance && s.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = s),
        r && (t.resumeFrom.preserveOpacity = !0),
        s.snapshot &&
          ((t.snapshot = s.snapshot),
          (t.snapshot.latestValues = s.animationValues || s.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: n } = t.options;
      n === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: s } = t;
      r.onExitComplete && r.onExitComplete(),
        s && s.options.onExitComplete && s.options.onExitComplete();
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
function dg(e, t, r) {
  let s = "";
  const n = e.x.translate / t.x,
    a = e.y.translate / t.y,
    i = (r == null ? void 0 : r.z) || 0;
  if (
    ((n || a || i) && (s = `translate3d(${n}px, ${a}px, ${i}px) `),
    (t.x !== 1 || t.y !== 1) && (s += `scale(${1 / t.x}, ${1 / t.y}) `),
    r)
  ) {
    const {
      transformPerspective: c,
      rotate: u,
      rotateX: f,
      rotateY: h,
      skewX: x,
      skewY: m,
    } = r;
    c && (s = `perspective(${c}px) ${s}`),
      u && (s += `rotate(${u}deg) `),
      f && (s += `rotateX(${f}deg) `),
      h && (s += `rotateY(${h}deg) `),
      x && (s += `skewX(${x}deg) `),
      m && (s += `skewY(${m}deg) `);
  }
  const l = e.x.scale * t.x,
    d = e.y.scale * t.y;
  return (l !== 1 || d !== 1) && (s += `scale(${l}, ${d})`), s || "none";
}
const gn = ["", "X", "Y", "Z"],
  ug = 1e3;
let hg = 0;
function bn(e, t, r, s) {
  const { latestValues: n } = t;
  n[e] && ((r[e] = n[e]), t.setStaticValue(e, 0), s && (s[e] = 0));
}
function kc(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const r = uc(t);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: n, layoutId: a } = e.options;
    window.MotionCancelOptimisedAnimation(r, "transform", ae, !(n || a));
  }
  const { parent: s } = e;
  s && !s.hasCheckedOptimisedAppear && kc(s);
}
function jc({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: r,
  checkIsScrollRoot: s,
  resetTransform: n,
}) {
  return class {
    constructor(i = {}, l = t == null ? void 0 : t()) {
      (this.id = hg++),
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
            this.nodes.forEach(mg),
            this.nodes.forEach(vg),
            this.nodes.forEach(yg),
            this.nodes.forEach(pg);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = i),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let d = 0; d < this.path.length; d++)
        this.path[d].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Jp());
    }
    addEventListener(i, l) {
      return (
        this.eventHandlers.has(i) || this.eventHandlers.set(i, new Co()),
        this.eventHandlers.get(i).add(l)
      );
    }
    notifyListeners(i, ...l) {
      const d = this.eventHandlers.get(i);
      d && d.notify(...l);
    }
    hasListeners(i) {
      return this.eventHandlers.has(i);
    }
    mount(i) {
      if (this.instance) return;
      (this.isSVG = Ul(i) && !tm(i)), (this.instance = i);
      const { layoutId: l, layout: d, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(i),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (d || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let u,
          f = 0;
        const h = () => (this.root.updateBlockedByResize = !1);
        ae.read(() => {
          f = window.innerWidth;
        }),
          e(i, () => {
            const x = window.innerWidth;
            x !== f &&
              ((f = x),
              (this.root.updateBlockedByResize = !0),
              u && u(),
              (u = eg(h, 250)),
              ys.hasAnimatedSinceResize &&
                ((ys.hasAnimatedSinceResize = !1), this.nodes.forEach(h0)));
          });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || d) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: u,
              hasLayoutChanged: f,
              hasRelativeLayoutChanged: h,
              layout: x,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const m =
                  this.options.transition || c.getDefaultTransition() || Ng,
                { onLayoutAnimationStart: g, onLayoutAnimationComplete: p } =
                  c.getProps(),
                w = !this.targetLayout || !Nc(this.targetLayout, x),
                b = !f && h;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                b ||
                (f && (w || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const v = G(O({}, Po(m, "layout")), {
                  onPlay: g,
                  onComplete: p,
                });
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((v.delay = 0), (v.type = !1)),
                  this.startAnimation(v),
                  this.setAnimationOrigin(u, b);
              } else
                f || h0(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = x;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        tt(this.updateProjection);
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
        this.nodes && this.nodes.forEach(wg),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: i } = this.options;
      return i && i.getProps().transformTemplate;
    }
    willUpdate(i = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          kc(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const f = this.path[u];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: d } = this.options;
      if (l === void 0 && !d) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        i && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(d0);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(u0);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(bg),
            this.nodes.forEach(fg),
            this.nodes.forEach(xg))
          : this.nodes.forEach(u0),
        this.clearAllSnapshots();
      const l = Ne.now();
      (be.delta = Xe(0, 1e3 / 60, l - be.timestamp)),
        (be.timestamp = l),
        (be.isProcessing = !0),
        on.update.process(be),
        on.preRender.process(be),
        on.render.process(be),
        (be.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Lo.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(gg), this.sharedNodes.forEach(Cg);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ae.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ae.postRender(() => {
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
          !Ae(this.snapshot.measuredBox.x) &&
          !Ae(this.snapshot.measuredBox.y) &&
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
        for (let d = 0; d < this.path.length; d++) this.path[d].updateScroll();
      const i = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = de()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          i ? i.layoutBox : void 0,
        );
    }
    updateScroll(i = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === i &&
          (l = !1),
        l && this.instance)
      ) {
        const d = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: i,
          isRoot: d,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : d,
        };
      }
    }
    resetTransform() {
      if (!n) return;
      const i =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        l = this.projectionDelta && !Ec(this.projectionDelta),
        d = this.getTransformTemplate(),
        c = d ? d(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      i &&
        this.instance &&
        (l || it(this.latestValues) || u) &&
        (n(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(i = !0) {
      const l = this.measurePageBox();
      let d = this.removeElementScroll(l);
      return (
        i && (d = this.removeTransform(d)),
        kg(d),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: d,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var c;
      const { visualElement: i } = this.options;
      if (!i) return de();
      const l = i.measureViewportBox();
      if (
        !(
          ((c = this.scroll) == null ? void 0 : c.wasRoot) || this.path.some(jg)
        )
      ) {
        const { scroll: u } = this.root;
        u && (kt(l.x, u.offset.x), kt(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(i) {
      var d;
      const l = de();
      if ((Fe(l, i), (d = this.scroll) != null && d.wasRoot)) return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c],
          { scroll: f, options: h } = u;
        u !== this.root &&
          f &&
          h.layoutScroll &&
          (f.wasRoot && Fe(l, i), kt(l.x, f.offset.x), kt(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(i, l = !1) {
      const d = de();
      Fe(d, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !l &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          jt(d, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          it(u.latestValues) && jt(d, u.latestValues);
      }
      return it(this.latestValues) && jt(d, this.latestValues), d;
    }
    removeTransform(i) {
      const l = de();
      Fe(l, i);
      for (let d = 0; d < this.path.length; d++) {
        const c = this.path[d];
        if (!c.instance || !it(c.latestValues)) continue;
        Wn(c.latestValues) && c.updateSnapshot();
        const u = de(),
          f = c.measurePageBox();
        Fe(u, f),
          n0(l, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return it(this.latestValues) && n0(l, this.latestValues), l;
    }
    setTargetDelta(i) {
      (this.targetDelta = i),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(i) {
      this.options = G(O(O({}, this.options), i), {
        crossfade: i.crossfade !== void 0 ? i.crossfade : !0,
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
        this.relativeParent.resolvedRelativeTargetAt !== be.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(i = !1) {
      var h;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const d = !!this.resumingFrom || this !== l;
      if (
        !(
          i ||
          (d && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((h = this.parent) != null && h.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: u, layoutId: f } = this.options;
      if (!(!this.layout || !(u || f))) {
        if (
          ((this.resolvedRelativeTargetAt = be.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const x = this.getClosestProjectingParent();
          x && x.layout && this.animationProgress !== 1
            ? ((this.relativeParent = x),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = de()),
              (this.relativeTargetOrigin = de()),
              nr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                x.layout.layoutBox,
              ),
              Fe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = de()), (this.targetWithTransforms = de())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Tp(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Fe(this.target, this.layout.layoutBox),
                oc(this.target, this.targetDelta))
              : Fe(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const x = this.getClosestProjectingParent();
          x &&
          !!x.resumingFrom == !!this.resumingFrom &&
          !x.options.layoutScroll &&
          x.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = x),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = de()),
              (this.relativeTargetOrigin = de()),
              nr(this.relativeTargetOrigin, this.target, x.target),
              Fe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Wn(this.parent.latestValues) ||
          nc(this.parent.latestValues)
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
      var m;
      const i = this.getLead(),
        l = !!this.resumingFrom || this !== i;
      let d = !0;
      if (
        ((this.isProjectionDirty ||
          ((m = this.parent) != null && m.isProjectionDirty)) &&
          (d = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (d = !1),
        this.resolvedRelativeTargetAt === be.timestamp && (d = !1),
        d)
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
      Fe(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        h = this.treeScale.y;
      qm(this.layoutCorrected, this.treeScale, this.path, l),
        i.layout &&
          !i.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((i.target = i.layout.layoutBox), (i.targetWithTransforms = de()));
      const { target: x } = i;
      if (!x) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (t0(this.prevProjectionDelta.x, this.projectionDelta.x),
          t0(this.prevProjectionDelta.y, this.projectionDelta.y)),
        sr(this.projectionDelta, this.layoutCorrected, x, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== h ||
          !c0(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !c0(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", x));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(i = !0) {
      var l;
      if (((l = this.options.visualElement) == null || l.scheduleRender(), i)) {
        const d = this.getStack();
        d && d.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Dt()),
        (this.projectionDelta = Dt()),
        (this.projectionDeltaWithTransform = Dt());
    }
    setAnimationOrigin(i, l = !1) {
      const d = this.snapshot,
        c = d ? d.latestValues : {},
        u = O({}, this.latestValues),
        f = Dt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const h = de(),
        x = d ? d.source : void 0,
        m = this.layout ? this.layout.source : void 0,
        g = x !== m,
        p = this.getStack(),
        w = !p || p.members.length <= 1,
        b = !!(g && !w && this.options.crossfade === !0 && !this.path.some(Eg));
      this.animationProgress = 0;
      let v;
      (this.mixTargetDelta = (y) => {
        const C = y / 1e3;
        f0(f.x, i.x, C),
          f0(f.y, i.y, C),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (nr(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Ag(this.relativeTarget, this.relativeTargetOrigin, h, C),
            v && lg(this.relativeTarget, v) && (this.isProjectionDirty = !1),
            v || (v = de()),
            Fe(v, this.relativeTarget)),
          g &&
            ((this.animationValues = u), rg(u, c, this.latestValues, C, b, w)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      var l, d, c;
      this.notifyListeners("animationStart"),
        (l = this.currentAnimation) == null || l.stop(),
        (c = (d = this.resumingFrom) == null ? void 0 : d.currentAnimation) ==
          null || c.stop(),
        this.pendingAnimation &&
          (tt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ae.update(() => {
          (ys.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = _t(0)),
            (this.currentAnimation = Zp(
              this.motionValue,
              [0, 1e3],
              G(O({}, i), {
                velocity: 0,
                isSync: !0,
                onUpdate: (u) => {
                  this.mixTargetDelta(u), i.onUpdate && i.onUpdate(u);
                },
                onStop: () => {},
                onComplete: () => {
                  i.onComplete && i.onComplete(), this.completeAnimation();
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
      const i = this.getStack();
      i && i.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(ug),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let {
        targetWithTransforms: l,
        target: d,
        layout: c,
        latestValues: u,
      } = i;
      if (!(!l || !d || !c)) {
        if (
          this !== i &&
          this.layout &&
          c &&
          Dc(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          d = this.target || de();
          const f = Ae(this.layout.layoutBox.x);
          (d.x.min = i.target.x.min), (d.x.max = d.x.min + f);
          const h = Ae(this.layout.layoutBox.y);
          (d.y.min = i.target.y.min), (d.y.max = d.y.min + h);
        }
        Fe(l, d),
          jt(l, u),
          sr(this.projectionDeltaWithTransform, this.layoutCorrected, l, u);
      }
    }
    registerSharedNode(i, l) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new cg()),
        this.sharedNodes.get(i).add(l);
      const c = l.options.initialPromotionConfig;
      l.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const i = this.getStack();
      return i ? i.lead === this : !0;
    }
    getLead() {
      var l;
      const { layoutId: i } = this.options;
      return i
        ? ((l = this.getStack()) == null ? void 0 : l.lead) || this
        : this;
    }
    getPrevLead() {
      var l;
      const { layoutId: i } = this.options;
      return i ? ((l = this.getStack()) == null ? void 0 : l.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: i } = this.options;
      if (i) return this.root.sharedNodes.get(i);
    }
    promote({ needsReset: i, transition: l, preserveFollowOpacity: d } = {}) {
      const c = this.getStack();
      c && c.promote(this, d),
        i && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const i = this.getStack();
      return i ? i.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: i } = this.options;
      if (!i) return;
      let l = !1;
      const { latestValues: d } = i;
      if (
        ((d.z ||
          d.rotate ||
          d.rotateX ||
          d.rotateY ||
          d.rotateZ ||
          d.skewX ||
          d.skewY) &&
          (l = !0),
        !l)
      )
        return;
      const c = {};
      d.z && bn("z", i, c, this.animationValues);
      for (let u = 0; u < gn.length; u++)
        bn(`rotate${gn[u]}`, i, c, this.animationValues),
          bn(`skew${gn[u]}`, i, c, this.animationValues);
      i.render();
      for (const u in c)
        i.setStaticValue(u, c[u]),
          this.animationValues && (this.animationValues[u] = c[u]);
      i.scheduleRender();
    }
    applyProjectionStyles(i, l) {
      var m, g;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        i.visibility = "hidden";
        return;
      }
      const d = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (i.visibility = ""),
          (i.opacity = ""),
          (i.pointerEvents = vs(l == null ? void 0 : l.pointerEvents) || ""),
          (i.transform = d ? d(this.latestValues, "") : "none");
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        this.options.layoutId &&
          ((i.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (i.pointerEvents = vs(l == null ? void 0 : l.pointerEvents) || "")),
          this.hasProjected &&
            !it(this.latestValues) &&
            ((i.transform = d ? d({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      i.visibility = "";
      const u = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let f = dg(this.projectionDeltaWithTransform, this.treeScale, u);
      d && (f = d(u, f)), (i.transform = f);
      const { x: h, y: x } = this.projectionDelta;
      (i.transformOrigin = `${h.origin * 100}% ${x.origin * 100}% 0`),
        c.animationValues
          ? (i.opacity =
              c === this
                ? (g =
                    (m = u.opacity) != null ? m : this.latestValues.opacity) !=
                  null
                  ? g
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : u.opacityExit)
          : (i.opacity =
              c === this
                ? u.opacity !== void 0
                  ? u.opacity
                  : ""
                : u.opacityExit !== void 0
                  ? u.opacityExit
                  : 0);
      for (const p in dr) {
        if (u[p] === void 0) continue;
        const { correct: w, applyTo: b, isCSSVariable: v } = dr[p],
          y = f === "none" ? u[p] : w(u[p], c);
        if (b) {
          const C = b.length;
          for (let E = 0; E < C; E++) i[b[E]] = y;
        } else
          v ? (this.options.visualElement.renderState.vars[p] = y) : (i[p] = y);
      }
      this.options.layoutId &&
        (i.pointerEvents =
          c === this ? vs(l == null ? void 0 : l.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((i) => {
        var l;
        return (l = i.currentAnimation) == null ? void 0 : l.stop();
      }),
        this.root.nodes.forEach(d0),
        this.root.sharedNodes.clear();
    }
  };
}
function fg(e) {
  e.updateLayout();
}
function xg(e) {
  var r;
  const t = ((r = e.resumeFrom) == null ? void 0 : r.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: n } = e.layout,
      { animationType: a } = e.options,
      i = t.source !== e.layout.source;
    a === "size"
      ? Re((f) => {
          const h = i ? t.measuredBox[f] : t.layoutBox[f],
            x = Ae(h);
          (h.min = s[f].min), (h.max = h.min + x);
        })
      : Dc(a, t.layoutBox, s) &&
        Re((f) => {
          const h = i ? t.measuredBox[f] : t.layoutBox[f],
            x = Ae(s[f]);
          (h.max = h.min + x),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + x));
        });
    const l = Dt();
    sr(l, s, t.layoutBox);
    const d = Dt();
    i ? sr(d, e.applyTransform(n, !0), t.measuredBox) : sr(d, s, t.layoutBox);
    const c = !Ec(l);
    let u = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: x } = f;
        if (h && x) {
          const m = de();
          nr(m, t.layoutBox, h.layoutBox);
          const g = de();
          nr(g, s, x.layoutBox),
            Nc(m, g) || (u = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = m),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: s,
      snapshot: t,
      delta: d,
      layoutDelta: l,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: u,
    });
  } else if (e.isLead()) {
    const { onExitComplete: s } = e.options;
    s && s();
  }
  e.options.transition = void 0;
}
function mg(e) {
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
function pg(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function gg(e) {
  e.clearSnapshot();
}
function d0(e) {
  e.clearMeasurements();
}
function u0(e) {
  e.isLayoutDirty = !1;
}
function bg(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function h0(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function vg(e) {
  e.resolveTargetDelta();
}
function yg(e) {
  e.calcProjection();
}
function wg(e) {
  e.resetSkewAndRotation();
}
function Cg(e) {
  e.removeLeadSnapshot();
}
function f0(e, t, r) {
  (e.translate = ie(t.translate, 0, r)),
    (e.scale = ie(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function x0(e, t, r, s) {
  (e.min = ie(t.min, r.min, s)), (e.max = ie(t.max, r.max, s));
}
function Ag(e, t, r, s) {
  x0(e.x, t.x, r.x, s), x0(e.y, t.y, r.y, s);
}
function Eg(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Ng = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  m0 = (e) =>
    typeof navigator != "undefined" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  p0 = m0("applewebkit/") && !m0("chrome/") ? Math.round : Le;
function g0(e) {
  (e.min = p0(e.min)), (e.max = p0(e.max));
}
function kg(e) {
  g0(e.x), g0(e.y);
}
function Dc(e, t, r) {
  return (
    e === "position" || (e === "preserve-aspect" && !Fp(l0(t), l0(r), 0.2))
  );
}
function jg(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const Dg = jc({
    attachResizeListener: (e, t) => ur(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  vn = { current: void 0 },
  Bc = jc({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!vn.current) {
        const e = new Dg({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (vn.current = e);
      }
      return vn.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Bg = {
    pan: { Feature: Kp },
    drag: { Feature: Wp, ProjectionNode: Bc, MeasureLayout: wc },
  };
function b0(e, t, r) {
  const { props: s } = e;
  e.animationState &&
    s.whileHover &&
    e.animationState.setActive("whileHover", r === "Start");
  const n = "onHover" + r,
    a = s[n];
  a && ae.postRender(() => a(t, pr(t)));
}
class Sg extends nt {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = Gx(
        t,
        (r, s) => (b0(this.node, s, "Start"), (n) => b0(this.node, n, "End")),
      ));
  }
  unmount() {}
}
class _g extends nt {
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
    this.unmount = fr(
      ur(this.node.current, "focus", () => this.onFocus()),
      ur(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function v0(e, t, r) {
  const { props: s } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    s.whileTap &&
    e.animationState.setActive("whileTap", r === "Start");
  const n = "onTap" + (r === "End" ? "" : r),
    a = s[n];
  a && ae.postRender(() => a(t, pr(t)));
}
class Fg extends nt {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = em(
        t,
        (r, s) => (
          v0(this.node, s, "Start"),
          (n, { success: a }) => v0(this.node, n, a ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const Jn = new WeakMap(),
  yn = new WeakMap(),
  Tg = (e) => {
    const t = Jn.get(e.target);
    t && t(e);
  },
  Rg = (e) => {
    e.forEach(Tg);
  };
function Pg(r) {
  var s = r,
    { root: e } = s,
    t = _e(s, ["root"]);
  const n = e || document;
  yn.has(n) || yn.set(n, {});
  const a = yn.get(n),
    i = JSON.stringify(t);
  return a[i] || (a[i] = new IntersectionObserver(Rg, O({ root: e }, t))), a[i];
}
function Mg(e, t, r) {
  const s = Pg(t);
  return (
    Jn.set(e, r),
    s.observe(e),
    () => {
      Jn.delete(e), s.unobserve(e);
    }
  );
}
const Lg = { some: 0, all: 1 };
class Og extends nt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: r, margin: s, amount: n = "some", once: a } = t,
      i = {
        root: r ? r.current : void 0,
        rootMargin: s,
        threshold: typeof n == "number" ? n : Lg[n],
      },
      l = (d) => {
        const { isIntersecting: c } = d;
        if (
          this.isInView === c ||
          ((this.isInView = c), a && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: u, onViewportLeave: f } = this.node.getProps(),
          h = c ? u : f;
        h && h(d);
      };
    return Mg(this.node.current, i, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver == "undefined") return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(Ig(t, r)) && this.startObserver();
  }
  unmount() {}
}
function Ig({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const Vg = {
    inView: { Feature: Og },
    tap: { Feature: Fg },
    focus: { Feature: _g },
    hover: { Feature: Sg },
  },
  $g = { layout: { ProjectionNode: Bc, MeasureLayout: wc } },
  Ug = O(O(O(O({}, kp), Vg), Bg), $g),
  oe = Um(Ug, tp);
function Sc(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: zg } = Object.prototype,
  { getPrototypeOf: Xo } = Object,
  { iterator: zs, toStringTag: _c } = Symbol,
  Hs = ((e) => (t) => {
    const r = zg.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  $e = (e) => ((e = e.toLowerCase()), (t) => Hs(t) === e),
  qs = (e) => (t) => typeof t === e,
  { isArray: Lt } = Array,
  Tt = qs("undefined");
function gr(e) {
  return (
    e !== null &&
    !Tt(e) &&
    e.constructor !== null &&
    !Tt(e.constructor) &&
    ke(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Fc = $e("ArrayBuffer");
function Hg(e) {
  let t;
  return (
    typeof ArrayBuffer != "undefined" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Fc(e.buffer)),
    t
  );
}
const qg = qs("string"),
  ke = qs("function"),
  Tc = qs("number"),
  br = (e) => e !== null && typeof e == "object",
  Wg = (e) => e === !0 || e === !1,
  ws = (e) => {
    if (Hs(e) !== "object") return !1;
    const t = Xo(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(_c in e) &&
      !(zs in e)
    );
  },
  Kg = (e) => {
    if (!br(e) || gr(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch (t) {
      return !1;
    }
  },
  Yg = $e("Date"),
  Xg = $e("File"),
  Gg = $e("Blob"),
  Zg = $e("FileList"),
  Qg = (e) => br(e) && ke(e.pipe),
  Jg = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (ke(e.append) &&
          ((t = Hs(e)) === "formdata" ||
            (t === "object" &&
              ke(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  e1 = $e("URLSearchParams"),
  [t1, r1, s1, n1] = ["ReadableStream", "Request", "Response", "Headers"].map(
    $e,
  ),
  o1 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function vr(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e == "undefined") return;
  let s, n;
  if ((typeof e != "object" && (e = [e]), Lt(e)))
    for (s = 0, n = e.length; s < n; s++) t.call(null, e[s], s, e);
  else {
    if (gr(e)) return;
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = a.length;
    let l;
    for (s = 0; s < i; s++) (l = a[s]), t.call(null, e[l], l, e);
  }
}
function Rc(e, t) {
  if (gr(e)) return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let s = r.length,
    n;
  for (; s-- > 0; ) if (((n = r[s]), t === n.toLowerCase())) return n;
  return null;
}
const dt =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
        ? self
        : typeof window != "undefined"
          ? window
          : global,
  Pc = (e) => !Tt(e) && e !== dt;
function eo() {
  const { caseless: e, skipUndefined: t } = (Pc(this) && this) || {},
    r = {},
    s = (n, a) => {
      const i = (e && Rc(r, a)) || a;
      ws(r[i]) && ws(n)
        ? (r[i] = eo(r[i], n))
        : ws(n)
          ? (r[i] = eo({}, n))
          : Lt(n)
            ? (r[i] = n.slice())
            : (!t || !Tt(n)) && (r[i] = n);
    };
  for (let n = 0, a = arguments.length; n < a; n++)
    arguments[n] && vr(arguments[n], s);
  return r;
}
const a1 = (e, t, r, { allOwnKeys: s } = {}) => (
    vr(
      t,
      (n, a) => {
        r && ke(n) ? (e[a] = Sc(n, r)) : (e[a] = n);
      },
      { allOwnKeys: s },
    ),
    e
  ),
  i1 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  l1 = (e, t, r, s) => {
    (e.prototype = Object.create(t.prototype, s)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      r && Object.assign(e.prototype, r);
  },
  c1 = (e, t, r, s) => {
    let n, a, i;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (n = Object.getOwnPropertyNames(e), a = n.length; a-- > 0; )
        (i = n[a]), (!s || s(i, e, t)) && !l[i] && ((t[i] = e[i]), (l[i] = !0));
      e = r !== !1 && Xo(e);
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t;
  },
  d1 = (e, t, r) => {
    (e = String(e)),
      (r === void 0 || r > e.length) && (r = e.length),
      (r -= t.length);
    const s = e.indexOf(t, r);
    return s !== -1 && s === r;
  },
  u1 = (e) => {
    if (!e) return null;
    if (Lt(e)) return e;
    let t = e.length;
    if (!Tc(t)) return null;
    const r = new Array(t);
    for (; t-- > 0; ) r[t] = e[t];
    return r;
  },
  h1 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array != "undefined" && Xo(Uint8Array)),
  f1 = (e, t) => {
    const s = (e && e[zs]).call(e);
    let n;
    for (; (n = s.next()) && !n.done; ) {
      const a = n.value;
      t.call(e, a[0], a[1]);
    }
  },
  x1 = (e, t) => {
    let r;
    const s = [];
    for (; (r = e.exec(t)) !== null; ) s.push(r);
    return s;
  },
  m1 = $e("HTMLFormElement"),
  p1 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, s, n) {
      return s.toUpperCase() + n;
    }),
  y0 = (
    ({ hasOwnProperty: e }) =>
    (t, r) =>
      e.call(t, r)
  )(Object.prototype),
  g1 = $e("RegExp"),
  Mc = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e),
      s = {};
    vr(r, (n, a) => {
      let i;
      (i = t(n, a, e)) !== !1 && (s[a] = i || n);
    }),
      Object.defineProperties(e, s);
  },
  b1 = (e) => {
    Mc(e, (t, r) => {
      if (ke(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
        return !1;
      const s = e[r];
      if (ke(s)) {
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
  v1 = (e, t) => {
    const r = {},
      s = (n) => {
        n.forEach((a) => {
          r[a] = !0;
        });
      };
    return Lt(e) ? s(e) : s(String(e).split(t)), r;
  },
  y1 = () => {},
  w1 = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function C1(e) {
  return !!(e && ke(e.append) && e[_c] === "FormData" && e[zs]);
}
const A1 = (e) => {
    const t = new Array(10),
      r = (s, n) => {
        if (br(s)) {
          if (t.indexOf(s) >= 0) return;
          if (gr(s)) return s;
          if (!("toJSON" in s)) {
            t[n] = s;
            const a = Lt(s) ? [] : {};
            return (
              vr(s, (i, l) => {
                const d = r(i, n + 1);
                !Tt(d) && (a[l] = d);
              }),
              (t[n] = void 0),
              a
            );
          }
        }
        return s;
      };
    return r(e, 0);
  },
  E1 = $e("AsyncFunction"),
  N1 = (e) => e && (br(e) || ke(e)) && ke(e.then) && ke(e.catch),
  Lc = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((r, s) => (
            dt.addEventListener(
              "message",
              ({ source: n, data: a }) => {
                n === dt && a === r && s.length && s.shift()();
              },
              !1,
            ),
            (n) => {
              s.push(n), dt.postMessage(r, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (r) => setTimeout(r))(
    typeof setImmediate == "function",
    ke(dt.postMessage),
  ),
  k1 =
    typeof queueMicrotask != "undefined"
      ? queueMicrotask.bind(dt)
      : (typeof process != "undefined" && process.nextTick) || Lc,
  j1 = (e) => e != null && ke(e[zs]),
  F = {
    isArray: Lt,
    isArrayBuffer: Fc,
    isBuffer: gr,
    isFormData: Jg,
    isArrayBufferView: Hg,
    isString: qg,
    isNumber: Tc,
    isBoolean: Wg,
    isObject: br,
    isPlainObject: ws,
    isEmptyObject: Kg,
    isReadableStream: t1,
    isRequest: r1,
    isResponse: s1,
    isHeaders: n1,
    isUndefined: Tt,
    isDate: Yg,
    isFile: Xg,
    isBlob: Gg,
    isRegExp: g1,
    isFunction: ke,
    isStream: Qg,
    isURLSearchParams: e1,
    isTypedArray: h1,
    isFileList: Zg,
    forEach: vr,
    merge: eo,
    extend: a1,
    trim: o1,
    stripBOM: i1,
    inherits: l1,
    toFlatObject: c1,
    kindOf: Hs,
    kindOfTest: $e,
    endsWith: d1,
    toArray: u1,
    forEachEntry: f1,
    matchAll: x1,
    isHTMLForm: m1,
    hasOwnProperty: y0,
    hasOwnProp: y0,
    reduceDescriptors: Mc,
    freezeMethods: b1,
    toObjectSet: v1,
    toCamelCase: p1,
    noop: y1,
    toFiniteNumber: w1,
    findKey: Rc,
    global: dt,
    isContextDefined: Pc,
    isSpecCompliantForm: C1,
    toJSONObject: A1,
    isAsyncFn: E1,
    isThenable: N1,
    setImmediate: Lc,
    asap: k1,
    isIterable: j1,
  };
function Q(e, t, r, s, n) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    r && (this.config = r),
    s && (this.request = s),
    n && ((this.response = n), (this.status = n.status ? n.status : null));
}
F.inherits(Q, Error, {
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
      config: F.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Oc = Q.prototype,
  Ic = {};
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
  Ic[e] = { value: e };
});
Object.defineProperties(Q, Ic);
Object.defineProperty(Oc, "isAxiosError", { value: !0 });
Q.from = (e, t, r, s, n, a) => {
  const i = Object.create(Oc);
  F.toFlatObject(
    e,
    i,
    function (u) {
      return u !== Error.prototype;
    },
    (c) => c !== "isAxiosError",
  );
  const l = e && e.message ? e.message : "Error",
    d = t == null && e ? e.code : t;
  return (
    Q.call(i, l, d, r, s, n),
    e &&
      i.cause == null &&
      Object.defineProperty(i, "cause", { value: e, configurable: !0 }),
    (i.name = (e && e.name) || "Error"),
    a && Object.assign(i, a),
    i
  );
};
const D1 = null;
function to(e) {
  return F.isPlainObject(e) || F.isArray(e);
}
function Vc(e) {
  return F.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function w0(e, t, r) {
  return e
    ? e
        .concat(t)
        .map(function (n, a) {
          return (n = Vc(n)), !r && a ? "[" + n + "]" : n;
        })
        .join(r ? "." : "")
    : t;
}
function B1(e) {
  return F.isArray(e) && !e.some(to);
}
const S1 = F.toFlatObject(F, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ws(e, t, r) {
  if (!F.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (r = F.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, p) {
        return !F.isUndefined(p[g]);
      },
    ));
  const s = r.metaTokens,
    n = r.visitor || u,
    a = r.dots,
    i = r.indexes,
    d =
      (r.Blob || (typeof Blob != "undefined" && Blob)) &&
      F.isSpecCompliantForm(t);
  if (!F.isFunction(n)) throw new TypeError("visitor must be a function");
  function c(m) {
    if (m === null) return "";
    if (F.isDate(m)) return m.toISOString();
    if (F.isBoolean(m)) return m.toString();
    if (!d && F.isBlob(m))
      throw new Q("Blob is not supported. Use a Buffer instead.");
    return F.isArrayBuffer(m) || F.isTypedArray(m)
      ? d && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function u(m, g, p) {
    let w = m;
    if (m && !p && typeof m == "object") {
      if (F.endsWith(g, "{}"))
        (g = s ? g : g.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (F.isArray(m) && B1(m)) ||
        ((F.isFileList(m) || F.endsWith(g, "[]")) && (w = F.toArray(m)))
      )
        return (
          (g = Vc(g)),
          w.forEach(function (v, y) {
            !(F.isUndefined(v) || v === null) &&
              t.append(
                i === !0 ? w0([g], y, a) : i === null ? g : g + "[]",
                c(v),
              );
          }),
          !1
        );
    }
    return to(m) ? !0 : (t.append(w0(p, g, a), c(m)), !1);
  }
  const f = [],
    h = Object.assign(S1, {
      defaultVisitor: u,
      convertValue: c,
      isVisitable: to,
    });
  function x(m, g) {
    if (!F.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(m),
        F.forEach(m, function (w, b) {
          (!(F.isUndefined(w) || w === null) &&
            n.call(t, w, F.isString(b) ? b.trim() : b, g, h)) === !0 &&
            x(w, g ? g.concat(b) : [b]);
        }),
        f.pop();
    }
  }
  if (!F.isObject(e)) throw new TypeError("data must be an object");
  return x(e), t;
}
function C0(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (s) {
    return t[s];
  });
}
function Go(e, t) {
  (this._pairs = []), e && Ws(e, this, t);
}
const $c = Go.prototype;
$c.append = function (t, r) {
  this._pairs.push([t, r]);
};
$c.toString = function (t) {
  const r = t
    ? function (s) {
        return t.call(this, s, C0);
      }
    : C0;
  return this._pairs
    .map(function (n) {
      return r(n[0]) + "=" + r(n[1]);
    }, "")
    .join("&");
};
function _1(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function Uc(e, t, r) {
  if (!t) return e;
  const s = (r && r.encode) || _1;
  F.isFunction(r) && (r = { serialize: r });
  const n = r && r.serialize;
  let a;
  if (
    (n
      ? (a = n(t, r))
      : (a = F.isURLSearchParams(t) ? t.toString() : new Go(t, r).toString(s)),
    a)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + a);
  }
  return e;
}
class A0 {
  constructor() {
    this.handlers = [];
  }
  use(t, r, s) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: r,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
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
    F.forEach(this.handlers, function (s) {
      s !== null && t(s);
    });
  }
}
const zc = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  F1 = typeof URLSearchParams != "undefined" ? URLSearchParams : Go,
  T1 = typeof FormData != "undefined" ? FormData : null,
  R1 = typeof Blob != "undefined" ? Blob : null,
  P1 = {
    isBrowser: !0,
    classes: { URLSearchParams: F1, FormData: T1, Blob: R1 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Zo = typeof window != "undefined" && typeof document != "undefined",
  ro = (typeof navigator == "object" && navigator) || void 0,
  M1 =
    Zo &&
    (!ro || ["ReactNative", "NativeScript", "NS"].indexOf(ro.product) < 0),
  L1 =
    typeof WorkerGlobalScope != "undefined" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  O1 = (Zo && window.location.href) || "http://localhost",
  I1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Zo,
        hasStandardBrowserEnv: M1,
        hasStandardBrowserWebWorkerEnv: L1,
        navigator: ro,
        origin: O1,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  we = O(O({}, I1), P1);
function V1(e, t) {
  return Ws(
    e,
    new we.classes.URLSearchParams(),
    O(
      {
        visitor: function (r, s, n, a) {
          return we.isNode && F.isBuffer(r)
            ? (this.append(s, r.toString("base64")), !1)
            : a.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function $1(e) {
  return F.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0],
  );
}
function U1(e) {
  const t = {},
    r = Object.keys(e);
  let s;
  const n = r.length;
  let a;
  for (s = 0; s < n; s++) (a = r[s]), (t[a] = e[a]);
  return t;
}
function Hc(e) {
  function t(r, s, n, a) {
    let i = r[a++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i),
      d = a >= r.length;
    return (
      (i = !i && F.isArray(n) ? n.length : i),
      d
        ? (F.hasOwnProp(n, i) ? (n[i] = [n[i], s]) : (n[i] = s), !l)
        : ((!n[i] || !F.isObject(n[i])) && (n[i] = []),
          t(r, s, n[i], a) && F.isArray(n[i]) && (n[i] = U1(n[i])),
          !l)
    );
  }
  if (F.isFormData(e) && F.isFunction(e.entries)) {
    const r = {};
    return (
      F.forEachEntry(e, (s, n) => {
        t($1(s), n, r, 0);
      }),
      r
    );
  }
  return null;
}
function z1(e, t, r) {
  if (F.isString(e))
    try {
      return (t || JSON.parse)(e), F.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (r || JSON.stringify)(e);
}
const yr = {
  transitional: zc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, r) {
      const s = r.getContentType() || "",
        n = s.indexOf("application/json") > -1,
        a = F.isObject(t);
      if ((a && F.isHTMLForm(t) && (t = new FormData(t)), F.isFormData(t)))
        return n ? JSON.stringify(Hc(t)) : t;
      if (
        F.isArrayBuffer(t) ||
        F.isBuffer(t) ||
        F.isStream(t) ||
        F.isFile(t) ||
        F.isBlob(t) ||
        F.isReadableStream(t)
      )
        return t;
      if (F.isArrayBufferView(t)) return t.buffer;
      if (F.isURLSearchParams(t))
        return (
          r.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let l;
      if (a) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return V1(t, this.formSerializer).toString();
        if ((l = F.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
          const d = this.env && this.env.FormData;
          return Ws(
            l ? { "files[]": t } : t,
            d && new d(),
            this.formSerializer,
          );
        }
      }
      return a || n ? (r.setContentType("application/json", !1), z1(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const r = this.transitional || yr.transitional,
        s = r && r.forcedJSONParsing,
        n = this.responseType === "json";
      if (F.isResponse(t) || F.isReadableStream(t)) return t;
      if (t && F.isString(t) && ((s && !this.responseType) || n)) {
        const i = !(r && r.silentJSONParsing) && n;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (l) {
          if (i)
            throw l.name === "SyntaxError"
              ? Q.from(l, Q.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
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
  env: { FormData: we.classes.FormData, Blob: we.classes.Blob },
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
F.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  yr.headers[e] = {};
});
const H1 = F.toObjectSet([
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
  q1 = (e) => {
    const t = {};
    let r, s, n;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (i) {
            (n = i.indexOf(":")),
              (r = i.substring(0, n).trim().toLowerCase()),
              (s = i.substring(n + 1).trim()),
              !(!r || (t[r] && H1[r])) &&
                (r === "set-cookie"
                  ? t[r]
                    ? t[r].push(s)
                    : (t[r] = [s])
                  : (t[r] = t[r] ? t[r] + ", " + s : s));
          }),
      t
    );
  },
  E0 = Symbol("internals");
function Kt(e) {
  return e && String(e).trim().toLowerCase();
}
function Cs(e) {
  return e === !1 || e == null ? e : F.isArray(e) ? e.map(Cs) : String(e);
}
function W1(e) {
  const t = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = r.exec(e)); ) t[s[1]] = s[2];
  return t;
}
const K1 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function wn(e, t, r, s, n) {
  if (F.isFunction(s)) return s.call(this, t, r);
  if ((n && (t = r), !!F.isString(t))) {
    if (F.isString(s)) return t.indexOf(s) !== -1;
    if (F.isRegExp(s)) return s.test(t);
  }
}
function Y1(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, r, s) => r.toUpperCase() + s);
}
function X1(e, t) {
  const r = F.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + r, {
      value: function (n, a, i) {
        return this[s].call(this, t, n, a, i);
      },
      configurable: !0,
    });
  });
}
let je = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, s) {
    const n = this;
    function a(l, d, c) {
      const u = Kt(d);
      if (!u) throw new Error("header name must be a non-empty string");
      const f = F.findKey(n, u);
      (!f || n[f] === void 0 || c === !0 || (c === void 0 && n[f] !== !1)) &&
        (n[f || d] = Cs(l));
    }
    const i = (l, d) => F.forEach(l, (c, u) => a(c, u, d));
    if (F.isPlainObject(t) || t instanceof this.constructor) i(t, r);
    else if (F.isString(t) && (t = t.trim()) && !K1(t)) i(q1(t), r);
    else if (F.isObject(t) && F.isIterable(t)) {
      let l = {},
        d,
        c;
      for (const u of t) {
        if (!F.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        l[(c = u[0])] = (d = l[c])
          ? F.isArray(d)
            ? [...d, u[1]]
            : [d, u[1]]
          : u[1];
      }
      i(l, r);
    } else t != null && a(r, t, s);
    return this;
  }
  get(t, r) {
    if (((t = Kt(t)), t)) {
      const s = F.findKey(this, t);
      if (s) {
        const n = this[s];
        if (!r) return n;
        if (r === !0) return W1(n);
        if (F.isFunction(r)) return r.call(this, n, s);
        if (F.isRegExp(r)) return r.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (((t = Kt(t)), t)) {
      const s = F.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!r || wn(this, this[s], s, r)));
    }
    return !1;
  }
  delete(t, r) {
    const s = this;
    let n = !1;
    function a(i) {
      if (((i = Kt(i)), i)) {
        const l = F.findKey(s, i);
        l && (!r || wn(s, s[l], l, r)) && (delete s[l], (n = !0));
      }
    }
    return F.isArray(t) ? t.forEach(a) : a(t), n;
  }
  clear(t) {
    const r = Object.keys(this);
    let s = r.length,
      n = !1;
    for (; s--; ) {
      const a = r[s];
      (!t || wn(this, this[a], a, t, !0)) && (delete this[a], (n = !0));
    }
    return n;
  }
  normalize(t) {
    const r = this,
      s = {};
    return (
      F.forEach(this, (n, a) => {
        const i = F.findKey(s, a);
        if (i) {
          (r[i] = Cs(n)), delete r[a];
          return;
        }
        const l = t ? Y1(a) : String(a).trim();
        l !== a && delete r[a], (r[l] = Cs(n)), (s[l] = !0);
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
      F.forEach(this, (s, n) => {
        s != null && s !== !1 && (r[n] = t && F.isArray(s) ? s.join(", ") : s);
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
    const s = new this(t);
    return r.forEach((n) => s.set(n)), s;
  }
  static accessor(t) {
    const s = (this[E0] = this[E0] = { accessors: {} }).accessors,
      n = this.prototype;
    function a(i) {
      const l = Kt(i);
      s[l] || (X1(n, i), (s[l] = !0));
    }
    return F.isArray(t) ? t.forEach(a) : a(t), this;
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
F.reduceDescriptors(je.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[r] = s;
    },
  };
});
F.freezeMethods(je);
function Cn(e, t) {
  const r = this || yr,
    s = t || r,
    n = je.from(s.headers);
  let a = s.data;
  return (
    F.forEach(e, function (l) {
      a = l.call(r, a, n.normalize(), t ? t.status : void 0);
    }),
    n.normalize(),
    a
  );
}
function qc(e) {
  return !!(e && e.__CANCEL__);
}
function Ot(e, t, r) {
  Q.call(this, e == null ? "canceled" : e, Q.ERR_CANCELED, t, r),
    (this.name = "CanceledError");
}
F.inherits(Ot, Q, { __CANCEL__: !0 });
function Wc(e, t, r) {
  const s = r.config.validateStatus;
  !r.status || !s || s(r.status)
    ? e(r)
    : t(
        new Q(
          "Request failed with status code " + r.status,
          [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r,
        ),
      );
}
function G1(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Z1(e, t) {
  e = e || 10;
  const r = new Array(e),
    s = new Array(e);
  let n = 0,
    a = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (d) {
      const c = Date.now(),
        u = s[a];
      i || (i = c), (r[n] = d), (s[n] = c);
      let f = a,
        h = 0;
      for (; f !== n; ) (h += r[f++]), (f = f % e);
      if (((n = (n + 1) % e), n === a && (a = (a + 1) % e), c - i < t)) return;
      const x = u && c - u;
      return x ? Math.round((h * 1e3) / x) : void 0;
    }
  );
}
function Q1(e, t) {
  let r = 0,
    s = 1e3 / t,
    n,
    a;
  const i = (c, u = Date.now()) => {
    (r = u), (n = null), a && (clearTimeout(a), (a = null)), e(...c);
  };
  return [
    (...c) => {
      const u = Date.now(),
        f = u - r;
      f >= s
        ? i(c, u)
        : ((n = c),
          a ||
            (a = setTimeout(() => {
              (a = null), i(n);
            }, s - f)));
    },
    () => n && i(n),
  ];
}
const Ps = (e, t, r = 3) => {
    let s = 0;
    const n = Z1(50, 250);
    return Q1((a) => {
      const i = a.loaded,
        l = a.lengthComputable ? a.total : void 0,
        d = i - s,
        c = n(d),
        u = i <= l;
      s = i;
      const f = {
        loaded: i,
        total: l,
        progress: l ? i / l : void 0,
        bytes: d,
        rate: c || void 0,
        estimated: c && l && u ? (l - i) / c : void 0,
        event: a,
        lengthComputable: l != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, r);
  },
  N0 = (e, t) => {
    const r = e != null;
    return [(s) => t[0]({ lengthComputable: r, total: e, loaded: s }), t[1]];
  },
  k0 =
    (e) =>
    (...t) =>
      F.asap(() => e(...t)),
  J1 = we.hasStandardBrowserEnv
    ? ((e, t) => (r) => (
        (r = new URL(r, we.origin)),
        e.protocol === r.protocol &&
          e.host === r.host &&
          (t || e.port === r.port)
      ))(
        new URL(we.origin),
        we.navigator && /(msie|trident)/i.test(we.navigator.userAgent),
      )
    : () => !0,
  eb = we.hasStandardBrowserEnv
    ? {
        write(e, t, r, s, n, a, i) {
          if (typeof document == "undefined") return;
          const l = [`${e}=${encodeURIComponent(t)}`];
          F.isNumber(r) && l.push(`expires=${new Date(r).toUTCString()}`),
            F.isString(s) && l.push(`path=${s}`),
            F.isString(n) && l.push(`domain=${n}`),
            a === !0 && l.push("secure"),
            F.isString(i) && l.push(`SameSite=${i}`),
            (document.cookie = l.join("; "));
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
function tb(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function rb(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Kc(e, t, r) {
  let s = !tb(t);
  return e && (s || r == !1) ? rb(e, t) : t;
}
const j0 = (e) => (e instanceof je ? O({}, e) : e);
function xt(e, t) {
  t = t || {};
  const r = {};
  function s(c, u, f, h) {
    return F.isPlainObject(c) && F.isPlainObject(u)
      ? F.merge.call({ caseless: h }, c, u)
      : F.isPlainObject(u)
        ? F.merge({}, u)
        : F.isArray(u)
          ? u.slice()
          : u;
  }
  function n(c, u, f, h) {
    if (F.isUndefined(u)) {
      if (!F.isUndefined(c)) return s(void 0, c, f, h);
    } else return s(c, u, f, h);
  }
  function a(c, u) {
    if (!F.isUndefined(u)) return s(void 0, u);
  }
  function i(c, u) {
    if (F.isUndefined(u)) {
      if (!F.isUndefined(c)) return s(void 0, c);
    } else return s(void 0, u);
  }
  function l(c, u, f) {
    if (f in t) return s(c, u);
    if (f in e) return s(void 0, c);
  }
  const d = {
    url: a,
    method: a,
    data: a,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (c, u, f) => n(j0(c), j0(u), f, !0),
  };
  return (
    F.forEach(Object.keys(O(O({}, e), t)), function (u) {
      const f = d[u] || n,
        h = f(e[u], t[u], u);
      (F.isUndefined(h) && f !== l) || (r[u] = h);
    }),
    r
  );
}
const Yc = (e) => {
    const t = xt({}, e);
    let {
      data: r,
      withXSRFToken: s,
      xsrfHeaderName: n,
      xsrfCookieName: a,
      headers: i,
      auth: l,
    } = t;
    if (
      ((t.headers = i = je.from(i)),
      (t.url = Uc(
        Kc(t.baseURL, t.url, t.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer,
      )),
      l &&
        i.set(
          "Authorization",
          "Basic " +
            btoa(
              (l.username || "") +
                ":" +
                (l.password ? unescape(encodeURIComponent(l.password)) : ""),
            ),
        ),
      F.isFormData(r))
    ) {
      if (we.hasStandardBrowserEnv || we.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if (F.isFunction(r.getHeaders)) {
        const d = r.getHeaders(),
          c = ["content-type", "content-length"];
        Object.entries(d).forEach(([u, f]) => {
          c.includes(u.toLowerCase()) && i.set(u, f);
        });
      }
    }
    if (
      we.hasStandardBrowserEnv &&
      (s && F.isFunction(s) && (s = s(t)), s || (s !== !1 && J1(t.url)))
    ) {
      const d = n && a && eb.read(a);
      d && i.set(n, d);
    }
    return t;
  },
  sb = typeof XMLHttpRequest != "undefined",
  nb =
    sb &&
    function (e) {
      return new Promise(function (r, s) {
        const n = Yc(e);
        let a = n.data;
        const i = je.from(n.headers).normalize();
        let { responseType: l, onUploadProgress: d, onDownloadProgress: c } = n,
          u,
          f,
          h,
          x,
          m;
        function g() {
          x && x(),
            m && m(),
            n.cancelToken && n.cancelToken.unsubscribe(u),
            n.signal && n.signal.removeEventListener("abort", u);
        }
        let p = new XMLHttpRequest();
        p.open(n.method.toUpperCase(), n.url, !0), (p.timeout = n.timeout);
        function w() {
          if (!p) return;
          const v = je.from(
              "getAllResponseHeaders" in p && p.getAllResponseHeaders(),
            ),
            C = {
              data:
                !l || l === "text" || l === "json"
                  ? p.responseText
                  : p.response,
              status: p.status,
              statusText: p.statusText,
              headers: v,
              config: e,
              request: p,
            };
          Wc(
            function (N) {
              r(N), g();
            },
            function (N) {
              s(N), g();
            },
            C,
          ),
            (p = null);
        }
        "onloadend" in p
          ? (p.onloadend = w)
          : (p.onreadystatechange = function () {
              !p ||
                p.readyState !== 4 ||
                (p.status === 0 &&
                  !(p.responseURL && p.responseURL.indexOf("file:") === 0)) ||
                setTimeout(w);
            }),
          (p.onabort = function () {
            p &&
              (s(new Q("Request aborted", Q.ECONNABORTED, e, p)), (p = null));
          }),
          (p.onerror = function (y) {
            const C = y && y.message ? y.message : "Network Error",
              E = new Q(C, Q.ERR_NETWORK, e, p);
            (E.event = y || null), s(E), (p = null);
          }),
          (p.ontimeout = function () {
            let y = n.timeout
              ? "timeout of " + n.timeout + "ms exceeded"
              : "timeout exceeded";
            const C = n.transitional || zc;
            n.timeoutErrorMessage && (y = n.timeoutErrorMessage),
              s(
                new Q(
                  y,
                  C.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED,
                  e,
                  p,
                ),
              ),
              (p = null);
          }),
          a === void 0 && i.setContentType(null),
          "setRequestHeader" in p &&
            F.forEach(i.toJSON(), function (y, C) {
              p.setRequestHeader(C, y);
            }),
          F.isUndefined(n.withCredentials) ||
            (p.withCredentials = !!n.withCredentials),
          l && l !== "json" && (p.responseType = n.responseType),
          c && (([h, m] = Ps(c, !0)), p.addEventListener("progress", h)),
          d &&
            p.upload &&
            (([f, x] = Ps(d)),
            p.upload.addEventListener("progress", f),
            p.upload.addEventListener("loadend", x)),
          (n.cancelToken || n.signal) &&
            ((u = (v) => {
              p &&
                (s(!v || v.type ? new Ot(null, e, p) : v),
                p.abort(),
                (p = null));
            }),
            n.cancelToken && n.cancelToken.subscribe(u),
            n.signal &&
              (n.signal.aborted ? u() : n.signal.addEventListener("abort", u)));
        const b = G1(n.url);
        if (b && we.protocols.indexOf(b) === -1) {
          s(new Q("Unsupported protocol " + b + ":", Q.ERR_BAD_REQUEST, e));
          return;
        }
        p.send(a || null);
      });
    },
  ob = (e, t) => {
    const { length: r } = (e = e ? e.filter(Boolean) : []);
    if (t || r) {
      let s = new AbortController(),
        n;
      const a = function (c) {
        if (!n) {
          (n = !0), l();
          const u = c instanceof Error ? c : this.reason;
          s.abort(
            u instanceof Q ? u : new Ot(u instanceof Error ? u.message : u),
          );
        }
      };
      let i =
        t &&
        setTimeout(() => {
          (i = null), a(new Q(`timeout ${t} of ms exceeded`, Q.ETIMEDOUT));
        }, t);
      const l = () => {
        e &&
          (i && clearTimeout(i),
          (i = null),
          e.forEach((c) => {
            c.unsubscribe
              ? c.unsubscribe(a)
              : c.removeEventListener("abort", a);
          }),
          (e = null));
      };
      e.forEach((c) => c.addEventListener("abort", a));
      const { signal: d } = s;
      return (d.unsubscribe = () => F.asap(l)), d;
    }
  },
  ab = function* (e, t) {
    let r = e.byteLength;
    if (r < t) {
      yield e;
      return;
    }
    let s = 0,
      n;
    for (; s < r; ) (n = s + t), yield e.slice(s, n), (s = n);
  },
  ib = function (e, t) {
    return Qs(this, null, function* () {
      try {
        for (
          var r = va(lb(e)), s, n, a;
          (s = !(n = yield new ot(r.next())).done);
          s = !1
        ) {
          const i = n.value;
          yield* Js(ab(i, t));
        }
      } catch (n) {
        a = [n];
      } finally {
        try {
          s && (n = r.return) && (yield new ot(n.call(r)));
        } finally {
          if (a) throw a[0];
        }
      }
    });
  },
  lb = function (e) {
    return Qs(this, null, function* () {
      if (e[Symbol.asyncIterator]) {
        yield* Js(e);
        return;
      }
      const t = e.getReader();
      try {
        for (;;) {
          const { done: r, value: s } = yield new ot(t.read());
          if (r) break;
          yield s;
        }
      } finally {
        yield new ot(t.cancel());
      }
    });
  },
  D0 = (e, t, r, s) => {
    const n = ib(e, t);
    let a = 0,
      i,
      l = (d) => {
        i || ((i = !0), s && s(d));
      };
    return new ReadableStream(
      {
        async pull(d) {
          try {
            const { done: c, value: u } = await n.next();
            if (c) {
              l(), d.close();
              return;
            }
            let f = u.byteLength;
            if (r) {
              let h = (a += f);
              r(h);
            }
            d.enqueue(new Uint8Array(u));
          } catch (c) {
            throw (l(c), c);
          }
        },
        cancel(d) {
          return l(d), n.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  B0 = 64 * 1024,
  { isFunction: Dr } = F,
  cb = (({ Request: e, Response: t }) => ({ Request: e, Response: t }))(
    F.global,
  ),
  { ReadableStream: S0, TextEncoder: _0 } = F.global,
  F0 = (e, ...t) => {
    try {
      return !!e(...t);
    } catch (r) {
      return !1;
    }
  },
  db = (e) => {
    e = F.merge.call({ skipUndefined: !0 }, cb, e);
    const { fetch: t, Request: r, Response: s } = e,
      n = t ? Dr(t) : typeof fetch == "function",
      a = Dr(r),
      i = Dr(s);
    if (!n) return !1;
    const l = n && Dr(S0),
      d =
        n &&
        (typeof _0 == "function"
          ? (
              (m) => (g) =>
                m.encode(g)
            )(new _0())
          : async (m) => new Uint8Array(await new r(m).arrayBuffer())),
      c =
        a &&
        l &&
        F0(() => {
          let m = !1;
          const g = new r(we.origin, {
            body: new S0(),
            method: "POST",
            get duplex() {
              return (m = !0), "half";
            },
          }).headers.has("Content-Type");
          return m && !g;
        }),
      u = i && l && F0(() => F.isReadableStream(new s("").body)),
      f = { stream: u && ((m) => m.body) };
    n &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((m) => {
        !f[m] &&
          (f[m] = (g, p) => {
            let w = g && g[m];
            if (w) return w.call(g);
            throw new Q(
              `Response type '${m}' is not supported`,
              Q.ERR_NOT_SUPPORT,
              p,
            );
          });
      });
    const h = async (m) => {
        if (m == null) return 0;
        if (F.isBlob(m)) return m.size;
        if (F.isSpecCompliantForm(m))
          return (
            await new r(we.origin, { method: "POST", body: m }).arrayBuffer()
          ).byteLength;
        if (F.isArrayBufferView(m) || F.isArrayBuffer(m)) return m.byteLength;
        if ((F.isURLSearchParams(m) && (m = m + ""), F.isString(m)))
          return (await d(m)).byteLength;
      },
      x = async (m, g) => {
        const p = F.toFiniteNumber(m.getContentLength());
        return p == null ? h(g) : p;
      };
    return async (m) => {
      let {
          url: g,
          method: p,
          data: w,
          signal: b,
          cancelToken: v,
          timeout: y,
          onDownloadProgress: C,
          onUploadProgress: E,
          responseType: N,
          headers: j,
          withCredentials: S = "same-origin",
          fetchOptions: A,
        } = Yc(m),
        B = t || fetch;
      N = N ? (N + "").toLowerCase() : "text";
      let k = ob([b, v && v.toAbortSignal()], y),
        T = null;
      const I =
        k &&
        k.unsubscribe &&
        (() => {
          k.unsubscribe();
        });
      let $;
      try {
        if (
          E &&
          c &&
          p !== "get" &&
          p !== "head" &&
          ($ = await x(j, w)) !== 0
        ) {
          let R = new r(g, { method: "POST", body: w, duplex: "half" }),
            M;
          if (
            (F.isFormData(w) &&
              (M = R.headers.get("content-type")) &&
              j.setContentType(M),
            R.body)
          ) {
            const [L, D] = N0($, Ps(k0(E)));
            w = D0(R.body, B0, L, D);
          }
        }
        F.isString(S) || (S = S ? "include" : "omit");
        const H = a && "credentials" in r.prototype,
          W = G(O({}, A), {
            signal: k,
            method: p.toUpperCase(),
            headers: j.normalize().toJSON(),
            body: w,
            duplex: "half",
            credentials: H ? S : void 0,
          });
        T = a && new r(g, W);
        let q = await (a ? B(T, A) : B(g, W));
        const Z = u && (N === "stream" || N === "response");
        if (u && (C || (Z && I))) {
          const R = {};
          ["status", "statusText", "headers"].forEach((z) => {
            R[z] = q[z];
          });
          const M = F.toFiniteNumber(q.headers.get("content-length")),
            [L, D] = (C && N0(M, Ps(k0(C), !0))) || [];
          q = new s(
            D0(q.body, B0, L, () => {
              D && D(), I && I();
            }),
            R,
          );
        }
        N = N || "text";
        let K = await f[F.findKey(f, N) || "text"](q, m);
        return (
          !Z && I && I(),
          await new Promise((R, M) => {
            Wc(R, M, {
              data: K,
              headers: je.from(q.headers),
              status: q.status,
              statusText: q.statusText,
              config: m,
              request: T,
            });
          })
        );
      } catch (H) {
        throw (
          (I && I(),
          H && H.name === "TypeError" && /Load failed|fetch/i.test(H.message)
            ? Object.assign(new Q("Network Error", Q.ERR_NETWORK, m, T), {
                cause: H.cause || H,
              })
            : Q.from(H, H && H.code, m, T))
        );
      }
    };
  },
  ub = new Map(),
  Xc = (e) => {
    let t = (e && e.env) || {};
    const { fetch: r, Request: s, Response: n } = t,
      a = [s, n, r];
    let i = a.length,
      l = i,
      d,
      c,
      u = ub;
    for (; l--; )
      (d = a[l]),
        (c = u.get(d)),
        c === void 0 && u.set(d, (c = l ? new Map() : db(t))),
        (u = c);
    return c;
  };
Xc();
const Qo = { http: D1, xhr: nb, fetch: { get: Xc } };
F.forEach(Qo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch (r) {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const T0 = (e) => `- ${e}`,
  hb = (e) => F.isFunction(e) || e === null || e === !1;
function fb(e, t) {
  e = F.isArray(e) ? e : [e];
  const { length: r } = e;
  let s, n;
  const a = {};
  for (let i = 0; i < r; i++) {
    s = e[i];
    let l;
    if (
      ((n = s),
      !hb(s) && ((n = Qo[(l = String(s)).toLowerCase()]), n === void 0))
    )
      throw new Q(`Unknown adapter '${l}'`);
    if (n && (F.isFunction(n) || (n = n.get(t)))) break;
    a[l || "#" + i] = n;
  }
  if (!n) {
    const i = Object.entries(a).map(
      ([d, c]) =>
        `adapter ${d} ` +
        (c === !1
          ? "is not supported by the environment"
          : "is not available in the build"),
    );
    let l = r
      ? i.length > 1
        ? `since :
` +
          i.map(T0).join(`
`)
        : " " + T0(i[0])
      : "as no adapter specified";
    throw new Q(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT",
    );
  }
  return n;
}
const Gc = { getAdapter: fb, adapters: Qo };
function An(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Ot(null, e);
}
function R0(e) {
  return (
    An(e),
    (e.headers = je.from(e.headers)),
    (e.data = Cn.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Gc.getAdapter(
      e.adapter || yr.adapter,
      e,
    )(e).then(
      function (s) {
        return (
          An(e),
          (s.data = Cn.call(e, e.transformResponse, s)),
          (s.headers = je.from(s.headers)),
          s
        );
      },
      function (s) {
        return (
          qc(s) ||
            (An(e),
            s &&
              s.response &&
              ((s.response.data = Cn.call(e, e.transformResponse, s.response)),
              (s.response.headers = je.from(s.response.headers)))),
          Promise.reject(s)
        );
      },
    )
  );
}
const Zc = "1.13.0",
  Ks = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ks[e] = function (s) {
      return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const P0 = {};
Ks.transitional = function (t, r, s) {
  function n(a, i) {
    return (
      "[Axios v" +
      Zc +
      "] Transitional option '" +
      a +
      "'" +
      i +
      (s ? ". " + s : "")
    );
  }
  return (a, i, l) => {
    if (t === !1)
      throw new Q(
        n(i, " has been removed" + (r ? " in " + r : "")),
        Q.ERR_DEPRECATED,
      );
    return (
      r &&
        !P0[i] &&
        ((P0[i] = !0),
        console.warn(
          n(
            i,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future",
          ),
        )),
      t ? t(a, i, l) : !0
    );
  };
};
Ks.spelling = function (t) {
  return (r, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function xb(e, t, r) {
  if (typeof e != "object")
    throw new Q("options must be an object", Q.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let n = s.length;
  for (; n-- > 0; ) {
    const a = s[n],
      i = t[a];
    if (i) {
      const l = e[a],
        d = l === void 0 || i(l, a, e);
      if (d !== !0)
        throw new Q("option " + a + " must be " + d, Q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new Q("Unknown option " + a, Q.ERR_BAD_OPTION);
  }
}
const As = { assertOptions: xb, validators: Ks },
  Ue = As.validators;
let ft = class {
  constructor(t) {
    (this.defaults = t || {}),
      (this.interceptors = { request: new A0(), response: new A0() });
  }
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (s) {
      if (s instanceof Error) {
        let n = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(n)
          : (n = new Error());
        const a = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack
            ? a &&
              !String(s.stack).endsWith(a.replace(/^.+\n.+\n/, "")) &&
              (s.stack +=
                `
` + a)
            : (s.stack = a);
        } catch (i) {}
      }
      throw s;
    }
  }
  _request(t, r) {
    typeof t == "string" ? ((r = r || {}), (r.url = t)) : (r = t || {}),
      (r = xt(this.defaults, r));
    const { transitional: s, paramsSerializer: n, headers: a } = r;
    s !== void 0 &&
      As.assertOptions(
        s,
        {
          silentJSONParsing: Ue.transitional(Ue.boolean),
          forcedJSONParsing: Ue.transitional(Ue.boolean),
          clarifyTimeoutError: Ue.transitional(Ue.boolean),
        },
        !1,
      ),
      n != null &&
        (F.isFunction(n)
          ? (r.paramsSerializer = { serialize: n })
          : As.assertOptions(
              n,
              { encode: Ue.function, serialize: Ue.function },
              !0,
            )),
      r.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (r.allowAbsoluteUrls = !0)),
      As.assertOptions(
        r,
        {
          baseUrl: Ue.spelling("baseURL"),
          withXsrfToken: Ue.spelling("withXSRFToken"),
        },
        !0,
      ),
      (r.method = (r.method || this.defaults.method || "get").toLowerCase());
    let i = a && F.merge(a.common, a[r.method]);
    a &&
      F.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (m) => {
          delete a[m];
        },
      ),
      (r.headers = je.concat(i, a));
    const l = [];
    let d = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(r) === !1) ||
        ((d = d && g.synchronous), l.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (g) {
      c.push(g.fulfilled, g.rejected);
    });
    let u,
      f = 0,
      h;
    if (!d) {
      const m = [R0.bind(this), void 0];
      for (
        m.unshift(...l), m.push(...c), h = m.length, u = Promise.resolve(r);
        f < h;

      )
        u = u.then(m[f++], m[f++]);
      return u;
    }
    h = l.length;
    let x = r;
    for (; f < h; ) {
      const m = l[f++],
        g = l[f++];
      try {
        x = m(x);
      } catch (p) {
        g.call(this, p);
        break;
      }
    }
    try {
      u = R0.call(this, x);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, h = c.length; f < h; ) u = u.then(c[f++], c[f++]);
    return u;
  }
  getUri(t) {
    t = xt(this.defaults, t);
    const r = Kc(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Uc(r, t.params, t.paramsSerializer);
  }
};
F.forEach(["delete", "get", "head", "options"], function (t) {
  ft.prototype[t] = function (r, s) {
    return this.request(
      xt(s || {}, { method: t, url: r, data: (s || {}).data }),
    );
  };
});
F.forEach(["post", "put", "patch"], function (t) {
  function r(s) {
    return function (a, i, l) {
      return this.request(
        xt(l || {}, {
          method: t,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: a,
          data: i,
        }),
      );
    };
  }
  (ft.prototype[t] = r()), (ft.prototype[t + "Form"] = r(!0));
});
let mb = class Qc {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function (a) {
      r = a;
    });
    const s = this;
    this.promise.then((n) => {
      if (!s._listeners) return;
      let a = s._listeners.length;
      for (; a-- > 0; ) s._listeners[a](n);
      s._listeners = null;
    }),
      (this.promise.then = (n) => {
        let a;
        const i = new Promise((l) => {
          s.subscribe(l), (a = l);
        }).then(n);
        return (
          (i.cancel = function () {
            s.unsubscribe(a);
          }),
          i
        );
      }),
      t(function (a, i, l) {
        s.reason || ((s.reason = new Ot(a, i, l)), r(s.reason));
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
      r = (s) => {
        t.abort(s);
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
      token: new Qc(function (n) {
        t = n;
      }),
      cancel: t,
    };
  }
};
function pb(e) {
  return function (r) {
    return e.apply(null, r);
  };
}
function gb(e) {
  return F.isObject(e) && e.isAxiosError === !0;
}
const so = {
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
Object.entries(so).forEach(([e, t]) => {
  so[t] = e;
});
function Jc(e) {
  const t = new ft(e),
    r = Sc(ft.prototype.request, t);
  return (
    F.extend(r, ft.prototype, t, { allOwnKeys: !0 }),
    F.extend(r, t, null, { allOwnKeys: !0 }),
    (r.create = function (n) {
      return Jc(xt(e, n));
    }),
    r
  );
}
const ue = Jc(yr);
ue.Axios = ft;
ue.CanceledError = Ot;
ue.CancelToken = mb;
ue.isCancel = qc;
ue.VERSION = Zc;
ue.toFormData = Ws;
ue.AxiosError = Q;
ue.Cancel = ue.CanceledError;
ue.all = function (t) {
  return Promise.all(t);
};
ue.spread = pb;
ue.isAxiosError = gb;
ue.mergeConfig = xt;
ue.AxiosHeaders = je;
ue.formToJSON = (e) => Hc(F.isHTMLForm(e) ? new FormData(e) : e);
ue.getAdapter = Gc.getAdapter;
ue.HttpStatusCode = so;
ue.default = ue;
const {
    Axios: ay,
    AxiosError: iy,
    CanceledError: ly,
    isCancel: cy,
    CancelToken: dy,
    VERSION: uy,
    all: hy,
    Cancel: fy,
    isAxiosError: xy,
    spread: my,
    toFormData: py,
    AxiosHeaders: gy,
    HttpStatusCode: by,
    formToJSON: vy,
    getAdapter: yy,
    mergeConfig: wy,
  } = ue,
  bb = "foodease",
  vb = "1.0.0",
  yb = {
    inspectGuard: !0,
    inputTracer: !0,
    tabTracker: !0,
    wss: !1,
    isServerLive: !0,
  },
  wb = {
    url: "wss://api.ajayos.in",
    withCredentials: !0,
    reconnectionAttempts: 3,
    reconnectionDelay: 1e3,
    reconnection: !1,
    autoConnect: !0,
    transports: ["websocket"],
    timeout: 8e3,
    multiplex: !0,
    path: "",
  },
  Cb = {
    baseURL: "https://api.ajayos.in",
    timeout: 2e4,
    withCredentials: !0,
    retry: 2,
  },
  Ab = "November 5, 2025",
  Eb = [
    {
      id: 1,
      category: "✨ New Features",
      icon: "🎨",
      gradient: "from-purple-500/40 to-pink-500/40",
      borderColor: "border-purple-400/60",
      badgeGradient: "from-purple-500 to-pink-500",
      items: [
        {
          title: "Dark Mode Support",
          description: "Complete dark theme across all pages",
          image: "🌙",
        },
        {
          title: "Real-time Collaboration",
          description: "Work together with live updates",
          image: "👥",
        },
        {
          title: "AI-Powered Search",
          description: "Smart search with natural language",
          image: "🤖",
        },
      ],
    },
    {
      id: 2,
      category: "🐛 Bug Fixes",
      icon: "🔧",
      gradient: "from-blue-500/40 to-cyan-500/40",
      borderColor: "border-blue-400/60",
      badgeGradient: "from-blue-500 to-cyan-500",
      items: [
        {
          title: "Mobile Animation Fix",
          description: "Fixed loading spinner stuttering",
          image: "📱",
        },
        {
          title: "Memory Leak Resolution",
          description: "Resolved websocket memory leak",
          image: "💾",
        },
        {
          title: "Timezone Conversion",
          description: "Fixed timezone conversion errors",
          image: "⏰",
        },
      ],
    },
    {
      id: 3,
      category: "⚡ Performance",
      icon: "⚙️",
      gradient: "from-orange-500/40 to-red-500/40",
      borderColor: "border-orange-400/60",
      badgeGradient: "from-orange-500 to-red-500",
      items: [
        {
          title: "Bundle Size Reduction",
          description: "Reduced app bundle by 35%",
          image: "📦",
        },
        {
          title: "API Response Speed",
          description: "Improved response time by 40%",
          image: "⚡",
        },
        {
          title: "Image Optimization",
          description: "Smart loading for slow networks",
          image: "🖼️",
        },
      ],
    },
  ],
  ed = {
    projectName: bb,
    appVersion: vb,
    features: yb,
    ws: wb,
    api: Cb,
    releaseDate: Ab,
    changelog: Eb,
  },
  se = ed,
  Ys = (e) => {
    var t;
    return !!((t = ed.features) != null && t[e]);
  };
let Nb = class {
  constructor() {
    this.map = new Map();
  }
  on(t, r) {
    const s = this.map.get(t) || [];
    return s.push(r), this.map.set(t, s), () => this.off(t, r);
  }
  once(t, r) {
    const s = this.on(t, (...n) => {
      s(), r(...n);
    });
    return s;
  }
  off(t, r) {
    const s = this.map.get(t) || [];
    this.map.set(
      t,
      s.filter((n) => n !== r),
    );
  }
  emit(t, ...r) {
    const s = this.map.get(t) || [];
    for (const n of s)
      try {
        n(...r);
      } catch (a) {
        console.error(a);
      }
  }
};
const ye = new Nb(),
  Ee = {
    API_LOADING: "api:loading",
    API_TRACE: "api:trace",
    ERROR: "app:error",
    INSPECT_DETECTED: "security:inspect",
    INPUT_TRACE: "trace:input",
    VERSION_MISMATCH: "app:version:mismatch",
    TAB_VISIBILITY: "tab:visibility",
    THEME_CHANGED: "theme:changed",
    SOCKET_MESSAGE: "socket:message",
    SERVER_NOT_PING: "server_not_ping",
  };
let Es = localStorage.getItem("U1RBVElDX1VVSUQ");
Es || ((Es = td()), localStorage.setItem("U1RBVElDX1VVSUQ", Es));
function td(e = !1) {
  if (typeof crypto != "undefined") {
    if (crypto.getRandomValues) {
      const t = new Uint8Array(20);
      return (
        crypto.getRandomValues(t),
        `aos.${e ? "request" : "device"}_` +
          Array.from(t)
            .map((r) => r.toString(16).padStart(2, "0"))
            .join("")
      );
    } else if (crypto.randomBytes)
      return (
        `aos.${e ? "request" : "device"}_` +
        crypto.randomBytes(20).toString("hex")
      );
  }
  return (
    `aos.${e ? "request" : "device"}_` +
    (Math.random().toString(36).substring(2, 10) + Date.now())
  );
}
const Ms = (e) =>
  `${(e.method || "GET").toUpperCase()} ${e.baseURL || ""}${e.url || ""}`;
function kb(e) {
  return (
    (e.metadata = { start: Date.now() }),
    (e.headers["x-request-time"] = new Date().toISOString()),
    (e.headers["x-request-id"] = td(!0)),
    (e.headers["x-visitor-id"] = Es),
    (e.headers["x-request-timezone"] =
      Intl.DateTimeFormat().resolvedOptions().timeZone),
    (e.headers["x-request-utc-offset"] = -new Date().getTimezoneOffset() / 60),
    (e.headers["x-request-epoch"] = Date.now()),
    (e.headers["x-app-name"] = se.projectName),
    e
  );
}
async function jb(e, t) {
  var l, d, c, u, f, h;
  const r = e.config;
  if (!r || r._retrying) return Promise.reject(e);
  (r._retrying = !0), (r.__retryCount = r.__retryCount || 0);
  const s = Math.min(
      (d = (l = r.retry) != null ? l : se.api.retry) != null ? d : 3,
      5,
    ),
    n =
      (u = (c = r.retryDelay) != null ? c : se.api.retryDelay) != null
        ? u
        : 1e3,
    a = (f = e.response) == null ? void 0 : f.status;
  if (
    (a && a >= 400 && a < 500) ||
    e.code === "ECONNABORTED" ||
    ((h = e.message) != null && h.includes("canceled"))
  )
    return Promise.reject(e);
  let i = e;
  for (; r.__retryCount < s; ) {
    r.__retryCount += 1;
    const x = n * Math.pow(2, r.__retryCount - 1);
    se.api.trace &&
      ye.emit(Ee.API_TRACE, {
        method: r.method,
        url: r.url,
        retry: r.__retryCount,
        delay: x,
      }),
      await new Promise((m) => setTimeout(m, x));
    try {
      const m = await t(r);
      return (
        r.loading === !0 &&
          ye.emit(Ee.API_LOADING, { key: Ms(r), loading: !1, inFlight: 0 }),
        m
      );
    } catch (m) {
      if (((i = m), r.__retryCount >= s)) break;
    }
  }
  return (
    r.loading === !0 &&
      ye.emit(Ee.API_LOADING, { key: Ms(r), loading: !1, inFlight: 0 }),
    ye.emit(Ee.ERROR, i),
    ye.emit(Ee.API_RETRY_END, {
      method: r.method,
      url: r.url,
      attempts: r.__retryCount,
    }),
    Promise.reject(i)
  );
}
const hr = ue.create(se.api);
hr.interceptors.request.use(
  (e) => (
    kb(e),
    e.loading === !0 &&
      ye.emit(Ee.API_LOADING, { key: Ms(e), loading: !0, inFlight: 1 }),
    e
  ),
);
hr.interceptors.response.use(
  (e) => {
    var r;
    const t =
      Date.now() -
      (((r = e.config.metadata) == null ? void 0 : r.start) || Date.now());
    return (
      e.config.loading === !0 &&
        ye.emit(Ee.API_LOADING, {
          key: Ms(e.config),
          loading: !1,
          inFlight: 0,
        }),
      se.api.trace &&
        ye.emit(Ee.API_TRACE, {
          method: e.config.method,
          url: e.config.url,
          ms: t,
          status: e.status,
        }),
      e
    );
  },
  async (e) => {
    var s, n;
    const t = e.config || {},
      r =
        Date.now() -
        (((s = t.metadata) == null ? void 0 : s.start) || Date.now());
    return (
      se.api.trace &&
        ye.emit(Ee.API_TRACE, {
          method: t.method,
          url: t.url,
          ms: r,
          status: ((n = e.response) == null ? void 0 : n.status) || 0,
        }),
      jb(e, hr)
    );
  },
);
const wt = async (e = "GET", t, r = {}, s = {}) => {
    var l;
    let n;
    function a(d = {}) {
      const c = encodeURIComponent;
      return Object.keys(d)
        .map((u) => `${c(u)}=${c(d[u])}`)
        .join("&");
    }
    const i = O({ method: e.toUpperCase(), url: t }, s);
    if (["GET", "DELETE", "HEAD"].includes(e.toUpperCase())) {
      if (r && Object.keys(r).length) {
        const d = a(r),
          c = t.includes("?") ? "&" : "?";
        i.url = `${t}${c}${d}`;
      }
    } else i.data = r;
    try {
      const { data: d } = await hr(i);
      n = d;
    } catch (d) {
      n = ((l = d == null ? void 0 : d.response) == null ? void 0 : l.data) || {
        error: !0,
        code: "INTERNAL_SERVER_ERROR",
        message: (d == null ? void 0 : d.message) || "Something went wrong :)",
      };
    }
    return n;
  },
  We = {
    get: (e, t = {}, r = {}) => wt("GET", e, t, r),
    post: (e, t = {}, r = {}) => wt("POST", e, t, r),
    put: (e, t = {}, r = {}) => wt("PUT", e, t, r),
    patch: (e, t = {}, r = {}) => wt("PATCH", e, t, r),
    delete: (e, t = {}, r = {}) => wt("DELETE", e, t, r),
    head: (e, t = {}, r = {}) => wt("HEAD", e, t, r),
  },
  It = () => _.useContext(Md),
  En = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  },
  Ct = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  },
  M0 =
    "bg-gradient-to-r from-orange-600/30 via-red-600/30 to-rose-600/30 backdrop-blur-2xl border-b border-white/10 shadow-2xl relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-orange-600/10 after:via-red-600/10 after:to-rose-600/10 after:animate-pulse",
  Db =
    "bg-gradient-to-br from-white/10 via-orange-50/20 to-rose-50/10 backdrop-blur-2xl border border-white/10 shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-orange-500/5 before:to-rose-500/5 before:animate-shimmer",
  Bb = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;
function no() {
  const { user: e } = It(),
    [t, r] = _.useState(!1),
    [s, n] = _.useState(!0);
  _.useEffect(() => {
    const l =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    n(l);
    const d = window.matchMedia("(prefers-color-scheme: dark)"),
      c = (u) => n(u.matches);
    return (
      d.addEventListener("change", c), () => d.removeEventListener("change", c)
    );
  }, []);
  const a = async () => {
      const { error: l } = await We.get("/auth/logout");
      l ||
        ((window.location.href =
          "https://auth.ajayos.in/sso/prudent?next=" +
          btoa(window.location.origin)),
        window.location.reload());
    },
    i = Array.from("FoodEase");
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx("style", { children: Bb }),
      o.jsx("nav", {
        className: M0,
        children: o.jsx("div", {
          className: "max-w-7xl mx-auto px-6 py-4 relative z-10",
          children: o.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              o.jsxs(oe.div, {
                className: "flex items-center gap-3",
                initial: { x: -50, opacity: 0 },
                animate: { x: 0, opacity: 1 },
                transition: { duration: 0.6, ease: "easeOut" },
                children: [
                  o.jsxs("div", {
                    className: "relative group",
                    children: [
                      o.jsx(oe.div, {
                        className: "relative",
                        animate: { rotate: [0, 360] },
                        transition: {
                          duration: 20,
                          repeat: 1 / 0,
                          ease: "linear",
                        },
                        children: o.jsx(uu, {
                          size: 32,
                          className:
                            "text-yellow-300 drop-shadow-lg group-hover:text-yellow-200 transition-colors",
                        }),
                      }),
                      o.jsx(oe.div, {
                        animate: { y: [0, -5, 0] },
                        transition: {
                          duration: 2,
                          repeat: 1 / 0,
                          ease: "easeInOut",
                        },
                        children: o.jsx(Uu, {
                          size: 28,
                          className:
                            "text-white absolute -right-1 -bottom-1 drop-shadow-md group-hover:scale-110 transition-transform",
                        }),
                      }),
                      o.jsx(oe.div, {
                        className:
                          "absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300/20 to-orange-300/20 blur-xl",
                        animate: {
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        },
                        transition: { duration: 3, repeat: 1 / 0 },
                      }),
                    ],
                  }),
                  o.jsx("div", {
                    className: "flex",
                    children: i.map((l, d) =>
                      o.jsx(
                        oe.span,
                        {
                          className:
                            "text-3xl font-black tracking-wider drop-shadow-lg",
                          style: {
                            background: `linear-gradient(45deg, hsl(${45 + d * 15}, 100%, 70%), hsl(${60 + d * 10}, 100%, 50%}))`,
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                          },
                          initial: { y: 20, opacity: 0, scale: 0.5 },
                          animate: {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            rotate: [0, -5, 5, 0],
                            color: [
                              `hsl(${45 + d * 15}, 100%, 70%)`,
                              `hsl(${60 + d * 10}, 100%, 50%)`,
                              `hsl(${45 + d * 15}, 100%, 70%)`,
                            ],
                          },
                          transition: {
                            delay: d * 0.1 + 0.2,
                            duration: 0.8,
                            repeat: 1 / 0,
                            repeatDelay: 3,
                          },
                          whileHover: {
                            scale: 1.1,
                            rotate: 10,
                            textShadow: "0 0 20px rgba(255, 215, 0, 0.8)",
                          },
                          children: l,
                        },
                        d,
                      ),
                    ),
                  }),
                ],
              }),
              o.jsxs(oe.div, {
                className: "text-center hidden md:block text-white/95",
                initial: "hidden",
                animate: "visible",
                variants: En,
                children: [
                  o.jsx(oe.h2, {
                    className:
                      "font-bold text-lg drop-shadow-md bg-gradient-to-r bg-clip-text from-orange-200 via-yellow-200 to-rose-200 text-transparent",
                    variants: Ct,
                    initial: { scale: 0.8, opacity: 0 },
                    animate: {
                      scale: 1,
                      opacity: 1,
                      rotate: [0, -2, 2, 0],
                      color: ["#fbbf24", "#ef4444", "#f59e0b", "#fbbf24"],
                    },
                    children: e.name,
                  }),
                  o.jsx(oe.p, {
                    className:
                      "text-sm bg-gradient-to-r bg-clip-text from-orange-100 via-rose-100 to-yellow-100 text-transparent",
                    variants: Ct,
                    initial: { y: 10, opacity: 0 },
                    whileHover: {
                      scale: 1.02,
                      color: "#f59e0b",
                      textShadow: "0 0 10px rgba(245, 158, 11, 0.7)",
                    },
                    children: e.number,
                  }),
                ],
              }),
              o.jsxs(oe.button, {
                onClick: () => r(!0),
                className: `${M0} relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 shadow-xl hover:border-orange-300/50 transition-all duration-300`,
                whileHover: {
                  scale: 1.05,
                  rotate: 5,
                  boxShadow: "0 0 20px rgba(255, 165, 0, 0.5)",
                },
                whileTap: { scale: 0.95 },
                children: [
                  o.jsx(oe.img, {
                    src: e.image,
                    alt: "User avatar",
                    className: "w-full h-full object-cover",
                    initial: { scale: 1.1 },
                    animate: { scale: 1 },
                    transition: {
                      duration: 1,
                      repeat: 1 / 0,
                      ease: "easeInOut",
                    },
                  }),
                  o.jsx(oe.div, {
                    className:
                      "absolute inset-0 rounded-full border-2 border-orange-300/30",
                    animate: { scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] },
                    transition: { duration: 2, repeat: 1 / 0 },
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      o.jsx(dm, {
        children:
          t &&
          o.jsxs(o.Fragment, {
            children: [
              o.jsx(oe.div, {
                className:
                  "fixed inset-0 bg-gradient-to-br from-black/70 via-rose-900/50 to-orange-900/50 backdrop-blur-lg z-40",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                onClick: () => r(!1),
              }),
              o.jsxs(oe.div, {
                className: `${Db} fixed z-50 top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl overflow-hidden`,
                initial: { scale: 0.7, opacity: 0, rotate: -10 },
                animate: { scale: 1, opacity: 1, rotate: 0 },
                exit: { scale: 0.7, opacity: 0, rotate: 10 },
                transition: { type: "spring", duration: 0.5, bounce: 0.3 },
                children: [
                  o.jsxs("div", {
                    className:
                      "relative bg-gradient-to-r from-orange-600/90 via-red-500/90 to-rose-500/90 p-6 text-center backdrop-blur-sm overflow-hidden",
                    children: [
                      o.jsx(oe.div, {
                        className:
                          "absolute inset-0 bg-gradient-to-r from-orange-400/20 to-rose-400/20",
                        animate: { x: ["-100%", "100%", "-100%"] },
                        transition: { duration: 4, repeat: 1 / 0 },
                      }),
                      o.jsx(oe.button, {
                        onClick: () => r(!1),
                        className:
                          "absolute top-4 right-4 text-white/90 hover:text-orange-200 transition-all duration-200 backdrop-blur-sm rounded-full p-1 hover:bg-white/10",
                        whileHover: { scale: 1.1, rotate: 90 },
                        whileTap: { scale: 0.9 },
                        children: o.jsx(Ls, { size: 22 }),
                      }),
                      o.jsx(oe.img, {
                        src: e.image,
                        alt: "Avatar",
                        className:
                          "w-24 h-24 rounded-full object-cover mx-auto border-4 border-white/80 shadow-2xl mb-4 relative z-10",
                        initial: { scale: 0, rotate: 180 },
                        animate: { scale: 1, rotate: 0 },
                        transition: {
                          type: "spring",
                          duration: 0.6,
                          delay: 0.1,
                        },
                        whileHover: {
                          scale: 1.05,
                          boxShadow: "0 0 30px rgba(255, 165, 0, 0.6)",
                        },
                      }),
                      o.jsx(oe.h2, {
                        className:
                          "text-2xl font-black text-white/95 relative z-10",
                        initial: { y: 10, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        transition: { delay: 0.3, duration: 0.4 },
                        children: e.name,
                      }),
                      o.jsx(oe.p, {
                        className: "text-orange-100/90 font-bold relative z-10",
                        initial: { y: 10, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        transition: { delay: 0.4, duration: 0.4 },
                        children: e != null && e.admin ? "Admin" : "User",
                      }),
                    ],
                  }),
                  o.jsxs(oe.div, {
                    className: "p-6 space-y-4 text-gray-100/95 relative z-10",
                    initial: "hidden",
                    animate: "visible",
                    variants: En,
                    exit: "hidden",
                    children: [
                      o.jsxs(oe.div, {
                        className: "space-y-3",
                        variants: En,
                        children: [
                          o.jsxs(oe.div, {
                            className:
                              "font-bold flex items-center justify-between gap-3 p-3 rounded-xl bg-gradient-to-r from-orange-500/10 to-rose-500/10 border border-white/10 hover:from-orange-500/20 hover:to-rose-500/20 transition-all text-white/90",
                            variants: Ct,
                            whileHover: { scale: 1.02, x: 5 },
                            children: [
                              o.jsx("span", {
                                className:
                                  "text-orange-300 flex items-center gap-2 text-lg",
                                children: "📞",
                              }),
                              o.jsx("span", {
                                className:
                                  "font-bold text-right flex-1 text-white",
                                children: e.number,
                              }),
                            ],
                          }),
                          o.jsxs(oe.div, {
                            className:
                              "font-bold flex items-center justify-between gap-3 p-3 rounded-xl bg-gradient-to-r from-orange-500/10 to-rose-500/10 border border-white/10 hover:from-orange-500/20 hover:to-rose-500/20 transition-all text-white/90",
                            variants: Ct,
                            whileHover: { scale: 1.02, x: 5 },
                            children: [
                              o.jsx("span", {
                                className:
                                  "text-orange-300 flex items-center gap-2 text-lg",
                                children: "📧",
                              }),
                              o.jsx("span", {
                                className:
                                  "font-bold text-right flex-1 text-white",
                                children: e.email,
                              }),
                            ],
                          }),
                          o.jsxs(oe.div, {
                            className:
                              "font-bold flex items-center justify-between gap-3 p-3 rounded-xl bg-gradient-to-r from-orange-500/10 to-rose-500/10 border border-white/10 hover:from-orange-500/20 hover:to-rose-500/20 transition-all text-white/90",
                            variants: Ct,
                            whileHover: { scale: 1.02, x: 5 },
                            children: [
                              o.jsx("span", {
                                className:
                                  "text-orange-300 flex items-center gap-2 text-lg",
                                children: "🆔",
                              }),
                              o.jsx("span", {
                                className:
                                  "font-mono bg-gradient-to-r from-orange-100/50 to-rose-100/50 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-bold text-black",
                                children: e.empNo,
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsx(oe.div, {
                        variants: Ct,
                        children: o.jsxs(oe.button, {
                          onClick: a,
                          className:
                            "w-full bg-gradient-to-r from-red-500/95 via-rose-500/95 to-red-600/95 text-white font-bold py-4 rounded-2xl hover:from-red-600/95 hover:to-rose-600/95 shadow-2xl flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm border border-white/20 overflow-hidden relative group",
                          whileHover: {
                            scale: 1.02,
                            boxShadow: "0 15px 35px rgba(239, 68, 68, 0.4)",
                            y: -2,
                          },
                          whileTap: { scale: 0.98 },
                          transition: { duration: 0.2 },
                          children: [
                            o.jsx(oe.div, {
                              className:
                                "absolute inset-0 bg-gradient-to-r from-red-400/20 to-rose-400/20",
                              animate: { x: ["-100%", "100%", "-100%"] },
                              transition: { duration: 2, repeat: 1 / 0 },
                            }),
                            o.jsx(pu, { size: 18, className: "relative z-10" }),
                            o.jsx("span", {
                              className: "relative z-10",
                              children: "Logout",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      }),
    ],
  });
}
function Sb() {
  const { user: e } = It(),
    t = Ld(),
    s = [
      {
        id: 1,
        name: "Calendar",
        icon: K0,
        color: "from-blue-600 via-cyan-500 to-blue-400",
        hoverColor: "hover:from-blue-700 hover:via-cyan-600 hover:to-blue-500",
        path: "/calendar",
        onlyAdmin: !1,
      },
      {
        id: 2,
        name: "Reports",
        icon: cu,
        color: "from-purple-600 via-pink-500 to-rose-400",
        hoverColor:
          "hover:from-purple-700 hover:via-pink-600 hover:to-rose-500",
        path: "/reports",
        onlyAdmin: !1,
      },
      {
        id: 3,
        name: "Booking",
        icon: Kd,
        color: "from-orange-600 via-amber-500 to-yellow-400",
        hoverColor:
          "hover:from-orange-700 hover:via-amber-600 hover:to-yellow-500",
        path: "/booking",
        onlyAdmin: !0,
      },
      {
        id: 4,
        name: "Manage",
        icon: Fu,
        color: "from-green-600 via-emerald-500 to-teal-400",
        hoverColor:
          "hover:from-green-700 hover:via-emerald-600 hover:to-teal-500",
        path: "/manage",
        onlyAdmin: !0,
      },
      {
        id: 5,
        name: "Users",
        icon: Vu,
        color: "from-red-600 via-rose-500 to-pink-400",
        hoverColor: "hover:from-red-700 hover:via-rose-600 hover:to-pink-500",
        path: "/users",
        onlyAdmin: !0,
      },
    ].filter((a) => !!((a.onlyAdmin && e != null && e.admin) || !a.onlyAdmin)),
    n = () =>
      o.jsx("div", {
        className: "group cursor-pointer transform transition-all duration-500",
        children: o.jsx("div", {
          className:
            "relative h-56 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-2xl overflow-hidden border-2 border-white/10 animate-pulse",
          children: o.jsxs("div", {
            className: "relative h-full p-6 flex flex-col justify-between",
            children: [
              o.jsxs("div", {
                children: [
                  o.jsx("div", {
                    className:
                      "p-3 bg-slate-700 rounded-xl w-12 h-12 mb-4 animate-pulse",
                  }),
                  o.jsx("div", {
                    className: "h-8 bg-slate-700 rounded w-3/4 animate-pulse",
                  }),
                ],
              }),
              o.jsx("div", {
                className: "w-full h-10 bg-slate-700 rounded-lg animate-pulse",
              }),
            ],
          }),
        }),
      });
  return e
    ? o.jsxs("div", {
        className: "min-h-screen bg-slate-950",
        children: [
          o.jsx(no, { user: e }),
          o.jsxs("div", {
            className: "relative min-h-[82vh] overflow-hidden",
            children: [
              o.jsxs("div", {
                className: "absolute inset-0 z-0",
                children: [
                  o.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-950",
                  }),
                  o.jsx("img", {
                    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                    alt: "Food background",
                    className:
                      "w-full h-full object-cover opacity-10 mix-blend-overlay",
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 py-12 relative z-10",
                children: [
                  o.jsxs("h1", {
                    className:
                      "text-5xl hidden md:block md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-pink-400 mb-3 drop-shadow-lg",
                    children: [
                      "Welcome Back, ",
                      e == null ? void 0 : e.name,
                      "!",
                    ],
                  }),
                  o.jsx("div", {
                    className:
                      "max-w-7xl hidden md:block mx-auto px-6 py-12 relative z-10",
                  }),
                  o.jsx("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6",
                    children: s.map((a) => {
                      const i = a.icon;
                      return o.jsx(
                        "div",
                        {
                          className:
                            "group cursor-pointer transform transition-all duration-500 hover:-translate-y-2",
                          children: o.jsx("div", {
                            className: `relative h-56 bg-gradient-to-br ${a.color} rounded-2xl shadow-2xl overflow-hidden ${a.hoverColor} transition-all duration-500 transform hover:scale-105 border-2 border-white/10`,
                            children: o.jsxs("div", {
                              className:
                                "relative h-full p-6 flex flex-col justify-between text-white",
                              children: [
                                o.jsxs("div", {
                                  children: [
                                    o.jsx("div", {
                                      className:
                                        "p-3 bg-white/20 backdrop-blur-md rounded-xl w-fit mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110",
                                      children: o.jsx(i, {
                                        size: 32,
                                        className:
                                          "group-hover:rotate-12 transition-transform duration-300",
                                      }),
                                    }),
                                    o.jsx("h3", {
                                      className:
                                        "text-2xl font-bold drop-shadow-md",
                                      children: a.name,
                                    }),
                                  ],
                                }),
                                o.jsx("button", {
                                  onClick: () => t(a.path),
                                  className:
                                    "w-full bg-white/20 backdrop-blur-md hover:bg-white/40 py-2 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 border border-white/30 hover:border-white/60 text-white shadow-lg",
                                  children: "Open",
                                }),
                              ],
                            }),
                          }),
                        },
                        a.id,
                      );
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    : o.jsxs("div", {
        className: "min-h-screen bg-slate-950",
        children: [
          o.jsx(no, { user: e }),
          o.jsxs("div", {
            className: "relative min-h-[82vh] overflow-hidden",
            children: [
              o.jsxs("div", {
                className: "absolute inset-0 z-0",
                children: [
                  o.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-950",
                  }),
                  o.jsx("img", {
                    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                    alt: "Food background",
                    className:
                      "w-full h-full object-cover opacity-10 mix-blend-overlay",
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 py-12 relative z-10",
                children: [
                  o.jsx("div", {
                    className:
                      "h-16 bg-slate-800 rounded-lg w-3/4 mb-8 animate-pulse hidden md:block",
                  }),
                  o.jsx("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6",
                    children: [1, 2, 3, 4, 5].map((a) => o.jsx(n, {}, a)),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
}
function _b() {
  const [e, t] = _.useState(null);
  return o.jsxs("div", {
    className:
      "w-full min-h-screen bg-slate-950 relative overflow-hidden flex flex-col",
    children: [
      o.jsxs("div", {
        className: "absolute inset-0 z-0",
        children: [
          o.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-br from-slate-950 via-orange-950/30 to-red-950/20",
          }),
          o.jsx("div", {
            className:
              "absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-orange-500 via-red-500 to-transparent rounded-full blur-3xl opacity-20 animate-pulse",
          }),
          o.jsx("div", {
            className:
              "absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-rose-500 via-orange-500 to-transparent rounded-full blur-3xl opacity-20 animate-pulse",
            style: { animationDelay: "1s" },
          }),
          o.jsx("div", {
            className:
              "absolute top-1/2 left-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-pink-500 to-transparent rounded-full blur-3xl opacity-15 animate-bounce",
            style: { animationDelay: "0.5s" },
          }),
        ],
      }),
      o.jsx("div", {
        className:
          "relative z-8 flex-1 flex items-center justify-center px-2 sm:px-4 py-4",
        children: o.jsxs("div", {
          className: "text-center max-w-md sm:max-w-2xl md:max-w-3xl w-full",
          children: [
            o.jsxs("div", {
              className:
                "mb-4 relative h-32 sm:h-40 md:h-48 flex items-center justify-center",
              children: [
                o.jsx("div", {
                  className:
                    "absolute w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-orange-500 to-rose-500 rounded-full blur-3xl opacity-30 animate-pulse",
                }),
                o.jsx("h1", {
                  className:
                    "text-6xl sm:text-8xl md:text-9xl lg:text-[140px] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-pink-400 drop-shadow-2xl animate-bounce relative z-10",
                  style: { animationDelay: "0s" },
                  children: "404",
                }),
              ],
            }),
            o.jsx("h2", {
              className:
                "text-2xl sm:text-3xl md:text-5xl font-black text-white mb-3 drop-shadow-lg animate-fade-in",
              children: "Oops! Lost in the Kitchen",
            }),
            o.jsx("p", {
              className:
                "text-base sm:text-lg md:text-xl text-orange-200 mb-4 font-semibold animate-fade-in px-2",
              style: { animationDelay: "0.1s" },
              children:
                "The page you're looking for has been served to the wrong table!",
            }),
            o.jsxs("div", {
              className:
                "mb-1 flex justify-center gap-4 sm:gap-6 md:gap-10 flex-wrap px-2",
              children: [
                o.jsx("div", {
                  className: "animate-float-slow",
                  children: o.jsx(Cu, {
                    size: 28,
                    "sm:size": 32,
                    "md:size": 40,
                    className: "text-orange-400",
                  }),
                }),
                o.jsx("div", {
                  className: "animate-float-slow",
                  style: { animationDelay: "0.5s" },
                  children: o.jsx(Od, {
                    size: 28,
                    "sm:size": 32,
                    "md:size": 40,
                    className: "text-rose-400",
                  }),
                }),
                o.jsx("div", {
                  className: "animate-float-slow",
                  style: { animationDelay: "1s" },
                  children: o.jsx(Id, {
                    size: 28,
                    "sm:size": 32,
                    "md:size": 40,
                    className: "text-orange-300",
                  }),
                }),
              ],
            }),
            o.jsx("div", {
              className:
                "bg-gradient-to-r from-orange-500/15 via-rose-500/15 to-pink-500/15 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-6 sm:mb-10 border border-orange-300/30 shadow-2xl animate-fade-in mx-2 sm:mx-0",
              style: { animationDelay: "0.2s" },
              children: o.jsx("p", {
                className:
                  "text-orange-100 text-sm sm:text-base md:text-lg leading-relaxed",
                children:
                  "The page you're searching for has disappeared like a perfectly cooked soufflé! Let's help you find your way back to delicious content.",
              }),
            }),
            o.jsxs("div", {
              className:
                "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-10 animate-fade-in px-2",
              children: [
                o.jsxs("button", {
                  onMouseEnter: () => t("back"),
                  onMouseLeave: () => t(null),
                  onClick: () => window.history.back(),
                  className: `flex items-center justify-center gap-2 px-5 sm:px-7 py-3 rounded-2xl font-bold transition-all duration-300 border-2 transform text-sm sm:text-base ${e === "back" ? "bg-white/30 backdrop-blur-md border-white scale-110 text-white shadow-2xl" : "bg-white/10 backdrop-blur-md border-white/40 text-orange-200 hover:text-white"}`,
                  children: [o.jsx(ho, { size: 18, "sm:size": 20 }), "Go Back"],
                }),
                o.jsxs("button", {
                  onMouseEnter: () => t("home"),
                  onMouseLeave: () => t(null),
                  onClick: () => (window.location.href = "/"),
                  className: `flex items-center justify-center gap-2 px-5 sm:px-7 py-3 rounded-2xl font-bold transition-all duration-300 border-2 transform text-sm sm:text-base ${e === "home" ? "bg-gradient-to-r from-orange-500 to-rose-500 border-orange-200 text-white scale-110 shadow-2xl" : "bg-gradient-to-r from-orange-600/40 to-rose-600/40 backdrop-blur-md border-orange-400/60 text-orange-200 hover:text-white"}`,
                  children: [
                    o.jsx(fu, { size: 18, "sm:size": 20 }),
                    "Back Home",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      o.jsxs("div", {
        className: "fixed inset-0 pointer-events-none z-0",
        children: [
          o.jsx("div", {
            className:
              "absolute top-16 sm:top-32 left-4 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 bg-orange-400/20 rounded-full animate-float-slow",
          }),
          o.jsx("div", {
            className:
              "absolute bottom-16 sm:bottom-32 right-4 sm:right-8 w-16 h-16 sm:w-24 sm:h-24 bg-rose-400/20 rounded-full animate-float-slow",
            style: { animationDelay: "1s" },
          }),
          o.jsx("div", {
            className:
              "absolute top-1/3 right-1/4 w-10 h-10 sm:w-12 sm:h-12 bg-pink-400/20 rounded-full animate-float-slow",
            style: { animationDelay: "0.5s" },
          }),
        ],
      }),
      o.jsx("style", {
        jsx: !0,
        children: `
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-25px) translateX(15px) rotate(5deg);
          }
          50% {
            transform: translateY(-50px) translateX(0px) rotate(10deg);
          }
          75% {
            transform: translateY(-25px) translateX(-15px) rotate(5deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        /* Ensure touch-friendly on mobile (Android/iOS) */
        @media (hover: none) and (pointer: coarse) {
          button {
            min-height: 48px;
            min-width: 120px;
          }
        }
      `,
      }),
    ],
  });
}
const Yt = "https://via.placeholder.com/64x64/4f46e5/ffffff?text=U",
  Fb = () =>
    o.jsx(o.Fragment, {
      children: o.jsxs("div", {
        className:
          "bg-gradient-to-br from-slate-800/60 via-indigo-900/40 to-purple-900/50 rounded-2xl p-6 border border-cyan-500/20 animate-pulse hover:animate-none transition-all duration-400 hover:scale-105 hover:shadow-2xl hover:border-violet-400/30",
        children: [
          o.jsxs("div", {
            className: "flex items-center gap-4 mb-4",
            children: [
              o.jsx("div", {
                className:
                  "w-16 h-16 rounded-full bg-gradient-to-br from-violet-700/80 to-cyan-600/60 animate-spin-slow",
              }),
              o.jsxs("div", {
                className: "flex-1 space-y-2",
                children: [
                  o.jsx("div", {
                    className:
                      "h-4 bg-gradient-to-r from-emerald-700/70 to-lime-600/60 rounded w-24 animate-pulse-delay-100",
                  }),
                  o.jsx("div", {
                    className:
                      "h-3 bg-gradient-to-r from-violet-700/70 to-cyan-600/60 rounded w-32 animate-pulse-delay-200",
                  }),
                  o.jsx("div", {
                    className:
                      "h-3 bg-gradient-to-r from-emerald-700/70 to-lime-600/60 rounded w-28 animate-pulse-delay-300",
                  }),
                ],
              }),
            ],
          }),
          o.jsxs("div", {
            className: "space-y-2 mb-4 pb-4 border-b border-white/5",
            children: [
              o.jsx("div", {
                className:
                  "h-3 bg-gradient-to-r from-violet-700/70 to-cyan-600/60 rounded animate-pulse-delay-400",
              }),
              o.jsx("div", {
                className:
                  "h-3 bg-gradient-to-r from-emerald-700/70 to-lime-600/60 rounded animate-pulse-delay-500",
              }),
              o.jsx("div", {
                className:
                  "h-3 bg-gradient-to-r from-violet-700/70 to-cyan-600/60 rounded animate-pulse-delay-600",
              }),
              o.jsx("div", {
                className:
                  "h-3 bg-gradient-to-r from-emerald-700/70 to-lime-600/60 rounded animate-pulse-delay-700",
              }),
              o.jsx("div", {
                className:
                  "h-3 bg-gradient-to-r from-violet-700/70 to-cyan-600/60 rounded w-3/4 animate-pulse-delay-800",
              }),
            ],
          }),
          o.jsxs("div", {
            className: "flex gap-2",
            children: [
              o.jsx("div", {
                className:
                  "flex-1 h-8 bg-gradient-to-r from-emerald-700/70 to-lime-600/60 rounded-lg animate-pulse-delay-900",
              }),
              o.jsx("div", {
                className:
                  "flex-1 h-8 bg-gradient-to-r from-violet-700/70 to-cyan-600/60 rounded-lg animate-pulse-delay-1000",
              }),
            ],
          }),
        ],
      }),
    }),
  Tb = ({ message: e, type: t, onClose: r }) => {
    _.useEffect(() => {
      const a = setTimeout(r, 3500);
      return () => clearTimeout(a);
    }, [r]);
    const s =
        t === "success"
          ? "bg-gradient-to-r from-emerald-600 via-green-500 to-lime-500"
          : t === "error"
            ? "bg-gradient-to-r from-rose-600 via-red-500 to-orange-500"
            : "bg-gradient-to-r from-violet-600 via-cyan-500 to-blue-500",
      n = t === "success" ? X0 : At;
    return o.jsxs("div", {
      className: `fixed bottom-8 left-1/2 -translate-x-1/2 ${s} text-white px-8 py-5 rounded-2xl shadow-2xl flex items-center gap-4 z-[100] animate-slide-in-up animate-pulse hover:animate-none transition-all duration-400 hover:scale-105 transform-gpu`,
      children: [
        o.jsx(n, { className: "w-6 h-6 animate-bounce" }),
        o.jsx("span", { className: "font-bold text-base", children: e }),
        o.jsx("button", {
          onClick: r,
          className:
            "ml-auto hover:scale-125 transition-transform duration-200",
          children: o.jsx(Ls, { className: "w-5 h-5" }),
        }),
      ],
    });
  };
function Rb() {
  const { user: e } = It(),
    [t, r] = _.useState([]),
    [s, n] = _.useState(!0),
    [a, i] = _.useState(null),
    [l, d] = _.useState(null),
    [c, u] = _.useState(!1),
    [f, h] = _.useState(null),
    [x, m] = _.useState(!1),
    [g, p] = _.useState({
      phone: "",
      email: "",
      name: "",
      empNo: "PTPL",
      amount: 20,
      isIphone: !1,
      status: !0,
      lastActive: new Date().toISOString(),
    }),
    [w, b] = _.useState({}),
    [v, y] = _.useState(!1),
    [C, E] = _.useState(""),
    [N, j] = _.useState("all"),
    [S, A] = _.useState(null),
    [B, k] = _.useState(null);
  _.useEffect(() => {
    T();
  }, []);
  const T = async () => {
      try {
        n(!0), i(null);
        const {
          error: D,
          data: z = [],
          message: P,
        } = await We.post(
          "/foodease/get-users",
          {},
          { headers: { "Content-Type": "application/json" } },
        );
        D ? (i(P), I(P, "error")) : r(z);
      } catch (D) {
        i(D.message), I("Failed to load users", "error");
      } finally {
        n(!1);
      }
    },
    I = (D, z = "success") => {
      k({ message: D, type: z });
    },
    $ = _.useMemo(
      () =>
        t.filter((D) => {
          var U, re, ne, V, he;
          const z = C.toLowerCase(),
            P =
              !C ||
              ((re = (U = D.name) == null ? void 0 : U.toLowerCase()) == null
                ? void 0
                : re.includes(z)) ||
              ((ne = D.number) == null ? void 0 : ne.includes(C)) ||
              ((he = (V = D.id) == null ? void 0 : V.toLowerCase()) == null
                ? void 0
                : he.includes(z)),
            Y =
              N === "all" ||
              (N === "iphone" && D.isIphone) ||
              (N === "android" && !D.isIphone);
          return P && Y;
        }),
      [t, C, N],
    ),
    H = () => {
      const D = {},
        z = g.empNo;
      return (
        (!z || !/^PTPL\d{0,3}$/.test(z)) &&
          (D.empNo = `Prudent ID must start with 'PTPL' followed by up to 3 digits (current: ${z})`),
        (!g.amount || g.amount < 0) &&
          (D.amount = "Amount must be a valid positive number"),
        b(D),
        Object.keys(D).length === 0
      );
    },
    W = async (D) => {
      A(null);
      try {
        m(!0);
        const { error: z } = await We.delete(`/foodease/users/${D}`, {
          headers: { "Content-Type": "application/json" },
        });
        if (z) throw new Error(z);
        await T(), I("User deleted successfully", "success");
      } catch (z) {
        console.log(z, "fail"), I("Failed to delete user", "error");
      } finally {
        m(!1);
      }
    },
    q = () => {
      h(null),
        p({
          phone: "",
          email: "",
          name: "",
          empNo: "PTPL",
          amount: 20,
          isIphone: !1,
          status: !0,
          lastActive: new Date().toISOString(),
        }),
        b({}),
        u(!0);
    },
    Z = (D) => {
      h(D), p(G(O({}, D), { empNo: D.empNo || D.id || "PTPL" })), b({}), u(!0);
    },
    K = async () => {
      if (H())
        try {
          m(!0);
          const D = O({}, g),
            { error: z, message: P } = await We[
              f != null && f.id ? "put" : "post"
            ](`/foodease/users${f != null && f.id ? `/${f.id}` : ""}`, D);
          z
            ? I(P, "error")
            : I(
                `User ${f != null && f.id ? "updated" : "created"} successfully`,
                "success",
              ),
            await T(),
            u(!1),
            h(null),
            p({
              phone: "",
              email: "",
              name: "",
              empNo: "PTPL",
              amount: 20,
              isIphone: !1,
              status: !0,
              lastActive: new Date().toISOString(),
            });
        } catch (D) {
          console.log(D, "fail"), I("Failed to save user", "error");
        } finally {
          m(!1);
        }
    },
    R = () => {
      u(!1),
        h(null),
        p({
          phone: "",
          email: "",
          name: "",
          empNo: "PTPL",
          amount: 20,
          isIphone: !1,
          status: !0,
          lastActive: new Date().toISOString(),
        }),
        b({});
    },
    M = g.empNo.substring(4) || "",
    L = (D) =>
      new Date(D).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  return o.jsxs("div", {
    className:
      "min-h-screen bg-gradient-to-br from-indigo-950 via-violet-950 to-rose-950 relative overflow-hidden",
    children: [
      o.jsxs("div", {
        className: "absolute inset-0 opacity-15",
        children: [
          o.jsx("div", {
            className:
              "absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse",
          }),
          o.jsx("div", {
            className:
              "absolute top-3/4 right-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse delay-1000",
          }),
          o.jsx("div", {
            className:
              "absolute bottom-1/4 left-3/4 w-64 h-64 bg-lime-500/20 rounded-full blur-3xl animate-pulse delay-2000",
          }),
          o.jsx("div", {
            className:
              "absolute top-1/2 right-1/2 w-48 h-48 bg-emerald-400/15 rounded-full blur-2xl animate-ping delay-3000",
          }),
          o.jsx("div", {
            className:
              "absolute bottom-1/2 left-1/2 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl animate-pulse delay-1500",
          }),
        ],
      }),
      o.jsxs("div", {
        className:
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10",
        children: [
          o.jsxs("div", {
            className:
              "flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 sm:mb-12",
            children: [
              o.jsxs("div", {
                className: "group flex flex-col items-start",
                children: [
                  o.jsx("h1", {
                    className:
                      "text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-lime-400 transition-all duration-500 group-hover:scale-105 group-hover:from-violet-400 group-hover:via-cyan-400 group-hover:to-rose-400",
                    children: "Manage Users",
                  }),
                  o.jsx("p", {
                    className:
                      "text-gray-300 text-sm mt-2 group-hover:text-emerald-300 transition-colors duration-500",
                    children:
                      "Seamlessly manage and organize your system users with advanced filtering",
                  }),
                ],
              }),
              o.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto",
                children: [
                  o.jsxs("button", {
                    onClick: () => y(!0),
                    className:
                      "flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md text-white font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-white/10 hover:bg-violet-500/20 hover:border-violet-400/40 hover:shadow-lg hover:scale-105 transition-all duration-400 flex-1 sm:flex-none group",
                    children: [
                      o.jsx(Rr, {
                        className:
                          "w-4 h-4 group-hover:rotate-12 transition-transform duration-300",
                      }),
                      o.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Search",
                      }),
                    ],
                  }),
                  o.jsxs("button", {
                    onClick: q,
                    className:
                      "flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-lg hover:from-violet-600 hover:to-cyan-600 hover:shadow-2xl hover:scale-105 transition-all duration-400 flex-1 sm:flex-none group",
                    children: [
                      o.jsx(Eu, {
                        className:
                          "w-4 h-4 group-hover:scale-110 transition-transform duration-300",
                      }),
                      o.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Add User",
                      }),
                    ],
                  }),
                  o.jsxs("button", {
                    onClick: T,
                    className:
                      "flex items-center justify-center gap-2 bg-gradient-to-r from-lime-600 to-emerald-600 text-white font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-lg hover:from-orange-600 hover:to-lime-600 hover:shadow-2xl hover:scale-105 transition-all duration-400 flex-1 sm:flex-none group",
                    children: [
                      o.jsx(Bs, {
                        className:
                          "w-4 h-4 group-hover:rotate-180 transition-transform duration-300",
                      }),
                      o.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Refresh",
                      }),
                    ],
                  }),
                  o.jsxs("button", {
                    onClick: () => window.history.back(),
                    className:
                      "flex items-center justify-center gap-2 bg-gradient-to-r from-slate-600 to-gray-500 text-white font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-lg hover:from-violet-600 hover:to-slate-600 hover:shadow-2xl hover:scale-105 transition-all duration-400 flex-1 sm:flex-none group",
                    children: [
                      o.jsx(ho, {
                        className:
                          "w-4 h-4 group-hover:translate-x-[-2px] transition-transform duration-300",
                      }),
                      o.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Back",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          a &&
            o.jsxs("div", {
              className:
                "bg-rose-600/20 border border-rose-500/50 rounded-xl p-4 mb-6 text-rose-200 flex items-center gap-3 animate-bounce hover:animate-none transition-all duration-400 justify-center",
              children: [
                o.jsx(At, { className: "w-5 h-5 flex-shrink-0" }),
                o.jsx("span", { children: a }),
              ],
            }),
          o.jsx("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 auto-rows-fr",
            children: s
              ? Array.from({ length: 8 }, (D, z) => o.jsx(Fb, {}, z))
              : t.length > 0
                ? $.map((D) =>
                    o.jsxs(
                      "div",
                      {
                        className:
                          "group relative bg-gradient-to-br from-indigo-800/60 via-violet-800/40 to-rose-900/50 rounded-2xl p-5 sm:p-6 border border-white/10 shadow-xl backdrop-blur-md hover:shadow-2xl hover:border-emerald-400/40 transition-all duration-600 cursor-pointer hover:scale-105 hover:-translate-y-2 overflow-hidden",
                        onClick: () => d(D),
                        children: [
                          o.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/30 to-violet-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-600 -skew-x-12 transform-gpu",
                          }),
                          o.jsxs("div", {
                            className:
                              "flex items-start gap-4 mb-4 relative z-10",
                            children: [
                              o.jsxs("div", {
                                className: "relative flex-shrink-0",
                                children: [
                                  o.jsx("img", {
                                    src: D.image,
                                    alt: D.name,
                                    className:
                                      "w-16 h-16 rounded-full object-cover border-2 border-cyan-500/50 group-hover:border-emerald-400/60 shadow-md transition-all duration-400 hover:rotate-6 hover:scale-110",
                                    onError: (z) => {
                                      z.target.src = Yt;
                                    },
                                  }),
                                  o.jsx("div", {
                                    className: `absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-indigo-900 transition-all duration-400 ${D.status ? "bg-emerald-500 group-hover:scale-125 animate-pulse" : "bg-rose-500 group-hover:scale-125 animate-pulse"}`,
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                className: "min-w-0 flex-1 space-y-1",
                                children: [
                                  o.jsx("h3", {
                                    className:
                                      "text-lg font-bold text-white group-hover:text-emerald-300 truncate transition-all duration-400",
                                    children: D.name,
                                  }),
                                  o.jsx("p", {
                                    className:
                                      "text-rose-200/80 text-sm truncate transition-colors duration-400 group-hover:text-rose-300",
                                    children: D.phone,
                                  }),
                                  o.jsx("p", {
                                    className:
                                      "text-gray-400 text-xs truncate transition-colors duration-400 group-hover:text-gray-200",
                                    children: D.email,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className:
                              "space-y-2 mb-4 pb-4 border-b border-white/5 relative z-10",
                            children: [
                              o.jsxs("div", {
                                className:
                                  "flex items-center justify-between text-xs sm:text-sm",
                                children: [
                                  o.jsxs("span", {
                                    className:
                                      "text-gray-400 flex items-center gap-1",
                                    children: [
                                      o.jsx(rn, { className: "w-3 h-3" }),
                                      " ID:",
                                    ],
                                  }),
                                  o.jsx("span", {
                                    className:
                                      "font-mono text-white text-xs bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-lime-500/20 px-2 py-1 rounded transition-all duration-400 group-hover:scale-105",
                                    children: D.id,
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                className:
                                  "flex items-center justify-between text-xs sm:text-sm",
                                children: [
                                  o.jsxs("span", {
                                    className:
                                      "text-gray-400 flex items-center gap-1",
                                    children: [
                                      o.jsx(Tr, { className: "w-3 h-3" }),
                                      " Amount:",
                                    ],
                                  }),
                                  o.jsxs("span", {
                                    className:
                                      "text-lime-400 font-bold transition-all duration-400 group-hover:text-lime-300",
                                    children: ["₹", D.amount],
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                className:
                                  "flex items-center justify-between text-xs sm:text-sm",
                                children: [
                                  o.jsxs("span", {
                                    className:
                                      "text-gray-400 flex items-center gap-1",
                                    children: [
                                      o.jsx(tn, { className: "w-3 h-3" }),
                                      " Status:",
                                    ],
                                  }),
                                  o.jsx("span", {
                                    className: `font-medium transition-all duration-400 ${D.status ? "text-emerald-400 group-hover:scale-110" : "text-rose-400 group-hover:scale-110"}`,
                                    children: D.status
                                      ? "✅ Active"
                                      : "❌ Inactive",
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                className:
                                  "flex items-center justify-between text-xs sm:text-sm",
                                children: [
                                  o.jsxs("span", {
                                    className:
                                      "text-gray-400 flex items-center gap-1",
                                    children: [
                                      o.jsx(qt, { className: "w-3 h-3" }),
                                      " Device:",
                                    ],
                                  }),
                                  o.jsx("span", {
                                    className:
                                      "text-white transition-all duration-400 group-hover:text-cyan-300",
                                    children: D.isIphone
                                      ? "🍎 iPhone"
                                      : "📱 Android",
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                className:
                                  "flex items-center justify-between text-xs sm:text-sm",
                                children: [
                                  o.jsxs("span", {
                                    className:
                                      "text-gray-400 flex items-center gap-1",
                                    children: [
                                      o.jsx(Jt, { className: "w-3 h-3" }),
                                      " Last Active:",
                                    ],
                                  }),
                                  o.jsx("span", {
                                    className:
                                      "text-violet-400 text-xs font-medium transition-all duration-400 group-hover:text-violet-300",
                                    children: L(D.lastActive),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "flex gap-2 relative z-10",
                            children: [
                              o.jsx("button", {
                                onClick: (z) => {
                                  z.stopPropagation(), Z(D);
                                },
                                className:
                                  "flex-1 bg-gradient-to-r from-violet-600/30 to-cyan-600/30 hover:from-violet-600/50 hover:to-cyan-600/50 border border-violet-500/40 hover:border-emerald-400/50 p-2.5 rounded-lg text-violet-300 hover:text-cyan-200 transition-all duration-400 font-medium text-sm group/edit hover:scale-105",
                                children: o.jsx(Fn, {
                                  className: "w-4 h-4 mx-auto",
                                }),
                              }),
                              o.jsx("button", {
                                onClick: (z) => {
                                  z.stopPropagation(), A(D.id);
                                },
                                className:
                                  "flex-1 bg-gradient-to-r from-rose-600/30 to-orange-600/30 hover:from-rose-600/50 hover:to-orange-600/50 border border-rose-500/40 hover:border-lime-400/50 p-2.5 rounded-lg text-rose-300 hover:text-orange-200 transition-all duration-400 font-medium text-sm group/delete hover:scale-105",
                                children: o.jsx(Ls, {
                                  className: "w-4 h-4 mx-auto",
                                }),
                              }),
                            ],
                          }),
                        ],
                      },
                      D.id,
                    ),
                  )
                : o.jsxs("div", {
                    className:
                      "col-span-full text-center py-16 relative z-10 flex flex-col items-center justify-center",
                    children: [
                      o.jsx(Fn, {
                        className: "w-16 h-16 text-gray-400 mb-4 animate-pulse",
                      }),
                      o.jsx("p", {
                        className:
                          "text-white text-lg font-semibold animate-pulse",
                        children: "No users found",
                      }),
                      o.jsx("p", {
                        className: "text-gray-400 mt-2",
                        children: "Click the ➕ button to add your first user",
                      }),
                    ],
                  }),
          }),
        ],
      }),
      l &&
        o.jsxs(o.Fragment, {
          children: [
            o.jsx("div", {
              className:
                "fixed inset-0 bg-black/70 backdrop-blur-md z-40 transition-all duration-500 animate-fade-in",
              onClick: () => d(null),
            }),
            o.jsxs("div", {
              className:
                "fixed z-50 top-1/2 left-1/2 w-[95vw] max-w-lg -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-indigo-800 via-violet-800 to-rose-900 rounded-3xl shadow-2xl border border-emerald-500/30 overflow-hidden animate-slide-in-up transform-gpu",
              children: [
                o.jsxs("div", {
                  className:
                    "bg-gradient-to-r from-cyan-600 via-emerald-500 to-lime-500 p-6 text-center relative",
                  children: [
                    o.jsx("button", {
                      onClick: () => d(null),
                      className:
                        "absolute top-4 right-4 text-white hover:scale-125 transition-all duration-300 hover:rotate-90 text-2xl",
                      children: "✕",
                    }),
                    o.jsx("img", {
                      src: l.image || Yt,
                      alt: "Avatar",
                      className:
                        "w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-xl mb-4 hover:scale-110 transition-all duration-400",
                      onError: (D) => {
                        D.target.src = Yt;
                      },
                    }),
                    o.jsx("h2", {
                      className:
                        "text-2xl font-bold text-white transition-all duration-400 hover:text-emerald-200",
                      children: l.name,
                    }),
                    o.jsxs("p", {
                      className:
                        "text-rose-100 text-sm mt-1 hover:text-rose-200 transition-colors duration-400 flex items-center justify-center gap-2",
                      children: [
                        o.jsx(yu, { className: "w-4 h-4" }),
                        " ",
                        l.phone,
                      ],
                    }),
                    o.jsxs("p", {
                      className:
                        "text-rose-100 text-xs hover:text-rose-200 transition-colors duration-400 flex items-center justify-center gap-2",
                      children: [
                        o.jsx(bu, { className: "w-4 h-4" }),
                        " ",
                        l.email,
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className:
                    "p-6 text-white space-y-4 max-h-96 overflow-y-auto",
                  children: [
                    o.jsxs("div", {
                      className:
                        "bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-emerald-500/10 transition-all duration-400",
                      children: [
                        o.jsxs("p", {
                          className:
                            "text-gray-400 text-xs mb-1 flex items-center gap-1",
                          children: [
                            o.jsx(rn, { className: "w-4 h-4" }),
                            " ID",
                          ],
                        }),
                        o.jsx("p", {
                          className:
                            "font-mono text-sm font-semibold hover:text-cyan-300 transition-colors duration-400",
                          children: l.id,
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className:
                        "bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-lime-500/10 transition-all duration-400",
                      children: [
                        o.jsxs("p", {
                          className:
                            "text-gray-400 text-xs mb-1 flex items-center gap-1",
                          children: [
                            o.jsx(Tr, { className: "w-4 h-4" }),
                            " Amount",
                          ],
                        }),
                        o.jsxs("p", {
                          className:
                            "text-lime-400 font-bold text-lg hover:text-lime-300 transition-colors duration-400",
                          children: ["₹", l.amount],
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: `bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-400 ${l.status ? "border-emerald-500/30" : "border-rose-500/30"}`,
                      children: [
                        o.jsxs("p", {
                          className:
                            "text-gray-400 text-xs mb-1 flex items-center gap-1",
                          children: [
                            o.jsx(tn, { className: "w-4 h-4" }),
                            " Status",
                          ],
                        }),
                        o.jsx("span", {
                          className: `font-medium transition-all duration-400 ${l.status ? "text-emerald-400 hover:scale-110" : "text-rose-400 hover:scale-110"}`,
                          children: l.status ? "✅ Active" : "❌ Inactive",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className:
                        "bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-violet-500/10 transition-all duration-400",
                      children: [
                        o.jsxs("p", {
                          className:
                            "text-gray-400 text-xs mb-1 flex items-center gap-1",
                          children: [
                            o.jsx(qt, { className: "w-4 h-4" }),
                            " Device",
                          ],
                        }),
                        o.jsx("span", {
                          className:
                            "font-medium hover:text-emerald-300 transition-colors duration-400",
                          children: l.isIphone ? "🍎 iPhone" : "📱 Android",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className:
                        "bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-cyan-500/10 transition-all duration-400",
                      children: [
                        o.jsxs("p", {
                          className:
                            "text-gray-400 text-xs mb-1 flex items-center gap-1",
                          children: [
                            o.jsx(Jt, { className: "w-4 h-4" }),
                            " Last Active",
                          ],
                        }),
                        o.jsx("p", {
                          className:
                            "text-violet-400 font-medium text-sm hover:text-violet-300 transition-colors duration-400",
                          children: L(l.lastActive),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      c &&
        o.jsxs(o.Fragment, {
          children: [
            o.jsx("div", {
              className:
                "fixed inset-0 bg-black/70 backdrop-blur-md z-40 transition-all duration-500 animate-fade-in",
              onClick: R,
            }),
            o.jsxs("div", {
              className:
                "fixed z-50 top-1/2 left-1/2 w-[95vw] max-w-lg -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-indigo-800 via-violet-800 to-rose-900 rounded-3xl shadow-2xl border-2 border-cyan-500/40 overflow-hidden max-h-[90vh] flex flex-col animate-slide-in-up transform-gpu",
              children: [
                o.jsxs("div", {
                  className:
                    "bg-gradient-to-r from-cyan-600 via-emerald-500 to-lime-500 p-6 text-center flex-shrink-0",
                  children: [
                    o.jsx("h2", {
                      className:
                        "text-2xl font-bold text-white hover:text-violet-200 transition-colors duration-400",
                      children: f ? "Edit User" : "Add New User",
                    }),
                    o.jsx("p", {
                      className:
                        "text-rose-100 text-sm mt-1 hover:text-rose-200 transition-colors duration-400",
                      children: f
                        ? `Updating: ${f.name}`
                        : "Enter details below – Name, Phone, Email auto-generated from Prudent ID",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "p-6 space-y-4 text-white overflow-y-auto flex-1",
                  children: [
                    o.jsxs("div", {
                      className: "group",
                      children: [
                        o.jsxs("label", {
                          className:
                            "block text-xs font-semibold text-cyan-300 mb-2 group-hover:text-emerald-200 transition-colors duration-400 flex items-center gap-1",
                          children: [
                            o.jsx(rn, { className: "w-4 h-4" }),
                            " Prudent ID Suffix (0-3 digits)",
                          ],
                        }),
                        o.jsx("input", {
                          type: "text",
                          placeholder: "e.g., 001",
                          value: M,
                          onChange: (D) =>
                            p(
                              G(O({}, g), {
                                empNo: `PTPL${D.target.value.replace(/\D/g, "").slice(0, 3)}`,
                              }),
                            ),
                          className: `w-full p-3 rounded-lg bg-gradient-to-r from-slate-700/60 to-violet-800/50 border-2 text-white placeholder-gray-500 focus:ring-2 transition-all duration-400 outline-none hover:border-lime-400/50 hover:shadow-md ${w.empNo ? "border-rose-500 focus:ring-rose-500/50" : "border-cyan-500/30 focus:border-emerald-400 focus:ring-emerald-500/50"}`,
                        }),
                        o.jsxs("p", {
                          className:
                            "text-xs text-gray-500 mt-1 hover:text-gray-300 transition-colors duration-400 flex items-center gap-1",
                          children: [
                            o.jsx("span", { children: "Full ID:" }),
                            " ",
                            o.jsx("span", {
                              className: "font-mono text-emerald-300",
                              children: g.empNo,
                            }),
                          ],
                        }),
                        w.empNo &&
                          o.jsxs("p", {
                            className:
                              "text-rose-400 text-xs mt-1 animate-pulse flex items-center gap-1",
                            children: [
                              o.jsx(At, { className: "w-4 h-4" }),
                              " ",
                              w.empNo,
                            ],
                          }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "group",
                      children: [
                        o.jsxs("label", {
                          className:
                            "block text-xs font-semibold text-cyan-300 mb-2 group-hover:text-emerald-200 transition-colors duration-400 flex items-center gap-1",
                          children: [
                            o.jsx(Tr, { className: "w-4 h-4" }),
                            " Amount (₹)",
                          ],
                        }),
                        o.jsx("input", {
                          type: "number",
                          placeholder: "e.g., 20",
                          value: g.amount,
                          onChange: (D) =>
                            p(
                              G(O({}, g), {
                                amount: Math.max(
                                  0,
                                  parseInt(D.target.value) || 0,
                                ),
                              }),
                            ),
                          min: "0",
                          className: `w-full p-3 rounded-lg bg-gradient-to-r from-slate-700/60 to-violet-800/50 border-2 text-white placeholder-gray-500 focus:ring-2 transition-all duration-400 outline-none hover:border-lime-400/50 hover:shadow-md ${w.amount ? "border-rose-500 focus:ring-rose-500/50" : "border-lime-500/30 focus:border-lime-400 focus:ring-lime-500/50"}`,
                        }),
                        w.amount &&
                          o.jsxs("p", {
                            className:
                              "text-rose-400 text-xs mt-1 animate-pulse flex items-center gap-1",
                            children: [
                              o.jsx(At, { className: "w-4 h-4" }),
                              " ",
                              w.amount,
                            ],
                          }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        o.jsxs("label", {
                          className:
                            "block text-xs font-semibold text-cyan-300 mb-3 hover:text-emerald-200 transition-colors duration-400 flex items-center gap-1",
                          children: [
                            o.jsx(qt, { className: "w-4 h-4" }),
                            " Device Type",
                          ],
                        }),
                        o.jsxs("div", {
                          className: "flex flex-col sm:flex-row gap-3",
                          children: [
                            o.jsxs("label", {
                              className: `flex items-center gap-3 p-4 rounded-xl cursor-pointer border-2 transition-all duration-400 font-medium hover:scale-105 hover:shadow-md w-full sm:w-auto ${g.isIphone ? "bg-violet-500/40 border-violet-400 bg-gradient-to-r from-violet-500/40 to-cyan-500/40" : "bg-white/5 border-white/20 hover:border-emerald-400/30 hover:bg-emerald-500/10"}`,
                              children: [
                                o.jsx("input", {
                                  type: "radio",
                                  name: "device",
                                  checked: g.isIphone,
                                  onChange: () =>
                                    p(G(O({}, g), { isIphone: !0 })),
                                  className:
                                    "w-5 h-5 cursor-pointer text-violet-500",
                                }),
                                o.jsx(ya, { className: "w-5 h-5" }),
                                " iPhone",
                              ],
                            }),
                            o.jsxs("label", {
                              className: `flex items-center gap-3 p-4 rounded-xl cursor-pointer border-2 transition-all duration-400 font-medium hover:scale-105 hover:shadow-md w-full sm:w-auto ${g.isIphone ? "bg-white/5 border-white/20 hover:border-violet-400/30 hover:bg-violet-500/10" : "bg-emerald-500/40 border-emerald-400 bg-gradient-to-r from-emerald-500/40 to-lime-500/40"}`,
                              children: [
                                o.jsx("input", {
                                  type: "radio",
                                  name: "device",
                                  checked: !g.isIphone,
                                  onChange: () =>
                                    p(G(O({}, g), { isIphone: !1 })),
                                  className:
                                    "w-5 h-5 cursor-pointer text-emerald-500",
                                }),
                                o.jsx(qt, { className: "w-5 h-5" }),
                                " Android",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        o.jsxs("label", {
                          className:
                            "block text-xs font-semibold text-cyan-300 mb-3 hover:text-emerald-200 transition-colors duration-400 flex items-center gap-1",
                          children: [
                            o.jsx(tn, { className: "w-4 h-4" }),
                            " Account Status",
                          ],
                        }),
                        o.jsxs("div", {
                          className: "flex flex-col sm:flex-row gap-3",
                          children: [
                            o.jsxs("label", {
                              className: `flex items-center gap-3 p-4 rounded-xl cursor-pointer border-2 transition-all duration-400 font-medium hover:scale-105 hover:shadow-md w-full sm:w-auto ${g.status ? "bg-emerald-500/40 border-emerald-400 bg-gradient-to-r from-emerald-500/40 to-lime-500/40" : "bg-white/5 border-white/20 hover:border-rose-400/30 hover:bg-rose-500/10"}`,
                              children: [
                                o.jsx("input", {
                                  type: "radio",
                                  name: "status",
                                  checked: g.status,
                                  onChange: () =>
                                    p(G(O({}, g), { status: !0 })),
                                  className:
                                    "w-5 h-5 cursor-pointer text-emerald-500",
                                }),
                                o.jsx(X0, { className: "w-5 h-5" }),
                                " Active",
                              ],
                            }),
                            o.jsxs("label", {
                              className: `flex items-center gap-3 p-4 rounded-xl cursor-pointer border-2 transition-all duration-400 font-medium hover:scale-105 hover:shadow-md w-full sm:w-auto ${g.status ? "bg-white/5 border-white/20 hover:border-emerald-400/30 hover:bg-emerald-500/10" : "bg-rose-500/40 border-rose-400 bg-gradient-to-r from-rose-500/40 to-orange-500/40"}`,
                              children: [
                                o.jsx("input", {
                                  type: "radio",
                                  name: "status",
                                  checked: !g.status,
                                  onChange: () =>
                                    p(G(O({}, g), { status: !1 })),
                                  className:
                                    "w-5 h-5 cursor-pointer text-rose-500",
                                }),
                                o.jsx(At, { className: "w-5 h-5" }),
                                " Inactive",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className:
                    "p-6 bg-gradient-to-r from-cyan-600 via-emerald-500 to-lime-500 flex gap-4 flex-shrink-0",
                  children: [
                    o.jsxs("button", {
                      onClick: K,
                      disabled: x,
                      className:
                        "flex-1 bg-white/20 hover:bg-white/40 disabled:bg-white/10 text-white font-bold px-6 py-3 rounded-xl transition-all duration-400 hover:scale-105 disabled:scale-100 flex items-center justify-center gap-2",
                      children: [
                        x
                          ? o.jsx(Bs, { className: "w-4 h-4 animate-spin" })
                          : null,
                        o.jsx("span", {
                          children: x
                            ? "Saving..."
                            : f
                              ? "Update User"
                              : "Add User",
                        }),
                      ],
                    }),
                    o.jsx("button", {
                      onClick: R,
                      disabled: x,
                      className:
                        "flex-1 bg-rose-500/30 hover:bg-rose-500/50 disabled:bg-rose-500/20 text-white font-bold px-6 py-3 rounded-xl transition-all duration-400 hover:scale-105 disabled:scale-100",
                      children: "Cancel",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      S &&
        o.jsxs(o.Fragment, {
          children: [
            o.jsx("div", {
              className:
                "fixed inset-0 bg-black/70 backdrop-blur-md z-40 transition-all duration-500 animate-fade-in",
              onClick: () => A(null),
            }),
            o.jsxs("div", {
              className:
                "fixed z-50 top-1/2 left-1/2 w-[95vw] max-w-sm -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-indigo-800 via-violet-800 to-rose-900 rounded-3xl shadow-2xl border border-rose-500/30 overflow-hidden animate-slide-in-up transform-gpu",
              children: [
                o.jsxs("div", {
                  className:
                    "bg-gradient-to-r from-rose-600 via-red-500 to-orange-500 p-6 text-center",
                  children: [
                    o.jsx(At, {
                      className:
                        "w-12 h-12 text-white mx-auto mb-2 animate-bounce",
                    }),
                    o.jsx("h2", {
                      className: "text-2xl font-bold text-white",
                      children: "Confirm Delete",
                    }),
                    o.jsx("p", {
                      className: "text-rose-100 text-sm mt-2",
                      children:
                        "This action is irreversible. Are you absolutely sure?",
                    }),
                  ],
                }),
                o.jsx("div", {
                  className: "p-6 text-white space-y-4",
                  children: o.jsxs("div", {
                    className: "flex gap-3",
                    children: [
                      o.jsx("button", {
                        onClick: () => A(null),
                        disabled: x,
                        className:
                          "flex-1 bg-white/10 hover:bg-white/30 disabled:bg-white/5 border border-white/20 text-white font-bold py-3 rounded-xl transition-all duration-400 hover:scale-105 disabled:scale-100",
                        children: "No, Keep It",
                      }),
                      o.jsx("button", {
                        onClick: () => W(S),
                        disabled: x,
                        className:
                          "flex-1 bg-rose-600 hover:bg-rose-700 disabled:bg-rose-600/60 text-white font-bold py-3 rounded-xl transition-all duration-400 hover:scale-105 disabled:scale-100 group",
                        children: x ? "Deleting..." : "Yes, Delete",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      v &&
        o.jsxs(o.Fragment, {
          children: [
            o.jsx("div", {
              className:
                "fixed inset-0 bg-gradient-to-br from-cyan-900/50 via-violet-900/40 to-rose-900/50 backdrop-blur-xl z-40 transition-all duration-500 animate-fade-in",
              onClick: () => y(!1),
            }),
            o.jsxs("div", {
              className:
                "fixed z-50 top-1/2 left-1/2 w-[95vw] sm:w-[90vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-indigo-950 via-cyan-950/30 to-rose-950/30 rounded-3xl shadow-2xl border border-white/10 overflow-hidden max-h-[85vh] flex flex-col animate-slide-in-up transform-gpu",
              children: [
                o.jsx("div", {
                  className:
                    "relative bg-gradient-to-r from-cyan-600 via-emerald-500 to-lime-500 px-2 py-8 flex-shrink-0",
                }),
                o.jsxs("div", {
                  className:
                    "p-6 overflow-y-auto flex-1 space-y-6 bg-gradient-to-b from-indigo-900/60 via-transparent to-rose-950/30",
                  children: [
                    o.jsxs("div", {
                      className: "relative group",
                      children: [
                        o.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-r from-cyan-600/30 to-emerald-600/30 rounded-2xl blur-lg opacity-0 group-focus-within:opacity-100 transition-all duration-600",
                        }),
                        o.jsxs("div", {
                          className: "relative flex items-center",
                          children: [
                            o.jsx(Rr, {
                              className:
                                "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rose-300 group-focus-within:rotate-90 group-focus-within:text-emerald-300 transition-transform duration-400",
                            }),
                            o.jsx("input", {
                              type: "text",
                              placeholder:
                                "🔍 Search by name, phone, ID, or email...",
                              value: C,
                              onChange: (D) => E(D.target.value),
                              className:
                                "w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 text-white placeholder-gray-400 focus:border-lime-500/60 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-400 outline-none group-hover:border-violet-400/40",
                              autoFocus: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsx("div", {
                      className:
                        "flex flex-wrap gap-3 justify-center sm:justify-start",
                      children: [
                        {
                          value: "all",
                          label: "All Users",
                          icon: "👥",
                          color: "from-cyan-600 to-emerald-600",
                        },
                        {
                          value: "iphone",
                          label: "iPhone Users",
                          icon: "🍎",
                          color: "from-violet-600 to-rose-600",
                        },
                        {
                          value: "android",
                          label: "Android Users",
                          icon: "📱",
                          color: "from-emerald-600 to-lime-600",
                        },
                      ].map((D) =>
                        o.jsxs(
                          "label",
                          {
                            className: `flex items-center gap-2 px-4 py-3 rounded-xl cursor-pointer transition-all duration-400 font-semibold text-sm border backdrop-blur-sm hover:scale-105 hover:shadow-lg ${N === D.value ? `bg-gradient-to-r ${D.color} border-white/30 text-white shadow-lg` : "bg-white/10 border-white/20 text-gray-300 hover:bg-white/20"}`,
                            children: [
                              o.jsx("input", {
                                type: "radio",
                                name: "searchfilter",
                                value: D.value,
                                checked: N === D.value,
                                onChange: (z) => j(z.target.value),
                                className: "w-4 h-4 cursor-pointer",
                              }),
                              o.jsxs("span", {
                                className: "text-sm",
                                children: [D.icon, " ", D.label],
                              }),
                            ],
                          },
                          D.value,
                        ),
                      ),
                    }),
                    o.jsx("div", {
                      className: "space-y-4",
                      children:
                        $.length > 0
                          ? $.map((D) =>
                              o.jsxs(
                                "div",
                                {
                                  onClick: () => {
                                    y(!1), d(D);
                                  },
                                  className:
                                    "group relative p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-600 overflow-hidden border border-white/10 hover:border-emerald-500/50 bg-white/5 hover:bg-emerald-500/10 hover:shadow-2xl hover:-translate-y-2",
                                  children: [
                                    o.jsx("div", {
                                      className:
                                        "absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-emerald-500/20 to-lime-500/20 opacity-0 group-hover:opacity-100 transition-all duration-600 -skew-x-12 transform-gpu",
                                    }),
                                    o.jsxs("div", {
                                      className:
                                        "relative flex items-center gap-4",
                                      children: [
                                        o.jsxs("div", {
                                          className: "relative flex-shrink-0",
                                          children: [
                                            o.jsx("img", {
                                              src: D.image || Yt,
                                              alt: D.name,
                                              className:
                                                "w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-cyan-500/50 group-hover:border-violet-500/60 transition-all duration-400 hover:rotate-6 hover:scale-110",
                                              onError: (z) => {
                                                z.target.src = Yt;
                                              },
                                            }),
                                            o.jsx("div", {
                                              className: `absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white transition-all duration-400 ${D.status ? "bg-emerald-500 group-hover:scale-125 animate-pulse" : "bg-rose-500 group-hover:scale-125 animate-pulse"}`,
                                            }),
                                          ],
                                        }),
                                        o.jsxs("div", {
                                          className: "min-w-0 flex-1",
                                          children: [
                                            o.jsx("h4", {
                                              className:
                                                "font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:via-lime-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-400 truncate",
                                              children: D.name,
                                            }),
                                            o.jsxs("p", {
                                              className:
                                                "text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-400",
                                              children: [
                                                D.phone,
                                                " • ",
                                                D.email,
                                              ],
                                            }),
                                            o.jsxs("div", {
                                              className:
                                                "flex flex-wrap items-center gap-2 mt-2",
                                              children: [
                                                o.jsx("p", {
                                                  className:
                                                    "text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-400",
                                                  children: D.empNo || D.id,
                                                }),
                                                o.jsxs("span", {
                                                  className:
                                                    "text-xs px-2 py-1 rounded-full bg-gradient-to-r from-lime-500/30 to-emerald-500/30 text-lime-300 font-medium transition-all duration-400 group-hover:scale-105",
                                                  children: ["₹", D.amount],
                                                }),
                                                o.jsx("span", {
                                                  className: `text-xs px-2 py-1 rounded-full font-medium transition-all duration-400 ${D.status ? "bg-emerald-500/30 text-emerald-300 group-hover:scale-105" : "bg-rose-500/30 text-rose-300 group-hover:scale-105"}`,
                                                  children: D.status
                                                    ? "Active"
                                                    : "Inactive",
                                                }),
                                              ],
                                            }),
                                            o.jsxs("p", {
                                              className:
                                                "text-xs text-violet-400 mt-2 group-hover:text-violet-300 transition-colors duration-400 flex items-center gap-1",
                                              children: [
                                                o.jsx(Jt, {
                                                  className:
                                                    "w-3 h-3 -mt-0.5 transition-transform group-hover:rotate-12",
                                                }),
                                                " ",
                                                L(D.lastActive),
                                              ],
                                            }),
                                          ],
                                        }),
                                        o.jsx("div", {
                                          className:
                                            "flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 group-hover:from-emerald-500/40 group-hover:to-lime-500/40 transition-all duration-400 hover:scale-110",
                                          children: D.isIphone
                                            ? o.jsx(ya, {
                                                className:
                                                  "w-5 h-5 text-rose-300 transition-transform group-hover:rotate-12",
                                              })
                                            : o.jsx(qt, {
                                                className:
                                                  "w-5 h-5 text-cyan-300 transition-transform group-hover:rotate-12",
                                              }),
                                        }),
                                        o.jsx(W0, {
                                          className:
                                            "w-5 h-5 text-gray-500 group-hover:text-emerald-400 transition-all duration-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 flex-shrink-0",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                D.id,
                              ),
                            )
                          : o.jsxs("div", {
                              className:
                                "flex flex-col items-center justify-center py-16 text-center",
                              children: [
                                o.jsx("div", {
                                  className:
                                    "p-5 rounded-full bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 mb-4 hover:scale-110 transition-all duration-400",
                                  children: o.jsx(Rr, {
                                    className:
                                      "w-12 h-12 text-rose-300 hover:rotate-12 transition-transform duration-400",
                                  }),
                                }),
                                o.jsx("p", {
                                  className: "text-white font-bold text-lg",
                                  children: "No users match your search",
                                }),
                                o.jsx("p", {
                                  className: "text-gray-400 text-sm mt-2",
                                  children:
                                    "Try broadening your search query or adjusting filters above",
                                }),
                              ],
                            }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      B &&
        o.jsx(Tb, { message: B.message, type: B.type, onClose: () => k(null) }),
    ],
  });
}
function Pb() {
  const [e, t] = _.useState([]),
    [r, s] = _.useState(!0),
    [n, a] = _.useState(null),
    [i, l] = _.useState("main"),
    [d, c] = _.useState([]),
    [u, f] = _.useState([]),
    [h, x] = _.useState(0),
    [m, g] = _.useState(!1),
    [p, w] = _.useState(!1),
    [b, v] = _.useState(null),
    [y, C] = _.useState([]),
    [E, N] = _.useState({ success: [], failed: [] }),
    [j, S] = _.useState(!1),
    [A, B] = _.useState(""),
    [k] = _.useState(!0);
  _.useEffect(() => {
    (async () => {
      try {
        s(!0), a(null);
        const {
          error: Y,
          data: U = [],
          message: re,
        } = await We.post("/foodease/get_users");
        if (Y) return a(re);
        t(U);
      } catch (Y) {
        console.error("Failed to fetch users:", Y),
          a(Y.message),
          R("Failed to load users", "error");
      } finally {
        s(!1);
      }
    })();
  }, []);
  const T = _.useMemo(
      () =>
        e.filter((P) => {
          const Y =
            P.name.toLowerCase().includes(A.toLowerCase()) ||
            P.number.includes(A) ||
            P.empNo.includes(A) ||
            P.email.includes(A);
          return (
            (["scheduled", "none"].includes(P.status) || y.includes(P.empNo)) &&
            Y
          );
        }),
      [e, y, A],
    ),
    I = _.useMemo(
      () =>
        e.filter(
          (P) =>
            P.name.toLowerCase().includes(A.toLowerCase()) ||
            P.number.includes(A) ||
            P.empNo.includes(A) ||
            P.email.includes(A),
        ),
      [e, A],
    ),
    $ = (P) => {
      const Y = {
        available: {
          bg: k
            ? "bg-gradient-to-br from-green-900/50 to-emerald-900/50"
            : "bg-gradient-to-br from-green-50 to-emerald-50",
          text: k ? "text-green-300" : "text-green-700",
          icon: "✓",
          label: "Available",
          border: k ? "border-green-700" : "border-green-200",
          badge: k ? "bg-green-500/20" : "bg-green-500/10",
        },
        scheduled: {
          bg: k
            ? "bg-gradient-to-br from-yellow-900/50 to-yellow-900/50"
            : "bg-gradient-to-br from-yellow-50 to-yellow-50",
          text: k ? "text-yellow-300" : "text-yellow-700",
          icon: "⏰",
          label: "Scheduled",
          border: k ? "border-yellow-700" : "border-yellow-200",
          badge: k ? "bg-yellow-500/20" : "bg-yellow-500/10",
        },
        schedule_canceled: {
          bg: k
            ? "bg-gradient-to-br from-red-900/50 to-rose-900/50"
            : "bg-gradient-to-br from-red-50 to-rose-50",
          text: k ? "text-red-300" : "text-red-700",
          icon: "🚫",
          label: "Schedule Canceled",
          border: k ? "border-red-700" : "border-red-200",
          badge: k ? "bg-red-500/20" : "bg-red-500/10",
        },
        wfh: {
          bg: k
            ? "bg-gradient-to-br from-blue-900/50 to-cyan-900/50"
            : "bg-gradient-to-br from-blue-50 to-cyan-50",
          text: k ? "text-blue-300" : "text-blue-700",
          icon: "🏠",
          label: "WFH",
          border: k ? "border-blue-700" : "border-blue-200",
          badge: k ? "bg-blue-500/20" : "bg-blue-500/10",
        },
        full_day: {
          bg: k
            ? "bg-gradient-to-br from-amber-900/50 to-yellow-900/50"
            : "bg-gradient-to-br from-amber-50 to-yellow-50",
          text: k ? "text-amber-300" : "text-amber-700",
          icon: "🌴",
          label: "Full Day Leave",
          border: k ? "border-amber-700" : "border-amber-200",
          badge: k ? "bg-amber-500/20" : "bg-amber-500/10",
        },
        FIRST_HALF: {
          bg: k
            ? "bg-gradient-to-br from-amber-900/50 to-yellow-900/50"
            : "bg-gradient-to-br from-amber-50 to-yellow-50",
          text: k ? "text-amber-300" : "text-amber-700",
          icon: "🌴",
          label: "First Half Leave",
          border: k ? "border-amber-700" : "border-amber-200",
          badge: k ? "bg-amber-500/20" : "bg-amber-500/10",
        },
        SECOND_HALF: {
          bg: k
            ? "bg-gradient-to-br from-amber-900/50 to-yellow-900/50"
            : "bg-gradient-to-br from-amber-50 to-yellow-50",
          text: k ? "text-amber-300" : "text-amber-700",
          icon: "🌴",
          label: "Second Half Leave",
          border: k ? "border-amber-700" : "border-amber-200",
          badge: k ? "bg-amber-500/20" : "bg-amber-500/10",
        },
        blocked: {
          bg: k
            ? "bg-gradient-to-br from-red-900/50 to-rose-900/50"
            : "bg-gradient-to-br from-red-50 to-rose-50",
          text: k ? "text-red-300" : "text-red-700",
          icon: "🚫",
          label: "Blocked",
          border: k ? "border-red-700" : "border-red-200",
          badge: k ? "bg-red-500/20" : "bg-red-500/10",
        },
      };
      return Y[String(P).toLowerCase()] || Y.available;
    },
    H = (P) => {
      const Y = e.find((re) => re.empNo === P),
        U = y.includes(P);
      (!Y.status && !U) ||
        c((re) => (re.includes(P) ? re.filter((ne) => ne !== P) : [...re, P]));
    },
    W = (P, Y) => {
      Y.stopPropagation(),
        C((U) =>
          U.includes(P)
            ? (c((re) => re.filter((ne) => ne !== P)),
              U.filter((re) => re !== P))
            : [...U, P],
        );
    },
    q = () => {
      const P = T.map((Y) => Y.empNo);
      c(P), R("All available users selected!", "success");
    },
    Z = () => {
      c([]), R("Selection cleared", "info");
    },
    K = (P, Y = "info") => {
      const U = new Date().toLocaleTimeString();
      f((re) => [
        ...re,
        { message: P, type: Y, timestamp: U, id: Date.now() + Math.random() },
      ]);
    },
    R = (P, Y = "success") => {
      v({ message: P, type: Y }), setTimeout(() => v(null), 3e3);
    },
    M = () => {
      if (d.length === 0) {
        R("Please select at least one user", "error");
        return;
      }
      l("booking"),
        f([]),
        x(0),
        N({ success: [], failed: [] }),
        S(!1),
        w(!0),
        K(`🚀 Starting automated booking for ${d.length} user(s)`, "system");
    },
    L = (P) => {
      if (P >= d.length) {
        w(!1),
          S(!0),
          K("✨ All bookings completed!", "system"),
          K(
            `✓ Successful: ${E.success.length} | ✗ Failed: ${E.failed.length}`,
            "system",
          );
        return;
      }
      g(!0), x(P);
      const Y = d[P],
        U = e.find((re) => re.empNo === Y);
      K(`📋 Processing: ${U.name} (${U.empNo})`, "info"),
        setTimeout(() => {
          K("🔍 Verifying user details...", "info");
        }, 300),
        setTimeout(() => {
          K(`📱 Phone: ${U.number}`, "info");
        }, 600),
        setTimeout(() => {
          Math.random() > 0.1
            ? (K(`✅ Booking confirmed for ${U.name}`, "success"),
              N((ne) => G(O({}, ne), { success: [...ne.success, U] })))
            : (K(`❌ Booking failed for ${U.name} - Network error`, "error"),
              N((ne) => G(O({}, ne), { failed: [...ne.failed, U] })));
        }, 900),
        setTimeout(() => {
          K("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "system"), g(!1);
        }, 1200);
    };
  _.useEffect(() => {
    if (p && !m && h < d.length) {
      const P = setTimeout(() => {
        L(h);
      }, 500);
      return () => clearTimeout(P);
    } else p && !m && h >= d.length && L(h);
  }, [p, m, h, d.length, L]);
  const D = () => {
      const P = E.failed.map((Y) => Y.empNo);
      c(P), l("main"), R(`${P.length} failed bookings ready for retry`, "info");
    },
    z = () => {
      l("main"), w(!1), x(0);
    };
  return o.jsxs("div", {
    className: `min-h-screen transition-colors duration-300 ${k ? "bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900" : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"}`,
    children: [
      i === "main" &&
        o.jsxs(o.Fragment, {
          children: [
            o.jsx(no, {}),
            o.jsxs("div", {
              className: "max-w-7xl mx-auto p-4 sm:p-8",
              children: [
                o.jsx("div", {
                  className: "flex justify-end mb-6",
                  children: o.jsx("button", {
                    onClick: () => window.history.back(),
                    className: `px-4 py-2 rounded-lg font-semibold transition-all ${k ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/50 hover:bg-yellow-500/30" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`,
                    children: "🔙 Back",
                  }),
                }),
                o.jsx("div", {
                  className: "mb-8",
                  children: o.jsxs("div", {
                    className: `relative group ${k ? "shadow-2xl" : "shadow-lg"}`,
                    children: [
                      o.jsx(Rr, {
                        className: `absolute left-4 top-4 w-5 h-5 ${k ? "text-purple-400" : "text-gray-400"}`,
                      }),
                      o.jsx("input", {
                        type: "text",
                        placeholder:
                          "🔎 Search by name, phone, Prudent ID, or User ID...",
                        value: A,
                        onChange: (P) => B(P.target.value),
                        className: `w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all ${k ? "bg-gray-800 border-purple-500 text-white placeholder-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30" : "bg-white border-purple-300 text-gray-900 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30"} font-semibold`,
                      }),
                    ],
                  }),
                }),
                o.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                  children: [
                    o.jsxs("div", {
                      className: `rounded-2xl p-8 shadow-xl border-2 transition-all hover:scale-105 cursor-pointer ${k ? "bg-gradient-to-br from-blue-900/50 to-blue-800/50 border-blue-600 hover:from-blue-800/60 hover:to-blue-700/60" : "bg-gradient-to-br from-blue-500 to-blue-600 border-blue-400 text-white"}`,
                      children: [
                        o.jsxs("div", {
                          className: `text-sm font-bold mb-2 flex items-center gap-2 ${k ? "text-blue-300" : "opacity-90"}`,
                          children: [
                            o.jsx(or, { className: "w-4 h-4" }),
                            "Selected Users",
                          ],
                        }),
                        o.jsx("div", {
                          className: `text-5xl font-black ${k ? "text-blue-300" : ""}`,
                          children: d.length,
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: `rounded-2xl p-8 shadow-xl border-2 transition-all hover:scale-105 cursor-pointer ${k ? "bg-gradient-to-br from-purple-900/50 to-purple-800/50 border-purple-600 hover:from-purple-800/60 hover:to-purple-700/60" : "bg-gradient-to-br from-purple-500 to-purple-600 border-purple-400 text-white"}`,
                      children: [
                        o.jsxs("div", {
                          className: `text-sm font-bold mb-2 flex items-center gap-2 ${k ? "text-purple-300" : "opacity-90"}`,
                          children: [
                            o.jsx(Pu, { className: "w-4 h-4" }),
                            "Available Users",
                          ],
                        }),
                        o.jsx("div", {
                          className: `text-5xl font-black ${k ? "text-purple-300" : ""}`,
                          children: T.length,
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: `rounded-2xl p-8 shadow-xl border-2 transition-all hover:scale-105 cursor-pointer ${k ? "bg-gradient-to-br from-pink-900/50 to-pink-800/50 border-pink-600 hover:from-pink-800/60 hover:to-pink-700/60" : "bg-gradient-to-br from-pink-500 to-pink-600 border-pink-400 text-white"}`,
                      children: [
                        o.jsxs("div", {
                          className: `text-sm font-bold mb-2 flex items-center gap-2 ${k ? "text-pink-300" : "opacity-90"}`,
                          children: [
                            o.jsx(ou, { className: "w-4 h-4" }),
                            "Total Users",
                          ],
                        }),
                        o.jsx("div", {
                          className: `text-5xl font-black ${k ? "text-pink-300" : ""}`,
                          children: e.length,
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-4 mb-8",
                  children: [
                    o.jsxs("button", {
                      onClick: q,
                      disabled: T.length === 0,
                      className: `flex-1 px-6 py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${k ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600" : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"}`,
                      children: ["✅ Select All (", T.length, ")"],
                    }),
                    o.jsx("button", {
                      onClick: Z,
                      disabled: d.length === 0,
                      className: `flex-1 px-6 py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${k ? "bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500" : "bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-gray-600 hover:to-gray-700"}`,
                      children: "🗑️ Clear",
                    }),
                    o.jsxs("button", {
                      onClick: M,
                      disabled: d.length === 0,
                      className: `flex-1 px-6 py-4 rounded-xl font-bold text-lg shadow-xl transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${k ? "bg-gradient-to-r from-pink-600 to-red-500 text-white hover:from-pink-700 hover:to-red-600" : "bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600"}`,
                      children: [
                        o.jsx(Su, { className: "w-5 h-5" }),
                        "Start Booking (",
                        d.length,
                        ")",
                      ],
                    }),
                  ],
                }),
                o.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",
                  children: I.map((P) => {
                    const Y = $(P.status),
                      U = d.includes(P.empNo),
                      re = y.includes(P.empNo),
                      ne = ["none", "scheduled"].includes(P.status) || re,
                      V = !["none", "scheduled"].includes(P.status);
                    return o.jsxs(
                      "div",
                      {
                        className: `rounded-2xl border-2 p-5 cursor-pointer transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm ${U ? (k ? "bg-gradient-to-br from-pink-900/70 to-purple-900/70 border-pink-500 shadow-pink-500/50" : "bg-gradient-to-br from-pink-100 to-purple-100 border-pink-500") : k ? "bg-gray-800/50 border-gray-700 hover:border-purple-500" : "bg-white border-gray-300 hover:border-purple-400"}`,
                        onClick: () => H(ne ? P.empNo : null),
                        role: "button",
                        tabIndex: ne ? 0 : -1,
                        onKeyDown: (he) => he.key === "Enter" && H(P.empNo),
                        children: [
                          o.jsxs("div", {
                            className: "flex items-start gap-3 mb-4",
                            children: [
                              o.jsx("input", {
                                type: "checkbox",
                                checked: U,
                                onChange: () => H(P.empNo),
                                disabled: !ne,
                                className:
                                  "mt-1 h-6 w-6 accent-pink-600 cursor-pointer",
                              }),
                              o.jsx("div", {
                                className: "flex-1 min-w-0",
                                children: o.jsxs("div", {
                                  className: "flex items-center gap-3 mb-2",
                                  children: [
                                    o.jsx("img", {
                                      src: P.image,
                                      alt: P.name,
                                      className: `w-14 h-14 rounded-full object-cover border-3 ${k ? "border-purple-500" : "border-purple-400"} shadow-lg`,
                                    }),
                                    o.jsxs("div", {
                                      className: "min-w-0 flex-1",
                                      children: [
                                        o.jsx("h3", {
                                          className: `text-sm font-bold truncate ${k ? "text-white" : "text-gray-900"}`,
                                          children: P.name,
                                        }),
                                        o.jsxs("p", {
                                          className: `text-xs truncate ${k ? "text-gray-400" : "text-gray-600"}`,
                                          children: ["📞 ", P.number],
                                        }),
                                        o.jsxs("p", {
                                          className: `text-xs truncate ${k ? "text-gray-400" : "text-gray-600"}`,
                                          children: ["🆔 ", P.empNo],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className:
                              "flex items-center justify-between gap-2 flex-wrap",
                            children: [
                              o.jsxs("div", {
                                className: `inline-flex items-center px-3 py-2 rounded-xl text-xs font-bold border-2 ${Y.bg} ${Y.text} ${Y.border}`,
                                children: [
                                  o.jsx("span", {
                                    className: "mr-2 text-lg",
                                    children: Y.icon,
                                  }),
                                  re ? "Enabled" : Y.label,
                                ],
                              }),
                              V &&
                                o.jsx("button", {
                                  onClick: (he) => W(P.empNo, he),
                                  className: `text-xs font-bold px-3 py-2 rounded-xl transition-all transform hover:scale-110 ${re ? (k ? "bg-red-500/30 text-red-300 border border-red-500 hover:bg-red-500/50" : "bg-red-200 text-red-800 hover:bg-red-300") : k ? "bg-green-500/30 text-green-300 border border-green-500 hover:bg-green-500/50" : "bg-green-200 text-green-800 hover:bg-green-300"}`,
                                  children: re ? "Disable" : "Enable",
                                }),
                            ],
                          }),
                        ],
                      },
                      P.empNo,
                    );
                  }),
                }),
                I.length === 0 &&
                  o.jsxs("div", {
                    className: `text-center py-20 rounded-3xl ${k ? "bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700" : "bg-gradient-to-br from-gray-100 to-gray-200"}`,
                    children: [
                      o.jsx("div", {
                        className: `text-7xl mb-4 ${k ? "text-gray-600" : "text-gray-400"}`,
                        children: "🔍",
                      }),
                      o.jsx("p", {
                        className: `text-lg font-bold ${k ? "text-gray-400" : "text-gray-600"}`,
                        children: "No users found matching your search.",
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      i === "booking" &&
        o.jsxs("div", {
          className: "max-w-4xl mx-auto p-4 sm:p-8",
          children: [
            o.jsxs("button", {
              onClick: z,
              disabled: m && !j,
              className: `flex items-center gap-2 mb-8 px-6 py-3 rounded-xl font-bold transition-all ${k ? "bg-gray-800 border-2 border-gray-700 text-purple-300 hover:border-purple-500 disabled:opacity-50" : "bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-500 disabled:opacity-50"}`,
              children: [o.jsx(ho, { className: "w-5 h-5" }), "Back"],
            }),
            o.jsxs("div", {
              className: `${k ? "bg-gradient-to-r from-purple-900/60 via-gray-900/60 to-purple-900/60 border-b-4 border-purple-500" : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-2xl"} text-white rounded-3xl p-8 mb-8 relative overflow-hidden`,
              children: [
                o.jsx("div", {
                  className: "absolute inset-0 opacity-20",
                  children: o.jsx("div", {
                    className:
                      "absolute top-0 right-0 w-64 h-64 bg-pink-500 rounded-full blur-3xl",
                  }),
                }),
                o.jsxs("div", {
                  className: "relative z-10",
                  children: [
                    o.jsx("h2", {
                      className: "text-4xl font-black mb-2",
                      children: "📊 Booking Progress",
                    }),
                    o.jsx("p", {
                      className: "text-blue-100 text-lg",
                      children:
                        "Processing your selections with real-time updates",
                    }),
                  ],
                }),
              ],
            }),
            !j &&
              o.jsxs("div", {
                className: `rounded-2xl p-8 mb-8 shadow-xl border-2 ${k ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`,
                children: [
                  o.jsxs("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [
                      o.jsxs("span", {
                        className: `text-lg font-bold ${k ? "text-white" : "text-gray-800"}`,
                        children: [
                          "⚙️ Processing ",
                          h + 1,
                          " of",
                          " ",
                          d.length,
                        ],
                      }),
                      o.jsxs("span", {
                        className: `text-2xl font-black ${k ? "text-pink-400" : "text-pink-600"}`,
                        children: [Math.round(((h + 1) / d.length) * 100), "%"],
                      }),
                    ],
                  }),
                  o.jsx("div", {
                    className: `w-full rounded-full h-4 overflow-hidden border-2 ${k ? "bg-gray-700 border-gray-600" : "bg-gray-200 border-gray-300"}`,
                    children: o.jsx("div", {
                      className:
                        "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-4 rounded-full transition-all duration-500 shadow-lg",
                      style: { width: `${((h + 1) / d.length) * 100}%` },
                    }),
                  }),
                ],
              }),
            o.jsx("div", {
              className: `rounded-3xl shadow-2xl border-2 overflow-hidden ${k ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`,
              children: o.jsx("div", {
                className: "p-8",
                children: j
                  ? o.jsxs("div", {
                      className: "space-y-8",
                      children: [
                        o.jsxs("div", {
                          className: `rounded-2xl p-8 border-2 ${k ? "bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-700" : "bg-gradient-to-br from-green-50 to-emerald-50 border-green-300"}`,
                          children: [
                            o.jsxs("div", {
                              className: `flex items-center gap-3 mb-6 ${k ? "text-green-300" : "text-green-700"}`,
                              children: [
                                o.jsx(wa, { className: "w-8 h-8" }),
                                o.jsxs("h3", {
                                  className: "font-black text-2xl",
                                  children: [
                                    "Successful Bookings (",
                                    E.success.length,
                                    ")",
                                  ],
                                }),
                              ],
                            }),
                            o.jsx("ul", {
                              className: "space-y-3 max-h-48 overflow-y-auto",
                              children: E.success.map((P) =>
                                o.jsxs(
                                  "li",
                                  {
                                    className: `text-sm font-semibold flex items-center rounded-xl p-3 border-2 ${k ? "bg-green-500/10 text-green-300 border-green-600" : "bg-white text-green-700 border-green-200"}`,
                                    children: [
                                      o.jsx("span", {
                                        className: `w-3 h-3 rounded-full mr-3 ${k ? "bg-green-400" : "bg-green-500"}`,
                                      }),
                                      P.name,
                                      " (",
                                      P.prudentId,
                                      ")",
                                    ],
                                  },
                                  P.empNo,
                                ),
                              ),
                            }),
                          ],
                        }),
                        E.failed.length > 0 &&
                          o.jsxs("div", {
                            className: `rounded-2xl p-8 border-2 ${k ? "bg-gradient-to-br from-red-900/50 to-rose-900/50 border-red-700" : "bg-gradient-to-br from-red-50 to-rose-50 border-red-300"}`,
                            children: [
                              o.jsxs("div", {
                                className: `flex items-center gap-3 mb-6 ${k ? "text-red-300" : "text-red-700"}`,
                                children: [
                                  o.jsx(Ca, { className: "w-8 h-8" }),
                                  o.jsxs("h3", {
                                    className: "font-black text-2xl",
                                    children: [
                                      "Failed Bookings (",
                                      E.failed.length,
                                      ")",
                                    ],
                                  }),
                                ],
                              }),
                              o.jsx("ul", {
                                className: "space-y-3 max-h-48 overflow-y-auto",
                                children: E.failed.map((P) =>
                                  o.jsxs(
                                    "li",
                                    {
                                      className: `text-sm font-semibold flex items-center rounded-xl p-3 border-2 ${k ? "bg-red-500/10 text-red-300 border-red-600" : "bg-white text-red-700 border-red-200"}`,
                                      children: [
                                        o.jsx("span", {
                                          className: `w-3 h-3 rounded-full mr-3 ${k ? "bg-red-400" : "bg-red-500"}`,
                                        }),
                                        P.name,
                                        " (",
                                        P.prudentId,
                                        ")",
                                      ],
                                    },
                                    P.empNo,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        o.jsxs("div", {
                          className: "flex gap-4 pt-6",
                          children: [
                            E.failed.length > 0 &&
                              o.jsxs("button", {
                                onClick: D,
                                className: `flex-1 py-4 px-6 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg ${k ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:from-orange-700 hover:to-orange-600" : "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"}`,
                                children: [
                                  "🔄 Retry Failed (",
                                  E.failed.length,
                                  ")",
                                ],
                              }),
                            o.jsx("button", {
                              onClick: z,
                              className: `flex-1 py-4 px-6 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg ${k ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600" : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"}`,
                              children: "⬅️ Back to Main",
                            }),
                          ],
                        }),
                      ],
                    })
                  : o.jsxs(o.Fragment, {
                      children: [
                        h < d.length &&
                          (() => {
                            const P = e.find((Y) => Y.empNo === d[h]);
                            return o.jsxs("div", {
                              className: `rounded-2xl p-6 mb-8 border-2 ${k ? "bg-gradient-to-r from-blue-900/50 to-pink-900/50 border-blue-600" : "bg-gradient-to-r from-blue-100 to-pink-100 border-purple-300"}`,
                              children: [
                                o.jsx("p", {
                                  className: `text-xs font-bold mb-4 ${k ? "text-blue-300" : "text-blue-600"}`,
                                  children: "Currently Processing",
                                }),
                                o.jsxs("div", {
                                  className: "flex items-center gap-5",
                                  children: [
                                    o.jsx("img", {
                                      src: P.imgage,
                                      alt: P.name,
                                      className: `w-20 h-20 rounded-2xl object-cover border-3 ${k ? "border-pink-500" : "border-purple-500"} shadow-lg`,
                                    }),
                                    o.jsxs("div", {
                                      className: "flex-1",
                                      children: [
                                        o.jsx("h3", {
                                          className: `font-black text-xl mb-2 ${k ? "text-white" : "text-gray-900"}`,
                                          children: P.name,
                                        }),
                                        o.jsxs("p", {
                                          className: `text-sm font-semibold mb-1 ${k ? "text-gray-300" : "text-gray-700"}`,
                                          children: ["📞 ", P.phone],
                                        }),
                                        o.jsxs("p", {
                                          className: `text-sm font-semibold ${k ? "text-gray-300" : "text-gray-700"}`,
                                          children: ["🆔 ", P.prudentId],
                                        }),
                                      ],
                                    }),
                                    o.jsx("div", {
                                      className: "animate-spin",
                                      children: o.jsx(or, {
                                        className: `w-8 h-8 ${k ? "text-yellow-400" : "text-yellow-500"}`,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            });
                          })(),
                        o.jsxs("div", {
                          className: `rounded-2xl p-6 max-h-72 overflow-y-auto border-2 font-mono text-sm ${k ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-900 border-gray-800 text-green-400"}`,
                          children: [
                            u.map((P) =>
                              o.jsxs(
                                "div",
                                {
                                  className:
                                    "mb-4 flex items-start gap-3 text-xs sm:text-sm",
                                  children: [
                                    o.jsx("span", {
                                      className: `${P.type === "success" ? "text-green-400" : P.type === "error" ? "text-red-400" : P.type === "system" ? "text-yellow-400" : "text-cyan-400"} flex-shrink-0`,
                                      children:
                                        P.type === "success"
                                          ? "✅"
                                          : P.type === "error"
                                            ? "❌"
                                            : P.type === "system"
                                              ? "⚙️"
                                              : "ℹ️",
                                    }),
                                    o.jsxs("div", {
                                      className: "flex-1",
                                      children: [
                                        o.jsxs("span", {
                                          className: "text-gray-500",
                                          children: ["[", P.timestamp, "]"],
                                        }),
                                        o.jsx("span", {
                                          className: "ml-2 text-gray-100",
                                          children: P.message,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                P.empNo,
                              ),
                            ),
                            u.length === 0 &&
                              o.jsxs("div", {
                                className: "text-center py-12 text-gray-500",
                                children: [
                                  o.jsx("div", {
                                    className: "text-3xl mb-3",
                                    children: "⏳",
                                  }),
                                  o.jsx("div", {
                                    className: "text-sm",
                                    children: "Ready to start...",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
              }),
            }),
          ],
        }),
      b &&
        o.jsx("div", {
          className: "fixed top-6 right-6 z-50 animate-bounce",
          children: o.jsxs("div", {
            className: `px-6 py-4 rounded-2xl shadow-2xl text-white font-bold flex items-center gap-3 border-2 ${b.type === "success" ? (k ? "bg-gradient-to-r from-green-600 to-emerald-600 border-green-500" : "bg-gradient-to-r from-green-500 to-emerald-600 border-green-400") : b.type === "error" ? (k ? "bg-gradient-to-r from-red-600 to-rose-600 border-red-500" : "bg-gradient-to-r from-red-500 to-rose-600 border-red-400") : k ? "bg-gradient-to-r from-blue-600 to-cyan-600 border-blue-500" : "bg-gradient-to-r from-blue-500 to-cyan-600 border-blue-400"}`,
            children: [
              b.type === "success" &&
                o.jsx(wa, { className: "w-5 h-5 flex-shrink-0" }),
              b.type === "error" &&
                o.jsx(Ca, { className: "w-5 h-5 flex-shrink-0" }),
              b.message,
            ],
          }),
        }),
    ],
  });
}
function Mb({ className: e = "" }) {
  return o.jsxs("div", {
    className: `bg-gradient-to-br from-purple-800/60 via-pink-800/40 to-indigo-900/60 border border-purple-400/20 rounded-2xl p-2 sm:p-4 backdrop-blur-xl animate-pulse space-y-2 sm:space-y-4 ${e}`,
    children: [
      o.jsxs("div", {
        className: "space-y-1 sm:space-y-2",
        children: [
          o.jsx("div", {
            className:
              "h-6 sm:h-8 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded w-3/4",
          }),
          o.jsx("div", {
            className:
              "h-3 sm:h-4 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded w-1/2",
          }),
        ],
      }),
      o.jsx("div", {
        className:
          "h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent",
      }),
      o.jsx("div", {
        className:
          "h-4 sm:h-5 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded w-1/3",
      }),
      o.jsxs("div", {
        className: "grid grid-cols-1 gap-2 sm:gap-3",
        children: [
          o.jsx(Nn, { color: "green" }),
          o.jsx(Nn, { color: "blue" }),
          o.jsx(Nn, { color: "red" }),
        ],
      }),
    ],
  });
}
function Nn({ color: e }) {
  const t = {
    green: "from-green-600/40 border-green-500/50",
    blue: "from-blue-600/40 border-cyan-500/50",
    red: "from-red-600/40 border-pink-500/50",
  };
  return o.jsxs("div", {
    className: `bg-gradient-to-r ${t[e]} border rounded-xl p-2 sm:p-3 backdrop-blur-sm space-y-1 sm:space-y-2 animate-pulse`,
    children: [
      o.jsx("div", { className: "h-2 sm:h-3 bg-white/20 rounded w-4/5" }),
      o.jsx("div", {
        className:
          "h-5 sm:h-6 bg-white/20 rounded w-1/3 flex items-center gap-2",
        children: o.jsx("div", {
          className: "h-3 sm:h-4 w-3 sm:w-4 bg-white/30 rounded",
        }),
      }),
    ],
  });
}
function Lb({ className: e = "" }) {
  return o.jsxs("div", {
    className: `bg-gradient-to-br from-blue-800/50 via-purple-800/50 to-pink-800/40 border border-cyan-400/20 rounded-2xl p-2 sm:p-4 sm:p-6 backdrop-blur-xl animate-pulse ${e}`,
    children: [
      o.jsxs("div", {
        className: "flex items-center justify-between mb-4 sm:mb-6",
        children: [
          o.jsx("div", {
            className:
              "p-1 sm:p-2 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-lg w-8 sm:w-10 h-8 sm:h-10",
          }),
          o.jsx("div", {
            className:
              "h-5 sm:h-7 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded w-24 sm:w-32 mx-auto",
          }),
          o.jsx("div", {
            className:
              "p-1 sm:p-2 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-lg w-8 sm:w-10 h-8 sm:h-10",
          }),
        ],
      }),
      o.jsx("div", {
        className: "grid grid-cols-7 gap-1 sm:gap-2 mb-2 sm:mb-4",
        children: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((t) =>
          o.jsx(
            "div",
            {
              className:
                "text-center text-xs font-bold text-gray-400 py-1 sm:py-2",
              children: o.jsx("div", {
                className: "h-2 sm:h-3 bg-white/20 rounded w-6 sm:w-8 mx-auto",
              }),
            },
            t,
          ),
        ),
      }),
      o.jsx("div", {
        className: "grid grid-cols-7 gap-1 sm:gap-2",
        children: Array.from({ length: 42 }).map((t, r) =>
          o.jsx(
            "div",
            {
              className:
                "aspect-square bg-gradient-to-br from-slate-700/50 to-slate-600/30 border border-purple-400/30 rounded-lg flex flex-col items-center justify-center",
              children: o.jsx("div", {
                className: "h-3 sm:h-4 w-3 sm:w-4 bg-white/20 rounded",
              }),
            },
            r,
          ),
        ),
      }),
    ],
  });
}
function Ob({ className: e = "" }) {
  return o.jsxs("div", {
    className: `bg-gradient-to-br from-cyan-800/50 via-teal-800/40 to-blue-900/60 border border-cyan-400/20 rounded-2xl p-2 sm:p-4 backdrop-blur-xl animate-pulse space-y-2 sm:space-y-4 ${e}`,
    children: [
      o.jsxs("div", {
        className: "flex justify-end gap-1 sm:gap-2",
        children: [
          o.jsx("div", {
            className:
              "py-1 sm:py-2 px-2 sm:px-3 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-lg w-12 sm:w-16 h-6 sm:h-8",
          }),
          o.jsx("div", {
            className:
              "py-1 sm:py-2 px-2 sm:px-3 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-lg w-12 sm:w-16 h-6 sm:h-8",
          }),
        ],
      }),
      o.jsx("div", {
        className:
          "h-4 sm:h-5 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded w-12 sm:w-16",
      }),
      o.jsx("div", {
        className:
          "h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent",
      }),
      o.jsx("div", {
        className: "space-y-1 sm:space-y-2",
        children: Array.from({ length: 5 }).map((t, r) =>
          o.jsxs(
            "div",
            {
              className:
                "flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 rounded-lg bg-gradient-to-r from-white/10 to-white/5 border border-cyan-400/30 text-xs animate-pulse",
              children: [
                o.jsx("div", {
                  className: "h-3 sm:h-4 w-3 sm:w-4 bg-white/30 rounded",
                }),
                o.jsx("div", {
                  className: "h-2 sm:h-3 bg-white/20 rounded w-16 sm:w-20",
                }),
              ],
            },
            r,
          ),
        ),
      }),
    ],
  });
}
function Ib() {
  const { user: e } = It(),
    [t, r] = _.useState(new Date()),
    [s, n] = _.useState([]),
    [a, i] = _.useState({
      bookings: 0,
      totalAmount: 0,
      cancelled: 0,
      amount: 0,
    }),
    [l, d] = _.useState(null),
    [c, u] = _.useState(!1),
    [f, h] = _.useState(!1),
    [x, m] = _.useState(e == null ? void 0 : e.empNo);
  _.useEffect(() => {
    m((e == null ? void 0 : e.empNo) || x);
  }, [e]);
  const g = async (N, j) => {
    h(!0);
    try {
      var {
        error: S,
        message: A,
        data: B,
      } = await We.post(`/foodease/calendar/month/${x}`, {
        year: N,
        month: j + 1 > 9 ? j + 1 : "0" + (j + 1),
      });
      if (S) {
        console.log(A);
        return;
      } else if (B) {
        const {
          calendar: k,
          totalAmount: T,
          totalBookings: I,
          totalCanceled: $,
          amountPerMeal: H,
        } = B;
        n(k),
          i((W) =>
            G(O({}, W), {
              totalAmount: T,
              bookings: I,
              cancelled: $,
              amount: H,
            }),
          );
      }
    } catch (k) {
      console.log("API call failed:", k);
    } finally {
      h(!1);
    }
  };
  _.useEffect(() => {
    var N = t.getMonth(),
      j = t.getFullYear();
    g(j, N);
  }, [t, x]);
  const p = (N) => {
      if (!N || f) return;
      const j = t.getFullYear(),
        S = t.getMonth(),
        A = `${j}-${String(S + 1).padStart(2, "0")}-${String(N).padStart(2, "0")}`;
      d(A), u(!0);
    },
    w = async (N, j = !0) => {
      try {
        var [S, A, B] = N.split("-").map(Number);
        await We.post(`/foodease/schedule/${x}`, {
          year: S,
          month: A,
          day: B,
          book: j,
        }),
          y(),
          u(!1);
      } catch (k) {
        console.log("Booking failed:", k);
      }
    },
    b = async (N) => {
      try {
        var [j, S, A] = N.split("-").map(Number);
        await We.put(`/foodease/schedule/${x}`, { year: j, month: S, day: A }),
          y(),
          u(!1);
      } catch (B) {
        console.log("Cancel failed:", B);
      }
    },
    v = (N) => {
      const j = new Date(t);
      j.setMonth(j.getMonth() + N), r(j);
    },
    y = () => {
      const N = t.getFullYear(),
        j = t.getMonth();
      g(N, j);
    },
    C = () => {
      window.history.back();
    },
    E = (N) => {
      m(N.target.value), y();
    };
  return f
    ? o.jsxs("div", {
        className:
          "h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-y-auto flex flex-col",
        children: [
          o.jsxs("div", {
            className:
              "pt-4 pb-4 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 sm:p-6",
            children: [
              o.jsx(Mb, { className: "lg:col-span-3" }),
              o.jsx(Lb, { className: "lg:col-span-6" }),
              o.jsx(Ob, { className: "lg:col-span-3" }),
            ],
          }),
          o.jsx("footer", {
            className:
              "text-center text-xs text-gray-400 p-2 bg-gradient-to-r from-slate-950 to-pink-950 border-t border-gray-800",
            children: "© 2025 FoodEase. All rights reserved.",
          }),
          o.jsx("style", {
            children: `
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob {
            animation: blob 7s infinite ease-in-out;
          }
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: linear-gradient(to bottom, #0f172a, #1e293b);
          }
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #3b82f6, #ec4899);
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #2563eb, #db2777);
          }
        `,
          }),
        ],
      })
    : o.jsxs("div", {
        className:
          "h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-pink-950 overflow-y-auto relative flex flex-col",
        children: [
          o.jsxs("div", {
            className: "fixed inset-0 overflow-hidden pointer-events-none",
            children: [
              o.jsx("div", {
                className:
                  "absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-full animate-blob blur-3xl",
              }),
              o.jsx("div", {
                className:
                  "absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-full animate-blob blur-3xl",
                style: { animationDelay: "2s" },
              }),
              o.jsx("div", {
                className:
                  "absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-orange-500/5 rounded-full animate-blob blur-3xl",
                style: { animationDelay: "4s" },
              }),
            ],
          }),
          o.jsx("div", {
            className: "relative z-10 flex flex-col flex-1 w-full",
            children: o.jsxs("div", {
              className:
                "pt-4 pb-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-4 p-4 sm:p-6 h-full w-full",
              children: [
                o.jsx("div", {
                  className:
                    "lg:col-span-3 h-full space-y-2 lg:space-y-2 px-0 lg:px-2",
                  children: o.jsx(Vb, {
                    stats: a,
                    user: e,
                    events: s,
                    onRefresh: y,
                    handleBack: C,
                    selectedEmpNo: x,
                    onEmpChange: E,
                  }),
                }),
                o.jsx("div", {
                  className: "lg:col-span-6 h-full space-y-4",
                  children: o.jsx(Ub, {
                    currentDate: t,
                    events: s,
                    onMonthChange: v,
                    onDateClick: p,
                  }),
                }),
                o.jsx("div", {
                  className:
                    "lg:col-span-3 h-full space-y-2 lg:space-y-2 px-0 lg:px-2",
                  children: o.jsx($b, {
                    stats: a,
                    user: e,
                    events: s,
                    onRefresh: y,
                    handleBack: C,
                  }),
                }),
              ],
            }),
          }),
          o.jsx("footer", {
            className:
              "text-center text-xs text-gray-400 p-2 bg-gradient-to-r from-slate-950 via-purple-950 to-pink-950 border-t border-gray-800 shrink-0",
            children: "© 2025 FoodEase. All rights reserved.",
          }),
          c &&
            l &&
            o.jsx(zb, {
              date: l,
              events: s,
              onClose: () => u(!1),
              handleBook: w,
              onChangeBooking: b,
            }),
          o.jsx("style", {
            children: `
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite ease-in-out;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.4s ease-out;
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.5), inset 0 0 20px rgba(6, 182, 212, 0.1); }
          50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.8), inset 0 0 30px rgba(6, 182, 212, 0.2); }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: linear-gradient(to bottom, #0f172a, #1e293b);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #ec4899);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #db2777);
        }
      `,
          }),
        ],
      });
}
function rd({ stats: e, pc: t = !1 }) {
  return o.jsx("div", {
    className: `pt-1 sm:pt-2  ${t ? "hidden lg:flex border-t border-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20" : "lg:hidden"}`,
    children: o.jsxs("div", {
      className: "w-full",
      children: [
        o.jsxs("h2", {
          className:
            "text-base sm:text-lg font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent flex items-center gap-2 mb-2 sm:mb-4",
          children: [
            o.jsx("span", { className: "animate-float", children: "📈" }),
            " Monthly Statistics",
          ],
        }),
        o.jsxs("div", {
          className: "grid grid-cols-1 gap-3 sm:gap-4",
          children: [
            o.jsx(Br, {
              icon: "✅",
              label: "Total Bookings",
              value: (e == null ? void 0 : e.bookings) || 0,
              color: "green",
            }),
            o.jsx(Br, {
              icon: "💰",
              label: "Total Spent",
              value: `₹${(e == null ? void 0 : e.totalAmount) || 0}`,
              color: "blue",
            }),
            o.jsx(Br, {
              icon: "❌",
              label: "Cancelled",
              value: (e == null ? void 0 : e.cancelled) || 0,
              color: "red",
            }),
            o.jsx(Br, {
              icon: "💲",
              label: "Per Day",
              value: `₹${(e == null ? void 0 : e.amount) || 0}`,
              color: "yellow",
            }),
          ],
        }),
      ],
    }),
  });
}
function sd({ pc: e = !1, handleBack: t, onRefresh: r }) {
  return o.jsx("div", {
    className: `pt-2 sm:pt-4 ${e ? "hidden lg:flex" : "lg:hidden border-t border-purple-400/20"}`,
    children: o.jsxs("div", {
      className: "flex justify-center gap-2 sm:gap-4 w-full",
      children: [
        o.jsxs("button", {
          onClick: t,
          className:
            "py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 hover:from-rose-500 hover:via-pink-500 hover:to-red-500 text-white font-bold rounded-lg transition-all duration-200 flex items-center gap-1 text-xs shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transform",
          children: [o.jsx(Bt, { className: "w-3 h-3" }), "Back"],
        }),
        o.jsxs("button", {
          onClick: r,
          className:
            "py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-500 hover:via-cyan-500 hover:to-teal-500 text-white font-bold rounded-lg transition-all duration-200 flex items-center gap-1 text-xs shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transform",
          children: [o.jsx(Bs, { className: "w-3 h-3" }), "Refresh"],
        }),
      ],
    }),
  });
}
function Vb({
  stats: e,
  user: t,
  handleBack: r,
  onRefresh: s,
  selectedEmpNo: n,
  onEmpChange: a,
}) {
  var i;
  return o.jsxs("div", {
    className:
      "bg-gradient-to-br from-purple-900/80 via-pink-900/60 to-indigo-900/80 border border-purple-400/30 rounded-2xl p-2 sm:p-4 backdrop-blur-xl animate-slide-up shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:border-purple-400/50 flex flex-col",
    children: [
      o.jsxs("div", {
        className: "space-y-1 sm:space-y-2 flex-shrink-0",
        children: [
          o.jsxs("h1", {
            className:
              "text-2xl sm:text-3xl font-black bg-gradient-to-r from-cyan-300 via-pink-300 to-purple-300 bg-clip-text text-transparent flex items-center gap-2",
            children: [
              o.jsx("span", {
                className: "text-3xl sm:text-4xl animate-bounce",
                children: "✨",
              }),
              " ",
              "FoodEase",
            ],
          }),
          o.jsx("div", { className: "h-1 sm:h-2" }),
          (t == null ? void 0 : t.admin) &&
            o.jsx("select", {
              value: n,
              onChange: a,
              className:
                "w-full p-2 bg-gradient-to-r from-gray-800 to-gray-700 border border-purple-400/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500",
              style: { backgroundColor: "rgb(31 41 55)", color: "white" },
              children:
                (i = t == null ? void 0 : t.users) == null
                  ? void 0
                  : i.map((l) =>
                      o.jsxs(
                        "option",
                        {
                          value: l.empNo,
                          selected: l.empNo === n,
                          style: {
                            backgroundColor: "rgb(31 41 55)",
                            color: "white",
                          },
                          children: [l.name, " (", l.empNo, ")"],
                        },
                        l.empNo,
                      ),
                    ),
            }),
        ],
      }),
      o.jsx(sd, { handleBack: r, onRefresh: s, pc: !1 }),
      o.jsx("div", {
        className: "flex-1 flex flex-col space-y-0",
        children: o.jsx(rd, { stats: e, pc: !0 }),
      }),
    ],
  });
}
function Br({ icon: e, label: t, value: r, color: s }) {
  const n = {
    green:
      "from-green-700/80 via-emerald-600/60 to-teal-700/60 border-green-400/50 shadow-lg shadow-green-500/20",
    blue: "from-blue-700/80 via-cyan-600/60 to-sky-700/60 border-cyan-400/50 shadow-lg shadow-cyan-500/20",
    red: "from-red-700/80 via-pink-600/60 to-rose-700/60 border-red-400/50 shadow-lg shadow-red-500/20",
    yellow:
      "from-yellow-700/80 via-amber-600/60 to-orange-700/60 border-yellow-400/50 shadow-lg shadow-yellow-500/20",
  };
  return o.jsx("div", {
    className: `bg-gradient-to-br ${n[s]} border rounded-xl p-2 sm:p-4 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 transform`,
    children: o.jsxs("div", {
      className: "flex items-center justify-between",
      children: [
        o.jsxs("div", {
          className: "flex items-center gap-2 sm:gap-3",
          children: [
            o.jsx("span", {
              className: "text-xl sm:text-2xl animate-float",
              children: e,
            }),
            " ",
            o.jsx("p", {
              className:
                "text-xs sm:text-sm text-white/80 font-semibold mb-1 sm:mb-2 uppercase tracking-wider",
              children: t,
            }),
          ],
        }),
        o.jsx("p", {
          className:
            "text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent text-right",
          children: r,
        }),
      ],
    }),
  });
}
function Xt({ icon: e, label: t, color: r }) {
  const s = {
    green:
      "from-green-600/50 to-emerald-500/30 border-green-400/60 shadow-lg shadow-green-500/20",
    blue: "from-blue-600/50 to-cyan-500/30 border-cyan-400/60 shadow-lg shadow-cyan-500/20",
    red: "from-red-600/50 to-pink-500/30 border-red-400/60 shadow-lg shadow-red-500/20",
    orange:
      "from-orange-600/50 to-amber-500/30 border-orange-400/60 shadow-lg shadow-orange-500/20",
    purple:
      "from-purple-600/50 to-violet-500/30 border-purple-400/60 shadow-lg shadow-purple-500/20",
  };
  return o.jsxs("div", {
    className: `flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border bg-gradient-to-r ${s[r]} text-xs font-semibold text-white transition-all duration-300 hover:scale-105 transform hover:shadow-2xl`,
    children: [
      o.jsx("span", {
        className: "text-base sm:text-lg animate-float",
        children: e,
      }),
      o.jsx("span", { children: t }),
    ],
  });
}
function $b({ onRefresh: e, stats: t, handleBack: r }) {
  return o.jsx("div", {
    className:
      "bg-gradient-to-br from-cyan-900/80 via-teal-900/60 to-blue-900/80 border border-cyan-400/30 rounded-2xl p-2 sm:p-4 backdrop-blur-xl animate-slide-up shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:border-cyan-400/50 flex flex-col",
    children: o.jsxs("div", {
      className: "flex-1 flex flex-col space-y-2",
      children: [
        o.jsx(sd, { handleBack: r, onRefresh: e, pc: !0 }),
        o.jsx(rd, { stats: t, pc: !1 }),
        o.jsxs("div", {
          className: "pt-2 border-t border-cyan-400/20 flex-1",
          children: [
            o.jsxs("h2", {
              className:
                "text-base sm:text-lg font-bold bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-300 bg-clip-text text-transparent flex items-center gap-2 mb-2",
              children: [
                o.jsx("span", {
                  className: "text-xl sm:text-2xl animate-float",
                  children: "📊",
                }),
                " Legend",
              ],
            }),
            o.jsxs("div", {
              className: "space-y-3 sm:space-y-2",
              children: [
                o.jsx(Xt, {
                  icon: "✅",
                  label: "Booked | Scheduled",
                  color: "green",
                }),
                o.jsx(Xt, {
                  icon: "❌",
                  label: "Cancelled | Cancel Booking",
                  color: "red",
                }),
                o.jsx(Xt, { icon: "🏠", label: "WFH", color: "blue" }),
                o.jsx(Xt, {
                  icon: "🎊",
                  label: "Weekend | Holiday",
                  color: "orange",
                }),
                o.jsx(Xt, {
                  icon: "🎉",
                  label: "Leave | Company Leave",
                  color: "purple",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Ub({ currentDate: e, events: t, onMonthChange: r, onDateClick: s }) {
  const n = e.getFullYear(),
    a = e.getMonth(),
    i = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    l = new Date(n, a + 1, 0).getDate(),
    d = new Date(n, a, 1).getDay(),
    c = [];
  for (let f = 0; f < d; f++) c.push(null);
  for (let f = 1; f <= l; f++) c.push(f);
  const u = (f) => {
    if (!f) return null;
    const h = `${n}-${String(a + 1).padStart(2, "0")}-${String(f).padStart(2, "0")}`;
    return t == null ? void 0 : t.find((x) => x.date === h);
  };
  return o.jsxs("div", {
    className:
      "bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-pink-900/60 border border-cyan-400/30 rounded-2xl p-1 sm:p-2 sm:p-6 backdrop-blur-xl animate-slide-up shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:border-cyan-400/50 h-full flex flex-col",
    children: [
      o.jsxs("div", {
        className:
          "flex items-center justify-between mb-1 sm:mb-2 flex-shrink-0",
        children: [
          o.jsx("button", {
            onClick: () => r(-1),
            className:
              "p-2 sm:p-3 hover:bg-gradient-to-br hover:from-purple-500/40 hover:to-pink-500/30 rounded-lg transition-all duration-300 hover:scale-110 transform",
            children: o.jsx(Bt, {
              className: "w-5 sm:w-6 h-5 sm:h-6 text-cyan-300",
            }),
          }),
          o.jsxs("h2", {
            className:
              "text-xl sm:text-2xl sm:text-3xl font-black text-center flex-1 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent",
            children: [i[a], " ", n],
          }),
          o.jsx("button", {
            onClick: () => r(1),
            className:
              "p-2 sm:p-3 hover:bg-gradient-to-br hover:from-purple-500/40 hover:to-pink-500/30 rounded-lg transition-all duration-300 hover:scale-110 transform",
            children: o.jsx(Y0, {
              className: "w-5 sm:w-6 h-5 sm:h-6 text-cyan-300",
            }),
          }),
        ],
      }),
      o.jsx("div", {
        className: "grid grid-cols-7 gap-1 sm:gap-2 mb-1 sm:mb-2 flex-shrink-0",
        children: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
          (f, h) =>
            o.jsx(
              "div",
              {
                className: `text-center text-xs font-bold py-2 sm:py-3 uppercase tracking-wider ${h === 0 || h === 6 ? "bg-gradient-to-r from-orange-400/30 to-pink-400/30 text-orange-200 rounded-lg" : "text-cyan-300"}`,
                children: f,
              },
              f,
            ),
        ),
      }),
      o.jsx("div", {
        className: "grid grid-cols-7 gap-1 sm:gap-2 flex-1",
        children: c.map((f, h) => {
          if (!f) return o.jsx("div", { className: "aspect-square" }, h);
          var x = u(f);
          let m =
              "bg-gradient-to-br from-slate-700/40 to-slate-600/20 border-slate-500/30 hover:from-slate-600/60 hover:to-slate-500/40",
            g = null;
          return (
            x != null && x.color && (m = x.color),
            x != null && x.icon && (g = x.icon),
            o.jsxs(
              "button",
              {
                onClick: () => s(f),
                title: (x == null ? void 0 : x.tooltip) || "",
                className: `aspect-square ${m} border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 hover:shadow-2xl transform active:scale-95 font-bold text-white`,
                children: [
                  o.jsx("span", {
                    className: "text-xs sm:text-sm leading-tight",
                    children: f,
                  }),
                  g &&
                    o.jsx("span", {
                      className: "text-base sm:text-lg mt-0.5 animate-float",
                      children: g,
                    }),
                ],
              },
              h,
            )
          );
        }),
      }),
    ],
  });
}
function zb({
  date: e,
  events: t = [],
  onClose: r,
  handleBook: s,
  onChangeBooking: n,
}) {
  var x, m, g, p;
  const a = t.find((w) => w.date == e) || {};
  var i = new Date(),
    [l, d, c] = e.split("-").map(Number),
    u =
      new Date(l, d - 1, c) >
      new Date(i.getFullYear(), i.getMonth(), i.getDate());
  const f = a.event === "none" && u,
    h = (a.event === "scheduled" || a.event === "schedule_canceled") && u;
  return o.jsx("div", {
    className:
      "fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm",
    children: o.jsxs("div", {
      className:
        "w-full max-w-md h-[90vh] sm:h-auto bg-gradient-to-br from-purple-900/95 via-blue-900/90 to-slate-900/95 border border-cyan-400/40 rounded-3xl shadow-2xl backdrop-blur-xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 transform hover:shadow-cyan-500/50 transition-all flex flex-col",
      children: [
        o.jsxs("div", {
          className:
            "bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 p-4 sm:p-8 text-center relative overflow-hidden flex-shrink-0",
          children: [
            o.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 animate-shimmer",
            }),
            o.jsx("button", {
              onClick: r,
              className:
                "absolute top-3 sm:top-4 right-3 sm:right-4 text-white/80 hover:text-white hover:scale-125 hover:rotate-90 transition-all duration-300 text-xl sm:text-2xl transform",
              children: "✕",
            }),
            o.jsx("div", {
              className:
                "text-5xl sm:text-6xl mb-2 sm:mb-4 animate-bounce relative z-10",
              children: (a == null ? void 0 : a.icon) || "📅",
            }),
            o.jsx("div", {
              className:
                "mt-2 sm:mt-3 inline-block px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-yellow-300/30 to-orange-300/30 border border-yellow-300/60 rounded-full text-xs text-yellow-100 font-bold backdrop-blur-sm relative z-10 shadow-lg",
              children: a == null ? void 0 : a.date,
            }),
          ],
        }),
        o.jsxs("div", {
          className:
            "p-4 sm:p-6 space-y-3 sm:space-y-4 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-slate-700 flex-1",
          children: [
            ((x = a == null ? void 0 : a.events) == null ? void 0 : x.length) >
              0 &&
              o.jsxs("div", {
                className: "space-y-2 sm:space-y-3",
                children: [
                  o.jsxs("h3", {
                    className:
                      "text-white font-black text-xs sm:text-sm uppercase tracking-widest opacity-80",
                    children: [
                      "📋 Events (",
                      (m = a == null ? void 0 : a.events) == null
                        ? void 0
                        : m.length,
                      ")",
                    ],
                  }),
                  (g = a == null ? void 0 : a.events) == null
                    ? void 0
                    : g.map((w, b) =>
                        o.jsxs(
                          "div",
                          {
                            title: (w == null ? void 0 : w.tooltip) || "",
                            className: `p-3 sm:p-4 rounded-xl border-2 ${w.color} transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`,
                            style: { animationDelay: `${b * 50}ms` },
                            children: [
                              o.jsx("div", {
                                className: "flex items-start justify-between",
                                children: o.jsxs("div", {
                                  className: "flex-1",
                                  children: [
                                    o.jsxs("h4", {
                                      className:
                                        "font-bold text-white mb-1 sm:mb-2 flex items-center gap-1 sm:gap-2 text-base sm:text-lg",
                                      children: [
                                        w.icon,
                                        o.jsx("span", {
                                          className: "text-xl sm:text-2xl",
                                          children: w.name,
                                        }),
                                      ],
                                    }),
                                    w.time &&
                                      o.jsxs("p", {
                                        className:
                                          "text-white/80 text-xs sm:text-sm flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2 font-semibold",
                                        children: [
                                          o.jsx(Jt, {
                                            size: 14,
                                            className: "text-cyan-300",
                                          }),
                                          w.time,
                                        ],
                                      }),
                                    w.amount !== void 0 &&
                                      o.jsxs("p", {
                                        className: `text-xs sm:text-sm font-bold flex items-center gap-1 sm:gap-2 ${w.amount === 0 ? "text-red-300" : "text-green-300"}`,
                                        children: [
                                          o.jsx(Tr, { size: 14 }),
                                          "₹",
                                          w.amount,
                                        ],
                                      }),
                                  ],
                                }),
                              }),
                              h &&
                                o.jsx("button", {
                                  onClick: () => n(e),
                                  className:
                                    "w-full mt-2 sm:mt-3 py-2 px-3 bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 hover:from-red-500 hover:via-rose-500 hover:to-pink-500 text-white font-bold rounded-lg transition-all text-xs uppercase tracking-wider shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transform",
                                  children:
                                    a.event === "scheduled"
                                      ? "Cancel Schedule ❌"
                                      : "Remove Cancellation ❌",
                                }),
                            ],
                          },
                          b,
                        ),
                      ),
                ],
              }),
            ((p = a == null ? void 0 : a.events) == null
              ? void 0
              : p.length) === 0 &&
              o.jsx("div", {
                className:
                  "p-4 sm:p-5 rounded-xl bg-gradient-to-br from-slate-600/30 to-slate-500/20 border-2 border-slate-400/40 text-center transform hover:scale-105 transition-all duration-300",
                children: o.jsx("p", {
                  className: "text-slate-200 text-xs sm:text-sm font-semibold",
                  children: "✨ No events",
                }),
              }),
            f &&
              o.jsxs("div", {
                className:
                  "space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-cyan-400/20 animate-slide-up",
                children: [
                  o.jsx("p", {
                    className:
                      "text-white font-bold text-center text-base sm:text-lg",
                    children: "Mark as Schedule",
                  }),
                  o.jsxs("div", {
                    className: "grid grid-cols-2 gap-2 sm:gap-3",
                    children: [
                      o.jsx("button", {
                        onClick: () => s(e, !0),
                        className:
                          "py-2 sm:py-3 px-3 sm:px-4 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 hover:from-green-500 hover:via-emerald-500 hover:to-teal-500 text-white font-bold rounded-lg transition-all text-xs sm:text-sm uppercase tracking-wider hover:shadow-2xl hover:scale-110 active:scale-95 transform shadow-lg",
                        children: "Schedule ✅",
                      }),
                      o.jsx("button", {
                        onClick: () => s(e, !1),
                        className:
                          "py-2 sm:py-3 px-3 sm:px-4 bg-gradient-to-br from-gray-600 via-slate-600 to-slate-700 hover:from-gray-500 hover:via-slate-500 hover:to-slate-600 text-white font-bold rounded-lg transition-all text-xs sm:text-sm uppercase tracking-wider hover:shadow-2xl hover:scale-110 active:scale-95 transform shadow-lg",
                        children: "Cancel ❌",
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
        o.jsx("div", {
          className:
            "p-3 sm:p-4 border-t border-cyan-400/20 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 flex justify-end flex-shrink-0",
          children: o.jsx("button", {
            onClick: r,
            className:
              "py-1 sm:py-2 px-4 sm:px-6 bg-gradient-to-r from-cyan-500/40 to-purple-500/40 hover:from-cyan-500/70 hover:to-purple-500/70 text-white font-bold rounded-lg transition-all text-xs sm:text-sm uppercase tracking-wider hover:shadow-lg shadow-md transform hover:scale-105 active:scale-95 border border-cyan-400/50",
            children: "Close",
          }),
        }),
      ],
    }),
  });
}
function Hb() {
  var j;
  const { user: e } = It(),
    [t, r] = _.useState(!1),
    [s, n] = _.useState(new Date().getFullYear()),
    [a, i] = _.useState(new Date().getMonth()),
    [l, d] = _.useState(e == null ? void 0 : e.empNo),
    [c, u] = _.useState(null),
    [f, h] = _.useState([]),
    [x, m] = _.useState({
      Bookings: [],
      Amount: 0,
      PerMeal: 0,
      Canceled: [],
      LeaveDays: [],
      WFH: [],
      WorkingDays: 0,
    });
  _.useEffect(() => {
    d(l || (e == null ? void 0 : e.empNo));
  }, [e]);
  const g = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    p = async () => {
      r(!0),
        m({
          Bookings: [],
          Amount: 0,
          PerMeal: 0,
          Canceled: [],
          LeaveDays: [],
          WFH: [],
          WorkingDays: 0,
        });
      try {
        const {
          error: S,
          message: A,
          data: B,
        } = await We.post(`/foodease/calendar/report/${l}`, {
          year: s,
          month: a + 1 > 9 ? a + 1 : "0" + (a + 1),
        });
        if (S) {
          console.log(A);
          return;
        } else B && m(B);
      } catch (S) {
        console.log("API call failed:", S);
      } finally {
        r(!1);
      }
    };
  _.useEffect(() => {
    p();
  }, [l, a, s]);
  const w = [2024, 2025, 2026],
    b = () => {
      r(!0), p();
    },
    v = () => {
      window.history.back();
    },
    C = (() => {
      const S = new Date(s, a + 1, 0).getDate();
      return {
        month: g[a],
        year: s,
        totalBookings: x.Bookings.length,
        totalCancelled: x.Canceled.length,
        totalAmount: x.Amount,
        perDayRate: x.PerMeal,
        totalWFH: x.WFH.length,
        totalLeaves: x.LeaveDays.length,
        workingDays: x.WorkingDays,
        daysInMonth: S,
        bookingDates: x.Bookings,
        cancelledDates: x.Canceled,
        wfhDates: x.WFH,
        leaveDates: x.LeaveDays,
      };
    })(),
    E = (S) => {
      let A = [];
      switch (S) {
        case "booking":
          A = C.bookingDates;
          break;
        case "cancelled":
          A = C.cancelledDates;
          break;
        case "wfh":
          A = C.wfhDates;
          break;
        case "leave":
          A = C.leaveDates;
          break;
      }
      h(A), u(S);
    },
    N = (S) => {
      let A = `FoodEase Report - ${C.month} ${C.year}

`;
      if (
        ((A += `Total Bookings: ${C.totalBookings}
Total Cancelled: ${C.totalCancelled}
`),
        (A += `Total Amount: ${C.totalAmount}
Per Day Rate: ${C.perDayRate}
`),
        S === "txt")
      ) {
        const B = new Blob([A], { type: "text/plain;charset=utf-8" }),
          k = window.URL.createObjectURL(B),
          T = document.createElement("a");
        (T.href = k),
          (T.download = `foodease-report-${C.month}-${C.year}.txt`),
          document.body.appendChild(T),
          T.click(),
          document.body.removeChild(T),
          window.URL.revokeObjectURL(k);
      } else if (S === "csv") {
        A = `Metric,Value
Total Bookings,${C.totalBookings}
Total Cancelled,${C.totalCancelled}
Total Amount,${C.totalAmount}
Per Day Rate,${C.perDayRate}`;
        const B = new Blob([A], { type: "text/csv;charset=utf-8" }),
          k = window.URL.createObjectURL(B),
          T = document.createElement("a");
        (T.href = k),
          (T.download = `foodease-report-${C.month}-${C.year}.csv`),
          document.body.appendChild(T),
          T.click(),
          document.body.removeChild(T),
          window.URL.revokeObjectURL(k);
      }
    };
  return o.jsxs("div", {
    className: "min-h-screen w-full relative overflow-hidden bg-gray-950",
    children: [
      o.jsxs("div", {
        className:
          "fixed inset-0 opacity-50 pointer-events-none overflow-hidden",
        children: [
          o.jsx("div", {
            className:
              "absolute -top-40 -left-40 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl animate-blob-slow bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600",
            style: { animationDuration: "25s", animationDelay: "0s" },
          }),
          o.jsx("div", {
            className:
              "absolute -bottom-40 -right-40 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl animate-blob-fast bg-gradient-to-br from-pink-400 via-red-500 to-orange-600",
            style: { animationDuration: "20s", animationDelay: "2s" },
          }),
          o.jsx("div", {
            className:
              "absolute top-1/2 left-1/3 w-80 h-80 rounded-full mix-blend-screen filter blur-3xl opacity-80 animate-blob-medium bg-gradient-to-br from-purple-400 via-indigo-500 to-violet-600",
            style: { animationDuration: "28s", animationDelay: "1s" },
          }),
          o.jsx("div", {
            className:
              "absolute top-1/4 right-1/4 w-72 h-72 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob-fast bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600",
            style: { animationDuration: "22s", animationDelay: "3s" },
          }),
          o.jsx("div", {
            className:
              "absolute bottom-1/4 left-1/2 w-64 h-64 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob-slow bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600",
            style: { animationDuration: "30s", animationDelay: "4s" },
          }),
          o.jsx("div", {
            className:
              "absolute top-20 right-20 w-60 h-60 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob-medium bg-gradient-to-br from-lime-400 via-green-500 to-emerald-600",
            style: { animationDuration: "26s", animationDelay: "5s" },
          }),
          o.jsx("div", {
            className:
              "absolute bottom-20 left-20 w-88 h-88 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob-ultra-slow bg-gradient-to-br from-rose-400 via-pink-500 to-fuchsia-600",
            style: { animationDuration: "35s", animationDelay: "6s" },
          }),
          o.jsx("div", {
            className:
              "absolute top-40 left-60 w-52 h-52 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob-extra-fast bg-gradient-to-br from-indigo-400 via-violet-500 to-purple-600",
            style: { animationDuration: "15s", animationDelay: "7s" },
          }),
        ],
      }),
      o.jsx("div", {
        className: "fixed inset-0 pointer-events-none opacity-10",
        children: o.jsx("div", {
          className:
            "absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(6,182,212,.1)_25%,rgba(6,182,212,.1)_26%,transparent_27%,transparent_74%,rgba(6,182,212,.1)_75%,rgba(6,182,212,.1)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(6,182,212,.1)_25%,rgba(6,182,212,.1)_26%,transparent_27%,transparent_74%,rgba(6,182,212,.1)_75%,rgba(6,182,212,.1)_76%,transparent_77%,transparent)] bg-[length:50px_50px] animate-grid-slow",
        }),
      }),
      o.jsx("div", {
        className: "relative z-10",
        children: o.jsxs("div", {
          className: "min-h-screen w-full flex flex-col p-4 md:p-8 gap-8",
          children: [
            o.jsxs("div", {
              className:
                "flex items-center justify-between animate-fade-in-down",
              children: [
                o.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    o.jsx("button", {
                      onClick: v,
                      className:
                        "p-3 rounded-2xl border backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center font-semibold bg-gradient-to-br from-blue-600/80 via-cyan-600/80 to-blue-700/80 hover:from-blue-500/90 hover:via-cyan-500/90 hover:to-blue-600/90 border-cyan-400/70 text-white shadow-blue-500/40 active:scale-95 hover:scale-110 animate-pulse-slow",
                      children: o.jsx(Bt, { className: "w-5 h-5" }),
                    }),
                    o.jsx("div", {
                      children: o.jsx("h1", {
                        className:
                          "text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-shift",
                        children: "FoodEase",
                      }),
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className:
                    "flex items-center gap-2 flex-wrap w-full sm:w-auto justify-end",
                  children: [
                    o.jsxs("button", {
                      onClick: () => N("txt"),
                      className:
                        "px-3 py-2 rounded-2xl border backdrop-blur-md shadow-xl hover:shadow-2xl transition-all font-bold bg-gradient-to-br from-orange-600/80 to-amber-600/80 hover:from-orange-500/90 hover:to-amber-500/90 border-orange-400/70 text-white shadow-orange-500/40 active:scale-95 hover:scale-110 flex items-center gap-2 animate-pulse-slow",
                      children: [o.jsx(_n, { className: "w-5 h-5" }), " TXT"],
                    }),
                    o.jsxs("button", {
                      onClick: () => N("csv"),
                      className:
                        "px-3 py-2 rounded-2xl border backdrop-blur-md shadow-xl hover:shadow-2xl transition-all font-bold bg-gradient-to-br from-green-600/80 to-emerald-600/80 hover:from-green-500/90 hover:to-emerald-500/90 border-green-400/70 text-white shadow-green-500/40 active:scale-95 hover:scale-110 flex items-center gap-2 animate-pulse-slow",
                      children: [o.jsx(_n, { className: "w-5 h-5" }), " CSV"],
                    }),
                    o.jsxs("button", {
                      onClick: b,
                      className:
                        "px-3 py-2 rounded-2xl border backdrop-blur-md shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 font-semibold bg-gradient-to-br from-pink-600/80 via-rose-600/80 to-pink-700/80 hover:from-pink-500/90 hover:via-rose-500/90 hover:to-pink-600/90 text-white border-pink-400/70 shadow-pink-500/40 active:scale-95 hover:scale-110",
                      children: [
                        o.jsx(ju, {
                          className: `w-5 h-5 ${t ? "animate-spin" : ""}`,
                        }),
                        " ",
                        "RELOAD",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              className: `grid grid-cols-1 ${e != null && e.admin ? "md:grid-cols-3" : "md:grid-cols-2"} gap-6`,
              children: [
                o.jsxs("div", {
                  className:
                    "p-6 rounded-3xl border backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all bg-gradient-to-br from-indigo-600/50 via-purple-600/40 to-indigo-700/50 border-indigo-400/60 hover:border-indigo-300/80 hover:scale-105 duration-500 group relative overflow-hidden animate-float",
                  children: [
                    o.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl",
                    }),
                    o.jsxs("div", {
                      className: "relative z-10",
                      children: [
                        o.jsxs("label", {
                          className:
                            "block text-sm font-bold mb-4 flex items-center gap-2 text-indigo-200 animate-pulse",
                          children: [
                            o.jsx(q0, {
                              className:
                                "w-5 h-5 text-indigo-300 animate-spin-slow",
                            }),
                            " ",
                            "Select Year",
                          ],
                        }),
                        o.jsx("select", {
                          value: s,
                          onChange: (S) => n(parseInt(S.target.value)),
                          className:
                            "w-full px-4 py-3 rounded-xl border bg-gray-900/80 border-blue-400/60 hover:border-blue-300/80 text-white font-bold focus:border-blue-300 outline-none transition-all cursor-pointer text-sm appearance-none bg-no-repeat pr-10 bg-right shadow-lg hover:shadow-xl backdrop-blur-md hover:animate-shake",
                          style: {
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2360a5fa' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                          },
                          children: w.map((S, A) =>
                            o.jsx(
                              "option",
                              {
                                value: S,
                                className: "bg-gray-900 text-white",
                                children: S,
                              },
                              A,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className:
                    "p-6 rounded-3xl border backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all bg-gradient-to-br from-blue-600/50 via-cyan-600/40 to-blue-700/50 border-blue-400/60 hover:border-blue-300/80 hover:scale-105 duration-500 group relative overflow-hidden animate-float",
                  style: { animationDelay: "0.1s" },
                  children: [
                    o.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl",
                    }),
                    o.jsxs("div", {
                      className: "relative z-10",
                      children: [
                        o.jsxs("label", {
                          className:
                            "block text-sm font-bold mb-4 flex items-center gap-2 text-blue-200 animate-pulse",
                          children: [
                            o.jsx(K0, {
                              className:
                                "w-5 h-5 text-blue-300 animate-bounce-slow",
                            }),
                            " ",
                            "Select Month",
                          ],
                        }),
                        o.jsx("select", {
                          value: a,
                          onChange: (S) => i(parseInt(S.target.value)),
                          className:
                            "w-full px-4 py-3 rounded-xl border bg-gray-900/80 border-blue-400/60 hover:border-blue-300/80 text-white font-bold focus:border-blue-300 outline-none transition-all cursor-pointer text-sm appearance-none bg-no-repeat pr-10 bg-right shadow-lg hover:shadow-xl backdrop-blur-md hover:animate-shake",
                          style: {
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2360a5fa' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                          },
                          children: g.map((S, A) =>
                            o.jsx(
                              "option",
                              {
                                value: A,
                                className: "bg-gray-900 text-white",
                                children: S,
                              },
                              A,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (e == null ? void 0 : e.admin) &&
                  o.jsxs("div", {
                    className:
                      "p-6 rounded-3xl border backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all bg-gradient-to-br from-pink-600/50 via-rose-600/40 to-pink-700/50 border-pink-400/60 hover:border-pink-300/80 hover:scale-105 duration-500 group relative overflow-hidden animate-float",
                    style: { animationDelay: "0.2s" },
                    children: [
                      o.jsx("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-br from-pink-500/30 to-rose-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl",
                      }),
                      o.jsxs("div", {
                        className: "relative z-10",
                        children: [
                          o.jsxs("label", {
                            className:
                              "block text-sm font-bold mb-4 flex items-center gap-2 text-pink-200 animate-pulse",
                            children: [
                              o.jsx(Fn, {
                                className:
                                  "w-5 h-5 text-pink-300 animate-spin-slow",
                              }),
                              " ",
                              "Select User",
                            ],
                          }),
                          o.jsx("select", {
                            value: l,
                            onChange: (S) => d(S.target.value),
                            className:
                              "w-full px-4 py-3 rounded-xl border bg-gray-900/80 border-pink-400/60 hover:border-pink-300/80 text-white font-bold focus:border-pink-300 outline-none transition-all cursor-pointer text-sm appearance-none bg-no-repeat pr-10 bg-right shadow-lg hover:shadow-xl backdrop-blur-md hover:animate-shake",
                            style: {
                              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23f472b6' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                            },
                            children:
                              (j = e == null ? void 0 : e.users) == null
                                ? void 0
                                : j.map((S) =>
                                    o.jsxs(
                                      "option",
                                      {
                                        value: S.empNo,
                                        className: "bg-gray-900 text-white",
                                        children: [S.name, " (", S.empNo, ")"],
                                      },
                                      S.empNo,
                                    ),
                                  ),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
            t
              ? o.jsx(qb, {})
              : o.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                  children: [
                    {
                      icon: "✅",
                      label: "Total Bookings",
                      value: C.totalBookings,
                      gradient: "from-emerald-500 to-green-600",
                      border: "border-emerald-400",
                      text: "text-emerald-300",
                      onClick: () => E("booking"),
                      color: "emerald",
                    },
                    {
                      icon: "❌",
                      label: "Total Cancelled",
                      value: C.totalCancelled,
                      gradient: "from-red-500 to-rose-600",
                      border: "border-red-400",
                      text: "text-red-300",
                      onClick: () => E("cancelled"),
                      color: "red",
                    },
                    {
                      icon: "💰",
                      label: "Total Amount",
                      value: `₹${C.totalAmount}`,
                      gradient: "from-yellow-500 to-orange-600",
                      border: "border-yellow-400",
                      text: "text-yellow-300",
                      color: "yellow",
                    },
                    {
                      icon: "📊",
                      label: "Per Day Rate",
                      value: `₹${C.perDayRate}`,
                      gradient: "from-indigo-500 to-blue-600",
                      border: "border-indigo-400",
                      text: "text-indigo-300",
                      color: "indigo",
                    },
                    {
                      icon: "🏠",
                      label: "Total WFH",
                      value: C.totalWFH,
                      gradient: "from-orange-500 to-amber-600",
                      border: "border-orange-400",
                      text: "text-orange-300",
                      onClick: () => E("wfh"),
                      color: "orange",
                    },
                    {
                      icon: "🎉",
                      label: "Total Leaves",
                      value: C.totalLeaves,
                      gradient: "from-pink-500 to-rose-600",
                      border: "border-pink-400",
                      text: "text-pink-300",
                      onClick: () => E("leave"),
                      color: "pink",
                    },
                    {
                      icon: "📅",
                      label: "Working Days",
                      value: C.workingDays,
                      gradient: "from-violet-500 to-purple-600",
                      border: "border-violet-400",
                      text: "text-violet-300",
                      color: "violet",
                    },
                    {
                      icon: "🔢",
                      label: "Days in Month",
                      value: C.daysInMonth,
                      gradient: "from-cyan-500 to-teal-600",
                      border: "border-cyan-400",
                      text: "text-cyan-300",
                      color: "cyan",
                    },
                  ].map((S, A) =>
                    o.jsx(Wb, G(O({}, S), { delay: A * 0.1 }), S.label),
                  ),
                }),
            c && o.jsx(Kb, { type: c, dates: f, onClose: () => u(null) }),
          ],
        }),
      }),
      o.jsx("style", {
        children: `
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes blobSlow {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          25% { transform: translate(40px, -30px) scale(1.05); }
          50% { transform: translate(-30px, 40px) scale(0.95); }
          75% { transform: translate(20px, 20px) scale(1.08); }
        }
        @keyframes blobMedium {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          30% { transform: translate(-40px, 30px) scale(1.1); }
          60% { transform: translate(40px, -20px) scale(0.9); }
        }
        @keyframes blobFast {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          20% { transform: translate(25px, -40px) scale(1.15); }
          40% { transform: translate(-25px, 35px) scale(0.85); }
          60% { transform: translate(35px, 15px) scale(1.1); }
          80% { transform: translate(-15px, -25px) scale(0.9); }
        }
        @keyframes blobUltraSlow {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(50px, -20px) scale(1.2); }
        }
        @keyframes blobExtraFast {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          10% { transform: translate(15px, -25px) scale(1.2); }
          30% { transform: translate(-15px, 25px) scale(0.8); }
          50% { transform: translate(25px, 10px) scale(1.15); }
          70% { transform: translate(-10px, -15px) scale(0.95); }
          90% { transform: translate(10px, 15px) scale(1.05); }
        }
        @keyframes gridSlow {
          0% { transform: translateY(-50px); }
          100% { transform: translateY(0); }
        }
        .animate-blob-slow { animation: blobSlow 25s infinite ease-in-out; }
        .animate-blob-medium { animation: blobMedium 22s infinite ease-in-out; }
        .animate-blob-fast { animation: blobFast 18s infinite ease-in-out; }
        .animate-blob-ultra-slow { animation: blobUltraSlow 35s infinite ease-in-out; }
        .animate-blob-extra-fast { animation: blobExtraFast 15s infinite ease-in-out; }
        .animate-grid-slow { animation: gridSlow 30s linear infinite; }
        
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fadeInDown 0.8s ease-out; }
        
        @keyframes staggerFade {
          from { opacity: 0; transform: translateY(30px) scale(0.9) rotate(-5deg); }
          to { opacity: 1; transform: translateY(0) scale(1) rotate(0); }
        }
        .animate-stagger-fade { animation: staggerFade 0.7s ease-out forwards; }
        
        @keyframes shimmer {
          0%, 100% { opacity: 0.4; transform: translateX(-100%); }
          50% { opacity: 1; transform: translateX(100%); }
        }
        .animate-shimmer { animation: shimmer 1.5s infinite; }
        
        @keyframes pulseSlow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-slow { animation: pulseSlow 3s ease-in-out infinite; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          75% { transform: translateX(2px); }
        }
        .animate-shake { animation: shake 0.5s ease-in-out; }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift { 
          background-size: 200% 200%; 
          animation: gradientShift 4s ease infinite; 
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right { animation: slideInRight 0.6s ease-out; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }
        
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spinSlow 3s linear infinite; }
        
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow { animation: bounceSlow 2s infinite; }
        
        .grid > * {
          animation: staggerFade 0.7s ease-out forwards;
          opacity: 0;
        }
        .grid > *:nth-child(1) { animation-delay: 0.2s; }
        .grid > *:nth-child(2) { animation-delay: 0.3s; }
        .grid > *:nth-child(3) { animation-delay: 0.4s; }
        .grid > *:nth-child(4) { animation-delay: 0.5s; }
        .grid > *:nth-child(5) { animation-delay: 0.6s; }
        .grid > *:nth-child(6) { animation-delay: 0.7s; }
        .grid > *:nth-child(7) { animation-delay: 0.8s; }
        .grid > *:nth-child(8) { animation-delay: 0.9s; }
        
        .skeleton-loading {
          animation: shimmer 2s infinite;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        }
      `,
      }),
    ],
  });
}
function qb() {
  return o.jsx("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
    children: [1, 2, 3, 4, 5, 6, 7, 8].map((e) =>
      o.jsxs(
        "div",
        {
          className:
            "p-6 rounded-3xl bg-gray-800/60 border border-gray-700/50 overflow-hidden backdrop-blur-lg relative shadow-xl animate-pulse-slow",
          style: { animationDelay: `${e * 0.1}s` },
          children: [
            o.jsxs("div", {
              className: "flex items-center gap-3 mb-4 animate-shimmer",
              children: [
                o.jsx("div", {
                  className:
                    "w-8 h-8 rounded-xl bg-gradient-to-r from-cyan-400/40 to-purple-400/40 animate-spin-slow",
                }),
                o.jsx("div", {
                  className:
                    "h-4 bg-gradient-to-r from-gray-600/60 to-transparent rounded w-24",
                }),
              ],
            }),
            o.jsx("div", {
              className:
                "h-10 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-xl w-20 mb-4 animate-shimmer",
            }),
            o.jsx("div", {
              className:
                "relative w-full h-3 bg-gray-700/60 rounded overflow-hidden animate-shimmer",
              children: o.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent skeleton-loading",
              }),
            }),
            o.jsx("div", {
              className: "mt-3 h-2 bg-gray-700/40 rounded w-12 animate-shimmer",
            }),
          ],
        },
        e,
      ),
    ),
  });
}
function Wb({
  icon: e,
  label: t,
  value: r,
  gradient: s,
  border: n,
  text: a,
  onClick: i,
  delay: l = 0,
  color: d = "blue",
}) {
  const c = {
    emerald: "shadow-emerald-500/50",
    red: "shadow-red-500/50",
    yellow: "shadow-yellow-500/50",
    indigo: "shadow-indigo-500/50",
    orange: "shadow-orange-500/50",
    pink: "shadow-pink-500/50",
    violet: "shadow-violet-500/50",
    cyan: "shadow-cyan-500/50",
  };
  return o.jsxs("div", {
    onClick: i,
    className: `p-6 rounded-3xl bg-gradient-to-br ${s}/20 ${n}/50 border backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden cursor-pointer hover:scale-110 active:scale-95 animate-stagger-fade ${c[d]} hover:${c[d]} hover:rotate-1`,
    style: { animationDelay: `${l}s` },
    children: [
      o.jsx("div", {
        className:
          "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-white/20 to-transparent",
      }),
      o.jsx("div", {
        className: `absolute -inset-4 opacity-0 group-hover:opacity-30 blur-3xl transition-all duration-500 bg-gradient-to-br ${s} rounded-3xl`,
        style: { zIndex: -1 },
      }),
      o.jsxs("div", {
        className: "relative z-10 flex items-center gap-3 mb-4",
        children: [
          o.jsx("span", {
            className:
              "text-2xl animate-bounce-slow group-hover:scale-125 transition-transform duration-300",
            children: e,
          }),
          o.jsx("p", {
            className: `text-sm text-gray-300 font-bold truncate ${a} animate-fade-in-up`,
            children: t,
          }),
        ],
      }),
      o.jsx("p", {
        className:
          "text-3xl font-black bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent animate-gradient-shift",
        children: r,
      }),
    ],
  });
}
function Kb({ type: e, dates: t, onClose: r }) {
  const n = {
    booking: {
      title: "✅ Booking Dates",
      gradient: "from-emerald-600/70 to-green-700/70",
      border: "border-emerald-400",
      header: "bg-gradient-to-r from-emerald-900/90 to-green-900/90",
      textColor: "text-emerald-400",
    },
    cancelled: {
      title: "❌ Cancelled Dates",
      gradient: "from-red-600/70 to-rose-700/70",
      border: "border-red-400",
      header: "bg-gradient-to-r from-red-900/90 to-rose-900/90",
      textColor: "text-red-400",
    },
    holiday: {
      title: "🎊 Holiday Dates",
      gradient: "from-orange-600/70 to-amber-700/70",
      border: "border-orange-400",
      header: "bg-gradient-to-r from-orange-900/90 to-amber-900/90",
      textColor: "text-orange-400",
    },
    leave: {
      title: "🎉 Company Leave Dates",
      gradient: "from-pink-600/70 to-rose-700/70",
      border: "border-pink-400",
      header: "bg-gradient-to-r from-pink-900/90 to-rose-900/90",
      textColor: "text-pink-400",
    },
  }[e];
  return o.jsx("div", {
    className:
      "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-3xl animate-fade-in",
    children: o.jsxs("div", {
      className: `w-full max-w-md bg-gray-900/95 border-t-4 ${n.border} rounded-3xl shadow-2xl backdrop-blur-2xl overflow-hidden animate-slide-up border border-gray-700/50`,
      children: [
        o.jsxs("div", {
          className: `${n.header} p-6 relative border-b border-gray-700/50 backdrop-blur-xl`,
          children: [
            o.jsx("button", {
              onClick: r,
              className:
                "absolute top-3 right-3 text-gray-400 hover:text-gray-200 hover:scale-110 hover:rotate-90 transition-all text-xl font-bold duration-300 animate-pulse-slow",
              children: "✕",
            }),
            o.jsx("h2", {
              className:
                "text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent animate-gradient-shift",
              children: n.title,
            }),
            o.jsxs("p", {
              className: "text-gray-400 text-sm mt-1 font-semibold",
              children: ["Total: ", t.length, " dates"],
            }),
          ],
        }),
        o.jsx("div", {
          className:
            "p-6 max-h-96 overflow-y-auto space-y-3 bg-gradient-to-b from-gray-900/60 to-gray-950/60 backdrop-blur-md",
          children:
            t.length === 0
              ? o.jsx("p", {
                  className:
                    "text-center py-8 text-gray-500 text-base animate-pulse",
                  children: "No dates found",
                })
              : t.map((a, i) =>
                  o.jsxs(
                    "div",
                    {
                      className: `p-4 rounded-xl border backdrop-blur-xl transition-all hover:scale-105 hover:shadow-lg bg-gray-800/80 border-gray-700/50 text-gray-200 font-semibold flex items-center gap-3 text-sm group cursor-pointer animate-stagger-fade hover:bg-gray-700/90 hover:border-gray-600/70 bg-gradient-to-br ${n.gradient} hover:animate-shake`,
                      style: { animationDelay: `${i * 0.05}s` },
                      children: [
                        o.jsx("span", {
                          className: `${n.textColor} group-hover:scale-125 transition-transform text-lg group-hover:rotate-12 duration-300`,
                          children: "📍",
                        }),
                        o.jsx("span", { className: "truncate", children: a }),
                      ],
                    },
                    i,
                  ),
                ),
        }),
        o.jsx("div", {
          className:
            "bg-gradient-to-r from-gray-800/90 to-gray-900/90 p-6 border-t border-gray-700/50 backdrop-blur-xl",
          children: o.jsx("button", {
            onClick: r,
            className:
              "w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-600 text-white font-bold transition-all text-base shadow-lg hover:shadow-xl backdrop-blur-xl hover:scale-105 active:scale-95 duration-300 animate-pulse-slow",
            children: "Close",
          }),
        }),
      ],
    }),
  });
}
function Yb() {
  var D, z, P, Y, U, re, ne;
  const [e, t] = _.useState(1),
    [r, s] = _.useState(""),
    [n, a] = _.useState(""),
    [i, l] = _.useState(""),
    [d, c] = _.useState(!1),
    [u, f] = _.useState(""),
    [h, x] = _.useState(""),
    [m, g] = _.useState(""),
    [p, w] = _.useState(!1),
    [b, v] = _.useState(!1),
    [y, C] = _.useState(new Date(2025, 10, 16)),
    E = new Date(2025, 10, 16),
    N = E.getDate(),
    j = new Date(y.getFullYear(), y.getMonth() + 1, 0).getDate(),
    S = new Date(y.getFullYear(), y.getMonth(), 1).getDay(),
    A = {
      "EMP001-15": "booked",
      "EMP002-10": "leave",
      "EMP003-20": "wfh",
      "EMP004-05": "cancelled",
      "EMP005-25": "booked",
    },
    B = new Set(Object.keys(A).map((V) => V.split("-")[1])),
    k = [
      {
        id: "EMP001",
        name: "John Doe",
        email: "john@example.com",
        role: "Senior Developer",
        avatar: "👨‍💻",
      },
      {
        id: "EMP002",
        name: "Jane Smith",
        email: "jane@example.com",
        role: "UI/UX Designer",
        avatar: "👩‍🎨",
      },
      {
        id: "EMP003",
        name: "Mike Johnson",
        email: "mike@example.com",
        role: "Product Manager",
        avatar: "👨‍💼",
      },
      {
        id: "EMP004",
        name: "Sarah Williams",
        email: "sarah@example.com",
        role: "Frontend Developer",
        avatar: "👩‍💻",
      },
      {
        id: "EMP005",
        name: "Alex Brown",
        email: "alex@example.com",
        role: "QA Tester",
        avatar: "🧪",
      },
      {
        id: "EMP006",
        name: "Emily Davis",
        email: "emily@example.com",
        role: "Backend Developer",
        avatar: "🔧",
      },
      {
        id: "EMP007",
        name: "David Wilson",
        email: "david@example.com",
        role: "DevOps Engineer",
        avatar: "⚙️",
      },
    ],
    T = k.filter(
      (V) =>
        V.name.toLowerCase().includes(m.toLowerCase()) ||
        V.id.toLowerCase().includes(m.toLowerCase()) ||
        V.email.toLowerCase().includes(m.toLowerCase()) ||
        V.role.toLowerCase().includes(m.toLowerCase()),
    ),
    I = [
      {
        value: "booked",
        label: "Booked",
        icon: "🍽️",
        color: "from-emerald-400 via-green-500 to-teal-600",
        glow: "shadow-emerald-500/50",
        description: "Reservation confirmed",
      },
      {
        value: "leave",
        label: "Leave",
        icon: "🎉",
        color: "from-pink-400 via-rose-500 to-red-600",
        glow: "shadow-rose-500/50",
        description: "Paid time off",
      },
      {
        value: "cancelled",
        label: "Cancelled",
        icon: "❌",
        color: "from-red-400 via-rose-500 to-pink-600",
        glow: "shadow-red-500/50",
        description: "Booking cancelled",
      },
      {
        value: "wfh",
        label: "WFH",
        icon: "💻",
        color: "from-indigo-400 via-blue-500 to-violet-600",
        glow: "shadow-blue-500/50",
        description: "Work from home",
      },
      {
        value: "sick",
        label: "Sick",
        icon: "🤒",
        color: "from-orange-400 via-amber-500 to-yellow-600",
        glow: "shadow-amber-500/50",
        description: "Sick leave",
      },
      {
        value: "remote",
        label: "Remote",
        icon: "📹",
        color: "from-purple-400 via-violet-500 to-indigo-600",
        glow: "shadow-violet-500/50",
        description: "Off-site meeting",
      },
    ];
  _.useEffect(() => {
    e === 2 && (w(!0), g(""));
  }, [e]);
  const $ = [];
  for (let V = 0; V < S; V++) $.push(null);
  for (let V = 1; V <= j; V++) $.push(V);
  const H = [];
  for (let V = 0; V < $.length; V += 7) H.push($.slice(V, V + 7));
  const W = () => {
      const V = `${n}-${r}`;
      return A[V];
    },
    q = () => !!W(),
    Z = async () => {
      if (!r || !n || !i) {
        x("Please complete all selections"), v(!1);
        return;
      }
      c(!0), x(""), f("");
      try {
        await new Promise((le) => setTimeout(le, 1500));
        const V = `${n}-${r}`;
        A[V] = i;
        const he = y.toLocaleString("default", {
          month: "long",
          year: "numeric",
        });
        f(`✅ Status updated successfully for ${r} ${he}`),
          v(!1),
          setTimeout(() => {
            t(1), s(""), a(""), l("");
          }, 2e3);
      } catch (V) {
        x("Failed to update status. Please try again."), v(!1);
      } finally {
        c(!1);
      }
    },
    K = () => {
      e > 1 && (t(e - 1), e === 2 && s(""), e === 3 && a(""));
    },
    R = y.toLocaleString("default", { month: "long", year: "numeric" }),
    M = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    L = (V) => {
      if (!V) return "";
      const he = V === N && y.getMonth() === E.getMonth(),
        le =
          new Date(y.getFullYear(), y.getMonth(), V).getDay() === 0 ||
          new Date(y.getFullYear(), y.getMonth(), V).getDay() === 6,
        pe = B.has(V.toString().padStart(2, "0")),
        gt = r === V.toString().padStart(2, "0");
      let Be =
        "relative p-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer border-2 ";
      return (
        he
          ? (Be +=
              "bg-gradient-to-br from-yellow-400 to-orange-500 text-white border-yellow-300 shadow-lg shadow-yellow-500/50")
          : gt
            ? (Be +=
                "bg-gradient-to-br from-blue-500 to-cyan-600 text-white border-blue-300 shadow-lg shadow-blue-500/50")
            : pe
              ? (Be +=
                  "bg-gradient-to-br from-green-500 to-emerald-600 text-white border-green-300 shadow-lg shadow-green-500/50")
              : le
                ? (Be +=
                    "bg-gray-700/60 text-gray-300 border-gray-600/50 hover:bg-gray-600/70")
                : (Be +=
                    "bg-gray-800/40 text-gray-200 border-gray-700/40 hover:bg-gray-700/60"),
        Be
      );
    };
  return o.jsxs("div", {
    className: "min-h-screen w-full relative overflow-hidden bg-gray-950",
    children: [
      o.jsxs("div", {
        className:
          "fixed inset-0 opacity-30 pointer-events-none overflow-hidden",
        children: [
          o.jsx("div", {
            className:
              "absolute -top-40 -left-40 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl animate-blob-slow bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600",
            style: { animationDuration: "40s" },
          }),
          o.jsx("div", {
            className:
              "absolute -bottom-40 -right-40 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl animate-blob-fast bg-gradient-to-br from-rose-400 via-pink-500 to-red-600",
            style: { animationDuration: "30s", animationDelay: "5s" },
          }),
          o.jsx("div", {
            className:
              "absolute top-1/2 left-1/3 w-80 h-80 rounded-full mix-blend-screen filter blur-3xl opacity-80 animate-blob-medium bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-600",
            style: { animationDuration: "45s", animationDelay: "2s" },
          }),
          Array.from({ length: 15 }).map((V, he) =>
            o.jsx(
              "div",
              {
                className:
                  "absolute w-1 h-1 bg-white/20 rounded-full animate-float",
                style: {
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${5 + Math.random() * 10}s`,
                },
              },
              he,
            ),
          ),
        ],
      }),
      o.jsx("div", {
        className: "fixed inset-0 pointer-events-none opacity-10",
        children: o.jsx("div", {
          className:
            "absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(34,197,94,.1)_25%,rgba(34,197,94,.1)_26%,transparent_27%,transparent_74%,rgba(34,197,94,.1)_75%,rgba(34,197,94,.1)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(34,197,94,.1)_25%,rgba(34,197,94,.1)_26%,transparent_27%,transparent_74%,rgba(34,197,94,.1)_75%,rgba(34,197,94,.1)_76%,transparent_77%,transparent)] bg-[length:80px_80px]",
        }),
      }),
      o.jsxs("div", {
        className: "relative z-10 w-full p-4 md:p-8",
        children: [
          o.jsxs("div", {
            className: "flex items-center gap-4 mb-8 animate-fade-in-down",
            children: [
              o.jsx("button", {
                onClick: K,
                className:
                  "p-3 rounded-2xl border backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center font-semibold bg-gradient-to-br from-slate-600/80 to-gray-700/80 hover:from-slate-500/90 hover:to-gray-600/90 border-slate-400/70 text-white shadow-slate-500/40 active:scale-95 hover:scale-110",
                children: o.jsx(Bt, { className: "w-5 h-5" }),
              }),
              o.jsxs("div", {
                className: "flex-1",
                children: [
                  o.jsx("h1", {
                    className:
                      "text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-300 via-gray-200 to-white bg-clip-text text-transparent",
                    children: "Advanced Leave Manager",
                  }),
                  o.jsx("p", {
                    className: "text-gray-500 text-sm mt-1",
                    children: R,
                  }),
                ],
              }),
              o.jsx("div", {
                className: "w-64 bg-gray-700/50 rounded-full h-2",
                children: o.jsx("div", {
                  className:
                    "bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full transition-all duration-500 shadow-lg",
                  style: { width: `${(e / 3) * 100}%` },
                }),
              }),
            ],
          }),
          u &&
            o.jsx("div", {
              className:
                "mb-6 p-6 rounded-3xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-400/50 backdrop-blur-lg animate-slide-in-right",
              children: o.jsx("p", {
                className: "text-emerald-300 font-bold text-lg text-center",
                children: u,
              }),
            }),
          h &&
            o.jsx("div", {
              className:
                "mb-6 p-6 rounded-3xl bg-gradient-to-br from-red-600/20 to-rose-600/20 border border-red-400/50 backdrop-blur-lg animate-slide-in-right",
              children: o.jsx("p", {
                className: "text-red-300 font-bold text-lg text-center",
                children: h,
              }),
            }),
          e === 1 &&
            o.jsx("div", {
              className: "max-w-2xl mx-auto animate-fade-in-up",
              children: o.jsxs("div", {
                className:
                  "p-8 rounded-3xl border backdrop-blur-xl shadow-2xl bg-gradient-to-br from-slate-600/40 to-gray-700/30 border-slate-400/60 group relative overflow-hidden",
                children: [
                  o.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-br from-slate-500/20 to-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl",
                  }),
                  o.jsxs("div", {
                    className: "relative z-10",
                    children: [
                      o.jsxs("div", {
                        className: "flex items-center gap-3 mb-8",
                        children: [
                          o.jsx("div", {
                            className:
                              "p-3 rounded-xl bg-slate-500/30 backdrop-blur-lg text-2xl",
                            children: "📅",
                          }),
                          o.jsxs("div", {
                            children: [
                              o.jsx("h2", {
                                className: "text-2xl font-bold text-white",
                                children: "Select Date",
                              }),
                              o.jsxs("p", {
                                className: "text-slate-200 text-sm",
                                children: [
                                  "Choose a date in ",
                                  R,
                                  " ",
                                  o.jsxs("span", {
                                    className: "text-yellow-300",
                                    children: ["• Today: ", N],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                          o.jsx("button", {
                            onClick: () =>
                              C(new Date(y.getFullYear(), y.getMonth() - 1)),
                            className:
                              "p-2 rounded-lg hover:bg-gray-700/50 transition",
                            children: o.jsx(Bt, {
                              className: "w-5 h-5 text-gray-300",
                            }),
                          }),
                          o.jsx("span", {
                            className: "text-lg font-semibold text-white",
                            children: R,
                          }),
                          o.jsx("button", {
                            onClick: () =>
                              C(new Date(y.getFullYear(), y.getMonth() + 1)),
                            className:
                              "p-2 rounded-lg hover:bg-gray-700/50 transition",
                            children: o.jsx(Y0, {
                              className: "w-5 h-5 text-gray-300",
                            }),
                          }),
                        ],
                      }),
                      o.jsx("div", {
                        className: "grid grid-cols-7 gap-2 mb-4",
                        children: M.map((V) =>
                          o.jsx(
                            "div",
                            {
                              className: `text-center text-sm font-semibold py-2 ${V === "Sun" || V === "Sat" ? "text-purple-400" : "text-gray-400"}`,
                              children: V,
                            },
                            V,
                          ),
                        ),
                      }),
                      o.jsx("div", {
                        className: "space-y-2",
                        children: H.map((V, he) =>
                          o.jsx(
                            "div",
                            {
                              className: "grid grid-cols-7 gap-2",
                              children: V.map((le, pe) =>
                                o.jsx(
                                  "div",
                                  {
                                    className: "relative group",
                                    children: le
                                      ? o.jsxs("button", {
                                          onClick: () => {
                                            s(le.toString().padStart(2, "0")),
                                              t(2);
                                          },
                                          className: L(le),
                                          title: B.has(
                                            le.toString().padStart(2, "0"),
                                          )
                                            ? "Status already set"
                                            : "",
                                          children: [
                                            le,
                                            B.has(
                                              le.toString().padStart(2, "0"),
                                            ) &&
                                              o.jsx("div", {
                                                className:
                                                  "absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full border-2 border-gray-950 animate-pulse",
                                              }),
                                          ],
                                        })
                                      : o.jsx("div", {}),
                                  },
                                  pe,
                                ),
                              ),
                            },
                            he,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          e === 2 &&
            o.jsx("div", {
              className: "max-w-2xl mx-auto animate-fade-in-up",
              children: o.jsxs("div", {
                className:
                  "p-8 rounded-3xl border backdrop-blur-xl shadow-2xl bg-gradient-to-br from-slate-600/40 to-gray-700/30 border-slate-400/60 group relative overflow-hidden",
                children: [
                  o.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-br from-slate-500/20 to-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl",
                  }),
                  o.jsxs("div", {
                    className: "relative z-10",
                    children: [
                      o.jsxs("div", {
                        className: "flex items-center gap-3 mb-6",
                        children: [
                          o.jsx("div", {
                            className:
                              "p-3 rounded-xl bg-slate-500/30 backdrop-blur-lg text-2xl",
                            children: "👤",
                          }),
                          o.jsxs("div", {
                            children: [
                              o.jsx("h2", {
                                className: "text-2xl font-bold text-white",
                                children: "Select User",
                              }),
                              o.jsxs("p", {
                                className: "text-slate-200 text-sm",
                                children: [
                                  "Choose employee for ",
                                  r,
                                  " ",
                                  R.split(" ")[0],
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "relative z-30",
                        children: [
                          o.jsxs("button", {
                            onClick: () => w(!p),
                            className:
                              "w-full px-4 py-4 rounded-xl bg-gray-800/60 border border-gray-600/50 text-white font-semibold focus:border-slate-400/70 focus:outline-none transition-all backdrop-blur-md flex items-center justify-between text-lg",
                            children: [
                              (n &&
                                ((D = k.find((V) => V.id === n)) == null
                                  ? void 0
                                  : D.name)) ||
                                "Select User",
                              o.jsx(Bt, {
                                className: `w-5 h-5 transition-transform duration-300 ${p ? "rotate-90" : ""}`,
                              }),
                            ],
                          }),
                          p &&
                            o.jsxs("div", {
                              className:
                                "absolute z-40 w-full mt-2 bg-gray-900/95 rounded-xl shadow-2xl border border-gray-700/50 max-h-96 overflow-hidden backdrop-blur-xl",
                              children: [
                                o.jsx("div", {
                                  className: "p-3 border-b border-gray-700/50",
                                  children: o.jsx("input", {
                                    type: "text",
                                    placeholder:
                                      "Search by name, ID, email, or role...",
                                    value: m,
                                    onChange: (V) => g(V.target.value),
                                    className:
                                      "w-full px-3 py-2 rounded-lg bg-gray-800/60 border border-gray-600/50 text-white font-semibold focus:border-slate-400/70 focus:outline-none transition-all placeholder-gray-400 text-sm",
                                  }),
                                }),
                                o.jsx("div", {
                                  className: "max-h-72 overflow-y-auto",
                                  children:
                                    T.length > 0
                                      ? T.map((V) =>
                                          o.jsxs(
                                            "button",
                                            {
                                              onClick: () => {
                                                a(V.id), w(!1), t(3);
                                              },
                                              className: `w-full p-4 border-b border-gray-700/30 transition-all text-left last:border-b-0 hover:bg-gray-800/60 flex items-center gap-3 group ${n === V.id ? "bg-gradient-to-br from-slate-600 to-gray-700 text-white" : "text-gray-300 hover:text-white"}`,
                                              children: [
                                                o.jsx("span", {
                                                  className:
                                                    "text-2xl flex-shrink-0 group-hover:scale-125 transition-transform",
                                                  children: V.avatar,
                                                }),
                                                o.jsxs("div", {
                                                  className: "flex-1 min-w-0",
                                                  children: [
                                                    o.jsx("p", {
                                                      className:
                                                        "font-bold text-sm",
                                                      children: V.name,
                                                    }),
                                                    o.jsxs("p", {
                                                      className:
                                                        "text-xs opacity-70",
                                                      children: [
                                                        V.id,
                                                        " • ",
                                                        V.role,
                                                      ],
                                                    }),
                                                    o.jsx("p", {
                                                      className:
                                                        "text-xs opacity-50 truncate",
                                                      children: V.email,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            V.id,
                                          ),
                                        )
                                      : o.jsx("p", {
                                          className:
                                            "text-center text-gray-400 py-8 text-sm",
                                          children: "No users found",
                                        }),
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          e === 3 &&
            o.jsxs("div", {
              className: "max-w-4xl mx-auto animate-fade-in-up relative z-0",
              children: [
                o.jsxs("div", {
                  className:
                    "p-8 rounded-3xl border backdrop-blur-xl shadow-2xl bg-gradient-to-br from-slate-600/40 to-gray-700/30 border-slate-400/60 group relative overflow-hidden",
                  children: [
                    o.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-br from-slate-500/20 to-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl",
                    }),
                    o.jsxs("div", {
                      className: "relative z-10",
                      children: [
                        o.jsxs("div", {
                          className: "flex items-center gap-3 mb-6",
                          children: [
                            o.jsx("div", {
                              className:
                                "p-3 rounded-xl bg-slate-500/30 backdrop-blur-lg text-2xl",
                              children: "⚡",
                            }),
                            o.jsxs("div", {
                              children: [
                                o.jsx("h2", {
                                  className: "text-2xl font-bold text-white",
                                  children: "Select Status",
                                }),
                                o.jsxs("p", {
                                  className: "text-slate-200 text-sm",
                                  children: [
                                    "for ",
                                    (z = k.find((V) => V.id === n)) == null
                                      ? void 0
                                      : z.name,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        q() &&
                          o.jsx("div", {
                            className:
                              "mb-6 p-4 rounded-2xl bg-gradient-to-br from-yellow-600/30 to-orange-600/30 border border-yellow-400/50 backdrop-blur-lg",
                            children: o.jsxs("p", {
                              className: "text-yellow-200 font-bold text-sm",
                              children: [
                                "⚠️ Previously set to:",
                                " ",
                                (P = I.find((V) => V.value === W())) == null
                                  ? void 0
                                  : P.label,
                              ],
                            }),
                          }),
                        o.jsx("div", {
                          className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                          children: I.map((V) =>
                            o.jsx(
                              "button",
                              {
                                onClick: () => {
                                  l(V.value), v(!0);
                                },
                                className: `p-6 rounded-2xl border-2 transition-all transform hover:scale-105 active:scale-95 relative overflow-hidden group ${i === V.value ? `bg-gradient-to-br ${V.color} border-white/50 text-white shadow-xl ${V.glow}` : "bg-gray-800/60 border-gray-700/50 text-gray-300 hover:bg-gray-700/80 hover:border-gray-600/70"}`,
                                children: o.jsxs("div", {
                                  className: "relative z-10 text-center",
                                  children: [
                                    o.jsx("p", {
                                      className: "text-4xl mb-2",
                                      children: V.icon,
                                    }),
                                    o.jsx("p", {
                                      className: "font-semibold",
                                      children: V.label,
                                    }),
                                    o.jsx("p", {
                                      className: "text-xs opacity-70 mt-1",
                                      children: V.description,
                                    }),
                                  ],
                                }),
                              },
                              V.value,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                b &&
                  i &&
                  o.jsx("div", {
                    className:
                      "fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in-up",
                    children: o.jsxs("div", {
                      className:
                        "bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-6 max-w-md w-full shadow-2xl",
                      children: [
                        o.jsxs("h3", {
                          className:
                            "text-xl font-bold text-white mb-4 flex items-center gap-2",
                          children: [
                            o.jsx("span", {
                              className: "text-2xl",
                              children: "🔒",
                            }),
                            " Confirm Update",
                          ],
                        }),
                        q() &&
                          o.jsx("div", {
                            className:
                              "mb-4 p-3 rounded-xl bg-yellow-500/20 border border-yellow-400/30",
                            children: o.jsxs("p", {
                              className:
                                "text-yellow-200 text-sm flex items-center gap-2",
                              children: [
                                o.jsx("span", { children: "⚠️" }),
                                " Override:",
                                " ",
                                (Y = I.find((V) => V.value === W())) == null
                                  ? void 0
                                  : Y.label,
                              ],
                            }),
                          }),
                        o.jsxs("div", {
                          className: "space-y-3 mb-6 text-sm",
                          children: [
                            o.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-gray-300",
                              children: [
                                o.jsx("span", {
                                  className: "font-semibold w-16",
                                  children: "Date:",
                                }),
                                o.jsxs("span", {
                                  className: "text-cyan-400",
                                  children: [r, " ", R.split(" ")[0]],
                                }),
                              ],
                            }),
                            o.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-gray-300",
                              children: [
                                o.jsx("span", {
                                  className: "font-semibold w-16",
                                  children: "User:",
                                }),
                                o.jsx("span", {
                                  className: "text-pink-400",
                                  children:
                                    (U = k.find((V) => V.id === n)) == null
                                      ? void 0
                                      : U.name,
                                }),
                              ],
                            }),
                            o.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-gray-300",
                              children: [
                                o.jsx("span", {
                                  className: "font-semibold w-16",
                                  children: "Status:",
                                }),
                                o.jsxs("span", {
                                  className:
                                    "text-purple-400 flex items-center gap-1",
                                  children: [
                                    (re = I.find((V) => V.value === i)) == null
                                      ? void 0
                                      : re.label,
                                    " ",
                                    (ne = I.find((V) => V.value === i)) == null
                                      ? void 0
                                      : ne.icon,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "flex gap-3",
                          children: [
                            o.jsx("button", {
                              onClick: () => {
                                v(!1), l("");
                              },
                              className:
                                "flex-1 py-3 px-4 rounded-xl bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 font-semibold transition-all border border-gray-600/50 active:scale-95",
                              children: "Cancel",
                            }),
                            o.jsx("button", {
                              onClick: Z,
                              disabled: d,
                              className:
                                "flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-slate-600 via-gray-600 to-gray-700 hover:from-slate-500 hover:via-gray-500 hover:to-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold transition-all shadow-lg hover:shadow-xl active:scale-95",
                              children: d
                                ? o.jsxs("div", {
                                    className:
                                      "flex items-center justify-center gap-2",
                                    children: [
                                      o.jsx("div", {
                                        className:
                                          "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin",
                                      }),
                                      "Saving...",
                                    ],
                                  })
                                : "Apply",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
              ],
            }),
        ],
      }),
      o.jsx("style", {
        children: `
        @keyframes blobSlow {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          25% { transform: translate(40px, -30px) scale(1.05); }
          50% { transform: translate(-30px, 40px) scale(0.95); }
          75% { transform: translate(20px, 20px) scale(1.08); }
        }
        @keyframes blobMedium {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          30% { transform: translate(-40px, 30px) scale(1.1); }
          60% { transform: translate(40px, -20px) scale(0.9); }
        }
        @keyframes blobFast {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          20% { transform: translate(25px, -40px) scale(1.15); }
          40% { transform: translate(-25px, 35px) scale(0.85); }
          60% { transform: translate(35px, 15px) scale(1.1); }
          80% { transform: translate(-15px, -25px) scale(0.9); }
        }
        .animate-blob-slow { animation: blobSlow 40s infinite ease-in-out; }
        .animate-blob-medium { animation: blobMedium 35s infinite ease-in-out; }
        .animate-blob-fast { animation: blobFast 30s infinite ease-in-out; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
        .animate-float { animation: float 10s infinite ease-in-out; }
        
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fadeInDown 0.8s ease-out; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right { animation: slideInRight 0.6s ease-out; }
      `,
      }),
    ],
  });
}
const L0 = [
  { path: "/", element: o.jsx(Sb, {}) },
  { path: "/users", element: o.jsx(Rb, {}) },
  { path: "/booking", element: o.jsx(Pb, {}) },
  { path: "/calendar", element: o.jsx(Ib, {}) },
  { path: "/reports", element: o.jsx(Hb, {}) },
  { path: "/manage", element: o.jsx(Yb, {}) },
  { path: "*", element: o.jsx(_b, {}) },
];
function Xb() {
  var e = Te.get("appVersion") || "1.0.0";
  e = e.replace(/\./g, "_");
  const r = { "1_0_0": L0 }[e] || L0;
  return Vd(r);
}
const Ye = Object.create(null);
Ye.open = "0";
Ye.close = "1";
Ye.ping = "2";
Ye.pong = "3";
Ye.message = "4";
Ye.upgrade = "5";
Ye.noop = "6";
const Ns = Object.create(null);
Object.keys(Ye).forEach((e) => {
  Ns[Ye[e]] = e;
});
const oo = { type: "error", data: "parser error" },
  nd =
    typeof Blob == "function" ||
    (typeof Blob != "undefined" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  od = typeof ArrayBuffer == "function",
  ad = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  Jo = ({ type: e, data: t }, r, s) =>
    nd && t instanceof Blob
      ? r
        ? s(t)
        : O0(t, s)
      : od && (t instanceof ArrayBuffer || ad(t))
        ? r
          ? s(t)
          : O0(new Blob([t]), s)
        : s(Ye[e] + (t || "")),
  O0 = (e, t) => {
    const r = new FileReader();
    return (
      (r.onload = function () {
        const s = r.result.split(",")[1];
        t("b" + (s || ""));
      }),
      r.readAsDataURL(e)
    );
  };
function I0(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
      ? new Uint8Array(e)
      : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let kn;
function Gb(e, t) {
  if (nd && e.data instanceof Blob)
    return e.data.arrayBuffer().then(I0).then(t);
  if (od && (e.data instanceof ArrayBuffer || ad(e.data))) return t(I0(e.data));
  Jo(e, !1, (r) => {
    kn || (kn = new TextEncoder()), t(kn.encode(r));
  });
}
const V0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Qt = typeof Uint8Array == "undefined" ? [] : new Uint8Array(256);
for (let e = 0; e < V0.length; e++) Qt[V0.charCodeAt(e)] = e;
const Zb = (e) => {
    let t = e.length * 0.75,
      r = e.length,
      s,
      n = 0,
      a,
      i,
      l,
      d;
    e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
    const c = new ArrayBuffer(t),
      u = new Uint8Array(c);
    for (s = 0; s < r; s += 4)
      (a = Qt[e.charCodeAt(s)]),
        (i = Qt[e.charCodeAt(s + 1)]),
        (l = Qt[e.charCodeAt(s + 2)]),
        (d = Qt[e.charCodeAt(s + 3)]),
        (u[n++] = (a << 2) | (i >> 4)),
        (u[n++] = ((i & 15) << 4) | (l >> 2)),
        (u[n++] = ((l & 3) << 6) | (d & 63));
    return c;
  },
  Qb = typeof ArrayBuffer == "function",
  ea = (e, t) => {
    if (typeof e != "string") return { type: "message", data: id(e, t) };
    const r = e.charAt(0);
    return r === "b"
      ? { type: "message", data: Jb(e.substring(1), t) }
      : Ns[r]
        ? e.length > 1
          ? { type: Ns[r], data: e.substring(1) }
          : { type: Ns[r] }
        : oo;
  },
  Jb = (e, t) => {
    if (Qb) {
      const r = Zb(e);
      return id(r, t);
    } else return { base64: !0, data: e };
  },
  id = (e, t) => {
    switch (t) {
      case "blob":
        return e instanceof Blob ? e : new Blob([e]);
      case "arraybuffer":
      default:
        return e instanceof ArrayBuffer ? e : e.buffer;
    }
  },
  ld = "",
  ev = (e, t) => {
    const r = e.length,
      s = new Array(r);
    let n = 0;
    e.forEach((a, i) => {
      Jo(a, !1, (l) => {
        (s[i] = l), ++n === r && t(s.join(ld));
      });
    });
  },
  tv = (e, t) => {
    const r = e.split(ld),
      s = [];
    for (let n = 0; n < r.length; n++) {
      const a = ea(r[n], t);
      if ((s.push(a), a.type === "error")) break;
    }
    return s;
  };
function rv() {
  return new TransformStream({
    transform(e, t) {
      Gb(e, (r) => {
        const s = r.length;
        let n;
        if (s < 126)
          (n = new Uint8Array(1)), new DataView(n.buffer).setUint8(0, s);
        else if (s < 65536) {
          n = new Uint8Array(3);
          const a = new DataView(n.buffer);
          a.setUint8(0, 126), a.setUint16(1, s);
        } else {
          n = new Uint8Array(9);
          const a = new DataView(n.buffer);
          a.setUint8(0, 127), a.setBigUint64(1, BigInt(s));
        }
        e.data && typeof e.data != "string" && (n[0] |= 128),
          t.enqueue(n),
          t.enqueue(r);
      });
    },
  });
}
let jn;
function Sr(e) {
  return e.reduce((t, r) => t + r.length, 0);
}
function _r(e, t) {
  if (e[0].length === t) return e.shift();
  const r = new Uint8Array(t);
  let s = 0;
  for (let n = 0; n < t; n++)
    (r[n] = e[0][s++]), s === e[0].length && (e.shift(), (s = 0));
  return e.length && s < e[0].length && (e[0] = e[0].slice(s)), r;
}
function sv(e, t) {
  jn || (jn = new TextDecoder());
  const r = [];
  let s = 0,
    n = -1,
    a = !1;
  return new TransformStream({
    transform(i, l) {
      for (r.push(i); ; ) {
        if (s === 0) {
          if (Sr(r) < 1) break;
          const d = _r(r, 1);
          (a = (d[0] & 128) === 128),
            (n = d[0] & 127),
            n < 126 ? (s = 3) : n === 126 ? (s = 1) : (s = 2);
        } else if (s === 1) {
          if (Sr(r) < 2) break;
          const d = _r(r, 2);
          (n = new DataView(d.buffer, d.byteOffset, d.length).getUint16(0)),
            (s = 3);
        } else if (s === 2) {
          if (Sr(r) < 8) break;
          const d = _r(r, 8),
            c = new DataView(d.buffer, d.byteOffset, d.length),
            u = c.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            l.enqueue(oo);
            break;
          }
          (n = u * Math.pow(2, 32) + c.getUint32(4)), (s = 3);
        } else {
          if (Sr(r) < n) break;
          const d = _r(r, n);
          l.enqueue(ea(a ? d : jn.decode(d), t)), (s = 0);
        }
        if (n === 0 || n > e) {
          l.enqueue(oo);
          break;
        }
      }
    },
  });
}
const cd = 4;
function xe(e) {
  if (e) return nv(e);
}
function nv(e) {
  for (var t in xe.prototype) e[t] = xe.prototype[t];
  return e;
}
xe.prototype.on = xe.prototype.addEventListener = function (e, t) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
    this
  );
};
xe.prototype.once = function (e, t) {
  function r() {
    this.off(e, r), t.apply(this, arguments);
  }
  return (r.fn = t), this.on(e, r), this;
};
xe.prototype.off =
  xe.prototype.removeListener =
  xe.prototype.removeAllListeners =
  xe.prototype.removeEventListener =
    function (e, t) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var r = this._callbacks["$" + e];
      if (!r) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + e], this;
      for (var s, n = 0; n < r.length; n++)
        if (((s = r[n]), s === t || s.fn === t)) {
          r.splice(n, 1);
          break;
        }
      return r.length === 0 && delete this._callbacks["$" + e], this;
    };
xe.prototype.emit = function (e) {
  this._callbacks = this._callbacks || {};
  for (
    var t = new Array(arguments.length - 1),
      r = this._callbacks["$" + e],
      s = 1;
    s < arguments.length;
    s++
  )
    t[s - 1] = arguments[s];
  if (r) {
    r = r.slice(0);
    for (var s = 0, n = r.length; s < n; ++s) r[s].apply(this, t);
  }
  return this;
};
xe.prototype.emitReserved = xe.prototype.emit;
xe.prototype.listeners = function (e) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks["$" + e] || []
  );
};
xe.prototype.hasListeners = function (e) {
  return !!this.listeners(e).length;
};
const Xs =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (t) => Promise.resolve().then(t)
      : (t, r) => r(t, 0),
  Pe =
    typeof self != "undefined"
      ? self
      : typeof window != "undefined"
        ? window
        : Function("return this")(),
  ov = "arraybuffer";
function dd(e, ...t) {
  return t.reduce((r, s) => (e.hasOwnProperty(s) && (r[s] = e[s]), r), {});
}
const av = Pe.setTimeout,
  iv = Pe.clearTimeout;
function Gs(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = av.bind(Pe)), (e.clearTimeoutFn = iv.bind(Pe)))
    : ((e.setTimeoutFn = Pe.setTimeout.bind(Pe)),
      (e.clearTimeoutFn = Pe.clearTimeout.bind(Pe)));
}
const lv = 1.33;
function cv(e) {
  return typeof e == "string"
    ? dv(e)
    : Math.ceil((e.byteLength || e.size) * lv);
}
function dv(e) {
  let t = 0,
    r = 0;
  for (let s = 0, n = e.length; s < n; s++)
    (t = e.charCodeAt(s)),
      t < 128
        ? (r += 1)
        : t < 2048
          ? (r += 2)
          : t < 55296 || t >= 57344
            ? (r += 3)
            : (s++, (r += 4));
  return r;
}
function ud() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function uv(e) {
  let t = "";
  for (let r in e)
    e.hasOwnProperty(r) &&
      (t.length && (t += "&"),
      (t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r])));
  return t;
}
function hv(e) {
  let t = {},
    r = e.split("&");
  for (let s = 0, n = r.length; s < n; s++) {
    let a = r[s].split("=");
    t[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
  }
  return t;
}
class fv extends Error {
  constructor(t, r, s) {
    super(t),
      (this.description = r),
      (this.context = s),
      (this.type = "TransportError");
  }
}
class ta extends xe {
  constructor(t) {
    super(),
      (this.writable = !1),
      Gs(this, t),
      (this.opts = t),
      (this.query = t.query),
      (this.socket = t.socket),
      (this.supportsBinary = !t.forceBase64);
  }
  onError(t, r, s) {
    return super.emitReserved("error", new fv(t, r, s)), this;
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
    const r = ea(t, this.socket.binaryType);
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
    const r = uv(t);
    return r.length ? "?" + r : "";
  }
}
class xv extends ta {
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
  onData(t) {
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
    tv(t, this.socket.binaryType).forEach(r),
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
      ev(t, (r) => {
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
        (r[this.opts.timestampParam] = ud()),
      !this.supportsBinary && !r.sid && (r.b64 = 1),
      this.createUri(t, r)
    );
  }
}
let hd = !1;
try {
  hd =
    typeof XMLHttpRequest != "undefined" &&
    "withCredentials" in new XMLHttpRequest();
} catch (e) {}
const mv = hd;
function pv() {}
class gv extends xv {
  constructor(t) {
    if ((super(t), typeof location != "undefined")) {
      const r = location.protocol === "https:";
      let s = location.port;
      s || (s = r ? "443" : "80"),
        (this.xd =
          (typeof location != "undefined" &&
            t.hostname !== location.hostname) ||
          s !== t.port);
    }
  }
  doWrite(t, r) {
    const s = this.request({ method: "POST", data: t });
    s.on("success", r),
      s.on("error", (n, a) => {
        this.onError("xhr post error", n, a);
      });
  }
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)),
      t.on("error", (r, s) => {
        this.onError("xhr poll error", r, s);
      }),
      (this.pollXhr = t);
  }
}
class Ke extends xe {
  constructor(t, r, s) {
    super(),
      (this.createRequest = t),
      Gs(this, s),
      (this._opts = s),
      (this._method = s.method || "GET"),
      (this._uri = r),
      (this._data = s.data !== void 0 ? s.data : null),
      this._create();
  }
  _create() {
    var t;
    const r = dd(
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
          for (let n in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(n) &&
              s.setRequestHeader(n, this._opts.extraHeaders[n]);
        }
      } catch (n) {}
      if (this._method === "POST")
        try {
          s.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (n) {}
      try {
        s.setRequestHeader("Accept", "*/*");
      } catch (n) {}
      (t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(s),
        "withCredentials" in s &&
          (s.withCredentials = this._opts.withCredentials),
        this._opts.requestTimeout && (s.timeout = this._opts.requestTimeout),
        (s.onreadystatechange = () => {
          var n;
          s.readyState === 3 &&
            ((n = this._opts.cookieJar) === null ||
              n === void 0 ||
              n.parseCookies(s.getResponseHeader("set-cookie"))),
            s.readyState === 4 &&
              (s.status === 200 || s.status === 1223
                ? this._onLoad()
                : this.setTimeoutFn(() => {
                    this._onError(typeof s.status == "number" ? s.status : 0);
                  }, 0));
        }),
        s.send(this._data);
    } catch (n) {
      this.setTimeoutFn(() => {
        this._onError(n);
      }, 0);
      return;
    }
    typeof document != "undefined" &&
      ((this._index = Ke.requestsCount++), (Ke.requests[this._index] = this));
  }
  _onError(t) {
    this.emitReserved("error", t, this._xhr), this._cleanup(!0);
  }
  _cleanup(t) {
    if (!(typeof this._xhr == "undefined" || this._xhr === null)) {
      if (((this._xhr.onreadystatechange = pv), t))
        try {
          this._xhr.abort();
        } catch (r) {}
      typeof document != "undefined" && delete Ke.requests[this._index],
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
}
Ke.requestsCount = 0;
Ke.requests = {};
if (typeof document != "undefined") {
  if (typeof attachEvent == "function") attachEvent("onunload", $0);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Pe ? "pagehide" : "unload";
    addEventListener(e, $0, !1);
  }
}
function $0() {
  for (let e in Ke.requests)
    Ke.requests.hasOwnProperty(e) && Ke.requests[e].abort();
}
const bv = (function () {
  const e = fd({ xdomain: !1 });
  return e && e.responseType !== null;
})();
class vv extends gv {
  constructor(t) {
    super(t);
    const r = t && t.forceBase64;
    this.supportsBinary = bv && !r;
  }
  request(t = {}) {
    return (
      Object.assign(t, { xd: this.xd }, this.opts), new Ke(fd, this.uri(), t)
    );
  }
}
function fd(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest != "undefined" && (!t || mv))
      return new XMLHttpRequest();
  } catch (r) {}
  if (!t)
    try {
      return new Pe[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (r) {}
}
const xd =
  typeof navigator != "undefined" &&
  typeof navigator.product == "string" &&
  navigator.product.toLowerCase() === "reactnative";
class yv extends ta {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(),
      r = this.opts.protocols,
      s = xd
        ? {}
        : dd(
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
      this.ws = this.createSocket(t, r, s);
    } catch (n) {
      return this.emitReserved("error", n);
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
      const s = t[r],
        n = r === t.length - 1;
      Jo(s, this.supportsBinary, (a) => {
        try {
          this.doWrite(s, a);
        } catch (i) {}
        n &&
          Xs(() => {
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
      this.opts.timestampRequests && (r[this.opts.timestampParam] = ud()),
      this.supportsBinary || (r.b64 = 1),
      this.createUri(t, r)
    );
  }
}
const Dn = Pe.WebSocket || Pe.MozWebSocket;
class wv extends yv {
  createSocket(t, r, s) {
    return xd ? new Dn(t, r, s) : r ? new Dn(t, r) : new Dn(t);
  }
  doWrite(t, r) {
    this.ws.send(r);
  }
}
class Cv extends ta {
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
          const r = sv(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            s = t.readable.pipeThrough(r).getReader(),
            n = rv();
          n.readable.pipeTo(t.writable),
            (this._writer = n.writable.getWriter());
          const a = () => {
            s.read()
              .then(({ done: l, value: d }) => {
                l || (this.onPacket(d), a());
              })
              .catch((l) => {});
          };
          a();
          const i = { type: "open" };
          this.query.sid && (i.data = `{"sid":"${this.query.sid}"}`),
            this._writer.write(i).then(() => this.onOpen());
        });
      });
  }
  write(t) {
    this.writable = !1;
    for (let r = 0; r < t.length; r++) {
      const s = t[r],
        n = r === t.length - 1;
      this._writer.write(s).then(() => {
        n &&
          Xs(() => {
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
const Av = { websocket: wv, webtransport: Cv, polling: vv },
  Ev =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  Nv = [
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
function ao(e) {
  if (e.length > 8e3) throw "URI too long";
  const t = e,
    r = e.indexOf("["),
    s = e.indexOf("]");
  r != -1 &&
    s != -1 &&
    (e =
      e.substring(0, r) +
      e.substring(r, s).replace(/:/g, ";") +
      e.substring(s, e.length));
  let n = Ev.exec(e || ""),
    a = {},
    i = 14;
  for (; i--; ) a[Nv[i]] = n[i] || "";
  return (
    r != -1 &&
      s != -1 &&
      ((a.source = t),
      (a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":")),
      (a.authority = a.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (a.ipv6uri = !0)),
    (a.pathNames = kv(a, a.path)),
    (a.queryKey = jv(a, a.query)),
    a
  );
}
function kv(e, t) {
  const r = /\/{2,9}/g,
    s = t.replace(r, "/").split("/");
  return (
    (t.slice(0, 1) == "/" || t.length === 0) && s.splice(0, 1),
    t.slice(-1) == "/" && s.splice(s.length - 1, 1),
    s
  );
}
function jv(e, t) {
  const r = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (s, n, a) {
      n && (r[n] = a);
    }),
    r
  );
}
const io =
    typeof addEventListener == "function" &&
    typeof removeEventListener == "function",
  ks = [];
io &&
  addEventListener(
    "offline",
    () => {
      ks.forEach((e) => e());
    },
    !1,
  );
class et extends xe {
  constructor(t, r) {
    if (
      (super(),
      (this.binaryType = ov),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      t && typeof t == "object" && ((r = t), (t = null)),
      t)
    ) {
      const s = ao(t);
      (r.hostname = s.host),
        (r.secure = s.protocol === "https" || s.protocol === "wss"),
        (r.port = s.port),
        s.query && (r.query = s.query);
    } else r.host && (r.hostname = ao(r.host).host);
    Gs(this, r),
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
        const n = s.prototype.name;
        this.transports.push(n), (this._transportsByName[n] = s);
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
        (this.opts.query = hv(this.opts.query)),
      io &&
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
          ks.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open();
  }
  createTransport(t) {
    const r = Object.assign({}, this.opts.query);
    (r.EIO = cd), (r.transport = t), this.id && (r.sid = this.id);
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
      this.opts.transportOptions[t],
    );
    return new this._transportsByName[t](s);
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
      et.priorWebsocketSuccess &&
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
      (et.priorWebsocketSuccess = this.transport.name === "websocket"),
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
    for (let s = 0; s < this.writeBuffer.length; s++) {
      const n = this.writeBuffer[s].data;
      if ((n && (r += cv(n)), s > 0 && r > this._maxPayload))
        return this.writeBuffer.slice(0, s);
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
        Xs(() => {
          this._onClose("ping timeout");
        }, this.setTimeoutFn)),
      t
    );
  }
  write(t, r, s) {
    return this._sendPacket("message", t, r, s), this;
  }
  send(t, r, s) {
    return this._sendPacket("message", t, r, s), this;
  }
  _sendPacket(t, r, s, n) {
    if (
      (typeof r == "function" && ((n = r), (r = void 0)),
      typeof s == "function" && ((n = s), (s = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (s = s || {}), (s.compress = s.compress !== !1);
    const a = { type: t, data: r, options: s };
    this.emitReserved("packetCreate", a),
      this.writeBuffer.push(a),
      n && this.once("flush", n),
      this.flush();
  }
  close() {
    const t = () => {
        this._onClose("forced close"), this.transport.close();
      },
      r = () => {
        this.off("upgrade", r), this.off("upgradeError", r), t();
      },
      s = () => {
        this.once("upgrade", r), this.once("upgradeError", r);
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? s() : t();
            })
          : this.upgrading
            ? s()
            : t()),
      this
    );
  }
  _onError(t) {
    if (
      ((et.priorWebsocketSuccess = !1),
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
        io &&
          (this._beforeunloadEventListener &&
            removeEventListener(
              "beforeunload",
              this._beforeunloadEventListener,
              !1,
            ),
          this._offlineEventListener))
      ) {
        const s = ks.indexOf(this._offlineEventListener);
        s !== -1 && ks.splice(s, 1);
      }
      (this.readyState = "closed"),
        (this.id = null),
        this.emitReserved("close", t, r),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0);
    }
  }
}
et.protocol = cd;
class Dv extends et {
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
      s = !1;
    et.priorWebsocketSuccess = !1;
    const n = () => {
      s ||
        (r.send([{ type: "ping", data: "probe" }]),
        r.once("packet", (f) => {
          if (!s)
            if (f.type === "pong" && f.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", r), !r)
              )
                return;
              (et.priorWebsocketSuccess = r.name === "websocket"),
                this.transport.pause(() => {
                  s ||
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
              const h = new Error("probe error");
              (h.transport = r.name), this.emitReserved("upgradeError", h);
            }
        }));
    };
    function a() {
      s || ((s = !0), u(), r.close(), (r = null));
    }
    const i = (f) => {
      const h = new Error("probe error: " + f);
      (h.transport = r.name), a(), this.emitReserved("upgradeError", h);
    };
    function l() {
      i("transport closed");
    }
    function d() {
      i("socket closed");
    }
    function c(f) {
      r && f.name !== r.name && a();
    }
    const u = () => {
      r.removeListener("open", n),
        r.removeListener("error", i),
        r.removeListener("close", l),
        this.off("close", d),
        this.off("upgrading", c);
    };
    r.once("open", n),
      r.once("error", i),
      r.once("close", l),
      this.once("close", d),
      this.once("upgrading", c),
      this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport"
        ? this.setTimeoutFn(() => {
            s || r.open();
          }, 200)
        : r.open();
  }
  onHandshake(t) {
    (this._upgrades = this._filterUpgrades(t.upgrades)), super.onHandshake(t);
  }
  _filterUpgrades(t) {
    const r = [];
    for (let s = 0; s < t.length; s++)
      ~this.transports.indexOf(t[s]) && r.push(t[s]);
    return r;
  }
}
let Bv = class extends Dv {
  constructor(t, r = {}) {
    const s = typeof t == "object" ? t : r;
    (!s.transports || (s.transports && typeof s.transports[0] == "string")) &&
      (s.transports = (s.transports || ["polling", "websocket", "webtransport"])
        .map((n) => Av[n])
        .filter((n) => !!n)),
      super(t, s);
  }
};
function Sv(e, t = "", r) {
  let s = e;
  (r = r || (typeof location != "undefined" && location)),
    e == null && (e = r.protocol + "//" + r.host),
    typeof e == "string" &&
      (e.charAt(0) === "/" &&
        (e.charAt(1) === "/" ? (e = r.protocol + e) : (e = r.host + e)),
      /^(https?|wss?):\/\//.test(e) ||
        (typeof r != "undefined"
          ? (e = r.protocol + "//" + e)
          : (e = "https://" + e)),
      (s = ao(e))),
    s.port ||
      (/^(http|ws)$/.test(s.protocol)
        ? (s.port = "80")
        : /^(http|ws)s$/.test(s.protocol) && (s.port = "443")),
    (s.path = s.path || "/");
  const a = s.host.indexOf(":") !== -1 ? "[" + s.host + "]" : s.host;
  return (
    (s.id = s.protocol + "://" + a + ":" + s.port + t),
    (s.href =
      s.protocol + "://" + a + (r && r.port === s.port ? "" : ":" + s.port)),
    s
  );
}
const _v = typeof ArrayBuffer == "function",
  Fv = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  md = Object.prototype.toString,
  Tv =
    typeof Blob == "function" ||
    (typeof Blob != "undefined" &&
      md.call(Blob) === "[object BlobConstructor]"),
  Rv =
    typeof File == "function" ||
    (typeof File != "undefined" &&
      md.call(File) === "[object FileConstructor]");
function ra(e) {
  return (
    (_v && (e instanceof ArrayBuffer || Fv(e))) ||
    (Tv && e instanceof Blob) ||
    (Rv && e instanceof File)
  );
}
function js(e, t) {
  if (!e || typeof e != "object") return !1;
  if (Array.isArray(e)) {
    for (let r = 0, s = e.length; r < s; r++) if (js(e[r])) return !0;
    return !1;
  }
  if (ra(e)) return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return js(e.toJSON(), !0);
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && js(e[r])) return !0;
  return !1;
}
function Pv(e) {
  const t = [],
    r = e.data,
    s = e;
  return (
    (s.data = lo(r, t)), (s.attachments = t.length), { packet: s, buffers: t }
  );
}
function lo(e, t) {
  if (!e) return e;
  if (ra(e)) {
    const r = { _placeholder: !0, num: t.length };
    return t.push(e), r;
  } else if (Array.isArray(e)) {
    const r = new Array(e.length);
    for (let s = 0; s < e.length; s++) r[s] = lo(e[s], t);
    return r;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const r = {};
    for (const s in e)
      Object.prototype.hasOwnProperty.call(e, s) && (r[s] = lo(e[s], t));
    return r;
  }
  return e;
}
function Mv(e, t) {
  return (e.data = co(e.data, t)), delete e.attachments, e;
}
function co(e, t) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let r = 0; r < e.length; r++) e[r] = co(e[r], t);
  else if (typeof e == "object")
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (e[r] = co(e[r], t));
  return e;
}
const Lv = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  Ov = 5;
var ee;
(function (e) {
  (e[(e.CONNECT = 0)] = "CONNECT"),
    (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
    (e[(e.EVENT = 2)] = "EVENT"),
    (e[(e.ACK = 3)] = "ACK"),
    (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
})(ee || (ee = {}));
class Iv {
  constructor(t) {
    this.replacer = t;
  }
  encode(t) {
    return (t.type === ee.EVENT || t.type === ee.ACK) && js(t)
      ? this.encodeAsBinary({
          type: t.type === ee.EVENT ? ee.BINARY_EVENT : ee.BINARY_ACK,
          nsp: t.nsp,
          data: t.data,
          id: t.id,
        })
      : [this.encodeAsString(t)];
  }
  encodeAsString(t) {
    let r = "" + t.type;
    return (
      (t.type === ee.BINARY_EVENT || t.type === ee.BINARY_ACK) &&
        (r += t.attachments + "-"),
      t.nsp && t.nsp !== "/" && (r += t.nsp + ","),
      t.id != null && (r += t.id),
      t.data != null && (r += JSON.stringify(t.data, this.replacer)),
      r
    );
  }
  encodeAsBinary(t) {
    const r = Pv(t),
      s = this.encodeAsString(r.packet),
      n = r.buffers;
    return n.unshift(s), n;
  }
}
function U0(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class sa extends xe {
  constructor(t) {
    super(), (this.reviver = t);
  }
  add(t) {
    let r;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      r = this.decodeString(t);
      const s = r.type === ee.BINARY_EVENT;
      s || r.type === ee.BINARY_ACK
        ? ((r.type = s ? ee.EVENT : ee.ACK),
          (this.reconstructor = new Vv(r)),
          r.attachments === 0 && super.emitReserved("decoded", r))
        : super.emitReserved("decoded", r);
    } else if (ra(t) || t.base64)
      if (this.reconstructor)
        (r = this.reconstructor.takeBinaryData(t)),
          r && ((this.reconstructor = null), super.emitReserved("decoded", r));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + t);
  }
  decodeString(t) {
    let r = 0;
    const s = { type: Number(t.charAt(0)) };
    if (ee[s.type] === void 0) throw new Error("unknown packet type " + s.type);
    if (s.type === ee.BINARY_EVENT || s.type === ee.BINARY_ACK) {
      const a = r + 1;
      for (; t.charAt(++r) !== "-" && r != t.length; );
      const i = t.substring(a, r);
      if (i != Number(i) || t.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      s.attachments = Number(i);
    }
    if (t.charAt(r + 1) === "/") {
      const a = r + 1;
      for (; ++r && !(t.charAt(r) === "," || r === t.length); );
      s.nsp = t.substring(a, r);
    } else s.nsp = "/";
    const n = t.charAt(r + 1);
    if (n !== "" && Number(n) == n) {
      const a = r + 1;
      for (; ++r; ) {
        const i = t.charAt(r);
        if (i == null || Number(i) != i) {
          --r;
          break;
        }
        if (r === t.length) break;
      }
      s.id = Number(t.substring(a, r + 1));
    }
    if (t.charAt(++r)) {
      const a = this.tryParse(t.substr(r));
      if (sa.isPayloadValid(s.type, a)) s.data = a;
      else throw new Error("invalid payload");
    }
    return s;
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
      case ee.CONNECT:
        return U0(r);
      case ee.DISCONNECT:
        return r === void 0;
      case ee.CONNECT_ERROR:
        return typeof r == "string" || U0(r);
      case ee.EVENT:
      case ee.BINARY_EVENT:
        return (
          Array.isArray(r) &&
          (typeof r[0] == "number" ||
            (typeof r[0] == "string" && Lv.indexOf(r[0]) === -1))
        );
      case ee.ACK:
      case ee.BINARY_ACK:
        return Array.isArray(r);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class Vv {
  constructor(t) {
    (this.packet = t), (this.buffers = []), (this.reconPack = t);
  }
  takeBinaryData(t) {
    if (
      (this.buffers.push(t), this.buffers.length === this.reconPack.attachments)
    ) {
      const r = Mv(this.reconPack, this.buffers);
      return this.finishedReconstruction(), r;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const $v = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: sa,
      Encoder: Iv,
      get PacketType() {
        return ee;
      },
      protocol: Ov,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function Ve(e, t, r) {
  return (
    e.on(t, r),
    function () {
      e.off(t, r);
    }
  );
}
const Uv = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class pd extends xe {
  constructor(t, r, s) {
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
      s && s.auth && (this.auth = s.auth),
      (this._opts = Object.assign({}, s)),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const t = this.io;
    this.subs = [
      Ve(t, "open", this.onopen.bind(this)),
      Ve(t, "packet", this.onpacket.bind(this)),
      Ve(t, "error", this.onerror.bind(this)),
      Ve(t, "close", this.onclose.bind(this)),
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
    var s, n, a;
    if (Uv.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (
      (r.unshift(t),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(r), this;
    const i = { type: ee.EVENT, data: r };
    if (
      ((i.options = {}),
      (i.options.compress = this.flags.compress !== !1),
      typeof r[r.length - 1] == "function")
    ) {
      const u = this.ids++,
        f = r.pop();
      this._registerAckCallback(u, f), (i.id = u);
    }
    const l =
        (n =
          (s = this.io.engine) === null || s === void 0
            ? void 0
            : s.transport) === null || n === void 0
          ? void 0
          : n.writable,
      d =
        this.connected &&
        !(
          !((a = this.io.engine) === null || a === void 0) &&
          a._hasPingExpired()
        );
    return (
      (this.flags.volatile && !l) ||
        (d
          ? (this.notifyOutgoingListeners(i), this.packet(i))
          : this.sendBuffer.push(i)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(t, r) {
    var s;
    const n =
      (s = this.flags.timeout) !== null && s !== void 0
        ? s
        : this._opts.ackTimeout;
    if (n === void 0) {
      this.acks[t] = r;
      return;
    }
    const a = this.io.setTimeoutFn(() => {
        delete this.acks[t];
        for (let l = 0; l < this.sendBuffer.length; l++)
          this.sendBuffer[l].id === t && this.sendBuffer.splice(l, 1);
        r.call(this, new Error("operation has timed out"));
      }, n),
      i = (...l) => {
        this.io.clearTimeoutFn(a), r.apply(this, l);
      };
    (i.withError = !0), (this.acks[t] = i);
  }
  emitWithAck(t, ...r) {
    return new Promise((s, n) => {
      const a = (i, l) => (i ? n(i) : s(l));
      (a.withError = !0), r.push(a), this.emit(t, ...r);
    });
  }
  _addToQueue(t) {
    let r;
    typeof t[t.length - 1] == "function" && (r = t.pop());
    const s = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    t.push((n, ...a) =>
      s !== this._queue[0]
        ? void 0
        : (n !== null
            ? s.tryCount > this._opts.retries &&
              (this._queue.shift(), r && r(n))
            : (this._queue.shift(), r && r(null, ...a)),
          (s.pending = !1),
          this._drainQueue()),
    ),
      this._queue.push(s),
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
      type: ee.CONNECT,
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
      if (!this.sendBuffer.some((s) => String(s.id) === t)) {
        const s = this.acks[t];
        delete this.acks[t],
          s.withError &&
            s.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case ee.CONNECT:
          t.data && t.data.sid
            ? this.onconnect(t.data.sid, t.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)",
                ),
              );
          break;
        case ee.EVENT:
        case ee.BINARY_EVENT:
          this.onevent(t);
          break;
        case ee.ACK:
        case ee.BINARY_ACK:
          this.onack(t);
          break;
        case ee.DISCONNECT:
          this.ondisconnect();
          break;
        case ee.CONNECT_ERROR:
          this.destroy();
          const s = new Error(t.data.message);
          (s.data = t.data.data), this.emitReserved("connect_error", s);
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
      for (const s of r) s.apply(this, t);
    }
    super.emit.apply(this, t),
      this._pid &&
        t.length &&
        typeof t[t.length - 1] == "string" &&
        (this._lastOffset = t[t.length - 1]);
  }
  ack(t) {
    const r = this;
    let s = !1;
    return function (...n) {
      s || ((s = !0), r.packet({ type: ee.ACK, id: t, data: n }));
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
      this.connected && this.packet({ type: ee.DISCONNECT }),
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
      for (let s = 0; s < r.length; s++)
        if (t === r[s]) return r.splice(s, 1), this;
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
      for (let s = 0; s < r.length; s++)
        if (t === r[s]) return r.splice(s, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const r = this._anyOutgoingListeners.slice();
      for (const s of r) s.apply(this, t.data);
    }
  }
}
function Vt(e) {
  (e = e || {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0);
}
Vt.prototype.duration = function () {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(),
      r = Math.floor(t * this.jitter * e);
    e = (Math.floor(t * 10) & 1) == 0 ? e - r : e + r;
  }
  return Math.min(e, this.max) | 0;
};
Vt.prototype.reset = function () {
  this.attempts = 0;
};
Vt.prototype.setMin = function (e) {
  this.ms = e;
};
Vt.prototype.setMax = function (e) {
  this.max = e;
};
Vt.prototype.setJitter = function (e) {
  this.jitter = e;
};
class uo extends xe {
  constructor(t, r) {
    var s;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      t && typeof t == "object" && ((r = t), (t = void 0)),
      (r = r || {}),
      (r.path = r.path || "/socket.io"),
      (this.opts = r),
      Gs(this, r),
      this.reconnection(r.reconnection !== !1),
      this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(r.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (s = r.randomizationFactor) !== null && s !== void 0 ? s : 0.5,
      ),
      (this.backoff = new Vt({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(r.timeout == null ? 2e4 : r.timeout),
      (this._readyState = "closed"),
      (this.uri = t);
    const n = r.parser || $v;
    (this.encoder = new n.Encoder()),
      (this.decoder = new n.Decoder()),
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
    this.engine = new Bv(this.uri, this.opts);
    const r = this.engine,
      s = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const n = Ve(r, "open", function () {
        s.onopen(), t && t();
      }),
      a = (l) => {
        this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", l),
          t ? t(l) : this.maybeReconnectOnOpen();
      },
      i = Ve(r, "error", a);
    if (this._timeout !== !1) {
      const l = this._timeout,
        d = this.setTimeoutFn(() => {
          n(), a(new Error("timeout")), r.close();
        }, l);
      this.opts.autoUnref && d.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(d);
        });
    }
    return this.subs.push(n), this.subs.push(i), this;
  }
  connect(t) {
    return this.open(t);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      Ve(t, "ping", this.onping.bind(this)),
      Ve(t, "data", this.ondata.bind(this)),
      Ve(t, "error", this.onerror.bind(this)),
      Ve(t, "close", this.onclose.bind(this)),
      Ve(this.decoder, "decoded", this.ondecoded.bind(this)),
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
    Xs(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  onerror(t) {
    this.emitReserved("error", t);
  }
  socket(t, r) {
    let s = this.nsps[t];
    return (
      s
        ? this._autoConnect && !s.active && s.connect()
        : ((s = new pd(this, t, r)), (this.nsps[t] = s)),
      s
    );
  }
  _destroy(t) {
    const r = Object.keys(this.nsps);
    for (const s of r) if (this.nsps[s].active) return;
    this._close();
  }
  _packet(t) {
    const r = this.encoder.encode(t);
    for (let s = 0; s < r.length; s++) this.engine.write(r[s], t.options);
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
    var s;
    this.cleanup(),
      (s = this.engine) === null || s === void 0 || s.close(),
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
      const s = this.setTimeoutFn(() => {
        t.skipReconnect ||
          (this.emitReserved("reconnect_attempt", t.backoff.attempts),
          !t.skipReconnect &&
            t.open((n) => {
              n
                ? ((t._reconnecting = !1),
                  t.reconnect(),
                  this.emitReserved("reconnect_error", n))
                : t.onreconnect();
            }));
      }, r);
      this.opts.autoUnref && s.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(s);
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
const Gt = {};
function Ds(e, t) {
  typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
  const r = Sv(e, t.path || "/socket.io"),
    s = r.source,
    n = r.id,
    a = r.path,
    i = Gt[n] && a in Gt[n].nsps,
    l = t.forceNew || t["force new connection"] || t.multiplex === !1 || i;
  let d;
  return (
    l ? (d = new uo(s, t)) : (Gt[n] || (Gt[n] = new uo(s, t)), (d = Gt[n])),
    r.query && !t.query && (t.query = r.queryKey),
    d.socket(r.path, t)
  );
}
Object.assign(Ds, { Manager: uo, Socket: pd, io: Ds, connect: Ds });
let ge = null,
  ze = 0,
  Bn = null,
  Fr = [];
function ve(e, t = {}) {
  ye.emit(`SOCKET:${e}`, O({ type: e }, t));
}
function zv() {
  var t;
  if (!Ys("wss") || ge) return;
  const e =
    ((t = se == null ? void 0 : se.ws) == null ? void 0 : t.url) ||
    window.location.origin;
  (ge = Ds(e, se.ws)),
    ge.on("connect", () => {
      (ze = 0), ve("STATUS", { connected: !0, id: ge.id }), Hv();
    }),
    ge.on("message", (r) => {
      ve("MESSAGE", { data: r });
    }),
    ge.on("notification", (r) => ve("NOTIFICATION", { data: r })),
    ge.on("update", (r) => ve("UPDATE", { data: r })),
    ge.on("connect_error", (r) => {
      ve("ERROR", { message: r.message || "Connection error", attempt: ze }),
        z0();
    }),
    ge.on("disconnect", (r) => {
      ve("DISCONNECT", { reason: r }), r !== "io client disconnect" && z0();
    }),
    ge.on("reconnect_attempt", () => {
      ve("RECONNECT_ATTEMPT", { attempt: ze });
    }),
    ge.on("reconnect_failed", () => {
      ve("RECONNECT_FAILED", { attempt: ze });
    }),
    ge.on("ping", () => {
      ve("PING", { ts: Date.now() });
    }),
    ge.on("pong", (r) => {
      ve("PONG", { latency: r });
    }),
    ve("INIT", { connected: !1 });
}
function Hv() {
  if (Fr.length) {
    ve("flush_start", { count: Fr.length });
    for (const e of Fr) ge.emit(e.type, e.payload), ve("sent", e);
    (Fr = []), ve("flush_end");
  }
}
function z0() {
  var s, n, a, i;
  if (Bn) return;
  const e =
      (n =
        (s = se == null ? void 0 : se.realtime) == null
          ? void 0
          : s.maxRetries) != null
        ? n
        : 5,
    t =
      (i =
        (a = se == null ? void 0 : se.realtime) == null
          ? void 0
          : a.retryDelay) != null
        ? i
        : 2e3;
  if (ze >= e) {
    ve("reconnect_failed", { retries: ze });
    return;
  }
  const r = Math.min(t * Math.pow(2, ze), 3e4);
  ze++,
    ve("reconnect_scheduled", { delay: r, attempt: ze }),
    (Bn = setTimeout(() => {
      (Bn = null),
        ve("reconnecting", { attempt: ze }),
        ge && !ge.connected && ge.connect();
    }, r));
}
function qv() {
  const e = () => ye.emit(Ee.TAB_VISIBILITY, { hidden: document.hidden });
  document.addEventListener("visibilitychange", e), e();
}
const Wv = async () => {
  try {
    await hr({
      method: "GET",
      url: "/ping",
      timeout: 2e3,
      retry: 1,
      loading: !1,
    });
  } catch (e) {
    ye.emit("SYSTEM_GUARD", {
      model: "SERVER_DOWN",
      error: e == null ? void 0 : e.message,
    });
  }
};
function Kv() {
  Ys("inputTracer") &&
    (window.addEventListener(
      "keydown",
      (e) => {
        ye.emit(Ee.INPUT_TRACE, { type: "key", key: e.key, ts: Date.now() });
      },
      !0,
    ),
    window.addEventListener(
      "click",
      (e) => {
        ye.emit(Ee.INPUT_TRACE, {
          type: "mouse",
          button: e.button,
          x: e.clientX,
          y: e.clientY,
          ts: Date.now(),
        });
      },
      !0,
    ));
}
const Yv = [
  { key: "F12" },
  { key: "I", ctrlKey: !0, shiftKey: !0 },
  { key: "C", ctrlKey: !0, shiftKey: !0 },
  { key: "U", ctrlKey: !0 },
  { key: "S", ctrlKey: !0 },
];
function Xv(e, t) {
  var r;
  return (
    (t.key ? ((r = e.key) == null ? void 0 : r.toUpperCase()) === t.key : !0) &&
    (t.ctrlKey ? e.ctrlKey : !t.ctrlKey) &&
    (t.shiftKey ? e.shiftKey : !t.shiftKey)
  );
}
function Gv() {
  const e = `
    font-size: 32px;
    font-weight: 800;
    color: #ff0000;
    text-shadow: 0 0 8px #ff0000;
  `,
    t = `
    font-size: 14px;
    color: #ffffff;
    background-color: #1e1e1e;
    padding: 10px;
    border: 1px solid #ff0000;
    border-radius: 6px;
  `;
  console.clear(),
    console.log("%c⚠️ SECURITY WARNING ⚠️", e),
    console.log(
      "%cThis console is for developers only. Any unauthorized access, data inspection, or code modification may violate terms of service or security policies.",
      t,
    ),
    console.log(
      "%c📜 View Terms & Conditions: https://terms.ajayos.in/",
      "color: #00ffff; font-weight: bold;",
    ),
    console.log(
      "%c🔒 For security reasons, please close the DevTools window if opened unintentionally.",
      "color: #ff8800;",
    );
}
function Zv() {
  if (!Ys("inspectGuard")) return;
  Gv(),
    console.log("%cInspect Guard is active.", "color: #00ff00;"),
    window.addEventListener("contextmenu", (r) => r.preventDefault()),
    window.addEventListener(
      "keydown",
      (r) => {
        Yv.some((s) => Xv(r, s)) && (r.preventDefault(), r.stopPropagation());
      },
      !0,
    );
  let e = !1;
  setInterval(() => {
    const s =
      window.outerWidth - window.innerWidth > 160 ||
      window.outerHeight - window.innerHeight > 160;
    s !== e &&
      ((e = s),
      e &&
        (console.log(
          "%c-----------------------------------",
          "color: #555555;",
        ),
        console.log("%cDevTools detected!", "color: #ff0000; font-size: 16px;"),
        console.log("%cPlease close the DevTools window.", "color: #ff8800;"),
        console.log(
          "%c🔒 For security reasons, please close the DevTools window if opened unintentionally.",
          "color: #ff8800;",
        ),
        console.log("%c-----------------------------------", "color: #555555;"),
        ye.emit(Ee.INSPECT_DETECTED, { open: !0 })));
  }, 1e3);
}
const Sn = {
    inspectGuard: Zv,
    inputTracer: Kv,
    tabTracker: qv,
    wss: zv,
    isServerLive: Wv,
  },
  Qv = () => {
    const [e, t] = _.useState(60),
      [r, s] = _.useState(1);
    return (
      _.useEffect(() => {
        const n = setInterval(() => {
          t((a) => (a > 0 ? a - 1 : 60)), s(Math.random() * 0.5 + 0.7);
        }, 1e3);
        return () => clearInterval(n);
      }, []),
      o.jsxs("div", {
        className:
          "fixed inset-0 w-screen h-screen overflow-hidden flex flex-col justify-center items-center bg-slate-950 text-white",
        children: [
          o.jsxs("div", {
            className: "absolute inset-0",
            children: [
              o.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-br from-slate-950 via-red-950/20 to-slate-950",
              }),
              o.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-red-600/30 via-transparent to-orange-600/30",
                style: { opacity: r },
              }),
            ],
          }),
          o.jsxs("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            children: [
              o.jsx("div", {
                className:
                  "absolute -top-40 -left-40 w-96 h-96 bg-red-500 rounded-full mix-blend-screen blur-3xl opacity-20 animate-float",
              }),
              o.jsx("div", {
                className:
                  "absolute top-1/4 -right-32 w-80 h-80 bg-orange-500 rounded-full mix-blend-screen blur-3xl opacity-15 animate-float-delayed",
              }),
              o.jsx("div", {
                className:
                  "absolute -bottom-32 left-1/3 w-96 h-96 bg-red-600 rounded-full mix-blend-screen blur-3xl opacity-20 animate-float-delayed-2",
              }),
            ],
          }),
          o.jsxs("div", {
            className:
              "relative z-50 w-full max-w-xl px-6 py-12 flex flex-col items-center justify-center",
            children: [
              o.jsxs("div", {
                className: "mb-8 text-center animate-in fade-in duration-700",
                children: [
                  o.jsx("div", {
                    className: "text-7xl mb-4 animate-pulse-custom",
                    children: "🚫",
                  }),
                  o.jsx("h1", {
                    className:
                      "text-5xl font-black mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",
                    children: "ACCESS DENIED",
                  }),
                  o.jsx("p", {
                    className:
                      "text-red-300 text-sm font-mono tracking-widest uppercase",
                    children: "Developer Tools Detected",
                  }),
                ],
              }),
              o.jsxs("div", {
                className:
                  "flex gap-3 justify-center mb-8 flex-wrap animate-in slide-in-from-bottom duration-700 delay-100",
                children: [
                  o.jsx("div", {
                    className:
                      "px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur",
                    children: o.jsx("span", {
                      className: "text-red-300 font-bold text-sm",
                      children: "⚠️ SECURITY ALERT",
                    }),
                  }),
                  o.jsx("div", {
                    className:
                      "px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-full backdrop-blur",
                    children: o.jsx("span", {
                      className: "text-orange-300 font-bold text-sm",
                      children: "🔒 BLOCKED",
                    }),
                  }),
                ],
              }),
              o.jsxs("div", {
                className:
                  "w-full mb-8 p-6 bg-gradient-to-br from-red-950/40 to-orange-950/30 border border-red-500/30 rounded-xl backdrop-blur-lg shadow-2xl animate-in zoom-in duration-700 delay-200",
                children: [
                  o.jsx("p", {
                    className: "text-center text-gray-200 leading-relaxed mb-3",
                    children:
                      "Inspector tools have been detected on this protected page. This action is not permitted.",
                  }),
                  o.jsxs("div", {
                    className:
                      "flex items-center justify-center gap-2 text-sm text-red-400 font-mono",
                    children: [
                      o.jsx("span", {
                        className:
                          "inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse",
                      }),
                      "Closing in:",
                      " ",
                      o.jsxs("span", {
                        className: "font-bold text-lg text-red-300",
                        children: [e, "s"],
                      }),
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className:
                  "w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 animate-in slide-in-from-bottom duration-700 delay-300",
                children: [
                  o.jsxs("button", {
                    onClick: () => window.location.reload(),
                    className:
                      "group relative px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl overflow-hidden",
                    children: [
                      o.jsx("div", {
                        className:
                          "absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      }),
                      o.jsxs("span", {
                        className:
                          "relative flex items-center justify-center gap-2",
                        children: [
                          o.jsx("span", {
                            className: "text-xl group-hover:animate-spin",
                            style: { animationDuration: "0.8s" },
                            children: "🔄",
                          }),
                          "Reload",
                        ],
                      }),
                    ],
                  }),
                  o.jsxs("a", {
                    href: "https://terms.ajayos.in",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "group relative px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl overflow-hidden",
                    children: [
                      o.jsx("div", {
                        className:
                          "absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      }),
                      o.jsxs("span", {
                        className:
                          "relative flex items-center justify-center gap-2",
                        children: [
                          o.jsx("span", {
                            className: "text-xl",
                            children: "📋",
                          }),
                          "Terms & Conditions",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className:
                  "w-full space-y-2 text-center text-xs text-gray-400 animate-in fade-in duration-700 delay-500",
                children: [
                  o.jsxs("p", {
                    className: "flex items-center justify-center gap-2",
                    children: [
                      o.jsx("span", { children: "💡" }),
                      o.jsxs("span", {
                        children: [
                          "Press",
                          " ",
                          o.jsx("span", {
                            className: "font-mono font-bold text-gray-300",
                            children: "F12",
                          }),
                          " or",
                          " ",
                          o.jsx("span", {
                            className: "font-mono font-bold text-gray-300",
                            children: "Ctrl+Shift+I",
                          }),
                          " ",
                          "to close Developer Tools",
                        ],
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "pt-2 border-t border-gray-700/50",
                    children: [
                      o.jsxs("p", {
                        className: "text-gray-500",
                        children: [
                          "Contact:",
                          " ",
                          o.jsx("span", {
                            className: "text-gray-400 font-mono",
                            children: "support@ajayos.in",
                          }),
                        ],
                      }),
                      o.jsx("p", {
                        className: "text-gray-600",
                        children: "© 2025 ajayos.in | Encrypted Connection",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          o.jsx("style", {
            children: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(30px) translateX(-20px); }
        }
        @keyframes float-delayed-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(-30px); }
        }
        @keyframes pulse-custom {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-delayed-2 { animation: float-delayed-2 8s ease-in-out infinite; }
        .animate-pulse-custom { animation: pulse-custom 3s ease-in-out infinite; }
      `,
          }),
        ],
      })
    );
  },
  H0 = ({ children: e }) => {
    const [t, r] = _.useState(0);
    return (
      _.useEffect(
        () => ye.on(Ee.API_LOADING, ({ inFlight: n }) => r(n || 0)),
        [],
      ),
      o.jsxs("div", {
        className: "relative",
        children: [
          e,
          t > 0 &&
            o.jsxs("div", {
              className:
                "fixed inset-0 z-50 flex flex-col items-center justify-center",
              children: [
                o.jsx("div", {
                  className: "absolute inset-0 bg-black/40 backdrop-blur-md",
                }),
                o.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-br from-slate-900/10 via-purple-900/10 to-slate-900/10",
                }),
                o.jsx("div", {
                  className:
                    "absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob",
                }),
                o.jsx("div", {
                  className:
                    "absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob",
                  style: { animationDelay: "2s" },
                }),
                o.jsx("div", {
                  className:
                    "absolute top-1/4 right-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob",
                  style: { animationDelay: "4s" },
                }),
                o.jsxs("div", {
                  className:
                    "relative z-10 flex flex-col items-center gap-8 p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl",
                  children: [
                    o.jsxs("div", {
                      className: "relative w-28 h-28",
                      children: [
                        o.jsx("div", {
                          className:
                            "absolute inset-0 rounded-full border-3 border-transparent border-t-purple-400 border-r-pink-400 animate-spin",
                        }),
                        o.jsx("div", {
                          className:
                            "absolute inset-3 rounded-full border-2 border-transparent border-b-pink-400 border-l-purple-400 animate-spin",
                          style: {
                            animationDirection: "reverse",
                            animationDuration: "1.5s",
                          },
                        }),
                        o.jsx("div", {
                          className:
                            "absolute inset-6 rounded-full border-2 border-transparent border-t-blue-300 border-r-purple-300 animate-spin",
                          style: { animationDuration: "2s" },
                        }),
                        o.jsx("div", {
                          className:
                            "absolute inset-0 flex items-center justify-center",
                          children: o.jsx(or, {
                            className:
                              "w-10 h-10 text-purple-300 drop-shadow-lg",
                            fill: "currentColor",
                          }),
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "text-center space-y-2",
                      children: [
                        o.jsx("h2", {
                          className:
                            "text-lg font-semibold text-white drop-shadow-lg",
                          children: "Processing",
                        }),
                        o.jsxs("div", {
                          className: "flex items-center justify-center gap-2",
                          children: [
                            o.jsx("span", {
                              className: "text-sm text-purple-200",
                              children: "Running API",
                            }),
                            o.jsxs("span", {
                              className: "inline-flex gap-1.5",
                              children: [
                                o.jsx("span", {
                                  className:
                                    "w-2 h-2 bg-purple-400 rounded-full animate-bounce",
                                  style: { animationDelay: "0s" },
                                }),
                                o.jsx("span", {
                                  className:
                                    "w-2 h-2 bg-pink-400 rounded-full animate-bounce",
                                  style: { animationDelay: "0.15s" },
                                }),
                                o.jsx("span", {
                                  className:
                                    "w-2 h-2 bg-blue-400 rounded-full animate-bounce",
                                  style: { animationDelay: "0.3s" },
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsx("div", {
                  className:
                    "absolute bottom-12 z-10 w-48 h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20",
                  children: o.jsx("div", {
                    className:
                      "h-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse",
                    style: { animation: "shimmer 2s infinite" },
                  }),
                }),
              ],
            }),
          o.jsx("style", {
            children: `
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }
        @keyframes shimmer {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; }
        }
        .animate-blob { animation: blob 8s infinite; }
      `,
          }),
        ],
      })
    );
  };
function Jv({ children: e }) {
  var g, p;
  const [t, r] = _.useState(!1),
    [s, n] = _.useState(!1),
    [a, i] = _.useState("idle"),
    [l, d] = _.useState(0),
    [c, u] = _.useState(null),
    f = (w, b) => {
      const v = w.split(".").map(Number),
        y = b.split(".").map(Number);
      for (let C = 0; C < Math.max(v.length, y.length); C++) {
        const E = v[C] || 0,
          N = y[C] || 0;
        if (E > N) return 1;
        if (E < N) return -1;
      }
      return 0;
    };
  _.useEffect(() => {
    u(se.appVersion);
    const b = setTimeout(() => {
      const v = Te.get("appVersion") || se.appVersion,
        y = Te.get("skippedVersion"),
        C = Te.get("lastSkipDate"),
        E = Date.now(),
        N = 1440 * 60 * 1e3;
      if (c && f(c, v) > 0) {
        const j = !y || y !== c || !C || E - C > 1 * N;
        n(j);
      }
      Te.get("appVersion") || Te.set("appVersion", se.appVersion);
    }, 500);
    return () => clearTimeout(b);
  }, [c]);
  const h = () => {
      Te.set("skippedVersion", c),
        Te.set("lastSkipDate", Date.now()),
        setTimeout(() => {
          n(!1);
        }, 300);
    },
    x = () => {
      i("checking"),
        d(0),
        setTimeout(() => {
          i("downloading"), d(15);
        }, 1200);
      const w = setInterval(() => {
        d((b) => (b >= 85 ? (clearInterval(w), 85) : b + Math.random() * 20));
      }, 300);
      setTimeout(() => {
        clearInterval(w), i("installing"), d(90);
      }, 3e3),
        setTimeout(() => {
          d(100), i("complete");
        }, 4500),
        setTimeout(() => {
          window.location.reload();
        }, 5500),
        Te.remove("skippedVersion"),
        Te.remove("lastSkipDate"),
        Te.set("appVersion", c);
    };
  if (!s || !c) return e;
  const m = Te.get("appVersion") || se.appVersion;
  return o.jsxs("div", {
    className:
      "w-full min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 flex items-center justify-center p-4 relative overflow-hidden",
    children: [
      o.jsxs("div", {
        className: "fixed inset-0 overflow-hidden pointer-events-none",
        children: [
          o.jsx("div", {
            className:
              "absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob",
          }),
          o.jsx("div", {
            className:
              "absolute bottom-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-blob",
            style: { animationDelay: "2s" },
          }),
          o.jsx("div", {
            className:
              "absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob",
            style: { animationDelay: "4s" },
          }),
        ],
      }),
      o.jsx("div", {
        className: "relative z-10 w-full max-w-sm sm:max-w-md",
        children: o.jsxs("div", {
          className:
            "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden hover:shadow-purple-500/20 hover:shadow-2xl transition-all duration-300 group",
          children: [
            o.jsx("div", {
              className:
                "relative h-28 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 border-b border-white/20 flex items-center justify-between px-6",
              children: o.jsxs("div", {
                className: "space-y-1",
                children: [
                  o.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      o.jsx(q0, {
                        className: "w-5 h-5 text-yellow-300 animate-pulse",
                      }),
                      o.jsx("h1", {
                        className:
                          "text-2xl font-bold text-white drop-shadow-lg",
                        children:
                          a === "idle" ? "Update Available" : "Updating...",
                      }),
                    ],
                  }),
                  o.jsxs("p", {
                    className: "text-purple-100 text-sm font-medium",
                    children: [m, " → ", c],
                  }),
                ],
              }),
            }),
            o.jsx("div", {
              className: "px-6 py-6 space-y-5",
              children:
                a === "idle"
                  ? o.jsxs(o.Fragment, {
                      children: [
                        o.jsx("p", {
                          className:
                            "text-slate-200 text-sm leading-relaxed text-center",
                          children:
                            "A major new version is available with exciting features, bug fixes, and performance improvements.",
                        }),
                        o.jsxs("button", {
                          onClick: () => r(!0),
                          className:
                            "w-full flex items-center justify-between py-3 px-4 bg-gradient-to-r from-purple-500/30 to-pink-500/30 hover:from-purple-500/50 hover:to-pink-500/50 rounded-xl border border-purple-400/60 transition-all group hover:shadow-lg hover:shadow-purple-500/30 backdrop-blur-sm",
                          children: [
                            o.jsxs("span", {
                              className: "font-semibold text-white text-sm",
                              children: ["What's New in v", c],
                            }),
                            o.jsx(Gd, {
                              className:
                                "w-4 h-4 text-purple-200 group-hover:rotate-180 transition-transform",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "space-y-3 pt-2",
                          children: [
                            o.jsxs("button", {
                              onClick: x,
                              className:
                                "w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-pink-500/50",
                              children: [
                                o.jsx(_n, { className: "w-4 h-4" }),
                                "Update Now",
                              ],
                            }),
                            o.jsxs("button", {
                              onClick: h,
                              className:
                                "w-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 hover:from-blue-500/50 hover:to-cyan-500/50 text-slate-100 font-semibold py-3 rounded-xl transition-all border border-blue-400/60 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/30 backdrop-blur-sm",
                              children: [
                                o.jsx(Jt, { className: "w-4 h-4" }),
                                "Remind Me Later",
                              ],
                            }),
                          ],
                        }),
                        o.jsx("p", {
                          className: "text-xs text-slate-500 text-center pt-2",
                          children:
                            "Updates keep your app secure and running smoothly",
                        }),
                      ],
                    })
                  : o.jsx(o.Fragment, {
                      children: o.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          o.jsx("div", {
                            className: "flex justify-center py-6",
                            children: o.jsxs("div", {
                              className: "relative w-24 h-24",
                              children: [
                                o.jsx("div", {
                                  className:
                                    "absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500 animate-spin",
                                }),
                                o.jsx("div", {
                                  className:
                                    "absolute inset-2 rounded-full border-4 border-transparent border-b-cyan-500 border-l-orange-500 animate-spin",
                                  style: { animationDirection: "reverse" },
                                }),
                                o.jsx("div", {
                                  className:
                                    "absolute inset-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse flex items-center justify-center",
                                  children: o.jsx(or, {
                                    className:
                                      "w-6 h-6 text-white animate-bounce",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          o.jsxs("div", {
                            className: "text-center space-y-2",
                            children: [
                              o.jsxs("p", {
                                className:
                                  "text-white font-semibold text-lg capitalize",
                                children: [
                                  a === "checking" && "Checking for updates...",
                                  a === "downloading" &&
                                    "Downloading update...",
                                  a === "installing" && "Installing update...",
                                  a === "complete" && "Update complete!",
                                ],
                              }),
                              o.jsxs("p", {
                                className: "text-slate-400 text-sm",
                                children: [
                                  a === "checking" &&
                                    "Verifying latest version",
                                  a === "downloading" &&
                                    "Fetching update files",
                                  a === "installing" &&
                                    "Installing and configuring",
                                  a === "complete" && "Preparing to restart...",
                                ],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              o.jsx("div", {
                                className:
                                  "w-full bg-white/10 rounded-full h-3 overflow-hidden border border-white/20 backdrop-blur-sm",
                                children: o.jsx("div", {
                                  className:
                                    "h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-500 ease-out rounded-full shadow-lg shadow-pink-500/50",
                                  style: { width: `${l}%` },
                                }),
                              }),
                              o.jsxs("p", {
                                className:
                                  "text-center text-white font-semibold text-sm",
                                children: [Math.round(l), "%"],
                              }),
                            ],
                          }),
                          o.jsx("div", {
                            className: "grid grid-cols-4 gap-2 pt-4",
                            children: [
                              "Checking",
                              "Download",
                              "Install",
                              "Complete",
                            ].map((w, b) => {
                              const y = [
                                  "checking",
                                  "downloading",
                                  "installing",
                                  "complete",
                                ].indexOf(a),
                                C = b < y || (b === y && a === "complete"),
                                E = b === y;
                              return o.jsxs(
                                "div",
                                {
                                  className: `text-center p-2 rounded-lg transition-all ${C ? "bg-green-500/30 border border-green-400/60" : E ? "bg-purple-500/40 border border-purple-400/60 animate-pulse" : "bg-white/10 border border-white/20"}`,
                                  children: [
                                    o.jsx("p", {
                                      className:
                                        "text-xs font-semibold text-white",
                                      children: w,
                                    }),
                                    C &&
                                      o.jsx("p", {
                                        className: "text-green-400 text-lg",
                                        children: "✓",
                                      }),
                                  ],
                                },
                                w,
                              );
                            }),
                          }),
                        ],
                      }),
                    }),
            }),
          ],
        }),
      }),
      t &&
        ((g = se == null ? void 0 : se.changelog) == null ? void 0 : g.length) >
          0 &&
        o.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in",
          children: o.jsxs("div", {
            className:
              "bg-gradient-to-br from-slate-900/95 via-purple-900/50 to-slate-900/95 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col",
            children: [
              o.jsxs("div", {
                className:
                  "bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 border-b border-white/20 p-6 flex items-center justify-between",
                children: [
                  o.jsxs("h2", {
                    className:
                      "text-2xl font-bold text-white flex items-center gap-2 drop-shadow-lg",
                    children: [
                      o.jsx("span", { children: "📝" }),
                      "Changelog v",
                      c,
                    ],
                  }),
                  o.jsx("button", {
                    onClick: () => r(!1),
                    className:
                      "p-2 hover:bg-white/20 rounded-lg transition-colors",
                    children: o.jsx(Ls, { className: "w-5 h-5 text-white" }),
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "overflow-y-auto flex-1 p-6 space-y-6",
                children: [
                  (p = se == null ? void 0 : se.changelog) == null
                    ? void 0
                    : p.map((w) =>
                        o.jsxs(
                          "div",
                          {
                            className: "space-y-4 animate-slide-up",
                            children: [
                              o.jsxs("div", {
                                className: `inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${w.badgeGradient} border ${w.borderColor} backdrop-blur-sm shadow-lg`,
                                children: [
                                  o.jsx("span", {
                                    className: "text-lg",
                                    children: w.icon,
                                  }),
                                  w.category,
                                ],
                              }),
                              o.jsx("div", {
                                className:
                                  "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: w.items.map((b, v) =>
                                  o.jsx(
                                    "div",
                                    {
                                      className: `bg-gradient-to-br ${w.gradient} hover:shadow-lg hover:-translate-y-1 border ${w.borderColor} rounded-xl p-4 transition-all space-y-2 group backdrop-blur-sm`,
                                      children: o.jsxs("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                          o.jsx("div", {
                                            className:
                                              "text-3xl flex-shrink-0 group-hover:scale-110 transition-transform",
                                            children: b.image,
                                          }),
                                          o.jsxs("div", {
                                            className: "flex-1",
                                            children: [
                                              o.jsx("h4", {
                                                className:
                                                  "text-white font-semibold text-sm",
                                                children: b.title,
                                              }),
                                              o.jsx("p", {
                                                className:
                                                  "text-slate-300 text-xs mt-1",
                                                children: b.description,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    },
                                    v,
                                  ),
                                ),
                              }),
                            ],
                          },
                          w.id,
                        ),
                      ),
                  o.jsxs("div", {
                    className:
                      "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 rounded-xl p-4 backdrop-blur-sm animate-slide-up",
                    children: [
                      o.jsxs("p", {
                        className:
                          "text-slate-200 text-sm flex items-center gap-2",
                        children: [
                          o.jsx("span", {
                            className: "font-semibold",
                            children: "📅 Release Date:",
                          }),
                          " ",
                          se.releaseDate,
                        ],
                      }),
                      o.jsx("p", {
                        className: "text-slate-400 text-xs mt-2",
                        children:
                          "All updates are tested thoroughly to ensure stability and security",
                      }),
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className:
                  "bg-white/10 border-t border-white/20 p-4 flex gap-3 backdrop-blur-sm",
                children: [
                  o.jsx("button", {
                    onClick: () => r(!1),
                    className:
                      "flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 rounded-lg transition-all border border-white/20",
                    children: "Close",
                  }),
                  o.jsx("button", {
                    onClick: () => {
                      x(), r(!1);
                    },
                    className:
                      "flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2.5 rounded-lg transition-all shadow-lg hover:shadow-pink-500/50",
                    children: "Update Now",
                  }),
                ],
              }),
            ],
          }),
        }),
      o.jsx("style", {
        children: `
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }
        .animate-blob { animation: blob 8s infinite; }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.4s ease-out; }
      `,
      }),
    ],
  });
}
function ey() {
  const [e, t] = _.useState(0),
    [r, s] = _.useState(!1);
  _.useEffect(() => {
    const i = setInterval(() => {
      t((l) => l + 1);
    }, 1e3);
    return () => clearInterval(i);
  }, []);
  const n = () => {
      s(!0),
        setTimeout(() => {
          window.location.reload();
        }, 500);
    },
    a = (i) => {
      const l = Math.floor(i / 60),
        d = i % 60;
      return `${l}:${d.toString().padStart(2, "0")}`;
    };
  return o.jsxs("div", {
    className:
      "w-full min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-slate-950 flex items-center justify-center p-4 relative overflow-hidden",
    children: [
      o.jsxs("div", {
        className: "fixed inset-0 overflow-hidden pointer-events-none",
        children: [
          o.jsx("div", {
            className:
              "absolute -top-40 -right-40 w-80 h-80 bg-red-600/30 rounded-full blur-3xl animate-pulse",
          }),
          o.jsx("div", {
            className:
              "absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse",
            style: { animationDelay: "1s" },
          }),
        ],
      }),
      o.jsxs("div", {
        className: "relative z-10 w-full max-w-5xl",
        children: [
          o.jsxs("div", {
            className:
              "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center",
            children: [
              o.jsx("div", {
                className: "hidden lg:flex justify-center",
                children: o.jsxs("div", {
                  className: "relative w-64 h-80",
                  children: [
                    o.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent rounded-3xl blur-3xl",
                    }),
                    o.jsx("div", {
                      className:
                        "absolute inset-0 rounded-full border border-red-500/20 animate-pulse",
                    }),
                    o.jsx("div", {
                      className:
                        "absolute inset-6 rounded-full border border-red-500/10 animate-pulse",
                      style: { animationDelay: "0.3s" },
                    }),
                    o.jsx("div", {
                      className:
                        "absolute inset-0 flex items-center justify-center",
                      children: o.jsxs("div", {
                        className: "w-40 h-56 relative",
                        children: [
                          o.jsxs("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 border-red-500/40 shadow-2xl shadow-red-500/20",
                            children: [
                              o.jsxs("div", {
                                className:
                                  "h-10 bg-gradient-to-r from-slate-700 to-slate-800 rounded-t-xl border-b border-red-500/30 flex items-center px-4 gap-3",
                                children: [
                                  o.jsx("div", {
                                    className:
                                      "w-2 h-2 rounded-full bg-red-500 animate-pulse",
                                  }),
                                  o.jsx("span", {
                                    className:
                                      "text-xs text-slate-400 font-mono",
                                    children: "SERVER",
                                  }),
                                ],
                              }),
                              o.jsx("div", {
                                className:
                                  "flex-1 flex flex-col justify-center px-4 gap-2",
                                children: [0, 1, 2].map((i) =>
                                  o.jsxs(
                                    "div",
                                    {
                                      className: "flex items-center gap-2",
                                      children: [
                                        o.jsx("div", {
                                          className: `w-2 h-2 rounded-full ${i === 0 ? "bg-red-500 animate-pulse" : "bg-slate-700"}`,
                                        }),
                                        o.jsx("div", {
                                          className:
                                            "flex-1 h-1 bg-slate-700 rounded",
                                        }),
                                      ],
                                    },
                                    i,
                                  ),
                                ),
                              }),
                              o.jsx("div", {
                                className:
                                  "h-10 bg-gradient-to-r from-slate-800 to-slate-900 rounded-b-xl border-t border-red-500/30 flex items-center justify-center",
                                children: o.jsx(Aa, {
                                  className:
                                    "w-5 h-5 text-red-500 animate-pulse",
                                }),
                              }),
                            ],
                          }),
                          o.jsx("div", {
                            className:
                              "absolute -top-6 -right-6 animate-bounce",
                            children: o.jsx("div", {
                              className:
                                "bg-red-500/30 p-2 rounded-full border border-red-500/60 backdrop-blur",
                              children: o.jsx(Lu, {
                                className: "w-5 h-5 text-red-300",
                              }),
                            }),
                          }),
                          o.jsx("div", {
                            className: "absolute -bottom-2 -left-6",
                            children: o.jsx("div", {
                              className:
                                "bg-red-500/20 p-2 rounded-full border border-red-500/40",
                              children: o.jsx(or, {
                                className: "w-4 h-4 text-red-300 animate-pulse",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              o.jsx("div", {
                className: "flex flex-col justify-center space-y-6",
                children: o.jsxs("div", {
                  className:
                    "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 space-y-6",
                  children: [
                    o.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        o.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            o.jsx("div", {
                              className:
                                "p-2 bg-red-500/20 rounded-lg border border-red-500/40",
                              children: o.jsx(Aa, {
                                className: "w-6 h-6 text-red-400",
                              }),
                            }),
                            o.jsx("h1", {
                              className: "text-4xl font-bold text-white",
                              children: "Service Down",
                            }),
                          ],
                        }),
                        o.jsx("p", {
                          className: "text-slate-300 text-sm",
                          children: "We're experiencing temporary issues",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className:
                        "bg-red-500/10 border border-red-500/30 rounded-2xl p-5 backdrop-blur-sm space-y-2",
                      children: [
                        o.jsx("p", {
                          className: "text-slate-200 text-sm leading-relaxed",
                          children:
                            "Our backend infrastructure is currently unavailable. Our engineering team is actively investigating and working to restore service as quickly as possible.",
                        }),
                        o.jsxs("p", {
                          className: "text-red-300 text-xs font-mono",
                          children: ["Downtime: ", a(e)],
                        }),
                      ],
                    }),
                    o.jsx("div", {
                      className: "grid ",
                      children: o.jsxs("button", {
                        onClick: n,
                        disabled: r,
                        className:
                          "bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 text-white font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group",
                        children: [
                          o.jsx(Bs, {
                            className: `w-4 h-4 ${r ? "animate-spin" : "group-hover:rotate-180 transition-transform"}`,
                          }),
                          "Retry",
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          o.jsx("div", {
            className:
              "mt-12 bg-gradient-to-r from-red-500/15 to-rose-500/10 border border-red-500/30 rounded-2xl p-5 backdrop-blur-sm",
            children: o.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                o.jsx(qu, {
                  className: "w-5 h-5 text-red-400 flex-shrink-0 animate-pulse",
                }),
                o.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    o.jsx("p", {
                      className: "text-white font-semibold text-sm",
                      children: "Real-time Updates",
                    }),
                    o.jsx("p", {
                      className: "text-slate-400 text-xs",
                      children:
                        "Visit our status page for live incident reports",
                    }),
                  ],
                }),
                o.jsxs("a", {
                  href: "https://status.ajayos.in",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "text-red-400 hover:text-red-300 text-sm font-semibold flex items-center gap-1 flex-shrink-0",
                  children: ["View ", o.jsx(W0, { className: "w-3 h-3" })],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
const Ey = () => {
  const { setUser: e } = It(),
    [t, r] = _.useState("SYSTEM_UPDATE"),
    [s, n] = _.useState(!1),
    [a, i] = _.useState(!1);
  return (
    _.useEffect(() => {
      (async () => {
        try {
          const { error: d, data: c = [] } = await We.post(
            "/foodease/auth/user",
          );
          d
            ? (window.location.href =
                "https://auth.ajayos.in/sso/prudent?next=" +
                btoa(window.location.href).replace(/=/g, ""))
            : (e(c), i(!0));
        } catch (d) {
          console.error("Error fetching user data:", d),
            (window.location.href =
              "https://auth.ajayos.in/sso/prudent?next=" +
              btoa(window.location.href).replace(/=/g, ""));
        }
      })();
    }, []),
    _.useEffect(() => {
      const l = [
        ye.on("SYSTEM_GUARD", ({ model: d = null }) => {
          r(d);
        }),
      ];
      return () => l.forEach((d) => d());
    }, []),
    _.useEffect(
      () => (
        Object.keys(Sn).forEach((l) => {
          if (Ys(l) && typeof Sn[l] == "function")
            try {
              Sn[l]();
            } catch (d) {
              console.error(
                `[SystemGuard] Error initializing feature: ${l}`,
                d,
              );
            }
        }),
        n(!0)
      ),
      [],
    ),
    !s || !a
      ? o.jsx($d, {})
      : t === "LOADING"
        ? o.jsx(H0, {})
        : t === "INSPECT_BLOCKER"
          ? o.jsx(Qv, {})
          : t === "SERVER_DOWN"
            ? o.jsx(ey, {})
            : o.jsx(H0, { children: o.jsx(Jv, { children: o.jsx(Xb, {}) }) })
  );
};
export { Ey as default };
