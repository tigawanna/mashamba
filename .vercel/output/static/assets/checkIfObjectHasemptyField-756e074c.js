import { j as d, a as t } from "./jsx-runtime-6a3157d9.js";
const f = ({
  error: e,
  handleChange: r,
  prop: s,
  input: n,
  label: o,
  type: i = "text",
}) => {
  const a = (l, c) => l.name === c && l.message !== "";
  return d("div", {
    className: "flex flex-col items-center justify-center w-full  ",
    children: [
      t("label", {
        className: "text-md capitalize  w-[90%] flex items-start",
        children: o,
      }),
      t("input", {
        style: { borderColor: a(e, s) ? "red" : "" },
        className: `w-[90%] p-[6px] m-1 border border-black \r
                dark:border-white h-10 rounded-sm   dark:bg-slate-700\r
                focus:border-2 dark:focus:border-4 focus:border-purple-700 dark:focus:border-purple-600 `,
        id: s,
        type: i,
        placeholder: s,
        onChange: r,
        autoComplete: "off",
        value: n[s],
      }),
      a(e, s)
        ? t("div", {
            className: "text-base  text-red-600",
            children: e.message,
          })
        : null,
    ],
  });
};
const u = ({}) =>
    t("div", {
      className: "flex justify-center items-center ",
      children: d("div", {
        className: "lds-ellipsis",
        children: [t("div", {}), t("div", {}), t("div", {})],
      }),
    }),
  p = ({ disabled: e, isSubmitting: r, label: s = "Submit" }) =>
    t("button", {
      type: "submit",
      disabled: e || r,
      style: { opacity: e ? "20%" : "100%" },
      className: `p-2 w-[60%] md:w-[30%]
            border-2 dark:border border-slate-700 dark:border-slate-400 dark:bg-slate-800
            flex items-center justify-center m-2 rounded-lg 
            hover:shadow-slate-900 dark:hover:shadow-slate-50 
            hover:shadow-lg dark:hover:shadow
            hover:scale-105`,
      children: r
        ? t(u, {})
        : t("div", {
            className: "text-lg font-bold dark:font-normal ",
            children: s,
          }),
    });
function y(e) {
  for (const r in e) {
    if (typeof e[r] == "string" && e[r] === "")
      return { empty: !0, value: r + " field of type string is empty" };
    if (typeof e[r] == "number" && e[r] === 0)
      return { empty: !0, value: r + " field of type number is empty" };
    if (e[r] instanceof File && !e[r])
      return { empty: !0, value: r + " field of type File is empty" };
  }
  return { empty: !1, value: "fields not empty" };
}
export { f as F, p as P, y as c };
