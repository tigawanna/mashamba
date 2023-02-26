import { j as t, a as e } from "./jsx-runtime-6a3157d9.js";
import { r, T as i } from "./index-b8d29899.js";
import { L as a } from "./client-c8939a82.js";
import "./index-e76fa941.js";
const s = "/assets/land-big-08db69dd.webp",
  o = "_home_img_121ms_1",
  n = { home_img: o };
var c = r.GenIcon,
  m = function (l) {
    return c({
      tag: "svg",
      attr: { fill: "currentColor", viewBox: "0 0 16 16" },
      child: [
        {
          tag: "path",
          attr: {
            fillRule: "evenodd",
            d: "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z",
          },
        },
      ],
    })(l);
  };
const d = ({}) =>
  t("div", {
    className:
      "w-full h-full flex items-center justify-center relative text-white",
    children: [
      e("img", {
        src: s,
        alt: "big land",
        width: "800",
        height: "400",
        loading: "lazy",
        className: n.home_img,
      }),
      e("div", {
        className: `h-full w-full bg-opacity-30 z-3 absolute  bg-slate-700 \r
flex flex-col items-center justify-center  `,
        children: t("div", {
          className:
            "w-[90%] md:w-[40%] flex flex-col items-start justify-start gap-5",
          children: [
            t("div", {
              className: `w-full  text-6xl font-bold font-serif capitalize first-letter:text-blue-800 \r
`,
              children: [
                " ",
                e("div", { children: "find" }),
                " your Dream property with us",
              ],
            }),
            e("div", {
              className: " w-full ",
              children: t(a, {
                href: "listings",
                className:
                  "flex gap-2 w-fit items-center justify-center  border-b-4 border-b-slate-400 text-blue-900 text-3xl font-bold p-2 mt-2 ",
                children: [
                  "Browse catalog ",
                  e(i, { Icon: m, iconstyle: "hover:scale-105" }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
function b() {
  return e("main", { children: e(d, {}) });
}
export { b as default };
