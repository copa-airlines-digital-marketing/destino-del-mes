(function (p, x) { typeof exports == "object" && typeof module < "u" ? module.exports = x() : typeof define == "function" && define.amd ? define(x) : (p = typeof globalThis < "u" ? globalThis : p || self, p.TopicCard = x()) })(this, function () {
    "use strict"; function p() { } function x(t) { return t() } function X() { return Object.create(null) } function N(t) { t.forEach(x) } function D(t) { return typeof t == "function" } function et(t, e) { return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function" } let j; function Y(t, e) { return j || (j = document.createElement("a")), j.href = e, t === j.href } function it(t) { return Object.keys(t).length === 0 } let M = !1; function nt() { M = !0 } function rt() { M = !1 } function lt(t, e, i, l) { for (; t < e;) { const c = t + (e - t >> 1); i(c) <= l ? t = c + 1 : e = c } return t } function ct(t) { if (t.hydrate_init) return; t.hydrate_init = !0; let e = t.childNodes; if (t.nodeName === "HEAD") { const a = []; for (let n = 0; n < e.length; n++) { const f = e[n]; f.claim_order !== void 0 && a.push(f) } e = a } const i = new Int32Array(e.length + 1), l = new Int32Array(e.length); i[0] = -1; let c = 0; for (let a = 0; a < e.length; a++) { const n = e[a].claim_order, f = (c > 0 && e[i[c]].claim_order <= n ? c + 1 : lt(1, c, v => e[i[v]].claim_order, n)) - 1; l[a] = i[f] + 1; const d = f + 1; i[d] = a, c = Math.max(d, c) } const s = [], r = []; let o = e.length - 1; for (let a = i[c] + 1; a != 0; a = l[a - 1]) { for (s.push(e[a - 1]); o >= a; o--)r.push(e[o]); o-- } for (; o >= 0; o--)r.push(e[o]); s.reverse(), r.sort((a, n) => a.claim_order - n.claim_order); for (let a = 0, n = 0; a < r.length; a++) { for (; n < s.length && r[a].claim_order >= s[n].claim_order;)n++; const f = n < s.length ? s[n] : null; t.insertBefore(r[a], f) } } function m(t, e) { if (M) { for (ct(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;)t.actual_end_child = t.actual_end_child.nextSibling; e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e) } function L(t, e, i) { M && !i ? m(t, e) : (e.parentNode !== t || e.nextSibling != i) && t.insertBefore(e, i || null) } function b(t) { t.parentNode && t.parentNode.removeChild(t) } function w(t) { return document.createElement(t) } function T(t) { return document.createTextNode(t) } function V() { return T(" ") } function _(t, e, i) { i == null ? t.removeAttribute(e) : t.getAttribute(e) !== i && t.setAttribute(e, i) } function k(t) { return Array.from(t.childNodes) } function at(t) { t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 }) } function z(t, e, i, l, c = !1) { at(t); const s = (() => { for (let r = t.claim_info.last_index; r < t.length; r++) { const o = t[r]; if (e(o)) { const a = i(o); return a === void 0 ? t.splice(r, 1) : t[r] = a, c || (t.claim_info.last_index = r), o } } for (let r = t.claim_info.last_index - 1; r >= 0; r--) { const o = t[r]; if (e(o)) { const a = i(o); return a === void 0 ? t.splice(r, 1) : t[r] = a, c ? a === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = r, o } } return l() })(); return s.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, s } function ot(t, e, i, l) { return z(t, c => c.nodeName === e, c => { const s = []; for (let r = 0; r < c.attributes.length; r++) { const o = c.attributes[r]; i[o.name] || s.push(o.name) } s.forEach(r => c.removeAttribute(r)) }, () => l(e)) } function $(t, e, i) { return ot(t, e, i, w) } function H(t, e) { return z(t, i => i.nodeType === 3, i => { const l = "" + e; if (i.data.startsWith(l)) { if (i.data.length !== l.length) return i.splitText(l.length) } else i.data = l }, () => T(e), !0) } function q(t) { return H(t, " ") } function B(t, e) { e = "" + e, t.wholeText !== e && (t.data = e) } function st(t) { const e = {}; for (const i of t) e[i.name] = i.value; return e } let O; function S(t) { O = t } const E = [], W = [], I = [], F = [], ut = Promise.resolve(); let G = !1; function ft() { G || (G = !0, ut.then(y)) } function P(t) { I.push(t) } const R = new Set; let A = 0; function y() { if (A !== 0) return; const t = O; do { try { for (; A < E.length;) { const e = E[A]; A++, S(e), dt(e.$$) } } catch (e) { throw E.length = 0, A = 0, e } for (S(null), E.length = 0, A = 0; W.length;)W.pop()(); for (let e = 0; e < I.length; e += 1) { const i = I[e]; R.has(i) || (R.add(i), i()) } I.length = 0 } while (E.length); for (; F.length;)F.pop()(); G = !1, R.clear(), S(t) } function dt(t) { if (t.fragment !== null) { t.update(), N(t.before_update); const e = t.dirty; t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(P) } } const ht = new Set; function _t(t, e) { t && t.i && (ht.delete(t), t.i(e)) } function mt(t, e, i, l) { const { fragment: c, after_update: s } = t.$$; c && c.m(e, i), l || P(() => { const r = t.$$.on_mount.map(x).filter(D); t.$$.on_destroy ? t.$$.on_destroy.push(...r) : N(r), t.$$.on_mount = [] }), s.forEach(P) } function gt(t, e) { const i = t.$$; i.fragment !== null && (N(i.on_destroy), i.fragment && i.fragment.d(e), i.on_destroy = i.fragment = null, i.ctx = []) } function pt(t, e) { t.$$.dirty[0] === -1 && (E.push(t), ft(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31 } function bt(t, e, i, l, c, s, r, o = [-1]) { const a = O; S(t); const n = t.$$ = { fragment: null, ctx: [], props: s, update: p, not_equal: c, bound: X(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(e.context || (a ? a.$$.context : [])), callbacks: X(), dirty: o, skip_bound: !1, root: e.target || a.$$.root }; r && r(n.root); let f = !1; if (n.ctx = i ? i(t, e.props || {}, (d, v, ...u) => { const h = u.length ? u[0] : v; return n.ctx && c(n.ctx[d], n.ctx[d] = h) && (!n.skip_bound && n.bound[d] && n.bound[d](h), f && pt(t, d)), v }) : [], n.update(), f = !0, N(n.before_update), n.fragment = l ? l(n.ctx) : !1, e.target) { if (e.hydrate) { nt(); const d = k(e.target); n.fragment && n.fragment.l(d), d.forEach(b) } else n.fragment && n.fragment.c(); e.intro && _t(t.$$.fragment), mt(t, e.target, e.anchor, e.customElement), rt(), y() } S(a) } let J; typeof HTMLElement == "function" && (J = class extends HTMLElement { constructor() { super(), this.attachShadow({ mode: "open" }) } connectedCallback() { const { on_mount: t } = this.$$; this.$$.on_disconnect = t.map(x).filter(D); for (const e in this.$$.slotted) this.appendChild(this.$$.slotted[e]) } attributeChangedCallback(t, e, i) { this[t] = i } disconnectedCallback() { N(this.$$.on_disconnect) } $destroy() { gt(this, 1), this.$destroy = p } $on(t, e) { if (!D(e)) return p; const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []); return i.push(e), () => { const l = i.indexOf(e); l !== -1 && i.splice(l, 1) } } $set(t) { this.$$set && !it(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1) } }); function K(t) { let e, i; return { c() { e = w("a"), i = T(t[4]), this.h() }, l(l) { e = $(l, "A", { class: !0, href: !0 }); var c = k(e); i = H(c, t[4]), c.forEach(b), this.h() }, h() { _(e, "class", "topic-card__link"), _(e, "href", t[5]) }, m(l, c) { L(l, e, c), m(e, i) }, p(l, c) { c & 16 && B(i, l[4]), c & 32 && _(e, "href", l[5]) }, d(l) { l && b(e) } } } function yt(t) { let e, i, l, c, s, r, o, a, n, f, d, v, u = t[4] != null && K(t); return { c() { e = w("div"), i = w("div"), l = w("img"), s = V(), r = w("div"), o = w("h3"), a = T(t[2]), n = V(), f = w("p"), d = T(t[3]), v = V(), u && u.c(), this.c = p, this.h() }, l(h) { e = $(h, "DIV", { class: !0 }); var g = k(e); i = $(g, "DIV", { class: !0 }); var Z = k(i); l = $(Z, "IMG", { class: !0, src: !0, alt: !0 }), Z.forEach(b), s = q(g), r = $(g, "DIV", { class: !0 }); var C = k(r); o = $(C, "H3", { class: !0 }); var U = k(o); a = H(U, t[2]), U.forEach(b), n = q(C), f = $(C, "P", { class: !0 }); var tt = k(f); d = H(tt, t[3]), tt.forEach(b), v = q(C), u && u.l(C), C.forEach(b), g.forEach(b), this.h() }, h() { _(l, "class", "topic-card__img"), Y(l.src, c = t[0]) || _(l, "src", c), _(l, "alt", t[1]), _(i, "class", "topic-card__img-window"), _(o, "class", "topic-card__title"), _(f, "class", "topic-card__desc"), _(r, "class", "topic-card__txt-container"), _(e, "class", "topic-card") }, m(h, g) { L(h, e, g), m(e, i), m(i, l), m(e, s), m(e, r), m(r, o), m(o, a), m(r, n), m(r, f), m(f, d), m(r, v), u && u.m(r, null) }, p(h, [g]) { g & 1 && !Y(l.src, c = h[0]) && _(l, "src", c), g & 2 && _(l, "alt", h[1]), g & 4 && B(a, h[2]), g & 8 && B(d, h[3]), h[4] != null ? u ? u.p(h, g) : (u = K(h), u.c(), u.m(r, null)) : u && (u.d(1), u = null) }, i: p, o: p, d(h) { h && b(e), u && u.d() } } } function wt(t, e, i) { let { imgurl: l } = e, { imgalt: c } = e, { title: s } = e, { desc: r } = e, { cta: o = void 0 } = e, { ctaurl: a = void 0 } = e; return t.$$set = n => { "imgurl" in n && i(0, l = n.imgurl), "imgalt" in n && i(1, c = n.imgalt), "title" in n && i(2, s = n.title), "desc" in n && i(3, r = n.desc), "cta" in n && i(4, o = n.cta), "ctaurl" in n && i(5, a = n.ctaurl) }, [l, c, s, r, o, a] } class Q extends J {
        constructor(e) {
            super(), this.shadowRoot.innerHTML = `<style>.topic-card{width:100%;overflow:hidden;border-radius:1rem;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(var(--color-grey-300) / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(var(--color-grey-0) / var(--tw-bg-opacity))
}.topic-card__img-window{position:relative;height:136px;width:100%;overflow:hidden
}@media(min-width: 1367px){.topic-card__img-window{height:176px
    }}.topic-card__img{position:absolute;top:50%;left:-50%;height:auto;width:100%;--tw-translate-y:-50%;--tw-translate-x:50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}.topic-card__txt-container{padding:24px
}@media(min-width: 1367px){.topic-card__txt-container{padding-top:32px
    }}.topic-card__title{margin-bottom:8px;font-family:Gilroy, Helvetica, Arial, sans-serif;font-weight:700;--tw-text-opacity:1;color:rgb(var(--color-primary) / var(--tw-text-opacity))
}.topic-card__desc{font-size:0.875rem;line-height:1.25rem;letter-spacing:0rem;--tw-text-opacity:1;color:rgb(var(--color-grey-600) / var(--tw-text-opacity))
}.topic-card__link{margin-top:24px;margin-bottom:24px;--tw-text-opacity:1;color:rgb(var(--color-primary) / var(--tw-text-opacity))
}</style>`, bt(this, { target: this.shadowRoot, props: st(this.attributes), customElement: !0 }, wt, yt, et, { imgurl: 0, imgalt: 1, title: 2, desc: 3, cta: 4, ctaurl: 5 }, null), e && (e.target && L(e.target, this, e.anchor), e.props && (this.$set(e.props), y()))
        } static get observedAttributes() { return ["imgurl", "imgalt", "title", "desc", "cta", "ctaurl"] } get imgurl() { return this.$$.ctx[0] } set imgurl(e) { this.$$set({ imgurl: e }), y() } get imgalt() { return this.$$.ctx[1] } set imgalt(e) { this.$$set({ imgalt: e }), y() } get title() { return this.$$.ctx[2] } set title(e) { this.$$set({ title: e }), y() } get desc() { return this.$$.ctx[3] } set desc(e) { this.$$set({ desc: e }), y() } get cta() { return this.$$.ctx[4] } set cta(e) { this.$$set({ cta: e }), y() } get ctaurl() { return this.$$.ctx[5] } set ctaurl(e) { this.$$set({ ctaurl: e }), y() }
    } return customElements.define("topic-card", Q), Q
});
//# sourceMappingURL=topic-card.js.map
