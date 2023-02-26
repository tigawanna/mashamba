import { a as g, C as d, _, p as y } from "./client-c8939a82.js";
import { a as i } from "./jsx-runtime-6a3157d9.js";
import { r as o } from "./index-e76fa941.js";
import { c as h } from "./concatErrors-9ce0d561.js";
import { u as w } from "./useGeoLocation-7b1cbf9f.js";
const E = o.lazy(() =>
  _(
    () => import("./ListingsForm-a1144a19.js"),
    [
      "assets/ListingsForm-a1144a19.js",
      "assets/jsx-runtime-6a3157d9.js",
      "assets/index-e76fa941.js",
      "assets/checkIfObjectHasemptyField-756e074c.js",
      "assets/checkIfObjectHasemptyField-5d54d688.css",
      "assets/hoist-non-react-statics.cjs-13dff383.js",
      "assets/client-c8939a82.js",
      "assets/ReactLeafletMapCard-e1d8e134.js",
      "assets/useGeoLocation-7b1cbf9f.js",
      "assets/ReactLeafletMapCard-3625237c.css",
      "assets/index-b8d29899.js",
      "assets/index-60c67a20.js",
    ]
  )
);
function A() {
  const { position: n } = w(),
    [l, t] = o.useState({ name: "", message: "" }),
    [c, m] = o.useState({
      location: "",
      longitude: n.lng,
      latitude: n.lat,
      description: "",
      price: 5e4,
      status: "available",
      images: [],
      amenities: {
        type: "land",
        size: "",
        water_source: "piped",
        elecricity_source: "utility pole",
        bathrooms: 1,
        bedrooms: 1,
        fireplace: 1,
        garages: 1,
        swimming_pool: 1,
        closest_hospital: "less than 20 minutes away",
        closest_police_station: "less than 20 minutes away",
        closest_school: "less than 20 minutes away",
        closest_town: "less than 20 minutes away",
        gated_community: !1,
        parking: !1,
        pavements: !1,
        street_lights: !1,
      },
      owner: "",
    });
  async function u(e) {
    var r;
    const p = ["amenities", "images"],
      a = new FormData();
    e.images &&
      ((r = e.images) == null ||
        r.forEach((s) => {
          a.append("images", s);
        })),
      e.amenities && a.append("amenities", JSON.stringify(e.amenities));
    for (const s in e) !p.includes(s) && e[s] !== "" && a.append(s, e[s]);
    return await y.collection("listings").create(a);
  }
  const f = g((e) => u(e), {
    onSuccess: () => {
      t({ name: "", message: "" });
    },
    onError: (e) => {
      console.log("rakkas useMutaion error  === ", e),
        t({ name: "main", message: h(e) });
    },
  });
  return i("main", {
    className:
      "w-full min-h-screen h-full flex flex-col justify-center items-center",
    children: i(d, {
      fallback: "loading...",
      children: i(E, {
        label: "Add New Listing",
        mutation: f,
        input: c,
        setInput: m,
        error: l,
        setError: t,
      }),
    }),
  });
}
export { A as default };
