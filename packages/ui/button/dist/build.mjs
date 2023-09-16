import { inject as De, defineComponent as Pe, openBlock as X, createElementBlock as ee, normalizeClass as Te, unref as L, Fragment as ue, renderSlot as le, createElementVNode as Me, toDisplayString as Le, createTextVNode as je } from "vue";
function ze(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function We(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Ge = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(a) {
      var s;
      n.tags.length === 0 ? n.insertionPoint ? s = n.insertionPoint.nextSibling : n.prepend ? s = n.container.firstChild : s = n.before : s = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(a, s), n.tags.push(a);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(We(this));
    var a = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var s = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      s && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !s;
    }
    if (this.isSpeedy) {
      var i = ze(a);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch (o) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', o);
      }
    } else
      a.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), E = "-ms-", K = "-moz-", l = "-webkit-", ae = "comm", ie = "rule", oe = "decl", Ye = "@import", xe = "@keyframes", Be = "@layer", Fe = Math.abs, H = String.fromCharCode, Ue = Object.assign;
function qe(e, r) {
  return w(e, 0) ^ 45 ? (((r << 2 ^ w(e, 0)) << 2 ^ w(e, 1)) << 2 ^ w(e, 2)) << 2 ^ w(e, 3) : 0;
}
function Se(e) {
  return e.trim();
}
function Ke(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function d(e, r, t) {
  return e.replace(r, t);
}
function ne(e, r) {
  return e.indexOf(r);
}
function w(e, r) {
  return e.charCodeAt(r) | 0;
}
function z(e, r, t) {
  return e.slice(r, t);
}
function R(e) {
  return e.length;
}
function ce(e) {
  return e.length;
}
function B(e, r) {
  return r.push(e), e;
}
function Je(e, r) {
  return e.map(r).join("");
}
var Z = 1, P = 1, Ne = 0, N = 0, g = 0, T = "";
function Q(e, r, t, n, a, s, i) {
  return { value: e, root: r, parent: t, type: n, props: a, children: s, line: Z, column: P, length: i, return: "" };
}
function j(e, r) {
  return Ue(Q("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function He() {
  return g;
}
function Ze() {
  return g = N > 0 ? w(T, --N) : 0, P--, g === 10 && (P = 1, Z--), g;
}
function O() {
  return g = N < Ne ? w(T, N++) : 0, P++, g === 10 && (P = 1, Z++), g;
}
function I() {
  return w(T, N);
}
function F() {
  return N;
}
function Y(e, r) {
  return z(T, e, r);
}
function W(e) {
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
function Oe(e) {
  return Z = P = 1, Ne = R(T = e), N = 0, [];
}
function Ce(e) {
  return T = "", e;
}
function U(e) {
  return Se(Y(N - 1, se(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Qe(e) {
  for (; (g = I()) && g < 33; )
    O();
  return W(e) > 2 || W(g) > 3 ? "" : " ";
}
function Xe(e, r) {
  for (; --r && O() && !(g < 48 || g > 102 || g > 57 && g < 65 || g > 70 && g < 97); )
    ;
  return Y(e, F() + (r < 6 && I() == 32 && O() == 32));
}
function se(e) {
  for (; O(); )
    switch (g) {
      case e:
        return N;
      case 34:
      case 39:
        e !== 34 && e !== 39 && se(g);
        break;
      case 40:
        e === 41 && se(e);
        break;
      case 92:
        O();
        break;
    }
  return N;
}
function er(e, r) {
  for (; O() && e + g !== 47 + 10; )
    if (e + g === 42 + 42 && I() === 47)
      break;
  return "/*" + Y(r, N - 1) + "*" + H(e === 47 ? e : O());
}
function rr(e) {
  for (; !W(I()); )
    O();
  return Y(e, N);
}
function tr(e) {
  return Ce(q("", null, null, null, [""], e = Oe(e), 0, [0], e));
}
function q(e, r, t, n, a, s, i, o, f) {
  for (var u = 0, c = 0, h = i, v = 0, C = 0, x = 0, p = 1, S = 1, y = 1, b = 0, A = "", M = a, V = s, $ = n, m = A; S; )
    switch (x = b, b = O()) {
      case 40:
        if (x != 108 && w(m, h - 1) == 58) {
          ne(m += d(U(b), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        m += U(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        m += Qe(x);
        break;
      case 92:
        m += Xe(F() - 1, 7);
        continue;
      case 47:
        switch (I()) {
          case 42:
          case 47:
            B(nr(er(O(), F()), r, t), f);
            break;
          default:
            m += "/";
        }
        break;
      case 123 * p:
        o[u++] = R(m) * y;
      case 125 * p:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            y == -1 && (m = d(m, /\f/g, "")), C > 0 && R(m) - h && B(C > 32 ? he(m + ";", n, t, h - 1) : he(d(m, " ", "") + ";", n, t, h - 2), f);
            break;
          case 59:
            m += ";";
          default:
            if (B($ = de(m, r, t, u, c, a, o, A, M = [], V = [], h), s), b === 123)
              if (c === 0)
                q(m, r, $, $, M, s, h, o, V);
              else
                switch (v === 99 && w(m, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    q(e, $, $, n && B(de(e, $, $, 0, 0, a, o, A, a, M = [], h), V), a, V, h, o, n ? M : V);
                    break;
                  default:
                    q(m, $, $, $, [""], V, 0, o, V);
                }
        }
        u = c = C = 0, p = y = 1, A = m = "", h = i;
        break;
      case 58:
        h = 1 + R(m), C = x;
      default:
        if (p < 1) {
          if (b == 123)
            --p;
          else if (b == 125 && p++ == 0 && Ze() == 125)
            continue;
        }
        switch (m += H(b), b * p) {
          case 38:
            y = c > 0 ? 1 : (m += "\f", -1);
            break;
          case 44:
            o[u++] = (R(m) - 1) * y, y = 1;
            break;
          case 64:
            I() === 45 && (m += U(O())), v = I(), c = h = R(A = m += rr(F())), b++;
            break;
          case 45:
            x === 45 && R(m) == 2 && (p = 0);
        }
    }
  return s;
}
function de(e, r, t, n, a, s, i, o, f, u, c) {
  for (var h = a - 1, v = a === 0 ? s : [""], C = ce(v), x = 0, p = 0, S = 0; x < n; ++x)
    for (var y = 0, b = z(e, h + 1, h = Fe(p = i[x])), A = e; y < C; ++y)
      (A = Se(p > 0 ? v[y] + " " + b : d(b, /&\f/g, v[y]))) && (f[S++] = A);
  return Q(e, r, t, a === 0 ? ie : o, f, u, c);
}
function nr(e, r, t) {
  return Q(e, r, t, ae, H(He()), z(e, 2, -2), 0);
}
function he(e, r, t, n) {
  return Q(e, r, t, oe, z(e, 0, n), z(e, n + 1, -1), n);
}
function D(e, r) {
  for (var t = "", n = ce(e), a = 0; a < n; a++)
    t += r(e[a], a, e, r) || "";
  return t;
}
function sr(e, r, t, n) {
  switch (e.type) {
    case Be:
      if (e.children.length)
        break;
    case Ye:
    case oe:
      return e.return = e.return || e.value;
    case ae:
      return "";
    case xe:
      return e.return = e.value + "{" + D(e.children, n) + "}";
    case ie:
      e.value = e.props.join(",");
  }
  return R(t = D(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function ar(e) {
  var r = ce(e);
  return function(t, n, a, s) {
    for (var i = "", o = 0; o < r; o++)
      i += e[o](t, n, a, s) || "";
    return i;
  };
}
function ir(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function or(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var cr = function(r, t, n) {
  for (var a = 0, s = 0; a = s, s = I(), a === 38 && s === 12 && (t[n] = 1), !W(s); )
    O();
  return Y(r, N);
}, fr = function(r, t) {
  var n = -1, a = 44;
  do
    switch (W(a)) {
      case 0:
        a === 38 && I() === 12 && (t[n] = 1), r[n] += cr(N - 1, t, n);
        break;
      case 2:
        r[n] += U(a);
        break;
      case 4:
        if (a === 44) {
          r[++n] = I() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += H(a);
    }
  while (a = O());
  return r;
}, ur = function(r, t) {
  return Ce(fr(Oe(r), t));
}, pe = /* @__PURE__ */ new WeakMap(), lr = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, a = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !pe.get(n)) && !a) {
      pe.set(r, !0);
      for (var s = [], i = ur(t, s), o = n.props, f = 0, u = 0; f < i.length; f++)
        for (var c = 0; c < o.length; c++, u++)
          r.props[u] = s[f] ? i[f].replace(/&\f/g, o[c]) : o[c] + " " + i[f];
    }
  }
}, dr = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, hr = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", pr = function(r) {
  return r.type === "comm" && r.children.indexOf(hr) > -1;
}, mr = function(r) {
  return function(t, n, a) {
    if (!(t.type !== "rule" || r.compat)) {
      var s = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (s) {
        for (var i = !!t.parent, o = i ? t.parent.children : (
          // global rule at the root level
          a
        ), f = o.length - 1; f >= 0; f--) {
          var u = o[f];
          if (u.line < t.line)
            break;
          if (u.column < t.column) {
            if (pr(u))
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
}, ke = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, yr = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!ke(t[n]))
      return !0;
  return !1;
}, me = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, gr = function(r, t, n) {
  ke(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), me(r)) : yr(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), me(r)));
};
function Ae(e, r) {
  switch (qe(e, r)) {
    case 5103:
      return l + "print-" + e + e;
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
      return l + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return l + e + K + e + E + e + e;
    case 6828:
    case 4268:
      return l + e + E + e + e;
    case 6165:
      return l + e + E + "flex-" + e + e;
    case 5187:
      return l + e + d(e, /(\w+).+(:[^]+)/, l + "box-$1$2" + E + "flex-$1$2") + e;
    case 5443:
      return l + e + E + "flex-item-" + d(e, /flex-|-self/, "") + e;
    case 4675:
      return l + e + E + "flex-line-pack" + d(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return l + e + E + d(e, "shrink", "negative") + e;
    case 5292:
      return l + e + E + d(e, "basis", "preferred-size") + e;
    case 6060:
      return l + "box-" + d(e, "-grow", "") + l + e + E + d(e, "grow", "positive") + e;
    case 4554:
      return l + d(e, /([^-])(transform)/g, "$1" + l + "$2") + e;
    case 6187:
      return d(d(d(e, /(zoom-|grab)/, l + "$1"), /(image-set)/, l + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return d(e, /(image-set\([^]*)/, l + "$1$`$1");
    case 4968:
      return d(d(e, /(.+:)(flex-)?(.*)/, l + "box-pack:$3" + E + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + l + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return d(e, /(.+)-inline(.+)/, l + "$1$2") + e;
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
      if (R(e) - 1 - r > 6)
        switch (w(e, r + 1)) {
          case 109:
            if (w(e, r + 4) !== 45)
              break;
          case 102:
            return d(e, /(.+:)(.+)-([^]+)/, "$1" + l + "$2-$3$1" + K + (w(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ne(e, "stretch") ? Ae(d(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (w(e, r + 1) !== 115)
        break;
    case 6444:
      switch (w(e, R(e) - 3 - (~ne(e, "!important") && 10))) {
        case 107:
          return d(e, ":", ":" + l) + e;
        case 101:
          return d(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + l + (w(e, 14) === 45 ? "inline-" : "") + "box$3$1" + l + "$2$3$1" + E + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (w(e, r + 11)) {
        case 114:
          return l + e + E + d(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return l + e + E + d(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return l + e + E + d(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return l + e + E + e + e;
  }
  return e;
}
var vr = function(r, t, n, a) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case oe:
        r.return = Ae(r.value, r.length);
        break;
      case xe:
        return D([j(r, {
          value: d(r.value, "@", "@" + l)
        })], a);
      case ie:
        if (r.length)
          return Je(r.props, function(s) {
            switch (Ke(s, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return D([j(r, {
                  props: [d(s, /:(read-\w+)/, ":" + K + "$1")]
                })], a);
              case "::placeholder":
                return D([j(r, {
                  props: [d(s, /:(plac\w+)/, ":" + l + "input-$1")]
                }), j(r, {
                  props: [d(s, /:(plac\w+)/, ":" + K + "$1")]
                }), j(r, {
                  props: [d(s, /:(plac\w+)/, E + "input-$1")]
                })], a);
            }
            return "";
          });
    }
}, br = [vr], wr = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(p) {
      var S = p.getAttribute("data-emotion");
      S.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var a = r.stylisPlugins || br;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var s = {}, i, o = [];
  i = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(p) {
      for (var S = p.getAttribute("data-emotion").split(" "), y = 1; y < S.length; y++)
        s[S[y]] = !0;
      o.push(p);
    }
  );
  var f, u = [lr, dr];
  process.env.NODE_ENV !== "production" && u.push(mr({
    get compat() {
      return x.compat;
    }
  }), gr);
  {
    var c, h = [sr, process.env.NODE_ENV !== "production" ? function(p) {
      p.root || (p.return ? c.insert(p.return) : p.value && p.type !== ae && c.insert(p.value + "{}"));
    } : ir(function(p) {
      c.insert(p);
    })], v = ar(u.concat(a, h)), C = function(S) {
      return D(tr(S), v);
    };
    f = function(S, y, b, A) {
      c = b, process.env.NODE_ENV !== "production" && y.map !== void 0 && (c = {
        insert: function(V) {
          b.insert(V + y.map);
        }
      }), C(S ? S + "{" + y.styles + "}" : y.styles), A && (x.inserted[y.name] = !0);
    };
  }
  var x = {
    key: t,
    sheet: new Ge({
      key: t,
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
  return x.sheet.hydrate(o), x;
};
function Er(e) {
  for (var r = 0, t, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var xr = {
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
}, ye = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Sr = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Nr = /[A-Z]|^ms/g, $e = /_EMO_([^_]+?)_([^]*?)_EMO_/g, fe = function(r) {
  return r.charCodeAt(1) === 45;
}, ge = function(r) {
  return r != null && typeof r != "boolean";
}, re = /* @__PURE__ */ or(function(e) {
  return fe(e) ? e : e.replace(Nr, "-$&").toLowerCase();
}), J = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace($e, function(n, a, s) {
          return k = {
            name: a,
            styles: s,
            next: k
          }, a;
        });
  }
  return xr[r] !== 1 && !fe(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var Or = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Cr = ["normal", "none", "initial", "inherit", "unset"], kr = J, Ar = /^-ms-/, $r = /-(.)/g, ve = {};
  J = function(r, t) {
    if (r === "content" && (typeof t != "string" || Cr.indexOf(t) === -1 && !Or.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = kr(r, t);
    return n !== "" && !fe(r) && r.indexOf("-") !== -1 && ve[r] === void 0 && (ve[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(Ar, "ms-").replace($r, function(a, s) {
      return s.toUpperCase();
    }) + "?")), n;
  };
}
var Re = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function G(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Re);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return k = {
          name: t.name,
          styles: t.styles,
          next: k
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            k = {
              name: n.name,
              styles: n.styles,
              next: k
            }, n = n.next;
        var a = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (a += t.map), a;
      }
      return Rr(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var s = k, i = t(e);
        return k = s, G(e, r, i);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var o = [], f = t.replace($e, function(c, h, v) {
          var C = "animation" + o.length;
          return o.push("const " + C + " = keyframes`" + v.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + C + "}";
        });
        o.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(o, ["`" + f + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + f + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var u = r[t];
  return u !== void 0 ? u : t;
}
function Rr(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var a = 0; a < t.length; a++)
      n += G(e, r, t[a]) + ";";
  else
    for (var s in t) {
      var i = t[s];
      if (typeof i != "object")
        r != null && r[i] !== void 0 ? n += s + "{" + r[i] + "}" : ge(i) && (n += re(s) + ":" + J(s, i) + ";");
      else {
        if (s === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Re);
        if (Array.isArray(i) && typeof i[0] == "string" && (r == null || r[i[0]] === void 0))
          for (var o = 0; o < i.length; o++)
            ge(i[o]) && (n += re(s) + ":" + J(s, i[o]) + ";");
        else {
          var f = G(e, r, i);
          switch (s) {
            case "animation":
            case "animationName": {
              n += re(s) + ":" + f + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && s === "undefined" && console.error(Sr), n += s + "{" + f + "}";
          }
        }
      }
    }
  return n;
}
var be = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Ie;
process.env.NODE_ENV !== "production" && (Ie = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var k, te = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var a = !0, s = "";
  k = void 0;
  var i = r[0];
  i == null || i.raw === void 0 ? (a = !1, s += G(n, t, i)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(ye), s += i[0]);
  for (var o = 1; o < r.length; o++)
    s += G(n, t, r[o]), a && (process.env.NODE_ENV !== "production" && i[o] === void 0 && console.error(ye), s += i[o]);
  var f;
  process.env.NODE_ENV !== "production" && (s = s.replace(Ie, function(v) {
    return f = v, "";
  })), be.lastIndex = 0;
  for (var u = "", c; (c = be.exec(s)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    c[1];
  var h = Er(s) + u;
  return process.env.NODE_ENV !== "production" ? {
    name: h,
    styles: s,
    map: f,
    next: k,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: h,
    styles: s,
    next: k
  };
}, Ir = !0;
function Ve(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(a) {
    e[a] !== void 0 ? r.push(e[a] + ";") : n += a + " ";
  }), n;
}
var Vr = function(r, t, n) {
  var a = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Ir === !1) && r.registered[a] === void 0 && (r.registered[a] = t.styles);
}, _r = function(r, t, n) {
  Vr(r, t, n);
  var a = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var s = t;
    do
      r.insert(t === s ? "." + a : "", s, r.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function we(e, r) {
  if (e.inserted[r.name] === void 0)
    return e.insert("", r, e.sheet, !0);
}
function Ee(e, r, t) {
  var n = [], a = Ve(e, n, t);
  return n.length < 2 ? t : a + r(n);
}
var Dr = function(r) {
  var t = wr(r);
  t.sheet.speedy = function(o) {
    if (process.env.NODE_ENV !== "production" && this.ctr !== 0)
      throw new Error("speedy must be changed before any rules are inserted");
    this.isSpeedy = o;
  }, t.compat = !0;
  var n = function() {
    for (var f = arguments.length, u = new Array(f), c = 0; c < f; c++)
      u[c] = arguments[c];
    var h = te(u, t.registered, void 0);
    return _r(t, h, !1), t.key + "-" + h.name;
  }, a = function() {
    for (var f = arguments.length, u = new Array(f), c = 0; c < f; c++)
      u[c] = arguments[c];
    var h = te(u, t.registered), v = "animation-" + h.name;
    return we(t, {
      name: h.name,
      styles: "@keyframes " + v + "{" + h.styles + "}"
    }), v;
  }, s = function() {
    for (var f = arguments.length, u = new Array(f), c = 0; c < f; c++)
      u[c] = arguments[c];
    var h = te(u, t.registered);
    we(t, h);
  }, i = function() {
    for (var f = arguments.length, u = new Array(f), c = 0; c < f; c++)
      u[c] = arguments[c];
    return Ee(t.registered, n, Pr(u));
  };
  return {
    css: n,
    cx: i,
    injectGlobal: s,
    keyframes: a,
    hydrate: function(f) {
      f.forEach(function(u) {
        t.inserted[u] = !0;
      });
    },
    flush: function() {
      t.registered = {}, t.inserted = {}, t.sheet.flush();
    },
    // $FlowFixMe
    sheet: t.sheet,
    cache: t,
    getRegisteredStyles: Ve.bind(null, t.registered),
    merge: Ee.bind(null, t.registered, n)
  };
}, Pr = function e(r) {
  for (var t = "", n = 0; n < r.length; n++) {
    var a = r[n];
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
      s && (t && (t += " "), t += s);
    }
  }
  return t;
}, _e = Dr({
  key: "css"
}), Tr = _e.cx, _ = _e.css;
function Mr() {
  const e = De("mythril-theme", {}), r = _(e.button.base), t = Tr(_([e.button.variant.solid]), _({ backgroundColor: "red" })), n = _(e.button.variant.outlined), a = _(e.button.variant.ghost), s = _(e.button.variant.text);
  return { baseStyle: r, solidStyle: t, outlinedStyle: n, ghostStyle: a, textStyle: s };
}
const jr = /* @__PURE__ */ Pe({
  __name: "MButton",
  props: {
    variant: { default: "solid" },
    label: { default: "" },
    loading: { type: Boolean }
  },
  setup(e) {
    const { baseStyle: r, outlinedStyle: t, solidStyle: n, ghostStyle: a, textStyle: s } = Mr();
    return (i, o) => (X(), ee("button", {
      class: Te([L(r), {
        [L(n)]: i.$props.variant === "solid",
        [L(t)]: i.$props.variant === "outlined",
        [L(a)]: i.$props.variant === "ghost",
        [L(s)]: i.$props.variant === "text"
      }])
    }, [
      i.loading ? (X(), ee(ue, { key: 1 }, [
        je(" Loading ")
      ], 64)) : (X(), ee(ue, { key: 0 }, [
        le(i.$slots, "start"),
        Me("span", null, Le(i.label), 1),
        le(i.$slots, "end")
      ], 64))
    ], 2));
  }
});
export {
  jr as MButton
};
