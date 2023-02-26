import { r as e } from "./index-e76fa941.js";
const u = () => {
  const [t, n] = e.useState(null),
    [s, c] = e.useState(() =>
      t && "coords" in t
        ? { lat: t.coords.latitude, lng: t.coords.longitude }
        : { lat: -1.290394, lng: 36.816583 }
    );
  return (
    e.useEffect(() => {
      const r = (o, i) => {
        navigator.geolocation.getCurrentPosition(o, i);
      };
      new Promise(r)
        .then((o) => {
          n(o);
        })
        .catch((o) => {
          console.log("error getting location ", o), n(o);
        });
    }, []),
    { position: s, geoLocation: t }
  );
};
export { u };
