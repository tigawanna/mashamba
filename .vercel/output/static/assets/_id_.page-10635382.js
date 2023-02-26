import {
  _ as v,
  b as N,
  m as w,
  H as y,
  p as I,
  L as k,
  C as S,
} from "./client-c8939a82.js";
import { j as n, a as t } from "./jsx-runtime-6a3157d9.js";
import { f as L, e as b, g as G } from "./index-6932149c.js";
import { r as j, T as c } from "./index-b8d29899.js";
import { r as d } from "./index-e76fa941.js";
import { L as _ } from "./landscapp-9cde5c42.js";
var f = j.GenIcon,
  E = function (s) {
    return f({
      tag: "svg",
      attr: { viewBox: "0 0 24 24" },
      child: [
        {
          tag: "polyline",
          attr: {
            fill: "none",
            stroke: "#000",
            strokeWidth: "2",
            points: "7.086 3.174 17.086 13.174 7.086 23.174",
            transform: "scale(1 -1) rotate(-89 -1.32 0)",
          },
        },
      ],
    })(s);
  },
  P = function (s) {
    return f({
      tag: "svg",
      attr: { viewBox: "0 0 24 24" },
      child: [
        {
          tag: "polyline",
          attr: {
            fill: "none",
            stroke: "#000",
            strokeWidth: "2",
            points: "7 2 17 12 7 22",
          },
        },
      ],
    })(s);
  },
  C = function (s) {
    return f({
      tag: "svg",
      attr: { viewBox: "0 0 24 24" },
      child: [
        {
          tag: "polyline",
          attr: {
            fill: "none",
            stroke: "#000",
            strokeWidth: "2",
            points: "7 2 17 12 7 22",
            transform: "matrix(-1 0 0 1 24 0)",
          },
        },
      ],
    })(s);
  },
  O = function (s) {
    return f({
      tag: "svg",
      attr: { viewBox: "0 0 24 24" },
      child: [
        {
          tag: "polyline",
          attr: {
            fill: "none",
            stroke: "#000",
            strokeWidth: "2",
            points: "7.086 1.174 17.086 11.174 7.086 21.174",
            transform: "rotate(-89 12.086 11.174)",
          },
        },
      ],
    })(s);
  };
