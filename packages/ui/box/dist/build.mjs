import { defineComponent as ke, toRefs as Ae, computed as Re, openBlock as $e, createBlock as _e, resolveDynamicComponent as Ie, unref as De, normalizeClass as Ve, withCtx as Pe, renderSlot as Te } from "vue";
function Me(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Le(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var je = /* @__PURE__ */ function() {
  function e(n) {
    var t = this;
    this._insertTag = function(a) {
      var s;
      t.tags.length === 0 ? t.insertionPoint ? s = t.insertionPoint.nextSibling : t.prepend ? s = t.container.firstChild : s = t.before : s = t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(a, s), t.tags.push(a);
    }, this.isSpeedy = n.speedy === void 0 ? process.env.NODE_ENV === "production" : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(t) {
    t.forEach(this._insertTag);
  }, r.insert = function(t) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Le(this));
    var a = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var s = t.charCodeAt(0) === 64 && t.charCodeAt(1) === 105;
      s && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + t + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !s;
    }
    if (this.isSpeedy) {
      var i = Me(a);
      try {
        i.insertRule(t, i.cssRules.length);
      } catch (o) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(t) && console.error('There was a problem inserting the following rule: "' + t + '"', o);
      }
    } else
      a.appendChild(document.createTextNode(t));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(t) {
      return t.parentNode && t.parentNode.removeChild(t);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), N = "-ms-", q = "-moz-", h = "-webkit-", re = "comm", ne = "rule", te = "decl", ze = "@import", ge = "@keyframes", We = "@layer", Ge = Math.abs, K = String.fromCharCode, Ye = Object.assign;
function Be(e, r) {
  return x(e, 0) ^ 45 ? (((r << 2 ^ x(e, 0)) << 2 ^ x(e, 1)) << 2 ^ x(e, 2)) << 2 ^ x(e, 3) : 0;
}
function ve(e) {
  return e.trim();
}
function Ue(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function p(e, r, n) {
  return e.replace(r, n);
}
function X(e, r) {
  return e.indexOf(r);
}
function x(e, r) {
  return e.charCodeAt(r) | 0;
}
function L(e, r, n) {
  return e.slice(r, n);
}
function $(e) {
  return e.length;
}
function se(e) {
  return e.length;
}
function G(e, r) {
  return r.push(e), e;
}
function qe(e, r) {
  return e.map(r).join("");
}
var J = 1, V = 1, be = 0, C = 0, b = 0, P = "";
function H(e, r, n, t, a, s, i) {
  return { value: e, root: r, parent: n, type: t, props: a, children: s, line: J, column: V, length: i, return: "" };
}
function M(e, r) {
  return Ye(H("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Fe() {
  return b;
}
function Ke() {
  return b = C > 0 ? x(P, --C) : 0, V--, b === 10 && (V = 1, J--), b;
}
function O() {
  return b = C < be ? x(P, C++) : 0, V++, b === 10 && (V = 1, J++), b;
}
function _() {
  return x(P, C);
}
function Y() {
  return C;
}
function W(e, r) {
  return L(P, e, r);
}
function j(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ye(e) {
  return J = V = 1, be = $(P = e), C = 0, [];
}
function we(e) {
  return P = "", e;
}
function B(e) {
  return ve(W(C - 1, ee(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Je(e) {
  for (; (b = _()) && b < 33; )
    O();
  return j(e) > 2 || j(b) > 3 ? "" : " ";
}
function He(e, r) {
  for (; --r && O() && !(b < 48 || b > 102 || b > 57 && b < 65 || b > 70 && b < 97); )
    ;
  return W(e, Y() + (r < 6 && _() == 32 && O() == 32));
}
function ee(e) {
  for (; O(); )
    switch (b) {
      case e:
        return C;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ee(b);
        break;
      case 40:
        e === 41 && ee(e);
        break;
      case 92:
        O();
        break;
    }
  return C;
}
function Ze(e, r) {
  for (; O() && e + b !== 47 + 10; )
    if (e + b === 42 + 42 && _() === 47)
      break;
  return "/*" + W(r, C - 1) + "*" + K(e === 47 ? e : O());
}
function Qe(e) {
  for (; !j(_()); )
    O();
  return W(e, C);
}
function Xe(e) {
  return we(U("", null, null, null, [""], e = ye(e), 0, [0], e));
}
function U(e, r, n, t, a, s, i, o, f) {
  for (var u = 0, c = 0, l = i, v = 0, S = 0, y = 0, d = 1, w = 1, g = 1, E = 0, A = "", T = a, I = s, R = t, m = A; w; )
    switch (y = E, E = O()) {
      case 40:
        if (y != 108 && x(m, l - 1) == 58) {
          X(m += p(B(E), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        m += B(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        m += Je(y);
        break;
      case 92:
        m += He(Y() - 1, 7);
        continue;
      case 47:
        switch (_()) {
          case 42:
          case 47:
            G(er(Ze(O(), Y()), r, n), f);
            break;
          default:
            m += "/";
        }
        break;
      case 123 * d:
        o[u++] = $(m) * g;
      case 125 * d:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            w = 0;
          case 59 + c:
            g == -1 && (m = p(m, /\f/g, "")), S > 0 && $(m) - l && G(S > 32 ? oe(m + ";", t, n, l - 1) : oe(p(m, " ", "") + ";", t, n, l - 2), f);
            break;
          case 59:
            m += ";";
          default:
            if (G(R = ie(m, r, n, u, c, a, o, A, T = [], I = [], l), s), E === 123)
              if (c === 0)
                U(m, r, R, R, T, s, l, o, I);
              else
                switch (v === 99 && x(m, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    U(e, R, R, t && G(ie(e, R, R, 0, 0, a, o, A, a, T = [], l), I), a, I, l, o, t ? T : I);
                    break;
                  default:
                    U(m, R, R, R, [""], I, 0, o, I);
                }
        }
        u = c = S = 0, d = g = 1, A = m = "", l = i;
        break;
      case 58:
        l = 1 + $(m), S = y;
      default:
        if (d < 1) {
          if (E == 123)
            --d;
          else if (E == 125 && d++ == 0 && Ke() == 125)
            continue;
        }
        switch (m += K(E), E * d) {
          case 38:
            g = c > 0 ? 1 : (m += "\f", -1);
            break;
          case 44:
            o[u++] = ($(m) - 1) * g, g = 1;
            break;
          case 64:
            _() === 45 && (m += B(O())), v = _(), c = l = $(A = m += Qe(Y())), E++;
            break;
          case 45:
            y === 45 && $(m) == 2 && (d = 0);
        }
    }
  return s;
}
function ie(e, r, n, t, a, s, i, o, f, u, c) {
  for (var l = a - 1, v = a === 0 ? s : [""], S = se(v), y = 0, d = 0, w = 0; y < t; ++y)
    for (var g = 0, E = L(e, l + 1, l = Ge(d = i[y])), A = e; g < S; ++g)
      (A = ve(d > 0 ? v[g] + " " + E : p(E, /&\f/g, v[g]))) && (f[w++] = A);
  return H(e, r, n, a === 0 ? ne : o, f, u, c);
}
function er(e, r, n) {
  return H(e, r, n, re, K(Fe()), L(e, 2, -2), 0);
}
function oe(e, r, n, t) {
  return H(e, r, n, te, L(e, 0, t), L(e, t + 1, -1), t);
}
function D(e, r) {
  for (var n = "", t = se(e), a = 0; a < t; a++)
    n += r(e[a], a, e, r) || "";
  return n;
}
function rr(e, r, n, t) {
  switch (e.type) {
    case We:
      if (e.children.length)
        break;
    case ze:
    case te:
      return e.return = e.return || e.value;
    case re:
      return "";
    case ge:
      return e.return = e.value + "{" + D(e.children, t) + "}";
    case ne:
      e.value = e.props.join(",");
  }
  return $(n = D(e.children, t)) ? e.return = e.value + "{" + n + "}" : "";
}
function nr(e) {
  var r = se(e);
  return function(n, t, a, s) {
    for (var i = "", o = 0; o < r; o++)
      i += e[o](n, t, a, s) || "";
    return i;
  };
}
function tr(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function sr(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return r[n] === void 0 && (r[n] = e(n)), r[n];
  };
}
var ar = function(r, n, t) {
  for (var a = 0, s = 0; a = s, s = _(), a === 38 && s === 12 && (n[t] = 1), !j(s); )
    O();
  return W(r, C);
}, ir = function(r, n) {
  var t = -1, a = 44;
  do
    switch (j(a)) {
      case 0:
        a === 38 && _() === 12 && (n[t] = 1), r[t] += ar(C - 1, n, t);
        break;
      case 2:
        r[t] += B(a);
        break;
      case 4:
        if (a === 44) {
          r[++t] = _() === 58 ? "&\f" : "", n[t] = r[t].length;
          break;
        }
      default:
        r[t] += K(a);
    }
  while (a = O());
  return r;
}, or = function(r, n) {
  return we(ir(ye(r), n));
}, ce = /* @__PURE__ */ new WeakMap(), cr = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var n = r.value, t = r.parent, a = r.column === t.column && r.line === t.line; t.type !== "rule"; )
      if (t = t.parent, !t)
        return;
    if (!(r.props.length === 1 && n.charCodeAt(0) !== 58 && !ce.get(t)) && !a) {
      ce.set(r, !0);
      for (var s = [], i = or(n, s), o = t.props, f = 0, u = 0; f < i.length; f++)
        for (var c = 0; c < o.length; c++, u++)
          r.props[u] = s[f] ? i[f].replace(/&\f/g, o[c]) : o[c] + " " + i[f];
    }
  }
}, fr = function(r) {
  if (r.type === "decl") {
    var n = r.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, ur = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", lr = function(r) {
  return r.type === "comm" && r.children.indexOf(ur) > -1;
}, dr = function(r) {
  return function(n, t, a) {
    if (!(n.type !== "rule" || r.compat)) {
      var s = n.value.match(/(:first|:nth|:nth-last)-child/g);
      if (s) {
        for (var i = !!n.parent, o = i ? n.parent.children : (
          // global rule at the root level
          a
        ), f = o.length - 1; f >= 0; f--) {
          var u = o[f];
          if (u.line < n.line)
            break;
          if (u.column < n.column) {
            if (lr(u))
              return;
            break;
          }
        }
        s.forEach(function(c) {
          console.error('The pseudo class "' + c + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + c.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Ee = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, hr = function(r, n) {
  for (var t = r - 1; t >= 0; t--)
    if (!Ee(n[t]))
      return !0;
  return !1;
}, fe = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, pr = function(r, n, t) {
  Ee(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), fe(r)) : hr(n, t) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), fe(r)));
};
function xe(e, r) {
  switch (Be(e, r)) {
    case 5103:
      return h + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return h + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return h + e + q + e + N + e + e;
    case 6828:
    case 4268:
      return h + e + N + e + e;
    case 6165:
      return h + e + N + "flex-" + e + e;
    case 5187:
      return h + e + p(e, /(\w+).+(:[^]+)/, h + "box-$1$2" + N + "flex-$1$2") + e;
    case 5443:
      return h + e + N + "flex-item-" + p(e, /flex-|-self/, "") + e;
    case 4675:
      return h + e + N + "flex-line-pack" + p(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return h + e + N + p(e, "shrink", "negative") + e;
    case 5292:
      return h + e + N + p(e, "basis", "preferred-size") + e;
    case 6060:
      return h + "box-" + p(e, "-grow", "") + h + e + N + p(e, "grow", "positive") + e;
    case 4554:
      return h + p(e, /([^-])(transform)/g, "$1" + h + "$2") + e;
    case 6187:
      return p(p(p(e, /(zoom-|grab)/, h + "$1"), /(image-set)/, h + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return p(e, /(image-set\([^]*)/, h + "$1$`$1");
    case 4968:
      return p(p(e, /(.+:)(flex-)?(.*)/, h + "box-pack:$3" + N + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + h + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return p(e, /(.+)-inline(.+)/, h + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if ($(e) - 1 - r > 6)
        switch (x(e, r + 1)) {
          case 109:
            if (x(e, r + 4) !== 45)
              break;
          case 102:
            return p(e, /(.+:)(.+)-([^]+)/, "$1" + h + "$2-$3$1" + q + (x(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~X(e, "stretch") ? xe(p(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (x(e, r + 1) !== 115)
        break;
    case 6444:
      switch (x(e, $(e) - 3 - (~X(e, "!important") && 10))) {
        case 107:
          return p(e, ":", ":" + h) + e;
        case 101:
          return p(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + h + (x(e, 14) === 45 ? "inline-" : "") + "box$3$1" + h + "$2$3$1" + N + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (x(e, r + 11)) {
        case 114:
          return h + e + N + p(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return h + e + N + p(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return h + e + N + p(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return h + e + N + e + e;
  }
  return e;
}
var mr = function(r, n, t, a) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case te:
        r.return = xe(r.value, r.length);
        break;
      case ge:
        return D([M(r, {
          value: p(r.value, "@", "@" + h)
        })], a);
      case ne:
        if (r.length)
          return qe(r.props, function(s) {
            switch (Ue(s, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return D([M(r, {
                  props: [p(s, /:(read-\w+)/, ":" + q + "$1")]
                })], a);
              case "::placeholder":
                return D([M(r, {
                  props: [p(s, /:(plac\w+)/, ":" + h + "input-$1")]
                }), M(r, {
                  props: [p(s, /:(plac\w+)/, ":" + q + "$1")]
                }), M(r, {
                  props: [p(s, /:(plac\w+)/, N + "input-$1")]
                })], a);
            }
            return "";
          });
    }
}, gr = [mr], vr = function(r) {
  var n = r.key;
  if (process.env.NODE_ENV !== "production" && !n)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (n === "css") {
    var t = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(t, function(d) {
      var w = d.getAttribute("data-emotion");
      w.indexOf(" ") !== -1 && (document.head.appendChild(d), d.setAttribute("data-s", ""));
    });
  }
  var a = r.stylisPlugins || gr;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(n))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + n + '" was passed');
  var s = {}, i, o = [];
  i = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(d) {
      for (var w = d.getAttribute("data-emotion").split(" "), g = 1; g < w.length; g++)
        s[w[g]] = !0;
      o.push(d);
    }
  );
  var f, u = [cr, fr];
  process.env.NODE_ENV !== "production" && u.push(dr({
    get compat() {
      return y.compat;
    }
  }), pr);
  {
    var c, l = [rr, process.env.NODE_ENV !== "production" ? function(d) {
      d.root || (d.return ? c.insert(d.return) : d.value && d.type !== re && c.insert(d.value + "{}"));
    } : tr(function(d) {
      c.insert(d);
    })], v = nr(u.concat(a, l)), S = function(w) {
      return D(Xe(w), v);
    };
    f = function(w, g, E, A) {
      c = E, process.env.NODE_ENV !== "production" && g.map !== void 0 && (c = {
        insert: function(I) {
          E.insert(I + g.map);
        }
      }), S(w ? w + "{" + g.styles + "}" : g.styles), A && (y.inserted[g.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new je({
      key: n,
      container: i,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: s,
    registered: {},
    insert: f
  };
  return y.sheet.hydrate(o), y;
};
function br(e) {
  for (var r = 0, n, t = 0, a = e.length; a >= 4; ++t, a -= 4)
    n = e.charCodeAt(t) & 255 | (e.charCodeAt(++t) & 255) << 8 | (e.charCodeAt(++t) & 255) << 16 | (e.charCodeAt(++t) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, r = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      r ^= (e.charCodeAt(t + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(t + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(t) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var yr = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ue = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, wr = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Er = /[A-Z]|^ms/g, Ne = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ae = function(r) {
  return r.charCodeAt(1) === 45;
}, le = function(r) {
  return r != null && typeof r != "boolean";
}, Z = /* @__PURE__ */ sr(function(e) {
  return ae(e) ? e : e.replace(Er, "-$&").toLowerCase();
}), F = function(r, n) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Ne, function(t, a, s) {
          return k = {
            name: a,
            styles: s,
            next: k
          }, a;
        });
  }
  return yr[r] !== 1 && !ae(r) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
if (process.env.NODE_ENV !== "production") {
  var xr = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Nr = ["normal", "none", "initial", "inherit", "unset"], Sr = F, Cr = /^-ms-/, Or = /-(.)/g, de = {};
  F = function(r, n) {
    if (r === "content" && (typeof n != "string" || Nr.indexOf(n) === -1 && !xr.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + n + "\"'`");
    var t = Sr(r, n);
    return t !== "" && !ae(r) && r.indexOf("-") !== -1 && de[r] === void 0 && (de[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(Cr, "ms-").replace(Or, function(a, s) {
      return s.toUpperCase();
    }) + "?")), t;
  };
}
var Se = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function z(e, r, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && n.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Se);
    return n;
  }
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return k = {
          name: n.name,
          styles: n.styles,
          next: k
        }, n.name;
      if (n.styles !== void 0) {
        var t = n.next;
        if (t !== void 0)
          for (; t !== void 0; )
            k = {
              name: t.name,
              styles: t.styles,
              next: k
            }, t = t.next;
        var a = n.styles + ";";
        return process.env.NODE_ENV !== "production" && n.map !== void 0 && (a += n.map), a;
      }
      return kr(e, r, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = k, i = n(e);
        return k = s, z(e, r, i);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var o = [], f = n.replace(Ne, function(c, l, v) {
          var S = "animation" + o.length;
          return o.push("const " + S + " = keyframes`" + v.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + S + "}";
        });
        o.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(o, ["`" + f + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + f + "`"));
      }
      break;
  }
  if (r == null)
    return n;
  var u = r[n];
  return u !== void 0 ? u : n;
}
function kr(e, r, n) {
  var t = "";
  if (Array.isArray(n))
    for (var a = 0; a < n.length; a++)
      t += z(e, r, n[a]) + ";";
  else
    for (var s in n) {
      var i = n[s];
      if (typeof i != "object")
        r != null && r[i] !== void 0 ? t += s + "{" + r[i] + "}" : le(i) && (t += Z(s) + ":" + F(s, i) + ";");
      else {
        if (s === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Se);
        if (Array.isArray(i) && typeof i[0] == "string" && (r == null || r[i[0]] === void 0))
          for (var o = 0; o < i.length; o++)
            le(i[o]) && (t += Z(s) + ":" + F(s, i[o]) + ";");
        else {
          var f = z(e, r, i);
          switch (s) {
            case "animation":
            case "animationName": {
              t += Z(s) + ":" + f + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && s === "undefined" && console.error(wr), t += s + "{" + f + "}";
          }
        }
      }
    }
  return t;
}
var he = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Ce;
process.env.NODE_ENV !== "production" && (Ce = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var k, Q = function(r, n, t) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var a = !0, s = "";
  k = void 0;
  var i = r[0];
  i == null || i.raw === void 0 ? (a = !1, s += z(t, n, i)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(ue), s += i[0]);
  for (var o = 1; o < r.length; o++)
    s += z(t, n, r[o]), a && (process.env.NODE_ENV !== "production" && i[o] === void 0 && console.error(ue), s += i[o]);
  var f;
  process.env.NODE_ENV !== "production" && (s = s.replace(Ce, function(v) {
    return f = v, "";
  })), he.lastIndex = 0;
  for (var u = "", c; (c = he.exec(s)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    c[1];
  var l = br(s) + u;
  return process.env.NODE_ENV !== "production" ? {
    name: l,
    styles: s,
    map: f,
    next: k,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: l,
    styles: s,
    next: k
  };
}, Ar = !0;
function Oe(e, r, n) {
  var t = "";
  return n.split(" ").forEach(function(a) {
    e[a] !== void 0 ? r.push(e[a] + ";") : t += a + " ";
  }), t;
}
var Rr = function(r, n, t) {
  var a = r.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (t === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Ar === !1) && r.registered[a] === void 0 && (r.registered[a] = n.styles);
}, $r = function(r, n, t) {
  Rr(r, n, t);
  var a = r.key + "-" + n.name;
  if (r.inserted[n.name] === void 0) {
    var s = n;
    do
      r.insert(n === s ? "." + a : "", s, r.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function pe(e, r) {
  if (e.inserted[r.name] === void 0)
    return e.insert("", r, e.sheet, !0);
}
function me(e, r, n) {
  var t = [], a = Oe(e, t, n);
  return t.length < 2 ? n : a + r(t);
}
var _r = function(r) {
  var n = vr(r);
  n.sheet.speedy = function(o) {
    if (process.env.NODE_ENV !== "production" && this.ctr !== 0)
      throw new Error("speedy must be changed before any rules are inserted");
    this.isSpeedy = o;
  }, n.compat = !0;
  var t = function() {
    for (var f = arguments.length, u = new Array(f), c = 0; c < f; c++)
      u[c] = arguments[c];
    var l = Q(u, n.registered, void 0);
    return $r(n, l, !1), n.key + "-" + l.name;
  }, a = function() {
    for (var f = arguments.length, u = new Array(f), c = 0; c < f; c++)
      u[c] = arguments[c];
    var l = Q(u, n.registered), v = "animation-" + l.name;
    return pe(n, {
      name: l.name,
      styles: "@keyframes " + v + "{" + l.styles + "}"
    }), v;
  }, s = function() {
    for (var f = arguments.length, u = new Array(f), c = 0; c < f; c++)
      u[c] = arguments[c];
    var l = Q(u, n.registered);
    pe(n, l);
  }, i = function() {
    for (var f = arguments.length, u = new Array(f), c = 0; c < f; c++)
      u[c] = arguments[c];
    return me(n.registered, t, Ir(u));
  };
  return {
    css: t,
    cx: i,
    injectGlobal: s,
    keyframes: a,
    hydrate: function(f) {
      f.forEach(function(u) {
        n.inserted[u] = !0;
      });
    },
    flush: function() {
      n.registered = {}, n.inserted = {}, n.sheet.flush();
    },
    // $FlowFixMe
    sheet: n.sheet,
    cache: n,
    getRegisteredStyles: Oe.bind(null, n.registered),
    merge: me.bind(null, n.registered, t)
  };
}, Ir = function e(r) {
  for (var n = "", t = 0; t < r.length; t++) {
    var a = r[t];
    if (a != null) {
      var s = void 0;
      switch (typeof a) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(a))
            s = e(a);
          else {
            s = "";
            for (var i in a)
              a[i] && i && (s && (s += " "), s += i);
          }
          break;
        }
        default:
          s = a;
      }
      s && (n && (n += " "), n += s);
    }
  }
  return n;
}, Dr = _r({
  key: "css"
}), Vr = Dr.css;
const Tr = /* @__PURE__ */ ke({
  __name: "MBox",
  props: {
    as: { default: "div" },
    w: {},
    h: {},
    p: {},
    pt: {},
    pb: {},
    ps: {},
    pe: {},
    bgColor: {},
    bgImg: {},
    bgPos: {},
    bgClip: {}
  },
  setup(e) {
    const r = e, { as: n, ...t } = Ae(r), a = Re(() => {
      var s, i, o, f, u, c, l, v, S, y, d, w;
      return Vr({
        width: (s = t.w) == null ? void 0 : s.value,
        height: (i = t.h) == null ? void 0 : i.value,
        backgroundColor: (o = t.bgColor) == null ? void 0 : o.value,
        backgroundImage: ((f = t.bgImg) == null ? void 0 : f.value) && `url("${(u = t.bgImg) == null ? void 0 : u.value}")`,
        padding: (c = t.p) == null ? void 0 : c.value,
        paddingTop: (l = t.pt) == null ? void 0 : l.value,
        paddingBottom: (v = t.pb) == null ? void 0 : v.value,
        "html[dir=ltr] &, &[dir=ltr]": {
          paddingLeft: (S = t.ps) == null ? void 0 : S.value,
          paddingRight: (y = t.pe) == null ? void 0 : y.value
        },
        "html[dir=rtl] &, &[dir=rtl]": {
          paddingLeft: (d = t.pe) == null ? void 0 : d.value,
          paddingRight: (w = t.ps) == null ? void 0 : w.value
        },
        body: {
          background: "red"
        }
      });
    });
    return (s, i) => ($e(), _e(Ie(De(n)), {
      class: Ve(a.value)
    }, {
      default: Pe(() => [
        Te(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  Tr as MBox
};
