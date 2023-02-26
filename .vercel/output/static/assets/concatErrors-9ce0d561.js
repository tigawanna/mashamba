const f = (t) => {
  var c, n, o;
  const a = (c = t == null ? void 0 : t.data) == null ? void 0 : c.data;
  if (a && Object.keys(a).length > 0) {
    const d = Object.keys(a);
    let g = "";
    return (
      d.forEach((m) => {
        g += " - " + m + ":" + a[m].message;
      }),
      g
    );
  }
  return (n = t == null ? void 0 : t.data) != null && n.message
    ? (o = t == null ? void 0 : t.data) == null
      ? void 0
      : o.message
    : t.message
    ? t.message
    : t;
};
export { f as c };
