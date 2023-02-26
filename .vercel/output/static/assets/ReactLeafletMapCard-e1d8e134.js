import { a as ii, j as Qo } from "./jsx-runtime-6a3157d9.js";
import { u as ts } from "./useGeoLocation-7b1cbf9f.js";
import { r as A, a as ni, c as es } from "./index-e76fa941.js";
import "./client-c8939a82.js";
function is(_, f) {
  const h = A.useRef(f);
  A.useEffect(
    function () {
      f !== h.current &&
        _.attributionControl != null &&
        (h.current != null && _.attributionControl.removeAttribution(h.current),
        f != null && _.attributionControl.addAttribution(f)),
        (h.current = f);
    },
    [_, f]
  );
}
const ns = 1;
function os(_) {
  return Object.freeze({ __version: ns, map: _ });
}
function ss(_, f) {
  return Object.freeze({ ..._, ...f });
}
const wn = A.createContext(null),
  xn = wn.Provider;
function rs() {
  const _ = A.useContext(wn);
  if (_ == null)
    throw new Error(
      "No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>"
    );
  return _;
}
function as(_) {
  function f(h, p) {
    const { instance: d, context: B } = _(h).current;
    return (
      A.useImperativeHandle(p, () => d),
      h.children == null ? null : ni.createElement(xn, { value: B }, h.children)
    );
  }
  return A.forwardRef(f);
}
function hs(_) {
  function f(h, p) {
    const { instance: d } = _(h).current;
    return A.useImperativeHandle(p, () => d), null;
  }
  return A.forwardRef(f);
}
function us(_, f) {
  const h = A.useRef();
  A.useEffect(
    function () {
      return (
        f != null && _.instance.on(f),
        (h.current = f),
        function () {
          h.current != null && _.instance.off(h.current), (h.current = null);
        }
      );
    },
    [_, f]
  );
}
function Pn(_, f) {
  const h = _.pane ?? f.pane;
  return h ? { ..._, pane: h } : _;
}
var It = {},
  ls = {
    get exports() {
      return It;
    },
    set exports(_) {
      It = _;
    },
  };
