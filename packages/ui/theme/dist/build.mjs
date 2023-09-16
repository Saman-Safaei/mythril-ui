var T = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function je(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ce() {
  this.__data__ = [], this.size = 0;
}
var Ae = Ce;
function Se(e, r) {
  return e === r || e !== e && r !== r;
}
var S = Se, me = S;
function Pe(e, r) {
  for (var t = e.length; t--; )
    if (me(e[t][0], r))
      return t;
  return -1;
}
var m = Pe, we = m, xe = Array.prototype, Ie = xe.splice;
function Me(e) {
  var r = this.__data__, t = we(r, e);
  if (t < 0)
    return !1;
  var a = r.length - 1;
  return t == a ? r.pop() : Ie.call(r, t, 1), --this.size, !0;
}
var De = Me, Ge = m;
function Le(e) {
  var r = this.__data__, t = Ge(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var Fe = Le, Ee = m;
function He(e) {
  return Ee(this.__data__, e) > -1;
}
var Ue = He, Be = m;
function Ne(e, r) {
  var t = this.__data__, a = Be(t, e);
  return a < 0 ? (++this.size, t.push([e, r])) : t[a][1] = r, this;
}
var ze = Ne, Re = Ae, Ve = De, Ke = Fe, qe = Ue, ke = ze;
function _(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
_.prototype.clear = Re;
_.prototype.delete = Ve;
_.prototype.get = Ke;
_.prototype.has = qe;
_.prototype.set = ke;
var P = _, Je = P;
function We() {
  this.__data__ = new Je(), this.size = 0;
}
var Xe = We;
function Ye(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
var Ze = Ye;
function Qe(e) {
  return this.__data__.get(e);
}
var er = Qe;
function rr(e) {
  return this.__data__.has(e);
}
var tr = rr, ar = typeof T == "object" && T && T.Object === Object && T, ae = ar, nr = ae, ir = typeof self == "object" && self && self.Object === Object && self, or = nr || ir || Function("return this")(), g = or, sr = g, cr = sr.Symbol, ne = cr, U = ne, ie = Object.prototype, ur = ie.hasOwnProperty, fr = ie.toString, y = U ? U.toStringTag : void 0;
function vr(e) {
  var r = ur.call(e, y), t = e[y];
  try {
    e[y] = void 0;
    var a = !0;
  } catch {
  }
  var n = fr.call(e);
  return a && (r ? e[y] = t : delete e[y]), n;
}
var lr = vr, pr = Object.prototype, hr = pr.toString;
function _r(e) {
  return hr.call(e);
}
var gr = _r, B = ne, dr = lr, br = gr, $r = "[object Null]", yr = "[object Undefined]", N = B ? B.toStringTag : void 0;
function Or(e) {
  return e == null ? e === void 0 ? yr : $r : N && N in Object(e) ? dr(e) : br(e);
}
var w = Or;
function Tr(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var p = Tr, jr = w, Cr = p, Ar = "[object AsyncFunction]", Sr = "[object Function]", mr = "[object GeneratorFunction]", Pr = "[object Proxy]";
function wr(e) {
  if (!Cr(e))
    return !1;
  var r = jr(e);
  return r == Sr || r == mr || r == Ar || r == Pr;
}
var G = wr, xr = g, Ir = xr["__core-js_shared__"], Mr = Ir, D = Mr, z = function() {
  var e = /[^.]+$/.exec(D && D.keys && D.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Dr(e) {
  return !!z && z in e;
}
var Gr = Dr, Lr = Function.prototype, Fr = Lr.toString;
function Er(e) {
  if (e != null) {
    try {
      return Fr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Hr = Er, Ur = G, Br = Gr, Nr = p, zr = Hr, Rr = /[\\^$.*+?()[\]{}|]/g, Vr = /^\[object .+?Constructor\]$/, Kr = Function.prototype, qr = Object.prototype, kr = Kr.toString, Jr = qr.hasOwnProperty, Wr = RegExp(
  "^" + kr.call(Jr).replace(Rr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Xr(e) {
  if (!Nr(e) || Br(e))
    return !1;
  var r = Ur(e) ? Wr : Vr;
  return r.test(zr(e));
}
var Yr = Xr;
function Zr(e, r) {
  return e == null ? void 0 : e[r];
}
var Qr = Zr, et = Yr, rt = Qr;
function tt(e, r) {
  var t = rt(e, r);
  return et(t) ? t : void 0;
}
var L = tt, at = L, nt = g, it = at(nt, "Map"), oe = it, ot = L, st = ot(Object, "create"), x = st, R = x;
function ct() {
  this.__data__ = R ? R(null) : {}, this.size = 0;
}
var ut = ct;
function ft(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var vt = ft, lt = x, pt = "__lodash_hash_undefined__", ht = Object.prototype, _t = ht.hasOwnProperty;
function gt(e) {
  var r = this.__data__;
  if (lt) {
    var t = r[e];
    return t === pt ? void 0 : t;
  }
  return _t.call(r, e) ? r[e] : void 0;
}
var dt = gt, bt = x, $t = Object.prototype, yt = $t.hasOwnProperty;
function Ot(e) {
  var r = this.__data__;
  return bt ? r[e] !== void 0 : yt.call(r, e);
}
var Tt = Ot, jt = x, Ct = "__lodash_hash_undefined__";
function At(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = jt && r === void 0 ? Ct : r, this;
}
var St = At, mt = ut, Pt = vt, wt = dt, xt = Tt, It = St;
function d(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
d.prototype.clear = mt;
d.prototype.delete = Pt;
d.prototype.get = wt;
d.prototype.has = xt;
d.prototype.set = It;
var Mt = d, V = Mt, Dt = P, Gt = oe;
function Lt() {
  this.size = 0, this.__data__ = {
    hash: new V(),
    map: new (Gt || Dt)(),
    string: new V()
  };
}
var Ft = Lt;
function Et(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var Ht = Et, Ut = Ht;
function Bt(e, r) {
  var t = e.__data__;
  return Ut(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
var I = Bt, Nt = I;
function zt(e) {
  var r = Nt(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var Rt = zt, Vt = I;
function Kt(e) {
  return Vt(this, e).get(e);
}
var qt = Kt, kt = I;
function Jt(e) {
  return kt(this, e).has(e);
}
var Wt = Jt, Xt = I;
function Yt(e, r) {
  var t = Xt(this, e), a = t.size;
  return t.set(e, r), this.size += t.size == a ? 0 : 1, this;
}
var Zt = Yt, Qt = Ft, ea = Rt, ra = qt, ta = Wt, aa = Zt;
function b(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
b.prototype.clear = Qt;
b.prototype.delete = ea;
b.prototype.get = ra;
b.prototype.has = ta;
b.prototype.set = aa;
var na = b, ia = P, oa = oe, sa = na, ca = 200;
function ua(e, r) {
  var t = this.__data__;
  if (t instanceof ia) {
    var a = t.__data__;
    if (!oa || a.length < ca - 1)
      return a.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new sa(a);
  }
  return t.set(e, r), this.size = t.size, this;
}
var fa = ua, va = P, la = Xe, pa = Ze, ha = er, _a = tr, ga = fa;
function $(e) {
  var r = this.__data__ = new va(e);
  this.size = r.size;
}
$.prototype.clear = la;
$.prototype.delete = pa;
$.prototype.get = ha;
$.prototype.has = _a;
$.prototype.set = ga;
var da = $, ba = L, $a = function() {
  try {
    var e = ba(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), se = $a, K = se;
function ya(e, r, t) {
  r == "__proto__" && K ? K(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
var F = ya, Oa = F, Ta = S;
function ja(e, r, t) {
  (t !== void 0 && !Ta(e[r], t) || t === void 0 && !(r in e)) && Oa(e, r, t);
}
var ce = ja;
function Ca(e) {
  return function(r, t, a) {
    for (var n = -1, o = Object(r), s = a(r), i = s.length; i--; ) {
      var c = s[e ? i : ++n];
      if (t(o[c], c, o) === !1)
        break;
    }
    return r;
  };
}
var Aa = Ca, Sa = Aa, ma = Sa(), Pa = ma, j = { exports: {} };
j.exports;
(function(e, r) {
  var t = g, a = r && !r.nodeType && r, n = a && !0 && e && !e.nodeType && e, o = n && n.exports === a, s = o ? t.Buffer : void 0, i = s ? s.allocUnsafe : void 0;
  function c(f, v) {
    if (v)
      return f.slice();
    var l = f.length, h = i ? i(l) : new f.constructor(l);
    return f.copy(h), h;
  }
  e.exports = c;
})(j, j.exports);
var wa = j.exports, xa = g, Ia = xa.Uint8Array, Ma = Ia, q = Ma;
function Da(e) {
  var r = new e.constructor(e.byteLength);
  return new q(r).set(new q(e)), r;
}
var Ga = Da, La = Ga;
function Fa(e, r) {
  var t = r ? La(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var Ea = Fa;
function Ha(e, r) {
  var t = -1, a = e.length;
  for (r || (r = Array(a)); ++t < a; )
    r[t] = e[t];
  return r;
}
var Ua = Ha, Ba = p, k = Object.create, Na = function() {
  function e() {
  }
  return function(r) {
    if (!Ba(r))
      return {};
    if (k)
      return k(r);
    e.prototype = r;
    var t = new e();
    return e.prototype = void 0, t;
  };
}(), za = Na;
function Ra(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var Va = Ra, Ka = Va, qa = Ka(Object.getPrototypeOf, Object), ue = qa, ka = Object.prototype;
function Ja(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || ka;
  return e === t;
}
var fe = Ja, Wa = za, Xa = ue, Ya = fe;
function Za(e) {
  return typeof e.constructor == "function" && !Ya(e) ? Wa(Xa(e)) : {};
}
var Qa = Za;
function en(e) {
  return e != null && typeof e == "object";
}
var O = en, rn = w, tn = O, an = "[object Arguments]";
function nn(e) {
  return tn(e) && rn(e) == an;
}
var on = nn, J = on, sn = O, ve = Object.prototype, cn = ve.hasOwnProperty, un = ve.propertyIsEnumerable, fn = J(function() {
  return arguments;
}()) ? J : function(e) {
  return sn(e) && cn.call(e, "callee") && !un.call(e, "callee");
}, le = fn, vn = Array.isArray, pe = vn, ln = 9007199254740991;
function pn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ln;
}
var he = pn, hn = G, _n = he;
function gn(e) {
  return e != null && _n(e.length) && !hn(e);
}
var E = gn, dn = E, bn = O;
function $n(e) {
  return bn(e) && dn(e);
}
var yn = $n, C = { exports: {} };
function On() {
  return !1;
}
var Tn = On;
C.exports;
(function(e, r) {
  var t = g, a = Tn, n = r && !r.nodeType && r, o = n && !0 && e && !e.nodeType && e, s = o && o.exports === n, i = s ? t.Buffer : void 0, c = i ? i.isBuffer : void 0, f = c || a;
  e.exports = f;
})(C, C.exports);
var _e = C.exports, jn = w, Cn = ue, An = O, Sn = "[object Object]", mn = Function.prototype, Pn = Object.prototype, ge = mn.toString, wn = Pn.hasOwnProperty, xn = ge.call(Object);
function In(e) {
  if (!An(e) || jn(e) != Sn)
    return !1;
  var r = Cn(e);
  if (r === null)
    return !0;
  var t = wn.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && ge.call(t) == xn;
}
var Mn = In, Dn = w, Gn = he, Ln = O, Fn = "[object Arguments]", En = "[object Array]", Hn = "[object Boolean]", Un = "[object Date]", Bn = "[object Error]", Nn = "[object Function]", zn = "[object Map]", Rn = "[object Number]", Vn = "[object Object]", Kn = "[object RegExp]", qn = "[object Set]", kn = "[object String]", Jn = "[object WeakMap]", Wn = "[object ArrayBuffer]", Xn = "[object DataView]", Yn = "[object Float32Array]", Zn = "[object Float64Array]", Qn = "[object Int8Array]", ei = "[object Int16Array]", ri = "[object Int32Array]", ti = "[object Uint8Array]", ai = "[object Uint8ClampedArray]", ni = "[object Uint16Array]", ii = "[object Uint32Array]", u = {};
u[Yn] = u[Zn] = u[Qn] = u[ei] = u[ri] = u[ti] = u[ai] = u[ni] = u[ii] = !0;
u[Fn] = u[En] = u[Wn] = u[Hn] = u[Xn] = u[Un] = u[Bn] = u[Nn] = u[zn] = u[Rn] = u[Vn] = u[Kn] = u[qn] = u[kn] = u[Jn] = !1;
function oi(e) {
  return Ln(e) && Gn(e.length) && !!u[Dn(e)];
}
var si = oi;
function ci(e) {
  return function(r) {
    return e(r);
  };
}
var ui = ci, A = { exports: {} };
A.exports;
(function(e, r) {
  var t = ae, a = r && !r.nodeType && r, n = a && !0 && e && !e.nodeType && e, o = n && n.exports === a, s = o && t.process, i = function() {
    try {
      var c = n && n.require && n.require("util").types;
      return c || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(A, A.exports);
var fi = A.exports, vi = si, li = ui, W = fi, X = W && W.isTypedArray, pi = X ? li(X) : vi, de = pi;
function hi(e, r) {
  if (!(r === "constructor" && typeof e[r] == "function") && r != "__proto__")
    return e[r];
}
var be = hi, _i = F, gi = S, di = Object.prototype, bi = di.hasOwnProperty;
function $i(e, r, t) {
  var a = e[r];
  (!(bi.call(e, r) && gi(a, t)) || t === void 0 && !(r in e)) && _i(e, r, t);
}
var yi = $i, Oi = yi, Ti = F;
function ji(e, r, t, a) {
  var n = !t;
  t || (t = {});
  for (var o = -1, s = r.length; ++o < s; ) {
    var i = r[o], c = a ? a(t[i], e[i], i, t, e) : void 0;
    c === void 0 && (c = e[i]), n ? Ti(t, i, c) : Oi(t, i, c);
  }
  return t;
}
var Ci = ji;
function Ai(e, r) {
  for (var t = -1, a = Array(e); ++t < e; )
    a[t] = r(t);
  return a;
}
var Si = Ai, mi = 9007199254740991, Pi = /^(?:0|[1-9]\d*)$/;
function wi(e, r) {
  var t = typeof e;
  return r = r ?? mi, !!r && (t == "number" || t != "symbol" && Pi.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var $e = wi, xi = Si, Ii = le, Mi = pe, Di = _e, Gi = $e, Li = de, Fi = Object.prototype, Ei = Fi.hasOwnProperty;
function Hi(e, r) {
  var t = Mi(e), a = !t && Ii(e), n = !t && !a && Di(e), o = !t && !a && !n && Li(e), s = t || a || n || o, i = s ? xi(e.length, String) : [], c = i.length;
  for (var f in e)
    (r || Ei.call(e, f)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    n && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    Gi(f, c))) && i.push(f);
  return i;
}
var Ui = Hi;
function Bi(e) {
  var r = [];
  if (e != null)
    for (var t in Object(e))
      r.push(t);
  return r;
}
var Ni = Bi, zi = p, Ri = fe, Vi = Ni, Ki = Object.prototype, qi = Ki.hasOwnProperty;
function ki(e) {
  if (!zi(e))
    return Vi(e);
  var r = Ri(e), t = [];
  for (var a in e)
    a == "constructor" && (r || !qi.call(e, a)) || t.push(a);
  return t;
}
var Ji = ki, Wi = Ui, Xi = Ji, Yi = E;
function Zi(e) {
  return Yi(e) ? Wi(e, !0) : Xi(e);
}
var ye = Zi, Qi = Ci, eo = ye;
function ro(e) {
  return Qi(e, eo(e));
}
var to = ro, Y = ce, ao = wa, no = Ea, io = Ua, oo = Qa, Z = le, Q = pe, so = yn, co = _e, uo = G, fo = p, vo = Mn, lo = de, ee = be, po = to;
function ho(e, r, t, a, n, o, s) {
  var i = ee(e, t), c = ee(r, t), f = s.get(c);
  if (f) {
    Y(e, t, f);
    return;
  }
  var v = o ? o(i, c, t + "", e, r, s) : void 0, l = v === void 0;
  if (l) {
    var h = Q(c), M = !h && co(c), H = !h && !M && lo(c);
    v = c, h || M || H ? Q(i) ? v = i : so(i) ? v = io(i) : M ? (l = !1, v = ao(c, !0)) : H ? (l = !1, v = no(c, !0)) : v = [] : vo(c) || Z(c) ? (v = i, Z(i) ? v = po(i) : (!fo(i) || uo(i)) && (v = oo(c))) : l = !1;
  }
  l && (s.set(c, v), n(v, c, a, o, s), s.delete(c)), Y(e, t, v);
}
var _o = ho, go = da, bo = ce, $o = Pa, yo = _o, Oo = p, To = ye, jo = be;
function Oe(e, r, t, a, n) {
  e !== r && $o(r, function(o, s) {
    if (n || (n = new go()), Oo(o))
      yo(e, r, s, t, Oe, a, n);
    else {
      var i = a ? a(jo(e, s), o, s + "", e, r, n) : void 0;
      i === void 0 && (i = o), bo(e, s, i);
    }
  }, To);
}
var Co = Oe;
function Ao(e) {
  return e;
}
var Te = Ao;
function So(e, r, t) {
  switch (t.length) {
    case 0:
      return e.call(r);
    case 1:
      return e.call(r, t[0]);
    case 2:
      return e.call(r, t[0], t[1]);
    case 3:
      return e.call(r, t[0], t[1], t[2]);
  }
  return e.apply(r, t);
}
var mo = So, Po = mo, re = Math.max;
function wo(e, r, t) {
  return r = re(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var a = arguments, n = -1, o = re(a.length - r, 0), s = Array(o); ++n < o; )
      s[n] = a[r + n];
    n = -1;
    for (var i = Array(r + 1); ++n < r; )
      i[n] = a[n];
    return i[r] = t(s), Po(e, this, i);
  };
}
var xo = wo;
function Io(e) {
  return function() {
    return e;
  };
}
var Mo = Io, Do = Mo, te = se, Go = Te, Lo = te ? function(e, r) {
  return te(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Do(r),
    writable: !0
  });
} : Go, Fo = Lo, Eo = 800, Ho = 16, Uo = Date.now;
function Bo(e) {
  var r = 0, t = 0;
  return function() {
    var a = Uo(), n = Ho - (a - t);
    if (t = a, n > 0) {
      if (++r >= Eo)
        return arguments[0];
    } else
      r = 0;
    return e.apply(void 0, arguments);
  };
}
var No = Bo, zo = Fo, Ro = No, Vo = Ro(zo), Ko = Vo, qo = Te, ko = xo, Jo = Ko;
function Wo(e, r) {
  return Jo(ko(e, r, qo), e + "");
}
var Xo = Wo, Yo = S, Zo = E, Qo = $e, es = p;
function rs(e, r, t) {
  if (!es(t))
    return !1;
  var a = typeof r;
  return (a == "number" ? Zo(t) && Qo(r, t.length) : a == "string" && r in t) ? Yo(t[r], e) : !1;
}
var ts = rs, as = Xo, ns = ts;
function is(e) {
  return as(function(r, t) {
    var a = -1, n = t.length, o = n > 1 ? t[n - 1] : void 0, s = n > 2 ? t[2] : void 0;
    for (o = e.length > 3 && typeof o == "function" ? (n--, o) : void 0, s && ns(t[0], t[1], s) && (o = n < 3 ? void 0 : o, n = 1), r = Object(r); ++a < n; ) {
      var i = t[a];
      i && e(r, i, a, o);
    }
    return r;
  });
}
var os = is, ss = Co, cs = os, us = cs(function(e, r, t) {
  ss(e, r, t);
}), fs = us;
const vs = /* @__PURE__ */ je(fs), ls = (e = {}) => vs({
  base: {
    borderStyle: "none",
    fontFamily: "inherit",
    fontSize: "16px",
    fontWeight: "500",
    transition: "background-color 200ms",
    display: "inline-flex",
    alignItems: "center"
  },
  variant: {
    solid: {
      backgroundColor: "#00ffe8",
      _hover: {
        backgroundColor: "#00e1ca"
      },
      _active: {
        backgroundColor: "#00b9aa"
      }
    },
    text: {},
    ghost: {},
    outlined: {}
  }
}, e), ps = {
  install(e, r = {}) {
    e.provide("mythril-theme", {
      button: ls(r.button)
    });
  }
};
export {
  ps as MythrilPlugin
};