const U = ({ height: l = 100, width: s = 100, imgs: r, ...p }) => {
    const [a, m] = d.useState({ img: (r && r[0]) ?? _, idx: 0 }),
      [e, g] = d.useState(a.img),
      [x, o] = d.useState(!0);
    return (
      d.useEffect(() => {
        let i = !0,
          u;
        const h = new Image();
        return (
          (h.src = a.img),
          (h.onload = () => {
            i &&
              (u = setTimeout(() => {
                g(a.img), o(!1);
              }, 500));
          }),
          () => {
            (i = !1), clearTimeout(u);
          }
        );
      }, [a.img, a.idx]),
      n("div", {
        className:
          " w-full lg:w-[50%] h-[50%] flex items-center justify-center gap-2 ",
        children: [
          a.idx !== 0
            ? t(c, {
                Icon: C,
                iconAction: () => {
                  o(!0),
                    m((i) =>
                      i.idx > 0 ? { img: r[i.idx - 1], idx: i.idx - 1 } : i
                    );
                },
              })
            : null,
          t("div", {
            className:
              " w-[80%]  h-[50%] flex items-center justify-center gap-2 ",
            children: t("img", {
              style: { filter: x ? "blur(10px)" : "none" },
              src: e,
              alt: p.props.alt,
              height: l,
              width: s,
              loading: "lazy",
              className:
                "h-full w-full  aspect-video animate-in fade-in duration-500 rounded-lg",
              ...p,
            }),
          }),
          a.idx !== r.length - 1
            ? t(c, {
                Icon: P,
                iconAction: () => {
                  o(!0),
                    m((i) =>
                      i.idx < r.length - 1
                        ? { img: r[i.idx + 1], idx: i.idx + 1 }
                        : i
                    );
                },
              })
            : null,
        ],
      })
    );
  },
  W = d.lazy(() =>
    v(
      () => import("./ReactLeafletMapCard-e1d8e134.js"),
      [
        "assets/ReactLeafletMapCard-e1d8e134.js",
        "assets/jsx-runtime-6a3157d9.js",
        "assets/index-e76fa941.js",
        "assets/useGeoLocation-7b1cbf9f.js",
        "assets/client-c8939a82.js",
        "assets/ReactLeafletMapCard-3625237c.css",
      ]
    )
  ),
  R = function ({ params: s }) {
    var o, i;
    const { data: r, refetch: p } = N(["0", 0, [s]], {
        refetchOnWindowFocus: !0,
        refetchOnReconnect: !0,
      }),
      [a, m] = d.useState(!0);
    if (!r) return t("div", { children: "Loading..." });
    const e = r.items[0],
      g = w(
        "listings",
        e == null ? void 0 : e.id,
        (o = r == null ? void 0 : r.items[0]) == null ? void 0 : o.images[0]
      ),
      x = () =>
        e == null
          ? void 0
          : e.images.map((u) => w("listings", e == null ? void 0 : e.id, u));
    return n("main", {
      className:
        "w-full h-full min-h-screen flex flex-col items-center justify-center",
      children: [
        n(y, {
          title: e.location,
          children: [
            t("link", {
              rel: "icon",
              type: "image/x-icon",
              href: "/favicon.ico",
            }),
            t("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1.0",
            }),
            t("meta", { httpEquiv: "X-UA-Compatible", content: "ie=edge" }),
            t("meta", { name: "description", content: e.description }),
            t("meta", { name: "keywords", content: e.description }),
          ],
        }),
        n("div", {
          className:
            "w-full h-full flex flex-col items-center justify-center gap-2",
          children: [
            (i = I.authStore.model) != null && i.id
              ? t(k, {
                  className: "text-lg text-purple-900 hover:text-purple-800",
                  href: `../admin/${e == null ? void 0 : e.id}`,
                  children: " Edit ",
                })
              : null,
            n(
              "div",
              {
                className:
                  "w-[90%]  flex flex-col lg:flex-row  items-center justify-center rounded-2xl m-2",
                children: [
                  t(U, {
                    imgs: x(),
                    height: "300px",
                    width: "600px",
                    props: {
                      className: "w-[80%]",
                      src: g,
                      alt: e == null ? void 0 : e.location,
                    },
                  }),
                  n("div", {
                    className: "font-serif p-5 w-[90%] lg:w-[40%]",
                    children: [
                      n("div", {
                        className: "flex items-center justify-start gap-5",
                        children: [
                          t("h1", {
                            className: "text-2xl font-bold",
                            children: e.location,
                          }),
                          n("p", {
                            className:
                              "font-semibold font-sans text-2xl text-purple-900",
                            children: [e.price.toLocaleString("en-US"), " Ksh"],
                          }),
                        ],
                      }),
                      t("p", {
                        className: a
                          ? "text-sm line-clamp-5 mt-4"
                          : "text-sm mt-4",
                        children: e.description,
                      }),
                      t("button", {
                        onClick: () => m(!a),
                        className: "bg-slate-900 p-1",
                        children: t(c, {
                          Icon: a ? E : O,
                          iconAction: () => {
                            m(!a);
                          },
                        }),
                      }),
                      n("div", {
                        className: "border-t ",
                        children: [
                          n("p", {
                            className: "text-sm font-semibold",
                            children: ["Owner: ", e.expand.owner.name],
                          }),
                          n("p", {
                            className: "text-sm flex gap-1",
                            children: [t(c, { Icon: L }), e.expand.owner.phone],
                          }),
                          n("p", {
                            className: "text-sm flex gap-1",
                            children: [
                              t(c, { Icon: b }),
                              e.expand.owner.whatsapp,
                            ],
                          }),
                          n("p", {
                            className: "text-sm flex gap-1",
                            children: [t(c, { Icon: G }), e.expand.owner.email],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              e.id
            ),
            t("div", {
              className: "w-full flex flex-row  items-center justify-center",
              children: t("div", {
                className: "w-[90%] md:w-[70%] p-5 ",
                children: t(S, {
                  fallback: "loading",
                  children: t(W, {
                    display: !1,
                    coords: { lat: e.longitude, lng: e.longitude },
                  }),
                }),
              }),
            }),
          ],
        }),
      ],
    });
  };
export { R as default };
