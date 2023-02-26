import { j as g, a as n, F as G } from "./jsx-runtime-6a3157d9.js";
import {
  S as $,
  _ as B,
  u as D,
  L as H,
  C as L,
  H as Q,
} from "./client-c8939a82.js";
import { T as E } from "./index-b8d29899.js";
import {
  F as W,
  a as V,
  b as J,
  c as K,
  d as X,
  e as Y,
} from "./index-6932149c.js";
import { r as a } from "./index-e76fa941.js";
import { _ as j } from "./hoist-non-react-statics.cjs-13dff383.js";
const q = ({}) =>
    g("nav", {
      className:
        "w-full h-full flex flex-col md:flex-row items-center justify-center gap-2 ",
      children: [
        n($, {
          href: "/about",
          className: "hover:text-purple-700 hover:underline ",
          activeClass: "text-purple-700 underline",
          children: "About ",
        }),
        n($, {
          href: "/listings",
          className: "hover:text-purple-700 hover:underline",
          activeClass: "text-purple-700 underline",
          children: "Listings ",
        }),
      ],
    }),
  Z = a.lazy(() =>
    B(
      () => import("./ReactModalWrapper-03389093.js"),
      [
        "assets/ReactModalWrapper-03389093.js",
        "assets/jsx-runtime-6a3157d9.js",
        "assets/index-e76fa941.js",
        "assets/client-c8939a82.js",
        "assets/index-60c67a20.js",
        "assets/index-b8d29899.js",
      ]
    )
  ),
  ee = ({}) => {
    const r = D(),
      [e, t] = a.useState(!1);
    return (
      a.useEffect(() => {
        t(!1);
      }, [r.current.href]),
      g("div", {
        className:
          "w-full h-full flex items-center justify-between p-1 font-serif",
        children: [
          n("div", {
            className: "md:hidden",
            children: n(E, {
              Icon: e ? W : V,
              size: "30px",
              iconstyle: "",
              iconAction: () => t((i) => !i),
            }),
          }),
          n(H, {
            className: `w-fit  min-w-[150px] text-xl md:text-2xl mx-2 \r
        font-bold hover:text-purple-400 hover:no-underline`,
            href: "/",
            children: "Real Estates",
          }),
          n(L, {
            fallback: "",
            children: n(Z, {
              child: n("nav", {
                className: "w-full  flex item-center gap-1 font-serif",
                children: n(q, {}),
              }),
              closeModal: () => t(!1),
              delay: 0,
              open: e,
              responsive: !1,
              closebutton: !1,
              styles: {
                overlay_top: "8%",
                overlay_right: "0%",
                overlay_left: "0%",
                overlay_bottom: "0%",
                content_bottom: "10%",
                content_right: "10%",
                content_left: "0%",
                content_top: "2%",
              },
            }),
          }),
          n("nav", { className: "px-3 hidden md:flex", children: n(q, {}) }),
        ],
      })
    );
  };
