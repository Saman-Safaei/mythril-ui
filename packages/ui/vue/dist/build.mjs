import { defineComponent as rr, openBlock as $e, createElementBlock as We, normalizeClass as nr, unref as L, Fragment as gt, createTextVNode as Lr, renderSlot as Qe, createElementVNode as Jr, toDisplayString as Kr, inject as Zr, toRefs as Hr, computed as Qr, createBlock as Xr, resolveDynamicComponent as en, withCtx as tn } from "vue";
function rn(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function nn(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var on = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(nn(this));
    var n = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var o = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
      o && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + r + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !o;
    }
    if (this.isSpeedy) {
      var i = rn(n);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch (a) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(r) && console.error('There was a problem inserting the following rule: "' + r + '"', a);
      }
    } else
      n.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), C = "-ms-", Ne = "-moz-", b = "-webkit-", nt = "comm", ot = "rule", at = "decl", an = "@import", or = "@keyframes", sn = "@layer", cn = Math.abs, Pe = String.fromCharCode, un = Object.assign;
function ln(e, t) {
  return S(e, 0) ^ 45 ? (((t << 2 ^ S(e, 0)) << 2 ^ S(e, 1)) << 2 ^ S(e, 2)) << 2 ^ S(e, 3) : 0;
}
function ar(e) {
  return e.trim();
}
function fn(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function $(e, t, r) {
  return e.replace(t, r);
}
function Xe(e, t) {
  return e.indexOf(t);
}
function S(e, t) {
  return e.charCodeAt(t) | 0;
}
function ce(e, t, r) {
  return e.slice(t, r);
}
function q(e) {
  return e.length;
}
function it(e) {
  return e.length;
}
function ge(e, t) {
  return t.push(e), e;
}
function pn(e, t) {
  return e.map(t).join("");
}
var Ie = 1, Z = 1, ir = 0, P = 0, x = 0, Q = "";
function Ve(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Ie, column: Z, length: a, return: "" };
}
function ae(e, t) {
  return un(Ve("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function dn() {
  return x;
}
function hn() {
  return x = P > 0 ? S(Q, --P) : 0, Z--, x === 10 && (Z = 1, Ie--), x;
}
function V() {
  return x = P < ir ? S(Q, P++) : 0, Z++, x === 10 && (Z = 1, Ie++), x;
}
function F() {
  return S(Q, P);
}
function we() {
  return P;
}
function he(e, t) {
  return ce(Q, e, t);
}
function ue(e) {
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
function sr(e) {
  return Ie = Z = 1, ir = q(Q = e), P = 0, [];
}
function cr(e) {
  return Q = "", e;
}
function _e(e) {
  return ar(he(P - 1, et(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function vn(e) {
  for (; (x = F()) && x < 33; )
    V();
  return ue(e) > 2 || ue(x) > 3 ? "" : " ";
}
function yn(e, t) {
  for (; --t && V() && !(x < 48 || x > 102 || x > 57 && x < 65 || x > 70 && x < 97); )
    ;
  return he(e, we() + (t < 6 && F() == 32 && V() == 32));
}
function et(e) {
  for (; V(); )
    switch (x) {
      case e:
        return P;
      case 34:
      case 39:
        e !== 34 && e !== 39 && et(x);
        break;
      case 40:
        e === 41 && et(e);
        break;
      case 92:
        V();
        break;
    }
  return P;
}
function gn(e, t) {
  for (; V() && e + x !== 47 + 10 && !(e + x === 42 + 42 && F() === 47); )
    ;
  return "/*" + he(t, P - 1) + "*" + Pe(e === 47 ? e : V());
}
function bn(e) {
  for (; !ue(F()); )
    V();
  return he(e, P);
}
function mn(e) {
  return cr(ke("", null, null, null, [""], e = sr(e), 0, [0], e));
}
function ke(e, t, r, n, o, i, a, s, c) {
  for (var u = 0, f = 0, p = a, y = 0, v = 0, l = 0, h = 1, k = 1, _ = 1, g = 0, j = "", Y = o, z = i, E = n, d = j; k; )
    switch (l = g, g = V()) {
      case 40:
        if (l != 108 && S(d, p - 1) == 58) {
          Xe(d += $(_e(g), "&", "&\f"), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        d += _e(g);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        d += vn(l);
        break;
      case 92:
        d += yn(we() - 1, 7);
        continue;
      case 47:
        switch (F()) {
          case 42:
          case 47:
            ge($n(gn(V(), we()), t, r), c);
            break;
          default:
            d += "/";
        }
        break;
      case 123 * h:
        s[u++] = q(d) * _;
      case 125 * h:
      case 59:
      case 0:
        switch (g) {
          case 0:
          case 125:
            k = 0;
          case 59 + f:
            _ == -1 && (d = $(d, /\f/g, "")), v > 0 && q(d) - p && ge(v > 32 ? mt(d + ";", n, r, p - 1) : mt($(d, " ", "") + ";", n, r, p - 2), c);
            break;
          case 59:
            d += ";";
          default:
            if (ge(E = bt(d, t, r, u, f, o, s, j, Y = [], z = [], p), i), g === 123)
              if (f === 0)
                ke(d, t, E, E, Y, i, p, s, z);
              else
                switch (y === 99 && S(d, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ke(e, E, E, n && ge(bt(e, E, E, 0, 0, o, s, j, o, Y = [], p), z), o, z, p, s, n ? Y : z);
                    break;
                  default:
                    ke(d, E, E, E, [""], z, 0, s, z);
                }
        }
        u = f = v = 0, h = _ = 1, j = d = "", p = a;
        break;
      case 58:
        p = 1 + q(d), v = l;
      default:
        if (h < 1) {
          if (g == 123)
            --h;
          else if (g == 125 && h++ == 0 && hn() == 125)
            continue;
        }
        switch (d += Pe(g), g * h) {
          case 38:
            _ = f > 0 ? 1 : (d += "\f", -1);
            break;
          case 44:
            s[u++] = (q(d) - 1) * _, _ = 1;
            break;
          case 64:
            F() === 45 && (d += _e(V())), y = F(), f = p = q(j = d += bn(we())), g++;
            break;
          case 45:
            l === 45 && q(d) == 2 && (h = 0);
        }
    }
  return i;
}
function bt(e, t, r, n, o, i, a, s, c, u, f) {
  for (var p = o - 1, y = o === 0 ? i : [""], v = it(y), l = 0, h = 0, k = 0; l < n; ++l)
    for (var _ = 0, g = ce(e, p + 1, p = cn(h = a[l])), j = e; _ < v; ++_)
      (j = ar(h > 0 ? y[_] + " " + g : $(g, /&\f/g, y[_]))) && (c[k++] = j);
  return Ve(e, t, r, o === 0 ? ot : s, c, u, f);
}
function $n(e, t, r) {
  return Ve(e, t, r, nt, Pe(dn()), ce(e, 2, -2), 0);
}
function mt(e, t, r, n) {
  return Ve(e, t, r, at, ce(e, 0, n), ce(e, n + 1, -1), n);
}
function J(e, t) {
  for (var r = "", n = it(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function wn(e, t, r, n) {
  switch (e.type) {
    case sn:
      if (e.children.length)
        break;
    case an:
    case at:
      return e.return = e.return || e.value;
    case nt:
      return "";
    case or:
      return e.return = e.value + "{" + J(e.children, n) + "}";
    case ot:
      e.value = e.props.join(",");
  }
  return q(r = J(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function _n(e) {
  var t = it(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function kn(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function On(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var En = function(e, t, r) {
  for (var n = 0, o = 0; n = o, o = F(), n === 38 && o === 12 && (t[r] = 1), !ue(o); )
    V();
  return he(e, P);
}, xn = function(e, t) {
  var r = -1, n = 44;
  do
    switch (ue(n)) {
      case 0:
        n === 38 && F() === 12 && (t[r] = 1), e[r] += En(P - 1, t, r);
        break;
      case 2:
        e[r] += _e(n);
        break;
      case 4:
        if (n === 44) {
          e[++r] = F() === 58 ? "&\f" : "", t[r] = e[r].length;
          break;
        }
      default:
        e[r] += Pe(n);
    }
  while (n = V());
  return e;
}, Nn = function(e, t) {
  return cr(xn(sr(e), t));
}, $t = /* @__PURE__ */ new WeakMap(), jn = function(e) {
  if (!(e.type !== "rule" || !e.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  e.length < 1)) {
    for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !$t.get(r)) && !n) {
      $t.set(e, !0);
      for (var o = [], i = Nn(t, o), a = r.props, s = 0, c = 0; s < i.length; s++)
        for (var u = 0; u < a.length; u++, c++)
          e.props[c] = o[s] ? i[s].replace(/&\f/g, a[u]) : a[u] + " " + i[s];
    }
  }
}, Sn = function(e) {
  if (e.type === "decl") {
    var t = e.value;
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
}, An = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Cn = function(e) {
  return e.type === "comm" && e.children.indexOf(An) > -1;
}, Dn = function(e) {
  return function(t, r, n) {
    if (!(t.type !== "rule" || e.compat)) {
      var o = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (o) {
        for (var i = !!t.parent, a = i ? t.parent.children : (
          // global rule at the root level
          n
        ), s = a.length - 1; s >= 0; s--) {
          var c = a[s];
          if (c.line < t.line)
            break;
          if (c.column < t.column) {
            if (Cn(c))
              return;
            break;
          }
        }
        o.forEach(function(u) {
          console.error('The pseudo class "' + u + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + u.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, ur = function(e) {
  return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
}, zn = function(e, t) {
  for (var r = e - 1; r >= 0; r--)
    if (!ur(t[r]))
      return !0;
  return !1;
}, wt = function(e) {
  e.type = "", e.value = "", e.return = "", e.children = "", e.props = "";
}, Pn = function(e, t, r) {
  ur(e) && (e.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), wt(e)) : zn(t, r) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), wt(e)));
};
function lr(e, t) {
  switch (ln(e, t)) {
    case 5103:
      return b + "print-" + e + e;
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
      return b + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return b + e + Ne + e + C + e + e;
    case 6828:
    case 4268:
      return b + e + C + e + e;
    case 6165:
      return b + e + C + "flex-" + e + e;
    case 5187:
      return b + e + $(e, /(\w+).+(:[^]+)/, b + "box-$1$2" + C + "flex-$1$2") + e;
    case 5443:
      return b + e + C + "flex-item-" + $(e, /flex-|-self/, "") + e;
    case 4675:
      return b + e + C + "flex-line-pack" + $(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return b + e + C + $(e, "shrink", "negative") + e;
    case 5292:
      return b + e + C + $(e, "basis", "preferred-size") + e;
    case 6060:
      return b + "box-" + $(e, "-grow", "") + b + e + C + $(e, "grow", "positive") + e;
    case 4554:
      return b + $(e, /([^-])(transform)/g, "$1" + b + "$2") + e;
    case 6187:
      return $($($(e, /(zoom-|grab)/, b + "$1"), /(image-set)/, b + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return $(e, /(image-set\([^]*)/, b + "$1$`$1");
    case 4968:
      return $($(e, /(.+:)(flex-)?(.*)/, b + "box-pack:$3" + C + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + b + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return $(e, /(.+)-inline(.+)/, b + "$1$2") + e;
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
      if (q(e) - 1 - t > 6)
        switch (S(e, t + 1)) {
          case 109:
            if (S(e, t + 4) !== 45)
              break;
          case 102:
            return $(e, /(.+:)(.+)-([^]+)/, "$1" + b + "$2-$3$1" + Ne + (S(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Xe(e, "stretch") ? lr($(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (S(e, t + 1) !== 115)
        break;
    case 6444:
      switch (S(e, q(e) - 3 - (~Xe(e, "!important") && 10))) {
        case 107:
          return $(e, ":", ":" + b) + e;
        case 101:
          return $(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + b + (S(e, 14) === 45 ? "inline-" : "") + "box$3$1" + b + "$2$3$1" + C + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (S(e, t + 11)) {
        case 114:
          return b + e + C + $(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return b + e + C + $(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return b + e + C + $(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return b + e + C + e + e;
  }
  return e;
}
var In = function(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case at:
        e.return = lr(e.value, e.length);
        break;
      case or:
        return J([ae(e, {
          value: $(e.value, "@", "@" + b)
        })], n);
      case ot:
        if (e.length)
          return pn(e.props, function(o) {
            switch (fn(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return J([ae(e, {
                  props: [$(o, /:(read-\w+)/, ":" + Ne + "$1")]
                })], n);
              case "::placeholder":
                return J([ae(e, {
                  props: [$(o, /:(plac\w+)/, ":" + b + "input-$1")]
                }), ae(e, {
                  props: [$(o, /:(plac\w+)/, ":" + Ne + "$1")]
                }), ae(e, {
                  props: [$(o, /:(plac\w+)/, C + "input-$1")]
                })], n);
            }
            return "";
          });
    }
}, Vn = [In], Tn = function(e) {
  var t = e.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(l) {
      var h = l.getAttribute("data-emotion");
      h.indexOf(" ") !== -1 && (document.head.appendChild(l), l.setAttribute("data-s", ""));
    });
  }
  var n = e.stylisPlugins || Vn;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var o = {}, i, a = [];
  i = e.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(l) {
      for (var h = l.getAttribute("data-emotion").split(" "), k = 1; k < h.length; k++)
        o[h[k]] = !0;
      a.push(l);
    }
  );
  var s, c = [jn, Sn];
  process.env.NODE_ENV !== "production" && c.push(Dn({
    get compat() {
      return v.compat;
    }
  }), Pn);
  {
    var u, f = [wn, process.env.NODE_ENV !== "production" ? function(l) {
      l.root || (l.return ? u.insert(l.return) : l.value && l.type !== nt && u.insert(l.value + "{}"));
    } : kn(function(l) {
      u.insert(l);
    })], p = _n(c.concat(n, f)), y = function(l) {
      return J(mn(l), p);
    };
    s = function(l, h, k, _) {
      u = k, process.env.NODE_ENV !== "production" && h.map !== void 0 && (u = {
        insert: function(g) {
          k.insert(g + h.map);
        }
      }), y(l ? l + "{" + h.styles + "}" : h.styles), _ && (v.inserted[h.name] = !0);
    };
  }
  var v = {
    key: t,
    sheet: new on({
      key: t,
      container: i,
      nonce: e.nonce,
      speedy: e.speedy,
      prepend: e.prepend,
      insertionPoint: e.insertionPoint
    }),
    nonce: e.nonce,
    inserted: o,
    registered: {},
    insert: s
  };
  return v.sheet.hydrate(a), v;
};
function Rn(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Mn = {
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
}, _t = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, qn = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Bn = /[A-Z]|^ms/g, fr = /_EMO_([^_]+?)_([^]*?)_EMO_/g, st = function(e) {
  return e.charCodeAt(1) === 45;
}, kt = function(e) {
  return e != null && typeof e != "boolean";
}, Le = /* @__PURE__ */ On(function(e) {
  return st(e) ? e : e.replace(Bn, "-$&").toLowerCase();
}), je = function(e, t) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(fr, function(r, n, o) {
          return R = {
            name: n,
            styles: o,
            next: R
          }, n;
        });
  }
  return Mn[e] !== 1 && !st(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var Fn = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Gn = ["normal", "none", "initial", "inherit", "unset"], Yn = je, Un = /^-ms-/, Wn = /-(.)/g, Ot = {};
  je = function(e, t) {
    if (e === "content" && (typeof t != "string" || Gn.indexOf(t) === -1 && !Fn.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var r = Yn(e, t);
    return r !== "" && !st(e) && e.indexOf("-") !== -1 && Ot[e] === void 0 && (Ot[e] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + e.replace(Un, "ms-").replace(Wn, function(n, o) {
      return o.toUpperCase();
    }) + "?")), r;
  };
}
var pr = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function le(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(pr);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return R = {
          name: r.name,
          styles: r.styles,
          next: R
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            R = {
              name: n.name,
              styles: n.styles,
              next: R
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return Ln(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = R, a = r(e);
        return R = i, le(e, t, a);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], c = r.replace(fr, function(f, p, y) {
          var v = "animation" + s.length;
          return s.push("const " + v + " = keyframes`" + y.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + v + "}";
        });
        s.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(s, ["`" + c + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + c + "`"));
      }
      break;
  }
  if (t == null)
    return r;
  var u = t[r];
  return u !== void 0 ? u : r;
}
function Ln(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += le(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : kt(a) && (n += Le(i) + ":" + je(i, a) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(pr);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var s = 0; s < a.length; s++)
            kt(a[s]) && (n += Le(i) + ":" + je(i, a[s]) + ";");
        else {
          var c = le(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Le(i) + ":" + c + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(qn), n += i + "{" + c + "}";
          }
        }
      }
    }
  return n;
}
var Et = /label:\s*([^\s;\n{]+)\s*(;|$)/g, dr;
process.env.NODE_ENV !== "production" && (dr = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var R, Je = function(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  R = void 0;
  var i = e[0];
  i == null || i.raw === void 0 ? (n = !1, o += le(r, t, i)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(_t), o += i[0]);
  for (var a = 1; a < e.length; a++)
    o += le(r, t, e[a]), n && (process.env.NODE_ENV !== "production" && i[a] === void 0 && console.error(_t), o += i[a]);
  var s;
  process.env.NODE_ENV !== "production" && (o = o.replace(dr, function(p) {
    return s = p, "";
  })), Et.lastIndex = 0;
  for (var c = "", u; (u = Et.exec(o)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var f = Rn(o) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: f,
    styles: o,
    map: s,
    next: R,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: f,
    styles: o,
    next: R
  };
}, Jn = !0;
function hr(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Kn = function(e, t, r) {
  var n = e.key + "-" + t.name;
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Jn === !1) && e.registered[n] === void 0 && (e.registered[n] = t.styles);
}, Zn = function(e, t, r) {
  Kn(e, t, r);
  var n = e.key + "-" + t.name;
  if (e.inserted[t.name] === void 0) {
    var o = t;
    do
      e.insert(t === o ? "." + n : "", o, e.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function xt(e, t) {
  if (e.inserted[t.name] === void 0)
    return e.insert("", t, e.sheet, !0);
}
function Nt(e, t, r) {
  var n = [], o = hr(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var Hn = function(e) {
  var t = Tn(e);
  t.sheet.speedy = function(a) {
    if (process.env.NODE_ENV !== "production" && this.ctr !== 0)
      throw new Error("speedy must be changed before any rules are inserted");
    this.isSpeedy = a;
  }, t.compat = !0;
  var r = function() {
    for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++)
      s[c] = arguments[c];
    var u = Je(s, t.registered, void 0);
    return Zn(t, u, !1), t.key + "-" + u.name;
  }, n = function() {
    for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++)
      s[c] = arguments[c];
    var u = Je(s, t.registered), f = "animation-" + u.name;
    return xt(t, {
      name: u.name,
      styles: "@keyframes " + f + "{" + u.styles + "}"
    }), f;
  }, o = function() {
    for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++)
      s[c] = arguments[c];
    var u = Je(s, t.registered);
    xt(t, u);
  }, i = function() {
    for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++)
      s[c] = arguments[c];
    return Nt(t.registered, r, Qn(s));
  };
  return {
    css: r,
    cx: i,
    injectGlobal: o,
    keyframes: n,
    hydrate: function(a) {
      a.forEach(function(s) {
        t.inserted[s] = !0;
      });
    },
    flush: function() {
      t.registered = {}, t.inserted = {}, t.sheet.flush();
    },
    // $FlowFixMe
    sheet: t.sheet,
    cache: t,
    getRegisteredStyles: hr.bind(null, t.registered),
    merge: Nt.bind(null, t.registered, r)
  };
}, Qn = function e(t) {
  for (var r = "", n = 0; n < t.length; n++) {
    var o = t[n];
    if (o != null) {
      var i = void 0;
      switch (typeof o) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(o))
            i = e(o);
          else {
            i = "";
            for (var a in o)
              o[a] && a && (i && (i += " "), i += a);
          }
          break;
        }
        default:
          i = o;
      }
      i && (r && (r += " "), r += i);
    }
  }
  return r;
}, vr = Hn({
  key: "css"
}), Xn = vr.cx, W = vr.css;
function eo() {
  const e = Zr("mythril-theme", {}), t = W(e.button.base), r = Xn(W([e.button.variant.solid]), W({ backgroundColor: "red" })), n = W(e.button.variant.outlined), o = W(e.button.variant.ghost), i = W(e.button.variant.text);
  return { baseStyle: t, solidStyle: r, outlinedStyle: n, ghostStyle: o, textStyle: i };
}
const Yf = /* @__PURE__ */ rr({
  __name: "MButton",
  props: {
    variant: { default: "solid" },
    label: { default: "" },
    loading: { type: Boolean }
  },
  setup(e) {
    const { baseStyle: t, outlinedStyle: r, solidStyle: n, ghostStyle: o, textStyle: i } = eo();
    return (a, s) => ($e(), We("button", {
      class: nr([L(t), {
        [L(n)]: a.$props.variant === "solid",
        [L(r)]: a.$props.variant === "outlined",
        [L(o)]: a.$props.variant === "ghost",
        [L(i)]: a.$props.variant === "text"
      }])
    }, [
      a.loading ? ($e(), We(gt, { key: 1 }, [
        Lr(" Loading ")
      ], 64)) : ($e(), We(gt, { key: 0 }, [
        Qe(a.$slots, "start"),
        Jr("span", null, Kr(a.label), 1),
        Qe(a.$slots, "end")
      ], 64))
    ], 2));
  }
});
function to(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ro(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var no = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ro(this));
    var n = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var o = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
      o && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + r + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !o;
    }
    if (this.isSpeedy) {
      var i = to(n);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch (a) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(r) && console.error('There was a problem inserting the following rule: "' + r + '"', a);
      }
    } else
      n.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), D = "-ms-", Se = "-moz-", m = "-webkit-", ct = "comm", ut = "rule", lt = "decl", oo = "@import", yr = "@keyframes", ao = "@layer", io = Math.abs, Te = String.fromCharCode, so = Object.assign;
function co(e, t) {
  return A(e, 0) ^ 45 ? (((t << 2 ^ A(e, 0)) << 2 ^ A(e, 1)) << 2 ^ A(e, 2)) << 2 ^ A(e, 3) : 0;
}
function gr(e) {
  return e.trim();
}
function uo(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function w(e, t, r) {
  return e.replace(t, r);
}
function tt(e, t) {
  return e.indexOf(t);
}
function A(e, t) {
  return e.charCodeAt(t) | 0;
}
function fe(e, t, r) {
  return e.slice(t, r);
}
function B(e) {
  return e.length;
}
function ft(e) {
  return e.length;
}
function be(e, t) {
  return t.push(e), e;
}
function lo(e, t) {
  return e.map(t).join("");
}
var Re = 1, H = 1, br = 0, I = 0, N = 0, X = "";
function Me(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Re, column: H, length: a, return: "" };
}
function ie(e, t) {
  return so(Me("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function fo() {
  return N;
}
function po() {
  return N = I > 0 ? A(X, --I) : 0, H--, N === 10 && (H = 1, Re--), N;
}
function T() {
  return N = I < br ? A(X, I++) : 0, H++, N === 10 && (H = 1, Re++), N;
}
function G() {
  return A(X, I);
}
function Oe() {
  return I;
}
function ve(e, t) {
  return fe(X, e, t);
}
function pe(e) {
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
function mr(e) {
  return Re = H = 1, br = B(X = e), I = 0, [];
}
function $r(e) {
  return X = "", e;
}
function Ee(e) {
  return gr(ve(I - 1, rt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ho(e) {
  for (; (N = G()) && N < 33; )
    T();
  return pe(e) > 2 || pe(N) > 3 ? "" : " ";
}
function vo(e, t) {
  for (; --t && T() && !(N < 48 || N > 102 || N > 57 && N < 65 || N > 70 && N < 97); )
    ;
  return ve(e, Oe() + (t < 6 && G() == 32 && T() == 32));
}
function rt(e) {
  for (; T(); )
    switch (N) {
      case e:
        return I;
      case 34:
      case 39:
        e !== 34 && e !== 39 && rt(N);
        break;
      case 40:
        e === 41 && rt(e);
        break;
      case 92:
        T();
        break;
    }
  return I;
}
function yo(e, t) {
  for (; T() && e + N !== 47 + 10 && !(e + N === 42 + 42 && G() === 47); )
    ;
  return "/*" + ve(t, I - 1) + "*" + Te(e === 47 ? e : T());
}
function go(e) {
  for (; !pe(G()); )
    T();
  return ve(e, I);
}
function bo(e) {
  return $r(xe("", null, null, null, [""], e = mr(e), 0, [0], e));
}
function xe(e, t, r, n, o, i, a, s, c) {
  for (var u = 0, f = 0, p = a, y = 0, v = 0, l = 0, h = 1, k = 1, _ = 1, g = 0, j = "", Y = o, z = i, E = n, d = j; k; )
    switch (l = g, g = T()) {
      case 40:
        if (l != 108 && A(d, p - 1) == 58) {
          tt(d += w(Ee(g), "&", "&\f"), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        d += Ee(g);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        d += ho(l);
        break;
      case 92:
        d += vo(Oe() - 1, 7);
        continue;
      case 47:
        switch (G()) {
          case 42:
          case 47:
            be(mo(yo(T(), Oe()), t, r), c);
            break;
          default:
            d += "/";
        }
        break;
      case 123 * h:
        s[u++] = B(d) * _;
      case 125 * h:
      case 59:
      case 0:
        switch (g) {
          case 0:
          case 125:
            k = 0;
          case 59 + f:
            _ == -1 && (d = w(d, /\f/g, "")), v > 0 && B(d) - p && be(v > 32 ? St(d + ";", n, r, p - 1) : St(w(d, " ", "") + ";", n, r, p - 2), c);
            break;
          case 59:
            d += ";";
          default:
            if (be(E = jt(d, t, r, u, f, o, s, j, Y = [], z = [], p), i), g === 123)
              if (f === 0)
                xe(d, t, E, E, Y, i, p, s, z);
              else
                switch (y === 99 && A(d, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    xe(e, E, E, n && be(jt(e, E, E, 0, 0, o, s, j, o, Y = [], p), z), o, z, p, s, n ? Y : z);
                    break;
                  default:
                    xe(d, E, E, E, [""], z, 0, s, z);
                }
        }
        u = f = v = 0, h = _ = 1, j = d = "", p = a;
        break;
      case 58:
        p = 1 + B(d), v = l;
      default:
        if (h < 1) {
          if (g == 123)
            --h;
          else if (g == 125 && h++ == 0 && po() == 125)
            continue;
        }
        switch (d += Te(g), g * h) {
          case 38:
            _ = f > 0 ? 1 : (d += "\f", -1);
            break;
          case 44:
            s[u++] = (B(d) - 1) * _, _ = 1;
            break;
          case 64:
            G() === 45 && (d += Ee(T())), y = G(), f = p = B(j = d += go(Oe())), g++;
            break;
          case 45:
            l === 45 && B(d) == 2 && (h = 0);
        }
    }
  return i;
}
function jt(e, t, r, n, o, i, a, s, c, u, f) {
  for (var p = o - 1, y = o === 0 ? i : [""], v = ft(y), l = 0, h = 0, k = 0; l < n; ++l)
    for (var _ = 0, g = fe(e, p + 1, p = io(h = a[l])), j = e; _ < v; ++_)
      (j = gr(h > 0 ? y[_] + " " + g : w(g, /&\f/g, y[_]))) && (c[k++] = j);
  return Me(e, t, r, o === 0 ? ut : s, c, u, f);
}
function mo(e, t, r) {
  return Me(e, t, r, ct, Te(fo()), fe(e, 2, -2), 0);
}
function St(e, t, r, n) {
  return Me(e, t, r, lt, fe(e, 0, n), fe(e, n + 1, -1), n);
}
function K(e, t) {
  for (var r = "", n = ft(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function $o(e, t, r, n) {
  switch (e.type) {
    case ao:
      if (e.children.length)
        break;
    case oo:
    case lt:
      return e.return = e.return || e.value;
    case ct:
      return "";
    case yr:
      return e.return = e.value + "{" + K(e.children, n) + "}";
    case ut:
      e.value = e.props.join(",");
  }
  return B(r = K(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function wo(e) {
  var t = ft(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function _o(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function ko(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Oo = function(e, t, r) {
  for (var n = 0, o = 0; n = o, o = G(), n === 38 && o === 12 && (t[r] = 1), !pe(o); )
    T();
  return ve(e, I);
}, Eo = function(e, t) {
  var r = -1, n = 44;
  do
    switch (pe(n)) {
      case 0:
        n === 38 && G() === 12 && (t[r] = 1), e[r] += Oo(I - 1, t, r);
        break;
      case 2:
        e[r] += Ee(n);
        break;
      case 4:
        if (n === 44) {
          e[++r] = G() === 58 ? "&\f" : "", t[r] = e[r].length;
          break;
        }
      default:
        e[r] += Te(n);
    }
  while (n = T());
  return e;
}, xo = function(e, t) {
  return $r(Eo(mr(e), t));
}, At = /* @__PURE__ */ new WeakMap(), No = function(e) {
  if (!(e.type !== "rule" || !e.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  e.length < 1)) {
    for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !At.get(r)) && !n) {
      At.set(e, !0);
      for (var o = [], i = xo(t, o), a = r.props, s = 0, c = 0; s < i.length; s++)
        for (var u = 0; u < a.length; u++, c++)
          e.props[c] = o[s] ? i[s].replace(/&\f/g, a[u]) : a[u] + " " + i[s];
    }
  }
}, jo = function(e) {
  if (e.type === "decl") {
    var t = e.value;
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
}, So = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Ao = function(e) {
  return e.type === "comm" && e.children.indexOf(So) > -1;
}, Co = function(e) {
  return function(t, r, n) {
    if (!(t.type !== "rule" || e.compat)) {
      var o = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (o) {
        for (var i = !!t.parent, a = i ? t.parent.children : (
          // global rule at the root level
          n
        ), s = a.length - 1; s >= 0; s--) {
          var c = a[s];
          if (c.line < t.line)
            break;
          if (c.column < t.column) {
            if (Ao(c))
              return;
            break;
          }
        }
        o.forEach(function(u) {
          console.error('The pseudo class "' + u + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + u.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, wr = function(e) {
  return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
}, Do = function(e, t) {
  for (var r = e - 1; r >= 0; r--)
    if (!wr(t[r]))
      return !0;
  return !1;
}, Ct = function(e) {
  e.type = "", e.value = "", e.return = "", e.children = "", e.props = "";
}, zo = function(e, t, r) {
  wr(e) && (e.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Ct(e)) : Do(t, r) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Ct(e)));
};
function _r(e, t) {
  switch (co(e, t)) {
    case 5103:
      return m + "print-" + e + e;
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
      return m + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return m + e + Se + e + D + e + e;
    case 6828:
    case 4268:
      return m + e + D + e + e;
    case 6165:
      return m + e + D + "flex-" + e + e;
    case 5187:
      return m + e + w(e, /(\w+).+(:[^]+)/, m + "box-$1$2" + D + "flex-$1$2") + e;
    case 5443:
      return m + e + D + "flex-item-" + w(e, /flex-|-self/, "") + e;
    case 4675:
      return m + e + D + "flex-line-pack" + w(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return m + e + D + w(e, "shrink", "negative") + e;
    case 5292:
      return m + e + D + w(e, "basis", "preferred-size") + e;
    case 6060:
      return m + "box-" + w(e, "-grow", "") + m + e + D + w(e, "grow", "positive") + e;
    case 4554:
      return m + w(e, /([^-])(transform)/g, "$1" + m + "$2") + e;
    case 6187:
      return w(w(w(e, /(zoom-|grab)/, m + "$1"), /(image-set)/, m + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return w(e, /(image-set\([^]*)/, m + "$1$`$1");
    case 4968:
      return w(w(e, /(.+:)(flex-)?(.*)/, m + "box-pack:$3" + D + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + m + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return w(e, /(.+)-inline(.+)/, m + "$1$2") + e;
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
      if (B(e) - 1 - t > 6)
        switch (A(e, t + 1)) {
          case 109:
            if (A(e, t + 4) !== 45)
              break;
          case 102:
            return w(e, /(.+:)(.+)-([^]+)/, "$1" + m + "$2-$3$1" + Se + (A(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~tt(e, "stretch") ? _r(w(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (A(e, t + 1) !== 115)
        break;
    case 6444:
      switch (A(e, B(e) - 3 - (~tt(e, "!important") && 10))) {
        case 107:
          return w(e, ":", ":" + m) + e;
        case 101:
          return w(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + m + (A(e, 14) === 45 ? "inline-" : "") + "box$3$1" + m + "$2$3$1" + D + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (A(e, t + 11)) {
        case 114:
          return m + e + D + w(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return m + e + D + w(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return m + e + D + w(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return m + e + D + e + e;
  }
  return e;
}
var Po = function(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case lt:
        e.return = _r(e.value, e.length);
        break;
      case yr:
        return K([ie(e, {
          value: w(e.value, "@", "@" + m)
        })], n);
      case ut:
        if (e.length)
          return lo(e.props, function(o) {
            switch (uo(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return K([ie(e, {
                  props: [w(o, /:(read-\w+)/, ":" + Se + "$1")]
                })], n);
              case "::placeholder":
                return K([ie(e, {
                  props: [w(o, /:(plac\w+)/, ":" + m + "input-$1")]
                }), ie(e, {
                  props: [w(o, /:(plac\w+)/, ":" + Se + "$1")]
                }), ie(e, {
                  props: [w(o, /:(plac\w+)/, D + "input-$1")]
                })], n);
            }
            return "";
          });
    }
}, Io = [Po], Vo = function(e) {
  var t = e.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(l) {
      var h = l.getAttribute("data-emotion");
      h.indexOf(" ") !== -1 && (document.head.appendChild(l), l.setAttribute("data-s", ""));
    });
  }
  var n = e.stylisPlugins || Io;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var o = {}, i, a = [];
  i = e.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(l) {
      for (var h = l.getAttribute("data-emotion").split(" "), k = 1; k < h.length; k++)
        o[h[k]] = !0;
      a.push(l);
    }
  );
  var s, c = [No, jo];
  process.env.NODE_ENV !== "production" && c.push(Co({
    get compat() {
      return v.compat;
    }
  }), zo);
  {
    var u, f = [$o, process.env.NODE_ENV !== "production" ? function(l) {
      l.root || (l.return ? u.insert(l.return) : l.value && l.type !== ct && u.insert(l.value + "{}"));
    } : _o(function(l) {
      u.insert(l);
    })], p = wo(c.concat(n, f)), y = function(l) {
      return K(bo(l), p);
    };
    s = function(l, h, k, _) {
      u = k, process.env.NODE_ENV !== "production" && h.map !== void 0 && (u = {
        insert: function(g) {
          k.insert(g + h.map);
        }
      }), y(l ? l + "{" + h.styles + "}" : h.styles), _ && (v.inserted[h.name] = !0);
    };
  }
  var v = {
    key: t,
    sheet: new no({
      key: t,
      container: i,
      nonce: e.nonce,
      speedy: e.speedy,
      prepend: e.prepend,
      insertionPoint: e.insertionPoint
    }),
    nonce: e.nonce,
    inserted: o,
    registered: {},
    insert: s
  };
  return v.sheet.hydrate(a), v;
};
function To(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Ro = {
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
}, Dt = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Mo = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", qo = /[A-Z]|^ms/g, kr = /_EMO_([^_]+?)_([^]*?)_EMO_/g, pt = function(e) {
  return e.charCodeAt(1) === 45;
}, zt = function(e) {
  return e != null && typeof e != "boolean";
}, Ke = /* @__PURE__ */ ko(function(e) {
  return pt(e) ? e : e.replace(qo, "-$&").toLowerCase();
}), Ae = function(e, t) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(kr, function(r, n, o) {
          return M = {
            name: n,
            styles: o,
            next: M
          }, n;
        });
  }
  return Ro[e] !== 1 && !pt(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var Bo = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Fo = ["normal", "none", "initial", "inherit", "unset"], Go = Ae, Yo = /^-ms-/, Uo = /-(.)/g, Pt = {};
  Ae = function(e, t) {
    if (e === "content" && (typeof t != "string" || Fo.indexOf(t) === -1 && !Bo.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var r = Go(e, t);
    return r !== "" && !pt(e) && e.indexOf("-") !== -1 && Pt[e] === void 0 && (Pt[e] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + e.replace(Yo, "ms-").replace(Uo, function(n, o) {
      return o.toUpperCase();
    }) + "?")), r;
  };
}
var Or = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function de(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Or);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return M = {
          name: r.name,
          styles: r.styles,
          next: M
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            M = {
              name: n.name,
              styles: n.styles,
              next: M
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return Wo(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = M, a = r(e);
        return M = i, de(e, t, a);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], c = r.replace(kr, function(f, p, y) {
          var v = "animation" + s.length;
          return s.push("const " + v + " = keyframes`" + y.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + v + "}";
        });
        s.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(s, ["`" + c + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + c + "`"));
      }
      break;
  }
  if (t == null)
    return r;
  var u = t[r];
  return u !== void 0 ? u : r;
}
function Wo(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += de(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : zt(a) && (n += Ke(i) + ":" + Ae(i, a) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Or);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var s = 0; s < a.length; s++)
            zt(a[s]) && (n += Ke(i) + ":" + Ae(i, a[s]) + ";");
        else {
          var c = de(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Ke(i) + ":" + c + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(Mo), n += i + "{" + c + "}";
          }
        }
      }
    }
  return n;
}
var It = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Er;
process.env.NODE_ENV !== "production" && (Er = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var M, Ze = function(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  M = void 0;
  var i = e[0];
  i == null || i.raw === void 0 ? (n = !1, o += de(r, t, i)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(Dt), o += i[0]);
  for (var a = 1; a < e.length; a++)
    o += de(r, t, e[a]), n && (process.env.NODE_ENV !== "production" && i[a] === void 0 && console.error(Dt), o += i[a]);
  var s;
  process.env.NODE_ENV !== "production" && (o = o.replace(Er, function(p) {
    return s = p, "";
  })), It.lastIndex = 0;
  for (var c = "", u; (u = It.exec(o)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var f = To(o) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: f,
    styles: o,
    map: s,
    next: M,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: f,
    styles: o,
    next: M
  };
}, Lo = !0;
function xr(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Jo = function(e, t, r) {
  var n = e.key + "-" + t.name;
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Lo === !1) && e.registered[n] === void 0 && (e.registered[n] = t.styles);
}, Ko = function(e, t, r) {
  Jo(e, t, r);
  var n = e.key + "-" + t.name;
  if (e.inserted[t.name] === void 0) {
    var o = t;
    do
      e.insert(t === o ? "." + n : "", o, e.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function Vt(e, t) {
  if (e.inserted[t.name] === void 0)
    return e.insert("", t, e.sheet, !0);
}
function Tt(e, t, r) {
  var n = [], o = xr(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var Zo = function(e) {
  var t = Vo(e);
  t.sheet.speedy = function(a) {
    if (process.env.NODE_ENV !== "production" && this.ctr !== 0)
      throw new Error("speedy must be changed before any rules are inserted");
    this.isSpeedy = a;
  }, t.compat = !0;
  var r = function() {
    for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++)
      s[c] = arguments[c];
    var u = Ze(s, t.registered, void 0);
    return Ko(t, u, !1), t.key + "-" + u.name;
  }, n = function() {
    for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++)
      s[c] = arguments[c];
    var u = Ze(s, t.registered), f = "animation-" + u.name;
    return Vt(t, {
      name: u.name,
      styles: "@keyframes " + f + "{" + u.styles + "}"
    }), f;
  }, o = function() {
    for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++)
      s[c] = arguments[c];
    var u = Ze(s, t.registered);
    Vt(t, u);
  }, i = function() {
    for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++)
      s[c] = arguments[c];
    return Tt(t.registered, r, Ho(s));
  };
  return {
    css: r,
    cx: i,
    injectGlobal: o,
    keyframes: n,
    hydrate: function(a) {
      a.forEach(function(s) {
        t.inserted[s] = !0;
      });
    },
    flush: function() {
      t.registered = {}, t.inserted = {}, t.sheet.flush();
    },
    // $FlowFixMe
    sheet: t.sheet,
    cache: t,
    getRegisteredStyles: xr.bind(null, t.registered),
    merge: Tt.bind(null, t.registered, r)
  };
}, Ho = function e(t) {
  for (var r = "", n = 0; n < t.length; n++) {
    var o = t[n];
    if (o != null) {
      var i = void 0;
      switch (typeof o) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(o))
            i = e(o);
          else {
            i = "";
            for (var a in o)
              o[a] && a && (i && (i += " "), i += a);
          }
          break;
        }
        default:
          i = o;
      }
      i && (r && (r += " "), r += i);
    }
  }
  return r;
}, Qo = Zo({
  key: "css"
}), Xo = Qo.css;
const Uf = /* @__PURE__ */ rr({
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
    const t = e, { as: r, ...n } = Hr(t), o = Qr(() => {
      var i, a, s, c, u, f, p, y, v, l, h, k;
      return Xo({
        width: (i = n.w) == null ? void 0 : i.value,
        height: (a = n.h) == null ? void 0 : a.value,
        backgroundColor: (s = n.bgColor) == null ? void 0 : s.value,
        backgroundImage: ((c = n.bgImg) == null ? void 0 : c.value) && `url("${(u = n.bgImg) == null ? void 0 : u.value}")`,
        padding: (f = n.p) == null ? void 0 : f.value,
        paddingTop: (p = n.pt) == null ? void 0 : p.value,
        paddingBottom: (y = n.pb) == null ? void 0 : y.value,
        "html[dir=ltr] &, &[dir=ltr]": {
          paddingLeft: (v = n.ps) == null ? void 0 : v.value,
          paddingRight: (l = n.pe) == null ? void 0 : l.value
        },
        "html[dir=rtl] &, &[dir=rtl]": {
          paddingLeft: (h = n.pe) == null ? void 0 : h.value,
          paddingRight: (k = n.ps) == null ? void 0 : k.value
        },
        body: {
          background: "red"
        }
      });
    });
    return (i, a) => ($e(), Xr(en(L(r)), {
      class: nr(o.value)
    }, {
      default: tn(() => [
        Qe(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ea(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ta() {
  this.__data__ = [], this.size = 0;
}
var ra = ta;
function na(e, t) {
  return e === t || e !== e && t !== t;
}
var qe = na, oa = qe;
function aa(e, t) {
  for (var r = e.length; r--; )
    if (oa(e[r][0], t))
      return r;
  return -1;
}
var Be = aa, ia = Be, sa = Array.prototype, ca = sa.splice;
function ua(e) {
  var t = this.__data__, r = ia(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : ca.call(t, r, 1), --this.size, !0;
}
var la = ua, fa = Be;
function pa(e) {
  var t = this.__data__, r = fa(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var da = pa, ha = Be;
function va(e) {
  return ha(this.__data__, e) > -1;
}
var ya = va, ga = Be;
function ba(e, t) {
  var r = this.__data__, n = ga(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var ma = ba, $a = ra, wa = la, _a = da, ka = ya, Oa = ma;
function ee(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ee.prototype.clear = $a;
ee.prototype.delete = wa;
ee.prototype.get = _a;
ee.prototype.has = ka;
ee.prototype.set = Oa;
var Fe = ee, Ea = Fe;
function xa() {
  this.__data__ = new Ea(), this.size = 0;
}
var Na = xa;
function ja(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Sa = ja;
function Aa(e) {
  return this.__data__.get(e);
}
var Ca = Aa;
function Da(e) {
  return this.__data__.has(e);
}
var za = Da, Pa = typeof me == "object" && me && me.Object === Object && me, Nr = Pa, Ia = Nr, Va = typeof self == "object" && self && self.Object === Object && self, Ta = Ia || Va || Function("return this")(), te = Ta, Ra = te, Ma = Ra.Symbol, jr = Ma, Rt = jr, Sr = Object.prototype, qa = Sr.hasOwnProperty, Ba = Sr.toString, se = Rt ? Rt.toStringTag : void 0;
function Fa(e) {
  var t = qa.call(e, se), r = e[se];
  try {
    e[se] = void 0;
    var n = !0;
  } catch {
  }
  var o = Ba.call(e);
  return n && (t ? e[se] = r : delete e[se]), o;
}
var Ga = Fa, Ya = Object.prototype, Ua = Ya.toString;
function Wa(e) {
  return Ua.call(e);
}
var La = Wa, Mt = jr, Ja = Ga, Ka = La, Za = "[object Null]", Ha = "[object Undefined]", qt = Mt ? Mt.toStringTag : void 0;
function Qa(e) {
  return e == null ? e === void 0 ? Ha : Za : qt && qt in Object(e) ? Ja(e) : Ka(e);
}
var Ge = Qa;
function Xa(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var U = Xa, ei = Ge, ti = U, ri = "[object AsyncFunction]", ni = "[object Function]", oi = "[object GeneratorFunction]", ai = "[object Proxy]";
function ii(e) {
  if (!ti(e))
    return !1;
  var t = ei(e);
  return t == ni || t == oi || t == ri || t == ai;
}
var dt = ii, si = te, ci = si["__core-js_shared__"], ui = ci, He = ui, Bt = function() {
  var e = /[^.]+$/.exec(He && He.keys && He.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function li(e) {
  return !!Bt && Bt in e;
}
var fi = li, pi = Function.prototype, di = pi.toString;
function hi(e) {
  if (e != null) {
    try {
      return di.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var vi = hi, yi = dt, gi = fi, bi = U, mi = vi, $i = /[\\^$.*+?()[\]{}|]/g, wi = /^\[object .+?Constructor\]$/, _i = Function.prototype, ki = Object.prototype, Oi = _i.toString, Ei = ki.hasOwnProperty, xi = RegExp(
  "^" + Oi.call(Ei).replace($i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ni(e) {
  if (!bi(e) || gi(e))
    return !1;
  var t = yi(e) ? xi : wi;
  return t.test(mi(e));
}
var ji = Ni;
function Si(e, t) {
  return e == null ? void 0 : e[t];
}
var Ai = Si, Ci = ji, Di = Ai;
function zi(e, t) {
  var r = Di(e, t);
  return Ci(r) ? r : void 0;
}
var ht = zi, Pi = ht, Ii = te, Vi = Pi(Ii, "Map"), Ar = Vi, Ti = ht, Ri = Ti(Object, "create"), Ye = Ri, Ft = Ye;
function Mi() {
  this.__data__ = Ft ? Ft(null) : {}, this.size = 0;
}
var qi = Mi;
function Bi(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Fi = Bi, Gi = Ye, Yi = "__lodash_hash_undefined__", Ui = Object.prototype, Wi = Ui.hasOwnProperty;
function Li(e) {
  var t = this.__data__;
  if (Gi) {
    var r = t[e];
    return r === Yi ? void 0 : r;
  }
  return Wi.call(t, e) ? t[e] : void 0;
}
var Ji = Li, Ki = Ye, Zi = Object.prototype, Hi = Zi.hasOwnProperty;
function Qi(e) {
  var t = this.__data__;
  return Ki ? t[e] !== void 0 : Hi.call(t, e);
}
var Xi = Qi, es = Ye, ts = "__lodash_hash_undefined__";
function rs(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = es && t === void 0 ? ts : t, this;
}
var ns = rs, os = qi, as = Fi, is = Ji, ss = Xi, cs = ns;
function re(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
re.prototype.clear = os;
re.prototype.delete = as;
re.prototype.get = is;
re.prototype.has = ss;
re.prototype.set = cs;
var us = re, Gt = us, ls = Fe, fs = Ar;
function ps() {
  this.size = 0, this.__data__ = {
    hash: new Gt(),
    map: new (fs || ls)(),
    string: new Gt()
  };
}
var ds = ps;
function hs(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var vs = hs, ys = vs;
function gs(e, t) {
  var r = e.__data__;
  return ys(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Ue = gs, bs = Ue;
function ms(e) {
  var t = bs(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var $s = ms, ws = Ue;
function _s(e) {
  return ws(this, e).get(e);
}
var ks = _s, Os = Ue;
function Es(e) {
  return Os(this, e).has(e);
}
var xs = Es, Ns = Ue;
function js(e, t) {
  var r = Ns(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Ss = js, As = ds, Cs = $s, Ds = ks, zs = xs, Ps = Ss;
function ne(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ne.prototype.clear = As;
ne.prototype.delete = Cs;
ne.prototype.get = Ds;
ne.prototype.has = zs;
ne.prototype.set = Ps;
var Is = ne, Vs = Fe, Ts = Ar, Rs = Is, Ms = 200;
function qs(e, t) {
  var r = this.__data__;
  if (r instanceof Vs) {
    var n = r.__data__;
    if (!Ts || n.length < Ms - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Rs(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Bs = qs, Fs = Fe, Gs = Na, Ys = Sa, Us = Ca, Ws = za, Ls = Bs;
function oe(e) {
  var t = this.__data__ = new Fs(e);
  this.size = t.size;
}
oe.prototype.clear = Gs;
oe.prototype.delete = Ys;
oe.prototype.get = Us;
oe.prototype.has = Ws;
oe.prototype.set = Ls;
var Js = oe, Ks = ht, Zs = function() {
  try {
    var e = Ks(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Cr = Zs, Yt = Cr;
function Hs(e, t, r) {
  t == "__proto__" && Yt ? Yt(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var vt = Hs, Qs = vt, Xs = qe;
function ec(e, t, r) {
  (r !== void 0 && !Xs(e[t], r) || r === void 0 && !(t in e)) && Qs(e, t, r);
}
var Dr = ec;
function tc(e) {
  return function(t, r, n) {
    for (var o = -1, i = Object(t), a = n(t), s = a.length; s--; ) {
      var c = a[e ? s : ++o];
      if (r(i[c], c, i) === !1)
        break;
    }
    return t;
  };
}
var rc = tc, nc = rc, oc = nc(), ac = oc, Ce = { exports: {} };
Ce.exports;
(function(e, t) {
  var r = te, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, i = o && o.exports === n, a = i ? r.Buffer : void 0, s = a ? a.allocUnsafe : void 0;
  function c(u, f) {
    if (f)
      return u.slice();
    var p = u.length, y = s ? s(p) : new u.constructor(p);
    return u.copy(y), y;
  }
  e.exports = c;
})(Ce, Ce.exports);
var ic = Ce.exports, sc = te, cc = sc.Uint8Array, uc = cc, Ut = uc;
function lc(e) {
  var t = new e.constructor(e.byteLength);
  return new Ut(t).set(new Ut(e)), t;
}
var fc = lc, pc = fc;
function dc(e, t) {
  var r = t ? pc(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var hc = dc;
function vc(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var yc = vc, gc = U, Wt = Object.create, bc = function() {
  function e() {
  }
  return function(t) {
    if (!gc(t))
      return {};
    if (Wt)
      return Wt(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), mc = bc;
function $c(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var wc = $c, _c = wc, kc = _c(Object.getPrototypeOf, Object), zr = kc, Oc = Object.prototype;
function Ec(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Oc;
  return e === r;
}
var Pr = Ec, xc = mc, Nc = zr, jc = Pr;
function Sc(e) {
  return typeof e.constructor == "function" && !jc(e) ? xc(Nc(e)) : {};
}
var Ac = Sc;
function Cc(e) {
  return e != null && typeof e == "object";
}
var ye = Cc, Dc = Ge, zc = ye, Pc = "[object Arguments]";
function Ic(e) {
  return zc(e) && Dc(e) == Pc;
}
var Vc = Ic, Lt = Vc, Tc = ye, Ir = Object.prototype, Rc = Ir.hasOwnProperty, Mc = Ir.propertyIsEnumerable, qc = Lt(function() {
  return arguments;
}()) ? Lt : function(e) {
  return Tc(e) && Rc.call(e, "callee") && !Mc.call(e, "callee");
}, Vr = qc, Bc = Array.isArray, Tr = Bc, Fc = 9007199254740991;
function Gc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Fc;
}
var Rr = Gc, Yc = dt, Uc = Rr;
function Wc(e) {
  return e != null && Uc(e.length) && !Yc(e);
}
var yt = Wc, Lc = yt, Jc = ye;
function Kc(e) {
  return Jc(e) && Lc(e);
}
var Zc = Kc, De = { exports: {} };
function Hc() {
  return !1;
}
var Qc = Hc;
De.exports;
(function(e, t) {
  var r = te, n = Qc, o = t && !t.nodeType && t, i = o && !0 && e && !e.nodeType && e, a = i && i.exports === o, s = a ? r.Buffer : void 0, c = s ? s.isBuffer : void 0, u = c || n;
  e.exports = u;
})(De, De.exports);
var Mr = De.exports, Xc = Ge, eu = zr, tu = ye, ru = "[object Object]", nu = Function.prototype, ou = Object.prototype, qr = nu.toString, au = ou.hasOwnProperty, iu = qr.call(Object);
function su(e) {
  if (!tu(e) || Xc(e) != ru)
    return !1;
  var t = eu(e);
  if (t === null)
    return !0;
  var r = au.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && qr.call(r) == iu;
}
var cu = su, uu = Ge, lu = Rr, fu = ye, pu = "[object Arguments]", du = "[object Array]", hu = "[object Boolean]", vu = "[object Date]", yu = "[object Error]", gu = "[object Function]", bu = "[object Map]", mu = "[object Number]", $u = "[object Object]", wu = "[object RegExp]", _u = "[object Set]", ku = "[object String]", Ou = "[object WeakMap]", Eu = "[object ArrayBuffer]", xu = "[object DataView]", Nu = "[object Float32Array]", ju = "[object Float64Array]", Su = "[object Int8Array]", Au = "[object Int16Array]", Cu = "[object Int32Array]", Du = "[object Uint8Array]", zu = "[object Uint8ClampedArray]", Pu = "[object Uint16Array]", Iu = "[object Uint32Array]", O = {};
O[Nu] = O[ju] = O[Su] = O[Au] = O[Cu] = O[Du] = O[zu] = O[Pu] = O[Iu] = !0;
O[pu] = O[du] = O[Eu] = O[hu] = O[xu] = O[vu] = O[yu] = O[gu] = O[bu] = O[mu] = O[$u] = O[wu] = O[_u] = O[ku] = O[Ou] = !1;
function Vu(e) {
  return fu(e) && lu(e.length) && !!O[uu(e)];
}
var Tu = Vu;
function Ru(e) {
  return function(t) {
    return e(t);
  };
}
var Mu = Ru, ze = { exports: {} };
ze.exports;
(function(e, t) {
  var r = Nr, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, i = o && o.exports === n, a = i && r.process, s = function() {
    try {
      var c = o && o.require && o.require("util").types;
      return c || a && a.binding && a.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(ze, ze.exports);
var qu = ze.exports, Bu = Tu, Fu = Mu, Jt = qu, Kt = Jt && Jt.isTypedArray, Gu = Kt ? Fu(Kt) : Bu, Br = Gu;
function Yu(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Fr = Yu, Uu = vt, Wu = qe, Lu = Object.prototype, Ju = Lu.hasOwnProperty;
function Ku(e, t, r) {
  var n = e[t];
  (!(Ju.call(e, t) && Wu(n, r)) || r === void 0 && !(t in e)) && Uu(e, t, r);
}
var Zu = Ku, Hu = Zu, Qu = vt;
function Xu(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var s = t[i], c = n ? n(r[s], e[s], s, r, e) : void 0;
    c === void 0 && (c = e[s]), o ? Qu(r, s, c) : Hu(r, s, c);
  }
  return r;
}
var el = Xu;
function tl(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var rl = tl, nl = 9007199254740991, ol = /^(?:0|[1-9]\d*)$/;
function al(e, t) {
  var r = typeof e;
  return t = t ?? nl, !!t && (r == "number" || r != "symbol" && ol.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Gr = al, il = rl, sl = Vr, cl = Tr, ul = Mr, ll = Gr, fl = Br, pl = Object.prototype, dl = pl.hasOwnProperty;
function hl(e, t) {
  var r = cl(e), n = !r && sl(e), o = !r && !n && ul(e), i = !r && !n && !o && fl(e), a = r || n || o || i, s = a ? il(e.length, String) : [], c = s.length;
  for (var u in e)
    (t || dl.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    ll(u, c))) && s.push(u);
  return s;
}
var vl = hl;
function yl(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var gl = yl, bl = U, ml = Pr, $l = gl, wl = Object.prototype, _l = wl.hasOwnProperty;
function kl(e) {
  if (!bl(e))
    return $l(e);
  var t = ml(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !_l.call(e, n)) || r.push(n);
  return r;
}
var Ol = kl, El = vl, xl = Ol, Nl = yt;
function jl(e) {
  return Nl(e) ? El(e, !0) : xl(e);
}
var Yr = jl, Sl = el, Al = Yr;
function Cl(e) {
  return Sl(e, Al(e));
}
var Dl = Cl, Zt = Dr, zl = ic, Pl = hc, Il = yc, Vl = Ac, Ht = Vr, Qt = Tr, Tl = Zc, Rl = Mr, Ml = dt, ql = U, Bl = cu, Fl = Br, Xt = Fr, Gl = Dl;
function Yl(e, t, r, n, o, i, a) {
  var s = Xt(e, r), c = Xt(t, r), u = a.get(c);
  if (u) {
    Zt(e, r, u);
    return;
  }
  var f = i ? i(s, c, r + "", e, t, a) : void 0, p = f === void 0;
  if (p) {
    var y = Qt(c), v = !y && Rl(c), l = !y && !v && Fl(c);
    f = c, y || v || l ? Qt(s) ? f = s : Tl(s) ? f = Il(s) : v ? (p = !1, f = zl(c, !0)) : l ? (p = !1, f = Pl(c, !0)) : f = [] : Bl(c) || Ht(c) ? (f = s, Ht(s) ? f = Gl(s) : (!ql(s) || Ml(s)) && (f = Vl(c))) : p = !1;
  }
  p && (a.set(c, f), o(f, c, n, i, a), a.delete(c)), Zt(e, r, f);
}
var Ul = Yl, Wl = Js, Ll = Dr, Jl = ac, Kl = Ul, Zl = U, Hl = Yr, Ql = Fr;
function Ur(e, t, r, n, o) {
  e !== t && Jl(t, function(i, a) {
    if (o || (o = new Wl()), Zl(i))
      Kl(e, t, a, r, Ur, n, o);
    else {
      var s = n ? n(Ql(e, a), i, a + "", e, t, o) : void 0;
      s === void 0 && (s = i), Ll(e, a, s);
    }
  }, Hl);
}
var Xl = Ur;
function ef(e) {
  return e;
}
var Wr = ef;
function tf(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var rf = tf, nf = rf, er = Math.max;
function of(e, t, r) {
  return t = er(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, i = er(n.length - t, 0), a = Array(i); ++o < i; )
      a[o] = n[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = n[o];
    return s[t] = r(a), nf(e, this, s);
  };
}
var af = of;
function sf(e) {
  return function() {
    return e;
  };
}
var cf = sf, uf = cf, tr = Cr, lf = Wr, ff = tr ? function(e, t) {
  return tr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: uf(t),
    writable: !0
  });
} : lf, pf = ff, df = 800, hf = 16, vf = Date.now;
function yf(e) {
  var t = 0, r = 0;
  return function() {
    var n = vf(), o = hf - (n - r);
    if (r = n, o > 0) {
      if (++t >= df)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var gf = yf, bf = pf, mf = gf, $f = mf(bf), wf = $f, _f = Wr, kf = af, Of = wf;
function Ef(e, t) {
  return Of(kf(e, t, _f), e + "");
}
var xf = Ef, Nf = qe, jf = yt, Sf = Gr, Af = U;
function Cf(e, t, r) {
  if (!Af(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? jf(r) && Sf(t, r.length) : n == "string" && t in r) ? Nf(r[t], e) : !1;
}
var Df = Cf, zf = xf, Pf = Df;
function If(e) {
  return zf(function(t, r) {
    var n = -1, o = r.length, i = o > 1 ? r[o - 1] : void 0, a = o > 2 ? r[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (o--, i) : void 0, a && Pf(r[0], r[1], a) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++n < o; ) {
      var s = r[n];
      s && e(t, s, n, i);
    }
    return t;
  });
}
var Vf = If, Tf = Xl, Rf = Vf, Mf = Rf(function(e, t, r) {
  Tf(e, t, r);
}), qf = Mf;
const Bf = /* @__PURE__ */ ea(qf), Ff = (e = {}) => Bf({
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
}, e), Wf = {
  install(e, t = {}) {
    e.provide("mythril-theme", {
      button: Ff(t.button)
    });
  }
};
export {
  Uf as MBox,
  Yf as MButton,
  Wf as MythrilPlugin
};
