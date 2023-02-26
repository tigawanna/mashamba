import { j as m, a as s } from "./jsx-runtime-6a3157d9.js";
import { u as b, a as x, n as w, p as v } from "./client-c8939a82.js";
import { r as c } from "./index-e76fa941.js";
import { c as y } from "./concatErrors-9ce0d561.js";
import {
  F as u,
  P as S,
  c as j,
} from "./checkIfObjectHasemptyField-756e074c.js";
function L({}) {
  const [t, n] = c.useState({ email: "", password: "" }),
    [a, r] = c.useState({ name: "", message: "" }),
    { current: d, pending: f } = b(),
    o = d.searchParams.get("callbackUrl"),
    p = () => !!f;
  async function g(e) {
    return await v.admins.authWithPassword(e.email, e.password);
  }
  const i = x((e) => g(e), {
      onSuccess: () => {
        r({ name: "", message: "" }), n({ email: "", password: "" }), o && w(o);
      },
      onError: (e) => {
        console.log("rakkas useMutaion error  === ", e),
          r({ name: "main", message: y(e) });
      },
    }),
    l = (e) => {
      n((h) => ({ ...h, [e.target.id]: e.target.value })),
        (a.message !== "" || a.name !== "") && r({ name: "", message: "" });
    };
  return m("div", {
    className: "w-full h-screen flex flex-col items-center justify-center",
    children: [
      m("form", {
        className:
          "w-[80%] md:w-[50%] h-[80%] flex flex-col items-center justify-center",
        onSubmit: async (e) => {
          e.preventDefault(), i.mutate(t);
        },
        children: [
          s(u, {
            label: "Email",
            prop: "email",
            input: t,
            error: a,
            handleChange: l,
          }),
          s(u, {
            label: "Password",
            prop: "password",
            input: t,
            error: a,
            handleChange: l,
          }),
          s(S, {
            disabled: j(t).empty || p(),
            isSubmitting: i.isLoading,
            label: "login",
          }),
        ],
      }),
      s("div", {
        className: "m-1 w-[90%] flex  flex-col items-center justify-center",
        children:
          (a == null ? void 0 : a.message) !== ""
            ? s("div", {
                className: `m-1 w-full text-center  line-clamp-4 p-2 bg-red-100 border-2 \r
                        border-red-800 text-red-900  rounded-xl`,
                children: a.message,
              })
            : null,
      }),
    ],
  });
}
export { L as default };