var P = function (e, t, i) {
    return (e = e <= i ? e : i), (e = e >= t ? e : t), e;
  },
  te = function () {
    var e = !1,
      t = [],
      i = function u() {
        e = !0;
        var c = t.shift();
        if (c) return c(u);
        e = !1;
      },
      s = function () {
        (e = !1), (t = []);
      },
      l = function (c) {
        t.push(c), !e && t.length === 1 && i();
      };
    return { clear: s, enqueue: l };
  },
  ne = function () {
    var e,
      t = function () {
        e && window.cancelAnimationFrame(e);
      },
      i = function (l, u) {
        var c,
          d,
          w = function k(_) {
            if (((d = d || _), (c = _ - d), c > u)) {
              l();
              return;
            }
            e = window.requestAnimationFrame(k);
          };
        e = window.requestAnimationFrame(w);
      };
    return { cancel: t, schedule: i };
  },
  re = function (e) {
    var t = 0;
    return (
      e >= 0 && e < 0.2
        ? (t = 0.1)
        : e >= 0.2 && e < 0.5
        ? (t = 0.04)
        : e >= 0.5 && e < 0.8
        ? (t = 0.02)
        : e >= 0.8 && e < 0.99 && (t = 0.005),
      P(e + t, 0, 0.994)
    );
  },
  A = function (e) {
    a.useEffect(e, []);
  },
  ie = function (e) {
    return ++e % 1e6;
  },
  ae = function () {
    var e = a.useState(0),
      t = e[1];
    return a.useCallback(function () {
      return t(ie);
    }, []);
  },
  ue = function (e) {
    e === void 0 && (e = {});
    var t = ae(),
      i = a.useRef(j({}, e)),
      s = a.useCallback(function () {
        return i.current;
      }, []),
      l = a.useCallback(function (u) {
        u && (Object.assign(i.current, u), t());
      }, []);
    return [s, l];
  },
  se = function () {
    var e = a.useRef(!0);
    return e.current ? ((e.current = !1), !0) : e.current;
  },
  I = function (e, t) {
    var i = se();
    a.useEffect(function () {
      if (!i) return e();
    }, t);
  },
  M = function () {},
  T = { isFinished: !0, progress: 0, sideEffect: M },
  ce = function (e) {
    var t = e === void 0 ? {} : e,
      i = t.animationDuration,
      s = i === void 0 ? 200 : i,
      l = t.incrementDuration,
      u = l === void 0 ? 800 : l,
      c = t.isAnimating,
      d = c === void 0 ? !1 : c,
      w = t.minimum,
      k = w === void 0 ? 0.08 : w,
      _ = ue(T),
      v = _[0],
      p = _[1],
      f = a.useRef(null),
      m = a.useRef(null);
    A(function () {
      (f.current = te()), (m.current = ne());
    });
    var y = a.useCallback(function () {
        var o, h;
        (o = m.current) == null || o.cancel(),
          (h = f.current) == null || h.clear();
      }, []),
      N = a.useCallback(
        function (o) {
          var h;
          if (((o = P(o, k, 1)), o === 1)) {
            var b, S;
            y(),
              (b = f.current) == null ||
                b.enqueue(function (x) {
                  p({
                    progress: o,
                    sideEffect: function () {
                      var F;
                      return (F = m.current) == null
                        ? void 0
                        : F.schedule(x, s);
                    },
                  });
                }),
              (S = f.current) == null ||
                S.enqueue(function () {
                  p({ isFinished: !0, sideEffect: y });
                });
            return;
          }
          (h = f.current) == null ||
            h.enqueue(function (x) {
              p({
                isFinished: !1,
                progress: o,
                sideEffect: function () {
                  var F;
                  return (F = m.current) == null ? void 0 : F.schedule(x, s);
                },
              });
            });
        },
        [s, y, k, f, p, m]
      ),
      C = a.useCallback(
        function () {
          N(re(v().progress));
        },
        [v, N]
      ),
      R = a.useCallback(
        function () {
          var o = function h() {
            var b;
            C(),
              (b = f.current) == null ||
                b.enqueue(function (S) {
                  var x;
                  (x = m.current) == null ||
                    x.schedule(function () {
                      h(), S();
                    }, u);
                });
          };
          o();
        },
        [u, f, m, C]
      ),
      O = a.useRef(M),
      z = v().sideEffect;
    return (
      a.useEffect(function () {
        O.current = C;
      }),
      A(function () {
        return d && R(), y;
      }),
      I(
        function () {
          v().sideEffect();
        },
        [v, z]
      ),
      I(
        function () {
          d ? p(j({}, T, { sideEffect: R })) : N(1);
        },
        [d, N, p, R]
      ),
      {
        animationDuration: s,
        isFinished: v().isFinished,
        progress: v().progress,
      }
    );
  };
const oe = ({ isAnimating: r }) => {
    const {
      animationDuration: e,
      isFinished: t,
      progress: i,
    } = ce({ isAnimating: r });
    return n(le, {
      animationDuration: e,
      isFinished: t,
      children: n(fe, { animationDuration: e, progress: i }),
    });
  },
  le = ({ animationDuration: r, children: e, isFinished: t }) =>
    n("div", {
      className: "relative top-2",
      style: {
        opacity: t ? 0 : 1,
        pointerEvents: "none",
        transition: `opacity ${r}ms linear`,
      },
      children: e,
    }),
  fe = ({ animationDuration: r, progress: e }) =>
    n("div", {
      style: {
        background: "#ad69b8",
        height: 5,
        left: 0,
        marginLeft: `${(-1 + e) * 100}%`,
        position: "absolute",
        top: 0,
        transition: `margin-left ${r}ms linear`,
        width: "100%",
        zIndex: 1031,
      },
    }),
  de = ({}) =>
    g("div", {
      className: "w-full h-full flex items-center justify-center p-2 gap-5",
      children: [
        n(E, { Icon: J }),
        n(E, { Icon: K }),
        n(E, { Icon: X }),
        n(E, { Icon: Y }),
      ],
    }),
  _e = ({ children: r }) => {
    const e = D();
    return g(G, {
      children: [
        g(Q, {
          title: "Real estates",
          children: [
            n("html", { lang: "en" }),
            n("link", {
              rel: "icon",
              type: "image/x-icon",
              href: "/favicon.ico",
            }),
          ],
        }),
        n("header", {
          className:
            "w-full h-12 p-2 z-30 sticky top-0 bg-slate-900 text-white",
          children: g(L, {
            fallback: "",
            children: [
              n(ee, {}),
              n(oe, { isAnimating: ((i) => !!i.pending)(e) }),
            ],
          }),
        }),
        n("section", { className: " h-full w-full ", children: r }),
        n("footer", {
          className:
            "footer flex flex-col md:flex-row items-center justify-center p-2",
          children: n(de, {}),
        }),
      ],
    });
  };
export { _e as default };
