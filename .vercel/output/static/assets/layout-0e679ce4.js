import { j as t, F as a, a as e } from "./jsx-runtime-6a3157d9.js";
import { H as n } from "./client-c8939a82.js";
import "./index-e76fa941.js";
const r = ({ children: i }) =>
  t(a, {
    children: [
      t(n, {
        title: "Listings",
        children: [
          e("link", {
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico",
          }),
          e("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          }),
          e("meta", { httpEquiv: "X-UA-Compatible", content: "ie=edge" }),
          e("meta", { name: "description", content: "Real Esate Listings" }),
          e("meta", {
            name: "keywords",
            content: "real estate listings in kenya",
          }),
        ],
      }),
      e("section", { className: " h-full w-full ", children: i }),
    ],
  });
export { r as default };
