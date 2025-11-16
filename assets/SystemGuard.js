var ct = Object.defineProperty,
  mt = Object.defineProperties;
var xt = Object.getOwnPropertyDescriptors;
var Ye = Object.getOwnPropertySymbols;
var ht = Object.prototype.hasOwnProperty,
  pt = Object.prototype.propertyIsEnumerable;
var Ve = (t, r, a) =>
    r in t
      ? ct(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[r] = a),
  X = (t, r) => {
    for (var a in r || (r = {})) ht.call(r, a) && Ve(t, a, r[a]);
    if (Ye) for (var a of Ye(r)) pt.call(r, a) && Ve(t, a, r[a]);
    return t;
  },
  Q = (t, r) => mt(t, xt(r));
import {
  r as o,
  j as e,
  F as ut,
  d as bt,
  X as $e,
  L as gt,
  u as ft,
  e as et,
  f as vt,
  B as yt,
  g as wt,
  h as jt,
  P as Nt,
  C as kt,
  U as St,
  A as Be,
  i as Ct,
  k as Ne,
  l as Dt,
  m as Ce,
  n as xe,
  I as Te,
  D as ke,
  o as Ae,
  p as be,
  q as fe,
  s as Fe,
  t as $t,
  M as Et,
  v as He,
  w as tt,
  x as at,
  Z as ve,
  y as It,
  z as Tt,
  E as At,
  G as We,
  J as Ge,
  K as he,
  N as rt,
  O as ze,
  Q as Mt,
  S as st,
  T as Pt,
  V as Lt,
  W as Xe,
  Y as Rt,
  _ as Ut,
} from "./aos_vendor.js";
import { C as Me, e as _t, f as F, h as Ft, l as zt } from "./aos.js";
import { U as Ot, F as Bt } from "./index.js";
const Pe = (t) => `${btoa(`${t}`).replace(/=/g, "")}`,
  Ke = "super-secret-key-ajayos",
  Z = {
    get(t, r = null) {
      try {
        const a = localStorage.getItem(Pe(t));
        if (!a) return r;
        const x = Me.AES.decrypt(a, Ke).toString(Me.enc.Utf8);
        if (!x) return r;
        try {
          const i = JSON.parse(x);
          return i && i.__type === "string" ? i.value : i;
        } catch (i) {
          return x;
        }
      } catch (a) {
        return r;
      }
    },
    set(t, r) {
      try {
        let a;
        typeof r == "string"
          ? (a = JSON.stringify({ __type: "string", value: r }))
          : (a = JSON.stringify(r));
        const m = Me.AES.encrypt(a, Ke).toString();
        localStorage.setItem(Pe(t), m);
      } catch (a) {
        console.error("Storage set error:", a);
      }
    },
    remove(t) {
      localStorage.removeItem(Pe(t));
    },
    firstLoad() {
      return this.get("seen", !1) ? !1 : (this.set("seen", !0), !0);
    },
  },
  Yt = "foodease",
  Vt = "1.0.0",
  Ht = {
    inspectGuard: !1,
    inputTracer: !1,
    tabTracker: !1,
    wss: !1,
    isServerLive: !0,
  },
  Wt = {
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
  Gt = {
    baseURL: "https://api.ajayos.in",
    timeout: 2e4,
    withCredentials: !0,
    retry: 2,
  },
  Xt = "November 5, 2025",
  Kt = [
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
  ot = {
    projectName: Yt,
    appVersion: Vt,
    features: Ht,
    ws: Wt,
    api: Gt,
    releaseDate: Xt,
    changelog: Kt,
  },
  R = ot,
  Ee = (t) => {
    var r;
    return !!((r = ot.features) != null && r[t]);
  };
class qt {
  constructor() {
    this.map = new Map();
  }
  on(r, a) {
    const m = this.map.get(r) || [];
    return m.push(a), this.map.set(r, m), () => this.off(r, a);
  }
  once(r, a) {
    const m = this.on(r, (...x) => {
      m(), a(...x);
    });
    return m;
  }
  off(r, a) {
    const m = this.map.get(r) || [];
    this.map.set(
      r,
      m.filter((x) => x !== a),
    );
  }
  emit(r, ...a) {
    const m = this.map.get(r) || [];
    for (const x of m)
      try {
        x(...a);
      } catch (i) {
        console.error(i);
      }
  }
}
const H = new qt(),
  q = {
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
let Se = localStorage.getItem("U1RBVElDX1VVSUQ");
Se || ((Se = lt()), localStorage.setItem("U1RBVElDX1VVSUQ", Se));
function lt(t = !1) {
  if (typeof crypto != "undefined") {
    if (crypto.getRandomValues) {
      const r = new Uint8Array(20);
      return (
        crypto.getRandomValues(r),
        `aos.${t ? "request" : "device"}_` +
          Array.from(r)
            .map((a) => a.toString(16).padStart(2, "0"))
            .join("")
      );
    } else if (crypto.randomBytes)
      return (
        `aos.${t ? "request" : "device"}_` +
        crypto.randomBytes(20).toString("hex")
      );
  }
  return (
    `aos.${t ? "request" : "device"}_` +
    (Math.random().toString(36).substring(2, 10) + Date.now())
  );
}
const De = (t) =>
  `${(t.method || "GET").toUpperCase()} ${t.baseURL || ""}${t.url || ""}`;
function Jt(t) {
  return (
    (t.metadata = { start: Date.now() }),
    (t.headers["x-request-time"] = new Date().toISOString()),
    (t.headers["x-request-id"] = lt(!0)),
    (t.headers["x-visitor-id"] = Se),
    (t.headers["x-request-timezone"] =
      Intl.DateTimeFormat().resolvedOptions().timeZone),
    (t.headers["x-request-utc-offset"] = -new Date().getTimezoneOffset() / 60),
    (t.headers["x-request-epoch"] = Date.now()),
    (t.headers["x-app-name"] = R.projectName),
    t
  );
}
async function Qt(t, r) {
  var p, c, v, A, E, T;
  const a = t.config;
  if (!a || a._retrying) return Promise.reject(t);
  (a._retrying = !0), (a.__retryCount = a.__retryCount || 0);
  const m = Math.min(
      (c = (p = a.retry) != null ? p : R.api.retry) != null ? c : 3,
      5,
    ),
    x =
      (A = (v = a.retryDelay) != null ? v : R.api.retryDelay) != null ? A : 1e3,
    i = (E = t.response) == null ? void 0 : E.status;
  if (
    (i && i >= 400 && i < 500) ||
    t.code === "ECONNABORTED" ||
    ((T = t.message) != null && T.includes("canceled"))
  )
    return Promise.reject(t);
  let b = t;
  for (; a.__retryCount < m; ) {
    a.__retryCount += 1;
    const S = x * Math.pow(2, a.__retryCount - 1);
    R.api.trace &&
      H.emit(q.API_TRACE, {
        method: a.method,
        url: a.url,
        retry: a.__retryCount,
        delay: S,
      }),
      await new Promise((D) => setTimeout(D, S));
    try {
      const D = await r(a);
      return (
        a.loading === !0 &&
          H.emit(q.API_LOADING, { key: De(a), loading: !1, inFlight: 0 }),
        D
      );
    } catch (D) {
      if (((b = D), a.__retryCount >= m)) break;
    }
  }
  return (
    a.loading === !0 &&
      H.emit(q.API_LOADING, { key: De(a), loading: !1, inFlight: 0 }),
    H.emit(q.ERROR, b),
    H.emit(q.API_RETRY_END, {
      method: a.method,
      url: a.url,
      attempts: a.__retryCount,
    }),
    Promise.reject(b)
  );
}
const ye = _t.create(R.api);
ye.interceptors.request.use(
  (t) => (
    Jt(t),
    t.loading === !0 &&
      H.emit(q.API_LOADING, { key: De(t), loading: !0, inFlight: 1 }),
    t
  ),
);
ye.interceptors.response.use(
  (t) => {
    var a;
    const r =
      Date.now() -
      (((a = t.config.metadata) == null ? void 0 : a.start) || Date.now());
    return (
      t.config.loading === !0 &&
        H.emit(q.API_LOADING, { key: De(t.config), loading: !1, inFlight: 0 }),
      R.api.trace &&
        H.emit(q.API_TRACE, {
          method: t.config.method,
          url: t.config.url,
          ms: r,
          status: t.status,
        }),
      t
    );
  },
  async (t) => {
    var m, x;
    const r = t.config || {},
      a =
        Date.now() -
        (((m = r.metadata) == null ? void 0 : m.start) || Date.now());
    return (
      R.api.trace &&
        H.emit(q.API_TRACE, {
          method: r.method,
          url: r.url,
          ms: a,
          status: ((x = t.response) == null ? void 0 : x.status) || 0,
        }),
      Qt(t, ye)
    );
  },
);
const de = async (t = "GET", r, a = {}, m = {}) => {
    var p;
    let x;
    function i(c = {}) {
      const v = encodeURIComponent;
      return Object.keys(c)
        .map((A) => `${v(A)}=${v(c[A])}`)
        .join("&");
    }
    const b = X({ method: t.toUpperCase(), url: r }, m);
    if (["GET", "DELETE", "HEAD"].includes(t.toUpperCase())) {
      if (a && Object.keys(a).length) {
        const c = i(a),
          v = r.includes("?") ? "&" : "?";
        b.url = `${r}${v}${c}`;
      }
    } else b.data = a;
    try {
      const { data: c } = await ye(b);
      x = c;
    } catch (c) {
      x = ((p = c == null ? void 0 : c.response) == null ? void 0 : p.data) || {
        error: !0,
        code: "INTERNAL_SERVER_ERROR",
        message: (c == null ? void 0 : c.message) || "Something went wrong :)",
      };
    }
    return x;
  },
  re = {
    get: (t, r = {}, a = {}) => de("GET", t, r, a),
    post: (t, r = {}, a = {}) => de("POST", t, r, a),
    put: (t, r = {}, a = {}) => de("PUT", t, r, a),
    patch: (t, r = {}, a = {}) => de("PATCH", t, r, a),
    delete: (t, r = {}, a = {}) => de("DELETE", t, r, a),
    head: (t, r = {}, a = {}) => de("HEAD", t, r, a),
  },
  pe = () => o.useContext(Ot),
  Le = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  },
  ce = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  },
  qe =
    "bg-gradient-to-r from-orange-600/30 via-red-600/30 to-rose-600/30 backdrop-blur-2xl border-b border-white/10 shadow-2xl relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-orange-600/10 after:via-red-600/10 after:to-rose-600/10 after:animate-pulse",
  Zt =
    "bg-gradient-to-br from-white/10 via-orange-50/20 to-rose-50/10 backdrop-blur-2xl border border-white/10 shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-orange-500/5 before:to-rose-500/5 before:animate-shimmer",
  ea = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;
function Oe() {
  const { user: t } = pe(),
    [r, a] = o.useState(!1),
    [m, x] = o.useState(!0);
  o.useEffect(() => {
    const p =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    x(p);
    const c = window.matchMedia("(prefers-color-scheme: dark)"),
      v = (A) => x(A.matches);
    return (
      c.addEventListener("change", v), () => c.removeEventListener("change", v)
    );
  }, []);
  const i = async () => {
      const { error: p } = await re.get("/auth/logout");
      p ||
        ((window.location.href =
          "https://auth.ajayos.in/sso/prudent?next=" +
          btoa(window.location.origin)),
        window.location.reload());
    },
    b = Array.from("FoodEase");
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("style", { children: ea }),
      e.jsx("nav", {
        className: qe,
        children: e.jsx("div", {
          className: "max-w-7xl mx-auto px-6 py-4 relative z-10",
          children: e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              e.jsxs(F.div, {
                className: "flex items-center gap-3",
                initial: { x: -50, opacity: 0 },
                animate: { x: 0, opacity: 1 },
                transition: { duration: 0.6, ease: "easeOut" },
                children: [
                  e.jsxs("div", {
                    className: "relative group",
                    children: [
                      e.jsx(F.div, {
                        className: "relative",
                        animate: { rotate: [0, 360] },
                        transition: {
                          duration: 20,
                          repeat: 1 / 0,
                          ease: "linear",
                        },
                        children: e.jsx(ut, {
                          size: 32,
                          className:
                            "text-yellow-300 drop-shadow-lg group-hover:text-yellow-200 transition-colors",
                        }),
                      }),
                      e.jsx(F.div, {
                        animate: { y: [0, -5, 0] },
                        transition: {
                          duration: 2,
                          repeat: 1 / 0,
                          ease: "easeInOut",
                        },
                        children: e.jsx(bt, {
                          size: 28,
                          className:
                            "text-white absolute -right-1 -bottom-1 drop-shadow-md group-hover:scale-110 transition-transform",
                        }),
                      }),
                      e.jsx(F.div, {
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
                  e.jsx("div", {
                    className: "flex",
                    children: b.map((p, c) =>
                      e.jsx(
                        F.span,
                        {
                          className:
                            "text-3xl font-black tracking-wider drop-shadow-lg",
                          style: {
                            background: `linear-gradient(45deg, hsl(${45 + c * 15}, 100%, 70%), hsl(${60 + c * 10}, 100%, 50%}))`,
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
                              `hsl(${45 + c * 15}, 100%, 70%)`,
                              `hsl(${60 + c * 10}, 100%, 50%)`,
                              `hsl(${45 + c * 15}, 100%, 70%)`,
                            ],
                          },
                          transition: {
                            delay: c * 0.1 + 0.2,
                            duration: 0.8,
                            repeat: 1 / 0,
                            repeatDelay: 3,
                          },
                          whileHover: {
                            scale: 1.1,
                            rotate: 10,
                            textShadow: "0 0 20px rgba(255, 215, 0, 0.8)",
                          },
                          children: p,
                        },
                        c,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs(F.div, {
                className: "text-center hidden md:block text-white/95",
                initial: "hidden",
                animate: "visible",
                variants: Le,
                children: [
                  e.jsx(F.h2, {
                    className:
                      "font-bold text-lg drop-shadow-md bg-gradient-to-r bg-clip-text from-orange-200 via-yellow-200 to-rose-200 text-transparent",
                    variants: ce,
                    initial: { scale: 0.8, opacity: 0 },
                    animate: {
                      scale: 1,
                      opacity: 1,
                      rotate: [0, -2, 2, 0],
                      color: ["#fbbf24", "#ef4444", "#f59e0b", "#fbbf24"],
                    },
                    children: t.name,
                  }),
                  e.jsx(F.p, {
                    className:
                      "text-sm bg-gradient-to-r bg-clip-text from-orange-100 via-rose-100 to-yellow-100 text-transparent",
                    variants: ce,
                    initial: { y: 10, opacity: 0 },
                    whileHover: {
                      scale: 1.02,
                      color: "#f59e0b",
                      textShadow: "0 0 10px rgba(245, 158, 11, 0.7)",
                    },
                    children: t.number,
                  }),
                ],
              }),
              e.jsxs(F.button, {
                onClick: () => a(!0),
                className: `${qe} relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 shadow-xl hover:border-orange-300/50 transition-all duration-300`,
                whileHover: {
                  scale: 1.05,
                  rotate: 5,
                  boxShadow: "0 0 20px rgba(255, 165, 0, 0.5)",
                },
                whileTap: { scale: 0.95 },
                children: [
                  e.jsx(F.img, {
                    src: t.image,
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
                  e.jsx(F.div, {
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
      e.jsx(Ft, {
        children:
          r &&
          e.jsxs(e.Fragment, {
            children: [
              e.jsx(F.div, {
                className:
                  "fixed inset-0 bg-gradient-to-br from-black/70 via-rose-900/50 to-orange-900/50 backdrop-blur-lg z-40",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                onClick: () => a(!1),
              }),
              e.jsxs(F.div, {
                className: `${Zt} fixed z-50 top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl overflow-hidden`,
                initial: { scale: 0.7, opacity: 0, rotate: -10 },
                animate: { scale: 1, opacity: 1, rotate: 0 },
                exit: { scale: 0.7, opacity: 0, rotate: 10 },
                transition: { type: "spring", duration: 0.5, bounce: 0.3 },
                children: [
                  e.jsxs("div", {
                    className:
                      "relative bg-gradient-to-r from-orange-600/90 via-red-500/90 to-rose-500/90 p-6 text-center backdrop-blur-sm overflow-hidden",
                    children: [
                      e.jsx(F.div, {
                        className:
                          "absolute inset-0 bg-gradient-to-r from-orange-400/20 to-rose-400/20",
                        animate: { x: ["-100%", "100%", "-100%"] },
                        transition: { duration: 4, repeat: 1 / 0 },
                      }),
                      e.jsx(F.button, {
                        onClick: () => a(!1),
                        className:
                          "absolute top-4 right-4 text-white/90 hover:text-orange-200 transition-all duration-200 backdrop-blur-sm rounded-full p-1 hover:bg-white/10",
                        whileHover: { scale: 1.1, rotate: 90 },
                        whileTap: { scale: 0.9 },
                        children: e.jsx($e, { size: 22 }),
                      }),
                      e.jsx(F.img, {
                        src: t.image,
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
                      e.jsx(F.h2, {
                        className:
                          "text-2xl font-black text-white/95 relative z-10",
                        initial: { y: 10, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        transition: { delay: 0.3, duration: 0.4 },
                        children: t.name,
                      }),
                      e.jsx(F.p, {
                        className: "text-orange-100/90 font-bold relative z-10",
                        initial: { y: 10, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        transition: { delay: 0.4, duration: 0.4 },
                        children: t != null && t.admin ? "Admin" : "User",
                      }),
                    ],
                  }),
                  e.jsxs(F.div, {
                    className: "p-6 space-y-4 text-gray-100/95 relative z-10",
                    initial: "hidden",
                    animate: "visible",
                    variants: Le,
                    exit: "hidden",
                    children: [
                      e.jsxs(F.div, {
                        className: "space-y-3",
                        variants: Le,
                        children: [
                          e.jsxs(F.div, {
                            className:
                              "font-bold flex items-center justify-between gap-3 p-3 rounded-xl bg-gradient-to-r from-orange-500/10 to-rose-500/10 border border-white/10 hover:from-orange-500/20 hover:to-rose-500/20 transition-all text-white/90",
                            variants: ce,
                            whileHover: { scale: 1.02, x: 5 },
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-orange-300 flex items-center gap-2 text-lg",
                                children: "📞",
                              }),
                              e.jsx("span", {
                                className:
                                  "font-bold text-right flex-1 text-white",
                                children: t.number,
                              }),
                            ],
                          }),
                          e.jsxs(F.div, {
                            className:
                              "font-bold flex items-center justify-between gap-3 p-3 rounded-xl bg-gradient-to-r from-orange-500/10 to-rose-500/10 border border-white/10 hover:from-orange-500/20 hover:to-rose-500/20 transition-all text-white/90",
                            variants: ce,
                            whileHover: { scale: 1.02, x: 5 },
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-orange-300 flex items-center gap-2 text-lg",
                                children: "📧",
                              }),
                              e.jsx("span", {
                                className:
                                  "font-bold text-right flex-1 text-white",
                                children: t.email,
                              }),
                            ],
                          }),
                          e.jsxs(F.div, {
                            className:
                              "font-bold flex items-center justify-between gap-3 p-3 rounded-xl bg-gradient-to-r from-orange-500/10 to-rose-500/10 border border-white/10 hover:from-orange-500/20 hover:to-rose-500/20 transition-all text-white/90",
                            variants: ce,
                            whileHover: { scale: 1.02, x: 5 },
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-orange-300 flex items-center gap-2 text-lg",
                                children: "🆔",
                              }),
                              e.jsx("span", {
                                className:
                                  "font-mono bg-gradient-to-r from-orange-100/50 to-rose-100/50 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-bold text-black",
                                children: t.empNo,
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx(F.div, {
                        variants: ce,
                        children: e.jsxs(F.button, {
                          onClick: i,
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
                            e.jsx(F.div, {
                              className:
                                "absolute inset-0 bg-gradient-to-r from-red-400/20 to-rose-400/20",
                              animate: { x: ["-100%", "100%", "-100%"] },
                              transition: { duration: 2, repeat: 1 / 0 },
                            }),
                            e.jsx(gt, { size: 18, className: "relative z-10" }),
                            e.jsx("span", {
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
function ta() {
  const { user: t } = pe(),
    r = ft(),
    m = [
      {
        id: 1,
        name: "Calendar",
        icon: et,
        color: "from-blue-600 via-cyan-500 to-blue-400",
        hoverColor: "hover:from-blue-700 hover:via-cyan-600 hover:to-blue-500",
        path: "/calendar",
        onlyAdmin: !1,
      },
      {
        id: 2,
        name: "Reports",
        icon: vt,
        color: "from-purple-600 via-pink-500 to-rose-400",
        hoverColor:
          "hover:from-purple-700 hover:via-pink-600 hover:to-rose-500",
        path: "/reports",
        onlyAdmin: !1,
      },
      {
        id: 3,
        name: "Booking",
        icon: yt,
        color: "from-orange-600 via-amber-500 to-yellow-400",
        hoverColor:
          "hover:from-orange-700 hover:via-amber-600 hover:to-yellow-500",
        path: "/booking",
        onlyAdmin: !0,
      },
      {
        id: 4,
        name: "Manage",
        icon: wt,
        color: "from-green-600 via-emerald-500 to-teal-400",
        hoverColor:
          "hover:from-green-700 hover:via-emerald-600 hover:to-teal-500",
        path: "/manage",
        onlyAdmin: !0,
      },
      {
        id: 5,
        name: "Users",
        icon: jt,
        color: "from-red-600 via-rose-500 to-pink-400",
        hoverColor: "hover:from-red-700 hover:via-rose-600 hover:to-pink-500",
        path: "/users",
        onlyAdmin: !0,
      },
    ].filter((i) => !!((i.onlyAdmin && t != null && t.admin) || !i.onlyAdmin)),
    x = () =>
      e.jsx("div", {
        className: "group cursor-pointer transform transition-all duration-500",
        children: e.jsx("div", {
          className:
            "relative h-56 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-2xl overflow-hidden border-2 border-white/10 animate-pulse",
          children: e.jsxs("div", {
            className: "relative h-full p-6 flex flex-col justify-between",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("div", {
                    className:
                      "p-3 bg-slate-700 rounded-xl w-12 h-12 mb-4 animate-pulse",
                  }),
                  e.jsx("div", {
                    className: "h-8 bg-slate-700 rounded w-3/4 animate-pulse",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "w-full h-10 bg-slate-700 rounded-lg animate-pulse",
              }),
            ],
          }),
        }),
      });
  return t
    ? e.jsxs("div", {
        className: "min-h-screen bg-slate-950",
        children: [
          e.jsx(Oe, { user: t }),
          e.jsxs("div", {
            className: "relative min-h-[82vh] overflow-hidden",
            children: [
              e.jsxs("div", {
                className: "absolute inset-0 z-0",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-950",
                  }),
                  e.jsx("img", {
                    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                    alt: "Food background",
                    className:
                      "w-full h-full object-cover opacity-10 mix-blend-overlay",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 py-12 relative z-10",
                children: [
                  e.jsxs("h1", {
                    className:
                      "text-5xl hidden md:block md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-pink-400 mb-3 drop-shadow-lg",
                    children: [
                      "Welcome Back, ",
                      t == null ? void 0 : t.name,
                      "!",
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "max-w-7xl hidden md:block mx-auto px-6 py-12 relative z-10",
                  }),
                  e.jsx("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6",
                    children: m.map((i) => {
                      const b = i.icon;
                      return e.jsx(
                        "div",
                        {
                          className:
                            "group cursor-pointer transform transition-all duration-500 hover:-translate-y-2",
                          children: e.jsx("div", {
                            className: `relative h-56 bg-gradient-to-br ${i.color} rounded-2xl shadow-2xl overflow-hidden ${i.hoverColor} transition-all duration-500 transform hover:scale-105 border-2 border-white/10`,
                            children: e.jsxs("div", {
                              className:
                                "relative h-full p-6 flex flex-col justify-between text-white",
                              children: [
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "p-3 bg-white/20 backdrop-blur-md rounded-xl w-fit mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110",
                                      children: e.jsx(b, {
                                        size: 32,
                                        className:
                                          "group-hover:rotate-12 transition-transform duration-300",
                                      }),
                                    }),
                                    e.jsx("h3", {
                                      className:
                                        "text-2xl font-bold drop-shadow-md",
                                      children: i.name,
                                    }),
                                  ],
                                }),
                                e.jsx("button", {
                                  onClick: () => r(i.path),
                                  className:
                                    "w-full bg-white/20 backdrop-blur-md hover:bg-white/40 py-2 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 border border-white/30 hover:border-white/60 text-white shadow-lg",
                                  children: "Open",
                                }),
                              ],
                            }),
                          }),
                        },
                        i.id,
                      );
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    : e.jsxs("div", {
        className: "min-h-screen bg-slate-950",
        children: [
          e.jsx(Oe, { user: t }),
          e.jsxs("div", {
            className: "relative min-h-[82vh] overflow-hidden",
            children: [
              e.jsxs("div", {
                className: "absolute inset-0 z-0",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-950",
                  }),
                  e.jsx("img", {
                    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                    alt: "Food background",
                    className:
                      "w-full h-full object-cover opacity-10 mix-blend-overlay",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 py-12 relative z-10",
                children: [
                  e.jsx("div", {
                    className:
                      "h-16 bg-slate-800 rounded-lg w-3/4 mb-8 animate-pulse hidden md:block",
                  }),
                  e.jsx("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6",
                    children: [1, 2, 3, 4, 5].map((i) => e.jsx(x, {}, i)),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
}
function aa() {
  const [t, r] = o.useState(null);
  return e.jsxs("div", {
    className:
      "w-full min-h-screen bg-slate-950 relative overflow-hidden flex flex-col",
    children: [
      e.jsxs("div", {
        className: "absolute inset-0 z-0",
        children: [
          e.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-br from-slate-950 via-orange-950/30 to-red-950/20",
          }),
          e.jsx("div", {
            className:
              "absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-orange-500 via-red-500 to-transparent rounded-full blur-3xl opacity-20 animate-pulse",
          }),
          e.jsx("div", {
            className:
              "absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-rose-500 via-orange-500 to-transparent rounded-full blur-3xl opacity-20 animate-pulse",
            style: { animationDelay: "1s" },
          }),
          e.jsx("div", {
            className:
              "absolute top-1/2 left-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-pink-500 to-transparent rounded-full blur-3xl opacity-15 animate-bounce",
            style: { animationDelay: "0.5s" },
          }),
        ],
      }),
      e.jsx("div", {
        className:
          "relative z-8 flex-1 flex items-center justify-center px-2 sm:px-4 py-4",
        children: e.jsxs("div", {
          className: "text-center max-w-md sm:max-w-2xl md:max-w-3xl w-full",
          children: [
            e.jsxs("div", {
              className:
                "mb-4 relative h-32 sm:h-40 md:h-48 flex items-center justify-center",
              children: [
                e.jsx("div", {
                  className:
                    "absolute w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-orange-500 to-rose-500 rounded-full blur-3xl opacity-30 animate-pulse",
                }),
                e.jsx("h1", {
                  className:
                    "text-6xl sm:text-8xl md:text-9xl lg:text-[140px] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-pink-400 drop-shadow-2xl animate-bounce relative z-10",
                  style: { animationDelay: "0s" },
                  children: "404",
                }),
              ],
            }),
            e.jsx("h2", {
              className:
                "text-2xl sm:text-3xl md:text-5xl font-black text-white mb-3 drop-shadow-lg animate-fade-in",
              children: "Oops! Lost in the Kitchen",
            }),
            e.jsx("p", {
              className:
                "text-base sm:text-lg md:text-xl text-orange-200 mb-4 font-semibold animate-fade-in px-2",
              style: { animationDelay: "0.1s" },
              children:
                "The page you're looking for has been served to the wrong table!",
            }),
            e.jsxs("div", {
              className:
                "mb-1 flex justify-center gap-4 sm:gap-6 md:gap-10 flex-wrap px-2",
              children: [
                e.jsx("div", {
                  className: "animate-float-slow",
                  children: e.jsx(Nt, {
                    size: 28,
                    "sm:size": 32,
                    "md:size": 40,
                    className: "text-orange-400",
                  }),
                }),
                e.jsx("div", {
                  className: "animate-float-slow",
                  style: { animationDelay: "0.5s" },
                  children: e.jsx(kt, {
                    size: 28,
                    "sm:size": 32,
                    "md:size": 40,
                    className: "text-rose-400",
                  }),
                }),
                e.jsx("div", {
                  className: "animate-float-slow",
                  style: { animationDelay: "1s" },
                  children: e.jsx(St, {
                    size: 28,
                    "sm:size": 32,
                    "md:size": 40,
                    className: "text-orange-300",
                  }),
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "bg-gradient-to-r from-orange-500/15 via-rose-500/15 to-pink-500/15 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-6 sm:mb-10 border border-orange-300/30 shadow-2xl animate-fade-in mx-2 sm:mx-0",
              style: { animationDelay: "0.2s" },
              children: e.jsx("p", {
                className:
                  "text-orange-100 text-sm sm:text-base md:text-lg leading-relaxed",
                children:
                  "The page you're searching for has disappeared like a perfectly cooked soufflé! Let's help you find your way back to delicious content.",
              }),
            }),
            e.jsxs("div", {
              className:
                "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-10 animate-fade-in px-2",
              children: [
                e.jsxs("button", {
                  onMouseEnter: () => r("back"),
                  onMouseLeave: () => r(null),
                  onClick: () => window.history.back(),
                  className: `flex items-center justify-center gap-2 px-5 sm:px-7 py-3 rounded-2xl font-bold transition-all duration-300 border-2 transform text-sm sm:text-base ${t === "back" ? "bg-white/30 backdrop-blur-md border-white scale-110 text-white shadow-2xl" : "bg-white/10 backdrop-blur-md border-white/40 text-orange-200 hover:text-white"}`,
                  children: [e.jsx(Be, { size: 18, "sm:size": 20 }), "Go Back"],
                }),
                e.jsxs("button", {
                  onMouseEnter: () => r("home"),
                  onMouseLeave: () => r(null),
                  onClick: () => (window.location.href = "/"),
                  className: `flex items-center justify-center gap-2 px-5 sm:px-7 py-3 rounded-2xl font-bold transition-all duration-300 border-2 transform text-sm sm:text-base ${t === "home" ? "bg-gradient-to-r from-orange-500 to-rose-500 border-orange-200 text-white scale-110 shadow-2xl" : "bg-gradient-to-r from-orange-600/40 to-rose-600/40 backdrop-blur-md border-orange-400/60 text-orange-200 hover:text-white"}`,
                  children: [
                    e.jsx(Ct, { size: 18, "sm:size": 20 }),
                    "Back Home",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsxs("div", {
        className: "fixed inset-0 pointer-events-none z-0",
        children: [
          e.jsx("div", {
            className:
              "absolute top-16 sm:top-32 left-4 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 bg-orange-400/20 rounded-full animate-float-slow",
          }),
          e.jsx("div", {
            className:
              "absolute bottom-16 sm:bottom-32 right-4 sm:right-8 w-16 h-16 sm:w-24 sm:h-24 bg-rose-400/20 rounded-full animate-float-slow",
            style: { animationDelay: "1s" },
          }),
          e.jsx("div", {
            className:
              "absolute top-1/3 right-1/4 w-10 h-10 sm:w-12 sm:h-12 bg-pink-400/20 rounded-full animate-float-slow",
            style: { animationDelay: "0.5s" },
          }),
        ],
      }),
      e.jsx("style", {
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
const ge = "https://via.placeholder.com/64x64/4f46e5/ffffff?text=U",
  ra = () =>
    e.jsx(e.Fragment, {
      children: e.jsxs("div", {
        className:
          "bg-gradient-to-br from-slate-800/60 via-indigo-900/40 to-purple-900/50 rounded-2xl p-6 border border-cyan-500/20 animate-pulse hover:animate-none transition-all duration-400 hover:scale-105 hover:shadow-2xl hover:border-violet-400/30",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-4 mb-4",
            children: [
              e.jsx("div", {
                className:
                  "w-16 h-16 rounded-full bg-gradient-to-br from-violet-700/80 to-cyan-600/60 animate-spin-slow",
              }),
              e.jsxs("div", {
                className: "flex-1 space-y-2",
                children: [
                  e.jsx("div", {
                    className:
                      "h-4 bg-gradient-to-r from-emerald-700/70 to-lime-600/60 rounded w-24 animate-pulse-delay-100",
                  }),
                  e.jsx("div", {
                    className:
                      "h-3 bg-gradient-to-r from-violet-700/70 to-cyan-600/60 rounded w-32 animate-pulse-delay-200",
                  }),
                  e.jsx("div", {
                    className:
                      "h-3 bg-gradient-to-r from-emerald-700/70 to-lime-600/60 rounded w-28 animate-pulse-delay-300",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-2 mb-4 pb-4 border-b border-white/5",
            children: [
              e.jsx("div", {
                className:
                  "h-3 bg-gradient-to-r from-violet-700/70 to-cyan-600/60 rounded animate-pulse-delay-400",
              }),
              e.jsx("div", {
                className:
                  "h-3 bg-gradient-to-r from-emerald-700/70 to-lime-600/60 rounded animate-pulse-delay-500",
              }),
              e.jsx("div", {
                className:
                  "h-3 bg-gradient-to-r from-violet-700/70 to-cyan-600/60 rounded animate-pulse-delay-600",
              }),
              e.jsx("div", {
                className:
                  "h-3 bg-gradient-to-r from-emerald-700/70 to-lime-600/60 rounded animate-pulse-delay-700",
              }),
              e.jsx("div", {
                className:
                  "h-3 bg-gradient-to-r from-violet-700/70 to-cyan-600/60 rounded w-3/4 animate-pulse-delay-800",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex gap-2",
            children: [
              e.jsx("div", {
                className:
                  "flex-1 h-8 bg-gradient-to-r from-emerald-700/70 to-lime-600/60 rounded-lg animate-pulse-delay-900",
              }),
              e.jsx("div", {
                className:
                  "flex-1 h-8 bg-gradient-to-r from-violet-700/70 to-cyan-600/60 rounded-lg animate-pulse-delay-1000",
              }),
            ],
          }),
        ],
      }),
    }),
  sa = ({ message: t, type: r, onClose: a }) => {
    o.useEffect(() => {
      const i = setTimeout(a, 3500);
      return () => clearTimeout(i);
    }, [a]);
    const m =
        r === "success"
          ? "bg-gradient-to-r from-emerald-600 via-green-500 to-lime-500"
          : r === "error"
            ? "bg-gradient-to-r from-rose-600 via-red-500 to-orange-500"
            : "bg-gradient-to-r from-violet-600 via-cyan-500 to-blue-500",
      x = r === "success" ? tt : xe;
    return e.jsxs("div", {
      className: `fixed bottom-8 left-1/2 -translate-x-1/2 ${m} text-white px-8 py-5 rounded-2xl shadow-2xl flex items-center gap-4 z-[100] animate-slide-in-up animate-pulse hover:animate-none transition-all duration-400 hover:scale-105 transform-gpu`,
      children: [
        e.jsx(x, { className: "w-6 h-6 animate-bounce" }),
        e.jsx("span", { className: "font-bold text-base", children: t }),
        e.jsx("button", {
          onClick: a,
          className:
            "ml-auto hover:scale-125 transition-transform duration-200",
          children: e.jsx($e, { className: "w-5 h-5" }),
        }),
      ],
    });
  };
function oa() {
  const { user: t } = pe(),
    [r, a] = o.useState([]),
    [m, x] = o.useState(!0),
    [i, b] = o.useState(null),
    [p, c] = o.useState(null),
    [v, A] = o.useState(!1),
    [E, T] = o.useState(null),
    [S, D] = o.useState(!1),
    [h, w] = o.useState({
      phone: "",
      email: "",
      name: "",
      empNo: "PTPL",
      amount: 20,
      isIphone: !1,
      status: !0,
      lastActive: new Date().toISOString(),
    }),
    [f, j] = o.useState({}),
    [U, N] = o.useState(!1),
    [u, M] = o.useState(""),
    [L, B] = o.useState("all"),
    [k, g] = o.useState(null),
    [C, s] = o.useState(null);
  o.useEffect(() => {
    if (!(t != null && t.admin))
      return (window.location.href = "https://foodease.ajayos.in/");
    P();
  }, []);
  const P = async () => {
      try {
        x(!0), b(null);
        const {
          error: d,
          data: I = [],
          message: ee,
        } = await re.get("/foodease/users", null, {
          headers: { "Content-Type": "application/json" },
        });
        d ? (b(ee), y(ee, "error")) : a(I);
      } catch (d) {
        b(d.message), y("Failed to load users", "error");
      } finally {
        x(!1);
      }
    },
    y = (d, I = "success") => {
      s({ message: d, type: I });
    },
    O = o.useMemo(
      () =>
        r.filter((d) => {
          var $, _, z, n, J;
          const I = u.toLowerCase(),
            ee =
              !u ||
              ((_ = ($ = d.name) == null ? void 0 : $.toLowerCase()) == null
                ? void 0
                : _.includes(I)) ||
              ((z = d.number) == null ? void 0 : z.includes(u)) ||
              ((J = (n = d.id) == null ? void 0 : n.toLowerCase()) == null
                ? void 0
                : J.includes(I)),
            l =
              L === "all" ||
              (L === "iphone" && d.isIphone) ||
              (L === "android" && !d.isIphone);
          return ee && l;
        }),
      [r, u, L],
    ),
    te = () => {
      const d = {},
        I = h.empNo;
      return (
        (!I || !/^PTPL\d{0,3}$/.test(I)) &&
          (d.empNo = `Prudent ID must start with 'PTPL' followed by up to 3 digits (current: ${I})`),
        (!h.amount || h.amount < 0) &&
          (d.amount = "Amount must be a valid positive number"),
        j(d),
        Object.keys(d).length === 0
      );
    },
    se = async (d) => {
      g(null);
      try {
        D(!0);
        const { error: I } = await re.delete(`/foodease/users/${d}`, {
          headers: { "Content-Type": "application/json" },
        });
        if (I) throw new Error(I);
        await P(), y("User deleted successfully", "success");
      } catch (I) {
        console.log(I, "fail"), y("Failed to delete user", "error");
      } finally {
        D(!1);
      }
    },
    le = () => {
      T(null),
        w({
          phone: "",
          email: "",
          name: "",
          empNo: "PTPL",
          amount: 20,
          isIphone: !1,
          status: !0,
          lastActive: new Date().toISOString(),
        }),
        j({}),
        A(!0);
    },
    ne = (d) => {
      T(d), w(Q(X({}, d), { empNo: d.empNo || d.id || "PTPL" })), j({}), A(!0);
    },
    G = async () => {
      if (te())
        try {
          D(!0);
          const d = X({}, h),
            { error: I, message: ee } = await re[
              E != null && E.id ? "put" : "post"
            ](`/foodease/users${E != null && E.id ? `/${E.id}` : ""}`, d);
          I
            ? y(ee, "error")
            : y(
                `User ${E != null && E.id ? "updated" : "created"} successfully`,
                "success",
              ),
            await P(),
            A(!1),
            T(null),
            w({
              phone: "",
              email: "",
              name: "",
              empNo: "PTPL",
              amount: 20,
              isIphone: !1,
              status: !0,
              lastActive: new Date().toISOString(),
            });
        } catch (d) {
          console.log(d, "fail"), y("Failed to save user", "error");
        } finally {
          D(!1);
        }
    },
    W = () => {
      A(!1),
        T(null),
        w({
          phone: "",
          email: "",
          name: "",
          empNo: "PTPL",
          amount: 20,
          isIphone: !1,
          status: !0,
          lastActive: new Date().toISOString(),
        }),
        j({});
    },
    ue = h.empNo.substring(4) || "",
    oe = (d) =>
      new Date(d).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  return e.jsxs("div", {
    className:
      "min-h-screen bg-gradient-to-br from-indigo-950 via-violet-950 to-rose-950 relative overflow-hidden",
    children: [
      e.jsxs("div", {
        className: "absolute inset-0 opacity-15",
        children: [
          e.jsx("div", {
            className:
              "absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse",
          }),
          e.jsx("div", {
            className:
              "absolute top-3/4 right-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse delay-1000",
          }),
          e.jsx("div", {
            className:
              "absolute bottom-1/4 left-3/4 w-64 h-64 bg-lime-500/20 rounded-full blur-3xl animate-pulse delay-2000",
          }),
          e.jsx("div", {
            className:
              "absolute top-1/2 right-1/2 w-48 h-48 bg-emerald-400/15 rounded-full blur-2xl animate-ping delay-3000",
          }),
          e.jsx("div", {
            className:
              "absolute bottom-1/2 left-1/2 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl animate-pulse delay-1500",
          }),
        ],
      }),
      e.jsxs("div", {
        className:
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10",
        children: [
          e.jsxs("div", {
            className:
              "flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 sm:mb-12",
            children: [
              e.jsxs("div", {
                className: "group flex flex-col items-start",
                children: [
                  e.jsx("h1", {
                    className:
                      "text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-lime-400 transition-all duration-500 group-hover:scale-105 group-hover:from-violet-400 group-hover:via-cyan-400 group-hover:to-rose-400",
                    children: "Manage Users",
                  }),
                  e.jsx("p", {
                    className:
                      "text-gray-300 text-sm mt-2 group-hover:text-emerald-300 transition-colors duration-500",
                    children:
                      "Seamlessly manage and organize your system users with advanced filtering",
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto",
                children: [
                  e.jsxs("button", {
                    onClick: () => N(!0),
                    className:
                      "flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md text-white font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-white/10 hover:bg-violet-500/20 hover:border-violet-400/40 hover:shadow-lg hover:scale-105 transition-all duration-400 flex-1 sm:flex-none group",
                    children: [
                      e.jsx(Ne, {
                        className:
                          "w-4 h-4 group-hover:rotate-12 transition-transform duration-300",
                      }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Search",
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    onClick: le,
                    className:
                      "flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-lg hover:from-violet-600 hover:to-cyan-600 hover:shadow-2xl hover:scale-105 transition-all duration-400 flex-1 sm:flex-none group",
                    children: [
                      e.jsx(Dt, {
                        className:
                          "w-4 h-4 group-hover:scale-110 transition-transform duration-300",
                      }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Add User",
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    onClick: P,
                    className:
                      "flex items-center justify-center gap-2 bg-gradient-to-r from-lime-600 to-emerald-600 text-white font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-lg hover:from-orange-600 hover:to-lime-600 hover:shadow-2xl hover:scale-105 transition-all duration-400 flex-1 sm:flex-none group",
                    children: [
                      e.jsx(Ce, {
                        className:
                          "w-4 h-4 group-hover:rotate-180 transition-transform duration-300",
                      }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Refresh",
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    onClick: () => window.history.back(),
                    className:
                      "flex items-center justify-center gap-2 bg-gradient-to-r from-slate-600 to-gray-500 text-white font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-lg hover:from-violet-600 hover:to-slate-600 hover:shadow-2xl hover:scale-105 transition-all duration-400 flex-1 sm:flex-none group",
                    children: [
                      e.jsx(Be, {
                        className:
                          "w-4 h-4 group-hover:translate-x-[-2px] transition-transform duration-300",
                      }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Back",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          i &&
            e.jsxs("div", {
              className:
                "bg-rose-600/20 border border-rose-500/50 rounded-xl p-4 mb-6 text-rose-200 flex items-center gap-3 animate-bounce hover:animate-none transition-all duration-400 justify-center",
              children: [
                e.jsx(xe, { className: "w-5 h-5 flex-shrink-0" }),
                e.jsx("span", { children: i }),
              ],
            }),
          e.jsx("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 auto-rows-fr",
            children: m
              ? Array.from({ length: 8 }, (d, I) => e.jsx(ra, {}, I))
              : r.length > 0
                ? O.map((d) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "group relative bg-gradient-to-br from-indigo-800/60 via-violet-800/40 to-rose-900/50 rounded-2xl p-5 sm:p-6 border border-white/10 shadow-xl backdrop-blur-md hover:shadow-2xl hover:border-emerald-400/40 transition-all duration-600 cursor-pointer hover:scale-105 hover:-translate-y-2 overflow-hidden",
                        onClick: () => c(d),
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/30 to-violet-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-600 -skew-x-12 transform-gpu",
                          }),
                          e.jsxs("div", {
                            className:
                              "flex items-start gap-4 mb-4 relative z-10",
                            children: [
                              e.jsxs("div", {
                                className: "relative flex-shrink-0",
                                children: [
                                  e.jsx("img", {
                                    src: d.image,
                                    alt: d.name,
                                    className:
                                      "w-16 h-16 rounded-full object-cover border-2 border-cyan-500/50 group-hover:border-emerald-400/60 shadow-md transition-all duration-400 hover:rotate-6 hover:scale-110",
                                    onError: (I) => {
                                      I.target.src = ge;
                                    },
                                  }),
                                  e.jsx("div", {
                                    className: `absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-indigo-900 transition-all duration-400 ${d.status ? "bg-emerald-500 group-hover:scale-125 animate-pulse" : "bg-rose-500 group-hover:scale-125 animate-pulse"}`,
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "min-w-0 flex-1 space-y-1",
                                children: [
                                  e.jsx("h3", {
                                    className:
                                      "text-lg font-bold text-white group-hover:text-emerald-300 truncate transition-all duration-400",
                                    children: d.name,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-rose-200/80 text-sm truncate transition-colors duration-400 group-hover:text-rose-300",
                                    children: d.phone,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-gray-400 text-xs truncate transition-colors duration-400 group-hover:text-gray-200",
                                    children: d.email,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "space-y-2 mb-4 pb-4 border-b border-white/5 relative z-10",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between text-xs sm:text-sm",
                                children: [
                                  e.jsxs("span", {
                                    className:
                                      "text-gray-400 flex items-center gap-1",
                                    children: [
                                      e.jsx(Te, { className: "w-3 h-3" }),
                                      " ID:",
                                    ],
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "font-mono text-white text-xs bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-lime-500/20 px-2 py-1 rounded transition-all duration-400 group-hover:scale-105",
                                    children: d.id,
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between text-xs sm:text-sm",
                                children: [
                                  e.jsxs("span", {
                                    className:
                                      "text-gray-400 flex items-center gap-1",
                                    children: [
                                      e.jsx(ke, { className: "w-3 h-3" }),
                                      " Amount:",
                                    ],
                                  }),
                                  e.jsxs("span", {
                                    className:
                                      "text-lime-400 font-bold transition-all duration-400 group-hover:text-lime-300",
                                    children: ["₹", d.amount],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between text-xs sm:text-sm",
                                children: [
                                  e.jsxs("span", {
                                    className:
                                      "text-gray-400 flex items-center gap-1",
                                    children: [
                                      e.jsx(Ae, { className: "w-3 h-3" }),
                                      " Status:",
                                    ],
                                  }),
                                  e.jsx("span", {
                                    className: `font-medium transition-all duration-400 ${d.status ? "text-emerald-400 group-hover:scale-110" : "text-rose-400 group-hover:scale-110"}`,
                                    children: d.status
                                      ? "✅ Active"
                                      : "❌ Inactive",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between text-xs sm:text-sm",
                                children: [
                                  e.jsxs("span", {
                                    className:
                                      "text-gray-400 flex items-center gap-1",
                                    children: [
                                      e.jsx(be, { className: "w-3 h-3" }),
                                      " Device:",
                                    ],
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-white transition-all duration-400 group-hover:text-cyan-300",
                                    children: d.isIphone
                                      ? "🍎 iPhone"
                                      : "📱 Android",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between text-xs sm:text-sm",
                                children: [
                                  e.jsxs("span", {
                                    className:
                                      "text-gray-400 flex items-center gap-1",
                                    children: [
                                      e.jsx(fe, { className: "w-3 h-3" }),
                                      " Last Active:",
                                    ],
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-violet-400 text-xs font-medium transition-all duration-400 group-hover:text-violet-300",
                                    children: oe(d.lastActive),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex gap-2 relative z-10",
                            children: [
                              e.jsx("button", {
                                onClick: (I) => {
                                  I.stopPropagation(), ne(d);
                                },
                                className:
                                  "flex-1 bg-gradient-to-r from-violet-600/30 to-cyan-600/30 hover:from-violet-600/50 hover:to-cyan-600/50 border border-violet-500/40 hover:border-emerald-400/50 p-2.5 rounded-lg text-violet-300 hover:text-cyan-200 transition-all duration-400 font-medium text-sm group/edit hover:scale-105",
                                children: e.jsx(Fe, {
                                  className: "w-4 h-4 mx-auto",
                                }),
                              }),
                              e.jsx("button", {
                                onClick: (I) => {
                                  I.stopPropagation(), g(d.id);
                                },
                                className:
                                  "flex-1 bg-gradient-to-r from-rose-600/30 to-orange-600/30 hover:from-rose-600/50 hover:to-orange-600/50 border border-rose-500/40 hover:border-lime-400/50 p-2.5 rounded-lg text-rose-300 hover:text-orange-200 transition-all duration-400 font-medium text-sm group/delete hover:scale-105",
                                children: e.jsx($e, {
                                  className: "w-4 h-4 mx-auto",
                                }),
                              }),
                            ],
                          }),
                        ],
                      },
                      d.id,
                    ),
                  )
                : e.jsxs("div", {
                    className:
                      "col-span-full text-center py-16 relative z-10 flex flex-col items-center justify-center",
                    children: [
                      e.jsx(Fe, {
                        className: "w-16 h-16 text-gray-400 mb-4 animate-pulse",
                      }),
                      e.jsx("p", {
                        className:
                          "text-white text-lg font-semibold animate-pulse",
                        children: "No users found",
                      }),
                      e.jsx("p", {
                        className: "text-gray-400 mt-2",
                        children: "Click the ➕ button to add your first user",
                      }),
                    ],
                  }),
          }),
        ],
      }),
      p &&
        e.jsxs(e.Fragment, {
          children: [
            e.jsx("div", {
              className:
                "fixed inset-0 bg-black/70 backdrop-blur-md z-40 transition-all duration-500 animate-fade-in",
              onClick: () => c(null),
            }),
            e.jsxs("div", {
              className:
                "fixed z-50 top-1/2 left-1/2 w-[95vw] max-w-lg -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-indigo-800 via-violet-800 to-rose-900 rounded-3xl shadow-2xl border border-emerald-500/30 overflow-hidden animate-slide-in-up transform-gpu",
              children: [
                e.jsxs("div", {
                  className:
                    "bg-gradient-to-r from-cyan-600 via-emerald-500 to-lime-500 p-6 text-center relative",
                  children: [
                    e.jsx("button", {
                      onClick: () => c(null),
                      className:
                        "absolute top-4 right-4 text-white hover:scale-125 transition-all duration-300 hover:rotate-90 text-2xl",
                      children: "✕",
                    }),
                    e.jsx("img", {
                      src: p.image || ge,
                      alt: "Avatar",
                      className:
                        "w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-xl mb-4 hover:scale-110 transition-all duration-400",
                      onError: (d) => {
                        d.target.src = ge;
                      },
                    }),
                    e.jsx("h2", {
                      className:
                        "text-2xl font-bold text-white transition-all duration-400 hover:text-emerald-200",
                      children: p.name,
                    }),
                    e.jsxs("p", {
                      className:
                        "text-rose-100 text-sm mt-1 hover:text-rose-200 transition-colors duration-400 flex items-center justify-center gap-2",
                      children: [
                        e.jsx($t, { className: "w-4 h-4" }),
                        " ",
                        p.phone,
                      ],
                    }),
                    e.jsxs("p", {
                      className:
                        "text-rose-100 text-xs hover:text-rose-200 transition-colors duration-400 flex items-center justify-center gap-2",
                      children: [
                        e.jsx(Et, { className: "w-4 h-4" }),
                        " ",
                        p.email,
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "p-6 text-white space-y-4 max-h-96 overflow-y-auto",
                  children: [
                    e.jsxs("div", {
                      className:
                        "bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-emerald-500/10 transition-all duration-400",
                      children: [
                        e.jsxs("p", {
                          className:
                            "text-gray-400 text-xs mb-1 flex items-center gap-1",
                          children: [
                            e.jsx(Te, { className: "w-4 h-4" }),
                            " ID",
                          ],
                        }),
                        e.jsx("p", {
                          className:
                            "font-mono text-sm font-semibold hover:text-cyan-300 transition-colors duration-400",
                          children: p.id,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-lime-500/10 transition-all duration-400",
                      children: [
                        e.jsxs("p", {
                          className:
                            "text-gray-400 text-xs mb-1 flex items-center gap-1",
                          children: [
                            e.jsx(ke, { className: "w-4 h-4" }),
                            " Amount",
                          ],
                        }),
                        e.jsxs("p", {
                          className:
                            "text-lime-400 font-bold text-lg hover:text-lime-300 transition-colors duration-400",
                          children: ["₹", p.amount],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: `bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-400 ${p.status ? "border-emerald-500/30" : "border-rose-500/30"}`,
                      children: [
                        e.jsxs("p", {
                          className:
                            "text-gray-400 text-xs mb-1 flex items-center gap-1",
                          children: [
                            e.jsx(Ae, { className: "w-4 h-4" }),
                            " Status",
                          ],
                        }),
                        e.jsx("span", {
                          className: `font-medium transition-all duration-400 ${p.status ? "text-emerald-400 hover:scale-110" : "text-rose-400 hover:scale-110"}`,
                          children: p.status ? "✅ Active" : "❌ Inactive",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-violet-500/10 transition-all duration-400",
                      children: [
                        e.jsxs("p", {
                          className:
                            "text-gray-400 text-xs mb-1 flex items-center gap-1",
                          children: [
                            e.jsx(be, { className: "w-4 h-4" }),
                            " Device",
                          ],
                        }),
                        e.jsx("span", {
                          className:
                            "font-medium hover:text-emerald-300 transition-colors duration-400",
                          children: p.isIphone ? "🍎 iPhone" : "📱 Android",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-cyan-500/10 transition-all duration-400",
                      children: [
                        e.jsxs("p", {
                          className:
                            "text-gray-400 text-xs mb-1 flex items-center gap-1",
                          children: [
                            e.jsx(fe, { className: "w-4 h-4" }),
                            " Last Active",
                          ],
                        }),
                        e.jsx("p", {
                          className:
                            "text-violet-400 font-medium text-sm hover:text-violet-300 transition-colors duration-400",
                          children: oe(p.lastActive),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      v &&
        e.jsxs(e.Fragment, {
          children: [
            e.jsx("div", {
              className:
                "fixed inset-0 bg-black/70 backdrop-blur-md z-40 transition-all duration-500 animate-fade-in",
              onClick: W,
            }),
            e.jsxs("div", {
              className:
                "fixed z-50 top-1/2 left-1/2 w-[95vw] max-w-lg -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-indigo-800 via-violet-800 to-rose-900 rounded-3xl shadow-2xl border-2 border-cyan-500/40 overflow-hidden max-h-[90vh] flex flex-col animate-slide-in-up transform-gpu",
              children: [
                e.jsxs("div", {
                  className:
                    "bg-gradient-to-r from-cyan-600 via-emerald-500 to-lime-500 p-6 text-center flex-shrink-0",
                  children: [
                    e.jsx("h2", {
                      className:
                        "text-2xl font-bold text-white hover:text-violet-200 transition-colors duration-400",
                      children: E ? "Edit User" : "Add New User",
                    }),
                    e.jsx("p", {
                      className:
                        "text-rose-100 text-sm mt-1 hover:text-rose-200 transition-colors duration-400",
                      children: E
                        ? `Updating: ${E.name}`
                        : "Enter details below – Name, Phone, Email auto-generated from Prudent ID",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "p-6 space-y-4 text-white overflow-y-auto flex-1",
                  children: [
                    e.jsxs("div", {
                      className: "group",
                      children: [
                        e.jsxs("label", {
                          className:
                            "block text-xs font-semibold text-cyan-300 mb-2 group-hover:text-emerald-200 transition-colors duration-400 flex items-center gap-1",
                          children: [
                            e.jsx(Te, { className: "w-4 h-4" }),
                            " Prudent ID Suffix (0-3 digits)",
                          ],
                        }),
                        e.jsx("input", {
                          type: "text",
                          placeholder: "e.g., 001",
                          value: ue,
                          onChange: (d) =>
                            w(
                              Q(X({}, h), {
                                empNo: `PTPL${d.target.value.replace(/\D/g, "").slice(0, 3)}`,
                              }),
                            ),
                          className: `w-full p-3 rounded-lg bg-gradient-to-r from-slate-700/60 to-violet-800/50 border-2 text-white placeholder-gray-500 focus:ring-2 transition-all duration-400 outline-none hover:border-lime-400/50 hover:shadow-md ${f.empNo ? "border-rose-500 focus:ring-rose-500/50" : "border-cyan-500/30 focus:border-emerald-400 focus:ring-emerald-500/50"}`,
                        }),
                        e.jsxs("p", {
                          className:
                            "text-xs text-gray-500 mt-1 hover:text-gray-300 transition-colors duration-400 flex items-center gap-1",
                          children: [
                            e.jsx("span", { children: "Full ID:" }),
                            " ",
                            e.jsx("span", {
                              className: "font-mono text-emerald-300",
                              children: h.empNo,
                            }),
                          ],
                        }),
                        f.empNo &&
                          e.jsxs("p", {
                            className:
                              "text-rose-400 text-xs mt-1 animate-pulse flex items-center gap-1",
                            children: [
                              e.jsx(xe, { className: "w-4 h-4" }),
                              " ",
                              f.empNo,
                            ],
                          }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "group",
                      children: [
                        e.jsxs("label", {
                          className:
                            "block text-xs font-semibold text-cyan-300 mb-2 group-hover:text-emerald-200 transition-colors duration-400 flex items-center gap-1",
                          children: [
                            e.jsx(ke, { className: "w-4 h-4" }),
                            " Amount (₹)",
                          ],
                        }),
                        e.jsx("input", {
                          type: "number",
                          placeholder: "e.g., 20",
                          value: h.amount,
                          onChange: (d) =>
                            w(
                              Q(X({}, h), {
                                amount: Math.max(
                                  0,
                                  parseInt(d.target.value) || 0,
                                ),
                              }),
                            ),
                          min: "0",
                          className: `w-full p-3 rounded-lg bg-gradient-to-r from-slate-700/60 to-violet-800/50 border-2 text-white placeholder-gray-500 focus:ring-2 transition-all duration-400 outline-none hover:border-lime-400/50 hover:shadow-md ${f.amount ? "border-rose-500 focus:ring-rose-500/50" : "border-lime-500/30 focus:border-lime-400 focus:ring-lime-500/50"}`,
                        }),
                        f.amount &&
                          e.jsxs("p", {
                            className:
                              "text-rose-400 text-xs mt-1 animate-pulse flex items-center gap-1",
                            children: [
                              e.jsx(xe, { className: "w-4 h-4" }),
                              " ",
                              f.amount,
                            ],
                          }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        e.jsxs("label", {
                          className:
                            "block text-xs font-semibold text-cyan-300 mb-3 hover:text-emerald-200 transition-colors duration-400 flex items-center gap-1",
                          children: [
                            e.jsx(be, { className: "w-4 h-4" }),
                            " Device Type",
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex flex-col sm:flex-row gap-3",
                          children: [
                            e.jsxs("label", {
                              className: `flex items-center gap-3 p-4 rounded-xl cursor-pointer border-2 transition-all duration-400 font-medium hover:scale-105 hover:shadow-md w-full sm:w-auto ${h.isIphone ? "bg-violet-500/40 border-violet-400 bg-gradient-to-r from-violet-500/40 to-cyan-500/40" : "bg-white/5 border-white/20 hover:border-emerald-400/30 hover:bg-emerald-500/10"}`,
                              children: [
                                e.jsx("input", {
                                  type: "radio",
                                  name: "device",
                                  checked: h.isIphone,
                                  onChange: () =>
                                    w(Q(X({}, h), { isIphone: !0 })),
                                  className:
                                    "w-5 h-5 cursor-pointer text-violet-500",
                                }),
                                e.jsx(He, { className: "w-5 h-5" }),
                                " iPhone",
                              ],
                            }),
                            e.jsxs("label", {
                              className: `flex items-center gap-3 p-4 rounded-xl cursor-pointer border-2 transition-all duration-400 font-medium hover:scale-105 hover:shadow-md w-full sm:w-auto ${h.isIphone ? "bg-white/5 border-white/20 hover:border-violet-400/30 hover:bg-violet-500/10" : "bg-emerald-500/40 border-emerald-400 bg-gradient-to-r from-emerald-500/40 to-lime-500/40"}`,
                              children: [
                                e.jsx("input", {
                                  type: "radio",
                                  name: "device",
                                  checked: !h.isIphone,
                                  onChange: () =>
                                    w(Q(X({}, h), { isIphone: !1 })),
                                  className:
                                    "w-5 h-5 cursor-pointer text-emerald-500",
                                }),
                                e.jsx(be, { className: "w-5 h-5" }),
                                " Android",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        e.jsxs("label", {
                          className:
                            "block text-xs font-semibold text-cyan-300 mb-3 hover:text-emerald-200 transition-colors duration-400 flex items-center gap-1",
                          children: [
                            e.jsx(Ae, { className: "w-4 h-4" }),
                            " Account Status",
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex flex-col sm:flex-row gap-3",
                          children: [
                            e.jsxs("label", {
                              className: `flex items-center gap-3 p-4 rounded-xl cursor-pointer border-2 transition-all duration-400 font-medium hover:scale-105 hover:shadow-md w-full sm:w-auto ${h.status ? "bg-emerald-500/40 border-emerald-400 bg-gradient-to-r from-emerald-500/40 to-lime-500/40" : "bg-white/5 border-white/20 hover:border-rose-400/30 hover:bg-rose-500/10"}`,
                              children: [
                                e.jsx("input", {
                                  type: "radio",
                                  name: "status",
                                  checked: h.status,
                                  onChange: () =>
                                    w(Q(X({}, h), { status: !0 })),
                                  className:
                                    "w-5 h-5 cursor-pointer text-emerald-500",
                                }),
                                e.jsx(tt, { className: "w-5 h-5" }),
                                " Active",
                              ],
                            }),
                            e.jsxs("label", {
                              className: `flex items-center gap-3 p-4 rounded-xl cursor-pointer border-2 transition-all duration-400 font-medium hover:scale-105 hover:shadow-md w-full sm:w-auto ${h.status ? "bg-white/5 border-white/20 hover:border-emerald-400/30 hover:bg-emerald-500/10" : "bg-rose-500/40 border-rose-400 bg-gradient-to-r from-rose-500/40 to-orange-500/40"}`,
                              children: [
                                e.jsx("input", {
                                  type: "radio",
                                  name: "status",
                                  checked: !h.status,
                                  onChange: () =>
                                    w(Q(X({}, h), { status: !1 })),
                                  className:
                                    "w-5 h-5 cursor-pointer text-rose-500",
                                }),
                                e.jsx(xe, { className: "w-5 h-5" }),
                                " Inactive",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "p-6 bg-gradient-to-r from-cyan-600 via-emerald-500 to-lime-500 flex gap-4 flex-shrink-0",
                  children: [
                    e.jsxs("button", {
                      onClick: G,
                      disabled: S,
                      className:
                        "flex-1 bg-white/20 hover:bg-white/40 disabled:bg-white/10 text-white font-bold px-6 py-3 rounded-xl transition-all duration-400 hover:scale-105 disabled:scale-100 flex items-center justify-center gap-2",
                      children: [
                        S
                          ? e.jsx(Ce, { className: "w-4 h-4 animate-spin" })
                          : null,
                        e.jsx("span", {
                          children: S
                            ? "Saving..."
                            : E
                              ? "Update User"
                              : "Add User",
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      onClick: W,
                      disabled: S,
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
      k &&
        e.jsxs(e.Fragment, {
          children: [
            e.jsx("div", {
              className:
                "fixed inset-0 bg-black/70 backdrop-blur-md z-40 transition-all duration-500 animate-fade-in",
              onClick: () => g(null),
            }),
            e.jsxs("div", {
              className:
                "fixed z-50 top-1/2 left-1/2 w-[95vw] max-w-sm -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-indigo-800 via-violet-800 to-rose-900 rounded-3xl shadow-2xl border border-rose-500/30 overflow-hidden animate-slide-in-up transform-gpu",
              children: [
                e.jsxs("div", {
                  className:
                    "bg-gradient-to-r from-rose-600 via-red-500 to-orange-500 p-6 text-center",
                  children: [
                    e.jsx(xe, {
                      className:
                        "w-12 h-12 text-white mx-auto mb-2 animate-bounce",
                    }),
                    e.jsx("h2", {
                      className: "text-2xl font-bold text-white",
                      children: "Confirm Delete",
                    }),
                    e.jsx("p", {
                      className: "text-rose-100 text-sm mt-2",
                      children:
                        "This action is irreversible. Are you absolutely sure?",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "p-6 text-white space-y-4",
                  children: e.jsxs("div", {
                    className: "flex gap-3",
                    children: [
                      e.jsx("button", {
                        onClick: () => g(null),
                        disabled: S,
                        className:
                          "flex-1 bg-white/10 hover:bg-white/30 disabled:bg-white/5 border border-white/20 text-white font-bold py-3 rounded-xl transition-all duration-400 hover:scale-105 disabled:scale-100",
                        children: "No, Keep It",
                      }),
                      e.jsx("button", {
                        onClick: () => se(k),
                        disabled: S,
                        className:
                          "flex-1 bg-rose-600 hover:bg-rose-700 disabled:bg-rose-600/60 text-white font-bold py-3 rounded-xl transition-all duration-400 hover:scale-105 disabled:scale-100 group",
                        children: S ? "Deleting..." : "Yes, Delete",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      U &&
        e.jsxs(e.Fragment, {
          children: [
            e.jsx("div", {
              className:
                "fixed inset-0 bg-gradient-to-br from-cyan-900/50 via-violet-900/40 to-rose-900/50 backdrop-blur-xl z-40 transition-all duration-500 animate-fade-in",
              onClick: () => N(!1),
            }),
            e.jsxs("div", {
              className:
                "fixed z-50 top-1/2 left-1/2 w-[95vw] sm:w-[90vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-indigo-950 via-cyan-950/30 to-rose-950/30 rounded-3xl shadow-2xl border border-white/10 overflow-hidden max-h-[85vh] flex flex-col animate-slide-in-up transform-gpu",
              children: [
                e.jsx("div", {
                  className:
                    "relative bg-gradient-to-r from-cyan-600 via-emerald-500 to-lime-500 px-2 py-8 flex-shrink-0",
                }),
                e.jsxs("div", {
                  className:
                    "p-6 overflow-y-auto flex-1 space-y-6 bg-gradient-to-b from-indigo-900/60 via-transparent to-rose-950/30",
                  children: [
                    e.jsxs("div", {
                      className: "relative group",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-r from-cyan-600/30 to-emerald-600/30 rounded-2xl blur-lg opacity-0 group-focus-within:opacity-100 transition-all duration-600",
                        }),
                        e.jsxs("div", {
                          className: "relative flex items-center",
                          children: [
                            e.jsx(Ne, {
                              className:
                                "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rose-300 group-focus-within:rotate-90 group-focus-within:text-emerald-300 transition-transform duration-400",
                            }),
                            e.jsx("input", {
                              type: "text",
                              placeholder:
                                "🔍 Search by name, phone, ID, or email...",
                              value: u,
                              onChange: (d) => M(d.target.value),
                              className:
                                "w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 text-white placeholder-gray-400 focus:border-lime-500/60 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-400 outline-none group-hover:border-violet-400/40",
                              autoFocus: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
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
                      ].map((d) =>
                        e.jsxs(
                          "label",
                          {
                            className: `flex items-center gap-2 px-4 py-3 rounded-xl cursor-pointer transition-all duration-400 font-semibold text-sm border backdrop-blur-sm hover:scale-105 hover:shadow-lg ${L === d.value ? `bg-gradient-to-r ${d.color} border-white/30 text-white shadow-lg` : "bg-white/10 border-white/20 text-gray-300 hover:bg-white/20"}`,
                            children: [
                              e.jsx("input", {
                                type: "radio",
                                name: "searchfilter",
                                value: d.value,
                                checked: L === d.value,
                                onChange: (I) => B(I.target.value),
                                className: "w-4 h-4 cursor-pointer",
                              }),
                              e.jsxs("span", {
                                className: "text-sm",
                                children: [d.icon, " ", d.label],
                              }),
                            ],
                          },
                          d.value,
                        ),
                      ),
                    }),
                    e.jsx("div", {
                      className: "space-y-4",
                      children:
                        O.length > 0
                          ? O.map((d) =>
                              e.jsxs(
                                "div",
                                {
                                  onClick: () => {
                                    N(!1), c(d);
                                  },
                                  className:
                                    "group relative p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-600 overflow-hidden border border-white/10 hover:border-emerald-500/50 bg-white/5 hover:bg-emerald-500/10 hover:shadow-2xl hover:-translate-y-2",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-emerald-500/20 to-lime-500/20 opacity-0 group-hover:opacity-100 transition-all duration-600 -skew-x-12 transform-gpu",
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "relative flex items-center gap-4",
                                      children: [
                                        e.jsxs("div", {
                                          className: "relative flex-shrink-0",
                                          children: [
                                            e.jsx("img", {
                                              src: d.image || ge,
                                              alt: d.name,
                                              className:
                                                "w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-cyan-500/50 group-hover:border-violet-500/60 transition-all duration-400 hover:rotate-6 hover:scale-110",
                                              onError: (I) => {
                                                I.target.src = ge;
                                              },
                                            }),
                                            e.jsx("div", {
                                              className: `absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white transition-all duration-400 ${d.status ? "bg-emerald-500 group-hover:scale-125 animate-pulse" : "bg-rose-500 group-hover:scale-125 animate-pulse"}`,
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className: "min-w-0 flex-1",
                                          children: [
                                            e.jsx("h4", {
                                              className:
                                                "font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:via-lime-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-400 truncate",
                                              children: d.name,
                                            }),
                                            e.jsxs("p", {
                                              className:
                                                "text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-400",
                                              children: [
                                                d.phone,
                                                " • ",
                                                d.email,
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "flex flex-wrap items-center gap-2 mt-2",
                                              children: [
                                                e.jsx("p", {
                                                  className:
                                                    "text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-400",
                                                  children: d.empNo || d.id,
                                                }),
                                                e.jsxs("span", {
                                                  className:
                                                    "text-xs px-2 py-1 rounded-full bg-gradient-to-r from-lime-500/30 to-emerald-500/30 text-lime-300 font-medium transition-all duration-400 group-hover:scale-105",
                                                  children: ["₹", d.amount],
                                                }),
                                                e.jsx("span", {
                                                  className: `text-xs px-2 py-1 rounded-full font-medium transition-all duration-400 ${d.status ? "bg-emerald-500/30 text-emerald-300 group-hover:scale-105" : "bg-rose-500/30 text-rose-300 group-hover:scale-105"}`,
                                                  children: d.status
                                                    ? "Active"
                                                    : "Inactive",
                                                }),
                                              ],
                                            }),
                                            e.jsxs("p", {
                                              className:
                                                "text-xs text-violet-400 mt-2 group-hover:text-violet-300 transition-colors duration-400 flex items-center gap-1",
                                              children: [
                                                e.jsx(fe, {
                                                  className:
                                                    "w-3 h-3 -mt-0.5 transition-transform group-hover:rotate-12",
                                                }),
                                                " ",
                                                oe(d.lastActive),
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 group-hover:from-emerald-500/40 group-hover:to-lime-500/40 transition-all duration-400 hover:scale-110",
                                          children: d.isIphone
                                            ? e.jsx(He, {
                                                className:
                                                  "w-5 h-5 text-rose-300 transition-transform group-hover:rotate-12",
                                              })
                                            : e.jsx(be, {
                                                className:
                                                  "w-5 h-5 text-cyan-300 transition-transform group-hover:rotate-12",
                                              }),
                                        }),
                                        e.jsx(at, {
                                          className:
                                            "w-5 h-5 text-gray-500 group-hover:text-emerald-400 transition-all duration-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 flex-shrink-0",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                d.id,
                              ),
                            )
                          : e.jsxs("div", {
                              className:
                                "flex flex-col items-center justify-center py-16 text-center",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "p-5 rounded-full bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 mb-4 hover:scale-110 transition-all duration-400",
                                  children: e.jsx(Ne, {
                                    className:
                                      "w-12 h-12 text-rose-300 hover:rotate-12 transition-transform duration-400",
                                  }),
                                }),
                                e.jsx("p", {
                                  className: "text-white font-bold text-lg",
                                  children: "No users match your search",
                                }),
                                e.jsx("p", {
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
      C &&
        e.jsx(sa, { message: C.message, type: C.type, onClose: () => s(null) }),
    ],
  });
}
function la() {
  const [t, r] = o.useState([]),
    [a, m] = o.useState(!0),
    [x, i] = o.useState(null),
    [b, p] = o.useState("main"),
    [c, v] = o.useState([]),
    [A, E] = o.useState([]),
    [T, S] = o.useState(0),
    [D, h] = o.useState(!1),
    [w, f] = o.useState(!1),
    [j, U] = o.useState(null),
    [N, u] = o.useState([]),
    [M, L] = o.useState({ success: [], failed: [] }),
    [B, k] = o.useState(!1),
    [g, C] = o.useState(""),
    [s] = o.useState(!0);
  o.useEffect(() => {
    (async () => {
      try {
        m(!0), i(null);
        const { error: $, data: _ = [] } = await re.get("/foodease/users");
        r(_);
      } catch ($) {
        console.error("Failed to fetch users:", $),
          i($.message),
          W("Failed to load users", "error");
      } finally {
        m(!1);
      }
    })();
  }, []);
  const P = o.useMemo(
      () =>
        t.filter((l) => {
          const $ =
            l.name.toLowerCase().includes(g.toLowerCase()) ||
            l.number.includes(g) ||
            l.id.includes(g) ||
            l.email.includes(g);
          return (l.status || N.includes(l.id)) && $;
        }),
      [t, N, g],
    ),
    y = o.useMemo(
      () =>
        t.filter(
          (l) =>
            l.name.toLowerCase().includes(g.toLowerCase()) ||
            l.number.includes(g) ||
            l.id.includes(g) ||
            l.email.includes(g),
        ),
      [t, g],
    ),
    O = (l) => {
      const $ = {
        available: {
          bg: s
            ? "bg-gradient-to-br from-green-900/50 to-emerald-900/50"
            : "bg-gradient-to-br from-green-50 to-emerald-50",
          text: s ? "text-green-300" : "text-green-700",
          icon: "✓",
          label: "Available",
          border: s ? "border-green-700" : "border-green-200",
          badge: s ? "bg-green-500/20" : "bg-green-500/10",
        },
        wfh: {
          bg: s
            ? "bg-gradient-to-br from-blue-900/50 to-cyan-900/50"
            : "bg-gradient-to-br from-blue-50 to-cyan-50",
          text: s ? "text-blue-300" : "text-blue-700",
          icon: "🏠",
          label: "WFH",
          border: s ? "border-blue-700" : "border-blue-200",
          badge: s ? "bg-blue-500/20" : "bg-blue-500/10",
        },
        leave: {
          bg: s
            ? "bg-gradient-to-br from-amber-900/50 to-yellow-900/50"
            : "bg-gradient-to-br from-amber-50 to-yellow-50",
          text: s ? "text-amber-300" : "text-amber-700",
          icon: "🌴",
          label: "Leave",
          border: s ? "border-amber-700" : "border-amber-200",
          badge: s ? "bg-amber-500/20" : "bg-amber-500/10",
        },
        blocked: {
          bg: s
            ? "bg-gradient-to-br from-red-900/50 to-rose-900/50"
            : "bg-gradient-to-br from-red-50 to-rose-50",
          text: s ? "text-red-300" : "text-red-700",
          icon: "🚫",
          label: "Blocked",
          border: s ? "border-red-700" : "border-red-200",
          badge: s ? "bg-red-500/20" : "bg-red-500/10",
        },
      };
      return $[l] || $.available;
    },
    te = (l) => {
      const $ = t.find((z) => z.id === l),
        _ = N.includes(l);
      (!$.status && !_) ||
        v((z) => (z.includes(l) ? z.filter((n) => n !== l) : [...z, l]));
    },
    se = (l, $) => {
      $.stopPropagation(),
        u((_) =>
          _.includes(l)
            ? (v((z) => z.filter((n) => n !== l)), _.filter((z) => z !== l))
            : [..._, l],
        );
    },
    le = () => {
      const l = P.map(($) => $.id);
      v(l), W("All available users selected!", "success");
    },
    ne = () => {
      v([]), W("Selection cleared", "info");
    },
    G = (l, $ = "info") => {
      const _ = new Date().toLocaleTimeString();
      E((z) => [
        ...z,
        { message: l, type: $, timestamp: _, id: Date.now() + Math.random() },
      ]);
    },
    W = (l, $ = "success") => {
      U({ message: l, type: $ }), setTimeout(() => U(null), 3e3);
    },
    ue = () => {
      if (c.length === 0) {
        W("Please select at least one user", "error");
        return;
      }
      p("booking"),
        E([]),
        S(0),
        L({ success: [], failed: [] }),
        k(!1),
        f(!0),
        G(`🚀 Starting automated booking for ${c.length} user(s)`, "system");
    },
    oe = (l) => {
      if (l >= c.length) {
        f(!1),
          k(!0),
          G("✨ All bookings completed!", "system"),
          G(
            `✓ Successful: ${M.success.length} | ✗ Failed: ${M.failed.length}`,
            "system",
          );
        return;
      }
      h(!0), S(l);
      const $ = c[l],
        _ = t.find((z) => z.id === $);
      G(`📋 Processing: ${_.name} (${_.id})`, "info"),
        setTimeout(() => {
          G("🔍 Verifying user details...", "info");
        }, 300),
        setTimeout(() => {
          G(`📱 Phone: ${_.number}`, "info");
        }, 600),
        setTimeout(() => {
          Math.random() > 0.1
            ? (G(`✅ Booking confirmed for ${_.name}`, "success"),
              L((n) => Q(X({}, n), { success: [...n.success, _] })))
            : (G(`❌ Booking failed for ${_.name} - Network error`, "error"),
              L((n) => Q(X({}, n), { failed: [...n.failed, _] })));
        }, 900),
        setTimeout(() => {
          G("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "system"), h(!1);
        }, 1200);
    };
  o.useEffect(() => {
    if (w && !D && T < c.length) {
      const l = setTimeout(() => {
        oe(T);
      }, 500);
      return () => clearTimeout(l);
    } else w && !D && T >= c.length && oe(T);
  }, [w, D, T, c.length, oe]);
  const d = () => {
      const l = M.failed.map(($) => $.id);
      v(l), p("main"), W(`${l.length} failed bookings ready for retry`, "info");
    },
    I = () => {
      p("main"), f(!1), S(0);
    },
    ee = {
      name: "John Doe",
      phone: "+91 9876543210",
      id: "FE-12345",
      email: "john@example.com",
      role: "Admin",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    };
  return e.jsxs("div", {
    className: `min-h-screen transition-colors duration-300 ${s ? "bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900" : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"}`,
    children: [
      b === "main" &&
        e.jsxs(e.Fragment, {
          children: [
            e.jsx(Oe, { user: ee }),
            e.jsxs("div", {
              className: "max-w-7xl mx-auto p-4 sm:p-8",
              children: [
                e.jsx("div", {
                  className: "flex justify-end mb-6",
                  children: e.jsx("button", {
                    onClick: () => window.history.back(),
                    className: `px-4 py-2 rounded-lg font-semibold transition-all ${s ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/50 hover:bg-yellow-500/30" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`,
                    children: "🔙 Back",
                  }),
                }),
                e.jsx("div", {
                  className: "mb-8",
                  children: e.jsxs("div", {
                    className: `relative group ${s ? "shadow-2xl" : "shadow-lg"}`,
                    children: [
                      e.jsx(Ne, {
                        className: `absolute left-4 top-4 w-5 h-5 ${s ? "text-purple-400" : "text-gray-400"}`,
                      }),
                      e.jsx("input", {
                        type: "text",
                        placeholder:
                          "🔎 Search by name, phone, Prudent ID, or User ID...",
                        value: g,
                        onChange: (l) => C(l.target.value),
                        className: `w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all ${s ? "bg-gray-800 border-purple-500 text-white placeholder-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30" : "bg-white border-purple-300 text-gray-900 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30"} font-semibold`,
                      }),
                    ],
                  }),
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                  children: [
                    e.jsxs("div", {
                      className: `rounded-2xl p-8 shadow-xl border-2 transition-all hover:scale-105 cursor-pointer ${s ? "bg-gradient-to-br from-blue-900/50 to-blue-800/50 border-blue-600 hover:from-blue-800/60 hover:to-blue-700/60" : "bg-gradient-to-br from-blue-500 to-blue-600 border-blue-400 text-white"}`,
                      children: [
                        e.jsxs("div", {
                          className: `text-sm font-bold mb-2 flex items-center gap-2 ${s ? "text-blue-300" : "opacity-90"}`,
                          children: [
                            e.jsx(ve, { className: "w-4 h-4" }),
                            "Selected Users",
                          ],
                        }),
                        e.jsx("div", {
                          className: `text-5xl font-black ${s ? "text-blue-300" : ""}`,
                          children: c.length,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: `rounded-2xl p-8 shadow-xl border-2 transition-all hover:scale-105 cursor-pointer ${s ? "bg-gradient-to-br from-purple-900/50 to-purple-800/50 border-purple-600 hover:from-purple-800/60 hover:to-purple-700/60" : "bg-gradient-to-br from-purple-500 to-purple-600 border-purple-400 text-white"}`,
                      children: [
                        e.jsxs("div", {
                          className: `text-sm font-bold mb-2 flex items-center gap-2 ${s ? "text-purple-300" : "opacity-90"}`,
                          children: [
                            e.jsx(It, { className: "w-4 h-4" }),
                            "Available Users",
                          ],
                        }),
                        e.jsx("div", {
                          className: `text-5xl font-black ${s ? "text-purple-300" : ""}`,
                          children: P.length,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: `rounded-2xl p-8 shadow-xl border-2 transition-all hover:scale-105 cursor-pointer ${s ? "bg-gradient-to-br from-pink-900/50 to-pink-800/50 border-pink-600 hover:from-pink-800/60 hover:to-pink-700/60" : "bg-gradient-to-br from-pink-500 to-pink-600 border-pink-400 text-white"}`,
                      children: [
                        e.jsxs("div", {
                          className: `text-sm font-bold mb-2 flex items-center gap-2 ${s ? "text-pink-300" : "opacity-90"}`,
                          children: [
                            e.jsx(Tt, { className: "w-4 h-4" }),
                            "Total Users",
                          ],
                        }),
                        e.jsx("div", {
                          className: `text-5xl font-black ${s ? "text-pink-300" : ""}`,
                          children: t.length,
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-4 mb-8",
                  children: [
                    e.jsxs("button", {
                      onClick: le,
                      disabled: P.length === 0,
                      className: `flex-1 px-6 py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${s ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600" : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"}`,
                      children: ["✅ Select All (", P.length, ")"],
                    }),
                    e.jsx("button", {
                      onClick: ne,
                      disabled: c.length === 0,
                      className: `flex-1 px-6 py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${s ? "bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500" : "bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-gray-600 hover:to-gray-700"}`,
                      children: "🗑️ Clear",
                    }),
                    e.jsxs("button", {
                      onClick: ue,
                      disabled: c.length === 0,
                      className: `flex-1 px-6 py-4 rounded-xl font-bold text-lg shadow-xl transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${s ? "bg-gradient-to-r from-pink-600 to-red-500 text-white hover:from-pink-700 hover:to-red-600" : "bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600"}`,
                      children: [
                        e.jsx(At, { className: "w-5 h-5" }),
                        "Start Booking (",
                        c.length,
                        ")",
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",
                  children: y.map((l) => {
                    const $ = O(l.status),
                      _ = c.includes(l.id),
                      z = N.includes(l.id),
                      n = (l == null ? void 0 : l.status) || z,
                      J = l.status === "wfh" || l.status === "leave";
                    return e.jsxs(
                      "div",
                      {
                        className: `rounded-2xl border-2 p-5 cursor-pointer transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm ${_ ? (s ? "bg-gradient-to-br from-pink-900/70 to-purple-900/70 border-pink-500 shadow-pink-500/50" : "bg-gradient-to-br from-pink-100 to-purple-100 border-pink-500") : s ? "bg-gray-800/50 border-gray-700 hover:border-purple-500" : "bg-white border-gray-300 hover:border-purple-400"} ${n ? "" : "opacity-50"}`,
                        onClick: () => te(l.id),
                        role: "button",
                        tabIndex: n ? 0 : -1,
                        onKeyDown: (K) => K.key === "Enter" && te(l.id),
                        children: [
                          e.jsxs("div", {
                            className: "flex items-start gap-3 mb-4",
                            children: [
                              e.jsx("input", {
                                type: "checkbox",
                                checked: _,
                                onChange: () => te(l.id),
                                disabled: !n,
                                className:
                                  "mt-1 h-6 w-6 accent-pink-600 cursor-pointer",
                              }),
                              e.jsx("div", {
                                className: "flex-1 min-w-0",
                                children: e.jsxs("div", {
                                  className: "flex items-center gap-3 mb-2",
                                  children: [
                                    e.jsx("img", {
                                      src: l.image,
                                      alt: l.name,
                                      className: `w-14 h-14 rounded-full object-cover border-3 ${s ? "border-purple-500" : "border-purple-400"} shadow-lg`,
                                    }),
                                    e.jsxs("div", {
                                      className: "min-w-0 flex-1",
                                      children: [
                                        e.jsx("h3", {
                                          className: `text-sm font-bold truncate ${s ? "text-white" : "text-gray-900"}`,
                                          children: l.name,
                                        }),
                                        e.jsxs("p", {
                                          className: `text-xs truncate ${s ? "text-gray-400" : "text-gray-600"}`,
                                          children: ["📞 ", l.phone],
                                        }),
                                        e.jsxs("p", {
                                          className: `text-xs truncate ${s ? "text-gray-400" : "text-gray-600"}`,
                                          children: ["🆔 ", l.prudentId],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: `text-xs font-mono font-bold mb-4 p-2 rounded-lg ${$.badge} ${s ? "text-purple-300" : "text-purple-700"}`,
                            children: ["ID: ", l.id],
                          }),
                          e.jsxs("div", {
                            className:
                              "flex items-center justify-between gap-2 flex-wrap",
                            children: [
                              e.jsxs("div", {
                                className: `inline-flex items-center px-3 py-2 rounded-xl text-xs font-bold border-2 ${$.bg} ${$.text} ${$.border}`,
                                children: [
                                  e.jsx("span", {
                                    className: "mr-2 text-lg",
                                    children: $.icon,
                                  }),
                                  z ? "Enabled" : $.label,
                                ],
                              }),
                              J &&
                                e.jsx("button", {
                                  onClick: (K) => se(l.id, K),
                                  className: `text-xs font-bold px-3 py-2 rounded-xl transition-all transform hover:scale-110 ${z ? (s ? "bg-red-500/30 text-red-300 border border-red-500 hover:bg-red-500/50" : "bg-red-200 text-red-800 hover:bg-red-300") : s ? "bg-green-500/30 text-green-300 border border-green-500 hover:bg-green-500/50" : "bg-green-200 text-green-800 hover:bg-green-300"}`,
                                  children: z ? "Disable" : "Enable",
                                }),
                            ],
                          }),
                        ],
                      },
                      l.id,
                    );
                  }),
                }),
                y.length === 0 &&
                  e.jsxs("div", {
                    className: `text-center py-20 rounded-3xl ${s ? "bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700" : "bg-gradient-to-br from-gray-100 to-gray-200"}`,
                    children: [
                      e.jsx("div", {
                        className: `text-7xl mb-4 ${s ? "text-gray-600" : "text-gray-400"}`,
                        children: "🔍",
                      }),
                      e.jsx("p", {
                        className: `text-lg font-bold ${s ? "text-gray-400" : "text-gray-600"}`,
                        children: "No users found matching your search.",
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      b === "booking" &&
        e.jsxs("div", {
          className: "max-w-4xl mx-auto p-4 sm:p-8",
          children: [
            e.jsxs("button", {
              onClick: I,
              disabled: D && !B,
              className: `flex items-center gap-2 mb-8 px-6 py-3 rounded-xl font-bold transition-all ${s ? "bg-gray-800 border-2 border-gray-700 text-purple-300 hover:border-purple-500 disabled:opacity-50" : "bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-500 disabled:opacity-50"}`,
              children: [e.jsx(Be, { className: "w-5 h-5" }), "Back"],
            }),
            e.jsxs("div", {
              className: `${s ? "bg-gradient-to-r from-purple-900/60 via-gray-900/60 to-purple-900/60 border-b-4 border-purple-500" : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-2xl"} text-white rounded-3xl p-8 mb-8 relative overflow-hidden`,
              children: [
                e.jsx("div", {
                  className: "absolute inset-0 opacity-20",
                  children: e.jsx("div", {
                    className:
                      "absolute top-0 right-0 w-64 h-64 bg-pink-500 rounded-full blur-3xl",
                  }),
                }),
                e.jsxs("div", {
                  className: "relative z-10",
                  children: [
                    e.jsx("h2", {
                      className: "text-4xl font-black mb-2",
                      children: "📊 Booking Progress",
                    }),
                    e.jsx("p", {
                      className: "text-blue-100 text-lg",
                      children:
                        "Processing your selections with real-time updates",
                    }),
                  ],
                }),
              ],
            }),
            !B &&
              e.jsxs("div", {
                className: `rounded-2xl p-8 mb-8 shadow-xl border-2 ${s ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`,
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [
                      e.jsxs("span", {
                        className: `text-lg font-bold ${s ? "text-white" : "text-gray-800"}`,
                        children: [
                          "⚙️ Processing ",
                          T + 1,
                          " of",
                          " ",
                          c.length,
                        ],
                      }),
                      e.jsxs("span", {
                        className: `text-2xl font-black ${s ? "text-pink-400" : "text-pink-600"}`,
                        children: [Math.round(((T + 1) / c.length) * 100), "%"],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: `w-full rounded-full h-4 overflow-hidden border-2 ${s ? "bg-gray-700 border-gray-600" : "bg-gray-200 border-gray-300"}`,
                    children: e.jsx("div", {
                      className:
                        "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-4 rounded-full transition-all duration-500 shadow-lg",
                      style: { width: `${((T + 1) / c.length) * 100}%` },
                    }),
                  }),
                ],
              }),
            e.jsx("div", {
              className: `rounded-3xl shadow-2xl border-2 overflow-hidden ${s ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`,
              children: e.jsx("div", {
                className: "p-8",
                children: B
                  ? e.jsxs("div", {
                      className: "space-y-8",
                      children: [
                        e.jsxs("div", {
                          className: `rounded-2xl p-8 border-2 ${s ? "bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-700" : "bg-gradient-to-br from-green-50 to-emerald-50 border-green-300"}`,
                          children: [
                            e.jsxs("div", {
                              className: `flex items-center gap-3 mb-6 ${s ? "text-green-300" : "text-green-700"}`,
                              children: [
                                e.jsx(We, { className: "w-8 h-8" }),
                                e.jsxs("h3", {
                                  className: "font-black text-2xl",
                                  children: [
                                    "Successful Bookings (",
                                    M.success.length,
                                    ")",
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("ul", {
                              className: "space-y-3 max-h-48 overflow-y-auto",
                              children: M.success.map((l) =>
                                e.jsxs(
                                  "li",
                                  {
                                    className: `text-sm font-semibold flex items-center rounded-xl p-3 border-2 ${s ? "bg-green-500/10 text-green-300 border-green-600" : "bg-white text-green-700 border-green-200"}`,
                                    children: [
                                      e.jsx("span", {
                                        className: `w-3 h-3 rounded-full mr-3 ${s ? "bg-green-400" : "bg-green-500"}`,
                                      }),
                                      l.name,
                                      " (",
                                      l.prudentId,
                                      ")",
                                    ],
                                  },
                                  l.id,
                                ),
                              ),
                            }),
                          ],
                        }),
                        M.failed.length > 0 &&
                          e.jsxs("div", {
                            className: `rounded-2xl p-8 border-2 ${s ? "bg-gradient-to-br from-red-900/50 to-rose-900/50 border-red-700" : "bg-gradient-to-br from-red-50 to-rose-50 border-red-300"}`,
                            children: [
                              e.jsxs("div", {
                                className: `flex items-center gap-3 mb-6 ${s ? "text-red-300" : "text-red-700"}`,
                                children: [
                                  e.jsx(Ge, { className: "w-8 h-8" }),
                                  e.jsxs("h3", {
                                    className: "font-black text-2xl",
                                    children: [
                                      "Failed Bookings (",
                                      M.failed.length,
                                      ")",
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("ul", {
                                className: "space-y-3 max-h-48 overflow-y-auto",
                                children: M.failed.map((l) =>
                                  e.jsxs(
                                    "li",
                                    {
                                      className: `text-sm font-semibold flex items-center rounded-xl p-3 border-2 ${s ? "bg-red-500/10 text-red-300 border-red-600" : "bg-white text-red-700 border-red-200"}`,
                                      children: [
                                        e.jsx("span", {
                                          className: `w-3 h-3 rounded-full mr-3 ${s ? "bg-red-400" : "bg-red-500"}`,
                                        }),
                                        l.name,
                                        " (",
                                        l.prudentId,
                                        ")",
                                      ],
                                    },
                                    l.id,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        e.jsxs("div", {
                          className: "flex gap-4 pt-6",
                          children: [
                            M.failed.length > 0 &&
                              e.jsxs("button", {
                                onClick: d,
                                className: `flex-1 py-4 px-6 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg ${s ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:from-orange-700 hover:to-orange-600" : "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"}`,
                                children: [
                                  "🔄 Retry Failed (",
                                  M.failed.length,
                                  ")",
                                ],
                              }),
                            e.jsx("button", {
                              onClick: I,
                              className: `flex-1 py-4 px-6 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg ${s ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600" : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"}`,
                              children: "⬅️ Back to Main",
                            }),
                          ],
                        }),
                      ],
                    })
                  : e.jsxs(e.Fragment, {
                      children: [
                        T < c.length &&
                          (() => {
                            const l = t.find(($) => $.id === c[T]);
                            return e.jsxs("div", {
                              className: `rounded-2xl p-6 mb-8 border-2 ${s ? "bg-gradient-to-r from-blue-900/50 to-pink-900/50 border-blue-600" : "bg-gradient-to-r from-blue-100 to-pink-100 border-purple-300"}`,
                              children: [
                                e.jsx("p", {
                                  className: `text-xs font-bold mb-4 ${s ? "text-blue-300" : "text-blue-600"}`,
                                  children: "Currently Processing",
                                }),
                                e.jsxs("div", {
                                  className: "flex items-center gap-5",
                                  children: [
                                    e.jsx("img", {
                                      src: l.imgage,
                                      alt: l.name,
                                      className: `w-20 h-20 rounded-2xl object-cover border-3 ${s ? "border-pink-500" : "border-purple-500"} shadow-lg`,
                                    }),
                                    e.jsxs("div", {
                                      className: "flex-1",
                                      children: [
                                        e.jsx("h3", {
                                          className: `font-black text-xl mb-2 ${s ? "text-white" : "text-gray-900"}`,
                                          children: l.name,
                                        }),
                                        e.jsxs("p", {
                                          className: `text-sm font-semibold mb-1 ${s ? "text-gray-300" : "text-gray-700"}`,
                                          children: ["📞 ", l.phone],
                                        }),
                                        e.jsxs("p", {
                                          className: `text-sm font-semibold ${s ? "text-gray-300" : "text-gray-700"}`,
                                          children: ["🆔 ", l.prudentId],
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className: "animate-spin",
                                      children: e.jsx(ve, {
                                        className: `w-8 h-8 ${s ? "text-yellow-400" : "text-yellow-500"}`,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            });
                          })(),
                        e.jsxs("div", {
                          className: `rounded-2xl p-6 max-h-72 overflow-y-auto border-2 font-mono text-sm ${s ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-900 border-gray-800 text-green-400"}`,
                          children: [
                            A.map((l) =>
                              e.jsxs(
                                "div",
                                {
                                  className:
                                    "mb-4 flex items-start gap-3 text-xs sm:text-sm",
                                  children: [
                                    e.jsx("span", {
                                      className: `${l.type === "success" ? "text-green-400" : l.type === "error" ? "text-red-400" : l.type === "system" ? "text-yellow-400" : "text-cyan-400"} flex-shrink-0`,
                                      children:
                                        l.type === "success"
                                          ? "✅"
                                          : l.type === "error"
                                            ? "❌"
                                            : l.type === "system"
                                              ? "⚙️"
                                              : "ℹ️",
                                    }),
                                    e.jsxs("div", {
                                      className: "flex-1",
                                      children: [
                                        e.jsxs("span", {
                                          className: "text-gray-500",
                                          children: ["[", l.timestamp, "]"],
                                        }),
                                        e.jsx("span", {
                                          className: "ml-2 text-gray-100",
                                          children: l.message,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                l.id,
                              ),
                            ),
                            A.length === 0 &&
                              e.jsxs("div", {
                                className: "text-center py-12 text-gray-500",
                                children: [
                                  e.jsx("div", {
                                    className: "text-3xl mb-3",
                                    children: "⏳",
                                  }),
                                  e.jsx("div", {
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
      j &&
        e.jsx("div", {
          className: "fixed top-6 right-6 z-50 animate-bounce",
          children: e.jsxs("div", {
            className: `px-6 py-4 rounded-2xl shadow-2xl text-white font-bold flex items-center gap-3 border-2 ${j.type === "success" ? (s ? "bg-gradient-to-r from-green-600 to-emerald-600 border-green-500" : "bg-gradient-to-r from-green-500 to-emerald-600 border-green-400") : j.type === "error" ? (s ? "bg-gradient-to-r from-red-600 to-rose-600 border-red-500" : "bg-gradient-to-r from-red-500 to-rose-600 border-red-400") : s ? "bg-gradient-to-r from-blue-600 to-cyan-600 border-blue-500" : "bg-gradient-to-r from-blue-500 to-cyan-600 border-blue-400"}`,
            children: [
              j.type === "success" &&
                e.jsx(We, { className: "w-5 h-5 flex-shrink-0" }),
              j.type === "error" &&
                e.jsx(Ge, { className: "w-5 h-5 flex-shrink-0" }),
              j.message,
            ],
          }),
        }),
    ],
  });
}
function na({ className: t = "" }) {
  return e.jsxs("div", {
    className: `bg-gradient-to-br from-purple-800/60 via-pink-800/40 to-indigo-900/60 border border-purple-400/20 rounded-2xl p-2 sm:p-4 backdrop-blur-xl animate-pulse space-y-2 sm:space-y-4 ${t}`,
    children: [
      e.jsxs("div", {
        className: "space-y-1 sm:space-y-2",
        children: [
          e.jsx("div", {
            className:
              "h-6 sm:h-8 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded w-3/4",
          }),
          e.jsx("div", {
            className:
              "h-3 sm:h-4 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded w-1/2",
          }),
        ],
      }),
      e.jsx("div", {
        className:
          "h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent",
      }),
      e.jsx("div", {
        className:
          "h-4 sm:h-5 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded w-1/3",
      }),
      e.jsxs("div", {
        className: "grid grid-cols-1 gap-2 sm:gap-3",
        children: [
          e.jsx(Re, { color: "green" }),
          e.jsx(Re, { color: "blue" }),
          e.jsx(Re, { color: "red" }),
        ],
      }),
    ],
  });
}
function Re({ color: t }) {
  const r = {
    green: "from-green-600/40 border-green-500/50",
    blue: "from-blue-600/40 border-cyan-500/50",
    red: "from-red-600/40 border-pink-500/50",
  };
  return e.jsxs("div", {
    className: `bg-gradient-to-r ${r[t]} border rounded-xl p-2 sm:p-3 backdrop-blur-sm space-y-1 sm:space-y-2 animate-pulse`,
    children: [
      e.jsx("div", { className: "h-2 sm:h-3 bg-white/20 rounded w-4/5" }),
      e.jsx("div", {
        className:
          "h-5 sm:h-6 bg-white/20 rounded w-1/3 flex items-center gap-2",
        children: e.jsx("div", {
          className: "h-3 sm:h-4 w-3 sm:w-4 bg-white/30 rounded",
        }),
      }),
    ],
  });
}
function ia({ className: t = "" }) {
  return e.jsxs("div", {
    className: `bg-gradient-to-br from-blue-800/50 via-purple-800/50 to-pink-800/40 border border-cyan-400/20 rounded-2xl p-2 sm:p-4 sm:p-6 backdrop-blur-xl animate-pulse ${t}`,
    children: [
      e.jsxs("div", {
        className: "flex items-center justify-between mb-4 sm:mb-6",
        children: [
          e.jsx("div", {
            className:
              "p-1 sm:p-2 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-lg w-8 sm:w-10 h-8 sm:h-10",
          }),
          e.jsx("div", {
            className:
              "h-5 sm:h-7 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded w-24 sm:w-32 mx-auto",
          }),
          e.jsx("div", {
            className:
              "p-1 sm:p-2 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-lg w-8 sm:w-10 h-8 sm:h-10",
          }),
        ],
      }),
      e.jsx("div", {
        className: "grid grid-cols-7 gap-1 sm:gap-2 mb-2 sm:mb-4",
        children: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((r) =>
          e.jsx(
            "div",
            {
              className:
                "text-center text-xs font-bold text-gray-400 py-1 sm:py-2",
              children: e.jsx("div", {
                className: "h-2 sm:h-3 bg-white/20 rounded w-6 sm:w-8 mx-auto",
              }),
            },
            r,
          ),
        ),
      }),
      e.jsx("div", {
        className: "grid grid-cols-7 gap-1 sm:gap-2",
        children: Array.from({ length: 42 }).map((r, a) =>
          e.jsx(
            "div",
            {
              className:
                "aspect-square bg-gradient-to-br from-slate-700/50 to-slate-600/30 border border-purple-400/30 rounded-lg flex flex-col items-center justify-center",
              children: e.jsx("div", {
                className: "h-3 sm:h-4 w-3 sm:w-4 bg-white/20 rounded",
              }),
            },
            a,
          ),
        ),
      }),
    ],
  });
}
function da({ className: t = "" }) {
  return e.jsxs("div", {
    className: `bg-gradient-to-br from-cyan-800/50 via-teal-800/40 to-blue-900/60 border border-cyan-400/20 rounded-2xl p-2 sm:p-4 backdrop-blur-xl animate-pulse space-y-2 sm:space-y-4 ${t}`,
    children: [
      e.jsxs("div", {
        className: "flex justify-end gap-1 sm:gap-2",
        children: [
          e.jsx("div", {
            className:
              "py-1 sm:py-2 px-2 sm:px-3 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-lg w-12 sm:w-16 h-6 sm:h-8",
          }),
          e.jsx("div", {
            className:
              "py-1 sm:py-2 px-2 sm:px-3 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-lg w-12 sm:w-16 h-6 sm:h-8",
          }),
        ],
      }),
      e.jsx("div", {
        className:
          "h-4 sm:h-5 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded w-12 sm:w-16",
      }),
      e.jsx("div", {
        className:
          "h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent",
      }),
      e.jsx("div", {
        className: "space-y-1 sm:space-y-2",
        children: Array.from({ length: 5 }).map((r, a) =>
          e.jsxs(
            "div",
            {
              className:
                "flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 rounded-lg bg-gradient-to-r from-white/10 to-white/5 border border-cyan-400/30 text-xs animate-pulse",
              children: [
                e.jsx("div", {
                  className: "h-3 sm:h-4 w-3 sm:w-4 bg-white/30 rounded",
                }),
                e.jsx("div", {
                  className: "h-2 sm:h-3 bg-white/20 rounded w-16 sm:w-20",
                }),
              ],
            },
            a,
          ),
        ),
      }),
    ],
  });
}
function ca() {
  const { user: t } = pe(),
    [r, a] = o.useState(new Date()),
    [m, x] = o.useState([]),
    [i, b] = o.useState([]),
    [p, c] = o.useState({
      bookings: 0,
      totalAmount: 0,
      cancelled: 0,
      amount: 0,
    }),
    [v, A] = o.useState(null),
    [E, T] = o.useState(!1),
    [S, D] = o.useState(!1),
    [h, w] = o.useState(t == null ? void 0 : t.empNo);
  o.useEffect(() => {
    w((t == null ? void 0 : t.empNo) || h);
  }, [t]);
  const f = async (g, C) => {
    D(!0);
    try {
      var {
        error: s,
        message: P,
        data: y,
      } = await re.post(`/foodease/calendar/month/${h}`, {
        year: g,
        month: C + 1 > 9 ? C + 1 : "0" + (C + 1),
      });
      if (s) {
        console.log(P);
        return;
      } else if (y) {
        const {
          calendar: O,
          Holidays: te,
          totalAmount: se,
          totalBookings: le,
          totalCanceled: ne,
          amountPerMeal: G,
        } = y;
        x(O),
          b(te),
          c((W) =>
            Q(X({}, W), {
              totalAmount: se,
              bookings: le,
              cancelled: ne,
              amount: G,
            }),
          );
      }
    } catch (O) {
      console.log("API call failed:", O);
    } finally {
      D(!1);
    }
  };
  o.useEffect(() => {
    var g = r.getMonth(),
      C = r.getFullYear();
    f(C, g);
  }, [r, h]);
  const j = (g) => {
      if (!g || S) return;
      const C = r.getFullYear(),
        s = r.getMonth(),
        P = `${C}-${String(s + 1).padStart(2, "0")}-${String(g).padStart(2, "0")}`;
      A(P), T(!0);
    },
    U = async (g) => {
      try {
        await re.post(`/foodease/book/${h}`, { date: g }), L(), T(!1);
      } catch (C) {
        console.log("Booking failed:", C);
      }
    },
    N = async (g) => {
      try {
        await re.post(`/foodease/cancel/${h}`, { date: g }), L(), T(!1);
      } catch (C) {
        console.log("Cancel failed:", C);
      }
    },
    u = (g, C, s) => {
      if (!s) return !1;
      const P = new Date(g, C, s);
      return P.getDay() === 0 || P.getDay() === 6;
    },
    M = (g) => {
      const C = new Date(r);
      C.setMonth(C.getMonth() + g), a(C);
    },
    L = () => {
      const g = r.getFullYear(),
        C = r.getMonth();
      f(g, C);
    },
    B = () => {
      window.history.back();
    },
    k = (g) => {
      w(g.target.value), L();
    };
  return S
    ? e.jsxs("div", {
        className:
          "h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-y-auto flex flex-col",
        children: [
          e.jsxs("div", {
            className:
              "pt-4 pb-4 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 sm:p-6",
            children: [
              e.jsx(na, { className: "lg:col-span-3" }),
              e.jsx(ia, { className: "lg:col-span-6" }),
              e.jsx(da, { className: "lg:col-span-3" }),
            ],
          }),
          e.jsx("footer", {
            className:
              "text-center text-xs text-gray-400 p-2 bg-gradient-to-r from-slate-950 to-pink-950 border-t border-gray-800",
            children: "© 2025 FoodEase. All rights reserved.",
          }),
          e.jsx("style", {
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
    : e.jsxs("div", {
        className:
          "h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-pink-950 overflow-y-auto relative flex flex-col",
        children: [
          e.jsxs("div", {
            className: "fixed inset-0 overflow-hidden pointer-events-none",
            children: [
              e.jsx("div", {
                className:
                  "absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-full animate-blob blur-3xl",
              }),
              e.jsx("div", {
                className:
                  "absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-full animate-blob blur-3xl",
                style: { animationDelay: "2s" },
              }),
              e.jsx("div", {
                className:
                  "absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-orange-500/5 rounded-full animate-blob blur-3xl",
                style: { animationDelay: "4s" },
              }),
            ],
          }),
          e.jsx("div", {
            className: "relative z-10 flex flex-col flex-1 w-full",
            children: e.jsxs("div", {
              className:
                "pt-4 pb-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-4 p-4 sm:p-6 h-full w-full",
              children: [
                e.jsx("div", {
                  className:
                    "lg:col-span-3 h-full space-y-2 lg:space-y-2 px-0 lg:px-2",
                  children: e.jsx(ma, {
                    stats: p,
                    user: t,
                    events: m,
                    onRefresh: L,
                    handleBack: B,
                    selectedEmpNo: h,
                    onEmpChange: k,
                  }),
                }),
                e.jsx("div", {
                  className: "lg:col-span-6 h-full space-y-4",
                  children: e.jsx(ha, {
                    currentDate: r,
                    events: m,
                    holidays: i,
                    onMonthChange: M,
                    onDateClick: j,
                    isWeekend: u,
                  }),
                }),
                e.jsx("div", {
                  className:
                    "lg:col-span-3 h-full space-y-2 lg:space-y-2 px-0 lg:px-2",
                  children: e.jsx(xa, {
                    stats: p,
                    user: t,
                    events: m,
                    onRefresh: L,
                    handleBack: B,
                  }),
                }),
              ],
            }),
          }),
          e.jsx("footer", {
            className:
              "text-center text-xs text-gray-400 p-2 bg-gradient-to-r from-slate-950 via-purple-950 to-pink-950 border-t border-gray-800 shrink-0",
            children: "© 2025 FoodEase. All rights reserved.",
          }),
          E &&
            v &&
            e.jsx(pa, {
              date: v,
              events: m,
              holidays: i,
              onClose: () => T(!1),
              onBook: U,
              onCancel: N,
              isWeekend: u,
            }),
          e.jsx("style", {
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
function nt({ stats: t, pc: r = !1 }) {
  return e.jsx("div", {
    className: `pt-1 sm:pt-2  ${r ? "hidden lg:flex border-t border-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20" : "lg:hidden"}`,
    children: e.jsxs("div", {
      className: "w-full",
      children: [
        e.jsxs("h2", {
          className:
            "text-base sm:text-lg font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent flex items-center gap-2 mb-2 sm:mb-4",
          children: [
            e.jsx("span", { className: "animate-float", children: "📈" }),
            " Monthly Statistics",
          ],
        }),
        e.jsxs("div", {
          className: "grid grid-cols-1 gap-3 sm:gap-4",
          children: [
            e.jsx(we, {
              icon: "✅",
              label: "Total Bookings",
              value: (t == null ? void 0 : t.bookings) || 0,
              color: "green",
            }),
            e.jsx(we, {
              icon: "💰",
              label: "Total Spent",
              value: `₹${(t == null ? void 0 : t.totalAmount) || 0}`,
              color: "blue",
            }),
            e.jsx(we, {
              icon: "❌",
              label: "Cancelled",
              value: (t == null ? void 0 : t.cancelled) || 0,
              color: "red",
            }),
            e.jsx(we, {
              icon: "💲",
              label: "Per Day",
              value: `₹${(t == null ? void 0 : t.amount) || 0}`,
              color: "yellow",
            }),
          ],
        }),
      ],
    }),
  });
}
function it({ pc: t = !1, handleBack: r, onRefresh: a }) {
  return e.jsx("div", {
    className: `pt-2 sm:pt-4 ${t ? "hidden lg:flex" : "lg:hidden border-t border-purple-400/20"}`,
    children: e.jsxs("div", {
      className: "flex justify-center gap-2 sm:gap-4 w-full",
      children: [
        e.jsxs("button", {
          onClick: r,
          className:
            "py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 hover:from-rose-500 hover:via-pink-500 hover:to-red-500 text-white font-bold rounded-lg transition-all duration-200 flex items-center gap-1 text-xs shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transform",
          children: [e.jsx(he, { className: "w-3 h-3" }), "Back"],
        }),
        e.jsxs("button", {
          onClick: a,
          className:
            "py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-500 hover:via-cyan-500 hover:to-teal-500 text-white font-bold rounded-lg transition-all duration-200 flex items-center gap-1 text-xs shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transform",
          children: [e.jsx(Ce, { className: "w-3 h-3" }), "Refresh"],
        }),
      ],
    }),
  });
}
function ma({
  stats: t,
  user: r,
  handleBack: a,
  onRefresh: m,
  selectedEmpNo: x,
  onEmpChange: i,
}) {
  var b;
  return e.jsxs("div", {
    className:
      "bg-gradient-to-br from-purple-900/80 via-pink-900/60 to-indigo-900/80 border border-purple-400/30 rounded-2xl p-2 sm:p-4 backdrop-blur-xl animate-slide-up shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:border-purple-400/50 flex flex-col",
    children: [
      e.jsxs("div", {
        className: "space-y-1 sm:space-y-2 flex-shrink-0",
        children: [
          e.jsxs("h1", {
            className:
              "text-2xl sm:text-3xl font-black bg-gradient-to-r from-cyan-300 via-pink-300 to-purple-300 bg-clip-text text-transparent flex items-center gap-2",
            children: [
              e.jsx("span", {
                className: "text-3xl sm:text-4xl animate-bounce",
                children: "✨",
              }),
              " ",
              "FoodEase",
            ],
          }),
          e.jsx("div", { className: "h-1 sm:h-2" }),
          (r == null ? void 0 : r.admin) &&
            e.jsx("select", {
              value: x,
              onChange: i,
              className:
                "w-full p-2 bg-gradient-to-r from-gray-800 to-gray-700 border border-purple-400/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500",
              style: { backgroundColor: "rgb(31 41 55)", color: "white" },
              children:
                (b = r == null ? void 0 : r.users) == null
                  ? void 0
                  : b.map((p) =>
                      e.jsxs(
                        "option",
                        {
                          value: p.empNo,
                          selected: p.empNo === x,
                          style: {
                            backgroundColor: "rgb(31 41 55)",
                            color: "white",
                          },
                          children: [p.name, " (", p.empNo, ")"],
                        },
                        p.empNo,
                      ),
                    ),
            }),
        ],
      }),
      e.jsx(it, { handleBack: a, onRefresh: m, pc: !1 }),
      e.jsx("div", {
        className: "flex-1 flex flex-col space-y-0",
        children: e.jsx(nt, { stats: t, pc: !0 }),
      }),
    ],
  });
}
function we({ icon: t, label: r, value: a, color: m }) {
  const x = {
    green:
      "from-green-700/80 via-emerald-600/60 to-teal-700/60 border-green-400/50 shadow-lg shadow-green-500/20",
    blue: "from-blue-700/80 via-cyan-600/60 to-sky-700/60 border-cyan-400/50 shadow-lg shadow-cyan-500/20",
    red: "from-red-700/80 via-pink-600/60 to-rose-700/60 border-red-400/50 shadow-lg shadow-red-500/20",
    yellow:
      "from-yellow-700/80 via-amber-600/60 to-orange-700/60 border-yellow-400/50 shadow-lg shadow-yellow-500/20",
  };
  return e.jsx("div", {
    className: `bg-gradient-to-br ${x[m]} border rounded-xl p-2 sm:p-4 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 transform`,
    children: e.jsxs("div", {
      className: "flex items-center justify-between",
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-2 sm:gap-3",
          children: [
            e.jsx("span", {
              className: "text-xl sm:text-2xl animate-float",
              children: t,
            }),
            " ",
            e.jsx("p", {
              className:
                "text-xs sm:text-sm text-white/80 font-semibold mb-1 sm:mb-2 uppercase tracking-wider",
              children: r,
            }),
          ],
        }),
        e.jsx("p", {
          className:
            "text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent text-right",
          children: a,
        }),
      ],
    }),
  });
}
function me({ icon: t, label: r, color: a }) {
  const m = {
    green:
      "from-green-600/50 to-emerald-500/30 border-green-400/60 shadow-lg shadow-green-500/20",
    blue: "from-blue-600/50 to-cyan-500/30 border-cyan-400/60 shadow-lg shadow-cyan-500/20",
    red: "from-red-600/50 to-pink-500/30 border-red-400/60 shadow-lg shadow-red-500/20",
    orange:
      "from-orange-600/50 to-amber-500/30 border-orange-400/60 shadow-lg shadow-orange-500/20",
    purple:
      "from-purple-600/50 to-violet-500/30 border-purple-400/60 shadow-lg shadow-purple-500/20",
  };
  return e.jsxs("div", {
    className: `flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border bg-gradient-to-r ${m[a]} text-xs font-semibold text-white transition-all duration-300 hover:scale-105 transform hover:shadow-2xl`,
    children: [
      e.jsx("span", {
        className: "text-base sm:text-lg animate-float",
        children: t,
      }),
      e.jsx("span", { children: r }),
    ],
  });
}
function xa({ onRefresh: t, stats: r, handleBack: a }) {
  return e.jsx("div", {
    className:
      "bg-gradient-to-br from-cyan-900/80 via-teal-900/60 to-blue-900/80 border border-cyan-400/30 rounded-2xl p-2 sm:p-4 backdrop-blur-xl animate-slide-up shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:border-cyan-400/50 flex flex-col",
    children: e.jsxs("div", {
      className: "flex-1 flex flex-col space-y-2",
      children: [
        e.jsx(it, { handleBack: a, onRefresh: t, pc: !0 }),
        e.jsx(nt, { stats: r, pc: !1 }),
        e.jsxs("div", {
          className: "pt-2 border-t border-cyan-400/20 flex-1",
          children: [
            e.jsxs("h2", {
              className:
                "text-base sm:text-lg font-bold bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-300 bg-clip-text text-transparent flex items-center gap-2 mb-2",
              children: [
                e.jsx("span", {
                  className: "text-xl sm:text-2xl animate-float",
                  children: "📊",
                }),
                " Legend",
              ],
            }),
            e.jsxs("div", {
              className: "space-y-3 sm:space-y-2",
              children: [
                e.jsx(me, { icon: "✅", label: "Scheduled", color: "green" }),
                e.jsx(me, { icon: "❌", label: "Cancelled", color: "red" }),
                e.jsx(me, {
                  icon: "🔄",
                  label: "Rescheduled",
                  color: "orange",
                }),
                e.jsx(me, { icon: "🏠", label: "WFH", color: "blue" }),
                e.jsx(me, { icon: "🎊", label: "Holiday", color: "orange" }),
                e.jsx(me, {
                  icon: "🎉",
                  label: "Company Leave",
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
function ha({
  currentDate: t,
  events: r,
  holidays: a,
  onMonthChange: m,
  onDateClick: x,
  isWeekend: i,
}) {
  const b = t.getFullYear(),
    p = t.getMonth(),
    c = [
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
    v = new Date(b, p + 1, 0).getDate(),
    A = new Date(b, p, 1).getDay(),
    E = [];
  for (let h = 0; h < A; h++) E.push(null);
  for (let h = 1; h <= v; h++) E.push(h);
  const T = (h) => {
      if (!h) return null;
      const w = `${b}-${String(p + 1).padStart(2, "0")}-${String(h).padStart(2, "0")}`;
      return r == null ? void 0 : r.find((f) => f.date === w);
    },
    S = (h) => {
      if (!h) return null;
      const w = `${b}-${String(p + 1).padStart(2, "0")}-${String(h).padStart(2, "0")}`;
      let f = a.find((j) => j.date == w);
      return (
        !f && i(b, p, h) && (f = { date: w, name: "Weekend", isFloater: !1 }), f
      );
    },
    D = (h) => {
      if (!h) return !1;
      const w = new Date();
      return h === w.getDate() && p === w.getMonth() && b === w.getFullYear();
    };
  return e.jsxs("div", {
    className:
      "bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-pink-900/60 border border-cyan-400/30 rounded-2xl p-1 sm:p-2 sm:p-6 backdrop-blur-xl animate-slide-up shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:border-cyan-400/50 h-full flex flex-col",
    children: [
      e.jsxs("div", {
        className:
          "flex items-center justify-between mb-1 sm:mb-2 flex-shrink-0",
        children: [
          e.jsx("button", {
            onClick: () => m(-1),
            className:
              "p-2 sm:p-3 hover:bg-gradient-to-br hover:from-purple-500/40 hover:to-pink-500/30 rounded-lg transition-all duration-300 hover:scale-110 transform",
            children: e.jsx(he, {
              className: "w-5 sm:w-6 h-5 sm:h-6 text-cyan-300",
            }),
          }),
          e.jsxs("h2", {
            className:
              "text-xl sm:text-2xl sm:text-3xl font-black text-center flex-1 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent",
            children: [c[p], " ", b],
          }),
          e.jsx("button", {
            onClick: () => m(1),
            className:
              "p-2 sm:p-3 hover:bg-gradient-to-br hover:from-purple-500/40 hover:to-pink-500/30 rounded-lg transition-all duration-300 hover:scale-110 transform",
            children: e.jsx(rt, {
              className: "w-5 sm:w-6 h-5 sm:h-6 text-cyan-300",
            }),
          }),
        ],
      }),
      e.jsx("div", {
        className: "grid grid-cols-7 gap-1 sm:gap-2 mb-1 sm:mb-2 flex-shrink-0",
        children: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
          (h, w) =>
            e.jsx(
              "div",
              {
                className: `text-center text-xs font-bold py-2 sm:py-3 uppercase tracking-wider ${w === 0 || w === 6 ? "bg-gradient-to-r from-orange-400/30 to-pink-400/30 text-orange-200 rounded-lg" : "text-cyan-300"}`,
                children: h,
              },
              h,
            ),
        ),
      }),
      e.jsx("div", {
        className: "grid grid-cols-7 gap-1 sm:gap-2 flex-1",
        children: E.map((h, w) => {
          if (!h) return e.jsx("div", { className: "aspect-square" }, w);
          const f = T(h),
            j = S(h),
            U = D(h);
          let N =
              "bg-gradient-to-br from-slate-700/40 to-slate-600/20 border-slate-500/30 hover:from-slate-600/60 hover:to-slate-500/40",
            u = null;
          return (
            U
              ? ((N =
                  "bg-gradient-to-br from-yellow-500/60 to-orange-500/50 border-yellow-400/70 shadow-lg shadow-yellow-500/40 hover:shadow-2xl"),
                (u = "📅"))
              : i(b, p, h)
                ? ((N =
                    "bg-gradient-to-br from-orange-600/60 to-amber-600/50 border-orange-400/60 hover:from-orange-500/80 hover:to-amber-500/60 shadow-lg shadow-orange-500/20"),
                  (u = "🎊"))
                : f
                  ? f.booked && !f.isCanceled
                    ? ((N =
                        "bg-gradient-to-br from-green-600/70 to-emerald-600/60 border-green-400/70 shadow-lg shadow-green-500/40 hover:shadow-2xl hover:from-green-500/90 hover:to-emerald-500/80"),
                      (u = "✅"))
                    : f.isCanceled
                      ? ((N =
                          "bg-gradient-to-br from-red-600/70 to-pink-600/60 border-red-400/70 shadow-lg shadow-red-500/30 hover:shadow-2xl hover:from-red-500/90 hover:to-pink-500/80"),
                        (u = "❌"))
                      : f.isWFH &&
                        ((N =
                          "bg-gradient-to-br from-blue-600/70 to-cyan-600/60 border-blue-400/70 shadow-lg shadow-blue-500/40 hover:shadow-2xl"),
                        (u = "🏠"))
                  : j &&
                    ((N =
                      "bg-gradient-to-br from-purple-600/70 to-violet-600/60 border-purple-400/70 shadow-lg shadow-purple-500/30"),
                    (u = "🎉")),
            e.jsxs(
              "button",
              {
                onClick: () => x(h),
                className: `aspect-square ${N} border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 hover:shadow-2xl transform active:scale-95 font-bold text-white`,
                children: [
                  e.jsx("span", {
                    className: "text-xs sm:text-sm leading-tight",
                    children: h,
                  }),
                  u &&
                    e.jsx("span", {
                      className: "text-base sm:text-lg mt-0.5 animate-float",
                      children: u,
                    }),
                ],
              },
              w,
            )
          );
        }),
      }),
    ],
  });
}
function pa({
  date: t,
  events: r = [],
  holidays: a = [],
  onClose: m,
  onBook: x,
  onCancel: i,
  isWeekend: b,
}) {
  const [p, c, v] = t.split("-").map(Number),
    A = new Date(p, c - 1, v),
    E = A.toLocaleDateString("en-US", { weekday: "long" }),
    T = A.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    S = new Date().toISOString().split("T")[0],
    D = b(p, c - 1, v),
    h = S == t,
    w = A < new Date(),
    f = r.filter((y) => y.date === t) || [];
  let j = a.find((y) => y.date === t);
  !j && D && (j = { name: "Weekend", isFloater: !1 });
  const U = !w && !D && !j,
    N = f.length > 0,
    u = f[0],
    M = u == null ? void 0 : u.isCanceled,
    L = (u == null ? void 0 : u.booked) && !M,
    B = L && !w,
    k = M && !w,
    g = (y) =>
      y.isCanceled
        ? "❌"
        : y.booked
          ? "✅"
          : y.isWFH
            ? "🏠"
            : y.isLeave
              ? "🎉"
              : "📅",
    C = (y) =>
      y.isCanceled
        ? "bg-gradient-to-br from-red-600/40 to-pink-600/30 border-red-400/60 shadow-lg shadow-red-500/30"
        : y.booked
          ? "bg-gradient-to-br from-green-600/40 to-emerald-600/30 border-green-400/60 shadow-lg shadow-green-500/30"
          : y.isWFH
            ? "bg-gradient-to-br from-blue-600/40 to-cyan-600/30 border-blue-400/60 shadow-lg shadow-blue-500/30"
            : y.isLeave
              ? "bg-gradient-to-br from-purple-600/40 to-violet-600/30 border-purple-400/60 shadow-lg shadow-purple-500/30"
              : "bg-gradient-to-br from-slate-600/40 to-slate-500/30 border-slate-400/60",
    s = (y) =>
      y.isCanceled
        ? "Cancelled"
        : y.booked
          ? "Scheduled"
          : y.isWFH
            ? "Work From Home"
            : y.isLeave
              ? `Leave - ${(y.leaveType || "NONE").replace(/_/g, " ")}`
              : "Event",
    P = () => {
      if (h) return "📍";
      if (D && !j) return "🌤️";
      if (j) return "🎊";
      if (N) {
        if (L) return "✅";
        if (M) return "❌";
      }
      return "📅";
    };
  return e.jsx("div", {
    className:
      "fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm",
    children: e.jsxs("div", {
      className:
        "w-full max-w-md h-[90vh] sm:h-auto bg-gradient-to-br from-purple-900/95 via-blue-900/90 to-slate-900/95 border border-cyan-400/40 rounded-3xl shadow-2xl backdrop-blur-xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 transform hover:shadow-cyan-500/50 transition-all flex flex-col",
      children: [
        e.jsxs("div", {
          className:
            "bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 p-4 sm:p-8 text-center relative overflow-hidden flex-shrink-0",
          children: [
            e.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 animate-shimmer",
            }),
            e.jsx("button", {
              onClick: m,
              className:
                "absolute top-3 sm:top-4 right-3 sm:right-4 text-white/80 hover:text-white hover:scale-125 hover:rotate-90 transition-all duration-300 text-xl sm:text-2xl transform",
              children: "✕",
            }),
            e.jsx("div", {
              className:
                "text-5xl sm:text-6xl mb-2 sm:mb-4 animate-bounce relative z-10",
              children: P(),
            }),
            e.jsx("h2", {
              className:
                "text-2xl sm:text-3xl font-black text-white mb-1 sm:mb-2 relative z-10",
              children: E,
            }),
            e.jsx("p", {
              className:
                "text-white/90 text-xs sm:text-sm font-semibold relative z-10",
              children: T,
            }),
            h &&
              e.jsx("div", {
                className:
                  "mt-2 sm:mt-3 inline-block px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-yellow-300/30 to-orange-300/30 border border-yellow-300/60 rounded-full text-xs text-yellow-100 font-bold backdrop-blur-sm relative z-10 shadow-lg",
                children: "⚡ Today",
              }),
          ],
        }),
        e.jsxs("div", {
          className:
            "p-4 sm:p-6 space-y-3 sm:space-y-4 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-slate-700 flex-1",
          children: [
            j &&
              e.jsx("div", {
                className:
                  "p-4 sm:p-5 rounded-xl bg-gradient-to-br from-orange-600/40 via-amber-600/30 to-orange-600/20 border-2 border-orange-400/60 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/30",
                children: e.jsxs("div", {
                  className: "flex items-start gap-2 sm:gap-3",
                  children: [
                    e.jsx("span", {
                      className: "text-2xl sm:text-3xl animate-bounce",
                      children: "🎊",
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("h3", {
                          className:
                            "font-bold text-orange-100 text-base sm:text-lg",
                          children: "Holiday",
                        }),
                        e.jsx("p", {
                          className: "text-white/90 text-xs sm:text-sm mt-1",
                          children: j.name,
                        }),
                        j.isFloater &&
                          e.jsx("p", {
                            className:
                              "text-orange-200 text-xs mt-1 sm:mt-2 font-semibold",
                            children: "✨ Floater day",
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            D &&
              !j &&
              e.jsx("div", {
                className:
                  "p-4 sm:p-5 rounded-xl bg-gradient-to-br from-yellow-600/40 to-yellow-700/30 border-2 border-yellow-400/60 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/20",
                children: e.jsxs("div", {
                  className: "flex items-center gap-2 sm:gap-3",
                  children: [
                    e.jsx("span", {
                      className: "text-2xl sm:text-3xl animate-float",
                      children: "🌅",
                    }),
                    e.jsx("p", {
                      className:
                        "text-yellow-100 font-bold text-sm sm:text-base",
                      children: "Weekend - No booking available",
                    }),
                  ],
                }),
              }),
            f.length > 0 &&
              e.jsxs("div", {
                className: "space-y-2 sm:space-y-3",
                children: [
                  e.jsxs("h3", {
                    className:
                      "text-white font-black text-xs sm:text-sm uppercase tracking-widest opacity-80",
                    children: ["📋 Events (", f.length, ")"],
                  }),
                  f.map((y, O) =>
                    e.jsxs(
                      "div",
                      {
                        className: `p-3 sm:p-4 rounded-xl border-2 ${C(y)} transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`,
                        style: { animationDelay: `${O * 50}ms` },
                        children: [
                          e.jsx("div", {
                            className: "flex items-start justify-between",
                            children: e.jsxs("div", {
                              className: "flex-1",
                              children: [
                                e.jsxs("h4", {
                                  className:
                                    "font-bold text-white mb-1 sm:mb-2 flex items-center gap-1 sm:gap-2 text-base sm:text-lg",
                                  children: [
                                    e.jsx("span", {
                                      className: "text-xl sm:text-2xl",
                                      children: g(y),
                                    }),
                                    s(y),
                                  ],
                                }),
                                y.time &&
                                  e.jsxs("p", {
                                    className:
                                      "text-white/80 text-xs sm:text-sm flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2 font-semibold",
                                    children: [
                                      e.jsx(fe, {
                                        size: 14,
                                        className: "text-cyan-300",
                                      }),
                                      y.time,
                                    ],
                                  }),
                                y.amount !== void 0 &&
                                  e.jsxs("p", {
                                    className: `text-xs sm:text-sm font-bold flex items-center gap-1 sm:gap-2 ${y.amount === 0 ? "text-red-300" : "text-green-300"}`,
                                    children: [
                                      e.jsx(ke, { size: 14 }),
                                      "₹",
                                      y.amount,
                                    ],
                                  }),
                              ],
                            }),
                          }),
                          B &&
                            e.jsx("button", {
                              onClick: () => i(t),
                              className:
                                "w-full mt-2 sm:mt-3 py-2 px-3 bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 hover:from-red-500 hover:via-rose-500 hover:to-pink-500 text-white font-bold rounded-lg transition-all text-xs uppercase tracking-wider shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transform",
                              children: "Cancel Schedule ❌",
                            }),
                          k &&
                            e.jsx("button", {
                              onClick: () => x(t),
                              className:
                                "w-full mt-2 sm:mt-3 py-2 px-3 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 hover:from-orange-500 hover:via-amber-500 hover:to-yellow-500 text-white font-bold rounded-lg transition-all text-xs uppercase tracking-wider shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transform",
                              children: "Reschedule 🔄",
                            }),
                        ],
                      },
                      O,
                    ),
                  ),
                ],
              }),
            f.length === 0 &&
              !j &&
              !D &&
              e.jsx("div", {
                className:
                  "p-4 sm:p-5 rounded-xl bg-gradient-to-br from-slate-600/30 to-slate-500/20 border-2 border-slate-400/40 text-center transform hover:scale-105 transition-all duration-300",
                children: e.jsx("p", {
                  className: "text-slate-200 text-xs sm:text-sm font-semibold",
                  children: "✨ No events scheduled",
                }),
              }),
            U &&
              f.length === 0 &&
              e.jsxs("div", {
                className:
                  "space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-cyan-400/20 animate-slide-up",
                children: [
                  e.jsx("p", {
                    className:
                      "text-white font-bold text-center text-base sm:text-lg",
                    children: "🍽️ Schedule food for this day?",
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-2 gap-2 sm:gap-3",
                    children: [
                      e.jsx("button", {
                        onClick: () => x(t),
                        className:
                          "py-2 sm:py-3 px-3 sm:px-4 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 hover:from-green-500 hover:via-emerald-500 hover:to-teal-500 text-white font-bold rounded-lg transition-all text-xs sm:text-sm uppercase tracking-wider hover:shadow-2xl hover:scale-110 active:scale-95 transform shadow-lg",
                        children: "Yes ✅",
                      }),
                      e.jsx("button", {
                        onClick: m,
                        className:
                          "py-2 sm:py-3 px-3 sm:px-4 bg-gradient-to-br from-gray-600 via-slate-600 to-slate-700 hover:from-gray-500 hover:via-slate-500 hover:to-slate-600 text-white font-bold rounded-lg transition-all text-xs sm:text-sm uppercase tracking-wider hover:shadow-2xl hover:scale-110 active:scale-95 transform shadow-lg",
                        children: "No ❌",
                      }),
                    ],
                  }),
                ],
              }),
            w &&
              e.jsx("div", {
                className:
                  "p-4 sm:p-5 rounded-xl bg-gradient-to-br from-slate-600/40 to-slate-500/30 border-2 border-slate-400/50 text-center transform hover:scale-105 transition-all duration-300 shadow-lg",
                children: e.jsx("p", {
                  className: "text-slate-200 text-xs sm:text-sm font-bold",
                  children: "⏰ Past date - No changes allowed",
                }),
              }),
          ],
        }),
        e.jsx("div", {
          className:
            "p-3 sm:p-4 border-t border-cyan-400/20 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 flex justify-end flex-shrink-0",
          children: e.jsx("button", {
            onClick: m,
            className:
              "py-1 sm:py-2 px-4 sm:px-6 bg-gradient-to-r from-cyan-500/40 to-purple-500/40 hover:from-cyan-500/70 hover:to-purple-500/70 text-white font-bold rounded-lg transition-all text-xs sm:text-sm uppercase tracking-wider hover:shadow-lg shadow-md transform hover:scale-105 active:scale-95 border border-cyan-400/50",
            children: "Close",
          }),
        }),
      ],
    }),
  });
}
function ua() {
  var B;
  const { user: t } = pe(),
    [r, a] = o.useState(!1),
    [m, x] = o.useState(new Date().getFullYear()),
    [i, b] = o.useState(new Date().getMonth()),
    [p, c] = o.useState(t == null ? void 0 : t.empNo),
    [v, A] = o.useState(null),
    [E, T] = o.useState([]),
    [S, D] = o.useState({
      Bookings: [],
      Amount: 0,
      PerMeal: 0,
      Canceled: [],
      LeaveDays: [],
      CompanyHolidays: [],
      WorkingDays: 0,
    });
  o.useEffect(() => {
    if (!(t != null && t.admin))
      return (window.location.href = "https://foodease.ajayos.in/");
    c(p || (t == null ? void 0 : t.empNo));
  }, [t]);
  const h = [
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
    w = async () => {
      a(!0),
        D({
          Bookings: [],
          Amount: 0,
          PerMeal: 0,
          Canceled: [],
          LeaveDays: [],
          CompanyHolidays: [],
          WorkingDays: 0,
        });
      try {
        const {
          error: k,
          message: g,
          data: C,
        } = await re.post(`/foodease/calendar/report/${p}`, {
          year: m,
          month: i + 1 > 9 ? i + 1 : "0" + (i + 1),
        });
        if (k) {
          console.log(g);
          return;
        } else C && D(C);
      } catch (k) {
        console.log("API call failed:", k);
      } finally {
        a(!1);
      }
    };
  o.useEffect(() => {
    w();
  }, [p, i, m]);
  const f = [2024, 2025, 2026],
    j = () => {
      a(!0), w();
    },
    U = () => {
      window.history.back();
    },
    u = (() => {
      const k = new Date(m, i + 1, 0).getDate();
      return {
        month: h[i],
        year: m,
        totalBookings: S.Bookings.length,
        totalCancelled: S.Canceled.length,
        totalAmount: S.Amount,
        perDayRate: S.PerMeal,
        totalHolidays: S.CompanyHolidays.length,
        totalLeaves: S.LeaveDays.length,
        workingDays: S.WorkingDays,
        daysInMonth: k,
        bookingDates: S.Bookings,
        cancelledDates: S.Canceled,
        holidayDates: S.CompanyHolidays,
        leaveDates: S.LeaveDays,
      };
    })(),
    M = (k) => {
      let g = [];
      switch (k) {
        case "booking":
          g = u.bookingDates;
          break;
        case "cancelled":
          g = u.cancelledDates;
          break;
        case "holiday":
          g = u.holidayDates;
          break;
        case "leave":
          g = u.leaveDates;
          break;
      }
      T(g), A(k);
    },
    L = (k) => {
      let g = `FoodEase Report - ${u.month} ${u.year}

`;
      if (
        ((g += `Total Bookings: ${u.totalBookings}
Total Cancelled: ${u.totalCancelled}
`),
        (g += `Total Amount: ${u.totalAmount}
Per Day Rate: ${u.perDayRate}
`),
        k === "txt")
      ) {
        const C = new Blob([g], { type: "text/plain;charset=utf-8" }),
          s = window.URL.createObjectURL(C),
          P = document.createElement("a");
        (P.href = s),
          (P.download = `foodease-report-${u.month}-${u.year}.txt`),
          document.body.appendChild(P),
          P.click(),
          document.body.removeChild(P),
          window.URL.revokeObjectURL(s);
      } else if (k === "csv") {
        g = `Metric,Value
Total Bookings,${u.totalBookings}
Total Cancelled,${u.totalCancelled}
Total Amount,${u.totalAmount}
Per Day Rate,${u.perDayRate}`;
        const C = new Blob([g], { type: "text/csv;charset=utf-8" }),
          s = window.URL.createObjectURL(C),
          P = document.createElement("a");
        (P.href = s),
          (P.download = `foodease-report-${u.month}-${u.year}.csv`),
          document.body.appendChild(P),
          P.click(),
          document.body.removeChild(P),
          window.URL.revokeObjectURL(s);
      }
    };
  return e.jsxs("div", {
    className: "min-h-screen w-full relative overflow-hidden bg-gray-950",
    children: [
      e.jsxs("div", {
        className:
          "fixed inset-0 opacity-50 pointer-events-none overflow-hidden",
        children: [
          e.jsx("div", {
            className:
              "absolute -top-40 -left-40 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl animate-blob-slow bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600",
            style: { animationDuration: "25s", animationDelay: "0s" },
          }),
          e.jsx("div", {
            className:
              "absolute -bottom-40 -right-40 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl animate-blob-fast bg-gradient-to-br from-pink-400 via-red-500 to-orange-600",
            style: { animationDuration: "20s", animationDelay: "2s" },
          }),
          e.jsx("div", {
            className:
              "absolute top-1/2 left-1/3 w-80 h-80 rounded-full mix-blend-screen filter blur-3xl opacity-80 animate-blob-medium bg-gradient-to-br from-purple-400 via-indigo-500 to-violet-600",
            style: { animationDuration: "28s", animationDelay: "1s" },
          }),
          e.jsx("div", {
            className:
              "absolute top-1/4 right-1/4 w-72 h-72 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob-fast bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600",
            style: { animationDuration: "22s", animationDelay: "3s" },
          }),
          e.jsx("div", {
            className:
              "absolute bottom-1/4 left-1/2 w-64 h-64 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob-slow bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600",
            style: { animationDuration: "30s", animationDelay: "4s" },
          }),
          e.jsx("div", {
            className:
              "absolute top-20 right-20 w-60 h-60 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob-medium bg-gradient-to-br from-lime-400 via-green-500 to-emerald-600",
            style: { animationDuration: "26s", animationDelay: "5s" },
          }),
          e.jsx("div", {
            className:
              "absolute bottom-20 left-20 w-88 h-88 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob-ultra-slow bg-gradient-to-br from-rose-400 via-pink-500 to-fuchsia-600",
            style: { animationDuration: "35s", animationDelay: "6s" },
          }),
          e.jsx("div", {
            className:
              "absolute top-40 left-60 w-52 h-52 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob-extra-fast bg-gradient-to-br from-indigo-400 via-violet-500 to-purple-600",
            style: { animationDuration: "15s", animationDelay: "7s" },
          }),
        ],
      }),
      e.jsx("div", {
        className: "fixed inset-0 pointer-events-none opacity-10",
        children: e.jsx("div", {
          className:
            "absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(6,182,212,.1)_25%,rgba(6,182,212,.1)_26%,transparent_27%,transparent_74%,rgba(6,182,212,.1)_75%,rgba(6,182,212,.1)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(6,182,212,.1)_25%,rgba(6,182,212,.1)_26%,transparent_27%,transparent_74%,rgba(6,182,212,.1)_75%,rgba(6,182,212,.1)_76%,transparent_77%,transparent)] bg-[length:50px_50px] animate-grid-slow",
        }),
      }),
      e.jsx("div", {
        className: "relative z-10",
        children: e.jsxs("div", {
          className: "min-h-screen w-full flex flex-col p-4 md:p-8 gap-8",
          children: [
            e.jsxs("div", {
              className:
                "flex items-center justify-between animate-fade-in-down",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("button", {
                      onClick: U,
                      className:
                        "p-3 rounded-2xl border backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center font-semibold bg-gradient-to-br from-blue-600/80 via-cyan-600/80 to-blue-700/80 hover:from-blue-500/90 hover:via-cyan-500/90 hover:to-blue-600/90 border-cyan-400/70 text-white shadow-blue-500/40 active:scale-95 hover:scale-110 animate-pulse-slow",
                      children: e.jsx(he, { className: "w-5 h-5" }),
                    }),
                    e.jsx("div", {
                      children: e.jsx("h1", {
                        className:
                          "text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-shift",
                        children: "FoodEase",
                      }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex items-center gap-2 flex-wrap w-full sm:w-auto justify-end",
                  children: [
                    e.jsxs("button", {
                      onClick: () => L("txt"),
                      className:
                        "px-3 py-2 rounded-2xl border backdrop-blur-md shadow-xl hover:shadow-2xl transition-all font-bold bg-gradient-to-br from-orange-600/80 to-amber-600/80 hover:from-orange-500/90 hover:to-amber-500/90 border-orange-400/70 text-white shadow-orange-500/40 active:scale-95 hover:scale-110 flex items-center gap-2 animate-pulse-slow",
                      children: [e.jsx(ze, { className: "w-5 h-5" }), " TXT"],
                    }),
                    e.jsxs("button", {
                      onClick: () => L("csv"),
                      className:
                        "px-3 py-2 rounded-2xl border backdrop-blur-md shadow-xl hover:shadow-2xl transition-all font-bold bg-gradient-to-br from-green-600/80 to-emerald-600/80 hover:from-green-500/90 hover:to-emerald-500/90 border-green-400/70 text-white shadow-green-500/40 active:scale-95 hover:scale-110 flex items-center gap-2 animate-pulse-slow",
                      children: [e.jsx(ze, { className: "w-5 h-5" }), " CSV"],
                    }),
                    e.jsxs("button", {
                      onClick: j,
                      className:
                        "px-3 py-2 rounded-2xl border backdrop-blur-md shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 font-semibold bg-gradient-to-br from-pink-600/80 via-rose-600/80 to-pink-700/80 hover:from-pink-500/90 hover:via-rose-500/90 hover:to-pink-600/90 text-white border-pink-400/70 shadow-pink-500/40 active:scale-95 hover:scale-110",
                      children: [
                        e.jsx(Mt, {
                          className: `w-5 h-5 ${r ? "animate-spin" : ""}`,
                        }),
                        " ",
                        "RELOAD",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: `grid grid-cols-1 ${t != null && t.admin ? "md:grid-cols-3" : "md:grid-cols-2"} gap-6`,
              children: [
                e.jsxs("div", {
                  className:
                    "p-6 rounded-3xl border backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all bg-gradient-to-br from-indigo-600/50 via-purple-600/40 to-indigo-700/50 border-indigo-400/60 hover:border-indigo-300/80 hover:scale-105 duration-500 group relative overflow-hidden animate-float",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl",
                    }),
                    e.jsxs("div", {
                      className: "relative z-10",
                      children: [
                        e.jsxs("label", {
                          className:
                            "block text-sm font-bold mb-4 flex items-center gap-2 text-indigo-200 animate-pulse",
                          children: [
                            e.jsx(st, {
                              className:
                                "w-5 h-5 text-indigo-300 animate-spin-slow",
                            }),
                            " ",
                            "Select Year",
                          ],
                        }),
                        e.jsx("select", {
                          value: m,
                          onChange: (k) => x(parseInt(k.target.value)),
                          className:
                            "w-full px-4 py-3 rounded-xl border bg-gray-900/80 border-blue-400/60 hover:border-blue-300/80 text-white font-bold focus:border-blue-300 outline-none transition-all cursor-pointer text-sm appearance-none bg-no-repeat pr-10 bg-right shadow-lg hover:shadow-xl backdrop-blur-md hover:animate-shake",
                          style: {
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2360a5fa' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                          },
                          children: f.map((k, g) =>
                            e.jsx(
                              "option",
                              {
                                value: k,
                                className: "bg-gray-900 text-white",
                                children: k,
                              },
                              g,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "p-6 rounded-3xl border backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all bg-gradient-to-br from-blue-600/50 via-cyan-600/40 to-blue-700/50 border-blue-400/60 hover:border-blue-300/80 hover:scale-105 duration-500 group relative overflow-hidden animate-float",
                  style: { animationDelay: "0.1s" },
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl",
                    }),
                    e.jsxs("div", {
                      className: "relative z-10",
                      children: [
                        e.jsxs("label", {
                          className:
                            "block text-sm font-bold mb-4 flex items-center gap-2 text-blue-200 animate-pulse",
                          children: [
                            e.jsx(et, {
                              className:
                                "w-5 h-5 text-blue-300 animate-bounce-slow",
                            }),
                            " ",
                            "Select Month",
                          ],
                        }),
                        e.jsx("select", {
                          value: i,
                          onChange: (k) => b(parseInt(k.target.value)),
                          className:
                            "w-full px-4 py-3 rounded-xl border bg-gray-900/80 border-blue-400/60 hover:border-blue-300/80 text-white font-bold focus:border-blue-300 outline-none transition-all cursor-pointer text-sm appearance-none bg-no-repeat pr-10 bg-right shadow-lg hover:shadow-xl backdrop-blur-md hover:animate-shake",
                          style: {
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2360a5fa' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                          },
                          children: h.map((k, g) =>
                            e.jsx(
                              "option",
                              {
                                value: g,
                                className: "bg-gray-900 text-white",
                                children: k,
                              },
                              g,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (t == null ? void 0 : t.admin) &&
                  e.jsxs("div", {
                    className:
                      "p-6 rounded-3xl border backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all bg-gradient-to-br from-pink-600/50 via-rose-600/40 to-pink-700/50 border-pink-400/60 hover:border-pink-300/80 hover:scale-105 duration-500 group relative overflow-hidden animate-float",
                    style: { animationDelay: "0.2s" },
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-br from-pink-500/30 to-rose-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl",
                      }),
                      e.jsxs("div", {
                        className: "relative z-10",
                        children: [
                          e.jsxs("label", {
                            className:
                              "block text-sm font-bold mb-4 flex items-center gap-2 text-pink-200 animate-pulse",
                            children: [
                              e.jsx(Fe, {
                                className:
                                  "w-5 h-5 text-pink-300 animate-spin-slow",
                              }),
                              " ",
                              "Select User",
                            ],
                          }),
                          e.jsx("select", {
                            value: p,
                            onChange: (k) => c(k.target.value),
                            className:
                              "w-full px-4 py-3 rounded-xl border bg-gray-900/80 border-pink-400/60 hover:border-pink-300/80 text-white font-bold focus:border-pink-300 outline-none transition-all cursor-pointer text-sm appearance-none bg-no-repeat pr-10 bg-right shadow-lg hover:shadow-xl backdrop-blur-md hover:animate-shake",
                            style: {
                              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23f472b6' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                            },
                            children:
                              (B = t == null ? void 0 : t.users) == null
                                ? void 0
                                : B.map((k) =>
                                    e.jsxs(
                                      "option",
                                      {
                                        value: k.empNo,
                                        className: "bg-gray-900 text-white",
                                        children: [k.name, " (", k.empNo, ")"],
                                      },
                                      k.empNo,
                                    ),
                                  ),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
            r
              ? e.jsx(ba, {})
              : e.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                  children: [
                    {
                      icon: "✅",
                      label: "Total Bookings",
                      value: u.totalBookings,
                      gradient: "from-emerald-500 to-green-600",
                      border: "border-emerald-400",
                      text: "text-emerald-300",
                      onClick: () => M("booking"),
                      color: "emerald",
                    },
                    {
                      icon: "❌",
                      label: "Total Cancelled",
                      value: u.totalCancelled,
                      gradient: "from-red-500 to-rose-600",
                      border: "border-red-400",
                      text: "text-red-300",
                      onClick: () => M("cancelled"),
                      color: "red",
                    },
                    {
                      icon: "💰",
                      label: "Total Amount",
                      value: `₹${u.totalAmount}`,
                      gradient: "from-yellow-500 to-orange-600",
                      border: "border-yellow-400",
                      text: "text-yellow-300",
                      color: "yellow",
                    },
                    {
                      icon: "📊",
                      label: "Per Day Rate",
                      value: `₹${u.perDayRate}`,
                      gradient: "from-indigo-500 to-blue-600",
                      border: "border-indigo-400",
                      text: "text-indigo-300",
                      color: "indigo",
                    },
                    {
                      icon: "🎊",
                      label: "Total Holidays",
                      value: u.totalHolidays,
                      gradient: "from-orange-500 to-amber-600",
                      border: "border-orange-400",
                      text: "text-orange-300",
                      onClick: () => M("holiday"),
                      color: "orange",
                    },
                    {
                      icon: "🎉",
                      label: "Total Leaves",
                      value: u.totalLeaves,
                      gradient: "from-pink-500 to-rose-600",
                      border: "border-pink-400",
                      text: "text-pink-300",
                      onClick: () => M("leave"),
                      color: "pink",
                    },
                    {
                      icon: "📅",
                      label: "Working Days",
                      value: u.workingDays,
                      gradient: "from-violet-500 to-purple-600",
                      border: "border-violet-400",
                      text: "text-violet-300",
                      color: "violet",
                    },
                    {
                      icon: "🔢",
                      label: "Days in Month",
                      value: u.daysInMonth,
                      gradient: "from-cyan-500 to-teal-600",
                      border: "border-cyan-400",
                      text: "text-cyan-300",
                      color: "cyan",
                    },
                  ].map((k, g) =>
                    e.jsx(ga, Q(X({}, k), { delay: g * 0.1 }), k.label),
                  ),
                }),
            v && e.jsx(fa, { type: v, dates: E, onClose: () => A(null) }),
          ],
        }),
      }),
      e.jsx("style", {
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
function ba() {
  return e.jsx("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
    children: [1, 2, 3, 4, 5, 6, 7, 8].map((t) =>
      e.jsxs(
        "div",
        {
          className:
            "p-6 rounded-3xl bg-gray-800/60 border border-gray-700/50 overflow-hidden backdrop-blur-lg relative shadow-xl animate-pulse-slow",
          style: { animationDelay: `${t * 0.1}s` },
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3 mb-4 animate-shimmer",
              children: [
                e.jsx("div", {
                  className:
                    "w-8 h-8 rounded-xl bg-gradient-to-r from-cyan-400/40 to-purple-400/40 animate-spin-slow",
                }),
                e.jsx("div", {
                  className:
                    "h-4 bg-gradient-to-r from-gray-600/60 to-transparent rounded w-24",
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "h-10 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-xl w-20 mb-4 animate-shimmer",
            }),
            e.jsx("div", {
              className:
                "relative w-full h-3 bg-gray-700/60 rounded overflow-hidden animate-shimmer",
              children: e.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent skeleton-loading",
              }),
            }),
            e.jsx("div", {
              className: "mt-3 h-2 bg-gray-700/40 rounded w-12 animate-shimmer",
            }),
          ],
        },
        t,
      ),
    ),
  });
}
function ga({
  icon: t,
  label: r,
  value: a,
  gradient: m,
  border: x,
  text: i,
  onClick: b,
  delay: p = 0,
  color: c = "blue",
}) {
  const v = {
    emerald: "shadow-emerald-500/50",
    red: "shadow-red-500/50",
    yellow: "shadow-yellow-500/50",
    indigo: "shadow-indigo-500/50",
    orange: "shadow-orange-500/50",
    pink: "shadow-pink-500/50",
    violet: "shadow-violet-500/50",
    cyan: "shadow-cyan-500/50",
  };
  return e.jsxs("div", {
    onClick: b,
    className: `p-6 rounded-3xl bg-gradient-to-br ${m}/20 ${x}/50 border backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden cursor-pointer hover:scale-110 active:scale-95 animate-stagger-fade ${v[c]} hover:${v[c]} hover:rotate-1`,
    style: { animationDelay: `${p}s` },
    children: [
      e.jsx("div", {
        className:
          "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-white/20 to-transparent",
      }),
      e.jsx("div", {
        className: `absolute -inset-4 opacity-0 group-hover:opacity-30 blur-3xl transition-all duration-500 bg-gradient-to-br ${m} rounded-3xl`,
        style: { zIndex: -1 },
      }),
      e.jsxs("div", {
        className: "relative z-10 flex items-center gap-3 mb-4",
        children: [
          e.jsx("span", {
            className:
              "text-2xl animate-bounce-slow group-hover:scale-125 transition-transform duration-300",
            children: t,
          }),
          e.jsx("p", {
            className: `text-sm text-gray-300 font-bold truncate ${i} animate-fade-in-up`,
            children: r,
          }),
        ],
      }),
      e.jsx("p", {
        className:
          "text-3xl font-black bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent animate-gradient-shift",
        children: a,
      }),
    ],
  });
}
function fa({ type: t, dates: r, onClose: a }) {
  const x = {
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
  }[t];
  return e.jsx("div", {
    className:
      "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-3xl animate-fade-in",
    children: e.jsxs("div", {
      className: `w-full max-w-md bg-gray-900/95 border-t-4 ${x.border} rounded-3xl shadow-2xl backdrop-blur-2xl overflow-hidden animate-slide-up border border-gray-700/50`,
      children: [
        e.jsxs("div", {
          className: `${x.header} p-6 relative border-b border-gray-700/50 backdrop-blur-xl`,
          children: [
            e.jsx("button", {
              onClick: a,
              className:
                "absolute top-3 right-3 text-gray-400 hover:text-gray-200 hover:scale-110 hover:rotate-90 transition-all text-xl font-bold duration-300 animate-pulse-slow",
              children: "✕",
            }),
            e.jsx("h2", {
              className:
                "text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent animate-gradient-shift",
              children: x.title,
            }),
            e.jsxs("p", {
              className: "text-gray-400 text-sm mt-1 font-semibold",
              children: ["Total: ", r.length, " dates"],
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "p-6 max-h-96 overflow-y-auto space-y-3 bg-gradient-to-b from-gray-900/60 to-gray-950/60 backdrop-blur-md",
          children:
            r.length === 0
              ? e.jsx("p", {
                  className:
                    "text-center py-8 text-gray-500 text-base animate-pulse",
                  children: "No dates found",
                })
              : r.map((i, b) =>
                  e.jsxs(
                    "div",
                    {
                      className: `p-4 rounded-xl border backdrop-blur-xl transition-all hover:scale-105 hover:shadow-lg bg-gray-800/80 border-gray-700/50 text-gray-200 font-semibold flex items-center gap-3 text-sm group cursor-pointer animate-stagger-fade hover:bg-gray-700/90 hover:border-gray-600/70 bg-gradient-to-br ${x.gradient} hover:animate-shake`,
                      style: { animationDelay: `${b * 0.05}s` },
                      children: [
                        e.jsx("span", {
                          className: `${x.textColor} group-hover:scale-125 transition-transform text-lg group-hover:rotate-12 duration-300`,
                          children: "📍",
                        }),
                        e.jsx("span", { className: "truncate", children: i }),
                      ],
                    },
                    b,
                  ),
                ),
        }),
        e.jsx("div", {
          className:
            "bg-gradient-to-r from-gray-800/90 to-gray-900/90 p-6 border-t border-gray-700/50 backdrop-blur-xl",
          children: e.jsx("button", {
            onClick: a,
            className:
              "w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-600 text-white font-bold transition-all text-base shadow-lg hover:shadow-xl backdrop-blur-xl hover:scale-105 active:scale-95 duration-300 animate-pulse-slow",
            children: "Close",
          }),
        }),
      ],
    }),
  });
}
function va() {
  var d, I, ee, l, $, _, z;
  const [t, r] = o.useState(1),
    [a, m] = o.useState(""),
    [x, i] = o.useState(""),
    [b, p] = o.useState(""),
    [c, v] = o.useState(!1),
    [A, E] = o.useState(""),
    [T, S] = o.useState(""),
    [D, h] = o.useState(""),
    [w, f] = o.useState(!1),
    [j, U] = o.useState(!1),
    [N, u] = o.useState(new Date(2025, 10, 16)),
    M = new Date(2025, 10, 16),
    L = M.getDate(),
    B = new Date(N.getFullYear(), N.getMonth() + 1, 0).getDate(),
    k = new Date(N.getFullYear(), N.getMonth(), 1).getDay(),
    g = {
      "EMP001-15": "booked",
      "EMP002-10": "leave",
      "EMP003-20": "wfh",
      "EMP004-05": "cancelled",
      "EMP005-25": "booked",
    },
    C = new Set(Object.keys(g).map((n) => n.split("-")[1])),
    s = [
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
    P = s.filter(
      (n) =>
        n.name.toLowerCase().includes(D.toLowerCase()) ||
        n.id.toLowerCase().includes(D.toLowerCase()) ||
        n.email.toLowerCase().includes(D.toLowerCase()) ||
        n.role.toLowerCase().includes(D.toLowerCase()),
    ),
    y = [
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
  o.useEffect(() => {
    t === 2 && (f(!0), h(""));
  }, [t]);
  const O = [];
  for (let n = 0; n < k; n++) O.push(null);
  for (let n = 1; n <= B; n++) O.push(n);
  const te = [];
  for (let n = 0; n < O.length; n += 7) te.push(O.slice(n, n + 7));
  const se = () => {
      const n = `${x}-${a}`;
      return g[n];
    },
    le = () => !!se(),
    ne = async () => {
      if (!a || !x || !b) {
        S("Please complete all selections"), U(!1);
        return;
      }
      v(!0), S(""), E("");
      try {
        await new Promise((K) => setTimeout(K, 1500));
        const n = `${x}-${a}`;
        g[n] = b;
        const J = N.toLocaleString("default", {
          month: "long",
          year: "numeric",
        });
        E(`✅ Status updated successfully for ${a} ${J}`),
          U(!1),
          setTimeout(() => {
            r(1), m(""), i(""), p("");
          }, 2e3);
      } catch (n) {
        S("Failed to update status. Please try again."), U(!1);
      } finally {
        v(!1);
      }
    },
    G = () => {
      t > 1 && (r(t - 1), t === 2 && m(""), t === 3 && i(""));
    },
    W = N.toLocaleString("default", { month: "long", year: "numeric" }),
    ue = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    oe = (n) => {
      if (!n) return "";
      const J = n === L && N.getMonth() === M.getMonth(),
        K =
          new Date(N.getFullYear(), N.getMonth(), n).getDay() === 0 ||
          new Date(N.getFullYear(), N.getMonth(), n).getDay() === 6,
        Ie = C.has(n.toString().padStart(2, "0")),
        dt = a === n.toString().padStart(2, "0");
      let ie =
        "relative p-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer border-2 ";
      return (
        J
          ? (ie +=
              "bg-gradient-to-br from-yellow-400 to-orange-500 text-white border-yellow-300 shadow-lg shadow-yellow-500/50")
          : dt
            ? (ie +=
                "bg-gradient-to-br from-blue-500 to-cyan-600 text-white border-blue-300 shadow-lg shadow-blue-500/50")
            : Ie
              ? (ie +=
                  "bg-gradient-to-br from-green-500 to-emerald-600 text-white border-green-300 shadow-lg shadow-green-500/50")
              : K
                ? (ie +=
                    "bg-gray-700/60 text-gray-300 border-gray-600/50 hover:bg-gray-600/70")
                : (ie +=
                    "bg-gray-800/40 text-gray-200 border-gray-700/40 hover:bg-gray-700/60"),
        ie
      );
    };
  return e.jsxs("div", {
    className: "min-h-screen w-full relative overflow-hidden bg-gray-950",
    children: [
      e.jsxs("div", {
        className:
          "fixed inset-0 opacity-30 pointer-events-none overflow-hidden",
        children: [
          e.jsx("div", {
            className:
              "absolute -top-40 -left-40 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl animate-blob-slow bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600",
            style: { animationDuration: "40s" },
          }),
          e.jsx("div", {
            className:
              "absolute -bottom-40 -right-40 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl animate-blob-fast bg-gradient-to-br from-rose-400 via-pink-500 to-red-600",
            style: { animationDuration: "30s", animationDelay: "5s" },
          }),
          e.jsx("div", {
            className:
              "absolute top-1/2 left-1/3 w-80 h-80 rounded-full mix-blend-screen filter blur-3xl opacity-80 animate-blob-medium bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-600",
            style: { animationDuration: "45s", animationDelay: "2s" },
          }),
          Array.from({ length: 15 }).map((n, J) =>
            e.jsx(
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
              J,
            ),
          ),
        ],
      }),
      e.jsx("div", {
        className: "fixed inset-0 pointer-events-none opacity-10",
        children: e.jsx("div", {
          className:
            "absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(34,197,94,.1)_25%,rgba(34,197,94,.1)_26%,transparent_27%,transparent_74%,rgba(34,197,94,.1)_75%,rgba(34,197,94,.1)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(34,197,94,.1)_25%,rgba(34,197,94,.1)_26%,transparent_27%,transparent_74%,rgba(34,197,94,.1)_75%,rgba(34,197,94,.1)_76%,transparent_77%,transparent)] bg-[length:80px_80px]",
        }),
      }),
      e.jsxs("div", {
        className: "relative z-10 w-full p-4 md:p-8",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-4 mb-8 animate-fade-in-down",
            children: [
              e.jsx("button", {
                onClick: G,
                className:
                  "p-3 rounded-2xl border backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center font-semibold bg-gradient-to-br from-slate-600/80 to-gray-700/80 hover:from-slate-500/90 hover:to-gray-600/90 border-slate-400/70 text-white shadow-slate-500/40 active:scale-95 hover:scale-110",
                children: e.jsx(he, { className: "w-5 h-5" }),
              }),
              e.jsxs("div", {
                className: "flex-1",
                children: [
                  e.jsx("h1", {
                    className:
                      "text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-300 via-gray-200 to-white bg-clip-text text-transparent",
                    children: "Advanced Leave Manager",
                  }),
                  e.jsx("p", {
                    className: "text-gray-500 text-sm mt-1",
                    children: W,
                  }),
                ],
              }),
              e.jsx("div", {
                className: "w-64 bg-gray-700/50 rounded-full h-2",
                children: e.jsx("div", {
                  className:
                    "bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full transition-all duration-500 shadow-lg",
                  style: { width: `${(t / 3) * 100}%` },
                }),
              }),
            ],
          }),
          A &&
            e.jsx("div", {
              className:
                "mb-6 p-6 rounded-3xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-400/50 backdrop-blur-lg animate-slide-in-right",
              children: e.jsx("p", {
                className: "text-emerald-300 font-bold text-lg text-center",
                children: A,
              }),
            }),
          T &&
            e.jsx("div", {
              className:
                "mb-6 p-6 rounded-3xl bg-gradient-to-br from-red-600/20 to-rose-600/20 border border-red-400/50 backdrop-blur-lg animate-slide-in-right",
              children: e.jsx("p", {
                className: "text-red-300 font-bold text-lg text-center",
                children: T,
              }),
            }),
          t === 1 &&
            e.jsx("div", {
              className: "max-w-2xl mx-auto animate-fade-in-up",
              children: e.jsxs("div", {
                className:
                  "p-8 rounded-3xl border backdrop-blur-xl shadow-2xl bg-gradient-to-br from-slate-600/40 to-gray-700/30 border-slate-400/60 group relative overflow-hidden",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-br from-slate-500/20 to-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl",
                  }),
                  e.jsxs("div", {
                    className: "relative z-10",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-3 mb-8",
                        children: [
                          e.jsx("div", {
                            className:
                              "p-3 rounded-xl bg-slate-500/30 backdrop-blur-lg text-2xl",
                            children: "📅",
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("h2", {
                                className: "text-2xl font-bold text-white",
                                children: "Select Date",
                              }),
                              e.jsxs("p", {
                                className: "text-slate-200 text-sm",
                                children: [
                                  "Choose a date in ",
                                  W,
                                  " ",
                                  e.jsxs("span", {
                                    className: "text-yellow-300",
                                    children: ["• Today: ", L],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                          e.jsx("button", {
                            onClick: () =>
                              u(new Date(N.getFullYear(), N.getMonth() - 1)),
                            className:
                              "p-2 rounded-lg hover:bg-gray-700/50 transition",
                            children: e.jsx(he, {
                              className: "w-5 h-5 text-gray-300",
                            }),
                          }),
                          e.jsx("span", {
                            className: "text-lg font-semibold text-white",
                            children: W,
                          }),
                          e.jsx("button", {
                            onClick: () =>
                              u(new Date(N.getFullYear(), N.getMonth() + 1)),
                            className:
                              "p-2 rounded-lg hover:bg-gray-700/50 transition",
                            children: e.jsx(rt, {
                              className: "w-5 h-5 text-gray-300",
                            }),
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "grid grid-cols-7 gap-2 mb-4",
                        children: ue.map((n) =>
                          e.jsx(
                            "div",
                            {
                              className: `text-center text-sm font-semibold py-2 ${n === "Sun" || n === "Sat" ? "text-purple-400" : "text-gray-400"}`,
                              children: n,
                            },
                            n,
                          ),
                        ),
                      }),
                      e.jsx("div", {
                        className: "space-y-2",
                        children: te.map((n, J) =>
                          e.jsx(
                            "div",
                            {
                              className: "grid grid-cols-7 gap-2",
                              children: n.map((K, Ie) =>
                                e.jsx(
                                  "div",
                                  {
                                    className: "relative group",
                                    children: K
                                      ? e.jsxs("button", {
                                          onClick: () => {
                                            m(K.toString().padStart(2, "0")),
                                              r(2);
                                          },
                                          className: oe(K),
                                          title: C.has(
                                            K.toString().padStart(2, "0"),
                                          )
                                            ? "Status already set"
                                            : "",
                                          children: [
                                            K,
                                            C.has(
                                              K.toString().padStart(2, "0"),
                                            ) &&
                                              e.jsx("div", {
                                                className:
                                                  "absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full border-2 border-gray-950 animate-pulse",
                                              }),
                                          ],
                                        })
                                      : e.jsx("div", {}),
                                  },
                                  Ie,
                                ),
                              ),
                            },
                            J,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          t === 2 &&
            e.jsx("div", {
              className: "max-w-2xl mx-auto animate-fade-in-up",
              children: e.jsxs("div", {
                className:
                  "p-8 rounded-3xl border backdrop-blur-xl shadow-2xl bg-gradient-to-br from-slate-600/40 to-gray-700/30 border-slate-400/60 group relative overflow-hidden",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-br from-slate-500/20 to-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl",
                  }),
                  e.jsxs("div", {
                    className: "relative z-10",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-3 mb-6",
                        children: [
                          e.jsx("div", {
                            className:
                              "p-3 rounded-xl bg-slate-500/30 backdrop-blur-lg text-2xl",
                            children: "👤",
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("h2", {
                                className: "text-2xl font-bold text-white",
                                children: "Select User",
                              }),
                              e.jsxs("p", {
                                className: "text-slate-200 text-sm",
                                children: [
                                  "Choose employee for ",
                                  a,
                                  " ",
                                  W.split(" ")[0],
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "relative z-30",
                        children: [
                          e.jsxs("button", {
                            onClick: () => f(!w),
                            className:
                              "w-full px-4 py-4 rounded-xl bg-gray-800/60 border border-gray-600/50 text-white font-semibold focus:border-slate-400/70 focus:outline-none transition-all backdrop-blur-md flex items-center justify-between text-lg",
                            children: [
                              (x &&
                                ((d = s.find((n) => n.id === x)) == null
                                  ? void 0
                                  : d.name)) ||
                                "Select User",
                              e.jsx(he, {
                                className: `w-5 h-5 transition-transform duration-300 ${w ? "rotate-90" : ""}`,
                              }),
                            ],
                          }),
                          w &&
                            e.jsxs("div", {
                              className:
                                "absolute z-40 w-full mt-2 bg-gray-900/95 rounded-xl shadow-2xl border border-gray-700/50 max-h-96 overflow-hidden backdrop-blur-xl",
                              children: [
                                e.jsx("div", {
                                  className: "p-3 border-b border-gray-700/50",
                                  children: e.jsx("input", {
                                    type: "text",
                                    placeholder:
                                      "Search by name, ID, email, or role...",
                                    value: D,
                                    onChange: (n) => h(n.target.value),
                                    className:
                                      "w-full px-3 py-2 rounded-lg bg-gray-800/60 border border-gray-600/50 text-white font-semibold focus:border-slate-400/70 focus:outline-none transition-all placeholder-gray-400 text-sm",
                                  }),
                                }),
                                e.jsx("div", {
                                  className: "max-h-72 overflow-y-auto",
                                  children:
                                    P.length > 0
                                      ? P.map((n) =>
                                          e.jsxs(
                                            "button",
                                            {
                                              onClick: () => {
                                                i(n.id), f(!1), r(3);
                                              },
                                              className: `w-full p-4 border-b border-gray-700/30 transition-all text-left last:border-b-0 hover:bg-gray-800/60 flex items-center gap-3 group ${x === n.id ? "bg-gradient-to-br from-slate-600 to-gray-700 text-white" : "text-gray-300 hover:text-white"}`,
                                              children: [
                                                e.jsx("span", {
                                                  className:
                                                    "text-2xl flex-shrink-0 group-hover:scale-125 transition-transform",
                                                  children: n.avatar,
                                                }),
                                                e.jsxs("div", {
                                                  className: "flex-1 min-w-0",
                                                  children: [
                                                    e.jsx("p", {
                                                      className:
                                                        "font-bold text-sm",
                                                      children: n.name,
                                                    }),
                                                    e.jsxs("p", {
                                                      className:
                                                        "text-xs opacity-70",
                                                      children: [
                                                        n.id,
                                                        " • ",
                                                        n.role,
                                                      ],
                                                    }),
                                                    e.jsx("p", {
                                                      className:
                                                        "text-xs opacity-50 truncate",
                                                      children: n.email,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            n.id,
                                          ),
                                        )
                                      : e.jsx("p", {
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
          t === 3 &&
            e.jsxs("div", {
              className: "max-w-4xl mx-auto animate-fade-in-up relative z-0",
              children: [
                e.jsxs("div", {
                  className:
                    "p-8 rounded-3xl border backdrop-blur-xl shadow-2xl bg-gradient-to-br from-slate-600/40 to-gray-700/30 border-slate-400/60 group relative overflow-hidden",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-br from-slate-500/20 to-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl",
                    }),
                    e.jsxs("div", {
                      className: "relative z-10",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-3 mb-6",
                          children: [
                            e.jsx("div", {
                              className:
                                "p-3 rounded-xl bg-slate-500/30 backdrop-blur-lg text-2xl",
                              children: "⚡",
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("h2", {
                                  className: "text-2xl font-bold text-white",
                                  children: "Select Status",
                                }),
                                e.jsxs("p", {
                                  className: "text-slate-200 text-sm",
                                  children: [
                                    "for ",
                                    (I = s.find((n) => n.id === x)) == null
                                      ? void 0
                                      : I.name,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        le() &&
                          e.jsx("div", {
                            className:
                              "mb-6 p-4 rounded-2xl bg-gradient-to-br from-yellow-600/30 to-orange-600/30 border border-yellow-400/50 backdrop-blur-lg",
                            children: e.jsxs("p", {
                              className: "text-yellow-200 font-bold text-sm",
                              children: [
                                "⚠️ Previously set to: ",
                                (ee = y.find((n) => n.value === se())) == null
                                  ? void 0
                                  : ee.label,
                              ],
                            }),
                          }),
                        e.jsx("div", {
                          className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                          children: y.map((n) =>
                            e.jsx(
                              "button",
                              {
                                onClick: () => {
                                  p(n.value), U(!0);
                                },
                                className: `p-6 rounded-2xl border-2 transition-all transform hover:scale-105 active:scale-95 relative overflow-hidden group ${b === n.value ? `bg-gradient-to-br ${n.color} border-white/50 text-white shadow-xl ${n.glow}` : "bg-gray-800/60 border-gray-700/50 text-gray-300 hover:bg-gray-700/80 hover:border-gray-600/70"}`,
                                children: e.jsxs("div", {
                                  className: "relative z-10 text-center",
                                  children: [
                                    e.jsx("p", {
                                      className: "text-4xl mb-2",
                                      children: n.icon,
                                    }),
                                    e.jsx("p", {
                                      className: "font-semibold",
                                      children: n.label,
                                    }),
                                    e.jsx("p", {
                                      className: "text-xs opacity-70 mt-1",
                                      children: n.description,
                                    }),
                                  ],
                                }),
                              },
                              n.value,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                j &&
                  b &&
                  e.jsx("div", {
                    className:
                      "fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in-up",
                    children: e.jsxs("div", {
                      className:
                        "bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-6 max-w-md w-full shadow-2xl",
                      children: [
                        e.jsxs("h3", {
                          className:
                            "text-xl font-bold text-white mb-4 flex items-center gap-2",
                          children: [
                            e.jsx("span", {
                              className: "text-2xl",
                              children: "🔒",
                            }),
                            " Confirm Update",
                          ],
                        }),
                        le() &&
                          e.jsx("div", {
                            className:
                              "mb-4 p-3 rounded-xl bg-yellow-500/20 border border-yellow-400/30",
                            children: e.jsxs("p", {
                              className:
                                "text-yellow-200 text-sm flex items-center gap-2",
                              children: [
                                e.jsx("span", { children: "⚠️" }),
                                " Override: ",
                                (l = y.find((n) => n.value === se())) == null
                                  ? void 0
                                  : l.label,
                              ],
                            }),
                          }),
                        e.jsxs("div", {
                          className: "space-y-3 mb-6 text-sm",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-gray-300",
                              children: [
                                e.jsx("span", {
                                  className: "font-semibold w-16",
                                  children: "Date:",
                                }),
                                e.jsxs("span", {
                                  className: "text-cyan-400",
                                  children: [a, " ", W.split(" ")[0]],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-gray-300",
                              children: [
                                e.jsx("span", {
                                  className: "font-semibold w-16",
                                  children: "User:",
                                }),
                                e.jsx("span", {
                                  className: "text-pink-400",
                                  children:
                                    ($ = s.find((n) => n.id === x)) == null
                                      ? void 0
                                      : $.name,
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-gray-300",
                              children: [
                                e.jsx("span", {
                                  className: "font-semibold w-16",
                                  children: "Status:",
                                }),
                                e.jsxs("span", {
                                  className:
                                    "text-purple-400 flex items-center gap-1",
                                  children: [
                                    (_ = y.find((n) => n.value === b)) == null
                                      ? void 0
                                      : _.label,
                                    " ",
                                    (z = y.find((n) => n.value === b)) == null
                                      ? void 0
                                      : z.icon,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex gap-3",
                          children: [
                            e.jsx("button", {
                              onClick: () => {
                                U(!1), p("");
                              },
                              className:
                                "flex-1 py-3 px-4 rounded-xl bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 font-semibold transition-all border border-gray-600/50 active:scale-95",
                              children: "Cancel",
                            }),
                            e.jsx("button", {
                              onClick: ne,
                              disabled: c,
                              className:
                                "flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-slate-600 via-gray-600 to-gray-700 hover:from-slate-500 hover:via-gray-500 hover:to-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold transition-all shadow-lg hover:shadow-xl active:scale-95",
                              children: c
                                ? e.jsxs("div", {
                                    className:
                                      "flex items-center justify-center gap-2",
                                    children: [
                                      e.jsx("div", {
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
      e.jsx("style", {
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
const Je = [
  { path: "/", element: e.jsx(ta, {}) },
  { path: "/users", element: e.jsx(oa, {}) },
  { path: "/booking", element: e.jsx(la, {}) },
  { path: "/calendar", element: e.jsx(ca, {}) },
  { path: "/reports", element: e.jsx(ua, {}) },
  { path: "/manage", element: e.jsx(va, {}) },
  { path: "*", element: e.jsx(aa, {}) },
];
function ya() {
  var t = Z.get("appVersion") || "1.0.0";
  t = t.replace(/\./g, "_");
  const a = { "1_0_0": Je }[t] || Je;
  return Pt(a);
}
let Y = null,
  ae = 0,
  Ue = null,
  je = [];
function V(t, r = {}) {
  H.emit(`SOCKET:${t}`, X({ type: t }, r));
}
function wa() {
  var r;
  if (!Ee("wss") || Y) return;
  const t =
    ((r = R == null ? void 0 : R.ws) == null ? void 0 : r.url) ||
    window.location.origin;
  (Y = zt(t, R.ws)),
    Y.on("connect", () => {
      (ae = 0), V("STATUS", { connected: !0, id: Y.id }), ja();
    }),
    Y.on("message", (a) => {
      V("MESSAGE", { data: a });
    }),
    Y.on("notification", (a) => V("NOTIFICATION", { data: a })),
    Y.on("update", (a) => V("UPDATE", { data: a })),
    Y.on("connect_error", (a) => {
      V("ERROR", { message: a.message || "Connection error", attempt: ae }),
        Qe();
    }),
    Y.on("disconnect", (a) => {
      V("DISCONNECT", { reason: a }), a !== "io client disconnect" && Qe();
    }),
    Y.on("reconnect_attempt", () => {
      V("RECONNECT_ATTEMPT", { attempt: ae });
    }),
    Y.on("reconnect_failed", () => {
      V("RECONNECT_FAILED", { attempt: ae });
    }),
    Y.on("ping", () => {
      V("PING", { ts: Date.now() });
    }),
    Y.on("pong", (a) => {
      V("PONG", { latency: a });
    }),
    V("INIT", { connected: !1 });
}
function ja() {
  if (je.length) {
    V("flush_start", { count: je.length });
    for (const t of je) Y.emit(t.type, t.payload), V("sent", t);
    (je = []), V("flush_end");
  }
}
function Qe() {
  var m, x, i, b;
  if (Ue) return;
  const t =
      (x =
        (m = R == null ? void 0 : R.realtime) == null
          ? void 0
          : m.maxRetries) != null
        ? x
        : 5,
    r =
      (b =
        (i = R == null ? void 0 : R.realtime) == null
          ? void 0
          : i.retryDelay) != null
        ? b
        : 2e3;
  if (ae >= t) {
    V("reconnect_failed", { retries: ae });
    return;
  }
  const a = Math.min(r * Math.pow(2, ae), 3e4);
  ae++,
    V("reconnect_scheduled", { delay: a, attempt: ae }),
    (Ue = setTimeout(() => {
      (Ue = null),
        V("reconnecting", { attempt: ae }),
        Y && !Y.connected && Y.connect();
    }, a));
}
function Na() {
  const t = () => H.emit(q.TAB_VISIBILITY, { hidden: document.hidden });
  document.addEventListener("visibilitychange", t), t();
}
const ka = async () => {
  try {
    await ye({
      method: "GET",
      url: "/ping",
      timeout: 2e3,
      retry: 1,
      loading: !1,
    });
  } catch (t) {
    H.emit("SYSTEM_GUARD", {
      model: "SERVER_DOWN",
      error: t == null ? void 0 : t.message,
    });
  }
};
function Sa() {
  Ee("inputTracer") &&
    (window.addEventListener(
      "keydown",
      (t) => {
        H.emit(q.INPUT_TRACE, { type: "key", key: t.key, ts: Date.now() });
      },
      !0,
    ),
    window.addEventListener(
      "click",
      (t) => {
        H.emit(q.INPUT_TRACE, {
          type: "mouse",
          button: t.button,
          x: t.clientX,
          y: t.clientY,
          ts: Date.now(),
        });
      },
      !0,
    ));
}
const Ca = [
  { key: "F12" },
  { key: "I", ctrlKey: !0, shiftKey: !0 },
  { key: "C", ctrlKey: !0, shiftKey: !0 },
  { key: "U", ctrlKey: !0 },
  { key: "S", ctrlKey: !0 },
];
function Da(t, r) {
  var a;
  return (
    (r.key ? ((a = t.key) == null ? void 0 : a.toUpperCase()) === r.key : !0) &&
    (r.ctrlKey ? t.ctrlKey : !r.ctrlKey) &&
    (r.shiftKey ? t.shiftKey : !r.shiftKey)
  );
}
function $a() {
  const t = `
    font-size: 32px;
    font-weight: 800;
    color: #ff0000;
    text-shadow: 0 0 8px #ff0000;
  `,
    r = `
    font-size: 14px;
    color: #ffffff;
    background-color: #1e1e1e;
    padding: 10px;
    border: 1px solid #ff0000;
    border-radius: 6px;
  `;
  console.clear(),
    console.log("%c⚠️ SECURITY WARNING ⚠️", t),
    console.log(
      "%cThis console is for developers only. Any unauthorized access, data inspection, or code modification may violate terms of service or security policies.",
      r,
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
function Ea() {
  if (!Ee("inspectGuard")) return;
  $a(),
    console.log("%cInspect Guard is active.", "color: #00ff00;"),
    window.addEventListener("contextmenu", (a) => a.preventDefault()),
    window.addEventListener(
      "keydown",
      (a) => {
        Ca.some((m) => Da(a, m)) && (a.preventDefault(), a.stopPropagation());
      },
      !0,
    );
  let t = !1;
  setInterval(() => {
    const m =
      window.outerWidth - window.innerWidth > 160 ||
      window.outerHeight - window.innerHeight > 160;
    m !== t &&
      ((t = m),
      t &&
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
        H.emit(q.INSPECT_DETECTED, { open: !0 })));
  }, 1e3);
}
const _e = {
    inspectGuard: Ea,
    inputTracer: Sa,
    tabTracker: Na,
    wss: wa,
    isServerLive: ka,
  },
  Ia = () => {
    const [t, r] = o.useState(60),
      [a, m] = o.useState(1);
    return (
      o.useEffect(() => {
        const x = setInterval(() => {
          r((i) => (i > 0 ? i - 1 : 60)), m(Math.random() * 0.5 + 0.7);
        }, 1e3);
        return () => clearInterval(x);
      }, []),
      e.jsxs("div", {
        className:
          "fixed inset-0 w-screen h-screen overflow-hidden flex flex-col justify-center items-center bg-slate-950 text-white",
        children: [
          e.jsxs("div", {
            className: "absolute inset-0",
            children: [
              e.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-br from-slate-950 via-red-950/20 to-slate-950",
              }),
              e.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-red-600/30 via-transparent to-orange-600/30",
                style: { opacity: a },
              }),
            ],
          }),
          e.jsxs("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            children: [
              e.jsx("div", {
                className:
                  "absolute -top-40 -left-40 w-96 h-96 bg-red-500 rounded-full mix-blend-screen blur-3xl opacity-20 animate-float",
              }),
              e.jsx("div", {
                className:
                  "absolute top-1/4 -right-32 w-80 h-80 bg-orange-500 rounded-full mix-blend-screen blur-3xl opacity-15 animate-float-delayed",
              }),
              e.jsx("div", {
                className:
                  "absolute -bottom-32 left-1/3 w-96 h-96 bg-red-600 rounded-full mix-blend-screen blur-3xl opacity-20 animate-float-delayed-2",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "relative z-50 w-full max-w-xl px-6 py-12 flex flex-col items-center justify-center",
            children: [
              e.jsxs("div", {
                className: "mb-8 text-center animate-in fade-in duration-700",
                children: [
                  e.jsx("div", {
                    className: "text-7xl mb-4 animate-pulse-custom",
                    children: "🚫",
                  }),
                  e.jsx("h1", {
                    className:
                      "text-5xl font-black mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",
                    children: "ACCESS DENIED",
                  }),
                  e.jsx("p", {
                    className:
                      "text-red-300 text-sm font-mono tracking-widest uppercase",
                    children: "Developer Tools Detected",
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex gap-3 justify-center mb-8 flex-wrap animate-in slide-in-from-bottom duration-700 delay-100",
                children: [
                  e.jsx("div", {
                    className:
                      "px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur",
                    children: e.jsx("span", {
                      className: "text-red-300 font-bold text-sm",
                      children: "⚠️ SECURITY ALERT",
                    }),
                  }),
                  e.jsx("div", {
                    className:
                      "px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-full backdrop-blur",
                    children: e.jsx("span", {
                      className: "text-orange-300 font-bold text-sm",
                      children: "🔒 BLOCKED",
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "w-full mb-8 p-6 bg-gradient-to-br from-red-950/40 to-orange-950/30 border border-red-500/30 rounded-xl backdrop-blur-lg shadow-2xl animate-in zoom-in duration-700 delay-200",
                children: [
                  e.jsx("p", {
                    className: "text-center text-gray-200 leading-relaxed mb-3",
                    children:
                      "Inspector tools have been detected on this protected page. This action is not permitted.",
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-center justify-center gap-2 text-sm text-red-400 font-mono",
                    children: [
                      e.jsx("span", {
                        className:
                          "inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse",
                      }),
                      "Closing in:",
                      " ",
                      e.jsxs("span", {
                        className: "font-bold text-lg text-red-300",
                        children: [t, "s"],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 animate-in slide-in-from-bottom duration-700 delay-300",
                children: [
                  e.jsxs("button", {
                    onClick: () => window.location.reload(),
                    className:
                      "group relative px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl overflow-hidden",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      }),
                      e.jsxs("span", {
                        className:
                          "relative flex items-center justify-center gap-2",
                        children: [
                          e.jsx("span", {
                            className: "text-xl group-hover:animate-spin",
                            style: { animationDuration: "0.8s" },
                            children: "🔄",
                          }),
                          "Reload",
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("a", {
                    href: "https://terms.ajayos.in",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "group relative px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl overflow-hidden",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      }),
                      e.jsxs("span", {
                        className:
                          "relative flex items-center justify-center gap-2",
                        children: [
                          e.jsx("span", {
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
              e.jsxs("div", {
                className:
                  "w-full space-y-2 text-center text-xs text-gray-400 animate-in fade-in duration-700 delay-500",
                children: [
                  e.jsxs("p", {
                    className: "flex items-center justify-center gap-2",
                    children: [
                      e.jsx("span", { children: "💡" }),
                      e.jsxs("span", {
                        children: [
                          "Press",
                          " ",
                          e.jsx("span", {
                            className: "font-mono font-bold text-gray-300",
                            children: "F12",
                          }),
                          " or",
                          " ",
                          e.jsx("span", {
                            className: "font-mono font-bold text-gray-300",
                            children: "Ctrl+Shift+I",
                          }),
                          " ",
                          "to close Developer Tools",
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "pt-2 border-t border-gray-700/50",
                    children: [
                      e.jsxs("p", {
                        className: "text-gray-500",
                        children: [
                          "Contact:",
                          " ",
                          e.jsx("span", {
                            className: "text-gray-400 font-mono",
                            children: "support@ajayos.in",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-gray-600",
                        children: "© 2025 ajayos.in | Encrypted Connection",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsx("style", {
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
  Ze = ({ children: t }) => {
    const [r, a] = o.useState(0);
    return (
      o.useEffect(
        () => H.on(q.API_LOADING, ({ inFlight: x }) => a(x || 0)),
        [],
      ),
      e.jsxs("div", {
        className: "relative",
        children: [
          t,
          r > 0 &&
            e.jsxs("div", {
              className:
                "fixed inset-0 z-50 flex flex-col items-center justify-center",
              children: [
                e.jsx("div", {
                  className: "absolute inset-0 bg-black/40 backdrop-blur-md",
                }),
                e.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-br from-slate-900/10 via-purple-900/10 to-slate-900/10",
                }),
                e.jsx("div", {
                  className:
                    "absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob",
                }),
                e.jsx("div", {
                  className:
                    "absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob",
                  style: { animationDelay: "2s" },
                }),
                e.jsx("div", {
                  className:
                    "absolute top-1/4 right-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob",
                  style: { animationDelay: "4s" },
                }),
                e.jsxs("div", {
                  className:
                    "relative z-10 flex flex-col items-center gap-8 p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl",
                  children: [
                    e.jsxs("div", {
                      className: "relative w-28 h-28",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute inset-0 rounded-full border-3 border-transparent border-t-purple-400 border-r-pink-400 animate-spin",
                        }),
                        e.jsx("div", {
                          className:
                            "absolute inset-3 rounded-full border-2 border-transparent border-b-pink-400 border-l-purple-400 animate-spin",
                          style: {
                            animationDirection: "reverse",
                            animationDuration: "1.5s",
                          },
                        }),
                        e.jsx("div", {
                          className:
                            "absolute inset-6 rounded-full border-2 border-transparent border-t-blue-300 border-r-purple-300 animate-spin",
                          style: { animationDuration: "2s" },
                        }),
                        e.jsx("div", {
                          className:
                            "absolute inset-0 flex items-center justify-center",
                          children: e.jsx(ve, {
                            className:
                              "w-10 h-10 text-purple-300 drop-shadow-lg",
                            fill: "currentColor",
                          }),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "text-center space-y-2",
                      children: [
                        e.jsx("h2", {
                          className:
                            "text-lg font-semibold text-white drop-shadow-lg",
                          children: "Processing",
                        }),
                        e.jsxs("div", {
                          className: "flex items-center justify-center gap-2",
                          children: [
                            e.jsx("span", {
                              className: "text-sm text-purple-200",
                              children: "Running API",
                            }),
                            e.jsxs("span", {
                              className: "inline-flex gap-1.5",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "w-2 h-2 bg-purple-400 rounded-full animate-bounce",
                                  style: { animationDelay: "0s" },
                                }),
                                e.jsx("span", {
                                  className:
                                    "w-2 h-2 bg-pink-400 rounded-full animate-bounce",
                                  style: { animationDelay: "0.15s" },
                                }),
                                e.jsx("span", {
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
                e.jsx("div", {
                  className:
                    "absolute bottom-12 z-10 w-48 h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20",
                  children: e.jsx("div", {
                    className:
                      "h-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse",
                    style: { animation: "shimmer 2s infinite" },
                  }),
                }),
              ],
            }),
          e.jsx("style", {
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
function Ta({ children: t }) {
  var h, w;
  const [r, a] = o.useState(!1),
    [m, x] = o.useState(!1),
    [i, b] = o.useState("idle"),
    [p, c] = o.useState(0),
    [v, A] = o.useState(null),
    E = (f, j) => {
      const U = f.split(".").map(Number),
        N = j.split(".").map(Number);
      for (let u = 0; u < Math.max(U.length, N.length); u++) {
        const M = U[u] || 0,
          L = N[u] || 0;
        if (M > L) return 1;
        if (M < L) return -1;
      }
      return 0;
    };
  o.useEffect(() => {
    A(R.appVersion);
    const j = setTimeout(() => {
      const U = Z.get("appVersion") || R.appVersion,
        N = Z.get("skippedVersion"),
        u = Z.get("lastSkipDate"),
        M = Date.now(),
        L = 1440 * 60 * 1e3;
      if (v && E(v, U) > 0) {
        const B = !N || N !== v || !u || M - u > 1 * L;
        x(B);
      }
      Z.get("appVersion") || Z.set("appVersion", R.appVersion);
    }, 500);
    return () => clearTimeout(j);
  }, [v]);
  const T = () => {
      Z.set("skippedVersion", v),
        Z.set("lastSkipDate", Date.now()),
        setTimeout(() => {
          x(!1);
        }, 300);
    },
    S = () => {
      b("checking"),
        c(0),
        setTimeout(() => {
          b("downloading"), c(15);
        }, 1200);
      const f = setInterval(() => {
        c((j) => (j >= 85 ? (clearInterval(f), 85) : j + Math.random() * 20));
      }, 300);
      setTimeout(() => {
        clearInterval(f), b("installing"), c(90);
      }, 3e3),
        setTimeout(() => {
          c(100), b("complete");
        }, 4500),
        setTimeout(() => {
          window.location.reload();
        }, 5500),
        Z.remove("skippedVersion"),
        Z.remove("lastSkipDate"),
        Z.set("appVersion", v);
    };
  if (!m || !v) return t;
  const D = Z.get("appVersion") || R.appVersion;
  return e.jsxs("div", {
    className:
      "w-full min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 flex items-center justify-center p-4 relative overflow-hidden",
    children: [
      e.jsxs("div", {
        className: "fixed inset-0 overflow-hidden pointer-events-none",
        children: [
          e.jsx("div", {
            className:
              "absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob",
          }),
          e.jsx("div", {
            className:
              "absolute bottom-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-blob",
            style: { animationDelay: "2s" },
          }),
          e.jsx("div", {
            className:
              "absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob",
            style: { animationDelay: "4s" },
          }),
        ],
      }),
      e.jsx("div", {
        className: "relative z-10 w-full max-w-sm sm:max-w-md",
        children: e.jsxs("div", {
          className:
            "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden hover:shadow-purple-500/20 hover:shadow-2xl transition-all duration-300 group",
          children: [
            e.jsx("div", {
              className:
                "relative h-28 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 border-b border-white/20 flex items-center justify-between px-6",
              children: e.jsxs("div", {
                className: "space-y-1",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(st, {
                        className: "w-5 h-5 text-yellow-300 animate-pulse",
                      }),
                      e.jsx("h1", {
                        className:
                          "text-2xl font-bold text-white drop-shadow-lg",
                        children:
                          i === "idle" ? "Update Available" : "Updating...",
                      }),
                    ],
                  }),
                  e.jsxs("p", {
                    className: "text-purple-100 text-sm font-medium",
                    children: [D, " → ", v],
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className: "px-6 py-6 space-y-5",
              children:
                i === "idle"
                  ? e.jsxs(e.Fragment, {
                      children: [
                        e.jsx("p", {
                          className:
                            "text-slate-200 text-sm leading-relaxed text-center",
                          children:
                            "A major new version is available with exciting features, bug fixes, and performance improvements.",
                        }),
                        e.jsxs("button", {
                          onClick: () => a(!0),
                          className:
                            "w-full flex items-center justify-between py-3 px-4 bg-gradient-to-r from-purple-500/30 to-pink-500/30 hover:from-purple-500/50 hover:to-pink-500/50 rounded-xl border border-purple-400/60 transition-all group hover:shadow-lg hover:shadow-purple-500/30 backdrop-blur-sm",
                          children: [
                            e.jsxs("span", {
                              className: "font-semibold text-white text-sm",
                              children: ["What's New in v", v],
                            }),
                            e.jsx(Lt, {
                              className:
                                "w-4 h-4 text-purple-200 group-hover:rotate-180 transition-transform",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-3 pt-2",
                          children: [
                            e.jsxs("button", {
                              onClick: S,
                              className:
                                "w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-pink-500/50",
                              children: [
                                e.jsx(ze, { className: "w-4 h-4" }),
                                "Update Now",
                              ],
                            }),
                            e.jsxs("button", {
                              onClick: T,
                              className:
                                "w-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 hover:from-blue-500/50 hover:to-cyan-500/50 text-slate-100 font-semibold py-3 rounded-xl transition-all border border-blue-400/60 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/30 backdrop-blur-sm",
                              children: [
                                e.jsx(fe, { className: "w-4 h-4" }),
                                "Remind Me Later",
                              ],
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "text-xs text-slate-500 text-center pt-2",
                          children:
                            "Updates keep your app secure and running smoothly",
                        }),
                      ],
                    })
                  : e.jsx(e.Fragment, {
                      children: e.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          e.jsx("div", {
                            className: "flex justify-center py-6",
                            children: e.jsxs("div", {
                              className: "relative w-24 h-24",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500 animate-spin",
                                }),
                                e.jsx("div", {
                                  className:
                                    "absolute inset-2 rounded-full border-4 border-transparent border-b-cyan-500 border-l-orange-500 animate-spin",
                                  style: { animationDirection: "reverse" },
                                }),
                                e.jsx("div", {
                                  className:
                                    "absolute inset-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse flex items-center justify-center",
                                  children: e.jsx(ve, {
                                    className:
                                      "w-6 h-6 text-white animate-bounce",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          e.jsxs("div", {
                            className: "text-center space-y-2",
                            children: [
                              e.jsxs("p", {
                                className:
                                  "text-white font-semibold text-lg capitalize",
                                children: [
                                  i === "checking" && "Checking for updates...",
                                  i === "downloading" &&
                                    "Downloading update...",
                                  i === "installing" && "Installing update...",
                                  i === "complete" && "Update complete!",
                                ],
                              }),
                              e.jsxs("p", {
                                className: "text-slate-400 text-sm",
                                children: [
                                  i === "checking" &&
                                    "Verifying latest version",
                                  i === "downloading" &&
                                    "Fetching update files",
                                  i === "installing" &&
                                    "Installing and configuring",
                                  i === "complete" && "Preparing to restart...",
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-full bg-white/10 rounded-full h-3 overflow-hidden border border-white/20 backdrop-blur-sm",
                                children: e.jsx("div", {
                                  className:
                                    "h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-500 ease-out rounded-full shadow-lg shadow-pink-500/50",
                                  style: { width: `${p}%` },
                                }),
                              }),
                              e.jsxs("p", {
                                className:
                                  "text-center text-white font-semibold text-sm",
                                children: [Math.round(p), "%"],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "grid grid-cols-4 gap-2 pt-4",
                            children: [
                              "Checking",
                              "Download",
                              "Install",
                              "Complete",
                            ].map((f, j) => {
                              const N = [
                                  "checking",
                                  "downloading",
                                  "installing",
                                  "complete",
                                ].indexOf(i),
                                u = j < N || (j === N && i === "complete"),
                                M = j === N;
                              return e.jsxs(
                                "div",
                                {
                                  className: `text-center p-2 rounded-lg transition-all ${u ? "bg-green-500/30 border border-green-400/60" : M ? "bg-purple-500/40 border border-purple-400/60 animate-pulse" : "bg-white/10 border border-white/20"}`,
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-xs font-semibold text-white",
                                      children: f,
                                    }),
                                    u &&
                                      e.jsx("p", {
                                        className: "text-green-400 text-lg",
                                        children: "✓",
                                      }),
                                  ],
                                },
                                f,
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
      r &&
        ((h = R == null ? void 0 : R.changelog) == null ? void 0 : h.length) >
          0 &&
        e.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in",
          children: e.jsxs("div", {
            className:
              "bg-gradient-to-br from-slate-900/95 via-purple-900/50 to-slate-900/95 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col",
            children: [
              e.jsxs("div", {
                className:
                  "bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 border-b border-white/20 p-6 flex items-center justify-between",
                children: [
                  e.jsxs("h2", {
                    className:
                      "text-2xl font-bold text-white flex items-center gap-2 drop-shadow-lg",
                    children: [
                      e.jsx("span", { children: "📝" }),
                      "Changelog v",
                      v,
                    ],
                  }),
                  e.jsx("button", {
                    onClick: () => a(!1),
                    className:
                      "p-2 hover:bg-white/20 rounded-lg transition-colors",
                    children: e.jsx($e, { className: "w-5 h-5 text-white" }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "overflow-y-auto flex-1 p-6 space-y-6",
                children: [
                  (w = R == null ? void 0 : R.changelog) == null
                    ? void 0
                    : w.map((f) =>
                        e.jsxs(
                          "div",
                          {
                            className: "space-y-4 animate-slide-up",
                            children: [
                              e.jsxs("div", {
                                className: `inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${f.badgeGradient} border ${f.borderColor} backdrop-blur-sm shadow-lg`,
                                children: [
                                  e.jsx("span", {
                                    className: "text-lg",
                                    children: f.icon,
                                  }),
                                  f.category,
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: f.items.map((j, U) =>
                                  e.jsx(
                                    "div",
                                    {
                                      className: `bg-gradient-to-br ${f.gradient} hover:shadow-lg hover:-translate-y-1 border ${f.borderColor} rounded-xl p-4 transition-all space-y-2 group backdrop-blur-sm`,
                                      children: e.jsxs("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "text-3xl flex-shrink-0 group-hover:scale-110 transition-transform",
                                            children: j.image,
                                          }),
                                          e.jsxs("div", {
                                            className: "flex-1",
                                            children: [
                                              e.jsx("h4", {
                                                className:
                                                  "text-white font-semibold text-sm",
                                                children: j.title,
                                              }),
                                              e.jsx("p", {
                                                className:
                                                  "text-slate-300 text-xs mt-1",
                                                children: j.description,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    },
                                    U,
                                  ),
                                ),
                              }),
                            ],
                          },
                          f.id,
                        ),
                      ),
                  e.jsxs("div", {
                    className:
                      "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 rounded-xl p-4 backdrop-blur-sm animate-slide-up",
                    children: [
                      e.jsxs("p", {
                        className:
                          "text-slate-200 text-sm flex items-center gap-2",
                        children: [
                          e.jsx("span", {
                            className: "font-semibold",
                            children: "📅 Release Date:",
                          }),
                          " ",
                          R.releaseDate,
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-slate-400 text-xs mt-2",
                        children:
                          "All updates are tested thoroughly to ensure stability and security",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "bg-white/10 border-t border-white/20 p-4 flex gap-3 backdrop-blur-sm",
                children: [
                  e.jsx("button", {
                    onClick: () => a(!1),
                    className:
                      "flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 rounded-lg transition-all border border-white/20",
                    children: "Close",
                  }),
                  e.jsx("button", {
                    onClick: () => {
                      S(), a(!1);
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
      e.jsx("style", {
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
function Aa() {
  const [t, r] = o.useState(0),
    [a, m] = o.useState(!1);
  o.useEffect(() => {
    const b = setInterval(() => {
      r((p) => p + 1);
    }, 1e3);
    return () => clearInterval(b);
  }, []);
  const x = () => {
      m(!0),
        setTimeout(() => {
          window.location.reload();
        }, 500);
    },
    i = (b) => {
      const p = Math.floor(b / 60),
        c = b % 60;
      return `${p}:${c.toString().padStart(2, "0")}`;
    };
  return e.jsxs("div", {
    className:
      "w-full min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-slate-950 flex items-center justify-center p-4 relative overflow-hidden",
    children: [
      e.jsxs("div", {
        className: "fixed inset-0 overflow-hidden pointer-events-none",
        children: [
          e.jsx("div", {
            className:
              "absolute -top-40 -right-40 w-80 h-80 bg-red-600/30 rounded-full blur-3xl animate-pulse",
          }),
          e.jsx("div", {
            className:
              "absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse",
            style: { animationDelay: "1s" },
          }),
        ],
      }),
      e.jsxs("div", {
        className: "relative z-10 w-full max-w-5xl",
        children: [
          e.jsxs("div", {
            className:
              "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center",
            children: [
              e.jsx("div", {
                className: "hidden lg:flex justify-center",
                children: e.jsxs("div", {
                  className: "relative w-64 h-80",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent rounded-3xl blur-3xl",
                    }),
                    e.jsx("div", {
                      className:
                        "absolute inset-0 rounded-full border border-red-500/20 animate-pulse",
                    }),
                    e.jsx("div", {
                      className:
                        "absolute inset-6 rounded-full border border-red-500/10 animate-pulse",
                      style: { animationDelay: "0.3s" },
                    }),
                    e.jsx("div", {
                      className:
                        "absolute inset-0 flex items-center justify-center",
                      children: e.jsxs("div", {
                        className: "w-40 h-56 relative",
                        children: [
                          e.jsxs("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 border-red-500/40 shadow-2xl shadow-red-500/20",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "h-10 bg-gradient-to-r from-slate-700 to-slate-800 rounded-t-xl border-b border-red-500/30 flex items-center px-4 gap-3",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-2 h-2 rounded-full bg-red-500 animate-pulse",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-xs text-slate-400 font-mono",
                                    children: "SERVER",
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "flex-1 flex flex-col justify-center px-4 gap-2",
                                children: [0, 1, 2].map((b) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className: "flex items-center gap-2",
                                      children: [
                                        e.jsx("div", {
                                          className: `w-2 h-2 rounded-full ${b === 0 ? "bg-red-500 animate-pulse" : "bg-slate-700"}`,
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "flex-1 h-1 bg-slate-700 rounded",
                                        }),
                                      ],
                                    },
                                    b,
                                  ),
                                ),
                              }),
                              e.jsx("div", {
                                className:
                                  "h-10 bg-gradient-to-r from-slate-800 to-slate-900 rounded-b-xl border-t border-red-500/30 flex items-center justify-center",
                                children: e.jsx(Xe, {
                                  className:
                                    "w-5 h-5 text-red-500 animate-pulse",
                                }),
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "absolute -top-6 -right-6 animate-bounce",
                            children: e.jsx("div", {
                              className:
                                "bg-red-500/30 p-2 rounded-full border border-red-500/60 backdrop-blur",
                              children: e.jsx(Rt, {
                                className: "w-5 h-5 text-red-300",
                              }),
                            }),
                          }),
                          e.jsx("div", {
                            className: "absolute -bottom-2 -left-6",
                            children: e.jsx("div", {
                              className:
                                "bg-red-500/20 p-2 rounded-full border border-red-500/40",
                              children: e.jsx(ve, {
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
              e.jsx("div", {
                className: "flex flex-col justify-center space-y-6",
                children: e.jsxs("div", {
                  className:
                    "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 space-y-6",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "p-2 bg-red-500/20 rounded-lg border border-red-500/40",
                              children: e.jsx(Xe, {
                                className: "w-6 h-6 text-red-400",
                              }),
                            }),
                            e.jsx("h1", {
                              className: "text-4xl font-bold text-white",
                              children: "Service Down",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "text-slate-300 text-sm",
                          children: "We're experiencing temporary issues",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "bg-red-500/10 border border-red-500/30 rounded-2xl p-5 backdrop-blur-sm space-y-2",
                      children: [
                        e.jsx("p", {
                          className: "text-slate-200 text-sm leading-relaxed",
                          children:
                            "Our backend infrastructure is currently unavailable. Our engineering team is actively investigating and working to restore service as quickly as possible.",
                        }),
                        e.jsxs("p", {
                          className: "text-red-300 text-xs font-mono",
                          children: ["Downtime: ", i(t)],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "grid ",
                      children: e.jsxs("button", {
                        onClick: x,
                        disabled: a,
                        className:
                          "bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 text-white font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group",
                        children: [
                          e.jsx(Ce, {
                            className: `w-4 h-4 ${a ? "animate-spin" : "group-hover:rotate-180 transition-transform"}`,
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
          e.jsx("div", {
            className:
              "mt-12 bg-gradient-to-r from-red-500/15 to-rose-500/10 border border-red-500/30 rounded-2xl p-5 backdrop-blur-sm",
            children: e.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                e.jsx(Ut, {
                  className: "w-5 h-5 text-red-400 flex-shrink-0 animate-pulse",
                }),
                e.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    e.jsx("p", {
                      className: "text-white font-semibold text-sm",
                      children: "Real-time Updates",
                    }),
                    e.jsx("p", {
                      className: "text-slate-400 text-xs",
                      children:
                        "Visit our status page for live incident reports",
                    }),
                  ],
                }),
                e.jsxs("a", {
                  href: "https://status.ajayos.in",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "text-red-400 hover:text-red-300 text-sm font-semibold flex items-center gap-1 flex-shrink-0",
                  children: ["View ", e.jsx(at, { className: "w-3 h-3" })],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
const Ua = () => {
  const { setUser: t, user: r } = pe(),
    [a, m] = o.useState("SYSTEM_UPDATE"),
    [x, i] = o.useState(!1),
    [b, p] = o.useState(!1);
  return (
    o.useEffect(() => {
      (async () => {
        try {
          const { error: v, data: A = [] } = await re.post(
            "/foodease/auth/user",
          );
          v
            ? (window.location.href =
                "https://auth.ajayos.in/sso/prudent?next=" +
                btoa(window.location.href).replace(/=/g, ""))
            : (t(A), p(!0));
        } catch (v) {
          console.error("Error fetching user data:", v),
            (window.location.href =
              "https://auth.ajayos.in/sso/prudent?next=" +
              btoa(window.location.href).replace(/=/g, ""));
        }
      })();
    }, []),
    o.useEffect(() => {
      const c = [
        H.on("SYSTEM_GUARD", ({ model: v = null }) => {
          m(v);
        }),
      ];
      return () => c.forEach((v) => v());
    }, []),
    o.useEffect(
      () => (
        Object.keys(_e).forEach((c) => {
          if (Ee(c) && typeof _e[c] == "function")
            try {
              _e[c]();
            } catch (v) {
              console.error(
                `[SystemGuard] Error initializing feature: ${c}`,
                v,
              );
            }
        }),
        i(!0)
      ),
      [],
    ),
    !x || !b
      ? e.jsx(Bt, {})
      : a === "LOADING"
        ? e.jsx(Ze, {})
        : a === "INSPECT_BLOCKER"
          ? e.jsx(Ia, {})
          : a === "SERVER_DOWN"
            ? e.jsx(Aa, {})
            : e.jsx(Ze, { children: e.jsx(Ta, { children: e.jsx(ya, {}) }) })
  );
};
export { Ua as default };
