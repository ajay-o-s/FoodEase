const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = ["assets/SystemGuard.js", "assets/aos.js", "assets/aos_icons.js"]),
) => i.map((i) => d[i]);
var v = Object.defineProperty;
var j = (i, o, a) =>
  o in i
    ? v(i, o, { enumerable: !0, configurable: !0, writable: !0, value: a })
    : (i[o] = a);
var f = (i, o, a) => j(i, typeof o != "symbol" ? o + "" : o, a);
import { r as c, j as e, c as k, R as N, a as E, b as S } from "./aos.js";
import { H as I, U as z, C, S as b } from "./aos_icons.js";
(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const t of r)
      if (t.type === "childList")
        for (const s of t.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && n(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(r) {
    const t = {};
    return (
      r.integrity && (t.integrity = r.integrity),
      r.referrerPolicy && (t.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (t.credentials = "omit")
          : (t.credentials = "same-origin"),
      t
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const t = a(r);
    fetch(r.href, t);
  }
})();
const D = "modulepreload",
  R = function (i) {
    return "/" + i;
  },
  u = {},
  P = function (o, a, n) {
    let r = Promise.resolve();
    if (a && a.length > 0) {
      let s = function (d) {
        return Promise.all(
          d.map((p) =>
            Promise.resolve(p).then(
              (x) => ({ status: "fulfilled", value: x }),
              (x) => ({ status: "rejected", reason: x }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const l = document.querySelector("meta[property=csp-nonce]"),
        h =
          (l == null ? void 0 : l.nonce) ||
          (l == null ? void 0 : l.getAttribute("nonce"));
      r = s(
        a.map((d) => {
          if (((d = R(d)), d in u)) return;
          u[d] = !0;
          const p = d.endsWith(".css"),
            x = p ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${d}"]${x}`)) return;
          const m = document.createElement("link");
          if (
            ((m.rel = p ? "stylesheet" : D),
            p || (m.as = "script"),
            (m.crossOrigin = ""),
            (m.href = d),
            h && m.setAttribute("nonce", h),
            document.head.appendChild(m),
            p)
          )
            return new Promise((y, w) => {
              m.addEventListener("load", y),
                m.addEventListener("error", () =>
                  w(new Error(`Unable to preload CSS for ${d}`)),
                );
            });
        }),
      );
    }
    function t(s) {
      const l = new Event("vite:preloadError", { cancelable: !0 });
      if (((l.payload = s), window.dispatchEvent(l), !l.defaultPrevented))
        throw s;
    }
    return r.then((s) => {
      for (const l of s || []) l.status === "rejected" && t(l.reason);
      return o().catch(t);
    });
  };
class O extends c.Component {
  constructor(a) {
    super(a);
    f(this, "handleGoHome", () => {
      this.props.history && typeof this.props.history.push == "function"
        ? this.props.history.push("/")
        : typeof window != "undefined" && (window.location.href = "/");
    });
    f(this, "openModal", () => this.setState({ showModal: !0 }));
    f(this, "closeModal", () => this.setState({ showModal: !1 }));
    f(this, "toggleDetails", () => {
      this.setState((a) => ({ showDetails: !a.showDetails }));
    });
    f(this, "copyErrorId", async () => {
      const { errorId: a } = this.state;
      if (!(!a || typeof navigator == "undefined" || !navigator.clipboard))
        try {
          await navigator.clipboard.writeText(a),
            this.setState({ copied: !0 }),
            setTimeout(() => this.setState({ copied: !1 }), 2e3);
        } catch (n) {}
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
  static getDerivedStateFromError(a) {
    const n =
      "ERR-" +
      Date.now().toString(36).toUpperCase() +
      "-" +
      Math.random().toString(36).slice(2, 7).toUpperCase();
    return { hasError: !0, error: a, errorId: n };
  }
  componentDidCatch(a, n) {
    if (
      (this.setState({ errorInfo: n }),
      console.error("ErrorBoundary caught an error:", a, n),
      typeof this.props.onError == "function")
    )
      try {
        this.props.onError({
          error: a,
          errorInfo: n,
          errorId: this.state.errorId,
        });
      } catch (r) {
        console.warn("onError callback failed", r);
      }
  }
  render() {
    var n;
    if (!this.state.hasError) return this.props.children;
    const a =
      typeof window != "undefined" && this.state.errorId
        ? `https://status.ajayos.in/error/status/${this.state.errorId}`
        : `/error/status/${this.state.errorId || "unknown"}`;
    return e.jsxs("div", {
      className: "error-container",
      role: "alert",
      "aria-live": "assertive",
      children: [
        e.jsx("div", {
          className: "particles",
          "aria-hidden": "true",
          children: [...Array(40)].map((r, t) =>
            e.jsx(
              "div",
              {
                className: "particle",
                style: {
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`,
                  animationDuration: `${15 + Math.random() * 10}s`,
                },
              },
              t,
            ),
          ),
        }),
        e.jsx("div", {
          className: "matrix-lines",
          "aria-hidden": "true",
          children: [...Array(8)].map((r, t) =>
            e.jsx(
              "div",
              {
                className: "matrix-line",
                style: { left: `${12.5 * t}%`, animationDelay: `${t * 0.5}s` },
              },
              t,
            ),
          ),
        }),
        e.jsxs("div", {
          className: "error-content",
          children: [
            e.jsxs("div", {
              className: "glitch-container",
              "aria-hidden": "true",
              children: [
                e.jsx("div", { className: "glitch-icon", children: "⚠" }),
                e.jsx("div", {
                  className: "glitch-icon glitch-shadow-1",
                  children: "⚠",
                }),
                e.jsx("div", {
                  className: "glitch-icon glitch-shadow-2",
                  children: "⚠",
                }),
              ],
            }),
            e.jsx("h1", {
              className: "error-title glitch-text",
              "data-text": "Oops!",
              children: "Oops!",
            }),
            e.jsx("div", {
              className: "error-subtitle",
              children: e.jsx("span", {
                className: "typing-text",
                "aria-hidden": "true",
                children: "Something went wrong...!",
              }),
            }),
            e.jsx("div", {
              className: "space-error-subtitle",
              children: e.jsx("span", {
                className: "space-typing-text",
                "aria-hidden": "true",
                children: "Lost in the void of space...",
              }),
            }),
            e.jsxs("div", {
              className: "error-id-display",
              "aria-label": "Error identifier",
              children: [
                e.jsx("div", { className: "scan-line" }),
                e.jsx("div", {
                  className: "error-label",
                  children: "ERROR_ID",
                }),
                e.jsx("div", {
                  className: "error-value",
                  children: e.jsx("code", { children: this.state.errorId }),
                }),
                e.jsxs("div", {
                  style: {
                    marginTop: "8px",
                    display: "flex",
                    gap: "8px",
                    justifyContent: "center",
                  },
                  children: [
                    e.jsx("button", {
                      className: "small-btn",
                      onClick: this.copyErrorId,
                      "aria-label": "Copy error id",
                      children: this.state.copied ? "COPIED" : "COPY ID",
                    }),
                    e.jsx("a", {
                      href: a,
                      onClick: (r) => {
                        typeof window != "undefined" &&
                          (r.preventDefault(),
                          window.open(a, "_blank", "noopener,noreferrer"));
                      },
                      className: "small-link",
                      children: "VIEW STATUS",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "action-panel",
              children: [
                e.jsxs("button", {
                  className: "cyber-btn primary",
                  onClick: this.handleGoHome,
                  children: [
                    e.jsx("span", {
                      className: "btn-text",
                      children: "RETURN HOME",
                    }),
                    e.jsx("div", { className: "btn-glow" }),
                  ],
                }),
                e.jsxs("button", {
                  className: "cyber-btn primary",
                  onClick: this.openModal,
                  children: [
                    e.jsx("span", {
                      className: "btn-text",
                      children: "📊 VIEW LOGS",
                    }),
                    e.jsx("div", { className: "btn-glow" }),
                  ],
                }),
              ],
            }),
            this.state.showModal &&
              e.jsx("div", {
                className: "space-modal-backdrop",
                onClick: this.closeModal,
                children: e.jsxs("div", {
                  className: "space-modal",
                  onClick: (r) => r.stopPropagation(),
                  children: [
                    e.jsxs("div", {
                      className: "space-modal-header",
                      children: [
                        e.jsx("h2", { children: "⚙ Error Diagnostics ⚙" }),
                        e.jsx("button", {
                          className: "space-modal-close",
                          onClick: this.closeModal,
                          children: "✖",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-modal-content",
                      children: [
                        e.jsxs("div", {
                          className: "space-log-line",
                          children: [
                            e.jsx("span", {
                              className: "space-log-label",
                              children: "ERROR:",
                            }),
                            e.jsx("span", {
                              className: "space-log-value",
                              children:
                                ((n = this.state.error) == null
                                  ? void 0
                                  : n.message) || "Unknown anomaly detected",
                            }),
                          ],
                        }),
                        this.state.errorInfo &&
                          e.jsxs("div", {
                            className: "space-stack-container",
                            children: [
                              e.jsx("div", {
                                className: "space-stack-label",
                                children: "STACK TRACE:",
                              }),
                              e.jsx("div", {
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
            e.jsxs("div", {
              className: "footer-info",
              children: [
                e.jsxs("div", {
                  className: "footer-line",
                  children: ["REF: ", this.state.errorId],
                }),
                e.jsx("div", {
                  className: "footer-line",
                  children: "AWAITING SYSTEM RECOVERY...",
                }),
              ],
            }),
          ],
        }),
        e.jsx("style", {
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
function g() {
  const [i, o] = c.useState(0),
    [a, n] = c.useState(0);
  c.useEffect(() => {
    const t = setInterval(() => {
      o((s) => (s + 2) % 360);
    }, 16);
    return () => clearInterval(t);
  }, []),
    c.useEffect(() => {
      const t = setInterval(() => {
        n((s) => (s + 1) % 4);
      }, 2e3);
      return () => clearInterval(t);
    }, []);
  const r = [
    { text: "Cooking magic", icon: "🍳" },
    { text: "Plating dishes", icon: "🍽️" },
    { text: "Gathering recipes", icon: "📚" },
    { text: "Perfecting flavors", icon: "✨" },
  ];
  return e.jsxs("div", {
    className:
      "min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 flex items-center justify-center p-3 sm:p-4 relative overflow-hidden",
    children: [
      e.jsxs("div", {
        className: "absolute inset-0",
        children: [
          e.jsx("div", {
            className:
              "absolute -top-32 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob",
          }),
          e.jsx("div", {
            className:
              "absolute -top-20 -right-32 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000",
          }),
          e.jsx("div", {
            className:
              "absolute -bottom-32 left-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000",
          }),
          e.jsx("div", {
            className:
              "absolute -bottom-32 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-6000",
          }),
          e.jsx("div", {
            className: "absolute inset-0 opacity-5",
            style: {
              backgroundImage:
                "linear-gradient(rgba(100, 200, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 200, 255, 0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            },
          }),
        ],
      }),
      e.jsx("div", {
        className: "relative z-10 w-full max-w-2xl mx-auto",
        children: e.jsxs("div", {
          className:
            "flex flex-col items-center justify-center min-h-screen sm:min-h-auto",
          children: [
            e.jsx("div", {
              className:
                "absolute top-8 sm:top-16 left-2 sm:left-6 opacity-70 animate-float",
              children: e.jsxs("div", {
                className: "relative",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute inset-0 bg-pink-500 blur-lg opacity-50 rounded-full",
                  }),
                  e.jsx(I, {
                    className:
                      "w-6 h-6 sm:w-8 sm:h-8 text-pink-400 fill-pink-400 relative",
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className:
                "absolute top-16 sm:top-28 right-2 sm:right-6 opacity-70 animate-float",
              style: { animationDelay: "1s" },
              children: e.jsxs("div", {
                className: "relative",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute inset-0 bg-cyan-500 blur-lg opacity-50 rounded-full",
                  }),
                  e.jsx(z, {
                    className: "w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 relative",
                  }),
                ],
              }),
            }),
            e.jsxs("div", {
              className:
                "text-center space-y-6 sm:space-y-10 px-3 sm:px-4 w-full",
              children: [
                e.jsxs("div", {
                  className:
                    "flex justify-center mb-6 sm:mb-10 relative h-40 sm:h-64 w-40 sm:w-64 mx-auto",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-20 blur-2xl animate-pulse",
                    }),
                    e.jsxs("div", {
                      className: "absolute inset-0",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute inset-0 rounded-full border-2 sm:border-3 border-transparent border-t-cyan-400 border-r-pink-400 border-b-purple-400",
                          style: {
                            animation: "spin 6s linear infinite",
                            boxShadow:
                              "0 0 20px sm:0 0 30px rgba(34, 211, 238, 0.5), inset 0 0 20px sm:inset 0 0 30px rgba(34, 211, 238, 0.2)",
                          },
                        }),
                        e.jsx("div", {
                          className:
                            "absolute inset-3 sm:inset-6 rounded-full border-2 sm:border-3 border-transparent border-t-pink-400 border-r-purple-500 border-b-cyan-400",
                          style: {
                            animation: "spin 8s linear reverse",
                            boxShadow:
                              "0 0 15px sm:0 0 25px rgba(236, 72, 153, 0.4), inset 0 0 15px sm:inset 0 0 25px rgba(236, 72, 153, 0.15)",
                          },
                        }),
                        e.jsx("div", {
                          className:
                            "absolute inset-6 sm:inset-12 rounded-full border-2 sm:border-3 border-transparent border-t-purple-400 border-r-emerald-400 border-b-pink-400",
                          style: {
                            animation: "spin 10s linear infinite",
                            boxShadow:
                              "0 0 15px sm:0 0 20px rgba(168, 85, 245, 0.4), inset 0 0 15px sm:inset 0 0 20px rgba(168, 85, 245, 0.15)",
                          },
                        }),
                        e.jsxs("div", {
                          className:
                            "absolute inset-9 sm:inset-16 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 shadow-2xl flex items-center justify-center",
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300 to-pink-300 animate-pulse opacity-30",
                            }),
                            e.jsx("div", {
                              className:
                                "absolute -inset-3 sm:-inset-4 rounded-full border border-cyan-400/30 animate-pulse",
                            }),
                            e.jsxs("div", {
                              className:
                                "relative flex items-center justify-center gap-1 sm:gap-2",
                              children: [
                                e.jsx(C, {
                                  className:
                                    "w-6 h-6 sm:w-10 sm:h-10 text-white fill-white animate-bounce",
                                }),
                                e.jsx("span", {
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
                    [0, 1, 2, 3].map((t) =>
                      e.jsx(
                        "div",
                        {
                          className: "absolute w-6 h-6 sm:w-10 sm:h-10",
                          style: {
                            animation: "orbit 8s linear infinite",
                            animationDelay: `${t * 2}s`,
                          },
                          children: e.jsx("div", {
                            className: `w-full h-full rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold shadow-lg backdrop-blur-sm
                    ${t % 3 === 0 ? "bg-cyan-500/30 border border-cyan-400 shadow-cyan-500/50" : t % 3 === 1 ? "bg-pink-500/30 border border-pink-400 shadow-pink-500/50" : "bg-purple-500/30 border border-purple-400 shadow-purple-500/50"}`,
                            children:
                              t % 3 === 0 ? "🍜" : t % 3 === 1 ? "🍱" : "🍕",
                          }),
                        },
                        t,
                      ),
                    ),
                    e.jsx("div", {
                      className: "absolute top-0 left-1/4 animate-float",
                      style: { animationDelay: "0s" },
                      children: e.jsx(b, {
                        className:
                          "w-3 h-3 sm:w-5 sm:h-5 text-cyan-300 opacity-60",
                      }),
                    }),
                    e.jsx("div", {
                      className: "absolute bottom-1/4 right-1/4 animate-float",
                      style: { animationDelay: "1.5s" },
                      children: e.jsx(b, {
                        className:
                          "w-3 h-3 sm:w-5 sm:h-5 text-pink-300 opacity-60",
                      }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-3 sm:space-y-4",
                  children: [
                    e.jsx("h2", {
                      className:
                        "text-2xl sm:text-5xl font-black bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse drop-shadow-lg",
                      children: "FoodEase",
                    }),
                    e.jsxs("div", {
                      className: "flex flex-col items-center gap-3",
                      children: [
                        e.jsxs("div", {
                          className:
                            "inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-cyan-500/30 backdrop-blur-md",
                          children: [
                            e.jsx("span", {
                              className: "text-2xl sm:text-3xl",
                              children: r[a].icon,
                            }),
                            e.jsx("span", {
                              className:
                                "text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent",
                              children: r[a].text,
                            }),
                            e.jsxs("span", {
                              className: "inline-flex gap-1.5",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce shadow-lg shadow-cyan-500/50",
                                }),
                                e.jsx("span", {
                                  className:
                                    "w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full animate-bounce shadow-lg shadow-pink-500/50",
                                  style: { animationDelay: "0.15s" },
                                }),
                                e.jsx("span", {
                                  className:
                                    "w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full animate-bounce shadow-lg shadow-purple-500/50",
                                  style: { animationDelay: "0.3s" },
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className:
                            "text-xs sm:text-sm bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-semibold",
                          children: "Delicious moments loading...",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2 sm:space-y-3 max-w-md mx-auto",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-full bg-gradient-to-r from-slate-800 to-slate-900 rounded-full h-2.5 sm:h-4 overflow-hidden shadow-2xl border border-cyan-500/20",
                      children: e.jsx("div", {
                        className:
                          "h-full bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 rounded-full",
                        style: {
                          animation: "progress 3s ease-in-out infinite",
                          boxShadow:
                            "0 0 20px rgba(34, 211, 238, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.3)",
                        },
                      }),
                    }),
                    e.jsx("div", {
                      className: "text-center",
                      children: e.jsx("span", {
                        className:
                          "text-xs sm:text-sm bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent font-bold",
                        children: "Initializing...",
                      }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "flex gap-3 sm:gap-8 justify-center pb-4 sm:pb-0",
                  children: ["🍕", "🍔", "🍰"].map((t, s) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "text-2xl sm:text-4xl animate-float relative",
                        style: { animationDelay: `${s * 0.2}s` },
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute inset-0 blur-lg opacity-40 rounded-full",
                            style: {
                              background:
                                s === 0
                                  ? "rgb(236, 72, 153)"
                                  : s === 1
                                    ? "rgb(34, 211, 238)"
                                    : "rgb(168, 85, 245)",
                            },
                          }),
                          e.jsx("span", { className: "relative", children: t }),
                        ],
                      },
                      s,
                    ),
                  ),
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
const M = c.createContext(),
  U = ({ children: i }) => {
    const [o, a] = c.useState(null),
      [n, r] = c.useState(null);
    return e.jsx(M.Provider, {
      value: { user: o, setUser: a, device: n, setDevice: r },
      children: i,
    });
  },
  Y = c.lazy(() =>
    P(() => import("./SystemGuard.js"), __vite__mapDeps([0, 1, 2])),
  ),
  L = k(
    [
      {
        path: "*",
        element: e.jsx(O, { children: e.jsx(Y, {}) }),
        HydrateFallback: e.jsx(g, {}),
      },
    ],
    { future: { v7_startTransition: !0 } },
  );
N.createRoot(document.getElementById("ajayos")).render(
  e.jsx(E.StrictMode, {
    children: e.jsx(c.Suspense, {
      fallback: e.jsx(g, {}),
      children: e.jsx(U, { children: e.jsx(S, { router: L }) }),
    }),
  }),
);
export { g as F, M as U };
