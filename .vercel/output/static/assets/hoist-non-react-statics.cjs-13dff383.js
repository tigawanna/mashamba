function x() {
  return (
    (x = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var d = arguments[n];
            for (var S in d)
              Object.prototype.hasOwnProperty.call(d, S) && (e[S] = d[S]);
          }
          return e;
        }),
    x.apply(this, arguments)
  );
}
var b = {},
  P = {
    get exports() {
      return b;
    },
    set exports(e) {
      b = e;
    },
  },
  r = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var t = typeof Symbol == "function" && Symbol.for,
  $ = t ? Symbol.for("react.element") : 60103,
  v = t ? Symbol.for("react.portal") : 60106,
  c = t ? Symbol.for("react.fragment") : 60107,
  f = t ? Symbol.for("react.strict_mode") : 60108,
  s = t ? Symbol.for("react.profiler") : 60114,
  u = t ? Symbol.for("react.provider") : 60109,
  i = t ? Symbol.for("react.context") : 60110,
  _ = t ? Symbol.for("react.async_mode") : 60111,
  p = t ? Symbol.for("react.concurrent_mode") : 60111,
  y = t ? Symbol.for("react.forward_ref") : 60112,
  l = t ? Symbol.for("react.suspense") : 60113,
  T = t ? Symbol.for("react.suspense_list") : 60120,
  a = t ? Symbol.for("react.memo") : 60115,
  m = t ? Symbol.for("react.lazy") : 60116,
  w = t ? Symbol.for("react.block") : 60121,
  h = t ? Symbol.for("react.fundamental") : 60117,
  A = t ? Symbol.for("react.responder") : 60118,
  E = t ? Symbol.for("react.scope") : 60119;
function o(e) {
  if (typeof e == "object" && e !== null) {
    var n = e.$$typeof;
    switch (n) {
      case $:
        switch (((e = e.type), e)) {
          case _:
          case p:
          case c:
          case s:
          case f:
          case l:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case i:
              case y:
              case m:
              case a:
              case u:
                return e;
              default:
                return n;
            }
        }
      case v:
        return n;
    }
  }
}
function g(e) {
  return o(e) === p;
}
r.AsyncMode = _;
r.ConcurrentMode = p;
r.ContextConsumer = i;
r.ContextProvider = u;
r.Element = $;
r.ForwardRef = y;
r.Fragment = c;
r.Lazy = m;
r.Memo = a;
r.Portal = v;
r.Profiler = s;
r.StrictMode = f;
r.Suspense = l;
r.isAsyncMode = function (e) {
  return g(e) || o(e) === _;
};
r.isConcurrentMode = g;
r.isContextConsumer = function (e) {
  return o(e) === i;
};
r.isContextProvider = function (e) {
  return o(e) === u;
};
r.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === $;
};
r.isForwardRef = function (e) {
  return o(e) === y;
};
r.isFragment = function (e) {
  return o(e) === c;
};
r.isLazy = function (e) {
  return o(e) === m;
};
r.isMemo = function (e) {
  return o(e) === a;
};
r.isPortal = function (e) {
  return o(e) === v;
};
r.isProfiler = function (e) {
  return o(e) === s;
};
r.isStrictMode = function (e) {
  return o(e) === f;
};
r.isSuspense = function (e) {
  return o(e) === l;
};
r.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === c ||
    e === p ||
    e === s ||
    e === f ||
    e === l ||
    e === T ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === m ||
        e.$$typeof === a ||
        e.$$typeof === u ||
        e.$$typeof === i ||
        e.$$typeof === y ||
        e.$$typeof === h ||
        e.$$typeof === A ||
        e.$$typeof === E ||
        e.$$typeof === w))
  );
};
r.typeOf = o;
(function (e) {
  e.exports = r;
})(P);
var C = b,
  F = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  I = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  M = {};
M[C.ForwardRef] = F;
M[C.Memo] = I;
export { x as _ };
