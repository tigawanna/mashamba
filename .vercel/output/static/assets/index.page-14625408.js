import { a as s, j as t } from "./jsx-runtime-6a3157d9.js";
import { b as g, m as u, L as x } from "./client-c8939a82.js";
import { f as w, e as N, g as v } from "./index-6932149c.js";
import { T as c } from "./index-b8d29899.js";
import { r as n } from "./index-e76fa941.js";
import { L as b } from "./landscapp-9cde5c42.js";
const S = ({ height: l = 100, width: o = 100, placeholderSrc: e, ...r }) => {
    const [a, i] = n.useState(e || r.props.src || b),
      [d, h] = n.useState(!0);
    return (
      n.useEffect(() => {
        let m = !0,
          f;
        const p = new Image();
        return (
          (p.src = r.props.src),
          (p.onload = () => {
            m &&
              (f = setTimeout(() => {
                i(r.props.src), h(!1);
              }, 500));
          }),
          () => {
            (m = !1), clearTimeout(f);
          }
        );
      }, [r.props.src]),
      s("img", {
        style: { filter: d ? "blur(20px)" : "none" },
        src: a,
        alt: r.props.alt,
        height: l,
        width: o,
        loading: "lazy",
        className:
          "h-full w-full  aspect-video animate-in fade-in duration-500",
        ...r,
      })
    );
  },
  y = ({}) => {
    const { data: l, refetch: o } = g(["2", 0, []], {
      refetchOnWindowFocus: !0,
      refetchOnReconnect: !0,
    });
    return l
      ? s("div", {
          className: "w-full h-full flex items-center justify-center",
          children: s("div", {
            className:
              "w-[90%] p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-2 lg:gap-4",
            children:
              l &&
              (l == null
                ? void 0
                : l.items.map((e) => {
                    var i;
                    const r = u("listings", e.id, e.images[0]),
                      a = u("listings", e.id, e.images[1]);
                    return t(
                      x,
                      {
                        href: `/listings/${e.id}`,
                        className: ` w-full  flex flex-col items-start \r
                shadow-lg border hover:shadow-lg  hover:shadow-slate-300 rounded-2xl `,
                        children: [
                          t("div", {
                            className:
                              " h-full w-full flex items-center justify-center relative",
                            children: [
                              e.status === "sold"
                                ? s("div", {
                                    className: `w-full h-full absolute font-bold font-serif\r
            flex items-center justify-center  text-6xl  text-slate-50 bg-slate-500 bg-opacity-30`,
                                    children: "SOLD",
                                  })
                                : null,
                              s(S, {
                                props: {
                                  src: r,
                                  alt: e == null ? void 0 : e.location,
                                },
                                placeholderSrc: r ? a : void 0,
                                height: "200px",
                                width: "300px",
                              }),
                            ],
                          }),
                          t("div", {
                            className: "font-serif p-3",
                            children: [
                              s("h1", {
                                className: "text-2xl font-bold",
                                children: e.location,
                              }),
                              s("p", {
                                className: "text-sm line-clamp-3",
                                children: e.description,
                              }),
                              t("p", {
                                className: "text-sm",
                                children: ["Owner: ", e.owner],
                              }),
                              s("p", {
                                className: "text-sm",
                                children: e.status,
                              }),
                              s("p", {
                                className: "text-sm",
                                children:
                                  (i = e.amenities) == null ? void 0 : i.type,
                              }),
                              t("p", {
                                className:
                                  "font-semibold font-sans text-lg text-purple-900",
                                children: [
                                  e.price.toLocaleString("en-US"),
                                  " Ksh",
                                ],
                              }),
                              t("div", {
                                className: "border-t p-1 m-1",
                                children: [
                                  t("p", {
                                    className: "text-sm flex font-semibold",
                                    children: ["Owner: ", e.expand.owner.name],
                                  }),
                                  t("p", {
                                    className: "text-sm flex gap-1",
                                    children: [
                                      s(c, { Icon: w }),
                                      e.expand.owner.phone,
                                    ],
                                  }),
                                  t("p", {
                                    className: "text-sm flex gap-1",
                                    children: [
                                      s(c, { Icon: N }),
                                      e.expand.owner.whatsapp,
                                    ],
                                  }),
                                  t("p", {
                                    className: "text-sm flex gap-1",
                                    children: [
                                      s(c, { Icon: v }),
                                      e.expand.owner.email,
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      e.id
                    );
                  })),
          }),
        })
      : s("div", {
          className: "w-full h-full flex items-center justify-center",
          children: "loading",
        });
  };
function E() {
  return s("main", {
    className: "w-full min-h-screen h-full flex justify-center items-center",
    children: s(y, {}),
  });
}
export { E as default };