/* @preserve
 * Leaflet 1.9.3, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */ (function (_, f) {
  (function (h, p) {
    p(f);
  })(es, function (h) {
    var p = "1.9.3";
    function d(t) {
      var e, i, n, o;
      for (i = 1, n = arguments.length; i < n; i++) {
        o = arguments[i];
        for (e in o) t[e] = o[e];
      }
      return t;
    }
    var B =
      Object.create ||
      (function () {
        function t() {}
        return function (e) {
          return (t.prototype = e), new t();
        };
      })();
    function M(t, e) {
      var i = Array.prototype.slice;
      if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
      var n = i.call(arguments, 2);
      return function () {
        return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments);
      };
    }
    var ft = 0;
    function P(t) {
      return "_leaflet_id" in t || (t._leaflet_id = ++ft), t._leaflet_id;
    }
    function dt(t, e, i) {
      var n, o, s, r;
      return (
        (r = function () {
          (n = !1), o && (s.apply(i, o), (o = !1));
        }),
        (s = function () {
          n
            ? (o = arguments)
            : (t.apply(i, arguments), setTimeout(r, e), (n = !0));
        }),
        s
      );
    }
    function gt(t, e, i) {
      var n = e[1],
        o = e[0],
        s = n - o;
      return t === n && i ? t : ((((t - o) % s) + s) % s) + o;
    }
    function O() {
      return !1;
    }
    function j(t, e) {
      if (e === !1) return t;
      var i = Math.pow(10, e === void 0 ? 6 : e);
      return Math.round(t * i) / i;
    }
    function W(t) {
      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
    }
    function st(t) {
      return W(t).split(/\s+/);
    }
    function z(t, e) {
      Object.prototype.hasOwnProperty.call(t, "options") ||
        (t.options = t.options ? B(t.options) : {});
      for (var i in e) t.options[i] = e[i];
      return t.options;
    }
    function Xt(t, e, i) {
      var n = [];
      for (var o in t)
        n.push(
          encodeURIComponent(i ? o.toUpperCase() : o) +
            "=" +
            encodeURIComponent(t[o])
        );
      return (!e || e.indexOf("?") === -1 ? "?" : "&") + n.join("&");
    }
    var Jt = /\{ *([\w_ -]+) *\}/g;
    function yt(t, e) {
      return t.replace(Jt, function (i, n) {
        var o = e[n];
        if (o === void 0)
          throw new Error("No value provided for variable " + i);
        return typeof o == "function" && (o = o(e)), o;
      });
    }
    var $ =
      Array.isArray ||
      function (t) {
        return Object.prototype.toString.call(t) === "[object Array]";
      };
    function ye(t, e) {
      for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
      return -1;
    }
    var $t = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function we(t) {
      return window["webkit" + t] || window["moz" + t] || window["ms" + t];
    }
    var si = 0;
    function ri(t) {
      var e = +new Date(),
        i = Math.max(0, 16 - (e - si));
      return (si = e + i), window.setTimeout(t, i);
    }
    var xe = window.requestAnimationFrame || we("RequestAnimationFrame") || ri,
      ai =
        window.cancelAnimationFrame ||
        we("CancelAnimationFrame") ||
        we("CancelRequestAnimationFrame") ||
        function (t) {
          window.clearTimeout(t);
        };
    function U(t, e, i) {
      if (i && xe === ri) t.call(e);
      else return xe.call(window, M(t, e));
    }
    function K(t) {
      t && ai.call(window, t);
    }
    var Mn = {
      __proto__: null,
      extend: d,
      create: B,
      bind: M,
      get lastId() {
        return ft;
      },
      stamp: P,
      throttle: dt,
      wrapNum: gt,
      falseFn: O,
      formatNum: j,
      trim: W,
      splitWords: st,
      setOptions: z,
      getParamString: Xt,
      template: yt,
      isArray: $,
      indexOf: ye,
      emptyImageUrl: $t,
      requestFn: xe,
      cancelFn: ai,
      requestAnimFrame: U,
      cancelAnimFrame: K,
    };
    function rt() {}
    (rt.extend = function (t) {
      var e = function () {
          z(this),
            this.initialize && this.initialize.apply(this, arguments),
            this.callInitHooks();
        },
        i = (e.__super__ = this.prototype),
        n = B(i);
      (n.constructor = e), (e.prototype = n);
      for (var o in this)
        Object.prototype.hasOwnProperty.call(this, o) &&
          o !== "prototype" &&
          o !== "__super__" &&
          (e[o] = this[o]);
      return (
        t.statics && d(e, t.statics),
        t.includes && (Cn(t.includes), d.apply(null, [n].concat(t.includes))),
        d(n, t),
        delete n.statics,
        delete n.includes,
        n.options &&
          ((n.options = i.options ? B(i.options) : {}),
          d(n.options, t.options)),
        (n._initHooks = []),
        (n.callInitHooks = function () {
          if (!this._initHooksCalled) {
            i.callInitHooks && i.callInitHooks.call(this),
              (this._initHooksCalled = !0);
            for (var s = 0, r = n._initHooks.length; s < r; s++)
              n._initHooks[s].call(this);
          }
        }),
        e
      );
    }),
      (rt.include = function (t) {
        var e = this.prototype.options;
        return (
          d(this.prototype, t),
          t.options &&
            ((this.prototype.options = e), this.mergeOptions(t.options)),
          this
        );
      }),
      (rt.mergeOptions = function (t) {
        return d(this.prototype.options, t), this;
      }),
      (rt.addInitHook = function (t) {
        var e = Array.prototype.slice.call(arguments, 1),
          i =
            typeof t == "function"
              ? t
              : function () {
                  this[t].apply(this, e);
                };
        return (
          (this.prototype._initHooks = this.prototype._initHooks || []),
          this.prototype._initHooks.push(i),
          this
        );
      });
    function Cn(t) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        t = $(t) ? t : [t];
        for (var e = 0; e < t.length; e++)
          t[e] === L.Mixin.Events &&
            console.warn(
              "Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",
              new Error().stack
            );
      }
    }
    var q = {
      on: function (t, e, i) {
        if (typeof t == "object") for (var n in t) this._on(n, t[n], e);
        else {
          t = st(t);
          for (var o = 0, s = t.length; o < s; o++) this._on(t[o], e, i);
        }
        return this;
      },
      off: function (t, e, i) {
        if (!arguments.length) delete this._events;
        else if (typeof t == "object") for (var n in t) this._off(n, t[n], e);
        else {
          t = st(t);
          for (var o = arguments.length === 1, s = 0, r = t.length; s < r; s++)
            o ? this._off(t[s]) : this._off(t[s], e, i);
        }
        return this;
      },
      _on: function (t, e, i, n) {
        if (typeof e != "function") {
          console.warn("wrong listener type: " + typeof e);
          return;
        }
        if (this._listens(t, e, i) === !1) {
          i === this && (i = void 0);
          var o = { fn: e, ctx: i };
          n && (o.once = !0),
            (this._events = this._events || {}),
            (this._events[t] = this._events[t] || []),
            this._events[t].push(o);
        }
      },
      _off: function (t, e, i) {
        var n, o, s;
        if (this._events && ((n = this._events[t]), !!n)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (o = 0, s = n.length; o < s; o++) n[o].fn = O;
            delete this._events[t];
            return;
          }
          if (typeof e != "function") {
            console.warn("wrong listener type: " + typeof e);
            return;
          }
          var r = this._listens(t, e, i);
          if (r !== !1) {
            var a = n[r];
            this._firingCount &&
              ((a.fn = O), (this._events[t] = n = n.slice())),
              n.splice(r, 1);
          }
        }
      },
      fire: function (t, e, i) {
        if (!this.listens(t, i)) return this;
        var n = d({}, e, {
          type: t,
          target: this,
          sourceTarget: (e && e.sourceTarget) || this,
        });
        if (this._events) {
          var o = this._events[t];
          if (o) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var s = 0, r = o.length; s < r; s++) {
              var a = o[s],
                u = a.fn;
              a.once && this.off(t, u, a.ctx), u.call(a.ctx || this, n);
            }
            this._firingCount--;
          }
        }
        return i && this._propagateEvent(n), this;
      },
      listens: function (t, e, i, n) {
        typeof t != "string" && console.warn('"string" type argument expected');
        var o = e;
        typeof e != "function" && ((n = !!e), (o = void 0), (i = void 0));
        var s = this._events && this._events[t];
        if (s && s.length && this._listens(t, o, i) !== !1) return !0;
        if (n) {
          for (var r in this._eventParents)
            if (this._eventParents[r].listens(t, e, i, n)) return !0;
        }
        return !1;
      },
      _listens: function (t, e, i) {
        if (!this._events) return !1;
        var n = this._events[t] || [];
        if (!e) return !!n.length;
        i === this && (i = void 0);
        for (var o = 0, s = n.length; o < s; o++)
          if (n[o].fn === e && n[o].ctx === i) return o;
        return !1;
      },
      once: function (t, e, i) {
        if (typeof t == "object") for (var n in t) this._on(n, t[n], e, !0);
        else {
          t = st(t);
          for (var o = 0, s = t.length; o < s; o++) this._on(t[o], e, i, !0);
        }
        return this;
      },
      addEventParent: function (t) {
        return (
          (this._eventParents = this._eventParents || {}),
          (this._eventParents[P(t)] = t),
          this
        );
      },
      removeEventParent: function (t) {
        return this._eventParents && delete this._eventParents[P(t)], this;
      },
      _propagateEvent: function (t) {
        for (var e in this._eventParents)
          this._eventParents[e].fire(
            t.type,
            d({ layer: t.target, propagatedFrom: t.target }, t),
            !0
          );
      },
    };
    (q.addEventListener = q.on),
      (q.removeEventListener = q.clearAllEventListeners = q.off),
      (q.addOneTimeEventListener = q.once),
      (q.fireEvent = q.fire),
      (q.hasEventListeners = q.listens);
    var At = rt.extend(q);
    function y(t, e, i) {
      (this.x = i ? Math.round(t) : t), (this.y = i ? Math.round(e) : e);
    }
    var hi =
      Math.trunc ||
      function (t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t);
      };
    y.prototype = {
      clone: function () {
        return new y(this.x, this.y);
      },
      add: function (t) {
        return this.clone()._add(g(t));
      },
      _add: function (t) {
        return (this.x += t.x), (this.y += t.y), this;
      },
      subtract: function (t) {
        return this.clone()._subtract(g(t));
      },
      _subtract: function (t) {
        return (this.x -= t.x), (this.y -= t.y), this;
      },
      divideBy: function (t) {
        return this.clone()._divideBy(t);
      },
      _divideBy: function (t) {
        return (this.x /= t), (this.y /= t), this;
      },
      multiplyBy: function (t) {
        return this.clone()._multiplyBy(t);
      },
      _multiplyBy: function (t) {
        return (this.x *= t), (this.y *= t), this;
      },
      scaleBy: function (t) {
        return new y(this.x * t.x, this.y * t.y);
      },
      unscaleBy: function (t) {
        return new y(this.x / t.x, this.y / t.y);
      },
      round: function () {
        return this.clone()._round();
      },
      _round: function () {
        return (
          (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
        );
      },
      floor: function () {
        return this.clone()._floor();
      },
      _floor: function () {
        return (
          (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
        );
      },
      ceil: function () {
        return this.clone()._ceil();
      },
      _ceil: function () {
        return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
      },
      trunc: function () {
        return this.clone()._trunc();
      },
      _trunc: function () {
        return (this.x = hi(this.x)), (this.y = hi(this.y)), this;
      },
      distanceTo: function (t) {
        t = g(t);
        var e = t.x - this.x,
          i = t.y - this.y;
        return Math.sqrt(e * e + i * i);
      },
      equals: function (t) {
        return (t = g(t)), t.x === this.x && t.y === this.y;
      },
      contains: function (t) {
        return (
          (t = g(t)),
          Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        );
      },
      toString: function () {
        return "Point(" + j(this.x) + ", " + j(this.y) + ")";
      },
    };
    function g(t, e, i) {
      return t instanceof y
        ? t
        : $(t)
        ? new y(t[0], t[1])
        : t == null
        ? t
        : typeof t == "object" && "x" in t && "y" in t
        ? new y(t.x, t.y)
        : new y(t, e, i);
    }
    function Z(t, e) {
      if (t)
        for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
          this.extend(i[n]);
    }
    Z.prototype = {
      extend: function (t) {
        var e, i;
        if (!t) return this;
        if (t instanceof y || typeof t[0] == "number" || "x" in t) e = i = g(t);
        else if (((t = G(t)), (e = t.min), (i = t.max), !e || !i)) return this;
        return (
          !this.min && !this.max
            ? ((this.min = e.clone()), (this.max = i.clone()))
            : ((this.min.x = Math.min(e.x, this.min.x)),
              (this.max.x = Math.max(i.x, this.max.x)),
              (this.min.y = Math.min(e.y, this.min.y)),
              (this.max.y = Math.max(i.y, this.max.y))),
          this
        );
      },
      getCenter: function (t) {
        return g(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          t
        );
      },
      getBottomLeft: function () {
        return g(this.min.x, this.max.y);
      },
      getTopRight: function () {
        return g(this.max.x, this.min.y);
      },
      getTopLeft: function () {
        return this.min;
      },
      getBottomRight: function () {
        return this.max;
      },
      getSize: function () {
        return this.max.subtract(this.min);
      },
      contains: function (t) {
        var e, i;
        return (
          typeof t[0] == "number" || t instanceof y ? (t = g(t)) : (t = G(t)),
          t instanceof Z ? ((e = t.min), (i = t.max)) : (e = i = t),
          e.x >= this.min.x &&
            i.x <= this.max.x &&
            e.y >= this.min.y &&
            i.y <= this.max.y
        );
      },
      intersects: function (t) {
        t = G(t);
        var e = this.min,
          i = this.max,
          n = t.min,
          o = t.max,
          s = o.x >= e.x && n.x <= i.x,
          r = o.y >= e.y && n.y <= i.y;
        return s && r;
      },
      overlaps: function (t) {
        t = G(t);
        var e = this.min,
          i = this.max,
          n = t.min,
          o = t.max,
          s = o.x > e.x && n.x < i.x,
          r = o.y > e.y && n.y < i.y;
        return s && r;
      },
      isValid: function () {
        return !!(this.min && this.max);
      },
      pad: function (t) {
        var e = this.min,
          i = this.max,
          n = Math.abs(e.x - i.x) * t,
          o = Math.abs(e.y - i.y) * t;
        return G(g(e.x - n, e.y - o), g(i.x + n, i.y + o));
      },
      equals: function (t) {
        return t
          ? ((t = G(t)),
            this.min.equals(t.getTopLeft()) &&
              this.max.equals(t.getBottomRight()))
          : !1;
      },
    };
    function G(t, e) {
      return !t || t instanceof Z ? t : new Z(t, e);
    }
    function V(t, e) {
      if (t)
        for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
          this.extend(i[n]);
    }
    V.prototype = {
      extend: function (t) {
        var e = this._southWest,
          i = this._northEast,
          n,
          o;
        if (t instanceof S) (n = t), (o = t);
        else if (t instanceof V) {
          if (((n = t._southWest), (o = t._northEast), !n || !o)) return this;
        } else return t ? this.extend(E(t) || H(t)) : this;
        return (
          !e && !i
            ? ((this._southWest = new S(n.lat, n.lng)),
              (this._northEast = new S(o.lat, o.lng)))
            : ((e.lat = Math.min(n.lat, e.lat)),
              (e.lng = Math.min(n.lng, e.lng)),
              (i.lat = Math.max(o.lat, i.lat)),
              (i.lng = Math.max(o.lng, i.lng))),
          this
        );
      },
      pad: function (t) {
        var e = this._southWest,
          i = this._northEast,
          n = Math.abs(e.lat - i.lat) * t,
          o = Math.abs(e.lng - i.lng) * t;
        return new V(new S(e.lat - n, e.lng - o), new S(i.lat + n, i.lng + o));
      },
      getCenter: function () {
        return new S(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      getSouthWest: function () {
        return this._southWest;
      },
      getNorthEast: function () {
        return this._northEast;
      },
      getNorthWest: function () {
        return new S(this.getNorth(), this.getWest());
      },
      getSouthEast: function () {
        return new S(this.getSouth(), this.getEast());
      },
      getWest: function () {
        return this._southWest.lng;
      },
      getSouth: function () {
        return this._southWest.lat;
      },
      getEast: function () {
        return this._northEast.lng;
      },
      getNorth: function () {
        return this._northEast.lat;
      },
      contains: function (t) {
        typeof t[0] == "number" || t instanceof S || "lat" in t
          ? (t = E(t))
          : (t = H(t));
        var e = this._southWest,
          i = this._northEast,
          n,
          o;
        return (
          t instanceof V
            ? ((n = t.getSouthWest()), (o = t.getNorthEast()))
            : (n = o = t),
          n.lat >= e.lat && o.lat <= i.lat && n.lng >= e.lng && o.lng <= i.lng
        );
      },
      intersects: function (t) {
        t = H(t);
        var e = this._southWest,
          i = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat >= e.lat && n.lat <= i.lat,
          r = o.lng >= e.lng && n.lng <= i.lng;
        return s && r;
      },
      overlaps: function (t) {
        t = H(t);
        var e = this._southWest,
          i = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat > e.lat && n.lat < i.lat,
          r = o.lng > e.lng && n.lng < i.lng;
        return s && r;
      },
      toBBoxString: function () {
        return [
          this.getWest(),
          this.getSouth(),
          this.getEast(),
          this.getNorth(),
        ].join(",");
      },
      equals: function (t, e) {
        return t
          ? ((t = H(t)),
            this._southWest.equals(t.getSouthWest(), e) &&
              this._northEast.equals(t.getNorthEast(), e))
          : !1;
      },
      isValid: function () {
        return !!(this._southWest && this._northEast);
      },
    };
    function H(t, e) {
      return t instanceof V ? t : new V(t, e);
    }
    function S(t, e, i) {
      if (isNaN(t) || isNaN(e))
        throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
      (this.lat = +t), (this.lng = +e), i !== void 0 && (this.alt = +i);
    }
    S.prototype = {
      equals: function (t, e) {
        if (!t) return !1;
        t = E(t);
        var i = Math.max(
          Math.abs(this.lat - t.lat),
          Math.abs(this.lng - t.lng)
        );
        return i <= (e === void 0 ? 1e-9 : e);
      },
      toString: function (t) {
        return "LatLng(" + j(this.lat, t) + ", " + j(this.lng, t) + ")";
      },
      distanceTo: function (t) {
        return _t.distance(this, E(t));
      },
      wrap: function () {
        return _t.wrapLatLng(this);
      },
      toBounds: function (t) {
        var e = (180 * t) / 40075017,
          i = e / Math.cos((Math.PI / 180) * this.lat);
        return H([this.lat - e, this.lng - i], [this.lat + e, this.lng + i]);
      },
      clone: function () {
        return new S(this.lat, this.lng, this.alt);
      },
    };
    function E(t, e, i) {
      return t instanceof S
        ? t
        : $(t) && typeof t[0] != "object"
        ? t.length === 3
          ? new S(t[0], t[1], t[2])
          : t.length === 2
          ? new S(t[0], t[1])
          : null
        : t == null
        ? t
        : typeof t == "object" && "lat" in t
        ? new S(t.lat, "lng" in t ? t.lng : t.lon, t.alt)
        : e === void 0
        ? null
        : new S(t, e, i);
    }
    var at = {
        latLngToPoint: function (t, e) {
          var i = this.projection.project(t),
            n = this.scale(e);
          return this.transformation._transform(i, n);
        },
        pointToLatLng: function (t, e) {
          var i = this.scale(e),
            n = this.transformation.untransform(t, i);
          return this.projection.unproject(n);
        },
        project: function (t) {
          return this.projection.project(t);
        },
        unproject: function (t) {
          return this.projection.unproject(t);
        },
        scale: function (t) {
          return 256 * Math.pow(2, t);
        },
        zoom: function (t) {
          return Math.log(t / 256) / Math.LN2;
        },
        getProjectedBounds: function (t) {
          if (this.infinite) return null;
          var e = this.projection.bounds,
            i = this.scale(t),
            n = this.transformation.transform(e.min, i),
            o = this.transformation.transform(e.max, i);
          return new Z(n, o);
        },
        infinite: !1,
        wrapLatLng: function (t) {
          var e = this.wrapLng ? gt(t.lng, this.wrapLng, !0) : t.lng,
            i = this.wrapLat ? gt(t.lat, this.wrapLat, !0) : t.lat,
            n = t.alt;
          return new S(i, e, n);
        },
        wrapLatLngBounds: function (t) {
          var e = t.getCenter(),
            i = this.wrapLatLng(e),
            n = e.lat - i.lat,
            o = e.lng - i.lng;
          if (n === 0 && o === 0) return t;
          var s = t.getSouthWest(),
            r = t.getNorthEast(),
            a = new S(s.lat - n, s.lng - o),
            u = new S(r.lat - n, r.lng - o);
          return new V(a, u);
        },
      },
      _t = d({}, at, {
        wrapLng: [-180, 180],
        R: 6371e3,
        distance: function (t, e) {
          var i = Math.PI / 180,
            n = t.lat * i,
            o = e.lat * i,
            s = Math.sin(((e.lat - t.lat) * i) / 2),
            r = Math.sin(((e.lng - t.lng) * i) / 2),
            a = s * s + Math.cos(n) * Math.cos(o) * r * r,
            u = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          return this.R * u;
        },
      }),
      ui = 6378137,
      Pe = {
        R: ui,
        MAX_LATITUDE: 85.0511287798,
        project: function (t) {
          var e = Math.PI / 180,
            i = this.MAX_LATITUDE,
            n = Math.max(Math.min(i, t.lat), -i),
            o = Math.sin(n * e);
          return new y(
            this.R * t.lng * e,
            (this.R * Math.log((1 + o) / (1 - o))) / 2
          );
        },
        unproject: function (t) {
          var e = 180 / Math.PI;
          return new S(
            (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
            (t.x * e) / this.R
          );
        },
        bounds: (function () {
          var t = ui * Math.PI;
          return new Z([-t, -t], [t, t]);
        })(),
      };
    function Le(t, e, i, n) {
      if ($(t)) {
        (this._a = t[0]), (this._b = t[1]), (this._c = t[2]), (this._d = t[3]);
        return;
      }
      (this._a = t), (this._b = e), (this._c = i), (this._d = n);
    }
    Le.prototype = {
      transform: function (t, e) {
        return this._transform(t.clone(), e);
      },
      _transform: function (t, e) {
        return (
          (e = e || 1),
          (t.x = e * (this._a * t.x + this._b)),
          (t.y = e * (this._c * t.y + this._d)),
          t
        );
      },
      untransform: function (t, e) {
        return (
          (e = e || 1),
          new y((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
        );
      },
    };
    function Bt(t, e, i, n) {
      return new Le(t, e, i, n);
    }
    var Te = d({}, _t, {
        code: "EPSG:3857",
        projection: Pe,
        transformation: (function () {
          var t = 0.5 / (Math.PI * Pe.R);
          return Bt(t, 0.5, -t, 0.5);
        })(),
      }),
      Sn = d({}, Te, { code: "EPSG:900913" });
    function li(t) {
      return document.createElementNS("http://www.w3.org/2000/svg", t);
    }
    function ci(t, e) {
      var i = "",
        n,
        o,
        s,
        r,
        a,
        u;
      for (n = 0, s = t.length; n < s; n++) {
        for (a = t[n], o = 0, r = a.length; o < r; o++)
          (u = a[o]), (i += (o ? "L" : "M") + u.x + " " + u.y);
        i += e ? (m.svg ? "z" : "x") : "";
      }
      return i || "M0 0";
    }
    var be = document.documentElement.style,
      Qt = "ActiveXObject" in window,
      zn = Qt && !document.addEventListener,
      fi = "msLaunchUri" in navigator && !("documentMode" in document),
      Me = et("webkit"),
      di = et("android"),
      _i = et("android 2") || et("android 3"),
      En = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
      kn = di && et("Google") && En < 537 && !("AudioNode" in window),
      Ce = !!window.opera,
      mi = !fi && et("chrome"),
      pi = et("gecko") && !Me && !Ce && !Qt,
      On = !mi && et("safari"),
      vi = et("phantom"),
      gi = "OTransition" in be,
      Zn = navigator.platform.indexOf("Win") === 0,
      yi = Qt && "transition" in be,
      Se =
        "WebKitCSSMatrix" in window &&
        "m11" in new window.WebKitCSSMatrix() &&
        !_i,
      wi = "MozPerspective" in be,
      In = !window.L_DISABLE_3D && (yi || Se || wi) && !gi && !vi,
      Rt = typeof orientation < "u" || et("mobile"),
      An = Rt && Me,
      Bn = Rt && Se,
      xi = !window.PointerEvent && window.MSPointerEvent,
      Pi = !!(window.PointerEvent || xi),
      Li = "ontouchstart" in window || !!window.TouchEvent,
      Rn = !window.L_NO_TOUCH && (Li || Pi),
      Nn = Rt && Ce,
      Dn = Rt && pi,
      Hn =
        (window.devicePixelRatio ||
          window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
      Fn = (function () {
        var t = !1;
        try {
          var e = Object.defineProperty({}, "passive", {
            get: function () {
              t = !0;
            },
          });
          window.addEventListener("testPassiveEventSupport", O, e),
            window.removeEventListener("testPassiveEventSupport", O, e);
        } catch {}
        return t;
      })(),
      Wn = (function () {
        return !!document.createElement("canvas").getContext;
      })(),
      ze = !!(document.createElementNS && li("svg").createSVGRect),
      Un =
        !!ze &&
        (function () {
          var t = document.createElement("div");
          return (
            (t.innerHTML = "<svg/>"),
            (t.firstChild && t.firstChild.namespaceURI) ===
              "http://www.w3.org/2000/svg"
          );
        })(),
      Gn =
        !ze &&
        (function () {
          try {
            var t = document.createElement("div");
            t.innerHTML = '<v:shape adj="1"/>';
            var e = t.firstChild;
            return (
              (e.style.behavior = "url(#default#VML)"),
              e && typeof e.adj == "object"
            );
          } catch {
            return !1;
          }
        })(),
      Vn = navigator.platform.indexOf("Mac") === 0,
      qn = navigator.platform.indexOf("Linux") === 0;
    function et(t) {
      return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
    }
    var m = {
        ie: Qt,
        ielt9: zn,
        edge: fi,
        webkit: Me,
        android: di,
        android23: _i,
        androidStock: kn,
        opera: Ce,
        chrome: mi,
        gecko: pi,
        safari: On,
        phantom: vi,
        opera12: gi,
        win: Zn,
        ie3d: yi,
        webkit3d: Se,
        gecko3d: wi,
        any3d: In,
        mobile: Rt,
        mobileWebkit: An,
        mobileWebkit3d: Bn,
        msPointer: xi,
        pointer: Pi,
        touch: Rn,
        touchNative: Li,
        mobileOpera: Nn,
        mobileGecko: Dn,
        retina: Hn,
        passiveEvents: Fn,
        canvas: Wn,
        svg: ze,
        vml: Gn,
        inlineSvg: Un,
        mac: Vn,
        linux: qn,
      },
      Ti = m.msPointer ? "MSPointerDown" : "pointerdown",
      bi = m.msPointer ? "MSPointerMove" : "pointermove",
      Mi = m.msPointer ? "MSPointerUp" : "pointerup",
      Ci = m.msPointer ? "MSPointerCancel" : "pointercancel",
      Ee = { touchstart: Ti, touchmove: bi, touchend: Mi, touchcancel: Ci },
      Si = { touchstart: $n, touchmove: te, touchend: te, touchcancel: te },
      Mt = {},
      zi = !1;
    function jn(t, e, i) {
      return (
        e === "touchstart" && Jn(),
        Si[e]
          ? ((i = Si[e].bind(this, i)), t.addEventListener(Ee[e], i, !1), i)
          : (console.warn("wrong event specified:", e), O)
      );
    }
    function Kn(t, e, i) {
      if (!Ee[e]) {
        console.warn("wrong event specified:", e);
        return;
      }
      t.removeEventListener(Ee[e], i, !1);
    }
    function Yn(t) {
      Mt[t.pointerId] = t;
    }
    function Xn(t) {
      Mt[t.pointerId] && (Mt[t.pointerId] = t);
    }
    function Ei(t) {
      delete Mt[t.pointerId];
    }
    function Jn() {
      zi ||
        (document.addEventListener(Ti, Yn, !0),
        document.addEventListener(bi, Xn, !0),
        document.addEventListener(Mi, Ei, !0),
        document.addEventListener(Ci, Ei, !0),
        (zi = !0));
    }
    function te(t, e) {
      if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
        e.touches = [];
        for (var i in Mt) e.touches.push(Mt[i]);
        (e.changedTouches = [e]), t(e);
      }
    }
    function $n(t, e) {
      e.MSPOINTER_TYPE_TOUCH &&
        e.pointerType === e.MSPOINTER_TYPE_TOUCH &&
        F(e),
        te(t, e);
    }
    function Qn(t) {
      var e = {},
        i,
        n;
      for (n in t) (i = t[n]), (e[n] = i && i.bind ? i.bind(t) : i);
      return (
        (t = e),
        (e.type = "dblclick"),
        (e.detail = 2),
        (e.isTrusted = !1),
        (e._simulated = !0),
        e
      );
    }
    var to = 200;
    function eo(t, e) {
      t.addEventListener("dblclick", e);
      var i = 0,
        n;
      function o(s) {
        if (s.detail !== 1) {
          n = s.detail;
          return;
        }
        if (
          !(
            s.pointerType === "mouse" ||
            (s.sourceCapabilities && !s.sourceCapabilities.firesTouchEvents)
          )
        ) {
          var r = Ai(s);
          if (
            !(
              r.some(function (u) {
                return u instanceof HTMLLabelElement && u.attributes.for;
              }) &&
              !r.some(function (u) {
                return (
                  u instanceof HTMLInputElement ||
                  u instanceof HTMLSelectElement
                );
              })
            )
          ) {
            var a = Date.now();
            a - i <= to ? (n++, n === 2 && e(Qn(s))) : (n = 1), (i = a);
          }
        }
      }
      return t.addEventListener("click", o), { dblclick: e, simDblclick: o };
    }
    function io(t, e) {
      t.removeEventListener("dblclick", e.dblclick),
        t.removeEventListener("click", e.simDblclick);
    }
    var ke = ne([
        "transform",
        "webkitTransform",
        "OTransform",
        "MozTransform",
        "msTransform",
      ]),
      Nt = ne([
        "webkitTransition",
        "transition",
        "OTransition",
        "MozTransition",
        "msTransition",
      ]),
      ki =
        Nt === "webkitTransition" || Nt === "OTransition"
          ? Nt + "End"
          : "transitionend";
    function Oi(t) {
      return typeof t == "string" ? document.getElementById(t) : t;
    }
    function Dt(t, e) {
      var i = t.style[e] || (t.currentStyle && t.currentStyle[e]);
      if ((!i || i === "auto") && document.defaultView) {
        var n = document.defaultView.getComputedStyle(t, null);
        i = n ? n[e] : null;
      }
      return i === "auto" ? null : i;
    }
    function C(t, e, i) {
      var n = document.createElement(t);
      return (n.className = e || ""), i && i.appendChild(n), n;
    }
    function I(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    }
    function ee(t) {
      for (; t.firstChild; ) t.removeChild(t.firstChild);
    }
    function Ct(t) {
      var e = t.parentNode;
      e && e.lastChild !== t && e.appendChild(t);
    }
    function St(t) {
      var e = t.parentNode;
      e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
    }
    function Oe(t, e) {
      if (t.classList !== void 0) return t.classList.contains(e);
      var i = ie(t);
      return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i);
    }
    function x(t, e) {
      if (t.classList !== void 0)
        for (var i = st(e), n = 0, o = i.length; n < o; n++)
          t.classList.add(i[n]);
      else if (!Oe(t, e)) {
        var s = ie(t);
        Ze(t, (s ? s + " " : "") + e);
      }
    }
    function R(t, e) {
      t.classList !== void 0
        ? t.classList.remove(e)
        : Ze(t, W((" " + ie(t) + " ").replace(" " + e + " ", " ")));
    }
    function Ze(t, e) {
      t.className.baseVal === void 0
        ? (t.className = e)
        : (t.className.baseVal = e);
    }
    function ie(t) {
      return (
        t.correspondingElement && (t = t.correspondingElement),
        t.className.baseVal === void 0 ? t.className : t.className.baseVal
      );
    }
    function Y(t, e) {
      "opacity" in t.style
        ? (t.style.opacity = e)
        : "filter" in t.style && no(t, e);
    }
    function no(t, e) {
      var i = !1,
        n = "DXImageTransform.Microsoft.Alpha";
      try {
        i = t.filters.item(n);
      } catch {
        if (e === 1) return;
      }
      (e = Math.round(e * 100)),
        i
          ? ((i.Enabled = e !== 100), (i.Opacity = e))
          : (t.style.filter += " progid:" + n + "(opacity=" + e + ")");
    }
    function ne(t) {
      for (var e = document.documentElement.style, i = 0; i < t.length; i++)
        if (t[i] in e) return t[i];
      return !1;
    }
    function wt(t, e, i) {
      var n = e || new y(0, 0);
      t.style[ke] =
        (m.ie3d
          ? "translate(" + n.x + "px," + n.y + "px)"
          : "translate3d(" + n.x + "px," + n.y + "px,0)") +
        (i ? " scale(" + i + ")" : "");
    }
    function N(t, e) {
      (t._leaflet_pos = e),
        m.any3d
          ? wt(t, e)
          : ((t.style.left = e.x + "px"), (t.style.top = e.y + "px"));
    }
    function xt(t) {
      return t._leaflet_pos || new y(0, 0);
    }
    var Ht, Ft, Ie;
    if ("onselectstart" in document)
      (Ht = function () {
        w(window, "selectstart", F);
      }),
        (Ft = function () {
          k(window, "selectstart", F);
        });
    else {
      var Wt = ne([
        "userSelect",
        "WebkitUserSelect",
        "OUserSelect",
        "MozUserSelect",
        "msUserSelect",
      ]);
      (Ht = function () {
        if (Wt) {
          var t = document.documentElement.style;
          (Ie = t[Wt]), (t[Wt] = "none");
        }
      }),
        (Ft = function () {
          Wt && ((document.documentElement.style[Wt] = Ie), (Ie = void 0));
        });
    }
    function Ae() {
      w(window, "dragstart", F);
    }
    function Be() {
      k(window, "dragstart", F);
    }
    var oe, Re;
    function Ne(t) {
      for (; t.tabIndex === -1; ) t = t.parentNode;
      t.style &&
        (se(),
        (oe = t),
        (Re = t.style.outline),
        (t.style.outline = "none"),
        w(window, "keydown", se));
    }
    function se() {
      oe &&
        ((oe.style.outline = Re),
        (oe = void 0),
        (Re = void 0),
        k(window, "keydown", se));
    }
    function Zi(t) {
      do t = t.parentNode;
      while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
      return t;
    }
    function De(t) {
      var e = t.getBoundingClientRect();
      return {
        x: e.width / t.offsetWidth || 1,
        y: e.height / t.offsetHeight || 1,
        boundingClientRect: e,
      };
    }
    var oo = {
      __proto__: null,
      TRANSFORM: ke,
      TRANSITION: Nt,
      TRANSITION_END: ki,
      get: Oi,
      getStyle: Dt,
      create: C,
      remove: I,
      empty: ee,
      toFront: Ct,
      toBack: St,
      hasClass: Oe,
      addClass: x,
      removeClass: R,
      setClass: Ze,
      getClass: ie,
      setOpacity: Y,
      testProp: ne,
      setTransform: wt,
      setPosition: N,
      getPosition: xt,
      get disableTextSelection() {
        return Ht;
      },
      get enableTextSelection() {
        return Ft;
      },
      disableImageDrag: Ae,
      enableImageDrag: Be,
      preventOutline: Ne,
      restoreOutline: se,
      getSizedParentNode: Zi,
      getScale: De,
    };
    function w(t, e, i, n) {
      if (e && typeof e == "object") for (var o in e) Fe(t, o, e[o], i);
      else {
        e = st(e);
        for (var s = 0, r = e.length; s < r; s++) Fe(t, e[s], i, n);
      }
      return this;
    }
    var it = "_leaflet_events";
    function k(t, e, i, n) {
      if (arguments.length === 1) Ii(t), delete t[it];
      else if (e && typeof e == "object") for (var o in e) We(t, o, e[o], i);
      else if (((e = st(e)), arguments.length === 2))
        Ii(t, function (a) {
          return ye(e, a) !== -1;
        });
      else for (var s = 0, r = e.length; s < r; s++) We(t, e[s], i, n);
      return this;
    }
    function Ii(t, e) {
      for (var i in t[it]) {
        var n = i.split(/\d/)[0];
        (!e || e(n)) && We(t, n, null, null, i);
      }
    }
    var He = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel",
    };
    function Fe(t, e, i, n) {
      var o = e + P(i) + (n ? "_" + P(n) : "");
      if (t[it] && t[it][o]) return this;
      var s = function (a) {
          return i.call(n || t, a || window.event);
        },
        r = s;
      !m.touchNative && m.pointer && e.indexOf("touch") === 0
        ? (s = jn(t, e, s))
        : m.touch && e === "dblclick"
        ? (s = eo(t, s))
        : "addEventListener" in t
        ? e === "touchstart" ||
          e === "touchmove" ||
          e === "wheel" ||
          e === "mousewheel"
          ? t.addEventListener(
              He[e] || e,
              s,
              m.passiveEvents ? { passive: !1 } : !1
            )
          : e === "mouseenter" || e === "mouseleave"
          ? ((s = function (a) {
              (a = a || window.event), Ge(t, a) && r(a);
            }),
            t.addEventListener(He[e], s, !1))
          : t.addEventListener(e, r, !1)
        : t.attachEvent("on" + e, s),
        (t[it] = t[it] || {}),
        (t[it][o] = s);
    }
    function We(t, e, i, n, o) {
      o = o || e + P(i) + (n ? "_" + P(n) : "");
      var s = t[it] && t[it][o];
      if (!s) return this;
      !m.touchNative && m.pointer && e.indexOf("touch") === 0
        ? Kn(t, e, s)
        : m.touch && e === "dblclick"
        ? io(t, s)
        : "removeEventListener" in t
        ? t.removeEventListener(He[e] || e, s, !1)
        : t.detachEvent("on" + e, s),
        (t[it][o] = null);
    }
    function Pt(t) {
      return (
        t.stopPropagation
          ? t.stopPropagation()
          : t.originalEvent
          ? (t.originalEvent._stopped = !0)
          : (t.cancelBubble = !0),
        this
      );
    }
    function Ue(t) {
      return Fe(t, "wheel", Pt), this;
    }
    function Ut(t) {
      return (
        w(t, "mousedown touchstart dblclick contextmenu", Pt),
        (t._leaflet_disable_click = !0),
        this
      );
    }
    function F(t) {
      return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
    }
    function Lt(t) {
      return F(t), Pt(t), this;
    }
    function Ai(t) {
      if (t.composedPath) return t.composedPath();
      for (var e = [], i = t.target; i; ) e.push(i), (i = i.parentNode);
      return e;
    }
    function Bi(t, e) {
      if (!e) return new y(t.clientX, t.clientY);
      var i = De(e),
        n = i.boundingClientRect;
      return new y(
        (t.clientX - n.left) / i.x - e.clientLeft,
        (t.clientY - n.top) / i.y - e.clientTop
      );
    }
    var so =
      m.linux && m.chrome
        ? window.devicePixelRatio
        : m.mac
        ? window.devicePixelRatio * 3
        : window.devicePixelRatio > 0
        ? 2 * window.devicePixelRatio
        : 1;
    function Ri(t) {
      return m.edge
        ? t.wheelDeltaY / 2
        : t.deltaY && t.deltaMode === 0
        ? -t.deltaY / so
        : t.deltaY && t.deltaMode === 1
        ? -t.deltaY * 20
        : t.deltaY && t.deltaMode === 2
        ? -t.deltaY * 60
        : t.deltaX || t.deltaZ
        ? 0
        : t.wheelDelta
        ? (t.wheelDeltaY || t.wheelDelta) / 2
        : t.detail && Math.abs(t.detail) < 32765
        ? -t.detail * 20
        : t.detail
        ? (t.detail / -32765) * 60
        : 0;
    }
    function Ge(t, e) {
      var i = e.relatedTarget;
      if (!i) return !0;
      try {
        for (; i && i !== t; ) i = i.parentNode;
      } catch {
        return !1;
      }
      return i !== t;
    }
    var ro = {
        __proto__: null,
        on: w,
        off: k,
        stopPropagation: Pt,
        disableScrollPropagation: Ue,
        disableClickPropagation: Ut,
        preventDefault: F,
        stop: Lt,
        getPropagationPath: Ai,
        getMousePosition: Bi,
        getWheelDelta: Ri,
        isExternalTarget: Ge,
        addListener: w,
        removeListener: k,
      },
      Ni = At.extend({
        run: function (t, e, i, n) {
          this.stop(),
            (this._el = t),
            (this._inProgress = !0),
            (this._duration = i || 0.25),
            (this._easeOutPower = 1 / Math.max(n || 0.5, 0.2)),
            (this._startPos = xt(t)),
            (this._offset = e.subtract(this._startPos)),
            (this._startTime = +new Date()),
            this.fire("start"),
            this._animate();
        },
        stop: function () {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function () {
          (this._animId = U(this._animate, this)), this._step();
        },
        _step: function (t) {
          var e = +new Date() - this._startTime,
            i = this._duration * 1e3;
          e < i
            ? this._runFrame(this._easeOut(e / i), t)
            : (this._runFrame(1), this._complete());
        },
        _runFrame: function (t, e) {
          var i = this._startPos.add(this._offset.multiplyBy(t));
          e && i._round(), N(this._el, i), this.fire("step");
        },
        _complete: function () {
          K(this._animId), (this._inProgress = !1), this.fire("end");
        },
        _easeOut: function (t) {
          return 1 - Math.pow(1 - t, this._easeOutPower);
        },
      }),
      b = At.extend({
        options: {
          crs: Te,
          center: void 0,
          zoom: void 0,
          minZoom: void 0,
          maxZoom: void 0,
          layers: [],
          maxBounds: void 0,
          renderer: void 0,
          zoomAnimation: !0,
          zoomAnimationThreshold: 4,
          fadeAnimation: !0,
          markerZoomAnimation: !0,
          transform3DLimit: 8388608,
          zoomSnap: 1,
          zoomDelta: 1,
          trackResize: !0,
        },
        initialize: function (t, e) {
          (e = z(this, e)),
            (this._handlers = []),
            (this._layers = {}),
            (this._zoomBoundLayers = {}),
            (this._sizeChanged = !0),
            this._initContainer(t),
            this._initLayout(),
            (this._onResize = M(this._onResize, this)),
            this._initEvents(),
            e.maxBounds && this.setMaxBounds(e.maxBounds),
            e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)),
            e.center &&
              e.zoom !== void 0 &&
              this.setView(E(e.center), e.zoom, { reset: !0 }),
            this.callInitHooks(),
            (this._zoomAnimated =
              Nt && m.any3d && !m.mobileOpera && this.options.zoomAnimation),
            this._zoomAnimated &&
              (this._createAnimProxy(),
              w(this._proxy, ki, this._catchTransitionEnd, this)),
            this._addLayers(this.options.layers);
        },
        setView: function (t, e, i) {
          if (
            ((e = e === void 0 ? this._zoom : this._limitZoom(e)),
            (t = this._limitCenter(E(t), e, this.options.maxBounds)),
            (i = i || {}),
            this._stop(),
            this._loaded && !i.reset && i !== !0)
          ) {
            i.animate !== void 0 &&
              ((i.zoom = d({ animate: i.animate }, i.zoom)),
              (i.pan = d({ animate: i.animate, duration: i.duration }, i.pan)));
            var n =
              this._zoom !== e
                ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom)
                : this._tryAnimatedPan(t, i.pan);
            if (n) return clearTimeout(this._sizeTimer), this;
          }
          return this._resetView(t, e, i.pan && i.pan.noMoveStart), this;
        },
        setZoom: function (t, e) {
          return this._loaded
            ? this.setView(this.getCenter(), t, { zoom: e })
            : ((this._zoom = t), this);
        },
        zoomIn: function (t, e) {
          return (
            (t = t || (m.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom + t, e)
          );
        },
        zoomOut: function (t, e) {
          return (
            (t = t || (m.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom - t, e)
          );
        },
        setZoomAround: function (t, e, i) {
          var n = this.getZoomScale(e),
            o = this.getSize().divideBy(2),
            s = t instanceof y ? t : this.latLngToContainerPoint(t),
            r = s.subtract(o).multiplyBy(1 - 1 / n),
            a = this.containerPointToLatLng(o.add(r));
          return this.setView(a, e, { zoom: i });
        },
        _getBoundsCenterZoom: function (t, e) {
          (e = e || {}), (t = t.getBounds ? t.getBounds() : H(t));
          var i = g(e.paddingTopLeft || e.padding || [0, 0]),
            n = g(e.paddingBottomRight || e.padding || [0, 0]),
            o = this.getBoundsZoom(t, !1, i.add(n));
          if (
            ((o = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, o) : o),
            o === 1 / 0)
          )
            return { center: t.getCenter(), zoom: o };
          var s = n.subtract(i).divideBy(2),
            r = this.project(t.getSouthWest(), o),
            a = this.project(t.getNorthEast(), o),
            u = this.unproject(r.add(a).divideBy(2).add(s), o);
          return { center: u, zoom: o };
        },
        fitBounds: function (t, e) {
          if (((t = H(t)), !t.isValid()))
            throw new Error("Bounds are not valid.");
          var i = this._getBoundsCenterZoom(t, e);
          return this.setView(i.center, i.zoom, e);
        },
        fitWorld: function (t) {
          return this.fitBounds(
            [
              [-90, -180],
              [90, 180],
            ],
            t
          );
        },
        panTo: function (t, e) {
          return this.setView(t, this._zoom, { pan: e });
        },
        panBy: function (t, e) {
          if (((t = g(t).round()), (e = e || {}), !t.x && !t.y))
            return this.fire("moveend");
          if (e.animate !== !0 && !this.getSize().contains(t))
            return (
              this._resetView(
                this.unproject(this.project(this.getCenter()).add(t)),
                this.getZoom()
              ),
              this
            );
          if (
            (this._panAnim ||
              ((this._panAnim = new Ni()),
              this._panAnim.on(
                {
                  step: this._onPanTransitionStep,
                  end: this._onPanTransitionEnd,
                },
                this
              )),
            e.noMoveStart || this.fire("movestart"),
            e.animate !== !1)
          ) {
            x(this._mapPane, "leaflet-pan-anim");
            var i = this._getMapPanePos().subtract(t).round();
            this._panAnim.run(
              this._mapPane,
              i,
              e.duration || 0.25,
              e.easeLinearity
            );
          } else this._rawPanBy(t), this.fire("move").fire("moveend");
          return this;
        },
        flyTo: function (t, e, i) {
          if (((i = i || {}), i.animate === !1 || !m.any3d))
            return this.setView(t, e, i);
          this._stop();
          var n = this.project(this.getCenter()),
            o = this.project(t),
            s = this.getSize(),
            r = this._zoom;
          (t = E(t)), (e = e === void 0 ? r : e);
          var a = Math.max(s.x, s.y),
            u = a * this.getZoomScale(r, e),
            l = o.distanceTo(n) || 1,
            c = 1.42,
            v = c * c;
          function T(D) {
            var ge = D ? -1 : 1,
              Yo = D ? u : a,
              Xo = u * u - a * a + ge * v * v * l * l,
              Jo = 2 * Yo * v * l,
              ei = Xo / Jo,
              yn = Math.sqrt(ei * ei + 1) - ei,
              $o = yn < 1e-9 ? -18 : Math.log(yn);
            return $o;
          }
          function J(D) {
            return (Math.exp(D) - Math.exp(-D)) / 2;
          }
          function bt(D) {
            return (Math.exp(D) + Math.exp(-D)) / 2;
          }
          function ve(D) {
            return J(D) / bt(D);
          }
          var vt = T(0);
          function ti(D) {
            return a * (bt(vt) / bt(vt + c * D));
          }
          function Vo(D) {
            return (a * (bt(vt) * ve(vt + c * D) - J(vt))) / v;
          }
          function qo(D) {
            return 1 - Math.pow(1 - D, 1.5);
          }
          var jo = Date.now(),
            vn = (T(1) - vt) / c,
            Ko = i.duration ? 1e3 * i.duration : 1e3 * vn * 0.8;
          function gn() {
            var D = (Date.now() - jo) / Ko,
              ge = qo(D) * vn;
            D <= 1
              ? ((this._flyToFrame = U(gn, this)),
                this._move(
                  this.unproject(
                    n.add(o.subtract(n).multiplyBy(Vo(ge) / l)),
                    r
                  ),
                  this.getScaleZoom(a / ti(ge), r),
                  { flyTo: !0 }
                ))
              : this._move(t, e)._moveEnd(!0);
          }
          return this._moveStart(!0, i.noMoveStart), gn.call(this), this;
        },
        flyToBounds: function (t, e) {
          var i = this._getBoundsCenterZoom(t, e);
          return this.flyTo(i.center, i.zoom, e);
        },
        setMaxBounds: function (t) {
          return (
            (t = H(t)),
            this.listens("moveend", this._panInsideMaxBounds) &&
              this.off("moveend", this._panInsideMaxBounds),
            t.isValid()
              ? ((this.options.maxBounds = t),
                this._loaded && this._panInsideMaxBounds(),
                this.on("moveend", this._panInsideMaxBounds))
              : ((this.options.maxBounds = null), this)
          );
        },
        setMinZoom: function (t) {
          var e = this.options.minZoom;
          return (
            (this.options.minZoom = t),
            this._loaded &&
            e !== t &&
            (this.fire("zoomlevelschange"),
            this.getZoom() < this.options.minZoom)
              ? this.setZoom(t)
              : this
          );
        },
        setMaxZoom: function (t) {
          var e = this.options.maxZoom;
          return (
            (this.options.maxZoom = t),
            this._loaded &&
            e !== t &&
            (this.fire("zoomlevelschange"),
            this.getZoom() > this.options.maxZoom)
              ? this.setZoom(t)
              : this
          );
        },
        panInsideBounds: function (t, e) {
          this._enforcingBounds = !0;
          var i = this.getCenter(),
            n = this._limitCenter(i, this._zoom, H(t));
          return (
            i.equals(n) || this.panTo(n, e), (this._enforcingBounds = !1), this
          );
        },
        panInside: function (t, e) {
          e = e || {};
          var i = g(e.paddingTopLeft || e.padding || [0, 0]),
            n = g(e.paddingBottomRight || e.padding || [0, 0]),
            o = this.project(this.getCenter()),
            s = this.project(t),
            r = this.getPixelBounds(),
            a = G([r.min.add(i), r.max.subtract(n)]),
            u = a.getSize();
          if (!a.contains(s)) {
            this._enforcingBounds = !0;
            var l = s.subtract(a.getCenter()),
              c = a.extend(s).getSize().subtract(u);
            (o.x += l.x < 0 ? -c.x : c.x),
              (o.y += l.y < 0 ? -c.y : c.y),
              this.panTo(this.unproject(o), e),
              (this._enforcingBounds = !1);
          }
          return this;
        },
        invalidateSize: function (t) {
          if (!this._loaded) return this;
          t = d({ animate: !1, pan: !0 }, t === !0 ? { animate: !0 } : t);
          var e = this.getSize();
          (this._sizeChanged = !0), (this._lastCenter = null);
          var i = this.getSize(),
            n = e.divideBy(2).round(),
            o = i.divideBy(2).round(),
            s = n.subtract(o);
          return !s.x && !s.y
            ? this
            : (t.animate && t.pan
                ? this.panBy(s)
                : (t.pan && this._rawPanBy(s),
                  this.fire("move"),
                  t.debounceMoveend
                    ? (clearTimeout(this._sizeTimer),
                      (this._sizeTimer = setTimeout(
                        M(this.fire, this, "moveend"),
                        200
                      )))
                    : this.fire("moveend")),
              this.fire("resize", { oldSize: e, newSize: i }));
        },
        stop: function () {
          return (
            this.setZoom(this._limitZoom(this._zoom)),
            this.options.zoomSnap || this.fire("viewreset"),
            this._stop()
          );
        },
        locate: function (t) {
          if (
            ((t = this._locateOptions = d({ timeout: 1e4, watch: !1 }, t)),
            !("geolocation" in navigator))
          )
            return (
              this._handleGeolocationError({
                code: 0,
                message: "Geolocation not supported.",
              }),
              this
            );
          var e = M(this._handleGeolocationResponse, this),
            i = M(this._handleGeolocationError, this);
          return (
            t.watch
              ? (this._locationWatchId = navigator.geolocation.watchPosition(
                  e,
                  i,
                  t
                ))
              : navigator.geolocation.getCurrentPosition(e, i, t),
            this
          );
        },
        stopLocate: function () {
          return (
            navigator.geolocation &&
              navigator.geolocation.clearWatch &&
              navigator.geolocation.clearWatch(this._locationWatchId),
            this._locateOptions && (this._locateOptions.setView = !1),
            this
          );
        },
        _handleGeolocationError: function (t) {
          if (this._container._leaflet_id) {
            var e = t.code,
              i =
                t.message ||
                (e === 1
                  ? "permission denied"
                  : e === 2
                  ? "position unavailable"
                  : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
              this.fire("locationerror", {
                code: e,
                message: "Geolocation error: " + i + ".",
              });
          }
        },
        _handleGeolocationResponse: function (t) {
          if (this._container._leaflet_id) {
            var e = t.coords.latitude,
              i = t.coords.longitude,
              n = new S(e, i),
              o = n.toBounds(t.coords.accuracy * 2),
              s = this._locateOptions;
            if (s.setView) {
              var r = this.getBoundsZoom(o);
              this.setView(n, s.maxZoom ? Math.min(r, s.maxZoom) : r);
            }
            var a = { latlng: n, bounds: o, timestamp: t.timestamp };
            for (var u in t.coords)
              typeof t.coords[u] == "number" && (a[u] = t.coords[u]);
            this.fire("locationfound", a);
          }
        },
        addHandler: function (t, e) {
          if (!e) return this;
          var i = (this[t] = new e(this));
          return this._handlers.push(i), this.options[t] && i.enable(), this;
        },
        remove: function () {
          if (
            (this._initEvents(!0),
            this.options.maxBounds &&
              this.off("moveend", this._panInsideMaxBounds),
            this._containerId !== this._container._leaflet_id)
          )
            throw new Error(
              "Map container is being reused by another instance"
            );
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch {
            (this._container._leaflet_id = void 0),
              (this._containerId = void 0);
          }
          this._locationWatchId !== void 0 && this.stopLocate(),
            this._stop(),
            I(this._mapPane),
            this._clearControlPos && this._clearControlPos(),
            this._resizeRequest &&
              (K(this._resizeRequest), (this._resizeRequest = null)),
            this._clearHandlers(),
            this._loaded && this.fire("unload");
          var t;
          for (t in this._layers) this._layers[t].remove();
          for (t in this._panes) I(this._panes[t]);
          return (
            (this._layers = []),
            (this._panes = []),
            delete this._mapPane,
            delete this._renderer,
            this
          );
        },
        createPane: function (t, e) {
          var i =
              "leaflet-pane" +
              (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
            n = C("div", i, e || this._mapPane);
          return t && (this._panes[t] = n), n;
        },
        getCenter: function () {
          return (
            this._checkIfLoaded(),
            this._lastCenter && !this._moved()
              ? this._lastCenter.clone()
              : this.layerPointToLatLng(this._getCenterLayerPoint())
          );
        },
        getZoom: function () {
          return this._zoom;
        },
        getBounds: function () {
          var t = this.getPixelBounds(),
            e = this.unproject(t.getBottomLeft()),
            i = this.unproject(t.getTopRight());
          return new V(e, i);
        },
        getMinZoom: function () {
          return this.options.minZoom === void 0
            ? this._layersMinZoom || 0
            : this.options.minZoom;
        },
        getMaxZoom: function () {
          return this.options.maxZoom === void 0
            ? this._layersMaxZoom === void 0
              ? 1 / 0
              : this._layersMaxZoom
            : this.options.maxZoom;
        },
        getBoundsZoom: function (t, e, i) {
          (t = H(t)), (i = g(i || [0, 0]));
          var n = this.getZoom() || 0,
            o = this.getMinZoom(),
            s = this.getMaxZoom(),
            r = t.getNorthWest(),
            a = t.getSouthEast(),
            u = this.getSize().subtract(i),
            l = G(this.project(a, n), this.project(r, n)).getSize(),
            c = m.any3d ? this.options.zoomSnap : 1,
            v = u.x / l.x,
            T = u.y / l.y,
            J = e ? Math.max(v, T) : Math.min(v, T);
          return (
            (n = this.getScaleZoom(J, n)),
            c &&
              ((n = Math.round(n / (c / 100)) * (c / 100)),
              (n = e ? Math.ceil(n / c) * c : Math.floor(n / c) * c)),
            Math.max(o, Math.min(s, n))
          );
        },
        getSize: function () {
          return (
            (!this._size || this._sizeChanged) &&
              ((this._size = new y(
                this._container.clientWidth || 0,
                this._container.clientHeight || 0
              )),
              (this._sizeChanged = !1)),
            this._size.clone()
          );
        },
        getPixelBounds: function (t, e) {
          var i = this._getTopLeftPoint(t, e);
          return new Z(i, i.add(this.getSize()));
        },
        getPixelOrigin: function () {
          return this._checkIfLoaded(), this._pixelOrigin;
        },
        getPixelWorldBounds: function (t) {
          return this.options.crs.getProjectedBounds(
            t === void 0 ? this.getZoom() : t
          );
        },
        getPane: function (t) {
          return typeof t == "string" ? this._panes[t] : t;
        },
        getPanes: function () {
          return this._panes;
        },
        getContainer: function () {
          return this._container;
        },
        getZoomScale: function (t, e) {
          var i = this.options.crs;
          return (e = e === void 0 ? this._zoom : e), i.scale(t) / i.scale(e);
        },
        getScaleZoom: function (t, e) {
          var i = this.options.crs;
          e = e === void 0 ? this._zoom : e;
          var n = i.zoom(t * i.scale(e));
          return isNaN(n) ? 1 / 0 : n;
        },
        project: function (t, e) {
          return (
            (e = e === void 0 ? this._zoom : e),
            this.options.crs.latLngToPoint(E(t), e)
          );
        },
        unproject: function (t, e) {
          return (
            (e = e === void 0 ? this._zoom : e),
            this.options.crs.pointToLatLng(g(t), e)
          );
        },
        layerPointToLatLng: function (t) {
          var e = g(t).add(this.getPixelOrigin());
          return this.unproject(e);
        },
        latLngToLayerPoint: function (t) {
          var e = this.project(E(t))._round();
          return e._subtract(this.getPixelOrigin());
        },
        wrapLatLng: function (t) {
          return this.options.crs.wrapLatLng(E(t));
        },
        wrapLatLngBounds: function (t) {
          return this.options.crs.wrapLatLngBounds(H(t));
        },
        distance: function (t, e) {
          return this.options.crs.distance(E(t), E(e));
        },
        containerPointToLayerPoint: function (t) {
          return g(t).subtract(this._getMapPanePos());
        },
        layerPointToContainerPoint: function (t) {
          return g(t).add(this._getMapPanePos());
        },
        containerPointToLatLng: function (t) {
          var e = this.containerPointToLayerPoint(g(t));
          return this.layerPointToLatLng(e);
        },
        latLngToContainerPoint: function (t) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(E(t)));
        },
        mouseEventToContainerPoint: function (t) {
          return Bi(t, this._container);
        },
        mouseEventToLayerPoint: function (t) {
          return this.containerPointToLayerPoint(
            this.mouseEventToContainerPoint(t)
          );
        },
        mouseEventToLatLng: function (t) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
        },
        _initContainer: function (t) {
          var e = (this._container = Oi(t));
          if (e) {
            if (e._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          w(e, "scroll", this._onScroll, this), (this._containerId = P(e));
        },
        _initLayout: function () {
          var t = this._container;
          (this._fadeAnimated = this.options.fadeAnimation && m.any3d),
            x(
              t,
              "leaflet-container" +
                (m.touch ? " leaflet-touch" : "") +
                (m.retina ? " leaflet-retina" : "") +
                (m.ielt9 ? " leaflet-oldie" : "") +
                (m.safari ? " leaflet-safari" : "") +
                (this._fadeAnimated ? " leaflet-fade-anim" : "")
            );
          var e = Dt(t, "position");
          e !== "absolute" &&
            e !== "relative" &&
            e !== "fixed" &&
            e !== "sticky" &&
            (t.style.position = "relative"),
            this._initPanes(),
            this._initControlPos && this._initControlPos();
        },
        _initPanes: function () {
          var t = (this._panes = {});
          (this._paneRenderers = {}),
            (this._mapPane = this.createPane("mapPane", this._container)),
            N(this._mapPane, new y(0, 0)),
            this.createPane("tilePane"),
            this.createPane("overlayPane"),
            this.createPane("shadowPane"),
            this.createPane("markerPane"),
            this.createPane("tooltipPane"),
            this.createPane("popupPane"),
            this.options.markerZoomAnimation ||
              (x(t.markerPane, "leaflet-zoom-hide"),
              x(t.shadowPane, "leaflet-zoom-hide"));
        },
        _resetView: function (t, e, i) {
          N(this._mapPane, new y(0, 0));
          var n = !this._loaded;
          (this._loaded = !0),
            (e = this._limitZoom(e)),
            this.fire("viewprereset");
          var o = this._zoom !== e;
          this._moveStart(o, i)._move(t, e)._moveEnd(o),
            this.fire("viewreset"),
            n && this.fire("load");
        },
        _moveStart: function (t, e) {
          return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
        },
        _move: function (t, e, i, n) {
          e === void 0 && (e = this._zoom);
          var o = this._zoom !== e;
          return (
            (this._zoom = e),
            (this._lastCenter = t),
            (this._pixelOrigin = this._getNewPixelOrigin(t)),
            n
              ? i && i.pinch && this.fire("zoom", i)
              : ((o || (i && i.pinch)) && this.fire("zoom", i),
                this.fire("move", i)),
            this
          );
        },
        _moveEnd: function (t) {
          return t && this.fire("zoomend"), this.fire("moveend");
        },
        _stop: function () {
          return (
            K(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
          );
        },
        _rawPanBy: function (t) {
          N(this._mapPane, this._getMapPanePos().subtract(t));
        },
        _getZoomSpan: function () {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function () {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function () {
          if (!this._loaded) throw new Error("Set map center and zoom first.");
        },
        _initEvents: function (t) {
          (this._targets = {}), (this._targets[P(this._container)] = this);
          var e = t ? k : w;
          e(
            this._container,
            "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",
            this._handleDOMEvent,
            this
          ),
            this.options.trackResize &&
              e(window, "resize", this._onResize, this),
            m.any3d &&
              this.options.transform3DLimit &&
              (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function () {
          K(this._resizeRequest),
            (this._resizeRequest = U(function () {
              this.invalidateSize({ debounceMoveend: !0 });
            }, this));
        },
        _onScroll: function () {
          (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
        },
        _onMoveEnd: function () {
          var t = this._getMapPanePos();
          Math.max(Math.abs(t.x), Math.abs(t.y)) >=
            this.options.transform3DLimit &&
            this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function (t, e) {
          for (
            var i = [],
              n,
              o = e === "mouseout" || e === "mouseover",
              s = t.target || t.srcElement,
              r = !1;
            s;

          ) {
            if (
              ((n = this._targets[P(s)]),
              n &&
                (e === "click" || e === "preclick") &&
                this._draggableMoved(n))
            ) {
              r = !0;
              break;
            }
            if (
              (n && n.listens(e, !0) && ((o && !Ge(s, t)) || (i.push(n), o))) ||
              s === this._container
            )
              break;
            s = s.parentNode;
          }
          return (
            !i.length && !r && !o && this.listens(e, !0) && (i = [this]), i
          );
        },
        _isClickDisabled: function (t) {
          for (; t && t !== this._container; ) {
            if (t._leaflet_disable_click) return !0;
            t = t.parentNode;
          }
        },
        _handleDOMEvent: function (t) {
          var e = t.target || t.srcElement;
          if (
            !(
              !this._loaded ||
              e._leaflet_disable_events ||
              (t.type === "click" && this._isClickDisabled(e))
            )
          ) {
            var i = t.type;
            i === "mousedown" && Ne(e), this._fireDOMEvent(t, i);
          }
        },
        _mouseEvents: [
          "click",
          "dblclick",
          "mouseover",
          "mouseout",
          "contextmenu",
        ],
        _fireDOMEvent: function (t, e, i) {
          if (t.type === "click") {
            var n = d({}, t);
            (n.type = "preclick"), this._fireDOMEvent(n, n.type, i);
          }
          var o = this._findEventTargets(t, e);
          if (i) {
            for (var s = [], r = 0; r < i.length; r++)
              i[r].listens(e, !0) && s.push(i[r]);
            o = s.concat(o);
          }
          if (o.length) {
            e === "contextmenu" && F(t);
            var a = o[0],
              u = { originalEvent: t };
            if (
              t.type !== "keypress" &&
              t.type !== "keydown" &&
              t.type !== "keyup"
            ) {
              var l = a.getLatLng && (!a._radius || a._radius <= 10);
              (u.containerPoint = l
                ? this.latLngToContainerPoint(a.getLatLng())
                : this.mouseEventToContainerPoint(t)),
                (u.layerPoint = this.containerPointToLayerPoint(
                  u.containerPoint
                )),
                (u.latlng = l
                  ? a.getLatLng()
                  : this.layerPointToLatLng(u.layerPoint));
            }
            for (r = 0; r < o.length; r++)
              if (
                (o[r].fire(e, u, !0),
                u.originalEvent._stopped ||
                  (o[r].options.bubblingMouseEvents === !1 &&
                    ye(this._mouseEvents, e) !== -1))
              )
                return;
          }
        },
        _draggableMoved: function (t) {
          return (
            (t = t.dragging && t.dragging.enabled() ? t : this),
            (t.dragging && t.dragging.moved()) ||
              (this.boxZoom && this.boxZoom.moved())
          );
        },
        _clearHandlers: function () {
          for (var t = 0, e = this._handlers.length; t < e; t++)
            this._handlers[t].disable();
        },
        whenReady: function (t, e) {
          return (
            this._loaded
              ? t.call(e || this, { target: this })
              : this.on("load", t, e),
            this
          );
        },
        _getMapPanePos: function () {
          return xt(this._mapPane) || new y(0, 0);
        },
        _moved: function () {
          var t = this._getMapPanePos();
          return t && !t.equals([0, 0]);
        },
        _getTopLeftPoint: function (t, e) {
          var i =
            t && e !== void 0
              ? this._getNewPixelOrigin(t, e)
              : this.getPixelOrigin();
          return i.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function (t, e) {
          var i = this.getSize()._divideBy(2);
          return this.project(t, e)
            ._subtract(i)
            ._add(this._getMapPanePos())
            ._round();
        },
        _latLngToNewLayerPoint: function (t, e, i) {
          var n = this._getNewPixelOrigin(i, e);
          return this.project(t, e)._subtract(n);
        },
        _latLngBoundsToNewLayerBounds: function (t, e, i) {
          var n = this._getNewPixelOrigin(i, e);
          return G([
            this.project(t.getSouthWest(), e)._subtract(n),
            this.project(t.getNorthWest(), e)._subtract(n),
            this.project(t.getSouthEast(), e)._subtract(n),
            this.project(t.getNorthEast(), e)._subtract(n),
          ]);
        },
        _getCenterLayerPoint: function () {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        _getCenterOffset: function (t) {
          return this.latLngToLayerPoint(t).subtract(
            this._getCenterLayerPoint()
          );
        },
        _limitCenter: function (t, e, i) {
          if (!i) return t;
          var n = this.project(t, e),
            o = this.getSize().divideBy(2),
            s = new Z(n.subtract(o), n.add(o)),
            r = this._getBoundsOffset(s, i, e);
          return Math.abs(r.x) <= 1 && Math.abs(r.y) <= 1
            ? t
            : this.unproject(n.add(r), e);
        },
        _limitOffset: function (t, e) {
          if (!e) return t;
          var i = this.getPixelBounds(),
            n = new Z(i.min.add(t), i.max.add(t));
          return t.add(this._getBoundsOffset(n, e));
        },
        _getBoundsOffset: function (t, e, i) {
          var n = G(
              this.project(e.getNorthEast(), i),
              this.project(e.getSouthWest(), i)
            ),
            o = n.min.subtract(t.min),
            s = n.max.subtract(t.max),
            r = this._rebound(o.x, -s.x),
            a = this._rebound(o.y, -s.y);
          return new y(r, a);
        },
        _rebound: function (t, e) {
          return t + e > 0
            ? Math.round(t - e) / 2
            : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
        },
        _limitZoom: function (t) {
          var e = this.getMinZoom(),
            i = this.getMaxZoom(),
            n = m.any3d ? this.options.zoomSnap : 1;
          return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
        },
        _onPanTransitionStep: function () {
          this.fire("move");
        },
        _onPanTransitionEnd: function () {
          R(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function (t, e) {
          var i = this._getCenterOffset(t)._trunc();
          return (e && e.animate) !== !0 && !this.getSize().contains(i)
            ? !1
            : (this.panBy(i, e), !0);
        },
        _createAnimProxy: function () {
          var t = (this._proxy = C(
            "div",
            "leaflet-proxy leaflet-zoom-animated"
          ));
          this._panes.mapPane.appendChild(t),
            this.on(
              "zoomanim",
              function (e) {
                var i = ke,
                  n = this._proxy.style[i];
                wt(
                  this._proxy,
                  this.project(e.center, e.zoom),
                  this.getZoomScale(e.zoom, 1)
                ),
                  n === this._proxy.style[i] &&
                    this._animatingZoom &&
                    this._onZoomTransitionEnd();
              },
              this
            ),
            this.on("load moveend", this._animMoveEnd, this),
            this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function () {
          I(this._proxy),
            this.off("load moveend", this._animMoveEnd, this),
            delete this._proxy;
        },
        _animMoveEnd: function () {
          var t = this.getCenter(),
            e = this.getZoom();
          wt(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
        },
        _catchTransitionEnd: function (t) {
          this._animatingZoom &&
            t.propertyName.indexOf("transform") >= 0 &&
            this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function () {
          return !this._container.getElementsByClassName(
            "leaflet-zoom-animated"
          ).length;
        },
        _tryAnimatedZoom: function (t, e, i) {
          if (this._animatingZoom) return !0;
          if (
            ((i = i || {}),
            !this._zoomAnimated ||
              i.animate === !1 ||
              this._nothingToAnimate() ||
              Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
          )
            return !1;
          var n = this.getZoomScale(e),
            o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
          return i.animate !== !0 && !this.getSize().contains(o)
            ? !1
            : (U(function () {
                this._moveStart(!0, !1)._animateZoom(t, e, !0);
              }, this),
              !0);
        },
        _animateZoom: function (t, e, i, n) {
          this._mapPane &&
            (i &&
              ((this._animatingZoom = !0),
              (this._animateToCenter = t),
              (this._animateToZoom = e),
              x(this._mapPane, "leaflet-zoom-anim")),
            this.fire("zoomanim", { center: t, zoom: e, noUpdate: n }),
            this._tempFireZoomEvent ||
              (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            setTimeout(M(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function () {
          this._animatingZoom &&
            (this._mapPane && R(this._mapPane, "leaflet-zoom-anim"),
            (this._animatingZoom = !1),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            this._tempFireZoomEvent && this.fire("zoom"),
            delete this._tempFireZoomEvent,
            this.fire("move"),
            this._moveEnd(!0));
        },
      });
    function ao(t, e) {
      return new b(t, e);
    }
    var Q = rt.extend({
        options: { position: "topright" },
        initialize: function (t) {
          z(this, t);
        },
        getPosition: function () {
          return this.options.position;
        },
        setPosition: function (t) {
          var e = this._map;
          return (
            e && e.removeControl(this),
            (this.options.position = t),
            e && e.addControl(this),
            this
          );
        },
        getContainer: function () {
          return this._container;
        },
        addTo: function (t) {
          this.remove(), (this._map = t);
          var e = (this._container = this.onAdd(t)),
            i = this.getPosition(),
            n = t._controlCorners[i];
          return (
            x(e, "leaflet-control"),
            i.indexOf("bottom") !== -1
              ? n.insertBefore(e, n.firstChild)
              : n.appendChild(e),
            this._map.on("unload", this.remove, this),
            this
          );
        },
        remove: function () {
          return this._map
            ? (I(this._container),
              this.onRemove && this.onRemove(this._map),
              this._map.off("unload", this.remove, this),
              (this._map = null),
              this)
            : this;
        },
        _refocusOnMap: function (t) {
          this._map &&
            t &&
            t.screenX > 0 &&
            t.screenY > 0 &&
            this._map.getContainer().focus();
        },
      }),
      Gt = function (t) {
        return new Q(t);
      };
    b.include({
      addControl: function (t) {
        return t.addTo(this), this;
      },
      removeControl: function (t) {
        return t.remove(), this;
      },
      _initControlPos: function () {
        var t = (this._controlCorners = {}),
          e = "leaflet-",
          i = (this._controlContainer = C(
            "div",
            e + "control-container",
            this._container
          ));
        function n(o, s) {
          var r = e + o + " " + e + s;
          t[o + s] = C("div", r, i);
        }
        n("top", "left"),
          n("top", "right"),
          n("bottom", "left"),
          n("bottom", "right");
      },
      _clearControlPos: function () {
        for (var t in this._controlCorners) I(this._controlCorners[t]);
        I(this._controlContainer),
          delete this._controlCorners,
          delete this._controlContainer;
      },
    });
    var Di = Q.extend({
        options: {
          collapsed: !0,
          position: "topright",
          autoZIndex: !0,
          hideSingleBase: !1,
          sortLayers: !1,
          sortFunction: function (t, e, i, n) {
            return i < n ? -1 : n < i ? 1 : 0;
          },
        },
        initialize: function (t, e, i) {
          z(this, i),
            (this._layerControlInputs = []),
            (this._layers = []),
            (this._lastZIndex = 0),
            (this._handlingClick = !1);
          for (var n in t) this._addLayer(t[n], n);
          for (n in e) this._addLayer(e[n], n, !0);
        },
        onAdd: function (t) {
          this._initLayout(),
            this._update(),
            (this._map = t),
            t.on("zoomend", this._checkDisabledLayers, this);
          for (var e = 0; e < this._layers.length; e++)
            this._layers[e].layer.on("add remove", this._onLayerChange, this);
          return this._container;
        },
        addTo: function (t) {
          return Q.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
        },
        onRemove: function () {
          this._map.off("zoomend", this._checkDisabledLayers, this);
          for (var t = 0; t < this._layers.length; t++)
            this._layers[t].layer.off("add remove", this._onLayerChange, this);
        },
        addBaseLayer: function (t, e) {
          return this._addLayer(t, e), this._map ? this._update() : this;
        },
        addOverlay: function (t, e) {
          return this._addLayer(t, e, !0), this._map ? this._update() : this;
        },
        removeLayer: function (t) {
          t.off("add remove", this._onLayerChange, this);
          var e = this._getLayer(P(t));
          return (
            e && this._layers.splice(this._layers.indexOf(e), 1),
            this._map ? this._update() : this
          );
        },
        expand: function () {
          x(this._container, "leaflet-control-layers-expanded"),
            (this._section.style.height = null);
          var t = this._map.getSize().y - (this._container.offsetTop + 50);
          return (
            t < this._section.clientHeight
              ? (x(this._section, "leaflet-control-layers-scrollbar"),
                (this._section.style.height = t + "px"))
              : R(this._section, "leaflet-control-layers-scrollbar"),
            this._checkDisabledLayers(),
            this
          );
        },
        collapse: function () {
          return R(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function () {
          var t = "leaflet-control-layers",
            e = (this._container = C("div", t)),
            i = this.options.collapsed;
          e.setAttribute("aria-haspopup", !0), Ut(e), Ue(e);
          var n = (this._section = C("section", t + "-list"));
          i &&
            (this._map.on("click", this.collapse, this),
            w(
              e,
              { mouseenter: this._expandSafely, mouseleave: this.collapse },
              this
            ));
          var o = (this._layersLink = C("a", t + "-toggle", e));
          (o.href = "#"),
            (o.title = "Layers"),
            o.setAttribute("role", "button"),
            w(
              o,
              {
                keydown: function (s) {
                  s.keyCode === 13 && this._expandSafely();
                },
                click: function (s) {
                  F(s), this._expandSafely();
                },
              },
              this
            ),
            i || this.expand(),
            (this._baseLayersList = C("div", t + "-base", n)),
            (this._separator = C("div", t + "-separator", n)),
            (this._overlaysList = C("div", t + "-overlays", n)),
            e.appendChild(n);
        },
        _getLayer: function (t) {
          for (var e = 0; e < this._layers.length; e++)
            if (this._layers[e] && P(this._layers[e].layer) === t)
              return this._layers[e];
        },
        _addLayer: function (t, e, i) {
          this._map && t.on("add remove", this._onLayerChange, this),
            this._layers.push({ layer: t, name: e, overlay: i }),
            this.options.sortLayers &&
              this._layers.sort(
                M(function (n, o) {
                  return this.options.sortFunction(
                    n.layer,
                    o.layer,
                    n.name,
                    o.name
                  );
                }, this)
              ),
            this.options.autoZIndex &&
              t.setZIndex &&
              (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
            this._expandIfNotCollapsed();
        },
        _update: function () {
          if (!this._container) return this;
          ee(this._baseLayersList),
            ee(this._overlaysList),
            (this._layerControlInputs = []);
          var t,
            e,
            i,
            n,
            o = 0;
          for (i = 0; i < this._layers.length; i++)
            (n = this._layers[i]),
              this._addItem(n),
              (e = e || n.overlay),
              (t = t || !n.overlay),
              (o += n.overlay ? 0 : 1);
          return (
            this.options.hideSingleBase &&
              ((t = t && o > 1),
              (this._baseLayersList.style.display = t ? "" : "none")),
            (this._separator.style.display = e && t ? "" : "none"),
            this
          );
        },
        _onLayerChange: function (t) {
          this._handlingClick || this._update();
          var e = this._getLayer(P(t.target)),
            i = e.overlay
              ? t.type === "add"
                ? "overlayadd"
                : "overlayremove"
              : t.type === "add"
              ? "baselayerchange"
              : null;
          i && this._map.fire(i, e);
        },
        _createRadioElement: function (t, e) {
          var i =
              '<input type="radio" class="leaflet-control-layers-selector" name="' +
              t +
              '"' +
              (e ? ' checked="checked"' : "") +
              "/>",
            n = document.createElement("div");
          return (n.innerHTML = i), n.firstChild;
        },
        _addItem: function (t) {
          var e = document.createElement("label"),
            i = this._map.hasLayer(t.layer),
            n;
          t.overlay
            ? ((n = document.createElement("input")),
              (n.type = "checkbox"),
              (n.className = "leaflet-control-layers-selector"),
              (n.defaultChecked = i))
            : (n = this._createRadioElement(
                "leaflet-base-layers_" + P(this),
                i
              )),
            this._layerControlInputs.push(n),
            (n.layerId = P(t.layer)),
            w(n, "click", this._onInputClick, this);
          var o = document.createElement("span");
          o.innerHTML = " " + t.name;
          var s = document.createElement("span");
          e.appendChild(s), s.appendChild(n), s.appendChild(o);
          var r = t.overlay ? this._overlaysList : this._baseLayersList;
          return r.appendChild(e), this._checkDisabledLayers(), e;
        },
        _onInputClick: function () {
          var t = this._layerControlInputs,
            e,
            i,
            n = [],
            o = [];
          this._handlingClick = !0;
          for (var s = t.length - 1; s >= 0; s--)
            (e = t[s]),
              (i = this._getLayer(e.layerId).layer),
              e.checked ? n.push(i) : e.checked || o.push(i);
          for (s = 0; s < o.length; s++)
            this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
          for (s = 0; s < n.length; s++)
            this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
          (this._handlingClick = !1), this._refocusOnMap();
        },
        _checkDisabledLayers: function () {
          for (
            var t = this._layerControlInputs,
              e,
              i,
              n = this._map.getZoom(),
              o = t.length - 1;
            o >= 0;
            o--
          )
            (e = t[o]),
              (i = this._getLayer(e.layerId).layer),
              (e.disabled =
                (i.options.minZoom !== void 0 && n < i.options.minZoom) ||
                (i.options.maxZoom !== void 0 && n > i.options.maxZoom));
        },
        _expandIfNotCollapsed: function () {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expandSafely: function () {
          var t = this._section;
          w(t, "click", F),
            this.expand(),
            setTimeout(function () {
              k(t, "click", F);
            });
        },
      }),
      ho = function (t, e, i) {
        return new Di(t, e, i);
      },
      Ve = Q.extend({
        options: {
          position: "topleft",
          zoomInText: '<span aria-hidden="true">+</span>',
          zoomInTitle: "Zoom in",
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          zoomOutTitle: "Zoom out",
        },
        onAdd: function (t) {
          var e = "leaflet-control-zoom",
            i = C("div", e + " leaflet-bar"),
            n = this.options;
          return (
            (this._zoomInButton = this._createButton(
              n.zoomInText,
              n.zoomInTitle,
              e + "-in",
              i,
              this._zoomIn
            )),
            (this._zoomOutButton = this._createButton(
              n.zoomOutText,
              n.zoomOutTitle,
              e + "-out",
              i,
              this._zoomOut
            )),
            this._updateDisabled(),
            t.on("zoomend zoomlevelschange", this._updateDisabled, this),
            i
          );
        },
        onRemove: function (t) {
          t.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function () {
          return (this._disabled = !0), this._updateDisabled(), this;
        },
        enable: function () {
          return (this._disabled = !1), this._updateDisabled(), this;
        },
        _zoomIn: function (t) {
          !this._disabled &&
            this._map._zoom < this._map.getMaxZoom() &&
            this._map.zoomIn(
              this._map.options.zoomDelta * (t.shiftKey ? 3 : 1)
            );
        },
        _zoomOut: function (t) {
          !this._disabled &&
            this._map._zoom > this._map.getMinZoom() &&
            this._map.zoomOut(
              this._map.options.zoomDelta * (t.shiftKey ? 3 : 1)
            );
        },
        _createButton: function (t, e, i, n, o) {
          var s = C("a", i, n);
          return (
            (s.innerHTML = t),
            (s.href = "#"),
            (s.title = e),
            s.setAttribute("role", "button"),
            s.setAttribute("aria-label", e),
            Ut(s),
            w(s, "click", Lt),
            w(s, "click", o, this),
            w(s, "click", this._refocusOnMap, this),
            s
          );
        },
        _updateDisabled: function () {
          var t = this._map,
            e = "leaflet-disabled";
          R(this._zoomInButton, e),
            R(this._zoomOutButton, e),
            this._zoomInButton.setAttribute("aria-disabled", "false"),
            this._zoomOutButton.setAttribute("aria-disabled", "false"),
            (this._disabled || t._zoom === t.getMinZoom()) &&
              (x(this._zoomOutButton, e),
              this._zoomOutButton.setAttribute("aria-disabled", "true")),
            (this._disabled || t._zoom === t.getMaxZoom()) &&
              (x(this._zoomInButton, e),
              this._zoomInButton.setAttribute("aria-disabled", "true"));
        },
      });
    b.mergeOptions({ zoomControl: !0 }),
      b.addInitHook(function () {
        this.options.zoomControl &&
          ((this.zoomControl = new Ve()), this.addControl(this.zoomControl));
      });
    var uo = function (t) {
        return new Ve(t);
      },
      Hi = Q.extend({
        options: {
          position: "bottomleft",
          maxWidth: 100,
          metric: !0,
          imperial: !0,
        },
        onAdd: function (t) {
          var e = "leaflet-control-scale",
            i = C("div", e),
            n = this.options;
          return (
            this._addScales(n, e + "-line", i),
            t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this),
            t.whenReady(this._update, this),
            i
          );
        },
        onRemove: function (t) {
          t.off(
            this.options.updateWhenIdle ? "moveend" : "move",
            this._update,
            this
          );
        },
        _addScales: function (t, e, i) {
          t.metric && (this._mScale = C("div", e, i)),
            t.imperial && (this._iScale = C("div", e, i));
        },
        _update: function () {
          var t = this._map,
            e = t.getSize().y / 2,
            i = t.distance(
              t.containerPointToLatLng([0, e]),
              t.containerPointToLatLng([this.options.maxWidth, e])
            );
          this._updateScales(i);
        },
        _updateScales: function (t) {
          this.options.metric && t && this._updateMetric(t),
            this.options.imperial && t && this._updateImperial(t);
        },
        _updateMetric: function (t) {
          var e = this._getRoundNum(t),
            i = e < 1e3 ? e + " m" : e / 1e3 + " km";
          this._updateScale(this._mScale, i, e / t);
        },
        _updateImperial: function (t) {
          var e = t * 3.2808399,
            i,
            n,
            o;
          e > 5280
            ? ((i = e / 5280),
              (n = this._getRoundNum(i)),
              this._updateScale(this._iScale, n + " mi", n / i))
            : ((o = this._getRoundNum(e)),
              this._updateScale(this._iScale, o + " ft", o / e));
        },
        _updateScale: function (t, e, i) {
          (t.style.width = Math.round(this.options.maxWidth * i) + "px"),
            (t.innerHTML = e);
        },
        _getRoundNum: function (t) {
          var e = Math.pow(10, (Math.floor(t) + "").length - 1),
            i = t / e;
          return (
            (i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1), e * i
          );
        },
      }),
      lo = function (t) {
        return new Hi(t);
      },
      co =
        '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
      qe = Q.extend({
        options: {
          position: "bottomright",
          prefix:
            '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
            (m.inlineSvg ? co + " " : "") +
            "Leaflet</a>",
        },
        initialize: function (t) {
          z(this, t), (this._attributions = {});
        },
        onAdd: function (t) {
          (t.attributionControl = this),
            (this._container = C("div", "leaflet-control-attribution")),
            Ut(this._container);
          for (var e in t._layers)
            t._layers[e].getAttribution &&
              this.addAttribution(t._layers[e].getAttribution());
          return (
            this._update(),
            t.on("layeradd", this._addAttribution, this),
            this._container
          );
        },
        onRemove: function (t) {
          t.off("layeradd", this._addAttribution, this);
        },
        _addAttribution: function (t) {
          t.layer.getAttribution &&
            (this.addAttribution(t.layer.getAttribution()),
            t.layer.once(
              "remove",
              function () {
                this.removeAttribution(t.layer.getAttribution());
              },
              this
            ));
        },
        setPrefix: function (t) {
          return (this.options.prefix = t), this._update(), this;
        },
        addAttribution: function (t) {
          return t
            ? (this._attributions[t] || (this._attributions[t] = 0),
              this._attributions[t]++,
              this._update(),
              this)
            : this;
        },
        removeAttribution: function (t) {
          return t
            ? (this._attributions[t] &&
                (this._attributions[t]--, this._update()),
              this)
            : this;
        },
        _update: function () {
          if (this._map) {
            var t = [];
            for (var e in this._attributions)
              this._attributions[e] && t.push(e);
            var i = [];
            this.options.prefix && i.push(this.options.prefix),
              t.length && i.push(t.join(", ")),
              (this._container.innerHTML = i.join(
                ' <span aria-hidden="true">|</span> '
              ));
          }
        },
      });
    b.mergeOptions({ attributionControl: !0 }),
      b.addInitHook(function () {
        this.options.attributionControl && new qe().addTo(this);
      });
    var fo = function (t) {
      return new qe(t);
    };
    (Q.Layers = Di),
      (Q.Zoom = Ve),
      (Q.Scale = Hi),
      (Q.Attribution = qe),
      (Gt.layers = ho),
      (Gt.zoom = uo),
      (Gt.scale = lo),
      (Gt.attribution = fo);
    var nt = rt.extend({
      initialize: function (t) {
        this._map = t;
      },
      enable: function () {
        return this._enabled
          ? this
          : ((this._enabled = !0), this.addHooks(), this);
      },
      disable: function () {
        return this._enabled
          ? ((this._enabled = !1), this.removeHooks(), this)
          : this;
      },
      enabled: function () {
        return !!this._enabled;
      },
    });
    nt.addTo = function (t, e) {
      return t.addHandler(e, this), this;
    };
    var _o = { Events: q },
      Fi = m.touch ? "touchstart mousedown" : "mousedown",
      mt = At.extend({
        options: { clickTolerance: 3 },
        initialize: function (t, e, i, n) {
          z(this, n),
            (this._element = t),
            (this._dragStartTarget = e || t),
            (this._preventOutline = i);
        },
        enable: function () {
          this._enabled ||
            (w(this._dragStartTarget, Fi, this._onDown, this),
            (this._enabled = !0));
        },
        disable: function () {
          this._enabled &&
            (mt._dragging === this && this.finishDrag(!0),
            k(this._dragStartTarget, Fi, this._onDown, this),
            (this._enabled = !1),
            (this._moved = !1));
        },
        _onDown: function (t) {
          if (
            this._enabled &&
            ((this._moved = !1), !Oe(this._element, "leaflet-zoom-anim"))
          ) {
            if (t.touches && t.touches.length !== 1) {
              mt._dragging === this && this.finishDrag();
              return;
            }
            if (
              !(
                mt._dragging ||
                t.shiftKey ||
                (t.which !== 1 && t.button !== 1 && !t.touches)
              ) &&
              ((mt._dragging = this),
              this._preventOutline && Ne(this._element),
              Ae(),
              Ht(),
              !this._moving)
            ) {
              this.fire("down");
              var e = t.touches ? t.touches[0] : t,
                i = Zi(this._element);
              (this._startPoint = new y(e.clientX, e.clientY)),
                (this._startPos = xt(this._element)),
                (this._parentScale = De(i));
              var n = t.type === "mousedown";
              w(document, n ? "mousemove" : "touchmove", this._onMove, this),
                w(
                  document,
                  n ? "mouseup" : "touchend touchcancel",
                  this._onUp,
                  this
                );
            }
          }
        },
        _onMove: function (t) {
          if (this._enabled) {
            if (t.touches && t.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var e = t.touches && t.touches.length === 1 ? t.touches[0] : t,
              i = new y(e.clientX, e.clientY)._subtract(this._startPoint);
            (!i.x && !i.y) ||
              Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance ||
              ((i.x /= this._parentScale.x),
              (i.y /= this._parentScale.y),
              F(t),
              this._moved ||
                (this.fire("dragstart"),
                (this._moved = !0),
                x(document.body, "leaflet-dragging"),
                (this._lastTarget = t.target || t.srcElement),
                window.SVGElementInstance &&
                  this._lastTarget instanceof window.SVGElementInstance &&
                  (this._lastTarget = this._lastTarget.correspondingUseElement),
                x(this._lastTarget, "leaflet-drag-target")),
              (this._newPos = this._startPos.add(i)),
              (this._moving = !0),
              (this._lastEvent = t),
              this._updatePosition());
          }
        },
        _updatePosition: function () {
          var t = { originalEvent: this._lastEvent };
          this.fire("predrag", t),
            N(this._element, this._newPos),
            this.fire("drag", t);
        },
        _onUp: function () {
          this._enabled && this.finishDrag();
        },
        finishDrag: function (t) {
          R(document.body, "leaflet-dragging"),
            this._lastTarget &&
              (R(this._lastTarget, "leaflet-drag-target"),
              (this._lastTarget = null)),
            k(document, "mousemove touchmove", this._onMove, this),
            k(document, "mouseup touchend touchcancel", this._onUp, this),
            Be(),
            Ft(),
            this._moved &&
              this._moving &&
              this.fire("dragend", {
                noInertia: t,
                distance: this._newPos.distanceTo(this._startPos),
              }),
            (this._moving = !1),
            (mt._dragging = !1);
        },
      });
    function Wi(t, e) {
      if (!e || !t.length) return t.slice();
      var i = e * e;
      return (t = vo(t, i)), (t = po(t, i)), t;
    }
    function Ui(t, e, i) {
      return Math.sqrt(Vt(t, e, i, !0));
    }
    function mo(t, e, i) {
      return Vt(t, e, i);
    }
    function po(t, e) {
      var i = t.length,
        n = typeof Uint8Array != void 0 + "" ? Uint8Array : Array,
        o = new n(i);
      (o[0] = o[i - 1] = 1), je(t, o, e, 0, i - 1);
      var s,
        r = [];
      for (s = 0; s < i; s++) o[s] && r.push(t[s]);
      return r;
    }
    function je(t, e, i, n, o) {
      var s = 0,
        r,
        a,
        u;
      for (a = n + 1; a <= o - 1; a++)
        (u = Vt(t[a], t[n], t[o], !0)), u > s && ((r = a), (s = u));
      s > i && ((e[r] = 1), je(t, e, i, n, r), je(t, e, i, r, o));
    }
    function vo(t, e) {
      for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
        go(t[n], t[o]) > e && (i.push(t[n]), (o = n));
      return o < s - 1 && i.push(t[s - 1]), i;
    }
    var Gi;
    function Vi(t, e, i, n, o) {
      var s = n ? Gi : Tt(t, i),
        r = Tt(e, i),
        a,
        u,
        l;
      for (Gi = r; ; ) {
        if (!(s | r)) return [t, e];
        if (s & r) return !1;
        (a = s || r),
          (u = re(t, e, a, i, o)),
          (l = Tt(u, i)),
          a === s ? ((t = u), (s = l)) : ((e = u), (r = l));
      }
    }
    function re(t, e, i, n, o) {
      var s = e.x - t.x,
        r = e.y - t.y,
        a = n.min,
        u = n.max,
        l,
        c;
      return (
        i & 8
          ? ((l = t.x + (s * (u.y - t.y)) / r), (c = u.y))
          : i & 4
          ? ((l = t.x + (s * (a.y - t.y)) / r), (c = a.y))
          : i & 2
          ? ((l = u.x), (c = t.y + (r * (u.x - t.x)) / s))
          : i & 1 && ((l = a.x), (c = t.y + (r * (a.x - t.x)) / s)),
        new y(l, c, o)
      );
    }
    function Tt(t, e) {
      var i = 0;
      return (
        t.x < e.min.x ? (i |= 1) : t.x > e.max.x && (i |= 2),
        t.y < e.min.y ? (i |= 4) : t.y > e.max.y && (i |= 8),
        i
      );
    }
    function go(t, e) {
      var i = e.x - t.x,
        n = e.y - t.y;
      return i * i + n * n;
    }
    function Vt(t, e, i, n) {
      var o = e.x,
        s = e.y,
        r = i.x - o,
        a = i.y - s,
        u = r * r + a * a,
        l;
      return (
        u > 0 &&
          ((l = ((t.x - o) * r + (t.y - s) * a) / u),
          l > 1
            ? ((o = i.x), (s = i.y))
            : l > 0 && ((o += r * l), (s += a * l))),
        (r = t.x - o),
        (a = t.y - s),
        n ? r * r + a * a : new y(o, s)
      );
    }
    function X(t) {
      return !$(t[0]) || (typeof t[0][0] != "object" && typeof t[0][0] < "u");
    }
    function qi(t) {
      return (
        console.warn(
          "Deprecated use of _flat, please use L.LineUtil.isFlat instead."
        ),
        X(t)
      );
    }
    function ji(t, e) {
      var i, n, o, s, r, a, u, l;
      if (!t || t.length === 0) throw new Error("latlngs not passed");
      X(t) ||
        (console.warn("latlngs are not flat! Only the first ring will be used"),
        (t = t[0]));
      var c = [];
      for (var v in t) c.push(e.project(E(t[v])));
      var T = c.length;
      for (i = 0, n = 0; i < T - 1; i++) n += c[i].distanceTo(c[i + 1]) / 2;
      if (n === 0) l = c[0];
      else
        for (i = 0, s = 0; i < T - 1; i++)
          if (
            ((r = c[i]), (a = c[i + 1]), (o = r.distanceTo(a)), (s += o), s > n)
          ) {
            (u = (s - n) / o),
              (l = [a.x - u * (a.x - r.x), a.y - u * (a.y - r.y)]);
            break;
          }
      return e.unproject(g(l));
    }
    var yo = {
      __proto__: null,
      simplify: Wi,
      pointToSegmentDistance: Ui,
      closestPointOnSegment: mo,
      clipSegment: Vi,
      _getEdgeIntersection: re,
      _getBitCode: Tt,
      _sqClosestPointOnSegment: Vt,
      isFlat: X,
      _flat: qi,
      polylineCenter: ji,
    };
    function Ki(t, e, i) {
      var n,
        o = [1, 4, 2, 8],
        s,
        r,
        a,
        u,
        l,
        c,
        v,
        T;
      for (s = 0, c = t.length; s < c; s++) t[s]._code = Tt(t[s], e);
      for (a = 0; a < 4; a++) {
        for (v = o[a], n = [], s = 0, c = t.length, r = c - 1; s < c; r = s++)
          (u = t[s]),
            (l = t[r]),
            u._code & v
              ? l._code & v ||
                ((T = re(l, u, v, e, i)), (T._code = Tt(T, e)), n.push(T))
              : (l._code & v &&
                  ((T = re(l, u, v, e, i)), (T._code = Tt(T, e)), n.push(T)),
                n.push(u));
        t = n;
      }
      return t;
    }
    function Yi(t, e) {
      var i, n, o, s, r, a, u, l, c;
      if (!t || t.length === 0) throw new Error("latlngs not passed");
      X(t) ||
        (console.warn("latlngs are not flat! Only the first ring will be used"),
        (t = t[0]));
      var v = [];
      for (var T in t) v.push(e.project(E(t[T])));
      var J = v.length;
      for (a = u = l = 0, i = 0, n = J - 1; i < J; n = i++)
        (o = v[i]),
          (s = v[n]),
          (r = o.y * s.x - s.y * o.x),
          (u += (o.x + s.x) * r),
          (l += (o.y + s.y) * r),
          (a += r * 3);
      return a === 0 ? (c = v[0]) : (c = [u / a, l / a]), e.unproject(g(c));
    }
    var wo = { __proto__: null, clipPolygon: Ki, polygonCenter: Yi },
      Ke = {
        project: function (t) {
          return new y(t.lng, t.lat);
        },
        unproject: function (t) {
          return new S(t.y, t.x);
        },
        bounds: new Z([-180, -90], [180, 90]),
      },
      Ye = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new Z(
          [-2003750834279e-5, -1549657073972e-5],
          [2003750834279e-5, 1876465623138e-5]
        ),
        project: function (t) {
          var e = Math.PI / 180,
            i = this.R,
            n = t.lat * e,
            o = this.R_MINOR / i,
            s = Math.sqrt(1 - o * o),
            r = s * Math.sin(n),
            a =
              Math.tan(Math.PI / 4 - n / 2) /
              Math.pow((1 - r) / (1 + r), s / 2);
          return (
            (n = -i * Math.log(Math.max(a, 1e-10))), new y(t.lng * e * i, n)
          );
        },
        unproject: function (t) {
          for (
            var e = 180 / Math.PI,
              i = this.R,
              n = this.R_MINOR / i,
              o = Math.sqrt(1 - n * n),
              s = Math.exp(-t.y / i),
              r = Math.PI / 2 - 2 * Math.atan(s),
              a = 0,
              u = 0.1,
              l;
            a < 15 && Math.abs(u) > 1e-7;
            a++
          )
            (l = o * Math.sin(r)),
              (l = Math.pow((1 - l) / (1 + l), o / 2)),
              (u = Math.PI / 2 - 2 * Math.atan(s * l) - r),
              (r += u);
          return new S(r * e, (t.x * e) / i);
        },
      },
      xo = { __proto__: null, LonLat: Ke, Mercator: Ye, SphericalMercator: Pe },
      Po = d({}, _t, {
        code: "EPSG:3395",
        projection: Ye,
        transformation: (function () {
          var t = 0.5 / (Math.PI * Ye.R);
          return Bt(t, 0.5, -t, 0.5);
        })(),
      }),
      Xi = d({}, _t, {
        code: "EPSG:4326",
        projection: Ke,
        transformation: Bt(1 / 180, 1, -1 / 180, 0.5),
      }),
      Lo = d({}, at, {
        projection: Ke,
        transformation: Bt(1, 0, -1, 0),
        scale: function (t) {
          return Math.pow(2, t);
        },
        zoom: function (t) {
          return Math.log(t) / Math.LN2;
        },
        distance: function (t, e) {
          var i = e.lng - t.lng,
            n = e.lat - t.lat;
          return Math.sqrt(i * i + n * n);
        },
        infinite: !0,
      });
    (at.Earth = _t),
      (at.EPSG3395 = Po),
      (at.EPSG3857 = Te),
      (at.EPSG900913 = Sn),
      (at.EPSG4326 = Xi),
      (at.Simple = Lo);
    var tt = At.extend({
      options: {
        pane: "overlayPane",
        attribution: null,
        bubblingMouseEvents: !0,
      },
      addTo: function (t) {
        return t.addLayer(this), this;
      },
      remove: function () {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      removeFrom: function (t) {
        return t && t.removeLayer(this), this;
      },
      getPane: function (t) {
        return this._map.getPane(t ? this.options[t] || t : this.options.pane);
      },
      addInteractiveTarget: function (t) {
        return (this._map._targets[P(t)] = this), this;
      },
      removeInteractiveTarget: function (t) {
        return delete this._map._targets[P(t)], this;
      },
      getAttribution: function () {
        return this.options.attribution;
      },
      _layerAdd: function (t) {
        var e = t.target;
        if (e.hasLayer(this)) {
          if (
            ((this._map = e),
            (this._zoomAnimated = e._zoomAnimated),
            this.getEvents)
          ) {
            var i = this.getEvents();
            e.on(i, this),
              this.once(
                "remove",
                function () {
                  e.off(i, this);
                },
                this
              );
          }
          this.onAdd(e), this.fire("add"), e.fire("layeradd", { layer: this });
        }
      },
    });
    b.include({
      addLayer: function (t) {
        if (!t._layerAdd)
          throw new Error("The provided object is not a Layer.");
        var e = P(t);
        return this._layers[e]
          ? this
          : ((this._layers[e] = t),
            (t._mapToAdd = this),
            t.beforeAdd && t.beforeAdd(this),
            this.whenReady(t._layerAdd, t),
            this);
      },
      removeLayer: function (t) {
        var e = P(t);
        return this._layers[e]
          ? (this._loaded && t.onRemove(this),
            delete this._layers[e],
            this._loaded &&
              (this.fire("layerremove", { layer: t }), t.fire("remove")),
            (t._map = t._mapToAdd = null),
            this)
          : this;
      },
      hasLayer: function (t) {
        return P(t) in this._layers;
      },
      eachLayer: function (t, e) {
        for (var i in this._layers) t.call(e, this._layers[i]);
        return this;
      },
      _addLayers: function (t) {
        t = t ? ($(t) ? t : [t]) : [];
        for (var e = 0, i = t.length; e < i; e++) this.addLayer(t[e]);
      },
      _addZoomLimit: function (t) {
        (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) &&
          ((this._zoomBoundLayers[P(t)] = t), this._updateZoomLevels());
      },
      _removeZoomLimit: function (t) {
        var e = P(t);
        this._zoomBoundLayers[e] &&
          (delete this._zoomBoundLayers[e], this._updateZoomLevels());
      },
      _updateZoomLevels: function () {
        var t = 1 / 0,
          e = -1 / 0,
          i = this._getZoomSpan();
        for (var n in this._zoomBoundLayers) {
          var o = this._zoomBoundLayers[n].options;
          (t = o.minZoom === void 0 ? t : Math.min(t, o.minZoom)),
            (e = o.maxZoom === void 0 ? e : Math.max(e, o.maxZoom));
        }
        (this._layersMaxZoom = e === -1 / 0 ? void 0 : e),
          (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
          i !== this._getZoomSpan() && this.fire("zoomlevelschange"),
          this.options.maxZoom === void 0 &&
            this._layersMaxZoom &&
            this.getZoom() > this._layersMaxZoom &&
            this.setZoom(this._layersMaxZoom),
          this.options.minZoom === void 0 &&
            this._layersMinZoom &&
            this.getZoom() < this._layersMinZoom &&
            this.setZoom(this._layersMinZoom);
      },
    });
    var zt = tt.extend({
        initialize: function (t, e) {
          z(this, e), (this._layers = {});
          var i, n;
          if (t) for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i]);
        },
        addLayer: function (t) {
          var e = this.getLayerId(t);
          return (
            (this._layers[e] = t), this._map && this._map.addLayer(t), this
          );
        },
        removeLayer: function (t) {
          var e = t in this._layers ? t : this.getLayerId(t);
          return (
            this._map &&
              this._layers[e] &&
              this._map.removeLayer(this._layers[e]),
            delete this._layers[e],
            this
          );
        },
        hasLayer: function (t) {
          var e = typeof t == "number" ? t : this.getLayerId(t);
          return e in this._layers;
        },
        clearLayers: function () {
          return this.eachLayer(this.removeLayer, this);
        },
        invoke: function (t) {
          var e = Array.prototype.slice.call(arguments, 1),
            i,
            n;
          for (i in this._layers)
            (n = this._layers[i]), n[t] && n[t].apply(n, e);
          return this;
        },
        onAdd: function (t) {
          this.eachLayer(t.addLayer, t);
        },
        onRemove: function (t) {
          this.eachLayer(t.removeLayer, t);
        },
        eachLayer: function (t, e) {
          for (var i in this._layers) t.call(e, this._layers[i]);
          return this;
        },
        getLayer: function (t) {
          return this._layers[t];
        },
        getLayers: function () {
          var t = [];
          return this.eachLayer(t.push, t), t;
        },
        setZIndex: function (t) {
          return this.invoke("setZIndex", t);
        },
        getLayerId: function (t) {
          return P(t);
        },
      }),
      To = function (t, e) {
        return new zt(t, e);
      },
      ht = zt.extend({
        addLayer: function (t) {
          return this.hasLayer(t)
            ? this
            : (t.addEventParent(this),
              zt.prototype.addLayer.call(this, t),
              this.fire("layeradd", { layer: t }));
        },
        removeLayer: function (t) {
          return this.hasLayer(t)
            ? (t in this._layers && (t = this._layers[t]),
              t.removeEventParent(this),
              zt.prototype.removeLayer.call(this, t),
              this.fire("layerremove", { layer: t }))
            : this;
        },
        setStyle: function (t) {
          return this.invoke("setStyle", t);
        },
        bringToFront: function () {
          return this.invoke("bringToFront");
        },
        bringToBack: function () {
          return this.invoke("bringToBack");
        },
        getBounds: function () {
          var t = new V();
          for (var e in this._layers) {
            var i = this._layers[e];
            t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
          }
          return t;
        },
      }),
      bo = function (t, e) {
        return new ht(t, e);
      },
      Et = rt.extend({
        options: {
          popupAnchor: [0, 0],
          tooltipAnchor: [0, 0],
          crossOrigin: !1,
        },
        initialize: function (t) {
          z(this, t);
        },
        createIcon: function (t) {
          return this._createIcon("icon", t);
        },
        createShadow: function (t) {
          return this._createIcon("shadow", t);
        },
        _createIcon: function (t, e) {
          var i = this._getIconUrl(t);
          if (!i) {
            if (t === "icon")
              throw new Error(
                "iconUrl not set in Icon options (see the docs)."
              );
            return null;
          }
          var n = this._createImg(i, e && e.tagName === "IMG" ? e : null);
          return (
            this._setIconStyles(n, t),
            (this.options.crossOrigin || this.options.crossOrigin === "") &&
              (n.crossOrigin =
                this.options.crossOrigin === !0
                  ? ""
                  : this.options.crossOrigin),
            n
          );
        },
        _setIconStyles: function (t, e) {
          var i = this.options,
            n = i[e + "Size"];
          typeof n == "number" && (n = [n, n]);
          var o = g(n),
            s = g(
              (e === "shadow" && i.shadowAnchor) ||
                i.iconAnchor ||
                (o && o.divideBy(2, !0))
            );
          (t.className = "leaflet-marker-" + e + " " + (i.className || "")),
            s &&
              ((t.style.marginLeft = -s.x + "px"),
              (t.style.marginTop = -s.y + "px")),
            o && ((t.style.width = o.x + "px"), (t.style.height = o.y + "px"));
        },
        _createImg: function (t, e) {
          return (e = e || document.createElement("img")), (e.src = t), e;
        },
        _getIconUrl: function (t) {
          return (
            (m.retina && this.options[t + "RetinaUrl"]) ||
            this.options[t + "Url"]
          );
        },
      });
    function Mo(t) {
      return new Et(t);
    }
    var qt = Et.extend({
        options: {
          iconUrl: "marker-icon.png",
          iconRetinaUrl: "marker-icon-2x.png",
          shadowUrl: "marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41],
        },
        _getIconUrl: function (t) {
          return (
            typeof qt.imagePath != "string" &&
              (qt.imagePath = this._detectIconPath()),
            (this.options.imagePath || qt.imagePath) +
              Et.prototype._getIconUrl.call(this, t)
          );
        },
        _stripUrl: function (t) {
          var e = function (i, n, o) {
            var s = n.exec(i);
            return s && s[o];
          };
          return (
            (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)),
            t && e(t, /^(.*)marker-icon\.png$/, 1)
          );
        },
        _detectIconPath: function () {
          var t = C("div", "leaflet-default-icon-path", document.body),
            e = Dt(t, "background-image") || Dt(t, "backgroundImage");
          if ((document.body.removeChild(t), (e = this._stripUrl(e)), e))
            return e;
          var i = document.querySelector('link[href$="leaflet.css"]');
          return i ? i.href.substring(0, i.href.length - 11 - 1) : "";
        },
      }),
      Ji = nt.extend({
        initialize: function (t) {
          this._marker = t;
        },
        addHooks: function () {
          var t = this._marker._icon;
          this._draggable || (this._draggable = new mt(t, t, !0)),
            this._draggable
              .on(
                {
                  dragstart: this._onDragStart,
                  predrag: this._onPreDrag,
                  drag: this._onDrag,
                  dragend: this._onDragEnd,
                },
                this
              )
              .enable(),
            x(t, "leaflet-marker-draggable");
        },
        removeHooks: function () {
          this._draggable
            .off(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            )
            .disable(),
            this._marker._icon &&
              R(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function () {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function (t) {
          var e = this._marker,
            i = e._map,
            n = this._marker.options.autoPanSpeed,
            o = this._marker.options.autoPanPadding,
            s = xt(e._icon),
            r = i.getPixelBounds(),
            a = i.getPixelOrigin(),
            u = G(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
          if (!u.contains(s)) {
            var l = g(
              (Math.max(u.max.x, s.x) - u.max.x) / (r.max.x - u.max.x) -
                (Math.min(u.min.x, s.x) - u.min.x) / (r.min.x - u.min.x),
              (Math.max(u.max.y, s.y) - u.max.y) / (r.max.y - u.max.y) -
                (Math.min(u.min.y, s.y) - u.min.y) / (r.min.y - u.min.y)
            ).multiplyBy(n);
            i.panBy(l, { animate: !1 }),
              this._draggable._newPos._add(l),
              this._draggable._startPos._add(l),
              N(e._icon, this._draggable._newPos),
              this._onDrag(t),
              (this._panRequest = U(this._adjustPan.bind(this, t)));
          }
        },
        _onDragStart: function () {
          (this._oldLatLng = this._marker.getLatLng()),
            this._marker.closePopup && this._marker.closePopup(),
            this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function (t) {
          this._marker.options.autoPan &&
            (K(this._panRequest),
            (this._panRequest = U(this._adjustPan.bind(this, t))));
        },
        _onDrag: function (t) {
          var e = this._marker,
            i = e._shadow,
            n = xt(e._icon),
            o = e._map.layerPointToLatLng(n);
          i && N(i, n),
            (e._latlng = o),
            (t.latlng = o),
            (t.oldLatLng = this._oldLatLng),
            e.fire("move", t).fire("drag", t);
        },
        _onDragEnd: function (t) {
          K(this._panRequest),
            delete this._oldLatLng,
            this._marker.fire("moveend").fire("dragend", t);
        },
      }),
      ae = tt.extend({
        options: {
          icon: new qt(),
          interactive: !0,
          keyboard: !0,
          title: "",
          alt: "Marker",
          zIndexOffset: 0,
          opacity: 1,
          riseOnHover: !1,
          riseOffset: 250,
          pane: "markerPane",
          shadowPane: "shadowPane",
          bubblingMouseEvents: !1,
          autoPanOnFocus: !0,
          draggable: !1,
          autoPan: !1,
          autoPanPadding: [50, 50],
          autoPanSpeed: 10,
        },
        initialize: function (t, e) {
          z(this, e), (this._latlng = E(t));
        },
        onAdd: function (t) {
          (this._zoomAnimated =
            this._zoomAnimated && t.options.markerZoomAnimation),
            this._zoomAnimated && t.on("zoomanim", this._animateZoom, this),
            this._initIcon(),
            this.update();
        },
        onRemove: function (t) {
          this.dragging &&
            this.dragging.enabled() &&
            ((this.options.draggable = !0), this.dragging.removeHooks()),
            delete this.dragging,
            this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
            this._removeIcon(),
            this._removeShadow();
        },
        getEvents: function () {
          return { zoom: this.update, viewreset: this.update };
        },
        getLatLng: function () {
          return this._latlng;
        },
        setLatLng: function (t) {
          var e = this._latlng;
          return (
            (this._latlng = E(t)),
            this.update(),
            this.fire("move", { oldLatLng: e, latlng: this._latlng })
          );
        },
        setZIndexOffset: function (t) {
          return (this.options.zIndexOffset = t), this.update();
        },
        getIcon: function () {
          return this.options.icon;
        },
        setIcon: function (t) {
          return (
            (this.options.icon = t),
            this._map && (this._initIcon(), this.update()),
            this._popup && this.bindPopup(this._popup, this._popup.options),
            this
          );
        },
        getElement: function () {
          return this._icon;
        },
        update: function () {
          if (this._icon && this._map) {
            var t = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(t);
          }
          return this;
        },
        _initIcon: function () {
          var t = this.options,
            e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
            i = t.icon.createIcon(this._icon),
            n = !1;
          i !== this._icon &&
            (this._icon && this._removeIcon(),
            (n = !0),
            t.title && (i.title = t.title),
            i.tagName === "IMG" && (i.alt = t.alt || "")),
            x(i, e),
            t.keyboard &&
              ((i.tabIndex = "0"), i.setAttribute("role", "button")),
            (this._icon = i),
            t.riseOnHover &&
              this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex,
              }),
            this.options.autoPanOnFocus &&
              w(i, "focus", this._panOnFocus, this);
          var o = t.icon.createShadow(this._shadow),
            s = !1;
          o !== this._shadow && (this._removeShadow(), (s = !0)),
            o && (x(o, e), (o.alt = "")),
            (this._shadow = o),
            t.opacity < 1 && this._updateOpacity(),
            n && this.getPane().appendChild(this._icon),
            this._initInteraction(),
            o && s && this.getPane(t.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function () {
          this.options.riseOnHover &&
            this.off({
              mouseover: this._bringToFront,
              mouseout: this._resetZIndex,
            }),
            this.options.autoPanOnFocus &&
              k(this._icon, "focus", this._panOnFocus, this),
            I(this._icon),
            this.removeInteractiveTarget(this._icon),
            (this._icon = null);
        },
        _removeShadow: function () {
          this._shadow && I(this._shadow), (this._shadow = null);
        },
        _setPos: function (t) {
          this._icon && N(this._icon, t),
            this._shadow && N(this._shadow, t),
            (this._zIndex = t.y + this.options.zIndexOffset),
            this._resetZIndex();
        },
        _updateZIndex: function (t) {
          this._icon && (this._icon.style.zIndex = this._zIndex + t);
        },
        _animateZoom: function (t) {
          var e = this._map
            ._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
            .round();
          this._setPos(e);
        },
        _initInteraction: function () {
          if (
            this.options.interactive &&
            (x(this._icon, "leaflet-interactive"),
            this.addInteractiveTarget(this._icon),
            Ji)
          ) {
            var t = this.options.draggable;
            this.dragging &&
              ((t = this.dragging.enabled()), this.dragging.disable()),
              (this.dragging = new Ji(this)),
              t && this.dragging.enable();
          }
        },
        setOpacity: function (t) {
          return (
            (this.options.opacity = t), this._map && this._updateOpacity(), this
          );
        },
        _updateOpacity: function () {
          var t = this.options.opacity;
          this._icon && Y(this._icon, t), this._shadow && Y(this._shadow, t);
        },
        _bringToFront: function () {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function () {
          this._updateZIndex(0);
        },
        _panOnFocus: function () {
          var t = this._map;
          if (t) {
            var e = this.options.icon.options,
              i = e.iconSize ? g(e.iconSize) : g(0, 0),
              n = e.iconAnchor ? g(e.iconAnchor) : g(0, 0);
            t.panInside(this._latlng, {
              paddingTopLeft: n,
              paddingBottomRight: i.subtract(n),
            });
          }
        },
        _getPopupAnchor: function () {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function () {
          return this.options.icon.options.tooltipAnchor;
        },
      });
    function Co(t, e) {
      return new ae(t, e);
    }
    var pt = tt.extend({
        options: {
          stroke: !0,
          color: "#3388ff",
          weight: 3,
          opacity: 1,
          lineCap: "round",
          lineJoin: "round",
          dashArray: null,
          dashOffset: null,
          fill: !1,
          fillColor: null,
          fillOpacity: 0.2,
          fillRule: "evenodd",
          interactive: !0,
          bubblingMouseEvents: !0,
        },
        beforeAdd: function (t) {
          this._renderer = t.getRenderer(this);
        },
        onAdd: function () {
          this._renderer._initPath(this),
            this._reset(),
            this._renderer._addPath(this);
        },
        onRemove: function () {
          this._renderer._removePath(this);
        },
        redraw: function () {
          return this._map && this._renderer._updatePath(this), this;
        },
        setStyle: function (t) {
          return (
            z(this, t),
            this._renderer &&
              (this._renderer._updateStyle(this),
              this.options.stroke &&
                t &&
                Object.prototype.hasOwnProperty.call(t, "weight") &&
                this._updateBounds()),
            this
          );
        },
        bringToFront: function () {
          return this._renderer && this._renderer._bringToFront(this), this;
        },
        bringToBack: function () {
          return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function () {
          return this._path;
        },
        _reset: function () {
          this._project(), this._update();
        },
        _clickTolerance: function () {
          return (
            (this.options.stroke ? this.options.weight / 2 : 0) +
            (this._renderer.options.tolerance || 0)
          );
        },
      }),
      he = pt.extend({
        options: { fill: !0, radius: 10 },
        initialize: function (t, e) {
          z(this, e),
            (this._latlng = E(t)),
            (this._radius = this.options.radius);
        },
        setLatLng: function (t) {
          var e = this._latlng;
          return (
            (this._latlng = E(t)),
            this.redraw(),
            this.fire("move", { oldLatLng: e, latlng: this._latlng })
          );
        },
        getLatLng: function () {
          return this._latlng;
        },
        setRadius: function (t) {
          return (this.options.radius = this._radius = t), this.redraw();
        },
        getRadius: function () {
          return this._radius;
        },
        setStyle: function (t) {
          var e = (t && t.radius) || this._radius;
          return pt.prototype.setStyle.call(this, t), this.setRadius(e), this;
        },
        _project: function () {
          (this._point = this._map.latLngToLayerPoint(this._latlng)),
            this._updateBounds();
        },
        _updateBounds: function () {
          var t = this._radius,
            e = this._radiusY || t,
            i = this._clickTolerance(),
            n = [t + i, e + i];
          this._pxBounds = new Z(this._point.subtract(n), this._point.add(n));
        },
        _update: function () {
          this._map && this._updatePath();
        },
        _updatePath: function () {
          this._renderer._updateCircle(this);
        },
        _empty: function () {
          return (
            this._radius && !this._renderer._bounds.intersects(this._pxBounds)
          );
        },
        _containsPoint: function (t) {
          return (
            t.distanceTo(this._point) <= this._radius + this._clickTolerance()
          );
        },
      });
    function So(t, e) {
      return new he(t, e);
    }
    var Xe = he.extend({
      initialize: function (t, e, i) {
        if (
          (typeof e == "number" && (e = d({}, i, { radius: e })),
          z(this, e),
          (this._latlng = E(t)),
          isNaN(this.options.radius))
        )
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      setRadius: function (t) {
        return (this._mRadius = t), this.redraw();
      },
      getRadius: function () {
        return this._mRadius;
      },
      getBounds: function () {
        var t = [this._radius, this._radiusY || this._radius];
        return new V(
          this._map.layerPointToLatLng(this._point.subtract(t)),
          this._map.layerPointToLatLng(this._point.add(t))
        );
      },
      setStyle: pt.prototype.setStyle,
      _project: function () {
        var t = this._latlng.lng,
          e = this._latlng.lat,
          i = this._map,
          n = i.options.crs;
        if (n.distance === _t.distance) {
          var o = Math.PI / 180,
            s = this._mRadius / _t.R / o,
            r = i.project([e + s, t]),
            a = i.project([e - s, t]),
            u = r.add(a).divideBy(2),
            l = i.unproject(u).lat,
            c =
              Math.acos(
                (Math.cos(s * o) - Math.sin(e * o) * Math.sin(l * o)) /
                  (Math.cos(e * o) * Math.cos(l * o))
              ) / o;
          (isNaN(c) || c === 0) && (c = s / Math.cos((Math.PI / 180) * e)),
            (this._point = u.subtract(i.getPixelOrigin())),
            (this._radius = isNaN(c) ? 0 : u.x - i.project([l, t - c]).x),
            (this._radiusY = u.y - r.y);
        } else {
          var v = n.unproject(
            n.project(this._latlng).subtract([this._mRadius, 0])
          );
          (this._point = i.latLngToLayerPoint(this._latlng)),
            (this._radius = this._point.x - i.latLngToLayerPoint(v).x);
        }
        this._updateBounds();
      },
    });
    function zo(t, e, i) {
      return new Xe(t, e, i);
    }
    var ut = pt.extend({
      options: { smoothFactor: 1, noClip: !1 },
      initialize: function (t, e) {
        z(this, e), this._setLatLngs(t);
      },
      getLatLngs: function () {
        return this._latlngs;
      },
      setLatLngs: function (t) {
        return this._setLatLngs(t), this.redraw();
      },
      isEmpty: function () {
        return !this._latlngs.length;
      },
      closestLayerPoint: function (t) {
        for (
          var e = 1 / 0, i = null, n = Vt, o, s, r = 0, a = this._parts.length;
          r < a;
          r++
        )
          for (var u = this._parts[r], l = 1, c = u.length; l < c; l++) {
            (o = u[l - 1]), (s = u[l]);
            var v = n(t, o, s, !0);
            v < e && ((e = v), (i = n(t, o, s)));
          }
        return i && (i.distance = Math.sqrt(e)), i;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return ji(this._defaultShape(), this._map.options.crs);
      },
      getBounds: function () {
        return this._bounds;
      },
      addLatLng: function (t, e) {
        return (
          (e = e || this._defaultShape()),
          (t = E(t)),
          e.push(t),
          this._bounds.extend(t),
          this.redraw()
        );
      },
      _setLatLngs: function (t) {
        (this._bounds = new V()), (this._latlngs = this._convertLatLngs(t));
      },
      _defaultShape: function () {
        return X(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      _convertLatLngs: function (t) {
        for (var e = [], i = X(t), n = 0, o = t.length; n < o; n++)
          i
            ? ((e[n] = E(t[n])), this._bounds.extend(e[n]))
            : (e[n] = this._convertLatLngs(t[n]));
        return e;
      },
      _project: function () {
        var t = new Z();
        (this._rings = []),
          this._projectLatlngs(this._latlngs, this._rings, t),
          this._bounds.isValid() &&
            t.isValid() &&
            ((this._rawPxBounds = t), this._updateBounds());
      },
      _updateBounds: function () {
        var t = this._clickTolerance(),
          e = new y(t, t);
        this._rawPxBounds &&
          (this._pxBounds = new Z([
            this._rawPxBounds.min.subtract(e),
            this._rawPxBounds.max.add(e),
          ]));
      },
      _projectLatlngs: function (t, e, i) {
        var n = t[0] instanceof S,
          o = t.length,
          s,
          r;
        if (n) {
          for (r = [], s = 0; s < o; s++)
            (r[s] = this._map.latLngToLayerPoint(t[s])), i.extend(r[s]);
          e.push(r);
        } else for (s = 0; s < o; s++) this._projectLatlngs(t[s], e, i);
      },
      _clipPoints: function () {
        var t = this._renderer._bounds;
        if (
          ((this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(t)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var e = this._parts,
            i,
            n,
            o,
            s,
            r,
            a,
            u;
          for (i = 0, o = 0, s = this._rings.length; i < s; i++)
            for (u = this._rings[i], n = 0, r = u.length; n < r - 1; n++)
              (a = Vi(u[n], u[n + 1], t, n, !0)),
                a &&
                  ((e[o] = e[o] || []),
                  e[o].push(a[0]),
                  (a[1] !== u[n + 1] || n === r - 2) && (e[o].push(a[1]), o++));
        }
      },
      _simplifyPoints: function () {
        for (
          var t = this._parts,
            e = this.options.smoothFactor,
            i = 0,
            n = t.length;
          i < n;
          i++
        )
          t[i] = Wi(t[i], e);
      },
      _update: function () {
        this._map &&
          (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function () {
        this._renderer._updatePoly(this);
      },
      _containsPoint: function (t, e) {
        var i,
          n,
          o,
          s,
          r,
          a,
          u = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
        for (i = 0, s = this._parts.length; i < s; i++)
          for (
            a = this._parts[i], n = 0, r = a.length, o = r - 1;
            n < r;
            o = n++
          )
            if (!(!e && n === 0) && Ui(t, a[o], a[n]) <= u) return !0;
        return !1;
      },
    });
    function Eo(t, e) {
      return new ut(t, e);
    }
    ut._flat = qi;
    var kt = ut.extend({
      options: { fill: !0 },
      isEmpty: function () {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return Yi(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function (t) {
        var e = ut.prototype._convertLatLngs.call(this, t),
          i = e.length;
        return (
          i >= 2 && e[0] instanceof S && e[0].equals(e[i - 1]) && e.pop(), e
        );
      },
      _setLatLngs: function (t) {
        ut.prototype._setLatLngs.call(this, t),
          X(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function () {
        return X(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function () {
        var t = this._renderer._bounds,
          e = this.options.weight,
          i = new y(e, e);
        if (
          ((t = new Z(t.min.subtract(i), t.max.add(i))),
          (this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(t)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var n = 0, o = this._rings.length, s; n < o; n++)
            (s = Ki(this._rings[n], t, !0)), s.length && this._parts.push(s);
        }
      },
      _updatePath: function () {
        this._renderer._updatePoly(this, !0);
      },
      _containsPoint: function (t) {
        var e = !1,
          i,
          n,
          o,
          s,
          r,
          a,
          u,
          l;
        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
        for (s = 0, u = this._parts.length; s < u; s++)
          for (
            i = this._parts[s], r = 0, l = i.length, a = l - 1;
            r < l;
            a = r++
          )
            (n = i[r]),
              (o = i[a]),
              n.y > t.y != o.y > t.y &&
                t.x < ((o.x - n.x) * (t.y - n.y)) / (o.y - n.y) + n.x &&
                (e = !e);
        return e || ut.prototype._containsPoint.call(this, t, !0);
      },
    });
    function ko(t, e) {
      return new kt(t, e);
    }
    var lt = ht.extend({
      initialize: function (t, e) {
        z(this, e), (this._layers = {}), t && this.addData(t);
      },
      addData: function (t) {
        var e = $(t) ? t : t.features,
          i,
          n,
          o;
        if (e) {
          for (i = 0, n = e.length; i < n; i++)
            (o = e[i]),
              (o.geometries || o.geometry || o.features || o.coordinates) &&
                this.addData(o);
          return this;
        }
        var s = this.options;
        if (s.filter && !s.filter(t)) return this;
        var r = ue(t, s);
        return r
          ? ((r.feature = fe(t)),
            (r.defaultOptions = r.options),
            this.resetStyle(r),
            s.onEachFeature && s.onEachFeature(t, r),
            this.addLayer(r))
          : this;
      },
      resetStyle: function (t) {
        return t === void 0
          ? this.eachLayer(this.resetStyle, this)
          : ((t.options = d({}, t.defaultOptions)),
            this._setLayerStyle(t, this.options.style),
            this);
      },
      setStyle: function (t) {
        return this.eachLayer(function (e) {
          this._setLayerStyle(e, t);
        }, this);
      },
      _setLayerStyle: function (t, e) {
        t.setStyle &&
          (typeof e == "function" && (e = e(t.feature)), t.setStyle(e));
      },
    });
    function ue(t, e) {
      var i = t.type === "Feature" ? t.geometry : t,
        n = i ? i.coordinates : null,
        o = [],
        s = e && e.pointToLayer,
        r = (e && e.coordsToLatLng) || Je,
        a,
        u,
        l,
        c;
      if (!n && !i) return null;
      switch (i.type) {
        case "Point":
          return (a = r(n)), $i(s, t, a, e);
        case "MultiPoint":
          for (l = 0, c = n.length; l < c; l++)
            (a = r(n[l])), o.push($i(s, t, a, e));
          return new ht(o);
        case "LineString":
        case "MultiLineString":
          return (u = le(n, i.type === "LineString" ? 0 : 1, r)), new ut(u, e);
        case "Polygon":
        case "MultiPolygon":
          return (u = le(n, i.type === "Polygon" ? 1 : 2, r)), new kt(u, e);
        case "GeometryCollection":
          for (l = 0, c = i.geometries.length; l < c; l++) {
            var v = ue(
              {
                geometry: i.geometries[l],
                type: "Feature",
                properties: t.properties,
              },
              e
            );
            v && o.push(v);
          }
          return new ht(o);
        case "FeatureCollection":
          for (l = 0, c = i.features.length; l < c; l++) {
            var T = ue(i.features[l], e);
            T && o.push(T);
          }
          return new ht(o);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function $i(t, e, i, n) {
      return t ? t(e, i) : new ae(i, n && n.markersInheritOptions && n);
    }
    function Je(t) {
      return new S(t[1], t[0], t[2]);
    }
    function le(t, e, i) {
      for (var n = [], o = 0, s = t.length, r; o < s; o++)
        (r = e ? le(t[o], e - 1, i) : (i || Je)(t[o])), n.push(r);
      return n;
    }
    function $e(t, e) {
      return (
        (t = E(t)),
        t.alt !== void 0
          ? [j(t.lng, e), j(t.lat, e), j(t.alt, e)]
          : [j(t.lng, e), j(t.lat, e)]
      );
    }
    function ce(t, e, i, n) {
      for (var o = [], s = 0, r = t.length; s < r; s++)
        o.push(e ? ce(t[s], X(t[s]) ? 0 : e - 1, i, n) : $e(t[s], n));
      return !e && i && o.push(o[0].slice()), o;
    }
    function Ot(t, e) {
      return t.feature ? d({}, t.feature, { geometry: e }) : fe(e);
    }
    function fe(t) {
      return t.type === "Feature" || t.type === "FeatureCollection"
        ? t
        : { type: "Feature", properties: {}, geometry: t };
    }
    var Qe = {
      toGeoJSON: function (t) {
        return Ot(this, {
          type: "Point",
          coordinates: $e(this.getLatLng(), t),
        });
      },
    };
    ae.include(Qe),
      Xe.include(Qe),
      he.include(Qe),
      ut.include({
        toGeoJSON: function (t) {
          var e = !X(this._latlngs),
            i = ce(this._latlngs, e ? 1 : 0, !1, t);
          return Ot(this, {
            type: (e ? "Multi" : "") + "LineString",
            coordinates: i,
          });
        },
      }),
      kt.include({
        toGeoJSON: function (t) {
          var e = !X(this._latlngs),
            i = e && !X(this._latlngs[0]),
            n = ce(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
          return (
            e || (n = [n]),
            Ot(this, { type: (i ? "Multi" : "") + "Polygon", coordinates: n })
          );
        },
      }),
      zt.include({
        toMultiPoint: function (t) {
          var e = [];
          return (
            this.eachLayer(function (i) {
              e.push(i.toGeoJSON(t).geometry.coordinates);
            }),
            Ot(this, { type: "MultiPoint", coordinates: e })
          );
        },
        toGeoJSON: function (t) {
          var e =
            this.feature && this.feature.geometry && this.feature.geometry.type;
          if (e === "MultiPoint") return this.toMultiPoint(t);
          var i = e === "GeometryCollection",
            n = [];
          return (
            this.eachLayer(function (o) {
              if (o.toGeoJSON) {
                var s = o.toGeoJSON(t);
                if (i) n.push(s.geometry);
                else {
                  var r = fe(s);
                  r.type === "FeatureCollection"
                    ? n.push.apply(n, r.features)
                    : n.push(r);
                }
              }
            }),
            i
              ? Ot(this, { geometries: n, type: "GeometryCollection" })
              : { type: "FeatureCollection", features: n }
          );
        },
      });
    function Qi(t, e) {
      return new lt(t, e);
    }
    var Oo = Qi,
      de = tt.extend({
        options: {
          opacity: 1,
          alt: "",
          interactive: !1,
          crossOrigin: !1,
          errorOverlayUrl: "",
          zIndex: 1,
          className: "",
        },
        initialize: function (t, e, i) {
          (this._url = t), (this._bounds = H(e)), z(this, i);
        },
        onAdd: function () {
          this._image ||
            (this._initImage(),
            this.options.opacity < 1 && this._updateOpacity()),
            this.options.interactive &&
              (x(this._image, "leaflet-interactive"),
              this.addInteractiveTarget(this._image)),
            this.getPane().appendChild(this._image),
            this._reset();
        },
        onRemove: function () {
          I(this._image),
            this.options.interactive &&
              this.removeInteractiveTarget(this._image);
        },
        setOpacity: function (t) {
          return (
            (this.options.opacity = t),
            this._image && this._updateOpacity(),
            this
          );
        },
        setStyle: function (t) {
          return t.opacity && this.setOpacity(t.opacity), this;
        },
        bringToFront: function () {
          return this._map && Ct(this._image), this;
        },
        bringToBack: function () {
          return this._map && St(this._image), this;
        },
        setUrl: function (t) {
          return (this._url = t), this._image && (this._image.src = t), this;
        },
        setBounds: function (t) {
          return (this._bounds = H(t)), this._map && this._reset(), this;
        },
        getEvents: function () {
          var t = { zoom: this._reset, viewreset: this._reset };
          return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
        },
        setZIndex: function (t) {
          return (this.options.zIndex = t), this._updateZIndex(), this;
        },
        getBounds: function () {
          return this._bounds;
        },
        getElement: function () {
          return this._image;
        },
        _initImage: function () {
          var t = this._url.tagName === "IMG",
            e = (this._image = t ? this._url : C("img"));
          if (
            (x(e, "leaflet-image-layer"),
            this._zoomAnimated && x(e, "leaflet-zoom-animated"),
            this.options.className && x(e, this.options.className),
            (e.onselectstart = O),
            (e.onmousemove = O),
            (e.onload = M(this.fire, this, "load")),
            (e.onerror = M(this._overlayOnError, this, "error")),
            (this.options.crossOrigin || this.options.crossOrigin === "") &&
              (e.crossOrigin =
                this.options.crossOrigin === !0
                  ? ""
                  : this.options.crossOrigin),
            this.options.zIndex && this._updateZIndex(),
            t)
          ) {
            this._url = e.src;
            return;
          }
          (e.src = this._url), (e.alt = this.options.alt);
        },
        _animateZoom: function (t) {
          var e = this._map.getZoomScale(t.zoom),
            i = this._map._latLngBoundsToNewLayerBounds(
              this._bounds,
              t.zoom,
              t.center
            ).min;
          wt(this._image, i, e);
        },
        _reset: function () {
          var t = this._image,
            e = new Z(
              this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
              this._map.latLngToLayerPoint(this._bounds.getSouthEast())
            ),
            i = e.getSize();
          N(t, e.min),
            (t.style.width = i.x + "px"),
            (t.style.height = i.y + "px");
        },
        _updateOpacity: function () {
          Y(this._image, this.options.opacity);
        },
        _updateZIndex: function () {
          this._image &&
            this.options.zIndex !== void 0 &&
            this.options.zIndex !== null &&
            (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function () {
          this.fire("error");
          var t = this.options.errorOverlayUrl;
          t && this._url !== t && ((this._url = t), (this._image.src = t));
        },
        getCenter: function () {
          return this._bounds.getCenter();
        },
      }),
      Zo = function (t, e, i) {
        return new de(t, e, i);
      },
      tn = de.extend({
        options: {
          autoplay: !0,
          loop: !0,
          keepAspectRatio: !0,
          muted: !1,
          playsInline: !0,
        },
        _initImage: function () {
          var t = this._url.tagName === "VIDEO",
            e = (this._image = t ? this._url : C("video"));
          if (
            (x(e, "leaflet-image-layer"),
            this._zoomAnimated && x(e, "leaflet-zoom-animated"),
            this.options.className && x(e, this.options.className),
            (e.onselectstart = O),
            (e.onmousemove = O),
            (e.onloadeddata = M(this.fire, this, "load")),
            t)
          ) {
            for (
              var i = e.getElementsByTagName("source"), n = [], o = 0;
              o < i.length;
              o++
            )
              n.push(i[o].src);
            this._url = i.length > 0 ? n : [e.src];
            return;
          }
          $(this._url) || (this._url = [this._url]),
            !this.options.keepAspectRatio &&
              Object.prototype.hasOwnProperty.call(e.style, "objectFit") &&
              (e.style.objectFit = "fill"),
            (e.autoplay = !!this.options.autoplay),
            (e.loop = !!this.options.loop),
            (e.muted = !!this.options.muted),
            (e.playsInline = !!this.options.playsInline);
          for (var s = 0; s < this._url.length; s++) {
            var r = C("source");
            (r.src = this._url[s]), e.appendChild(r);
          }
        },
      });
    function Io(t, e, i) {
      return new tn(t, e, i);
    }
    var en = de.extend({
      _initImage: function () {
        var t = (this._image = this._url);
        x(t, "leaflet-image-layer"),
          this._zoomAnimated && x(t, "leaflet-zoom-animated"),
          this.options.className && x(t, this.options.className),
          (t.onselectstart = O),
          (t.onmousemove = O);
      },
    });
    function Ao(t, e, i) {
      return new en(t, e, i);
    }
    var ot = tt.extend({
      options: {
        interactive: !1,
        offset: [0, 0],
        className: "",
        pane: void 0,
        content: "",
      },
      initialize: function (t, e) {
        t && (t instanceof S || $(t))
          ? ((this._latlng = E(t)), z(this, e))
          : (z(this, t), (this._source = e)),
          this.options.content && (this._content = this.options.content);
      },
      openOn: function (t) {
        return (
          (t = arguments.length ? t : this._source._map),
          t.hasLayer(this) || t.addLayer(this),
          this
        );
      },
      close: function () {
        return this._map && this._map.removeLayer(this), this;
      },
      toggle: function (t) {
        return (
          this._map
            ? this.close()
            : (arguments.length ? (this._source = t) : (t = this._source),
              this._prepareOpen(),
              this.openOn(t._map)),
          this
        );
      },
      onAdd: function (t) {
        (this._zoomAnimated = t._zoomAnimated),
          this._container || this._initLayout(),
          t._fadeAnimated && Y(this._container, 0),
          clearTimeout(this._removeTimeout),
          this.getPane().appendChild(this._container),
          this.update(),
          t._fadeAnimated && Y(this._container, 1),
          this.bringToFront(),
          this.options.interactive &&
            (x(this._container, "leaflet-interactive"),
            this.addInteractiveTarget(this._container));
      },
      onRemove: function (t) {
        t._fadeAnimated
          ? (Y(this._container, 0),
            (this._removeTimeout = setTimeout(
              M(I, void 0, this._container),
              200
            )))
          : I(this._container),
          this.options.interactive &&
            (R(this._container, "leaflet-interactive"),
            this.removeInteractiveTarget(this._container));
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (t) {
        return (
          (this._latlng = E(t)),
          this._map && (this._updatePosition(), this._adjustPan()),
          this
        );
      },
      getContent: function () {
        return this._content;
      },
      setContent: function (t) {
        return (this._content = t), this.update(), this;
      },
      getElement: function () {
        return this._container;
      },
      update: function () {
        this._map &&
          ((this._container.style.visibility = "hidden"),
          this._updateContent(),
          this._updateLayout(),
          this._updatePosition(),
          (this._container.style.visibility = ""),
          this._adjustPan());
      },
      getEvents: function () {
        var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      isOpen: function () {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function () {
        return this._map && Ct(this._container), this;
      },
      bringToBack: function () {
        return this._map && St(this._container), this;
      },
      _prepareOpen: function (t) {
        var e = this._source;
        if (!e._map) return !1;
        if (e instanceof ht) {
          e = null;
          var i = this._source._layers;
          for (var n in i)
            if (i[n]._map) {
              e = i[n];
              break;
            }
          if (!e) return !1;
          this._source = e;
        }
        if (!t)
          if (e.getCenter) t = e.getCenter();
          else if (e.getLatLng) t = e.getLatLng();
          else if (e.getBounds) t = e.getBounds().getCenter();
          else throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(t), this._map && this.update(), !0;
      },
      _updateContent: function () {
        if (this._content) {
          var t = this._contentNode,
            e =
              typeof this._content == "function"
                ? this._content(this._source || this)
                : this._content;
          if (typeof e == "string") t.innerHTML = e;
          else {
            for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
            t.appendChild(e);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function () {
        if (this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng),
            e = g(this.options.offset),
            i = this._getAnchor();
          this._zoomAnimated
            ? N(this._container, t.add(i))
            : (e = e.add(t).add(i));
          var n = (this._containerBottom = -e.y),
            o = (this._containerLeft =
              -Math.round(this._containerWidth / 2) + e.x);
          (this._container.style.bottom = n + "px"),
            (this._container.style.left = o + "px");
        }
      },
      _getAnchor: function () {
        return [0, 0];
      },
    });
    b.include({
      _initOverlay: function (t, e, i, n) {
        var o = e;
        return (
          o instanceof t || (o = new t(n).setContent(e)), i && o.setLatLng(i), o
        );
      },
    }),
      tt.include({
        _initOverlay: function (t, e, i, n) {
          var o = i;
          return (
            o instanceof t
              ? (z(o, n), (o._source = this))
              : ((o = e && !n ? e : new t(n, this)), o.setContent(i)),
            o
          );
        },
      });
    var _e = ot.extend({
        options: {
          pane: "popupPane",
          offset: [0, 7],
          maxWidth: 300,
          minWidth: 50,
          maxHeight: null,
          autoPan: !0,
          autoPanPaddingTopLeft: null,
          autoPanPaddingBottomRight: null,
          autoPanPadding: [5, 5],
          keepInView: !1,
          closeButton: !0,
          autoClose: !0,
          closeOnEscapeKey: !0,
          className: "",
        },
        openOn: function (t) {
          return (
            (t = arguments.length ? t : this._source._map),
            !t.hasLayer(this) &&
              t._popup &&
              t._popup.options.autoClose &&
              t.removeLayer(t._popup),
            (t._popup = this),
            ot.prototype.openOn.call(this, t)
          );
        },
        onAdd: function (t) {
          ot.prototype.onAdd.call(this, t),
            t.fire("popupopen", { popup: this }),
            this._source &&
              (this._source.fire("popupopen", { popup: this }, !0),
              this._source instanceof pt || this._source.on("preclick", Pt));
        },
        onRemove: function (t) {
          ot.prototype.onRemove.call(this, t),
            t.fire("popupclose", { popup: this }),
            this._source &&
              (this._source.fire("popupclose", { popup: this }, !0),
              this._source instanceof pt || this._source.off("preclick", Pt));
        },
        getEvents: function () {
          var t = ot.prototype.getEvents.call(this);
          return (
            (this.options.closeOnClick !== void 0
              ? this.options.closeOnClick
              : this._map.options.closePopupOnClick) &&
              (t.preclick = this.close),
            this.options.keepInView && (t.moveend = this._adjustPan),
            t
          );
        },
        _initLayout: function () {
          var t = "leaflet-popup",
            e = (this._container = C(
              "div",
              t +
                " " +
                (this.options.className || "") +
                " leaflet-zoom-animated"
            )),
            i = (this._wrapper = C("div", t + "-content-wrapper", e));
          if (
            ((this._contentNode = C("div", t + "-content", i)),
            Ut(e),
            Ue(this._contentNode),
            w(e, "contextmenu", Pt),
            (this._tipContainer = C("div", t + "-tip-container", e)),
            (this._tip = C("div", t + "-tip", this._tipContainer)),
            this.options.closeButton)
          ) {
            var n = (this._closeButton = C("a", t + "-close-button", e));
            n.setAttribute("role", "button"),
              n.setAttribute("aria-label", "Close popup"),
              (n.href = "#close"),
              (n.innerHTML = '<span aria-hidden="true">&#215;</span>'),
              w(
                n,
                "click",
                function (o) {
                  F(o), this.close();
                },
                this
              );
          }
        },
        _updateLayout: function () {
          var t = this._contentNode,
            e = t.style;
          (e.width = ""), (e.whiteSpace = "nowrap");
          var i = t.offsetWidth;
          (i = Math.min(i, this.options.maxWidth)),
            (i = Math.max(i, this.options.minWidth)),
            (e.width = i + 1 + "px"),
            (e.whiteSpace = ""),
            (e.height = "");
          var n = t.offsetHeight,
            o = this.options.maxHeight,
            s = "leaflet-popup-scrolled";
          o && n > o ? ((e.height = o + "px"), x(t, s)) : R(t, s),
            (this._containerWidth = this._container.offsetWidth);
        },
        _animateZoom: function (t) {
          var e = this._map._latLngToNewLayerPoint(
              this._latlng,
              t.zoom,
              t.center
            ),
            i = this._getAnchor();
          N(this._container, e.add(i));
        },
        _adjustPan: function () {
          if (this.options.autoPan) {
            if (
              (this._map._panAnim && this._map._panAnim.stop(),
              this._autopanning)
            ) {
              this._autopanning = !1;
              return;
            }
            var t = this._map,
              e = parseInt(Dt(this._container, "marginBottom"), 10) || 0,
              i = this._container.offsetHeight + e,
              n = this._containerWidth,
              o = new y(this._containerLeft, -i - this._containerBottom);
            o._add(xt(this._container));
            var s = t.layerPointToContainerPoint(o),
              r = g(this.options.autoPanPadding),
              a = g(this.options.autoPanPaddingTopLeft || r),
              u = g(this.options.autoPanPaddingBottomRight || r),
              l = t.getSize(),
              c = 0,
              v = 0;
            s.x + n + u.x > l.x && (c = s.x + n - l.x + u.x),
              s.x - c - a.x < 0 && (c = s.x - a.x),
              s.y + i + u.y > l.y && (v = s.y + i - l.y + u.y),
              s.y - v - a.y < 0 && (v = s.y - a.y),
              (c || v) &&
                (this.options.keepInView && (this._autopanning = !0),
                t.fire("autopanstart").panBy([c, v]));
          }
        },
        _getAnchor: function () {
          return g(
            this._source && this._source._getPopupAnchor
              ? this._source._getPopupAnchor()
              : [0, 0]
          );
        },
      }),
      Bo = function (t, e) {
        return new _e(t, e);
      };
    b.mergeOptions({ closePopupOnClick: !0 }),
      b.include({
        openPopup: function (t, e, i) {
          return this._initOverlay(_e, t, e, i).openOn(this), this;
        },
        closePopup: function (t) {
          return (t = arguments.length ? t : this._popup), t && t.close(), this;
        },
      }),
      tt.include({
        bindPopup: function (t, e) {
          return (
            (this._popup = this._initOverlay(_e, this._popup, t, e)),
            this._popupHandlersAdded ||
              (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !0)),
            this
          );
        },
        unbindPopup: function () {
          return (
            this._popup &&
              (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !1),
              (this._popup = null)),
            this
          );
        },
        openPopup: function (t) {
          return (
            this._popup &&
              (this instanceof ht || (this._popup._source = this),
              this._popup._prepareOpen(t || this._latlng) &&
                this._popup.openOn(this._map)),
            this
          );
        },
        closePopup: function () {
          return this._popup && this._popup.close(), this;
        },
        togglePopup: function () {
          return this._popup && this._popup.toggle(this), this;
        },
        isPopupOpen: function () {
          return this._popup ? this._popup.isOpen() : !1;
        },
        setPopupContent: function (t) {
          return this._popup && this._popup.setContent(t), this;
        },
        getPopup: function () {
          return this._popup;
        },
        _openPopup: function (t) {
          if (!(!this._popup || !this._map)) {
            Lt(t);
            var e = t.layer || t.target;
            if (this._popup._source === e && !(e instanceof pt)) {
              this._map.hasLayer(this._popup)
                ? this.closePopup()
                : this.openPopup(t.latlng);
              return;
            }
            (this._popup._source = e), this.openPopup(t.latlng);
          }
        },
        _movePopup: function (t) {
          this._popup.setLatLng(t.latlng);
        },
        _onKeyPress: function (t) {
          t.originalEvent.keyCode === 13 && this._openPopup(t);
        },
      });
    var me = ot.extend({
        options: {
          pane: "tooltipPane",
          offset: [0, 0],
          direction: "auto",
          permanent: !1,
          sticky: !1,
          opacity: 0.9,
        },
        onAdd: function (t) {
          ot.prototype.onAdd.call(this, t),
            this.setOpacity(this.options.opacity),
            t.fire("tooltipopen", { tooltip: this }),
            this._source &&
              (this.addEventParent(this._source),
              this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function (t) {
          ot.prototype.onRemove.call(this, t),
            t.fire("tooltipclose", { tooltip: this }),
            this._source &&
              (this.removeEventParent(this._source),
              this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function () {
          var t = ot.prototype.getEvents.call(this);
          return this.options.permanent || (t.preclick = this.close), t;
        },
        _initLayout: function () {
          var t = "leaflet-tooltip",
            e =
              t +
              " " +
              (this.options.className || "") +
              " leaflet-zoom-" +
              (this._zoomAnimated ? "animated" : "hide");
          (this._contentNode = this._container = C("div", e)),
            this._container.setAttribute("role", "tooltip"),
            this._container.setAttribute("id", "leaflet-tooltip-" + P(this));
        },
        _updateLayout: function () {},
        _adjustPan: function () {},
        _setPosition: function (t) {
          var e,
            i,
            n = this._map,
            o = this._container,
            s = n.latLngToContainerPoint(n.getCenter()),
            r = n.layerPointToContainerPoint(t),
            a = this.options.direction,
            u = o.offsetWidth,
            l = o.offsetHeight,
            c = g(this.options.offset),
            v = this._getAnchor();
          a === "top"
            ? ((e = u / 2), (i = l))
            : a === "bottom"
            ? ((e = u / 2), (i = 0))
            : a === "center"
            ? ((e = u / 2), (i = l / 2))
            : a === "right"
            ? ((e = 0), (i = l / 2))
            : a === "left"
            ? ((e = u), (i = l / 2))
            : r.x < s.x
            ? ((a = "right"), (e = 0), (i = l / 2))
            : ((a = "left"), (e = u + (c.x + v.x) * 2), (i = l / 2)),
            (t = t.subtract(g(e, i, !0)).add(c).add(v)),
            R(o, "leaflet-tooltip-right"),
            R(o, "leaflet-tooltip-left"),
            R(o, "leaflet-tooltip-top"),
            R(o, "leaflet-tooltip-bottom"),
            x(o, "leaflet-tooltip-" + a),
            N(o, t);
        },
        _updatePosition: function () {
          var t = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(t);
        },
        setOpacity: function (t) {
          (this.options.opacity = t), this._container && Y(this._container, t);
        },
        _animateZoom: function (t) {
          var e = this._map._latLngToNewLayerPoint(
            this._latlng,
            t.zoom,
            t.center
          );
          this._setPosition(e);
        },
        _getAnchor: function () {
          return g(
            this._source &&
              this._source._getTooltipAnchor &&
              !this.options.sticky
              ? this._source._getTooltipAnchor()
              : [0, 0]
          );
        },
      }),
      Ro = function (t, e) {
        return new me(t, e);
      };
    b.include({
      openTooltip: function (t, e, i) {
        return this._initOverlay(me, t, e, i).openOn(this), this;
      },
      closeTooltip: function (t) {
        return t.close(), this;
      },
    }),
      tt.include({
        bindTooltip: function (t, e) {
          return (
            this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
            (this._tooltip = this._initOverlay(me, this._tooltip, t, e)),
            this._initTooltipInteractions(),
            this._tooltip.options.permanent &&
              this._map &&
              this._map.hasLayer(this) &&
              this.openTooltip(),
            this
          );
        },
        unbindTooltip: function () {
          return (
            this._tooltip &&
              (this._initTooltipInteractions(!0),
              this.closeTooltip(),
              (this._tooltip = null)),
            this
          );
        },
        _initTooltipInteractions: function (t) {
          if (!(!t && this._tooltipHandlersAdded)) {
            var e = t ? "off" : "on",
              i = { remove: this.closeTooltip, move: this._moveTooltip };
            this._tooltip.options.permanent
              ? (i.add = this._openTooltip)
              : ((i.mouseover = this._openTooltip),
                (i.mouseout = this.closeTooltip),
                (i.click = this._openTooltip),
                this._map
                  ? this._addFocusListeners()
                  : (i.add = this._addFocusListeners)),
              this._tooltip.options.sticky && (i.mousemove = this._moveTooltip),
              this[e](i),
              (this._tooltipHandlersAdded = !t);
          }
        },
        openTooltip: function (t) {
          return (
            this._tooltip &&
              (this instanceof ht || (this._tooltip._source = this),
              this._tooltip._prepareOpen(t) &&
                (this._tooltip.openOn(this._map),
                this.getElement
                  ? this._setAriaDescribedByOnLayer(this)
                  : this.eachLayer &&
                    this.eachLayer(this._setAriaDescribedByOnLayer, this))),
            this
          );
        },
        closeTooltip: function () {
          if (this._tooltip) return this._tooltip.close();
        },
        toggleTooltip: function () {
          return this._tooltip && this._tooltip.toggle(this), this;
        },
        isTooltipOpen: function () {
          return this._tooltip.isOpen();
        },
        setTooltipContent: function (t) {
          return this._tooltip && this._tooltip.setContent(t), this;
        },
        getTooltip: function () {
          return this._tooltip;
        },
        _addFocusListeners: function () {
          this.getElement
            ? this._addFocusListenersOnLayer(this)
            : this.eachLayer &&
              this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function (t) {
          var e = t.getElement();
          e &&
            (w(
              e,
              "focus",
              function () {
                (this._tooltip._source = t), this.openTooltip();
              },
              this
            ),
            w(e, "blur", this.closeTooltip, this));
        },
        _setAriaDescribedByOnLayer: function (t) {
          var e = t.getElement();
          e && e.setAttribute("aria-describedby", this._tooltip._container.id);
        },
        _openTooltip: function (t) {
          !this._tooltip ||
            !this._map ||
            (this._map.dragging && this._map.dragging.moving()) ||
            ((this._tooltip._source = t.layer || t.target),
            this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0));
        },
        _moveTooltip: function (t) {
          var e = t.latlng,
            i,
            n;
          this._tooltip.options.sticky &&
            t.originalEvent &&
            ((i = this._map.mouseEventToContainerPoint(t.originalEvent)),
            (n = this._map.containerPointToLayerPoint(i)),
            (e = this._map.layerPointToLatLng(n))),
            this._tooltip.setLatLng(e);
        },
      });
    var nn = Et.extend({
      options: {
        iconSize: [12, 12],
        html: !1,
        bgPos: null,
        className: "leaflet-div-icon",
      },
      createIcon: function (t) {
        var e = t && t.tagName === "DIV" ? t : document.createElement("div"),
          i = this.options;
        if (
          (i.html instanceof Element
            ? (ee(e), e.appendChild(i.html))
            : (e.innerHTML = i.html !== !1 ? i.html : ""),
          i.bgPos)
        ) {
          var n = g(i.bgPos);
          e.style.backgroundPosition = -n.x + "px " + -n.y + "px";
        }
        return this._setIconStyles(e, "icon"), e;
      },
      createShadow: function () {
        return null;
      },
    });
    function No(t) {
      return new nn(t);
    }
    Et.Default = qt;
    var jt = tt.extend({
      options: {
        tileSize: 256,
        opacity: 1,
        updateWhenIdle: m.mobile,
        updateWhenZooming: !0,
        updateInterval: 200,
        zIndex: 1,
        bounds: null,
        minZoom: 0,
        maxZoom: void 0,
        maxNativeZoom: void 0,
        minNativeZoom: void 0,
        noWrap: !1,
        pane: "tilePane",
        className: "",
        keepBuffer: 2,
      },
      initialize: function (t) {
        z(this, t);
      },
      onAdd: function () {
        this._initContainer(),
          (this._levels = {}),
          (this._tiles = {}),
          this._resetView();
      },
      beforeAdd: function (t) {
        t._addZoomLimit(this);
      },
      onRemove: function (t) {
        this._removeAllTiles(),
          I(this._container),
          t._removeZoomLimit(this),
          (this._container = null),
          (this._tileZoom = void 0);
      },
      bringToFront: function () {
        return (
          this._map && (Ct(this._container), this._setAutoZIndex(Math.max)),
          this
        );
      },
      bringToBack: function () {
        return (
          this._map && (St(this._container), this._setAutoZIndex(Math.min)),
          this
        );
      },
      getContainer: function () {
        return this._container;
      },
      setOpacity: function (t) {
        return (this.options.opacity = t), this._updateOpacity(), this;
      },
      setZIndex: function (t) {
        return (this.options.zIndex = t), this._updateZIndex(), this;
      },
      isLoading: function () {
        return this._loading;
      },
      redraw: function () {
        if (this._map) {
          this._removeAllTiles();
          var t = this._clampZoom(this._map.getZoom());
          t !== this._tileZoom && ((this._tileZoom = t), this._updateLevels()),
            this._update();
        }
        return this;
      },
      getEvents: function () {
        var t = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd,
        };
        return (
          this.options.updateWhenIdle ||
            (this._onMove ||
              (this._onMove = dt(
                this._onMoveEnd,
                this.options.updateInterval,
                this
              )),
            (t.move = this._onMove)),
          this._zoomAnimated && (t.zoomanim = this._animateZoom),
          t
        );
      },
      createTile: function () {
        return document.createElement("div");
      },
      getTileSize: function () {
        var t = this.options.tileSize;
        return t instanceof y ? t : new y(t, t);
      },
      _updateZIndex: function () {
        this._container &&
          this.options.zIndex !== void 0 &&
          this.options.zIndex !== null &&
          (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function (t) {
        for (
          var e = this.getPane().children,
            i = -t(-1 / 0, 1 / 0),
            n = 0,
            o = e.length,
            s;
          n < o;
          n++
        )
          (s = e[n].style.zIndex),
            e[n] !== this._container && s && (i = t(i, +s));
        isFinite(i) &&
          ((this.options.zIndex = i + t(-1, 1)), this._updateZIndex());
      },
      _updateOpacity: function () {
        if (this._map && !m.ielt9) {
          Y(this._container, this.options.opacity);
          var t = +new Date(),
            e = !1,
            i = !1;
          for (var n in this._tiles) {
            var o = this._tiles[n];
            if (!(!o.current || !o.loaded)) {
              var s = Math.min(1, (t - o.loaded) / 200);
              Y(o.el, s),
                s < 1
                  ? (e = !0)
                  : (o.active ? (i = !0) : this._onOpaqueTile(o),
                    (o.active = !0));
            }
          }
          i && !this._noPrune && this._pruneTiles(),
            e &&
              (K(this._fadeFrame),
              (this._fadeFrame = U(this._updateOpacity, this)));
        }
      },
      _onOpaqueTile: O,
      _initContainer: function () {
        this._container ||
          ((this._container = C(
            "div",
            "leaflet-layer " + (this.options.className || "")
          )),
          this._updateZIndex(),
          this.options.opacity < 1 && this._updateOpacity(),
          this.getPane().appendChild(this._container));
      },
      _updateLevels: function () {
        var t = this._tileZoom,
          e = this.options.maxZoom;
        if (t !== void 0) {
          for (var i in this._levels)
            (i = Number(i)),
              this._levels[i].el.children.length || i === t
                ? ((this._levels[i].el.style.zIndex = e - Math.abs(t - i)),
                  this._onUpdateLevel(i))
                : (I(this._levels[i].el),
                  this._removeTilesAtZoom(i),
                  this._onRemoveLevel(i),
                  delete this._levels[i]);
          var n = this._levels[t],
            o = this._map;
          return (
            n ||
              ((n = this._levels[t] = {}),
              (n.el = C(
                "div",
                "leaflet-tile-container leaflet-zoom-animated",
                this._container
              )),
              (n.el.style.zIndex = e),
              (n.origin = o
                .project(o.unproject(o.getPixelOrigin()), t)
                .round()),
              (n.zoom = t),
              this._setZoomTransform(n, o.getCenter(), o.getZoom()),
              O(n.el.offsetWidth),
              this._onCreateLevel(n)),
            (this._level = n),
            n
          );
        }
      },
      _onUpdateLevel: O,
      _onRemoveLevel: O,
      _onCreateLevel: O,
      _pruneTiles: function () {
        if (this._map) {
          var t,
            e,
            i = this._map.getZoom();
          if (i > this.options.maxZoom || i < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (t in this._tiles) (e = this._tiles[t]), (e.retain = e.current);
          for (t in this._tiles)
            if (((e = this._tiles[t]), e.current && !e.active)) {
              var n = e.coords;
              this._retainParent(n.x, n.y, n.z, n.z - 5) ||
                this._retainChildren(n.x, n.y, n.z, n.z + 2);
            }
          for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
        }
      },
      _removeTilesAtZoom: function (t) {
        for (var e in this._tiles)
          this._tiles[e].coords.z === t && this._removeTile(e);
      },
      _removeAllTiles: function () {
        for (var t in this._tiles) this._removeTile(t);
      },
      _invalidateAll: function () {
        for (var t in this._levels)
          I(this._levels[t].el),
            this._onRemoveLevel(Number(t)),
            delete this._levels[t];
        this._removeAllTiles(), (this._tileZoom = void 0);
      },
      _retainParent: function (t, e, i, n) {
        var o = Math.floor(t / 2),
          s = Math.floor(e / 2),
          r = i - 1,
          a = new y(+o, +s);
        a.z = +r;
        var u = this._tileCoordsToKey(a),
          l = this._tiles[u];
        return l && l.active
          ? ((l.retain = !0), !0)
          : (l && l.loaded && (l.retain = !0),
            r > n ? this._retainParent(o, s, r, n) : !1);
      },
      _retainChildren: function (t, e, i, n) {
        for (var o = 2 * t; o < 2 * t + 2; o++)
          for (var s = 2 * e; s < 2 * e + 2; s++) {
            var r = new y(o, s);
            r.z = i + 1;
            var a = this._tileCoordsToKey(r),
              u = this._tiles[a];
            if (u && u.active) {
              u.retain = !0;
              continue;
            } else u && u.loaded && (u.retain = !0);
            i + 1 < n && this._retainChildren(o, s, i + 1, n);
          }
      },
      _resetView: function (t) {
        var e = t && (t.pinch || t.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
      },
      _animateZoom: function (t) {
        this._setView(t.center, t.zoom, !0, t.noUpdate);
      },
      _clampZoom: function (t) {
        var e = this.options;
        return e.minNativeZoom !== void 0 && t < e.minNativeZoom
          ? e.minNativeZoom
          : e.maxNativeZoom !== void 0 && e.maxNativeZoom < t
          ? e.maxNativeZoom
          : t;
      },
      _setView: function (t, e, i, n) {
        var o = Math.round(e);
        (this.options.maxZoom !== void 0 && o > this.options.maxZoom) ||
        (this.options.minZoom !== void 0 && o < this.options.minZoom)
          ? (o = void 0)
          : (o = this._clampZoom(o));
        var s = this.options.updateWhenZooming && o !== this._tileZoom;
        (!n || s) &&
          ((this._tileZoom = o),
          this._abortLoading && this._abortLoading(),
          this._updateLevels(),
          this._resetGrid(),
          o !== void 0 && this._update(t),
          i || this._pruneTiles(),
          (this._noPrune = !!i)),
          this._setZoomTransforms(t, e);
      },
      _setZoomTransforms: function (t, e) {
        for (var i in this._levels)
          this._setZoomTransform(this._levels[i], t, e);
      },
      _setZoomTransform: function (t, e, i) {
        var n = this._map.getZoomScale(i, t.zoom),
          o = t.origin
            .multiplyBy(n)
            .subtract(this._map._getNewPixelOrigin(e, i))
            .round();
        m.any3d ? wt(t.el, o, n) : N(t.el, o);
      },
      _resetGrid: function () {
        var t = this._map,
          e = t.options.crs,
          i = (this._tileSize = this.getTileSize()),
          n = this._tileZoom,
          o = this._map.getPixelWorldBounds(this._tileZoom);
        o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
          (this._wrapX = e.wrapLng &&
            !this.options.noWrap && [
              Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x),
              Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y),
            ]),
          (this._wrapY = e.wrapLat &&
            !this.options.noWrap && [
              Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x),
              Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y),
            ]);
      },
      _onMoveEnd: function () {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function (t) {
        var e = this._map,
          i = e._animatingZoom
            ? Math.max(e._animateToZoom, e.getZoom())
            : e.getZoom(),
          n = e.getZoomScale(i, this._tileZoom),
          o = e.project(t, this._tileZoom).floor(),
          s = e.getSize().divideBy(n * 2);
        return new Z(o.subtract(s), o.add(s));
      },
      _update: function (t) {
        var e = this._map;
        if (e) {
          var i = this._clampZoom(e.getZoom());
          if (
            (t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0)
          ) {
            var n = this._getTiledPixelBounds(t),
              o = this._pxBoundsToTileRange(n),
              s = o.getCenter(),
              r = [],
              a = this.options.keepBuffer,
              u = new Z(
                o.getBottomLeft().subtract([a, -a]),
                o.getTopRight().add([a, -a])
              );
            if (
              !(
                isFinite(o.min.x) &&
                isFinite(o.min.y) &&
                isFinite(o.max.x) &&
                isFinite(o.max.y)
              )
            )
              throw new Error("Attempted to load an infinite number of tiles");
            for (var l in this._tiles) {
              var c = this._tiles[l].coords;
              (c.z !== this._tileZoom || !u.contains(new y(c.x, c.y))) &&
                (this._tiles[l].current = !1);
            }
            if (Math.abs(i - this._tileZoom) > 1) {
              this._setView(t, i);
              return;
            }
            for (var v = o.min.y; v <= o.max.y; v++)
              for (var T = o.min.x; T <= o.max.x; T++) {
                var J = new y(T, v);
                if (((J.z = this._tileZoom), !!this._isValidTile(J))) {
                  var bt = this._tiles[this._tileCoordsToKey(J)];
                  bt ? (bt.current = !0) : r.push(J);
                }
              }
            if (
              (r.sort(function (vt, ti) {
                return vt.distanceTo(s) - ti.distanceTo(s);
              }),
              r.length !== 0)
            ) {
              this._loading || ((this._loading = !0), this.fire("loading"));
              var ve = document.createDocumentFragment();
              for (T = 0; T < r.length; T++) this._addTile(r[T], ve);
              this._level.el.appendChild(ve);
            }
          }
        }
      },
      _isValidTile: function (t) {
        var e = this._map.options.crs;
        if (!e.infinite) {
          var i = this._globalTileRange;
          if (
            (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x)) ||
            (!e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
          )
            return !1;
        }
        if (!this.options.bounds) return !0;
        var n = this._tileCoordsToBounds(t);
        return H(this.options.bounds).overlaps(n);
      },
      _keyToBounds: function (t) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t));
      },
      _tileCoordsToNwSe: function (t) {
        var e = this._map,
          i = this.getTileSize(),
          n = t.scaleBy(i),
          o = n.add(i),
          s = e.unproject(n, t.z),
          r = e.unproject(o, t.z);
        return [s, r];
      },
      _tileCoordsToBounds: function (t) {
        var e = this._tileCoordsToNwSe(t),
          i = new V(e[0], e[1]);
        return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
      },
      _tileCoordsToKey: function (t) {
        return t.x + ":" + t.y + ":" + t.z;
      },
      _keyToTileCoords: function (t) {
        var e = t.split(":"),
          i = new y(+e[0], +e[1]);
        return (i.z = +e[2]), i;
      },
      _removeTile: function (t) {
        var e = this._tiles[t];
        e &&
          (I(e.el),
          delete this._tiles[t],
          this.fire("tileunload", {
            tile: e.el,
            coords: this._keyToTileCoords(t),
          }));
      },
      _initTile: function (t) {
        x(t, "leaflet-tile");
        var e = this.getTileSize();
        (t.style.width = e.x + "px"),
          (t.style.height = e.y + "px"),
          (t.onselectstart = O),
          (t.onmousemove = O),
          m.ielt9 && this.options.opacity < 1 && Y(t, this.options.opacity);
      },
      _addTile: function (t, e) {
        var i = this._getTilePos(t),
          n = this._tileCoordsToKey(t),
          o = this.createTile(this._wrapCoords(t), M(this._tileReady, this, t));
        this._initTile(o),
          this.createTile.length < 2 && U(M(this._tileReady, this, t, null, o)),
          N(o, i),
          (this._tiles[n] = { el: o, coords: t, current: !0 }),
          e.appendChild(o),
          this.fire("tileloadstart", { tile: o, coords: t });
      },
      _tileReady: function (t, e, i) {
        e && this.fire("tileerror", { error: e, tile: i, coords: t });
        var n = this._tileCoordsToKey(t);
        (i = this._tiles[n]),
          i &&
            ((i.loaded = +new Date()),
            this._map._fadeAnimated
              ? (Y(i.el, 0),
                K(this._fadeFrame),
                (this._fadeFrame = U(this._updateOpacity, this)))
              : ((i.active = !0), this._pruneTiles()),
            e ||
              (x(i.el, "leaflet-tile-loaded"),
              this.fire("tileload", { tile: i.el, coords: t })),
            this._noTilesToLoad() &&
              ((this._loading = !1),
              this.fire("load"),
              m.ielt9 || !this._map._fadeAnimated
                ? U(this._pruneTiles, this)
                : setTimeout(M(this._pruneTiles, this), 250)));
      },
      _getTilePos: function (t) {
        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function (t) {
        var e = new y(
          this._wrapX ? gt(t.x, this._wrapX) : t.x,
          this._wrapY ? gt(t.y, this._wrapY) : t.y
        );
        return (e.z = t.z), e;
      },
      _pxBoundsToTileRange: function (t) {
        var e = this.getTileSize();
        return new Z(
          t.min.unscaleBy(e).floor(),
          t.max.unscaleBy(e).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function () {
        for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
        return !0;
      },
    });
    function Do(t) {
      return new jt(t);
    }
    var Zt = jt.extend({
      options: {
        minZoom: 0,
        maxZoom: 18,
        subdomains: "abc",
        errorTileUrl: "",
        zoomOffset: 0,
        tms: !1,
        zoomReverse: !1,
        detectRetina: !1,
        crossOrigin: !1,
        referrerPolicy: !1,
      },
      initialize: function (t, e) {
        (this._url = t),
          (e = z(this, e)),
          e.detectRetina && m.retina && e.maxZoom > 0
            ? ((e.tileSize = Math.floor(e.tileSize / 2)),
              e.zoomReverse
                ? (e.zoomOffset--,
                  (e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)))
                : (e.zoomOffset++,
                  (e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1))),
              (e.minZoom = Math.max(0, e.minZoom)))
            : e.zoomReverse
            ? (e.minZoom = Math.min(e.maxZoom, e.minZoom))
            : (e.maxZoom = Math.max(e.minZoom, e.maxZoom)),
          typeof e.subdomains == "string" &&
            (e.subdomains = e.subdomains.split("")),
          this.on("tileunload", this._onTileRemove);
      },
      setUrl: function (t, e) {
        return (
          this._url === t && e === void 0 && (e = !0),
          (this._url = t),
          e || this.redraw(),
          this
        );
      },
      createTile: function (t, e) {
        var i = document.createElement("img");
        return (
          w(i, "load", M(this._tileOnLoad, this, e, i)),
          w(i, "error", M(this._tileOnError, this, e, i)),
          (this.options.crossOrigin || this.options.crossOrigin === "") &&
            (i.crossOrigin =
              this.options.crossOrigin === !0 ? "" : this.options.crossOrigin),
          typeof this.options.referrerPolicy == "string" &&
            (i.referrerPolicy = this.options.referrerPolicy),
          (i.alt = ""),
          (i.src = this.getTileUrl(t)),
          i
        );
      },
      getTileUrl: function (t) {
        var e = {
          r: m.retina ? "@2x" : "",
          s: this._getSubdomain(t),
          x: t.x,
          y: t.y,
          z: this._getZoomForUrl(),
        };
        if (this._map && !this._map.options.crs.infinite) {
          var i = this._globalTileRange.max.y - t.y;
          this.options.tms && (e.y = i), (e["-y"] = i);
        }
        return yt(this._url, d(e, this.options));
      },
      _tileOnLoad: function (t, e) {
        m.ielt9 ? setTimeout(M(t, this, null, e), 0) : t(null, e);
      },
      _tileOnError: function (t, e, i) {
        var n = this.options.errorTileUrl;
        n && e.getAttribute("src") !== n && (e.src = n), t(i, e);
      },
      _onTileRemove: function (t) {
        t.tile.onload = null;
      },
      _getZoomForUrl: function () {
        var t = this._tileZoom,
          e = this.options.maxZoom,
          i = this.options.zoomReverse,
          n = this.options.zoomOffset;
        return i && (t = e - t), t + n;
      },
      _getSubdomain: function (t) {
        var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
        return this.options.subdomains[e];
      },
      _abortLoading: function () {
        var t, e;
        for (t in this._tiles)
          if (
            this._tiles[t].coords.z !== this._tileZoom &&
            ((e = this._tiles[t].el),
            (e.onload = O),
            (e.onerror = O),
            !e.complete)
          ) {
            e.src = $t;
            var i = this._tiles[t].coords;
            I(e),
              delete this._tiles[t],
              this.fire("tileabort", { tile: e, coords: i });
          }
      },
      _removeTile: function (t) {
        var e = this._tiles[t];
        if (e)
          return (
            e.el.setAttribute("src", $t), jt.prototype._removeTile.call(this, t)
          );
      },
      _tileReady: function (t, e, i) {
        if (!(!this._map || (i && i.getAttribute("src") === $t)))
          return jt.prototype._tileReady.call(this, t, e, i);
      },
    });
    function on(t, e) {
      return new Zt(t, e);
    }
    var sn = Zt.extend({
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        layers: "",
        styles: "",
        format: "image/jpeg",
        transparent: !1,
        version: "1.1.1",
      },
      options: { crs: null, uppercase: !1 },
      initialize: function (t, e) {
        this._url = t;
        var i = d({}, this.defaultWmsParams);
        for (var n in e) n in this.options || (i[n] = e[n]);
        e = z(this, e);
        var o = e.detectRetina && m.retina ? 2 : 1,
          s = this.getTileSize();
        (i.width = s.x * o), (i.height = s.y * o), (this.wmsParams = i);
      },
      onAdd: function (t) {
        (this._crs = this.options.crs || t.options.crs),
          (this._wmsVersion = parseFloat(this.wmsParams.version));
        var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
        (this.wmsParams[e] = this._crs.code), Zt.prototype.onAdd.call(this, t);
      },
      getTileUrl: function (t) {
        var e = this._tileCoordsToNwSe(t),
          i = this._crs,
          n = G(i.project(e[0]), i.project(e[1])),
          o = n.min,
          s = n.max,
          r = (
            this._wmsVersion >= 1.3 && this._crs === Xi
              ? [o.y, o.x, s.y, s.x]
              : [o.x, o.y, s.x, s.y]
          ).join(","),
          a = Zt.prototype.getTileUrl.call(this, t);
        return (
          a +
          Xt(this.wmsParams, a, this.options.uppercase) +
          (this.options.uppercase ? "&BBOX=" : "&bbox=") +
          r
        );
      },
      setParams: function (t, e) {
        return d(this.wmsParams, t), e || this.redraw(), this;
      },
    });
    function Ho(t, e) {
      return new sn(t, e);
    }
    (Zt.WMS = sn), (on.wms = Ho);
    var ct = tt.extend({
        options: { padding: 0.1 },
        initialize: function (t) {
          z(this, t), P(this), (this._layers = this._layers || {});
        },
        onAdd: function () {
          this._container ||
            (this._initContainer(),
            this._zoomAnimated && x(this._container, "leaflet-zoom-animated")),
            this.getPane().appendChild(this._container),
            this._update(),
            this.on("update", this._updatePaths, this);
        },
        onRemove: function () {
          this.off("update", this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function () {
          var t = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd,
          };
          return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
        },
        _onAnimZoom: function (t) {
          this._updateTransform(t.center, t.zoom);
        },
        _onZoom: function () {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function (t, e) {
          var i = this._map.getZoomScale(e, this._zoom),
            n = this._map.getSize().multiplyBy(0.5 + this.options.padding),
            o = this._map.project(this._center, e),
            s = n
              .multiplyBy(-i)
              .add(o)
              .subtract(this._map._getNewPixelOrigin(t, e));
          m.any3d ? wt(this._container, s, i) : N(this._container, s);
        },
        _reset: function () {
          this._update(), this._updateTransform(this._center, this._zoom);
          for (var t in this._layers) this._layers[t]._reset();
        },
        _onZoomEnd: function () {
          for (var t in this._layers) this._layers[t]._project();
        },
        _updatePaths: function () {
          for (var t in this._layers) this._layers[t]._update();
        },
        _update: function () {
          var t = this.options.padding,
            e = this._map.getSize(),
            i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
          (this._bounds = new Z(i, i.add(e.multiplyBy(1 + t * 2)).round())),
            (this._center = this._map.getCenter()),
            (this._zoom = this._map.getZoom());
        },
      }),
      rn = ct.extend({
        options: { tolerance: 0 },
        getEvents: function () {
          var t = ct.prototype.getEvents.call(this);
          return (t.viewprereset = this._onViewPreReset), t;
        },
        _onViewPreReset: function () {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function () {
          ct.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function () {
          var t = (this._container = document.createElement("canvas"));
          w(t, "mousemove", this._onMouseMove, this),
            w(
              t,
              "click dblclick mousedown mouseup contextmenu",
              this._onClick,
              this
            ),
            w(t, "mouseout", this._handleMouseOut, this),
            (t._leaflet_disable_events = !0),
            (this._ctx = t.getContext("2d"));
        },
        _destroyContainer: function () {
          K(this._redrawRequest),
            delete this._ctx,
            I(this._container),
            k(this._container),
            delete this._container;
        },
        _updatePaths: function () {
          if (!this._postponeUpdatePaths) {
            var t;
            this._redrawBounds = null;
            for (var e in this._layers) (t = this._layers[e]), t._update();
            this._redraw();
          }
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            ct.prototype._update.call(this);
            var t = this._bounds,
              e = this._container,
              i = t.getSize(),
              n = m.retina ? 2 : 1;
            N(e, t.min),
              (e.width = n * i.x),
              (e.height = n * i.y),
              (e.style.width = i.x + "px"),
              (e.style.height = i.y + "px"),
              m.retina && this._ctx.scale(2, 2),
              this._ctx.translate(-t.min.x, -t.min.y),
              this.fire("update");
          }
        },
        _reset: function () {
          ct.prototype._reset.call(this),
            this._postponeUpdatePaths &&
              ((this._postponeUpdatePaths = !1), this._updatePaths());
        },
        _initPath: function (t) {
          this._updateDashArray(t), (this._layers[P(t)] = t);
          var e = (t._order = { layer: t, prev: this._drawLast, next: null });
          this._drawLast && (this._drawLast.next = e),
            (this._drawLast = e),
            (this._drawFirst = this._drawFirst || this._drawLast);
        },
        _addPath: function (t) {
          this._requestRedraw(t);
        },
        _removePath: function (t) {
          var e = t._order,
            i = e.next,
            n = e.prev;
          i ? (i.prev = n) : (this._drawLast = n),
            n ? (n.next = i) : (this._drawFirst = i),
            delete t._order,
            delete this._layers[P(t)],
            this._requestRedraw(t);
        },
        _updatePath: function (t) {
          this._extendRedrawBounds(t),
            t._project(),
            t._update(),
            this._requestRedraw(t);
        },
        _updateStyle: function (t) {
          this._updateDashArray(t), this._requestRedraw(t);
        },
        _updateDashArray: function (t) {
          if (typeof t.options.dashArray == "string") {
            var e = t.options.dashArray.split(/[, ]+/),
              i = [],
              n,
              o;
            for (o = 0; o < e.length; o++) {
              if (((n = Number(e[o])), isNaN(n))) return;
              i.push(n);
            }
            t.options._dashArray = i;
          } else t.options._dashArray = t.options.dashArray;
        },
        _requestRedraw: function (t) {
          this._map &&
            (this._extendRedrawBounds(t),
            (this._redrawRequest =
              this._redrawRequest || U(this._redraw, this)));
        },
        _extendRedrawBounds: function (t) {
          if (t._pxBounds) {
            var e = (t.options.weight || 0) + 1;
            (this._redrawBounds = this._redrawBounds || new Z()),
              this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
              this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
          }
        },
        _redraw: function () {
          (this._redrawRequest = null),
            this._redrawBounds &&
              (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
            this._clear(),
            this._draw(),
            (this._redrawBounds = null);
        },
        _clear: function () {
          var t = this._redrawBounds;
          if (t) {
            var e = t.getSize();
            this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
          } else
            this._ctx.save(),
              this._ctx.setTransform(1, 0, 0, 1, 0, 0),
              this._ctx.clearRect(
                0,
                0,
                this._container.width,
                this._container.height
              ),
              this._ctx.restore();
        },
        _draw: function () {
          var t,
            e = this._redrawBounds;
          if ((this._ctx.save(), e)) {
            var i = e.getSize();
            this._ctx.beginPath(),
              this._ctx.rect(e.min.x, e.min.y, i.x, i.y),
              this._ctx.clip();
          }
          this._drawing = !0;
          for (var n = this._drawFirst; n; n = n.next)
            (t = n.layer),
              (!e || (t._pxBounds && t._pxBounds.intersects(e))) &&
                t._updatePath();
          (this._drawing = !1), this._ctx.restore();
        },
        _updatePoly: function (t, e) {
          if (this._drawing) {
            var i,
              n,
              o,
              s,
              r = t._parts,
              a = r.length,
              u = this._ctx;
            if (a) {
              for (u.beginPath(), i = 0; i < a; i++) {
                for (n = 0, o = r[i].length; n < o; n++)
                  (s = r[i][n]), u[n ? "lineTo" : "moveTo"](s.x, s.y);
                e && u.closePath();
              }
              this._fillStroke(u, t);
            }
          }
        },
        _updateCircle: function (t) {
          if (!(!this._drawing || t._empty())) {
            var e = t._point,
              i = this._ctx,
              n = Math.max(Math.round(t._radius), 1),
              o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
            o !== 1 && (i.save(), i.scale(1, o)),
              i.beginPath(),
              i.arc(e.x, e.y / o, n, 0, Math.PI * 2, !1),
              o !== 1 && i.restore(),
              this._fillStroke(i, t);
          }
        },
        _fillStroke: function (t, e) {
          var i = e.options;
          i.fill &&
            ((t.globalAlpha = i.fillOpacity),
            (t.fillStyle = i.fillColor || i.color),
            t.fill(i.fillRule || "evenodd")),
            i.stroke &&
              i.weight !== 0 &&
              (t.setLineDash &&
                t.setLineDash((e.options && e.options._dashArray) || []),
              (t.globalAlpha = i.opacity),
              (t.lineWidth = i.weight),
              (t.strokeStyle = i.color),
              (t.lineCap = i.lineCap),
              (t.lineJoin = i.lineJoin),
              t.stroke());
        },
        _onClick: function (t) {
          for (
            var e = this._map.mouseEventToLayerPoint(t),
              i,
              n,
              o = this._drawFirst;
            o;
            o = o.next
          )
            (i = o.layer),
              i.options.interactive &&
                i._containsPoint(e) &&
                (!(t.type === "click" || t.type === "preclick") ||
                  !this._map._draggableMoved(i)) &&
                (n = i);
          this._fireEvent(n ? [n] : !1, t);
        },
        _onMouseMove: function (t) {
          if (
            !(
              !this._map ||
              this._map.dragging.moving() ||
              this._map._animatingZoom
            )
          ) {
            var e = this._map.mouseEventToLayerPoint(t);
            this._handleMouseHover(t, e);
          }
        },
        _handleMouseOut: function (t) {
          var e = this._hoveredLayer;
          e &&
            (R(this._container, "leaflet-interactive"),
            this._fireEvent([e], t, "mouseout"),
            (this._hoveredLayer = null),
            (this._mouseHoverThrottled = !1));
        },
        _handleMouseHover: function (t, e) {
          if (!this._mouseHoverThrottled) {
            for (var i, n, o = this._drawFirst; o; o = o.next)
              (i = o.layer),
                i.options.interactive && i._containsPoint(e) && (n = i);
            n !== this._hoveredLayer &&
              (this._handleMouseOut(t),
              n &&
                (x(this._container, "leaflet-interactive"),
                this._fireEvent([n], t, "mouseover"),
                (this._hoveredLayer = n))),
              this._fireEvent(
                this._hoveredLayer ? [this._hoveredLayer] : !1,
                t
              ),
              (this._mouseHoverThrottled = !0),
              setTimeout(
                M(function () {
                  this._mouseHoverThrottled = !1;
                }, this),
                32
              );
          }
        },
        _fireEvent: function (t, e, i) {
          this._map._fireDOMEvent(e, i || e.type, t);
        },
        _bringToFront: function (t) {
          var e = t._order;
          if (e) {
            var i = e.next,
              n = e.prev;
            if (i) i.prev = n;
            else return;
            n ? (n.next = i) : i && (this._drawFirst = i),
              (e.prev = this._drawLast),
              (this._drawLast.next = e),
              (e.next = null),
              (this._drawLast = e),
              this._requestRedraw(t);
          }
        },
        _bringToBack: function (t) {
          var e = t._order;
          if (e) {
            var i = e.next,
              n = e.prev;
            if (n) n.next = i;
            else return;
            i ? (i.prev = n) : n && (this._drawLast = n),
              (e.prev = null),
              (e.next = this._drawFirst),
              (this._drawFirst.prev = e),
              (this._drawFirst = e),
              this._requestRedraw(t);
          }
        },
      });
    function an(t) {
      return m.canvas ? new rn(t) : null;
    }
    var Kt = (function () {
        try {
          return (
            document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
            function (t) {
              return document.createElement("<lvml:" + t + ' class="lvml">');
            }
          );
        } catch {}
        return function (t) {
          return document.createElement(
            "<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
          );
        };
      })(),
      Fo = {
        _initContainer: function () {
          this._container = C("div", "leaflet-vml-container");
        },
        _update: function () {
          this._map._animatingZoom ||
            (ct.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function (t) {
          var e = (t._container = Kt("shape"));
          x(e, "leaflet-vml-shape " + (this.options.className || "")),
            (e.coordsize = "1 1"),
            (t._path = Kt("path")),
            e.appendChild(t._path),
            this._updateStyle(t),
            (this._layers[P(t)] = t);
        },
        _addPath: function (t) {
          var e = t._container;
          this._container.appendChild(e),
            t.options.interactive && t.addInteractiveTarget(e);
        },
        _removePath: function (t) {
          var e = t._container;
          I(e), t.removeInteractiveTarget(e), delete this._layers[P(t)];
        },
        _updateStyle: function (t) {
          var e = t._stroke,
            i = t._fill,
            n = t.options,
            o = t._container;
          (o.stroked = !!n.stroke),
            (o.filled = !!n.fill),
            n.stroke
              ? (e || (e = t._stroke = Kt("stroke")),
                o.appendChild(e),
                (e.weight = n.weight + "px"),
                (e.color = n.color),
                (e.opacity = n.opacity),
                n.dashArray
                  ? (e.dashStyle = $(n.dashArray)
                      ? n.dashArray.join(" ")
                      : n.dashArray.replace(/( *, *)/g, " "))
                  : (e.dashStyle = ""),
                (e.endcap = n.lineCap.replace("butt", "flat")),
                (e.joinstyle = n.lineJoin))
              : e && (o.removeChild(e), (t._stroke = null)),
            n.fill
              ? (i || (i = t._fill = Kt("fill")),
                o.appendChild(i),
                (i.color = n.fillColor || n.color),
                (i.opacity = n.fillOpacity))
              : i && (o.removeChild(i), (t._fill = null));
        },
        _updateCircle: function (t) {
          var e = t._point.round(),
            i = Math.round(t._radius),
            n = Math.round(t._radiusY || i);
          this._setPath(
            t,
            t._empty()
              ? "M0 0"
              : "AL " +
                  e.x +
                  "," +
                  e.y +
                  " " +
                  i +
                  "," +
                  n +
                  " 0," +
                  65535 * 360
          );
        },
        _setPath: function (t, e) {
          t._path.v = e;
        },
        _bringToFront: function (t) {
          Ct(t._container);
        },
        _bringToBack: function (t) {
          St(t._container);
        },
      },
      pe = m.vml ? Kt : li,
      Yt = ct.extend({
        _initContainer: function () {
          (this._container = pe("svg")),
            this._container.setAttribute("pointer-events", "none"),
            (this._rootGroup = pe("g")),
            this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function () {
          I(this._container),
            k(this._container),
            delete this._container,
            delete this._rootGroup,
            delete this._svgSize;
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            ct.prototype._update.call(this);
            var t = this._bounds,
              e = t.getSize(),
              i = this._container;
            (!this._svgSize || !this._svgSize.equals(e)) &&
              ((this._svgSize = e),
              i.setAttribute("width", e.x),
              i.setAttribute("height", e.y)),
              N(i, t.min),
              i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")),
              this.fire("update");
          }
        },
        _initPath: function (t) {
          var e = (t._path = pe("path"));
          t.options.className && x(e, t.options.className),
            t.options.interactive && x(e, "leaflet-interactive"),
            this._updateStyle(t),
            (this._layers[P(t)] = t);
        },
        _addPath: function (t) {
          this._rootGroup || this._initContainer(),
            this._rootGroup.appendChild(t._path),
            t.addInteractiveTarget(t._path);
        },
        _removePath: function (t) {
          I(t._path),
            t.removeInteractiveTarget(t._path),
            delete this._layers[P(t)];
        },
        _updatePath: function (t) {
          t._project(), t._update();
        },
        _updateStyle: function (t) {
          var e = t._path,
            i = t.options;
          e &&
            (i.stroke
              ? (e.setAttribute("stroke", i.color),
                e.setAttribute("stroke-opacity", i.opacity),
                e.setAttribute("stroke-width", i.weight),
                e.setAttribute("stroke-linecap", i.lineCap),
                e.setAttribute("stroke-linejoin", i.lineJoin),
                i.dashArray
                  ? e.setAttribute("stroke-dasharray", i.dashArray)
                  : e.removeAttribute("stroke-dasharray"),
                i.dashOffset
                  ? e.setAttribute("stroke-dashoffset", i.dashOffset)
                  : e.removeAttribute("stroke-dashoffset"))
              : e.setAttribute("stroke", "none"),
            i.fill
              ? (e.setAttribute("fill", i.fillColor || i.color),
                e.setAttribute("fill-opacity", i.fillOpacity),
                e.setAttribute("fill-rule", i.fillRule || "evenodd"))
              : e.setAttribute("fill", "none"));
        },
        _updatePoly: function (t, e) {
          this._setPath(t, ci(t._parts, e));
        },
        _updateCircle: function (t) {
          var e = t._point,
            i = Math.max(Math.round(t._radius), 1),
            n = Math.max(Math.round(t._radiusY), 1) || i,
            o = "a" + i + "," + n + " 0 1,0 ",
            s = t._empty()
              ? "M0 0"
              : "M" +
                (e.x - i) +
                "," +
                e.y +
                o +
                i * 2 +
                ",0 " +
                o +
                -i * 2 +
                ",0 ";
          this._setPath(t, s);
        },
        _setPath: function (t, e) {
          t._path.setAttribute("d", e);
        },
        _bringToFront: function (t) {
          Ct(t._path);
        },
        _bringToBack: function (t) {
          St(t._path);
        },
      });
    m.vml && Yt.include(Fo);
    function hn(t) {
      return m.svg || m.vml ? new Yt(t) : null;
    }
    b.include({
      getRenderer: function (t) {
        var e =
          t.options.renderer ||
          this._getPaneRenderer(t.options.pane) ||
          this.options.renderer ||
          this._renderer;
        return (
          e || (e = this._renderer = this._createRenderer()),
          this.hasLayer(e) || this.addLayer(e),
          e
        );
      },
      _getPaneRenderer: function (t) {
        if (t === "overlayPane" || t === void 0) return !1;
        var e = this._paneRenderers[t];
        return (
          e === void 0 &&
            ((e = this._createRenderer({ pane: t })),
            (this._paneRenderers[t] = e)),
          e
        );
      },
      _createRenderer: function (t) {
        return (this.options.preferCanvas && an(t)) || hn(t);
      },
    });
    var un = kt.extend({
      initialize: function (t, e) {
        kt.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
      },
      setBounds: function (t) {
        return this.setLatLngs(this._boundsToLatLngs(t));
      },
      _boundsToLatLngs: function (t) {
        return (
          (t = H(t)),
          [
            t.getSouthWest(),
            t.getNorthWest(),
            t.getNorthEast(),
            t.getSouthEast(),
          ]
        );
      },
    });
    function Wo(t, e) {
      return new un(t, e);
    }
    (Yt.create = pe),
      (Yt.pointsToPath = ci),
      (lt.geometryToLayer = ue),
      (lt.coordsToLatLng = Je),
      (lt.coordsToLatLngs = le),
      (lt.latLngToCoords = $e),
      (lt.latLngsToCoords = ce),
      (lt.getFeature = Ot),
      (lt.asFeature = fe),
      b.mergeOptions({ boxZoom: !0 });
    var ln = nt.extend({
      initialize: function (t) {
        (this._map = t),
          (this._container = t._container),
          (this._pane = t._panes.overlayPane),
          (this._resetStateTimeout = 0),
          t.on("unload", this._destroy, this);
      },
      addHooks: function () {
        w(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function () {
        k(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function () {
        return this._moved;
      },
      _destroy: function () {
        I(this._pane), delete this._pane;
      },
      _resetState: function () {
        (this._resetStateTimeout = 0), (this._moved = !1);
      },
      _clearDeferredResetState: function () {
        this._resetStateTimeout !== 0 &&
          (clearTimeout(this._resetStateTimeout),
          (this._resetStateTimeout = 0));
      },
      _onMouseDown: function (t) {
        if (!t.shiftKey || (t.which !== 1 && t.button !== 1)) return !1;
        this._clearDeferredResetState(),
          this._resetState(),
          Ht(),
          Ae(),
          (this._startPoint = this._map.mouseEventToContainerPoint(t)),
          w(
            document,
            {
              contextmenu: Lt,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this
          );
      },
      _onMouseMove: function (t) {
        this._moved ||
          ((this._moved = !0),
          (this._box = C("div", "leaflet-zoom-box", this._container)),
          x(this._container, "leaflet-crosshair"),
          this._map.fire("boxzoomstart")),
          (this._point = this._map.mouseEventToContainerPoint(t));
        var e = new Z(this._point, this._startPoint),
          i = e.getSize();
        N(this._box, e.min),
          (this._box.style.width = i.x + "px"),
          (this._box.style.height = i.y + "px");
      },
      _finish: function () {
        this._moved && (I(this._box), R(this._container, "leaflet-crosshair")),
          Ft(),
          Be(),
          k(
            document,
            {
              contextmenu: Lt,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this
          );
      },
      _onMouseUp: function (t) {
        if (
          !(t.which !== 1 && t.button !== 1) &&
          (this._finish(), !!this._moved)
        ) {
          this._clearDeferredResetState(),
            (this._resetStateTimeout = setTimeout(
              M(this._resetState, this),
              0
            ));
          var e = new V(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          );
          this._map.fitBounds(e).fire("boxzoomend", { boxZoomBounds: e });
        }
      },
      _onKeyDown: function (t) {
        t.keyCode === 27 &&
          (this._finish(), this._clearDeferredResetState(), this._resetState());
      },
    });
    b.addInitHook("addHandler", "boxZoom", ln),
      b.mergeOptions({ doubleClickZoom: !0 });
    var cn = nt.extend({
      addHooks: function () {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function () {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function (t) {
        var e = this._map,
          i = e.getZoom(),
          n = e.options.zoomDelta,
          o = t.originalEvent.shiftKey ? i - n : i + n;
        e.options.doubleClickZoom === "center"
          ? e.setZoom(o)
          : e.setZoomAround(t.containerPoint, o);
      },
    });
    b.addInitHook("addHandler", "doubleClickZoom", cn),
      b.mergeOptions({
        dragging: !0,
        inertia: !0,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: 0.2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0,
      });
    var fn = nt.extend({
      addHooks: function () {
        if (!this._draggable) {
          var t = this._map;
          (this._draggable = new mt(t._mapPane, t._container)),
            this._draggable.on(
              {
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            ),
            this._draggable.on("predrag", this._onPreDragLimit, this),
            t.options.worldCopyJump &&
              (this._draggable.on("predrag", this._onPreDragWrap, this),
              t.on("zoomend", this._onZoomEnd, this),
              t.whenReady(this._onZoomEnd, this));
        }
        x(this._map._container, "leaflet-grab leaflet-touch-drag"),
          this._draggable.enable(),
          (this._positions = []),
          (this._times = []);
      },
      removeHooks: function () {
        R(this._map._container, "leaflet-grab"),
          R(this._map._container, "leaflet-touch-drag"),
          this._draggable.disable();
      },
      moved: function () {
        return this._draggable && this._draggable._moved;
      },
      moving: function () {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function () {
        var t = this._map;
        if (
          (t._stop(),
          this._map.options.maxBounds && this._map.options.maxBoundsViscosity)
        ) {
          var e = H(this._map.options.maxBounds);
          (this._offsetLimit = G(
            this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
            this._map
              .latLngToContainerPoint(e.getSouthEast())
              .multiplyBy(-1)
              .add(this._map.getSize())
          )),
            (this._viscosity = Math.min(
              1,
              Math.max(0, this._map.options.maxBoundsViscosity)
            ));
        } else this._offsetLimit = null;
        t.fire("movestart").fire("dragstart"),
          t.options.inertia && ((this._positions = []), (this._times = []));
      },
      _onDrag: function (t) {
        if (this._map.options.inertia) {
          var e = (this._lastTime = +new Date()),
            i = (this._lastPos =
              this._draggable._absPos || this._draggable._newPos);
          this._positions.push(i), this._times.push(e), this._prunePositions(e);
        }
        this._map.fire("move", t).fire("drag", t);
      },
      _prunePositions: function (t) {
        for (; this._positions.length > 1 && t - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function () {
        var t = this._map.getSize().divideBy(2),
          e = this._map.latLngToLayerPoint([0, 0]);
        (this._initialWorldOffset = e.subtract(t).x),
          (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
      },
      _viscousLimit: function (t, e) {
        return t - (t - e) * this._viscosity;
      },
      _onPreDragLimit: function () {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var t = this._draggable._newPos.subtract(this._draggable._startPos),
            e = this._offsetLimit;
          t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
            t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
            t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
            t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
            (this._draggable._newPos = this._draggable._startPos.add(t));
        }
      },
      _onPreDragWrap: function () {
        var t = this._worldWidth,
          e = Math.round(t / 2),
          i = this._initialWorldOffset,
          n = this._draggable._newPos.x,
          o = ((n - e + i) % t) + e - i,
          s = ((n + e + i) % t) - e - i,
          r = Math.abs(o + i) < Math.abs(s + i) ? o : s;
        (this._draggable._absPos = this._draggable._newPos.clone()),
          (this._draggable._newPos.x = r);
      },
      _onDragEnd: function (t) {
        var e = this._map,
          i = e.options,
          n = !i.inertia || t.noInertia || this._times.length < 2;
        if ((e.fire("dragend", t), n)) e.fire("moveend");
        else {
          this._prunePositions(+new Date());
          var o = this._lastPos.subtract(this._positions[0]),
            s = (this._lastTime - this._times[0]) / 1e3,
            r = i.easeLinearity,
            a = o.multiplyBy(r / s),
            u = a.distanceTo([0, 0]),
            l = Math.min(i.inertiaMaxSpeed, u),
            c = a.multiplyBy(l / u),
            v = l / (i.inertiaDeceleration * r),
            T = c.multiplyBy(-v / 2).round();
          !T.x && !T.y
            ? e.fire("moveend")
            : ((T = e._limitOffset(T, e.options.maxBounds)),
              U(function () {
                e.panBy(T, {
                  duration: v,
                  easeLinearity: r,
                  noMoveStart: !0,
                  animate: !0,
                });
              }));
        }
      },
    });
    b.addInitHook("addHandler", "dragging", fn),
      b.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
    var dn = nt.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173],
      },
      initialize: function (t) {
        (this._map = t),
          this._setPanDelta(t.options.keyboardPanDelta),
          this._setZoomDelta(t.options.zoomDelta);
      },
      addHooks: function () {
        var t = this._map._container;
        t.tabIndex <= 0 && (t.tabIndex = "0"),
          w(
            t,
            {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown,
            },
            this
          ),
          this._map.on(
            { focus: this._addHooks, blur: this._removeHooks },
            this
          );
      },
      removeHooks: function () {
        this._removeHooks(),
          k(
            this._map._container,
            {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown,
            },
            this
          ),
          this._map.off(
            { focus: this._addHooks, blur: this._removeHooks },
            this
          );
      },
      _onMouseDown: function () {
        if (!this._focused) {
          var t = document.body,
            e = document.documentElement,
            i = t.scrollTop || e.scrollTop,
            n = t.scrollLeft || e.scrollLeft;
          this._map._container.focus(), window.scrollTo(n, i);
        }
      },
      _onFocus: function () {
        (this._focused = !0), this._map.fire("focus");
      },
      _onBlur: function () {
        (this._focused = !1), this._map.fire("blur");
      },
      _setPanDelta: function (t) {
        var e = (this._panKeys = {}),
          i = this.keyCodes,
          n,
          o;
        for (n = 0, o = i.left.length; n < o; n++) e[i.left[n]] = [-1 * t, 0];
        for (n = 0, o = i.right.length; n < o; n++) e[i.right[n]] = [t, 0];
        for (n = 0, o = i.down.length; n < o; n++) e[i.down[n]] = [0, t];
        for (n = 0, o = i.up.length; n < o; n++) e[i.up[n]] = [0, -1 * t];
      },
      _setZoomDelta: function (t) {
        var e = (this._zoomKeys = {}),
          i = this.keyCodes,
          n,
          o;
        for (n = 0, o = i.zoomIn.length; n < o; n++) e[i.zoomIn[n]] = t;
        for (n = 0, o = i.zoomOut.length; n < o; n++) e[i.zoomOut[n]] = -t;
      },
      _addHooks: function () {
        w(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function () {
        k(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function (t) {
        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
          var e = t.keyCode,
            i = this._map,
            n;
          if (e in this._panKeys) {
            if (!i._panAnim || !i._panAnim._inProgress)
              if (
                ((n = this._panKeys[e]),
                t.shiftKey && (n = g(n).multiplyBy(3)),
                i.options.maxBounds &&
                  (n = i._limitOffset(g(n), i.options.maxBounds)),
                i.options.worldCopyJump)
              ) {
                var o = i.wrapLatLng(
                  i.unproject(i.project(i.getCenter()).add(n))
                );
                i.panTo(o);
              } else i.panBy(n);
          } else if (e in this._zoomKeys)
            i.setZoom(i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
          else if (e === 27 && i._popup && i._popup.options.closeOnEscapeKey)
            i.closePopup();
          else return;
          Lt(t);
        }
      },
    });
    b.addInitHook("addHandler", "keyboard", dn),
      b.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60,
      });
    var _n = nt.extend({
      addHooks: function () {
        w(this._map._container, "wheel", this._onWheelScroll, this),
          (this._delta = 0);
      },
      removeHooks: function () {
        k(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function (t) {
        var e = Ri(t),
          i = this._map.options.wheelDebounceTime;
        (this._delta += e),
          (this._lastMousePos = this._map.mouseEventToContainerPoint(t)),
          this._startTime || (this._startTime = +new Date());
        var n = Math.max(i - (+new Date() - this._startTime), 0);
        clearTimeout(this._timer),
          (this._timer = setTimeout(M(this._performZoom, this), n)),
          Lt(t);
      },
      _performZoom: function () {
        var t = this._map,
          e = t.getZoom(),
          i = this._map.options.zoomSnap || 0;
        t._stop();
        var n = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
          o = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(n))))) / Math.LN2,
          s = i ? Math.ceil(o / i) * i : o,
          r = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
        (this._delta = 0),
          (this._startTime = null),
          r &&
            (t.options.scrollWheelZoom === "center"
              ? t.setZoom(e + r)
              : t.setZoomAround(this._lastMousePos, e + r));
      },
    });
    b.addInitHook("addHandler", "scrollWheelZoom", _n);
    var Uo = 600;
    b.mergeOptions({
      tapHold: m.touchNative && m.safari && m.mobile,
      tapTolerance: 15,
    });
    var mn = nt.extend({
      addHooks: function () {
        w(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function () {
        k(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function (t) {
        if ((clearTimeout(this._holdTimeout), t.touches.length === 1)) {
          var e = t.touches[0];
          (this._startPos = this._newPos = new y(e.clientX, e.clientY)),
            (this._holdTimeout = setTimeout(
              M(function () {
                this._cancel(),
                  this._isTapValid() &&
                    (w(document, "touchend", F),
                    w(
                      document,
                      "touchend touchcancel",
                      this._cancelClickPrevent
                    ),
                    this._simulateEvent("contextmenu", e));
              }, this),
              Uo
            )),
            w(document, "touchend touchcancel contextmenu", this._cancel, this),
            w(document, "touchmove", this._onMove, this);
        }
      },
      _cancelClickPrevent: function t() {
        k(document, "touchend", F), k(document, "touchend touchcancel", t);
      },
      _cancel: function () {
        clearTimeout(this._holdTimeout),
          k(document, "touchend touchcancel contextmenu", this._cancel, this),
          k(document, "touchmove", this._onMove, this);
      },
      _onMove: function (t) {
        var e = t.touches[0];
        this._newPos = new y(e.clientX, e.clientY);
      },
      _isTapValid: function () {
        return (
          this._newPos.distanceTo(this._startPos) <=
          this._map.options.tapTolerance
        );
      },
      _simulateEvent: function (t, e) {
        var i = new MouseEvent(t, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          screenX: e.screenX,
          screenY: e.screenY,
          clientX: e.clientX,
          clientY: e.clientY,
        });
        (i._simulated = !0), e.target.dispatchEvent(i);
      },
    });
    b.addInitHook("addHandler", "tapHold", mn),
      b.mergeOptions({ touchZoom: m.touch, bounceAtZoomLimits: !0 });
    var pn = nt.extend({
      addHooks: function () {
        x(this._map._container, "leaflet-touch-zoom"),
          w(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function () {
        R(this._map._container, "leaflet-touch-zoom"),
          k(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function (t) {
        var e = this._map;
        if (
          !(
            !t.touches ||
            t.touches.length !== 2 ||
            e._animatingZoom ||
            this._zooming
          )
        ) {
          var i = e.mouseEventToContainerPoint(t.touches[0]),
            n = e.mouseEventToContainerPoint(t.touches[1]);
          (this._centerPoint = e.getSize()._divideBy(2)),
            (this._startLatLng = e.containerPointToLatLng(this._centerPoint)),
            e.options.touchZoom !== "center" &&
              (this._pinchStartLatLng = e.containerPointToLatLng(
                i.add(n)._divideBy(2)
              )),
            (this._startDist = i.distanceTo(n)),
            (this._startZoom = e.getZoom()),
            (this._moved = !1),
            (this._zooming = !0),
            e._stop(),
            w(document, "touchmove", this._onTouchMove, this),
            w(document, "touchend touchcancel", this._onTouchEnd, this),
            F(t);
        }
      },
      _onTouchMove: function (t) {
        if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
          var e = this._map,
            i = e.mouseEventToContainerPoint(t.touches[0]),
            n = e.mouseEventToContainerPoint(t.touches[1]),
            o = i.distanceTo(n) / this._startDist;
          if (
            ((this._zoom = e.getScaleZoom(o, this._startZoom)),
            !e.options.bounceAtZoomLimits &&
              ((this._zoom < e.getMinZoom() && o < 1) ||
                (this._zoom > e.getMaxZoom() && o > 1)) &&
              (this._zoom = e._limitZoom(this._zoom)),
            e.options.touchZoom === "center")
          ) {
            if (((this._center = this._startLatLng), o === 1)) return;
          } else {
            var s = i._add(n)._divideBy(2)._subtract(this._centerPoint);
            if (o === 1 && s.x === 0 && s.y === 0) return;
            this._center = e.unproject(
              e.project(this._pinchStartLatLng, this._zoom).subtract(s),
              this._zoom
            );
          }
          this._moved || (e._moveStart(!0, !1), (this._moved = !0)),
            K(this._animRequest);
          var r = M(
            e._move,
            e,
            this._center,
            this._zoom,
            { pinch: !0, round: !1 },
            void 0
          );
          (this._animRequest = U(r, this, !0)), F(t);
        }
      },
      _onTouchEnd: function () {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        (this._zooming = !1),
          K(this._animRequest),
          k(document, "touchmove", this._onTouchMove, this),
          k(document, "touchend touchcancel", this._onTouchEnd, this),
          this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap
              )
            : this._map._resetView(
                this._center,
                this._map._limitZoom(this._zoom)
              );
      },
    });
    b.addInitHook("addHandler", "touchZoom", pn),
      (b.BoxZoom = ln),
      (b.DoubleClickZoom = cn),
      (b.Drag = fn),
      (b.Keyboard = dn),
      (b.ScrollWheelZoom = _n),
      (b.TapHold = mn),
      (b.TouchZoom = pn),
      (h.Bounds = Z),
      (h.Browser = m),
      (h.CRS = at),
      (h.Canvas = rn),
      (h.Circle = Xe),
      (h.CircleMarker = he),
      (h.Class = rt),
      (h.Control = Q),
      (h.DivIcon = nn),
      (h.DivOverlay = ot),
      (h.DomEvent = ro),
      (h.DomUtil = oo),
      (h.Draggable = mt),
      (h.Evented = At),
      (h.FeatureGroup = ht),
      (h.GeoJSON = lt),
      (h.GridLayer = jt),
      (h.Handler = nt),
      (h.Icon = Et),
      (h.ImageOverlay = de),
      (h.LatLng = S),
      (h.LatLngBounds = V),
      (h.Layer = tt),
      (h.LayerGroup = zt),
      (h.LineUtil = yo),
      (h.Map = b),
      (h.Marker = ae),
      (h.Mixin = _o),
      (h.Path = pt),
      (h.Point = y),
      (h.PolyUtil = wo),
      (h.Polygon = kt),
      (h.Polyline = ut),
      (h.Popup = _e),
      (h.PosAnimation = Ni),
      (h.Projection = xo),
      (h.Rectangle = un),
      (h.Renderer = ct),
      (h.SVG = Yt),
      (h.SVGOverlay = en),
      (h.TileLayer = Zt),
      (h.Tooltip = me),
      (h.Transformation = Le),
      (h.Util = Mn),
      (h.VideoOverlay = tn),
      (h.bind = M),
      (h.bounds = G),
      (h.canvas = an),
      (h.circle = zo),
      (h.circleMarker = So),
      (h.control = Gt),
      (h.divIcon = No),
      (h.extend = d),
      (h.featureGroup = bo),
      (h.geoJSON = Qi),
      (h.geoJson = Oo),
      (h.gridLayer = Do),
      (h.icon = Mo),
      (h.imageOverlay = Zo),
      (h.latLng = E),
      (h.latLngBounds = H),
      (h.layerGroup = To),
      (h.map = ao),
      (h.marker = Co),
      (h.point = g),
      (h.polygon = ko),
      (h.polyline = Eo),
      (h.popup = Bo),
      (h.rectangle = Wo),
      (h.setOptions = z),
      (h.stamp = P),
      (h.svg = hn),
      (h.svgOverlay = Ao),
      (h.tileLayer = on),
      (h.tooltip = Ro),
      (h.transformation = Bt),
      (h.version = p),
      (h.videoOverlay = Io);
    var Go = window.L;
    (h.noConflict = function () {
      return (window.L = Go), this;
    }),
      (window.L = h);
  });
})(ls, It);
function Ln(_, f, h) {
  return Object.freeze({ instance: _, context: f, container: h });
}
function Tn(_, f) {
  return f == null
    ? function (p, d) {
        const B = A.useRef();
        return B.current || (B.current = _(p, d)), B;
      }
    : function (p, d) {
        const B = A.useRef();
        B.current || (B.current = _(p, d));
        const M = A.useRef(p),
          { instance: ft } = B.current;
        return (
          A.useEffect(
            function () {
              M.current !== p && (f(ft, p, M.current), (M.current = p));
            },
            [ft, p, d]
          ),
          B
        );
      };
}
function cs(_, f) {
  A.useEffect(
    function () {
      return (
        (f.layerContainer ?? f.map).addLayer(_.instance),
        function () {
          var B;
          (B = f.layerContainer) == null || B.removeLayer(_.instance),
            f.map.removeLayer(_.instance);
        }
      );
    },
    [f, _]
  );
}
function bn(_) {
  return function (h) {
    const p = rs(),
      d = _(Pn(h, p), p);
    return (
      is(p.map, h.attribution),
      us(d.current, h.eventHandlers),
      cs(d.current, p),
      d
    );
  };
}
function fs(_, f) {
  const h = Tn(_, f),
    p = bn(h);
  return as(p);
}
function ds(_, f) {
  const h = Tn(_, f),
    p = bn(h);
  return hs(p);
}
function _s(_, f, h) {
  const { opacity: p, zIndex: d } = f;
  p != null && p !== h.opacity && _.setOpacity(p),
    d != null && d !== h.zIndex && _.setZIndex(d);
}
function oi() {
  return (
    (oi =
      Object.assign ||
      function (_) {
        for (var f = 1; f < arguments.length; f++) {
          var h = arguments[f];
          for (var p in h)
            Object.prototype.hasOwnProperty.call(h, p) && (_[p] = h[p]);
        }
        return _;
      }),
    oi.apply(this, arguments)
  );
}
function ms(
  {
    bounds: _,
    boundsOptions: f,
    center: h,
    children: p,
    className: d,
    id: B,
    placeholder: M,
    style: ft,
    whenReady: P,
    zoom: dt,
    ...gt
  },
  O
) {
  const [j] = A.useState({ className: d, id: B, style: ft }),
    [W, st] = A.useState(null);
  A.useImperativeHandle(O, () => (W == null ? void 0 : W.map) ?? null, [W]);
  const z = A.useCallback((Jt) => {
    if (Jt !== null && W === null) {
      const yt = new It.Map(Jt, gt);
      h != null && dt != null
        ? yt.setView(h, dt)
        : _ != null && yt.fitBounds(_, f),
        P != null && yt.whenReady(P),
        st(os(yt));
    }
  }, []);
  A.useEffect(
    () => () => {
      W == null || W.map.remove();
    },
    [W]
  );
  const Xt = W ? ni.createElement(xn, { value: W }, p) : M ?? null;
  return ni.createElement("div", oi({}, j, { ref: z }), Xt);
}
const ps = A.forwardRef(ms),
  vs = fs(
    function ({ position: f, ...h }, p) {
      const d = new It.Marker(f, h);
      return Ln(d, ss(p, { overlayContainer: d }));
    },
    function (f, h, p) {
      h.position !== p.position && f.setLatLng(h.position),
        h.icon != null && h.icon !== p.icon && f.setIcon(h.icon),
        h.zIndexOffset != null &&
          h.zIndexOffset !== p.zIndexOffset &&
          f.setZIndexOffset(h.zIndexOffset),
        h.opacity != null && h.opacity !== p.opacity && f.setOpacity(h.opacity),
        f.dragging != null &&
          h.draggable !== p.draggable &&
          (h.draggable === !0 ? f.dragging.enable() : f.dragging.disable());
    }
  ),
  gs = ds(
    function ({ url: f, ...h }, p) {
      const d = new It.TileLayer(f, Pn(h, p));
      return Ln(d, p);
    },
    function (f, h, p) {
      _s(f, h, p);
      const { url: d } = h;
      d != null && d !== p.url && f.setUrl(d);
    }
  );
const Ls = ({ coords: _, display: f, setMapLocation: h }) => {
  const { position: p } = ts(),
    [d, B] = A.useState(() => _ ?? p),
    [M, ft] = A.useState(20);
  return ii("div", {
    className: "w-full h-full flex items-center justify-center",
    children: Qo(ps, {
      style: { width: "90%", height: "500px" },
      center: p,
      zoom: M,
      scrollWheelZoom: !0,
      children: [
        ii(gs, {
          attribution: `© \r
                <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`,
          url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        }),
        ii(vs, {
          position: d,
          draggable: !0,
          eventHandlers: {
            dragend: (dt) => {
              h && h(dt.target._latlng.lat, dt.target._latlng.lng);
            },
          },
        }),
      ],
    }),
  });
};
export { Ls as default };
